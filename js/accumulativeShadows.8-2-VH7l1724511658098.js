import{a9 as t,C as n}from"./three.6cxCQsIj1724511658098.js";import{d as e,x as s}from"./@tresjs.6SjGVF2a1724511658098.js";import{a as o}from"./index.HtCYeuim1724511658098.js";import{P as r}from"./tweakpane.yHWGBmom1724511658098.js";import{_ as a}from"./accumulativeShadowsCom.vue_vue_type_script_setup_true_lang.LfHpSqls1724511658098.js";import{d as i,r as c,X as u,a1 as p,o as l,f as m,g as f,j as d,u as h,aj as g,ak as b,al as j,m as w,J as y}from"./@vue.Q1VpS3901724511658098.js";import"./@vueuse.rsVLbIR91724511658098.js";import"./three-stdlib.eSyESjZu1724511658098.js";import"./@pmndrs.ZvP486_R1724511658098.js";import"./object-hash.Ic9VzAZ81724511658098.js";import"./@amap.T3VNXNvb1724511658098.js";import"./jszip.GTkatbFy1724511658098.js";const x=_;function _(t,n){const e=P();return(_=function(t,n){return e[t-=382]})(t,n)}!function(t,n){const e=_,s=P();for(;;)try{if(251084===parseInt(e(435))/1*(parseInt(e(400))/2)+parseInt(e(413))/3+parseInt(e(444))/4*(-parseInt(e(420))/5)+-parseInt(e(389))/6*(parseInt(e(427))/7)+-parseInt(e(446))/8*(parseInt(e(386))/9)+-parseInt(e(432))/10*(-parseInt(e(431))/11)+-parseInt(e(410))/12)break;s.push(s.shift())}catch(o){s.push(s.shift())}}();const v=function(){let t=!0;return function(n,e){const s=t?function(){if(e){const t=e[_(433)](n,arguments);return e=null,t}}:function(){};return t=!1,s}}();!function(){v(this,(function(){const t=_,n=new RegExp(t(397)),e=new RegExp(t(430),"i"),s=W(t(422));n.test(s+t(429))&&e[t(424)](s+t(393))?W():s("0")}))()}();const I=function(){let t=!0;return function(n,e){const s=t?function(){if(e){const t=e.apply(n,arguments);return e=null,t}}:function(){};return t=!1,s}}();I(void 0,(function(){const t=_,n=function(){const t=_;let n;try{n=Function(t(438)+t(439)+");")()}catch(e){n=window}return n}(),e=n[t(394)]=n[t(394)]||{},s=[t(390),t(391),"info",t(418),t(399),t(447),"trace"];for(let o=0;o<s[t(419)];o++){const n=I[t(417)][t(408)].bind(I),r=s[o],a=e[r]||n;n.__proto__=I[t(383)](I),n[t(406)]=a[t(406)].bind(a),e[r]=n}}))();const T=y("TresPerspectiveCamera",{position:[2,3,4],fov:45,near:1,far:1e3},null,-1),z=y(x(411),{intensity:.5},null,-1),k=y("TresMesh",{position:[2,.5,-1.5],"receive-shadow":"","cast-shadow":"",name:x(415)},[y("TresSphereGeometry",{args:[.5]}),y(x(387),{color:16724991,roughness:0,metalness:1})],-1),M=y(x(421),{position:[-1.5,.5,1.5],"receive-shadow":"","cast-shadow":"",name:x(440)},[y("TresCylinderGeometry",{args:[.5,.5,1]}),y(x(387),{color:3407871,roughness:0,metalness:0})],-1),S=y("TresMesh",{position:[0,.9,0],"receive-shadow":"","cast-shadow":"",name:"torus"},[y(x(382),{args:[.5,.2,80,64]}),y(x(387),{color:16777011,roughness:.3,metalness:.5})],-1);function P(){const t=["string","1083645toIdpj","addBinding","sphere","action","constructor","error","length","11525WsZLxV","TresMesh","init","光源位置","test","scene","neg-x.jpg","1052261ikYSMr","color","chain","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","12177evymTN","3490VQHylA","apply","neg-y.jpg","1jvuQWX","pos-z.jpg","tcRef","return (function() ",'{}.constructor("return this")( )',"cube","https://opensource-1314935952.cos.ap-nanjing.myqcloud.com/images/skyBox/6jpg/","frames","background","140loYzRv","blendWindow","2832dWsxoc","table","TresTorusKnotGeometry","bind","颜色混合","stateObject","1314QKFFSe","TresMeshStandardMaterial","value","6FUHumG","log","warn","grey","input","console","透明度","counter","function *\\( *\\)","#000000","exception","122142uqPPlK","opacity","debu","neg-z.jpg","lightPosition","渲染帧数","toString","gger","prototype","ambient","3298356cvrzNw","TresAmbientLight"];return(P=function(){return t})()}const R=i({__name:"accumulativeShadows",setup(i){const y=x,v=c({alpha:!0,shadows:!0,shadowMap:!0,toneMapping:t}),I=c({enableDamping:!0,autoRotate:!1}),P=u();p((()=>{const t=_;if(P[t(388)]){P[t(388)].context[t(425)][t(388)][t(443)]=new n(t(392))}}));const R=c({opacity:.8,alphaTest:.9,color:y(398),blend:2,lightPosition:{x:3,y:5,z:3},frames:60,blendWindow:100,ambient:.5}),W=new r({title:"参数"});return W[y(414)](R,y(401),{label:y(395),min:0,max:1,step:.1}),W[y(414)](R,"alphaTest",{label:"透明检测",min:0,max:1,step:.1}),W[y(414)](R,y(428),{label:"颜色"}),W[y(414)](R,"blend",{label:y(384),min:0,max:3,step:.1}),W.addBinding(R,y(404),{label:y(423),x:{min:-5,max:5},y:{min:1,max:5},z:{min:-5,max:5}}),W[y(414)](R,y(442),{label:y(405),min:1,max:100,step:1}),W[y(414)](R,y(445),{label:"blend",min:1,max:100,step:1}),W[y(414)](R,y(409),{label:y(409),min:0,max:1,step:.1}),(t,n)=>{const r=y;return l(),m(h(s),w(v,{ref_key:r(437),ref:P,"window-size":""}),{default:f((()=>[T,d(h(e),g(b(I)),null,16),z,k,M,S,d(a,g(b(R)),null,16),(l(),m(j,null,{default:f((()=>[d(h(o),{files:["pos-x.jpg",r(426),"pos-y.jpg",r(434),r(436),r(403)],path:r(441)})])),_:1}))])),_:1},16)}}});function W(t){function n(t){const e=_;if(typeof t===e(412))return function(t){}[e(417)]("while (true) {}")[e(433)](e(396));1!==(""+t/t)[e(419)]||t%20==0?function(){return!0}[e(417)]("debu"+e(407)).call(e(416)):function(){return!1}[e(417)](e(402)+e(407))[e(433)](e(385)),n(++t)}try{if(t)return n;n(0)}catch(e){}}export{R as default};