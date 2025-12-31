import{importShared as n}from"./3d-tiles-renderer.DZNovkLO1767148983502.js";import{_l as p,Kk as v}from"./index.DTe2qqjO1767148983502.js";const _=`varying vec2 vUv;
void main(){
	gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);
	vUv=uv;
}`,w=`#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec3 u_mouse;
uniform float u_time;
varying vec2 vUv;
float map(vec3 p){
  return length(p)-1.;
}
void main(){
  vec3 ro=vec3(0.,0.,-3.);//起始位置
  vec3 rd=normalize(vec3(vUv-.5,1.));//方向
  float t=0.;
  vec3 color=vec3(0.);
  for(int i=0;i<80;i++){
    vec3 p=ro+rd*t;
    float d=map(p);
    t+=d;
    //优化效率
    if(t>100.||d<.001){
      break;
    }
    
  }
  color=vec3(t)*.2;
  gl_FragColor=vec4(color,1.);
  
}`,{defineComponent:g}=await n("vue"),{createElementVNode:u,normalizeProps:h,guardReactiveProps:C,openBlock:P,createElementBlock:T}=await n("vue"),M=["rotation"],B={ref:"TresTubeGeometryRef",args:[1e3,1e3]},{DoubleSide:k,Vector2:s}=await n("three"),{watchEffect:x}=await n("vue"),E=g({__name:"rayMarchingMaterialBasic",setup(f){const{onBeforeRender:a}=p(),o={transparent:!0,depthWrite:!0,depthTest:!0,side:k,vertexShader:_,fragmentShader:w,uniforms:{u_resolution:{value:new s(window.innerWidth,window.innerHeight)},u_mouse:{value:new s(0,0)},u_time:{value:0}}},l=window.innerWidth/2,e=window.innerHeight/2;let r=0,c=0;function d(i){r=i.clientX-l,c=i.clientY-e}return document.addEventListener("mousemove",d,!1),x(()=>{}),a(({elapsed:i})=>{o.uniforms.u_time.value+=.001,o.uniforms.u_mouse.value=new s(r,c)}),(i,U)=>(P(),T("TresMesh",{ref:"MeshRef",rotation:[Math.PI/2,0,0]},[u("TresPlaneGeometry",B,null,512),u("TresShaderMaterial",h(C(o)),null,16)],8,M))}}),{defineComponent:R}=await n("vue"),{createElementVNode:t,unref:V,normalizeProps:y,guardReactiveProps:S,createVNode:m,resolveComponent:$,mergeProps:z,withCtx:H,openBlock:L,createBlock:N}=await n("vue"),b={ref:"perspectiveCameraRef",position:[0,800,0],fov:45,near:1,far:1e4},{onMounted:G}=await n("vue"),X=R({__name:"rayMarchingBasic",setup(f){const a={clearColor:"#000000",shadows:!0,alpha:!1,useLegacyLights:!0},o={autoRotate:!0,enableDamping:!0};return G(()=>{}),(l,e)=>{const r=$("TresCanvas");return L(),N(r,z(a,{"window-size":""}),{default:H(()=>[t("TresPerspectiveCamera",b,null,512),m(V(v),y(S(o)),null,16),e[0]||(e[0]=t("TresAmbientLight",{color:"#ffffff"},null,-1)),e[1]||(e[1]=t("TresDirectionalLight",{position:[100,100,0],intensity:.5,color:"#ffffff"},null,-1)),m(E),e[2]||(e[2]=t("TresAxesHelper",{args:[1e3],position:[0,19,0]},null,-1)),e[3]||(e[3]=t("TresGridHelper",{args:[6e3,100],position:[0,19,0]},null,-1))]),_:1},16)}}});export{X as default};
