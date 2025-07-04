import"./modulepreload-polyfill-3cfb730f.js";import{S as wt,P as At,W as yt,l as _t,D as xt,f as $t,C as st,F as Et,m as Ct,a as lt,g as J,d as St,n as kt,b as Lt}from"./three.module-4506f20e.js";import{O as Mt}from"./OrbitControls-c2e9ad5d.js";var at={exports:{}};(function(a){(function(t){function e(s){function n(r,l,p){this.x=r,this.y=l,this.z=p}n.prototype.dot2=function(r,l){return this.x*r+this.y*l},n.prototype.dot3=function(r,l,p){return this.x*r+this.y*l+this.z*p},this.grad3=[new n(1,1,0),new n(-1,1,0),new n(1,-1,0),new n(-1,-1,0),new n(1,0,1),new n(-1,0,1),new n(1,0,-1),new n(-1,0,-1),new n(0,1,1),new n(0,-1,1),new n(0,1,-1),new n(0,-1,-1)],this.p=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180],this.perm=new Array(512),this.gradP=new Array(512),this.seed(s||0)}e.prototype.seed=function(s){s>0&&s<1&&(s*=65536),s=Math.floor(s),s<256&&(s|=s<<8);for(var n=this.p,r=0;r<256;r++){var l;r&1?l=n[r]^s&255:l=n[r]^s>>8&255;var p=this.perm,m=this.gradP;p[r]=p[r+256]=l,m[r]=m[r+256]=this.grad3[l%12]}};var i=.5*(Math.sqrt(3)-1),d=(3-Math.sqrt(3))/6,f=1/3,u=1/6;e.prototype.simplex2=function(s,n){var r,l,p,m=(s+n)*i,c=Math.floor(s+m),v=Math.floor(n+m),h=(c+v)*d,o=s-c+h,g=n-v+h,C,A;o>g?(C=1,A=0):(C=0,A=1);var S=o-C+d,_=g-A+d,x=o-1+2*d,y=g-1+2*d;c&=255,v&=255;var $=this.perm,E=this.gradP,k=E[c+$[v]],L=E[c+C+$[v+A]],H=E[c+1+$[v+1]],M=.5-o*o-g*g;M<0?r=0:(M*=M,r=M*M*k.dot2(o,g));var V=.5-S*S-_*_;V<0?l=0:(V*=V,l=V*V*L.dot2(S,_));var F=.5-x*x-y*y;return F<0?p=0:(F*=F,p=F*F*H.dot2(x,y)),70*(r+l+p)},e.prototype.simplex3=function(s,n,r){var l,p,m,c,v=(s+n+r)*f,h=Math.floor(s+v),o=Math.floor(n+v),g=Math.floor(r+v),C=(h+o+g)*u,A=s-h+C,S=n-o+C,_=r-g+C,x,y,$,E,k,L;A>=S?S>=_?(x=1,y=0,$=0,E=1,k=1,L=0):A>=_?(x=1,y=0,$=0,E=1,k=0,L=1):(x=0,y=0,$=1,E=1,k=0,L=1):S<_?(x=0,y=0,$=1,E=0,k=1,L=1):A<_?(x=0,y=1,$=0,E=0,k=1,L=1):(x=0,y=1,$=0,E=1,k=1,L=0);var H=A-x+u,M=S-y+u,V=_-$+u,F=A-E+2*u,P=S-k+2*u,I=_-L+2*u,z=A-1+3*u,B=S-1+3*u,Y=_-1+3*u;h&=255,o&=255,g&=255;var O=this.perm,R=this.gradP,mt=R[h+O[o+O[g]]],ft=R[h+x+O[o+y+O[g+$]]],vt=R[h+E+O[o+k+O[g+L]]],bt=R[h+1+O[o+1+O[g+1]]],G=.5-A*A-S*S-_*_;G<0?l=0:(G*=G,l=G*G*mt.dot3(A,S,_));var X=.5-H*H-M*M-V*V;X<0?p=0:(X*=X,p=X*X*ft.dot3(H,M,V));var T=.5-F*F-P*P-I*I;T<0?m=0:(T*=T,m=T*T*vt.dot3(F,P,I));var W=.5-z*z-B*B-Y*Y;return W<0?c=0:(W*=W,c=W*W*bt.dot3(z,B,Y)),32*(l+p+m+c)};function b(s){return s*s*s*(s*(s*6-15)+10)}function w(s,n,r){return(1-r)*s+r*n}e.prototype.perlin2=function(s,n){var r=Math.floor(s),l=Math.floor(n);s=s-r,n=n-l,r=r&255,l=l&255;var p=this.perm,m=this.gradP,c=m[r+p[l]].dot2(s,n),v=m[r+p[l+1]].dot2(s,n-1),h=m[r+1+p[l]].dot2(s-1,n),o=m[r+1+p[l+1]].dot2(s-1,n-1),g=b(s);return w(w(c,h,g),w(v,o,g),b(n))},e.prototype.perlin3=function(s,n,r){var l=Math.floor(s),p=Math.floor(n),m=Math.floor(r);s=s-l,n=n-p,r=r-m,l=l&255,p=p&255,m=m&255;var c=this.perm,v=this.gradP,h=v[l+c[p+c[m]]].dot3(s,n,r),o=v[l+c[p+c[m+1]]].dot3(s,n,r-1),g=v[l+c[p+1+c[m]]].dot3(s,n-1,r),C=v[l+c[p+1+c[m+1]]].dot3(s,n-1,r-1),A=v[l+1+c[p+c[m]]].dot3(s-1,n,r),S=v[l+1+c[p+c[m+1]]].dot3(s-1,n,r-1),_=v[l+1+c[p+1+c[m]]].dot3(s-1,n-1,r),x=v[l+1+c[p+1+c[m+1]]].dot3(s-1,n-1,r-1),y=b(s),$=b(n),E=b(r);return w(w(w(h,A,y),w(o,S,y),E),w(w(g,_,y),w(C,x,y),E),$)},t.Noise=e})(a.exports)})(at);var et=at.exports;function Ft(a){const t=new wt,e=new At(75,window.innerWidth/window.innerHeight,.1,1e3),i=new yt({canvas:document.getElementById(a)});return i.shadowMap.enabled=!0,i.shadowMap.type=_t,i.setSize(window.innerWidth,window.innerHeight),window.addEventListener("resize",()=>{e.aspect=window.innerWidth/window.innerHeight,e.updateProjectionMatrix(),i.setSize(window.innerWidth,window.innerHeight)}),{scene:t,camera:e,renderer:i}}function Vt(a){const t=new xt(16777215,1);t.position.set(0,100,100).normalize(),t.castShadow=!0,a.add(t)}class Dt{constructor(t,e,i){this.noise=new et.Noise(Math.random()),this.geometry=new $t(t,e,i,i);const d=[];for(let f=0;f<this.geometry.attributes.position.count;f++){const u=this.geometry.attributes.position.getZ(f),b=new st,w=J.mapLinear(u,-10,10,.9,.1);b.setHSL(w,1,.5),d.push(b.r,b.g,b.b)}this.geometry.setAttribute("color",new Et(d,3)),this.material=new Ct({vertexColors:!0,flatShading:!0}),this.mesh=new lt(this.geometry,this.material),this.mesh.rotation.x=-Math.PI/2}updateColors(){const t=this.geometry.attributes.color;for(let e=0;e<this.geometry.attributes.position.count;e++){const i=this.geometry.attributes.position.getZ(e),d=J.mapLinear(i,-10,10,.9,.1),f=new st;Math.abs(Math.sin(this.geometry.attributes.position.getY(e)*.05))*.6,f.setHSL(d,1,.5),t.setXYZ(e,f.r,f.g,f.b)}t.needsUpdate=!0}updateVertices(t,e,i,d){const f=Math.sin(t*9e-4);for(let u=0;u<this.geometry.attributes.position.count;u++){const b=this.geometry.attributes.position.getX(u)*(f*.1),w=this.geometry.attributes.position.getY(u)/30,s=e.perlin2(b,w+d)*20;i.perlin2(b,w+d),this.geometry.attributes.position.setZ(u,s)}this.geometry.attributes.position.needsUpdate=!0,this.geometry.computeVertexNormals()}}class Ht{constructor(t,e){this.radius=t,this.geometry=new St(t,e,e),this.originalSpherePositions=[];for(let i=0;i<this.geometry.attributes.position.count;i++)this.originalSpherePositions.push(this.geometry.attributes.position.getX(i),this.geometry.attributes.position.getY(i),this.geometry.attributes.position.getZ(i));this.material=new kt({color:8970495,roughness:.2,metalness:.5,transmission:.8,thickness:2,transparent:!0,opacity:.9,ior:1.3,clearcoat:1,clearcoatRoughness:.1}),this.mesh=new lt(this.geometry,this.material),this.mesh.position.set(0,30,0)}updateSphereVertices(t,e,i,d){const u=i.geometry.attributes.position,b=i.geometry.parameters.width,w=i.geometry.parameters.height,s=i.geometry.parameters.widthSegments,n=i.geometry.parameters.heightSegments,r=b/s,l=w/n,p=b/2,m=w/2;for(let c=0;c<this.geometry.attributes.position.count;c++){let _=function(P,I,z=[1,0,1,0,1,0,1]){const B=(P+1)/2,Y=Math.floor(B/I);return z[Y%5]};const v=this.originalSpherePositions[c*3],h=this.originalSpherePositions[c*3+1],o=this.originalSpherePositions[c*3+2],g=v/this.radius,C=h/this.radius,A=o/this.radius,S=e.perlin3(g*2,C*2,A*2+t*5*.5),x=2+_(S,d)*50;let y=v*(1+x/this.radius*.2),$=h*(1+x/this.radius*.2),E=o*(1+x/this.radius*.2);const k=this.mesh.localToWorld(new Lt(y,$,E)),L=i.worldToLocal(k.clone());let H=Math.round((L.x+p)/r),M=Math.round((L.z+m)/l);H=J.clamp(H,0,s),M=J.clamp(M,0,n);const V=M*(s+1)+H,F=u.getY(V);k.y<F+10&&(k.y=F+10,$=this.mesh.worldToLocal(k).y+5),this.geometry.attributes.position.setXYZ(c,y,$,E)}this.geometry.attributes.position.needsUpdate=!0,this.geometry.computeVertexNormals()}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.20.0
 * @author George Michael Brower
 * @license MIT
 */class D{constructor(t,e,i,d,f="div"){this.parent=t,this.object=e,this.property=i,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(f),this.domElement.classList.add("controller"),this.domElement.classList.add(d),this.$name=document.createElement("div"),this.$name.classList.add("name"),D.nextNameID=D.nextNameID||0,this.$name.id=`lil-gui-name-${++D.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",u=>u.stopPropagation()),this.domElement.addEventListener("keyup",u=>u.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(i)}name(t){return this._name=t,this.$name.textContent=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("disabled",t),this.$disable.toggleAttribute("disabled",t),this)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const e=this.parent.add(this.object,this.property,t);return e.name(this._name),this.destroy(),e}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.getValue()!==t&&(this.object[this.property]=t,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class Ot extends D{constructor(t,e,i){super(t,e,i,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function tt(a){let t,e;return(t=a.match(/(#|0x)?([a-f0-9]{6})/i))?e=t[2]:(t=a.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=a.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),e?"#"+e:!1}const Pt={isPrimitive:!0,match:a=>typeof a=="string",fromHexString:tt,toHexString:tt},N={isPrimitive:!0,match:a=>typeof a=="number",fromHexString:a=>parseInt(a.substring(1),16),toHexString:a=>"#"+a.toString(16).padStart(6,0)},It={isPrimitive:!1,match:a=>Array.isArray(a),fromHexString(a,t,e=1){const i=N.fromHexString(a);t[0]=(i>>16&255)/255*e,t[1]=(i>>8&255)/255*e,t[2]=(i&255)/255*e},toHexString([a,t,e],i=1){i=255/i;const d=a*i<<16^t*i<<8^e*i<<0;return N.toHexString(d)}},zt={isPrimitive:!1,match:a=>Object(a)===a,fromHexString(a,t,e=1){const i=N.fromHexString(a);t.r=(i>>16&255)/255*e,t.g=(i>>8&255)/255*e,t.b=(i&255)/255*e},toHexString({r:a,g:t,b:e},i=1){i=255/i;const d=a*i<<16^t*i<<8^e*i<<0;return N.toHexString(d)}},Bt=[Pt,N,It,zt];function Yt(a){return Bt.find(t=>t.match(a))}class Gt extends D{constructor(t,e,i,d){super(t,e,i,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=Yt(this.initialValue),this._rgbScale=d,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const f=tt(this.$text.value);f&&this._setValueFromHexString(f)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const e=this._format.fromHexString(t);this.setValue(e)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Q extends D{constructor(t,e,i){super(t,e,i,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",d=>{d.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class Xt extends D{constructor(t,e,i,d,f,u){super(t,e,i,"number"),this._initInput(),this.min(d),this.max(f);const b=u!==void 0;this.step(b?u:this._getImplicitStep(),b),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,e=!0){return this._step=t,this._stepExplicit=e,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let e=(t-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=e*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=()=>{let o=parseFloat(this.$input.value);isNaN(o)||(this._stepExplicit&&(o=this._snap(o)),this.setValue(this._clamp(o)))},i=o=>{const g=parseFloat(this.$input.value);isNaN(g)||(this._snapClampSetValue(g+o),this.$input.value=this.getValue())},d=o=>{o.key==="Enter"&&this.$input.blur(),o.code==="ArrowUp"&&(o.preventDefault(),i(this._step*this._arrowKeyMultiplier(o))),o.code==="ArrowDown"&&(o.preventDefault(),i(this._step*this._arrowKeyMultiplier(o)*-1))},f=o=>{this._inputFocused&&(o.preventDefault(),i(this._step*this._normalizeMouseWheel(o)))};let u=!1,b,w,s,n,r;const l=5,p=o=>{b=o.clientX,w=s=o.clientY,u=!0,n=this.getValue(),r=0,window.addEventListener("mousemove",m),window.addEventListener("mouseup",c)},m=o=>{if(u){const g=o.clientX-b,C=o.clientY-w;Math.abs(C)>l?(o.preventDefault(),this.$input.blur(),u=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(g)>l&&c()}if(!u){const g=o.clientY-s;r-=g*this._step*this._arrowKeyMultiplier(o),n+r>this._max?r=this._max-n:n+r<this._min&&(r=this._min-n),this._snapClampSetValue(n+r)}s=o.clientY},c=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",m),window.removeEventListener("mouseup",c)},v=()=>{this._inputFocused=!0},h=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",d),this.$input.addEventListener("wheel",f,{passive:!1}),this.$input.addEventListener("mousedown",p),this.$input.addEventListener("focus",v),this.$input.addEventListener("blur",h)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const t=(h,o,g,C,A)=>(h-o)/(g-o)*(A-C)+C,e=h=>{const o=this.$slider.getBoundingClientRect();let g=t(h,o.left,o.right,this._min,this._max);this._snapClampSetValue(g)},i=h=>{this._setDraggingStyle(!0),e(h.clientX),window.addEventListener("mousemove",d),window.addEventListener("mouseup",f)},d=h=>{e(h.clientX)},f=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",d),window.removeEventListener("mouseup",f)};let u=!1,b,w;const s=h=>{h.preventDefault(),this._setDraggingStyle(!0),e(h.touches[0].clientX),u=!1},n=h=>{h.touches.length>1||(this._hasScrollBar?(b=h.touches[0].clientX,w=h.touches[0].clientY,u=!0):s(h),window.addEventListener("touchmove",r,{passive:!1}),window.addEventListener("touchend",l))},r=h=>{if(u){const o=h.touches[0].clientX-b,g=h.touches[0].clientY-w;Math.abs(o)>Math.abs(g)?s(h):(window.removeEventListener("touchmove",r),window.removeEventListener("touchend",l))}else h.preventDefault(),e(h.touches[0].clientX)},l=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",r),window.removeEventListener("touchend",l)},p=this._callOnFinishChange.bind(this),m=400;let c;const v=h=>{if(Math.abs(h.deltaX)<Math.abs(h.deltaY)&&this._hasScrollBar)return;h.preventDefault();const g=this._normalizeMouseWheel(h)*this._step;this._snapClampSetValue(this.getValue()+g),this.$input.value=this.getValue(),clearTimeout(c),c=setTimeout(p,m)};this.$slider.addEventListener("mousedown",i),this.$slider.addEventListener("touchstart",n,{passive:!1}),this.$slider.addEventListener("wheel",v,{passive:!1})}_setDraggingStyle(t,e="horizontal"){this.$slider&&this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle(`lil-gui-${e}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:e,deltaY:i}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(e=0,i=-t.wheelDelta/120,i*=this._stepExplicit?1:10),e+-i}_arrowKeyMultiplier(t){let e=this._stepExplicit?1:10;return t.shiftKey?e*=10:t.altKey&&(e/=10),e}_snap(t){let e=0;return this._hasMin?e=this._min:this._hasMax&&(e=this._max),t-=e,t=Math.round(t/this._step)*this._step,t+=e,t=parseFloat(t.toPrecision(15)),t}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class Tt extends D{constructor(t,e,i,d){super(t,e,i,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(d)}options(t){return this._values=Array.isArray(t)?t:Object.values(t),this._names=Array.isArray(t)?t:Object.keys(t),this.$select.replaceChildren(),this._names.forEach(e=>{const i=document.createElement("option");i.textContent=e,this.$select.appendChild(i)}),this.updateDisplay(),this}updateDisplay(){const t=this.getValue(),e=this._values.indexOf(t);return this.$select.selectedIndex=e,this.$display.textContent=e===-1?t:this._names[e],this}}class Wt extends D{constructor(t,e,i){super(t,e,i,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",d=>{d.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var jt=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  font-weight: 600;
  padding: 0 var(--padding);
  width: 100%;
  text-align: left;
  background: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  border: none;
}
.lil-gui .controller button {
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
}
@media (hover: hover) {
  .lil-gui .controller button:hover {
    background: var(--hover-color);
  }
  .lil-gui .controller button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui .controller button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function Nt(a){const t=document.createElement("style");t.innerHTML=a;const e=document.querySelector("head link[rel=stylesheet], head style");e?document.head.insertBefore(t,e):document.head.appendChild(t)}let nt=!1;class it{constructor({parent:t,autoPlace:e=t===void 0,container:i,width:d,title:f="Controls",closeFolders:u=!1,injectStyles:b=!0,touchStyles:w=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(f),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),w&&this.domElement.classList.add("allow-touch-styles"),!nt&&b&&(Nt(jt),nt=!0),i?i.appendChild(this.domElement):e&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),d&&this.domElement.style.setProperty("--width",d+"px"),this._closeFolders=u}add(t,e,i,d,f){if(Object(i)===i)return new Tt(this,t,e,i);const u=t[e];switch(typeof u){case"number":return new Xt(this,t,e,i,d,f);case"boolean":return new Ot(this,t,e);case"string":return new Wt(this,t,e);case"function":return new Q(this,t,e)}console.error(`gui.add failed
	property:`,e,`
	object:`,t,`
	value:`,u)}addColor(t,e,i=1){return new Gt(this,t,e,i)}addFolder(t){const e=new it({parent:this,title:t});return this.root._closeFolders&&e.close(),e}load(t,e=!0){return t.controllers&&this.controllers.forEach(i=>{i instanceof Q||i._name in t.controllers&&i.load(t.controllers[i._name])}),e&&t.folders&&this.folders.forEach(i=>{i._title in t.folders&&i.load(t.folders[i._title])}),this}save(t=!0){const e={controllers:{},folders:{}};return this.controllers.forEach(i=>{if(!(i instanceof Q)){if(i._name in e.controllers)throw new Error(`Cannot save GUI with duplicate property "${i._name}"`);e.controllers[i._name]=i.save()}}),t&&this.folders.forEach(i=>{if(i._title in e.folders)throw new Error(`Cannot save GUI with duplicate folder "${i._title}"`);e.folders[i._title]=i.save()}),e}open(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(t){this._closed!==t&&(this._closed=t,this._callOnOpenClose(this))}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("transition");const i=f=>{f.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",i))};this.$children.addEventListener("transitionend",i);const d=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!t),requestAnimationFrame(()=>{this.$children.style.height=d+"px"})}),this}title(t){return this._title=t,this.$title.textContent=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(i=>i.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onOpenClose(t){return this._onOpenClose=t,this}_callOnOpenClose(t){this.parent&&this.parent._callOnOpenClose(t),this._onOpenClose!==void 0&&this._onOpenClose.call(this,t)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(e=>{t=t.concat(e.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(e=>{t=t.concat(e.foldersRecursive())}),t}}const ht=new it,dt={sphereHeight:0,stepInterval:.15},rt=new et.Noise(Math.random()),Rt=new et.Noise(Math.random()),{scene:Z,camera:K,renderer:ct}=Ft("threeCan");let q=0,ut=.15;const pt=new Mt(K,ct.domElement);pt.enableDamping=!0;const j=new Dt(400,200,200);j.mesh.receiveShadow=!0;Z.add(j.mesh);const U=new Ht(30,64);U.mesh.castShadow=!0;Z.add(U.mesh);ht.add(dt,"sphereHeight",-30,100).onChange(a=>{U.mesh.position.y=a});ht.add(dt,"stepInterval",.1,.3).onChange(a=>{ut=a});Vt(Z);K.position.set(0,60,100);K.lookAt(0,0,0);let ot=0;function gt(){requestAnimationFrame(gt),j.updateVertices(ot,rt,Rt,q),j.updateColors(),U.updateSphereVertices(q,rt,j.mesh,ut),pt.update(),ct.render(Z,K),q+=.01,ot++}gt();
