import{e,a as t,b as o,U as r}from"./@tresjs.FlKhQDQ71735866388381.js";import{a as s,b as n}from"./index.id5kPtm81735866388381.js";import{C as i,a6 as a,_ as l,a0 as u}from"./three.Rja0AEnA1735866388381.js";import{b as p}from"./index.3aLQMygt1735866388381.js";import"./index._KC2sCXH1735866388381.js";import{P as c}from"./tweakpane.yHWGBmom1735866388381.js";import{_ as d}from"./lamboEffect.vue_vue_type_script_setup_true_lang.59pbWujh1735866388381.js";import{a4 as f,a1 as m,o as g,D as v,u as _,d as h,r as j,b as x,e as y,j as C,g as b,J as P,aj as w,ak as M,f as S,al as I,m as T,F as k}from"./@vue.yG49nQHr1735866388381.js";import{_ as D}from"./reflectorDUDV.vue_vue_type_script_setup_true_lang.KbXI9glQ1735866388381.js";import"./@vueuse.YI3Exu6_1735866388381.js";import"./three-stdlib.ljGSSKXp1735866388381.js";import"./@pmndrs.IQpkozJe1735866388381.js";import"./object-hash.ne_nEdig1735866388381.js";import"./@amap.B1QlzV1D1735866388381.js";import"./jszip.LS64v-ne1735866388381.js";import"./index.-991HkgJ1735866388381.js";import"./@fesjs.u6K5q1hz1735866388381.js";import"./vue-router.9bMbssc81735866388381.js";import"./lodash-es.kYt-_xTG1735866388381.js";import"./@qlin.yHhFDldE1735866388381.js";import"./pinia.U7dsyb111735866388381.js";import"./vue-demi.C4xddsk91735866388381.js";import"./@floating-ui.BPbuo5Gx1735866388381.js";import"./@juggle.7yjBMqoW1735866388381.js";import"./chalk.w3XuUwyA1735866388381.js";/* empty css                                 */import"./iconify-icon.l-H2-fnN1735866388381.js";import"./@iconify.3mYF4lU71735866388381.js";import"./dompurify.rQUea5mq1735866388381.js";import"./utils.toJAERsP1735866388381.js";import"./default.vue_vue_type_script_setup_true_lang.ZJ9V3SwC1735866388381.js";import"./three-mesh-ui.module.wuxV_TNn1735866388381.js";import"./reflectorDiffuse.vue_vue_type_script_setup_true_lang.cIDWrYX71735866388381.js";import"./all.three.XOVNFju71735866388381.js";import"./oimophysics.x0jH7fze1735866388381.js";import"./reflectorShaderMesh.vue_vue_type_script_setup_true_lang.QLVCW5Vm1735866388381.js";import"./whiteFloorMesh.vue_vue_type_script_setup_true_lang.dm0bgwtl1735866388381.js";import"./gridPlusCom.vue_vue_type_script_setup_true_lang.eP-ga2N11735866388381.js";import"./videoFloor.vue_vue_type_script_setup_true_lang.fLu_QM1L1735866388381.js";import"./digitalGround.vue_vue_type_script_setup_true_lang.pU4oP8vp1735866388381.js";import"./imgFloor.vue_vue_type_script_setup_true_lang._NaZfJ6Z1735866388381.js";const B=["object","rotation"],W={__name:"dissolveEffectModel",props:{edgeColor:{default:1118481},edgeWidth:{default:.03},dissolveSpeed:{default:.003},funRef:{appear:null,disappear:null}},async setup(r,{expose:s}){let n,l;const u=r,{scene:p,nodes:c,materials:d}=([n,l]=f((()=>t("https://opensource-1314935952.cos.ap-nanjing.myqcloud.com/model/industry4/lambo.glb",{draco:!0,decoderPath:"./draco/"}))),n=await n,l(),n);Object.values(c).forEach((e=>{e.isMesh&&(e.name.startsWith("glass")&&e.geometry.computeVertexNormals(),"silver_001_BreakDiscs_0"===e.name&&(e.material=d.BreakDiscs.clone(),e.material.color=new i("#ddd")))})),c.glass_003.scale.setScalar(2.7),d.FrameBlack.color=new i("black"),d.FrameBlack.roughness=0,d.FrameBlack.metalness=.75,d.Chrome.color=new i("#333"),d.Chrome.metalness=1,d.Chrome.roughness=0,d.BreakDiscs.color=new i("#555"),d.BreakDiscs.metalness=.2,d.BreakDiscs.roughness=.2,d.TiresGum.color=new i("#181818"),d.TiresGum.metalness=0,d.TiresGum.roughness=.4,d.GreyElements.color=new i("#292929"),d.GreyElements.metalness=0,c.yellow_WhiteCar_0.material=new a({roughness:.3,metalness:.05,color:"#111",envMapIntensity:.75,clearcoatRoughness:0,clearcoat:1});const h=([n,l]=f((()=>o(["./plugins/digitalCity/image/smokeparticle.png","./plugins/industry4/image/dissolve.jpg"]))),n=await n,l(),n);let j=[],x=!1,y={dissolveProgress:0,noiseTexture:h[0],edgeColorTexture:h[1]},C=u.dissolveSpeed;const b=()=>{if(!x){x=!0,C=u.dissolveSpeed;for(let e of j)e.uniforms.dissolveSpeed={value:C},e.uniforms.dissolveProgress={value:0}}},P=()=>{if(!x){x=!0,C=-u.dissolveSpeed;for(let e of j)e.uniforms.dissolveSpeed={value:C},e.uniforms.dissolveProgress={value:1}}};u.funRef.appear=b,u.funRef.disappear=P,s({appear:b,disappear:P}),Object.values(c).forEach((e=>{if(e.isMesh){e.frustumCulled=!1;const t=e.material;t.transparent=!0,t.onBeforeCompile=e=>{j.push(e),e.uniforms.edgeColor={value:new i(u.edgeColor)},e.uniforms.edgeWidth={value:u.edgeWidth},e.uniforms.dissolveSpeed={value:u.dissolveSpeed},e.uniforms.dissolveProgress={value:y.dissolveProgress},e.uniforms.noiseTexture={value:y.noiseTexture},e.uniforms.edgeColorTexture={value:y.edgeColorTexture},e.vertexShader=e.vertexShader.replace("#include <common>",["varying vec2 xUv;","#include <common>"].join("\n")),e.vertexShader=e.vertexShader.replace("#include <uv_vertex>",["xUv = uv;","#include <uv_vertex>"].join("\n")),e.fragmentShader=e.fragmentShader.replace("#include <common>","#include <common>\n             uniform float dissolveProgress;\n             uniform float edgeWidth;\n             uniform vec3 edgeColor;\n             uniform sampler2D noiseTexture;\n             uniform sampler2D edgeColorTexture;\n             varying vec2 xUv;\n            "),e.fragmentShader=e.fragmentShader.replace("#include <dithering_fragment>","#include <dithering_fragment>\n                float noiseValue = texture2D(noiseTexture, xUv).r;\n              \tvec4 finalColor = texture2D(edgeColorTexture, xUv);\n\n\t\t\t\t\t\t\t\tvec3 mixedColor = mix(finalColor.rgb, edgeColor, 0.5);\n\t\t\t\t\t\t\t\tfinalColor.rgb = mixedColor;\n\n                // vec4 finalColor = linearToOutputTexel( vec4(edgeColor, gl_FragColor.a) );\n\t\t\t\t\t\t\t\tfloat alpha = step(noiseValue - edgeWidth, dissolveProgress);\n                gl_FragColor.a = alpha;\n\t\t\t\t\t\t\t\tfloat useOrigin = step(noiseValue, dissolveProgress);\n\t\t\t\t\t\t\t\tgl_FragColor.rgb = mix(finalColor.rgb, gl_FragColor.rgb, useOrigin);")}}}));const{onLoop:w}=e();return w((({dt:e})=>{if(x)for(let t of j){let{dissolveProgress:e,dissolveSpeed:o}=t.uniforms;e.value+=o.value,e.value<0&&(x=!1),e.value>1&&(x=!1)}})),m((()=>{if(u.dissolveSpeed)for(let e of j)e.uniforms.dissolveSpeed.value=u.dissolveSpeed;if(u.edgeColor)for(let e of j)e.uniforms.edgeColor.value=new i(u.edgeColor);if(u.edgeWidth)for(let e of j)e.uniforms.edgeWidth.value=u.edgeWidth})),(e,t)=>(g(),v("primitive",{object:_(p),scale:.015,rotation:[0,Math.PI/1.5,0]},null,8,B))}},F=L;!function(e,t){const o=L,r=Z();for(;;)try{if(938047===parseInt(o(178))/1+parseInt(o(194))/2+-parseInt(o(226))/3*(parseInt(o(204))/4)+-parseInt(o(208))/5+parseInt(o(171))/6*(parseInt(o(225))/7)+parseInt(o(222))/8*(-parseInt(o(218))/9)+parseInt(o(209))/10*(parseInt(o(186))/11))break;r.push(r.shift())}catch(s){r.push(r.shift())}}();const R=function(){let e=!0;return function(t,o){const r=e?function(){if(o){const e=o[L(231)](t,arguments);return o=null,e}}:function(){};return e=!1,r}}();!function(){R(this,(function(){const e=L,t=new RegExp(e(201)),o=new RegExp(e(199),"i"),r=z(e(213));t[e(175)](r+e(215))&&o[e(175)](r+e(190))?z():r("0")}))()}();const E=function(){let e=!0;return function(t,o){const r=e?function(){if(o){const e=o[L(231)](t,arguments);return o=null,e}}:function(){};return e=!1,r}}();E(void 0,(function(){const e=L,t=function(){const e=L;let t;try{t=Function(e(224)+e(210)+");")()}catch(o){t=window}return t}(),o=t[e(217)]=t[e(217)]||{},r=[e(174),"warn",e(211),e(227),"exception",e(184),e(188)];for(let s=0;s<r[e(185)];s++){const t=E[e(172)][e(176)][e(219)](E),n=r[s],i=o[n]||t;t[e(192)]=E[e(219)](E),t[e(180)]=i[e(180)][e(219)](i),o[n]=t}}))();const U=["rotation"],G=[F(193)],O=[F(221)],V=[F(193)];function L(e,t){const o=Z();return(L=function(e,t){return o[e-=170]})(e,t)}function Z(){const e=["TresHemisphereLight","init","call","chain","dissolveSpeed","console","9PRyLBO","bind","rotation-y","rotation","4197616ryEaPq","rotation-x","return (function() ","81165xVLIpw","4126302Pjwjob","error","TresMesh","appear","string","apply","while (true) {}","TresCanvas","618Nwrroj","constructor","gger","log","test","prototype","action","107523XjHMAR","click","toString","disappear","DoubleSide","addBinding","table","length","574475TCuVlk","counter","trace","debu","input","edgeColor","__proto__","side","1249362DBCqYQ","value","edgeWidth","dissolveEffect","funRef","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","white","function *\\( *\\)","red","#111111","4mWwUtC","TresRingGeometry","stateObject","addButton","4058655KMrWUZ","330TIfkCZ",'{}.constructor("return this")( )',"info"];return(Z=function(){return e})()}const q=h({__name:F(197),setup(e){const t=F,o=j({clearColor:"#15151a",antialias:!1,logarithmicDepthBuffer:!0,renderMode:"manual"}),i=j({autoRotate:!0}),a=new c({title:"溶解参数",expanded:!0}),f=j({edgeColor:t(203),edgeWidth:.03,dissolveSpeed:.003,funRef:{appear:null,disappear:null}});a[t(183)](f,t(191),{label:"颜色"}),a.addBinding(f,t(196),{label:"宽度",min:0,max:.13,step:.01}),a[t(183)](f,t(216),{label:"速度",min:.001,max:.01,step:.001});const m=a[t(207)]({title:"显示",label:"模型"}),h=x(null);m.on(t(179),(()=>{const e=t;h[e(195)][e(229)]?h.value[e(229)]():h[e(195)][e(198)][e(229)]()}));return a.addButton({title:"消失",label:"模型"}).on("click",(()=>{const e=t;h[e(195)][e(229)]?h[e(195)].disappear():h.value[e(198)][e(181)]()})),(e,a)=>{const c=t,m=y(c(170));return g(),v(k,null,[C(_(p)),C(m,T(o,{"window-size":""}),{default:b((()=>[a[2]||(a[2]=P("TresPerspectiveCamera",{position:[0,10,15],fov:25,near:.1,far:1e4},null,-1)),C(_(r),w(M(i)),null,16),a[3]||(a[3]=P(c(212),{intensity:.5},null,-1)),(g(),S(I,null,{default:b((()=>[C(W,T(f,{ref_key:"dissolveEffectModelRef",ref:h}),null,16)])),_:1})),(g(),S(I,null,{default:b((()=>[C(_(D),{position:[0,-1.562,0],reflectivity:2.6,showGridHelper:!1,scale:1.5})])),_:1})),P(c(228),{scale:4,position:[3,-1.161,-1.5],rotation:[-Math.PI/2,0,Math.PI/2.5]},[a[0]||(a[0]=P(c(205),{args:[.9,1,4,1]},null,-1)),P("TresMeshStandardMaterial",{color:c(200),roughness:.75,side:l[c(182)]},null,8,G)],8,U),P(c(228),{scale:4,position:[-3,-1.161,-1],rotation:[-Math.PI/2,0,Math.PI/2.5]},[a[1]||(a[1]=P(c(205),{args:[.9,1,3,1]},null,-1)),P("TresMeshStandardMaterial",{color:c(200),roughness:.75,side:u},null,8,V)],8,O),(g(),S(I,null,{default:b((()=>[C(_(s),{resolution:512},{default:b((()=>[C(_(n),{intensity:2,position:[0,1,3],scale:[10,1,1]}),C(_(n),{intensity:2,"rotation-x":Math.PI/2,position:[0,4,-6],scale:[10,1,1]},null,8,["rotation-x"]),C(_(n),{intensity:2,"rotation-x":Math.PI/2,position:[0,4,-3],scale:[10,1,1]},null,8,[c(223)]),C(_(n),{intensity:2,"rotation-x":Math.PI/2,position:[0,4,0],scale:[10,1,1]},null,8,["rotation-x"]),C(_(n),{intensity:2,"rotation-x":Math.PI/2,position:[0,4,3],scale:[10,1,1]},null,8,[c(223)]),C(_(n),{intensity:2,"rotation-x":Math.PI/2,position:[0,4,6],scale:[10,1,1]},null,8,[c(223)]),C(_(n),{intensity:2,"rotation-x":Math.PI/2,position:[0,4,9],scale:[10,1,1]},null,8,[c(223)]),C(_(n),{intensity:2,"rotation-y":Math.PI/2,position:[-50,2,0],scale:[100,2,1]},null,8,[c(220)]),C(_(n),{intensity:2,"rotation-y":-Math.PI/2,position:[50,2,0],scale:[100,2,1]},null,8,[c(220)]),C(_(n),{form:"ring",color:c(202),intensity:10,scale:2,position:[10,5,10]})])),_:1})])),_:1})),C(d)])),_:1},16)],64)}}});function z(e){function t(e){const o=L;if(typeof e===o(230))return function(e){}[o(172)](o(232))[o(231)](o(187));1!==(""+e/e)[o(185)]||e%20==0?function(){return!0}.constructor(o(189)+"gger")[o(214)](o(177)):function(){return!1}[o(172)](o(189)+o(173))[o(231)](o(206)),t(++e)}try{if(e)return t;t(0)}catch(o){}}export{q as default};