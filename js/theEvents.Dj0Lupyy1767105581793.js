import { importShared, Kk } from './index.BxB45aCK1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,createVNode:_createVNode,renderList:_renderList,Fragment:_Fragment,openBlock:_openBlock,createElementBlock:_createElementBlock,resolveComponent:_resolveComponent,mergeProps:_mergeProps,withCtx:_withCtx,createBlock:_createBlock} = await importShared('vue');

const _hoisted_1 = ["position"];
const {BasicShadowMap,SRGBColorSpace,NoToneMapping} = await importShared('three');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "theEvents",
  setup(__props) {
    const gl = {
      clearColor: "#202020",
      shadows: true,
      alpha: false,
      shadowMapType: BasicShadowMap,
      outputColorSpace: SRGBColorSpace,
      toneMapping: NoToneMapping
    };
    function onClick(ev) {
      if (ev) {
        ev.object.material.color.set("#008080");
      }
    }
    function onPointerEnter(ev) {
      if (ev) {
        ev.object.material.color.set("#CCFF03");
      }
    }
    function onPointerLeave(ev) {
      if (ev) {
        ev.eventObject.material.color.set("#efefef");
      }
    }
    function onPointerMove(ev) {
      if (ev) {
        console.log(ev);
      }
    }
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createBlock(_component_TresCanvas, _mergeProps(gl, { "window-size": "" }), {
        default: _withCtx(() => [
          _cache[1] || (_cache[1] = _createElementVNode("TresPerspectiveCamera", {
            position: [11, 11, 11],
            "look-at": [0, 0, 0]
          }, null, -1)),
          _createVNode(_unref(Kk)),
          (_openBlock(), _createElementBlock(_Fragment, null, _renderList([-2.5, 0, 2.5], (x) => {
            return _openBlock(), _createElementBlock(_Fragment, null, [
              (_openBlock(), _createElementBlock(_Fragment, null, _renderList([-2.5, 0, 2.5], (y) => {
                return _openBlock(), _createElementBlock(_Fragment, null, [
                  (_openBlock(), _createElementBlock(_Fragment, null, _renderList([-2.5, 0, 2.5], (z) => {
                    return _createElementVNode("TresMesh", {
                      key: `${[x, y, z]}`,
                      position: [x, y, z],
                      onClick,
                      onPointerenter: onPointerEnter,
                      onPointerleave: onPointerLeave,
                      onPointermove: onPointerMove
                    }, [..._cache[0] || (_cache[0] = [
                      _createElementVNode("TresBoxGeometry", { args: [1, 1, 1] }, null, -1),
                      _createElementVNode("TresMeshToonMaterial", { color: "#efefef" }, null, -1)
                    ])], 40, _hoisted_1);
                  }), 64))
                ], 64);
              }), 64))
            ], 64);
          }), 64)),
          _cache[2] || (_cache[2] = _createElementVNode("TresDirectionalLight", { intensity: 1 }, null, -1)),
          _cache[3] || (_cache[3] = _createElementVNode("TresAmbientLight", { intensity: 1 }, null, -1))
        ]),
        _: 1
      }, 16);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=theEvents.Dj0Lupyy1767105581793.js.map
