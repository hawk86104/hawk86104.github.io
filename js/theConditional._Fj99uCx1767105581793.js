import { importShared, Kk } from './index.BxB45aCK1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,openBlock:_openBlock,createElementBlock:_createElementBlock,createCommentVNode:_createCommentVNode,createVNode:_createVNode,resolveComponent:_resolveComponent,mergeProps:_mergeProps,withCtx:_withCtx,createBlock:_createBlock} = await importShared('vue');

const _hoisted_1 = ["material"];
const _hoisted_2 = {
  key: 0,
  position: [4, 0, 0]
};
const _hoisted_3 = {
  key: 1,
  position: [4, 1, 0]
};
const _hoisted_4 = {
  key: 2,
  position: [0, -4, -5]
};
const {BasicShadowMap,MeshPhongMaterial,NoToneMapping,SRGBColorSpace} = await importShared('three');

const {reactive,ref,onMounted,onUnmounted,watch,getCurrentInstance} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "theConditional",
  setup(__props) {
    const state = reactive({
      clearColor: "#000000",
      shadows: true,
      alpha: false,
      shadowMapType: BasicShadowMap,
      outputColorSpace: SRGBColorSpace,
      toneMapping: NoToneMapping,
      useLegacyLights: false
    });
    const paneElements = ref({
      groupVisible: true,
      boxPropMaterialVisible: true
    });
    const boxRef = ref(null);
    const boxVisible = ref(true);
    let pane = null;
    let proxy = null;
    onMounted(() => {
      if (!pane) {
        pane = new Pane({
          title: "显隐参数",
          expanded: true
        });
        pane.addBinding(boxVisible, "value", { label: "boxVisible" });
        pane.addBinding(paneElements.value, "boxPropMaterialVisible");
        pane.addBinding(paneElements.value, "groupVisible");
      }
      proxy = getCurrentInstance().proxy;
    });
    onUnmounted(() => {
      if (pane) {
        pane.dispose();
        pane = null;
      }
    });
    watch(
      () => boxVisible,
      (newVal, oldVal) => {
        if (oldVal !== void 0) {
          proxy.$refs["boxRef"].visible = newVal.value;
        }
      },
      { deep: true }
    );
    const material = new MeshPhongMaterial({ color: "#ff0000" });
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createBlock(_component_TresCanvas, _mergeProps(state, { "window-size": "" }), {
        default: _withCtx(() => [
          _cache[4] || (_cache[4] = _createElementVNode("TresPerspectiveCamera", {
            position: [11, 11, 11],
            fov: 45,
            near: 0.1,
            far: 1e3,
            "look-at": [-8, 3, -3]
          }, null, -1)),
          _cache[5] || (_cache[5] = _createElementVNode("TresDirectionalLight", {
            position: [0, 8, 4],
            intensity: 0.2,
            "cast-shadow": ""
          }, null, -1)),
          _createElementVNode("TresMesh", {
            ref_key: "boxRef",
            ref: boxRef,
            position: [0, 0, 0],
            material: _unref(material)
          }, [..._cache[0] || (_cache[0] = [
            _createElementVNode("TresBoxGeometry", { args: [1, 1, 1] }, null, -1)
          ])], 8, _hoisted_1),
          paneElements.value.boxPropMaterialVisible ? (_openBlock(), _createElementBlock("TresMesh", _hoisted_2, [..._cache[1] || (_cache[1] = [
            _createElementVNode("TresBoxGeometry", { args: [1, 1, 1] }, null, -1),
            _createElementVNode("TresMeshToonMaterial", { color: "#efefef" }, null, -1)
          ])])) : _createCommentVNode("", true),
          paneElements.value.boxPropMaterialVisible ? (_openBlock(), _createElementBlock("TresMesh", _hoisted_3, [..._cache[2] || (_cache[2] = [
            _createElementVNode("TresBoxGeometry", { args: [1, 1, 1] }, null, -1),
            _createElementVNode("TresMeshToonMaterial", { color: "#efefef" }, null, -1)
          ])])) : _createCommentVNode("", true),
          paneElements.value.groupVisible ? (_openBlock(), _createElementBlock("TresGroup", _hoisted_4, [..._cache[3] || (_cache[3] = [
            _createElementVNode("TresGroup", null, [
              _createElementVNode("TresMesh", { position: [0, 0, 0] }, [
                _createElementVNode("TresBoxGeometry", { args: [1, 1, 1] }),
                _createElementVNode("TresMeshBasicMaterial", { color: "#efef11" })
              ]),
              _createElementVNode("TresMesh", { position: [0, 2, 0] }, [
                _createElementVNode("TresBoxGeometry", { args: [1, 1, 1] }),
                _createElementVNode("TresMeshBasicMaterial", { color: "#ef11ef" })
              ])
            ], -1)
          ])])) : _createCommentVNode("", true),
          _createVNode(_unref(Kk)),
          _cache[6] || (_cache[6] = _createElementVNode("TresAmbientLight", { intensity: 0.5 }, null, -1))
        ]),
        _: 1
      }, 16);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=theConditional._Fj99uCx1767105581793.js.map
