import{b as t,l as n}from"./pagesShow.vue_vue_type_script_setup_true_lang.iWusBP1G1725245456099.js";import{$ as o}from"./@tresjs.j5vdYITq1725245456099.js";import{C as e}from"./three-custom-shader-material.1acQuOMU1725245456099.js";import"./object-hash.ycpyO56T1725245456099.js";import{a6 as r,C as i,cb as u,k as c,b0 as s}from"./three.KG2-8r0_1725245456099.js";import"./@amap.jyJWu-u51725245456099.js";import"./glsl-tokenizer.FsI169p21725245456099.js";import{d as a,a1 as l,w as f,o as p,D as d,u as m,a4 as v,r as g,f as h,g as y,j as w,m as C}from"./@vue.Q1VpS3901725245456099.js";import{P as _}from"./tweakpane.yHWGBmom1725245456099.js";import"./@vueuse.whMtq_7M1725245456099.js";import"./glsl-token-string.rmbt9Jq91725245456099.js";import"./glsl-token-functions.66NgBKOU1725245456099.js";import"./jszip.Bn2AE-kY1725245456099.js";const b=j;function x(){const t=["__proto__","children","clone","gger","renderOrder","uOpacity","24byscvk","228963Nvvctx","string","251804JcAnuh","24UpeCZA","table","27ytfrDg","console","Color","opacity","side","input","30RdxdZv","constructor","781627YeYtOH","MeshBasicMaterial","prototype","color","uTime","test","#ffff00","forEach","city","chain","#ffffff","warn","function *\\( *\\)","\n\t\tuniform mat4 modelMatrix;\n\t\tvarying vec4 vPosition;\n\t\tuniform vec3 uMax; \n\t\tuniform vec3 uMin; \n\t\tuniform float uOpacity;  \n\t\tuniform float uBorderWidth; \n\t\tuniform vec3 uLightColor;\n\t\tuniform vec3 uColor;\n\t\tuniform float uCircleTime; \n\t\tuniform float uTime; \n\t\tuniform vec3 uTopColor;\t\t\t\t\t//顶部颜色\n\t\tuniform bool uGradient;\n\t\tvec4 uMax_world;\n\t\tvec4 uMin_world;\n\t\tvoid main() {\n\t\t\t// 转世界坐标\n\t\t\tuMax_world =  modelMatrix * vec4(uMax,1.0);\n\t\t\tuMin_world =  modelMatrix * vec4(uMin,1.0);\n\t\t\tvec3 distColor = uColor;\n\t\t\tfloat residue = uTime - floor(uTime / uCircleTime) * uCircleTime;\n\t\t\tfloat rate = residue / uCircleTime;\n\t\t\tfloat lightOffset = rate * (uMax_world.y - uMin_world.y);\n\n\t\t\tif (uMin_world.y + lightOffset < vPosition.y && uMin_world.y + lightOffset + uBorderWidth > vPosition.y) {\n\t\t\t\tcsm_DiffuseColor = vec4(uLightColor, uOpacity);\n\t\t\t} else {\n\t\t\t\tcsm_DiffuseColor = vec4(distColor, uOpacity);\n\t\t\t}\n\n\t\t\t//根据高度计算颜色\n\t\t\tif(uGradient){\n\t\t\t\tfloat rateHight = (vPosition.y - uMin_world.y) / (uMax_world.y - uMin_world.y); \n\t\t\t\tvec3 outColor = mix(csm_DiffuseColor.xyz, uTopColor, rateHight*2.0);\n\t\t\t\tcsm_DiffuseColor = vec4(outColor, uOpacity);\n\t\t\t}\n    }\n\t\t","bind","dispose","gradient","apply","9tvcbqL","5868132CwXAvh","object","bulidingsColor","land","bModel","value","boundingBox","\n\t\tvarying vec4 vPosition;\n\t\tvoid main() {\n\t\t\tvPosition = modelMatrix * vec4(position,1.0);\n\t\t\tcsm_Position = position * vec3(1.0);\n\t\t}\n\t\t","645896dDnOmX","error","toString","info","while (true) {}","length","model","trace","counter",'{}.constructor("return this")( )',"DoubleSide","landColor","#112233","126870uXWphs","uniforms","setStyle","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","primitive","material","11358UkynLJ","return (function() ","computeBoundingSphere","computeBoundingBox"];return(x=function(){return t})()}!function(t,n){const o=j,e=x();for(;;)try{if(128625===-parseInt(o(395))/1*(-parseInt(o(379))/2)+parseInt(o(390))/3+-parseInt(o(393))/4*(parseInt(o(373))/5)+-parseInt(o(389))/6*(parseInt(o(392))/7)+-parseInt(o(360))/8*(parseInt(o(351))/9)+parseInt(o(331))/10*(-parseInt(o(333))/11)+parseInt(o(352))/12)break;e.push(e.shift())}catch(r){e.push(e.shift())}}();const I=function(){let t=!0;return function(n,o){const e=t?function(){if(o){const t=o.apply(n,arguments);return o=null,t}}:function(){};return t=!1,e}}();!function(){I(this,(function(){const t=j,n=new RegExp(t(345)),o=new RegExp(t(376),"i"),e=O("init");n.test(e+t(342))&&o[t(338)](e+t(400))?O():e("0")}))()}();const M=function(){let t=!0;return function(n,o){const e=t?function(){if(o){const t=o.apply(n,arguments);return o=null,t}}:function(){};return t=!1,e}}();function j(t,n){const o=x();return(j=function(t,n){return o[t-=331]})(t,n)}M(void 0,(function(){const t=j;let n;try{n=Function(t(380)+t(369)+");")()}catch(r){n=window}const o=n[t(396)]=n[t(396)]||{},e=["log",t(344),t(363),t(361),"exception",t(394),t(367)];for(let i=0;i<e.length;i++){const n=M[t(332)][t(335)][t(347)](M),r=e[i],u=o[r]||n;n[t(383)]=M.bind(M),n[t(362)]=u[t(362)].bind(u),o[r]=n}}))();const S=[b(353)],T=a({__name:b(356),props:{model:{},bulidingsColor:{default:"#e523ff"},landColor:{default:b(372)},topColor:{default:"#ffff00"},opacity:{default:.9},gradient:{type:Boolean,default:!0}},setup(t){const n=b,u=t,c=u.model[n(341)];u[n(366)][n(366)][n(384)][0][n(378)]=new(r[n(334)])({color:n(339)}),c[n(387)]=1001;const s=u[n(366)][n(355)];(()=>{const t=n,{geometry:o}=c;o[t(382)](),o[t(381)]();const{max:s,min:a}=o[t(358)];if(c.material.__csm)return;const l=new e({baseMaterial:c[t(378)],vertexShader:t(359),fragmentShader:t(346),silent:!0,uniforms:{uMax:{value:s},uMin:{value:a},uBorderWidth:{value:5},uCircleTime:{value:5},uColor:{value:new i(u[t(354)])},uOpacity:{value:u.opacity},uLightColor:{value:new(r[t(397)])(t(343))},uTopColor:{value:new(r[t(397)])(u.topColor)},uTime:{value:0},uGradient:{value:u[t(349)]}},depthWrite:!0,depthTest:!0,transparent:!0,side:r[t(370)]});c[t(378)][t(348)](),c[t(378)]=l})();const{onLoop:a}=o();a((({delta:t})=>{const o=n;c[o(378)][o(374)][o(337)][o(357)]+=t})),l((()=>{const t=n;u[t(354)]&&c[t(378)].uniforms.uColor[t(357)][t(375)](u[t(354)]),u[t(371)]&&((t,o)=>{const e=n;let i;"cu"===t||"land"===t&&(i=Array.isArray(s[e(378)])?s[e(378)]:[s[e(378)]],i[e(340)]((t=>{const n=e;t[o][n(375)](u[n(371)]),t[n(399)]=r[n(370)]})))})(t(355),t(336)),u[t(398)]&&(c[t(378)][t(374)][t(388)][t(357)]=u.opacity)})),f(u,((t,o)=>{const e=n;c[e(378)][e(374)].uGradient[e(357)]=t[e(349)]}));const v=u.model[n(366)][n(385)]();return(t,o)=>{const e=n;return p(),d(e(377),{object:m(v)},null,8,S)}}});function O(t){function n(t){const o=j;if(typeof t===o(391))return function(t){}[o(332)](o(364))[o(350)](o(368));1!==(""+t/t)[o(365)]||t%20==0?function(){return!0}[o(332)]("debu"+o(386)).call("action"):function(){return!1}[o(332)]("debugger")[o(350)]("stateObject"),n(++t)}try{if(t)return n;n(0)}catch(o){}}const P=A;function A(t,n){const o=L();return(A=function(t,n){return o[t-=465]})(t,n)}!function(t,n){const o=A,e=L();for(;;)try{if(452131===parseInt(o(465))/1*(-parseInt(o(501))/2)+-parseInt(o(496))/3+-parseInt(o(504))/4+-parseInt(o(493))/5+-parseInt(o(523))/6*(-parseInt(o(498))/7)+parseInt(o(467))/8+parseInt(o(475))/9)break;e.push(e.shift())}catch(r){e.push(e.shift())}}();const F=function(){let t=!0;return function(n,o){const e=t?function(){if(o){const t=o[A(518)](n,arguments);return o=null,t}}:function(){};return t=!1,e}}();!function(){F(this,(function(){const t=A,n=new RegExp(t(466)),o=new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","i"),e=R(t(480));n[t(508)](e+"chain")&&o[t(508)](e+t(516))?R():e("0")}))()}();const B=function(){let t=!0;return function(n,o){const e=t?function(){if(o){const t=o[A(518)](n,arguments);return o=null,t}}:function(){};return t=!1,e}}();function L(){const t=["width","#FFF",'{}.constructor("return this")( )',"3524070GXfmrB","uSrcColor","color","2306121xTAeca","bLine","7uVGoev","toString","while (true) {}","241838xaEuzF","srcColor","trace","1885744cTocUO","uniforms","uColor","uGradual","test","__proto__","uScale","speed","geometry","scale","stateObject","prototype","input","string","apply","value","constructor","primitive","object","4930314LoKDOz","5hlVPVo","function *\\( *\\)","5948304FaITCj","length","log","gradual","gger","clone","renderOrder","table","12927834jIoQcB","error","linewidth","debu","bind","init","return (function() ","applyMatrix4","material","warn","action","builds","uTime","matrix","console"];return(L=function(){return t})()}B(void 0,(function(){const t=A,n=function(){const t=A;let n;try{n=Function(t(481)+t(492)+");")()}catch(o){n=window}return n}(),o=n.console=n[t(489)]||{},e=[t(469),t(484),"info",t(476),"exception",t(474),t(503)];for(let r=0;r<e.length;r++){const n=B.constructor[t(515)][t(479)](B),i=e[r],u=o[i]||n;n[t(509)]=B[t(479)](B),n[t(499)]=u[t(499)][t(479)](u),o[i]=n}}))();const k=[P(522)],z=a({__name:P(497),props:{builds:{},color:{default:P(491)},srcColor:{default:"#000"},scale:{default:2e3},gradual:{default:10},speed:{default:.5}},setup(t){const n=P,e=t;let r=null;const a={transparent:!0,uniforms:{uColor:{value:new i(e[n(495)])},uSrcColor:{value:new i(e[n(502)])},uScale:{value:e.scale},uTime:{value:0},uGradual:{value:e[n(470)]}},vertexShader:"varying vec3 vPosition;\nvoid main(){\n\tvPosition=position;\n\tvec4 viewPosition=modelViewMatrix*vec4(position,1.);\n\tgl_Position=projectionMatrix*viewPosition;\n}",fragmentShader:"uniform float uScale;//最大扩散\nuniform float uGradual;//建变系数\nuniform float uTime;\nuniform vec3 uColor;//扩散颜色\nuniform vec3 uSrcColor;//原始颜色\nvarying vec3 vPosition;\n\nvoid main(){\n\tfloat dis=distance(vPosition.xz,vec2(.0,.0));\n\tif(dis>uScale){\n\t\tdiscard;\n\t}\n\tfloat opacity=smoothstep(uScale/uGradual*uTime,uScale*uTime,dis);\n\topacity*=step(dis,uScale*uTime);\n\t\n\tif(opacity<.3){\n\t\tgl_FragColor=vec4(uSrcColor,1.-opacity);\n\t}else{\n\t\tgl_FragColor=vec4(uColor,opacity);\n\t}\n\t// gl_FragColor=vec4(uColor,opacity);\n}\n"};let f=new u(e[n(486)][n(512)])[n(472)]();f=f[n(482)](e[n(486)][n(488)]);const v=new c(a);r=new s(f,v),r[n(483)][n(477)]=e[n(490)],r[n(473)]=1e3,l((()=>{const t=n;e[t(495)]&&(a.uniforms[t(506)][t(519)]=new i(e[t(495)])),e[t(502)]&&(a[t(505)][t(494)][t(519)]=new i(e.srcColor)),e[t(513)]&&(a[t(505)][t(510)].value=e[t(513)]),e[t(470)]&&(a[t(505)][t(507)][t(519)]=e[t(470)])}));const{onLoop:g}=o();return g((({delta:t})=>{const o=n;a[o(505)][o(487)][o(519)]+=t*e[o(511)],a.uniforms.uTime[o(519)]%=1})),(t,o)=>{const e=n;return p(),d(e(521),{object:m(r)},null,8,k)}}});function R(t){function n(t){const o=A;if(typeof t===o(517))return function(t){}.constructor(o(500))[o(518)]("counter");1!==(""+t/t)[o(468)]||t%20==0?function(){return!0}[o(520)](o(478)+o(471)).call(o(485)):function(){return!1}[o(520)](o(478)+o(471))[o(518)](o(514)),n(++t)}try{if(t)return n;n(0)}catch(o){}}!function(t,n){const o=W,e=D();for(;;)try{if(398698===-parseInt(o(321))/1+parseInt(o(317))/2*(parseInt(o(305))/3)+parseInt(o(283))/4+parseInt(o(316))/5*(parseInt(o(298))/6)+parseInt(o(289))/7*(parseInt(o(324))/8)+-parseInt(o(303))/9*(parseInt(o(288))/10)+-parseInt(o(306))/11*(-parseInt(o(310))/12))break;e.push(e.shift())}catch(r){e.push(e.shift())}}();const E=function(){let t=!0;return function(n,o){const e=t?function(){if(o){const t=o[W(313)](n,arguments);return o=null,t}}:function(){};return t=!1,e}}();!function(){E(this,(function(){const t=W,n=new RegExp("function *\\( *\\)"),o=new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","i"),e=$(t(327));n[t(296)](e+"chain")&&o[t(296)](e+t(300))?$():e("0")}))()}();const G=function(){let t=!0;return function(n,o){const e=t?function(){if(o){const t=o[W(313)](n,arguments);return o=null,t}}:function(){};return t=!1,e}}();function D(){const t=["774ugHUeg","bind","110829UAjPtI","28479FylQSy","table","error","constructor","2868hkWpoL","trace","return (function() ","apply","#999","toString","5pmRxRy","2BoLltN","__proto__","while (true) {}","prototype","382623UYdWqr","addBinding","stateObject","53808LqlkMc","#000","color","init","1179796LrWMjI","info","#112233","console","string","63730bXiiLw","294AMgpbg","最大扩散","speed","call","length","线原颜色","builds","test","debu","577464EYtgiF","log","input","counter","srcColor"];return(D=function(){return t})()}function W(t,n){const o=D();return(W=function(t,n){return o[t-=283]})(t,n)}G(void 0,(function(){const t=W;let n;try{n=Function(t(312)+'{}.constructor("return this")( ));')()}catch(r){n=window}const o=n[t(286)]=n[t(286)]||{},e=[t(299),"warn",t(284),t(308),"exception",t(307),t(311)];for(let i=0;i<e[t(293)];i++){const n=G[t(309)][t(320)][t(304)](G),r=e[i],u=o[r]||n;n[t(318)]=G[t(304)](G),n[t(315)]=u.toString[t(304)](u),o[r]=n}}))();const Z=a({__name:"buildingsEffectA",async setup(o){const e=W;let r,i;const u=([r,i]=v((()=>n())),r=await r,i(),r),c=g({color:"#FFF",srcColor:e(325),scale:2e3,gradual:6.6,speed:.3}),s=new _({title:"效果参数",expanded:!0});return s[e(322)](c,e(302),{label:e(294)}),s[e(322)](c,e(326),{label:"线扫颜色"}),s[e(322)](c,e(291),{label:"速度",min:.1,max:1,step:.1}),s[e(322)](c,"scale",{label:e(290),min:10,max:2e3,step:10}),s[e(322)](c,"gradual",{label:"扩散系数",min:1.1,max:10,step:.1}),(n,o)=>{const r=e;return p(),h(t,{showAxesHelper:!1,autoRotate:!1,showBuildings:!1},{ability:y((()=>[w(T,{model:m(u),bulidingsColor:"#000000",landColor:r(285),topColor:r(314)},null,8,["model"]),w(z,C({builds:m(u).city},c),null,16,[r(295)])])),_:1})}}});function $(t){function n(t){const o=W;if(typeof t===o(287))return function(t){}[o(309)](o(319))[o(313)](o(301));1!==(""+t/t)[o(293)]||t%20==0?function(){return!0}[o(309)](o(297)+"gger")[o(292)]("action"):function(){return!1}[o(309)](o(297)+"gger")[o(313)](o(323)),n(++t)}try{if(t)return n;n(0)}catch(o){}}export{Z as default};