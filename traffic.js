/* Owned, durable observations. Cloud Umami retains ordinary pageviews only.
   Visibility leases are independent; they never become visits or pageviews. */
(function () {
  'use strict';
  var host = location.hostname.toLowerCase();
  var site = /^(www\.)?gazillionindustries\.com$/.test(host);
  var frame = host === 'gumroad-analytics.com';
  if ((!site && !frame) || window.GZTraffic) return;
  try { if (localStorage.getItem('umami.disabled')) return; } catch (_) {}
  var ENDPOINT = 'https://board.gazillionindustries.com/presence/collect';
  var WEBSITE = 'ed71399d-1069-4354-abbf-73dc311e5bc3', GA = 'G-2ZY2T73BLK';
  var productByListing = {spcjdr:'drugs',kzfirr:'f12',iyhfta:'f12',bfxzea:'skruu',aslssg:'tripleog',xelfo:'beefy'};
  var productBySlug = {drugs:'drugs',spcjdr:'drugs',f12:'f12','f12-plugin-only':'f12',kzfirr:'f12',iyhfta:'f12',skruu:'skruu',bfxzea:'skruu',tripleog:'tripleog',aslssg:'tripleog',beefy:'beefy',xelfo:'beefy'};
  var pageId = nonce(), gaClient = '', lastBridge = '', started = false;
  var queue = [], busy = 0, retryTimer = null, nativeSession = null, cloudPageviewSent = false;
  var keys = new Set(['journey','product','tracking_version','video','asset','audible_seconds','duration',
    'heard_seconds','utm_medium','utm_source','position','utm_content','utm_campaign','utm_id','utm_term',
    'media_error','media_message','mp4_support','network_state','phase','ready_state','webm_support','spot']);
  function nonce() {
    var b = new Uint8Array(16); crypto.getRandomValues(b);
    return Array.from(b,function(x){return x.toString(16).padStart(2,'0');}).join('');
  }
  function product() {
    if (frame) return productByListing[location.pathname.replace(/^\//,'').replace(/\/$/,'')] || '';
    var m = location.pathname.match(/^\/(drugs|f12|skruu|tripleog|beefy)(?:\.html|\/)?$/);
    return m ? m[1] : 'store';
  }
  function props(value) {
    var out = {};
    if (!value || typeof value !== 'object') return out;
    Object.keys(value).forEach(function(k){
      if (!keys.has(k)) return;
      var v = value[k];
      if (typeof v === 'number' && Number.isFinite(v) && Math.abs(v)<=1e12) out[k] = v;
      else if (typeof v === 'string') {
        if (k === 'asset') { try { v = new URL(v, location.href).pathname; } catch (_) { return; } }
        if(k==='journey' && !/^[0-9a-f]{24}$/.test(v))return;
        out[k] = v.replace(/[\x00-\x1f]/g,' ').slice(0,300);
      }
    });
    return out;
  }
  function umamiId() {
    try {
      var s = nativeSession && nativeSession();
      if (!s || s.website !== WEBSITE || typeof s.cache !== 'string') return '';
      var part = s.cache.split('.')[1];
      if (!part || part.length > 8192) return '';
      var decoded = JSON.parse(atob(part.replace(/-/g,'+').replace(/_/g,'/')));
      if (decoded.websiteId !== WEBSITE || !/^[0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12}$/i.test(decoded.sessionId || '')) return '';
      if (!Number.isFinite(decoded.iat) || Math.abs(Date.now()/1000-decoded.iat) > 3600) return '';
      return decoded.sessionId.toLowerCase();
    } catch (_) { return ''; }
  }
  function base(type) {
    var attr = window.GZ_ATTR || {}, query = new URLSearchParams(location.search || '');
    var b = {v:2,type:type,event_id:nonce(),page_id:pageId,host:host,path:location.pathname};
    var display = window.screen;
    if (display && Number.isInteger(display.width) && Number.isInteger(display.height)
        && display.width > 0 && display.width <= 16384 && display.height > 0 && display.height <= 16384)
      b.screen = {width:display.width,height:display.height};
    var p = product(); if (p) b.product = p;
    if (frame) b.place = query.get('location') || 'product';
    var journey = attr.token || query.get('gz_journey') || '';
    if (/^[0-9a-f]{24}$/.test(journey)) b.journey = journey;
    // Each page's own link tags and parameter NAMES, exactly what Umami recorded
    // per pageview and what its channel rules read. Values of other parameters
    // (click IDs and the like) are never sent.
    ['source','medium','campaign','content','term'].forEach(function(k){
      var v = query.get('utm_'+k);
      if (typeof v === 'string' && v) b[k] = v.replace(/[\x00-\x1f]/g,' ').slice(0,200);
    });
    var names = [];
    query.forEach(function(_, k){
      k = String(k).trim().toLowerCase();
      if (/^[a-z0-9_.\-\[\]]{1,60}$/.test(k) && names.indexOf(k) < 0 && names.length < 40) names.push(k);
    });
    if (names.length) b.qk = names;
    try {
      var ref = new URL(document.referrer);
      if (/^https?:$/.test(ref.protocol) && ref.hostname !== host && /^[A-Za-z0-9.-]{1,253}$/.test(ref.hostname)) b.referrer = ref.hostname.toLowerCase();
    } catch (_) {}
    var sid = umamiId(); if (sid) b.umami_session_id = sid;
    if (gaClient) b.ga_client_id = gaClient;
    return b;
  }
  function enqueue(value) {
    queue.push({body:JSON.stringify(value), attempts:0, pending:false});
    flush();
    return Promise.resolve();
  }
  function flush(closing) {
    if (!queue.length || retryTimer && !closing) return;
    queue.filter(function(q){return !q.pending;}).slice(0,closing?queue.length:Math.max(0,4-busy)).forEach(deliver);
  }
  function deliver(next) {
    next.pending = true; busy++;
    var controller = new AbortController();
    var timeout = setTimeout(function(){controller.abort();},7000);
    next.attempts++;
    Promise.resolve().then(function(){return fetch(ENDPOINT,{method:'POST',body:next.body,headers:{'Content-Type':'text/plain'},
      credentials:'omit',mode:'cors',keepalive:true,signal:controller.signal});})
      .then(function(r){if (!r.ok) throw new Error('Observation not saved'); return r.json();})
      .then(function(r){if (!r || !r.persisted) throw new Error('Observation not acknowledged'); var i=queue.indexOf(next);if(i>=0)queue.splice(i,1);})
      .catch(function(){
        // Exact IDs and payloads survive retries; no optimistic persisted flag.
        if(!retryTimer)retryTimer = setTimeout(function(){retryTimer=null;flush();},Math.min(30000,1000*Math.pow(2,Math.min(next.attempts,5))));
      })
      .finally(function(){clearTimeout(timeout);next.pending=false;busy--;flush();});
  }
  function event(name, data) {
    if (typeof name !== 'string' || !/^[A-Za-z0-9_.-]{1,160}$/.test(name)) return Promise.resolve();
    var b = base('event'); b.name = name; b.properties = props(data);
    return enqueue(b);
  }
  function pageview() { return enqueue(base('pageview')); }
  function track(name, data) {
    if (typeof name === 'string') return event(name,data);
    if (name && typeof name === 'object' && typeof name.name === 'string') return event(name.name,name.data);
    // Retain the existing API's explicit pageview form. It never emits a sale.
    if (name == null) return pageview();
    return Promise.resolve();
  }
  function attachUmami() {
    var u = window.umami;
    if(!u || typeof u.track !== 'function')return;
    if (u && u.track === track) return;
    var nativeTrack=u.track.bind(u);
    nativeSession=typeof u.getSession==='function'?u.getSession.bind(u):null;u.track=track;
    // Auto tracking is off on the vendor tag: this is its sole pageview owner.
    if(!cloudPageviewSent){cloudPageviewSent=true;Promise.resolve(nativeTrack()).then(bridge).catch(function(){});}
    bridge();
  }
  function bridge() {
    var sid = umamiId(), signature = sid+'|'+gaClient;
    if (signature === '|' || signature === lastBridge || !started) return;
    lastBridge = signature;
    // This is an identity observation, never a pageview or an extra visitor.
    event('identity_observed');
  }
  // Cloud's own automatic pageviews continue, while custom events/properties
  // have one owner below and no longer consume its event allowance.
  window.GZCloudBeforeSend=function(type,payload){return type==='event' && !payload.name ? payload : false;};
  window.GZTraffic={version:'owned-observations-20260919',attachUmami:attachUmami,track:track};
  function start() {
    if (started) return; started=true;pageview();
    if (typeof window.gtag === 'function' && !window['ga-disable-'+GA])
      window.gtag('get',GA,'client_id',function(id){if (/^\d{1,20}\.\d{1,20}$/.test(id||'')){gaClient=id;bridge();}});
    [1000,3000,10000].forEach(function(ms){setTimeout(bridge,ms);});
  }
  document.addEventListener('click',function(e){
    if (e.button > 0) return;
    var a=e.target && e.target.closest && e.target.closest('[data-umami-event]');
    if (a) {
      var data={};a.getAttributeNames().forEach(function(k){if(k.startsWith('data-umami-event-'))data[k.slice(17)]=a.getAttribute(k);});
      event(a.getAttribute('data-umami-event'),data);
    }
  },true);
  function buy(e) {
    if (e.type==='auxclick' ? e.button!==1 : e.button>0) return;
    var a=e.target && e.target.closest && e.target.closest('a[href]');if(!a)return;
    try {
      var u=new URL(a.href,location.href),m=u.pathname.match(/^\/l\/([A-Za-z0-9-]+)\/?$/), target=m && productBySlug[m[1]];
      if (u.protocol==='https:' && u.hostname==='gazillionindustries.gumroad.com' && target) {
        var b=base('click');b.action='buy';b.target=target;enqueue(b);
      }
    } catch (_) {}
  }
  document.addEventListener('click',buy,true);document.addEventListener('auxclick',buy,true);
  window.addEventListener('online',function(){if(retryTimer){clearTimeout(retryTimer);retryTimer=null;}flush();});
  window.addEventListener('pagehide',function(){flush(true);});
  window.addEventListener('pageshow',function(e){
    // BFCache restores the same observed document, not a second load.
    if(!e.persisted)start();flush();
  });
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
  // The vendor is asynchronous: whichever finishes first attaches the wrapper.
  if(window.umami)attachUmami();
  // A blocked Cloud script never stops owned collection; a late one can attach.
  setTimeout(attachUmami,5000);
})();
