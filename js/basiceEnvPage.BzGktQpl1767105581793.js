import { importShared, Kk } from './index.BxB45aCK1767105581793.js';
import { HDRfileList, _sfc_main$1 } from './index.EB9aFE0Q1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,createVNode:_createVNode,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,resolveComponent:_resolveComponent,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock} = await importShared('vue');

const {reactive} = await importShared('vue');

const THREE = await importShared('three');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "basiceEnvPage",
  setup(__props) {
    const tcConfig = {
      clearColor: "#201919",
      windowSize: true,
      shadows: true,
      toneMapping: THREE.ACESFilmicToneMapping,
      toneMappingExposure: 0.8
    };
    const basiceEnvState = reactive({
      on: false,
      type: "sunset",
      environmentIntensity: 1,
      environmentRotations: { x: 0, y: 0, z: 0 }
    });
    const paneControl = new Pane();
    paneControl.addBinding(basiceEnvState, "on", {
      label: "开启环境贴图"
    });
    paneControl.addBinding(basiceEnvState, "environmentIntensity", {
      label: "环境贴图强度",
      min: 0,
      max: 3,
      step: 0.01
    });
    paneControl.addBinding(basiceEnvState, "environmentRotations", {
      label: "环境贴图旋转",
      x: { min: -Math.PI, max: Math.PI },
      y: { min: -Math.PI, max: Math.PI },
      z: { min: -Math.PI, max: Math.PI }
    });
    paneControl.addBlade({
      view: "list",
      label: "环境贴图类别",
      options: Object.entries(HDRfileList).map(([name, path]) => ({
        text: name,
        value: name
      })),
      value: basiceEnvState.type
    }).on("change", (ev) => {
      basiceEnvState.type = ev.value;
    });
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createBlock(_component_TresCanvas, _normalizeProps(_guardReactiveProps(tcConfig)), {
        default: _withCtx(() => [
          _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", {
            position: [15, 15, 15],
            fov: 45,
            near: 0.1,
            far: 1e4,
            "look-at": [0, 0, 0]
          }, null, -1)),
          _createVNode(_unref(Kk), { enableDamping: "" }),
          _cache[1] || (_cache[1] = _createElementVNode("TresAmbientLight", { intensity: 0.5 }, null, -1)),
          _cache[2] || (_cache[2] = _createElementVNode("TresMesh", {
            position: [3, 2, 1],
            "cast-shadow": ""
          }, [
            _createElementVNode("TresBoxGeometry", { args: [10, 10, 10] }),
            _createElementVNode("TresMeshStandardMaterial", {
              color: "#ffffff",
              metalness: 1,
              roughness: 0.14
            })
          ], -1)),
          _cache[3] || (_cache[3] = _createElementVNode("TresMesh", {
            position: [0, 2, -4],
            "cast-shadow": ""
          }, [
            _createElementVNode("TresBoxGeometry", { args: [2, 2, 2] }),
            _createElementVNode("TresMeshNormalMaterial")
          ], -1)),
          _createVNode(_unref(_sfc_main$1), _normalizeProps(_guardReactiveProps(basiceEnvState)), null, 16)
        ]),
        _: 1
      }, 16);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=basiceEnvPage.BzGktQpl1767105581793.js.map
