import{b as t}from"./index.3aLQMygt1735866388381.js";import{e as n,m as e,a as o,z as r}from"./@tresjs.FlKhQDQ71735866388381.js";import{bu as i,_ as s,m as a,W as c,ak as u,b6 as l,p as f,c2 as p,O as m,s as h,c3 as d,c4 as g,c5 as v,c6 as x}from"./three.Rja0AEnA1735866388381.js";import{P as y}from"./tweakpane.yHWGBmom1735866388381.js";import{l as w}from"./util.5vCOBJRn1735866388381.js";import{d as b,o as I,D as _,u as j,b as P,a4 as z,f as S,a1 as A,r as M,e as B,j as F,g as C,J as R,al as T,aj as Z,ak as D,F as k}from"./@vue.yG49nQHr1735866388381.js";import{_ as E}from"./@fesjs.u6K5q1hz1735866388381.js";import"./index.-991HkgJ1735866388381.js";import"./chalk.w3XuUwyA1735866388381.js";/* empty css                                 */import"./iconify-icon.l-H2-fnN1735866388381.js";import"./@iconify.3mYF4lU71735866388381.js";import"./dompurify.rQUea5mq1735866388381.js";import"./vue-router.9bMbssc81735866388381.js";import"./lodash-es.kYt-_xTG1735866388381.js";import"./@qlin.yHhFDldE1735866388381.js";import"./pinia.U7dsyb111735866388381.js";import"./vue-demi.C4xddsk91735866388381.js";import"./@floating-ui.BPbuo5Gx1735866388381.js";import"./@juggle.7yjBMqoW1735866388381.js";import"./@vueuse.YI3Exu6_1735866388381.js";import"./utils.toJAERsP1735866388381.js";import"./default.vue_vue_type_script_setup_true_lang.ZJ9V3SwC1735866388381.js";import"./three-mesh-ui.module.wuxV_TNn1735866388381.js";!function(t,n){const e=H,o=G();for(;;)try{if(763742===-parseInt(e(526))/1*(-parseInt(e(505))/2)+parseInt(e(544))/3*(parseInt(e(529))/4)+parseInt(e(510))/5+-parseInt(e(513))/6+-parseInt(e(546))/7*(-parseInt(e(531))/8)+parseInt(e(538))/9*(-parseInt(e(543))/10)+-parseInt(e(509))/11)break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const O=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[H(514)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();function H(t,n){const e=G();return(H=function(t,n){return e[t-=497]})(t,n)}!function(){O(this,(function(){const t=H,n=new RegExp(t(542)),e=new RegExp(t(523),"i"),o=W("init");n.test(o+t(517))&&e[t(511)](o+t(502))?W():o("0")}))()}();const U=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e.apply(n,arguments);return e=null,t}}:function(){};return t=!1,o}}();U(void 0,(function(){const t=H;let n;try{n=Function("return (function() "+t(528)+");")()}catch(r){n=window}const e=n[t(540)]=n[t(540)]||{},o=[t(522),"warn",t(532),t(501),t(535),"table",t(508)];for(let i=0;i<o[t(503)];i++){const n=U[t(507)][t(525)].bind(U),r=o[i],s=e[r]||n;n[t(521)]=U[t(498)](U),n[t(545)]=s[t(545)].bind(s),e[r]=n}}))();const L=t=>{const n=H;let e=t[n(500)].position[n(504)],o=Math[n(530)](Math[n(534)](e)),r=Math[n(530)](e/o),a=new Float32Array(o*r*4);!function(t){const e=n;for(let n=Math[e(506)](t.length/3)-1;n>0;n--){const o=Math[e(506)](Math.random()*(n+1));for(let e=0;e<3;e++){let r=t[3*n+e];t[3*n+e]=t[3*o+e],t[3*o+e]=r}}}(t[n(500)][n(520)][n(499)]);for(let i=0;i<e;i++){const e=t[n(500)][n(520)][n(499)][3*i+0],o=t.attributes[n(520)][n(499)][3*i+1],r=t[n(500)][n(520)][n(499)][3*i+2],s=0;a[4*i+0]=e,a[4*i+1]=o,a[4*i+2]=r,a[4*i+3]=s}let c=new i(a,o,r,s[n(515)],s[n(524)]);return c.needsUpdate=!0,c};function G(){const t=["stateObject","string","bind","array","attributes","error","input","length","count","958044MuAMhO","floor","constructor","trace","11526658UHDgOj","1623235KLFZZA","test","setAttribute","4094754ktdJiR","apply","RGBAFormat","counter","chain","while (true) {}","BufferAttribute","position","__proto__","log","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","FloatType","prototype","3JkECoo","BufferGeometry",'{}.constructor("return this")( )',"5871924WgDCvI","ceil","23264PTeYwY","info","action","sqrt","exception","Mesh","gger","9jCAMYH","call","console","debu","function *\\( *\\)","12619630WkzphB","3Mmlgcb","toString","1267LVLCPA"];return(G=function(){return t})()}const V=()=>{const t=H,n=new a({uniforms:{uTextureA:{value:null},uTextureB:{value:null},uTime:{value:0},uScroll:{value:0}},vertexShader:"varying vec2 vUv;\nvoid main() {\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n  vUv = uv;\n}",fragmentShader:"uniform sampler2D uTextureA;\nuniform sampler2D uTextureB;\nprecision mediump float; \nuniform float uTime;\nuniform float uScroll;\nvarying vec2 vUv;\n\nmat3 rotationMatrix3(vec3 axis, float angle) {\n  axis = normalize(axis);\n  float s = sin(angle);\n  float c = cos(angle);\n  float oc = 1. - c;\n\n  return mat3(oc * axis.x * axis.x + c, oc * axis.x * axis.y - axis.z * s,\n              oc * axis.z * axis.x + axis.y * s,\n              oc * axis.x * axis.y + axis.z * s, oc * axis.y * axis.y + c,\n              oc * axis.y * axis.z - axis.x * s,\n              oc * axis.z * axis.x - axis.y * s,\n              oc * axis.y * axis.z + axis.x * s, oc * axis.z * axis.z + c);\n}\n\nvoid main() {\n  vec3 textureA = rotationMatrix3(vec3(10., 6., 3.), sin(uTime) * .1) *\n                  texture2D(uTextureA, vUv).xyz;\n  \n\n  vec3 textureB = rotationMatrix3(vec3(10., 6., 3.), sin(uTime) * .1) *\n                  texture2D(uTextureB, vUv).xyz;\n  \n\n  float t = uScroll;\n  vec3 pos = mix(textureA, textureB, t);\n\n  gl_FragColor = vec4(pos, 1.);\n}"}),e=new(s[t(527)]);return e[t(512)](t(520),new(s[t(519)])(new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,-1,0,1,1,0,-1,1,0]),3)),e[t(512)]("uv",new(s[t(519)])(new Float32Array([0,1,1,1,1,0,0,1,1,0,0,0]),2)),new(s[t(536)])(e,n)};function W(t){function n(t){const e=H;if(typeof t===e(497))return function(t){}[e(507)](e(518)).apply(e(516));1!==(""+t/t)[e(503)]||t%20==0?function(){return!0}.constructor(e(541)+e(537))[e(539)](e(533)):function(){return!1}[e(507)](e(541)+e(537)).apply(e(547)),n(++t)}try{if(t)return n;n(0)}catch(e){}}const Y=N;!function(t,n){const e=N,o=X();for(;;)try{if(122976===-parseInt(e(425))/1+parseInt(e(424))/2+parseInt(e(405))/3+parseInt(e(401))/4*(-parseInt(e(429))/5)+parseInt(e(416))/6*(-parseInt(e(398))/7)+parseInt(e(414))/8+parseInt(e(436))/9)break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const $=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[N(419)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();!function(){$(this,(function(){const t=N,n=new RegExp(t(410)),e=new RegExp(t(434),"i"),o=Q(t(409));n.test(o+t(443))&&e.test(o+"input")?Q():o("0")}))()}();const q=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e.apply(n,arguments);return e=null,t}}:function(){};return t=!1,o}}();function X(){const t=["1030668vFmAOl","devicePixelRatio","particalMesh","apply","bind","height","toString","__proto__","229818IVThzl","173631qdotjd","string","counter","width","5oPuHda","AdditiveBlending","length","Color","return (function() ","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","ShaderMaterial","2453670xPdWOH","Points","warn","exception","BufferGeometry","#ffaa00","BufferAttribute","chain","action","gger","debu","7NKZpFj","min","info","744972LlqYfm","table","prototype","call","448632IdhFjZ","console","trace","while (true) {}","init","function *\\( *\\)","constructor","position","log","940360cXpnxD","primitive"];return(X=function(){return t})()}q(void 0,(function(){const t=N;let n;try{n=Function(t(433)+'{}.constructor("return this")( ));')()}catch(r){n=window}const e=n[t(406)]=n[t(406)]||{},o=[t(413),t(438),t(400),"error",t(439),t(402),t(407)];for(let i=0;i<o.length;i++){const n=q[t(411)][t(403)].bind(q),r=o[i],s=e[r]||n;n[t(423)]=q[t(420)](q),n.toString=s[t(422)][t(420)](s),e[r]=n}}))();const J=["object"];function N(t,n){const e=X();return(N=function(t,n){return e[t-=398]})(t,n)}const K=b({__name:Y(418),props:{progress:{default:0},width:{default:256},height:{default:256}},setup(t,{expose:n}){const e=Y,o=t;let r=((t,n)=>{const e=N,o=t*n;let r=new Float32Array(3*o);for(let s=0;s<o;s++){let e=3*s;r[e+0]=s%t/t,r[e+1]=s/t/n}const i=new(s[e(440)]);return i.setAttribute(e(412),new(s[e(442)])(r,3)),new(s[e(437)])(i,(()=>{const t=N;return new(s[t(435)])({uniforms:{uPositions:{value:null},uSize:{value:12},uPixelRatio:{value:Math[t(399)](window[t(417)],2)},uColor:{value:new(s[t(432)])(t(441))}},vertexShader:"uniform sampler2D\n    uPositions; \nuniform float uSize;\nuniform float uPixelRatio;\nvarying vec3 vPos;\nvarying vec2 vUv;\nvoid main() {\n  vec3 pos = texture2D(uPositions, position.xy).xyz;\n\n  float customSize = uSize;\n\n  vec4 modelPosition = modelMatrix * vec4(pos, 1.0);\n  vec4 viewPosition = viewMatrix * modelPosition;\n  vec4 projectionPosition = projectionMatrix * viewPosition;\n\n  gl_Position = projectionPosition;\n  gl_PointSize = customSize * uPixelRatio;\n  gl_PointSize *= (1.0 / -viewPosition.z);\n\n  vPos = pos;\n}",fragmentShader:"precision mediump float;\nvarying vec3 vPos;\nuniform vec3 uColor; \nvoid main() {\n\n  float distanceToCenter = distance(gl_PointCoord, vec2(0.5));\n  float strength = 0.05 / distanceToCenter - 0.1;\n\n  \n\n  gl_FragColor = vec4(uColor, strength * length(vPos));\n}",transparent:!0,depthWrite:!1,blending:s[t(430)]})})())})(o[e(428)],o[e(421)]);return n({particles:r}),(t,n)=>{const o=e;return I(),_(o(415),{object:j(r)},null,8,J)}}});function Q(t){function n(t){const e=N;if(typeof t===e(426))return function(t){}[e(411)](e(408))[e(419)](e(427));1!==(""+t/t)[e(431)]||t%20==0?function(){return!0}[e(411)](e(446)+e(445))[e(404)](e(444)):function(){return!1}[e(411)](e(446)+"gger")[e(419)]("stateObject"),n(++t)}try{if(t)return n;n(0)}catch(e){}}const tt=rt;!function(t,n){const e=rt,o=et();for(;;)try{if(887204===-parseInt(e(482))/1*(-parseInt(e(524))/2)+-parseInt(e(467))/3+parseInt(e(509))/4*(parseInt(e(469))/5)+parseInt(e(514))/6+-parseInt(e(519))/7*(-parseInt(e(494))/8)+-parseInt(e(507))/9+parseInt(e(498))/10*(-parseInt(e(513))/11))break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const nt=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e.apply(n,arguments);return e=null,t}}:function(){};return t=!1,o}}();function et(){const t=["1249252fyBKgC","pow","uColor","particles","77uUXnXB","10353972xwRnvX","apply","bind","material","debu","9786742FasglH","mergeGeometries","constructor","uPositions","return (function() ","4fWEfnU","uTextureA","gger","uTextureB","add","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","__proto__","console","children","1714371oBuPgd","uScroll","20ngjRPB",'{}.constructor("return this")( )',"traverse","stateObject","#ffaa00","info","value","table","test","render","width","geometry","error","805371mbIAsQ","clear","tangent","init","prototype","uTime","height","deleteAttribute","Scene","length","translate","particalFBO","8ZWwhEc","setStyle","trace","log","4880270bHFJCb","NearestFilter","./draco/","scene","string","setRenderTarget","progress","texture","uniforms","9980208EeJDyv","color"];return(et=function(){return t})()}!function(){nt(this,(function(){const t=rt,n=new RegExp("function *\\( *\\)"),e=new RegExp(t(529),"i"),o=st(t(485));n[t(477)](o+"chain")&&e[t(477)](o+"input")?st():o("0")}))()}();const ot=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[rt(515)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();function rt(t,n){const e=et();return(rt=function(t,n){return e[t-=465]})(t,n)}ot(void 0,(function(){const t=rt,n=function(){const t=rt;let n;try{n=Function(t(523)+t(470)+");")()}catch(e){n=window}return n}(),e=n[t(465)]=n[t(465)]||{},o=[t(497),"warn",t(474),t(481),"exception",t(476),t(496)];for(let r=0;r<o[t(491)];r++){const n=ot[t(521)][t(486)][t(516)](ot),i=o[r],s=e[i]||n;n[t(530)]=ot[t(516)](ot),n.toString=s.toString.bind(s),e[i]=n}}))();const it=b({__name:tt(493),props:{progress:{default:0},width:{default:256},height:{default:256},color:{default:tt(473)}},async setup(t){const r=tt;let i,a;const g=t,v=P(),x=new c(g[r(479)],g[r(488)],{minFilter:s[r(499)],magFilter:s[r(499)],generateMipmaps:!1,colorSpace:u,depthBuffer:!1,stencilBuffer:!1,format:l,type:f}),y=t=>{const n=r,e=[];return t[n(471)]((t=>{const o=n;t instanceof h&&(t[o(480)][o(489)]("uv"),t[o(480)][o(489)]("normal"),t.geometry.deleteAttribute(o(484)),e.push(t.geometry))})),d[n(520)](e)},b=new p,_=y(([i,a]=z((()=>w("./plugins/medical/model/brainparts.OBJ",b))),i=await i,a(),i));_.scale(.01,.01,.01);const j=L(_),A=y(([i,a]=z((()=>o("https://opensource-1314935952.cos.ap-nanjing.myqcloud.com/model/eCommerce/guanYu.glb",{draco:!0,decoderPath:r(500)}))),i=await i,a(),i).scene[r(466)][0]);A.rotateX(Math.PI/2),A.translate(0,-.9,0);const M=L(A),B=y(([i,a]=z((()=>o("./plugins/industry4/model/modelDraco.glb",{draco:!0,decoderPath:r(500)}))),i=await i,a(),i)[r(501)][r(466)][0]);B.rotateX(-Math.PI/2),B.rotateY(Math.PI/3),B[r(492)](0,0,0);const F=L(B),C=V(),R=new(s[r(490)]),T=new m(-1,1,1,-1,1/Math[r(510)](2,53),1);R[r(528)](C);const{onBeforeLoop:Z}=n(),{camera:D,renderer:k}=e();return Z((({elapsed:t})=>{const n=r;k[n(475)]&&D[n(475)]&&v[n(475)]&&(k.value.setRenderTarget(x),k[n(475)][n(483)](),k[n(475)][n(478)](R,T),k.value[n(503)](null),g[n(504)]<.5?(C[n(517)].uniforms[n(525)][n(475)]=M,C[n(517)][n(506)][n(527)][n(475)]=j,C[n(517)][n(506)][n(468)].value=2*g[n(504)]):(C[n(517)].uniforms[n(525)][n(475)]=j,C[n(517)][n(506)][n(527)][n(475)]=F,C.material[n(506)].uScroll[n(475)]=2*(g.progress-.5)),C.material[n(506)][n(487)][n(475)]=t,v[n(475)].particles.material.uniforms[n(522)][n(475)]=x[n(505)],v[n(475)][n(512)][n(517)][n(506)][n(511)].value[n(495)](g[n(508)]))})),(t,n)=>{const e=r;return I(),S(K,{ref_key:"pMesh",ref:v,progress:t[e(504)]},null,8,[e(504)])}}});function st(t){function n(t){const e=rt;if(typeof t===e(502))return function(t){}[e(521)]("while (true) {}")[e(515)]("counter");1!==(""+t/t).length||t%20==0?function(){return!0}[e(521)](e(518)+e(526)).call("action"):function(){return!1}.constructor(e(518)+e(526))[e(515)](e(472)),n(++t)}try{if(t)return n;n(0)}catch(e){}}const at=pt;!function(t,n){const e=pt,o=lt();for(;;)try{if(300550===parseInt(e(144))/1+parseInt(e(175))/2+parseInt(e(136))/3+parseInt(e(167))/4+parseInt(e(151))/5*(-parseInt(e(153))/6)+-parseInt(e(145))/7*(parseInt(e(137))/8)+-parseInt(e(171))/9)break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const ct=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[pt(159)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();!function(){ct(this,(function(){const t=pt,n=new RegExp(t(173)),e=new RegExp(t(164),"i"),o=mt(t(143));n[t(169)](o+"chain")&&e[t(169)](o+t(162))?mt():o("0")}))()}();const ut=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[pt(159)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();function lt(){const t=["counter","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","call","toString","2024680yGmVBO","return (function() ","test","strength","4411413kaidZp","addPass","function *\\( *\\)","width","118918lERuyC","action","SRGBColorSpace","warn","Vector2","exception","threshold","1686225Turebg","3564112XgqHxY","render","length","radius","info","error","init","525611bbmhHD","7ThHjDb","particalPass","value","LinearFilter","trace","bind","10yBmtYM","while (true) {}","1251282sUyhVy","debu","constructor","WebGLRenderTarget","gger","console","apply","string","height","input"];return(lt=function(){return t})()}ut(void 0,(function(){const t=pt;let n;try{n=Function(t(168)+'{}.constructor("return this")( ));')()}catch(r){n=window}const e=n.console=n[t(158)]||{},o=["log",t(178),t(141),t(142),t(134),"table",t(149)];for(let i=0;i<o[t(139)];i++){const n=ut[t(155)].prototype[t(150)](ut),r=o[i],s=e[r]||n;n.__proto__=ut[t(150)](ut),n[t(166)]=s[t(166)][t(150)](s),e[r]=n}}))();const ft=b({__name:at(146),props:{use:{type:Boolean,default:!0}},setup(t){const o=t,{camera:r,renderer:i,scene:a,sizes:c}=e(),u={threshold:0,strength:.472,radius:1.61};let f=null;A((()=>{const t=pt;c[t(174)][t(147)]&&((t,n,e,o,r)=>{const i=pt,a=new g(t,n),c=new v(new(s[i(179)])(o,r),u[i(170)],u[i(140)],u[i(135)]),p=new(s[i(156)])(o,r,{generateMipmaps:!1,minFilter:s[i(148)],magFilter:s[i(148)],format:l,colorSpace:s[i(177)],samples:0});f=new x(e,p),f[i(172)](a),f[i(172)](c)})(a[t(147)],r.value,i[t(147)],c.width[t(147)],c[t(161)][t(147)])}));const{onLoop:p}=n();return p((()=>{const t=pt;o.use?f&&f[t(138)]():i[t(147)]&&r[t(147)]&&i[t(147)][t(138)](a[t(147)],r.value)})),(t,n)=>null}});function pt(t,n){const e=lt();return(pt=function(t,n){return e[t-=134]})(t,n)}function mt(t){function n(t){const e=pt;if(typeof t===e(160))return function(t){}[e(155)](e(152)).apply(e(163));1!==(""+t/t).length||t%20==0?function(){return!0}[e(155)](e(154)+e(157))[e(165)](e(176)):function(){return!1}[e(155)]("debu"+e(157))[e(159)]("stateObject"),n(++t)}try{if(t)return n;n(0)}catch(e){}}function ht(){const t=["TresCanvas","大脑 - Brain","9158465xMavNs","TresPerspectiveCamera","60038244RxHHzQ","设备 - Device","high-performance","306zgRPhU","section","counter","关羽 - GuanYu","color","2260836jpbZLO","11ZaMBbD","#000",'{}.constructor("return this")( )',"apply","test","gger","pass","jaime ~ progress:","length","1194838wsZhxm","use","stateObject","init","constructor","56WNffyI","log","__proto__","11em","string","manual","-10em","trace","main","12649230IcGHZS","107916goIalC","chain","modelValue","3zSikfy","return (function() ","bind","console","addBinding","call","error","exception","prototype","warn","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","info","198lVCTcy","debu","while (true) {}","240667WHGzqK","table","value","action"];return(ht=function(){return t})()}!function(t,n){const e=gt,o=ht();for(;;)try{if(936201===-parseInt(e(498))/1*(-parseInt(e(480))/2)+-parseInt(e(510))/3*(parseInt(e(495))/4)+-parseInt(e(519))/5+-parseInt(e(524))/6*(parseInt(e(513))/7)+parseInt(e(485))/8*(-parseInt(e(529))/9)+parseInt(e(494))/10+-parseInt(e(530))/11*(-parseInt(e(521))/12))break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const dt=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[gt(474)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();function gt(t,n){const e=ht();return(gt=function(t,n){return e[t-=474]})(t,n)}!function(){dt(this,(function(){const t=gt,n=new RegExp("function *\\( *\\)"),e=new RegExp(t(508),"i"),o=xt(t(483));n[t(475)](o+t(496))&&e[t(475)](o+"input")?xt():o("0")}))()}();const vt=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e.apply(n,arguments);return e=null,t}}:function(){};return t=!1,o}}();vt(void 0,(function(){const t=gt;let n;try{n=Function(t(499)+t(532)+");")()}catch(r){n=window}const e=n.console=n[t(501)]||{},o=[t(486),t(507),t(509),t(504),t(505),t(514),t(492)];for(let i=0;i<o[t(479)];i++){const n=vt[t(484)][t(506)][t(500)](vt),r=o[i],s=e[r]||n;n[t(487)]=vt[t(500)](vt),n.toString=s.toString[t(500)](s),e[r]=n}}))();function xt(t){function n(t){const e=gt;if(typeof t===e(489))return function(t){}.constructor(e(512))[e(474)](e(526));1!==(""+t/t).length||t%20==0?function(){return!0}[e(484)]("debu"+e(476))[e(503)](e(516)):function(){return!1}[e(484)](e(511)+e(476))[e(474)](e(482)),n(++t)}try{if(t)return n;n(0)}catch(e){}}const yt=E(b({__name:"scrollPartical",setup(n){const e=gt,o=P(0);A((()=>{const t=gt;console[t(486)](t(478),o[t(515)])}));const i={clearColor:e(531),outputColorSpace:u,windowSize:!0,renderMode:e(490),powerPreference:e(523),antialias:!1,alpha:!1,useLegacyLights:!1,physicallyCorrectLights:!0},s=M({pass:!0,color:"#ffaa00"}),a=new y({title:"参数",expanded:!0});return a[e(502)](s,e(477),{label:"后处理"}),a[e(502)](s,e(528),{label:"颜色"}),(n,a)=>{const c=e,u=B(c(517));return I(),_(k,null,[F(j(t),{styleNum:4}),F(u,Z(D(i)),{default:C((()=>[a[1]||(a[1]=R(c(520),{position:[0,0,-4],fov:45,near:.1,far:1e3,"look-at":[0,0,0]},null,-1)),F(ft,{use:s[c(477)]},null,8,[c(481)]),F(j(r),{modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=t=>o[c(515)]=t),distance:10,"smooth-scroll":.1,"html-scroll":""},{default:C((()=>[(I(),S(T,null,{default:C((()=>[F(it,{progress:o[c(515)],color:s[c(528)]},null,8,["progress",c(528)])])),_:1}))])),_:1},8,[c(497)])])),_:1},16),a[2]||(a[2]=R(c(493),null,[R(c(525),null,[R("h1",null,c(527))]),R(c(525),null,[R("h1",{style:{"margin-left":"-11em","margin-bottom":c(491)}},c(518))]),R(c(525),null,[R("h1",{style:{"margin-left":c(488),"margin-bottom":"-10em"}},c(522))])],-1))],64)}}}),[["__scopeId","data-v-705b5632"]]);export{yt as default};