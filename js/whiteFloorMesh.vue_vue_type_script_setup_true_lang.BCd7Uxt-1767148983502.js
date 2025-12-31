import{importShared as t}from"./3d-tiles-renderer.DZNovkLO1767148983502.js";import{no as u}from"./index.DTe2qqjO1767148983502.js";const e=await t("three"),m=()=>`
       varying vec2 vUv;
			 	${e.ShaderChunk.common}
      	${e.ShaderChunk.bsdfs}
      	${e.ShaderChunk.shadowmap_pars_vertex}
       void main() {
					${e.ShaderChunk.beginnormal_vertex}
          ${e.ShaderChunk.defaultnormal_vertex}
          ${e.ShaderChunk.begin_vertex}
          ${e.ShaderChunk.project_vertex}
          ${e.ShaderChunk.worldpos_vertex}
          ${e.ShaderChunk.shadowmap_vertex}

           gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);    
           vUv = uv;
       }`,c=()=>`
	varying vec2 vUv;
	uniform sampler2D uTexture;
	uniform vec3 uShadowColor;
	uniform vec3 uColor;
	uniform float fEdge;
	// ShaderMaterial 下的 纹理参数重复无效 要在着色器中增加
	float repeatTime = 100.0;

	float smoothsteps(float t) {
			return t * t * (3.0 - 2.0 * t);
	}

	 ${e.ShaderChunk.common}
	 ${e.ShaderChunk.packing}
	 ${e.ShaderChunk.bsdfs}
	 ${e.ShaderChunk.lights_pars_begin}
	 ${e.ShaderChunk.shadowmap_pars_fragment}
	 ${e.ShaderChunk.shadowmask_pars_fragment}

	void main() {
			vec4 col = texture2D(uTexture, vUv * repeatTime);
			col.rgb = mix( uColor , col.rgb ,0.5);
			
			float alpha = 1.0;
			float d = length(vUv - vec2(0.5));
			if(d > 0.35) {
					alpha = 1.0 - smoothsteps( clamp( (d - 0.35) / (fEdge-0.2), 0.0, 1.0) );
			}

		 vec3 addShadow = mix( uShadowColor , col.rgb ,getShadowMask());

			gl_FragColor = vec4(addShadow, alpha);  
	}`,{defineComponent:p}=await t("vue"),{createElementVNode:i,normalizeProps:v,guardReactiveProps:f,openBlock:g,createElementBlock:C}=await t("vue"),w=["rotation-x"],_=["args"],a=await t("three"),{watch:l,ref:S}=await t("vue"),T=p({__name:"whiteFloorMesh",props:{size:{default:[20,20]},color:{default:"#990"},shadowColor:{default:"#999"},edge:{default:.35}},setup(d){const r=d,s=S(),{state:h}=u("./plugins/floor/image/whiteFloor.jpg"),n={uniforms:a.UniformsUtils.merge([a.UniformsLib.lights,{uColor:{value:new a.Color(r.color)},uShadowColor:{value:new a.Color(r.shadowColor)},fEdge:{value:r.edge},uTexture:{value:null}}]),side:a.DoubleSide,vertexShader:m(),fragmentShader:c(),lights:!0,transparent:!0};return l(h,o=>{o&&(o.wrapS=a.RepeatWrapping,o.wrapT=a.RepeatWrapping,o.repeat.set(6,3),s.value.material.uniforms.uTexture.value=o)}),l(()=>r.edge,o=>{n.uniforms.fEdge.value=o}),l(()=>r.color,o=>{n.uniforms.uColor.value=new a.Color(r.color)}),l(()=>r.shadowColor,o=>{n.uniforms.uShadowColor.value=new a.Color(r.shadowColor)}),(o,k)=>(g(),C("TresMesh",{ref_key:"tmRef",ref:s,"rotation-x":-Math.PI/2},[i("TresPlaneGeometry",{args:r.size},null,8,_),i("TresShaderMaterial",v(f(n)),null,16)],8,w))}});export{T as _sfc_main};
