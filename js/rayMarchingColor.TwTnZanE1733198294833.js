import{e as n,U as t}from"./@tresjs.sklxXn0u1733198294833.js";import{a0 as e,k as o}from"./three.8iJMi2lU1733198294833.js";import{d as r,a3 as c,o as i,D as s,J as a,aj as u,ak as f,q as l,e as p,f as v,g as m,j as d,u as h,m as x}from"./@vue.-THQH3GC1733198294833.js";import"./@vueuse.N_fQXUYA1733198294833.js";const y=q;!function(n,t){const e=q,o=w();for(;;)try{if(329981===-parseInt(e(474))/1*(-parseInt(e(505))/2)+parseInt(e(490))/3*(-parseInt(e(485))/4)+parseInt(e(484))/5*(-parseInt(e(506))/6)+parseInt(e(483))/7+-parseInt(e(469))/8+parseInt(e(489))/9+-parseInt(e(467))/10)break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const g=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e.apply(t,arguments);return e=null,n}}:function(){};return n=!1,o}}();!function(){g(this,(function(){const n=q,t=new RegExp(n(475)),e=new RegExp(n(499),"i"),o=T("init");t.test(o+"chain")&&e[n(509)](o+n(470))?T():o("0")}))()}();const _=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e.apply(t,arguments);return e=null,n}}:function(){};return n=!1,o}}();function q(n,t){const e=w();return(q=function(n,t){return e[n-=461]})(n,t)}function w(){const n=["innerWidth","TresMesh","length","rotation","__proto__","8894jMWdTc","243318mBfyRm","uniforms","MeshRef","test","exception","debu","log","console","u_mouse","trace","6155390SwzIdQ","clientX","174880hJOtVe","input","apply","string","table","92vGeick","function *\\( *\\)","TresShaderMaterial","warn","prototype","TresPlaneGeometry","counter","clientY","constructor","3945907bQUWdX","75KBGfkp","41448TNzghn","mousemove","u_time","rayMarchingMaterialColor","5518908MdrMxl","3ujHeam","innerHeight","toString","action","addEventListener","gger","value","bind","stateObject","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)"];return(w=function(){return n})()}_(void 0,(function(){const n=q;let t;try{t=Function('return (function() {}.constructor("return this")( ));')()}catch(r){t=window}const e=t[n(464)]=t[n(464)]||{},o=[n(463),n(477),"info","error",n(461),n(473),n(466)];for(let c=0;c<o[n(502)];c++){const t=_[n(482)][n(478)][n(497)](_),r=o[c],i=e[r]||t;t[n(504)]=_.bind(_),t.toString=i[n(492)][n(497)](i),e[r]=t}}))();const z=[y(503)],b={ref:"TresTubeGeometryRef",args:[1e3,1e3]},I=r({__name:y(488),setup(t){const r=y,{onLoop:l,onAfterLoop:p}=n(),v={transparent:!0,depthWrite:!0,depthTest:!0,side:e,vertexShader:"varying vec2 vUv;\nvoid main(){\n\tgl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);\n\tvUv=uv;\n}",fragmentShader:"#ifdef GL_ES\nprecision mediump float;\n#endif\n\nuniform vec2 u_resolution;\nuniform vec3 u_mouse;\nuniform float u_time;\nvarying vec2 vUv;\nvec4 sphere(vec3 p,float d,vec3 color){\n  return vec4((length(p*2.)-d)/2.,color);\n}\nvec4 colorMin(vec4 a,vec4 b){\n  if(a.x<b.x){\n    return a;\n  }else{\n    return b;\n  }\n}\nvec4 sdPyramid(vec3 p,float h,vec3 color)\n{\n  float m2=h*h+.25;\n  \n  p.xz=abs(p.xz);\n  p.xz=(p.z>p.x)?p.zx:p.xz;\n  p.xz-=.5;\n  \n  vec3 q=vec3(p.z,h*p.y-.5*p.x,h*p.x+.5*p.y);\n  \n  float s=max(-q.x,0.);\n  float t=clamp((q.y-.5*p.z)/(m2+.25),0.,1.);\n  \n  float a=m2*(q.x+s)*(q.x+s)+q.y*q.y;\n  float b=m2*(q.x+.5*t)*(q.x+.5*t)+(q.y-m2*t)*(q.y-m2*t);\n  \n  float d2=min(q.y,-q.x*m2-q.y*.5)>0.?0.:min(a,b);\n  \n  return vec4(sqrt((d2+q.z*q.z)/m2)*sign(max(q.z,-p.y)),color);\n}\nvec4 sdBoxFrame(vec3 p,vec3 b,float e,vec3 color)\n{\n  p=abs(p)-b;\n  vec3 q=abs(p+e)-e;\n  return vec4(min(min(\n        length(max(vec3(p.x,q.y,q.z),0.))+min(max(p.x,max(q.y,q.z)),0.),\n        length(max(vec3(q.x,p.y,q.z),0.))+min(max(q.x,max(p.y,q.z)),0.)),\n        length(max(vec3(q.x,q.y,p.z),0.))+min(max(q.x,max(q.y,p.z)),0.)),color);\n      }\n      mat2 rot2D(float angle){\n        float s=sin(angle);\n        float c=cos(angle);\n        return mat2(c,-s,s,c);\n      }\n      //彩色画板\n      vec3 palette(float t){\n        vec3 a=vec3(.5,.5,.5);\n        vec3 b=vec3(.5,.5,.5);\n        vec3 c=vec3(1.,1.,1.);\n        vec3 d=vec3(.263,.416,.557);\n        \n        return a+b*cos(6.28318*(c*t+d));\n      }\n      vec4 map(vec3 p){\n        p.xy*=rot2D(u_time);\n        // p=(fract(p)-.5)*2.;\n        // p=mod(p,1.)-.5;\n        vec3 pos=vec3(sin(u_time*10.),0.,0.);\n        vec4 spheresdf=sphere(p,.5,vec3(.2118,.0314,.9333));\n        vec4 BoxFramesdf=sdBoxFrame(p,vec3(.5,.3,.5),.025,vec3(.1059,.9725,.0275))/2.;\n        vec4 entity=colorMin(BoxFramesdf,spheresdf);\n        return entity;\n      }\n      \n      void main(){\n        vec3 ro=vec3(0.,0.,-4.);//起始位置\n        vec3 rd=normalize(vec3(vUv-.5,1.));//方向\n        // horizontal camera rotation\n        \n        ro.xz*=rot2D(-u_mouse.x*.001);\n        rd.xz*=rot2D(-u_mouse.x*.001);\n        ro.xy*=rot2D(-u_mouse.y*.001);\n        rd.xy*=rot2D(-u_mouse.y*.001);\n        float t=0.;\n        vec4 color=vec4(0.);\n        vec4 d=vec4(0.);\n        for(int i=0;i<80;i++){\n          vec3 p=ro+rd*t;\n          p.xy*=rot2D(t*.2);\n          d=map(p);\n          t+=d.x;\n          //优化效率\n          if(d.x<.001){\n            break;\n          }\n          if(t>100.){\n            color=vec4(.5255,.2078,.2078,1.);\n            gl_FragColor=color;\n          }else{\n            color=vec4(t*d.yzw,1.);\n            gl_FragColor=color;\n          }\n          \n        }\n        // color=vec4(t*d.yzw,1.);\n        \n      }",uniforms:{u_resolution:{value:new o(window[r(500)],window[r(491)])},u_mouse:{value:new o(0,0)},u_time:{value:0}}},m=window[r(500)]/2,d=window.innerHeight/2;let h=0,x=0;return document[r(494)](r(486),(function(n){const t=r;h=n[t(468)]-m,x=n[t(481)]-d}),!1),c((()=>{})),l((({elapsed:n})=>{const t=r;v[t(507)][t(487)][t(496)]+=.001,v[t(507)][t(465)][t(496)]=new o(h,x)})),p((()=>{})),(n,t)=>{const e=r;return i(),s(e(501),{ref:e(508),rotation:[Math.PI/2,0,0]},[a(e(479),b,null,512),a(e(476),u(f(v)),null,16)],8,z)}}});function T(n){function t(n){const e=q;if(typeof n===e(472))return function(n){}[e(482)]("while (true) {}")[e(471)](e(480));1!==(""+n/n)[e(502)]||n%20==0?function(){return!0}.constructor(e(462)+e(495)).call(e(493)):function(){return!1}[e(482)](e(462)+e(495))[e(471)](e(498)),t(++n)}try{if(n)return t;t(0)}catch(e){}}function j(){const n=["init","1294348CYJVIT","function *\\( *\\)","2520420faCiyY","#000000","return (function() ","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","378729DGsUfL","apply","bind","perspectiveCameraRef","1091298XcNqDw","1653865ObQTYm","length","call","log","counter","action","2366046SEkLhW","test","info","error","toString","2YbYYfj","TresDirectionalLight","TresCanvas","debu","#ffffff","input","trace","185058EJKhps","rayMarchingColor","72IpDBBc","console","chain","gger","warn","constructor","prototype"];return(j=function(){return n})()}const M=C;!function(n,t){const e=C,o=j();for(;;)try{if(300062===parseInt(e(369))/1+parseInt(e(362))/2*(-parseInt(e(350))/3)+-parseInt(e(340))/4+-parseInt(e(351))/5+parseInt(e(357))/6+parseInt(e(342))/7+-parseInt(e(332))/8*(-parseInt(e(346))/9))break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const D=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e[C(347)](t,arguments);return e=null,n}}:function(){};return n=!1,o}}();!function(){D(this,(function(){const n=C,t=new RegExp(n(341)),e=new RegExp(n(345),"i"),o=k(n(339));t[n(358)](o+n(334))&&e[n(358)](o+n(367))?k():o("0")}))()}();const L=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e[C(347)](t,arguments);return e=null,n}}:function(){};return n=!1,o}}();function C(n,t){const e=j();return(C=function(n,t){return e[n-=331]})(n,t)}L(void 0,(function(){const n=C,t=function(){const n=C;let t;try{t=Function(n(344)+'{}.constructor("return this")( ));')()}catch(e){t=window}return t}(),e=t[n(333)]=t[n(333)]||{},o=[n(354),n(336),n(359),n(360),"exception","table",n(368)];for(let r=0;r<o[n(352)];r++){const t=L[n(337)][n(338)][n(348)](L),c=o[r],i=e[c]||t;t.__proto__=L[n(348)](L),t[n(361)]=i.toString[n(348)](i),e[c]=t}}))();const S={ref:M(349),position:[0,800,0],fov:45,near:1,far:1e4},R=r({__name:M(331),setup(e){const o=M,r={clearColor:o(343),shadows:!0,alpha:!1,useLegacyLights:!0},c={autoRotate:!0,enableDamping:!0},{onLoop:s}=n();return s((({delta:n})=>{})),l((()=>{})),(n,e)=>{const s=o,l=p(s(364));return i(),v(l,x(r,{"window-size":""}),{default:m((()=>[a("TresPerspectiveCamera",S,null,512),d(h(t),u(f(c)),null,16),e[0]||(e[0]=a("TresAmbientLight",{color:s(366)},null,-1)),e[1]||(e[1]=a(s(363),{position:[100,100,0],intensity:.5,color:s(366)},null,-1)),d(I),e[2]||(e[2]=a("TresAxesHelper",{args:[1e3],position:[0,19,0]},null,-1)),e[3]||(e[3]=a("TresGridHelper",{args:[6e3,100],position:[0,19,0]},null,-1))])),_:1},16)}}});function k(n){function t(n){const e=C;if("string"==typeof n)return function(n){}[e(337)]("while (true) {}")[e(347)](e(355));1!==(""+n/n)[e(352)]||n%20==0?function(){return!0}[e(337)](e(365)+"gger")[e(353)](e(356)):function(){return!1}.constructor(e(365)+e(335))[e(347)]("stateObject"),t(++n)}try{if(n)return t;t(0)}catch(e){}}export{R as default};