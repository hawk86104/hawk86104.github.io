var t=Object.defineProperty,n=Object.getOwnPropertySymbols,e=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,r=(n,e,o)=>e in n?t(n,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[e]=o,i=(t,i)=>{for(var s in i||(i={}))e.call(i,s)&&r(t,s,i[s]);if(n)for(var s of n(i))o.call(i,s)&&r(t,s,i[s]);return t};import{U as s,Y as c}from"./@tresjs.QjD7q5YC1729821967160.js";import{_ as a,C as u}from"./three.x4oqFJNT1729821967160.js";import{d as l,w as f,o as p,E as d,L as v,aj as g,ak as h,r as m,e as b,f as y,g as w,j as x,u as I,m as _}from"./@vue.JNsx1iN61729821967160.js";import{P as T}from"./tweakpane.yHWGBmom1729821967160.js";import"./@vueuse.HMG_JnUD1729821967160.js";const j=S;function S(t,n){const e=P();return(S=function(t,n){return e[t-=343]})(t,n)}!function(t,n){const e=S,o=P();for(;;)try{if(981437===parseInt(e(370))/1*(-parseInt(e(376))/2)+-parseInt(e(348))/3+-parseInt(e(345))/4+-parseInt(e(353))/5*(-parseInt(e(372))/6)+parseInt(e(369))/7+-parseInt(e(385))/8+parseInt(e(383))/9)break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const k=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[S(349)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();!function(){k(this,(function(){const t=S,n=new RegExp(t(388)),e=new RegExp(t(358),"i"),o=M(t(346));n[t(344)](o+t(368))&&e[t(344)](o+t(364))?M():o("0")}))()}();const C=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[S(349)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();C(void 0,(function(){const t=S;let n;try{n=Function(t(377)+t(371)+");")()}catch(r){n=window}const e=n[t(378)]=n.console||{},o=[t(343),t(360),"info",t(384),"exception","table",t(362)];for(let i=0;i<o[t(366)];i++){const n=C[t(390)][t(382)][t(357)](C),r=o[i],s=e[r]||n;n[t(374)]=C[t(357)](C),n[t(359)]=s.toString[t(357)](s),e[r]=n}}))();const A=[j(352)],E=v(j(347),{args:[10,10]},null,-1);function P(){const t=["color","bind","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","toString","warn","uniforms","trace","value","input","call","length","#fff","chain","5196331alyoYD","392167KGHxCr",'{}.constructor("return this")( )',"462NxEPPM","debu","__proto__","counter","2WWuJpR","return (function() ","console","action","gger","TresMesh","prototype","24809814bHXkyB","error","15638664bQETBO","while (true) {}","speed","function *\\( *\\)","brightness","constructor","log","test","5171252CQOHPB","init","TresPlaneGeometry","1139304DXTokf","apply","DoubleSide","Color","rotation-x","97535kthtVA","time","backgroundColor"];return(P=function(){return t})()}const O=l({__name:"tilingCaustics",props:{speed:{default:.478},backgroundColor:{},color:{default:j(367)},flowSpeed:{default:{x:.01,y:.01}},brightness:{default:1.5}},setup(t){const n=j,e=t,o={uniforms:{resolution:{type:"v2",value:{x:1,y:1}},backgroundColor:{type:"c",value:new(a[n(351)])(e[n(356)])},color:{type:"c",value:new(a[n(351)])(n(367))},speed:{type:"f",value:e[n(387)]},flowSpeed:{type:"v2",value:e.flowSpeed},brightness:{type:"f",value:e[n(389)]},time:{type:"f",value:.1}},vertexShader:"// Examples of variables passed from vertex to fragment shader\nvarying vec2 vUv;\n\nvoid main(){\n\t// To pass variables to the fragment shader, you assign them here in the\n\t// main function. Traditionally you name the varying with vAttributeName\n\tvUv=uv;\n\t\n\t// This sets the position of the vertex in 3d space. The correct math is\n\t// provided below to take into account camera and object data.\n\tgl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);\n}",fragmentShader:"#define TAU 6.28318530718\n#define MAX_ITER 5\n\nuniform vec2 resolution;\nuniform vec3 backgroundColor;\nuniform vec3 color;\nuniform float speed;\nuniform vec2 flowSpeed;\nuniform float brightness;\nuniform float time;\n\nvarying vec2 vUv;\n\nvoid main(){\n\tvec2 uv=(vUv.xy+(time*flowSpeed))*resolution;\n\t\n\tvec2 p=mod(uv*TAU,TAU)-250.;\n\tvec2 i=vec2(p);\n\t\n\tfloat c=1.;\n\tfloat inten=.005;\n\t\n\tfor(int n=0;n<MAX_ITER;n++){\n\t\tfloat t=time*speed*(1.-(3.5/float(n+1)));\n\t\ti=p+vec2(cos(t-i.x)+sin(t+i.y),sin(t-i.y)+cos(t+i.x));\n\t\tc+=1./length(vec2(p.x/(sin(i.x+t)/inten),p.y/(cos(i.y+t)/inten)));\n\t}\n\t\n\tc/=float(MAX_ITER);\n\tc=1.17-pow(c,brightness);\n\t\n\tvec3 rgb=vec3(pow(abs(c),8.));\n\t\n\tgl_FragColor=vec4(rgb*color+backgroundColor,length(rgb)+.1);\n}",side:a[n(350)],transparent:!0,depthWrite:!1,depthTest:!0},{onLoop:r}=s();return r((({delta:t})=>{const e=n;o[e(361)][e(354)][e(363)]+=t})),f((()=>e),(()=>{const t=n;o[t(361)][t(387)][t(363)]=e.speed,o.uniforms.brightness[t(363)]=e.brightness,o[t(361)][t(355)].value=new u(e[t(356)])}),{deep:!0}),(t,e)=>{const r=n;return p(),d(r(381),{"rotation-x":-Math.PI/2,"position-y":1},[E,v("TresShaderMaterial",g(h(o)),null,16)],8,A)}}});function M(t){function n(t){const e=S;if("string"==typeof t)return function(t){}[e(390)](e(386))[e(349)](e(375));1!==(""+t/t)[e(366)]||t%20==0?function(){return!0}[e(390)](e(373)+e(380))[e(365)](e(379)):function(){return!1}[e(390)](e(373)+e(380))[e(349)]("stateObject"),n(++t)}try{if(t)return n;n(0)}catch(e){}}const R=H;!function(t,n){const e=H,o=Z();for(;;)try{if(280591===-parseInt(e(420))/1+parseInt(e(404))/2+parseInt(e(390))/3+-parseInt(e(388))/4+parseInt(e(389))/5+-parseInt(e(398))/6*(-parseInt(e(386))/7)+-parseInt(e(402))/8*(parseInt(e(391))/9))break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const U=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[H(421)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();!function(){U(this,(function(){const t=H,n=new RegExp(t(427)),e=new RegExp(t(385),"i"),o=Q("init");n[t(395)](o+"chain")&&e[t(395)](o+t(408))?Q():o("0")}))()}();const z=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e.apply(n,arguments);return e=null,t}}:function(){};return t=!1,o}}();z(void 0,(function(){const t=H;let n;try{n=Function(t(414)+t(394)+");")()}catch(r){n=window}const e=n[t(401)]=n[t(401)]||{},o=[t(425),t(423),t(399),t(424),t(400),t(417),"trace"];for(let i=0;i<o[t(419)];i++){const n=z[t(397)].prototype[t(393)](z),r=o[i],s=e[r]||n;n.__proto__=z.bind(z),n.toString=s[t(413)][t(393)](s),e[r]=n}}))();const W=v(R(412),{position:[10,10,10]},null,-1),X=v("TresAmbientLight",{intensity:1},null,-1),B=v(R(422),{args:[10,10]},null,-1);function Z(){const t=["console","16spXSqj","TresCanvas","933926vkDaWq","流动速度","gger","#222","input","counter","#fff","color","TresPerspectiveCamera","toString","return (function() ","debu","stateObject","table","addBinding","length","319938WqkWZe","apply","TresGridHelper","warn","error","log","speed","function *\\( *\\)","string","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","2187829JpMKoQ","action","31368OQozdv","1634060dmarSA","556023PoJNTw","3074814licgcR","while (true) {}","bind",'{}.constructor("return this")( )',"test","brightness","constructor","6jcCmrA","info","exception"];return(Z=function(){return t})()}const D=l({__name:"tilingCaustics",setup(t){const n=R,e={clearColor:n(407)},o=m({color:n(410),speed:.1,brightness:1.5,flowSpeed:{x:.01,y:.01}}),r=new T({title:"参数",expanded:!0});return r[n(418)](o,n(411),{label:"颜色"}),r.addBinding(o,n(426),{label:"速度",min:.1,max:1,step:.1}),r[n(418)](o,n(396),{label:"亮度",min:.1,max:2,step:.1}),r[n(418)](o,"flowSpeed",{label:n(405),picker:"inline",expanded:!0,x:{min:.01,step:.02,max:.6,inverted:!0},y:{min:.01,step:.02,max:.6,inverted:!0}}),(t,r)=>{const s=b(n(403));return p(),y(s,_(e,{"window-size":""}),{default:w((()=>[W,X,x(I(c)),B,x(O,g(h(i({},o))),null,16)])),_:1},16)}}});function H(t,n){const e=Z();return(H=function(t,n){return e[t-=384]})(t,n)}function Q(t){function n(t){const e=H;if(typeof t===e(384))return function(t){}[e(397)](e(392))[e(421)](e(409));1!==(""+t/t).length||t%20==0?function(){return!0}.constructor("debugger").call(e(387)):function(){return!1}[e(397)](e(415)+e(406))[e(421)](e(416)),n(++t)}try{if(t)return n;n(0)}catch(e){}}export{D as default};