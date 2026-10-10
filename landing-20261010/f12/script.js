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
  const proofVideos = [...document.querySelectorAll('.tm-vid video')];
  let proofActive = null;
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

  // Geometric matte from the original F12 camera recipe. This clips only the
  // exterior canvas: panel colors and the original MP4/AAC are untouched.
  // The keys are embedded at build time, so no fetch can expose an unmasked film.
  const panelCameraKeys = [[0.0,[2.1333333333333333,177.33333333333331,0.0],0,"WHOLE"],[5.274725274725275,[2.1333333333333333,177.33333333333331,0.0],0,"WHOLE"],[21.0989010989011,[3.5999999999999996,-71.99999999999989,0.0],1.2,"TOP"],[23.736263736263737,[4.32,-43.200000000000045,-216.0],2.5,"CRUSH"],[29.01098901098901,[4.909090909090909,-490.909090909091,-294.5454545454545],0.8,"POS"],[30.263736263736263,[3.8028169014084505,-106.47887323943655,-1502.112676056338],0.8,"VIS"],[33.23076923076923,[4.695652173913043,-258.26086956521726,-2066.086956521739],3.0,"VISZ"],[36.92307692307692,[3.8028169014084505,-106.47887323943655,-1502.112676056338],1.0,"VIS"],[40.21978021978022,[4.695652173913043,-258.26086956521726,-2066.086956521739],3.0,"VISZ"],[44.83516483516483,[3.5999999999999996,-71.99999999999989,-1067.4],1.2,"MID"],[47.8021978021978,[3.8028169014084505,-106.47887323943655,-1502.112676056338],2.5,"VIS"],[50.10989010989011,[3.5999999999999996,-71.99999999999989,0.0],1.2,"TOP"],[52.35164835164835,[2.1333333333333333,177.33333333333331,0.0],2.5,"WHOLE"]];
  const previewStart = 5.4;
  let maskFrame = null, maskAnimation = null;
  function panelRect(sourceTime) {
    const value = panelCameraKeys[0][1].map(number => Number(number.toFixed(4)));
    for (let i = 1; i < panelCameraKeys.length; i++) {
      const [start, goal, duration] = panelCameraKeys[i];
      let progress = Math.max(0, Math.min(1, (sourceTime - Number(start.toFixed(4))) / Math.max(duration, .001)));
      progress = progress * progress * (3 - 2 * progress);
      for (let axis = 0; axis < 3; axis++) {
        value[axis] += Number((goal[axis] - panelCameraKeys[i - 1][1][axis]).toFixed(4)) * progress;
      }
    }
    const [scale, rawX, rawY] = value;
    const x = Math.trunc(rawX), y = Math.trunc(rawY);
    const width = Math.trunc(340 * scale / 2) * 2;
    const height = Math.trunc(900 * scale / 2) * 2;
    return [Math.max(0, x), Math.max(0, y), Math.min(1080, x + width), Math.min(1920, y + height)];
  }
  function applyPanelMask(mediaTime = video.currentTime) {
    const [left, top, right, bottom] = panelRect(mediaTime + (mode === 'preview' ? previewStart : 0));
    video.style.clipPath = `inset(${top / 1920 * 100}% ${(1080 - right) / 1080 * 100}% ${(1920 - bottom) / 1920 * 100}% ${left / 1080 * 100}%)`;
  }
  function stopPanelMask() {
    if (maskFrame !== null && video.cancelVideoFrameCallback) video.cancelVideoFrameCallback(maskFrame);
    if (maskAnimation !== null) cancelAnimationFrame(maskAnimation);
    maskFrame = maskAnimation = null;
  }
  function trackPanelMask() {
    if (maskFrame !== null || maskAnimation !== null || document.hidden || video.paused || video.ended) return;
    if (video.requestVideoFrameCallback) {
      maskFrame = video.requestVideoFrameCallback((_, metadata) => {
        maskFrame = null;
        applyPanelMask(metadata.mediaTime);
        trackPanelMask();
      });
    } else {
      maskAnimation = requestAnimationFrame(() => {
        maskAnimation = null;
        applyPanelMask();
        trackPanelMask();
      });
    }
  }
  applyPanelMask(0);
  video.addEventListener('playing', () => { applyPanelMask(); trackPanelMask(); });
  ['loadeddata', 'seeked', 'timeupdate'].forEach(type => video.addEventListener(type, () => {
    // Per-frame callbacks govern moving pictures; event sync also covers paused seeks.
    if (video.paused || !video.requestVideoFrameCallback) applyPanelMask();
    trackPanelMask();
  }));
  ['loadstart', 'emptied'].forEach(type => video.addEventListener(type, () => {
    stopPanelMask(); applyPanelMask(0);
  }));
  ['pause', 'ended'].forEach(type => video.addEventListener(type, () => {
    stopPanelMask(); applyPanelMask();
  }));

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
      !motionPaused && (!reducedMotion.matches || motionOptIn) && !bankIntent && !proofActive && !videoFailed;
  }
  function videoWanted() {
    if (!visible || document.hidden || dialog.open || bankIntent || proofActive) return false;
    return mode === 'preview' ? previewIntent && previewEligible() : demoIntent;
  }
  function state() {
    const audible = mode === 'demo';
    const active = !video.paused && !video.ended;
    const loading = pending === 'video';
    const action = !audible ? 'Play the F(ilter)12 demo with sound from the beginning' :
      `${active || loading ? 'Pause' : video.ended ? 'Replay' : videoFailed ? 'Retry' : 'Resume'} the F(ilter)12 demo`;
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
    proofActive = null;
    proofVideos.forEach(media => media.pause());
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

  function enlarge(event) {
    dialog.querySelector('img').src = event?.currentTarget?.dataset.panel || '/landing-20261010/f12/assets/panel-light.jpg?v=848ffcd6a50d';
    dialog.showModal();
    interrupt();
    syncDock();
  }
  document.querySelectorAll('.panel-button,.instrument-detail,.finish-button').forEach(button => button.addEventListener('click', enlarge));
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


  // Exact authored F12 caption cues from the incumbent page; only audible film uses them.
  const capBox = document.querySelector('#demo-captions');
  const cues = [[0,1.92,"This is F(ilter)12,"],[1.95,5.26,"a 12 bit filter by GAZILLION INDUSTRIES."],[5.29,13.5,"It has AURA, an advanced adaptive EQ."],[13.53,21.08,"MAX AURA."],[21.11,31.63,"Twelve bits is as clean as it gets."],[31.66,36.91,"An AUTO FILTER."],[36.94,52.67,"And a SIDECHAIN, the drums move the filter."],[52.7,56.7,"F(ilter)12 by GAZILLION INDUSTRIES."]];
  function captions(){const cue = mode === 'demo' && cues.find(c => video.currentTime >= c[0] && video.currentTime < c[1]);capBox.textContent = cue ? cue[2] : '';}
  ['timeupdate','play','pause','emptied','ended'].forEach(type => video.addEventListener(type,captions));

  // Testimonial films retain their complete original frames and never autoplay.
  proofVideos.forEach(media => {
    const player = media.closest('.tm-vid');
    const control = player.querySelector('.play-badge');
    const accessibleName = control.getAttribute('aria-label')?.replace(/^Play\s+/i, '').replace(/\s+with sound$/i, '') || 'testimonial video';
    const label = control.querySelector('.say');
    const icon = document.createElementNS('http://www.w3.org/2000/svg','svg');
    icon.setAttribute('viewBox','0 0 24 24');icon.setAttribute('aria-hidden','true');
    icon.innerHTML = '<path d="m8 5 11 7-11 7Z"/>';
    control.querySelector('.disc').replaceWith(icon);
    const message = document.createElement('p');message.className='proof-status';message.hidden=true;message.setAttribute('role','status');player.after(message);
    let wanted = false, failed = false, serial = 0;
    media.controls=false;media.loop=false;media.muted=true;media.removeAttribute('autoplay');
    function render(){
      const active=wanted && !media.paused;
      const action=active?'pause':failed?'retry':media.ended?'replay':media.currentTime>0?'resume':'play';
      player.classList.toggle('is-playing',active);label.textContent=action;
      control.setAttribute('aria-label',`${action[0].toUpperCase()+action.slice(1)} ${accessibleName}${active?'':' with sound'}`);
      icon.querySelector('path').setAttribute('d',active?'M8 5v14M16 5v14':'m8 5 11 7-11 7Z');
    }
    async function toggle(){
      const pause = wanted && !media.paused;interrupt();
      if(pause){wanted=false;syncPreview();render();return;}
      wanted=true;failed=false;proofActive=media;message.hidden=true;media.muted=false;
      if(media.ended || media.currentTime===0)media.currentTime=0;
      const request=++serial;
      try{
        await media.play();
        if(request!==serial){
          if(proofActive!==media || !wanted || document.hidden || dialog.open)media.pause();
          return;
        }
        if(proofActive!==media || !wanted || document.hidden || dialog.open)media.pause();
      }
      catch(error){
        if(request!==serial)return;
        if(error.name!=='AbortError'){wanted=false;failed=true;proofActive=null;message.textContent='The video could not play. Try again.';message.hidden=false;}
      }
      render();
    }
    control.addEventListener('click',toggle);media.addEventListener('click',toggle);
    media.addEventListener('play',()=>{if(proofActive!==media || document.hidden || dialog.open)media.pause();render();});
    media.addEventListener('pause',()=>{if(!media.paused && !media.ended)return;wanted=false;++serial;if(proofActive===media)proofActive=null;render();});
    media.addEventListener('ended',()=>{wanted=false;if(proofActive===media)proofActive=null;render();syncPreview();});
    new IntersectionObserver(entries=>{if(!entries[0].isIntersecting && proofActive===media){media.pause();syncPreview();}}).observe(media);
    render();
  });

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
