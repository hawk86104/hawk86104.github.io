import{aF as t,cV as n,_ as e,U as r,cW as o,cX as s,V as i}from"./three.fIUcjaNz1730883607874.js";import{D as a,U as c,H as u}from"./@tresjs.C3WO4ZW41730883607874.js";import{P as l}from"./tweakpane.BCjFYDHx1730883607874.js";import{u as f,_ as p}from"./colorList.7eYcYSPU1730883607874.js";import{d,a6 as h,w as m,o as g,D as w,J as b,u as _,aj as j,ak as I,j as y,g as x,f as v,al as L,F as S}from"./@vue.Cfu43fwq1730883607874.js";import"./@vueuse.BSum2YDk1730883607874.js";import"./pinia.DKpn0rzI1730883607874.js";import"./vue-demi.Dq6ymT-81730883607874.js";import"./@fesjs.DQmvwjPe1730883607874.js";import"./vue-router.BDLCs4Ld1730883607874.js";import"./lodash-es.BBTWvufR1730883607874.js";import"./@qlin.BIlp8Yi21730883607874.js";import"./@babel.BBWsvBIa1730883607874.js";import"./@floating-ui.B75jtkXD1730883607874.js";import"./@juggle.BnTvdTVm1730883607874.js";const F=A;!function(t,n){const e=A,r=B();for(;;)try{if(781350===parseInt(e(188))/1*(parseInt(e(226))/2)+-parseInt(e(228))/3+parseInt(e(185))/4*(parseInt(e(236))/5)+parseInt(e(186))/6+parseInt(e(202))/7+parseInt(e(198))/8*(parseInt(e(210))/9)+-parseInt(e(194))/10)break;r.push(r.shift())}catch(o){r.push(r.shift())}}();const z=function(){let t=!0;return function(n,e){const r=t?function(){if(e){const t=e[A(209)](n,arguments);return e=null,t}}:function(){};return t=!1,r}}();!function(){z(this,(function(){const t=A,n=new RegExp(t(217)),e=new RegExp(t(232),"i"),r=M(t(187));n.test(r+"chain")&&e.test(r+"input")?M():r("0")}))()}();const k=function(){let t=!0;return function(n,e){const r=t?function(){if(e){const t=e[A(209)](n,arguments);return e=null,t}}:function(){};return t=!1,r}}();k(void 0,(function(){const t=A;let n;try{n=Function(t(234)+'{}.constructor("return this")( ));')()}catch(o){n=window}const e=n[t(190)]=n[t(190)]||{},r=[t(218),t(239),t(208),"error",t(248),"table",t(196)];for(let s=0;s<r.length;s++){const n=k[t(215)].prototype.bind(k),o=r[s],i=e[o]||n;n[t(250)]=k[t(195)](k),n[t(221)]=i[t(221)][t(195)](i),e[o]=n}}))();const O={position:[0,0,80]},R=[F(200)];function A(t,n){const e=B();return(A=function(t,n){return e[t-=183]})(t,n)}function B(){const t=["init","1OuXsuA","magFilter","console","updateTransferFunction","translate","colorsStops","12462200NLwxEC","bind","trace","u_data","1326824pXWMRm","MIP","object","minFilter","6764800ttYQTt","length","value","zLength","xLength","fragmentShader","info","apply","27IHxXvN","needsUpdate","RedFormat","string","type","constructor","counter","function *\\( *\\)","log","addBinding","addBlade","toString","ISO","u_size","debu","action","2651186PwFRAn","u_renderstyle","4454817Nminkm","LinearFilter","data","u_clim","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","gger","return (function() ","change","168335VgIycJ","set","u_renderthreshold","warn","uniforms","call","FloatType","BackSide","vertexShader","yLength","primitive","TresShaderMaterial","exception","u_cmdata","__proto__","scene","clone","32MIxObY","2721726OLWGoa"];return(B=function(){return t})()}const C=d({__name:F(183),async setup(i){const c=F;let u,p;const d=f(),y=([u,p]=h((()=>a(s,"./plugins/tvtVolumeRendering/rawData/stent.nrrd"))),u=await u,p(),u),x=new t(y.xLength,y[c(245)],y[c(205)]);x[c(192)](y.xLength/2-.5,y[c(245)]/2-.5,y.zLength/2-.5);const v=(t=>{const n=c,e=new Float32Array(t[n(203)]);for(let r=0;r<t[n(203)];r++)e[r]=t[r];return e})(y[c(230)]),L=new n(v,y[c(206)],y[c(245)],y.zLength);L.format=e[c(212)],L[c(214)]=e[c(242)],L[c(201)]=L[c(189)]=e[c(229)],L.unpackAlignment=1,L[c(211)]=!0;const S=r[c(184)](o[c(240)]);S[c(197)][c(204)]=L,S[c(223)][c(204)][c(237)](y.xLength,y[c(245)],y.zLength),S[c(231)][c(204)][c(237)](0,1),S[c(227)][c(204)]=1,S.u_renderthreshold[c(204)]=.15,S.u_cmdata[c(204)]=null;const z={uniforms:S,vertexShader:o[c(244)],fragmentShader:o[c(207)],side:e[c(243)]};console[c(218)](y);const k=new l;return k[c(219)](S[c(231)].value,"x",{label:"左裁",min:0,max:1,step:.01}),k.addBinding(S.u_clim[c(204)],"y",{label:"右裁",min:0,max:1,step:.01}),k[c(219)](S[c(238)],"value",{label:"iso系数",min:0,max:1,step:.01}),k[c(220)]({view:"list",label:"显示类型",options:[{text:c(199),value:0},{text:c(222),value:1}],value:1}).on(c(235),(t=>{const n=c;S[n(227)][n(204)]=t[n(204)]})),m((()=>d[c(193)]),(()=>{const t=c;S[t(249)].value=d[t(191)]()}),{deep:!0,immediate:!0}),(t,n)=>{const e=c;return g(),w("TresMesh",O,[b(e(246),{object:_(x)},null,8,R),b(e(247),j(I(z)),null,16)])}}});function M(t){function n(t){const e=A;if(typeof t===e(213))return function(t){}[e(215)]("while (true) {}")[e(209)](e(216));1!==(""+t/t)[e(203)]||t%20==0?function(){return!0}.constructor("debu"+e(233))[e(241)](e(225)):function(){return!1}[e(215)](e(224)+"gger")[e(209)]("stateObject"),n(++t)}try{if(t)return n;n(0)}catch(e){}}function T(){const t=["rgb(164, 0, 188)","__proto__","26624qeUQWG","chain","table","gger","innerWidth","3755730btScuB","string","test","constructor","1050777nFHmQd","TresOrthographicCamera","debu","toString","109SptfAj","error","warn","8916vanVxD","stateObject","innerHeight","target","right","bind","91lkIdtG","prototype","function *\\( *\\)","142569YbRyZO",'{}.constructor("return this")( )',"init","rgb(216, 255, 0)","118kwMnbn","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","exception","#201919","return (function() ","apply","2053128ByUKBj","input","225LSObBC","trace","console","length","call","16GygRWv"];return(T=function(){return t})()}const W=Z;!function(t,n){const e=Z,r=T();for(;;)try{if(225339===parseInt(e(368))/1*(-parseInt(e(384))/2)+-parseInt(e(380))/3*(parseInt(e(352))/4)+parseInt(e(347))/5*(-parseInt(e(371))/6)+-parseInt(e(377))/7*(-parseInt(e(355))/8)+-parseInt(e(364))/9+parseInt(e(360))/10+parseInt(e(345))/11)break;r.push(r.shift())}catch(o){r.push(r.shift())}}();const E=function(){let t=!0;return function(n,e){const r=t?function(){if(e){const t=e[Z(389)](n,arguments);return e=null,t}}:function(){};return t=!1,r}}();!function(){E(this,(function(){const t=Z,n=new RegExp(t(379)),e=new RegExp(t(385),"i"),r=H(t(382));n[t(362)](r+t(356))&&e[t(362)](r+t(346))?H():r("0")}))()}();const U=function(){let t=!0;return function(n,e){const r=t?function(){if(e){const t=e.apply(n,arguments);return e=null,t}}:function(){};return t=!1,r}}();U(void 0,(function(){const t=Z,n=function(){const t=Z;let n;try{n=Function(t(388)+t(381)+");")()}catch(e){n=window}return n}(),e=n.console=n[t(349)]||{},r=["log",t(370),"info",t(369),t(386),t(357),t(348)];for(let o=0;o<r[t(350)];o++){const n=U[t(363)][t(378)][t(376)](U),s=r[o],i=e[s]||n;n[t(354)]=U[t(376)](U),n[t(367)]=i[t(367)][t(376)](i),e[s]=n}}))();const V=["left",W(375),"top","bottom"];function Z(t,n){const e=T();return(Z=function(t,n){return e[t-=345]})(t,n)}const D=512,G=d({__name:"nrrdOrthographicCamera",setup(t){const n=W,e=window[n(359)]/window[n(373)],r=new i(64,64,188);return(t,o)=>{const s=n;return g(),w(S,null,[y(p,{curColorList:[[s(353),0],["#1f948c",.4],[s(383),1]]}),y(_(u),{"window-size":"",clearColor:s(387)},{default:x((()=>[b(s(365),{position:[-64,-64,128],left:-D*e/2,right:D*e/2,top:256,bottom:256,near:.1,far:3e3,up:[0,0,1],zoom:3},null,8,V),y(_(c),{target:_(r)},null,8,[s(374)]),(g(),v(L,null,{default:x((()=>[y(C)])),_:1}))])),_:1})],64)}}});function H(t){function n(t){const e=Z;if(typeof t===e(361))return function(t){}[e(363)]("while (true) {}")[e(389)]("counter");1!==(""+t/t)[e(350)]||t%20==0?function(){return!0}[e(363)](e(366)+e(358))[e(351)]("action"):function(){return!1}[e(363)](e(366)+"gger")[e(389)](e(372)),n(++t)}try{if(t)return n;n(0)}catch(e){}}export{G as default};