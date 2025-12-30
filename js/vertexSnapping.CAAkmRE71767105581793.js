import { importShared, NA, ol, Kk } from './index.BxB45aCK1767105581793.js';
import { _sfc_main as _sfc_main$3, _sfc_main$1 as _sfc_main$4 } from './customShaderMaterial.vue_vue_type_script_setup_true_lang.rDMIDGqx1767105581793.js';
import './index.vue_vue_type_script_setup_true_lang.D7-hpzmy1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';

const {defineComponent:_defineComponent$2} = await importShared('vue');

const {openBlock:_openBlock$2,createElementBlock:_createElementBlock$1} = await importShared('vue');

const _hoisted_1$2 = ["object"];
const THREE = await importShared('three');

const {toRef,watch: watch$1} = await importShared('vue');

const _sfc_main$2 = /* @__PURE__ */ _defineComponent$2({
  __name: "com",
  props: {
    uSnappingResolution: { default: 6 },
    srcMaterial: { default: () => {
      return new THREE.MeshStandardMaterial({
        color: 65280,
        roughness: 0.5,
        metalness: 0.5
      });
    } }
  },
  setup(__props) {
    const props = __props;
    const snappingResolutionRef = toRef(props.uSnappingResolution);
    props.srcMaterial.onBeforeCompile = (material) => {
      material.uniforms.uSnappingResolution = snappingResolutionRef;
      material.vertexShader = material.vertexShader.replace(
        "#include <common>",
        `
			#include <common>
			uniform float uSnappingResolution;
	`
      );
      material.vertexShader = material.vertexShader.replace(
        "#include <project_vertex>",
        `
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
	`
      );
    };
    watch$1(
      () => props.uSnappingResolution,
      (newValue) => {
        snappingResolutionRef.value = newValue;
      }
    );
    return (_ctx, _cache) => {
      return _openBlock$2(), _createElementBlock$1("primitive", { object: _ctx.srcMaterial }, null, 8, _hoisted_1$2);
    };
  }
});

function transToVertexSnappingMaterial(curMaterial, snappingResolution = 6) {
  const uSnappingResolution = { value: snappingResolution };
  curMaterial.onBeforeCompile = (material) => {
    material.uniforms.uSnappingResolution = uSnappingResolution;
    material.vertexShader = material.vertexShader.replace(
      "#include <common>",
      `
				#include <common>
				uniform float uSnappingResolution;
		`
    );
    material.vertexShader = material.vertexShader.replace(
      "#include <project_vertex>",
      `
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
		`
    );
  };
  return uSnappingResolution;
}

const {defineComponent:_defineComponent$1} = await importShared('vue');

const {unref:_unref$1,openBlock:_openBlock$1,createElementBlock:_createElementBlock,createCommentVNode:_createCommentVNode} = await importShared('vue');

const _hoisted_1$1 = ["object"];
const {watch} = await importShared('vue');

const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "model",
  props: {
    uSnappingResolution: { default: 6 }
  },
  setup(__props) {
    const props = __props;
    const { state: pState, materials } = NA(
      ("https://opensource.cdn.icegl.cn") + "/model/industry4/MRBike.glb",
      {
        draco: true,
        decoderPath: "./draco/"
      }
    );
    const resolutionList = [];
    watch(
      () => pState.value,
      (state) => {
        if (!state?.scene) return;
        Object.values(materials.value).forEach((material) => {
          resolutionList.push(transToVertexSnappingMaterial(material, props.uSnappingResolution));
        });
      }
    );
    watch(
      () => props.uSnappingResolution,
      (newValue) => {
        resolutionList.forEach((item) => {
          item.value = newValue;
        });
      }
    );
    return (_ctx, _cache) => {
      return _unref$1(pState) ? (_openBlock$1(), _createElementBlock("primitive", {
        key: 0,
        object: _unref$1(pState)?.scene,
        scale: 5,
        position: [0, -2, 0]
      }, null, 8, _hoisted_1$1)) : _createCommentVNode("", true);
    };
  }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,createVNode:_createVNode,Suspense:_Suspense,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock,mergeProps:_mergeProps} = await importShared('vue');

const _hoisted_1 = {
  position: [5, 0.9, -5],
  name: "torus"
};
const {ACESFilmicToneMapping} = await importShared('three');

const {reactive} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "vertexSnapping",
  setup(__props) {
    const state = reactive({
      alpha: true,
      toneMapping: ACESFilmicToneMapping,
      windowSize: true,
      clearColor: "#000000"
    });
    const vertexSnappingState = reactive({
      uSnappingResolution: 3,
      modelSnappingResolution: 6
    });
    const paneControl = new Pane();
    paneControl.addBinding(vertexSnappingState, "uSnappingResolution", {
      label: "圆环扭结-分辨率",
      min: 0,
      max: 20,
      step: 0.01
    });
    paneControl.addBinding(vertexSnappingState, "modelSnappingResolution", {
      label: "自行车模型-分辨率",
      min: 0,
      max: 20,
      step: 0.01
    });
    return (_ctx, _cache) => {
      return _openBlock(), _createBlock(_unref(ol), _mergeProps(state, { "window-size": "" }), {
        default: _withCtx(() => [
          _cache[1] || (_cache[1] = _createElementVNode("TresPerspectiveCamera", {
            position: [8, 6, 8],
            fov: 45,
            near: 1,
            far: 1e3
          }, null, -1)),
          _createVNode(_unref(Kk)),
          _cache[2] || (_cache[2] = _createElementVNode("TresAmbientLight", { intensity: 0.5 }, null, -1)),
          _cache[3] || (_cache[3] = _createElementVNode("TresDirectionalLight", {
            position: [7, 10, -5.5],
            intensity: 5
          }, null, -1)),
          _cache[4] || (_cache[4] = _createElementVNode("TresMesh", {
            position: [-5, 0.5, 5],
            "receive-shadow": "",
            "cast-shadow": "",
            name: "cube"
          }, [
            _createElementVNode("TresCylinderGeometry", { args: [1.5, 1.5, 2] }),
            _createElementVNode("TresMeshStandardMaterial", {
              color: 16737826,
              roughness: 0,
              metalness: 0
            })
          ], -1)),
          _createElementVNode("TresMesh", _hoisted_1, [
            _cache[0] || (_cache[0] = _createElementVNode("TresTorusKnotGeometry", { args: [1, 0.35, 100, 32] }, null, -1)),
            _createVNode(_sfc_main$2, {
              uSnappingResolution: vertexSnappingState.uSnappingResolution
            }, null, 8, ["uSnappingResolution"])
          ]),
          (_openBlock(), _createBlock(_Suspense, null, {
            default: _withCtx(() => [
              _createVNode(_sfc_main$1, {
                uSnappingResolution: vertexSnappingState.modelSnappingResolution
              }, null, 8, ["uSnappingResolution"])
            ]),
            _: 1
          })),
          (_openBlock(), _createBlock(_Suspense, null, {
            default: _withCtx(() => [
              _createVNode(_unref(_sfc_main$3), {
                resolution: 256,
                blur: 1,
                background: ""
              }, {
                default: _withCtx(() => [
                  _createVNode(_unref(_sfc_main$4), {
                    intensity: 2,
                    form: "circle",
                    "rotation-x": Math.PI / 2,
                    position: [2 * 4 - 3 * 4 / 2, 4, 0],
                    scale: [1, 5, 0]
                  }, null, 8, ["rotation-x"]),
                  _createVNode(_unref(_sfc_main$4), {
                    intensity: 2,
                    form: "circle",
                    "rotation-x": Math.PI / 2,
                    position: [-12 / 2, 4, 0],
                    scale: [1, 5, 0]
                  }, null, 8, ["rotation-x"]),
                  _createVNode(_unref(_sfc_main$4), {
                    intensity: 1,
                    "rotation-y": -Math.PI / 2,
                    position: [-1, 0, 0],
                    scale: [10, 0.2, 1]
                  }, null, 8, ["rotation-y"]),
                  _createVNode(_unref(_sfc_main$4), {
                    intensity: 1,
                    "rotation-y": -Math.PI / 2,
                    position: [1, 0, 0],
                    scale: [10, 0.2, 1]
                  }, null, 8, ["rotation-y"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }))
        ]),
        _: 1
      }, 16);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=vertexSnapping.CAAkmRE71767105581793.js.map
