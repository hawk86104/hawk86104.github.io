import{a as t,d as n}from"./@tresjs.6SjGVF2a1724511658098.js";import{P as e}from"./tweakpane.yHWGBmom1724511658098.js";import{a6 as o,ab as r,ac as a}from"./three.6cxCQsIj1724511658098.js";import{_ as s}from"./heatmap.js-fix.FDoAq5UH1724511658098.js";import{d as i,a4 as c,a1 as u,o as l,D as p,u as f,r as d,e as h,f as m,g,j as y,al as v,aj as b,ak as w,m as x,J as _}from"./@vue.Q1VpS3901724511658098.js";import"./@vueuse.rsVLbIR91724511658098.js";import"./@amap.T3VNXNvb1724511658098.js";const j=A;!function(t,n){const e=A,o=D();for(;;)try{if(994005===parseInt(e(224))/1*(parseInt(e(271))/2)+parseInt(e(253))/3+parseInt(e(242))/4*(parseInt(e(233))/5)+parseInt(e(291))/6+parseInt(e(274))/7*(parseInt(e(251))/8)+parseInt(e(275))/9+-parseInt(e(247))/10)break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const I=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[A(234)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();!function(){I(this,(function(){const t=A,n=new RegExp("function *\\( *\\)"),e=new RegExp(t(295),"i"),o=T(t(298));n[t(231)](o+t(277))&&e[t(231)](o+t(256))?T():o("0")}))()}();const z=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[A(234)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();z(void 0,(function(){const t=A,n=function(){const t=A;let n;try{n=Function(t(273)+t(297)+");")()}catch(e){n=window}return n}(),e=n[t(264)]=n.console||{},o=["log",t(227),t(228),"error",t(268),"table",t(237)];for(let r=0;r<o[t(290)];r++){const n=z.constructor.prototype[t(220)](z),a=o[r],s=e[a]||n;n[t(259)]=z.bind(z),n[t(255)]=s.toString[t(220)](s),e[a]=n}}))();const C=[j(280)];function A(t,n){const e=D();return(A=function(t,n){return e[t-=218]})(t,n)}const S=i({__name:j(258),props:{show2dCanvas:{type:Boolean,default:!0},radius:{default:20}},async setup(n){const e=j;let r,a;const i=n,{nodes:d}=([r,a]=c((()=>t(e(262),{draco:!0,decoderPath:"./draco/"}))),r=await r,a(),r);d[e(285)][e(218)][e(226)](-5088.96,-3.08,39374.7),d.mesh_0[e(279)][e(238)](.01);let h=null,m=null,g=null;m=new(o[e(288)])((()=>{const t=e;return g=document[t(219)](t(240)),g[t(289)].position=t(222),g[t(289)][t(284)]=t(269),g[t(289)][t(241)]="0",document[t(246)][t(272)](g),h=s[t(223)]({container:g,width:256,height:256,blur:t(299),radius:i[t(225)]}),h[t(252)].canvas.style[t(292)]=t(293),h._renderer[t(265)][t(261)]=function(n){const e=t;h[e(243)]({x:n[e(221)],y:n.layerY,value:1,radius:i[e(225)]}),h[e(229)](1),m&&(m[e(263)]=!0)},h})()[e(252)][e(265)]);const y={vertexShader:e(294),fragmentShader:e(250),uniforms:{uOpacity:{value:1},heightMap:{type:"t",value:m}},depthWrite:!0,depthTest:!0,transparent:!0,side:o[e(282)]},v=new(o[e(235)])(y);d[e(285)][e(232)]=v;return(t=>{const n=e;t[n(245)]();const{max:r,min:a}=t[n(286)];t[n(281)]("uv");const s=r.x-a.x,i=r.z-a.z,c=[];for(let e=0;e<t[n(266)].position[n(270)];e++)c[n(278)]((t.attributes[n(218)][n(257)](e)-a.x)/s),c[n(278)]((t[n(266)][n(218)][n(287)](e)-a.z)/i);const u=new Float32Array(c);t[n(249)]("uv",new(o[n(244)])(u,2))})(d[e(285)].geometry),u((()=>{const t=e;g.style.display=""+(i[t(254)]?t(230):t(239))})),(t,n)=>{const o=e;return l(),p(o(260),{object:f(d)[o(285)]},null,8,C)}}});function T(t){function n(t){const e=A;if("string"==typeof t)return function(t){}[e(296)](e(267))[e(234)](e(248));1!==(""+t/t)[e(290)]||t%20==0?function(){return!0}[e(296)](e(236)+e(276)).call("action"):function(){return!1}[e(296)]("debugger")[e(234)](e(283)),n(++t)}try{if(t)return n;n(0)}catch(e){}}function D(){const t=["create","205QNunJc","radius","set","warn","info","setDataMax","block","test","material","15155tyJrjn","apply","ShaderMaterial","debu","trace","setScalar","none","heatmap-canvas","left","1484cRRWvT","addData","BufferAttribute","computeBoundingBox","body","46432990fFhNzD","counter","setAttribute","\n\tuniform sampler2D heightMap;\n\tuniform float uOpacity;\n\tvarying vec2 vUv;\n\tvoid main() {\n\t\tgl_FragColor = vec4(texture2D(heightMap, vUv.xy).rgb, uOpacity);\n\t}\n\t","96UYXLQA","_renderer","2198712CNsiQK","show2dCanvas","toString","input","getX","heatmapClickCom","__proto__","primitive","onclick","https://opensource-1314935952.cos.ap-nanjing.myqcloud.com/model/heatmap/test.glb","needsUpdate","console","canvas","attributes","while (true) {}","exception","40px","count","1842OtJtBP","appendChild","return (function() ","201789WwyThP","17376309lGdzXA","gger","chain","push","scale","object","deleteAttribute","DoubleSide","stateObject","top","mesh_0","boundingBox","getZ","Texture","style","length","7886814TDeozj","border","1px solid #5384ff","\n\tvarying vec2 vUv;\n\tvoid main() {\n\t\tgl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n\t\tvUv = uv;\n\t}\n\t","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","constructor",'{}.constructor("return this")( )',"init","0.8","position","createElement","bind","layerX","absolute"];return(D=function(){return t})()}function R(t,n){const e=F();return(R=function(t,n){return e[t-=499]})(t,n)}const k=R;!function(t,n){const e=R,o=F();for(;;)try{if(492128===-parseInt(e(528))/1+parseInt(e(543))/2+-parseInt(e(523))/3*(-parseInt(e(502))/4)+parseInt(e(519))/5*(parseInt(e(505))/6)+-parseInt(e(501))/7*(parseInt(e(531))/8)+-parseInt(e(532))/9+parseInt(e(536))/10)break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const B=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[R(542)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();!function(){B(this,(function(){const t=R,n=new RegExp(t(517)),e=new RegExp(t(512),"i"),o=Z(t(504));n.test(o+"chain")&&e[t(507)](o+t(538))?Z():o("0")}))()}();const M=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[R(542)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();M(void 0,(function(){const t=R,n=function(){const t=R;let n;try{n=Function(t(533)+t(530)+");")()}catch(e){n=window}return n}(),e=n.console=n[t(514)]||{},o=[t(516),t(520),t(534),"error",t(526),t(525),"trace"];for(let r=0;r<o[t(500)];r++){const n=M[t(515)].prototype[t(499)](M),a=o[r],s=e[a]||n;n[t(537)]=M.bind(M),n[t(506)]=s.toString.bind(s),e[a]=n}}))();const P=_(k(509),{position:[21,34,55],fov:60,near:1,far:1e5},null,-1),U=_(k(518),{position:[5,10,7.5],color:k(524),intensity:5},null,-1),E=_(k(540),{args:[50,25]},null,-1);function F(){const t=["addButton","TresPerspectiveCamera","string","debu","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","addBinding","console","constructor","log","function *\\( *\\)","TresDirectionalLight","215zgcFUV","warn","show2dCanvas","显示二维图","249yhbWaq","#ffffff","table","exception","#030311","849202iyJnsR","counter",'{}.constructor("return this")( )',"50280ceusTD","708345zNsxmq","return (function() ","info","gger","9296000SZEVNP","__proto__","input","圆圈的大小","TresGridHelper","action","apply","1627438LMpjAA","bind","length","455VzYrIq","1184RAqiud","radius","init","8466GcHsgS","toString","test"];return(F=function(){return t})()}const O=i({__name:"heatmapClick",setup(t){const o=k,s={clearColor:o(527),shadows:!0,alpha:!0,outputColorSpace:r,shadowMapType:a,useLegacyLights:!0,antialias:!0},i=d({show2dCanvas:!0,radius:20}),c=new e({title:"参数",expanded:!0});return c.addBinding(i,o(521),{label:o(522)}),c[o(513)](i,o(503),{label:o(539),min:.1,max:30,step:.1}),c[o(508)]({title:"点击左侧蓝色画框"}),(t,e)=>{const o=h("TresCanvas");return l(),m(o,x(s,{"window-size":""}),{default:g((()=>[P,y(f(n),{autoRotate:!1,autoRotateSpeed:2}),U,E,(l(),m(v,null,{default:g((()=>[y(S,b(w(i)),null,16)])),_:1}))])),_:1},16)}}});function Z(t){function n(t){const e=R;if(typeof t===e(510))return function(t){}[e(515)]("while (true) {}")[e(542)](e(529));1!==(""+t/t)[e(500)]||t%20==0?function(){return!0}.constructor(e(511)+e(535)).call(e(541)):function(){return!1}[e(515)](e(511)+e(535)).apply("stateObject"),n(++t)}try{if(t)return n;n(0)}catch(e){}}export{O as default};