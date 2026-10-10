/* Observation only. Checkout, native signup and playback retain their owners. */
(function () {
  'use strict';
  if (!/^(www\.)?gazillionindustries\.com$/i.test(location.hostname) || window.GZLandingEvents) return;
  var product = document.currentScript && document.currentScript.dataset.product;
  var products = {
    journeyman: {name:'JOURNEYMAN', slug:'journeyman', price:59},
    tripleog: {name:'TRIPLE OG', slug:'tripleog', price:39},
    beefy: {name:'BEEFY', slug:'beefy', price:39},
    f12: {name:'F(ilter)12', slug:'f12-plugin-only', price:49},
    skruu: {name:'SKRUU', slug:'skruu', price:29},
    drugs: {name:'DRUGS', slug:'drugs', price:0},
    winnetka: {name:'WINNETKA', slug:'winnetka', price:49}
  };
  var item = products[product];
  if (!item) return;
  window.GZLandingEvents = true;
  function track(name, props) {
    try {
      var tracker = window.GZTraffic || window.umami;
      if (tracker && tracker.track) {
        var result = tracker.track(name, Object.assign({product:product}, props || {}));
        if (result && result.catch) result.catch(function () {});
      }
    } catch (_) {}
  }
  function checkout(event) {
    if (event.type === 'auxclick' ? event.button !== 1 : event.button > 0) return;
    var link = event.target && event.target.closest && event.target.closest('a[href]');
    if (!link) return;
    try {
      var url = new URL(link.href, location.href);
      if (url.protocol !== 'https:' || url.hostname !== 'gazillionindustries.gumroad.com' || url.pathname !== '/l/' + item.slug) return;
      var position = link.dataset.pos || (link.closest('.paymarks') ? 'pay_wallet' : 'unknown');
      window.GZ_ATTR?.mark('buy', product);
      track(product === 'drugs' ? 'buy_click' : 'buy_click_' + product, {position:position});
      if (window.fbq) window.fbq('track', 'InitiateCheckout', {content_name:item.name, content_ids:[product], content_type:'product', value:item.price, currency:'USD'});
      // Gumroad owns GA begin_checkout at actual checkout; this is navigation intent.
      if (window.gtag) window.gtag('event', 'checkout_handoff', {currency:'USD', value:item.price, items:[{item_id:product,item_name:item.name,price:item.price,quantity:1}]});
      // Owned click rows and live checkout transitions are already collected by
      // traffic.js and presence.js. Do not emit either a second time here.
    } catch (_) {}
  }
  document.addEventListener('click', checkout, true);
  document.addEventListener('auxclick', checkout, true);
  document.addEventListener('submit', function (event) {
    var form = event.target;
    if (!form.matches('.signup form') || form.action !== 'https://app.kit.com/forms/9851450/subscriptions') return;
    // Keep the incumbent list_signup series: it measures submitted intent,
    // not provider acceptance or a confirmed subscriber. Native posting stays native.
    track('list_signup', {position:'landing_footer', phase:'submit'});
  }, true);
  document.addEventListener('product-share', function () { track('share_open_' + product); });
  document.addEventListener('product-link-copied', function () { track('share_link_copied_' + product); });
  document.addEventListener('product-native-shared', function () { track('share_native_' + product); });
  document.addEventListener('click', function (event) {
    var button = event.target && event.target.closest && event.target.closest('.instrument-detail,.panel-button');
    if (button) track('interface_open_' + product);
  }, true);
  var bank = document.querySelector('#bank-audio'), lastPreset = '';
  if (bank) {
    bank.addEventListener('playing', function () {
      if (bank.muted || bank.volume <= 0 || document.hidden) return;
      var asset = bank.currentSrc || bank.src;
      if (!asset || asset === lastPreset) return;
      lastPreset = asset;
      var selected = document.querySelector('.preset-preview[aria-pressed="true"]');
      track('preset_play_' + product, {asset:asset, video:selected?.dataset.name || '', phase:'audible'});
    });
    bank.addEventListener('ended', function () { lastPreset = ''; });
    bank.addEventListener('pause', function () { lastPreset = ''; });
  }
})();
