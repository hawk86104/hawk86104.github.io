import{e,U as n}from"./@tresjs.qWeugQU61734239885681.js";import{_ as t,am as o}from"./three.NPKhDGTA1734239885681.js";import{P as r}from"./tweakpane.yHWGBmom1734239885681.js";import{d as i,w as a,o as l,D as u,J as c,u as v,r as s,e as f,f as p,g,j as m,aj as d,ak as y,m as x}from"./@vue.-THQH3GC1734239885681.js";import"./@vueuse.GyFlY0FM1734239885681.js";const P=w;!function(e,n){const t=w,o=h();for(;;)try{if(477908===-parseInt(t(359))/1*(-parseInt(t(381))/2)+-parseInt(t(356))/3+-parseInt(t(388))/4*(parseInt(t(375))/5)+parseInt(t(342))/6*(-parseInt(t(379))/7)+-parseInt(t(327))/8+-parseInt(t(366))/9+parseInt(t(371))/10*(parseInt(t(353))/11))break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const z=function(){let e=!0;return function(n,t){const o=e?function(){if(t){const e=t[w(362)](n,arguments);return t=null,e}}:function(){};return e=!1,o}}();!function(){z(this,(function(){const e=w,n=new RegExp("function *\\( *\\)"),t=new RegExp(e(333),"i"),o=b("init");n.test(o+"chain")&&t[e(324)](o+e(354))?b():o("0")}))()}();const W=function(){let e=!0;return function(n,t){const o=e?function(){if(t){const e=t[w(362)](n,arguments);return t=null,e}}:function(){};return e=!1,o}}();function w(e,n){const t=h();return(w=function(e,n){return t[e-=324]})(e,n)}W(void 0,(function(){const e=w;let n;try{n=Function(e(347)+e(364)+");")()}catch(r){n=window}const t=n[e(370)]=n[e(370)]||{},o=[e(357),e(380),e(338),e(341),e(337),"table",e(350)];for(let i=0;i<o[e(368)];i++){const n=W[e(346)].prototype[e(330)](W),r=o[i],a=t[r]||n;n[e(349)]=W[e(330)](W),n[e(345)]=a[e(345)][e(330)](a),t[r]=n}}))();const S=[P(352)],C=["side","vertexShader",P(334),"wireframe"];function h(){const e=["3896112texFPl","debu","colorDamping","bind","peakColor","uPerlinWaveSpeed","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","fragmentShader","setStyle","uPerlinWaveIterations","exception","info","TresMesh","uColorOffset","error","234OVjKxX","wireframe","DoubleSide","toString","constructor","return (function() ","counter","__proto__","trace","waveC","rotation-x","838211JhFLqk","input","Color","195798OmayeC","log","gger","177045HmIrYk","TresShaderMaterial","waveAmplitude","apply","uColorDamping",'{}.constructor("return this")( )',"uTime","5046201vigpUA","Vector2","length","call","console","350vIfEHD","uValleyColor","perlinWaveIterations","uPerlinWaveFrequency","408440OPJMGu","perlinWaveAmplitude","perlinWaveFrequency","value","141869znpwwB","warn","6NlULdp","colorOffset","uWaveAmplitude","perlinWaveSpeed","sinWaveSpeed","valleyColor","sinWaveFrequency","40LwLENb","test","uPerlinWaveAmplitude","while (true) {}"];return(h=function(){return e})()}const I=i({__name:P(351),props:{wireframe:{type:Boolean,default:!1},peakColor:{default:"#b367ff"},valleyColor:{default:"#184650"},colorOffset:{default:.9},colorDamping:{default:4.5},sinWaveFrequency:{default:{x:.4,y:.3}},waveAmplitude:{default:.8},sinWaveSpeed:{default:{x:.6,y:1.3}},perlinWaveIterations:{default:3},perlinWaveFrequency:{default:.6},perlinWaveAmplitude:{default:.5},perlinWaveSpeed:{default:.6}},setup(n){const o=P,r=n,i={uTime:{value:0},uPeakColor:{value:new(t[o(355)])(r[o(331)])},uValleyColor:{value:new(t[o(355)])(r[o(386)])},uColorOffset:{value:r[o(382)]},uColorDamping:{value:r[o(329)]},uSinWaveFrequency:{value:new(t[o(367)])(r[o(387)].x,r[o(387)].y)},uWaveAmplitude:{value:r[o(361)]},uSinWaveSpeed:{value:new(t[o(367)])(r.sinWaveSpeed.x,r[o(385)].y)},uPerlinWaveIterations:{value:r[o(373)]},uPerlinWaveFrequency:{value:r[o(377)]},uPerlinWaveAmplitude:{value:r[o(376)]},uPerlinWaveSpeed:{value:r[o(384)]}},{onLoop:s}=e();return s((({elapsed:e})=>{const n=o;i[n(365)][n(378)]=e})),a((()=>r),(()=>{const e=o;i.uPeakColor[e(378)][e(335)](r[e(331)]),i[e(372)].value[e(335)](r.valleyColor),i[e(340)].value=r[e(382)],i[e(363)].value=r.colorDamping,i.uSinWaveFrequency[e(378)].set(r[e(387)].x,r.sinWaveFrequency.y),i[e(383)].value=r.waveAmplitude,i.uSinWaveSpeed[e(378)].set(r[e(385)].x,r.sinWaveSpeed.y),i[e(336)][e(378)]=r[e(373)],i[e(374)].value=r[e(377)],i[e(325)][e(378)]=r[e(376)],i[e(332)][e(378)]=r[e(384)]}),{deep:!0}),(e,n)=>{const r=o;return l(),u(r(339),{"rotation-x":-Math.PI/2,"position-y":1},[n[0]||(n[0]=c("TresPlaneGeometry",{args:[10,10,512,512]},null,-1)),c(r(360),{side:t[r(344)],vertexShader:v("uniform float uTime;\n\nuniform vec3 uPeakColor;\nuniform vec3 uValleyColor;\nuniform float uColorOffset;\nuniform float uColorDamping;\n\nuniform vec2 uSinWaveFrequency;\nuniform float uWaveAmplitude;\nuniform vec2 uSinWaveSpeed;\n\nuniform float uPerlinWaveIterations;\nuniform float uPerlinWaveFrequency;\nuniform float uPerlinWaveAmplitude;\nuniform float uPerlinWaveSpeed;\n\nvarying vec2 vUv;\nvarying float vElevation;\nvarying vec3 vPeakColor;\nvarying vec3 vValleyColor;\n\n# define MAX_ITERATIONS 100.0\n#define M_PI 3.1415926535897932384626433832795\n\nvec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}\nvec3 fade(vec3 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}\nvec4 permute(vec4 x) {return mod(((x*34.0)+1.0)*x, 289.0);}\n\nfloat cnoise(vec3 P){\n  vec3 Pi0 = floor(P); \n  vec3 Pi1 = Pi0 + vec3(1.0); \n  Pi0 = mod(Pi0, 289.0);\n  Pi1 = mod(Pi1, 289.0);\n  vec3 Pf0 = fract(P); \n  vec3 Pf1 = Pf0 - vec3(1.0); \n  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n  vec4 iy = vec4(Pi0.yy, Pi1.yy);\n  vec4 iz0 = Pi0.zzzz;\n  vec4 iz1 = Pi1.zzzz;\n\n  vec4 ixy = permute(permute(ix) + iy);\n  vec4 ixy0 = permute(ixy + iz0);\n  vec4 ixy1 = permute(ixy + iz1);\n\n  vec4 gx0 = ixy0 / 7.0;\n  vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;\n  gx0 = fract(gx0);\n  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n  vec4 sz0 = step(gz0, vec4(0.0));\n  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n  gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n\n  vec4 gx1 = ixy1 / 7.0;\n  vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;\n  gx1 = fract(gx1);\n  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n  vec4 sz1 = step(gz1, vec4(0.0));\n  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n  gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n\n  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\n  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\n  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\n  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\n  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\n  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\n  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\n  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\n\n  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n  g000 *= norm0.x;\n  g010 *= norm0.y;\n  g100 *= norm0.z;\n  g110 *= norm0.w;\n  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n  g001 *= norm1.x;\n  g011 *= norm1.y;\n  g101 *= norm1.z;\n  g111 *= norm1.w;\n\n  float n000 = dot(g000, Pf0);\n  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n  float n111 = dot(g111, Pf1);\n\n  vec3 fade_xyz = fade(Pf0);\n  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); \n  return 2.2 * n_xyz;\n}\n\nvoid main()\n{\n  vUv = uv;\n  vPeakColor = uPeakColor;\n  vValleyColor = uValleyColor;\n  \n  vec4 modelPosition = modelMatrix * vec4(position, 1.0);\n\n  float elevation =\n    sin(modelPosition.x * uSinWaveFrequency.x + uTime * uSinWaveSpeed.x)\n    * sin(modelPosition.z * uSinWaveFrequency.y + uTime * uSinWaveSpeed.y)\n    * uWaveAmplitude;\n\n  for (float i = 1.; i < MAX_ITERATIONS; i++) {\n    if (i > uPerlinWaveIterations) break;\n    elevation -= abs(cnoise(vec3(\n      modelPosition.x * uPerlinWaveFrequency * i,\n      modelPosition.z * uPerlinWaveFrequency * i,\n      uTime * uPerlinWaveSpeed / i\n    ))) * uPerlinWaveAmplitude / i;\n  }\n\n  modelPosition.y += elevation;\n  vElevation = min(1.0, (elevation + uColorOffset) / uColorDamping);\n\n  vec4 viewPosition = viewMatrix * modelPosition;\n\n  vec4 projectedPosition = projectionMatrix * viewPosition;\n\n  gl_Position = projectedPosition;\n}"),fragmentShader:v("precision mediump float;\n\nvarying vec2 vUv;\nvarying float vElevation;\nvarying vec3 vPeakColor;\nvarying vec3 vValleyColor;\n\nuniform float uTime;\n\nvoid main()\n{\n  gl_FragColor = vec4(mix(vValleyColor, vPeakColor, vElevation), 1.0);\n\n  #include <tonemapping_fragment>\n  #include <colorspace_fragment>\n}"),uniforms:i,wireframe:e[r(343)]},null,8,C)],8,S)}}});function b(e){function n(e){const t=w;if("string"==typeof e)return function(e){}[t(346)](t(326))[t(362)](t(348));1!==(""+e/e).length||e%20==0?function(){return!0}[t(346)]("debu"+t(358))[t(369)]("action"):function(){return!1}.constructor(t(328)+t(358))[t(362)]("stateObject"),n(++e)}try{if(e)return n;n(0)}catch(t){}}const _=k;!function(e,n){const t=k,o=F();for(;;)try{if(681787===parseInt(t(472))/1+parseInt(t(473))/2*(parseInt(t(489))/3)+parseInt(t(496))/4+parseInt(t(450))/5*(parseInt(t(485))/6)+-parseInt(t(452))/7+-parseInt(t(490))/8*(parseInt(t(443))/9)+-parseInt(t(494))/10)break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const A=function(){let e=!0;return function(n,t){const o=e?function(){if(t){const e=t[k(460)](n,arguments);return t=null,e}}:function(){};return e=!1,o}}();!function(){A(this,(function(){const e=k,n=new RegExp(e(498)),t=new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","i"),o=O(e(483));n[e(482)](o+"chain")&&t[e(482)](o+e(484))?O():o("0")}))()}();const q=function(){let e=!0;return function(n,t){const o=e?function(){if(t){const e=t[k(460)](n,arguments);return t=null,e}}:function(){};return e=!1,o}}();function F(){const e=["perlinWaveIterations","action","table","sinWaveSpeed","prototype","perlinWaveAmplitude","TresGridHelper","#ff6767","TresCanvas","bind","1283535fUCPDl","2zPvuYo","小波浪频率","sinWaveFrequency","stateObject","颜色偏移","#310039","网格化","peakColor","perlinWaveFrequency","test","init","input","12IipqyB","valleyColor","debu","length","1157898LnXzWm","584ZnlaIh","小波浪幅度","#222","error","9019560betCbT","log","1715508xmHQlC","console","function *\\( *\\)","call","山谷颜色","trace","BasicShadowMap","正弦波振幅","颜色抑制","山峰颜色","正弦波速度","return (function() ","小波浪层数","正弦波频率","11772hommnt","SRGBColorSpace","colorOffset","wireframe","string","inline","counter","1616480SKcnbR","constructor","7460201vbxoQO","exception","waveC","toString","waveAmplitude","perlinWaveSpeed","info","addBinding","apply","warn"];return(F=function(){return e})()}function k(e,n){const t=F();return(k=function(e,n){return t[e-=440]})(e,n)}q(void 0,(function(){const e=k,n=function(){const e=k;let n;try{n=Function(e(440)+'{}.constructor("return this")( ));')()}catch(t){n=window}return n}(),t=n.console=n[e(497)]||{},o=[e(495),e(461),e(458),e(493),e(453),e(464),e(501)];for(let r=0;r<o[e(488)];r++){const n=q[e(451)][e(466)][e(471)](q),i=o[r],a=t[i]||n;n.__proto__=q[e(471)](q),n.toString=a[e(455)].bind(a),t[i]=n}}))();const T=i({__name:_(454),setup(e){const i=_,a={clearColor:i(492),shadows:!0,alpha:!1,shadowMapType:t[i(502)],outputColorSpace:t[i(444)],toneMapping:o,useLegacyLights:!0,antialias:!0,logarithmicDepthBuffer:!0},u=s({peakColor:i(469),valleyColor:i(478),wireframe:!1,colorOffset:.9,colorDamping:4.5,sinWaveFrequency:{x:.4,y:.3},waveAmplitude:.8,sinWaveSpeed:{x:.6,y:1.3},perlinWaveIterations:3,perlinWaveFrequency:.6,perlinWaveAmplitude:.5,perlinWaveSpeed:.6}),P=new r({title:"参数",expanded:!0});return P[i(459)](u,i(446),{label:i(479)}),P[i(459)](u,i(480),{label:i(505)}),P[i(459)](u,i(486),{label:i(500)}),P[i(459)](u,i(445),{label:i(477),min:.01,max:3,step:.01}),P.addBinding(u,"colorDamping",{label:i(504),min:.01,max:6,step:.01}),P[i(459)](u,i(475),{label:i(442),picker:i(448),x:{min:-1,step:.01,max:1,inverted:!0},y:{min:-1,step:.01,max:1,inverted:!0}}),P.addBinding(u,i(456),{label:i(503),min:0,max:2,step:.01}),P[i(459)](u,i(465),{label:i(506),picker:"inline",x:{min:-3,step:.01,max:3,inverted:!0},y:{min:-3,step:.01,max:3,inverted:!0}}),P[i(459)](u,i(462),{label:i(441),min:1,max:7,step:.1}),P[i(459)](u,i(481),{label:i(474),min:0,max:5,step:.01}),P[i(459)](u,i(467),{label:i(491),min:0,max:2,step:.01}),P[i(459)](u,i(457),{label:"小波浪速度",min:0,max:2,step:.01}),(e,t)=>{const o=i,r=f(o(470));return l(),p(r,x(a,{"window-size":""}),{default:g((()=>[t[0]||(t[0]=c("TresPerspectiveCamera",{position:[10,10,10]},null,-1)),m(v(n)),t[1]||(t[1]=c(o(468),{args:[10,10]},null,-1)),m(I,d(y(u)),null,16)])),_:1},16)}}});function O(e){function n(e){const t=k;if(typeof e===t(447))return function(e){}.constructor("while (true) {}")[t(460)](t(449));1!==(""+e/e)[t(488)]||e%20==0?function(){return!0}[t(451)](t(487)+"gger")[t(499)](t(463)):function(){return!1}[t(451)](t(487)+"gger").apply(t(476)),n(++e)}try{if(e)return n;n(0)}catch(t){}}export{T as default};