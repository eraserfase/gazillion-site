/* Choose once when a demo starts. Never exchange a film during playback. */
(function () {
  'use strict';
  window.GZMediaRendition = {
    choose(video, primary, compact) {
      if (!compact) return primary;
      // Safari does not expose navigator.connection. A phone-sized viewport is
      // sufficient evidence to use the 720px, same-timing/audio rendition.
      if (window.matchMedia('(max-width:700px)').matches) return compact;
      const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
      if (connection && (connection.saveData || /(^|-)2g$|^3g$/.test(connection.effectiveType || '') ||
          (connection.downlink > 0 && connection.downlink < 3))) return compact;
      // A completed same-origin preview transfer can also reveal a constrained
      // desktop connection. Cached responses do not measure network throughput.
      try {
        const source = new URL(video.currentSrc || video.getAttribute('src'), location.href).href;
        const samples = performance.getEntriesByName(source, 'resource');
        const sample = samples[samples.length - 1];
        const elapsed = sample && sample.responseEnd - sample.responseStart;
        if (sample && sample.transferSize > 0 && sample.encodedBodySize > 32768 && elapsed > 250 &&
            sample.encodedBodySize * 8 / elapsed < 3000) return compact;
      } catch (_) {}
      return primary;
    }
  };
})();
