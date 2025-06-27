import"./modulepreload-polyfill-3cfb730f.js";import{M as S,U as k,j as C,W as T,S as R,C as W,P as F,R as D,D as M,k as U,O as B,V as G,L as H,G as V,B as j,a as I,i as L,b as w,h as N}from"./three.module-1a1b03c6.js";import{g as o}from"./index-0a1891a5.js";import{O as q}from"./OrbitControls-6b84fe56.js";const A=`
#define PHONG

varying vec3 vViewPosition;

varying vec3 vPositionW;
varying vec3 vNormalW;
varying vec2 vUv;


#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {
    #include <uv_vertex>
    #include <color_vertex>
    #include <morphcolor_vertex>
    #include <beginnormal_vertex>
    #include <morphnormal_vertex>
    #include <skinbase_vertex>
    #include <skinnormal_vertex>
    #include <defaultnormal_vertex>
    #include <normal_vertex>
    #include <begin_vertex>
    #include <morphtarget_vertex>
    #include <skinning_vertex>
    #include <displacementmap_vertex>
    #include <project_vertex>
    #include <logdepthbuf_vertex>
    #include <clipping_planes_vertex>

    vViewPosition = - mvPosition.xyz;

    #include <worldpos_vertex>
    #include <envmap_vertex>
    #include <shadowmap_vertex>
    #include <fog_vertex>
    vUv = uv;
}
`,X=`
#define PHONG

uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
uniform vec3 position;
uniform float time;
varying vec2 vUv;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

vec4 permute(vec4 x)
{
    return mod(((x*34.0)+1.0)*x, 289.0);
}

vec2 fade(vec2 t)
{
    return t*t*t*(t*(t*6.0-15.0)+10.0);
}

float cnoise(vec2 P)
{
    vec4 Pi = floor(P.xyxy) + vec4(0.0, (time/ 5000.0), 1.0, 1.0);
    vec4 Pf = fract(P.xyxy) - vec4(0.0, 0.0, 1.0, 1.0);
    Pi = mod(Pi, 289.0); // To avoid truncation effects in permutation
    vec4 ix = Pi.xzxz;
    vec4 iy = Pi.yyww;
    vec4 fx = Pf.xzxz;
    vec4 fy = Pf.yyww;
    vec4 i = permute(permute(ix) + iy);
    vec4 gx = (sin(time)/2.0) * fract(i * 0.0243902439) - 1.0; // 1/41 = 0.024...
    vec4 gy = abs(gx) - 0.5;
    vec4 tx = floor(gx + 0.5);
    gx = gx - tx;
    vec2 g00 = vec2(gx.x,gy.x);
    vec2 g10 = vec2(gx.y,gy.y);
    vec2 g01 = vec2(gx.z,gy.z);
    vec2 g11 = vec2(gx.w,gy.w);
    vec4 norm = 1.79284291400159 - 0.85373472095314 * vec4(dot(g00, g00), dot(g01, g01), dot(g10, g10), dot(g11, g11));
    g00 *= norm.x;
    g01 *= norm.y;
    g10 *= norm.z;
    g11 *= norm.w;
    float n00 = dot(g00, vec2(fx.x, fy.x));
    float n10 = dot(g10, vec2(fx.y, fy.y));
    float n01 = dot(g01, vec2(fx.z, fy.z));
    float n11 = dot(g11, vec2(fx.w, fy.w));
    vec2 fade_xy = fade(Pf.xy);
    vec2 n_x = mix(vec2(n00, n01), vec2(n10, n11), fade_xy.x);
    float n_xy = mix(n_x.x, n_x.y, fade_xy.y);
    return 2.3 * n_xy;
}

void main() {
    #include <clipping_planes_fragment>

    vec4 diffuseColor = vec4(diffuse, opacity);
    ReflectedLight reflectedLight = ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));
    vec3 totalEmissiveRadiance = emissive;

    #include <logdepthbuf_fragment>
    #include <map_fragment>
    #include <color_fragment>
    #include <alphamap_fragment>
    #include <alphatest_fragment>
    #include <specularmap_fragment>
    #include <normal_fragment_begin>
    #include <normal_fragment_maps>
    #include <emissivemap_fragment>
    #include <lights_phong_fragment>
    #include <lights_fragment_begin>
    #include <lights_fragment_maps>
    #include <lights_fragment_end>
    #include <aomap_fragment>
    
    float strength = step(sin(time) * 0.3, sin(cnoise(vUv * 2.0) * 50.0));
	vec3 normalizedPosition = (position - vec3(0.0)) / vec3(1.0);
    vec3 outgoingLight = reflectedLight.directDiffuse + diffuse - normalizedPosition + vec3(strength) - vec3(vUv.x, strength, sin(time)/5.0+strength) - reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	
    // Final color output
    gl_FragColor = vec4(outgoingLight, 1.0);
    
    #include <envmap_fragment>
    #include <tonemapping_fragment>
    #include <fog_fragment>
    #include <premultiplied_alpha_fragment>
    #include <dithering_fragment>
}
`;class Y extends S{constructor(c,a={}){super(c,a),this.uniforms={...k.clone(C.phong.uniforms),...a},this.setValues(c),this.onBeforeCompile=n=>{n.vertexShader=A,n.fragmentShader=X,n.uniforms=this.uniforms}}}const J=document.getElementById("threeCan"),d=new T({canvas:J,alpha:!0});window.onload=function(){setTimeout(()=>{document.getElementById("loading-screen").style.display="none"},"50"),d.setSize(window.innerWidth,window.innerHeight)};const v=new R;v.background=new W(0);const m=new F(75,window.innerWidth/window.innerHeight,.1,1e3);m.position.set(0,0,-20);const s={width:window.innerWidth,height:window.innerHeight},b=new D,y=new M(16777215,1),z=new M(16777215,2);y.position.set(4,-4,10);z.position.set(-1,4,-10);v.add(y,z);new U().load(["../environmentMaps/2/nx.png","../environmentMaps/2/ny.png","../environmentMaps/2/nz.png","../environmentMaps/2/px.png","../environmentMaps/2/py.png","../environmentMaps/2/pz.png"]);const P=new B;P.position.set(0,0,0);y.target=P;z.target=P;let h=new G(-1,1);function K(t){t.preventDefault(),h.x=t.clientX/window.innerWidth*2-1,h.y=-(t.clientY/window.innerHeight)*2+1}document.addEventListener("mousemove",K,!1);d.toneMapping=H;d.toneMappingExposure=.3;const x=10,l=new V;for(let t=0;t<5;t++)for(let c=0;c<5;c++)for(let a=0;a<5;a++){const n=new j(1,1,1);n.scale.x=Math.random();const r={time:{type:"f",value:0},position:{type:"v3",value:{x:0,y:0,z:0}}},i=new Y({},r),g=new I(n,i);g.position.set(t-x/2,c-x/2,a-x/2),g.scale.set(Math.random(),.4,.4),l.add(g)}v.add(l);const Q=new L().setFromObject(l),Z=Q.getCenter(new w);l.children.forEach(t=>{t.position.sub(Z)});const E=new q(m,d.domElement);E.update();d.setPixelRatio(Math.min(window.devicePixelRatio,2));m.aspect=s.width/s.height;window.addEventListener("resize",()=>{s.width=window.innerWidth,s.height=window.innerHeight,m.aspect=s.width/s.height,m.updateProjectionMatrix(),d.setSize(s.width,s.height),d.setPixelRatio(Math.min(window.devicePixelRatio,2))});const $=new N;let e,p=[];const u=new L().setFromObject(l),f=new w;u.getSize(f);function O(){requestAnimationFrame(O);const t=$.getElapsedTime(),c=l.children.slice();l.children.map(n=>{const r=n.position,i=new w((r.x-u.min.x)/f.x,(r.y-u.min.y)/f.y,(r.z-u.min.z)/f.z);n.material.uniforms.time.value=t,n.material.uniforms.position.value=i,n.material.needsUpdate=!0}),b.setFromCamera(h,m);const a=b.intersectObjects(l.children);if(a.length>0){if(a[0].object!==e){e&&(o.to(e.scale,{x:Math.random(),y:.4,z:.4,duration:10}),p.forEach(i=>{o.to(i.scale,{x:Math.random(),y:.4,z:.4,duration:10})}),p=[]),e=a[0].object;const n=e.position.distanceTo(a[0].point),r=1/Math.pow(n,.1);e.scale.x===.4&&e.scale.y===.4&&e.scale.z===.4&&(o.killTweensOf(e.scale),o.to(e.scale,{x:r,y:r,z:r,duration:1})),c.forEach(i=>{if(i!==e&&i.position.distanceTo(e.position)<=3){p.push(i);const g=i.position.distanceTo(e.position),_=1/Math.pow(g,.1);o.killTweensOf(i.scale),o.to(i.scale,{x:_,y:_,z:_,duration:1})}})}}else e&&(o.killTweensOf(e.scale),o.to(e.scale,{x:Math.random(),y:.4,z:.4,duration:10}),p.forEach(n=>{o.killTweensOf(n.scale),o.to(n.scale,{x:Math.random(),y:.4,z:.4,duration:10})}),p=[],e=void 0);E.update(),d.render(v,m)}O();
