(() => {
const video=document.querySelector('#daedelus-testimonial'); if(!video)return;
const media=[...document.querySelectorAll('video,audio')];
document.addEventListener('play',event=>{
if(!(event.target instanceof HTMLMediaElement))return;
if(event.target===video){for(const other of media)if(other!==video)other.pause();}
else if(!event.target.muted)video.pause();
else if(!video.paused)event.target.pause();
},true);
document.addEventListener('visibilitychange',()=>{if(document.hidden)video.pause();});
new IntersectionObserver(entries=>{if(!entries[0].isIntersecting)video.pause();},{threshold:0}).observe(video);
video.addEventListener('error',()=>{video.parentElement.querySelector('.daedelus-media-error').hidden=false;});
})();
