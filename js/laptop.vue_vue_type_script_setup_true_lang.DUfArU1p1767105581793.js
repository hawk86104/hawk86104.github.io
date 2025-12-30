import { importShared, NA, yk, gz } from './index.BxB45aCK1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {unref:_unref,createElementVNode:_createElementVNode,withCtx:_withCtx,createVNode:_createVNode,openBlock:_openBlock,createElementBlock:_createElementBlock,createCommentVNode:_createCommentVNode,createBlock:_createBlock} = await importShared('vue');

const _hoisted_1 = ["object"];
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "laptop",
  setup(__props) {
    const { state: pState } = NA("./plugins/basic/htmls/model/model.gltf", { draco: true, decoderPath: "./draco/" });
    return (_ctx, _cache) => {
      return _openBlock(), _createBlock(_unref(yk), null, {
        default: _withCtx(() => [
          _unref(pState) ? (_openBlock(), _createElementBlock("primitive", {
            key: 0,
            object: _unref(pState)?.scene
          }, [
            _createVNode(_unref(gz), {
              transform: "",
              "wrapper-class": "webpage",
              "distance-factor": 1.1,
              position: [0, 1.6, -1.4],
              occlude: "",
              "rotation-x": -0.256
            }, {
              default: _withCtx(() => [..._cache[0] || (_cache[0] = [
                _createElementVNode("iframe", {
                  class: "rounded-lg w-[1024px] h-[670px]",
                  src: "https://www.icegl.cn",
                  frameborder: "0"
                }, null, -1)
              ])]),
              _: 1
            })
          ], 8, _hoisted_1)) : _createCommentVNode("", true)
        ]),
        _: 1
      });
    };
  }
});

export { _sfc_main };
//# sourceMappingURL=laptop.vue_vue_type_script_setup_true_lang.DUfArU1p1767105581793.js.map
