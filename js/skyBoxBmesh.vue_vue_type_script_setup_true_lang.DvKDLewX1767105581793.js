import { importShared } from './index.BxB45aCK1767105581793.js';
import { loadHDR } from './utils.BRv1nFaO1767105581793.js';

const {withAsyncContext:_withAsyncContext,defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,openBlock:_openBlock,createElementBlock:_createElementBlock} = await importShared('vue');

const _hoisted_1 = ["args"];
const THREE = await importShared('three');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "skyBoxBmesh",
  props: {
    texture: {},
    size: { default: 1e3 }
  },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    const pTexture = ([__temp, __restore] = _withAsyncContext(() => loadHDR(props.texture)), __temp = await __temp, __restore(), __temp);
    pTexture.wrapS = pTexture.wrapT = THREE.ClampToEdgeWrapping;
    pTexture.generateMipmaps = false;
    pTexture.magFilter = THREE.LinearFilter;
    pTexture.minFilter = THREE.LinearFilter;
    const tsMaterial = {
      uniforms: {
        uSkybox: { type: "t", value: pTexture }
      },
      side: THREE.BackSide,
      vertexShader: `
		varying vec3 vFragPos;

		void main() {
				vFragPos = position.xyz;
				vec4 viewSpace = vec4(mat3(modelViewMatrix) * position, 0.0);
				viewSpace.w = 1.0;
				gl_Position = projectionMatrix * viewSpace;    
		}`,
      fragmentShader: `
		uniform sampler2D uSkybox;
		varying vec3 vFragPos;
		const float PI = 3.14159265359;
		void main() {
				vec3 dir = normalize(vFragPos);
				float v = (asin(dir.y) + PI * 0.5) / (PI); 
				float u = (atan(dir.x, dir.z) + PI) / (PI * 2.0);
				gl_FragColor = texture2D(uSkybox, vec2(u, v));
		}`,
      depthWrite: true
    };
    return (_ctx, _cache) => {
      return _openBlock(), _createElementBlock("TresMesh", null, [
        _createElementVNode("TresBoxGeometry", {
          args: [props.size, props.size, props.size]
        }, null, 8, _hoisted_1),
        _createElementVNode("TresShaderMaterial", _normalizeProps(_guardReactiveProps(tsMaterial)), null, 16)
      ]);
    };
  }
});

export { _sfc_main };
//# sourceMappingURL=skyBoxBmesh.vue_vue_type_script_setup_true_lang.DvKDLewX1767105581793.js.map
