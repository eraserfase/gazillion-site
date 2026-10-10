/* Actual alpha decode, not a codec-name/UA guess. An opaque H264 rendition is
   the bounded fallback and matches the approved light-page field exactly. */
(function () {
  'use strict';
  const script = document.currentScript;
  const assetBase = new URL('media/', script?.src || location.href);
  const probes = new Map();
  function alphaSupport(kind) {
    if (probes.has(kind)) return probes.get(kind);
    const result = new Promise(resolve => {
      const test = document.createElement('video');
      const mime = kind === 'hevc' ? 'video/mp4; codecs="hvc1"' : 'video/webm; codecs="vp9"';
      if (!test.canPlayType(mime)) { resolve(false); return; }
      let settled = false;
      const finish = supported => {
        if (settled) return;
        settled = true;
        clearTimeout(timer);
        test.removeEventListener('loadeddata', inspect);
        test.removeEventListener('error', rejected);
        test.pause(); test.removeAttribute('src'); test.load();
        resolve(supported);
      };
      const rejected = () => finish(false);
      const inspect = () => {
        if (test.readyState < 2 || !test.videoWidth || !test.videoHeight) return;
        try {
          const canvas = document.createElement('canvas');
          canvas.width = 2; canvas.height = 1;
          const ctx = canvas.getContext('2d', {willReadFrequently: true});
          if (!ctx) { finish(false); return; }
          ctx.clearRect(0,0,2,1);
          ctx.drawImage(test,0,0,1,1,0,0,1,1);
          ctx.drawImage(test,Math.floor(test.videoWidth/2),Math.floor(test.videoHeight/2),1,1,1,0,1,1);
          const pixels = ctx.getImageData(0,0,2,1).data;
          // Transparent corner and actual opaque instrument/test patch prove that
          // a frame was decoded and its transparency survived the decoder.
          finish(pixels[3] < 8 && pixels[7] > 240);
        } catch (_) { finish(false); }
      };
      const timer = setTimeout(rejected,1500);
      test.muted = true; test.playsInline = true; test.preload = 'auto';
      test.addEventListener('loadeddata',inspect);
      test.addEventListener('error',rejected);
      test.src = new URL(kind === 'hevc' ? '/landing-20261010/shared/media/alpha-probe.mov?v=1271d4c1fe15' : '/landing-20261010/shared/media/alpha-probe.webm?v=a95a72ab3b5f',assetBase).href;
      test.load();
    });
    probes.set(kind,result); return result;
  }
  window.GZMediaSources = {
    create(video) {
      const sources = {
        hevc: {preview:video.dataset.previewHevc,demo:video.dataset.demoHevc},
        webm: {preview:video.dataset.previewWebm,demo:video.dataset.demoWebm},
        mp4: {preview:video.dataset.previewMp4,demo:video.dataset.demoMp4}
      };
      let order = ['mp4'];
      const failed = new Set();
      return {
        sources,
        // Explicit click before a capability probe completes chooses the known
        // compatible rendition immediately, preserving the user's gesture.
        immediate: 'mp4',
        ready: Promise.all([alphaSupport('hevc'),alphaSupport('webm')]).then(([hevc,webm]) => {
          order = [hevc&&'hevc',webm&&'webm','mp4'].filter(Boolean)
            .filter(k=>sources[k].preview&&sources[k].demo);
          return order[0] || 'mp4';
        }),
        next(current) {
          failed.add(current);
          return order.find(k=>!failed.has(k)) || null;
        }
      };
    }
  };
})();
