/* Production provider installation. Local previews never load a remote tag. */
(function () {
  'use strict';
  if (!/^(www\.)?gazillionindustries\.com$/i.test(location.hostname) || window.GZLandingProviders) return;
  window.GZLandingProviders = true;
  var product = document.currentScript && document.currentScript.dataset.product;
  var gaTag = document.createElement('script');
  gaTag.async = true;
  gaTag.src = 'https://www.googletagmanager.com/gtag/js?id=G-2ZY2T73BLK';
  document.head.appendChild(gaTag);
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', 'G-2ZY2T73BLK', {page_location: window.GZLanding ? window.GZLanding.analyticsUrl : location.href.split('#')[0]});

  window.GZCloudBeforeSend = function (type, payload) {
    if (type !== 'event' || payload.name) return false;
    if (window.GZLanding) payload.url = window.GZLanding.pagePath;
    return payload;
  };
  var cloud = document.createElement('script');
  cloud.async = true;
  cloud.src = 'https://cloud.umami.is/script.js';
  cloud.setAttribute('data-auto-track', 'false');
  cloud.setAttribute('data-before-send', 'GZCloudBeforeSend');
  cloud.setAttribute('data-website-id', 'ed71399d-1069-4354-abbf-73dc311e5bc3');
  cloud.setAttribute('data-domains', 'gazillionindustries.com,www.gazillionindustries.com');
  cloud.onload = cloud.onerror = function () { window.GZTraffic?.attachUmami(); };
  document.head.appendChild(cloud);

  // The same pixel and PageView owner as the incumbent landing pages.
  !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
  n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
  document,'script','https://connect.facebook.net/en_US/fbevents.js');
  window.fbq('init', '1164684366890206');
  window.fbq('track', 'PageView');

  // Existing BEEFY-only TikTok installation. Do not spread it to other pages.
  if (product === 'beefy' && !window.GZ_TIKTOK_BEEFY) {
    window.GZ_TIKTOK_BEEFY = true;
    if (!window.ttq || typeof window.ttq.load !== 'function') {
      (function(w,d,t){w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=['page','track','identify','instances','debug','on','off','once','ready','alias','group','enableCookie','disableCookie','holdConsent','revokeConsent','grantConsent'];ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)));};};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e;};ttq.load=function(e,n){var r='https://analytics.tiktok.com/i18n/pixel/events.js';ttq._i=ttq._i||{};ttq._i[e]=[];ttq._i[e]._u=r;ttq._t=ttq._t||{};ttq._t[e]=+new Date;ttq._o=ttq._o||{};ttq._o[e]=n||{};var a=d.createElement('script');a.type='text/javascript';a.async=true;a.src=r+'?sdkid='+e+'&lib='+t;var s=d.getElementsByTagName('script')[0];s.parentNode.insertBefore(a,s);};}(window,document,'ttq'));
    }
    var pixelId = 'DAQQKERC77UFPT804RG0';
    if (!window.ttq._i || !window.ttq._i[pixelId]) window.ttq.load(pixelId);
    window.ttq.instance(pixelId).page();
    window.ttq.instance(pixelId).track('ViewContent', {content_id:'xelfo', content_type:'product', content_name:'BEEFY', value:39, currency:'USD'});
  }
})();
