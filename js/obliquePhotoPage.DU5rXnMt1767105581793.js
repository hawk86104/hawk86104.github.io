import { importShared, Kk } from './index.BxB45aCK1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';
import { _sfc_main as _sfc_main$1 } from './obliquePhoto.vue_vue_type_script_setup_true_lang.BUTwkNtD1767105581793.js';
import { is3DTilesetJson } from './utils.uRDybWT71767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,createVNode:_createVNode,mergeProps:_mergeProps,resolveComponent:_resolveComponent,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock} = await importShared('vue');

const {reactive,ref} = await importShared('vue');

const THREE = await importShared('three');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "obliquePhotoPage",
  setup(__props) {
    const state = {
      clearColor: "#201919",
      windowSize: true,
      shadows: true,
      toneMapping: THREE.ACESFilmicToneMapping,
      toneMappingExposure: 1,
      shadowMapType: THREE.PCFSoftShadowMap
    };
    const configState = reactive({
      tilesUrl: `${"https://opensource.cdn.icegl.cn"}/3Dtiles/simpleGIS/TilesetWithDiscreteLOD/tileset.json`,
      isRotation: true,
      isRranslation: true
    });
    const tilesUrl = ref(configState.tilesUrl);
    const paneControl = new Pane();
    paneControl.addBinding(tilesUrl, "value", { label: "tiles地址" });
    const btn = paneControl.addButton({
      title: "应用",
      label: "从url读取tiles"
    });
    btn.on("click", () => {
      if (tilesUrl.value === configState.tilesUrl) {
        return;
      }
      paneControl.disabled = true;
      is3DTilesetJson(tilesUrl.value).then((isValid) => {
        if (isValid) {
          configState.tilesUrl = tilesUrl.value;
        } else {
          alert("这不是一个有效的3D Tiles地址");
        }
        paneControl.disabled = false;
      });
    });
    paneControl.addBinding(configState, "isRotation", { label: "地心旋转" });
    paneControl.addBinding(configState, "isRranslation", { label: "居中展示" });
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createBlock(_component_TresCanvas, _mergeProps(state, { "window-size": "" }), {
        default: _withCtx(() => [
          _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", {
            position: [800, 800, 800],
            fov: 60,
            near: 1,
            far: 2e4
          }, null, -1)),
          _createVNode(_unref(Kk)),
          _cache[1] || (_cache[1] = _createElementVNode("TresAmbientLight", { intensity: 1 }, null, -1)),
          _cache[2] || (_cache[2] = _createElementVNode("TresDirectionalLight", {
            position: [1, 2, 3],
            intensity: 1.25
          }, null, -1)),
          _cache[3] || (_cache[3] = _createElementVNode("TresAxesHelper", { args: [100] }, null, -1)),
          _createVNode(_sfc_main$1, _mergeProps(configState, {
            "rotation-x": configState.isRotation ? -Math.PI / 2 : 0
          }), null, 16, ["rotation-x"])
        ]),
        _: 1
      }, 16);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=obliquePhotoPage.DU5rXnMt1767105581793.js.map
