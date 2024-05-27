(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wd="152",Xv=0,ep=1,Yv=2,A_=1,jv=2,_s=3,Js=0,zn=1,ys=2,Ys=0,Uo=1,tp=2,np=3,ip=4,$v=5,bo=100,Zv=101,Kv=102,sp=103,rp=104,Jv=200,Qv=201,ex=202,tx=203,C_=204,R_=205,nx=206,ix=207,sx=208,rx=209,ox=210,ax=0,cx=1,lx=2,Nh=3,ux=4,hx=5,dx=6,fx=7,P_=0,px=1,mx=2,Ms=0,L_=1,_x=2,gx=3,vx=4,xx=5,F_=300,Yo=301,jo=302,Ih=303,Oh=304,au=306,Uh=1e3,Oi=1001,kh=1002,Dn=1003,op=1004,zu=1005,mi=1006,yx=1007,tc=1008,Hr=1009,Sx=1010,Tx=1011,N_=1012,Mx=1013,Er=1014,wr=1015,nc=1016,Ex=1017,wx=1018,ko=1020,bx=1021,Ui=1023,Dx=1024,Ax=1025,Pr=1026,$o=1027,Cx=1028,Rx=1029,Px=1030,Lx=1031,Fx=1033,Bu=33776,Vu=33777,Gu=33778,Wu=33779,ap=35840,cp=35841,lp=35842,up=35843,Nx=36196,hp=37492,dp=37496,fp=37808,pp=37809,mp=37810,_p=37811,gp=37812,vp=37813,xp=37814,yp=37815,Sp=37816,Tp=37817,Mp=37818,Ep=37819,wp=37820,bp=37821,Hu=36492,Ix=36283,Dp=36284,Ap=36285,Cp=36286,I_=3e3,Lr=3001,Ox=3200,Ux=3201,kx=0,zx=1,Fr="",Je="srgb",ns="srgb-linear",O_="display-p3",qu=7680,Bx=519,Rp=35044,Pp="300 es",zh=1035;class ha{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Lp=1234567;const ka=Math.PI/180,ic=180/Math.PI;function da(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(dn[s&255]+dn[s>>8&255]+dn[s>>16&255]+dn[s>>24&255]+"-"+dn[e&255]+dn[e>>8&255]+"-"+dn[e>>16&15|64]+dn[e>>24&255]+"-"+dn[t&63|128]+dn[t>>8&255]+"-"+dn[t>>16&255]+dn[t>>24&255]+dn[n&255]+dn[n>>8&255]+dn[n>>16&255]+dn[n>>24&255]).toLowerCase()}function An(s,e,t){return Math.max(e,Math.min(t,s))}function bd(s,e){return(s%e+e)%e}function Vx(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Gx(s,e,t){return s!==e?(t-s)/(e-s):0}function za(s,e,t){return(1-t)*s+t*e}function Wx(s,e,t,n){return za(s,e,1-Math.exp(-t*n))}function Hx(s,e=1){return e-Math.abs(bd(s,e*2)-e)}function qx(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Xx(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Yx(s,e){return s+Math.floor(Math.random()*(e-s+1))}function jx(s,e){return s+Math.random()*(e-s)}function $x(s){return s*(.5-Math.random())}function Zx(s){s!==void 0&&(Lp=s);let e=Lp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Kx(s){return s*ka}function Jx(s){return s*ic}function Bh(s){return(s&s-1)===0&&s!==0}function Qx(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function U_(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function ey(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),u=a((e+n)/2),h=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),_=a((n-e)/2);switch(i){case"XYX":s.set(o*u,c*h,c*d,o*l);break;case"YZY":s.set(c*d,o*u,c*h,o*l);break;case"ZXZ":s.set(c*h,c*d,o*u,o*l);break;case"XZX":s.set(o*u,c*_,c*f,o*l);break;case"YXY":s.set(c*f,o*u,c*_,o*l);break;case"ZYZ":s.set(c*_,c*f,o*u,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Aa(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function On(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const ty={DEG2RAD:ka,RAD2DEG:ic,generateUUID:da,clamp:An,euclideanModulo:bd,mapLinear:Vx,inverseLerp:Gx,lerp:za,damp:Wx,pingpong:Hx,smoothstep:qx,smootherstep:Xx,randInt:Yx,randFloat:jx,randFloatSpread:$x,seededRandom:Zx,degToRad:Kx,radToDeg:Jx,isPowerOfTwo:Bh,ceilPowerOfTwo:Qx,floorPowerOfTwo:U_,setQuaternionFromProperEuler:ey,normalize:On,denormalize:Aa};class dt{constructor(e=0,t=0){dt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(An(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class at{constructor(){at.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,r,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],f=n[5],_=n[8],m=i[0],g=i[3],p=i[6],S=i[1],y=i[4],T=i[7],v=i[2],M=i[5],E=i[8];return r[0]=a*m+o*S+c*v,r[3]=a*g+o*y+c*M,r[6]=a*p+o*T+c*E,r[1]=l*m+u*S+h*v,r[4]=l*g+u*y+h*M,r[7]=l*p+u*T+h*E,r[2]=d*m+f*S+_*v,r[5]=d*g+f*y+_*M,r[8]=d*p+f*T+_*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*r*u+n*o*c+i*r*l-i*a*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,d=o*c-u*r,f=l*r-a*c,_=t*h+n*d+i*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/_;return e[0]=h*m,e[1]=(i*l-u*n)*m,e[2]=(o*n-i*a)*m,e[3]=d*m,e[4]=(u*t-i*c)*m,e[5]=(i*r-o*t)*m,e[6]=f*m,e[7]=(n*c-l*t)*m,e[8]=(a*t-n*r)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Xu.makeScale(e,t)),this}rotate(e){return this.premultiply(Xu.makeRotation(-e)),this}translate(e,t){return this.premultiply(Xu.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Xu=new at;function k_(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Fl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}const Fp={};function Ba(s){s in Fp||(Fp[s]=!0,console.warn(s))}function zo(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Yu(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const ny=new at().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),iy=new at().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function sy(s){return s.convertSRGBToLinear().applyMatrix3(iy)}function ry(s){return s.applyMatrix3(ny).convertLinearToSRGB()}const oy={[ns]:s=>s,[Je]:s=>s.convertSRGBToLinear(),[O_]:sy},ay={[ns]:s=>s,[Je]:s=>s.convertLinearToSRGB(),[O_]:ry},Di={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(s){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!s},get workingColorSpace(){return ns},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=oy[e],i=ay[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)}};let ro;class z_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ro===void 0&&(ro=Fl("canvas")),ro.width=e.width,ro.height=e.height;const n=ro.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ro}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Fl("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=zo(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(zo(t[n]/255)*255):t[n]=zo(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let B_=class{constructor(e=null){this.isSource=!0,this.uuid=da(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(ju(i[a].image)):r.push(ju(i[a]))}else r=ju(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function ju(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?z_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let cy=0;class ci extends ha{constructor(e=ci.DEFAULT_IMAGE,t=ci.DEFAULT_MAPPING,n=Oi,i=Oi,r=mi,a=tc,o=Ui,c=Hr,l=ci.DEFAULT_ANISOTROPY,u=Fr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cy++}),this.uuid=da(),this.name="",this.source=new B_(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Ba("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Lr?Je:Fr),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==F_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Uh:e.x=e.x-Math.floor(e.x);break;case Oi:e.x=e.x<0?0:1;break;case kh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Uh:e.y=e.y-Math.floor(e.y);break;case Oi:e.y=e.y<0?0:1;break;case kh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ba("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Je?Lr:I_}set encoding(e){Ba("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Lr?Je:Fr}}ci.DEFAULT_IMAGE=null;ci.DEFAULT_MAPPING=F_;ci.DEFAULT_ANISOTROPY=1;class on{constructor(e=0,t=0,n=0,i=1){on.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],_=c[9],m=c[2],g=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-m)<.01&&Math.abs(_-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+m)<.1&&Math.abs(_+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,T=(f+1)/2,v=(p+1)/2,M=(u+d)/4,E=(h+m)/4,b=(_+g)/4;return y>T&&y>v?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=M/n,r=E/n):T>v?T<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(T),n=M/i,r=b/i):v<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(v),n=E/r,i=b/r),this.set(n,i,r,t),this}let S=Math.sqrt((g-_)*(g-_)+(h-m)*(h-m)+(d-u)*(d-u));return Math.abs(S)<.001&&(S=1),this.x=(g-_)/S,this.y=(h-m)/S,this.z=(d-u)/S,this.w=Math.acos((l+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class qr extends ha{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new on(0,0,e,t),this.scissorTest=!1,this.viewport=new on(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(Ba("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Lr?Je:Fr),this.texture=new ci(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:mi,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new B_(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class V_ extends ci{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ly extends ci{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _c{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let c=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3];const d=r[a+0],f=r[a+1],_=r[a+2],m=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=_,e[t+3]=m;return}if(h!==m||c!==d||l!==f||u!==_){let g=1-o;const p=c*d+l*f+u*_+h*m,S=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const v=Math.sqrt(y),M=Math.atan2(v,p*S);g=Math.sin(g*M)/v,o=Math.sin(o*M)/v}const T=o*S;if(c=c*g+d*T,l=l*g+f*T,u=u*g+_*T,h=h*g+m*T,g===1-o){const v=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=v,l*=v,u*=v,h*=v}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],c=n[i+1],l=n[i+2],u=n[i+3],h=r[a],d=r[a+1],f=r[a+2],_=r[a+3];return e[t]=o*_+u*h+c*f-l*d,e[t+1]=c*_+u*d+l*h-o*f,e[t+2]=l*_+u*f+o*d-c*h,e[t+3]=u*_-o*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(i/2),h=o(r/2),d=c(n/2),f=c(i/2),_=c(r/2);switch(a){case"XYZ":this._x=d*u*h+l*f*_,this._y=l*f*h-d*u*_,this._z=l*u*_+d*f*h,this._w=l*u*h-d*f*_;break;case"YXZ":this._x=d*u*h+l*f*_,this._y=l*f*h-d*u*_,this._z=l*u*_-d*f*h,this._w=l*u*h+d*f*_;break;case"ZXY":this._x=d*u*h-l*f*_,this._y=l*f*h+d*u*_,this._z=l*u*_+d*f*h,this._w=l*u*h-d*f*_;break;case"ZYX":this._x=d*u*h-l*f*_,this._y=l*f*h+d*u*_,this._z=l*u*_-d*f*h,this._w=l*u*h+d*f*_;break;case"YZX":this._x=d*u*h+l*f*_,this._y=l*f*h+d*u*_,this._z=l*u*_-d*f*h,this._w=l*u*h-d*f*_;break;case"XZY":this._x=d*u*h-l*f*_,this._y=l*f*h-d*u*_,this._z=l*u*_+d*f*h,this._w=l*u*h+d*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(a-i)*f}else if(n>o&&n>h){const f=2*Math.sqrt(1+n-o-h);this._w=(u-c)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+l)/f}else if(o>h){const f=2*Math.sqrt(1+o-n-h);this._w=(r-l)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+h-n-o);this._w=(a-i)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(An(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+i*l-r*c,this._y=i*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-i*o,this._w=a*u-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(e=0,t=0,n=0){$.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Np.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Np.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=c*t+a*i-o*n,u=c*n+o*t-r*i,h=c*i+r*n-a*t,d=-r*t-a*n-o*i;return this.x=l*c+d*-r+u*-o-h*-a,this.y=u*c+d*-a+h*-r-l*-o,this.z=h*c+d*-o+l*-a-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return $u.copy(this).projectOnVector(e),this.sub($u)}reflect(e){return this.sub($u.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(An(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $u=new $,Np=new _c;class gc{constructor(e=new $(1/0,1/0,1/0),t=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(hs.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(hs.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=hs.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),oo.copy(e.boundingBox),oo.applyMatrix4(e.matrixWorld),this.union(oo);else{const i=e.geometry;if(i!==void 0)if(t&&i.attributes!==void 0&&i.attributes.position!==void 0){const r=i.attributes.position;for(let a=0,o=r.count;a<o;a++)hs.fromBufferAttribute(r,a).applyMatrix4(e.matrixWorld),this.expandByPoint(hs)}else i.boundingBox===null&&i.computeBoundingBox(),oo.copy(i.boundingBox),oo.applyMatrix4(e.matrixWorld),this.union(oo)}const n=e.children;for(let i=0,r=n.length;i<r;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,hs),hs.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ya),Oc.subVectors(this.max,ya),ao.subVectors(e.a,ya),co.subVectors(e.b,ya),lo.subVectors(e.c,ya),Is.subVectors(co,ao),Os.subVectors(lo,co),fr.subVectors(ao,lo);let t=[0,-Is.z,Is.y,0,-Os.z,Os.y,0,-fr.z,fr.y,Is.z,0,-Is.x,Os.z,0,-Os.x,fr.z,0,-fr.x,-Is.y,Is.x,0,-Os.y,Os.x,0,-fr.y,fr.x,0];return!Zu(t,ao,co,lo,Oc)||(t=[1,0,0,0,1,0,0,0,1],!Zu(t,ao,co,lo,Oc))?!1:(Uc.crossVectors(Is,Os),t=[Uc.x,Uc.y,Uc.z],Zu(t,ao,co,lo,Oc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hs).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hs).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(us[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),us[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),us[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),us[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),us[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),us[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),us[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),us[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(us),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const us=[new $,new $,new $,new $,new $,new $,new $,new $],hs=new $,oo=new gc,ao=new $,co=new $,lo=new $,Is=new $,Os=new $,fr=new $,ya=new $,Oc=new $,Uc=new $,pr=new $;function Zu(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){pr.fromArray(s,r);const o=i.x*Math.abs(pr.x)+i.y*Math.abs(pr.y)+i.z*Math.abs(pr.z),c=e.dot(pr),l=t.dot(pr),u=n.dot(pr);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const uy=new gc,Sa=new $,Ku=new $;class Dd{constructor(e=new $,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):uy.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Sa.subVectors(e,this.center);const t=Sa.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Sa,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ku.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Sa.copy(e.center).add(Ku)),this.expandByPoint(Sa.copy(e.center).sub(Ku))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ds=new $,Ju=new $,kc=new $,Us=new $,Qu=new $,zc=new $,eh=new $;class G_{constructor(e=new $,t=new $(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ds)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ds.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ds.copy(this.origin).addScaledVector(this.direction,t),ds.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ju.copy(e).add(t).multiplyScalar(.5),kc.copy(t).sub(e).normalize(),Us.copy(this.origin).sub(Ju);const r=e.distanceTo(t)*.5,a=-this.direction.dot(kc),o=Us.dot(this.direction),c=-Us.dot(kc),l=Us.lengthSq(),u=Math.abs(1-a*a);let h,d,f,_;if(u>0)if(h=a*c-o,d=a*o-c,_=r*u,h>=0)if(d>=-_)if(d<=_){const m=1/u;h*=m,d*=m,f=h*(h+a*d+2*o)+d*(a*h+d+2*c)+l}else d=r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;else d<=-_?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l):d<=_?(h=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Ju).addScaledVector(kc,d),f}intersectSphere(e,t){ds.subVectors(e.center,this.origin);const n=ds.dot(this.direction),i=ds.dot(ds)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ds)!==null}intersectTriangle(e,t,n,i,r){Qu.subVectors(t,e),zc.subVectors(n,e),eh.crossVectors(Qu,zc);let a=this.direction.dot(eh),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Us.subVectors(this.origin,e);const c=o*this.direction.dot(zc.crossVectors(Us,zc));if(c<0)return null;const l=o*this.direction.dot(Qu.cross(Us));if(l<0||c+l>a)return null;const u=-o*Us.dot(eh);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class cn{constructor(){cn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,r,a,o,c,l,u,h,d,f,_,m,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=_,p[11]=m,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new cn().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/uo.setFromMatrixColumn(e,0).length(),r=1/uo.setFromMatrixColumn(e,1).length(),a=1/uo.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=a*u,f=a*h,_=o*u,m=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=f+_*l,t[5]=d-m*l,t[9]=-o*c,t[2]=m-d*l,t[6]=_+f*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*u,f=c*h,_=l*u,m=l*h;t[0]=d+m*o,t[4]=_*o-f,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-_,t[6]=m+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*u,f=c*h,_=l*u,m=l*h;t[0]=d-m*o,t[4]=-a*h,t[8]=_+f*o,t[1]=f+_*o,t[5]=a*u,t[9]=m-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*u,f=a*h,_=o*u,m=o*h;t[0]=c*u,t[4]=_*l-f,t[8]=d*l+m,t[1]=c*h,t[5]=m*l+d,t[9]=f*l-_,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,f=a*l,_=o*c,m=o*l;t[0]=c*u,t[4]=m-d*h,t[8]=_*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=f*h+_,t[10]=d-m*h}else if(e.order==="XZY"){const d=a*c,f=a*l,_=o*c,m=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+m,t[5]=a*u,t[9]=f*h-_,t[2]=_*h-f,t[6]=o*u,t[10]=m*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(hy,e,dy)}lookAt(e,t,n){const i=this.elements;return Zn.subVectors(e,t),Zn.lengthSq()===0&&(Zn.z=1),Zn.normalize(),ks.crossVectors(n,Zn),ks.lengthSq()===0&&(Math.abs(n.z)===1?Zn.x+=1e-4:Zn.z+=1e-4,Zn.normalize(),ks.crossVectors(n,Zn)),ks.normalize(),Bc.crossVectors(Zn,ks),i[0]=ks.x,i[4]=Bc.x,i[8]=Zn.x,i[1]=ks.y,i[5]=Bc.y,i[9]=Zn.y,i[2]=ks.z,i[6]=Bc.z,i[10]=Zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],f=n[13],_=n[2],m=n[6],g=n[10],p=n[14],S=n[3],y=n[7],T=n[11],v=n[15],M=i[0],E=i[4],b=i[8],x=i[12],w=i[1],F=i[5],R=i[9],L=i[13],N=i[2],k=i[6],z=i[10],U=i[14],V=i[3],H=i[7],D=i[11],te=i[15];return r[0]=a*M+o*w+c*N+l*V,r[4]=a*E+o*F+c*k+l*H,r[8]=a*b+o*R+c*z+l*D,r[12]=a*x+o*L+c*U+l*te,r[1]=u*M+h*w+d*N+f*V,r[5]=u*E+h*F+d*k+f*H,r[9]=u*b+h*R+d*z+f*D,r[13]=u*x+h*L+d*U+f*te,r[2]=_*M+m*w+g*N+p*V,r[6]=_*E+m*F+g*k+p*H,r[10]=_*b+m*R+g*z+p*D,r[14]=_*x+m*L+g*U+p*te,r[3]=S*M+y*w+T*N+v*V,r[7]=S*E+y*F+T*k+v*H,r[11]=S*b+y*R+T*z+v*D,r[15]=S*x+y*L+T*U+v*te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],_=e[3],m=e[7],g=e[11],p=e[15];return _*(+r*c*h-i*l*h-r*o*d+n*l*d+i*o*f-n*c*f)+m*(+t*c*f-t*l*d+r*a*d-i*a*f+i*l*u-r*c*u)+g*(+t*l*h-t*o*f-r*a*h+n*a*f+r*o*u-n*l*u)+p*(-i*o*u-t*c*h+t*o*d+i*a*h-n*a*d+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],_=e[12],m=e[13],g=e[14],p=e[15],S=h*g*l-m*d*l+m*c*f-o*g*f-h*c*p+o*d*p,y=_*d*l-u*g*l-_*c*f+a*g*f+u*c*p-a*d*p,T=u*m*l-_*h*l+_*o*f-a*m*f-u*o*p+a*h*p,v=_*h*c-u*m*c-_*o*d+a*m*d+u*o*g-a*h*g,M=t*S+n*y+i*T+r*v;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/M;return e[0]=S*E,e[1]=(m*d*r-h*g*r-m*i*f+n*g*f+h*i*p-n*d*p)*E,e[2]=(o*g*r-m*c*r+m*i*l-n*g*l-o*i*p+n*c*p)*E,e[3]=(h*c*r-o*d*r-h*i*l+n*d*l+o*i*f-n*c*f)*E,e[4]=y*E,e[5]=(u*g*r-_*d*r+_*i*f-t*g*f-u*i*p+t*d*p)*E,e[6]=(_*c*r-a*g*r-_*i*l+t*g*l+a*i*p-t*c*p)*E,e[7]=(a*d*r-u*c*r+u*i*l-t*d*l-a*i*f+t*c*f)*E,e[8]=T*E,e[9]=(_*h*r-u*m*r-_*n*f+t*m*f+u*n*p-t*h*p)*E,e[10]=(a*m*r-_*o*r+_*n*l-t*m*l-a*n*p+t*o*p)*E,e[11]=(u*o*r-a*h*r-u*n*l+t*h*l+a*n*f-t*o*f)*E,e[12]=v*E,e[13]=(u*m*i-_*h*i+_*n*d-t*m*d-u*n*g+t*h*g)*E,e[14]=(_*o*i-a*m*i-_*n*c+t*m*c+a*n*g-t*o*g)*E,e[15]=(a*h*i-u*o*i+u*n*c-t*h*c-a*n*d+t*o*d)*E,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,u*o+n,u*c-i*a,0,l*c-i*o,u*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,u=a+a,h=o+o,d=r*l,f=r*u,_=r*h,m=a*u,g=a*h,p=o*h,S=c*l,y=c*u,T=c*h,v=n.x,M=n.y,E=n.z;return i[0]=(1-(m+p))*v,i[1]=(f+T)*v,i[2]=(_-y)*v,i[3]=0,i[4]=(f-T)*M,i[5]=(1-(d+p))*M,i[6]=(g+S)*M,i[7]=0,i[8]=(_+y)*E,i[9]=(g-S)*E,i[10]=(1-(d+m))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=uo.set(i[0],i[1],i[2]).length();const a=uo.set(i[4],i[5],i[6]).length(),o=uo.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Ai.copy(this);const l=1/r,u=1/a,h=1/o;return Ai.elements[0]*=l,Ai.elements[1]*=l,Ai.elements[2]*=l,Ai.elements[4]*=u,Ai.elements[5]*=u,Ai.elements[6]*=u,Ai.elements[8]*=h,Ai.elements[9]*=h,Ai.elements[10]*=h,t.setFromRotationMatrix(Ai),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a){const o=this.elements,c=2*r/(t-e),l=2*r/(n-i),u=(t+e)/(t-e),h=(n+i)/(n-i),d=-(a+r)/(a-r),f=-2*a*r/(a-r);return o[0]=c,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=l,o[9]=h,o[13]=0,o[2]=0,o[6]=0,o[10]=d,o[14]=f,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,i,r,a){const o=this.elements,c=1/(t-e),l=1/(n-i),u=1/(a-r),h=(t+e)*c,d=(n+i)*l,f=(a+r)*u;return o[0]=2*c,o[4]=0,o[8]=0,o[12]=-h,o[1]=0,o[5]=2*l,o[9]=0,o[13]=-d,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-f,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const uo=new $,Ai=new cn,hy=new $(0,0,0),dy=new $(1,1,1),ks=new $,Bc=new $,Zn=new $,Ip=new cn,Op=new _c;class cu{constructor(e=0,t=0,n=0,i=cu.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(An(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-An(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(An(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-An(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(An(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-An(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ip.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ip,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Op.setFromEuler(this),this.setFromQuaternion(Op,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}cu.DEFAULT_ORDER="XYZ";class Ad{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let fy=0;const Up=new $,ho=new _c,fs=new cn,Vc=new $,Ta=new $,py=new $,my=new _c,kp=new $(1,0,0),zp=new $(0,1,0),Bp=new $(0,0,1),_y={type:"added"},Vp={type:"removed"};class li extends ha{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fy++}),this.uuid=da(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=li.DEFAULT_UP.clone();const e=new $,t=new cu,n=new _c,i=new $(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new cn},normalMatrix:{value:new at}}),this.matrix=new cn,this.matrixWorld=new cn,this.matrixAutoUpdate=li.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=li.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Ad,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ho.setFromAxisAngle(e,t),this.quaternion.multiply(ho),this}rotateOnWorldAxis(e,t){return ho.setFromAxisAngle(e,t),this.quaternion.premultiply(ho),this}rotateX(e){return this.rotateOnAxis(kp,e)}rotateY(e){return this.rotateOnAxis(zp,e)}rotateZ(e){return this.rotateOnAxis(Bp,e)}translateOnAxis(e,t){return Up.copy(e).applyQuaternion(this.quaternion),this.position.add(Up.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(kp,e)}translateY(e){return this.translateOnAxis(zp,e)}translateZ(e){return this.translateOnAxis(Bp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fs.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Vc.copy(e):Vc.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ta.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fs.lookAt(Ta,Vc,this.up):fs.lookAt(Vc,Ta,this.up),this.quaternion.setFromRotationMatrix(fs),i&&(fs.extractRotation(i.matrixWorld),ho.setFromRotationMatrix(fs),this.quaternion.premultiply(ho.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(_y)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Vp)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Vp)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),fs.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fs.multiply(e.parent.matrixWorld)),e.applyMatrix4(fs),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectsByProperty(e,t);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ta,e,py),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ta,my,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++){const o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}li.DEFAULT_UP=new $(0,1,0);li.DEFAULT_MATRIX_AUTO_UPDATE=!0;li.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ci=new $,ps=new $,th=new $,ms=new $,fo=new $,po=new $,Gp=new $,nh=new $,ih=new $,sh=new $;let Gc=!1;class Li{constructor(e=new $,t=new $,n=new $){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Ci.subVectors(e,t),i.cross(Ci);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Ci.subVectors(i,t),ps.subVectors(n,t),th.subVectors(e,t);const a=Ci.dot(Ci),o=Ci.dot(ps),c=Ci.dot(th),l=ps.dot(ps),u=ps.dot(th),h=a*l-o*o;if(h===0)return r.set(-2,-1,-1);const d=1/h,f=(l*c-o*u)*d,_=(a*u-o*c)*d;return r.set(1-f-_,_,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ms),ms.x>=0&&ms.y>=0&&ms.x+ms.y<=1}static getUV(e,t,n,i,r,a,o,c){return Gc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Gc=!0),this.getInterpolation(e,t,n,i,r,a,o,c)}static getInterpolation(e,t,n,i,r,a,o,c){return this.getBarycoord(e,t,n,i,ms),c.setScalar(0),c.addScaledVector(r,ms.x),c.addScaledVector(a,ms.y),c.addScaledVector(o,ms.z),c}static isFrontFacing(e,t,n,i){return Ci.subVectors(n,t),ps.subVectors(e,t),Ci.cross(ps).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ci.subVectors(this.c,this.b),ps.subVectors(this.a,this.b),Ci.cross(ps).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Li.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Li.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return Gc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Gc=!0),Li.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return Li.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Li.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Li.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;fo.subVectors(i,n),po.subVectors(r,n),nh.subVectors(e,n);const c=fo.dot(nh),l=po.dot(nh);if(c<=0&&l<=0)return t.copy(n);ih.subVectors(e,i);const u=fo.dot(ih),h=po.dot(ih);if(u>=0&&h<=u)return t.copy(i);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(fo,a);sh.subVectors(e,r);const f=fo.dot(sh),_=po.dot(sh);if(_>=0&&f<=_)return t.copy(r);const m=f*l-c*_;if(m<=0&&l>=0&&_<=0)return o=l/(l-_),t.copy(n).addScaledVector(po,o);const g=u*_-f*h;if(g<=0&&h-u>=0&&f-_>=0)return Gp.subVectors(r,i),o=(h-u)/(h-u+(f-_)),t.copy(i).addScaledVector(Gp,o);const p=1/(g+m+d);return a=m*p,o=d*p,t.copy(n).addScaledVector(fo,a).addScaledVector(po,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let gy=0;class lu extends ha{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gy++}),this.uuid=da(),this.name="",this.type="Material",this.blending=Uo,this.side=Js,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=C_,this.blendDst=R_,this.blendEquation=bo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Nh,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qu,this.stencilZFail=qu,this.stencilZPass=qu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Uo&&(n.blending=this.blending),this.side!==Js&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const W_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ri={h:0,s:0,l:0},Wc={h:0,s:0,l:0};function rh(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class bt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Je){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Di.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Di.workingColorSpace){return this.r=e,this.g=t,this.b=n,Di.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Di.workingColorSpace){if(e=bd(e,1),t=An(t,0,1),n=An(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=rh(a,r,e+1/3),this.g=rh(a,r,e),this.b=rh(a,r,e-1/3)}return Di.toWorkingColorSpace(this,i),this}setStyle(e,t=Je){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Je){const n=W_[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zo(e.r),this.g=zo(e.g),this.b=zo(e.b),this}copyLinearToSRGB(e){return this.r=Yu(e.r),this.g=Yu(e.g),this.b=Yu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Je){return Di.fromWorkingColorSpace(fn.copy(this),e),Math.round(An(fn.r*255,0,255))*65536+Math.round(An(fn.g*255,0,255))*256+Math.round(An(fn.b*255,0,255))}getHexString(e=Je){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Di.workingColorSpace){Di.fromWorkingColorSpace(fn.copy(this),t);const n=fn.r,i=fn.g,r=fn.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(i-r)/h+(i<r?6:0);break;case i:c=(r-n)/h+2;break;case r:c=(n-i)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Di.workingColorSpace){return Di.fromWorkingColorSpace(fn.copy(this),t),e.r=fn.r,e.g=fn.g,e.b=fn.b,e}getStyle(e=Je){Di.fromWorkingColorSpace(fn.copy(this),e);const t=fn.r,n=fn.g,i=fn.b;return e!==Je?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Ri),Ri.h+=e,Ri.s+=t,Ri.l+=n,this.setHSL(Ri.h,Ri.s,Ri.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ri),e.getHSL(Wc);const n=za(Ri.h,Wc.h,t),i=za(Ri.s,Wc.s,t),r=za(Ri.l,Wc.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const fn=new bt;bt.NAMES=W_;class H_ extends lu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=P_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Vt=new $,Hc=new dt;class Ki{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Rp,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Hc.fromBufferAttribute(this,t),Hc.applyMatrix3(e),this.setXY(t,Hc.x,Hc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix3(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Aa(t,this.array)),t}setX(e,t){return this.normalized&&(t=On(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Aa(t,this.array)),t}setY(e,t){return this.normalized&&(t=On(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Aa(t,this.array)),t}setZ(e,t){return this.normalized&&(t=On(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Aa(t,this.array)),t}setW(e,t){return this.normalized&&(t=On(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=On(t,this.array),n=On(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=On(t,this.array),n=On(n,this.array),i=On(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=On(t,this.array),n=On(n,this.array),i=On(i,this.array),r=On(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Rp&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class q_ extends Ki{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class X_ extends Ki{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ji extends Ki{constructor(e,t,n){super(new Float32Array(e),t,n)}}let vy=0;const fi=new cn,oh=new li,mo=new $,Kn=new gc,Ma=new gc,Jt=new $;class or extends ha{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vy++}),this.uuid=da(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(k_(e)?X_:q_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new at().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return fi.makeRotationFromQuaternion(e),this.applyMatrix4(fi),this}rotateX(e){return fi.makeRotationX(e),this.applyMatrix4(fi),this}rotateY(e){return fi.makeRotationY(e),this.applyMatrix4(fi),this}rotateZ(e){return fi.makeRotationZ(e),this.applyMatrix4(fi),this}translate(e,t,n){return fi.makeTranslation(e,t,n),this.applyMatrix4(fi),this}scale(e,t,n){return fi.makeScale(e,t,n),this.applyMatrix4(fi),this}lookAt(e){return oh.lookAt(e),oh.updateMatrix(),this.applyMatrix4(oh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mo).negate(),this.translate(mo.x,mo.y,mo.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ji(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Kn.setFromBufferAttribute(r),this.morphTargetsRelative?(Jt.addVectors(this.boundingBox.min,Kn.min),this.boundingBox.expandByPoint(Jt),Jt.addVectors(this.boundingBox.max,Kn.max),this.boundingBox.expandByPoint(Jt)):(this.boundingBox.expandByPoint(Kn.min),this.boundingBox.expandByPoint(Kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dd);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new $,1/0);return}if(e){const n=this.boundingSphere.center;if(Kn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Ma.setFromBufferAttribute(o),this.morphTargetsRelative?(Jt.addVectors(Kn.min,Ma.min),Kn.expandByPoint(Jt),Jt.addVectors(Kn.max,Ma.max),Kn.expandByPoint(Jt)):(Kn.expandByPoint(Ma.min),Kn.expandByPoint(Ma.max))}Kn.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Jt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Jt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Jt.fromBufferAttribute(o,l),c&&(mo.fromBufferAttribute(e,l),Jt.add(mo)),i=Math.max(i,n.distanceToSquared(Jt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ki(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let w=0;w<o;w++)l[w]=new $,u[w]=new $;const h=new $,d=new $,f=new $,_=new dt,m=new dt,g=new dt,p=new $,S=new $;function y(w,F,R){h.fromArray(i,w*3),d.fromArray(i,F*3),f.fromArray(i,R*3),_.fromArray(a,w*2),m.fromArray(a,F*2),g.fromArray(a,R*2),d.sub(h),f.sub(h),m.sub(_),g.sub(_);const L=1/(m.x*g.y-g.x*m.y);isFinite(L)&&(p.copy(d).multiplyScalar(g.y).addScaledVector(f,-m.y).multiplyScalar(L),S.copy(f).multiplyScalar(m.x).addScaledVector(d,-g.x).multiplyScalar(L),l[w].add(p),l[F].add(p),l[R].add(p),u[w].add(S),u[F].add(S),u[R].add(S))}let T=this.groups;T.length===0&&(T=[{start:0,count:n.length}]);for(let w=0,F=T.length;w<F;++w){const R=T[w],L=R.start,N=R.count;for(let k=L,z=L+N;k<z;k+=3)y(n[k+0],n[k+1],n[k+2])}const v=new $,M=new $,E=new $,b=new $;function x(w){E.fromArray(r,w*3),b.copy(E);const F=l[w];v.copy(F),v.sub(E.multiplyScalar(E.dot(F))).normalize(),M.crossVectors(b,F);const L=M.dot(u[w])<0?-1:1;c[w*4]=v.x,c[w*4+1]=v.y,c[w*4+2]=v.z,c[w*4+3]=L}for(let w=0,F=T.length;w<F;++w){const R=T[w],L=R.start,N=R.count;for(let k=L,z=L+N;k<z;k+=3)x(n[k+0]),x(n[k+1]),x(n[k+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ki(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new $,r=new $,a=new $,o=new $,c=new $,l=new $,u=new $,h=new $;if(e)for(let d=0,f=e.count;d<f;d+=3){const _=e.getX(d+0),m=e.getX(d+1),g=e.getX(d+2);i.fromBufferAttribute(t,_),r.fromBufferAttribute(t,m),a.fromBufferAttribute(t,g),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),o.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),l.fromBufferAttribute(n,g),o.add(u),c.add(u),l.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(m,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Jt.fromBufferAttribute(e,t),Jt.normalize(),e.setXYZ(t,Jt.x,Jt.y,Jt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,h=o.normalized,d=new l.constructor(c.length*u);let f=0,_=0;for(let m=0,g=c.length;m<g;m++){o.isInterleavedBufferAttribute?f=c[m]*o.data.stride+o.offset:f=c[m]*u;for(let p=0;p<u;p++)d[_++]=l[f++]}return new Ki(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new or,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let u=0,h=l.length;u<h;u++){const d=l[u],f=e(d,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const f=l[h];u.push(f.toJSON(e.data))}u.length>0&&(i[c]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wp=new cn,Hi=new G_,qc=new Dd,Hp=new $,_o=new $,go=new $,vo=new $,ah=new $,Xc=new $,Yc=new dt,jc=new dt,$c=new dt,qp=new $,Xp=new $,Yp=new $,Zc=new $,Kc=new $;class xi extends li{constructor(e=new or,t=new H_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){Xc.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=o[c],h=r[c];u!==0&&(ah.fromBufferAttribute(h,e),a?Xc.addScaledVector(ah,u):Xc.addScaledVector(ah.sub(t),u))}t.add(Xc)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),qc.copy(n.boundingSphere),qc.applyMatrix4(r),Hi.copy(e.ray).recast(e.near),!(qc.containsPoint(Hi.origin)===!1&&(Hi.intersectSphere(qc,Hp)===null||Hi.origin.distanceToSquared(Hp)>(e.far-e.near)**2))&&(Wp.copy(r).invert(),Hi.copy(e.ray).applyMatrix4(Wp),!(n.boundingBox!==null&&Hi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t)))}_computeIntersections(e,t){let n;const i=this.geometry,r=this.material,a=i.index,o=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,h=i.groups,d=i.drawRange;if(a!==null)if(Array.isArray(r))for(let f=0,_=h.length;f<_;f++){const m=h[f],g=r[m.materialIndex],p=Math.max(m.start,d.start),S=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let y=p,T=S;y<T;y+=3){const v=a.getX(y),M=a.getX(y+1),E=a.getX(y+2);n=Jc(this,g,e,Hi,c,l,u,v,M,E),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const f=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=f,g=_;m<g;m+=3){const p=a.getX(m),S=a.getX(m+1),y=a.getX(m+2);n=Jc(this,r,e,Hi,c,l,u,p,S,y),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}else if(o!==void 0)if(Array.isArray(r))for(let f=0,_=h.length;f<_;f++){const m=h[f],g=r[m.materialIndex],p=Math.max(m.start,d.start),S=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let y=p,T=S;y<T;y+=3){const v=y,M=y+1,E=y+2;n=Jc(this,g,e,Hi,c,l,u,v,M,E),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const f=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let m=f,g=_;m<g;m+=3){const p=m,S=m+1,y=m+2;n=Jc(this,r,e,Hi,c,l,u,p,S,y),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}}}function xy(s,e,t,n,i,r,a,o){let c;if(e.side===zn?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,e.side===Js,o),c===null)return null;Kc.copy(o),Kc.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(Kc);return l<t.near||l>t.far?null:{distance:l,point:Kc.clone(),object:s}}function Jc(s,e,t,n,i,r,a,o,c,l){s.getVertexPosition(o,_o),s.getVertexPosition(c,go),s.getVertexPosition(l,vo);const u=xy(s,e,t,n,_o,go,vo,Zc);if(u){i&&(Yc.fromBufferAttribute(i,o),jc.fromBufferAttribute(i,c),$c.fromBufferAttribute(i,l),u.uv=Li.getInterpolation(Zc,_o,go,vo,Yc,jc,$c,new dt)),r&&(Yc.fromBufferAttribute(r,o),jc.fromBufferAttribute(r,c),$c.fromBufferAttribute(r,l),u.uv1=Li.getInterpolation(Zc,_o,go,vo,Yc,jc,$c,new dt),u.uv2=u.uv1),a&&(qp.fromBufferAttribute(a,o),Xp.fromBufferAttribute(a,c),Yp.fromBufferAttribute(a,l),u.normal=Li.getInterpolation(Zc,_o,go,vo,qp,Xp,Yp,new $),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new $,materialIndex:0};Li.getNormal(_o,go,vo,h.normal),u.face=h}return u}class vc extends or{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],u=[],h=[];let d=0,f=0;_("z","y","x",-1,-1,n,t,e,a,r,0),_("z","y","x",1,-1,n,t,-e,a,r,1),_("x","z","y",1,1,e,n,t,i,a,2),_("x","z","y",1,-1,e,n,-t,i,a,3),_("x","y","z",1,-1,e,t,n,i,r,4),_("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Ji(l,3)),this.setAttribute("normal",new Ji(u,3)),this.setAttribute("uv",new Ji(h,2));function _(m,g,p,S,y,T,v,M,E,b,x){const w=T/E,F=v/b,R=T/2,L=v/2,N=M/2,k=E+1,z=b+1;let U=0,V=0;const H=new $;for(let D=0;D<z;D++){const te=D*F-L;for(let ee=0;ee<k;ee++){const q=ee*w-R;H[m]=q*S,H[g]=te*y,H[p]=N,l.push(H.x,H.y,H.z),H[m]=0,H[g]=0,H[p]=M>0?1:-1,u.push(H.x,H.y,H.z),h.push(ee/E),h.push(1-D/b),U+=1}}for(let D=0;D<b;D++)for(let te=0;te<E;te++){const ee=d+te+k*D,q=d+te+k*(D+1),Y=d+(te+1)+k*(D+1),J=d+(te+1)+k*D;c.push(ee,q,J),c.push(q,Y,J),V+=6}o.addGroup(f,V,x),f+=V,d+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vc(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Zo(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Mn(s){const e={};for(let t=0;t<s.length;t++){const n=Zo(s[t]);for(const i in n)e[i]=n[i]}return e}function yy(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Y_(s){return s.getRenderTarget()===null?s.outputColorSpace:ns}const Sy={clone:Zo,merge:Mn};var Ty=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,My=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zi extends lu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ty,this.fragmentShader=My,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zo(e.uniforms),this.uniformsGroups=yy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class j_ extends li{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new cn,this.projectionMatrix=new cn,this.projectionMatrixInverse=new cn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class _i extends j_{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ic*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ka*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ic*2*Math.atan(Math.tan(ka*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ka*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const xo=-90,yo=1;class Ey extends li{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new _i(xo,yo,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const r=new _i(xo,yo,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const a=new _i(xo,yo,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);const o=new _i(xo,yo,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const c=new _i(xo,yo,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,1),this.add(c);const l=new _i(xo,yo,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,a,o,c,l]=this.children,u=e.getRenderTarget(),h=e.toneMapping,d=e.xr.enabled;e.toneMapping=Ms,e.xr.enabled=!1;const f=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,c),n.texture.generateMipmaps=f,e.setRenderTarget(n,5),e.render(t,l),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class $_ extends ci{constructor(e,t,n,i,r,a,o,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Yo,super(e,t,n,i,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class wy extends qr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Ba("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Lr?Je:Fr),this.texture=new $_(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:mi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new vc(5,5,5),r=new zi({name:"CubemapFromEquirect",uniforms:Zo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:zn,blending:Ys});r.uniforms.tEquirect.value=t;const a=new xi(i,r),o=t.minFilter;return t.minFilter===tc&&(t.minFilter=mi),new Ey(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const ch=new $,by=new $,Dy=new at;class vr{constructor(e=new $(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=ch.subVectors(n,t).cross(by.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ch),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Dy.getNormalMatrix(e),i=this.coplanarPoint(ch).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const mr=new Dd,Qc=new $;class Z_{constructor(e=new vr,t=new vr,n=new vr,i=new vr,r=new vr,a=new vr){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],a=n[2],o=n[3],c=n[4],l=n[5],u=n[6],h=n[7],d=n[8],f=n[9],_=n[10],m=n[11],g=n[12],p=n[13],S=n[14],y=n[15];return t[0].setComponents(o-i,h-c,m-d,y-g).normalize(),t[1].setComponents(o+i,h+c,m+d,y+g).normalize(),t[2].setComponents(o+r,h+l,m+f,y+p).normalize(),t[3].setComponents(o-r,h-l,m-f,y-p).normalize(),t[4].setComponents(o-a,h-u,m-_,y-S).normalize(),t[5].setComponents(o+a,h+u,m+_,y+S).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),mr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),mr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(mr)}intersectsSprite(e){return mr.center.set(0,0,0),mr.radius=.7071067811865476,mr.applyMatrix4(e.matrixWorld),this.intersectsSphere(mr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Qc.x=i.normal.x>0?e.max.x:e.min.x,Qc.y=i.normal.y>0?e.max.y:e.min.y,Qc.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Qc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function K_(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Ay(s,e){const t=e.isWebGL2,n=new WeakMap;function i(l,u){const h=l.array,d=l.usage,f=s.createBuffer();s.bindBuffer(u,f),s.bufferData(u,h,d),l.onUploadCallback();let _;if(h instanceof Float32Array)_=s.FLOAT;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)_=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=s.SHORT;else if(h instanceof Uint32Array)_=s.UNSIGNED_INT;else if(h instanceof Int32Array)_=s.INT;else if(h instanceof Int8Array)_=s.BYTE;else if(h instanceof Uint8Array)_=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:f,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version}}function r(l,u,h){const d=u.array,f=u.updateRange;s.bindBuffer(h,l),f.count===-1?s.bufferSubData(h,0,d):(t?s.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):s.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),u.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u&&(s.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h===void 0?n.set(l,i(l,u)):h.version<l.version&&(r(h.buffer,l,u),h.version=l.version)}return{get:a,remove:o,update:c}}class uu extends or{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,u=c+1,h=e/o,d=t/c,f=[],_=[],m=[],g=[];for(let p=0;p<u;p++){const S=p*d-a;for(let y=0;y<l;y++){const T=y*h-r;_.push(T,-S,0),m.push(0,0,1),g.push(y/o),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let S=0;S<o;S++){const y=S+l*p,T=S+l*(p+1),v=S+1+l*(p+1),M=S+1+l*p;f.push(y,T,M),f.push(T,v,M)}this.setIndex(f),this.setAttribute("position",new Ji(_,3)),this.setAttribute("normal",new Ji(m,3)),this.setAttribute("uv",new Ji(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uu(e.width,e.height,e.widthSegments,e.heightSegments)}}var Cy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ry=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Py=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Ly=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ny=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Iy="vec3 transformed = vec3( position );",Oy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Uy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ky=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,zy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,By=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Vy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Xy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Yy=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,jy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,$y=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Zy=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ky=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,eS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tS="gl_FragColor = linearToOutputTexel( gl_FragColor );",nS=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,iS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,sS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,oS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,aS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,cS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,fS=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,pS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_S=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,vS=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,xS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,SS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,TS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,MS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif`,ES=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,wS=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,bS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,DS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,AS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,CS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,RS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,PS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,LS=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,FS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,NS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,IS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,OS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,US=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kS=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,BS=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,VS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,GS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#ifdef USE_NORMALMAP_TANGENTSPACE
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,WS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,HS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,XS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,YS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,jS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,$S=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ZS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,KS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,JS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,QS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,e1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,t1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,n1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,i1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,s1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,r1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,o1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,a1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,c1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,l1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,u1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,h1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,d1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,f1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,p1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,m1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,g1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,v1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,x1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,y1=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,S1=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,T1=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,M1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const E1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,w1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,b1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,D1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,A1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,C1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,R1=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,P1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,L1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,F1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,N1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,I1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,O1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,U1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,k1=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,z1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,B1=`#define LAMBERT
varying vec3 vViewPosition;
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
}`,V1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
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
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,G1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
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
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,W1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,H1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,q1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,X1=`#define PHONG
varying vec3 vViewPosition;
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
}`,Y1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
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
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,j1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
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
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,$1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
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
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Z1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
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
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,K1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,J1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Q1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,eT=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,nT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,iT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Qe={alphamap_fragment:Cy,alphamap_pars_fragment:Ry,alphatest_fragment:Py,alphatest_pars_fragment:Ly,aomap_fragment:Fy,aomap_pars_fragment:Ny,begin_vertex:Iy,beginnormal_vertex:Oy,bsdfs:Uy,iridescence_fragment:ky,bumpmap_pars_fragment:zy,clipping_planes_fragment:By,clipping_planes_pars_fragment:Vy,clipping_planes_pars_vertex:Gy,clipping_planes_vertex:Wy,color_fragment:Hy,color_pars_fragment:qy,color_pars_vertex:Xy,color_vertex:Yy,common:jy,cube_uv_reflection_fragment:$y,defaultnormal_vertex:Zy,displacementmap_pars_vertex:Ky,displacementmap_vertex:Jy,emissivemap_fragment:Qy,emissivemap_pars_fragment:eS,encodings_fragment:tS,encodings_pars_fragment:nS,envmap_fragment:iS,envmap_common_pars_fragment:sS,envmap_pars_fragment:rS,envmap_pars_vertex:oS,envmap_physical_pars_fragment:vS,envmap_vertex:aS,fog_vertex:cS,fog_pars_vertex:lS,fog_fragment:uS,fog_pars_fragment:hS,gradientmap_pars_fragment:dS,lightmap_fragment:fS,lightmap_pars_fragment:pS,lights_lambert_fragment:mS,lights_lambert_pars_fragment:_S,lights_pars_begin:gS,lights_toon_fragment:xS,lights_toon_pars_fragment:yS,lights_phong_fragment:SS,lights_phong_pars_fragment:TS,lights_physical_fragment:MS,lights_physical_pars_fragment:ES,lights_fragment_begin:wS,lights_fragment_maps:bS,lights_fragment_end:DS,logdepthbuf_fragment:AS,logdepthbuf_pars_fragment:CS,logdepthbuf_pars_vertex:RS,logdepthbuf_vertex:PS,map_fragment:LS,map_pars_fragment:FS,map_particle_fragment:NS,map_particle_pars_fragment:IS,metalnessmap_fragment:OS,metalnessmap_pars_fragment:US,morphcolor_vertex:kS,morphnormal_vertex:zS,morphtarget_pars_vertex:BS,morphtarget_vertex:VS,normal_fragment_begin:GS,normal_fragment_maps:WS,normal_pars_fragment:HS,normal_pars_vertex:qS,normal_vertex:XS,normalmap_pars_fragment:YS,clearcoat_normal_fragment_begin:jS,clearcoat_normal_fragment_maps:$S,clearcoat_pars_fragment:ZS,iridescence_pars_fragment:KS,output_fragment:JS,packing:QS,premultiplied_alpha_fragment:e1,project_vertex:t1,dithering_fragment:n1,dithering_pars_fragment:i1,roughnessmap_fragment:s1,roughnessmap_pars_fragment:r1,shadowmap_pars_fragment:o1,shadowmap_pars_vertex:a1,shadowmap_vertex:c1,shadowmask_pars_fragment:l1,skinbase_vertex:u1,skinning_pars_vertex:h1,skinning_vertex:d1,skinnormal_vertex:f1,specularmap_fragment:p1,specularmap_pars_fragment:m1,tonemapping_fragment:_1,tonemapping_pars_fragment:g1,transmission_fragment:v1,transmission_pars_fragment:x1,uv_pars_fragment:y1,uv_pars_vertex:S1,uv_vertex:T1,worldpos_vertex:M1,background_vert:E1,background_frag:w1,backgroundCube_vert:b1,backgroundCube_frag:D1,cube_vert:A1,cube_frag:C1,depth_vert:R1,depth_frag:P1,distanceRGBA_vert:L1,distanceRGBA_frag:F1,equirect_vert:N1,equirect_frag:I1,linedashed_vert:O1,linedashed_frag:U1,meshbasic_vert:k1,meshbasic_frag:z1,meshlambert_vert:B1,meshlambert_frag:V1,meshmatcap_vert:G1,meshmatcap_frag:W1,meshnormal_vert:H1,meshnormal_frag:q1,meshphong_vert:X1,meshphong_frag:Y1,meshphysical_vert:j1,meshphysical_frag:$1,meshtoon_vert:Z1,meshtoon_frag:K1,points_vert:J1,points_frag:Q1,shadow_vert:eT,shadow_frag:tT,sprite_vert:nT,sprite_frag:iT},me={common:{diffuse:{value:new bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new bt(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaTest:{value:0}}},Yi={basic:{uniforms:Mn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:Mn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new bt(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:Mn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new bt(0)},specular:{value:new bt(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:Mn([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:Mn([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new bt(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:Mn([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:Mn([me.points,me.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:Mn([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:Mn([me.common,me.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:Mn([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:Mn([me.sprite,me.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:Mn([me.common,me.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:Mn([me.lights,me.fog,{color:{value:new bt(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};Yi.physical={uniforms:Mn([Yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new bt(0)},specularColor:{value:new bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const el={r:0,b:0,g:0};function sT(s,e,t,n,i,r,a){const o=new bt(0);let c=r===!0?0:1,l,u,h=null,d=0,f=null;function _(g,p){let S=!1,y=p.isScene===!0?p.background:null;switch(y&&y.isTexture&&(y=(p.backgroundBlurriness>0?t:e).get(y)),y===null?m(o,c):y&&y.isColor&&(m(y,1),S=!0),s.xr.getEnvironmentBlendMode()){case"opaque":S=!0;break;case"additive":n.buffers.color.setClear(0,0,0,1,a),S=!0;break;case"alpha-blend":n.buffers.color.setClear(0,0,0,0,a),S=!0;break}(s.autoClear||S)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),y&&(y.isCubeTexture||y.mapping===au)?(u===void 0&&(u=new xi(new vc(1,1,1),new zi({name:"BackgroundCubeMaterial",uniforms:Zo(Yi.backgroundCube.uniforms),vertexShader:Yi.backgroundCube.vertexShader,fragmentShader:Yi.backgroundCube.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(M,E,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=y.colorSpace!==Je,(h!==y||d!==y.version||f!==s.toneMapping)&&(u.material.needsUpdate=!0,h=y,d=y.version,f=s.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new xi(new uu(2,2),new zi({name:"BackgroundMaterial",uniforms:Zo(Yi.background.uniforms),vertexShader:Yi.background.vertexShader,fragmentShader:Yi.background.fragmentShader,side:Js,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=y.colorSpace!==Je,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,f=s.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function m(g,p){g.getRGB(el,Y_(s)),n.buffers.color.setClear(el.r,el.g,el.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(g,p=1){o.set(g),c=p,m(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(g){c=g,m(o,c)},render:_}}function rT(s,e,t,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},c=g(null);let l=c,u=!1;function h(N,k,z,U,V){let H=!1;if(a){const D=m(U,z,k);l!==D&&(l=D,f(l.object)),H=p(N,U,z,V),H&&S(N,U,z,V)}else{const D=k.wireframe===!0;(l.geometry!==U.id||l.program!==z.id||l.wireframe!==D)&&(l.geometry=U.id,l.program=z.id,l.wireframe=D,H=!0)}V!==null&&t.update(V,s.ELEMENT_ARRAY_BUFFER),(H||u)&&(u=!1,b(N,k,z,U),V!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function d(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function f(N){return n.isWebGL2?s.bindVertexArray(N):r.bindVertexArrayOES(N)}function _(N){return n.isWebGL2?s.deleteVertexArray(N):r.deleteVertexArrayOES(N)}function m(N,k,z){const U=z.wireframe===!0;let V=o[N.id];V===void 0&&(V={},o[N.id]=V);let H=V[k.id];H===void 0&&(H={},V[k.id]=H);let D=H[U];return D===void 0&&(D=g(d()),H[U]=D),D}function g(N){const k=[],z=[],U=[];for(let V=0;V<i;V++)k[V]=0,z[V]=0,U[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:z,attributeDivisors:U,object:N,attributes:{},index:null}}function p(N,k,z,U){const V=l.attributes,H=k.attributes;let D=0;const te=z.getAttributes();for(const ee in te)if(te[ee].location>=0){const Y=V[ee];let J=H[ee];if(J===void 0&&(ee==="instanceMatrix"&&N.instanceMatrix&&(J=N.instanceMatrix),ee==="instanceColor"&&N.instanceColor&&(J=N.instanceColor)),Y===void 0||Y.attribute!==J||J&&Y.data!==J.data)return!0;D++}return l.attributesNum!==D||l.index!==U}function S(N,k,z,U){const V={},H=k.attributes;let D=0;const te=z.getAttributes();for(const ee in te)if(te[ee].location>=0){let Y=H[ee];Y===void 0&&(ee==="instanceMatrix"&&N.instanceMatrix&&(Y=N.instanceMatrix),ee==="instanceColor"&&N.instanceColor&&(Y=N.instanceColor));const J={};J.attribute=Y,Y&&Y.data&&(J.data=Y.data),V[ee]=J,D++}l.attributes=V,l.attributesNum=D,l.index=U}function y(){const N=l.newAttributes;for(let k=0,z=N.length;k<z;k++)N[k]=0}function T(N){v(N,0)}function v(N,k){const z=l.newAttributes,U=l.enabledAttributes,V=l.attributeDivisors;z[N]=1,U[N]===0&&(s.enableVertexAttribArray(N),U[N]=1),V[N]!==k&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,k),V[N]=k)}function M(){const N=l.newAttributes,k=l.enabledAttributes;for(let z=0,U=k.length;z<U;z++)k[z]!==N[z]&&(s.disableVertexAttribArray(z),k[z]=0)}function E(N,k,z,U,V,H){n.isWebGL2===!0&&(z===s.INT||z===s.UNSIGNED_INT)?s.vertexAttribIPointer(N,k,z,V,H):s.vertexAttribPointer(N,k,z,U,V,H)}function b(N,k,z,U){if(n.isWebGL2===!1&&(N.isInstancedMesh||U.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const V=U.attributes,H=z.getAttributes(),D=k.defaultAttributeValues;for(const te in H){const ee=H[te];if(ee.location>=0){let q=V[te];if(q===void 0&&(te==="instanceMatrix"&&N.instanceMatrix&&(q=N.instanceMatrix),te==="instanceColor"&&N.instanceColor&&(q=N.instanceColor)),q!==void 0){const Y=q.normalized,J=q.itemSize,se=t.get(q);if(se===void 0)continue;const O=se.buffer,ie=se.type,Se=se.bytesPerElement;if(q.isInterleavedBufferAttribute){const ce=q.data,ye=ce.stride,Ve=q.offset;if(ce.isInstancedInterleavedBuffer){for(let ue=0;ue<ee.locationSize;ue++)v(ee.location+ue,ce.meshPerAttribute);N.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let ue=0;ue<ee.locationSize;ue++)T(ee.location+ue);s.bindBuffer(s.ARRAY_BUFFER,O);for(let ue=0;ue<ee.locationSize;ue++)E(ee.location+ue,J/ee.locationSize,ie,Y,ye*Se,(Ve+J/ee.locationSize*ue)*Se)}else{if(q.isInstancedBufferAttribute){for(let ce=0;ce<ee.locationSize;ce++)v(ee.location+ce,q.meshPerAttribute);N.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let ce=0;ce<ee.locationSize;ce++)T(ee.location+ce);s.bindBuffer(s.ARRAY_BUFFER,O);for(let ce=0;ce<ee.locationSize;ce++)E(ee.location+ce,J/ee.locationSize,ie,Y,J*Se,J/ee.locationSize*ce*Se)}}else if(D!==void 0){const Y=D[te];if(Y!==void 0)switch(Y.length){case 2:s.vertexAttrib2fv(ee.location,Y);break;case 3:s.vertexAttrib3fv(ee.location,Y);break;case 4:s.vertexAttrib4fv(ee.location,Y);break;default:s.vertexAttrib1fv(ee.location,Y)}}}}M()}function x(){R();for(const N in o){const k=o[N];for(const z in k){const U=k[z];for(const V in U)_(U[V].object),delete U[V];delete k[z]}delete o[N]}}function w(N){if(o[N.id]===void 0)return;const k=o[N.id];for(const z in k){const U=k[z];for(const V in U)_(U[V].object),delete U[V];delete k[z]}delete o[N.id]}function F(N){for(const k in o){const z=o[k];if(z[N.id]===void 0)continue;const U=z[N.id];for(const V in U)_(U[V].object),delete U[V];delete z[N.id]}}function R(){L(),u=!0,l!==c&&(l=c,f(l.object))}function L(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:R,resetDefaultState:L,dispose:x,releaseStatesOfGeometry:w,releaseStatesOfProgram:F,initAttributes:y,enableAttribute:T,disableUnusedAttributes:M}}function oT(s,e,t,n){const i=n.isWebGL2;let r;function a(l){r=l}function o(l,u){s.drawArrays(r,l,u),t.update(u,r,1)}function c(l,u,h){if(h===0)return;let d,f;if(i)d=s,f="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[f](r,l,u,h),t.update(u,r,h)}this.setMode=a,this.render=o,this.renderInstances=c}function aT(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const l=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_TEXTURE_SIZE),_=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),g=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),p=s.getParameter(s.MAX_VARYING_VECTORS),S=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),y=d>0,T=a||e.has("OES_texture_float"),v=y&&T,M=a?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:g,maxVaryings:p,maxFragmentUniforms:S,vertexTextures:y,floatFragmentTextures:T,floatVertexTextures:v,maxSamples:M}}function cT(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new vr,o=new at,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const _=h.clippingPlanes,m=h.clipIntersection,g=h.clipShadows,p=s.get(h);if(!i||_===null||_.length===0||r&&!g)r?u(null):l();else{const S=r?0:n,y=S*4;let T=p.clippingState||null;c.value=T,T=u(_,d,y,f);for(let v=0;v!==y;++v)T[v]=t[v];p.clippingState=T,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,_){const m=h!==null?h.length:0;let g=null;if(m!==0){if(g=c.value,_!==!0||g===null){const p=f+m*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(g===null||g.length<p)&&(g=new Float32Array(p));for(let y=0,T=f;y!==m;++y,T+=4)a.copy(h[y]).applyMatrix4(S,o),a.normal.toArray(g,T),g[T+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,g}}function lT(s){let e=new WeakMap;function t(a,o){return o===Ih?a.mapping=Yo:o===Oh&&(a.mapping=jo),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Ih||o===Oh)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new wy(c.height/2);return l.fromEquirectangularTexture(s,a),e.set(a,l),a.addEventListener("dispose",i),t(l.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class uT extends j_{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ro=4,jp=[.125,.215,.35,.446,.526,.582],Mr=20,lh=new uT,$p=new bt;let uh=null;const xr=(1+Math.sqrt(5))/2,So=1/xr,Zp=[new $(1,1,1),new $(-1,1,1),new $(1,1,-1),new $(-1,1,-1),new $(0,xr,So),new $(0,xr,-So),new $(So,0,xr),new $(-So,0,xr),new $(xr,So,0),new $(-xr,So,0)];class Kp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){uh=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=em(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(uh),e.scissorTest=!1,tl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Yo||e.mapping===jo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),uh=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:mi,minFilter:mi,generateMipmaps:!1,type:nc,format:Ui,colorSpace:ns,depthBuffer:!1},i=Jp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jp(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=hT(r)),this._blurMaterial=dT(r,e,t)}return i}_compileMaterial(e){const t=new xi(this._lodPlanes[0],e);this._renderer.compile(t,lh)}_sceneToCubeUV(e,t,n,i){const o=new _i(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor($p),u.toneMapping=Ms,u.autoClear=!1;const f=new H_({name:"PMREM.Background",side:zn,depthWrite:!1,depthTest:!1}),_=new xi(new vc,f);let m=!1;const g=e.background;g?g.isColor&&(f.color.copy(g),e.background=null,m=!0):(f.color.copy($p),m=!0);for(let p=0;p<6;p++){const S=p%3;S===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):S===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));const y=this._cubeSize;tl(i,S*y,p>2?y:0,y,y),u.setRenderTarget(i),m&&u.render(_,o),u.render(e,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Yo||e.mapping===jo;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=em()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qp());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new xi(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;tl(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,lh)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Zp[(i-1)%Zp.length];this._blur(e,i-1,i,r,a)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new xi(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Mr-1),m=r/_,g=isFinite(r)?1+Math.floor(u*m):Mr;g>Mr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Mr}`);const p=[];let S=0;for(let E=0;E<Mr;++E){const b=E/m,x=Math.exp(-b*b/2);p.push(x),E===0?S+=x:E<g&&(S+=2*x)}for(let E=0;E<p.length;E++)p[E]=p[E]/S;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:y}=this;d.dTheta.value=_,d.mipInt.value=y-n;const T=this._sizeLods[i],v=3*T*(i>y-Ro?i-y+Ro:0),M=4*(this._cubeSize-T);tl(t,v,M,3*T,2*T),c.setRenderTarget(t),c.render(h,lh)}}function hT(s){const e=[],t=[],n=[];let i=s;const r=s-Ro+1+jp.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let c=1/o;a>s-Ro?c=jp[a-s+Ro-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,_=6,m=3,g=2,p=1,S=new Float32Array(m*_*f),y=new Float32Array(g*_*f),T=new Float32Array(p*_*f);for(let M=0;M<f;M++){const E=M%3*2/3-1,b=M>2?0:-1,x=[E,b,0,E+2/3,b,0,E+2/3,b+1,0,E,b,0,E+2/3,b+1,0,E,b+1,0];S.set(x,m*_*M),y.set(d,g*_*M);const w=[M,M,M,M,M,M];T.set(w,p*_*M)}const v=new or;v.setAttribute("position",new Ki(S,m)),v.setAttribute("uv",new Ki(y,g)),v.setAttribute("faceIndex",new Ki(T,p)),e.push(v),i>Ro&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Jp(s,e,t){const n=new qr(s,e,t);return n.texture.mapping=au,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function tl(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function dT(s,e,t){const n=new Float32Array(Mr),i=new $(0,1,0);return new zi({name:"SphericalGaussianBlur",defines:{n:Mr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Cd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ys,depthTest:!1,depthWrite:!1})}function Qp(){return new zi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ys,depthTest:!1,depthWrite:!1})}function em(){return new zi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ys,depthTest:!1,depthWrite:!1})}function Cd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function fT(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Ih||c===Oh,u=c===Yo||c===jo;if(l||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new Kp(s)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(l&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new Kp(s));const d=l?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function i(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function pT(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function mT(s,e,t,n){const i={},r=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",a),delete i[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const _ in d)e.update(d[_],s.ARRAY_BUFFER);const f=h.morphAttributes;for(const _ in f){const m=f[_];for(let g=0,p=m.length;g<p;g++)e.update(m[g],s.ARRAY_BUFFER)}}function l(h){const d=[],f=h.index,_=h.attributes.position;let m=0;if(f!==null){const S=f.array;m=f.version;for(let y=0,T=S.length;y<T;y+=3){const v=S[y+0],M=S[y+1],E=S[y+2];d.push(v,M,M,E,E,v)}}else{const S=_.array;m=_.version;for(let y=0,T=S.length/3-1;y<T;y+=3){const v=y+0,M=y+1,E=y+2;d.push(v,M,M,E,E,v)}}const g=new(k_(d)?X_:q_)(d,1);g.version=m;const p=r.get(h);p&&e.remove(p),r.set(h,g)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return r.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function _T(s,e,t,n){const i=n.isWebGL2;let r;function a(d){r=d}let o,c;function l(d){o=d.type,c=d.bytesPerElement}function u(d,f){s.drawElements(r,f,o,d*c),t.update(f,r,1)}function h(d,f,_){if(_===0)return;let m,g;if(i)m=s,g="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,f,o,d*c,_),t.update(f,r,_)}this.setMode=a,this.setIndex=l,this.render=u,this.renderInstances=h}function gT(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function vT(s,e){return s[0]-e[0]}function xT(s,e){return Math.abs(e[1])-Math.abs(s[1])}function yT(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,a=new on,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,u,h){const d=l.morphTargetInfluences;if(e.isWebGL2===!0){const _=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,m=_!==void 0?_.length:0;let g=r.get(u);if(g===void 0||g.count!==m){let k=function(){L.dispose(),r.delete(u),u.removeEventListener("dispose",k)};var f=k;g!==void 0&&g.texture.dispose();const y=u.morphAttributes.position!==void 0,T=u.morphAttributes.normal!==void 0,v=u.morphAttributes.color!==void 0,M=u.morphAttributes.position||[],E=u.morphAttributes.normal||[],b=u.morphAttributes.color||[];let x=0;y===!0&&(x=1),T===!0&&(x=2),v===!0&&(x=3);let w=u.attributes.position.count*x,F=1;w>e.maxTextureSize&&(F=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const R=new Float32Array(w*F*4*m),L=new V_(R,w,F,m);L.type=wr,L.needsUpdate=!0;const N=x*4;for(let z=0;z<m;z++){const U=M[z],V=E[z],H=b[z],D=w*F*4*z;for(let te=0;te<U.count;te++){const ee=te*N;y===!0&&(a.fromBufferAttribute(U,te),R[D+ee+0]=a.x,R[D+ee+1]=a.y,R[D+ee+2]=a.z,R[D+ee+3]=0),T===!0&&(a.fromBufferAttribute(V,te),R[D+ee+4]=a.x,R[D+ee+5]=a.y,R[D+ee+6]=a.z,R[D+ee+7]=0),v===!0&&(a.fromBufferAttribute(H,te),R[D+ee+8]=a.x,R[D+ee+9]=a.y,R[D+ee+10]=a.z,R[D+ee+11]=H.itemSize===4?a.w:1)}}g={count:m,texture:L,size:new dt(w,F)},r.set(u,g),u.addEventListener("dispose",k)}let p=0;for(let y=0;y<d.length;y++)p+=d[y];const S=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(s,"morphTargetBaseInfluence",S),h.getUniforms().setValue(s,"morphTargetInfluences",d),h.getUniforms().setValue(s,"morphTargetsTexture",g.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}else{const _=d===void 0?0:d.length;let m=n[u.id];if(m===void 0||m.length!==_){m=[];for(let T=0;T<_;T++)m[T]=[T,0];n[u.id]=m}for(let T=0;T<_;T++){const v=m[T];v[0]=T,v[1]=d[T]}m.sort(xT);for(let T=0;T<8;T++)T<_&&m[T][1]?(o[T][0]=m[T][0],o[T][1]=m[T][1]):(o[T][0]=Number.MAX_SAFE_INTEGER,o[T][1]=0);o.sort(vT);const g=u.morphAttributes.position,p=u.morphAttributes.normal;let S=0;for(let T=0;T<8;T++){const v=o[T],M=v[0],E=v[1];M!==Number.MAX_SAFE_INTEGER&&E?(g&&u.getAttribute("morphTarget"+T)!==g[M]&&u.setAttribute("morphTarget"+T,g[M]),p&&u.getAttribute("morphNormal"+T)!==p[M]&&u.setAttribute("morphNormal"+T,p[M]),i[T]=E,S+=E):(g&&u.hasAttribute("morphTarget"+T)===!0&&u.deleteAttribute("morphTarget"+T),p&&u.hasAttribute("morphNormal"+T)===!0&&u.deleteAttribute("morphNormal"+T),i[T]=0)}const y=u.morphTargetsRelative?1:1-S;h.getUniforms().setValue(s,"morphTargetBaseInfluence",y),h.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function ST(s,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);return i.get(h)!==l&&(e.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER)),h}function a(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}const J_=new ci,Q_=new V_,eg=new ly,tg=new $_,tm=[],nm=[],im=new Float32Array(16),sm=new Float32Array(9),rm=new Float32Array(4);function fa(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=tm[i];if(r===void 0&&(r=new Float32Array(i),tm[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function $t(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Zt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function hu(s,e){let t=nm[e];t===void 0&&(t=new Int32Array(e),nm[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function TT(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function MT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;s.uniform2fv(this.addr,e),Zt(t,e)}}function ET(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if($t(t,e))return;s.uniform3fv(this.addr,e),Zt(t,e)}}function wT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;s.uniform4fv(this.addr,e),Zt(t,e)}}function bT(s,e){const t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Zt(t,e)}else{if($t(t,n))return;rm.set(n),s.uniformMatrix2fv(this.addr,!1,rm),Zt(t,n)}}function DT(s,e){const t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Zt(t,e)}else{if($t(t,n))return;sm.set(n),s.uniformMatrix3fv(this.addr,!1,sm),Zt(t,n)}}function AT(s,e){const t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Zt(t,e)}else{if($t(t,n))return;im.set(n),s.uniformMatrix4fv(this.addr,!1,im),Zt(t,n)}}function CT(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function RT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;s.uniform2iv(this.addr,e),Zt(t,e)}}function PT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;s.uniform3iv(this.addr,e),Zt(t,e)}}function LT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;s.uniform4iv(this.addr,e),Zt(t,e)}}function FT(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function NT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;s.uniform2uiv(this.addr,e),Zt(t,e)}}function IT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;s.uniform3uiv(this.addr,e),Zt(t,e)}}function OT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;s.uniform4uiv(this.addr,e),Zt(t,e)}}function UT(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||J_,i)}function kT(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||eg,i)}function zT(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||tg,i)}function BT(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Q_,i)}function VT(s){switch(s){case 5126:return TT;case 35664:return MT;case 35665:return ET;case 35666:return wT;case 35674:return bT;case 35675:return DT;case 35676:return AT;case 5124:case 35670:return CT;case 35667:case 35671:return RT;case 35668:case 35672:return PT;case 35669:case 35673:return LT;case 5125:return FT;case 36294:return NT;case 36295:return IT;case 36296:return OT;case 35678:case 36198:case 36298:case 36306:case 35682:return UT;case 35679:case 36299:case 36307:return kT;case 35680:case 36300:case 36308:case 36293:return zT;case 36289:case 36303:case 36311:case 36292:return BT}}function GT(s,e){s.uniform1fv(this.addr,e)}function WT(s,e){const t=fa(e,this.size,2);s.uniform2fv(this.addr,t)}function HT(s,e){const t=fa(e,this.size,3);s.uniform3fv(this.addr,t)}function qT(s,e){const t=fa(e,this.size,4);s.uniform4fv(this.addr,t)}function XT(s,e){const t=fa(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function YT(s,e){const t=fa(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function jT(s,e){const t=fa(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function $T(s,e){s.uniform1iv(this.addr,e)}function ZT(s,e){s.uniform2iv(this.addr,e)}function KT(s,e){s.uniform3iv(this.addr,e)}function JT(s,e){s.uniform4iv(this.addr,e)}function QT(s,e){s.uniform1uiv(this.addr,e)}function eM(s,e){s.uniform2uiv(this.addr,e)}function tM(s,e){s.uniform3uiv(this.addr,e)}function nM(s,e){s.uniform4uiv(this.addr,e)}function iM(s,e,t){const n=this.cache,i=e.length,r=hu(t,i);$t(n,r)||(s.uniform1iv(this.addr,r),Zt(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||J_,r[a])}function sM(s,e,t){const n=this.cache,i=e.length,r=hu(t,i);$t(n,r)||(s.uniform1iv(this.addr,r),Zt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||eg,r[a])}function rM(s,e,t){const n=this.cache,i=e.length,r=hu(t,i);$t(n,r)||(s.uniform1iv(this.addr,r),Zt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||tg,r[a])}function oM(s,e,t){const n=this.cache,i=e.length,r=hu(t,i);$t(n,r)||(s.uniform1iv(this.addr,r),Zt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Q_,r[a])}function aM(s){switch(s){case 5126:return GT;case 35664:return WT;case 35665:return HT;case 35666:return qT;case 35674:return XT;case 35675:return YT;case 35676:return jT;case 5124:case 35670:return $T;case 35667:case 35671:return ZT;case 35668:case 35672:return KT;case 35669:case 35673:return JT;case 5125:return QT;case 36294:return eM;case 36295:return tM;case 36296:return nM;case 35678:case 36198:case 36298:case 36306:case 35682:return iM;case 35679:case 36299:case 36307:return sM;case 35680:case 36300:case 36308:case 36293:return rM;case 36289:case 36303:case 36311:case 36292:return oM}}class cM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=VT(t.type)}}class lM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=aM(t.type)}}class uM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const hh=/(\w+)(\])?(\[|\.)?/g;function om(s,e){s.seq.push(e),s.map[e.id]=e}function hM(s,e,t){const n=s.name,i=n.length;for(hh.lastIndex=0;;){const r=hh.exec(n),a=hh.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){om(t,l===void 0?new cM(o,s,e):new lM(o,s,e));break}else{let h=t.map[o];h===void 0&&(h=new uM(o),om(t,h)),t=h}}}class Sl{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);hM(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function am(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}let dM=0;function fM(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function pM(s){switch(s){case ns:return["Linear","( value )"];case Je:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),["Linear","( value )"]}}function cm(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+fM(s.getShaderSource(e),a)}else return i}function mM(s,e){const t=pM(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function _M(s,e){let t;switch(e){case L_:t="Linear";break;case _x:t="Reinhard";break;case gx:t="OptimizedCineon";break;case vx:t="ACESFilmic";break;case xx:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function gM(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ca).join(`
`)}function vM(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function xM(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Ca(s){return s!==""}function lm(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function um(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const yM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vh(s){return s.replace(yM,SM)}function SM(s,e){const t=Qe[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Vh(t)}const TM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hm(s){return s.replace(TM,MM)}function MM(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function dm(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function EM(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===A_?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===jv?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===_s&&(e="SHADOWMAP_TYPE_VSM"),e}function wM(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Yo:case jo:e="ENVMAP_TYPE_CUBE";break;case au:e="ENVMAP_TYPE_CUBE_UV";break}return e}function bM(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case jo:e="ENVMAP_MODE_REFRACTION";break}return e}function DM(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case P_:e="ENVMAP_BLENDING_MULTIPLY";break;case px:e="ENVMAP_BLENDING_MIX";break;case mx:e="ENVMAP_BLENDING_ADD";break}return e}function AM(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function CM(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=EM(t),l=wM(t),u=bM(t),h=DM(t),d=AM(t),f=t.isWebGL2?"":gM(t),_=vM(r),m=i.createProgram();let g,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=[_].filter(Ca).join(`
`),g.length>0&&(g+=`
`),p=[f,_].filter(Ca).join(`
`),p.length>0&&(p+=`
`)):(g=[dm(t),"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ca).join(`
`),p=[f,dm(t),"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ms?"#define TONE_MAPPING":"",t.toneMapping!==Ms?Qe.tonemapping_pars_fragment:"",t.toneMapping!==Ms?_M("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.encodings_pars_fragment,mM("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ca).join(`
`)),a=Vh(a),a=lm(a,t),a=um(a,t),o=Vh(o),o=lm(o,t),o=um(o,t),a=hm(a),o=hm(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,g=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Pp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Pp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=S+g+a,T=S+p+o,v=am(i,i.VERTEX_SHADER,y),M=am(i,i.FRAGMENT_SHADER,T);if(i.attachShader(m,v),i.attachShader(m,M),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m),s.debug.checkShaderErrors){const x=i.getProgramInfoLog(m).trim(),w=i.getShaderInfoLog(v).trim(),F=i.getShaderInfoLog(M).trim();let R=!0,L=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(R=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,v,M);else{const N=cm(i,v,"vertex"),k=cm(i,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+x+`
`+N+`
`+k)}else x!==""?console.warn("THREE.WebGLProgram: Program Info Log:",x):(w===""||F==="")&&(L=!1);L&&(this.diagnostics={runnable:R,programLog:x,vertexShader:{log:w,prefix:g},fragmentShader:{log:F,prefix:p}})}i.deleteShader(v),i.deleteShader(M);let E;this.getUniforms=function(){return E===void 0&&(E=new Sl(i,m)),E};let b;return this.getAttributes=function(){return b===void 0&&(b=xM(i,m)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=dM++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=v,this.fragmentShader=M,this}let RM=0;class PM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new LM(e),t.set(e,n)),n}}class LM{constructor(e){this.id=RM++,this.code=e,this.usedTimes=0}}function FM(s,e,t,n,i,r,a){const o=new Ad,c=new PM,l=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return x===1?"uv1":x===2?"uv2":x===3?"uv3":"uv"}function g(x,w,F,R,L){const N=R.fog,k=L.geometry,z=x.isMeshStandardMaterial?R.environment:null,U=(x.isMeshStandardMaterial?t:e).get(x.envMap||z),V=U&&U.mapping===au?U.image.height:null,H=_[x.type];x.precision!==null&&(f=i.getMaxPrecision(x.precision),f!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));const D=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,te=D!==void 0?D.length:0;let ee=0;k.morphAttributes.position!==void 0&&(ee=1),k.morphAttributes.normal!==void 0&&(ee=2),k.morphAttributes.color!==void 0&&(ee=3);let q,Y,J,se;if(H){const rt=Yi[H];q=rt.vertexShader,Y=rt.fragmentShader}else q=x.vertexShader,Y=x.fragmentShader,c.update(x),J=c.getVertexShaderID(x),se=c.getFragmentShaderID(x);const O=s.getRenderTarget(),ie=L.isInstancedMesh===!0,Se=!!x.map,ce=!!x.matcap,ye=!!U,Ve=!!x.aoMap,ue=!!x.lightMap,Re=!!x.bumpMap,oe=!!x.normalMap,de=!!x.displacementMap,W=!!x.emissiveMap,Le=!!x.metalnessMap,xe=!!x.roughnessMap,Oe=x.clearcoat>0,Ge=x.iridescence>0,P=x.sheen>0,A=x.transmission>0,Z=Oe&&!!x.clearcoatMap,ne=Oe&&!!x.clearcoatNormalMap,ae=Oe&&!!x.clearcoatRoughnessMap,le=Ge&&!!x.iridescenceMap,Pe=Ge&&!!x.iridescenceThicknessMap,_e=P&&!!x.sheenColorMap,Q=P&&!!x.sheenRoughnessMap,Ae=!!x.specularMap,ge=!!x.specularColorMap,Ue=!!x.specularIntensityMap,ve=A&&!!x.transmissionMap,be=A&&!!x.thicknessMap,Ze=!!x.gradientMap,tt=!!x.alphaMap,ht=x.alphaTest>0,I=!!x.extensions,K=!!k.attributes.uv1,re=!!k.attributes.uv2,fe=!!k.attributes.uv3;return{isWebGL2:u,shaderID:H,shaderName:x.type,vertexShader:q,fragmentShader:Y,defines:x.defines,customVertexShaderID:J,customFragmentShaderID:se,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,instancing:ie,instancingColor:ie&&L.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:O===null?s.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:ns,map:Se,matcap:ce,envMap:ye,envMapMode:ye&&U.mapping,envMapCubeUVHeight:V,aoMap:Ve,lightMap:ue,bumpMap:Re,normalMap:oe,displacementMap:d&&de,emissiveMap:W,normalMapObjectSpace:oe&&x.normalMapType===zx,normalMapTangentSpace:oe&&x.normalMapType===kx,metalnessMap:Le,roughnessMap:xe,clearcoat:Oe,clearcoatMap:Z,clearcoatNormalMap:ne,clearcoatRoughnessMap:ae,iridescence:Ge,iridescenceMap:le,iridescenceThicknessMap:Pe,sheen:P,sheenColorMap:_e,sheenRoughnessMap:Q,specularMap:Ae,specularColorMap:ge,specularIntensityMap:Ue,transmission:A,transmissionMap:ve,thicknessMap:be,gradientMap:Ze,opaque:x.transparent===!1&&x.blending===Uo,alphaMap:tt,alphaTest:ht,combine:x.combine,mapUv:Se&&m(x.map.channel),aoMapUv:Ve&&m(x.aoMap.channel),lightMapUv:ue&&m(x.lightMap.channel),bumpMapUv:Re&&m(x.bumpMap.channel),normalMapUv:oe&&m(x.normalMap.channel),displacementMapUv:de&&m(x.displacementMap.channel),emissiveMapUv:W&&m(x.emissiveMap.channel),metalnessMapUv:Le&&m(x.metalnessMap.channel),roughnessMapUv:xe&&m(x.roughnessMap.channel),clearcoatMapUv:Z&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:ne&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:le&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:Q&&m(x.sheenRoughnessMap.channel),specularMapUv:Ae&&m(x.specularMap.channel),specularColorMapUv:ge&&m(x.specularColorMap.channel),specularIntensityMapUv:Ue&&m(x.specularIntensityMap.channel),transmissionMapUv:ve&&m(x.transmissionMap.channel),thicknessMapUv:be&&m(x.thicknessMap.channel),alphaMapUv:tt&&m(x.alphaMap.channel),vertexTangents:oe&&!!k.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,vertexUv1s:K,vertexUv2s:re,vertexUv3s:fe,pointsUvs:L.isPoints===!0&&!!k.attributes.uv&&(Se||tt),fog:!!N,useFog:x.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:L.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:ee,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&F.length>0,shadowMapType:s.shadowMap.type,toneMapping:x.toneMapped?s.toneMapping:Ms,useLegacyLights:s.useLegacyLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ys,flipSided:x.side===zn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:I&&x.extensions.derivatives===!0,extensionFragDepth:I&&x.extensions.fragDepth===!0,extensionDrawBuffers:I&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:I&&x.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function p(x){const w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(const F in x.defines)w.push(F),w.push(x.defines[F]);return x.isRawShaderMaterial===!1&&(S(w,x),y(w,x),w.push(s.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function S(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function y(x,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),x.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.useLegacyLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),x.push(o.mask)}function T(x){const w=_[x.type];let F;if(w){const R=Yi[w];F=Sy.clone(R.uniforms)}else F=x.uniforms;return F}function v(x,w){let F;for(let R=0,L=l.length;R<L;R++){const N=l[R];if(N.cacheKey===w){F=N,++F.usedTimes;break}}return F===void 0&&(F=new CM(s,w,x,r),l.push(F)),F}function M(x){if(--x.usedTimes===0){const w=l.indexOf(x);l[w]=l[l.length-1],l.pop(),x.destroy()}}function E(x){c.remove(x)}function b(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:T,acquireProgram:v,releaseProgram:M,releaseShaderCache:E,programs:l,dispose:b}}function NM(){let s=new WeakMap;function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function t(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function IM(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function fm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function pm(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(h,d,f,_,m,g){let p=s[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:_,renderOrder:h.renderOrder,z:m,group:g},s[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=_,p.renderOrder=h.renderOrder,p.z=m,p.group=g),e++,p}function o(h,d,f,_,m,g){const p=a(h,d,f,_,m,g);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function c(h,d,f,_,m,g){const p=a(h,d,f,_,m,g);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function l(h,d){t.length>1&&t.sort(h||IM),n.length>1&&n.sort(d||fm),i.length>1&&i.sort(d||fm)}function u(){for(let h=e,d=s.length;h<d;h++){const f=s[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:u,sort:l}}function OM(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new pm,s.set(n,[a])):i>=r.length?(a=new pm,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function UM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new $,color:new bt};break;case"SpotLight":t={position:new $,direction:new $,color:new bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new $,color:new bt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new $,skyColor:new bt,groundColor:new bt};break;case"RectAreaLight":t={color:new bt,position:new $,halfWidth:new $,halfHeight:new $};break}return s[e.id]=t,t}}}function kM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let zM=0;function BM(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function VM(s,e){const t=new UM,n=kM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new $);const r=new $,a=new cn,o=new cn;function c(u,h){let d=0,f=0,_=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let m=0,g=0,p=0,S=0,y=0,T=0,v=0,M=0,E=0,b=0;u.sort(BM);const x=h===!0?Math.PI:1;for(let F=0,R=u.length;F<R;F++){const L=u[F],N=L.color,k=L.intensity,z=L.distance,U=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=N.r*k*x,f+=N.g*k*x,_+=N.b*k*x;else if(L.isLightProbe)for(let V=0;V<9;V++)i.probe[V].addScaledVector(L.sh.coefficients[V],k);else if(L.isDirectionalLight){const V=t.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity*x),L.castShadow){const H=L.shadow,D=n.get(L);D.shadowBias=H.bias,D.shadowNormalBias=H.normalBias,D.shadowRadius=H.radius,D.shadowMapSize=H.mapSize,i.directionalShadow[m]=D,i.directionalShadowMap[m]=U,i.directionalShadowMatrix[m]=L.shadow.matrix,T++}i.directional[m]=V,m++}else if(L.isSpotLight){const V=t.get(L);V.position.setFromMatrixPosition(L.matrixWorld),V.color.copy(N).multiplyScalar(k*x),V.distance=z,V.coneCos=Math.cos(L.angle),V.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),V.decay=L.decay,i.spot[p]=V;const H=L.shadow;if(L.map&&(i.spotLightMap[E]=L.map,E++,H.updateMatrices(L),L.castShadow&&b++),i.spotLightMatrix[p]=H.matrix,L.castShadow){const D=n.get(L);D.shadowBias=H.bias,D.shadowNormalBias=H.normalBias,D.shadowRadius=H.radius,D.shadowMapSize=H.mapSize,i.spotShadow[p]=D,i.spotShadowMap[p]=U,M++}p++}else if(L.isRectAreaLight){const V=t.get(L);V.color.copy(N).multiplyScalar(k),V.halfWidth.set(L.width*.5,0,0),V.halfHeight.set(0,L.height*.5,0),i.rectArea[S]=V,S++}else if(L.isPointLight){const V=t.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity*x),V.distance=L.distance,V.decay=L.decay,L.castShadow){const H=L.shadow,D=n.get(L);D.shadowBias=H.bias,D.shadowNormalBias=H.normalBias,D.shadowRadius=H.radius,D.shadowMapSize=H.mapSize,D.shadowCameraNear=H.camera.near,D.shadowCameraFar=H.camera.far,i.pointShadow[g]=D,i.pointShadowMap[g]=U,i.pointShadowMatrix[g]=L.shadow.matrix,v++}i.point[g]=V,g++}else if(L.isHemisphereLight){const V=t.get(L);V.skyColor.copy(L.color).multiplyScalar(k*x),V.groundColor.copy(L.groundColor).multiplyScalar(k*x),i.hemi[y]=V,y++}}S>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=_;const w=i.hash;(w.directionalLength!==m||w.pointLength!==g||w.spotLength!==p||w.rectAreaLength!==S||w.hemiLength!==y||w.numDirectionalShadows!==T||w.numPointShadows!==v||w.numSpotShadows!==M||w.numSpotMaps!==E)&&(i.directional.length=m,i.spot.length=p,i.rectArea.length=S,i.point.length=g,i.hemi.length=y,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=M+E-b,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=b,w.directionalLength=m,w.pointLength=g,w.spotLength=p,w.rectAreaLength=S,w.hemiLength=y,w.numDirectionalShadows=T,w.numPointShadows=v,w.numSpotShadows=M,w.numSpotMaps=E,i.version=zM++)}function l(u,h){let d=0,f=0,_=0,m=0,g=0;const p=h.matrixWorldInverse;for(let S=0,y=u.length;S<y;S++){const T=u[S];if(T.isDirectionalLight){const v=i.directional[d];v.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(p),d++}else if(T.isSpotLight){const v=i.spot[_];v.position.setFromMatrixPosition(T.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(p),_++}else if(T.isRectAreaLight){const v=i.rectArea[m];v.position.setFromMatrixPosition(T.matrixWorld),v.position.applyMatrix4(p),o.identity(),a.copy(T.matrixWorld),a.premultiply(p),o.extractRotation(a),v.halfWidth.set(T.width*.5,0,0),v.halfHeight.set(0,T.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),m++}else if(T.isPointLight){const v=i.point[f];v.position.setFromMatrixPosition(T.matrixWorld),v.position.applyMatrix4(p),f++}else if(T.isHemisphereLight){const v=i.hemi[g];v.direction.setFromMatrixPosition(T.matrixWorld),v.direction.transformDirection(p),g++}}}return{setup:c,setupView:l,state:i}}function mm(s,e){const t=new VM(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function a(h){n.push(h)}function o(h){i.push(h)}function c(h){t.setup(n,h)}function l(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function GM(s,e){let t=new WeakMap;function n(r,a=0){const o=t.get(r);let c;return o===void 0?(c=new mm(s,e),t.set(r,[c])):a>=o.length?(c=new mm(s,e),o.push(c)):c=o[a],c}function i(){t=new WeakMap}return{get:n,dispose:i}}class WM extends lu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ox,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class HM extends lu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const qM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,XM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function YM(s,e,t){let n=new Z_;const i=new dt,r=new dt,a=new on,o=new WM({depthPacking:Ux}),c=new HM,l={},u=t.maxTextureSize,h={[Js]:zn,[zn]:Js,[ys]:ys},d=new zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:qM,fragmentShader:XM}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const _=new or;_.setAttribute("position",new Ki(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new xi(_,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=A_;let p=this.type;this.render=function(v,M,E){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||v.length===0)return;const b=s.getRenderTarget(),x=s.getActiveCubeFace(),w=s.getActiveMipmapLevel(),F=s.state;F.setBlending(Ys),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const R=p!==_s&&this.type===_s,L=p===_s&&this.type!==_s;for(let N=0,k=v.length;N<k;N++){const z=v[N],U=z.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;i.copy(U.mapSize);const V=U.getFrameExtents();if(i.multiply(V),r.copy(U.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/V.x),i.x=r.x*V.x,U.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/V.y),i.y=r.y*V.y,U.mapSize.y=r.y)),U.map===null||R===!0||L===!0){const D=this.type!==_s?{minFilter:Dn,magFilter:Dn}:{};U.map!==null&&U.map.dispose(),U.map=new qr(i.x,i.y,D),U.map.texture.name=z.name+".shadowMap",U.camera.updateProjectionMatrix()}s.setRenderTarget(U.map),s.clear();const H=U.getViewportCount();for(let D=0;D<H;D++){const te=U.getViewport(D);a.set(r.x*te.x,r.y*te.y,r.x*te.z,r.y*te.w),F.viewport(a),U.updateMatrices(z,D),n=U.getFrustum(),T(M,E,U.camera,z,this.type)}U.isPointLightShadow!==!0&&this.type===_s&&S(U,E),U.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(b,x,w)};function S(v,M){const E=e.update(m);d.defines.VSM_SAMPLES!==v.blurSamples&&(d.defines.VSM_SAMPLES=v.blurSamples,f.defines.VSM_SAMPLES=v.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),v.mapPass===null&&(v.mapPass=new qr(i.x,i.y)),d.uniforms.shadow_pass.value=v.map.texture,d.uniforms.resolution.value=v.mapSize,d.uniforms.radius.value=v.radius,s.setRenderTarget(v.mapPass),s.clear(),s.renderBufferDirect(M,null,E,d,m,null),f.uniforms.shadow_pass.value=v.mapPass.texture,f.uniforms.resolution.value=v.mapSize,f.uniforms.radius.value=v.radius,s.setRenderTarget(v.map),s.clear(),s.renderBufferDirect(M,null,E,f,m,null)}function y(v,M,E,b){let x=null;const w=E.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(w!==void 0)x=w;else if(x=E.isPointLight===!0?c:o,s.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const F=x.uuid,R=M.uuid;let L=l[F];L===void 0&&(L={},l[F]=L);let N=L[R];N===void 0&&(N=x.clone(),L[R]=N),x=N}if(x.visible=M.visible,x.wireframe=M.wireframe,b===_s?x.side=M.shadowSide!==null?M.shadowSide:M.side:x.side=M.shadowSide!==null?M.shadowSide:h[M.side],x.alphaMap=M.alphaMap,x.alphaTest=M.alphaTest,x.map=M.map,x.clipShadows=M.clipShadows,x.clippingPlanes=M.clippingPlanes,x.clipIntersection=M.clipIntersection,x.displacementMap=M.displacementMap,x.displacementScale=M.displacementScale,x.displacementBias=M.displacementBias,x.wireframeLinewidth=M.wireframeLinewidth,x.linewidth=M.linewidth,E.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const F=s.properties.get(x);F.light=E}return x}function T(v,M,E,b,x){if(v.visible===!1)return;if(v.layers.test(M.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&x===_s)&&(!v.frustumCulled||n.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,v.matrixWorld);const R=e.update(v),L=v.material;if(Array.isArray(L)){const N=R.groups;for(let k=0,z=N.length;k<z;k++){const U=N[k],V=L[U.materialIndex];if(V&&V.visible){const H=y(v,V,b,x);s.renderBufferDirect(E,null,R,H,v,U)}}}else if(L.visible){const N=y(v,L,b,x);s.renderBufferDirect(E,null,R,N,v,null)}}const F=v.children;for(let R=0,L=F.length;R<L;R++)T(F[R],M,E,b,x)}}function jM(s,e,t){const n=t.isWebGL2;function i(){let I=!1;const K=new on;let re=null;const fe=new on(0,0,0,0);return{setMask:function(Te){re!==Te&&!I&&(s.colorMask(Te,Te,Te,Te),re=Te)},setLocked:function(Te){I=Te},setClear:function(Te,rt,lt,_t,In){In===!0&&(Te*=_t,rt*=_t,lt*=_t),K.set(Te,rt,lt,_t),fe.equals(K)===!1&&(s.clearColor(Te,rt,lt,_t),fe.copy(K))},reset:function(){I=!1,re=null,fe.set(-1,0,0,0)}}}function r(){let I=!1,K=null,re=null,fe=null;return{setTest:function(Te){Te?O(s.DEPTH_TEST):ie(s.DEPTH_TEST)},setMask:function(Te){K!==Te&&!I&&(s.depthMask(Te),K=Te)},setFunc:function(Te){if(re!==Te){switch(Te){case ax:s.depthFunc(s.NEVER);break;case cx:s.depthFunc(s.ALWAYS);break;case lx:s.depthFunc(s.LESS);break;case Nh:s.depthFunc(s.LEQUAL);break;case ux:s.depthFunc(s.EQUAL);break;case hx:s.depthFunc(s.GEQUAL);break;case dx:s.depthFunc(s.GREATER);break;case fx:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}re=Te}},setLocked:function(Te){I=Te},setClear:function(Te){fe!==Te&&(s.clearDepth(Te),fe=Te)},reset:function(){I=!1,K=null,re=null,fe=null}}}function a(){let I=!1,K=null,re=null,fe=null,Te=null,rt=null,lt=null,_t=null,In=null;return{setTest:function(we){I||(we?O(s.STENCIL_TEST):ie(s.STENCIL_TEST))},setMask:function(we){K!==we&&!I&&(s.stencilMask(we),K=we)},setFunc:function(we,De,$e){(re!==we||fe!==De||Te!==$e)&&(s.stencilFunc(we,De,$e),re=we,fe=De,Te=$e)},setOp:function(we,De,$e){(rt!==we||lt!==De||_t!==$e)&&(s.stencilOp(we,De,$e),rt=we,lt=De,_t=$e)},setLocked:function(we){I=we},setClear:function(we){In!==we&&(s.clearStencil(we),In=we)},reset:function(){I=!1,K=null,re=null,fe=null,Te=null,rt=null,lt=null,_t=null,In=null}}}const o=new i,c=new r,l=new a,u=new WeakMap,h=new WeakMap;let d={},f={},_=new WeakMap,m=[],g=null,p=!1,S=null,y=null,T=null,v=null,M=null,E=null,b=null,x=!1,w=null,F=null,R=null,L=null,N=null;const k=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,U=0;const V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(V)[1]),z=U>=1):V.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),z=U>=2);let H=null,D={};const te=s.getParameter(s.SCISSOR_BOX),ee=s.getParameter(s.VIEWPORT),q=new on().fromArray(te),Y=new on().fromArray(ee);function J(I,K,re,fe){const Te=new Uint8Array(4),rt=s.createTexture();s.bindTexture(I,rt),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let lt=0;lt<re;lt++)n&&(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)?s.texImage3D(K,0,s.RGBA,1,1,fe,0,s.RGBA,s.UNSIGNED_BYTE,Te):s.texImage2D(K+lt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Te);return rt}const se={};se[s.TEXTURE_2D]=J(s.TEXTURE_2D,s.TEXTURE_2D,1),se[s.TEXTURE_CUBE_MAP]=J(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(se[s.TEXTURE_2D_ARRAY]=J(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),se[s.TEXTURE_3D]=J(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),O(s.DEPTH_TEST),c.setFunc(Nh),de(!1),W(ep),O(s.CULL_FACE),Re(Ys);function O(I){d[I]!==!0&&(s.enable(I),d[I]=!0)}function ie(I){d[I]!==!1&&(s.disable(I),d[I]=!1)}function Se(I,K){return f[I]!==K?(s.bindFramebuffer(I,K),f[I]=K,n&&(I===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=K),I===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=K)),!0):!1}function ce(I,K){let re=m,fe=!1;if(I)if(re=_.get(K),re===void 0&&(re=[],_.set(K,re)),I.isWebGLMultipleRenderTargets){const Te=I.texture;if(re.length!==Te.length||re[0]!==s.COLOR_ATTACHMENT0){for(let rt=0,lt=Te.length;rt<lt;rt++)re[rt]=s.COLOR_ATTACHMENT0+rt;re.length=Te.length,fe=!0}}else re[0]!==s.COLOR_ATTACHMENT0&&(re[0]=s.COLOR_ATTACHMENT0,fe=!0);else re[0]!==s.BACK&&(re[0]=s.BACK,fe=!0);fe&&(t.isWebGL2?s.drawBuffers(re):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(re))}function ye(I){return g!==I?(s.useProgram(I),g=I,!0):!1}const Ve={[bo]:s.FUNC_ADD,[Zv]:s.FUNC_SUBTRACT,[Kv]:s.FUNC_REVERSE_SUBTRACT};if(n)Ve[sp]=s.MIN,Ve[rp]=s.MAX;else{const I=e.get("EXT_blend_minmax");I!==null&&(Ve[sp]=I.MIN_EXT,Ve[rp]=I.MAX_EXT)}const ue={[Jv]:s.ZERO,[Qv]:s.ONE,[ex]:s.SRC_COLOR,[C_]:s.SRC_ALPHA,[ox]:s.SRC_ALPHA_SATURATE,[sx]:s.DST_COLOR,[nx]:s.DST_ALPHA,[tx]:s.ONE_MINUS_SRC_COLOR,[R_]:s.ONE_MINUS_SRC_ALPHA,[rx]:s.ONE_MINUS_DST_COLOR,[ix]:s.ONE_MINUS_DST_ALPHA};function Re(I,K,re,fe,Te,rt,lt,_t){if(I===Ys){p===!0&&(ie(s.BLEND),p=!1);return}if(p===!1&&(O(s.BLEND),p=!0),I!==$v){if(I!==S||_t!==x){if((y!==bo||M!==bo)&&(s.blendEquation(s.FUNC_ADD),y=bo,M=bo),_t)switch(I){case Uo:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case tp:s.blendFunc(s.ONE,s.ONE);break;case np:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ip:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Uo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case tp:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case np:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ip:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}T=null,v=null,E=null,b=null,S=I,x=_t}return}Te=Te||K,rt=rt||re,lt=lt||fe,(K!==y||Te!==M)&&(s.blendEquationSeparate(Ve[K],Ve[Te]),y=K,M=Te),(re!==T||fe!==v||rt!==E||lt!==b)&&(s.blendFuncSeparate(ue[re],ue[fe],ue[rt],ue[lt]),T=re,v=fe,E=rt,b=lt),S=I,x=!1}function oe(I,K){I.side===ys?ie(s.CULL_FACE):O(s.CULL_FACE);let re=I.side===zn;K&&(re=!re),de(re),I.blending===Uo&&I.transparent===!1?Re(Ys):Re(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.premultipliedAlpha),c.setFunc(I.depthFunc),c.setTest(I.depthTest),c.setMask(I.depthWrite),o.setMask(I.colorWrite);const fe=I.stencilWrite;l.setTest(fe),fe&&(l.setMask(I.stencilWriteMask),l.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),l.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),xe(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?O(s.SAMPLE_ALPHA_TO_COVERAGE):ie(s.SAMPLE_ALPHA_TO_COVERAGE)}function de(I){w!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),w=I)}function W(I){I!==Xv?(O(s.CULL_FACE),I!==F&&(I===ep?s.cullFace(s.BACK):I===Yv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ie(s.CULL_FACE),F=I}function Le(I){I!==R&&(z&&s.lineWidth(I),R=I)}function xe(I,K,re){I?(O(s.POLYGON_OFFSET_FILL),(L!==K||N!==re)&&(s.polygonOffset(K,re),L=K,N=re)):ie(s.POLYGON_OFFSET_FILL)}function Oe(I){I?O(s.SCISSOR_TEST):ie(s.SCISSOR_TEST)}function Ge(I){I===void 0&&(I=s.TEXTURE0+k-1),H!==I&&(s.activeTexture(I),H=I)}function P(I,K,re){re===void 0&&(H===null?re=s.TEXTURE0+k-1:re=H);let fe=D[re];fe===void 0&&(fe={type:void 0,texture:void 0},D[re]=fe),(fe.type!==I||fe.texture!==K)&&(H!==re&&(s.activeTexture(re),H=re),s.bindTexture(I,K||se[I]),fe.type=I,fe.texture=K)}function A(){const I=D[H];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Z(){try{s.compressedTexImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ne(){try{s.compressedTexImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ae(){try{s.texSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function le(){try{s.texSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Pe(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _e(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{s.texStorage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ae(){try{s.texStorage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ge(){try{s.texImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ue(){try{s.texImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ve(I){q.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),q.copy(I))}function be(I){Y.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),Y.copy(I))}function Ze(I,K){let re=h.get(K);re===void 0&&(re=new WeakMap,h.set(K,re));let fe=re.get(I);fe===void 0&&(fe=s.getUniformBlockIndex(K,I.name),re.set(I,fe))}function tt(I,K){const fe=h.get(K).get(I);u.get(K)!==fe&&(s.uniformBlockBinding(K,fe,I.__bindingPointIndex),u.set(K,fe))}function ht(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},H=null,D={},f={},_=new WeakMap,m=[],g=null,p=!1,S=null,y=null,T=null,v=null,M=null,E=null,b=null,x=!1,w=null,F=null,R=null,L=null,N=null,q.set(0,0,s.canvas.width,s.canvas.height),Y.set(0,0,s.canvas.width,s.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:O,disable:ie,bindFramebuffer:Se,drawBuffers:ce,useProgram:ye,setBlending:Re,setMaterial:oe,setFlipSided:de,setCullFace:W,setLineWidth:Le,setPolygonOffset:xe,setScissorTest:Oe,activeTexture:Ge,bindTexture:P,unbindTexture:A,compressedTexImage2D:Z,compressedTexImage3D:ne,texImage2D:ge,texImage3D:Ue,updateUBOMapping:Ze,uniformBlockBinding:tt,texStorage2D:Q,texStorage3D:Ae,texSubImage2D:ae,texSubImage3D:le,compressedTexSubImage2D:Pe,compressedTexSubImage3D:_e,scissor:ve,viewport:be,reset:ht}}function $M(s,e,t,n,i,r,a){const o=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let m;const g=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(P,A){return p?new OffscreenCanvas(P,A):Fl("canvas")}function y(P,A,Z,ne){let ae=1;if((P.width>ne||P.height>ne)&&(ae=ne/Math.max(P.width,P.height)),ae<1||A===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const le=A?U_:Math.floor,Pe=le(ae*P.width),_e=le(ae*P.height);m===void 0&&(m=S(Pe,_e));const Q=Z?S(Pe,_e):m;return Q.width=Pe,Q.height=_e,Q.getContext("2d").drawImage(P,0,0,Pe,_e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+Pe+"x"+_e+")."),Q}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function T(P){return Bh(P.width)&&Bh(P.height)}function v(P){return o?!1:P.wrapS!==Oi||P.wrapT!==Oi||P.minFilter!==Dn&&P.minFilter!==mi}function M(P,A){return P.generateMipmaps&&A&&P.minFilter!==Dn&&P.minFilter!==mi}function E(P){s.generateMipmap(P)}function b(P,A,Z,ne,ae=!1){if(o===!1)return A;if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let le=A;return A===s.RED&&(Z===s.FLOAT&&(le=s.R32F),Z===s.HALF_FLOAT&&(le=s.R16F),Z===s.UNSIGNED_BYTE&&(le=s.R8)),A===s.RG&&(Z===s.FLOAT&&(le=s.RG32F),Z===s.HALF_FLOAT&&(le=s.RG16F),Z===s.UNSIGNED_BYTE&&(le=s.RG8)),A===s.RGBA&&(Z===s.FLOAT&&(le=s.RGBA32F),Z===s.HALF_FLOAT&&(le=s.RGBA16F),Z===s.UNSIGNED_BYTE&&(le=ne===Je&&ae===!1?s.SRGB8_ALPHA8:s.RGBA8),Z===s.UNSIGNED_SHORT_4_4_4_4&&(le=s.RGBA4),Z===s.UNSIGNED_SHORT_5_5_5_1&&(le=s.RGB5_A1)),(le===s.R16F||le===s.R32F||le===s.RG16F||le===s.RG32F||le===s.RGBA16F||le===s.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function x(P,A,Z){return M(P,Z)===!0||P.isFramebufferTexture&&P.minFilter!==Dn&&P.minFilter!==mi?Math.log2(Math.max(A.width,A.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?A.mipmaps.length:1}function w(P){return P===Dn||P===op||P===zu?s.NEAREST:s.LINEAR}function F(P){const A=P.target;A.removeEventListener("dispose",F),L(A),A.isVideoTexture&&_.delete(A)}function R(P){const A=P.target;A.removeEventListener("dispose",R),k(A)}function L(P){const A=n.get(P);if(A.__webglInit===void 0)return;const Z=P.source,ne=g.get(Z);if(ne){const ae=ne[A.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&N(P),Object.keys(ne).length===0&&g.delete(Z)}n.remove(P)}function N(P){const A=n.get(P);s.deleteTexture(A.__webglTexture);const Z=P.source,ne=g.get(Z);delete ne[A.__cacheKey],a.memory.textures--}function k(P){const A=P.texture,Z=n.get(P),ne=n.get(A);if(ne.__webglTexture!==void 0&&(s.deleteTexture(ne.__webglTexture),a.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++)s.deleteFramebuffer(Z.__webglFramebuffer[ae]),Z.__webglDepthbuffer&&s.deleteRenderbuffer(Z.__webglDepthbuffer[ae]);else{if(s.deleteFramebuffer(Z.__webglFramebuffer),Z.__webglDepthbuffer&&s.deleteRenderbuffer(Z.__webglDepthbuffer),Z.__webglMultisampledFramebuffer&&s.deleteFramebuffer(Z.__webglMultisampledFramebuffer),Z.__webglColorRenderbuffer)for(let ae=0;ae<Z.__webglColorRenderbuffer.length;ae++)Z.__webglColorRenderbuffer[ae]&&s.deleteRenderbuffer(Z.__webglColorRenderbuffer[ae]);Z.__webglDepthRenderbuffer&&s.deleteRenderbuffer(Z.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let ae=0,le=A.length;ae<le;ae++){const Pe=n.get(A[ae]);Pe.__webglTexture&&(s.deleteTexture(Pe.__webglTexture),a.memory.textures--),n.remove(A[ae])}n.remove(A),n.remove(P)}let z=0;function U(){z=0}function V(){const P=z;return P>=c&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+c),z+=1,P}function H(P){const A=[];return A.push(P.wrapS),A.push(P.wrapT),A.push(P.wrapR||0),A.push(P.magFilter),A.push(P.minFilter),A.push(P.anisotropy),A.push(P.internalFormat),A.push(P.format),A.push(P.type),A.push(P.generateMipmaps),A.push(P.premultiplyAlpha),A.push(P.flipY),A.push(P.unpackAlignment),A.push(P.colorSpace),A.join()}function D(P,A){const Z=n.get(P);if(P.isVideoTexture&&Oe(P),P.isRenderTargetTexture===!1&&P.version>0&&Z.__version!==P.version){const ne=P.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ie(Z,P,A);return}}t.bindTexture(s.TEXTURE_2D,Z.__webglTexture,s.TEXTURE0+A)}function te(P,A){const Z=n.get(P);if(P.version>0&&Z.__version!==P.version){ie(Z,P,A);return}t.bindTexture(s.TEXTURE_2D_ARRAY,Z.__webglTexture,s.TEXTURE0+A)}function ee(P,A){const Z=n.get(P);if(P.version>0&&Z.__version!==P.version){ie(Z,P,A);return}t.bindTexture(s.TEXTURE_3D,Z.__webglTexture,s.TEXTURE0+A)}function q(P,A){const Z=n.get(P);if(P.version>0&&Z.__version!==P.version){Se(Z,P,A);return}t.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture,s.TEXTURE0+A)}const Y={[Uh]:s.REPEAT,[Oi]:s.CLAMP_TO_EDGE,[kh]:s.MIRRORED_REPEAT},J={[Dn]:s.NEAREST,[op]:s.NEAREST_MIPMAP_NEAREST,[zu]:s.NEAREST_MIPMAP_LINEAR,[mi]:s.LINEAR,[yx]:s.LINEAR_MIPMAP_NEAREST,[tc]:s.LINEAR_MIPMAP_LINEAR};function se(P,A,Z){if(Z?(s.texParameteri(P,s.TEXTURE_WRAP_S,Y[A.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,Y[A.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,Y[A.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,J[A.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,J[A.minFilter])):(s.texParameteri(P,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(P,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(A.wrapS!==Oi||A.wrapT!==Oi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(P,s.TEXTURE_MAG_FILTER,w(A.magFilter)),s.texParameteri(P,s.TEXTURE_MIN_FILTER,w(A.minFilter)),A.minFilter!==Dn&&A.minFilter!==mi&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===Dn||A.minFilter!==zu&&A.minFilter!==tc||A.type===wr&&e.has("OES_texture_float_linear")===!1||o===!1&&A.type===nc&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||n.get(A).__currentAnisotropy)&&(s.texParameterf(P,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,i.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy)}}function O(P,A){let Z=!1;P.__webglInit===void 0&&(P.__webglInit=!0,A.addEventListener("dispose",F));const ne=A.source;let ae=g.get(ne);ae===void 0&&(ae={},g.set(ne,ae));const le=H(A);if(le!==P.__cacheKey){ae[le]===void 0&&(ae[le]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,Z=!0),ae[le].usedTimes++;const Pe=ae[P.__cacheKey];Pe!==void 0&&(ae[P.__cacheKey].usedTimes--,Pe.usedTimes===0&&N(A)),P.__cacheKey=le,P.__webglTexture=ae[le].texture}return Z}function ie(P,A,Z){let ne=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ne=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ne=s.TEXTURE_3D);const ae=O(P,A),le=A.source;t.bindTexture(ne,P.__webglTexture,s.TEXTURE0+Z);const Pe=n.get(le);if(le.version!==Pe.__version||ae===!0){t.activeTexture(s.TEXTURE0+Z),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE);const _e=v(A)&&T(A.image)===!1;let Q=y(A.image,_e,!1,u);Q=Ge(A,Q);const Ae=T(Q)||o,ge=r.convert(A.format,A.colorSpace);let Ue=r.convert(A.type),ve=b(A.internalFormat,ge,Ue,A.colorSpace);se(ne,A,Ae);let be;const Ze=A.mipmaps,tt=o&&A.isVideoTexture!==!0,ht=Pe.__version===void 0||ae===!0,I=x(A,Q,Ae);if(A.isDepthTexture)ve=s.DEPTH_COMPONENT,o?A.type===wr?ve=s.DEPTH_COMPONENT32F:A.type===Er?ve=s.DEPTH_COMPONENT24:A.type===ko?ve=s.DEPTH24_STENCIL8:ve=s.DEPTH_COMPONENT16:A.type===wr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===Pr&&ve===s.DEPTH_COMPONENT&&A.type!==N_&&A.type!==Er&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=Er,Ue=r.convert(A.type)),A.format===$o&&ve===s.DEPTH_COMPONENT&&(ve=s.DEPTH_STENCIL,A.type!==ko&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=ko,Ue=r.convert(A.type))),ht&&(tt?t.texStorage2D(s.TEXTURE_2D,1,ve,Q.width,Q.height):t.texImage2D(s.TEXTURE_2D,0,ve,Q.width,Q.height,0,ge,Ue,null));else if(A.isDataTexture)if(Ze.length>0&&Ae){tt&&ht&&t.texStorage2D(s.TEXTURE_2D,I,ve,Ze[0].width,Ze[0].height);for(let K=0,re=Ze.length;K<re;K++)be=Ze[K],tt?t.texSubImage2D(s.TEXTURE_2D,K,0,0,be.width,be.height,ge,Ue,be.data):t.texImage2D(s.TEXTURE_2D,K,ve,be.width,be.height,0,ge,Ue,be.data);A.generateMipmaps=!1}else tt?(ht&&t.texStorage2D(s.TEXTURE_2D,I,ve,Q.width,Q.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,Q.width,Q.height,ge,Ue,Q.data)):t.texImage2D(s.TEXTURE_2D,0,ve,Q.width,Q.height,0,ge,Ue,Q.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){tt&&ht&&t.texStorage3D(s.TEXTURE_2D_ARRAY,I,ve,Ze[0].width,Ze[0].height,Q.depth);for(let K=0,re=Ze.length;K<re;K++)be=Ze[K],A.format!==Ui?ge!==null?tt?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,0,be.width,be.height,Q.depth,ge,be.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,K,ve,be.width,be.height,Q.depth,0,be.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?t.texSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,0,be.width,be.height,Q.depth,ge,Ue,be.data):t.texImage3D(s.TEXTURE_2D_ARRAY,K,ve,be.width,be.height,Q.depth,0,ge,Ue,be.data)}else{tt&&ht&&t.texStorage2D(s.TEXTURE_2D,I,ve,Ze[0].width,Ze[0].height);for(let K=0,re=Ze.length;K<re;K++)be=Ze[K],A.format!==Ui?ge!==null?tt?t.compressedTexSubImage2D(s.TEXTURE_2D,K,0,0,be.width,be.height,ge,be.data):t.compressedTexImage2D(s.TEXTURE_2D,K,ve,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?t.texSubImage2D(s.TEXTURE_2D,K,0,0,be.width,be.height,ge,Ue,be.data):t.texImage2D(s.TEXTURE_2D,K,ve,be.width,be.height,0,ge,Ue,be.data)}else if(A.isDataArrayTexture)tt?(ht&&t.texStorage3D(s.TEXTURE_2D_ARRAY,I,ve,Q.width,Q.height,Q.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ge,Ue,Q.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,ve,Q.width,Q.height,Q.depth,0,ge,Ue,Q.data);else if(A.isData3DTexture)tt?(ht&&t.texStorage3D(s.TEXTURE_3D,I,ve,Q.width,Q.height,Q.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ge,Ue,Q.data)):t.texImage3D(s.TEXTURE_3D,0,ve,Q.width,Q.height,Q.depth,0,ge,Ue,Q.data);else if(A.isFramebufferTexture){if(ht)if(tt)t.texStorage2D(s.TEXTURE_2D,I,ve,Q.width,Q.height);else{let K=Q.width,re=Q.height;for(let fe=0;fe<I;fe++)t.texImage2D(s.TEXTURE_2D,fe,ve,K,re,0,ge,Ue,null),K>>=1,re>>=1}}else if(Ze.length>0&&Ae){tt&&ht&&t.texStorage2D(s.TEXTURE_2D,I,ve,Ze[0].width,Ze[0].height);for(let K=0,re=Ze.length;K<re;K++)be=Ze[K],tt?t.texSubImage2D(s.TEXTURE_2D,K,0,0,ge,Ue,be):t.texImage2D(s.TEXTURE_2D,K,ve,ge,Ue,be);A.generateMipmaps=!1}else tt?(ht&&t.texStorage2D(s.TEXTURE_2D,I,ve,Q.width,Q.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,ge,Ue,Q)):t.texImage2D(s.TEXTURE_2D,0,ve,ge,Ue,Q);M(A,Ae)&&E(ne),Pe.__version=le.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function Se(P,A,Z){if(A.image.length!==6)return;const ne=O(P,A),ae=A.source;t.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+Z);const le=n.get(ae);if(ae.version!==le.__version||ne===!0){t.activeTexture(s.TEXTURE0+Z),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE);const Pe=A.isCompressedTexture||A.image[0].isCompressedTexture,_e=A.image[0]&&A.image[0].isDataTexture,Q=[];for(let K=0;K<6;K++)!Pe&&!_e?Q[K]=y(A.image[K],!1,!0,l):Q[K]=_e?A.image[K].image:A.image[K],Q[K]=Ge(A,Q[K]);const Ae=Q[0],ge=T(Ae)||o,Ue=r.convert(A.format,A.colorSpace),ve=r.convert(A.type),be=b(A.internalFormat,Ue,ve,A.colorSpace),Ze=o&&A.isVideoTexture!==!0,tt=le.__version===void 0||ne===!0;let ht=x(A,Ae,ge);se(s.TEXTURE_CUBE_MAP,A,ge);let I;if(Pe){Ze&&tt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ht,be,Ae.width,Ae.height);for(let K=0;K<6;K++){I=Q[K].mipmaps;for(let re=0;re<I.length;re++){const fe=I[re];A.format!==Ui?Ue!==null?Ze?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,re,0,0,fe.width,fe.height,Ue,fe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,re,be,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ze?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,re,0,0,fe.width,fe.height,Ue,ve,fe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,re,be,fe.width,fe.height,0,Ue,ve,fe.data)}}}else{I=A.mipmaps,Ze&&tt&&(I.length>0&&ht++,t.texStorage2D(s.TEXTURE_CUBE_MAP,ht,be,Q[0].width,Q[0].height));for(let K=0;K<6;K++)if(_e){Ze?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Q[K].width,Q[K].height,Ue,ve,Q[K].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,be,Q[K].width,Q[K].height,0,Ue,ve,Q[K].data);for(let re=0;re<I.length;re++){const Te=I[re].image[K].image;Ze?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,re+1,0,0,Te.width,Te.height,Ue,ve,Te.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,re+1,be,Te.width,Te.height,0,Ue,ve,Te.data)}}else{Ze?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Ue,ve,Q[K]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,be,Ue,ve,Q[K]);for(let re=0;re<I.length;re++){const fe=I[re];Ze?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,re+1,0,0,Ue,ve,fe.image[K]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,re+1,be,Ue,ve,fe.image[K])}}}M(A,ge)&&E(s.TEXTURE_CUBE_MAP),le.__version=ae.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function ce(P,A,Z,ne,ae){const le=r.convert(Z.format,Z.colorSpace),Pe=r.convert(Z.type),_e=b(Z.internalFormat,le,Pe,Z.colorSpace);n.get(A).__hasExternalTextures||(ae===s.TEXTURE_3D||ae===s.TEXTURE_2D_ARRAY?t.texImage3D(ae,0,_e,A.width,A.height,A.depth,0,le,Pe,null):t.texImage2D(ae,0,_e,A.width,A.height,0,le,Pe,null)),t.bindFramebuffer(s.FRAMEBUFFER,P),xe(A)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ne,ae,n.get(Z).__webglTexture,0,Le(A)):(ae===s.TEXTURE_2D||ae>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ne,ae,n.get(Z).__webglTexture,0),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ye(P,A,Z){if(s.bindRenderbuffer(s.RENDERBUFFER,P),A.depthBuffer&&!A.stencilBuffer){let ne=s.DEPTH_COMPONENT16;if(Z||xe(A)){const ae=A.depthTexture;ae&&ae.isDepthTexture&&(ae.type===wr?ne=s.DEPTH_COMPONENT32F:ae.type===Er&&(ne=s.DEPTH_COMPONENT24));const le=Le(A);xe(A)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,le,ne,A.width,A.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,le,ne,A.width,A.height)}else s.renderbufferStorage(s.RENDERBUFFER,ne,A.width,A.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,P)}else if(A.depthBuffer&&A.stencilBuffer){const ne=Le(A);Z&&xe(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ne,s.DEPTH24_STENCIL8,A.width,A.height):xe(A)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ne,s.DEPTH24_STENCIL8,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,P)}else{const ne=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let ae=0;ae<ne.length;ae++){const le=ne[ae],Pe=r.convert(le.format,le.colorSpace),_e=r.convert(le.type),Q=b(le.internalFormat,Pe,_e,le.colorSpace),Ae=Le(A);Z&&xe(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ae,Q,A.width,A.height):xe(A)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ae,Q,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,Q,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ve(P,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,P),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),D(A.depthTexture,0);const ne=n.get(A.depthTexture).__webglTexture,ae=Le(A);if(A.depthTexture.format===Pr)xe(A)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ne,0,ae):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ne,0);else if(A.depthTexture.format===$o)xe(A)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ne,0,ae):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function ue(P){const A=n.get(P),Z=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!A.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");Ve(A.__webglFramebuffer,P)}else if(Z){A.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[ne]),A.__webglDepthbuffer[ne]=s.createRenderbuffer(),ye(A.__webglDepthbuffer[ne],P,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=s.createRenderbuffer(),ye(A.__webglDepthbuffer,P,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function Re(P,A,Z){const ne=n.get(P);A!==void 0&&ce(ne.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D),Z!==void 0&&ue(P)}function oe(P){const A=P.texture,Z=n.get(P),ne=n.get(A);P.addEventListener("dispose",R),P.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=s.createTexture()),ne.__version=A.version,a.memory.textures++);const ae=P.isWebGLCubeRenderTarget===!0,le=P.isWebGLMultipleRenderTargets===!0,Pe=T(P)||o;if(ae){Z.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)Z.__webglFramebuffer[_e]=s.createFramebuffer()}else{if(Z.__webglFramebuffer=s.createFramebuffer(),le)if(i.drawBuffers){const _e=P.texture;for(let Q=0,Ae=_e.length;Q<Ae;Q++){const ge=n.get(_e[Q]);ge.__webglTexture===void 0&&(ge.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&P.samples>0&&xe(P)===!1){const _e=le?A:[A];Z.__webglMultisampledFramebuffer=s.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let Q=0;Q<_e.length;Q++){const Ae=_e[Q];Z.__webglColorRenderbuffer[Q]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Z.__webglColorRenderbuffer[Q]);const ge=r.convert(Ae.format,Ae.colorSpace),Ue=r.convert(Ae.type),ve=b(Ae.internalFormat,ge,Ue,Ae.colorSpace,P.isXRRenderTarget===!0),be=Le(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,be,ve,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Q,s.RENDERBUFFER,Z.__webglColorRenderbuffer[Q])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(Z.__webglDepthRenderbuffer=s.createRenderbuffer(),ye(Z.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ae){t.bindTexture(s.TEXTURE_CUBE_MAP,ne.__webglTexture),se(s.TEXTURE_CUBE_MAP,A,Pe);for(let _e=0;_e<6;_e++)ce(Z.__webglFramebuffer[_e],P,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+_e);M(A,Pe)&&E(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(le){const _e=P.texture;for(let Q=0,Ae=_e.length;Q<Ae;Q++){const ge=_e[Q],Ue=n.get(ge);t.bindTexture(s.TEXTURE_2D,Ue.__webglTexture),se(s.TEXTURE_2D,ge,Pe),ce(Z.__webglFramebuffer,P,ge,s.COLOR_ATTACHMENT0+Q,s.TEXTURE_2D),M(ge,Pe)&&E(s.TEXTURE_2D)}t.unbindTexture()}else{let _e=s.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(o?_e=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(_e,ne.__webglTexture),se(_e,A,Pe),ce(Z.__webglFramebuffer,P,A,s.COLOR_ATTACHMENT0,_e),M(A,Pe)&&E(_e),t.unbindTexture()}P.depthBuffer&&ue(P)}function de(P){const A=T(P)||o,Z=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let ne=0,ae=Z.length;ne<ae;ne++){const le=Z[ne];if(M(le,A)){const Pe=P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,_e=n.get(le).__webglTexture;t.bindTexture(Pe,_e),E(Pe),t.unbindTexture()}}}function W(P){if(o&&P.samples>0&&xe(P)===!1){const A=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],Z=P.width,ne=P.height;let ae=s.COLOR_BUFFER_BIT;const le=[],Pe=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,_e=n.get(P),Q=P.isWebGLMultipleRenderTargets===!0;if(Q)for(let Ae=0;Ae<A.length;Ae++)t.bindFramebuffer(s.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,_e.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let Ae=0;Ae<A.length;Ae++){le.push(s.COLOR_ATTACHMENT0+Ae),P.depthBuffer&&le.push(Pe);const ge=_e.__ignoreDepthValues!==void 0?_e.__ignoreDepthValues:!1;if(ge===!1&&(P.depthBuffer&&(ae|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&(ae|=s.STENCIL_BUFFER_BIT)),Q&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,_e.__webglColorRenderbuffer[Ae]),ge===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[Pe]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[Pe])),Q){const Ue=n.get(A[Ae]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ue,0)}s.blitFramebuffer(0,0,Z,ne,0,0,Z,ne,ae,s.NEAREST),f&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,le)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Q)for(let Ae=0;Ae<A.length;Ae++){t.bindFramebuffer(s.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.RENDERBUFFER,_e.__webglColorRenderbuffer[Ae]);const ge=n.get(A[Ae]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,_e.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.TEXTURE_2D,ge,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}}function Le(P){return Math.min(h,P.samples)}function xe(P){const A=n.get(P);return o&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Oe(P){const A=a.render.frame;_.get(P)!==A&&(_.set(P,A),P.update())}function Ge(P,A){const Z=P.colorSpace,ne=P.format,ae=P.type;return P.isCompressedTexture===!0||P.format===zh||Z!==ns&&Z!==Fr&&(Z===Je?o===!1?e.has("EXT_sRGB")===!0&&ne===Ui?(P.format=zh,P.minFilter=mi,P.generateMipmaps=!1):A=z_.sRGBToLinear(A):(ne!==Ui||ae!==Hr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),A}this.allocateTextureUnit=V,this.resetTextureUnits=U,this.setTexture2D=D,this.setTexture2DArray=te,this.setTexture3D=ee,this.setTextureCube=q,this.rebindTextures=Re,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=de,this.updateMultisampleRenderTarget=W,this.setupDepthRenderbuffer=ue,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=xe}function ZM(s,e,t){const n=t.isWebGL2;function i(r,a=Fr){let o;if(r===Hr)return s.UNSIGNED_BYTE;if(r===Ex)return s.UNSIGNED_SHORT_4_4_4_4;if(r===wx)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Sx)return s.BYTE;if(r===Tx)return s.SHORT;if(r===N_)return s.UNSIGNED_SHORT;if(r===Mx)return s.INT;if(r===Er)return s.UNSIGNED_INT;if(r===wr)return s.FLOAT;if(r===nc)return n?s.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===bx)return s.ALPHA;if(r===Ui)return s.RGBA;if(r===Dx)return s.LUMINANCE;if(r===Ax)return s.LUMINANCE_ALPHA;if(r===Pr)return s.DEPTH_COMPONENT;if(r===$o)return s.DEPTH_STENCIL;if(r===zh)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Cx)return s.RED;if(r===Rx)return s.RED_INTEGER;if(r===Px)return s.RG;if(r===Lx)return s.RG_INTEGER;if(r===Fx)return s.RGBA_INTEGER;if(r===Bu||r===Vu||r===Gu||r===Wu)if(a===Je)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Bu)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Vu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Gu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Wu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Bu)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Vu)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Gu)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Wu)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ap||r===cp||r===lp||r===up)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===ap)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===cp)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===lp)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===up)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Nx)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===hp||r===dp)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===hp)return a===Je?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===dp)return a===Je?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===fp||r===pp||r===mp||r===_p||r===gp||r===vp||r===xp||r===yp||r===Sp||r===Tp||r===Mp||r===Ep||r===wp||r===bp)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===fp)return a===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===pp)return a===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===mp)return a===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===_p)return a===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===gp)return a===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===vp)return a===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===xp)return a===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===yp)return a===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Sp)return a===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Tp)return a===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Mp)return a===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ep)return a===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===wp)return a===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===bp)return a===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Hu)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Hu)return a===Je?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===Ix||r===Dp||r===Ap||r===Cp)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===Hu)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Dp)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ap)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Cp)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ko?n?s.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class KM extends _i{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class nl extends li{constructor(){super(),this.isGroup=!0,this.type="Group"}}const JM={type:"move"};class dh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new nl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new nl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new nl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const m of e.hand.values()){const g=t.getJointPose(m,n),p=this._getHandJoint(l,m);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,_=.005;l.inputState.pinching&&d>f+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(JM)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new nl;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class QM extends ci{constructor(e,t,n,i,r,a,o,c,l,u){if(u=u!==void 0?u:Pr,u!==Pr&&u!==$o)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Pr&&(n=Er),n===void 0&&u===$o&&(n=ko),super(null,i,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Dn,this.minFilter=c!==void 0?c:Dn,this.flipY=!1,this.generateMipmaps=!1}}class eE extends ha{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,_=null;const m=t.getContextAttributes();let g=null,p=null;const S=[],y=[],T=new Set,v=new Map,M=new _i;M.layers.enable(1),M.viewport=new on;const E=new _i;E.layers.enable(2),E.viewport=new on;const b=[M,E],x=new KM;x.layers.enable(1),x.layers.enable(2);let w=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Y=S[q];return Y===void 0&&(Y=new dh,S[q]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(q){let Y=S[q];return Y===void 0&&(Y=new dh,S[q]=Y),Y.getGripSpace()},this.getHand=function(q){let Y=S[q];return Y===void 0&&(Y=new dh,S[q]=Y),Y.getHandSpace()};function R(q){const Y=y.indexOf(q.inputSource);if(Y===-1)return;const J=S[Y];J!==void 0&&(J.update(q.inputSource,q.frame,l||a),J.dispatchEvent({type:q.type,data:q.inputSource}))}function L(){i.removeEventListener("select",R),i.removeEventListener("selectstart",R),i.removeEventListener("selectend",R),i.removeEventListener("squeeze",R),i.removeEventListener("squeezestart",R),i.removeEventListener("squeezeend",R),i.removeEventListener("end",L),i.removeEventListener("inputsourceschange",N);for(let q=0;q<S.length;q++){const Y=y[q];Y!==null&&(y[q]=null,S[q].disconnect(Y))}w=null,F=null,e.setRenderTarget(g),f=null,d=null,h=null,i=null,p=null,ee.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(g=e.getRenderTarget(),i.addEventListener("select",R),i.addEventListener("selectstart",R),i.addEventListener("selectend",R),i.addEventListener("squeeze",R),i.addEventListener("squeezestart",R),i.addEventListener("squeezeend",R),i.addEventListener("end",L),i.addEventListener("inputsourceschange",N),m.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Y={antialias:i.renderState.layers===void 0?m.antialias:!0,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,Y),i.updateRenderState({baseLayer:f}),p=new qr(f.framebufferWidth,f.framebufferHeight,{format:Ui,type:Hr,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let Y=null,J=null,se=null;m.depth&&(se=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Y=m.stencil?$o:Pr,J=m.stencil?ko:Er);const O={colorFormat:t.RGBA8,depthFormat:se,scaleFactor:r};h=new XRWebGLBinding(i,t),d=h.createProjectionLayer(O),i.updateRenderState({layers:[d]}),p=new qr(d.textureWidth,d.textureHeight,{format:Ui,type:Hr,depthTexture:new QM(d.textureWidth,d.textureHeight,J,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0});const ie=e.properties.get(p);ie.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),ee.setContext(i),ee.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function N(q){for(let Y=0;Y<q.removed.length;Y++){const J=q.removed[Y],se=y.indexOf(J);se>=0&&(y[se]=null,S[se].disconnect(J))}for(let Y=0;Y<q.added.length;Y++){const J=q.added[Y];let se=y.indexOf(J);if(se===-1){for(let ie=0;ie<S.length;ie++)if(ie>=y.length){y.push(J),se=ie;break}else if(y[ie]===null){y[ie]=J,se=ie;break}if(se===-1)break}const O=S[se];O&&O.connect(J)}}const k=new $,z=new $;function U(q,Y,J){k.setFromMatrixPosition(Y.matrixWorld),z.setFromMatrixPosition(J.matrixWorld);const se=k.distanceTo(z),O=Y.projectionMatrix.elements,ie=J.projectionMatrix.elements,Se=O[14]/(O[10]-1),ce=O[14]/(O[10]+1),ye=(O[9]+1)/O[5],Ve=(O[9]-1)/O[5],ue=(O[8]-1)/O[0],Re=(ie[8]+1)/ie[0],oe=Se*ue,de=Se*Re,W=se/(-ue+Re),Le=W*-ue;Y.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Le),q.translateZ(W),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const xe=Se+W,Oe=ce+W,Ge=oe-Le,P=de+(se-Le),A=ye*ce/Oe*xe,Z=Ve*ce/Oe*xe;q.projectionMatrix.makePerspective(Ge,P,A,Z,xe,Oe),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function V(q,Y){Y===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Y.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;x.near=E.near=M.near=q.near,x.far=E.far=M.far=q.far,(w!==x.near||F!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),w=x.near,F=x.far);const Y=q.parent,J=x.cameras;V(x,Y);for(let se=0;se<J.length;se++)V(J[se],Y);J.length===2?U(x,M,E):x.projectionMatrix.copy(M.projectionMatrix),H(q,x,Y)};function H(q,Y,J){J===null?q.matrix.copy(Y.matrixWorld):(q.matrix.copy(J.matrixWorld),q.matrix.invert(),q.matrix.multiply(Y.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0);const se=q.children;for(let O=0,ie=se.length;O<ie;O++)se[O].updateMatrixWorld(!0);q.projectionMatrix.copy(Y.projectionMatrix),q.projectionMatrixInverse.copy(Y.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=ic*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(q){c=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.getPlanes=function(){return T};let D=null;function te(q,Y){if(u=Y.getViewerPose(l||a),_=Y,u!==null){const J=u.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let se=!1;J.length!==x.cameras.length&&(x.cameras.length=0,se=!0);for(let O=0;O<J.length;O++){const ie=J[O];let Se=null;if(f!==null)Se=f.getViewport(ie);else{const ye=h.getViewSubImage(d,ie);Se=ye.viewport,O===0&&(e.setRenderTargetTextures(p,ye.colorTexture,d.ignoreDepthValues?void 0:ye.depthStencilTexture),e.setRenderTarget(p))}let ce=b[O];ce===void 0&&(ce=new _i,ce.layers.enable(O),ce.viewport=new on,b[O]=ce),ce.matrix.fromArray(ie.transform.matrix),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.projectionMatrix.fromArray(ie.projectionMatrix),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert(),ce.viewport.set(Se.x,Se.y,Se.width,Se.height),O===0&&(x.matrix.copy(ce.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),se===!0&&x.cameras.push(ce)}}for(let J=0;J<S.length;J++){const se=y[J],O=S[J];se!==null&&O!==void 0&&O.update(se,Y,l||a)}if(D&&D(q,Y),Y.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:Y.detectedPlanes});let J=null;for(const se of T)Y.detectedPlanes.has(se)||(J===null&&(J=[]),J.push(se));if(J!==null)for(const se of J)T.delete(se),v.delete(se),n.dispatchEvent({type:"planeremoved",data:se});for(const se of Y.detectedPlanes)if(!T.has(se))T.add(se),v.set(se,Y.lastChangedTime),n.dispatchEvent({type:"planeadded",data:se});else{const O=v.get(se);se.lastChangedTime>O&&(v.set(se,se.lastChangedTime),n.dispatchEvent({type:"planechanged",data:se}))}}_=null}const ee=new K_;ee.setAnimationLoop(te),this.setAnimationLoop=function(q){D=q},this.dispose=function(){}}}function tE(s,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Y_(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,S,y,T){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),h(g,p)):p.isMeshPhongMaterial?(r(g,p),u(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,T)):p.isMeshMatcapMaterial?(r(g,p),_(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),m(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?c(g,p,S,y):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===zn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===zn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const S=e.get(p).envMap;if(S&&(g.envMap.value=S,g.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap){g.lightMap.value=p.lightMap;const y=s.useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=p.lightMapIntensity*y,t(p.lightMap,g.lightMapTransform)}p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,S,y){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*S,g.scale.value=y*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),e.get(p).envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,S){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===zn&&g.clearcoatNormalScale.value.negate())),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=S.texture,g.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,p){p.matcap&&(g.matcap.value=p.matcap)}function m(g,p){const S=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(S.matrixWorld),g.nearDistance.value=S.shadow.camera.near,g.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function nE(s,e,t,n){let i={},r={},a=[];const o=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(S,y){const T=y.program;n.uniformBlockBinding(S,T)}function l(S,y){let T=i[S.id];T===void 0&&(_(S),T=u(S),i[S.id]=T,S.addEventListener("dispose",g));const v=y.program;n.updateUBOMapping(S,v);const M=e.render.frame;r[S.id]!==M&&(d(S),r[S.id]=M)}function u(S){const y=h();S.__bindingPointIndex=y;const T=s.createBuffer(),v=S.__size,M=S.usage;return s.bindBuffer(s.UNIFORM_BUFFER,T),s.bufferData(s.UNIFORM_BUFFER,v,M),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,T),T}function h(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const y=i[S.id],T=S.uniforms,v=S.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let M=0,E=T.length;M<E;M++){const b=T[M];if(f(b,M,v)===!0){const x=b.__offset,w=Array.isArray(b.value)?b.value:[b.value];let F=0;for(let R=0;R<w.length;R++){const L=w[R],N=m(L);typeof L=="number"?(b.__data[0]=L,s.bufferSubData(s.UNIFORM_BUFFER,x+F,b.__data)):L.isMatrix3?(b.__data[0]=L.elements[0],b.__data[1]=L.elements[1],b.__data[2]=L.elements[2],b.__data[3]=L.elements[0],b.__data[4]=L.elements[3],b.__data[5]=L.elements[4],b.__data[6]=L.elements[5],b.__data[7]=L.elements[0],b.__data[8]=L.elements[6],b.__data[9]=L.elements[7],b.__data[10]=L.elements[8],b.__data[11]=L.elements[0]):(L.toArray(b.__data,F),F+=N.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,x,b.__data)}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(S,y,T){const v=S.value;if(T[y]===void 0){if(typeof v=="number")T[y]=v;else{const M=Array.isArray(v)?v:[v],E=[];for(let b=0;b<M.length;b++)E.push(M[b].clone());T[y]=E}return!0}else if(typeof v=="number"){if(T[y]!==v)return T[y]=v,!0}else{const M=Array.isArray(T[y])?T[y]:[T[y]],E=Array.isArray(v)?v:[v];for(let b=0;b<M.length;b++){const x=M[b];if(x.equals(E[b])===!1)return x.copy(E[b]),!0}}return!1}function _(S){const y=S.uniforms;let T=0;const v=16;let M=0;for(let E=0,b=y.length;E<b;E++){const x=y[E],w={boundary:0,storage:0},F=Array.isArray(x.value)?x.value:[x.value];for(let R=0,L=F.length;R<L;R++){const N=F[R],k=m(N);w.boundary+=k.boundary,w.storage+=k.storage}if(x.__data=new Float32Array(w.storage/Float32Array.BYTES_PER_ELEMENT),x.__offset=T,E>0){M=T%v;const R=v-M;M!==0&&R-w.boundary<0&&(T+=v-M,x.__offset=T)}T+=w.storage}return M=T%v,M>0&&(T+=v-M),S.__size=T,S.__cache={},this}function m(S){const y={boundary:0,storage:0};return typeof S=="number"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function g(S){const y=S.target;y.removeEventListener("dispose",g);const T=a.indexOf(y.__bindingPointIndex);a.splice(T,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function p(){for(const S in i)s.deleteBuffer(i[S]);a=[],i={},r={}}return{bind:c,update:l,dispose:p}}function iE(){const s=Fl("canvas");return s.style.display="block",s}class ng{constructor(e={}){const{canvas:t=iE(),context:n=null,depth:i=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;let f=null,_=null;const m=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Je,this.useLegacyLights=!0,this.toneMapping=Ms,this.toneMappingExposure=1;const p=this;let S=!1,y=0,T=0,v=null,M=-1,E=null;const b=new on,x=new on;let w=null,F=t.width,R=t.height,L=1,N=null,k=null;const z=new on(0,0,F,R),U=new on(0,0,F,R);let V=!1;const H=new Z_;let D=!1,te=!1,ee=null;const q=new cn,Y=new $,J={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function se(){return v===null?L:1}let O=n;function ie(C,G){for(let j=0;j<C.length;j++){const B=C[j],X=t.getContext(B,G);if(X!==null)return X}return null}try{const C={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${wd}`),t.addEventListener("webglcontextlost",be,!1),t.addEventListener("webglcontextrestored",Ze,!1),t.addEventListener("webglcontextcreationerror",tt,!1),O===null){const G=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&G.shift(),O=ie(G,C),O===null)throw ie(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Se,ce,ye,Ve,ue,Re,oe,de,W,Le,xe,Oe,Ge,P,A,Z,ne,ae,le,Pe,_e,Q,Ae,ge;function Ue(){Se=new pT(O),ce=new aT(O,Se,e),Se.init(ce),Q=new ZM(O,Se,ce),ye=new jM(O,Se,ce),Ve=new gT(O),ue=new NM,Re=new $M(O,Se,ye,ue,ce,Q,Ve),oe=new lT(p),de=new fT(p),W=new Ay(O,ce),Ae=new rT(O,Se,W,ce),Le=new mT(O,W,Ve,Ae),xe=new ST(O,Le,W,Ve),le=new yT(O,ce,Re),Z=new cT(ue),Oe=new FM(p,oe,de,Se,ce,Ae,Z),Ge=new tE(p,ue),P=new OM,A=new GM(Se,ce),ae=new sT(p,oe,de,ye,xe,d,c),ne=new YM(p,xe,ce),ge=new nE(O,Ve,ce,ye),Pe=new oT(O,Se,Ve,ce),_e=new _T(O,Se,Ve,ce),Ve.programs=Oe.programs,p.capabilities=ce,p.extensions=Se,p.properties=ue,p.renderLists=P,p.shadowMap=ne,p.state=ye,p.info=Ve}Ue();const ve=new eE(p,O);this.xr=ve,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const C=Se.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Se.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return L},this.setPixelRatio=function(C){C!==void 0&&(L=C,this.setSize(F,R,!1))},this.getSize=function(C){return C.set(F,R)},this.setSize=function(C,G,j=!0){if(ve.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=C,R=G,t.width=Math.floor(C*L),t.height=Math.floor(G*L),j===!0&&(t.style.width=C+"px",t.style.height=G+"px"),this.setViewport(0,0,C,G)},this.getDrawingBufferSize=function(C){return C.set(F*L,R*L).floor()},this.setDrawingBufferSize=function(C,G,j){F=C,R=G,L=j,t.width=Math.floor(C*j),t.height=Math.floor(G*j),this.setViewport(0,0,C,G)},this.getCurrentViewport=function(C){return C.copy(b)},this.getViewport=function(C){return C.copy(z)},this.setViewport=function(C,G,j,B){C.isVector4?z.set(C.x,C.y,C.z,C.w):z.set(C,G,j,B),ye.viewport(b.copy(z).multiplyScalar(L).floor())},this.getScissor=function(C){return C.copy(U)},this.setScissor=function(C,G,j,B){C.isVector4?U.set(C.x,C.y,C.z,C.w):U.set(C,G,j,B),ye.scissor(x.copy(U).multiplyScalar(L).floor())},this.getScissorTest=function(){return V},this.setScissorTest=function(C){ye.setScissorTest(V=C)},this.setOpaqueSort=function(C){N=C},this.setTransparentSort=function(C){k=C},this.getClearColor=function(C){return C.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor.apply(ae,arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha.apply(ae,arguments)},this.clear=function(C=!0,G=!0,j=!0){let B=0;C&&(B|=O.COLOR_BUFFER_BIT),G&&(B|=O.DEPTH_BUFFER_BIT),j&&(B|=O.STENCIL_BUFFER_BIT),O.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",be,!1),t.removeEventListener("webglcontextrestored",Ze,!1),t.removeEventListener("webglcontextcreationerror",tt,!1),P.dispose(),A.dispose(),ue.dispose(),oe.dispose(),de.dispose(),xe.dispose(),Ae.dispose(),ge.dispose(),Oe.dispose(),ve.dispose(),ve.removeEventListener("sessionstart",Te),ve.removeEventListener("sessionend",rt),ee&&(ee.dispose(),ee=null),lt.stop()};function be(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function Ze(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const C=Ve.autoReset,G=ne.enabled,j=ne.autoUpdate,B=ne.needsUpdate,X=ne.type;Ue(),Ve.autoReset=C,ne.enabled=G,ne.autoUpdate=j,ne.needsUpdate=B,ne.type=X}function tt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ht(C){const G=C.target;G.removeEventListener("dispose",ht),I(G)}function I(C){K(C),ue.remove(C)}function K(C){const G=ue.get(C).programs;G!==void 0&&(G.forEach(function(j){Oe.releaseProgram(j)}),C.isShaderMaterial&&Oe.releaseShaderCache(C))}this.renderBufferDirect=function(C,G,j,B,X,he){G===null&&(G=J);const Ce=X.isMesh&&X.matrixWorld.determinant()<0,Me=ze(C,G,j,B,X);ye.setMaterial(B,Ce);let Be=j.index,We=1;B.wireframe===!0&&(Be=Le.getWireframeAttribute(j),We=2);const Ne=j.drawRange,ke=j.attributes.position;let Ye=Ne.start*We,At=(Ne.start+Ne.count)*We;he!==null&&(Ye=Math.max(Ye,he.start*We),At=Math.min(At,(he.start+he.count)*We)),Be!==null?(Ye=Math.max(Ye,0),At=Math.min(At,Be.count)):ke!=null&&(Ye=Math.max(Ye,0),At=Math.min(At,ke.count));const hn=At-Ye;if(hn<0||hn===1/0)return;Ae.setup(X,B,Me,j,Be);let Et,Ke=Pe;if(Be!==null&&(Et=W.get(Be),Ke=_e,Ke.setIndex(Et)),X.isMesh)B.wireframe===!0?(ye.setLineWidth(B.wireframeLinewidth*se()),Ke.setMode(O.LINES)):Ke.setMode(O.TRIANGLES);else if(X.isLine){let je=B.linewidth;je===void 0&&(je=1),ye.setLineWidth(je*se()),X.isLineSegments?Ke.setMode(O.LINES):X.isLineLoop?Ke.setMode(O.LINE_LOOP):Ke.setMode(O.LINE_STRIP)}else X.isPoints?Ke.setMode(O.POINTS):X.isSprite&&Ke.setMode(O.TRIANGLES);if(X.isInstancedMesh)Ke.renderInstances(Ye,hn,X.count);else if(j.isInstancedBufferGeometry){const je=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,hr=Math.min(j.instanceCount,je);Ke.renderInstances(Ye,hn,hr)}else Ke.render(Ye,hn)},this.compile=function(C,G){function j(B,X,he){B.transparent===!0&&B.side===ys&&B.forceSinglePass===!1?(B.side=zn,B.needsUpdate=!0,pe(B,X,he),B.side=Js,B.needsUpdate=!0,pe(B,X,he),B.side=ys):pe(B,X,he)}_=A.get(C),_.init(),g.push(_),C.traverseVisible(function(B){B.isLight&&B.layers.test(G.layers)&&(_.pushLight(B),B.castShadow&&_.pushShadow(B))}),_.setupLights(p.useLegacyLights),C.traverse(function(B){const X=B.material;if(X)if(Array.isArray(X))for(let he=0;he<X.length;he++){const Ce=X[he];j(Ce,C,B)}else j(X,C,B)}),g.pop(),_=null};let re=null;function fe(C){re&&re(C)}function Te(){lt.stop()}function rt(){lt.start()}const lt=new K_;lt.setAnimationLoop(fe),typeof self<"u"&&lt.setContext(self),this.setAnimationLoop=function(C){re=C,ve.setAnimationLoop(C),C===null?lt.stop():lt.start()},ve.addEventListener("sessionstart",Te),ve.addEventListener("sessionend",rt),this.render=function(C,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),ve.enabled===!0&&ve.isPresenting===!0&&(ve.cameraAutoUpdate===!0&&ve.updateCamera(G),G=ve.getCamera()),C.isScene===!0&&C.onBeforeRender(p,C,G,v),_=A.get(C,g.length),_.init(),g.push(_),q.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),H.setFromProjectionMatrix(q),te=this.localClippingEnabled,D=Z.init(this.clippingPlanes,te),f=P.get(C,m.length),f.init(),m.push(f),_t(C,G,0,p.sortObjects),f.finish(),p.sortObjects===!0&&f.sort(N,k),D===!0&&Z.beginShadows();const j=_.state.shadowsArray;if(ne.render(j,C,G),D===!0&&Z.endShadows(),this.info.autoReset===!0&&this.info.reset(),ae.render(f,C),_.setupLights(p.useLegacyLights),G.isArrayCamera){const B=G.cameras;for(let X=0,he=B.length;X<he;X++){const Ce=B[X];In(f,C,Ce,Ce.viewport)}}else In(f,C,G);v!==null&&(Re.updateMultisampleRenderTarget(v),Re.updateRenderTargetMipmap(v)),C.isScene===!0&&C.onAfterRender(p,C,G),Ae.resetDefaultState(),M=-1,E=null,g.pop(),g.length>0?_=g[g.length-1]:_=null,m.pop(),m.length>0?f=m[m.length-1]:f=null};function _t(C,G,j,B){if(C.visible===!1)return;if(C.layers.test(G.layers)){if(C.isGroup)j=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(G);else if(C.isLight)_.pushLight(C),C.castShadow&&_.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||H.intersectsSprite(C)){B&&Y.setFromMatrixPosition(C.matrixWorld).applyMatrix4(q);const Ce=xe.update(C),Me=C.material;Me.visible&&f.push(C,Ce,Me,j,Y.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||H.intersectsObject(C))){C.isSkinnedMesh&&C.skeleton.frame!==Ve.render.frame&&(C.skeleton.update(),C.skeleton.frame=Ve.render.frame);const Ce=xe.update(C),Me=C.material;if(B&&(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),Y.copy(Ce.boundingSphere.center).applyMatrix4(C.matrixWorld).applyMatrix4(q)),Array.isArray(Me)){const Be=Ce.groups;for(let We=0,Ne=Be.length;We<Ne;We++){const ke=Be[We],Ye=Me[ke.materialIndex];Ye&&Ye.visible&&f.push(C,Ce,Ye,j,Y.z,ke)}}else Me.visible&&f.push(C,Ce,Me,j,Y.z,null)}}const he=C.children;for(let Ce=0,Me=he.length;Ce<Me;Ce++)_t(he[Ce],G,j,B)}function In(C,G,j,B){const X=C.opaque,he=C.transmissive,Ce=C.transparent;_.setupLightsView(j),D===!0&&Z.setGlobalState(p.clippingPlanes,j),he.length>0&&we(X,he,G,j),B&&ye.viewport(b.copy(B)),X.length>0&&De(X,G,j),he.length>0&&De(he,G,j),Ce.length>0&&De(Ce,G,j),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function we(C,G,j,B){if(ee===null){const Me=ce.isWebGL2;ee=new qr(1024,1024,{generateMipmaps:!0,type:Se.has("EXT_color_buffer_half_float")?nc:Hr,minFilter:tc,samples:Me&&o===!0?4:0})}const X=p.getRenderTarget();p.setRenderTarget(ee),p.clear();const he=p.toneMapping;p.toneMapping=Ms,De(C,j,B),Re.updateMultisampleRenderTarget(ee),Re.updateRenderTargetMipmap(ee);let Ce=!1;for(let Me=0,Be=G.length;Me<Be;Me++){const We=G[Me],Ne=We.object,ke=We.geometry,Ye=We.material,At=We.group;if(Ye.side===ys&&Ne.layers.test(B.layers)){const hn=Ye.side;Ye.side=zn,Ye.needsUpdate=!0,$e(Ne,j,B,ke,Ye,At),Ye.side=hn,Ye.needsUpdate=!0,Ce=!0}}Ce===!0&&(Re.updateMultisampleRenderTarget(ee),Re.updateRenderTargetMipmap(ee)),p.setRenderTarget(X),p.toneMapping=he}function De(C,G,j){const B=G.isScene===!0?G.overrideMaterial:null;for(let X=0,he=C.length;X<he;X++){const Ce=C[X],Me=Ce.object,Be=Ce.geometry,We=B===null?Ce.material:B,Ne=Ce.group;Me.layers.test(j.layers)&&$e(Me,G,j,Be,We,Ne)}}function $e(C,G,j,B,X,he){C.onBeforeRender(p,G,j,B,X,he),C.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),X.onBeforeRender(p,G,j,B,C,he),X.transparent===!0&&X.side===ys&&X.forceSinglePass===!1?(X.side=zn,X.needsUpdate=!0,p.renderBufferDirect(j,G,B,X,C,he),X.side=Js,X.needsUpdate=!0,p.renderBufferDirect(j,G,B,X,C,he),X.side=ys):p.renderBufferDirect(j,G,B,X,C,he),C.onAfterRender(p,G,j,B,X,he)}function pe(C,G,j){G.isScene!==!0&&(G=J);const B=ue.get(C),X=_.state.lights,he=_.state.shadowsArray,Ce=X.state.version,Me=Oe.getParameters(C,X.state,he,G,j),Be=Oe.getProgramCacheKey(Me);let We=B.programs;B.environment=C.isMeshStandardMaterial?G.environment:null,B.fog=G.fog,B.envMap=(C.isMeshStandardMaterial?de:oe).get(C.envMap||B.environment),We===void 0&&(C.addEventListener("dispose",ht),We=new Map,B.programs=We);let Ne=We.get(Be);if(Ne!==void 0){if(B.currentProgram===Ne&&B.lightsStateVersion===Ce)return qe(C,Me),Ne}else Me.uniforms=Oe.getUniforms(C),C.onBuild(j,Me,p),C.onBeforeCompile(Me,p),Ne=Oe.acquireProgram(Me,Be),We.set(Be,Ne),B.uniforms=Me.uniforms;const ke=B.uniforms;(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(ke.clippingPlanes=Z.uniform),qe(C,Me),B.needsLights=Bt(C),B.lightsStateVersion=Ce,B.needsLights&&(ke.ambientLightColor.value=X.state.ambient,ke.lightProbe.value=X.state.probe,ke.directionalLights.value=X.state.directional,ke.directionalLightShadows.value=X.state.directionalShadow,ke.spotLights.value=X.state.spot,ke.spotLightShadows.value=X.state.spotShadow,ke.rectAreaLights.value=X.state.rectArea,ke.ltc_1.value=X.state.rectAreaLTC1,ke.ltc_2.value=X.state.rectAreaLTC2,ke.pointLights.value=X.state.point,ke.pointLightShadows.value=X.state.pointShadow,ke.hemisphereLights.value=X.state.hemi,ke.directionalShadowMap.value=X.state.directionalShadowMap,ke.directionalShadowMatrix.value=X.state.directionalShadowMatrix,ke.spotShadowMap.value=X.state.spotShadowMap,ke.spotLightMatrix.value=X.state.spotLightMatrix,ke.spotLightMap.value=X.state.spotLightMap,ke.pointShadowMap.value=X.state.pointShadowMap,ke.pointShadowMatrix.value=X.state.pointShadowMatrix);const Ye=Ne.getUniforms(),At=Sl.seqWithValue(Ye.seq,ke);return B.currentProgram=Ne,B.uniformsList=At,Ne}function qe(C,G){const j=ue.get(C);j.outputColorSpace=G.outputColorSpace,j.instancing=G.instancing,j.skinning=G.skinning,j.morphTargets=G.morphTargets,j.morphNormals=G.morphNormals,j.morphColors=G.morphColors,j.morphTargetsCount=G.morphTargetsCount,j.numClippingPlanes=G.numClippingPlanes,j.numIntersection=G.numClipIntersection,j.vertexAlphas=G.vertexAlphas,j.vertexTangents=G.vertexTangents,j.toneMapping=G.toneMapping}function ze(C,G,j,B,X){G.isScene!==!0&&(G=J),Re.resetTextureUnits();const he=G.fog,Ce=B.isMeshStandardMaterial?G.environment:null,Me=v===null?p.outputColorSpace:v.isXRRenderTarget===!0?v.texture.colorSpace:ns,Be=(B.isMeshStandardMaterial?de:oe).get(B.envMap||Ce),We=B.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Ne=!!B.normalMap&&!!j.attributes.tangent,ke=!!j.morphAttributes.position,Ye=!!j.morphAttributes.normal,At=!!j.morphAttributes.color,hn=B.toneMapped?p.toneMapping:Ms,Et=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Ke=Et!==void 0?Et.length:0,je=ue.get(B),hr=_.state.lights;if(D===!0&&(te===!0||C!==E)){const $n=C===E&&B.id===M;Z.setState(B,C,$n)}let It=!1;B.version===je.__version?(je.needsLights&&je.lightsStateVersion!==hr.state.version||je.outputColorSpace!==Me||X.isInstancedMesh&&je.instancing===!1||!X.isInstancedMesh&&je.instancing===!0||X.isSkinnedMesh&&je.skinning===!1||!X.isSkinnedMesh&&je.skinning===!0||je.envMap!==Be||B.fog===!0&&je.fog!==he||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==Z.numPlanes||je.numIntersection!==Z.numIntersection)||je.vertexAlphas!==We||je.vertexTangents!==Ne||je.morphTargets!==ke||je.morphNormals!==Ye||je.morphColors!==At||je.toneMapping!==hn||ce.isWebGL2===!0&&je.morphTargetsCount!==Ke)&&(It=!0):(It=!0,je.__version=B.version);let Yn=je.currentProgram;It===!0&&(Yn=pe(B,G,X));let jn=!1,bi=!1,Ns=!1;const Ot=Yn.getUniforms(),dr=je.uniforms;if(ye.useProgram(Yn.program)&&(jn=!0,bi=!0,Ns=!0),B.id!==M&&(M=B.id,bi=!0),jn||E!==C){if(Ot.setValue(O,"projectionMatrix",C.projectionMatrix),ce.logarithmicDepthBuffer&&Ot.setValue(O,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),E!==C&&(E=C,bi=!0,Ns=!0),B.isShaderMaterial||B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshStandardMaterial||B.envMap){const $n=Ot.map.cameraPosition;$n!==void 0&&$n.setValue(O,Y.setFromMatrixPosition(C.matrixWorld))}(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Ot.setValue(O,"isOrthographic",C.isOrthographicCamera===!0),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial||B.isShadowMaterial||X.isSkinnedMesh)&&Ot.setValue(O,"viewMatrix",C.matrixWorldInverse)}if(X.isSkinnedMesh){Ot.setOptional(O,X,"bindMatrix"),Ot.setOptional(O,X,"bindMatrixInverse");const $n=X.skeleton;$n&&(ce.floatVertexTextures?($n.boneTexture===null&&$n.computeBoneTexture(),Ot.setValue(O,"boneTexture",$n.boneTexture,Re),Ot.setValue(O,"boneTextureSize",$n.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Uu=j.morphAttributes;if((Uu.position!==void 0||Uu.normal!==void 0||Uu.color!==void 0&&ce.isWebGL2===!0)&&le.update(X,j,Yn),(bi||je.receiveShadow!==X.receiveShadow)&&(je.receiveShadow=X.receiveShadow,Ot.setValue(O,"receiveShadow",X.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(dr.envMap.value=Be,dr.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),bi&&(Ot.setValue(O,"toneMappingExposure",p.toneMappingExposure),je.needsLights&&Xe(dr,Ns),he&&B.fog===!0&&Ge.refreshFogUniforms(dr,he),Ge.refreshMaterialUniforms(dr,B,L,R,ee),Sl.upload(O,je.uniformsList,dr,Re)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Sl.upload(O,je.uniformsList,dr,Re),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Ot.setValue(O,"center",X.center),Ot.setValue(O,"modelViewMatrix",X.modelViewMatrix),Ot.setValue(O,"normalMatrix",X.normalMatrix),Ot.setValue(O,"modelMatrix",X.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const $n=B.uniformsGroups;for(let ku=0,qv=$n.length;ku<qv;ku++)if(ce.isWebGL2){const Qf=$n[ku];ge.update(Qf,Yn),ge.bind(Qf,Yn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Yn}function Xe(C,G){C.ambientLightColor.needsUpdate=G,C.lightProbe.needsUpdate=G,C.directionalLights.needsUpdate=G,C.directionalLightShadows.needsUpdate=G,C.pointLights.needsUpdate=G,C.pointLightShadows.needsUpdate=G,C.spotLights.needsUpdate=G,C.spotLightShadows.needsUpdate=G,C.rectAreaLights.needsUpdate=G,C.hemisphereLights.needsUpdate=G}function Bt(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return v},this.setRenderTargetTextures=function(C,G,j){ue.get(C.texture).__webglTexture=G,ue.get(C.depthTexture).__webglTexture=j;const B=ue.get(C);B.__hasExternalTextures=!0,B.__hasExternalTextures&&(B.__autoAllocateDepthBuffer=j===void 0,B.__autoAllocateDepthBuffer||Se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,G){const j=ue.get(C);j.__webglFramebuffer=G,j.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(C,G=0,j=0){v=C,y=G,T=j;let B=!0,X=null,he=!1,Ce=!1;if(C){const Be=ue.get(C);Be.__useDefaultFramebuffer!==void 0?(ye.bindFramebuffer(O.FRAMEBUFFER,null),B=!1):Be.__webglFramebuffer===void 0?Re.setupRenderTarget(C):Be.__hasExternalTextures&&Re.rebindTextures(C,ue.get(C.texture).__webglTexture,ue.get(C.depthTexture).__webglTexture);const We=C.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Ce=!0);const Ne=ue.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(X=Ne[G],he=!0):ce.isWebGL2&&C.samples>0&&Re.useMultisampledRTT(C)===!1?X=ue.get(C).__webglMultisampledFramebuffer:X=Ne,b.copy(C.viewport),x.copy(C.scissor),w=C.scissorTest}else b.copy(z).multiplyScalar(L).floor(),x.copy(U).multiplyScalar(L).floor(),w=V;if(ye.bindFramebuffer(O.FRAMEBUFFER,X)&&ce.drawBuffers&&B&&ye.drawBuffers(C,X),ye.viewport(b),ye.scissor(x),ye.setScissorTest(w),he){const Be=ue.get(C.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+G,Be.__webglTexture,j)}else if(Ce){const Be=ue.get(C.texture),We=G||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Be.__webglTexture,j||0,We)}M=-1},this.readRenderTargetPixels=function(C,G,j,B,X,he,Ce){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=ue.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ce!==void 0&&(Me=Me[Ce]),Me){ye.bindFramebuffer(O.FRAMEBUFFER,Me);try{const Be=C.texture,We=Be.format,Ne=Be.type;if(We!==Ui&&Q.convert(We)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ke=Ne===nc&&(Se.has("EXT_color_buffer_half_float")||ce.isWebGL2&&Se.has("EXT_color_buffer_float"));if(Ne!==Hr&&Q.convert(Ne)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ne===wr&&(ce.isWebGL2||Se.has("OES_texture_float")||Se.has("WEBGL_color_buffer_float")))&&!ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=C.width-B&&j>=0&&j<=C.height-X&&O.readPixels(G,j,B,X,Q.convert(We),Q.convert(Ne),he)}finally{const Be=v!==null?ue.get(v).__webglFramebuffer:null;ye.bindFramebuffer(O.FRAMEBUFFER,Be)}}},this.copyFramebufferToTexture=function(C,G,j=0){const B=Math.pow(2,-j),X=Math.floor(G.image.width*B),he=Math.floor(G.image.height*B);Re.setTexture2D(G,0),O.copyTexSubImage2D(O.TEXTURE_2D,j,0,0,C.x,C.y,X,he),ye.unbindTexture()},this.copyTextureToTexture=function(C,G,j,B=0){const X=G.image.width,he=G.image.height,Ce=Q.convert(j.format),Me=Q.convert(j.type);Re.setTexture2D(j,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,j.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,j.unpackAlignment),G.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,B,C.x,C.y,X,he,Ce,Me,G.image.data):G.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,B,C.x,C.y,G.mipmaps[0].width,G.mipmaps[0].height,Ce,G.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,B,C.x,C.y,Ce,Me,G.image),B===0&&j.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),ye.unbindTexture()},this.copyTextureToTexture3D=function(C,G,j,B,X=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const he=C.max.x-C.min.x+1,Ce=C.max.y-C.min.y+1,Me=C.max.z-C.min.z+1,Be=Q.convert(B.format),We=Q.convert(B.type);let Ne;if(B.isData3DTexture)Re.setTexture3D(B,0),Ne=O.TEXTURE_3D;else if(B.isDataArrayTexture)Re.setTexture2DArray(B,0),Ne=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,B.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,B.unpackAlignment);const ke=O.getParameter(O.UNPACK_ROW_LENGTH),Ye=O.getParameter(O.UNPACK_IMAGE_HEIGHT),At=O.getParameter(O.UNPACK_SKIP_PIXELS),hn=O.getParameter(O.UNPACK_SKIP_ROWS),Et=O.getParameter(O.UNPACK_SKIP_IMAGES),Ke=j.isCompressedTexture?j.mipmaps[0]:j.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,Ke.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ke.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,C.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,C.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,C.min.z),j.isDataTexture||j.isData3DTexture?O.texSubImage3D(Ne,X,G.x,G.y,G.z,he,Ce,Me,Be,We,Ke.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),O.compressedTexSubImage3D(Ne,X,G.x,G.y,G.z,he,Ce,Me,Be,Ke.data)):O.texSubImage3D(Ne,X,G.x,G.y,G.z,he,Ce,Me,Be,We,Ke),O.pixelStorei(O.UNPACK_ROW_LENGTH,ke),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ye),O.pixelStorei(O.UNPACK_SKIP_PIXELS,At),O.pixelStorei(O.UNPACK_SKIP_ROWS,hn),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Et),X===0&&B.generateMipmaps&&O.generateMipmap(Ne),ye.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?Re.setTextureCube(C,0):C.isData3DTexture?Re.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Re.setTexture2DArray(C,0):Re.setTexture2D(C,0),ye.unbindTexture()},this.resetState=function(){y=0,T=0,v=null,ye.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Je?Lr:I_}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Lr?Je:ns}}class sE extends ng{}sE.prototype.isWebGL1Renderer=!0;class rE extends li{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class xc extends or{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const u=[],h=new $,d=new $,f=[],_=[],m=[],g=[];for(let p=0;p<=n;p++){const S=[],y=p/n;let T=0;p===0&&a===0?T=.5/t:p===n&&c===Math.PI&&(T=-.5/t);for(let v=0;v<=t;v++){const M=v/t;h.x=-e*Math.cos(i+M*r)*Math.sin(a+y*o),h.y=e*Math.cos(a+y*o),h.z=e*Math.sin(i+M*r)*Math.sin(a+y*o),_.push(h.x,h.y,h.z),d.copy(h).normalize(),m.push(d.x,d.y,d.z),g.push(M+T,1-y),S.push(l++)}u.push(S)}for(let p=0;p<n;p++)for(let S=0;S<t;S++){const y=u[p][S+1],T=u[p][S],v=u[p+1][S],M=u[p+1][S+1];(p!==0||a>0)&&f.push(y,T,M),(p!==n-1||c<Math.PI)&&f.push(T,v,M)}this.setIndex(f),this.setAttribute("position",new Ji(_,3)),this.setAttribute("normal",new Ji(m,3)),this.setAttribute("uv",new Ji(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}let oE=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=_m(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=_m();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function _m(){return(typeof performance>"u"?Date:performance).now()}class aE{constructor(e,t,n=0,i=1/0){this.ray=new G_(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Ad,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Gh(e,this,n,t),n.sort(gm),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Gh(e[i],this,n,t);return n.sort(gm),n}}function gm(s,e){return s.distance-e.distance}function Gh(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){const i=s.children;for(let r=0,a=i.length;r<a;r++)Gh(i[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wd);var cE=`uniform float time;
uniform float uAudioLevel;
varying float vElevation;
varying float audioLevelAndElevation;
varying vec2 vUv;

vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d )
{
    return a + b*cos( 6.28318*(c*t+d) );
}

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
    vec4 Pi = floor(P.xyxy) + vec4(0.0, 0.0, 1.0, 1.0);
    vec4 Pf = fract(P.xyxy) - vec4(0.0, 0.0, 1.0, 1.0);
    Pi = mod(Pi, 289.0); 
    vec4 ix = Pi.xzxz;
    vec4 iy = Pi.yyww;
    vec4 fx = Pf.xzxz;
    vec4 fy = Pf.yyww;
    vec4 i = permute(permute(ix) + iy);
    vec4 gx = 2.0 * fract(i * 0.0243902439) - 1.0; 
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
void main()
{
    float strength = smoothstep(0.9, sin(cnoise(vUv * (sin(time/10.0)*10.0)) * 20.0), sin(time*audioLevelAndElevation+10.0));

    vec3 blackColor = palette(sin(time)*.001 + (sin(time)*.04), vec3(fract(audioLevelAndElevation), 0.278+length(vUv.y)+vElevation, 0.500), vec3(fract(audioLevelAndElevation*10.0), 0.520-length(vUv.y), 0.520+(audioLevelAndElevation*10.0)), vec3(1.948, uAudioLevel*10.0, 1.888+(vElevation*10.0)), vec3(uAudioLevel*sin(time), audioLevelAndElevation, 0.858));
    vec3 uvColor = vec3(vUv, 1.0+sin(time+vElevation));
    vec3 mixedColor = mix(blackColor, uvColor, strength);
    gl_FragColor = vec4(mixedColor, 1.0);
}`,lE=`uniform float time;
varying vec2 vUv;
varying float vElevation;

vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d )
{
    return a + b*cos( 6.28318*(c*t+d) );
}

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
    Pi = mod(Pi, 289.0); 
    vec4 ix = Pi.xzxz;
    vec4 iy = Pi.yyww;
    vec4 fx = Pf.xzxz;
    vec4 fy = Pf.yyww;
    vec4 i = permute(permute(ix) + iy);
    vec4 gx = (sin(time)/2.0) * fract(i * 0.0243902439) - 1.0; 
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
void main()
{
    float strength = step(sin(time) * 0.9, sin(cnoise(vUv * 10.0) * 20.0));
    vec3 blackColor = vec3(1.0+(vElevation*8.0), sin(time)+vUv.x+(vElevation*2.0), -sin(time)+(vElevation*8.0));
    vec3 uvColor = palette(sin(time)*.001 + (sin(time)*.04)+vUv.x, vec3(0.608+(vElevation*8.0), 0.278+vUv.y, 0.500), vec3(0.550, 0.520, 0.520), vec3(1.948, 2.108, 1.888), vec3(0.528, 0.358, 0.858+vUv.y));
    vec3 mixedColor = mix(blackColor, uvColor, strength);
    gl_FragColor = vec4(mixedColor, 1.0);
}`,Rd=`uniform float time;
uniform float uBigWavesElevation;
uniform vec2 uBigWavesFrequency;
uniform float uBigWavesSpeed;

uniform float uSmallWavesElevation;
uniform float uSmallWavesFrequency;
uniform float uSmallWavesSpeed;
uniform float uSmallIterations;
uniform float uAudioLevel;

varying float vElevation;
varying vec2 vUv;

vec4 permute(vec4 x)
{
    return mod(((x*34.0)+1.0)*x, 289.0);
}
vec4 taylorInvSqrt(vec4 r)
{
    return 1.79284291400159 - 0.85373472095314 * r;
}
vec3 fade(vec3 t)
{
    return t*t*t*(t*(t*6.0-15.0)+10.0);
}

float cnoise(vec3 P)
{
    vec3 Pi0 = floor(P); 
    vec3 Pi1 = Pi0 + vec3(1.0); 
    Pi0 = mod(Pi0, 289.0);
    Pi1 = mod(Pi1, 289.0);
    vec3 Pf0 = fract(P); 
    vec3 Pf1 = Pf0 - vec3(1.0); 
    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
    vec4 iy = vec4(Pi0.yy, Pi1.yy);
    vec4 iz0 = Pi0.zzzz;
    vec4 iz1 = Pi1.zzzz;

    vec4 ixy = permute(permute(ix) + iy);
    vec4 ixy0 = permute(ixy + iz0);
    vec4 ixy1 = permute(ixy + iz1);

    vec4 gx0 = ixy0 / 7.0;
    vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;
    gx0 = fract(gx0);
    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
    vec4 sz0 = step(gz0, vec4(0.0));
    gx0 -= sz0 * (step(0.0, gx0) - 0.5);
    gy0 -= sz0 * (step(0.0, gy0) - 0.5);

    vec4 gx1 = ixy1 / 7.0;
    vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;
    gx1 = fract(gx1);
    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
    vec4 sz1 = step(gz1, vec4(0.0));
    gx1 -= sz1 * (step(0.0, gx1) - 0.5);
    gy1 -= sz1 * (step(0.0, gy1) - 0.5);

    vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
    vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
    vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
    vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
    vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
    vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
    vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
    vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

    vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
    g000 *= norm0.x;
    g010 *= norm0.y;
    g100 *= norm0.z;
    g110 *= norm0.w;
    vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
    g001 *= norm1.x;
    g011 *= norm1.y;
    g101 *= norm1.z;
    g111 *= norm1.w;

    float n000 = dot(g000, Pf0);
    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
    float n111 = dot(g111, Pf1);

    vec3 fade_xyz = fade(Pf0);
    vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
    return 2.2 * n_xyz;
}

void main()
{
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);

    
    float elevation = sin(modelPosition.x * uBigWavesFrequency.x + time * uBigWavesSpeed) *
                      sin(modelPosition.z * uBigWavesFrequency.y + time * uBigWavesSpeed) *
                      uBigWavesElevation;

    for(float i = 1.0; i <= uSmallIterations; i++)
    {
        elevation -= abs(cnoise(vec3(modelPosition.xz * uSmallWavesFrequency * i, time * (uAudioLevel*40.0) * uSmallWavesSpeed)) * uSmallWavesElevation / i);
    }

    modelPosition.y += elevation;

    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;
    gl_Position = projectedPosition;

    vElevation = elevation;
    vUv = uv;
}`,uE=`uniform float time;
uniform float uBigWavesElevation;
uniform vec2 uBigWavesFrequency;
uniform float uBigWavesSpeed;

uniform float uSmallWavesElevation;
uniform float uSmallWavesFrequency;
uniform float uSmallWavesSpeed;
uniform float uSmallIterations;

uniform float uAudioLevel;
varying float vElevation;
varying vec2 vUv;
varying float audioLevelAndElevation;

vec4 permute(vec4 x)
{
    return mod(((x*34.0)+1.0)*x, 289.0);
}
vec4 taylorInvSqrt(vec4 r)
{
    return 1.79284291400159 - 0.85373472095314 * r;
}
vec3 fade(vec3 t)
{
    return t*t*t*(t*(t*6.0-15.0)+10.0);
}

float cnoise(vec3 P)
{
    vec3 Pi0 = floor(P); 
    vec3 Pi1 = Pi0 + vec3(1.0); 
    Pi0 = mod(Pi0, 289.0);
    Pi1 = mod(Pi1, 289.0);
    vec3 Pf0 = fract(P); 
    vec3 Pf1 = Pf0 - vec3(1.0); 
    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
    vec4 iy = vec4(Pi0.yy, Pi1.yy);
    vec4 iz0 = Pi0.zzzz;
    vec4 iz1 = Pi1.zzzz;

    vec4 ixy = permute(permute(ix) + iy);
    vec4 ixy0 = permute(ixy + iz0);
    vec4 ixy1 = permute(ixy + iz1);

    vec4 gx0 = ixy0 / 7.0;
    vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;
    gx0 = fract(gx0);
    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
    vec4 sz0 = step(gz0, vec4(0.0));
    gx0 -= sz0 * (step(0.0, gx0) - 0.5);
    gy0 -= sz0 * (step(0.0, gy0) - 0.5);

    vec4 gx1 = ixy1 / 7.0;
    vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;
    gx1 = fract(gx1);
    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
    vec4 sz1 = step(gz1, vec4(0.0));
    gx1 -= sz1 * (step(0.0, gx1) - 0.5);
    gy1 -= sz1 * (step(0.0, gy1) - 0.5);

    vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
    vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
    vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
    vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
    vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
    vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
    vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
    vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

    vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
    g000 *= norm0.x;
    g010 *= norm0.y;
    g100 *= norm0.z;
    g110 *= norm0.w;
    vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
    g001 *= norm1.x;
    g011 *= norm1.y;
    g101 *= norm1.z;
    g111 *= norm1.w;

    float n000 = dot(g000, Pf0);
    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
    float n111 = dot(g111, Pf1);

    vec3 fade_xyz = fade(Pf0);
    vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
    return 2.2 * n_xyz;
}

void main()
{
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);

    
    float elevation = atan(sin(modelPosition.x * uBigWavesFrequency.x + time * uAudioLevel * uBigWavesSpeed) *
    sin(modelPosition.z * uBigWavesFrequency.y + time * uBigWavesSpeed) *
    uBigWavesElevation, 0.0003);

    for(float i = 1.0; i <= uSmallIterations; i++)
    {
        if (mod(elevation, 2.0) == 0.0) {
            elevation -= atan(cnoise(vec3(modelPosition.xz * uSmallWavesFrequency * i, time * uSmallWavesSpeed)) * uSmallWavesElevation / i, 0.002);
        } else {
            elevation += atan(cnoise(vec3(modelPosition.xz * uSmallWavesFrequency * i, time * uSmallWavesSpeed)) * uSmallWavesElevation / i);
        }
    }

    if (mod(elevation, 2.0) == 0.0) {
        modelPosition.y += elevation * (sin(time)*8.0);
    } else {
        modelPosition.x += elevation/4.0* (sin(time/4.0)*3.0);
    }

    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;
    gl_Position = projectedPosition;
    audioLevelAndElevation = uAudioLevel * elevation;
    vElevation = elevation;
    vUv = uv;
}`,hE=`varying vec2 vUv;
uniform float time;
varying float vElevation;

vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d )
{

    return a + b*cos( 6.28318*(c*t+d) );
}

void main()
{
    vec2 uv = vUv;
    vec2 uv0 = uv;

    vec3 finalColor = vec3(0.0);

    for (float i = 0.0; i < 3.0; i++) {

        uv = fract(uv * 1.5) - 0.5;

        float d = length(uv) * exp(length(uv0));

        vec3 col = palette(length(uv0) + i*.4 + (time*.4), vec3(0.608, 0.278, 0.500), vec3(0.550, 0.520, 0.520), vec3(1.948, 2.108, 1.888), vec3(0.528, 0.358, 0.858));

        d = sin(d * (8.0 - i) + time)/8.0;
        d = abs(d);

        d = pow(0.01 / d, 1.2);

        finalColor += col * d + (vElevation * 2.0);
    }

    
    gl_FragColor = vec4(finalColor, 1.0);
}`,dE=`#ifdef GL_ES
precision highp float;
#endif

uniform float time;
uniform vec2 resolution;
uniform vec2 uMouse;
uniform float uAudioLevel;

#ifndef QTR_PI
#define QTR_PI 0.78539816339
#endif
#ifndef HALF_PI
#define HALF_PI 1.5707963267948966192313216916398
#endif
#ifndef PI
#define PI 3.1415926535897932384626433832795
#endif
#ifndef TWO_PI
#define TWO_PI 6.2831853071795864769252867665590
#endif
#ifndef TAU
#define TAU 6.2831853071795864769252867665590
#endif
#ifndef ONE_OVER_PI
#define ONE_OVER_PI 0.31830988618
#endif
#ifndef SQRT_HALF_PI
#define SQRT_HALF_PI 1.25331413732
#endif
#ifndef PHI
#define PHI 1.618033988749894848204586834
#endif
#ifndef EPSILON
#define EPSILON 0.0000001
#endif
#ifndef GOLDEN_RATIO
#define GOLDEN_RATIO 1.6180339887
#endif
#ifndef GOLDEN_RATIO_CONJUGATE 
#define GOLDEN_RATIO_CONJUGATE 0.61803398875
#endif
#ifndef GOLDEN_ANGLE 
#define GOLDEN_ANGLE 2.39996323
#endif
#ifndef RANDOM_SCALE
#if defined(RANDOM_HIGHER_RANGE)
#define RANDOM_SCALE vec4(.1031, .1030, .0973, .1099)
#else
#define RANDOM_SCALE vec4(443.897, 441.423, .0973, .1099)
#endif
#endif

#ifndef FNC_RANDOM
#define FNC_RANDOM
float random(in float x) {
#if defined(RANDOM_SINLESS)
    return fract(sin(x) * 43758.5453);
#else
    x = fract(x * RANDOM_SCALE.x);
    x *= x + 33.33;
    x *= x + x;
    return fract(x);
#endif
}

float random(in vec2 st) {
#if defined(RANDOM_SINLESS)
    vec3 p3  = fract(vec3(st.xyx) * RANDOM_SCALE.xyz);
    p3 += dot(p3, p3.yzx + 33.33);
    return fract((p3.x + p3.y) * p3.z);
#else
    return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453);
#endif
}

float random(in vec3 pos) {
#if defined(RANDOM_SINLESS)
    pos  = fract(pos * RANDOM_SCALE.xyz);
    pos += dot(pos, pos.zyx + 31.32);
    return fract((pos.x + pos.y) * pos.z);
#else
    return fract(sin(dot(pos.xyz, vec3(70.9898, 78.233, 32.4355))) * 43758.5453123);
#endif
}

float random(in vec4 pos) {
#if defined(RANDOM_SINLESS)
    pos = fract(pos * RANDOM_SCALE);
    pos += dot(pos, pos.wzxy+33.33);
    return fract((pos.x + pos.y) * (pos.z + pos.w));
#else
    float dot_product = dot(pos, vec4(12.9898,78.233,45.164,94.673));
    return fract(sin(dot_product) * 43758.5453);
#endif
}

vec2 random2(float p) {
    vec3 p3 = fract(vec3(p) * RANDOM_SCALE.xyz);
    p3 += dot(p3, p3.yzx + 19.19);
    return fract((p3.xx + p3.yz) * p3.zy);
}

vec2 random2(vec2 p) {
    vec3 p3 = fract(p.xyx * RANDOM_SCALE.xyz);
    p3 += dot(p3, p3.yzx + 19.19);
    return fract((p3.xx + p3.yz) * p3.zy);
}

vec2 random2(vec3 p3) {
    p3 = fract(p3 * RANDOM_SCALE.xyz);
    p3 += dot(p3, p3.yzx + 19.19);
    return fract((p3.xx + p3.yz) * p3.zy);
}

vec3 random3(float p) {
    vec3 p3 = fract(vec3(p) * RANDOM_SCALE.xyz);
    p3 += dot(p3, p3.yzx + 19.19);
    return fract((p3.xxy + p3.yzz) * p3.zyx); 
}

vec3 random3(vec2 p) {
    vec3 p3 = fract(vec3(p.xyx) * RANDOM_SCALE.xyz);
    p3 += dot(p3, p3.yxz + 19.19);
    return fract((p3.xxy + p3.yzz) * p3.zyx);
}

vec3 random3(vec3 p) {
    p = fract(p * RANDOM_SCALE.xyz);
    p += dot(p, p.yxz + 19.19);
    return fract((p.xxy + p.yzz) * p.zyx);
}

vec4 random4(float p) {
    vec4 p4 = fract(p * RANDOM_SCALE);
    p4 += dot(p4, p4.wzxy + 19.19);
    return fract((p4.xxyz + p4.yzzw) * p4.zywx);   
}

vec4 random4(vec2 p) {
    vec4 p4 = fract(p.xyxy * RANDOM_SCALE);
    p4 += dot(p4, p4.wzxy + 19.19);
    return fract((p4.xxyz + p4.yzzw) * p4.zywx);
}

vec4 random4(vec3 p) {
    vec4 p4 = fract(p.xyzx  * RANDOM_SCALE);
    p4 += dot(p4, p4.wzxy + 19.19);
    return fract((p4.xxyz + p4.yzzw) * p4.zywx);
}

vec4 random4(vec4 p4) {
    p4 = fract(p4  * RANDOM_SCALE);
    p4 += dot(p4, p4.wzxy + 19.19);
    return fract((p4.xxyz + p4.yzzw) * p4.zywx);
}

#endif

#ifndef VORONOI_RANDOM_FNC 
#define VORONOI_RANDOM_FNC(UV) ( 0.5 + 0.5 * sin(time + TAU * random2(UV) ) ); 
#endif

#ifndef FNC_VORONOI
#define FNC_VORONOI
vec3 voronoi(vec2 uv, float time) {
    vec2 i_uv = floor(uv);
    vec2 f_uv = fract(uv);
    vec3 rta = vec3(0.0, 0.0, 10.0);
    for (int j=-1; j<=1; j++ ) {
        for (int i=-1; i<=1; i++ ) {
            vec2 neighbor = vec2(float(i),float(j));
            vec2 point = VORONOI_RANDOM_FNC(i_uv + neighbor);
            point = 0.5 + 0.5 * sin(time + TAU * point);
            vec2 diff = neighbor + point - f_uv;
            float dist = length(diff);
            if ( dist < rta.z ) {
                rta.xy = point;
                rta.z = dist;
            }
        }
    }
    return rta;
}

vec3 voronoi(vec2 p)  { return voronoi(p, 0.0); }
vec3 voronoi(vec3 p)  { return voronoi(p.xy, p.z); }
#endif
#ifndef FNC_MOD289
#define FNC_MOD289

float mod289(const in float x) { return x - floor(x * (1. / 289.)) * 289.; }
vec2 mod289(const in vec2 x) { return x - floor(x * (1. / 289.)) * 289.; }
vec3 mod289(const in vec3 x) { return x - floor(x * (1. / 289.)) * 289.; }
vec4 mod289(const in vec4 x) { return x - floor(x * (1. / 289.)) * 289.; }

#endif
#ifndef FNC_MOD289
#define FNC_MOD289

float mod289(const in float x) { return x - floor(x * (1. / 289.)) * 289.; }
vec2 mod289(const in vec2 x) { return x - floor(x * (1. / 289.)) * 289.; }
vec3 mod289(const in vec3 x) { return x - floor(x * (1. / 289.)) * 289.; }
vec4 mod289(const in vec4 x) { return x - floor(x * (1. / 289.)) * 289.; }

#endif

#ifndef FNC_PERMUTE
#define FNC_PERMUTE

float permute(const in float x) { return mod289(((x * 34.0) + 1.0) * x); }
vec2 permute(const in vec2 x) { return mod289(((x * 34.0) + 1.0) * x); }
vec3 permute(const in vec3 x) { return mod289(((x * 34.0) + 1.0) * x); }
vec4 permute(const in vec4 x) { return mod289(((x * 34.0) + 1.0) * x); }

#endif
#ifndef FNC_TAYLORINVSQRT
#define FNC_TAYLORINVSQRT
float taylorInvSqrt(in float r) { return 1.79284291400159 - 0.85373472095314 * r; }
vec2 taylorInvSqrt(in vec2 r) { return 1.79284291400159 - 0.85373472095314 * r; }
vec3 taylorInvSqrt(in vec3 r) { return 1.79284291400159 - 0.85373472095314 * r; }
vec4 taylorInvSqrt(in vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
#endif
#ifndef FNC_GRAD4
#define FNC_GRAD4
vec4 grad4(float j, vec4 ip) {
    const vec4 ones = vec4(1.0, 1.0, 1.0, -1.0);
    vec4 p,s;

    p.xyz = floor( fract (vec3(j) * ip.xyz) * 7.0) * ip.z - 1.0;
    p.w = 1.5 - dot(abs(p.xyz), ones.xyz);
    s = vec4(lessThan(p, vec4(0.0)));
    p.xyz = p.xyz + (s.xyz*2.0 - 1.0) * s.www;

    return p;
}
#endif

#ifndef FNC_SNOISE
#define FNC_SNOISE
float snoise(in vec2 v) {
    const vec4 C = vec4(0.211324865405187,  
                        0.366025403784439,  
                        -0.577350269189626,  
                        0.024390243902439); 
    
    vec2 i  = floor(v + dot(v, C.yy) );
    vec2 x0 = v -   i + dot(i, C.xx);

    
    vec2 i1;
    
    
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    
    
    
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;

    
    i = mod289(i); 
    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
    + i.x + vec3(0.0, i1.x, 1.0 ));

    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
    m = m*m ;
    m = m*m ;

    
    

    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;

    
    
    m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );

    
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
}

float snoise(in vec3 v) {
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

    
    i = mod289(i);
    vec4 p = permute( permute( permute(
                i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
            + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
            + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

    
    
    float n_ = 0.142857142857; 
    vec3  ns = n_ * D.wyz - D.xzx;

    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  

    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_ );    

    vec4 x = x_ *ns.x + ns.yyyy;
    vec4 y = y_ *ns.x + ns.yyyy;
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

    
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;

    
    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                dot(p2,x2), dot(p3,x3) ) );
}

float snoise(in vec4 v) {
    const vec4  C = vec4( 0.138196601125011,  
                        0.276393202250021,  
                        0.414589803375032,  
                        -0.447213595499958); 

    
    vec4 i  = floor(v + dot(v, vec4(.309016994374947451)) ); 
    vec4 x0 = v -   i + dot(i, C.xxxx);

    

    
    vec4 i0;
    vec3 isX = step( x0.yzw, x0.xxx );
    vec3 isYZ = step( x0.zww, x0.yyz );
    
    i0.x = isX.x + isX.y + isX.z;
    i0.yzw = 1.0 - isX;
    
    i0.y += isYZ.x + isYZ.y;
    i0.zw += 1.0 - isYZ.xy;
    i0.z += isYZ.z;
    i0.w += 1.0 - isYZ.z;

    
    vec4 i3 = clamp( i0, 0.0, 1.0 );
    vec4 i2 = clamp( i0-1.0, 0.0, 1.0 );
    vec4 i1 = clamp( i0-2.0, 0.0, 1.0 );

    
    
    
    
    
    vec4 x1 = x0 - i1 + C.xxxx;
    vec4 x2 = x0 - i2 + C.yyyy;
    vec4 x3 = x0 - i3 + C.zzzz;
    vec4 x4 = x0 + C.wwww;

    
    i = mod289(i);
    float j0 = permute( permute( permute( permute(i.w) + i.z) + i.y) + i.x);
    vec4 j1 = permute( permute( permute( permute (
                i.w + vec4(i1.w, i2.w, i3.w, 1.0 ))
            + i.z + vec4(i1.z, i2.z, i3.z, 1.0 ))
            + i.y + vec4(i1.y, i2.y, i3.y, 1.0 ))
            + i.x + vec4(i1.x, i2.x, i3.x, 1.0 ));

    
    
    vec4 ip = vec4(1.0/294.0, 1.0/49.0, 1.0/7.0, 0.0) ;

    vec4 p0 = grad4(j0,   ip);
    vec4 p1 = grad4(j1.x, ip);
    vec4 p2 = grad4(j1.y, ip);
    vec4 p3 = grad4(j1.z, ip);
    vec4 p4 = grad4(j1.w, ip);

    
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;
    p4 *= taylorInvSqrt(dot(p4,p4));

    
    vec3 m0 = max(0.6 - vec3(dot(x0,x0), dot(x1,x1), dot(x2,x2)), 0.0);
    vec2 m1 = max(0.6 - vec2(dot(x3,x3), dot(x4,x4)            ), 0.0);
    m0 = m0 * m0;
    m1 = m1 * m1;
    return 49.0 * ( dot(m0*m0, vec3( dot( p0, x0 ), dot( p1, x1 ), dot( p2, x2 )))
                + dot(m1*m1, vec2( dot( p3, x3 ), dot( p4, x4 ) ) ) ) ;
}

vec2 snoise2( vec2 x ){
    float s  = snoise(vec2( x ));
    float s1 = snoise(vec2( x.y - 19.1, x.x + 47.2 ));
    return vec2( s , s1 );
}

vec3 snoise3( vec3 x ){
    float s  = snoise(vec3( x ));
    float s1 = snoise(vec3( x.y - 19.1 , x.z + 33.4 , x.x + 47.2 ));
    float s2 = snoise(vec3( x.z + 74.2 , x.x - 124.5 , x.y + 99.4 ));
    return vec3( s , s1 , s2 );
}

vec3 snoise3( vec4 x ){
    float s  = snoise(vec4( x ));
    float s1 = snoise(vec4( x.y - 19.1 , x.z + 33.4 , x.x + 47.2, x.w ));
    float s2 = snoise(vec4( x.z + 74.2 , x.x - 124.5 , x.y + 99.4, x.w ));
    return vec3( s , s1 , s2 );
}

#endif

#ifndef FNC_CURL
#define FNC_CURL

vec2 curl( vec2 p ){
    const float e = .1;
    vec2 dx = vec2( e   , 0.0 );
    vec2 dy = vec2( 0.0 , e   );

    vec2 p_x0 = snoise2( p - dx );
    vec2 p_x1 = snoise2( p + dx );
    vec2 p_y0 = snoise2( p - dy );
    vec2 p_y1 = snoise2( p + dy );

    float x = p_x1.y + p_x0.y;
    float y = p_y1.x - p_y0.x;

    const float divisor = 1.0 / ( 2.0 * e );
    return normalize( vec2(x , y) * divisor );
}

vec3 curl( vec3 p ){
    const float e = .1;
    vec3 dx = vec3( e   , 0.0 , 0.0 );
    vec3 dy = vec3( 0.0 , e   , 0.0 );
    vec3 dz = vec3( 0.0 , 0.0 , e   );

    vec3 p_x0 = snoise3( p - dx );
    vec3 p_x1 = snoise3( p + dx );
    vec3 p_y0 = snoise3( p - dy );
    vec3 p_y1 = snoise3( p + dy );
    vec3 p_z0 = snoise3( p - dz );
    vec3 p_z1 = snoise3( p + dz );

    float x = p_y1.z - p_y0.z - p_z1.y + p_z0.y;
    float y = p_z1.x - p_z0.x - p_x1.z + p_x0.z;
    float z = p_x1.y - p_x0.y - p_y1.x + p_y0.x;

    const float divisor = 1.0 / ( 2.0 * e );
    return normalize( vec3( x , y , z ) * divisor );
}

vec3 curl( vec4 p ){
    const float e = .1;
    vec4 dx = vec4( e   , 0.0 , 0.0 , 1.0 );
    vec4 dy = vec4( 0.0 , e   , 0.0 , 1.0 );
    vec4 dz = vec4( 0.0 , 0.0 , e   , 1.0 );

    vec3 p_x0 = snoise3( p - dx );
    vec3 p_x1 = snoise3( p + dx );
    vec3 p_y0 = snoise3( p - dy );
    vec3 p_y1 = snoise3( p + dy );
    vec3 p_z0 = snoise3( p - dz );
    vec3 p_z1 = snoise3( p + dz );

    float x = p_y1.z - p_y0.z - p_z1.y + p_z0.y;
    float y = p_z1.x - p_z0.x - p_x1.z + p_x0.z;
    float z = p_x1.y - p_x0.y - p_y1.x + p_y0.x;

    const float divisor = 1.0 / ( 2.0 * e );
    return normalize( vec3( x , y , z ) * divisor );
}

#endif
#ifndef RANDOM_SCALE
#if defined(RANDOM_HIGHER_RANGE)
#define RANDOM_SCALE vec4(.1031, .1030, .0973, .1099)
#else
#define RANDOM_SCALE vec4(443.897, 441.423, .0973, .1099)
#endif
#endif

#ifndef FNC_RANDOM
#define FNC_RANDOM
float random(in float x) {
#if defined(RANDOM_SINLESS)
    return fract(sin(x) * 43758.5453);
#else
    x = fract(x * RANDOM_SCALE.x);
    x *= x + 33.33;
    x *= x + x;
    return fract(x);
#endif
}

float random(in vec2 st) {
#if defined(RANDOM_SINLESS)
    vec3 p3  = fract(vec3(st.xyx) * RANDOM_SCALE.xyz);
    p3 += dot(p3, p3.yzx + 33.33);
    return fract((p3.x + p3.y) * p3.z);
#else
    return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453);
#endif
}

float random(in vec3 pos) {
#if defined(RANDOM_SINLESS)
    pos  = fract(pos * RANDOM_SCALE.xyz);
    pos += dot(pos, pos.zyx + 31.32);
    return fract((pos.x + pos.y) * pos.z);
#else
    return fract(sin(dot(pos.xyz, vec3(70.9898, 78.233, 32.4355))) * 43758.5453123);
#endif
}

float random(in vec4 pos) {
#if defined(RANDOM_SINLESS)
    pos = fract(pos * RANDOM_SCALE);
    pos += dot(pos, pos.wzxy+33.33);
    return fract((pos.x + pos.y) * (pos.z + pos.w));
#else
    float dot_product = dot(pos, vec4(12.9898,78.233,45.164,94.673));
    return fract(sin(dot_product) * 43758.5453);
#endif
}

vec2 random2(float p) {
    vec3 p3 = fract(vec3(p) * RANDOM_SCALE.xyz);
    p3 += dot(p3, p3.yzx + 19.19);
    return fract((p3.xx + p3.yz) * p3.zy);
}

vec2 random2(vec2 p) {
    vec3 p3 = fract(p.xyx * RANDOM_SCALE.xyz);
    p3 += dot(p3, p3.yzx + 19.19);
    return fract((p3.xx + p3.yz) * p3.zy);
}

vec2 random2(vec3 p3) {
    p3 = fract(p3 * RANDOM_SCALE.xyz);
    p3 += dot(p3, p3.yzx + 19.19);
    return fract((p3.xx + p3.yz) * p3.zy);
}

vec3 random3(float p) {
    vec3 p3 = fract(vec3(p) * RANDOM_SCALE.xyz);
    p3 += dot(p3, p3.yzx + 19.19);
    return fract((p3.xxy + p3.yzz) * p3.zyx); 
}

vec3 random3(vec2 p) {
    vec3 p3 = fract(vec3(p.xyx) * RANDOM_SCALE.xyz);
    p3 += dot(p3, p3.yxz + 19.19);
    return fract((p3.xxy + p3.yzz) * p3.zyx);
}

vec3 random3(vec3 p) {
    p = fract(p * RANDOM_SCALE.xyz);
    p += dot(p, p.yxz + 19.19);
    return fract((p.xxy + p.yzz) * p.zyx);
}

vec4 random4(float p) {
    vec4 p4 = fract(p * RANDOM_SCALE);
    p4 += dot(p4, p4.wzxy + 19.19);
    return fract((p4.xxyz + p4.yzzw) * p4.zywx);   
}

vec4 random4(vec2 p) {
    vec4 p4 = fract(p.xyxy * RANDOM_SCALE);
    p4 += dot(p4, p4.wzxy + 19.19);
    return fract((p4.xxyz + p4.yzzw) * p4.zywx);
}

vec4 random4(vec3 p) {
    vec4 p4 = fract(p.xyzx  * RANDOM_SCALE);
    p4 += dot(p4, p4.wzxy + 19.19);
    return fract((p4.xxyz + p4.yzzw) * p4.zywx);
}

vec4 random4(vec4 p4) {
    p4 = fract(p4  * RANDOM_SCALE);
    p4 += dot(p4, p4.wzxy + 19.19);
    return fract((p4.xxyz + p4.yzzw) * p4.zywx);
}

#endif

#ifndef FNC_WORLEY
#define FNC_WORLEY

float worley(vec2 p){
    vec2 n = floor( p );
    vec2 f = fract( p );

    float dis = 1.0;
    for( int j= -1; j <= 1; j++ )
        for( int i=-1; i <= 1; i++ ) {	
                vec2  g = vec2(i,j);
                vec2  o = random2( n + g );
                vec2  delta = g + o - f;
                float d = length(delta);
                dis = min(dis,d);
    }

    return 1.0-dis;
}

float worley(vec3 p) {
    vec3 n = floor( p );
    vec3 f = fract( p );

    float dis = 1.0;
    for( int k = -1; k <= 1; k++ )
        for( int j= -1; j <= 1; j++ )
            for( int i=-1; i <= 1; i++ ) {	
                vec3  g = vec3(i,j,k);
                vec3  o = random3( n + g );
                vec3  delta = g+o-f;
                float d = length(delta);
                dis = min(dis,d);
    }

    return 1.0-dis;
}

#endif
#ifndef FNC_HIGHPASS
#define FNC_HIGHPASS

float highPass(in float value, in float bias) { return max(value - bias, 0.0) / (1.0 - bias); }

#endif
#ifndef QTR_PI
#define QTR_PI 0.78539816339
#endif
#ifndef HALF_PI
#define HALF_PI 1.5707963267948966192313216916398
#endif
#ifndef PI
#define PI 3.1415926535897932384626433832795
#endif
#ifndef TWO_PI
#define TWO_PI 6.2831853071795864769252867665590
#endif
#ifndef TAU
#define TAU 6.2831853071795864769252867665590
#endif
#ifndef ONE_OVER_PI
#define ONE_OVER_PI 0.31830988618
#endif
#ifndef SQRT_HALF_PI
#define SQRT_HALF_PI 1.25331413732
#endif
#ifndef PHI
#define PHI 1.618033988749894848204586834
#endif
#ifndef EPSILON
#define EPSILON 0.0000001
#endif
#ifndef GOLDEN_RATIO
#define GOLDEN_RATIO 1.6180339887
#endif
#ifndef GOLDEN_RATIO_CONJUGATE 
#define GOLDEN_RATIO_CONJUGATE 0.61803398875
#endif
#ifndef GOLDEN_ANGLE 
#define GOLDEN_ANGLE 2.39996323
#endif

#ifndef FNC_PALETTE
#define FNC_PALETTE
vec3 palette (in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d) {
    return a + b * cos(TAU * ( c * t + d ));
}

vec4 palette (in float t, in vec4 a, in vec4 b, in vec4 c, in vec4 d) {
    return a + b * cos(TAU * ( c * t + d ));
}
#endif

void main() {
    vec4 final = vec4(1.0, 0.0, 0.0, 1.0);

    vec2 uv = gl_FragCoord.xy / resolution * vec2(resolution.x / resolution.y, 1.0);
    float t = time * 0.025 ;

    vec3 c = curl(vec3(uv * 2.0, time * ((uAudioLevel/7.0)+0.5) *0.05));
    float w = worley(vec3(uv * 20.0 * c.yz + c.x, c.x));
    vec3 v = voronoi(uv * 2.0, w * length(c) * c.r + t);
    vec3 p = palette(v.b * 2.0,
    vec3(0.7, sin(t * 1.1) * 0.02, sin(clamp(t * 0.002, 0.0, 1.0))),
    vec3(cos(t*0.02), cos(clamp(t * 0.07 * abs(clamp(uMouse.x, 0.0, 1.0) * uAudioLevel), 0.0, 1.0)), cos(t * 1.2)),
    vec3(sin(t), sin(clamp(t * 0.7, 0.0, 1.0)), 0.3),
    vec3(sin(t*abs(uMouse.x * 0.5)*0.2), cos(clamp(t * abs(clamp(uMouse.y, 0.0, 1.0) * 0.5) * 0.7, 0.0, 1.0)), cos(t * 0.9)));
    final.r = smoothstep(0.9, 0.91, length(v));
    final.rgb = mix(vec3(0.2) - p, p, final.r);
    gl_FragColor = final;
}`;function Wh(){return Wh=Object.assign?Object.assign.bind():function(s){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(s[n]=t[n])}return s},Wh.apply(this,arguments)}function Nl(s,e,t){return Math.max(s,Math.min(e,t))}class fE{advance(e){var t;if(!this.isRunning)return;let n=!1;if(this.lerp)this.value=(i=this.value,r=this.to,(1-(a=1-Math.exp(-60*this.lerp*e)))*i+a*r),Math.round(this.value)===this.to&&(this.value=this.to,n=!0);else{this.currentTime+=e;const o=Nl(0,this.currentTime/this.duration,1);n=o>=1;const c=n?1:this.easing(o);this.value=this.from+(this.to-this.from)*c}var i,r,a;(t=this.onUpdate)==null||t.call(this,this.value,n),n&&this.stop()}stop(){this.isRunning=!1}fromTo(e,t,{lerp:n=.1,duration:i=1,easing:r=c=>c,onStart:a,onUpdate:o}){this.from=this.value=e,this.to=t,this.lerp=n,this.duration=i,this.easing=r,this.currentTime=0,this.isRunning=!0,a==null||a(),this.onUpdate=o}}class pE{constructor({wrapper:e,content:t,autoResize:n=!0}={}){if(this.resize=()=>{this.onWrapperResize(),this.onContentResize()},this.onWrapperResize=()=>{this.wrapper===window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)},this.onContentResize=()=>{this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth},this.wrapper=e,this.content=t,n){const i=function(r,a){let o;return function(){let c=arguments,l=this;clearTimeout(o),o=setTimeout(function(){r.apply(l,c)},250)}}(this.resize);this.wrapper!==window&&(this.wrapperResizeObserver=new ResizeObserver(i),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(i),this.contentResizeObserver.observe(this.content)}this.resize()}destroy(){var e,t;(e=this.wrapperResizeObserver)==null||e.disconnect(),(t=this.contentResizeObserver)==null||t.disconnect()}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}}class ig{constructor(){this.events={}}emit(e,...t){let n=this.events[e]||[];for(let i=0,r=n.length;i<r;i++)n[i](...t)}on(e,t){var n;return(n=this.events[e])!=null&&n.push(t)||(this.events[e]=[t]),()=>{var i;this.events[e]=(i=this.events[e])==null?void 0:i.filter(r=>t!==r)}}off(e,t){var n;this.events[e]=(n=this.events[e])==null?void 0:n.filter(i=>t!==i)}destroy(){this.events={}}}class mE{constructor(e,{wheelMultiplier:t=1,touchMultiplier:n=2,normalizeWheel:i=!1}){this.onTouchStart=r=>{const{clientX:a,clientY:o}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=a,this.touchStart.y=o,this.lastDelta={x:0,y:0}},this.onTouchMove=r=>{const{clientX:a,clientY:o}=r.targetTouches?r.targetTouches[0]:r,c=-(a-this.touchStart.x)*this.touchMultiplier,l=-(o-this.touchStart.y)*this.touchMultiplier;this.touchStart.x=a,this.touchStart.y=o,this.lastDelta={x:c,y:l},this.emitter.emit("scroll",{deltaX:c,deltaY:l,event:r})},this.onTouchEnd=r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})},this.onWheel=r=>{let{deltaX:a,deltaY:o}=r;this.normalizeWheel&&(a=Nl(-100,a,100),o=Nl(-100,o,100)),a*=this.wheelMultiplier,o*=this.wheelMultiplier,this.emitter.emit("scroll",{deltaX:a,deltaY:o,event:r})},this.element=e,this.wheelMultiplier=t,this.touchMultiplier=n,this.normalizeWheel=i,this.touchStart={x:null,y:null},this.emitter=new ig,this.element.addEventListener("wheel",this.onWheel,{passive:!1}),this.element.addEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.addEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.addEventListener("touchend",this.onTouchEnd,{passive:!1})}on(e,t){return this.emitter.on(e,t)}destroy(){this.emitter.destroy(),this.element.removeEventListener("wheel",this.onWheel,{passive:!1}),this.element.removeEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.removeEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.removeEventListener("touchend",this.onTouchEnd,{passive:!1})}}class _E{constructor({wrapper:e=window,content:t=document.documentElement,wheelEventsTarget:n=e,eventsTarget:i=n,smoothWheel:r=!0,smoothTouch:a=!1,syncTouch:o=!1,syncTouchLerp:c=.1,__iosNoInertiaSyncTouchLerp:l=.4,touchInertiaMultiplier:u=35,duration:h,easing:d=v=>Math.min(1,1.001-Math.pow(2,-10*v)),lerp:f=!h&&.1,infinite:_=!1,orientation:m="vertical",gestureOrientation:g="vertical",touchMultiplier:p=1,wheelMultiplier:S=1,normalizeWheel:y=!1,autoResize:T=!0}={}){this.onVirtualScroll=({deltaX:v,deltaY:M,event:E})=>{if(E.ctrlKey)return;const b=E.type.includes("touch"),x=E.type.includes("wheel");if(this.options.gestureOrientation==="both"&&v===0&&M===0||this.options.gestureOrientation==="vertical"&&M===0||this.options.gestureOrientation==="horizontal"&&v===0||b&&this.options.gestureOrientation==="vertical"&&this.scroll===0&&!this.options.infinite&&M<=0)return;let w=E.composedPath();if(w=w.slice(0,w.indexOf(this.rootElement)),w.find(N=>{var k;return(N.hasAttribute==null?void 0:N.hasAttribute("data-lenis-prevent"))||b&&(N.hasAttribute==null?void 0:N.hasAttribute("data-lenis-prevent-touch"))||x&&(N.hasAttribute==null?void 0:N.hasAttribute("data-lenis-prevent-wheel"))||((k=N.classList)==null?void 0:k.contains("lenis"))}))return;if(this.isStopped||this.isLocked)return void E.preventDefault();if(this.isSmooth=(this.options.smoothTouch||this.options.syncTouch)&&b||this.options.smoothWheel&&x,!this.isSmooth)return this.isScrolling=!1,void this.animate.stop();E.preventDefault();let F=M;this.options.gestureOrientation==="both"?F=Math.abs(M)>Math.abs(v)?M:v:this.options.gestureOrientation==="horizontal"&&(F=v);const R=b&&this.options.syncTouch,L=b&&E.type==="touchend"&&Math.abs(F)>1;L&&(F=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+F,Wh({programmatic:!1},R&&{lerp:L?this.syncTouchLerp:this.options.__iosNoInertiaSyncTouchLerp}))},this.onScroll=()=>{if(!this.isScrolling){const v=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.velocity=0,this.direction=Math.sign(this.animatedScroll-v),this.emit()}},window.lenisVersion="1.0.27",e!==document.documentElement&&e!==document.body||(e=window),this.options={wrapper:e,content:t,wheelEventsTarget:n,eventsTarget:i,smoothWheel:r,smoothTouch:a,syncTouch:o,syncTouchLerp:c,__iosNoInertiaSyncTouchLerp:l,touchInertiaMultiplier:u,duration:h,easing:d,lerp:f,infinite:_,gestureOrientation:g,orientation:m,touchMultiplier:p,wheelMultiplier:S,normalizeWheel:y,autoResize:T},this.animate=new fE,this.emitter=new ig,this.dimensions=new pE({wrapper:e,content:t,autoResize:T}),this.toggleClass("lenis",!0),this.velocity=0,this.isLocked=!1,this.isStopped=!1,this.isSmooth=o||r||a,this.isScrolling=!1,this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onScroll,{passive:!1}),this.virtualScroll=new mE(i,{touchMultiplier:p,wheelMultiplier:S,normalizeWheel:y}),this.virtualScroll.on("scroll",this.onVirtualScroll)}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onScroll,{passive:!1}),this.virtualScroll.destroy(),this.dimensions.destroy(),this.toggleClass("lenis",!1),this.toggleClass("lenis-smooth",!1),this.toggleClass("lenis-scrolling",!1),this.toggleClass("lenis-stopped",!1),this.toggleClass("lenis-locked",!1)}on(e,t){return this.emitter.on(e,t)}off(e,t){return this.emitter.off(e,t)}setScroll(e){this.isHorizontal?this.rootElement.scrollLeft=e:this.rootElement.scrollTop=e}resize(){this.dimensions.resize()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.velocity=0,this.animate.stop()}start(){this.isStopped=!1,this.reset()}stop(){this.isStopped=!0,this.animate.stop(),this.reset()}raf(e){const t=e-(this.time||e);this.time=e,this.animate.advance(.001*t)}scrollTo(e,{offset:t=0,immediate:n=!1,lock:i=!1,duration:r=this.options.duration,easing:a=this.options.easing,lerp:o=!r&&this.options.lerp,onComplete:c=null,force:l=!1,programmatic:u=!0}={}){if(!this.isStopped&&!this.isLocked||l){if(["top","left","start"].includes(e))e=0;else if(["bottom","right","end"].includes(e))e=this.limit;else{var h;let d;if(typeof e=="string"?d=document.querySelector(e):(h=e)!=null&&h.nodeType&&(d=e),d){if(this.options.wrapper!==window){const _=this.options.wrapper.getBoundingClientRect();t-=this.isHorizontal?_.left:_.top}const f=d.getBoundingClientRect();e=(this.isHorizontal?f.left:f.top)+this.animatedScroll}}if(typeof e=="number"){if(e+=t,e=Math.round(e),this.options.infinite?u&&(this.targetScroll=this.animatedScroll=this.scroll):e=Nl(0,e,this.limit),n)return this.animatedScroll=this.targetScroll=e,this.setScroll(this.scroll),this.reset(),void(c==null||c(this));if(!u){if(e===this.targetScroll)return;this.targetScroll=e}this.animate.fromTo(this.animatedScroll,e,{duration:r,easing:a,lerp:o,onStart:()=>{i&&(this.isLocked=!0),this.isScrolling=!0},onUpdate:(d,f)=>{this.isScrolling=!0,this.velocity=d-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=d,this.setScroll(this.scroll),u&&(this.targetScroll=d),f||this.emit(),f&&requestAnimationFrame(()=>{this.reset(),this.emit(),c==null||c(this)})}})}}}get rootElement(){return this.options.wrapper===window?this.options.content:this.options.wrapper}get limit(){return this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop}get scroll(){return this.options.infinite?(this.animatedScroll%(e=this.limit)+e)%e:this.animatedScroll;var e}get progress(){return this.limit===0?1:this.scroll/this.limit}get isSmooth(){return this.__isSmooth}set isSmooth(e){this.__isSmooth!==e&&(this.__isSmooth=e,this.toggleClass("lenis-smooth",e))}get isScrolling(){return this.__isScrolling}set isScrolling(e){this.__isScrolling!==e&&(this.__isScrolling=e,this.toggleClass("lenis-scrolling",e))}get isStopped(){return this.__isStopped}set isStopped(e){this.__isStopped!==e&&(this.__isStopped=e,this.toggleClass("lenis-stopped",e))}get isLocked(){return this.__isLocked}set isLocked(e){this.__isLocked!==e&&(this.__isLocked=e,this.toggleClass("lenis-locked",e))}get className(){let e="lenis";return this.isStopped&&(e+=" lenis-stopped"),this.isLocked&&(e+=" lenis-locked"),this.isScrolling&&(e+=" lenis-scrolling"),this.isSmooth&&(e+=" lenis-smooth"),e}toggleClass(e,t){this.rootElement.classList.toggle(e,t),this.emitter.emit("className change",this)}}function gs(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function sg(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var ui={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ko={duration:.5,overwrite:!1,delay:0},Pd,gn,Dt,yi=1e8,vt=1/yi,Hh=Math.PI*2,gE=Hh/4,vE=0,rg=Math.sqrt,xE=Math.cos,yE=Math.sin,sn=function(e){return typeof e=="string"},Ft=function(e){return typeof e=="function"},Ds=function(e){return typeof e=="number"},Ld=function(e){return typeof e>"u"},is=function(e){return typeof e=="object"},Bn=function(e){return e!==!1},Fd=function(){return typeof window<"u"},il=function(e){return Ft(e)||sn(e)},og=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},vn=Array.isArray,qh=/(?:-?\.?\d|\.)+/gi,ag=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Po=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,fh=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,cg=/[+-]=-?[.\d]+/,lg=/[^,'"\[\]\s]+/gi,SE=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Rt,qi,Xh,Nd,di={},Il={},ug,hg=function(e){return(Il=Xr(e,di))&&qn},Id=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},sc=function(e,t){return!t&&console.warn(e)},dg=function(e,t){return e&&(di[e]=t)&&Il&&(Il[e]=t)||di},rc=function(){return 0},TE={suppressEvents:!0,isStart:!0,kill:!1},Tl={suppressEvents:!0,kill:!1},ME={suppressEvents:!0},Od={},js=[],Yh={},fg,ei={},ph={},vm=30,Ml=[],Ud="",kd=function(e){var t=e[0],n,i;if(is(t)||Ft(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Ml.length;i--&&!Ml[i].targetTest(t););n=Ml[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Ug(e[i],n)))||e.splice(i,1);return e},Nr=function(e){return e._gsap||kd(Si(e))[0]._gsap},pg=function(e,t,n){return(n=e[t])&&Ft(n)?e[t]():Ld(n)&&e.getAttribute&&e.getAttribute(t)||n},Vn=function(e,t){return(e=e.split(",")).forEach(t)||e},Ut=function(e){return Math.round(e*1e5)/1e5||0},tn=function(e){return Math.round(e*1e7)/1e7||0},Bo=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},EE=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Ol=function(){var e=js.length,t=js.slice(0),n,i;for(Yh={},js.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},mg=function(e,t,n,i){js.length&&!gn&&Ol(),e.render(t,n,i||gn&&t<0&&(e._initted||e._startAt)),js.length&&!gn&&Ol()},_g=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(lg).length<2?t:sn(e)?e.trim():e},gg=function(e){return e},wi=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},wE=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Xr=function(e,t){for(var n in t)e[n]=t[n];return e},xm=function s(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=is(t[n])?s(e[n]||(e[n]={}),t[n]):t[n]);return e},Ul=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Va=function(e){var t=e.parent||Rt,n=e.keyframes?wE(vn(e.keyframes)):wi;if(Bn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},bE=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},vg=function(e,t,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=e[i],o;if(r)for(o=t[r];a&&a[r]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},du=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,a=t._next;r?r._next=a:e[n]===t&&(e[n]=a),a?a._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},Qs=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Ir=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},DE=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},jh=function(e,t,n,i){return e._startAt&&(gn?e._startAt.revert(Tl):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},AE=function s(e){return!e||e._ts&&s(e.parent)},ym=function(e){return e._repeat?Jo(e._tTime,e=e.duration()+e._rDelay)*e:0},Jo=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},kl=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},fu=function(e){return e._end=tn(e._start+(e._tDur/Math.abs(e._ts||e._rts||vt)||0))},pu=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=tn(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),fu(e),n._dirty||Ir(n,e)),e},xg=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=kl(e.rawTime(),t),(!t._dur||yc(0,t.totalDuration(),n)-t._tTime>vt)&&t.render(n,!0)),Ir(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-vt}},ji=function(e,t,n,i){return t.parent&&Qs(t),t._start=tn((Ds(n)?n:n||e!==Rt?pi(e,n,t):e._time)+t._delay),t._end=tn(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),vg(e,t,"_first","_last",e._sort?"_start":0),$h(t)||(e._recent=t),i||xg(e,t),e._ts<0&&pu(e,e._tTime),e},yg=function(e,t){return(di.ScrollTrigger||Id("scrollTrigger",t))&&di.ScrollTrigger.create(t,e)},Sg=function(e,t,n,i,r){if(Bd(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!gn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&fg!==ni.frame)return js.push(e),e._lazy=[r,i],1},CE=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},$h=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},RE=function(e,t,n,i){var r=e.ratio,a=t<0||!t&&(!e._start&&CE(e)&&!(!e._initted&&$h(e))||(e._ts<0||e._dp._ts<0)&&!$h(e))?0:1,o=e._rDelay,c=0,l,u,h;if(o&&e._repeat&&(c=yc(0,e._tDur,t),u=Jo(c,o),e._yoyo&&u&1&&(a=1-a),u!==Jo(e._tTime,o)&&(r=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==r||gn||i||e._zTime===vt||!t&&e._zTime){if(!e._initted&&Sg(e,t,i,n,c))return;for(h=e._zTime,e._zTime=t||(n?vt:0),n||(n=t&&!h),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=c,l=e._pt;l;)l.r(a,l.d),l=l._next;t<0&&jh(e,t,n,!0),e._onUpdate&&!n&&si(e,"onUpdate"),c&&e._repeat&&!n&&e.parent&&si(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Qs(e,1),!n&&!gn&&(si(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},PE=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Qo=function(e,t,n,i){var r=e._repeat,a=tn(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=r?r<0?1e10:tn(a*(r+1)+e._rDelay*r):a,o>0&&!i&&pu(e,e._tTime=e._tDur*o),e.parent&&fu(e),n||Ir(e.parent,e),e},Sm=function(e){return e instanceof Rn?Ir(e):Qo(e,e._dur)},LE={_start:0,endTime:rc,totalDuration:rc},pi=function s(e,t,n){var i=e.labels,r=e._recent||LE,a=e.duration()>=yi?r.endTime(!1):e._dur,o,c,l;return sn(t)&&(isNaN(t)||t in i)?(c=t.charAt(0),l=t.substr(-1)==="%",o=t.indexOf("="),c==="<"||c===">"?(o>=0&&(t=t.replace(/=/,"")),(c==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(l?(o<0?r:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(c=parseFloat(t.charAt(o-1)+t.substr(o+1)),l&&n&&(c=c/100*(vn(n)?n[0]:n).totalDuration()),o>1?s(e,t.substr(0,o-1),n)+c:a+c)):t==null?a:+t},Ga=function(e,t,n){var i=Ds(t[1]),r=(i?2:1)+(e<2?0:1),a=t[r],o,c;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,c=n;c&&!("immediateRender"in o);)o=c.vars.defaults||{},c=Bn(c.vars.inherit)&&c.parent;a.immediateRender=Bn(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[r-1]}return new Ht(t[0],a,t[r+1])},ar=function(e,t){return e||e===0?t(e):t},yc=function(e,t,n){return n<e?e:n>t?t:n},_n=function(e,t){return!sn(e)||!(t=SE.exec(e))?"":t[1]},FE=function(e,t,n){return ar(n,function(i){return yc(e,t,i)})},Zh=[].slice,Tg=function(e,t){return e&&is(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&is(e[0]))&&!e.nodeType&&e!==qi},NE=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return sn(i)&&!t||Tg(i,1)?(r=n).push.apply(r,Si(i)):n.push(i)})||n},Si=function(e,t,n){return Dt&&!t&&Dt.selector?Dt.selector(e):sn(e)&&!n&&(Xh||!ea())?Zh.call((t||Nd).querySelectorAll(e),0):vn(e)?NE(e,n):Tg(e)?Zh.call(e,0):e?[e]:[]},Kh=function(e){return e=Si(e)[0]||sc("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Si(t,n.querySelectorAll?n:n===e?sc("Invalid scope")||Nd.createElement("div"):e)}},Mg=function(e){return e.sort(function(){return .5-Math.random()})},Eg=function(e){if(Ft(e))return e;var t=is(e)?e:{each:e},n=Or(t.ease),i=t.from||0,r=parseFloat(t.base)||0,a={},o=i>0&&i<1,c=isNaN(i)||o,l=t.axis,u=i,h=i;return sn(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!o&&c&&(u=i[0],h=i[1]),function(d,f,_){var m=(_||t).length,g=a[m],p,S,y,T,v,M,E,b,x;if(!g){if(x=t.grid==="auto"?0:(t.grid||[1,yi])[1],!x){for(E=-yi;E<(E=_[x++].getBoundingClientRect().left)&&x<m;);x<m&&x--}for(g=a[m]=[],p=c?Math.min(x,m)*u-.5:i%x,S=x===yi?0:c?m*h/x-.5:i/x|0,E=0,b=yi,M=0;M<m;M++)y=M%x-p,T=S-(M/x|0),g[M]=v=l?Math.abs(l==="y"?T:y):rg(y*y+T*T),v>E&&(E=v),v<b&&(b=v);i==="random"&&Mg(g),g.max=E-b,g.min=b,g.v=m=(parseFloat(t.amount)||parseFloat(t.each)*(x>m?m-1:l?l==="y"?m/x:x:Math.max(x,m/x))||0)*(i==="edges"?-1:1),g.b=m<0?r-m:r,g.u=_n(t.amount||t.each)||0,n=n&&m<0?Ng(n):n}return m=(g[d]-g.min)/g.max||0,tn(g.b+(n?n(m):m)*g.v)+g.u}},Jh=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=tn(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Ds(n)?0:_n(n))}},wg=function(e,t){var n=vn(e),i,r;return!n&&is(e)&&(i=n=e.radius||yi,e.values?(e=Si(e.values),(r=!Ds(e[0]))&&(i*=i)):e=Jh(e.increment)),ar(t,n?Ft(e)?function(a){return r=e(a),Math.abs(r-a)<=i?r:a}:function(a){for(var o=parseFloat(r?a.x:a),c=parseFloat(r?a.y:0),l=yi,u=0,h=e.length,d,f;h--;)r?(d=e[h].x-o,f=e[h].y-c,d=d*d+f*f):d=Math.abs(e[h]-o),d<l&&(l=d,u=h);return u=!i||l<=i?e[u]:a,r||u===a||Ds(a)?u:u+_n(a)}:Jh(e))},bg=function(e,t,n,i){return ar(vn(e)?!t:n===!0?!!(n=0):!i,function(){return vn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},IE=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,a){return a(r)},i)}},OE=function(e,t){return function(n){return e(parseFloat(n))+(t||_n(n))}},UE=function(e,t,n){return Ag(e,t,0,1,n)},Dg=function(e,t,n){return ar(n,function(i){return e[~~t(i)]})},kE=function s(e,t,n){var i=t-e;return vn(e)?Dg(e,s(0,e.length),t):ar(n,function(r){return(i+(r-e)%i)%i+e})},zE=function s(e,t,n){var i=t-e,r=i*2;return vn(e)?Dg(e,s(0,e.length-1),t):ar(n,function(a){return a=(r+(a-e)%r)%r||0,e+(a>i?r-a:a)})},oc=function(e){for(var t=0,n="",i,r,a,o;~(i=e.indexOf("random(",t));)a=e.indexOf(")",i),o=e.charAt(i+7)==="[",r=e.substr(i+7,a-i-7).match(o?lg:qh),n+=e.substr(t,i-t)+bg(o?r:+r[0],o?0:+r[1],+r[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},Ag=function(e,t,n,i,r){var a=t-e,o=i-n;return ar(r,function(c){return n+((c-e)/a*o||0)})},BE=function s(e,t,n,i){var r=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!r){var a=sn(e),o={},c,l,u,h,d;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(vn(e)&&!vn(t)){for(u=[],h=e.length,d=h-2,l=1;l<h;l++)u.push(s(e[l-1],e[l]));h--,r=function(_){_*=h;var m=Math.min(d,~~_);return u[m](_-m)},n=t}else i||(e=Xr(vn(e)?[]:{},e));if(!u){for(c in t)zd.call(o,e,c,"get",t[c]);r=function(_){return Wd(_,o)||(a?e.p:e)}}}return ar(n,r)},Tm=function(e,t,n){var i=e.labels,r=yi,a,o,c;for(a in i)o=i[a]-t,o<0==!!n&&o&&r>(o=Math.abs(o))&&(c=a,r=o);return c},si=function(e,t,n){var i=e.vars,r=i[t],a=Dt,o=e._ctx,c,l,u;if(r)return c=i[t+"Params"],l=i.callbackScope||e,n&&js.length&&Ol(),o&&(Dt=o),u=c?r.apply(l,c):r.call(l),Dt=a,u},Ra=function(e){return Qs(e),e.scrollTrigger&&e.scrollTrigger.kill(!!gn),e.progress()<1&&si(e,"onInterrupt"),e},Lo,Cg=[],Rg=function(e){if(e)if(e=!e.name&&e.default||e,Fd()||e.headless){var t=e.name,n=Ft(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:rc,render:Wd,add:zd,kill:nw,modifier:tw,rawVars:0},a={targetTest:0,get:0,getSetter:Gd,aliases:{},register:0};if(ea(),e!==i){if(ei[t])return;wi(i,wi(Ul(e,r),a)),Xr(i.prototype,Xr(r,Ul(e,a))),ei[i.prop=t]=i,e.targetTest&&(Ml.push(i),Od[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}dg(t,i),e.register&&e.register(qn,i,Gn)}else Cg.push(e)},pt=255,Pa={aqua:[0,pt,pt],lime:[0,pt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,pt],navy:[0,0,128],white:[pt,pt,pt],olive:[128,128,0],yellow:[pt,pt,0],orange:[pt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[pt,0,0],pink:[pt,192,203],cyan:[0,pt,pt],transparent:[pt,pt,pt,0]},mh=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*pt+.5|0},Pg=function(e,t,n){var i=e?Ds(e)?[e>>16,e>>8&pt,e&pt]:0:Pa.black,r,a,o,c,l,u,h,d,f,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Pa[e])i=Pa[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+r+r+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&pt,i&pt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&pt,e&pt]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match(qh),!t)c=+i[0]%360/360,l=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(l+1):u+l-u*l,r=u*2-a,i.length>3&&(i[3]*=1),i[0]=mh(c+1/3,r,a),i[1]=mh(c,r,a),i[2]=mh(c-1/3,r,a);else if(~e.indexOf("="))return i=e.match(ag),n&&i.length<4&&(i[3]=1),i}else i=e.match(qh)||Pa.transparent;i=i.map(Number)}return t&&!_&&(r=i[0]/pt,a=i[1]/pt,o=i[2]/pt,h=Math.max(r,a,o),d=Math.min(r,a,o),u=(h+d)/2,h===d?c=l=0:(f=h-d,l=u>.5?f/(2-h-d):f/(h+d),c=h===r?(a-o)/f+(a<o?6:0):h===a?(o-r)/f+2:(r-a)/f+4,c*=60),i[0]=~~(c+.5),i[1]=~~(l*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Lg=function(e){var t=[],n=[],i=-1;return e.split($s).forEach(function(r){var a=r.match(Po)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},Mm=function(e,t,n){var i="",r=(e+i).match($s),a=t?"hsla(":"rgba(",o=0,c,l,u,h;if(!r)return e;if(r=r.map(function(d){return(d=Pg(d,t,1))&&a+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=Lg(e),c=n.c,c.join(i)!==u.c.join(i)))for(l=e.replace($s,"1").split(Po),h=l.length-1;o<h;o++)i+=l[o]+(~c.indexOf(o)?r.shift()||a+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!l)for(l=e.split($s),h=l.length-1;o<h;o++)i+=l[o]+r[o];return i+l[h]},$s=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Pa)s+="|"+e+"\\b";return new RegExp(s+")","gi")}(),VE=/hsl[a]?\(/,Fg=function(e){var t=e.join(" "),n;if($s.lastIndex=0,$s.test(t))return n=VE.test(t),e[1]=Mm(e[1],n),e[0]=Mm(e[0],n,Lg(e[1])),!0},ac,ni=function(){var s=Date.now,e=500,t=33,n=s(),i=n,r=1e3/240,a=r,o=[],c,l,u,h,d,f,_=function m(g){var p=s()-i,S=g===!0,y,T,v,M;if((p>e||p<0)&&(n+=p-t),i+=p,v=i-n,y=v-a,(y>0||S)&&(M=++h.frame,d=v-h.time*1e3,h.time=v=v/1e3,a+=y+(y>=r?4:r-y),T=1),S||(c=l(m)),T)for(f=0;f<o.length;f++)o[f](v,d,M,g)};return h={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(g){return d/(1e3/(g||60))},wake:function(){ug&&(!Xh&&Fd()&&(qi=Xh=window,Nd=qi.document||{},di.gsap=qn,(qi.gsapVersions||(qi.gsapVersions=[])).push(qn.version),hg(Il||qi.GreenSockGlobals||!qi.gsap&&qi||{}),Cg.forEach(Rg)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&h.sleep(),l=u||function(g){return setTimeout(g,a-h.time*1e3+1|0)},ac=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(c),ac=0,l=rc},lagSmoothing:function(g,p){e=g||1/0,t=Math.min(p||33,e)},fps:function(g){r=1e3/(g||240),a=h.time*1e3+r},add:function(g,p,S){var y=p?function(T,v,M,E){g(T,v,M,E),h.remove(y)}:g;return h.remove(g),o[S?"unshift":"push"](y),ea(),y},remove:function(g,p){~(p=o.indexOf(g))&&o.splice(p,1)&&f>=p&&f--},_listeners:o},h}(),ea=function(){return!ac&&ni.wake()},ct={},GE=/^[\d.\-M][\d.\-,\s]/,WE=/["']/g,HE=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,a=n.length,o,c,l;r<a;r++)c=n[r],o=r!==a-1?c.lastIndexOf(","):c.length,l=c.substr(0,o),t[i]=isNaN(l)?l.replace(WE,"").trim():+l,i=c.substr(o+1).trim();return t},qE=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},XE=function(e){var t=(e+"").split("("),n=ct[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[HE(t[1])]:qE(e).split(",").map(_g)):ct._CE&&GE.test(e)?ct._CE("",e):n},Ng=function(e){return function(t){return 1-e(1-t)}},Ig=function s(e,t){for(var n=e._first,i;n;)n instanceof Rn?s(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?s(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Or=function(e,t){return e&&(Ft(e)?e:ct[e]||XE(e))||t},to=function(e,t,n,i){n===void 0&&(n=function(c){return 1-t(1-c)}),i===void 0&&(i=function(c){return c<.5?t(c*2)/2:1-t((1-c)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},a;return Vn(e,function(o){ct[o]=di[o]=r,ct[a=o.toLowerCase()]=n;for(var c in r)ct[a+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=ct[o+"."+c]=r[c]}),r},Og=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},_h=function s(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),a=r/Hh*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*yE((u-a)*r)+1},c=e==="out"?o:e==="in"?function(l){return 1-o(1-l)}:Og(o);return r=Hh/r,c.config=function(l,u){return s(e,l,u)},c},gh=function s(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:Og(n);return i.config=function(r){return s(e,r)},i};Vn("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;to(s+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ct.Linear.easeNone=ct.none=ct.Linear.easeIn;to("Elastic",_h("in"),_h("out"),_h());(function(s,e){var t=1/e,n=2*t,i=2.5*t,r=function(o){return o<t?s*o*o:o<n?s*Math.pow(o-1.5/e,2)+.75:o<i?s*(o-=2.25/e)*o+.9375:s*Math.pow(o-2.625/e,2)+.984375};to("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);to("Expo",function(s){return s?Math.pow(2,10*(s-1)):0});to("Circ",function(s){return-(rg(1-s*s)-1)});to("Sine",function(s){return s===1?1:-xE(s*gE)+1});to("Back",gh("in"),gh("out"),gh());ct.SteppedEase=ct.steps=di.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,a=1-vt;return function(o){return((i*yc(0,a,o)|0)+r)*n}}};Ko.ease=ct["quad.out"];Vn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return Ud+=s+","+s+"Params,"});var Ug=function(e,t){this.id=vE++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:pg,this.set=t?t.getSetter:Gd},cc=function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Qo(this,+t.duration,1,1),this.data=t.data,Dt&&(this._ctx=Dt,Dt.data.push(this)),ac||ni.wake()}var e=s.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Qo(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(ea(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(pu(this,n),!r._dp||r.parent||xg(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&ji(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===vt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),mg(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+ym(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+ym(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Jo(this._tTime,r)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-vt?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?kl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-vt?0:this._rts,this.totalTime(yc(-Math.abs(this._delay),this._tDur,r),i!==!1),fu(this),DE(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ea(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==vt&&(this._tTime-=vt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&ji(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Bn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?kl(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=ME);var i=gn;return gn=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),gn=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Sm(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Sm(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(pi(this,n),Bn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Bn(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-vt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-vt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-vt)},e.eventCallback=function(n,i,r){var a=this.vars;return arguments.length>1?(i?(a[n]=i,r&&(a[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this;return new Promise(function(r){var a=Ft(n)?n:gg,o=function(){var l=i.then;i.then=null,Ft(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=l),r(a),i.then=l};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},e.kill=function(){Ra(this)},s}();wi(cc.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-vt,_prom:0,_ps:!1,_rts:1});var Rn=function(s){sg(e,s);function e(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Bn(n.sortChildren),Rt&&ji(n.parent||Rt,gs(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&yg(gs(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,a){return Ga(0,arguments,this),this},t.from=function(i,r,a){return Ga(1,arguments,this),this},t.fromTo=function(i,r,a,o){return Ga(2,arguments,this),this},t.set=function(i,r,a){return r.duration=0,r.parent=this,Va(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Ht(i,r,pi(this,a),1),this},t.call=function(i,r,a){return ji(this,Ht.delayedCall(0,i,r),a)},t.staggerTo=function(i,r,a,o,c,l,u){return a.duration=r,a.stagger=a.stagger||o,a.onComplete=l,a.onCompleteParams=u,a.parent=this,new Ht(i,a,pi(this,c)),this},t.staggerFrom=function(i,r,a,o,c,l,u){return a.runBackwards=1,Va(a).immediateRender=Bn(a.immediateRender),this.staggerTo(i,r,a,o,c,l,u)},t.staggerFromTo=function(i,r,a,o,c,l,u,h){return o.startAt=a,Va(o).immediateRender=Bn(o.immediateRender),this.staggerTo(i,r,o,c,l,u,h)},t.render=function(i,r,a){var o=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,u=i<=0?0:tn(i),h=this._zTime<0!=i<0&&(this._initted||!l),d,f,_,m,g,p,S,y,T,v,M,E;if(this!==Rt&&u>c&&i>=0&&(u=c),u!==this._tTime||a||h){if(o!==this._time&&l&&(u+=this._time-o,i+=this._time-o),d=u,T=this._start,y=this._ts,p=!y,h&&(l||(o=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(M=this._yoyo,g=l+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(g*100+i,r,a);if(d=tn(u%g),u===c?(m=this._repeat,d=l):(m=~~(u/g),m&&m===u/g&&(d=l,m--),d>l&&(d=l)),v=Jo(this._tTime,g),!o&&this._tTime&&v!==m&&this._tTime-v*g-this._dur<=0&&(v=m),M&&m&1&&(d=l-d,E=1),m!==v&&!this._lock){var b=M&&v&1,x=b===(M&&m&1);if(m<v&&(b=!b),o=b?0:u%l?l:u,this._lock=1,this.render(o||(E?0:tn(m*g)),r,!l)._lock=0,this._tTime=u,!r&&this.parent&&si(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,x&&(this._lock=2,o=b?l:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;Ig(this,E)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=PE(this,tn(o),tn(d)),S&&(u-=d-(d=S._start))),this._tTime=u,this._time=d,this._act=!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&d&&!r&&!m&&(si(this,"onStart"),this._tTime!==u))return this;if(d>=o&&i>=0)for(f=this._first;f;){if(_=f._next,(f._act||d>=f._start)&&f._ts&&S!==f){if(f.parent!==this)return this.render(i,r,a);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,r,a),d!==this._time||!this._ts&&!p){S=0,_&&(u+=this._zTime=-vt);break}}f=_}else{f=this._last;for(var w=i<0?i:d;f;){if(_=f._prev,(f._act||w<=f._end)&&f._ts&&S!==f){if(f.parent!==this)return this.render(i,r,a);if(f.render(f._ts>0?(w-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(w-f._start)*f._ts,r,a||gn&&(f._initted||f._startAt)),d!==this._time||!this._ts&&!p){S=0,_&&(u+=this._zTime=w?-vt:vt);break}}f=_}}if(S&&!r&&(this.pause(),S.render(d>=o?0:-vt)._zTime=d>=o?1:-1,this._ts))return this._start=T,fu(this),this.render(i,r,a);this._onUpdate&&!r&&si(this,"onUpdate",!0),(u===c&&this._tTime>=this.totalDuration()||!u&&o)&&(T===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((i||!l)&&(u===c&&this._ts>0||!u&&this._ts<0)&&Qs(this,1),!r&&!(i<0&&!o)&&(u||o||!c)&&(si(this,u===c&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<c&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var a=this;if(Ds(r)||(r=pi(this,r,i)),!(i instanceof cc)){if(vn(i))return i.forEach(function(o){return a.add(o,r)}),this;if(sn(i))return this.addLabel(i,r);if(Ft(i))i=Ht.delayedCall(0,i);else return this}return this!==i?ji(this,i,r):this},t.getChildren=function(i,r,a,o){i===void 0&&(i=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),o===void 0&&(o=-yi);for(var c=[],l=this._first;l;)l._start>=o&&(l instanceof Ht?r&&c.push(l):(a&&c.push(l),i&&c.push.apply(c,l.getChildren(!0,r,a)))),l=l._next;return c},t.getById=function(i){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===i)return r[a]},t.remove=function(i){return sn(i)?this.removeLabel(i):Ft(i)?this.killTweensOf(i):(du(this,i),i===this._recent&&(this._recent=this._last),Ir(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=tn(ni.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=pi(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,a){var o=Ht.delayedCall(0,r||rc,a);return o.data="isPause",this._hasPause=1,ji(this,o,pi(this,i))},t.removePause=function(i){var r=this._first;for(i=pi(this,i);r;)r._start===i&&r.data==="isPause"&&Qs(r),r=r._next},t.killTweensOf=function(i,r,a){for(var o=this.getTweensOf(i,a),c=o.length;c--;)Gs!==o[c]&&o[c].kill(i,r);return this},t.getTweensOf=function(i,r){for(var a=[],o=Si(i),c=this._first,l=Ds(r),u;c;)c instanceof Ht?EE(c._targets,o)&&(l?(!Gs||c._initted&&c._ts)&&c.globalTime(0)<=r&&c.globalTime(c.totalDuration())>r:!r||c.isActive())&&a.push(c):(u=c.getTweensOf(o,r)).length&&a.push.apply(a,u),c=c._next;return a},t.tweenTo=function(i,r){r=r||{};var a=this,o=pi(a,i),c=r,l=c.startAt,u=c.onStart,h=c.onStartParams,d=c.immediateRender,f,_=Ht.to(a,wi({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(l&&"time"in l?l.time:a._time))/a.timeScale())||vt,onStart:function(){if(a.pause(),!f){var g=r.duration||Math.abs((o-(l&&"time"in l?l.time:a._time))/a.timeScale());_._dur!==g&&Qo(_,g,0,1).render(_._time,!0,!0),f=1}u&&u.apply(_,h||[])}},r));return d?_.render(0):_},t.tweenFromTo=function(i,r,a){return this.tweenTo(r,wi({startAt:{time:pi(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Tm(this,pi(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Tm(this,pi(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+vt)},t.shiftChildren=function(i,r,a){a===void 0&&(a=0);for(var o=this._first,c=this.labels,l;o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(r)for(l in c)c[l]>=a&&(c[l]+=i);return Ir(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Ir(this)},t.totalDuration=function(i){var r=0,a=this,o=a._last,c=yi,l,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(h=a.parent;o;)l=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>c&&a._sort&&o._ts&&!a._lock?(a._lock=1,ji(a,o,u-o._delay,1)._lock=0):c=u,u<0&&o._ts&&(r-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),c=0),o._end>r&&o._ts&&(r=o._end),o=l;Qo(a,a===Rt&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(Rt._ts&&(mg(Rt,kl(i,Rt)),fg=ni.frame),ni.frame>=vm){vm+=ui.autoSleep||120;var r=Rt._first;if((!r||!r._ts)&&ui.autoSleep&&ni._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||ni.sleep()}}},e}(cc);wi(Rn.prototype,{_lock:0,_hasPause:0,_forcing:0});var YE=function(e,t,n,i,r,a,o){var c=new Gn(this._pt,e,t,0,1,Wg,null,r),l=0,u=0,h,d,f,_,m,g,p,S;for(c.b=n,c.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=oc(i)),a&&(S=[n,i],a(S,e,t),n=S[0],i=S[1]),d=n.match(fh)||[];h=fh.exec(i);)_=h[0],m=i.substring(l,h.index),f?f=(f+1)%5:m.substr(-5)==="rgba("&&(f=1),_!==d[u++]&&(g=parseFloat(d[u-1])||0,c._pt={_next:c._pt,p:m||u===1?m:",",s:g,c:_.charAt(1)==="="?Bo(g,_)-g:parseFloat(_)-g,m:f&&f<4?Math.round:0},l=fh.lastIndex);return c.c=l<i.length?i.substring(l,i.length):"",c.fp=o,(cg.test(i)||p)&&(c.e=0),this._pt=c,c},zd=function(e,t,n,i,r,a,o,c,l,u){Ft(i)&&(i=i(r||0,e,a));var h=e[t],d=n!=="get"?n:Ft(h)?l?e[t.indexOf("set")||!Ft(e["get"+t.substr(3)])?t:"get"+t.substr(3)](l):e[t]():h,f=Ft(h)?l?JE:Vg:Vd,_;if(sn(i)&&(~i.indexOf("random(")&&(i=oc(i)),i.charAt(1)==="="&&(_=Bo(d,i)+(_n(d)||0),(_||_===0)&&(i=_))),!u||d!==i||Qh)return!isNaN(d*i)&&i!==""?(_=new Gn(this._pt,e,t,+d||0,i-(d||0),typeof h=="boolean"?ew:Gg,0,f),l&&(_.fp=l),o&&_.modifier(o,this,e),this._pt=_):(!h&&!(t in e)&&Id(t,i),YE.call(this,e,t,d,i,f,c||ui.stringFilter,l))},jE=function(e,t,n,i,r){if(Ft(e)&&(e=Wa(e,r,t,n,i)),!is(e)||e.style&&e.nodeType||vn(e)||og(e))return sn(e)?Wa(e,r,t,n,i):e;var a={},o;for(o in e)a[o]=Wa(e[o],r,t,n,i);return a},kg=function(e,t,n,i,r,a){var o,c,l,u;if(ei[e]&&(o=new ei[e]).init(r,o.rawVars?t[e]:jE(t[e],i,r,a,n),n,i,a)!==!1&&(n._pt=c=new Gn(n._pt,r,e,0,1,o.render,o,0,o.priority),n!==Lo))for(l=n._ptLookup[n._targets.indexOf(r)],u=o._props.length;u--;)l[o._props[u]]=c;return o},Gs,Qh,Bd=function s(e,t,n){var i=e.vars,r=i.ease,a=i.startAt,o=i.immediateRender,c=i.lazy,l=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,d=i.keyframes,f=i.autoRevert,_=e._dur,m=e._startAt,g=e._targets,p=e.parent,S=p&&p.data==="nested"?p.vars.targets:g,y=e._overwrite==="auto"&&!Pd,T=e.timeline,v,M,E,b,x,w,F,R,L,N,k,z,U;if(T&&(!d||!r)&&(r="none"),e._ease=Or(r,Ko.ease),e._yEase=h?Ng(Or(h===!0?r:h,Ko.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!T&&!!i.runBackwards,!T||d&&!i.stagger){if(R=g[0]?Nr(g[0]).harness:0,z=R&&i[R.prop],v=Ul(i,Od),m&&(m._zTime<0&&m.progress(1),t<0&&u&&o&&!f?m.render(-1,!0):m.revert(u&&_?Tl:TE),m._lazy=0),a){if(Qs(e._startAt=Ht.set(g,wi({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!m&&Bn(c),startAt:null,delay:0,onUpdate:l&&function(){return si(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(gn||!o&&!f)&&e._startAt.revert(Tl),o&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&_&&!m){if(t&&(o=!1),E=wi({overwrite:!1,data:"isFromStart",lazy:o&&!m&&Bn(c),immediateRender:o,stagger:0,parent:p},v),z&&(E[R.prop]=z),Qs(e._startAt=Ht.set(g,E)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(gn?e._startAt.revert(Tl):e._startAt.render(-1,!0)),e._zTime=t,!o)s(e._startAt,vt,vt);else if(!t)return}for(e._pt=e._ptCache=0,c=_&&Bn(c)||c&&!_,M=0;M<g.length;M++){if(x=g[M],F=x._gsap||kd(g)[M]._gsap,e._ptLookup[M]=N={},Yh[F.id]&&js.length&&Ol(),k=S===g?M:S.indexOf(x),R&&(L=new R).init(x,z||v,e,k,S)!==!1&&(e._pt=b=new Gn(e._pt,x,L.name,0,1,L.render,L,0,L.priority),L._props.forEach(function(V){N[V]=b}),L.priority&&(w=1)),!R||z)for(E in v)ei[E]&&(L=kg(E,v,e,k,x,S))?L.priority&&(w=1):N[E]=b=zd.call(e,x,E,"get",v[E],k,S,0,i.stringFilter);e._op&&e._op[M]&&e.kill(x,e._op[M]),y&&e._pt&&(Gs=e,Rt.killTweensOf(x,N,e.globalTime(t)),U=!e.parent,Gs=0),e._pt&&c&&(Yh[F.id]=1)}w&&Hg(e),e._onInit&&e._onInit(e)}e._onUpdate=l,e._initted=(!e._op||e._pt)&&!U,d&&t<=0&&T.render(yi,!0,!0)},$E=function(e,t,n,i,r,a,o,c){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,d,f;if(!l)for(l=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(u=d[f][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Qh=1,e.vars[t]="+=0",Bd(e,o),Qh=0,c?sc(t+" not eligible for reset"):1;l.push(u)}for(f=l.length;f--;)h=l[f],u=h._pt||h,u.s=(i||i===0)&&!r?i:u.s+(i||0)+a*u.c,u.c=n-u.s,h.e&&(h.e=Ut(n)+_n(h.e)),h.b&&(h.b=u.s+_n(h.b))},ZE=function(e,t){var n=e[0]?Nr(e[0]).harness:0,i=n&&n.aliases,r,a,o,c;if(!i)return t;r=Xr({},t);for(a in i)if(a in r)for(c=i[a].split(","),o=c.length;o--;)r[c[o]]=r[a];return r},KE=function(e,t,n,i){var r=t.ease||i||"power1.inOut",a,o;if(vn(t))o=n[e]||(n[e]=[]),t.forEach(function(c,l){return o.push({t:l/(t.length-1)*100,v:c,e:r})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:r})},Wa=function(e,t,n,i,r){return Ft(e)?e.call(t,n,i,r):sn(e)&&~e.indexOf("random(")?oc(e):e},zg=Ud+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Bg={};Vn(zg+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return Bg[s]=1});var Ht=function(s){sg(e,s);function e(n,i,r,a){var o;typeof i=="number"&&(r.duration=i,i=r,r=null),o=s.call(this,a?i:Va(i))||this;var c=o.vars,l=c.duration,u=c.delay,h=c.immediateRender,d=c.stagger,f=c.overwrite,_=c.keyframes,m=c.defaults,g=c.scrollTrigger,p=c.yoyoEase,S=i.parent||Rt,y=(vn(n)||og(n)?Ds(n[0]):"length"in i)?[n]:Si(n),T,v,M,E,b,x,w,F;if(o._targets=y.length?kd(y):sc("GSAP target "+n+" not found. https://gsap.com",!ui.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,_||d||il(l)||il(u)){if(i=o.vars,T=o.timeline=new Rn({data:"nested",defaults:m||{},targets:S&&S.data==="nested"?S.vars.targets:y}),T.kill(),T.parent=T._dp=gs(o),T._start=0,d||il(l)||il(u)){if(E=y.length,w=d&&Eg(d),is(d))for(b in d)~zg.indexOf(b)&&(F||(F={}),F[b]=d[b]);for(v=0;v<E;v++)M=Ul(i,Bg),M.stagger=0,p&&(M.yoyoEase=p),F&&Xr(M,F),x=y[v],M.duration=+Wa(l,gs(o),v,x,y),M.delay=(+Wa(u,gs(o),v,x,y)||0)-o._delay,!d&&E===1&&M.delay&&(o._delay=u=M.delay,o._start+=u,M.delay=0),T.to(x,M,w?w(v,x,y):0),T._ease=ct.none;T.duration()?l=u=0:o.timeline=0}else if(_){Va(wi(T.vars.defaults,{ease:"none"})),T._ease=Or(_.ease||i.ease||"none");var R=0,L,N,k;if(vn(_))_.forEach(function(z){return T.to(y,z,">")}),T.duration();else{M={};for(b in _)b==="ease"||b==="easeEach"||KE(b,_[b],M,_.easeEach);for(b in M)for(L=M[b].sort(function(z,U){return z.t-U.t}),R=0,v=0;v<L.length;v++)N=L[v],k={ease:N.e,duration:(N.t-(v?L[v-1].t:0))/100*l},k[b]=N.v,T.to(y,k,R),R+=k.duration;T.duration()<l&&T.to({},{duration:l-T.duration()})}}l||o.duration(l=T.duration())}else o.timeline=0;return f===!0&&!Pd&&(Gs=gs(o),Rt.killTweensOf(y),Gs=0),ji(S,gs(o),r),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(h||!l&&!_&&o._start===tn(S._time)&&Bn(h)&&AE(gs(o))&&S.data!=="nested")&&(o._tTime=-vt,o.render(Math.max(0,-u)||0)),g&&yg(gs(o),g),o}var t=e.prototype;return t.render=function(i,r,a){var o=this._time,c=this._tDur,l=this._dur,u=i<0,h=i>c-vt&&!u?c:i<vt?0:i,d,f,_,m,g,p,S,y,T;if(!l)RE(this,i,r,a);else if(h!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(d=h,y=this.timeline,this._repeat){if(m=l+this._rDelay,this._repeat<-1&&u)return this.totalTime(m*100+i,r,a);if(d=tn(h%m),h===c?(_=this._repeat,d=l):(_=~~(h/m),_&&_===tn(h/m)&&(d=l,_--),d>l&&(d=l)),p=this._yoyo&&_&1,p&&(T=this._yEase,d=l-d),g=Jo(this._tTime,m),d===o&&!a&&this._initted&&_===g)return this._tTime=h,this;_!==g&&(y&&this._yEase&&Ig(y,p),this.vars.repeatRefresh&&!p&&!this._lock&&this._time!==m&&this._initted&&(this._lock=a=1,this.render(tn(m*_),!0).invalidate()._lock=0))}if(!this._initted){if(Sg(this,u?i:d,a,r,h))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==g))return this;if(l!==this._dur)return this.render(i,r,a)}if(this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=S=(T||this._ease)(d/l),this._from&&(this.ratio=S=1-S),d&&!o&&!r&&!_&&(si(this,"onStart"),this._tTime!==h))return this;for(f=this._pt;f;)f.r(S,f.d),f=f._next;y&&y.render(i<0?i:y._dur*y._ease(d/this._dur),r,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&jh(this,i,r,a),si(this,"onUpdate")),this._repeat&&_!==g&&this.vars.onRepeat&&!r&&this.parent&&si(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&jh(this,i,!0,!0),(i||!l)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Qs(this,1),!r&&!(u&&!o)&&(h||o||p)&&(si(this,h===c?"onComplete":"onReverseComplete",!0),this._prom&&!(h<c&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,a,o,c){ac||ni.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Bd(this,l),u=this._ease(l/this._dur),$E(this,i,r,a,o,u,l,c)?this.resetTo(i,r,a,o,1):(pu(this,0),this.parent||vg(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Ra(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Gs&&Gs.vars.overwrite!==!0)._first||Ra(this),this.parent&&a!==this.timeline.totalDuration()&&Qo(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,c=i?Si(i):o,l=this._ptLookup,u=this._pt,h,d,f,_,m,g,p;if((!r||r==="all")&&bE(o,c))return r==="all"&&(this._pt=0),Ra(this);for(h=this._op=this._op||[],r!=="all"&&(sn(r)&&(m={},Vn(r,function(S){return m[S]=1}),r=m),r=ZE(o,r)),p=o.length;p--;)if(~c.indexOf(o[p])){d=l[p],r==="all"?(h[p]=r,_=d,f={}):(f=h[p]=h[p]||{},_=r);for(m in _)g=d&&d[m],g&&((!("kill"in g.d)||g.d.kill(m)===!0)&&du(this,g,"_pt"),delete d[m]),f!=="all"&&(f[m]=1)}return this._initted&&!this._pt&&u&&Ra(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return Ga(1,arguments)},e.delayedCall=function(i,r,a,o){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,r,a){return Ga(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,a){return Rt.killTweensOf(i,r,a)},e}(cc);wi(Ht.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Vn("staggerTo,staggerFrom,staggerFromTo",function(s){Ht[s]=function(){var e=new Rn,t=Zh.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var Vd=function(e,t,n){return e[t]=n},Vg=function(e,t,n){return e[t](n)},JE=function(e,t,n,i){return e[t](i.fp,n)},QE=function(e,t,n){return e.setAttribute(t,n)},Gd=function(e,t){return Ft(e[t])?Vg:Ld(e[t])&&e.setAttribute?QE:Vd},Gg=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},ew=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Wg=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Wd=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},tw=function(e,t,n,i){for(var r=this._pt,a;r;)a=r._next,r.p===i&&r.modifier(e,t,n),r=a},nw=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?du(this,t,"_pt"):t.dep||(n=1),t=i;return!n},iw=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Hg=function(e){for(var t=e._pt,n,i,r,a;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=r},Gn=function(){function s(t,n,i,r,a,o,c,l,u){this.t=n,this.s=r,this.c=a,this.p=i,this.r=o||Gg,this.d=c||this,this.set=l||Vd,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=iw,this.m=n,this.mt=r,this.tween=i},s}();Vn(Ud+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return Od[s]=1});di.TweenMax=di.TweenLite=Ht;di.TimelineLite=di.TimelineMax=Rn;Rt=new Rn({sortChildren:!1,defaults:Ko,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ui.stringFilter=Fg;var Ur=[],El={},sw=[],Em=0,rw=0,vh=function(e){return(El[e]||sw).map(function(t){return t()})},ed=function(){var e=Date.now(),t=[];e-Em>2&&(vh("matchMediaInit"),Ur.forEach(function(n){var i=n.queries,r=n.conditions,a,o,c,l;for(o in i)a=qi.matchMedia(i[o]).matches,a&&(c=1),a!==r[o]&&(r[o]=a,l=1);l&&(n.revert(),c&&t.push(n))}),vh("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Em=e,vh("matchMedia"))},qg=function(){function s(t,n){this.selector=n&&Kh(n),this.data=[],this._r=[],this.isReverted=!1,this.id=rw++,t&&this.add(t)}var e=s.prototype;return e.add=function(n,i,r){Ft(n)&&(r=i,i=n,n=Ft);var a=this,o=function(){var l=Dt,u=a.selector,h;return l&&l!==a&&l.data.push(a),r&&(a.selector=Kh(r)),Dt=a,h=i.apply(a,arguments),Ft(h)&&a._r.push(h),Dt=l,a.selector=u,a.isReverted=!1,h};return a.last=o,n===Ft?o(a,function(c){return a.add(null,c)}):n?a[n]=o:o},e.ignore=function(n){var i=Dt;Dt=null,n(this),Dt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof Ht&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n?function(){for(var o=r.getTweens(),c=r.data.length,l;c--;)l=r.data[c],l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),c=r.data.length;c--;)l=r.data[c],l instanceof Rn?l.data!=="nested"&&(l.scrollTrigger&&l.scrollTrigger.revert(),l.kill()):!(l instanceof Ht)&&l.revert&&l.revert(n);r._r.forEach(function(u){return u(n,r)}),r.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=Ur.length;a--;)Ur[a].id===this.id&&Ur.splice(a,1)},e.revert=function(n){this.kill(n||{})},s}(),ow=function(){function s(t){this.contexts=[],this.scope=t,Dt&&Dt.data.push(this)}var e=s.prototype;return e.add=function(n,i,r){is(n)||(n={matches:n});var a=new qg(0,r||this.scope),o=a.conditions={},c,l,u;Dt&&!a.selector&&(a.selector=Dt.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(l in n)l==="all"?u=1:(c=qi.matchMedia(n[l]),c&&(Ur.indexOf(a)<0&&Ur.push(a),(o[l]=c.matches)&&(u=1),c.addListener?c.addListener(ed):c.addEventListener("change",ed)));return u&&i(a,function(h){return a.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s}(),zl={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Rg(i)})},timeline:function(e){return new Rn(e)},getTweensOf:function(e,t){return Rt.getTweensOf(e,t)},getProperty:function(e,t,n,i){sn(e)&&(e=Si(e)[0]);var r=Nr(e||{}).get,a=n?gg:_g;return n==="native"&&(n=""),e&&(t?a((ei[t]&&ei[t].get||r)(e,t,n,i)):function(o,c,l){return a((ei[o]&&ei[o].get||r)(e,o,c,l))})},quickSetter:function(e,t,n){if(e=Si(e),e.length>1){var i=e.map(function(u){return qn.quickSetter(u,t,n)}),r=i.length;return function(u){for(var h=r;h--;)i[h](u)}}e=e[0]||{};var a=ei[t],o=Nr(e),c=o.harness&&(o.harness.aliases||{})[t]||t,l=a?function(u){var h=new a;Lo._pt=0,h.init(e,n?u+n:u,Lo,0,[e]),h.render(1,h),Lo._pt&&Wd(1,Lo)}:o.set(e,c);return a?l:function(u){return l(e,c,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,r=qn.to(e,Xr((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),a=function(c,l,u){return r.resetTo(t,c,l,u)};return a.tween=r,a},isTweening:function(e){return Rt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Or(e.ease,Ko.ease)),xm(Ko,e||{})},config:function(e){return xm(ui,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!ei[o]&&!di[o]&&sc(t+" effect requires "+o+" plugin.")}),ph[t]=function(o,c,l){return n(Si(o),wi(c||{},r),l)},a&&(Rn.prototype[t]=function(o,c,l){return this.add(ph[t](o,is(c)?c:(l=c)&&{},this),l)})},registerEase:function(e,t){ct[e]=Or(t)},parseEase:function(e,t){return arguments.length?Or(e,t):ct},getById:function(e){return Rt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Rn(e),i,r;for(n.smoothChildTiming=Bn(e.smoothChildTiming),Rt.remove(n),n._dp=0,n._time=n._tTime=Rt._time,i=Rt._first;i;)r=i._next,(t||!(!i._dur&&i instanceof Ht&&i.vars.onComplete===i._targets[0]))&&ji(n,i,i._start-i._delay),i=r;return ji(Rt,n,0),n},context:function(e,t){return e?new qg(e,t):Dt},matchMedia:function(e){return new ow(e)},matchMediaRefresh:function(){return Ur.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||ed()},addEventListener:function(e,t){var n=El[e]||(El[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=El[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:kE,wrapYoyo:zE,distribute:Eg,random:bg,snap:wg,normalize:UE,getUnit:_n,clamp:FE,splitColor:Pg,toArray:Si,selector:Kh,mapRange:Ag,pipe:IE,unitize:OE,interpolate:BE,shuffle:Mg},install:hg,effects:ph,ticker:ni,updateRoot:Rn.updateRoot,plugins:ei,globalTimeline:Rt,core:{PropTween:Gn,globals:dg,Tween:Ht,Timeline:Rn,Animation:cc,getCache:Nr,_removeLinkedListItem:du,reverting:function(){return gn},context:function(e){return e&&Dt&&(Dt.data.push(e),e._ctx=Dt),Dt},suppressOverwrites:function(e){return Pd=e}}};Vn("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return zl[s]=Ht[s]});ni.add(Rn.updateRoot);Lo=zl.to({},{duration:0});var aw=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},cw=function(e,t){var n=e._targets,i,r,a;for(i in t)for(r=n.length;r--;)a=e._ptLookup[r][i],a&&(a=a.d)&&(a._pt&&(a=aw(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[r],i))},xh=function(e,t){return{name:e,rawVars:1,init:function(i,r,a){a._onInit=function(o){var c,l;if(sn(r)&&(c={},Vn(r,function(u){return c[u]=1}),r=c),t){c={};for(l in r)c[l]=t(r[l]);r=c}cw(o,r)}}}},qn=zl.registerPlugin({name:"attr",init:function(e,t,n,i,r){var a,o,c;this.tween=n;for(a in t)c=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(c||0)+"",t[a],i,r,0,0,a),o.op=a,o.b=c,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)gn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},xh("roundProps",Jh),xh("modifiers"),xh("snap",wg))||zl;Ht.version=Rn.version=qn.version="3.12.5";ug=1;Fd()&&ea();ct.Power0;ct.Power1;ct.Power2;ct.Power3;var Hd=ct.Power4;ct.Linear;ct.Quad;ct.Cubic;ct.Quart;ct.Quint;ct.Strong;ct.Elastic;var lw=ct.Back;ct.SteppedEase;ct.Bounce;ct.Sine;ct.Expo;ct.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var wm,Ws,Vo,qd,br,bm,Xd,uw=function(){return typeof window<"u"},As={},yr=180/Math.PI,Go=Math.PI/180,To=Math.atan2,Dm=1e8,Yd=/([A-Z])/g,hw=/(left|right|width|margin|padding|x)/i,dw=/[\s,\(]\S/,$i={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},td=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},fw=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},pw=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},mw=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Xg=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Yg=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},_w=function(e,t,n){return e.style[t]=n},gw=function(e,t,n){return e.style.setProperty(t,n)},vw=function(e,t,n){return e._gsap[t]=n},xw=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},yw=function(e,t,n,i,r){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(r,a)},Sw=function(e,t,n,i,r){var a=e._gsap;a[t]=n,a.renderTransform(r,a)},Pt="transform",Wn=Pt+"Origin",Tw=function s(e,t){var n=this,i=this.target,r=i.style,a=i._gsap;if(e in As&&r){if(this.tfm=this.tfm||{},e!=="transform")e=$i[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=xs(i,o)}):this.tfm[e]=a.x?a[e]:xs(i,e),e===Wn&&(this.tfm.zOrigin=a.zOrigin);else return $i.transform.split(",").forEach(function(o){return s.call(n,o,t)});if(this.props.indexOf(Pt)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Wn,t,"")),e=Pt}(r||t)&&this.props.push(e,t,r[e])},jg=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Mw=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,a;for(r=0;r<e.length;r+=3)e[r+1]?t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(Yd,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=Xd(),(!r||!r.isStart)&&!n[Pt]&&(jg(n),i.zOrigin&&n[Wn]&&(n[Wn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},$g=function(e,t){var n={target:e,props:[],revert:Mw,save:Tw};return e._gsap||qn.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},Zg,nd=function(e,t){var n=Ws.createElementNS?Ws.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ws.createElement(e);return n&&n.style?n:Ws.createElement(e)},Qi=function s(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Yd,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&s(e,ta(t)||t,1)||""},Am="O,Moz,ms,Ms,Webkit".split(","),ta=function(e,t,n){var i=t||br,r=i.style,a=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Am[a]+e in r););return a<0?null:(a===3?"ms":a>=0?Am[a]:"")+e},id=function(){uw()&&window.document&&(wm=window,Ws=wm.document,Vo=Ws.documentElement,br=nd("div")||{style:{}},nd("div"),Pt=ta(Pt),Wn=Pt+"Origin",br.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Zg=!!ta("perspective"),Xd=qn.core.reverting,qd=1)},yh=function s(e){var t=nd("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,a;if(Vo.appendChild(t),t.appendChild(this),this.style.display="block",e)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=s}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),Vo.removeChild(t),this.style.cssText=r,a},Cm=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Kg=function(e){var t;try{t=e.getBBox()}catch{t=yh.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===yh||(t=yh.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Cm(e,["x","cx","x1"])||0,y:+Cm(e,["y","cy","y1"])||0,width:0,height:0}:t},Jg=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Kg(e))},Yr=function(e,t){if(t){var n=e.style,i;t in As&&t!==Wn&&(t=Pt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Yd,"-$1").toLowerCase())):n.removeAttribute(t)}},Hs=function(e,t,n,i,r,a){var o=new Gn(e._pt,t,n,0,1,a?Yg:Xg);return e._pt=o,o.b=i,o.e=r,e._props.push(n),o},Rm={deg:1,rad:1,turn:1},Ew={grid:1,flex:1},er=function s(e,t,n,i){var r=parseFloat(n)||0,a=(n+"").trim().substr((r+"").length)||"px",o=br.style,c=hw.test(t),l=e.tagName.toLowerCase()==="svg",u=(l?"client":"offset")+(c?"Width":"Height"),h=100,d=i==="px",f=i==="%",_,m,g,p;if(i===a||!r||Rm[i]||Rm[a])return r;if(a!=="px"&&!d&&(r=s(e,t,n,"px")),p=e.getCTM&&Jg(e),(f||a==="%")&&(As[t]||~t.indexOf("adius")))return _=p?e.getBBox()[c?"width":"height"]:e[u],Ut(f?r/_*h:r/100*_);if(o[c?"width":"height"]=h+(d?a:i),m=~t.indexOf("adius")||i==="em"&&e.appendChild&&!l?e:e.parentNode,p&&(m=(e.ownerSVGElement||{}).parentNode),(!m||m===Ws||!m.appendChild)&&(m=Ws.body),g=m._gsap,g&&f&&g.width&&c&&g.time===ni.time&&!g.uncache)return Ut(r/g.width*h);if(f&&(t==="height"||t==="width")){var S=e.style[t];e.style[t]=h+i,_=e[u],S?e.style[t]=S:Yr(e,t)}else(f||a==="%")&&!Ew[Qi(m,"display")]&&(o.position=Qi(e,"position")),m===e&&(o.position="static"),m.appendChild(br),_=br[u],m.removeChild(br),o.position="absolute";return c&&f&&(g=Nr(m),g.time=ni.time,g.width=m[u]),Ut(d?_*r/h:_&&r?h/_*r:0)},xs=function(e,t,n,i){var r;return qd||id(),t in $i&&t!=="transform"&&(t=$i[t],~t.indexOf(",")&&(t=t.split(",")[0])),As[t]&&t!=="transform"?(r=uc(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:Vl(Qi(e,Wn))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Bl[t]&&Bl[t](e,t,n)||Qi(e,t)||pg(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?er(e,t,r,n)+n:r},ww=function(e,t,n,i){if(!n||n==="none"){var r=ta(t,e,1),a=r&&Qi(e,r,1);a&&a!==n?(t=r,n=a):t==="borderColor"&&(n=Qi(e,"borderTopColor"))}var o=new Gn(this._pt,e.style,t,0,1,Wg),c=0,l=0,u,h,d,f,_,m,g,p,S,y,T,v;if(o.b=n,o.e=i,n+="",i+="",i==="auto"&&(m=e.style[t],e.style[t]=i,i=Qi(e,t)||i,m?e.style[t]=m:Yr(e,t)),u=[n,i],Fg(u),n=u[0],i=u[1],d=n.match(Po)||[],v=i.match(Po)||[],v.length){for(;h=Po.exec(i);)g=h[0],S=i.substring(c,h.index),_?_=(_+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(_=1),g!==(m=d[l++]||"")&&(f=parseFloat(m)||0,T=m.substr((f+"").length),g.charAt(1)==="="&&(g=Bo(f,g)+T),p=parseFloat(g),y=g.substr((p+"").length),c=Po.lastIndex-y.length,y||(y=y||ui.units[t]||T,c===i.length&&(i+=y,o.e+=y)),T!==y&&(f=er(e,t,m,y)||0),o._pt={_next:o._pt,p:S||l===1?S:",",s:f,c:p-f,m:_&&_<4||t==="zIndex"?Math.round:0});o.c=c<i.length?i.substring(c,i.length):""}else o.r=t==="display"&&i==="none"?Yg:Xg;return cg.test(i)&&(o.e=0),this._pt=o,o},Pm={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},bw=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Pm[n]||n,t[1]=Pm[i]||i,t.join(" ")},Dw=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,a=n._gsap,o,c,l;if(r==="all"||r===!0)i.cssText="",c=1;else for(r=r.split(","),l=r.length;--l>-1;)o=r[l],As[o]&&(c=1,o=o==="transformOrigin"?Wn:Pt),Yr(n,o);c&&(Yr(n,Pt),a&&(a.svg&&n.removeAttribute("transform"),uc(n,1),a.uncache=1,jg(i)))}},Bl={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var a=e._pt=new Gn(e._pt,t,n,0,0,Dw);return a.u=i,a.pr=-10,a.tween=r,e._props.push(n),1}}},lc=[1,0,0,1,0,0],Qg={},e0=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Lm=function(e){var t=Qi(e,Pt);return e0(t)?lc:t.substr(7).match(ag).map(Ut)},jd=function(e,t){var n=e._gsap||Nr(e),i=e.style,r=Lm(e),a,o,c,l;return n.svg&&e.getAttribute("transform")?(c=e.transform.baseVal.consolidate().matrix,r=[c.a,c.b,c.c,c.d,c.e,c.f],r.join(",")==="1,0,0,1,0,0"?lc:r):(r===lc&&!e.offsetParent&&e!==Vo&&!n.svg&&(c=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent)&&(l=1,o=e.nextElementSibling,Vo.appendChild(e)),r=Lm(e),c?i.display=c:Yr(e,"display"),l&&(o?a.insertBefore(e,o):a?a.appendChild(e):Vo.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},sd=function(e,t,n,i,r,a){var o=e._gsap,c=r||jd(e,!0),l=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,d=o.yOffset||0,f=c[0],_=c[1],m=c[2],g=c[3],p=c[4],S=c[5],y=t.split(" "),T=parseFloat(y[0])||0,v=parseFloat(y[1])||0,M,E,b,x;n?c!==lc&&(E=f*g-_*m)&&(b=T*(g/E)+v*(-m/E)+(m*S-g*p)/E,x=T*(-_/E)+v*(f/E)-(f*S-_*p)/E,T=b,v=x):(M=Kg(e),T=M.x+(~y[0].indexOf("%")?T/100*M.width:T),v=M.y+(~(y[1]||y[0]).indexOf("%")?v/100*M.height:v)),i||i!==!1&&o.smooth?(p=T-l,S=v-u,o.xOffset=h+(p*f+S*m)-p,o.yOffset=d+(p*_+S*g)-S):o.xOffset=o.yOffset=0,o.xOrigin=T,o.yOrigin=v,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[Wn]="0px 0px",a&&(Hs(a,o,"xOrigin",l,T),Hs(a,o,"yOrigin",u,v),Hs(a,o,"xOffset",h,o.xOffset),Hs(a,o,"yOffset",d,o.yOffset)),e.setAttribute("data-svg-origin",T+" "+v)},uc=function(e,t){var n=e._gsap||new Ug(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,a="px",o="deg",c=getComputedStyle(e),l=Qi(e,Wn)||"0",u,h,d,f,_,m,g,p,S,y,T,v,M,E,b,x,w,F,R,L,N,k,z,U,V,H,D,te,ee,q,Y,J;return u=h=d=m=g=p=S=y=T=0,f=_=1,n.svg=!!(e.getCTM&&Jg(e)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(i[Pt]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[Pt]!=="none"?c[Pt]:"")),i.scale=i.rotate=i.translate="none"),E=jd(e,n.svg),n.svg&&(n.uncache?(V=e.getBBox(),l=n.xOrigin-V.x+"px "+(n.yOrigin-V.y)+"px",U=""):U=!t&&e.getAttribute("data-svg-origin"),sd(e,U||l,!!U||n.originIsAbsolute,n.smooth!==!1,E)),v=n.xOrigin||0,M=n.yOrigin||0,E!==lc&&(F=E[0],R=E[1],L=E[2],N=E[3],u=k=E[4],h=z=E[5],E.length===6?(f=Math.sqrt(F*F+R*R),_=Math.sqrt(N*N+L*L),m=F||R?To(R,F)*yr:0,S=L||N?To(L,N)*yr+m:0,S&&(_*=Math.abs(Math.cos(S*Go))),n.svg&&(u-=v-(v*F+M*L),h-=M-(v*R+M*N))):(J=E[6],q=E[7],D=E[8],te=E[9],ee=E[10],Y=E[11],u=E[12],h=E[13],d=E[14],b=To(J,ee),g=b*yr,b&&(x=Math.cos(-b),w=Math.sin(-b),U=k*x+D*w,V=z*x+te*w,H=J*x+ee*w,D=k*-w+D*x,te=z*-w+te*x,ee=J*-w+ee*x,Y=q*-w+Y*x,k=U,z=V,J=H),b=To(-L,ee),p=b*yr,b&&(x=Math.cos(-b),w=Math.sin(-b),U=F*x-D*w,V=R*x-te*w,H=L*x-ee*w,Y=N*w+Y*x,F=U,R=V,L=H),b=To(R,F),m=b*yr,b&&(x=Math.cos(b),w=Math.sin(b),U=F*x+R*w,V=k*x+z*w,R=R*x-F*w,z=z*x-k*w,F=U,k=V),g&&Math.abs(g)+Math.abs(m)>359.9&&(g=m=0,p=180-p),f=Ut(Math.sqrt(F*F+R*R+L*L)),_=Ut(Math.sqrt(z*z+J*J)),b=To(k,z),S=Math.abs(b)>2e-4?b*yr:0,T=Y?1/(Y<0?-Y:Y):0),n.svg&&(U=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!e0(Qi(e,Pt)),U&&e.setAttribute("transform",U))),Math.abs(S)>90&&Math.abs(S)<270&&(r?(f*=-1,S+=m<=0?180:-180,m+=m<=0?180:-180):(_*=-1,S+=S<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=d+a,n.scaleX=Ut(f),n.scaleY=Ut(_),n.rotation=Ut(m)+o,n.rotationX=Ut(g)+o,n.rotationY=Ut(p)+o,n.skewX=S+o,n.skewY=y+o,n.transformPerspective=T+a,(n.zOrigin=parseFloat(l.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Wn]=Vl(l)),n.xOffset=n.yOffset=0,n.force3D=ui.force3D,n.renderTransform=n.svg?Cw:Zg?t0:Aw,n.uncache=0,n},Vl=function(e){return(e=e.split(" "))[0]+" "+e[1]},Sh=function(e,t,n){var i=_n(t);return Ut(parseFloat(t)+parseFloat(er(e,"x",n+"px",i)))+i},Aw=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,t0(e,t)},_r="0deg",Ea="0px",gr=") ",t0=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,c=n.z,l=n.rotation,u=n.rotationY,h=n.rotationX,d=n.skewX,f=n.skewY,_=n.scaleX,m=n.scaleY,g=n.transformPerspective,p=n.force3D,S=n.target,y=n.zOrigin,T="",v=p==="auto"&&e&&e!==1||p===!0;if(y&&(h!==_r||u!==_r)){var M=parseFloat(u)*Go,E=Math.sin(M),b=Math.cos(M),x;M=parseFloat(h)*Go,x=Math.cos(M),a=Sh(S,a,E*x*-y),o=Sh(S,o,-Math.sin(M)*-y),c=Sh(S,c,b*x*-y+y)}g!==Ea&&(T+="perspective("+g+gr),(i||r)&&(T+="translate("+i+"%, "+r+"%) "),(v||a!==Ea||o!==Ea||c!==Ea)&&(T+=c!==Ea||v?"translate3d("+a+", "+o+", "+c+") ":"translate("+a+", "+o+gr),l!==_r&&(T+="rotate("+l+gr),u!==_r&&(T+="rotateY("+u+gr),h!==_r&&(T+="rotateX("+h+gr),(d!==_r||f!==_r)&&(T+="skew("+d+", "+f+gr),(_!==1||m!==1)&&(T+="scale("+_+", "+m+gr),S.style[Pt]=T||"translate(0, 0)"},Cw=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,c=n.rotation,l=n.skewX,u=n.skewY,h=n.scaleX,d=n.scaleY,f=n.target,_=n.xOrigin,m=n.yOrigin,g=n.xOffset,p=n.yOffset,S=n.forceCSS,y=parseFloat(a),T=parseFloat(o),v,M,E,b,x;c=parseFloat(c),l=parseFloat(l),u=parseFloat(u),u&&(u=parseFloat(u),l+=u,c+=u),c||l?(c*=Go,l*=Go,v=Math.cos(c)*h,M=Math.sin(c)*h,E=Math.sin(c-l)*-d,b=Math.cos(c-l)*d,l&&(u*=Go,x=Math.tan(l-u),x=Math.sqrt(1+x*x),E*=x,b*=x,u&&(x=Math.tan(u),x=Math.sqrt(1+x*x),v*=x,M*=x)),v=Ut(v),M=Ut(M),E=Ut(E),b=Ut(b)):(v=h,b=d,M=E=0),(y&&!~(a+"").indexOf("px")||T&&!~(o+"").indexOf("px"))&&(y=er(f,"x",a,"px"),T=er(f,"y",o,"px")),(_||m||g||p)&&(y=Ut(y+_-(_*v+m*E)+g),T=Ut(T+m-(_*M+m*b)+p)),(i||r)&&(x=f.getBBox(),y=Ut(y+i/100*x.width),T=Ut(T+r/100*x.height)),x="matrix("+v+","+M+","+E+","+b+","+y+","+T+")",f.setAttribute("transform",x),S&&(f.style[Pt]=x)},Rw=function(e,t,n,i,r){var a=360,o=sn(r),c=parseFloat(r)*(o&&~r.indexOf("rad")?yr:1),l=c-i,u=i+l+"deg",h,d;return o&&(h=r.split("_")[1],h==="short"&&(l%=a,l!==l%(a/2)&&(l+=l<0?a:-a)),h==="cw"&&l<0?l=(l+a*Dm)%a-~~(l/a)*a:h==="ccw"&&l>0&&(l=(l-a*Dm)%a-~~(l/a)*a)),e._pt=d=new Gn(e._pt,t,n,i,l,fw),d.e=u,d.u="deg",e._props.push(n),d},Fm=function(e,t){for(var n in t)e[n]=t[n];return e},Pw=function(e,t,n){var i=Fm({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,c,l,u,h,d,f,_;i.svg?(l=n.getAttribute("transform"),n.setAttribute("transform",""),a[Pt]=t,o=uc(n,1),Yr(n,Pt),n.setAttribute("transform",l)):(l=getComputedStyle(n)[Pt],a[Pt]=t,o=uc(n,1),a[Pt]=l);for(c in As)l=i[c],u=o[c],l!==u&&r.indexOf(c)<0&&(f=_n(l),_=_n(u),h=f!==_?er(n,c,l,_):parseFloat(l),d=parseFloat(u),e._pt=new Gn(e._pt,o,c,h,d-h,td),e._pt.u=_||0,e._props.push(c));Fm(o,i)};Vn("padding,margin,Width,Radius",function(s,e){var t="Top",n="Right",i="Bottom",r="Left",a=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(o){return e<2?s+o:"border"+o+s});Bl[e>1?"border"+s:s]=function(o,c,l,u,h){var d,f;if(arguments.length<4)return d=a.map(function(_){return xs(o,_,l)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(u+"").split(" "),f={},a.forEach(function(_,m){return f[_]=d[m]=d[m]||d[(m-1)/2|0]}),o.init(c,f,h)}});var n0={name:"css",register:id,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var a=this._props,o=e.style,c=n.vars.startAt,l,u,h,d,f,_,m,g,p,S,y,T,v,M,E,b;qd||id(),this.styles=this.styles||$g(e),b=this.styles.props,this.tween=n;for(m in t)if(m!=="autoRound"&&(u=t[m],!(ei[m]&&kg(m,t,n,i,e,r)))){if(f=typeof u,_=Bl[m],f==="function"&&(u=u.call(n,i,e,r),f=typeof u),f==="string"&&~u.indexOf("random(")&&(u=oc(u)),_)_(this,e,m,u,n)&&(E=1);else if(m.substr(0,2)==="--")l=(getComputedStyle(e).getPropertyValue(m)+"").trim(),u+="",$s.lastIndex=0,$s.test(l)||(g=_n(l),p=_n(u)),p?g!==p&&(l=er(e,m,l,p)+p):g&&(u+=g),this.add(o,"setProperty",l,u,i,r,0,0,m),a.push(m),b.push(m,0,o[m]);else if(f!=="undefined"){if(c&&m in c?(l=typeof c[m]=="function"?c[m].call(n,i,e,r):c[m],sn(l)&&~l.indexOf("random(")&&(l=oc(l)),_n(l+"")||l==="auto"||(l+=ui.units[m]||_n(xs(e,m))||""),(l+"").charAt(1)==="="&&(l=xs(e,m))):l=xs(e,m),d=parseFloat(l),S=f==="string"&&u.charAt(1)==="="&&u.substr(0,2),S&&(u=u.substr(2)),h=parseFloat(u),m in $i&&(m==="autoAlpha"&&(d===1&&xs(e,"visibility")==="hidden"&&h&&(d=0),b.push("visibility",0,o.visibility),Hs(this,o,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),m!=="scale"&&m!=="transform"&&(m=$i[m],~m.indexOf(",")&&(m=m.split(",")[0]))),y=m in As,y){if(this.styles.save(m),T||(v=e._gsap,v.renderTransform&&!t.parseTransform||uc(e,t.parseTransform),M=t.smoothOrigin!==!1&&v.smooth,T=this._pt=new Gn(this._pt,o,Pt,0,1,v.renderTransform,v,0,-1),T.dep=1),m==="scale")this._pt=new Gn(this._pt,v,"scaleY",v.scaleY,(S?Bo(v.scaleY,S+h):h)-v.scaleY||0,td),this._pt.u=0,a.push("scaleY",m),m+="X";else if(m==="transformOrigin"){b.push(Wn,0,o[Wn]),u=bw(u),v.svg?sd(e,u,0,M,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==v.zOrigin&&Hs(this,v,"zOrigin",v.zOrigin,p),Hs(this,o,m,Vl(l),Vl(u)));continue}else if(m==="svgOrigin"){sd(e,u,1,M,0,this);continue}else if(m in Qg){Rw(this,v,m,d,S?Bo(d,S+u):u);continue}else if(m==="smoothOrigin"){Hs(this,v,"smooth",v.smooth,u);continue}else if(m==="force3D"){v[m]=u;continue}else if(m==="transform"){Pw(this,u,e);continue}}else m in o||(m=ta(m)||m);if(y||(h||h===0)&&(d||d===0)&&!dw.test(u)&&m in o)g=(l+"").substr((d+"").length),h||(h=0),p=_n(u)||(m in ui.units?ui.units[m]:g),g!==p&&(d=er(e,m,l,p)),this._pt=new Gn(this._pt,y?v:o,m,d,(S?Bo(d,S+h):h)-d,!y&&(p==="px"||m==="zIndex")&&t.autoRound!==!1?mw:td),this._pt.u=p||0,g!==p&&p!=="%"&&(this._pt.b=l,this._pt.r=pw);else if(m in o)ww.call(this,e,m,l,S?S+u:u);else if(m in e)this.add(e,m,l||e[m],S?S+u:u,i,r);else if(m!=="parseTransform"){Id(m,u);continue}y||(m in o?b.push(m,0,o[m]):b.push(m,1,l||e[m])),a.push(m)}}E&&Hg(this)},render:function(e,t){if(t.tween._time||!Xd())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:xs,aliases:$i,getSetter:function(e,t,n){var i=$i[t];return i&&i.indexOf(",")<0&&(t=i),t in As&&t!==Wn&&(e._gsap.x||xs(e,"x"))?n&&bm===n?t==="scale"?xw:vw:(bm=n||{})&&(t==="scale"?yw:Sw):e.style&&!Ld(e.style[t])?_w:~t.indexOf("-")?gw:Gd(e,t)},core:{_removeProperty:Yr,_getMatrix:jd}};qn.utils.checkPrefix=ta;qn.core.getStyleSaver=$g;(function(s,e,t,n){var i=Vn(s+","+e+","+t,function(r){As[r]=1});Vn(e,function(r){ui.units[r]="deg",Qg[r]=1}),$i[i[13]]=s+","+e,Vn(n,function(r){var a=r.split(":");$i[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Vn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){ui.units[s]="px"});qn.registerPlugin(n0);var xn=qn.registerPlugin(n0)||qn,Lw=xn.core.Tween;const i0="15.0.4",Nm=(s,e,t)=>({endTime:e,insertTime:t,type:"exponentialRampToValue",value:s}),Im=(s,e,t)=>({endTime:e,insertTime:t,type:"linearRampToValue",value:s}),rd=(s,e)=>({startTime:e,type:"setValue",value:s}),s0=(s,e,t)=>({duration:t,startTime:e,type:"setValueCurve",values:s}),r0=(s,e,{startTime:t,target:n,timeConstant:i})=>n+(e-n)*Math.exp((t-s)/i),Fo=s=>s.type==="exponentialRampToValue",Gl=s=>s.type==="linearRampToValue",Vs=s=>Fo(s)||Gl(s),$d=s=>s.type==="setValue",vs=s=>s.type==="setValueCurve",Wl=(s,e,t,n)=>{const i=s[e];return i===void 0?n:Vs(i)||$d(i)?i.value:vs(i)?i.values[i.values.length-1]:r0(t,Wl(s,e-1,i.startTime,n),i)},Om=(s,e,t,n,i)=>t===void 0?[n.insertTime,i]:Vs(t)?[t.endTime,t.value]:$d(t)?[t.startTime,t.value]:vs(t)?[t.startTime+t.duration,t.values[t.values.length-1]]:[t.startTime,Wl(s,e-1,t.startTime,i)],od=s=>s.type==="cancelAndHold",ad=s=>s.type==="cancelScheduledValues",zs=s=>od(s)||ad(s)?s.cancelTime:Fo(s)||Gl(s)?s.endTime:s.startTime,Um=(s,e,t,{endTime:n,value:i})=>t===i?i:0<t&&0<i||t<0&&i<0?t*(i/t)**((s-e)/(n-e)):0,km=(s,e,t,{endTime:n,value:i})=>t+(s-e)/(n-e)*(i-t),Fw=(s,e)=>{const t=Math.floor(e),n=Math.ceil(e);return t===n?s[t]:(1-(e-t))*s[t]+(1-(n-e))*s[n]},Nw=(s,{duration:e,startTime:t,values:n})=>{const i=(s-t)/e*(n.length-1);return Fw(n,i)},sl=s=>s.type==="setTarget";class Iw{constructor(e){this._automationEvents=[],this._currenTime=0,this._defaultValue=e}[Symbol.iterator](){return this._automationEvents[Symbol.iterator]()}add(e){const t=zs(e);if(od(e)||ad(e)){const n=this._automationEvents.findIndex(r=>ad(e)&&vs(r)?r.startTime+r.duration>=t:zs(r)>=t),i=this._automationEvents[n];if(n!==-1&&(this._automationEvents=this._automationEvents.slice(0,n)),od(e)){const r=this._automationEvents[this._automationEvents.length-1];if(i!==void 0&&Vs(i)){if(r!==void 0&&sl(r))throw new Error("The internal list is malformed.");const a=r===void 0?i.insertTime:vs(r)?r.startTime+r.duration:zs(r),o=r===void 0?this._defaultValue:vs(r)?r.values[r.values.length-1]:r.value,c=Fo(i)?Um(t,a,o,i):km(t,a,o,i),l=Fo(i)?Nm(c,t,this._currenTime):Im(c,t,this._currenTime);this._automationEvents.push(l)}if(r!==void 0&&sl(r)&&this._automationEvents.push(rd(this.getValue(t),t)),r!==void 0&&vs(r)&&r.startTime+r.duration>t){const a=t-r.startTime,o=(r.values.length-1)/r.duration,c=Math.max(2,1+Math.ceil(a*o)),l=a/(c-1)*o,u=r.values.slice(0,c);if(l<1)for(let h=1;h<c;h+=1){const d=l*h%1;u[h]=r.values[h-1]*(1-d)+r.values[h]*d}this._automationEvents[this._automationEvents.length-1]=s0(u,r.startTime,a)}}}else{const n=this._automationEvents.findIndex(a=>zs(a)>t),i=n===-1?this._automationEvents[this._automationEvents.length-1]:this._automationEvents[n-1];if(i!==void 0&&vs(i)&&zs(i)+i.duration>t)return!1;const r=Fo(e)?Nm(e.value,e.endTime,this._currenTime):Gl(e)?Im(e.value,t,this._currenTime):e;if(n===-1)this._automationEvents.push(r);else{if(vs(e)&&t+e.duration>zs(this._automationEvents[n]))return!1;this._automationEvents.splice(n,0,r)}}return!0}flush(e){const t=this._automationEvents.findIndex(n=>zs(n)>e);if(t>1){const n=this._automationEvents.slice(t-1),i=n[0];sl(i)&&n.unshift(rd(Wl(this._automationEvents,t-2,i.startTime,this._defaultValue),i.startTime)),this._automationEvents=n}}getValue(e){if(this._automationEvents.length===0)return this._defaultValue;const t=this._automationEvents.findIndex(a=>zs(a)>e),n=this._automationEvents[t],i=(t===-1?this._automationEvents.length:t)-1,r=this._automationEvents[i];if(r!==void 0&&sl(r)&&(n===void 0||!Vs(n)||n.insertTime>e))return r0(e,Wl(this._automationEvents,i-1,r.startTime,this._defaultValue),r);if(r!==void 0&&$d(r)&&(n===void 0||!Vs(n)))return r.value;if(r!==void 0&&vs(r)&&(n===void 0||!Vs(n)||r.startTime+r.duration>e))return e<r.startTime+r.duration?Nw(e,r):r.values[r.values.length-1];if(r!==void 0&&Vs(r)&&(n===void 0||!Vs(n)))return r.value;if(n!==void 0&&Fo(n)){const[a,o]=Om(this._automationEvents,i,r,n,this._defaultValue);return Um(e,a,o,n)}if(n!==void 0&&Gl(n)){const[a,o]=Om(this._automationEvents,i,r,n,this._defaultValue);return km(e,a,o,n)}return this._defaultValue}}const Ow=s=>({cancelTime:s,type:"cancelAndHold"}),Uw=s=>({cancelTime:s,type:"cancelScheduledValues"}),kw=(s,e)=>({endTime:e,type:"exponentialRampToValue",value:s}),zw=(s,e)=>({endTime:e,type:"linearRampToValue",value:s}),Bw=(s,e,t)=>({startTime:e,target:s,timeConstant:t,type:"setTarget"}),Vw=()=>new DOMException("","AbortError"),Gw=s=>(e,t,[n,i,r],a)=>{s(e[i],[t,n,r],o=>o[0]===t&&o[1]===n,a)},Ww=s=>(e,t,n)=>{const i=[];for(let r=0;r<n.numberOfInputs;r+=1)i.push(new Set);s.set(e,{activeInputs:i,outputs:new Set,passiveInputs:new WeakMap,renderer:t})},Hw=s=>(e,t)=>{s.set(e,{activeInputs:new Set,passiveInputs:new WeakMap,renderer:t})},na=new WeakSet,o0=new WeakMap,Zd=new WeakMap,a0=new WeakMap,Kd=new WeakMap,mu=new WeakMap,c0=new WeakMap,cd=new WeakMap,ld=new WeakMap,ud=new WeakMap,l0={construct(){return l0}},qw=s=>{try{const e=new Proxy(s,l0);new e}catch{return!1}return!0},zm=/^import(?:(?:[\s]+[\w]+|(?:[\s]+[\w]+[\s]*,)?[\s]*\{[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?(?:[\s]*,[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?)*[\s]*}|(?:[\s]+[\w]+[\s]*,)?[\s]*\*[\s]+as[\s]+[\w]+)[\s]+from)?(?:[\s]*)("([^"\\]|\\.)+"|'([^'\\]|\\.)+')(?:[\s]*);?/,Bm=(s,e)=>{const t=[];let n=s.replace(/^[\s]+/,""),i=n.match(zm);for(;i!==null;){const r=i[1].slice(1,-1),a=i[0].replace(/([\s]+)?;?$/,"").replace(r,new URL(r,e).toString());t.push(a),n=n.slice(i[0].length).replace(/^[\s]+/,""),i=n.match(zm)}return[t.join(";"),n]},Vm=s=>{if(s!==void 0&&!Array.isArray(s))throw new TypeError("The parameterDescriptors property of given value for processorCtor is not an array.")},Gm=s=>{if(!qw(s))throw new TypeError("The given value for processorCtor should be a constructor.");if(s.prototype===null||typeof s.prototype!="object")throw new TypeError("The given value for processorCtor should have a prototype.")},Xw=(s,e,t,n,i,r,a,o,c,l,u,h,d)=>{let f=0;return(_,m,g={credentials:"omit"})=>{const p=u.get(_);if(p!==void 0&&p.has(m))return Promise.resolve();const S=l.get(_);if(S!==void 0){const v=S.get(m);if(v!==void 0)return v}const y=r(_),T=y.audioWorklet===void 0?i(m).then(([v,M])=>{const[E,b]=Bm(v,M),x=`${E};((a,b)=>{(a[b]=a[b]||[]).push((AudioWorkletProcessor,global,registerProcessor,sampleRate,self,window)=>{${b}
})})(window,'_AWGS')`;return t(x)}).then(()=>{const v=d._AWGS.pop();if(v===void 0)throw new SyntaxError;n(y.currentTime,y.sampleRate,()=>v(class{},void 0,(M,E)=>{if(M.trim()==="")throw e();const b=ld.get(y);if(b!==void 0){if(b.has(M))throw e();Gm(E),Vm(E.parameterDescriptors),b.set(M,E)}else Gm(E),Vm(E.parameterDescriptors),ld.set(y,new Map([[M,E]]))},y.sampleRate,void 0,void 0))}):Promise.all([i(m),Promise.resolve(s(h,h))]).then(([[v,M],E])=>{const b=f+1;f=b;const[x,w]=Bm(v,M),N=`${x};((AudioWorkletProcessor,registerProcessor)=>{${w}
})(${E?"AudioWorkletProcessor":"class extends AudioWorkletProcessor {__b=new WeakSet();constructor(){super();(p=>p.postMessage=(q=>(m,t)=>q.call(p,m,t?t.filter(u=>!this.__b.has(u)):t))(p.postMessage))(this.port)}}"},(n,p)=>registerProcessor(n,class extends p{${E?"":"__c = (a) => a.forEach(e=>this.__b.add(e.buffer));"}process(i,o,p){${E?"":"i.forEach(this.__c);o.forEach(this.__c);this.__c(Object.values(p));"}return super.process(i.map(j=>j.some(k=>k.length===0)?[]:j),o,p)}}));registerProcessor('__sac${b}',class extends AudioWorkletProcessor{process(){return !1}})`,k=new Blob([N],{type:"application/javascript; charset=utf-8"}),z=URL.createObjectURL(k);return y.audioWorklet.addModule(z,g).then(()=>{if(o(y))return y;const U=a(y);return U.audioWorklet.addModule(z,g).then(()=>U)}).then(U=>{if(c===null)throw new SyntaxError;try{new c(U,`__sac${b}`)}catch{throw new SyntaxError}}).finally(()=>URL.revokeObjectURL(z))});return S===void 0?l.set(_,new Map([[m,T]])):S.set(m,T),T.then(()=>{const v=u.get(_);v===void 0?u.set(_,new Set([m])):v.add(m)}).finally(()=>{const v=l.get(_);v!==void 0&&v.delete(m)}),T}},Bi=(s,e)=>{const t=s.get(e);if(t===void 0)throw new Error("A value with the given key could not be found.");return t},_u=(s,e)=>{const t=Array.from(s).filter(e);if(t.length>1)throw Error("More than one element was found.");if(t.length===0)throw Error("No element was found.");const[n]=t;return s.delete(n),n},u0=(s,e,t,n)=>{const i=Bi(s,e),r=_u(i,a=>a[0]===t&&a[1]===n);return i.size===0&&s.delete(e),r},Sc=s=>Bi(c0,s),ia=s=>{if(na.has(s))throw new Error("The AudioNode is already stored.");na.add(s),Sc(s).forEach(e=>e(!0))},h0=s=>"port"in s,Tc=s=>{if(!na.has(s))throw new Error("The AudioNode is not stored.");na.delete(s),Sc(s).forEach(e=>e(!1))},hd=(s,e)=>{!h0(s)&&e.every(t=>t.size===0)&&Tc(s)},Yw=(s,e,t,n,i,r,a,o,c,l,u,h,d)=>{const f=new WeakMap;return(_,m,g,p,S)=>{const{activeInputs:y,passiveInputs:T}=r(m),{outputs:v}=r(_),M=o(_),E=b=>{const x=c(m),w=c(_);if(b){const F=u0(T,_,g,p);s(y,_,F,!1),!S&&!h(_)&&t(w,x,g,p),d(m)&&ia(m)}else{const F=n(y,_,g,p);e(T,p,F,!1),!S&&!h(_)&&i(w,x,g,p);const R=a(m);if(R===0)u(m)&&hd(m,y);else{const L=f.get(m);L!==void 0&&clearTimeout(L),f.set(m,setTimeout(()=>{u(m)&&hd(m,y)},R*1e3))}}};return l(v,[m,g,p],b=>b[0]===m&&b[1]===g&&b[2]===p,!0)?(M.add(E),u(_)?s(y,_,[g,p,E],!0):e(T,p,[_,g,E],!0),!0):!1}},jw=s=>(e,t,[n,i,r],a)=>{const o=e.get(n);o===void 0?e.set(n,new Set([[i,t,r]])):s(o,[i,t,r],c=>c[0]===i&&c[1]===t,a)},$w=s=>(e,t)=>{const n=s(e,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});t.connect(n).connect(e.destination);const i=()=>{t.removeEventListener("ended",i),t.disconnect(n),n.disconnect()};t.addEventListener("ended",i)},Zw=s=>(e,t)=>{s(e).add(t)},Kw={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",fftSize:2048,maxDecibels:-30,minDecibels:-100,smoothingTimeConstant:.8},Jw=(s,e,t,n,i,r)=>class extends s{constructor(o,c){const l=i(o),u={...Kw,...c},h=n(l,u),d=r(l)?e():null;super(o,!1,h,d),this._nativeAnalyserNode=h}get fftSize(){return this._nativeAnalyserNode.fftSize}set fftSize(o){this._nativeAnalyserNode.fftSize=o}get frequencyBinCount(){return this._nativeAnalyserNode.frequencyBinCount}get maxDecibels(){return this._nativeAnalyserNode.maxDecibels}set maxDecibels(o){const c=this._nativeAnalyserNode.maxDecibels;if(this._nativeAnalyserNode.maxDecibels=o,!(o>this._nativeAnalyserNode.minDecibels))throw this._nativeAnalyserNode.maxDecibels=c,t()}get minDecibels(){return this._nativeAnalyserNode.minDecibels}set minDecibels(o){const c=this._nativeAnalyserNode.minDecibels;if(this._nativeAnalyserNode.minDecibels=o,!(this._nativeAnalyserNode.maxDecibels>o))throw this._nativeAnalyserNode.minDecibels=c,t()}get smoothingTimeConstant(){return this._nativeAnalyserNode.smoothingTimeConstant}set smoothingTimeConstant(o){this._nativeAnalyserNode.smoothingTimeConstant=o}getByteFrequencyData(o){this._nativeAnalyserNode.getByteFrequencyData(o)}getByteTimeDomainData(o){this._nativeAnalyserNode.getByteTimeDomainData(o)}getFloatFrequencyData(o){this._nativeAnalyserNode.getFloatFrequencyData(o)}getFloatTimeDomainData(o){this._nativeAnalyserNode.getFloatTimeDomainData(o)}},yn=(s,e)=>s.context===e,Qw=(s,e,t)=>()=>{const n=new WeakMap,i=async(r,a)=>{let o=e(r);if(!yn(o,a)){const l={channelCount:o.channelCount,channelCountMode:o.channelCountMode,channelInterpretation:o.channelInterpretation,fftSize:o.fftSize,maxDecibels:o.maxDecibels,minDecibels:o.minDecibels,smoothingTimeConstant:o.smoothingTimeConstant};o=s(a,l)}return n.set(a,o),await t(r,a,o),o};return{render(r,a){const o=n.get(a);return o!==void 0?Promise.resolve(o):i(r,a)}}},Hl=s=>{try{s.copyToChannel(new Float32Array(1),0,-1)}catch{return!1}return!0},as=()=>new DOMException("","IndexSizeError"),Jd=s=>{s.getChannelData=(e=>t=>{try{return e.call(s,t)}catch(n){throw n.code===12?as():n}})(s.getChannelData)},eb={numberOfChannels:1},tb=(s,e,t,n,i,r,a,o)=>{let c=null;return class d0{constructor(u){if(i===null)throw new Error("Missing the native OfflineAudioContext constructor.");const{length:h,numberOfChannels:d,sampleRate:f}={...eb,...u};c===null&&(c=new i(1,1,44100));const _=n!==null&&e(r,r)?new n({length:h,numberOfChannels:d,sampleRate:f}):c.createBuffer(d,h,f);if(_.numberOfChannels===0)throw t();return typeof _.copyFromChannel!="function"?(a(_),Jd(_)):e(Hl,()=>Hl(_))||o(_),s.add(_),_}static[Symbol.hasInstance](u){return u!==null&&typeof u=="object"&&Object.getPrototypeOf(u)===d0.prototype||s.has(u)}}},kn=-34028234663852886e22,Cn=-kn,Es=s=>na.has(s),nb={buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1},ib=(s,e,t,n,i,r,a,o)=>class extends s{constructor(l,u){const h=r(l),d={...nb,...u},f=i(h,d),_=a(h),m=_?e():null;super(l,!1,f,m),this._audioBufferSourceNodeRenderer=m,this._isBufferNullified=!1,this._isBufferSet=d.buffer!==null,this._nativeAudioBufferSourceNode=f,this._onended=null,this._playbackRate=t(this,_,f.playbackRate,Cn,kn)}get buffer(){return this._isBufferNullified?null:this._nativeAudioBufferSourceNode.buffer}set buffer(l){if(this._nativeAudioBufferSourceNode.buffer=l,l!==null){if(this._isBufferSet)throw n();this._isBufferSet=!0}}get loop(){return this._nativeAudioBufferSourceNode.loop}set loop(l){this._nativeAudioBufferSourceNode.loop=l}get loopEnd(){return this._nativeAudioBufferSourceNode.loopEnd}set loopEnd(l){this._nativeAudioBufferSourceNode.loopEnd=l}get loopStart(){return this._nativeAudioBufferSourceNode.loopStart}set loopStart(l){this._nativeAudioBufferSourceNode.loopStart=l}get onended(){return this._onended}set onended(l){const u=typeof l=="function"?o(this,l):null;this._nativeAudioBufferSourceNode.onended=u;const h=this._nativeAudioBufferSourceNode.onended;this._onended=h!==null&&h===u?l:h}get playbackRate(){return this._playbackRate}start(l=0,u=0,h){if(this._nativeAudioBufferSourceNode.start(l,u,h),this._audioBufferSourceNodeRenderer!==null&&(this._audioBufferSourceNodeRenderer.start=h===void 0?[l,u]:[l,u,h]),this.context.state!=="closed"){ia(this);const d=()=>{this._nativeAudioBufferSourceNode.removeEventListener("ended",d),Es(this)&&Tc(this)};this._nativeAudioBufferSourceNode.addEventListener("ended",d)}}stop(l=0){this._nativeAudioBufferSourceNode.stop(l),this._audioBufferSourceNodeRenderer!==null&&(this._audioBufferSourceNodeRenderer.stop=l)}},sb=(s,e,t,n,i)=>()=>{const r=new WeakMap;let a=null,o=null;const c=async(l,u)=>{let h=t(l);const d=yn(h,u);if(!d){const f={buffer:h.buffer,channelCount:h.channelCount,channelCountMode:h.channelCountMode,channelInterpretation:h.channelInterpretation,loop:h.loop,loopEnd:h.loopEnd,loopStart:h.loopStart,playbackRate:h.playbackRate.value};h=e(u,f),a!==null&&h.start(...a),o!==null&&h.stop(o)}return r.set(u,h),d?await s(u,l.playbackRate,h.playbackRate):await n(u,l.playbackRate,h.playbackRate),await i(l,u,h),h};return{set start(l){a=l},set stop(l){o=l},render(l,u){const h=r.get(u);return h!==void 0?Promise.resolve(h):c(l,u)}}},rb=s=>"playbackRate"in s,ob=s=>"frequency"in s&&"gain"in s,ab=s=>"offset"in s,cb=s=>!("frequency"in s)&&"gain"in s,lb=s=>"detune"in s&&"frequency"in s,ub=s=>"pan"in s,Fn=s=>Bi(o0,s),Mc=s=>Bi(a0,s),dd=(s,e)=>{const{activeInputs:t}=Fn(s);t.forEach(i=>i.forEach(([r])=>{e.includes(s)||dd(r,[...e,s])}));const n=rb(s)?[s.playbackRate]:h0(s)?Array.from(s.parameters.values()):ob(s)?[s.Q,s.detune,s.frequency,s.gain]:ab(s)?[s.offset]:cb(s)?[s.gain]:lb(s)?[s.detune,s.frequency]:ub(s)?[s.pan]:[];for(const i of n){const r=Mc(i);r!==void 0&&r.activeInputs.forEach(([a])=>dd(a,e))}Es(s)&&Tc(s)},f0=s=>{dd(s.destination,[])},hb=s=>s===void 0||typeof s=="number"||typeof s=="string"&&(s==="balanced"||s==="interactive"||s==="playback"),db=(s,e,t,n,i,r,a,o,c)=>class extends s{constructor(u={}){if(c===null)throw new Error("Missing the native AudioContext constructor.");let h;try{h=new c(u)}catch(_){throw _.code===12&&_.message==="sampleRate is not in range"?t():_}if(h===null)throw n();if(!hb(u.latencyHint))throw new TypeError(`The provided value '${u.latencyHint}' is not a valid enum value of type AudioContextLatencyCategory.`);if(u.sampleRate!==void 0&&h.sampleRate!==u.sampleRate)throw t();super(h,2);const{latencyHint:d}=u,{sampleRate:f}=h;if(this._baseLatency=typeof h.baseLatency=="number"?h.baseLatency:d==="balanced"?512/f:d==="interactive"||d===void 0?256/f:d==="playback"?1024/f:Math.max(2,Math.min(128,Math.round(d*f/128)))*128/f,this._nativeAudioContext=h,c.name==="webkitAudioContext"?(this._nativeGainNode=h.createGain(),this._nativeOscillatorNode=h.createOscillator(),this._nativeGainNode.gain.value=1e-37,this._nativeOscillatorNode.connect(this._nativeGainNode).connect(h.destination),this._nativeOscillatorNode.start()):(this._nativeGainNode=null,this._nativeOscillatorNode=null),this._state=null,h.state==="running"){this._state="suspended";const _=()=>{this._state==="suspended"&&(this._state=null),h.removeEventListener("statechange",_)};h.addEventListener("statechange",_)}}get baseLatency(){return this._baseLatency}get state(){return this._state!==null?this._state:this._nativeAudioContext.state}close(){return this.state==="closed"?this._nativeAudioContext.close().then(()=>{throw e()}):(this._state==="suspended"&&(this._state=null),this._nativeAudioContext.close().then(()=>{this._nativeGainNode!==null&&this._nativeOscillatorNode!==null&&(this._nativeOscillatorNode.stop(),this._nativeGainNode.disconnect(),this._nativeOscillatorNode.disconnect()),f0(this)}))}createMediaElementSource(u){return new i(this,{mediaElement:u})}createMediaStreamDestination(){return new r(this)}createMediaStreamSource(u){return new a(this,{mediaStream:u})}createMediaStreamTrackSource(u){return new o(this,{mediaStreamTrack:u})}resume(){return this._state==="suspended"?new Promise((u,h)=>{const d=()=>{this._nativeAudioContext.removeEventListener("statechange",d),this._nativeAudioContext.state==="running"?u():this.resume().then(u,h)};this._nativeAudioContext.addEventListener("statechange",d)}):this._nativeAudioContext.resume().catch(u=>{throw u===void 0||u.code===15?e():u})}suspend(){return this._nativeAudioContext.suspend().catch(u=>{throw u===void 0?e():u})}},fb=(s,e,t,n,i,r,a,o)=>class extends s{constructor(l,u){const h=r(l),d=a(h),f=i(h,u,d),_=d?e(o):null;super(l,!1,f,_),this._isNodeOfNativeOfflineAudioContext=d,this._nativeAudioDestinationNode=f}get channelCount(){return this._nativeAudioDestinationNode.channelCount}set channelCount(l){if(this._isNodeOfNativeOfflineAudioContext)throw n();if(l>this._nativeAudioDestinationNode.maxChannelCount)throw t();this._nativeAudioDestinationNode.channelCount=l}get channelCountMode(){return this._nativeAudioDestinationNode.channelCountMode}set channelCountMode(l){if(this._isNodeOfNativeOfflineAudioContext)throw n();this._nativeAudioDestinationNode.channelCountMode=l}get maxChannelCount(){return this._nativeAudioDestinationNode.maxChannelCount}},pb=s=>{const e=new WeakMap,t=async(n,i)=>{const r=i.destination;return e.set(i,r),await s(n,i,r),r};return{render(n,i){const r=e.get(i);return r!==void 0?Promise.resolve(r):t(n,i)}}},mb=(s,e,t,n,i,r,a,o)=>(c,l)=>{const u=l.listener,h=()=>{const v=new Float32Array(1),M=e(l,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:9}),E=a(l);let b=!1,x=[0,0,-1,0,1,0],w=[0,0,0];const F=()=>{if(b)return;b=!0;const k=n(l,256,9,0);k.onaudioprocess=({inputBuffer:z})=>{const U=[r(z,v,0),r(z,v,1),r(z,v,2),r(z,v,3),r(z,v,4),r(z,v,5)];U.some((H,D)=>H!==x[D])&&(u.setOrientation(...U),x=U);const V=[r(z,v,6),r(z,v,7),r(z,v,8)];V.some((H,D)=>H!==w[D])&&(u.setPosition(...V),w=V)},M.connect(k)},R=k=>z=>{z!==x[k]&&(x[k]=z,u.setOrientation(...x))},L=k=>z=>{z!==w[k]&&(w[k]=z,u.setPosition(...w))},N=(k,z,U)=>{const V=t(l,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",offset:z});V.connect(M,0,k),V.start(),Object.defineProperty(V.offset,"defaultValue",{get(){return z}});const H=s({context:c},E,V.offset,Cn,kn);return o(H,"value",D=>()=>D.call(H),D=>te=>{try{D.call(H,te)}catch(ee){if(ee.code!==9)throw ee}F(),E&&U(te)}),H.cancelAndHoldAtTime=(D=>E?()=>{throw i()}:(...te)=>{const ee=D.apply(H,te);return F(),ee})(H.cancelAndHoldAtTime),H.cancelScheduledValues=(D=>E?()=>{throw i()}:(...te)=>{const ee=D.apply(H,te);return F(),ee})(H.cancelScheduledValues),H.exponentialRampToValueAtTime=(D=>E?()=>{throw i()}:(...te)=>{const ee=D.apply(H,te);return F(),ee})(H.exponentialRampToValueAtTime),H.linearRampToValueAtTime=(D=>E?()=>{throw i()}:(...te)=>{const ee=D.apply(H,te);return F(),ee})(H.linearRampToValueAtTime),H.setTargetAtTime=(D=>E?()=>{throw i()}:(...te)=>{const ee=D.apply(H,te);return F(),ee})(H.setTargetAtTime),H.setValueAtTime=(D=>E?()=>{throw i()}:(...te)=>{const ee=D.apply(H,te);return F(),ee})(H.setValueAtTime),H.setValueCurveAtTime=(D=>E?()=>{throw i()}:(...te)=>{const ee=D.apply(H,te);return F(),ee})(H.setValueCurveAtTime),H};return{forwardX:N(0,0,R(0)),forwardY:N(1,0,R(1)),forwardZ:N(2,-1,R(2)),positionX:N(6,0,L(0)),positionY:N(7,0,L(1)),positionZ:N(8,0,L(2)),upX:N(3,0,R(3)),upY:N(4,1,R(4)),upZ:N(5,0,R(5))}},{forwardX:d,forwardY:f,forwardZ:_,positionX:m,positionY:g,positionZ:p,upX:S,upY:y,upZ:T}=u.forwardX===void 0?h():u;return{get forwardX(){return d},get forwardY(){return f},get forwardZ(){return _},get positionX(){return m},get positionY(){return g},get positionZ(){return p},get upX(){return S},get upY(){return y},get upZ(){return T}}},ql=s=>"context"in s,Ec=s=>ql(s[0]),no=(s,e,t,n)=>{for(const i of s)if(t(i)){if(n)return!1;throw Error("The set contains at least one similar element.")}return s.add(e),!0},Wm=(s,e,[t,n],i)=>{no(s,[e,t,n],r=>r[0]===e&&r[1]===t,i)},Hm=(s,[e,t,n],i)=>{const r=s.get(e);r===void 0?s.set(e,new Set([[t,n]])):no(r,[t,n],a=>a[0]===t,i)},pa=s=>"inputs"in s,Xl=(s,e,t,n)=>{if(pa(e)){const i=e.inputs[n];return s.connect(i,t,0),[i,t,0]}return s.connect(e,t,n),[e,t,n]},p0=(s,e,t)=>{for(const n of s)if(n[0]===e&&n[1]===t)return s.delete(n),n;return null},_b=(s,e,t)=>_u(s,n=>n[0]===e&&n[1]===t),m0=(s,e)=>{if(!Sc(s).delete(e))throw new Error("Missing the expected event listener.")},_0=(s,e,t)=>{const n=Bi(s,e),i=_u(n,r=>r[0]===t);return n.size===0&&s.delete(e),i},Yl=(s,e,t,n)=>{pa(e)?s.disconnect(e.inputs[n],t,0):s.disconnect(e,t,n)},Mt=s=>Bi(Zd,s),hc=s=>Bi(Kd,s),jr=s=>cd.has(s),wl=s=>!na.has(s),qm=(s,e)=>new Promise(t=>{if(e!==null)t(!0);else{const n=s.createScriptProcessor(256,1,1),i=s.createGain(),r=s.createBuffer(1,2,44100),a=r.getChannelData(0);a[0]=1,a[1]=1;const o=s.createBufferSource();o.buffer=r,o.loop=!0,o.connect(n).connect(s.destination),o.connect(i),o.disconnect(i),n.onaudioprocess=c=>{const l=c.inputBuffer.getChannelData(0);Array.prototype.some.call(l,u=>u===1)?t(!0):t(!1),o.stop(),n.onaudioprocess=null,o.disconnect(n),n.disconnect(s.destination)},o.start()}}),Th=(s,e)=>{const t=new Map;for(const n of s)for(const i of n){const r=t.get(i);t.set(i,r===void 0?1:r+1)}t.forEach((n,i)=>e(i,n))},jl=s=>"context"in s,gb=s=>{const e=new Map;s.connect=(t=>(n,i=0,r=0)=>{const a=jl(n)?t(n,i,r):t(n,i),o=e.get(n);return o===void 0?e.set(n,[{input:r,output:i}]):o.every(c=>c.input!==r||c.output!==i)&&o.push({input:r,output:i}),a})(s.connect.bind(s)),s.disconnect=(t=>(n,i,r)=>{if(t.apply(s),n===void 0)e.clear();else if(typeof n=="number")for(const[a,o]of e){const c=o.filter(l=>l.output!==n);c.length===0?e.delete(a):e.set(a,c)}else if(e.has(n))if(i===void 0)e.delete(n);else{const a=e.get(n);if(a!==void 0){const o=a.filter(c=>c.output!==i&&(c.input!==r||r===void 0));o.length===0?e.delete(n):e.set(n,o)}}for(const[a,o]of e)o.forEach(c=>{jl(a)?s.connect(a,c.output,c.input):s.connect(a,c.output)})})(s.disconnect)},vb=(s,e,t,n)=>{const{activeInputs:i,passiveInputs:r}=Mc(e),{outputs:a}=Fn(s),o=Sc(s),c=l=>{const u=Mt(s),h=hc(e);if(l){const d=_0(r,s,t);Wm(i,s,d,!1),!n&&!jr(s)&&u.connect(h,t)}else{const d=_b(i,s,t);Hm(r,d,!1),!n&&!jr(s)&&u.disconnect(h,t)}};return no(a,[e,t],l=>l[0]===e&&l[1]===t,!0)?(o.add(c),Es(s)?Wm(i,s,[t,c],!0):Hm(r,[s,t,c],!0),!0):!1},xb=(s,e,t,n)=>{const{activeInputs:i,passiveInputs:r}=Fn(e),a=p0(i[n],s,t);return a===null?[u0(r,s,t,n)[2],!1]:[a[2],!0]},yb=(s,e,t)=>{const{activeInputs:n,passiveInputs:i}=Mc(e),r=p0(n,s,t);return r===null?[_0(i,s,t)[1],!1]:[r[2],!0]},Qd=(s,e,t,n,i)=>{const[r,a]=xb(s,t,n,i);if(r!==null&&(m0(s,r),a&&!e&&!jr(s)&&Yl(Mt(s),Mt(t),n,i)),Es(t)){const{activeInputs:o}=Fn(t);hd(t,o)}},ef=(s,e,t,n)=>{const[i,r]=yb(s,t,n);i!==null&&(m0(s,i),r&&!e&&!jr(s)&&Mt(s).disconnect(hc(t),n))},Sb=(s,e)=>{const t=Fn(s),n=[];for(const i of t.outputs)Ec(i)?Qd(s,e,...i):ef(s,e,...i),n.push(i[0]);return t.outputs.clear(),n},Tb=(s,e,t)=>{const n=Fn(s),i=[];for(const r of n.outputs)r[1]===t&&(Ec(r)?Qd(s,e,...r):ef(s,e,...r),i.push(r[0]),n.outputs.delete(r));return i},Mb=(s,e,t,n,i)=>{const r=Fn(s);return Array.from(r.outputs).filter(a=>a[0]===t&&(n===void 0||a[1]===n)&&(i===void 0||a[2]===i)).map(a=>(Ec(a)?Qd(s,e,...a):ef(s,e,...a),r.outputs.delete(a),a[0]))},Eb=(s,e,t,n,i,r,a,o,c,l,u,h,d,f,_,m)=>class extends l{constructor(p,S,y,T){super(y),this._context=p,this._nativeAudioNode=y;const v=u(p);h(v)&&t(qm,()=>qm(v,m))!==!0&&gb(y),Zd.set(this,y),c0.set(this,new Set),p.state!=="closed"&&S&&ia(this),s(this,T,y)}get channelCount(){return this._nativeAudioNode.channelCount}set channelCount(p){this._nativeAudioNode.channelCount=p}get channelCountMode(){return this._nativeAudioNode.channelCountMode}set channelCountMode(p){this._nativeAudioNode.channelCountMode=p}get channelInterpretation(){return this._nativeAudioNode.channelInterpretation}set channelInterpretation(p){this._nativeAudioNode.channelInterpretation=p}get context(){return this._context}get numberOfInputs(){return this._nativeAudioNode.numberOfInputs}get numberOfOutputs(){return this._nativeAudioNode.numberOfOutputs}connect(p,S=0,y=0){if(S<0||S>=this._nativeAudioNode.numberOfOutputs)throw i();const T=u(this._context),v=_(T);if(d(p)||f(p))throw r();if(ql(p)){const b=Mt(p);try{const w=Xl(this._nativeAudioNode,b,S,y),F=wl(this);(v||F)&&this._nativeAudioNode.disconnect(...w),this.context.state!=="closed"&&!F&&wl(p)&&ia(p)}catch(w){throw w.code===12?r():w}if(e(this,p,S,y,v)){const w=c([this],p);Th(w,n(v))}return p}const M=hc(p);if(M.name==="playbackRate"&&M.maxValue===1024)throw a();try{this._nativeAudioNode.connect(M,S),(v||wl(this))&&this._nativeAudioNode.disconnect(M,S)}catch(b){throw b.code===12?r():b}if(vb(this,p,S,v)){const b=c([this],p);Th(b,n(v))}}disconnect(p,S,y){let T;const v=u(this._context),M=_(v);if(p===void 0)T=Sb(this,M);else if(typeof p=="number"){if(p<0||p>=this.numberOfOutputs)throw i();T=Tb(this,M,p)}else{if(S!==void 0&&(S<0||S>=this.numberOfOutputs)||ql(p)&&y!==void 0&&(y<0||y>=p.numberOfInputs))throw i();if(T=Mb(this,M,p,S,y),T.length===0)throw r()}for(const E of T){const b=c([this],E);Th(b,o)}}},wb=(s,e,t,n,i,r,a,o,c,l,u,h,d)=>(f,_,m,g=null,p=null)=>{const S=m.value,y=new Iw(S),T=_?n(y):null,v={get defaultValue(){return S},get maxValue(){return g===null?m.maxValue:g},get minValue(){return p===null?m.minValue:p},get value(){return m.value},set value(M){m.value=M,v.setValueAtTime(M,f.context.currentTime)},cancelAndHoldAtTime(M){if(typeof m.cancelAndHoldAtTime=="function")T===null&&y.flush(f.context.currentTime),y.add(i(M)),m.cancelAndHoldAtTime(M);else{const E=Array.from(y).pop();T===null&&y.flush(f.context.currentTime),y.add(i(M));const b=Array.from(y).pop();m.cancelScheduledValues(M),E!==b&&b!==void 0&&(b.type==="exponentialRampToValue"?m.exponentialRampToValueAtTime(b.value,b.endTime):b.type==="linearRampToValue"?m.linearRampToValueAtTime(b.value,b.endTime):b.type==="setValue"?m.setValueAtTime(b.value,b.startTime):b.type==="setValueCurve"&&m.setValueCurveAtTime(b.values,b.startTime,b.duration))}return v},cancelScheduledValues(M){return T===null&&y.flush(f.context.currentTime),y.add(r(M)),m.cancelScheduledValues(M),v},exponentialRampToValueAtTime(M,E){if(M===0)throw new RangeError;if(!Number.isFinite(E)||E<0)throw new RangeError;const b=f.context.currentTime;return T===null&&y.flush(b),Array.from(y).length===0&&(y.add(l(S,b)),m.setValueAtTime(S,b)),y.add(a(M,E)),m.exponentialRampToValueAtTime(M,E),v},linearRampToValueAtTime(M,E){const b=f.context.currentTime;return T===null&&y.flush(b),Array.from(y).length===0&&(y.add(l(S,b)),m.setValueAtTime(S,b)),y.add(o(M,E)),m.linearRampToValueAtTime(M,E),v},setTargetAtTime(M,E,b){return T===null&&y.flush(f.context.currentTime),y.add(c(M,E,b)),m.setTargetAtTime(M,E,b),v},setValueAtTime(M,E){return T===null&&y.flush(f.context.currentTime),y.add(l(M,E)),m.setValueAtTime(M,E),v},setValueCurveAtTime(M,E,b){const x=M instanceof Float32Array?M:new Float32Array(M);if(h!==null&&h.name==="webkitAudioContext"){const w=E+b,F=f.context.sampleRate,R=Math.ceil(E*F),L=Math.floor(w*F),N=L-R,k=new Float32Array(N);for(let U=0;U<N;U+=1){const V=(x.length-1)/b*((R+U)/F-E),H=Math.floor(V),D=Math.ceil(V);k[U]=H===D?x[H]:(1-(V-H))*x[H]+(1-(D-V))*x[D]}T===null&&y.flush(f.context.currentTime),y.add(u(k,E,b)),m.setValueCurveAtTime(k,E,b);const z=L/F;z<w&&d(v,k[k.length-1],z),d(v,x[x.length-1],w)}else T===null&&y.flush(f.context.currentTime),y.add(u(x,E,b)),m.setValueCurveAtTime(x,E,b);return v}};return t.set(v,m),e.set(v,f),s(v,T),v},bb=s=>({replay(e){for(const t of s)if(t.type==="exponentialRampToValue"){const{endTime:n,value:i}=t;e.exponentialRampToValueAtTime(i,n)}else if(t.type==="linearRampToValue"){const{endTime:n,value:i}=t;e.linearRampToValueAtTime(i,n)}else if(t.type==="setTarget"){const{startTime:n,target:i,timeConstant:r}=t;e.setTargetAtTime(i,n,r)}else if(t.type==="setValue"){const{startTime:n,value:i}=t;e.setValueAtTime(i,n)}else if(t.type==="setValueCurve"){const{duration:n,startTime:i,values:r}=t;e.setValueCurveAtTime(r,i,n)}else throw new Error("Can't apply an unknown automation.")}});class g0{constructor(e){this._map=new Map(e)}get size(){return this._map.size}entries(){return this._map.entries()}forEach(e,t=null){return this._map.forEach((n,i)=>e.call(t,n,i,this))}get(e){return this._map.get(e)}has(e){return this._map.has(e)}keys(){return this._map.keys()}values(){return this._map.values()}}const Db={channelCount:2,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:1,numberOfOutputs:1,parameterData:{},processorOptions:{}},Ab=(s,e,t,n,i,r,a,o,c,l,u,h,d,f)=>class extends e{constructor(m,g,p){var S;const y=o(m),T=c(y),v=u({...Db,...p});d(v);const M=ld.get(y),E=M==null?void 0:M.get(g),b=T||y.state!=="closed"?y:(S=a(y))!==null&&S!==void 0?S:y,x=i(b,T?null:m.baseLatency,l,g,E,v),w=T?n(g,v,E):null;super(m,!0,x,w);const F=[];x.parameters.forEach((L,N)=>{const k=t(this,T,L);F.push([N,k])}),this._nativeAudioWorkletNode=x,this._onprocessorerror=null,this._parameters=new g0(F),T&&s(y,this);const{activeInputs:R}=r(this);h(x,R)}get onprocessorerror(){return this._onprocessorerror}set onprocessorerror(m){const g=typeof m=="function"?f(this,m):null;this._nativeAudioWorkletNode.onprocessorerror=g;const p=this._nativeAudioWorkletNode.onprocessorerror;this._onprocessorerror=p!==null&&p===g?m:p}get parameters(){return this._parameters===null?this._nativeAudioWorkletNode.parameters:this._parameters}get port(){return this._nativeAudioWorkletNode.port}};function $l(s,e,t,n,i){if(typeof s.copyFromChannel=="function")e[t].byteLength===0&&(e[t]=new Float32Array(128)),s.copyFromChannel(e[t],n,i);else{const r=s.getChannelData(n);if(e[t].byteLength===0)e[t]=r.slice(i,i+128);else{const a=new Float32Array(r.buffer,i*Float32Array.BYTES_PER_ELEMENT,128);e[t].set(a)}}}const v0=(s,e,t,n,i)=>{typeof s.copyToChannel=="function"?e[t].byteLength!==0&&s.copyToChannel(e[t],n,i):e[t].byteLength!==0&&s.getChannelData(n).set(e[t],i)},Zl=(s,e)=>{const t=[];for(let n=0;n<s;n+=1){const i=[],r=typeof e=="number"?e:e[n];for(let a=0;a<r;a+=1)i.push(new Float32Array(128));t.push(i)}return t},Cb=(s,e)=>{const t=Bi(ud,s),n=Mt(e);return Bi(t,n)},Rb=async(s,e,t,n,i,r,a)=>{const o=e===null?Math.ceil(s.context.length/128)*128:e.length,c=n.channelCount*n.numberOfInputs,l=i.reduce((g,p)=>g+p,0),u=l===0?null:t.createBuffer(l,o,t.sampleRate);if(r===void 0)throw new Error("Missing the processor constructor.");const h=Fn(s),d=await Cb(t,s),f=Zl(n.numberOfInputs,n.channelCount),_=Zl(n.numberOfOutputs,i),m=Array.from(s.parameters.keys()).reduce((g,p)=>({...g,[p]:new Float32Array(128)}),{});for(let g=0;g<o;g+=128){if(n.numberOfInputs>0&&e!==null)for(let p=0;p<n.numberOfInputs;p+=1)for(let S=0;S<n.channelCount;S+=1)$l(e,f[p],S,S,g);r.parameterDescriptors!==void 0&&e!==null&&r.parameterDescriptors.forEach(({name:p},S)=>{$l(e,m,p,c+S,g)});for(let p=0;p<n.numberOfInputs;p+=1)for(let S=0;S<i[p];S+=1)_[p][S].byteLength===0&&(_[p][S]=new Float32Array(128));try{const p=f.map((y,T)=>h.activeInputs[T].size===0?[]:y),S=a(g/t.sampleRate,t.sampleRate,()=>d.process(p,_,m));if(u!==null)for(let y=0,T=0;y<n.numberOfOutputs;y+=1){for(let v=0;v<i[y];v+=1)v0(u,_[y],v,T+v,g);T+=i[y]}if(!S)break}catch(p){s.dispatchEvent(new ErrorEvent("processorerror",{colno:p.colno,filename:p.filename,lineno:p.lineno,message:p.message}));break}}return u},Pb=(s,e,t,n,i,r,a,o,c,l,u,h,d,f,_,m)=>(g,p,S)=>{const y=new WeakMap;let T=null;const v=async(M,E)=>{let b=u(M),x=null;const w=yn(b,E),F=Array.isArray(p.outputChannelCount)?p.outputChannelCount:Array.from(p.outputChannelCount);if(h===null){const R=F.reduce((z,U)=>z+U,0),L=i(E,{channelCount:Math.max(1,R),channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:Math.max(1,R)}),N=[];for(let z=0;z<M.numberOfOutputs;z+=1)N.push(n(E,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:F[z]}));const k=a(E,{channelCount:p.channelCount,channelCountMode:p.channelCountMode,channelInterpretation:p.channelInterpretation,gain:1});k.connect=e.bind(null,N),k.disconnect=c.bind(null,N),x=[L,N,k]}else w||(b=new h(E,g));if(y.set(E,x===null?b:x[2]),x!==null){if(T===null){if(S===void 0)throw new Error("Missing the processor constructor.");if(d===null)throw new Error("Missing the native OfflineAudioContext constructor.");const U=M.channelCount*M.numberOfInputs,V=S.parameterDescriptors===void 0?0:S.parameterDescriptors.length,H=U+V;T=Rb(M,H===0?null:await(async()=>{const te=new d(H,Math.ceil(M.context.length/128)*128,E.sampleRate),ee=[],q=[];for(let se=0;se<p.numberOfInputs;se+=1)ee.push(a(te,{channelCount:p.channelCount,channelCountMode:p.channelCountMode,channelInterpretation:p.channelInterpretation,gain:1})),q.push(i(te,{channelCount:p.channelCount,channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:p.channelCount}));const Y=await Promise.all(Array.from(M.parameters.values()).map(async se=>{const O=r(te,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",offset:se.value});return await f(te,se,O.offset),O})),J=n(te,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:Math.max(1,U+V)});for(let se=0;se<p.numberOfInputs;se+=1){ee[se].connect(q[se]);for(let O=0;O<p.channelCount;O+=1)q[se].connect(J,O,se*p.channelCount+O)}for(const[se,O]of Y.entries())O.connect(J,0,U+se),O.start(0);return J.connect(te.destination),await Promise.all(ee.map(se=>_(M,te,se))),m(te)})(),E,p,F,S,l)}const R=await T,L=t(E,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}),[N,k,z]=x;R!==null&&(L.buffer=R,L.start(0)),L.connect(N);for(let U=0,V=0;U<M.numberOfOutputs;U+=1){const H=k[U];for(let D=0;D<F[U];D+=1)N.connect(H,V+D,D);V+=F[U]}return z}if(w)for(const[R,L]of M.parameters.entries())await s(E,L,b.parameters.get(R));else for(const[R,L]of M.parameters.entries())await f(E,L,b.parameters.get(R));return await _(M,E,b),b};return{render(M,E){o(E,M);const b=y.get(E);return b!==void 0?Promise.resolve(b):v(M,E)}}},Lb=(s,e,t,n,i,r,a,o,c,l,u,h,d,f,_,m,g,p,S,y)=>class extends _{constructor(v,M){super(v,M),this._nativeContext=v,this._audioWorklet=s===void 0?void 0:{addModule:(E,b)=>s(this,E,b)}}get audioWorklet(){return this._audioWorklet}createAnalyser(){return new e(this)}createBiquadFilter(){return new i(this)}createBuffer(v,M,E){return new t({length:M,numberOfChannels:v,sampleRate:E})}createBufferSource(){return new n(this)}createChannelMerger(v=6){return new r(this,{numberOfInputs:v})}createChannelSplitter(v=6){return new a(this,{numberOfOutputs:v})}createConstantSource(){return new o(this)}createConvolver(){return new c(this)}createDelay(v=1){return new u(this,{maxDelayTime:v})}createDynamicsCompressor(){return new h(this)}createGain(){return new d(this)}createIIRFilter(v,M){return new f(this,{feedback:M,feedforward:v})}createOscillator(){return new m(this)}createPanner(){return new g(this)}createPeriodicWave(v,M,E={disableNormalization:!1}){return new p(this,{...E,imag:M,real:v})}createStereoPanner(){return new S(this)}createWaveShaper(){return new y(this)}decodeAudioData(v,M,E){return l(this._nativeContext,v).then(b=>(typeof M=="function"&&M(b),b),b=>{throw typeof E=="function"&&E(b),b})}},Fb={Q:1,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",detune:0,frequency:350,gain:0,type:"lowpass"},Nb=(s,e,t,n,i,r,a,o)=>class extends s{constructor(l,u){const h=r(l),d={...Fb,...u},f=i(h,d),_=a(h),m=_?t():null;super(l,!1,f,m),this._Q=e(this,_,f.Q,Cn,kn),this._detune=e(this,_,f.detune,1200*Math.log2(Cn),-1200*Math.log2(Cn)),this._frequency=e(this,_,f.frequency,l.sampleRate/2,0),this._gain=e(this,_,f.gain,40*Math.log10(Cn),kn),this._nativeBiquadFilterNode=f,o(this,1)}get detune(){return this._detune}get frequency(){return this._frequency}get gain(){return this._gain}get Q(){return this._Q}get type(){return this._nativeBiquadFilterNode.type}set type(l){this._nativeBiquadFilterNode.type=l}getFrequencyResponse(l,u,h){try{this._nativeBiquadFilterNode.getFrequencyResponse(l,u,h)}catch(d){throw d.code===11?n():d}if(l.length!==u.length||u.length!==h.length)throw n()}},Ib=(s,e,t,n,i)=>()=>{const r=new WeakMap,a=async(o,c)=>{let l=t(o);const u=yn(l,c);if(!u){const h={Q:l.Q.value,channelCount:l.channelCount,channelCountMode:l.channelCountMode,channelInterpretation:l.channelInterpretation,detune:l.detune.value,frequency:l.frequency.value,gain:l.gain.value,type:l.type};l=e(c,h)}return r.set(c,l),u?(await s(c,o.Q,l.Q),await s(c,o.detune,l.detune),await s(c,o.frequency,l.frequency),await s(c,o.gain,l.gain)):(await n(c,o.Q,l.Q),await n(c,o.detune,l.detune),await n(c,o.frequency,l.frequency),await n(c,o.gain,l.gain)),await i(o,c,l),l};return{render(o,c){const l=r.get(c);return l!==void 0?Promise.resolve(l):a(o,c)}}},Ob=(s,e)=>(t,n)=>{const i=e.get(t);if(i!==void 0)return i;const r=s.get(t);if(r!==void 0)return r;try{const a=n();return a instanceof Promise?(s.set(t,a),a.catch(()=>!1).then(o=>(s.delete(t),e.set(t,o),o))):(e.set(t,a),a)}catch{return e.set(t,!1),!1}},Ub={channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:6},kb=(s,e,t,n,i)=>class extends s{constructor(a,o){const c=n(a),l={...Ub,...o},u=t(c,l),h=i(c)?e():null;super(a,!1,u,h)}},zb=(s,e,t)=>()=>{const n=new WeakMap,i=async(r,a)=>{let o=e(r);if(!yn(o,a)){const l={channelCount:o.channelCount,channelCountMode:o.channelCountMode,channelInterpretation:o.channelInterpretation,numberOfInputs:o.numberOfInputs};o=s(a,l)}return n.set(a,o),await t(r,a,o),o};return{render(r,a){const o=n.get(a);return o!==void 0?Promise.resolve(o):i(r,a)}}},Bb={channelCount:6,channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:6},Vb=(s,e,t,n,i,r)=>class extends s{constructor(o,c){const l=n(o),u=r({...Bb,...c}),h=t(l,u),d=i(l)?e():null;super(o,!1,h,d)}},Gb=(s,e,t)=>()=>{const n=new WeakMap,i=async(r,a)=>{let o=e(r);if(!yn(o,a)){const l={channelCount:o.channelCount,channelCountMode:o.channelCountMode,channelInterpretation:o.channelInterpretation,numberOfOutputs:o.numberOfOutputs};o=s(a,l)}return n.set(a,o),await t(r,a,o),o};return{render(r,a){const o=n.get(a);return o!==void 0?Promise.resolve(o):i(r,a)}}},Wb=s=>(e,t,n)=>s(t,e,n),Hb=s=>(e,t,n=0,i=0)=>{const r=e[n];if(r===void 0)throw s();return jl(t)?r.connect(t,0,i):r.connect(t,0)},qb=s=>(e,t)=>{const n=s(e,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}),i=e.createBuffer(1,2,44100);return n.buffer=i,n.loop=!0,n.connect(t),n.start(),()=>{n.stop(),n.disconnect(t)}},Xb={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",offset:1},Yb=(s,e,t,n,i,r,a)=>class extends s{constructor(c,l){const u=i(c),h={...Xb,...l},d=n(u,h),f=r(u),_=f?t():null;super(c,!1,d,_),this._constantSourceNodeRenderer=_,this._nativeConstantSourceNode=d,this._offset=e(this,f,d.offset,Cn,kn),this._onended=null}get offset(){return this._offset}get onended(){return this._onended}set onended(c){const l=typeof c=="function"?a(this,c):null;this._nativeConstantSourceNode.onended=l;const u=this._nativeConstantSourceNode.onended;this._onended=u!==null&&u===l?c:u}start(c=0){if(this._nativeConstantSourceNode.start(c),this._constantSourceNodeRenderer!==null&&(this._constantSourceNodeRenderer.start=c),this.context.state!=="closed"){ia(this);const l=()=>{this._nativeConstantSourceNode.removeEventListener("ended",l),Es(this)&&Tc(this)};this._nativeConstantSourceNode.addEventListener("ended",l)}}stop(c=0){this._nativeConstantSourceNode.stop(c),this._constantSourceNodeRenderer!==null&&(this._constantSourceNodeRenderer.stop=c)}},jb=(s,e,t,n,i)=>()=>{const r=new WeakMap;let a=null,o=null;const c=async(l,u)=>{let h=t(l);const d=yn(h,u);if(!d){const f={channelCount:h.channelCount,channelCountMode:h.channelCountMode,channelInterpretation:h.channelInterpretation,offset:h.offset.value};h=e(u,f),a!==null&&h.start(a),o!==null&&h.stop(o)}return r.set(u,h),d?await s(u,l.offset,h.offset):await n(u,l.offset,h.offset),await i(l,u,h),h};return{set start(l){a=l},set stop(l){o=l},render(l,u){const h=r.get(u);return h!==void 0?Promise.resolve(h):c(l,u)}}},$b=s=>e=>(s[0]=e,s[0]),Zb={buffer:null,channelCount:2,channelCountMode:"clamped-max",channelInterpretation:"speakers",disableNormalization:!1},Kb=(s,e,t,n,i,r)=>class extends s{constructor(o,c){const l=n(o),u={...Zb,...c},h=t(l,u),f=i(l)?e():null;super(o,!1,h,f),this._isBufferNullified=!1,this._nativeConvolverNode=h,u.buffer!==null&&r(this,u.buffer.duration)}get buffer(){return this._isBufferNullified?null:this._nativeConvolverNode.buffer}set buffer(o){if(this._nativeConvolverNode.buffer=o,o===null&&this._nativeConvolverNode.buffer!==null){const c=this._nativeConvolverNode.context;this._nativeConvolverNode.buffer=c.createBuffer(1,1,c.sampleRate),this._isBufferNullified=!0,r(this,0)}else this._isBufferNullified=!1,r(this,this._nativeConvolverNode.buffer===null?0:this._nativeConvolverNode.buffer.duration)}get normalize(){return this._nativeConvolverNode.normalize}set normalize(o){this._nativeConvolverNode.normalize=o}},Jb=(s,e,t)=>()=>{const n=new WeakMap,i=async(r,a)=>{let o=e(r);if(!yn(o,a)){const l={buffer:o.buffer,channelCount:o.channelCount,channelCountMode:o.channelCountMode,channelInterpretation:o.channelInterpretation,disableNormalization:!o.normalize};o=s(a,l)}return n.set(a,o),pa(o)?await t(r,a,o.inputs[0]):await t(r,a,o),o};return{render(r,a){const o=n.get(a);return o!==void 0?Promise.resolve(o):i(r,a)}}},Qb=(s,e)=>(t,n,i)=>{if(e===null)throw new Error("Missing the native OfflineAudioContext constructor.");try{return new e(t,n,i)}catch(r){throw r.name==="SyntaxError"?s():r}},eD=()=>new DOMException("","DataCloneError"),Xm=s=>{const{port1:e,port2:t}=new MessageChannel;return new Promise(n=>{const i=()=>{t.onmessage=null,e.close(),t.close(),n()};t.onmessage=()=>i();try{e.postMessage(s,[s])}catch{}finally{i()}})},tD=(s,e,t,n,i,r,a,o,c,l,u)=>(h,d)=>{const f=a(h)?h:r(h);if(i.has(d)){const _=t();return Promise.reject(_)}try{i.add(d)}catch{}return e(c,()=>c(f))?f.decodeAudioData(d).then(_=>(Xm(d).catch(()=>{}),e(o,()=>o(_))||u(_),s.add(_),_)):new Promise((_,m)=>{const g=async()=>{try{await Xm(d)}catch{}},p=S=>{m(S),g()};try{f.decodeAudioData(d,S=>{typeof S.copyFromChannel!="function"&&(l(S),Jd(S)),s.add(S),g().then(()=>_(S))},S=>{p(S===null?n():S)})}catch(S){p(S)}})},nD=(s,e,t,n,i,r,a,o)=>(c,l)=>{const u=e.get(c);if(u===void 0)throw new Error("Missing the expected cycle count.");const h=r(c.context),d=o(h);if(u===l){if(e.delete(c),!d&&a(c)){const f=n(c),{outputs:_}=t(c);for(const m of _)if(Ec(m)){const g=n(m[0]);s(f,g,m[1],m[2])}else{const g=i(m[0]);f.connect(g,m[1])}}}else e.set(c,u-l)},iD={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",delayTime:0,maxDelayTime:1},sD=(s,e,t,n,i,r,a)=>class extends s{constructor(c,l){const u=i(c),h={...iD,...l},d=n(u,h),f=r(u),_=f?t(h.maxDelayTime):null;super(c,!1,d,_),this._delayTime=e(this,f,d.delayTime),a(this,h.maxDelayTime)}get delayTime(){return this._delayTime}},rD=(s,e,t,n,i)=>r=>{const a=new WeakMap,o=async(c,l)=>{let u=t(c);const h=yn(u,l);if(!h){const d={channelCount:u.channelCount,channelCountMode:u.channelCountMode,channelInterpretation:u.channelInterpretation,delayTime:u.delayTime.value,maxDelayTime:r};u=e(l,d)}return a.set(l,u),h?await s(l,c.delayTime,u.delayTime):await n(l,c.delayTime,u.delayTime),await i(c,l,u),u};return{render(c,l){const u=a.get(l);return u!==void 0?Promise.resolve(u):o(c,l)}}},oD=s=>(e,t,n,i)=>s(e[i],r=>r[0]===t&&r[1]===n),aD=s=>(e,t)=>{s(e).delete(t)},cD=s=>"delayTime"in s,lD=(s,e,t)=>function n(i,r){const a=ql(r)?r:t(s,r);if(cD(a))return[];if(i[0]===a)return[i];if(i.includes(a))return[];const{outputs:o}=e(a);return Array.from(o).map(c=>n([...i,a],c[0])).reduce((c,l)=>c.concat(l),[])},rl=(s,e,t)=>{const n=e[t];if(n===void 0)throw s();return n},uD=s=>(e,t=void 0,n=void 0,i=0)=>t===void 0?e.forEach(r=>r.disconnect()):typeof t=="number"?rl(s,e,t).disconnect():jl(t)?n===void 0?e.forEach(r=>r.disconnect(t)):i===void 0?rl(s,e,n).disconnect(t,0):rl(s,e,n).disconnect(t,0,i):n===void 0?e.forEach(r=>r.disconnect(t)):rl(s,e,n).disconnect(t,0),hD={attack:.003,channelCount:2,channelCountMode:"clamped-max",channelInterpretation:"speakers",knee:30,ratio:12,release:.25,threshold:-24},dD=(s,e,t,n,i,r,a,o)=>class extends s{constructor(l,u){const h=r(l),d={...hD,...u},f=n(h,d),_=a(h),m=_?t():null;super(l,!1,f,m),this._attack=e(this,_,f.attack),this._knee=e(this,_,f.knee),this._nativeDynamicsCompressorNode=f,this._ratio=e(this,_,f.ratio),this._release=e(this,_,f.release),this._threshold=e(this,_,f.threshold),o(this,.006)}get attack(){return this._attack}get channelCount(){return this._nativeDynamicsCompressorNode.channelCount}set channelCount(l){const u=this._nativeDynamicsCompressorNode.channelCount;if(this._nativeDynamicsCompressorNode.channelCount=l,l>2)throw this._nativeDynamicsCompressorNode.channelCount=u,i()}get channelCountMode(){return this._nativeDynamicsCompressorNode.channelCountMode}set channelCountMode(l){const u=this._nativeDynamicsCompressorNode.channelCountMode;if(this._nativeDynamicsCompressorNode.channelCountMode=l,l==="max")throw this._nativeDynamicsCompressorNode.channelCountMode=u,i()}get knee(){return this._knee}get ratio(){return this._ratio}get reduction(){return typeof this._nativeDynamicsCompressorNode.reduction.value=="number"?this._nativeDynamicsCompressorNode.reduction.value:this._nativeDynamicsCompressorNode.reduction}get release(){return this._release}get threshold(){return this._threshold}},fD=(s,e,t,n,i)=>()=>{const r=new WeakMap,a=async(o,c)=>{let l=t(o);const u=yn(l,c);if(!u){const h={attack:l.attack.value,channelCount:l.channelCount,channelCountMode:l.channelCountMode,channelInterpretation:l.channelInterpretation,knee:l.knee.value,ratio:l.ratio.value,release:l.release.value,threshold:l.threshold.value};l=e(c,h)}return r.set(c,l),u?(await s(c,o.attack,l.attack),await s(c,o.knee,l.knee),await s(c,o.ratio,l.ratio),await s(c,o.release,l.release),await s(c,o.threshold,l.threshold)):(await n(c,o.attack,l.attack),await n(c,o.knee,l.knee),await n(c,o.ratio,l.ratio),await n(c,o.release,l.release),await n(c,o.threshold,l.threshold)),await i(o,c,l),l};return{render(o,c){const l=r.get(c);return l!==void 0?Promise.resolve(l):a(o,c)}}},pD=()=>new DOMException("","EncodingError"),mD=s=>e=>new Promise((t,n)=>{if(s===null){n(new SyntaxError);return}const i=s.document.head;if(i===null)n(new SyntaxError);else{const r=s.document.createElement("script"),a=new Blob([e],{type:"application/javascript"}),o=URL.createObjectURL(a),c=s.onerror,l=()=>{s.onerror=c,URL.revokeObjectURL(o)};s.onerror=(u,h,d,f,_)=>{if(h===o||h===s.location.href&&d===1&&f===1)return l(),n(_),!1;if(c!==null)return c(u,h,d,f,_)},r.onerror=()=>{l(),n(new SyntaxError)},r.onload=()=>{l(),t()},r.src=o,r.type="module",i.appendChild(r)}}),_D=s=>class{constructor(t){this._nativeEventTarget=t,this._listeners=new WeakMap}addEventListener(t,n,i){if(n!==null){let r=this._listeners.get(n);r===void 0&&(r=s(this,n),typeof n=="function"&&this._listeners.set(n,r)),this._nativeEventTarget.addEventListener(t,r,i)}}dispatchEvent(t){return this._nativeEventTarget.dispatchEvent(t)}removeEventListener(t,n,i){const r=n===null?void 0:this._listeners.get(n);this._nativeEventTarget.removeEventListener(t,r===void 0?null:r,i)}},gD=s=>(e,t,n)=>{Object.defineProperties(s,{currentFrame:{configurable:!0,get(){return Math.round(e*t)}},currentTime:{configurable:!0,get(){return e}}});try{return n()}finally{s!==null&&(delete s.currentFrame,delete s.currentTime)}},vD=s=>async e=>{try{const t=await fetch(e);if(t.ok)return[await t.text(),t.url]}catch{}throw s()},xD={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",gain:1},yD=(s,e,t,n,i,r)=>class extends s{constructor(o,c){const l=i(o),u={...xD,...c},h=n(l,u),d=r(l),f=d?t():null;super(o,!1,h,f),this._gain=e(this,d,h.gain,Cn,kn)}get gain(){return this._gain}},SD=(s,e,t,n,i)=>()=>{const r=new WeakMap,a=async(o,c)=>{let l=t(o);const u=yn(l,c);if(!u){const h={channelCount:l.channelCount,channelCountMode:l.channelCountMode,channelInterpretation:l.channelInterpretation,gain:l.gain.value};l=e(c,h)}return r.set(c,l),u?await s(c,o.gain,l.gain):await n(c,o.gain,l.gain),await i(o,c,l),l};return{render(o,c){const l=r.get(c);return l!==void 0?Promise.resolve(l):a(o,c)}}},TD=(s,e)=>t=>e(s,t),MD=s=>e=>{const t=s(e);if(t.renderer===null)throw new Error("Missing the renderer of the given AudioNode in the audio graph.");return t.renderer},ED=s=>e=>{var t;return(t=s.get(e))!==null&&t!==void 0?t:0},wD=s=>e=>{const t=s(e);if(t.renderer===null)throw new Error("Missing the renderer of the given AudioParam in the audio graph.");return t.renderer},bD=s=>e=>s.get(e),nn=()=>new DOMException("","InvalidStateError"),DD=s=>e=>{const t=s.get(e);if(t===void 0)throw nn();return t},AD=(s,e)=>t=>{let n=s.get(t);if(n!==void 0)return n;if(e===null)throw new Error("Missing the native OfflineAudioContext constructor.");return n=new e(1,1,44100),s.set(t,n),n},CD=s=>e=>{const t=s.get(e);if(t===void 0)throw new Error("The context has no set of AudioWorkletNodes.");return t},gu=()=>new DOMException("","InvalidAccessError"),RD=s=>{s.getFrequencyResponse=(e=>(t,n,i)=>{if(t.length!==n.length||n.length!==i.length)throw gu();return e.call(s,t,n,i)})(s.getFrequencyResponse)},PD={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers"},LD=(s,e,t,n,i,r)=>class extends s{constructor(o,c){const l=n(o),u=i(l),h={...PD,...c},d=e(l,u?null:o.baseLatency,h),f=u?t(h.feedback,h.feedforward):null;super(o,!1,d,f),RD(d),this._nativeIIRFilterNode=d,r(this,1)}getFrequencyResponse(o,c,l){return this._nativeIIRFilterNode.getFrequencyResponse(o,c,l)}},x0=(s,e,t,n,i,r,a,o,c,l,u)=>{const h=l.length;let d=o;for(let f=0;f<h;f+=1){let _=t[0]*l[f];for(let m=1;m<i;m+=1){const g=d-m&c-1;_+=t[m]*r[g],_-=s[m]*a[g]}for(let m=i;m<n;m+=1)_+=t[m]*r[d-m&c-1];for(let m=i;m<e;m+=1)_-=s[m]*a[d-m&c-1];r[d]=l[f],a[d]=_,d=d+1&c-1,u[f]=_}return d},FD=(s,e,t,n)=>{const i=t instanceof Float64Array?t:new Float64Array(t),r=n instanceof Float64Array?n:new Float64Array(n),a=i.length,o=r.length,c=Math.min(a,o);if(i[0]!==1){for(let _=0;_<a;_+=1)r[_]/=i[0];for(let _=1;_<o;_+=1)i[_]/=i[0]}const l=32,u=new Float32Array(l),h=new Float32Array(l),d=e.createBuffer(s.numberOfChannels,s.length,s.sampleRate),f=s.numberOfChannels;for(let _=0;_<f;_+=1){const m=s.getChannelData(_),g=d.getChannelData(_);u.fill(0),h.fill(0),x0(i,a,r,o,c,u,h,0,l,m,g)}return d},ND=(s,e,t,n,i)=>(r,a)=>{const o=new WeakMap;let c=null;const l=async(u,h)=>{let d=null,f=e(u);const _=yn(f,h);if(h.createIIRFilter===void 0?d=s(h,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}):_||(f=h.createIIRFilter(a,r)),o.set(h,d===null?f:d),d!==null){if(c===null){if(t===null)throw new Error("Missing the native OfflineAudioContext constructor.");const g=new t(u.context.destination.channelCount,u.context.length,h.sampleRate);c=(async()=>{await n(u,g,g.destination);const p=await i(g);return FD(p,h,r,a)})()}const m=await c;return d.buffer=m,d.start(0),d}return await n(u,h,f),f};return{render(u,h){const d=o.get(h);return d!==void 0?Promise.resolve(d):l(u,h)}}},ID=(s,e,t,n,i,r)=>a=>(o,c)=>{const l=s.get(o);if(l===void 0){if(!a&&r(o)){const u=n(o),{outputs:h}=t(o);for(const d of h)if(Ec(d)){const f=n(d[0]);e(u,f,d[1],d[2])}else{const f=i(d[0]);u.disconnect(f,d[1])}}s.set(o,c)}else s.set(o,l+c)},OD=(s,e)=>t=>{const n=s.get(t);return e(n)||e(t)},UD=(s,e)=>t=>s.has(t)||e(t),kD=(s,e)=>t=>s.has(t)||e(t),zD=(s,e)=>t=>{const n=s.get(t);return e(n)||e(t)},BD=s=>e=>s!==null&&e instanceof s,VD=s=>e=>s!==null&&typeof s.AudioNode=="function"&&e instanceof s.AudioNode,GD=s=>e=>s!==null&&typeof s.AudioParam=="function"&&e instanceof s.AudioParam,WD=(s,e)=>t=>s(t)||e(t),HD=s=>e=>s!==null&&e instanceof s,qD=s=>s!==null&&s.isSecureContext,XD=(s,e,t,n)=>class extends s{constructor(r,a){const o=t(r),c=e(o,a);if(n(o))throw TypeError();super(r,!0,c,null),this._nativeMediaElementAudioSourceNode=c}get mediaElement(){return this._nativeMediaElementAudioSourceNode.mediaElement}},YD={channelCount:2,channelCountMode:"explicit",channelInterpretation:"speakers"},jD=(s,e,t,n)=>class extends s{constructor(r,a){const o=t(r);if(n(o))throw new TypeError;const c={...YD,...a},l=e(o,c);super(r,!1,l,null),this._nativeMediaStreamAudioDestinationNode=l}get stream(){return this._nativeMediaStreamAudioDestinationNode.stream}},$D=(s,e,t,n)=>class extends s{constructor(r,a){const o=t(r),c=e(o,a);if(n(o))throw new TypeError;super(r,!0,c,null),this._nativeMediaStreamAudioSourceNode=c}get mediaStream(){return this._nativeMediaStreamAudioSourceNode.mediaStream}},ZD=(s,e,t)=>class extends s{constructor(i,r){const a=t(i),o=e(a,r);super(i,!0,o,null)}},KD=(s,e,t,n,i,r)=>class extends t{constructor(o,c){super(o),this._nativeContext=o,mu.set(this,o),n(o)&&i.set(o,new Set),this._destination=new s(this,c),this._listener=e(this,o),this._onstatechange=null}get currentTime(){return this._nativeContext.currentTime}get destination(){return this._destination}get listener(){return this._listener}get onstatechange(){return this._onstatechange}set onstatechange(o){const c=typeof o=="function"?r(this,o):null;this._nativeContext.onstatechange=c;const l=this._nativeContext.onstatechange;this._onstatechange=l!==null&&l===c?o:l}get sampleRate(){return this._nativeContext.sampleRate}get state(){return this._nativeContext.state}},dc=s=>{const e=new Uint32Array([1179011410,40,1163280727,544501094,16,131073,44100,176400,1048580,1635017060,4,0]);try{const t=s.decodeAudioData(e.buffer,()=>{});return t===void 0?!1:(t.catch(()=>{}),!0)}catch{}return!1},JD=(s,e)=>(t,n,i)=>{const r=new Set;return t.connect=(a=>(o,c=0,l=0)=>{const u=r.size===0;if(e(o))return a.call(t,o,c,l),s(r,[o,c,l],h=>h[0]===o&&h[1]===c&&h[2]===l,!0),u&&n(),o;a.call(t,o,c),s(r,[o,c],h=>h[0]===o&&h[1]===c,!0),u&&n()})(t.connect),t.disconnect=(a=>(o,c,l)=>{const u=r.size>0;if(o===void 0)a.apply(t),r.clear();else if(typeof o=="number"){a.call(t,o);for(const d of r)d[1]===o&&r.delete(d)}else{e(o)?a.call(t,o,c,l):a.call(t,o,c);for(const d of r)d[0]===o&&(c===void 0||d[1]===c)&&(l===void 0||d[2]===l)&&r.delete(d)}const h=r.size===0;u&&h&&i()})(t.disconnect),t},wt=(s,e,t)=>{const n=e[t];n!==void 0&&n!==s[t]&&(s[t]=n)},Kt=(s,e)=>{wt(s,e,"channelCount"),wt(s,e,"channelCountMode"),wt(s,e,"channelInterpretation")},Ym=s=>typeof s.getFloatTimeDomainData=="function",QD=s=>{s.getFloatTimeDomainData=e=>{const t=new Uint8Array(e.length);s.getByteTimeDomainData(t);const n=Math.max(t.length,s.fftSize);for(let i=0;i<n;i+=1)e[i]=(t[i]-128)*.0078125;return e}},eA=(s,e)=>(t,n)=>{const i=t.createAnalyser();if(Kt(i,n),!(n.maxDecibels>n.minDecibels))throw e();return wt(i,n,"fftSize"),wt(i,n,"maxDecibels"),wt(i,n,"minDecibels"),wt(i,n,"smoothingTimeConstant"),s(Ym,()=>Ym(i))||QD(i),i},tA=s=>s===null?null:s.hasOwnProperty("AudioBuffer")?s.AudioBuffer:null,Lt=(s,e,t)=>{const n=e[t];n!==void 0&&n!==s[t].value&&(s[t].value=n)},nA=s=>{s.start=(e=>{let t=!1;return(n=0,i=0,r)=>{if(t)throw nn();e.call(s,n,i,r),t=!0}})(s.start)},tf=s=>{s.start=(e=>(t=0,n=0,i)=>{if(typeof i=="number"&&i<0||n<0||t<0)throw new RangeError("The parameters can't be negative.");e.call(s,t,n,i)})(s.start)},nf=s=>{s.stop=(e=>(t=0)=>{if(t<0)throw new RangeError("The parameter can't be negative.");e.call(s,t)})(s.stop)},iA=(s,e,t,n,i,r,a,o,c,l,u)=>(h,d)=>{const f=h.createBufferSource();return Kt(f,d),Lt(f,d,"playbackRate"),wt(f,d,"buffer"),wt(f,d,"loop"),wt(f,d,"loopEnd"),wt(f,d,"loopStart"),e(t,()=>t(h))||nA(f),e(n,()=>n(h))||c(f),e(i,()=>i(h))||l(f,h),e(r,()=>r(h))||tf(f),e(a,()=>a(h))||u(f,h),e(o,()=>o(h))||nf(f),s(h,f),f},sA=s=>s===null?null:s.hasOwnProperty("AudioContext")?s.AudioContext:s.hasOwnProperty("webkitAudioContext")?s.webkitAudioContext:null,rA=(s,e)=>(t,n,i)=>{const r=t.destination;if(r.channelCount!==n)try{r.channelCount=n}catch{}i&&r.channelCountMode!=="explicit"&&(r.channelCountMode="explicit"),r.maxChannelCount===0&&Object.defineProperty(r,"maxChannelCount",{value:n});const a=s(t,{channelCount:n,channelCountMode:r.channelCountMode,channelInterpretation:r.channelInterpretation,gain:1});return e(a,"channelCount",o=>()=>o.call(a),o=>c=>{o.call(a,c);try{r.channelCount=c}catch(l){if(c>r.maxChannelCount)throw l}}),e(a,"channelCountMode",o=>()=>o.call(a),o=>c=>{o.call(a,c),r.channelCountMode=c}),e(a,"channelInterpretation",o=>()=>o.call(a),o=>c=>{o.call(a,c),r.channelInterpretation=c}),Object.defineProperty(a,"maxChannelCount",{get:()=>r.maxChannelCount}),a.connect(r),a},oA=s=>s===null?null:s.hasOwnProperty("AudioWorkletNode")?s.AudioWorkletNode:null,aA=s=>{const{port1:e}=new MessageChannel;try{e.postMessage(s)}finally{e.close()}},cA=(s,e,t,n,i)=>(r,a,o,c,l,u)=>{if(o!==null)try{const h=new o(r,c,u),d=new Map;let f=null;if(Object.defineProperties(h,{channelCount:{get:()=>u.channelCount,set:()=>{throw s()}},channelCountMode:{get:()=>"explicit",set:()=>{throw s()}},onprocessorerror:{get:()=>f,set:_=>{typeof f=="function"&&h.removeEventListener("processorerror",f),f=typeof _=="function"?_:null,typeof f=="function"&&h.addEventListener("processorerror",f)}}}),h.addEventListener=(_=>(...m)=>{if(m[0]==="processorerror"){const g=typeof m[1]=="function"?m[1]:typeof m[1]=="object"&&m[1]!==null&&typeof m[1].handleEvent=="function"?m[1].handleEvent:null;if(g!==null){const p=d.get(m[1]);p!==void 0?m[1]=p:(m[1]=S=>{S.type==="error"?(Object.defineProperties(S,{type:{value:"processorerror"}}),g(S)):g(new ErrorEvent(m[0],{...S}))},d.set(g,m[1]))}}return _.call(h,"error",m[1],m[2]),_.call(h,...m)})(h.addEventListener),h.removeEventListener=(_=>(...m)=>{if(m[0]==="processorerror"){const g=d.get(m[1]);g!==void 0&&(d.delete(m[1]),m[1]=g)}return _.call(h,"error",m[1],m[2]),_.call(h,m[0],m[1],m[2])})(h.removeEventListener),u.numberOfOutputs!==0){const _=t(r,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});return h.connect(_).connect(r.destination),i(h,()=>_.disconnect(),()=>_.connect(r.destination))}return h}catch(h){throw h.code===11?n():h}if(l===void 0)throw n();return aA(u),e(r,a,l,u)},y0=(s,e)=>s===null?512:Math.max(512,Math.min(16384,Math.pow(2,Math.round(Math.log2(s*e))))),lA=s=>new Promise((e,t)=>{const{port1:n,port2:i}=new MessageChannel;n.onmessage=({data:r})=>{n.close(),i.close(),e(r)},n.onmessageerror=({data:r})=>{n.close(),i.close(),t(r)},i.postMessage(s)}),uA=async(s,e)=>{const t=await lA(e);return new s(t)},hA=(s,e,t,n)=>{let i=ud.get(s);i===void 0&&(i=new WeakMap,ud.set(s,i));const r=uA(t,n);return i.set(e,r),r},dA=(s,e,t,n,i,r,a,o,c,l,u,h,d)=>(f,_,m,g)=>{if(g.numberOfInputs===0&&g.numberOfOutputs===0)throw c();const p=Array.isArray(g.outputChannelCount)?g.outputChannelCount:Array.from(g.outputChannelCount);if(p.some(oe=>oe<1))throw c();if(p.length!==g.numberOfOutputs)throw e();if(g.channelCountMode!=="explicit")throw c();const S=g.channelCount*g.numberOfInputs,y=p.reduce((oe,de)=>oe+de,0),T=m.parameterDescriptors===void 0?0:m.parameterDescriptors.length;if(S+T>6||y>6)throw c();const v=new MessageChannel,M=[],E=[];for(let oe=0;oe<g.numberOfInputs;oe+=1)M.push(a(f,{channelCount:g.channelCount,channelCountMode:g.channelCountMode,channelInterpretation:g.channelInterpretation,gain:1})),E.push(i(f,{channelCount:g.channelCount,channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:g.channelCount}));const b=[];if(m.parameterDescriptors!==void 0)for(const{defaultValue:oe,maxValue:de,minValue:W,name:Le}of m.parameterDescriptors){const xe=r(f,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",offset:g.parameterData[Le]!==void 0?g.parameterData[Le]:oe===void 0?0:oe});Object.defineProperties(xe.offset,{defaultValue:{get:()=>oe===void 0?0:oe},maxValue:{get:()=>de===void 0?Cn:de},minValue:{get:()=>W===void 0?kn:W}}),b.push(xe)}const x=n(f,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:Math.max(1,S+T)}),w=y0(_,f.sampleRate),F=o(f,w,S+T,Math.max(1,y)),R=i(f,{channelCount:Math.max(1,y),channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:Math.max(1,y)}),L=[];for(let oe=0;oe<g.numberOfOutputs;oe+=1)L.push(n(f,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:p[oe]}));for(let oe=0;oe<g.numberOfInputs;oe+=1){M[oe].connect(E[oe]);for(let de=0;de<g.channelCount;de+=1)E[oe].connect(x,de,oe*g.channelCount+de)}const N=new g0(m.parameterDescriptors===void 0?[]:m.parameterDescriptors.map(({name:oe},de)=>{const W=b[de];return W.connect(x,0,S+de),W.start(0),[oe,W.offset]}));x.connect(F);let k=g.channelInterpretation,z=null;const U=g.numberOfOutputs===0?[F]:L,V={get bufferSize(){return w},get channelCount(){return g.channelCount},set channelCount(oe){throw t()},get channelCountMode(){return g.channelCountMode},set channelCountMode(oe){throw t()},get channelInterpretation(){return k},set channelInterpretation(oe){for(const de of M)de.channelInterpretation=oe;k=oe},get context(){return F.context},get inputs(){return M},get numberOfInputs(){return g.numberOfInputs},get numberOfOutputs(){return g.numberOfOutputs},get onprocessorerror(){return z},set onprocessorerror(oe){typeof z=="function"&&V.removeEventListener("processorerror",z),z=typeof oe=="function"?oe:null,typeof z=="function"&&V.addEventListener("processorerror",z)},get parameters(){return N},get port(){return v.port2},addEventListener(...oe){return F.addEventListener(oe[0],oe[1],oe[2])},connect:s.bind(null,U),disconnect:l.bind(null,U),dispatchEvent(...oe){return F.dispatchEvent(oe[0])},removeEventListener(...oe){return F.removeEventListener(oe[0],oe[1],oe[2])}},H=new Map;v.port1.addEventListener=(oe=>(...de)=>{if(de[0]==="message"){const W=typeof de[1]=="function"?de[1]:typeof de[1]=="object"&&de[1]!==null&&typeof de[1].handleEvent=="function"?de[1].handleEvent:null;if(W!==null){const Le=H.get(de[1]);Le!==void 0?de[1]=Le:(de[1]=xe=>{u(f.currentTime,f.sampleRate,()=>W(xe))},H.set(W,de[1]))}}return oe.call(v.port1,de[0],de[1],de[2])})(v.port1.addEventListener),v.port1.removeEventListener=(oe=>(...de)=>{if(de[0]==="message"){const W=H.get(de[1]);W!==void 0&&(H.delete(de[1]),de[1]=W)}return oe.call(v.port1,de[0],de[1],de[2])})(v.port1.removeEventListener);let D=null;Object.defineProperty(v.port1,"onmessage",{get:()=>D,set:oe=>{typeof D=="function"&&v.port1.removeEventListener("message",D),D=typeof oe=="function"?oe:null,typeof D=="function"&&(v.port1.addEventListener("message",D),v.port1.start())}}),m.prototype.port=v.port1;let te=null;hA(f,V,m,g).then(oe=>te=oe);const q=Zl(g.numberOfInputs,g.channelCount),Y=Zl(g.numberOfOutputs,p),J=m.parameterDescriptors===void 0?[]:m.parameterDescriptors.reduce((oe,{name:de})=>({...oe,[de]:new Float32Array(128)}),{});let se=!0;const O=()=>{g.numberOfOutputs>0&&F.disconnect(R);for(let oe=0,de=0;oe<g.numberOfOutputs;oe+=1){const W=L[oe];for(let Le=0;Le<p[oe];Le+=1)R.disconnect(W,de+Le,Le);de+=p[oe]}},ie=new Map;F.onaudioprocess=({inputBuffer:oe,outputBuffer:de})=>{if(te!==null){const W=h(V);for(let Le=0;Le<w;Le+=128){for(let xe=0;xe<g.numberOfInputs;xe+=1)for(let Oe=0;Oe<g.channelCount;Oe+=1)$l(oe,q[xe],Oe,Oe,Le);m.parameterDescriptors!==void 0&&m.parameterDescriptors.forEach(({name:xe},Oe)=>{$l(oe,J,xe,S+Oe,Le)});for(let xe=0;xe<g.numberOfInputs;xe+=1)for(let Oe=0;Oe<p[xe];Oe+=1)Y[xe][Oe].byteLength===0&&(Y[xe][Oe]=new Float32Array(128));try{const xe=q.map((Ge,P)=>{if(W[P].size>0)return ie.set(P,w/128),Ge;const Z=ie.get(P);return Z===void 0?[]:(Ge.every(ne=>ne.every(ae=>ae===0))&&(Z===1?ie.delete(P):ie.set(P,Z-1)),Ge)});se=u(f.currentTime+Le/f.sampleRate,f.sampleRate,()=>te.process(xe,Y,J));for(let Ge=0,P=0;Ge<g.numberOfOutputs;Ge+=1){for(let A=0;A<p[Ge];A+=1)v0(de,Y[Ge],A,P+A,Le);P+=p[Ge]}}catch(xe){se=!1,V.dispatchEvent(new ErrorEvent("processorerror",{colno:xe.colno,filename:xe.filename,lineno:xe.lineno,message:xe.message}))}if(!se){for(let xe=0;xe<g.numberOfInputs;xe+=1){M[xe].disconnect(E[xe]);for(let Oe=0;Oe<g.channelCount;Oe+=1)E[Le].disconnect(x,Oe,xe*g.channelCount+Oe)}if(m.parameterDescriptors!==void 0){const xe=m.parameterDescriptors.length;for(let Oe=0;Oe<xe;Oe+=1){const Ge=b[Oe];Ge.disconnect(x,0,S+Oe),Ge.stop()}}x.disconnect(F),F.onaudioprocess=null,Se?O():Ve();break}}}};let Se=!1;const ce=a(f,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0}),ye=()=>F.connect(ce).connect(f.destination),Ve=()=>{F.disconnect(ce),ce.disconnect()},ue=()=>{if(se){Ve(),g.numberOfOutputs>0&&F.connect(R);for(let oe=0,de=0;oe<g.numberOfOutputs;oe+=1){const W=L[oe];for(let Le=0;Le<p[oe];Le+=1)R.connect(W,de+Le,Le);de+=p[oe]}}Se=!0},Re=()=>{se&&(ye(),O()),Se=!1};return ye(),d(V,ue,Re)},S0=(s,e)=>{const t=s.createBiquadFilter();return Kt(t,e),Lt(t,e,"Q"),Lt(t,e,"detune"),Lt(t,e,"frequency"),Lt(t,e,"gain"),wt(t,e,"type"),t},fA=(s,e)=>(t,n)=>{const i=t.createChannelMerger(n.numberOfInputs);return s!==null&&s.name==="webkitAudioContext"&&e(t,i),Kt(i,n),i},pA=s=>{const e=s.numberOfOutputs;Object.defineProperty(s,"channelCount",{get:()=>e,set:t=>{if(t!==e)throw nn()}}),Object.defineProperty(s,"channelCountMode",{get:()=>"explicit",set:t=>{if(t!=="explicit")throw nn()}}),Object.defineProperty(s,"channelInterpretation",{get:()=>"discrete",set:t=>{if(t!=="discrete")throw nn()}})},wc=(s,e)=>{const t=s.createChannelSplitter(e.numberOfOutputs);return Kt(t,e),pA(t),t},mA=(s,e,t,n,i)=>(r,a)=>{if(r.createConstantSource===void 0)return t(r,a);const o=r.createConstantSource();return Kt(o,a),Lt(o,a,"offset"),e(n,()=>n(r))||tf(o),e(i,()=>i(r))||nf(o),s(r,o),o},ma=(s,e)=>(s.connect=e.connect.bind(e),s.disconnect=e.disconnect.bind(e),s),_A=(s,e,t,n)=>(i,{offset:r,...a})=>{const o=i.createBuffer(1,2,44100),c=e(i,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}),l=t(i,{...a,gain:r}),u=o.getChannelData(0);u[0]=1,u[1]=1,c.buffer=o,c.loop=!0;const h={get bufferSize(){},get channelCount(){return l.channelCount},set channelCount(_){l.channelCount=_},get channelCountMode(){return l.channelCountMode},set channelCountMode(_){l.channelCountMode=_},get channelInterpretation(){return l.channelInterpretation},set channelInterpretation(_){l.channelInterpretation=_},get context(){return l.context},get inputs(){return[]},get numberOfInputs(){return c.numberOfInputs},get numberOfOutputs(){return l.numberOfOutputs},get offset(){return l.gain},get onended(){return c.onended},set onended(_){c.onended=_},addEventListener(..._){return c.addEventListener(_[0],_[1],_[2])},dispatchEvent(..._){return c.dispatchEvent(_[0])},removeEventListener(..._){return c.removeEventListener(_[0],_[1],_[2])},start(_=0){c.start.call(c,_)},stop(_=0){c.stop.call(c,_)}},d=()=>c.connect(l),f=()=>c.disconnect(l);return s(i,c),n(ma(h,l),d,f)},gA=(s,e)=>(t,n)=>{const i=t.createConvolver();if(Kt(i,n),n.disableNormalization===i.normalize&&(i.normalize=!n.disableNormalization),wt(i,n,"buffer"),n.channelCount>2||(e(i,"channelCount",r=>()=>r.call(i),r=>a=>{if(a>2)throw s();return r.call(i,a)}),n.channelCountMode==="max"))throw s();return e(i,"channelCountMode",r=>()=>r.call(i),r=>a=>{if(a==="max")throw s();return r.call(i,a)}),i},T0=(s,e)=>{const t=s.createDelay(e.maxDelayTime);return Kt(t,e),Lt(t,e,"delayTime"),t},vA=s=>(e,t)=>{const n=e.createDynamicsCompressor();if(Kt(n,t),t.channelCount>2||t.channelCountMode==="max")throw s();return Lt(n,t,"attack"),Lt(n,t,"knee"),Lt(n,t,"ratio"),Lt(n,t,"release"),Lt(n,t,"threshold"),n},Xn=(s,e)=>{const t=s.createGain();return Kt(t,e),Lt(t,e,"gain"),t},xA=s=>(e,t,n)=>{if(e.createIIRFilter===void 0)return s(e,t,n);const i=e.createIIRFilter(n.feedforward,n.feedback);return Kt(i,n),i};function yA(s,e){const t=e[0]*e[0]+e[1]*e[1];return[(s[0]*e[0]+s[1]*e[1])/t,(s[1]*e[0]-s[0]*e[1])/t]}function SA(s,e){return[s[0]*e[0]-s[1]*e[1],s[0]*e[1]+s[1]*e[0]]}function jm(s,e){let t=[0,0];for(let n=s.length-1;n>=0;n-=1)t=SA(t,e),t[0]+=s[n];return t}const TA=(s,e,t,n)=>(i,r,{channelCount:a,channelCountMode:o,channelInterpretation:c,feedback:l,feedforward:u})=>{const h=y0(r,i.sampleRate),d=l instanceof Float64Array?l:new Float64Array(l),f=u instanceof Float64Array?u:new Float64Array(u),_=d.length,m=f.length,g=Math.min(_,m);if(_===0||_>20)throw n();if(d[0]===0)throw e();if(m===0||m>20)throw n();if(f[0]===0)throw e();if(d[0]!==1){for(let b=0;b<m;b+=1)f[b]/=d[0];for(let b=1;b<_;b+=1)d[b]/=d[0]}const p=t(i,h,a,a);p.channelCount=a,p.channelCountMode=o,p.channelInterpretation=c;const S=32,y=[],T=[],v=[];for(let b=0;b<a;b+=1){y.push(0);const x=new Float32Array(S),w=new Float32Array(S);x.fill(0),w.fill(0),T.push(x),v.push(w)}p.onaudioprocess=b=>{const x=b.inputBuffer,w=b.outputBuffer,F=x.numberOfChannels;for(let R=0;R<F;R+=1){const L=x.getChannelData(R),N=w.getChannelData(R);y[R]=x0(d,_,f,m,g,T[R],v[R],y[R],S,L,N)}};const M=i.sampleRate/2;return ma({get bufferSize(){return h},get channelCount(){return p.channelCount},set channelCount(b){p.channelCount=b},get channelCountMode(){return p.channelCountMode},set channelCountMode(b){p.channelCountMode=b},get channelInterpretation(){return p.channelInterpretation},set channelInterpretation(b){p.channelInterpretation=b},get context(){return p.context},get inputs(){return[p]},get numberOfInputs(){return p.numberOfInputs},get numberOfOutputs(){return p.numberOfOutputs},addEventListener(...b){return p.addEventListener(b[0],b[1],b[2])},dispatchEvent(...b){return p.dispatchEvent(b[0])},getFrequencyResponse(b,x,w){if(b.length!==x.length||x.length!==w.length)throw s();const F=b.length;for(let R=0;R<F;R+=1){const L=-Math.PI*(b[R]/M),N=[Math.cos(L),Math.sin(L)],k=jm(f,N),z=jm(d,N),U=yA(k,z);x[R]=Math.sqrt(U[0]*U[0]+U[1]*U[1]),w[R]=Math.atan2(U[1],U[0])}},removeEventListener(...b){return p.removeEventListener(b[0],b[1],b[2])}},p)},MA=(s,e)=>s.createMediaElementSource(e.mediaElement),EA=(s,e)=>{const t=s.createMediaStreamDestination();return Kt(t,e),t.numberOfOutputs===1&&Object.defineProperty(t,"numberOfOutputs",{get:()=>0}),t},wA=(s,{mediaStream:e})=>{const t=e.getAudioTracks();t.sort((r,a)=>r.id<a.id?-1:r.id>a.id?1:0);const n=t.slice(0,1),i=s.createMediaStreamSource(new MediaStream(n));return Object.defineProperty(i,"mediaStream",{value:e}),i},bA=(s,e)=>(t,{mediaStreamTrack:n})=>{if(typeof t.createMediaStreamTrackSource=="function")return t.createMediaStreamTrackSource(n);const i=new MediaStream([n]),r=t.createMediaStreamSource(i);if(n.kind!=="audio")throw s();if(e(t))throw new TypeError;return r},DA=s=>s===null?null:s.hasOwnProperty("OfflineAudioContext")?s.OfflineAudioContext:s.hasOwnProperty("webkitOfflineAudioContext")?s.webkitOfflineAudioContext:null,AA=(s,e,t,n,i,r)=>(a,o)=>{const c=a.createOscillator();return Kt(c,o),Lt(c,o,"detune"),Lt(c,o,"frequency"),o.periodicWave!==void 0?c.setPeriodicWave(o.periodicWave):wt(c,o,"type"),e(t,()=>t(a))||tf(c),e(n,()=>n(a))||r(c,a),e(i,()=>i(a))||nf(c),s(a,c),c},CA=s=>(e,t)=>{const n=e.createPanner();return n.orientationX===void 0?s(e,t):(Kt(n,t),Lt(n,t,"orientationX"),Lt(n,t,"orientationY"),Lt(n,t,"orientationZ"),Lt(n,t,"positionX"),Lt(n,t,"positionY"),Lt(n,t,"positionZ"),wt(n,t,"coneInnerAngle"),wt(n,t,"coneOuterAngle"),wt(n,t,"coneOuterGain"),wt(n,t,"distanceModel"),wt(n,t,"maxDistance"),wt(n,t,"panningModel"),wt(n,t,"refDistance"),wt(n,t,"rolloffFactor"),n)},RA=(s,e,t,n,i,r,a,o,c,l)=>(u,{coneInnerAngle:h,coneOuterAngle:d,coneOuterGain:f,distanceModel:_,maxDistance:m,orientationX:g,orientationY:p,orientationZ:S,panningModel:y,positionX:T,positionY:v,positionZ:M,refDistance:E,rolloffFactor:b,...x})=>{const w=u.createPanner();if(x.channelCount>2||x.channelCountMode==="max")throw a();Kt(w,x);const F={channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete"},R=t(u,{...F,channelInterpretation:"speakers",numberOfInputs:6}),L=n(u,{...x,gain:1}),N=n(u,{...F,gain:1}),k=n(u,{...F,gain:0}),z=n(u,{...F,gain:0}),U=n(u,{...F,gain:0}),V=n(u,{...F,gain:0}),H=n(u,{...F,gain:0}),D=i(u,256,6,1),te=r(u,{...F,curve:new Float32Array([1,1]),oversample:"none"});let ee=[g,p,S],q=[T,v,M];const Y=new Float32Array(1);D.onaudioprocess=({inputBuffer:ie})=>{const Se=[c(ie,Y,0),c(ie,Y,1),c(ie,Y,2)];Se.some((ye,Ve)=>ye!==ee[Ve])&&(w.setOrientation(...Se),ee=Se);const ce=[c(ie,Y,3),c(ie,Y,4),c(ie,Y,5)];ce.some((ye,Ve)=>ye!==q[Ve])&&(w.setPosition(...ce),q=ce)},Object.defineProperty(k.gain,"defaultValue",{get:()=>0}),Object.defineProperty(z.gain,"defaultValue",{get:()=>0}),Object.defineProperty(U.gain,"defaultValue",{get:()=>0}),Object.defineProperty(V.gain,"defaultValue",{get:()=>0}),Object.defineProperty(H.gain,"defaultValue",{get:()=>0});const J={get bufferSize(){},get channelCount(){return w.channelCount},set channelCount(ie){if(ie>2)throw a();L.channelCount=ie,w.channelCount=ie},get channelCountMode(){return w.channelCountMode},set channelCountMode(ie){if(ie==="max")throw a();L.channelCountMode=ie,w.channelCountMode=ie},get channelInterpretation(){return w.channelInterpretation},set channelInterpretation(ie){L.channelInterpretation=ie,w.channelInterpretation=ie},get coneInnerAngle(){return w.coneInnerAngle},set coneInnerAngle(ie){w.coneInnerAngle=ie},get coneOuterAngle(){return w.coneOuterAngle},set coneOuterAngle(ie){w.coneOuterAngle=ie},get coneOuterGain(){return w.coneOuterGain},set coneOuterGain(ie){if(ie<0||ie>1)throw e();w.coneOuterGain=ie},get context(){return w.context},get distanceModel(){return w.distanceModel},set distanceModel(ie){w.distanceModel=ie},get inputs(){return[L]},get maxDistance(){return w.maxDistance},set maxDistance(ie){if(ie<0)throw new RangeError;w.maxDistance=ie},get numberOfInputs(){return w.numberOfInputs},get numberOfOutputs(){return w.numberOfOutputs},get orientationX(){return N.gain},get orientationY(){return k.gain},get orientationZ(){return z.gain},get panningModel(){return w.panningModel},set panningModel(ie){w.panningModel=ie},get positionX(){return U.gain},get positionY(){return V.gain},get positionZ(){return H.gain},get refDistance(){return w.refDistance},set refDistance(ie){if(ie<0)throw new RangeError;w.refDistance=ie},get rolloffFactor(){return w.rolloffFactor},set rolloffFactor(ie){if(ie<0)throw new RangeError;w.rolloffFactor=ie},addEventListener(...ie){return L.addEventListener(ie[0],ie[1],ie[2])},dispatchEvent(...ie){return L.dispatchEvent(ie[0])},removeEventListener(...ie){return L.removeEventListener(ie[0],ie[1],ie[2])}};h!==J.coneInnerAngle&&(J.coneInnerAngle=h),d!==J.coneOuterAngle&&(J.coneOuterAngle=d),f!==J.coneOuterGain&&(J.coneOuterGain=f),_!==J.distanceModel&&(J.distanceModel=_),m!==J.maxDistance&&(J.maxDistance=m),g!==J.orientationX.value&&(J.orientationX.value=g),p!==J.orientationY.value&&(J.orientationY.value=p),S!==J.orientationZ.value&&(J.orientationZ.value=S),y!==J.panningModel&&(J.panningModel=y),T!==J.positionX.value&&(J.positionX.value=T),v!==J.positionY.value&&(J.positionY.value=v),M!==J.positionZ.value&&(J.positionZ.value=M),E!==J.refDistance&&(J.refDistance=E),b!==J.rolloffFactor&&(J.rolloffFactor=b),(ee[0]!==1||ee[1]!==0||ee[2]!==0)&&w.setOrientation(...ee),(q[0]!==0||q[1]!==0||q[2]!==0)&&w.setPosition(...q);const se=()=>{L.connect(w),s(L,te,0,0),te.connect(N).connect(R,0,0),te.connect(k).connect(R,0,1),te.connect(z).connect(R,0,2),te.connect(U).connect(R,0,3),te.connect(V).connect(R,0,4),te.connect(H).connect(R,0,5),R.connect(D).connect(u.destination)},O=()=>{L.disconnect(w),o(L,te,0,0),te.disconnect(N),N.disconnect(R),te.disconnect(k),k.disconnect(R),te.disconnect(z),z.disconnect(R),te.disconnect(U),U.disconnect(R),te.disconnect(V),V.disconnect(R),te.disconnect(H),H.disconnect(R),R.disconnect(D),D.disconnect(u.destination)};return l(ma(J,w),se,O)},PA=s=>(e,{disableNormalization:t,imag:n,real:i})=>{const r=n instanceof Float32Array?n:new Float32Array(n),a=i instanceof Float32Array?i:new Float32Array(i),o=e.createPeriodicWave(a,r,{disableNormalization:t});if(Array.from(n).length<2)throw s();return o},bc=(s,e,t,n)=>s.createScriptProcessor(e,t,n),LA=(s,e)=>(t,n)=>{const i=n.channelCountMode;if(i==="clamped-max")throw e();if(t.createStereoPanner===void 0)return s(t,n);const r=t.createStereoPanner();return Kt(r,n),Lt(r,n,"pan"),Object.defineProperty(r,"channelCountMode",{get:()=>i,set:a=>{if(a!==i)throw e()}}),r},FA=(s,e,t,n,i,r)=>{const o=new Float32Array([1,1]),c=Math.PI/2,l={channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete"},u={...l,oversample:"none"},h=(_,m,g,p)=>{const S=new Float32Array(16385),y=new Float32Array(16385);for(let x=0;x<16385;x+=1){const w=x/16384*c;S[x]=Math.cos(w),y[x]=Math.sin(w)}const T=t(_,{...l,gain:0}),v=n(_,{...u,curve:S}),M=n(_,{...u,curve:o}),E=t(_,{...l,gain:0}),b=n(_,{...u,curve:y});return{connectGraph(){m.connect(T),m.connect(M.inputs===void 0?M:M.inputs[0]),m.connect(E),M.connect(g),g.connect(v.inputs===void 0?v:v.inputs[0]),g.connect(b.inputs===void 0?b:b.inputs[0]),v.connect(T.gain),b.connect(E.gain),T.connect(p,0,0),E.connect(p,0,1)},disconnectGraph(){m.disconnect(T),m.disconnect(M.inputs===void 0?M:M.inputs[0]),m.disconnect(E),M.disconnect(g),g.disconnect(v.inputs===void 0?v:v.inputs[0]),g.disconnect(b.inputs===void 0?b:b.inputs[0]),v.disconnect(T.gain),b.disconnect(E.gain),T.disconnect(p,0,0),E.disconnect(p,0,1)}}},d=(_,m,g,p)=>{const S=new Float32Array(16385),y=new Float32Array(16385),T=new Float32Array(16385),v=new Float32Array(16385),M=Math.floor(16385/2);for(let U=0;U<16385;U+=1)if(U>M){const V=(U-M)/(16384-M)*c;S[U]=Math.cos(V),y[U]=Math.sin(V),T[U]=0,v[U]=1}else{const V=U/(16384-M)*c;S[U]=1,y[U]=0,T[U]=Math.cos(V),v[U]=Math.sin(V)}const E=e(_,{channelCount:2,channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:2}),b=t(_,{...l,gain:0}),x=n(_,{...u,curve:S}),w=t(_,{...l,gain:0}),F=n(_,{...u,curve:y}),R=n(_,{...u,curve:o}),L=t(_,{...l,gain:0}),N=n(_,{...u,curve:T}),k=t(_,{...l,gain:0}),z=n(_,{...u,curve:v});return{connectGraph(){m.connect(E),m.connect(R.inputs===void 0?R:R.inputs[0]),E.connect(b,0),E.connect(w,0),E.connect(L,1),E.connect(k,1),R.connect(g),g.connect(x.inputs===void 0?x:x.inputs[0]),g.connect(F.inputs===void 0?F:F.inputs[0]),g.connect(N.inputs===void 0?N:N.inputs[0]),g.connect(z.inputs===void 0?z:z.inputs[0]),x.connect(b.gain),F.connect(w.gain),N.connect(L.gain),z.connect(k.gain),b.connect(p,0,0),L.connect(p,0,0),w.connect(p,0,1),k.connect(p,0,1)},disconnectGraph(){m.disconnect(E),m.disconnect(R.inputs===void 0?R:R.inputs[0]),E.disconnect(b,0),E.disconnect(w,0),E.disconnect(L,1),E.disconnect(k,1),R.disconnect(g),g.disconnect(x.inputs===void 0?x:x.inputs[0]),g.disconnect(F.inputs===void 0?F:F.inputs[0]),g.disconnect(N.inputs===void 0?N:N.inputs[0]),g.disconnect(z.inputs===void 0?z:z.inputs[0]),x.disconnect(b.gain),F.disconnect(w.gain),N.disconnect(L.gain),z.disconnect(k.gain),b.disconnect(p,0,0),L.disconnect(p,0,0),w.disconnect(p,0,1),k.disconnect(p,0,1)}}},f=(_,m,g,p,S)=>{if(m===1)return h(_,g,p,S);if(m===2)return d(_,g,p,S);throw i()};return(_,{channelCount:m,channelCountMode:g,pan:p,...S})=>{if(g==="max")throw i();const y=s(_,{...S,channelCount:1,channelCountMode:g,numberOfInputs:2}),T=t(_,{...S,channelCount:m,channelCountMode:g,gain:1}),v=t(_,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:p});let{connectGraph:M,disconnectGraph:E}=f(_,m,T,v,y);Object.defineProperty(v.gain,"defaultValue",{get:()=>0}),Object.defineProperty(v.gain,"maxValue",{get:()=>1}),Object.defineProperty(v.gain,"minValue",{get:()=>-1});const b={get bufferSize(){},get channelCount(){return T.channelCount},set channelCount(R){T.channelCount!==R&&(x&&E(),{connectGraph:M,disconnectGraph:E}=f(_,R,T,v,y),x&&M()),T.channelCount=R},get channelCountMode(){return T.channelCountMode},set channelCountMode(R){if(R==="clamped-max"||R==="max")throw i();T.channelCountMode=R},get channelInterpretation(){return T.channelInterpretation},set channelInterpretation(R){T.channelInterpretation=R},get context(){return T.context},get inputs(){return[T]},get numberOfInputs(){return T.numberOfInputs},get numberOfOutputs(){return T.numberOfOutputs},get pan(){return v.gain},addEventListener(...R){return T.addEventListener(R[0],R[1],R[2])},dispatchEvent(...R){return T.dispatchEvent(R[0])},removeEventListener(...R){return T.removeEventListener(R[0],R[1],R[2])}};let x=!1;const w=()=>{M(),x=!0},F=()=>{E(),x=!1};return r(ma(b,y),w,F)}},NA=(s,e,t,n,i,r,a)=>(o,c)=>{const l=o.createWaveShaper();if(r!==null&&r.name==="webkitAudioContext"&&o.createGain().gain.automationRate===void 0)return t(o,c);Kt(l,c);const u=c.curve===null||c.curve instanceof Float32Array?c.curve:new Float32Array(c.curve);if(u!==null&&u.length<2)throw e();wt(l,{curve:u},"curve"),wt(l,c,"oversample");let h=null,d=!1;return a(l,"curve",m=>()=>m.call(l),m=>g=>(m.call(l,g),d&&(n(g)&&h===null?h=s(o,l):!n(g)&&h!==null&&(h(),h=null)),g)),i(l,()=>{d=!0,n(l.curve)&&(h=s(o,l))},()=>{d=!1,h!==null&&(h(),h=null)})},IA=(s,e,t,n,i)=>(r,{curve:a,oversample:o,...c})=>{const l=r.createWaveShaper(),u=r.createWaveShaper();Kt(l,c),Kt(u,c);const h=t(r,{...c,gain:1}),d=t(r,{...c,gain:-1}),f=t(r,{...c,gain:1}),_=t(r,{...c,gain:-1});let m=null,g=!1,p=null;const S={get bufferSize(){},get channelCount(){return l.channelCount},set channelCount(v){h.channelCount=v,d.channelCount=v,l.channelCount=v,f.channelCount=v,u.channelCount=v,_.channelCount=v},get channelCountMode(){return l.channelCountMode},set channelCountMode(v){h.channelCountMode=v,d.channelCountMode=v,l.channelCountMode=v,f.channelCountMode=v,u.channelCountMode=v,_.channelCountMode=v},get channelInterpretation(){return l.channelInterpretation},set channelInterpretation(v){h.channelInterpretation=v,d.channelInterpretation=v,l.channelInterpretation=v,f.channelInterpretation=v,u.channelInterpretation=v,_.channelInterpretation=v},get context(){return l.context},get curve(){return p},set curve(v){if(v!==null&&v.length<2)throw e();if(v===null)l.curve=v,u.curve=v;else{const M=v.length,E=new Float32Array(M+2-M%2),b=new Float32Array(M+2-M%2);E[0]=v[0],b[0]=-v[M-1];const x=Math.ceil((M+1)/2),w=(M+1)/2-1;for(let F=1;F<x;F+=1){const R=F/x*w,L=Math.floor(R),N=Math.ceil(R);E[F]=L===N?v[L]:(1-(R-L))*v[L]+(1-(N-R))*v[N],b[F]=L===N?-v[M-1-L]:-((1-(R-L))*v[M-1-L])-(1-(N-R))*v[M-1-N]}E[x]=M%2===1?v[x-1]:(v[x-2]+v[x-1])/2,l.curve=E,u.curve=b}p=v,g&&(n(p)&&m===null?m=s(r,h):m!==null&&(m(),m=null))},get inputs(){return[h]},get numberOfInputs(){return l.numberOfInputs},get numberOfOutputs(){return l.numberOfOutputs},get oversample(){return l.oversample},set oversample(v){l.oversample=v,u.oversample=v},addEventListener(...v){return h.addEventListener(v[0],v[1],v[2])},dispatchEvent(...v){return h.dispatchEvent(v[0])},removeEventListener(...v){return h.removeEventListener(v[0],v[1],v[2])}};a!==null&&(S.curve=a instanceof Float32Array?a:new Float32Array(a)),o!==S.oversample&&(S.oversample=o);const y=()=>{h.connect(l).connect(f),h.connect(d).connect(u).connect(_).connect(f),g=!0,n(p)&&(m=s(r,h))},T=()=>{h.disconnect(l),l.disconnect(f),h.disconnect(d),d.disconnect(u),u.disconnect(_),_.disconnect(f),g=!1,m!==null&&(m(),m=null)};return i(ma(S,f),y,T)},Nn=()=>new DOMException("","NotSupportedError"),OA={numberOfChannels:1},UA=(s,e,t,n,i)=>class extends s{constructor(a,o,c){let l;if(typeof a=="number"&&o!==void 0&&c!==void 0)l={length:o,numberOfChannels:a,sampleRate:c};else if(typeof a=="object")l=a;else throw new Error("The given parameters are not valid.");const{length:u,numberOfChannels:h,sampleRate:d}={...OA,...l},f=n(h,u,d);e(dc,()=>dc(f))||f.addEventListener("statechange",(()=>{let _=0;const m=g=>{this._state==="running"&&(_>0?(f.removeEventListener("statechange",m),g.stopImmediatePropagation(),this._waitForThePromiseToSettle(g)):_+=1)};return m})()),super(f,h),this._length=u,this._nativeOfflineAudioContext=f,this._state=null}get length(){return this._nativeOfflineAudioContext.length===void 0?this._length:this._nativeOfflineAudioContext.length}get state(){return this._state===null?this._nativeOfflineAudioContext.state:this._state}startRendering(){return this._state==="running"?Promise.reject(t()):(this._state="running",i(this.destination,this._nativeOfflineAudioContext).finally(()=>{this._state=null,f0(this)}))}_waitForThePromiseToSettle(a){this._state===null?this._nativeOfflineAudioContext.dispatchEvent(a):setTimeout(()=>this._waitForThePromiseToSettle(a))}},kA={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",detune:0,frequency:440,periodicWave:void 0,type:"sine"},zA=(s,e,t,n,i,r,a)=>class extends s{constructor(c,l){const u=i(c),h={...kA,...l},d=t(u,h),f=r(u),_=f?n():null,m=c.sampleRate/2;super(c,!1,d,_),this._detune=e(this,f,d.detune,153600,-153600),this._frequency=e(this,f,d.frequency,m,-m),this._nativeOscillatorNode=d,this._onended=null,this._oscillatorNodeRenderer=_,this._oscillatorNodeRenderer!==null&&h.periodicWave!==void 0&&(this._oscillatorNodeRenderer.periodicWave=h.periodicWave)}get detune(){return this._detune}get frequency(){return this._frequency}get onended(){return this._onended}set onended(c){const l=typeof c=="function"?a(this,c):null;this._nativeOscillatorNode.onended=l;const u=this._nativeOscillatorNode.onended;this._onended=u!==null&&u===l?c:u}get type(){return this._nativeOscillatorNode.type}set type(c){this._nativeOscillatorNode.type=c,this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.periodicWave=null)}setPeriodicWave(c){this._nativeOscillatorNode.setPeriodicWave(c),this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.periodicWave=c)}start(c=0){if(this._nativeOscillatorNode.start(c),this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.start=c),this.context.state!=="closed"){ia(this);const l=()=>{this._nativeOscillatorNode.removeEventListener("ended",l),Es(this)&&Tc(this)};this._nativeOscillatorNode.addEventListener("ended",l)}}stop(c=0){this._nativeOscillatorNode.stop(c),this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.stop=c)}},BA=(s,e,t,n,i)=>()=>{const r=new WeakMap;let a=null,o=null,c=null;const l=async(u,h)=>{let d=t(u);const f=yn(d,h);if(!f){const _={channelCount:d.channelCount,channelCountMode:d.channelCountMode,channelInterpretation:d.channelInterpretation,detune:d.detune.value,frequency:d.frequency.value,periodicWave:a===null?void 0:a,type:d.type};d=e(h,_),o!==null&&d.start(o),c!==null&&d.stop(c)}return r.set(h,d),f?(await s(h,u.detune,d.detune),await s(h,u.frequency,d.frequency)):(await n(h,u.detune,d.detune),await n(h,u.frequency,d.frequency)),await i(u,h,d),d};return{set periodicWave(u){a=u},set start(u){o=u},set stop(u){c=u},render(u,h){const d=r.get(h);return d!==void 0?Promise.resolve(d):l(u,h)}}},VA={channelCount:2,channelCountMode:"clamped-max",channelInterpretation:"speakers",coneInnerAngle:360,coneOuterAngle:360,coneOuterGain:0,distanceModel:"inverse",maxDistance:1e4,orientationX:1,orientationY:0,orientationZ:0,panningModel:"equalpower",positionX:0,positionY:0,positionZ:0,refDistance:1,rolloffFactor:1},GA=(s,e,t,n,i,r,a)=>class extends s{constructor(c,l){const u=i(c),h={...VA,...l},d=t(u,h),f=r(u),_=f?n():null;super(c,!1,d,_),this._nativePannerNode=d,this._orientationX=e(this,f,d.orientationX,Cn,kn),this._orientationY=e(this,f,d.orientationY,Cn,kn),this._orientationZ=e(this,f,d.orientationZ,Cn,kn),this._positionX=e(this,f,d.positionX,Cn,kn),this._positionY=e(this,f,d.positionY,Cn,kn),this._positionZ=e(this,f,d.positionZ,Cn,kn),a(this,1)}get coneInnerAngle(){return this._nativePannerNode.coneInnerAngle}set coneInnerAngle(c){this._nativePannerNode.coneInnerAngle=c}get coneOuterAngle(){return this._nativePannerNode.coneOuterAngle}set coneOuterAngle(c){this._nativePannerNode.coneOuterAngle=c}get coneOuterGain(){return this._nativePannerNode.coneOuterGain}set coneOuterGain(c){this._nativePannerNode.coneOuterGain=c}get distanceModel(){return this._nativePannerNode.distanceModel}set distanceModel(c){this._nativePannerNode.distanceModel=c}get maxDistance(){return this._nativePannerNode.maxDistance}set maxDistance(c){this._nativePannerNode.maxDistance=c}get orientationX(){return this._orientationX}get orientationY(){return this._orientationY}get orientationZ(){return this._orientationZ}get panningModel(){return this._nativePannerNode.panningModel}set panningModel(c){this._nativePannerNode.panningModel=c}get positionX(){return this._positionX}get positionY(){return this._positionY}get positionZ(){return this._positionZ}get refDistance(){return this._nativePannerNode.refDistance}set refDistance(c){this._nativePannerNode.refDistance=c}get rolloffFactor(){return this._nativePannerNode.rolloffFactor}set rolloffFactor(c){this._nativePannerNode.rolloffFactor=c}},WA=(s,e,t,n,i,r,a,o,c,l)=>()=>{const u=new WeakMap;let h=null;const d=async(f,_)=>{let m=null,g=r(f);const p={channelCount:g.channelCount,channelCountMode:g.channelCountMode,channelInterpretation:g.channelInterpretation},S={...p,coneInnerAngle:g.coneInnerAngle,coneOuterAngle:g.coneOuterAngle,coneOuterGain:g.coneOuterGain,distanceModel:g.distanceModel,maxDistance:g.maxDistance,panningModel:g.panningModel,refDistance:g.refDistance,rolloffFactor:g.rolloffFactor},y=yn(g,_);if("bufferSize"in g)m=n(_,{...p,gain:1});else if(!y){const T={...S,orientationX:g.orientationX.value,orientationY:g.orientationY.value,orientationZ:g.orientationZ.value,positionX:g.positionX.value,positionY:g.positionY.value,positionZ:g.positionZ.value};g=i(_,T)}if(u.set(_,m===null?g:m),m!==null){if(h===null){if(a===null)throw new Error("Missing the native OfflineAudioContext constructor.");const F=new a(6,f.context.length,_.sampleRate),R=e(F,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:6});R.connect(F.destination),h=(async()=>{const L=await Promise.all([f.orientationX,f.orientationY,f.orientationZ,f.positionX,f.positionY,f.positionZ].map(async(N,k)=>{const z=t(F,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",offset:k===0?1:0});return await o(F,N,z.offset),z}));for(let N=0;N<6;N+=1)L[N].connect(R,0,N),L[N].start(0);return l(F)})()}const T=await h,v=n(_,{...p,gain:1});await c(f,_,v);const M=[];for(let F=0;F<T.numberOfChannels;F+=1)M.push(T.getChannelData(F));let E=[M[0][0],M[1][0],M[2][0]],b=[M[3][0],M[4][0],M[5][0]],x=n(_,{...p,gain:1}),w=i(_,{...S,orientationX:E[0],orientationY:E[1],orientationZ:E[2],positionX:b[0],positionY:b[1],positionZ:b[2]});v.connect(x).connect(w.inputs[0]),w.connect(m);for(let F=128;F<T.length;F+=128){const R=[M[0][F],M[1][F],M[2][F]],L=[M[3][F],M[4][F],M[5][F]];if(R.some((N,k)=>N!==E[k])||L.some((N,k)=>N!==b[k])){E=R,b=L;const N=F/_.sampleRate;x.gain.setValueAtTime(0,N),x=n(_,{...p,gain:0}),w=i(_,{...S,orientationX:E[0],orientationY:E[1],orientationZ:E[2],positionX:b[0],positionY:b[1],positionZ:b[2]}),x.gain.setValueAtTime(1,N),v.connect(x).connect(w.inputs[0]),w.connect(m)}}return m}return y?(await s(_,f.orientationX,g.orientationX),await s(_,f.orientationY,g.orientationY),await s(_,f.orientationZ,g.orientationZ),await s(_,f.positionX,g.positionX),await s(_,f.positionY,g.positionY),await s(_,f.positionZ,g.positionZ)):(await o(_,f.orientationX,g.orientationX),await o(_,f.orientationY,g.orientationY),await o(_,f.orientationZ,g.orientationZ),await o(_,f.positionX,g.positionX),await o(_,f.positionY,g.positionY),await o(_,f.positionZ,g.positionZ)),pa(g)?await c(f,_,g.inputs[0]):await c(f,_,g),g};return{render(f,_){const m=u.get(_);return m!==void 0?Promise.resolve(m):d(f,_)}}},HA={disableNormalization:!1},qA=(s,e,t,n)=>class M0{constructor(r,a){const o=e(r),c=n({...HA,...a}),l=s(o,c);return t.add(l),l}static[Symbol.hasInstance](r){return r!==null&&typeof r=="object"&&Object.getPrototypeOf(r)===M0.prototype||t.has(r)}},XA=(s,e)=>(t,n,i)=>(s(n).replay(i),e(n,t,i)),YA=(s,e,t)=>async(n,i,r)=>{const a=s(n);await Promise.all(a.activeInputs.map((o,c)=>Array.from(o).map(async([l,u])=>{const d=await e(l).render(l,i),f=n.context.destination;!t(l)&&(n!==f||!t(n))&&d.connect(r,u,c)})).reduce((o,c)=>[...o,...c],[]))},jA=(s,e,t)=>async(n,i,r)=>{const a=e(n);await Promise.all(Array.from(a.activeInputs).map(async([o,c])=>{const u=await s(o).render(o,i);t(o)||u.connect(r,c)}))},$A=(s,e,t,n)=>i=>s(dc,()=>dc(i))?Promise.resolve(s(n,n)).then(r=>{if(!r){const a=t(i,512,0,1);i.oncomplete=()=>{a.onaudioprocess=null,a.disconnect()},a.onaudioprocess=()=>i.currentTime,a.connect(i.destination)}return i.startRendering()}):new Promise(r=>{const a=e(i,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});i.oncomplete=o=>{a.disconnect(),r(o.renderedBuffer)},a.connect(i.destination),i.startRendering()}),ZA=s=>(e,t)=>{s.set(e,t)},KA=s=>(e,t)=>s.set(e,t),JA=(s,e,t,n,i,r,a,o)=>(c,l)=>t(c).render(c,l).then(()=>Promise.all(Array.from(n(l)).map(u=>t(u).render(u,l)))).then(()=>i(l)).then(u=>(typeof u.copyFromChannel!="function"?(a(u),Jd(u)):e(r,()=>r(u))||o(u),s.add(u),u)),QA={channelCount:2,channelCountMode:"explicit",channelInterpretation:"speakers",pan:0},eC=(s,e,t,n,i,r)=>class extends s{constructor(o,c){const l=i(o),u={...QA,...c},h=t(l,u),d=r(l),f=d?n():null;super(o,!1,h,f),this._pan=e(this,d,h.pan)}get pan(){return this._pan}},tC=(s,e,t,n,i)=>()=>{const r=new WeakMap,a=async(o,c)=>{let l=t(o);const u=yn(l,c);if(!u){const h={channelCount:l.channelCount,channelCountMode:l.channelCountMode,channelInterpretation:l.channelInterpretation,pan:l.pan.value};l=e(c,h)}return r.set(c,l),u?await s(c,o.pan,l.pan):await n(c,o.pan,l.pan),pa(l)?await i(o,c,l.inputs[0]):await i(o,c,l),l};return{render(o,c){const l=r.get(c);return l!==void 0?Promise.resolve(l):a(o,c)}}},nC=s=>()=>{if(s===null)return!1;try{new s({length:1,sampleRate:44100})}catch{return!1}return!0},iC=(s,e)=>async()=>{if(s===null)return!0;if(e===null)return!1;const t=new Blob(['class A extends AudioWorkletProcessor{process(i){this.port.postMessage(i,[i[0][0].buffer])}}registerProcessor("a",A)'],{type:"application/javascript; charset=utf-8"}),n=new e(1,128,44100),i=URL.createObjectURL(t);let r=!1,a=!1;try{await n.audioWorklet.addModule(i);const o=new s(n,"a",{numberOfOutputs:0}),c=n.createOscillator();o.port.onmessage=()=>r=!0,o.onprocessorerror=()=>a=!0,c.connect(o),c.start(0),await n.startRendering(),await new Promise(l=>setTimeout(l))}catch{}finally{URL.revokeObjectURL(i)}return r&&!a},sC=(s,e)=>()=>{if(e===null)return Promise.resolve(!1);const t=new e(1,1,44100),n=s(t,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});return new Promise(i=>{t.oncomplete=()=>{n.disconnect(),i(t.currentTime!==0)},t.startRendering()})},rC=()=>new DOMException("","UnknownError"),oC={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",curve:null,oversample:"none"},aC=(s,e,t,n,i,r,a)=>class extends s{constructor(c,l){const u=i(c),h={...oC,...l},d=t(u,h),_=r(u)?n():null;super(c,!0,d,_),this._isCurveNullified=!1,this._nativeWaveShaperNode=d,a(this,1)}get curve(){return this._isCurveNullified?null:this._nativeWaveShaperNode.curve}set curve(c){if(c===null)this._isCurveNullified=!0,this._nativeWaveShaperNode.curve=new Float32Array([0,0]);else{if(c.length<2)throw e();this._isCurveNullified=!1,this._nativeWaveShaperNode.curve=c}}get oversample(){return this._nativeWaveShaperNode.oversample}set oversample(c){this._nativeWaveShaperNode.oversample=c}},cC=(s,e,t)=>()=>{const n=new WeakMap,i=async(r,a)=>{let o=e(r);if(!yn(o,a)){const l={channelCount:o.channelCount,channelCountMode:o.channelCountMode,channelInterpretation:o.channelInterpretation,curve:o.curve,oversample:o.oversample};o=s(a,l)}return n.set(a,o),pa(o)?await t(r,a,o.inputs[0]):await t(r,a,o),o};return{render(r,a){const o=n.get(a);return o!==void 0?Promise.resolve(o):i(r,a)}}},lC=()=>typeof window>"u"?null:window,uC=(s,e)=>t=>{t.copyFromChannel=(n,i,r=0)=>{const a=s(r),o=s(i);if(o>=t.numberOfChannels)throw e();const c=t.length,l=t.getChannelData(o),u=n.length;for(let h=a<0?-a:0;h+a<c&&h<u;h+=1)n[h]=l[h+a]},t.copyToChannel=(n,i,r=0)=>{const a=s(r),o=s(i);if(o>=t.numberOfChannels)throw e();const c=t.length,l=t.getChannelData(o),u=n.length;for(let h=a<0?-a:0;h+a<c&&h<u;h+=1)l[h+a]=n[h]}},hC=s=>e=>{e.copyFromChannel=(t=>(n,i,r=0)=>{const a=s(r),o=s(i);if(a<e.length)return t.call(e,n,o,a)})(e.copyFromChannel),e.copyToChannel=(t=>(n,i,r=0)=>{const a=s(r),o=s(i);if(a<e.length)return t.call(e,n,o,a)})(e.copyToChannel)},dC=s=>(e,t)=>{const n=t.createBuffer(1,1,44100);e.buffer===null&&(e.buffer=n),s(e,"buffer",i=>()=>{const r=i.call(e);return r===n?null:r},i=>r=>i.call(e,r===null?n:r))},fC=(s,e)=>(t,n)=>{n.channelCount=1,n.channelCountMode="explicit",Object.defineProperty(n,"channelCount",{get:()=>1,set:()=>{throw s()}}),Object.defineProperty(n,"channelCountMode",{get:()=>"explicit",set:()=>{throw s()}});const i=t.createBufferSource();e(n,()=>{const o=n.numberOfInputs;for(let c=0;c<o;c+=1)i.connect(n,0,c)},()=>i.disconnect(n))},E0=(s,e,t)=>s.copyFromChannel===void 0?s.getChannelData(t)[0]:(s.copyFromChannel(e,t),e[0]),w0=s=>{if(s===null)return!1;const e=s.length;return e%2!==0?s[Math.floor(e/2)]!==0:s[e/2-1]+s[e/2]!==0},Dc=(s,e,t,n)=>{let i=s;for(;!i.hasOwnProperty(e);)i=Object.getPrototypeOf(i);const{get:r,set:a}=Object.getOwnPropertyDescriptor(i,e);Object.defineProperty(s,e,{get:t(r),set:n(a)})},pC=s=>({...s,outputChannelCount:s.outputChannelCount!==void 0?s.outputChannelCount:s.numberOfInputs===1&&s.numberOfOutputs===1?[s.channelCount]:Array.from({length:s.numberOfOutputs},()=>1)}),mC=s=>({...s,channelCount:s.numberOfOutputs}),_C=s=>{const{imag:e,real:t}=s;return e===void 0?t===void 0?{...s,imag:[0,0],real:[0,0]}:{...s,imag:Array.from(t,()=>0),real:t}:t===void 0?{...s,imag:e,real:Array.from(e,()=>0)}:{...s,imag:e,real:t}},b0=(s,e,t)=>{try{s.setValueAtTime(e,t)}catch(n){if(n.code!==9)throw n;b0(s,e,t+1e-7)}},gC=s=>{const e=s.createBufferSource();e.start();try{e.start()}catch{return!0}return!1},vC=s=>{const e=s.createBufferSource(),t=s.createBuffer(1,1,44100);e.buffer=t;try{e.start(0,1)}catch{return!1}return!0},xC=s=>{const e=s.createBufferSource();e.start();try{e.stop()}catch{return!1}return!0},sf=s=>{const e=s.createOscillator();try{e.start(-1)}catch(t){return t instanceof RangeError}return!1},D0=s=>{const e=s.createBuffer(1,1,44100),t=s.createBufferSource();t.buffer=e,t.start(),t.stop();try{return t.stop(),!0}catch{return!1}},rf=s=>{const e=s.createOscillator();try{e.stop(-1)}catch(t){return t instanceof RangeError}return!1},yC=s=>{const{port1:e,port2:t}=new MessageChannel;try{e.postMessage(s)}finally{e.close(),t.close()}},SC=s=>{s.start=(e=>(t=0,n=0,i)=>{const r=s.buffer,a=r===null?n:Math.min(r.duration,n);r!==null&&a>r.duration-.5/s.context.sampleRate?e.call(s,t,0,0):e.call(s,t,a,i)})(s.start)},A0=(s,e)=>{const t=e.createGain();s.connect(t);const n=(i=>()=>{i.call(s,t),s.removeEventListener("ended",n)})(s.disconnect);s.addEventListener("ended",n),ma(s,t),s.stop=(i=>{let r=!1;return(a=0)=>{if(r)try{i.call(s,a)}catch{t.gain.setValueAtTime(0,a)}else i.call(s,a),r=!0}})(s.stop)},_a=(s,e)=>t=>{const n={value:s};return Object.defineProperties(t,{currentTarget:n,target:n}),typeof e=="function"?e.call(s,t):e.handleEvent.call(s,t)},TC=Gw(no),MC=jw(no),EC=oD(_u),C0=new WeakMap,wC=ED(C0),Vi=Ob(new Map,new WeakMap),ss=lC(),R0=eA(Vi,as),of=MD(Fn),un=YA(Fn,of,jr),bC=Qw(R0,Mt,un),yt=DD(mu),Ps=DA(ss),ft=HD(Ps),P0=new WeakMap,L0=_D(_a),Ac=sA(ss),af=BD(Ac),cf=VD(ss),F0=GD(ss),fc=oA(ss),zt=Eb(Ww(o0),Yw(TC,MC,Xl,EC,Yl,Fn,wC,Sc,Mt,no,Es,jr,wl),Vi,ID(cd,Yl,Fn,Mt,hc,Es),as,gu,Nn,nD(Xl,cd,Fn,Mt,hc,yt,Es,ft),lD(P0,Fn,Bi),L0,yt,af,cf,F0,ft,fc),DC=Jw(zt,bC,as,R0,yt,ft),lf=new WeakSet,$m=tA(ss),N0=$b(new Uint32Array(1)),uf=uC(N0,as),hf=hC(N0),I0=tb(lf,Vi,Nn,$m,Ps,nC($m),uf,hf),vu=$w(Xn),O0=jA(of,Mc,jr),cs=Wb(O0),ga=iA(vu,Vi,gC,vC,xC,sf,D0,rf,SC,dC(Dc),A0),ls=XA(wD(Mc),O0),AC=sb(cs,ga,Mt,ls,un),Gi=wb(Hw(a0),P0,Kd,bb,Ow,Uw,kw,zw,Bw,rd,s0,Ac,b0),CC=ib(zt,AC,Gi,nn,ga,yt,ft,_a),RC=fb(zt,pb,as,nn,rA(Xn,Dc),yt,ft,un),PC=Ib(cs,S0,Mt,ls,un),io=KA(C0),LC=Nb(zt,Gi,PC,gu,S0,yt,ft,io),cr=JD(no,cf),FC=fC(nn,cr),lr=fA(Ac,FC),NC=zb(lr,Mt,un),IC=kb(zt,NC,lr,yt,ft),OC=Gb(wc,Mt,un),UC=Vb(zt,OC,wc,yt,ft,mC),kC=_A(vu,ga,Xn,cr),va=mA(vu,Vi,kC,sf,rf),zC=jb(cs,va,Mt,ls,un),BC=Yb(zt,Gi,zC,va,yt,ft,_a),U0=gA(Nn,Dc),VC=Jb(U0,Mt,un),GC=Kb(zt,VC,U0,yt,ft,io),WC=rD(cs,T0,Mt,ls,un),HC=sD(zt,Gi,WC,T0,yt,ft,io),k0=vA(Nn),qC=fD(cs,k0,Mt,ls,un),XC=dD(zt,Gi,qC,k0,Nn,yt,ft,io),YC=SD(cs,Xn,Mt,ls,un),jC=yD(zt,Gi,YC,Xn,yt,ft),$C=TA(gu,nn,bc,Nn),xu=$A(Vi,Xn,bc,sC(Xn,Ps)),ZC=ND(ga,Mt,Ps,un,xu),KC=xA($C),JC=LD(zt,KC,ZC,yt,ft,io),QC=mb(Gi,lr,va,bc,Nn,E0,ft,Dc),z0=new WeakMap,eR=KD(RC,QC,L0,ft,z0,_a),B0=AA(vu,Vi,sf,D0,rf,A0),tR=BA(cs,B0,Mt,ls,un),nR=zA(zt,Gi,B0,tR,yt,ft,_a),V0=qb(ga),iR=IA(V0,nn,Xn,w0,cr),yu=NA(V0,nn,iR,w0,cr,Ac,Dc),sR=RA(Xl,nn,lr,Xn,bc,yu,Nn,Yl,E0,cr),G0=CA(sR),rR=WA(cs,lr,va,Xn,G0,Mt,Ps,ls,un,xu),oR=GA(zt,Gi,G0,rR,yt,ft,io),aR=PA(as),cR=qA(aR,yt,new WeakSet,_C),lR=FA(lr,wc,Xn,yu,Nn,cr),W0=LA(lR,Nn),uR=tC(cs,W0,Mt,ls,un),hR=eC(zt,Gi,W0,uR,yt,ft),dR=cC(yu,Mt,un),fR=aC(zt,nn,yu,dR,yt,ft,io),H0=qD(ss),df=gD(ss),q0=new WeakMap,pR=AD(q0,Ps),mR=H0?Xw(Vi,Nn,mD(ss),df,vD(Vw),yt,pR,ft,fc,new WeakMap,new WeakMap,iC(fc,Ps),ss):void 0,_R=WD(af,ft),gR=tD(lf,Vi,eD,pD,new WeakSet,yt,_R,Hl,dc,uf,hf),X0=Lb(mR,DC,I0,CC,LC,IC,UC,BC,GC,gR,HC,XC,jC,JC,eR,nR,oR,cR,hR,fR),vR=XD(zt,MA,yt,ft),xR=jD(zt,EA,yt,ft),yR=$D(zt,wA,yt,ft),SR=bA(nn,ft),TR=ZD(zt,SR,yt),MR=db(X0,nn,Nn,rC,vR,xR,yR,TR,Ac),ff=CD(z0),ER=Zw(ff),Y0=Hb(as),wR=aD(ff),j0=uD(as),$0=new WeakMap,bR=TD($0,Bi),DR=dA(Y0,as,nn,lr,wc,va,Xn,bc,Nn,j0,df,bR,cr),AR=cA(nn,DR,Xn,Nn,cr),CR=Pb(cs,Y0,ga,lr,wc,va,Xn,wR,j0,df,Mt,fc,Ps,ls,un,xu),RR=bD(q0),PR=ZA($0),Zm=H0?Ab(ER,zt,Gi,CR,AR,Fn,RR,yt,ft,fc,pC,PR,yC,_a):void 0,LR=Qb(Nn,Ps),FR=JA(lf,Vi,of,ff,xu,Hl,uf,hf),NR=UA(X0,Vi,nn,LR,FR),IR=OD(mu,af),OR=UD(Zd,cf),UR=kD(Kd,F0),kR=zD(mu,ft);function Ti(s){return s===void 0}function it(s){return s!==void 0}function zR(s){return typeof s=="function"}function tr(s){return typeof s=="number"}function kr(s){return Object.prototype.toString.call(s)==="[object Object]"&&s.constructor===Object}function BR(s){return typeof s=="boolean"}function hi(s){return Array.isArray(s)}function Cs(s){return typeof s=="string"}function ol(s){return Cs(s)&&/^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i.test(s)}function He(s,e){if(!s)throw new Error(e)}function ri(s,e,t=1/0){if(!(e<=s&&s<=t))throw new RangeError(`Value must be within [${e}, ${t}], got: ${s}`)}function Z0(s){!s.isOffline&&s.state!=="running"&&Cc('The AudioContext is "suspended". Invoke Tone.start() from a user action to start the audio.')}let K0=!1,Km=!1;function Jm(s){K0=s}function VR(s){Ti(s)&&K0&&!Km&&(Km=!0,Cc("Events scheduled inside of scheduled callbacks should use the passed in scheduling time. See https://github.com/Tonejs/Tone.js/wiki/Accurate-Timing"))}let J0=console;function GR(...s){J0.log(...s)}function Cc(...s){J0.warn(...s)}function WR(s){return new MR(s)}function HR(s,e,t){return new NR(s,e,t)}const ti=typeof self=="object"?self:null,qR=ti&&(ti.hasOwnProperty("AudioContext")||ti.hasOwnProperty("webkitAudioContext"));function XR(s,e,t){return He(it(Zm),"AudioWorkletNode only works in a secure context (https or localhost)"),new(s instanceof(ti==null?void 0:ti.BaseAudioContext)?ti==null?void 0:ti.AudioWorkletNode:Zm)(s,e,t)}function Wi(s,e,t,n){var i=arguments.length,r=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,e,t,n);else for(var o=s.length-1;o>=0;o--)(a=s[o])&&(r=(i<3?a(r):i>3?a(e,t,r):a(e,t))||r);return i>3&&r&&Object.defineProperty(e,t,r),r}function Xt(s,e,t,n){function i(r){return r instanceof t?r:new t(function(a){a(r)})}return new(t||(t=Promise))(function(r,a){function o(u){try{l(n.next(u))}catch(h){a(h)}}function c(u){try{l(n.throw(u))}catch(h){a(h)}}function l(u){u.done?r(u.value):i(u.value).then(o,c)}l((n=n.apply(s,e||[])).next())})}class YR{constructor(e,t,n,i){this._callback=e,this._type=t,this._minimumUpdateInterval=Math.max(128/(i||44100),.001),this.updateInterval=n,this._createClock()}_createWorker(){const e=new Blob([`
			// the initial timeout time
			let timeoutTime =  ${(this._updateInterval*1e3).toFixed(1)};
			// onmessage callback
			self.onmessage = function(msg){
				timeoutTime = parseInt(msg.data);
			};
			// the tick function which posts a message
			// and schedules a new tick
			function tick(){
				setTimeout(tick, timeoutTime);
				self.postMessage('tick');
			}
			// call tick initially
			tick();
			`],{type:"text/javascript"}),t=URL.createObjectURL(e),n=new Worker(t);n.onmessage=this._callback.bind(this),this._worker=n}_createTimeout(){this._timeout=setTimeout(()=>{this._createTimeout(),this._callback()},this._updateInterval*1e3)}_createClock(){if(this._type==="worker")try{this._createWorker()}catch{this._type="timeout",this._createClock()}else this._type==="timeout"&&this._createTimeout()}_disposeClock(){this._timeout&&clearTimeout(this._timeout),this._worker&&(this._worker.terminate(),this._worker.onmessage=null)}get updateInterval(){return this._updateInterval}set updateInterval(e){var t;this._updateInterval=Math.max(e,this._minimumUpdateInterval),this._type==="worker"&&((t=this._worker)===null||t===void 0||t.postMessage(this._updateInterval*1e3))}get type(){return this._type}set type(e){this._disposeClock(),this._type=e,this._createClock()}dispose(){this._disposeClock()}}function $r(s){return UR(s)}function Zs(s){return OR(s)}function bl(s){return kR(s)}function Do(s){return IR(s)}function jR(s){return s instanceof I0}function $R(s,e){return s==="value"||$r(e)||Zs(e)||jR(e)}function zr(s,...e){if(!e.length)return s;const t=e.shift();if(kr(s)&&kr(t))for(const n in t)$R(n,t[n])?s[n]=t[n]:kr(t[n])?(s[n]||Object.assign(s,{[n]:{}}),zr(s[n],t[n])):Object.assign(s,{[n]:t[n]});return zr(s,...e)}function ZR(s,e){return s.length===e.length&&s.every((t,n)=>e[n]===t)}function Ie(s,e,t=[],n){const i={},r=Array.from(e);if(kr(r[0])&&n&&!Reflect.has(r[0],n)&&(Object.keys(r[0]).some(o=>Reflect.has(s,o))||(zr(i,{[n]:r[0]}),t.splice(t.indexOf(n),1),r.shift())),r.length===1&&kr(r[0]))zr(i,r[0]);else for(let a=0;a<t.length;a++)it(r[a])&&(i[t[a]]=r[a]);return zr(s,i)}function KR(s){return s.constructor.getDefaults()}function Br(s,e){return Ti(s)?e:s}function Dr(s,e){return e.forEach(t=>{Reflect.has(s,t)&&delete s[t]}),s}/**
 * Tone.js
 * @author Yotam Mann
 * @license http://opensource.org/licenses/MIT MIT License
 * @copyright 2014-2024 Yotam Mann
 */class Ls{constructor(){this.debug=!1,this._wasDisposed=!1}static getDefaults(){return{}}log(...e){(this.debug||ti&&this.toString()===ti.TONE_DEBUG_CLASS)&&GR(this,...e)}dispose(){return this._wasDisposed=!0,this}get disposed(){return this._wasDisposed}toString(){return this.name}}Ls.version=i0;const pf=1e-6;function sa(s,e){return s>e+pf}function fd(s,e){return sa(s,e)||Fi(s,e)}function Kl(s,e){return s+pf<e}function Fi(s,e){return Math.abs(s-e)<pf}function JR(s,e,t){return Math.max(Math.min(s,t),e)}class Mi extends Ls{constructor(){super(),this.name="Timeline",this._timeline=[];const e=Ie(Mi.getDefaults(),arguments,["memory"]);this.memory=e.memory,this.increasing=e.increasing}static getDefaults(){return{memory:1/0,increasing:!1}}get length(){return this._timeline.length}add(e){if(He(Reflect.has(e,"time"),"Timeline: events must have a time attribute"),e.time=e.time.valueOf(),this.increasing&&this.length){const t=this._timeline[this.length-1];He(fd(e.time,t.time),"The time must be greater than or equal to the last scheduled time"),this._timeline.push(e)}else{const t=this._search(e.time);this._timeline.splice(t+1,0,e)}if(this.length>this.memory){const t=this.length-this.memory;this._timeline.splice(0,t)}return this}remove(e){const t=this._timeline.indexOf(e);return t!==-1&&this._timeline.splice(t,1),this}get(e,t="time"){const n=this._search(e,t);return n!==-1?this._timeline[n]:null}peek(){return this._timeline[0]}shift(){return this._timeline.shift()}getAfter(e,t="time"){const n=this._search(e,t);return n+1<this._timeline.length?this._timeline[n+1]:null}getBefore(e){const t=this._timeline.length;if(t>0&&this._timeline[t-1].time<e)return this._timeline[t-1];const n=this._search(e);return n-1>=0?this._timeline[n-1]:null}cancel(e){if(this._timeline.length>1){let t=this._search(e);if(t>=0)if(Fi(this._timeline[t].time,e)){for(let n=t;n>=0&&Fi(this._timeline[n].time,e);n--)t=n;this._timeline=this._timeline.slice(0,t)}else this._timeline=this._timeline.slice(0,t+1);else this._timeline=[]}else this._timeline.length===1&&fd(this._timeline[0].time,e)&&(this._timeline=[]);return this}cancelBefore(e){const t=this._search(e);return t>=0&&(this._timeline=this._timeline.slice(t+1)),this}previousEvent(e){const t=this._timeline.indexOf(e);return t>0?this._timeline[t-1]:null}_search(e,t="time"){if(this._timeline.length===0)return-1;let n=0;const i=this._timeline.length;let r=i;if(i>0&&this._timeline[i-1][t]<=e)return i-1;for(;n<r;){let a=Math.floor(n+(r-n)/2);const o=this._timeline[a],c=this._timeline[a+1];if(Fi(o[t],e)){for(let l=a;l<this._timeline.length;l++){const u=this._timeline[l];if(Fi(u[t],e))a=l;else break}return a}else{if(Kl(o[t],e)&&sa(c[t],e))return a;sa(o[t],e)?r=a:n=a+1}}return-1}_iterate(e,t=0,n=this._timeline.length-1){this._timeline.slice(t,n+1).forEach(e)}forEach(e){return this._iterate(e),this}forEachBefore(e,t){const n=this._search(e);return n!==-1&&this._iterate(t,0,n),this}forEachAfter(e,t){const n=this._search(e);return this._iterate(t,n+1),this}forEachBetween(e,t,n){let i=this._search(e),r=this._search(t);return i!==-1&&r!==-1?(this._timeline[i].time!==e&&(i+=1),this._timeline[r].time===t&&(r-=1),this._iterate(n,i,r)):i===-1&&this._iterate(n,0,r),this}forEachFrom(e,t){let n=this._search(e);for(;n>=0&&this._timeline[n].time>=e;)n--;return this._iterate(t,n+1),this}forEachAtTime(e,t){const n=this._search(e);if(n!==-1&&Fi(this._timeline[n].time,e)){let i=n;for(let r=n;r>=0&&Fi(this._timeline[r].time,e);r--)i=r;this._iterate(r=>{t(r)},i,n)}return this}dispose(){return super.dispose(),this._timeline=[],this}}const Q0=[];function Su(s){Q0.push(s)}function QR(s){Q0.forEach(e=>e(s))}const ev=[];function Tu(s){ev.push(s)}function e2(s){ev.forEach(e=>e(s))}class Rc extends Ls{constructor(){super(...arguments),this.name="Emitter"}on(e,t){return e.split(/\W+/).forEach(i=>{Ti(this._events)&&(this._events={}),this._events.hasOwnProperty(i)||(this._events[i]=[]),this._events[i].push(t)}),this}once(e,t){const n=(...i)=>{t(...i),this.off(e,n)};return this.on(e,n),this}off(e,t){return e.split(/\W+/).forEach(i=>{if(Ti(this._events)&&(this._events={}),this._events.hasOwnProperty(i))if(Ti(t))this._events[i]=[];else{const r=this._events[i];for(let a=r.length-1;a>=0;a--)r[a]===t&&r.splice(a,1)}}),this}emit(e,...t){if(this._events&&this._events.hasOwnProperty(e)){const n=this._events[e].slice(0);for(let i=0,r=n.length;i<r;i++)n[i].apply(this,t)}return this}static mixin(e){["on","once","off","emit"].forEach(t=>{const n=Object.getOwnPropertyDescriptor(Rc.prototype,t);Object.defineProperty(e.prototype,t,n)})}dispose(){return super.dispose(),this._events=void 0,this}}class tv extends Rc{constructor(){super(...arguments),this.isOffline=!1}toJSON(){return{}}}class Pc extends tv{constructor(){var e,t;super(),this.name="Context",this._constants=new Map,this._timeouts=new Mi,this._timeoutIds=0,this._initialized=!1,this._closeStarted=!1,this.isOffline=!1,this._workletPromise=null;const n=Ie(Pc.getDefaults(),arguments,["context"]);n.context?(this._context=n.context,this._latencyHint=((e=arguments[0])===null||e===void 0?void 0:e.latencyHint)||""):(this._context=WR({latencyHint:n.latencyHint}),this._latencyHint=n.latencyHint),this._ticker=new YR(this.emit.bind(this,"tick"),n.clockSource,n.updateInterval,this._context.sampleRate),this.on("tick",this._timeoutLoop.bind(this)),this._context.onstatechange=()=>{this.emit("statechange",this.state)},this[!((t=arguments[0])===null||t===void 0)&&t.hasOwnProperty("updateInterval")?"_lookAhead":"lookAhead"]=n.lookAhead}static getDefaults(){return{clockSource:"worker",latencyHint:"interactive",lookAhead:.1,updateInterval:.05}}initialize(){return this._initialized||(QR(this),this._initialized=!0),this}createAnalyser(){return this._context.createAnalyser()}createOscillator(){return this._context.createOscillator()}createBufferSource(){return this._context.createBufferSource()}createBiquadFilter(){return this._context.createBiquadFilter()}createBuffer(e,t,n){return this._context.createBuffer(e,t,n)}createChannelMerger(e){return this._context.createChannelMerger(e)}createChannelSplitter(e){return this._context.createChannelSplitter(e)}createConstantSource(){return this._context.createConstantSource()}createConvolver(){return this._context.createConvolver()}createDelay(e){return this._context.createDelay(e)}createDynamicsCompressor(){return this._context.createDynamicsCompressor()}createGain(){return this._context.createGain()}createIIRFilter(e,t){return this._context.createIIRFilter(e,t)}createPanner(){return this._context.createPanner()}createPeriodicWave(e,t,n){return this._context.createPeriodicWave(e,t,n)}createStereoPanner(){return this._context.createStereoPanner()}createWaveShaper(){return this._context.createWaveShaper()}createMediaStreamSource(e){return He(Do(this._context),"Not available if OfflineAudioContext"),this._context.createMediaStreamSource(e)}createMediaElementSource(e){return He(Do(this._context),"Not available if OfflineAudioContext"),this._context.createMediaElementSource(e)}createMediaStreamDestination(){return He(Do(this._context),"Not available if OfflineAudioContext"),this._context.createMediaStreamDestination()}decodeAudioData(e){return this._context.decodeAudioData(e)}get currentTime(){return this._context.currentTime}get state(){return this._context.state}get sampleRate(){return this._context.sampleRate}get listener(){return this.initialize(),this._listener}set listener(e){He(!this._initialized,"The listener cannot be set after initialization."),this._listener=e}get transport(){return this.initialize(),this._transport}set transport(e){He(!this._initialized,"The transport cannot be set after initialization."),this._transport=e}get draw(){return this.initialize(),this._draw}set draw(e){He(!this._initialized,"Draw cannot be set after initialization."),this._draw=e}get destination(){return this.initialize(),this._destination}set destination(e){He(!this._initialized,"The destination cannot be set after initialization."),this._destination=e}createAudioWorkletNode(e,t){return XR(this.rawContext,e,t)}addAudioWorkletModule(e){return Xt(this,void 0,void 0,function*(){He(it(this.rawContext.audioWorklet),"AudioWorkletNode is only available in a secure context (https or localhost)"),this._workletPromise||(this._workletPromise=this.rawContext.audioWorklet.addModule(e)),yield this._workletPromise})}workletsAreReady(){return Xt(this,void 0,void 0,function*(){(yield this._workletPromise)?this._workletPromise:Promise.resolve()})}get updateInterval(){return this._ticker.updateInterval}set updateInterval(e){this._ticker.updateInterval=e}get clockSource(){return this._ticker.type}set clockSource(e){this._ticker.type=e}get lookAhead(){return this._lookAhead}set lookAhead(e){this._lookAhead=e,this.updateInterval=e?e/2:.01}get latencyHint(){return this._latencyHint}get rawContext(){return this._context}now(){return this._context.currentTime+this._lookAhead}immediate(){return this._context.currentTime}resume(){return Do(this._context)?this._context.resume():Promise.resolve()}close(){return Xt(this,void 0,void 0,function*(){Do(this._context)&&this.state!=="closed"&&!this._closeStarted&&(this._closeStarted=!0,yield this._context.close()),this._initialized&&e2(this)})}getConstant(e){if(this._constants.has(e))return this._constants.get(e);{const t=this._context.createBuffer(1,128,this._context.sampleRate),n=t.getChannelData(0);for(let r=0;r<n.length;r++)n[r]=e;const i=this._context.createBufferSource();return i.channelCount=1,i.channelCountMode="explicit",i.buffer=t,i.loop=!0,i.start(0),this._constants.set(e,i),i}}dispose(){return super.dispose(),this._ticker.dispose(),this._timeouts.dispose(),Object.keys(this._constants).map(e=>this._constants[e].disconnect()),this.close(),this}_timeoutLoop(){const e=this.now();let t=this._timeouts.peek();for(;this._timeouts.length&&t&&t.time<=e;)t.callback(),this._timeouts.shift(),t=this._timeouts.peek()}setTimeout(e,t){this._timeoutIds++;const n=this.now();return this._timeouts.add({callback:e,id:this._timeoutIds,time:n+t}),this._timeoutIds}clearTimeout(e){return this._timeouts.forEach(t=>{t.id===e&&this._timeouts.remove(t)}),this}clearInterval(e){return this.clearTimeout(e)}setInterval(e,t){const n=++this._timeoutIds,i=()=>{const r=this.now();this._timeouts.add({callback:()=>{e(),i()},id:n,time:r+t})};return i(),n}}class t2 extends tv{constructor(){super(...arguments),this.lookAhead=0,this.latencyHint=0,this.isOffline=!1}createAnalyser(){return{}}createOscillator(){return{}}createBufferSource(){return{}}createBiquadFilter(){return{}}createBuffer(e,t,n){return{}}createChannelMerger(e){return{}}createChannelSplitter(e){return{}}createConstantSource(){return{}}createConvolver(){return{}}createDelay(e){return{}}createDynamicsCompressor(){return{}}createGain(){return{}}createIIRFilter(e,t){return{}}createPanner(){return{}}createPeriodicWave(e,t,n){return{}}createStereoPanner(){return{}}createWaveShaper(){return{}}createMediaStreamSource(e){return{}}createMediaElementSource(e){return{}}createMediaStreamDestination(){return{}}decodeAudioData(e){return Promise.resolve({})}createAudioWorkletNode(e,t){return{}}get rawContext(){return{}}addAudioWorkletModule(e){return Xt(this,void 0,void 0,function*(){return Promise.resolve()})}resume(){return Promise.resolve()}setTimeout(e,t){return 0}clearTimeout(e){return this}setInterval(e,t){return 0}clearInterval(e){return this}getConstant(e){return{}}get currentTime(){return 0}get state(){return{}}get sampleRate(){return 0}get listener(){return{}}get transport(){return{}}get draw(){return{}}set draw(e){}get destination(){return{}}set destination(e){}now(){return 0}immediate(){return 0}}function mt(s,e){hi(e)?e.forEach(t=>mt(s,t)):Object.defineProperty(s,e,{enumerable:!0,writable:!1})}function nv(s,e){hi(e)?e.forEach(t=>nv(s,t)):Object.defineProperty(s,e,{writable:!0})}const ut=()=>{};class gt extends Ls{constructor(){super(),this.name="ToneAudioBuffer",this.onload=ut;const e=Ie(gt.getDefaults(),arguments,["url","onload","onerror"]);this.reverse=e.reverse,this.onload=e.onload,Cs(e.url)?this.load(e.url).catch(e.onerror):e.url&&this.set(e.url)}static getDefaults(){return{onerror:ut,onload:ut,reverse:!1}}get sampleRate(){return this._buffer?this._buffer.sampleRate:oi().sampleRate}set(e){return e instanceof gt?e.loaded?this._buffer=e.get():e.onload=()=>{this.set(e),this.onload(this)}:this._buffer=e,this._reversed&&this._reverse(),this}get(){return this._buffer}load(e){return Xt(this,void 0,void 0,function*(){const t=gt.load(e).then(n=>{this.set(n),this.onload(this)});gt.downloads.push(t);try{yield t}finally{const n=gt.downloads.indexOf(t);gt.downloads.splice(n,1)}return this})}dispose(){return super.dispose(),this._buffer=void 0,this}fromArray(e){const t=hi(e)&&e[0].length>0,n=t?e.length:1,i=t?e[0].length:e.length,r=oi(),a=r.createBuffer(n,i,r.sampleRate),o=!t&&n===1?[e]:e;for(let c=0;c<n;c++)a.copyToChannel(o[c],c);return this._buffer=a,this}toMono(e){if(tr(e))this.fromArray(this.toArray(e));else{let t=new Float32Array(this.length);const n=this.numberOfChannels;for(let i=0;i<n;i++){const r=this.toArray(i);for(let a=0;a<r.length;a++)t[a]+=r[a]}t=t.map(i=>i/n),this.fromArray(t)}return this}toArray(e){if(tr(e))return this.getChannelData(e);if(this.numberOfChannels===1)return this.toArray(0);{const t=[];for(let n=0;n<this.numberOfChannels;n++)t[n]=this.getChannelData(n);return t}}getChannelData(e){return this._buffer?this._buffer.getChannelData(e):new Float32Array(0)}slice(e,t=this.duration){He(this.loaded,"Buffer is not loaded");const n=Math.floor(e*this.sampleRate),i=Math.floor(t*this.sampleRate);He(n<i,"The start time must be less than the end time");const r=i-n,a=oi().createBuffer(this.numberOfChannels,r,this.sampleRate);for(let o=0;o<this.numberOfChannels;o++)a.copyToChannel(this.getChannelData(o).subarray(n,i),o);return new gt(a)}_reverse(){if(this.loaded)for(let e=0;e<this.numberOfChannels;e++)this.getChannelData(e).reverse();return this}get loaded(){return this.length>0}get duration(){return this._buffer?this._buffer.duration:0}get length(){return this._buffer?this._buffer.length:0}get numberOfChannels(){return this._buffer?this._buffer.numberOfChannels:0}get reverse(){return this._reversed}set reverse(e){this._reversed!==e&&(this._reversed=e,this._reverse())}static fromArray(e){return new gt().fromArray(e)}static fromUrl(e){return Xt(this,void 0,void 0,function*(){return yield new gt().load(e)})}static load(e){return Xt(this,void 0,void 0,function*(){const t=e.match(/\[([^\]\[]+\|.+)\]$/);if(t){const c=t[1].split("|");let l=c[0];for(const u of c)if(gt.supportsType(u)){l=u;break}e=e.replace(t[0],l)}const n=gt.baseUrl===""||gt.baseUrl.endsWith("/")?gt.baseUrl:gt.baseUrl+"/",i=document.createElement("a");i.href=n+e,i.pathname=(i.pathname+i.hash).split("/").map(encodeURIComponent).join("/");const r=yield fetch(i.href);if(!r.ok)throw new Error(`could not load url: ${e}`);const a=yield r.arrayBuffer();return yield oi().decodeAudioData(a)})}static supportsType(e){const t=e.split("."),n=t[t.length-1];return document.createElement("audio").canPlayType("audio/"+n)!==""}static loaded(){return Xt(this,void 0,void 0,function*(){for(yield Promise.resolve();gt.downloads.length;)yield gt.downloads[0]})}}gt.baseUrl="";gt.downloads=[];class mf extends Pc{constructor(){super({clockSource:"offline",context:bl(arguments[0])?arguments[0]:HR(arguments[0],arguments[1]*arguments[2],arguments[2]),lookAhead:0,updateInterval:bl(arguments[0])?128/arguments[0].sampleRate:128/arguments[2]}),this.name="OfflineContext",this._currentTime=0,this.isOffline=!0,this._duration=bl(arguments[0])?arguments[0].length/arguments[0].sampleRate:arguments[1]}now(){return this._currentTime}get currentTime(){return this._currentTime}_renderClock(e){return Xt(this,void 0,void 0,function*(){let t=0;for(;this._duration-this._currentTime>=0;){this.emit("tick"),this._currentTime+=128/this.sampleRate,t++;const n=Math.floor(this.sampleRate/128);e&&t%n===0&&(yield new Promise(i=>setTimeout(i,1)))}})}render(){return Xt(this,arguments,void 0,function*(e=!0){yield this.workletsAreReady(),yield this._renderClock(e);const t=yield this._context.startRendering();return new gt(t)})}close(){return Promise.resolve()}}const iv=new t2;let Ar=iv;function oi(){return Ar===iv&&qR&&n2(new Pc),Ar}function n2(s,e=!1){e&&Ar.dispose(),Do(s)?Ar=new Pc(s):bl(s)?Ar=new mf(s):Ar=s}function sv(){return Ar.resume()}if(ti&&!ti.TONE_SILENCE_LOGGING){const e=` * Tone.js v${i0} * `;console.log(`%c${e}`,"background: #000; color: #fff")}function rv(s){return Math.pow(10,s/20)}function Mu(s){return 20*(Math.log(s)/Math.LN10)}function _f(s){return Math.pow(2,s/12)}let Eu=440;function i2(){return Eu}function s2(s){Eu=s}function Cr(s){return Math.round(ov(s))}function ov(s){return 69+12*Math.log2(s/Eu)}function av(s){return Eu*Math.pow(2,(s-69)/12)}class gf extends Ls{constructor(e,t,n){super(),this.defaultUnits="s",this._val=t,this._units=n,this.context=e,this._expressions=this._getExpressions()}_getExpressions(){return{hz:{method:e=>this._frequencyToUnits(parseFloat(e)),regexp:/^(\d+(?:\.\d+)?)hz$/i},i:{method:e=>this._ticksToUnits(parseInt(e,10)),regexp:/^(\d+)i$/i},m:{method:e=>this._beatsToUnits(parseInt(e,10)*this._getTimeSignature()),regexp:/^(\d+)m$/i},n:{method:(e,t)=>{const n=parseInt(e,10),i=t==="."?1.5:1;return n===1?this._beatsToUnits(this._getTimeSignature())*i:this._beatsToUnits(4/n)*i},regexp:/^(\d+)n(\.?)$/i},number:{method:e=>this._expressions[this.defaultUnits].method.call(this,e),regexp:/^(\d+(?:\.\d+)?)$/},s:{method:e=>this._secondsToUnits(parseFloat(e)),regexp:/^(\d+(?:\.\d+)?)s$/},samples:{method:e=>parseInt(e,10)/this.context.sampleRate,regexp:/^(\d+)samples$/},t:{method:e=>{const t=parseInt(e,10);return this._beatsToUnits(8/(Math.floor(t)*3))},regexp:/^(\d+)t$/i},tr:{method:(e,t,n)=>{let i=0;return e&&e!=="0"&&(i+=this._beatsToUnits(this._getTimeSignature()*parseFloat(e))),t&&t!=="0"&&(i+=this._beatsToUnits(parseFloat(t))),n&&n!=="0"&&(i+=this._beatsToUnits(parseFloat(n)/4)),i},regexp:/^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?$/}}}valueOf(){if(this._val instanceof gf&&this.fromType(this._val),Ti(this._val))return this._noArg();if(Cs(this._val)&&Ti(this._units)){for(const e in this._expressions)if(this._expressions[e].regexp.test(this._val.trim())){this._units=e;break}}else if(kr(this._val)){let e=0;for(const t in this._val)if(it(this._val[t])){const n=this._val[t],i=new this.constructor(this.context,t).valueOf()*n;e+=i}return e}if(it(this._units)){const e=this._expressions[this._units],t=this._val.toString().trim().match(e.regexp);return t?e.method.apply(this,t.slice(1)):e.method.call(this,this._val)}else return Cs(this._val)?parseFloat(this._val):this._val}_frequencyToUnits(e){return 1/e}_beatsToUnits(e){return 60/this._getBpm()*e}_secondsToUnits(e){return e}_ticksToUnits(e){return e*this._beatsToUnits(1)/this._getPPQ()}_noArg(){return this._now()}_getBpm(){return this.context.transport.bpm.value}_getTimeSignature(){return this.context.transport.timeSignature}_getPPQ(){return this.context.transport.PPQ}fromType(e){switch(this._units=void 0,this.defaultUnits){case"s":this._val=e.toSeconds();break;case"i":this._val=e.toTicks();break;case"hz":this._val=e.toFrequency();break;case"midi":this._val=e.toMidi();break}return this}toFrequency(){return 1/this.toSeconds()}toSamples(){return this.toSeconds()*this.context.sampleRate}toMilliseconds(){return this.toSeconds()*1e3}}class ki extends gf{constructor(){super(...arguments),this.name="TimeClass"}_getExpressions(){return Object.assign(super._getExpressions(),{now:{method:e=>this._now()+new this.constructor(this.context,e).valueOf(),regexp:/^\+(.+)/},quantize:{method:e=>{const t=new ki(this.context,e).valueOf();return this._secondsToUnits(this.context.transport.nextSubdivision(t))},regexp:/^@(.+)/}})}quantize(e,t=1){const n=new this.constructor(this.context,e).valueOf(),i=this.valueOf(),o=Math.round(i/n)*n-i;return i+o*t}toNotation(){const e=this.toSeconds(),t=["1m"];for(let r=1;r<9;r++){const a=Math.pow(2,r);t.push(a+"n."),t.push(a+"n"),t.push(a+"t")}t.push("0");let n=t[0],i=new ki(this.context,t[0]).toSeconds();return t.forEach(r=>{const a=new ki(this.context,r).toSeconds();Math.abs(a-e)<Math.abs(i-e)&&(n=r,i=a)}),n}toBarsBeatsSixteenths(){const e=this._beatsToUnits(1);let t=this.valueOf()/e;t=parseFloat(t.toFixed(4));const n=Math.floor(t/this._getTimeSignature());let i=t%1*4;t=Math.floor(t)%this._getTimeSignature();const r=i.toString();return r.length>3&&(i=parseFloat(parseFloat(r).toFixed(3))),[n,t,i].join(":")}toTicks(){const e=this._beatsToUnits(1);return this.valueOf()/e*this._getPPQ()}toSeconds(){return this.valueOf()}toMidi(){return Cr(this.toFrequency())}_now(){return this.context.now()}}class ai extends ki{constructor(){super(...arguments),this.name="Frequency",this.defaultUnits="hz"}static get A4(){return i2()}static set A4(e){s2(e)}_getExpressions(){return Object.assign({},super._getExpressions(),{midi:{regexp:/^(\d+(?:\.\d+)?midi)/,method(e){return this.defaultUnits==="midi"?e:ai.mtof(e)}},note:{regexp:/^([a-g]{1}(?:b|#|##|x|bb|###|#x|x#|bbb)?)(-?[0-9]+)/i,method(e,t){const i=r2[e.toLowerCase()]+(parseInt(t,10)+1)*12;return this.defaultUnits==="midi"?i:ai.mtof(i)}},tr:{regexp:/^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?/,method(e,t,n){let i=1;return e&&e!=="0"&&(i*=this._beatsToUnits(this._getTimeSignature()*parseFloat(e))),t&&t!=="0"&&(i*=this._beatsToUnits(parseFloat(t))),n&&n!=="0"&&(i*=this._beatsToUnits(parseFloat(n)/4)),i}}})}transpose(e){return new ai(this.context,this.valueOf()*_f(e))}harmonize(e){return e.map(t=>this.transpose(t))}toMidi(){return Cr(this.valueOf())}toNote(){const e=this.toFrequency(),t=Math.log2(e/ai.A4);let n=Math.round(12*t)+57;const i=Math.floor(n/12);return i<0&&(n+=-12*i),o2[n%12]+i.toString()}toSeconds(){return 1/super.toSeconds()}toTicks(){const e=this._beatsToUnits(1),t=this.valueOf()/e;return Math.floor(t*this._getPPQ())}_noArg(){return 0}_frequencyToUnits(e){return e}_ticksToUnits(e){return 1/(e*60/(this._getBpm()*this._getPPQ()))}_beatsToUnits(e){return 1/super._beatsToUnits(e)}_secondsToUnits(e){return 1/e}static mtof(e){return av(e)}static ftom(e){return Cr(e)}}const r2={cbbb:-3,cbb:-2,cb:-1,c:0,"c#":1,cx:2,"c##":2,"c###":3,"cx#":3,"c#x":3,dbbb:-1,dbb:0,db:1,d:2,"d#":3,dx:4,"d##":4,"d###":5,"dx#":5,"d#x":5,ebbb:1,ebb:2,eb:3,e:4,"e#":5,ex:6,"e##":6,"e###":7,"ex#":7,"e#x":7,fbbb:2,fbb:3,fb:4,f:5,"f#":6,fx:7,"f##":7,"f###":8,"fx#":8,"f#x":8,gbbb:4,gbb:5,gb:6,g:7,"g#":8,gx:9,"g##":9,"g###":10,"gx#":10,"g#x":10,abbb:6,abb:7,ab:8,a:9,"a#":10,ax:11,"a##":11,"a###":12,"ax#":12,"a#x":12,bbbb:8,bbb:9,bb:10,b:11,"b#":12,bx:13,"b##":13,"b###":14,"bx#":14,"b#x":14},o2=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];class Ha extends ki{constructor(){super(...arguments),this.name="TransportTime"}_now(){return this.context.transport.seconds}}class Hn extends Ls{constructor(){super();const e=Ie(Hn.getDefaults(),arguments,["context"]);this.defaultContext?this.context=this.defaultContext:this.context=e.context}static getDefaults(){return{context:oi()}}now(){return this.context.currentTime+this.context.lookAhead}immediate(){return this.context.currentTime}get sampleTime(){return 1/this.context.sampleRate}get blockTime(){return 128/this.context.sampleRate}toSeconds(e){return VR(e),new ki(this.context,e).toSeconds()}toFrequency(e){return new ai(this.context,e).toFrequency()}toTicks(e){return new Ha(this.context,e).toTicks()}_getPartialProperties(e){const t=this.get();return Object.keys(t).forEach(n=>{Ti(e[n])&&delete t[n]}),t}get(){const e=KR(this);return Object.keys(e).forEach(t=>{if(Reflect.has(this,t)){const n=this[t];it(n)&&it(n.value)&&it(n.setValueAtTime)?e[t]=n.value:n instanceof Hn?e[t]=n._getPartialProperties(e[t]):hi(n)||tr(n)||Cs(n)||BR(n)?e[t]=n:delete e[t]}}),e}set(e){return Object.keys(e).forEach(t=>{Reflect.has(this,t)&&it(this[t])&&(this[t]&&it(this[t].value)&&it(this[t].setValueAtTime)?this[t].value!==e[t]&&(this[t].value=e[t]):this[t]instanceof Hn?this[t].set(e[t]):this[t]=e[t])}),this}}class vf extends Mi{constructor(e="stopped"){super(),this.name="StateTimeline",this._initial=e,this.setStateAtTime(this._initial,0)}getValueAtTime(e){const t=this.get(e);return t!==null?t.state:this._initial}setStateAtTime(e,t,n){return ri(t,0),this.add(Object.assign({},n,{state:e,time:t})),this}getLastState(e,t){const n=this._search(t);for(let i=n;i>=0;i--){const r=this._timeline[i];if(r.state===e)return r}}getNextState(e,t){const n=this._search(t);if(n!==-1)for(let i=n;i<this._timeline.length;i++){const r=this._timeline[i];if(r.state===e)return r}}}class Tt extends Hn{constructor(){const e=Ie(Tt.getDefaults(),arguments,["param","units","convert"]);for(super(e),this.name="Param",this.overridden=!1,this._minOutput=1e-7,He(it(e.param)&&($r(e.param)||e.param instanceof Tt),"param must be an AudioParam");!$r(e.param);)e.param=e.param._param;this._swappable=it(e.swappable)?e.swappable:!1,this._swappable?(this.input=this.context.createGain(),this._param=e.param,this.input.connect(this._param)):this._param=this.input=e.param,this._events=new Mi(1e3),this._initialValue=this._param.defaultValue,this.units=e.units,this.convert=e.convert,this._minValue=e.minValue,this._maxValue=e.maxValue,it(e.value)&&e.value!==this._toType(this._initialValue)&&this.setValueAtTime(e.value,0)}static getDefaults(){return Object.assign(Hn.getDefaults(),{convert:!0,units:"number"})}get value(){const e=this.now();return this.getValueAtTime(e)}set value(e){this.cancelScheduledValues(this.now()),this.setValueAtTime(e,this.now())}get minValue(){return it(this._minValue)?this._minValue:this.units==="time"||this.units==="frequency"||this.units==="normalRange"||this.units==="positive"||this.units==="transportTime"||this.units==="ticks"||this.units==="bpm"||this.units==="hertz"||this.units==="samples"?0:this.units==="audioRange"?-1:this.units==="decibels"?-1/0:this._param.minValue}get maxValue(){return it(this._maxValue)?this._maxValue:this.units==="normalRange"||this.units==="audioRange"?1:this._param.maxValue}_is(e,t){return this.units===t}_assertRange(e){return it(this.maxValue)&&it(this.minValue)&&ri(e,this._fromType(this.minValue),this._fromType(this.maxValue)),e}_fromType(e){return this.convert&&!this.overridden?this._is(e,"time")?this.toSeconds(e):this._is(e,"decibels")?rv(e):this._is(e,"frequency")?this.toFrequency(e):e:this.overridden?0:e}_toType(e){return this.convert&&this.units==="decibels"?Mu(e):e}setValueAtTime(e,t){const n=this.toSeconds(t),i=this._fromType(e);return He(isFinite(i)&&isFinite(n),`Invalid argument(s) to setValueAtTime: ${JSON.stringify(e)}, ${JSON.stringify(t)}`),this._assertRange(i),this.log(this.units,"setValueAtTime",e,n),this._events.add({time:n,type:"setValueAtTime",value:i}),this._param.setValueAtTime(i,n),this}getValueAtTime(e){const t=Math.max(this.toSeconds(e),0),n=this._events.getAfter(t),i=this._events.get(t);let r=this._initialValue;if(i===null)r=this._initialValue;else if(i.type==="setTargetAtTime"&&(n===null||n.type==="setValueAtTime")){const a=this._events.getBefore(i.time);let o;a===null?o=this._initialValue:o=a.value,i.type==="setTargetAtTime"&&(r=this._exponentialApproach(i.time,o,i.value,i.constant,t))}else if(n===null)r=i.value;else if(n.type==="linearRampToValueAtTime"||n.type==="exponentialRampToValueAtTime"){let a=i.value;if(i.type==="setTargetAtTime"){const o=this._events.getBefore(i.time);o===null?a=this._initialValue:a=o.value}n.type==="linearRampToValueAtTime"?r=this._linearInterpolate(i.time,a,n.time,n.value,t):r=this._exponentialInterpolate(i.time,a,n.time,n.value,t)}else r=i.value;return this._toType(r)}setRampPoint(e){e=this.toSeconds(e);let t=this.getValueAtTime(e);return this.cancelAndHoldAtTime(e),this._fromType(t)===0&&(t=this._toType(this._minOutput)),this.setValueAtTime(t,e),this}linearRampToValueAtTime(e,t){const n=this._fromType(e),i=this.toSeconds(t);return He(isFinite(n)&&isFinite(i),`Invalid argument(s) to linearRampToValueAtTime: ${JSON.stringify(e)}, ${JSON.stringify(t)}`),this._assertRange(n),this._events.add({time:i,type:"linearRampToValueAtTime",value:n}),this.log(this.units,"linearRampToValueAtTime",e,i),this._param.linearRampToValueAtTime(n,i),this}exponentialRampToValueAtTime(e,t){let n=this._fromType(e);n=Fi(n,0)?this._minOutput:n,this._assertRange(n);const i=this.toSeconds(t);return He(isFinite(n)&&isFinite(i),`Invalid argument(s) to exponentialRampToValueAtTime: ${JSON.stringify(e)}, ${JSON.stringify(t)}`),this._events.add({time:i,type:"exponentialRampToValueAtTime",value:n}),this.log(this.units,"exponentialRampToValueAtTime",e,i),this._param.exponentialRampToValueAtTime(n,i),this}exponentialRampTo(e,t,n){return n=this.toSeconds(n),this.setRampPoint(n),this.exponentialRampToValueAtTime(e,n+this.toSeconds(t)),this}linearRampTo(e,t,n){return n=this.toSeconds(n),this.setRampPoint(n),this.linearRampToValueAtTime(e,n+this.toSeconds(t)),this}targetRampTo(e,t,n){return n=this.toSeconds(n),this.setRampPoint(n),this.exponentialApproachValueAtTime(e,n,t),this}exponentialApproachValueAtTime(e,t,n){t=this.toSeconds(t),n=this.toSeconds(n);const i=Math.log(n+1)/Math.log(200);return this.setTargetAtTime(e,t,i),this.cancelAndHoldAtTime(t+n*.9),this.linearRampToValueAtTime(e,t+n),this}setTargetAtTime(e,t,n){const i=this._fromType(e);He(isFinite(n)&&n>0,"timeConstant must be a number greater than 0");const r=this.toSeconds(t);return this._assertRange(i),He(isFinite(i)&&isFinite(r),`Invalid argument(s) to setTargetAtTime: ${JSON.stringify(e)}, ${JSON.stringify(t)}`),this._events.add({constant:n,time:r,type:"setTargetAtTime",value:i}),this.log(this.units,"setTargetAtTime",e,r,n),this._param.setTargetAtTime(i,r,n),this}setValueCurveAtTime(e,t,n,i=1){n=this.toSeconds(n),t=this.toSeconds(t);const r=this._fromType(e[0])*i;this.setValueAtTime(this._toType(r),t);const a=n/(e.length-1);for(let o=1;o<e.length;o++){const c=this._fromType(e[o])*i;this.linearRampToValueAtTime(this._toType(c),t+o*a)}return this}cancelScheduledValues(e){const t=this.toSeconds(e);return He(isFinite(t),`Invalid argument to cancelScheduledValues: ${JSON.stringify(e)}`),this._events.cancel(t),this._param.cancelScheduledValues(t),this.log(this.units,"cancelScheduledValues",t),this}cancelAndHoldAtTime(e){const t=this.toSeconds(e),n=this._fromType(this.getValueAtTime(t));He(isFinite(t),`Invalid argument to cancelAndHoldAtTime: ${JSON.stringify(e)}`),this.log(this.units,"cancelAndHoldAtTime",t,"value="+n);const i=this._events.get(t),r=this._events.getAfter(t);return i&&Fi(i.time,t)?r?(this._param.cancelScheduledValues(r.time),this._events.cancel(r.time)):(this._param.cancelAndHoldAtTime(t),this._events.cancel(t+this.sampleTime)):r&&(this._param.cancelScheduledValues(r.time),this._events.cancel(r.time),r.type==="linearRampToValueAtTime"?this.linearRampToValueAtTime(this._toType(n),t):r.type==="exponentialRampToValueAtTime"&&this.exponentialRampToValueAtTime(this._toType(n),t)),this._events.add({time:t,type:"setValueAtTime",value:n}),this._param.setValueAtTime(n,t),this}rampTo(e,t=.1,n){return this.units==="frequency"||this.units==="bpm"||this.units==="decibels"?this.exponentialRampTo(e,t,n):this.linearRampTo(e,t,n),this}apply(e){const t=this.context.currentTime;e.setValueAtTime(this.getValueAtTime(t),t);const n=this._events.get(t);if(n&&n.type==="setTargetAtTime"){const i=this._events.getAfter(n.time),r=i?i.time:t+2,a=(r-t)/10;for(let o=t;o<r;o+=a)e.linearRampToValueAtTime(this.getValueAtTime(o),o)}return this._events.forEachAfter(this.context.currentTime,i=>{i.type==="cancelScheduledValues"?e.cancelScheduledValues(i.time):i.type==="setTargetAtTime"?e.setTargetAtTime(i.value,i.time,i.constant):e[i.type](i.value,i.time)}),this}setParam(e){He(this._swappable,"The Param must be assigned as 'swappable' in the constructor");const t=this.input;return t.disconnect(this._param),this.apply(e),this._param=e,t.connect(this._param),this}dispose(){return super.dispose(),this._events.dispose(),this}get defaultValue(){return this._toType(this._param.defaultValue)}_exponentialApproach(e,t,n,i,r){return n+(t-n)*Math.exp(-(r-e)/i)}_linearInterpolate(e,t,n,i,r){return t+(i-t)*((r-e)/(n-e))}_exponentialInterpolate(e,t,n,i,r){return t*Math.pow(i/t,(r-e)/(n-e))}}class Fe extends Hn{constructor(){super(...arguments),this._internalChannels=[]}get numberOfInputs(){return it(this.input)?$r(this.input)||this.input instanceof Tt?1:this.input.numberOfInputs:0}get numberOfOutputs(){return it(this.output)?this.output.numberOfOutputs:0}_isAudioNode(e){return it(e)&&(e instanceof Fe||Zs(e))}_getInternalNodes(){const e=this._internalChannels.slice(0);return this._isAudioNode(this.input)&&e.push(this.input),this._isAudioNode(this.output)&&this.input!==this.output&&e.push(this.output),e}_setChannelProperties(e){this._getInternalNodes().forEach(n=>{n.channelCount=e.channelCount,n.channelCountMode=e.channelCountMode,n.channelInterpretation=e.channelInterpretation})}_getChannelProperties(){const e=this._getInternalNodes();He(e.length>0,"ToneAudioNode does not have any internal nodes");const t=e[0];return{channelCount:t.channelCount,channelCountMode:t.channelCountMode,channelInterpretation:t.channelInterpretation}}get channelCount(){return this._getChannelProperties().channelCount}set channelCount(e){const t=this._getChannelProperties();this._setChannelProperties(Object.assign(t,{channelCount:e}))}get channelCountMode(){return this._getChannelProperties().channelCountMode}set channelCountMode(e){const t=this._getChannelProperties();this._setChannelProperties(Object.assign(t,{channelCountMode:e}))}get channelInterpretation(){return this._getChannelProperties().channelInterpretation}set channelInterpretation(e){const t=this._getChannelProperties();this._setChannelProperties(Object.assign(t,{channelInterpretation:e}))}connect(e,t=0,n=0){return rs(this,e,t,n),this}toDestination(){return this.connect(this.context.destination),this}toMaster(){return Cc("toMaster() has been renamed toDestination()"),this.toDestination()}disconnect(e,t=0,n=0){return a2(this,e,t,n),this}chain(...e){return ra(this,...e),this}fan(...e){return e.forEach(t=>this.connect(t)),this}dispose(){return super.dispose(),it(this.input)&&(this.input instanceof Fe?this.input.dispose():Zs(this.input)&&this.input.disconnect()),it(this.output)&&(this.output instanceof Fe?this.output.dispose():Zs(this.output)&&this.output.disconnect()),this._internalChannels=[],this}}function ra(...s){const e=s.shift();s.reduce((t,n)=>(t instanceof Fe?t.connect(n):Zs(t)&&rs(t,n),n),e)}function rs(s,e,t=0,n=0){for(He(it(s),"Cannot connect from undefined node"),He(it(e),"Cannot connect to undefined node"),(e instanceof Fe||Zs(e))&&He(e.numberOfInputs>0,"Cannot connect to node with no inputs"),He(s.numberOfOutputs>0,"Cannot connect from node with no outputs");e instanceof Fe||e instanceof Tt;)it(e.input)&&(e=e.input);for(;s instanceof Fe;)it(s.output)&&(s=s.output);$r(e)?s.connect(e,t):s.connect(e,t,n)}function a2(s,e,t=0,n=0){if(it(e))for(;e instanceof Fe;)e=e.input;for(;!Zs(s);)it(s.output)&&(s=s.output);$r(e)?s.disconnect(e,t):Zs(e)?s.disconnect(e,t,n):s.disconnect()}class xt extends Fe{constructor(){const e=Ie(xt.getDefaults(),arguments,["gain","units"]);super(e),this.name="Gain",this._gainNode=this.context.createGain(),this.input=this._gainNode,this.output=this._gainNode,this.gain=new Tt({context:this.context,convert:e.convert,param:this._gainNode.gain,units:e.units,value:e.gain,minValue:e.minValue,maxValue:e.maxValue}),mt(this,"gain")}static getDefaults(){return Object.assign(Fe.getDefaults(),{convert:!0,gain:1,units:"gain"})}dispose(){return super.dispose(),this._gainNode.disconnect(),this.gain.dispose(),this}}class oa extends Fe{constructor(e){super(e),this.onended=ut,this._startTime=-1,this._stopTime=-1,this._timeout=-1,this.output=new xt({context:this.context,gain:0}),this._gainNode=this.output,this.getStateAtTime=function(t){const n=this.toSeconds(t);return this._startTime!==-1&&n>=this._startTime&&(this._stopTime===-1||n<=this._stopTime)?"started":"stopped"},this._fadeIn=e.fadeIn,this._fadeOut=e.fadeOut,this._curve=e.curve,this.onended=e.onended}static getDefaults(){return Object.assign(Fe.getDefaults(),{curve:"linear",fadeIn:0,fadeOut:0,onended:ut})}_startGain(e,t=1){He(this._startTime===-1,"Source cannot be started more than once");const n=this.toSeconds(this._fadeIn);return this._startTime=e+n,this._startTime=Math.max(this._startTime,this.context.currentTime),n>0?(this._gainNode.gain.setValueAtTime(0,e),this._curve==="linear"?this._gainNode.gain.linearRampToValueAtTime(t,e+n):this._gainNode.gain.exponentialApproachValueAtTime(t,e,n)):this._gainNode.gain.setValueAtTime(t,e),this}stop(e){return this.log("stop",e),this._stopGain(this.toSeconds(e)),this}_stopGain(e){He(this._startTime!==-1,"'start' must be called before 'stop'"),this.cancelStop();const t=this.toSeconds(this._fadeOut);return this._stopTime=this.toSeconds(e)+t,this._stopTime=Math.max(this._stopTime,this.now()),t>0?this._curve==="linear"?this._gainNode.gain.linearRampTo(0,t,e):this._gainNode.gain.targetRampTo(0,t,e):(this._gainNode.gain.cancelAndHoldAtTime(e),this._gainNode.gain.setValueAtTime(0,e)),this.context.clearTimeout(this._timeout),this._timeout=this.context.setTimeout(()=>{const n=this._curve==="exponential"?t*2:0;this._stopSource(this.now()+n),this._onended()},this._stopTime-this.context.currentTime),this}_onended(){if(this.onended!==ut&&(this.onended(this),this.onended=ut,!this.context.isOffline)){const e=()=>this.dispose();typeof window.requestIdleCallback<"u"?window.requestIdleCallback(e):setTimeout(e,1e3)}}get state(){return this.getStateAtTime(this.now())}cancelStop(){return this.log("cancelStop"),He(this._startTime!==-1,"Source is not started"),this._gainNode.gain.cancelScheduledValues(this._startTime+this.sampleTime),this.context.clearTimeout(this._timeout),this._stopTime=-1,this}dispose(){return super.dispose(),this._gainNode.dispose(),this.onended=ut,this}}class xf extends oa{constructor(){const e=Ie(xf.getDefaults(),arguments,["offset"]);super(e),this.name="ToneConstantSource",this._source=this.context.createConstantSource(),rs(this._source,this._gainNode),this.offset=new Tt({context:this.context,convert:e.convert,param:this._source.offset,units:e.units,value:e.offset,minValue:e.minValue,maxValue:e.maxValue})}static getDefaults(){return Object.assign(oa.getDefaults(),{convert:!0,offset:1,units:"number"})}start(e){const t=this.toSeconds(e);return this.log("start",t),this._startGain(t),this._source.start(t),this}_stopSource(e){this._source.stop(e)}dispose(){return super.dispose(),this.state==="started"&&this.stop(),this._source.disconnect(),this.offset.dispose(),this}}class Nt extends Fe{constructor(){const e=Ie(Nt.getDefaults(),arguments,["value","units"]);super(e),this.name="Signal",this.override=!0,this.output=this._constantSource=new xf({context:this.context,convert:e.convert,offset:e.value,units:e.units,minValue:e.minValue,maxValue:e.maxValue}),this._constantSource.start(0),this.input=this._param=this._constantSource.offset}static getDefaults(){return Object.assign(Fe.getDefaults(),{convert:!0,units:"number",value:0})}connect(e,t=0,n=0){return yf(this,e,t,n),this}dispose(){return super.dispose(),this._param.dispose(),this._constantSource.dispose(),this}setValueAtTime(e,t){return this._param.setValueAtTime(e,t),this}getValueAtTime(e){return this._param.getValueAtTime(e)}setRampPoint(e){return this._param.setRampPoint(e),this}linearRampToValueAtTime(e,t){return this._param.linearRampToValueAtTime(e,t),this}exponentialRampToValueAtTime(e,t){return this._param.exponentialRampToValueAtTime(e,t),this}exponentialRampTo(e,t,n){return this._param.exponentialRampTo(e,t,n),this}linearRampTo(e,t,n){return this._param.linearRampTo(e,t,n),this}targetRampTo(e,t,n){return this._param.targetRampTo(e,t,n),this}exponentialApproachValueAtTime(e,t,n){return this._param.exponentialApproachValueAtTime(e,t,n),this}setTargetAtTime(e,t,n){return this._param.setTargetAtTime(e,t,n),this}setValueCurveAtTime(e,t,n,i){return this._param.setValueCurveAtTime(e,t,n,i),this}cancelScheduledValues(e){return this._param.cancelScheduledValues(e),this}cancelAndHoldAtTime(e){return this._param.cancelAndHoldAtTime(e),this}rampTo(e,t,n){return this._param.rampTo(e,t,n),this}get value(){return this._param.value}set value(e){this._param.value=e}get convert(){return this._param.convert}set convert(e){this._param.convert=e}get units(){return this._param.units}get overridden(){return this._param.overridden}set overridden(e){this._param.overridden=e}get maxValue(){return this._param.maxValue}get minValue(){return this._param.minValue}apply(e){return this._param.apply(e),this}}function yf(s,e,t,n){(e instanceof Tt||$r(e)||e instanceof Nt&&e.override)&&(e.cancelScheduledValues(0),e.setValueAtTime(0,0),e instanceof Nt&&(e.overridden=!0)),rs(s,e,t,n)}class Sf extends Tt{constructor(){const e=Ie(Sf.getDefaults(),arguments,["value"]);super(e),this.name="TickParam",this._events=new Mi(1/0),this._multiplier=1,this._multiplier=e.multiplier,this._events.cancel(0),this._events.add({ticks:0,time:0,type:"setValueAtTime",value:this._fromType(e.value)}),this.setValueAtTime(e.value,0)}static getDefaults(){return Object.assign(Tt.getDefaults(),{multiplier:1,units:"hertz",value:1})}setTargetAtTime(e,t,n){t=this.toSeconds(t),this.setRampPoint(t);const i=this._fromType(e),r=this._events.get(t),a=Math.round(Math.max(1/n,1));for(let o=0;o<=a;o++){const c=n*o+t,l=this._exponentialApproach(r.time,r.value,i,n,c);this.linearRampToValueAtTime(this._toType(l),c)}return this}setValueAtTime(e,t){const n=this.toSeconds(t);super.setValueAtTime(e,t);const i=this._events.get(n),r=this._events.previousEvent(i),a=this._getTicksUntilEvent(r,n);return i.ticks=Math.max(a,0),this}linearRampToValueAtTime(e,t){const n=this.toSeconds(t);super.linearRampToValueAtTime(e,t);const i=this._events.get(n),r=this._events.previousEvent(i),a=this._getTicksUntilEvent(r,n);return i.ticks=Math.max(a,0),this}exponentialRampToValueAtTime(e,t){t=this.toSeconds(t);const n=this._fromType(e),i=this._events.get(t),r=Math.round(Math.max((t-i.time)*10,1)),a=(t-i.time)/r;for(let o=0;o<=r;o++){const c=a*o+i.time,l=this._exponentialInterpolate(i.time,i.value,t,n,c);this.linearRampToValueAtTime(this._toType(l),c)}return this}_getTicksUntilEvent(e,t){if(e===null)e={ticks:0,time:0,type:"setValueAtTime",value:0};else if(Ti(e.ticks)){const a=this._events.previousEvent(e);e.ticks=this._getTicksUntilEvent(a,e.time)}const n=this._fromType(this.getValueAtTime(e.time));let i=this._fromType(this.getValueAtTime(t));const r=this._events.get(t);return r&&r.time===t&&r.type==="setValueAtTime"&&(i=this._fromType(this.getValueAtTime(t-this.sampleTime))),.5*(t-e.time)*(n+i)+e.ticks}getTicksAtTime(e){const t=this.toSeconds(e),n=this._events.get(t);return Math.max(this._getTicksUntilEvent(n,t),0)}getDurationOfTicks(e,t){const n=this.toSeconds(t),i=this.getTicksAtTime(t);return this.getTimeOfTick(i+e)-n}getTimeOfTick(e){const t=this._events.get(e,"ticks"),n=this._events.getAfter(e,"ticks");if(t&&t.ticks===e)return t.time;if(t&&n&&n.type==="linearRampToValueAtTime"&&t.value!==n.value){const i=this._fromType(this.getValueAtTime(t.time)),a=(this._fromType(this.getValueAtTime(n.time))-i)/(n.time-t.time),o=Math.sqrt(Math.pow(i,2)-2*a*(t.ticks-e)),c=(-i+o)/a,l=(-i-o)/a;return(c>0?c:l)+t.time}else return t?t.value===0?1/0:t.time+(e-t.ticks)/t.value:e/this._initialValue}ticksToTime(e,t){return this.getDurationOfTicks(e,t)}timeToTicks(e,t){const n=this.toSeconds(t),i=this.toSeconds(e),r=this.getTicksAtTime(n);return this.getTicksAtTime(n+i)-r}_fromType(e){return this.units==="bpm"&&this.multiplier?1/(60/e/this.multiplier):super._fromType(e)}_toType(e){return this.units==="bpm"&&this.multiplier?e/this.multiplier*60:super._toType(e)}get multiplier(){return this._multiplier}set multiplier(e){const t=this.value;this._multiplier=e,this.cancelScheduledValues(0),this.setValueAtTime(t,0)}}class Tf extends Nt{constructor(){const e=Ie(Tf.getDefaults(),arguments,["value"]);super(e),this.name="TickSignal",this.input=this._param=new Sf({context:this.context,convert:e.convert,multiplier:e.multiplier,param:this._constantSource.offset,units:e.units,value:e.value})}static getDefaults(){return Object.assign(Nt.getDefaults(),{multiplier:1,units:"hertz",value:1})}ticksToTime(e,t){return this._param.ticksToTime(e,t)}timeToTicks(e,t){return this._param.timeToTicks(e,t)}getTimeOfTick(e){return this._param.getTimeOfTick(e)}getDurationOfTicks(e,t){return this._param.getDurationOfTicks(e,t)}getTicksAtTime(e){return this._param.getTicksAtTime(e)}get multiplier(){return this._param.multiplier}set multiplier(e){this._param.multiplier=e}dispose(){return super.dispose(),this._param.dispose(),this}}class Mf extends Hn{constructor(){const e=Ie(Mf.getDefaults(),arguments,["frequency"]);super(e),this.name="TickSource",this._state=new vf,this._tickOffset=new Mi,this._ticksAtTime=new Mi,this._secondsAtTime=new Mi,this.frequency=new Tf({context:this.context,units:e.units,value:e.frequency}),mt(this,"frequency"),this._state.setStateAtTime("stopped",0),this.setTicksAtTime(0,0)}static getDefaults(){return Object.assign({frequency:1,units:"hertz"},Hn.getDefaults())}get state(){return this.getStateAtTime(this.now())}start(e,t){const n=this.toSeconds(e);return this._state.getValueAtTime(n)!=="started"&&(this._state.setStateAtTime("started",n),it(t)&&this.setTicksAtTime(t,n),this._ticksAtTime.cancel(n),this._secondsAtTime.cancel(n)),this}stop(e){const t=this.toSeconds(e);if(this._state.getValueAtTime(t)==="stopped"){const n=this._state.get(t);n&&n.time>0&&(this._tickOffset.cancel(n.time),this._state.cancel(n.time))}return this._state.cancel(t),this._state.setStateAtTime("stopped",t),this.setTicksAtTime(0,t),this._ticksAtTime.cancel(t),this._secondsAtTime.cancel(t),this}pause(e){const t=this.toSeconds(e);return this._state.getValueAtTime(t)==="started"&&(this._state.setStateAtTime("paused",t),this._ticksAtTime.cancel(t),this._secondsAtTime.cancel(t)),this}cancel(e){return e=this.toSeconds(e),this._state.cancel(e),this._tickOffset.cancel(e),this._ticksAtTime.cancel(e),this._secondsAtTime.cancel(e),this}getTicksAtTime(e){const t=this.toSeconds(e),n=this._state.getLastState("stopped",t),i=this._ticksAtTime.get(t),r={state:"paused",time:t};this._state.add(r);let a=i||n,o=i?i.ticks:0,c=null;return this._state.forEachBetween(a.time,t+this.sampleTime,l=>{let u=a.time;const h=this._tickOffset.get(l.time);h&&h.time>=a.time&&(o=h.ticks,u=h.time),a.state==="started"&&l.state!=="started"&&(o+=this.frequency.getTicksAtTime(l.time)-this.frequency.getTicksAtTime(u),l.time!==r.time&&(c={state:l.state,time:l.time,ticks:o})),a=l}),this._state.remove(r),c&&this._ticksAtTime.add(c),o}get ticks(){return this.getTicksAtTime(this.now())}set ticks(e){this.setTicksAtTime(e,this.now())}get seconds(){return this.getSecondsAtTime(this.now())}set seconds(e){const t=this.now(),n=this.frequency.timeToTicks(e,t);this.setTicksAtTime(n,t)}getSecondsAtTime(e){e=this.toSeconds(e);const t=this._state.getLastState("stopped",e),n={state:"paused",time:e};this._state.add(n);const i=this._secondsAtTime.get(e);let r=i||t,a=i?i.seconds:0,o=null;return this._state.forEachBetween(r.time,e+this.sampleTime,c=>{let l=r.time;const u=this._tickOffset.get(c.time);u&&u.time>=r.time&&(a=u.seconds,l=u.time),r.state==="started"&&c.state!=="started"&&(a+=c.time-l,c.time!==n.time&&(o={state:c.state,time:c.time,seconds:a})),r=c}),this._state.remove(n),o&&this._secondsAtTime.add(o),a}setTicksAtTime(e,t){return t=this.toSeconds(t),this._tickOffset.cancel(t),this._tickOffset.add({seconds:this.frequency.getDurationOfTicks(e,t),ticks:e,time:t}),this._ticksAtTime.cancel(t),this._secondsAtTime.cancel(t),this}getStateAtTime(e){return e=this.toSeconds(e),this._state.getValueAtTime(e)}getTimeOfTick(e,t=this.now()){const n=this._tickOffset.get(t),i=this._state.get(t),r=Math.max(n.time,i.time),a=this.frequency.getTicksAtTime(r)+e-n.ticks;return this.frequency.getTimeOfTick(a)}forEachTickBetween(e,t,n){let i=this._state.get(e);this._state.forEachBetween(e,t,a=>{i&&i.state==="started"&&a.state!=="started"&&this.forEachTickBetween(Math.max(i.time,e),a.time-this.sampleTime,n),i=a});let r=null;if(i&&i.state==="started"){const a=Math.max(i.time,e),o=this.frequency.getTicksAtTime(a),c=this.frequency.getTicksAtTime(i.time),l=o-c;let u=Math.ceil(l)-l;u=Fi(u,1)?0:u;let h=this.frequency.getTimeOfTick(o+u);for(;h<t;){try{n(h,Math.round(this.getTicksAtTime(h)))}catch(d){r=d;break}h+=this.frequency.getDurationOfTicks(1,h)}}if(r)throw r;return this}dispose(){return super.dispose(),this._state.dispose(),this._tickOffset.dispose(),this._ticksAtTime.dispose(),this._secondsAtTime.dispose(),this.frequency.dispose(),this}}class Lc extends Hn{constructor(){const e=Ie(Lc.getDefaults(),arguments,["callback","frequency"]);super(e),this.name="Clock",this.callback=ut,this._lastUpdate=0,this._state=new vf("stopped"),this._boundLoop=this._loop.bind(this),this.callback=e.callback,this._tickSource=new Mf({context:this.context,frequency:e.frequency,units:e.units}),this._lastUpdate=0,this.frequency=this._tickSource.frequency,mt(this,"frequency"),this._state.setStateAtTime("stopped",0),this.context.on("tick",this._boundLoop)}static getDefaults(){return Object.assign(Hn.getDefaults(),{callback:ut,frequency:1,units:"hertz"})}get state(){return this._state.getValueAtTime(this.now())}start(e,t){Z0(this.context);const n=this.toSeconds(e);return this.log("start",n),this._state.getValueAtTime(n)!=="started"&&(this._state.setStateAtTime("started",n),this._tickSource.start(n,t),n<this._lastUpdate&&this.emit("start",n,t)),this}stop(e){const t=this.toSeconds(e);return this.log("stop",t),this._state.cancel(t),this._state.setStateAtTime("stopped",t),this._tickSource.stop(t),t<this._lastUpdate&&this.emit("stop",t),this}pause(e){const t=this.toSeconds(e);return this._state.getValueAtTime(t)==="started"&&(this._state.setStateAtTime("paused",t),this._tickSource.pause(t),t<this._lastUpdate&&this.emit("pause",t)),this}get ticks(){return Math.ceil(this.getTicksAtTime(this.now()))}set ticks(e){this._tickSource.ticks=e}get seconds(){return this._tickSource.seconds}set seconds(e){this._tickSource.seconds=e}getSecondsAtTime(e){return this._tickSource.getSecondsAtTime(e)}setTicksAtTime(e,t){return this._tickSource.setTicksAtTime(e,t),this}getTimeOfTick(e,t=this.now()){return this._tickSource.getTimeOfTick(e,t)}getTicksAtTime(e){return this._tickSource.getTicksAtTime(e)}nextTickTime(e,t){const n=this.toSeconds(t),i=this.getTicksAtTime(n);return this._tickSource.getTimeOfTick(i+e,n)}_loop(){const e=this._lastUpdate,t=this.now();this._lastUpdate=t,this.log("loop",e,t),e!==t&&(this._state.forEachBetween(e,t,n=>{switch(n.state){case"started":const i=this._tickSource.getTicksAtTime(n.time);this.emit("start",n.time,i);break;case"stopped":n.time!==0&&this.emit("stop",n.time);break;case"paused":this.emit("pause",n.time);break}}),this._tickSource.forEachTickBetween(e,t,(n,i)=>{this.callback(n,i)}))}getStateAtTime(e){const t=this.toSeconds(e);return this._state.getValueAtTime(t)}dispose(){return super.dispose(),this.context.off("tick",this._boundLoop),this._tickSource.dispose(),this._state.dispose(),this}}Rc.mixin(Lc);class ur extends Fe{constructor(){const e=Ie(ur.getDefaults(),arguments,["volume"]);super(e),this.name="Volume",this.input=this.output=new xt({context:this.context,gain:e.volume,units:"decibels"}),this.volume=this.output.gain,mt(this,"volume"),this._unmutedVolume=e.volume,this.mute=e.mute}static getDefaults(){return Object.assign(Fe.getDefaults(),{mute:!1,volume:0})}get mute(){return this.volume.value===-1/0}set mute(e){!this.mute&&e?(this._unmutedVolume=this.volume.value,this.volume.value=-1/0):this.mute&&!e&&(this.volume.value=this._unmutedVolume)}dispose(){return super.dispose(),this.input.dispose(),this.volume.dispose(),this}}class Ef extends Fe{constructor(){const e=Ie(Ef.getDefaults(),arguments);super(e),this.name="Destination",this.input=new ur({context:this.context}),this.output=new xt({context:this.context}),this.volume=this.input.volume,ra(this.input,this.output,this.context.rawContext.destination),this.mute=e.mute,this._internalChannels=[this.input,this.context.rawContext.destination,this.output]}static getDefaults(){return Object.assign(Fe.getDefaults(),{mute:!1,volume:0})}get mute(){return this.input.mute}set mute(e){this.input.mute=e}chain(...e){return this.input.disconnect(),e.unshift(this.input),e.push(this.output),ra(...e),this}get maxChannelCount(){return this.context.rawContext.destination.maxChannelCount}dispose(){return super.dispose(),this.volume.dispose(),this}}Su(s=>{s.destination=new Ef({context:s})});Tu(s=>{s.destination.dispose()});class c2 extends Fe{constructor(){super(...arguments),this.name="Listener",this.positionX=new Tt({context:this.context,param:this.context.rawContext.listener.positionX}),this.positionY=new Tt({context:this.context,param:this.context.rawContext.listener.positionY}),this.positionZ=new Tt({context:this.context,param:this.context.rawContext.listener.positionZ}),this.forwardX=new Tt({context:this.context,param:this.context.rawContext.listener.forwardX}),this.forwardY=new Tt({context:this.context,param:this.context.rawContext.listener.forwardY}),this.forwardZ=new Tt({context:this.context,param:this.context.rawContext.listener.forwardZ}),this.upX=new Tt({context:this.context,param:this.context.rawContext.listener.upX}),this.upY=new Tt({context:this.context,param:this.context.rawContext.listener.upY}),this.upZ=new Tt({context:this.context,param:this.context.rawContext.listener.upZ})}static getDefaults(){return Object.assign(Fe.getDefaults(),{positionX:0,positionY:0,positionZ:0,forwardX:0,forwardY:0,forwardZ:-1,upX:0,upY:1,upZ:0})}dispose(){return super.dispose(),this.positionX.dispose(),this.positionY.dispose(),this.positionZ.dispose(),this.forwardX.dispose(),this.forwardY.dispose(),this.forwardZ.dispose(),this.upX.dispose(),this.upY.dispose(),this.upZ.dispose(),this}}Su(s=>{s.listener=new c2({context:s})});Tu(s=>{s.listener.dispose()});class wf extends Ls{constructor(){super(),this.name="ToneAudioBuffers",this._buffers=new Map,this._loadingCount=0;const e=Ie(wf.getDefaults(),arguments,["urls","onload","baseUrl"],"urls");this.baseUrl=e.baseUrl,Object.keys(e.urls).forEach(t=>{this._loadingCount++;const n=e.urls[t];this.add(t,n,this._bufferLoaded.bind(this,e.onload),e.onerror)})}static getDefaults(){return{baseUrl:"",onerror:ut,onload:ut,urls:{}}}has(e){return this._buffers.has(e.toString())}get(e){return He(this.has(e),`ToneAudioBuffers has no buffer named: ${e}`),this._buffers.get(e.toString())}_bufferLoaded(e){this._loadingCount--,this._loadingCount===0&&e&&e()}get loaded(){return Array.from(this._buffers).every(([e,t])=>t.loaded)}add(e,t,n=ut,i=ut){return Cs(t)?(this.baseUrl&&t.trim().substring(0,11).toLowerCase()==="data:audio/"&&(this.baseUrl=""),this._buffers.set(e.toString(),new gt(this.baseUrl+t,n,i))):this._buffers.set(e.toString(),new gt(t,n,i)),this}dispose(){return super.dispose(),this._buffers.forEach(e=>e.dispose()),this._buffers.clear(),this}}class Jl extends ai{constructor(){super(...arguments),this.name="MidiClass",this.defaultUnits="midi"}_frequencyToUnits(e){return Cr(super._frequencyToUnits(e))}_ticksToUnits(e){return Cr(super._ticksToUnits(e))}_beatsToUnits(e){return Cr(super._beatsToUnits(e))}_secondsToUnits(e){return Cr(super._secondsToUnits(e))}toMidi(){return this.valueOf()}toFrequency(){return av(this.toMidi())}transpose(e){return new Jl(this.context,this.toMidi()+e)}}class No extends Ha{constructor(){super(...arguments),this.name="Ticks",this.defaultUnits="i"}_now(){return this.context.transport.ticks}_beatsToUnits(e){return this._getPPQ()*e}_secondsToUnits(e){return Math.floor(e/(60/this._getBpm())*this._getPPQ())}_ticksToUnits(e){return e}toTicks(){return this.valueOf()}toSeconds(){return this.valueOf()/this._getPPQ()*(60/this._getBpm())}}class l2 extends Hn{constructor(){super(...arguments),this.name="Draw",this.expiration=.25,this.anticipation=.008,this._events=new Mi,this._boundDrawLoop=this._drawLoop.bind(this),this._animationFrame=-1}schedule(e,t){return this._events.add({callback:e,time:this.toSeconds(t)}),this._events.length===1&&(this._animationFrame=requestAnimationFrame(this._boundDrawLoop)),this}cancel(e){return this._events.cancel(this.toSeconds(e)),this}_drawLoop(){const e=this.context.currentTime;for(;this._events.length&&this._events.peek().time-this.anticipation<=e;){const t=this._events.shift();t&&e-t.time<=this.expiration&&t.callback()}this._events.length>0&&(this._animationFrame=requestAnimationFrame(this._boundDrawLoop))}dispose(){return super.dispose(),this._events.dispose(),cancelAnimationFrame(this._animationFrame),this}}Su(s=>{s.draw=new l2({context:s})});Tu(s=>{s.draw.dispose()});class u2 extends Ls{constructor(){super(...arguments),this.name="IntervalTimeline",this._root=null,this._length=0}add(e){He(it(e.time),"Events must have a time property"),He(it(e.duration),"Events must have a duration parameter"),e.time=e.time.valueOf();let t=new h2(e.time,e.time+e.duration,e);for(this._root===null?this._root=t:this._root.insert(t),this._length++;t!==null;)t.updateHeight(),t.updateMax(),this._rebalance(t),t=t.parent;return this}remove(e){if(this._root!==null){const t=[];this._root.search(e.time,t);for(const n of t)if(n.event===e){this._removeNode(n),this._length--;break}}return this}get length(){return this._length}cancel(e){return this.forEachFrom(e,t=>this.remove(t)),this}_setRoot(e){this._root=e,this._root!==null&&(this._root.parent=null)}_replaceNodeInParent(e,t){e.parent!==null?(e.isLeftChild()?e.parent.left=t:e.parent.right=t,this._rebalance(e.parent)):this._setRoot(t)}_removeNode(e){if(e.left===null&&e.right===null)this._replaceNodeInParent(e,null);else if(e.right===null)this._replaceNodeInParent(e,e.left);else if(e.left===null)this._replaceNodeInParent(e,e.right);else{const t=e.getBalance();let n,i=null;if(t>0)if(e.left.right===null)n=e.left,n.right=e.right,i=n;else{for(n=e.left.right;n.right!==null;)n=n.right;n.parent&&(n.parent.right=n.left,i=n.parent,n.left=e.left,n.right=e.right)}else if(e.right.left===null)n=e.right,n.left=e.left,i=n;else{for(n=e.right.left;n.left!==null;)n=n.left;n.parent&&(n.parent.left=n.right,i=n.parent,n.left=e.left,n.right=e.right)}e.parent!==null?e.isLeftChild()?e.parent.left=n:e.parent.right=n:this._setRoot(n),i&&this._rebalance(i)}e.dispose()}_rotateLeft(e){const t=e.parent,n=e.isLeftChild(),i=e.right;i&&(e.right=i.left,i.left=e),t!==null?n?t.left=i:t.right=i:this._setRoot(i)}_rotateRight(e){const t=e.parent,n=e.isLeftChild(),i=e.left;i&&(e.left=i.right,i.right=e),t!==null?n?t.left=i:t.right=i:this._setRoot(i)}_rebalance(e){const t=e.getBalance();t>1&&e.left?e.left.getBalance()<0?this._rotateLeft(e.left):this._rotateRight(e):t<-1&&e.right&&(e.right.getBalance()>0?this._rotateRight(e.right):this._rotateLeft(e))}get(e){if(this._root!==null){const t=[];if(this._root.search(e,t),t.length>0){let n=t[0];for(let i=1;i<t.length;i++)t[i].low>n.low&&(n=t[i]);return n.event}}return null}forEach(e){if(this._root!==null){const t=[];this._root.traverse(n=>t.push(n)),t.forEach(n=>{n.event&&e(n.event)})}return this}forEachAtTime(e,t){if(this._root!==null){const n=[];this._root.search(e,n),n.forEach(i=>{i.event&&t(i.event)})}return this}forEachFrom(e,t){if(this._root!==null){const n=[];this._root.searchAfter(e,n),n.forEach(i=>{i.event&&t(i.event)})}return this}dispose(){return super.dispose(),this._root!==null&&this._root.traverse(e=>e.dispose()),this._root=null,this}}class h2{constructor(e,t,n){this._left=null,this._right=null,this.parent=null,this.height=0,this.event=n,this.low=e,this.high=t,this.max=this.high}insert(e){e.low<=this.low?this.left===null?this.left=e:this.left.insert(e):this.right===null?this.right=e:this.right.insert(e)}search(e,t){e>this.max||(this.left!==null&&this.left.search(e,t),this.low<=e&&this.high>e&&t.push(this),!(this.low>e)&&this.right!==null&&this.right.search(e,t))}searchAfter(e,t){this.low>=e&&(t.push(this),this.left!==null&&this.left.searchAfter(e,t)),this.right!==null&&this.right.searchAfter(e,t)}traverse(e){e(this),this.left!==null&&this.left.traverse(e),this.right!==null&&this.right.traverse(e)}updateHeight(){this.left!==null&&this.right!==null?this.height=Math.max(this.left.height,this.right.height)+1:this.right!==null?this.height=this.right.height+1:this.left!==null?this.height=this.left.height+1:this.height=0}updateMax(){this.max=this.high,this.left!==null&&(this.max=Math.max(this.max,this.left.max)),this.right!==null&&(this.max=Math.max(this.max,this.right.max))}getBalance(){let e=0;return this.left!==null&&this.right!==null?e=this.left.height-this.right.height:this.left!==null?e=this.left.height+1:this.right!==null&&(e=-(this.right.height+1)),e}isLeftChild(){return this.parent!==null&&this.parent.left===this}get left(){return this._left}set left(e){this._left=e,e!==null&&(e.parent=this),this.updateHeight(),this.updateMax()}get right(){return this._right}set right(e){this._right=e,e!==null&&(e.parent=this),this.updateHeight(),this.updateMax()}dispose(){this.parent=null,this._left=null,this._right=null,this.event=null}}class d2 extends Ls{constructor(e){super(),this.name="TimelineValue",this._timeline=new Mi({memory:10}),this._initialValue=e}set(e,t){return this._timeline.add({value:e,time:t}),this}get(e){const t=this._timeline.get(e);return t?t.value:this._initialValue}}class Zr extends Fe{constructor(){super(Ie(Zr.getDefaults(),arguments,["context"]))}connect(e,t=0,n=0){return yf(this,e,t,n),this}}class xa extends Zr{constructor(){const e=Ie(xa.getDefaults(),arguments,["mapping","length"]);super(e),this.name="WaveShaper",this._shaper=this.context.createWaveShaper(),this.input=this._shaper,this.output=this._shaper,hi(e.mapping)||e.mapping instanceof Float32Array?this.curve=Float32Array.from(e.mapping):zR(e.mapping)&&this.setMap(e.mapping,e.length)}static getDefaults(){return Object.assign(Nt.getDefaults(),{length:1024})}setMap(e,t=1024){const n=new Float32Array(t);for(let i=0,r=t;i<r;i++){const a=i/(r-1)*2-1;n[i]=e(a,i)}return this.curve=n,this}get curve(){return this._shaper.curve}set curve(e){this._shaper.curve=e}get oversample(){return this._shaper.oversample}set oversample(e){const t=["none","2x","4x"].some(n=>n.includes(e));He(t,"oversampling must be either 'none', '2x', or '4x'"),this._shaper.oversample=e}dispose(){return super.dispose(),this._shaper.disconnect(),this}}class bf extends Zr{constructor(){const e=Ie(bf.getDefaults(),arguments,["value"]);super(e),this.name="Pow",this._exponentScaler=this.input=this.output=new xa({context:this.context,mapping:this._expFunc(e.value),length:8192}),this._exponent=e.value}static getDefaults(){return Object.assign(Zr.getDefaults(),{value:1})}_expFunc(e){return t=>Math.pow(Math.abs(t),e)}get value(){return this._exponent}set value(e){this._exponent=e,this._exponentScaler.setMap(this._expFunc(this._exponent))}dispose(){return super.dispose(),this._exponentScaler.dispose(),this}}class nr{constructor(e,t){this.id=nr._eventId++,this._remainderTime=0;const n=Object.assign(nr.getDefaults(),t);this.transport=e,this.callback=n.callback,this._once=n.once,this.time=Math.floor(n.time),this._remainderTime=n.time-this.time}static getDefaults(){return{callback:ut,once:!1,time:0}}get floatTime(){return this.time+this._remainderTime}invoke(e){if(this.callback){const t=this.transport.bpm.getDurationOfTicks(1,e);this.callback(e+this._remainderTime*t),this._once&&this.transport.clear(this.id)}}dispose(){return this.callback=void 0,this}}nr._eventId=0;class Df extends nr{constructor(e,t){super(e,t),this._currentId=-1,this._nextId=-1,this._nextTick=this.time,this._boundRestart=this._restart.bind(this);const n=Object.assign(Df.getDefaults(),t);this.duration=n.duration,this._interval=n.interval,this._nextTick=n.time,this.transport.on("start",this._boundRestart),this.transport.on("loopStart",this._boundRestart),this.transport.on("ticks",this._boundRestart),this.context=this.transport.context,this._restart()}static getDefaults(){return Object.assign({},nr.getDefaults(),{duration:1/0,interval:1,once:!1})}invoke(e){this._createEvents(e),super.invoke(e)}_createEvent(){return Kl(this._nextTick,this.floatTime+this.duration)?this.transport.scheduleOnce(this.invoke.bind(this),new No(this.context,this._nextTick).toSeconds()):-1}_createEvents(e){Kl(this._nextTick+this._interval,this.floatTime+this.duration)&&(this._nextTick+=this._interval,this._currentId=this._nextId,this._nextId=this.transport.scheduleOnce(this.invoke.bind(this),new No(this.context,this._nextTick).toSeconds()))}_restart(e){this.transport.clear(this._currentId),this.transport.clear(this._nextId),this._nextTick=this.floatTime;const t=this.transport.getTicksAtTime(e);sa(t,this.time)&&(this._nextTick=this.floatTime+Math.ceil((t-this.floatTime)/this._interval)*this._interval),this._currentId=this._createEvent(),this._nextTick+=this._interval,this._nextId=this._createEvent()}dispose(){return super.dispose(),this.transport.clear(this._currentId),this.transport.clear(this._nextId),this.transport.off("start",this._boundRestart),this.transport.off("loopStart",this._boundRestart),this.transport.off("ticks",this._boundRestart),this}}class wu extends Hn{constructor(){const e=Ie(wu.getDefaults(),arguments);super(e),this.name="Transport",this._loop=new d2(!1),this._loopStart=0,this._loopEnd=0,this._scheduledEvents={},this._timeline=new Mi,this._repeatedEvents=new u2,this._syncedSignals=[],this._swingAmount=0,this._ppq=e.ppq,this._clock=new Lc({callback:this._processTick.bind(this),context:this.context,frequency:0,units:"bpm"}),this._bindClockEvents(),this.bpm=this._clock.frequency,this._clock.frequency.multiplier=e.ppq,this.bpm.setValueAtTime(e.bpm,0),mt(this,"bpm"),this._timeSignature=e.timeSignature,this._swingTicks=e.ppq/2}static getDefaults(){return Object.assign(Hn.getDefaults(),{bpm:120,loopEnd:"4m",loopStart:0,ppq:192,swing:0,swingSubdivision:"8n",timeSignature:4})}_processTick(e,t){if(this._loop.get(e)&&t>=this._loopEnd&&(this.emit("loopEnd",e),this._clock.setTicksAtTime(this._loopStart,e),t=this._loopStart,this.emit("loopStart",e,this._clock.getSecondsAtTime(e)),this.emit("loop",e)),this._swingAmount>0&&t%this._ppq!==0&&t%(this._swingTicks*2)!==0){const n=t%(this._swingTicks*2)/(this._swingTicks*2),i=Math.sin(n*Math.PI)*this._swingAmount;e+=new No(this.context,this._swingTicks*2/3).toSeconds()*i}Jm(!0),this._timeline.forEachAtTime(t,n=>n.invoke(e)),Jm(!1)}schedule(e,t){const n=new nr(this,{callback:e,time:new Ha(this.context,t).toTicks()});return this._addEvent(n,this._timeline)}scheduleRepeat(e,t,n,i=1/0){const r=new Df(this,{callback:e,duration:new ki(this.context,i).toTicks(),interval:new ki(this.context,t).toTicks(),time:new Ha(this.context,n).toTicks()});return this._addEvent(r,this._repeatedEvents)}scheduleOnce(e,t){const n=new nr(this,{callback:e,once:!0,time:new Ha(this.context,t).toTicks()});return this._addEvent(n,this._timeline)}clear(e){if(this._scheduledEvents.hasOwnProperty(e)){const t=this._scheduledEvents[e.toString()];t.timeline.remove(t.event),t.event.dispose(),delete this._scheduledEvents[e.toString()]}return this}_addEvent(e,t){return this._scheduledEvents[e.id.toString()]={event:e,timeline:t},t.add(e),e.id}cancel(e=0){const t=this.toTicks(e);return this._timeline.forEachFrom(t,n=>this.clear(n.id)),this._repeatedEvents.forEachFrom(t,n=>this.clear(n.id)),this}_bindClockEvents(){this._clock.on("start",(e,t)=>{t=new No(this.context,t).toSeconds(),this.emit("start",e,t)}),this._clock.on("stop",e=>{this.emit("stop",e)}),this._clock.on("pause",e=>{this.emit("pause",e)})}get state(){return this._clock.getStateAtTime(this.now())}start(e,t){this.context.resume();let n;return it(t)&&(n=this.toTicks(t)),this._clock.start(e,n),this}stop(e){return this._clock.stop(e),this}pause(e){return this._clock.pause(e),this}toggle(e){return e=this.toSeconds(e),this._clock.getStateAtTime(e)!=="started"?this.start(e):this.stop(e),this}get timeSignature(){return this._timeSignature}set timeSignature(e){hi(e)&&(e=e[0]/e[1]*4),this._timeSignature=e}get loopStart(){return new ki(this.context,this._loopStart,"i").toSeconds()}set loopStart(e){this._loopStart=this.toTicks(e)}get loopEnd(){return new ki(this.context,this._loopEnd,"i").toSeconds()}set loopEnd(e){this._loopEnd=this.toTicks(e)}get loop(){return this._loop.get(this.now())}set loop(e){this._loop.set(e,this.now())}setLoopPoints(e,t){return this.loopStart=e,this.loopEnd=t,this}get swing(){return this._swingAmount}set swing(e){this._swingAmount=e}get swingSubdivision(){return new No(this.context,this._swingTicks).toNotation()}set swingSubdivision(e){this._swingTicks=this.toTicks(e)}get position(){const e=this.now(),t=this._clock.getTicksAtTime(e);return new No(this.context,t).toBarsBeatsSixteenths()}set position(e){const t=this.toTicks(e);this.ticks=t}get seconds(){return this._clock.seconds}set seconds(e){const t=this.now(),n=this._clock.frequency.timeToTicks(e,t);this.ticks=n}get progress(){if(this.loop){const e=this.now();return(this._clock.getTicksAtTime(e)-this._loopStart)/(this._loopEnd-this._loopStart)}else return 0}get ticks(){return this._clock.ticks}set ticks(e){if(this._clock.ticks!==e){const t=this.now();if(this.state==="started"){const n=this._clock.getTicksAtTime(t),i=this._clock.frequency.getDurationOfTicks(Math.ceil(n)-n,t),r=t+i;this.emit("stop",r),this._clock.setTicksAtTime(e,r),this.emit("start",r,this._clock.getSecondsAtTime(r))}else this.emit("ticks",t),this._clock.setTicksAtTime(e,t)}}getTicksAtTime(e){return this._clock.getTicksAtTime(e)}getSecondsAtTime(e){return this._clock.getSecondsAtTime(e)}get PPQ(){return this._clock.frequency.multiplier}set PPQ(e){this._clock.frequency.multiplier=e}nextSubdivision(e){if(e=this.toTicks(e),this.state!=="started")return 0;{const t=this.now(),n=this.getTicksAtTime(t),i=e-n%e;return this._clock.nextTickTime(i,t)}}syncSignal(e,t){const n=this.now();let i=this.bpm,r=1/(60/i.getValueAtTime(n)/this.PPQ),a=[];if(e.units==="time"){const c=.015625/r,l=new xt(c),u=new bf(-1),h=new xt(c);i.chain(l,u,h),i=h,r=1/r,a=[l,u,h]}t||(e.getValueAtTime(n)!==0?t=e.getValueAtTime(n)/r:t=0);const o=new xt(t);return i.connect(o),o.connect(e._param),a.push(o),this._syncedSignals.push({initial:e.value,nodes:a,signal:e}),e.value=0,this}unsyncSignal(e){for(let t=this._syncedSignals.length-1;t>=0;t--){const n=this._syncedSignals[t];n.signal===e&&(n.nodes.forEach(i=>i.dispose()),n.signal.value=n.initial,this._syncedSignals.splice(t,1))}return this}dispose(){return super.dispose(),this._clock.dispose(),nv(this,"bpm"),this._timeline.dispose(),this._repeatedEvents.dispose(),this}}Rc.mixin(wu);Su(s=>{s.transport=new wu({context:s})});Tu(s=>{s.transport.dispose()});class ln extends Fe{constructor(e){super(e),this.input=void 0,this._state=new vf("stopped"),this._synced=!1,this._scheduled=[],this._syncedStart=ut,this._syncedStop=ut,this._state.memory=100,this._state.increasing=!0,this._volume=this.output=new ur({context:this.context,mute:e.mute,volume:e.volume}),this.volume=this._volume.volume,mt(this,"volume"),this.onstop=e.onstop}static getDefaults(){return Object.assign(Fe.getDefaults(),{mute:!1,onstop:ut,volume:0})}get state(){return this._synced?this.context.transport.state==="started"?this._state.getValueAtTime(this.context.transport.seconds):"stopped":this._state.getValueAtTime(this.now())}get mute(){return this._volume.mute}set mute(e){this._volume.mute=e}_clampToCurrentTime(e){return this._synced?e:Math.max(e,this.context.currentTime)}start(e,t,n){let i=Ti(e)&&this._synced?this.context.transport.seconds:this.toSeconds(e);if(i=this._clampToCurrentTime(i),!this._synced&&this._state.getValueAtTime(i)==="started")He(sa(i,this._state.get(i).time),"Start time must be strictly greater than previous start time"),this._state.cancel(i),this._state.setStateAtTime("started",i),this.log("restart",i),this.restart(i,t,n);else if(this.log("start",i),this._state.setStateAtTime("started",i),this._synced){const r=this._state.get(i);r&&(r.offset=this.toSeconds(Br(t,0)),r.duration=n?this.toSeconds(n):void 0);const a=this.context.transport.schedule(o=>{this._start(o,t,n)},i);this._scheduled.push(a),this.context.transport.state==="started"&&this.context.transport.getSecondsAtTime(this.immediate())>i&&this._syncedStart(this.now(),this.context.transport.seconds)}else Z0(this.context),this._start(i,t,n);return this}stop(e){let t=Ti(e)&&this._synced?this.context.transport.seconds:this.toSeconds(e);if(t=this._clampToCurrentTime(t),this._state.getValueAtTime(t)==="started"||it(this._state.getNextState("started",t))){if(this.log("stop",t),!this._synced)this._stop(t);else{const n=this.context.transport.schedule(this._stop.bind(this),t);this._scheduled.push(n)}this._state.cancel(t),this._state.setStateAtTime("stopped",t)}return this}restart(e,t,n){return e=this.toSeconds(e),this._state.getValueAtTime(e)==="started"&&(this._state.cancel(e),this._restart(e,t,n)),this}sync(){return this._synced||(this._synced=!0,this._syncedStart=(e,t)=>{if(sa(t,0)){const n=this._state.get(t);if(n&&n.state==="started"&&n.time!==t){const i=t-this.toSeconds(n.time);let r;n.duration&&(r=this.toSeconds(n.duration)-i),this._start(e,this.toSeconds(n.offset)+i,r)}}},this._syncedStop=e=>{const t=this.context.transport.getSecondsAtTime(Math.max(e-this.sampleTime,0));this._state.getValueAtTime(t)==="started"&&this._stop(e)},this.context.transport.on("start",this._syncedStart),this.context.transport.on("loopStart",this._syncedStart),this.context.transport.on("stop",this._syncedStop),this.context.transport.on("pause",this._syncedStop),this.context.transport.on("loopEnd",this._syncedStop)),this}unsync(){return this._synced&&(this.context.transport.off("stop",this._syncedStop),this.context.transport.off("pause",this._syncedStop),this.context.transport.off("loopEnd",this._syncedStop),this.context.transport.off("start",this._syncedStart),this.context.transport.off("loopStart",this._syncedStart)),this._synced=!1,this._scheduled.forEach(e=>this.context.transport.clear(e)),this._scheduled=[],this._state.cancel(0),this._stop(0),this}dispose(){return super.dispose(),this.onstop=ut,this.unsync(),this._volume.dispose(),this._state.dispose(),this}}class Fc extends oa{constructor(){const e=Ie(Fc.getDefaults(),arguments,["url","onload"]);super(e),this.name="ToneBufferSource",this._source=this.context.createBufferSource(),this._internalChannels=[this._source],this._sourceStarted=!1,this._sourceStopped=!1,rs(this._source,this._gainNode),this._source.onended=()=>this._stopSource(),this.playbackRate=new Tt({context:this.context,param:this._source.playbackRate,units:"positive",value:e.playbackRate}),this.loop=e.loop,this.loopStart=e.loopStart,this.loopEnd=e.loopEnd,this._buffer=new gt(e.url,e.onload,e.onerror),this._internalChannels.push(this._source)}static getDefaults(){return Object.assign(oa.getDefaults(),{url:new gt,loop:!1,loopEnd:0,loopStart:0,onload:ut,onerror:ut,playbackRate:1})}get fadeIn(){return this._fadeIn}set fadeIn(e){this._fadeIn=e}get fadeOut(){return this._fadeOut}set fadeOut(e){this._fadeOut=e}get curve(){return this._curve}set curve(e){this._curve=e}start(e,t,n,i=1){He(this.buffer.loaded,"buffer is either not set or not loaded");const r=this.toSeconds(e);this._startGain(r,i),this.loop?t=Br(t,this.loopStart):t=Br(t,0);let a=Math.max(this.toSeconds(t),0);if(this.loop){const o=this.toSeconds(this.loopEnd)||this.buffer.duration,c=this.toSeconds(this.loopStart),l=o-c;fd(a,o)&&(a=(a-c)%l+c),Fi(a,this.buffer.duration)&&(a=0)}if(this._source.buffer=this.buffer.get(),this._source.loopEnd=this.toSeconds(this.loopEnd)||this.buffer.duration,Kl(a,this.buffer.duration)&&(this._sourceStarted=!0,this._source.start(r,a)),it(n)){let o=this.toSeconds(n);o=Math.max(o,0),this.stop(r+o)}return this}_stopSource(e){!this._sourceStopped&&this._sourceStarted&&(this._sourceStopped=!0,this._source.stop(this.toSeconds(e)),this._onended())}get loopStart(){return this._source.loopStart}set loopStart(e){this._source.loopStart=this.toSeconds(e)}get loopEnd(){return this._source.loopEnd}set loopEnd(e){this._source.loopEnd=this.toSeconds(e)}get buffer(){return this._buffer}set buffer(e){this._buffer.set(e)}get loop(){return this._source.loop}set loop(e){this._source.loop=e,this._sourceStarted&&this.cancelStop()}dispose(){return super.dispose(),this._source.onended=null,this._source.disconnect(),this._buffer.dispose(),this.playbackRate.dispose(),this}}function so(s,e){return Xt(this,void 0,void 0,function*(){const t=e/s.context.sampleRate,n=new mf(1,t,s.context.sampleRate);return new s.constructor(Object.assign(s.get(),{frequency:2/t,detune:0,context:n})).toDestination().start(0),(yield n.render()).getChannelData(0)})}class Af extends oa{constructor(){const e=Ie(Af.getDefaults(),arguments,["frequency","type"]);super(e),this.name="ToneOscillatorNode",this._oscillator=this.context.createOscillator(),this._internalChannels=[this._oscillator],rs(this._oscillator,this._gainNode),this.type=e.type,this.frequency=new Tt({context:this.context,param:this._oscillator.frequency,units:"frequency",value:e.frequency}),this.detune=new Tt({context:this.context,param:this._oscillator.detune,units:"cents",value:e.detune}),mt(this,["frequency","detune"])}static getDefaults(){return Object.assign(oa.getDefaults(),{detune:0,frequency:440,type:"sine"})}start(e){const t=this.toSeconds(e);return this.log("start",t),this._startGain(t),this._oscillator.start(t),this}_stopSource(e){this._oscillator.stop(e)}setPeriodicWave(e){return this._oscillator.setPeriodicWave(e),this}get type(){return this._oscillator.type}set type(e){this._oscillator.type=e}dispose(){return super.dispose(),this.state==="started"&&this.stop(),this._oscillator.disconnect(),this.frequency.dispose(),this.detune.dispose(),this}}class qt extends ln{constructor(){const e=Ie(qt.getDefaults(),arguments,["frequency","type"]);super(e),this.name="Oscillator",this._oscillator=null,this.frequency=new Nt({context:this.context,units:"frequency",value:e.frequency}),mt(this,"frequency"),this.detune=new Nt({context:this.context,units:"cents",value:e.detune}),mt(this,"detune"),this._partials=e.partials,this._partialCount=e.partialCount,this._type=e.type,e.partialCount&&e.type!=="custom"&&(this._type=this.baseType+e.partialCount.toString()),this.phase=e.phase}static getDefaults(){return Object.assign(ln.getDefaults(),{detune:0,frequency:440,partialCount:0,partials:[],phase:0,type:"sine"})}_start(e){const t=this.toSeconds(e),n=new Af({context:this.context,onended:()=>this.onstop(this)});this._oscillator=n,this._wave?this._oscillator.setPeriodicWave(this._wave):this._oscillator.type=this._type,this._oscillator.connect(this.output),this.frequency.connect(this._oscillator.frequency),this.detune.connect(this._oscillator.detune),this._oscillator.start(t)}_stop(e){const t=this.toSeconds(e);this._oscillator&&this._oscillator.stop(t)}_restart(e){const t=this.toSeconds(e);return this.log("restart",t),this._oscillator&&this._oscillator.cancelStop(),this._state.cancel(t),this}syncFrequency(){return this.context.transport.syncSignal(this.frequency),this}unsyncFrequency(){return this.context.transport.unsyncSignal(this.frequency),this}_getCachedPeriodicWave(){if(this._type==="custom")return qt._periodicWaveCache.find(t=>t.phase===this._phase&&ZR(t.partials,this._partials));{const e=qt._periodicWaveCache.find(t=>t.type===this._type&&t.phase===this._phase);return this._partialCount=e?e.partialCount:this._partialCount,e}}get type(){return this._type}set type(e){this._type=e;const t=["sine","square","sawtooth","triangle"].indexOf(e)!==-1;if(this._phase===0&&t)this._wave=void 0,this._partialCount=0,this._oscillator!==null&&(this._oscillator.type=e);else{const n=this._getCachedPeriodicWave();if(it(n)){const{partials:i,wave:r}=n;this._wave=r,this._partials=i,this._oscillator!==null&&this._oscillator.setPeriodicWave(this._wave)}else{const[i,r]=this._getRealImaginary(e,this._phase),a=this.context.createPeriodicWave(i,r);this._wave=a,this._oscillator!==null&&this._oscillator.setPeriodicWave(this._wave),qt._periodicWaveCache.push({imag:r,partialCount:this._partialCount,partials:this._partials,phase:this._phase,real:i,type:this._type,wave:this._wave}),qt._periodicWaveCache.length>100&&qt._periodicWaveCache.shift()}}}get baseType(){return this._type.replace(this.partialCount.toString(),"")}set baseType(e){this.partialCount&&this._type!=="custom"&&e!=="custom"?this.type=e+this.partialCount:this.type=e}get partialCount(){return this._partialCount}set partialCount(e){ri(e,0);let t=this._type;const n=/^(sine|triangle|square|sawtooth)(\d+)$/.exec(this._type);if(n&&(t=n[1]),this._type!=="custom")e===0?this.type=t:this.type=t+e.toString();else{const i=new Float32Array(e);this._partials.forEach((r,a)=>i[a]=r),this._partials=Array.from(i),this.type=this._type}}_getRealImaginary(e,t){let i=2048;const r=new Float32Array(i),a=new Float32Array(i);let o=1;if(e==="custom"){if(o=this._partials.length+1,this._partialCount=this._partials.length,i=o,this._partials.length===0)return[r,a]}else{const c=/^(sine|triangle|square|sawtooth)(\d+)$/.exec(e);c?(o=parseInt(c[2],10)+1,this._partialCount=parseInt(c[2],10),e=c[1],o=Math.max(o,2),i=o):this._partialCount=0,this._partials=[]}for(let c=1;c<i;++c){const l=2/(c*Math.PI);let u;switch(e){case"sine":u=c<=o?1:0,this._partials[c-1]=u;break;case"square":u=c&1?2*l:0,this._partials[c-1]=u;break;case"sawtooth":u=l*(c&1?1:-1),this._partials[c-1]=u;break;case"triangle":c&1?u=2*(l*l)*(c-1>>1&1?-1:1):u=0,this._partials[c-1]=u;break;case"custom":u=this._partials[c-1];break;default:throw new TypeError("Oscillator: invalid type: "+e)}u!==0?(r[c]=-u*Math.sin(t*c),a[c]=u*Math.cos(t*c)):(r[c]=0,a[c]=0)}return[r,a]}_inverseFFT(e,t,n){let i=0;const r=e.length;for(let a=0;a<r;a++)i+=e[a]*Math.cos(a*n)+t[a]*Math.sin(a*n);return i}getInitialValue(){const[e,t]=this._getRealImaginary(this._type,0);let n=0;const i=Math.PI*2,r=32;for(let a=0;a<r;a++)n=Math.max(this._inverseFFT(e,t,a/r*i),n);return JR(-this._inverseFFT(e,t,this._phase)/n,-1,1)}get partials(){return this._partials.slice(0,this.partialCount)}set partials(e){this._partials=e,this._partialCount=this._partials.length,e.length&&(this.type="custom")}get phase(){return this._phase*(180/Math.PI)}set phase(e){this._phase=e*Math.PI/180,this.type=this._type}asArray(){return Xt(this,arguments,void 0,function*(e=1024){return so(this,e)})}dispose(){return super.dispose(),this._oscillator!==null&&this._oscillator.dispose(),this._wave=void 0,this.frequency.dispose(),this.detune.dispose(),this}}qt._periodicWaveCache=[];class f2 extends Zr{constructor(){super(...arguments),this.name="AudioToGain",this._norm=new xa({context:this.context,mapping:e=>(e+1)/2}),this.input=this._norm,this.output=this._norm}dispose(){return super.dispose(),this._norm.dispose(),this}}class ir extends Nt{constructor(){const e=Ie(ir.getDefaults(),arguments,["value"]);super(e),this.name="Multiply",this.override=!1,this._mult=this.input=this.output=new xt({context:this.context,minValue:e.minValue,maxValue:e.maxValue}),this.factor=this._param=this._mult.gain,this.factor.setValueAtTime(e.value,0)}static getDefaults(){return Object.assign(Nt.getDefaults(),{value:0})}dispose(){return super.dispose(),this._mult.dispose(),this}}class bu extends ln{constructor(){const e=Ie(bu.getDefaults(),arguments,["frequency","type","modulationType"]);super(e),this.name="AMOscillator",this._modulationScale=new f2({context:this.context}),this._modulationNode=new xt({context:this.context}),this._carrier=new qt({context:this.context,detune:e.detune,frequency:e.frequency,onstop:()=>this.onstop(this),phase:e.phase,type:e.type}),this.frequency=this._carrier.frequency,this.detune=this._carrier.detune,this._modulator=new qt({context:this.context,phase:e.phase,type:e.modulationType}),this.harmonicity=new ir({context:this.context,units:"positive",value:e.harmonicity}),this.frequency.chain(this.harmonicity,this._modulator.frequency),this._modulator.chain(this._modulationScale,this._modulationNode.gain),this._carrier.chain(this._modulationNode,this.output),mt(this,["frequency","detune","harmonicity"])}static getDefaults(){return Object.assign(qt.getDefaults(),{harmonicity:1,modulationType:"square"})}_start(e){this._modulator.start(e),this._carrier.start(e)}_stop(e){this._modulator.stop(e),this._carrier.stop(e)}_restart(e){this._modulator.restart(e),this._carrier.restart(e)}get type(){return this._carrier.type}set type(e){this._carrier.type=e}get baseType(){return this._carrier.baseType}set baseType(e){this._carrier.baseType=e}get partialCount(){return this._carrier.partialCount}set partialCount(e){this._carrier.partialCount=e}get modulationType(){return this._modulator.type}set modulationType(e){this._modulator.type=e}get phase(){return this._carrier.phase}set phase(e){this._carrier.phase=e,this._modulator.phase=e}get partials(){return this._carrier.partials}set partials(e){this._carrier.partials=e}asArray(){return Xt(this,arguments,void 0,function*(e=1024){return so(this,e)})}dispose(){return super.dispose(),this.frequency.dispose(),this.detune.dispose(),this.harmonicity.dispose(),this._carrier.dispose(),this._modulator.dispose(),this._modulationNode.dispose(),this._modulationScale.dispose(),this}}class Du extends ln{constructor(){const e=Ie(Du.getDefaults(),arguments,["frequency","type","modulationType"]);super(e),this.name="FMOscillator",this._modulationNode=new xt({context:this.context,gain:0}),this._carrier=new qt({context:this.context,detune:e.detune,frequency:0,onstop:()=>this.onstop(this),phase:e.phase,type:e.type}),this.detune=this._carrier.detune,this.frequency=new Nt({context:this.context,units:"frequency",value:e.frequency}),this._modulator=new qt({context:this.context,phase:e.phase,type:e.modulationType}),this.harmonicity=new ir({context:this.context,units:"positive",value:e.harmonicity}),this.modulationIndex=new ir({context:this.context,units:"positive",value:e.modulationIndex}),this.frequency.connect(this._carrier.frequency),this.frequency.chain(this.harmonicity,this._modulator.frequency),this.frequency.chain(this.modulationIndex,this._modulationNode),this._modulator.connect(this._modulationNode.gain),this._modulationNode.connect(this._carrier.frequency),this._carrier.connect(this.output),this.detune.connect(this._modulator.detune),mt(this,["modulationIndex","frequency","detune","harmonicity"])}static getDefaults(){return Object.assign(qt.getDefaults(),{harmonicity:1,modulationIndex:2,modulationType:"square"})}_start(e){this._modulator.start(e),this._carrier.start(e)}_stop(e){this._modulator.stop(e),this._carrier.stop(e)}_restart(e){return this._modulator.restart(e),this._carrier.restart(e),this}get type(){return this._carrier.type}set type(e){this._carrier.type=e}get baseType(){return this._carrier.baseType}set baseType(e){this._carrier.baseType=e}get partialCount(){return this._carrier.partialCount}set partialCount(e){this._carrier.partialCount=e}get modulationType(){return this._modulator.type}set modulationType(e){this._modulator.type=e}get phase(){return this._carrier.phase}set phase(e){this._carrier.phase=e,this._modulator.phase=e}get partials(){return this._carrier.partials}set partials(e){this._carrier.partials=e}asArray(){return Xt(this,arguments,void 0,function*(e=1024){return so(this,e)})}dispose(){return super.dispose(),this.frequency.dispose(),this.harmonicity.dispose(),this._carrier.dispose(),this._modulator.dispose(),this._modulationNode.dispose(),this.modulationIndex.dispose(),this}}class Nc extends ln{constructor(){const e=Ie(Nc.getDefaults(),arguments,["frequency","width"]);super(e),this.name="PulseOscillator",this._widthGate=new xt({context:this.context,gain:0}),this._thresh=new xa({context:this.context,mapping:t=>t<=0?-1:1}),this.width=new Nt({context:this.context,units:"audioRange",value:e.width}),this._triangle=new qt({context:this.context,detune:e.detune,frequency:e.frequency,onstop:()=>this.onstop(this),phase:e.phase,type:"triangle"}),this.frequency=this._triangle.frequency,this.detune=this._triangle.detune,this._triangle.chain(this._thresh,this.output),this.width.chain(this._widthGate,this._thresh),mt(this,["width","frequency","detune"])}static getDefaults(){return Object.assign(ln.getDefaults(),{detune:0,frequency:440,phase:0,type:"pulse",width:.2})}_start(e){e=this.toSeconds(e),this._triangle.start(e),this._widthGate.gain.setValueAtTime(1,e)}_stop(e){e=this.toSeconds(e),this._triangle.stop(e),this._widthGate.gain.cancelScheduledValues(e),this._widthGate.gain.setValueAtTime(0,e)}_restart(e){this._triangle.restart(e),this._widthGate.gain.cancelScheduledValues(e),this._widthGate.gain.setValueAtTime(1,e)}get phase(){return this._triangle.phase}set phase(e){this._triangle.phase=e}get type(){return"pulse"}get baseType(){return"pulse"}get partials(){return[]}get partialCount(){return 0}set carrierType(e){this._triangle.type=e}asArray(){return Xt(this,arguments,void 0,function*(e=1024){return so(this,e)})}dispose(){return super.dispose(),this._triangle.dispose(),this.width.dispose(),this._widthGate.dispose(),this._thresh.dispose(),this}}class Au extends ln{constructor(){const e=Ie(Au.getDefaults(),arguments,["frequency","type","spread"]);super(e),this.name="FatOscillator",this._oscillators=[],this.frequency=new Nt({context:this.context,units:"frequency",value:e.frequency}),this.detune=new Nt({context:this.context,units:"cents",value:e.detune}),this._spread=e.spread,this._type=e.type,this._phase=e.phase,this._partials=e.partials,this._partialCount=e.partialCount,this.count=e.count,mt(this,["frequency","detune"])}static getDefaults(){return Object.assign(qt.getDefaults(),{count:3,spread:20,type:"sawtooth"})}_start(e){e=this.toSeconds(e),this._forEach(t=>t.start(e))}_stop(e){e=this.toSeconds(e),this._forEach(t=>t.stop(e))}_restart(e){this._forEach(t=>t.restart(e))}_forEach(e){for(let t=0;t<this._oscillators.length;t++)e(this._oscillators[t],t)}get type(){return this._type}set type(e){this._type=e,this._forEach(t=>t.type=e)}get spread(){return this._spread}set spread(e){if(this._spread=e,this._oscillators.length>1){const t=-e/2,n=e/(this._oscillators.length-1);this._forEach((i,r)=>i.detune.value=t+n*r)}}get count(){return this._oscillators.length}set count(e){if(ri(e,1),this._oscillators.length!==e){this._forEach(t=>t.dispose()),this._oscillators=[];for(let t=0;t<e;t++){const n=new qt({context:this.context,volume:-6-e*1.1,type:this._type,phase:this._phase+t/e*360,partialCount:this._partialCount,onstop:t===0?()=>this.onstop(this):ut});this.type==="custom"&&(n.partials=this._partials),this.frequency.connect(n.frequency),this.detune.connect(n.detune),n.detune.overridden=!1,n.connect(this.output),this._oscillators[t]=n}this.spread=this._spread,this.state==="started"&&this._forEach(t=>t.start())}}get phase(){return this._phase}set phase(e){this._phase=e,this._forEach((t,n)=>t.phase=this._phase+n/this.count*360)}get baseType(){return this._oscillators[0].baseType}set baseType(e){this._forEach(t=>t.baseType=e),this._type=this._oscillators[0].type}get partials(){return this._oscillators[0].partials}set partials(e){this._partials=e,this._partialCount=this._partials.length,e.length&&(this._type="custom",this._forEach(t=>t.partials=e))}get partialCount(){return this._oscillators[0].partialCount}set partialCount(e){this._partialCount=e,this._forEach(t=>t.partialCount=e),this._type=this._oscillators[0].type}asArray(){return Xt(this,arguments,void 0,function*(e=1024){return so(this,e)})}dispose(){return super.dispose(),this.frequency.dispose(),this.detune.dispose(),this._forEach(e=>e.dispose()),this}}class Cu extends ln{constructor(){const e=Ie(Cu.getDefaults(),arguments,["frequency","modulationFrequency"]);super(e),this.name="PWMOscillator",this.sourceType="pwm",this._scale=new ir({context:this.context,value:2}),this._pulse=new Nc({context:this.context,frequency:e.modulationFrequency}),this._pulse.carrierType="sine",this.modulationFrequency=this._pulse.frequency,this._modulator=new qt({context:this.context,detune:e.detune,frequency:e.frequency,onstop:()=>this.onstop(this),phase:e.phase}),this.frequency=this._modulator.frequency,this.detune=this._modulator.detune,this._modulator.chain(this._scale,this._pulse.width),this._pulse.connect(this.output),mt(this,["modulationFrequency","frequency","detune"])}static getDefaults(){return Object.assign(ln.getDefaults(),{detune:0,frequency:440,modulationFrequency:.4,phase:0,type:"pwm"})}_start(e){e=this.toSeconds(e),this._modulator.start(e),this._pulse.start(e)}_stop(e){e=this.toSeconds(e),this._modulator.stop(e),this._pulse.stop(e)}_restart(e){this._modulator.restart(e),this._pulse.restart(e)}get type(){return"pwm"}get baseType(){return"pwm"}get partials(){return[]}get partialCount(){return 0}get phase(){return this._modulator.phase}set phase(e){this._modulator.phase=e}asArray(){return Xt(this,arguments,void 0,function*(e=1024){return so(this,e)})}dispose(){return super.dispose(),this._pulse.dispose(),this._scale.dispose(),this._modulator.dispose(),this}}const Qm={am:bu,fat:Au,fm:Du,oscillator:qt,pulse:Nc,pwm:Cu};class aa extends ln{constructor(){const e=Ie(aa.getDefaults(),arguments,["frequency","type"]);super(e),this.name="OmniOscillator",this.frequency=new Nt({context:this.context,units:"frequency",value:e.frequency}),this.detune=new Nt({context:this.context,units:"cents",value:e.detune}),mt(this,["frequency","detune"]),this.set(e)}static getDefaults(){return Object.assign(qt.getDefaults(),Du.getDefaults(),bu.getDefaults(),Au.getDefaults(),Nc.getDefaults(),Cu.getDefaults())}_start(e){this._oscillator.start(e)}_stop(e){this._oscillator.stop(e)}_restart(e){return this._oscillator.restart(e),this}get type(){let e="";return["am","fm","fat"].some(t=>this._sourceType===t)&&(e=this._sourceType),e+this._oscillator.type}set type(e){e.substr(0,2)==="fm"?(this._createNewOscillator("fm"),this._oscillator=this._oscillator,this._oscillator.type=e.substr(2)):e.substr(0,2)==="am"?(this._createNewOscillator("am"),this._oscillator=this._oscillator,this._oscillator.type=e.substr(2)):e.substr(0,3)==="fat"?(this._createNewOscillator("fat"),this._oscillator=this._oscillator,this._oscillator.type=e.substr(3)):e==="pwm"?(this._createNewOscillator("pwm"),this._oscillator=this._oscillator):e==="pulse"?this._createNewOscillator("pulse"):(this._createNewOscillator("oscillator"),this._oscillator=this._oscillator,this._oscillator.type=e)}get partials(){return this._oscillator.partials}set partials(e){!this._getOscType(this._oscillator,"pulse")&&!this._getOscType(this._oscillator,"pwm")&&(this._oscillator.partials=e)}get partialCount(){return this._oscillator.partialCount}set partialCount(e){!this._getOscType(this._oscillator,"pulse")&&!this._getOscType(this._oscillator,"pwm")&&(this._oscillator.partialCount=e)}set(e){return Reflect.has(e,"type")&&e.type&&(this.type=e.type),super.set(e),this}_createNewOscillator(e){if(e!==this._sourceType){this._sourceType=e;const t=Qm[e],n=this.now();if(this._oscillator){const i=this._oscillator;i.stop(n),this.context.setTimeout(()=>i.dispose(),this.blockTime)}this._oscillator=new t({context:this.context}),this.frequency.connect(this._oscillator.frequency),this.detune.connect(this._oscillator.detune),this._oscillator.connect(this.output),this._oscillator.onstop=()=>this.onstop(this),this.state==="started"&&this._oscillator.start(n)}}get phase(){return this._oscillator.phase}set phase(e){this._oscillator.phase=e}get sourceType(){return this._sourceType}set sourceType(e){let t="sine";this._oscillator.type!=="pwm"&&this._oscillator.type!=="pulse"&&(t=this._oscillator.type),e==="fm"?this.type="fm"+t:e==="am"?this.type="am"+t:e==="fat"?this.type="fat"+t:e==="oscillator"?this.type=t:e==="pulse"?this.type="pulse":e==="pwm"&&(this.type="pwm")}_getOscType(e,t){return e instanceof Qm[t]}get baseType(){return this._oscillator.baseType}set baseType(e){!this._getOscType(this._oscillator,"pulse")&&!this._getOscType(this._oscillator,"pwm")&&e!=="pulse"&&e!=="pwm"&&(this._oscillator.baseType=e)}get width(){if(this._getOscType(this._oscillator,"pulse"))return this._oscillator.width}get count(){if(this._getOscType(this._oscillator,"fat"))return this._oscillator.count}set count(e){this._getOscType(this._oscillator,"fat")&&tr(e)&&(this._oscillator.count=e)}get spread(){if(this._getOscType(this._oscillator,"fat"))return this._oscillator.spread}set spread(e){this._getOscType(this._oscillator,"fat")&&tr(e)&&(this._oscillator.spread=e)}get modulationType(){if(this._getOscType(this._oscillator,"fm")||this._getOscType(this._oscillator,"am"))return this._oscillator.modulationType}set modulationType(e){(this._getOscType(this._oscillator,"fm")||this._getOscType(this._oscillator,"am"))&&Cs(e)&&(this._oscillator.modulationType=e)}get modulationIndex(){if(this._getOscType(this._oscillator,"fm"))return this._oscillator.modulationIndex}get harmonicity(){if(this._getOscType(this._oscillator,"fm")||this._getOscType(this._oscillator,"am"))return this._oscillator.harmonicity}get modulationFrequency(){if(this._getOscType(this._oscillator,"pwm"))return this._oscillator.modulationFrequency}asArray(){return Xt(this,arguments,void 0,function*(e=1024){return so(this,e)})}dispose(){return super.dispose(),this.detune.dispose(),this.frequency.dispose(),this._oscillator.dispose(),this}}function cv(s,e=1/0){const t=new WeakMap;return function(n,i){Reflect.defineProperty(n,i,{configurable:!0,enumerable:!0,get:function(){return t.get(this)},set:function(r){ri(r,s,e),t.set(this,r)}})}}function Fs(s,e=1/0){const t=new WeakMap;return function(n,i){Reflect.defineProperty(n,i,{configurable:!0,enumerable:!0,get:function(){return t.get(this)},set:function(r){ri(this.toSeconds(r),s,e),t.set(this,r)}})}}class Ru extends ln{constructor(){const e=Ie(Ru.getDefaults(),arguments,["url","onload"]);super(e),this.name="Player",this._activeSources=new Set,this._buffer=new gt({onload:this._onload.bind(this,e.onload),onerror:e.onerror,reverse:e.reverse,url:e.url}),this.autostart=e.autostart,this._loop=e.loop,this._loopStart=e.loopStart,this._loopEnd=e.loopEnd,this._playbackRate=e.playbackRate,this.fadeIn=e.fadeIn,this.fadeOut=e.fadeOut}static getDefaults(){return Object.assign(ln.getDefaults(),{autostart:!1,fadeIn:0,fadeOut:0,loop:!1,loopEnd:0,loopStart:0,onload:ut,onerror:ut,playbackRate:1,reverse:!1})}load(e){return Xt(this,void 0,void 0,function*(){return yield this._buffer.load(e),this._onload(),this})}_onload(e=ut){e(),this.autostart&&this.start()}_onSourceEnd(e){this.onstop(this),this._activeSources.delete(e),this._activeSources.size===0&&!this._synced&&this._state.getValueAtTime(this.now())==="started"&&(this._state.cancel(this.now()),this._state.setStateAtTime("stopped",this.now()))}start(e,t,n){return super.start(e,t,n),this}_start(e,t,n){this._loop?t=Br(t,this._loopStart):t=Br(t,0);const i=this.toSeconds(t),r=n;n=Br(n,Math.max(this._buffer.duration-i,0));let a=this.toSeconds(n);a=a/this._playbackRate,e=this.toSeconds(e);const o=new Fc({url:this._buffer,context:this.context,fadeIn:this.fadeIn,fadeOut:this.fadeOut,loop:this._loop,loopEnd:this._loopEnd,loopStart:this._loopStart,onended:this._onSourceEnd.bind(this),playbackRate:this._playbackRate}).connect(this.output);!this._loop&&!this._synced&&(this._state.cancel(e+a),this._state.setStateAtTime("stopped",e+a,{implicitEnd:!0})),this._activeSources.add(o),this._loop&&Ti(r)?o.start(e,i):o.start(e,i,a-this.toSeconds(this.fadeOut))}_stop(e){const t=this.toSeconds(e);this._activeSources.forEach(n=>n.stop(t))}restart(e,t,n){return super.restart(e,t,n),this}_restart(e,t,n){var i;(i=[...this._activeSources].pop())===null||i===void 0||i.stop(e),this._start(e,t,n)}seek(e,t){const n=this.toSeconds(t);if(this._state.getValueAtTime(n)==="started"){const i=this.toSeconds(e);this._stop(n),this._start(n,i)}return this}setLoopPoints(e,t){return this.loopStart=e,this.loopEnd=t,this}get loopStart(){return this._loopStart}set loopStart(e){this._loopStart=e,this.buffer.loaded&&ri(this.toSeconds(e),0,this.buffer.duration),this._activeSources.forEach(t=>{t.loopStart=e})}get loopEnd(){return this._loopEnd}set loopEnd(e){this._loopEnd=e,this.buffer.loaded&&ri(this.toSeconds(e),0,this.buffer.duration),this._activeSources.forEach(t=>{t.loopEnd=e})}get buffer(){return this._buffer}set buffer(e){this._buffer.set(e)}get loop(){return this._loop}set loop(e){if(this._loop!==e&&(this._loop=e,this._activeSources.forEach(t=>{t.loop=e}),e)){const t=this._state.getNextState("stopped",this.now());t&&this._state.cancel(t.time)}}get playbackRate(){return this._playbackRate}set playbackRate(e){this._playbackRate=e;const t=this.now(),n=this._state.getNextState("stopped",t);n&&n.implicitEnd&&(this._state.cancel(n.time),this._activeSources.forEach(i=>i.cancelStop())),this._activeSources.forEach(i=>{i.playbackRate.setValueAtTime(e,t)})}get reverse(){return this._buffer.reverse}set reverse(e){this._buffer.reverse=e}get loaded(){return this._buffer.loaded}dispose(){return super.dispose(),this._activeSources.forEach(e=>e.dispose()),this._activeSources.clear(),this._buffer.dispose(),this}}Wi([Fs(0)],Ru.prototype,"fadeIn",void 0);Wi([Fs(0)],Ru.prototype,"fadeOut",void 0);class Cf extends ln{constructor(){const e=Ie(Cf.getDefaults(),arguments,["url","onload"]);super(e),this.name="GrainPlayer",this._loopStart=0,this._loopEnd=0,this._activeSources=[],this.buffer=new gt({onload:e.onload,onerror:e.onerror,reverse:e.reverse,url:e.url}),this._clock=new Lc({context:this.context,callback:this._tick.bind(this),frequency:1/e.grainSize}),this._playbackRate=e.playbackRate,this._grainSize=e.grainSize,this._overlap=e.overlap,this.detune=e.detune,this.overlap=e.overlap,this.loop=e.loop,this.playbackRate=e.playbackRate,this.grainSize=e.grainSize,this.loopStart=e.loopStart,this.loopEnd=e.loopEnd,this.reverse=e.reverse,this._clock.on("stop",this._onstop.bind(this))}static getDefaults(){return Object.assign(ln.getDefaults(),{onload:ut,onerror:ut,overlap:.1,grainSize:.2,playbackRate:1,detune:0,loop:!1,loopStart:0,loopEnd:0,reverse:!1})}_start(e,t,n){t=Br(t,0),t=this.toSeconds(t),e=this.toSeconds(e);const i=1/this._clock.frequency.getValueAtTime(e);this._clock.start(e,t/i),n&&this.stop(e+this.toSeconds(n))}restart(e,t,n){return super.restart(e,t,n),this}_restart(e,t,n){this._stop(e),this._start(e,t,n)}_stop(e){this._clock.stop(e)}_onstop(e){this._activeSources.forEach(t=>{t.fadeOut=0,t.stop(e)}),this.onstop(this)}_tick(e){const t=this._clock.getTicksAtTime(e),n=t*this._grainSize;if(this.log("offset",n),!this.loop&&n>this.buffer.duration){this.stop(e);return}const i=n<this._overlap?0:this._overlap,r=new Fc({context:this.context,url:this.buffer,fadeIn:i,fadeOut:this._overlap,loop:this.loop,loopStart:this._loopStart,loopEnd:this._loopEnd,playbackRate:_f(this.detune/100)}).connect(this.output);r.start(e,this._grainSize*t),r.stop(e+this._grainSize/this.playbackRate),this._activeSources.push(r),r.onended=()=>{const a=this._activeSources.indexOf(r);a!==-1&&this._activeSources.splice(a,1)}}get playbackRate(){return this._playbackRate}set playbackRate(e){ri(e,.001),this._playbackRate=e,this.grainSize=this._grainSize}get loopStart(){return this._loopStart}set loopStart(e){this.buffer.loaded&&ri(this.toSeconds(e),0,this.buffer.duration),this._loopStart=this.toSeconds(e)}get loopEnd(){return this._loopEnd}set loopEnd(e){this.buffer.loaded&&ri(this.toSeconds(e),0,this.buffer.duration),this._loopEnd=this.toSeconds(e)}get reverse(){return this.buffer.reverse}set reverse(e){this.buffer.reverse=e}get grainSize(){return this._grainSize}set grainSize(e){this._grainSize=this.toSeconds(e),this._clock.frequency.setValueAtTime(this._playbackRate/this._grainSize,this.now())}get overlap(){return this._overlap}set overlap(e){const t=this.toSeconds(e);ri(t,0),this._overlap=t}get loaded(){return this.buffer.loaded}dispose(){return super.dispose(),this.buffer.dispose(),this._clock.dispose(),this._activeSources.forEach(e=>e.dispose()),this}}class p2 extends Zr{constructor(){super(...arguments),this.name="GainToAudio",this._norm=new xa({context:this.context,mapping:e=>Math.abs(e)*2-1}),this.input=this._norm,this.output=this._norm}dispose(){return super.dispose(),this._norm.dispose(),this}}class os extends Fe{constructor(){const e=Ie(os.getDefaults(),arguments,["attack","decay","sustain","release"]);super(e),this.name="Envelope",this._sig=new Nt({context:this.context,value:0}),this.output=this._sig,this.input=void 0,this.attack=e.attack,this.decay=e.decay,this.sustain=e.sustain,this.release=e.release,this.attackCurve=e.attackCurve,this.releaseCurve=e.releaseCurve,this.decayCurve=e.decayCurve}static getDefaults(){return Object.assign(Fe.getDefaults(),{attack:.01,attackCurve:"linear",decay:.1,decayCurve:"exponential",release:1,releaseCurve:"exponential",sustain:.5})}get value(){return this.getValueAtTime(this.now())}_getCurve(e,t){if(Cs(e))return e;{let n;for(n in al)if(al[n][t]===e)return n;return e}}_setCurve(e,t,n){if(Cs(n)&&Reflect.has(al,n)){const i=al[n];kr(i)?e!=="_decayCurve"&&(this[e]=i[t]):this[e]=i}else if(hi(n)&&e!=="_decayCurve")this[e]=n;else throw new Error("Envelope: invalid curve: "+n)}get attackCurve(){return this._getCurve(this._attackCurve,"In")}set attackCurve(e){this._setCurve("_attackCurve","In",e)}get releaseCurve(){return this._getCurve(this._releaseCurve,"Out")}set releaseCurve(e){this._setCurve("_releaseCurve","Out",e)}get decayCurve(){return this._getCurve(this._decayCurve,"Out")}set decayCurve(e){this._setCurve("_decayCurve","Out",e)}triggerAttack(e,t=1){this.log("triggerAttack",e,t),e=this.toSeconds(e);let i=this.toSeconds(this.attack);const r=this.toSeconds(this.decay),a=this.getValueAtTime(e);if(a>0){const o=1/i;i=(1-a)/o}if(i<this.sampleTime)this._sig.cancelScheduledValues(e),this._sig.setValueAtTime(t,e);else if(this._attackCurve==="linear")this._sig.linearRampTo(t,i,e);else if(this._attackCurve==="exponential")this._sig.targetRampTo(t,i,e);else{this._sig.cancelAndHoldAtTime(e);let o=this._attackCurve;for(let c=1;c<o.length;c++)if(o[c-1]<=a&&a<=o[c]){o=this._attackCurve.slice(c),o[0]=a;break}this._sig.setValueCurveAtTime(o,e,i,t)}if(r&&this.sustain<1){const o=t*this.sustain,c=e+i;this.log("decay",c),this._decayCurve==="linear"?this._sig.linearRampToValueAtTime(o,r+c):this._sig.exponentialApproachValueAtTime(o,c,r)}return this}triggerRelease(e){this.log("triggerRelease",e),e=this.toSeconds(e);const t=this.getValueAtTime(e);if(t>0){const n=this.toSeconds(this.release);n<this.sampleTime?this._sig.setValueAtTime(0,e):this._releaseCurve==="linear"?this._sig.linearRampTo(0,n,e):this._releaseCurve==="exponential"?this._sig.targetRampTo(0,n,e):(He(hi(this._releaseCurve),"releaseCurve must be either 'linear', 'exponential' or an array"),this._sig.cancelAndHoldAtTime(e),this._sig.setValueCurveAtTime(this._releaseCurve,e,n,t))}return this}getValueAtTime(e){return this._sig.getValueAtTime(e)}triggerAttackRelease(e,t,n=1){return t=this.toSeconds(t),this.triggerAttack(t,n),this.triggerRelease(t+this.toSeconds(e)),this}cancel(e){return this._sig.cancelScheduledValues(this.toSeconds(e)),this}connect(e,t=0,n=0){return yf(this,e,t,n),this}asArray(){return Xt(this,arguments,void 0,function*(e=1024){const t=e/this.context.sampleRate,n=new mf(1,t,this.context.sampleRate),i=this.toSeconds(this.attack)+this.toSeconds(this.decay),r=i+this.toSeconds(this.release),a=r*.1,o=r+a,c=new this.constructor(Object.assign(this.get(),{attack:t*this.toSeconds(this.attack)/o,decay:t*this.toSeconds(this.decay)/o,release:t*this.toSeconds(this.release)/o,context:n}));return c._sig.toDestination(),c.triggerAttackRelease(t*(i+a)/o,0),(yield n.render()).getChannelData(0)})}dispose(){return super.dispose(),this._sig.dispose(),this}}Wi([Fs(0)],os.prototype,"attack",void 0);Wi([Fs(0)],os.prototype,"decay",void 0);Wi([cv(0,1)],os.prototype,"sustain",void 0);Wi([Fs(0)],os.prototype,"release",void 0);const al=(()=>{let e,t;const n=[];for(e=0;e<128;e++)n[e]=Math.sin(e/(128-1)*(Math.PI/2));const i=[],r=6.4;for(e=0;e<128-1;e++){t=e/(128-1);const d=Math.sin(t*(Math.PI*2)*r-Math.PI/2)+1;i[e]=d/10+t*.83}i[128-1]=1;const a=[],o=5;for(e=0;e<128;e++)a[e]=Math.ceil(e/(128-1)*o)/o;const c=[];for(e=0;e<128;e++)t=e/(128-1),c[e]=.5*(1-Math.cos(Math.PI*t));const l=[];for(e=0;e<128;e++){t=e/(128-1);const d=Math.pow(t,3)*4+.2,f=Math.cos(d*Math.PI*2*t);l[e]=Math.abs(f*(1-t))}function u(d){const f=new Array(d.length);for(let _=0;_<d.length;_++)f[_]=1-d[_];return f}function h(d){return d.slice(0).reverse()}return{bounce:{In:u(l),Out:l},cosine:{In:n,Out:h(n)},exponential:"exponential",linear:"linear",ripple:{In:i,Out:u(i)},sine:{In:c,Out:u(c)},step:{In:a,Out:u(a)}}})();class sr extends Fe{constructor(){const e=Ie(sr.getDefaults(),arguments);super(e),this._scheduledEvents=[],this._synced=!1,this._original_triggerAttack=this.triggerAttack,this._original_triggerRelease=this.triggerRelease,this._syncedRelease=t=>this._original_triggerRelease(t),this._volume=this.output=new ur({context:this.context,volume:e.volume}),this.volume=this._volume.volume,mt(this,"volume")}static getDefaults(){return Object.assign(Fe.getDefaults(),{volume:0})}sync(){return this._syncState()&&(this._syncMethod("triggerAttack",1),this._syncMethod("triggerRelease",0),this.context.transport.on("stop",this._syncedRelease),this.context.transport.on("pause",this._syncedRelease),this.context.transport.on("loopEnd",this._syncedRelease)),this}_syncState(){let e=!1;return this._synced||(this._synced=!0,e=!0),e}_syncMethod(e,t){const n=this["_original_"+e]=this[e];this[e]=(...i)=>{const r=i[t],a=this.context.transport.schedule(o=>{i[t]=o,n.apply(this,i)},r);this._scheduledEvents.push(a)}}unsync(){return this._scheduledEvents.forEach(e=>this.context.transport.clear(e)),this._scheduledEvents=[],this._synced&&(this._synced=!1,this.triggerAttack=this._original_triggerAttack,this.triggerRelease=this._original_triggerRelease,this.context.transport.off("stop",this._syncedRelease),this.context.transport.off("pause",this._syncedRelease),this.context.transport.off("loopEnd",this._syncedRelease)),this}triggerAttackRelease(e,t,n,i){const r=this.toSeconds(n),a=this.toSeconds(t);return this.triggerAttack(e,r,i),this.triggerRelease(r+a),this}dispose(){return super.dispose(),this._volume.dispose(),this.unsync(),this._scheduledEvents=[],this}}class Rs extends sr{constructor(){const e=Ie(Rs.getDefaults(),arguments);super(e),this.portamento=e.portamento,this.onsilence=e.onsilence}static getDefaults(){return Object.assign(sr.getDefaults(),{detune:0,onsilence:ut,portamento:0})}triggerAttack(e,t,n=1){this.log("triggerAttack",e,t,n);const i=this.toSeconds(t);return this._triggerEnvelopeAttack(i,n),this.setNote(e,i),this}triggerRelease(e){this.log("triggerRelease",e);const t=this.toSeconds(e);return this._triggerEnvelopeRelease(t),this}setNote(e,t){const n=this.toSeconds(t),i=e instanceof ai?e.toFrequency():e;if(this.portamento>0&&this.getLevelAtTime(n)>.05){const r=this.toSeconds(this.portamento);this.frequency.exponentialRampTo(i,r,n)}else this.frequency.setValueAtTime(i,n);return this}}Wi([Fs(0)],Rs.prototype,"portamento",void 0);class Rf extends os{constructor(){super(Ie(Rf.getDefaults(),arguments,["attack","decay","sustain","release"])),this.name="AmplitudeEnvelope",this._gainNode=new xt({context:this.context,gain:0}),this.output=this._gainNode,this.input=this._gainNode,this._sig.connect(this._gainNode.gain),this.output=this._gainNode,this.input=this._gainNode}dispose(){return super.dispose(),this._gainNode.dispose(),this}}class Kr extends Rs{constructor(){const e=Ie(Kr.getDefaults(),arguments);super(e),this.name="Synth",this.oscillator=new aa(Object.assign({context:this.context,detune:e.detune,onstop:()=>this.onsilence(this)},e.oscillator)),this.frequency=this.oscillator.frequency,this.detune=this.oscillator.detune,this.envelope=new Rf(Object.assign({context:this.context},e.envelope)),this.oscillator.chain(this.envelope,this.output),mt(this,["oscillator","frequency","detune","envelope"])}static getDefaults(){return Object.assign(Rs.getDefaults(),{envelope:Object.assign(Dr(os.getDefaults(),Object.keys(Fe.getDefaults())),{attack:.005,decay:.1,release:1,sustain:.3}),oscillator:Object.assign(Dr(aa.getDefaults(),[...Object.keys(ln.getDefaults()),"frequency","detune"]),{type:"triangle"})})}_triggerEnvelopeAttack(e,t){if(this.envelope.triggerAttack(e,t),this.oscillator.start(e),this.envelope.sustain===0){const n=this.toSeconds(this.envelope.attack),i=this.toSeconds(this.envelope.decay);this.oscillator.stop(e+n+i)}}_triggerEnvelopeRelease(e){this.envelope.triggerRelease(e),this.oscillator.stop(e+this.toSeconds(this.envelope.release))}getLevelAtTime(e){return e=this.toSeconds(e),this.envelope.getValueAtTime(e)}dispose(){return super.dispose(),this.oscillator.dispose(),this.envelope.dispose(),this}}class Ql extends Rs{constructor(){const e=Ie(Ql.getDefaults(),arguments);super(e),this.name="ModulationSynth",this._carrier=new Kr({context:this.context,oscillator:e.oscillator,envelope:e.envelope,onsilence:()=>this.onsilence(this),volume:-10}),this._modulator=new Kr({context:this.context,oscillator:e.modulation,envelope:e.modulationEnvelope,volume:-10}),this.oscillator=this._carrier.oscillator,this.envelope=this._carrier.envelope,this.modulation=this._modulator.oscillator,this.modulationEnvelope=this._modulator.envelope,this.frequency=new Nt({context:this.context,units:"frequency"}),this.detune=new Nt({context:this.context,value:e.detune,units:"cents"}),this.harmonicity=new ir({context:this.context,value:e.harmonicity,minValue:0}),this._modulationNode=new xt({context:this.context,gain:0}),mt(this,["frequency","harmonicity","oscillator","envelope","modulation","modulationEnvelope","detune"])}static getDefaults(){return Object.assign(Rs.getDefaults(),{harmonicity:3,oscillator:Object.assign(Dr(aa.getDefaults(),[...Object.keys(ln.getDefaults()),"frequency","detune"]),{type:"sine"}),envelope:Object.assign(Dr(os.getDefaults(),Object.keys(Fe.getDefaults())),{attack:.01,decay:.01,sustain:1,release:.5}),modulation:Object.assign(Dr(aa.getDefaults(),[...Object.keys(ln.getDefaults()),"frequency","detune"]),{type:"square"}),modulationEnvelope:Object.assign(Dr(os.getDefaults(),Object.keys(Fe.getDefaults())),{attack:.5,decay:0,sustain:1,release:.5})})}_triggerEnvelopeAttack(e,t){this._carrier._triggerEnvelopeAttack(e,t),this._modulator._triggerEnvelopeAttack(e,t)}_triggerEnvelopeRelease(e){return this._carrier._triggerEnvelopeRelease(e),this._modulator._triggerEnvelopeRelease(e),this}getLevelAtTime(e){return e=this.toSeconds(e),this.envelope.getValueAtTime(e)}dispose(){return super.dispose(),this._carrier.dispose(),this._modulator.dispose(),this.frequency.dispose(),this.detune.dispose(),this.harmonicity.dispose(),this._modulationNode.dispose(),this}}class Pf extends Ql{constructor(){const e=Ie(Pf.getDefaults(),arguments);super(e),this.name="FMSynth",this.modulationIndex=new ir({context:this.context,value:e.modulationIndex}),this.frequency.connect(this._carrier.frequency),this.frequency.chain(this.harmonicity,this._modulator.frequency),this.frequency.chain(this.modulationIndex,this._modulationNode),this.detune.fan(this._carrier.detune,this._modulator.detune),this._modulator.connect(this._modulationNode.gain),this._modulationNode.connect(this._carrier.frequency),this._carrier.connect(this.output)}static getDefaults(){return Object.assign(Ql.getDefaults(),{modulationIndex:10})}dispose(){return super.dispose(),this.modulationIndex.dispose(),this}}class Pu extends Kr{constructor(){const e=Ie(Pu.getDefaults(),arguments);super(e),this.name="MembraneSynth",this.portamento=0,this.pitchDecay=e.pitchDecay,this.octaves=e.octaves,mt(this,["oscillator","envelope"])}static getDefaults(){return zr(Rs.getDefaults(),Kr.getDefaults(),{envelope:{attack:.001,attackCurve:"exponential",decay:.4,release:1.4,sustain:.01},octaves:10,oscillator:{type:"sine"},pitchDecay:.05})}setNote(e,t){const n=this.toSeconds(t),i=this.toFrequency(e instanceof ai?e.toFrequency():e),r=i*this.octaves;return this.oscillator.frequency.setValueAtTime(r,n),this.oscillator.frequency.exponentialRampToValueAtTime(i,n+this.toSeconds(this.pitchDecay)),this}dispose(){return super.dispose(),this}}Wi([cv(0)],Pu.prototype,"octaves",void 0);Wi([Fs(0)],Pu.prototype,"pitchDecay",void 0);const Lf=new Set;function Ff(s){Lf.add(s)}function lv(s,e){const t=`registerProcessor("${s}", ${e})`;Lf.add(t)}function m2(){return Array.from(Lf).join(`
`)}class _2 extends Fe{constructor(e){super(e),this.name="ToneAudioWorklet",this.workletOptions={},this.onprocessorerror=ut;const t=URL.createObjectURL(new Blob([m2()],{type:"text/javascript"})),n=this._audioWorkletName();this._dummyGain=this.context.createGain(),this._dummyParam=this._dummyGain.gain,this.context.addAudioWorkletModule(t).then(()=>{this.disposed||(this._worklet=this.context.createAudioWorkletNode(n,this.workletOptions),this._worklet.onprocessorerror=this.onprocessorerror.bind(this),this.onReady(this._worklet))})}dispose(){return super.dispose(),this._dummyGain.disconnect(),this._worklet&&(this._worklet.port.postMessage("dispose"),this._worklet.disconnect()),this}}const g2=`
	/**
	 * The base AudioWorkletProcessor for use in Tone.js. Works with the {@link ToneAudioWorklet}. 
	 */
	class ToneAudioWorkletProcessor extends AudioWorkletProcessor {

		constructor(options) {
			
			super(options);
			/**
			 * If the processor was disposed or not. Keep alive until it's disposed.
			 */
			this.disposed = false;
		   	/** 
			 * The number of samples in the processing block
			 */
			this.blockSize = 128;
			/**
			 * the sample rate
			 */
			this.sampleRate = sampleRate;

			this.port.onmessage = (event) => {
				// when it receives a dispose 
				if (event.data === "dispose") {
					this.disposed = true;
				}
			};
		}
	}
`;Ff(g2);const v2=`
	/**
	 * Abstract class for a single input/output processor. 
	 * has a 'generate' function which processes one sample at a time
	 */
	class SingleIOProcessor extends ToneAudioWorkletProcessor {

		constructor(options) {
			super(Object.assign(options, {
				numberOfInputs: 1,
				numberOfOutputs: 1
			}));
			/**
			 * Holds the name of the parameter and a single value of that
			 * parameter at the current sample
			 * @type { [name: string]: number }
			 */
			this.params = {}
		}

		/**
		 * Generate an output sample from the input sample and parameters
		 * @abstract
		 * @param input number
		 * @param channel number
		 * @param parameters { [name: string]: number }
		 * @returns number
		 */
		generate(){}

		/**
		 * Update the private params object with the 
		 * values of the parameters at the given index
		 * @param parameters { [name: string]: Float32Array },
		 * @param index number
		 */
		updateParams(parameters, index) {
			for (const paramName in parameters) {
				const param = parameters[paramName];
				if (param.length > 1) {
					this.params[paramName] = parameters[paramName][index];
				} else {
					this.params[paramName] = parameters[paramName][0];
				}
			}
		}

		/**
		 * Process a single frame of the audio
		 * @param inputs Float32Array[][]
		 * @param outputs Float32Array[][]
		 */
		process(inputs, outputs, parameters) {
			const input = inputs[0];
			const output = outputs[0];
			// get the parameter values
			const channelCount = Math.max(input && input.length || 0, output.length);
			for (let sample = 0; sample < this.blockSize; sample++) {
				this.updateParams(parameters, sample);
				for (let channel = 0; channel < channelCount; channel++) {
					const inputSample = input && input.length ? input[channel][sample] : 0;
					output[channel][sample] = this.generate(inputSample, channel, this.params);
				}
			}
			return !this.disposed;
		}
	};
`;Ff(v2);const x2=`
	/**
	 * A multichannel buffer for use within an AudioWorkletProcessor as a delay line
	 */
	class DelayLine {
		
		constructor(size, channels) {
			this.buffer = [];
			this.writeHead = []
			this.size = size;

			// create the empty channels
			for (let i = 0; i < channels; i++) {
				this.buffer[i] = new Float32Array(this.size);
				this.writeHead[i] = 0;
			}
		}

		/**
		 * Push a value onto the end
		 * @param channel number
		 * @param value number
		 */
		push(channel, value) {
			this.writeHead[channel] += 1;
			if (this.writeHead[channel] > this.size) {
				this.writeHead[channel] = 0;
			}
			this.buffer[channel][this.writeHead[channel]] = value;
		}

		/**
		 * Get the recorded value of the channel given the delay
		 * @param channel number
		 * @param delay number delay samples
		 */
		get(channel, delay) {
			let readHead = this.writeHead[channel] - Math.floor(delay);
			if (readHead < 0) {
				readHead += this.size;
			}
			return this.buffer[channel][readHead];
		}
	}
`;Ff(x2);const uv="feedback-comb-filter",y2=`
	class FeedbackCombFilterWorklet extends SingleIOProcessor {

		constructor(options) {
			super(options);
			this.delayLine = new DelayLine(this.sampleRate, options.channelCount || 2);
		}

		static get parameterDescriptors() {
			return [{
				name: "delayTime",
				defaultValue: 0.1,
				minValue: 0,
				maxValue: 1,
				automationRate: "k-rate"
			}, {
				name: "feedback",
				defaultValue: 0.5,
				minValue: 0,
				maxValue: 0.9999,
				automationRate: "k-rate"
			}];
		}

		generate(input, channel, parameters) {
			const delayedSample = this.delayLine.get(channel, parameters.delayTime * this.sampleRate);
			this.delayLine.push(channel, input + delayedSample * parameters.feedback);
			return delayedSample;
		}
	}
`;lv(uv,y2);class Nf extends _2{constructor(){const e=Ie(Nf.getDefaults(),arguments,["delayTime","resonance"]);super(e),this.name="FeedbackCombFilter",this.input=new xt({context:this.context}),this.output=new xt({context:this.context}),this.delayTime=new Tt({context:this.context,value:e.delayTime,units:"time",minValue:0,maxValue:1,param:this._dummyParam,swappable:!0}),this.resonance=new Tt({context:this.context,value:e.resonance,units:"normalRange",param:this._dummyParam,swappable:!0}),mt(this,["resonance","delayTime"])}_audioWorkletName(){return uv}static getDefaults(){return Object.assign(Fe.getDefaults(),{delayTime:.1,resonance:.5})}onReady(e){ra(this.input,e,this.output);const t=e.parameters.get("delayTime");this.delayTime.setParam(t);const n=e.parameters.get("feedback");this.resonance.setParam(n)}dispose(){return super.dispose(),this.input.dispose(),this.output.dispose(),this.delayTime.dispose(),this.resonance.dispose(),this}}class If extends Fe{constructor(){const e=Ie(If.getDefaults(),arguments,["frequency","type"]);super(e),this.name="OnePoleFilter",this._frequency=e.frequency,this._type=e.type,this.input=new xt({context:this.context}),this.output=new xt({context:this.context}),this._createFilter()}static getDefaults(){return Object.assign(Fe.getDefaults(),{frequency:880,type:"lowpass"})}_createFilter(){const e=this._filter,t=this.toFrequency(this._frequency),n=1/(2*Math.PI*t);if(this._type==="lowpass"){const i=1/(n*this.context.sampleRate),r=i-1;this._filter=this.context.createIIRFilter([i,0],[1,r])}else{const i=1/(n*this.context.sampleRate)-1;this._filter=this.context.createIIRFilter([1,-1],[1,i])}this.input.chain(this._filter,this.output),e&&this.context.setTimeout(()=>{this.disposed||(this.input.disconnect(e),e.disconnect())},this.blockTime)}get frequency(){return this._frequency}set frequency(e){this._frequency=e,this._createFilter()}get type(){return this._type}set type(e){this._type=e,this._createFilter()}getFrequencyResponse(e=128){const t=new Float32Array(e);for(let r=0;r<e;r++){const o=Math.pow(r/e,2)*(2e4-20)+20;t[r]=o}const n=new Float32Array(e),i=new Float32Array(e);return this._filter.getFrequencyResponse(t,n,i),n}dispose(){return super.dispose(),this.input.dispose(),this.output.dispose(),this._filter.disconnect(),this}}class Of extends Fe{constructor(){const e=Ie(Of.getDefaults(),arguments,["delayTime","resonance","dampening"]);super(e),this.name="LowpassCombFilter",this._combFilter=this.output=new Nf({context:this.context,delayTime:e.delayTime,resonance:e.resonance}),this.delayTime=this._combFilter.delayTime,this.resonance=this._combFilter.resonance,this._lowpass=this.input=new If({context:this.context,frequency:e.dampening,type:"lowpass"}),this._lowpass.connect(this._combFilter)}static getDefaults(){return Object.assign(Fe.getDefaults(),{dampening:3e3,delayTime:.1,resonance:.5})}get dampening(){return this._lowpass.frequency}set dampening(e){this._lowpass.frequency=e}dispose(){return super.dispose(),this._combFilter.dispose(),this._lowpass.dispose(),this}}class Uf extends sr{constructor(){const e=Ie(Uf.getDefaults(),arguments,["voice","options"]);super(e),this.name="PolySynth",this._availableVoices=[],this._activeVoices=[],this._voices=[],this._gcTimeout=-1,this._averageActiveVoices=0,this._syncedRelease=i=>this.releaseAll(i),He(!tr(e.voice),"DEPRECATED: The polyphony count is no longer the first argument.");const t=e.voice.getDefaults();this.options=Object.assign(t,e.options),this.voice=e.voice,this.maxPolyphony=e.maxPolyphony,this._dummyVoice=this._getNextAvailableVoice();const n=this._voices.indexOf(this._dummyVoice);this._voices.splice(n,1),this._gcTimeout=this.context.setInterval(this._collectGarbage.bind(this),1)}static getDefaults(){return Object.assign(sr.getDefaults(),{maxPolyphony:32,options:{},voice:Kr})}get activeVoices(){return this._activeVoices.length}_makeVoiceAvailable(e){this._availableVoices.push(e);const t=this._activeVoices.findIndex(n=>n.voice===e);this._activeVoices.splice(t,1)}_getNextAvailableVoice(){if(this._availableVoices.length)return this._availableVoices.shift();if(this._voices.length<this.maxPolyphony){const e=new this.voice(Object.assign(this.options,{context:this.context,onsilence:this._makeVoiceAvailable.bind(this)}));return He(e instanceof Rs,"Voice must extend Monophonic class"),e.connect(this.output),this._voices.push(e),e}else Cc("Max polyphony exceeded. Note dropped.")}_collectGarbage(){if(this._averageActiveVoices=Math.max(this._averageActiveVoices*.95,this.activeVoices),this._availableVoices.length&&this._voices.length>Math.ceil(this._averageActiveVoices+1)){const e=this._availableVoices.shift(),t=this._voices.indexOf(e);this._voices.splice(t,1),this.context.isOffline||e.dispose()}}_triggerAttack(e,t,n){e.forEach(i=>{const r=new Jl(this.context,i).toMidi(),a=this._getNextAvailableVoice();a&&(a.triggerAttack(i,t,n),this._activeVoices.push({midi:r,voice:a,released:!1}),this.log("triggerAttack",i,t))})}_triggerRelease(e,t){e.forEach(n=>{const i=new Jl(this.context,n).toMidi(),r=this._activeVoices.find(({midi:a,released:o})=>a===i&&!o);r&&(r.voice.triggerRelease(t),r.released=!0,this.log("triggerRelease",n,t))})}_scheduleEvent(e,t,n,i){He(!this.disposed,"Synth was already disposed"),n<=this.now()?e==="attack"?this._triggerAttack(t,n,i):this._triggerRelease(t,n):this.context.setTimeout(()=>{this.disposed||this._scheduleEvent(e,t,n,i)},n-this.now())}triggerAttack(e,t,n){Array.isArray(e)||(e=[e]);const i=this.toSeconds(t);return this._scheduleEvent("attack",e,i,n),this}triggerRelease(e,t){Array.isArray(e)||(e=[e]);const n=this.toSeconds(t);return this._scheduleEvent("release",e,n),this}triggerAttackRelease(e,t,n,i){const r=this.toSeconds(n);if(this.triggerAttack(e,r,i),hi(t)){He(hi(e),"If the duration is an array, the notes must also be an array"),e=e;for(let a=0;a<e.length;a++){const o=t[Math.min(a,t.length-1)],c=this.toSeconds(o);He(c>0,"The duration must be greater than 0"),this.triggerRelease(e[a],r+c)}}else{const a=this.toSeconds(t);He(a>0,"The duration must be greater than 0"),this.triggerRelease(e,r+a)}return this}sync(){return this._syncState()&&(this._syncMethod("triggerAttack",1),this._syncMethod("triggerRelease",1),this.context.transport.on("stop",this._syncedRelease),this.context.transport.on("pause",this._syncedRelease),this.context.transport.on("loopEnd",this._syncedRelease)),this}set(e){const t=Dr(e,["onsilence","context"]);return this.options=zr(this.options,t),this._voices.forEach(n=>n.set(t)),this._dummyVoice.set(t),this}get(){return this._dummyVoice.get()}releaseAll(e){const t=this.toSeconds(e);return this._activeVoices.forEach(({voice:n})=>{n.triggerRelease(t)}),this}dispose(){return super.dispose(),this._dummyVoice.dispose(),this._voices.forEach(e=>e.dispose()),this._activeVoices=[],this._availableVoices=[],this.context.clearInterval(this._gcTimeout),this}}class Lu extends sr{constructor(){const e=Ie(Lu.getDefaults(),arguments,["urls","onload","baseUrl"],"urls");super(e),this.name="Sampler",this._activeSources=new Map;const t={};Object.keys(e.urls).forEach(n=>{const i=parseInt(n,10);if(He(ol(n)||tr(i)&&isFinite(i),`url key is neither a note or midi pitch: ${n}`),ol(n)){const r=new ai(this.context,n).toMidi();t[r]=e.urls[n]}else tr(i)&&isFinite(i)&&(t[i]=e.urls[i])}),this._buffers=new wf({urls:t,onload:e.onload,baseUrl:e.baseUrl,onerror:e.onerror}),this.attack=e.attack,this.release=e.release,this.curve=e.curve,this._buffers.loaded&&Promise.resolve().then(e.onload)}static getDefaults(){return Object.assign(sr.getDefaults(),{attack:0,baseUrl:"",curve:"exponential",onload:ut,onerror:ut,release:.1,urls:{}})}_findClosest(e){let n=0;for(;n<96;){if(this._buffers.has(e+n))return-n;if(this._buffers.has(e-n))return n;n++}throw new Error(`No available buffers for note: ${e}`)}triggerAttack(e,t,n=1){return this.log("triggerAttack",e,t,n),Array.isArray(e)||(e=[e]),e.forEach(i=>{const r=ov(new ai(this.context,i).toFrequency()),a=Math.round(r),o=r-a,c=this._findClosest(a),l=a-c,u=this._buffers.get(l),h=_f(c+o),d=new Fc({url:u,context:this.context,curve:this.curve,fadeIn:this.attack,fadeOut:this.release,playbackRate:h}).connect(this.output);d.start(t,0,u.duration/h,n),hi(this._activeSources.get(a))||this._activeSources.set(a,[]),this._activeSources.get(a).push(d),d.onended=()=>{if(this._activeSources&&this._activeSources.has(a)){const f=this._activeSources.get(a),_=f.indexOf(d);_!==-1&&f.splice(_,1)}}}),this}triggerRelease(e,t){return this.log("triggerRelease",e,t),Array.isArray(e)||(e=[e]),e.forEach(n=>{const i=new ai(this.context,n).toMidi();if(this._activeSources.has(i)&&this._activeSources.get(i).length){const r=this._activeSources.get(i);t=this.toSeconds(t),r.forEach(a=>{a.stop(t)}),this._activeSources.set(i,[])}}),this}releaseAll(e){const t=this.toSeconds(e);return this._activeSources.forEach(n=>{for(;n.length;)n.shift().stop(t)}),this}sync(){return this._syncState()&&(this._syncMethod("triggerAttack",1),this._syncMethod("triggerRelease",1)),this}triggerAttackRelease(e,t,n,i=1){const r=this.toSeconds(n);return this.triggerAttack(e,r,i),hi(t)?(He(hi(e),"notes must be an array when duration is array"),e.forEach((a,o)=>{const c=t[Math.min(o,t.length-1)];this.triggerRelease(a,r+this.toSeconds(c))})):this.triggerRelease(e,r+this.toSeconds(t)),this}add(e,t,n){if(He(ol(e)||isFinite(e),`note must be a pitch or midi: ${e}`),ol(e)){const i=new ai(this.context,e).toMidi();this._buffers.add(i,t,n)}else this._buffers.add(e,t,n);return this}get loaded(){return this._buffers.loaded}dispose(){return super.dispose(),this._buffers.dispose(),this._activeSources.forEach(e=>{e.forEach(t=>t.dispose())}),this._activeSources.clear(),this}}Wi([Fs(0)],Lu.prototype,"attack",void 0);Wi([Fs(0)],Lu.prototype,"release",void 0);class kf extends Fe{constructor(){const e=Ie(kf.getDefaults(),arguments,["fade"]);super(e),this.name="CrossFade",this._panner=this.context.createStereoPanner(),this._split=this.context.createChannelSplitter(2),this._g2a=new p2({context:this.context}),this.a=new xt({context:this.context,gain:0}),this.b=new xt({context:this.context,gain:0}),this.output=new xt({context:this.context}),this._internalChannels=[this.a,this.b],this.fade=new Nt({context:this.context,units:"normalRange",value:e.fade}),mt(this,"fade"),this.context.getConstant(1).connect(this._panner),this._panner.connect(this._split),this._panner.channelCount=1,this._panner.channelCountMode="explicit",rs(this._split,this.a.gain,0),rs(this._split,this.b.gain,1),this.fade.chain(this._g2a,this._panner.pan),this.a.connect(this.output),this.b.connect(this.output)}static getDefaults(){return Object.assign(Fe.getDefaults(),{fade:.5})}dispose(){return super.dispose(),this.a.dispose(),this.b.dispose(),this.output.dispose(),this.fade.dispose(),this._g2a.dispose(),this._panner.disconnect(),this._split.disconnect(),this}}class zf extends Fe{constructor(){const e=Ie(zf.getDefaults(),arguments,["pan"]);super(e),this.name="Panner",this._panner=this.context.createStereoPanner(),this.input=this._panner,this.output=this._panner,this.pan=new Tt({context:this.context,param:this._panner.pan,value:e.pan,minValue:-1,maxValue:1}),this._panner.channelCount=e.channelCount,this._panner.channelCountMode="explicit",mt(this,"pan")}static getDefaults(){return Object.assign(Fe.getDefaults(),{pan:0,channelCount:1})}dispose(){return super.dispose(),this._panner.disconnect(),this.pan.dispose(),this}}const S2="bit-crusher",T2=`
	class BitCrusherWorklet extends SingleIOProcessor {

		static get parameterDescriptors() {
			return [{
				name: "bits",
				defaultValue: 12,
				minValue: 1,
				maxValue: 16,
				automationRate: 'k-rate'
			}];
		}

		generate(input, _channel, parameters) {
			const step = Math.pow(0.5, parameters.bits - 1);
			const val = step * Math.floor(input / step + 0.5);
			return val;
		}
	}
`;lv(S2,T2);class Fu extends Fe{constructor(){const e=Ie(Fu.getDefaults(),arguments,["channels"]);super(e),this.name="Split",this._splitter=this.input=this.output=this.context.createChannelSplitter(e.channels),this._internalChannels=[this._splitter]}static getDefaults(){return Object.assign(Fe.getDefaults(),{channels:2})}dispose(){return super.dispose(),this._splitter.disconnect(),this}}class Bf extends Fe{constructor(){const e=Ie(Bf.getDefaults(),arguments,["channels"]);super(e),this.name="Merge",this._merger=this.output=this.input=this.context.createChannelMerger(e.channels)}static getDefaults(){return Object.assign(Fe.getDefaults(),{channels:2})}dispose(){return super.dispose(),this._merger.disconnect(),this}}class e_ extends Fe{constructor(e){super(e),this.name="StereoEffect",this.input=new xt({context:this.context}),this.input.channelCount=2,this.input.channelCountMode="explicit",this._dryWet=this.output=new kf({context:this.context,fade:e.wet}),this.wet=this._dryWet.fade,this._split=new Fu({context:this.context,channels:2}),this._merge=new Bf({context:this.context,channels:2}),this.input.connect(this._split),this.input.connect(this._dryWet.a),this._merge.connect(this._dryWet.b),mt(this,["wet"])}connectEffectLeft(...e){this._split.connect(e[0],0,0),ra(...e),rs(e[e.length-1],this._merge,0,0)}connectEffectRight(...e){this._split.connect(e[0],1,0),ra(...e),rs(e[e.length-1],this._merge,0,1)}static getDefaults(){return Object.assign(Fe.getDefaults(),{wet:1})}dispose(){return super.dispose(),this._dryWet.dispose(),this._split.dispose(),this._merge.dispose(),this}}const t_=[1557/44100,1617/44100,1491/44100,1422/44100,1277/44100,1356/44100,1188/44100,1116/44100],n_=[225,556,441,341];class Vf extends e_{constructor(){const e=Ie(Vf.getDefaults(),arguments,["roomSize","dampening"]);super(e),this.name="Freeverb",this._combFilters=[],this._allpassFiltersL=[],this._allpassFiltersR=[],this.roomSize=new Nt({context:this.context,value:e.roomSize,units:"normalRange"}),this._allpassFiltersL=n_.map(t=>{const n=this.context.createBiquadFilter();return n.type="allpass",n.frequency.value=t,n}),this._allpassFiltersR=n_.map(t=>{const n=this.context.createBiquadFilter();return n.type="allpass",n.frequency.value=t,n}),this._combFilters=t_.map((t,n)=>{const i=new Of({context:this.context,dampening:e.dampening,delayTime:t});return n<t_.length/2?this.connectEffectLeft(i,...this._allpassFiltersL):this.connectEffectRight(i,...this._allpassFiltersR),this.roomSize.connect(i.resonance),i}),mt(this,["roomSize"])}static getDefaults(){return Object.assign(e_.getDefaults(),{roomSize:.7,dampening:3e3})}get dampening(){return this._combFilters[0].dampening}set dampening(e){this._combFilters.forEach(t=>t.dampening=e)}dispose(){return super.dispose(),this._allpassFiltersL.forEach(e=>e.disconnect()),this._allpassFiltersR.forEach(e=>e.disconnect()),this._combFilters.forEach(e=>e.dispose()),this.roomSize.dispose(),this}}class Nu extends Fe{constructor(){const e=Ie(Nu.getDefaults(),arguments,["type","size"]);super(e),this.name="Analyser",this._analysers=[],this._buffers=[],this.input=this.output=this._gain=new xt({context:this.context}),this._split=new Fu({context:this.context,channels:e.channels}),this.input.connect(this._split),ri(e.channels,1);for(let t=0;t<e.channels;t++)this._analysers[t]=this.context.createAnalyser(),this._split.connect(this._analysers[t],t,0);this.size=e.size,this.type=e.type,this.smoothing=e.smoothing}static getDefaults(){return Object.assign(Fe.getDefaults(),{size:1024,smoothing:.8,type:"fft",channels:1})}getValue(){return this._analysers.forEach((e,t)=>{const n=this._buffers[t];this._type==="fft"?e.getFloatFrequencyData(n):this._type==="waveform"&&e.getFloatTimeDomainData(n)}),this.channels===1?this._buffers[0]:this._buffers}get size(){return this._analysers[0].frequencyBinCount}set size(e){this._analysers.forEach((t,n)=>{t.fftSize=e*2,this._buffers[n]=new Float32Array(e)})}get channels(){return this._analysers.length}get type(){return this._type}set type(e){He(e==="waveform"||e==="fft",`Analyser: invalid type: ${e}`),this._type=e}get smoothing(){return this._analysers[0].smoothingTimeConstant}set smoothing(e){this._analysers.forEach(t=>t.smoothingTimeConstant=e)}dispose(){return super.dispose(),this._analysers.forEach(e=>e.disconnect()),this._split.dispose(),this._gain.dispose(),this}}class eu extends Fe{constructor(){super(Ie(eu.getDefaults(),arguments)),this.name="MeterBase",this.input=this.output=this._analyser=new Nu({context:this.context,size:256,type:"waveform"})}dispose(){return super.dispose(),this._analyser.dispose(),this}}class Gf extends eu{constructor(){const e=Ie(Gf.getDefaults(),arguments,["smoothing"]);super(e),this.name="Meter",this.input=this.output=this._analyser=new Nu({context:this.context,size:256,type:"waveform",channels:e.channelCount}),this.smoothing=e.smoothing,this.normalRange=e.normalRange,this._rms=new Array(e.channelCount),this._rms.fill(0)}static getDefaults(){return Object.assign(eu.getDefaults(),{smoothing:.8,normalRange:!1,channelCount:1})}getLevel(){return Cc("'getLevel' has been changed to 'getValue'"),this.getValue()}getValue(){const e=this._analyser.getValue(),n=(this.channels===1?[e]:e).map((i,r)=>{const a=i.reduce((c,l)=>c+l*l,0),o=Math.sqrt(a/i.length);return this._rms[r]=Math.max(o,this._rms[r]*this.smoothing),this.normalRange?this._rms[r]:Mu(this._rms[r])});return this.channels===1?n[0]:n}get channels(){return this._analyser.channels}dispose(){return super.dispose(),this._analyser.dispose(),this}}class Gt extends Fe{constructor(){const e=Ie(Gt.getDefaults(),arguments,["solo"]);super(e),this.name="Solo",this.input=this.output=new xt({context:this.context}),Gt._allSolos.has(this.context)||Gt._allSolos.set(this.context,new Set),Gt._allSolos.get(this.context).add(this),this.solo=e.solo}static getDefaults(){return Object.assign(Fe.getDefaults(),{solo:!1})}get solo(){return this._isSoloed()}set solo(e){e?this._addSolo():this._removeSolo(),Gt._allSolos.get(this.context).forEach(t=>t._updateSolo())}get muted(){return this.input.gain.value===0}_addSolo(){Gt._soloed.has(this.context)||Gt._soloed.set(this.context,new Set),Gt._soloed.get(this.context).add(this)}_removeSolo(){Gt._soloed.has(this.context)&&Gt._soloed.get(this.context).delete(this)}_isSoloed(){return Gt._soloed.has(this.context)&&Gt._soloed.get(this.context).has(this)}_noSolos(){return!Gt._soloed.has(this.context)||Gt._soloed.has(this.context)&&Gt._soloed.get(this.context).size===0}_updateSolo(){this._isSoloed()?this.input.gain.value=1:this._noSolos()?this.input.gain.value=1:this.input.gain.value=0}dispose(){return super.dispose(),Gt._allSolos.get(this.context).delete(this),this._removeSolo(),this}}Gt._allSolos=new Map;Gt._soloed=new Map;class Wf extends Fe{constructor(){const e=Ie(Wf.getDefaults(),arguments,["pan","volume"]);super(e),this.name="PanVol",this._panner=this.input=new zf({context:this.context,pan:e.pan,channelCount:e.channelCount}),this.pan=this._panner.pan,this._volume=this.output=new ur({context:this.context,volume:e.volume}),this.volume=this._volume.volume,this._panner.connect(this._volume),this.mute=e.mute,mt(this,["pan","volume"])}static getDefaults(){return Object.assign(Fe.getDefaults(),{mute:!1,pan:0,volume:0,channelCount:1})}get mute(){return this._volume.mute}set mute(e){this._volume.mute=e}dispose(){return super.dispose(),this._panner.dispose(),this.pan.dispose(),this._volume.dispose(),this.volume.dispose(),this}}class Io extends Fe{constructor(){const e=Ie(Io.getDefaults(),arguments,["volume","pan"]);super(e),this.name="Channel",this._solo=this.input=new Gt({solo:e.solo,context:this.context}),this._panVol=this.output=new Wf({context:this.context,pan:e.pan,volume:e.volume,mute:e.mute,channelCount:e.channelCount}),this.pan=this._panVol.pan,this.volume=this._panVol.volume,this._solo.connect(this._panVol),mt(this,["pan","volume"])}static getDefaults(){return Object.assign(Fe.getDefaults(),{pan:0,volume:0,mute:!1,solo:!1,channelCount:1})}get solo(){return this._solo.solo}set solo(e){this._solo.solo=e}get muted(){return this._solo.muted||this.mute}get mute(){return this._panVol.mute}set mute(e){this._panVol.mute=e}_getBus(e){return Io.buses.has(e)||Io.buses.set(e,new xt({context:this.context})),Io.buses.get(e)}send(e,t=0){const n=this._getBus(e),i=new xt({context:this.context,units:"decibels",gain:t});return this.connect(i),i.connect(n),i}receive(e){return this._getBus(e).connect(this),this}dispose(){return super.dispose(),this._panVol.dispose(),this.pan.dispose(),this.volume.dispose(),this._solo.dispose(),this}}Io.buses=new Map;function hv(){return oi().now()}oi().transport;oi().destination;oi().destination;function dv(){return oi().destination}oi().listener;oi().draw;oi();class M2{constructor(e,t,n){this.synth=new Uf(Pf,{harmonicity:e,modulationIndex:t,oscillator:{type:"sine"},envelope:{attack:.01,decay:.01,sustain:1,release:n},modulation:{type:"square"},modulationEnvelope:{attack:.5,decay:.3,sustain:1,release:50}}).toDestination(),this.meter=new Gf,this.freeverb=new Vf({roomSize:.7}),this.volume=new ur(0).chain(this.freeverb,this.meter,dv()),this.synth.connect(this.volume),this.now=hv()}async start(){return await sv()}setVolume(e){this.volume.volume.value=Mu(e)}setHarmonicity(e){this.synth.set({harmonicity:e})}setModulationIndex(e){this.synth.set({modulationIndex:e})}setRoomSize(e){this.freeverb.set({roomSize:e})}setRelease(e){this.synth.set({envelope:{release:e}})}getLevel(){return rv(this.meter.getValue())}play(e,t){this.synth.triggerAttackRelease(e,t)}mapRange(e,t,n,i,r){return(e-t)*(r-i)/(n-t)+i}sigmoid(e){return 1/(1+Math.exp(-e))}}class E2{constructor(e,t,n){this.synth=new Cf({url:"../audio/pad1.wav",loop:!1,detune:e*100,grainSize:t,playbackRate:t,overlap:.05}).toDestination(),this.volume=new ur(0).chain(dv()),this.synth.connect(this.volume),this.now=hv()}async startup(){return await sv()}setVolume(e){this.volume.volume.value=Mu(e)}setHarmonicity(e){this.synth.set({harmonicity:e})}setModulationIndex(e){this.synth.set({modulationIndex:e})}setRelease(e){this.synth.set({envelope:{release:e}})}play(){this.synth.start(),setTimeout(()=>{this.synth.stop()},1e3)}}window.onload=function(){document.getElementById("loading-screen").style.display="none"};const ca=new rE,i_=new aE,es=new _i(75,window.innerWidth/400,.1,1e3),w2=document.getElementById("threeCan"),la=new ng({canvas:w2,alpha:!0});la.toneMapping=L_;la.toneMappingExposure=.3;la.setSize(window.innerWidth,window.innerHeight);const Ni=new M2(3,4,50),Wo=new E2(3,4,50),s_=document.getElementById("play-sound");s_.addEventListener("click",async()=>{await Ni.start(),await Wo.startup(),s_.innerText="Sound is ready",console.log("audio is ready")});const b2=document.getElementById("volume-slider");Ni.setVolume(.2);Wo.setVolume(.2);b2.addEventListener("input",s=>{const e=s.target.value;Ni.setVolume(e),Wo.setVolume(e)});const D2=document.getElementById("x-icon");D2.addEventListener("click",()=>{const s=document.getElementById("audioPopup");s.style.display="none"});let wa=-6;const A2=new oE,tu=new dt;function C2(s){s.preventDefault(),tu.x=s.clientX/window.innerWidth*2-1,tu.y=-(s.clientY/window.innerHeight)*2+1}let R2=0;const ws={time:{type:"f",value:0},uBigWavesElevation:{value:.2},uBigWavesFrequency:{value:new dt(4,1.5)},uBigWavesSpeed:{value:.75},uSmallWavesElevation:{value:.15},uSmallWavesFrequency:{value:3},uSmallWavesSpeed:{value:.2},uSmallIterations:{value:4},resolution:{type:"v2",value:new dt(window.innerWidth,window.innerHeight)},uMouse:{value:tu},uAudioLevel:{type:"f",value:R2}},fv=new zi({uniforms:ws,vertexShader:uE,fragmentShader:cE}),Hf=new zi({uniforms:ws,vertexShader:Rd,fragmentShader:lE}),pv=new zi({uniforms:ws,vertexShader:Rd,fragmentShader:hE}),P2=new zi({uniforms:ws,vertexShader:Rd,fragmentShader:dE}),L2=s=>s%3===0?pv:s%2===0?Hf:fv;for(let s=0;s<30;s++){const e=new xc(1,30,30,8),t=new xi(e,L2(s));t.position.set(Math.sin(Math.pow(wa,2))*2+Math.pow(wa,2),Math.pow(wa,2),(wa-1)*2),t.scale.set(s*.05,s*.05,s*.05),t.rotation.set(Math.PI/2,Math.PI/2,Math.PI/2),t.name=`sphere${s}`,ca.add(t),wa+=.2}const r_=[fv,Hf,pv],qa=new xi(new xc(3,32,32),Hf),Iu=new xi(new uu(100,100,100,100),P2);Iu.name="plane";Iu.position.set(-30,0,-40);Iu.rotation.y=-Math.PI/32;ca.add(qa,Iu);qa.position.setX(-10);function F2(){const s=new xc(1,24,24),e=new xi(s,r_[Math.floor(Math.random()*r_.length)]),[t,n,i]=Array(3).fill().map(()=>ty.randFloatSpread(100));e.position.set(t,n,i),ca.add(e)}Array(200).fill().forEach(F2);es.position.z=20;es.position.y=5;es.lookAt(ca.getObjectByName("sphere29").position);function mv(){const s=document.body.getBoundingClientRect().top;qa.rotation.x+=.005,qa.rotation.y+=.0075,qa.rotation.z+=.005,es.position.z=s*-.01,es.position.x=s*-2e-4,es.rotation.y=s*-2e-4}document.body.onscroll=mv;mv();const Mo={width:window.innerWidth,height:window.innerHeight};document.addEventListener("mousemove",C2,!1);window.addEventListener("resize",()=>{Mo.width=window.innerWidth,Mo.height=window.innerHeight,es.aspect=Mo.width/Mo.height,es.updateProjectionMatrix(),la.setSize(Mo.width,Mo.height),la.setPixelRatio(Math.min(window.devicePixelRatio,2))});const N2=new _E;function _v(s){N2.raf(s),requestAnimationFrame(_v)}let rn;function Mh(s,e=!0){return s.name==="plane"?null:e?xn.to(s.scale,{x:2+ws.uAudioLevel.value*2,y:2+ws.uAudioLevel.value*2,z:2+ws.uAudioLevel.value*2,duration:.5}):xn.to(s.scale,{x:1,y:1,z:1,duration:.5})}const I2=[Ni],o_=()=>{let s;I2.map(e=>{e.setHarmonicity(Math.abs(rn.position.z)),e.setModulationIndex(Math.abs(rn.position.z));const t=Math.abs(rn.position.y)*1e3;s=Ni.mapRange(t,0,1e4,200,800),console.log(Math.abs(Ni.mapRange(Math.abs(rn.position.x),0,30,1,0))),e.setRoomSize(Math.abs(Ni.mapRange(Math.abs(rn.position.x),0,30,1,0))),e.setRelease(Math.abs(Ni.mapRange(Math.abs(rn.position.x),0,30,1,0))*2)}),Wo.setHarmonicity(Math.abs(rn.position.z)),console.log(Math.abs(rn.position.z)*100),Wo.setModulationIndex(Math.abs(rn.position.z)),Wo.setRelease(Math.abs(Ni.mapRange(Math.abs(rn.position.x),0,30,1,0))*2),Ni.play(s,"8n")};function gv(){requestAnimationFrame(_v),requestAnimationFrame(gv);const s=A2.getElapsedTime();i_.setFromCamera(tu,es);const e=i_.intersectObjects(ca.children);e.length>0?(rn&&rn!==e[0].object&&(Mh(rn,!1),o_()),Mh(e[0].object,!0),rn=e[0].object):rn&&(Mh(rn,!1),o_(),rn=null),ws.uAudioLevel.value=Ni.getLevel(),ws.time.value=s,la.render(ca,es)}gv();function a_(s,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(s,n.key,n)}}function O2(s,e,t){return e&&a_(s.prototype,e),t&&a_(s,t),s}/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var an,Dl,ii,qs,Xs,Ho,vv,Sr,Xa,xv,Ts,Pi,yv,Sv=function(){return an||typeof window<"u"&&(an=window.gsap)&&an.registerPlugin&&an},Tv=1,Oo=[],nt=[],ts=[],Ya=Date.now,pd=function(e,t){return t},U2=function(){var e=Xa.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,nt),i.push.apply(i,ts),nt=n,ts=i,pd=function(a,o){return t[a](o)}},Ks=function(e,t){return~ts.indexOf(e)&&ts[ts.indexOf(e)+1][t]},ja=function(e){return!!~xv.indexOf(e)},Tn=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:i!==!1,capture:!!r})},Sn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},cl="scrollLeft",ll="scrollTop",md=function(){return Ts&&Ts.isPressed||nt.cache++},nu=function(e,t){var n=function i(r){if(r||r===0){Tv&&(ii.history.scrollRestoration="manual");var a=Ts&&Ts.isPressed;r=i.v=Math.round(r)||(Ts&&Ts.iOS?1:0),e(r),i.cacheID=nt.cache,a&&pd("ss",r)}else(t||nt.cache!==i.cacheID||pd("ref"))&&(i.cacheID=nt.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Pn={s:cl,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:nu(function(s){return arguments.length?ii.scrollTo(s,jt.sc()):ii.pageXOffset||qs[cl]||Xs[cl]||Ho[cl]||0})},jt={s:ll,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Pn,sc:nu(function(s){return arguments.length?ii.scrollTo(Pn.sc(),s):ii.pageYOffset||qs[ll]||Xs[ll]||Ho[ll]||0})},Un=function(e,t){return(t&&t._ctx&&t._ctx.selector||an.utils.toArray)(e)[0]||(typeof e=="string"&&an.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},rr=function(e,t){var n=t.s,i=t.sc;ja(e)&&(e=qs.scrollingElement||Xs);var r=nt.indexOf(e),a=i===jt.sc?1:2;!~r&&(r=nt.push(e)-1),nt[r+a]||Tn(e,"scroll",md);var o=nt[r+a],c=o||(nt[r+a]=nu(Ks(e,n),!0)||(ja(e)?i:nu(function(l){return arguments.length?e[n]=l:e[n]})));return c.target=e,o||(c.smooth=an.getProperty(e,"scrollBehavior")==="smooth"),c},_d=function(e,t,n){var i=e,r=e,a=Ya(),o=a,c=t||50,l=Math.max(500,c*3),u=function(_,m){var g=Ya();m||g-a>c?(r=i,i=_,o=a,a=g):n?i+=_:i=r+(_-r)/(g-o)*(a-o)},h=function(){r=i=n?0:i,o=a=0},d=function(_){var m=o,g=r,p=Ya();return(_||_===0)&&_!==i&&u(_),a===o||p-o>l?0:(i+(n?g:-g))/((n?p:a)-m)*1e3};return{update:u,reset:h,getVelocity:d}},ba=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},c_=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},Mv=function(){Xa=an.core.globals().ScrollTrigger,Xa&&Xa.core&&U2()},Ev=function(e){return an=e||Sv(),!Dl&&an&&typeof document<"u"&&document.body&&(ii=window,qs=document,Xs=qs.documentElement,Ho=qs.body,xv=[ii,qs,Xs,Ho],an.utils.clamp,yv=an.core.context||function(){},Sr="onpointerenter"in Ho?"pointer":"mouse",vv=kt.isTouch=ii.matchMedia&&ii.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in ii||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Pi=kt.eventTypes=("ontouchstart"in Xs?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Xs?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Tv=0},500),Mv(),Dl=1),Dl};Pn.op=jt;nt.cache=0;var kt=function(){function s(t){this.init(t)}var e=s.prototype;return e.init=function(n){Dl||Ev(an)||console.warn("Please gsap.registerPlugin(Observer)"),Xa||Mv();var i=n.tolerance,r=n.dragMinimum,a=n.type,o=n.target,c=n.lineHeight,l=n.debounce,u=n.preventDefault,h=n.onStop,d=n.onStopDelay,f=n.ignore,_=n.wheelSpeed,m=n.event,g=n.onDragStart,p=n.onDragEnd,S=n.onDrag,y=n.onPress,T=n.onRelease,v=n.onRight,M=n.onLeft,E=n.onUp,b=n.onDown,x=n.onChangeX,w=n.onChangeY,F=n.onChange,R=n.onToggleX,L=n.onToggleY,N=n.onHover,k=n.onHoverEnd,z=n.onMove,U=n.ignoreCheck,V=n.isNormalizer,H=n.onGestureStart,D=n.onGestureEnd,te=n.onWheel,ee=n.onEnable,q=n.onDisable,Y=n.onClick,J=n.scrollSpeed,se=n.capture,O=n.allowClicks,ie=n.lockAxis,Se=n.onLockAxis;this.target=o=Un(o)||Xs,this.vars=n,f&&(f=an.utils.toArray(f)),i=i||1e-9,r=r||0,_=_||1,J=J||1,a=a||"wheel,touch,pointer",l=l!==!1,c||(c=parseFloat(ii.getComputedStyle(Ho).lineHeight)||22);var ce,ye,Ve,ue,Re,oe,de,W=this,Le=0,xe=0,Oe=n.passive||!u,Ge=rr(o,Pn),P=rr(o,jt),A=Ge(),Z=P(),ne=~a.indexOf("touch")&&!~a.indexOf("pointer")&&Pi[0]==="pointerdown",ae=ja(o),le=o.ownerDocument||qs,Pe=[0,0,0],_e=[0,0,0],Q=0,Ae=function(){return Q=Ya()},ge=function(De,$e){return(W.event=De)&&f&&~f.indexOf(De.target)||$e&&ne&&De.pointerType!=="touch"||U&&U(De,$e)},Ue=function(){W._vx.reset(),W._vy.reset(),ye.pause(),h&&h(W)},ve=function(){var De=W.deltaX=c_(Pe),$e=W.deltaY=c_(_e),pe=Math.abs(De)>=i,qe=Math.abs($e)>=i;F&&(pe||qe)&&F(W,De,$e,Pe,_e),pe&&(v&&W.deltaX>0&&v(W),M&&W.deltaX<0&&M(W),x&&x(W),R&&W.deltaX<0!=Le<0&&R(W),Le=W.deltaX,Pe[0]=Pe[1]=Pe[2]=0),qe&&(b&&W.deltaY>0&&b(W),E&&W.deltaY<0&&E(W),w&&w(W),L&&W.deltaY<0!=xe<0&&L(W),xe=W.deltaY,_e[0]=_e[1]=_e[2]=0),(ue||Ve)&&(z&&z(W),Ve&&(S(W),Ve=!1),ue=!1),oe&&!(oe=!1)&&Se&&Se(W),Re&&(te(W),Re=!1),ce=0},be=function(De,$e,pe){Pe[pe]+=De,_e[pe]+=$e,W._vx.update(De),W._vy.update($e),l?ce||(ce=requestAnimationFrame(ve)):ve()},Ze=function(De,$e){ie&&!de&&(W.axis=de=Math.abs(De)>Math.abs($e)?"x":"y",oe=!0),de!=="y"&&(Pe[2]+=De,W._vx.update(De,!0)),de!=="x"&&(_e[2]+=$e,W._vy.update($e,!0)),l?ce||(ce=requestAnimationFrame(ve)):ve()},tt=function(De){if(!ge(De,1)){De=ba(De,u);var $e=De.clientX,pe=De.clientY,qe=$e-W.x,ze=pe-W.y,Xe=W.isDragging;W.x=$e,W.y=pe,(Xe||Math.abs(W.startX-$e)>=r||Math.abs(W.startY-pe)>=r)&&(S&&(Ve=!0),Xe||(W.isDragging=!0),Ze(qe,ze),Xe||g&&g(W))}},ht=W.onPress=function(we){ge(we,1)||we&&we.button||(W.axis=de=null,ye.pause(),W.isPressed=!0,we=ba(we),Le=xe=0,W.startX=W.x=we.clientX,W.startY=W.y=we.clientY,W._vx.reset(),W._vy.reset(),Tn(V?o:le,Pi[1],tt,Oe,!0),W.deltaX=W.deltaY=0,y&&y(W))},I=W.onRelease=function(we){if(!ge(we,1)){Sn(V?o:le,Pi[1],tt,!0);var De=!isNaN(W.y-W.startY),$e=W.isDragging,pe=$e&&(Math.abs(W.x-W.startX)>3||Math.abs(W.y-W.startY)>3),qe=ba(we);!pe&&De&&(W._vx.reset(),W._vy.reset(),u&&O&&an.delayedCall(.08,function(){if(Ya()-Q>300&&!we.defaultPrevented){if(we.target.click)we.target.click();else if(le.createEvent){var ze=le.createEvent("MouseEvents");ze.initMouseEvent("click",!0,!0,ii,1,qe.screenX,qe.screenY,qe.clientX,qe.clientY,!1,!1,!1,!1,0,null),we.target.dispatchEvent(ze)}}})),W.isDragging=W.isGesturing=W.isPressed=!1,h&&$e&&!V&&ye.restart(!0),p&&$e&&p(W),T&&T(W,pe)}},K=function(De){return De.touches&&De.touches.length>1&&(W.isGesturing=!0)&&H(De,W.isDragging)},re=function(){return(W.isGesturing=!1)||D(W)},fe=function(De){if(!ge(De)){var $e=Ge(),pe=P();be(($e-A)*J,(pe-Z)*J,1),A=$e,Z=pe,h&&ye.restart(!0)}},Te=function(De){if(!ge(De)){De=ba(De,u),te&&(Re=!0);var $e=(De.deltaMode===1?c:De.deltaMode===2?ii.innerHeight:1)*_;be(De.deltaX*$e,De.deltaY*$e,0),h&&!V&&ye.restart(!0)}},rt=function(De){if(!ge(De)){var $e=De.clientX,pe=De.clientY,qe=$e-W.x,ze=pe-W.y;W.x=$e,W.y=pe,ue=!0,h&&ye.restart(!0),(qe||ze)&&Ze(qe,ze)}},lt=function(De){W.event=De,N(W)},_t=function(De){W.event=De,k(W)},In=function(De){return ge(De)||ba(De,u)&&Y(W)};ye=W._dc=an.delayedCall(d||.25,Ue).pause(),W.deltaX=W.deltaY=0,W._vx=_d(0,50,!0),W._vy=_d(0,50,!0),W.scrollX=Ge,W.scrollY=P,W.isDragging=W.isGesturing=W.isPressed=!1,yv(this),W.enable=function(we){return W.isEnabled||(Tn(ae?le:o,"scroll",md),a.indexOf("scroll")>=0&&Tn(ae?le:o,"scroll",fe,Oe,se),a.indexOf("wheel")>=0&&Tn(o,"wheel",Te,Oe,se),(a.indexOf("touch")>=0&&vv||a.indexOf("pointer")>=0)&&(Tn(o,Pi[0],ht,Oe,se),Tn(le,Pi[2],I),Tn(le,Pi[3],I),O&&Tn(o,"click",Ae,!0,!0),Y&&Tn(o,"click",In),H&&Tn(le,"gesturestart",K),D&&Tn(le,"gestureend",re),N&&Tn(o,Sr+"enter",lt),k&&Tn(o,Sr+"leave",_t),z&&Tn(o,Sr+"move",rt)),W.isEnabled=!0,we&&we.type&&ht(we),ee&&ee(W)),W},W.disable=function(){W.isEnabled&&(Oo.filter(function(we){return we!==W&&ja(we.target)}).length||Sn(ae?le:o,"scroll",md),W.isPressed&&(W._vx.reset(),W._vy.reset(),Sn(V?o:le,Pi[1],tt,!0)),Sn(ae?le:o,"scroll",fe,se),Sn(o,"wheel",Te,se),Sn(o,Pi[0],ht,se),Sn(le,Pi[2],I),Sn(le,Pi[3],I),Sn(o,"click",Ae,!0),Sn(o,"click",In),Sn(le,"gesturestart",K),Sn(le,"gestureend",re),Sn(o,Sr+"enter",lt),Sn(o,Sr+"leave",_t),Sn(o,Sr+"move",rt),W.isEnabled=W.isPressed=W.isDragging=!1,q&&q(W))},W.kill=W.revert=function(){W.disable();var we=Oo.indexOf(W);we>=0&&Oo.splice(we,1),Ts===W&&(Ts=0)},Oo.push(W),V&&ja(o)&&(Ts=W),W.enable(m)},O2(s,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),s}();kt.version="3.12.5";kt.create=function(s){return new kt(s)};kt.register=Ev;kt.getAll=function(){return Oo.slice()};kt.getById=function(s){return Oo.filter(function(e){return e.vars.id===s})[0]};Sv()&&an.registerPlugin(kt);/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ee,Ao,ot,Ct,Ii,St,wv,iu,pc,$a,La,ul,pn,Ou,gd,wn,l_,u_,Co,bv,Eh,Dv,En,vd,Av,Cv,Bs,xd,qf,qo,Xf,su,yd,wh,hl=1,mn=Date.now,bh=mn(),Ei=0,Fa=0,h_=function(e,t,n){var i=Qn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},d_=function(e,t){return t&&(!Qn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},k2=function s(){return Fa&&requestAnimationFrame(s)},f_=function(){return Ou=1},p_=function(){return Ou=0},Xi=function(e){return e},Na=function(e){return Math.round(e*1e5)/1e5||0},Rv=function(){return typeof window<"u"},Pv=function(){return Ee||Rv()&&(Ee=window.gsap)&&Ee.registerPlugin&&Ee},Jr=function(e){return!!~wv.indexOf(e)},Lv=function(e){return(e==="Height"?Xf:ot["inner"+e])||Ii["client"+e]||St["client"+e]},Fv=function(e){return Ks(e,"getBoundingClientRect")||(Jr(e)?function(){return Ll.width=ot.innerWidth,Ll.height=Xf,Ll}:function(){return Ss(e)})},z2=function(e,t,n){var i=n.d,r=n.d2,a=n.a;return(a=Ks(e,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(t?Lv(r):e["client"+r])||0}},B2=function(e,t){return!t||~ts.indexOf(e)?Fv(e):function(){return Ll}},Zi=function(e,t){var n=t.s,i=t.d2,r=t.d,a=t.a;return Math.max(0,(n="scroll"+i)&&(a=Ks(e,n))?a()-Fv(e)()[r]:Jr(e)?(Ii[n]||St[n])-Lv(i):e[n]-e["offset"+i])},dl=function(e,t){for(var n=0;n<Co.length;n+=3)(!t||~t.indexOf(Co[n+1]))&&e(Co[n],Co[n+1],Co[n+2])},Qn=function(e){return typeof e=="string"},Ln=function(e){return typeof e=="function"},Ia=function(e){return typeof e=="number"},Tr=function(e){return typeof e=="object"},Da=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Dh=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},Eo=Math.abs,Nv="left",Iv="top",Yf="right",jf="bottom",Vr="width",Gr="height",Za="Right",Ka="Left",Ja="Top",Qa="Bottom",Wt="padding",gi="margin",ua="Width",$f="Height",Yt="px",vi=function(e){return ot.getComputedStyle(e)},V2=function(e){var t=vi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},m_=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Ss=function(e,t){var n=t&&vi(e)[gd]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ee.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},ru=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},Ov=function(e){var t=[],n=e.labels,i=e.duration(),r;for(r in n)t.push(n[r]/i);return t},G2=function(e){return function(t){return Ee.utils.snap(Ov(e),t)}},Zf=function(e){var t=Ee.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,r){return i-r});return n?function(i,r,a){a===void 0&&(a=.001);var o;if(!r)return t(i);if(r>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,r,a){a===void 0&&(a=.001);var o=t(i);return!r||Math.abs(o-i)<a||o-i<0==r<0?o:t(r<0?i-e:i+e)}},W2=function(e){return function(t,n){return Zf(Ov(e))(t,n.direction)}},fl=function(e,t,n,i){return n.split(",").forEach(function(r){return e(t,r,i)})},en=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:!i,capture:!!r})},Qt=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},pl=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},__={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},ml={toggleActions:"play",anticipatePin:0},ou={top:0,left:0,center:.5,bottom:1,right:1},Al=function(e,t){if(Qn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in ou?ou[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},_l=function(e,t,n,i,r,a,o,c){var l=r.startColor,u=r.endColor,h=r.fontSize,d=r.indent,f=r.fontWeight,_=Ct.createElement("div"),m=Jr(n)||Ks(n,"pinType")==="fixed",g=e.indexOf("scroller")!==-1,p=m?St:n,S=e.indexOf("start")!==-1,y=S?l:u,T="border-color:"+y+";font-size:"+h+";color:"+y+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return T+="position:"+((g||c)&&m?"fixed;":"absolute;"),(g||c||!m)&&(T+=(i===jt?Yf:jf)+":"+(a+parseFloat(d))+"px;"),o&&(T+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),_._isStart=S,_.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),_.style.cssText=T,_.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(_,p.children[0]):p.appendChild(_),_._offset=_["offset"+i.op.d2],Cl(_,0,i,S),_},Cl=function(e,t,n,i){var r={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];e._isFlipped=i,r[n.a+"Percent"]=i?-100:0,r[n.a]=i?"1px":0,r["border"+a+ua]=1,r["border"+o+ua]=0,r[n.p]=t+"px",Ee.set(e,r)},et=[],Sd={},mc,g_=function(){return mn()-Ei>34&&(mc||(mc=requestAnimationFrame(bs)))},wo=function(){(!En||!En.isPressed||En.startX>St.clientWidth)&&(nt.cache++,En?mc||(mc=requestAnimationFrame(bs)):bs(),Ei||eo("scrollStart"),Ei=mn())},Ah=function(){Cv=ot.innerWidth,Av=ot.innerHeight},Oa=function(){nt.cache++,!pn&&!Dv&&!Ct.fullscreenElement&&!Ct.webkitFullscreenElement&&(!vd||Cv!==ot.innerWidth||Math.abs(ot.innerHeight-Av)>ot.innerHeight*.25)&&iu.restart(!0)},Qr={},H2=[],Uv=function s(){return Qt(st,"scrollEnd",s)||Rr(!0)},eo=function(e){return Qr[e]&&Qr[e].map(function(t){return t()})||H2},Jn=[],kv=function(e){for(var t=0;t<Jn.length;t+=5)(!e||Jn[t+4]&&Jn[t+4].query===e)&&(Jn[t].style.cssText=Jn[t+1],Jn[t].getBBox&&Jn[t].setAttribute("transform",Jn[t+2]||""),Jn[t+3].uncache=1)},Kf=function(e,t){var n;for(wn=0;wn<et.length;wn++)n=et[wn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));su=!0,t&&kv(t),t||eo("revert")},zv=function(e,t){nt.cache++,(t||!bn)&&nt.forEach(function(n){return Ln(n)&&n.cacheID++&&(n.rec=0)}),Qn(e)&&(ot.history.scrollRestoration=qf=e)},bn,Wr=0,v_,q2=function(){if(v_!==Wr){var e=v_=Wr;requestAnimationFrame(function(){return e===Wr&&Rr(!0)})}},Bv=function(){St.appendChild(qo),Xf=!En&&qo.offsetHeight||ot.innerHeight,St.removeChild(qo)},x_=function(e){return pc(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Rr=function(e,t){if(Ei&&!e&&!su){en(st,"scrollEnd",Uv);return}Bv(),bn=st.isRefreshing=!0,nt.forEach(function(i){return Ln(i)&&++i.cacheID&&(i.rec=i())});var n=eo("refreshInit");bv&&st.sort(),t||Kf(),nt.forEach(function(i){Ln(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),et.slice(0).forEach(function(i){return i.refresh()}),su=!1,et.forEach(function(i){if(i._subPinOffset&&i.pin){var r=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[r];i.revert(!0,1),i.adjustPinSpacing(i.pin[r]-a),i.refresh()}}),yd=1,x_(!0),et.forEach(function(i){var r=Zi(i.scroller,i._dir),a=i.vars.end==="max"||i._endClamp&&i.end>r,o=i._startClamp&&i.start>=r;(a||o)&&i.setPositions(o?r-1:i.start,a?Math.max(o?r:i.start+1,r):i.end,!0)}),x_(!1),yd=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),nt.forEach(function(i){Ln(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),zv(qf,1),iu.pause(),Wr++,bn=2,bs(2),et.forEach(function(i){return Ln(i.vars.onRefresh)&&i.vars.onRefresh(i)}),bn=st.isRefreshing=!1,eo("refresh")},Td=0,Rl=1,ec,bs=function(e){if(e===2||!bn&&!su){st.isUpdating=!0,ec&&ec.update(0);var t=et.length,n=mn(),i=n-bh>=50,r=t&&et[0].scroll();if(Rl=Td>r?-1:1,bn||(Td=r),i&&(Ei&&!Ou&&n-Ei>200&&(Ei=0,eo("scrollEnd")),La=bh,bh=n),Rl<0){for(wn=t;wn-- >0;)et[wn]&&et[wn].update(0,i);Rl=1}else for(wn=0;wn<t;wn++)et[wn]&&et[wn].update(0,i);st.isUpdating=!1}mc=0},Md=[Nv,Iv,jf,Yf,gi+Qa,gi+Za,gi+Ja,gi+Ka,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Pl=Md.concat([Vr,Gr,"boxSizing","max"+ua,"max"+$f,"position",gi,Wt,Wt+Ja,Wt+Za,Wt+Qa,Wt+Ka]),X2=function(e,t,n){Xo(n);var i=e._gsap;if(i.spacerIsNative)Xo(i.spacerState);else if(e._gsap.swappedIn){var r=t.parentNode;r&&(r.insertBefore(e,t),r.removeChild(t))}e._gsap.swappedIn=!1},Ch=function(e,t,n,i){if(!e._gsap.swappedIn){for(var r=Md.length,a=t.style,o=e.style,c;r--;)c=Md[r],a[c]=n[c];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[jf]=o[Yf]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[Vr]=ru(e,Pn)+Yt,a[Gr]=ru(e,jt)+Yt,a[Wt]=o[gi]=o[Iv]=o[Nv]="0",Xo(i),o[Vr]=o["max"+ua]=n[Vr],o[Gr]=o["max"+$f]=n[Gr],o[Wt]=n[Wt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},Y2=/([A-Z])/g,Xo=function(e){if(e){var t=e.t.style,n=e.length,i=0,r,a;for((e.t._gsap||Ee.core.getCache(e.t)).uncache=1;i<n;i+=2)a=e[i+1],r=e[i],a?t[r]=a:t[r]&&t.removeProperty(r.replace(Y2,"-$1").toLowerCase())}},gl=function(e){for(var t=Pl.length,n=e.style,i=[],r=0;r<t;r++)i.push(Pl[r],n[Pl[r]]);return i.t=e,i},j2=function(e,t,n){for(var i=[],r=e.length,a=n?8:0,o;a<r;a+=2)o=e[a],i.push(o,o in t?t[o]:e[a+1]);return i.t=e.t,i},Ll={left:0,top:0},y_=function(e,t,n,i,r,a,o,c,l,u,h,d,f,_){Ln(e)&&(e=e(c)),Qn(e)&&e.substr(0,3)==="max"&&(e=d+(e.charAt(4)==="="?Al("0"+e.substr(3),n):0));var m=f?f.time():0,g,p,S;if(f&&f.seek(0),isNaN(e)||(e=+e),Ia(e))f&&(e=Ee.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,d,e)),o&&Cl(o,n,i,!0);else{Ln(t)&&(t=t(c));var y=(e||"0").split(" "),T,v,M,E;S=Un(t,c)||St,T=Ss(S)||{},(!T||!T.left&&!T.top)&&vi(S).display==="none"&&(E=S.style.display,S.style.display="block",T=Ss(S),E?S.style.display=E:S.style.removeProperty("display")),v=Al(y[0],T[i.d]),M=Al(y[1]||"0",n),e=T[i.p]-l[i.p]-u+v+r-M,o&&Cl(o,M,i,n-M<20||o._isStart&&M>20),n-=n-M}if(_&&(c[_]=e||-.001,e<0&&(e=0)),a){var b=e+n,x=a._isStart;g="scroll"+i.d2,Cl(a,b,i,x&&b>20||!x&&(h?Math.max(St[g],Ii[g]):a.parentNode[g])<=b+1),h&&(l=Ss(o),h&&(a.style[i.op.p]=l[i.op.p]-i.op.m-a._offset+Yt))}return f&&S&&(g=Ss(S),f.seek(d),p=Ss(S),f._caScrollDist=g[i.p]-p[i.p],e=e/f._caScrollDist*d),f&&f.seek(m),f?e:Math.round(e)},$2=/(webkit|moz|length|cssText|inset)/i,S_=function(e,t,n,i){if(e.parentNode!==t){var r=e.style,a,o;if(t===St){e._stOrig=r.cssText,o=vi(e);for(a in o)!+a&&!$2.test(a)&&o[a]&&typeof r[a]=="string"&&a!=="0"&&(r[a]=o[a]);r.top=n,r.left=i}else r.cssText=e._stOrig;Ee.core.getCache(e).uncache=1,t.appendChild(e)}},Vv=function(e,t,n){var i=t,r=i;return function(a){var o=Math.round(e());return o!==i&&o!==r&&Math.abs(o-i)>3&&Math.abs(o-r)>3&&(a=o,n&&n()),r=i,i=a,a}},vl=function(e,t,n){var i={};i[t.p]="+="+n,Ee.set(e,i)},T_=function(e,t){var n=rr(e,t),i="_scroll"+t.p2,r=function a(o,c,l,u,h){var d=a.tween,f=c.onComplete,_={};l=l||n();var m=Vv(n,l,function(){d.kill(),a.tween=0});return h=u&&h||0,u=u||o-l,d&&d.kill(),c[i]=o,c.inherit=!1,c.modifiers=_,_[i]=function(){return m(l+u*d.ratio+h*d.ratio*d.ratio)},c.onUpdate=function(){nt.cache++,a.tween&&bs()},c.onComplete=function(){a.tween=0,f&&f.call(d)},d=a.tween=Ee.to(e,c),d};return e[i]=n,n.wheelHandler=function(){return r.tween&&r.tween.kill()&&(r.tween=0)},en(e,"wheel",n.wheelHandler),st.isTouch&&en(e,"touchmove",n.wheelHandler),r},st=function(){function s(t,n){Ao||s.register(Ee)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),xd(this),this.init(t,n)}var e=s.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Fa){this.update=this.refresh=this.kill=Xi;return}n=m_(Qn(n)||Ia(n)||n.nodeType?{trigger:n}:n,ml);var r=n,a=r.onUpdate,o=r.toggleClass,c=r.id,l=r.onToggle,u=r.onRefresh,h=r.scrub,d=r.trigger,f=r.pin,_=r.pinSpacing,m=r.invalidateOnRefresh,g=r.anticipatePin,p=r.onScrubComplete,S=r.onSnapComplete,y=r.once,T=r.snap,v=r.pinReparent,M=r.pinSpacer,E=r.containerAnimation,b=r.fastScrollEnd,x=r.preventOverlaps,w=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Pn:jt,F=!h&&h!==0,R=Un(n.scroller||ot),L=Ee.core.getCache(R),N=Jr(R),k=("pinType"in n?n.pinType:Ks(R,"pinType")||N&&"fixed")==="fixed",z=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],U=F&&n.toggleActions.split(" "),V="markers"in n?n.markers:ml.markers,H=N?0:parseFloat(vi(R)["border"+w.p2+ua])||0,D=this,te=n.onRefreshInit&&function(){return n.onRefreshInit(D)},ee=z2(R,N,w),q=B2(R,N),Y=0,J=0,se=0,O=rr(R,w),ie,Se,ce,ye,Ve,ue,Re,oe,de,W,Le,xe,Oe,Ge,P,A,Z,ne,ae,le,Pe,_e,Q,Ae,ge,Ue,ve,be,Ze,tt,ht,I,K,re,fe,Te,rt,lt,_t;if(D._startClamp=D._endClamp=!1,D._dir=w,g*=45,D.scroller=R,D.scroll=E?E.time.bind(E):O,ye=O(),D.vars=n,i=i||n.animation,"refreshPriority"in n&&(bv=1,n.refreshPriority===-9999&&(ec=D)),L.tweenScroll=L.tweenScroll||{top:T_(R,jt),left:T_(R,Pn)},D.tweenTo=ie=L.tweenScroll[w.p],D.scrubDuration=function(pe){K=Ia(pe)&&pe,K?I?I.duration(pe):I=Ee.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:K,paused:!0,onComplete:function(){return p&&p(D)}}):(I&&I.progress(1).kill(),I=0)},i&&(i.vars.lazy=!1,i._initted&&!D.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),D.animation=i.pause(),i.scrollTrigger=D,D.scrubDuration(h),tt=0,c||(c=i.vars.id)),T&&((!Tr(T)||T.push)&&(T={snapTo:T}),"scrollBehavior"in St.style&&Ee.set(N?[St,Ii]:R,{scrollBehavior:"auto"}),nt.forEach(function(pe){return Ln(pe)&&pe.target===(N?Ct.scrollingElement||Ii:R)&&(pe.smooth=!1)}),ce=Ln(T.snapTo)?T.snapTo:T.snapTo==="labels"?G2(i):T.snapTo==="labelsDirectional"?W2(i):T.directional!==!1?function(pe,qe){return Zf(T.snapTo)(pe,mn()-J<500?0:qe.direction)}:Ee.utils.snap(T.snapTo),re=T.duration||{min:.1,max:2},re=Tr(re)?$a(re.min,re.max):$a(re,re),fe=Ee.delayedCall(T.delay||K/2||.1,function(){var pe=O(),qe=mn()-J<500,ze=ie.tween;if((qe||Math.abs(D.getVelocity())<10)&&!ze&&!Ou&&Y!==pe){var Xe=(pe-ue)/Ge,Bt=i&&!F?i.totalProgress():Xe,C=qe?0:(Bt-ht)/(mn()-La)*1e3||0,G=Ee.utils.clamp(-Xe,1-Xe,Eo(C/2)*C/.185),j=Xe+(T.inertia===!1?0:G),B,X,he=T,Ce=he.onStart,Me=he.onInterrupt,Be=he.onComplete;if(B=ce(j,D),Ia(B)||(B=j),X=Math.round(ue+B*Ge),pe<=Re&&pe>=ue&&X!==pe){if(ze&&!ze._initted&&ze.data<=Eo(X-pe))return;T.inertia===!1&&(G=B-Xe),ie(X,{duration:re(Eo(Math.max(Eo(j-Bt),Eo(B-Bt))*.185/C/.05||0)),ease:T.ease||"power3",data:Eo(X-pe),onInterrupt:function(){return fe.restart(!0)&&Me&&Me(D)},onComplete:function(){D.update(),Y=O(),i&&(I?I.resetTo("totalProgress",B,i._tTime/i._tDur):i.progress(B)),tt=ht=i&&!F?i.totalProgress():D.progress,S&&S(D),Be&&Be(D)}},pe,G*Ge,X-pe-G*Ge),Ce&&Ce(D,ie.tween)}}else D.isActive&&Y!==pe&&fe.restart(!0)}).pause()),c&&(Sd[c]=D),d=D.trigger=Un(d||f!==!0&&f),_t=d&&d._gsap&&d._gsap.stRevert,_t&&(_t=_t(D)),f=f===!0?d:Un(f),Qn(o)&&(o={targets:d,className:o}),f&&(_===!1||_===gi||(_=!_&&f.parentNode&&f.parentNode.style&&vi(f.parentNode).display==="flex"?!1:Wt),D.pin=f,Se=Ee.core.getCache(f),Se.spacer?P=Se.pinState:(M&&(M=Un(M),M&&!M.nodeType&&(M=M.current||M.nativeElement),Se.spacerIsNative=!!M,M&&(Se.spacerState=gl(M))),Se.spacer=ne=M||Ct.createElement("div"),ne.classList.add("pin-spacer"),c&&ne.classList.add("pin-spacer-"+c),Se.pinState=P=gl(f)),n.force3D!==!1&&Ee.set(f,{force3D:!0}),D.spacer=ne=Se.spacer,Ze=vi(f),Ae=Ze[_+w.os2],le=Ee.getProperty(f),Pe=Ee.quickSetter(f,w.a,Yt),Ch(f,ne,Ze),Z=gl(f)),V){xe=Tr(V)?m_(V,__):__,W=_l("scroller-start",c,R,w,xe,0),Le=_l("scroller-end",c,R,w,xe,0,W),ae=W["offset"+w.op.d2];var In=Un(Ks(R,"content")||R);oe=this.markerStart=_l("start",c,In,w,xe,ae,0,E),de=this.markerEnd=_l("end",c,In,w,xe,ae,0,E),E&&(lt=Ee.quickSetter([oe,de],w.a,Yt)),!k&&!(ts.length&&Ks(R,"fixedMarkers")===!0)&&(V2(N?St:R),Ee.set([W,Le],{force3D:!0}),Ue=Ee.quickSetter(W,w.a,Yt),be=Ee.quickSetter(Le,w.a,Yt))}if(E){var we=E.vars.onUpdate,De=E.vars.onUpdateParams;E.eventCallback("onUpdate",function(){D.update(0,0,1),we&&we.apply(E,De||[])})}if(D.previous=function(){return et[et.indexOf(D)-1]},D.next=function(){return et[et.indexOf(D)+1]},D.revert=function(pe,qe){if(!qe)return D.kill(!0);var ze=pe!==!1||!D.enabled,Xe=pn;ze!==D.isReverted&&(ze&&(Te=Math.max(O(),D.scroll.rec||0),se=D.progress,rt=i&&i.progress()),oe&&[oe,de,W,Le].forEach(function(Bt){return Bt.style.display=ze?"none":"block"}),ze&&(pn=D,D.update(ze)),f&&(!v||!D.isActive)&&(ze?X2(f,ne,P):Ch(f,ne,vi(f),ge)),ze||D.update(ze),pn=Xe,D.isReverted=ze)},D.refresh=function(pe,qe,ze,Xe){if(!((pn||!D.enabled)&&!qe)){if(f&&pe&&Ei){en(s,"scrollEnd",Uv);return}!bn&&te&&te(D),pn=D,ie.tween&&!ze&&(ie.tween.kill(),ie.tween=0),I&&I.pause(),m&&i&&i.revert({kill:!1}).invalidate(),D.isReverted||D.revert(!0,!0),D._subPinOffset=!1;var Bt=ee(),C=q(),G=E?E.duration():Zi(R,w),j=Ge<=.01,B=0,X=Xe||0,he=Tr(ze)?ze.end:n.end,Ce=n.endTrigger||d,Me=Tr(ze)?ze.start:n.start||(n.start===0||!d?0:f?"0 0":"0 100%"),Be=D.pinnedContainer=n.pinnedContainer&&Un(n.pinnedContainer,D),We=d&&Math.max(0,et.indexOf(D))||0,Ne=We,ke,Ye,At,hn,Et,Ke,je,hr,It,Yn,jn,bi,Ns;for(V&&Tr(ze)&&(bi=Ee.getProperty(W,w.p),Ns=Ee.getProperty(Le,w.p));Ne--;)Ke=et[Ne],Ke.end||Ke.refresh(0,1)||(pn=D),je=Ke.pin,je&&(je===d||je===f||je===Be)&&!Ke.isReverted&&(Yn||(Yn=[]),Yn.unshift(Ke),Ke.revert(!0,!0)),Ke!==et[Ne]&&(We--,Ne--);for(Ln(Me)&&(Me=Me(D)),Me=h_(Me,"start",D),ue=y_(Me,d,Bt,w,O(),oe,W,D,C,H,k,G,E,D._startClamp&&"_startClamp")||(f?-.001:0),Ln(he)&&(he=he(D)),Qn(he)&&!he.indexOf("+=")&&(~he.indexOf(" ")?he=(Qn(Me)?Me.split(" ")[0]:"")+he:(B=Al(he.substr(2),Bt),he=Qn(Me)?Me:(E?Ee.utils.mapRange(0,E.duration(),E.scrollTrigger.start,E.scrollTrigger.end,ue):ue)+B,Ce=d)),he=h_(he,"end",D),Re=Math.max(ue,y_(he||(Ce?"100% 0":G),Ce,Bt,w,O()+B,de,Le,D,C,H,k,G,E,D._endClamp&&"_endClamp"))||-.001,B=0,Ne=We;Ne--;)Ke=et[Ne],je=Ke.pin,je&&Ke.start-Ke._pinPush<=ue&&!E&&Ke.end>0&&(ke=Ke.end-(D._startClamp?Math.max(0,Ke.start):Ke.start),(je===d&&Ke.start-Ke._pinPush<ue||je===Be)&&isNaN(Me)&&(B+=ke*(1-Ke.progress)),je===f&&(X+=ke));if(ue+=B,Re+=B,D._startClamp&&(D._startClamp+=B),D._endClamp&&!bn&&(D._endClamp=Re||-.001,Re=Math.min(Re,Zi(R,w))),Ge=Re-ue||(ue-=.01)&&.001,j&&(se=Ee.utils.clamp(0,1,Ee.utils.normalize(ue,Re,Te))),D._pinPush=X,oe&&B&&(ke={},ke[w.a]="+="+B,Be&&(ke[w.p]="-="+O()),Ee.set([oe,de],ke)),f&&!(yd&&D.end>=Zi(R,w)))ke=vi(f),hn=w===jt,At=O(),_e=parseFloat(le(w.a))+X,!G&&Re>1&&(jn=(N?Ct.scrollingElement||Ii:R).style,jn={style:jn,value:jn["overflow"+w.a.toUpperCase()]},N&&vi(St)["overflow"+w.a.toUpperCase()]!=="scroll"&&(jn.style["overflow"+w.a.toUpperCase()]="scroll")),Ch(f,ne,ke),Z=gl(f),Ye=Ss(f,!0),hr=k&&rr(R,hn?Pn:jt)(),_?(ge=[_+w.os2,Ge+X+Yt],ge.t=ne,Ne=_===Wt?ru(f,w)+Ge+X:0,Ne&&(ge.push(w.d,Ne+Yt),ne.style.flexBasis!=="auto"&&(ne.style.flexBasis=Ne+Yt)),Xo(ge),Be&&et.forEach(function(Ot){Ot.pin===Be&&Ot.vars.pinSpacing!==!1&&(Ot._subPinOffset=!0)}),k&&O(Te)):(Ne=ru(f,w),Ne&&ne.style.flexBasis!=="auto"&&(ne.style.flexBasis=Ne+Yt)),k&&(Et={top:Ye.top+(hn?At-ue:hr)+Yt,left:Ye.left+(hn?hr:At-ue)+Yt,boxSizing:"border-box",position:"fixed"},Et[Vr]=Et["max"+ua]=Math.ceil(Ye.width)+Yt,Et[Gr]=Et["max"+$f]=Math.ceil(Ye.height)+Yt,Et[gi]=Et[gi+Ja]=Et[gi+Za]=Et[gi+Qa]=Et[gi+Ka]="0",Et[Wt]=ke[Wt],Et[Wt+Ja]=ke[Wt+Ja],Et[Wt+Za]=ke[Wt+Za],Et[Wt+Qa]=ke[Wt+Qa],Et[Wt+Ka]=ke[Wt+Ka],A=j2(P,Et,v),bn&&O(0)),i?(It=i._initted,Eh(1),i.render(i.duration(),!0,!0),Q=le(w.a)-_e+Ge+X,ve=Math.abs(Ge-Q)>1,k&&ve&&A.splice(A.length-2,2),i.render(0,!0,!0),It||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Eh(0)):Q=Ge,jn&&(jn.value?jn.style["overflow"+w.a.toUpperCase()]=jn.value:jn.style.removeProperty("overflow-"+w.a));else if(d&&O()&&!E)for(Ye=d.parentNode;Ye&&Ye!==St;)Ye._pinOffset&&(ue-=Ye._pinOffset,Re-=Ye._pinOffset),Ye=Ye.parentNode;Yn&&Yn.forEach(function(Ot){return Ot.revert(!1,!0)}),D.start=ue,D.end=Re,ye=Ve=bn?Te:O(),!E&&!bn&&(ye<Te&&O(Te),D.scroll.rec=0),D.revert(!1,!0),J=mn(),fe&&(Y=-1,fe.restart(!0)),pn=0,i&&F&&(i._initted||rt)&&i.progress()!==rt&&i.progress(rt||0,!0).render(i.time(),!0,!0),(j||se!==D.progress||E||m)&&(i&&!F&&i.totalProgress(E&&ue<-.001&&!se?Ee.utils.normalize(ue,Re,0):se,!0),D.progress=j||(ye-ue)/Ge===se?0:se),f&&_&&(ne._pinOffset=Math.round(D.progress*Q)),I&&I.invalidate(),isNaN(bi)||(bi-=Ee.getProperty(W,w.p),Ns-=Ee.getProperty(Le,w.p),vl(W,w,bi),vl(oe,w,bi-(Xe||0)),vl(Le,w,Ns),vl(de,w,Ns-(Xe||0))),j&&!bn&&D.update(),u&&!bn&&!Oe&&(Oe=!0,u(D),Oe=!1)}},D.getVelocity=function(){return(O()-Ve)/(mn()-La)*1e3||0},D.endAnimation=function(){Da(D.callbackAnimation),i&&(I?I.progress(1):i.paused()?F||Da(i,D.direction<0,1):Da(i,i.reversed()))},D.labelToScroll=function(pe){return i&&i.labels&&(ue||D.refresh()||ue)+i.labels[pe]/i.duration()*Ge||0},D.getTrailing=function(pe){var qe=et.indexOf(D),ze=D.direction>0?et.slice(0,qe).reverse():et.slice(qe+1);return(Qn(pe)?ze.filter(function(Xe){return Xe.vars.preventOverlaps===pe}):ze).filter(function(Xe){return D.direction>0?Xe.end<=ue:Xe.start>=Re})},D.update=function(pe,qe,ze){if(!(E&&!ze&&!pe)){var Xe=bn===!0?Te:D.scroll(),Bt=pe?0:(Xe-ue)/Ge,C=Bt<0?0:Bt>1?1:Bt||0,G=D.progress,j,B,X,he,Ce,Me,Be,We;if(qe&&(Ve=ye,ye=E?O():Xe,T&&(ht=tt,tt=i&&!F?i.totalProgress():C)),g&&f&&!pn&&!hl&&Ei&&(!C&&ue<Xe+(Xe-Ve)/(mn()-La)*g?C=1e-4:C===1&&Re>Xe+(Xe-Ve)/(mn()-La)*g&&(C=.9999)),C!==G&&D.enabled){if(j=D.isActive=!!C&&C<1,B=!!G&&G<1,Me=j!==B,Ce=Me||!!C!=!!G,D.direction=C>G?1:-1,D.progress=C,Ce&&!pn&&(X=C&&!G?0:C===1?1:G===1?2:3,F&&(he=!Me&&U[X+1]!=="none"&&U[X+1]||U[X],We=i&&(he==="complete"||he==="reset"||he in i))),x&&(Me||We)&&(We||h||!i)&&(Ln(x)?x(D):D.getTrailing(x).forEach(function(At){return At.endAnimation()})),F||(I&&!pn&&!hl?(I._dp._time-I._start!==I._time&&I.render(I._dp._time-I._start),I.resetTo?I.resetTo("totalProgress",C,i._tTime/i._tDur):(I.vars.totalProgress=C,I.invalidate().restart())):i&&i.totalProgress(C,!!(pn&&(J||pe)))),f){if(pe&&_&&(ne.style[_+w.os2]=Ae),!k)Pe(Na(_e+Q*C));else if(Ce){if(Be=!pe&&C>G&&Re+1>Xe&&Xe+1>=Zi(R,w),v)if(!pe&&(j||Be)){var Ne=Ss(f,!0),ke=Xe-ue;S_(f,St,Ne.top+(w===jt?ke:0)+Yt,Ne.left+(w===jt?0:ke)+Yt)}else S_(f,ne);Xo(j||Be?A:Z),ve&&C<1&&j||Pe(_e+(C===1&&!Be?Q:0))}}T&&!ie.tween&&!pn&&!hl&&fe.restart(!0),o&&(Me||y&&C&&(C<1||!wh))&&pc(o.targets).forEach(function(At){return At.classList[j||y?"add":"remove"](o.className)}),a&&!F&&!pe&&a(D),Ce&&!pn?(F&&(We&&(he==="complete"?i.pause().totalProgress(1):he==="reset"?i.restart(!0).pause():he==="restart"?i.restart(!0):i[he]()),a&&a(D)),(Me||!wh)&&(l&&Me&&Dh(D,l),z[X]&&Dh(D,z[X]),y&&(C===1?D.kill(!1,1):z[X]=0),Me||(X=C===1?1:3,z[X]&&Dh(D,z[X]))),b&&!j&&Math.abs(D.getVelocity())>(Ia(b)?b:2500)&&(Da(D.callbackAnimation),I?I.progress(1):Da(i,he==="reverse"?1:!C,1))):F&&a&&!pn&&a(D)}if(be){var Ye=E?Xe/E.duration()*(E._caScrollDist||0):Xe;Ue(Ye+(W._isFlipped?1:0)),be(Ye)}lt&&lt(-Xe/E.duration()*(E._caScrollDist||0))}},D.enable=function(pe,qe){D.enabled||(D.enabled=!0,en(R,"resize",Oa),N||en(R,"scroll",wo),te&&en(s,"refreshInit",te),pe!==!1&&(D.progress=se=0,ye=Ve=Y=O()),qe!==!1&&D.refresh())},D.getTween=function(pe){return pe&&ie?ie.tween:I},D.setPositions=function(pe,qe,ze,Xe){if(E){var Bt=E.scrollTrigger,C=E.duration(),G=Bt.end-Bt.start;pe=Bt.start+G*pe/C,qe=Bt.start+G*qe/C}D.refresh(!1,!1,{start:d_(pe,ze&&!!D._startClamp),end:d_(qe,ze&&!!D._endClamp)},Xe),D.update()},D.adjustPinSpacing=function(pe){if(ge&&pe){var qe=ge.indexOf(w.d)+1;ge[qe]=parseFloat(ge[qe])+pe+Yt,ge[1]=parseFloat(ge[1])+pe+Yt,Xo(ge)}},D.disable=function(pe,qe){if(D.enabled&&(pe!==!1&&D.revert(!0,!0),D.enabled=D.isActive=!1,qe||I&&I.pause(),Te=0,Se&&(Se.uncache=1),te&&Qt(s,"refreshInit",te),fe&&(fe.pause(),ie.tween&&ie.tween.kill()&&(ie.tween=0)),!N)){for(var ze=et.length;ze--;)if(et[ze].scroller===R&&et[ze]!==D)return;Qt(R,"resize",Oa),N||Qt(R,"scroll",wo)}},D.kill=function(pe,qe){D.disable(pe,qe),I&&!qe&&I.kill(),c&&delete Sd[c];var ze=et.indexOf(D);ze>=0&&et.splice(ze,1),ze===wn&&Rl>0&&wn--,ze=0,et.forEach(function(Xe){return Xe.scroller===D.scroller&&(ze=1)}),ze||bn||(D.scroll.rec=0),i&&(i.scrollTrigger=null,pe&&i.revert({kill:!1}),qe||i.kill()),oe&&[oe,de,W,Le].forEach(function(Xe){return Xe.parentNode&&Xe.parentNode.removeChild(Xe)}),ec===D&&(ec=0),f&&(Se&&(Se.uncache=1),ze=0,et.forEach(function(Xe){return Xe.pin===f&&ze++}),ze||(Se.spacer=0)),n.onKill&&n.onKill(D)},et.push(D),D.enable(!1,!1),_t&&_t(D),i&&i.add&&!Ge){var $e=D.update;D.update=function(){D.update=$e,ue||Re||D.refresh()},Ee.delayedCall(.01,D.update),Ge=.01,ue=Re=0}else D.refresh();f&&q2()},s.register=function(n){return Ao||(Ee=n||Pv(),Rv()&&window.document&&s.enable(),Ao=Fa),Ao},s.defaults=function(n){if(n)for(var i in n)ml[i]=n[i];return ml},s.disable=function(n,i){Fa=0,et.forEach(function(a){return a[i?"kill":"disable"](n)}),Qt(ot,"wheel",wo),Qt(Ct,"scroll",wo),clearInterval(ul),Qt(Ct,"touchcancel",Xi),Qt(St,"touchstart",Xi),fl(Qt,Ct,"pointerdown,touchstart,mousedown",f_),fl(Qt,Ct,"pointerup,touchend,mouseup",p_),iu.kill(),dl(Qt);for(var r=0;r<nt.length;r+=3)pl(Qt,nt[r],nt[r+1]),pl(Qt,nt[r],nt[r+2])},s.enable=function(){if(ot=window,Ct=document,Ii=Ct.documentElement,St=Ct.body,Ee&&(pc=Ee.utils.toArray,$a=Ee.utils.clamp,xd=Ee.core.context||Xi,Eh=Ee.core.suppressOverwrites||Xi,qf=ot.history.scrollRestoration||"auto",Td=ot.pageYOffset,Ee.core.globals("ScrollTrigger",s),St)){Fa=1,qo=document.createElement("div"),qo.style.height="100vh",qo.style.position="absolute",Bv(),k2(),kt.register(Ee),s.isTouch=kt.isTouch,Bs=kt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),vd=kt.isTouch===1,en(ot,"wheel",wo),wv=[ot,Ct,Ii,St],Ee.matchMedia?(s.matchMedia=function(c){var l=Ee.matchMedia(),u;for(u in c)l.add(u,c[u]);return l},Ee.addEventListener("matchMediaInit",function(){return Kf()}),Ee.addEventListener("matchMediaRevert",function(){return kv()}),Ee.addEventListener("matchMedia",function(){Rr(0,1),eo("matchMedia")}),Ee.matchMedia("(orientation: portrait)",function(){return Ah(),Ah})):console.warn("Requires GSAP 3.11.0 or later"),Ah(),en(Ct,"scroll",wo);var n=St.style,i=n.borderTopStyle,r=Ee.core.Animation.prototype,a,o;for(r.revert||Object.defineProperty(r,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",a=Ss(St),jt.m=Math.round(a.top+jt.sc())||0,Pn.m=Math.round(a.left+Pn.sc())||0,i?n.borderTopStyle=i:n.removeProperty("border-top-style"),ul=setInterval(g_,250),Ee.delayedCall(.5,function(){return hl=0}),en(Ct,"touchcancel",Xi),en(St,"touchstart",Xi),fl(en,Ct,"pointerdown,touchstart,mousedown",f_),fl(en,Ct,"pointerup,touchend,mouseup",p_),gd=Ee.utils.checkPrefix("transform"),Pl.push(gd),Ao=mn(),iu=Ee.delayedCall(.2,Rr).pause(),Co=[Ct,"visibilitychange",function(){var c=ot.innerWidth,l=ot.innerHeight;Ct.hidden?(l_=c,u_=l):(l_!==c||u_!==l)&&Oa()},Ct,"DOMContentLoaded",Rr,ot,"load",Rr,ot,"resize",Oa],dl(en),et.forEach(function(c){return c.enable(0,1)}),o=0;o<nt.length;o+=3)pl(Qt,nt[o],nt[o+1]),pl(Qt,nt[o],nt[o+2])}},s.config=function(n){"limitCallbacks"in n&&(wh=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(ul)||(ul=i)&&setInterval(g_,i),"ignoreMobileResize"in n&&(vd=s.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(dl(Qt)||dl(en,n.autoRefreshEvents||"none"),Dv=(n.autoRefreshEvents+"").indexOf("resize")===-1)},s.scrollerProxy=function(n,i){var r=Un(n),a=nt.indexOf(r),o=Jr(r);~a&&nt.splice(a,o?6:2),i&&(o?ts.unshift(ot,i,St,i,Ii,i):ts.unshift(r,i))},s.clearMatchMedia=function(n){et.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},s.isInViewport=function(n,i,r){var a=(Qn(n)?Un(n):n).getBoundingClientRect(),o=a[r?Vr:Gr]*i||0;return r?a.right-o>0&&a.left+o<ot.innerWidth:a.bottom-o>0&&a.top+o<ot.innerHeight},s.positionInViewport=function(n,i,r){Qn(n)&&(n=Un(n));var a=n.getBoundingClientRect(),o=a[r?Vr:Gr],c=i==null?o/2:i in ou?ou[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return r?(a.left+c)/ot.innerWidth:(a.top+c)/ot.innerHeight},s.killAll=function(n){if(et.slice(0).forEach(function(r){return r.vars.id!=="ScrollSmoother"&&r.kill()}),n!==!0){var i=Qr.killAll||[];Qr={},i.forEach(function(r){return r()})}},s}();st.version="3.12.5";st.saveStyles=function(s){return s?pc(s).forEach(function(e){if(e&&e.style){var t=Jn.indexOf(e);t>=0&&Jn.splice(t,5),Jn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ee.core.getCache(e),xd())}}):Jn};st.revert=function(s,e){return Kf(!s,e)};st.create=function(s,e){return new st(s,e)};st.refresh=function(s){return s?Oa():(Ao||st.register())&&Rr(!0)};st.update=function(s){return++nt.cache&&bs(s===!0?2:0)};st.clearScrollMemory=zv;st.maxScroll=function(s,e){return Zi(s,e?Pn:jt)};st.getScrollFunc=function(s,e){return rr(Un(s),e?Pn:jt)};st.getById=function(s){return Sd[s]};st.getAll=function(){return et.filter(function(s){return s.vars.id!=="ScrollSmoother"})};st.isScrolling=function(){return!!Ei};st.snapDirectional=Zf;st.addEventListener=function(s,e){var t=Qr[s]||(Qr[s]=[]);~t.indexOf(e)||t.push(e)};st.removeEventListener=function(s,e){var t=Qr[s],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};st.batch=function(s,e){var t=[],n={},i=e.interval||.016,r=e.batchMax||1e9,a=function(l,u){var h=[],d=[],f=Ee.delayedCall(i,function(){u(h,d),h=[],d=[]}).pause();return function(_){h.length||f.restart(!0),h.push(_.trigger),d.push(_),r<=h.length&&f.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)==="on"&&Ln(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return Ln(r)&&(r=r(),en(st,"refresh",function(){return r=e.batchMax()})),pc(s).forEach(function(c){var l={};for(o in n)l[o]=n[o];l.trigger=c,t.push(st.create(l))}),t};var M_=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Rh=function s(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(kt.isTouch?" pinch-zoom":""):"none",e===Ii&&s(St,t)},xl={auto:1,scroll:1},Z2=function(e){var t=e.event,n=e.target,i=e.axis,r=(t.changedTouches?t.changedTouches[0]:t).target,a=r._gsap||Ee.core.getCache(r),o=mn(),c;if(!a._isScrollT||o-a._isScrollT>2e3){for(;r&&r!==St&&(r.scrollHeight<=r.clientHeight&&r.scrollWidth<=r.clientWidth||!(xl[(c=vi(r)).overflowY]||xl[c.overflowX]));)r=r.parentNode;a._isScroll=r&&r!==n&&!Jr(r)&&(xl[(c=vi(r)).overflowY]||xl[c.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Gv=function(e,t,n,i){return kt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&Z2,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&en(Ct,kt.eventTypes[0],w_,!1,!0)},onDisable:function(){return Qt(Ct,kt.eventTypes[0],w_,!0)}})},K2=/(input|label|select|textarea)/i,E_,w_=function(e){var t=K2.test(e.target.tagName);(t||E_)&&(e._gsapAllow=!0,E_=t)},J2=function(e){Tr(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,r=t.allowNestedScroll,a=t.onRelease,o,c,l=Un(e.target)||Ii,u=Ee.core.globals().ScrollSmoother,h=u&&u.get(),d=Bs&&(e.content&&Un(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),f=rr(l,jt),_=rr(l,Pn),m=1,g=(kt.isTouch&&ot.visualViewport?ot.visualViewport.scale*ot.visualViewport.width:ot.outerWidth)/ot.innerWidth,p=0,S=Ln(i)?function(){return i(o)}:function(){return i||2.8},y,T,v=Gv(l,e.type,!0,r),M=function(){return T=!1},E=Xi,b=Xi,x=function(){c=Zi(l,jt),b=$a(Bs?1:0,c),n&&(E=$a(0,Zi(l,Pn))),y=Wr},w=function(){d._gsap.y=Na(parseFloat(d._gsap.y)+f.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},F=function(){if(T){requestAnimationFrame(M);var V=Na(o.deltaY/2),H=b(f.v-V);if(d&&H!==f.v+f.offset){f.offset=H-f.v;var D=Na((parseFloat(d&&d._gsap.y)||0)-f.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+D+", 0, 1)",d._gsap.y=D+"px",f.cacheID=nt.cache,bs()}return!0}f.offset&&w(),T=!0},R,L,N,k,z=function(){x(),R.isActive()&&R.vars.scrollY>c&&(f()>c?R.progress(1)&&f(c):R.resetTo("scrollY",c))};return d&&Ee.set(d,{y:"+=0"}),e.ignoreCheck=function(U){return Bs&&U.type==="touchmove"&&F()||m>1.05&&U.type!=="touchstart"||o.isGesturing||U.touches&&U.touches.length>1},e.onPress=function(){T=!1;var U=m;m=Na((ot.visualViewport&&ot.visualViewport.scale||1)/g),R.pause(),U!==m&&Rh(l,m>1.01?!0:n?!1:"x"),L=_(),N=f(),x(),y=Wr},e.onRelease=e.onGestureStart=function(U,V){if(f.offset&&w(),!V)k.restart(!0);else{nt.cache++;var H=S(),D,te;n&&(D=_(),te=D+H*.05*-U.velocityX/.227,H*=M_(_,D,te,Zi(l,Pn)),R.vars.scrollX=E(te)),D=f(),te=D+H*.05*-U.velocityY/.227,H*=M_(f,D,te,Zi(l,jt)),R.vars.scrollY=b(te),R.invalidate().duration(H).play(.01),(Bs&&R.vars.scrollY>=c||D>=c-1)&&Ee.to({},{onUpdate:z,duration:H})}a&&a(U)},e.onWheel=function(){R._ts&&R.pause(),mn()-p>1e3&&(y=0,p=mn())},e.onChange=function(U,V,H,D,te){if(Wr!==y&&x(),V&&n&&_(E(D[2]===V?L+(U.startX-U.x):_()+V-D[1])),H){f.offset&&w();var ee=te[2]===H,q=ee?N+U.startY-U.y:f()+H-te[1],Y=b(q);ee&&q!==Y&&(N+=Y-q),f(Y)}(H||V)&&bs()},e.onEnable=function(){Rh(l,n?!1:"x"),st.addEventListener("refresh",z),en(ot,"resize",z),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=_.smooth=!1),v.enable()},e.onDisable=function(){Rh(l,!0),Qt(ot,"resize",z),st.removeEventListener("refresh",z),v.kill()},e.lockAxis=e.lockAxis!==!1,o=new kt(e),o.iOS=Bs,Bs&&!f()&&f(1),Bs&&Ee.ticker.add(Xi),k=o._dc,R=Ee.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Vv(f,f(),function(){return R.pause()})},onUpdate:bs,onComplete:k.vars.onComplete}),o};st.sort=function(s){return et.sort(s||function(e,t){return(e.vars.refreshPriority||0)*-1e6+e.start-(t.start+(t.vars.refreshPriority||0)*-1e6)})};st.observe=function(s){return new kt(s)};st.normalizeScroll=function(s){if(typeof s>"u")return En;if(s===!0&&En)return En.enable();if(s===!1){En&&En.kill(),En=s;return}var e=s instanceof kt?s:J2(s);return En&&En.target===e.target&&En.kill(),Jr(e.target)&&(En=e),e};st.core={_getVelocityProp:_d,_inputObserver:Gv,_scrollers:nt,_proxies:ts,bridge:{ss:function(){Ei||eo("scrollStart"),Ei=mn()},ref:function(){return pn}}};Pv()&&Ee.registerPlugin(st);/*!
 * strings: 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Q2=/(?:^\s+|\s+$)/g,eP=/([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;function Wv(s){var e=s.nodeType,t="";if(e===1||e===9||e===11){if(typeof s.textContent=="string")return s.textContent;for(s=s.firstChild;s;s=s.nextSibling)t+=Wv(s)}else if(e===3||e===4)return s.nodeValue;return t}function Ed(s,e,t,n){for(var i=s.firstChild,r=[],a;i;)i.nodeType===3?(a=(i.nodeValue+"").replace(/^\n+/g,""),n||(a=a.replace(/\s+/g," ")),r.push.apply(r,Hv(a,e,t,n))):(i.nodeName+"").toLowerCase()==="br"?r[r.length-1]+="<br>":r.push(i.outerHTML),i=i.nextSibling;for(a=r.length;a--;)r[a]==="&"&&r.splice(a,1,"&amp;");return r}function Hv(s,e,t,n){if(s+="",t&&(s=s.trim?s.trim():s.replace(Q2,"")),e&&e!=="")return s.replace(/>/g,"&gt;").replace(/</g,"&lt;").split(e);for(var i=[],r=s.length,a=0,o,c;a<r;a++)c=s.charAt(a),(c.charCodeAt(0)>=55296&&c.charCodeAt(0)<=56319||s.charCodeAt(a+1)>=65024&&s.charCodeAt(a+1)<=65039)&&(o=((s.substr(a,12).split(eP)||[])[1]||"").length||2,c=s.substr(a,o),i.emoji=1,a+=o-1),i.push(c===">"?"&gt;":c==="<"?"&lt;":n&&c===" "&&(s.charAt(a-1)===" "||s.charAt(a+1)===" ")?"&nbsp;":c);return i}/*!
 * TextPlugin 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ua,yl,tP=function(){return Ua||typeof window<"u"&&(Ua=window.gsap)&&Ua.registerPlugin&&Ua},Ic={version:"3.12.5",name:"text",init:function(e,t,n){typeof t!="object"&&(t={value:t});var i=e.nodeName.toUpperCase(),r=this,a=t,o=a.newClass,c=a.oldClass,l=a.preserveSpaces,u=a.rtl,h=r.delimiter=t.delimiter||"",d=r.fillChar=t.fillChar||(t.padSpace?"&nbsp;":""),f,_,m,g,p,S,y,T;if(r.svg=e.getBBox&&(i==="TEXT"||i==="TSPAN"),!("innerHTML"in e)&&!r.svg)return!1;if(r.target=e,!("value"in t)){r.text=r.original=[""];return}for(m=Ed(e,h,!1,l),yl||(yl=document.createElement("div")),yl.innerHTML=t.value,_=Ed(yl,h,!1,l),r.from=n._from,(r.from||u)&&!(u&&r.from)&&(i=m,m=_,_=i),r.hasClass=!!(o||c),r.newClass=u?c:o,r.oldClass=u?o:c,i=m.length-_.length,f=i<0?m:_,i<0&&(i=-i);--i>-1;)f.push(d);if(t.type==="diff"){for(g=0,p=[],S=[],y="",i=0;i<_.length;i++)T=_[i],T===m[i]?y+=T:(p[g]=y+T,S[g++]=y+m[i],y="");_=p,m=S,y&&(_.push(y),m.push(y))}t.speed&&n.duration(Math.min(.05/t.speed*f.length,t.maxDuration||9999)),r.rtl=u,r.original=m,r.text=_,r._props.push("text")},render:function(e,t){e>1?e=1:e<0&&(e=0),t.from&&(e=1-e);var n=t.text,i=t.hasClass,r=t.newClass,a=t.oldClass,o=t.delimiter,c=t.target,l=t.fillChar,u=t.original,h=t.rtl,d=n.length,f=(h?1-e:e)*d+.5|0,_,m,g;i&&e?(_=r&&f,m=a&&f!==d,g=(_?"<span class='"+r+"'>":"")+n.slice(0,f).join(o)+(_?"</span>":"")+(m?"<span class='"+a+"'>":"")+o+u.slice(f).join(o)+(m?"</span>":"")):g=n.slice(0,f).join(o)+o+u.slice(f).join(o),t.svg?c.textContent=g:c.innerHTML=l==="&nbsp;"&&~g.indexOf("  ")?g.split("  ").join("&nbsp;&nbsp;"):g}};Ic.splitInnerHTML=Ed;Ic.emojiSafeSplit=Hv;Ic.getText=Wv;tP()&&Ua.registerPlugin(Ic);let nP='a[href^="#"]',iP=document.querySelectorAll(nP);iP.forEach(s=>{s.onclick=function(e){e.preventDefault(),document.querySelector(this.hash).scrollIntoView({behavior:"smooth"})}});xn.registerPlugin(st,Ic);let Jf=xn.timeline();const sP=xn.timeline({repeat:1,repeatDelay:1,yoyo:!0,delay:1});xn.to(".dev-title",{duration:12,text:{value:"Full Stack Web Developer",newClass:"dev-title2",oldClass:"dev-title1"},ease:"power4",padSpace:!0,type:"diff"});sP.to(".dev-title",.5,{rotationX:-90,rotationY:-45}).set(".dev-title",{text:{value:"Full Stack Web Developer",newClass:"dev-title2",oldClass:"dev-title1"}}).fromTo(".dev-title",1,{rotationX:90},{rotationX:0,immediateRender:!1});Jf.from(".content",{y:"-30%",opacity:0,duration:2,ease:Hd.easeOut});Jf.from(".stagger1",{opacity:0,y:-50,stagger:.3,ease:Hd.easeOut,duration:2},"-=1.5");Jf.from(".hero-design",{opacity:0,y:50,ease:Hd.easeOut,duration:1},"-=2");xn.from(".square-anim",{stagger:.2,scale:.4,fill:"rgb(150,0,150)",attr:{x:500},rotate:"360deg",transformOrigin:"center",duration:2,ease:lw.easeOut.config(.5)});xn.from(".transition2",{scrollTrigger:{trigger:".transition2",start:"top bottom"},y:50,x:50,opacity:0,skewY:"10deg",duration:2,stagger:.2});xn.from(".transition4",{scrollTrigger:{trigger:".transition2",start:"top bottom"},y:50,x:50,opacity:0,skewY:"10deg",duration:2,stagger:.2,ease:"elastic.out(5, 1)"});xn.from(".transition5",{y:50,x:50,opacity:0,duration:1,stagger:.05,ease:"elastic.out(5, 1)"});xn.from(".transition2-right",{scrollTrigger:{trigger:".transition2",start:"top bottom"},y:50,x:-50,opacity:0,skewY:"-10deg",duration:1.5,stagger:.2});xn.from(".transition3",{scrollTrigger:{trigger:".transition3",start:"top bottom"},y:50,opacity:0,duration:1.2,stagger:.3});xn.from(".box-1",{scrollTrigger:{trigger:".box-1",start:"top bottom"},y:50,opacity:0,duration:1.2,stagger:.3});xn.from(".box-2",{scrollTrigger:{trigger:".box-2",start:"top bottom"},y:50,opacity:0,duration:1.2,stagger:.3});xn.from(".box-3",{scrollTrigger:{trigger:".box-3",start:"top bottom"},y:50,opacity:0,duration:1.2,stagger:.3});function Ph(s){const e="0123456789abcdef";let t=parseInt(s);return t===0||isNaN(s)?"00":(t=Math.round(Math.min(Math.max(0,t),255)),e.charAt((t-t%16)/16)+e.charAt(t%16))}function rP(s){return Ph(s[0])+Ph(s[1])+Ph(s[2])}function Lh(s){return s.charAt(0)==="#"?s.substring(1,7):s}function b_(s){const e=[];return e[0]=parseInt(Lh(s).substring(0,2),16),e[1]=parseInt(Lh(s).substring(2,4),16),e[2]=parseInt(Lh(s).substring(4,6),16),e}let Fh;function oP(s,e,t){const n=b_(s),i=b_(e),r=t;let a=.1;const o=[];for(Fh=0;Fh<r;Fh++){const c=[];a+=1/r,c[0]=n[0]*a+(1-a)*i[0],c[1]=n[1]*a+(1-a)*i[1],c[2]=n[2]*a+(1-a)*i[2],o.push(rP(c))}return o}const D_=oP("#ffffff","#E5E5E5",144);for(let s=1;s<8;s++)for(let e=0;e<37;e++){const t=document.createElement("div");t.setAttribute("class",`grid-item-${e}`),t.classList.add("box"),t.style.backgroundImage=`linear-gradient(45deg, white, #${D_[e]}), linear-gradient(45deg, black, #${D_[e]})`,t.style.backgroundSize="100% 100%, 2000% 100%",t.style.animation="move 5s infinite",t.style.animationDirection="alternate",document.getElementById(`grid-container${s}`).append(t)}const aP=Lw.from(".box",{scrollTrigger:{trigger:".skills",start:"top bottom"},duration:2,x:20,y:20,stagger:.008,ease:"elastic",rotation:20}),cP=document.getElementsByClassName("grid-container");[...cP].forEach(s=>{s.addEventListener("mouseenter",()=>aP.play())});
