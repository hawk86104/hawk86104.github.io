import{e as n,U as t}from"./@tresjs.sklxXn0u1733198294833.js";import{a0 as e,k as o}from"./three.8iJMi2lU1733198294833.js";import{d as r,a3 as i,o as a,D as c,J as s,aj as u,ak as f,q as p,e as l,f as m,g as d,j as h,u as v,m as x}from"./@vue.-THQH3GC1733198294833.js";import"./@vueuse.N_fQXUYA1733198294833.js";const y=z;!function(n,t){const e=z,o=I();for(;;)try{if(625374===-parseInt(e(352))/1*(parseInt(e(368))/2)+-parseInt(e(347))/3*(-parseInt(e(362))/4)+-parseInt(e(326))/5+-parseInt(e(366))/6*(parseInt(e(330))/7)+parseInt(e(350))/8+-parseInt(e(324))/9+parseInt(e(355))/10*(parseInt(e(331))/11))break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const g=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e[z(359)](t,arguments);return e=null,n}}:function(){};return n=!1,o}}();!function(){g(this,(function(){const n=z,t=new RegExp(n(372)),e=new RegExp(n(343),"i"),o=D(n(351));t[n(360)](o+n(337))&&e[n(360)](o+n(334))?D():o("0")}))()}();const q=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e.apply(t,arguments);return e=null,n}}:function(){};return n=!1,o}}();q(void 0,(function(){const n=z,t=function(){const n=z;let t;try{t=Function(n(339)+n(370)+");")()}catch(e){t=window}return t}(),e=t[n(341)]=t[n(341)]||{},o=[n(325),"warn","info",n(364),n(327),n(357),n(329)];for(let r=0;r<o[n(346)];r++){const t=q[n(342)][n(365)][n(345)](q),i=o[r],a=e[i]||t;t[n(358)]=q.bind(q),t.toString=a.toString[n(345)](a),e[i]=t}}))();const _=["rotation"],w={ref:y(369),args:[1e3,1e3]};function z(n,t){const e=I();return(z=function(n,t){return e[n-=324]})(n,t)}const b=r({__name:"rayMarchingMaterialCombination",setup(t){const r=y,{onLoop:p,onAfterLoop:l}=n(),m={transparent:!0,depthWrite:!0,depthTest:!0,side:e,vertexShader:"varying vec2 vUv;\nvoid main(){\n\tgl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);\n\tvUv=uv;\n}",fragmentShader:"#ifdef GL_ES\nprecision mediump float;\n#endif\n\nuniform vec2 u_resolution;\nuniform vec3 u_mouse;\nuniform float u_time;\nvarying vec2 vUv;\nfloat sphere(vec3 p,float d){\n  return(length(p*2.)-d)/2.;\n}\n\nfloat sdPyramid(vec3 p,float h)\n{\n  float m2=h*h+.25;\n  \n  p.xz=abs(p.xz);\n  p.xz=(p.z>p.x)?p.zx:p.xz;\n  p.xz-=.5;\n  \n  vec3 q=vec3(p.z,h*p.y-.5*p.x,h*p.x+.5*p.y);\n  \n  float s=max(-q.x,0.);\n  float t=clamp((q.y-.5*p.z)/(m2+.25),0.,1.);\n  \n  float a=m2*(q.x+s)*(q.x+s)+q.y*q.y;\n  float b=m2*(q.x+.5*t)*(q.x+.5*t)+(q.y-m2*t)*(q.y-m2*t);\n  \n  float d2=min(q.y,-q.x*m2-q.y*.5)>0.?0.:min(a,b);\n  \n  return sqrt((d2+q.z*q.z)/m2)*sign(max(q.z,-p.y));\n}\nfloat sdBoxFrame(vec3 p,vec3 b,float e)\n{\n  p=abs(p)-b;\n  vec3 q=abs(p+e)-e;\n  return min(min(\n      length(max(vec3(p.x,q.y,q.z),0.))+min(max(p.x,max(q.y,q.z)),0.),\n      length(max(vec3(q.x,p.y,q.z),0.))+min(max(q.x,max(p.y,q.z)),0.)),\n      length(max(vec3(q.x,q.y,p.z),0.))+min(max(q.x,max(q.y,p.z)),0.));\n    }\n    mat2 rot2D(float angle){\n      float s=sin(angle);\n      float c=cos(angle);\n      return mat2(c,-s,s,c);\n    }\n    float map(vec3 p){\n      // p.xy*=rot2D(u_time);\n      vec3 pos=vec3(sin(u_time*10.),0.,0.);\n      float spheresdf=sphere(p,.5);\n      float BoxFramesdf=sdBoxFrame(p,vec3(.5,.3,.5),.025);\n      float entity=min(BoxFramesdf,spheresdf);\n      entity=min(sdPyramid(-p-vec3(1.,0.,0.),1.5),entity);\n      return entity;\n    }\n    \n    void main(){\n      vec3 ro=vec3(0.,0.,-4.);//起始位置\n      vec3 rd=normalize(vec3(vUv-.5,1.));//方向\n      // horizontal camera rotation\n      \n      ro.xz*=rot2D(-u_mouse.x*.001);\n      rd.xz*=rot2D(-u_mouse.x*.001);\n      ro.xy*=rot2D(-u_mouse.y*.001);\n      rd.xy*=rot2D(-u_mouse.y*.001);\n      float t=0.;\n      vec3 color=vec3(0.);\n      for(int i=0;i<80;i++){\n        vec3 p=ro+rd*t;\n        float d=map(p);\n        t+=d;\n        //优化效率\n        if(t>100.||d<.001){\n          break;\n        }\n        \n      }\n      color=vec3(t)*.2;\n      gl_FragColor=vec4(color,1.);\n      \n    }",uniforms:{u_resolution:{value:new o(window[r(353)],window.innerHeight)},u_mouse:{value:new o(0,0)},u_time:{value:0}}},d=window.innerWidth/2,h=window[r(333)]/2;let v=0,x=0;return document[r(344)](r(354),(function(n){const t=r;v=n.clientX-d,x=n[t(348)]-h}),!1),i((()=>{})),p((({elapsed:n})=>{const t=r;m[t(356)][t(335)][t(373)]+=.001,m[t(356)][t(336)].value=new o(v,x)})),l((()=>{})),(n,t)=>{const e=r;return a(),c(e(363),{ref:e(371),rotation:[Math.PI/2,0,0]},[s(e(340),w,null,512),s("TresShaderMaterial",u(f(m)),null,16)],8,_)}}});function I(){const n=["uniforms","table","__proto__","apply","test","stateObject","4461036EJCiBD","TresMesh","error","prototype","882906duOjGv","call","15068KbBfLV","TresTubeGeometryRef",'{}.constructor("return this")( )',"MeshRef","function *\\( *\\)","value","string","5156550ZzpIQE","log","2683085SHLWVi","exception","while (true) {}","trace","42cTZDFA","22LwJsFm","debu","innerHeight","input","u_time","u_mouse","chain","counter","return (function() ","TresPlaneGeometry","console","constructor","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","addEventListener","bind","length","3SoUclD","clientY","action","5137376hXOuMv","init","125AeJalX","innerWidth","mousemove","9010830ikKUxI"];return(I=function(){return n})()}function D(n){function t(n){const e=z;if(typeof n===e(374))return function(n){}[e(342)](e(328))[e(359)](e(338));1!==(""+n/n)[e(346)]||n%20==0?function(){return!0}[e(342)](e(332)+"gger")[e(367)](e(349)):function(){return!1}.constructor(e(332)+"gger")[e(359)](e(361)),t(++n)}try{if(n)return t;t(0)}catch(e){}}const L=C;!function(n,t){const e=C,o=M();for(;;)try{if(461917===-parseInt(e(215))/1+parseInt(e(186))/2+parseInt(e(194))/3*(-parseInt(e(190))/4)+-parseInt(e(193))/5+-parseInt(e(212))/6+-parseInt(e(201))/7*(parseInt(e(192))/8)+parseInt(e(178))/9*(parseInt(e(216))/10))break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const j=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e.apply(t,arguments);return e=null,n}}:function(){};return n=!1,o}}();!function(){j(this,(function(){const n=C,t=new RegExp("function *\\( *\\)"),e=new RegExp(n(207),"i"),o=F(n(198));t[n(187)](o+n(199))&&e[n(187)](o+"input")?F():o("0")}))()}();const S=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e.apply(t,arguments);return e=null,n}}:function(){};return n=!1,o}}();S(void 0,(function(){const n=C,t=function(){const n=C;let t;try{t=Function(n(218)+n(209)+");")()}catch(e){t=window}return t}(),e=t.console=t[n(180)]||{},o=["log",n(214),n(197),n(203),n(204),n(181),n(206)];for(let r=0;r<o[n(202)];r++){const t=S.constructor[n(205)][n(176)](S),i=o[r],a=e[i]||t;t[n(188)]=S[n(176)](S),t.toString=a[n(208)][n(176)](a),e[i]=t}}))();const T={ref:L(191),position:[0,1500,0],fov:45,near:1,far:1e4};function M(){const n=["43184mWjOGq","2272330FMGWSH","646353NGzDTa","counter","#ffffff","info","init","chain","call","21SCyDyh","length","error","exception","prototype","trace","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","toString",'{}.constructor("return this")( )',"rayMarchingCombination","apply","442650qWCZAc","action","warn","334963BGQkZi","40TELuuM","TresPerspectiveCamera","return (function() ","bind","while (true) {}","3451167LSwXnP","#000000","console","table","TresCanvas","gger","constructor","string","1338534uEXmpJ","test","__proto__","debu","16HQegwm","perspectiveCameraRef"];return(M=function(){return n})()}function C(n,t){const e=M();return(C=function(n,t){return e[n-=176]})(n,t)}const E=r({__name:L(210),setup(e){const o=L,r={clearColor:o(179),shadows:!0,alpha:!1,useLegacyLights:!0},i={autoRotate:!1,enableDamping:!0},{onLoop:c}=n();return c((({delta:n})=>{})),p((()=>{})),(n,e)=>{const c=o,p=l(c(182));return a(),m(p,x(r,{"window-size":""}),{default:d((()=>[s(c(217),T,null,512),h(v(t),u(f(i)),null,16),e[0]||(e[0]=s("TresAmbientLight",{color:c(196)},null,-1)),e[1]||(e[1]=s("TresDirectionalLight",{position:[100,100,0],intensity:.5,color:c(196)},null,-1)),h(b)])),_:1},16)}}});function F(n){function t(n){const e=C;if(typeof n===e(185))return function(n){}.constructor(e(177))[e(211)](e(195));1!==(""+n/n)[e(202)]||n%20==0?function(){return!0}[e(184)]("debugger")[e(200)](e(213)):function(){return!1}[e(184)](e(189)+e(183))[e(211)]("stateObject"),t(++n)}try{if(n)return t;t(0)}catch(e){}}export{E as default};