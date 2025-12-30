import { importShared, Kk, sz } from './index.BxB45aCK1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,createVNode:_createVNode,withCtx:_withCtx,resolveComponent:_resolveComponent,mergeProps:_mergeProps,openBlock:_openBlock,createBlock:_createBlock} = await importShared('vue');

const _hoisted_1 = ["scale"];
const _hoisted_2 = ["color"];
const _hoisted_3 = ["scale"];
const _hoisted_4 = ["color", "blending", "map"];
const {AdditiveBlending} = await importShared('three');

const {reactive} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "spriteImage",
  setup(__props) {
    const gl = {
      clearColor: "#222"
    };
    const typeState = reactive({
      color: "#ffff00",
      scale: 1
    });
    const paneControl = new Pane({
      title: "参数",
      expanded: true
    });
    paneControl.addBinding(typeState, "color", {
      label: "颜色"
    });
    paneControl.addBinding(typeState, "scale", {
      label: "大小",
      min: 1,
      max: 10,
      step: 1
    });
    paneControl.addBlade({
      view: "text",
      label: "问题",
      parse: (v) => String(v),
      value: "Mesh移动到摄像头偏远处 物体产生变形，而本身精灵不会。 解决方法 Mesh也换成 Sprite 后 用shader画圆可解决"
    });
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createBlock(_component_TresCanvas, _mergeProps(gl, { "window-size": "" }), {
        default: _withCtx(() => [
          _cache[1] || (_cache[1] = _createElementVNode("TresPerspectiveCamera", { position: [3, 3, 3] }, null, -1)),
          _cache[2] || (_cache[2] = _createElementVNode("TresAmbientLight", { intensity: 1 }, null, -1)),
          _createVNode(_unref(Kk)),
          _cache[3] || (_cache[3] = _createElementVNode("TresGridHelper", { args: [10, 10] }, null, -1)),
          _createElementVNode("TresMesh", {
            position: [0, 1, 0],
            scale: typeState.scale
          }, [
            _cache[0] || (_cache[0] = _createElementVNode("TresSphereGeometry", { args: [0.3, 32, 16] }, null, -1)),
            _createElementVNode("TresMeshLambertMaterial", {
              color: typeState.color
            }, null, 8, _hoisted_2)
          ], 8, _hoisted_1),
          _createVNode(_unref(sz), { path: "./plugins/basic/shine/image/round.png" }, {
            default: _withCtx(({ state: texture }) => [
              _createElementVNode("TresSprite", {
                position: [0, 1, 0],
                scale: [typeState.scale, typeState.scale, 1]
              }, [
                _createElementVNode("TresSpriteMaterial", {
                  color: typeState.color,
                  blending: _unref(AdditiveBlending),
                  map: texture,
                  alphaTest: 0.1
                }, null, 8, _hoisted_4)
              ], 8, _hoisted_3)
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 16);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=spriteImage.CPl3QJY21767105581793.js.map
