import{b as t}from"./pagesShow.vue_vue_type_script_setup_true_lang.BsjY64hW1730883607874.js";import{_ as n,as as e}from"./three.fIUcjaNz1730883607874.js";import{_ as r,P as o}from"./three.quarks.BwNiiDXj1730883607874.js";import{a as i,e as s}from"./@tresjs.C3WO4ZW41730883607874.js";import{d as c,a6 as a,o as u,D as p,J as f,u as l,r as m,f as d,g as h,al as w,j,m as g}from"./@vue.Cfu43fwq1730883607874.js";import{m as b}from"./quarks.core.C7CDonSm1730883607874.js";import{f as y}from"./index.D3-O3Ya61730883607874.js";import"./three-custom-shader-material.DD5mBNmu1730883607874.js";import"./@vueuse.BSum2YDk1730883607874.js";import"./@fesjs.DQmvwjPe1730883607874.js";import"./vue-router.BDLCs4Ld1730883607874.js";import"./lodash-es.BBTWvufR1730883607874.js";import"./@qlin.BIlp8Yi21730883607874.js";import"./pinia.DKpn0rzI1730883607874.js";import"./vue-demi.Dq6ymT-81730883607874.js";import"./@babel.BBWsvBIa1730883607874.js";import"./@floating-ui.B75jtkXD1730883607874.js";import"./@juggle.BnTvdTVm1730883607874.js";import"./chalk.B3MNILV41730883607874.js";/* empty css                                 */import"./iconify-icon.DK1S_nhj1730883607874.js";import"./@iconify.CkmZGMLx1730883607874.js";import"./dompurify.MwRjsY0L1730883607874.js";import"./oimophysics.B0i2NtyE1730883607874.js";import"./three-stdlib.oW8T3I_Q1730883607874.js";import"./@pmndrs.CQZPv3U_1730883607874.js";import"./object-hash.c-ODBdIv1730883607874.js";import"./@amap.CXRRqiLY1730883607874.js";import"./jszip.V4H7zZUl1730883607874.js";import"./tweakpane.BCjFYDHx1730883607874.js";function I(){const t=["gger","#b0ffff","MeshBasicMaterial","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","init","AdditiveBlending","3335353boepQh","chain","bind","ColorOverLife","apply","BatchedRenderer","6bUwvhK","FrameOverLife","SizeOverLife","log","TresGroup","ConstantValue","ColorRange","3126252ckfKXW","22680460pobRXk","muzzle1","emitter","addSystem","4228630AoOzFe","function *\\( *\\)","firefly","name","Vector4","action","string","primitive","constructor","260553LZAspQ","Bezier","trace","call","16LQSZvq","GridEmitter","table","rotateX","toString","904333lymxee","console","ConstantColor","info","110466soJZPX","length","test","exception","328CMjNTS","warn","debu","prototype","IntervalValue","object","RenderMode","return (function() ","error","PiecewiseBezier","addBehavior"];return(I=function(){return t})()}const _=z;!function(t,n){const e=z,r=I();for(;;)try{if(457987===-parseInt(e(174))/1+parseInt(e(169))/2*(parseInt(e(165))/3)+-parseInt(e(151))/4+-parseInt(e(156))/5+parseInt(e(144))/6*(-parseInt(e(138))/7)+parseInt(e(182))/8*(parseInt(e(178))/9)+parseInt(e(152))/10)break;r.push(r.shift())}catch(o){r.push(r.shift())}}();const v=function(){let t=!0;return function(n,e){const r=t?function(){if(e){const t=e[z(142)](n,arguments);return e=null,t}}:function(){};return t=!1,r}}();function z(t,n){const e=I();return(z=function(t,n){return e[t-=132]})(t,n)}!function(){v(this,(function(){const t=z,n=new RegExp(t(157)),e=new RegExp(t(135),"i"),r=Z(t(136));n[t(180)](r+t(139))&&e.test(r+"input")?Z():r("0")}))()}();const S=function(){let t=!0;return function(n,e){const r=t?function(){if(e){const t=e[z(142)](n,arguments);return e=null,t}}:function(){};return t=!1,r}}();S(void 0,(function(){const t=z,n=function(){const t=z;let n;try{n=Function(t(189)+'{}.constructor("return this")( ));')()}catch(e){n=window}return n}(),e=n[t(175)]=n[t(175)]||{},r=[t(147),t(183),t(177),t(190),t(181),t(171),t(167)];for(let o=0;o<r[t(179)];o++){const n=S[t(164)][t(185)][t(140)](S),i=r[o],s=e[i]||n;n.__proto__=S[t(140)](S),n.toString=s[t(173)][t(140)](s),e[i]=n}}))();const C=[_(187)],x=[_(187)],B=c({__name:_(158),props:{color:{default:_(133)},size:{default:1}},async setup(t){const c=_;let m,d;const h=new(r[c(143)]),w=([m,d]=a((()=>i(["./plugins/basic/shine/image/round.png"]))),m=await m,d(),m),j={duration:100,looping:!0,startLife:new(r[c(186)])(.1,20),startSpeed:new(r[c(149)])(20),startSize:new(r[c(186)])(6,20),startColor:new(r[c(176)])(new(n[c(160)])(1,1,1,1)),worldSpace:!1,maxParticle:5e3,emissionOverTime:new(r[c(149)])(20),emissionBursts:[{time:10,count:new(r[c(149)])(100),cycle:10,interval:1,probability:1}],shape:new(r[c(170)])({width:1500,height:1500,column:70,row:70}),material:new(n[c(134)])({map:w,blending:n[c(137)],transparent:!0}),startTileIndex:new(r[c(149)])(91),uTileCount:0,vTileCount:0,renderOrder:9999,renderMode:r[c(188)].BillBoard},g=new o(j);g[c(192)](new(r[c(141)])(new(r[c(150)])(new e(1,.3882312,.125,1),new(n[c(160)])(0,.826827,.3014706,1)))),g.addBehavior(new(r[c(146)])(new(r[c(191)])([[new(r[c(166)])(1,.95,.75,0),0]]))),g[c(192)](new(r[c(145)])(new(r[c(191)])([[new b(91,94,97,100),0]]))),g[c(154)][c(159)]=c(153),h[c(155)](g),h[c(172)](-Math.PI/2);const{onLoop:y}=s();return y((({delta:t})=>{h.update(t)})),(t,n)=>{const e=c;return u(),p(e(148),null,[f("primitive",{object:l(g)[e(154)]},null,8,C),f(e(163),{object:l(h)},null,8,x)])}}});function Z(t){function n(t){const e=z;if(typeof t===e(162))return function(t){}[e(164)]("while (true) {}")[e(142)]("counter");1!==(""+t/t)[e(179)]||t%20==0?function(){return!0}.constructor(e(184)+e(132))[e(168)](e(161)):function(){return!1}.constructor("debu"+e(132)).apply("stateObject"),n(++t)}try{if(t)return n;n(0)}catch(e){}}const k=M;!function(t,n){const e=M,r=O();for(;;)try{if(131294===parseInt(e(493))/1*(-parseInt(e(501))/2)+-parseInt(e(500))/3*(-parseInt(e(516))/4)+-parseInt(e(527))/5*(-parseInt(e(524))/6)+-parseInt(e(497))/7+parseInt(e(494))/8+-parseInt(e(519))/9*(-parseInt(e(511))/10)+-parseInt(e(525))/11*(parseInt(e(506))/12))break;r.push(r.shift())}catch(o){r.push(r.shift())}}();const A=function(){let t=!0;return function(n,e){const r=t?function(){if(e){const t=e[M(510)](n,arguments);return e=null,t}}:function(){};return t=!1,r}}();!function(){A(this,(function(){const t=M,n=new RegExp(t(528)),e=new RegExp(t(507),"i"),r=T(t(502));n[t(492)](r+t(514))&&e[t(492)](r+t(498))?T():r("0")}))()}();const L=function(){let t=!0;return function(n,e){const r=t?function(){if(e){const t=e[M(510)](n,arguments);return e=null,t}}:function(){};return t=!1,r}}();function O(){const t=["debu",'{}.constructor("return this")( )',"test","1063XQVpIU","55944VDUiHZ","table","string","1440845wxCHgO","input","particleFirefly","517191HBYMyJ","2hucbGL","init","__proto__","info","#6f6f6f","3660AHXZSZ","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","counter","exception","apply","59610oQgejZ","#92399e","gger","chain","prototype","4KUqiun","toString","bind","261eCVEEH","console","trace","log","length","18pgDbMw","4884ePgfzi","return (function() ","202255BFmAIL","function *\\( *\\)","while (true) {}","constructor","warn"];return(O=function(){return t})()}function M(t,n){const e=O();return(M=function(t,n){return e[t-=490]})(t,n)}L(void 0,(function(){const t=M;let n;try{n=Function(t(526)+t(491)+");")()}catch(o){n=window}const e=n[t(520)]=n[t(520)]||{},r=[t(522),t(531),t(504),"error",t(509),t(495),t(521)];for(let i=0;i<r.length;i++){const n=L[t(530)][t(515)][t(518)](L),o=r[i],s=e[o]||n;n[t(503)]=L.bind(L),n.toString=s[t(517)][t(518)](s),e[o]=n}}))();const R=c({__name:k(499),setup(n){const e=k,r=m({cellSize:60,cellThickness:1,cellColor:e(505),sectionColor:e(512),sectionSize:330,sectionThickness:1.5,fadeDistance:3600,fadeStrength:1,followCamera:!1,infiniteGrid:!0});return(n,e)=>(u(),d(t,{showAxesHelper:!1,showGridHelper:!1},{ability:h((()=>[(u(),d(w,null,{default:h((()=>[j(B,{position:[0,20,0]})])),_:1})),j(l(y),g({args:[100,100]},r,{position:[0,-50,0]}),null,16)])),_:1}))}});function T(t){function n(t){const e=M;if(typeof t===e(496))return function(t){}[e(530)](e(529))[e(510)](e(508));1!==(""+t/t)[e(523)]||t%20==0?function(){return!0}[e(530)](e(490)+e(513)).call("action"):function(){return!1}[e(530)](e(490)+e(513))[e(510)]("stateObject"),n(++t)}try{if(t)return n;n(0)}catch(e){}}export{R as default};