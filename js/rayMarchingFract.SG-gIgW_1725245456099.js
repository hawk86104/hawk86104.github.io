import{$ as n,d as t}from"./@tresjs.j5vdYITq1725245456099.js";import{Z as e,j as o}from"./three.KG2-8r0_1725245456099.js";import{d as r,a1 as i,o as a,D as c,J as s,aj as u,ak as f,q as p,e as l,f as m,g as d,j as v,u as h,m as x}from"./@vue.Q1VpS3901725245456099.js";import"./tweakpane.yHWGBmom1725245456099.js";import"./@vueuse.whMtq_7M1725245456099.js";const y=q;!function(n,t){const e=q,o=b();for(;;)try{if(146177===parseInt(e(212))/1*(-parseInt(e(234))/2)+parseInt(e(236))/3+-parseInt(e(229))/4*(-parseInt(e(195))/5)+parseInt(e(235))/6+-parseInt(e(238))/7+-parseInt(e(198))/8+-parseInt(e(225))/9*(parseInt(e(211))/10))break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const g=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e.apply(t,arguments);return e=null,n}}:function(){};return n=!1,o}}();!function(){g(this,(function(){const n=q,t=new RegExp(n(218)),e=new RegExp(n(191),"i"),o=j(n(224));t[n(209)](o+"chain")&&e[n(209)](o+n(201))?j():o("0")}))()}();const _=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e.apply(t,arguments);return e=null,n}}:function(){};return n=!1,o}}();function q(n,t){const e=b();return(q=function(n,t){return e[n-=191]})(n,t)}_(void 0,(function(){const n=q,t=function(){const n=q;let t;try{t=Function(n(217)+n(214)+");")()}catch(e){t=window}return t}(),e=t[n(220)]=t.console||{},o=[n(197),n(227),n(232),n(203),n(206),"table","trace"];for(let r=0;r<o[n(221)];r++){const t=_.constructor[n(243)].bind(_),i=o[r],a=e[i]||t;t[n(228)]=_[n(202)](_),t[n(222)]=a[n(222)][n(202)](a),e[i]=t}}))();const w=[y(210)],z={ref:y(230),args:[1e3,1e3]};function b(){const n=["TresPlaneGeometry","clientX","return (function() ","function *\\( *\\)","innerWidth","console","length","toString","u_time","init","16839ACTkTl","TresShaderMaterial","warn","__proto__","12EbtcPi","TresTubeGeometryRef","rayMarchingMaterialFract","info","uniforms","120986plefOg","360552jVHNfg","537024EcGRke","action","539910EMOtnD","addEventListener","stateObject","constructor","clientY","prototype","apply","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","value","gger","while (true) {}","480055ybjxsZ","string","log","220376GUtWgZ","call","u_mouse","input","bind","error","counter","debu","exception","TresMesh","innerHeight","test","rotation","830mCwYLY","2jsAwBY","MeshRef",'{}.constructor("return this")( )'];return(b=function(){return n})()}const I=r({__name:y(231),setup(t){const r=y,{onLoop:p,onAfterLoop:l}=n(),m={transparent:!0,depthWrite:!0,depthTest:!0,side:e,vertexShader:"varying vec2 vUv;\nvoid main(){\n\tgl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);\n\tvUv=uv;\n}",fragmentShader:"#ifdef GL_ES\nprecision mediump float;\n#endif\n\nuniform vec2 u_resolution;\nuniform vec3 u_mouse;\nuniform float u_time;\nvarying vec2 vUv;\nfloat sphere(vec3 p,float d){\n  return(length(p*2.)-d)/2.;\n}\n\nfloat sdPyramid(vec3 p,float h)\n{\n  float m2=h*h+.25;\n  \n  p.xz=abs(p.xz);\n  p.xz=(p.z>p.x)?p.zx:p.xz;\n  p.xz-=.5;\n  \n  vec3 q=vec3(p.z,h*p.y-.5*p.x,h*p.x+.5*p.y);\n  \n  float s=max(-q.x,0.);\n  float t=clamp((q.y-.5*p.z)/(m2+.25),0.,1.);\n  \n  float a=m2*(q.x+s)*(q.x+s)+q.y*q.y;\n  float b=m2*(q.x+.5*t)*(q.x+.5*t)+(q.y-m2*t)*(q.y-m2*t);\n  \n  float d2=min(q.y,-q.x*m2-q.y*.5)>0.?0.:min(a,b);\n  \n  return sqrt((d2+q.z*q.z)/m2)*sign(max(q.z,-p.y));\n}\nfloat sdBoxFrame(vec3 p,vec3 b,float e)\n{\n  p=abs(p)-b;\n  vec3 q=abs(p+e)-e;\n  return min(min(\n      length(max(vec3(p.x,q.y,q.z),0.))+min(max(p.x,max(q.y,q.z)),0.),\n      length(max(vec3(q.x,p.y,q.z),0.))+min(max(q.x,max(p.y,q.z)),0.)),\n      length(max(vec3(q.x,q.y,p.z),0.))+min(max(q.x,max(q.y,p.z)),0.));\n    }\n    mat2 rot2D(float angle){\n      float s=sin(angle);\n      float c=cos(angle);\n      return mat2(c,-s,s,c);\n    }\n    \n    float map(vec3 p){\n      p.xy*=rot2D(u_time);\n      p=(fract(p)-.5)*2.;\n      // p=mod(p,1.)-.5;\n      vec3 pos=vec3(sin(u_time*10.),0.,0.);\n      float spheresdf=sphere(p,.5)/2.;\n      float BoxFramesdf=sdBoxFrame(p,vec3(.5,.3,.5),.025)/2.;\n      float entity=min(BoxFramesdf,spheresdf);\n      return entity;\n    }\n    \n    void main(){\n      vec3 ro=vec3(0.,0.,-4.);//起始位置\n      vec3 rd=normalize(vec3(vUv-.5,1.));//方向\n      // horizontal camera rotation\n      \n      ro.xz*=rot2D(-u_mouse.x*.001);\n      rd.xz*=rot2D(-u_mouse.x*.001);\n      ro.xy*=rot2D(-u_mouse.y*.001);\n      rd.xy*=rot2D(-u_mouse.y*.001);\n      float t=0.;\n      vec3 color=vec3(0.);\n      for(int i=0;i<80;i++){\n        vec3 p=ro+rd*t;\n        float d=map(p);\n        t+=d;\n        //优化效率\n        if(t>100.||d<.001){\n          break;\n        }\n      }\n      color=vec3(t*.2);\n      gl_FragColor=vec4(color,1.);\n      \n    }",uniforms:{u_resolution:{value:new o(window[r(219)],window[r(208)])},u_mouse:{value:new o(0,0)},u_time:{value:0}}},d=window[r(219)]/2,v=window[r(208)]/2;let h=0,x=0;return document[r(239)]("mousemove",(function(n){const t=r;h=n[t(216)]-d,x=n[t(242)]-v}),!1),i((()=>{})),p((({elapsed:n})=>{const t=r;m[t(233)][t(223)][t(192)]+=.001,m[t(233)][t(200)][t(192)]=new o(h,x)})),l((()=>{})),(n,t)=>{const e=r;return a(),c(e(207),{ref:e(213),rotation:[Math.PI/2,0,0]},[s(e(215),z,null,512),s(e(226),u(f(m)),null,16)],8,w)}}});function j(n){function t(n){const e=q;if(typeof n===e(196))return function(n){}[e(241)](e(194)).apply(e(204));1!==(""+n/n)[e(221)]||n%20==0?function(){return!0}.constructor(e(205)+e(193))[e(199)](e(237)):function(){return!1}[e(241)]("debu"+e(193))[e(244)](e(240)),t(++n)}try{if(n)return t;t(0)}catch(e){}}const D=M;!function(n,t){const e=M,o=R();for(;;)try{if(243331===-parseInt(e(182))/1*(-parseInt(e(198))/2)+parseInt(e(207))/3+parseInt(e(180))/4*(parseInt(e(187))/5)+-parseInt(e(205))/6*(parseInt(e(211))/7)+parseInt(e(201))/8+parseInt(e(203))/9+parseInt(e(191))/10)break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const L=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e[M(188)](t,arguments);return e=null,n}}:function(){};return n=!1,o}}();!function(){L(this,(function(){const n=M,t=new RegExp(n(179)),e=new RegExp(n(195),"i"),o=Z(n(177));t[n(200)](o+n(206))&&e[n(200)](o+n(208))?Z():o("0")}))()}();const T=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e[M(188)](t,arguments);return e=null,n}}:function(){};return n=!1,o}}();function M(n,t){const e=R();return(M=function(n,t){return e[n-=170]})(n,t)}T(void 0,(function(){const n=M,t=function(){const n=M;let t;try{t=Function(n(183)+n(181)+");")()}catch(e){t=window}return t}(),e=t[n(210)]=t[n(210)]||{},o=[n(173),n(175),n(192),"error",n(199),n(178),n(174)];for(let r=0;r<o[n(213)];r++){const t=T[n(209)][n(212)][n(196)](T),i=o[r],a=e[i]||t;t[n(214)]=T[n(196)](T),t[n(185)]=a[n(185)].bind(a),e[i]=t}}))();const F={ref:D(202),position:[0,1500,0],fov:45,near:1,far:1e4},k=s(D(184),{color:"#ffffff"},null,-1),C=s(D(204),{position:[100,100,0],intensity:.5,color:D(170)},null,-1),E=r({__name:D(193),setup(e){const o=D,r={clearColor:o(186),shadows:!0,alpha:!1,useLegacyLights:!0},i={autoRotate:!1,enableDamping:!0},{onLoop:c}=n();return c((({delta:n})=>{})),p((()=>{})),(n,e)=>{const c=o,p=l(c(172));return a(),m(p,x(r,{"window-size":""}),{default:d((()=>[s(c(176),F,null,512),v(h(t),u(f(i)),null,16),k,C,v(I)])),_:1},16)}}});function R(){const n=["trace","warn","TresPerspectiveCamera","init","table","function *\\( *\\)","55220jduLZI",'{}.constructor("return this")( )',"7057VJVJsX","return (function() ","TresAmbientLight","toString","#000000","35IaHYfU","apply","debu","action","921750LDIDgt","info","rayMarchingFract","string","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","bind","gger","30zMlqvC","exception","test","189176NgQySm","perspectiveCameraRef","384651kFKrmz","TresDirectionalLight","2568eWUcQZ","chain","521244wdwQuU","input","constructor","console","4767CYlizz","prototype","length","__proto__","#ffffff","call","TresCanvas","log"];return(R=function(){return n})()}function Z(n){function t(n){const e=M;if(typeof n===e(194))return function(n){}[e(209)]("while (true) {}")[e(188)]("counter");1!==(""+n/n)[e(213)]||n%20==0?function(){return!0}.constructor(e(189)+e(197))[e(171)](e(190)):function(){return!1}.constructor(e(189)+e(197))[e(188)]("stateObject"),t(++n)}try{if(n)return t;t(0)}catch(e){}}export{E as default};