import{importShared as d}from"./3d-tiles-renderer.DZNovkLO1767148983502.js";import{Kk as u}from"./index.DTe2qqjO1767148983502.js";const c=await d("three"),s={segments:30,w:256,h:256},m=()=>{const e=new Array;for(let r=0;r<s.segments;r++)e[r]=parseInt(Math.random()*25+10);return e},h=(e,r)=>{let{x:l,y:t,radius:a,weight:o}=r;a=parseInt(a*o);const n=e.createRadialGradient(l,t,0,l,t,a);n.addColorStop(0,"rgba(255, 255, 0, 1)"),n.addColorStop(1,"rgba(255, 0, 0, 0)"),e.fillStyle=n,e.globalAlpha=o,e.beginPath(),e.arc(l,t,a,0,2*Math.PI),e.closePath(),e.fill()},f=()=>{const e={1:"#f00",.8:"#e2fa00",.6:"#33f900",.3:"#0349df",0:"#fff"},r=256,l=10,t=document.createElement("canvas");t.width=r,t.height=l,t.style.position="absolute",t.style.top="0",t.style.right="0";const a=t.getContext("2d"),o=a.createLinearGradient(0,0,r,0);for(const p in e)o.addColorStop(p,e[p]);a.fillStyle=o,a.fillRect(0,0,r,l),document.body.appendChild(t);const n=new c.Texture(t);return n.minFilter=c.NearestFilter,n.needsUpdate=!0,n},g=()=>{const e=document.createElement("canvas");e.width=s.w,e.height=s.h,e.style.position="absolute",e.style.top="20px",e.style.right="0";const r=e.getContext("2d"),l=m();for(let a=0;a<s.segments;a++){const o=l[a]/35,n=Math.random()*s.w,p=Math.random()*s.h;h(r,{x:n,y:p,radius:80,weight:o})}document.body.appendChild(e);const t=new c.Texture(e);return t.minFilter=c.NearestFilter,t.needsUpdate=!0,t},{defineComponent:v}=await d("vue"),{createElementVNode:i,unref:C,createVNode:w,normalizeProps:y,guardReactiveProps:S,resolveComponent:M,mergeProps:_,withCtx:x,openBlock:P,createBlock:T}=await d("vue"),{PCFSoftShadowMap:b,SRGBColorSpace:E,DoubleSide:R}=await d("three"),F=v({__name:"simpleExample",setup(e){const r={clearColor:"#030311",shadows:!0,alpha:!1,outputColorSpace:E,shadowMapType:b,useLegacyLights:!0},l={transparent:!0,side:R,vertexShader:`
	varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }`,fragmentShader:`
	#ifdef GL_ES
  precision highp float;
  #endif
  varying vec2 vUv;
  uniform sampler2D alphaScaleMap;
  uniform sampler2D paletteMap;
  void main() {
    vec4 alphaColor = texture2D(alphaScaleMap, vUv);
    vec4 color = texture2D(paletteMap, vec2(alphaColor.a, 0.0));
    gl_FragColor = vec4(color.r, color.g, color.b, alphaColor.a);
	}`,uniforms:{alphaScaleMap:{type:"t",value:g()},paletteMap:{type:"t",value:f()}}};function t(a){a&&console.log(a)}return(a,o)=>{const n=M("TresCanvas");return P(),T(n,_(r,{"window-size":""}),{default:x(()=>[o[1]||(o[1]=i("TresPerspectiveCamera",{position:[0,0,3e3],fov:40,near:.1,far:1e4},null,-1)),w(C(u),{autoRotate:!0,autoRotateSpeed:2}),o[2]||(o[2]=i("TresAmbientLight",{color:"#eef0ff",intensity:1},null,-1)),i("TresMesh",{position:[0,0,10],onPointerMove:t},[o[0]||(o[0]=i("TresPlaneGeometry",{args:[1500,1500]},null,-1)),i("TresShaderMaterial",y(S(l)),null,16)],32)]),_:1},16)}}});export{F as default};
