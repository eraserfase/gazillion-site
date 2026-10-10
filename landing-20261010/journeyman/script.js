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
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const previewSource = video.getAttribute('src');
  const primaryDemoSource = video.dataset.demoSrc;
  let demoSource = primaryDemoSource;
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
    return mode === 'preview' && visible && !document.hidden && !dialog.open &&
      !motionPaused && (!reducedMotion.matches || motionOptIn) && !bankIntent && !videoFailed;
  }
  function videoWanted() {
    if (!visible || document.hidden || dialog.open || bankIntent) return false;
    return mode === 'preview' ? previewIntent && previewEligible() : demoIntent;
  }
  function state() {
    const audible = mode === 'demo';
    const active = !video.paused && !video.ended;
    const loading = pending === 'video';
    const action = !audible ? 'Play the JOURNEYMAN demo with sound from the beginning' :
      `${active || loading ? 'Pause' : video.ended ? 'Replay' : videoFailed ? 'Retry' : 'Resume'} the JOURNEYMAN demo`;
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
    state();
    previewState();
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
      if (recoverCompact()) return;
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
  // The preview source stays separate: the audible file is requested only by audition().
  state();
  syncDock();
})();
