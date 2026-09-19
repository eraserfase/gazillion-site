/* Visibility leases for the board. Custom signals never count as pageviews.
   The direct transport is enabled only after its public ingress is ready. */
(function(){
  'use strict';
  if(!/^(www\.)?gazillionindustries\.com$/i.test(location.hostname)) return;
  var script=document.currentScript, product=script && script.dataset.product;
  if(!/^(store|drugs|f12|skruu|tripleog|beefy)$/.test(product || '')) return;
  var endpoint=script && script.dataset.endpoint;
  // No arbitrary destination, credentials, or query string from configuration.
  if(endpoint!=='https://board.gazillionindustries.com/presence/collect') endpoint='';
  var period='', active=false, sent=false, initialSent=false, away=false, lastBeatAt=0;
  var version='presence-direct-20260919', directPending='';
  function nonce(){
    var bytes=new Uint8Array(6);crypto.getRandomValues(bytes);
    return Array.from(bytes,function(b){return b.toString(16).padStart(2,'0');}).join('');
  }
  function available(){return !!endpoint || (window.GZTraffic || window.umami) && typeof (window.GZTraffic || window.umami).track==='function';}
  function direct(type, target){
    if(type==='lease' && directPending===period) return;
    if(!period) period=nonce();
    var attr=window.GZ_ATTR||{}, data={v:1,type:type,product:target||product,document:period,
      paid:!!attr.paid,host:location.hostname.toLowerCase()};
    if(/^[0-9a-f]{24}$/.test(attr.token||'')) data.journey=attr.token;
    if(/^[A-Za-z0-9_.-]{1,200}$/.test(attr.tags?.utm_source||'')) data.source=attr.tags.utm_source;
    if(/^[A-Za-z0-9_.-]{1,64}$/.test(attr.tags?.utm_medium||'')) data.medium=attr.tags.utm_medium;
    var body=JSON.stringify(data);
    var sentPeriod=period, controller=new AbortController(), timeout=setTimeout(function(){controller.abort();},5000);
    if(type==='lease') directPending=sentPeriod;
    try {
      // text/plain is a simple CORS request. No cookie or secret goes to the board.
      fetch(endpoint,{method:'POST',body:body,headers:{'Content-Type':'text/plain'},
        credentials:'omit',mode:'cors',keepalive:true,signal:controller.signal})
        .catch(function(){})
        .finally(function(){clearTimeout(timeout);if(type==='lease' && directPending===sentPeriod) directPending='';});
    } catch(e){clearTimeout(timeout);if(type==='lease' && directPending===sentPeriod) directPending='';}
  }
  function signal(kind){
    if(!available()) return;
    if(endpoint){direct(kind==='gzh'?'lease':'leave');return;}
    var ad=!!(window.GZ_ATTR && window.GZ_ATTR.paid);
    (window.GZTraffic || window.umami).track(kind+'_'+product+'_'+period+'_'+(ad?'a':'o'));
  }
  function beat(){
    if(away || document.visibilityState==='hidden' || !available()) return;
    // Deferred startup and pageshow can run in the same instant. One lease
    // renewal is enough; a new visible interval/bfcache return still starts
    // immediately because leave() clears active and sent.
    var now=Date.now();
    if(active && sent && now>=lastBeatAt && now-lastBeatAt<1000) return;
    if(!active){period=nonce();active=true;sent=false;}
    if(window.GZ_ATTR) window.GZ_ATTR.mark(product==='store'?'store':'product',product==='store'?undefined:product);
    // Keep existing named arrival/source evidence once, not one count per beat.
    if(!initialSent && (window.GZTraffic || window.umami) && typeof (window.GZTraffic || window.umami).track==='function'){
      (window.GZTraffic || window.umami).track('view_'+product);
      (window.GZTraffic || window.umami).track((window.GZ_ATTR && window.GZ_ATTR.paid?'paid_ad_':'origin_other_')+product);
      initialSent=true;
    }
    signal('gzh');sent=true;lastBeatAt=now;
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
  if(endpoint){
    var checkoutProducts={drugs:'drugs',spcjdr:'drugs',f12:'f12','f12-plugin-only':'f12',
      kzfirr:'f12',iyhfta:'f12',skruu:'skruu',bfxzea:'skruu',tripleog:'tripleog',
      aslssg:'tripleog',beefy:'beefy',xelfo:'beefy'};
    function buy(e){
      if(e.type==='auxclick' && e.button!==1 || e.type==='click' && e.button>0) return;
      var a=e.target && e.target.closest && e.target.closest('a[href]');
      if(!a) return;
      try {
        var u=new URL(a.href,location.href), m=u.pathname.match(/^\/l\/([a-z0-9-]+)\/?$/);
        if(u.protocol==='https:' && u.hostname==='gazillionindustries.gumroad.com' && m && checkoutProducts[m[1]])
          direct('buy',checkoutProducts[m[1]]);
      } catch(e){}
    }
    document.addEventListener('click',buy,true);
    document.addEventListener('auxclick',buy,true);
  }
  beat();
  var attempts=0, ready=setInterval(function(){
    if(!sent) beat();
    if(sent || ++attempts>=40) clearInterval(ready);
  },150);
  setInterval(beat,15000);
  window.GZPresence={version:version};
})();
