import{importShared as o}from"./3d-tiles-renderer.DZNovkLO1767148983502.js";import{useTexture as l}from"./customShaderMaterial.vue_vue_type_script_setup_true_lang.B7dQ_CiZ1767148983502.js";import"./index.vue_vue_type_script_setup_true_lang.CjsHShHS1767148983502.js";const{withAsyncContext:p,defineComponent:m}=await o("vue"),{createElementVNode:n,normalizeProps:u,guardReactiveProps:v,openBlock:d,createElementBlock:_}=await o("vue"),x=["args"],a=await o("three"),h=m({__name:"skyBoxAmesh",props:{texture:{},size:{default:1e3}},async setup(s){let t,i;const r=s,e=([t,i]=p(()=>l(r.texture)),t=await t,i(),t);e.wrapS=e.wrapT=a.ClampToEdgeWrapping,e.generateMipmaps=!1,e.magFilter=a.LinearFilter,e.minFilter=a.LinearFilter;const c={uniforms:{uSkybox:{type:"t",value:e}},side:a.BackSide,vertexShader:`
		varying vec3 vFragPos;

		void main() {
				vFragPos = position.xyz;
				vec4 viewSpace = vec4(mat3(modelViewMatrix) * position, 0.0);
				viewSpace.w = 1.0;
				gl_Position = projectionMatrix * viewSpace;    
		}`,fragmentShader:`
		uniform sampler2D uSkybox;
		varying vec3 vFragPos;
		const float PI = 3.14159265359;
		void main() {
				vec3 dir = normalize(vFragPos);
				float v = (asin(dir.y) + PI * 0.5) / (PI); 
				float u = (atan(dir.x, dir.z) + PI) / (PI * 2.0);
				gl_FragColor = texture2D(uSkybox, vec2(u, v));
		}`,depthWrite:!1};return(g,f)=>(d(),_("TresMesh",null,[n("TresBoxGeometry",{args:[r.size,r.size,r.size]},null,8,x),n("TresShaderMaterial",u(v(c)),null,16)]))}});export{h as _sfc_main};
