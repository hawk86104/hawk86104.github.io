import{e as n,U as t}from"./@tresjs.FlKhQDQ71735866388381.js";import{a0 as e,k as o}from"./three.Rja0AEnA1735866388381.js";import{d as r,a1 as i,o as a,D as s,J as c,aj as u,ak as f,q as p,e as l,f as m,g as d,j as h,u as v,m as x}from"./@vue.yG49nQHr1735866388381.js";import"./@vueuse.YI3Exu6_1735866388381.js";const y=w;!function(n,t){const e=w,o=_();for(;;)try{if(737092===parseInt(e(450))/1+-parseInt(e(469))/2*(parseInt(e(478))/3)+-parseInt(e(457))/4*(-parseInt(e(454))/5)+parseInt(e(471))/6+-parseInt(e(437))/7*(parseInt(e(476))/8)+-parseInt(e(449))/9+-parseInt(e(448))/10*(-parseInt(e(468))/11))break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const g=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e[w(458)](t,arguments);return e=null,n}}:function(){};return n=!1,o}}();!function(){g(this,(function(){const n=w,t=new RegExp("function *\\( *\\)"),e=new RegExp(n(462),"i"),o=L(n(461));t[n(451)](o+n(460))&&e[n(451)](o+n(440))?L():o("0")}))()}();const q=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e[w(458)](t,arguments);return e=null,n}}:function(){};return n=!1,o}}();function _(){const n=['{}.constructor("return this")( )',"warn","input","table","TresMesh","mousemove","clientX","counter","bind","clientY","57010RoFRQu","10496988ekqbga","1369090ZnIsNA","test","gger","trace","220isaQYM","prototype","uniforms","42392GbzdrL","apply","value","chain","init","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","innerWidth","exception","MeshRef","while (true) {}","u_time","2981ZbGvtf","1446682OAWZdt","__proto__","8160492aqTGLK","length","constructor","debu","return (function() ","296JgQxik","rayMarchingMaterialCombination","6kiLTSr","rotation","console","toString","TresTubeGeometryRef","addEventListener","263039hNdoFU"];return(_=function(){return n})()}q(void 0,(function(){const n=w;let t;try{t=Function(n(475)+n(438)+");")()}catch(r){t=window}const e=t[n(480)]=t.console||{},o=["log",n(439),"info","error",n(464),n(441),n(453)];for(let i=0;i<o[n(472)];i++){const t=q[n(473)][n(455)][n(446)](q),r=o[i],a=e[r]||t;t[n(470)]=q[n(446)](q),t[n(481)]=a[n(481)][n(446)](a),e[r]=t}}))();const z=[y(479)],b={ref:y(482),args:[1e3,1e3]};function w(n,t){const e=_();return(w=function(n,t){return e[n-=436]})(n,t)}const I=r({__name:y(477),setup(t){const r=y,{onLoop:p,onAfterLoop:l}=n(),m={transparent:!0,depthWrite:!0,depthTest:!0,side:e,vertexShader:"varying vec2 vUv;\nvoid main(){\n\tgl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);\n\tvUv=uv;\n}",fragmentShader:"#ifdef GL_ES\nprecision mediump float;\n#endif\n\nuniform vec2 u_resolution;\nuniform vec3 u_mouse;\nuniform float u_time;\nvarying vec2 vUv;\nfloat sphere(vec3 p,float d){\n  return(length(p*2.)-d)/2.;\n}\n\nfloat sdPyramid(vec3 p,float h)\n{\n  float m2=h*h+.25;\n  \n  p.xz=abs(p.xz);\n  p.xz=(p.z>p.x)?p.zx:p.xz;\n  p.xz-=.5;\n  \n  vec3 q=vec3(p.z,h*p.y-.5*p.x,h*p.x+.5*p.y);\n  \n  float s=max(-q.x,0.);\n  float t=clamp((q.y-.5*p.z)/(m2+.25),0.,1.);\n  \n  float a=m2*(q.x+s)*(q.x+s)+q.y*q.y;\n  float b=m2*(q.x+.5*t)*(q.x+.5*t)+(q.y-m2*t)*(q.y-m2*t);\n  \n  float d2=min(q.y,-q.x*m2-q.y*.5)>0.?0.:min(a,b);\n  \n  return sqrt((d2+q.z*q.z)/m2)*sign(max(q.z,-p.y));\n}\nfloat sdBoxFrame(vec3 p,vec3 b,float e)\n{\n  p=abs(p)-b;\n  vec3 q=abs(p+e)-e;\n  return min(min(\n      length(max(vec3(p.x,q.y,q.z),0.))+min(max(p.x,max(q.y,q.z)),0.),\n      length(max(vec3(q.x,p.y,q.z),0.))+min(max(q.x,max(p.y,q.z)),0.)),\n      length(max(vec3(q.x,q.y,p.z),0.))+min(max(q.x,max(q.y,p.z)),0.));\n    }\n    mat2 rot2D(float angle){\n      float s=sin(angle);\n      float c=cos(angle);\n      return mat2(c,-s,s,c);\n    }\n    float map(vec3 p){\n      // p.xy*=rot2D(u_time);\n      vec3 pos=vec3(sin(u_time*10.),0.,0.);\n      float spheresdf=sphere(p,.5);\n      float BoxFramesdf=sdBoxFrame(p,vec3(.5,.3,.5),.025);\n      float entity=min(BoxFramesdf,spheresdf);\n      entity=min(sdPyramid(-p-vec3(1.,0.,0.),1.5),entity);\n      return entity;\n    }\n    \n    void main(){\n      vec3 ro=vec3(0.,0.,-4.);//起始位置\n      vec3 rd=normalize(vec3(vUv-.5,1.));//方向\n      // horizontal camera rotation\n      \n      ro.xz*=rot2D(-u_mouse.x*.001);\n      rd.xz*=rot2D(-u_mouse.x*.001);\n      ro.xy*=rot2D(-u_mouse.y*.001);\n      rd.xy*=rot2D(-u_mouse.y*.001);\n      float t=0.;\n      vec3 color=vec3(0.);\n      for(int i=0;i<80;i++){\n        vec3 p=ro+rd*t;\n        float d=map(p);\n        t+=d;\n        //优化效率\n        if(t>100.||d<.001){\n          break;\n        }\n        \n      }\n      color=vec3(t)*.2;\n      gl_FragColor=vec4(color,1.);\n      \n    }",uniforms:{u_resolution:{value:new o(window[r(463)],window.innerHeight)},u_mouse:{value:new o(0,0)},u_time:{value:0}}},d=window.innerWidth/2,h=window.innerHeight/2;let v=0,x=0;return document[r(436)](r(443),(function(n){const t=r;v=n[t(444)]-d,x=n[t(447)]-h}),!1),i((()=>{})),p((({elapsed:n})=>{const t=r;m.uniforms[t(467)][t(459)]+=.001,m[t(456)].u_mouse[t(459)]=new o(v,x)})),l((()=>{})),(n,t)=>{const e=r;return a(),s(e(442),{ref:e(465),rotation:[Math.PI/2,0,0]},[c("TresPlaneGeometry",b,null,512),c("TresShaderMaterial",u(f(m)),null,16)],8,z)}}});function L(n){function t(n){const e=w;if("string"==typeof n)return function(n){}[e(473)](e(466))[e(458)](e(445));1!==(""+n/n).length||n%20==0?function(){return!0}[e(473)](e(474)+"gger").call("action"):function(){return!1}.constructor(e(474)+e(452))[e(458)]("stateObject"),t(++n)}try{if(n)return t;t(0)}catch(e){}}const T=k;!function(n,t){const e=k,o=D();for(;;)try{if(417415===-parseInt(e(515))/1+parseInt(e(503))/2+-parseInt(e(502))/3+-parseInt(e(478))/4*(parseInt(e(488))/5)+-parseInt(e(516))/6*(parseInt(e(494))/7)+parseInt(e(485))/8+parseInt(e(512))/9)break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const j=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e.apply(t,arguments);return e=null,n}}:function(){};return n=!1,o}}();!function(){j(this,(function(){const n=k,t=new RegExp(n(508)),e=new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","i"),o=F(n(500));t[n(491)](o+n(495))&&e[n(491)](o+"input")?F():o("0")}))()}();const M=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e[k(487)](t,arguments);return e=null,n}}:function(){};return n=!1,o}}();M(void 0,(function(){const n=k,t=function(){const n=k;let t;try{t=Function(n(514)+n(504)+");")()}catch(e){t=window}return t}(),e=t[n(477)]=t[n(477)]||{},o=[n(511),n(505),n(483),n(475),n(513),n(486),"trace"];for(let r=0;r<o[n(490)];r++){const t=M[n(493)][n(489)][n(484)](M),i=o[r],a=e[i]||t;t.__proto__=M[n(484)](M),t.toString=a[n(492)][n(484)](a),e[i]=t}}))();const R={ref:T(479),position:[0,1500,0],fov:45,near:1,far:1e4};function k(n,t){const e=D();return(k=function(n,t){return e[n-=475]})(n,t)}const C=r({__name:T(507),setup(e){const o=T,r={clearColor:o(499),shadows:!0,alpha:!1,useLegacyLights:!0},i={autoRotate:!1,enableDamping:!0},{onLoop:s}=n();return s((({delta:n})=>{})),p((()=>{})),(n,e)=>{const s=o,p=l("TresCanvas");return a(),m(p,x(r,{"window-size":""}),{default:d((()=>[c(s(480),R,null,512),h(v(t),u(f(i)),null,16),e[0]||(e[0]=c(s(509),{color:"#ffffff"},null,-1)),e[1]||(e[1]=c(s(498),{position:[100,100,0],intensity:.5,color:"#ffffff"},null,-1)),h(I)])),_:1},16)}}});function D(){const n=["1909086nikLTk","error","string","console","12NJIjqs","perspectiveCameraRef","TresPerspectiveCamera","counter","call","info","bind","3672528pCObqZ","table","apply","706495GNqULE","prototype","length","test","toString","constructor","7lLIluK","chain","action","stateObject","TresDirectionalLight","#000000","init","while (true) {}","2369040CFBndD","461654lyzrOd",'{}.constructor("return this")( )',"warn","debu","rayMarchingCombination","function *\\( *\\)","TresAmbientLight","gger","log","18572724BvJMTd","exception","return (function() ","804356RCPJlP"];return(D=function(){return n})()}function F(n){function t(n){const e=k;if(typeof n===e(476))return function(n){}[e(493)](e(501))[e(487)](e(481));1!==(""+n/n)[e(490)]||n%20==0?function(){return!0}.constructor(e(506)+e(510))[e(482)](e(496)):function(){return!1}.constructor(e(506)+e(510)).apply(e(497)),t(++n)}try{if(n)return t;t(0)}catch(e){}}export{C as default};