import { importShared, NA } from './index.BxB45aCK1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {unref:_unref,openBlock:_openBlock,createElementBlock:_createElementBlock,createCommentVNode:_createCommentVNode} = await importShared('vue');

const _hoisted_1 = ["object"];
const {watch} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "model",
  setup(__props) {
    const { state: pState } = NA(
      `${"https://opensource.cdn.icegl.cn"}/model/industry4/plane/scene.gltf`,
      { draco: true, decoderPath: "./draco/" }
    );
    watch(
      () => pState.value,
      (state) => {
        if (!state?.scene) return;
        state.scene.getObjectByName("Floor").removeFromParent();
        const cubeAvion = state.scene.getObjectByName("Cube006_Avion_0");
        cubeAvion.castShadow = true;
      }
    );
    return (_ctx, _cache) => {
      return _unref(pState) ? (_openBlock(), _createElementBlock("primitive", {
        key: 0,
        object: _unref(pState)?.scene
      }, null, 8, _hoisted_1)) : _createCommentVNode("", true);
    };
  }
});

export { _sfc_main };
//# sourceMappingURL=model.vue_vue_type_script_setup_true_lang.CEnsjPVr1767105581793.js.map
