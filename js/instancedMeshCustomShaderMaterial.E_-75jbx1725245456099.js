import{a6 as t,a9 as n}from"./three.KG2-8r0_1725245456099.js";import{$ as e,T as r,d as o,x as i}from"./@tresjs.j5vdYITq1725245456099.js";import{a,b as s}from"./index.qrmSQE1-1725245456099.js";import{d as c,b as u,w as f,o as p,D as l,j as h,u as v,J as d,r as g,f as m,g as b,aj as x,ak as y,al as I,m as w}from"./@vue.Q1VpS3901725245456099.js";import"./tweakpane.yHWGBmom1725245456099.js";import"./@vueuse.whMtq_7M1725245456099.js";import"./three-stdlib.7palOSci1725245456099.js";import"./@pmndrs.Ip0yUZ_e1725245456099.js";import"./object-hash.ycpyO56T1725245456099.js";import"./@amap.jyJWu-u51725245456099.js";import"./jszip.Bn2AE-kY1725245456099.js";var M=P;function _(){var t=["821556AMXYdQ","error","trace","chain","\n// Precision-adjusted variations of https://www.shadertoy.com/view/4djSRW\nfloat hash(float p) { p = fract(p * 0.011); p *= p + 7.5; p *= p + p; return fract(p); }\nfloat hash(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.13); p3 += dot(p3, p3.yzx + 3.333); return fract((p3.x + p3.y) * p3.z); }\n\nfloat noise(vec3 x) {\n    const vec3 step = vec3(110, 241, 171);\n\n    vec3 i = floor(x);\n    vec3 f = fract(x);\n\n    // For performance, compute the base input to a 1D hash from the integer part of the argument and the\n    // incremental change to the 1D based on the 3D -> 1D wrapping\n    float n = dot(i, step);\n\n    vec3 u = f * f * (3.0 - 2.0 * f);\n    return mix(mix(mix(hash(n + dot(step, vec3(0, 0, 0))), hash(n + dot(step, vec3(1, 0, 0))), u.x),\n                   mix(hash(n + dot(step, vec3(0, 1, 0))), hash(n + dot(step, vec3(1, 1, 0))), u.x), u.y),\n               mix(mix(hash(n + dot(step, vec3(0, 0, 1))), hash(n + dot(step, vec3(1, 0, 1))), u.x),\n                   mix(hash(n + dot(step, vec3(0, 1, 1))), hash(n + dot(step, vec3(1, 1, 1))), u.x), u.y), u.z);\n}\n","prototype","1563597TITFeE","input","exception","2168qeHPPG","test",'{}.constructor("return this")( )',"call","string","action","info","2987730ZunbmI","constructor","apply","bind","304744whbGqe","counter","6oaOFky","12159bbbvcW","369yPPnSz","return (function() ","gger","console","length","while (true) {}","toString","1939285HyWOTO","init","__proto__","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","6502DaGjye","debu"];return(_=function(){return t})()}!function(t,n){for(var e=P,r=_();;)try{if(231430===parseInt(e(331))/1+parseInt(e(346))/2*(parseInt(e(335))/3)+parseInt(e(348))/4+-parseInt(e(342))/5*(parseInt(e(333))/6)+-parseInt(e(317))/7+parseInt(e(320))/8*(-parseInt(e(334))/9)+parseInt(e(327))/10)break;r.push(r.shift())}catch(o){r.push(r.shift())}}();var j=function(){var t=!0;return function(n,e){var r=t?function(){if(e){var t=e[P(329)](n,arguments);return e=null,t}}:function(){};return t=!1,r}}();function P(t,n){var e=_();return(P=function(t,n){return e[t-=313]})(t,n)}!function(){j(this,(function(){var t=P,n=new RegExp("function *\\( *\\)"),e=new RegExp(t(345),"i"),r=S(t(343));n[t(321)](r+t(314))&&e[t(321)](r+t(318))?S():r("0")}))()}();var z=function(){var t=!0;return function(n,e){var r=t?function(){if(e){var t=e[P(329)](n,arguments);return e=null,t}}:function(){};return t=!1,r}}();z(void 0,(function(){for(var t=P,n=function(){var t,n=P;try{t=Function(n(336)+n(322)+");")()}catch(e){t=window}return t}(),e=n[t(338)]=n[t(338)]||{},r=["log","warn",t(326),t(349),t(319),"table",t(313)],o=0;o<r[t(339)];o++){var i=z[t(328)][t(316)][t(330)](z),a=r[o],s=e[a]||i;i[t(344)]=z[t(330)](z),i.toString=s[t(341)][t(330)](s),e[a]=i}}))();const A=M(315);function S(t){function n(t){var e=P;if(typeof t===e(324))return function(t){}[e(328)](e(340))[e(329)](e(332));1!==(""+t/t).length||t%20==0?function(){return!0}[e(328)](e(347)+"gger")[e(323)](e(325)):function(){return!1}[e(328)]("debu"+e(337))[e(329)]("stateObject"),n(++t)}try{if(t)return n;n(0)}catch(e){}}const E=T;function T(t,n){const e=R();return(T=function(t,n){return e[t-=438]})(t,n)}!function(t,n){const e=T,r=R();for(;;)try{if(960782===-parseInt(e(459))/1*(parseInt(e(457))/2)+parseInt(e(494))/3*(parseInt(e(451))/4)+-parseInt(e(483))/5*(-parseInt(e(453))/6)+-parseInt(e(460))/7*(-parseInt(e(484))/8)+-parseInt(e(480))/9*(parseInt(e(473))/10)+parseInt(e(479))/11*(-parseInt(e(445))/12)+-parseInt(e(467))/13*(-parseInt(e(488))/14))break;r.push(r.shift())}catch(o){r.push(r.shift())}}();const D=function(){let t=!0;return function(n,e){const r=t?function(){if(e){const t=e[T(456)](n,arguments);return e=null,t}}:function(){};return t=!1,r}}();!function(){D(this,(function(){const t=T,n=new RegExp(t(448)),e=new RegExp(t(462),"i"),r=C(t(439));n.test(r+t(481))&&e[t(441)](r+t(472))?C():r("0")}))()}();const k=function(){let t=!0;return function(n,e){const r=t?function(){if(e){const t=e[T(456)](n,arguments);return e=null,t}}:function(){};return t=!1,r}}();function R(){const t=['{}.constructor("return this")( )',"Object3D","132cGnYsF","1827ZFAUjA","chain","matrix","5615NlDLYS","16jpIuzA","tmRef","info","MeshPhysicalMaterial","14AljkWs","__proto__","multiplyScalar","console","toString","TresInstancedMesh","27gVynkU","return (function() ","init","\n\t\tvarying vec3 vPosition;\n\t\t// 函数将 HSL 转换为 RGB\n\t\tvec3 hsl2rgb(float h, float s, float l) {\n\t\t\t\tfloat c = (1.0 - abs(2.0 * l - 1.0)) * s;\n\t\t\t\tfloat x = c * (1.0 - abs(mod(h * 6.0, 2.0) - 1.0));\n\t\t\t\tfloat m = l - c / 2.0;\n\t\t\t\tvec3 rgb;\n\t\t\t\tif (0.0 <= h && h < 1.0 / 6.0) {\n\t\t\t\t\t\trgb = vec3(c, x, 0.0);\n\t\t\t\t} else if (1.0 / 6.0 <= h && h < 2.0 / 6.0) {\n\t\t\t\t\t\trgb = vec3(x, c, 0.0);\n\t\t\t\t} else if (2.0 / 6.0 <= h && h < 3.0 / 6.0) {\n\t\t\t\t\t\trgb = vec3(0.0, c, x);\n\t\t\t\t} else if (3.0 / 6.0 <= h && h < 4.0 / 6.0) {\n\t\t\t\t\t\trgb = vec3(0.0, x, c);\n\t\t\t\t} else if (4.0 / 6.0 <= h && h < 5.0 / 6.0) {\n\t\t\t\t\t\trgb = vec3(x, 0.0, c);\n\t\t\t\t} else if (5.0 / 6.0 <= h && h < 6.0 / 6.0) {\n\t\t\t\t\t\trgb = vec3(c, 0.0, x);\n\t\t\t\t} else {\n\t\t\t\t\t\trgb = vec3(0.0, 0.0, 0.0);\n\t\t\t\t}\n\t\t\t\trgb += vec3(m);\n\t\t\t\treturn rgb;\n\t\t}\n    void main() {\n      // csm_DiffuseColor = vec4(1.,1.,1.,1.);\n\t\t\tfloat h = mod(vPosition.x + vPosition.y + vPosition.z, 1.0); // 色相 H: [0, 1)\n\t\t\tfloat s = 0.9; // 饱和度 S: 固定为 0.8\n\t\t\tfloat l = 0.4; // 亮度 L: 固定为 0.5\n\t\t\tvec3 rgb = hsl2rgb(h, s, l);\n\t\t\tcsm_DiffuseColor = vec4(rgb,1.);\n    }\n    ","test","fragment","random","updateMatrix","990648tiksbb","call","debu","function *\\( *\\)","counter","position","299932LzWMcp","vertexShader","3798AfAFGv","trace","while (true) {}","apply","6484yVTIbx","constructor","372iAzWEp","247177xZbFre","instanceMatrix","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","string","bind","rotation","log","22959118viCoda","instancedMeshCom","exception","TresSphereGeometry","\n    uniform float uTime;\n\t\tvarying vec3 vPosition;\n\t\t","input","3200uslDNx","value","gger","uTime"];return(R=function(){return t})()}k(void 0,(function(){const t=T,n=function(){const t=T;let n;try{n=Function(t(438)+t(477)+");")()}catch(e){n=window}return n}(),e=n[t(491)]=n[t(491)]||{},r=[t(466),"warn",t(486),"error",t(469),"table",t(454)];for(let o=0;o<r.length;o++){const n=k[t(458)].prototype[t(464)](k),i=r[o],a=e[i]||n;n[t(489)]=k[t(464)](k),n[t(492)]=a[t(492)][t(464)](a),e[i]=n}}))();const Z=d(E(470),{args:[1,64,64]},null,-1),F=c({__name:E(468),setup(n){const o=E,i=u(null),a={vertex:o(471)+A+"\n    vec3 displace(vec3 point) {\n      vec3 instancePosition = (instanceMatrix * vec4(point, 1.)).xyz;\n      return instancePosition + (normal * noise((instancePosition * 3.) + uTime) * 0.8);\n    }  \n\n    vec3 orthogonal(vec3 v) {\n      return normalize(abs(v.x) > abs(v.z) ? vec3(-v.y, v.x, 0.0)\n      : vec3(0.0, -v.z, v.y));\n    }\n\n    vec3 recalcNormals(vec3 newPos) {\n      float offset = 0.001;\n      vec3 tangent = orthogonal(normal);\n      vec3 bitangent = normalize(cross(normal, tangent));\n      vec3 neighbour1 = position + tangent * offset;\n      vec3 neighbour2 = position + bitangent * offset;\n\n      vec3 displacedNeighbour1 = displace(neighbour1);\n      vec3 displacedNeighbour2 = displace(neighbour2);\n\n      vec3 displacedTangent = displacedNeighbour1 - newPos;\n      vec3 displacedBitangent = displacedNeighbour2 - newPos;\n\n      return normalize(cross(displacedTangent, displacedBitangent));\n    }\n\n    void main() {\n\t\t\tvPosition = position;\n      vec3 p = displace(position);\n      csm_PositionRaw = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(p, 1.);\n      csm_Normal = recalcNormals(p);\n    }\n    ",fragment:o(440)},s={uTime:{value:0}},c=new(t[o(478)]),{onLoop:d}=e();return d((({elapsed:t})=>{const n=o;s[n(476)][n(474)]=t})),f((()=>i[o(474)]),(t=>{const n=o;if(t){let e=0;for(let r=0;r<88;r++)c[n(450)].set(Math.random(),Math.random(),Math.random()),c[n(465)].set(Math[n(443)](),Math[n(443)](),Math[n(443)]()),c[n(450)][n(490)](10),c[n(450)].x-=5,c.position.y-=5,c.position.z-=5,c[n(444)](),t.setMatrixAt(e++,c[n(482)]);t[n(461)].needsUpdate=!0}})),(n,e)=>{const c=o;return p(),l(c(493),{ref_key:c(485),ref:i,args:[null,null,88]},[Z,h(v(r),{baseMaterial:t[c(487)],vertexShader:a.vertex,fragmentShader:a[c(442)],uniforms:s,transparent:""},null,8,["baseMaterial",c(452),"fragmentShader"])],512)}}});function C(t){function n(t){const e=T;if(typeof t===e(463))return function(t){}[e(458)](e(455))[e(456)](e(449));1!==(""+t/t).length||t%20==0?function(){return!0}.constructor(e(447)+"gger")[e(446)]("action"):function(){return!1}[e(458)](e(447)+e(475))[e(456)]("stateObject"),n(++t)}try{if(t)return n;n(0)}catch(e){}}const N=G;function G(t,n){const e=O();return(G=function(t,n){return e[t-=218]})(t,n)}!function(t,n){const e=G,r=O();for(;;)try{if(541950===parseInt(e(241))/1*(-parseInt(e(246))/2)+parseInt(e(229))/3+-parseInt(e(240))/4*(-parseInt(e(239))/5)+-parseInt(e(252))/6*(parseInt(e(259))/7)+parseInt(e(255))/8*(parseInt(e(222))/9)+-parseInt(e(245))/10*(-parseInt(e(251))/11)+-parseInt(e(236))/12)break;r.push(r.shift())}catch(o){r.push(r.shift())}}();const L=function(){let t=!0;return function(n,e){const r=t?function(){if(e){const t=e[G(225)](n,arguments);return e=null,t}}:function(){};return t=!1,r}}();function O(){const t=["3293274EvEDga","error","TresAmbientLight","4036520HRHJmK","action","console","rotation-y","7AyiCoE","test","bind","counter","length","toString","log","18tVPVIj","trace","debu","apply","return (function() ","info","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","1195521GEyZqe","warn","__proto__","gger","rotation-x","stateObject","TresPerspectiveCamera","16804356qJECEH","constructor","chain","5QOMrMo","2366648MZDsvo","144llmLyu","call","prototype","input","1524650lQAWpA","3756kgmSxY","circle","while (true) {}","table","string","55EEQdMW"];return(O=function(){return t})()}!function(){L(this,(function(){const t=G,n=new RegExp("function *\\( *\\)"),e=new RegExp(t(228),"i"),r=Q("init");n[t(260)](r+t(238))&&e.test(r+t(244))?Q():r("0")}))()}();const W=function(){let t=!0;return function(n,e){const r=t?function(){if(e){const t=e[G(225)](n,arguments);return e=null,t}}:function(){};return t=!1,r}}();W(void 0,(function(){const t=G,n=function(){const t=G;let n;try{n=Function(t(226)+'{}.constructor("return this")( ));')()}catch(e){n=window}return n}(),e=n.console=n[t(257)]||{},r=[t(221),t(230),t(227),t(253),"exception",t(249),t(223)];for(let o=0;o<r[t(219)];o++){const n=W[t(237)][t(243)][t(261)](W),i=r[o],a=e[i]||n;n[t(231)]=W[t(261)](W),n[t(220)]=a[t(220)].bind(a),e[i]=n}}))();const H=d(N(235),{position:[15,15,15],fov:45,near:1,far:1e3},null,-1),$=d(N(254),{intensity:.5},null,-1),V=d("TresDirectionalLight",{position:[7,10,-5.5],intensity:5},null,-1),q=c({__name:"instancedMeshCustomShaderMaterial",setup(t){const e=g({alpha:!0,toneMapping:n,windowSize:!0,clearColor:0}),r=g({enableDamping:!0});return(t,n)=>{const c=G;return p(),m(v(i),w(e,{"window-size":""}),{default:b((()=>[H,h(v(o),x(y(r)),null,16),$,V,(p(),m(I,null,{default:b((()=>[h(v(a),{intensity:16,resolution:256,background:"",blur:.6},{default:b((()=>[h(v(s),{intensity:2,form:c(247),"rotation-x":Math.PI/2,position:[2,4,0],scale:[1,5,0]},null,8,["rotation-x"]),h(v(s),{intensity:2,form:c(247),"rotation-x":Math.PI/2,position:[-6,4,0],scale:[1,5,0]},null,8,[c(233)]),h(v(s),{intensity:1,"rotation-y":-Math.PI/2,position:[-1,0,0],scale:[10,.2,1]},null,8,[c(258)]),h(v(s),{intensity:1,"rotation-y":-Math.PI/2,position:[1,0,0],scale:[10,.2,1]},null,8,["rotation-y"])])),_:1})])),_:1})),h(F)])),_:1},16)}}});function Q(t){function n(t){const e=G;if(typeof t===e(250))return function(t){}[e(237)](e(248))[e(225)](e(218));1!==(""+t/t)[e(219)]||t%20==0?function(){return!0}[e(237)](e(224)+e(232))[e(242)](e(256)):function(){return!1}[e(237)]("debu"+e(232))[e(225)](e(234)),n(++t)}try{if(t)return n;n(0)}catch(e){}}export{q as default};