import{_ as n}from"./index.B58Un1ud1724511658098.js";import{a6 as t,j as e}from"./three.6cxCQsIj1724511658098.js";import{p as o,$ as r,a as c,d as i}from"./@tresjs.6SjGVF2a1724511658098.js";import{a as s}from"./index.HtCYeuim1724511658098.js";import{g as a}from"./gsap.5FgWo1mD1724511658098.js";import{d as u,o as f,D as g,J as l,u as p,aj as v,ak as y,a4 as m,b as w,F as x,e as d,f as _,g as z,j as h,al as P}from"./@vue.Q1VpS3901724511658098.js";import"./index.CoSlN9z41724511658098.js";import"./@fesjs.OLRUJJVs1724511658098.js";import"./vue-router.LcUeGvdC1724511658098.js";import"./lodash-es.nFpJXAf-1724511658098.js";import"./@vueuse.rsVLbIR91724511658098.js";import"./@qlin.yHhFDldE1724511658098.js";import"./pinia.NmL3PGxA1724511658098.js";import"./@floating-ui.BPbuo5Gx1724511658098.js";import"./@juggle.7yjBMqoW1724511658098.js";import"./chalk.w3XuUwyA1724511658098.js";/* empty css                                 */import"./iconify-icon.l-H2-fnN1724511658098.js";import"./@iconify.9PoCakEb1724511658098.js";import"./tweakpane.yHWGBmom1724511658098.js";import"./utils.-xSU0-pR1724511658098.js";import"./default.vue_vue_type_script_setup_true_lang.2nZo2Ln21724511658098.js";import"./three-mesh-ui.module.IX95LHu51724511658098.js";import"./three-stdlib.eSyESjZu1724511658098.js";import"./@pmndrs.ZvP486_R1724511658098.js";import"./object-hash.Ic9VzAZ81724511658098.js";import"./@amap.T3VNXNvb1724511658098.js";import"./jszip.GTkatbFy1724511658098.js";function I(){const n=["1482024TNRnvI","string","bind","info","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","log","1jCIKic","error","trace","call","2731360GkKqnN","action","return (function() ","test","console","2072043sxDppI","input","toString","1317158JBHhPK","debu","18rXbzCI","constructor","stateObject","gger","length","chain","apply","table","5118575cQJEHP","\n//\tClassic Perlin 3D Noise \n//\tby Stefan Gustavson\n//\nvec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}\nvec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}\nvec4 fade(vec4 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}\n\nfloat cnoise(vec4 P){\n  ;\n  vec4 Pi0 = floor(P); // Integer part for indexing\n  vec4 Pi1 = Pi0 + 1.0; // Integer part + 1\n  Pi0 = mod(Pi0, 289.0);\n  Pi1 = mod(Pi1, 289.0);\n  vec4 Pf0 = fract(P); // Fractional part for interpolation\n  vec4 Pf1 = Pf0 - 1.0; // Fractional part - 1.0\n  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n  vec4 iy = vec4(Pi0.yy, Pi1.yy);\n  vec4 iz0 = vec4(Pi0.zzzz);\n  vec4 iz1 = vec4(Pi1.zzzz);\n  vec4 iw0 = vec4(Pi0.wwww);\n  vec4 iw1 = vec4(Pi1.wwww);\n\n  vec4 ixy = permute(permute(ix) + iy);\n  vec4 ixy0 = permute(ixy + iz0);\n  vec4 ixy1 = permute(ixy + iz1);\n  vec4 ixy00 = permute(ixy0 + iw0);\n  vec4 ixy01 = permute(ixy0 + iw1);\n  vec4 ixy10 = permute(ixy1 + iw0);\n  vec4 ixy11 = permute(ixy1 + iw1);\n\n  vec4 gx00 = ixy00 / 7.0;\n  vec4 gy00 = floor(gx00) / 7.0;\n  vec4 gz00 = floor(gy00) / 6.0;\n  gx00 = fract(gx00) - 0.5;\n  gy00 = fract(gy00) - 0.5;\n  gz00 = fract(gz00) - 0.5;\n  vec4 gw00 = vec4(0.75) - abs(gx00) - abs(gy00) - abs(gz00);\n  vec4 sw00 = step(gw00, vec4(0.0));\n  gx00 -= sw00 * (step(0.0, gx00) - 0.5);\n  gy00 -= sw00 * (step(0.0, gy00) - 0.5);\n\n  vec4 gx01 = ixy01 / 7.0;\n  vec4 gy01 = floor(gx01) / 7.0;\n  vec4 gz01 = floor(gy01) / 6.0;\n  gx01 = fract(gx01) - 0.5;\n  gy01 = fract(gy01) - 0.5;\n  gz01 = fract(gz01) - 0.5;\n  vec4 gw01 = vec4(0.75) - abs(gx01) - abs(gy01) - abs(gz01);\n  vec4 sw01 = step(gw01, vec4(0.0));\n  gx01 -= sw01 * (step(0.0, gx01) - 0.5);\n  gy01 -= sw01 * (step(0.0, gy01) - 0.5);\n\n  vec4 gx10 = ixy10 / 7.0;\n  vec4 gy10 = floor(gx10) / 7.0;\n  vec4 gz10 = floor(gy10) / 6.0;\n  gx10 = fract(gx10) - 0.5;\n  gy10 = fract(gy10) - 0.5;\n  gz10 = fract(gz10) - 0.5;\n  vec4 gw10 = vec4(0.75) - abs(gx10) - abs(gy10) - abs(gz10);\n  vec4 sw10 = step(gw10, vec4(0.0));\n  gx10 -= sw10 * (step(0.0, gx10) - 0.5);\n  gy10 -= sw10 * (step(0.0, gy10) - 0.5);\n\n  vec4 gx11 = ixy11 / 7.0;\n  vec4 gy11 = floor(gx11) / 7.0;\n  vec4 gz11 = floor(gy11) / 6.0;\n  gx11 = fract(gx11) - 0.5;\n  gy11 = fract(gy11) - 0.5;\n  gz11 = fract(gz11) - 0.5;\n  vec4 gw11 = vec4(0.75) - abs(gx11) - abs(gy11) - abs(gz11);\n  vec4 sw11 = step(gw11, vec4(0.0));\n  gx11 -= sw11 * (step(0.0, gx11) - 0.5);\n  gy11 -= sw11 * (step(0.0, gy11) - 0.5);\n\n  vec4 g0000 = vec4(gx00.x,gy00.x,gz00.x,gw00.x);\n  vec4 g1000 = vec4(gx00.y,gy00.y,gz00.y,gw00.y);\n  vec4 g0100 = vec4(gx00.z,gy00.z,gz00.z,gw00.z);\n  vec4 g1100 = vec4(gx00.w,gy00.w,gz00.w,gw00.w);\n  vec4 g0010 = vec4(gx10.x,gy10.x,gz10.x,gw10.x);\n  vec4 g1010 = vec4(gx10.y,gy10.y,gz10.y,gw10.y);\n  vec4 g0110 = vec4(gx10.z,gy10.z,gz10.z,gw10.z);\n  vec4 g1110 = vec4(gx10.w,gy10.w,gz10.w,gw10.w);\n  vec4 g0001 = vec4(gx01.x,gy01.x,gz01.x,gw01.x);\n  vec4 g1001 = vec4(gx01.y,gy01.y,gz01.y,gw01.y);\n  vec4 g0101 = vec4(gx01.z,gy01.z,gz01.z,gw01.z);\n  vec4 g1101 = vec4(gx01.w,gy01.w,gz01.w,gw01.w);\n  vec4 g0011 = vec4(gx11.x,gy11.x,gz11.x,gw11.x);\n  vec4 g1011 = vec4(gx11.y,gy11.y,gz11.y,gw11.y);\n  vec4 g0111 = vec4(gx11.z,gy11.z,gz11.z,gw11.z);\n  vec4 g1111 = vec4(gx11.w,gy11.w,gz11.w,gw11.w);\n\n  vec4 norm00 = taylorInvSqrt(vec4(dot(g0000, g0000), dot(g0100, g0100), dot(g1000, g1000), dot(g1100, g1100)));\n  g0000 *= norm00.x;\n  g0100 *= norm00.y;\n  g1000 *= norm00.z;\n  g1100 *= norm00.w;\n\n  vec4 norm01 = taylorInvSqrt(vec4(dot(g0001, g0001), dot(g0101, g0101), dot(g1001, g1001), dot(g1101, g1101)));\n  g0001 *= norm01.x;\n  g0101 *= norm01.y;\n  g1001 *= norm01.z;\n  g1101 *= norm01.w;\n\n  vec4 norm10 = taylorInvSqrt(vec4(dot(g0010, g0010), dot(g0110, g0110), dot(g1010, g1010), dot(g1110, g1110)));\n  g0010 *= norm10.x;\n  g0110 *= norm10.y;\n  g1010 *= norm10.z;\n  g1110 *= norm10.w;\n\n  vec4 norm11 = taylorInvSqrt(vec4(dot(g0011, g0011), dot(g0111, g0111), dot(g1011, g1011), dot(g1111, g1111)));\n  g0011 *= norm11.x;\n  g0111 *= norm11.y;\n  g1011 *= norm11.z;\n  g1111 *= norm11.w;\n\n  float n0000 = dot(g0000, Pf0);\n  float n1000 = dot(g1000, vec4(Pf1.x, Pf0.yzw));\n  float n0100 = dot(g0100, vec4(Pf0.x, Pf1.y, Pf0.zw));\n  float n1100 = dot(g1100, vec4(Pf1.xy, Pf0.zw));\n  float n0010 = dot(g0010, vec4(Pf0.xy, Pf1.z, Pf0.w));\n  float n1010 = dot(g1010, vec4(Pf1.x, Pf0.y, Pf1.z, Pf0.w));\n  float n0110 = dot(g0110, vec4(Pf0.x, Pf1.yz, Pf0.w));\n  float n1110 = dot(g1110, vec4(Pf1.xyz, Pf0.w));\n  float n0001 = dot(g0001, vec4(Pf0.xyz, Pf1.w));\n  float n1001 = dot(g1001, vec4(Pf1.x, Pf0.yz, Pf1.w));\n  float n0101 = dot(g0101, vec4(Pf0.x, Pf1.y, Pf0.z, Pf1.w));\n  float n1101 = dot(g1101, vec4(Pf1.xy, Pf0.z, Pf1.w));\n  float n0011 = dot(g0011, vec4(Pf0.xy, Pf1.zw));\n  float n1011 = dot(g1011, vec4(Pf1.x, Pf0.y, Pf1.zw));\n  float n0111 = dot(g0111, vec4(Pf0.x, Pf1.yzw));\n  float n1111 = dot(g1111, Pf1);\n\n  vec4 fade_xyzw = fade(Pf0);\n  vec4 n_0w = mix(vec4(n0000, n1000, n0100, n1100), vec4(n0001, n1001, n0101, n1101), fade_xyzw.w);\n  vec4 n_1w = mix(vec4(n0010, n1010, n0110, n1110), vec4(n0011, n1011, n0111, n1111), fade_xyzw.w);\n  vec4 n_zw = mix(n_0w, n_1w, fade_xyzw.z);\n  vec2 n_yzw = mix(n_zw.xy, n_zw.zw, fade_xyzw.y);\n  float n_xyzw = mix(n_yzw.x, n_yzw.y, fade_xyzw.x);\n  return 2.2 * n_xyzw;\n}\n","827904fJxHHx","warn",'{}.constructor("return this")( )',"1353155slpjSy"];return(I=function(){return n})()}const b=S;!function(n,t){const e=S,o=I();for(;;)try{if(433028===parseInt(e(287))/1*(parseInt(e(299))/2)+-parseInt(e(281))/3+parseInt(e(291))/4+-parseInt(e(280))/5*(parseInt(e(301))/6)+parseInt(e(275))/7+-parseInt(e(277))/8+-parseInt(e(296))/9)break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const j=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e[S(273)](t,arguments);return e=null,n}}:function(){};return n=!1,o}}();!function(){j(this,(function(){const n=S,t=new RegExp("function *\\( *\\)"),e=new RegExp(n(285),"i"),o=k("init");t[n(294)](o+n(272))&&e[n(294)](o+n(297))?k():o("0")}))()}();const C=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e[S(273)](t,arguments);return e=null,n}}:function(){};return n=!1,o}}();function S(n,t){const e=I();return(S=function(n,t){return e[n-=270]})(n,t)}C(void 0,(function(){const n=S,t=function(){const n=S;let t;try{t=Function(n(293)+n(279)+");")()}catch(e){t=window}return t}(),e=t.console=t[n(295)]||{},o=[n(286),n(278),n(284),n(288),"exception",n(274),n(289)];for(let r=0;r<o[n(271)];r++){const t=C[n(302)].prototype.bind(C),c=o[r],i=e[c]||t;t.__proto__=C[n(283)](C),t.toString=i[n(298)][n(283)](i),e[c]=t}}))();const A=b(276);function k(n){function t(n){const e=S;if(typeof n===e(282))return function(n){}.constructor("while (true) {}")[e(273)]("counter");1!==(""+n/n)[e(271)]||n%20==0?function(){return!0}[e(302)](e(300)+e(270))[e(290)](e(292)):function(){return!1}.constructor("debu"+e(270))[e(273)](e(303)),t(++n)}try{if(n)return t;t(0)}catch(e){}}function T(){const n=["apply","510ZMdLsa","counter","25460LJPuLg","debu","init","stateObject","warn","length","info","call","constructor","10FoViQm","toString","6056809iCJkYY","5708568AtZLLz","287019bkTzRG","error","function *\\( *\\)","72477AYjlit","chain","20fTyAMc","test","gger","string",'{}.constructor("return this")( )',"6411056VKQYIw","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","bind","input","log","7wCVzfG","action","console","while (true) {}","prototype","return (function() ","5009FmWnyJ"];return(T=function(){return n})()}function M(n,t){const e=T();return(M=function(n,t){return e[n-=310]})(n,t)}!function(n,t){const e=M,o=T();for(;;)try{if(490065===parseInt(e(318))/1*(parseInt(e(331))/2)+-parseInt(e(338))/3+-parseInt(e(322))/4*(parseInt(e(320))/5)+-parseInt(e(334))/6*(-parseInt(e(312))/7)+parseInt(e(345))/8+-parseInt(e(335))/9*(parseInt(e(340))/10)+-parseInt(e(333))/11)break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const E=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e.apply(t,arguments);return e=null,n}}:function(){};return n=!1,o}}();!function(){E(this,(function(){const n=M,t=new RegExp(n(337)),e=new RegExp(n(346),"i"),o=U(n(324));t[n(341)](o+n(339))&&e.test(o+n(310))?U():o("0")}))()}();const F=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e[M(319)](t,arguments);return e=null,n}}:function(){};return n=!1,o}}();F(void 0,(function(){const n=M;let t;try{t=Function(n(317)+n(344)+");")()}catch(r){t=window}const e=t.console=t[n(314)]||{},o=[n(311),n(326),n(328),n(336),"exception","table","trace"];for(let c=0;c<o[n(327)];c++){const t=F.constructor[n(316)][n(347)](F),r=o[c],i=e[r]||t;t.__proto__=F[n(347)](F),t[n(332)]=i[n(332)][n(347)](i),e[r]=t}}))();const R=[9205247,6094763,16206474,4059890];function U(n){function t(n){const e=M;if(typeof n===e(343))return function(n){}[e(330)](e(315))[e(319)](e(321));1!==(""+n/n)[e(327)]||n%20==0?function(){return!0}[e(330)](e(323)+e(342))[e(329)](e(313)):function(){return!1}.constructor(e(323)+"gger")[e(319)](e(325)),t(++n)}try{if(n)return t;t(0)}catch(e){}}const O=$;!function(n,t){const e=$,o=B();for(;;)try{if(982727===parseInt(e(306))/1*(parseInt(e(337))/2)+parseInt(e(334))/3+-parseInt(e(329))/4*(-parseInt(e(353))/5)+-parseInt(e(335))/6+-parseInt(e(350))/7+-parseInt(e(322))/8+-parseInt(e(344))/9*(-parseInt(e(347))/10))break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const G=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e[$(320)](t,arguments);return e=null,n}}:function(){};return n=!1,o}}();!function(){G(this,(function(){const n=$,t=new RegExp(n(312)),e=new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","i"),o=K(n(349));t.test(o+"chain")&&e[n(307)](o+"input")?K():o("0")}))()}();const Z=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e[$(320)](t,arguments);return e=null,n}}:function(){};return n=!1,o}}();function B(){const n=["2bWPfhO","u_time","constructor","console","power1.out","stateObject","exception","2997WNQGzd","value","counter","32710uOinFG","return (function() ","init","3591987lvSIPQ","object","u_progress","82465mQBhNF","width","action","background","u_color","558784qCGCMD","test","bind","prototype","\n\t\tvarying vec2 vUv;\n    void main() {\n      vUv = uv;\n      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n    }\n\t\t","Color","function *\\( *\\)","TresMesh","args","height","table","length","debu","uniforms","apply","toString","8848848KihnhS","TresShaderMaterial",'{}.constructor("return this")( )',"string","gger","\n\n    void main() {\n        vec2 newUv = (vUv - vec2(0.5)) * vec2(u_aspect,1.);\n        float dist = length(newUv);\n        float density = 1.8 - dist;\n        float noise = cnoise(vec4(newUv*40.*density, u_time, 1.));\n        float grain = (fract(sin(dot(vUv, vec2(12.9898,78.233)*2000.0)) * 43758.5453));\n        \n        float facets = noise*2.;\n        float dots = smoothstep(0.1, 0.15, noise);\n        float n = facets * dots;\n        n = step(.2,facets)*dots;\n        n = 1. - n;\n\n        float radius = 1.5;\n        float outerProgress = clamp(1.1*u_progress, 0., 1.);\n        float innerProgress = clamp(1.1*u_progress - 0.05, 0., 1.);\n  \n        float innerCircle = 1. - smoothstep((innerProgress-0.4)*radius, innerProgress*radius, dist);\n        float outerCircle = 1. - smoothstep((outerProgress-0.1)*radius, innerProgress*radius, dist);\n  \n        float displacement = outerCircle-innerCircle;\n        \n        float grainStrength = 0.3;\n        vec3 final = vec3(displacement-(n+noise)) - vec3(grain*grainStrength);\n\n        gl_FragColor = vec4(final, 1.0);\n        gl_FragColor.rgb*=u_color*2.;\n\n        #include <colorspace_fragment>\n    }\n\t\t","error","164BygROO","material","log","colorIndex","TresPlaneGeometry","3058011lLwxCm","4449618ycBvjE","\n\tuniform float u_time;\n    uniform float u_progress;\n    uniform float u_aspect;\n    uniform vec3 u_color;\n    varying vec2 vUv;\n    #define PI 3.14159265\n    "];return(B=function(){return n})()}Z(void 0,(function(){const n=$;let t;try{t=Function(n(348)+n(324)+");")()}catch(r){t=window}const e=t[n(340)]=t[n(340)]||{},o=[n(331),"warn","info",n(328),n(343),n(316),"trace"];for(let c=0;c<o[n(317)];c++){const t=Z[n(339)][n(309)][n(308)](Z),r=o[c],i=e[r]||t;t.__proto__=Z[n(308)](Z),t[n(321)]=i[n(321)][n(308)](i),e[r]=t}}))();const L=[O(314)];function $(n,t){const e=B();return($=function(n,t){return e[n-=302]})(n,t)}const q=u({__name:O(304),setup(n){const e=O,{sizes:c}=o();let i=0;const s={uniforms:{u_time:{value:0},u_progress:{value:0},u_aspect:{value:c.width.value/c[e(315)][e(345)]},u_color:{value:new(t[e(311)])(R[i])}},vertexShader:e(310),fragmentShader:e(336)+A+e(327)};function u(n){const o=e;if(n&&n.object&&n[o(351)].material){++i>=R[o(317)]&&(i=0),console[o(331)](o(332),i),n[o(351)][o(330)][o(319)][o(305)][o(345)]=new(t[o(311)])(R[i]);const e=n[o(351)][o(330)][o(319)][o(352)];a.killTweensOf(e),e[o(345)]=0,a.to(e,{duration:2,ease:o(341),value:1})}}const{onLoop:m}=r();return m((({elapsed:n})=>{const t=e;s&&(s[t(319)][t(338)][t(345)]=n)})),(n,t)=>{const o=e;return f(),g(o(313),{onClick:u},[l(o(333),{args:[p(c)[o(302)][o(345)]/50,p(c)[o(315)][o(345)]/50]},null,8,L),l(o(323),v(y(s)),null,16)])}}});function K(n){function t(n){const e=$;if(typeof n===e(325))return function(n){}[e(339)]("while (true) {}").apply(e(346));1!==(""+n/n)[e(317)]||n%20==0?function(){return!0}[e(339)](e(318)+e(326)).call(e(303)):function(){return!1}[e(339)](e(318)+e(326)).apply(e(342)),t(++n)}try{if(n)return t;t(0)}catch(e){}}const Y=V;!function(n,t){const e=V,o=nn();for(;;)try{if(689186===parseInt(e(478))/1+parseInt(e(476))/2+-parseInt(e(432))/3*(parseInt(e(468))/4)+parseInt(e(463))/5*(parseInt(e(438))/6)+parseInt(e(455))/7*(parseInt(e(467))/8)+parseInt(e(460))/9+-parseInt(e(486))/10)break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const X=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e[V(442)](t,arguments);return e=null,n}}:function(){};return n=!1,o}}();function V(n,t){const e=nn();return(V=function(n,t){return e[n-=425]})(n,t)}!function(){X(this,(function(){const n=V,t=new RegExp(n(464)),e=new RegExp(n(472),"i"),o=en("init");t[n(470)](o+n(480))&&e[n(470)](o+"input")?en():o("0")}))()}();const D=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e[V(442)](t,arguments);return e=null,n}}:function(){};return n=!1,o}}();D(void 0,(function(){const n=V,t=function(){const n=V;let t;try{t=Function(n(466)+'{}.constructor("return this")( ));')()}catch(e){t=window}return t}(),e=t[n(483)]=t[n(483)]||{},o=[n(434),n(474),n(445),"error",n(441),n(429),"trace"];for(let r=0;r<o[n(452)];r++){const t=D[n(473)].prototype[n(479)](D),c=o[r],i=e[c]||t;t.__proto__=D[n(479)](D),t[n(488)]=i[n(488)][n(479)](i),e[c]=t}}))();const J=[Y(431)],N=[Y(449),Y(487)],Q=["rotation"],H=["geometry",Y(444)],W=[Y(490),Y(444)];function nn(){const n=["u_progress","geometry","u_color2","counter","u_color1","#include <common>","replace","./draco/","\n          #include <common>\n          uniform float u_time;\n          uniform vec3 u_color1;\n          uniform vec3 u_color2;\n          uniform float u_progress;\n          uniform float u_width;\n          uniform float u_scaleX;\n          uniform float u_scaleY;\n          uniform vec2 u_textureSize;\n          varying vec2 vUv;\n          ","table","debu","args","328869plvQwf","source","log","Body","object","fragmentShader","7106376UeXeKP","uniforms","roughness","exception","apply","LowRes_Can_Body_0","material","info","string","TresMesh","TresGroup","rotation","data","map","length","while (true) {}","\n          #include <begin_vertex>\n          vUv = uv;\n        ","28vXcyuW","LowRes_Can_Alluminium_0","\n          #include <color_fragment>\n            float aspect = u_textureSize.x/u_textureSize.y;\n            float dt = parabola(u_progress,1.);\n            float border = 1.;\n            float noise = 0.5*(cnoise(vec4(vUv.x*u_scaleX  + 0.5*u_time/3., vUv.y*u_scaleY,0.5*u_time/3.,0.)) + 1.);\n            float w = u_width*dt;\n            float maskValue = smoothstep(1. - w,1.,vUv.y + mix(-w/2., 1. - w/2., u_progress));\n            maskValue += maskValue * noise;\n            float mask = smoothstep(border,border+0.01,maskValue);\n            diffuseColor.rgb += mix(u_color1,u_color2,mask);\n        ","vertexShader","onBeforeCompile","2905641tTALCB","assign","\n          float parabola( float x, float k ) {\n            return pow( 4. * x * ( 1. - x ), k );\n          }\n      ","5SmnGdx","function *\\( *\\)","gger","return (function() ","1164808AXKufg","44wKOOlN","TresPlaneGeometry","test","#include <color_fragment>","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","constructor","warn","stopPropagation","2712570TFYdGj","height","710953qsSUHL","bind","chain","Color","value","console","u_time","model colorIndex","22618480EgKaRA","position","toString"];return(nn=function(){return n})()}const tn=u({__name:"model",async setup(n){const i=Y;let s,u;const{sizes:v}=o(),{nodes:y,materials:d}=([s,u]=m((()=>c("./plugins/eCommerce/model/energy-can.glb",{draco:!0,decoderPath:i(427)}))),s=await s,u(),s),_={u_time:{value:0},u_color1:{value:new(t[i(481)])(R[0])},u_color2:{value:new(t[i(481)])(R[1])},u_progress:{value:.5},u_width:{value:.8},u_scaleX:{value:50},u_scaleY:{value:50},u_textureSize:{value:new e(d.Body[i(451)][i(433)].data.width,d[i(435)][i(451)][i(433)][i(450)].height)}};d.Body.metalness=0,d[i(435)][i(440)]=1,d.Body[i(459)]=n=>{const t=i;n.uniforms=Object[t(461)](n[t(439)],_),n.vertexShader=n[t(458)][t(426)](t(425),"\n          #include <common>\n          varying vec2 vUv;\n        "),n[t(458)]=n[t(458)][t(426)]("#include <begin_vertex>",t(454)),n[t(437)]=n.fragmentShader[t(426)]("#include <common>",t(428)+A+t(462)),n[t(437)]=n[t(437)][t(426)](t(471),t(457))};let z=0;function h(n){const e=i;if(n&&n[e(436)]&&n.object[e(444)]){++z>=R.length&&(z=0),console[e(434)](e(485),z);let n=new(t[e(481)])(R[z]);_[e(491)][e(482)]=n;const o=_[e(489)];a.killTweensOf(o),o[e(482)]=.5,a.to(o,{duration:1,ease:"power1.out",value:1,onComplete:()=>{const t=e;_[t(493)][t(482)]=n}})}n[e(475)]()}let P=w(0);const{onLoop:I}=r();return I((({elapsed:n})=>{const t=i;P[t(482)]=.12*Math.sin(n),_[t(484)][t(482)]=n})),(n,t)=>{const e=i;return f(),g(x,null,[l("TresMesh",{visible:!1,onClick:h},[l(e(469),{args:[p(v).width[e(482)]/50,p(v)[e(477)][e(482)]/50]},null,8,J)]),l(e(448),{rotation:[-Math.PI/2,1.7,Math.PI/2],position:[0,p(P),5]},[l(e(448),{rotation:[-Math.PI/2,0,0]},[l(e(447),{geometry:p(y)[e(456)][e(490)],material:p(d).Alluminium},null,8,H),l(e(447),{geometry:p(y)[e(443)][e(490)],material:p(d)[e(435)]},null,8,W)],8,Q)],8,N)],64)}}});function en(n){function t(n){const e=V;if(typeof n===e(446))return function(n){}[e(473)](e(453)).apply(e(492));1!==(""+n/n)[e(452)]||n%20==0?function(){return!0}[e(473)](e(430)+e(465)).call("action"):function(){return!1}[e(473)](e(430)+e(465))[e(442)]("stateObject"),t(++n)}try{if(n)return t;t(0)}catch(e){}}const on=un;!function(n,t){const e=un,o=fn();for(;;)try{if(685414===-parseInt(e(406))/1*(parseInt(e(385))/2)+-parseInt(e(425))/3*(parseInt(e(423))/4)+-parseInt(e(404))/5+-parseInt(e(396))/6*(parseInt(e(388))/7)+parseInt(e(400))/8*(-parseInt(e(402))/9)+-parseInt(e(398))/10+parseInt(e(389))/11)break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const rn=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e[un(391)](t,arguments);return e=null,n}}:function(){};return n=!1,o}}();!function(){rn(this,(function(){const n=un,t=new RegExp(n(415)),e=new RegExp(n(426),"i"),o=ln(n(409));t.test(o+"chain")&&e[n(399)](o+n(397))?ln():o("0")}))()}();const cn=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e[un(391)](t,arguments);return e=null,n}}:function(){};return n=!1,o}}();cn(void 0,(function(){const n=un;let t;try{t=Function("return (function() "+n(410)+");")()}catch(r){t=window}const e=t.console=t[n(401)]||{},o=[n(394),n(413),"info",n(417),n(412),"table",n(392)];for(let c=0;c<o.length;c++){const t=cn.constructor[n(424)][n(422)](cn),r=o[c],i=e[r]||t;t[n(387)]=cn[n(422)](cn),t[n(408)]=i[n(408)][n(422)](i),e[r]=t}}))();const sn=l(on(414),{position:[0,0,16],fov:45,near:.1,far:1e4},null,-1),an=l(on(407),{intensity:.5},null,-1);function un(n,t){const e=fn();return(un=function(n,t){return e[n-=385]})(n,t)}function fn(){const n=["8TicCIM","TresAmbientLight","toString","init",'{}.constructor("return this")( )',"constructor","exception","warn","TresPerspectiveCamera","function *\\( *\\)","TresCanvas","error","zipTopCan","string","ACESFilmicToneMapping","length","bind","4OEBFtI","prototype","2729136OgrKsh","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","25670tyxfsA","gger","__proto__","95599GYRgDM","66139821THTjpM","minPolarAngle","apply","trace","debu","log","SRGBColorSpace","552aEFCwq","input","9548090oFcluY","test","273928kNqZwd","console","333IAxlDd","while (true) {}","4183675cnTEdE","call"];return(fn=function(){return n})()}const gn=u({__name:on(418),setup(e){const o=on,r={clearColor:"#ffffff",windowSize:!0,toneMapping:t[o(420)],toneMappingExposure:.8,shadows:!0,outputColorSpace:t[o(395)]};return(t,e)=>{const c=o,a=d(c(416));return f(),g(x,null,[(f(),_(P,null,{default:z((()=>[h(p(n))])),_:1})),h(a,v(y(r)),{default:z((()=>[sn,h(p(i),{enableDamping:"",enablePan:!1,enableZoom:!1,maxPolarAngle:Math.PI/1.7,minPolarAngle:Math.PI/2.4,maxAzimuthAngle:.1,minAzimuthAngle:-.1},null,8,["maxPolarAngle",c(390)]),an,h(q),(f(),_(P,null,{default:z((()=>[h(tn)])),_:1})),(f(),_(P,null,{default:z((()=>[h(p(s),{files:"./plugins/eCommerce/platz.hdr"})])),_:1}))])),_:1},16)],64)}}});function ln(n){function t(n){const e=un;if(typeof n===e(419))return function(n){}[e(411)](e(403))[e(391)]("counter");1!==(""+n/n)[e(421)]||n%20==0?function(){return!0}[e(411)](e(393)+e(386))[e(405)]("action"):function(){return!1}[e(411)](e(393)+e(386)).apply("stateObject"),t(++n)}try{if(n)return t;t(0)}catch(e){}}export{gn as default};