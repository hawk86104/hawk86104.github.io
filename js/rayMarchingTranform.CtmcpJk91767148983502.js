import{importShared as n}from"./3d-tiles-renderer.DZNovkLO1767148983502.js";import{_l as d,Kk as v}from"./index.DTe2qqjO1767148983502.js";const _=`varying vec2 vUv;
void main(){
	gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);
	vUv=uv;
}`,g=`#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec3 u_mouse;
uniform float u_time;
varying vec2 vUv;
float sphere(vec3 p,float d){
  return(length(p*abs(sin(u_time))*2.)-d)/abs(sin(u_time))/2.;
}
mat2 rot2D(float angle){
  float s=sin(angle);
  float c=cos(angle);
  return mat2(c,-s,s,c);
}
float map(vec3 p){
  p.xy*=rot2D(u_time);
  vec3 pos=vec3(sin(u_time*10.),0.,0.);
  float spheresdf=sphere(p-pos,.5);
  return spheresdf;
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
  
}`,{defineComponent:w}=await n("vue"),{createElementVNode:u,normalizeProps:h,guardReactiveProps:T,openBlock:C,createElementBlock:P}=await n("vue"),M=["rotation"],x={ref:"TresTubeGeometryRef",args:[1e3,1e3]},{DoubleSide:k,Vector2:s}=await n("three"),{watchEffect:y}=await n("vue"),B=w({__name:"rayMarchingMaterialTranform",setup(m){const{onBeforeRender:i}=d(),o={transparent:!0,depthWrite:!0,depthTest:!0,side:k,vertexShader:_,fragmentShader:g,uniforms:{u_resolution:{value:new s(window.innerWidth,window.innerHeight)},u_mouse:{value:new s(0,0)},u_time:{value:0}}},l=window.innerWidth/2,e=window.innerHeight/2;let r=0,c=0;function p(a){r=a.clientX-l,c=a.clientY-e}return document.addEventListener("mousemove",p,!1),y(()=>{}),i(({elapsed:a})=>{o.uniforms.u_time.value+=.001,o.uniforms.u_mouse.value=new s(r,c)}),(a,G)=>(C(),P("TresMesh",{ref:"MeshRef",rotation:[Math.PI/2,0,0]},[u("TresPlaneGeometry",x,null,512),u("TresShaderMaterial",h(T(o)),null,16)],8,M))}}),{defineComponent:E}=await n("vue"),{createElementVNode:t,unref:R,normalizeProps:V,guardReactiveProps:b,createVNode:f,resolveComponent:S,mergeProps:$,withCtx:z,openBlock:H,createBlock:L}=await n("vue"),N={ref:"perspectiveCameraRef",position:[0,1500,0],fov:45,near:1,far:1e4},{onMounted:D}=await n("vue"),X=E({__name:"rayMarchingTranform",setup(m){const i={clearColor:"#000000",shadows:!0,alpha:!1,useLegacyLights:!0},o={autoRotate:!1,enableDamping:!0};return D(()=>{}),(l,e)=>{const r=S("TresCanvas");return H(),L(r,$(i,{"window-size":""}),{default:z(()=>[t("TresPerspectiveCamera",N,null,512),f(R(v),V(b(o)),null,16),e[0]||(e[0]=t("TresAmbientLight",{color:"#ffffff"},null,-1)),e[1]||(e[1]=t("TresDirectionalLight",{position:[100,100,0],intensity:.5,color:"#ffffff"},null,-1)),f(B),e[2]||(e[2]=t("TresAxesHelper",{args:[1e3],position:[0,19,0]},null,-1)),e[3]||(e[3]=t("TresGridHelper",{args:[6e3,100],position:[0,19,0]},null,-1))]),_:1},16)}}});export{X as default};
