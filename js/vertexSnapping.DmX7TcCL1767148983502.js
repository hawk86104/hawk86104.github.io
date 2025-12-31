import{importShared as t}from"./3d-tiles-renderer.DZNovkLO1767148983502.js";import{NA as P,ol as R,Kk as x}from"./index.DTe2qqjO1767148983502.js";import{_sfc_main as h,_sfc_main$1 as c}from"./customShaderMaterial.vue_vue_type_script_setup_true_lang.B7dQ_CiZ1767148983502.js";import"./index.vue_vue_type_script_setup_true_lang.CjsHShHS1767148983502.js";import{Pane as M}from"./tweakpane.BQRZXf8M1767148983502.js";const{defineComponent:w}=await t("vue"),{openBlock:C,createElementBlock:B}=await t("vue"),y=["object"],k=await t("three"),{toRef:T,watch:E}=await t("vue"),N=w({__name:"com",props:{uSnappingResolution:{default:6},srcMaterial:{default:()=>new k.MeshStandardMaterial({color:65280,roughness:.5,metalness:.5})}},setup(u){const i=u,e=T(i.uSnappingResolution);return i.srcMaterial.onBeforeCompile=n=>{n.uniforms.uSnappingResolution=e,n.vertexShader=n.vertexShader.replace("#include <common>",`
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
	`)},E(()=>i.uSnappingResolution,n=>{e.value=n}),(n,l)=>(C(),B("primitive",{object:n.srcMaterial},null,8,y))}});function b(u,i=6){const e={value:i};return u.onBeforeCompile=n=>{n.uniforms.uSnappingResolution=e,n.vertexShader=n.vertexShader.replace("#include <common>",`
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
		`)},e}const{defineComponent:$}=await t("vue"),{unref:f,openBlock:I,createElementBlock:j,createCommentVNode:A}=await t("vue"),V=["object"],{watch:S}=await t("vue"),G=$({__name:"model",props:{uSnappingResolution:{default:6}},setup(u){const i=u,{state:e,materials:n}=P("https://opensource.cdn.icegl.cn/model/industry4/MRBike.glb",{draco:!0,decoderPath:"./draco/"}),l=[];return S(()=>e.value,o=>{o?.scene&&Object.values(n.value).forEach(p=>{l.push(b(p,i.uSnappingResolution))})}),S(()=>i.uSnappingResolution,o=>{l.forEach(p=>{p.value=o})}),(o,p)=>f(e)?(I(),j("primitive",{key:0,object:f(e)?.scene,scale:5,position:[0,-2,0]},null,8,V)):A("",!0)}}),{defineComponent:z}=await t("vue"),{createElementVNode:s,unref:r,createVNode:a,Suspense:g,withCtx:m,openBlock:d,createBlock:v,mergeProps:U}=await t("vue"),H={position:[5,.9,-5],name:"torus"},{ACESFilmicToneMapping:L}=await t("three"),{reactive:_}=await t("vue"),J=z({__name:"vertexSnapping",setup(u){const i=_({alpha:!0,toneMapping:L,windowSize:!0,clearColor:"#000000"}),e=_({uSnappingResolution:3,modelSnappingResolution:6}),n=new M;return n.addBinding(e,"uSnappingResolution",{label:"圆环扭结-分辨率",min:0,max:20,step:.01}),n.addBinding(e,"modelSnappingResolution",{label:"自行车模型-分辨率",min:0,max:20,step:.01}),(l,o)=>(d(),v(r(R),U(i,{"window-size":""}),{default:m(()=>[o[1]||(o[1]=s("TresPerspectiveCamera",{position:[8,6,8],fov:45,near:1,far:1e3},null,-1)),a(r(x)),o[2]||(o[2]=s("TresAmbientLight",{intensity:.5},null,-1)),o[3]||(o[3]=s("TresDirectionalLight",{position:[7,10,-5.5],intensity:5},null,-1)),o[4]||(o[4]=s("TresMesh",{position:[-5,.5,5],"receive-shadow":"","cast-shadow":"",name:"cube"},[s("TresCylinderGeometry",{args:[1.5,1.5,2]}),s("TresMeshStandardMaterial",{color:16737826,roughness:0,metalness:0})],-1)),s("TresMesh",H,[o[0]||(o[0]=s("TresTorusKnotGeometry",{args:[1,.35,100,32]},null,-1)),a(N,{uSnappingResolution:e.uSnappingResolution},null,8,["uSnappingResolution"])]),(d(),v(g,null,{default:m(()=>[a(G,{uSnappingResolution:e.modelSnappingResolution},null,8,["uSnappingResolution"])]),_:1})),(d(),v(g,null,{default:m(()=>[a(r(h),{resolution:256,blur:1,background:""},{default:m(()=>[a(r(c),{intensity:2,form:"circle","rotation-x":Math.PI/2,position:[2*4-3*4/2,4,0],scale:[1,5,0]},null,8,["rotation-x"]),a(r(c),{intensity:2,form:"circle","rotation-x":Math.PI/2,position:[-12/2,4,0],scale:[1,5,0]},null,8,["rotation-x"]),a(r(c),{intensity:1,"rotation-y":-Math.PI/2,position:[-1,0,0],scale:[10,.2,1]},null,8,["rotation-y"]),a(r(c),{intensity:1,"rotation-y":-Math.PI/2,position:[1,0,0],scale:[10,.2,1]},null,8,["rotation-y"])]),_:1})]),_:1}))]),_:1},16))}});export{J as default};
