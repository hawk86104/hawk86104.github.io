import{m as n,e as t,U as e}from"./@tresjs.XlmHwCPa1735906732968.js";import{_ as r,bv as o,n as a,a3 as i}from"./three.VhLXWX0H1735906732968.js";import{P as c}from"./tweakpane.yHWGBmom1735906732968.js";import{d as l,b as u,r as s,w as p,q as v,o as m,D as f,J as _,u as d,e as g,x,j as h,g as y,aj as b,ak as S,f as w,al as z,m as j,F as I}from"./@vue.yG49nQHr1735906732968.js";import{_ as k}from"./@fesjs.OL5agSaf1735906732968.js";import"./@vueuse.HCIFcVWX1735906732968.js";import"./vue-router.OGOa9Z4t1735906732968.js";import"./lodash-es.kYt-_xTG1735906732968.js";import"./@qlin.yHhFDldE1735906732968.js";import"./pinia.ZaWyowAg1735906732968.js";import"./vue-demi.C4xddsk91735906732968.js";import"./@floating-ui.BPbuo5Gx1735906732968.js";import"./@juggle.7yjBMqoW1735906732968.js";const D=W;!function(n,t){const e=W,r=T();for(;;)try{if(955764===-parseInt(e(420))/1+-parseInt(e(406))/2*(parseInt(e(398))/3)+parseInt(e(435))/4+-parseInt(e(389))/5*(-parseInt(e(402))/6)+parseInt(e(388))/7*(parseInt(e(412))/8)+parseInt(e(380))/9*(-parseInt(e(385))/10)+parseInt(e(419))/11*(parseInt(e(374))/12))break;r.push(r.shift())}catch(o){r.push(r.shift())}}();const M=function(){let n=!0;return function(t,e){const r=n?function(){if(e){const n=e[W(373)](t,arguments);return e=null,n}}:function(){};return n=!1,r}}();!function(){M(this,(function(){const n=W,t=new RegExp(n(431)),e=new RegExp(n(416),"i"),r=A(n(386));t[n(401)](r+n(384))&&e[n(401)](r+"input")?A():r("0")}))()}();const V=function(){let n=!0;return function(t,e){const r=n?function(){if(e){const n=e.apply(t,arguments);return e=null,n}}:function(){};return n=!1,r}}();V(void 0,(function(){const n=W;let t;try{t=Function(n(395)+n(396)+");")()}catch(o){t=window}const e=t[n(403)]=t[n(403)]||{},r=[n(375),n(425),"info","error",n(393),n(381),"trace"];for(let a=0;a<r.length;a++){const t=V[n(394)].prototype.bind(V),o=r[a],i=e[o]||t;t.__proto__=V[n(410)](V),t[n(432)]=i[n(432)][n(410)](i),e[o]=t}}))();const F=["rotation-x"],R=["uniforms",D(418),"fragmentShader"],O=41;function T(){const n=["Error fetching volume data:","bind","meshRef","17728CpXeiT","addBinding","LinearFilter","u_isoValue","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","getElapsedTime","vertexShader","8944925gAfnDO","1744266WtNHMw","TresShaderMaterial","u_time","u_color","gger","warn","start","color","addFolder","Display Settings","debu","function *\\( *\\)","toString","wrapT","isoValue","2025860xbjcUT","Algorithm Settings","apply","36lkRuoM","log","expanded","TresMesh","Cross Section Settings","then","5058594pfYIBR","table","minFilter","TresSphereGeometry","chain","30uJGNKi","init","catch","4781FOpbwi","131045yhTRwR","Data3DTexture","innerWidth","value","exception","constructor","return (function() ",'{}.constructor("return this")( )',"call","12eYEvec","Clock","innerHeight","test","324WteWKu","console","Vector3","error","744288NDOaMk","u_dt","position"];return(T=function(){return n})()}const P=l({__name:"basicVolumeRendering",setup(e){var l;const g=D,x=window[g(391)],h=window[g(400)],y=u(null),b=u(null),S=new(r[g(399)]);S[g(426)]();const w=(new c)[g(428)]({title:g(429)}),z=w[g(428)]({title:g(378)}),j=new(r[g(404)])(.5,.5,.5);z[g(413)](j,"x",{label:"X",min:.02,max:.5,step:.02}),z[g(413)](j,"y",{label:"Y",min:.02,max:.5,step:.02}),z.addBinding(j,"z",{label:"Z",min:.02,max:.5,step:.02}),z[g(376)]=!0;const{camera:I}=n(),k=s({u_camera:{value:null==(l=I[g(392)])?void 0:l[g(408)]},u_resolution:{value:new(r[g(404)])(x,h,1)},u_dt:{value:.004},u_time:{value:0},u_crossSectionSize:{value:j},u_color:{value:1},u_volume:{value:null},u_isoValue:{value:.2},u_alphaVal:{value:.2}}),M=w.addFolder({title:g(436)});M[g(413)](k[g(407)],g(392),{label:"dt",min:4e-4,max:.016,step:2e-4}),M[g(413)](k[g(423)],g(392),{label:g(427),min:1,max:3,step:1}),M[g(413)](k.u_alphaVal,"value",{label:"alphaVal",min:.01,max:1,step:.01}),M.addBinding(k[g(415)],"value",{label:g(434),min:0,max:1,step:.04}),p(b,(n=>{const t=g;if(n){const e=new(r[t(390)])(n,O,O,O);e.format=o,e[t(382)]=r[t(414)],e.magFilter=a,e[t(433)]=i,e.needsUpdate=!0,k.u_volume.value=e}}));const{onLoop:V}=t();return V((()=>{const n=g;k[n(422)][n(392)]=S[n(417)]()})),v((()=>{(()=>{const n=g;fetch("/plugins/volumeRendering/image/nucleon_41x41x41_uint8.raw")[n(379)]((n=>n.arrayBuffer()))[n(379)]((t=>{const e=n,r=new Uint8Array(t),o=new Uint8Array(68921);for(let n=0;n<r.length;n++)o[n]=r[n];b[e(392)]=o}))[n(387)]((t=>{const e=n;console[e(405)](e(409),t)}))})()})),(n,t)=>{const e=g;return m(),f(e(377),{ref_key:e(411),ref:y,"rotation-x":Math.PI/-2},[t[0]||(t[0]=_(e(383),{args:[1,16,16]},null,-1)),_(e(421),{uniforms:k,vertexShader:d("precision mediump float;\n\nuniform vec3 u_camera;\nuniform vec3 u_resolution;\nuniform float u_time;\n\nvarying vec3 v_hitPos;\nvarying vec3 v_hitPosWorldSpace;\nvarying vec3 v_cameraObjectSpace;\n\nvoid main() {\n  vec3 pos = position;\n\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);\n\n  v_hitPos = position.xyz;\n\n  v_hitPosWorldSpace = (modelMatrix * vec4(position, 1.0)).xyz;\n\n  v_cameraObjectSpace = (inverse(modelMatrix) * vec4(u_camera, 1.0)).xyz;\n}"),fragmentShader:d("precision mediump int;\nprecision mediump float;\n\nuniform vec3 u_camera;\nuniform vec3 u_resolution;\nuniform mediump sampler3D u_volume;\nuniform vec3 u_crossSectionSize;\nuniform float u_dt;\nuniform float u_time;\nuniform float u_color;\nuniform float u_isoValue;\nuniform float u_alphaVal;\n\nvec3 palette(in float t) {\n  vec3 a = vec3(0.5, 0.5, 0.5);\n  vec3 b = vec3(0.5, 0.5, 0.5);\n  vec3 c = vec3(1.0, 1.0, 1.0);\n  vec3 d = vec3(0.00, 0.33, 0.67);\n\n  return a + b * cos(6.28318 * (c * t + d));\n}\n\nvarying vec3 v_hitPos;\nvarying vec3 v_hitPosWorldSpace;\nvarying vec3 v_cameraObjectSpace;\n\nvec2 intersect_box(vec3 orig, vec3 dir) {\n\n  vec3 box_min = vec3(-u_crossSectionSize);\n  vec3 box_max = vec3(u_crossSectionSize);\n  vec3 inv_dir = 1.0 / dir;\n  vec3 tmin_tmp = (box_min - orig) * inv_dir;\n  vec3 tmax_tmp = (box_max - orig) * inv_dir;\n  vec3 tmin = min(tmin_tmp, tmax_tmp);\n  vec3 tmax = max(tmin_tmp, tmax_tmp);\n  float t0 = max(tmin.x, max(tmin.y, tmin.z));\n  float t1 = min(tmax.x, min(tmax.y, tmax.z));\n  return vec2(t0, t1);\n}\n\nvoid main() {\n  vec3 rayOrigin = vec3(0.0, 0.0, -3.0);\n  rayOrigin = v_cameraObjectSpace;\n\n  vec2 uv = 2.0 * gl_FragCoord.xy / u_resolution.xy - 1.0;\n  vec3 rayDir = normalize(vec3(uv, 1.0));\n  rayDir = normalize(v_hitPos - rayOrigin);\n\n  vec2 t_hit = intersect_box(rayOrigin, rayDir);\n  if (t_hit.x > t_hit.y) {\n    discard;\n  }\n\n  t_hit.x = max(t_hit.x, 0.0);\n\n  float dt = u_dt;\n\n  vec4 color = vec4(0.0);\n\n  vec3 p = rayOrigin + t_hit.x * rayDir + 0.5;\n  for (float t = t_hit.x; t < t_hit.y; t += dt) {\n\n    float textureVal = texture(u_volume, p).r;\n\n    vec4 val_color = vec4(0.0);\n    float val_color_alpha = textureVal * 0.1;\n\n    val_color_alpha = smoothstep(0.0, u_alphaVal, val_color_alpha);\n\n    vec3 red = vec3(1.0, 0.0, 0.0);\n    vec3 white = vec3(1.0);\n    if (abs(u_color - 1.0) <= 0.01) {\n      val_color = vec4(white, val_color_alpha);\n    } else if (abs(u_color - 2.0) <= 0.01) {\n      val_color = vec4(mix(red, white, val_color_alpha), val_color_alpha);\n    } else {\n      val_color = vec4(palette(textureVal), val_color_alpha);\n    }\n\n    color.rgb += (1.0 - color.a) * val_color.a * val_color.rgb;\n    color.a += (1.0 - color.a) * val_color.a;\n\n    if (textureVal > u_isoValue) {\n      float gxLess = texture(u_volume, vec3(p.x - rayDir.x * u_dt, p.y, p.z)).r;\n      float gxMore = texture(u_volume, vec3(p.x + rayDir.x * u_dt, p.y, p.z)).r;\n      float dgx = gxMore - gxLess;\n\n      float gyLess = texture(u_volume, vec3(p.x, p.y - rayDir.y * u_dt, p.z)).r;\n      float gyMore = texture(u_volume, vec3(p.x, p.y + rayDir.y * u_dt, p.z)).r;\n      float dgy = gyMore - gyLess;\n\n      float gzLess = texture(u_volume, vec3(p.x, p.y, p.z - rayDir.z * u_dt)).r;\n      float gzMore = texture(u_volume, vec3(p.x, p.y, p.z + rayDir.z * u_dt)).r;\n      float dgz = gzMore - gzLess;\n      vec3 n = normalize(vec3(dgx, dgy, dgz));\n\n      vec3 lightSource = vec3(1.0);\n      vec3 lightDir = normalize(lightSource);\n      float diffuseStrength = max(dot(n, lightDir), 0.0);\n\n      vec3 viewSource = normalize(rayOrigin);\n      vec3 reflectSource = normalize(reflect(-lightSource, n));\n      float specularStrength = max(0.0, dot(viewSource, reflectSource));\n      specularStrength = pow(specularStrength, 64.0);\n\n      color.rgb = diffuseStrength * val_color.rgb + specularStrength * val_color.rgb;\n      color.rgb *= val_color.rgb;\n      color.a = 0.95;\n      break;\n    }\n\n    if (color.a >= 0.95) {\n      break;\n    }\n\n    p += rayDir * dt;\n  }\n\n  gl_FragColor = color;\n}")},null,8,R)],8,F)}}});function W(n,t){const e=T();return(W=function(n,t){return e[n-=373]})(n,t)}function A(n){function t(n){const e=W;if("string"==typeof n)return function(n){}[e(394)]("while (true) {}").apply("counter");1!==(""+n/n).length||n%20==0?function(){return!0}[e(394)](e(430)+e(424))[e(397)]("action"):function(){return!1}[e(394)](e(430)+e(424))[e(373)]("stateObject"),t(++n)}try{if(n)return t;t(0)}catch(e){}}const C=U;!function(n,t){const e=U,r=B();for(;;)try{if(778441===parseInt(e(167))/1*(-parseInt(e(169))/2)+parseInt(e(163))/3*(parseInt(e(191))/4)+parseInt(e(157))/5*(parseInt(e(155))/6)+-parseInt(e(178))/7+-parseInt(e(173))/8*(-parseInt(e(153))/9)+-parseInt(e(175))/10+parseInt(e(177))/11*(-parseInt(e(195))/12))break;r.push(r.shift())}catch(o){r.push(r.shift())}}();const L=function(){let n=!0;return function(t,e){const r=n?function(){if(e){const n=e[U(179)](t,arguments);return e=null,n}}:function(){};return n=!1,r}}();function B(){const n=["52vTtkcv","exception","table","counter","588MFFieg","init",'{}.constructor("return this")( )',"297hpDyNW","error","264mMhqSe","TresAmbientLight","154095ASWvSn","div","return (function() ","while (true) {}","console","https://klacansky.com/open-scivis-datasets/skull/skull_256x256x256_uint8.raw","291570zXpFQu","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","call","TresGridHelper","82qRxJnF","__proto__","2458zrnckr","warn","trace","test","303368wUrrfS","input","10151590QBWTWt","prototype","238524QzQcik","6398035lmRDFB","apply","toString","bind","action","constructor","gger","chain","debu","info","length"," https://klacansky.com/open-scivis-datasets/skull/skull_256x256x256_uint8.raw ","basicVolume"];return(B=function(){return n})()}!function(){L(this,(function(){const n=U,t=new RegExp("function *\\( *\\)"),e=new RegExp(n(164),"i"),r=Z(n(151));t[n(172)](r+n(185))&&e[n(172)](r+n(174))?Z():r("0")}))()}();const E=function(){let n=!0;return function(t,e){const r=n?function(){if(e){const n=e.apply(t,arguments);return e=null,n}}:function(){};return n=!1,r}}();function U(n,t){const e=B();return(U=function(n,t){return e[n-=151]})(n,t)}E(void 0,(function(){const n=U;let t;try{t=Function(n(159)+n(152)+");")()}catch(o){t=window}const e=t[n(161)]=t[n(161)]||{},r=["log",n(170),n(187),n(154),n(192),n(193),n(171)];for(let a=0;a<r[n(188)];a++){const t=E[n(183)][n(176)][n(181)](E),o=r[a],i=e[o]||t;t[n(168)]=E[n(181)](E),t[n(180)]=i[n(180)][n(181)](i),e[o]=t}}))();function Z(n){function t(n){const e=U;if("string"==typeof n)return function(n){}[e(183)](e(160)).apply(e(194));1!==(""+n/n)[e(188)]||n%20==0?function(){return!0}[e(183)](e(186)+e(184))[e(165)](e(182)):function(){return!1}[e(183)]("debu"+e(184))[e(179)]("stateObject"),t(++n)}try{if(n)return t;t(0)}catch(e){}}const q=k(l({__name:C(190),setup(n){const t=s({windowSize:!0,alpha:!0,antialias:!0,autoClear:!1,disableRender:!0}),r=s({enableDamping:!0,enableZoom:!0,enablePan:!0,enableRotate:!0,makeDefault:!0});return(n,o)=>{const a=U,i=g("TresCanvas");return m(),f(I,null,[o[3]||(o[3]=_(a(158),{class:a(187)},[_("a",{href:a(162),target:"_blank"},a(189)),_("br"),x(" 请自行下载数据集, 复制到 /plugins/volumeRendering/image/skull_256x256x256_uint8.raw 并更改文件请求指向和 dim 大小 ")],-1)),h(i,j({clearColor:"#201919"},t),{default:y((()=>[o[0]||(o[0]=_("TresPerspectiveCamera",{fov:75,near:.001,far:1e3,position:[-1,.4,-1],"look-at":[0,0,0],up:[0,1,0]},null,-1)),o[1]||(o[1]=_(a(156),{intensity:2},null,-1)),h(d(e),b(S(r)),null,16),(m(),w(z,null,{default:y((()=>[h(P,{position:[0,0,0]})])),_:1})),o[2]||(o[2]=_(a(166),{args:[50,50],position:[0,-5,0]},null,-1))])),_:1},16)],64)}}}),[["__scopeId","data-v-925b4c37"]]);export{q as default};