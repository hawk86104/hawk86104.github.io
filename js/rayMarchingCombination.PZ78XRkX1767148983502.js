import{importShared as e}from"./3d-tiles-renderer.DZNovkLO1767148983502.js";import{_l as d,Kk as v}from"./index.DTe2qqjO1767148983502.js";const _=`varying vec2 vUv;
void main(){
	gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);
	vUv=uv;
}`,x=`#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec3 u_mouse;
uniform float u_time;
varying vec2 vUv;
float sphere(vec3 p,float d){
  return(length(p*2.)-d)/2.;
}

float sdPyramid(vec3 p,float h)
{
  float m2=h*h+.25;
  
  p.xz=abs(p.xz);
  p.xz=(p.z>p.x)?p.zx:p.xz;
  p.xz-=.5;
  
  vec3 q=vec3(p.z,h*p.y-.5*p.x,h*p.x+.5*p.y);
  
  float s=max(-q.x,0.);
  float t=clamp((q.y-.5*p.z)/(m2+.25),0.,1.);
  
  float a=m2*(q.x+s)*(q.x+s)+q.y*q.y;
  float b=m2*(q.x+.5*t)*(q.x+.5*t)+(q.y-m2*t)*(q.y-m2*t);
  
  float d2=min(q.y,-q.x*m2-q.y*.5)>0.?0.:min(a,b);
  
  return sqrt((d2+q.z*q.z)/m2)*sign(max(q.z,-p.y));
}
float sdBoxFrame(vec3 p,vec3 b,float e)
{
  p=abs(p)-b;
  vec3 q=abs(p+e)-e;
  return min(min(
      length(max(vec3(p.x,q.y,q.z),0.))+min(max(p.x,max(q.y,q.z)),0.),
      length(max(vec3(q.x,p.y,q.z),0.))+min(max(q.x,max(p.y,q.z)),0.)),
      length(max(vec3(q.x,q.y,p.z),0.))+min(max(q.x,max(q.y,p.z)),0.));
    }
    mat2 rot2D(float angle){
      float s=sin(angle);
      float c=cos(angle);
      return mat2(c,-s,s,c);
    }
    float map(vec3 p){
      // p.xy*=rot2D(u_time);
      vec3 pos=vec3(sin(u_time*10.),0.,0.);
      float spheresdf=sphere(p,.5);
      float BoxFramesdf=sdBoxFrame(p,vec3(.5,.3,.5),.025);
      float entity=min(BoxFramesdf,spheresdf);
      entity=min(sdPyramid(-p-vec3(1.,0.,0.),1.5),entity);
      return entity;
    }
    
    void main(){
      vec3 ro=vec3(0.,0.,-4.);//起始位置
      vec3 rd=normalize(vec3(vUv-.5,1.));//方向
      // horizontal camera rotation
      
      ro.xz*=rot2D(-u_mouse.x*.001);
      rd.xz*=rot2D(-u_mouse.x*.001);
      ro.xy*=rot2D(-u_mouse.y*.001);
      rd.xy*=rot2D(-u_mouse.y*.001);
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
      
    }`,{defineComponent:h}=await e("vue"),{createElementVNode:c,normalizeProps:y,guardReactiveProps:g,openBlock:q,createElementBlock:w}=await e("vue"),z=["rotation"],C={ref:"TresTubeGeometryRef",args:[1e3,1e3]},{DoubleSide:P,Vector2:i}=await e("three"),{watchEffect:b}=await e("vue"),B=h({__name:"rayMarchingMaterialCombination",setup(u){const{onBeforeRender:a}=d(),t={transparent:!0,depthWrite:!0,depthTest:!0,side:P,vertexShader:_,fragmentShader:x,uniforms:{u_resolution:{value:new i(window.innerWidth,window.innerHeight)},u_mouse:{value:new i(0,0)},u_time:{value:0}}},m=window.innerWidth/2,n=window.innerHeight/2;let o=0,l=0;function f(r){o=r.clientX-m,l=r.clientY-n}return document.addEventListener("mousemove",f,!1),b(()=>{}),a(({elapsed:r})=>{t.uniforms.u_time.value+=.001,t.uniforms.u_mouse.value=new i(o,l)}),(r,N)=>(q(),w("TresMesh",{ref:"MeshRef",rotation:[Math.PI/2,0,0]},[c("TresPlaneGeometry",C,null,512),c("TresShaderMaterial",y(g(t)),null,16)],8,z))}}),{defineComponent:M}=await e("vue"),{createElementVNode:s,unref:T,normalizeProps:k,guardReactiveProps:D,createVNode:p,resolveComponent:E,mergeProps:R,withCtx:V,openBlock:S,createBlock:$}=await e("vue"),F={ref:"perspectiveCameraRef",position:[0,1500,0],fov:45,near:1,far:1e4},{onMounted:L}=await e("vue"),G=M({__name:"rayMarchingCombination",setup(u){const a={clearColor:"#000000",shadows:!0,alpha:!1,useLegacyLights:!0},t={autoRotate:!1,enableDamping:!0};return L(()=>{}),(m,n)=>{const o=E("TresCanvas");return S(),$(o,R(a,{"window-size":""}),{default:V(()=>[s("TresPerspectiveCamera",F,null,512),p(T(v),k(D(t)),null,16),n[0]||(n[0]=s("TresAmbientLight",{color:"#ffffff"},null,-1)),n[1]||(n[1]=s("TresDirectionalLight",{position:[100,100,0],intensity:.5,color:"#ffffff"},null,-1)),p(B)]),_:1},16)}}});export{G as default};
