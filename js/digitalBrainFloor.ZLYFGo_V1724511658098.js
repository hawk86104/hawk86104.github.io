import{bV as t,bS as n,ab as o,ad as e}from"./three.6cxCQsIj1724511658098.js";import{d as r}from"./@tresjs.6SjGVF2a1724511658098.js";import{P as s}from"./tweakpane.yHWGBmom1724511658098.js";import{_ as i}from"./reflectorMesh.vue_vue_type_script_setup_true_lang.b__ObIYl1724511658098.js";import{_ as a}from"./index.B58Un1ud1724511658098.js";import{l}from"./util.EWY6Ulwb1724511658098.js";import{_ as u}from"./cloudPoints.vue_vue_type_script_setup_true_lang.1J4sI4Qy1724511658098.js";import{_ as c,a as p}from"./bubblesEffect.vue_vue_type_script_setup_true_lang.aAZ5xR5B1724511658098.js";import{d as f,r as m,a4 as d,e as _,o as j,D as g,j as h,u as y,g as b,aj as w,ak as v,J as I,f as k,m as x,I as z,al as B,F as C}from"./@vue.Q1VpS3901724511658098.js";import"./@vueuse.rsVLbIR91724511658098.js";import"./index.CoSlN9z41724511658098.js";import"./@fesjs.OLRUJJVs1724511658098.js";import"./vue-router.LcUeGvdC1724511658098.js";import"./lodash-es.nFpJXAf-1724511658098.js";import"./@qlin.yHhFDldE1724511658098.js";import"./pinia.NmL3PGxA1724511658098.js";import"./@floating-ui.BPbuo5Gx1724511658098.js";import"./@juggle.7yjBMqoW1724511658098.js";import"./chalk.w3XuUwyA1724511658098.js";/* empty css                                 */import"./iconify-icon.l-H2-fnN1724511658098.js";import"./@iconify.9PoCakEb1724511658098.js";import"./utils.-xSU0-pR1724511658098.js";import"./default.vue_vue_type_script_setup_true_lang.2nZo2Ln21724511658098.js";import"./three-mesh-ui.module.IX95LHu51724511658098.js";const S=E;!function(t,n){const o=E,e=F();for(;;)try{if(401312===parseInt(o(184))/1+parseInt(o(144))/2+-parseInt(o(182))/3+parseInt(o(151))/4+parseInt(o(177))/5*(-parseInt(o(157))/6)+-parseInt(o(181))/7*(parseInt(o(173))/8)+-parseInt(o(176))/9*(-parseInt(o(161))/10))break;e.push(e.shift())}catch(r){e.push(e.shift())}}();const R=function(){let t=!0;return function(n,o){const e=t?function(){if(o){const t=o[E(162)](n,arguments);return o=null,t}}:function(){};return t=!1,e}}();!function(){R(this,(function(){const t=E,n=new RegExp("function *\\( *\\)"),o=new RegExp(t(165),"i"),e=N(t(153));n[t(139)](e+t(154))&&o[t(139)](e+"input")?N():e("0")}))()}();const T=function(){let t=!0;return function(n,o){const e=t?function(){if(o){const t=o.apply(n,arguments);return o=null,t}}:function(){};return t=!1,e}}();T(void 0,(function(){const t=E;let n;try{n=Function('return (function() {}.constructor("return this")( ));')()}catch(r){n=window}const o=n.console=n[t(145)]||{},e=[t(159),"warn",t(147),t(169),t(160),"table",t(156)];for(let s=0;s<e[t(150)];s++){const n=T[t(155)][t(186)][t(171)](T),r=e[s],i=o[r]||n;n[t(179)]=T[t(171)](T),n[t(138)]=i.toString[t(171)](i),o[r]=n}}))();const M=I("TresPerspectiveCamera",{position:[100,400,500],fov:45,near:.1,far:1e4,"look-at":[0,0,0]},null,-1),P=I(S(170),{intensity:.5},null,-1),A={position:[0,120,0]};function E(t,n){const o=F();return(E=function(t,n){return o[t-=138]})(t,n)}function F(){const t=["action","421192AzkSZd","call","TresGroup","1553157vCPcNR","5chkxYi","stateObject","__proto__","while (true) {}","77EwwJxF","1274628syLCbD","model","198545ziWrYW","脑轮廓显示","prototype","toString","test","脑轮廓透明度","show","opacity","脑轮廓颜色","2182wVrJer","console","#fff","info","#efefef","addBinding","length","514468MRtNvd","#84ccff","init","chain","constructor","trace","785622izaNqT","#9e00af","log","exception","70IdReMP","apply","debu","#201919","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","#888888","color","gger","error","TresAmbientLight","bind"];return(F=function(){return t})()}const J=f({__name:"digitalBrainFloor",async setup(f){const R=S;let T,E;const F=m({mirrorSize:500,gridSize:490,mirrorColor:R(148),divisions:10,colorCenterLine:"#444444",colorGrid:R(166)}),J=m({color:R(146),show:!0,opacity:1}),N=new s({title:"参数"});N[R(149)](J,R(141),{label:"点云显示"}),N[R(149)](J,R(167),{label:"点云颜色"}),N.addBinding(J,R(142),{label:"点云透明度",min:0,max:1,step:.1});const L=m({color:R(152),show:!0,opacity:1});N[R(149)](L,R(141),{label:R(185)}),N.addBinding(L,R(167),{label:R(143)}),N.addBinding(L,"opacity",{label:R(140),min:0,max:1,step:.1});const O=m({color:R(158),show:!0,opacity:1});N[R(149)](O,R(141),{label:"脑组织显示"}),N.addBinding(O,R(167),{label:"脑组织颜色"}),N.addBinding(O,R(142),{label:"脑组织透明度",min:0,max:1,step:.1});const Z=new t,$=([T,E]=d((()=>l("./plugins/medical/model/brainparts.OBJ",Z))),T=await T,E(),T),q=m({clearColor:R(164),shadows:!0,alpha:!1,shadowMapType:n,outputColorSpace:o,toneMapping:e}),D=m({autoRotate:!0,autoRotateSpeed:2});return(t,n)=>{const o=R,e=_("TresCanvas");return j(),g(C,null,[h(y(a)),h(e,x(q,{"window-size":""}),{default:b((()=>[M,h(y(r),w(v(D)),null,16),P,I(o(175),A,[J[o(141)]?(j(),k(u,x({key:0,model:y($)},J),null,16,[o(183)])):z("",!0),(j(),k(B,null,{default:b((()=>[L[o(141)]?(j(),k(c,x({key:0,model:y($)},L),null,16,["model"])):z("",!0)])),_:1})),O[o(141)]?(j(),k(p,x({key:1,model:y($)},O),null,16,["model"])):z("",!0)]),h(i,w(v(F)),null,16)])),_:1},16)],64)}}});function N(t){function n(t){const o=E;if("string"==typeof t)return function(t){}[o(155)](o(180))[o(162)]("counter");1!==(""+t/t).length||t%20==0?function(){return!0}[o(155)](o(163)+o(168))[o(174)](o(172)):function(){return!1}[o(155)](o(163)+o(168)).apply(o(178)),n(++t)}try{if(t)return n;n(0)}catch(o){}}export{J as default};