import { importShared, Kk } from './index.BxB45aCK1767105581793.js';
import './staticWater.vue_vue_type_script_setup_true_lang.4m35QlAa1767105581793.js';
import './iceFloor.vue_vue_type_script_setup_true_lang.Bffk1fiK1767105581793.js';
import { _sfc_main as _sfc_main$1 } from './gerstnerWater.vue_vue_type_script_setup_true_lang.CK3FxufO1767105581793.js';
import './customWaterMesh.vue_vue_type_script_setup_true_lang.DP0YOBvn1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';
import { _sfc_main$1 as _sfc_main$2 } from './index.EB9aFE0Q1767105581793.js';
import './skyBoxAmesh.vue_vue_type_script_setup_true_lang.Cd3eKmZW1767105581793.js';
import './skyBoxBmesh.vue_vue_type_script_setup_true_lang.DvKDLewX1767105581793.js';
import './skyBoxDmesh.vue_vue_type_script_setup_true_lang.DRUMhbde1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,createVNode:_createVNode,mergeProps:_mergeProps,resolveComponent:_resolveComponent,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock} = await importShared('vue');
const {reactive,ref} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "gerstnerWaterPage",
  setup(__props) {
    const gl = {
      clearColor: "#222",
      shadows: true,
      alpha: false
    };
    const gwState = reactive({
      size: 1,
      wireframe: false,
      waterColor: "#001e0f",
      waves: {
        A: {
          direction: 0,
          steepness: 0.4,
          wavelength: 60
        },
        B: {
          direction: 30,
          steepness: 0.4,
          wavelength: 30
        },
        C: {
          direction: 60,
          steepness: 0.4,
          wavelength: 15
        }
      }
    });
    const meshUUIDList = ref([
      { uuid: "dsads-bvffdssa-dsaewq-ecxs-dsa", floatScale: 0.9, yOffsetScale: 0.8 },
      { uuid: "gsgads-sgffdssa-lsaewq-ycxs-jdsad", floatScale: 0.9, yOffsetScale: 0.8 },
      { uuid: "agsgads-sgffdssa-lsaewq-ycxs-jdsad", floatScale: 0.2, yOffsetScale: 0.5 }
    ]);
    setTimeout(() => {
      window.globalTvtFun.gerstnerWater_updateMeshList();
    }, 500);
    const paneControl = new Pane({
      title: "参数",
      expanded: true
    });
    paneControl.addBinding(gwState, "size", {
      label: "水变化尺度",
      min: 0.1,
      max: 10,
      step: 0.1
    });
    paneControl.addBinding(gwState, "wireframe", {
      label: "线框模式"
    });
    paneControl.addBinding(gwState, "waterColor", {
      label: "水颜色"
    });
    paneControl.addBinding(meshUUIDList.value[2], "floatScale", {
      label: "最大物体的浮动比例",
      min: 0,
      max: 2,
      step: 0.01
    });
    paneControl.addBinding(meshUUIDList.value[2], "yOffsetScale", {
      label: "最大物体的上下比例",
      min: 0,
      max: 2,
      step: 0.01
    });
    const adf = paneControl.addFolder({ title: "波浪A" });
    adf.addBinding(gwState.waves.A, "direction", {
      label: "方向",
      min: 0,
      max: 360,
      step: 1
    });
    adf.addBinding(gwState.waves.A, "steepness", {
      label: "陡峭度",
      min: 0,
      max: 1,
      step: 0.01
    });
    adf.addBinding(gwState.waves.A, "wavelength", {
      label: "波长",
      min: 1,
      max: 100,
      step: 1
    });
    const bdf = paneControl.addFolder({ title: "波浪B" });
    bdf.addBinding(gwState.waves.B, "direction", {
      label: "方向",
      min: 0,
      max: 360,
      step: 1
    });
    bdf.addBinding(gwState.waves.B, "steepness", {
      label: "陡峭度",
      min: 0,
      max: 1,
      step: 0.01
    });
    bdf.addBinding(gwState.waves.B, "wavelength", {
      label: "波长",
      min: 1,
      max: 100,
      step: 1
    });
    const cdf = paneControl.addFolder({ title: "波浪C" });
    cdf.addBinding(gwState.waves.C, "direction", {
      label: "方向",
      min: 0,
      max: 360,
      step: 1
    });
    cdf.addBinding(gwState.waves.C, "steepness", {
      label: "陡峭度",
      min: 0,
      max: 1,
      step: 0.01
    });
    cdf.addBinding(gwState.waves.C, "wavelength", {
      label: "波长",
      min: 1,
      max: 100,
      step: 1
    });
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createBlock(_component_TresCanvas, _mergeProps(gl, { "window-size": "" }), {
        default: _withCtx(() => [
          _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", {
            position: [30, 30, 100],
            far: 2e3,
            near: 1
          }, null, -1)),
          _createVNode(_unref(Kk)),
          _createVNode(_unref(_sfc_main$1), _mergeProps({ scale: [2, 1, 2] }, gwState, { meshUUIDList: meshUUIDList.value }), null, 16, ["meshUUIDList"]),
          _createVNode(_unref(_sfc_main$2), {
            on: true,
            environmentIntensity: 1
          }),
          _cache[1] || (_cache[1] = _createElementVNode("TresMesh", { uuid: "dsads-bvffdssa-dsaewq-ecxs-dsa" }, [
            _createElementVNode("TresBoxGeometry", { args: [10, 10, 10] }),
            _createElementVNode("TresMeshNormalMaterial")
          ], -1)),
          _cache[2] || (_cache[2] = _createElementVNode("TresMesh", {
            uuid: "gsgads-sgffdssa-lsaewq-ycxs-jdsad",
            position: [-20, -3, -20]
          }, [
            _createElementVNode("TresBoxGeometry", { args: [8, 8, 8] }),
            _createElementVNode("TresMeshNormalMaterial")
          ], -1)),
          _cache[3] || (_cache[3] = _createElementVNode("TresMesh", {
            uuid: "agsgads-sgffdssa-lsaewq-ycxs-jdsad",
            position: [-60, -10, -60]
          }, [
            _createElementVNode("TresBoxGeometry", { args: [60, 60, 60] }),
            _createElementVNode("TresMeshNormalMaterial")
          ], -1))
        ]),
        _: 1
      }, 16);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=gerstnerWaterPage.2LgAWxCK1767105581793.js.map
