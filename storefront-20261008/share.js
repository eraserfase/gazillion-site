// Share only the product's public landing URL, without visitor attribution.
const shareStatus=document.querySelector('.share-status');
function showCopyFallback(url,trigger){
 document.querySelector('.share-fallback')?.remove();
 const dialog=document.querySelector('dialog[open]');
 const returnFocus=dialog?.querySelector('.demo-share')||trigger;
 const box=document.createElement('section');box.className='share-fallback';box.setAttribute('aria-label','Copy product link');
 const label=document.createElement('label');label.textContent='Copy product link';
 const input=document.createElement('input');input.type='url';input.readOnly=true;input.value=url;input.setAttribute('aria-label','Product link');
 const close=document.createElement('button');close.type='button';close.textContent='Done';
 const dismiss=()=>{box.remove();(dialog?.open?returnFocus:trigger).focus();};
 close.addEventListener('click',dismiss);
 box.addEventListener('keydown',e=>{if(e.key==='Escape'){e.preventDefault();e.stopPropagation();dismiss();}});
 label.append(input);box.append(label,close);(dialog||document.body).append(box);input.focus();input.select();
}
document.querySelectorAll('[data-share-url]').forEach(button=>{
 const original=button.innerHTML;let resetTimer;
 button.addEventListener('click',async()=>{
 const url=button.dataset.shareUrl,title=button.dataset.shareTitle;
 const product=button.closest('.product')?.dataset.product;
 const observe=(phase)=>{if(typeof storeTrack==='function')storeTrack('storefront_share',{product,phase,position:'storefront'});};
 observe('open');
 // Sharing interrupts a listening session; it must never leave sound playing behind the sheet.
 document.dispatchEvent(new Event('product-share'));
 document.querySelectorAll('video,audio').forEach(media=>media.pause());
 try{
  if(navigator.share){try{await navigator.share({title,url});observe('shared');return;}catch(e){if(e.name==='AbortError'){observe('cancelled');return;}}}
  if(!navigator.clipboard?.writeText)throw new Error('Clipboard unavailable');
  await navigator.clipboard.writeText(url);observe('copied');
  document.dispatchEvent(new CustomEvent('product-link-copied',{detail:{title,url}}));
  if(shareStatus)shareStatus.textContent=title+' link copied.';
  button.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4 4L19 6"/></svg>';button.setAttribute('aria-label',title+' link copied');
  clearTimeout(resetTimer);
  resetTimer=setTimeout(()=>{button.innerHTML=original;button.setAttribute('aria-label','Share '+title);},2200);
 }catch{observe('copy_fallback');showCopyFallback(url,button);}
 });
});
