/* Silent previews and deliberate sound, with one alternate-codec attempt. */
(function () {
  "use strict";
  var reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  function wire(v) {
    var player = v.closest(".player"), badge = player && player.querySelector(".play-badge");
    if (!badge) return;
    var label = badge.querySelector(".say"), originalLabel = label && label.textContent;
    var originalAria = badge.getAttribute("aria-label");
    var PREVIEW = v.getAttribute("src"), FULL = v.getAttribute("data-full") || PREVIEW;
    var FALLBACK = v.getAttribute("data-fallback"), alternate = false;
    var wantsPlayback = false, switching = false, resumePosition = 0;
    v.removeAttribute("controls");
    player.classList.add("is-ready");

    function clearFailure() {
      if (label) label.textContent = originalLabel;
      if (originalAria === null) badge.removeAttribute("aria-label");
      else badge.setAttribute("aria-label", originalAria);
      player.classList.remove("has-media-error");
    }
    function unavailable() {
      // A failed source must not strand the visitor behind inert controls.
      wantsPlayback = false;
      player.classList.remove("is-started");
      player.classList.add("has-media-error");
      v.controls = true;
      if (label) label.textContent = "TRY AGAIN";
      badge.setAttribute("aria-label", "Video could not load. Retry playback");
      v.dispatchEvent(new CustomEvent("gz-media-unavailable"));
    }
    function source(url) {
      // Keep the successful alternate through ended -> preview -> replay.
      if (alternate && url === PREVIEW && FULL === PREVIEW) url = FALLBACK;
      if (v.getAttribute("src") !== url) { v.setAttribute("src", url); v.load(); }
    }
    function nudge() {
      wantsPlayback = true;
      var requestedSource = v.getAttribute("src"), p = v.play();
      if (p && p.catch) p.catch(function (error) {
        if (requestedSource !== v.getAttribute("src")) return;
        if (v.error) recover();
        else if (error.name !== "AbortError" && !v.muted) {
          // Autoplay permission can expire when switching codecs. A fresh
          // click remains available; permission denial is not a media error.
          player.classList.remove("is-started");
        }
      });
    }
    function recover() {
      var error = v.error;
      if (!error) return;
      if (!alternate && FALLBACK && FULL === PREVIEW &&
          (error.code === 3 || error.code === 4) && v.canPlayType('video/webm; codecs="vp9, opus"')) {
        alternate = true;
        switching = true;
        resumePosition = Number.isFinite(v.currentTime) ? v.currentTime : 0;
        var resume = wantsPlayback;
        source(PREVIEW);
        if (resume) nudge();
      } else if (!player.classList.contains("has-media-error")) unavailable();
    }
    v.addEventListener("error", recover);
    v.addEventListener("loadedmetadata", function () {
      if (!switching) return;
      if (resumePosition > 0 && Number.isFinite(v.duration)) {
        try { v.currentTime = Math.min(resumePosition, Math.max(0, v.duration - 0.01)); } catch (e) {}
      }
      switching = false;
    });
    v.addEventListener("play", function () { wantsPlayback = true; });
    v.addEventListener("pause", function () { if (!v.error && !switching && v.paused) wantsPlayback = false; });
    v.addEventListener("playing", clearFailure);

    function preview() {
      player.classList.remove("is-started");
      v.controls = false; v.muted = true; v.loop = true;
      source(PREVIEW);
      try { v.currentTime = 0; } catch (e) {}
      var slide = v.closest(".slide");
      if (reduced) { wantsPlayback = false; v.autoplay = false; v.pause(); }
      else if (slide ? slide.classList.contains("is-active") : !v.hasAttribute("data-lazy")) nudge();
      else { wantsPlayback = false; v.pause(); }
    }
    preview();
    if (v.error) recover();

    badge.addEventListener("click", function () {
      var carousel = v.closest(".carousel");
      if (carousel) carousel.querySelectorAll("video").forEach(function (other) { if (other !== v) other.pause(); });
      clearFailure();
      v.muted = false; v.loop = false; v.controls = true;
      source(FULL);
      if (v.error) v.load();
      try { v.currentTime = 0; } catch (e) {}
      player.classList.add("is-started");
      nudge();
    });
    v.addEventListener("ended", preview);
  }
  document.querySelectorAll(".player video").forEach(wire);
})();
