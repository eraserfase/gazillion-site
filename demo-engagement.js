/* Observation only: never changes playback, volume, controls or navigation.
   gz_ names are metadata: the live board already excludes them from presence.
   Campaign names retain the cell even where Umami's share hides event props. */
(function () {
  "use strict";
  if (!/^(www\.)?gazillionindustries\.com$/i.test(location.hostname)) return;
  var product = (location.pathname.match(/\/(f12|skruu|tripleog)\.html$/) || [])[1];
  if (!product) return;
  var attr = window.GZ_ATTR;
  if (!attr) return;
  var tags = attr.tags || {}, groups = {spend_high:"h",spend_light:"l",store_engaged:"e",store_other:"o",drugs_free:"d",gazillion_paid:"p",product_comp:"c",other_active:"x"};
  var products = {f12:"f",skruu:"s",tripleog:"t"};
  var arm = (tags.utm_content || "").match(/^(e01|e02)_(f12|skruu|tripleog)_a_(cta|demo)$/);
  var wave = arm && (arm[1] === "e01" ? "a" : "b");
  var campaign = tags.utm_source === "kit" && tags.utm_medium === "email" &&
    tags.utm_campaign === "202609_demo_funnel" && groups[tags.utm_term] && arm &&
    tags.utm_id === "ef2609_" + tags.utm_term + "_" + arm[2] + "_" + wave;
  var prefix = campaign ? "gz_ef2609" + wave + "_" + groups[tags.utm_term] + "_" + products[arm[2]] + "_" + products[product] + "_" : "gz_demo_" + product + "_";
  var pending = [], memory = {}, inFlight = {};
  function stateKey(name) { return "gz_demo_v1:" + attr.token + ":" + name; }
  function seen(key) { try { return sessionStorage.getItem(key) === "1" || memory[key]; } catch(e) { return memory[key]; } }
  function remember(key) { memory[key]=true; try { sessionStorage.setItem(key,"1"); } catch(e) {} }
  function emit(video, code, details, repeat) {
    attr.touch();
    var name = prefix + video + "_" + code, key = stateKey(name);
    if (!repeat && (seen(key) || inFlight[key])) return;
    var props = {product:product,video:video,journey:attr.token,tracking_version:"demo_v2"};
    ["utm_source","utm_medium","utm_campaign","utm_term","utm_content","utm_id"].forEach(function(k){if(tags[k]) props[k]=tags[k];});
    Object.keys(details || {}).forEach(function(k){props[k]=details[k];});
    // Pending observations retain the original token/cell. A late library load
    // cannot recast them as a later session or fabricate another observation.
    if (!repeat) inFlight[key]=true;
    pending.push({name:name,key:key,props:props,repeat:repeat});
    flush();
  }
  function flush() {
    if (!window.umami || typeof window.umami.track !== "function") return;
    pending.splice(0).forEach(function(item){
      try {
        var result = window.umami.track(item.name,item.props);
        // No automatic network retry: an ambiguous response could double count.
        if (!item.repeat) remember(item.key);
        if (result && result.catch) result.catch(function(){});
      } catch(e) {}
      delete inFlight[item.key];
    });
  }
  var attempts=0, waiting=setInterval(function(){flush();if(++attempts>=60 || !pending.length) clearInterval(waiting);},1000);
  if (campaign) emit("p","arrival",{});
  document.addEventListener("click",function(event){
    var a=event.target.closest && event.target.closest("a[href]");
    if (!a || !campaign) return;
    try {
      var u=new URL(a.href,location.href);
      if(u.hostname === "gazillionindustries.gumroad.com")
        emit("p","buy",{position:(a.getAttribute && a.getAttribute("data-pos")) || a.id || (a.className || "link").toString().slice(0,70)});
    } catch(e) {}
  },true);

  var players=[];
  document.querySelectorAll("video[id]").forEach(function(video){
    var codes={"demo-new":"n",demo:"o",dibi:"d",wino:"w"};
    var code=codes[video.id]; if (!code) return;
    var seconds=0, ranges=[], previous=null, session=attr.token, sounded=false, mediaFailed=false;
    function audible(){return !document.hidden && !video.paused && !video.ended && !video.seeking && !video.muted && video.volume>0 && video.readyState>=2;}
    function data(){return {asset:(video.currentSrc || video.src || "").split("/").slice(-2).join("/"),audible_seconds:Math.round(seconds*10)/10,heard_seconds:Math.round(heard()*10)/10,duration:Number.isFinite(video.duration)?Math.round(video.duration*10)/10:0};}
    function heard(){return ranges.reduce(function(n,r){return n+r[1]-r[0];},0);}
    function addRange(a,b){
      ranges.push([a,b]); ranges.sort(function(x,y){return x[0]-y[0];});
      var merged=[];
      ranges.forEach(function(r){var last=merged[merged.length-1];if(last && r[0]<=last[1]+.02) last[1]=Math.max(last[1],r[1]);else merged.push(r);});
      ranges=merged;
    }
    function sample(){
      if(audible())attr.touch();
      if(session!==attr.token){session=attr.token;seconds=0;ranges=[];previous=null;sounded=false;}
      var now=performance.now(), media=video.currentTime, on=audible();
      if(on && !sounded){sounded=true;emit(code,"sound",data());}
      if(previous && previous.on && on){
        var wall=(now-previous.wall)/1000, delta=media-previous.media, rate=video.playbackRate || 1;
        if(wall>0 && wall<2 && delta>0 && delta<=wall*rate+.3){
          seconds+=Math.min(wall,delta/rate);addRange(previous.media,media);
          [10,30,60,120].forEach(function(n){if(seconds>=n) emit(code,"s"+n,data());});
          var duration=video.duration, listened=heard();
          if(Number.isFinite(duration) && duration>0){
            [[.25,"q25"],[.5,"q50"],[.75,"q75"],[.98,"complete"]].forEach(function(pair){if(listened>=duration*pair[0])emit(code,pair[1],data());});
          }
        }
      }
      previous={wall:now,media:media,on:on};
    }
    function boundary(){sample();if(sounded)emit(code,"summary",data(),true);previous=null;}
    ["play","playing","volumechange","ratechange"].forEach(function(type){video.addEventListener(type,sample);});
    ["pause","ended","seeking","emptied"].forEach(function(type){video.addEventListener(type,boundary);});
    video.addEventListener("seeked",function(){previous=null;sample();});
    video.addEventListener("waiting",function(){if(sounded)emit(code,"buffer",data());previous=null;});
    // Capture before the player's target listener swaps sources and clears
    // video.error. Preserve initial failure and subsequent recovery separately.
    function recordMediaError(event){
      if(event.target!==video)return;
      mediaFailed=true;
      emit(code,"error",Object.assign(data(),{
        media_error:video.error?video.error.code:0,
        media_message:video.error?(video.error.message||"").slice(0,180):"",
        phase:video.muted?"preview":(sounded?"listening":"requested"),
        ready_state:video.readyState,network_state:video.networkState,
        mp4_support:video.canPlayType('video/mp4; codecs="avc1.640032, mp4a.40.2"'),
        webm_support:video.canPlayType('video/webm; codecs="vp9, opus"')
      }));
    }
    document.addEventListener("error",recordMediaError,true);
    video.addEventListener("playing",function(){
      if(mediaFailed){mediaFailed=false;emit(code,"recovered",data());}
    });
    video.addEventListener("gz-media-unavailable",function(){emit(code,"unavailable",data());});
    // Autoplay may fail before deferred scripts finish downloading.
    if(video.error)recordMediaError({target:video});
    players.push({sample:sample,boundary:boundary});
  });
  setInterval(function(){if(!document.hidden)players.forEach(function(p){p.sample();});},500);
  document.addEventListener("visibilitychange",function(){players.forEach(function(p){p.boundary();});});
  window.addEventListener("pagehide",function(){players.forEach(function(p){p.boundary();});});
})();
