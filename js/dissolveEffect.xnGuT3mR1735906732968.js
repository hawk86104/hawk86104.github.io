import{e,a as t,b as o,U as r}from"./@tresjs.XlmHwCPa1735906732968.js";import{a as s,b as n}from"./index.QkcmrzFJ1735906732968.js";import{C as i,a6 as a,_ as l,a0 as u}from"./three.VhLXWX0H1735906732968.js";import{b as p}from"./index.J0DjzmgT1735906732968.js";import"./index.9he0HRfc1735906732968.js";import{P as c}from"./tweakpane.yHWGBmom1735906732968.js";import{_ as d}from"./lamboEffect.vue_vue_type_script_setup_true_lang._EisZPwy1735906732968.js";import{a4 as f,a1 as m,o as g,D as v,u as _,d as h,r as j,b as y,e as x,j as C,g as b,J as P,aj as M,ak as S,f as w,al as T,m as I,F as k}from"./@vue.yG49nQHr1735906732968.js";import{_ as D}from"./reflectorDUDV.vue_vue_type_script_setup_true_lang.7yZokAmp1735906732968.js";import"./@vueuse.HCIFcVWX1735906732968.js";import"./three-stdlib.KBM4TZ_N1735906732968.js";import"./@pmndrs.jP0GrZPE1735906732968.js";import"./object-hash.YsnKaXvB1735906732968.js";import"./@amap.goWAqh1c1735906732968.js";import"./jszip._qOKqgyX1735906732968.js";import"./index.aTkKXLrN1735906732968.js";import"./@fesjs.OL5agSaf1735906732968.js";import"./vue-router.OGOa9Z4t1735906732968.js";import"./lodash-es.kYt-_xTG1735906732968.js";import"./@qlin.yHhFDldE1735906732968.js";import"./pinia.ZaWyowAg1735906732968.js";import"./vue-demi.C4xddsk91735906732968.js";import"./@floating-ui.BPbuo5Gx1735906732968.js";import"./@juggle.7yjBMqoW1735906732968.js";import"./chalk.sAH7iSuz1735906732968.js";/* empty css                                 */import"./iconify-icon.l-H2-fnN1735906732968.js";import"./@iconify.3mYF4lU71735906732968.js";import"./dompurify.rQUea5mq1735906732968.js";import"./utils.HT8i3Y5o1735906732968.js";import"./default.vue_vue_type_script_setup_true_lang.k5fCgDaP1735906732968.js";import"./three-mesh-ui.module._lts3quJ1735906732968.js";import"./reflectorDiffuse.vue_vue_type_script_setup_true_lang.M3UI3bH-1735906732968.js";import"./all.three.PzCeqUTP1735906732968.js";import"./oimophysics.x0jH7fze1735906732968.js";import"./reflectorShaderMesh.vue_vue_type_script_setup_true_lang.xnO0OdjO1735906732968.js";import"./whiteFloorMesh.vue_vue_type_script_setup_true_lang.czlU8zsm1735906732968.js";import"./gridPlusCom.vue_vue_type_script_setup_true_lang.yzri0fv_1735906732968.js";import"./videoFloor.vue_vue_type_script_setup_true_lang.ZJUjI_F01735906732968.js";import"./digitalGround.vue_vue_type_script_setup_true_lang.yFlxGQ3D1735906732968.js";import"./imgFloor.vue_vue_type_script_setup_true_lang.zSrbXLxr1735906732968.js";const R=["object","rotation"],W={__name:"dissolveEffectModel",props:{edgeColor:{default:1118481},edgeWidth:{default:.03},dissolveSpeed:{default:.003},funRef:{appear:null,disappear:null}},async setup(r,{expose:s}){let n,l;const u=r,{scene:p,nodes:c,materials:d}=([n,l]=f((()=>t("https://opensource-1314935952.cos.ap-nanjing.myqcloud.com/model/industry4/lambo.glb",{draco:!0,decoderPath:"./draco/"}))),n=await n,l(),n);Object.values(c).forEach((e=>{e.isMesh&&(e.name.startsWith("glass")&&e.geometry.computeVertexNormals(),"silver_001_BreakDiscs_0"===e.name&&(e.material=d.BreakDiscs.clone(),e.material.color=new i("#ddd")))})),c.glass_003.scale.setScalar(2.7),d.FrameBlack.color=new i("black"),d.FrameBlack.roughness=0,d.FrameBlack.metalness=.75,d.Chrome.color=new i("#333"),d.Chrome.metalness=1,d.Chrome.roughness=0,d.BreakDiscs.color=new i("#555"),d.BreakDiscs.metalness=.2,d.BreakDiscs.roughness=.2,d.TiresGum.color=new i("#181818"),d.TiresGum.metalness=0,d.TiresGum.roughness=.4,d.GreyElements.color=new i("#292929"),d.GreyElements.metalness=0,c.yellow_WhiteCar_0.material=new a({roughness:.3,metalness:.05,color:"#111",envMapIntensity:.75,clearcoatRoughness:0,clearcoat:1});const h=([n,l]=f((()=>o(["./plugins/digitalCity/image/smokeparticle.png","./plugins/industry4/image/dissolve.jpg"]))),n=await n,l(),n);let j=[],y=!1,x={dissolveProgress:0,noiseTexture:h[0],edgeColorTexture:h[1]},C=u.dissolveSpeed;const b=()=>{if(!y){y=!0,C=u.dissolveSpeed;for(let e of j)e.uniforms.dissolveSpeed={value:C},e.uniforms.dissolveProgress={value:0}}},P=()=>{if(!y){y=!0,C=-u.dissolveSpeed;for(let e of j)e.uniforms.dissolveSpeed={value:C},e.uniforms.dissolveProgress={value:1}}};u.funRef.appear=b,u.funRef.disappear=P,s({appear:b,disappear:P}),Object.values(c).forEach((e=>{if(e.isMesh){e.frustumCulled=!1;const t=e.material;t.transparent=!0,t.onBeforeCompile=e=>{j.push(e),e.uniforms.edgeColor={value:new i(u.edgeColor)},e.uniforms.edgeWidth={value:u.edgeWidth},e.uniforms.dissolveSpeed={value:u.dissolveSpeed},e.uniforms.dissolveProgress={value:x.dissolveProgress},e.uniforms.noiseTexture={value:x.noiseTexture},e.uniforms.edgeColorTexture={value:x.edgeColorTexture},e.vertexShader=e.vertexShader.replace("#include <common>",["varying vec2 xUv;","#include <common>"].join("\n")),e.vertexShader=e.vertexShader.replace("#include <uv_vertex>",["xUv = uv;","#include <uv_vertex>"].join("\n")),e.fragmentShader=e.fragmentShader.replace("#include <common>","#include <common>\n             uniform float dissolveProgress;\n             uniform float edgeWidth;\n             uniform vec3 edgeColor;\n             uniform sampler2D noiseTexture;\n             uniform sampler2D edgeColorTexture;\n             varying vec2 xUv;\n            "),e.fragmentShader=e.fragmentShader.replace("#include <dithering_fragment>","#include <dithering_fragment>\n                float noiseValue = texture2D(noiseTexture, xUv).r;\n              \tvec4 finalColor = texture2D(edgeColorTexture, xUv);\n\n\t\t\t\t\t\t\t\tvec3 mixedColor = mix(finalColor.rgb, edgeColor, 0.5);\n\t\t\t\t\t\t\t\tfinalColor.rgb = mixedColor;\n\n                // vec4 finalColor = linearToOutputTexel( vec4(edgeColor, gl_FragColor.a) );\n\t\t\t\t\t\t\t\tfloat alpha = step(noiseValue - edgeWidth, dissolveProgress);\n                gl_FragColor.a = alpha;\n\t\t\t\t\t\t\t\tfloat useOrigin = step(noiseValue, dissolveProgress);\n\t\t\t\t\t\t\t\tgl_FragColor.rgb = mix(finalColor.rgb, gl_FragColor.rgb, useOrigin);")}}}));const{onLoop:M}=e();return M((({dt:e})=>{if(y)for(let t of j){let{dissolveProgress:e,dissolveSpeed:o}=t.uniforms;e.value+=o.value,e.value<0&&(y=!1),e.value>1&&(y=!1)}})),m((()=>{if(u.dissolveSpeed)for(let e of j)e.uniforms.dissolveSpeed.value=u.dissolveSpeed;if(u.edgeColor)for(let e of j)e.uniforms.edgeColor.value=new i(u.edgeColor);if(u.edgeWidth)for(let e of j)e.uniforms.edgeWidth.value=u.edgeWidth})),(e,t)=>(g(),v("primitive",{object:_(p),scale:.015,rotation:[0,Math.PI/1.5,0]},null,8,R))}},B=z;!function(e,t){const o=z,r=Z();for(;;)try{if(425760===parseInt(o(271))/1+parseInt(o(236))/2*(parseInt(o(252))/3)+-parseInt(o(278))/4+-parseInt(o(288))/5+parseInt(o(260))/6+parseInt(o(240))/7+-parseInt(o(273))/8)break;r.push(r.shift())}catch(s){r.push(r.shift())}}();const F=function(){let e=!0;return function(t,o){const r=e?function(){if(o){const e=o[z(266)](t,arguments);return o=null,e}}:function(){};return e=!1,r}}();!function(){F(this,(function(){const e=z,t=new RegExp(e(276)),o=new RegExp(e(246),"i"),r=L(e(239));t[e(244)](r+e(264))&&o[e(244)](r+e(262))?L():r("0")}))()}();const E=function(){let e=!0;return function(t,o){const r=e?function(){if(o){const e=o[z(266)](t,arguments);return o=null,e}}:function(){};return e=!1,r}}();E(void 0,(function(){const e=z,t=function(){const e=z;let t;try{t=Function(e(249)+e(269)+");")()}catch(o){t=window}return t}(),o=t.console=t[e(274)]||{},r=[e(268),e(243),e(290),"error",e(286),"table",e(263)];for(let s=0;s<r[e(283)];s++){const t=E[e(280)].prototype[e(242)](E),n=r[s],i=o[n]||t;t.__proto__=E[e(242)](E),t[e(287)]=i[e(287)][e(242)](i),o[n]=t}}))();const G=["rotation"],U=[B(277)],O=[B(253)],V=[B(277)];function z(e,t){const o=Z();return(z=function(e,t){return o[e-=235]})(e,t)}const K=h({__name:"dissolveEffect",setup(e){const t=B,o=j({clearColor:t(254),antialias:!1,logarithmicDepthBuffer:!0,renderMode:"manual"}),i=j({autoRotate:!0}),a=new c({title:"溶解参数",expanded:!0}),f=j({edgeColor:t(235),edgeWidth:.03,dissolveSpeed:.003,funRef:{appear:null,disappear:null}});a.addBinding(f,"edgeColor",{label:"颜色"}),a[t(247)](f,t(281),{label:"宽度",min:0,max:.13,step:.01}),a[t(247)](f,t(257),{label:"速度",min:.001,max:.01,step:.001});const m=a.addButton({title:"显示",label:"模型"}),h=y(null);m.on("click",(()=>{const e=t;h[e(285)].appear?h.value[e(279)]():h[e(285)].funRef.appear()}));return a.addButton({title:"消失",label:"模型"}).on(t(289),(()=>{const e=t;h.value[e(279)]?h[e(285)].disappear():h[e(285)][e(258)][e(248)]()})),(e,a)=>{const c=t,m=x(c(237));return g(),v(k,null,[C(_(p)),C(m,I(o,{"window-size":""}),{default:b((()=>[a[2]||(a[2]=P(c(259),{position:[0,10,15],fov:25,near:.1,far:1e4},null,-1)),C(_(r),M(S(i)),null,16),a[3]||(a[3]=P("TresHemisphereLight",{intensity:.5},null,-1)),(g(),w(T,null,{default:b((()=>[C(W,I(f,{ref_key:c(255),ref:h}),null,16)])),_:1})),(g(),w(T,null,{default:b((()=>[C(_(D),{position:[0,-1.562,0],reflectivity:2.6,showGridHelper:!1,scale:1.5})])),_:1})),P("TresMesh",{scale:4,position:[3,-1.161,-1.5],rotation:[-Math.PI/2,0,Math.PI/2.5]},[a[0]||(a[0]=P(c(241),{args:[.9,1,4,1]},null,-1)),P("TresMeshStandardMaterial",{color:c(275),roughness:.75,side:l[c(272)]},null,8,U)],8,G),P(c(261),{scale:4,position:[-3,-1.161,-1],rotation:[-Math.PI/2,0,Math.PI/2.5]},[a[1]||(a[1]=P("TresRingGeometry",{args:[.9,1,3,1]},null,-1)),P("TresMeshStandardMaterial",{color:c(275),roughness:.75,side:u},null,8,V)],8,O),(g(),w(T,null,{default:b((()=>[C(_(s),{resolution:512},{default:b((()=>[C(_(n),{intensity:2,position:[0,1,3],scale:[10,1,1]}),C(_(n),{intensity:2,"rotation-x":Math.PI/2,position:[0,4,-6],scale:[10,1,1]},null,8,[c(245)]),C(_(n),{intensity:2,"rotation-x":Math.PI/2,position:[0,4,-3],scale:[10,1,1]},null,8,[c(245)]),C(_(n),{intensity:2,"rotation-x":Math.PI/2,position:[0,4,0],scale:[10,1,1]},null,8,[c(245)]),C(_(n),{intensity:2,"rotation-x":Math.PI/2,position:[0,4,3],scale:[10,1,1]},null,8,[c(245)]),C(_(n),{intensity:2,"rotation-x":Math.PI/2,position:[0,4,6],scale:[10,1,1]},null,8,[c(245)]),C(_(n),{intensity:2,"rotation-x":Math.PI/2,position:[0,4,9],scale:[10,1,1]},null,8,["rotation-x"]),C(_(n),{intensity:2,"rotation-y":Math.PI/2,position:[-50,2,0],scale:[100,2,1]},null,8,[c(265)]),C(_(n),{intensity:2,"rotation-y":-Math.PI/2,position:[50,2,0],scale:[100,2,1]},null,8,[c(265)]),C(_(n),{form:c(267),color:c(284),intensity:10,scale:2,position:[10,5,10]})])),_:1})])),_:1})),C(d)])),_:1},16)],64)}}});function L(e){function t(e){const o=z;if("string"==typeof e)return function(e){}[o(280)]("while (true) {}").apply(o(270));1!==(""+e/e).length||e%20==0?function(){return!0}.constructor(o(251)+o(238))[o(256)](o(250)):function(){return!1}[o(280)](o(251)+o(238))[o(266)](o(282)),t(++e)}try{if(e)return t;t(0)}catch(o){}}function Z(){const e=["chain","rotation-y","apply","ring","log",'{}.constructor("return this")( )',"counter","507676RDbYTP","DoubleSide","111848LfegXG","console","white","function *\\( *\\)","side","3130928nSlCEp","appear","constructor","edgeWidth","stateObject","length","red","value","exception","toString","3598990kNKcWN","click","info","#111111","638WPMvek","TresCanvas","gger","init","477141KsCkJk","TresRingGeometry","bind","warn","test","rotation-x","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","addBinding","disappear","return (function() ","action","debu","5259jcrKxu","rotation","#15151a","dissolveEffectModelRef","call","dissolveSpeed","funRef","TresPerspectiveCamera","4843350KZWPGD","TresMesh","input","trace"];return(Z=function(){return e})()}export{K as default};