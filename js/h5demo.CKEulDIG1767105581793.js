import { importShared, FButton, _export_sfc } from './index.BxB45aCK1767105581793.js';
import { loadJweixin, loadWebView } from './initScript.D0kd3T6a1767105581793.js';
import { FMessage } from './index.CnaVApRj1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,createTextVNode:_createTextVNode,unref:_unref,withCtx:_withCtx,createVNode:_createVNode,Fragment:_Fragment,openBlock:_openBlock,createElementBlock:_createElementBlock} = await importShared('vue');

const _hoisted_1 = { class: "btn-list" };
const {onMounted} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "h5demo",
  setup(__props) {
    onMounted(async () => {
      console.log("onMounted");
      await loadJweixin();
      await loadWebView();
      if (!uni.getEnv) {
        FMessage.error("当前web浏览器访问无效，请使用小程序或者app访问该页面");
      } else {
        uni.getEnv((res) => {
          FMessage.success(`当前环境：${JSON.stringify(res)}`);
        });
      }
    });
    const postMessage = () => {
      uni.postMessage({
        data: {
          action: "普通页面发送了消息"
        }
      });
    };
    const navigateTo = () => {
      uni.navigateTo({
        url: "/pages/debugDemo/jumpPage/jumpPage"
      });
    };
    const redirectTo = () => {
      uni.redirectTo({
        url: "/pages/debugDemo/jumpPage/jumpPage"
      });
    };
    const navigateBack = () => {
      uni.navigateBack();
    };
    const reLaunch = () => {
      uni.reLaunch({
        url: "/pages/debugDemo/debugDemo"
      });
    };
    const switchTab = () => {
      uni.reLaunch({
        url: "/pages/about/about"
      });
    };
    return (_ctx, _cache) => {
      return _openBlock(), _createElementBlock(_Fragment, null, [
        _cache[12] || (_cache[12] = _createElementVNode("div", { class: "title" }, "基础页面与uniapp交互", -1)),
        _createElementVNode("div", _hoisted_1, [
          _createVNode(_unref(FButton), {
            class: "btn",
            size: "large",
            type: "primary",
            long: "",
            onClick: _cache[0] || (_cache[0] = ($event) => navigateTo())
          }, {
            default: _withCtx(() => [..._cache[6] || (_cache[6] = [
              _createTextVNode(" navigateTo ", -1)
            ])]),
            _: 1
          }),
          _createVNode(_unref(FButton), {
            class: "btn",
            size: "large",
            type: "info",
            long: "",
            onClick: _cache[1] || (_cache[1] = ($event) => redirectTo())
          }, {
            default: _withCtx(() => [..._cache[7] || (_cache[7] = [
              _createTextVNode(" redirectTo ", -1)
            ])]),
            _: 1
          }),
          _createVNode(_unref(FButton), {
            class: "btn",
            size: "large",
            type: "success",
            long: "",
            onClick: _cache[2] || (_cache[2] = ($event) => navigateBack())
          }, {
            default: _withCtx(() => [..._cache[8] || (_cache[8] = [
              _createTextVNode(" navigateBack ", -1)
            ])]),
            _: 1
          }),
          _createVNode(_unref(FButton), {
            class: "btn",
            size: "large",
            type: "warning",
            long: "",
            onClick: _cache[3] || (_cache[3] = ($event) => reLaunch())
          }, {
            default: _withCtx(() => [..._cache[9] || (_cache[9] = [
              _createTextVNode(" reLaunch ", -1)
            ])]),
            _: 1
          }),
          _createVNode(_unref(FButton), {
            class: "btn btn-red",
            size: "large",
            type: "primary",
            long: "",
            onClick: _cache[4] || (_cache[4] = ($event) => switchTab())
          }, {
            default: _withCtx(() => [..._cache[10] || (_cache[10] = [
              _createTextVNode(" switchTab ", -1)
            ])]),
            _: 1
          }),
          _createVNode(_unref(FButton), {
            class: "btn",
            size: "large",
            type: "info",
            long: "",
            onClick: _cache[5] || (_cache[5] = ($event) => postMessage())
          }, {
            default: _withCtx(() => [..._cache[11] || (_cache[11] = [
              _createTextVNode(" postMessage ", -1)
            ])]),
            _: 1
          })
        ])
      ], 64);
    };
  }
});

const h5demo = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3dc6f516"]]);

export { h5demo as default };
//# sourceMappingURL=h5demo.CKEulDIG1767105581793.js.map
