const products=[...document.querySelectorAll('.product')];
const filters=[...document.querySelectorAll('[data-filter]')];
const videos=[...document.querySelectorAll('.stage video')];
let generation=0;
const players=new Map(),hoverDevice=matchMedia('(hover:hover) and (pointer:fine)'),reducedMotion=matchMedia('(prefers-reduced-motion:reduce)');
function buttonFor(video){return video.closest('.stage').querySelector('.sound');}
function labelFor(video,text){const button=buttonFor(video);button.querySelector('span').textContent=text;const verb={'play demo':'Play','pause':'Pause','resume':'Resume','replay demo':'Replay','try again':'Retry'}[text]||text;const name=video.closest('.product').getAttribute('aria-label');button.setAttribute('aria-label',`${verb} ${name} demo${verb==='Play'||verb==='Replay'?' with sound':''}`);}
function pause(video){players.get(video)?.pause();}
function stopOthers(except){videos.forEach(v=>{if(v!==except)pause(v);});}
filters.forEach(button=>button.addEventListener('click',()=>{
 const selected=button.dataset.filter;
 document.querySelector('.delivery').hidden=selected==='ipad';
 document.querySelector('.catalog-grid').dataset.view=selected;
 filters.forEach(f=>f.setAttribute('aria-pressed',String(f===button)));
 products.forEach(p=>{p.hidden=selected!=='all'&&!p.dataset.category.split(' ').includes(selected);if(p.hidden){const video=p.querySelector('video');if(video)pause(video);}});
 const count=products.filter(p=>!p.hidden).length;
 document.querySelector('#filter-status').textContent=`Showing ${count} ${count===1?'product':'products'}.`;
 document.dispatchEvent(new Event('catalog-filter'));
}));
const demoDialog=document.querySelector('.demo-viewer'),demoVideo=demoDialog.querySelector('video'),demoPlay=demoDialog.querySelector('.demo-play'),demoFailure=demoDialog.querySelector('.demo-failure');
let demoProduct=null,demoRequest=0;
const demoChoices=document.createElement('div');demoChoices.className='demo-choices';demoChoices.hidden=true;demoChoices.setAttribute('aria-label','CHORDEA demonstrations');
demoDialog.querySelector('.demo-screen').after(demoChoices);
const demoAppActions=document.createElement('div');demoAppActions.className='demo-app-actions';demoAppActions.hidden=true;demoDialog.append(demoAppActions);
const chordeaDemos=[['hands-on','/storefront-20261008/assets/chordea/hands-demo.mp4'],['learn mode','/storefront-20261008/assets/chordea/learn-mode-demo.mp4'],['Ashta · Hydrasynth','/storefront-20261008/assets/chordea/hydrasynth-demo.mp4']];
for(const [label,src] of chordeaDemos){const choice=document.createElement('button');choice.type='button';choice.textContent=label;choice.dataset.source=src;choice.addEventListener('click',()=>{demoVideo.pause();demoVideo.src=src;demoChoices.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',String(b===choice)));playFullDemo();});demoChoices.append(choice);}

function syncDemo(){
 const active=!demoVideo.paused;
 demoPlay.querySelector('span').textContent=active?'pause demo':demoVideo.ended?'replay demo':'resume demo';
 demoPlay.querySelector('path').setAttribute('d',active?'M8 5v14M16 5v14':'m8 5 11 7-11 7Z');
 demoPlay.setAttribute('aria-label',demoFailure.hidden?(active?'Pause demo':demoVideo.ended?'Replay demo':'Resume demo'):'Retry demo');
 if(!demoFailure.hidden)demoPlay.querySelector('span').textContent='try again';
}
function syncDemoCart(){
 if(!demoProduct)return;
 const original=demoProduct.querySelector('.add-to-cart'),copy=demoDialog.querySelector('.demo-add');
 if(!original)return;
 copy.innerHTML=original.innerHTML;copy.classList.toggle('in-cart',original.classList.contains('in-cart'));copy.setAttribute('aria-label',original.getAttribute('aria-label'));
}
async function playFullDemo(){
 const ticket=++demoRequest;demoFailure.hidden=true;demoPlay.disabled=true;
 try{await demoVideo.play();}catch(e){if(ticket===demoRequest&&e.name!=='AbortError')demoFailure.hidden=false;}
 finally{if(ticket===demoRequest){demoPlay.disabled=false;syncDemo();}}
}
function openDemo(video){
 stopOthers(null);demoProduct=video.closest('.product');
 demoDialog.querySelector('h2').textContent=demoProduct.getAttribute('aria-label');
 const info=demoProduct.querySelector('.product-page')||demoProduct.querySelector('.cta');demoDialog.querySelector('.product-page').href=info.href;
 demoDialog.querySelector('.formats').innerHTML=demoProduct.querySelector('.formats').innerHTML;
 demoDialog.querySelector('.money').textContent=demoProduct.querySelector('.money').textContent;
 const isApp=demoProduct.dataset.product==='chordea';
 demoDialog.querySelector('.demo-actions').hidden=isApp;demoAppActions.hidden=!isApp;demoChoices.hidden=!isApp;
 if(isApp){demoAppActions.replaceChildren(demoProduct.querySelector('.app-details').cloneNode(true),demoProduct.querySelector('.cta').cloneNode(true));demoChoices.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.source===video.dataset.source)));}
 syncDemoCart();demoVideo.src=video.dataset.source;demoVideo.muted=false;demoVideo.loop=false;demoVideo.controls=false;
 demoDialog.showModal();document.body.classList.add('demo-open');playFullDemo();
}
demoDialog.querySelector('.demo-close').addEventListener('click',()=>demoDialog.close());
demoDialog.addEventListener('close',()=>{demoRequest++;demoVideo.pause();demoVideo.removeAttribute('src');demoVideo.load();document.body.classList.remove('demo-open');demoPlay.disabled=false;previewVisible();});
demoDialog.addEventListener('click',e=>{if(e.target===demoDialog){const r=demoDialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)demoDialog.close();}});
demoDialog.querySelector('.demo-add').addEventListener('click',()=>{if(demoProduct.querySelector('.add-to-cart').classList.contains('in-cart'))demoDialog.close();demoProduct.querySelector('.add-to-cart').click();syncDemoCart();});
document.addEventListener('product-link-copied',()=>{if(demoDialog.open){const label=demoDialog.querySelector('.demo-share span');label.textContent='link copied';setTimeout(()=>label.textContent='share',2200);}});
demoDialog.querySelector('.demo-share').addEventListener('click',()=>{demoProduct.querySelector('.share-product').click();});
demoPlay.addEventListener('click',()=>{if(!demoVideo.paused)demoVideo.pause();else{if(demoVideo.error)demoVideo.load();if(demoVideo.ended)demoVideo.currentTime=0;playFullDemo();}});
['play','pause','ended'].forEach(event=>demoVideo.addEventListener(event,syncDemo));
demoVideo.addEventListener('error',()=>{if(demoVideo.getAttribute('src')){demoFailure.hidden=false;syncDemo();}});
for(const video of videos){
 const stage=video.closest('.stage'),button=buttonFor(video),still=video.parentElement.querySelector('.panel-link img')||stage.querySelector('img');
 let request=0,failed=false,cameraFrame=0,cameraStart=0;
 const screen={
  winnetka:{x:37,y:20,w:549,h:371,approach:3,holdEnd:11,return:4,origin:'center bottom',maxHeightRatio:.65},
  drugs:{x:28,y:384,w:352,h:216,approach:3,holdEnd:8,return:3,origin:'center bottom'},
  f12:{x:24,y:476,w:254,h:190,origin:'center bottom'},
  tripleog:{x:16,y:48,w:289,h:176,origin:'center top'}
 }[video.dataset.camera];
 const lcd=screen?document.createElement('canvas'):null;
 const lcdContext=lcd?.getContext('2d');
 if(lcd){lcd.width=screen.w;lcd.height=screen.h;lcd.style.transformOrigin=screen.origin;lcd.className='lcd-popout';lcd.hidden=true;lcd.setAttribute('aria-hidden','true');video.parentElement.append(lcd);}

 function camera(){
  if(!video.dataset.camera||video.paused||video.hidden)return;
  const window=video.closest('.media-window'),ratio=video.videoWidth/video.videoHeight;
  let maximum=video.dataset.camera==='journeyman'?1.9:Math.max(1,Math.min(2.55,window.clientWidth/(window.clientHeight*ratio)*.96));
  if(video.dataset.camera==='beefy')maximum=Math.max(1.15,Math.min(2.25,window.clientWidth/(window.clientHeight*ratio*.82)*.94));

  const phase=video.currentTime/video.duration;
  const ease=x=>{x=Math.max(0,Math.min(1,x));return x*x*(3-2*x);};
  const amount=phase<.6?ease((phase-.055)/.23):1-ease((phase-.72)/.25);
  if(video.dataset.camera==='journeyman'){
   // Approach first, then one continuous vertical pass at fixed magnification.
   const t=((performance.now()-cameraStart)/1000)%20;
   const smooth=x=>{x=Math.max(0,Math.min(1,x));return x*x*x*(x*(x*6-15)+10);};
   const lift=t<15?smooth((t-.6)/2.8):1-smooth((t-15)/3.2);
   const travel=smooth((t-3.4)/10.5);
   const fit=Math.min(window.clientWidth/video.videoWidth,window.clientHeight/video.videoHeight);
   const closeFit=Math.min(1.35,window.clientWidth/(video.videoWidth*.57));
   const currentFit=fit+(closeFit-fit)*lift;
   const halfView=window.clientHeight/(2*closeFit);
   const focusY=halfView+8+(video.videoHeight-2*halfView-16)*travel;
   const naturalTop=window.clientHeight-video.videoHeight*fit;
   const closeTop=window.clientHeight/2-focusY*closeFit;
   const desiredTop=naturalTop+(closeTop-naturalTop)*lift;
   const offset=desiredTop-(window.clientHeight-video.videoHeight*currentFit);
   video.style.transformOrigin='center bottom';
   video.style.transform=`translateY(${offset}px) scale(${currentFit/fit})`;
   cameraFrame=requestAnimationFrame(camera);return;
  }

  let anchor=video.dataset.camera==='tripleog'?8:88;
  if(video.dataset.camera==='f12')anchor=32+43*ease((phase-.32)/.27);
  if(lcd){
   // One decoder: enlarge only the actual screen pixels; the chassis stays fixed.
   const t=video.currentTime;
   const lift=screen.approach?(t<screen.holdEnd?ease((t-1)/screen.approach):1-ease((t-screen.holdEnd)/screen.return)):amount;
   const restingFit=Math.min(window.clientWidth/video.videoWidth,window.clientHeight/video.videoHeight);
   const expandedHeight=(window.clientWidth+16)*screen.h/screen.w;
   const peakFit=screen.recede?Math.min(restingFit,(window.clientHeight-expandedHeight-4)/(video.videoHeight-screen.y-screen.h)):restingFit;
   const fit=restingFit+(peakFit-restingFit)*lift;
   if(screen.recede){video.style.transformOrigin='center bottom';video.style.transform=`scale(${fit/restingFit})`; }
   const baseWidth=screen.w*fit,baseHeight=screen.h*fit;
   const maximumWidth=screen.maxHeightRatio?Math.min(window.clientWidth+16,window.clientHeight*screen.maxHeightRatio*screen.w/screen.h):window.clientWidth+16;
   const room=Math.max(1,maximumWidth/baseWidth);
   const target=room;
   const scale=1+(target-1)*lift;
   lcd.hidden=lift<=0;
   if(!lcd.hidden){
    lcdContext.drawImage(video,screen.x,screen.y,screen.w,screen.h,0,0,screen.w,screen.h);
    lcd.style.width=`${baseWidth}px`;lcd.style.height=`${baseHeight}px`;
    lcd.style.left=`${(window.clientWidth-video.videoWidth*fit)/2+screen.x*fit}px`;
    const sourceTop=window.clientHeight-video.videoHeight*fit+screen.y*fit;
    const rise=baseHeight*(scale-1)*(screen.origin==='center top'?0:screen.origin==='center center'?.5:1);
    lcd.style.top=`${Math.max(sourceTop,rise)}px`;
    lcd.style.transform=`scale(${scale})`;
    lcd.style.boxShadow=`0 ${3*lift}px ${9*lift}px rgba(0,0,0,${.24*lift})`;
   }
   cameraFrame=requestAnimationFrame(camera);return;
  }
  video.style.transformOrigin=`50% ${anchor}%`;
  video.style.transform=`scale(${1+(maximum-1)*amount})`;
  cameraFrame=requestAnimationFrame(camera);
 }

 video.muted=true;video.controls=false;video.loop=true;
 function pauseThis(){request++;cancelAnimationFrame(cameraFrame);if(lcd)lcd.hidden=true;video.style.transform='';video.pause();video.hidden=true;still.hidden=false;}
 async function preview(){
  if(reducedMotion.matches||document.hidden||stage.closest('.product').hidden||document.querySelector('#cart[open]')||demoDialog.open||failed)return;
  if(!video.paused)return;
  stopOthers(video);const ticket=++request;
  if(!video.getAttribute('src')){video.src=video.dataset.preview;video.load();}
  video.currentTime=0;
  try{await video.play();if(ticket!==request)return;video.hidden=false;still.hidden=true;cameraStart=performance.now();camera();}catch(e){if(ticket===request&&e.name!=='AbortError'){failed=true;pauseThis();}}
 }
 players.set(video,{pause:pauseThis,preview,stopPreview:pauseThis,reset(){pauseThis();failed=false;video.removeAttribute('src');video.load();}});
 stage.addEventListener('pointerenter',()=>{if(hoverDevice.matches)preview();});
 stage.addEventListener('pointerleave',()=>{if(hoverDevice.matches&&!stage.contains(document.activeElement))pauseThis();});
 stage.addEventListener('focusin',e=>{if(e.target.closest('.panel-link'))preview();});
 stage.addEventListener('focusout',e=>{if(!stage.contains(e.relatedTarget))pauseThis();});
 button.addEventListener('click',()=>openDemo(video));
 stage.querySelector('.panel-link').addEventListener('click',()=>openDemo(video));
 video.addEventListener('error',()=>{if(video.getAttribute('src')){failed=true;pauseThis();}});
}
// Touch visitors get one visible instrument preview, never competing audio.
const visibleStages=new Map(),compactViewport=matchMedia('(max-width:700px)');
function previewVisible(){
 if((hoverDevice.matches&&!compactViewport.matches)||reducedMotion.matches||document.hidden)return;
 const visible=[...visibleStages].filter(([v,ratio])=>ratio>=.55&&!v.closest('.product').hidden).sort((a,b)=>b[1]-a[1]);
 const chosen=visible[0]?.[0];
 players.forEach((player,v)=>{if(v!==chosen)player.stopPreview();});
 if(chosen)players.get(chosen).preview();
}
const previewObserver=new IntersectionObserver(entries=>{for(const e of entries){const v=e.target.querySelector('video');visibleStages.set(v,e.intersectionRatio);if(!e.isIntersecting)pause(v);}previewVisible();},{threshold:[0,.55,.7,.85,1]});
videos.forEach(video=>previewObserver.observe(video.closest('.stage')));
document.addEventListener('catalog-filter',previewVisible);
document.addEventListener('store-themechange',()=>{players.forEach(p=>p.reset());previewVisible();});
document.addEventListener('product-share',()=>{stopOthers(null);demoVideo.pause();});
compactViewport.addEventListener('change',previewVisible);
reducedMotion.addEventListener('change',()=>{if(reducedMotion.matches)players.forEach(p=>p.stopPreview());else previewVisible();});
addEventListener('pagehide',()=>{generation++;stopOthers(null);demoVideo.pause();});
document.addEventListener('visibilitychange',()=>{if(document.hidden){generation++;stopOthers(null);demoVideo.pause();}else previewVisible();});

// Digital products are selected once; the iPad app keeps its App Store path.
const purchasable=new Map(products.filter(p=>p.querySelector('.add-to-cart')).map(p=>[p.dataset.product,{
 id:p.dataset.product,name:p.getAttribute('aria-label'),price:Number(p.dataset.price),
 image:p.querySelector('.stage img').getAttribute('src'),checkout:p.dataset.checkout,button:p.querySelector('.add-to-cart')
}]));
const cart=document.querySelector('#cart'),cartItems=cart.querySelector('.cart-items'),cartStatus=document.querySelector('#cart-status');
const cartStorageKey='gazillion-storefront-cart-v1';
let selectedProducts=new Set();
try{const saved=JSON.parse(localStorage.getItem(cartStorageKey)||'[]');if(Array.isArray(saved))selectedProducts=new Set(saved.filter(id=>purchasable.has(id)));}catch{}
const money=cents=>cents===0?'Free':new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:cents%100?2:0}).format(cents/100);
function openCart(){generation++;stopOthers(null);if(demoDialog.open)demoDialog.close();cart.showModal();document.body.classList.add('cart-open');}
function closeCart(){cart.close();}
function drawCart(){
 const items=[...selectedProducts].map(id=>purchasable.get(id));
 const total=items.reduce((sum,p)=>sum+p.price,0);
 document.querySelectorAll('.cart-count').forEach(el=>el.textContent=String(items.length));
 document.querySelector('.cart-toggle').setAttribute('aria-label',`Cart, ${items.length} ${items.length===1?'product':'products'}`);
 document.querySelector('.dock-total').textContent=money(total);
 document.querySelector('#cart-total').textContent=money(total);
 document.querySelector('.cart-dock').hidden=items.length===0;
 cart.querySelector('.cart-empty').hidden=items.length>0;
 cart.querySelector('.cart-bottom').hidden=items.length===0;
 for(const p of purchasable.values()){
  const added=selectedProducts.has(p.id);
  p.button.classList.toggle('in-cart',added);
  p.button.querySelector('span').textContent=added?'in cart':'add to cart';
  p.button.setAttribute('aria-label',added?`${p.name} in cart. View cart`:`Add ${p.name} to cart`);
  p.button.querySelector('path').setAttribute('d',added?'m5 12 4 4L19 6':'M12 5v14M5 12h14');
 }
 cartItems.replaceChildren(...items.map(p=>{
  const row=document.createElement('li');row.className='cart-item';
  const image=document.createElement('img');image.src=document.querySelector(`[data-product="${p.id}"] .panel-link img`).src;image.alt='';
  const details=document.createElement('div');details.className='cart-item-details';
  const name=document.createElement('h3');name.textContent=p.name;
  const remove=document.createElement('button');remove.type='button';remove.className='cart-remove';remove.textContent='Remove';remove.setAttribute('aria-label',`Remove ${p.name} from cart`);
  remove.addEventListener('click',()=>{
   const index=items.findIndex(item=>item.id===p.id);
   selectedProducts.delete(p.id);drawCart();cartStatus.textContent=`${p.name} removed from cart.`;
   const remaining=cartItems.querySelectorAll('.cart-remove');(remaining[Math.min(index,remaining.length-1)]||cart.querySelector('.continue-shopping')).focus();
  });
  const price=document.createElement('span');price.className='cart-item-price';price.textContent=money(p.price);
  details.append(name,remove);row.append(image,details,price);return row;
 }));
 cart.querySelector('.checkout-preview').hidden=true;
 const checkout=cart.querySelector('.checkout');
 const destination=window.GazillionCheckoutAdapter?.resolve([...selectedProducts]);
 const nextCheckout=document.createElement(destination?.ok?'a':'button');
 nextCheckout.className=checkout.className;
 nextCheckout.innerHTML=checkout.innerHTML;
 if(destination?.ok){nextCheckout.href=destination.url;nextCheckout.target='_blank';nextCheckout.rel='noopener';}
 else nextCheckout.type='button';
 checkout.replaceWith(nextCheckout);
 try{localStorage.setItem(cartStorageKey,JSON.stringify([...selectedProducts]));}catch{}
}
for(const p of purchasable.values())p.button.addEventListener('click',()=>{
 if(selectedProducts.has(p.id)){openCart();return;}
 selectedProducts.add(p.id);drawCart();cartStatus.textContent=`${p.name} added to cart. ${selectedProducts.size} ${selectedProducts.size===1?'product':'products'} in cart.`;
});
document.querySelectorAll('.cart-toggle,.cart-dock').forEach(button=>button.addEventListener('click',openCart));
cart.querySelectorAll('.cart-close,.continue-shopping').forEach(button=>button.addEventListener('click',closeCart));
cart.addEventListener('click',event=>{if(event.target===cart){const bounds=cart.getBoundingClientRect();if(event.clientX<bounds.left||event.clientX>bounds.right||event.clientY<bounds.top||event.clientY>bounds.bottom)closeCart();}});
cart.addEventListener('close',()=>{document.body.classList.remove('cart-open');previewVisible();});
cart.addEventListener('click',event=>{
 const checkout=event.target.closest('.checkout');
 if(!checkout||!cart.contains(checkout))return;
 const message=cart.querySelector('.checkout-preview');
 const adapter=window.GazillionCheckoutAdapter;
 if(!adapter){event.preventDefault();message.textContent='Checkout could not load. Your cart has been kept. Please reload and try again.';message.hidden=false;return;}
 const result=adapter.resolve([...selectedProducts]);
 if(!result.ok){event.preventDefault();message.textContent=result.message;message.hidden=false;return;}
 if(checkout.tagName!=='A'||!adapter.matchesDestination(result,checkout.getAttribute('href'))){event.preventDefault();message.textContent='Checkout could not load. Your cart has been kept. Please reload and try again.';message.hidden=false;return;}
 message.hidden=true;
 cartStatus.textContent='Continue in the Gumroad checkout tab. Your cart has been kept here.';
 if(window.GZ_LIVE)for(const id of result.products){
  window.GZ_ATTR?.mark('buy',id);
  (window.GZTraffic||window.umami)?.track?.('storefront_checkout_outbound',{product:id,position:'storefront_cart'});
 }
});
drawCart();
