import{a as t,U as n}from"./@tresjs.bLKO3xyw1731379053498.js";import{P as e}from"./tweakpane.yHWGBmom1731379053498.js";import{_ as o,ak as r,al as a}from"./three.bXjbKLxC1731379053498.js";import{_ as s}from"./heatmap.js-fix.xXqX1yMJ1731379053498.js";import{d as i,a6 as c,a3 as u,o as l,D as p,u as f,r as d,e as h,f as m,g,J as y,j as v,al as b,aj as w,ak as x,m as _}from"./@vue.-THQH3GC1731379053498.js";import"./@vueuse.DWZrQ1Sl1731379053498.js";import"./@amap.mFH-iVTk1731379053498.js";const I=M;!function(t,n){const e=M,o=U();for(;;)try{if(415249===parseInt(e(195))/1+-parseInt(e(216))/2*(-parseInt(e(211))/3)+parseInt(e(220))/4*(-parseInt(e(231))/5)+parseInt(e(222))/6*(parseInt(e(251))/7)+-parseInt(e(199))/8*(-parseInt(e(242))/9)+parseInt(e(227))/10+parseInt(e(273))/11*(-parseInt(e(240))/12))break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const j=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[M(200)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();!function(){j(this,(function(){const t=M,n=new RegExp(t(198)),e=new RegExp(t(207),"i"),o=O("init");n[t(208)](o+"chain")&&e[t(208)](o+t(266))?O():o("0")}))()}();const C=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[M(200)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();function U(){const t=["counter","function *\\( *\\)","8yPRKbl","apply","radius","layerY","prototype","call",'{}.constructor("return this")( )',"_renderer","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","test","computeBoundingBox","setAttribute","7509OdEODS","absolute","1px solid #5384ff","string","getZ","598JtUhnI","__proto__","style","push","10608cyXwib","boundingBox","2342622OWVvPU","debu","set","left","setDataMax","3356260FsszpY","mesh_0","\n\tvarying vec2 vUv;\n\tvoid main() {\n\t\tgl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n\t\tvUv = uv;\n\t}\n\t","appendChild","1055dsbUFY","canvas","log","https://opensource-1314935952.cos.ap-nanjing.myqcloud.com/model/heatmap/test.glb","bind","length","material","layerX","warn","162804HyKqfq","needsUpdate","4649571lsMNtN","stateObject","constructor","border","primitive","setScalar","\n\tuniform sampler2D heightMap;\n\tuniform float uOpacity;\n\tvarying vec2 vUv;\n\tvoid main() {\n\t\tgl_FragColor = vec4(texture2D(heightMap, vUv.xy).rgb, uOpacity);\n\t}\n\t","top","info","7jtjAHq","deleteAttribute","count","Texture","table","show2dCanvas","heatmapClickCom","attributes","geometry","toString","action","console","getX","gger","none","input","DoubleSide","scale","40px","body","block","position","880SQUgmC","0.8","BufferAttribute","while (true) {}","ShaderMaterial","./draco/","create","69102DalyRX","object"];return(U=function(){return t})()}C(void 0,(function(){const t=M,n=function(){const t=M;let n;try{n=Function("return (function() "+t(205)+");")()}catch(e){n=window}return n}(),e=n.console=n[t(262)]||{},o=[t(233),t(239),t(250),"error","exception",t(255),"trace"];for(let r=0;r<o[t(236)];r++){const n=C[t(244)][t(203)][t(235)](C),a=o[r],s=e[a]||n;n[t(217)]=C[t(235)](C),n.toString=s[t(260)].bind(s),e[a]=n}}))();const S=[I(196)],A=i({__name:I(257),props:{show2dCanvas:{type:Boolean,default:!0},radius:{default:20}},async setup(n){const e=I;let r,a;const i=n,{nodes:d}=([r,a]=c((()=>t(e(234),{draco:!0,decoderPath:e(278)}))),r=await r,a(),r);d[e(228)][e(272)][e(224)](-5088.96,-3.08,39374.7),d[e(228)][e(268)][e(247)](.01);let h=null,m=null,g=null;m=new(o[e(254)])((()=>{const t=e;return g=document.createElement("heatmap-canvas"),g[t(218)][t(272)]=t(212),g[t(218)][t(249)]=t(269),g.style[t(225)]="0",document[t(270)][t(230)](g),h=s[t(279)]({container:g,width:256,height:256,blur:t(274),radius:i[t(201)]}),h._renderer[t(232)].style[t(245)]=t(213),h[t(206)][t(232)].onclick=function(n){const e=t;h.addData({x:n[e(238)],y:n[e(202)],value:1,radius:i[e(201)]}),h[e(226)](1),m&&(m[e(241)]=!0)},h})()[e(206)][e(232)]);const y={vertexShader:e(229),fragmentShader:e(248),uniforms:{uOpacity:{value:1},heightMap:{type:"t",value:m}},depthWrite:!0,depthTest:!0,transparent:!0,side:o[e(267)]},v=new(o[e(277)])(y);d[e(228)][e(237)]=v;return(t=>{const n=e;t[n(209)]();const{max:r,min:a}=t[n(221)];t[n(252)]("uv");const s=r.x-a.x,i=r.z-a.z,c=[];for(let e=0;e<t[n(258)][n(272)][n(253)];e++)c[n(219)]((t[n(258)].position[n(263)](e)-a.x)/s),c[n(219)]((t.attributes[n(272)][n(215)](e)-a.z)/i);const u=new Float32Array(c);t[n(210)]("uv",new(o[n(275)])(u,2))})(d[e(228)][e(259)]),u((()=>{const t=e;g[t(218)].display=""+(i[t(256)]?t(271):t(265))})),(t,n)=>{const o=e;return l(),p(o(246),{object:f(d).mesh_0},null,8,S)}}});function M(t,n){const e=U();return(M=function(t,n){return e[t-=195]})(t,n)}function O(t){function n(t){const e=M;if(typeof t===e(214))return function(t){}.constructor(e(276))[e(200)](e(197));1!==(""+t/t).length||t%20==0?function(){return!0}[e(244)](e(223)+e(264))[e(204)](e(261)):function(){return!1}[e(244)]("debu"+e(264))[e(200)](e(243)),n(++t)}try{if(t)return n;n(0)}catch(e){}}const k=B;function z(){const t=["table","85KCrTRA",'{}.constructor("return this")( )',"9704BdbdUc","TresDirectionalLight","debu","string","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","点击左侧蓝色画框","test","addButton","length","TresPerspectiveCamera","counter","5668131UMxXdv","info","TresGridHelper","bind","45801WfbUfn","constructor","1200127IlHghr","trace","init","1534108lXibyQ","console","addBinding","53484JQAiOx","heatmapClick","radius","apply","input","while (true) {}","return (function() ","圆圈的大小","gger","chain","1296582gyOdNM","exception","696oChCom","function *\\( *\\)","toString","call"];return(z=function(){return t})()}!function(t,n){const e=B,o=z();for(;;)try{if(626720===-parseInt(e(426))/1+parseInt(e(429))/2+-parseInt(e(432))/3+-parseInt(e(451))/4*(-parseInt(e(449))/5)+-parseInt(e(442))/6+parseInt(e(420))/7+-parseInt(e(444))/8*(-parseInt(e(424))/9))break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const D=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[B(435)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();!function(){D(this,(function(){const t=B,n=new RegExp(t(445)),e=new RegExp(t(455),"i"),o=E(t(428));n[t(415)](o+t(441))&&e[t(415)](o+t(436))?E():o("0")}))()}();const R=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[B(435)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();function B(t,n){const e=z();return(B=function(t,n){return e[t-=415]})(t,n)}R(void 0,(function(){const t=B;let n;try{n=Function(t(438)+t(450)+");")()}catch(r){n=window}const e=n[t(430)]=n[t(430)]||{},o=["log","warn",t(421),"error",t(443),t(448),t(427)];for(let a=0;a<o[t(417)];a++){const n=R[t(425)].prototype.bind(R),r=o[a],s=e[r]||n;n.__proto__=R.bind(R),n[t(446)]=s[t(446)][t(423)](s),e[r]=n}}))();const T=i({__name:k(433),setup(t){const o=k,s={clearColor:"#030311",shadows:!0,alpha:!0,outputColorSpace:r,shadowMapType:a,useLegacyLights:!0,antialias:!0},i=d({show2dCanvas:!0,radius:20}),c=new e({title:"参数",expanded:!0});return c[o(431)](i,"show2dCanvas",{label:"显示二维图"}),c[o(431)](i,o(434),{label:o(439),min:.1,max:30,step:.1}),c[o(416)]({title:o(456)}),(t,e)=>{const r=o,a=h("TresCanvas");return l(),m(a,_(s,{"window-size":""}),{default:g((()=>[e[0]||(e[0]=y(r(418),{position:[21,34,55],fov:60,near:1,far:1e5},null,-1)),v(f(n),{autoRotate:!1,autoRotateSpeed:2}),e[1]||(e[1]=y(r(452),{position:[5,10,7.5],color:"#ffffff",intensity:5},null,-1)),e[2]||(e[2]=y(r(422),{args:[50,25]},null,-1)),(l(),m(b,null,{default:g((()=>[v(A,w(x(i)),null,16)])),_:1}))])),_:1},16)}}});function E(t){function n(t){const e=B;if(typeof t===e(454))return function(t){}[e(425)](e(437))[e(435)](e(419));1!==(""+t/t)[e(417)]||t%20==0?function(){return!0}[e(425)](e(453)+e(440))[e(447)]("action"):function(){return!1}.constructor(e(453)+e(440))[e(435)]("stateObject"),n(++t)}try{if(t)return n;n(0)}catch(e){}}export{T as default};