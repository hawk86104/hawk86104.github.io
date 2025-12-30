import { importShared, iz, LoadingOutlined } from './index.BxB45aCK1767105581793.js';

const {withAsyncContext:_withAsyncContext,defineComponent:_defineComponent} = await importShared('vue');

const {unref:_unref,toDisplayString:_toDisplayString,createVNode:_createVNode,createTextVNode:_createTextVNode,createElementVNode:_createElementVNode,openBlock:_openBlock,createElementBlock:_createElementBlock,createCommentVNode:_createCommentVNode} = await importShared('vue');

const _hoisted_1 = {
  key: 0,
  class: "absolute bg-grey-600 t-0 l-0 w-full h-full z-99999999 flex justify-center items-center text-black font-mono bg-black"
};
const _hoisted_2 = { class: "w-200px text-white" };
const {watch} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "default",
  async setup(__props) {
    let __temp, __restore;
    const { hasFinishLoading, progress } = ([__temp, __restore] = _withAsyncContext(() => iz()), __temp = await __temp, __restore(), __temp);
    watch(
      () => progress.value,
      async (nv, ov) => {
        console.log(nv, ov);
      }
    );
    return (_ctx, _cache) => {
      return !_unref(hasFinishLoading) ? (_openBlock(), _createElementBlock("div", _hoisted_1, [
        _createElementVNode("div", _hoisted_2, [
          _createTextVNode(" 载入中... " + _toDisplayString(_unref(progress)) + " % ", 1),
          _createVNode(_unref(LoadingOutlined), { class: "text-yellow" })
        ])
      ])) : _createCommentVNode("", true);
    };
  }
});

export { _sfc_main };
//# sourceMappingURL=default.vue_vue_type_script_setup_true_lang.DQGKkIwV1767105581793.js.map
