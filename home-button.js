/* The way back to the shelf - a small door home in the bottom-right corner,
   on every product page, for every visitor.

   It shipped 13 Sep 2026 shown only to people who arrived from the storefront
   (a same-origin referrer at "/"), so direct and ad arrivals had no exit.
   The owner lifted that the same day: the button is quiet enough to show to all.

   The button never shares a row with an ask. While a buy button or the signup
   form is level with it and within 48px it fades out, and comes back once the
   ask has scrolled on. Measured on a 375px phone, the in-page buy button sits
   21px (SKRUU) and 44px (DRUGS) from it at first paint - an overlap-only test
   left them side by side.

   A white disc with the house drawn in the page's own colour, taken from the
   page's own variables so it matches whichever product it sits on: the page's
   white (--chalk, the same fill as its CTA) and its ground (--field-deep, the
   same ink as its CTA). Measured, the house lands within 9 RGB of the ground
   beside the disc on all four dark pages, so it reads as the page showing
   through. BEEFY has neither variable, and its teal ground would vanish on
   white, so it falls through to its paper and its red - and takes BEEFY's own
   3px ink outline and hard shadow, because paper on teal alone measured 1.70:1. */
(function(){
  'use strict';
  var ASKS = 'a.cta, a.buy, form', CLEAR_X = 48, CLEAR_Y = 12;

  function mount(){
    if (document.querySelector('a.gz-home')) return;
    var css = document.createElement('style');
    css.textContent =
      'a.gz-home{position:fixed;z-index:30;right:16px;bottom:calc(16px + env(safe-area-inset-bottom,0px));' +
        'box-sizing:border-box;width:44px;height:44px;border-radius:50%;display:flex;align-items:center;justify-content:center;' +
        'background:var(--chalk,var(--paper,#fff));color:var(--field-deep,var(--red,#0b0a09));' +
        'box-shadow:0 8px 20px -6px rgba(0,0,0,.55);' +
        '-webkit-tap-highlight-color:transparent;transition:opacity .2s ease,transform .18s ease}' +
      'a.gz-home svg{display:block;width:20px;height:20px}' +
      'a.gz-home:hover{transform:translateY(-2px)}' +
      'a.gz-home:focus-visible{outline:3px solid var(--chalk,var(--ink,#0b0a09));outline-offset:3px}' +
      'a.gz-home.gz-home--outlined{border:3px solid var(--ink);box-shadow:3px 3px 0 var(--ink)}' +
      'a.gz-home.gz-home--away{opacity:0;pointer-events:none}';
    document.head.appendChild(css);

    var root = getComputedStyle(document.documentElement);
    var a = document.createElement('a');
    a.className = 'gz-home' + (root.getPropertyValue('--chalk').trim() ? '' : ' gz-home--outlined');
    a.href = '/';
    a.setAttribute('aria-label', 'Back to home');
    a.title = 'Back to home';
    a.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">' +
      '<path fill="currentColor" d="M12 2.6 1.8 11.4h3V21.4h5.4v-6.2h3.6v6.2h5.4V11.4h3z"/></svg>';
    // Settle the first state before the first paint, with no fade - otherwise
    // on a phone it shows beside the hero ask and then fades out in front of it.
    a.style.transition = 'none';
    document.body.appendChild(a);

    var queued = false;
    function check(){
      queued = false;
      var me = a.getBoundingClientRect(), hit = false;
      var asks = document.querySelectorAll(ASKS);
      for (var i = 0; i < asks.length && !hit; i++) {
        var r = asks[i].getBoundingClientRect();
        if (!r.width || !r.height) continue;
        hit = r.left - CLEAR_X < me.right && r.right + CLEAR_X > me.left &&
              r.top - CLEAR_Y < me.bottom && r.bottom + CLEAR_Y > me.top;
      }
      a.classList.toggle('gz-home--away', hit);
    }
    function queue(){ if (!queued) { queued = true; requestAnimationFrame(check); } }
    check();
    requestAnimationFrame(function(){ requestAnimationFrame(function(){ a.style.transition = ''; }); });
    addEventListener('scroll', queue, {passive:true});
    addEventListener('resize', queue);
    // Asks also move without a scroll: fonts and media arriving, the more-info
    // disclosure opening above the last ask.
    addEventListener('load', queue);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(queue);
    if (window.ResizeObserver) new ResizeObserver(queue).observe(document.body);
  }
  if (document.body) mount();
  else document.addEventListener('DOMContentLoaded', mount);
})();
