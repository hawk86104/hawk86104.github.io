var t=Object.defineProperty,n=Object.getOwnPropertySymbols,e=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,r=(n,e,o)=>e in n?t(n,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[e]=o,i=(t,i)=>{for(var s in i||(i={}))e.call(i,s)&&r(t,s,i[s]);if(n)for(var s of n(i))o.call(i,s)&&r(t,s,i[s]);return t};import{e as s,U as c}from"./@tresjs.vA_UT8oy1734746792122.js";import{_ as a,C as u}from"./three.1FILWcBb1734746792122.js";import{d as l,w as f,o as p,D as d,J as v,aj as g,ak as h,r as m,e as b,f as y,g as w,j as x,u as I,m as j}from"./@vue.-THQH3GC1734746792122.js";import{P as _}from"./tweakpane.yHWGBmom1734746792122.js";import"./@vueuse.lqJslAkC1734746792122.js";const T=A;!function(t,n){const e=A,o=R();for(;;)try{if(167900===-parseInt(e(195))/1+parseInt(e(205))/2*(parseInt(e(187))/3)+-parseInt(e(191))/4+-parseInt(e(215))/5+parseInt(e(188))/6+-parseInt(e(198))/7+parseInt(e(192))/8)break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const S=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[A(221)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();function A(t,n){const e=R();return(A=function(t,n){return e[t-=182]})(t,n)}!function(){S(this,(function(){const t=A,n=new RegExp(t(212)),e=new RegExp(t(197),"i"),o=M(t(220));n[t(219)](o+t(193))&&e[t(219)](o+t(202))?M():o("0")}))()}();const C=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e.apply(n,arguments);return e=null,t}}:function(){};return t=!1,o}}();C(void 0,(function(){const t=A;let n;try{n=Function(t(217)+'{}.constructor("return this")( ));')()}catch(r){n=window}const e=n.console=n.console||{},o=["log",t(210),t(206),t(208),t(224),"table",t(213)];for(let i=0;i<o.length;i++){const n=C[t(204)][t(209)].bind(C),r=o[i],s=e[r]||n;n[t(183)]=C[t(201)](C),n.toString=s[t(199)][t(201)](s),e[r]=n}}))();const U=["rotation-x"],O=l({__name:"tilingCaustics",props:{speed:{default:.478},backgroundColor:{},color:{default:T(182)},flowSpeed:{default:{x:.01,y:.01}},brightness:{default:1.5}},setup(t){const n=T,e=t,o={uniforms:{resolution:{type:"v2",value:{x:1,y:1}},backgroundColor:{type:"c",value:new(a[n(184)])(e[n(185)])},color:{type:"c",value:new u(n(182))},speed:{type:"f",value:e.speed},flowSpeed:{type:"v2",value:e[n(189)]},brightness:{type:"f",value:e[n(200)]},time:{type:"f",value:.1}},vertexShader:"// Examples of variables passed from vertex to fragment shader\nvarying vec2 vUv;\n\nvoid main(){\n\t// To pass variables to the fragment shader, you assign them here in the\n\t// main function. Traditionally you name the varying with vAttributeName\n\tvUv=uv;\n\t\n\t// This sets the position of the vertex in 3d space. The correct math is\n\t// provided below to take into account camera and object data.\n\tgl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);\n}",fragmentShader:"#define TAU 6.28318530718\n#define MAX_ITER 5\n\nuniform vec2 resolution;\nuniform vec3 backgroundColor;\nuniform vec3 color;\nuniform float speed;\nuniform vec2 flowSpeed;\nuniform float brightness;\nuniform float time;\n\nvarying vec2 vUv;\n\nvoid main(){\n\tvec2 uv=(vUv.xy+(time*flowSpeed))*resolution;\n\t\n\tvec2 p=mod(uv*TAU,TAU)-250.;\n\tvec2 i=vec2(p);\n\t\n\tfloat c=1.;\n\tfloat inten=.005;\n\t\n\tfor(int n=0;n<MAX_ITER;n++){\n\t\tfloat t=time*speed*(1.-(3.5/float(n+1)));\n\t\ti=p+vec2(cos(t-i.x)+sin(t+i.y),sin(t-i.y)+cos(t+i.x));\n\t\tc+=1./length(vec2(p.x/(sin(i.x+t)/inten),p.y/(cos(i.y+t)/inten)));\n\t}\n\t\n\tc/=float(MAX_ITER);\n\tc=1.17-pow(c,brightness);\n\t\n\tvec3 rgb=vec3(pow(abs(c),8.));\n\t\n\tgl_FragColor=vec4(rgb*color+backgroundColor,length(rgb)+.1);\n}",side:a[n(207)],transparent:!0,depthWrite:!1,depthTest:!0},{onLoop:r}=s();return r((({delta:t})=>{const e=n;o.uniforms[e(194)][e(190)]+=t})),f((()=>e),(()=>{const t=n;o[t(222)][t(186)][t(190)]=e[t(186)],o.uniforms[t(200)].value=e[t(200)],o[t(222)].backgroundColor[t(190)]=new(a[t(184)])(e[t(185)])}),{deep:!0}),(t,e)=>{const r=n;return p(),d(r(211),{"rotation-x":-Math.PI/2,"position-y":1},[e[0]||(e[0]=v(r(216),{args:[10,10]},null,-1)),v(r(223),g(h(o)),null,16)],8,U)}}});function R(){const t=["2180836dpjaDM","toString","brightness","bind","input","call","constructor","59204iRzebj","info","DoubleSide","error","prototype","warn","TresMesh","function *\\( *\\)","trace","length","737825zROnoW","TresPlaneGeometry","return (function() ","gger","test","init","apply","uniforms","TresShaderMaterial","exception","debu","action","#fff","__proto__","Color","color","speed","3XaAbYf","670566UebWpF","flowSpeed","value","1322552OpVQdo","8958176YtjsTO","chain","time","303484rhQuVP","counter","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)"];return(R=function(){return t})()}function M(t){function n(t){const e=A;if("string"==typeof t)return function(t){}.constructor("while (true) {}")[e(221)](e(196));1!==(""+t/t)[e(214)]||t%20==0?function(){return!0}[e(204)](e(225)+"gger")[e(203)](e(226)):function(){return!1}.constructor(e(225)+e(218))[e(221)]("stateObject"),n(++t)}try{if(t)return n;n(0)}catch(e){}}const P=X;!function(t,n){const e=X,o=z();for(;;)try{if(390118===parseInt(e(168))/1+-parseInt(e(140))/2+-parseInt(e(147))/3*(parseInt(e(151))/4)+-parseInt(e(139))/5*(-parseInt(e(154))/6)+-parseInt(e(174))/7*(parseInt(e(153))/8)+parseInt(e(177))/9+-parseInt(e(145))/10*(-parseInt(e(155))/11))break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const k=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[X(146)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();!function(){k(this,(function(){const t=X,n=new RegExp(t(162)),e=new RegExp(t(173),"i"),o=D(t(169));n.test(o+t(136))&&e.test(o+t(143))?D():o("0")}))()}();const E=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[X(146)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();function z(){const t=["flowSpeed","call","function *\\( *\\)","action","length","exception","TresGridHelper","#fff","374811PPXAPG","init","toString","debu","constructor","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","119KZaMbU","TresPerspectiveCamera","table","2680290RiNKhS","TresCanvas","prototype","counter","__proto__","chain","while (true) {}","流动速度","334955Mqjdax","937732uqNJYg","return (function() ","console","input","tilingCaustics","30jtUYME","apply","349047jfWRzN","stateObject","brightness","trace","24RtThOU","gger","257464OiLDdf","6tiBEKd","5003449HURCxU","addBinding","TresAmbientLight","inline","bind"];return(z=function(){return t})()}function X(t,n){const e=z();return(X=function(t,n){return e[t-=135]})(t,n)}E(void 0,(function(){const t=X;let n;try{n=Function(t(141)+'{}.constructor("return this")( ));')()}catch(r){n=window}const e=n[t(142)]=n[t(142)]||{},o=["log","warn","info","error",t(165),t(176),t(150)];for(let i=0;i<o[t(164)];i++){const n=E[t(172)][t(179)].bind(E),r=o[i],s=e[r]||n;n[t(135)]=E[t(159)](E),n[t(170)]=s[t(170)].bind(s),e[r]=n}}))();const Z=l({__name:P(144),setup(t){const n=P,e={clearColor:"#222"},o=m({color:n(167),speed:.1,brightness:1.5,flowSpeed:{x:.01,y:.01}}),r=new _({title:"参数",expanded:!0});return r[n(156)](o,"color",{label:"颜色"}),r.addBinding(o,"speed",{label:"速度",min:.1,max:1,step:.1}),r[n(156)](o,n(149),{label:"亮度",min:.1,max:2,step:.1}),r[n(156)](o,n(160),{label:n(138),picker:n(158),expanded:!0,x:{min:.01,step:.02,max:.6,inverted:!0},y:{min:.01,step:.02,max:.6,inverted:!0}}),(t,r)=>{const s=n,a=b(s(178));return p(),y(a,j(e,{"window-size":""}),{default:w((()=>[r[0]||(r[0]=v(s(175),{position:[10,10,10]},null,-1)),r[1]||(r[1]=v(s(157),{intensity:1},null,-1)),x(I(c)),r[2]||(r[2]=v(s(166),{args:[10,10]},null,-1)),x(O,g(h(i({},o))),null,16)])),_:1},16)}}});function D(t){function n(t){const e=X;if("string"==typeof t)return function(t){}[e(172)](e(137))[e(146)](e(180));1!==(""+t/t).length||t%20==0?function(){return!0}.constructor(e(171)+e(152))[e(161)](e(163)):function(){return!1}.constructor(e(171)+"gger")[e(146)](e(148)),n(++t)}try{if(t)return n;n(0)}catch(e){}}export{Z as default};