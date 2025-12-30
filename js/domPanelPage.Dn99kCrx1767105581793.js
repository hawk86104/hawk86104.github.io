import { importShared, Kk } from './index.BxB45aCK1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';
import { _sfc_main as _sfc_main$1 } from './domPanel.vue_vue_type_style_index_0_lang.dV59iE041767105581793.js';
import { NModal } from './Modal.CJYgerxp1767105581793.js';
import { NInput } from './Input.xoI_2nKL1767105581793.js';
import { Button } from './Button.CtEklqVH1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,createVNode:_createVNode,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,resolveComponent:_resolveComponent,withCtx:_withCtx,createTextVNode:_createTextVNode,Fragment:_Fragment,openBlock:_openBlock,createElementBlock:_createElementBlock} = await importShared('vue');

const _hoisted_1 = { position: [1, 2, 3] };
const {reactive,ref} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "domPanelPage",
  setup(__props) {
    const paneElements = reactive({
      center: false,
      transform: true,
      sprite: false,
      distanceFactor: 3,
      domContent: `
    <div class="illustrate2">
  <div class="cStyle1"></div>
  <div class="parallelogram">
    <span>🪃 飞机机翼</span>
    <div class="contentDiv">改善飞行的稳定性和操纵性</div>
  </div>
</div>

<style>
.illustrate2 {
position: relative;
left: 80px;
top: -50px
}
.illustrate2 .cStyle1 {
  width: 15px;
  height: 15px;
  background-color: transparent;
  border-radius: 50%;
  border: 5px solid white;
  position: relative;
  color: white;
}

/* 添加斜线效果 */
.illustrate2 .cStyle1::before {
  content: '';
  position: relative;
  top: -155px;
  left: -446px;
  width: 500px;
  height: 6px;
  display: block;
  transform: rotate(218deg);
  background-color: white;
}

.illustrate2 .parallelogram {
  width: 360px;
  height: 30px;
  color: white;
  position: relative;
  top: -329px;
  left: -760px;
  text-align: right;
  font-size: 38px;
}

.illustrate2 .parallelogram span {
  position: relative;
  right: 18px;
  top: -30px;
  font-weight: bolder;
  /* 可选描边效果
  -webkit-text-stroke: 1px #424242;
  text-stroke: 1px #424242;
  */
}

.illustrate2 .parallelogram .contentDiv {
  text-align: left;
  font-size: 26px;
  display: block;
  margin-top: -19px;
}

/* 利用伪元素before创建平行四边形 */
.illustrate2 .parallelogram::before {
  content: '';
  transform: skew(-45deg);
  background: linear-gradient(45deg, #5a65fc, #ff00f6);
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
</style>

    `
    });
    const pane = new Pane({
      title: "参数",
      expanded: true
    });
    pane.addBinding(paneElements, "center");
    pane.addBinding(paneElements, "transform");
    pane.addBinding(paneElements, "sprite");
    pane.addBinding(paneElements, "distanceFactor", {
      label: "距离缩放",
      step: 0.1,
      min: 0.1,
      max: 10
    });
    const showModal = ref(false);
    const btn = pane.addButton({
      title: "编辑",
      label: "dom代码"
    });
    btn.on("click", () => {
      if (!showModal.value) {
        showModal.value = true;
      }
    });
    const htmlContent = ref(paneElements.domContent);
    function onConfirm() {
      paneElements.domContent = htmlContent.value;
      showModal.value = false;
    }
    function onCancel() {
      showModal.value = false;
    }
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createElementBlock(_Fragment, null, [
        _createVNode(_component_TresCanvas, {
          clearColor: "#222",
          "window-size": ""
        }, {
          default: _withCtx(() => [
            _cache[4] || (_cache[4] = _createElementVNode("TresPerspectiveCamera", { position: [2, 10, 16] }, null, -1)),
            _createVNode(_unref(Kk)),
            _cache[5] || (_cache[5] = _createElementVNode("TresGridHelper", null, null, -1)),
            _createElementVNode("TresMesh", _hoisted_1, [
              _cache[2] || (_cache[2] = _createElementVNode("TresBoxGeometry", null, null, -1)),
              _cache[3] || (_cache[3] = _createElementVNode("TresMeshNormalMaterial", null, null, -1)),
              _createVNode(_sfc_main$1, _normalizeProps(_guardReactiveProps(paneElements)), null, 16)
            ])
          ]),
          _: 1
        }),
        _createVNode(_unref(NModal), {
          show: showModal.value,
          "onUpdate:show": _cache[1] || (_cache[1] = ($event) => showModal.value = $event),
          title: "HTML编辑器",
          preset: "dialog",
          "mask-closable": false,
          "z-index": 99999999,
          style: { "width": "900px" }
        }, {
          action: _withCtx(() => [
            _createVNode(_unref(Button), { onClick: onCancel }, {
              default: _withCtx(() => [..._cache[6] || (_cache[6] = [
                _createTextVNode("取消", -1)
              ])]),
              _: 1
            }),
            _createVNode(_unref(Button), {
              type: "primary",
              onClick: onConfirm
            }, {
              default: _withCtx(() => [..._cache[7] || (_cache[7] = [
                _createTextVNode("确认", -1)
              ])]),
              _: 1
            })
          ]),
          default: _withCtx(() => [
            _createVNode(_unref(NInput), {
              value: htmlContent.value,
              "onUpdate:value": _cache[0] || (_cache[0] = ($event) => htmlContent.value = $event),
              type: "textarea",
              placeholder: "在这里输入HTML代码",
              autosize: { minRows: 10, maxRows: 38 }
            }, null, 8, ["value"])
          ]),
          _: 1
        }, 8, ["show"])
      ], 64);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=domPanelPage.Dn99kCrx1767105581793.js.map
