/* Original testimonial films: deliberate sound, shared custom controls. */
(() => {
  const records = [];
  const dialog = document.querySelector('.interface-dialog');
  let active = null;

  function stopAll(except = null) {
    records.forEach(record => { if (record !== except) record.stop(); });
  }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) records.find(record => record.video === entry.target)?.stop();
    });
  });

  document.querySelectorAll('.social-proof video').forEach(video => {
    const player = video.closest('.tm-vid');
    const control = player?.querySelector('.play-badge');
    if (!control) return;
    const label = control.querySelector('.say');
    const name = control.getAttribute('aria-label')?.replace(/^Play\s+/i, '').replace(/\s+with sound$/i, '') || 'testimonial video';
    const icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    icon.setAttribute('viewBox', '0 0 24 24');
    icon.setAttribute('aria-hidden', 'true');
    icon.innerHTML = '<path d="m8 5 11 7-11 7Z"/>';
    const originalIcon = control.querySelector('.disc');
    if (originalIcon) originalIcon.replaceWith(icon); else control.prepend(icon);
    const message = document.createElement('p');
    message.className = 'proof-status';
    message.hidden = true;
    message.setAttribute('role', 'status');
    player.after(message);

    let wanted = false, pending = false, failed = false, serial = 0;
    video.controls = false;
    video.removeAttribute('controls');
    video.autoplay = false;
    video.removeAttribute('autoplay');
    video.loop = false;
    video.removeAttribute('loop');
    video.muted = true;
    video.preload = 'none';

    function render() {
      const playing = wanted && (pending || !video.paused);
      const action = playing ? 'pause' : failed ? 'retry' : video.ended ? 'replay' : video.currentTime > 0 ? 'resume' : 'play';
      control.hidden = false;
      player.classList.toggle('is-playing', playing);
      label.textContent = action;
      control.setAttribute('aria-label', `${action[0].toUpperCase() + action.slice(1)} ${name}${playing ? '' : ' with sound'}`);
      control.setAttribute('aria-busy', String(pending));
      icon.querySelector('path').setAttribute('d', playing ? 'M8 5v14M16 5v14' : 'm8 5 11 7-11 7Z');
    }
    function stop() {
      ++serial;
      wanted = pending = false;
      if (active === record) active = null;
      video.pause();
      render();
    }
    async function toggle() {
      if (wanted) { stop(); return; }
      stopAll();
      document.dispatchEvent(new Event('product-proof-start'));
      if (document.hidden || dialog?.open) return;
      if (failed) video.load();
      failed = false;
      message.hidden = true;
      if (video.ended) video.currentTime = 0;
      wanted = pending = true;
      active = record;
      video.muted = false;
      const request = ++serial;
      render();
      try {
        await video.play();
        if (request !== serial || active !== record || !wanted || document.hidden || dialog?.open) {
          if (active !== record || !wanted || document.hidden || dialog?.open) video.pause();
          return;
        }
        pending = false;
      } catch (error) {
        if (request !== serial) return;
        wanted = pending = false;
        if (active === record) active = null;
        if (error.name !== 'AbortError') {
          failed = true;
          message.textContent = 'The video could not play. Try again.';
          message.hidden = false;
        }
      }
      render();
    }

    const record = {video, stop};
    records.push(record);
    control.addEventListener('click', toggle);
    video.addEventListener('click', toggle);
    video.addEventListener('play', () => {
      if (active !== record || !wanted || document.hidden || dialog?.open) { stop(); return; }
      stopAll(record);
      render();
    });
    video.addEventListener('pause', () => {
      if (!video.paused) return;
      ++serial;
      wanted = pending = false;
      if (active === record) active = null;
      render();
    });
    video.addEventListener('ended', () => { stop(); });
    video.addEventListener('error', () => {
      if (!wanted) return;
      stop();
      failed = true;
      message.textContent = 'The video could not play. Try again.';
      message.hidden = false;
      render();
    });
    observer.observe(video);
    render();
  });
  // Another audible demonstration cancels pending as well as playing proof.
  document.addEventListener('play', event => {
    if ((event.target instanceof HTMLMediaElement) && !event.target.muted &&
        !records.some(record => record.video === event.target)) stopAll();
  }, true);
  document.addEventListener('visibilitychange', () => { if (document.hidden) stopAll(); });
  document.addEventListener('product-share', () => stopAll());
  dialog?.addEventListener('toggle', () => { if (dialog.open) stopAll(); });
  window.addEventListener('pagehide', () => stopAll());
})();
