import{_ as t}from"./cubeMesh.vue_vue_type_script_setup_true_lang.vb70zPs21730883607874.js";import{a0 as n,_ as o,C as e}from"./three.fIUcjaNz1730883607874.js";import{e as r}from"./@tresjs.C3WO4ZW41730883607874.js";import"./index.CVieFNGr1730883607874.js";import{g as i}from"./gsap.BMhr3K_w1730883607874.js";import{d as u,b as c,w as s,o as a,D as f,q as l,j as p}from"./@vue.Cfu43fwq1730883607874.js";import{T as d,_ as g}from"./three-mesh-ui.module.CnYVgkR-1730883607874.js";const h=I;function m(){const t=["title","contenttitle","backgroundMaterial","backgroundColor","fontColor","1613298YXdvoB","apply","tgroup","info","number","left","192130lHJUJt","warn","function *\\( *\\)","init","height","border-box","exception","7207184XsFdhW","action","annotationMeshUI","center","console","5004KLYIFd","__proto__","floor","debu","counter","threeMeshUIUpdate","call","circ.out","#ffffff","content","超过：","trace","DoubleSide","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","5HPTQrJ","depthWrite","福田区","input","962838QpzvxN","size","depthTest","2324gDztmd","bind","renderOrder","string","text","table","174219cJRHTs","gger",'{}.constructor("return this")( )',"set","scale","value","length","toString","position","Color","110tWObmK","2207352TxVTMb","log","prototype","add","fontSize","test","Text","constructor","marginTop","Inline","marginLeft"];return(m=function(){return t})()}!function(t,n){const o=I,e=m();for(;;)try{if(661503===-parseInt(o(501))/1+parseInt(o(462))/2+parseInt(o(474))/3*(parseInt(o(495))/4)+-parseInt(o(488))/5*(parseInt(o(456))/6)+parseInt(o(440))/7+parseInt(o(469))/8+-parseInt(o(492))/9*(parseInt(o(511))/10))break;e.push(e.shift())}catch(r){e.push(e.shift())}}();const b=function(){let t=!0;return function(n,o){const e=t?function(){if(o){const t=o[I(457)](n,arguments);return o=null,t}}:function(){};return t=!1,e}}();!function(){b(this,(function(){const t=I,n=new RegExp(t(464)),o=new RegExp(t(487),"i"),e=_(t(465));n[t(445)](e+"chain")&&o[t(445)](e+t(491))?_():e("0")}))()}();const x=function(){let t=!0;return function(n,o){const e=t?function(){if(o){const t=o[I(457)](n,arguments);return o=null,t}}:function(){};return t=!1,e}}();x(void 0,(function(){const t=I;let n;try{n=Function("return (function() "+t(503)+");")()}catch(r){n=window}const o=n[t(473)]=n[t(473)]||{},e=[t(441),t(463),t(459),"error",t(468),t(500),t(485)];for(let i=0;i<e.length;i++){const n=x[t(447)][t(442)].bind(x),r=e[i],u=o[r]||n;n[t(475)]=x[t(496)](x),n[t(508)]=u[t(508)][t(496)](u),o[r]=n}}))();const y=["position",h(505)],z=u({__name:h(471),props:{size:{default:1},height:{default:10},fontColor:{default:h(482)},backgroundColor:{default:"#000000"},text:{default:{title:h(490),number:52426,contenttitle:h(484),content:"66%"}},fontSize:{default:1.2},marginTop:{default:0},marginLeft:{default:0},threeMeshUIUpdate:{type:Boolean,default:!1}},setup(t,{expose:u}){const l=h,p=t,m=c();s((()=>m[l(506)]),(t=>{t&&t[l(443)](z)}));const b=c(.01),x=c(0),z=new(d[l(446)])({padding:p[l(444)]/2,width:7*p.fontSize,fontSize:p.fontSize,fontFamily:"./plugins/UIdemo/fonts/msdf/regular.json",fontTexture:"./plugins/UIdemo/fonts/msdf/regular.png",boxSizing:l(467),justifyContent:l(472),textAlign:l(461),borderRadius:[0,1,1,0],fontSide:n,backgroundSide:o[l(486)],color:p[l(455)],backgroundColor:p.backgroundColor,opacity:b[l(506)]});z[l(497)]=9999999999,z[l(453)][l(489)]=!1,z[l(453)][l(494)]=!0,z[l(509)][l(504)](p.fontSize/2+p[l(450)]*p[l(493)],2.3*-p[l(444)]+p.marginTop*p.size,0),z[l(443)](new(d[l(449)])({fontFamily:"./plugins/digitalMapBlock/font/province-msdf.json",fontTexture:"./plugins/digitalMapBlock/font/province.png",textContent:p[l(499)][l(451)]+"\n"}));const I=new(d[l(449)])({fontSize:1.2*p[l(444)],textContent:"0000\n"});z[l(443)](I),z[l(443)](new(d[l(449)])({fontFamily:"./plugins/digitalMapBlock/font/custom-msdf.json",fontTexture:"./plugins/digitalMapBlock/font/custom.png",fontSize:.8*p.fontSize,textContent:""+p.text[l(452)]})),z[l(443)](new(d[l(449)])({fontSize:.8*p[l(444)],textContent:""+p[l(499)][l(483)]})),s((()=>[p[l(455)],p[l(454)],p[l(493)],b.value,p[l(448)],p[l(450)]]),(([t,n,r,i,u,c])=>{const s=l;z[s(504)]({color:new(o[s(510)])(t),backgroundColor:new e(n),backgroundOpacity:i}),z[s(509)][s(504)](p[s(444)]/2+c*r,2.3*-p[s(444)]+u*r,0)}));const{onLoop:_}=r();return _((()=>{p[l(479)]&&g()})),u({playFunc:(t=0)=>{const n=l;x[n(506)]=0,i.to(x,{value:p.text[n(460)],duration:1,delay:t,ease:n(481),onUpdate:()=>{const t=n;x[t(506)]=Math[t(476)](x[t(506)]),I[t(504)]({textContent:x[t(506)]+"\n"})}}),b[n(506)]=.01,i.to(b,{value:.36,duration:1,delay:t,ease:n(481)})}}),(t,n)=>{const o=l;return a(),f("TresGroup",{ref_key:o(458),ref:m,position:[3.5*t.fontSize*t[o(493)],t[o(466)],0],scale:t[o(493)]},null,8,y)}}});function I(t,n){const o=m();return(I=function(t,n){return o[t-=440]})(t,n)}function _(t){function n(t){const o=I;if(typeof t===o(498))return function(t){}[o(447)]("while (true) {}")[o(457)](o(478));1!==(""+t/t)[o(507)]||t%20==0?function(){return!0}[o(447)]("debugger")[o(480)](o(470)):function(){return!1}.constructor(o(477)+o(502))[o(457)]("stateObject"),n(++t)}try{if(t)return n;n(0)}catch(o){}}const C=k;!function(t,n){const o=k,e=j();for(;;)try{if(591989===-parseInt(o(277))/1+-parseInt(o(272))/2+-parseInt(o(297))/3+parseInt(o(268))/4+-parseInt(o(308))/5*(parseInt(o(317))/6)+parseInt(o(276))/7*(parseInt(o(269))/8)+-parseInt(o(278))/9*(-parseInt(o(273))/10))break;e.push(e.shift())}catch(r){e.push(e.shift())}}();const w=function(){let t=!0;return function(n,o){const e=t?function(){if(o){const t=o[k(266)](n,arguments);return o=null,t}}:function(){};return t=!1,e}}();function k(t,n){const o=j();return(k=function(t,n){return o[t-=264]})(t,n)}!function(){w(this,(function(){const t=k,n=new RegExp(t(300)),o=new RegExp(t(267),"i"),e=v(t(304));n[t(288)](e+"chain")&&o[t(288)](e+t(294))?v():e("0")}))()}();const S=function(){let t=!0;return function(n,o){const e=t?function(){if(o){const t=o[k(266)](n,arguments);return o=null,t}}:function(){};return t=!1,e}}();S(void 0,(function(){const t=k,n=function(){let t;try{t=Function('return (function() {}.constructor("return this")( ));')()}catch(n){t=window}return t}(),o=n[t(290)]=n[t(290)]||{},e=[t(296),t(264),t(295),"error",t(311),t(301),t(285)];for(let r=0;r<e[t(314)];r++){const n=S.constructor[t(306)][t(312)](S),i=e[r],u=o[i]||n;n[t(289)]=S[t(312)](S),n[t(309)]=u[t(309)][t(312)](u),o[i]=n}}))();const T=u({__name:"indexMeshUI",props:{size:{default:1},height:{default:10},color:{default:C(279)},fontColor:{default:C(299)},backgroundColor:{default:C(293)},text:{default:{title:C(292),number:52426,contenttitle:"超过：",content:C(271)}},fontSize:{default:1.2},delay:{default:.1},marginTop:{default:0},marginLeft:{default:0}},setup(n,{expose:o}){const e=C,r=n,u=c(.1),d=c(null);s((()=>r[e(315)]),(t=>{u[e(265)]=t})),l((()=>{g()}));const g=()=>{const t=e;u[t(265)]=.1,i.to(u,{value:r[t(315)],duration:1,delay:r[t(270)],ease:"circ.out"}),d[t(265)][t(286)](r[t(270)])};return o({playFunc:g}),(n,o)=>{const r=e;return a(),f(r(287),null,[p(t,{height:u.value,size:n[r(284)],color:n[r(313)]},null,8,["height","size",r(313)]),p(z,{ref_key:r(275),ref:d,height:u[r(265)],fontColor:n.fontColor,backgroundColor:n[r(291)],marginTop:n[r(274)],marginLeft:n.marginLeft,size:n[r(284)],text:n.text,fontSize:n[r(280)]},null,8,[r(315),"fontColor","backgroundColor",r(274),"marginLeft","size",r(283),r(280)])])}}});function j(){const t=["annotationMeshUIRef","606921oQtAAo","311184GLtlPJ","5777019hyfSHf","#efef11","fontSize","string","gger","text","size","trace","playFunc","TresGroup","test","__proto__","console","backgroundColor","江苏省","#000000","input","info","log","2689293fQwTXX","action","#ffffff","function *\\( *\\)","table","stateObject","constructor","init","debu","prototype","call","195qSWatJ","toString","counter","exception","bind","color","length","height","while (true) {}","154914kTOJWk","warn","value","apply","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","2384988YnVCLK","8MOMwJg","delay","66%","2171720nFTgia","50KMHLTd","marginTop"];return(j=function(){return t})()}function v(t){function n(t){const o=k;if(typeof t===o(281))return function(t){}[o(303)](o(316))[o(266)](o(310));1!==(""+t/t)[o(314)]||t%20==0?function(){return!0}[o(303)](o(305)+o(282))[o(307)](o(298)):function(){return!1}[o(303)](o(305)+"gger")[o(266)](o(302)),n(++t)}try{if(t)return n;n(0)}catch(o){}}export{T as _};