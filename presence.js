/* Visibility leases for the board. Custom signals never count as pageviews.
   Umami's own keepalive transport preserves its existing visitor identity. */
(function(){
  'use strict';
  if(!/^(www\.)?gazillionindustries\.com$/i.test(location.hostname)) return;
  var script=document.currentScript, product=script && script.dataset.product;
  if(!/^(store|drugs|f12|skruu|tripleog)$/.test(product || '')) return;
  var period='', active=false, sent=false, initialSent=false, away=false;
  var version='presence-exit-20260909a';
  function nonce(){
    var bytes=new Uint8Array(6);crypto.getRandomValues(bytes);
    return Array.from(bytes,function(b){return b.toString(16).padStart(2,'0');}).join('');
  }
  function available(){return window.umami && typeof window.umami.track==='function';}
  function signal(kind){
    if(!available()) return;
    var ad=!!(window.GZ_ATTR && window.GZ_ATTR.paid);
    window.umami.track(kind+'_'+product+'_'+period+'_'+(ad?'a':'o'));
  }
  function beat(){
    if(away || document.visibilityState==='hidden' || !available()) return;
    if(!active){period=nonce();active=true;sent=false;}
    if(window.GZ_ATTR) window.GZ_ATTR.mark(product==='store'?'store':'product',product==='store'?undefined:product);
    // Keep existing named arrival/source evidence once, not one count per beat.
    if(!initialSent){
      window.umami.track('view_'+product);
      window.umami.track((window.GZ_ATTR && window.GZ_ATTR.paid?'paid_ad_':'origin_other_')+product);
      initialSent=true;
    }
    signal('gzh');sent=true;
  }
  function leave(){
    if(!active) return;
    active=false;
    if(sent) signal('gzl');
    sent=false;
  }
  document.addEventListener('visibilitychange',function(){
    if(document.visibilityState==='hidden') leave();
    else {away=false;beat();}
  });
  window.addEventListener('pagehide',function(){away=true;leave();});
  window.addEventListener('pageshow',function(){away=false;beat();});
  beat();
  var attempts=0, ready=setInterval(function(){
    if(!sent) beat();
    if(sent || ++attempts>=40) clearInterval(ready);
  },150);
  setInterval(beat,15000);
  window.GZPresence={version:version};
})();
