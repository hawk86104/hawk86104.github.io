import{importShared as e}from"./3d-tiles-renderer.DZNovkLO1767148983502.js";import{_l as u,Kk as m}from"./index.DTe2qqjO1767148983502.js";const h=`varying vec2 vUv;
void main(){
	gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);
	vUv=uv;
}`,b=`#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec3 u_mouse;
uniform float u_time;
varying vec2 vUv;

mat2 rot2D(float angle){
  float s=sin(angle);
  float c=cos(angle);
  return mat2(c,-s,s,c);
}

float sdCutHollowSphere(vec3 p,float r,float h,float t)
{
  float w=sqrt(r*r-h*h);
  vec2 q=vec2(length(p.xz),p.y);
  return((h*q.x<w*q.y)?length(q-vec2(w,h)):
  abs(length(q)-r))-t;
}
vec4 sdstripe(vec3 p,vec3 color){
  p.xz=abs(p.xz);
  float d1=sdCutHollowSphere(p-vec3(.0,-3.3,0.),.8,.01,.01);
  float d2=sdCutHollowSphere(p-vec3(.9,-3.3,.9),.5,.005,.01);
  float d=min(d1,d2);
  return vec4(d,color);
}
vec4 sdCutSphere(vec3 p,float r,float h,vec3 color)
{
  
  float w=sqrt(r*r-h*h);
  
  vec2 q=vec2(length(p.xz),p.y);
  float s=max((h-r)*q.x*q.x+w*w*(h+r-2.*q.y),h*q.x-w*q.y);
  float d=(s<0.)?length(q)-r:
  (q.x<w)?h-q.y:
  length(q-vec2(w,h));
  
  return vec4(d,color);
}
vec4 sdPlane(vec3 p,vec3 color){
  return vec4(-p.y+.2,color);
  
}
vec4 sdCappedCone(vec3 p,vec3 a,vec3 b,float ra,float rb,vec3 color)
{
  float rba=rb-ra;
  float baba=dot(b-a,b-a);
  float papa=dot(p-a,p-a);
  float paba=dot(p-a,b-a)/baba;
  float x=sqrt(papa-paba*paba*baba);
  float cax=max(0.,x-((paba<.5)?ra:rb));
  float cay=abs(paba-.5)-.5;
  float k=rba*rba+baba;
  float f=clamp((rba*(x-ra)+paba*baba)/k,0.,1.);
  float cbx=x-ra-f*rba;
  float cby=paba-f;
  float s=(cbx<0.&&cay<0.)?-1.:1.;
  return vec4(s*sqrt(min(cax*cax+cay*cay*baba,
      cbx*cbx+cby*cby*baba)),color);
    }
    float smin(float d1,float d2,float k){
      float h=clamp(.5+.5*(d2-d1)/k,0.,1.);
      return mix(d2,d1,h)-k*h*(1.-h);
    }
    vec4 colorMin(vec4 a,vec4 b){
      if(a.x<b.x){
        return a;
      }else{
        return b;
      }
    }
    //模糊摆动，y的值越大，摆动频率越大
    vec3 bendPoint(vec3 p,float k)
    {
      float c=cos(k*p.y);
      float s=sin(k*p.y);
      mat2 m=mat2(c,-s,s,c);
      vec3 q=vec3(m*p.xy,p.z);
      return q;
    }
    vec4 map(vec3 p){
      vec3 q=p;
      p=bendPoint(p,sin(u_time*5.));
      vec3 pp2=vec3(0.,.8,0.);
      vec3 pp1=vec3(0.,-.2,0.);
      vec4 CappedConesdf=sdCappedCone(-p,pp1,pp2,.2,.1,vec3(.8667,.8667,.7216));
      vec4 CutSpheresdf=sdCutSphere(-p-vec3(0.,.4,0.),.5,.2,vec3(.9608,.4667,.4))-.1;
      vec4 entity=colorMin(CappedConesdf,CutSpheresdf);
      entity=colorMin(entity,sdstripe(p*4.,vec3(3.5))/4.);
      entity=colorMin(entity,sdPlane(q,vec3(.4196,.5529,.3647)));
      return entity;
    }
    
    void main(){
      vec3 ro=vec3(0.,0.,-8.);//起始位置
      vec3 rd=normalize(vec3(vUv-.5,1.));//方向
      ro.xz*=rot2D(-u_time);
      rd.xz*=rot2D(-u_time);
      ro.y-=4.;
      rd.y+=.5;
      float t=0.;
      vec4 color=vec4(0.);
      for(int i=0;i<80;i++){
        vec3 p=ro+rd*t;
        vec4 d=map(p)/1.8;
        t+=d.x;
        //优化效率
        if(t>100.||d.x<.001){
          break;
        }
        color=vec4(t*d.yzw*.13,1.);
      }
      
      gl_FragColor=color;
      
    }`,{defineComponent:_}=await e("vue"),{createElementVNode:p,normalizeProps:w,guardReactiveProps:x,openBlock:y,createElementBlock:g}=await e("vue"),C=["rotation"],q={ref:"TresTubeGeometryRef",args:[1e3,1e3]},{DoubleSide:k,Vector2:c}=await e("three"),{watchEffect:M}=await e("vue"),P=_({__name:"rayMarchingMaterialMushroom",setup(v){const{onBeforeRender:r}=u(),t={transparent:!0,depthWrite:!0,depthTest:!0,side:k,vertexShader:h,fragmentShader:b,uniforms:{u_resolution:{value:new c(window.innerWidth,window.innerHeight)},u_mouse:{value:new c(0,0)},u_time:{value:0}}},s=window.innerWidth/2,n=window.innerHeight/2;let o=0,i=0;function d(a){o=a.clientX-s,i=a.clientY-n}return document.addEventListener("mousemove",d,!1),M(()=>{}),r(({elapsed:a})=>{t.uniforms.u_time.value+=.001,t.uniforms.u_mouse.value=new c(o,i)}),(a,N)=>(y(),g("TresMesh",{ref:"MeshRef",rotation:[Math.PI/2,0,0]},[p("TresPlaneGeometry",q,null,512),p("TresShaderMaterial",w(x(t)),null,16)],8,C))}}),{defineComponent:z}=await e("vue"),{createElementVNode:l,unref:S,normalizeProps:T,guardReactiveProps:B,createVNode:f,resolveComponent:E,mergeProps:R,withCtx:V,openBlock:H,createBlock:$}=await e("vue"),D={ref:"perspectiveCameraRef",position:[0,1500,0],fov:45,near:1,far:1e4},{onMounted:L}=await e("vue"),W=z({__name:"rayMarchingMushroom",setup(v){const r={clearColor:"#000000",shadows:!0,alpha:!1,useLegacyLights:!0},t={autoRotate:!1,enableDamping:!0};return L(()=>{}),(s,n)=>{const o=E("TresCanvas");return H(),$(o,R(r,{"window-size":""}),{default:V(()=>[l("TresPerspectiveCamera",D,null,512),f(S(m),T(B(t)),null,16),n[0]||(n[0]=l("TresAmbientLight",{color:"#ffffff"},null,-1)),n[1]||(n[1]=l("TresDirectionalLight",{position:[100,100,0],intensity:.5,color:"#ffffff"},null,-1)),f(P)]),_:1},16)}}});export{W as default};
