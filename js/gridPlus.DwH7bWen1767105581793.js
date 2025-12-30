import { importShared, Kk, tk } from './index.BxB45aCK1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';
import { _sfc_main as _sfc_main$1 } from './gridPlusCom.vue_vue_type_script_setup_true_lang.BIqyIrzr1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,createVNode:_createVNode,mergeProps:_mergeProps,Suspense:_Suspense,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock,resolveComponent:_resolveComponent} = await importShared('vue');

const {ACESFilmicToneMapping} = await importShared('three');

const {reactive} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "gridPlus",
  setup(__props) {
    const state = reactive({
      alpha: true,
      toneMapping: ACESFilmicToneMapping,
      windowSize: true,
      clearColor: 6710886
    });
    const controlsState = reactive({
      enableDamping: true,
      autoRotate: false
    });
    const gridState = reactive({
      cellSize: 0.6,
      cellThickness: 1,
      cellColor: "#6f6f6f",
      sectionColor: "#9d4b4b",
      sectionSize: 3.3,
      sectionThickness: 1.5,
      fadeDistance: 25,
      fadeStrength: 1,
      followCamera: false,
      infiniteGrid: true
    });
    const paneControl = new Pane();
    paneControl.addBinding(gridState, "cellColor", {
      label: "小格子颜色"
    });
    paneControl.addBinding(gridState, "cellSize", {
      label: "小格子大小",
      min: 0.01,
      max: 2,
      step: 0.01
    });
    paneControl.addBinding(gridState, "cellThickness", {
      label: "小格子粗细",
      min: 0,
      max: 5,
      step: 0.1
    });
    paneControl.addBinding(gridState, "sectionColor", {
      label: "大网格颜色"
    });
    paneControl.addBinding(gridState, "sectionSize", {
      label: "大网格大小",
      min: 0.01,
      max: 5,
      step: 0.01
    });
    paneControl.addBinding(gridState, "sectionThickness", {
      label: "大网格粗细",
      min: 0,
      max: 5,
      step: 0.1
    });
    paneControl.addBinding(gridState, "fadeDistance", {
      label: "边缘渐隐距离",
      min: 0,
      max: 50,
      step: 1
    });
    paneControl.addBinding(gridState, "fadeStrength", {
      label: "边缘渐隐强度",
      min: 0,
      max: 1,
      step: 0.01
    });
    paneControl.addBinding(gridState, "followCamera", {
      label: "跟随相机"
    });
    paneControl.addBinding(gridState, "infiniteGrid", {
      label: "无限网格"
    });
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createBlock(_component_TresCanvas, _mergeProps(state, { "window-size": "" }), {
        default: _withCtx(() => [
          _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", {
            position: [10, 10, 10],
            fov: 45,
            near: 0.1,
            far: 1e3
          }, null, -1)),
          _createVNode(_unref(Kk), _normalizeProps(_guardReactiveProps(controlsState)), null, 16),
          _cache[1] || (_cache[1] = _createElementVNode("TresAmbientLight", { intensity: 0.5 }, null, -1)),
          _cache[2] || (_cache[2] = _createElementVNode("TresDirectionalLight", {
            position: [15, 15, 15],
            intensity: 1
          }, null, -1)),
          _cache[3] || (_cache[3] = _createElementVNode("TresMesh", {
            position: [0, 2, 0],
            name: "torus"
          }, [
            _createElementVNode("TresTorusKnotGeometry", { args: [1, 0.35, 100, 32] }),
            _createElementVNode("TresMeshStandardMaterial", {
              color: "#ff33ff",
              roughness: 0,
              metalness: 1
            })
          ], -1)),
          _createVNode(_sfc_main$1, _mergeProps({ args: [3, 3] }, gridState), null, 16),
          (_openBlock(), _createBlock(_Suspense, null, {
            default: _withCtx(() => [
              _createVNode(_unref(tk), {
                files: ["pos-x.jpg", "neg-x.jpg", "pos-y.jpg", "neg-y.jpg", "pos-z.jpg", "neg-z.jpg"],
                path: ("https://opensource.cdn.icegl.cn") + "/images/skyBox/6jpg/"
              }, null, 8, ["path"])
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
//# sourceMappingURL=gridPlus.DwH7bWen1767105581793.js.map
