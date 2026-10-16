/* DRAFT: native review controls, shared audible focus and offscreen pause. */
(()=>{const review=document.querySelector('#ken-review video');if(!review)return;
const pause=()=>review.pause();
new IntersectionObserver(entries=>{if(!entries[0].isIntersecting)pause();}).observe(review);
document.addEventListener('visibilitychange',()=>{if(document.hidden)pause();});
})();
