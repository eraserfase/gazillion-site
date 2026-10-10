(() => {
  'use strict';
  const video = document.querySelector('#demo');
  const overlay = document.querySelector('.audition-overlay');
  const label = overlay.querySelector('span');
  const motion = document.querySelector('.motion-toggle');
  const panel = document.querySelector('.panel-button');
  const frame = document.querySelector('.instrument-view');
  const status = document.querySelector('.media-status');
  const dialog = document.querySelector('.interface-dialog');
  const dock = document.querySelector('.sticky-buy');
  const bankAudio = document.querySelector('#bank-audio');
  const bankStatus = document.querySelector('.bank-status');
  const previews = [...document.querySelectorAll('.preset-preview')];
  const liveVideo = document.querySelector('#demo-live');
  const liveButton = document.querySelector('.live-play');
  const liveStatus = document.querySelector('.live-status');
  let liveIntent = false, liveStarted = false, livePending = false, liveVisible = true, liveSerial = 0;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const codecPool = window.GZMediaSources?.create(video) || {
    sources: {mp4: {preview: video.dataset.previewMp4, demo: video.dataset.demoMp4}},
    immediate: 'mp4', ready: Promise.resolve('mp4'), next: () => null
  };
  const sources = codecPool.sources;
  let codec = codecPool.immediate, codecReady = false;
  let previewSource = sources[codec].preview, demoSource = sources[codec].demo;
  let primaryDemoSource = demoSource;
  function selectCodec(next) {
    codec = next;
    previewSource = sources[next].preview;
    primaryDemoSource = demoSource = sources[next].demo;
    codecReady = true;
  }
  const captions = document.querySelector('#demo-captions');
  // Exact copy of the approved website/beefy.html demo captions.
  const cues = [[0.25,2.78,"This is BEEFY,"],[2.78,4.68,"a loudness and saturation plugin"],[4.68,6.59,"by GAZILLION INDUSTRIES."],[6.62,8.52,"You may be wondering, what does it do?"],[8.55,10.22,"Well... I'll show you."],[10.25,15.77,"Here are some drums without BEEFY."],[15.92,21.6,"And now those same drums, with BEEFY."],[21.75,24.5,"Without BEEFY."],[24.65,28.97,"With BEEFY."],[29.18,32.03,"The soft clipper has automatic gain staging,"],[32.03,33.53,"which takes the guesswork"],[33.53,35.37,"out of making your drums slap,"],[35.37,36.29,"every time."],[36.32,43.1,"It sounds great on sub bass,"],[43.28,45.35,"and you can even put it on a master bus."],[45.38,47.23,"There is some serious processing"],[47.23,48.75,"going on under the hood."],[48.78,50.33,"But let's not get too concerned"],[50.33,51.82,"with how the sausage is made."],[51.85,53.58,"When your beats smack this hard,"],[53.58,55.43,"you don't ask too many questions."],[55.48,56.25,"BEEFY,"],[56.25,59.33,"by GAZILLION INDUSTRIES."]];
  let captionFrame = 0;

  function drawCaptions() {
    if (!captions) return;
    captions.hidden = mode !== 'demo' || videoFailed;
    const cue = !captions.hidden && cues.find(c => video.currentTime >= c[0] && video.currentTime < c[1]);
    const text = cue ? cue[2] : '';
    if (captions.textContent !== text) captions.textContent = text;
  }
  function captionLoop() {
    captionFrame = 0;
    drawCaptions();
    if (mode === 'demo' && !video.paused && !document.hidden) captionFrame = requestAnimationFrame(captionLoop);
  }
  function syncCaptions() {
    drawCaptions();
    if (!captionFrame && mode === 'demo' && !video.paused && !document.hidden) captionFrame = requestAnimationFrame(captionLoop);
  }
  const visiblePurchases = new Map();
  let mode = 'preview', visible = false, motionPaused = false, motionOptIn = false;
  let previewIntent = false, demoIntent = false, bankIntent = false;
  let videoFailed = false, activePreview = null, requestSerial = 0, pending = null;

  // A native poster can disappear after playback, even while a returning tab
  // has no painted video frame. Keep an independent image until a fresh frame.
  const poster = document.createElement('img');
  poster.className = 'video-poster-fallback';
  poster.src = video.poster || panel.querySelector('img').src;
  poster.alt = '';
  poster.setAttribute('aria-hidden', 'true');
  poster.draggable = false;
  video.after(poster);
  let freshFrame = false, frameSerial = 0, frameCallback = null;

  function showPoster() {
    freshFrame = false;
    ++frameSerial;
    if (frameCallback !== null && video.cancelVideoFrameCallback) {
      video.cancelVideoFrameCallback(frameCallback);
    }
    frameCallback = null;
    poster.hidden = videoFailed;
  }
  function awaitVideoFrame() {
    if (freshFrame || frameCallback !== null || document.hidden || !visible || videoFailed) return;
    const serial = frameSerial;
    function reveal() {
      if (serial !== frameSerial) return;
      frameCallback = null;
      if (document.hidden || !visible || videoFailed || video.readyState < 2) return;
      freshFrame = true;
      state();
    }
    if (video.requestVideoFrameCallback) {
      frameCallback = video.requestVideoFrameCallback(reveal);
    } else if (!video.paused && video.readyState >= 2) {
      // Older browsers cannot report a presented frame. Allow the ready video
      // two paint opportunities, and discard this attempt after any reset.
      requestAnimationFrame(() => requestAnimationFrame(reveal));
    }
  }

  // shared/tracking/landing-url.js owns attribution and checkout parameter carry.

  function inputFocused() {
    const element = document.activeElement;
    return !!element && (element.matches('input,textarea,select') || element.isContentEditable);
  }
  function syncDock() {
    const firstPurchase = document.querySelector('.buy');
    // The dock takes over only after the first purchase action has left above.
    // A partly visible in-page action still owns the purchase space.
    dock.hidden = !firstPurchase || firstPurchase.getBoundingClientRect().bottom > 0 ||
      visiblePurchases.size === 0 || dialog.open || inputFocused() || [...visiblePurchases.values()].some(Boolean);
  }
  let dockFrame = 0;
  function queueDockSync() {
    if (dockFrame) return;
    dockFrame = requestAnimationFrame(() => { dockFrame = 0; syncDock(); });
  }
  addEventListener('scroll', queueDockSync, {passive: true});
  addEventListener('resize', queueDockSync);
  function previewEligible() {
    return codecReady && mode === 'preview' && visible && !document.hidden && !dialog.open &&
      !motionPaused && (!reducedMotion.matches || motionOptIn) && !bankIntent && !liveIntent && !videoFailed;
  }
  function videoWanted() {
    if (!visible || document.hidden || dialog.open || bankIntent || liveIntent) return false;
    return mode === 'preview' ? previewIntent && previewEligible() : demoIntent;
  }
  function state() {
    drawCaptions();
    const audible = mode === 'demo';
    const active = !video.paused && !video.ended;
    const loading = pending === 'video';
    const action = !audible ? 'Play the BEEFY demo with sound from the beginning' :
      `${active || loading ? 'Pause' : video.ended ? 'Replay' : videoFailed ? 'Retry' : 'Resume'} the BEEFY demo`;
    label.textContent = !audible ? 'play demo' : active || loading ? 'pause demo' : video.ended ? 'replay demo' : videoFailed ? 'retry demo' : 'resume demo';
    overlay.setAttribute('aria-label', action);
    overlay.disabled = false;
    overlay.hidden = audible && active && !videoFailed && freshFrame;
    video.setAttribute('aria-label', action);
    frame.setAttribute('aria-busy', String(loading));
    video.hidden = videoFailed;
    panel.hidden = !videoFailed;
    poster.hidden = videoFailed || freshFrame;
    if (motion) {
      motion.hidden = audible || videoFailed;
      const motionAction = active || loading ? 'Pause interface motion' : 'Play interface motion';
      motion.setAttribute('aria-label', motionAction);
      motion.setAttribute('title', motionAction);
      motion.setAttribute('aria-pressed', String(active || loading));
      const path = motion.querySelector('path');
      if (path) path.setAttribute('d', active || loading ? 'M8 5v14M16 5v14' : 'm8 5 11 7-11 7Z');
    }
  }
  function previewState() {
    previews.forEach(button => {
      const playing = button === activePreview && bankIntent && (!bankAudio.paused || pending === 'bank');
      button.setAttribute('aria-pressed', String(playing));
      button.setAttribute('aria-label', `${playing ? 'Pause' : 'Play'} ${button.dataset.name}`);
      button.setAttribute('aria-busy', String(button === activePreview && pending === 'bank'));
      button.querySelector('path').setAttribute('d', playing ? 'M8 5v14M16 5v14' : 'm8 5 11 7-11 7Z');
    });
  }
  function interrupt() {
    ++requestSerial;
    pending = null;
    previewIntent = demoIntent = bankIntent = false;
    video.pause();
    bankAudio.pause();
    pauseLive();
    state();
    previewState();
  }
  function recoverVideo() {
    const error = video.error;
    if (!error || ![2,3,4].includes(error.code)) return false;
    const next = codecPool.next(codec);
    if (!next) return false;
    const resumeAt = Number.isFinite(video.currentTime) ? video.currentTime : 0;
    const resumeDemo = demoIntent;
    ++requestSerial;
    pending = null;
    selectCodec(next);
    videoFailed = false;
    showPoster();
    video.setAttribute('src', mode === 'demo' ? demoSource : previewSource);
    if (resumeAt > 0) {
      const expected = video.getAttribute('src');
      video.addEventListener('loadedmetadata', () => {
        if (video.getAttribute('src') !== expected) return;
        try { video.currentTime = Math.min(resumeAt, Math.max(0,video.duration-.05)); } catch (_) {}
      }, {once:true});
    }
    video.load();
    status.hidden = true;
    demoIntent = resumeDemo;
    if (mode === 'preview') syncPreview();
    else void playVideo();
    return true;
  }
  function recoverCompact() {
    if (mode !== 'demo' || video.getAttribute('src') !== video.dataset.demoCompact ||
        video.dataset.demoCompact === primaryDemoSource || ![2,3,4].includes(video.error?.code)) return false;
    const resumeAt = Number.isFinite(video.currentTime) ? video.currentTime : 0;
    ++requestSerial;
    pending = null;
    demoSource = primaryDemoSource;
    videoFailed = false;
    showPoster();
    video.setAttribute('src', demoSource);
    if (resumeAt > 0) {
      const expected = demoSource;
      video.addEventListener('loadedmetadata', () => {
        if (video.getAttribute('src') !== expected) return;
        try { video.currentTime = Math.min(resumeAt, Math.max(0,video.duration-.05)); } catch (_) {}
      }, {once:true});
    }
    video.load();
    status.hidden = true;
    void playVideo();
    return true;
  }
  function failVideo() {
    if (recoverCompact()) return;
    if (recoverVideo()) return;
    if (pending === 'video') { ++requestSerial; pending = null; }
    previewIntent = demoIntent = false;
    videoFailed = true;
    showPoster();
    video.pause();
    status.textContent = 'The demo could not play. Try again.';
    status.hidden = false;
    state();
  }
  async function playVideo() {
    if (videoWanted()) awaitVideoFrame();
    if (!videoWanted() || pending === 'video' || !video.paused) { state(); return; }
    const request = ++requestSerial;
    pending = 'video';
    status.hidden = true;
    state();
    try {
      await video.play();
      if (request !== requestSerial) {
        if (!videoWanted()) video.pause();
        return;
      }
    } catch (error) {
      if (request !== requestSerial) return;
      if (error.name === 'AbortError') return;
      if (video.error && (recoverCompact() || recoverVideo())) return;
      previewIntent = demoIntent = false;
      status.textContent = 'The demo could not play. Try again.';
      status.hidden = false;
      if (video.error) { videoFailed = true; video.pause(); }
    } finally {
      if (request === requestSerial) { pending = null; state(); }
    }
  }
  function syncPreview() {
    if (mode !== 'preview') return;
    previewIntent = previewEligible();
    if (previewIntent) { void playVideo(); return; }
    if (pending === 'video') { ++requestSerial; pending = null; }
    video.pause();
    state();
  }
  function returnToPreview() {
    if (mode !== 'demo' || !video.ended) return;
    if (pending === 'video') { ++requestSerial; pending = null; }
    previewIntent = demoIntent = false;
    mode = 'preview';
    videoFailed = false;
    video.muted = true;
    video.loop = true;
    video.controls = false;
    showPoster();
    video.setAttribute('src', previewSource);
    video.load();
    status.hidden = true;
    syncPreview();
  }
  function audition() {
    // An early user gesture chooses VP9 immediately and must not await capability checks.
    if (!codecReady) selectCodec(codecPool.immediate);
    const wasPlaying = mode === 'demo' && (demoIntent || !video.paused);
    const restart = mode !== 'demo' || video.ended;
    if (restart) demoSource = window.GZMediaRendition?.choose(video, primaryDemoSource, video.dataset.demoCompact) || primaryDemoSource;
    const retry = videoFailed;
    interrupt();
    if (wasPlaying && !retry) return;
    mode = 'demo';
    videoFailed = false;
    video.muted = false;
    video.loop = false;
    video.controls = false;
    if (video.getAttribute('src') !== demoSource) {
      showPoster();
      video.setAttribute('src', demoSource);
      video.load();
    } else if (retry) { showPoster(); video.load(); }
    if (restart) video.currentTime = 0;
    const view = frame.getBoundingClientRect();
    visible = view.bottom > 0 && view.top < window.innerHeight;
    demoIntent = true;
    void playVideo();
    requestAnimationFrame(() => {
      const bounds = frame.getBoundingClientRect();
      if (bounds.top < 12 || bounds.bottom + (window.matchMedia('(max-width:700px)').matches ? 136 : 64) > window.innerHeight) {
        window.scrollBy({top: bounds.top - 12, behavior: 'auto'});
      }
    });
  }
  video.addEventListener('click', audition);
  video.addEventListener('keydown', event => {
    if (event.key === ' ' || event.key === 'Enter') { event.preventDefault(); audition(); }
  });
  overlay.addEventListener('click', audition);
  motion?.addEventListener('click', () => {
    const pause = previewIntent || !video.paused;
    interrupt();
    motionPaused = pause;
    if (!pause) motionOptIn = true;
    syncPreview();
  });
  video.addEventListener('play', () => {
    if (!videoWanted()) video.pause();
    state();
  });
  ['loadstart', 'emptied', 'waiting', 'stalled'].forEach(event => video.addEventListener(event, () => {
    showPoster();
    state();
    awaitVideoFrame();
  }));
  ['loadeddata', 'playing', 'timeupdate'].forEach(event => video.addEventListener(event, awaitVideoFrame));
  ['pause', 'volumechange'].forEach(event => video.addEventListener(event, state));
  ['play', 'playing', 'pause', 'seeked', 'timeupdate', 'emptied'].forEach(event => video.addEventListener(event, syncCaptions));
  video.addEventListener('ended', returnToPreview);
  video.addEventListener('error', failVideo);

  function enlarge() {
    dialog.showModal();
    interrupt();
    syncDock();
  }
  document.querySelectorAll('.panel-button,.instrument-detail').forEach(button => button.addEventListener('click', enlarge));
  document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
  dialog.addEventListener('close', () => { syncDock(); syncPreview(); });
  document.addEventListener('visibilitychange', () => {
    showPoster();
    if (document.hidden) interrupt();
    else { syncPreview(); state(); }
  });
  window.addEventListener('pageshow', () => { showPoster(); syncPreview(); state(); });
  document.addEventListener('product-share', interrupt);
  document.addEventListener('focusin', syncDock);
  document.addEventListener('focusout', () => requestAnimationFrame(syncDock));
  function motionPreferenceChanged() { motionOptIn = false; syncPreview(); }
  if (reducedMotion.addEventListener) reducedMotion.addEventListener('change', motionPreferenceChanged);
  else reducedMotion.addListener(motionPreferenceChanged);

  function liveState() {
    if (!liveVideo || !liveButton) return;
    const active = liveIntent && (!liveVideo.paused || livePending);
    const label = liveButton.querySelector('span') || liveButton;
    label.textContent = active ? 'pause demo' : liveStarted ? 'resume demo' : 'play demo';
    const icon = liveButton.querySelector('svg path');
    if (icon) { icon.setAttribute('d', active ? 'M8 5v14M16 5v14' : 'm8 5 11 7-11 7Z'); icon.style.fill = active ? 'none' : 'currentColor'; icon.style.strokeWidth = active ? '2.5' : '1'; }
    liveButton.setAttribute('aria-label', `${active ? 'Pause' : liveStarted ? 'Resume' : 'Play'} the BEEFY live sub bass demo${liveStarted ? '' : ' with sound from the beginning'}`);
    liveButton.setAttribute('aria-busy', String(livePending));
  }
  function pauseLive() {
    ++liveSerial;
    liveIntent = livePending = false;
    liveVideo?.pause();
    liveState();
  }
  function resetLive() {
    pauseLive();
    liveStarted = false;
    // Clearing the source reinstates the supplied still after completion/error.
    liveVideo.removeAttribute('src');
    liveVideo.load();
    liveState();
  }
  if (liveVideo && liveButton) {
    liveVideo.controls = false;
    liveVideo.loop = false;
    liveVideo.preload = 'none';
    liveButton.addEventListener('click', async () => {
      const pause = liveIntent && (!liveVideo.paused || livePending);
      interrupt();
      if (pause) { syncPreview(); return; }
      if (!liveStarted || liveVideo.error) {
        liveVideo.src = liveVideo.dataset.mp4;
        liveVideo.load();
        liveVideo.currentTime = 0;
      }
      liveStarted = true;
      liveVideo.muted = false;
      liveIntent = livePending = true;
      const bounds = liveVideo.getBoundingClientRect();
      liveVisible = bounds.bottom > 0 && bounds.top < window.innerHeight;
      const request = ++liveSerial;
      if (liveStatus) liveStatus.hidden = true;
      liveState();
      try {
        await liveVideo.play();
        if (request !== liveSerial && !liveIntent) liveVideo.pause();
      } catch (error) {
        if (request !== liveSerial || error.name === 'AbortError') return;
        liveIntent = false;
        if (liveStatus) { liveStatus.textContent = 'The demo could not play. Try again.'; liveStatus.hidden = false; }
      } finally {
        if (request === liveSerial) { livePending = false; liveState(); }
      }
    });
    liveVideo.addEventListener('play', () => {
      if (!liveIntent || !liveVisible || document.hidden || dialog.open) pauseLive();
      liveState();
    });
    liveVideo.addEventListener('pause', liveState);
    liveVideo.addEventListener('ended', () => { resetLive(); syncPreview(); });
    liveVideo.addEventListener('error', () => {
      if (!liveStarted) return;
      resetLive();
      if (liveStatus) { liveStatus.textContent = 'The demo could not play. Try again.'; liveStatus.hidden = false; }
      syncPreview();
    });
    new IntersectionObserver(entries => {
      liveVisible = entries[0].isIntersecting;
      if (!liveVisible) { pauseLive(); syncPreview(); }
    }).observe(liveVideo);
    liveState();
  }

  function failBank() {
    if (!bankIntent) return;
    if (pending === 'bank') { ++requestSerial; pending = null; }
    bankIntent = false;
    bankAudio.pause();
    bankStatus.textContent = 'The preview could not play. Try again.';
    bankStatus.classList.remove('sr-only');
    previewState();
    syncPreview();
  }
  previews.forEach(button => button.addEventListener('click', async () => {
    const pause = button === activePreview && bankIntent;
    const changed = button !== activePreview;
    interrupt();
    if (pause) { syncPreview(); return; }
    activePreview = button;
    bankIntent = true;
    if (changed) bankAudio.src = button.dataset.audio;
    else if (bankAudio.error) bankAudio.load();
    if (bankAudio.ended) bankAudio.currentTime = 0;
    const request = ++requestSerial;
    pending = 'bank';
    bankStatus.classList.add('sr-only');
    bankStatus.textContent = `Loading ${button.dataset.name}`;
    previewState();
    try {
      await bankAudio.play();
      if (request !== requestSerial && !bankIntent) bankAudio.pause();
    } catch (error) {
      if (request !== requestSerial || error.name === 'AbortError') return;
      failBank();
    } finally {
      if (request === requestSerial) { pending = null; previewState(); }
    }
  }));
  bankAudio.addEventListener('play', () => {
    if (!bankIntent || document.hidden || dialog.open) bankAudio.pause();
    else if (activePreview) bankStatus.textContent = `Playing ${activePreview.dataset.name}`;
    previewState();
  });
  bankAudio.addEventListener('pause', previewState);
  bankAudio.addEventListener('ended', () => { bankIntent = false; previewState(); syncPreview(); });
  bankAudio.addEventListener('error', failBank);

  const purchaseObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => visiblePurchases.set(entry.target, entry.isIntersecting));
    syncDock();
  }, {threshold: [0, 1]});
  document.querySelectorAll('.buy').forEach(button => purchaseObserver.observe(button));
  const previewObserver = new IntersectionObserver(entries => {
    const returning = entries[0].isIntersecting && !visible;
    visible = entries[0].isIntersecting;
    if (returning || !visible) showPoster();
    if (!visible && mode === 'demo' && (demoIntent || pending === 'video' || !video.paused)) {
      ++requestSerial; pending = null; demoIntent = false; video.pause(); state();
    }
    syncPreview();
  });
  previewObserver.observe(video);
  video.muted = true;
  video.loop = true;
  video.controls = false;
  // The silent preview source stays separate; audible media loads on a deliberate click.
  state();
  syncDock();
  codecPool.ready.then(preferred => {
    if (codecReady) return;
    selectCodec(preferred);
    video.setAttribute('src', previewSource);
    video.load();
    syncPreview();
  });
})();
