(()=>{
 const root=document.documentElement,key='gazillion-store-theme-v1';
 let theme=root.dataset.defaultTheme||'light';
 try{const saved=localStorage.getItem(key);if(saved==='dark'||saved==='light')theme=saved;}catch{}
 root.dataset.theme=theme;
 function apply(){
  root.dataset.theme=theme;
  const button=document.querySelector('.theme-toggle'),next=theme==='light'?'dark':'light';
  button.setAttribute('aria-label',`Switch to ${next} mode`);button.title=`Switch to ${next} mode`;button.setAttribute('aria-pressed',String(theme==='dark'));
  document.querySelectorAll('.lockup-art').forEach(img=>{const file=img.getAttribute('src').split('/').pop();img.src='/storefront-20261008'+(theme==='light'?'/light':'')+'/normalized-art/'+file;});
  document.querySelector('.posture img').src='/storefront-20261008/light/header-art/posture-dark-ink.svg';
  for(const slug of ['beefy','skruu']){
   const product=document.querySelector(`[data-product="${slug}"]`),video=product.querySelector('video');
   const stem=`/storefront-20261008/assets/catalog-motion/${slug}-${theme}`,rev='?v=20261008-v8c';
   product.querySelector('.panel-link img').src=stem+(slug==='skruu'?'-detail-v8.webp':'-poster.webp')+rev;
   video.dataset.preview=stem+(slug==='skruu'?'-detail-v8.mp4':'-preview.mp4')+rev;
   if(slug==='beefy')video.dataset.source=stem+'-demo.mp4'+rev;
  }
 }
 document.addEventListener('DOMContentLoaded',()=>{
  apply();
  document.querySelector('.theme-toggle').addEventListener('click',()=>{
   theme=theme==='light'?'dark':'light';apply();
   try{localStorage.setItem(key,theme);}catch{}
   document.dispatchEvent(new Event('store-themechange'));
  });
 });
})();
