import{ab as t}from"./three.fIUcjaNz1730883607874.js";import{U as n,C as i,H as e}from"./@tresjs.C3WO4ZW41730883607874.js";import{e as s,f as o}from"./index.D3-O3Ya61730883607874.js";import{P as r}from"./tweakpane.BCjFYDHx1730883607874.js";import{d as a,r as c,o as p,f as l,g as u,J as m,j as f,u as d,aj as j,ak as g,al as h,m as b}from"./@vue.Cfu43fwq1730883607874.js";import"./@vueuse.BSum2YDk1730883607874.js";import"./@fesjs.DQmvwjPe1730883607874.js";import"./vue-router.BDLCs4Ld1730883607874.js";import"./lodash-es.BBTWvufR1730883607874.js";import"./@qlin.BIlp8Yi21730883607874.js";import"./pinia.DKpn0rzI1730883607874.js";import"./vue-demi.Dq6ymT-81730883607874.js";import"./@babel.BBWsvBIa1730883607874.js";import"./@floating-ui.B75jtkXD1730883607874.js";import"./@juggle.BnTvdTVm1730883607874.js";import"./chalk.B3MNILV41730883607874.js";/* empty css                                 */import"./iconify-icon.DK1S_nhj1730883607874.js";import"./@iconify.CkmZGMLx1730883607874.js";import"./dompurify.MwRjsY0L1730883607874.js";import"./oimophysics.B0i2NtyE1730883607874.js";import"./three-stdlib.oW8T3I_Q1730883607874.js";import"./@pmndrs.CQZPv3U_1730883607874.js";import"./object-hash.c-ODBdIv1730883607874.js";import"./@amap.CXRRqiLY1730883607874.js";import"./jszip.V4H7zZUl1730883607874.js";import"./three-custom-shader-material.DD5mBNmu1730883607874.js";import"./three.quarks.BwNiiDXj1730883607874.js";import"./quarks.core.C7CDonSm1730883607874.js";const y=B;!function(t,n){const i=B,e=v();for(;;)try{if(792193===parseInt(i(331))/1*(-parseInt(i(361))/2)+-parseInt(i(358))/3*(parseInt(i(316))/4)+-parseInt(i(324))/5*(-parseInt(i(362))/6)+parseInt(i(333))/7+-parseInt(i(364))/8*(-parseInt(i(313))/9)+-parseInt(i(350))/10+parseInt(i(325))/11*(-parseInt(i(319))/12))break;e.push(e.shift())}catch(s){e.push(e.shift())}}();const k=function(){let t=!0;return function(n,i){const e=t?function(){if(i){const t=i[B(352)](n,arguments);return i=null,t}}:function(){};return t=!1,e}}();!function(){k(this,(function(){const t=B,n=new RegExp("function *\\( *\\)"),i=new RegExp(t(340),"i"),e=T("init");n[t(356)](e+t(332))&&i[t(356)](e+t(360))?T():e("0")}))()}();const x=function(){let t=!0;return function(n,i){const e=t?function(){if(i){const t=i.apply(n,arguments);return i=null,t}}:function(){};return t=!1,e}}();x(void 0,(function(){const t=B;let n;try{n=Function(t(312)+t(346)+");")()}catch(s){n=window}const i=n[t(339)]=n[t(339)]||{},e=[t(359),"warn",t(365),"error","exception",t(366),t(351)];for(let o=0;o<e[t(334)];o++){const n=x[t(347)][t(367)][t(326)](x),s=e[o],r=i[s]||n;n[t(368)]=x[t(326)](x),n[t(336)]=r[t(336)].bind(r),i[s]=n}}))();const w={position:[0,1.9,0],name:"torus"},I=a({__name:y(342),setup(a){const k=y,x=c({alpha:!0,toneMapping:t,windowSize:!0,clearColor:0,disableRender:!1}),I=c({enableDamping:!0,autoRotate:!1}),v=c({color:k(330),roughness:0,reflectivity:.5,attenuationColor:k(330),attenuationDistance:2,chromaticAberration:.05,anisotropicBlur:.1,distortion:0,temporalDistortion:0,backside:!0,thickness:1,backsideThickness:.5}),B=new r;return B[k(315)](v,k(317),{label:"颜色"}),B.addBinding(v,k(328),{label:k(328),min:0,max:1,step:.01}),B[k(315)](v,k(354),{label:"reflectivity",min:0,max:1,step:.01}),B[k(315)](v,k(353),{label:k(353)}),B[k(315)](v,k(329),{label:k(329),min:0,max:2,step:.01}),B[k(315)](v,k(363),{label:k(363),min:0,max:2,step:.01}),B.addBinding(v,"anisotropicBlur",{label:k(327),min:0,max:10,step:.01}),B.addBinding(v,k(369),{label:"distortion",min:0,max:10,step:.01}),B.addBinding(v,"temporalDistortion",{label:k(357),min:0,max:1,step:.01}),B[k(315)](v,k(355),{label:k(355)}),B.addBinding(v,k(344),{label:k(344),min:0,max:4,step:.01}),B[k(315)](v,"backsideThickness",{label:k(322),min:0,max:4,step:.01}),(t,r)=>{const a=k;return p(),l(d(e),b(x,{"window-size":""}),{default:u((()=>[r[1]||(r[1]=m(a(343),{position:[10,10,10],fov:45,near:1,far:1e3},null,-1)),f(d(n),j(g(I)),null,16),r[2]||(r[2]=m("TresAmbientLight",{intensity:.5},null,-1)),r[3]||(r[3]=m("TresDirectionalLight",{position:[15,15,15],intensity:1},null,-1)),m(a(314),w,[r[0]||(r[0]=m(a(337),{args:[1,.35,100,32]},null,-1)),f(d(s),j(g(v)),null,16)]),r[4]||(r[4]=m(a(314),{position:[-2.5,1.5,2.5],"receive-shadow":"","cast-shadow":"",name:a(323)},[m(a(318),{args:[1.5,1.5,2]}),m("TresMeshStandardMaterial",{color:a(321),roughness:0,metalness:1})],-1)),f(d(o),{args:[3,3]}),(p(),l(h,null,{default:u((()=>[f(d(i),{blur:.3,background:"",files:["pos-x.jpg",a(338),"pos-y.jpg","neg-y.jpg",a(320),"neg-z.jpg"],path:"https://opensource-1314935952.cos.ap-nanjing.myqcloud.com/images/skyBox/6jpg/"})])),_:1}))])),_:1},16)}}});function v(){const t=["while (true) {}","1164060UFAhPX","trace","apply","attenuationColor","reflectivity","backside","test","temporalDistortion","525EyREyB","log","input","12462IyaDQz","6rCHKrm","chromaticAberration","10404320RwCGHb","info","table","prototype","__proto__","distortion","return (function() ","9UzyXRd","TresMesh","addBinding","28108OmhNpC","color","TresCylinderGeometry","47436gYKcba","pos-z.jpg","#ff33ff","backsideThickness","cube","6176785xQdBRK","2651QiFVRT","bind","anisotropicBlur","roughness","attenuationDistance","#ffffff","93UgnMmF","chain","7942081yvEQUR","length","action","toString","TresTorusKnotGeometry","neg-x.jpg","console","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","gger","transmissionMaterial","TresPerspectiveCamera","thickness","call",'{}.constructor("return this")( )',"constructor","debu"];return(v=function(){return t})()}function B(t,n){const i=v();return(B=function(t,n){return i[t-=312]})(t,n)}function T(t){function n(t){const i=B;if("string"==typeof t)return function(t){}.constructor(i(349)).apply("counter");1!==(""+t/t)[i(334)]||t%20==0?function(){return!0}[i(347)]("debu"+i(341))[i(345)](i(335)):function(){return!1}[i(347)](i(348)+i(341))[i(352)]("stateObject"),n(++t)}try{if(t)return n;n(0)}catch(i){}}export{I as default};