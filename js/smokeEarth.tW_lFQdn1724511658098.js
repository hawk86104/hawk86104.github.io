import{_ as t}from"./earth.vue_vue_type_script_setup_true_lang.mltZlTxx1724511658098.js";import{$ as n,d as e}from"./@tresjs.6SjGVF2a1724511658098.js";import{a6 as o}from"./three.6cxCQsIj1724511658098.js";import{d as r,w as i,o as a,D as c,J as u,aj as s,ak as l,r as f,e as p,f as v,g as h,j as m,u as g,al as d}from"./@vue.Q1VpS3901724511658098.js";import{P as y}from"./tweakpane.yHWGBmom1724511658098.js";import"./@vueuse.rsVLbIR91724511658098.js";const b=x;!function(t,n){const e=x,o=S();for(;;)try{if(377089===-parseInt(e(482))/1*(parseInt(e(493))/2)+parseInt(e(507))/3+parseInt(e(464))/4*(-parseInt(e(504))/5)+parseInt(e(475))/6+-parseInt(e(481))/7+parseInt(e(498))/8+-parseInt(e(470))/9*(parseInt(e(485))/10))break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const _=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[x(508)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();!function(){_(this,(function(){const t=x,n=new RegExp("function *\\( *\\)"),e=new RegExp(t(512),"i"),o=j("init");n[t(480)](o+t(516))&&e.test(o+t(496))?j():o("0")}))()}();const I=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e.apply(n,arguments);return e=null,t}}:function(){};return t=!1,o}}();function x(t,n){const e=S();return(x=function(t,n){return e[t-=464]})(t,n)}function S(){const t=["2CERegr","return (function() ","stateObject","input",'{}.constructor("return this")( )',"4562512bpToos","constructor","TresSphereGeometry","#FFFFFF","trace","console","378710eLmTyE","speed","\n\t\tprecision highp float;\n\t\tvarying vec2 vUv;\n\t\tuniform float iTime;\n\t\tuniform float smokeStrengthScale;\n\t\tuniform vec3 uColor;\n\t\tuniform float uOpacity;\n\t\tfloat R21 (vec2 p) {\n\t\t\treturn fract(sin(dot(p.xy, vec2(2.3245,5.234)))*123.5632145);\n\t\t}\n\t\tfloat NoiseValue (vec2 uv) {\n\t\t\tvec2 gv = fract(uv);\n\t\t\tvec2 id = floor(uv);\n\t\t\tgv = gv * gv * (3. - 2. * gv);\n\t\t\tfloat a = R21(id);\n\t\t\tfloat b = R21(id + vec2(1., 0.));\n\t\t\tfloat c = R21(id + vec2(0., 1.));\n\t\t\tfloat d = R21(id + vec2(1., 1.));\n\t\t\n\t\t\treturn mix(a, b, gv.x) + (c - a)* gv.y * (1. - gv.x) + (d - b) * gv.x * gv.y;\n\t\t}\n\t\tfloat SmoothNoise (vec2 uv) {\n\t\t\n\t\t\tfloat value = 0.;\n\t\t\tfloat amplitude = .5;\n\t\t\n\t\t\tfor (int i = 0; i < 8; i++) {\n\t\t\t\tvalue += NoiseValue(uv) * amplitude;\n\t\t\t\tuv *= 2.;\n\t\t\t\tamplitude *= .5;\n\t\t\t}\n\t\t\t\n\t\t\treturn value;\n\t\t}\n\t\tvoid main() {\n\t\t\tvec2 uv = 1.0 - vUv;\n\t\t\tvec3 col = vec3(0.);\n\t\t\tvec3 smokeCol = uColor;\n\t\t\tvec2 rn = vec2(0.5, 0.5);\n\t\t\trn.x = SmoothNoise(uv + 1.984 * vec2(1.7,9.2)+ 0.158*iTime );\n\t\t\trn.y = SmoothNoise(uv + 1. * vec2(8.3,2.8)+ 0.126*iTime);\n\t\t\tfloat smokeStrength = smoothstep(0.0, 1.0, SmoothNoise(uv+rn*2.5));\n\t\t\tgl_FragColor = vec4(smokeCol, smokeStrength * smokeStrengthScale * uOpacity);\n\t\t}\n\t\t","1984521IabJoG","apply","iTime","uOpacity","length","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","exception","info","Color","chain","28qZJvZJ","TresShaderMaterial","opacity","__proto__","uniforms","debu","9qSPxMz","smokeSphere","bind","TresMesh","uColor","4045812VUqVXG","action","string","gger","call","test","983549QePjQD","579724ayHHwf","\n\t\t\t\t\t\t\t\tvarying vec2 vUv;\n\t\t\t\t\t\t\t\tvoid main(){\n\t\t\t\t\t\t\t\t\tvUv=uv;\n\t\t\t\t\t\t\t\t\tgl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n\t\t\t\t\t\t\t\t}","color","2786090nlMZbz","while (true) {}","table","toString","error","value","warn","args"];return(S=function(){return t})()}I(void 0,(function(){const t=x;let n;try{n=Function(t(494)+t(497)+");")()}catch(r){n=window}const e=n[t(503)]=n[t(503)]||{},o=["log",t(491),t(514),t(489),t(513),t(487),t(502)];for(let i=0;i<o[t(511)];i++){const n=I[t(499)].prototype.bind(I),r=o[i],a=e[r]||n;n[t(467)]=I[t(472)](I),n.toString=a[t(488)][t(472)](a),e[r]=n}}))();const w=[b(492)],k=r({__name:b(471),props:{color:{default:b(501)},opacity:{default:1},speed:{default:1},phiLength:{default:2*Math.PI},thetaLength:{default:Math.PI}},setup(t){const e=b,r=t,f={uniforms:{iTime:{value:1},smokeStrengthScale:{value:1},uColor:{value:new(o[e(515)])(r[e(484)])},uOpacity:{value:r.opacity}},transparent:!0,vertexShader:e(483),fragmentShader:e(506)};i((()=>[r.color,r[e(466)]]),(([t,n])=>{const r=e;f[r(468)][r(474)][r(490)]=new(o[r(515)])(t),f[r(468)][r(510)].value=n}));const{onLoop:p}=n();return p((({delta:t})=>{const n=e;f.uniforms[n(509)].value+=t*r[n(505)]})),(t,n)=>{const o=e;return a(),c(o(473),null,[u(o(500),{args:[1,32,32,0,t.phiLength,0,t.thetaLength]},null,8,w),u(o(465),s(l(f)),null,16)])}}});function j(t){function n(t){const e=x;if(typeof t===e(477))return function(t){}.constructor(e(486))[e(508)]("counter");1!==(""+t/t).length||t%20==0?function(){return!0}.constructor(e(469)+e(478))[e(479)](e(476)):function(){return!1}.constructor(e(469)+e(478))[e(508)](e(495)),n(++t)}try{if(t)return n;n(0)}catch(e){}}const M=P;!function(t,n){const e=P,o=R();for(;;)try{if(786004===-parseInt(e(231))/1+-parseInt(e(213))/2+parseInt(e(233))/3+parseInt(e(247))/4+parseInt(e(244))/5+-parseInt(e(228))/6+parseInt(e(214))/7)break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const T=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[P(227)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();!function(){T(this,(function(){const t=P,n=new RegExp(t(219)),e=new RegExp(t(216),"i"),o=N(t(217));n[t(241)](o+"chain")&&e.test(o+t(229))?N():o("0")}))()}();const C=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[P(227)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();C(void 0,(function(){const t=P;let n;try{n=Function("return (function() "+t(232)+");")()}catch(r){n=window}const e=n.console=n[t(254)]||{},o=[t(236),t(220),t(252),"error",t(251),t(218),t(253)];for(let i=0;i<o.length;i++){const n=C[t(245)][t(256)].bind(C),r=o[i],a=e[r]||n;n[t(235)]=C[t(215)](C),n[t(255)]=a[t(255)][t(215)](a),e[r]=n}}))();const F=u("TresPerspectiveCamera",{position:[3,3,0],fov:45,near:.1,far:1e4},null,-1),L=u(M(224),{intensity:3},null,-1);function P(t,n){const e=R();return(P=function(t,n){return e[t-=213]})(t,n)}function R(){const t=["opacity","2422604GnhOdO","string","TresCanvas","gger","exception","info","trace","console","toString","prototype","1288656mLlTUF","12932507pcqFMu","bind","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","init","table","function *\\( *\\)","warn","#201919","length","counter","TresAmbientLight","垂直范围","thetaLength","apply","4805568kDevFq","input","水平范围","1342813IGNVPb",'{}.constructor("return this")( )',"2663271fSUfKc","addBinding","__proto__","log","debu","smokeEarth","action","while (true) {}","test","stateObject","color","1165820NEuaMk","constructor"];return(R=function(){return t})()}const E=r({__name:M(238),setup(n){const o=M,r=f({color:"#00d5ff",opacity:.58,speed:1.8,scale:1.1,phiLength:2*Math.PI,thetaLength:Math.PI}),i=new y;return i.addBinding(r,o(243),{label:"颜色"}),i[o(234)](r,o(246),{label:"透明度",min:0,max:1,step:.01}),i[o(234)](r,"speed",{label:"速度",min:.1,max:5,step:.1}),i[o(234)](r,"scale",{label:"大小",min:1.01,max:2,step:.01}),i.addBinding(r,"phiLength",{label:o(230),min:0,max:2*Math.PI,step:.01}),i[o(234)](r,o(226),{label:o(225),min:0,max:Math.PI,step:.01}),(n,i)=>{const c=o,u=p(c(249));return a(),v(u,{clearColor:c(221),"window-size":""},{default:h((()=>[F,m(g(e),{enableDamping:""}),L,(a(),v(d,null,{default:h((()=>[m(t)])),_:1})),(a(),v(d,null,{default:h((()=>[m(k,s(l(r)),null,16)])),_:1}))])),_:1})}}});function N(t){function n(t){const e=P;if(typeof t===e(248))return function(t){}[e(245)](e(240))[e(227)](e(223));1!==(""+t/t)[e(222)]||t%20==0?function(){return!0}[e(245)](e(237)+"gger").call(e(239)):function(){return!1}[e(245)](e(237)+e(250))[e(227)](e(242)),n(++t)}try{if(t)return n;n(0)}catch(e){}}export{E as default};