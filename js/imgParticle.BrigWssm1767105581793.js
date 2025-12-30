import { importShared, Kk } from './index.BxB45aCK1767105581793.js';
import './reflectorDiffuse.vue_vue_type_script_setup_true_lang.BuW1EemC1767105581793.js';
import { _sfc_main as _sfc_main$2 } from './reflectorDUDV.vue_vue_type_script_setup_true_lang.Cce3m26z1767105581793.js';
import './reflectorShaderMesh.vue_vue_type_script_setup_true_lang.D0T9d0go1767105581793.js';
import './dynamicRotatingBase.vue_vue_type_script_setup_true_lang.B3Epdjc31767105581793.js';
import './whiteFloorMesh.vue_vue_type_script_setup_true_lang.B9UIV1AE1767105581793.js';
import './gridPlusCom.vue_vue_type_script_setup_true_lang.BIqyIrzr1767105581793.js';
import './videoFloor.vue_vue_type_script_setup_true_lang.BEyCiDvU1767105581793.js';
import './digitalGround.vue_vue_type_script_setup_true_lang.BPvRJNY41767105581793.js';
import './imgFloor.vue_vue_type_script_setup_true_lang.D-OHfrvs1767105581793.js';
import './reflectorRoundedBox.vue_vue_type_script_setup_true_lang.B0i-7O7p1767105581793.js';
import './particleBase.vue_vue_type_script_setup_true_lang.BTwaqkrr1767105581793.js';
import './rippleFloor.vue_vue_type_script_setup_true_lang.DU-KS3_f1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';
import { useTexture } from './customShaderMaterial.vue_vue_type_script_setup_true_lang.rDMIDGqx1767105581793.js';
import './index.vue_vue_type_script_setup_true_lang.D7-hpzmy1767105581793.js';

const {withAsyncContext:_withAsyncContext,defineComponent:_defineComponent$1} = await importShared('vue');

const {unref:_unref$1,createElementVNode:_createElementVNode$1,normalizeProps:_normalizeProps$1,guardReactiveProps:_guardReactiveProps$1,openBlock:_openBlock$1,createElementBlock:_createElementBlock} = await importShared('vue');

const _hoisted_1 = {
  position: [-8, 10, -2],
  scale: 0.02
};
const _hoisted_2 = ["position", "colorlist"];
const {watch} = await importShared('vue');

const THREE = await importShared('three');
const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "imgParticleMesh",
  props: {
    zPos: { default: 1 },
    useCustomColor: { default: false },
    customColor: { default: "#ff0000" }
  },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    const pTexture = ([__temp, __restore] = _withAsyncContext(() => useTexture("./logo.png")), __temp = await __temp, __restore(), __temp);
    const canvas = document.createElement("canvas");
    const w = pTexture.image.width;
    const h = pTexture.image.height;
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext("2d");
    ctx?.drawImage(pTexture.image, 0, 0);
    const data = ctx?.getImageData(0, 0, w, h).data;
    const info = [];
    const colorList = [];
    if (data) {
      for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
          const pixelIndex = (y * w + x) * 4;
          if (data[pixelIndex + 3] > 0) {
            const r = data[pixelIndex] / 255;
            const g = data[pixelIndex + 1] / 255;
            const b = data[pixelIndex + 2] / 255;
            const z = Math.random() * 100;
            info.push(x, -y, z);
            colorList.push(r, g, b);
          }
        }
      }
    }
    const positionArray = new Float32Array(info);
    const colorListArray = new Float32Array(colorList);
    const smConfig = {
      uniforms: {
        zPos: { value: props.zPos },
        useCustomColor: { value: props.useCustomColor },
        customColor: { value: new THREE.Color(props.customColor) }
      },
      vertexShader: `
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
		}`,
      fragmentShader: `
			varying vec3 vColor;
			uniform bool useCustomColor;
			uniform vec3 customColor;
			void main() {
			if(useCustomColor){
				gl_FragColor = vec4(customColor, 1.0);
			}else{
				gl_FragColor = vec4(vColor, 1.0);
			}
		}`,
      transparent: true,
      depthTest: false,
      blending: THREE.AdditiveBlending
    };
    watch(
      () => [props.zPos, props.useCustomColor, props.customColor],
      ([zPos, useCustomColor, customColor]) => {
        smConfig.uniforms.zPos.value = zPos;
        smConfig.uniforms.useCustomColor.value = useCustomColor;
        smConfig.uniforms.customColor.value.set(customColor);
      }
    );
    return (_ctx, _cache) => {
      return _openBlock$1(), _createElementBlock("TresPoints", _hoisted_1, [
        _createElementVNode$1("TresBufferGeometry", {
          position: [_unref$1(positionArray), 3],
          colorlist: [_unref$1(colorListArray), 3]
        }, null, 8, _hoisted_2),
        _createElementVNode$1("TresShaderMaterial", _normalizeProps$1(_guardReactiveProps$1(smConfig)), null, 16)
      ]);
    };
  }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,createVNode:_createVNode,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,Suspense:_Suspense,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock,mergeProps:_mergeProps,resolveComponent:_resolveComponent} = await importShared('vue');

const {reactive} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "imgParticle",
  setup(__props) {
    const state = {
      clearColor: "#050505",
      antialias: false
    };
    const reflectorState = {
      reflectivity: 0.8,
      showGridHelper: false,
      scale: 6
    };
    const pcssConfig = reactive({
      zPos: 1,
      useCustomColor: false,
      customColor: "#ff0000"
    });
    const paneControl = new Pane({ title: "参数" });
    paneControl.addBinding(pcssConfig, "zPos", {
      label: "厚度",
      min: 0.5,
      max: 10,
      step: 0.5
    });
    paneControl.addBinding(pcssConfig, "useCustomColor", {
      label: "使用自定义颜色"
    });
    paneControl.addBinding(pcssConfig, "customColor", {
      label: "自定义颜色"
    });
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createBlock(_component_TresCanvas, _mergeProps(state, { "window-size": "" }), {
        default: _withCtx(() => [
          _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", {
            position: [0, 3, 38],
            fov: 45,
            near: 0.1,
            far: 1e3
          }, null, -1)),
          _createVNode(_unref(Kk)),
          _cache[1] || (_cache[1] = _createElementVNode("TresAmbientLight", { intensity: 0.5 }, null, -1)),
          (_openBlock(), _createBlock(_Suspense, null, {
            default: _withCtx(() => [
              _createVNode(_sfc_main$1, _normalizeProps(_guardReactiveProps(pcssConfig)), null, 16)
            ]),
            _: 1
          })),
          _createVNode(_unref(_sfc_main$2), _mergeProps({ position: [0, -6, 0] }, reflectorState), null, 16)
        ]),
        _: 1
      }, 16);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=imgParticle.BrigWssm1767105581793.js.map
