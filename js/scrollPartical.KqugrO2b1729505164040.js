import{b as t}from"./index.oYvY2QaF1729505164040.js";import{U as n,p as e,q as o,a as r}from"./@tresjs.IsKybBdF1729505164040.js";import{_ as i,B as s,a,C as c,bb as u,ak as l,bV as f,q as p,s as d,bW as h,bX as m,bY as g,k as v,W as x,aW as w,bZ as y}from"./three.YREzp-_G1729505164040.js";import{P as b}from"./tweakpane.yHWGBmom1729505164040.js";import{l as _}from"./util.NIK2IB8i1729505164040.js";import{d as I,o as j,E as P,u as z,b as S,a4 as A,f as M,a3 as F,r as T,e as B,j as R,g as C,al as V,aj as E,ak as D,F as k,am as U,an as Z,L}from"./@vue.JNsx1iN61729505164040.js";import{_ as O}from"./@fesjs.ysb1R5mQ1729505164040.js";import"./index.Giwe0yTk1729505164040.js";import"./chalk.sAH7iSuz1729505164040.js";/* empty css                                 */import"./iconify-icon.l-H2-fnN1729505164040.js";import"./@iconify.eRzdeG3K1729505164040.js";import"./vue-router.xkfjO_BL1729505164040.js";import"./lodash-es.kYt-_xTG1729505164040.js";import"./@vueuse.9dhnH8nd1729505164040.js";import"./@qlin.yHhFDldE1729505164040.js";import"./pinia.LeDA9WVb1729505164040.js";import"./@floating-ui.BPbuo5Gx1729505164040.js";import"./@juggle.7yjBMqoW1729505164040.js";import"./utils.r8L0F7PV1729505164040.js";import"./default.vue_vue_type_script_setup_true_lang.ZaT5kxsq1729505164040.js";import"./three-mesh-ui.module.e6VhGzpt1729505164040.js";function q(){const t=["apply","RGBAFormat","counter","FloatType","init","chain","ceil","while (true) {}","788LVVYQS","warn","trace","Mesh","console","array","2817176apWYio","test","call","BufferAttribute","setAttribute","debu","542vrfTMG","log","table","43765fnlOLs","info","toString","ShaderMaterial","1103358ajDtPr","length","6211836QfVexg","attributes","string","exception","bind","stateObject",'{}.constructor("return this")( )',"DataTexture","9398670UXvErX","3756AOtanG","needsUpdate","sqrt","input","7569751VuuleP","error","gger","random","prototype","constructor","position"];return(q=function(){return t})()}!function(t,n){const e=$,o=q();for(;;)try{if(895978===parseInt(e(518))/1*(-parseInt(e(487))/2)+-parseInt(e(525))/3+parseInt(e(506))/4*(parseInt(e(521))/5)+-parseInt(e(486))/6+parseInt(e(491))/7+parseInt(e(512))/8+parseInt(e(527))/9)break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const X=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[$(498)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();!function(){X(this,(function(){const t=$,n=new RegExp("function *\\( *\\)"),e=new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","i"),o=Y(t(502));n[t(513)](o+t(503))&&e[t(513)](o+t(490))?Y():o("0")}))()}();const G=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[$(498)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();G(void 0,(function(){const t=$,n=function(){const t=$;let n;try{n=Function("return (function() "+t(484)+");")()}catch(e){n=window}return n}(),e=n[t(510)]=n[t(510)]||{},o=[t(519),t(507),t(522),t(492),t(481),t(520),t(508)];for(let r=0;r<o.length;r++){const n=G[t(496)][t(495)][t(482)](G),i=o[r],s=e[i]||n;n.__proto__=G[t(482)](G),n[t(523)]=s[t(523)].bind(s),e[i]=n}}))();const W=t=>{const n=$;let e=t[n(528)].position.count,o=Math.ceil(Math[n(489)](e)),r=Math[n(504)](e/o),s=new Float32Array(o*r*4);!function(t){const e=n;for(let n=Math.floor(t[e(526)]/3)-1;n>0;n--){const o=Math.floor(Math[e(494)]()*(n+1));for(let e=0;e<3;e++){let r=t[3*n+e];t[3*n+e]=t[3*o+e],t[3*o+e]=r}}}(t[n(528)][n(497)][n(511)]);for(let i=0;i<e;i++){const e=t[n(528)][n(497)][n(511)][3*i+0],o=t.attributes[n(497)][n(511)][3*i+1],r=t[n(528)].position.array[3*i+2],a=0;s[4*i+0]=e,s[4*i+1]=o,s[4*i+2]=r,s[4*i+3]=a}let a=new(i[n(485)])(s,o,r,i[n(499)],i[n(501)]);return a[n(488)]=!0,a};function $(t,n){const e=q();return($=function(t,n){return e[t-=481]})(t,n)}const J=()=>{const t=$,n=new(i[$(524)])({uniforms:{uTextureA:{value:null},uTextureB:{value:null},uTime:{value:0},uScroll:{value:0}},vertexShader:"varying vec2 vUv;\nvoid main() {\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n  vUv = uv;\n}",fragmentShader:"uniform sampler2D uTextureA;\nuniform sampler2D uTextureB;\nprecision mediump float; \nuniform float uTime;\nuniform float uScroll;\nvarying vec2 vUv;\n\nmat3 rotationMatrix3(vec3 axis, float angle) {\n  axis = normalize(axis);\n  float s = sin(angle);\n  float c = cos(angle);\n  float oc = 1. - c;\n\n  return mat3(oc * axis.x * axis.x + c, oc * axis.x * axis.y - axis.z * s,\n              oc * axis.z * axis.x + axis.y * s,\n              oc * axis.x * axis.y + axis.z * s, oc * axis.y * axis.y + c,\n              oc * axis.y * axis.z - axis.x * s,\n              oc * axis.z * axis.x - axis.y * s,\n              oc * axis.y * axis.z + axis.x * s, oc * axis.z * axis.z + c);\n}\n\nvoid main() {\n  vec3 textureA = rotationMatrix3(vec3(10., 6., 3.), sin(uTime) * .1) *\n                  texture2D(uTextureA, vUv).xyz;\n  \n\n  vec3 textureB = rotationMatrix3(vec3(10., 6., 3.), sin(uTime) * .1) *\n                  texture2D(uTextureB, vUv).xyz;\n  \n\n  float t = uScroll;\n  vec3 pos = mix(textureA, textureB, t);\n\n  gl_FragColor = vec4(pos, 1.);\n}"}),e=new s;return e[t(516)]("position",new(i[t(515)])(new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,-1,0,1,1,0,-1,1,0]),3)),e.setAttribute("uv",new(i[t(515)])(new Float32Array([0,1,1,1,1,0,0,1,1,0,0,0]),2)),new(i[t(509)])(e,n)};function Y(t){function n(t){const e=$;if(typeof t===e(529))return function(t){}[e(496)](e(505)).apply(e(500));1!==(""+t/t).length||t%20==0?function(){return!0}[e(496)](e(517)+e(493))[e(514)]("action"):function(){return!1}[e(496)](e(517)+e(493))[e(498)](e(483)),n(++t)}try{if(t)return n;n(0)}catch(e){}}const Q=H;!function(t,n){const e=H,o=N();for(;;)try{if(218353===parseInt(e(379))/1+parseInt(e(381))/2+-parseInt(e(364))/3+parseInt(e(382))/4+-parseInt(e(359))/5+-parseInt(e(371))/6+parseInt(e(380))/7)break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const K=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[H(360)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();function N(){const t=["exception","log","1636026DVhENz","__proto__","return (function() ","init","trace","action","test","debu","6730STzpBK","5447694MSZFri","574830JFNqcR","310988iLmUuh",'{}.constructor("return this")( )',"AdditiveBlending","toString","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","position","while (true) {}","particalMesh","min","BufferGeometry","console","string","constructor","gger","function *\\( *\\)","object","setAttribute","ShaderMaterial","primitive","width","1672590nXbTzd","apply","bind","chain","length","973776dmbygw","warn","prototype","Points","#ffaa00"];return(N=function(){return t})()}function H(t,n){const e=N();return(H=function(t,n){return e[t-=352]})(t,n)}!function(){K(this,(function(){const t=H,n=new RegExp(t(353)),e=new RegExp(t(386),"i"),o=ot(t(374));n[t(377)](o+t(362))&&e[t(377)](o+"input")?ot():o("0")}))()}();const tt=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e.apply(n,arguments);return e=null,t}}:function(){};return t=!1,o}}();tt(void 0,(function(){const t=H;let n;try{n=Function(t(373)+t(383)+");")()}catch(r){n=window}const e=n[t(392)]=n[t(392)]||{},o=[t(370),t(365),"info","error",t(369),"table",t(375)];for(let i=0;i<o[t(363)];i++){const n=tt.constructor[t(366)][t(361)](tt),r=o[i],s=e[r]||n;n[t(372)]=tt[t(361)](tt),n[t(385)]=s[t(385)][t(361)](s),e[r]=n}}))();const nt=[Q(354)],et=I({__name:Q(389),props:{progress:{default:0},width:{default:256},height:{default:256}},setup(t,{expose:n}){const e=Q,o=t;let r=((t,n)=>{const e=H,o=t*n;let r=new Float32Array(3*o);for(let i=0;i<o;i++){let e=3*i;r[e+0]=i%t/t,r[e+1]=i/t/n}const s=new(i[e(391)]);return s[e(355)](e(387),new a(r,3)),new(i[e(367)])(s,(()=>{const t=H;return new(i[t(356)])({uniforms:{uPositions:{value:null},uSize:{value:12},uPixelRatio:{value:Math[t(390)](window.devicePixelRatio,2)},uColor:{value:new c(t(368))}},vertexShader:"uniform sampler2D\n    uPositions; \nuniform float uSize;\nuniform float uPixelRatio;\nvarying vec3 vPos;\nvarying vec2 vUv;\nvoid main() {\n  vec3 pos = texture2D(uPositions, position.xy).xyz;\n\n  float customSize = uSize;\n\n  vec4 modelPosition = modelMatrix * vec4(pos, 1.0);\n  vec4 viewPosition = viewMatrix * modelPosition;\n  vec4 projectionPosition = projectionMatrix * viewPosition;\n\n  gl_Position = projectionPosition;\n  gl_PointSize = customSize * uPixelRatio;\n  gl_PointSize *= (1.0 / -viewPosition.z);\n\n  vPos = pos;\n}",fragmentShader:"precision mediump float;\nvarying vec3 vPos;\nuniform vec3 uColor; \nvoid main() {\n\n  float distanceToCenter = distance(gl_PointCoord, vec2(0.5));\n  float strength = 0.05 / distanceToCenter - 0.1;\n\n  \n\n  gl_FragColor = vec4(uColor, strength * length(vPos));\n}",transparent:!0,depthWrite:!1,blending:i[t(384)]})})())})(o[e(358)],o.height);return n({particles:r}),(t,n)=>{const o=e;return j(),P(o(357),{object:z(r)},null,8,nt)}}});function ot(t){function n(t){const e=H;if(typeof t===e(393))return function(t){}[e(394)](e(388)).apply("counter");1!==(""+t/t)[e(363)]||t%20==0?function(){return!0}[e(394)](e(378)+e(352)).call(e(376)):function(){return!1}.constructor("debu"+e(352)).apply("stateObject"),n(++t)}try{if(t)return n;n(0)}catch(e){}}const rt=ct;!function(t,n){const e=ct,o=at();for(;;)try{if(292399===-parseInt(e(401))/1*(-parseInt(e(376))/2)+parseInt(e(407))/3+parseInt(e(365))/4*(parseInt(e(344))/5)+-parseInt(e(399))/6+parseInt(e(384))/7*(parseInt(e(411))/8)+-parseInt(e(389))/9*(-parseInt(e(391))/10)+-parseInt(e(383))/11*(parseInt(e(388))/12))break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const it=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[ct(380)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();!function(){it(this,(function(){const t=ct,n=new RegExp(t(362)),e=new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","i"),o=lt(t(390));n[t(386)](o+t(394))&&e.test(o+"input")?lt():o("0")}))()}();const st=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[ct(380)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();function at(){const t=["./draco/","setRenderTarget","width","call","uniforms","setStyle","stateObject","exception","uTime","FloatType","texture","geometry","push","string","children","log","uTextureB","function *\\( *\\)","uTextureA","rotateX","140UuVIeJ","particalFBO","value","gger","material","render","color","WebGLRenderTarget","clear","length","deleteAttribute","238202jcgzng","#ffaa00","debu","__proto__","apply","uColor","counter","594FeIVej","630GuJsRJ","scene","test","translate","114648MPbrPI","1012437CjhXnZ","init","30obDPVE","constructor","tangent","chain","table","trace","bind","console","306576JqXAUo","OrthographicCamera","1VzrqfC","return (function() ","error","rotateY",'{}.constructor("return this")( )',"toString","95838NzzpCv","scale","RGBAFormat","progress","29144nomdqO","uScroll","height","particles","6145rRnEng"];return(at=function(){return t})()}function ct(t,n){const e=at();return(ct=function(t,n){return e[t-=341]})(t,n)}st(void 0,(function(){const t=ct,n=function(){const t=ct;let n;try{n=Function(t(402)+t(405)+");")()}catch(e){n=window}return n}(),e=n[t(398)]=n[t(398)]||{},o=[t(360),"warn","info",t(403),t(352),t(395),t(396)];for(let r=0;r<o[t(374)];r++){const n=st.constructor.prototype[t(397)](st),i=o[r],s=e[i]||n;n[t(379)]=st[t(397)](st),n.toString=s[t(406)][t(397)](s),e[i]=n}}))();const ut=I({__name:rt(366),props:{progress:{default:0},width:{default:256},height:{default:256},color:{default:rt(377)}},async setup(t){const r=rt;let s,a;const c=t,m=S(),g=new(i[r(372)])(c[r(347)],c[r(342)],{minFilter:u,magFilter:u,generateMipmaps:!1,colorSpace:l,depthBuffer:!1,stencilBuffer:!1,format:i[r(409)],type:i[r(354)]}),v=t=>{const n=[];return t.traverse((t=>{const e=ct;t instanceof d&&(t[e(356)][e(375)]("uv"),t[e(356)].deleteAttribute("normal"),t[e(356)].deleteAttribute(e(393)),n[e(357)](t[e(356)]))})),h(n)},x=new f,w=v(([s,a]=A((()=>_("./plugins/medical/model/brainparts.OBJ",x))),s=await s,a(),s));w[r(408)](.01,.01,.01);const y=W(w),b=v(([s,a]=A((()=>o("https://opensource-1314935952.cos.ap-nanjing.myqcloud.com/model/eCommerce/guanYu.glb",{draco:!0,decoderPath:"./draco/"}))),s=await s,a(),s).scene.children[0]);b.rotateX(Math.PI/2),b.translate(0,-.9,0);const I=W(b),P=v(([s,a]=A((()=>o("./plugins/industry4/model/modelDraco.glb",{draco:!0,decoderPath:r(345)}))),s=await s,a(),s)[r(385)][r(359)][0]);P[r(364)](-Math.PI/2),P[r(404)](Math.PI/3),P[r(387)](0,0,0);const z=W(P),F=J(),T=new p,B=new(i[r(400)])(-1,1,1,-1,1/Math.pow(2,53),1);T.add(F);const{onBeforeLoop:R}=n(),{camera:C,renderer:V}=e();return R((({elapsed:t})=>{const n=r;V[n(367)]&&C.value&&m[n(367)]&&(V[n(367)][n(346)](g),V[n(367)][n(373)](),V[n(367)][n(370)](T,B),V[n(367)][n(346)](null),c[n(410)]<.5?(F.material[n(349)][n(363)][n(367)]=I,F[n(369)].uniforms[n(361)][n(367)]=y,F[n(369)][n(349)][n(341)][n(367)]=2*c.progress):(F[n(369)][n(349)][n(363)][n(367)]=y,F[n(369)][n(349)][n(361)][n(367)]=z,F.material[n(349)][n(341)].value=2*(c[n(410)]-.5)),F[n(369)][n(349)][n(353)].value=t,m[n(367)][n(343)][n(369)][n(349)].uPositions[n(367)]=g[n(355)],m[n(367)][n(343)][n(369)][n(349)][n(381)][n(367)][n(350)](c[n(371)]))})),(t,n)=>{const e=r;return j(),M(et,{ref_key:"pMesh",ref:m,progress:t[e(410)]},null,8,[e(410)])}}});function lt(t){function n(t){const e=ct;if(typeof t===e(358))return function(t){}[e(392)]("while (true) {}")[e(380)](e(382));1!==(""+t/t).length||t%20==0?function(){return!0}.constructor(e(378)+e(368))[e(348)]("action"):function(){return!1}[e(392)](e(378)+e(368))[e(380)](e(351)),n(++t)}try{if(t)return n;n(0)}catch(e){}}const ft=gt;!function(t,n){const e=gt,o=ht();for(;;)try{if(753346===parseInt(e(232))/1*(parseInt(e(238))/2)+parseInt(e(220))/3*(parseInt(e(233))/4)+parseInt(e(243))/5*(-parseInt(e(206))/6)+-parseInt(e(228))/7+parseInt(e(239))/8+-parseInt(e(230))/9+-parseInt(e(225))/10)break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const pt=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[gt(216)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();!function(){pt(this,(function(){const t=gt,n=new RegExp(t(201)),e=new RegExp(t(240),"i"),o=vt(t(208));n[t(231)](o+t(207))&&e[t(231)](o+t(218))?vt():o("0")}))()}();const dt=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[gt(216)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();function ht(){const t=["LinearFilter","debu","prototype","612188aksciA","11875192Hkpnvj","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","use","stateObject","819080sHeDSE","strength","counter","__proto__","gger","function *\\( *\\)","info","length","height","error","12QJpkjV","chain","init","value","constructor",'{}.constructor("return this")( )',"toString","trace","warn","bind","apply","threshold","input","radius","9552SZtDBp","return (function() ","render","string","addPass","6244370nMKKox","console","particalPass","953743aQKprn","exception","4812165YuYeve","test","1uuaIpV","736WpmPVD","action"];return(ht=function(){return t})()}dt(void 0,(function(){const t=gt,n=function(){const t=gt;let n;try{n=Function(t(221)+t(211)+");")()}catch(e){n=window}return n}(),e=n.console=n[t(226)]||{},o=["log",t(214),t(202),t(205),t(229),"table",t(213)];for(let r=0;r<o[t(203)];r++){const n=dt[t(210)][t(237)][t(215)](dt),i=o[r],s=e[i]||n;n[t(246)]=dt[t(215)](dt),n[t(212)]=s.toString.bind(s),e[i]=n}}))();const mt=I({__name:ft(227),props:{use:{type:Boolean,default:!0}},setup(t){const o=t,{camera:r,renderer:s,scene:a,sizes:c}=e(),u={threshold:0,strength:.472,radius:1.61};let f=null;F((()=>{const t=gt;c.width.value&&((t,n,e,o,r)=>{const s=gt,a=new m(t,n),c=new g(new v(o,r),u[s(244)],u[s(219)],u[s(217)]),p=new x(o,r,{generateMipmaps:!1,minFilter:i[s(235)],magFilter:i[s(235)],format:w,colorSpace:l,samples:0});f=new y(e,p),f[s(224)](a),f.addPass(c)})(a.value,r[t(209)],s[t(209)],c.width[t(209)],c[t(204)].value)}));const{onLoop:p}=n();return p((()=>{const t=gt;o[t(241)]?f&&f.render():s[t(209)]&&r[t(209)]&&s[t(209)][t(222)](a.value,r[t(209)])})),(t,n)=>null}});function gt(t,n){const e=ht();return(gt=function(t,n){return e[t-=200]})(t,n)}function vt(t){function n(t){const e=gt;if(typeof t===e(223))return function(t){}.constructor("while (true) {}")[e(216)](e(245));1!==(""+t/t)[e(203)]||t%20==0?function(){return!0}[e(210)]("debu"+e(200)).call(e(234)):function(){return!1}[e(210)](e(236)+e(200))[e(216)](e(242)),n(++t)}try{if(t)return n;n(0)}catch(e){}}const xt=jt;!function(t,n){const e=jt,o=Pt();for(;;)try{if(643343===parseInt(e(241))/1+parseInt(e(207))/2+-parseInt(e(206))/3*(parseInt(e(198))/4)+parseInt(e(237))/5*(parseInt(e(195))/6)+parseInt(e(202))/7+parseInt(e(228))/8+parseInt(e(204))/9*(-parseInt(e(203))/10))break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const wt=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e.apply(n,arguments);return e=null,t}}:function(){};return t=!1,o}}();!function(){wt(this,(function(){const t=jt,n=new RegExp(t(229)),e=new RegExp(t(225),"i"),o=zt(t(230));n.test(o+t(192))&&e.test(o+"input")?zt():o("0")}))()}();const yt=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[jt(209)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();yt(void 0,(function(){const t=jt,n=function(){const t=jt;let n;try{n=Function(t(213)+t(210)+");")()}catch(e){n=window}return n}(),e=n.console=n.console||{},o=["log","warn",t(232),t(214),t(223),t(199),t(208)];for(let r=0;r<o[t(224)];r++){const n=yt[t(205)][t(196)][t(238)](yt),i=o[r],s=e[i]||n;n[t(215)]=yt[t(238)](yt),n[t(197)]=s[t(197)].bind(s),e[i]=n}}))();const bt=t=>(U("data-v-705b5632"),t=t(),Z(),t),_t=bt((()=>L(xt(219),{position:[0,0,-4],fov:45,near:.1,far:1e3,"look-at":[0,0,0]},null,-1))),It=bt((()=>L("main",null,[L(xt(193),null,[L("h1",null,xt(231))]),L(xt(193),null,[L("h1",{style:{"margin-left":xt(200),"margin-bottom":xt(236)}},xt(194))]),L(xt(193),null,[L("h1",{style:{"margin-left":xt(220),"margin-bottom":xt(236)}},xt(240))])],-1)));function jt(t,n){const e=Pt();return(jt=function(t,n){return e[t-=191]})(t,n)}function Pt(){const t=["exception","length","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","use","pass","10111000LtxXXo","function *\\( *\\)","init","关羽 - GuanYu","info","color","manual","call","-10em","21655eIWcML","bind","gger","设备 - Device","165740wQzwUt","addBinding","chain","section","大脑 - Brain","1590HxjNjV","prototype","toString","182036QXUPmw","table","-11em","jaime ~ progress:","8614011oKMoEX","8020vSOHGO","26865JFrWdq","constructor","57ypqPBD","188162JGzdPb","trace","apply",'{}.constructor("return this")( )',"value","#000","return (function() ","error","__proto__","modelValue","stateObject","high-performance","TresPerspectiveCamera","11em","TresCanvas","后处理"];return(Pt=function(){return t})()}function zt(t){function n(t){const e=jt;if("string"==typeof t)return function(t){}[e(205)]("while (true) {}")[e(209)]("counter");1!==(""+t/t).length||t%20==0?function(){return!0}[e(205)]("debu"+e(239))[e(235)]("action"):function(){return!1}[e(205)]("debu"+e(239))[e(209)](e(217)),n(++t)}try{if(t)return n;n(0)}catch(e){}}const St=O(I({__name:"scrollPartical",setup(n){const e=xt,o=S(0);F((()=>{const t=jt;console.log(t(201),o[t(211)])}));const i={clearColor:e(212),outputColorSpace:l,windowSize:!0,renderMode:e(234),powerPreference:e(218),antialias:!1,alpha:!1,useLegacyLights:!1,physicallyCorrectLights:!0},s=T({pass:!0,color:"#ffaa00"}),a=new b({title:"参数",expanded:!0});return a[e(191)](s,e(227),{label:e(222)}),a[e(191)](s,e(233),{label:"颜色"}),(n,a)=>{const c=e,u=B(c(221));return j(),P(k,null,[R(z(t),{styleNum:4}),R(u,E(D(i)),{default:C((()=>[_t,R(mt,{use:s[c(227)]},null,8,[c(226)]),R(z(r),{modelValue:o[c(211)],"onUpdate:modelValue":a[0]||(a[0]=t=>o[c(211)]=t),distance:10,"smooth-scroll":.1,"html-scroll":""},{default:C((()=>[(j(),M(V,null,{default:C((()=>[R(ut,{progress:o[c(211)],color:s.color},null,8,["progress",c(233)])])),_:1}))])),_:1},8,[c(216)])])),_:1},16),It],64)}}}),[["__scopeId","data-v-705b5632"]]);export{St as default};