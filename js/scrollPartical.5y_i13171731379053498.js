import{b as t}from"./index.hyZat_d01731379053498.js";import{e as n,m as e,a as o,z as r}from"./@tresjs.bLKO3xyw1731379053498.js";import{bW as i,_ as s,bX as c,s as a,bY as u,bZ as l,b_ as f,n as p,b6 as m,b$ as h,ak as d}from"./three.bXjbKLxC1731379053498.js";import{P as g}from"./tweakpane.yHWGBmom1731379053498.js";import{l as v}from"./util.heyyB3lY1731379053498.js";import{d as x,o as w,D as y,u as b,b as _,a6 as I,f as j,a3 as P,r as S,e as z,j as A,g as M,J as B,al as R,aj as C,ak as T,F}from"./@vue.-THQH3GC1731379053498.js";import{_ as Z}from"./@fesjs.vI9WP6bH1731379053498.js";import"./index.wjB51FDk1731379053498.js";import"./chalk.w3XuUwyA1731379053498.js";/* empty css                                 */import"./iconify-icon.l-H2-fnN1731379053498.js";import"./@iconify.3mYF4lU71731379053498.js";import"./dompurify.rQUea5mq1731379053498.js";import"./vue-router.ZGnIDLu91731379053498.js";import"./lodash-es.kYt-_xTG1731379053498.js";import"./@qlin.yHhFDldE1731379053498.js";import"./pinia.ZMhAaG0S1731379053498.js";import"./vue-demi.C4xddsk91731379053498.js";import"./@floating-ui.BPbuo5Gx1731379053498.js";import"./@juggle.7yjBMqoW1731379053498.js";import"./@vueuse.DWZrQ1Sl1731379053498.js";import"./utils.1SU-xsBF1731379053498.js";import"./default.vue_vue_type_script_setup_true_lang.K6b4mIP51731379053498.js";import"./three-mesh-ui.module.CkUpvwEz1731379053498.js";!function(t,n){const e=q,o=D();for(;;)try{if(724788===-parseInt(e(245))/1+-parseInt(e(264))/2*(-parseInt(e(276))/3)+parseInt(e(280))/4*(-parseInt(e(274))/5)+parseInt(e(286))/6+-parseInt(e(248))/7*(parseInt(e(266))/8)+parseInt(e(263))/9*(parseInt(e(271))/10)+parseInt(e(247))/11)break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const E=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[q(259)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();!function(){E(this,(function(){const t=q,n=new RegExp("function *\\( *\\)"),e=new RegExp(t(269),"i"),o=O(t(258));n[t(275)](o+t(267))&&e.test(o+t(285))?O():o("0")}))()}();const G=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[q(259)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();function q(t,n){const e=D();return(q=function(t,n){return e[t-=239]})(t,n)}G(void 0,(function(){const t=q,n=function(){const t=q;let n;try{n=Function(t(251)+t(290)+");")()}catch(e){n=window}return n}(),e=n.console=n[t(268)]||{},o=[t(243),t(260),t(270),t(242),"exception",t(250),t(281)];for(let r=0;r<o.length;r++){const n=G[t(292)][t(261)][t(252)](G),i=o[r],s=e[i]||n;n[t(283)]=G[t(252)](G),n[t(244)]=s[t(244)][t(252)](s),e[i]=n}}))();const k=t=>{const n=q;let e=t[n(282)][n(288)][n(273)],o=Math[n(272)](Math[n(255)](e)),r=Math[n(272)](e/o),c=new Float32Array(o*r*4);!function(t){const e=n;for(let n=Math[e(241)](t[e(257)]/3)-1;n>0;n--){const o=Math[e(241)](Math.random()*(n+1));for(let e=0;e<3;e++){let r=t[3*n+e];t[3*n+e]=t[3*o+e],t[3*o+e]=r}}}(t[n(282)].position[n(256)]);for(let i=0;i<e;i++){const e=t.attributes[n(288)].array[3*i+0],o=t[n(282)].position[n(256)][3*i+1],r=t[n(282)][n(288)][n(256)][3*i+2],s=0;c[4*i+0]=e,c[4*i+1]=o,c[4*i+2]=r,c[4*i+3]=s}let a=new i(c,o,r,s[n(289)],s[n(239)]);return a[n(279)]=!0,a};function D(){const t=["RGBAFormat",'{}.constructor("return this")( )',"BufferAttribute","constructor","FloatType","while (true) {}","floor","error","log","toString","1213035GNlFTn","counter","6440676PVGtLD","623gMqAVf","gger","table","return (function() ","bind","BufferGeometry","ShaderMaterial","sqrt","array","length","init","apply","warn","prototype","stateObject","40806JEMRdE","5848Ypmdac","call","7448xKhOAK","chain","console","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","info","1610ZNErmZ","ceil","count","365045OtWFmD","test","267HDrURp","setAttribute","Mesh","needsUpdate","44rWcKxY","trace","attributes","__proto__","action","input","7488330moskis","debu","position"];return(D=function(){return t})()}const L=()=>{const t=q,n=new(s[q(254)])({uniforms:{uTextureA:{value:null},uTextureB:{value:null},uTime:{value:0},uScroll:{value:0}},vertexShader:"varying vec2 vUv;\nvoid main() {\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n  vUv = uv;\n}",fragmentShader:"uniform sampler2D uTextureA;\nuniform sampler2D uTextureB;\nprecision mediump float; \nuniform float uTime;\nuniform float uScroll;\nvarying vec2 vUv;\n\nmat3 rotationMatrix3(vec3 axis, float angle) {\n  axis = normalize(axis);\n  float s = sin(angle);\n  float c = cos(angle);\n  float oc = 1. - c;\n\n  return mat3(oc * axis.x * axis.x + c, oc * axis.x * axis.y - axis.z * s,\n              oc * axis.z * axis.x + axis.y * s,\n              oc * axis.x * axis.y + axis.z * s, oc * axis.y * axis.y + c,\n              oc * axis.y * axis.z - axis.x * s,\n              oc * axis.z * axis.x - axis.y * s,\n              oc * axis.y * axis.z + axis.x * s, oc * axis.z * axis.z + c);\n}\n\nvoid main() {\n  vec3 textureA = rotationMatrix3(vec3(10., 6., 3.), sin(uTime) * .1) *\n                  texture2D(uTextureA, vUv).xyz;\n  \n\n  vec3 textureB = rotationMatrix3(vec3(10., 6., 3.), sin(uTime) * .1) *\n                  texture2D(uTextureB, vUv).xyz;\n  \n\n  float t = uScroll;\n  vec3 pos = mix(textureA, textureB, t);\n\n  gl_FragColor = vec4(pos, 1.);\n}"}),e=new(s[t(253)]);return e[t(277)](t(288),new(s[t(291)])(new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,-1,0,1,1,0,-1,1,0]),3)),e.setAttribute("uv",new(s[t(291)])(new Float32Array([0,1,1,1,1,0,0,1,1,0,0,0]),2)),new(s[t(278)])(e,n)};function O(t){function n(t){const e=q;if("string"==typeof t)return function(t){}[e(292)](e(240))[e(259)](e(246));1!==(""+t/t)[e(257)]||t%20==0?function(){return!0}[e(292)](e(287)+e(249))[e(265)](e(284)):function(){return!1}.constructor(e(287)+e(249))[e(259)](e(262)),n(++t)}try{if(t)return n;n(0)}catch(e){}}const U=J;!function(t,n){const e=J,o=$();for(;;)try{if(175875===-parseInt(e(258))/1*(parseInt(e(233))/2)+parseInt(e(246))/3+parseInt(e(243))/4*(parseInt(e(251))/5)+-parseInt(e(232))/6*(parseInt(e(239))/7)+parseInt(e(241))/8+-parseInt(e(252))/9+parseInt(e(220))/10)break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const V=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[J(218)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();!function(){V(this,(function(){const t=J,n=new RegExp(t(240)),e=new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","i"),o=K("init");n.test(o+t(245))&&e.test(o+t(253))?K():o("0")}))()}();const Y=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[J(218)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();Y(void 0,(function(){const t=J,n=function(){const t=J;let n;try{n=Function("return (function() "+t(221)+");")()}catch(e){n=window}return n}(),e=n[t(242)]=n.console||{},o=[t(228),t(261),t(249),t(227),t(248),t(254),"trace"];for(let r=0;r<o.length;r++){const n=Y.constructor[t(229)][t(247)](Y),i=o[r],s=e[i]||n;n[t(257)]=Y[t(247)](Y),n.toString=s.toString[t(247)](s),e[i]=n}}))();const N=[U(219)];function $(){const t=["7uFqCfG","function *\\( *\\)","1250704tvMjRf","console","4684gpGISJ","primitive","chain","260028LiYYsn","bind","exception","info","length","885NvwPiH","2025648TqAjag","input","table","AdditiveBlending","devicePixelRatio","__proto__","14318xIejKm","debu","width","warn","apply","object","786430VHfeqK",'{}.constructor("return this")( )',"while (true) {}","BufferAttribute","string","ShaderMaterial","constructor","error","log","prototype","#ffaa00","Color","80598fJZmeN","16xNvqqc","call","Points","particalMesh","gger","BufferGeometry"];return($=function(){return t})()}const X=x({__name:U(236),props:{progress:{default:0},width:{default:256},height:{default:256}},setup(t,{expose:n}){const e=U,o=t;let r=((t,n)=>{const e=J,o=t*n;let r=new Float32Array(3*o);for(let s=0;s<o;s++){let e=3*s;r[e+0]=s%t/t,r[e+1]=s/t/n}const i=new(s[e(238)]);return i.setAttribute("position",new(s[e(223)])(r,3)),new(s[e(235)])(i,(()=>{const t=J;return new(s[t(225)])({uniforms:{uPositions:{value:null},uSize:{value:12},uPixelRatio:{value:Math.min(window[t(256)],2)},uColor:{value:new(s[t(231)])(t(230))}},vertexShader:"uniform sampler2D\n    uPositions; \nuniform float uSize;\nuniform float uPixelRatio;\nvarying vec3 vPos;\nvarying vec2 vUv;\nvoid main() {\n  vec3 pos = texture2D(uPositions, position.xy).xyz;\n\n  float customSize = uSize;\n\n  vec4 modelPosition = modelMatrix * vec4(pos, 1.0);\n  vec4 viewPosition = viewMatrix * modelPosition;\n  vec4 projectionPosition = projectionMatrix * viewPosition;\n\n  gl_Position = projectionPosition;\n  gl_PointSize = customSize * uPixelRatio;\n  gl_PointSize *= (1.0 / -viewPosition.z);\n\n  vPos = pos;\n}",fragmentShader:"precision mediump float;\nvarying vec3 vPos;\nuniform vec3 uColor; \nvoid main() {\n\n  float distanceToCenter = distance(gl_PointCoord, vec2(0.5));\n  float strength = 0.05 / distanceToCenter - 0.1;\n\n  \n\n  gl_FragColor = vec4(uColor, strength * length(vPos));\n}",transparent:!0,depthWrite:!1,blending:s[t(255)]})})())})(o[e(260)],o.height);return n({particles:r}),(t,n)=>{const o=e;return w(),y(o(244),{object:b(r)},null,8,N)}}});function J(t,n){const e=$();return(J=function(t,n){return e[t-=218]})(t,n)}function K(t){function n(t){const e=J;if(typeof t===e(224))return function(t){}[e(226)](e(222))[e(218)]("counter");1!==(""+t/t)[e(250)]||t%20==0?function(){return!0}[e(226)](e(259)+e(237))[e(234)]("action"):function(){return!1}[e(226)]("debu"+e(237))[e(218)]("stateObject"),n(++t)}try{if(t)return n;n(0)}catch(e){}}const W=tt;!function(t,n){const e=tt,o=ot();for(;;)try{if(585228===-parseInt(e(366))/1*(parseInt(e(349))/2)+-parseInt(e(358))/3*(-parseInt(e(377))/4)+-parseInt(e(327))/5*(-parseInt(e(329))/6)+-parseInt(e(346))/7*(-parseInt(e(359))/8)+parseInt(e(388))/9+parseInt(e(384))/10*(parseInt(e(393))/11)+-parseInt(e(332))/12*(parseInt(e(333))/13))break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const H=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[tt(351)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();!function(){H(this,(function(){const t=tt,n=new RegExp(t(389)),e=new RegExp(t(376),"i"),o=et(t(400));n.test(o+t(347))&&e[t(368)](o+"input")?et():o("0")}))()}();const Q=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[tt(351)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();function tt(t,n){const e=ot();return(tt=function(t,n){return e[t-=327]})(t,n)}Q(void 0,(function(){const t=tt,n=function(){let t;try{t=Function('return (function() {}.constructor("return this")( ));')()}catch(n){t=window}return t}(),e=n[t(339)]=n[t(339)]||{},o=[t(406),t(375),t(365),t(364),t(403),t(369),t(352)];for(let r=0;r<o.length;r++){const n=Q.constructor.prototype[t(402)](Q),i=o[r],s=e[i]||n;n.__proto__=Q[t(402)](Q),n[t(338)]=s.toString[t(402)](s),e[i]=n}}))();const nt=x({__name:W(361),props:{progress:{default:0},width:{default:256},height:{default:256},color:{default:W(382)}},async setup(t){const r=W;let i,l;const f=t,p=_(),m=new(s[r(399)])(f[r(391)],f[r(328)],{minFilter:s[r(343)],magFilter:s[r(343)],generateMipmaps:!1,colorSpace:s[r(405)],depthBuffer:!1,stencilBuffer:!1,format:s[r(350)],type:s[r(345)]}),h=t=>{const n=r,e=[];return t[n(330)]((t=>{const o=n;t instanceof a&&(t[o(360)][o(348)]("uv"),t[o(360)].deleteAttribute("normal"),t[o(360)][o(348)](o(392)),e[o(334)](t[o(360)]))})),u(e)},d=new c,g=h(([i,l]=I((()=>v("./plugins/medical/model/brainparts.OBJ",d))),i=await i,l(),i));g.scale(.01,.01,.01);const x=k(g),y=h(([i,l]=I((()=>o(r(335),{draco:!0,decoderPath:r(387)}))),i=await i,l(),i)[r(362)][r(380)][0]);y[r(372)](Math.PI/2),y[r(397)](0,-.9,0);const b=k(y),P=h(([i,l]=I((()=>o("./plugins/industry4/model/modelDraco.glb",{draco:!0,decoderPath:"./draco/"}))),i=await i,l(),i)[r(362)][r(380)][0]);P[r(372)](-Math.PI/2),P[r(374)](Math.PI/3),P[r(397)](0,0,0);const S=k(P),z=L(),A=new(s[r(356)]),M=new(s[r(385)])(-1,1,1,-1,1/Math[r(401)](2,53),1);A[r(398)](z);const{onBeforeLoop:B}=n(),{camera:R,renderer:C}=e();return B((({elapsed:t})=>{const n=r;C[n(357)]&&R.value&&p.value&&(C[n(357)].setRenderTarget(m),C[n(357)][n(394)](),C[n(357)][n(367)](A,M),C[n(357)][n(344)](null),f[n(337)]<.5?(z[n(336)].uniforms[n(373)].value=b,z[n(336)][n(390)].uTextureB[n(357)]=x,z.material[n(390)][n(370)][n(357)]=2*f[n(337)]):(z[n(336)].uniforms[n(373)][n(357)]=x,z[n(336)][n(390)][n(354)][n(357)]=S,z.material[n(390)].uScroll[n(357)]=2*(f[n(337)]-.5)),z[n(336)][n(390)][n(363)].value=t,p[n(357)][n(396)].material[n(390)].uPositions[n(357)]=m[n(331)],p[n(357)].particles[n(336)][n(390)][n(353)][n(357)][n(341)](f[n(404)]))})),(t,n)=>{const e=r;return w(),j(X,{ref_key:e(379),ref:p,progress:t[e(337)]},null,8,[e(337)])}}});function et(t){function n(t){const e=tt;if(typeof t===e(355))return function(t){}[e(381)](e(371))[e(351)](e(386));1!==(""+t/t)[e(342)]||t%20==0?function(){return!0}[e(381)](e(378)+e(395))[e(383)]("action"):function(){return!1}[e(381)]("debugger")[e(351)](e(340)),n(++t)}try{if(t)return n;n(0)}catch(e){}}function ot(){const t=["6PZzgjB","6301280RoKcxC","geometry","particalFBO","scene","uTime","error","info","21277iOGPVq","render","test","table","uScroll","while (true) {}","rotateX","uTextureA","rotateY","warn","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","1533624UhJSAi","debu","pMesh","children","constructor","#ffaa00","call","230rPggdv","OrthographicCamera","counter","./draco/","4289058sOCLlX","function *\\( *\\)","uniforms","width","tangent","277035uXqqCt","clear","gger","particles","translate","add","WebGLRenderTarget","init","pow","bind","exception","color","SRGBColorSpace","log","5641190pnSWck","height","6XzvRMc","traverse","texture","6204516XyxmVg","52yijrdp","push","https://opensource-1314935952.cos.ap-nanjing.myqcloud.com/model/eCommerce/guanYu.glb","material","progress","toString","console","stateObject","setStyle","length","NearestFilter","setRenderTarget","FloatType","7XpuXdw","chain","deleteAttribute","102vEYNVY","RGBAFormat","apply","trace","uColor","uTextureB","string","Scene","value"];return(ot=function(){return t})()}const rt=at;!function(t,n){const e=at,o=ct();for(;;)try{if(933162===parseInt(e(463))/1+-parseInt(e(424))/2+parseInt(e(445))/3+-parseInt(e(442))/4+parseInt(e(435))/5+parseInt(e(430))/6+-parseInt(e(465))/7)break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const it=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[at(453)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();!function(){it(this,(function(){const t=at,n=new RegExp(t(460)),e=new RegExp(t(426),"i"),o=lt(t(452));n[t(457)](o+t(451))&&e[t(457)](o+t(449))?lt():o("0")}))()}();const st=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[at(453)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();function ct(){const t=["init","apply","log","toString","threshold","test","debu","trace","function *\\( *\\)","WebGLRenderTarget","use","1465576agUwLi","gger","31173394ivRTcw","table","prototype","action","particalPass","617002VNhfud","stateObject","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)",'{}.constructor("return this")( )',"length","__proto__","10168482gZqsJe","error","radius","addPass","width","6270050bShvMt","Vector2","constructor","strength","LinearFilter","SRGBColorSpace","while (true) {}","11996BASmoC","render","console","3851013xYcjum","value","return (function() ","counter","input","bind","chain"];return(ct=function(){return t})()}function at(t,n){const e=ct();return(at=function(t,n){return e[t-=422]})(t,n)}st(void 0,(function(){const t=at,n=function(){const t=at;let n;try{n=Function(t(447)+t(427)+");")()}catch(e){n=window}return n}(),e=n[t(444)]=n[t(444)]||{},o=[t(454),"warn","info",t(431),"exception",t(466),t(459)];for(let r=0;r<o[t(428)];r++){const n=st.constructor[t(467)][t(450)](st),i=o[r],s=e[i]||n;n[t(429)]=st.bind(st),n[t(455)]=s[t(455)].bind(s),e[i]=n}}))();const ut=x({__name:rt(423),props:{use:{type:Boolean,default:!0}},setup(t){const o=t,{camera:r,renderer:i,scene:c,sizes:a}=e(),u={threshold:0,strength:.472,radius:1.61};let d=null;P((()=>{const t=at;a.width.value&&((t,n,e,o,r)=>{const i=at,c=new l(t,n),a=new f(new(s[i(436)])(o,r),u[i(438)],u[i(432)],u[i(456)]),g=new(s[i(461)])(o,r,{generateMipmaps:!1,minFilter:s[i(439)],magFilter:p,format:m,colorSpace:s[i(440)],samples:0});d=new h(e,g),d[i(433)](c),d[i(433)](a)})(c.value,r[t(446)],i[t(446)],a[t(434)].value,a.height[t(446)])}));const{onLoop:g}=n();return g((()=>{const t=at;o[t(462)]?d&&d[t(443)]():i[t(446)]&&r[t(446)]&&i[t(446)][t(443)](c[t(446)],r[t(446)])})),(t,n)=>null}});function lt(t){function n(t){const e=at;if("string"==typeof t)return function(t){}[e(437)](e(441))[e(453)](e(448));1!==(""+t/t).length||t%20==0?function(){return!0}[e(437)](e(458)+e(464)).call(e(422)):function(){return!1}[e(437)](e(458)+e(464))[e(453)](e(425)),n(++t)}try{if(t)return n;n(0)}catch(e){}}function ft(){const t=["#ffaa00","toString","addBinding","console","trace","55773rZTHbw","1578909pmcXzU","__proto__","error","string","warn","chain","bind","-10em","295747gKfqBS","stateObject","3053065CPQojG","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","value","2389296vEmcwz","debu","1799908larobR","return (function() ","jaime ~ progress:","constructor","apply","gger","2392ZhYGZB","high-performance","section","length","manual","大脑 - Brain","main","-11em","4753158NyaumN","关羽 - GuanYu","test","color","11em","use","exception","action","prototype","progress","2CrEjhH","input","modelValue","call","TresPerspectiveCamera","TresCanvas","init","info","设备 - Device","pass"];return(ft=function(){return t})()}!function(t,n){const e=ht,o=ft();for(;;)try{if(480842===parseInt(e(136))/1+parseInt(e(167))/2*(parseInt(e(183))/3)+-parseInt(e(143))/4+-parseInt(e(138))/5+-parseInt(e(157))/6+-parseInt(e(141))/7+-parseInt(e(149))/8*(-parseInt(e(182))/9))break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const pt=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[ht(147)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();!function(){pt(this,(function(){const t=ht,n=new RegExp("function *\\( *\\)"),e=new RegExp(t(139),"i"),o=dt(t(173));n.test(o+t(188))&&e[t(159)](o+t(168))?dt():o("0")}))()}();const mt=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[ht(147)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();function ht(t,n){const e=ft();return(ht=function(t,n){return e[t-=134]})(t,n)}mt(void 0,(function(){const t=ht;let n;try{n=Function(t(144)+'{}.constructor("return this")( ));')()}catch(r){n=window}const e=n[t(180)]=n.console||{},o=["log",t(187),t(174),t(185),t(163),"table",t(181)];for(let i=0;i<o[t(152)];i++){const n=mt[t(146)][t(165)].bind(mt),r=o[i],s=e[r]||n;n[t(184)]=mt.bind(mt),n.toString=s[t(178)][t(134)](s),e[r]=n}}))();function dt(t){function n(t){const e=ht;if(typeof t===e(186))return function(t){}[e(146)]("while (true) {}")[e(147)]("counter");1!==(""+t/t).length||t%20==0?function(){return!0}.constructor(e(142)+e(148))[e(170)](e(164)):function(){return!1}[e(146)](e(142)+e(148)).apply(e(137)),n(++t)}try{if(t)return n;n(0)}catch(e){}}const gt=Z(x({__name:"scrollPartical",setup(n){const e=ht,o=_(0);P((()=>{const t=ht;console.log(t(145),o[t(140)])}));const i={clearColor:"#000",outputColorSpace:d,windowSize:!0,renderMode:e(153),powerPreference:e(150),antialias:!1,alpha:!1,useLegacyLights:!1,physicallyCorrectLights:!0},s=S({pass:!0,color:e(177)}),c=new g({title:"参数",expanded:!0});return c[e(179)](s,e(176),{label:"后处理"}),c[e(179)](s,"color",{label:"颜色"}),(n,c)=>{const a=e,u=z(a(172));return w(),y(F,null,[A(b(t),{styleNum:4}),A(u,C(T(i)),{default:M((()=>[c[1]||(c[1]=B(a(171),{position:[0,0,-4],fov:45,near:.1,far:1e3,"look-at":[0,0,0]},null,-1)),A(ut,{use:s[a(176)]},null,8,[a(162)]),A(b(r),{modelValue:o[a(140)],"onUpdate:modelValue":c[0]||(c[0]=t=>o.value=t),distance:10,"smooth-scroll":.1,"html-scroll":""},{default:M((()=>[(w(),j(R,null,{default:M((()=>[A(nt,{progress:o[a(140)],color:s[a(160)]},null,8,[a(166),a(160)])])),_:1}))])),_:1},8,[a(169)])])),_:1},16),c[2]||(c[2]=B(a(155),null,[B(a(151),null,[B("h1",null,a(158))]),B("section",null,[B("h1",{style:{"margin-left":a(156),"margin-bottom":a(135)}},a(154))]),B(a(151),null,[B("h1",{style:{"margin-left":a(161),"margin-bottom":a(135)}},a(175))])],-1))],64)}}}),[["__scopeId","data-v-705b5632"]]);export{gt as default};