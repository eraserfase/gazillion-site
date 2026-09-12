/* BEEFY silent preview and deliberate sound playback. */
(function () {
  "use strict";
  var video = document.getElementById("demo-new");
  if (!video || (!video.dataset.mp4 && (!video.dataset.webm || !video.dataset.hevc))) return;
  var player = video.closest(".player");
  var badge = player && player.querySelector(".play-badge");
  if (!badge) return;
  var label = badge.querySelector(".say");
  var toggle = player.querySelector(".demo-toggle");
  var originalLabel = label ? label.textContent : "sound on";
  var originalAria = badge.getAttribute("aria-label");
  var status = player.querySelector(".demo-status") ||
    (video.closest(".beefy-demo") || player.parentElement).querySelector(".demo-status");
  var slide = video.closest(".slide");
  var motion = matchMedia("(prefers-reduced-motion: reduce)");
  var mp4 = video.dataset.mp4, webm = video.dataset.webm, hevc = video.dataset.hevc;
  var selected = mp4 || webm, initialized = false, mode = "preview";
  var inView = true, failed = false, switching = false, generation = 0;

  // Generic HEVC support may decode the color layer while discarding alpha.
  // Require the browser to preserve the alpha request in its confirmation.
  async function supportsHEVCAlpha() {
    if (!navigator.mediaCapabilities || !navigator.mediaCapabilities.decodingInfo) return false;
    try {
      var info = await navigator.mediaCapabilities.decodingInfo({
        type: "file",
        video: {contentType: 'video/mp4; codecs="hvc1.1.6.L120.B0"',
          width: 720, height: 1280, bitrate: 6000000, framerate: 30, alphaChannel: true}
      });
      var confirmed = info.configuration || info.supportedConfiguration;
      return info.supported === true && confirmed && confirmed.video &&
        confirmed.video.alphaChannel === true;
    } catch (_) { return false; }
  }

  function canPreview() {
    return !motion.matches && !document.hidden && inView &&
      (slide ? slide.classList.contains("is-active") : !video.hasAttribute("data-lazy"));
  }
  function clearFailure() {
    failed = false;
    player.classList.remove("has-media-error");
    if (label) label.textContent = originalLabel;
    if (originalAria === null) badge.removeAttribute("aria-label");
    else badge.setAttribute("aria-label", originalAria);
    if (status) { status.hidden = true; status.textContent = ""; }
  }
  function setSource() {
    if (video.getAttribute("src") !== selected) {
      video.setAttribute("src", selected);
      video.load();
    } else if (video.error) video.load();
  }
  function unavailable() {
    if (failed) return;
    failed = true;
    generation++;
    video.pause();
    player.classList.remove("is-started");
    player.classList.add("has-media-error");
    if (label) label.textContent = "try again";
    badge.setAttribute("aria-label", "Video could not load. Retry the BEEFY demo with sound");
    if (status) {
      status.textContent = "The demo could not load. Try again.";
      status.hidden = false;
    }
    // Reload without a source to restore the poster instead of an error frame.
    video.removeAttribute("src");
    video.load();
    video.controls = false;
    video.dispatchEvent(new CustomEvent("gz-media-unavailable"));
  }
  function nudge() {
    if (failed || (mode === "preview" && !canPreview())) return;
    var ticket = ++generation;
    var pending = video.play();
    if (pending && pending.catch) pending.catch(function (error) {
      if (ticket !== generation || failed) return;
      if (video.error) recover();
      else if (error.name !== "AbortError" && mode === "full") {
        // A fresh gesture may be needed after an asynchronous codec fallback.
        // Keep the button available; permission denial is not a media error.
        player.classList.remove("is-started");
      }
    });
  }
  function recover() {
    var error = video.error;
    if (!error || failed || switching) return;
    if (hevc && selected === hevc && (error.code === 3 || error.code === 4) &&
        video.canPlayType('video/webm; codecs="vp9, opus"')) {
      switching = true;
      selected = webm;
      generation++;
      setSource();
      switching = false;
      // Keep the alternate for every subsequent preview and replay.
      nudge();
    } else unavailable();
  }
  function syncPreview() {
    if (!initialized || failed || mode !== "preview") return;
    if (canPreview()) { setSource(); nudge(); }
    else { generation++; video.pause(); }
  }
  function preview() {
    mode = "preview";
    player.classList.remove("is-started");
    video.controls = false;
    video.muted = true;
    video.loop = true;
    try { video.currentTime = 0; } catch (_) {}
    syncPreview();
  }

  video.controls = false;
  video.muted = true;
  video.loop = true;
  player.classList.add("is-ready");
  badge.addEventListener("click", function () {
    initialized = true;
    generation++;
    clearFailure();
    mode = "full";
    var carousel = video.closest(".carousel");
    if (carousel) carousel.querySelectorAll("video").forEach(function (other) {
      if (other !== video) other.pause();
    });
    video.muted = false;
    video.loop = false;
    video.controls = false;
    setSource();
    try { video.currentTime = 0; } catch (_) {}
    player.classList.add("is-started");
    nudge();
  });
  video.addEventListener("error", recover);
  function syncToggle() {
    if (!toggle) return;
    toggle.textContent = video.paused ? "Resume" : "Pause";
    toggle.setAttribute("aria-label", (video.paused ? "Resume" : "Pause") + " the BEEFY demo");
  }
  if (toggle) toggle.addEventListener("click", function () {
    if (video.paused) nudge();
    else { generation++; video.pause(); }
  });
  video.addEventListener("pause", syncToggle);
  video.addEventListener("playing", function () {
    if (failed) return;
    clearFailure();
    syncToggle();
    if (mode === "preview" && !canPreview()) video.pause();
  });
  video.addEventListener("ended", function () {
    originalLabel = "replay · sound on";
    originalAria = "Replay the BEEFY demo with sound from the beginning";
    preview();
    clearFailure();
  });
  document.addEventListener("visibilitychange", function () {
    if (document.hidden) { generation++; video.pause(); }
    else syncPreview();
  });
  if (motion.addEventListener) motion.addEventListener("change", syncPreview);
  if (slide && window.MutationObserver) new MutationObserver(function () {
    if (!slide.classList.contains("is-active")) { generation++; video.pause(); }
    else syncPreview();
  }).observe(slide, {attributes: true, attributeFilter: ["class"]});
  if (window.IntersectionObserver) new IntersectionObserver(function (entries) {
    inView = entries[0].isIntersecting;
    syncPreview();
  }, {threshold: 0}).observe(player);

  if (mp4) {
    initialized = true;
    preview();
    return;
  }
  supportsHEVCAlpha().then(function (supported) {
    // An early click already chose VP9 synchronously under its user gesture.
    if (initialized) return;
    initialized = true;
    selected = supported ? hevc : webm;
    preview();
  });
})();
