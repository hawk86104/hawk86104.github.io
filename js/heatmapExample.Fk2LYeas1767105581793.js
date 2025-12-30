import { importShared, Kk } from './index.BxB45aCK1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';
import { _sfc_main as _sfc_main$1 } from './heatmapJS.vue_vue_type_script_setup_true_lang.DbMNYVxC1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,createVNode:_createVNode,mergeProps:_mergeProps,resolveComponent:_resolveComponent,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock} = await importShared('vue');
const {PCFSoftShadowMap,SRGBColorSpace} = await importShared('three');

const {reactive,ref} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "heatmapExample",
  setup(__props) {
    const gl = {
      clearColor: "#030311",
      shadows: true,
      alpha: false,
      outputColorSpace: SRGBColorSpace,
      shadowMapType: PCFSoftShadowMap,
      useLegacyLights: true,
      antialias: true
    };
    const heatmapJSRef = ref();
    let play = true;
    const onLoop = ({ elapsed }) => {
      if (!play && parseInt(elapsed) % 2 == 1) {
        play = true;
        if (heatmapJSRef.value) {
          heatmapJSRef.value.setData();
        }
      }
      if (play && parseInt(elapsed) % 2 == 0) {
        play = false;
      }
    };
    const typeState = reactive({
      show2dCanvas: true,
      heightRatio: 6
    });
    const paneControl = new Pane({
      title: "参数",
      expanded: true
    });
    paneControl.addBinding(typeState, "show2dCanvas", {
      label: "显示二维图"
    });
    paneControl.addBinding(typeState, "heightRatio", {
      label: "高度",
      min: 1,
      max: 10,
      step: 1
    });
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createBlock(_component_TresCanvas, _mergeProps(gl, {
        "window-size": "",
        onLoop
      }), {
        default: _withCtx(() => [
          _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", {
            position: [21, 34, 55],
            fov: 60,
            near: 1,
            far: 1e3
          }, null, -1)),
          _createVNode(_unref(Kk), {
            autoRotate: true,
            autoRotateSpeed: 2
          }),
          _cache[1] || (_cache[1] = _createElementVNode("TresAmbientLight", {
            color: "#cccccc",
            intensity: 0.4
          }, null, -1)),
          _cache[2] || (_cache[2] = _createElementVNode("TresPointLight", {
            color: "#ffffff",
            intensity: 0.8
          }, null, -1)),
          _cache[3] || (_cache[3] = _createElementVNode("TresGridHelper", {
            args: [50, 25],
            position: [0, 0, 0]
          }, null, -1)),
          _createVNode(_sfc_main$1, _mergeProps({
            ref_key: "heatmapJSRef",
            ref: heatmapJSRef
          }, typeState), null, 16)
        ]),
        _: 1
      }, 16);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=heatmapExample.Fk2LYeas1767105581793.js.map
