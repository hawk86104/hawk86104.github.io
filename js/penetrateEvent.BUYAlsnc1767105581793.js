import { importShared, gz, Kk } from './index.BxB45aCK1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';
import { FMessage } from './index.CnaVApRj1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,withCtx:_withCtx,createVNode:_createVNode,resolveComponent:_resolveComponent,openBlock:_openBlock,createBlock:_createBlock} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "penetrateEvent",
  setup(__props) {
    const log = (text) => {
      console.log(text);
      FMessage.info(text);
    };
    const boxOneBlocksPointerEvents = { value: true };
    const pane = new Pane({
      title: "阻止冒泡",
      expanded: true
    });
    pane.addBinding(boxOneBlocksPointerEvents, "value", { label: "阻止冒泡" });
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createBlock(_component_TresCanvas, { "window-size": "" }, {
        default: _withCtx(() => [
          _cache[5] || (_cache[5] = _createElementVNode("TresPerspectiveCamera", { "look-at": [0, 4, 0] }, null, -1)),
          _createElementVNode("TresGroup", {
            onClick: _cache[1] || (_cache[1] = ($event) => log("点击了 外包围 Group"))
          }, [
            _createElementVNode("TresMesh", {
              position: [-2, 0, -2],
              name: "box 2",
              onClick: _cache[0] || (_cache[0] = (event) => {
                log("点击了 Big Box 📦");
                if (boxOneBlocksPointerEvents.value) {
                  event.stopPropagation();
                }
              })
            }, [
              _cache[3] || (_cache[3] = _createElementVNode("TresBoxGeometry", { args: [2, 2, 2] }, null, -1)),
              _cache[4] || (_cache[4] = _createElementVNode("TresMeshNormalMaterial", {
                transparent: "",
                opacity: 1
              }, null, -1)),
              _createVNode(_unref(gz), {
                center: true,
                transform: ""
              }, {
                default: _withCtx(() => [..._cache[2] || (_cache[2] = [
                  _createElementVNode("h1", { class: "bg-white text-xs p-0.5 rounded -mt-15" }, "Big Box 📦", -1)
                ])]),
                _: 1
              })
            ])
          ]),
          _createVNode(_unref(Kk)),
          _cache[6] || (_cache[6] = _createElementVNode("TresGridHelper", null, null, -1)),
          _cache[7] || (_cache[7] = _createElementVNode("TresAmbientLight", { intensity: 1 }, null, -1))
        ]),
        _: 1
      });
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=penetrateEvent.BUYAlsnc1767105581793.js.map
