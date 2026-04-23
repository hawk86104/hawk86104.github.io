import{importShared as t}from"./3d-tiles-renderer.DeLENXj81776915551521.js";import{useGLTF as P,TresCanvas_default as R,OrbitControls_default as x}from"./index.Bp1TXbF61776915551521.js";import{_sfc_main as h,_sfc_main$1 as c}from"./index.vue_vue_type_script_setup_true_lang.D-V06MW11776915551521.js";import"./index.vue_vue_type_script_setup_true_lang.BKiCcm8f1776915551521.js";import{Pane as M}from"./tweakpane.BQRZXf8M1776915551521.js";const{defineComponent:w}=await t("vue"),{openBlock:C,createElementBlock:B}=await t("vue"),T=["object"],y=await t("three"),{toRef:b,watch:k}=await t("vue"),E=w({__name:"com",props:{uSnappingResolution:{default:6},srcMaterial:{default:()=>new y.MeshStandardMaterial({color:65280,roughness:.5,metalness:.5})}},setup(u){const i=u,o=b(i.uSnappingResolution);return i.srcMaterial.onBeforeCompile=n=>{n.uniforms.uSnappingResolution=o,n.vertexShader=n.vertexShader.replace("#include <common>",`
			#include <common>
			uniform float uSnappingResolution;
	`),n.vertexShader=n.vertexShader.replace("#include <project_vertex>",`
			vec4 mvPosition = vec4( transformed, 1.0 );

			#ifdef USE_BATCHING
				mvPosition = batchingMatrix * mvPosition;
			#endif

			#ifdef USE_INSTANCING
				mvPosition = instanceMatrix * mvPosition;
			#endif

			mvPosition = modelMatrix * mvPosition;

			mvPosition = vec4(
				round(mvPosition.x * uSnappingResolution) / uSnappingResolution,
				round(mvPosition.y * uSnappingResolution) / uSnappingResolution,
				round(mvPosition.z * uSnappingResolution) / uSnappingResolution,
				1.0);
			mvPosition = viewMatrix * mvPosition;
			gl_Position = projectionMatrix * mvPosition;
	`)},k(()=>i.uSnappingResolution,n=>{o.value=n}),(n,l)=>(C(),B("primitive",{object:n.srcMaterial},null,8,T))}});function N(u,i=6){const o={value:i};return u.onBeforeCompile=n=>{n.uniforms.uSnappingResolution=o,n.vertexShader=n.vertexShader.replace("#include <common>",`
				#include <common>
				uniform float uSnappingResolution;
		`),n.vertexShader=n.vertexShader.replace("#include <project_vertex>",`
				vec4 mvPosition = vec4( transformed, 1.0 );
	
				#ifdef USE_BATCHING
					mvPosition = batchingMatrix * mvPosition;
				#endif
	
				#ifdef USE_INSTANCING
					mvPosition = instanceMatrix * mvPosition;
				#endif
	
				mvPosition = modelMatrix * mvPosition;
	
				mvPosition = vec4(
					round(mvPosition.x * uSnappingResolution) / uSnappingResolution,
					round(mvPosition.y * uSnappingResolution) / uSnappingResolution,
					round(mvPosition.z * uSnappingResolution) / uSnappingResolution,
					1.0);
				mvPosition = viewMatrix * mvPosition;
				gl_Position = projectionMatrix * mvPosition;
		`)},o}const{defineComponent:$}=await t("vue"),{unref:f,openBlock:I,createElementBlock:j,createCommentVNode:G}=await t("vue"),V=["object"],{watch:S}=await t("vue"),A=$({__name:"model",props:{uSnappingResolution:{default:6}},setup(u){const i=u,{state:o,materials:n}=P("https://opensource.cdn.icegl.cn/model/industry4/MRBike.glb",{draco:!0,decoderPath:"./draco/"}),l=[];return S(()=>o.value,e=>{e?.scene&&Object.values(n.value).forEach(p=>{l.push(N(p,i.uSnappingResolution))})}),S(()=>i.uSnappingResolution,e=>{l.forEach(p=>{p.value=e})}),(e,p)=>f(o)?(I(),j("primitive",{key:0,object:f(o)?.scene,scale:5,position:[0,-2,0]},null,8,V)):G("",!0)}}),{defineComponent:z}=await t("vue"),{createElementVNode:s,unref:r,createVNode:a,Suspense:g,withCtx:m,openBlock:d,createBlock:v,mergeProps:L}=await t("vue"),U={position:[5,.9,-5],name:"torus"},{ACESFilmicToneMapping:H}=await t("three"),{reactive:_}=await t("vue"),J=z({__name:"vertexSnapping",setup(u){const i=_({alpha:!0,toneMapping:H,windowSize:!0,clearColor:"#000000"}),o=_({uSnappingResolution:3,modelSnappingResolution:6}),n=new M;return n.addBinding(o,"uSnappingResolution",{label:"圆环扭结-分辨率",min:0,max:20,step:.01}),n.addBinding(o,"modelSnappingResolution",{label:"自行车模型-分辨率",min:0,max:20,step:.01}),(l,e)=>(d(),v(r(R),L(i,{"window-size":""}),{default:m(()=>[e[1]||(e[1]=s("TresPerspectiveCamera",{position:[8,6,8],fov:45,near:1,far:1e3},null,-1)),a(r(x)),e[2]||(e[2]=s("TresAmbientLight",{intensity:.5},null,-1)),e[3]||(e[3]=s("TresDirectionalLight",{position:[7,10,-5.5],intensity:5},null,-1)),e[4]||(e[4]=s("TresMesh",{position:[-5,.5,5],"receive-shadow":"","cast-shadow":"",name:"cube"},[s("TresCylinderGeometry",{args:[1.5,1.5,2]}),s("TresMeshStandardMaterial",{color:16737826,roughness:0,metalness:0})],-1)),s("TresMesh",U,[e[0]||(e[0]=s("TresTorusKnotGeometry",{args:[1,.35,100,32]},null,-1)),a(E,{uSnappingResolution:o.uSnappingResolution},null,8,["uSnappingResolution"])]),(d(),v(g,null,{default:m(()=>[a(A,{uSnappingResolution:o.modelSnappingResolution},null,8,["uSnappingResolution"])]),_:1})),(d(),v(g,null,{default:m(()=>[a(r(h),{resolution:256,blur:1,background:""},{default:m(()=>[a(r(c),{intensity:2,form:"circle","rotation-x":Math.PI/2,position:[2*4-3*4/2,4,0],scale:[1,5,0]},null,8,["rotation-x"]),a(r(c),{intensity:2,form:"circle","rotation-x":Math.PI/2,position:[-12/2,4,0],scale:[1,5,0]},null,8,["rotation-x"]),a(r(c),{intensity:1,"rotation-y":-Math.PI/2,position:[-1,0,0],scale:[10,.2,1]},null,8,["rotation-y"]),a(r(c),{intensity:1,"rotation-y":-Math.PI/2,position:[1,0,0],scale:[10,.2,1]},null,8,["rotation-y"])]),_:1})]),_:1}))]),_:1},16))}});export{J as default};
