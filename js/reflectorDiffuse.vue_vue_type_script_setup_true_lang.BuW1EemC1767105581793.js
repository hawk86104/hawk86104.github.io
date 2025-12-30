import { importShared, rz } from './index.BxB45aCK1767105581793.js';
import { Reflector } from './OimoPhysicsController.JGy48uNn1767105581793.js';

const makeVertexShader = (shader) => {
	shader.vertexShader = shader.vertexShader.replace(
		'void main() {',
		/* glsl */ `
		uniform mat4 textureMatrix;
		out vec4 vCoord;
		out vec3 vToEye;

		void main() {
		`
	);

	shader.vertexShader = shader.vertexShader.replace(
		'#include <project_vertex>',
		/* glsl */ `
		#include <project_vertex>

		vCoord = textureMatrix * vec4(transformed, 1.0);
		vToEye = cameraPosition - (modelMatrix * vec4(transformed, 1.0)).xyz;
		`
	);
};

const makeFragmentShader = (shader) => {
	shader.fragmentShader = shader.fragmentShader.replace(
		'void main() {',
		/* glsl */ `
		uniform sampler2D reflectMap;
		uniform float mirror;
		uniform float mixStrength;
		in vec4 vCoord;
		in vec3 vToEye;

		void main() {
		`
	);

	shader.fragmentShader = shader.fragmentShader.replace(
		'#include <emissivemap_fragment>',
		/* glsl */ `
		#include <emissivemap_fragment>

		vec4 normalColor = texture2D(normalMap, vNormalMapUv * normalScale);
		vec3 reflectNormal = normalize(vec3(normalColor.r * 2.0 - 1.0, normalColor.b, normalColor.g * 2.0 - 1.0));
		vec3 reflectCoord = vCoord.xyz / vCoord.w;
		vec2 reflectUv = reflectCoord.xy + reflectCoord.z * reflectNormal.xz * 0.05;
		vec4 reflectColor = texture2D(reflectMap, reflectUv);

		// Fresnel term
		vec3 toEye = normalize(vToEye);
		float theta = max(dot(toEye, normal), 0.0);
		float reflectance = pow((1.0 - theta), 5.0);

		reflectColor = mix(vec4(0), reflectColor, reflectance);

		diffuseColor.rgb = diffuseColor.rgb * ((1.0 - min(1.0, mirror)) + reflectColor.rgb * mixStrength);
		`
	);
};

const {withAsyncContext:_withAsyncContext,defineComponent:_defineComponent} = await importShared('vue');

const {unref:_unref,createElementVNode:_createElementVNode,mergeProps:_mergeProps,openBlock:_openBlock,createElementBlock:_createElementBlock,createCommentVNode:_createCommentVNode} = await importShared('vue');

const _hoisted_1 = { key: 0 };
const _hoisted_2 = ["rotation-x"];
const _hoisted_3 = ["object", "visible"];
const {Vector2,RepeatWrapping,Color,GridHelper} = await importShared('three');
const {watchEffect,ref,watch,nextTick} = await importShared('vue');

const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "reflectorDiffuse",
  props: {
    mirror: { default: 1 },
    mixStrength: { default: 10 },
    showGridHelper: { type: Boolean, default: true },
    color: { default: "#ffffff" }
  },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    const gridHelp = new GridHelper(9.5, 10);
    const tpgRef = ref();
    const tmRef = ref();
    const tmsmRef = ref();
    const reflector = new Reflector();
    const uniforms = {
      mirror: { value: props.mirror },
      mixStrength: { value: props.mixStrength }
    };
    const { textures: pTexture, isLoading } = ([__temp, __restore] = _withAsyncContext(() => rz([
      "./plugins/floor/image/polished_concrete_basecolor.jpg",
      "./plugins/floor/image/polished_concrete_normal.jpg",
      "./plugins/floor/image/polished_concrete_orm.jpg"
    ])), __temp = await __temp, __restore(), __temp);
    let tmsMaterialConfig = {};
    watch([isLoading, pTexture], ([isLoading2, pTexture2]) => {
      if (pTexture2 && !isLoading2) {
        for (var i = 0; i < 3; i++) {
          pTexture2[i].wrapS = RepeatWrapping;
          pTexture2[i].wrapT = RepeatWrapping;
          pTexture2[i].repeat.set(16, 16);
        }
        tmsMaterialConfig = {
          color: new Color("#444"),
          metalness: 1,
          roughness: 1,
          map: pTexture2[0],
          metalnessMap: pTexture2[2],
          roughnessMap: pTexture2[2],
          aoMap: pTexture2[2],
          aoMapIntensity: 1,
          normalMap: pTexture2[1],
          normalScale: new Vector2(3, 3)
        };
        nextTick(() => {
          tpgRef.value.attributes.uv1 = tpgRef.value.attributes.uv;
          tmsmRef.value.aoMap.channel = 1;
          tmsmRef.value.onBeforeCompile = makeOnBeforeCompile;
          tmRef.value.add(reflector);
          tmRef.value.onBeforeRender = (rendererSelf, sceneSelf, cameraSelf) => {
            reflector.update(rendererSelf, sceneSelf, cameraSelf);
          };
        });
      }
    });
    const makeOnBeforeCompile = (shader) => {
      shader.uniforms.reflectMap = reflector.renderTargetUniform;
      shader.uniforms.textureMatrix = reflector.textureMatrixUniform;
      shader.uniforms = Object.assign(shader.uniforms, uniforms);
      makeVertexShader(shader);
      makeFragmentShader(shader);
    };
    watchEffect(() => {
      if (props.color) {
        if (tmsmRef.value) {
          tmsmRef.value.color = new Color(props.color);
        }
      }
    });
    return (_ctx, _cache) => {
      return !_unref(isLoading) ? (_openBlock(), _createElementBlock("TresGroup", _hoisted_1, [
        _createElementVNode("TresMesh", {
          ref_key: "tmRef",
          ref: tmRef,
          "rotation-x": -Math.PI / 2,
          "position-y": -0.1
        }, [
          _createElementVNode("TresPlaneGeometry", {
            ref_key: "tpgRef",
            ref: tpgRef,
            args: [10, 10]
          }, null, 512),
          _createElementVNode("TresMeshStandardMaterial", _mergeProps({
            ref_key: "tmsmRef",
            ref: tmsmRef
          }, _unref(tmsMaterialConfig)), null, 16)
        ], 8, _hoisted_2),
        _createElementVNode("primitive", {
          object: _unref(gridHelp),
          visible: _ctx.showGridHelper
        }, null, 8, _hoisted_3)
      ])) : _createCommentVNode("", true);
    };
  }
});

export { _sfc_main };
//# sourceMappingURL=reflectorDiffuse.vue_vue_type_script_setup_true_lang.BuW1EemC1767105581793.js.map
