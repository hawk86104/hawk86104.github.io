import{bN as t,_ as n,C as o}from"./three.sXv6UbbL1740621336114.js";import{a as r}from"./@tresjs.Td0X-dew1740621336114.js";import{d as e,b as a,a3 as s,w as c,o as u,H as i,N as f,aj as l,ak as p}from"./@vue.NRI7TcgI1740621336114.js";!function(t,n){const o=w,r=g();for(;;)try{if(134108===parseInt(o(524))/1*(parseInt(o(529))/2)+parseInt(o(514))/3*(-parseInt(o(526))/4)+-parseInt(o(505))/5+-parseInt(o(530))/6+parseInt(o(495))/7*(parseInt(o(490))/8)+parseInt(o(519))/9+parseInt(o(516))/10)break;r.push(r.shift())}catch(e){r.push(r.shift())}}();const h=function(){let t=!0;return function(n,o){const r=t?function(){if(o){const t=o[w(532)](n,arguments);return o=null,t}}:function(){};return t=!1,r}}();!function(){h(this,(function(){const t=w,n=new RegExp(t(510)),o=new RegExp(t(515),"i"),r=_("init");n.test(r+t(527))&&o[t(511)](r+t(504))?_():r("0")}))()}();const d=function(){let t=!0;return function(n,o){const r=t?function(){if(o){const t=o[w(532)](n,arguments);return o=null,t}}:function(){};return t=!1,r}}();function g(){const t=["toString","\n\n           gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);    \n           vUv = uv;\n       }","worldpos_vertex","beginnormal_vertex","\n      \t","return (function() ","info","8wOyder","common","call","\n\n\tvoid main() {\n\t\t\tvec4 col = texture2D(uTexture, vUv * repeatTime);\n\t\t\tcol.rgb = mix( uColor , col.rgb ,0.5);\n\t\t\t\n\t\t\tfloat alpha = 1.0;\n\t\t\tfloat d = length(vUv - vec2(0.5));\n\t\t\tif(d > 0.35) {\n\t\t\t\t\talpha = 1.0 - smoothsteps( clamp( (d - 0.35) / (fEdge-0.2), 0.0, 1.0) );\n\t\t\t}\n\n\t\t vec3 addShadow = mix( uShadowColor , col.rgb ,getShadowMask());\n\n\t\t\tgl_FragColor = vec4(addShadow, alpha);  \n\t}","while (true) {}","362019BDdyWX","warn","\n       void main() {\n\t\t\t\t\t","defaultnormal_vertex","counter","gger","exception","error","\n          ","input","980570LgMzPw","begin_vertex","action","table","length","function *\\( *\\)","test","ShaderChunk","shadowmap_pars_fragment","309dTVVzK","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","3307630KdgcPB","constructor","stateObject","282078UyevXE","debu","shadowmap_pars_vertex","__proto__","console","264323xeHqhg","shadowmap_vertex","5312QRSAoX","chain","string","2OjArIt","1266834TgNBnU","\n\t ","apply","lights_pars_begin","bind"];return(g=function(){return t})()}d(void 0,(function(){const t=w;let n;try{n=Function(t(488)+'{}.constructor("return this")( ));')()}catch(e){n=window}const o=n[t(523)]=n[t(523)]||{},r=["log",t(496),t(489),t(502),t(501),t(508),"trace"];for(let a=0;a<r[t(509)];a++){const n=d[t(517)].prototype[t(534)](d),e=r[a],s=o[e]||n;n[t(522)]=d.bind(d),n[t(483)]=s[t(483)][t(534)](s),o[e]=n}}))();const m=()=>{const o=w;return"\n       varying vec2 vUv;\n\t\t\t \t"+t[o(491)]+"\n      \t"+n[o(512)].bsdfs+o(487)+n[o(512)][o(521)]+o(497)+n[o(512)][o(486)]+o(503)+n[o(512)][o(498)]+o(503)+n[o(512)][o(506)]+o(503)+t.project_vertex+"\n          "+n[o(512)][o(485)]+o(503)+n[o(512)][o(525)]+o(484)};function w(t,n){const o=g();return(w=function(t,n){return o[t-=483]})(t,n)}const v=()=>{const o=w;return"\n\tvarying vec2 vUv;\n\tuniform sampler2D uTexture;\n\tuniform vec3 uShadowColor;\n\tuniform vec3 uColor;\n\tuniform float fEdge;\n\t// ShaderMaterial 下的 纹理参数重复无效 要在着色器中增加\n\tfloat repeatTime = 100.0;\n\n\tfloat smoothsteps(float t) {\n\t\t\treturn t * t * (3.0 - 2.0 * t);\n\t}\n\n\t "+t.common+o(531)+n[o(512)].packing+o(531)+n[o(512)].bsdfs+o(531)+t[o(533)]+o(531)+n[o(512)][o(513)]+o(531)+t.shadowmask_pars_fragment+o(493)};function _(t){function n(t){const o=w;if(typeof t===o(528))return function(t){}.constructor(o(494))[o(532)](o(499));1!==(""+t/t).length||t%20==0?function(){return!0}[o(517)](o(520)+o(500))[o(492)](o(507)):function(){return!1}[o(517)]("debu"+o(500))[o(532)](o(518)),n(++t)}try{if(t)return n;n(0)}catch(o){}}const x=U;!function(t,n){const o=U,r=y();for(;;)try{if(451829===parseInt(o(228))/1+-parseInt(o(243))/2*(-parseInt(o(254))/3)+-parseInt(o(275))/4+-parseInt(o(280))/5+parseInt(o(249))/6*(parseInt(o(241))/7)+parseInt(o(263))/8*(parseInt(o(261))/9)+-parseInt(o(234))/10)break;r.push(r.shift())}catch(e){r.push(r.shift())}}();const b=function(){let t=!0;return function(n,o){const r=t?function(){if(o){const t=o.apply(n,arguments);return o=null,t}}:function(){};return t=!1,r}}();function y(){const t=["wrapT","uShadowColor","color","exception","#999","Color","3294288snlWFS","log","shadowColor","TresShaderMaterial","fEdge","151990uKNVne","merge","while (true) {}","input","554165GReSUR","toString","size","UniformsUtils","length","counter","5280020VaapoB","debu","uColor","apply","UniformsLib","RepeatWrapping","tmRef","341698vxoUBN","lights","4hBwBYA","#990","trace","bind","string","constructor","36ULwWrI","stateObject","wrapS","return (function() ","info","529635RwOuZv","function *\\( *\\)","chain","gger","action",'{}.constructor("return this")( )',"TresMesh","77067VGUkMc","uniforms","592NwhVkl","prototype","DoubleSide","table","console","value"];return(y=function(){return t})()}!function(){b(this,(function(){const t=U,n=new RegExp(t(255)),o=new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","i"),r=T("init");n.test(r+t(256))&&o.test(r+t(227))?T():r("0")}))()}();const I=function(){let t=!0;return function(n,o){const r=t?function(){if(o){const t=o.apply(n,arguments);return o=null,t}}:function(){};return t=!1,r}}();I(void 0,(function(){const t=U;let n;try{n=Function(t(252)+t(259)+");")()}catch(e){n=window}const o=n[t(267)]=n[t(267)]||{},r=[t(276),"warn",t(253),"error",t(272),t(266),t(245)];for(let a=0;a<r.length;a++){const n=I.constructor[t(264)][t(246)](I),e=r[a],s=o[e]||n;n.__proto__=I[t(246)](I),n[t(229)]=s[t(229)][t(246)](s),o[e]=n}}))();const S=["rotation-x"],C=["args"];function U(t,n){const o=y();return(U=function(t,n){return o[t-=225]})(t,n)}const j=e({__name:"whiteFloorMesh",props:{size:{default:[20,20]},color:{default:x(244)},shadowColor:{default:x(273)},edge:{default:.35}},async setup(t){const e=x;let h,d;const g=t,w=a(),{map:_}=([h,d]=s((()=>r({map:"./plugins/floor/image/whiteFloor.jpg"}))),h=await h,d(),h);_[e(251)]=_[e(269)]=n[e(239)];const b={uniforms:n[e(231)][e(225)]([n[e(238)][e(242)],{uTexture:{type:"t",value:_},uColor:{value:new(n[e(274)])(g.color)},uShadowColor:{value:new(n[e(274)])(g.shadowColor)},fEdge:{type:"f",value:g.edge}}]),side:n[e(265)],vertexShader:m(),fragmentShader:v(),lights:!0,transparent:!0};return c((()=>g.edge),(t=>{const n=e;b[n(262)][n(279)][n(268)]=t})),c((()=>g[e(271)]),(t=>{const n=e;b[n(262)][n(236)][n(268)]=new o(g[n(271)])})),c((()=>g[e(277)]),(t=>{const n=e;b[n(262)][n(270)][n(268)]=new o(g[n(277)])})),(t,n)=>{const o=e;return u(),i(o(260),{ref_key:o(240),ref:w,"rotation-x":-Math.PI/2},[f("TresPlaneGeometry",{args:g[o(230)]},null,8,C),f(o(278),l(p(b)),null,16)],8,S)}}});function T(t){function n(t){const o=U;if(typeof t===o(247))return function(t){}[o(248)](o(226))[o(237)](o(233));1!==(""+t/t)[o(232)]||t%20==0?function(){return!0}[o(248)](o(235)+o(257)).call(o(258)):function(){return!1}.constructor(o(235)+o(257))[o(237)](o(250)),n(++t)}try{if(t)return n;n(0)}catch(o){}}export{j as _};
