import{p as t,q as n,Y as e}from"./@tresjs.IsKybBdF1729505164040.js";import{_ as o}from"./reflectorMesh.vue_vue_type_script_setup_true_lang.dCnu-cmQ1729505164040.js";import{_ as r}from"./index.oYvY2QaF1729505164040.js";import{e as s,V as i}from"./three.YREzp-_G1729505164040.js";import{_ as c}from"./cloudPoints.vue_vue_type_script_setup_true_lang.7gZ4dghu1729505164040.js";import{P as a}from"./tweakpane.yHWGBmom1729505164040.js";import{d as u,a4 as l,o as f,E as p,L as m,u as d,j as h,F as _,r as g,Y as j,a3 as b,e as w,g as y,f as v,al as I,aj as x,ak as S}from"./@vue.JNsx1iN61729505164040.js";import"./@vueuse.9dhnH8nd1729505164040.js";import"./index.Giwe0yTk1729505164040.js";import"./@fesjs.ysb1R5mQ1729505164040.js";import"./vue-router.xkfjO_BL1729505164040.js";import"./lodash-es.kYt-_xTG1729505164040.js";import"./@qlin.yHhFDldE1729505164040.js";import"./pinia.LeDA9WVb1729505164040.js";import"./@floating-ui.BPbuo5Gx1729505164040.js";import"./@juggle.7yjBMqoW1729505164040.js";import"./chalk.sAH7iSuz1729505164040.js";/* empty css                                 */import"./iconify-icon.l-H2-fnN1729505164040.js";import"./@iconify.eRzdeG3K1729505164040.js";import"./utils.r8L0F7PV1729505164040.js";import"./default.vue_vue_type_script_setup_true_lang.ZaT5kxsq1729505164040.js";import"./three-mesh-ui.module.e6VhGzpt1729505164040.js";const C=L;!function(t,n){const e=L,o=F();for(;;)try{if(230044===parseInt(e(167))/1+parseInt(e(154))/2*(-parseInt(e(139))/3)+parseInt(e(140))/4+parseInt(e(183))/5+parseInt(e(157))/6+parseInt(e(177))/7+-parseInt(e(158))/8*(parseInt(e(149))/9))break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const k=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[L(161)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();!function(){k(this,(function(){const t=L,n=new RegExp(t(171)),e=new RegExp(t(163),"i"),o=E(t(169));n[t(165)](o+t(184))&&e.test(o+"input")?E():o("0")}))()}();const A=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[L(161)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();A(void 0,(function(){const t=L;let n;try{n=Function(t(145)+t(164)+");")()}catch(r){n=window}const e=n.console=n[t(151)]||{},o=["log","warn",t(144),t(148),"exception",t(160),"trace"];for(let s=0;s<o.length;s++){const n=A[t(143)][t(182)][t(176)](A),r=o[s],i=e[r]||n;n[t(156)]=A[t(176)](A),n.toString=i.toString[t(176)](i),e[r]=n}}))();const q=[C(162)];function F(){const t=["object","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)",'{}.constructor("return this")( )',"test","clippingPlanes","163990efYXdS","constant","init","#fff","function *\\( *\\)","counter","addBinding","CS_Black_0","castShadow","bind","2083564dFvZbM","removeFromParent","action","string","Sketchfab_model","prototype","2017035HBWtqA","chain","while (true) {}","Floor","getObjectByName","Cube006_Avion_0","9CJGITh","1601124CFfVwE","model","clipIntersection","constructor","info","return (function() ","gger","primitive","error","1728819tfAlxD","debu","console","material","length","25890KlADch","Cube006_M_Moteur_0","__proto__","936570dkeLkS","48QVnqFO","log","table","apply"];return(F=function(){return t})()}function L(t,n){const e=F();return(L=function(t,n){return e[t-=136]})(t,n)}const z=u({__name:"planeClipping",async setup(e){const o=C;let r,u;const{renderer:g}=t();g.value.localClippingEnabled=!0;const{nodes:j}=([r,u]=l((()=>n("https://opensource-1314935952.cos.ap-nanjing.myqcloud.com/model/industry4/plane/scene.gltf",{draco:!0,decoderPath:"./draco/"}))),r=await r,u(),r);console[o(159)](j);j[o(181)][o(137)](o(136))[o(178)]();const b=j[o(181)].getObjectByName(o(138));b[o(175)]=!0;const w=[new s(new i(1,0,0),0),new s(new i(0,0,-1),0)];b[o(152)][o(142)]=!0,b[o(152)][o(166)]=w;const y=j[o(181)][o(137)](o(155));y.material[o(142)]=!0,y.material[o(166)]=w;const v=j[o(181)].getObjectByName(o(174)),I=new a({title:"裁剪参数",expanded:!0});return I[o(173)](w[0],"constant",{label:"x",min:-200,max:200,step:1}),I[o(173)](w[1],o(168),{label:"y",min:-200,max:250,step:1}),(t,n)=>{const e=o;return f(),p(_,null,[m(e(147),{object:d(j).Sketchfab_model},null,8,q),h(c,{isRemoveSrc:"",model:d(v),color:e(170)},null,8,[e(141)])],64)}}});function E(t){function n(t){const e=L;if(typeof t===e(180))return function(t){}[e(143)](e(185)).apply(e(172));1!==(""+t/t)[e(153)]||t%20==0?function(){return!0}.constructor(e(150)+e(146)).call(e(179)):function(){return!1}[e(143)](e(150)+e(146))[e(161)]("stateObject"),n(++t)}try{if(t)return n;n(0)}catch(e){}}const O=B;function B(t,n){const e=W();return(B=function(t,n){return e[t-=458]})(t,n)}!function(t,n){const e=B,o=W();for(;;)try{if(390130===-parseInt(e(478))/1*(parseInt(e(472))/2)+parseInt(e(489))/3+-parseInt(e(475))/4*(parseInt(e(501))/5)+-parseInt(e(479))/6+parseInt(e(506))/7*(parseInt(e(477))/8)+parseInt(e(498))/9*(-parseInt(e(490))/10)+parseInt(e(474))/11)break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const M=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[B(484)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();!function(){M(this,(function(){const t=B,n=new RegExp(t(482)),e=new RegExp(t(486),"i"),o=Y(t(493));n.test(o+t(485))&&e[t(466)](o+t(483))?Y():o("0")}))()}();const P=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e.apply(n,arguments);return e=null,t}}:function(){};return t=!1,o}}();P(void 0,(function(){const t=B,n=function(){const t=B;let n;try{n=Function("return (function() "+t(481)+");")()}catch(e){n=window}return n}(),e=n.console=n[t(504)]||{},o=[t(487),t(488),t(495),t(503),"exception",t(458),"trace"];for(let r=0;r<o.length;r++){const n=P[t(459)].prototype.bind(P),s=o[r],i=e[s]||n;n[t(473)]=P.bind(P),n[t(492)]=i[t(492)][t(500)](i),e[s]=n}}))();const T=m(O(496),{position:[500,330,500],fov:50,near:.1,far:1e4},null,-1),R=m(O(460),{color:"#ffffff",intensity:"1"},null,-1);function W(){const t=["mapSize","table","constructor","TresAmbientLight","length","camera","near","TresDirectionalLight","shadow","test","#333","counter","#444444","#888888","left","2LeKRmQ","__proto__","14044855TQhnWW","80292oqrdMK","debu","32pOSMHV","454631tsPNiq","3706254FbsOsW","stateObject",'{}.constructor("return this")( )',"function *\\( *\\)","input","apply","chain","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","log","warn","2293509qfoGIM","784230ouKclm","#efefef","toString","init","bottom","info","TresPerspectiveCamera","TDirectionalLight","9YYGiAJ","value","bind","135LhBuIo","string","error","console","set","72723GWEvQL","far"];return(W=function(){return t})()}const G=u({__name:"planeClipping",setup(t){const n=O,s=g({mirrorSize:900,gridSize:880,mirrorColor:n(491),divisions:10,colorCenterLine:n(469),colorGrid:n(470)}),i=j();return b((()=>{const t=n;i[t(499)]&&(i[t(499)][t(465)][t(508)][t(505)](1e3,1e3),i[t(499)].shadow[t(462)][t(463)]=.1,i[t(499)][t(465)].camera[t(507)]=5e3,i[t(499)][t(465)].camera.top=200,i.value.shadow[t(462)].right=200,i[t(499)][t(465)][t(462)][t(471)]=-200,i[t(499)][t(465)].camera[t(494)]=-200,i.value[t(465)].radius=10)})),(t,c)=>{const a=n,u=w("TresCanvas");return f(),p(_,null,[h(d(r)),h(u,{clearColor:a(467),shadows:"","window-size":""},{default:y((()=>[T,h(d(e)),R,m(a(464),{ref_key:a(497),ref:i,color:"#ffffff",position:[300,300,350],intensity:6,"cast-shadow":""},null,512),(f(),v(I,null,{default:y((()=>[h(z)])),_:1})),h(o,x(S(s)),null,16)])),_:1})],64)}}});function Y(t){function n(t){const e=B;if(typeof t===e(502))return function(t){}[e(459)]("while (true) {}")[e(484)](e(468));1!==(""+t/t)[e(461)]||t%20==0?function(){return!0}[e(459)]("debugger").call("action"):function(){return!1}[e(459)](e(476)+"gger")[e(484)](e(480)),n(++t)}try{if(t)return n;n(0)}catch(e){}}export{G as default};