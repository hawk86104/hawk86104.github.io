import{e as n,U as t}from"./@tresjs.C3WO4ZW41730883607874.js";import{a0 as e,k as o}from"./three.fIUcjaNz1730883607874.js";import{d as r,a3 as a,o as c,D as i,J as s,aj as u,ak as f,q as l,e as p,f as v,g as d,j as h,u as b,m}from"./@vue.Cfu43fwq1730883607874.js";import"./@vueuse.BSum2YDk1730883607874.js";const y=q;!function(n,t){const e=q,o=I();for(;;)try{if(710088===parseInt(e(166))/1+parseInt(e(145))/2*(-parseInt(e(178))/3)+parseInt(e(139))/4+parseInt(e(146))/5+parseInt(e(168))/6+-parseInt(e(142))/7*(parseInt(e(170))/8)+parseInt(e(151))/9*(-parseInt(e(164))/10))break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const g=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e[q(141)](t,arguments);return e=null,n}}:function(){};return n=!1,o}}();!function(){g(this,(function(){const n=q,t=new RegExp("function *\\( *\\)"),e=new RegExp(n(162),"i"),o=M(n(175));t[n(167)](o+"chain")&&e[n(167)](o+n(136))?M():o("0")}))()}();const w=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e.apply(t,arguments);return e=null,n}}:function(){};return n=!1,o}}();w(void 0,(function(){const n=q;let t;try{t=Function(n(153)+n(147)+");")()}catch(r){t=window}const e=t[n(143)]=t.console||{},o=[n(134),n(165),n(144),n(174),n(173),n(163),"trace"];for(let a=0;a<o.length;a++){const t=w[n(171)].prototype.bind(w),r=o[a],c=e[r]||t;t[n(138)]=w[n(158)](w),t[n(137)]=c[n(137)][n(158)](c),e[r]=t}}))();const x=["rotation"],_={ref:y(155),args:[1e3,1e3]};function q(n,t){const e=I();return(q=function(n,t){return e[n-=132]})(n,t)}function I(){const n=["innerHeight","apply","28CsHgnB","console","info","18dEXwaY","6235665GGAmVc",'{}.constructor("return this")( )',"TresShaderMaterial","TresMesh","innerWidth","1044xiHGkf","call","return (function() ","MeshRef","TresTubeGeometryRef","addEventListener","value","bind","counter","while (true) {}","gger","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","table","195790YOMBOZ","warn","1306421SYQqNc","test","7160136FAMZBX","clientY","2499080ZmgdSH","constructor","u_time","exception","error","init","uniforms","debu","202707VawCpl","rayMarchingMaterialMushroom","string","log","length","input","toString","__proto__","4368012oaVePN"];return(I=function(){return n})()}const C=r({__name:y(132),setup(t){const r=y,{onLoop:l,onAfterLoop:p}=n(),v={transparent:!0,depthWrite:!0,depthTest:!0,side:e,vertexShader:"varying vec2 vUv;\nvoid main(){\n\tgl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);\n\tvUv=uv;\n}",fragmentShader:"#ifdef GL_ES\nprecision mediump float;\n#endif\n\nuniform vec2 u_resolution;\nuniform vec3 u_mouse;\nuniform float u_time;\nvarying vec2 vUv;\n\nmat2 rot2D(float angle){\n  float s=sin(angle);\n  float c=cos(angle);\n  return mat2(c,-s,s,c);\n}\n\nfloat sdCutHollowSphere(vec3 p,float r,float h,float t)\n{\n  float w=sqrt(r*r-h*h);\n  vec2 q=vec2(length(p.xz),p.y);\n  return((h*q.x<w*q.y)?length(q-vec2(w,h)):\n  abs(length(q)-r))-t;\n}\nvec4 sdstripe(vec3 p,vec3 color){\n  p.xz=abs(p.xz);\n  float d1=sdCutHollowSphere(p-vec3(.0,-3.3,0.),.8,.01,.01);\n  float d2=sdCutHollowSphere(p-vec3(.9,-3.3,.9),.5,.005,.01);\n  float d=min(d1,d2);\n  return vec4(d,color);\n}\nvec4 sdCutSphere(vec3 p,float r,float h,vec3 color)\n{\n  \n  float w=sqrt(r*r-h*h);\n  \n  vec2 q=vec2(length(p.xz),p.y);\n  float s=max((h-r)*q.x*q.x+w*w*(h+r-2.*q.y),h*q.x-w*q.y);\n  float d=(s<0.)?length(q)-r:\n  (q.x<w)?h-q.y:\n  length(q-vec2(w,h));\n  \n  return vec4(d,color);\n}\nvec4 sdPlane(vec3 p,vec3 color){\n  return vec4(-p.y+.2,color);\n  \n}\nvec4 sdCappedCone(vec3 p,vec3 a,vec3 b,float ra,float rb,vec3 color)\n{\n  float rba=rb-ra;\n  float baba=dot(b-a,b-a);\n  float papa=dot(p-a,p-a);\n  float paba=dot(p-a,b-a)/baba;\n  float x=sqrt(papa-paba*paba*baba);\n  float cax=max(0.,x-((paba<.5)?ra:rb));\n  float cay=abs(paba-.5)-.5;\n  float k=rba*rba+baba;\n  float f=clamp((rba*(x-ra)+paba*baba)/k,0.,1.);\n  float cbx=x-ra-f*rba;\n  float cby=paba-f;\n  float s=(cbx<0.&&cay<0.)?-1.:1.;\n  return vec4(s*sqrt(min(cax*cax+cay*cay*baba,\n      cbx*cbx+cby*cby*baba)),color);\n    }\n    float smin(float d1,float d2,float k){\n      float h=clamp(.5+.5*(d2-d1)/k,0.,1.);\n      return mix(d2,d1,h)-k*h*(1.-h);\n    }\n    vec4 colorMin(vec4 a,vec4 b){\n      if(a.x<b.x){\n        return a;\n      }else{\n        return b;\n      }\n    }\n    //模糊摆动，y的值越大，摆动频率越大\n    vec3 bendPoint(vec3 p,float k)\n    {\n      float c=cos(k*p.y);\n      float s=sin(k*p.y);\n      mat2 m=mat2(c,-s,s,c);\n      vec3 q=vec3(m*p.xy,p.z);\n      return q;\n    }\n    vec4 map(vec3 p){\n      vec3 q=p;\n      p=bendPoint(p,sin(u_time*5.));\n      vec3 pp2=vec3(0.,.8,0.);\n      vec3 pp1=vec3(0.,-.2,0.);\n      vec4 CappedConesdf=sdCappedCone(-p,pp1,pp2,.2,.1,vec3(.8667,.8667,.7216));\n      vec4 CutSpheresdf=sdCutSphere(-p-vec3(0.,.4,0.),.5,.2,vec3(.9608,.4667,.4))-.1;\n      vec4 entity=colorMin(CappedConesdf,CutSpheresdf);\n      entity=colorMin(entity,sdstripe(p*4.,vec3(3.5))/4.);\n      entity=colorMin(entity,sdPlane(q,vec3(.4196,.5529,.3647)));\n      return entity;\n    }\n    \n    void main(){\n      vec3 ro=vec3(0.,0.,-8.);//起始位置\n      vec3 rd=normalize(vec3(vUv-.5,1.));//方向\n      ro.xz*=rot2D(-u_time);\n      rd.xz*=rot2D(-u_time);\n      ro.y-=4.;\n      rd.y+=.5;\n      float t=0.;\n      vec4 color=vec4(0.);\n      for(int i=0;i<80;i++){\n        vec3 p=ro+rd*t;\n        vec4 d=map(p)/1.8;\n        t+=d.x;\n        //优化效率\n        if(t>100.||d.x<.001){\n          break;\n        }\n        color=vec4(t*d.yzw*.13,1.);\n      }\n      \n      gl_FragColor=color;\n      \n    }",uniforms:{u_resolution:{value:new o(window[r(150)],window[r(140)])},u_mouse:{value:new o(0,0)},u_time:{value:0}}},d=window[r(150)]/2,h=window.innerHeight/2;let b=0,m=0;return document[r(156)]("mousemove",(function(n){const t=r;b=n.clientX-d,m=n[t(169)]-h}),!1),a((()=>{})),l((({elapsed:n})=>{const t=r;v[t(176)][t(172)][t(157)]+=.001,v.uniforms.u_mouse[t(157)]=new o(b,m)})),p((()=>{})),(n,t)=>{const e=r;return c(),i(e(149),{ref:e(154),rotation:[Math.PI/2,0,0]},[s("TresPlaneGeometry",_,null,512),s(e(148),u(f(v)),null,16)],8,x)}}});function M(n){function t(n){const e=q;if(typeof n===e(133))return function(n){}[e(171)](e(160))[e(141)](e(159));1!==(""+n/n)[e(135)]||n%20==0?function(){return!0}[e(171)](e(177)+e(161))[e(152)]("action"):function(){return!1}[e(171)](e(177)+e(161)).apply("stateObject"),t(++n)}try{if(n)return t;t(0)}catch(e){}}const S=z;function z(n,t){const e=j();return(z=function(n,t){return e[n-=353]})(n,t)}!function(n,t){const e=z,o=j();for(;;)try{if(668936===parseInt(e(385))/1+parseInt(e(357))/2+-parseInt(e(393))/3*(parseInt(e(354))/4)+parseInt(e(355))/5*(-parseInt(e(359))/6)+parseInt(e(383))/7+parseInt(e(364))/8+parseInt(e(379))/9*(-parseInt(e(369))/10))break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const k=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e.apply(t,arguments);return e=null,n}}:function(){};return n=!1,o}}();!function(){k(this,(function(){const n=z,t=new RegExp(n(392)),e=new RegExp(n(374),"i"),o=E(n(371));t[n(367)](o+n(381))&&e[n(367)](o+n(376))?E():o("0")}))()}();const T=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e[z(390)](t,arguments);return e=null,n}}:function(){};return n=!1,o}}();function j(){const n=["524beodFu","965GIHSQT","TresAmbientLight","1160254xnzQFO","while (true) {}","35790aNtFcE","bind","rayMarchingMushroom","string","debu","10273608uVoSIq","error","TresDirectionalLight","test","console","73310dUXBcH","constructor","init","counter","#000000","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","log","input","gger","length","1359gzuhaT","toString","chain","TresPerspectiveCamera","1828799LQOETT","return (function() ","878474VFssoc","prototype",'{}.constructor("return this")( )',"stateObject","warn","apply","#ffffff","function *\\( *\\)","1761lWUBiK","__proto__","table"];return(j=function(){return n})()}T(void 0,(function(){const n=z;let t;try{t=Function(n(384)+n(387)+");")()}catch(r){t=window}const e=t.console=t[n(368)]||{},o=[n(375),n(389),"info",n(365),"exception",n(353),"trace"];for(let a=0;a<o[n(378)];a++){const t=T[n(370)][n(386)].bind(T),r=o[a],c=e[r]||t;t[n(394)]=T[n(360)](T),t[n(380)]=c[n(380)].bind(c),e[r]=t}}))();const H={ref:"perspectiveCameraRef",position:[0,1500,0],fov:45,near:1,far:1e4},L=r({__name:S(361),setup(e){const o=S,r={clearColor:o(373),shadows:!0,alpha:!1,useLegacyLights:!0},a={autoRotate:!1,enableDamping:!0},{onLoop:i}=n();return i((({delta:n})=>{})),l((()=>{})),(n,e)=>{const i=o,l=p("TresCanvas");return c(),v(l,m(r,{"window-size":""}),{default:d((()=>[s(i(382),H,null,512),h(b(t),u(f(a)),null,16),e[0]||(e[0]=s(i(356),{color:"#ffffff"},null,-1)),e[1]||(e[1]=s(i(366),{position:[100,100,0],intensity:.5,color:i(391)},null,-1)),h(C)])),_:1},16)}}});function E(n){function t(n){const e=z;if(typeof n===e(362))return function(n){}[e(370)](e(358)).apply(e(372));1!==(""+n/n)[e(378)]||n%20==0?function(){return!0}[e(370)]("debu"+e(377)).call("action"):function(){return!1}[e(370)](e(363)+"gger")[e(390)](e(388)),t(++n)}try{if(n)return t;t(0)}catch(e){}}export{L as default};