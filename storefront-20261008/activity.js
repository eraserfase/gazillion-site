(()=>{
 const bar=document.createElement('aside');bar.className='activity-ticker';bar.hidden=true;bar.setAttribute('aria-label','Product activity in the last 24 hours');
 const pause=document.createElement('button');pause.type='button';pause.className='activity-pause';pause.setAttribute('aria-label','Pause activity ticker');pause.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6v12M15 6v12"/></svg>';
 const window=document.createElement('div');window.className='activity-window';window.tabIndex=0;window.setAttribute('aria-label','Recent product activity');
 const track=document.createElement('div');track.className='activity-track';window.append(track);bar.append(pause,window);document.body.append(bar);
 const reduce=matchMedia('(prefers-reduced-motion:reduce)');let entries=[],asOf=0,signature='',animation=null,stopped=false,firstRun=true;
 const countries={'United States':'USA','United Kingdom':'UK','United Arab Emirates':'UAE'};
 const ago=at=>{const minutes=Math.max(1,Math.floor((Date.now()-Date.parse(at))/60000));return minutes<60?`${minutes}m ago`:`${Math.floor(minutes/60)}h ${minutes%60}m ago`;};
 function paint(item,e){
  if(!item.firstElementChild){for(const part of ['time','product','place']){const span=document.createElement('span');span.className=`activity-${part}`;item.append(span);}}
  const place=[e.city,countries[e.country]||e.country].filter(Boolean).join(' ');
  item.children[0].textContent=`${ago(e.at)} - `;
  item.children[1].textContent=e.product;
  item.children[2].textContent=place?', '+place:'';
 }
 function sync(){
  const paused=stopped||reduce.matches||document.hidden;
  if(animation)paused?animation.pause():animation.play();
  pause.setAttribute('aria-label',stopped?'Resume activity ticker':'Pause activity ticker');pause.innerHTML=stopped?'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 6 9 6-9 6Z"/></svg>':'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6v12M15 6v12"/></svg>';
 }
 function animate(){
  animation?.cancel();const first=track.firstElementChild;if(!first)return;
  if(reduce.matches){track.style.transform='translateX(0)';return;}
  const width=first.getBoundingClientRect().width;
  const lead=firstRun?window.clientWidth:0;firstRun=false;
  const loop=()=>{animation=track.animate([{transform:'translateX(0)'},{transform:`translateX(-${width}px)`}],{duration:width/36*1000,iterations:Infinity,easing:'linear'});sync();};
  if(lead){animation=track.animate([{transform:`translateX(${lead}px)`},{transform:`translateX(-${width}px)`}],{duration:(width+lead)/36*1000,easing:'linear'});animation.onfinish=loop;sync();}
  else loop();
 }
 function render(){
  entries=entries.filter(e=>Date.now()-Date.parse(e.at)<86400000&&Date.parse(e.at)<=Date.now());
  bar.hidden=!entries.length||Date.now()-asOf>300000;document.body.classList.toggle('has-activity',!bar.hidden);
  const next=JSON.stringify(entries.map(e=>[e.at,e.product,e.city,e.country]));
  if(next!==signature){signature=next;track.replaceChildren();for(let copy=0;copy<2;copy++){const group=document.createElement('div');group.className='activity-group';if(copy)group.setAttribute('aria-hidden','true');entries.forEach((e,i)=>{const item=document.createElement('span');item.className='activity-item';item.dataset.index=i;paint(item,e);group.append(item);});track.append(group);}requestAnimationFrame(animate);}
  else track.querySelectorAll('.activity-item').forEach(item=>{paint(item,entries[Number(item.dataset.index)]);});
 }
 async function load(){try{const r=await fetch(/^(www\.)?gazillionindustries\.com$/i.test(location.hostname)?'https://gazillion-storefront-activity.kit-relay.workers.dev/activity.json':'/activity.json',{cache:'no-store'});if(!r.ok)throw Error();const d=await r.json();entries=d.events||[];asOf=Date.parse(d.as_of)||0;render();}catch{render();}}
 pause.addEventListener('click',()=>{stopped=!stopped;sync();});
 reduce.addEventListener('change',animate);document.addEventListener('visibilitychange',()=>{sync();if(!document.hidden)load();});addEventListener('resize',animate);
 load();setTimeout(load,10000);setInterval(()=>{if(!document.hidden)load();},60000);setInterval(render,15000);
})();
