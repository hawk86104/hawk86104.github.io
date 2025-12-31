import{importShared as r}from"./3d-tiles-renderer.DZNovkLO1767148983502.js";import{h337 as d}from"./heatmap.DPNtOJCL1767148983502.js";const{defineComponent:g}=await r("vue"),{createElementVNode:u,normalizeProps:f,guardReactiveProps:_,openBlock:y,createElementBlock:x}=await r("vue"),w=["args","rotate-x"],{watchEffect:M}=await r("vue"),{DoubleSide:R,Texture:P}=await r("three"),C=g({__name:"heatmapJS",props:{Plane:{default:[50,50,1e3,1e3]},show2dCanvas:{type:Boolean,default:!0},heightRatio:{default:6}},setup(p,{expose:v}){const a=p;let n=null;const i=(t,o)=>Math.round((Math.random()*(t-o+1)+o)*10)/10;let e=null;const m=()=>(e=document.createElement("heatmap-canvas"),e.width=100,e.height=100,e.style.position="absolute",e.style.top="0",e.style.left="0",document.body.appendChild(e),n=d.create({container:e,width:256,height:256,blur:".8",radius:10}),n),l=t=>{if(!t){let c=0;for(t=[];c<2e3;)t.push({x:i(1,256),y:i(1,256),value:i(1,6)}),c++}n.setData({max:12,data:t}),s.needsUpdate=!0},s=new P(m()._renderer.canvas);l();const h={transparent:!0,side:R,vertexShader:`
	uniform sampler2D heightMap;
	uniform float heightRatio;
	varying vec2 vUv;
	varying float hValue;
	varying vec3 cl;
	void main() {
	  vUv = uv;
	  vec3 pos = position;
	  cl = texture2D(heightMap, vUv).rgb;
	  hValue = texture2D(heightMap, vUv).r;
	  pos.y = hValue * heightRatio;
	  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos,1.0);
	}`,fragmentShader:`
	varying float hValue;
	varying vec3 cl;
	void main() {
		float v = abs(hValue - 1.);
		gl_FragColor = vec4(cl, .8 - v * v*1.1) ; 
	}`,uniforms:{heightMap:{type:"t",value:s},heightRatio:{value:a.heightRatio}}};return M(()=>{e.style.display=`${a.show2dCanvas?"block":"none"}`,a.heightRatio&&(h.uniforms.heightRatio.value=a.heightRatio)}),v({setData:l}),(t,o)=>(y(),x("TresMesh",null,[u("TresPlaneGeometry",{args:a.Plane,"rotate-x":-Math.PI*.5},null,8,w),u("TresShaderMaterial",f(_(h)),null,16)]))}});export{C as _sfc_main};
