/* Hover zoom that follows the cursor on still-image cards (.zoom-product). Tony, 20 Nov 2026. */
(function(){
  if(!matchMedia('(hover:hover) and (pointer:fine)').matches||matchMedia('(prefers-reduced-motion:reduce)').matches)return;
  document.querySelectorAll('.zoom-product .stage').forEach(function(stage){
    var img=stage.querySelector('.panel-link img'); if(!img)return;
    function at(e){var r=img.getBoundingClientRect();
      var x=Math.max(0,Math.min(100,(e.clientX-r.left)/r.width*100)), y=Math.max(0,Math.min(100,(e.clientY-r.top)/r.height*100));
      img.style.transformOrigin=x+'% '+y+'%';}
    stage.addEventListener('pointerenter',at); stage.addEventListener('pointermove',at);
  });
})();
