/* "play demo" on a sample pack card plays a tape track from a set second (Tony, 20 Nov 2026: pack #1 = SANI HANDS from 0:43).
   Button: .sound.pack-demo[data-audio][data-start]. play demo -> pause -> resume; one pack demo at a time. */
(function(){
  var buttons=[].slice.call(document.querySelectorAll('.pack-demo[data-audio]'));
  buttons.forEach(function(b){
    var audio=null,label=b.querySelector('span'),name=b.getAttribute('data-name')||'demo';
    function set(t){label.textContent=t;b.setAttribute('aria-label',(t==='pause'?'Pause ':t==='resume'?'Resume ':'Play ')+name+' demo with sound');}
    b.addEventListener('click',function(){
      if(!audio){audio=new Audio(b.getAttribute('data-audio'));audio.preload='auto';
        audio.addEventListener('pause',function(){set(audio.ended?'play demo':'resume');});
        audio.addEventListener('play',function(){set('pause');});
        audio.addEventListener('ended',function(){audio.currentTime=+b.getAttribute('data-start')||0;set('play demo');});
        audio.currentTime=+b.getAttribute('data-start')||0;}
      if(audio.paused){buttons.forEach(function(o){if(o!==b&&o._audio&&!o._audio.paused)o._audio.pause();});
        if(audio.currentTime<(+b.getAttribute('data-start')||0))audio.currentTime=+b.getAttribute('data-start')||0;
        audio.play().catch(function(){set('play demo');});}
      else audio.pause();
      b._audio=audio;
    });
  });
})();
