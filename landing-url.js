/* Capture attribution before cleaning the address bar or loading analytics.
   This is the single arrival/carry owner for storefront, products and guides. */
(function () {
  'use strict';
  if (!/^(www\.)?gazillionindustries\.com$/i.test(location.hostname) || window.GZLanding) return;
  var arrival = new URL(location.href);
  var analytics = new URL(arrival.href); analytics.hash = '';
  window.GZLanding = {
    href: arrival.href,
    search: arrival.search,
    analyticsUrl: analytics.href,
    pagePath: arrival.pathname + arrival.search
  };
window.GZ_ATTR = (function(){
  var result = {paid:false, tags:{}, token:"", mark:function(){}, touch:function(){}};
  var OWN = /^(www\.)?gazillionindustries\.com$/i;
  if(!OWN.test(location.hostname)) return result;
  var KEY = "gz_arrival_v3", TTL = 30*60000;
  var fields = ["utm_source","utm_medium","utm_campaign","utm_content","utm_term","utm_id","ad_id","adset_id","campaign_id","fbclid"];
  var inbound = new URLSearchParams(window.GZLanding.search), now = Date.now();
  var tags = {}, original = "", token = "", activity = now, sent = {}, sourceSent = {};
  var saved = null, previous = null, ref = null;
  function validToken(value){ return /^[0-9a-f]{24}$/.test(value || ""); }
  function fresh(value){ return value && typeof value.at === "number" && now >= value.at && now-value.at < TTL; }
  function url(value){
    try {
      var u = new URL(value);
      if(!/^https?:$/.test(u.protocol)) return null;
      u.username = ""; u.password = ""; u.hash = "";
      return u;
    } catch(e){ return null; }
  }
  function cleanTags(value){
    var clean = {};
    fields.forEach(function(k){ if(value && typeof value[k] === "string" && value[k]) clean[k] = value[k].slice(0,1024); });
    return clean;
  }
  try {
    saved = JSON.parse(sessionStorage.getItem(KEY) || "null");
    if(!fresh(saved)) saved = null;
    if(saved){
      tags = cleanTags(saved.tags); token = validToken(saved.token) ? saved.token : "";
      previous = url(saved.referrer);
      if(previous && !OWN.test(previous.hostname)) original = previous.toString();
    } else {
      var legacy = JSON.parse(sessionStorage.getItem("gz_arrival_v2") || "null");
      if(fresh(legacy)) tags = cleanTags(legacy.tags);
    }
  } catch(e) {}
  ref = url(document.referrer);
  var internal = ref && OWN.test(ref.hostname);
  var gumroadReturn = ref && /(^|\.)gumroad\.com$/i.test(ref.hostname) && saved;
  if(inbound.get("utm_source")){
    tags = {};
    if(!internal && !gumroadReturn) original = "";
  }
  // Only an actually observed external URL can become the original referrer.
  // An internal hop or checkout return must not overwrite that arrival.
  if(ref && !internal && !gumroadReturn){
    original = ref.toString();
    if(!inbound.get("utm_source")){
      tags = {utm_source:ref.hostname.toLowerCase().replace(/^www\./,""),
              utm_medium:/(^|\.)(instagram|facebook)\.com$/i.test(ref.hostname) ? "social" : "referral"};
    }
  }
  fields.forEach(function(k){ var v = inbound.get(k); if(v) tags[k] = v.slice(0,1024); });
  // The stored activity deadline is authoritative. Never resurrect a token
  // from a shared URL or an internal link after its stored session expired.
  function makeToken(){
    try {
      var bytes = new Uint8Array(12); window.crypto.getRandomValues(bytes);
      return Array.prototype.map.call(bytes,function(n){return ("0"+n.toString(16)).slice(-2);}).join("");
    } catch(e){ return ""; }  // Never derive an identity from browser traits.
  }
  if(!token) token = makeToken();
  var source = (tags.utm_source || "").toLowerCase(), medium = (tags.utm_medium || "").toLowerCase();
  result.paid = /^(meta|facebook|instagram|fb|ig)$/.test(source)
    && /^(paid|paid_social|paid-social|paidsocial|cpc|ppc|social_ads)$/.test(medium);
  result.tags = tags;
  function touch(){
    var at = Date.now();
    if(at < activity || at-activity >= TTL){ token = makeToken(); sent = {}; sourceSent = {}; }
    activity = at; result.token = token;
    try { sessionStorage.setItem(KEY,JSON.stringify({at:at,tags:tags,referrer:original,token:token})); } catch(e) {}
    return token;
  }
  /* First-touch campaign evidence lasts 30 days and is separate from the
     rolling session token. It supplements checkout links only when the
     current arrival has no campaign of its own. */
  var FIRST_KEY = "gz_first_v1", FIRST_TTL = 30*86400000;
  function firstTouch(){
    var now = Date.now(), have = null;
    try { have = JSON.parse(localStorage.getItem(FIRST_KEY) || "null"); } catch(e){ have = null; }
    if(have && (!have.at || now-have.at >= FIRST_TTL || typeof have.at !== "number")) have = null;
    if(!have && (tags.utm_campaign || tags.utm_source)){
      have = {at:now, source:tags.utm_source || "", medium:tags.utm_medium || "",
              campaign:tags.utm_campaign || "", paid:!!result.paid};
      try { localStorage.setItem(FIRST_KEY, JSON.stringify(have)); } catch(e){}
    }
    return have;
  }
  function firstTags(){
    var f = firstTouch();
    if(!f || tags.utm_campaign || !(f.campaign || f.source)) return null;
    var out = {gz_first_days:String(Math.max(0, Math.round((Date.now()-f.at)/86400000)))};
    if(f.campaign) out.gz_first_campaign = f.campaign;
    if(f.source) out.gz_first_source = f.source;
    if(f.medium) out.gz_first_medium = f.medium;
    return out;
  }
  /* Carry the pixel's browser/click identifiers through Gumroad's referrer
     override, preserving the existing cookie and fbclid fallback behavior. */
  function cookie(name){
    try {
      var m = document.cookie.match("(?:^|; )"+name.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+"=([^;]*)");
      return m ? decodeURIComponent(m[1]) : "";
    } catch(e){ return ""; }
  }
  function metaIds(){
    var out = {}, fbp = cookie("_fbp"), fbc = cookie("_fbc");
    if(/^fb\.\d\.\d{10,16}\.[0-9A-Za-z_-]{4,64}$/.test(fbp)) out.gz_fbp = fbp;
    if(/^fb\.\d\.\d{10,16}\./.test(fbc)) out.gz_fbc = fbc.slice(0,400);
    else if(tags.fbclid) out.gz_fbc = "fb.1."+Date.now()+"."+tags.fbclid;
    return out;
  }
  function sourceCode(){
    var aliases = {"ig":"instagram","instagram.com":"instagram","l.instagram.com":"instagram","m.instagram.com":"instagram",
                   "fb":"facebook","facebook.com":"facebook","m.facebook.com":"facebook","l.facebook.com":"facebook","lm.facebook.com":"facebook"};
    var value = aliases[source] || source;
    // A shortened domain is a different domain. Long/unsafe names retain their
    // complete original URL and tags at checkout, with no invented short alias.
    return /^[a-z0-9_.-]{1,18}$/.test(value) && !/^(unknown|unassigned|direct)$/.test(value) ? value : "";
  }
  function mode(){
    if(/^(paid|paid_social|paid-social|paidsocial|cpc|ppc|social_ads)$/.test(medium)) return "p";
    if(/^(email|e-mail|newsletter)$/.test(medium)) return "e";
    if(/^(social|organic_social|organic-social)$/.test(medium)) return "s";
    if(medium === "referral") return "r";
    return "u";
  }
  function emit(name){
    try {
      var p = (window.GZTraffic || window.umami).track(name);
      if(p && typeof p.catch === "function") p.catch(function(){});
      return true;
    } catch(e){ return false; }
  }
  result.mark = function(stage, product){
    touch();
    if(!token || !(window.GZTraffic || window.umami) || typeof (window.GZTraffic || window.umami).track !== "function") return;
    if(stage !== "store" && (!/^(product|buy)$/.test(stage) || !/^(drugs|f12|skruu|tripleog|beefy|journeyman|winnetka)$/.test(product || ""))) return;
    var name = "gz_"+stage+"_"+(stage === "store" ? "" : product+"_")+token;
    if(sent[name]) return;
    var code = sourceCode();
    if(code && !sourceSent[token]) sourceSent[token] = emit("gzs_"+token+"_"+code+"_"+mode());
    sent[name] = emit(name);
  };
  result.touch = touch;
  function carryLink(a){
    try {
      if(a.getAttribute && /^#/.test(a.getAttribute("href") || "")) return;
      var u = new URL(a.href, location.href);
      if(!/^https?:$/.test(u.protocol)) return;
      var own = OWN.test(u.hostname), checkout = u.hostname.toLowerCase() === "gazillionindustries.gumroad.com";
      if(!own && !checkout) return;
      touch();
      fields.forEach(function(k){ if(tags[k]) u.searchParams.set(k,tags[k]); });
      var first = firstTags();
      if(first) Object.keys(first).forEach(function(k){ u.searchParams.set(k,first[k]); });
      if(token) u.searchParams.set("gz_journey",token);
      if(checkout){
        // Gumroad's documented referrer override preserves the actual first
        // external URL. UTM-only/direct arrivals use this real site URL.
        var origin = url(original) || new URL(location.origin+location.pathname);
        fields.forEach(function(k){ var value=u.searchParams.get(k); if(value) origin.searchParams.set(k,value); });
        if(first) Object.keys(first).forEach(function(k){ origin.searchParams.set(k,first[k]); });
        if(token) origin.searchParams.set("gz_journey",token);
        else origin.searchParams.delete("gz_journey");
        var ids = metaIds();
        Object.keys(ids).forEach(function(k){ origin.searchParams.set(k,ids[k]); });
        u.searchParams.set("referrer",origin.toString());
      }
      a.href = u.toString();
    } catch(e) {}
  }
  function carry(){ document.querySelectorAll("a[href]").forEach(carryLink); }
  document.addEventListener("DOMContentLoaded",carry);
  // Refresh the link at the actual action, including a middle-click or a menu
  // opened after an idle tab. This does not block navigation or send a visit.
  ["click","auxclick","contextmenu"].forEach(function(name){
    document.addEventListener(name,function(e){var a=e.target.closest && e.target.closest("a[href]");if(a) carryLink(a);},true);
  });
  touch();
  return result;
})();

  // Keep every functional query component byte-for-byte, including click IDs,
  // affiliate/discount parameters and signatures; retain the fragment and state.
  var utm = /^(utm_source|utm_medium|utm_campaign|utm_content|utm_term|utm_id|gz_journey)$/i;
  var changed = false;
  var kept = arrival.search.slice(1).split('&').filter(function (part) {
    var key = part.split('=')[0];
    try { key = decodeURIComponent(key.replace(/\+/g, ' ')); } catch (_) { return true; }
    if (!utm.test(key)) return true;
    changed = true; return false;
  });
  if (changed) {
    var clean = new URL(arrival.href);
    clean.search = kept.length ? '?' + kept.join('&') : '';
    try { history.replaceState(history.state, '', clean.href); } catch (_) {}
  }
})();
