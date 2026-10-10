/* Shared, independently regenerated CRT snow. Lettering remains sharp DOM text. */
(() => {
  const selector = '.cta.add-to-cart,.cta.checkout,.ipad-product .cta,.demo-app-actions .cta';
  const source = document.createElement('canvas');
  source.width = 384 * 4;
  source.height = 128;
  const gl = source.getContext('webgl', {alpha:false,antialias:false,depth:false,stencil:false,premultipliedAlpha:false});
  if (!gl || !window.crypto?.getRandomValues) return;
  const vertex = 'attribute vec2 p;varying vec2 atlasUV;void main(){atlasUV=(p+1.)*.5;gl_Position=vec4(p,0.,1.);}';
  const fragment = `precision highp float;
    varying vec2 atlasUV;
    uniform sampler2D snowField;
    void main(){
      float n=texture2D(snowField,atlasUV).r;
      float raster=.004*cos(atlasUV.y*128.*6.283);
      float grey=clamp(.275+n*.185+raster,.275,.46);
      gl_FragColor=vec4(vec3(grey),1.);
    }`;
  const program = gl.createProgram();
  for (const [type,text] of [[gl.VERTEX_SHADER,vertex],[gl.FRAGMENT_SHADER,fragment]]) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader,text);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader,gl.COMPILE_STATUS)) return;
    gl.attachShader(program,shader);
  }
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program,gl.LINK_STATUS)) return;
  gl.useProgram(program);
  const buffer=gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER,buffer);
  gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),gl.STATIC_DRAW);
  const position=gl.getAttribLocation(program,'p');
  gl.enableVertexAttribArray(position);
  gl.vertexAttribPointer(position,2,gl.FLOAT,false,0,0);
  const pixels=new Uint8Array(416*36);
  const texture=gl.createTexture();
  gl.activeTexture(gl.TEXTURE0);
  gl.bindTexture(gl.TEXTURE_2D,texture);
  gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.NEAREST);
  gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.NEAREST);
  gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);
  gl.texImage2D(gl.TEXTURE_2D,0,gl.LUMINANCE,416,36,0,gl.LUMINANCE,gl.UNSIGNED_BYTE,pixels);
  gl.uniform1i(gl.getUniformLocation(program,'snowField'),0);
  gl.viewport(0,0,source.width,source.height);
  const reduce=matchMedia('(prefers-reduced-motion: reduce)');
  const panels=new Map();
  let request=0,last=0,failed=false;
  const active=(button,panel)=>panel.visible&&button.isConnected&&!button.disabled&&!button.classList.contains('in-cart');
  function draw(){
    crypto.getRandomValues(pixels);
    gl.texSubImage2D(gl.TEXTURE_2D,0,0,0,416,36,gl.LUMINANCE,gl.UNSIGNED_BYTE,pixels);
    gl.drawArrays(gl.TRIANGLES,0,6);
    for(const [button,panel] of panels){
      if(!active(button,panel))continue;
      const tiles=Math.max(1,Math.round(button.clientWidth/140));
      for(let tile=0;tile<tiles;tile++){
        panel.context.drawImage(source,((panel.slot+tile)%4)*384,0,384,128,
          tile*384/tiles,0,384/tiles,128);
      }
      panel.canvas.style.visibility='';
    }
  }
  function eligible(){return !failed&&!document.hidden&&[...panels].some(([button,panel])=>active(button,panel));}
  function tick(time){
    request=0;
    if(!eligible())return;
    if(reduce.matches){draw();return;}
    if(time-last>=1000/24){last=time;draw();}
    request=requestAnimationFrame(tick);
  }
  function wake(){if(!request&&eligible())request=requestAnimationFrame(tick);}
  const observer=new IntersectionObserver(entries=>{
    for(const entry of entries){const panel=panels.get(entry.target);if(panel)panel.visible=entry.isIntersecting;}
    wake();
  });
  function mount(){
    for(const [index,button] of [...document.querySelectorAll(selector)].entries()){
      const existing=panels.get(button);
      if(existing&&existing.canvas.parentElement===button)continue;
      if(existing){observer.unobserve(button);panels.delete(button);}
      // Cart/demo controls clone their source innerHTML; discard any copied canvas.
      for(const child of [...button.children]){
        if(child.matches('canvas.purchase-snow'))child.remove();
      }
      const canvas=document.createElement('canvas');
      canvas.className='purchase-snow';
      canvas.setAttribute('aria-hidden','true');
      canvas.style.visibility='hidden';
      canvas.width=384;canvas.height=128;
      const context=canvas.getContext('2d',{alpha:false});
      if(!context)continue;
      button.prepend(canvas);
      panels.set(button,{canvas,context,visible:false,slot:index%4});
      observer.observe(button);
    }
    for(const [button] of panels){if(!button.isConnected){observer.unobserve(button);panels.delete(button);}}
    wake();
  }
  mount();
  new MutationObserver(mount).observe(document.body,{childList:true,subtree:true});
  document.addEventListener('visibilitychange',wake);
  reduce.addEventListener('change',wake);
  source.addEventListener('webglcontextlost',event=>{
    event.preventDefault();failed=true;cancelAnimationFrame(request);request=0;
    for(const panel of panels.values())panel.canvas.style.visibility='hidden';
  });
})();
