import{m as n,e,b as t,U as r}from"./@tresjs.qWeugQU61734239885681.js";import{W as o,k as i,cg as s,c6 as a,c4 as u,a0 as c,n as f,b6 as l}from"./three.NPKhDGTA1734239885681.js";import{d as v,a6 as p,a3 as m,o as d,D as h,J as g,u as x,F as y,e as w,f as D,g as S,j as R,al as b,m as I}from"./@vue.-THQH3GC1734239885681.js";import"./@vueuse.GyFlY0FM1734239885681.js";const _=N;!function(n,e){const t=N,r=z();for(;;)try{if(380980===parseInt(t(146))/1+parseInt(t(168))/2*(-parseInt(t(165))/3)+-parseInt(t(153))/4*(parseInt(t(127))/5)+parseInt(t(124))/6*(parseInt(t(167))/7)+parseInt(t(139))/8+-parseInt(t(144))/9+parseInt(t(130))/10)break;r.push(r.shift())}catch(o){r.push(r.shift())}}();const C=function(){let n=!0;return function(e,t){const r=n?function(){if(t){const n=t[N(140)](e,arguments);return t=null,n}}:function(){};return n=!1,r}}();!function(){C(this,(function(){const n=N,e=new RegExp(n(170)),t=new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","i"),r=k("init");e[n(131)](r+n(128))&&t[n(131)](r+"input")?k():r("0")}))()}();const E=function(){let n=!0;return function(e,t){const r=n?function(){if(t){const n=t[N(140)](e,arguments);return t=null,n}}:function(){};return n=!1,r}}();E(void 0,(function(){const n=N;let e;try{e=Function(n(173)+n(161)+");")()}catch(o){e=window}const t=e.console=e[n(135)]||{},r=[n(117),n(156),n(142),n(151),n(121),n(141),n(150)];for(let i=0;i<r[n(136)];i++){const e=E.constructor[n(123)].bind(E),o=r[i],s=t[o]||e;e[n(122)]=E.bind(E),e[n(162)]=s[n(162)][n(137)](s),t[o]=e}}))();const T=["side","rotation-x"],P=[_(163)];function N(n,e){const t=z();return(N=function(n,e){return t[n-=117]})(n,e)}function z(){const n=["innerHeight",'{}.constructor("return this")( )',"toString","side","TresMeshPhongMaterial","1647690zZziXV","TresSphereGeometry","168UGNkVS","2fVTTKy","string","function *\\( *\\)","width","\n    uniform sampler2D tDiffuse;\n    uniform sampler2D tShadow;\n    uniform vec2 iResolution;\n\n    varying vec2 vUv;\n    #define Sensitivity (vec2(0.3, 1.5) * iResolution.y / 400.0)\n    float checkSame(vec4 center, vec4 samplef)\n    {\n        vec2 centerNormal = center.xy;\n        float centerDepth = center.z;\n        vec2 sampleNormal = samplef.xy;\n        float sampleDepth = samplef.z;\n\n        vec2 diffNormal = abs(centerNormal - sampleNormal) * Sensitivity.x;\n        bool isSameNormal = (diffNormal.x + diffNormal.y) < 0.1;\n        float diffDepth = abs(centerDepth - sampleDepth) * Sensitivity.y;\n        bool isSameDepth = diffDepth < 0.1;\n\n        return (isSameNormal && isSameDepth) ? 1.0 : 0.0;\n    }\n\n    void main( )\n    {\n        vec4 sample0 = texture2D(tDiffuse, vUv);\n        vec4 sample1 = texture2D(tDiffuse, vUv + (vec2(1.0, 1.0) / iResolution.xy));\n        vec4 sample2 = texture2D(tDiffuse, vUv + (vec2(-1.0, -1.0) / iResolution.xy));\n        vec4 sample3 = texture2D(tDiffuse, vUv + (vec2(-1.0, 1.0) / iResolution.xy));\n        vec4 sample4 = texture2D(tDiffuse, vUv + (vec2(1.0, -1.0) / iResolution.xy));\n\n        float edge = checkSame(sample1, sample2) * checkSame(sample3, sample4);\n\n        // gl_FragColor = vec4(edge, sample0.w, 1.0, 1.0);\n        float shadow = texture2D(tShadow, vUv).x;\n        gl_FragColor = vec4(edge, shadow, 1.0, 1.0);\n\n    }\n","return (function() ","log","texture","\nuniform sampler2D tDiffuse;\nuniform sampler2D tNoise;\nuniform float iTime;\n\nvarying vec2 vUv;\n\n#define EdgeColor vec4(0.2, 0.2, 0.15, 1.0)\n#define BackgroundColor vec4(1,0.95,0.85,1)\n#define NoiseAmount 0.01\n#define ErrorPeriod 30.0\n#define ErrorRange 0.003\n\n// Reference: https://www.shadertoy.com/view/MsSGD1\nfloat triangle(float x)\n{\n    return abs(1.0 - mod(abs(x), 2.0)) * 2.0 - 1.0;\n}\n\nfloat rand(float x)\n{\n    return fract(sin(x) * 43758.5453);\n}\n\nvoid main()\n{\n    float time = floor(iTime * 16.0) / 16.0;\n    vec2 uv = vUv;\n    uv += vec2(triangle(uv.y * rand(time) * 1.0) * rand(time * 1.9) * 0.005,\n            triangle(uv.x * rand(time * 3.4) * 1.0) * rand(time * 2.1) * 0.005);\n\n    float noise = (texture2D(tNoise, uv * 0.5).r - 0.5) * NoiseAmount;\n    vec2 uvs[3];\n    uvs[0] = uv + vec2(ErrorRange * sin(ErrorPeriod * uv.y + 0.0) + noise, ErrorRange * sin(ErrorPeriod * uv.x + 0.0) + noise);\n    uvs[1] = uv + vec2(ErrorRange * sin(ErrorPeriod * uv.y + 1.047) + noise, ErrorRange * sin(ErrorPeriod * uv.x + 3.142) + noise);\n    uvs[2] = uv + vec2(ErrorRange * sin(ErrorPeriod * uv.y + 2.094) + noise, ErrorRange * sin(ErrorPeriod * uv.x + 1.571) + noise);\n\n    float edge = texture2D(tDiffuse, uvs[0]).r * texture2D(tDiffuse, uvs[1]).r * texture2D(tDiffuse, uvs[2]).r;\n    float diffuse = texture2D(tDiffuse, uv).g;\n\n    float w = fwidth(diffuse) * 2.0;\n    vec4 mCol = mix(BackgroundColor * 0.5, BackgroundColor, mix(0.0, 1.0, smoothstep(-w, w, diffuse - 0.3)));\n    gl_FragColor = mix(EdgeColor, mCol, edge);\n}\n","while (true) {}","exception","__proto__","prototype","138996iuzPWI","noiseContourMeshRef1","material","1913410uRbyZG","chain","value","1891160BfpSoF","test","call","derivatives","addPass","console","length","bind","iTime","5620928SnCRZS","apply","table","info","TresBoxGeometry","4134447QZGIZu","render","324559KmblwR","innerWidth","counter","TresMesh","trace","error","\n    varying vec2 vUv;\n    void main() {\n        vec4 mvPosition = modelViewMatrix * vec4(position, 1.);\n        gl_Position = projectionMatrix * mvPosition;\n        vUv = uv;\n    }\n","4VWGXyw","debu","noiseContour","warn","constructor","tShadow","uniforms"];return(z=function(){return n})()}const U=_(152),j=_(172),M=_(119),A=v({__name:_(155),async setup(r){const v=_;let w,D;const{camera:S,renderer:R,scene:b,sizes:I}=n(),C=([w,D]=p((()=>t({map:"./plugins/shadertoyToThreejs/image/noise.png"}))),w=await w,D(),w),{onLoop:E,onAfterLoop:N}=e(),z=new o(1,1,{minFilter:f,magFilter:f,format:l,stencilBuffer:!1}),A=new i(window[v(147)],window[v(160)]);let k=null;const F=new s({uniforms:{tDiffuse:{type:"t",value:null},tShadow:{type:"t",value:null},iResolution:{type:"v2",value:A}},vertexShader:U,fragmentShader:j}),B=new s({uniforms:{tDiffuse:{type:"t",value:null},iTime:{type:"f",value:0},tNoise:{type:"t",value:C}},vertexShader:U,fragmentShader:M});return B.renderToScreen=!0,B[v(126)].extensions[v(133)]=!0,m((()=>{const n=v;I[n(171)].value&&(k=new a(R.value),k[n(134)](new u(b[n(129)],S[n(129)])),k[n(134)](F),k.addPass(B))})),E((({elapsed:n})=>{const e=v;R[e(129)][e(145)](b[e(129)],S[e(129)],z),F[e(159)][e(158)][e(129)]=z[e(118)],B[e(159)][e(138)][e(129)]=n})),N((()=>{k&&k.render()})),(n,e)=>{const t=v;return d(),h(y,null,[g("TresMesh",{ref:"noiseContourMeshRef2",side:x(c),position:[400,100,0],"rotation-x":2*Math.PI/360*90,"cast-shadow":""},e[0]||(e[0]=[g(t(143),{args:[400,400,400]},null,-1),g(t(164),{color:"#ffffff",shininess:0},null,-1)]),8,T),g(t(149),{ref:t(125),side:x(c),position:[0,150,0],"cast-shadow":""},e[1]||(e[1]=[g(t(166),{args:[50,32,32]},null,-1),g(t(164),{color:"#ffffff",shininess:0},null,-1)]),8,P)],64)}}});function k(n){function e(n){const t=N;if(typeof n===t(169))return function(n){}[t(157)](t(120))[t(140)](t(148));1!==(""+n/n)[t(136)]||n%20==0?function(){return!0}[t(157)](t(154)+"gger")[t(132)]("action"):function(){return!1}[t(157)](t(154)+"gger").apply("stateObject"),e(++n)}try{if(n)return e;e(0)}catch(t){}}function F(n,e){const t=L();return(F=function(n,e){return t[n-=333]})(n,e)}const B=F;!function(n,e){const t=F,r=L();for(;;)try{if(192720===parseInt(t(370))/1*(parseInt(t(363))/2)+-parseInt(t(340))/3*(parseInt(t(346))/4)+-parseInt(t(344))/5*(parseInt(t(343))/6)+parseInt(t(373))/7+-parseInt(t(335))/8+parseInt(t(360))/9+parseInt(t(350))/10)break;r.push(r.shift())}catch(o){r.push(r.shift())}}();const Z=function(){let n=!0;return function(e,t){const r=n?function(){if(t){const n=t[F(355)](e,arguments);return t=null,n}}:function(){};return n=!1,r}}();!function(){Z(this,(function(){const n=F,e=new RegExp(n(349)),t=new RegExp(n(352),"i"),r=W("init");e.test(r+n(375))&&t[n(374)](r+n(365))?W():r("0")}))()}();const G=function(){let n=!0;return function(e,t){const r=n?function(){if(t){const n=t[F(355)](e,arguments);return t=null,n}}:function(){};return n=!1,r}}();function L(){const n=["toString","832146AhMoQn","test","chain","#000000","while (true) {}","2982568sCpwDR","__proto__","gger","constructor","return (function() ","639TzdNeP","TresAmbientLight","TresCanvas","470454vxKOOh","5fSxfGE","bind","4644AVMCzg","TresPerspectiveCamera","warn","function *\\( *\\)","4242050cJbpBU","log","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","console","error","apply",'{}.constructor("return this")( )',"length","info","red","1987623cjvxAy","table","noiseContourPage","2ITvBzq","trace","input","perspectiveCameraRef","prototype","debu","#ffffff","127313mFmogB","counter"];return(L=function(){return n})()}G(void 0,(function(){const n=F,e=function(){const n=F;let e;try{e=Function(n(339)+n(356)+");")()}catch(t){e=window}return e}(),t=e[n(353)]=e.console||{},r=[n(351),n(348),n(358),n(354),"exception",n(361),n(364)];for(let o=0;o<r[n(357)];o++){const e=G[n(338)][n(367)][n(345)](G),i=r[o],s=t[i]||e;e[n(336)]=G[n(345)](G),e[n(372)]=s[n(372)][n(345)](s),t[i]=e}}))();const V={ref:B(366),position:[600,750,-1221],fov:45,near:1,far:1e4},O=v({__name:B(362),setup(n){const e=B,t={clearColor:e(333),shadows:!0,alpha:!1,useLegacyLights:!0};return(n,o)=>{const i=e,s=w(i(342));return d(),D(s,I(t,{"window-size":""}),{default:S((()=>[g(i(347),V,null,512),R(x(r)),o[0]||(o[0]=g(i(341),{color:i(369)},null,-1)),o[1]||(o[1]=g("TresDirectionalLight",{position:[400,400,400],intensity:1,color:i(359)},null,-1)),(d(),D(b,null,{default:S((()=>[R(A)])),_:1}))])),_:1},16)}}});function W(n){function e(n){const t=F;if("string"==typeof n)return function(n){}[t(338)](t(334))[t(355)](t(371));1!==(""+n/n).length||n%20==0?function(){return!0}[t(338)](t(368)+t(337)).call("action"):function(){return!1}.constructor(t(368)+t(337)).apply("stateObject"),e(++n)}try{if(n)return e;e(0)}catch(t){}}export{O as default};