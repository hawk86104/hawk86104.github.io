import{importShared as n}from"./3d-tiles-renderer.DZNovkLO1767148983502.js";import{_l as d,Kk as f}from"./index.DTe2qqjO1767148983502.js";const x=`varying vec2 vUv;
void main(){
	gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);
	vUv=uv;
}`,_=`#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec3 u_mouse;
uniform float u_time;
varying vec2 vUv;
vec4 sphere(vec3 p,float d,vec3 color){
  return vec4((length(p*2.)-d)/2.,color);
}
vec4 colorMin(vec4 a,vec4 b){
  if(a.x<b.x){
    return a;
  }else{
    return b;
  }
}
vec4 sdPyramid(vec3 p,float h,vec3 color)
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
  
  return vec4(sqrt((d2+q.z*q.z)/m2)*sign(max(q.z,-p.y)),color);
}
vec4 sdBoxFrame(vec3 p,vec3 b,float e,vec3 color)
{
  p=abs(p)-b;
  vec3 q=abs(p+e)-e;
  return vec4(min(min(
        length(max(vec3(p.x,q.y,q.z),0.))+min(max(p.x,max(q.y,q.z)),0.),
        length(max(vec3(q.x,p.y,q.z),0.))+min(max(q.x,max(p.y,q.z)),0.)),
        length(max(vec3(q.x,q.y,p.z),0.))+min(max(q.x,max(q.y,p.z)),0.)),color);
      }
      mat2 rot2D(float angle){
        float s=sin(angle);
        float c=cos(angle);
        return mat2(c,-s,s,c);
      }
      //彩色画板
      vec3 palette(float t){
        vec3 a=vec3(.5,.5,.5);
        vec3 b=vec3(.5,.5,.5);
        vec3 c=vec3(1.,1.,1.);
        vec3 d=vec3(.263,.416,.557);
        
        return a+b*cos(6.28318*(c*t+d));
      }
      vec4 map(vec3 p){
        p.xy*=rot2D(u_time);
        // p=(fract(p)-.5)*2.;
        // p=mod(p,1.)-.5;
        vec3 pos=vec3(sin(u_time*10.),0.,0.);
        vec4 spheresdf=sphere(p,.5,vec3(.2118,.0314,.9333));
        vec4 BoxFramesdf=sdBoxFrame(p,vec3(.5,.3,.5),.025,vec3(.1059,.9725,.0275))/2.;
        vec4 entity=colorMin(BoxFramesdf,spheresdf);
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
        vec4 color=vec4(0.);
        vec4 d=vec4(0.);
        for(int i=0;i<80;i++){
          vec3 p=ro+rd*t;
          p.xy*=rot2D(t*.2);
          d=map(p);
          t+=d.x;
          //优化效率
          if(d.x<.001){
            break;
          }
          if(t>100.){
            color=vec4(.5255,.2078,.2078,1.);
            gl_FragColor=color;
          }else{
            color=vec4(t*d.yzw,1.);
            gl_FragColor=color;
          }
          
        }
        // color=vec4(t*d.yzw,1.);
        
      }`,{defineComponent:g}=await n("vue"),{createElementVNode:m,normalizeProps:h,guardReactiveProps:y,openBlock:q,createElementBlock:w}=await n("vue"),z=["rotation"],b={ref:"TresTubeGeometryRef",args:[1e3,1e3]},{DoubleSide:C,Vector2:i}=await n("three"),{watchEffect:P}=await n("vue"),M=g({__name:"rayMarchingMaterialColor",setup(v){const{onBeforeRender:c}=d(),o={transparent:!0,depthWrite:!0,depthTest:!0,side:C,vertexShader:x,fragmentShader:_,uniforms:{u_resolution:{value:new i(window.innerWidth,window.innerHeight)},u_mouse:{value:new i(0,0)},u_time:{value:0}}},s=window.innerWidth/2,e=window.innerHeight/2;let r=0,l=0;function u(a){r=a.clientX-s,l=a.clientY-e}return document.addEventListener("mousemove",u,!1),P(()=>{}),c(({elapsed:a})=>{o.uniforms.u_time.value+=.001,o.uniforms.u_mouse.value=new i(r,l)}),(a,L)=>(q(),w("TresMesh",{ref:"MeshRef",rotation:[Math.PI/2,0,0]},[m("TresPlaneGeometry",b,null,512),m("TresShaderMaterial",h(y(o)),null,16)],8,z))}}),{defineComponent:B}=await n("vue"),{createElementVNode:t,unref:T,normalizeProps:k,guardReactiveProps:D,createVNode:p,resolveComponent:E,mergeProps:R,withCtx:V,openBlock:F,createBlock:S}=await n("vue"),$={ref:"perspectiveCameraRef",position:[0,800,0],fov:45,near:1,far:1e4},{onMounted:H}=await n("vue"),U=B({__name:"rayMarchingColor",setup(v){const c={clearColor:"#000000",shadows:!0,alpha:!1,useLegacyLights:!0},o={autoRotate:!0,enableDamping:!0};return H(()=>{}),(s,e)=>{const r=E("TresCanvas");return F(),S(r,R(c,{"window-size":""}),{default:V(()=>[t("TresPerspectiveCamera",$,null,512),p(T(f),k(D(o)),null,16),e[0]||(e[0]=t("TresAmbientLight",{color:"#ffffff"},null,-1)),e[1]||(e[1]=t("TresDirectionalLight",{position:[100,100,0],intensity:.5,color:"#ffffff"},null,-1)),p(M),e[2]||(e[2]=t("TresAxesHelper",{args:[1e3],position:[0,19,0]},null,-1)),e[3]||(e[3]=t("TresGridHelper",{args:[6e3,100],position:[0,19,0]},null,-1))]),_:1},16)}}});export{U as default};
