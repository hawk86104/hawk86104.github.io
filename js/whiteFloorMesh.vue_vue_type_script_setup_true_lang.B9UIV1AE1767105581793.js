import { importShared, no } from './index.BxB45aCK1767105581793.js';

/*
 * @Description: 
 * @Version: 1.668
 * @Autor: 地虎降天龙
 * @Date: 2024-01-25 15:17:06
 * @LastEditors: 地虎降天龙
 * @LastEditTime: 2024-01-25 16:06:29
 */
const THREE$1 = await importShared('three');


const getVertexShader = () => {
	return `
       varying vec2 vUv;
			 	${THREE$1.ShaderChunk["common"]}
      	${THREE$1.ShaderChunk["bsdfs"]}
      	${THREE$1.ShaderChunk["shadowmap_pars_vertex"]}
       void main() {
					${THREE$1.ShaderChunk['beginnormal_vertex']}
          ${THREE$1.ShaderChunk['defaultnormal_vertex']}
          ${THREE$1.ShaderChunk["begin_vertex"]}
          ${THREE$1.ShaderChunk["project_vertex"]}
          ${THREE$1.ShaderChunk["worldpos_vertex"]}
          ${THREE$1.ShaderChunk["shadowmap_vertex"]}

           gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);    
           vUv = uv;
       }`
};

const getFragmentShader = () => {
	return `
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

	 ${THREE$1.ShaderChunk["common"]}
	 ${THREE$1.ShaderChunk["packing"]}
	 ${THREE$1.ShaderChunk["bsdfs"]}
	 ${THREE$1.ShaderChunk["lights_pars_begin"]}
	 ${THREE$1.ShaderChunk["shadowmap_pars_fragment"]}
	 ${THREE$1.ShaderChunk["shadowmask_pars_fragment"]}

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
	}`
};

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,openBlock:_openBlock,createElementBlock:_createElementBlock} = await importShared('vue');

const _hoisted_1 = ["rotation-x"];
const _hoisted_2 = ["args"];
const THREE = await importShared('three');

const {watch,ref} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "whiteFloorMesh",
  props: {
    size: { default: [20, 20] },
    color: { default: "#990" },
    shadowColor: { default: "#999" },
    edge: { default: 0.35 }
  },
  setup(__props) {
    const props = __props;
    const tmRef = ref();
    const { state: pTexture } = no("./plugins/floor/image/whiteFloor.jpg");
    const tsMaterial = {
      uniforms: THREE.UniformsUtils.merge([
        THREE.UniformsLib["lights"],
        {
          uColor: { value: new THREE.Color(props.color) },
          uShadowColor: { value: new THREE.Color(props.shadowColor) },
          fEdge: { value: props.edge },
          uTexture: { value: null }
        }
      ]),
      side: THREE.DoubleSide,
      vertexShader: getVertexShader(),
      fragmentShader: getFragmentShader(),
      lights: true,
      transparent: true
    };
    watch(
      pTexture,
      (texture) => {
        if (texture) {
          texture.wrapS = THREE.RepeatWrapping;
          texture.wrapT = THREE.RepeatWrapping;
          texture.repeat.set(6, 3);
          tmRef.value.material.uniforms.uTexture.value = texture;
        }
      }
    );
    watch(
      () => props.edge,
      (newVal) => {
        tsMaterial.uniforms.fEdge.value = newVal;
      }
    );
    watch(
      () => props.color,
      (newVal) => {
        tsMaterial.uniforms.uColor.value = new THREE.Color(props.color);
      }
    );
    watch(
      () => props.shadowColor,
      (newVal) => {
        tsMaterial.uniforms.uShadowColor.value = new THREE.Color(props.shadowColor);
      }
    );
    return (_ctx, _cache) => {
      return _openBlock(), _createElementBlock("TresMesh", {
        ref_key: "tmRef",
        ref: tmRef,
        "rotation-x": -Math.PI / 2
      }, [
        _createElementVNode("TresPlaneGeometry", {
          args: props.size
        }, null, 8, _hoisted_2),
        _createElementVNode("TresShaderMaterial", _normalizeProps(_guardReactiveProps(tsMaterial)), null, 16)
      ], 8, _hoisted_1);
    };
  }
});

export { _sfc_main };
//# sourceMappingURL=whiteFloorMesh.vue_vue_type_script_setup_true_lang.B9UIV1AE1767105581793.js.map
