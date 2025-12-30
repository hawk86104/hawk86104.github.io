import { importShared, gz } from './index.BxB45aCK1767105581793.js';
import { getUUID } from './global.Dx_vZWvY1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {unref:_unref,createElementVNode:_createElementVNode,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock,createCommentVNode:_createCommentVNode} = await importShared('vue');

const _hoisted_1 = ["id"];
const {watch,ref,nextTick,useAttrs,onMounted} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "domPanel",
  props: {
    center: { type: Boolean, default: false },
    transform: { type: Boolean, default: false },
    sprite: { type: Boolean, default: false },
    distanceFactor: { default: 1 },
    domContent: { default: `
                <div class="boxStyle1 pos-relative left-20 top--30 text-white" style="padding: 10px;border-left: 10px solid #336699;background-image: linear-gradient(132deg, #00336680, #00336610);">
                    这是正方形 📦
                </div>
            ` },
    domID: {}
  },
  setup(__props) {
    const props = __props;
    const domID = props.domID ?? getUUID();
    const mustReBuildDom = ref(false);
    const mustReBuildContent = ref(false);
    watch(
      () => [props.transform, props.center, props.distanceFactor, props.domContent],
      () => {
        if (!mustReBuildDom.value) {
          mustReBuildDom.value = true;
          nextTick(() => {
            mustReBuildDom.value = false;
            mustReBuildContent.value = true;
          });
        }
      }
    );
    const updateVisible = () => {
      let visible = true;
      if (attrs.visible === void 0) {
        visible = true;
      } else {
        if (attrs.visible === "" || attrs.visible) {
          visible = true;
        } else {
          visible = false;
        }
      }
      const dom = document.getElementById(domID);
      if (dom) {
        dom.style.display = visible ? "" : "none";
      }
    };
    const attrs = useAttrs();
    watch(
      () => attrs.visible,
      () => {
        updateVisible();
      }
    );
    const setDomContent = () => {
      const dom = document.getElementById(domID);
      if (dom) {
        dom.innerHTML = props.domContent;
      }
      updateVisible();
    };
    watch(
      () => mustReBuildContent.value,
      (mrbc) => {
        if (mrbc) {
          nextTick(() => {
            setDomContent();
            mustReBuildContent.value = false;
          });
        }
      }
    );
    onMounted(() => {
      nextTick(() => {
        setDomContent();
      });
    });
    return (_ctx, _cache) => {
      return !mustReBuildDom.value ? (_openBlock(), _createBlock(_unref(gz), {
        key: 0,
        wrapperClass: "tvtDomPanelClass",
        transform: _ctx.transform,
        sprite: _ctx.sprite,
        center: _ctx.center,
        distanceFactor: _ctx.transform ? _ctx.distanceFactor : void 0
      }, {
        default: _withCtx(() => [
          _createElementVNode("div", {
            id: _unref(domID),
            class: "childWrapper"
          }, null, 8, _hoisted_1)
        ]),
        _: 1
      }, 8, ["transform", "sprite", "center", "distanceFactor"])) : _createCommentVNode("", true);
    };
  }
});

export { _sfc_main };
//# sourceMappingURL=domPanel.vue_vue_type_style_index_0_lang.dV59iE041767105581793.js.map
