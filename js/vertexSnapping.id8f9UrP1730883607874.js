import{aT as t,ab as n}from"./three.fIUcjaNz1730883607874.js";import{b as o,U as i,H as e}from"./@tresjs.C3WO4ZW41730883607874.js";import{c as r,d as s}from"./index.D3-O3Ya61730883607874.js";import{P as u}from"./tweakpane.BCjFYDHx1730883607874.js";import{d as c,a0 as a,w as p,o as l,D as f,a6 as m,u as d,r as h,f as g,g as v,J as b,j as I,al as S,m as j}from"./@vue.Cfu43fwq1730883607874.js";import"./@vueuse.BSum2YDk1730883607874.js";import"./@fesjs.DQmvwjPe1730883607874.js";import"./vue-router.BDLCs4Ld1730883607874.js";import"./lodash-es.BBTWvufR1730883607874.js";import"./@qlin.BIlp8Yi21730883607874.js";import"./pinia.DKpn0rzI1730883607874.js";import"./vue-demi.Dq6ymT-81730883607874.js";import"./@babel.BBWsvBIa1730883607874.js";import"./@floating-ui.B75jtkXD1730883607874.js";import"./@juggle.BnTvdTVm1730883607874.js";import"./chalk.B3MNILV41730883607874.js";/* empty css                                 */import"./iconify-icon.DK1S_nhj1730883607874.js";import"./@iconify.CkmZGMLx1730883607874.js";import"./dompurify.MwRjsY0L1730883607874.js";import"./oimophysics.B0i2NtyE1730883607874.js";import"./three-stdlib.oW8T3I_Q1730883607874.js";import"./@pmndrs.CQZPv3U_1730883607874.js";import"./object-hash.c-ODBdIv1730883607874.js";import"./@amap.CXRRqiLY1730883607874.js";import"./jszip.V4H7zZUl1730883607874.js";import"./three-custom-shader-material.DD5mBNmu1730883607874.js";import"./three.quarks.BwNiiDXj1730883607874.js";import"./quarks.core.C7CDonSm1730883607874.js";const y=x;function x(t,n){const o=w();return(x=function(t,n){return o[t-=358]})(t,n)}!function(t,n){const o=x,i=w();for(;;)try{if(170211===-parseInt(o(402))/1*(-parseInt(o(397))/2)+-parseInt(o(387))/3*(-parseInt(o(403))/4)+-parseInt(o(381))/5*(parseInt(o(366))/6)+parseInt(o(361))/7+-parseInt(o(384))/8+-parseInt(o(375))/9+parseInt(o(385))/10)break;i.push(i.shift())}catch(e){i.push(i.shift())}}();const _=function(){let t=!0;return function(n,o){const i=t?function(){if(o){const t=o[x(370)](n,arguments);return o=null,t}}:function(){};return t=!1,i}}();function w(){const t=["1896tdMnAA","info","call","toString","#include <project_vertex>","console","length","table","debu","init","288158eOTUbP","prototype","function *\\( *\\)","action","vertexShader","1TwdCII","332JvIhba","while (true) {}","trace","warn","value","com","351715aTxCvr","test","replace","string","stateObject","260502bhNLUu","input","constructor",'{}.constructor("return this")( )',"apply","gger","uniforms","bind","return (function() ","2450241MHkQrA","chain","error","__proto__","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","\n\t\t\tvec4 mvPosition = vec4( transformed, 1.0 );\n\n\t\t\t#ifdef USE_BATCHING\n\t\t\t\tmvPosition = batchingMatrix * mvPosition;\n\t\t\t#endif\n\n\t\t\t#ifdef USE_INSTANCING\n\t\t\t\tmvPosition = instanceMatrix * mvPosition;\n\t\t\t#endif\n\n\t\t\tmvPosition = modelMatrix * mvPosition;\n\n\t\t\tmvPosition = vec4(\n\t\t\t\tround(mvPosition.x * uSnappingResolution) / uSnappingResolution,\n\t\t\t\tround(mvPosition.y * uSnappingResolution) / uSnappingResolution,\n\t\t\t\tround(mvPosition.z * uSnappingResolution) / uSnappingResolution,\n\t\t\t\t1.0);\n\t\t\tmvPosition = viewMatrix * mvPosition;\n\t\t\tgl_Position = projectionMatrix * mvPosition;\n\t","20BtAYki","object","\n\t\t\t#include <common>\n\t\t\tuniform float uSnappingResolution;\n\t","2685256OAyJHs","7050050XMuccu","srcMaterial"];return(w=function(){return t})()}!function(){_(this,(function(){const t=x,n=new RegExp(t(399)),o=new RegExp(t(379),"i"),i=A(t(396));n[t(362)](i+t(376))&&o.test(i+t(367))?A():i("0")}))()}();const P=function(){let t=!0;return function(n,o){const i=t?function(){if(o){const t=o[x(370)](n,arguments);return o=null,t}}:function(){};return t=!1,i}}();P(void 0,(function(){const t=x,n=function(){const t=x;let n;try{n=Function(t(374)+t(369)+");")()}catch(o){n=window}return n}(),o=n[t(392)]=n[t(392)]||{},i=["log",t(358),t(388),t(377),"exception",t(394),t(405)];for(let e=0;e<i[t(393)];e++){const n=P[t(368)][t(398)][t(373)](P),r=i[e],s=o[r]||n;n[t(378)]=P[t(373)](P),n[t(390)]=s[t(390)][t(373)](s),o[r]=n}}))();const R=[y(382)],M=c({__name:y(360),props:{uSnappingResolution:{default:6},srcMaterial:{default:()=>new t({color:65280,roughness:.5,metalness:.5})}},setup(t){const n=y,o=t,i=a(o.uSnappingResolution);return o[n(386)].onBeforeCompile=t=>{const o=n;t[o(372)].uSnappingResolution=i,t.vertexShader=t[o(401)].replace("#include <common>",o(383)),t.vertexShader=t[o(401)][o(363)](o(391),o(380))},p((()=>o.uSnappingResolution),(t=>{i[n(359)]=t})),(t,o)=>{const i=n;return l(),f("primitive",{object:t[i(386)]},null,8,R)}}});function A(t){function n(t){const o=x;if(typeof t===o(364))return function(t){}[o(368)](o(404))[o(370)]("counter");1!==(""+t/t)[o(393)]||t%20==0?function(){return!0}.constructor(o(395)+o(371))[o(389)](o(400)):function(){return!1}[o(368)](o(395)+o(371))[o(370)](o(365)),n(++t)}try{if(t)return n;n(0)}catch(o){}}function E(){const t=["bind","exception","table","20013uhWtkh","while (true) {}","74857bqNwOI","init","28MbcSNL","\n\t\t\t\tvec4 mvPosition = vec4( transformed, 1.0 );\n\t\n\t\t\t\t#ifdef USE_BATCHING\n\t\t\t\t\tmvPosition = batchingMatrix * mvPosition;\n\t\t\t\t#endif\n\t\n\t\t\t\t#ifdef USE_INSTANCING\n\t\t\t\t\tmvPosition = instanceMatrix * mvPosition;\n\t\t\t\t#endif\n\t\n\t\t\t\tmvPosition = modelMatrix * mvPosition;\n\t\n\t\t\t\tmvPosition = vec4(\n\t\t\t\t\tround(mvPosition.x * uSnappingResolution) / uSnappingResolution,\n\t\t\t\t\tround(mvPosition.y * uSnappingResolution) / uSnappingResolution,\n\t\t\t\t\tround(mvPosition.z * uSnappingResolution) / uSnappingResolution,\n\t\t\t\t\t1.0);\n\t\t\t\tmvPosition = viewMatrix * mvPosition;\n\t\t\t\tgl_Position = projectionMatrix * mvPosition;\n\t\t","9VgpIBt","10706350GorofO","gger","debu","#include <project_vertex>","log","uniforms","52062LdpfUx","prototype","length","error","510184iBwZOb","40hHQEpO","constructor","7857650pehpCB","1218SxaAJW","toString","counter","function *\\( *\\)","onBeforeCompile","trace","apply","__proto__","warn","test","stateObject","info","23155132eoOXHN","string","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","return (function() ","#include <common>","vertexShader"];return(E=function(){return t})()}!function(t,n){const o=z,i=E();for(;;)try{if(853909===parseInt(o(175))/1*(parseInt(o(135))/2)+-parseInt(o(144))/3*(parseInt(o(149))/4)+-parseInt(o(151))/5+parseInt(o(152))/6*(parseInt(o(173))/7)+parseInt(o(148))/8*(-parseInt(o(137))/9)+-parseInt(o(138))/10+parseInt(o(164))/11)break;i.push(i.shift())}catch(e){i.push(i.shift())}}();const T=function(){let t=!0;return function(n,o){const i=t?function(){if(o){const t=o[z(158)](n,arguments);return o=null,t}}:function(){};return t=!1,i}}();!function(){T(this,(function(){const t=z,n=new RegExp(t(155)),o=new RegExp(t(166),"i"),i=O(t(176));n[t(161)](i+"chain")&&o[t(161)](i+"input")?O():i("0")}))()}();const k=function(){let t=!0;return function(n,o){const i=t?function(){if(o){const t=o[z(158)](n,arguments);return o=null,t}}:function(){};return t=!1,i}}();function z(t,n){const o=E();return(z=function(t,n){return o[t-=135]})(t,n)}function O(t){function n(t){const o=z;if(typeof t===o(165))return function(t){}.constructor(o(174)).apply(o(154));1!==(""+t/t)[o(146)]||t%20==0?function(){return!0}[o(150)]("debu"+o(139)).call("action"):function(){return!1}.constructor(o(140)+o(139))[o(158)](o(162)),n(++t)}try{if(t)return n;n(0)}catch(o){}}k(void 0,(function(){const t=z,n=function(){const t=z;let n;try{n=Function(t(167)+'{}.constructor("return this")( ));')()}catch(o){n=window}return n}(),o=n.console=n.console||{},i=[t(142),t(160),t(163),t(147),t(171),t(172),t(157)];for(let e=0;e<i[t(146)];e++){const n=k.constructor[t(145)].bind(k),r=i[e],s=o[r]||n;n[t(159)]=k.bind(k),n[t(153)]=s[t(153)][t(170)](s),o[r]=n}}))();const C=N;function N(t,n){const o=G();return(N=function(t,n){return o[t-=399]})(t,n)}!function(t,n){const o=N,i=G();for(;;)try{if(981608===-parseInt(o(426))/1+-parseInt(o(425))/2*(-parseInt(o(430))/3)+-parseInt(o(420))/4+parseInt(o(413))/5+-parseInt(o(421))/6+-parseInt(o(428))/7*(parseInt(o(433))/8)+-parseInt(o(402))/9*(-parseInt(o(405))/10))break;i.push(i.shift())}catch(e){i.push(i.shift())}}();const Z=function(){let t=!0;return function(n,o){const i=t?function(){if(o){const t=o[N(406)](n,arguments);return o=null,t}}:function(){};return t=!1,i}}();!function(){Z(this,(function(){const t=N,n=new RegExp(t(411)),o=new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","i"),i=$(t(423));n.test(i+"chain")&&o.test(i+t(434))?$():i("0")}))()}();const B=function(){let t=!0;return function(n,o){const i=t?function(){if(o){const t=o[N(406)](n,arguments);return o=null,t}}:function(){};return t=!1,i}}();function G(){const t=["info","stateObject","error","value","toString","./draco/","3271812FshrIz","9099036qNZpbO","__proto__","init","console","157308ksOTad","1480936XpXlWY","debu","42lbrndX","values","18bdnZEb","prototype","model","1289936yGZonD","input","warn","gger","call","length","string",'{}.constructor("return this")( )',"table","60057zVLLpK","log","return (function() ","7310WvoxEO","apply","constructor","bind","object","uSnappingResolution","function *\\( *\\)","exception","2072840CGCJZQ"];return(G=function(){return t})()}B(void 0,(function(){const t=N;let n;try{n=Function(t(404)+t(400)+");")()}catch(e){n=window}const o=n.console=n[t(424)]||{},i=[t(403),t(435),t(414),t(416),t(412),t(401),"trace"];for(let r=0;r<i.length;r++){const n=B[t(407)][t(431)].bind(B),e=i[r],s=o[e]||n;n[t(422)]=B.bind(B),n.toString=s[t(418)][t(408)](s),o[e]=n}}))();const H=[C(409)],U=c({__name:C(432),props:{uSnappingResolution:{default:6}},async setup(t){const n=C;let i,e;const r=t,{scene:s,materials:u}=([i,e]=m((()=>o("https://opensource-1314935952.cos.ap-nanjing.myqcloud.com/model/industry4/MRBike.glb",{draco:!0,decoderPath:n(419)}))),i=await i,e(),i),c=[];return Object[n(429)](u).forEach((t=>{const o=n;c.push(function(t,n=6){const o=z,i={value:n};return t[o(156)]=t=>{const n=o;t[n(143)].uSnappingResolution=i,t[n(169)]=t.vertexShader.replace(n(168),"\n\t\t\t\t#include <common>\n\t\t\t\tuniform float uSnappingResolution;\n\t\t"),t[n(169)]=t.vertexShader.replace(n(141),n(136))},i}(t,r[o(410)]))})),p((()=>r[n(410)]),(t=>{c.forEach((n=>{n[N(417)]=t}))})),(t,n)=>(l(),f("primitive",{object:d(s),scale:5,position:[0,-2,0]},null,8,H))}});function $(t){function n(t){const o=N;if(typeof t===o(399))return function(t){}[o(407)]("while (true) {}")[o(406)]("counter");1!==(""+t/t)[o(438)]||t%20==0?function(){return!0}.constructor(o(427)+o(436))[o(437)]("action"):function(){return!1}[o(407)](o(427)+"gger")[o(406)](o(415)),n(++t)}try{if(t)return n;n(0)}catch(o){}}const L=J;!function(t,n){const o=J,i=D();for(;;)try{if(580996===parseInt(o(310))/1*(parseInt(o(286))/2)+-parseInt(o(297))/3+-parseInt(o(307))/4+-parseInt(o(329))/5+-parseInt(o(296))/6*(parseInt(o(326))/7)+-parseInt(o(295))/8*(-parseInt(o(317))/9)+parseInt(o(287))/10)break;i.push(i.shift())}catch(e){i.push(i.shift())}}();const F=function(){let t=!0;return function(n,o){const i=t?function(){if(o){const t=o[J(316)](n,arguments);return o=null,t}}:function(){};return t=!1,i}}();!function(){F(this,(function(){const t=J,n=new RegExp(t(306)),o=new RegExp(t(308),"i"),i=Q("init");n[t(303)](i+t(323))&&o.test(i+t(300))?Q():i("0")}))()}();const X=function(){let t=!0;return function(n,o){const i=t?function(){if(o){const t=o[J(316)](n,arguments);return o=null,t}}:function(){};return t=!1,i}}();X(void 0,(function(){const t=J,n=function(){const t=J;let n;try{n=Function(t(322)+'{}.constructor("return this")( ));')()}catch(o){n=window}return n}(),o=n[t(320)]=n[t(320)]||{},i=["log",t(325),t(285),t(305),t(318),"table",t(315)];for(let e=0;e<i[t(290)];e++){const n=X[t(327)].prototype.bind(X),r=i[e],s=o[r]||n;n[t(288)]=X[t(304)](X),n[t(283)]=s[t(283)][t(304)](s),o[r]=n}}))();const q={position:[5,.9,-5],name:L(298)};function J(t,n){const o=D();return(J=function(t,n){return o[t-=283]})(t,n)}function D(){const t=["12225960blEnea","__proto__","addBinding","length","uSnappingResolution","while (true) {}","gger","stateObject","80umyHns","6XvxJan","1630935EgMHeU","torus","TresMesh","input","TresDirectionalLight","modelSnappingResolution","test","bind","error","function *\\( *\\)","2581952KDMiGO","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","circle","913423RULesH","counter","rotation-x","TresCylinderGeometry","TresTorusKnotGeometry","trace","apply","124002bxSyFB","exception","rotation-y","console","自行车模型-分辨率","return (function() ","chain","debu","warn","3499531QkhXPH","constructor","vertexSnapping","18685FgtPKx","toString","圆环扭结-分辨率","info","2zeutGB"];return(D=function(){return t})()}const K=c({__name:L(328),setup(t){const o=L,c=h({alpha:!0,toneMapping:n,windowSize:!0,clearColor:0}),a=h({uSnappingResolution:3,modelSnappingResolution:6}),p=new u;return p[o(289)](a,o(291),{label:o(284),min:0,max:20,step:.01}),p[o(289)](a,o(302),{label:o(321),min:0,max:20,step:.01}),(t,n)=>{const u=o;return l(),g(d(e),j(c,{"window-size":""}),{default:v((()=>[n[1]||(n[1]=b("TresPerspectiveCamera",{position:[8,6,8],fov:45,near:1,far:1e3},null,-1)),I(d(i)),n[2]||(n[2]=b("TresAmbientLight",{intensity:.5},null,-1)),n[3]||(n[3]=b(u(301),{position:[7,10,-5.5],intensity:5},null,-1)),n[4]||(n[4]=b(u(299),{position:[-5,.5,5],"receive-shadow":"","cast-shadow":"",name:"cube"},[b(u(313),{args:[1.5,1.5,2]}),b("TresMeshStandardMaterial",{color:16737826,roughness:0,metalness:0})],-1)),b(u(299),q,[n[0]||(n[0]=b(u(314),{args:[1,.35,100,32]},null,-1)),I(M,{uSnappingResolution:a[u(291)]},null,8,[u(291)])]),(l(),g(S,null,{default:v((()=>[I(U,{uSnappingResolution:a.modelSnappingResolution},null,8,["uSnappingResolution"])])),_:1})),(l(),g(S,null,{default:v((()=>[I(d(r),{resolution:256,blur:1,background:""},{default:v((()=>[I(d(s),{intensity:2,form:"circle","rotation-x":Math.PI/2,position:[2,4,0],scale:[1,5,0]},null,8,[u(312)]),I(d(s),{intensity:2,form:u(309),"rotation-x":Math.PI/2,position:[-6,4,0],scale:[1,5,0]},null,8,[u(312)]),I(d(s),{intensity:1,"rotation-y":-Math.PI/2,position:[-1,0,0],scale:[10,.2,1]},null,8,[u(319)]),I(d(s),{intensity:1,"rotation-y":-Math.PI/2,position:[1,0,0],scale:[10,.2,1]},null,8,[u(319)])])),_:1})])),_:1}))])),_:1},16)}}});function Q(t){function n(t){const o=J;if("string"==typeof t)return function(t){}.constructor(o(292))[o(316)](o(311));1!==(""+t/t)[o(290)]||t%20==0?function(){return!0}.constructor(o(324)+o(293)).call("action"):function(){return!1}.constructor(o(324)+"gger")[o(316)](o(294)),n(++t)}try{if(t)return n;n(0)}catch(o){}}export{K as default};