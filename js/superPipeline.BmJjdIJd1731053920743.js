import{e as n}from"./@tresjs.hJVQLtpa1731053920743.js";import{a0 as t,az as e}from"./three.eGpwEcxC1731053920743.js";import{_ as o}from"./argestCircle.iQbYZf4A1731053920743.js";import{d as r,e as a,o as c,f as i,g as f,J as l,aj as s,ak as d,m as p}from"./@vue.u2cBPEWn1731053920743.js";import"./@vueuse.weJ7f3dz1731053920743.js";const v=x;!function(n,t){const e=x,o=y();for(;;)try{if(760432===parseInt(e(324))/1+parseInt(e(342))/2+-parseInt(e(338))/3*(parseInt(e(330))/4)+parseInt(e(325))/5+parseInt(e(320))/6+-parseInt(e(354))/7+-parseInt(e(339))/8)break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const u=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e[x(334)](t,arguments);return e=null,n}}:function(){};return n=!1,o}}();!function(){u(this,(function(){const n=x,t=new RegExp(n(355)),e=new RegExp(n(318),"i"),o=g(n(326));t[n(346)](o+n(345))&&e.test(o+n(358))?g():o("0")}))()}();const m=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e[x(334)](t,arguments);return e=null,n}}:function(){};return n=!1,o}}();function x(n,t){const e=y();return(x=function(n,t){return e[n-=313]})(n,t)}function y(){const n=["quanMeshRef","toString","trace","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","console","4045866CWtpGI","string","info","__proto__","422705KRjWPw","7339255SlrsBE","init","TresCanvas","perspectiveCameraRef","gger","12sbMkNQ","TresDirectionalLight","bind","rotation-x","apply","return (function() ","length","TresPerspectiveCamera","590595EMDkQf","9734640fIfbWt","#ffffff","constructor","2762738mLsViU","call","superPipeline","chain","test","debu","TresAmbientLight","TresShaderMaterial","uniforms","while (true) {}","error","table","9648653tHrFSz","function *\\( *\\)","prototype","action","input","warn",'{}.constructor("return this")( )'];return(y=function(){return n})()}m(void 0,(function(){const n=x;let t;try{t=Function(n(335)+n(314)+");")()}catch(r){t=window}const e=t[n(319)]=t.console||{},o=["log",n(313),n(322),n(352),"exception",n(353),n(317)];for(let a=0;a<o[n(336)];a++){const t=m.constructor[n(356)][n(332)](m),r=o[a],c=e[r]||t;t[n(323)]=m[n(332)](m),t[n(316)]=c[n(316)][n(332)](c),e[r]=t}}))();const h={ref:v(328),position:[0,0,1800],fov:45,near:1,far:1e4},b=[v(333)],D=r({__name:v(344),setup(r){const v={clearColor:"#000000",shadows:!0,alpha:!1,useLegacyLights:!0},u={uniforms:{uTime:{type:"f",value:0}},vertexShader:o,fragmentShader:"// 光线追踪实例，想学习每行代码的逻辑，请联系ICE社区-Jsonco\nvarying vec2 vUv;\nuniform float uTime;\n#define FAR 50.\nfloat svObjID,svObjID2;\nvec3 vObjID;\n#define TUN 0.\n#define ROD 1.\n#define BLT 2.\nmat2 rot(float th){vec2 a=sin(vec2(1.5707963,0)+th);return mat2(a,-a.y,a.x);}\nvec3 camPath(float t){\n  float a=sin(t*3.14159265/16.+1.5707963);\n  float b=cos(t*3.14159265/16.);\n  return vec3(a,b*a*.5,t);\n}\n\nvec3 camPathPL(float t){\n  float it=floor(t+1.);\n  float ft=t-it;\n  float a=sin(it*3.14159265/16.+1.5707963);\n  float b=cos(it*3.14159265/16.);\n  vec2 p0=vec2(a,b*a*.5);\n  a=sin((it+1.)*3.14159265/16.+1.5707963);\n  b=cos((it+1.)*3.14159265/16.);\n  vec2 p1=vec2(a,b*a*.5);\n  vec2 p=mix(p0,p1,ft);\n  return vec3(p,t);\n}\nvec2 objMin(vec2 a,vec2 b){\n  return a.x<b.x?a:b;\n}\n\nfloat map(vec3 p){\n  const float depth=.25;\n  p.xy-=camPath(p.z).xy;\n  float tun=(1.+depth)-length(p.xy);\n  vec3 q=p;\n  vec3 q2=p;\n  float a=atan(q.y,q.x)/6.2831853;\n  float ia=(floor(a*5.)+.5)/5.*6.2831853;\n  float ia2=(floor(a*15.)+.5)/15.*6.2831853;\n  q.xy*=rot(ia+sign(mod(q.z+1.,4.)-2.)*3.14159/15.);//\n  q2.xy*=rot(ia2);\n  q.x=mod(q.x,2.)-1.;\n  q.z=mod(q.z,2.)-1.;\n  q2.x=mod(q2.x,(2.+.25))-(2.+.25)/2.;\n  q=abs(q);\n  q2=abs(q2);\n  float tunDetail=max(min(q.y,q.z)-.07,-(min(q.y,q.z)-.007));\n  tun=min(tun,max(tunDetail,tun-depth));\n  float blt=max(max(q2.x*.866025+q2.y*.5,q2.y)-.055,q.z-.16);\n  float thread=max(sin(q.z*6.283*64.)*2.,0.)*.002;\n  float rod=max(length(q2.xy)-.025+thread,q.z-.19);\n  rod=min(rod,max(length(q2.xy)-.075,q.z-.09));\n  vObjID=vec3(tun,blt,rod);\n  return min(min(tun,blt),rod);\n}\nfloat refTrace(vec3 ro,vec3 rd){\n  float t=0.;\n  for(int i=0;i<12;i++){\n    float d=map(ro+rd*t);\n    if(abs(d)<.005*(t*.25+1.)||t>FAR)break;\n    t+=d;\n  }\n  return t;\n}\n\nfloat trace(vec3 ro,vec3 rd){\n  float t=0.,d;\n  for(int i=0;i<96;i++){\n    d=map(ro+rd*t);\n    if(abs(d)<.001*(t*.125+1.)||t>FAR)break;\n    t+=d;\n  }\n  return min(t,FAR);\n}\nvec3 nrHyb(vec3 p,inout float crv,float ef){\n  vec2 e=vec2(-1.,1.)*.66*ef/450.;\n  float d1=map(p+e.yxx),d2=map(p+e.xxy);\n  float d3=map(p+e.xyx),d4=map(p+e.yyy);\n  float d=map(p);\n  float d5,d6;\n  crv=clamp((d1+d2+d3+d4-d*4.)*24.+.5,0.,1.);\n  e=vec2(.005,0);\n  d1=map(p+e.xyy),d2=map(p-e.xyy);\n  d3=map(p+e.yxy),d4=map(p-e.yxy);\n  d5=map(p+e.yyx),d6=map(p-e.yyx);\n  return normalize(vec3(d1-d2,d3-d4,d5-d6));\n}\nvec3 nrRef(in vec3 p,inout float crv,in float ef){\n  vec2 e=vec2(-1.,1.)*.66*ef/450.;\n  float d1=map(p+e.yxx),d2=map(p+e.xxy);\n  float d3=map(p+e.xyx),d4=map(p+e.yyy);\n  float d=map(p);\n  crv=clamp((d1+d2+d3+d4-d*4.)*24.+.5,0.,1.);\n  e=vec2(-1.,1.)*.002;\n  d1=map(p+e.yxx),d2=map(p+e.xxy);\n  d3=map(p+e.xyx),d4=map(p+e.yyy);\n  return normalize(e.yxx*d1+e.xxy*d2+e.xyx*d3+e.yyy*d4);\n}\nfloat cao(in vec3 p,in vec3 n){\n  float sca=1.,occ=0.;\n  for(float i=0.;i<5.;i++){\n    float hr=.01+i*.5/4.;\n    float dd=map(n*hr+p);\n    occ+=(hr-dd)*sca;\n    sca*=.7;\n  }\n  return clamp(1.-occ,0.,1.);\n}\nfloat softShadow(vec3 ro,vec3 lp,float k){\n  const int maxIterationsShad=20;\n  vec3 rd=(lp-ro);\n  float shade=1.;\n  float dist=.05;\n  float end=max(length(rd),.001);\n  rd/=end;\n  for(int i=0;i<maxIterationsShad;i++){\n    float h=map(ro+rd*dist);\n    shade=min(shade,k*h/dist);\n    dist+=clamp(h,.01,.25);\n    if(h<.001||dist>end)break;\n  }\n  return min(max(shade,0.)+.2,1.);\n}\nvec3 palette(float t){\n  vec3 a=vec3(.5,.5,.5);\n  vec3 b=vec3(.5,.5,.5);\n  vec3 c=vec3(1.,1.,1.);\n  vec3 d=vec3(sin(uTime*.2)*.5+.5,cos(uTime*.25)*.5+.5,sin(uTime*.3+1.)*.5+.5);\n  return a+b*cos(6.28318*(c*t+d));\n}\nvoid main(){\n  vec2 u=(vUv-vec2(.5))*2.;\n  #ifdef THREE_D\n  float sg=sign(fragCoord.x-.5*iResolution.x);\n  u.x-=sg*.25*iResolution.x/iResolution.y;\n  #endif\n  float speed=2.;\n  vec3 ro=camPath(uTime*speed+.0);\n  vec3 lk=camPath(uTime*speed+.5);\n  vec3 lp=camPath(uTime*speed+2.);\n  lp.y+=.5;\n  #ifdef THREE_D\n  ro.x-=sg*.15;lk.x-=sg*.15;lp.x-=sg*.15;\n  #endif\n  float FOV=.75;\n  vec3 fwd=normalize(lk-ro);\n  vec3 rgt=normalize(vec3(fwd.z,0.,-fwd.x));\n  vec3 up=cross(fwd,rgt);\n  vec3 rd=fwd+FOV*(u.x*rgt+u.y*up);\n  rd=normalize(vec3(rd.xy,(rd.z-length(rd.xy)*.25)*.75));\n  float swivel=camPath(lk.z).x;\n  rd.xy=rot(swivel/48.)*rd.xy;\n  rd.xz=rot(swivel/32.)*rd.xz;\n  float t=trace(ro,rd);\n  vec2 vObj=objMin(vec2(vObjID.x,TUN),vec2(vObjID.y,BLT));\n  vObj=objMin(vObj,vec2(vObjID.z,ROD));\n  svObjID=vObj.y;\n  vec3 sp=ro+rd*t;\n  float crv=1.,ef=8.;\n  vec3 sn=nrHyb(sp,crv,ef);\n  float sh=softShadow(sp,lp,16.);\n  float ao=cao(sp,sn);\n  vec3 ld=lp-sp;\n  float lDist=max(length(ld),.0001);\n  ld/=lDist;\n  float atten=1./(1.+lDist*.25+lDist*lDist*.025);\n  const float tSize0=1./1.;\n  vec3 tx=palette(rd.z+uTime*.4);\n  tx=tx*.5+smoothstep(.02,.8,tx)*1.;\n  float gr=dot(tx,vec3(.299,.587,.114));\n  if(svObjID==TUN)tx*=vec3(1);\n  else if(svObjID==ROD)tx=(gr*.5+.5)*vec3(1);\n  else if(svObjID==BLT)tx=(tx*.5+.5)*vec3(1.4,.7,.05);\n  float dif=max(dot(ld,sn),0.);\n  float spe=pow(max(dot(reflect(rd,sn),ld),0.),64.);\n  float Schlick=pow(1.-max(dot(rd,normalize(rd+ld)),0.),5.);\n  Schlick=mix(.5,1.,Schlick);\n  if(svObjID!=TUN)\n  dif=(pow(dif,4.)*.5+pow(dif,8.)*.5)*3.;\n  vec3 ref=reflect(rd,sn);\n  float rt=refTrace(sp+ref*.1,ref);\n  vObj=objMin(vec2(vObjID.x,TUN),vec2(vObjID.y,BLT));\n  vObj=objMin(vObj,vec2(vObjID.z,ROD));\n  svObjID2=vObj.y;\n  float crv2=1.;\n  vec3 rsp=sp+ref*rt;\n  vec3 rsn=nrRef(rsp,crv2,ef);\n  vec3 rCol=palette(u.x+uTime*.4);\n  rCol=smoothstep(.02,.8,rCol)*2.;\n  gr=dot(rCol,vec3(.299,.587,.114));\n  if(svObjID2==TUN)rCol*=vec3(1);\n  else if(svObjID2==ROD)rCol=(gr*.5+.5)*vec3(1);\n  else if(svObjID2==BLT)rCol=(rCol*.5+.5)*vec3(1.4,.7,.05);\n  float rDiff=max(dot(rsn,normalize(lp-rsp)),0.);\n  float rSpec=pow(max(dot(reflect(ref,rsn),normalize(lp-rsp)),0.),8.);\n  float rlDist=length(lp-rsp);\n  if(svObjID2!=TUN)rDiff=(pow(rDiff,4.)*.5+pow(rDiff,8.)*.5)*3.;\n  rCol=rCol*(rDiff+.25)+vec3(1.,.6,.2)*rSpec*2.;\n  rCol*=1./(1.+rlDist*.25+rlDist*rlDist*.025);\n  rCol*=min(crv2*1.5,1.);\n  vec3 fc=tx*(dif+ao*.3)+vec3(1,.6,.2)*spe*Schlick*2.;\n  if(svObjID!=TUN)fc+=rCol*.5;\n  else fc+=rCol*.25;\n  fc*=atten*sh*ao;\n  fc*=clamp(crv*1.5,0.,1.);\n  vec3 bg=vec3(1,.7,.4);\n  fc=mix(fc,bg*2.,smoothstep(0.,.95,t/FAR));\n  gl_FragColor=vec4(pow(clamp(fc,0.,1.),vec3(1./2.)),1.);// 1./2.2, etc.\n}\n",side:t,blending:e,depthWrite:!1,transparent:!0},{onLoop:m}=n();return m((({delta:n})=>{u[x(350)].uTime.value+=n})),(n,t)=>{const e=x,o=a(e(327));return c(),i(o,p(v,{"window-size":""}),{default:f((()=>[l(e(337),h,null,512),t[1]||(t[1]=l(e(348),{color:e(340)},null,-1)),t[2]||(t[2]=l(e(331),{position:[100,100,0],intensity:.5,color:e(340)},null,-1)),l("TresMesh",{ref:e(315),"rotation-x":Math.PI},[t[0]||(t[0]=l("TresPlaneGeometry",{args:[4e3,4e3]},null,-1)),l(e(349),s(d(u)),null,16)],8,b)])),_:1},16)}}});function g(n){function t(n){const e=x;if(typeof n===e(321))return function(n){}.constructor(e(351))[e(334)]("counter");1!==(""+n/n)[e(336)]||n%20==0?function(){return!0}[e(341)]("debu"+e(329))[e(343)](e(357)):function(){return!1}[e(341)](e(347)+e(329))[e(334)]("stateObject"),t(++n)}try{if(n)return t;t(0)}catch(e){}}export{D as default};