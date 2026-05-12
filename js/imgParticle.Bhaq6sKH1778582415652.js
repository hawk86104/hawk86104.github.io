import{importShared as n}from"./3d-tiles-renderer.Croa2fbg1778582415652.js";import{OrbitControls_default as M}from"./index.H-N8cTVp1778582415652.js";import"./reflectorDiffuse.vue_vue_type_script_setup_true_lang.Cxcu5ipO1778582415652.js";import{_sfc_main as N}from"./reflectorDUDV.vue_vue_type_script_setup_true_lang.BC1awNfJ1778582415652.js";import"./reflectorShaderMesh.vue_vue_type_script_setup_true_lang.CpsloHOz1778582415652.js";import"./dynamicRotatingBase.vue_vue_type_script_setup_true_lang.fdaKn34l1778582415652.js";import"./whiteFloorMesh.vue_vue_type_script_setup_true_lang.DNu-sAo-1778582415652.js";import"./gridPlusCom.vue_vue_type_script_setup_true_lang.CqhuZmWd1778582415652.js";import"./videoFloor.vue_vue_type_script_setup_true_lang.BySqjG6K1778582415652.js";import"./digitalGround.vue_vue_type_script_setup_true_lang.Dug-vPOz1778582415652.js";import"./imgFloor.vue_vue_type_script_setup_true_lang.C61xejWs1778582415652.js";import"./reflectorRoundedBox.vue_vue_type_script_setup_true_lang.Drw3Ihwc1778582415652.js";import"./particleBase.vue_vue_type_script_setup_true_lang.DkHFYJ5E1778582415652.js";import"./rippleFloor.vue_vue_type_script_setup_true_lang.6vBp7XGS1778582415652.js";import{Pane as V}from"./tweakpane.BQRZXf8M1778582415652.js";import{useTexture as R}from"./index.vue_vue_type_script_setup_true_lang.B8r7oxFY1778582415652.js";import"./index.vue_vue_type_script_setup_true_lang.dHWZcKv21778582415652.js";const{withAsyncContext:F,defineComponent:I}=await n("vue"),{unref:g,createElementVNode:P,normalizeProps:L,guardReactiveProps:G,openBlock:H,createElementBlock:j}=await n("vue"),D={position:[-8,10,-2],scale:.02},O=["position","colorlist"],{watch:q}=await n("vue"),w=await n("three"),J=I({__name:"imgParticleMesh",props:{zPos:{default:1},useCustomColor:{default:!1},customColor:{default:"#ff0000"}},async setup(f){let i,m;const o=f,t=([i,m]=F(()=>R("./logo.png")),i=await i,m(),i),u=document.createElement("canvas"),e=t.image.width,l=t.image.height;u.width=e,u.height=l;const C=u.getContext("2d");C?.drawImage(t.image,0,0);const c=C?.getImageData(0,0,e,l).data,_=[],v=[];if(c)for(let r=0;r<l;r++)for(let s=0;s<e;s++){const a=(r*e+s)*4;if(c[a+3]>0){const k=c[a]/255,A=c[a+1]/255,S=c[a+2]/255,$=Math.random()*100;_.push(s,-r,$),v.push(k,A,S)}}const b=new Float32Array(_),E=new Float32Array(v),p={uniforms:{zPos:{value:o.zPos},useCustomColor:{value:o.useCustomColor},customColor:{value:new w.Color(o.customColor)}},vertexShader:`
		attribute vec3 colorlist;
		varying vec3 vColor;
		uniform float zPos;
		void main() {
			vec3 pos = position;
			pos.z *= zPos;
			vColor = colorlist;
			vec4 modelPosition = modelMatrix * vec4(pos, 1.0);
			vec4 viewPosition = viewMatrix * modelPosition;
			gl_PointSize = 0.001 * (1.0 - viewPosition.z);
			gl_Position = projectionMatrix * viewPosition;
		}`,fragmentShader:`
			varying vec3 vColor;
			uniform bool useCustomColor;
			uniform vec3 customColor;
			void main() {
			if(useCustomColor){
				gl_FragColor = vec4(customColor, 1.0);
			}else{
				gl_FragColor = vec4(vColor, 1.0);
			}
		}`,transparent:!0,depthTest:!1,blending:w.AdditiveBlending};return q(()=>[o.zPos,o.useCustomColor,o.customColor],([r,s,a])=>{p.uniforms.zPos.value=r,p.uniforms.useCustomColor.value=s,p.uniforms.customColor.value.set(a)}),(r,s)=>(H(),j("TresPoints",D,[P("TresBufferGeometry",{position:[g(b),3],colorlist:[g(E),3]},null,8,O),P("TresShaderMaterial",L(G(p)),null,16)]))}}),{defineComponent:K}=await n("vue"),{createElementVNode:h,unref:x,createVNode:d,normalizeProps:Q,guardReactiveProps:U,Suspense:W,withCtx:z,openBlock:y,createBlock:B,mergeProps:T,resolveComponent:X}=await n("vue"),{reactive:Y}=await n("vue"),vo=K({__name:"imgParticle",setup(f){const i={clearColor:"#050505",antialias:!1},m={reflectivity:.8,showGridHelper:!1,scale:6},o=Y({zPos:1,useCustomColor:!1,customColor:"#ff0000"}),t=new V({title:"参数"});return t.addBinding(o,"zPos",{label:"厚度",min:.5,max:10,step:.5}),t.addBinding(o,"useCustomColor",{label:"使用自定义颜色"}),t.addBinding(o,"customColor",{label:"自定义颜色"}),(u,e)=>{const l=X("TresCanvas");return y(),B(l,T(i,{"window-size":""}),{default:z(()=>[e[0]||(e[0]=h("TresPerspectiveCamera",{position:[0,3,38],fov:45,near:.1,far:1e3},null,-1)),d(x(M)),e[1]||(e[1]=h("TresAmbientLight",{intensity:.5},null,-1)),(y(),B(W,null,{default:z(()=>[d(J,Q(U(o)),null,16)]),_:1})),d(x(N),T({position:[0,-6,0]},m),null,16)]),_:1},16)}}});export{vo as default};
