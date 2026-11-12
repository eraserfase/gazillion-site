/* The page has stills and no demo film, so it carries only the two shared behaviours it
   needs, as the family script (winnetka/script.js) does them: the sticky purchase handoff
   and the enlarged window. */
(() => {
  'use strict';
  const dialog = document.querySelector('.interface-dialog');
  const dock = document.querySelector('.sticky-buy');
  const visiblePurchases = new Map();
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
  document.addEventListener('focusin', queueDockSync);
  document.addEventListener('focusout', queueDockSync);
  function enlarge() { dialog.showModal(); syncDock(); }
  document.querySelectorAll('.panel-button,.instrument-detail').forEach(button => button.addEventListener('click', enlarge));
  document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
  dialog.addEventListener('close', syncDock);
  // On a phone the window picture gives up height so the purchase button under it is on
  // screen when the page opens (the family script does the same for a demo film).
  const view = document.querySelector('.hero .instrument-view');
  const under = document.querySelector('.hero .demo-purchase .buy');
  function fitOpening() {
    view.style.width = '';
    if (!under || !under.offsetParent) return;
    const top = view.getBoundingClientRect().top + scrollY;
    const gap = under.getBoundingClientRect().top - view.getBoundingClientRect().bottom;
    const room = innerHeight - top - gap - under.offsetHeight - 10;
    const natural = view.getBoundingClientRect().width;
    const fitted = Math.max(120, room) * 895 / 1394;
    // A phone on its side has no room for both; the picture keeps its size there.
    if (fitted < natural && fitted >= natural * 0.4) view.style.width = fitted + 'px';
  }
  fitOpening();
  addEventListener('resize', fitOpening);
  addEventListener('load', fitOpening);
  document.fonts && document.fonts.ready.then(fitOpening);
  const purchaseObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => visiblePurchases.set(entry.target, entry.isIntersecting));
    syncDock();
  }, {threshold: [0, 1]});
  document.querySelectorAll('.buy').forEach(button => purchaseObserver.observe(button));
})();
