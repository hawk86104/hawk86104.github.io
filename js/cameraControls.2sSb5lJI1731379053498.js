import{P as t}from"./tweakpane.yHWGBmom1731379053498.js";import{k as n}from"./@tresjs.bLKO3xyw1731379053498.js";import{bU as o,ak as e,am as r,h as a}from"./three.bXjbKLxC1731379053498.js";import{d as s,r as i,X as l,e as u,o as c,f,g as d,J as p,j as h,u as m,m as v}from"./@vue.-THQH3GC1731379053498.js";import"./@vueuse.DWZrQ1Sl1731379053498.js";const g=b;!function(t,n){const o=b,e=x();for(;;)try{if(103942===-parseInt(o(247))/1*(-parseInt(o(256))/2)+parseInt(o(203))/3*(parseInt(o(209))/4)+parseInt(o(235))/5*(parseInt(o(263))/6)+-parseInt(o(220))/7+-parseInt(o(213))/8+parseInt(o(229))/9+-parseInt(o(215))/10)break;e.push(e.shift())}catch(r){e.push(e.shift())}}();const y=function(){let t=!0;return function(n,o){const e=t?function(){if(o){const t=o[b(266)](n,arguments);return o=null,t}}:function(){};return t=!1,e}}();!function(){y(this,(function(){const t=b,n=new RegExp("function *\\( *\\)"),o=new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","i"),e=j(t(264));n.test(e+t(268))&&o[t(250)](e+t(236))?j():e("0")}))()}();const w=function(){let t=!0;return function(n,o){const e=t?function(){if(o){const t=o.apply(n,arguments);return o=null,t}}:function(){};return t=!1,e}}();function x(){const t=["1356215fugvOS","toString","dolly","instance","click","addBinding","return (function() ","gger","while (true) {}","136881mQRfWK","value","TresAmbientLight","TresPerspectiveCamera","orange","console","3255dLqIQr","input","TresCanvas","distance","Rotate theta 45°","DEG2RAD","addFolder","trace","最大距离","length","最小距离","table","2YgFpWL","rotate","constructor","test","(-1)","start",'{}.constructor("return this")( )',"controlsRef","end","122102oXFxMk","minDistance","TresBoxGeometry","距离参数","Rotate theta -90°","exception","bind","1782AWfnaK","init","change","apply","#82DBC5","chain","cameraControls","Rotate phi 20°","stateObject","log","prototype","3QyGBqu","call","对焦到 box of the mesh","info","error","string","581536AOrkKo","debu","(+1)","TresMesh","786560hStTmw","Rotate theta 360°","800350jUKgtj","warn","counter","addButton","action"];return(x=function(){return t})()}function b(t,n){const o=x();return(b=function(t,n){return o[t-=198]})(t,n)}w(void 0,(function(){const t=b,n=function(){const t=b;let n;try{n=Function(t(226)+t(253)+");")()}catch(o){n=window}return n}(),o=n[t(234)]=n.console||{},e=[t(201),t(216),t(206),t(207),t(261),t(246),t(242)];for(let r=0;r<e.length;r++){const n=w[t(249)][t(202)][t(262)](w),a=e[r],s=o[a]||n;n.__proto__=w[t(262)](w),n[t(221)]=s[t(221)][t(262)](s),o[a]=n}}))();const R=s({__name:g(198),setup(s){const y=g,w={clearColor:y(267),shadows:!0,alpha:!1,shadowMapType:o,outputColorSpace:e,toneMapping:r},x=i({distance:5,minDistance:0,maxDistance:100}),b=l(),R=l(),j=new t,k=j.addFolder({title:y(259)});k.addBinding(x,y(238),{label:"设置距离",step:.01,min:0,max:100}),k[y(225)](x,y(257),{label:y(245),step:.01,min:0,max:10}),k[y(225)](x,"maxDistance",{label:y(243),step:.01,min:0,max:100});const B=j.addFolder({title:"远近"});B.addButton({title:y(211)}).on(y(224),(()=>{var t,n;const o=y;null==(n=null==(t=null==b?void 0:b[o(230)])?void 0:t[o(223)])||n.dolly(1,!0)})),B[y(218)]({title:y(251)}).on(y(224),(()=>{var t,n;const o=y;null==(n=null==(t=null==b?void 0:b[o(230)])?void 0:t[o(223)])||n[o(222)](-1,!0)}));const D=j[y(241)]({title:"旋转"});D[y(218)]({title:y(239)}).on(y(224),(()=>{var t,n;const o=y;null==(n=null==(t=null==b?void 0:b.value)?void 0:t[o(223)])||n[o(248)](45*a[o(240)],0,!0)})),D[y(218)]({title:y(260)}).on("click",(()=>{var t,n;const o=y;null==(n=null==(t=null==b?void 0:b.value)?void 0:t[o(223)])||n[o(248)](-90*a[o(240)],0,!0)})),D.addButton({title:y(214)}).on(y(224),(()=>{var t,n;const o=y;null==(n=null==(t=null==b?void 0:b[o(230)])?void 0:t.instance)||n[o(248)](360*a.DEG2RAD,0,!0)})),D[y(218)]({title:y(199)}).on(y(224),(()=>{var t,n;const o=y;null==(n=null==(t=null==b?void 0:b[o(230)])?void 0:t[o(223)])||n[o(248)](0,20*a.DEG2RAD,!0)}));function I(){const t=y;console[t(201)](t(265))}function _(){const t=y;console[t(201)](t(252))}function T(){const t=y;console[t(201)](t(255))}return j[y(241)]({title:"移动"}).addButton({title:y(205)}).on(y(224),(()=>{var t,n;const o=y;null==(n=null==(t=null==b?void 0:b[o(230)])?void 0:t[o(223)])||n.fitToBox(R.value,!0)})),(t,o)=>{const e=y,r=u(e(237));return c(),f(r,v(w,{"window-size":""}),{default:d((()=>[o[1]||(o[1]=p(e(232),{position:[5,5,5]},null,-1)),h(m(n),v(x,{ref_key:e(254),ref:b,"make-default":"",onChange:I,onStart:_,onEnd:T}),null,16),o[2]||(o[2]=p("TresGridHelper",{position:[0,-1,0]},null,-1)),p(e(212),{ref_key:"boxMeshRef",ref:R},o[0]||(o[0]=[p(e(258),{args:[2,2,2]},null,-1),p("TresMeshBasicMaterial",{color:e(233),wireframe:""},null,-1)]),512),o[3]||(o[3]=p(e(231),{intensity:1},null,-1))])),_:1},16)}}});function j(t){function n(t){const o=b;if(typeof t===o(208))return function(t){}[o(249)](o(228))[o(266)](o(217));1!==(""+t/t)[o(244)]||t%20==0?function(){return!0}.constructor(o(210)+"gger")[o(204)](o(219)):function(){return!1}[o(249)]("debu"+o(227)).apply(o(200)),n(++t)}try{if(t)return n;n(0)}catch(o){}}export{R as default};