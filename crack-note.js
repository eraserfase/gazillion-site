/* A note from the owner for visitors who arrive from a site carrying cracked copies
   (3 Oct 2026, two days after BEEFY 1.2.0 was keygenned). The words are his,
   verbatim; do not edit them here without him.

   Shown ONLY when the browser reports one of the referrers below. AudioZ strips
   the referrer from its link, so its visitors are indistinguishable from someone
   typing the address - they must never see this, it would accuse real customers.

   Per-page setup, before this script loads:
     window.GZ_CRACK_NOTE = { yesUrl: 'https://…/l/<perm>/<CODE>', media: 'owner.mp4' | 'owner.jpg' }
   Without yesUrl the note does not show at all on the live site.
   Preview on any non-production host with ?cracknote=1. */
(function () {
  // "no" marks this browser; from then on every page carrying this script shows the goodbye screen
  // in place of the site. It is a browser mark, not an IP ban - this site has no server to refuse anyone.
  var BYE_KEY = 'gz-crack-bye';
  function bye() {
    var s = document.createElement('style');
    s.textContent = 'html,body{overflow:hidden!important}.gz-bye{position:fixed;inset:0;z-index:2147483647;background:#000;color:#fff;' +
      'display:flex;align-items:center;justify-content:center;padding:24px;text-align:center;' +
      'font:700 clamp(22px,5vw,40px)/1.25 -apple-system,BlinkMacSystemFont,"Helvetica Neue",Arial,sans-serif}' +
      '.gz-bye canvas{position:absolute;inset:0;width:100%;height:100%}' +
      '.gz-bye span{position:relative;text-shadow:0 0 18px #000,0 0 6px #000}';
    var d = document.createElement('div');
    d.className = 'gz-bye';
    var cv = document.createElement('canvas');
    var words = document.createElement('span');
    words.textContent = 'aight then, bet. bye felicia.';
    d.appendChild(cv);
    d.appendChild(words);
    function put() { document.head.appendChild(s); document.body.appendChild(d); rain(cv); }
    if (document.body) put(); else document.addEventListener('DOMContentLoaded', put);
  }
  // The same flood the launch board drops on a sale (burst across the whole screen, then a steady
  // fall with drift and spin) - here it never stops, and the drops are laugh-cry faces.
  function rain(cv) {
    var ctx = cv.getContext && cv.getContext('2d');
    if (!ctx) return;
    var still = window.matchMedia && matchMedia('(prefers-reduced-motion:reduce)').matches;
    var spr = document.createElement('canvas');
    spr.width = spr.height = 96;
    var sx = spr.getContext('2d');
    sx.font = '72px "Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif';
    sx.textAlign = 'center'; sx.textBaseline = 'middle';
    sx.fillText('😂', 48, 52);
    var W = 0, H = 0, dpr = 1, parts = [], last = performance.now(), acc = 0;
    function size() {
      W = innerWidth; H = innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
    }
    function drop(across) {
      var sc = 0.4 + Math.random() * 0.5;
      parts.push({ s: sc, x: Math.random() * W,
        y: across ? Math.random() * H : -96 * sc - Math.random() * H * 0.25,
        vy: (300 + Math.random() * 420) / 1000, vx: (Math.random() - 0.5) * 120 / 1000,
        rot: Math.random() * 7, vr: (Math.random() - 0.5) * 0.004 });
    }
    function draw(dt) {
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, cv.width, cv.height);
      for (var i = 0; i < parts.length; i++) {
        var p = parts[i];
        p.y += p.vy * dt; p.x += p.vx * dt; p.rot += p.vr * dt;
        var c = Math.cos(p.rot) * dpr, n = Math.sin(p.rot) * dpr;
        ctx.setTransform(c, n, -n, c, p.x * dpr, p.y * dpr);
        ctx.drawImage(spr, -48 * p.s, -48 * p.s, 96 * p.s, 96 * p.s);
      }
    }
    size();
    var density = Math.max(0.35, Math.min(1.6, (W * H) / (1280 * 800)));
    for (var i = 0, n = Math.round(110 * density); i < n; i++) drop(true);
    if (still) { draw(0); return; }
    addEventListener('resize', size);
    (function frame(at) {
      var dt = Math.min(64, at - last); last = at;
      acc += dt * (26 * density / 1000);
      while (acc >= 1 && parts.length < 420 * density) { acc -= 1; drop(false); }
      if (acc > 1) acc = 1;
      draw(dt);
      parts = parts.filter(function (p) { return p.y < H + 120; });
      requestAnimationFrame(frame);
    })(last);
  }
  var marked = false;
  try { marked = localStorage.getItem(BYE_KEY) === '1'; } catch (e) {}
  if (!/^(www\.)?gazillionindustries\.com$/i.test(location.hostname) && /[?&]cracknote=reset/.test(location.search)) {
    try { localStorage.removeItem(BYE_KEY); } catch (e) {}
    marked = false;
  }
  if (marked) { bye(); return; }

  var REFERRERS = /(^|\.)(hideyou\.me|audiolove\.me|audiolove\.info|audioz\.download|audio\.tools|goaudio\.net|dl4all\.org|plugincrack\.com|peeplink\.in|minidl\.org|vstclub\.com|oneddl\.org|vstorrent\.org|plugintorrent\.com)$/i;
  var live = /^(www\.)?gazillionindustries\.com$/i.test(location.hostname);
  var cfg = window.GZ_CRACK_NOTE || {};
  var from = '';
  try { from = new URL(document.referrer).hostname; } catch (e) {}
  var preview = !live && /[?&]cracknote=1/.test(location.search);
  if (!preview && !(REFERRERS.test(from) && cfg.yesUrl)) return;
  try {
    if (!preview && sessionStorage.getItem('gz-crack-note')) return;
    sessionStorage.setItem('gz-crack-note', '1');
  } catch (e) {}

  function track(name) {
    if (!live) return;
    var t = window.GZTraffic || window.umami;
    if (t && t.track) t.track(name, { from: from });
  }

  var css = document.createElement('style');
  css.textContent =
    '.gz-cn{position:fixed;inset:0;z-index:99999;display:flex;align-items:center;justify-content:center;' +
    'background:rgba(20,14,12,.82);padding:16px;overflow:auto}' +
    '.gz-cn-card{background:var(--paper,#fff8e8);color:var(--ink,#211715);max-width:440px;width:100%;' +
    'border:3px solid var(--ink,#211715);border-radius:14px;padding:22px 22px 20px;box-sizing:border-box;' +
    'font:500 17px/1.45 -apple-system,BlinkMacSystemFont,"Helvetica Neue",Arial,sans-serif;text-align:left}' +
    '.gz-cn-media{display:block;width:100%;aspect-ratio:880/525;border-radius:10px;object-fit:cover;margin:0 0 16px;' +
    'border:3px solid var(--ink,#211715);background:#d9d2c3;box-sizing:border-box}' +
    '.gz-cn-media.gz-cn-empty{display:flex;align-items:center;justify-content:center;font-size:12px;text-align:center;padding:10px}' +
    '.gz-cn p{margin:0 0 12px}' +
    '.gz-cn-sig{margin:14px 0 16px;font-weight:700}' +
    '.gz-cn-btns{display:flex;gap:10px}' +
    '.gz-cn-btns a,.gz-cn-btns button{flex:1;font:700 17px/1 inherit;padding:14px 10px;border-radius:10px;cursor:pointer;' +
    'border:3px solid var(--ink,#211715);text-align:center;text-decoration:none;box-sizing:border-box}' +
    '.gz-cn-yes{background:var(--red,#de302b);color:#fff}' +
    '.gz-cn-no{background:transparent;color:var(--ink,#211715)}';
  document.head.appendChild(css);

  var lines = [
    'looks like you came here from a site hosting cracks of my stuff.',
    'what... you thought i wouldnt notice?',
    'i get it. im not mad at you. but i want to remind you that im a solo-dev with a family.',
    "i'm not some faceless company.",
    'im flattered if you want to steal my stuff. nobody wants to steal something that sucks.',
    'but, if this changes your mind about stealing from me - i can offer you a discount.',
    'want it?'
  ];

  var wrap = document.createElement('div');
  wrap.className = 'gz-cn';
  wrap.setAttribute('role', 'dialog');
  wrap.setAttribute('aria-modal', 'true');
  var card = document.createElement('div');
  card.className = 'gz-cn-card';

  var media;
  if (cfg.media && /\.(mp4|webm|mov)(\?|$)/i.test(cfg.media)) {
    media = document.createElement('video');
    media.src = cfg.media; media.autoplay = true; media.muted = true; media.loop = true;
    media.playsInline = true; media.controls = false;
    media.addEventListener('click', function () { media.muted = !media.muted; });
  } else if (cfg.media) {
    media = document.createElement('img');
    media.src = cfg.media; media.alt = 'Tony Barko';
  } else {
    media = document.createElement('div');
    media.className = 'gz-cn-empty';
    media.textContent = 'tony (photo or video)';
  }
  media.className = 'gz-cn-media ' + (media.className || '');
  card.appendChild(media);

  lines.forEach(function (text) {
    var p = document.createElement('p');
    p.textContent = text;
    card.appendChild(p);
  });
  var sig = document.createElement('p');
  sig.className = 'gz-cn-sig';
  sig.textContent = '— tony barko';
  card.appendChild(sig);

  var btns = document.createElement('div');
  btns.className = 'gz-cn-btns';
  var yes = document.createElement('a');
  yes.className = 'gz-cn-yes';
  yes.textContent = 'yes';
  yes.href = cfg.yesUrl || '#';
  yes.addEventListener('click', function (e) {
    track('crack_note_yes');
    if (!cfg.yesUrl) { e.preventDefault(); close(); }
  });
  var no = document.createElement('button');
  no.type = 'button';
  no.className = 'gz-cn-no';
  no.textContent = 'no';
  no.addEventListener('click', function () {
    track('crack_note_no');
    try { localStorage.setItem(BYE_KEY, '1'); } catch (e) {}
    close();
    bye();
  });
  btns.appendChild(yes);
  btns.appendChild(no);
  card.appendChild(btns);
  wrap.appendChild(card);

  function close() { wrap.remove(); css.remove(); }
  function show() { document.body.appendChild(wrap); track('crack_note_shown'); }
  if (document.body) show(); else document.addEventListener('DOMContentLoaded', show);
})();
