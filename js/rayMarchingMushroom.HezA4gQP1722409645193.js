import{$ as n,d as t}from"./@tresjs.qmCJ68Vp1722409645193.js";import{Z as e,j as o}from"./three.6E5muTWJ1722409645193.js";import{d as r,a1 as a,o as c,D as i,J as s,aj as u,ak as f,q as l,e as p,f as v,g as d,j as h,u as b,m}from"./@vue.9bHx4gg21722409645193.js";import"./tweakpane.yHWGBmom1722409645193.js";import"./@vueuse.NFOCyQQL1722409645193.js";const y=I;!function(n,t){const e=I,o=x();for(;;)try{if(949064===parseInt(e(188))/1+parseInt(e(152))/2+parseInt(e(168))/3*(parseInt(e(169))/4)+-parseInt(e(150))/5*(parseInt(e(186))/6)+parseInt(e(170))/7+parseInt(e(194))/8*(parseInt(e(149))/9)+-parseInt(e(159))/10)break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const g=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e[I(182)](t,arguments);return e=null,n}}:function(){};return n=!1,o}}();!function(){g(this,(function(){const n=I,t=new RegExp(n(193)),e=new RegExp(n(155),"i"),o=k(n(187));t[n(181)](o+"chain")&&e[n(181)](o+n(158))?k():o("0")}))()}();const w=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e[I(182)](t,arguments);return e=null,n}}:function(){};return n=!1,o}}();function x(){const n=["length","function *\\( *\\)","373408HpbQUN","u_time","u_mouse","gger","clientX","console","54cqJWBf","4157130UnuoeW","table","2405856fMJFrA","TresTubeGeometryRef","__proto__","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","clientY","debu","input","19166340eIdqOO","constructor","while (true) {}","info","innerHeight","exception","bind",'{}.constructor("return this")( )',"addEventListener","1422pgiyrm","10636VkTjQe","3905496ZkMNQD","TresMesh","TresPlaneGeometry","log","trace","TresShaderMaterial","toString","counter","prototype","MeshRef","uniforms","test","apply","innerWidth","action","warn","12NftcaC","init","1227272lnyWUp","call","value","stateObject"];return(x=function(){return n})()}w(void 0,(function(){const n=I;let t;try{t=Function("return (function() "+n(166)+");")()}catch(r){t=window}const e=t[n(148)]=t[n(148)]||{},o=[n(173),n(185),n(162),"error",n(164),n(151),n(174)];for(let a=0;a<o.length;a++){const t=w[n(160)][n(178)][n(165)](w),r=o[a],c=e[r]||t;t[n(154)]=w[n(165)](w),t[n(176)]=c.toString.bind(c),e[r]=t}}))();const _=["rotation"],q={ref:y(153),args:[1e3,1e3]};function I(n,t){const e=x();return(I=function(n,t){return e[n-=147]})(n,t)}const C=r({__name:"rayMarchingMaterialMushroom",setup(t){const r=y,{onLoop:l,onAfterLoop:p}=n(),v={transparent:!0,depthWrite:!0,depthTest:!0,side:e,vertexShader:"varying vec2 vUv;\nvoid main(){\n\tgl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);\n\tvUv=uv;\n}",fragmentShader:"#ifdef GL_ES\nprecision mediump float;\n#endif\n\nuniform vec2 u_resolution;\nuniform vec3 u_mouse;\nuniform float u_time;\nvarying vec2 vUv;\n\nmat2 rot2D(float angle){\n  float s=sin(angle);\n  float c=cos(angle);\n  return mat2(c,-s,s,c);\n}\n\nfloat sdCutHollowSphere(vec3 p,float r,float h,float t)\n{\n  float w=sqrt(r*r-h*h);\n  vec2 q=vec2(length(p.xz),p.y);\n  return((h*q.x<w*q.y)?length(q-vec2(w,h)):\n  abs(length(q)-r))-t;\n}\nvec4 sdstripe(vec3 p,vec3 color){\n  p.xz=abs(p.xz);\n  float d1=sdCutHollowSphere(p-vec3(.0,-3.3,0.),.8,.01,.01);\n  float d2=sdCutHollowSphere(p-vec3(.9,-3.3,.9),.5,.005,.01);\n  float d=min(d1,d2);\n  return vec4(d,color);\n}\nvec4 sdCutSphere(vec3 p,float r,float h,vec3 color)\n{\n  \n  float w=sqrt(r*r-h*h);\n  \n  vec2 q=vec2(length(p.xz),p.y);\n  float s=max((h-r)*q.x*q.x+w*w*(h+r-2.*q.y),h*q.x-w*q.y);\n  float d=(s<0.)?length(q)-r:\n  (q.x<w)?h-q.y:\n  length(q-vec2(w,h));\n  \n  return vec4(d,color);\n}\nvec4 sdPlane(vec3 p,vec3 color){\n  return vec4(-p.y+.2,color);\n  \n}\nvec4 sdCappedCone(vec3 p,vec3 a,vec3 b,float ra,float rb,vec3 color)\n{\n  float rba=rb-ra;\n  float baba=dot(b-a,b-a);\n  float papa=dot(p-a,p-a);\n  float paba=dot(p-a,b-a)/baba;\n  float x=sqrt(papa-paba*paba*baba);\n  float cax=max(0.,x-((paba<.5)?ra:rb));\n  float cay=abs(paba-.5)-.5;\n  float k=rba*rba+baba;\n  float f=clamp((rba*(x-ra)+paba*baba)/k,0.,1.);\n  float cbx=x-ra-f*rba;\n  float cby=paba-f;\n  float s=(cbx<0.&&cay<0.)?-1.:1.;\n  return vec4(s*sqrt(min(cax*cax+cay*cay*baba,\n      cbx*cbx+cby*cby*baba)),color);\n    }\n    float smin(float d1,float d2,float k){\n      float h=clamp(.5+.5*(d2-d1)/k,0.,1.);\n      return mix(d2,d1,h)-k*h*(1.-h);\n    }\n    vec4 colorMin(vec4 a,vec4 b){\n      if(a.x<b.x){\n        return a;\n      }else{\n        return b;\n      }\n    }\n    //模糊摆动，y的值越大，摆动频率越大\n    vec3 bendPoint(vec3 p,float k)\n    {\n      float c=cos(k*p.y);\n      float s=sin(k*p.y);\n      mat2 m=mat2(c,-s,s,c);\n      vec3 q=vec3(m*p.xy,p.z);\n      return q;\n    }\n    vec4 map(vec3 p){\n      vec3 q=p;\n      p=bendPoint(p,sin(u_time*5.));\n      vec3 pp2=vec3(0.,.8,0.);\n      vec3 pp1=vec3(0.,-.2,0.);\n      vec4 CappedConesdf=sdCappedCone(-p,pp1,pp2,.2,.1,vec3(.8667,.8667,.7216));\n      vec4 CutSpheresdf=sdCutSphere(-p-vec3(0.,.4,0.),.5,.2,vec3(.9608,.4667,.4))-.1;\n      vec4 entity=colorMin(CappedConesdf,CutSpheresdf);\n      entity=colorMin(entity,sdstripe(p*4.,vec3(3.5))/4.);\n      entity=colorMin(entity,sdPlane(q,vec3(.4196,.5529,.3647)));\n      return entity;\n    }\n    \n    void main(){\n      vec3 ro=vec3(0.,0.,-8.);//起始位置\n      vec3 rd=normalize(vec3(vUv-.5,1.));//方向\n      ro.xz*=rot2D(-u_time);\n      rd.xz*=rot2D(-u_time);\n      ro.y-=4.;\n      rd.y+=.5;\n      float t=0.;\n      vec4 color=vec4(0.);\n      for(int i=0;i<80;i++){\n        vec3 p=ro+rd*t;\n        vec4 d=map(p)/1.8;\n        t+=d.x;\n        //优化效率\n        if(t>100.||d.x<.001){\n          break;\n        }\n        color=vec4(t*d.yzw*.13,1.);\n      }\n      \n      gl_FragColor=color;\n      \n    }",uniforms:{u_resolution:{value:new o(window[r(183)],window[r(163)])},u_mouse:{value:new o(0,0)},u_time:{value:0}}},d=window[r(183)]/2,h=window.innerHeight/2;let b=0,m=0;return document[r(167)]("mousemove",(function(n){const t=r;b=n[t(147)]-d,m=n[t(156)]-h}),!1),a((()=>{})),l((({elapsed:n})=>{const t=r;v[t(180)][t(195)][t(190)]+=.001,v.uniforms[t(196)][t(190)]=new o(b,m)})),p((()=>{})),(n,t)=>{const e=r;return c(),i(e(171),{ref:e(179),rotation:[Math.PI/2,0,0]},[s(e(172),q,null,512),s(e(175),u(f(v)),null,16)],8,_)}}});function k(n){function t(n){const e=I;if("string"==typeof n)return function(n){}[e(160)](e(161))[e(182)](e(177));1!==(""+n/n)[e(192)]||n%20==0?function(){return!0}[e(160)](e(157)+"gger")[e(189)](e(184)):function(){return!1}[e(160)](e(157)+e(197))[e(182)](e(191)),t(++n)}try{if(n)return t;t(0)}catch(e){}}const M=T;function j(){const n=["529455nwHPpk","trace","constructor","table","test",'{}.constructor("return this")( )',"__proto__","160UoDdPT","2967588bEEStR","gger","apply","debu","return (function() ","toString","85182xMyZtG","action","715YbFbcU","console","#ffffff","TresPerspectiveCamera","3tRrQZN","95ZLlkVc","89048HItmPo","470318FaTdcb","241612mQTjoY","192810Uybvcg","#000000","TresAmbientLight","log","bind","perspectiveCameraRef","prototype","function *\\( *\\)","warn","error","string","length","TresDirectionalLight","rayMarchingMushroom","call","init"];return(j=function(){return n})()}!function(n,t){const e=T,o=j();for(;;)try{if(543260===-parseInt(e(376))/1*(-parseInt(e(338))/2)+-parseInt(e(356))/3+-parseInt(e(337))/4+-parseInt(e(336))/5*(-parseInt(e(370))/6)+-parseInt(e(339))/7*(-parseInt(e(363))/8)+parseInt(e(364))/9+parseInt(e(340))/10*(-parseInt(e(372))/11))break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const S=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e[T(366)](t,arguments);return e=null,n}}:function(){};return n=!1,o}}();!function(){S(this,(function(){const n=T,t=new RegExp(n(347)),e=new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","i"),o=Z(n(355));t.test(o+"chain")&&e[n(360)](o+"input")?Z():o("0")}))()}();const z=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e.apply(t,arguments);return e=null,n}}:function(){};return n=!1,o}}();function T(n,t){const e=j();return(T=function(n,t){return e[n-=336]})(n,t)}z(void 0,(function(){const n=T,t=function(){const n=T;let t;try{t=Function(n(368)+n(361)+");")()}catch(e){t=window}return t}(),e=t[n(373)]=t[n(373)]||{},o=[n(343),n(348),"info",n(349),"exception",n(359),n(357)];for(let r=0;r<o[n(351)];r++){const t=z[n(358)][n(346)][n(344)](z),a=o[r],c=e[a]||t;t[n(362)]=z[n(344)](z),t[n(369)]=c[n(369)].bind(c),e[a]=t}}))();const P={ref:M(345),position:[0,1500,0],fov:45,near:1,far:1e4},L=s(M(342),{color:M(374)},null,-1),R=s(M(352),{position:[100,100,0],intensity:.5,color:"#ffffff"},null,-1),U=r({__name:M(353),setup(e){const o=M,r={clearColor:o(341),shadows:!0,alpha:!1,useLegacyLights:!0},a={autoRotate:!1,enableDamping:!0},{onLoop:i}=n();return i((({delta:n})=>{})),l((()=>{})),(n,e)=>{const i=o,l=p("TresCanvas");return c(),v(l,m(r,{"window-size":""}),{default:d((()=>[s(i(375),P,null,512),h(b(t),u(f(a)),null,16),L,R,h(C)])),_:1},16)}}});function Z(n){function t(n){const e=T;if(typeof n===e(350))return function(n){}.constructor("while (true) {}")[e(366)]("counter");1!==(""+n/n)[e(351)]||n%20==0?function(){return!0}[e(358)](e(367)+e(365))[e(354)](e(371)):function(){return!1}[e(358)](e(367)+e(365)).apply("stateObject"),t(++n)}try{if(n)return t;t(0)}catch(e){}}export{U as default};