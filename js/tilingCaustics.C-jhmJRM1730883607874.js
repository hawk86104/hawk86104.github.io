var t=Object.defineProperty,n=Object.getOwnPropertySymbols,e=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,r=(n,e,o)=>e in n?t(n,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[e]=o,i=(t,i)=>{for(var s in i||(i={}))e.call(i,s)&&r(t,s,i[s]);if(n)for(var s of n(i))o.call(i,s)&&r(t,s,i[s]);return t};import{e as s,U as c}from"./@tresjs.C3WO4ZW41730883607874.js";import{_ as a}from"./three.fIUcjaNz1730883607874.js";import{d as u,w as l,o as f,D as p,J as d,aj as v,ak as m,r as h,e as g,f as b,g as y,j as w,u as x,m as I}from"./@vue.Cfu43fwq1730883607874.js";import{P as _}from"./tweakpane.BCjFYDHx1730883607874.js";import"./@vueuse.BSum2YDk1730883607874.js";const j=k;function T(){const t=["toString","exception","input","brightness","gger","DoubleSide","stateObject","action","console","4956896DkpjEu","tilingCaustics","126940ByJDKH","146715PLuSvc","warn","time","Color","constructor","138KDRPQJ","string","chain","table","bind","log","rotation-x","debu","speed","40XxJpxP","__proto__","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","182679jHoFsu","TresMesh","TresPlaneGeometry","value","563038buQYqz","info","error","30593367wlmAmu","uniforms","test","1068049QKtNlv","#fff","init","flowSpeed","counter","call",'{}.constructor("return this")( )',"color","apply","backgroundColor","length"];return(T=function(){return t})()}!function(t,n){const e=k,o=T();for(;;)try{if(694908===-parseInt(e(225))/1+-parseInt(e(247))/2+-parseInt(e(215))/3+-parseInt(e(245))/4+-parseInt(e(248))/5*(parseInt(e(253))/6)+-parseInt(e(219))/7*(-parseInt(e(262))/8)+parseInt(e(222))/9)break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const S=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[k(233)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();!function(){S(this,(function(){const t=k,n=new RegExp("function *\\( *\\)"),e=new RegExp(t(264),"i"),o=C(t(227));n[t(224)](o+t(255))&&e[t(224)](o+t(238))?C():o("0")}))()}();const A=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[k(233)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();function k(t,n){const e=T();return(k=function(t,n){return e[t-=215]})(t,n)}A(void 0,(function(){const t=k;let n;try{n=Function("return (function() "+t(231)+");")()}catch(r){n=window}const e=n[t(244)]=n[t(244)]||{},o=[t(258),t(249),t(220),t(221),t(237),t(256),"trace"];for(let i=0;i<o[t(235)];i++){const n=A[t(252)].prototype.bind(A),r=o[i],s=e[r]||n;n[t(263)]=A[t(257)](A),n.toString=s[t(236)][t(257)](s),e[r]=n}}))();const E=[j(259)],P=u({__name:j(246),props:{speed:{default:.478},backgroundColor:{},color:{default:j(226)},flowSpeed:{default:{x:.01,y:.01}},brightness:{default:1.5}},setup(t){const n=j,e=t,o={uniforms:{resolution:{type:"v2",value:{x:1,y:1}},backgroundColor:{type:"c",value:new(a[n(251)])(e[n(232)])},color:{type:"c",value:new(a[n(251)])(n(226))},speed:{type:"f",value:e.speed},flowSpeed:{type:"v2",value:e[n(228)]},brightness:{type:"f",value:e[n(239)]},time:{type:"f",value:.1}},vertexShader:"// Examples of variables passed from vertex to fragment shader\nvarying vec2 vUv;\n\nvoid main(){\n\t// To pass variables to the fragment shader, you assign them here in the\n\t// main function. Traditionally you name the varying with vAttributeName\n\tvUv=uv;\n\t\n\t// This sets the position of the vertex in 3d space. The correct math is\n\t// provided below to take into account camera and object data.\n\tgl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);\n}",fragmentShader:"#define TAU 6.28318530718\n#define MAX_ITER 5\n\nuniform vec2 resolution;\nuniform vec3 backgroundColor;\nuniform vec3 color;\nuniform float speed;\nuniform vec2 flowSpeed;\nuniform float brightness;\nuniform float time;\n\nvarying vec2 vUv;\n\nvoid main(){\n\tvec2 uv=(vUv.xy+(time*flowSpeed))*resolution;\n\t\n\tvec2 p=mod(uv*TAU,TAU)-250.;\n\tvec2 i=vec2(p);\n\t\n\tfloat c=1.;\n\tfloat inten=.005;\n\t\n\tfor(int n=0;n<MAX_ITER;n++){\n\t\tfloat t=time*speed*(1.-(3.5/float(n+1)));\n\t\ti=p+vec2(cos(t-i.x)+sin(t+i.y),sin(t-i.y)+cos(t+i.x));\n\t\tc+=1./length(vec2(p.x/(sin(i.x+t)/inten),p.y/(cos(i.y+t)/inten)));\n\t}\n\t\n\tc/=float(MAX_ITER);\n\tc=1.17-pow(c,brightness);\n\t\n\tvec3 rgb=vec3(pow(abs(c),8.));\n\t\n\tgl_FragColor=vec4(rgb*color+backgroundColor,length(rgb)+.1);\n}",side:a[n(241)],transparent:!0,depthWrite:!1,depthTest:!0},{onLoop:r}=s();return r((({delta:t})=>{const e=n;o[e(223)][e(250)][e(218)]+=t})),l((()=>e),(()=>{const t=n;o[t(223)][t(261)][t(218)]=e.speed,o.uniforms[t(239)][t(218)]=e[t(239)],o.uniforms[t(234)][t(218)]=new(a[t(251)])(e[t(232)])}),{deep:!0}),(t,e)=>{const r=n;return f(),p(r(216),{"rotation-x":-Math.PI/2,"position-y":1},[e[0]||(e[0]=d(r(217),{args:[10,10]},null,-1)),d("TresShaderMaterial",v(m(o)),null,16)],8,E)}}});function C(t){function n(t){const e=k;if(typeof t===e(254))return function(t){}[e(252)]("while (true) {}")[e(233)](e(229));1!==(""+t/t)[e(235)]||t%20==0?function(){return!0}[e(252)](e(260)+e(240))[e(230)](e(243)):function(){return!1}[e(252)](e(260)+e(240)).apply(e(242)),n(++t)}try{if(t)return n;n(0)}catch(e){}}function M(t,n){const e=R();return(M=function(t,n){return e[t-=429]})(t,n)}!function(t,n){const e=M,o=R();for(;;)try{if(710042===parseInt(e(451))/1+parseInt(e(458))/2*(parseInt(e(453))/3)+-parseInt(e(447))/4+parseInt(e(468))/5+parseInt(e(445))/6*(parseInt(e(452))/7)+-parseInt(e(454))/8*(-parseInt(e(457))/9)+-parseInt(e(435))/10)break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const O=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e.apply(n,arguments);return e=null,t}}:function(){};return t=!1,o}}();!function(){O(this,(function(){const t=M,n=new RegExp("function *\\( *\\)"),e=new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","i"),o=D(t(455));n.test(o+t(464))&&e[t(466)](o+t(446))?D():o("0")}))()}();const U=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[M(430)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();function R(){const t=["input","3202960jiZrdy","gger","brightness","console","1138630TLEMPM","7fjsIIr","153zOPGDT","121368yulTOb","init","table","504WAUNHZ","19996bjAoDN","stateObject","constructor","debu","length","log","chain","addBinding","test","TresGridHelper","898705iEeyiH","TresAmbientLight","string","return (function() ","apply","TresCanvas","__proto__","bind",'{}.constructor("return this")( )',"24221000ZHlEUe","toString","warn","call","#fff","info","trace","#222","flowSpeed","prototype","7530222dJkVet"];return(R=function(){return t})()}U(void 0,(function(){const t=M;let n;try{n=Function(t(429)+t(434)+");")()}catch(r){n=window}const e=n[t(450)]=n.console||{},o=[t(463),t(437),t(440),"error","exception",t(456),t(441)];for(let i=0;i<o.length;i++){const n=U[t(460)][t(444)][t(433)](U),r=o[i],s=e[r]||n;n[t(432)]=U.bind(U),n[t(436)]=s[t(436)].bind(s),e[r]=n}}))();const z=u({__name:"tilingCaustics",setup(t){const n=M,e={clearColor:n(442)},o=h({color:n(439),speed:.1,brightness:1.5,flowSpeed:{x:.01,y:.01}}),r=new _({title:"参数",expanded:!0});return r[n(465)](o,"color",{label:"颜色"}),r[n(465)](o,"speed",{label:"速度",min:.1,max:1,step:.1}),r[n(465)](o,n(449),{label:"亮度",min:.1,max:2,step:.1}),r[n(465)](o,n(443),{label:"流动速度",picker:"inline",expanded:!0,x:{min:.01,step:.02,max:.6,inverted:!0},y:{min:.01,step:.02,max:.6,inverted:!0}}),(t,r)=>{const s=n,a=g(s(431));return f(),b(a,I(e,{"window-size":""}),{default:y((()=>[r[0]||(r[0]=d("TresPerspectiveCamera",{position:[10,10,10]},null,-1)),r[1]||(r[1]=d(s(469),{intensity:1},null,-1)),w(x(c)),r[2]||(r[2]=d(s(467),{args:[10,10]},null,-1)),w(P,v(m(i({},o))),null,16)])),_:1},16)}}});function D(t){function n(t){const e=M;if(typeof t===e(470))return function(t){}[e(460)]("while (true) {}")[e(430)]("counter");1!==(""+t/t)[e(462)]||t%20==0?function(){return!0}[e(460)](e(461)+e(448))[e(438)]("action"):function(){return!1}[e(460)]("debu"+e(448))[e(430)](e(459)),n(++t)}try{if(t)return n;n(0)}catch(e){}}export{z as default};