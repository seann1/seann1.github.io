import{W as v,S as O,P,R as S,D as b,O as W,V as R,L as D,B as L,G as T,M as B,a as F,i as G,b as H,C as j,h as I}from"./three.module-80b8ae93.js";import{g as n}from"./index-0a1891a5.js";import{O as V}from"./OrbitControls-fb351a1e.js";const k=document.getElementById("threeCan"),s=new v({canvas:k,alpha:!0});window.onload=function(){setTimeout(()=>{document.getElementById("loading-screen").style.display="none"},"50"),s.setSize(window.innerWidth,window.innerHeight)};const p=new O,c=new P(75,window.innerWidth/window.innerHeight,.1,1e3);c.position.set(0,0,-20);const r={width:window.innerWidth,height:window.innerHeight},y=new S,f=new b(16777215,1,1e3),C=new b(16777215,1,1e3);f.position.set(0,-4,10);C.position.set(0,4,-10);p.add(f,C);const x=new W;x.position.set(0,0,0);f.target=x;C.target=x;let m=new R(-1,1);function q(t){t.preventDefault(),m.x=t.clientX/window.innerWidth*2-1,m.y=-(t.clientY/window.innerHeight)*2+1}document.addEventListener("mousemove",q,!1);s.toneMapping=D;s.toneMappingExposure=.3;let h=0;function A(){const t=new j(`hsl(${h}, 100%, 50%)`);return h=(h+1)%360,t}const N=new L(1,1,1),u=10,d=new T;for(let t=0;t<20;t++)for(let a=0;a<20;a++)for(let i=0;i<20;i++){const l=new B({color:A()}),e=new F(N,l);e.position.set(t-u/2,a-u/2,i-u/2),e.scale.set(.4,.4,.4),e.originalColor=l.color.clone(),d.add(e)}p.add(d);const X=new G().setFromObject(d),Y=X.getCenter(new H);d.children.forEach(t=>{t.position.sub(Y)});const M=new V(c,s.domElement);M.update();s.setPixelRatio(Math.min(window.devicePixelRatio,2));c.aspect=r.width/r.height;window.addEventListener("resize",()=>{r.width=window.innerWidth,r.height=window.innerHeight,c.aspect=r.width/r.height,c.updateProjectionMatrix(),s.setSize(r.width,r.height),s.setPixelRatio(Math.min(window.devicePixelRatio,2))});const $=new I;let o,w=[];function z(){requestAnimationFrame(z),$.getElapsedTime();const t=d.children.slice();y.setFromCamera(m,c);const a=y.intersectObjects(d.children);if(a.length>0){if(a[0].object!==o){o&&(n.to(o.scale,{x:.4,y:.4,z:.4,duration:20}),n.to(o.material.color,{r:o.originalColor.r,g:o.originalColor.g,b:o.originalColor.b,duration:20}),w.forEach(e=>{n.to(e.scale,{x:.4,y:.4,z:.4,duration:20}),n.to(e.material.color,{r:e.originalColor.r,g:e.originalColor.g,b:e.originalColor.b,duration:20})}),w=[]),o=a[0].object;const i=o.position.distanceTo(a[0].point),l=1/Math.pow(i,.1);o.scale.x===.4&&o.scale.y===.4&&o.scale.z===.4&&(n.to(o.scale,{x:l,y:l,z:l,duration:1}),n.to(o.material.color,{r:1,g:1,b:1,duration:1})),t.forEach(e=>{if(e!==o&&e.position.distanceTo(o.position)<=3){w.push(e);const E=e.position.distanceTo(o.position),g=1/Math.pow(E,.1);n.to(e.scale,{x:g,y:g,z:g,duration:1}),n.to(e.material.color,{r:1,g:1,b:1,duration:1})}})}}else o&&(n.to(o.scale,{x:.4,y:.4,z:.4,duration:20}),n.to(o.material.color,{r:o.originalColor.r,g:o.originalColor.g,b:o.originalColor.b,duration:20}),w.forEach(i=>{n.to(i.scale,{x:.4,y:.4,z:.4,duration:20}),n.to(i.material.color,{r:i.originalColor.r,g:i.originalColor.g,b:i.originalColor.b,duration:20})}),w=[],o=void 0);M.update(),s.render(p,c)}z();