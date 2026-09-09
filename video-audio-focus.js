/* One audible video per page, including native controls and testimonials. */
(function () {
  function audible(video) {
    return video && video.tagName === "VIDEO" && !video.paused &&
      !video.ended && !video.muted && video.volume > 0;
  }

  function takeAudioFocus(event) {
    var current = event.target;
    // Silent previews must never interrupt someone listening to another video.
    if (!audible(current)) return;
    document.querySelectorAll("video").forEach(function (other) {
      if (other !== current && audible(other)) other.pause();
    });
  }

  // These media events do not bubble; capture also covers newly added players.
  ["play", "playing", "volumechange"].forEach(function (type) {
    document.addEventListener(type, takeAudioFocus, true);
  });
})();
