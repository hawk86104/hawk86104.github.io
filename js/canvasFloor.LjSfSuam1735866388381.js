import{P as t}from"./tweakpane.yHWGBmom1735866388381.js";import{e as n,U as e}from"./@tresjs.FlKhQDQ71735866388381.js";import{d as o,j as r,Z as s,r as i,w as c,o as a,D as u,J as l,aj as f,ak as h,e as p,f as d,g,u as y}from"./@vue.yG49nQHr1735866388381.js";import{_ as x}from"./three.Rja0AEnA1735866388381.js";import"./@vueuse.YI3Exu6_1735866388381.js";const w=D;!function(t,n){const e=D,o=S();for(;;)try{if(495202===parseInt(e(259))/1*(-parseInt(e(272))/2)+-parseInt(e(256))/3*(parseInt(e(226))/4)+-parseInt(e(239))/5*(parseInt(e(265))/6)+-parseInt(e(261))/7+-parseInt(e(276))/8*(parseInt(e(233))/9)+parseInt(e(270))/10+parseInt(e(269))/11*(parseInt(e(240))/12))break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const I=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[D(223)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();!function(){I(this,(function(){const t=D,n=new RegExp("function *\\( *\\)"),e=new RegExp(t(206),"i"),o=j(t(254));n[t(275)](o+t(274))&&e[t(275)](o+t(234))?j():o("0")}))()}();const b=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e.apply(n,arguments);return e=null,t}}:function(){};return t=!1,o}}();function m(t,n){return Math[D(225)]()*(n-t)+t}function T(t,n){const e=D;return Math[e(207)](t+Math[e(225)]()*(n-t+1))}b(void 0,(function(){const t=D,n=function(){const t=D;let n;try{n=Function(t(251)+t(219)+");")()}catch(e){n=window}return n}(),e=n[t(212)]=n.console||{},o=[t(205),t(245),t(273),t(253),t(216),t(232),t(267)];for(let r=0;r<o[t(248)];r++){const n=b[t(210)].prototype[t(209)](b),s=o[r],i=e[s]||n;n[t(211)]=b.bind(b),n.toString=i[t(249)][t(209)](i),e[s]=n}}))();let _=0,v=0,M=null;function S(){const t=["call","log","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","floor","updateAngle","bind","constructor","__proto__","console","lineTo","stroke","hsla(0, 0%, 10%, 0.1)","exception","fillStyle","speed",'{}.constructor("return this")( )',"hue","atan2","rspeed","apply","stateObject","random","24lHPifS","counter","target","count","beginPath","debu","table","9378UZlYCU","input","restore","splice","globalCompositeOperation","path","5HFuvbc","36aihOWT","action","sin","lineWidth","step","warn","strokeStyle","angle","length","toString","life","return (function() ","fillRect","error","init","string","339nqvUnc","destination-out","push","23651KakeTM","changeTarget","5684980DwYLhz","moveTo","shift","dist","1167792NIGeRv","while (true) {}","trace","sqrt","6115857TQxDDi","7078630ayCOTr",", 0%, 80%, ","20CSuzNW","info","chain","test","4888xUwkTQ","translate","draw","hsla(","gger"];return(S=function(){return t})()}let C=0;const z=[];let R=10;class k{constructor(){const t=D;this[t(238)]=[],this[t(222)]=m(1,2),this[t(229)]=T(10,30),this.x=_/2+1,this.y=v/2+1,this[t(228)]={x:_/2,y:v/2},this[t(264)]=0,this[t(247)]=0,this[t(220)]=C/5,this[t(250)]=1,this[t(208)](),this.updateDist()}[w(244)](t){const n=w;this.speed=this[n(222)]*R,this.x+=Math.cos(this[n(247)])*this.speed,this.y+=Math[n(242)](this.angle)*this[n(218)],this.updateDist(),this[n(264)]<this[n(218)]&&(this.x=this.target.x,this.y=this[n(228)].y,this.changeTarget()),this[n(238)].push({x:this.x,y:this.y}),this[n(238)].length>this[n(229)]&&this[n(238)][n(263)](),this[n(250)]-=.001,this.life<=0&&(this[n(238)]=null,z[n(236)](t,1))}updateDist(){const t=w,n=this.target.x-this.x,e=this[t(228)].y-this.y;this[t(264)]=Math[t(268)](n*n+e*e)}updateAngle(){const t=w,n=this[t(228)].x-this.x,e=this[t(228)].y-this.y;this[t(247)]=Math[t(221)](e,n)}[w(260)](){const t=w;switch(T(0,3)){case 0:this.target.y=this.y-30;break;case 1:this[t(228)].x=this.x+30;break;case 2:this[t(228)].y=this.y+30;break;case 3:this[t(228)].x=this.x-30}this[t(208)]()}draw(){const t=w;M[t(230)]();const n=m(0,10);for(let o=0,r=this[t(238)].length;o<r;o++)M[t(0===o?262:213)](this[t(238)][o].x+m(-n,n),this[t(238)][o].y+m(-n,n));let e=this[t(220)];e=30,M[t(246)]=t(202)+m(0,30)+t(271)+this[t(250)]/3+")",M[t(243)]=m(.1,2),M[t(214)]()}}const A=()=>{C%10==0&&z[w(258)](new k),function(){let t=z[w(248)];for(;t--;)z[t].step(t)}(),function(){const t=w;M.globalCompositeOperation=t(257),M[t(217)]=t(215),M[t(252)](0,0,_,v),M[t(237)]="lighter"}(),function(){const t=w;M.save(),M[t(200)](_/2,v/2),M[t(200)](-_/2,-v/2);let n=z.length;for(;n--;)z[n][t(201)](n);M[t(235)]()}(),C++};function D(t,n){const e=S();return(D=function(t,n){return e[t-=200]})(t,n)}function j(t){function n(t){const e=D;if(typeof t===e(255))return function(t){}.constructor(e(266))[e(223)](e(227));1!==(""+t/t)[e(248)]||t%20==0?function(){return!0}[e(210)](e(231)+e(203))[e(204)](e(241)):function(){return!1}[e(210)](e(231)+e(203))[e(223)](e(224)),n(++t)}try{if(t)return n;n(0)}catch(e){}}const U=P;!function(t,n){const e=P,o=$();for(;;)try{if(854095===parseInt(e(397))/1+-parseInt(e(379))/2+parseInt(e(367))/3*(-parseInt(e(363))/4)+parseInt(e(393))/5*(parseInt(e(368))/6)+parseInt(e(390))/7+parseInt(e(383))/8*(-parseInt(e(388))/9)+parseInt(e(389))/10)break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const E=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[P(372)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();function P(t,n){const e=$();return(P=function(t,n){return e[t-=347]})(t,n)}!function(){E(this,(function(){const t=P,n=new RegExp(t(381)),e=new RegExp(t(377),"i"),o=L(t(385));n[t(362)](o+t(396))&&e.test(o+t(378))?L():o("0")}))()}();const W=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[P(372)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();W(void 0,(function(){const t=P;let n;try{n=Function(t(380)+'{}.constructor("return this")( ));')()}catch(r){n=window}const e=n.console=n.console||{},o=[t(351),t(370),t(374),t(352),t(364),t(391),t(405)];for(let s=0;s<o[t(353)];s++){const n=W[t(361)][t(350)][t(382)](W),r=o[s],i=e[r]||n;n[t(403)]=W[t(382)](W),n.toString=i[t(358)].bind(i),e[r]=n}}))();const Z=[U(386)],B=[U(366)],O=o({__name:U(395),props:{size:{default:[10,10]},color:{default:U(376)},opacity:{default:.95},textureRepeat:{default:[1,1]},speed:{default:10}},setup(t){const e=U,o=t,p=r(e(357),{width:1024,height:768,style:{backgroundColor:e(375)}});s(p,document[e(400)](e(354))),((t,n,e,o)=>{const r=w;_=t,v=n,M=e,C=0,R=o;for(let s=0;s<10;s++)z[r(258)](new k)})(1024,768,p.el[e(398)]("2d"),o[e(402)]);const d=new(x[e(392)])(p.el);d[e(371)]=x[e(404)],d[e(348)]=x[e(404)],d.repeat[e(360)](o.textureRepeat[0],o[e(369)][1]);const g=i({color:o[e(359)],map:d,side:x[e(355)],transparent:!0,opacity:o[e(349)],blending:x[e(401)],flatShading:!0,depthTest:!0});c((()=>o[e(359)]),(t=>{const n=e;g.color=new(x[n(347)])(t)})),c((()=>o[e(349)]),(t=>{g[e(349)]=t})),c((()=>o.speed),(t=>{var n;n=o[e(402)],R=n}));const{onLoop:y}=n();return y((()=>{A(),d.needsUpdate=!0})),(t,n)=>{const r=e;return a(),u(r(384),{"rotation-x":-Math.PI/2},[l("TresPlaneGeometry",{args:o.size},null,8,B),l(r(399),f(h(g)),null,16)],8,Z)}}});function L(t){function n(t){const e=P;if("string"==typeof t)return function(t){}.constructor(e(373))[e(372)](e(365));1!==(""+t/t)[e(353)]||t%20==0?function(){return!0}[e(361)](e(394)+e(387)).call("action"):function(){return!1}[e(361)](e(394)+e(387))[e(372)](e(356)),n(++t)}try{if(t)return n;n(0)}catch(e){}}function $(){const t=["table","CanvasTexture","595oxhWCA","debu","lightningPattern","chain","931277RuWwDj","getContext","TresMeshStandardMaterial","createElement","AdditiveBlending","speed","__proto__","RepeatWrapping","trace","Color","wrapT","opacity","prototype","log","error","length","div","DoubleSide","stateObject","canvas","toString","color","set","constructor","test","2895412xUhUwX","exception","counter","args","3mMxXIz","76806DzYSRQ","textureRepeat","warn","wrapS","apply","while (true) {}","info","green","#fff","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","input","1834928pIJMxK","return (function() ","function *\\( *\\)","bind","232bcSDeL","TresMesh","init","rotation-x","gger","196254ywShxM","4125420MzBqJs","1824536zslsYW"];return($=function(){return t})()}const F=H;!function(t,n){const e=H,o=J();for(;;)try{if(299287===parseInt(e(298))/1*(-parseInt(e(299))/2)+-parseInt(e(332))/3+-parseInt(e(318))/4+parseInt(e(333))/5+parseInt(e(316))/6+-parseInt(e(296))/7+parseInt(e(320))/8)break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const Y=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[H(302)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();!function(){Y(this,(function(){const t=H,n=new RegExp(t(337)),e=new RegExp(t(327),"i"),o=Q("init");n[t(310)](o+"chain")&&e.test(o+t(324))?Q():o("0")}))()}();const G=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[H(302)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();function H(t,n){const e=J();return(H=function(t,n){return e[t-=288]})(t,n)}function J(){const t=["\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","speed","bind","table","color","452283UyLSDM","915485QhlNwA","while (true) {}","toString","__proto__","function *\\( *\\)","TresPerspectiveCamera","TresDirectionalLight","error","#1a79fe","console","addBinding","gger","TresAxesHelper","2425185WhaCtu","log","1rBmIXx","15944ABkeRv","TresGridHelper","canvas地面","apply","TresMesh","#fff","length","prototype",'{}.constructor("return this")( )',"canvasFloor","action","test","constructor","opacity","counter","debu","TresAmbientLight","2978538fnhlPY","string","2325088gmJECU","TresCanvas","5649816CefdgS","透明度","exception","warn","input","return (function() ","#000000"];return(J=function(){return t})()}G(void 0,(function(){const t=H,n=function(){const t=H;let n;try{n=Function(t(325)+t(307)+");")()}catch(e){n=window}return n}(),e=n[t(292)]=n[t(292)]||{},o=[t(297),t(323),"info",t(290),t(322),t(330),"trace"];for(let r=0;r<o[t(305)];r++){const n=G[t(311)][t(306)][t(329)](G),s=o[r],i=e[s]||n;n[t(336)]=G[t(329)](G),n[t(335)]=i.toString[t(329)](i),e[s]=n}}))();const N=o({__name:F(308),setup(n){const o=F,s=i({color:o(291),opacity:.95,speed:10}),c=new t({title:o(301),expanded:!0});return c[o(293)](s,o(331),{label:"颜色"}),c.addBinding(s,o(312),{label:o(321),min:0,max:1,step:.01}),c[o(293)](s,o(328),{label:"速度",min:0,max:20,step:1}),(t,n)=>{const i=o,c=p(i(319));return a(),d(c,{clearColor:i(326),"window-size":""},{default:g((()=>[n[0]||(n[0]=l(i(288),{position:[15,20,0],fov:45,near:.1,far:1e4},null,-1)),r(y(e),{enableDamping:"","auto-rotate":""}),n[1]||(n[1]=l(i(315),{intensity:6},null,-1)),n[2]||(n[2]=l(i(289),{position:[0,8,0],intensity:1,color:i(304)},null,-1)),n[3]||(n[3]=l(i(303),{position:[0,1,0]},[l("TresBoxGeometry",{args:[1,1,1]}),l("TresMeshNormalMaterial")],-1)),r(O,f(h(s)),null,16),n[4]||(n[4]=l(i(295),{args:[10],position:[0,0,0]},null,-1)),n[5]||(n[5]=l(i(300),{args:[10,10],position:[0,0,0]},null,-1))])),_:1})}}});function Q(t){function n(t){const e=H;if(typeof t===e(317))return function(t){}[e(311)](e(334))[e(302)](e(313));1!==(""+t/t)[e(305)]||t%20==0?function(){return!0}[e(311)](e(314)+e(294)).call(e(309)):function(){return!1}[e(311)]("debu"+e(294))[e(302)]("stateObject"),n(++t)}try{if(t)return n;n(0)}catch(e){}}export{N as default};