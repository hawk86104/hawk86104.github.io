import{$ as n,a as t,d as e}from"./@tresjs.iXEJQd7J1721298764655.js";import{k as o,ba as r,C as i,a4 as a,aN as s,x as c,Z as l,ca as u,cb as f,cc as p,cd as d}from"./three.0bBjBDi41721298764655.js";import{C as m}from"./three-custom-shader-material.wt6if9qU1721298764655.js";import"./object-hash.eR6rYsIK1721298764655.js";import"./@amap.x_Go35DX1721298764655.js";import"./glsl-tokenizer.ZFLos1PC1721298764655.js";import{r as v,i as g,s as h}from"./utils.O9A1bznY1721298764655.js";import{d as y,a4 as _,b as w,o as x,D as b,f as j,g as I,J as C,u as S,al as M,j as O,F as z,e as k}from"./@vue.Q1VpS3901721298764655.js";import{_ as P}from"./roadLight.vue_vue_type_script_setup_true_lang.doSdSEuF1721298764655.js";import"./tweakpane.yHWGBmom1721298764655.js";import"./@vueuse.hS-CVzal1721298764655.js";import"./glsl-token-string.BCXfLWyP1721298764655.js";import"./glsl-token-functions._ALfgfbj1721298764655.js";import"./jszip.-g-_Ii-P1721298764655.js";import"./@fesjs.brW7jqtK1721298764655.js";import"./vue-router.i1Z-d_LR1721298764655.js";import"./lodash-es.nFpJXAf-1721298764655.js";import"./@qlin.yHhFDldE1721298764655.js";import"./pinia.3lNuHAZQ1721298764655.js";import"./@floating-ui.BPbuo5Gx1721298764655.js";import"./@juggle.7yjBMqoW1721298764655.js";import"./three-mesh-bvh.LM_bczGP1721298764655.js";var T=A;!function(n,t){for(var e=A,o=W();;)try{if(129550===parseInt(e(295))/1*(-parseInt(e(286))/2)+parseInt(e(254))/3*(-parseInt(e(306))/4)+-parseInt(e(310))/5*(parseInt(e(255))/6)+-parseInt(e(311))/7+parseInt(e(301))/8*(-parseInt(e(308))/9)+-parseInt(e(288))/10*(-parseInt(e(284))/11)+parseInt(e(276))/12*(parseInt(e(291))/13))break;o.push(o.shift())}catch(r){o.push(o.shift())}}();var B=function(){var n=!0;return function(t,e){var o=n?function(){if(e){var n=e[A(298)](t,arguments);return e=null,n}}:function(){};return n=!1,o}}();!function(){B(this,(function(){var n=A,t=new RegExp(n(303)),e=new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","i"),o=U(n(251));t.test(o+n(260))&&e[n(265)](o+n(256))?U():o("0")}))()}();var E=function(){var n=!0;return function(t,e){var o=n?function(){if(e){var n=e.apply(t,arguments);return e=null,n}}:function(){};return n=!1,o}}();function A(n,t){var e=W();return(A=function(n,t){return e[n-=251]})(n,t)}E(void 0,(function(){for(var n=A,t=function(){var n,t=A;try{n=Function("return (function() "+t(272)+");")()}catch(e){n=window}return n}(),e=t.console=t[n(297)]||{},o=["log",n(304),n(258),"error","exception",n(281),n(294)],r=0;r<o[n(282)];r++){var i=E.constructor[n(257)][n(259)](E),a=o[r],s=e[a]||i;i[n(283)]=E[n(259)](E),i.toString=s[n(305)][n(259)](s),e[a]=i}}))();class D extends o{constructor(n={}){var t=A;super(),this[t(263)]=t(307),this[t(270)]=t(273),this[t(309)]={time:new r(0),fresnelOpacity:new r(void 0!==n.fresnelOpacity?n[t(289)]:1),fresnelAmount:new r(void 0!==n[t(296)]?n[t(296)]:.45),scanlineSize:new r(void 0!==n[t(287)]?n[t(287)]:8),hologramBrightness:new r(void 0!==n[t(302)]?n[t(302)]:1),signalSpeed:new r(void 0!==n[t(277)]?n[t(277)]:1),hologramColor:new r(void 0!==n[t(253)]?new i(n.hologramColor):new i("#00d5ff")),enableBlinking:new r(void 0===n[t(280)]||n[t(280)]),blinkFresnelOnly:new r(void 0===n[t(292)]||n[t(292)]),hologramOpacity:new r(void 0!==n[t(290)]?n[t(290)]:1)},this.clock=new a,this[t(264)](n),this[t(261)]=void 0!==n[t(261)]&&n[t(261)],this[t(293)]=void 0!==n[t(262)]?n[t(262)]:s,this.transparent=!0,this[t(268)]=void 0!==n[t(268)]?n[t(268)]:c}[T(267)](){var n=T;this[n(309)][n(300)][n(269)]=this.clock[n(266)]()}}const N=D;function U(n){function t(n){var e=A;if(typeof n===e(271))return function(n){}[e(278)](e(275))[e(298)](e(252));1!==(""+n/n)[e(282)]||n%20==0?function(){return!0}.constructor("debugger")[e(279)](e(285)):function(){return!1}[e(278)](e(299)+"gger")[e(298)](e(274)),t(++n)}try{if(n)return t;t(0)}catch(e){}}function W(){var n=["blendMode","vertexShader","setValues","test","getElapsedTime","update","side","value","fragmentShader","string",'{}.constructor("return this")( )'," \n      varying vec2 vUv;\n      varying vec3 vPositionW;\n      varying vec4 vPos;\n      varying vec3 vNormalW;\n      \n      uniform float time;\n      uniform float fresnelOpacity;\n      uniform float scanlineSize;\n      uniform float fresnelAmount;\n      uniform float signalSpeed;\n      uniform float hologramBrightness;\n      uniform float hologramOpacity;\n      uniform bool blinkFresnelOnly;\n      uniform bool enableBlinking;\n      uniform vec3 hologramColor;\n\n      float flicker( float amt, float time ) {return clamp( fract( cos( time ) * 43758.5453123 ), amt, 1.0 );}\n      float random(in float a, in float b) { return fract((cos(dot(vec2(a,b) ,vec2(12.9898,78.233))) * 43758.5453)); }\n\n      void main() {\n        vec2 vCoords = vPos.xy;\n        vCoords /= vPos.w;\n        vCoords = vCoords * 0.5 + 0.5;\n        vec2 myUV = fract( vCoords );\n\n        // Defines hologram main color\n        vec4 hologramColor = vec4(hologramColor, mix(hologramBrightness, vUv.y, 0.5));\n\n        // Add scanlines\n        float scanlines = 10.;\n        scanlines += 20. * sin(time *signalSpeed * 20.8 - myUV.y * 60. * scanlineSize);\n        scanlines *= smoothstep(1.3 * cos(time *signalSpeed + myUV.y * scanlineSize), 0.78, 0.9);\n        scanlines *= max(0.25, sin(time *signalSpeed) * 1.0);        \n        \n        // Scanlines offsets\n        float r = random(vUv.x, vUv.y);\n        float g = random(vUv.y * 20.2, \tvUv.y * .2);\n        float b = random(vUv.y * .9, \tvUv.y * .2);\n\n        // Scanline composition\n        hologramColor += vec4(r*scanlines, b*scanlines, r, 1.0) / 84.;\n        vec4 scanlineMix = mix(vec4(0.0), hologramColor, hologramColor.a);\n\n        // Calculates fresnel\n        vec3 viewDirectionW = normalize(cameraPosition - vPositionW);\n        float fresnelEffect = dot(viewDirectionW, vNormalW) * (1.6 - fresnelOpacity/2.);\n        fresnelEffect = clamp(fresnelAmount - fresnelEffect, 0., fresnelOpacity);\n\n        // Blinkin effect\n        //Suggested by Octano - https://x.com/OtanoDesign?s=20\n        float blinkValue = enableBlinking ? 0.6 - signalSpeed : 1.0;\n        float blink = flicker(blinkValue, time * signalSpeed * .02);\n    \n        // Final shader composition\n        vec3 finalColor;\n\n        if(blinkFresnelOnly){\n          // finalColor = vec3(1.0,1.0,0);\n          finalColor = scanlineMix.rgb + fresnelEffect * blink;\n        }else{\n          finalColor = scanlineMix.rgb * blink + fresnelEffect;\n        }\n\n        gl_FragColor = vec4( finalColor, hologramOpacity);\n\n      }","stateObject","while (true) {}","10356BtNzMK","signalSpeed","constructor","call","enableBlinking","table","length","__proto__","11rUujQP","action","134rfrMLD","scanlineSize","477430mCsQts","fresnelOpacity","hologramOpacity","7306aBLbxr","blinkFresnelOnly","blending","trace","611ogndPc","fresnelAmount","console","apply","debu","time","488248wVKZvf","hologramBrightness","function *\\( *\\)","warn","toString","196wgkyEo","\n      #define STANDARD\n      varying vec3 vViewPosition;\n      #ifdef USE_TRANSMISSION\n      varying vec3 vWorldPosition;\n      #endif\n    \n      varying vec2 vUv;\n      varying vec4 vPos;\n      varying vec3 vNormalW;\n      varying vec3 vPositionW;\n\n      #include <common>\n      #include <uv_pars_vertex>\n      #include <envmap_pars_vertex>\n      #include <color_pars_vertex>\n      #include <fog_pars_vertex>\n      #include <morphtarget_pars_vertex>\n      #include <skinning_pars_vertex>\n      #include <logdepthbuf_pars_vertex>\n      #include <clipping_planes_pars_vertex>\n\n      void main() {\n        \n        #include <uv_vertex>\n        #include <color_vertex>\n        #include <morphcolor_vertex>\n      \n        #if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )\n      \n          #include <beginnormal_vertex>\n          #include <morphnormal_vertex>\n          #include <skinbase_vertex>\n          #include <skinnormal_vertex>\n          #include <defaultnormal_vertex>\n      \n        #endif\n      \n        #include <begin_vertex>\n        #include <morphtarget_vertex>\n        #include <skinning_vertex>\n        #include <project_vertex>\n        #include <logdepthbuf_vertex>\n        #include <clipping_planes_vertex>\n      \n        #include <worldpos_vertex>\n        #include <envmap_vertex>\n        #include <fog_vertex>\n\n        mat4 modelViewProjectionMatrix = projectionMatrix * modelViewMatrix;\n\n        vUv = uv;\n        vPos = projectionMatrix * modelViewMatrix * vec4( transformed, 1.0 );\n        vPositionW = vec3( vec4( transformed, 1.0 ) * modelMatrix);\n        vNormalW = normalize( vec3( vec4( normal, 0.0 ) * modelMatrix ) );\n        \n        gl_Position = modelViewProjectionMatrix * vec4( transformed, 1.0 );\n\n      }","27uglTdm","uniforms","25ZHTCox","12348KToIdw","init","counter","hologramColor","4425hSaHpD","126156FIoknN","input","prototype","info","bind","chain","depthTest"];return(W=function(){return n})()}const q=V;function F(){const n=["length","function *\\( *\\)","10HSQcQp","debu","prototype","330DqqXwD","dispose","table","#e00f0f","counter","depthTest","bind","04-dongfangmingzhu_dongfangmingzhu_0","fresnelOpacity","error","call","1364iObvvh","__proto__","#e05b0f","name","geometry","constructor","string","return (function() ","getObjectByName","info","warn","255PcxQlu","2031768XRlSht","03-jinmaodasha_jjinmaodasha_0","#006cf9","#5e0fe0","while (true) {}","40DfUkAy","fresnelAmount","chain","toString","scanlineSize","clone","value","5735112quNgqZ","stateObject","2076YJYQPn","signalSpeed","02-huanqiujinrongzhongxin_huanqiujinrongzhongxin_0","init","exception","360829yATFZY","trace","group","37517rBqsBa","hologramColor","东方明珠塔","importantBuildings","10740QnTjbK","material",'{}.constructor("return this")( )',"apply","gger","uniforms","44720jOHoNK","01-shanghaizhongxindasha_shanghaizhongxindasha_0","update","console"];return(F=function(){return n})()}!function(n,t){const e=V,o=F();for(;;)try{if(182624===parseInt(e(339))/1*(parseInt(e(355))/2)+-parseInt(e(331))/3*(parseInt(e(369))/4)+parseInt(e(380))/5*(parseInt(e(343))/6)+parseInt(e(336))/7*(parseInt(e(322))/8)+parseInt(e(381))/9+-parseInt(e(349))/10*(-parseInt(e(358))/11)+-parseInt(e(329))/12)break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const R=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e[V(346)](t,arguments);return e=null,n}}:function(){};return n=!1,o}}();!function(){R(this,(function(){const n=V,t=new RegExp(n(354)),e=new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","i"),o=Q(n(334));t.test(o+n(324))&&e.test(o+"input")?Q():o("0")}))()}();const L=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e[V(346)](t,arguments);return e=null,n}}:function(){};return n=!1,o}}();function V(n,t){const e=F();return(V=function(n,t){return e[n-=320]})(n,t)}L(void 0,(function(){const n=V,t=function(){const n=V;let t;try{t=Function(n(376)+n(345)+");")()}catch(e){t=window}return t}(),e=t[n(352)]=t[n(352)]||{},o=["log",n(379),n(378),n(367),n(335),n(360),n(337)];for(let r=0;r<o[n(353)];r++){const t=L[n(374)][n(357)][n(364)](L),i=o[r],a=e[i]||t;t[n(370)]=L[n(364)](L),t[n(325)]=a[n(325)][n(364)](a),e[i]=t}}))();const Z=y({__name:q(342),props:{group:{}},setup(t){const e=q,o=t,r={fresnelAmount:0,fresnelOpacity:0,scanlineSize:15,signalSpeed:1.3,hologramColor:e(371)},a=new N({blendMode:s,hologramBrightness:2.5,side:l});a[e(348)][e(323)][e(328)]=r[e(323)],a[e(348)][e(326)][e(328)]=r[e(326)],a[e(348)].signalSpeed[e(328)]=r[e(332)],a[e(348)][e(366)].value=r[e(366)],a[e(348)].hologramColor[e(328)]=new i(r.hologramColor),a[e(348)].enableBlinking[e(328)]=!1,a[e(363)]=!0;let c,u,f=null;(()=>{const n=e,t=o[n(338)].getObjectByName(n(333));t[n(372)]="环球金融中心",t[n(344)][n(359)](),v(t[n(373)]),t.material=a,c=o[n(338)][n(377)](n(350)),c[n(372)]="上海中心",c[n(344)][n(359)](),v(c[n(373)]),c.material=a[n(327)](),c[n(344)].uniforms[n(340)][n(328)]=new i(n(383)),c.material[n(348)].fresnelAmount[n(328)]=1,c.material.uniforms.scanlineSize[n(328)]=2.1,c[n(344)].uniforms[n(332)][n(328)]=.4,u=o[n(338)].getObjectByName(n(382)),u.name="金茂大厦",u[n(344)][n(359)](),v(u[n(373)]),u[n(344)]=a.clone(),u[n(344)][n(348)][n(340)][n(328)]=new i(n(320)),u[n(344)][n(348)][n(326)].value=15,u.material[n(348)][n(332)][n(328)]=.18,f=o[n(338)].getObjectByName(n(365)),f[n(372)]=n(341),f.material[n(359)](),v(f[n(373)]),f[n(344)]=a[n(327)](),f[n(344)][n(348)].scanlineSize[n(328)]=5,f.material[n(348)].signalSpeed[n(328)]=1.3,f[n(344)][n(348)][n(340)][n(328)]=new i(n(361)),f[n(344)][n(348)][n(366)][n(328)]=.1})();const{onLoop:p}=n();return p((()=>{const n=e;a[n(351)](),c[n(344)][n(351)](),u[n(344)][n(351)](),f[n(344)][n(351)]()})),(n,t)=>null}});function Q(n){function t(n){const e=V;if(typeof n===e(375))return function(n){}.constructor(e(321)).apply(e(362));1!==(""+n/n)[e(353)]||n%20==0?function(){return!0}[e(374)](e(356)+e(347))[e(368)]("action"):function(){return!1}[e(374)](e(356)+e(347)).apply(e(330)),t(++n)}try{if(n)return t;t(0)}catch(e){}}const H=Y;!function(n,t){const e=Y,o=K();for(;;)try{if(424020===parseInt(e(204))/1*(-parseInt(e(177))/2)+parseInt(e(212))/3*(parseInt(e(162))/4)+parseInt(e(190))/5*(parseInt(e(192))/6)+-parseInt(e(160))/7+-parseInt(e(203))/8*(-parseInt(e(198))/9)+-parseInt(e(189))/10+parseInt(e(195))/11*(parseInt(e(164))/12))break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const G=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e[Y(165)](t,arguments);return e=null,n}}:function(){};return n=!1,o}}();!function(){G(this,(function(){const n=Y,t=new RegExp(n(210)),e=new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","i"),o=nn(n(191));t[n(196)](o+n(183))&&e.test(o+n(174))?nn():o("0")}))()}();const $=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e[Y(165)](t,arguments);return e=null,n}}:function(){};return n=!1,o}}();$(void 0,(function(){const n=Y,t=function(){const n=Y;let t;try{t=Function(n(167)+n(185)+");")()}catch(e){t=window}return t}(),e=t.console=t.console||{},o=[n(202),n(184),n(163),"error",n(188),"table","trace"];for(let r=0;r<o.length;r++){const t=$[n(186)][n(211)].bind($),i=o[r],a=e[i]||t;t.__proto__=$[n(207)]($),t[n(169)]=a[n(169)][n(207)](a),e[i]=t}}))();const J=["object"];function K(){const n=["position","computeBoundingSphere","bind","stateObject","counter","function *\\( *\\)","prototype","36ujLjQr","string","material","set","#000","value","1124508EIPvjt","River","193616OHdQQv","info","2305176nEJgTx","apply","fromEdgesGeometry","return (function() ","primitive","toString","debu","#888800","group","isMesh","input","while (true) {}","innerWidth","34qqeLqD","indexOf","name","buildingsMode","add","length","chain","warn",'{}.constructor("return this")( )',"constructor","boundingBox","exception","2610590dvemlK","5SMNtPV","init","112542reXRNp","innerHeight","Object","22ZGqYoJ","test","resolution","772155bLFxSv","computeBoundsTree","Floor","gger","log","8jQcXMY","13169POjMpr"];return(K=function(){return n})()}function Y(n,t){const e=K();return(Y=function(n,t){return e[n-=156]})(n,t)}const X=y({__name:H(180),async setup(e){let o,r;g();const{scene:a}=([o,r]=_((()=>t("https://opensource-1314935952.cos.ap-nanjing.myqcloud.com/model/digitalCity/shanghaiDraco.gltf",{draco:!0,decoderPath:"./draco/"}))),o=await o,r(),o),s=a.clone(),c=w(0);s.traverse((async n=>{const t=Y;if(n[t(173)]&&(-1!==n[t(179)][t(178)]("Shanghai")||-1!==n[t(179)].indexOf(t(194))))if(-1!==n[t(179)][t(178)](t(200)));else if(-1!==n[t(179)][t(178)](t(161))){const e=await h(n);e[t(205)][t(157)](0,0,1800),n.add(e)}else(n=>{const t=Y,{geometry:e}=n;e.computeBoundingBox(),e[t(206)](),e[t(199)]();const{max:o,min:r}=e[t(187)],a=new m({baseMaterial:n[t(156)],vertexShader:"varying vec4 vPosition;\nvoid main(){\n\tvPosition=modelMatrix*vec4(position,1.);\n\tcsm_Position=position*vec3(1.);\n}",fragmentShader:"uniform mat4 modelMatrix;\nvarying vec4 vPosition;\nuniform vec3 uMax;\nuniform vec3 uMin;\nuniform float uOpacity;\nuniform float uBorderWidth;\nuniform vec3 uLightColor;\nuniform vec3 uColor;\nuniform float uCircleTime;\nuniform float uTime;\nuniform vec3 uTopColor;//顶部颜色\nuniform bool uGradient;\nvec4 uMax_world;\nvec4 uMin_world;\nvoid main(){\n\t// 转世界坐标\n\tuMax_world=modelMatrix*vec4(uMax,1.);\n\tuMin_world=modelMatrix*vec4(uMin,1.);\n\tvec3 distColor=uColor;\n\tfloat residue=uTime-floor(uTime/uCircleTime)*uCircleTime;\n\tfloat rate=residue/uCircleTime;\n\tfloat lightOffset=rate*(uMax_world.y-uMin_world.y);\n\t\n\tif(uMin_world.y+lightOffset<vPosition.y&&uMin_world.y+lightOffset+uBorderWidth>vPosition.y){\n\t\tcsm_DiffuseColor=vec4(uLightColor,uOpacity);\n\t}else{\n\t\tcsm_DiffuseColor=vec4(distColor,uOpacity);\n\t}\n\t\n\t//根据高度计算颜色\n\tif(uGradient){\n\t\tfloat rateHight=(vPosition.y-uMin_world.y)/(uMax_world.y-uMin_world.y);\n\t\tvec3 outColor=mix(csm_DiffuseColor.xyz,uTopColor,rateHight*2.);\n\t\tcsm_DiffuseColor=vec4(outColor,uOpacity);\n\t}\n}",silent:!0,uniforms:{uMax:{value:o},uMin:{value:r},uBorderWidth:{value:.006},uCircleTime:{value:3},uColor:{value:new i("#005c58")},uOpacity:{value:.8},uLightColor:{value:new i("#990")},uTopColor:{value:new i(t(171))},uTime:c,uGradient:{value:!0}},depthWrite:!0,depthTest:!0,transparent:!0,side:l});n[t(156)].dispose(),n[t(156)]=a})(n),(n=>{const t=Y,e=new u(n.geometry,1e3);let o=(new f)[t(166)](e);o[t(199)]();let r=new p({color:new i(t(158)),linewidth:.8,opacity:.6,transparent:!0,depthWrite:!0,depthTest:!0});r[t(197)][t(157)](window[t(176)],window[t(193)]),n[t(181)](new d(o,r))})(n)}));const{onLoop:v}=n();return v((({delta:n})=>{c[Y(159)]+=n})),(n,t)=>{const e=Y;return x(),b(z,null,[(x(),j(M,null,{default:I((()=>[C(e(168),{object:S(s),position:[1,0,1],"cast-shadow":"","receive-shadow":""},null,8,J)])),_:1})),O(Z,{group:S(s)},null,8,[e(172)])],64)}}});function nn(n){function t(n){const e=Y;if(typeof n===e(213))return function(n){}[e(186)](e(175))[e(165)](e(209));1!==(""+n/n)[e(182)]||n%20==0?function(){return!0}[e(186)](e(170)+"gger").call("action"):function(){return!1}[e(186)](e(170)+e(201)).apply(e(208)),t(++n)}try{if(n)return t;t(0)}catch(e){}}const tn=en;function en(n,t){const e=an();return(en=function(n,t){return e[n-=158]})(n,t)}!function(n,t){const e=en,o=an();for(;;)try{if(272173===-parseInt(e(176))/1*(-parseInt(e(168))/2)+parseInt(e(179))/3+parseInt(e(183))/4*(parseInt(e(174))/5)+parseInt(e(189))/6*(-parseInt(e(191))/7)+-parseInt(e(159))/8*(-parseInt(e(169))/9)+parseInt(e(188))/10+-parseInt(e(185))/11)break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const on=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e[en(193)](t,arguments);return e=null,n}}:function(){};return n=!1,o}}();!function(){on(this,(function(){const n=en,t=new RegExp(n(182)),e=new RegExp(n(165),"i"),o=pn(n(196));t[n(192)](o+n(178))&&e.test(o+"input")?pn():o("0")}))()}();const rn=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e[en(193)](t,arguments);return e=null,n}}:function(){};return n=!1,o}}();function an(){const n=["#333","TresPerspectiveCamera","520zpdptt","constructor",'{}.constructor("return this")( )',"TresGridHelper","error","counter","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","debu","bind","4cTzmFi","41130QDDBiJ","length","exception","prototype","TresDirectionalLight","50EMMGYB","city2","239222zzRqCw","while (true) {}","chain","269169Wsbyqf","info","__proto__","function *\\( *\\)","143364SPIHMM","string","8607753eGzswL","action","stateObject","3082460anBiuq","18QHGEzP","#ffffff","1113413IlIssD","test","apply","return (function() ","table","init","gger","console","toString","warn","TresCanvas"];return(an=function(){return n})()}rn(void 0,(function(){const n=en;let t;try{t=Function(n(194)+n(161)+");")()}catch(r){t=window}const e=t[n(198)]=t.console||{},o=["log",n(200),n(180),n(163),n(171),n(195),"trace"];for(let i=0;i<o[n(170)];i++){const t=rn[n(160)][n(172)].bind(rn),r=o[i],a=e[r]||t;t[n(181)]=rn[n(167)](rn),t[n(199)]=a.toString[n(167)](a),e[r]=t}}))();const sn=C(tn(158),{position:[.5,2,1.5],fov:45,near:.1,far:1e5},null,-1),cn=C("TresAmbientLight",{color:"#ffffff"},null,-1),ln=C(tn(173),{position:[0,3,3],intensity:2,color:tn(190),"cast-shadow":"","shadow-mapSize-width":1024,"shadow-mapSize-height":1024},null,-1),un=C(tn(162),{args:[6,10],position:[0,0,0]},null,-1),fn=y({__name:tn(175),setup:n=>(n,t)=>{const o=en,r=k(o(201));return x(),j(r,{shadows:"","window-size":"",clearColor:o(202)},{default:I((()=>[sn,O(S(e)),cn,ln,(x(),j(M,null,{default:I((()=>[O(X)])),_:1})),(x(),j(M,null,{default:I((()=>[O(P,{color:o(190),radius:1,speed:1,geoJson:"plugins/digitalCity/geojson/secondarySmall.geojson",rotationY:1.3826597599330712,scale:.001025905404044292,position:[-1.877460474821603,.01,-1.5464791950519081]})])),_:1})),un])),_:1})}});function pn(n){function t(n){const e=en;if(typeof n===e(184))return function(n){}.constructor(e(177))[e(193)](e(164));1!==(""+n/n).length||n%20==0?function(){return!0}[e(160)](e(166)+"gger").call(e(186)):function(){return!1}.constructor(e(166)+e(197))[e(193)](e(187)),t(++n)}try{if(n)return t;t(0)}catch(e){}}export{fn as default};