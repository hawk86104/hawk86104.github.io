import{_ as t,ai as n}from"./three.bXjbKLxC1731379053498.js";import{e,W as r,U as o,c as i}from"./@tresjs.bLKO3xyw1731379053498.js";import{a as s,b as a}from"./index.Xkk8JFHs1731379053498.js";import{d as c,b as u,w as f,o as l,D as p,J as h,j as v,u as g,r as d,f as m,g as b,aj as x,ak as y,al as w,m as I}from"./@vue.-THQH3GC1731379053498.js";import"./@vueuse.DWZrQ1Sl1731379053498.js";import"./three-stdlib.yR_asc1t1731379053498.js";import"./@pmndrs.WRC-eauj1731379053498.js";import"./object-hash.ODhiDasX1731379053498.js";import"./@amap.mFH-iVTk1731379053498.js";import"./jszip.Gy4zFode1731379053498.js";function _(){var t=["4246038PVqFQN","gger","function *\\( *\\)","6zjuaDm","\n// Precision-adjusted variations of https://www.shadertoy.com/view/4djSRW\nfloat hash(float p) { p = fract(p * 0.011); p *= p + 7.5; p *= p + p; return fract(p); }\nfloat hash(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.13); p3 += dot(p3, p3.yzx + 3.333); return fract((p3.x + p3.y) * p3.z); }\n\nfloat noise(vec3 x) {\n    const vec3 step = vec3(110, 241, 171);\n\n    vec3 i = floor(x);\n    vec3 f = fract(x);\n\n    // For performance, compute the base input to a 1D hash from the integer part of the argument and the\n    // incremental change to the 1D based on the 3D -> 1D wrapping\n    float n = dot(i, step);\n\n    vec3 u = f * f * (3.0 - 2.0 * f);\n    return mix(mix(mix(hash(n + dot(step, vec3(0, 0, 0))), hash(n + dot(step, vec3(1, 0, 0))), u.x),\n                   mix(hash(n + dot(step, vec3(0, 1, 0))), hash(n + dot(step, vec3(1, 1, 0))), u.x), u.y),\n               mix(mix(hash(n + dot(step, vec3(0, 0, 1))), hash(n + dot(step, vec3(1, 0, 1))), u.x),\n                   mix(hash(n + dot(step, vec3(0, 1, 1))), hash(n + dot(step, vec3(1, 1, 1))), u.x), u.y), u.z);\n}\n","console","320115SUEKid","7689PdBEBu","prototype","length","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","bind","counter","call","string","debu","input",'{}.constructor("return this")( )',"trace","104405jkwWAt","test","constructor","950455ywliul","action","return (function() ","error","406884xERujL","info","stateObject","20018BvlqRg","chain","56jEICAx","apply","4890swYwyw","2UrDUGe","exception","toString","warn","log","__proto__"];return(_=function(){return t})()}var M=z;!function(t,n){for(var e=z,r=_();;)try{if(240659===-parseInt(e(445))/1*(-parseInt(e(440))/2)+parseInt(e(457))/3+-parseInt(e(437))/4+-parseInt(e(433))/5*(-parseInt(e(454))/6)+-parseInt(e(430))/7*(parseInt(e(442))/8)+parseInt(e(451))/9+-parseInt(e(444))/10*(parseInt(e(458))/11))break;r.push(r.shift())}catch(o){r.push(r.shift())}}();var j=function(){var t=!0;return function(n,e){var r=t?function(){if(e){var t=e[z(443)](n,arguments);return e=null,t}}:function(){};return t=!1,r}}();function z(t,n){var e=_();return(z=function(t,n){return e[t-=423]})(t,n)}!function(){j(this,(function(){var t=z,n=new RegExp(t(453)),e=new RegExp(t(461),"i"),r=A("init");n[t(431)](r+t(441))&&e[t(431)](r+t(427))?A():r("0")}))()}();var P=function(){var t=!0;return function(n,e){var r=t?function(){if(e){var t=e[z(443)](n,arguments);return e=null,t}}:function(){};return t=!1,r}}();P(void 0,(function(){for(var t=z,n=function(){var t,n=z;try{t=Function(n(435)+n(428)+");")()}catch(e){t=window}return t}(),e=n[t(456)]=n[t(456)]||{},r=[t(449),t(448),t(438),t(436),t(446),"table",t(429)],o=0;o<r[t(460)];o++){var i=P.constructor[t(459)][t(462)](P),s=r[o],a=e[s]||i;i[t(450)]=P[t(462)](P),i[t(447)]=a[t(447)][t(462)](a),e[s]=i}}))();const S=M(455);function A(t){function n(t){var e=z;if(typeof t===e(425))return function(t){}[e(432)]("while (true) {}")[e(443)](e(423));1!==(""+t/t)[e(460)]||t%20==0?function(){return!0}[e(432)](e(426)+e(452))[e(424)](e(434)):function(){return!1}.constructor(e(426)+e(452))[e(443)](e(439)),n(++t)}try{if(t)return n;n(0)}catch(e){}}const T=R;!function(t,n){const e=R,r=L();for(;;)try{if(634870===parseInt(e(237))/1*(parseInt(e(200))/2)+parseInt(e(230))/3+-parseInt(e(219))/4*(-parseInt(e(231))/5)+-parseInt(e(236))/6+parseInt(e(217))/7*(-parseInt(e(194))/8)+parseInt(e(205))/9*(parseInt(e(223))/10)+-parseInt(e(227))/11)break;r.push(r.shift())}catch(o){r.push(r.shift())}}();const D=function(){let t=!0;return function(n,e){const r=t?function(){if(e){const t=e[R(228)](n,arguments);return e=null,t}}:function(){};return t=!1,r}}();!function(){D(this,(function(){const t=R,n=new RegExp(t(209)),e=new RegExp(t(234),"i"),r=Z(t(232));n[t(190)](r+"chain")&&e.test(r+t(229))?Z():r("0")}))()}();const E=function(){let t=!0;return function(n,e){const r=t?function(){if(e){const t=e[R(228)](n,arguments);return e=null,t}}:function(){};return t=!1,r}}();function L(){const t=["1545972LBKzYp","string","return (function() ","tmRef","10OnBtTM","instancedMeshCom","rotation","counter","9188828LEpqTz","apply","input","2943213huMXeZ","10horUJN","init","info","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","gger","7161630JbnEoO","7blvNHo","\n    vec3 displace(vec3 point) {\n      vec3 instancePosition = (instanceMatrix * vec4(point, 1.)).xyz;\n      return instancePosition + (normal * noise((instancePosition * 3.) + uTime) * 0.8);\n    }  \n\n    vec3 orthogonal(vec3 v) {\n      return normalize(abs(v.x) > abs(v.z) ? vec3(-v.y, v.x, 0.0)\n      : vec3(0.0, -v.z, v.y));\n    }\n\n    vec3 recalcNormals(vec3 newPos) {\n      float offset = 0.001;\n      vec3 tangent = orthogonal(normal);\n      vec3 bitangent = normalize(cross(normal, tangent));\n      vec3 neighbour1 = position + tangent * offset;\n      vec3 neighbour2 = position + bitangent * offset;\n\n      vec3 displacedNeighbour1 = displace(neighbour1);\n      vec3 displacedNeighbour2 = displace(neighbour2);\n\n      vec3 displacedTangent = displacedNeighbour1 - newPos;\n      vec3 displacedBitangent = displacedNeighbour2 - newPos;\n\n      return normalize(cross(displacedTangent, displacedBitangent));\n    }\n\n    void main() {\n\t\t\tvPosition = position;\n      vec3 p = displace(position);\n      csm_PositionRaw = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(p, 1.);\n      csm_Normal = recalcNormals(p);\n    }\n    ","action","random","vertexShader","MeshPhysicalMaterial","vertex","TresInstancedMesh","test",'{}.constructor("return this")( )',"length","console","101832AMiGoB","prototype","updateMatrix","constructor","debu","trace","151324ZtPAyv","fragmentShader","\n    uniform float uTime;\n\t\tvarying vec3 vPosition;\n\t\t","needsUpdate","position","3535749WuDotA","bind","\n\t\tvarying vec3 vPosition;\n\t\t// 函数将 HSL 转换为 RGB\n\t\tvec3 hsl2rgb(float h, float s, float l) {\n\t\t\t\tfloat c = (1.0 - abs(2.0 * l - 1.0)) * s;\n\t\t\t\tfloat x = c * (1.0 - abs(mod(h * 6.0, 2.0) - 1.0));\n\t\t\t\tfloat m = l - c / 2.0;\n\t\t\t\tvec3 rgb;\n\t\t\t\tif (0.0 <= h && h < 1.0 / 6.0) {\n\t\t\t\t\t\trgb = vec3(c, x, 0.0);\n\t\t\t\t} else if (1.0 / 6.0 <= h && h < 2.0 / 6.0) {\n\t\t\t\t\t\trgb = vec3(x, c, 0.0);\n\t\t\t\t} else if (2.0 / 6.0 <= h && h < 3.0 / 6.0) {\n\t\t\t\t\t\trgb = vec3(0.0, c, x);\n\t\t\t\t} else if (3.0 / 6.0 <= h && h < 4.0 / 6.0) {\n\t\t\t\t\t\trgb = vec3(0.0, x, c);\n\t\t\t\t} else if (4.0 / 6.0 <= h && h < 5.0 / 6.0) {\n\t\t\t\t\t\trgb = vec3(x, 0.0, c);\n\t\t\t\t} else if (5.0 / 6.0 <= h && h < 6.0 / 6.0) {\n\t\t\t\t\t\trgb = vec3(c, 0.0, x);\n\t\t\t\t} else {\n\t\t\t\t\t\trgb = vec3(0.0, 0.0, 0.0);\n\t\t\t\t}\n\t\t\t\trgb += vec3(m);\n\t\t\t\treturn rgb;\n\t\t}\n    void main() {\n      // csm_DiffuseColor = vec4(1.,1.,1.,1.);\n\t\t\tfloat h = mod(vPosition.x + vPosition.y + vPosition.z, 1.0); // 色相 H: [0, 1)\n\t\t\tfloat s = 0.9; // 饱和度 S: 固定为 0.8\n\t\t\tfloat l = 0.4; // 亮度 L: 固定为 0.5\n\t\t\tvec3 rgb = hsl2rgb(h, s, l);\n\t\t\tcsm_DiffuseColor = vec4(rgb,1.);\n    }\n    ","multiplyScalar","function *\\( *\\)","matrix","set","uTime","table","baseMaterial","Object3D","TresSphereGeometry","7LyJjbq","warn"];return(L=function(){return t})()}function R(t,n){const e=L();return(R=function(t,n){return e[t-=189]})(t,n)}E(void 0,(function(){const t=R;let n;try{n=Function(t(221)+t(191)+");")()}catch(o){n=window}const e=n[t(193)]=n.console||{},r=["log",t(218),t(233),"error","exception",t(213),t(199)];for(let i=0;i<r.length;i++){const n=E[t(197)][t(195)][t(206)](E),o=r[i],s=e[o]||n;n.__proto__=E[t(206)](E),n.toString=s.toString[t(206)](s),e[o]=n}}))();const B=c({__name:T(224),setup(n){const o=T,i=u(null),s={vertex:o(202)+S+o(238),fragment:o(207)},a={uTime:{value:0}},c=new(t[o(215)]),{onLoop:d}=e();return d((({elapsed:t})=>{a[o(212)].value=t})),f((()=>i.value),(t=>{const n=o;if(t){let e=0;for(let r=0;r<88;r++)c.position[n(211)](Math[n(240)](),Math[n(240)](),Math[n(240)]()),c[n(225)].set(Math[n(240)](),Math[n(240)](),Math.random()),c.position[n(208)](10),c[n(204)].x-=5,c[n(204)].y-=5,c[n(204)].z-=5,c[n(196)](),t.setMatrixAt(e++,c[n(210)]);t.instanceMatrix[n(203)]=!0}})),(n,e)=>{const c=o;return l(),p(c(189),{ref_key:c(222),ref:i,args:[null,null,88]},[e[0]||(e[0]=h(c(216),{args:[1,64,64]},null,-1)),v(g(r),{baseMaterial:t[c(242)],vertexShader:s[c(243)],fragmentShader:s.fragment,uniforms:a,transparent:""},null,8,[c(214),c(241),c(201)])],512)}}});function Z(t){function n(t){const e=R;if(typeof t===e(220))return function(t){}[e(197)]("while (true) {}")[e(228)](e(226));1!==(""+t/t)[e(192)]||t%20==0?function(){return!0}[e(197)](e(198)+e(235)).call(e(239)):function(){return!1}[e(197)](e(198)+"gger").apply("stateObject"),n(++t)}try{if(t)return n;n(0)}catch(e){}}const k=N;function N(t,n){const e=O();return(N=function(t,n){return e[t-=137]})(t,n)}!function(t,n){const e=N,r=O();for(;;)try{if(905591===-parseInt(e(163))/1+parseInt(e(152))/2*(parseInt(e(164))/3)+parseInt(e(141))/4+-parseInt(e(166))/5+-parseInt(e(165))/6+-parseInt(e(160))/7*(parseInt(e(176))/8)+parseInt(e(156))/9*(parseInt(e(150))/10))break;r.push(r.shift())}catch(o){r.push(r.shift())}}();const C=function(){let t=!0;return function(n,e){const r=t?function(){if(e){const t=e[N(147)](n,arguments);return e=null,t}}:function(){};return t=!1,r}}();!function(){C(this,(function(){const t=N,n=new RegExp(t(173)),e=new RegExp(t(170),"i"),r=F("init");n.test(r+"chain")&&e[t(149)](r+t(178))?F():r("0")}))()}();const U=function(){let t=!0;return function(n,e){const r=t?function(){if(e){const t=e[N(147)](n,arguments);return e=null,t}}:function(){};return t=!1,r}}();function O(){const t=["26903799PxUMTD","info","call","TresDirectionalLight","14035isxuZx","toString","table","1103901gkoSyV","3160293cWYAAz","7903842eBTAML","5008895ckcSkz","debu","constructor","trace","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","string","bind","function *\\( *\\)","rotation-y","gger","2656sZvZou","length","input","stateObject","warn","action","__proto__","3805984rbLyAP","return (function() ","console",'{}.constructor("return this")( )',"log","while (true) {}","apply","instancedMeshCustomShaderMaterial","test","10ULJhbQ","counter","2BCEwDT","TresPerspectiveCamera","prototype","rotation-x"];return(O=function(){return t})()}U(void 0,(function(){const t=N;let n;try{n=Function(t(142)+t(144)+");")()}catch(o){n=window}const e=n[t(143)]=n.console||{},r=[t(145),t(138),t(157),"error","exception",t(162),t(169)];for(let i=0;i<r[t(177)];i++){const n=U.constructor[t(154)].bind(U),o=r[i],s=e[o]||n;n[t(140)]=U.bind(U),n.toString=s[t(161)][t(172)](s),e[o]=n}}))();const $=c({__name:k(148),setup(t){const e=d({alpha:!0,toneMapping:n,windowSize:!0,clearColor:0}),r=d({enableDamping:!0});return(t,n)=>{const c=N;return l(),m(g(i),I(e,{"window-size":""}),{default:b((()=>[n[0]||(n[0]=h(c(153),{position:[15,15,15],fov:45,near:1,far:1e3},null,-1)),v(g(o),x(y(r)),null,16),n[1]||(n[1]=h("TresAmbientLight",{intensity:.5},null,-1)),n[2]||(n[2]=h(c(159),{position:[7,10,-5.5],intensity:5},null,-1)),(l(),m(w,null,{default:b((()=>[v(g(s),{intensity:16,resolution:256,background:"",blur:.6},{default:b((()=>[v(g(a),{intensity:2,form:"circle","rotation-x":Math.PI/2,position:[2,4,0],scale:[1,5,0]},null,8,[c(155)]),v(g(a),{intensity:2,form:"circle","rotation-x":Math.PI/2,position:[-6,4,0],scale:[1,5,0]},null,8,[c(155)]),v(g(a),{intensity:1,"rotation-y":-Math.PI/2,position:[-1,0,0],scale:[10,.2,1]},null,8,[c(174)]),v(g(a),{intensity:1,"rotation-y":-Math.PI/2,position:[1,0,0],scale:[10,.2,1]},null,8,[c(174)])])),_:1})])),_:1})),v(B)])),_:1},16)}}});function F(t){function n(t){const e=N;if(typeof t===e(171))return function(t){}[e(168)](e(146))[e(147)](e(151));1!==(""+t/t)[e(177)]||t%20==0?function(){return!0}[e(168)](e(167)+e(175))[e(158)](e(139)):function(){return!1}.constructor(e(167)+"gger")[e(147)](e(137)),n(++t)}try{if(t)return n;n(0)}catch(e){}}export{$ as default};