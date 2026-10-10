/* Keep the authored lettering; position it by rendered visible pixels only. */
(function lockup(){
  var L = document.querySelector('.lock');
  if (!L) return;
  var BASE = 184, OVERSH = .0144, BINSET = .018, GAP = .0132;
  var DENSITY = 4;
  var canvas = document.createElement('canvas');
  canvas.width = 1400; canvas.height = 400;
  var ctx = canvas.getContext('2d', {willReadFrequently:true});
  if (!ctx || !('letterSpacing' in ctx)) return;

  function visibleInk(text, family, weight, size, tracking){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.scale(DENSITY, DENSITY);
    ctx.font = weight + ' ' + size + 'px ' + family;
    ctx.letterSpacing = tracking * size + 'px';
    ctx.fontKerning = 'normal';
    ctx.textBaseline = 'alphabetic';
    ctx.fillStyle = '#000';
    ctx.fillText(text, 20, 70);
    ctx.restore();
    var pixels = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    var left=canvas.width, right=-1, top=canvas.height, bottom=-1;
    for (var y=0; y<canvas.height; y++) {
      for (var x=0; x<canvas.width; x++) {
        if (pixels[(y*canvas.width+x)*4+3] < 32) continue;
        left=Math.min(left,x); right=Math.max(right,x);
        top=Math.min(top,y); bottom=Math.max(bottom,y);
      }
    }
    return {left:left/DENSITY-20, top:top/DENSITY-70,
      width:(right-left+1)/DENSITY, height:(bottom-top+1)/DENSITY};
  }
  function fit(){
    var host = document.querySelector('.mast-inner');
    if (!host) return;
    var target = Math.min(BASE, (host.clientWidth-32)*.66);
    if (target<=0) return;
    // Exact existing sizes and tracking are retained. Only the invisible
    // space around the lettering is replaced by a pixel-measured envelope.
    var sa=target*(1+OVERSH)/5.552;
    var sb=target*(1+OVERSH)*(1-BINSET)/8.731985;
    var a=visibleInk('GAZILLION','"Archivo Black"',400,sa,-.055);
    var b=visibleInk('INDUSTRIES','Archivo',300,sb,.310);
    var inset=target*OVERSH + target*(1+OVERSH)*BINSET/2;
    var width=Math.max(a.width,inset+b.width);
    var secondTop=a.height + GAP*target;
    var height=secondTop+b.height;
    var svg=document.createElementNS('http://www.w3.org/2000/svg','svg');
    svg.setAttribute('viewBox','0 0 '+width+' '+height);
    svg.setAttribute('width',width);
    svg.setAttribute('height',height);
    svg.setAttribute('aria-hidden','true');
    svg.style.cssText='display:block;overflow:visible;fill:currentColor;stroke:none;max-width:none';
    function row(text,family,weight,size,tracking,x,y){
      var t=document.createElementNS('http://www.w3.org/2000/svg','text');
      t.textContent=text;
      t.setAttribute('x',x);t.setAttribute('y',y);
      t.style.cssText='font-family:'+family+';font-weight:'+weight+';font-size:'+size+'px;letter-spacing:'+(tracking*size)+'px;font-kerning:normal';
      svg.appendChild(t);
    }
    row('GAZILLION','"Archivo Black"',400,sa,-.055,-a.left,-a.top);
    row('INDUSTRIES','Archivo',300,sb,.310,inset-b.left,secondTop-b.top);
    L.replaceChildren(svg);
  }
  function ready(){
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(fit);
    } else fit();
  }
  ready();
  addEventListener('resize',fit);
})();
