import{P as t}from"./tweakpane.yHWGBmom1734746792122.js";import{e as n,U as e}from"./@tresjs.vA_UT8oy1734746792122.js";import{d as r,j as o,Z as s,r as i,w as c,o as a,D as u,J as l,aj as f,ak as p,e as h,f as d,g,u as y}from"./@vue.-THQH3GC1734746792122.js";import{_ as x}from"./three.1FILWcBb1734746792122.js";import"./@vueuse.lqJslAkC1734746792122.js";const I=m;!function(t,n){const e=m,r=T();for(;;)try{if(363823===-parseInt(e(542))/1*(parseInt(e(553))/2)+-parseInt(e(496))/3*(-parseInt(e(536))/4)+parseInt(e(490))/5+-parseInt(e(544))/6*(parseInt(e(508))/7)+parseInt(e(550))/8*(parseInt(e(529))/9)+parseInt(e(499))/10*(parseInt(e(513))/11)+parseInt(e(524))/12*(-parseInt(e(532))/13))break;r.push(r.shift())}catch(o){r.push(r.shift())}}();const b=function(){let t=!0;return function(n,e){const r=t?function(){if(e){const t=e.apply(n,arguments);return e=null,t}}:function(){};return t=!1,r}}();!function(){b(this,(function(){const t=m,n=new RegExp(t(506)),e=new RegExp(t(509),"i"),r=E(t(557));n[t(489)](r+t(548))&&e[t(489)](r+t(494))?E():r("0")}))()}();const w=function(){let t=!0;return function(n,e){const r=t?function(){if(e){const t=e[m(540)](n,arguments);return e=null,t}}:function(){};return t=!1,r}}();function m(t,n){const e=T();return(m=function(t,n){return e[t-=489]})(t,n)}function _(t,n){return Math[m(562)]()*(n-t)+t}function T(){const t=["apply","string","1WMifyn","length","48ydpViL","counter","exception","life","chain","moveTo","1046648rJaolA","info","floor","189746kufkOD",'{}.constructor("return this")( )',"destination-out","lineTo","init","debu","path","constructor","gger","random","test","3468935XKoinX","lineWidth","updateDist","angle","input","hsla(0, 0%, 10%, 0.1)","213DyTwld","lighter","beginPath","490yoZnLN","save","changeTarget","dist","trace","speed","error","function *\\( *\\)","atan2","420987qMISTy","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","fillRect","step","cos","13035eXpCqH","console","log","fillStyle","restore","globalCompositeOperation","action","updateAngle","count","sqrt","while (true) {}","888CAFini","hsla(","strokeStyle","draw",", 0%, 80%, ","9PAgXdz","target","shift","116051KmveAN","stateObject","hue","sin","40436MLsJbY","translate","bind","push"];return(T=function(){return t})()}function v(t,n){return Math[m(552)](t+Math.random()*(n-t+1))}w(void 0,(function(){const t=m,n=function(){const t=m;let n;try{n=Function("return (function() "+t(554)+");")()}catch(e){n=window}return n}(),e=n[t(514)]=n[t(514)]||{},r=[t(515),"warn",t(551),t(505),t(546),"table",t(503)];for(let o=0;o<r[t(543)];o++){const n=w[t(560)].prototype[t(538)](w),s=r[o],i=e[s]||n;n.__proto__=w[t(538)](w),n.toString=i.toString[t(538)](i),e[s]=n}}))();let A=0,M=0,R=null;let k=0;const z=[];let S=10;class j{constructor(){const t=m;this[t(559)]=[],this.rspeed=_(1,2),this[t(521)]=v(10,30),this.x=A/2+1,this.y=M/2+1,this[t(530)]={x:A/2,y:M/2},this[t(502)]=0,this[t(493)]=0,this[t(534)]=k/5,this[t(547)]=1,this[t(520)](),this[t(492)]()}[I(511)](t){const n=I;this[n(504)]=this.rspeed*S,this.x+=Math[n(512)](this.angle)*this[n(504)],this.y+=Math[n(535)](this.angle)*this[n(504)],this[n(492)](),this[n(502)]<this[n(504)]&&(this.x=this.target.x,this.y=this[n(530)].y,this[n(501)]()),this[n(559)][n(539)]({x:this.x,y:this.y}),this[n(559)][n(543)]>this[n(521)]&&this.path[n(531)](),this.life-=.001,this.life<=0&&(this[n(559)]=null,z.splice(t,1))}[I(492)](){const t=I,n=this.target.x-this.x,e=this[t(530)].y-this.y;this[t(502)]=Math[t(522)](n*n+e*e)}[I(520)](){const t=I,n=this[t(530)].x-this.x,e=this[t(530)].y-this.y;this[t(493)]=Math[t(507)](e,n)}[I(501)](){const t=I;switch(v(0,3)){case 0:this.target.y=this.y-30;break;case 1:this.target.x=this.x+30;break;case 2:this.target.y=this.y+30;break;case 3:this[t(530)].x=this.x-30}this[t(520)]()}[I(527)](){const t=I;R[t(498)]();const n=_(0,10);for(let r=0,o=this.path[t(543)];r<o;r++)R[t(0===r?549:556)](this[t(559)][r].x+_(-n,n),this[t(559)][r].y+_(-n,n));let e=this[t(534)];e=30,R[t(526)]=t(525)+_(0,30)+t(528)+this[t(547)]/3+")",R[t(491)]=_(.1,2),R.stroke()}}const C=()=>{k%10==0&&z[I(539)](new j),function(){let t=z[I(543)];for(;t--;)z[t].step(t)}(),function(){const t=I;R[t(518)]=t(555),R[t(516)]=t(495),R[t(510)](0,0,A,M),R[t(518)]=t(497)}(),function(){const t=I;R[t(500)](),R.translate(A/2,M/2),R[t(537)](-A/2,-M/2);let n=z[t(543)];for(;n--;)z[n][t(527)](n);R[t(517)]()}(),k++};function E(t){function n(t){const e=m;if(typeof t===e(541))return function(t){}[e(560)](e(523))[e(540)](e(545));1!==(""+t/t)[e(543)]||t%20==0?function(){return!0}[e(560)](e(558)+e(561)).call(e(519)):function(){return!1}[e(560)](e(558)+"gger")[e(540)](e(533)),n(++t)}try{if(t)return n;n(0)}catch(e){}}const P=L;!function(t,n){const e=L,r=F();for(;;)try{if(828616===parseInt(e(144))/1+-parseInt(e(122))/2*(-parseInt(e(134))/3)+-parseInt(e(135))/4*(-parseInt(e(143))/5)+parseInt(e(113))/6+-parseInt(e(119))/7+-parseInt(e(123))/8+-parseInt(e(146))/9)break;r.push(r.shift())}catch(o){r.push(r.shift())}}();const Z=function(){let t=!0;return function(n,e){const r=t?function(){if(e){const t=e.apply(n,arguments);return e=null,t}}:function(){};return t=!1,r}}();!function(){Z(this,(function(){const t=L,n=new RegExp(t(140)),e=new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","i"),r=X("init");n[t(160)](r+"chain")&&e[t(160)](r+"input")?X():r("0")}))()}();const D=function(){let t=!0;return function(n,e){const r=t?function(){if(e){const t=e[L(139)](n,arguments);return e=null,t}}:function(){};return t=!1,r}}();function F(){const t=["5QRJcci","1606013likRdS","createElement","5985792zOpROO","args","AdditiveBlending","RepeatWrapping","CanvasTexture","size","table","call","div","console","trace","length","toString","stateObject","test","counter","color","prototype","set","repeat","needsUpdate","4712436IaVATD","green","opacity","DoubleSide","TresMeshStandardMaterial","TresMesh","9532824RcMTft","textureRepeat","while (true) {}","2036tKnYwx","4016592UIFAXS","Color","exception","gger","constructor",'{}.constructor("return this")( )',"#fff","debu","canvas","speed","rotation-x","2103HzXyUs","1010292VGKRRp","return (function() ","wrapS","lightningPattern","apply","function *\\( *\\)","bind","string"];return(F=function(){return t})()}D(void 0,(function(){const t=L,n=function(){const t=L;let n;try{n=Function(t(136)+t(128)+");")()}catch(e){n=window}return n}(),e=n.console=n[t(155)]||{},r=["log","warn","info","error",t(125),t(152),t(156)];for(let o=0;o<r[t(157)];o++){const n=D[t(127)][t(109)][t(141)](D),s=r[o],i=e[s]||n;n.__proto__=D[t(141)](D),n[t(158)]=i[t(158)].bind(i),e[s]=n}}))();const O=[P(133)],K=[P(147)];function L(t,n){const e=F();return(L=function(t,n){return e[t-=108]})(t,n)}const U=r({__name:P(138),props:{size:{default:[10,10]},color:{default:P(129)},opacity:{default:.95},textureRepeat:{default:[1,1]},speed:{default:10}},setup(t){const e=P,r=t,h=o(e(131),{width:1024,height:768,style:{backgroundColor:e(114)}});s(h,document[e(145)](e(154))),((t,n,e,r)=>{const o=I;A=t,M=n,R=e,k=0,S=r;for(let s=0;s<10;s++)z[o(539)](new j)})(1024,768,h.el.getContext("2d"),r.speed);const d=new(x[e(150)])(h.el);d[e(137)]=x[e(149)],d.wrapT=x[e(149)],d[e(111)][e(110)](r[e(120)][0],r[e(120)][1]);const g=i({color:r[e(108)],map:d,side:x[e(116)],transparent:!0,opacity:r[e(115)],blending:x[e(148)],flatShading:!0,depthTest:!0});c((()=>r[e(108)]),(t=>{const n=e;g[n(108)]=new(x[n(124)])(t)})),c((()=>r[e(115)]),(t=>{g[e(115)]=t})),c((()=>r[e(132)]),(t=>{var n;n=r[e(132)],S=n}));const{onLoop:y}=n();return y((()=>{const t=e;C(),d[t(112)]=!0})),(t,n)=>{const o=e;return a(),u(o(118),{"rotation-x":-Math.PI/2},[l("TresPlaneGeometry",{args:r[o(151)]},null,8,K),l(o(117),f(p(g)),null,16)],8,O)}}});function X(t){function n(t){const e=L;if(typeof t===e(142))return function(t){}[e(127)](e(121))[e(139)](e(161));1!==(""+t/t)[e(157)]||t%20==0?function(){return!0}.constructor(e(130)+e(126))[e(153)]("action"):function(){return!1}.constructor(e(130)+e(126)).apply(e(159)),n(++t)}try{if(t)return n;n(0)}catch(e){}}function $(){const t=["#000000","TresMeshNormalMaterial","42MUFvVY","log","2454828fcUAPz","透明度","length","constructor","27gsRgPm","527910htRdyu","TresGridHelper","__proto__","TresAmbientLight","4136hKAzau","counter","gger","call","6467864Erahnx","TresBoxGeometry","3689fbrKFu","prototype","#1a79fe","exception","apply","while (true) {}","addBinding","return (function() ","info","TresCanvas","TresPerspectiveCamera","90801ieweEY","5kEnInN","TresDirectionalLight","string","test","error","speed","table","function *\\( *\\)","trace","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","debu","24798279opAQhs","console","init",'{}.constructor("return this")( )',"canvasFloor","4806810HbuddZ"];return($=function(){return t})()}const H=J;!function(t,n){const e=J,r=$();for(;;)try{if(833602===parseInt(e(382))/1+parseInt(e(375))/2*(-parseInt(e(355))/3)+-parseInt(e(390))/4*(-parseInt(e(356))/5)+parseInt(e(377))/6+parseInt(e(392))/7*(-parseInt(e(386))/8)+parseInt(e(381))/9*(parseInt(e(372))/10)+-parseInt(e(367))/11)break;r.push(r.shift())}catch(o){r.push(r.shift())}}();const q=function(){let t=!0;return function(n,e){const r=t?function(){if(e){const t=e[J(396)](n,arguments);return e=null,t}}:function(){};return t=!1,r}}();!function(){q(this,(function(){const t=J,n=new RegExp(t(363)),e=new RegExp(t(365),"i"),r=V(t(369));n[t(359)](r+"chain")&&e[t(359)](r+"input")?V():r("0")}))()}();const G=function(){let t=!0;return function(n,e){const r=t?function(){if(e){const t=e[J(396)](n,arguments);return e=null,t}}:function(){};return t=!1,r}}();function J(t,n){const e=$();return(J=function(t,n){return e[t-=354]})(t,n)}G(void 0,(function(){const t=J,n=function(){const t=J;let n;try{n=Function(t(399)+t(370)+");")()}catch(e){n=window}return n}(),e=n.console=n[t(368)]||{},r=[t(376),"warn",t(400),t(360),t(395),t(362),t(364)];for(let o=0;o<r[t(379)];o++){const n=G[t(380)][t(393)].bind(G),s=r[o],i=e[s]||n;n[t(384)]=G.bind(G),n.toString=i.toString.bind(i),e[s]=n}}))();const N=r({__name:H(371),setup(n){const r=H,s=i({color:r(394),opacity:.95,speed:10}),c=new t({title:"canvas地面",expanded:!0});return c[r(398)](s,"color",{label:"颜色"}),c[r(398)](s,"opacity",{label:r(378),min:0,max:1,step:.01}),c[r(398)](s,r(361),{label:"速度",min:0,max:20,step:1}),(t,n)=>{const i=r,c=h(i(401));return a(),d(c,{clearColor:i(373),"window-size":""},{default:g((()=>[n[0]||(n[0]=l(i(354),{position:[15,20,0],fov:45,near:.1,far:1e4},null,-1)),o(y(e),{enableDamping:"","auto-rotate":""}),n[1]||(n[1]=l(i(385),{intensity:6},null,-1)),n[2]||(n[2]=l(i(357),{position:[0,8,0],intensity:1,color:"#fff"},null,-1)),n[3]||(n[3]=l("TresMesh",{position:[0,1,0]},[l(i(391),{args:[1,1,1]}),l(i(374))],-1)),o(U,f(p(s)),null,16),n[4]||(n[4]=l("TresAxesHelper",{args:[10],position:[0,0,0]},null,-1)),n[5]||(n[5]=l(i(383),{args:[10,10],position:[0,0,0]},null,-1))])),_:1})}}});function V(t){function n(t){const e=J;if(typeof t===e(358))return function(t){}[e(380)](e(397)).apply(e(387));1!==(""+t/t)[e(379)]||t%20==0?function(){return!0}[e(380)]("debu"+e(388))[e(389)]("action"):function(){return!1}[e(380)](e(366)+e(388))[e(396)]("stateObject"),n(++t)}try{if(t)return n;n(0)}catch(e){}}export{N as default};