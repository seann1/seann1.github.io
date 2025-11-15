import{S as Ct,P as $t,W as Et,l as St,D as Mt,e as kt,h as ct,F as Lt,m as ot,M as pt,f as q,c as Dt,a as Ft}from"./three.module-b5a7f9da.js";import{O as zt}from"./OrbitControls-b4756eaf.js";var gt={exports:{}};(function(a){(function(t){function e(r){function s(o,h,p){this.x=o,this.y=h,this.z=p}s.prototype.dot2=function(o,h){return this.x*o+this.y*h},s.prototype.dot3=function(o,h,p){return this.x*o+this.y*h+this.z*p},this.grad3=[new s(1,1,0),new s(-1,1,0),new s(1,-1,0),new s(-1,-1,0),new s(1,0,1),new s(-1,0,1),new s(1,0,-1),new s(-1,0,-1),new s(0,1,1),new s(0,-1,1),new s(0,1,-1),new s(0,-1,-1)],this.p=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180],this.perm=new Array(512),this.gradP=new Array(512),this.seed(r||0)}e.prototype.seed=function(r){r>0&&r<1&&(r*=65536),r=Math.floor(r),r<256&&(r|=r<<8);for(var s=this.p,o=0;o<256;o++){var h;o&1?h=s[o]^r&255:h=s[o]^r>>8&255;var p=this.perm,v=this.gradP;p[o]=p[o+256]=h,v[o]=v[o+256]=this.grad3[h%12]}};var i=.5*(Math.sqrt(3)-1),n=(3-Math.sqrt(3))/6,m=1/3,c=1/6;e.prototype.simplex2=function(r,s){var o,h,p,v=(r+s)*i,u=Math.floor(r+v),w=Math.floor(s+v),d=(u+w)*n,l=r-u+d,g=s-w+d,E,x;l>g?(E=1,x=0):(E=0,x=1);var S=l-E+n,y=g-x+n,_=l-1+2*n,A=g-1+2*n;u&=255,w&=255;var C=this.perm,$=this.gradP,M=$[u+C[w]],k=$[u+E+C[w+x]],P=$[u+1+C[w+1]],L=.5-l*l-g*g;L<0?o=0:(L*=L,o=L*L*M.dot2(l,g));var F=.5-S*S-y*y;F<0?h=0:(F*=F,h=F*F*k.dot2(S,y));var D=.5-_*_-A*A;return D<0?p=0:(D*=D,p=D*D*P.dot2(_,A)),70*(o+h+p)},e.prototype.simplex3=function(r,s,o){var h,p,v,u,w=(r+s+o)*m,d=Math.floor(r+w),l=Math.floor(s+w),g=Math.floor(o+w),E=(d+l+g)*c,x=r-d+E,S=s-l+E,y=o-g+E,_,A,C,$,M,k;x>=S?S>=y?(_=1,A=0,C=0,$=1,M=1,k=0):x>=y?(_=1,A=0,C=0,$=1,M=0,k=1):(_=0,A=0,C=1,$=1,M=0,k=1):S<y?(_=0,A=0,C=1,$=0,M=1,k=1):x<y?(_=0,A=1,C=0,$=0,M=1,k=1):(_=0,A=1,C=0,$=1,M=1,k=0);var P=x-_+c,L=S-A+c,F=y-C+c,D=x-$+2*c,B=S-M+2*c,Y=y-k+2*c,T=x-1+3*c,j=S-1+3*c,N=y-1+3*c;d&=255,l&=255,g&=255;var V=this.perm,Z=this.gradP,xt=Z[d+V[l+V[g]]],At=Z[d+_+V[l+A+V[g+C]]],yt=Z[d+$+V[l+M+V[g+k]]],_t=Z[d+1+V[l+1+V[g+1]]],G=.5-x*x-S*S-y*y;G<0?h=0:(G*=G,h=G*G*xt.dot3(x,S,y));var X=.5-P*P-L*L-F*F;X<0?p=0:(X*=X,p=X*X*At.dot3(P,L,F));var W=.5-D*D-B*B-Y*Y;W<0?v=0:(W*=W,v=W*W*yt.dot3(D,B,Y));var K=.5-T*T-j*j-N*N;return K<0?u=0:(K*=K,u=K*K*_t.dot3(T,j,N)),32*(h+p+v+u)};function f(r){return r*r*r*(r*(r*6-15)+10)}function b(r,s,o){return(1-o)*r+o*s}e.prototype.perlin2=function(r,s){var o=Math.floor(r),h=Math.floor(s);r=r-o,s=s-h,o=o&255,h=h&255;var p=this.perm,v=this.gradP,u=v[o+p[h]].dot2(r,s),w=v[o+p[h+1]].dot2(r,s-1),d=v[o+1+p[h]].dot2(r-1,s),l=v[o+1+p[h+1]].dot2(r-1,s-1),g=f(r);return b(b(u,d,g),b(w,l,g),f(s))},e.prototype.perlin3=function(r,s,o){var h=Math.floor(r),p=Math.floor(s),v=Math.floor(o);r=r-h,s=s-p,o=o-v,h=h&255,p=p&255,v=v&255;var u=this.perm,w=this.gradP,d=w[h+u[p+u[v]]].dot3(r,s,o),l=w[h+u[p+u[v+1]]].dot3(r,s,o-1),g=w[h+u[p+1+u[v]]].dot3(r,s-1,o),E=w[h+u[p+1+u[v+1]]].dot3(r,s-1,o-1),x=w[h+1+u[p+u[v]]].dot3(r-1,s,o),S=w[h+1+u[p+u[v+1]]].dot3(r-1,s,o-1),y=w[h+1+u[p+1+u[v]]].dot3(r-1,s-1,o),_=w[h+1+u[p+1+u[v+1]]].dot3(r-1,s-1,o-1),A=f(r),C=f(s),$=f(o);return b(b(b(d,x,A),b(l,S,A),$),b(b(g,y,A),b(E,_,A),$),C)},t.Noise=e})(a.exports)})(gt);var tt=gt.exports;function Pt(a){const t=new Ct,e=new $t(75,window.innerWidth/window.innerHeight,.1,1e3),i=new Et({canvas:document.getElementById(a)});return i.shadowMap.enabled=!0,i.shadowMap.type=St,i.setSize(window.innerWidth,window.innerHeight),window.addEventListener("resize",()=>{e.aspect=window.innerWidth/window.innerHeight,e.updateProjectionMatrix(),i.setSize(window.innerWidth,window.innerHeight)}),{scene:t,camera:e,renderer:i}}function Vt(a){const t=new Mt(16777215,1);t.position.set(0,100,100).normalize(),t.castShadow=!0,a.add(t)}class Ot{constructor(t,e,i){this.noise=new tt.Noise(Math.random()),this.geometry=new kt(t,e,i,i);const n=[];for(let m=0;m<this.geometry.attributes.position.count;m++){const c=this.geometry.attributes.position.getZ(m),f=new ct,b=q.mapLinear(c,-10,10,.9,.1);f.setHSL(b,1,.5),n.push(f.r,f.g,f.b)}this.geometry.setAttribute("color",new Lt(n,3)),this.material=new ot({vertexColors:!0,flatShading:!0}),this.mesh=new pt(this.geometry,this.material),this.mesh.rotation.x=-Math.PI/2}updateColors(){const t=this.geometry.attributes.color;for(let e=0;e<this.geometry.attributes.position.count;e++){const i=this.geometry.attributes.position.getZ(e),n=q.mapLinear(i,-10,10,.9,.1),m=new ct;Math.abs(Math.sin(this.geometry.attributes.position.getY(e)*.05))*.6,m.setHSL(n,1,.5),t.setXYZ(e,m.r,m.g,m.b)}t.needsUpdate=!0}updateVertices(t,e,i,n){const m=Math.sin(t*9e-4);for(let c=0;c<this.geometry.attributes.position.count;c++){const f=this.geometry.attributes.position.getX(c)*(m*.1),b=this.geometry.attributes.position.getY(c)/30,r=e.perlin2(f,b+n)*20;i.perlin2(f,b+n),this.geometry.attributes.position.setZ(c,r)}this.geometry.attributes.position.needsUpdate=!0,this.geometry.computeVertexNormals()}}function Ht(a,t,e){const i=new ot;return i.onBeforeCompile=n=>{n.uniforms.colorScale={value:e.colorScale},n.uniforms.time={value:t},i.userData.shader=n,n.vertexShader=n.vertexShader.replace("#include <common>",`
				#include <common>
				varying vec3 vPosition;
				`),n.vertexShader=n.vertexShader.replace("#include <begin_vertex>",`
				#include <begin_vertex>
				vPosition = position;
				`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`
							#include <common>
							varying vec3 vPosition;
							uniform float colorScale;
							uniform float time;
							`),n.fragmentShader=n.fragmentShader.replace("#include <dithering_fragment>",`
				float dist = length(vPosition); // Distance from origin
				float edge = smoothstep(0.0, 1.0, (dist-30.0) / 10.0); // Adjust 30.0 to your sphere's radius
				// Multicolor: map position to color
				vec3 baseColor = vec3(
				  0.5 + 0.5 * sin(vPosition.x * 0.05) * (colorScale* sin(time)) * sin(time),
				  0.5 + 0.5 * sin(vPosition.y * (colorScale* sin(time)) + 3.0) * colorScale,
				  0.5 + 0.5 * sin(vPosition.z * (colorScale* sin(time)) + 4.0) * sin(time)
				);
				vec3 color = mix(baseColor, vec3(edge), 0.5); // 0.5 = blend factor, adjust as needed
				if (edge > 0.9) {
					color = baseColor;
				}
				gl_FragColor.rgb = color;
				#include <dithering_fragment>
				`),a&&a.add(e,"colorScale",.1,1).onChange(m=>{n.uniforms.colorScale.value=m})},i}class lt{constructor(t,e,i,n,m,c,f,b,r){this.radius=t,this.geometry=new Dt(t,e,e),this.params=c,this.originalSpherePositions=[];for(let s=0;s<this.geometry.attributes.position.count;s++)this.originalSpherePositions.push(this.geometry.attributes.position.getX(s),this.geometry.attributes.position.getY(s),this.geometry.attributes.position.getZ(s));this.material=m,this.multiplierKeyName=Object.keys(c).find(s=>s.startsWith("noiseTimeMultiplier")),i&&i.add(this.params,this.multiplierKeyName,0,10).onChange(s=>{this.params[this.multiplierKeyName]=s}),this.mesh=new pt(this.geometry,this.material),this.mesh.position.set(f,b,r)}updateSphereVertices(t,e,i,n){this.material.userData.shader&&this.material.userData.shader.uniforms.time&&(this.material.userData.shader.uniforms.time.value=t);const c=i.geometry.attributes.position,f=i.geometry.parameters.width,b=i.geometry.parameters.height,r=i.geometry.parameters.widthSegments,s=i.geometry.parameters.heightSegments,o=f/r,h=b/s,p=f/2,v=b/2;for(let u=0;u<this.geometry.attributes.position.count;u++){let y=function(B,Y,T=[1,0,1,0,1,0,1]){const j=(B+1)/2,N=Math.floor(j/Y);return T[N%5]};const w=this.originalSpherePositions[u*3],d=this.originalSpherePositions[u*3+1],l=this.originalSpherePositions[u*3+2],g=w/this.radius,E=d/this.radius,x=l/this.radius,S=e.perlin3(g*2,E*2,x*2+t*this.params[this.multiplierKeyName]*.5),_=2+y(S,n)*50;let A=w*(1+_/this.radius*.2),C=d*(1+_/this.radius*.2),$=l*(1+_/this.radius*.2);const M=this.mesh.localToWorld(new Ft(A,C,$)),k=i.worldToLocal(M.clone());let P=Math.round((k.x+p)/o),L=Math.round((k.z+v)/h);P=q.clamp(P,0,r),L=q.clamp(L,0,s);const F=L*(r+1)+P,D=c.getY(F);M.y<D+10&&(M.y=D+10,C=this.mesh.worldToLocal(M).y+5),this.geometry.attributes.position.setXYZ(u,A,C,$)}this.geometry.attributes.position.needsUpdate=!0,this.geometry.computeVertexNormals()}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.20.0
 * @author George Michael Brower
 * @license MIT
 */class z{constructor(t,e,i,n,m="div"){this.parent=t,this.object=e,this.property=i,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(m),this.domElement.classList.add("controller"),this.domElement.classList.add(n),this.$name=document.createElement("div"),this.$name.classList.add("name"),z.nextNameID=z.nextNameID||0,this.$name.id=`lil-gui-name-${++z.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",c=>c.stopPropagation()),this.domElement.addEventListener("keyup",c=>c.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(i)}name(t){return this._name=t,this.$name.textContent=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("disabled",t),this.$disable.toggleAttribute("disabled",t),this)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const e=this.parent.add(this.object,this.property,t);return e.name(this._name),this.destroy(),e}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.getValue()!==t&&(this.object[this.property]=t,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class It extends z{constructor(t,e,i){super(t,e,i,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function rt(a){let t,e;return(t=a.match(/(#|0x)?([a-f0-9]{6})/i))?e=t[2]:(t=a.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=a.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),e?"#"+e:!1}const Bt={isPrimitive:!0,match:a=>typeof a=="string",fromHexString:rt,toHexString:rt},J={isPrimitive:!0,match:a=>typeof a=="number",fromHexString:a=>parseInt(a.substring(1),16),toHexString:a=>"#"+a.toString(16).padStart(6,0)},Yt={isPrimitive:!1,match:a=>Array.isArray(a),fromHexString(a,t,e=1){const i=J.fromHexString(a);t[0]=(i>>16&255)/255*e,t[1]=(i>>8&255)/255*e,t[2]=(i&255)/255*e},toHexString([a,t,e],i=1){i=255/i;const n=a*i<<16^t*i<<8^e*i<<0;return J.toHexString(n)}},Tt={isPrimitive:!1,match:a=>Object(a)===a,fromHexString(a,t,e=1){const i=J.fromHexString(a);t.r=(i>>16&255)/255*e,t.g=(i>>8&255)/255*e,t.b=(i&255)/255*e},toHexString({r:a,g:t,b:e},i=1){i=255/i;const n=a*i<<16^t*i<<8^e*i<<0;return J.toHexString(n)}},jt=[Bt,J,Yt,Tt];function Nt(a){return jt.find(t=>t.match(a))}class Gt extends z{constructor(t,e,i,n){super(t,e,i,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=Nt(this.initialValue),this._rgbScale=n,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const m=rt(this.$text.value);m&&this._setValueFromHexString(m)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const e=this._format.fromHexString(t);this.setValue(e)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class nt extends z{constructor(t,e,i){super(t,e,i,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",n=>{n.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class Xt extends z{constructor(t,e,i,n,m,c){super(t,e,i,"number"),this._initInput(),this.min(n),this.max(m);const f=c!==void 0;this.step(f?c:this._getImplicitStep(),f),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,e=!0){return this._step=t,this._stepExplicit=e,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let e=(t-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=e*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=()=>{let l=parseFloat(this.$input.value);isNaN(l)||(this._stepExplicit&&(l=this._snap(l)),this.setValue(this._clamp(l)))},i=l=>{const g=parseFloat(this.$input.value);isNaN(g)||(this._snapClampSetValue(g+l),this.$input.value=this.getValue())},n=l=>{l.key==="Enter"&&this.$input.blur(),l.code==="ArrowUp"&&(l.preventDefault(),i(this._step*this._arrowKeyMultiplier(l))),l.code==="ArrowDown"&&(l.preventDefault(),i(this._step*this._arrowKeyMultiplier(l)*-1))},m=l=>{this._inputFocused&&(l.preventDefault(),i(this._step*this._normalizeMouseWheel(l)))};let c=!1,f,b,r,s,o;const h=5,p=l=>{f=l.clientX,b=r=l.clientY,c=!0,s=this.getValue(),o=0,window.addEventListener("mousemove",v),window.addEventListener("mouseup",u)},v=l=>{if(c){const g=l.clientX-f,E=l.clientY-b;Math.abs(E)>h?(l.preventDefault(),this.$input.blur(),c=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(g)>h&&u()}if(!c){const g=l.clientY-r;o-=g*this._step*this._arrowKeyMultiplier(l),s+o>this._max?o=this._max-s:s+o<this._min&&(o=this._min-s),this._snapClampSetValue(s+o)}r=l.clientY},u=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",v),window.removeEventListener("mouseup",u)},w=()=>{this._inputFocused=!0},d=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",n),this.$input.addEventListener("wheel",m,{passive:!1}),this.$input.addEventListener("mousedown",p),this.$input.addEventListener("focus",w),this.$input.addEventListener("blur",d)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const t=(d,l,g,E,x)=>(d-l)/(g-l)*(x-E)+E,e=d=>{const l=this.$slider.getBoundingClientRect();let g=t(d,l.left,l.right,this._min,this._max);this._snapClampSetValue(g)},i=d=>{this._setDraggingStyle(!0),e(d.clientX),window.addEventListener("mousemove",n),window.addEventListener("mouseup",m)},n=d=>{e(d.clientX)},m=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",n),window.removeEventListener("mouseup",m)};let c=!1,f,b;const r=d=>{d.preventDefault(),this._setDraggingStyle(!0),e(d.touches[0].clientX),c=!1},s=d=>{d.touches.length>1||(this._hasScrollBar?(f=d.touches[0].clientX,b=d.touches[0].clientY,c=!0):r(d),window.addEventListener("touchmove",o,{passive:!1}),window.addEventListener("touchend",h))},o=d=>{if(c){const l=d.touches[0].clientX-f,g=d.touches[0].clientY-b;Math.abs(l)>Math.abs(g)?r(d):(window.removeEventListener("touchmove",o),window.removeEventListener("touchend",h))}else d.preventDefault(),e(d.touches[0].clientX)},h=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",o),window.removeEventListener("touchend",h)},p=this._callOnFinishChange.bind(this),v=400;let u;const w=d=>{if(Math.abs(d.deltaX)<Math.abs(d.deltaY)&&this._hasScrollBar)return;d.preventDefault();const g=this._normalizeMouseWheel(d)*this._step;this._snapClampSetValue(this.getValue()+g),this.$input.value=this.getValue(),clearTimeout(u),u=setTimeout(p,v)};this.$slider.addEventListener("mousedown",i),this.$slider.addEventListener("touchstart",s,{passive:!1}),this.$slider.addEventListener("wheel",w,{passive:!1})}_setDraggingStyle(t,e="horizontal"){this.$slider&&this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle(`lil-gui-${e}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:e,deltaY:i}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(e=0,i=-t.wheelDelta/120,i*=this._stepExplicit?1:10),e+-i}_arrowKeyMultiplier(t){let e=this._stepExplicit?1:10;return t.shiftKey?e*=10:t.altKey&&(e/=10),e}_snap(t){let e=0;return this._hasMin?e=this._min:this._hasMax&&(e=this._max),t-=e,t=Math.round(t/this._step)*this._step,t+=e,t=parseFloat(t.toPrecision(15)),t}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class Wt extends z{constructor(t,e,i,n){super(t,e,i,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(n)}options(t){return this._values=Array.isArray(t)?t:Object.values(t),this._names=Array.isArray(t)?t:Object.keys(t),this.$select.replaceChildren(),this._names.forEach(e=>{const i=document.createElement("option");i.textContent=e,this.$select.appendChild(i)}),this.updateDisplay(),this}updateDisplay(){const t=this.getValue(),e=this._values.indexOf(t);return this.$select.selectedIndex=e,this.$display.textContent=e===-1?t:this._names[e],this}}class Kt extends z{constructor(t,e,i){super(t,e,i,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",n=>{n.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var Rt=`.lil-gui {
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
}`;function Jt(a){const t=document.createElement("style");t.innerHTML=a;const e=document.querySelector("head link[rel=stylesheet], head style");e?document.head.insertBefore(t,e):document.head.appendChild(t)}let ut=!1;class at{constructor({parent:t,autoPlace:e=t===void 0,container:i,width:n,title:m="Controls",closeFolders:c=!1,injectStyles:f=!0,touchStyles:b=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(m),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),b&&this.domElement.classList.add("allow-touch-styles"),!ut&&f&&(Jt(Rt),ut=!0),i?i.appendChild(this.domElement):e&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),n&&this.domElement.style.setProperty("--width",n+"px"),this._closeFolders=c}add(t,e,i,n,m){if(Object(i)===i)return new Wt(this,t,e,i);const c=t[e];switch(typeof c){case"number":return new Xt(this,t,e,i,n,m);case"boolean":return new It(this,t,e);case"string":return new Kt(this,t,e);case"function":return new nt(this,t,e)}console.error(`gui.add failed
	property:`,e,`
	object:`,t,`
	value:`,c)}addColor(t,e,i=1){return new Gt(this,t,e,i)}addFolder(t){const e=new at({parent:this,title:t});return this.root._closeFolders&&e.close(),e}load(t,e=!0){return t.controllers&&this.controllers.forEach(i=>{i instanceof nt||i._name in t.controllers&&i.load(t.controllers[i._name])}),e&&t.folders&&this.folders.forEach(i=>{i._title in t.folders&&i.load(t.folders[i._title])}),this}save(t=!0){const e={controllers:{},folders:{}};return this.controllers.forEach(i=>{if(!(i instanceof nt)){if(i._name in e.controllers)throw new Error(`Cannot save GUI with duplicate property "${i._name}"`);e.controllers[i._name]=i.save()}}),t&&this.folders.forEach(i=>{if(i._title in e.folders)throw new Error(`Cannot save GUI with duplicate folder "${i._title}"`);e.folders[i._title]=i.save()}),e}open(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(t){this._closed!==t&&(this._closed=t,this._callOnOpenClose(this))}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("transition");const i=m=>{m.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",i))};this.$children.addEventListener("transitionend",i);const n=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!t),requestAnimationFrame(()=>{this.$children.style.height=n+"px"})}),this}title(t){return this._title=t,this.$title.textContent=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(i=>i.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onOpenClose(t){return this._onOpenClose=t,this}_callOnOpenClose(t){this.parent&&this.parent._callOnOpenClose(t),this._onOpenClose!==void 0&&this._onOpenClose.call(this,t)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(e=>{t=t.concat(e.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(e=>{t=t.concat(e.foldersRecursive())}),t}}function mt(a,t,e){const i=new ot;return i.onBeforeCompile=n=>{n.uniforms.colorScale={value:e.colorScale},n.uniforms.time={value:t},new tt.Noise(Math.random()),i.userData.shader=n,n.vertexShader=n.vertexShader.replace("#include <common>",`
				#include <common>
				varying vec3 vPosition;
				`),n.vertexShader=n.vertexShader.replace("#include <begin_vertex>",`
				#include <begin_vertex>
				vPosition = position;
				`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`
				#include <common>
				varying vec3 vPosition;
				uniform float colorScale;
				uniform float time;
				
				// GLSL Perlin noise (classic 3D)
				vec4 permute(vec4 x) {
				  return mod(((x*34.0)+1.0)*x, 289.0);
				}
				vec4 taylorInvSqrt(vec4 r) {
				  return 1.79284291400159 - 0.85373472095314 * r;
				}
				float perlinNoise(vec3 v) {
				  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
				  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);
				  vec3 i  = floor(v + dot(v, C.yyy) );
				  vec3 x0 =   v - i + dot(i, C.xxx) ;
				  vec3 g = step(x0.yzx, x0.xyz);
				  vec3 l = 1.0 - g;
				  vec3 i1 = min( g.xyz, l.zxy );
				  vec3 i2 = max( g.xyz, l.zxy );
				  vec3 x1 = x0 - i1 + C.xxx;
				  vec3 x2 = x0 - i2 + C.yyy;
				  vec3 x3 = x0 - D.yyy;
				  i = mod(i, 289.0 );
				  vec4 p = permute( permute( permute(
					i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
					+ i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
					+ i.x + vec4(0.0, i1.x, i2.x, 1.0 ));
				  float n_ = 1.0/7.0;
				  vec3  ns = n_ * D.wyz - D.xzx;
				  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
				  vec4 x_ = floor(j * ns.z);
				  vec4 y_ = floor(j - 7.0 * x_ );
				  vec4 x = x_ *ns.x + ns.y;
				  vec4 y = y_ *ns.x + ns.y;
				  vec4 h = 1.0 - abs(x) - abs(y);
				  vec4 b0 = vec4( x.xy, y.xy );
				  vec4 b1 = vec4( x.zw, y.zw );
				  vec4 s0 = floor(b0)*2.0 + 1.0;
				  vec4 s1 = floor(b1)*2.0 + 1.0;
				  vec4 sh = -step(h, vec4(0.0));
				  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
				  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;
				  vec3 p0 = vec3(a0.xy,h.x);
				  vec3 p1 = vec3(a0.zw,h.y);
				  vec3 p2 = vec3(a1.xy,h.z);
				  vec3 p3 = vec3(a1.zw,h.w);
				  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
				  p0 *= norm.x;
				  p1 *= norm.y;
				  p2 *= norm.z;
				  p3 *= norm.w;
				  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
				  m = m * m;
				  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
					dot(p2,x2), dot(p3,x3) ) );
				}
							`),n.fragmentShader=n.fragmentShader.replace("#include <dithering_fragment>",`
				float dist = length(vPosition); // Distance from origin
				float edge = smoothstep(0.0, 1.0, (dist-30.0) / 10.0); // Adjust 30.0 to your sphere's radius
				// Multicolor: map position to color
				vec3 baseColor = vec3(
				  step(0.5, perlinNoise(vec3(vPosition.x*0.1,vPosition.y*0.5, time))),
				  step(0.2, perlinNoise(vec3(vPosition.x*0.1,vPosition.y*0.5, time))) * sin(time),
				  sin(vPosition.y * step(0.2, perlinNoise(vec3(vPosition.x*0.1,vPosition.y*0.1, time))) + 4.0) * sin(time)
				);
				
				vec3 normPos = (vPosition + 30.0) / 60.0;
// vec3(edge)
				vec3 color = mix(baseColor, mix(normPos, vec3(edge), 1.0-edge), 0.7); // 0.5 = blend factor, adjust as needed
				if (edge < 0.01) {
					color = vec3(0.8, 0.2, 0.0);
				} else if (edge > 0.9) {
					color = baseColor;
				}
				gl_FragColor.rgb = color;
				#include <dithering_fragment>
				`)},i}const O=new at,vt={sphereHeight:0,stepInterval:.15},U=new tt.Noise(Math.random()),Zt=new tt.Noise(Math.random()),{scene:et,camera:it,renderer:ft}=Pt("threeCan");let R=0,H=0,Q=.15;const bt=new zt(it,ft.domElement);bt.enableDamping=!0;const I=new Ot(400,200,200);I.mesh.receiveShadow=!0;et.add(I.mesh);const st=new lt(30,64,O,H,Ht(O,H,{colorScale:1,noiseTimeMultiplier1:5}),{colorScale:1,noiseTimeMultiplier1:5},0,30,0),ht=new lt(30,64,O,H,mt(O,H,{noiseTimeMultiplier2:5}),{noiseTimeMultiplier2:5},100,30,0),dt=new lt(30,64,O,H,mt(O,H,{noiseTimeMultiplier3:5}),{noiseTimeMultiplier3:5},-100,30,0);st.mesh.castShadow=!0;ht.mesh.castShadow=!0;dt.mesh.castShadow=!0;et.add(st.mesh,ht.mesh,dt.mesh);O.add(vt,"sphereHeight",-30,100).onChange(a=>{st.mesh.position.y=a});O.add(vt,"stepInterval",.1,.3).onChange(a=>{Q=a});Vt(et);it.position.set(0,60,100);it.lookAt(0,0,0);function wt(){requestAnimationFrame(wt),I.updateVertices(H,U,Zt,R),I.updateColors(),st.updateSphereVertices(R,U,I.mesh,Q),ht.updateSphereVertices(R,U,I.mesh,Q),dt.updateSphereVertices(R,U,I.mesh,Q),bt.update(),ft.render(et,it),R+=.01,H++}wt();
