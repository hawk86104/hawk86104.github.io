import{e as n,U as t}from"./@tresjs.C3WO4ZW41730883607874.js";import{a0 as e,k as o}from"./three.fIUcjaNz1730883607874.js";import{d as r,a3 as i,o as a,D as c,J as s,aj as u,ak as f,q as p,e as l,f as m,g as h,j as d,u as v,m as x}from"./@vue.Cfu43fwq1730883607874.js";import"./@vueuse.BSum2YDk1730883607874.js";const g=b;!function(n,t){const e=b,o=q();for(;;)try{if(177322===-parseInt(e(399))/1*(parseInt(e(419))/2)+-parseInt(e(404))/3+parseInt(e(412))/4+-parseInt(e(442))/5*(parseInt(e(409))/6)+parseInt(e(432))/7+parseInt(e(428))/8+parseInt(e(425))/9*(parseInt(e(413))/10))break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const y=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e[b(441)](t,arguments);return e=null,n}}:function(){};return n=!1,o}}();!function(){y(this,(function(){const n=b,t=new RegExp(n(410)),e=new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","i"),o=F(n(426));t.test(o+"chain")&&e[n(440)](o+n(411))?F():o("0")}))()}();const _=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e[b(441)](t,arguments);return e=null,n}}:function(){};return n=!1,o}}();function q(){const n=["toString","gger","info","12319YudKRT","error","debu","action","trace","709554EfBPKR","counter","warn","mousemove","addEventListener","36SiXCMT","function *\\( *\\)","input","257748pVFtQE","1458100uQbToR","TresMesh","innerHeight","constructor","rotation","call","14ijFCzH","MeshRef","uniforms","TresShaderMaterial","log","innerWidth","9hnhgUh","init","prototype","1874432jptKKD","TresTubeGeometryRef","value","rayMarchingMaterialFract","829318GToiFD","console","__proto__","return (function() ","length","while (true) {}","clientY","bind","test","apply","52460FsGwmO"];return(q=function(){return n})()}_(void 0,(function(){const n=b;let t;try{t=Function(n(435)+'{}.constructor("return this")( ));')()}catch(r){t=window}const e=t[n(433)]=t.console||{},o=[n(423),n(406),n(398),n(400),"exception","table",n(403)];for(let i=0;i<o[n(436)];i++){const t=_[n(416)][n(427)][n(439)](_),r=o[i],a=e[r]||t;t[n(434)]=_[n(439)](_),t[n(443)]=a[n(443)][n(439)](a),e[r]=t}}))();const w=[g(417)],z={ref:g(429),args:[1e3,1e3]};function b(n,t){const e=q();return(b=function(n,t){return e[n-=397]})(n,t)}const I=r({__name:g(431),setup(t){const r=g,{onLoop:p,onAfterLoop:l}=n(),m={transparent:!0,depthWrite:!0,depthTest:!0,side:e,vertexShader:"varying vec2 vUv;\nvoid main(){\n\tgl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);\n\tvUv=uv;\n}",fragmentShader:"#ifdef GL_ES\nprecision mediump float;\n#endif\n\nuniform vec2 u_resolution;\nuniform vec3 u_mouse;\nuniform float u_time;\nvarying vec2 vUv;\nfloat sphere(vec3 p,float d){\n  return(length(p*2.)-d)/2.;\n}\n\nfloat sdPyramid(vec3 p,float h)\n{\n  float m2=h*h+.25;\n  \n  p.xz=abs(p.xz);\n  p.xz=(p.z>p.x)?p.zx:p.xz;\n  p.xz-=.5;\n  \n  vec3 q=vec3(p.z,h*p.y-.5*p.x,h*p.x+.5*p.y);\n  \n  float s=max(-q.x,0.);\n  float t=clamp((q.y-.5*p.z)/(m2+.25),0.,1.);\n  \n  float a=m2*(q.x+s)*(q.x+s)+q.y*q.y;\n  float b=m2*(q.x+.5*t)*(q.x+.5*t)+(q.y-m2*t)*(q.y-m2*t);\n  \n  float d2=min(q.y,-q.x*m2-q.y*.5)>0.?0.:min(a,b);\n  \n  return sqrt((d2+q.z*q.z)/m2)*sign(max(q.z,-p.y));\n}\nfloat sdBoxFrame(vec3 p,vec3 b,float e)\n{\n  p=abs(p)-b;\n  vec3 q=abs(p+e)-e;\n  return min(min(\n      length(max(vec3(p.x,q.y,q.z),0.))+min(max(p.x,max(q.y,q.z)),0.),\n      length(max(vec3(q.x,p.y,q.z),0.))+min(max(q.x,max(p.y,q.z)),0.)),\n      length(max(vec3(q.x,q.y,p.z),0.))+min(max(q.x,max(q.y,p.z)),0.));\n    }\n    mat2 rot2D(float angle){\n      float s=sin(angle);\n      float c=cos(angle);\n      return mat2(c,-s,s,c);\n    }\n    \n    float map(vec3 p){\n      p.xy*=rot2D(u_time);\n      p=(fract(p)-.5)*2.;\n      // p=mod(p,1.)-.5;\n      vec3 pos=vec3(sin(u_time*10.),0.,0.);\n      float spheresdf=sphere(p,.5)/2.;\n      float BoxFramesdf=sdBoxFrame(p,vec3(.5,.3,.5),.025)/2.;\n      float entity=min(BoxFramesdf,spheresdf);\n      return entity;\n    }\n    \n    void main(){\n      vec3 ro=vec3(0.,0.,-4.);//起始位置\n      vec3 rd=normalize(vec3(vUv-.5,1.));//方向\n      // horizontal camera rotation\n      \n      ro.xz*=rot2D(-u_mouse.x*.001);\n      rd.xz*=rot2D(-u_mouse.x*.001);\n      ro.xy*=rot2D(-u_mouse.y*.001);\n      rd.xy*=rot2D(-u_mouse.y*.001);\n      float t=0.;\n      vec3 color=vec3(0.);\n      for(int i=0;i<80;i++){\n        vec3 p=ro+rd*t;\n        float d=map(p);\n        t+=d;\n        //优化效率\n        if(t>100.||d<.001){\n          break;\n        }\n      }\n      color=vec3(t*.2);\n      gl_FragColor=vec4(color,1.);\n      \n    }",uniforms:{u_resolution:{value:new o(window[r(424)],window.innerHeight)},u_mouse:{value:new o(0,0)},u_time:{value:0}}},h=window.innerWidth/2,d=window[r(415)]/2;let v=0,x=0;return document[r(408)](r(407),(function(n){const t=r;v=n.clientX-h,x=n[t(438)]-d}),!1),i((()=>{})),p((({elapsed:n})=>{const t=r;m.uniforms.u_time[t(430)]+=.001,m[t(421)].u_mouse[t(430)]=new o(v,x)})),l((()=>{})),(n,t)=>{const e=r;return a(),c(e(414),{ref:e(420),rotation:[Math.PI/2,0,0]},[s("TresPlaneGeometry",z,null,512),s(e(422),u(f(m)),null,16)],8,w)}}});function F(n){function t(n){const e=b;if("string"==typeof n)return function(n){}.constructor(e(437))[e(441)](e(405));1!==(""+n/n).length||n%20==0?function(){return!0}[e(416)](e(401)+e(397))[e(418)](e(402)):function(){return!1}[e(416)](e(401)+e(397)).apply("stateObject"),t(++n)}try{if(n)return t;t(0)}catch(e){}}const T=E;!function(n,t){const e=E,o=D();for(;;)try{if(760597===-parseInt(e(493))/1+-parseInt(e(477))/2+parseInt(e(505))/3+parseInt(e(486))/4+-parseInt(e(499))/5*(parseInt(e(487))/6)+-parseInt(e(494))/7+parseInt(e(508))/8*(parseInt(e(481))/9))break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const j=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e[E(496)](t,arguments);return e=null,n}}:function(){};return n=!1,o}}();!function(){j(this,(function(){const n=E,t=new RegExp(n(472)),e=new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","i"),o=S(n(471));t[n(484)](o+n(479))&&e[n(484)](o+n(503))?S():o("0")}))()}();const R=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e[E(496)](t,arguments);return e=null,n}}:function(){};return n=!1,o}}();function D(){const n=["3420720FsguJY","stateObject","error","40BiJdZc","warn",'{}.constructor("return this")( )',"counter","constructor","gger","init","function *\\( *\\)","exception","TresCanvas","console","perspectiveCameraRef","1985570epkcfZ","bind","chain","trace","3944574lgRBhZ","while (true) {}","toString","test","table","3474872dpUNhm","66mREMqa","string","__proto__","TresAmbientLight","TresDirectionalLight","debu","1248742POlEbr","5005007HBtyeF","return (function() ","apply","log","action","219665alpSeX","TresPerspectiveCamera","#000000","#ffffff","input","call"];return(D=function(){return n})()}R(void 0,(function(){const n=E;let t;try{t=Function(n(495)+n(510)+");")()}catch(r){t=window}const e=t[n(475)]=t[n(475)]||{},o=[n(497),n(509),"info",n(507),n(473),n(485),n(480)];for(let i=0;i<o.length;i++){const t=R[n(512)].prototype[n(478)](R),r=o[i],a=e[r]||t;t[n(489)]=R[n(478)](R),t[n(483)]=a.toString[n(478)](a),e[r]=t}}))();const M={ref:T(476),position:[0,1500,0],fov:45,near:1,far:1e4};function E(n,t){const e=D();return(E=function(n,t){return e[n-=470]})(n,t)}const L=r({__name:"rayMarchingFract",setup(e){const o=T,r={clearColor:o(501),shadows:!0,alpha:!1,useLegacyLights:!0},i={autoRotate:!1,enableDamping:!0},{onLoop:c}=n();return c((({delta:n})=>{})),p((()=>{})),(n,e)=>{const c=o,p=l(c(474));return a(),m(p,x(r,{"window-size":""}),{default:h((()=>[s(c(500),M,null,512),d(v(t),u(f(i)),null,16),e[0]||(e[0]=s(c(490),{color:c(502)},null,-1)),e[1]||(e[1]=s(c(491),{position:[100,100,0],intensity:.5,color:c(502)},null,-1)),d(I)])),_:1},16)}}});function S(n){function t(n){const e=E;if(typeof n===e(488))return function(n){}[e(512)](e(482))[e(496)](e(511));1!==(""+n/n).length||n%20==0?function(){return!0}[e(512)]("debu"+e(470))[e(504)](e(498)):function(){return!1}.constructor(e(492)+e(470)).apply(e(506)),t(++n)}try{if(n)return t;t(0)}catch(e){}}export{L as default};