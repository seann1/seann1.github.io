import{S as ae,P as ce,W as le,l as me,D as he,f as pe,C as Z,F as de,m as D,a as F,g as f,d as ue,b as ve}from"./three.module-93d6cfd9.js";import{n as w,G as ge}from"./lil-gui.esm-21e57683.js";import{O as xe}from"./OrbitControls-12918994.js";function ye(s){const i=new ae,o=new ce(75,window.innerWidth/window.innerHeight,.1,1e3),t=new le({canvas:document.getElementById(s)});return t.shadowMap.enabled=!0,t.shadowMap.type=me,t.setSize(window.innerWidth,window.innerHeight),window.addEventListener("resize",()=>{o.aspect=window.innerWidth/window.innerHeight,o.updateProjectionMatrix(),t.setSize(window.innerWidth,window.innerHeight)}),{scene:i,camera:o,renderer:t}}function fe(s){const i=new he(16777215,1);i.position.set(0,100,100).normalize(),i.castShadow=!0,s.add(i)}class we{constructor(i,o,t){this.noise=new w.Noise(Math.random()),this.geometry=new pe(i,o,t,t);const e=[];for(let n=0;n<this.geometry.attributes.position.count;n++){const r=this.geometry.attributes.position.getZ(n),a=new Z,l=f.mapLinear(r,-10,10,.9,.1);a.setHSL(l,1,.5),e.push(a.r,a.g,a.b)}this.geometry.setAttribute("color",new de(e,3)),this.material=new D({vertexColors:!0,flatShading:!0}),this.mesh=new F(this.geometry,this.material),this.mesh.rotation.x=-Math.PI/2}updateColors(){const i=this.geometry.attributes.color;for(let o=0;o<this.geometry.attributes.position.count;o++){const t=this.geometry.attributes.position.getZ(o),e=f.mapLinear(t,-10,10,.9,.1),n=new Z;Math.abs(Math.sin(this.geometry.attributes.position.getY(o)*.05))*.6,n.setHSL(e,1,.5),i.setXYZ(o,n.r,n.g,n.b)}i.needsUpdate=!0}updateVertices(i,o,t,e){const n=Math.sin(i*9e-4);for(let r=0;r<this.geometry.attributes.position.count;r++){const a=this.geometry.attributes.position.getX(r)*(n*.1),l=this.geometry.attributes.position.getY(r)/30,p=o.perlin2(a,l+e)*20;t.perlin2(a,l+e),this.geometry.attributes.position.setZ(r,p)}this.geometry.attributes.position.needsUpdate=!0,this.geometry.computeVertexNormals()}}function Se(s,i,o){const t=new D;return t.onBeforeCompile=e=>{e.uniforms.colorScale={value:o.colorScale},e.uniforms.time={value:i},t.userData.shader=e,e.vertexShader=e.vertexShader.replace("#include <common>",`
				#include <common>
				varying vec3 vPosition;
				`),e.vertexShader=e.vertexShader.replace("#include <begin_vertex>",`
				#include <begin_vertex>
				vPosition = position;
				`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`
							#include <common>
							varying vec3 vPosition;
							uniform float colorScale;
							uniform float time;
							`),e.fragmentShader=e.fragmentShader.replace("#include <dithering_fragment>",`
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
				`),s&&s.add(o,"colorScale",.1,1).onChange(n=>{e.uniforms.colorScale.value=n})},t}class N{constructor(i,o,t,e,n,r,a,l,p){this.radius=i,this.geometry=new ue(i,o,o),this.params=r,this.originalSpherePositions=[];for(let c=0;c<this.geometry.attributes.position.count;c++)this.originalSpherePositions.push(this.geometry.attributes.position.getX(c),this.geometry.attributes.position.getY(c),this.geometry.attributes.position.getZ(c));this.material=n,this.multiplierKeyName=Object.keys(r).find(c=>c.startsWith("noiseTimeMultiplier")),t&&t.add(this.params,this.multiplierKeyName,0,10).onChange(c=>{this.params[this.multiplierKeyName]=c}),this.mesh=new F(this.geometry,this.material),this.mesh.position.set(a,l,p)}updateSphereVertices(i,o,t,e){this.material.userData.shader&&this.material.userData.shader.uniforms.time&&(this.material.userData.shader.uniforms.time.value=i);const r=t.geometry.attributes.position,a=t.geometry.parameters.width,l=t.geometry.parameters.height,p=t.geometry.parameters.widthSegments,c=t.geometry.parameters.heightSegments,q=a/p,O=l/c,k=a/2,R=l/2;for(let u=0;u<this.geometry.attributes.position.count;u++){let te=function(Y,ie,ne=[1,0,1,0,1,0,1]){const se=(Y+1)/2,re=Math.floor(se/ie);return ne[re%5]};const W=this.originalSpherePositions[u*3],j=this.originalSpherePositions[u*3+1],T=this.originalSpherePositions[u*3+2],J=W/this.radius,Q=j/this.radius,$=T/this.radius,ee=o.perlin3(J*2,Q*2,$*2+i*this.params[this.multiplierKeyName]*.5),P=2+te(ee,e)*50;let V=W*(1+P/this.radius*.2),C=j*(1+P/this.radius*.2),A=T*(1+P/this.radius*.2);const g=this.mesh.localToWorld(new ve(V,C,A)),I=t.worldToLocal(g.clone());let M=Math.round((I.x+k)/q),_=Math.round((I.z+R)/O);M=f.clamp(M,0,p),_=f.clamp(_,0,c);const oe=_*(p+1)+M,G=r.getY(oe);g.y<G+10&&(g.y=G+10,C=this.mesh.worldToLocal(g).y+5),this.geometry.attributes.position.setXYZ(u,V,C,A)}this.geometry.attributes.position.needsUpdate=!0,this.geometry.computeVertexNormals()}}function U(s,i,o){const t=new D;return t.onBeforeCompile=e=>{e.uniforms.colorScale={value:o.colorScale},e.uniforms.time={value:i},new w.Noise(Math.random()),t.userData.shader=e,e.vertexShader=e.vertexShader.replace("#include <common>",`
				#include <common>
				varying vec3 vPosition;
				`),e.vertexShader=e.vertexShader.replace("#include <begin_vertex>",`
				#include <begin_vertex>
				vPosition = position;
				`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`
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
							`),e.fragmentShader=e.fragmentShader.replace("#include <dithering_fragment>",`
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
				`)},t}const m=new ge,X={sphereHeight:0,stepInterval:.15},x=new w.Noise(Math.random()),be=new w.Noise(Math.random()),{scene:S,camera:b,renderer:B}=ye("threeCan");let v=0,h=0,y=.15;const E=new xe(b,B.domElement);E.enableDamping=!0;const d=new we(400,200,200);d.mesh.receiveShadow=!0;S.add(d.mesh);const z=new N(30,64,m,h,Se(m,h,{colorScale:1,noiseTimeMultiplier1:5}),{colorScale:1,noiseTimeMultiplier1:5},0,30,0),L=new N(30,64,m,h,U(m,h,{noiseTimeMultiplier2:5}),{noiseTimeMultiplier2:5},100,30,0),H=new N(30,64,m,h,U(m,h,{noiseTimeMultiplier3:5}),{noiseTimeMultiplier3:5},-100,30,0);z.mesh.castShadow=!0;L.mesh.castShadow=!0;H.mesh.castShadow=!0;S.add(z.mesh,L.mesh,H.mesh);m.add(X,"sphereHeight",-30,100).onChange(s=>{z.mesh.position.y=s});m.add(X,"stepInterval",.1,.3).onChange(s=>{y=s});fe(S);b.position.set(0,60,100);b.lookAt(0,0,0);function K(){requestAnimationFrame(K),d.updateVertices(h,x,be,v),d.updateColors(),z.updateSphereVertices(v,x,d.mesh,y),L.updateSphereVertices(v,x,d.mesh,y),H.updateSphereVertices(v,x,d.mesh,y),E.update(),B.render(S,b),v+=.01,h++}K();
