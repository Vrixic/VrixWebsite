var cf=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var ux=cf((Yl,Yr)=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Rl="167",Sr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Tr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},uf=0,uc=1,hf=2,ku=1,ff=2,Di=3,Bi=0,Nn=1,gi=2,Oi=0,Gr=1,Ga=2,hc=3,fc=4,df=5,dr=100,pf=101,mf=102,gf=103,_f=104,vf=200,xf=201,yf=202,Mf=203,Wa=204,Xa=205,Sf=206,Tf=207,Ef=208,bf=209,Af=210,wf=211,Rf=212,Cf=213,Pf=214,Lf=0,Df=1,If=2,Fo=3,Nf=4,Uf=5,Of=6,Ff=7,Hu=0,Bf=1,kf=2,er=0,zu=1,Vu=2,Gu=3,Wu=4,Hf=5,Xu=6,ju=7,dc="attached",zf="detached",qu=300,Kr=301,$r=302,ja=303,qa=304,Xo=306,Zr=1e3,Zi=1001,Bo=1002,Rn=1003,Yu=1004,Cs=1005,Gn=1006,Po=1007,Ni=1008,ki=1009,Ku=1010,$u=1011,Ns=1012,Cl=1013,gr=1014,oi=1015,Fi=1016,Pl=1017,Ll=1018,Jr=1020,Zu=35902,Ju=1021,Qu=1022,Kn=1023,eh=1024,th=1025,Wr=1026,Qr=1027,Dl=1028,Il=1029,nh=1030,Nl=1031,Ul=1033,Lo=33776,Do=33777,Io=33778,No=33779,Ya=35840,Ka=35841,Za=35842,Ja=35843,Qa=36196,el=37492,tl=37496,nl=37808,il=37809,rl=37810,sl=37811,ol=37812,al=37813,ll=37814,cl=37815,ul=37816,hl=37817,fl=37818,dl=37819,pl=37820,ml=37821,Uo=36492,gl=36494,_l=36495,ih=36283,vl=36284,xl=36285,yl=36286,Us=2300,Os=2301,la=2302,pc=2400,mc=2401,gc=2402,Vf=2500,Gf=0,rh=1,Ml=2,Wf=3200,Xf=3201,sh=0,jf=1,$i="",An="srgb",gn="srgb-linear",Ol="display-p3",jo="display-p3-linear",ko="linear",Gt="srgb",Ho="rec709",zo="p3",Er=7680,_c=519,qf=512,Yf=513,Kf=514,oh=515,$f=516,Zf=517,Jf=518,Qf=519,Sl=35044,vc="300 es",Ui=2e3,Vo=2001;class _r{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let xc=1234567;const Ls=Math.PI/180,es=180/Math.PI;function ai(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(xn[r&255]+xn[r>>8&255]+xn[r>>16&255]+xn[r>>24&255]+"-"+xn[e&255]+xn[e>>8&255]+"-"+xn[e>>16&15|64]+xn[e>>24&255]+"-"+xn[t&63|128]+xn[t>>8&255]+"-"+xn[t>>16&255]+xn[t>>24&255]+xn[n&255]+xn[n>>8&255]+xn[n>>16&255]+xn[n>>24&255]).toLowerCase()}function mn(r,e,t){return Math.max(e,Math.min(t,r))}function Fl(r,e){return(r%e+e)%e}function ed(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function td(r,e,t){return r!==e?(t-r)/(e-r):0}function Ds(r,e,t){return(1-t)*r+t*e}function nd(r,e,t,n){return Ds(r,e,1-Math.exp(-t*n))}function id(r,e=1){return e-Math.abs(Fl(r,e*2)-e)}function rd(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function sd(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function od(r,e){return r+Math.floor(Math.random()*(e-r+1))}function ad(r,e){return r+Math.random()*(e-r)}function ld(r){return r*(.5-Math.random())}function cd(r){r!==void 0&&(xc=r);let e=xc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ud(r){return r*Ls}function hd(r){return r*es}function fd(r){return(r&r-1)===0&&r!==0}function dd(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function pd(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function md(r,e,t,n,i){const s=Math.cos,a=Math.sin,l=s(t/2),c=a(t/2),u=s((e+n)/2),d=a((e+n)/2),p=s((e-n)/2),g=a((e-n)/2),v=s((n-e)/2),M=a((n-e)/2);switch(i){case"XYX":r.set(l*d,c*p,c*g,l*u);break;case"YZY":r.set(c*g,l*d,c*p,l*u);break;case"ZXZ":r.set(c*p,c*g,l*d,l*u);break;case"XZX":r.set(l*d,c*M,c*v,l*u);break;case"YXY":r.set(c*v,l*d,c*M,l*u);break;case"ZYZ":r.set(c*M,c*v,l*d,l*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function si(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Nt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const ah={DEG2RAD:Ls,RAD2DEG:es,generateUUID:ai,clamp:mn,euclideanModulo:Fl,mapLinear:ed,inverseLerp:td,lerp:Ds,damp:nd,pingpong:id,smoothstep:rd,smootherstep:sd,randInt:od,randFloat:ad,randFloatSpread:ld,seededRandom:cd,degToRad:ud,radToDeg:hd,isPowerOfTwo:fd,ceilPowerOfTwo:dd,floorPowerOfTwo:pd,setQuaternionFromProperEuler:md,normalize:Nt,denormalize:si};class Xe{constructor(e=0,t=0){Xe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(mn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class _t{constructor(e,t,n,i,s,a,l,c,u){_t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,l,c,u)}set(e,t,n,i,s,a,l,c,u){const d=this.elements;return d[0]=e,d[1]=i,d[2]=l,d[3]=t,d[4]=s,d[5]=c,d[6]=n,d[7]=a,d[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],l=n[3],c=n[6],u=n[1],d=n[4],p=n[7],g=n[2],v=n[5],M=n[8],E=i[0],x=i[3],y=i[6],N=i[1],D=i[4],U=i[7],f=i[2],V=i[5],F=i[8];return s[0]=a*E+l*N+c*f,s[3]=a*x+l*D+c*V,s[6]=a*y+l*U+c*F,s[1]=u*E+d*N+p*f,s[4]=u*x+d*D+p*V,s[7]=u*y+d*U+p*F,s[2]=g*E+v*N+M*f,s[5]=g*x+v*D+M*V,s[8]=g*y+v*U+M*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],l=e[5],c=e[6],u=e[7],d=e[8];return t*a*d-t*l*u-n*s*d+n*l*c+i*s*u-i*a*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],l=e[5],c=e[6],u=e[7],d=e[8],p=d*a-l*u,g=l*c-d*s,v=u*s-a*c,M=t*p+n*g+i*v;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/M;return e[0]=p*E,e[1]=(i*u-d*n)*E,e[2]=(l*n-i*a)*E,e[3]=g*E,e[4]=(d*t-i*c)*E,e[5]=(i*s-l*t)*E,e[6]=v*E,e[7]=(n*c-u*t)*E,e[8]=(a*t-n*s)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,l){const c=Math.cos(s),u=Math.sin(s);return this.set(n*c,n*u,-n*(c*a+u*l)+a+e,-i*u,i*c,-i*(-u*a+c*l)+l+t,0,0,1),this}scale(e,t){return this.premultiply(ca.makeScale(e,t)),this}rotate(e){return this.premultiply(ca.makeRotation(-e)),this}translate(e,t){return this.premultiply(ca.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ca=new _t;function lh(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Fs(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function gd(){const r=Fs("canvas");return r.style.display="block",r}const yc={};function Xr(r){r in yc||(yc[r]=!0,console.warn(r))}function _d(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Mc=new _t().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Sc=new _t().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),xs={[gn]:{transfer:ko,primaries:Ho,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r,fromReference:r=>r},[An]:{transfer:Gt,primaries:Ho,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[jo]:{transfer:ko,primaries:zo,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.applyMatrix3(Sc),fromReference:r=>r.applyMatrix3(Mc)},[Ol]:{transfer:Gt,primaries:zo,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.convertSRGBToLinear().applyMatrix3(Sc),fromReference:r=>r.applyMatrix3(Mc).convertLinearToSRGB()}},vd=new Set([gn,jo]),Ct={enabled:!0,_workingColorSpace:gn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!vd.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=xs[e].toReference,i=xs[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return xs[r].primaries},getTransfer:function(r){return r===$i?ko:xs[r].transfer},getLuminanceCoefficients:function(r,e=this._workingColorSpace){return r.fromArray(xs[e].luminanceCoefficients)}};function jr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ua(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let br;class xd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{br===void 0&&(br=Fs("canvas")),br.width=e.width,br.height=e.height;const n=br.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=br}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Fs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=jr(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(jr(t[n]/255)*255):t[n]=jr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let yd=0;class ch{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yd++}),this.uuid=ai(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,l=i.length;a<l;a++)i[a].isDataTexture?s.push(ha(i[a].image)):s.push(ha(i[a]))}else s=ha(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function ha(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?xd.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Md=0;class dn extends _r{constructor(e=dn.DEFAULT_IMAGE,t=dn.DEFAULT_MAPPING,n=Zi,i=Zi,s=Gn,a=Ni,l=Kn,c=ki,u=dn.DEFAULT_ANISOTROPY,d=$i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Md++}),this.uuid=ai(),this.name="",this.source=new ch(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=l,this.internalFormat=null,this.type=c,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new _t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==qu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zr:e.x=e.x-Math.floor(e.x);break;case Zi:e.x=e.x<0?0:1;break;case Bo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zr:e.y=e.y-Math.floor(e.y);break;case Zi:e.y=e.y<0?0:1;break;case Bo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=qu;dn.DEFAULT_ANISOTROPY=1;class Bt{constructor(e=0,t=0,n=0,i=1){Bt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,u=c[0],d=c[4],p=c[8],g=c[1],v=c[5],M=c[9],E=c[2],x=c[6],y=c[10];if(Math.abs(d-g)<.01&&Math.abs(p-E)<.01&&Math.abs(M-x)<.01){if(Math.abs(d+g)<.1&&Math.abs(p+E)<.1&&Math.abs(M+x)<.1&&Math.abs(u+v+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const D=(u+1)/2,U=(v+1)/2,f=(y+1)/2,V=(d+g)/4,F=(p+E)/4,$=(M+x)/4;return D>U&&D>f?D<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(D),i=V/n,s=F/n):U>f?U<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(U),n=V/i,s=$/i):f<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(f),n=F/s,i=$/s),this.set(n,i,s,t),this}let N=Math.sqrt((x-M)*(x-M)+(p-E)*(p-E)+(g-d)*(g-d));return Math.abs(N)<.001&&(N=1),this.x=(x-M)/N,this.y=(p-E)/N,this.z=(g-d)/N,this.w=Math.acos((u+v+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Sd extends _r{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Bt(0,0,e,t),this.scissorTest=!1,this.viewport=new Bt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new dn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let l=0;l<a;l++)this.textures[l]=s.clone(),this.textures[l].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ch(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class li extends Sd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class uh extends dn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Td extends dn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xi{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,l){let c=n[i+0],u=n[i+1],d=n[i+2],p=n[i+3];const g=s[a+0],v=s[a+1],M=s[a+2],E=s[a+3];if(l===0){e[t+0]=c,e[t+1]=u,e[t+2]=d,e[t+3]=p;return}if(l===1){e[t+0]=g,e[t+1]=v,e[t+2]=M,e[t+3]=E;return}if(p!==E||c!==g||u!==v||d!==M){let x=1-l;const y=c*g+u*v+d*M+p*E,N=y>=0?1:-1,D=1-y*y;if(D>Number.EPSILON){const f=Math.sqrt(D),V=Math.atan2(f,y*N);x=Math.sin(x*V)/f,l=Math.sin(l*V)/f}const U=l*N;if(c=c*x+g*U,u=u*x+v*U,d=d*x+M*U,p=p*x+E*U,x===1-l){const f=1/Math.sqrt(c*c+u*u+d*d+p*p);c*=f,u*=f,d*=f,p*=f}}e[t]=c,e[t+1]=u,e[t+2]=d,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,i,s,a){const l=n[i],c=n[i+1],u=n[i+2],d=n[i+3],p=s[a],g=s[a+1],v=s[a+2],M=s[a+3];return e[t]=l*M+d*p+c*v-u*g,e[t+1]=c*M+d*g+u*p-l*v,e[t+2]=u*M+d*v+l*g-c*p,e[t+3]=d*M-l*p-c*g-u*v,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,l=Math.cos,c=Math.sin,u=l(n/2),d=l(i/2),p=l(s/2),g=c(n/2),v=c(i/2),M=c(s/2);switch(a){case"XYZ":this._x=g*d*p+u*v*M,this._y=u*v*p-g*d*M,this._z=u*d*M+g*v*p,this._w=u*d*p-g*v*M;break;case"YXZ":this._x=g*d*p+u*v*M,this._y=u*v*p-g*d*M,this._z=u*d*M-g*v*p,this._w=u*d*p+g*v*M;break;case"ZXY":this._x=g*d*p-u*v*M,this._y=u*v*p+g*d*M,this._z=u*d*M+g*v*p,this._w=u*d*p-g*v*M;break;case"ZYX":this._x=g*d*p-u*v*M,this._y=u*v*p+g*d*M,this._z=u*d*M-g*v*p,this._w=u*d*p+g*v*M;break;case"YZX":this._x=g*d*p+u*v*M,this._y=u*v*p+g*d*M,this._z=u*d*M-g*v*p,this._w=u*d*p-g*v*M;break;case"XZY":this._x=g*d*p-u*v*M,this._y=u*v*p-g*d*M,this._z=u*d*M+g*v*p,this._w=u*d*p+g*v*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],l=t[5],c=t[9],u=t[2],d=t[6],p=t[10],g=n+l+p;if(g>0){const v=.5/Math.sqrt(g+1);this._w=.25/v,this._x=(d-c)*v,this._y=(s-u)*v,this._z=(a-i)*v}else if(n>l&&n>p){const v=2*Math.sqrt(1+n-l-p);this._w=(d-c)/v,this._x=.25*v,this._y=(i+a)/v,this._z=(s+u)/v}else if(l>p){const v=2*Math.sqrt(1+l-n-p);this._w=(s-u)/v,this._x=(i+a)/v,this._y=.25*v,this._z=(c+d)/v}else{const v=2*Math.sqrt(1+p-n-l);this._w=(a-i)/v,this._x=(s+u)/v,this._y=(c+d)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,l=t._x,c=t._y,u=t._z,d=t._w;return this._x=n*d+a*l+i*u-s*c,this._y=i*d+a*c+s*l-n*u,this._z=s*d+a*u+n*c-i*l,this._w=a*d-n*l-i*c-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let l=a*e._w+n*e._x+i*e._y+s*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const c=1-l*l;if(c<=Number.EPSILON){const v=1-t;return this._w=v*a+t*this._w,this._x=v*n+t*this._x,this._y=v*i+t*this._y,this._z=v*s+t*this._z,this.normalize(),this}const u=Math.sqrt(c),d=Math.atan2(u,l),p=Math.sin((1-t)*d)/u,g=Math.sin(t*d)/u;return this._w=a*p+this._w*g,this._x=n*p+this._x*g,this._y=i*p+this._y*g,this._z=s*p+this._z*g,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,t=0,n=0){W.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Tc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Tc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,l=e.z,c=e.w,u=2*(a*i-l*n),d=2*(l*t-s*i),p=2*(s*n-a*t);return this.x=t+c*u+a*p-l*d,this.y=n+c*d+l*u-s*p,this.z=i+c*p+s*d-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,l=t.y,c=t.z;return this.x=i*c-s*l,this.y=s*a-n*c,this.z=n*l-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return fa.copy(this).projectOnVector(e),this.sub(fa)}reflect(e){return this.sub(fa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(mn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fa=new W,Tc=new xi;class Hi{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ni.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ni.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ni.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,l=s.count;a<l;a++)e.isMesh===!0?e.getVertexPosition(a,ni):ni.fromBufferAttribute(s,a),ni.applyMatrix4(e.matrixWorld),this.expandByPoint(ni);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),eo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),eo.copy(n.boundingBox)),eo.applyMatrix4(e.matrixWorld),this.union(eo)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ni),ni.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ys),to.subVectors(this.max,ys),Ar.subVectors(e.a,ys),wr.subVectors(e.b,ys),Rr.subVectors(e.c,ys),Vi.subVectors(wr,Ar),Gi.subVectors(Rr,wr),sr.subVectors(Ar,Rr);let t=[0,-Vi.z,Vi.y,0,-Gi.z,Gi.y,0,-sr.z,sr.y,Vi.z,0,-Vi.x,Gi.z,0,-Gi.x,sr.z,0,-sr.x,-Vi.y,Vi.x,0,-Gi.y,Gi.x,0,-sr.y,sr.x,0];return!da(t,Ar,wr,Rr,to)||(t=[1,0,0,0,1,0,0,0,1],!da(t,Ar,wr,Rr,to))?!1:(no.crossVectors(Vi,Gi),t=[no.x,no.y,no.z],da(t,Ar,wr,Rr,to))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ni).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ni).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ai=[new W,new W,new W,new W,new W,new W,new W,new W],ni=new W,eo=new Hi,Ar=new W,wr=new W,Rr=new W,Vi=new W,Gi=new W,sr=new W,ys=new W,to=new W,no=new W,or=new W;function da(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){or.fromArray(r,s);const l=i.x*Math.abs(or.x)+i.y*Math.abs(or.y)+i.z*Math.abs(or.z),c=e.dot(or),u=t.dot(or),d=n.dot(or);if(Math.max(-Math.max(c,u,d),Math.min(c,u,d))>l)return!1}return!0}const Ed=new Hi,Ms=new W,pa=new W;class Mi{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Ed.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ms.subVectors(e,this.center);const t=Ms.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ms,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(pa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ms.copy(e.center).add(pa)),this.expandByPoint(Ms.copy(e.center).sub(pa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const wi=new W,ma=new W,io=new W,Wi=new W,ga=new W,ro=new W,_a=new W;class ks{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=wi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wi.copy(this.origin).addScaledVector(this.direction,t),wi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ma.copy(e).add(t).multiplyScalar(.5),io.copy(t).sub(e).normalize(),Wi.copy(this.origin).sub(ma);const s=e.distanceTo(t)*.5,a=-this.direction.dot(io),l=Wi.dot(this.direction),c=-Wi.dot(io),u=Wi.lengthSq(),d=Math.abs(1-a*a);let p,g,v,M;if(d>0)if(p=a*c-l,g=a*l-c,M=s*d,p>=0)if(g>=-M)if(g<=M){const E=1/d;p*=E,g*=E,v=p*(p+a*g+2*l)+g*(a*p+g+2*c)+u}else g=s,p=Math.max(0,-(a*g+l)),v=-p*p+g*(g+2*c)+u;else g=-s,p=Math.max(0,-(a*g+l)),v=-p*p+g*(g+2*c)+u;else g<=-M?(p=Math.max(0,-(-a*s+l)),g=p>0?-s:Math.min(Math.max(-s,-c),s),v=-p*p+g*(g+2*c)+u):g<=M?(p=0,g=Math.min(Math.max(-s,-c),s),v=g*(g+2*c)+u):(p=Math.max(0,-(a*s+l)),g=p>0?s:Math.min(Math.max(-s,-c),s),v=-p*p+g*(g+2*c)+u);else g=a>0?-s:s,p=Math.max(0,-(a*g+l)),v=-p*p+g*(g+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,p),i&&i.copy(ma).addScaledVector(io,g),v}intersectSphere(e,t){wi.subVectors(e.center,this.origin);const n=wi.dot(this.direction),i=wi.dot(wi)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),l=n-a,c=n+a;return c<0?null:l<0?this.at(c,t):this.at(l,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,l,c;const u=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,g=this.origin;return u>=0?(n=(e.min.x-g.x)*u,i=(e.max.x-g.x)*u):(n=(e.max.x-g.x)*u,i=(e.min.x-g.x)*u),d>=0?(s=(e.min.y-g.y)*d,a=(e.max.y-g.y)*d):(s=(e.max.y-g.y)*d,a=(e.min.y-g.y)*d),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),p>=0?(l=(e.min.z-g.z)*p,c=(e.max.z-g.z)*p):(l=(e.max.z-g.z)*p,c=(e.min.z-g.z)*p),n>c||l>i)||((l>n||n!==n)&&(n=l),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,wi)!==null}intersectTriangle(e,t,n,i,s){ga.subVectors(t,e),ro.subVectors(n,e),_a.crossVectors(ga,ro);let a=this.direction.dot(_a),l;if(a>0){if(i)return null;l=1}else if(a<0)l=-1,a=-a;else return null;Wi.subVectors(this.origin,e);const c=l*this.direction.dot(ro.crossVectors(Wi,ro));if(c<0)return null;const u=l*this.direction.dot(ga.cross(Wi));if(u<0||c+u>a)return null;const d=-l*Wi.dot(_a);return d<0?null:this.at(d/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vt{constructor(e,t,n,i,s,a,l,c,u,d,p,g,v,M,E,x){vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,l,c,u,d,p,g,v,M,E,x)}set(e,t,n,i,s,a,l,c,u,d,p,g,v,M,E,x){const y=this.elements;return y[0]=e,y[4]=t,y[8]=n,y[12]=i,y[1]=s,y[5]=a,y[9]=l,y[13]=c,y[2]=u,y[6]=d,y[10]=p,y[14]=g,y[3]=v,y[7]=M,y[11]=E,y[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Cr.setFromMatrixColumn(e,0).length(),s=1/Cr.setFromMatrixColumn(e,1).length(),a=1/Cr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),l=Math.sin(n),c=Math.cos(i),u=Math.sin(i),d=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const g=a*d,v=a*p,M=l*d,E=l*p;t[0]=c*d,t[4]=-c*p,t[8]=u,t[1]=v+M*u,t[5]=g-E*u,t[9]=-l*c,t[2]=E-g*u,t[6]=M+v*u,t[10]=a*c}else if(e.order==="YXZ"){const g=c*d,v=c*p,M=u*d,E=u*p;t[0]=g+E*l,t[4]=M*l-v,t[8]=a*u,t[1]=a*p,t[5]=a*d,t[9]=-l,t[2]=v*l-M,t[6]=E+g*l,t[10]=a*c}else if(e.order==="ZXY"){const g=c*d,v=c*p,M=u*d,E=u*p;t[0]=g-E*l,t[4]=-a*p,t[8]=M+v*l,t[1]=v+M*l,t[5]=a*d,t[9]=E-g*l,t[2]=-a*u,t[6]=l,t[10]=a*c}else if(e.order==="ZYX"){const g=a*d,v=a*p,M=l*d,E=l*p;t[0]=c*d,t[4]=M*u-v,t[8]=g*u+E,t[1]=c*p,t[5]=E*u+g,t[9]=v*u-M,t[2]=-u,t[6]=l*c,t[10]=a*c}else if(e.order==="YZX"){const g=a*c,v=a*u,M=l*c,E=l*u;t[0]=c*d,t[4]=E-g*p,t[8]=M*p+v,t[1]=p,t[5]=a*d,t[9]=-l*d,t[2]=-u*d,t[6]=v*p+M,t[10]=g-E*p}else if(e.order==="XZY"){const g=a*c,v=a*u,M=l*c,E=l*u;t[0]=c*d,t[4]=-p,t[8]=u*d,t[1]=g*p+E,t[5]=a*d,t[9]=v*p-M,t[2]=M*p-v,t[6]=l*d,t[10]=E*p+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bd,e,Ad)}lookAt(e,t,n){const i=this.elements;return zn.subVectors(e,t),zn.lengthSq()===0&&(zn.z=1),zn.normalize(),Xi.crossVectors(n,zn),Xi.lengthSq()===0&&(Math.abs(n.z)===1?zn.x+=1e-4:zn.z+=1e-4,zn.normalize(),Xi.crossVectors(n,zn)),Xi.normalize(),so.crossVectors(zn,Xi),i[0]=Xi.x,i[4]=so.x,i[8]=zn.x,i[1]=Xi.y,i[5]=so.y,i[9]=zn.y,i[2]=Xi.z,i[6]=so.z,i[10]=zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],l=n[4],c=n[8],u=n[12],d=n[1],p=n[5],g=n[9],v=n[13],M=n[2],E=n[6],x=n[10],y=n[14],N=n[3],D=n[7],U=n[11],f=n[15],V=i[0],F=i[4],$=i[8],I=i[12],L=i[1],G=i[5],le=i[9],se=i[13],fe=i[2],de=i[6],ce=i[10],me=i[14],ae=i[3],Ae=i[7],Le=i[11],ze=i[15];return s[0]=a*V+l*L+c*fe+u*ae,s[4]=a*F+l*G+c*de+u*Ae,s[8]=a*$+l*le+c*ce+u*Le,s[12]=a*I+l*se+c*me+u*ze,s[1]=d*V+p*L+g*fe+v*ae,s[5]=d*F+p*G+g*de+v*Ae,s[9]=d*$+p*le+g*ce+v*Le,s[13]=d*I+p*se+g*me+v*ze,s[2]=M*V+E*L+x*fe+y*ae,s[6]=M*F+E*G+x*de+y*Ae,s[10]=M*$+E*le+x*ce+y*Le,s[14]=M*I+E*se+x*me+y*ze,s[3]=N*V+D*L+U*fe+f*ae,s[7]=N*F+D*G+U*de+f*Ae,s[11]=N*$+D*le+U*ce+f*Le,s[15]=N*I+D*se+U*me+f*ze,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],l=e[5],c=e[9],u=e[13],d=e[2],p=e[6],g=e[10],v=e[14],M=e[3],E=e[7],x=e[11],y=e[15];return M*(+s*c*p-i*u*p-s*l*g+n*u*g+i*l*v-n*c*v)+E*(+t*c*v-t*u*g+s*a*g-i*a*v+i*u*d-s*c*d)+x*(+t*u*p-t*l*v-s*a*p+n*a*v+s*l*d-n*u*d)+y*(-i*l*d-t*c*p+t*l*g+i*a*p-n*a*g+n*c*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],l=e[5],c=e[6],u=e[7],d=e[8],p=e[9],g=e[10],v=e[11],M=e[12],E=e[13],x=e[14],y=e[15],N=p*x*u-E*g*u+E*c*v-l*x*v-p*c*y+l*g*y,D=M*g*u-d*x*u-M*c*v+a*x*v+d*c*y-a*g*y,U=d*E*u-M*p*u+M*l*v-a*E*v-d*l*y+a*p*y,f=M*p*c-d*E*c-M*l*g+a*E*g+d*l*x-a*p*x,V=t*N+n*D+i*U+s*f;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/V;return e[0]=N*F,e[1]=(E*g*s-p*x*s-E*i*v+n*x*v+p*i*y-n*g*y)*F,e[2]=(l*x*s-E*c*s+E*i*u-n*x*u-l*i*y+n*c*y)*F,e[3]=(p*c*s-l*g*s-p*i*u+n*g*u+l*i*v-n*c*v)*F,e[4]=D*F,e[5]=(d*x*s-M*g*s+M*i*v-t*x*v-d*i*y+t*g*y)*F,e[6]=(M*c*s-a*x*s-M*i*u+t*x*u+a*i*y-t*c*y)*F,e[7]=(a*g*s-d*c*s+d*i*u-t*g*u-a*i*v+t*c*v)*F,e[8]=U*F,e[9]=(M*p*s-d*E*s-M*n*v+t*E*v+d*n*y-t*p*y)*F,e[10]=(a*E*s-M*l*s+M*n*u-t*E*u-a*n*y+t*l*y)*F,e[11]=(d*l*s-a*p*s-d*n*u+t*p*u+a*n*v-t*l*v)*F,e[12]=f*F,e[13]=(d*E*i-M*p*i+M*n*g-t*E*g-d*n*x+t*p*x)*F,e[14]=(M*l*i-a*E*i-M*n*c+t*E*c+a*n*x-t*l*x)*F,e[15]=(a*p*i-d*l*i+d*n*c-t*p*c-a*n*g+t*l*g)*F,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,l=e.y,c=e.z,u=s*a,d=s*l;return this.set(u*a+n,u*l-i*c,u*c+i*l,0,u*l+i*c,d*l+n,d*c-i*a,0,u*c-i*l,d*c+i*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,l=t._z,c=t._w,u=s+s,d=a+a,p=l+l,g=s*u,v=s*d,M=s*p,E=a*d,x=a*p,y=l*p,N=c*u,D=c*d,U=c*p,f=n.x,V=n.y,F=n.z;return i[0]=(1-(E+y))*f,i[1]=(v+U)*f,i[2]=(M-D)*f,i[3]=0,i[4]=(v-U)*V,i[5]=(1-(g+y))*V,i[6]=(x+N)*V,i[7]=0,i[8]=(M+D)*F,i[9]=(x-N)*F,i[10]=(1-(g+E))*F,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Cr.set(i[0],i[1],i[2]).length();const a=Cr.set(i[4],i[5],i[6]).length(),l=Cr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],ii.copy(this);const u=1/s,d=1/a,p=1/l;return ii.elements[0]*=u,ii.elements[1]*=u,ii.elements[2]*=u,ii.elements[4]*=d,ii.elements[5]*=d,ii.elements[6]*=d,ii.elements[8]*=p,ii.elements[9]*=p,ii.elements[10]*=p,t.setFromRotationMatrix(ii),n.x=s,n.y=a,n.z=l,this}makePerspective(e,t,n,i,s,a,l=Ui){const c=this.elements,u=2*s/(t-e),d=2*s/(n-i),p=(t+e)/(t-e),g=(n+i)/(n-i);let v,M;if(l===Ui)v=-(a+s)/(a-s),M=-2*a*s/(a-s);else if(l===Vo)v=-a/(a-s),M=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return c[0]=u,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=d,c[9]=g,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,a,l=Ui){const c=this.elements,u=1/(t-e),d=1/(n-i),p=1/(a-s),g=(t+e)*u,v=(n+i)*d;let M,E;if(l===Ui)M=(a+s)*p,E=-2*p;else if(l===Vo)M=s*p,E=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return c[0]=2*u,c[4]=0,c[8]=0,c[12]=-g,c[1]=0,c[5]=2*d,c[9]=0,c[13]=-v,c[2]=0,c[6]=0,c[10]=E,c[14]=-M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Cr=new W,ii=new vt,bd=new W(0,0,0),Ad=new W(1,1,1),Xi=new W,so=new W,zn=new W,Ec=new vt,bc=new xi;class yi{constructor(e=0,t=0,n=0,i=yi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],l=i[8],c=i[1],u=i[5],d=i[9],p=i[2],g=i[6],v=i[10];switch(t){case"XYZ":this._y=Math.asin(mn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,v),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(g,u),this._z=0);break;case"YXZ":this._x=Math.asin(-mn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(l,v),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(mn(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-p,v),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-mn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(g,v),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(mn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(l,v));break;case"XZY":this._z=Math.asin(-mn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(g,u),this._y=Math.atan2(l,s)):(this._x=Math.atan2(-d,v),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ec.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ec,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return bc.setFromEuler(this),this.setFromQuaternion(bc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yi.DEFAULT_ORDER="XYZ";class hh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let wd=0;const Ac=new W,Pr=new xi,Ri=new vt,oo=new W,Ss=new W,Rd=new W,Cd=new xi,wc=new W(1,0,0),Rc=new W(0,1,0),Cc=new W(0,0,1),Pc={type:"added"},Pd={type:"removed"},Lr={type:"childadded",child:null},va={type:"childremoved",child:null};class qt extends _r{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wd++}),this.uuid=ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qt.DEFAULT_UP.clone();const e=new W,t=new yi,n=new xi,i=new W(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new vt},normalMatrix:{value:new _t}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Pr.setFromAxisAngle(e,t),this.quaternion.multiply(Pr),this}rotateOnWorldAxis(e,t){return Pr.setFromAxisAngle(e,t),this.quaternion.premultiply(Pr),this}rotateX(e){return this.rotateOnAxis(wc,e)}rotateY(e){return this.rotateOnAxis(Rc,e)}rotateZ(e){return this.rotateOnAxis(Cc,e)}translateOnAxis(e,t){return Ac.copy(e).applyQuaternion(this.quaternion),this.position.add(Ac.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(wc,e)}translateY(e){return this.translateOnAxis(Rc,e)}translateZ(e){return this.translateOnAxis(Cc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?oo.copy(e):oo.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ss.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt(Ss,oo,this.up):Ri.lookAt(oo,Ss,this.up),this.quaternion.setFromRotationMatrix(Ri),i&&(Ri.extractRotation(i.matrixWorld),Pr.setFromRotationMatrix(Ri),this.quaternion.premultiply(Pr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Pc),Lr.child=e,this.dispatchEvent(Lr),Lr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Pd),va.child=e,this.dispatchEvent(va),va.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ri),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Pc),Lr.child=e,this.dispatchEvent(Lr),Lr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ss,e,Rd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ss,Cd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(l=>({boxInitialized:l.boxInitialized,boxMin:l.box.min.toArray(),boxMax:l.box.max.toArray(),sphereInitialized:l.sphereInitialized,sphereRadius:l.sphere.radius,sphereCenter:l.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const c=l.shapes;if(Array.isArray(c))for(let u=0,d=c.length;u<d;u++){const p=c[u];s(e.shapes,p)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let c=0,u=this.material.length;c<u;c++)l.push(s(e.materials,this.material[c]));i.material=l}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let l=0;l<this.children.length;l++)i.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let l=0;l<this.animations.length;l++){const c=this.animations[l];i.animations.push(s(e.animations,c))}}if(t){const l=a(e.geometries),c=a(e.materials),u=a(e.textures),d=a(e.images),p=a(e.shapes),g=a(e.skeletons),v=a(e.animations),M=a(e.nodes);l.length>0&&(n.geometries=l),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),d.length>0&&(n.images=d),p.length>0&&(n.shapes=p),g.length>0&&(n.skeletons=g),v.length>0&&(n.animations=v),M.length>0&&(n.nodes=M)}return n.object=i,n;function a(l){const c=[];for(const u in l){const d=l[u];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}qt.DEFAULT_UP=new W(0,1,0);qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ri=new W,Ci=new W,xa=new W,Pi=new W,Dr=new W,Ir=new W,Lc=new W,ya=new W,Ma=new W,Sa=new W;class _i{constructor(e=new W,t=new W,n=new W){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),ri.subVectors(e,t),i.cross(ri);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){ri.subVectors(i,t),Ci.subVectors(n,t),xa.subVectors(e,t);const a=ri.dot(ri),l=ri.dot(Ci),c=ri.dot(xa),u=Ci.dot(Ci),d=Ci.dot(xa),p=a*u-l*l;if(p===0)return s.set(0,0,0),null;const g=1/p,v=(u*c-l*d)*g,M=(a*d-l*c)*g;return s.set(1-v-M,M,v)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getInterpolation(e,t,n,i,s,a,l,c){return this.getBarycoord(e,t,n,i,Pi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Pi.x),c.addScaledVector(a,Pi.y),c.addScaledVector(l,Pi.z),c)}static isFrontFacing(e,t,n,i){return ri.subVectors(n,t),Ci.subVectors(e,t),ri.cross(Ci).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ri.subVectors(this.c,this.b),Ci.subVectors(this.a,this.b),ri.cross(Ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return _i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return _i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return _i.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return _i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return _i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,l;Dr.subVectors(i,n),Ir.subVectors(s,n),ya.subVectors(e,n);const c=Dr.dot(ya),u=Ir.dot(ya);if(c<=0&&u<=0)return t.copy(n);Ma.subVectors(e,i);const d=Dr.dot(Ma),p=Ir.dot(Ma);if(d>=0&&p<=d)return t.copy(i);const g=c*p-d*u;if(g<=0&&c>=0&&d<=0)return a=c/(c-d),t.copy(n).addScaledVector(Dr,a);Sa.subVectors(e,s);const v=Dr.dot(Sa),M=Ir.dot(Sa);if(M>=0&&v<=M)return t.copy(s);const E=v*u-c*M;if(E<=0&&u>=0&&M<=0)return l=u/(u-M),t.copy(n).addScaledVector(Ir,l);const x=d*M-v*p;if(x<=0&&p-d>=0&&v-M>=0)return Lc.subVectors(s,i),l=(p-d)/(p-d+(v-M)),t.copy(i).addScaledVector(Lc,l);const y=1/(x+E+g);return a=E*y,l=g*y,t.copy(n).addScaledVector(Dr,a).addScaledVector(Ir,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const fh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ji={h:0,s:0,l:0},ao={h:0,s:0,l:0};function Ta(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class at{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=An){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Ct.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ct.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Ct.workingColorSpace){if(e=Fl(e,1),t=mn(t,0,1),n=mn(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Ta(a,s,e+1/3),this.g=Ta(a,s,e),this.b=Ta(a,s,e-1/3)}return Ct.toWorkingColorSpace(this,i),this}setStyle(e,t=An){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],l=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=An){const n=fh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=jr(e.r),this.g=jr(e.g),this.b=jr(e.b),this}copyLinearToSRGB(e){return this.r=ua(e.r),this.g=ua(e.g),this.b=ua(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=An){return Ct.fromWorkingColorSpace(yn.copy(this),e),Math.round(mn(yn.r*255,0,255))*65536+Math.round(mn(yn.g*255,0,255))*256+Math.round(mn(yn.b*255,0,255))}getHexString(e=An){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ct.workingColorSpace){Ct.fromWorkingColorSpace(yn.copy(this),t);const n=yn.r,i=yn.g,s=yn.b,a=Math.max(n,i,s),l=Math.min(n,i,s);let c,u;const d=(l+a)/2;if(l===a)c=0,u=0;else{const p=a-l;switch(u=d<=.5?p/(a+l):p/(2-a-l),a){case n:c=(i-s)/p+(i<s?6:0);break;case i:c=(s-n)/p+2;break;case s:c=(n-i)/p+4;break}c/=6}return e.h=c,e.s=u,e.l=d,e}getRGB(e,t=Ct.workingColorSpace){return Ct.fromWorkingColorSpace(yn.copy(this),t),e.r=yn.r,e.g=yn.g,e.b=yn.b,e}getStyle(e=An){Ct.fromWorkingColorSpace(yn.copy(this),e);const t=yn.r,n=yn.g,i=yn.b;return e!==An?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ji),this.setHSL(ji.h+e,ji.s+t,ji.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ji),e.getHSL(ao);const n=Ds(ji.h,ao.h,t),i=Ds(ji.s,ao.s,t),s=Ds(ji.l,ao.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const yn=new at;at.NAMES=fh;let Ld=0;class vi extends _r{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ld++}),this.uuid=ai(),this.name="",this.type="Material",this.blending=Gr,this.side=Bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wa,this.blendDst=Xa,this.blendEquation=dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new at(0,0,0),this.blendAlpha=0,this.depthFunc=Fo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_c,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Er,this.stencilZFail=Er,this.stencilZPass=Er,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Gr&&(n.blending=this.blending),this.side!==Bi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Wa&&(n.blendSrc=this.blendSrc),this.blendDst!==Xa&&(n.blendDst=this.blendDst),this.blendEquation!==dr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Fo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_c&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Er&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Er&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Er&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const l in s){const c=s[l];delete c.metadata,a.push(c)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class Ji extends vi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new at(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.combine=Hu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const sn=new W,lo=new Xe;class Pn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Sl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=oi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Xr("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)lo.fromBufferAttribute(this,t),lo.applyMatrix3(e),this.setXY(t,lo.x,lo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix3(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=si(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Nt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=si(t,this.array)),t}setX(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=si(t,this.array)),t}setY(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=si(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=si(t,this.array)),t}setW(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array),i=Nt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array),i=Nt(i,this.array),s=Nt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Sl&&(e.usage=this.usage),e}}class dh extends Pn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ph extends Pn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ci extends Pn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Dd=0;const qn=new vt,Ea=new qt,Nr=new W,Vn=new Hi,Ts=new Hi,fn=new W;class ui extends _r{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dd++}),this.uuid=ai(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(lh(e)?ph:dh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new _t().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qn.makeRotationFromQuaternion(e),this.applyMatrix4(qn),this}rotateX(e){return qn.makeRotationX(e),this.applyMatrix4(qn),this}rotateY(e){return qn.makeRotationY(e),this.applyMatrix4(qn),this}rotateZ(e){return qn.makeRotationZ(e),this.applyMatrix4(qn),this}translate(e,t,n){return qn.makeTranslation(e,t,n),this.applyMatrix4(qn),this}scale(e,t,n){return qn.makeScale(e,t,n),this.applyMatrix4(qn),this}lookAt(e){return Ea.lookAt(e),Ea.updateMatrix(),this.applyMatrix4(Ea.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Nr).negate(),this.translate(Nr.x,Nr.y,Nr.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ci(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Vn.setFromBufferAttribute(s),this.morphTargetsRelative?(fn.addVectors(this.boundingBox.min,Vn.min),this.boundingBox.expandByPoint(fn),fn.addVectors(this.boundingBox.max,Vn.max),this.boundingBox.expandByPoint(fn)):(this.boundingBox.expandByPoint(Vn.min),this.boundingBox.expandByPoint(Vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const n=this.boundingSphere.center;if(Vn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const l=t[s];Ts.setFromBufferAttribute(l),this.morphTargetsRelative?(fn.addVectors(Vn.min,Ts.min),Vn.expandByPoint(fn),fn.addVectors(Vn.max,Ts.max),Vn.expandByPoint(fn)):(Vn.expandByPoint(Ts.min),Vn.expandByPoint(Ts.max))}Vn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)fn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(fn));if(t)for(let s=0,a=t.length;s<a;s++){const l=t[s],c=this.morphTargetsRelative;for(let u=0,d=l.count;u<d;u++)fn.fromBufferAttribute(l,u),c&&(Nr.fromBufferAttribute(e,u),fn.add(Nr)),i=Math.max(i,n.distanceToSquared(fn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),l=[],c=[];for(let $=0;$<n.count;$++)l[$]=new W,c[$]=new W;const u=new W,d=new W,p=new W,g=new Xe,v=new Xe,M=new Xe,E=new W,x=new W;function y($,I,L){u.fromBufferAttribute(n,$),d.fromBufferAttribute(n,I),p.fromBufferAttribute(n,L),g.fromBufferAttribute(s,$),v.fromBufferAttribute(s,I),M.fromBufferAttribute(s,L),d.sub(u),p.sub(u),v.sub(g),M.sub(g);const G=1/(v.x*M.y-M.x*v.y);isFinite(G)&&(E.copy(d).multiplyScalar(M.y).addScaledVector(p,-v.y).multiplyScalar(G),x.copy(p).multiplyScalar(v.x).addScaledVector(d,-M.x).multiplyScalar(G),l[$].add(E),l[I].add(E),l[L].add(E),c[$].add(x),c[I].add(x),c[L].add(x))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let $=0,I=N.length;$<I;++$){const L=N[$],G=L.start,le=L.count;for(let se=G,fe=G+le;se<fe;se+=3)y(e.getX(se+0),e.getX(se+1),e.getX(se+2))}const D=new W,U=new W,f=new W,V=new W;function F($){f.fromBufferAttribute(i,$),V.copy(f);const I=l[$];D.copy(I),D.sub(f.multiplyScalar(f.dot(I))).normalize(),U.crossVectors(V,I);const G=U.dot(c[$])<0?-1:1;a.setXYZW($,D.x,D.y,D.z,G)}for(let $=0,I=N.length;$<I;++$){const L=N[$],G=L.start,le=L.count;for(let se=G,fe=G+le;se<fe;se+=3)F(e.getX(se+0)),F(e.getX(se+1)),F(e.getX(se+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Pn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let g=0,v=n.count;g<v;g++)n.setXYZ(g,0,0,0);const i=new W,s=new W,a=new W,l=new W,c=new W,u=new W,d=new W,p=new W;if(e)for(let g=0,v=e.count;g<v;g+=3){const M=e.getX(g+0),E=e.getX(g+1),x=e.getX(g+2);i.fromBufferAttribute(t,M),s.fromBufferAttribute(t,E),a.fromBufferAttribute(t,x),d.subVectors(a,s),p.subVectors(i,s),d.cross(p),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,E),u.fromBufferAttribute(n,x),l.add(d),c.add(d),u.add(d),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(E,c.x,c.y,c.z),n.setXYZ(x,u.x,u.y,u.z)}else for(let g=0,v=t.count;g<v;g+=3)i.fromBufferAttribute(t,g+0),s.fromBufferAttribute(t,g+1),a.fromBufferAttribute(t,g+2),d.subVectors(a,s),p.subVectors(i,s),d.cross(p),n.setXYZ(g+0,d.x,d.y,d.z),n.setXYZ(g+1,d.x,d.y,d.z),n.setXYZ(g+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)fn.fromBufferAttribute(e,t),fn.normalize(),e.setXYZ(t,fn.x,fn.y,fn.z)}toNonIndexed(){function e(l,c){const u=l.array,d=l.itemSize,p=l.normalized,g=new u.constructor(c.length*d);let v=0,M=0;for(let E=0,x=c.length;E<x;E++){l.isInterleavedBufferAttribute?v=c[E]*l.data.stride+l.offset:v=c[E]*d;for(let y=0;y<d;y++)g[M++]=u[v++]}return new Pn(g,d,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ui,n=this.index.array,i=this.attributes;for(const l in i){const c=i[l],u=e(c,n);t.setAttribute(l,u)}const s=this.morphAttributes;for(const l in s){const c=[],u=s[l];for(let d=0,p=u.length;d<p;d++){const g=u[d],v=e(g,n);c.push(v)}t.morphAttributes[l]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let l=0,c=a.length;l<c;l++){const u=a[l];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const u=n[c];e.data.attributes[c]=u.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],d=[];for(let p=0,g=u.length;p<g;p++){const v=u[p];d.push(v.toJSON(e.data))}d.length>0&&(i[c]=d,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const u in i){const d=i[u];this.setAttribute(u,d.clone(t))}const s=e.morphAttributes;for(const u in s){const d=[],p=s[u];for(let g=0,v=p.length;g<v;g++)d.push(p[g].clone(t));this.morphAttributes[u]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,d=a.length;u<d;u++){const p=a[u];this.addGroup(p.start,p.count,p.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Dc=new vt,ar=new ks,co=new Mi,Ic=new W,Ur=new W,Or=new W,Fr=new W,ba=new W,uo=new W,ho=new Xe,fo=new Xe,po=new Xe,Nc=new W,Uc=new W,Oc=new W,mo=new W,go=new W;class In extends qt{constructor(e=new ui,t=new Ji){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const l=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const l=this.morphTargetInfluences;if(s&&l){uo.set(0,0,0);for(let c=0,u=s.length;c<u;c++){const d=l[c],p=s[c];d!==0&&(ba.fromBufferAttribute(p,e),a?uo.addScaledVector(ba,d):uo.addScaledVector(ba.sub(t),d))}t.add(uo)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),co.copy(n.boundingSphere),co.applyMatrix4(s),ar.copy(e.ray).recast(e.near),!(co.containsPoint(ar.origin)===!1&&(ar.intersectSphere(co,Ic)===null||ar.origin.distanceToSquared(Ic)>(e.far-e.near)**2))&&(Dc.copy(s).invert(),ar.copy(e.ray).applyMatrix4(Dc),!(n.boundingBox!==null&&ar.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ar)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,l=s.index,c=s.attributes.position,u=s.attributes.uv,d=s.attributes.uv1,p=s.attributes.normal,g=s.groups,v=s.drawRange;if(l!==null)if(Array.isArray(a))for(let M=0,E=g.length;M<E;M++){const x=g[M],y=a[x.materialIndex],N=Math.max(x.start,v.start),D=Math.min(l.count,Math.min(x.start+x.count,v.start+v.count));for(let U=N,f=D;U<f;U+=3){const V=l.getX(U),F=l.getX(U+1),$=l.getX(U+2);i=_o(this,y,e,n,u,d,p,V,F,$),i&&(i.faceIndex=Math.floor(U/3),i.face.materialIndex=x.materialIndex,t.push(i))}}else{const M=Math.max(0,v.start),E=Math.min(l.count,v.start+v.count);for(let x=M,y=E;x<y;x+=3){const N=l.getX(x),D=l.getX(x+1),U=l.getX(x+2);i=_o(this,a,e,n,u,d,p,N,D,U),i&&(i.faceIndex=Math.floor(x/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let M=0,E=g.length;M<E;M++){const x=g[M],y=a[x.materialIndex],N=Math.max(x.start,v.start),D=Math.min(c.count,Math.min(x.start+x.count,v.start+v.count));for(let U=N,f=D;U<f;U+=3){const V=U,F=U+1,$=U+2;i=_o(this,y,e,n,u,d,p,V,F,$),i&&(i.faceIndex=Math.floor(U/3),i.face.materialIndex=x.materialIndex,t.push(i))}}else{const M=Math.max(0,v.start),E=Math.min(c.count,v.start+v.count);for(let x=M,y=E;x<y;x+=3){const N=x,D=x+1,U=x+2;i=_o(this,a,e,n,u,d,p,N,D,U),i&&(i.faceIndex=Math.floor(x/3),t.push(i))}}}}function Id(r,e,t,n,i,s,a,l){let c;if(e.side===Nn?c=n.intersectTriangle(a,s,i,!0,l):c=n.intersectTriangle(i,s,a,e.side===Bi,l),c===null)return null;go.copy(l),go.applyMatrix4(r.matrixWorld);const u=t.ray.origin.distanceTo(go);return u<t.near||u>t.far?null:{distance:u,point:go.clone(),object:r}}function _o(r,e,t,n,i,s,a,l,c,u){r.getVertexPosition(l,Ur),r.getVertexPosition(c,Or),r.getVertexPosition(u,Fr);const d=Id(r,e,t,n,Ur,Or,Fr,mo);if(d){i&&(ho.fromBufferAttribute(i,l),fo.fromBufferAttribute(i,c),po.fromBufferAttribute(i,u),d.uv=_i.getInterpolation(mo,Ur,Or,Fr,ho,fo,po,new Xe)),s&&(ho.fromBufferAttribute(s,l),fo.fromBufferAttribute(s,c),po.fromBufferAttribute(s,u),d.uv1=_i.getInterpolation(mo,Ur,Or,Fr,ho,fo,po,new Xe)),a&&(Nc.fromBufferAttribute(a,l),Uc.fromBufferAttribute(a,c),Oc.fromBufferAttribute(a,u),d.normal=_i.getInterpolation(mo,Ur,Or,Fr,Nc,Uc,Oc,new W),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const p={a:l,b:c,c:u,normal:new W,materialIndex:0};_i.getNormal(Ur,Or,Fr,p.normal),d.face=p}return d}class Hs extends ui{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const l=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const c=[],u=[],d=[],p=[];let g=0,v=0;M("z","y","x",-1,-1,n,t,e,a,s,0),M("z","y","x",1,-1,n,t,-e,a,s,1),M("x","z","y",1,1,e,n,t,i,a,2),M("x","z","y",1,-1,e,n,-t,i,a,3),M("x","y","z",1,-1,e,t,n,i,s,4),M("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new ci(u,3)),this.setAttribute("normal",new ci(d,3)),this.setAttribute("uv",new ci(p,2));function M(E,x,y,N,D,U,f,V,F,$,I){const L=U/F,G=f/$,le=U/2,se=f/2,fe=V/2,de=F+1,ce=$+1;let me=0,ae=0;const Ae=new W;for(let Le=0;Le<ce;Le++){const ze=Le*G-se;for(let xt=0;xt<de;xt++){const bt=xt*L-le;Ae[E]=bt*N,Ae[x]=ze*D,Ae[y]=fe,u.push(Ae.x,Ae.y,Ae.z),Ae[E]=0,Ae[x]=0,Ae[y]=V>0?1:-1,d.push(Ae.x,Ae.y,Ae.z),p.push(xt/F),p.push(1-Le/$),me+=1}}for(let Le=0;Le<$;Le++)for(let ze=0;ze<F;ze++){const xt=g+ze+de*Le,bt=g+ze+de*(Le+1),ue=g+(ze+1)+de*(Le+1),Se=g+(ze+1)+de*Le;c.push(xt,bt,Se),c.push(bt,ue,Se),ae+=6}l.addGroup(v,ae,I),v+=ae,g+=me}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ts(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function bn(r){const e={};for(let t=0;t<r.length;t++){const n=ts(r[t]);for(const i in n)e[i]=n[i]}return e}function Nd(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function mh(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ct.workingColorSpace}const Bs={clone:ts,merge:bn};var Ud=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Od=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Cn extends vi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ud,this.fragmentShader=Od,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ts(e.uniforms),this.uniformsGroups=Nd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class gh extends qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=Ui}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const qi=new W,Fc=new Xe,Bc=new Xe;class wn extends gh{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=es*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ls*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return es*2*Math.atan(Math.tan(Ls*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(qi.x,qi.y).multiplyScalar(-e/qi.z),qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qi.x,qi.y).multiplyScalar(-e/qi.z)}getViewSize(e,t){return this.getViewBounds(e,Fc,Bc),t.subVectors(Bc,Fc)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ls*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,u=a.fullHeight;s+=a.offsetX*i/c,t-=a.offsetY*n/u,i*=a.width/c,n*=a.height/u}const l=this.filmOffset;l!==0&&(s+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Br=-90,kr=1;class Fd extends qt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new wn(Br,kr,e,t);i.layers=this.layers,this.add(i);const s=new wn(Br,kr,e,t);s.layers=this.layers,this.add(s);const a=new wn(Br,kr,e,t);a.layers=this.layers,this.add(a);const l=new wn(Br,kr,e,t);l.layers=this.layers,this.add(l);const c=new wn(Br,kr,e,t);c.layers=this.layers,this.add(c);const u=new wn(Br,kr,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,l,c]=t;for(const u of t)this.remove(u);if(e===Ui)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Vo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,l,c,u,d]=this.children,p=e.getRenderTarget(),g=e.getActiveCubeFace(),v=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const E=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,l),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,u),n.texture.generateMipmaps=E,e.setRenderTarget(n,5,i),e.render(t,d),e.setRenderTarget(p,g,v),e.xr.enabled=M,n.texture.needsPMREMUpdate=!0}}class _h extends dn{constructor(e,t,n,i,s,a,l,c,u,d){e=e!==void 0?e:[],t=t!==void 0?t:Kr,super(e,t,n,i,s,a,l,c,u,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Bd extends li{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new _h(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Gn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Hs(5,5,5),s=new Cn({name:"CubemapFromEquirect",uniforms:ts(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Nn,blending:Oi});s.uniforms.tEquirect.value=t;const a=new In(i,s),l=t.minFilter;return t.minFilter===Ni&&(t.minFilter=Gn),new Fd(1,10,this).update(e,a),t.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}const Aa=new W,kd=new W,Hd=new _t;class Ki{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Aa.subVectors(n,t).cross(kd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Aa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Hd.getNormalMatrix(e),i=this.coplanarPoint(Aa).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const lr=new Mi,vo=new W;class Bl{constructor(e=new Ki,t=new Ki,n=new Ki,i=new Ki,s=new Ki,a=new Ki){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(i),l[4].copy(s),l[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ui){const n=this.planes,i=e.elements,s=i[0],a=i[1],l=i[2],c=i[3],u=i[4],d=i[5],p=i[6],g=i[7],v=i[8],M=i[9],E=i[10],x=i[11],y=i[12],N=i[13],D=i[14],U=i[15];if(n[0].setComponents(c-s,g-u,x-v,U-y).normalize(),n[1].setComponents(c+s,g+u,x+v,U+y).normalize(),n[2].setComponents(c+a,g+d,x+M,U+N).normalize(),n[3].setComponents(c-a,g-d,x-M,U-N).normalize(),n[4].setComponents(c-l,g-p,x-E,U-D).normalize(),t===Ui)n[5].setComponents(c+l,g+p,x+E,U+D).normalize();else if(t===Vo)n[5].setComponents(l,p,E,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),lr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),lr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(lr)}intersectsSprite(e){return lr.center.set(0,0,0),lr.radius=.7071067811865476,lr.applyMatrix4(e.matrixWorld),this.intersectsSphere(lr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(vo.x=i.normal.x>0?e.max.x:e.min.x,vo.y=i.normal.y>0?e.max.y:e.min.y,vo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(vo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function vh(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function zd(r){const e=new WeakMap;function t(l,c){const u=l.array,d=l.usage,p=u.byteLength,g=r.createBuffer();r.bindBuffer(c,g),r.bufferData(c,u,d),l.onUploadCallback();let v;if(u instanceof Float32Array)v=r.FLOAT;else if(u instanceof Uint16Array)l.isFloat16BufferAttribute?v=r.HALF_FLOAT:v=r.UNSIGNED_SHORT;else if(u instanceof Int16Array)v=r.SHORT;else if(u instanceof Uint32Array)v=r.UNSIGNED_INT;else if(u instanceof Int32Array)v=r.INT;else if(u instanceof Int8Array)v=r.BYTE;else if(u instanceof Uint8Array)v=r.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)v=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:v,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:p}}function n(l,c,u){const d=c.array,p=c._updateRange,g=c.updateRanges;if(r.bindBuffer(u,l),p.count===-1&&g.length===0&&r.bufferSubData(u,0,d),g.length!==0){for(let v=0,M=g.length;v<M;v++){const E=g[v];r.bufferSubData(u,E.start*d.BYTES_PER_ELEMENT,d,E.start,E.count)}c.clearUpdateRanges()}p.count!==-1&&(r.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count),p.count=-1),c.onUploadCallback()}function i(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function s(l){l.isInterleavedBufferAttribute&&(l=l.data);const c=e.get(l);c&&(r.deleteBuffer(c.buffer),e.delete(l))}function a(l,c){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const d=e.get(l);(!d||d.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const u=e.get(l);if(u===void 0)e.set(l,t(l,c));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,l,c),u.version=l.version}}return{get:i,remove:s,update:a}}class qo extends ui{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,l=Math.floor(n),c=Math.floor(i),u=l+1,d=c+1,p=e/l,g=t/c,v=[],M=[],E=[],x=[];for(let y=0;y<d;y++){const N=y*g-a;for(let D=0;D<u;D++){const U=D*p-s;M.push(U,-N,0),E.push(0,0,1),x.push(D/l),x.push(1-y/c)}}for(let y=0;y<c;y++)for(let N=0;N<l;N++){const D=N+u*y,U=N+u*(y+1),f=N+1+u*(y+1),V=N+1+u*y;v.push(D,U,V),v.push(U,f,V)}this.setIndex(v),this.setAttribute("position",new ci(M,3)),this.setAttribute("normal",new ci(E,3)),this.setAttribute("uv",new ci(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qo(e.width,e.height,e.widthSegments,e.heightSegments)}}var Vd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Wd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Kd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$d=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Zd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Jd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ep=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,tp=`#ifdef USE_IRIDESCENCE
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
#endif`,np=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ip=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,rp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,op=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ap=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,up=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,hp=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
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
} // validated`,fp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,dp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,pp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_p=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vp="gl_FragColor = linearToOutputTexel( gl_FragColor );",xp=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yp=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Mp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Sp=`#ifdef USE_ENVMAP
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
#endif`,Tp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ep=`#ifdef USE_ENVMAP
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
#endif`,bp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ap=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cp=`#ifdef USE_GRADIENTMAP
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
}`,Pp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ip=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,Np=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Up=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Op=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Fp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Hp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
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
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,zp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Vp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Gp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Yp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Kp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$p=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Zp=`#if defined( USE_POINTS_UV )
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
#endif`,Jp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,em=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,im=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,rm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
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
vec3 nonPerturbedNormal = normal;`,om=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,am=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,um=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
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
#endif`,hm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,_m=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ym=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Em=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,bm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Am=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,wm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Cm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pm=`#ifdef USE_SKINNING
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
#endif`,Lm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Im=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Nm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Um=`#ifdef USE_TRANSMISSION
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
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Om=`#ifdef USE_TRANSMISSION
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
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Fm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
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
#endif`,Bm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
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
#endif`,km=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
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
#endif`,Hm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const zm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,Ym=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Km=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,$m=`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Zm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qm=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,eg=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tg=`#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,ng=`uniform vec3 diffuse;
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
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ig=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,rg=`#define LAMBERT
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
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,og=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ag=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,lg=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,cg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,ug=`#define PHONG
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
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,fg=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
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
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,pg=`#define TOON
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
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mg=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,gg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_g=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,vg=`uniform vec3 color;
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
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,xg=`uniform float rotation;
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
}`,yg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,gt={alphahash_fragment:Vd,alphahash_pars_fragment:Gd,alphamap_fragment:Wd,alphamap_pars_fragment:Xd,alphatest_fragment:jd,alphatest_pars_fragment:qd,aomap_fragment:Yd,aomap_pars_fragment:Kd,batching_pars_vertex:$d,batching_vertex:Zd,begin_vertex:Jd,beginnormal_vertex:Qd,bsdfs:ep,iridescence_fragment:tp,bumpmap_pars_fragment:np,clipping_planes_fragment:ip,clipping_planes_pars_fragment:rp,clipping_planes_pars_vertex:sp,clipping_planes_vertex:op,color_fragment:ap,color_pars_fragment:lp,color_pars_vertex:cp,color_vertex:up,common:hp,cube_uv_reflection_fragment:fp,defaultnormal_vertex:dp,displacementmap_pars_vertex:pp,displacementmap_vertex:mp,emissivemap_fragment:gp,emissivemap_pars_fragment:_p,colorspace_fragment:vp,colorspace_pars_fragment:xp,envmap_fragment:yp,envmap_common_pars_fragment:Mp,envmap_pars_fragment:Sp,envmap_pars_vertex:Tp,envmap_physical_pars_fragment:Np,envmap_vertex:Ep,fog_vertex:bp,fog_pars_vertex:Ap,fog_fragment:wp,fog_pars_fragment:Rp,gradientmap_pars_fragment:Cp,lightmap_pars_fragment:Pp,lights_lambert_fragment:Lp,lights_lambert_pars_fragment:Dp,lights_pars_begin:Ip,lights_toon_fragment:Up,lights_toon_pars_fragment:Op,lights_phong_fragment:Fp,lights_phong_pars_fragment:Bp,lights_physical_fragment:kp,lights_physical_pars_fragment:Hp,lights_fragment_begin:zp,lights_fragment_maps:Vp,lights_fragment_end:Gp,logdepthbuf_fragment:Wp,logdepthbuf_pars_fragment:Xp,logdepthbuf_pars_vertex:jp,logdepthbuf_vertex:qp,map_fragment:Yp,map_pars_fragment:Kp,map_particle_fragment:$p,map_particle_pars_fragment:Zp,metalnessmap_fragment:Jp,metalnessmap_pars_fragment:Qp,morphinstance_vertex:em,morphcolor_vertex:tm,morphnormal_vertex:nm,morphtarget_pars_vertex:im,morphtarget_vertex:rm,normal_fragment_begin:sm,normal_fragment_maps:om,normal_pars_fragment:am,normal_pars_vertex:lm,normal_vertex:cm,normalmap_pars_fragment:um,clearcoat_normal_fragment_begin:hm,clearcoat_normal_fragment_maps:fm,clearcoat_pars_fragment:dm,iridescence_pars_fragment:pm,opaque_fragment:mm,packing:gm,premultiplied_alpha_fragment:_m,project_vertex:vm,dithering_fragment:xm,dithering_pars_fragment:ym,roughnessmap_fragment:Mm,roughnessmap_pars_fragment:Sm,shadowmap_pars_fragment:Tm,shadowmap_pars_vertex:Em,shadowmap_vertex:bm,shadowmask_pars_fragment:Am,skinbase_vertex:wm,skinning_pars_vertex:Rm,skinning_vertex:Cm,skinnormal_vertex:Pm,specularmap_fragment:Lm,specularmap_pars_fragment:Dm,tonemapping_fragment:Im,tonemapping_pars_fragment:Nm,transmission_fragment:Um,transmission_pars_fragment:Om,uv_pars_fragment:Fm,uv_pars_vertex:Bm,uv_vertex:km,worldpos_vertex:Hm,background_vert:zm,background_frag:Vm,backgroundCube_vert:Gm,backgroundCube_frag:Wm,cube_vert:Xm,cube_frag:jm,depth_vert:qm,depth_frag:Ym,distanceRGBA_vert:Km,distanceRGBA_frag:$m,equirect_vert:Zm,equirect_frag:Jm,linedashed_vert:Qm,linedashed_frag:eg,meshbasic_vert:tg,meshbasic_frag:ng,meshlambert_vert:ig,meshlambert_frag:rg,meshmatcap_vert:sg,meshmatcap_frag:og,meshnormal_vert:ag,meshnormal_frag:lg,meshphong_vert:cg,meshphong_frag:ug,meshphysical_vert:hg,meshphysical_frag:fg,meshtoon_vert:dg,meshtoon_frag:pg,points_vert:mg,points_frag:gg,shadow_vert:_g,shadow_frag:vg,sprite_vert:xg,sprite_frag:yg},Pe={common:{diffuse:{value:new at(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new _t}},envmap:{envMap:{value:null},envMapRotation:{value:new _t},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new _t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new _t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new _t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new _t},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new _t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new _t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new _t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new _t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new at(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new at(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0},uvTransform:{value:new _t}},sprite:{diffuse:{value:new at(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}}},mi={basic:{uniforms:bn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:bn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new at(0)}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:bn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new at(0)},specular:{value:new at(1118481)},shininess:{value:30}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:bn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new at(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:bn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new at(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:bn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:bn([Pe.points,Pe.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:bn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:bn([Pe.common,Pe.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:bn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:bn([Pe.sprite,Pe.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new _t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new _t}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distanceRGBA:{uniforms:bn([Pe.common,Pe.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distanceRGBA_vert,fragmentShader:gt.distanceRGBA_frag},shadow:{uniforms:bn([Pe.lights,Pe.fog,{color:{value:new at(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};mi.physical={uniforms:bn([mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new _t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new _t},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new _t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new _t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new _t},sheen:{value:0},sheenColor:{value:new at(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new _t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new _t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new _t},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new _t},attenuationDistance:{value:0},attenuationColor:{value:new at(0)},specularColor:{value:new at(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new _t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new _t},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new _t}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};const xo={r:0,b:0,g:0},cr=new yi,Mg=new vt;function Sg(r,e,t,n,i,s,a){const l=new at(0);let c=s===!0?0:1,u,d,p=null,g=0,v=null;function M(N){let D=N.isScene===!0?N.background:null;return D&&D.isTexture&&(D=(N.backgroundBlurriness>0?t:e).get(D)),D}function E(N){let D=!1;const U=M(N);U===null?y(l,c):U&&U.isColor&&(y(U,1),D=!0);const f=r.xr.getEnvironmentBlendMode();f==="additive"?n.buffers.color.setClear(0,0,0,1,a):f==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||D)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function x(N,D){const U=M(D);U&&(U.isCubeTexture||U.mapping===Xo)?(d===void 0&&(d=new In(new Hs(1,1,1),new Cn({name:"BackgroundCubeMaterial",uniforms:ts(mi.backgroundCube.uniforms),vertexShader:mi.backgroundCube.vertexShader,fragmentShader:mi.backgroundCube.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(f,V,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),cr.copy(D.backgroundRotation),cr.x*=-1,cr.y*=-1,cr.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(cr.y*=-1,cr.z*=-1),d.material.uniforms.envMap.value=U,d.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Mg.makeRotationFromEuler(cr)),d.material.toneMapped=Ct.getTransfer(U.colorSpace)!==Gt,(p!==U||g!==U.version||v!==r.toneMapping)&&(d.material.needsUpdate=!0,p=U,g=U.version,v=r.toneMapping),d.layers.enableAll(),N.unshift(d,d.geometry,d.material,0,0,null)):U&&U.isTexture&&(u===void 0&&(u=new In(new qo(2,2),new Cn({name:"BackgroundMaterial",uniforms:ts(mi.background.uniforms),vertexShader:mi.background.vertexShader,fragmentShader:mi.background.fragmentShader,side:Bi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(u)),u.material.uniforms.t2D.value=U,u.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,u.material.toneMapped=Ct.getTransfer(U.colorSpace)!==Gt,U.matrixAutoUpdate===!0&&U.updateMatrix(),u.material.uniforms.uvTransform.value.copy(U.matrix),(p!==U||g!==U.version||v!==r.toneMapping)&&(u.material.needsUpdate=!0,p=U,g=U.version,v=r.toneMapping),u.layers.enableAll(),N.unshift(u,u.geometry,u.material,0,0,null))}function y(N,D){N.getRGB(xo,mh(r)),n.buffers.color.setClear(xo.r,xo.g,xo.b,D,a)}return{getClearColor:function(){return l},setClearColor:function(N,D=1){l.set(N),c=D,y(l,c)},getClearAlpha:function(){return c},setClearAlpha:function(N){c=N,y(l,c)},render:E,addToRenderList:x}}function Tg(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=g(null);let s=i,a=!1;function l(L,G,le,se,fe){let de=!1;const ce=p(se,le,G);s!==ce&&(s=ce,u(s.object)),de=v(L,se,le,fe),de&&M(L,se,le,fe),fe!==null&&e.update(fe,r.ELEMENT_ARRAY_BUFFER),(de||a)&&(a=!1,U(L,G,le,se),fe!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(fe).buffer))}function c(){return r.createVertexArray()}function u(L){return r.bindVertexArray(L)}function d(L){return r.deleteVertexArray(L)}function p(L,G,le){const se=le.wireframe===!0;let fe=n[L.id];fe===void 0&&(fe={},n[L.id]=fe);let de=fe[G.id];de===void 0&&(de={},fe[G.id]=de);let ce=de[se];return ce===void 0&&(ce=g(c()),de[se]=ce),ce}function g(L){const G=[],le=[],se=[];for(let fe=0;fe<t;fe++)G[fe]=0,le[fe]=0,se[fe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:le,attributeDivisors:se,object:L,attributes:{},index:null}}function v(L,G,le,se){const fe=s.attributes,de=G.attributes;let ce=0;const me=le.getAttributes();for(const ae in me)if(me[ae].location>=0){const Le=fe[ae];let ze=de[ae];if(ze===void 0&&(ae==="instanceMatrix"&&L.instanceMatrix&&(ze=L.instanceMatrix),ae==="instanceColor"&&L.instanceColor&&(ze=L.instanceColor)),Le===void 0||Le.attribute!==ze||ze&&Le.data!==ze.data)return!0;ce++}return s.attributesNum!==ce||s.index!==se}function M(L,G,le,se){const fe={},de=G.attributes;let ce=0;const me=le.getAttributes();for(const ae in me)if(me[ae].location>=0){let Le=de[ae];Le===void 0&&(ae==="instanceMatrix"&&L.instanceMatrix&&(Le=L.instanceMatrix),ae==="instanceColor"&&L.instanceColor&&(Le=L.instanceColor));const ze={};ze.attribute=Le,Le&&Le.data&&(ze.data=Le.data),fe[ae]=ze,ce++}s.attributes=fe,s.attributesNum=ce,s.index=se}function E(){const L=s.newAttributes;for(let G=0,le=L.length;G<le;G++)L[G]=0}function x(L){y(L,0)}function y(L,G){const le=s.newAttributes,se=s.enabledAttributes,fe=s.attributeDivisors;le[L]=1,se[L]===0&&(r.enableVertexAttribArray(L),se[L]=1),fe[L]!==G&&(r.vertexAttribDivisor(L,G),fe[L]=G)}function N(){const L=s.newAttributes,G=s.enabledAttributes;for(let le=0,se=G.length;le<se;le++)G[le]!==L[le]&&(r.disableVertexAttribArray(le),G[le]=0)}function D(L,G,le,se,fe,de,ce){ce===!0?r.vertexAttribIPointer(L,G,le,fe,de):r.vertexAttribPointer(L,G,le,se,fe,de)}function U(L,G,le,se){E();const fe=se.attributes,de=le.getAttributes(),ce=G.defaultAttributeValues;for(const me in de){const ae=de[me];if(ae.location>=0){let Ae=fe[me];if(Ae===void 0&&(me==="instanceMatrix"&&L.instanceMatrix&&(Ae=L.instanceMatrix),me==="instanceColor"&&L.instanceColor&&(Ae=L.instanceColor)),Ae!==void 0){const Le=Ae.normalized,ze=Ae.itemSize,xt=e.get(Ae);if(xt===void 0)continue;const bt=xt.buffer,ue=xt.type,Se=xt.bytesPerElement,De=ue===r.INT||ue===r.UNSIGNED_INT||Ae.gpuType===Cl;if(Ae.isInterleavedBufferAttribute){const ke=Ae.data,ht=ke.stride,pt=Ae.offset;if(ke.isInstancedInterleavedBuffer){for(let Qe=0;Qe<ae.locationSize;Qe++)y(ae.location+Qe,ke.meshPerAttribute);L.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=ke.meshPerAttribute*ke.count)}else for(let Qe=0;Qe<ae.locationSize;Qe++)x(ae.location+Qe);r.bindBuffer(r.ARRAY_BUFFER,bt);for(let Qe=0;Qe<ae.locationSize;Qe++)D(ae.location+Qe,ze/ae.locationSize,ue,Le,ht*Se,(pt+ze/ae.locationSize*Qe)*Se,De)}else{if(Ae.isInstancedBufferAttribute){for(let ke=0;ke<ae.locationSize;ke++)y(ae.location+ke,Ae.meshPerAttribute);L.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=Ae.meshPerAttribute*Ae.count)}else for(let ke=0;ke<ae.locationSize;ke++)x(ae.location+ke);r.bindBuffer(r.ARRAY_BUFFER,bt);for(let ke=0;ke<ae.locationSize;ke++)D(ae.location+ke,ze/ae.locationSize,ue,Le,ze*Se,ze/ae.locationSize*ke*Se,De)}}else if(ce!==void 0){const Le=ce[me];if(Le!==void 0)switch(Le.length){case 2:r.vertexAttrib2fv(ae.location,Le);break;case 3:r.vertexAttrib3fv(ae.location,Le);break;case 4:r.vertexAttrib4fv(ae.location,Le);break;default:r.vertexAttrib1fv(ae.location,Le)}}}}N()}function f(){$();for(const L in n){const G=n[L];for(const le in G){const se=G[le];for(const fe in se)d(se[fe].object),delete se[fe];delete G[le]}delete n[L]}}function V(L){if(n[L.id]===void 0)return;const G=n[L.id];for(const le in G){const se=G[le];for(const fe in se)d(se[fe].object),delete se[fe];delete G[le]}delete n[L.id]}function F(L){for(const G in n){const le=n[G];if(le[L.id]===void 0)continue;const se=le[L.id];for(const fe in se)d(se[fe].object),delete se[fe];delete le[L.id]}}function $(){I(),a=!0,s!==i&&(s=i,u(s.object))}function I(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:l,reset:$,resetDefaultState:I,dispose:f,releaseStatesOfGeometry:V,releaseStatesOfProgram:F,initAttributes:E,enableAttribute:x,disableUnusedAttributes:N}}function Eg(r,e,t){let n;function i(u){n=u}function s(u,d){r.drawArrays(n,u,d),t.update(d,n,1)}function a(u,d,p){p!==0&&(r.drawArraysInstanced(n,u,d,p),t.update(d,n,p))}function l(u,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,d,0,p);let v=0;for(let M=0;M<p;M++)v+=d[M];t.update(v,n,1)}function c(u,d,p,g){if(p===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let M=0;M<u.length;M++)a(u[M],d[M],g[M]);else{v.multiDrawArraysInstancedWEBGL(n,u,0,d,0,g,0,p);let M=0;for(let E=0;E<p;E++)M+=d[E];for(let E=0;E<g.length;E++)t.update(M,n,g[E])}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=l,this.renderMultiDrawInstances=c}function bg(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const V=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(V.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(V){return!(V!==Kn&&n.convert(V)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(V){const F=V===Fi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(V!==ki&&n.convert(V)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&V!==oi&&!F)}function c(V){if(V==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";V="mediump"}return V==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const d=c(u);d!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",d,"instead."),u=d);const p=t.logarithmicDepthBuffer===!0,g=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),v=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=r.getParameter(r.MAX_TEXTURE_SIZE),E=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),y=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),N=r.getParameter(r.MAX_VARYING_VECTORS),D=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),U=v>0,f=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:l,precision:u,logarithmicDepthBuffer:p,maxTextures:g,maxVertexTextures:v,maxTextureSize:M,maxCubemapSize:E,maxAttributes:x,maxVertexUniforms:y,maxVaryings:N,maxFragmentUniforms:D,vertexTextures:U,maxSamples:f}}function Ag(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new Ki,l=new _t,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,g){const v=p.length!==0||g||n!==0||i;return i=g,n=p.length,v},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,g){t=d(p,g,0)},this.setState=function(p,g,v){const M=p.clippingPlanes,E=p.clipIntersection,x=p.clipShadows,y=r.get(p);if(!i||M===null||M.length===0||s&&!x)s?d(null):u();else{const N=s?0:n,D=N*4;let U=y.clippingState||null;c.value=U,U=d(M,g,D,v);for(let f=0;f!==D;++f)U[f]=t[f];y.clippingState=U,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=N}};function u(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(p,g,v,M){const E=p!==null?p.length:0;let x=null;if(E!==0){if(x=c.value,M!==!0||x===null){const y=v+E*4,N=g.matrixWorldInverse;l.getNormalMatrix(N),(x===null||x.length<y)&&(x=new Float32Array(y));for(let D=0,U=v;D!==E;++D,U+=4)a.copy(p[D]).applyMatrix4(N,l),a.normal.toArray(x,U),x[U+3]=a.constant}c.value=x,c.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,x}}function wg(r){let e=new WeakMap;function t(a,l){return l===ja?a.mapping=Kr:l===qa&&(a.mapping=$r),a}function n(a){if(a&&a.isTexture){const l=a.mapping;if(l===ja||l===qa)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const u=new Bd(c.height);return u.fromEquirectangularTexture(r,a),e.set(a,u),a.addEventListener("dispose",i),t(u.texture,a.mapping)}else return null}}return a}function i(a){const l=a.target;l.removeEventListener("dispose",i);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Yo extends gh{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,l=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,l-=d*this.view.offsetY,c=l-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,l,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Vr=4,kc=[.125,.215,.35,.446,.526,.582],pr=20,wa=new Yo,Hc=new at;let Ra=null,Ca=0,Pa=0,La=!1;const fr=(1+Math.sqrt(5))/2,Hr=1/fr,zc=[new W(-fr,Hr,0),new W(fr,Hr,0),new W(-Hr,0,fr),new W(Hr,0,fr),new W(0,fr,-Hr),new W(0,fr,Hr),new W(-1,1,-1),new W(1,1,-1),new W(-1,1,1),new W(1,1,1)];class Vc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ra=this._renderer.getRenderTarget(),Ca=this._renderer.getActiveCubeFace(),Pa=this._renderer.getActiveMipmapLevel(),La=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ra,Ca,Pa),this._renderer.xr.enabled=La,e.scissorTest=!1,yo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Kr||e.mapping===$r?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ra=this._renderer.getRenderTarget(),Ca=this._renderer.getActiveCubeFace(),Pa=this._renderer.getActiveMipmapLevel(),La=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Gn,minFilter:Gn,generateMipmaps:!1,type:Fi,format:Kn,colorSpace:gn,depthBuffer:!1},i=Gc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gc(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Rg(s)),this._blurMaterial=Cg(s,e,t)}return i}_compileMaterial(e){const t=new In(this._lodPlanes[0],e);this._renderer.compile(t,wa)}_sceneToCubeUV(e,t,n,i){const l=new wn(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,p=d.autoClear,g=d.toneMapping;d.getClearColor(Hc),d.toneMapping=er,d.autoClear=!1;const v=new Ji({name:"PMREM.Background",side:Nn,depthWrite:!1,depthTest:!1}),M=new In(new Hs,v);let E=!1;const x=e.background;x?x.isColor&&(v.color.copy(x),e.background=null,E=!0):(v.color.copy(Hc),E=!0);for(let y=0;y<6;y++){const N=y%3;N===0?(l.up.set(0,c[y],0),l.lookAt(u[y],0,0)):N===1?(l.up.set(0,0,c[y]),l.lookAt(0,u[y],0)):(l.up.set(0,c[y],0),l.lookAt(0,0,u[y]));const D=this._cubeSize;yo(i,N*D,y>2?D:0,D,D),d.setRenderTarget(i),E&&d.render(M,l),d.render(e,l)}M.geometry.dispose(),M.material.dispose(),d.toneMapping=g,d.autoClear=p,e.background=x}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Kr||e.mapping===$r;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wc());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new In(this._lodPlanes[0],s),l=s.uniforms;l.envMap.value=e;const c=this._cubeSize;yo(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,wa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),l=zc[(i-s-1)%zc.length];this._blur(e,s-1,s,a,l)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,l){const c=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,p=new In(this._lodPlanes[i],u),g=u.uniforms,v=this._sizeLods[n]-1,M=isFinite(s)?Math.PI/(2*v):2*Math.PI/(2*pr-1),E=s/M,x=isFinite(s)?1+Math.floor(d*E):pr;x>pr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${pr}`);const y=[];let N=0;for(let F=0;F<pr;++F){const $=F/E,I=Math.exp(-$*$/2);y.push(I),F===0?N+=I:F<x&&(N+=2*I)}for(let F=0;F<y.length;F++)y[F]=y[F]/N;g.envMap.value=e.texture,g.samples.value=x,g.weights.value=y,g.latitudinal.value=a==="latitudinal",l&&(g.poleAxis.value=l);const{_lodMax:D}=this;g.dTheta.value=M,g.mipInt.value=D-n;const U=this._sizeLods[i],f=3*U*(i>D-Vr?i-D+Vr:0),V=4*(this._cubeSize-U);yo(t,f,V,3*U,2*U),c.setRenderTarget(t),c.render(p,wa)}}function Rg(r){const e=[],t=[],n=[];let i=r;const s=r-Vr+1+kc.length;for(let a=0;a<s;a++){const l=Math.pow(2,i);t.push(l);let c=1/l;a>r-Vr?c=kc[a-r+Vr-1]:a===0&&(c=0),n.push(c);const u=1/(l-2),d=-u,p=1+u,g=[d,d,p,d,p,p,d,d,p,p,d,p],v=6,M=6,E=3,x=2,y=1,N=new Float32Array(E*M*v),D=new Float32Array(x*M*v),U=new Float32Array(y*M*v);for(let V=0;V<v;V++){const F=V%3*2/3-1,$=V>2?0:-1,I=[F,$,0,F+2/3,$,0,F+2/3,$+1,0,F,$,0,F+2/3,$+1,0,F,$+1,0];N.set(I,E*M*V),D.set(g,x*M*V);const L=[V,V,V,V,V,V];U.set(L,y*M*V)}const f=new ui;f.setAttribute("position",new Pn(N,E)),f.setAttribute("uv",new Pn(D,x)),f.setAttribute("faceIndex",new Pn(U,y)),e.push(f),i>Vr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Gc(r,e,t){const n=new li(r,e,t);return n.texture.mapping=Xo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function yo(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Cg(r,e,t){const n=new Float32Array(pr),i=new W(0,1,0);return new Cn({name:"SphericalGaussianBlur",defines:{n:pr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:kl(),fragmentShader:`

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
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function Wc(){return new Cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kl(),fragmentShader:`

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
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function Xc(){return new Cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function kl(){return`

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
	`}function Pg(r){let e=new WeakMap,t=null;function n(l){if(l&&l.isTexture){const c=l.mapping,u=c===ja||c===qa,d=c===Kr||c===$r;if(u||d){let p=e.get(l);const g=p!==void 0?p.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==g)return t===null&&(t=new Vc(r)),p=u?t.fromEquirectangular(l,p):t.fromCubemap(l,p),p.texture.pmremVersion=l.pmremVersion,e.set(l,p),p.texture;if(p!==void 0)return p.texture;{const v=l.image;return u&&v&&v.height>0||d&&v&&i(v)?(t===null&&(t=new Vc(r)),p=u?t.fromEquirectangular(l):t.fromCubemap(l),p.texture.pmremVersion=l.pmremVersion,e.set(l,p),l.addEventListener("dispose",s),p.texture):null}}}return l}function i(l){let c=0;const u=6;for(let d=0;d<u;d++)l[d]!==void 0&&c++;return c===u}function s(l){const c=l.target;c.removeEventListener("dispose",s);const u=e.get(c);u!==void 0&&(e.delete(c),u.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Lg(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Xr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Dg(r,e,t,n){const i={},s=new WeakMap;function a(p){const g=p.target;g.index!==null&&e.remove(g.index);for(const M in g.attributes)e.remove(g.attributes[M]);for(const M in g.morphAttributes){const E=g.morphAttributes[M];for(let x=0,y=E.length;x<y;x++)e.remove(E[x])}g.removeEventListener("dispose",a),delete i[g.id];const v=s.get(g);v&&(e.remove(v),s.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function l(p,g){return i[g.id]===!0||(g.addEventListener("dispose",a),i[g.id]=!0,t.memory.geometries++),g}function c(p){const g=p.attributes;for(const M in g)e.update(g[M],r.ARRAY_BUFFER);const v=p.morphAttributes;for(const M in v){const E=v[M];for(let x=0,y=E.length;x<y;x++)e.update(E[x],r.ARRAY_BUFFER)}}function u(p){const g=[],v=p.index,M=p.attributes.position;let E=0;if(v!==null){const N=v.array;E=v.version;for(let D=0,U=N.length;D<U;D+=3){const f=N[D+0],V=N[D+1],F=N[D+2];g.push(f,V,V,F,F,f)}}else if(M!==void 0){const N=M.array;E=M.version;for(let D=0,U=N.length/3-1;D<U;D+=3){const f=D+0,V=D+1,F=D+2;g.push(f,V,V,F,F,f)}}else return;const x=new(lh(g)?ph:dh)(g,1);x.version=E;const y=s.get(p);y&&e.remove(y),s.set(p,x)}function d(p){const g=s.get(p);if(g){const v=p.index;v!==null&&g.version<v.version&&u(p)}else u(p);return s.get(p)}return{get:l,update:c,getWireframeAttribute:d}}function Ig(r,e,t){let n;function i(g){n=g}let s,a;function l(g){s=g.type,a=g.bytesPerElement}function c(g,v){r.drawElements(n,v,s,g*a),t.update(v,n,1)}function u(g,v,M){M!==0&&(r.drawElementsInstanced(n,v,s,g*a,M),t.update(v,n,M))}function d(g,v,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,v,0,s,g,0,M);let x=0;for(let y=0;y<M;y++)x+=v[y];t.update(x,n,1)}function p(g,v,M,E){if(M===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let y=0;y<g.length;y++)u(g[y]/a,v[y],E[y]);else{x.multiDrawElementsInstancedWEBGL(n,v,0,s,g,0,E,0,M);let y=0;for(let N=0;N<M;N++)y+=v[N];for(let N=0;N<E.length;N++)t.update(y,n,E[N])}}this.setMode=i,this.setIndex=l,this.render=c,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function Ng(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,l){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=l*(s/3);break;case r.LINES:t.lines+=l*(s/2);break;case r.LINE_STRIP:t.lines+=l*(s-1);break;case r.LINE_LOOP:t.lines+=l*s;break;case r.POINTS:t.points+=l*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Ug(r,e,t){const n=new WeakMap,i=new Bt;function s(a,l,c){const u=a.morphTargetInfluences,d=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,p=d!==void 0?d.length:0;let g=n.get(l);if(g===void 0||g.count!==p){let L=function(){$.dispose(),n.delete(l),l.removeEventListener("dispose",L)};var v=L;g!==void 0&&g.texture.dispose();const M=l.morphAttributes.position!==void 0,E=l.morphAttributes.normal!==void 0,x=l.morphAttributes.color!==void 0,y=l.morphAttributes.position||[],N=l.morphAttributes.normal||[],D=l.morphAttributes.color||[];let U=0;M===!0&&(U=1),E===!0&&(U=2),x===!0&&(U=3);let f=l.attributes.position.count*U,V=1;f>e.maxTextureSize&&(V=Math.ceil(f/e.maxTextureSize),f=e.maxTextureSize);const F=new Float32Array(f*V*4*p),$=new uh(F,f,V,p);$.type=oi,$.needsUpdate=!0;const I=U*4;for(let G=0;G<p;G++){const le=y[G],se=N[G],fe=D[G],de=f*V*4*G;for(let ce=0;ce<le.count;ce++){const me=ce*I;M===!0&&(i.fromBufferAttribute(le,ce),F[de+me+0]=i.x,F[de+me+1]=i.y,F[de+me+2]=i.z,F[de+me+3]=0),E===!0&&(i.fromBufferAttribute(se,ce),F[de+me+4]=i.x,F[de+me+5]=i.y,F[de+me+6]=i.z,F[de+me+7]=0),x===!0&&(i.fromBufferAttribute(fe,ce),F[de+me+8]=i.x,F[de+me+9]=i.y,F[de+me+10]=i.z,F[de+me+11]=fe.itemSize===4?i.w:1)}}g={count:p,texture:$,size:new Xe(f,V)},n.set(l,g),l.addEventListener("dispose",L)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let M=0;for(let x=0;x<u.length;x++)M+=u[x];const E=l.morphTargetsRelative?1:1-M;c.getUniforms().setValue(r,"morphTargetBaseInfluence",E),c.getUniforms().setValue(r,"morphTargetInfluences",u)}c.getUniforms().setValue(r,"morphTargetsTexture",g.texture,t),c.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:s}}function Og(r,e,t,n){let i=new WeakMap;function s(c){const u=n.render.frame,d=c.geometry,p=e.get(c,d);if(i.get(p)!==u&&(e.update(p),i.set(p,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),i.get(c)!==u&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,u))),c.isSkinnedMesh){const g=c.skeleton;i.get(g)!==u&&(g.update(),i.set(g,u))}return p}function a(){i=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:a}}class xh extends dn{constructor(e,t,n,i,s,a,l,c,u,d=Wr){if(d!==Wr&&d!==Qr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===Wr&&(n=gr),n===void 0&&d===Qr&&(n=Jr),super(null,i,s,a,l,c,d,n,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=l!==void 0?l:Rn,this.minFilter=c!==void 0?c:Rn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const yh=new dn,jc=new xh(1,1),Mh=new uh,Sh=new Td,Th=new _h,qc=[],Yc=[],Kc=new Float32Array(16),$c=new Float32Array(9),Zc=new Float32Array(4);function os(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=qc[i];if(s===void 0&&(s=new Float32Array(i),qc[i]=s),e!==0){n.toArray(s,0);for(let a=1,l=0;a!==e;++a)l+=t,r[a].toArray(s,l)}return s}function cn(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function un(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Ko(r,e){let t=Yc[e];t===void 0&&(t=new Int32Array(e),Yc[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Fg(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Bg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;r.uniform2fv(this.addr,e),un(t,e)}}function kg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(cn(t,e))return;r.uniform3fv(this.addr,e),un(t,e)}}function Hg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;r.uniform4fv(this.addr,e),un(t,e)}}function zg(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(cn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),un(t,e)}else{if(cn(t,n))return;Zc.set(n),r.uniformMatrix2fv(this.addr,!1,Zc),un(t,n)}}function Vg(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(cn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),un(t,e)}else{if(cn(t,n))return;$c.set(n),r.uniformMatrix3fv(this.addr,!1,$c),un(t,n)}}function Gg(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(cn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),un(t,e)}else{if(cn(t,n))return;Kc.set(n),r.uniformMatrix4fv(this.addr,!1,Kc),un(t,n)}}function Wg(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Xg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;r.uniform2iv(this.addr,e),un(t,e)}}function jg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(cn(t,e))return;r.uniform3iv(this.addr,e),un(t,e)}}function qg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;r.uniform4iv(this.addr,e),un(t,e)}}function Yg(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Kg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;r.uniform2uiv(this.addr,e),un(t,e)}}function $g(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(cn(t,e))return;r.uniform3uiv(this.addr,e),un(t,e)}}function Zg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;r.uniform4uiv(this.addr,e),un(t,e)}}function Jg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(jc.compareFunction=oh,s=jc):s=yh,t.setTexture2D(e||s,i)}function Qg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Sh,i)}function e_(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Th,i)}function t_(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Mh,i)}function n_(r){switch(r){case 5126:return Fg;case 35664:return Bg;case 35665:return kg;case 35666:return Hg;case 35674:return zg;case 35675:return Vg;case 35676:return Gg;case 5124:case 35670:return Wg;case 35667:case 35671:return Xg;case 35668:case 35672:return jg;case 35669:case 35673:return qg;case 5125:return Yg;case 36294:return Kg;case 36295:return $g;case 36296:return Zg;case 35678:case 36198:case 36298:case 36306:case 35682:return Jg;case 35679:case 36299:case 36307:return Qg;case 35680:case 36300:case 36308:case 36293:return e_;case 36289:case 36303:case 36311:case 36292:return t_}}function i_(r,e){r.uniform1fv(this.addr,e)}function r_(r,e){const t=os(e,this.size,2);r.uniform2fv(this.addr,t)}function s_(r,e){const t=os(e,this.size,3);r.uniform3fv(this.addr,t)}function o_(r,e){const t=os(e,this.size,4);r.uniform4fv(this.addr,t)}function a_(r,e){const t=os(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function l_(r,e){const t=os(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function c_(r,e){const t=os(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function u_(r,e){r.uniform1iv(this.addr,e)}function h_(r,e){r.uniform2iv(this.addr,e)}function f_(r,e){r.uniform3iv(this.addr,e)}function d_(r,e){r.uniform4iv(this.addr,e)}function p_(r,e){r.uniform1uiv(this.addr,e)}function m_(r,e){r.uniform2uiv(this.addr,e)}function g_(r,e){r.uniform3uiv(this.addr,e)}function __(r,e){r.uniform4uiv(this.addr,e)}function v_(r,e,t){const n=this.cache,i=e.length,s=Ko(t,i);cn(n,s)||(r.uniform1iv(this.addr,s),un(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||yh,s[a])}function x_(r,e,t){const n=this.cache,i=e.length,s=Ko(t,i);cn(n,s)||(r.uniform1iv(this.addr,s),un(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Sh,s[a])}function y_(r,e,t){const n=this.cache,i=e.length,s=Ko(t,i);cn(n,s)||(r.uniform1iv(this.addr,s),un(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Th,s[a])}function M_(r,e,t){const n=this.cache,i=e.length,s=Ko(t,i);cn(n,s)||(r.uniform1iv(this.addr,s),un(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Mh,s[a])}function S_(r){switch(r){case 5126:return i_;case 35664:return r_;case 35665:return s_;case 35666:return o_;case 35674:return a_;case 35675:return l_;case 35676:return c_;case 5124:case 35670:return u_;case 35667:case 35671:return h_;case 35668:case 35672:return f_;case 35669:case 35673:return d_;case 5125:return p_;case 36294:return m_;case 36295:return g_;case 36296:return __;case 35678:case 36198:case 36298:case 36306:case 35682:return v_;case 35679:case 36299:case 36307:return x_;case 35680:case 36300:case 36308:case 36293:return y_;case 36289:case 36303:case 36311:case 36292:return M_}}class T_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=n_(t.type)}}class E_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=S_(t.type)}}class b_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const l=i[s];l.setValue(e,t[l.id],n)}}}const Da=/(\w+)(\])?(\[|\.)?/g;function Jc(r,e){r.seq.push(e),r.map[e.id]=e}function A_(r,e,t){const n=r.name,i=n.length;for(Da.lastIndex=0;;){const s=Da.exec(n),a=Da.lastIndex;let l=s[1];const c=s[2]==="]",u=s[3];if(c&&(l=l|0),u===void 0||u==="["&&a+2===i){Jc(t,u===void 0?new T_(l,r,e):new E_(l,r,e));break}else{let p=t.map[l];p===void 0&&(p=new b_(l),Jc(t,p)),t=p}}}class Oo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);A_(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const l=t[s],c=n[l.id];c.needsUpdate!==!1&&l.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Qc(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const w_=37297;let R_=0;function C_(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const l=a+1;n.push(`${l===e?">":" "} ${l}: ${t[a]}`)}return n.join(`
`)}function P_(r){const e=Ct.getPrimaries(Ct.workingColorSpace),t=Ct.getPrimaries(r);let n;switch(e===t?n="":e===zo&&t===Ho?n="LinearDisplayP3ToLinearSRGB":e===Ho&&t===zo&&(n="LinearSRGBToLinearDisplayP3"),r){case gn:case jo:return[n,"LinearTransferOETF"];case An:case Ol:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function eu(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+C_(r.getShaderSource(e),a)}else return i}function L_(r,e){const t=P_(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function D_(r,e){let t;switch(e){case zu:t="Linear";break;case Vu:t="Reinhard";break;case Gu:t="OptimizedCineon";break;case Wu:t="ACESFilmic";break;case Xu:t="AgX";break;case ju:t="Neutral";break;case Hf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Mo=new W;function I_(){Ct.getLuminanceCoefficients(Mo);const r=Mo.x.toFixed(4),e=Mo.y.toFixed(4),t=Mo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function N_(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ps).join(`
`)}function U_(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function O_(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let l=1;s.type===r.FLOAT_MAT2&&(l=2),s.type===r.FLOAT_MAT3&&(l=3),s.type===r.FLOAT_MAT4&&(l=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:l}}return t}function Ps(r){return r!==""}function tu(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function nu(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const F_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tl(r){return r.replace(F_,k_)}const B_=new Map;function k_(r,e){let t=gt[e];if(t===void 0){const n=B_.get(e);if(n!==void 0)t=gt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Tl(t)}const H_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function iu(r){return r.replace(H_,z_)}function z_(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function ru(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function V_(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===ku?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===ff?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Di&&(e="SHADOWMAP_TYPE_VSM"),e}function G_(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Kr:case $r:e="ENVMAP_TYPE_CUBE";break;case Xo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function W_(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case $r:e="ENVMAP_MODE_REFRACTION";break}return e}function X_(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Hu:e="ENVMAP_BLENDING_MULTIPLY";break;case Bf:e="ENVMAP_BLENDING_MIX";break;case kf:e="ENVMAP_BLENDING_ADD";break}return e}function j_(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function q_(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,l=t.fragmentShader;const c=V_(t),u=G_(t),d=W_(t),p=X_(t),g=j_(t),v=N_(t),M=U_(s),E=i.createProgram();let x,y,N=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Ps).join(`
`),x.length>0&&(x+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Ps).join(`
`),y.length>0&&(y+=`
`)):(x=[ru(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ps).join(`
`),y=[ru(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==er?"#define TONE_MAPPING":"",t.toneMapping!==er?gt.tonemapping_pars_fragment:"",t.toneMapping!==er?D_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,L_("linearToOutputTexel",t.outputColorSpace),I_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ps).join(`
`)),a=Tl(a),a=tu(a,t),a=nu(a,t),l=Tl(l),l=tu(l,t),l=nu(l,t),a=iu(a),l=iu(l),t.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,x=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,y=["#define varying in",t.glslVersion===vc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const D=N+x+a,U=N+y+l,f=Qc(i,i.VERTEX_SHADER,D),V=Qc(i,i.FRAGMENT_SHADER,U);i.attachShader(E,f),i.attachShader(E,V),t.index0AttributeName!==void 0?i.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(E,0,"position"),i.linkProgram(E);function F(G){if(r.debug.checkShaderErrors){const le=i.getProgramInfoLog(E).trim(),se=i.getShaderInfoLog(f).trim(),fe=i.getShaderInfoLog(V).trim();let de=!0,ce=!0;if(i.getProgramParameter(E,i.LINK_STATUS)===!1)if(de=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,E,f,V);else{const me=eu(i,f,"vertex"),ae=eu(i,V,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(E,i.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+le+`
`+me+`
`+ae)}else le!==""?console.warn("THREE.WebGLProgram: Program Info Log:",le):(se===""||fe==="")&&(ce=!1);ce&&(G.diagnostics={runnable:de,programLog:le,vertexShader:{log:se,prefix:x},fragmentShader:{log:fe,prefix:y}})}i.deleteShader(f),i.deleteShader(V),$=new Oo(i,E),I=O_(i,E)}let $;this.getUniforms=function(){return $===void 0&&F(this),$};let I;this.getAttributes=function(){return I===void 0&&F(this),I};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=i.getProgramParameter(E,w_)),L},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=R_++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=f,this.fragmentShader=V,this}let Y_=0;class K_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new $_(e),t.set(e,n)),n}}class $_{constructor(e){this.id=Y_++,this.code=e,this.usedTimes=0}}function Z_(r,e,t,n,i,s,a){const l=new hh,c=new K_,u=new Set,d=[],p=i.logarithmicDepthBuffer,g=i.vertexTextures;let v=i.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(I){return u.add(I),I===0?"uv":`uv${I}`}function x(I,L,G,le,se){const fe=le.fog,de=se.geometry,ce=I.isMeshStandardMaterial?le.environment:null,me=(I.isMeshStandardMaterial?t:e).get(I.envMap||ce),ae=me&&me.mapping===Xo?me.image.height:null,Ae=M[I.type];I.precision!==null&&(v=i.getMaxPrecision(I.precision),v!==I.precision&&console.warn("THREE.WebGLProgram.getParameters:",I.precision,"not supported, using",v,"instead."));const Le=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,ze=Le!==void 0?Le.length:0;let xt=0;de.morphAttributes.position!==void 0&&(xt=1),de.morphAttributes.normal!==void 0&&(xt=2),de.morphAttributes.color!==void 0&&(xt=3);let bt,ue,Se,De;if(Ae){const St=mi[Ae];bt=St.vertexShader,ue=St.fragmentShader}else bt=I.vertexShader,ue=I.fragmentShader,c.update(I),Se=c.getVertexShaderID(I),De=c.getFragmentShaderID(I);const ke=r.getRenderTarget(),ht=se.isInstancedMesh===!0,pt=se.isBatchedMesh===!0,Qe=!!I.map,Lt=!!I.matcap,H=!!me,Ie=!!I.aoMap,lt=!!I.lightMap,At=!!I.bumpMap,je=!!I.normalMap,Wt=!!I.displacementMap,it=!!I.emissiveMap,et=!!I.metalnessMap,O=!!I.roughnessMap,w=I.anisotropy>0,ee=I.clearcoat>0,ve=I.dispersion>0,ye=I.iridescence>0,ge=I.sheen>0,Ke=I.transmission>0,be=w&&!!I.anisotropyMap,Ce=ee&&!!I.clearcoatMap,rt=ee&&!!I.clearcoatNormalMap,Te=ee&&!!I.clearcoatRoughnessMap,Fe=ye&&!!I.iridescenceMap,yt=ye&&!!I.iridescenceThicknessMap,We=ge&&!!I.sheenColorMap,Re=ge&&!!I.sheenRoughnessMap,tt=!!I.specularMap,ct=!!I.specularColorMap,kt=!!I.specularIntensityMap,T=Ke&&!!I.transmissionMap,Z=Ke&&!!I.thicknessMap,J=!!I.gradientMap,oe=!!I.alphaMap,xe=I.alphaTest>0,Ge=!!I.alphaHash,st=!!I.extensions;let Yt=er;I.toneMapped&&(ke===null||ke.isXRRenderTarget===!0)&&(Yt=r.toneMapping);const Qt={shaderID:Ae,shaderType:I.type,shaderName:I.name,vertexShader:bt,fragmentShader:ue,defines:I.defines,customVertexShaderID:Se,customFragmentShaderID:De,isRawShaderMaterial:I.isRawShaderMaterial===!0,glslVersion:I.glslVersion,precision:v,batching:pt,batchingColor:pt&&se._colorsTexture!==null,instancing:ht,instancingColor:ht&&se.instanceColor!==null,instancingMorph:ht&&se.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:ke===null?r.outputColorSpace:ke.isXRRenderTarget===!0?ke.texture.colorSpace:gn,alphaToCoverage:!!I.alphaToCoverage,map:Qe,matcap:Lt,envMap:H,envMapMode:H&&me.mapping,envMapCubeUVHeight:ae,aoMap:Ie,lightMap:lt,bumpMap:At,normalMap:je,displacementMap:g&&Wt,emissiveMap:it,normalMapObjectSpace:je&&I.normalMapType===jf,normalMapTangentSpace:je&&I.normalMapType===sh,metalnessMap:et,roughnessMap:O,anisotropy:w,anisotropyMap:be,clearcoat:ee,clearcoatMap:Ce,clearcoatNormalMap:rt,clearcoatRoughnessMap:Te,dispersion:ve,iridescence:ye,iridescenceMap:Fe,iridescenceThicknessMap:yt,sheen:ge,sheenColorMap:We,sheenRoughnessMap:Re,specularMap:tt,specularColorMap:ct,specularIntensityMap:kt,transmission:Ke,transmissionMap:T,thicknessMap:Z,gradientMap:J,opaque:I.transparent===!1&&I.blending===Gr&&I.alphaToCoverage===!1,alphaMap:oe,alphaTest:xe,alphaHash:Ge,combine:I.combine,mapUv:Qe&&E(I.map.channel),aoMapUv:Ie&&E(I.aoMap.channel),lightMapUv:lt&&E(I.lightMap.channel),bumpMapUv:At&&E(I.bumpMap.channel),normalMapUv:je&&E(I.normalMap.channel),displacementMapUv:Wt&&E(I.displacementMap.channel),emissiveMapUv:it&&E(I.emissiveMap.channel),metalnessMapUv:et&&E(I.metalnessMap.channel),roughnessMapUv:O&&E(I.roughnessMap.channel),anisotropyMapUv:be&&E(I.anisotropyMap.channel),clearcoatMapUv:Ce&&E(I.clearcoatMap.channel),clearcoatNormalMapUv:rt&&E(I.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&E(I.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&E(I.iridescenceMap.channel),iridescenceThicknessMapUv:yt&&E(I.iridescenceThicknessMap.channel),sheenColorMapUv:We&&E(I.sheenColorMap.channel),sheenRoughnessMapUv:Re&&E(I.sheenRoughnessMap.channel),specularMapUv:tt&&E(I.specularMap.channel),specularColorMapUv:ct&&E(I.specularColorMap.channel),specularIntensityMapUv:kt&&E(I.specularIntensityMap.channel),transmissionMapUv:T&&E(I.transmissionMap.channel),thicknessMapUv:Z&&E(I.thicknessMap.channel),alphaMapUv:oe&&E(I.alphaMap.channel),vertexTangents:!!de.attributes.tangent&&(je||w),vertexColors:I.vertexColors,vertexAlphas:I.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,pointsUvs:se.isPoints===!0&&!!de.attributes.uv&&(Qe||oe),fog:!!fe,useFog:I.fog===!0,fogExp2:!!fe&&fe.isFogExp2,flatShading:I.flatShading===!0,sizeAttenuation:I.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:se.isSkinnedMesh===!0,morphTargets:de.morphAttributes.position!==void 0,morphNormals:de.morphAttributes.normal!==void 0,morphColors:de.morphAttributes.color!==void 0,morphTargetsCount:ze,morphTextureStride:xt,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:I.dithering,shadowMapEnabled:r.shadowMap.enabled&&G.length>0,shadowMapType:r.shadowMap.type,toneMapping:Yt,decodeVideoTexture:Qe&&I.map.isVideoTexture===!0&&Ct.getTransfer(I.map.colorSpace)===Gt,premultipliedAlpha:I.premultipliedAlpha,doubleSided:I.side===gi,flipSided:I.side===Nn,useDepthPacking:I.depthPacking>=0,depthPacking:I.depthPacking||0,index0AttributeName:I.index0AttributeName,extensionClipCullDistance:st&&I.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&I.extensions.multiDraw===!0||pt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:I.customProgramCacheKey()};return Qt.vertexUv1s=u.has(1),Qt.vertexUv2s=u.has(2),Qt.vertexUv3s=u.has(3),u.clear(),Qt}function y(I){const L=[];if(I.shaderID?L.push(I.shaderID):(L.push(I.customVertexShaderID),L.push(I.customFragmentShaderID)),I.defines!==void 0)for(const G in I.defines)L.push(G),L.push(I.defines[G]);return I.isRawShaderMaterial===!1&&(N(L,I),D(L,I),L.push(r.outputColorSpace)),L.push(I.customProgramCacheKey),L.join()}function N(I,L){I.push(L.precision),I.push(L.outputColorSpace),I.push(L.envMapMode),I.push(L.envMapCubeUVHeight),I.push(L.mapUv),I.push(L.alphaMapUv),I.push(L.lightMapUv),I.push(L.aoMapUv),I.push(L.bumpMapUv),I.push(L.normalMapUv),I.push(L.displacementMapUv),I.push(L.emissiveMapUv),I.push(L.metalnessMapUv),I.push(L.roughnessMapUv),I.push(L.anisotropyMapUv),I.push(L.clearcoatMapUv),I.push(L.clearcoatNormalMapUv),I.push(L.clearcoatRoughnessMapUv),I.push(L.iridescenceMapUv),I.push(L.iridescenceThicknessMapUv),I.push(L.sheenColorMapUv),I.push(L.sheenRoughnessMapUv),I.push(L.specularMapUv),I.push(L.specularColorMapUv),I.push(L.specularIntensityMapUv),I.push(L.transmissionMapUv),I.push(L.thicknessMapUv),I.push(L.combine),I.push(L.fogExp2),I.push(L.sizeAttenuation),I.push(L.morphTargetsCount),I.push(L.morphAttributeCount),I.push(L.numDirLights),I.push(L.numPointLights),I.push(L.numSpotLights),I.push(L.numSpotLightMaps),I.push(L.numHemiLights),I.push(L.numRectAreaLights),I.push(L.numDirLightShadows),I.push(L.numPointLightShadows),I.push(L.numSpotLightShadows),I.push(L.numSpotLightShadowsWithMaps),I.push(L.numLightProbes),I.push(L.shadowMapType),I.push(L.toneMapping),I.push(L.numClippingPlanes),I.push(L.numClipIntersection),I.push(L.depthPacking)}function D(I,L){l.disableAll(),L.supportsVertexTextures&&l.enable(0),L.instancing&&l.enable(1),L.instancingColor&&l.enable(2),L.instancingMorph&&l.enable(3),L.matcap&&l.enable(4),L.envMap&&l.enable(5),L.normalMapObjectSpace&&l.enable(6),L.normalMapTangentSpace&&l.enable(7),L.clearcoat&&l.enable(8),L.iridescence&&l.enable(9),L.alphaTest&&l.enable(10),L.vertexColors&&l.enable(11),L.vertexAlphas&&l.enable(12),L.vertexUv1s&&l.enable(13),L.vertexUv2s&&l.enable(14),L.vertexUv3s&&l.enable(15),L.vertexTangents&&l.enable(16),L.anisotropy&&l.enable(17),L.alphaHash&&l.enable(18),L.batching&&l.enable(19),L.dispersion&&l.enable(20),L.batchingColor&&l.enable(21),I.push(l.mask),l.disableAll(),L.fog&&l.enable(0),L.useFog&&l.enable(1),L.flatShading&&l.enable(2),L.logarithmicDepthBuffer&&l.enable(3),L.skinning&&l.enable(4),L.morphTargets&&l.enable(5),L.morphNormals&&l.enable(6),L.morphColors&&l.enable(7),L.premultipliedAlpha&&l.enable(8),L.shadowMapEnabled&&l.enable(9),L.doubleSided&&l.enable(10),L.flipSided&&l.enable(11),L.useDepthPacking&&l.enable(12),L.dithering&&l.enable(13),L.transmission&&l.enable(14),L.sheen&&l.enable(15),L.opaque&&l.enable(16),L.pointsUvs&&l.enable(17),L.decodeVideoTexture&&l.enable(18),L.alphaToCoverage&&l.enable(19),I.push(l.mask)}function U(I){const L=M[I.type];let G;if(L){const le=mi[L];G=Bs.clone(le.uniforms)}else G=I.uniforms;return G}function f(I,L){let G;for(let le=0,se=d.length;le<se;le++){const fe=d[le];if(fe.cacheKey===L){G=fe,++G.usedTimes;break}}return G===void 0&&(G=new q_(r,L,I,s),d.push(G)),G}function V(I){if(--I.usedTimes===0){const L=d.indexOf(I);d[L]=d[d.length-1],d.pop(),I.destroy()}}function F(I){c.remove(I)}function $(){c.dispose()}return{getParameters:x,getProgramCacheKey:y,getUniforms:U,acquireProgram:f,releaseProgram:V,releaseShaderCache:F,programs:d,dispose:$}}function J_(){let r=new WeakMap;function e(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function t(s){r.delete(s)}function n(s,a,l){r.get(s)[a]=l}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Q_(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function su(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function ou(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(p,g,v,M,E,x){let y=r[e];return y===void 0?(y={id:p.id,object:p,geometry:g,material:v,groupOrder:M,renderOrder:p.renderOrder,z:E,group:x},r[e]=y):(y.id=p.id,y.object=p,y.geometry=g,y.material=v,y.groupOrder=M,y.renderOrder=p.renderOrder,y.z=E,y.group=x),e++,y}function l(p,g,v,M,E,x){const y=a(p,g,v,M,E,x);v.transmission>0?n.push(y):v.transparent===!0?i.push(y):t.push(y)}function c(p,g,v,M,E,x){const y=a(p,g,v,M,E,x);v.transmission>0?n.unshift(y):v.transparent===!0?i.unshift(y):t.unshift(y)}function u(p,g){t.length>1&&t.sort(p||Q_),n.length>1&&n.sort(g||su),i.length>1&&i.sort(g||su)}function d(){for(let p=e,g=r.length;p<g;p++){const v=r[p];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:d,sort:u}}function ev(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new ou,r.set(n,[a])):i>=s.length?(a=new ou,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function tv(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new at};break;case"SpotLight":t={position:new W,direction:new W,color:new at,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new at,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new at,groundColor:new at};break;case"RectAreaLight":t={color:new at,position:new W,halfWidth:new W,halfHeight:new W};break}return r[e.id]=t,t}}}function nv(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let iv=0;function rv(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function sv(r){const e=new tv,t=nv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new W);const i=new W,s=new vt,a=new vt;function l(u){let d=0,p=0,g=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let v=0,M=0,E=0,x=0,y=0,N=0,D=0,U=0,f=0,V=0,F=0;u.sort(rv);for(let I=0,L=u.length;I<L;I++){const G=u[I],le=G.color,se=G.intensity,fe=G.distance,de=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)d+=le.r*se,p+=le.g*se,g+=le.b*se;else if(G.isLightProbe){for(let ce=0;ce<9;ce++)n.probe[ce].addScaledVector(G.sh.coefficients[ce],se);F++}else if(G.isDirectionalLight){const ce=e.get(G);if(ce.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const me=G.shadow,ae=t.get(G);ae.shadowIntensity=me.intensity,ae.shadowBias=me.bias,ae.shadowNormalBias=me.normalBias,ae.shadowRadius=me.radius,ae.shadowMapSize=me.mapSize,n.directionalShadow[v]=ae,n.directionalShadowMap[v]=de,n.directionalShadowMatrix[v]=G.shadow.matrix,N++}n.directional[v]=ce,v++}else if(G.isSpotLight){const ce=e.get(G);ce.position.setFromMatrixPosition(G.matrixWorld),ce.color.copy(le).multiplyScalar(se),ce.distance=fe,ce.coneCos=Math.cos(G.angle),ce.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),ce.decay=G.decay,n.spot[E]=ce;const me=G.shadow;if(G.map&&(n.spotLightMap[f]=G.map,f++,me.updateMatrices(G),G.castShadow&&V++),n.spotLightMatrix[E]=me.matrix,G.castShadow){const ae=t.get(G);ae.shadowIntensity=me.intensity,ae.shadowBias=me.bias,ae.shadowNormalBias=me.normalBias,ae.shadowRadius=me.radius,ae.shadowMapSize=me.mapSize,n.spotShadow[E]=ae,n.spotShadowMap[E]=de,U++}E++}else if(G.isRectAreaLight){const ce=e.get(G);ce.color.copy(le).multiplyScalar(se),ce.halfWidth.set(G.width*.5,0,0),ce.halfHeight.set(0,G.height*.5,0),n.rectArea[x]=ce,x++}else if(G.isPointLight){const ce=e.get(G);if(ce.color.copy(G.color).multiplyScalar(G.intensity),ce.distance=G.distance,ce.decay=G.decay,G.castShadow){const me=G.shadow,ae=t.get(G);ae.shadowIntensity=me.intensity,ae.shadowBias=me.bias,ae.shadowNormalBias=me.normalBias,ae.shadowRadius=me.radius,ae.shadowMapSize=me.mapSize,ae.shadowCameraNear=me.camera.near,ae.shadowCameraFar=me.camera.far,n.pointShadow[M]=ae,n.pointShadowMap[M]=de,n.pointShadowMatrix[M]=G.shadow.matrix,D++}n.point[M]=ce,M++}else if(G.isHemisphereLight){const ce=e.get(G);ce.skyColor.copy(G.color).multiplyScalar(se),ce.groundColor.copy(G.groundColor).multiplyScalar(se),n.hemi[y]=ce,y++}}x>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Pe.LTC_FLOAT_1,n.rectAreaLTC2=Pe.LTC_FLOAT_2):(n.rectAreaLTC1=Pe.LTC_HALF_1,n.rectAreaLTC2=Pe.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=p,n.ambient[2]=g;const $=n.hash;($.directionalLength!==v||$.pointLength!==M||$.spotLength!==E||$.rectAreaLength!==x||$.hemiLength!==y||$.numDirectionalShadows!==N||$.numPointShadows!==D||$.numSpotShadows!==U||$.numSpotMaps!==f||$.numLightProbes!==F)&&(n.directional.length=v,n.spot.length=E,n.rectArea.length=x,n.point.length=M,n.hemi.length=y,n.directionalShadow.length=N,n.directionalShadowMap.length=N,n.pointShadow.length=D,n.pointShadowMap.length=D,n.spotShadow.length=U,n.spotShadowMap.length=U,n.directionalShadowMatrix.length=N,n.pointShadowMatrix.length=D,n.spotLightMatrix.length=U+f-V,n.spotLightMap.length=f,n.numSpotLightShadowsWithMaps=V,n.numLightProbes=F,$.directionalLength=v,$.pointLength=M,$.spotLength=E,$.rectAreaLength=x,$.hemiLength=y,$.numDirectionalShadows=N,$.numPointShadows=D,$.numSpotShadows=U,$.numSpotMaps=f,$.numLightProbes=F,n.version=iv++)}function c(u,d){let p=0,g=0,v=0,M=0,E=0;const x=d.matrixWorldInverse;for(let y=0,N=u.length;y<N;y++){const D=u[y];if(D.isDirectionalLight){const U=n.directional[p];U.direction.setFromMatrixPosition(D.matrixWorld),i.setFromMatrixPosition(D.target.matrixWorld),U.direction.sub(i),U.direction.transformDirection(x),p++}else if(D.isSpotLight){const U=n.spot[v];U.position.setFromMatrixPosition(D.matrixWorld),U.position.applyMatrix4(x),U.direction.setFromMatrixPosition(D.matrixWorld),i.setFromMatrixPosition(D.target.matrixWorld),U.direction.sub(i),U.direction.transformDirection(x),v++}else if(D.isRectAreaLight){const U=n.rectArea[M];U.position.setFromMatrixPosition(D.matrixWorld),U.position.applyMatrix4(x),a.identity(),s.copy(D.matrixWorld),s.premultiply(x),a.extractRotation(s),U.halfWidth.set(D.width*.5,0,0),U.halfHeight.set(0,D.height*.5,0),U.halfWidth.applyMatrix4(a),U.halfHeight.applyMatrix4(a),M++}else if(D.isPointLight){const U=n.point[g];U.position.setFromMatrixPosition(D.matrixWorld),U.position.applyMatrix4(x),g++}else if(D.isHemisphereLight){const U=n.hemi[E];U.direction.setFromMatrixPosition(D.matrixWorld),U.direction.transformDirection(x),E++}}}return{setup:l,setupView:c,state:n}}function au(r){const e=new sv(r),t=[],n=[];function i(d){u.camera=d,t.length=0,n.length=0}function s(d){t.push(d)}function a(d){n.push(d)}function l(){e.setup(t)}function c(d){e.setupView(t,d)}const u={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:u,setupLights:l,setupLightsView:c,pushLight:s,pushShadow:a}}function ov(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let l;return a===void 0?(l=new au(r),e.set(i,[l])):s>=a.length?(l=new au(r),a.push(l)):l=a[s],l}function n(){e=new WeakMap}return{get:t,dispose:n}}class av extends vi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class lv extends vi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const cv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uv=`uniform sampler2D shadow_pass;
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
}`;function hv(r,e,t){let n=new Bl;const i=new Xe,s=new Xe,a=new Bt,l=new av({depthPacking:Xf}),c=new lv,u={},d=t.maxTextureSize,p={[Bi]:Nn,[Nn]:Bi,[gi]:gi},g=new Cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:cv,fragmentShader:uv}),v=g.clone();v.defines.HORIZONTAL_PASS=1;const M=new ui;M.setAttribute("position",new Pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new In(M,g),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ku;let y=this.type;this.render=function(V,F,$){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||V.length===0)return;const I=r.getRenderTarget(),L=r.getActiveCubeFace(),G=r.getActiveMipmapLevel(),le=r.state;le.setBlending(Oi),le.buffers.color.setClear(1,1,1,1),le.buffers.depth.setTest(!0),le.setScissorTest(!1);const se=y!==Di&&this.type===Di,fe=y===Di&&this.type!==Di;for(let de=0,ce=V.length;de<ce;de++){const me=V[de],ae=me.shadow;if(ae===void 0){console.warn("THREE.WebGLShadowMap:",me,"has no shadow.");continue}if(ae.autoUpdate===!1&&ae.needsUpdate===!1)continue;i.copy(ae.mapSize);const Ae=ae.getFrameExtents();if(i.multiply(Ae),s.copy(ae.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(s.x=Math.floor(d/Ae.x),i.x=s.x*Ae.x,ae.mapSize.x=s.x),i.y>d&&(s.y=Math.floor(d/Ae.y),i.y=s.y*Ae.y,ae.mapSize.y=s.y)),ae.map===null||se===!0||fe===!0){const ze=this.type!==Di?{minFilter:Rn,magFilter:Rn}:{};ae.map!==null&&ae.map.dispose(),ae.map=new li(i.x,i.y,ze),ae.map.texture.name=me.name+".shadowMap",ae.camera.updateProjectionMatrix()}r.setRenderTarget(ae.map),r.clear();const Le=ae.getViewportCount();for(let ze=0;ze<Le;ze++){const xt=ae.getViewport(ze);a.set(s.x*xt.x,s.y*xt.y,s.x*xt.z,s.y*xt.w),le.viewport(a),ae.updateMatrices(me,ze),n=ae.getFrustum(),U(F,$,ae.camera,me,this.type)}ae.isPointLightShadow!==!0&&this.type===Di&&N(ae,$),ae.needsUpdate=!1}y=this.type,x.needsUpdate=!1,r.setRenderTarget(I,L,G)};function N(V,F){const $=e.update(E);g.defines.VSM_SAMPLES!==V.blurSamples&&(g.defines.VSM_SAMPLES=V.blurSamples,v.defines.VSM_SAMPLES=V.blurSamples,g.needsUpdate=!0,v.needsUpdate=!0),V.mapPass===null&&(V.mapPass=new li(i.x,i.y)),g.uniforms.shadow_pass.value=V.map.texture,g.uniforms.resolution.value=V.mapSize,g.uniforms.radius.value=V.radius,r.setRenderTarget(V.mapPass),r.clear(),r.renderBufferDirect(F,null,$,g,E,null),v.uniforms.shadow_pass.value=V.mapPass.texture,v.uniforms.resolution.value=V.mapSize,v.uniforms.radius.value=V.radius,r.setRenderTarget(V.map),r.clear(),r.renderBufferDirect(F,null,$,v,E,null)}function D(V,F,$,I){let L=null;const G=$.isPointLight===!0?V.customDistanceMaterial:V.customDepthMaterial;if(G!==void 0)L=G;else if(L=$.isPointLight===!0?c:l,r.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0){const le=L.uuid,se=F.uuid;let fe=u[le];fe===void 0&&(fe={},u[le]=fe);let de=fe[se];de===void 0&&(de=L.clone(),fe[se]=de,F.addEventListener("dispose",f)),L=de}if(L.visible=F.visible,L.wireframe=F.wireframe,I===Di?L.side=F.shadowSide!==null?F.shadowSide:F.side:L.side=F.shadowSide!==null?F.shadowSide:p[F.side],L.alphaMap=F.alphaMap,L.alphaTest=F.alphaTest,L.map=F.map,L.clipShadows=F.clipShadows,L.clippingPlanes=F.clippingPlanes,L.clipIntersection=F.clipIntersection,L.displacementMap=F.displacementMap,L.displacementScale=F.displacementScale,L.displacementBias=F.displacementBias,L.wireframeLinewidth=F.wireframeLinewidth,L.linewidth=F.linewidth,$.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const le=r.properties.get(L);le.light=$}return L}function U(V,F,$,I,L){if(V.visible===!1)return;if(V.layers.test(F.layers)&&(V.isMesh||V.isLine||V.isPoints)&&(V.castShadow||V.receiveShadow&&L===Di)&&(!V.frustumCulled||n.intersectsObject(V))){V.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,V.matrixWorld);const se=e.update(V),fe=V.material;if(Array.isArray(fe)){const de=se.groups;for(let ce=0,me=de.length;ce<me;ce++){const ae=de[ce],Ae=fe[ae.materialIndex];if(Ae&&Ae.visible){const Le=D(V,Ae,I,L);V.onBeforeShadow(r,V,F,$,se,Le,ae),r.renderBufferDirect($,null,se,Le,V,ae),V.onAfterShadow(r,V,F,$,se,Le,ae)}}}else if(fe.visible){const de=D(V,fe,I,L);V.onBeforeShadow(r,V,F,$,se,de,null),r.renderBufferDirect($,null,se,de,V,null),V.onAfterShadow(r,V,F,$,se,de,null)}}const le=V.children;for(let se=0,fe=le.length;se<fe;se++)U(le[se],F,$,I,L)}function f(V){V.target.removeEventListener("dispose",f);for(const $ in u){const I=u[$],L=V.target.uuid;L in I&&(I[L].dispose(),delete I[L])}}}function fv(r){function e(){let T=!1;const Z=new Bt;let J=null;const oe=new Bt(0,0,0,0);return{setMask:function(xe){J!==xe&&!T&&(r.colorMask(xe,xe,xe,xe),J=xe)},setLocked:function(xe){T=xe},setClear:function(xe,Ge,st,Yt,Qt){Qt===!0&&(xe*=Yt,Ge*=Yt,st*=Yt),Z.set(xe,Ge,st,Yt),oe.equals(Z)===!1&&(r.clearColor(xe,Ge,st,Yt),oe.copy(Z))},reset:function(){T=!1,J=null,oe.set(-1,0,0,0)}}}function t(){let T=!1,Z=null,J=null,oe=null;return{setTest:function(xe){xe?De(r.DEPTH_TEST):ke(r.DEPTH_TEST)},setMask:function(xe){Z!==xe&&!T&&(r.depthMask(xe),Z=xe)},setFunc:function(xe){if(J!==xe){switch(xe){case Lf:r.depthFunc(r.NEVER);break;case Df:r.depthFunc(r.ALWAYS);break;case If:r.depthFunc(r.LESS);break;case Fo:r.depthFunc(r.LEQUAL);break;case Nf:r.depthFunc(r.EQUAL);break;case Uf:r.depthFunc(r.GEQUAL);break;case Of:r.depthFunc(r.GREATER);break;case Ff:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}J=xe}},setLocked:function(xe){T=xe},setClear:function(xe){oe!==xe&&(r.clearDepth(xe),oe=xe)},reset:function(){T=!1,Z=null,J=null,oe=null}}}function n(){let T=!1,Z=null,J=null,oe=null,xe=null,Ge=null,st=null,Yt=null,Qt=null;return{setTest:function(St){T||(St?De(r.STENCIL_TEST):ke(r.STENCIL_TEST))},setMask:function(St){Z!==St&&!T&&(r.stencilMask(St),Z=St)},setFunc:function(St,en,Jt){(J!==St||oe!==en||xe!==Jt)&&(r.stencilFunc(St,en,Jt),J=St,oe=en,xe=Jt)},setOp:function(St,en,Jt){(Ge!==St||st!==en||Yt!==Jt)&&(r.stencilOp(St,en,Jt),Ge=St,st=en,Yt=Jt)},setLocked:function(St){T=St},setClear:function(St){Qt!==St&&(r.clearStencil(St),Qt=St)},reset:function(){T=!1,Z=null,J=null,oe=null,xe=null,Ge=null,st=null,Yt=null,Qt=null}}}const i=new e,s=new t,a=new n,l=new WeakMap,c=new WeakMap;let u={},d={},p=new WeakMap,g=[],v=null,M=!1,E=null,x=null,y=null,N=null,D=null,U=null,f=null,V=new at(0,0,0),F=0,$=!1,I=null,L=null,G=null,le=null,se=null;const fe=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let de=!1,ce=0;const me=r.getParameter(r.VERSION);me.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(me)[1]),de=ce>=1):me.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(me)[1]),de=ce>=2);let ae=null,Ae={};const Le=r.getParameter(r.SCISSOR_BOX),ze=r.getParameter(r.VIEWPORT),xt=new Bt().fromArray(Le),bt=new Bt().fromArray(ze);function ue(T,Z,J,oe){const xe=new Uint8Array(4),Ge=r.createTexture();r.bindTexture(T,Ge),r.texParameteri(T,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(T,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let st=0;st<J;st++)T===r.TEXTURE_3D||T===r.TEXTURE_2D_ARRAY?r.texImage3D(Z,0,r.RGBA,1,1,oe,0,r.RGBA,r.UNSIGNED_BYTE,xe):r.texImage2D(Z+st,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,xe);return Ge}const Se={};Se[r.TEXTURE_2D]=ue(r.TEXTURE_2D,r.TEXTURE_2D,1),Se[r.TEXTURE_CUBE_MAP]=ue(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[r.TEXTURE_2D_ARRAY]=ue(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Se[r.TEXTURE_3D]=ue(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),a.setClear(0),De(r.DEPTH_TEST),s.setFunc(Fo),At(!1),je(uc),De(r.CULL_FACE),Ie(Oi);function De(T){u[T]!==!0&&(r.enable(T),u[T]=!0)}function ke(T){u[T]!==!1&&(r.disable(T),u[T]=!1)}function ht(T,Z){return d[T]!==Z?(r.bindFramebuffer(T,Z),d[T]=Z,T===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=Z),T===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=Z),!0):!1}function pt(T,Z){let J=g,oe=!1;if(T){J=p.get(Z),J===void 0&&(J=[],p.set(Z,J));const xe=T.textures;if(J.length!==xe.length||J[0]!==r.COLOR_ATTACHMENT0){for(let Ge=0,st=xe.length;Ge<st;Ge++)J[Ge]=r.COLOR_ATTACHMENT0+Ge;J.length=xe.length,oe=!0}}else J[0]!==r.BACK&&(J[0]=r.BACK,oe=!0);oe&&r.drawBuffers(J)}function Qe(T){return v!==T?(r.useProgram(T),v=T,!0):!1}const Lt={[dr]:r.FUNC_ADD,[pf]:r.FUNC_SUBTRACT,[mf]:r.FUNC_REVERSE_SUBTRACT};Lt[gf]=r.MIN,Lt[_f]=r.MAX;const H={[vf]:r.ZERO,[xf]:r.ONE,[yf]:r.SRC_COLOR,[Wa]:r.SRC_ALPHA,[Af]:r.SRC_ALPHA_SATURATE,[Ef]:r.DST_COLOR,[Sf]:r.DST_ALPHA,[Mf]:r.ONE_MINUS_SRC_COLOR,[Xa]:r.ONE_MINUS_SRC_ALPHA,[bf]:r.ONE_MINUS_DST_COLOR,[Tf]:r.ONE_MINUS_DST_ALPHA,[wf]:r.CONSTANT_COLOR,[Rf]:r.ONE_MINUS_CONSTANT_COLOR,[Cf]:r.CONSTANT_ALPHA,[Pf]:r.ONE_MINUS_CONSTANT_ALPHA};function Ie(T,Z,J,oe,xe,Ge,st,Yt,Qt,St){if(T===Oi){M===!0&&(ke(r.BLEND),M=!1);return}if(M===!1&&(De(r.BLEND),M=!0),T!==df){if(T!==E||St!==$){if((x!==dr||D!==dr)&&(r.blendEquation(r.FUNC_ADD),x=dr,D=dr),St)switch(T){case Gr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ga:r.blendFunc(r.ONE,r.ONE);break;case hc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case fc:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}else switch(T){case Gr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ga:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case hc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case fc:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}y=null,N=null,U=null,f=null,V.set(0,0,0),F=0,E=T,$=St}return}xe=xe||Z,Ge=Ge||J,st=st||oe,(Z!==x||xe!==D)&&(r.blendEquationSeparate(Lt[Z],Lt[xe]),x=Z,D=xe),(J!==y||oe!==N||Ge!==U||st!==f)&&(r.blendFuncSeparate(H[J],H[oe],H[Ge],H[st]),y=J,N=oe,U=Ge,f=st),(Yt.equals(V)===!1||Qt!==F)&&(r.blendColor(Yt.r,Yt.g,Yt.b,Qt),V.copy(Yt),F=Qt),E=T,$=!1}function lt(T,Z){T.side===gi?ke(r.CULL_FACE):De(r.CULL_FACE);let J=T.side===Nn;Z&&(J=!J),At(J),T.blending===Gr&&T.transparent===!1?Ie(Oi):Ie(T.blending,T.blendEquation,T.blendSrc,T.blendDst,T.blendEquationAlpha,T.blendSrcAlpha,T.blendDstAlpha,T.blendColor,T.blendAlpha,T.premultipliedAlpha),s.setFunc(T.depthFunc),s.setTest(T.depthTest),s.setMask(T.depthWrite),i.setMask(T.colorWrite);const oe=T.stencilWrite;a.setTest(oe),oe&&(a.setMask(T.stencilWriteMask),a.setFunc(T.stencilFunc,T.stencilRef,T.stencilFuncMask),a.setOp(T.stencilFail,T.stencilZFail,T.stencilZPass)),it(T.polygonOffset,T.polygonOffsetFactor,T.polygonOffsetUnits),T.alphaToCoverage===!0?De(r.SAMPLE_ALPHA_TO_COVERAGE):ke(r.SAMPLE_ALPHA_TO_COVERAGE)}function At(T){I!==T&&(T?r.frontFace(r.CW):r.frontFace(r.CCW),I=T)}function je(T){T!==uf?(De(r.CULL_FACE),T!==L&&(T===uc?r.cullFace(r.BACK):T===hf?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ke(r.CULL_FACE),L=T}function Wt(T){T!==G&&(de&&r.lineWidth(T),G=T)}function it(T,Z,J){T?(De(r.POLYGON_OFFSET_FILL),(le!==Z||se!==J)&&(r.polygonOffset(Z,J),le=Z,se=J)):ke(r.POLYGON_OFFSET_FILL)}function et(T){T?De(r.SCISSOR_TEST):ke(r.SCISSOR_TEST)}function O(T){T===void 0&&(T=r.TEXTURE0+fe-1),ae!==T&&(r.activeTexture(T),ae=T)}function w(T,Z,J){J===void 0&&(ae===null?J=r.TEXTURE0+fe-1:J=ae);let oe=Ae[J];oe===void 0&&(oe={type:void 0,texture:void 0},Ae[J]=oe),(oe.type!==T||oe.texture!==Z)&&(ae!==J&&(r.activeTexture(J),ae=J),r.bindTexture(T,Z||Se[T]),oe.type=T,oe.texture=Z)}function ee(){const T=Ae[ae];T!==void 0&&T.type!==void 0&&(r.bindTexture(T.type,null),T.type=void 0,T.texture=void 0)}function ve(){try{r.compressedTexImage2D.apply(r,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function ye(){try{r.compressedTexImage3D.apply(r,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function ge(){try{r.texSubImage2D.apply(r,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Ke(){try{r.texSubImage3D.apply(r,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function be(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Ce(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function rt(){try{r.texStorage2D.apply(r,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Te(){try{r.texStorage3D.apply(r,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Fe(){try{r.texImage2D.apply(r,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function yt(){try{r.texImage3D.apply(r,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function We(T){xt.equals(T)===!1&&(r.scissor(T.x,T.y,T.z,T.w),xt.copy(T))}function Re(T){bt.equals(T)===!1&&(r.viewport(T.x,T.y,T.z,T.w),bt.copy(T))}function tt(T,Z){let J=c.get(Z);J===void 0&&(J=new WeakMap,c.set(Z,J));let oe=J.get(T);oe===void 0&&(oe=r.getUniformBlockIndex(Z,T.name),J.set(T,oe))}function ct(T,Z){const oe=c.get(Z).get(T);l.get(Z)!==oe&&(r.uniformBlockBinding(Z,oe,T.__bindingPointIndex),l.set(Z,oe))}function kt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},ae=null,Ae={},d={},p=new WeakMap,g=[],v=null,M=!1,E=null,x=null,y=null,N=null,D=null,U=null,f=null,V=new at(0,0,0),F=0,$=!1,I=null,L=null,G=null,le=null,se=null,xt.set(0,0,r.canvas.width,r.canvas.height),bt.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),a.reset()}return{buffers:{color:i,depth:s,stencil:a},enable:De,disable:ke,bindFramebuffer:ht,drawBuffers:pt,useProgram:Qe,setBlending:Ie,setMaterial:lt,setFlipSided:At,setCullFace:je,setLineWidth:Wt,setPolygonOffset:it,setScissorTest:et,activeTexture:O,bindTexture:w,unbindTexture:ee,compressedTexImage2D:ve,compressedTexImage3D:ye,texImage2D:Fe,texImage3D:yt,updateUBOMapping:tt,uniformBlockBinding:ct,texStorage2D:rt,texStorage3D:Te,texSubImage2D:ge,texSubImage3D:Ke,compressedTexSubImage2D:be,compressedTexSubImage3D:Ce,scissor:We,viewport:Re,reset:kt}}function lu(r,e,t,n){const i=dv(n);switch(t){case Ju:return r*e;case eh:return r*e;case th:return r*e*2;case Dl:return r*e/i.components*i.byteLength;case Il:return r*e/i.components*i.byteLength;case nh:return r*e*2/i.components*i.byteLength;case Nl:return r*e*2/i.components*i.byteLength;case Qu:return r*e*3/i.components*i.byteLength;case Kn:return r*e*4/i.components*i.byteLength;case Ul:return r*e*4/i.components*i.byteLength;case Lo:case Do:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Io:case No:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ka:case Ja:return Math.max(r,16)*Math.max(e,8)/4;case Ya:case Za:return Math.max(r,8)*Math.max(e,8)/2;case Qa:case el:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case tl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case nl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case il:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case rl:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case sl:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case ol:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case al:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case ll:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case cl:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case ul:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case hl:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case fl:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case dl:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case pl:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case ml:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Uo:case gl:case _l:return Math.ceil(r/4)*Math.ceil(e/4)*16;case ih:case vl:return Math.ceil(r/4)*Math.ceil(e/4)*8;case xl:case yl:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function dv(r){switch(r){case ki:case Ku:return{byteLength:1,components:1};case Ns:case $u:case Fi:return{byteLength:2,components:1};case Pl:case Ll:return{byteLength:2,components:4};case gr:case Cl:case oi:return{byteLength:4,components:1};case Zu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function pv(r,e,t,n,i,s,a){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Xe,d=new WeakMap;let p;const g=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(O,w){return v?new OffscreenCanvas(O,w):Fs("canvas")}function E(O,w,ee){let ve=1;const ye=et(O);if((ye.width>ee||ye.height>ee)&&(ve=ee/Math.max(ye.width,ye.height)),ve<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const ge=Math.floor(ve*ye.width),Ke=Math.floor(ve*ye.height);p===void 0&&(p=M(ge,Ke));const be=w?M(ge,Ke):p;return be.width=ge,be.height=Ke,be.getContext("2d").drawImage(O,0,0,ge,Ke),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ye.width+"x"+ye.height+") to ("+ge+"x"+Ke+")."),be}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ye.width+"x"+ye.height+")."),O;return O}function x(O){return O.generateMipmaps&&O.minFilter!==Rn&&O.minFilter!==Gn}function y(O){r.generateMipmap(O)}function N(O,w,ee,ve,ye=!1){if(O!==null){if(r[O]!==void 0)return r[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let ge=w;if(w===r.RED&&(ee===r.FLOAT&&(ge=r.R32F),ee===r.HALF_FLOAT&&(ge=r.R16F),ee===r.UNSIGNED_BYTE&&(ge=r.R8)),w===r.RED_INTEGER&&(ee===r.UNSIGNED_BYTE&&(ge=r.R8UI),ee===r.UNSIGNED_SHORT&&(ge=r.R16UI),ee===r.UNSIGNED_INT&&(ge=r.R32UI),ee===r.BYTE&&(ge=r.R8I),ee===r.SHORT&&(ge=r.R16I),ee===r.INT&&(ge=r.R32I)),w===r.RG&&(ee===r.FLOAT&&(ge=r.RG32F),ee===r.HALF_FLOAT&&(ge=r.RG16F),ee===r.UNSIGNED_BYTE&&(ge=r.RG8)),w===r.RG_INTEGER&&(ee===r.UNSIGNED_BYTE&&(ge=r.RG8UI),ee===r.UNSIGNED_SHORT&&(ge=r.RG16UI),ee===r.UNSIGNED_INT&&(ge=r.RG32UI),ee===r.BYTE&&(ge=r.RG8I),ee===r.SHORT&&(ge=r.RG16I),ee===r.INT&&(ge=r.RG32I)),w===r.RGB&&ee===r.UNSIGNED_INT_5_9_9_9_REV&&(ge=r.RGB9_E5),w===r.RGBA){const Ke=ye?ko:Ct.getTransfer(ve);ee===r.FLOAT&&(ge=r.RGBA32F),ee===r.HALF_FLOAT&&(ge=r.RGBA16F),ee===r.UNSIGNED_BYTE&&(ge=Ke===Gt?r.SRGB8_ALPHA8:r.RGBA8),ee===r.UNSIGNED_SHORT_4_4_4_4&&(ge=r.RGBA4),ee===r.UNSIGNED_SHORT_5_5_5_1&&(ge=r.RGB5_A1)}return(ge===r.R16F||ge===r.R32F||ge===r.RG16F||ge===r.RG32F||ge===r.RGBA16F||ge===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ge}function D(O,w){let ee;return O?w===null||w===gr||w===Jr?ee=r.DEPTH24_STENCIL8:w===oi?ee=r.DEPTH32F_STENCIL8:w===Ns&&(ee=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===gr||w===Jr?ee=r.DEPTH_COMPONENT24:w===oi?ee=r.DEPTH_COMPONENT32F:w===Ns&&(ee=r.DEPTH_COMPONENT16),ee}function U(O,w){return x(O)===!0||O.isFramebufferTexture&&O.minFilter!==Rn&&O.minFilter!==Gn?Math.log2(Math.max(w.width,w.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?w.mipmaps.length:1}function f(O){const w=O.target;w.removeEventListener("dispose",f),F(w),w.isVideoTexture&&d.delete(w)}function V(O){const w=O.target;w.removeEventListener("dispose",V),I(w)}function F(O){const w=n.get(O);if(w.__webglInit===void 0)return;const ee=O.source,ve=g.get(ee);if(ve){const ye=ve[w.__cacheKey];ye.usedTimes--,ye.usedTimes===0&&$(O),Object.keys(ve).length===0&&g.delete(ee)}n.remove(O)}function $(O){const w=n.get(O);r.deleteTexture(w.__webglTexture);const ee=O.source,ve=g.get(ee);delete ve[w.__cacheKey],a.memory.textures--}function I(O){const w=n.get(O);if(O.depthTexture&&O.depthTexture.dispose(),O.isWebGLCubeRenderTarget)for(let ve=0;ve<6;ve++){if(Array.isArray(w.__webglFramebuffer[ve]))for(let ye=0;ye<w.__webglFramebuffer[ve].length;ye++)r.deleteFramebuffer(w.__webglFramebuffer[ve][ye]);else r.deleteFramebuffer(w.__webglFramebuffer[ve]);w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer[ve])}else{if(Array.isArray(w.__webglFramebuffer))for(let ve=0;ve<w.__webglFramebuffer.length;ve++)r.deleteFramebuffer(w.__webglFramebuffer[ve]);else r.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&r.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ve=0;ve<w.__webglColorRenderbuffer.length;ve++)w.__webglColorRenderbuffer[ve]&&r.deleteRenderbuffer(w.__webglColorRenderbuffer[ve]);w.__webglDepthRenderbuffer&&r.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const ee=O.textures;for(let ve=0,ye=ee.length;ve<ye;ve++){const ge=n.get(ee[ve]);ge.__webglTexture&&(r.deleteTexture(ge.__webglTexture),a.memory.textures--),n.remove(ee[ve])}n.remove(O)}let L=0;function G(){L=0}function le(){const O=L;return O>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+i.maxTextures),L+=1,O}function se(O){const w=[];return w.push(O.wrapS),w.push(O.wrapT),w.push(O.wrapR||0),w.push(O.magFilter),w.push(O.minFilter),w.push(O.anisotropy),w.push(O.internalFormat),w.push(O.format),w.push(O.type),w.push(O.generateMipmaps),w.push(O.premultiplyAlpha),w.push(O.flipY),w.push(O.unpackAlignment),w.push(O.colorSpace),w.join()}function fe(O,w){const ee=n.get(O);if(O.isVideoTexture&&Wt(O),O.isRenderTargetTexture===!1&&O.version>0&&ee.__version!==O.version){const ve=O.image;if(ve===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ve.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{bt(ee,O,w);return}}t.bindTexture(r.TEXTURE_2D,ee.__webglTexture,r.TEXTURE0+w)}function de(O,w){const ee=n.get(O);if(O.version>0&&ee.__version!==O.version){bt(ee,O,w);return}t.bindTexture(r.TEXTURE_2D_ARRAY,ee.__webglTexture,r.TEXTURE0+w)}function ce(O,w){const ee=n.get(O);if(O.version>0&&ee.__version!==O.version){bt(ee,O,w);return}t.bindTexture(r.TEXTURE_3D,ee.__webglTexture,r.TEXTURE0+w)}function me(O,w){const ee=n.get(O);if(O.version>0&&ee.__version!==O.version){ue(ee,O,w);return}t.bindTexture(r.TEXTURE_CUBE_MAP,ee.__webglTexture,r.TEXTURE0+w)}const ae={[Zr]:r.REPEAT,[Zi]:r.CLAMP_TO_EDGE,[Bo]:r.MIRRORED_REPEAT},Ae={[Rn]:r.NEAREST,[Yu]:r.NEAREST_MIPMAP_NEAREST,[Cs]:r.NEAREST_MIPMAP_LINEAR,[Gn]:r.LINEAR,[Po]:r.LINEAR_MIPMAP_NEAREST,[Ni]:r.LINEAR_MIPMAP_LINEAR},Le={[qf]:r.NEVER,[Qf]:r.ALWAYS,[Yf]:r.LESS,[oh]:r.LEQUAL,[Kf]:r.EQUAL,[Jf]:r.GEQUAL,[$f]:r.GREATER,[Zf]:r.NOTEQUAL};function ze(O,w){if(w.type===oi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Gn||w.magFilter===Po||w.magFilter===Cs||w.magFilter===Ni||w.minFilter===Gn||w.minFilter===Po||w.minFilter===Cs||w.minFilter===Ni)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(O,r.TEXTURE_WRAP_S,ae[w.wrapS]),r.texParameteri(O,r.TEXTURE_WRAP_T,ae[w.wrapT]),(O===r.TEXTURE_3D||O===r.TEXTURE_2D_ARRAY)&&r.texParameteri(O,r.TEXTURE_WRAP_R,ae[w.wrapR]),r.texParameteri(O,r.TEXTURE_MAG_FILTER,Ae[w.magFilter]),r.texParameteri(O,r.TEXTURE_MIN_FILTER,Ae[w.minFilter]),w.compareFunction&&(r.texParameteri(O,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(O,r.TEXTURE_COMPARE_FUNC,Le[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Rn||w.minFilter!==Cs&&w.minFilter!==Ni||w.type===oi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const ee=e.get("EXT_texture_filter_anisotropic");r.texParameterf(O,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function xt(O,w){let ee=!1;O.__webglInit===void 0&&(O.__webglInit=!0,w.addEventListener("dispose",f));const ve=w.source;let ye=g.get(ve);ye===void 0&&(ye={},g.set(ve,ye));const ge=se(w);if(ge!==O.__cacheKey){ye[ge]===void 0&&(ye[ge]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,ee=!0),ye[ge].usedTimes++;const Ke=ye[O.__cacheKey];Ke!==void 0&&(ye[O.__cacheKey].usedTimes--,Ke.usedTimes===0&&$(w)),O.__cacheKey=ge,O.__webglTexture=ye[ge].texture}return ee}function bt(O,w,ee){let ve=r.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ve=r.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ve=r.TEXTURE_3D);const ye=xt(O,w),ge=w.source;t.bindTexture(ve,O.__webglTexture,r.TEXTURE0+ee);const Ke=n.get(ge);if(ge.version!==Ke.__version||ye===!0){t.activeTexture(r.TEXTURE0+ee);const be=Ct.getPrimaries(Ct.workingColorSpace),Ce=w.colorSpace===$i?null:Ct.getPrimaries(w.colorSpace),rt=w.colorSpace===$i||be===Ce?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);let Te=E(w.image,!1,i.maxTextureSize);Te=it(w,Te);const Fe=s.convert(w.format,w.colorSpace),yt=s.convert(w.type);let We=N(w.internalFormat,Fe,yt,w.colorSpace,w.isVideoTexture);ze(ve,w);let Re;const tt=w.mipmaps,ct=w.isVideoTexture!==!0,kt=Ke.__version===void 0||ye===!0,T=ge.dataReady,Z=U(w,Te);if(w.isDepthTexture)We=D(w.format===Qr,w.type),kt&&(ct?t.texStorage2D(r.TEXTURE_2D,1,We,Te.width,Te.height):t.texImage2D(r.TEXTURE_2D,0,We,Te.width,Te.height,0,Fe,yt,null));else if(w.isDataTexture)if(tt.length>0){ct&&kt&&t.texStorage2D(r.TEXTURE_2D,Z,We,tt[0].width,tt[0].height);for(let J=0,oe=tt.length;J<oe;J++)Re=tt[J],ct?T&&t.texSubImage2D(r.TEXTURE_2D,J,0,0,Re.width,Re.height,Fe,yt,Re.data):t.texImage2D(r.TEXTURE_2D,J,We,Re.width,Re.height,0,Fe,yt,Re.data);w.generateMipmaps=!1}else ct?(kt&&t.texStorage2D(r.TEXTURE_2D,Z,We,Te.width,Te.height),T&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Te.width,Te.height,Fe,yt,Te.data)):t.texImage2D(r.TEXTURE_2D,0,We,Te.width,Te.height,0,Fe,yt,Te.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){ct&&kt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Z,We,tt[0].width,tt[0].height,Te.depth);for(let J=0,oe=tt.length;J<oe;J++)if(Re=tt[J],w.format!==Kn)if(Fe!==null)if(ct){if(T)if(w.layerUpdates.size>0){const xe=lu(Re.width,Re.height,w.format,w.type);for(const Ge of w.layerUpdates){const st=Re.data.subarray(Ge*xe/Re.data.BYTES_PER_ELEMENT,(Ge+1)*xe/Re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,J,0,0,Ge,Re.width,Re.height,1,Fe,st,0,0)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,J,0,0,0,Re.width,Re.height,Te.depth,Fe,Re.data,0,0)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,J,We,Re.width,Re.height,Te.depth,0,Re.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ct?T&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,J,0,0,0,Re.width,Re.height,Te.depth,Fe,yt,Re.data):t.texImage3D(r.TEXTURE_2D_ARRAY,J,We,Re.width,Re.height,Te.depth,0,Fe,yt,Re.data)}else{ct&&kt&&t.texStorage2D(r.TEXTURE_2D,Z,We,tt[0].width,tt[0].height);for(let J=0,oe=tt.length;J<oe;J++)Re=tt[J],w.format!==Kn?Fe!==null?ct?T&&t.compressedTexSubImage2D(r.TEXTURE_2D,J,0,0,Re.width,Re.height,Fe,Re.data):t.compressedTexImage2D(r.TEXTURE_2D,J,We,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ct?T&&t.texSubImage2D(r.TEXTURE_2D,J,0,0,Re.width,Re.height,Fe,yt,Re.data):t.texImage2D(r.TEXTURE_2D,J,We,Re.width,Re.height,0,Fe,yt,Re.data)}else if(w.isDataArrayTexture)if(ct){if(kt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Z,We,Te.width,Te.height,Te.depth),T)if(w.layerUpdates.size>0){const J=lu(Te.width,Te.height,w.format,w.type);for(const oe of w.layerUpdates){const xe=Te.data.subarray(oe*J/Te.data.BYTES_PER_ELEMENT,(oe+1)*J/Te.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,oe,Te.width,Te.height,1,Fe,yt,xe)}w.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Te.width,Te.height,Te.depth,Fe,yt,Te.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,We,Te.width,Te.height,Te.depth,0,Fe,yt,Te.data);else if(w.isData3DTexture)ct?(kt&&t.texStorage3D(r.TEXTURE_3D,Z,We,Te.width,Te.height,Te.depth),T&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Te.width,Te.height,Te.depth,Fe,yt,Te.data)):t.texImage3D(r.TEXTURE_3D,0,We,Te.width,Te.height,Te.depth,0,Fe,yt,Te.data);else if(w.isFramebufferTexture){if(kt)if(ct)t.texStorage2D(r.TEXTURE_2D,Z,We,Te.width,Te.height);else{let J=Te.width,oe=Te.height;for(let xe=0;xe<Z;xe++)t.texImage2D(r.TEXTURE_2D,xe,We,J,oe,0,Fe,yt,null),J>>=1,oe>>=1}}else if(tt.length>0){if(ct&&kt){const J=et(tt[0]);t.texStorage2D(r.TEXTURE_2D,Z,We,J.width,J.height)}for(let J=0,oe=tt.length;J<oe;J++)Re=tt[J],ct?T&&t.texSubImage2D(r.TEXTURE_2D,J,0,0,Fe,yt,Re):t.texImage2D(r.TEXTURE_2D,J,We,Fe,yt,Re);w.generateMipmaps=!1}else if(ct){if(kt){const J=et(Te);t.texStorage2D(r.TEXTURE_2D,Z,We,J.width,J.height)}T&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Fe,yt,Te)}else t.texImage2D(r.TEXTURE_2D,0,We,Fe,yt,Te);x(w)&&y(ve),Ke.__version=ge.version,w.onUpdate&&w.onUpdate(w)}O.__version=w.version}function ue(O,w,ee){if(w.image.length!==6)return;const ve=xt(O,w),ye=w.source;t.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+ee);const ge=n.get(ye);if(ye.version!==ge.__version||ve===!0){t.activeTexture(r.TEXTURE0+ee);const Ke=Ct.getPrimaries(Ct.workingColorSpace),be=w.colorSpace===$i?null:Ct.getPrimaries(w.colorSpace),Ce=w.colorSpace===$i||Ke===be?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const rt=w.isCompressedTexture||w.image[0].isCompressedTexture,Te=w.image[0]&&w.image[0].isDataTexture,Fe=[];for(let oe=0;oe<6;oe++)!rt&&!Te?Fe[oe]=E(w.image[oe],!0,i.maxCubemapSize):Fe[oe]=Te?w.image[oe].image:w.image[oe],Fe[oe]=it(w,Fe[oe]);const yt=Fe[0],We=s.convert(w.format,w.colorSpace),Re=s.convert(w.type),tt=N(w.internalFormat,We,Re,w.colorSpace),ct=w.isVideoTexture!==!0,kt=ge.__version===void 0||ve===!0,T=ye.dataReady;let Z=U(w,yt);ze(r.TEXTURE_CUBE_MAP,w);let J;if(rt){ct&&kt&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Z,tt,yt.width,yt.height);for(let oe=0;oe<6;oe++){J=Fe[oe].mipmaps;for(let xe=0;xe<J.length;xe++){const Ge=J[xe];w.format!==Kn?We!==null?ct?T&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,xe,0,0,Ge.width,Ge.height,We,Ge.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,xe,tt,Ge.width,Ge.height,0,Ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ct?T&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,xe,0,0,Ge.width,Ge.height,We,Re,Ge.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,xe,tt,Ge.width,Ge.height,0,We,Re,Ge.data)}}}else{if(J=w.mipmaps,ct&&kt){J.length>0&&Z++;const oe=et(Fe[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Z,tt,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(Te){ct?T&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Fe[oe].width,Fe[oe].height,We,Re,Fe[oe].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,tt,Fe[oe].width,Fe[oe].height,0,We,Re,Fe[oe].data);for(let xe=0;xe<J.length;xe++){const st=J[xe].image[oe].image;ct?T&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,xe+1,0,0,st.width,st.height,We,Re,st.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,xe+1,tt,st.width,st.height,0,We,Re,st.data)}}else{ct?T&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,We,Re,Fe[oe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,tt,We,Re,Fe[oe]);for(let xe=0;xe<J.length;xe++){const Ge=J[xe];ct?T&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,xe+1,0,0,We,Re,Ge.image[oe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,xe+1,tt,We,Re,Ge.image[oe])}}}x(w)&&y(r.TEXTURE_CUBE_MAP),ge.__version=ye.version,w.onUpdate&&w.onUpdate(w)}O.__version=w.version}function Se(O,w,ee,ve,ye,ge){const Ke=s.convert(ee.format,ee.colorSpace),be=s.convert(ee.type),Ce=N(ee.internalFormat,Ke,be,ee.colorSpace);if(!n.get(w).__hasExternalTextures){const Te=Math.max(1,w.width>>ge),Fe=Math.max(1,w.height>>ge);ye===r.TEXTURE_3D||ye===r.TEXTURE_2D_ARRAY?t.texImage3D(ye,ge,Ce,Te,Fe,w.depth,0,Ke,be,null):t.texImage2D(ye,ge,Ce,Te,Fe,0,Ke,be,null)}t.bindFramebuffer(r.FRAMEBUFFER,O),je(w)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ve,ye,n.get(ee).__webglTexture,0,At(w)):(ye===r.TEXTURE_2D||ye>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ye<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ve,ye,n.get(ee).__webglTexture,ge),t.bindFramebuffer(r.FRAMEBUFFER,null)}function De(O,w,ee){if(r.bindRenderbuffer(r.RENDERBUFFER,O),w.depthBuffer){const ve=w.depthTexture,ye=ve&&ve.isDepthTexture?ve.type:null,ge=D(w.stencilBuffer,ye),Ke=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,be=At(w);je(w)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,be,ge,w.width,w.height):ee?r.renderbufferStorageMultisample(r.RENDERBUFFER,be,ge,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,ge,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ke,r.RENDERBUFFER,O)}else{const ve=w.textures;for(let ye=0;ye<ve.length;ye++){const ge=ve[ye],Ke=s.convert(ge.format,ge.colorSpace),be=s.convert(ge.type),Ce=N(ge.internalFormat,Ke,be,ge.colorSpace),rt=At(w);ee&&je(w)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,rt,Ce,w.width,w.height):je(w)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,rt,Ce,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,Ce,w.width,w.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ke(O,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,O),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),fe(w.depthTexture,0);const ve=n.get(w.depthTexture).__webglTexture,ye=At(w);if(w.depthTexture.format===Wr)je(w)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ve,0,ye):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ve,0);else if(w.depthTexture.format===Qr)je(w)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ve,0,ye):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ve,0);else throw new Error("Unknown depthTexture format")}function ht(O){const w=n.get(O),ee=O.isWebGLCubeRenderTarget===!0;if(O.depthTexture&&!w.__autoAllocateDepthBuffer){if(ee)throw new Error("target.depthTexture not supported in Cube render targets");ke(w.__webglFramebuffer,O)}else if(ee){w.__webglDepthbuffer=[];for(let ve=0;ve<6;ve++)t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[ve]),w.__webglDepthbuffer[ve]=r.createRenderbuffer(),De(w.__webglDepthbuffer[ve],O,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=r.createRenderbuffer(),De(w.__webglDepthbuffer,O,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function pt(O,w,ee){const ve=n.get(O);w!==void 0&&Se(ve.__webglFramebuffer,O,O.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),ee!==void 0&&ht(O)}function Qe(O){const w=O.texture,ee=n.get(O),ve=n.get(w);O.addEventListener("dispose",V);const ye=O.textures,ge=O.isWebGLCubeRenderTarget===!0,Ke=ye.length>1;if(Ke||(ve.__webglTexture===void 0&&(ve.__webglTexture=r.createTexture()),ve.__version=w.version,a.memory.textures++),ge){ee.__webglFramebuffer=[];for(let be=0;be<6;be++)if(w.mipmaps&&w.mipmaps.length>0){ee.__webglFramebuffer[be]=[];for(let Ce=0;Ce<w.mipmaps.length;Ce++)ee.__webglFramebuffer[be][Ce]=r.createFramebuffer()}else ee.__webglFramebuffer[be]=r.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){ee.__webglFramebuffer=[];for(let be=0;be<w.mipmaps.length;be++)ee.__webglFramebuffer[be]=r.createFramebuffer()}else ee.__webglFramebuffer=r.createFramebuffer();if(Ke)for(let be=0,Ce=ye.length;be<Ce;be++){const rt=n.get(ye[be]);rt.__webglTexture===void 0&&(rt.__webglTexture=r.createTexture(),a.memory.textures++)}if(O.samples>0&&je(O)===!1){ee.__webglMultisampledFramebuffer=r.createFramebuffer(),ee.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let be=0;be<ye.length;be++){const Ce=ye[be];ee.__webglColorRenderbuffer[be]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,ee.__webglColorRenderbuffer[be]);const rt=s.convert(Ce.format,Ce.colorSpace),Te=s.convert(Ce.type),Fe=N(Ce.internalFormat,rt,Te,Ce.colorSpace,O.isXRRenderTarget===!0),yt=At(O);r.renderbufferStorageMultisample(r.RENDERBUFFER,yt,Fe,O.width,O.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.RENDERBUFFER,ee.__webglColorRenderbuffer[be])}r.bindRenderbuffer(r.RENDERBUFFER,null),O.depthBuffer&&(ee.__webglDepthRenderbuffer=r.createRenderbuffer(),De(ee.__webglDepthRenderbuffer,O,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ge){t.bindTexture(r.TEXTURE_CUBE_MAP,ve.__webglTexture),ze(r.TEXTURE_CUBE_MAP,w);for(let be=0;be<6;be++)if(w.mipmaps&&w.mipmaps.length>0)for(let Ce=0;Ce<w.mipmaps.length;Ce++)Se(ee.__webglFramebuffer[be][Ce],O,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ce);else Se(ee.__webglFramebuffer[be],O,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);x(w)&&y(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ke){for(let be=0,Ce=ye.length;be<Ce;be++){const rt=ye[be],Te=n.get(rt);t.bindTexture(r.TEXTURE_2D,Te.__webglTexture),ze(r.TEXTURE_2D,rt),Se(ee.__webglFramebuffer,O,rt,r.COLOR_ATTACHMENT0+be,r.TEXTURE_2D,0),x(rt)&&y(r.TEXTURE_2D)}t.unbindTexture()}else{let be=r.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(be=O.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(be,ve.__webglTexture),ze(be,w),w.mipmaps&&w.mipmaps.length>0)for(let Ce=0;Ce<w.mipmaps.length;Ce++)Se(ee.__webglFramebuffer[Ce],O,w,r.COLOR_ATTACHMENT0,be,Ce);else Se(ee.__webglFramebuffer,O,w,r.COLOR_ATTACHMENT0,be,0);x(w)&&y(be),t.unbindTexture()}O.depthBuffer&&ht(O)}function Lt(O){const w=O.textures;for(let ee=0,ve=w.length;ee<ve;ee++){const ye=w[ee];if(x(ye)){const ge=O.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,Ke=n.get(ye).__webglTexture;t.bindTexture(ge,Ke),y(ge),t.unbindTexture()}}}const H=[],Ie=[];function lt(O){if(O.samples>0){if(je(O)===!1){const w=O.textures,ee=O.width,ve=O.height;let ye=r.COLOR_BUFFER_BIT;const ge=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ke=n.get(O),be=w.length>1;if(be)for(let Ce=0;Ce<w.length;Ce++)t.bindFramebuffer(r.FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Ke.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer);for(let Ce=0;Ce<w.length;Ce++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(ye|=r.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(ye|=r.STENCIL_BUFFER_BIT)),be){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ke.__webglColorRenderbuffer[Ce]);const rt=n.get(w[Ce]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,rt,0)}r.blitFramebuffer(0,0,ee,ve,0,0,ee,ve,ye,r.NEAREST),c===!0&&(H.length=0,Ie.length=0,H.push(r.COLOR_ATTACHMENT0+Ce),O.depthBuffer&&O.resolveDepthBuffer===!1&&(H.push(ge),Ie.push(ge),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Ie)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,H))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),be)for(let Ce=0;Ce<w.length;Ce++){t.bindFramebuffer(r.FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.RENDERBUFFER,Ke.__webglColorRenderbuffer[Ce]);const rt=n.get(w[Ce]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Ke.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.TEXTURE_2D,rt,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ke.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&c){const w=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[w])}}}function At(O){return Math.min(i.maxSamples,O.samples)}function je(O){const w=n.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Wt(O){const w=a.render.frame;d.get(O)!==w&&(d.set(O,w),O.update())}function it(O,w){const ee=O.colorSpace,ve=O.format,ye=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||ee!==gn&&ee!==$i&&(Ct.getTransfer(ee)===Gt?(ve!==Kn||ye!==ki)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ee)),w}function et(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(u.width=O.naturalWidth||O.width,u.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(u.width=O.displayWidth,u.height=O.displayHeight):(u.width=O.width,u.height=O.height),u}this.allocateTextureUnit=le,this.resetTextureUnits=G,this.setTexture2D=fe,this.setTexture2DArray=de,this.setTexture3D=ce,this.setTextureCube=me,this.rebindTextures=pt,this.setupRenderTarget=Qe,this.updateRenderTargetMipmap=Lt,this.updateMultisampleRenderTarget=lt,this.setupDepthRenderbuffer=ht,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=je}function mv(r,e){function t(n,i=$i){let s;const a=Ct.getTransfer(i);if(n===ki)return r.UNSIGNED_BYTE;if(n===Pl)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Ll)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Zu)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Ku)return r.BYTE;if(n===$u)return r.SHORT;if(n===Ns)return r.UNSIGNED_SHORT;if(n===Cl)return r.INT;if(n===gr)return r.UNSIGNED_INT;if(n===oi)return r.FLOAT;if(n===Fi)return r.HALF_FLOAT;if(n===Ju)return r.ALPHA;if(n===Qu)return r.RGB;if(n===Kn)return r.RGBA;if(n===eh)return r.LUMINANCE;if(n===th)return r.LUMINANCE_ALPHA;if(n===Wr)return r.DEPTH_COMPONENT;if(n===Qr)return r.DEPTH_STENCIL;if(n===Dl)return r.RED;if(n===Il)return r.RED_INTEGER;if(n===nh)return r.RG;if(n===Nl)return r.RG_INTEGER;if(n===Ul)return r.RGBA_INTEGER;if(n===Lo||n===Do||n===Io||n===No)if(a===Gt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Lo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Do)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Io)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===No)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Lo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Do)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Io)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===No)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ya||n===Ka||n===Za||n===Ja)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ya)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ka)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Za)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ja)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Qa||n===el||n===tl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Qa||n===el)return a===Gt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===tl)return a===Gt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===nl||n===il||n===rl||n===sl||n===ol||n===al||n===ll||n===cl||n===ul||n===hl||n===fl||n===dl||n===pl||n===ml)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===nl)return a===Gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===il)return a===Gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===rl)return a===Gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===sl)return a===Gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ol)return a===Gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===al)return a===Gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ll)return a===Gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===cl)return a===Gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ul)return a===Gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===hl)return a===Gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===fl)return a===Gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===dl)return a===Gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===pl)return a===Gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ml)return a===Gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Uo||n===gl||n===_l)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Uo)return a===Gt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===gl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===_l)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ih||n===vl||n===xl||n===yl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Uo)return s.COMPRESSED_RED_RGTC1_EXT;if(n===vl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===xl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===yl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Jr?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}class gv extends wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class mr extends qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _v={type:"move"};class Ia{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const l=this._targetRay,c=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const E of e.hand.values()){const x=t.getJointPose(E,n),y=this._getHandJoint(u,E);x!==null&&(y.matrix.fromArray(x.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=x.radius),y.visible=x!==null}const d=u.joints["index-finger-tip"],p=u.joints["thumb-tip"],g=d.position.distanceTo(p.position),v=.02,M=.005;u.inputState.pinching&&g>v+M?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&g<=v-M&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));l!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(l.matrix.fromArray(i.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,i.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(i.linearVelocity)):l.hasLinearVelocity=!1,i.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(i.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(_v)))}return l!==null&&(l.visible=i!==null),c!==null&&(c.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new mr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const vv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class yv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new dn,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Cn({vertexShader:vv,fragmentShader:xv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new In(new qo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Mv extends _r{constructor(e,t){super();const n=this;let i=null,s=1,a=null,l="local-floor",c=1,u=null,d=null,p=null,g=null,v=null,M=null;const E=new yv,x=t.getContextAttributes();let y=null,N=null;const D=[],U=[],f=new Xe;let V=null;const F=new wn;F.layers.enable(1),F.viewport=new Bt;const $=new wn;$.layers.enable(2),$.viewport=new Bt;const I=[F,$],L=new gv;L.layers.enable(1),L.layers.enable(2);let G=null,le=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ue){let Se=D[ue];return Se===void 0&&(Se=new Ia,D[ue]=Se),Se.getTargetRaySpace()},this.getControllerGrip=function(ue){let Se=D[ue];return Se===void 0&&(Se=new Ia,D[ue]=Se),Se.getGripSpace()},this.getHand=function(ue){let Se=D[ue];return Se===void 0&&(Se=new Ia,D[ue]=Se),Se.getHandSpace()};function se(ue){const Se=U.indexOf(ue.inputSource);if(Se===-1)return;const De=D[Se];De!==void 0&&(De.update(ue.inputSource,ue.frame,u||a),De.dispatchEvent({type:ue.type,data:ue.inputSource}))}function fe(){i.removeEventListener("select",se),i.removeEventListener("selectstart",se),i.removeEventListener("selectend",se),i.removeEventListener("squeeze",se),i.removeEventListener("squeezestart",se),i.removeEventListener("squeezeend",se),i.removeEventListener("end",fe),i.removeEventListener("inputsourceschange",de);for(let ue=0;ue<D.length;ue++){const Se=U[ue];Se!==null&&(U[ue]=null,D[ue].disconnect(Se))}G=null,le=null,E.reset(),e.setRenderTarget(y),v=null,g=null,p=null,i=null,N=null,bt.stop(),n.isPresenting=!1,e.setPixelRatio(V),e.setSize(f.width,f.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ue){s=ue,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ue){l=ue,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(ue){u=ue},this.getBaseLayer=function(){return g!==null?g:v},this.getBinding=function(){return p},this.getFrame=function(){return M},this.getSession=function(){return i},this.setSession=async function(ue){if(i=ue,i!==null){if(y=e.getRenderTarget(),i.addEventListener("select",se),i.addEventListener("selectstart",se),i.addEventListener("selectend",se),i.addEventListener("squeeze",se),i.addEventListener("squeezestart",se),i.addEventListener("squeezeend",se),i.addEventListener("end",fe),i.addEventListener("inputsourceschange",de),x.xrCompatible!==!0&&await t.makeXRCompatible(),V=e.getPixelRatio(),e.getSize(f),i.renderState.layers===void 0){const Se={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};v=new XRWebGLLayer(i,t,Se),i.updateRenderState({baseLayer:v}),e.setPixelRatio(1),e.setSize(v.framebufferWidth,v.framebufferHeight,!1),N=new li(v.framebufferWidth,v.framebufferHeight,{format:Kn,type:ki,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let Se=null,De=null,ke=null;x.depth&&(ke=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=x.stencil?Qr:Wr,De=x.stencil?Jr:gr);const ht={colorFormat:t.RGBA8,depthFormat:ke,scaleFactor:s};p=new XRWebGLBinding(i,t),g=p.createProjectionLayer(ht),i.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),N=new li(g.textureWidth,g.textureHeight,{format:Kn,type:ki,depthTexture:new xh(g.textureWidth,g.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(c),u=null,a=await i.requestReferenceSpace(l),bt.setContext(i),bt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function de(ue){for(let Se=0;Se<ue.removed.length;Se++){const De=ue.removed[Se],ke=U.indexOf(De);ke>=0&&(U[ke]=null,D[ke].disconnect(De))}for(let Se=0;Se<ue.added.length;Se++){const De=ue.added[Se];let ke=U.indexOf(De);if(ke===-1){for(let pt=0;pt<D.length;pt++)if(pt>=U.length){U.push(De),ke=pt;break}else if(U[pt]===null){U[pt]=De,ke=pt;break}if(ke===-1)break}const ht=D[ke];ht&&ht.connect(De)}}const ce=new W,me=new W;function ae(ue,Se,De){ce.setFromMatrixPosition(Se.matrixWorld),me.setFromMatrixPosition(De.matrixWorld);const ke=ce.distanceTo(me),ht=Se.projectionMatrix.elements,pt=De.projectionMatrix.elements,Qe=ht[14]/(ht[10]-1),Lt=ht[14]/(ht[10]+1),H=(ht[9]+1)/ht[5],Ie=(ht[9]-1)/ht[5],lt=(ht[8]-1)/ht[0],At=(pt[8]+1)/pt[0],je=Qe*lt,Wt=Qe*At,it=ke/(-lt+At),et=it*-lt;Se.matrixWorld.decompose(ue.position,ue.quaternion,ue.scale),ue.translateX(et),ue.translateZ(it),ue.matrixWorld.compose(ue.position,ue.quaternion,ue.scale),ue.matrixWorldInverse.copy(ue.matrixWorld).invert();const O=Qe+it,w=Lt+it,ee=je-et,ve=Wt+(ke-et),ye=H*Lt/w*O,ge=Ie*Lt/w*O;ue.projectionMatrix.makePerspective(ee,ve,ye,ge,O,w),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert()}function Ae(ue,Se){Se===null?ue.matrixWorld.copy(ue.matrix):ue.matrixWorld.multiplyMatrices(Se.matrixWorld,ue.matrix),ue.matrixWorldInverse.copy(ue.matrixWorld).invert()}this.updateCamera=function(ue){if(i===null)return;E.texture!==null&&(ue.near=E.depthNear,ue.far=E.depthFar),L.near=$.near=F.near=ue.near,L.far=$.far=F.far=ue.far,(G!==L.near||le!==L.far)&&(i.updateRenderState({depthNear:L.near,depthFar:L.far}),G=L.near,le=L.far,F.near=G,F.far=le,$.near=G,$.far=le,F.updateProjectionMatrix(),$.updateProjectionMatrix(),ue.updateProjectionMatrix());const Se=ue.parent,De=L.cameras;Ae(L,Se);for(let ke=0;ke<De.length;ke++)Ae(De[ke],Se);De.length===2?ae(L,F,$):L.projectionMatrix.copy(F.projectionMatrix),Le(ue,L,Se)};function Le(ue,Se,De){De===null?ue.matrix.copy(Se.matrixWorld):(ue.matrix.copy(De.matrixWorld),ue.matrix.invert(),ue.matrix.multiply(Se.matrixWorld)),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.updateMatrixWorld(!0),ue.projectionMatrix.copy(Se.projectionMatrix),ue.projectionMatrixInverse.copy(Se.projectionMatrixInverse),ue.isPerspectiveCamera&&(ue.fov=es*2*Math.atan(1/ue.projectionMatrix.elements[5]),ue.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(g===null&&v===null))return c},this.setFoveation=function(ue){c=ue,g!==null&&(g.fixedFoveation=ue),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=ue)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(L)};let ze=null;function xt(ue,Se){if(d=Se.getViewerPose(u||a),M=Se,d!==null){const De=d.views;v!==null&&(e.setRenderTargetFramebuffer(N,v.framebuffer),e.setRenderTarget(N));let ke=!1;De.length!==L.cameras.length&&(L.cameras.length=0,ke=!0);for(let pt=0;pt<De.length;pt++){const Qe=De[pt];let Lt=null;if(v!==null)Lt=v.getViewport(Qe);else{const Ie=p.getViewSubImage(g,Qe);Lt=Ie.viewport,pt===0&&(e.setRenderTargetTextures(N,Ie.colorTexture,g.ignoreDepthValues?void 0:Ie.depthStencilTexture),e.setRenderTarget(N))}let H=I[pt];H===void 0&&(H=new wn,H.layers.enable(pt),H.viewport=new Bt,I[pt]=H),H.matrix.fromArray(Qe.transform.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale),H.projectionMatrix.fromArray(Qe.projectionMatrix),H.projectionMatrixInverse.copy(H.projectionMatrix).invert(),H.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),pt===0&&(L.matrix.copy(H.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),ke===!0&&L.cameras.push(H)}const ht=i.enabledFeatures;if(ht&&ht.includes("depth-sensing")){const pt=p.getDepthInformation(De[0]);pt&&pt.isValid&&pt.texture&&E.init(e,pt,i.renderState)}}for(let De=0;De<D.length;De++){const ke=U[De],ht=D[De];ke!==null&&ht!==void 0&&ht.update(ke,Se,u||a)}ze&&ze(ue,Se),Se.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Se}),M=null}const bt=new vh;bt.setAnimationLoop(xt),this.setAnimationLoop=function(ue){ze=ue},this.dispose=function(){}}}const ur=new yi,Sv=new vt;function Tv(r,e){function t(x,y){x.matrixAutoUpdate===!0&&x.updateMatrix(),y.value.copy(x.matrix)}function n(x,y){y.color.getRGB(x.fogColor.value,mh(r)),y.isFog?(x.fogNear.value=y.near,x.fogFar.value=y.far):y.isFogExp2&&(x.fogDensity.value=y.density)}function i(x,y,N,D,U){y.isMeshBasicMaterial||y.isMeshLambertMaterial?s(x,y):y.isMeshToonMaterial?(s(x,y),p(x,y)):y.isMeshPhongMaterial?(s(x,y),d(x,y)):y.isMeshStandardMaterial?(s(x,y),g(x,y),y.isMeshPhysicalMaterial&&v(x,y,U)):y.isMeshMatcapMaterial?(s(x,y),M(x,y)):y.isMeshDepthMaterial?s(x,y):y.isMeshDistanceMaterial?(s(x,y),E(x,y)):y.isMeshNormalMaterial?s(x,y):y.isLineBasicMaterial?(a(x,y),y.isLineDashedMaterial&&l(x,y)):y.isPointsMaterial?c(x,y,N,D):y.isSpriteMaterial?u(x,y):y.isShadowMaterial?(x.color.value.copy(y.color),x.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function s(x,y){x.opacity.value=y.opacity,y.color&&x.diffuse.value.copy(y.color),y.emissive&&x.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(x.map.value=y.map,t(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.bumpMap&&(x.bumpMap.value=y.bumpMap,t(y.bumpMap,x.bumpMapTransform),x.bumpScale.value=y.bumpScale,y.side===Nn&&(x.bumpScale.value*=-1)),y.normalMap&&(x.normalMap.value=y.normalMap,t(y.normalMap,x.normalMapTransform),x.normalScale.value.copy(y.normalScale),y.side===Nn&&x.normalScale.value.negate()),y.displacementMap&&(x.displacementMap.value=y.displacementMap,t(y.displacementMap,x.displacementMapTransform),x.displacementScale.value=y.displacementScale,x.displacementBias.value=y.displacementBias),y.emissiveMap&&(x.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,x.emissiveMapTransform)),y.specularMap&&(x.specularMap.value=y.specularMap,t(y.specularMap,x.specularMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest);const N=e.get(y),D=N.envMap,U=N.envMapRotation;D&&(x.envMap.value=D,ur.copy(U),ur.x*=-1,ur.y*=-1,ur.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(ur.y*=-1,ur.z*=-1),x.envMapRotation.value.setFromMatrix4(Sv.makeRotationFromEuler(ur)),x.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=y.reflectivity,x.ior.value=y.ior,x.refractionRatio.value=y.refractionRatio),y.lightMap&&(x.lightMap.value=y.lightMap,x.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,x.lightMapTransform)),y.aoMap&&(x.aoMap.value=y.aoMap,x.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,x.aoMapTransform))}function a(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,y.map&&(x.map.value=y.map,t(y.map,x.mapTransform))}function l(x,y){x.dashSize.value=y.dashSize,x.totalSize.value=y.dashSize+y.gapSize,x.scale.value=y.scale}function c(x,y,N,D){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.size.value=y.size*N,x.scale.value=D*.5,y.map&&(x.map.value=y.map,t(y.map,x.uvTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function u(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.rotation.value=y.rotation,y.map&&(x.map.value=y.map,t(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function d(x,y){x.specular.value.copy(y.specular),x.shininess.value=Math.max(y.shininess,1e-4)}function p(x,y){y.gradientMap&&(x.gradientMap.value=y.gradientMap)}function g(x,y){x.metalness.value=y.metalness,y.metalnessMap&&(x.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,x.metalnessMapTransform)),x.roughness.value=y.roughness,y.roughnessMap&&(x.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,x.roughnessMapTransform)),y.envMap&&(x.envMapIntensity.value=y.envMapIntensity)}function v(x,y,N){x.ior.value=y.ior,y.sheen>0&&(x.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),x.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(x.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,x.sheenColorMapTransform)),y.sheenRoughnessMap&&(x.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,x.sheenRoughnessMapTransform))),y.clearcoat>0&&(x.clearcoat.value=y.clearcoat,x.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(x.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,x.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(x.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Nn&&x.clearcoatNormalScale.value.negate())),y.dispersion>0&&(x.dispersion.value=y.dispersion),y.iridescence>0&&(x.iridescence.value=y.iridescence,x.iridescenceIOR.value=y.iridescenceIOR,x.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(x.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,x.iridescenceMapTransform)),y.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),y.transmission>0&&(x.transmission.value=y.transmission,x.transmissionSamplerMap.value=N.texture,x.transmissionSamplerSize.value.set(N.width,N.height),y.transmissionMap&&(x.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,x.transmissionMapTransform)),x.thickness.value=y.thickness,y.thicknessMap&&(x.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=y.attenuationDistance,x.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(x.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(x.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=y.specularIntensity,x.specularColor.value.copy(y.specularColor),y.specularColorMap&&(x.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,x.specularColorMapTransform)),y.specularIntensityMap&&(x.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,x.specularIntensityMapTransform))}function M(x,y){y.matcap&&(x.matcap.value=y.matcap)}function E(x,y){const N=e.get(y).light;x.referencePosition.value.setFromMatrixPosition(N.matrixWorld),x.nearDistance.value=N.shadow.camera.near,x.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Ev(r,e,t,n){let i={},s={},a=[];const l=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(N,D){const U=D.program;n.uniformBlockBinding(N,U)}function u(N,D){let U=i[N.id];U===void 0&&(M(N),U=d(N),i[N.id]=U,N.addEventListener("dispose",x));const f=D.program;n.updateUBOMapping(N,f);const V=e.render.frame;s[N.id]!==V&&(g(N),s[N.id]=V)}function d(N){const D=p();N.__bindingPointIndex=D;const U=r.createBuffer(),f=N.__size,V=N.usage;return r.bindBuffer(r.UNIFORM_BUFFER,U),r.bufferData(r.UNIFORM_BUFFER,f,V),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,D,U),U}function p(){for(let N=0;N<l;N++)if(a.indexOf(N)===-1)return a.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(N){const D=i[N.id],U=N.uniforms,f=N.__cache;r.bindBuffer(r.UNIFORM_BUFFER,D);for(let V=0,F=U.length;V<F;V++){const $=Array.isArray(U[V])?U[V]:[U[V]];for(let I=0,L=$.length;I<L;I++){const G=$[I];if(v(G,V,I,f)===!0){const le=G.__offset,se=Array.isArray(G.value)?G.value:[G.value];let fe=0;for(let de=0;de<se.length;de++){const ce=se[de],me=E(ce);typeof ce=="number"||typeof ce=="boolean"?(G.__data[0]=ce,r.bufferSubData(r.UNIFORM_BUFFER,le+fe,G.__data)):ce.isMatrix3?(G.__data[0]=ce.elements[0],G.__data[1]=ce.elements[1],G.__data[2]=ce.elements[2],G.__data[3]=0,G.__data[4]=ce.elements[3],G.__data[5]=ce.elements[4],G.__data[6]=ce.elements[5],G.__data[7]=0,G.__data[8]=ce.elements[6],G.__data[9]=ce.elements[7],G.__data[10]=ce.elements[8],G.__data[11]=0):(ce.toArray(G.__data,fe),fe+=me.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,le,G.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function v(N,D,U,f){const V=N.value,F=D+"_"+U;if(f[F]===void 0)return typeof V=="number"||typeof V=="boolean"?f[F]=V:f[F]=V.clone(),!0;{const $=f[F];if(typeof V=="number"||typeof V=="boolean"){if($!==V)return f[F]=V,!0}else if($.equals(V)===!1)return $.copy(V),!0}return!1}function M(N){const D=N.uniforms;let U=0;const f=16;for(let F=0,$=D.length;F<$;F++){const I=Array.isArray(D[F])?D[F]:[D[F]];for(let L=0,G=I.length;L<G;L++){const le=I[L],se=Array.isArray(le.value)?le.value:[le.value];for(let fe=0,de=se.length;fe<de;fe++){const ce=se[fe],me=E(ce),ae=U%f,Ae=ae%me.boundary,Le=ae+Ae;U+=Ae,Le!==0&&f-Le<me.storage&&(U+=f-Le),le.__data=new Float32Array(me.storage/Float32Array.BYTES_PER_ELEMENT),le.__offset=U,U+=me.storage}}}const V=U%f;return V>0&&(U+=f-V),N.__size=U,N.__cache={},this}function E(N){const D={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(D.boundary=4,D.storage=4):N.isVector2?(D.boundary=8,D.storage=8):N.isVector3||N.isColor?(D.boundary=16,D.storage=12):N.isVector4?(D.boundary=16,D.storage=16):N.isMatrix3?(D.boundary=48,D.storage=48):N.isMatrix4?(D.boundary=64,D.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),D}function x(N){const D=N.target;D.removeEventListener("dispose",x);const U=a.indexOf(D.__bindingPointIndex);a.splice(U,1),r.deleteBuffer(i[D.id]),delete i[D.id],delete s[D.id]}function y(){for(const N in i)r.deleteBuffer(i[N]);a=[],i={},s={}}return{bind:c,update:u,dispose:y}}class bv{constructor(e={}){const{canvas:t=gd(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const v=new Uint32Array(4),M=new Int32Array(4);let E=null,x=null;const y=[],N=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=An,this.toneMapping=er,this.toneMappingExposure=1;const D=this;let U=!1,f=0,V=0,F=null,$=-1,I=null;const L=new Bt,G=new Bt;let le=null;const se=new at(0);let fe=0,de=t.width,ce=t.height,me=1,ae=null,Ae=null;const Le=new Bt(0,0,de,ce),ze=new Bt(0,0,de,ce);let xt=!1;const bt=new Bl;let ue=!1,Se=!1;const De=new vt,ke=new W,ht=new Bt,pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Qe=!1;function Lt(){return F===null?me:1}let H=n;function Ie(P,q){return t.getContext(P,q)}try{const P={alpha:!0,depth:i,stencil:s,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Rl}`),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",oe,!1),t.addEventListener("webglcontextcreationerror",xe,!1),H===null){const q="webgl2";if(H=Ie(q,P),H===null)throw Ie(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let lt,At,je,Wt,it,et,O,w,ee,ve,ye,ge,Ke,be,Ce,rt,Te,Fe,yt,We,Re,tt,ct,kt;function T(){lt=new Lg(H),lt.init(),tt=new mv(H,lt),At=new bg(H,lt,e,tt),je=new fv(H),Wt=new Ng(H),it=new J_,et=new pv(H,lt,je,it,At,tt,Wt),O=new wg(D),w=new Pg(D),ee=new zd(H),ct=new Tg(H,ee),ve=new Dg(H,ee,Wt,ct),ye=new Og(H,ve,ee,Wt),yt=new Ug(H,At,et),rt=new Ag(it),ge=new Z_(D,O,w,lt,At,ct,rt),Ke=new Tv(D,it),be=new ev,Ce=new ov(lt),Fe=new Sg(D,O,w,je,ye,g,c),Te=new hv(D,ye,At),kt=new Ev(H,Wt,At,je),We=new Eg(H,lt,Wt),Re=new Ig(H,lt,Wt),Wt.programs=ge.programs,D.capabilities=At,D.extensions=lt,D.properties=it,D.renderLists=be,D.shadowMap=Te,D.state=je,D.info=Wt}T();const Z=new Mv(D,H);this.xr=Z,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const P=lt.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=lt.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return me},this.setPixelRatio=function(P){P!==void 0&&(me=P,this.setSize(de,ce,!1))},this.getSize=function(P){return P.set(de,ce)},this.setSize=function(P,q,te=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}de=P,ce=q,t.width=Math.floor(P*me),t.height=Math.floor(q*me),te===!0&&(t.style.width=P+"px",t.style.height=q+"px"),this.setViewport(0,0,P,q)},this.getDrawingBufferSize=function(P){return P.set(de*me,ce*me).floor()},this.setDrawingBufferSize=function(P,q,te){de=P,ce=q,me=te,t.width=Math.floor(P*te),t.height=Math.floor(q*te),this.setViewport(0,0,P,q)},this.getCurrentViewport=function(P){return P.copy(L)},this.getViewport=function(P){return P.copy(Le)},this.setViewport=function(P,q,te,ne){P.isVector4?Le.set(P.x,P.y,P.z,P.w):Le.set(P,q,te,ne),je.viewport(L.copy(Le).multiplyScalar(me).round())},this.getScissor=function(P){return P.copy(ze)},this.setScissor=function(P,q,te,ne){P.isVector4?ze.set(P.x,P.y,P.z,P.w):ze.set(P,q,te,ne),je.scissor(G.copy(ze).multiplyScalar(me).round())},this.getScissorTest=function(){return xt},this.setScissorTest=function(P){je.setScissorTest(xt=P)},this.setOpaqueSort=function(P){ae=P},this.setTransparentSort=function(P){Ae=P},this.getClearColor=function(P){return P.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor.apply(Fe,arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha.apply(Fe,arguments)},this.clear=function(P=!0,q=!0,te=!0){let ne=0;if(P){let Y=!1;if(F!==null){const Ee=F.texture.format;Y=Ee===Ul||Ee===Nl||Ee===Il}if(Y){const Ee=F.texture.type,Ue=Ee===ki||Ee===gr||Ee===Ns||Ee===Jr||Ee===Pl||Ee===Ll,Ne=Fe.getClearColor(),He=Fe.getClearAlpha(),Je=Ne.r,$e=Ne.g,Ze=Ne.b;Ue?(v[0]=Je,v[1]=$e,v[2]=Ze,v[3]=He,H.clearBufferuiv(H.COLOR,0,v)):(M[0]=Je,M[1]=$e,M[2]=Ze,M[3]=He,H.clearBufferiv(H.COLOR,0,M))}else ne|=H.COLOR_BUFFER_BIT}q&&(ne|=H.DEPTH_BUFFER_BIT),te&&(ne|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",oe,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),be.dispose(),Ce.dispose(),it.dispose(),O.dispose(),w.dispose(),ye.dispose(),ct.dispose(),kt.dispose(),ge.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",Jt),Z.removeEventListener("sessionend",$n),Xt.stop()};function J(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function oe(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const P=Wt.autoReset,q=Te.enabled,te=Te.autoUpdate,ne=Te.needsUpdate,Y=Te.type;T(),Wt.autoReset=P,Te.enabled=q,Te.autoUpdate=te,Te.needsUpdate=ne,Te.type=Y}function xe(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Ge(P){const q=P.target;q.removeEventListener("dispose",Ge),st(q)}function st(P){Yt(P),it.remove(P)}function Yt(P){const q=it.get(P).programs;q!==void 0&&(q.forEach(function(te){ge.releaseProgram(te)}),P.isShaderMaterial&&ge.releaseShaderCache(P))}this.renderBufferDirect=function(P,q,te,ne,Y,Ee){q===null&&(q=pt);const Ue=Y.isMesh&&Y.matrixWorld.determinant()<0,Ne=Ws(P,q,te,ne,Y);je.setMaterial(ne,Ue);let He=te.index,Je=1;if(ne.wireframe===!0){if(He=ve.getWireframeAttribute(te),He===void 0)return;Je=2}const $e=te.drawRange,Ze=te.attributes.position;let Pt=$e.start*Je,jt=($e.start+$e.count)*Je;Ee!==null&&(Pt=Math.max(Pt,Ee.start*Je),jt=Math.min(jt,(Ee.start+Ee.count)*Je)),He!==null?(Pt=Math.max(Pt,0),jt=Math.min(jt,He.count)):Ze!=null&&(Pt=Math.max(Pt,0),jt=Math.min(jt,Ze.count));const Vt=jt-Pt;if(Vt<0||Vt===1/0)return;ct.setup(Y,ne,Ne,te,He);let _n,Tt=We;if(He!==null&&(_n=ee.get(He),Tt=Re,Tt.setIndex(_n)),Y.isMesh)ne.wireframe===!0?(je.setLineWidth(ne.wireframeLinewidth*Lt()),Tt.setMode(H.LINES)):Tt.setMode(H.TRIANGLES);else if(Y.isLine){let qe=ne.linewidth;qe===void 0&&(qe=1),je.setLineWidth(qe*Lt()),Y.isLineSegments?Tt.setMode(H.LINES):Y.isLineLoop?Tt.setMode(H.LINE_LOOP):Tt.setMode(H.LINE_STRIP)}else Y.isPoints?Tt.setMode(H.POINTS):Y.isSprite&&Tt.setMode(H.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)Tt.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(lt.get("WEBGL_multi_draw"))Tt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const qe=Y._multiDrawStarts,It=Y._multiDrawCounts,wt=Y._multiDrawCount,pn=He?ee.get(He).bytesPerElement:1,zi=it.get(ne).currentProgram.getUniforms();for(let Mn=0;Mn<wt;Mn++)zi.setValue(H,"_gl_DrawID",Mn),Tt.render(qe[Mn]/pn,It[Mn])}else if(Y.isInstancedMesh)Tt.renderInstances(Pt,Vt,Y.count);else if(te.isInstancedBufferGeometry){const qe=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,It=Math.min(te.instanceCount,qe);Tt.renderInstances(Pt,Vt,It)}else Tt.render(Pt,Vt)};function Qt(P,q,te){P.transparent===!0&&P.side===gi&&P.forceSinglePass===!1?(P.side=Nn,P.needsUpdate=!0,fi(P,q,te),P.side=Bi,P.needsUpdate=!0,fi(P,q,te),P.side=gi):fi(P,q,te)}this.compile=function(P,q,te=null){te===null&&(te=P),x=Ce.get(te),x.init(q),N.push(x),te.traverseVisible(function(Y){Y.isLight&&Y.layers.test(q.layers)&&(x.pushLight(Y),Y.castShadow&&x.pushShadow(Y))}),P!==te&&P.traverseVisible(function(Y){Y.isLight&&Y.layers.test(q.layers)&&(x.pushLight(Y),Y.castShadow&&x.pushShadow(Y))}),x.setupLights();const ne=new Set;return P.traverse(function(Y){const Ee=Y.material;if(Ee)if(Array.isArray(Ee))for(let Ue=0;Ue<Ee.length;Ue++){const Ne=Ee[Ue];Qt(Ne,te,Y),ne.add(Ne)}else Qt(Ee,te,Y),ne.add(Ee)}),N.pop(),x=null,ne},this.compileAsync=function(P,q,te=null){const ne=this.compile(P,q,te);return new Promise(Y=>{function Ee(){if(ne.forEach(function(Ue){it.get(Ue).currentProgram.isReady()&&ne.delete(Ue)}),ne.size===0){Y(P);return}setTimeout(Ee,10)}lt.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let St=null;function en(P){St&&St(P)}function Jt(){Xt.stop()}function $n(){Xt.start()}const Xt=new vh;Xt.setAnimationLoop(en),typeof self<"u"&&Xt.setContext(self),this.setAnimationLoop=function(P){St=P,Z.setAnimationLoop(P),P===null?Xt.stop():Xt.start()},Z.addEventListener("sessionstart",Jt),Z.addEventListener("sessionend",$n),this.render=function(P,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(q),q=Z.getCamera()),P.isScene===!0&&P.onBeforeRender(D,P,q,F),x=Ce.get(P,N.length),x.init(q),N.push(x),De.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),bt.setFromProjectionMatrix(De),Se=this.localClippingEnabled,ue=rt.init(this.clippingPlanes,Se),E=be.get(P,y.length),E.init(),y.push(E),Z.enabled===!0&&Z.isPresenting===!0){const Ee=D.xr.getDepthSensingMesh();Ee!==null&&Wn(Ee,q,-1/0,D.sortObjects)}Wn(P,q,0,D.sortObjects),E.finish(),D.sortObjects===!0&&E.sort(ae,Ae),Qe=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,Qe&&Fe.addToRenderList(E,P),this.info.render.frame++,ue===!0&&rt.beginShadows();const te=x.state.shadowsArray;Te.render(te,P,q),ue===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ne=E.opaque,Y=E.transmissive;if(x.setupLights(),q.isArrayCamera){const Ee=q.cameras;if(Y.length>0)for(let Ue=0,Ne=Ee.length;Ue<Ne;Ue++){const He=Ee[Ue];hi(ne,Y,P,He)}Qe&&Fe.render(P);for(let Ue=0,Ne=Ee.length;Ue<Ne;Ue++){const He=Ee[Ue];Zn(E,P,He,He.viewport)}}else Y.length>0&&hi(ne,Y,P,q),Qe&&Fe.render(P),Zn(E,P,q);F!==null&&(et.updateMultisampleRenderTarget(F),et.updateRenderTargetMipmap(F)),P.isScene===!0&&P.onAfterRender(D,P,q),ct.resetDefaultState(),$=-1,I=null,N.pop(),N.length>0?(x=N[N.length-1],ue===!0&&rt.setGlobalState(D.clippingPlanes,x.state.camera)):x=null,y.pop(),y.length>0?E=y[y.length-1]:E=null};function Wn(P,q,te,ne){if(P.visible===!1)return;if(P.layers.test(q.layers)){if(P.isGroup)te=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(q);else if(P.isLight)x.pushLight(P),P.castShadow&&x.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||bt.intersectsSprite(P)){ne&&ht.setFromMatrixPosition(P.matrixWorld).applyMatrix4(De);const Ue=ye.update(P),Ne=P.material;Ne.visible&&E.push(P,Ue,Ne,te,ht.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||bt.intersectsObject(P))){const Ue=ye.update(P),Ne=P.material;if(ne&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),ht.copy(P.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),ht.copy(Ue.boundingSphere.center)),ht.applyMatrix4(P.matrixWorld).applyMatrix4(De)),Array.isArray(Ne)){const He=Ue.groups;for(let Je=0,$e=He.length;Je<$e;Je++){const Ze=He[Je],Pt=Ne[Ze.materialIndex];Pt&&Pt.visible&&E.push(P,Ue,Pt,te,ht.z,Ze)}}else Ne.visible&&E.push(P,Ue,Ne,te,ht.z,null)}}const Ee=P.children;for(let Ue=0,Ne=Ee.length;Ue<Ne;Ue++)Wn(Ee[Ue],q,te,ne)}function Zn(P,q,te,ne){const Y=P.opaque,Ee=P.transmissive,Ue=P.transparent;x.setupLightsView(te),ue===!0&&rt.setGlobalState(D.clippingPlanes,te),ne&&je.viewport(L.copy(ne)),Y.length>0&&tr(Y,q,te),Ee.length>0&&tr(Ee,q,te),Ue.length>0&&tr(Ue,q,te),je.buffers.depth.setTest(!0),je.buffers.depth.setMask(!0),je.buffers.color.setMask(!0),je.setPolygonOffset(!1)}function hi(P,q,te,ne){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[ne.id]===void 0&&(x.state.transmissionRenderTarget[ne.id]=new li(1,1,{generateMipmaps:!0,type:lt.has("EXT_color_buffer_half_float")||lt.has("EXT_color_buffer_float")?Fi:ki,minFilter:Ni,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ct.workingColorSpace}));const Ee=x.state.transmissionRenderTarget[ne.id],Ue=ne.viewport||L;Ee.setSize(Ue.z,Ue.w);const Ne=D.getRenderTarget();D.setRenderTarget(Ee),D.getClearColor(se),fe=D.getClearAlpha(),fe<1&&D.setClearColor(16777215,.5),D.clear(),Qe&&Fe.render(te);const He=D.toneMapping;D.toneMapping=er;const Je=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),x.setupLightsView(ne),ue===!0&&rt.setGlobalState(D.clippingPlanes,ne),tr(P,te,ne),et.updateMultisampleRenderTarget(Ee),et.updateRenderTargetMipmap(Ee),lt.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let Ze=0,Pt=q.length;Ze<Pt;Ze++){const jt=q[Ze],Vt=jt.object,_n=jt.geometry,Tt=jt.material,qe=jt.group;if(Tt.side===gi&&Vt.layers.test(ne.layers)){const It=Tt.side;Tt.side=Nn,Tt.needsUpdate=!0,Gs(Vt,te,ne,_n,Tt,qe),Tt.side=It,Tt.needsUpdate=!0,$e=!0}}$e===!0&&(et.updateMultisampleRenderTarget(Ee),et.updateRenderTargetMipmap(Ee))}D.setRenderTarget(Ne),D.setClearColor(se,fe),Je!==void 0&&(ne.viewport=Je),D.toneMapping=He}function tr(P,q,te){const ne=q.isScene===!0?q.overrideMaterial:null;for(let Y=0,Ee=P.length;Y<Ee;Y++){const Ue=P[Y],Ne=Ue.object,He=Ue.geometry,Je=ne===null?Ue.material:ne,$e=Ue.group;Ne.layers.test(te.layers)&&Gs(Ne,q,te,He,Je,$e)}}function Gs(P,q,te,ne,Y,Ee){P.onBeforeRender(D,q,te,ne,Y,Ee),P.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),Y.transparent===!0&&Y.side===gi&&Y.forceSinglePass===!1?(Y.side=Nn,Y.needsUpdate=!0,D.renderBufferDirect(te,q,ne,Y,P,Ee),Y.side=Bi,Y.needsUpdate=!0,D.renderBufferDirect(te,q,ne,Y,P,Ee),Y.side=gi):D.renderBufferDirect(te,q,ne,Y,P,Ee),P.onAfterRender(D,q,te,ne,Y,Ee)}function fi(P,q,te){q.isScene!==!0&&(q=pt);const ne=it.get(P),Y=x.state.lights,Ee=x.state.shadowsArray,Ue=Y.state.version,Ne=ge.getParameters(P,Y.state,Ee,q,te),He=ge.getProgramCacheKey(Ne);let Je=ne.programs;ne.environment=P.isMeshStandardMaterial?q.environment:null,ne.fog=q.fog,ne.envMap=(P.isMeshStandardMaterial?w:O).get(P.envMap||ne.environment),ne.envMapRotation=ne.environment!==null&&P.envMap===null?q.environmentRotation:P.envMapRotation,Je===void 0&&(P.addEventListener("dispose",Ge),Je=new Map,ne.programs=Je);let $e=Je.get(He);if($e!==void 0){if(ne.currentProgram===$e&&ne.lightsStateVersion===Ue)return fs(P,Ne),$e}else Ne.uniforms=ge.getUniforms(P),P.onBeforeCompile(Ne,D),$e=ge.acquireProgram(Ne,He),Je.set(He,$e),ne.uniforms=Ne.uniforms;const Ze=ne.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Ze.clippingPlanes=rt.uniform),fs(P,Ne),ne.needsLights=ds(P),ne.lightsStateVersion=Ue,ne.needsLights&&(Ze.ambientLightColor.value=Y.state.ambient,Ze.lightProbe.value=Y.state.probe,Ze.directionalLights.value=Y.state.directional,Ze.directionalLightShadows.value=Y.state.directionalShadow,Ze.spotLights.value=Y.state.spot,Ze.spotLightShadows.value=Y.state.spotShadow,Ze.rectAreaLights.value=Y.state.rectArea,Ze.ltc_1.value=Y.state.rectAreaLTC1,Ze.ltc_2.value=Y.state.rectAreaLTC2,Ze.pointLights.value=Y.state.point,Ze.pointLightShadows.value=Y.state.pointShadow,Ze.hemisphereLights.value=Y.state.hemi,Ze.directionalShadowMap.value=Y.state.directionalShadowMap,Ze.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ze.spotShadowMap.value=Y.state.spotShadowMap,Ze.spotLightMatrix.value=Y.state.spotLightMatrix,Ze.spotLightMap.value=Y.state.spotLightMap,Ze.pointShadowMap.value=Y.state.pointShadowMap,Ze.pointShadowMatrix.value=Y.state.pointShadowMatrix),ne.currentProgram=$e,ne.uniformsList=null,$e}function hs(P){if(P.uniformsList===null){const q=P.currentProgram.getUniforms();P.uniformsList=Oo.seqWithValue(q.seq,P.uniforms)}return P.uniformsList}function fs(P,q){const te=it.get(P);te.outputColorSpace=q.outputColorSpace,te.batching=q.batching,te.batchingColor=q.batchingColor,te.instancing=q.instancing,te.instancingColor=q.instancingColor,te.instancingMorph=q.instancingMorph,te.skinning=q.skinning,te.morphTargets=q.morphTargets,te.morphNormals=q.morphNormals,te.morphColors=q.morphColors,te.morphTargetsCount=q.morphTargetsCount,te.numClippingPlanes=q.numClippingPlanes,te.numIntersection=q.numClipIntersection,te.vertexAlphas=q.vertexAlphas,te.vertexTangents=q.vertexTangents,te.toneMapping=q.toneMapping}function Ws(P,q,te,ne,Y){q.isScene!==!0&&(q=pt),et.resetTextureUnits();const Ee=q.fog,Ue=ne.isMeshStandardMaterial?q.environment:null,Ne=F===null?D.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:gn,He=(ne.isMeshStandardMaterial?w:O).get(ne.envMap||Ue),Je=ne.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,$e=!!te.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),Ze=!!te.morphAttributes.position,Pt=!!te.morphAttributes.normal,jt=!!te.morphAttributes.color;let Vt=er;ne.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Vt=D.toneMapping);const _n=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,Tt=_n!==void 0?_n.length:0,qe=it.get(ne),It=x.state.lights;if(ue===!0&&(Se===!0||P!==I)){const Sn=P===I&&ne.id===$;rt.setState(ne,P,Sn)}let wt=!1;ne.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==It.state.version||qe.outputColorSpace!==Ne||Y.isBatchedMesh&&qe.batching===!1||!Y.isBatchedMesh&&qe.batching===!0||Y.isBatchedMesh&&qe.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&qe.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&qe.instancing===!1||!Y.isInstancedMesh&&qe.instancing===!0||Y.isSkinnedMesh&&qe.skinning===!1||!Y.isSkinnedMesh&&qe.skinning===!0||Y.isInstancedMesh&&qe.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&qe.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&qe.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&qe.instancingMorph===!1&&Y.morphTexture!==null||qe.envMap!==He||ne.fog===!0&&qe.fog!==Ee||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==rt.numPlanes||qe.numIntersection!==rt.numIntersection)||qe.vertexAlphas!==Je||qe.vertexTangents!==$e||qe.morphTargets!==Ze||qe.morphNormals!==Pt||qe.morphColors!==jt||qe.toneMapping!==Vt||qe.morphTargetsCount!==Tt)&&(wt=!0):(wt=!0,qe.__version=ne.version);let pn=qe.currentProgram;wt===!0&&(pn=fi(ne,q,Y));let zi=!1,Mn=!1,Jn=!1;const Ot=pn.getUniforms(),Xn=qe.uniforms;if(je.useProgram(pn.program)&&(zi=!0,Mn=!0,Jn=!0),ne.id!==$&&($=ne.id,Mn=!0),zi||I!==P){Ot.setValue(H,"projectionMatrix",P.projectionMatrix),Ot.setValue(H,"viewMatrix",P.matrixWorldInverse);const Sn=Ot.map.cameraPosition;Sn!==void 0&&Sn.setValue(H,ke.setFromMatrixPosition(P.matrixWorld)),At.logarithmicDepthBuffer&&Ot.setValue(H,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Ot.setValue(H,"isOrthographic",P.isOrthographicCamera===!0),I!==P&&(I=P,Mn=!0,Jn=!0)}if(Y.isSkinnedMesh){Ot.setOptional(H,Y,"bindMatrix"),Ot.setOptional(H,Y,"bindMatrixInverse");const Sn=Y.skeleton;Sn&&(Sn.boneTexture===null&&Sn.computeBoneTexture(),Ot.setValue(H,"boneTexture",Sn.boneTexture,et))}Y.isBatchedMesh&&(Ot.setOptional(H,Y,"batchingTexture"),Ot.setValue(H,"batchingTexture",Y._matricesTexture,et),Ot.setOptional(H,Y,"batchingIdTexture"),Ot.setValue(H,"batchingIdTexture",Y._indirectTexture,et),Ot.setOptional(H,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Ot.setValue(H,"batchingColorTexture",Y._colorsTexture,et));const ps=te.morphAttributes;if((ps.position!==void 0||ps.normal!==void 0||ps.color!==void 0)&&yt.update(Y,te,pn),(Mn||qe.receiveShadow!==Y.receiveShadow)&&(qe.receiveShadow=Y.receiveShadow,Ot.setValue(H,"receiveShadow",Y.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(Xn.envMap.value=He,Xn.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),ne.isMeshStandardMaterial&&ne.envMap===null&&q.environment!==null&&(Xn.envMapIntensity.value=q.environmentIntensity),Mn&&(Ot.setValue(H,"toneMappingExposure",D.toneMappingExposure),qe.needsLights&&Xs(Xn,Jn),Ee&&ne.fog===!0&&Ke.refreshFogUniforms(Xn,Ee),Ke.refreshMaterialUniforms(Xn,ne,me,ce,x.state.transmissionRenderTarget[P.id]),Oo.upload(H,hs(qe),Xn,et)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Oo.upload(H,hs(qe),Xn,et),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Ot.setValue(H,"center",Y.center),Ot.setValue(H,"modelViewMatrix",Y.modelViewMatrix),Ot.setValue(H,"normalMatrix",Y.normalMatrix),Ot.setValue(H,"modelMatrix",Y.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const Sn=ne.uniformsGroups;for(let vr=0,nr=Sn.length;vr<nr;vr++){const ms=Sn[vr];kt.update(ms,pn),kt.bind(ms,pn)}}return pn}function Xs(P,q){P.ambientLightColor.needsUpdate=q,P.lightProbe.needsUpdate=q,P.directionalLights.needsUpdate=q,P.directionalLightShadows.needsUpdate=q,P.pointLights.needsUpdate=q,P.pointLightShadows.needsUpdate=q,P.spotLights.needsUpdate=q,P.spotLightShadows.needsUpdate=q,P.rectAreaLights.needsUpdate=q,P.hemisphereLights.needsUpdate=q}function ds(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return f},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(P,q,te){it.get(P.texture).__webglTexture=q,it.get(P.depthTexture).__webglTexture=te;const ne=it.get(P);ne.__hasExternalTextures=!0,ne.__autoAllocateDepthBuffer=te===void 0,ne.__autoAllocateDepthBuffer||lt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ne.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,q){const te=it.get(P);te.__webglFramebuffer=q,te.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(P,q=0,te=0){F=P,f=q,V=te;let ne=!0,Y=null,Ee=!1,Ue=!1;if(P){const He=it.get(P);He.__useDefaultFramebuffer!==void 0?(je.bindFramebuffer(H.FRAMEBUFFER,null),ne=!1):He.__webglFramebuffer===void 0?et.setupRenderTarget(P):He.__hasExternalTextures&&et.rebindTextures(P,it.get(P.texture).__webglTexture,it.get(P.depthTexture).__webglTexture);const Je=P.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(Ue=!0);const $e=it.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray($e[q])?Y=$e[q][te]:Y=$e[q],Ee=!0):P.samples>0&&et.useMultisampledRTT(P)===!1?Y=it.get(P).__webglMultisampledFramebuffer:Array.isArray($e)?Y=$e[te]:Y=$e,L.copy(P.viewport),G.copy(P.scissor),le=P.scissorTest}else L.copy(Le).multiplyScalar(me).floor(),G.copy(ze).multiplyScalar(me).floor(),le=xt;if(je.bindFramebuffer(H.FRAMEBUFFER,Y)&&ne&&je.drawBuffers(P,Y),je.viewport(L),je.scissor(G),je.setScissorTest(le),Ee){const He=it.get(P.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+q,He.__webglTexture,te)}else if(Ue){const He=it.get(P.texture),Je=q||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,He.__webglTexture,te||0,Je)}$=-1},this.readRenderTargetPixels=function(P,q,te,ne,Y,Ee,Ue){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=it.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ue!==void 0&&(Ne=Ne[Ue]),Ne){je.bindFramebuffer(H.FRAMEBUFFER,Ne);try{const He=P.texture,Je=He.format,$e=He.type;if(!At.textureFormatReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!At.textureTypeReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=P.width-ne&&te>=0&&te<=P.height-Y&&H.readPixels(q,te,ne,Y,tt.convert(Je),tt.convert($e),Ee)}finally{const He=F!==null?it.get(F).__webglFramebuffer:null;je.bindFramebuffer(H.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(P,q,te,ne,Y,Ee,Ue){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=it.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ue!==void 0&&(Ne=Ne[Ue]),Ne){je.bindFramebuffer(H.FRAMEBUFFER,Ne);try{const He=P.texture,Je=He.format,$e=He.type;if(!At.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!At.textureTypeReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(q>=0&&q<=P.width-ne&&te>=0&&te<=P.height-Y){const Ze=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Ze),H.bufferData(H.PIXEL_PACK_BUFFER,Ee.byteLength,H.STREAM_READ),H.readPixels(q,te,ne,Y,tt.convert(Je),tt.convert($e),0),H.flush();const Pt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);await _d(H,Pt,4);try{H.bindBuffer(H.PIXEL_PACK_BUFFER,Ze),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Ee)}finally{H.deleteBuffer(Ze),H.deleteSync(Pt)}return Ee}}finally{const He=F!==null?it.get(F).__webglFramebuffer:null;je.bindFramebuffer(H.FRAMEBUFFER,He)}}},this.copyFramebufferToTexture=function(P,q=null,te=0){P.isTexture!==!0&&(Xr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),q=arguments[0]||null,P=arguments[1]);const ne=Math.pow(2,-te),Y=Math.floor(P.image.width*ne),Ee=Math.floor(P.image.height*ne),Ue=q!==null?q.x:0,Ne=q!==null?q.y:0;et.setTexture2D(P,0),H.copyTexSubImage2D(H.TEXTURE_2D,te,0,0,Ue,Ne,Y,Ee),je.unbindTexture()},this.copyTextureToTexture=function(P,q,te=null,ne=null,Y=0){P.isTexture!==!0&&(Xr("WebGLRenderer: copyTextureToTexture function signature has changed."),ne=arguments[0]||null,P=arguments[1],q=arguments[2],Y=arguments[3]||0,te=null);let Ee,Ue,Ne,He,Je,$e;te!==null?(Ee=te.max.x-te.min.x,Ue=te.max.y-te.min.y,Ne=te.min.x,He=te.min.y):(Ee=P.image.width,Ue=P.image.height,Ne=0,He=0),ne!==null?(Je=ne.x,$e=ne.y):(Je=0,$e=0);const Ze=tt.convert(q.format),Pt=tt.convert(q.type);et.setTexture2D(q,0),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,q.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,q.unpackAlignment);const jt=H.getParameter(H.UNPACK_ROW_LENGTH),Vt=H.getParameter(H.UNPACK_IMAGE_HEIGHT),_n=H.getParameter(H.UNPACK_SKIP_PIXELS),Tt=H.getParameter(H.UNPACK_SKIP_ROWS),qe=H.getParameter(H.UNPACK_SKIP_IMAGES),It=P.isCompressedTexture?P.mipmaps[Y]:P.image;H.pixelStorei(H.UNPACK_ROW_LENGTH,It.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,It.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Ne),H.pixelStorei(H.UNPACK_SKIP_ROWS,He),P.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Y,Je,$e,Ee,Ue,Ze,Pt,It.data):P.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Y,Je,$e,It.width,It.height,Ze,It.data):H.texSubImage2D(H.TEXTURE_2D,Y,Je,$e,Ee,Ue,Ze,Pt,It),H.pixelStorei(H.UNPACK_ROW_LENGTH,jt),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Vt),H.pixelStorei(H.UNPACK_SKIP_PIXELS,_n),H.pixelStorei(H.UNPACK_SKIP_ROWS,Tt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,qe),Y===0&&q.generateMipmaps&&H.generateMipmap(H.TEXTURE_2D),je.unbindTexture()},this.copyTextureToTexture3D=function(P,q,te=null,ne=null,Y=0){P.isTexture!==!0&&(Xr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),te=arguments[0]||null,ne=arguments[1]||null,P=arguments[2],q=arguments[3],Y=arguments[4]||0);let Ee,Ue,Ne,He,Je,$e,Ze,Pt,jt;const Vt=P.isCompressedTexture?P.mipmaps[Y]:P.image;te!==null?(Ee=te.max.x-te.min.x,Ue=te.max.y-te.min.y,Ne=te.max.z-te.min.z,He=te.min.x,Je=te.min.y,$e=te.min.z):(Ee=Vt.width,Ue=Vt.height,Ne=Vt.depth,He=0,Je=0,$e=0),ne!==null?(Ze=ne.x,Pt=ne.y,jt=ne.z):(Ze=0,Pt=0,jt=0);const _n=tt.convert(q.format),Tt=tt.convert(q.type);let qe;if(q.isData3DTexture)et.setTexture3D(q,0),qe=H.TEXTURE_3D;else if(q.isDataArrayTexture||q.isCompressedArrayTexture)et.setTexture2DArray(q,0),qe=H.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,q.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,q.unpackAlignment);const It=H.getParameter(H.UNPACK_ROW_LENGTH),wt=H.getParameter(H.UNPACK_IMAGE_HEIGHT),pn=H.getParameter(H.UNPACK_SKIP_PIXELS),zi=H.getParameter(H.UNPACK_SKIP_ROWS),Mn=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Vt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Vt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,He),H.pixelStorei(H.UNPACK_SKIP_ROWS,Je),H.pixelStorei(H.UNPACK_SKIP_IMAGES,$e),P.isDataTexture||P.isData3DTexture?H.texSubImage3D(qe,Y,Ze,Pt,jt,Ee,Ue,Ne,_n,Tt,Vt.data):q.isCompressedArrayTexture?H.compressedTexSubImage3D(qe,Y,Ze,Pt,jt,Ee,Ue,Ne,_n,Vt.data):H.texSubImage3D(qe,Y,Ze,Pt,jt,Ee,Ue,Ne,_n,Tt,Vt),H.pixelStorei(H.UNPACK_ROW_LENGTH,It),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,wt),H.pixelStorei(H.UNPACK_SKIP_PIXELS,pn),H.pixelStorei(H.UNPACK_SKIP_ROWS,zi),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Mn),Y===0&&q.generateMipmaps&&H.generateMipmap(qe),je.unbindTexture()},this.initRenderTarget=function(P){it.get(P).__webglFramebuffer===void 0&&et.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?et.setTextureCube(P,0):P.isData3DTexture?et.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?et.setTexture2DArray(P,0):et.setTexture2D(P,0),je.unbindTexture()},this.resetState=function(){f=0,V=0,F=null,je.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Ol?"display-p3":"srgb",t.unpackColorSpace=Ct.workingColorSpace===jo?"display-p3":"srgb"}}class Av extends qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yi,this.environmentIntensity=1,this.environmentRotation=new yi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class wv{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Sl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=ai()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Xr("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const En=new W;class Hl{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)En.fromBufferAttribute(this,t),En.applyMatrix4(e),this.setXYZ(t,En.x,En.y,En.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)En.fromBufferAttribute(this,t),En.applyNormalMatrix(e),this.setXYZ(t,En.x,En.y,En.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)En.fromBufferAttribute(this,t),En.transformDirection(e),this.setXYZ(t,En.x,En.y,En.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=si(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Nt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=si(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=si(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=si(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=si(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array),i=Nt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array),i=Nt(i,this.array),s=Nt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Pn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Hl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const cu=new W,uu=new Bt,hu=new Bt,Rv=new W,fu=new vt,So=new W,Na=new Mi,du=new vt,Ua=new ks;class Cv extends In{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=dc,this.bindMatrix=new vt,this.bindMatrixInverse=new vt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Hi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,So),this.boundingBox.expandByPoint(So)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Mi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,So),this.boundingSphere.expandByPoint(So)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Na.copy(this.boundingSphere),Na.applyMatrix4(i),e.ray.intersectsSphere(Na)!==!1&&(du.copy(i).invert(),Ua.copy(e.ray).applyMatrix4(du),!(this.boundingBox!==null&&Ua.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ua)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Bt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===dc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===zf?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;uu.fromBufferAttribute(i.attributes.skinIndex,e),hu.fromBufferAttribute(i.attributes.skinWeight,e),cu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=hu.getComponent(s);if(a!==0){const l=uu.getComponent(s);fu.multiplyMatrices(n.bones[l].matrixWorld,n.boneInverses[l]),t.addScaledVector(Rv.copy(cu).applyMatrix4(fu),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Eh extends qt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class bh extends dn{constructor(e=null,t=1,n=1,i,s,a,l,c,u=Rn,d=Rn,p,g){super(null,a,l,c,u,d,i,s,p,g),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const pu=new vt,Pv=new vt;class zl{constructor(e=[],t=[]){this.uuid=ai(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new vt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new vt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const l=e[s]?e[s].matrixWorld:Pv;pu.multiplyMatrices(l,t[s]),pu.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new zl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new bh(t,e,e,Kn,oi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new Eh),this.bones.push(a),this.boneInverses.push(new vt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const a=t[i];e.bones.push(a.uuid);const l=n[i];e.boneInverses.push(l.toArray())}return e}}class El extends Pn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const zr=new vt,mu=new vt,To=[],gu=new Hi,Lv=new vt,Es=new In,bs=new Mi;class Dv extends In{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new El(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Lv)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Hi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,zr),gu.copy(e.boundingBox).applyMatrix4(zr),this.boundingBox.union(gu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Mi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,zr),bs.copy(e.boundingSphere).applyMatrix4(zr),this.boundingSphere.union(bs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let l=0;l<n.length;l++)n[l]=i[a+l]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Es.geometry=this.geometry,Es.material=this.material,Es.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),bs.copy(this.boundingSphere),bs.applyMatrix4(n),e.ray.intersectsSphere(bs)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,zr),mu.multiplyMatrices(n,zr),Es.matrixWorld=mu,Es.raycast(e,To);for(let a=0,l=To.length;a<l;a++){const c=To[a];c.instanceId=s,c.object=this,t.push(c)}To.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new El(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new bh(new Float32Array(i*this.count),i,this.count,Dl,oi));const s=this.morphTexture.source.data.data;let a=0;for(let u=0;u<n.length;u++)a+=n[u];const l=this.geometry.morphTargetsRelative?1:1-a,c=i*e;s[c]=l,s.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Ah extends vi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new at(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Go=new W,Wo=new W,_u=new vt,As=new ks,Eo=new Mi,Oa=new W,vu=new W;class Vl extends qt{constructor(e=new ui,t=new Ah){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Go.fromBufferAttribute(t,i-1),Wo.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Go.distanceTo(Wo);e.setAttribute("lineDistance",new ci(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Eo.copy(n.boundingSphere),Eo.applyMatrix4(i),Eo.radius+=s,e.ray.intersectsSphere(Eo)===!1)return;_u.copy(i).invert(),As.copy(e.ray).applyMatrix4(_u);const l=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,u=this.isLineSegments?2:1,d=n.index,g=n.attributes.position;if(d!==null){const v=Math.max(0,a.start),M=Math.min(d.count,a.start+a.count);for(let E=v,x=M-1;E<x;E+=u){const y=d.getX(E),N=d.getX(E+1),D=bo(this,e,As,c,y,N);D&&t.push(D)}if(this.isLineLoop){const E=d.getX(M-1),x=d.getX(v),y=bo(this,e,As,c,E,x);y&&t.push(y)}}else{const v=Math.max(0,a.start),M=Math.min(g.count,a.start+a.count);for(let E=v,x=M-1;E<x;E+=u){const y=bo(this,e,As,c,E,E+1);y&&t.push(y)}if(this.isLineLoop){const E=bo(this,e,As,c,M-1,v);E&&t.push(E)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const l=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}}function bo(r,e,t,n,i,s){const a=r.geometry.attributes.position;if(Go.fromBufferAttribute(a,i),Wo.fromBufferAttribute(a,s),t.distanceSqToSegment(Go,Wo,Oa,vu)>n)return;Oa.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Oa);if(!(c<e.near||c>e.far))return{distance:c,point:vu.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,object:r}}const xu=new W,yu=new W;class Iv extends Vl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)xu.fromBufferAttribute(t,i),yu.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+xu.distanceTo(yu);e.setAttribute("lineDistance",new ci(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Nv extends Vl{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class wh extends vi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new at(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Mu=new vt,bl=new ks,Ao=new Mi,wo=new W;class Uv extends qt{constructor(e=new ui,t=new wh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ao.copy(n.boundingSphere),Ao.applyMatrix4(i),Ao.radius+=s,e.ray.intersectsSphere(Ao)===!1)return;Mu.copy(i).invert(),bl.copy(e.ray).applyMatrix4(Mu);const l=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,u=n.index,p=n.attributes.position;if(u!==null){const g=Math.max(0,a.start),v=Math.min(u.count,a.start+a.count);for(let M=g,E=v;M<E;M++){const x=u.getX(M);wo.fromBufferAttribute(p,x),Su(wo,x,c,i,e,t,this)}}else{const g=Math.max(0,a.start),v=Math.min(p.count,a.start+a.count);for(let M=g,E=v;M<E;M++)wo.fromBufferAttribute(p,M),Su(wo,M,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const l=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}}function Su(r,e,t,n,i,s,a){const l=bl.distanceSqToPoint(r);if(l<t){const c=new W;bl.closestPointToPoint(r,c),c.applyMatrix4(n);const u=i.ray.origin.distanceTo(c);if(u<i.near||u>i.far)return;s.push({distance:u,distanceToRay:Math.sqrt(l),point:c,index:e,face:null,object:a})}}class Ov extends Cn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Gl extends vi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new at(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new at(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sh,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Si extends Gl{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Xe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return mn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new at(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new at(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new at(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Ro(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Fv(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Bv(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Tu(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){const l=t[s]*e;for(let c=0;c!==e;++c)i[a++]=r[l+c]}return i}function Rh(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}class zs{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let l=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===l)break;if(s=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=s)){const l=t[1];e<l&&(n=2,s=l);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){const l=n+a>>>1;e<t[l]?a=l:n=l+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class kv extends zs{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:pc,endingEnd:pc}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,a=e+1,l=i[s],c=i[a];if(l===void 0)switch(this.getSettings_().endingStart){case mc:s=e,l=2*t-n;break;case gc:s=i.length-2,l=t+i[s]-i[s+1];break;default:s=e,l=n}if(c===void 0)switch(this.getSettings_().endingEnd){case mc:a=e,c=2*n-t;break;case gc:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}const u=(n-t)*.5,d=this.valueSize;this._weightPrev=u/(t-l),this._weightNext=u/(c-n),this._offsetPrev=s*d,this._offsetNext=a*d}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=e*l,u=c-l,d=this._offsetPrev,p=this._offsetNext,g=this._weightPrev,v=this._weightNext,M=(n-t)/(i-t),E=M*M,x=E*M,y=-g*x+2*g*E-g*M,N=(1+g)*x+(-1.5-2*g)*E+(-.5+g)*M+1,D=(-1-v)*x+(1.5+v)*E+.5*M,U=v*x-v*E;for(let f=0;f!==l;++f)s[f]=y*a[d+f]+N*a[u+f]+D*a[c+f]+U*a[p+f];return s}}class Hv extends zs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=e*l,u=c-l,d=(n-t)/(i-t),p=1-d;for(let g=0;g!==l;++g)s[g]=a[u+g]*p+a[c+g]*d;return s}}class zv extends zs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ti{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ro(t,this.TimeBufferType),this.values=Ro(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ro(e.times,Array),values:Ro(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new zv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Hv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new kv(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Us:t=this.InterpolantFactoryMethodDiscrete;break;case Os:t=this.InterpolantFactoryMethodLinear;break;case la:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Us;case this.InterpolantFactoryMethodLinear:return Os;case this.InterpolantFactoryMethodSmooth:return la}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);const l=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*l,a*l)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let l=0;l!==s;l++){const c=n[l];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,l,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,l,c,a),e=!1;break}a=c}if(i!==void 0&&Fv(i))for(let l=0,c=i.length;l!==c;++l){const u=i[l];if(isNaN(u)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,l,u),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===la,s=e.length-1;let a=1;for(let l=1;l<s;++l){let c=!1;const u=e[l],d=e[l+1];if(u!==d&&(l!==1||u!==e[0]))if(i)c=!0;else{const p=l*n,g=p-n,v=p+n;for(let M=0;M!==n;++M){const E=t[p+M];if(E!==t[g+M]||E!==t[v+M]){c=!0;break}}}if(c){if(l!==a){e[a]=e[l];const p=l*n,g=a*n;for(let v=0;v!==n;++v)t[g+v]=t[p+v]}++a}}if(s>0){e[a]=e[s];for(let l=s*n,c=a*n,u=0;u!==n;++u)t[c+u]=t[l+u];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Ti.prototype.TimeBufferType=Float32Array;Ti.prototype.ValueBufferType=Float32Array;Ti.prototype.DefaultInterpolation=Os;class as extends Ti{constructor(e,t,n){super(e,t,n)}}as.prototype.ValueTypeName="bool";as.prototype.ValueBufferType=Array;as.prototype.DefaultInterpolation=Us;as.prototype.InterpolantFactoryMethodLinear=void 0;as.prototype.InterpolantFactoryMethodSmooth=void 0;class Ch extends Ti{}Ch.prototype.ValueTypeName="color";class ns extends Ti{}ns.prototype.ValueTypeName="number";class Vv extends zs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=(n-t)/(i-t);let u=e*l;for(let d=u+l;u!==d;u+=4)xi.slerpFlat(s,0,a,u-l,a,u,c);return s}}class is extends Ti{InterpolantFactoryMethodLinear(e){return new Vv(this.times,this.values,this.getValueSize(),e)}}is.prototype.ValueTypeName="quaternion";is.prototype.InterpolantFactoryMethodSmooth=void 0;class ls extends Ti{constructor(e,t,n){super(e,t,n)}}ls.prototype.ValueTypeName="string";ls.prototype.ValueBufferType=Array;ls.prototype.DefaultInterpolation=Us;ls.prototype.InterpolantFactoryMethodLinear=void 0;ls.prototype.InterpolantFactoryMethodSmooth=void 0;class rs extends Ti{}rs.prototype.ValueTypeName="vector";class Gv{constructor(e="",t=-1,n=[],i=Vf){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=ai(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,l=n.length;a!==l;++a)t.push(Xv(n[a]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=n.length;s!==a;++s)t.push(Ti.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,a=[];for(let l=0;l<s;l++){let c=[],u=[];c.push((l+s-1)%s,l,(l+1)%s),u.push(0,1,0);const d=Bv(c);c=Tu(c,1,d),u=Tu(u,1,d),!i&&c[0]===0&&(c.push(s),u.push(u[0])),a.push(new ns(".morphTargetInfluences["+t[l].name+"]",c,u).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let l=0,c=e.length;l<c;l++){const u=e[l],d=u.name.match(s);if(d&&d.length>1){const p=d[1];let g=i[p];g||(i[p]=g=[]),g.push(u)}}const a=[];for(const l in i)a.push(this.CreateFromMorphTargetSequence(l,i[l],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(p,g,v,M,E){if(v.length!==0){const x=[],y=[];Rh(v,x,y,M),x.length!==0&&E.push(new p(g,x,y))}},i=[],s=e.name||"default",a=e.fps||30,l=e.blendMode;let c=e.length||-1;const u=e.hierarchy||[];for(let p=0;p<u.length;p++){const g=u[p].keys;if(!(!g||g.length===0))if(g[0].morphTargets){const v={};let M;for(M=0;M<g.length;M++)if(g[M].morphTargets)for(let E=0;E<g[M].morphTargets.length;E++)v[g[M].morphTargets[E]]=-1;for(const E in v){const x=[],y=[];for(let N=0;N!==g[M].morphTargets.length;++N){const D=g[M];x.push(D.time),y.push(D.morphTarget===E?1:0)}i.push(new ns(".morphTargetInfluence["+E+"]",x,y))}c=v.length*a}else{const v=".bones["+t[p].name+"]";n(rs,v+".position",g,"pos",i),n(is,v+".quaternion",g,"rot",i),n(rs,v+".scale",g,"scl",i)}}return i.length===0?null:new this(s,c,i,l)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Wv(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ns;case"vector":case"vector2":case"vector3":case"vector4":return rs;case"color":return Ch;case"quaternion":return is;case"bool":case"boolean":return as;case"string":return ls}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function Xv(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Wv(r.type);if(r.times===void 0){const t=[],n=[];Rh(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Qi={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class jv{constructor(e,t,n){const i=this;let s=!1,a=0,l=0,c;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(d){l++,s===!1&&i.onStart!==void 0&&i.onStart(d,a,l),s=!0},this.itemEnd=function(d){a++,i.onProgress!==void 0&&i.onProgress(d,a,l),a===l&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(d){i.onError!==void 0&&i.onError(d)},this.resolveURL=function(d){return c?c(d):d},this.setURLModifier=function(d){return c=d,this},this.addHandler=function(d,p){return u.push(d,p),this},this.removeHandler=function(d){const p=u.indexOf(d);return p!==-1&&u.splice(p,2),this},this.getHandler=function(d){for(let p=0,g=u.length;p<g;p+=2){const v=u[p],M=u[p+1];if(v.global&&(v.lastIndex=0),v.test(d))return M}return null}}}const qv=new jv;class cs{constructor(e){this.manager=e!==void 0?e:qv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}cs.DEFAULT_MATERIAL_NAME="__DEFAULT";const Li={};class Yv extends Error{constructor(e,t){super(e),this.response=t}}class Ph extends cs{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Qi.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Li[e]!==void 0){Li[e].push({onLoad:t,onProgress:n,onError:i});return}Li[e]=[],Li[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),l=this.mimeType,c=this.responseType;fetch(a).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||u.body===void 0||u.body.getReader===void 0)return u;const d=Li[e],p=u.body.getReader(),g=u.headers.get("X-File-Size")||u.headers.get("Content-Length"),v=g?parseInt(g):0,M=v!==0;let E=0;const x=new ReadableStream({start(y){N();function N(){p.read().then(({done:D,value:U})=>{if(D)y.close();else{E+=U.byteLength;const f=new ProgressEvent("progress",{lengthComputable:M,loaded:E,total:v});for(let V=0,F=d.length;V<F;V++){const $=d[V];$.onProgress&&$.onProgress(f)}y.enqueue(U),N()}},D=>{y.error(D)})}}});return new Response(x)}else throw new Yv(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(c){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(d=>new DOMParser().parseFromString(d,l));case"json":return u.json();default:if(l===void 0)return u.text();{const p=/charset="?([^;"\s]*)"?/i.exec(l),g=p&&p[1]?p[1].toLowerCase():void 0,v=new TextDecoder(g);return u.arrayBuffer().then(M=>v.decode(M))}}}).then(u=>{Qi.add(e,u);const d=Li[e];delete Li[e];for(let p=0,g=d.length;p<g;p++){const v=d[p];v.onLoad&&v.onLoad(u)}}).catch(u=>{const d=Li[e];if(d===void 0)throw this.manager.itemError(e),u;delete Li[e];for(let p=0,g=d.length;p<g;p++){const v=d[p];v.onError&&v.onError(u)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Kv extends cs{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Qi.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const l=Fs("img");function c(){d(),Qi.add(e,this),t&&t(this),s.manager.itemEnd(e)}function u(p){d(),i&&i(p),s.manager.itemError(e),s.manager.itemEnd(e)}function d(){l.removeEventListener("load",c,!1),l.removeEventListener("error",u,!1)}return l.addEventListener("load",c,!1),l.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),s.manager.itemStart(e),l.src=e,l}}class $v extends cs{constructor(e){super(e)}load(e,t,n,i){const s=new dn,a=new Kv(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(l){s.image=l,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Vs extends qt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new at(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Zv extends Vs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new at(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Fa=new vt,Eu=new W,bu=new W;class Wl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.map=null,this.mapPass=null,this.matrix=new vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bl,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new Bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Eu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Eu),bu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(bu),t.updateMatrixWorld(),Fa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Fa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Jv extends Wl{constructor(){super(new wn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=es*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Qv extends Vs{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.target=new qt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new Jv}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Au=new vt,ws=new W,Ba=new W;class e0 extends Wl{constructor(){super(new wn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Xe(4,2),this._viewportCount=6,this._viewports=[new Bt(2,1,1,1),new Bt(0,1,1,1),new Bt(3,1,1,1),new Bt(1,1,1,1),new Bt(3,0,1,1),new Bt(1,0,1,1)],this._cubeDirections=[new W(1,0,0),new W(-1,0,0),new W(0,0,1),new W(0,0,-1),new W(0,1,0),new W(0,-1,0)],this._cubeUps=[new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,0,1),new W(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),ws.setFromMatrixPosition(e.matrixWorld),n.position.copy(ws),Ba.copy(n.position),Ba.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ba),n.updateMatrixWorld(),i.makeTranslation(-ws.x,-ws.y,-ws.z),Au.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Au)}}class Lh extends Vs{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new e0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class t0 extends Wl{constructor(){super(new Yo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Dh extends Vs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.target=new qt,this.shadow=new t0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class n0 extends Vs{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Is{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class i0 extends cs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Qi.get(e);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(u=>{t&&t(u),s.manager.itemEnd(e)}).catch(u=>{i&&i(u)});return}return setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a}const l={};l.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",l.headers=this.requestHeader;const c=fetch(e,l).then(function(u){return u.blob()}).then(function(u){return createImageBitmap(u,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(u){return Qi.add(e,u),t&&t(u),s.manager.itemEnd(e),u}).catch(function(u){i&&i(u),Qi.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});Qi.add(e,c),s.manager.itemStart(e)}}class Ih{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=wu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=wu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function wu(){return(typeof performance>"u"?Date:performance).now()}const Xl="\\[\\]\\.:\\/",r0=new RegExp("["+Xl+"]","g"),jl="[^"+Xl+"]",s0="[^"+Xl.replace("\\.","")+"]",o0=/((?:WC+[\/:])*)/.source.replace("WC",jl),a0=/(WCOD+)?/.source.replace("WCOD",s0),l0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",jl),c0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",jl),u0=new RegExp("^"+o0+a0+l0+c0+"$"),h0=["material","materials","bones","map"];class f0{constructor(e,t,n){const i=n||Ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Ut{constructor(e,t,n){this.path=t,this.parsedPath=n||Ut.parseTrackName(t),this.node=Ut.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Ut.Composite(e,t,n):new Ut(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(r0,"")}static parseTrackName(e){const t=u0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);h0.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const l=s[a];if(l.name===t||l.uuid===t)return l;const c=n(l.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=Ut.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===u){u=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(u!==void 0){if(e[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}const a=e[i];if(a===void 0){const u=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+i+" but it wasn't found.",e);return}let l=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?l=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ut.Composite=f0;Ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ut.prototype.GetterByBindingType=[Ut.prototype._getValue_direct,Ut.prototype._getValue_array,Ut.prototype._getValue_arrayElement,Ut.prototype._getValue_toArray];Ut.prototype.SetterByBindingTypeAndVersioning=[[Ut.prototype._setValue_direct,Ut.prototype._setValue_direct_setNeedsUpdate,Ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_array,Ut.prototype._setValue_array_setNeedsUpdate,Ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_arrayElement,Ut.prototype._setValue_arrayElement_setNeedsUpdate,Ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_fromArray,Ut.prototype._setValue_fromArray_setNeedsUpdate,Ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Ru{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(mn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rl);const Cu={type:"change"},ka={type:"start"},Pu={type:"end"},Co=new ks,Lu=new Ki,d0=Math.cos(70*ah.DEG2RAD);class p0 extends _r{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new W,this.cursor=new W,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Sr.ROTATE,MIDDLE:Sr.DOLLY,RIGHT:Sr.PAN},this.touches={ONE:Tr.ROTATE,TWO:Tr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return l.phi},this.getAzimuthalAngle=function(){return l.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(T){T.addEventListener("keydown",Ce),this._domElementKeyEvents=T},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ce),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Cu),n.update(),s=i.NONE},this.update=function(){const T=new W,Z=new xi().setFromUnitVectors(e.up,new W(0,1,0)),J=Z.clone().invert(),oe=new W,xe=new xi,Ge=new W,st=2*Math.PI;return function(Qt=null){const St=n.object.position;T.copy(St).sub(n.target),T.applyQuaternion(Z),l.setFromVector3(T),n.autoRotate&&s===i.NONE&&le(L(Qt)),n.enableDamping?(l.theta+=c.theta*n.dampingFactor,l.phi+=c.phi*n.dampingFactor):(l.theta+=c.theta,l.phi+=c.phi);let en=n.minAzimuthAngle,Jt=n.maxAzimuthAngle;isFinite(en)&&isFinite(Jt)&&(en<-Math.PI?en+=st:en>Math.PI&&(en-=st),Jt<-Math.PI?Jt+=st:Jt>Math.PI&&(Jt-=st),en<=Jt?l.theta=Math.max(en,Math.min(Jt,l.theta)):l.theta=l.theta>(en+Jt)/2?Math.max(en,l.theta):Math.min(Jt,l.theta)),l.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,l.phi)),l.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(d,n.dampingFactor):n.target.add(d),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let $n=!1;if(n.zoomToCursor&&V||n.object.isOrthographicCamera)l.radius=Le(l.radius);else{const Xt=l.radius;l.radius=Le(l.radius*u),$n=Xt!=l.radius}if(T.setFromSpherical(l),T.applyQuaternion(J),St.copy(n.target).add(T),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,d.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),d.set(0,0,0)),n.zoomToCursor&&V){let Xt=null;if(n.object.isPerspectiveCamera){const Wn=T.length();Xt=Le(Wn*u);const Zn=Wn-Xt;n.object.position.addScaledVector(U,Zn),n.object.updateMatrixWorld(),$n=!!Zn}else if(n.object.isOrthographicCamera){const Wn=new W(f.x,f.y,0);Wn.unproject(n.object);const Zn=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/u)),n.object.updateProjectionMatrix(),$n=Zn!==n.object.zoom;const hi=new W(f.x,f.y,0);hi.unproject(n.object),n.object.position.sub(hi).add(Wn),n.object.updateMatrixWorld(),Xt=T.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Xt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Xt).add(n.object.position):(Co.origin.copy(n.object.position),Co.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Co.direction))<d0?e.lookAt(n.target):(Lu.setFromNormalAndCoplanarPoint(n.object.up,n.target),Co.intersectPlane(Lu,n.target))))}else if(n.object.isOrthographicCamera){const Xt=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/u)),Xt!==n.object.zoom&&(n.object.updateProjectionMatrix(),$n=!0)}return u=1,V=!1,$n||oe.distanceToSquared(n.object.position)>a||8*(1-xe.dot(n.object.quaternion))>a||Ge.distanceToSquared(n.target)>a?(n.dispatchEvent(Cu),oe.copy(n.object.position),xe.copy(n.object.quaternion),Ge.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Fe),n.domElement.removeEventListener("pointerdown",et),n.domElement.removeEventListener("pointercancel",w),n.domElement.removeEventListener("wheel",ye),n.domElement.removeEventListener("pointermove",O),n.domElement.removeEventListener("pointerup",w),n.domElement.getRootNode().removeEventListener("keydown",Ke,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Ce),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const a=1e-6,l=new Ru,c=new Ru;let u=1;const d=new W,p=new Xe,g=new Xe,v=new Xe,M=new Xe,E=new Xe,x=new Xe,y=new Xe,N=new Xe,D=new Xe,U=new W,f=new Xe;let V=!1;const F=[],$={};let I=!1;function L(T){return T!==null?2*Math.PI/60*n.autoRotateSpeed*T:2*Math.PI/60/60*n.autoRotateSpeed}function G(T){const Z=Math.abs(T*.01);return Math.pow(.95,n.zoomSpeed*Z)}function le(T){c.theta-=T}function se(T){c.phi-=T}const fe=function(){const T=new W;return function(J,oe){T.setFromMatrixColumn(oe,0),T.multiplyScalar(-J),d.add(T)}}(),de=function(){const T=new W;return function(J,oe){n.screenSpacePanning===!0?T.setFromMatrixColumn(oe,1):(T.setFromMatrixColumn(oe,0),T.crossVectors(n.object.up,T)),T.multiplyScalar(J),d.add(T)}}(),ce=function(){const T=new W;return function(J,oe){const xe=n.domElement;if(n.object.isPerspectiveCamera){const Ge=n.object.position;T.copy(Ge).sub(n.target);let st=T.length();st*=Math.tan(n.object.fov/2*Math.PI/180),fe(2*J*st/xe.clientHeight,n.object.matrix),de(2*oe*st/xe.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(fe(J*(n.object.right-n.object.left)/n.object.zoom/xe.clientWidth,n.object.matrix),de(oe*(n.object.top-n.object.bottom)/n.object.zoom/xe.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function me(T){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?u/=T:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function ae(T){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?u*=T:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Ae(T,Z){if(!n.zoomToCursor)return;V=!0;const J=n.domElement.getBoundingClientRect(),oe=T-J.left,xe=Z-J.top,Ge=J.width,st=J.height;f.x=oe/Ge*2-1,f.y=-(xe/st)*2+1,U.set(f.x,f.y,1).unproject(n.object).sub(n.object.position).normalize()}function Le(T){return Math.max(n.minDistance,Math.min(n.maxDistance,T))}function ze(T){p.set(T.clientX,T.clientY)}function xt(T){Ae(T.clientX,T.clientX),y.set(T.clientX,T.clientY)}function bt(T){M.set(T.clientX,T.clientY)}function ue(T){g.set(T.clientX,T.clientY),v.subVectors(g,p).multiplyScalar(n.rotateSpeed);const Z=n.domElement;le(2*Math.PI*v.x/Z.clientHeight),se(2*Math.PI*v.y/Z.clientHeight),p.copy(g),n.update()}function Se(T){N.set(T.clientX,T.clientY),D.subVectors(N,y),D.y>0?me(G(D.y)):D.y<0&&ae(G(D.y)),y.copy(N),n.update()}function De(T){E.set(T.clientX,T.clientY),x.subVectors(E,M).multiplyScalar(n.panSpeed),ce(x.x,x.y),M.copy(E),n.update()}function ke(T){Ae(T.clientX,T.clientY),T.deltaY<0?ae(G(T.deltaY)):T.deltaY>0&&me(G(T.deltaY)),n.update()}function ht(T){let Z=!1;switch(T.code){case n.keys.UP:T.ctrlKey||T.metaKey||T.shiftKey?se(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):ce(0,n.keyPanSpeed),Z=!0;break;case n.keys.BOTTOM:T.ctrlKey||T.metaKey||T.shiftKey?se(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):ce(0,-n.keyPanSpeed),Z=!0;break;case n.keys.LEFT:T.ctrlKey||T.metaKey||T.shiftKey?le(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):ce(n.keyPanSpeed,0),Z=!0;break;case n.keys.RIGHT:T.ctrlKey||T.metaKey||T.shiftKey?le(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):ce(-n.keyPanSpeed,0),Z=!0;break}Z&&(T.preventDefault(),n.update())}function pt(T){if(F.length===1)p.set(T.pageX,T.pageY);else{const Z=ct(T),J=.5*(T.pageX+Z.x),oe=.5*(T.pageY+Z.y);p.set(J,oe)}}function Qe(T){if(F.length===1)M.set(T.pageX,T.pageY);else{const Z=ct(T),J=.5*(T.pageX+Z.x),oe=.5*(T.pageY+Z.y);M.set(J,oe)}}function Lt(T){const Z=ct(T),J=T.pageX-Z.x,oe=T.pageY-Z.y,xe=Math.sqrt(J*J+oe*oe);y.set(0,xe)}function H(T){n.enableZoom&&Lt(T),n.enablePan&&Qe(T)}function Ie(T){n.enableZoom&&Lt(T),n.enableRotate&&pt(T)}function lt(T){if(F.length==1)g.set(T.pageX,T.pageY);else{const J=ct(T),oe=.5*(T.pageX+J.x),xe=.5*(T.pageY+J.y);g.set(oe,xe)}v.subVectors(g,p).multiplyScalar(n.rotateSpeed);const Z=n.domElement;le(2*Math.PI*v.x/Z.clientHeight),se(2*Math.PI*v.y/Z.clientHeight),p.copy(g)}function At(T){if(F.length===1)E.set(T.pageX,T.pageY);else{const Z=ct(T),J=.5*(T.pageX+Z.x),oe=.5*(T.pageY+Z.y);E.set(J,oe)}x.subVectors(E,M).multiplyScalar(n.panSpeed),ce(x.x,x.y),M.copy(E)}function je(T){const Z=ct(T),J=T.pageX-Z.x,oe=T.pageY-Z.y,xe=Math.sqrt(J*J+oe*oe);N.set(0,xe),D.set(0,Math.pow(N.y/y.y,n.zoomSpeed)),me(D.y),y.copy(N);const Ge=(T.pageX+Z.x)*.5,st=(T.pageY+Z.y)*.5;Ae(Ge,st)}function Wt(T){n.enableZoom&&je(T),n.enablePan&&At(T)}function it(T){n.enableZoom&&je(T),n.enableRotate&&lt(T)}function et(T){n.enabled!==!1&&(F.length===0&&(n.domElement.setPointerCapture(T.pointerId),n.domElement.addEventListener("pointermove",O),n.domElement.addEventListener("pointerup",w)),!Re(T)&&(yt(T),T.pointerType==="touch"?rt(T):ee(T)))}function O(T){n.enabled!==!1&&(T.pointerType==="touch"?Te(T):ve(T))}function w(T){switch(We(T),F.length){case 0:n.domElement.releasePointerCapture(T.pointerId),n.domElement.removeEventListener("pointermove",O),n.domElement.removeEventListener("pointerup",w),n.dispatchEvent(Pu),s=i.NONE;break;case 1:const Z=F[0],J=$[Z];rt({pointerId:Z,pageX:J.x,pageY:J.y});break}}function ee(T){let Z;switch(T.button){case 0:Z=n.mouseButtons.LEFT;break;case 1:Z=n.mouseButtons.MIDDLE;break;case 2:Z=n.mouseButtons.RIGHT;break;default:Z=-1}switch(Z){case Sr.DOLLY:if(n.enableZoom===!1)return;xt(T),s=i.DOLLY;break;case Sr.ROTATE:if(T.ctrlKey||T.metaKey||T.shiftKey){if(n.enablePan===!1)return;bt(T),s=i.PAN}else{if(n.enableRotate===!1)return;ze(T),s=i.ROTATE}break;case Sr.PAN:if(T.ctrlKey||T.metaKey||T.shiftKey){if(n.enableRotate===!1)return;ze(T),s=i.ROTATE}else{if(n.enablePan===!1)return;bt(T),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(ka)}function ve(T){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;ue(T);break;case i.DOLLY:if(n.enableZoom===!1)return;Se(T);break;case i.PAN:if(n.enablePan===!1)return;De(T);break}}function ye(T){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(T.preventDefault(),n.dispatchEvent(ka),ke(ge(T)),n.dispatchEvent(Pu))}function ge(T){const Z=T.deltaMode,J={clientX:T.clientX,clientY:T.clientY,deltaY:T.deltaY};switch(Z){case 1:J.deltaY*=16;break;case 2:J.deltaY*=100;break}return T.ctrlKey&&!I&&(J.deltaY*=10),J}function Ke(T){T.key==="Control"&&(I=!0,n.domElement.getRootNode().addEventListener("keyup",be,{passive:!0,capture:!0}))}function be(T){T.key==="Control"&&(I=!1,n.domElement.getRootNode().removeEventListener("keyup",be,{passive:!0,capture:!0}))}function Ce(T){n.enabled===!1||n.enablePan===!1||ht(T)}function rt(T){switch(tt(T),F.length){case 1:switch(n.touches.ONE){case Tr.ROTATE:if(n.enableRotate===!1)return;pt(T),s=i.TOUCH_ROTATE;break;case Tr.PAN:if(n.enablePan===!1)return;Qe(T),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case Tr.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;H(T),s=i.TOUCH_DOLLY_PAN;break;case Tr.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ie(T),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(ka)}function Te(T){switch(tt(T),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;lt(T),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;At(T),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Wt(T),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;it(T),n.update();break;default:s=i.NONE}}function Fe(T){n.enabled!==!1&&T.preventDefault()}function yt(T){F.push(T.pointerId)}function We(T){delete $[T.pointerId];for(let Z=0;Z<F.length;Z++)if(F[Z]==T.pointerId){F.splice(Z,1);return}}function Re(T){for(let Z=0;Z<F.length;Z++)if(F[Z]==T.pointerId)return!0;return!1}function tt(T){let Z=$[T.pointerId];Z===void 0&&(Z=new Xe,$[T.pointerId]=Z),Z.set(T.pageX,T.pageY)}function ct(T){const Z=T.pointerId===F[0]?F[1]:F[0];return $[Z]}n.domElement.addEventListener("contextmenu",Fe),n.domElement.addEventListener("pointerdown",et),n.domElement.addEventListener("pointercancel",w),n.domElement.addEventListener("wheel",ye,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",Ke,{passive:!0,capture:!0}),this.update()}}function Du(r,e){if(e===Gf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Ml||e===rh){let t=r.getIndex();if(t===null){const a=[],l=r.getAttribute("position");if(l!==void 0){for(let c=0;c<l.count;c++)a.push(c);r.setIndex(a),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===Ml)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class m0 extends cs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new y0(t)}),this.register(function(t){return new M0(t)}),this.register(function(t){return new P0(t)}),this.register(function(t){return new L0(t)}),this.register(function(t){return new D0(t)}),this.register(function(t){return new T0(t)}),this.register(function(t){return new E0(t)}),this.register(function(t){return new b0(t)}),this.register(function(t){return new A0(t)}),this.register(function(t){return new x0(t)}),this.register(function(t){return new w0(t)}),this.register(function(t){return new S0(t)}),this.register(function(t){return new C0(t)}),this.register(function(t){return new R0(t)}),this.register(function(t){return new _0(t)}),this.register(function(t){return new I0(t)}),this.register(function(t){return new N0(t)})}load(e,t,n,i){const s=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const u=Is.extractUrlBase(e);a=Is.resolveURL(u,this.path)}else a=Is.extractUrlBase(e);this.manager.itemStart(e);const l=function(u){i?i(u):console.error(u),s.manager.itemError(e),s.manager.itemEnd(e)},c=new Ph(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(u){try{s.parse(u,a,function(d){t(d),s.manager.itemEnd(e)},l)}catch(d){l(d)}},n,l)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const a={},l={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Nh){try{a[Mt.KHR_BINARY_GLTF]=new U0(e)}catch(p){i&&i(p);return}s=JSON.parse(a[Mt.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const u=new Y0(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});u.fileLoader.setRequestHeader(this.requestHeader);for(let d=0;d<this.pluginCallbacks.length;d++){const p=this.pluginCallbacks[d](u);p.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),l[p.name]=p,a[p.name]=!0}if(s.extensionsUsed)for(let d=0;d<s.extensionsUsed.length;++d){const p=s.extensionsUsed[d],g=s.extensionsRequired||[];switch(p){case Mt.KHR_MATERIALS_UNLIT:a[p]=new v0;break;case Mt.KHR_DRACO_MESH_COMPRESSION:a[p]=new O0(s,this.dracoLoader);break;case Mt.KHR_TEXTURE_TRANSFORM:a[p]=new F0;break;case Mt.KHR_MESH_QUANTIZATION:a[p]=new B0;break;default:g.indexOf(p)>=0&&l[p]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+p+'".')}}u.setExtensions(a),u.setPlugins(l),u.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function g0(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const Mt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class _0{constructor(e){this.parser=e,this.name=Mt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let u;const d=new at(16777215);c.color!==void 0&&d.setRGB(c.color[0],c.color[1],c.color[2],gn);const p=c.range!==void 0?c.range:0;switch(c.type){case"directional":u=new Dh(d),u.target.position.set(0,0,-1),u.add(u.target);break;case"point":u=new Lh(d),u.distance=p;break;case"spot":u=new Qv(d),u.distance=p,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,u.angle=c.spot.outerConeAngle,u.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,u.target.position.set(0,0,-1),u.add(u.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return u.position.set(0,0,0),u.decay=2,Ii(u,c),c.intensity!==void 0&&(u.intensity=c.intensity),u.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(u),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],l=(s.extensions&&s.extensions[this.name]||{}).light;return l===void 0?null:this._loadLight(l).then(function(c){return n._getNodeRef(t.cache,l,c)})}}class v0{constructor(){this.name=Mt.KHR_MATERIALS_UNLIT}getMaterialType(){return Ji}extendParams(e,t,n){const i=[];e.color=new at(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],gn),e.opacity=a[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,An))}return Promise.all(i)}}class x0{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class y0{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Si}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const l=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Xe(l,l)}return Promise.all(s)}}class M0{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Si}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class S0{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Si}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}}class T0{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Si}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new at(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const l=a.sheenColorFactor;t.sheenColor.setRGB(l[0],l[1],l[2],gn)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,An)),a.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}}class E0{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Si}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(s)}}class b0{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Si}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const l=a.attenuationColor||[1,1,1];return t.attenuationColor=new at().setRGB(l[0],l[1],l[2],gn),Promise.all(s)}}class A0{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Si}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class w0{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Si}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const l=a.specularColorFactor||[1,1,1];return t.specularColor=new at().setRGB(l[0],l[1],l[2],gn),a.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,An)),Promise.all(s)}}class R0{constructor(e){this.parser=e,this.name=Mt.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Si}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(s)}}class C0{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Si}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(s)}}class P0{constructor(e){this.parser=e,this.name=Mt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}}class L0{constructor(e){this.parser=e,this.name=Mt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],l=i.images[a.source];let c=n.textureLoader;if(l.uri){const u=n.options.manager.getHandler(l.uri);u!==null&&(c=u)}return this.detectSupport().then(function(u){if(u)return n.loadTextureImage(e,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class D0{constructor(e){this.parser=e,this.name=Mt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],l=i.images[a.source];let c=n.textureLoader;if(l.uri){const u=n.options.manager.getHandler(l.uri);u!==null&&(c=u)}return this.detectSupport().then(function(u){if(u)return n.loadTextureImage(e,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class I0{constructor(e){this.name=Mt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(l){const c=i.byteOffset||0,u=i.byteLength||0,d=i.count,p=i.byteStride,g=new Uint8Array(l,c,u);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(d,p,g,i.mode,i.filter).then(function(v){return v.buffer}):a.ready.then(function(){const v=new ArrayBuffer(d*p);return a.decodeGltfBuffer(new Uint8Array(v),d,p,g,i.mode,i.filter),v})})}else return null}}class N0{constructor(e){this.name=Mt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const u of i.primitives)if(u.mode!==Yn.TRIANGLES&&u.mode!==Yn.TRIANGLE_STRIP&&u.mode!==Yn.TRIANGLE_FAN&&u.mode!==void 0)return null;const a=n.extensions[this.name].attributes,l=[],c={};for(const u in a)l.push(this.parser.getDependency("accessor",a[u]).then(d=>(c[u]=d,c[u])));return l.length<1?null:(l.push(this.parser.createNodeMesh(e)),Promise.all(l).then(u=>{const d=u.pop(),p=d.isGroup?d.children:[d],g=u[0].count,v=[];for(const M of p){const E=new vt,x=new W,y=new xi,N=new W(1,1,1),D=new Dv(M.geometry,M.material,g);for(let U=0;U<g;U++)c.TRANSLATION&&x.fromBufferAttribute(c.TRANSLATION,U),c.ROTATION&&y.fromBufferAttribute(c.ROTATION,U),c.SCALE&&N.fromBufferAttribute(c.SCALE,U),D.setMatrixAt(U,E.compose(x,y,N));for(const U in c)if(U==="_COLOR_0"){const f=c[U];D.instanceColor=new El(f.array,f.itemSize,f.normalized)}else U!=="TRANSLATION"&&U!=="ROTATION"&&U!=="SCALE"&&M.geometry.setAttribute(U,c[U]);qt.prototype.copy.call(D,M),this.parser.assignFinalMaterial(D),v.push(D)}return d.isGroup?(d.clear(),d.add(...v),d):v[0]}))}}const Nh="glTF",Rs=12,Iu={JSON:1313821514,BIN:5130562};class U0{constructor(e){this.name=Mt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Rs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Nh)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Rs,s=new DataView(e,Rs);let a=0;for(;a<i;){const l=s.getUint32(a,!0);a+=4;const c=s.getUint32(a,!0);if(a+=4,c===Iu.JSON){const u=new Uint8Array(e,Rs+a,l);this.content=n.decode(u)}else if(c===Iu.BIN){const u=Rs+a;this.body=e.slice(u,u+l)}a+=l}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class O0{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Mt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,l={},c={},u={};for(const d in a){const p=Al[d]||d.toLowerCase();l[p]=a[d]}for(const d in e.attributes){const p=Al[d]||d.toLowerCase();if(a[d]!==void 0){const g=n.accessors[e.attributes[d]],v=qr[g.componentType];u[p]=v.name,c[p]=g.normalized===!0}}return t.getDependency("bufferView",s).then(function(d){return new Promise(function(p,g){i.decodeDracoFile(d,function(v){for(const M in v.attributes){const E=v.attributes[M],x=c[M];x!==void 0&&(E.normalized=x)}p(v)},l,u,gn,g)})})}}class F0{constructor(){this.name=Mt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class B0{constructor(){this.name=Mt.KHR_MESH_QUANTIZATION}}class Uh extends zs{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=l*2,u=l*3,d=i-t,p=(n-t)/d,g=p*p,v=g*p,M=e*u,E=M-u,x=-2*v+3*g,y=v-g,N=1-x,D=y-g+p;for(let U=0;U!==l;U++){const f=a[E+U+l],V=a[E+U+c]*d,F=a[M+U+l],$=a[M+U]*d;s[U]=N*f+D*V+x*F+y*$}return s}}const k0=new xi;class H0 extends Uh{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return k0.fromArray(s).normalize().toArray(s),s}}const Yn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},qr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Nu={9728:Rn,9729:Gn,9984:Yu,9985:Po,9986:Cs,9987:Ni},Uu={33071:Zi,33648:Bo,10497:Zr},Ha={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Al={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Yi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},z0={CUBICSPLINE:void 0,LINEAR:Os,STEP:Us},za={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function V0(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Gl({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Bi})),r.DefaultMaterial}function hr(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Ii(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function G0(r,e,t){let n=!1,i=!1,s=!1;for(let u=0,d=e.length;u<d;u++){const p=e[u];if(p.POSITION!==void 0&&(n=!0),p.NORMAL!==void 0&&(i=!0),p.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const a=[],l=[],c=[];for(let u=0,d=e.length;u<d;u++){const p=e[u];if(n){const g=p.POSITION!==void 0?t.getDependency("accessor",p.POSITION):r.attributes.position;a.push(g)}if(i){const g=p.NORMAL!==void 0?t.getDependency("accessor",p.NORMAL):r.attributes.normal;l.push(g)}if(s){const g=p.COLOR_0!==void 0?t.getDependency("accessor",p.COLOR_0):r.attributes.color;c.push(g)}}return Promise.all([Promise.all(a),Promise.all(l),Promise.all(c)]).then(function(u){const d=u[0],p=u[1],g=u[2];return n&&(r.morphAttributes.position=d),i&&(r.morphAttributes.normal=p),s&&(r.morphAttributes.color=g),r.morphTargetsRelative=!0,r})}function W0(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function X0(r){let e;const t=r.extensions&&r.extensions[Mt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Va(t.attributes):e=r.indices+":"+Va(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+Va(r.targets[n]);return e}function Va(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function wl(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function j0(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const q0=new vt;class Y0{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new g0,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,a=-1;if(typeof navigator<"u"){const l=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(l)===!0;const c=l.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,s=l.indexOf("Firefox")>-1,a=s?l.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&a<98?this.textureLoader=new $v(this.options.manager):this.textureLoader=new i0(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ph(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const l={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return hr(s,l,i),Ii(l,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(l)})).then(function(){for(const c of l.scenes)c.updateMatrixWorld();e(l)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const a=t[i].joints;for(let l=0,c=a.length;l<c;l++)e[a[l]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(a,l)=>{const c=this.associations.get(a);c!=null&&this.associations.set(l,c);for(const[u,d]of a.children.entries())s(d,l.children[u])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Mt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,a){n.load(Is.resolveURL(t.uri,i.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=Ha[i.type],l=qr[i.componentType],c=i.normalized===!0,u=new l(i.count*a);return Promise.resolve(new Pn(u,a,c))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(a){const l=a[0],c=Ha[i.type],u=qr[i.componentType],d=u.BYTES_PER_ELEMENT,p=d*c,g=i.byteOffset||0,v=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,M=i.normalized===!0;let E,x;if(v&&v!==p){const y=Math.floor(g/v),N="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+y+":"+i.count;let D=t.cache.get(N);D||(E=new u(l,y*v,i.count*v/d),D=new wv(E,v/d),t.cache.add(N,D)),x=new Hl(D,c,g%v/d,M)}else l===null?E=new u(i.count*c):E=new u(l,g,i.count*c),x=new Pn(E,c,M);if(i.sparse!==void 0){const y=Ha.SCALAR,N=qr[i.sparse.indices.componentType],D=i.sparse.indices.byteOffset||0,U=i.sparse.values.byteOffset||0,f=new N(a[1],D,i.sparse.count*y),V=new u(a[2],U,i.sparse.count*c);l!==null&&(x=new Pn(x.array.slice(),x.itemSize,x.normalized));for(let F=0,$=f.length;F<$;F++){const I=f[F];if(x.setX(I,V[F*c]),c>=2&&x.setY(I,V[F*c+1]),c>=3&&x.setZ(I,V[F*c+2]),c>=4&&x.setW(I,V[F*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return x})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s];let l=this.textureLoader;if(a.uri){const c=n.manager.getHandler(a.uri);c!==null&&(l=c)}return this.loadTextureImage(e,s,l)}loadTextureImage(e,t,n){const i=this,s=this.json,a=s.textures[e],l=s.images[t],c=(l.uri||l.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const u=this.loadImageSource(t,n).then(function(d){d.flipY=!1,d.name=a.name||l.name||"",d.name===""&&typeof l.uri=="string"&&l.uri.startsWith("data:image/")===!1&&(d.name=l.uri);const g=(s.samplers||{})[a.sampler]||{};return d.magFilter=Nu[g.magFilter]||Gn,d.minFilter=Nu[g.minFilter]||Ni,d.wrapS=Uu[g.wrapS]||Zr,d.wrapT=Uu[g.wrapT]||Zr,i.associations.set(d,{textures:e}),d}).catch(function(){return null});return this.textureCache[c]=u,u}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(p=>p.clone());const a=i.images[e],l=self.URL||self.webkitURL;let c=a.uri||"",u=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(p){u=!0;const g=new Blob([p],{type:a.mimeType});return c=l.createObjectURL(g),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const d=Promise.resolve(c).then(function(p){return new Promise(function(g,v){let M=g;t.isImageBitmapLoader===!0&&(M=function(E){const x=new dn(E);x.needsUpdate=!0,g(x)}),t.load(Is.resolveURL(p,s.path),M,void 0,v)})}).then(function(p){return u===!0&&l.revokeObjectURL(c),Ii(p,a),p.userData.mimeType=a.mimeType||j0(a.uri),p}).catch(function(p){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),p});return this.sourceCache[e]=d,d}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[Mt.KHR_TEXTURE_TRANSFORM]){const l=n.extensions!==void 0?n.extensions[Mt.KHR_TEXTURE_TRANSFORM]:void 0;if(l){const c=s.associations.get(a);a=s.extensions[Mt.KHR_TEXTURE_TRANSFORM].extendTexture(a,l),s.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const l="PointsMaterial:"+n.uuid;let c=this.cache.get(l);c||(c=new wh,vi.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(l,c)),n=c}else if(e.isLine){const l="LineBasicMaterial:"+n.uuid;let c=this.cache.get(l);c||(c=new Ah,vi.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(l,c)),n=c}if(i||s||a){let l="ClonedMaterial:"+n.uuid+":";i&&(l+="derivative-tangents:"),s&&(l+="vertex-colors:"),a&&(l+="flat-shading:");let c=this.cache.get(l);c||(c=n.clone(),s&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(l,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Gl}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let a;const l={},c=s.extensions||{},u=[];if(c[Mt.KHR_MATERIALS_UNLIT]){const p=i[Mt.KHR_MATERIALS_UNLIT];a=p.getMaterialType(),u.push(p.extendParams(l,s,t))}else{const p=s.pbrMetallicRoughness||{};if(l.color=new at(1,1,1),l.opacity=1,Array.isArray(p.baseColorFactor)){const g=p.baseColorFactor;l.color.setRGB(g[0],g[1],g[2],gn),l.opacity=g[3]}p.baseColorTexture!==void 0&&u.push(t.assignTexture(l,"map",p.baseColorTexture,An)),l.metalness=p.metallicFactor!==void 0?p.metallicFactor:1,l.roughness=p.roughnessFactor!==void 0?p.roughnessFactor:1,p.metallicRoughnessTexture!==void 0&&(u.push(t.assignTexture(l,"metalnessMap",p.metallicRoughnessTexture)),u.push(t.assignTexture(l,"roughnessMap",p.metallicRoughnessTexture))),a=this._invokeOne(function(g){return g.getMaterialType&&g.getMaterialType(e)}),u.push(Promise.all(this._invokeAll(function(g){return g.extendMaterialParams&&g.extendMaterialParams(e,l)})))}s.doubleSided===!0&&(l.side=gi);const d=s.alphaMode||za.OPAQUE;if(d===za.BLEND?(l.transparent=!0,l.depthWrite=!1):(l.transparent=!1,d===za.MASK&&(l.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==Ji&&(u.push(t.assignTexture(l,"normalMap",s.normalTexture)),l.normalScale=new Xe(1,1),s.normalTexture.scale!==void 0)){const p=s.normalTexture.scale;l.normalScale.set(p,p)}if(s.occlusionTexture!==void 0&&a!==Ji&&(u.push(t.assignTexture(l,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(l.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==Ji){const p=s.emissiveFactor;l.emissive=new at().setRGB(p[0],p[1],p[2],gn)}return s.emissiveTexture!==void 0&&a!==Ji&&u.push(t.assignTexture(l,"emissiveMap",s.emissiveTexture,An)),Promise.all(u).then(function(){const p=new a(l);return s.name&&(p.name=s.name),Ii(p,s),t.associations.set(p,{materials:e}),s.extensions&&hr(i,p,s),p})}createUniqueName(e){const t=Ut.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(l){return n[Mt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(l,t).then(function(c){return Ou(c,l,t)})}const a=[];for(let l=0,c=e.length;l<c;l++){const u=e[l],d=X0(u),p=i[d];if(p)a.push(p.promise);else{let g;u.extensions&&u.extensions[Mt.KHR_DRACO_MESH_COMPRESSION]?g=s(u):g=Ou(new ui,u,t),i[d]={primitive:u,promise:g},a.push(g)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],a=s.primitives,l=[];for(let c=0,u=a.length;c<u;c++){const d=a[c].material===void 0?V0(this.cache):this.getDependency("material",a[c].material);l.push(d)}return l.push(t.loadGeometries(a)),Promise.all(l).then(function(c){const u=c.slice(0,c.length-1),d=c[c.length-1],p=[];for(let v=0,M=d.length;v<M;v++){const E=d[v],x=a[v];let y;const N=u[v];if(x.mode===Yn.TRIANGLES||x.mode===Yn.TRIANGLE_STRIP||x.mode===Yn.TRIANGLE_FAN||x.mode===void 0)y=s.isSkinnedMesh===!0?new Cv(E,N):new In(E,N),y.isSkinnedMesh===!0&&y.normalizeSkinWeights(),x.mode===Yn.TRIANGLE_STRIP?y.geometry=Du(y.geometry,rh):x.mode===Yn.TRIANGLE_FAN&&(y.geometry=Du(y.geometry,Ml));else if(x.mode===Yn.LINES)y=new Iv(E,N);else if(x.mode===Yn.LINE_STRIP)y=new Vl(E,N);else if(x.mode===Yn.LINE_LOOP)y=new Nv(E,N);else if(x.mode===Yn.POINTS)y=new Uv(E,N);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+x.mode);Object.keys(y.geometry.morphAttributes).length>0&&W0(y,s),y.name=t.createUniqueName(s.name||"mesh_"+e),Ii(y,s),x.extensions&&hr(i,y,x),t.assignFinalMaterial(y),p.push(y)}for(let v=0,M=p.length;v<M;v++)t.associations.set(p[v],{meshes:e,primitives:v});if(p.length===1)return s.extensions&&hr(i,p[0],s),p[0];const g=new mr;s.extensions&&hr(i,g,s),t.associations.set(g,{meshes:e});for(let v=0,M=p.length;v<M;v++)g.add(p[v]);return g})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new wn(ah.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Yo(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Ii(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),a=i,l=[],c=[];for(let u=0,d=a.length;u<d;u++){const p=a[u];if(p){l.push(p);const g=new vt;s!==null&&g.fromArray(s.array,u*16),c.push(g)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[u])}return new zl(l,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,a=[],l=[],c=[],u=[],d=[];for(let p=0,g=i.channels.length;p<g;p++){const v=i.channels[p],M=i.samplers[v.sampler],E=v.target,x=E.node,y=i.parameters!==void 0?i.parameters[M.input]:M.input,N=i.parameters!==void 0?i.parameters[M.output]:M.output;E.node!==void 0&&(a.push(this.getDependency("node",x)),l.push(this.getDependency("accessor",y)),c.push(this.getDependency("accessor",N)),u.push(M),d.push(E))}return Promise.all([Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u),Promise.all(d)]).then(function(p){const g=p[0],v=p[1],M=p[2],E=p[3],x=p[4],y=[];for(let N=0,D=g.length;N<D;N++){const U=g[N],f=v[N],V=M[N],F=E[N],$=x[N];if(U===void 0)continue;U.updateMatrix&&U.updateMatrix();const I=n._createAnimationTracks(U,f,V,F,$);if(I)for(let L=0;L<I.length;L++)y.push(I[L])}return new Gv(s,void 0,y)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const a=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&a.traverse(function(l){if(l.isMesh)for(let c=0,u=i.weights.length;c<u;c++)l.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),a=[],l=i.children||[];for(let u=0,d=l.length;u<d;u++)a.push(n.getDependency("node",l[u]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(a),c]).then(function(u){const d=u[0],p=u[1],g=u[2];g!==null&&d.traverse(function(v){v.isSkinnedMesh&&v.bind(g,q0)});for(let v=0,M=p.length;v<M;v++)d.add(p[v]);return d})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],a=s.name?i.createUniqueName(s.name):"",l=[],c=i._invokeOne(function(u){return u.createNodeMesh&&u.createNodeMesh(e)});return c&&l.push(c),s.camera!==void 0&&l.push(i.getDependency("camera",s.camera).then(function(u){return i._getNodeRef(i.cameraCache,s.camera,u)})),i._invokeAll(function(u){return u.createNodeAttachment&&u.createNodeAttachment(e)}).forEach(function(u){l.push(u)}),this.nodeCache[e]=Promise.all(l).then(function(u){let d;if(s.isBone===!0?d=new Eh:u.length>1?d=new mr:u.length===1?d=u[0]:d=new qt,d!==u[0])for(let p=0,g=u.length;p<g;p++)d.add(u[p]);if(s.name&&(d.userData.name=s.name,d.name=a),Ii(d,s),s.extensions&&hr(n,d,s),s.matrix!==void 0){const p=new vt;p.fromArray(s.matrix),d.applyMatrix4(p)}else s.translation!==void 0&&d.position.fromArray(s.translation),s.rotation!==void 0&&d.quaternion.fromArray(s.rotation),s.scale!==void 0&&d.scale.fromArray(s.scale);return i.associations.has(d)||i.associations.set(d,{}),i.associations.get(d).nodes=e,d}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new mr;n.name&&(s.name=i.createUniqueName(n.name)),Ii(s,n),n.extensions&&hr(t,s,n);const a=n.nodes||[],l=[];for(let c=0,u=a.length;c<u;c++)l.push(i.getDependency("node",a[c]));return Promise.all(l).then(function(c){for(let d=0,p=c.length;d<p;d++)s.add(c[d]);const u=d=>{const p=new Map;for(const[g,v]of i.associations)(g instanceof vi||g instanceof dn)&&p.set(g,v);return d.traverse(g=>{const v=i.associations.get(g);v!=null&&p.set(g,v)}),p};return i.associations=u(s),s})}_createAnimationTracks(e,t,n,i,s){const a=[],l=e.name?e.name:e.uuid,c=[];Yi[s.path]===Yi.weights?e.traverse(function(g){g.morphTargetInfluences&&c.push(g.name?g.name:g.uuid)}):c.push(l);let u;switch(Yi[s.path]){case Yi.weights:u=ns;break;case Yi.rotation:u=is;break;case Yi.position:case Yi.scale:u=rs;break;default:switch(n.itemSize){case 1:u=ns;break;case 2:case 3:default:u=rs;break}break}const d=i.interpolation!==void 0?z0[i.interpolation]:Os,p=this._getArrayFromAccessor(n);for(let g=0,v=c.length;g<v;g++){const M=new u(c[g]+"."+Yi[s.path],t.array,p,d);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(M),a.push(M)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=wl(t.constructor),i=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof is?H0:Uh;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function K0(r,e,t){const n=e.attributes,i=new Hi;if(n.POSITION!==void 0){const l=t.json.accessors[n.POSITION],c=l.min,u=l.max;if(c!==void 0&&u!==void 0){if(i.set(new W(c[0],c[1],c[2]),new W(u[0],u[1],u[2])),l.normalized){const d=wl(qr[l.componentType]);i.min.multiplyScalar(d),i.max.multiplyScalar(d)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const l=new W,c=new W;for(let u=0,d=s.length;u<d;u++){const p=s[u];if(p.POSITION!==void 0){const g=t.json.accessors[p.POSITION],v=g.min,M=g.max;if(v!==void 0&&M!==void 0){if(c.setX(Math.max(Math.abs(v[0]),Math.abs(M[0]))),c.setY(Math.max(Math.abs(v[1]),Math.abs(M[1]))),c.setZ(Math.max(Math.abs(v[2]),Math.abs(M[2]))),g.normalized){const E=wl(qr[g.componentType]);c.multiplyScalar(E)}l.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(l)}r.boundingBox=i;const a=new Mi;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=a}function Ou(r,e,t){const n=e.attributes,i=[];function s(a,l){return t.getDependency("accessor",a).then(function(c){r.setAttribute(l,c)})}for(const a in n){const l=Al[a]||a.toLowerCase();l in r.attributes||i.push(s(n[a],l))}if(e.indices!==void 0&&!r.index){const a=t.getDependency("accessor",e.indices).then(function(l){r.setIndex(l)});i.push(a)}return Ct.workingColorSpace!==gn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ct.workingColorSpace}" not supported.`),Ii(r,e),K0(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?G0(r,e.targets,t):r})}const Oh={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class us{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const $0=new Yo(-1,1,1,-1,0,1);class Z0 extends ui{constructor(){super(),this.setAttribute("position",new ci([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ci([0,2,0,0,2,0],2))}}const J0=new Z0;class ql{constructor(e){this._mesh=new In(J0,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,$0)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Q0 extends us{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Cn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Bs.clone(e.uniforms),this.material=new Cn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new ql(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Fu extends us{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,l;this.inverse?(a=0,l=1):(a=1,l=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),s.buffers.stencil.setClear(l),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class ex extends us{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class tx{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Xe);this._width=n.width,this._height=n.height,t=new li(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Fi}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Q0(Oh),this.copyPass.material.blending=Oi,this.clock=new Ih}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const l=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(l.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(l.EQUAL,1,4294967295)}this.swapBuffers()}Fu!==void 0&&(a instanceof Fu?n=!0:a instanceof ex&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Xe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class nx extends us{constructor(e,t,n=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new at}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=i}}const ix={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new at(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class ss extends us{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new Xe(e.x,e.y):new Xe(256,256),this.clearColor=new at(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new li(s,a,{type:Fi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let p=0;p<this.nMips;p++){const g=new li(s,a,{type:Fi});g.texture.name="UnrealBloomPass.h"+p,g.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(g);const v=new li(s,a,{type:Fi});v.texture.name="UnrealBloomPass.v"+p,v.texture.generateMipmaps=!1,this.renderTargetsVertical.push(v),s=Math.round(s/2),a=Math.round(a/2)}const l=ix;this.highPassUniforms=Bs.clone(l.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Cn({uniforms:this.highPassUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let p=0;p<this.nMips;p++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[p])),this.separableBlurMaterials[p].uniforms.invSize.value=new Xe(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new W(1,1,1),new W(1,1,1),new W(1,1,1),new W(1,1,1),new W(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const d=Oh;this.copyUniforms=Bs.clone(d.uniforms),this.blendMaterial=new Cn({uniforms:this.copyUniforms,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader,blending:Ga,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new at,this.oldClearAlpha=1,this.basic=new Ji,this.fsQuad=new ql(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new Xe(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let l=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=l.texture,this.separableBlurMaterials[c].uniforms.direction.value=ss.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=ss.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),l=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Cn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Xe(.5,.5)},direction:{value:new Xe(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new Cn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}ss.BlurDirectionX=new Xe(1,0);ss.BlurDirectionY=new Xe(0,1);const rx={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = OptimizedCineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class sx extends us{constructor(){super();const e=rx;this.uniforms=Bs.clone(e.uniforms),this.material=new Ov({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new ql(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ct.getTransfer(this._outputColorSpace)===Gt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===zu?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Vu?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Gu?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Wu?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Xu?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ju&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}var Bu,Fh;async function ox(){Bu=await new m0().loadAsync("assets/models/gltf/cyberpunk_micro-apartments/scene.gltf"),Fh=Bu.scene}class ax{constructor(){this.initScene(),this.initCamera(),this.initRenderer(),this.initLights(),this.initMesh(),this.initControls(),this.addEventListeners();const e={threshold:0,strength:1,radius:0,exposure:1};this.renderScene=new nx(this.scene,this.camera);const t=new ss(new Xe(window.innerWidth,window.innerHeight),1.5,.4,.85);t.threshold=e.threshold,t.strength=e.strength,t.radius=e.radius;const n=new sx;this.composer=new tx(this.renderer),this.composer.addPass(this.renderScene),this.composer.addPass(n),this.animate()}initScene(){this.scene=new Av,this.clock=new Ih}initCamera(){this.sizes={width:window.innerWidth,height:window.innerHeight},this.camera=new wn(75,this.sizes.width/this.sizes.height,.1,100),this.camera.position.x=-10,this.camera.position.y=7.5,this.camera.position.z=15,this.camera.lookAt(0,0,0),this.scene.add(this.camera)}initRenderer(){this.canvas=document.querySelector("canvas.webgl"),this.renderer=new bv({canvas:this.canvas,alpha:!0}),this.renderer.setSize(this.sizes.width,this.sizes.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))}initLights(){const e=new n0(4210752),t=new Dh(16777215,1),n=new Zv(7619839,16711867,.5),i=new Lh(7619839,1,100);i.position.set(0,3,4),this.scene.add(e,t,n,i)}async initMesh(){await ox(),this.scene.add(Fh)}initControls(){this.controls=new p0(this.camera,this.canvas),this.controls.enableDamping=!0}addEventListeners(){window.addEventListener("resize",()=>this.onResize())}onResize(){this.sizes.width=window.innerWidth,this.sizes.height=window.innerHeight,this.camera.aspect=this.sizes.width/this.sizes.height,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.sizes.width,this.sizes.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.composer.setSize(this.sizes.width,this.sizes.height),this.composer.setPixelRatio(Math.min(window.devicePixelRatio,2))}animate(){this.clock.getDelta(),this.controls.update(),this.composer.render(),window.requestAnimationFrame(()=>this.animate())}}new ax;/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */(function(r,e){typeof Yr=="object"&&typeof Yr.exports=="object"?Yr.exports=r.document?e(r,!0):function(t){if(!t.document)throw new Error("jQuery requires a window with a document");return e(t)}:e(r)})(typeof window<"u"?window:void 0,function(r,e){var t=[],n=Object.getPrototypeOf,i=t.slice,s=t.flat?function(o){return t.flat.call(o)}:function(o){return t.concat.apply([],o)},a=t.push,l=t.indexOf,c={},u=c.toString,d=c.hasOwnProperty,p=d.toString,g=p.call(Object),v={},M=function(o){return typeof o=="function"&&typeof o.nodeType!="number"&&typeof o.item!="function"},E=function(o){return o!=null&&o===o.window},x=r.document,y={type:!0,src:!0,nonce:!0,noModule:!0};function N(o,h,m){var _,S,A=(m=m||x).createElement("script");if(A.text=o,h)for(_ in y)(S=h[_]||h.getAttribute&&h.getAttribute(_))&&A.setAttribute(_,S);m.head.appendChild(A).parentNode.removeChild(A)}function D(o){return o==null?o+"":typeof o=="object"||typeof o=="function"?c[u.call(o)]||"object":typeof o}var U="3.6.0",f=function(o,h){return new f.fn.init(o,h)};function V(o){var h=!!o&&"length"in o&&o.length,m=D(o);return!M(o)&&!E(o)&&(m==="array"||h===0||typeof h=="number"&&0<h&&h-1 in o)}f.fn=f.prototype={jquery:U,constructor:f,length:0,toArray:function(){return i.call(this)},get:function(o){return o==null?i.call(this):o<0?this[o+this.length]:this[o]},pushStack:function(o){var h=f.merge(this.constructor(),o);return h.prevObject=this,h},each:function(o){return f.each(this,o)},map:function(o){return this.pushStack(f.map(this,function(h,m){return o.call(h,m,h)}))},slice:function(){return this.pushStack(i.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(f.grep(this,function(o,h){return(h+1)%2}))},odd:function(){return this.pushStack(f.grep(this,function(o,h){return h%2}))},eq:function(o){var h=this.length,m=+o+(o<0?h:0);return this.pushStack(0<=m&&m<h?[this[m]]:[])},end:function(){return this.prevObject||this.constructor()},push:a,sort:t.sort,splice:t.splice},f.extend=f.fn.extend=function(){var o,h,m,_,S,A,R=arguments[0]||{},k=1,z=arguments.length,j=!1;for(typeof R=="boolean"&&(j=R,R=arguments[k]||{},k++),typeof R=="object"||M(R)||(R={}),k===z&&(R=this,k--);k<z;k++)if((o=arguments[k])!=null)for(h in o)_=o[h],h!=="__proto__"&&R!==_&&(j&&_&&(f.isPlainObject(_)||(S=Array.isArray(_)))?(m=R[h],A=S&&!Array.isArray(m)?[]:S||f.isPlainObject(m)?m:{},S=!1,R[h]=f.extend(j,A,_)):_!==void 0&&(R[h]=_));return R},f.extend({expando:"jQuery"+(U+Math.random()).replace(/\D/g,""),isReady:!0,error:function(o){throw new Error(o)},noop:function(){},isPlainObject:function(o){var h,m;return!(!o||u.call(o)!=="[object Object]")&&(!(h=n(o))||typeof(m=d.call(h,"constructor")&&h.constructor)=="function"&&p.call(m)===g)},isEmptyObject:function(o){var h;for(h in o)return!1;return!0},globalEval:function(o,h,m){N(o,{nonce:h&&h.nonce},m)},each:function(o,h){var m,_=0;if(V(o))for(m=o.length;_<m&&h.call(o[_],_,o[_])!==!1;_++);else for(_ in o)if(h.call(o[_],_,o[_])===!1)break;return o},makeArray:function(o,h){var m=h||[];return o!=null&&(V(Object(o))?f.merge(m,typeof o=="string"?[o]:o):a.call(m,o)),m},inArray:function(o,h,m){return h==null?-1:l.call(h,o,m)},merge:function(o,h){for(var m=+h.length,_=0,S=o.length;_<m;_++)o[S++]=h[_];return o.length=S,o},grep:function(o,h,m){for(var _=[],S=0,A=o.length,R=!m;S<A;S++)!h(o[S],S)!==R&&_.push(o[S]);return _},map:function(o,h,m){var _,S,A=0,R=[];if(V(o))for(_=o.length;A<_;A++)(S=h(o[A],A,m))!=null&&R.push(S);else for(A in o)(S=h(o[A],A,m))!=null&&R.push(S);return s(R)},guid:1,support:v}),typeof Symbol=="function"&&(f.fn[Symbol.iterator]=t[Symbol.iterator]),f.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(o,h){c["[object "+h+"]"]=h.toLowerCase()});var F=function(o){var h,m,_,S,A,R,k,z,j,ie,pe,Q,re,Be,Ye,Ve,Kt,on,Un,Ft="sizzle"+1*new Date,ft=o.document,Ln=0,Rt=0,$t=Ks(),_s=Ks(),js=Ks(),On=Ks(),ir=function(C,B){return C===B&&(pe=!0),0},xr={}.hasOwnProperty,Dn=[],yr=Dn.pop,jn=Dn.push,Zt=Dn.push,Fn=Dn.slice,Bn=function(C,B){for(var X=0,he=C.length;X<he;X++)if(C[X]===B)return X;return-1},di="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",dt="[\\x20\\t\\r\\n\\f]",Dt="(?:\\\\[\\da-fA-F]{1,6}"+dt+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",an="\\["+dt+"*("+Dt+")(?:"+dt+"*([*^$|!~]?=)"+dt+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+Dt+"))|)"+dt+"*\\]",kn=":("+Dt+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+an+")*)|.*)\\)|)",nn=new RegExp(dt+"+","g"),Hn=new RegExp("^"+dt+"+|((?:^|[^\\\\])(?:\\\\.)*)"+dt+"+$","g"),Mr=new RegExp("^"+dt+"*,"+dt+"*"),qs=new RegExp("^"+dt+"*([>+~]|"+dt+")"+dt+"*"),Zh=new RegExp(dt+"|>"),Jh=new RegExp(kn),Qh=new RegExp("^"+Dt+"$"),Ys={ID:new RegExp("^#("+Dt+")"),CLASS:new RegExp("^\\.("+Dt+")"),TAG:new RegExp("^("+Dt+"|[*])"),ATTR:new RegExp("^"+an),PSEUDO:new RegExp("^"+kn),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+dt+"*(even|odd|(([+-]|)(\\d*)n|)"+dt+"*(?:([+-]|)"+dt+"*(\\d+)|))"+dt+"*\\)|)","i"),bool:new RegExp("^(?:"+di+")$","i"),needsContext:new RegExp("^"+dt+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+dt+"*((?:-\\d)?\\d*)"+dt+"*\\)|)(?=[^-]|$)","i")},ef=/HTML$/i,tf=/^(?:input|select|textarea|button)$/i,nf=/^h\d$/i,vs=/^[^{]+\{\s*\[native \w/,rf=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,na=/[+~]/,Ei=new RegExp("\\\\[\\da-fA-F]{1,6}"+dt+"?|\\\\([^\\r\\n\\f])","g"),bi=function(C,B){var X="0x"+C.slice(1)-65536;return B||(X<0?String.fromCharCode(X+65536):String.fromCharCode(X>>10|55296,1023&X|56320))},nc=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ic=function(C,B){return B?C==="\0"?"�":C.slice(0,-1)+"\\"+C.charCodeAt(C.length-1).toString(16)+" ":"\\"+C},rc=function(){Q()},sf=Zs(function(C){return C.disabled===!0&&C.nodeName.toLowerCase()==="fieldset"},{dir:"parentNode",next:"legend"});try{Zt.apply(Dn=Fn.call(ft.childNodes),ft.childNodes),Dn[ft.childNodes.length].nodeType}catch{Zt={apply:Dn.length?function(B,X){jn.apply(B,Fn.call(X))}:function(B,X){for(var he=B.length,K=0;B[he++]=X[K++];);B.length=he-1}}}function Ht(C,B,X,he){var K,_e,Me,we,Oe,ut,nt,ot=B&&B.ownerDocument,Et=B?B.nodeType:9;if(X=X||[],typeof C!="string"||!C||Et!==1&&Et!==9&&Et!==11)return X;if(!he&&(Q(B),B=B||re,Ye)){if(Et!==11&&(Oe=rf.exec(C)))if(K=Oe[1]){if(Et===9){if(!(Me=B.getElementById(K)))return X;if(Me.id===K)return X.push(Me),X}else if(ot&&(Me=ot.getElementById(K))&&Un(B,Me)&&Me.id===K)return X.push(Me),X}else{if(Oe[2])return Zt.apply(X,B.getElementsByTagName(C)),X;if((K=Oe[3])&&m.getElementsByClassName&&B.getElementsByClassName)return Zt.apply(X,B.getElementsByClassName(K)),X}if(m.qsa&&!On[C+" "]&&(!Ve||!Ve.test(C))&&(Et!==1||B.nodeName.toLowerCase()!=="object")){if(nt=C,ot=B,Et===1&&(Zh.test(C)||qs.test(C))){for((ot=na.test(C)&&ra(B.parentNode)||B)===B&&m.scope||((we=B.getAttribute("id"))?we=we.replace(nc,ic):B.setAttribute("id",we=Ft)),_e=(ut=R(C)).length;_e--;)ut[_e]=(we?"#"+we:":scope")+" "+$s(ut[_e]);nt=ut.join(",")}try{return Zt.apply(X,ot.querySelectorAll(nt)),X}catch{On(C,!0)}finally{we===Ft&&B.removeAttribute("id")}}}return z(C.replace(Hn,"$1"),B,X,he)}function Ks(){var C=[];return function B(X,he){return C.push(X+" ")>_.cacheLength&&delete B[C.shift()],B[X+" "]=he}}function Qn(C){return C[Ft]=!0,C}function ei(C){var B=re.createElement("fieldset");try{return!!C(B)}catch{return!1}finally{B.parentNode&&B.parentNode.removeChild(B),B=null}}function ia(C,B){for(var X=C.split("|"),he=X.length;he--;)_.attrHandle[X[he]]=B}function sc(C,B){var X=B&&C,he=X&&C.nodeType===1&&B.nodeType===1&&C.sourceIndex-B.sourceIndex;if(he)return he;if(X){for(;X=X.nextSibling;)if(X===B)return-1}return C?1:-1}function of(C){return function(B){return B.nodeName.toLowerCase()==="input"&&B.type===C}}function af(C){return function(B){var X=B.nodeName.toLowerCase();return(X==="input"||X==="button")&&B.type===C}}function oc(C){return function(B){return"form"in B?B.parentNode&&B.disabled===!1?"label"in B?"label"in B.parentNode?B.parentNode.disabled===C:B.disabled===C:B.isDisabled===C||B.isDisabled!==!C&&sf(B)===C:B.disabled===C:"label"in B&&B.disabled===C}}function rr(C){return Qn(function(B){return B=+B,Qn(function(X,he){for(var K,_e=C([],X.length,B),Me=_e.length;Me--;)X[K=_e[Me]]&&(X[K]=!(he[K]=X[K]))})})}function ra(C){return C&&typeof C.getElementsByTagName<"u"&&C}for(h in m=Ht.support={},A=Ht.isXML=function(C){var B=C&&C.namespaceURI,X=C&&(C.ownerDocument||C).documentElement;return!ef.test(B||X&&X.nodeName||"HTML")},Q=Ht.setDocument=function(C){var B,X,he=C?C.ownerDocument||C:ft;return he!=re&&he.nodeType===9&&he.documentElement&&(Be=(re=he).documentElement,Ye=!A(re),ft!=re&&(X=re.defaultView)&&X.top!==X&&(X.addEventListener?X.addEventListener("unload",rc,!1):X.attachEvent&&X.attachEvent("onunload",rc)),m.scope=ei(function(K){return Be.appendChild(K).appendChild(re.createElement("div")),typeof K.querySelectorAll<"u"&&!K.querySelectorAll(":scope fieldset div").length}),m.attributes=ei(function(K){return K.className="i",!K.getAttribute("className")}),m.getElementsByTagName=ei(function(K){return K.appendChild(re.createComment("")),!K.getElementsByTagName("*").length}),m.getElementsByClassName=vs.test(re.getElementsByClassName),m.getById=ei(function(K){return Be.appendChild(K).id=Ft,!re.getElementsByName||!re.getElementsByName(Ft).length}),m.getById?(_.filter.ID=function(K){var _e=K.replace(Ei,bi);return function(Me){return Me.getAttribute("id")===_e}},_.find.ID=function(K,_e){if(typeof _e.getElementById<"u"&&Ye){var Me=_e.getElementById(K);return Me?[Me]:[]}}):(_.filter.ID=function(K){var _e=K.replace(Ei,bi);return function(Me){var we=typeof Me.getAttributeNode<"u"&&Me.getAttributeNode("id");return we&&we.value===_e}},_.find.ID=function(K,_e){if(typeof _e.getElementById<"u"&&Ye){var Me,we,Oe,ut=_e.getElementById(K);if(ut){if((Me=ut.getAttributeNode("id"))&&Me.value===K)return[ut];for(Oe=_e.getElementsByName(K),we=0;ut=Oe[we++];)if((Me=ut.getAttributeNode("id"))&&Me.value===K)return[ut]}return[]}}),_.find.TAG=m.getElementsByTagName?function(K,_e){return typeof _e.getElementsByTagName<"u"?_e.getElementsByTagName(K):m.qsa?_e.querySelectorAll(K):void 0}:function(K,_e){var Me,we=[],Oe=0,ut=_e.getElementsByTagName(K);if(K==="*"){for(;Me=ut[Oe++];)Me.nodeType===1&&we.push(Me);return we}return ut},_.find.CLASS=m.getElementsByClassName&&function(K,_e){if(typeof _e.getElementsByClassName<"u"&&Ye)return _e.getElementsByClassName(K)},Kt=[],Ve=[],(m.qsa=vs.test(re.querySelectorAll))&&(ei(function(K){var _e;Be.appendChild(K).innerHTML="<a id='"+Ft+"'></a><select id='"+Ft+"-\r\\' msallowcapture=''><option selected=''></option></select>",K.querySelectorAll("[msallowcapture^='']").length&&Ve.push("[*^$]="+dt+`*(?:''|"")`),K.querySelectorAll("[selected]").length||Ve.push("\\["+dt+"*(?:value|"+di+")"),K.querySelectorAll("[id~="+Ft+"-]").length||Ve.push("~="),(_e=re.createElement("input")).setAttribute("name",""),K.appendChild(_e),K.querySelectorAll("[name='']").length||Ve.push("\\["+dt+"*name"+dt+"*="+dt+`*(?:''|"")`),K.querySelectorAll(":checked").length||Ve.push(":checked"),K.querySelectorAll("a#"+Ft+"+*").length||Ve.push(".#.+[+~]"),K.querySelectorAll("\\\f"),Ve.push("[\\r\\n\\f]")}),ei(function(K){K.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var _e=re.createElement("input");_e.setAttribute("type","hidden"),K.appendChild(_e).setAttribute("name","D"),K.querySelectorAll("[name=d]").length&&Ve.push("name"+dt+"*[*^$|!~]?="),K.querySelectorAll(":enabled").length!==2&&Ve.push(":enabled",":disabled"),Be.appendChild(K).disabled=!0,K.querySelectorAll(":disabled").length!==2&&Ve.push(":enabled",":disabled"),K.querySelectorAll("*,:x"),Ve.push(",.*:")})),(m.matchesSelector=vs.test(on=Be.matches||Be.webkitMatchesSelector||Be.mozMatchesSelector||Be.oMatchesSelector||Be.msMatchesSelector))&&ei(function(K){m.disconnectedMatch=on.call(K,"*"),on.call(K,"[s!='']:x"),Kt.push("!=",kn)}),Ve=Ve.length&&new RegExp(Ve.join("|")),Kt=Kt.length&&new RegExp(Kt.join("|")),B=vs.test(Be.compareDocumentPosition),Un=B||vs.test(Be.contains)?function(K,_e){var Me=K.nodeType===9?K.documentElement:K,we=_e&&_e.parentNode;return K===we||!(!we||we.nodeType!==1||!(Me.contains?Me.contains(we):K.compareDocumentPosition&&16&K.compareDocumentPosition(we)))}:function(K,_e){if(_e){for(;_e=_e.parentNode;)if(_e===K)return!0}return!1},ir=B?function(K,_e){if(K===_e)return pe=!0,0;var Me=!K.compareDocumentPosition-!_e.compareDocumentPosition;return Me||(1&(Me=(K.ownerDocument||K)==(_e.ownerDocument||_e)?K.compareDocumentPosition(_e):1)||!m.sortDetached&&_e.compareDocumentPosition(K)===Me?K==re||K.ownerDocument==ft&&Un(ft,K)?-1:_e==re||_e.ownerDocument==ft&&Un(ft,_e)?1:ie?Bn(ie,K)-Bn(ie,_e):0:4&Me?-1:1)}:function(K,_e){if(K===_e)return pe=!0,0;var Me,we=0,Oe=K.parentNode,ut=_e.parentNode,nt=[K],ot=[_e];if(!Oe||!ut)return K==re?-1:_e==re?1:Oe?-1:ut?1:ie?Bn(ie,K)-Bn(ie,_e):0;if(Oe===ut)return sc(K,_e);for(Me=K;Me=Me.parentNode;)nt.unshift(Me);for(Me=_e;Me=Me.parentNode;)ot.unshift(Me);for(;nt[we]===ot[we];)we++;return we?sc(nt[we],ot[we]):nt[we]==ft?-1:ot[we]==ft?1:0}),re},Ht.matches=function(C,B){return Ht(C,null,null,B)},Ht.matchesSelector=function(C,B){if(Q(C),m.matchesSelector&&Ye&&!On[B+" "]&&(!Kt||!Kt.test(B))&&(!Ve||!Ve.test(B)))try{var X=on.call(C,B);if(X||m.disconnectedMatch||C.document&&C.document.nodeType!==11)return X}catch{On(B,!0)}return 0<Ht(B,re,null,[C]).length},Ht.contains=function(C,B){return(C.ownerDocument||C)!=re&&Q(C),Un(C,B)},Ht.attr=function(C,B){(C.ownerDocument||C)!=re&&Q(C);var X=_.attrHandle[B.toLowerCase()],he=X&&xr.call(_.attrHandle,B.toLowerCase())?X(C,B,!Ye):void 0;return he!==void 0?he:m.attributes||!Ye?C.getAttribute(B):(he=C.getAttributeNode(B))&&he.specified?he.value:null},Ht.escape=function(C){return(C+"").replace(nc,ic)},Ht.error=function(C){throw new Error("Syntax error, unrecognized expression: "+C)},Ht.uniqueSort=function(C){var B,X=[],he=0,K=0;if(pe=!m.detectDuplicates,ie=!m.sortStable&&C.slice(0),C.sort(ir),pe){for(;B=C[K++];)B===C[K]&&(he=X.push(K));for(;he--;)C.splice(X[he],1)}return ie=null,C},S=Ht.getText=function(C){var B,X="",he=0,K=C.nodeType;if(K){if(K===1||K===9||K===11){if(typeof C.textContent=="string")return C.textContent;for(C=C.firstChild;C;C=C.nextSibling)X+=S(C)}else if(K===3||K===4)return C.nodeValue}else for(;B=C[he++];)X+=S(B);return X},(_=Ht.selectors={cacheLength:50,createPseudo:Qn,match:Ys,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(C){return C[1]=C[1].replace(Ei,bi),C[3]=(C[3]||C[4]||C[5]||"").replace(Ei,bi),C[2]==="~="&&(C[3]=" "+C[3]+" "),C.slice(0,4)},CHILD:function(C){return C[1]=C[1].toLowerCase(),C[1].slice(0,3)==="nth"?(C[3]||Ht.error(C[0]),C[4]=+(C[4]?C[5]+(C[6]||1):2*(C[3]==="even"||C[3]==="odd")),C[5]=+(C[7]+C[8]||C[3]==="odd")):C[3]&&Ht.error(C[0]),C},PSEUDO:function(C){var B,X=!C[6]&&C[2];return Ys.CHILD.test(C[0])?null:(C[3]?C[2]=C[4]||C[5]||"":X&&Jh.test(X)&&(B=R(X,!0))&&(B=X.indexOf(")",X.length-B)-X.length)&&(C[0]=C[0].slice(0,B),C[2]=X.slice(0,B)),C.slice(0,3))}},filter:{TAG:function(C){var B=C.replace(Ei,bi).toLowerCase();return C==="*"?function(){return!0}:function(X){return X.nodeName&&X.nodeName.toLowerCase()===B}},CLASS:function(C){var B=$t[C+" "];return B||(B=new RegExp("(^|"+dt+")"+C+"("+dt+"|$)"))&&$t(C,function(X){return B.test(typeof X.className=="string"&&X.className||typeof X.getAttribute<"u"&&X.getAttribute("class")||"")})},ATTR:function(C,B,X){return function(he){var K=Ht.attr(he,C);return K==null?B==="!=":!B||(K+="",B==="="?K===X:B==="!="?K!==X:B==="^="?X&&K.indexOf(X)===0:B==="*="?X&&-1<K.indexOf(X):B==="$="?X&&K.slice(-X.length)===X:B==="~="?-1<(" "+K.replace(nn," ")+" ").indexOf(X):B==="|="&&(K===X||K.slice(0,X.length+1)===X+"-"))}},CHILD:function(C,B,X,he,K){var _e=C.slice(0,3)!=="nth",Me=C.slice(-4)!=="last",we=B==="of-type";return he===1&&K===0?function(Oe){return!!Oe.parentNode}:function(Oe,ut,nt){var ot,Et,tn,mt,ln,hn,Tn=_e!==Me?"nextSibling":"previousSibling",zt=Oe.parentNode,pi=we&&Oe.nodeName.toLowerCase(),vn=!nt&&!we,rn=!1;if(zt){if(_e){for(;Tn;){for(mt=Oe;mt=mt[Tn];)if(we?mt.nodeName.toLowerCase()===pi:mt.nodeType===1)return!1;hn=Tn=C==="only"&&!hn&&"nextSibling"}return!0}if(hn=[Me?zt.firstChild:zt.lastChild],Me&&vn){for(rn=(ln=(ot=(Et=(tn=(mt=zt)[Ft]||(mt[Ft]={}))[mt.uniqueID]||(tn[mt.uniqueID]={}))[C]||[])[0]===Ln&&ot[1])&&ot[2],mt=ln&&zt.childNodes[ln];mt=++ln&&mt&&mt[Tn]||(rn=ln=0)||hn.pop();)if(mt.nodeType===1&&++rn&&mt===Oe){Et[C]=[Ln,ln,rn];break}}else if(vn&&(rn=ln=(ot=(Et=(tn=(mt=Oe)[Ft]||(mt[Ft]={}))[mt.uniqueID]||(tn[mt.uniqueID]={}))[C]||[])[0]===Ln&&ot[1]),rn===!1)for(;(mt=++ln&&mt&&mt[Tn]||(rn=ln=0)||hn.pop())&&!((we?mt.nodeName.toLowerCase()===pi:mt.nodeType===1)&&++rn&&(vn&&((Et=(tn=mt[Ft]||(mt[Ft]={}))[mt.uniqueID]||(tn[mt.uniqueID]={}))[C]=[Ln,rn]),mt===Oe)););return(rn-=K)===he||rn%he==0&&0<=rn/he}}},PSEUDO:function(C,B){var X,he=_.pseudos[C]||_.setFilters[C.toLowerCase()]||Ht.error("unsupported pseudo: "+C);return he[Ft]?he(B):1<he.length?(X=[C,C,"",B],_.setFilters.hasOwnProperty(C.toLowerCase())?Qn(function(K,_e){for(var Me,we=he(K,B),Oe=we.length;Oe--;)K[Me=Bn(K,we[Oe])]=!(_e[Me]=we[Oe])}):function(K){return he(K,0,X)}):he}},pseudos:{not:Qn(function(C){var B=[],X=[],he=k(C.replace(Hn,"$1"));return he[Ft]?Qn(function(K,_e,Me,we){for(var Oe,ut=he(K,null,we,[]),nt=K.length;nt--;)(Oe=ut[nt])&&(K[nt]=!(_e[nt]=Oe))}):function(K,_e,Me){return B[0]=K,he(B,null,Me,X),B[0]=null,!X.pop()}}),has:Qn(function(C){return function(B){return 0<Ht(C,B).length}}),contains:Qn(function(C){return C=C.replace(Ei,bi),function(B){return-1<(B.textContent||S(B)).indexOf(C)}}),lang:Qn(function(C){return Qh.test(C||"")||Ht.error("unsupported lang: "+C),C=C.replace(Ei,bi).toLowerCase(),function(B){var X;do if(X=Ye?B.lang:B.getAttribute("xml:lang")||B.getAttribute("lang"))return(X=X.toLowerCase())===C||X.indexOf(C+"-")===0;while((B=B.parentNode)&&B.nodeType===1);return!1}}),target:function(C){var B=o.location&&o.location.hash;return B&&B.slice(1)===C.id},root:function(C){return C===Be},focus:function(C){return C===re.activeElement&&(!re.hasFocus||re.hasFocus())&&!!(C.type||C.href||~C.tabIndex)},enabled:oc(!1),disabled:oc(!0),checked:function(C){var B=C.nodeName.toLowerCase();return B==="input"&&!!C.checked||B==="option"&&!!C.selected},selected:function(C){return C.parentNode&&C.parentNode.selectedIndex,C.selected===!0},empty:function(C){for(C=C.firstChild;C;C=C.nextSibling)if(C.nodeType<6)return!1;return!0},parent:function(C){return!_.pseudos.empty(C)},header:function(C){return nf.test(C.nodeName)},input:function(C){return tf.test(C.nodeName)},button:function(C){var B=C.nodeName.toLowerCase();return B==="input"&&C.type==="button"||B==="button"},text:function(C){var B;return C.nodeName.toLowerCase()==="input"&&C.type==="text"&&((B=C.getAttribute("type"))==null||B.toLowerCase()==="text")},first:rr(function(){return[0]}),last:rr(function(C,B){return[B-1]}),eq:rr(function(C,B,X){return[X<0?X+B:X]}),even:rr(function(C,B){for(var X=0;X<B;X+=2)C.push(X);return C}),odd:rr(function(C,B){for(var X=1;X<B;X+=2)C.push(X);return C}),lt:rr(function(C,B,X){for(var he=X<0?X+B:B<X?B:X;0<=--he;)C.push(he);return C}),gt:rr(function(C,B,X){for(var he=X<0?X+B:X;++he<B;)C.push(he);return C})}}).pseudos.nth=_.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})_.pseudos[h]=of(h);for(h in{submit:!0,reset:!0})_.pseudos[h]=af(h);function ac(){}function $s(C){for(var B=0,X=C.length,he="";B<X;B++)he+=C[B].value;return he}function Zs(C,B,X){var he=B.dir,K=B.next,_e=K||he,Me=X&&_e==="parentNode",we=Rt++;return B.first?function(Oe,ut,nt){for(;Oe=Oe[he];)if(Oe.nodeType===1||Me)return C(Oe,ut,nt);return!1}:function(Oe,ut,nt){var ot,Et,tn,mt=[Ln,we];if(nt){for(;Oe=Oe[he];)if((Oe.nodeType===1||Me)&&C(Oe,ut,nt))return!0}else for(;Oe=Oe[he];)if(Oe.nodeType===1||Me)if(Et=(tn=Oe[Ft]||(Oe[Ft]={}))[Oe.uniqueID]||(tn[Oe.uniqueID]={}),K&&K===Oe.nodeName.toLowerCase())Oe=Oe[he]||Oe;else{if((ot=Et[_e])&&ot[0]===Ln&&ot[1]===we)return mt[2]=ot[2];if((Et[_e]=mt)[2]=C(Oe,ut,nt))return!0}return!1}}function sa(C){return 1<C.length?function(B,X,he){for(var K=C.length;K--;)if(!C[K](B,X,he))return!1;return!0}:C[0]}function Js(C,B,X,he,K){for(var _e,Me=[],we=0,Oe=C.length,ut=B!=null;we<Oe;we++)(_e=C[we])&&(X&&!X(_e,he,K)||(Me.push(_e),ut&&B.push(we)));return Me}function oa(C,B,X,he,K,_e){return he&&!he[Ft]&&(he=oa(he)),K&&!K[Ft]&&(K=oa(K,_e)),Qn(function(Me,we,Oe,ut){var nt,ot,Et,tn=[],mt=[],ln=we.length,hn=Me||function(pi,vn,rn){for(var ti=0,Qs=vn.length;ti<Qs;ti++)Ht(pi,vn[ti],rn);return rn}(B||"*",Oe.nodeType?[Oe]:Oe,[]),Tn=!C||!Me&&B?hn:Js(hn,tn,C,Oe,ut),zt=X?K||(Me?C:ln||he)?[]:we:Tn;if(X&&X(Tn,zt,Oe,ut),he)for(nt=Js(zt,mt),he(nt,[],Oe,ut),ot=nt.length;ot--;)(Et=nt[ot])&&(zt[mt[ot]]=!(Tn[mt[ot]]=Et));if(Me){if(K||C){if(K){for(nt=[],ot=zt.length;ot--;)(Et=zt[ot])&&nt.push(Tn[ot]=Et);K(null,zt=[],nt,ut)}for(ot=zt.length;ot--;)(Et=zt[ot])&&-1<(nt=K?Bn(Me,Et):tn[ot])&&(Me[nt]=!(we[nt]=Et))}}else zt=Js(zt===we?zt.splice(ln,zt.length):zt),K?K(null,we,zt,ut):Zt.apply(we,zt)})}function aa(C){for(var B,X,he,K=C.length,_e=_.relative[C[0].type],Me=_e||_.relative[" "],we=_e?1:0,Oe=Zs(function(ot){return ot===B},Me,!0),ut=Zs(function(ot){return-1<Bn(B,ot)},Me,!0),nt=[function(ot,Et,tn){var mt=!_e&&(tn||Et!==j)||((B=Et).nodeType?Oe(ot,Et,tn):ut(ot,Et,tn));return B=null,mt}];we<K;we++)if(X=_.relative[C[we].type])nt=[Zs(sa(nt),X)];else{if((X=_.filter[C[we].type].apply(null,C[we].matches))[Ft]){for(he=++we;he<K&&!_.relative[C[he].type];he++);return oa(1<we&&sa(nt),1<we&&$s(C.slice(0,we-1).concat({value:C[we-2].type===" "?"*":""})).replace(Hn,"$1"),X,we<he&&aa(C.slice(we,he)),he<K&&aa(C=C.slice(he)),he<K&&$s(C))}nt.push(X)}return sa(nt)}return ac.prototype=_.filters=_.pseudos,_.setFilters=new ac,R=Ht.tokenize=function(C,B){var X,he,K,_e,Me,we,Oe,ut=_s[C+" "];if(ut)return B?0:ut.slice(0);for(Me=C,we=[],Oe=_.preFilter;Me;){for(_e in X&&!(he=Mr.exec(Me))||(he&&(Me=Me.slice(he[0].length)||Me),we.push(K=[])),X=!1,(he=qs.exec(Me))&&(X=he.shift(),K.push({value:X,type:he[0].replace(Hn," ")}),Me=Me.slice(X.length)),_.filter)!(he=Ys[_e].exec(Me))||Oe[_e]&&!(he=Oe[_e](he))||(X=he.shift(),K.push({value:X,type:_e,matches:he}),Me=Me.slice(X.length));if(!X)break}return B?Me.length:Me?Ht.error(C):_s(C,we).slice(0)},k=Ht.compile=function(C,B){var X,he,K,_e,Me,we,Oe=[],ut=[],nt=js[C+" "];if(!nt){for(B||(B=R(C)),X=B.length;X--;)(nt=aa(B[X]))[Ft]?Oe.push(nt):ut.push(nt);(nt=js(C,(he=ut,_e=0<(K=Oe).length,Me=0<he.length,we=function(ot,Et,tn,mt,ln){var hn,Tn,zt,pi=0,vn="0",rn=ot&&[],ti=[],Qs=j,lc=ot||Me&&_.find.TAG("*",ln),cc=Ln+=Qs==null?1:Math.random()||.1,lf=lc.length;for(ln&&(j=Et==re||Et||ln);vn!==lf&&(hn=lc[vn])!=null;vn++){if(Me&&hn){for(Tn=0,Et||hn.ownerDocument==re||(Q(hn),tn=!Ye);zt=he[Tn++];)if(zt(hn,Et||re,tn)){mt.push(hn);break}ln&&(Ln=cc)}_e&&((hn=!zt&&hn)&&pi--,ot&&rn.push(hn))}if(pi+=vn,_e&&vn!==pi){for(Tn=0;zt=K[Tn++];)zt(rn,ti,Et,tn);if(ot){if(0<pi)for(;vn--;)rn[vn]||ti[vn]||(ti[vn]=yr.call(mt));ti=Js(ti)}Zt.apply(mt,ti),ln&&!ot&&0<ti.length&&1<pi+K.length&&Ht.uniqueSort(mt)}return ln&&(Ln=cc,j=Qs),rn},_e?Qn(we):we))).selector=C}return nt},z=Ht.select=function(C,B,X,he){var K,_e,Me,we,Oe,ut=typeof C=="function"&&C,nt=!he&&R(C=ut.selector||C);if(X=X||[],nt.length===1){if(2<(_e=nt[0]=nt[0].slice(0)).length&&(Me=_e[0]).type==="ID"&&B.nodeType===9&&Ye&&_.relative[_e[1].type]){if(!(B=(_.find.ID(Me.matches[0].replace(Ei,bi),B)||[])[0]))return X;ut&&(B=B.parentNode),C=C.slice(_e.shift().value.length)}for(K=Ys.needsContext.test(C)?0:_e.length;K--&&(Me=_e[K],!_.relative[we=Me.type]);)if((Oe=_.find[we])&&(he=Oe(Me.matches[0].replace(Ei,bi),na.test(_e[0].type)&&ra(B.parentNode)||B))){if(_e.splice(K,1),!(C=he.length&&$s(_e)))return Zt.apply(X,he),X;break}}return(ut||k(C,nt))(he,B,!Ye,X,!B||na.test(C)&&ra(B.parentNode)||B),X},m.sortStable=Ft.split("").sort(ir).join("")===Ft,m.detectDuplicates=!!pe,Q(),m.sortDetached=ei(function(C){return 1&C.compareDocumentPosition(re.createElement("fieldset"))}),ei(function(C){return C.innerHTML="<a href='#'></a>",C.firstChild.getAttribute("href")==="#"})||ia("type|href|height|width",function(C,B,X){if(!X)return C.getAttribute(B,B.toLowerCase()==="type"?1:2)}),m.attributes&&ei(function(C){return C.innerHTML="<input/>",C.firstChild.setAttribute("value",""),C.firstChild.getAttribute("value")===""})||ia("value",function(C,B,X){if(!X&&C.nodeName.toLowerCase()==="input")return C.defaultValue}),ei(function(C){return C.getAttribute("disabled")==null})||ia(di,function(C,B,X){var he;if(!X)return C[B]===!0?B.toLowerCase():(he=C.getAttributeNode(B))&&he.specified?he.value:null}),Ht}(r);f.find=F,f.expr=F.selectors,f.expr[":"]=f.expr.pseudos,f.uniqueSort=f.unique=F.uniqueSort,f.text=F.getText,f.isXMLDoc=F.isXML,f.contains=F.contains,f.escapeSelector=F.escape;var $=function(o,h,m){for(var _=[],S=m!==void 0;(o=o[h])&&o.nodeType!==9;)if(o.nodeType===1){if(S&&f(o).is(m))break;_.push(o)}return _},I=function(o,h){for(var m=[];o;o=o.nextSibling)o.nodeType===1&&o!==h&&m.push(o);return m},L=f.expr.match.needsContext;function G(o,h){return o.nodeName&&o.nodeName.toLowerCase()===h.toLowerCase()}var le=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function se(o,h,m){return M(h)?f.grep(o,function(_,S){return!!h.call(_,S,_)!==m}):h.nodeType?f.grep(o,function(_){return _===h!==m}):typeof h!="string"?f.grep(o,function(_){return-1<l.call(h,_)!==m}):f.filter(h,o,m)}f.filter=function(o,h,m){var _=h[0];return m&&(o=":not("+o+")"),h.length===1&&_.nodeType===1?f.find.matchesSelector(_,o)?[_]:[]:f.find.matches(o,f.grep(h,function(S){return S.nodeType===1}))},f.fn.extend({find:function(o){var h,m,_=this.length,S=this;if(typeof o!="string")return this.pushStack(f(o).filter(function(){for(h=0;h<_;h++)if(f.contains(S[h],this))return!0}));for(m=this.pushStack([]),h=0;h<_;h++)f.find(o,S[h],m);return 1<_?f.uniqueSort(m):m},filter:function(o){return this.pushStack(se(this,o||[],!1))},not:function(o){return this.pushStack(se(this,o||[],!0))},is:function(o){return!!se(this,typeof o=="string"&&L.test(o)?f(o):o||[],!1).length}});var fe,de=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(f.fn.init=function(o,h,m){var _,S;if(!o)return this;if(m=m||fe,typeof o=="string"){if(!(_=o[0]==="<"&&o[o.length-1]===">"&&3<=o.length?[null,o,null]:de.exec(o))||!_[1]&&h)return!h||h.jquery?(h||m).find(o):this.constructor(h).find(o);if(_[1]){if(h=h instanceof f?h[0]:h,f.merge(this,f.parseHTML(_[1],h&&h.nodeType?h.ownerDocument||h:x,!0)),le.test(_[1])&&f.isPlainObject(h))for(_ in h)M(this[_])?this[_](h[_]):this.attr(_,h[_]);return this}return(S=x.getElementById(_[2]))&&(this[0]=S,this.length=1),this}return o.nodeType?(this[0]=o,this.length=1,this):M(o)?m.ready!==void 0?m.ready(o):o(f):f.makeArray(o,this)}).prototype=f.fn,fe=f(x);var ce=/^(?:parents|prev(?:Until|All))/,me={children:!0,contents:!0,next:!0,prev:!0};function ae(o,h){for(;(o=o[h])&&o.nodeType!==1;);return o}f.fn.extend({has:function(o){var h=f(o,this),m=h.length;return this.filter(function(){for(var _=0;_<m;_++)if(f.contains(this,h[_]))return!0})},closest:function(o,h){var m,_=0,S=this.length,A=[],R=typeof o!="string"&&f(o);if(!L.test(o)){for(;_<S;_++)for(m=this[_];m&&m!==h;m=m.parentNode)if(m.nodeType<11&&(R?-1<R.index(m):m.nodeType===1&&f.find.matchesSelector(m,o))){A.push(m);break}}return this.pushStack(1<A.length?f.uniqueSort(A):A)},index:function(o){return o?typeof o=="string"?l.call(f(o),this[0]):l.call(this,o.jquery?o[0]:o):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(o,h){return this.pushStack(f.uniqueSort(f.merge(this.get(),f(o,h))))},addBack:function(o){return this.add(o==null?this.prevObject:this.prevObject.filter(o))}}),f.each({parent:function(o){var h=o.parentNode;return h&&h.nodeType!==11?h:null},parents:function(o){return $(o,"parentNode")},parentsUntil:function(o,h,m){return $(o,"parentNode",m)},next:function(o){return ae(o,"nextSibling")},prev:function(o){return ae(o,"previousSibling")},nextAll:function(o){return $(o,"nextSibling")},prevAll:function(o){return $(o,"previousSibling")},nextUntil:function(o,h,m){return $(o,"nextSibling",m)},prevUntil:function(o,h,m){return $(o,"previousSibling",m)},siblings:function(o){return I((o.parentNode||{}).firstChild,o)},children:function(o){return I(o.firstChild)},contents:function(o){return o.contentDocument!=null&&n(o.contentDocument)?o.contentDocument:(G(o,"template")&&(o=o.content||o),f.merge([],o.childNodes))}},function(o,h){f.fn[o]=function(m,_){var S=f.map(this,h,m);return o.slice(-5)!=="Until"&&(_=m),_&&typeof _=="string"&&(S=f.filter(_,S)),1<this.length&&(me[o]||f.uniqueSort(S),ce.test(o)&&S.reverse()),this.pushStack(S)}});var Ae=/[^\x20\t\r\n\f]+/g;function Le(o){return o}function ze(o){throw o}function xt(o,h,m,_){var S;try{o&&M(S=o.promise)?S.call(o).done(h).fail(m):o&&M(S=o.then)?S.call(o,h,m):h.apply(void 0,[o].slice(_))}catch(A){m.apply(void 0,[A])}}f.Callbacks=function(o){var h,m;o=typeof o=="string"?(h=o,m={},f.each(h.match(Ae)||[],function(Q,re){m[re]=!0}),m):f.extend({},o);var _,S,A,R,k=[],z=[],j=-1,ie=function(){for(R=R||o.once,A=_=!0;z.length;j=-1)for(S=z.shift();++j<k.length;)k[j].apply(S[0],S[1])===!1&&o.stopOnFalse&&(j=k.length,S=!1);o.memory||(S=!1),_=!1,R&&(k=S?[]:"")},pe={add:function(){return k&&(S&&!_&&(j=k.length-1,z.push(S)),function Q(re){f.each(re,function(Be,Ye){M(Ye)?o.unique&&pe.has(Ye)||k.push(Ye):Ye&&Ye.length&&D(Ye)!=="string"&&Q(Ye)})}(arguments),S&&!_&&ie()),this},remove:function(){return f.each(arguments,function(Q,re){for(var Be;-1<(Be=f.inArray(re,k,Be));)k.splice(Be,1),Be<=j&&j--}),this},has:function(Q){return Q?-1<f.inArray(Q,k):0<k.length},empty:function(){return k&&(k=[]),this},disable:function(){return R=z=[],k=S="",this},disabled:function(){return!k},lock:function(){return R=z=[],S||_||(k=S=""),this},locked:function(){return!!R},fireWith:function(Q,re){return R||(re=[Q,(re=re||[]).slice?re.slice():re],z.push(re),_||ie()),this},fire:function(){return pe.fireWith(this,arguments),this},fired:function(){return!!A}};return pe},f.extend({Deferred:function(o){var h=[["notify","progress",f.Callbacks("memory"),f.Callbacks("memory"),2],["resolve","done",f.Callbacks("once memory"),f.Callbacks("once memory"),0,"resolved"],["reject","fail",f.Callbacks("once memory"),f.Callbacks("once memory"),1,"rejected"]],m="pending",_={state:function(){return m},always:function(){return S.done(arguments).fail(arguments),this},catch:function(A){return _.then(null,A)},pipe:function(){var A=arguments;return f.Deferred(function(R){f.each(h,function(k,z){var j=M(A[z[4]])&&A[z[4]];S[z[1]](function(){var ie=j&&j.apply(this,arguments);ie&&M(ie.promise)?ie.promise().progress(R.notify).done(R.resolve).fail(R.reject):R[z[0]+"With"](this,j?[ie]:arguments)})}),A=null}).promise()},then:function(A,R,k){var z=0;function j(ie,pe,Q,re){return function(){var Be=this,Ye=arguments,Ve=function(){var on,Un;if(!(ie<z)){if((on=Q.apply(Be,Ye))===pe.promise())throw new TypeError("Thenable self-resolution");Un=on&&(typeof on=="object"||typeof on=="function")&&on.then,M(Un)?re?Un.call(on,j(z,pe,Le,re),j(z,pe,ze,re)):(z++,Un.call(on,j(z,pe,Le,re),j(z,pe,ze,re),j(z,pe,Le,pe.notifyWith))):(Q!==Le&&(Be=void 0,Ye=[on]),(re||pe.resolveWith)(Be,Ye))}},Kt=re?Ve:function(){try{Ve()}catch(on){f.Deferred.exceptionHook&&f.Deferred.exceptionHook(on,Kt.stackTrace),z<=ie+1&&(Q!==ze&&(Be=void 0,Ye=[on]),pe.rejectWith(Be,Ye))}};ie?Kt():(f.Deferred.getStackHook&&(Kt.stackTrace=f.Deferred.getStackHook()),r.setTimeout(Kt))}}return f.Deferred(function(ie){h[0][3].add(j(0,ie,M(k)?k:Le,ie.notifyWith)),h[1][3].add(j(0,ie,M(A)?A:Le)),h[2][3].add(j(0,ie,M(R)?R:ze))}).promise()},promise:function(A){return A!=null?f.extend(A,_):_}},S={};return f.each(h,function(A,R){var k=R[2],z=R[5];_[R[1]]=k.add,z&&k.add(function(){m=z},h[3-A][2].disable,h[3-A][3].disable,h[0][2].lock,h[0][3].lock),k.add(R[3].fire),S[R[0]]=function(){return S[R[0]+"With"](this===S?void 0:this,arguments),this},S[R[0]+"With"]=k.fireWith}),_.promise(S),o&&o.call(S,S),S},when:function(o){var h=arguments.length,m=h,_=Array(m),S=i.call(arguments),A=f.Deferred(),R=function(k){return function(z){_[k]=this,S[k]=1<arguments.length?i.call(arguments):z,--h||A.resolveWith(_,S)}};if(h<=1&&(xt(o,A.done(R(m)).resolve,A.reject,!h),A.state()==="pending"||M(S[m]&&S[m].then)))return A.then();for(;m--;)xt(S[m],R(m),A.reject);return A.promise()}});var bt=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;f.Deferred.exceptionHook=function(o,h){r.console&&r.console.warn&&o&&bt.test(o.name)&&r.console.warn("jQuery.Deferred exception: "+o.message,o.stack,h)},f.readyException=function(o){r.setTimeout(function(){throw o})};var ue=f.Deferred();function Se(){x.removeEventListener("DOMContentLoaded",Se),r.removeEventListener("load",Se),f.ready()}f.fn.ready=function(o){return ue.then(o).catch(function(h){f.readyException(h)}),this},f.extend({isReady:!1,readyWait:1,ready:function(o){(o===!0?--f.readyWait:f.isReady)||(f.isReady=!0)!==o&&0<--f.readyWait||ue.resolveWith(x,[f])}}),f.ready.then=ue.then,x.readyState==="complete"||x.readyState!=="loading"&&!x.documentElement.doScroll?r.setTimeout(f.ready):(x.addEventListener("DOMContentLoaded",Se),r.addEventListener("load",Se));var De=function(o,h,m,_,S,A,R){var k=0,z=o.length,j=m==null;if(D(m)==="object")for(k in S=!0,m)De(o,h,k,m[k],!0,A,R);else if(_!==void 0&&(S=!0,M(_)||(R=!0),j&&(R?(h.call(o,_),h=null):(j=h,h=function(ie,pe,Q){return j.call(f(ie),Q)})),h))for(;k<z;k++)h(o[k],m,R?_:_.call(o[k],k,h(o[k],m)));return S?o:j?h.call(o):z?h(o[0],m):A},ke=/^-ms-/,ht=/-([a-z])/g;function pt(o,h){return h.toUpperCase()}function Qe(o){return o.replace(ke,"ms-").replace(ht,pt)}var Lt=function(o){return o.nodeType===1||o.nodeType===9||!+o.nodeType};function H(){this.expando=f.expando+H.uid++}H.uid=1,H.prototype={cache:function(o){var h=o[this.expando];return h||(h={},Lt(o)&&(o.nodeType?o[this.expando]=h:Object.defineProperty(o,this.expando,{value:h,configurable:!0}))),h},set:function(o,h,m){var _,S=this.cache(o);if(typeof h=="string")S[Qe(h)]=m;else for(_ in h)S[Qe(_)]=h[_];return S},get:function(o,h){return h===void 0?this.cache(o):o[this.expando]&&o[this.expando][Qe(h)]},access:function(o,h,m){return h===void 0||h&&typeof h=="string"&&m===void 0?this.get(o,h):(this.set(o,h,m),m!==void 0?m:h)},remove:function(o,h){var m,_=o[this.expando];if(_!==void 0){if(h!==void 0)for(m=(h=Array.isArray(h)?h.map(Qe):(h=Qe(h))in _?[h]:h.match(Ae)||[]).length;m--;)delete _[h[m]];(h===void 0||f.isEmptyObject(_))&&(o.nodeType?o[this.expando]=void 0:delete o[this.expando])}},hasData:function(o){var h=o[this.expando];return h!==void 0&&!f.isEmptyObject(h)}};var Ie=new H,lt=new H,At=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,je=/[A-Z]/g;function Wt(o,h,m){var _,S;if(m===void 0&&o.nodeType===1)if(_="data-"+h.replace(je,"-$&").toLowerCase(),typeof(m=o.getAttribute(_))=="string"){try{m=(S=m)==="true"||S!=="false"&&(S==="null"?null:S===+S+""?+S:At.test(S)?JSON.parse(S):S)}catch{}lt.set(o,h,m)}else m=void 0;return m}f.extend({hasData:function(o){return lt.hasData(o)||Ie.hasData(o)},data:function(o,h,m){return lt.access(o,h,m)},removeData:function(o,h){lt.remove(o,h)},_data:function(o,h,m){return Ie.access(o,h,m)},_removeData:function(o,h){Ie.remove(o,h)}}),f.fn.extend({data:function(o,h){var m,_,S,A=this[0],R=A&&A.attributes;if(o===void 0){if(this.length&&(S=lt.get(A),A.nodeType===1&&!Ie.get(A,"hasDataAttrs"))){for(m=R.length;m--;)R[m]&&(_=R[m].name).indexOf("data-")===0&&(_=Qe(_.slice(5)),Wt(A,_,S[_]));Ie.set(A,"hasDataAttrs",!0)}return S}return typeof o=="object"?this.each(function(){lt.set(this,o)}):De(this,function(k){var z;if(A&&k===void 0)return(z=lt.get(A,o))!==void 0||(z=Wt(A,o))!==void 0?z:void 0;this.each(function(){lt.set(this,o,k)})},null,h,1<arguments.length,null,!0)},removeData:function(o){return this.each(function(){lt.remove(this,o)})}}),f.extend({queue:function(o,h,m){var _;if(o)return h=(h||"fx")+"queue",_=Ie.get(o,h),m&&(!_||Array.isArray(m)?_=Ie.access(o,h,f.makeArray(m)):_.push(m)),_||[]},dequeue:function(o,h){h=h||"fx";var m=f.queue(o,h),_=m.length,S=m.shift(),A=f._queueHooks(o,h);S==="inprogress"&&(S=m.shift(),_--),S&&(h==="fx"&&m.unshift("inprogress"),delete A.stop,S.call(o,function(){f.dequeue(o,h)},A)),!_&&A&&A.empty.fire()},_queueHooks:function(o,h){var m=h+"queueHooks";return Ie.get(o,m)||Ie.access(o,m,{empty:f.Callbacks("once memory").add(function(){Ie.remove(o,[h+"queue",m])})})}}),f.fn.extend({queue:function(o,h){var m=2;return typeof o!="string"&&(h=o,o="fx",m--),arguments.length<m?f.queue(this[0],o):h===void 0?this:this.each(function(){var _=f.queue(this,o,h);f._queueHooks(this,o),o==="fx"&&_[0]!=="inprogress"&&f.dequeue(this,o)})},dequeue:function(o){return this.each(function(){f.dequeue(this,o)})},clearQueue:function(o){return this.queue(o||"fx",[])},promise:function(o,h){var m,_=1,S=f.Deferred(),A=this,R=this.length,k=function(){--_||S.resolveWith(A,[A])};for(typeof o!="string"&&(h=o,o=void 0),o=o||"fx";R--;)(m=Ie.get(A[R],o+"queueHooks"))&&m.empty&&(_++,m.empty.add(k));return k(),S.promise(h)}});var it=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,et=new RegExp("^(?:([+-])=|)("+it+")([a-z%]*)$","i"),O=["Top","Right","Bottom","Left"],w=x.documentElement,ee=function(o){return f.contains(o.ownerDocument,o)},ve={composed:!0};w.getRootNode&&(ee=function(o){return f.contains(o.ownerDocument,o)||o.getRootNode(ve)===o.ownerDocument});var ye=function(o,h){return(o=h||o).style.display==="none"||o.style.display===""&&ee(o)&&f.css(o,"display")==="none"};function ge(o,h,m,_){var S,A,R=20,k=_?function(){return _.cur()}:function(){return f.css(o,h,"")},z=k(),j=m&&m[3]||(f.cssNumber[h]?"":"px"),ie=o.nodeType&&(f.cssNumber[h]||j!=="px"&&+z)&&et.exec(f.css(o,h));if(ie&&ie[3]!==j){for(z/=2,j=j||ie[3],ie=+z||1;R--;)f.style(o,h,ie+j),(1-A)*(1-(A=k()/z||.5))<=0&&(R=0),ie/=A;ie*=2,f.style(o,h,ie+j),m=m||[]}return m&&(ie=+ie||+z||0,S=m[1]?ie+(m[1]+1)*m[2]:+m[2],_&&(_.unit=j,_.start=ie,_.end=S)),S}var Ke={};function be(o,h){for(var m,_,S,A,R,k,z,j=[],ie=0,pe=o.length;ie<pe;ie++)(_=o[ie]).style&&(m=_.style.display,h?(m==="none"&&(j[ie]=Ie.get(_,"display")||null,j[ie]||(_.style.display="")),_.style.display===""&&ye(_)&&(j[ie]=(z=R=A=void 0,R=(S=_).ownerDocument,k=S.nodeName,(z=Ke[k])||(A=R.body.appendChild(R.createElement(k)),z=f.css(A,"display"),A.parentNode.removeChild(A),z==="none"&&(z="block"),Ke[k]=z)))):m!=="none"&&(j[ie]="none",Ie.set(_,"display",m)));for(ie=0;ie<pe;ie++)j[ie]!=null&&(o[ie].style.display=j[ie]);return o}f.fn.extend({show:function(){return be(this,!0)},hide:function(){return be(this)},toggle:function(o){return typeof o=="boolean"?o?this.show():this.hide():this.each(function(){ye(this)?f(this).show():f(this).hide()})}});var Ce,rt,Te=/^(?:checkbox|radio)$/i,Fe=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,yt=/^$|^module$|\/(?:java|ecma)script/i;Ce=x.createDocumentFragment().appendChild(x.createElement("div")),(rt=x.createElement("input")).setAttribute("type","radio"),rt.setAttribute("checked","checked"),rt.setAttribute("name","t"),Ce.appendChild(rt),v.checkClone=Ce.cloneNode(!0).cloneNode(!0).lastChild.checked,Ce.innerHTML="<textarea>x</textarea>",v.noCloneChecked=!!Ce.cloneNode(!0).lastChild.defaultValue,Ce.innerHTML="<option></option>",v.option=!!Ce.lastChild;var We={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function Re(o,h){var m;return m=typeof o.getElementsByTagName<"u"?o.getElementsByTagName(h||"*"):typeof o.querySelectorAll<"u"?o.querySelectorAll(h||"*"):[],h===void 0||h&&G(o,h)?f.merge([o],m):m}function tt(o,h){for(var m=0,_=o.length;m<_;m++)Ie.set(o[m],"globalEval",!h||Ie.get(h[m],"globalEval"))}We.tbody=We.tfoot=We.colgroup=We.caption=We.thead,We.th=We.td,v.option||(We.optgroup=We.option=[1,"<select multiple='multiple'>","</select>"]);var ct=/<|&#?\w+;/;function kt(o,h,m,_,S){for(var A,R,k,z,j,ie,pe=h.createDocumentFragment(),Q=[],re=0,Be=o.length;re<Be;re++)if((A=o[re])||A===0)if(D(A)==="object")f.merge(Q,A.nodeType?[A]:A);else if(ct.test(A)){for(R=R||pe.appendChild(h.createElement("div")),k=(Fe.exec(A)||["",""])[1].toLowerCase(),z=We[k]||We._default,R.innerHTML=z[1]+f.htmlPrefilter(A)+z[2],ie=z[0];ie--;)R=R.lastChild;f.merge(Q,R.childNodes),(R=pe.firstChild).textContent=""}else Q.push(h.createTextNode(A));for(pe.textContent="",re=0;A=Q[re++];)if(_&&-1<f.inArray(A,_))S&&S.push(A);else if(j=ee(A),R=Re(pe.appendChild(A),"script"),j&&tt(R),m)for(ie=0;A=R[ie++];)yt.test(A.type||"")&&m.push(A);return pe}var T=/^([^.]*)(?:\.(.+)|)/;function Z(){return!0}function J(){return!1}function oe(o,h){return o===function(){try{return x.activeElement}catch{}}()==(h==="focus")}function xe(o,h,m,_,S,A){var R,k;if(typeof h=="object"){for(k in typeof m!="string"&&(_=_||m,m=void 0),h)xe(o,k,m,_,h[k],A);return o}if(_==null&&S==null?(S=m,_=m=void 0):S==null&&(typeof m=="string"?(S=_,_=void 0):(S=_,_=m,m=void 0)),S===!1)S=J;else if(!S)return o;return A===1&&(R=S,(S=function(z){return f().off(z),R.apply(this,arguments)}).guid=R.guid||(R.guid=f.guid++)),o.each(function(){f.event.add(this,h,S,_,m)})}function Ge(o,h,m){m?(Ie.set(o,h,!1),f.event.add(o,h,{namespace:!1,handler:function(_){var S,A,R=Ie.get(this,h);if(1&_.isTrigger&&this[h]){if(R.length)(f.event.special[h]||{}).delegateType&&_.stopPropagation();else if(R=i.call(arguments),Ie.set(this,h,R),S=m(this,h),this[h](),R!==(A=Ie.get(this,h))||S?Ie.set(this,h,!1):A={},R!==A)return _.stopImmediatePropagation(),_.preventDefault(),A&&A.value}else R.length&&(Ie.set(this,h,{value:f.event.trigger(f.extend(R[0],f.Event.prototype),R.slice(1),this)}),_.stopImmediatePropagation())}})):Ie.get(o,h)===void 0&&f.event.add(o,h,Z)}f.event={global:{},add:function(o,h,m,_,S){var A,R,k,z,j,ie,pe,Q,re,Be,Ye,Ve=Ie.get(o);if(Lt(o))for(m.handler&&(m=(A=m).handler,S=A.selector),S&&f.find.matchesSelector(w,S),m.guid||(m.guid=f.guid++),(z=Ve.events)||(z=Ve.events=Object.create(null)),(R=Ve.handle)||(R=Ve.handle=function(Kt){return typeof f<"u"&&f.event.triggered!==Kt.type?f.event.dispatch.apply(o,arguments):void 0}),j=(h=(h||"").match(Ae)||[""]).length;j--;)re=Ye=(k=T.exec(h[j])||[])[1],Be=(k[2]||"").split(".").sort(),re&&(pe=f.event.special[re]||{},re=(S?pe.delegateType:pe.bindType)||re,pe=f.event.special[re]||{},ie=f.extend({type:re,origType:Ye,data:_,handler:m,guid:m.guid,selector:S,needsContext:S&&f.expr.match.needsContext.test(S),namespace:Be.join(".")},A),(Q=z[re])||((Q=z[re]=[]).delegateCount=0,pe.setup&&pe.setup.call(o,_,Be,R)!==!1||o.addEventListener&&o.addEventListener(re,R)),pe.add&&(pe.add.call(o,ie),ie.handler.guid||(ie.handler.guid=m.guid)),S?Q.splice(Q.delegateCount++,0,ie):Q.push(ie),f.event.global[re]=!0)},remove:function(o,h,m,_,S){var A,R,k,z,j,ie,pe,Q,re,Be,Ye,Ve=Ie.hasData(o)&&Ie.get(o);if(Ve&&(z=Ve.events)){for(j=(h=(h||"").match(Ae)||[""]).length;j--;)if(re=Ye=(k=T.exec(h[j])||[])[1],Be=(k[2]||"").split(".").sort(),re){for(pe=f.event.special[re]||{},Q=z[re=(_?pe.delegateType:pe.bindType)||re]||[],k=k[2]&&new RegExp("(^|\\.)"+Be.join("\\.(?:.*\\.|)")+"(\\.|$)"),R=A=Q.length;A--;)ie=Q[A],!S&&Ye!==ie.origType||m&&m.guid!==ie.guid||k&&!k.test(ie.namespace)||_&&_!==ie.selector&&(_!=="**"||!ie.selector)||(Q.splice(A,1),ie.selector&&Q.delegateCount--,pe.remove&&pe.remove.call(o,ie));R&&!Q.length&&(pe.teardown&&pe.teardown.call(o,Be,Ve.handle)!==!1||f.removeEvent(o,re,Ve.handle),delete z[re])}else for(re in z)f.event.remove(o,re+h[j],m,_,!0);f.isEmptyObject(z)&&Ie.remove(o,"handle events")}},dispatch:function(o){var h,m,_,S,A,R,k=new Array(arguments.length),z=f.event.fix(o),j=(Ie.get(this,"events")||Object.create(null))[z.type]||[],ie=f.event.special[z.type]||{};for(k[0]=z,h=1;h<arguments.length;h++)k[h]=arguments[h];if(z.delegateTarget=this,!ie.preDispatch||ie.preDispatch.call(this,z)!==!1){for(R=f.event.handlers.call(this,z,j),h=0;(S=R[h++])&&!z.isPropagationStopped();)for(z.currentTarget=S.elem,m=0;(A=S.handlers[m++])&&!z.isImmediatePropagationStopped();)z.rnamespace&&A.namespace!==!1&&!z.rnamespace.test(A.namespace)||(z.handleObj=A,z.data=A.data,(_=((f.event.special[A.origType]||{}).handle||A.handler).apply(S.elem,k))!==void 0&&(z.result=_)===!1&&(z.preventDefault(),z.stopPropagation()));return ie.postDispatch&&ie.postDispatch.call(this,z),z.result}},handlers:function(o,h){var m,_,S,A,R,k=[],z=h.delegateCount,j=o.target;if(z&&j.nodeType&&!(o.type==="click"&&1<=o.button)){for(;j!==this;j=j.parentNode||this)if(j.nodeType===1&&(o.type!=="click"||j.disabled!==!0)){for(A=[],R={},m=0;m<z;m++)R[S=(_=h[m]).selector+" "]===void 0&&(R[S]=_.needsContext?-1<f(S,this).index(j):f.find(S,this,null,[j]).length),R[S]&&A.push(_);A.length&&k.push({elem:j,handlers:A})}}return j=this,z<h.length&&k.push({elem:j,handlers:h.slice(z)}),k},addProp:function(o,h){Object.defineProperty(f.Event.prototype,o,{enumerable:!0,configurable:!0,get:M(h)?function(){if(this.originalEvent)return h(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[o]},set:function(m){Object.defineProperty(this,o,{enumerable:!0,configurable:!0,writable:!0,value:m})}})},fix:function(o){return o[f.expando]?o:new f.Event(o)},special:{load:{noBubble:!0},click:{setup:function(o){var h=this||o;return Te.test(h.type)&&h.click&&G(h,"input")&&Ge(h,"click",Z),!1},trigger:function(o){var h=this||o;return Te.test(h.type)&&h.click&&G(h,"input")&&Ge(h,"click"),!0},_default:function(o){var h=o.target;return Te.test(h.type)&&h.click&&G(h,"input")&&Ie.get(h,"click")||G(h,"a")}},beforeunload:{postDispatch:function(o){o.result!==void 0&&o.originalEvent&&(o.originalEvent.returnValue=o.result)}}}},f.removeEvent=function(o,h,m){o.removeEventListener&&o.removeEventListener(h,m)},f.Event=function(o,h){if(!(this instanceof f.Event))return new f.Event(o,h);o&&o.type?(this.originalEvent=o,this.type=o.type,this.isDefaultPrevented=o.defaultPrevented||o.defaultPrevented===void 0&&o.returnValue===!1?Z:J,this.target=o.target&&o.target.nodeType===3?o.target.parentNode:o.target,this.currentTarget=o.currentTarget,this.relatedTarget=o.relatedTarget):this.type=o,h&&f.extend(this,h),this.timeStamp=o&&o.timeStamp||Date.now(),this[f.expando]=!0},f.Event.prototype={constructor:f.Event,isDefaultPrevented:J,isPropagationStopped:J,isImmediatePropagationStopped:J,isSimulated:!1,preventDefault:function(){var o=this.originalEvent;this.isDefaultPrevented=Z,o&&!this.isSimulated&&o.preventDefault()},stopPropagation:function(){var o=this.originalEvent;this.isPropagationStopped=Z,o&&!this.isSimulated&&o.stopPropagation()},stopImmediatePropagation:function(){var o=this.originalEvent;this.isImmediatePropagationStopped=Z,o&&!this.isSimulated&&o.stopImmediatePropagation(),this.stopPropagation()}},f.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},f.event.addProp),f.each({focus:"focusin",blur:"focusout"},function(o,h){f.event.special[o]={setup:function(){return Ge(this,o,oe),!1},trigger:function(){return Ge(this,o),!0},_default:function(){return!0},delegateType:h}}),f.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(o,h){f.event.special[o]={delegateType:h,bindType:h,handle:function(m){var _,S=m.relatedTarget,A=m.handleObj;return S&&(S===this||f.contains(this,S))||(m.type=A.origType,_=A.handler.apply(this,arguments),m.type=h),_}}}),f.fn.extend({on:function(o,h,m,_){return xe(this,o,h,m,_)},one:function(o,h,m,_){return xe(this,o,h,m,_,1)},off:function(o,h,m){var _,S;if(o&&o.preventDefault&&o.handleObj)return _=o.handleObj,f(o.delegateTarget).off(_.namespace?_.origType+"."+_.namespace:_.origType,_.selector,_.handler),this;if(typeof o=="object"){for(S in o)this.off(S,h,o[S]);return this}return h!==!1&&typeof h!="function"||(m=h,h=void 0),m===!1&&(m=J),this.each(function(){f.event.remove(this,o,m,h)})}});var st=/<script|<style|<link/i,Yt=/checked\s*(?:[^=]|=\s*.checked.)/i,Qt=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function St(o,h){return G(o,"table")&&G(h.nodeType!==11?h:h.firstChild,"tr")&&f(o).children("tbody")[0]||o}function en(o){return o.type=(o.getAttribute("type")!==null)+"/"+o.type,o}function Jt(o){return(o.type||"").slice(0,5)==="true/"?o.type=o.type.slice(5):o.removeAttribute("type"),o}function $n(o,h){var m,_,S,A,R,k;if(h.nodeType===1){if(Ie.hasData(o)&&(k=Ie.get(o).events))for(S in Ie.remove(h,"handle events"),k)for(m=0,_=k[S].length;m<_;m++)f.event.add(h,S,k[S][m]);lt.hasData(o)&&(A=lt.access(o),R=f.extend({},A),lt.set(h,R))}}function Xt(o,h,m,_){h=s(h);var S,A,R,k,z,j,ie=0,pe=o.length,Q=pe-1,re=h[0],Be=M(re);if(Be||1<pe&&typeof re=="string"&&!v.checkClone&&Yt.test(re))return o.each(function(Ye){var Ve=o.eq(Ye);Be&&(h[0]=re.call(this,Ye,Ve.html())),Xt(Ve,h,m,_)});if(pe&&(A=(S=kt(h,o[0].ownerDocument,!1,o,_)).firstChild,S.childNodes.length===1&&(S=A),A||_)){for(k=(R=f.map(Re(S,"script"),en)).length;ie<pe;ie++)z=S,ie!==Q&&(z=f.clone(z,!0,!0),k&&f.merge(R,Re(z,"script"))),m.call(o[ie],z,ie);if(k)for(j=R[R.length-1].ownerDocument,f.map(R,Jt),ie=0;ie<k;ie++)z=R[ie],yt.test(z.type||"")&&!Ie.access(z,"globalEval")&&f.contains(j,z)&&(z.src&&(z.type||"").toLowerCase()!=="module"?f._evalUrl&&!z.noModule&&f._evalUrl(z.src,{nonce:z.nonce||z.getAttribute("nonce")},j):N(z.textContent.replace(Qt,""),z,j))}return o}function Wn(o,h,m){for(var _,S=h?f.filter(h,o):o,A=0;(_=S[A])!=null;A++)m||_.nodeType!==1||f.cleanData(Re(_)),_.parentNode&&(m&&ee(_)&&tt(Re(_,"script")),_.parentNode.removeChild(_));return o}f.extend({htmlPrefilter:function(o){return o},clone:function(o,h,m){var _,S,A,R,k,z,j,ie=o.cloneNode(!0),pe=ee(o);if(!(v.noCloneChecked||o.nodeType!==1&&o.nodeType!==11||f.isXMLDoc(o)))for(R=Re(ie),_=0,S=(A=Re(o)).length;_<S;_++)k=A[_],z=R[_],(j=z.nodeName.toLowerCase())==="input"&&Te.test(k.type)?z.checked=k.checked:j!=="input"&&j!=="textarea"||(z.defaultValue=k.defaultValue);if(h)if(m)for(A=A||Re(o),R=R||Re(ie),_=0,S=A.length;_<S;_++)$n(A[_],R[_]);else $n(o,ie);return 0<(R=Re(ie,"script")).length&&tt(R,!pe&&Re(o,"script")),ie},cleanData:function(o){for(var h,m,_,S=f.event.special,A=0;(m=o[A])!==void 0;A++)if(Lt(m)){if(h=m[Ie.expando]){if(h.events)for(_ in h.events)S[_]?f.event.remove(m,_):f.removeEvent(m,_,h.handle);m[Ie.expando]=void 0}m[lt.expando]&&(m[lt.expando]=void 0)}}}),f.fn.extend({detach:function(o){return Wn(this,o,!0)},remove:function(o){return Wn(this,o)},text:function(o){return De(this,function(h){return h===void 0?f.text(this):this.empty().each(function(){this.nodeType!==1&&this.nodeType!==11&&this.nodeType!==9||(this.textContent=h)})},null,o,arguments.length)},append:function(){return Xt(this,arguments,function(o){this.nodeType!==1&&this.nodeType!==11&&this.nodeType!==9||St(this,o).appendChild(o)})},prepend:function(){return Xt(this,arguments,function(o){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var h=St(this,o);h.insertBefore(o,h.firstChild)}})},before:function(){return Xt(this,arguments,function(o){this.parentNode&&this.parentNode.insertBefore(o,this)})},after:function(){return Xt(this,arguments,function(o){this.parentNode&&this.parentNode.insertBefore(o,this.nextSibling)})},empty:function(){for(var o,h=0;(o=this[h])!=null;h++)o.nodeType===1&&(f.cleanData(Re(o,!1)),o.textContent="");return this},clone:function(o,h){return o=o!=null&&o,h=h??o,this.map(function(){return f.clone(this,o,h)})},html:function(o){return De(this,function(h){var m=this[0]||{},_=0,S=this.length;if(h===void 0&&m.nodeType===1)return m.innerHTML;if(typeof h=="string"&&!st.test(h)&&!We[(Fe.exec(h)||["",""])[1].toLowerCase()]){h=f.htmlPrefilter(h);try{for(;_<S;_++)(m=this[_]||{}).nodeType===1&&(f.cleanData(Re(m,!1)),m.innerHTML=h);m=0}catch{}}m&&this.empty().append(h)},null,o,arguments.length)},replaceWith:function(){var o=[];return Xt(this,arguments,function(h){var m=this.parentNode;f.inArray(this,o)<0&&(f.cleanData(Re(this)),m&&m.replaceChild(h,this))},o)}}),f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(o,h){f.fn[o]=function(m){for(var _,S=[],A=f(m),R=A.length-1,k=0;k<=R;k++)_=k===R?this:this.clone(!0),f(A[k])[h](_),a.apply(S,_.get());return this.pushStack(S)}});var Zn=new RegExp("^("+it+")(?!px)[a-z%]+$","i"),hi=function(o){var h=o.ownerDocument.defaultView;return h&&h.opener||(h=r),h.getComputedStyle(o)},tr=function(o,h,m){var _,S,A={};for(S in h)A[S]=o.style[S],o.style[S]=h[S];for(S in _=m.call(o),h)o.style[S]=A[S];return _},Gs=new RegExp(O.join("|"),"i");function fi(o,h,m){var _,S,A,R,k=o.style;return(m=m||hi(o))&&((R=m.getPropertyValue(h)||m[h])!==""||ee(o)||(R=f.style(o,h)),!v.pixelBoxStyles()&&Zn.test(R)&&Gs.test(h)&&(_=k.width,S=k.minWidth,A=k.maxWidth,k.minWidth=k.maxWidth=k.width=R,R=m.width,k.width=_,k.minWidth=S,k.maxWidth=A)),R!==void 0?R+"":R}function hs(o,h){return{get:function(){if(!o())return(this.get=h).apply(this,arguments);delete this.get}}}(function(){function o(){if(j){z.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",j.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",w.appendChild(z).appendChild(j);var ie=r.getComputedStyle(j);m=ie.top!=="1%",k=h(ie.marginLeft)===12,j.style.right="60%",A=h(ie.right)===36,_=h(ie.width)===36,j.style.position="absolute",S=h(j.offsetWidth/3)===12,w.removeChild(z),j=null}}function h(ie){return Math.round(parseFloat(ie))}var m,_,S,A,R,k,z=x.createElement("div"),j=x.createElement("div");j.style&&(j.style.backgroundClip="content-box",j.cloneNode(!0).style.backgroundClip="",v.clearCloneStyle=j.style.backgroundClip==="content-box",f.extend(v,{boxSizingReliable:function(){return o(),_},pixelBoxStyles:function(){return o(),A},pixelPosition:function(){return o(),m},reliableMarginLeft:function(){return o(),k},scrollboxSize:function(){return o(),S},reliableTrDimensions:function(){var ie,pe,Q,re;return R==null&&(ie=x.createElement("table"),pe=x.createElement("tr"),Q=x.createElement("div"),ie.style.cssText="position:absolute;left:-11111px;border-collapse:separate",pe.style.cssText="border:1px solid",pe.style.height="1px",Q.style.height="9px",Q.style.display="block",w.appendChild(ie).appendChild(pe).appendChild(Q),re=r.getComputedStyle(pe),R=parseInt(re.height,10)+parseInt(re.borderTopWidth,10)+parseInt(re.borderBottomWidth,10)===pe.offsetHeight,w.removeChild(ie)),R}}))})();var fs=["Webkit","Moz","ms"],Ws=x.createElement("div").style,Xs={};function ds(o){var h=f.cssProps[o]||Xs[o];return h||(o in Ws?o:Xs[o]=function(m){for(var _=m[0].toUpperCase()+m.slice(1),S=fs.length;S--;)if((m=fs[S]+_)in Ws)return m}(o)||o)}var P=/^(none|table(?!-c[ea]).+)/,q=/^--/,te={position:"absolute",visibility:"hidden",display:"block"},ne={letterSpacing:"0",fontWeight:"400"};function Y(o,h,m){var _=et.exec(h);return _?Math.max(0,_[2]-(m||0))+(_[3]||"px"):h}function Ee(o,h,m,_,S,A){var R=h==="width"?1:0,k=0,z=0;if(m===(_?"border":"content"))return 0;for(;R<4;R+=2)m==="margin"&&(z+=f.css(o,m+O[R],!0,S)),_?(m==="content"&&(z-=f.css(o,"padding"+O[R],!0,S)),m!=="margin"&&(z-=f.css(o,"border"+O[R]+"Width",!0,S))):(z+=f.css(o,"padding"+O[R],!0,S),m!=="padding"?z+=f.css(o,"border"+O[R]+"Width",!0,S):k+=f.css(o,"border"+O[R]+"Width",!0,S));return!_&&0<=A&&(z+=Math.max(0,Math.ceil(o["offset"+h[0].toUpperCase()+h.slice(1)]-A-z-k-.5))||0),z}function Ue(o,h,m){var _=hi(o),S=(!v.boxSizingReliable()||m)&&f.css(o,"boxSizing",!1,_)==="border-box",A=S,R=fi(o,h,_),k="offset"+h[0].toUpperCase()+h.slice(1);if(Zn.test(R)){if(!m)return R;R="auto"}return(!v.boxSizingReliable()&&S||!v.reliableTrDimensions()&&G(o,"tr")||R==="auto"||!parseFloat(R)&&f.css(o,"display",!1,_)==="inline")&&o.getClientRects().length&&(S=f.css(o,"boxSizing",!1,_)==="border-box",(A=k in o)&&(R=o[k])),(R=parseFloat(R)||0)+Ee(o,h,m||(S?"border":"content"),A,_,R)+"px"}function Ne(o,h,m,_,S){return new Ne.prototype.init(o,h,m,_,S)}f.extend({cssHooks:{opacity:{get:function(o,h){if(h){var m=fi(o,"opacity");return m===""?"1":m}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(o,h,m,_){if(o&&o.nodeType!==3&&o.nodeType!==8&&o.style){var S,A,R,k=Qe(h),z=q.test(h),j=o.style;if(z||(h=ds(k)),R=f.cssHooks[h]||f.cssHooks[k],m===void 0)return R&&"get"in R&&(S=R.get(o,!1,_))!==void 0?S:j[h];(A=typeof m)=="string"&&(S=et.exec(m))&&S[1]&&(m=ge(o,h,S),A="number"),m!=null&&m==m&&(A!=="number"||z||(m+=S&&S[3]||(f.cssNumber[k]?"":"px")),v.clearCloneStyle||m!==""||h.indexOf("background")!==0||(j[h]="inherit"),R&&"set"in R&&(m=R.set(o,m,_))===void 0||(z?j.setProperty(h,m):j[h]=m))}},css:function(o,h,m,_){var S,A,R,k=Qe(h);return q.test(h)||(h=ds(k)),(R=f.cssHooks[h]||f.cssHooks[k])&&"get"in R&&(S=R.get(o,!0,m)),S===void 0&&(S=fi(o,h,_)),S==="normal"&&h in ne&&(S=ne[h]),m===""||m?(A=parseFloat(S),m===!0||isFinite(A)?A||0:S):S}}),f.each(["height","width"],function(o,h){f.cssHooks[h]={get:function(m,_,S){if(_)return!P.test(f.css(m,"display"))||m.getClientRects().length&&m.getBoundingClientRect().width?Ue(m,h,S):tr(m,te,function(){return Ue(m,h,S)})},set:function(m,_,S){var A,R=hi(m),k=!v.scrollboxSize()&&R.position==="absolute",z=(k||S)&&f.css(m,"boxSizing",!1,R)==="border-box",j=S?Ee(m,h,S,z,R):0;return z&&k&&(j-=Math.ceil(m["offset"+h[0].toUpperCase()+h.slice(1)]-parseFloat(R[h])-Ee(m,h,"border",!1,R)-.5)),j&&(A=et.exec(_))&&(A[3]||"px")!=="px"&&(m.style[h]=_,_=f.css(m,h)),Y(0,_,j)}}}),f.cssHooks.marginLeft=hs(v.reliableMarginLeft,function(o,h){if(h)return(parseFloat(fi(o,"marginLeft"))||o.getBoundingClientRect().left-tr(o,{marginLeft:0},function(){return o.getBoundingClientRect().left}))+"px"}),f.each({margin:"",padding:"",border:"Width"},function(o,h){f.cssHooks[o+h]={expand:function(m){for(var _=0,S={},A=typeof m=="string"?m.split(" "):[m];_<4;_++)S[o+O[_]+h]=A[_]||A[_-2]||A[0];return S}},o!=="margin"&&(f.cssHooks[o+h].set=Y)}),f.fn.extend({css:function(o,h){return De(this,function(m,_,S){var A,R,k={},z=0;if(Array.isArray(_)){for(A=hi(m),R=_.length;z<R;z++)k[_[z]]=f.css(m,_[z],!1,A);return k}return S!==void 0?f.style(m,_,S):f.css(m,_)},o,h,1<arguments.length)}}),((f.Tween=Ne).prototype={constructor:Ne,init:function(o,h,m,_,S,A){this.elem=o,this.prop=m,this.easing=S||f.easing._default,this.options=h,this.start=this.now=this.cur(),this.end=_,this.unit=A||(f.cssNumber[m]?"":"px")},cur:function(){var o=Ne.propHooks[this.prop];return o&&o.get?o.get(this):Ne.propHooks._default.get(this)},run:function(o){var h,m=Ne.propHooks[this.prop];return this.options.duration?this.pos=h=f.easing[this.easing](o,this.options.duration*o,0,1,this.options.duration):this.pos=h=o,this.now=(this.end-this.start)*h+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),m&&m.set?m.set(this):Ne.propHooks._default.set(this),this}}).init.prototype=Ne.prototype,(Ne.propHooks={_default:{get:function(o){var h;return o.elem.nodeType!==1||o.elem[o.prop]!=null&&o.elem.style[o.prop]==null?o.elem[o.prop]:(h=f.css(o.elem,o.prop,""))&&h!=="auto"?h:0},set:function(o){f.fx.step[o.prop]?f.fx.step[o.prop](o):o.elem.nodeType!==1||!f.cssHooks[o.prop]&&o.elem.style[ds(o.prop)]==null?o.elem[o.prop]=o.now:f.style(o.elem,o.prop,o.now+o.unit)}}}).scrollTop=Ne.propHooks.scrollLeft={set:function(o){o.elem.nodeType&&o.elem.parentNode&&(o.elem[o.prop]=o.now)}},f.easing={linear:function(o){return o},swing:function(o){return .5-Math.cos(o*Math.PI)/2},_default:"swing"},f.fx=Ne.prototype.init,f.fx.step={};var He,Je,$e,Ze,Pt=/^(?:toggle|show|hide)$/,jt=/queueHooks$/;function Vt(){Je&&(x.hidden===!1&&r.requestAnimationFrame?r.requestAnimationFrame(Vt):r.setTimeout(Vt,f.fx.interval),f.fx.tick())}function _n(){return r.setTimeout(function(){He=void 0}),He=Date.now()}function Tt(o,h){var m,_=0,S={height:o};for(h=h?1:0;_<4;_+=2-h)S["margin"+(m=O[_])]=S["padding"+m]=o;return h&&(S.opacity=S.width=o),S}function qe(o,h,m){for(var _,S=(It.tweeners[h]||[]).concat(It.tweeners["*"]),A=0,R=S.length;A<R;A++)if(_=S[A].call(m,h,o))return _}function It(o,h,m){var _,S,A=0,R=It.prefilters.length,k=f.Deferred().always(function(){delete z.elem}),z=function(){if(S)return!1;for(var pe=He||_n(),Q=Math.max(0,j.startTime+j.duration-pe),re=1-(Q/j.duration||0),Be=0,Ye=j.tweens.length;Be<Ye;Be++)j.tweens[Be].run(re);return k.notifyWith(o,[j,re,Q]),re<1&&Ye?Q:(Ye||k.notifyWith(o,[j,1,0]),k.resolveWith(o,[j]),!1)},j=k.promise({elem:o,props:f.extend({},h),opts:f.extend(!0,{specialEasing:{},easing:f.easing._default},m),originalProperties:h,originalOptions:m,startTime:He||_n(),duration:m.duration,tweens:[],createTween:function(pe,Q){var re=f.Tween(o,j.opts,pe,Q,j.opts.specialEasing[pe]||j.opts.easing);return j.tweens.push(re),re},stop:function(pe){var Q=0,re=pe?j.tweens.length:0;if(S)return this;for(S=!0;Q<re;Q++)j.tweens[Q].run(1);return pe?(k.notifyWith(o,[j,1,0]),k.resolveWith(o,[j,pe])):k.rejectWith(o,[j,pe]),this}}),ie=j.props;for(!function(pe,Q){var re,Be,Ye,Ve,Kt;for(re in pe)if(Ye=Q[Be=Qe(re)],Ve=pe[re],Array.isArray(Ve)&&(Ye=Ve[1],Ve=pe[re]=Ve[0]),re!==Be&&(pe[Be]=Ve,delete pe[re]),(Kt=f.cssHooks[Be])&&"expand"in Kt)for(re in Ve=Kt.expand(Ve),delete pe[Be],Ve)re in pe||(pe[re]=Ve[re],Q[re]=Ye);else Q[Be]=Ye}(ie,j.opts.specialEasing);A<R;A++)if(_=It.prefilters[A].call(j,o,ie,j.opts))return M(_.stop)&&(f._queueHooks(j.elem,j.opts.queue).stop=_.stop.bind(_)),_;return f.map(ie,qe,j),M(j.opts.start)&&j.opts.start.call(o,j),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always),f.fx.timer(f.extend(z,{elem:o,anim:j,queue:j.opts.queue})),j}f.Animation=f.extend(It,{tweeners:{"*":[function(o,h){var m=this.createTween(o,h);return ge(m.elem,o,et.exec(h),m),m}]},tweener:function(o,h){M(o)?(h=o,o=["*"]):o=o.match(Ae);for(var m,_=0,S=o.length;_<S;_++)m=o[_],It.tweeners[m]=It.tweeners[m]||[],It.tweeners[m].unshift(h)},prefilters:[function(o,h,m){var _,S,A,R,k,z,j,ie,pe="width"in h||"height"in h,Q=this,re={},Be=o.style,Ye=o.nodeType&&ye(o),Ve=Ie.get(o,"fxshow");for(_ in m.queue||((R=f._queueHooks(o,"fx")).unqueued==null&&(R.unqueued=0,k=R.empty.fire,R.empty.fire=function(){R.unqueued||k()}),R.unqueued++,Q.always(function(){Q.always(function(){R.unqueued--,f.queue(o,"fx").length||R.empty.fire()})})),h)if(S=h[_],Pt.test(S)){if(delete h[_],A=A||S==="toggle",S===(Ye?"hide":"show")){if(S!=="show"||!Ve||Ve[_]===void 0)continue;Ye=!0}re[_]=Ve&&Ve[_]||f.style(o,_)}if((z=!f.isEmptyObject(h))||!f.isEmptyObject(re))for(_ in pe&&o.nodeType===1&&(m.overflow=[Be.overflow,Be.overflowX,Be.overflowY],(j=Ve&&Ve.display)==null&&(j=Ie.get(o,"display")),(ie=f.css(o,"display"))==="none"&&(j?ie=j:(be([o],!0),j=o.style.display||j,ie=f.css(o,"display"),be([o]))),(ie==="inline"||ie==="inline-block"&&j!=null)&&f.css(o,"float")==="none"&&(z||(Q.done(function(){Be.display=j}),j==null&&(ie=Be.display,j=ie==="none"?"":ie)),Be.display="inline-block")),m.overflow&&(Be.overflow="hidden",Q.always(function(){Be.overflow=m.overflow[0],Be.overflowX=m.overflow[1],Be.overflowY=m.overflow[2]})),z=!1,re)z||(Ve?"hidden"in Ve&&(Ye=Ve.hidden):Ve=Ie.access(o,"fxshow",{display:j}),A&&(Ve.hidden=!Ye),Ye&&be([o],!0),Q.done(function(){for(_ in Ye||be([o]),Ie.remove(o,"fxshow"),re)f.style(o,_,re[_])})),z=qe(Ye?Ve[_]:0,_,Q),_ in Ve||(Ve[_]=z.start,Ye&&(z.end=z.start,z.start=0))}],prefilter:function(o,h){h?It.prefilters.unshift(o):It.prefilters.push(o)}}),f.speed=function(o,h,m){var _=o&&typeof o=="object"?f.extend({},o):{complete:m||!m&&h||M(o)&&o,duration:o,easing:m&&h||h&&!M(h)&&h};return f.fx.off?_.duration=0:typeof _.duration!="number"&&(_.duration in f.fx.speeds?_.duration=f.fx.speeds[_.duration]:_.duration=f.fx.speeds._default),_.queue!=null&&_.queue!==!0||(_.queue="fx"),_.old=_.complete,_.complete=function(){M(_.old)&&_.old.call(this),_.queue&&f.dequeue(this,_.queue)},_},f.fn.extend({fadeTo:function(o,h,m,_){return this.filter(ye).css("opacity",0).show().end().animate({opacity:h},o,m,_)},animate:function(o,h,m,_){var S=f.isEmptyObject(o),A=f.speed(h,m,_),R=function(){var k=It(this,f.extend({},o),A);(S||Ie.get(this,"finish"))&&k.stop(!0)};return R.finish=R,S||A.queue===!1?this.each(R):this.queue(A.queue,R)},stop:function(o,h,m){var _=function(S){var A=S.stop;delete S.stop,A(m)};return typeof o!="string"&&(m=h,h=o,o=void 0),h&&this.queue(o||"fx",[]),this.each(function(){var S=!0,A=o!=null&&o+"queueHooks",R=f.timers,k=Ie.get(this);if(A)k[A]&&k[A].stop&&_(k[A]);else for(A in k)k[A]&&k[A].stop&&jt.test(A)&&_(k[A]);for(A=R.length;A--;)R[A].elem!==this||o!=null&&R[A].queue!==o||(R[A].anim.stop(m),S=!1,R.splice(A,1));!S&&m||f.dequeue(this,o)})},finish:function(o){return o!==!1&&(o=o||"fx"),this.each(function(){var h,m=Ie.get(this),_=m[o+"queue"],S=m[o+"queueHooks"],A=f.timers,R=_?_.length:0;for(m.finish=!0,f.queue(this,o,[]),S&&S.stop&&S.stop.call(this,!0),h=A.length;h--;)A[h].elem===this&&A[h].queue===o&&(A[h].anim.stop(!0),A.splice(h,1));for(h=0;h<R;h++)_[h]&&_[h].finish&&_[h].finish.call(this);delete m.finish})}}),f.each(["toggle","show","hide"],function(o,h){var m=f.fn[h];f.fn[h]=function(_,S,A){return _==null||typeof _=="boolean"?m.apply(this,arguments):this.animate(Tt(h,!0),_,S,A)}}),f.each({slideDown:Tt("show"),slideUp:Tt("hide"),slideToggle:Tt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(o,h){f.fn[o]=function(m,_,S){return this.animate(h,m,_,S)}}),f.timers=[],f.fx.tick=function(){var o,h=0,m=f.timers;for(He=Date.now();h<m.length;h++)(o=m[h])()||m[h]!==o||m.splice(h--,1);m.length||f.fx.stop(),He=void 0},f.fx.timer=function(o){f.timers.push(o),f.fx.start()},f.fx.interval=13,f.fx.start=function(){Je||(Je=!0,Vt())},f.fx.stop=function(){Je=null},f.fx.speeds={slow:600,fast:200,_default:400},f.fn.delay=function(o,h){return o=f.fx&&f.fx.speeds[o]||o,h=h||"fx",this.queue(h,function(m,_){var S=r.setTimeout(m,o);_.stop=function(){r.clearTimeout(S)}})},$e=x.createElement("input"),Ze=x.createElement("select").appendChild(x.createElement("option")),$e.type="checkbox",v.checkOn=$e.value!=="",v.optSelected=Ze.selected,($e=x.createElement("input")).value="t",$e.type="radio",v.radioValue=$e.value==="t";var wt,pn=f.expr.attrHandle;f.fn.extend({attr:function(o,h){return De(this,f.attr,o,h,1<arguments.length)},removeAttr:function(o){return this.each(function(){f.removeAttr(this,o)})}}),f.extend({attr:function(o,h,m){var _,S,A=o.nodeType;if(A!==3&&A!==8&&A!==2)return typeof o.getAttribute>"u"?f.prop(o,h,m):(A===1&&f.isXMLDoc(o)||(S=f.attrHooks[h.toLowerCase()]||(f.expr.match.bool.test(h)?wt:void 0)),m!==void 0?m===null?void f.removeAttr(o,h):S&&"set"in S&&(_=S.set(o,m,h))!==void 0?_:(o.setAttribute(h,m+""),m):S&&"get"in S&&(_=S.get(o,h))!==null?_:(_=f.find.attr(o,h))==null?void 0:_)},attrHooks:{type:{set:function(o,h){if(!v.radioValue&&h==="radio"&&G(o,"input")){var m=o.value;return o.setAttribute("type",h),m&&(o.value=m),h}}}},removeAttr:function(o,h){var m,_=0,S=h&&h.match(Ae);if(S&&o.nodeType===1)for(;m=S[_++];)o.removeAttribute(m)}}),wt={set:function(o,h,m){return h===!1?f.removeAttr(o,m):o.setAttribute(m,m),m}},f.each(f.expr.match.bool.source.match(/\w+/g),function(o,h){var m=pn[h]||f.find.attr;pn[h]=function(_,S,A){var R,k,z=S.toLowerCase();return A||(k=pn[z],pn[z]=R,R=m(_,S,A)!=null?z:null,pn[z]=k),R}});var zi=/^(?:input|select|textarea|button)$/i,Mn=/^(?:a|area)$/i;function Jn(o){return(o.match(Ae)||[]).join(" ")}function Ot(o){return o.getAttribute&&o.getAttribute("class")||""}function Xn(o){return Array.isArray(o)?o:typeof o=="string"&&o.match(Ae)||[]}f.fn.extend({prop:function(o,h){return De(this,f.prop,o,h,1<arguments.length)},removeProp:function(o){return this.each(function(){delete this[f.propFix[o]||o]})}}),f.extend({prop:function(o,h,m){var _,S,A=o.nodeType;if(A!==3&&A!==8&&A!==2)return A===1&&f.isXMLDoc(o)||(h=f.propFix[h]||h,S=f.propHooks[h]),m!==void 0?S&&"set"in S&&(_=S.set(o,m,h))!==void 0?_:o[h]=m:S&&"get"in S&&(_=S.get(o,h))!==null?_:o[h]},propHooks:{tabIndex:{get:function(o){var h=f.find.attr(o,"tabindex");return h?parseInt(h,10):zi.test(o.nodeName)||Mn.test(o.nodeName)&&o.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),v.optSelected||(f.propHooks.selected={get:function(o){var h=o.parentNode;return h&&h.parentNode&&h.parentNode.selectedIndex,null},set:function(o){var h=o.parentNode;h&&(h.selectedIndex,h.parentNode&&h.parentNode.selectedIndex)}}),f.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){f.propFix[this.toLowerCase()]=this}),f.fn.extend({addClass:function(o){var h,m,_,S,A,R,k,z=0;if(M(o))return this.each(function(j){f(this).addClass(o.call(this,j,Ot(this)))});if((h=Xn(o)).length){for(;m=this[z++];)if(S=Ot(m),_=m.nodeType===1&&" "+Jn(S)+" "){for(R=0;A=h[R++];)_.indexOf(" "+A+" ")<0&&(_+=A+" ");S!==(k=Jn(_))&&m.setAttribute("class",k)}}return this},removeClass:function(o){var h,m,_,S,A,R,k,z=0;if(M(o))return this.each(function(j){f(this).removeClass(o.call(this,j,Ot(this)))});if(!arguments.length)return this.attr("class","");if((h=Xn(o)).length){for(;m=this[z++];)if(S=Ot(m),_=m.nodeType===1&&" "+Jn(S)+" "){for(R=0;A=h[R++];)for(;-1<_.indexOf(" "+A+" ");)_=_.replace(" "+A+" "," ");S!==(k=Jn(_))&&m.setAttribute("class",k)}}return this},toggleClass:function(o,h){var m=typeof o,_=m==="string"||Array.isArray(o);return typeof h=="boolean"&&_?h?this.addClass(o):this.removeClass(o):M(o)?this.each(function(S){f(this).toggleClass(o.call(this,S,Ot(this),h),h)}):this.each(function(){var S,A,R,k;if(_)for(A=0,R=f(this),k=Xn(o);S=k[A++];)R.hasClass(S)?R.removeClass(S):R.addClass(S);else o!==void 0&&m!=="boolean"||((S=Ot(this))&&Ie.set(this,"__className__",S),this.setAttribute&&this.setAttribute("class",S||o===!1?"":Ie.get(this,"__className__")||""))})},hasClass:function(o){var h,m,_=0;for(h=" "+o+" ";m=this[_++];)if(m.nodeType===1&&-1<(" "+Jn(Ot(m))+" ").indexOf(h))return!0;return!1}});var ps=/\r/g;f.fn.extend({val:function(o){var h,m,_,S=this[0];return arguments.length?(_=M(o),this.each(function(A){var R;this.nodeType===1&&((R=_?o.call(this,A,f(this).val()):o)==null?R="":typeof R=="number"?R+="":Array.isArray(R)&&(R=f.map(R,function(k){return k==null?"":k+""})),(h=f.valHooks[this.type]||f.valHooks[this.nodeName.toLowerCase()])&&"set"in h&&h.set(this,R,"value")!==void 0||(this.value=R))})):S?(h=f.valHooks[S.type]||f.valHooks[S.nodeName.toLowerCase()])&&"get"in h&&(m=h.get(S,"value"))!==void 0?m:typeof(m=S.value)=="string"?m.replace(ps,""):m??"":void 0}}),f.extend({valHooks:{option:{get:function(o){var h=f.find.attr(o,"value");return h??Jn(f.text(o))}},select:{get:function(o){var h,m,_,S=o.options,A=o.selectedIndex,R=o.type==="select-one",k=R?null:[],z=R?A+1:S.length;for(_=A<0?z:R?A:0;_<z;_++)if(((m=S[_]).selected||_===A)&&!m.disabled&&(!m.parentNode.disabled||!G(m.parentNode,"optgroup"))){if(h=f(m).val(),R)return h;k.push(h)}return k},set:function(o,h){for(var m,_,S=o.options,A=f.makeArray(h),R=S.length;R--;)((_=S[R]).selected=-1<f.inArray(f.valHooks.option.get(_),A))&&(m=!0);return m||(o.selectedIndex=-1),A}}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]={set:function(o,h){if(Array.isArray(h))return o.checked=-1<f.inArray(f(o).val(),h)}},v.checkOn||(f.valHooks[this].get=function(o){return o.getAttribute("value")===null?"on":o.value})}),v.focusin="onfocusin"in r;var Sn=/^(?:focusinfocus|focusoutblur)$/,vr=function(o){o.stopPropagation()};f.extend(f.event,{trigger:function(o,h,m,_){var S,A,R,k,z,j,ie,pe,Q=[m||x],re=d.call(o,"type")?o.type:o,Be=d.call(o,"namespace")?o.namespace.split("."):[];if(A=pe=R=m=m||x,m.nodeType!==3&&m.nodeType!==8&&!Sn.test(re+f.event.triggered)&&(-1<re.indexOf(".")&&(re=(Be=re.split(".")).shift(),Be.sort()),z=re.indexOf(":")<0&&"on"+re,(o=o[f.expando]?o:new f.Event(re,typeof o=="object"&&o)).isTrigger=_?2:3,o.namespace=Be.join("."),o.rnamespace=o.namespace?new RegExp("(^|\\.)"+Be.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,o.result=void 0,o.target||(o.target=m),h=h==null?[o]:f.makeArray(h,[o]),ie=f.event.special[re]||{},_||!ie.trigger||ie.trigger.apply(m,h)!==!1)){if(!_&&!ie.noBubble&&!E(m)){for(k=ie.delegateType||re,Sn.test(k+re)||(A=A.parentNode);A;A=A.parentNode)Q.push(A),R=A;R===(m.ownerDocument||x)&&Q.push(R.defaultView||R.parentWindow||r)}for(S=0;(A=Q[S++])&&!o.isPropagationStopped();)pe=A,o.type=1<S?k:ie.bindType||re,(j=(Ie.get(A,"events")||Object.create(null))[o.type]&&Ie.get(A,"handle"))&&j.apply(A,h),(j=z&&A[z])&&j.apply&&Lt(A)&&(o.result=j.apply(A,h),o.result===!1&&o.preventDefault());return o.type=re,_||o.isDefaultPrevented()||ie._default&&ie._default.apply(Q.pop(),h)!==!1||!Lt(m)||z&&M(m[re])&&!E(m)&&((R=m[z])&&(m[z]=null),f.event.triggered=re,o.isPropagationStopped()&&pe.addEventListener(re,vr),m[re](),o.isPropagationStopped()&&pe.removeEventListener(re,vr),f.event.triggered=void 0,R&&(m[z]=R)),o.result}},simulate:function(o,h,m){var _=f.extend(new f.Event,m,{type:o,isSimulated:!0});f.event.trigger(_,null,h)}}),f.fn.extend({trigger:function(o,h){return this.each(function(){f.event.trigger(o,h,this)})},triggerHandler:function(o,h){var m=this[0];if(m)return f.event.trigger(o,h,m,!0)}}),v.focusin||f.each({focus:"focusin",blur:"focusout"},function(o,h){var m=function(_){f.event.simulate(h,_.target,f.event.fix(_))};f.event.special[h]={setup:function(){var _=this.ownerDocument||this.document||this,S=Ie.access(_,h);S||_.addEventListener(o,m,!0),Ie.access(_,h,(S||0)+1)},teardown:function(){var _=this.ownerDocument||this.document||this,S=Ie.access(_,h)-1;S?Ie.access(_,h,S):(_.removeEventListener(o,m,!0),Ie.remove(_,h))}}});var nr=r.location,ms={guid:Date.now()},$o=/\?/;f.parseXML=function(o){var h,m;if(!o||typeof o!="string")return null;try{h=new r.DOMParser().parseFromString(o,"text/xml")}catch{}return m=h&&h.getElementsByTagName("parsererror")[0],h&&!m||f.error("Invalid XML: "+(m?f.map(m.childNodes,function(_){return _.textContent}).join(`
`):o)),h};var Bh=/\[\]$/,Kl=/\r?\n/g,kh=/^(?:submit|button|image|reset|file)$/i,Hh=/^(?:input|select|textarea|keygen)/i;function Zo(o,h,m,_){var S;if(Array.isArray(h))f.each(h,function(A,R){m||Bh.test(o)?_(o,R):Zo(o+"["+(typeof R=="object"&&R!=null?A:"")+"]",R,m,_)});else if(m||D(h)!=="object")_(o,h);else for(S in h)Zo(o+"["+S+"]",h[S],m,_)}f.param=function(o,h){var m,_=[],S=function(A,R){var k=M(R)?R():R;_[_.length]=encodeURIComponent(A)+"="+encodeURIComponent(k??"")};if(o==null)return"";if(Array.isArray(o)||o.jquery&&!f.isPlainObject(o))f.each(o,function(){S(this.name,this.value)});else for(m in o)Zo(m,o[m],h,S);return _.join("&")},f.fn.extend({serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var o=f.prop(this,"elements");return o?f.makeArray(o):this}).filter(function(){var o=this.type;return this.name&&!f(this).is(":disabled")&&Hh.test(this.nodeName)&&!kh.test(o)&&(this.checked||!Te.test(o))}).map(function(o,h){var m=f(this).val();return m==null?null:Array.isArray(m)?f.map(m,function(_){return{name:h.name,value:_.replace(Kl,`\r
`)}}):{name:h.name,value:m.replace(Kl,`\r
`)}}).get()}});var zh=/%20/g,Vh=/#.*$/,Gh=/([?&])_=[^&]*/,Wh=/^(.*?):[ \t]*([^\r\n]*)$/gm,Xh=/^(?:GET|HEAD)$/,jh=/^\/\//,$l={},Jo={},Zl="*/".concat("*"),Qo=x.createElement("a");function Jl(o){return function(h,m){typeof h!="string"&&(m=h,h="*");var _,S=0,A=h.toLowerCase().match(Ae)||[];if(M(m))for(;_=A[S++];)_[0]==="+"?(_=_.slice(1)||"*",(o[_]=o[_]||[]).unshift(m)):(o[_]=o[_]||[]).push(m)}}function Ql(o,h,m,_){var S={},A=o===Jo;function R(k){var z;return S[k]=!0,f.each(o[k]||[],function(j,ie){var pe=ie(h,m,_);return typeof pe!="string"||A||S[pe]?A?!(z=pe):void 0:(h.dataTypes.unshift(pe),R(pe),!1)}),z}return R(h.dataTypes[0])||!S["*"]&&R("*")}function ea(o,h){var m,_,S=f.ajaxSettings.flatOptions||{};for(m in h)h[m]!==void 0&&((S[m]?o:_||(_={}))[m]=h[m]);return _&&f.extend(!0,o,_),o}Qo.href=nr.href,f.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:nr.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(nr.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Zl,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":f.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(o,h){return h?ea(ea(o,f.ajaxSettings),h):ea(f.ajaxSettings,o)},ajaxPrefilter:Jl($l),ajaxTransport:Jl(Jo),ajax:function(o,h){typeof o=="object"&&(h=o,o=void 0),h=h||{};var m,_,S,A,R,k,z,j,ie,pe,Q=f.ajaxSetup({},h),re=Q.context||Q,Be=Q.context&&(re.nodeType||re.jquery)?f(re):f.event,Ye=f.Deferred(),Ve=f.Callbacks("once memory"),Kt=Q.statusCode||{},on={},Un={},Ft="canceled",ft={readyState:0,getResponseHeader:function(Rt){var $t;if(z){if(!A)for(A={};$t=Wh.exec(S);)A[$t[1].toLowerCase()+" "]=(A[$t[1].toLowerCase()+" "]||[]).concat($t[2]);$t=A[Rt.toLowerCase()+" "]}return $t==null?null:$t.join(", ")},getAllResponseHeaders:function(){return z?S:null},setRequestHeader:function(Rt,$t){return z==null&&(Rt=Un[Rt.toLowerCase()]=Un[Rt.toLowerCase()]||Rt,on[Rt]=$t),this},overrideMimeType:function(Rt){return z==null&&(Q.mimeType=Rt),this},statusCode:function(Rt){var $t;if(Rt)if(z)ft.always(Rt[ft.status]);else for($t in Rt)Kt[$t]=[Kt[$t],Rt[$t]];return this},abort:function(Rt){var $t=Rt||Ft;return m&&m.abort($t),Ln(0,$t),this}};if(Ye.promise(ft),Q.url=((o||Q.url||nr.href)+"").replace(jh,nr.protocol+"//"),Q.type=h.method||h.type||Q.method||Q.type,Q.dataTypes=(Q.dataType||"*").toLowerCase().match(Ae)||[""],Q.crossDomain==null){k=x.createElement("a");try{k.href=Q.url,k.href=k.href,Q.crossDomain=Qo.protocol+"//"+Qo.host!=k.protocol+"//"+k.host}catch{Q.crossDomain=!0}}if(Q.data&&Q.processData&&typeof Q.data!="string"&&(Q.data=f.param(Q.data,Q.traditional)),Ql($l,Q,h,ft),z)return ft;for(ie in(j=f.event&&Q.global)&&f.active++==0&&f.event.trigger("ajaxStart"),Q.type=Q.type.toUpperCase(),Q.hasContent=!Xh.test(Q.type),_=Q.url.replace(Vh,""),Q.hasContent?Q.data&&Q.processData&&(Q.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(Q.data=Q.data.replace(zh,"+")):(pe=Q.url.slice(_.length),Q.data&&(Q.processData||typeof Q.data=="string")&&(_+=($o.test(_)?"&":"?")+Q.data,delete Q.data),Q.cache===!1&&(_=_.replace(Gh,"$1"),pe=($o.test(_)?"&":"?")+"_="+ms.guid+++pe),Q.url=_+pe),Q.ifModified&&(f.lastModified[_]&&ft.setRequestHeader("If-Modified-Since",f.lastModified[_]),f.etag[_]&&ft.setRequestHeader("If-None-Match",f.etag[_])),(Q.data&&Q.hasContent&&Q.contentType!==!1||h.contentType)&&ft.setRequestHeader("Content-Type",Q.contentType),ft.setRequestHeader("Accept",Q.dataTypes[0]&&Q.accepts[Q.dataTypes[0]]?Q.accepts[Q.dataTypes[0]]+(Q.dataTypes[0]!=="*"?", "+Zl+"; q=0.01":""):Q.accepts["*"]),Q.headers)ft.setRequestHeader(ie,Q.headers[ie]);if(Q.beforeSend&&(Q.beforeSend.call(re,ft,Q)===!1||z))return ft.abort();if(Ft="abort",Ve.add(Q.complete),ft.done(Q.success),ft.fail(Q.error),m=Ql(Jo,Q,h,ft)){if(ft.readyState=1,j&&Be.trigger("ajaxSend",[ft,Q]),z)return ft;Q.async&&0<Q.timeout&&(R=r.setTimeout(function(){ft.abort("timeout")},Q.timeout));try{z=!1,m.send(on,Ln)}catch(Rt){if(z)throw Rt;Ln(-1,Rt)}}else Ln(-1,"No Transport");function Ln(Rt,$t,_s,js){var On,ir,xr,Dn,yr,jn=$t;z||(z=!0,R&&r.clearTimeout(R),m=void 0,S=js||"",ft.readyState=0<Rt?4:0,On=200<=Rt&&Rt<300||Rt===304,_s&&(Dn=function(Zt,Fn,Bn){for(var di,dt,Dt,an,kn=Zt.contents,nn=Zt.dataTypes;nn[0]==="*";)nn.shift(),di===void 0&&(di=Zt.mimeType||Fn.getResponseHeader("Content-Type"));if(di){for(dt in kn)if(kn[dt]&&kn[dt].test(di)){nn.unshift(dt);break}}if(nn[0]in Bn)Dt=nn[0];else{for(dt in Bn){if(!nn[0]||Zt.converters[dt+" "+nn[0]]){Dt=dt;break}an||(an=dt)}Dt=Dt||an}if(Dt)return Dt!==nn[0]&&nn.unshift(Dt),Bn[Dt]}(Q,ft,_s)),!On&&-1<f.inArray("script",Q.dataTypes)&&f.inArray("json",Q.dataTypes)<0&&(Q.converters["text script"]=function(){}),Dn=function(Zt,Fn,Bn,di){var dt,Dt,an,kn,nn,Hn={},Mr=Zt.dataTypes.slice();if(Mr[1])for(an in Zt.converters)Hn[an.toLowerCase()]=Zt.converters[an];for(Dt=Mr.shift();Dt;)if(Zt.responseFields[Dt]&&(Bn[Zt.responseFields[Dt]]=Fn),!nn&&di&&Zt.dataFilter&&(Fn=Zt.dataFilter(Fn,Zt.dataType)),nn=Dt,Dt=Mr.shift()){if(Dt==="*")Dt=nn;else if(nn!=="*"&&nn!==Dt){if(!(an=Hn[nn+" "+Dt]||Hn["* "+Dt])){for(dt in Hn)if((kn=dt.split(" "))[1]===Dt&&(an=Hn[nn+" "+kn[0]]||Hn["* "+kn[0]])){an===!0?an=Hn[dt]:Hn[dt]!==!0&&(Dt=kn[0],Mr.unshift(kn[1]));break}}if(an!==!0)if(an&&Zt.throws)Fn=an(Fn);else try{Fn=an(Fn)}catch(qs){return{state:"parsererror",error:an?qs:"No conversion from "+nn+" to "+Dt}}}}return{state:"success",data:Fn}}(Q,Dn,ft,On),On?(Q.ifModified&&((yr=ft.getResponseHeader("Last-Modified"))&&(f.lastModified[_]=yr),(yr=ft.getResponseHeader("etag"))&&(f.etag[_]=yr)),Rt===204||Q.type==="HEAD"?jn="nocontent":Rt===304?jn="notmodified":(jn=Dn.state,ir=Dn.data,On=!(xr=Dn.error))):(xr=jn,!Rt&&jn||(jn="error",Rt<0&&(Rt=0))),ft.status=Rt,ft.statusText=($t||jn)+"",On?Ye.resolveWith(re,[ir,jn,ft]):Ye.rejectWith(re,[ft,jn,xr]),ft.statusCode(Kt),Kt=void 0,j&&Be.trigger(On?"ajaxSuccess":"ajaxError",[ft,Q,On?ir:xr]),Ve.fireWith(re,[ft,jn]),j&&(Be.trigger("ajaxComplete",[ft,Q]),--f.active||f.event.trigger("ajaxStop")))}return ft},getJSON:function(o,h,m){return f.get(o,h,m,"json")},getScript:function(o,h){return f.get(o,void 0,h,"script")}}),f.each(["get","post"],function(o,h){f[h]=function(m,_,S,A){return M(_)&&(A=A||S,S=_,_=void 0),f.ajax(f.extend({url:m,type:h,dataType:A,data:_,success:S},f.isPlainObject(m)&&m))}}),f.ajaxPrefilter(function(o){var h;for(h in o.headers)h.toLowerCase()==="content-type"&&(o.contentType=o.headers[h]||"")}),f._evalUrl=function(o,h,m){return f.ajax({url:o,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(_){f.globalEval(_,h,m)}})},f.fn.extend({wrapAll:function(o){var h;return this[0]&&(M(o)&&(o=o.call(this[0])),h=f(o,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&h.insertBefore(this[0]),h.map(function(){for(var m=this;m.firstElementChild;)m=m.firstElementChild;return m}).append(this)),this},wrapInner:function(o){return M(o)?this.each(function(h){f(this).wrapInner(o.call(this,h))}):this.each(function(){var h=f(this),m=h.contents();m.length?m.wrapAll(o):h.append(o)})},wrap:function(o){var h=M(o);return this.each(function(m){f(this).wrapAll(h?o.call(this,m):o)})},unwrap:function(o){return this.parent(o).not("body").each(function(){f(this).replaceWith(this.childNodes)}),this}}),f.expr.pseudos.hidden=function(o){return!f.expr.pseudos.visible(o)},f.expr.pseudos.visible=function(o){return!!(o.offsetWidth||o.offsetHeight||o.getClientRects().length)},f.ajaxSettings.xhr=function(){try{return new r.XMLHttpRequest}catch{}};var qh={0:200,1223:204},gs=f.ajaxSettings.xhr();v.cors=!!gs&&"withCredentials"in gs,v.ajax=gs=!!gs,f.ajaxTransport(function(o){var h,m;if(v.cors||gs&&!o.crossDomain)return{send:function(_,S){var A,R=o.xhr();if(R.open(o.type,o.url,o.async,o.username,o.password),o.xhrFields)for(A in o.xhrFields)R[A]=o.xhrFields[A];for(A in o.mimeType&&R.overrideMimeType&&R.overrideMimeType(o.mimeType),o.crossDomain||_["X-Requested-With"]||(_["X-Requested-With"]="XMLHttpRequest"),_)R.setRequestHeader(A,_[A]);h=function(k){return function(){h&&(h=m=R.onload=R.onerror=R.onabort=R.ontimeout=R.onreadystatechange=null,k==="abort"?R.abort():k==="error"?typeof R.status!="number"?S(0,"error"):S(R.status,R.statusText):S(qh[R.status]||R.status,R.statusText,(R.responseType||"text")!=="text"||typeof R.responseText!="string"?{binary:R.response}:{text:R.responseText},R.getAllResponseHeaders()))}},R.onload=h(),m=R.onerror=R.ontimeout=h("error"),R.onabort!==void 0?R.onabort=m:R.onreadystatechange=function(){R.readyState===4&&r.setTimeout(function(){h&&m()})},h=h("abort");try{R.send(o.hasContent&&o.data||null)}catch(k){if(h)throw k}},abort:function(){h&&h()}}}),f.ajaxPrefilter(function(o){o.crossDomain&&(o.contents.script=!1)}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(o){return f.globalEval(o),o}}}),f.ajaxPrefilter("script",function(o){o.cache===void 0&&(o.cache=!1),o.crossDomain&&(o.type="GET")}),f.ajaxTransport("script",function(o){var h,m;if(o.crossDomain||o.scriptAttrs)return{send:function(_,S){h=f("<script>").attr(o.scriptAttrs||{}).prop({charset:o.scriptCharset,src:o.url}).on("load error",m=function(A){h.remove(),m=null,A&&S(A.type==="error"?404:200,A.type)}),x.head.appendChild(h[0])},abort:function(){m&&m()}}});var ec,tc=[],ta=/(=)\?(?=&|$)|\?\?/;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var o=tc.pop()||f.expando+"_"+ms.guid++;return this[o]=!0,o}}),f.ajaxPrefilter("json jsonp",function(o,h,m){var _,S,A,R=o.jsonp!==!1&&(ta.test(o.url)?"url":typeof o.data=="string"&&(o.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&ta.test(o.data)&&"data");if(R||o.dataTypes[0]==="jsonp")return _=o.jsonpCallback=M(o.jsonpCallback)?o.jsonpCallback():o.jsonpCallback,R?o[R]=o[R].replace(ta,"$1"+_):o.jsonp!==!1&&(o.url+=($o.test(o.url)?"&":"?")+o.jsonp+"="+_),o.converters["script json"]=function(){return A||f.error(_+" was not called"),A[0]},o.dataTypes[0]="json",S=r[_],r[_]=function(){A=arguments},m.always(function(){S===void 0?f(r).removeProp(_):r[_]=S,o[_]&&(o.jsonpCallback=h.jsonpCallback,tc.push(_)),A&&M(S)&&S(A[0]),A=S=void 0}),"script"}),v.createHTMLDocument=((ec=x.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",ec.childNodes.length===2),f.parseHTML=function(o,h,m){return typeof o!="string"?[]:(typeof h=="boolean"&&(m=h,h=!1),h||(v.createHTMLDocument?((_=(h=x.implementation.createHTMLDocument("")).createElement("base")).href=x.location.href,h.head.appendChild(_)):h=x),A=!m&&[],(S=le.exec(o))?[h.createElement(S[1])]:(S=kt([o],h,A),A&&A.length&&f(A).remove(),f.merge([],S.childNodes)));var _,S,A},f.fn.load=function(o,h,m){var _,S,A,R=this,k=o.indexOf(" ");return-1<k&&(_=Jn(o.slice(k)),o=o.slice(0,k)),M(h)?(m=h,h=void 0):h&&typeof h=="object"&&(S="POST"),0<R.length&&f.ajax({url:o,type:S||"GET",dataType:"html",data:h}).done(function(z){A=arguments,R.html(_?f("<div>").append(f.parseHTML(z)).find(_):z)}).always(m&&function(z,j){R.each(function(){m.apply(this,A||[z.responseText,j,z])})}),this},f.expr.pseudos.animated=function(o){return f.grep(f.timers,function(h){return o===h.elem}).length},f.offset={setOffset:function(o,h,m){var _,S,A,R,k,z,j=f.css(o,"position"),ie=f(o),pe={};j==="static"&&(o.style.position="relative"),k=ie.offset(),A=f.css(o,"top"),z=f.css(o,"left"),(j==="absolute"||j==="fixed")&&-1<(A+z).indexOf("auto")?(R=(_=ie.position()).top,S=_.left):(R=parseFloat(A)||0,S=parseFloat(z)||0),M(h)&&(h=h.call(o,m,f.extend({},k))),h.top!=null&&(pe.top=h.top-k.top+R),h.left!=null&&(pe.left=h.left-k.left+S),"using"in h?h.using.call(o,pe):ie.css(pe)}},f.fn.extend({offset:function(o){if(arguments.length)return o===void 0?this:this.each(function(S){f.offset.setOffset(this,o,S)});var h,m,_=this[0];return _?_.getClientRects().length?(h=_.getBoundingClientRect(),m=_.ownerDocument.defaultView,{top:h.top+m.pageYOffset,left:h.left+m.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var o,h,m,_=this[0],S={top:0,left:0};if(f.css(_,"position")==="fixed")h=_.getBoundingClientRect();else{for(h=this.offset(),m=_.ownerDocument,o=_.offsetParent||m.documentElement;o&&(o===m.body||o===m.documentElement)&&f.css(o,"position")==="static";)o=o.parentNode;o&&o!==_&&o.nodeType===1&&((S=f(o).offset()).top+=f.css(o,"borderTopWidth",!0),S.left+=f.css(o,"borderLeftWidth",!0))}return{top:h.top-S.top-f.css(_,"marginTop",!0),left:h.left-S.left-f.css(_,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var o=this.offsetParent;o&&f.css(o,"position")==="static";)o=o.offsetParent;return o||w})}}),f.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(o,h){var m=h==="pageYOffset";f.fn[o]=function(_){return De(this,function(S,A,R){var k;if(E(S)?k=S:S.nodeType===9&&(k=S.defaultView),R===void 0)return k?k[h]:S[A];k?k.scrollTo(m?k.pageXOffset:R,m?R:k.pageYOffset):S[A]=R},o,_,arguments.length)}}),f.each(["top","left"],function(o,h){f.cssHooks[h]=hs(v.pixelPosition,function(m,_){if(_)return _=fi(m,h),Zn.test(_)?f(m).position()[h]+"px":_})}),f.each({Height:"height",Width:"width"},function(o,h){f.each({padding:"inner"+o,content:h,"":"outer"+o},function(m,_){f.fn[_]=function(S,A){var R=arguments.length&&(m||typeof S!="boolean"),k=m||(S===!0||A===!0?"margin":"border");return De(this,function(z,j,ie){var pe;return E(z)?_.indexOf("outer")===0?z["inner"+o]:z.document.documentElement["client"+o]:z.nodeType===9?(pe=z.documentElement,Math.max(z.body["scroll"+o],pe["scroll"+o],z.body["offset"+o],pe["offset"+o],pe["client"+o])):ie===void 0?f.css(z,j,k):f.style(z,j,ie,k)},h,R?S:void 0,R)}})}),f.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(o,h){f.fn[h]=function(m){return this.on(h,m)}}),f.fn.extend({bind:function(o,h,m){return this.on(o,null,h,m)},unbind:function(o,h){return this.off(o,null,h)},delegate:function(o,h,m,_){return this.on(h,o,m,_)},undelegate:function(o,h,m){return arguments.length===1?this.off(o,"**"):this.off(h,o||"**",m)},hover:function(o,h){return this.mouseenter(o).mouseleave(h||o)}}),f.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(o,h){f.fn[h]=function(m,_){return 0<arguments.length?this.on(h,null,m,_):this.trigger(h)}});var Yh=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;f.proxy=function(o,h){var m,_,S;if(typeof h=="string"&&(m=o[h],h=o,o=m),M(o))return _=i.call(arguments,2),(S=function(){return o.apply(h||this,_.concat(i.call(arguments)))}).guid=o.guid=o.guid||f.guid++,S},f.holdReady=function(o){o?f.readyWait++:f.ready(!0)},f.isArray=Array.isArray,f.parseJSON=JSON.parse,f.nodeName=G,f.isFunction=M,f.isWindow=E,f.camelCase=Qe,f.type=D,f.now=Date.now,f.isNumeric=function(o){var h=f.type(o);return(h==="number"||h==="string")&&!isNaN(o-parseFloat(o))},f.trim=function(o){return o==null?"":(o+"").replace(Yh,"")},typeof define=="function"&&define.amd&&define("jquery",[],function(){return f});var Kh=r.jQuery,$h=r.$;return f.noConflict=function(o){return r.$===f&&(r.$=$h),o&&r.jQuery===f&&(r.jQuery=Kh),f},typeof e>"u"&&(r.jQuery=r.$=f),f});(function(r){function e(s,a,l){return typeof s=="string"&&(s.slice(-1)=="%"?s=parseInt(s.substring(0,s.length-1))/100*a:s.slice(-2)=="vh"?s=parseInt(s.substring(0,s.length-2))/100*l:s.slice(-2)=="px"&&(s=parseInt(s.substring(0,s.length-2)))),s}var t=r(window),n=1,i={};t.on("scroll",function(){var s=t.scrollTop();r.map(i,function(a){window.clearTimeout(a.timeoutId),a.timeoutId=window.setTimeout(function(){a.handler(s)},a.options.delay)})}).on("load",function(){t.trigger("scroll")}),jQuery.fn.scrollex=function(s){var a=r(this);if(this.length==0)return a;if(this.length>1){for(var l=0;l<this.length;l++)r(this[l]).scrollex(s);return a}if(a.data("_scrollexId"))return a;var c,u,d,p,g;switch(c=n++,u=jQuery.extend({top:0,bottom:0,delay:0,mode:"default",enter:null,leave:null,initialize:null,terminate:null,scroll:null},s),u.mode){case"top":d=function(v,M,E,x,y){return v>=x&&y>=v};break;case"bottom":d=function(v,M,E,x,y){return E>=x&&y>=E};break;case"middle":d=function(v,M,E,x,y){return M>=x&&y>=M};break;case"top-only":d=function(v,M,E,x,y){return x>=v&&E>=x};break;case"bottom-only":d=function(v,M,E,x,y){return E>=y&&y>=v};break;default:case"default":d=function(v,M,E,x,y){return E>=x&&y>=v}}return p=function(v){var M,E,x,y,N,D,U=this.state,f=!1,V=this.$element.offset();M=t.height(),E=v+M/2,x=v+M,y=this.$element.outerHeight(),N=V.top+e(this.options.top,y,M),D=V.top+y-e(this.options.bottom,y,M),f=this.test(v,E,x,N,D),f!=U&&(this.state=f,f?this.options.enter&&this.options.enter.apply(this.element):this.options.leave&&this.options.leave.apply(this.element)),this.options.scroll&&this.options.scroll.apply(this.element,[(E-N)/(D-N)])},g={id:c,options:u,test:d,handler:p,state:null,element:this,$element:a,timeoutId:null},i[c]=g,a.data("_scrollexId",g.id),g.options.initialize&&g.options.initialize.apply(this),a},jQuery.fn.unscrollex=function(){var s=r(this);if(this.length==0)return s;if(this.length>1){for(var a=0;a<this.length;a++)r(this[a]).unscrollex();return s}var l,c;return(l=s.data("_scrollexId"))&&(c=i[l],window.clearTimeout(c.timeoutId),delete i[l],s.removeData("_scrollexId"),c.options.terminate&&c.options.terminate.apply(this)),s}})(jQuery);(function(r){function e(l,c){var u,d,p;if((u=r(l))[t]==0)return n;switch(d=u[s]()[i],c.anchor){case"middle":p=d-(r(window).height()-u.outerHeight())/2;break;default:case i:p=Math.max(d,0)}return typeof c[s]=="function"?p-=c[s]():p-=c[s],p}var t="length",n=null,i="top",s="offset",a="click.scrolly";r(window),r.fn.scrolly=function(l){var c,u,d,p,g=r(this);if(this[t]==0)return g;if(this[t]>1){for(c=0;c<this[t];c++)r(this[c]).scrolly(l);return g}if(p=n,d=g.attr("href"),d.charAt(0)!="#"||d[t]<2)return g;u=jQuery.extend({anchor:i,easing:"swing",offset:0,parent:r("body,html"),pollOnce:!1,speed:1e3},l),u.pollOnce&&(p=e(d,u)),g.off(a).on(a,function(v){var M=p!==n?p:e(d,u);M!==n&&(v.preventDefault(),u.parent.stop().animate({scrollTop:M},u.speed,u.easing))})}})(jQuery);var lx=function(){var r={name:null,version:null,os:null,osVersion:null,touch:null,mobile:null,_canUse:null,canUse:function(e){r._canUse||(r._canUse=document.createElement("div"));var t=r._canUse.style,n=e.charAt(0).toUpperCase()+e.slice(1);return e in t||"Moz"+n in t||"Webkit"+n in t||"O"+n in t||"ms"+n in t},init:function(){for(var e=navigator.userAgent,t="other",n=0,i=[["firefox",/Firefox\/([0-9\.]+)/],["bb",/BlackBerry.+Version\/([0-9\.]+)/],["bb",/BB[0-9]+.+Version\/([0-9\.]+)/],["opera",/OPR\/([0-9\.]+)/],["opera",/Opera\/([0-9\.]+)/],["edge",/Edge\/([0-9\.]+)/],["safari",/Version\/([0-9\.]+).+Safari/],["chrome",/Chrome\/([0-9\.]+)/],["ie",/MSIE ([0-9]+)/],["ie",/Trident\/.+rv:([0-9]+)/]],s=0;s<i.length;s++)if(e.match(i[s][1])){t=i[s][0],n=parseFloat(RegExp.$1);break}for(r.name=t,r.version=n,t="other",i=[["ios",/([0-9_]+) like Mac OS X/,function(a){return a.replace("_",".").replace("_","")}],["ios",/CPU like Mac OS X/,function(a){return 0}],["wp",/Windows Phone ([0-9\.]+)/,null],["android",/Android ([0-9\.]+)/,null],["mac",/Macintosh.+Mac OS X ([0-9_]+)/,function(a){return a.replace("_",".").replace("_","")}],["windows",/Windows NT ([0-9\.]+)/,null],["bb",/BlackBerry.+Version\/([0-9\.]+)/,null],["bb",/BB[0-9]+.+Version\/([0-9\.]+)/,null],["linux",/Linux/,null],["bsd",/BSD/,null],["unix",/X11/,null]],s=n=0;s<i.length;s++)if(e.match(i[s][1])){t=i[s][0],n=parseFloat(i[s][2]?i[s][2](RegExp.$1):RegExp.$1);break}t=="mac"&&"ontouchstart"in window&&(screen.width==1024&&screen.height==1366||screen.width==834&&screen.height==1112||screen.width==810&&screen.height==1080||screen.width==768&&screen.height==1024)&&(t="ios"),r.os=t,r.osVersion=n,r.touch=r.os=="wp"?0<navigator.msMaxTouchPoints:"ontouchstart"in window,r.mobile=r.os=="wp"||r.os=="android"||r.os=="ios"||r.os=="bb"}};return r.init(),r}();(function(r,e){typeof define=="function"&&define.amd?define([],e):typeof Yl=="object"?Yr.exports=e():r.browser=e()})(void 0,function(){return lx});var cx=function(){function r(t){e.init(t)}var e={list:null,media:{},events:[],init:function(t){e.list=t,window.addEventListener("resize",e.poll),window.addEventListener("orientationchange",e.poll),window.addEventListener("load",e.poll),window.addEventListener("fullscreenchange",e.poll)},active:function(t){var n,i,s,a,l,c,u;if(!(t in e.media)){if(t.substr(0,2)==">="?(i="gte",n=t.substr(2)):t.substr(0,2)=="<="?(i="lte",n=t.substr(2)):t.substr(0,1)==">"?(i="gt",n=t.substr(1)):t.substr(0,1)=="<"?(i="lt",n=t.substr(1)):t.substr(0,1)=="!"?(i="not",n=t.substr(1)):(i="eq",n=t),n&&n in e.list)if(a=e.list[n],Array.isArray(a)){if(l=parseInt(a[0]),c=parseInt(a[1]),isNaN(l)){if(isNaN(c))return;u=a[1].substr(String(c).length)}else u=a[0].substr(String(l).length);if(isNaN(l))switch(i){case"gte":s="screen";break;case"lte":s="screen and (max-width: "+c+u+")";break;case"gt":s="screen and (min-width: "+(c+1)+u+")";break;case"lt":s="screen and (max-width: -1px)";break;case"not":s="screen and (min-width: "+(c+1)+u+")";break;default:s="screen and (max-width: "+c+u+")"}else if(isNaN(c))switch(i){case"gte":s="screen and (min-width: "+l+u+")";break;case"lte":s="screen";break;case"gt":s="screen and (max-width: -1px)";break;case"lt":s="screen and (max-width: "+(l-1)+u+")";break;case"not":s="screen and (max-width: "+(l-1)+u+")";break;default:s="screen and (min-width: "+l+u+")"}else switch(i){case"gte":s="screen and (min-width: "+l+u+")";break;case"lte":s="screen and (max-width: "+c+u+")";break;case"gt":s="screen and (min-width: "+(c+1)+u+")";break;case"lt":s="screen and (max-width: "+(l-1)+u+")";break;case"not":s="screen and (max-width: "+(l-1)+u+"), screen and (min-width: "+(c+1)+u+")";break;default:s="screen and (min-width: "+l+u+") and (max-width: "+c+u+")"}}else s=a.charAt(0)=="("?"screen and "+a:a;e.media[t]=!!s&&s}return e.media[t]!==!1&&window.matchMedia(e.media[t]).matches},on:function(t,n){e.events.push({query:t,handler:n,state:!1}),e.active(t)&&n()},poll:function(){var t,n;for(t=0;t<e.events.length;t++)n=e.events[t],e.active(n.query)?n.state||(n.state=!0,n.handler()):n.state&&(n.state=!1)}};return r._=e,r.on=function(t,n){e.on(t,n)},r.active=function(t){return e.active(t)},r}();(function(r,e){typeof define=="function"&&define.amd?define([],e):typeof Yl=="object"?Yr.exports=e():r.breakpoints=e()})(void 0,function(){return cx});(function(r){r.fn.navList=function(){var e=r(this);return $a=e.find("a"),b=[],$a.each(function(){var t=r(this),n=Math.max(0,t.parents("li").length-1),i=t.attr("href"),s=t.attr("target");b.push('<a class="link depth-'+n+'"'+(typeof s<"u"&&s!=""?' target="'+s+'"':"")+(typeof i<"u"&&i!=""?' href="'+i+'"':"")+'><span class="indent-'+n+'"></span>'+t.text()+"</a>")}),b.join("")},r.fn.panel=function(e){if(this.length==0)return n;if(this.length>1){for(var t=0;t<this.length;t++)r(this[t]).panel(e);return n}var n=r(this),i=r("body"),s=r(window),a=n.attr("id"),l;return l=r.extend({delay:0,hideOnClick:!1,hideOnEscape:!1,hideOnSwipe:!1,resetScroll:!1,resetForms:!1,side:null,target:n,visibleClass:"visible"},e),typeof l.target!="jQuery"&&(l.target=r(l.target)),n._hide=function(c){l.target.hasClass(l.visibleClass)&&(c&&(c.preventDefault(),c.stopPropagation()),l.target.removeClass(l.visibleClass),window.setTimeout(function(){l.resetScroll&&n.scrollTop(0),l.resetForms&&n.find("form").each(function(){this.reset()})},l.delay))},n.css("-ms-overflow-style","-ms-autohiding-scrollbar").css("-webkit-overflow-scrolling","touch"),l.hideOnClick&&(n.find("a").css("-webkit-tap-highlight-color","rgba(0,0,0,0)"),n.on("click","a",function(c){var u=r(this),d=u.attr("href"),p=u.attr("target");!d||d=="#"||d==""||d=="#"+a||(c.preventDefault(),c.stopPropagation(),n._hide(),window.setTimeout(function(){p=="_blank"?window.open(d):window.location.href=d},l.delay+10))})),n.on("touchstart",function(c){n.touchPosX=c.originalEvent.touches[0].pageX,n.touchPosY=c.originalEvent.touches[0].pageY}),n.on("touchmove",function(c){if(!(n.touchPosX===null||n.touchPosY===null)){var u=n.touchPosX-c.originalEvent.touches[0].pageX,d=n.touchPosY-c.originalEvent.touches[0].pageY,p=n.outerHeight(),g=n.get(0).scrollHeight-n.scrollTop();if(l.hideOnSwipe){var v=!1,M=20,E=50;switch(l.side){case"left":v=d<M&&d>-1*M&&u>E;break;case"right":v=d<M&&d>-1*M&&u<-1*E;break;case"top":v=u<M&&u>-1*M&&d>E;break;case"bottom":v=u<M&&u>-1*M&&d<-1*E;break}if(v)return n.touchPosX=null,n.touchPosY=null,n._hide(),!1}(n.scrollTop()<0&&d<0||g>p-2&&g<p+2&&d>0)&&(c.preventDefault(),c.stopPropagation())}}),n.on("click touchend touchstart touchmove",function(c){c.stopPropagation()}),n.on("click",'a[href="#'+a+'"]',function(c){c.preventDefault(),c.stopPropagation(),l.target.removeClass(l.visibleClass)}),i.on("click touchend",function(c){n._hide(c)}),i.on("click",'a[href="#'+a+'"]',function(c){c.preventDefault(),c.stopPropagation(),l.target.toggleClass(l.visibleClass)}),l.hideOnEscape&&s.on("keydown",function(c){c.keyCode==27&&n._hide(c)}),n},r.fn.placeholder=function(){if(typeof document.createElement("input").placeholder<"u")return r(this);if(this.length==0)return t;if(this.length>1){for(var e=0;e<this.length;e++)r(this[e]).placeholder();return t}var t=r(this);return t.find("input[type=text],textarea").each(function(){var n=r(this);(n.val()==""||n.val()==n.attr("placeholder"))&&n.addClass("polyfill-placeholder").val(n.attr("placeholder"))}).on("blur",function(){var n=r(this);n.attr("name").match(/-polyfill-field$/)||n.val()==""&&n.addClass("polyfill-placeholder").val(n.attr("placeholder"))}).on("focus",function(){var n=r(this);n.attr("name").match(/-polyfill-field$/)||n.val()==n.attr("placeholder")&&n.removeClass("polyfill-placeholder").val("")}),t.find("input[type=password]").each(function(){var n=r(this),i=r(r("<div>").append(n.clone()).remove().html().replace(/type="password"/i,'type="text"').replace(/type=password/i,"type=text"));n.attr("id")!=""&&i.attr("id",n.attr("id")+"-polyfill-field"),n.attr("name")!=""&&i.attr("name",n.attr("name")+"-polyfill-field"),i.addClass("polyfill-placeholder").val(i.attr("placeholder")).insertAfter(n),n.val()==""?n.hide():i.hide(),n.on("blur",function(s){s.preventDefault();var a=n.parent().find("input[name="+n.attr("name")+"-polyfill-field]");n.val()==""&&(n.hide(),a.show())}),i.on("focus",function(s){s.preventDefault();var a=i.parent().find("input[name="+i.attr("name").replace("-polyfill-field","")+"]");i.hide(),a.show().focus()}).on("keypress",function(s){s.preventDefault(),i.val("")})}),t.on("submit",function(){t.find("input[type=text],input[type=password],textarea").each(function(n){var i=r(this);i.attr("name").match(/-polyfill-field$/)&&i.attr("name",""),i.val()==i.attr("placeholder")&&(i.removeClass("polyfill-placeholder"),i.val(""))})}).on("reset",function(n){n.preventDefault(),t.find("select").val(r("option:first").val()),t.find("input,textarea").each(function(){var i=r(this),s;switch(i.removeClass("polyfill-placeholder"),this.type){case"submit":case"reset":break;case"password":i.val(i.attr("defaultValue")),s=i.parent().find("input[name="+i.attr("name")+"-polyfill-field]"),i.val()==""?(i.hide(),s.show()):(i.show(),s.hide());break;case"checkbox":case"radio":i.attr("checked",i.attr("defaultValue"));break;case"text":case"textarea":i.val(i.attr("defaultValue")),i.val()==""&&(i.addClass("polyfill-placeholder"),i.val(i.attr("placeholder")));break;default:i.val(i.attr("defaultValue"));break}})}),t},r.prioritize=function(e,t){var n="__prioritize";typeof e!="jQuery"&&(e=r(e)),e.each(function(){var i=r(this),s,a=i.parent();if(a.length!=0)if(i.data(n)){if(t)return;s=i.data(n),i.insertAfter(s),i.removeData(n)}else{if(!t||(s=i.prev(),s.length==0))return;i.prependTo(a),i.data(n,s)}})}})(jQuery)});export default ux();
