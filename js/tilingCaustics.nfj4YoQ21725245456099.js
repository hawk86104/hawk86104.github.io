var t=Object.defineProperty,n=Object.getOwnPropertySymbols,e=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,r=(n,e,o)=>e in n?t(n,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[e]=o,i=(t,i)=>{for(var s in i||(i={}))e.call(i,s)&&r(t,s,i[s]);if(n)for(var s of n(i))o.call(i,s)&&r(t,s,i[s]);return t};import{$ as s,d as c}from"./@tresjs.j5vdYITq1725245456099.js";import{C as a,a6 as u}from"./three.KG2-8r0_1725245456099.js";import{d as l,w as f,o as p,D as d,J as v,aj as h,ak as g,r as m,e as b,f as y,g as w,j as x,u as I,m as _}from"./@vue.Q1VpS3901725245456099.js";import{P as j}from"./tweakpane.yHWGBmom1725245456099.js";import"./@vueuse.whMtq_7M1725245456099.js";const T=S;function S(t,n){const e=C();return(S=function(t,n){return e[t-=229]})(t,n)}!function(t,n){const e=S,o=C();for(;;)try{if(963127===parseInt(e(243))/1+parseInt(e(265))/2*(-parseInt(e(273))/3)+-parseInt(e(231))/4*(-parseInt(e(257))/5)+parseInt(e(270))/6*(parseInt(e(239))/7)+-parseInt(e(240))/8*(-parseInt(e(275))/9)+-parseInt(e(251))/10+-parseInt(e(269))/11)break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const A=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[S(236)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();function C(){const t=["constructor","prototype","39894459fkCdCp","6AoFYJK","log","info","2514543UoeJhz","init","396cYSIwB","chain","call","5425168ZmZpQy","backgroundColor","TresShaderMaterial","brightness","DoubleSide","apply","speed","bind","13308323xJceIb","213544APbDRJ",'{}.constructor("return this")( )',"gger","1788499isrbNx","#fff","tilingCaustics","table","rotation-x","console","input","length","7923950AyUjTR","function *\\( *\\)","debu","value","uniforms","exception","5CTzIHX","color","toString","string","trace","test","flowSpeed","Color","2pBwEFq","return (function() "];return(C=function(){return t})()}!function(){A(this,(function(){const t=S,n=new RegExp(t(252)),e=new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","i"),o=z(t(274));n.test(o+t(229))&&e[t(262)](o+t(249))?z():o("0")}))()}();const k=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e.apply(n,arguments);return e=null,t}}:function(){};return t=!1,o}}();k(void 0,(function(){const t=S,n=function(){const t=S;let n;try{n=Function(t(266)+t(241)+");")()}catch(e){n=window}return n}(),e=n.console=n[t(248)]||{},o=[t(271),"warn",t(272),"error",t(256),t(246),t(261)];for(let r=0;r<o.length;r++){const n=k.constructor[t(268)][t(238)](k),i=o[r],s=e[i]||n;n.__proto__=k[t(238)](k),n[t(259)]=s[t(259)].bind(s),e[i]=n}}))();const E=[T(247)],P=v("TresPlaneGeometry",{args:[10,10]},null,-1),R=l({__name:T(245),props:{speed:{default:.478},backgroundColor:{},color:{default:"#fff"},flowSpeed:{default:{x:.01,y:.01}},brightness:{default:1.5}},setup(t){const n=T,e=t,o={uniforms:{resolution:{type:"v2",value:{x:1,y:1}},backgroundColor:{type:"c",value:new a(e[n(258)])},color:{type:"c",value:new(u[n(264)])(n(244))},speed:{type:"f",value:e[n(237)]},flowSpeed:{type:"v2",value:e[n(263)]},brightness:{type:"f",value:e[n(234)]},time:{type:"f",value:.1}},vertexShader:"// Examples of variables passed from vertex to fragment shader\nvarying vec2 vUv;\n\nvoid main(){\n\t// To pass variables to the fragment shader, you assign them here in the\n\t// main function. Traditionally you name the varying with vAttributeName\n\tvUv=uv;\n\t\n\t// This sets the position of the vertex in 3d space. The correct math is\n\t// provided below to take into account camera and object data.\n\tgl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);\n}",fragmentShader:"#define TAU 6.28318530718\n#define MAX_ITER 5\n\nuniform vec2 resolution;\nuniform vec3 backgroundColor;\nuniform vec3 color;\nuniform float speed;\nuniform vec2 flowSpeed;\nuniform float brightness;\nuniform float time;\n\nvarying vec2 vUv;\n\nvoid main(){\n\tvec2 uv=(vUv.xy+(time*flowSpeed))*resolution;\n\t\n\tvec2 p=mod(uv*TAU,TAU)-250.;\n\tvec2 i=vec2(p);\n\t\n\tfloat c=1.;\n\tfloat inten=.005;\n\t\n\tfor(int n=0;n<MAX_ITER;n++){\n\t\tfloat t=time*speed*(1.-(3.5/float(n+1)));\n\t\ti=p+vec2(cos(t-i.x)+sin(t+i.y),sin(t-i.y)+cos(t+i.x));\n\t\tc+=1./length(vec2(p.x/(sin(i.x+t)/inten),p.y/(cos(i.y+t)/inten)));\n\t}\n\t\n\tc/=float(MAX_ITER);\n\tc=1.17-pow(c,brightness);\n\t\n\tvec3 rgb=vec3(pow(abs(c),8.));\n\t\n\tgl_FragColor=vec4(rgb*color+backgroundColor,length(rgb)+.1);\n}",side:u[n(235)],transparent:!0,depthWrite:!1,depthTest:!0},{onLoop:r}=s();return r((({delta:t})=>{o[n(255)].time.value+=t})),f((()=>e),(()=>{const t=n;o[t(255)].speed.value=e[t(237)],o.uniforms[t(234)][t(254)]=e.brightness,o.uniforms[t(232)][t(254)]=new(u[t(264)])(e[t(258)])}),{deep:!0}),(t,e)=>{const r=n;return p(),d("TresMesh",{"rotation-x":-Math.PI/2,"position-y":1},[P,v(r(233),h(g(o)),null,16)],8,E)}}});function z(t){function n(t){const e=S;if(typeof t===e(260))return function(t){}.constructor("while (true) {}").apply("counter");1!==(""+t/t)[e(250)]||t%20==0?function(){return!0}[e(267)](e(253)+e(242))[e(230)]("action"):function(){return!1}[e(267)]("debu"+e(242))[e(236)]("stateObject"),n(++t)}try{if(t)return n;n(0)}catch(e){}}const O=M;!function(t,n){const e=M,o=D();for(;;)try{if(556290===parseInt(e(503))/1+parseInt(e(520))/2*(-parseInt(e(485))/3)+parseInt(e(475))/4+-parseInt(e(518))/5+parseInt(e(482))/6+-parseInt(e(494))/7+parseInt(e(480))/8*(parseInt(e(484))/9))break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const U=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e.apply(n,arguments);return e=null,t}}:function(){};return t=!1,o}}();!function(){U(this,(function(){const t=M,n=new RegExp(t(487)),e=new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","i"),o=$(t(505));n[t(497)](o+t(512))&&e.test(o+t(511))?$():o("0")}))()}();const Z=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[M(493)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();function M(t,n){const e=D();return(M=function(t,n){return e[t-=473]})(t,n)}Z(void 0,(function(){const t=M,n=function(){const t=M;let n;try{n=Function(t(498)+'{}.constructor("return this")( ));')()}catch(e){n=window}return n}(),e=n[t(517)]=n[t(517)]||{},o=[t(483),t(478),t(476),t(489),t(501),t(509),t(508)];for(let r=0;r<o.length;r++){const n=Z.constructor[t(506)].bind(Z),i=o[r],s=e[i]||n;n.__proto__=Z[t(488)](Z),n.toString=s[t(502)][t(488)](s),e[i]=n}}))();const F=v("TresPerspectiveCamera",{position:[10,10,10]},null,-1),J=v(O(481),{intensity:1},null,-1),B=v(O(479),{args:[10,10]},null,-1);function D(){const t=["TresCanvas","init","prototype","stateObject","trace","table","color","input","chain","action","length","addBinding","while (true) {}","console","2008150oBxzlN","gger","120mzhVZS","#fff","inline","speed","331380palZSO","info","counter","warn","TresGridHelper","598816vFtNxk","TresAmbientLight","4971486jpkeEj","log","45JKVQSn","39498DgjZyD","flowSpeed","function *\\( *\\)","bind","error","constructor","tilingCaustics","流动速度","apply","2472589RgdbHd","string","call","test","return (function() ","#222","debu","exception","toString","815421PdXAiq"];return(D=function(){return t})()}const X=l({__name:O(491),setup(t){const n=O,e={clearColor:n(499)},o=m({color:n(521),speed:.1,brightness:1.5,flowSpeed:{x:.01,y:.01}}),r=new j({title:"参数",expanded:!0});return r[n(515)](o,n(510),{label:"颜色"}),r[n(515)](o,n(474),{label:"速度",min:.1,max:1,step:.1}),r[n(515)](o,"brightness",{label:"亮度",min:.1,max:2,step:.1}),r.addBinding(o,n(486),{label:n(492),picker:n(473),expanded:!0,x:{min:.01,step:.02,max:.6,inverted:!0},y:{min:.01,step:.02,max:.6,inverted:!0}}),(t,r)=>{const s=b(n(504));return p(),y(s,_(e,{"window-size":""}),{default:w((()=>[F,J,x(I(c)),B,x(R,h(g(i({},o))),null,16)])),_:1},16)}}});function $(t){function n(t){const e=M;if(typeof t===e(495))return function(t){}.constructor(e(516))[e(493)](e(477));1!==(""+t/t)[e(514)]||t%20==0?function(){return!0}.constructor(e(500)+e(519))[e(496)](e(513)):function(){return!1}[e(490)](e(500)+e(519))[e(493)](e(507)),n(++t)}try{if(t)return n;n(0)}catch(e){}}export{X as default};