import{$ as n,d as t}from"./@tresjs.6SjGVF2a1724511658098.js";import{Z as e,j as o}from"./three.6cxCQsIj1724511658098.js";import{d as r,a1 as a,o as c,D as i,J as s,aj as u,ak as f,q as l,e as p,f as v,g as d,j as h,u as b,m}from"./@vue.Q1VpS3901724511658098.js";import"./tweakpane.yHWGBmom1724511658098.js";import"./@vueuse.rsVLbIR91724511658098.js";const y=q;!function(n,t){const e=q,o=I();for(;;)try{if(674161===-parseInt(e(524))/1+parseInt(e(527))/2*(parseInt(e(526))/3)+-parseInt(e(486))/4*(-parseInt(e(516))/5)+-parseInt(e(536))/6+parseInt(e(531))/7+-parseInt(e(493))/8*(parseInt(e(485))/9)+-parseInt(e(498))/10*(-parseInt(e(503))/11))break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const g=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e.apply(t,arguments);return e=null,n}}:function(){};return n=!1,o}}();!function(){g(this,(function(){const n=q,t=new RegExp("function *\\( *\\)"),e=new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","i"),o=j(n(505));t[n(506)](o+n(504))&&e.test(o+n(533))?j():o("0")}))()}();const w=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e[q(522)](t,arguments);return e=null,n}}:function(){};return n=!1,o}}();w(void 0,(function(){const n=q,t=function(){const n=q;let t;try{t=Function(n(529)+n(501)+");")()}catch(e){t=window}return t}(),e=t[n(512)]=t[n(512)]||{},o=[n(507),"warn",n(513),n(517),n(535),n(502),n(499)];for(let r=0;r<o.length;r++){const t=w[n(530)][n(495)].bind(w),a=o[r],c=e[a]||t;t[n(487)]=w[n(538)](w),t[n(509)]=c[n(509)].bind(c),e[a]=t}}))();const x=["rotation"],_={ref:y(528),args:[1e3,1e3]};function q(n,t){const e=I();return(q=function(n,t){return e[n-=485]})(n,t)}function I(){const n=["log","counter","toString","stateObject","MeshRef","console","info","clientX","length","372740kkWopV","error","clientY","call","value","innerWidth","apply","u_time","1160974kXujjX","addEventListener","87yLQEdJ","43898qFTNyP","TresTubeGeometryRef","return (function() ","constructor","9137576OcUqPX","TresMesh","input","TresPlaneGeometry","exception","906048BHczrQ","TresShaderMaterial","bind","369KVQIyG","20tnBGJL","__proto__","innerHeight","uniforms","rayMarchingMaterialMushroom","action","u_mouse","156936MRSnNz","gger","prototype","debu","string","47110zZGmPK","trace","while (true) {}",'{}.constructor("return this")( )',"table","1111ADwxjC","chain","init","test"];return(I=function(){return n})()}const C=r({__name:y(490),setup(t){const r=y,{onLoop:l,onAfterLoop:p}=n(),v={transparent:!0,depthWrite:!0,depthTest:!0,side:e,vertexShader:"varying vec2 vUv;\nvoid main(){\n\tgl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);\n\tvUv=uv;\n}",fragmentShader:"#ifdef GL_ES\nprecision mediump float;\n#endif\n\nuniform vec2 u_resolution;\nuniform vec3 u_mouse;\nuniform float u_time;\nvarying vec2 vUv;\n\nmat2 rot2D(float angle){\n  float s=sin(angle);\n  float c=cos(angle);\n  return mat2(c,-s,s,c);\n}\n\nfloat sdCutHollowSphere(vec3 p,float r,float h,float t)\n{\n  float w=sqrt(r*r-h*h);\n  vec2 q=vec2(length(p.xz),p.y);\n  return((h*q.x<w*q.y)?length(q-vec2(w,h)):\n  abs(length(q)-r))-t;\n}\nvec4 sdstripe(vec3 p,vec3 color){\n  p.xz=abs(p.xz);\n  float d1=sdCutHollowSphere(p-vec3(.0,-3.3,0.),.8,.01,.01);\n  float d2=sdCutHollowSphere(p-vec3(.9,-3.3,.9),.5,.005,.01);\n  float d=min(d1,d2);\n  return vec4(d,color);\n}\nvec4 sdCutSphere(vec3 p,float r,float h,vec3 color)\n{\n  \n  float w=sqrt(r*r-h*h);\n  \n  vec2 q=vec2(length(p.xz),p.y);\n  float s=max((h-r)*q.x*q.x+w*w*(h+r-2.*q.y),h*q.x-w*q.y);\n  float d=(s<0.)?length(q)-r:\n  (q.x<w)?h-q.y:\n  length(q-vec2(w,h));\n  \n  return vec4(d,color);\n}\nvec4 sdPlane(vec3 p,vec3 color){\n  return vec4(-p.y+.2,color);\n  \n}\nvec4 sdCappedCone(vec3 p,vec3 a,vec3 b,float ra,float rb,vec3 color)\n{\n  float rba=rb-ra;\n  float baba=dot(b-a,b-a);\n  float papa=dot(p-a,p-a);\n  float paba=dot(p-a,b-a)/baba;\n  float x=sqrt(papa-paba*paba*baba);\n  float cax=max(0.,x-((paba<.5)?ra:rb));\n  float cay=abs(paba-.5)-.5;\n  float k=rba*rba+baba;\n  float f=clamp((rba*(x-ra)+paba*baba)/k,0.,1.);\n  float cbx=x-ra-f*rba;\n  float cby=paba-f;\n  float s=(cbx<0.&&cay<0.)?-1.:1.;\n  return vec4(s*sqrt(min(cax*cax+cay*cay*baba,\n      cbx*cbx+cby*cby*baba)),color);\n    }\n    float smin(float d1,float d2,float k){\n      float h=clamp(.5+.5*(d2-d1)/k,0.,1.);\n      return mix(d2,d1,h)-k*h*(1.-h);\n    }\n    vec4 colorMin(vec4 a,vec4 b){\n      if(a.x<b.x){\n        return a;\n      }else{\n        return b;\n      }\n    }\n    //模糊摆动，y的值越大，摆动频率越大\n    vec3 bendPoint(vec3 p,float k)\n    {\n      float c=cos(k*p.y);\n      float s=sin(k*p.y);\n      mat2 m=mat2(c,-s,s,c);\n      vec3 q=vec3(m*p.xy,p.z);\n      return q;\n    }\n    vec4 map(vec3 p){\n      vec3 q=p;\n      p=bendPoint(p,sin(u_time*5.));\n      vec3 pp2=vec3(0.,.8,0.);\n      vec3 pp1=vec3(0.,-.2,0.);\n      vec4 CappedConesdf=sdCappedCone(-p,pp1,pp2,.2,.1,vec3(.8667,.8667,.7216));\n      vec4 CutSpheresdf=sdCutSphere(-p-vec3(0.,.4,0.),.5,.2,vec3(.9608,.4667,.4))-.1;\n      vec4 entity=colorMin(CappedConesdf,CutSpheresdf);\n      entity=colorMin(entity,sdstripe(p*4.,vec3(3.5))/4.);\n      entity=colorMin(entity,sdPlane(q,vec3(.4196,.5529,.3647)));\n      return entity;\n    }\n    \n    void main(){\n      vec3 ro=vec3(0.,0.,-8.);//起始位置\n      vec3 rd=normalize(vec3(vUv-.5,1.));//方向\n      ro.xz*=rot2D(-u_time);\n      rd.xz*=rot2D(-u_time);\n      ro.y-=4.;\n      rd.y+=.5;\n      float t=0.;\n      vec4 color=vec4(0.);\n      for(int i=0;i<80;i++){\n        vec3 p=ro+rd*t;\n        vec4 d=map(p)/1.8;\n        t+=d.x;\n        //优化效率\n        if(t>100.||d.x<.001){\n          break;\n        }\n        color=vec4(t*d.yzw*.13,1.);\n      }\n      \n      gl_FragColor=color;\n      \n    }",uniforms:{u_resolution:{value:new o(window[r(521)],window[r(488)])},u_mouse:{value:new o(0,0)},u_time:{value:0}}},d=window[r(521)]/2,h=window[r(488)]/2;let b=0,m=0;return document[r(525)]("mousemove",(function(n){const t=r;b=n[t(514)]-d,m=n[t(518)]-h}),!1),a((()=>{})),l((({elapsed:n})=>{const t=r;v[t(489)][t(523)][t(520)]+=.001,v[t(489)][t(492)][t(520)]=new o(b,m)})),p((()=>{})),(n,t)=>{const e=r;return c(),i(e(532),{ref:e(511),rotation:[Math.PI/2,0,0]},[s(e(534),_,null,512),s(e(537),u(f(v)),null,16)],8,x)}}});function j(n){function t(n){const e=q;if(typeof n===e(497))return function(n){}[e(530)](e(500))[e(522)](e(508));1!==(""+n/n)[e(515)]||n%20==0?function(){return!0}[e(530)](e(496)+"gger")[e(519)](e(491)):function(){return!1}[e(530)]("debu"+e(494))[e(522)](e(510)),t(++n)}try{if(n)return t;t(0)}catch(e){}}const k=T;!function(n,t){const e=T,o=D();for(;;)try{if(515823===parseInt(e(494))/1*(-parseInt(e(476))/2)+parseInt(e(459))/3*(-parseInt(e(483))/4)+parseInt(e(463))/5+-parseInt(e(491))/6*(-parseInt(e(485))/7)+parseInt(e(468))/8+parseInt(e(479))/9+parseInt(e(487))/10*(-parseInt(e(462))/11))break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const z=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e[T(465)](t,arguments);return e=null,n}}:function(){};return n=!1,o}}();!function(){z(this,(function(){const n=T,t=new RegExp("function *\\( *\\)"),e=new RegExp(n(482),"i"),o=R("init");t[n(457)](o+n(495))&&e[n(457)](o+"input")?R():o("0")}))()}();const M=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e[T(465)](t,arguments);return e=null,n}}:function(){};return n=!1,o}}();M(void 0,(function(){const n=T,t=function(){let n;try{n=Function('return (function() {}.constructor("return this")( ));')()}catch(t){n=window}return n}(),e=t[n(488)]=t[n(488)]||{},o=["log",n(464),n(467),n(458),"exception",n(473),n(460)];for(let r=0;r<o[n(478)];r++){const t=M[n(469)][n(484)].bind(M),a=o[r],c=e[a]||t;t[n(474)]=M.bind(M),t[n(480)]=c[n(480)].bind(c),e[a]=t}}))();const S={ref:k(486),position:[0,1500,0],fov:45,near:1,far:1e4},P=s("TresAmbientLight",{color:k(472)},null,-1),L=s(k(489),{position:[100,100,0],intensity:.5,color:k(472)},null,-1);function T(n,t){const e=D();return(T=function(n,t){return e[n-=457]})(n,t)}const E=r({__name:k(481),setup(e){const o=k,r={clearColor:o(493),shadows:!0,alpha:!1,useLegacyLights:!0},a={autoRotate:!1,enableDamping:!0},{onLoop:i}=n();return i((({delta:n})=>{})),l((()=>{})),(n,e)=>{const i=o,l=p(i(475));return c(),v(l,m(r,{"window-size":""}),{default:d((()=>[s(i(477),S,null,512),h(b(t),u(f(a)),null,16),P,L,h(C)])),_:1},16)}}});function R(n){function t(n){const e=T;if("string"==typeof n)return function(n){}[e(469)](e(470))[e(465)]("counter");1!==(""+n/n)[e(478)]||n%20==0?function(){return!0}[e(469)](e(471)+e(492))[e(461)](e(490)):function(){return!1}[e(469)](e(471)+e(492))[e(465)](e(466)),t(++n)}try{if(n)return t;t(0)}catch(e){}}function D(){const n=["debu","#ffffff","table","__proto__","TresCanvas","35494EVHKgw","TresPerspectiveCamera","length","8924481UuEBtm","toString","rayMarchingMushroom","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","4DobwNr","prototype","2928464PChOlz","perspectiveCameraRef","11046590FqSbsw","console","TresDirectionalLight","action","12uWZdpo","gger","#000000","27fWjMBG","chain","test","error","2023023uoNXth","trace","call","11BnSOaJ","1219220cNrEMK","warn","apply","stateObject","info","5614680kjeiKn","constructor","while (true) {}"];return(D=function(){return n})()}export{E as default};