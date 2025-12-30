import { importShared, Kk, Qk } from './index.BxB45aCK1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,createVNode:_createVNode,mergeProps:_mergeProps,openBlock:_openBlock,createBlock:_createBlock,createCommentVNode:_createCommentVNode,resolveComponent:_resolveComponent,withCtx:_withCtx} = await importShared('vue');

const {ref,reactive} = await importShared('vue');

const {BasicShadowMap,SRGBColorSpace,NoToneMapping} = await importShared('three');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "transformControls",
  setup(__props) {
    const gl = {
      clearColor: "#82DBC5",
      shadows: true,
      alpha: false,
      shadowMapType: BasicShadowMap,
      outputColorSpace: SRGBColorSpace,
      toneMapping: NoToneMapping
    };
    const boxRef = ref();
    const sphereRef = ref();
    const transformRef = ref();
    function changeObject(object) {
      transformRef.value = object;
    }
    const context = ref();
    const controlsState = reactive({
      mode: "translate",
      enabled: true,
      space: "world",
      axis: "XYZ",
      size: 1,
      showX: true,
      showY: true,
      showZ: true
    });
    const pane = new Pane();
    pane.addBlade({
      view: "list",
      label: "模式",
      options: [
        { text: "移动", value: "translate" },
        { text: "旋转", value: "rotate" },
        { text: "缩放", value: "scale" }
      ],
      value: controlsState.mode
    }).on("change", (e) => {
      controlsState.mode = e.value;
    });
    pane.addBinding(controlsState, "enabled", { label: "开启" });
    pane.addBlade({
      view: "list",
      label: "Space",
      options: [
        { text: "世界坐标", value: "world" },
        { text: "本地坐标", value: "local" }
      ],
      value: controlsState.space
    }).on("change", (e) => {
      controlsState.space = e.value;
    });
    pane.addBlade({
      view: "list",
      label: "轴",
      options: [
        { text: "X", value: "X" },
        { text: "Y", value: "Y" },
        { text: "Z", value: "Z" },
        { text: "XY", value: "XY" },
        { text: "YZ", value: "YZ" },
        { text: "XZ", value: "XZ" },
        { text: "XYZ", value: "XYZ" }
      ],
      value: controlsState.axis
    });
    pane.addBinding(controlsState, "size", {
      label: "大小",
      step: 0.01,
      min: 0,
      max: 10
    });
    pane.addBinding(controlsState, "showX", { label: "显示X轴" });
    pane.addBinding(controlsState, "showY", { label: "显示Y轴" });
    pane.addBinding(controlsState, "showZ", { label: "显示Z轴" });
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createBlock(_component_TresCanvas, _mergeProps(gl, {
        ref_key: "context",
        ref: context,
        "window-size": ""
      }), {
        default: _withCtx(() => [
          _cache[4] || (_cache[4] = _createElementVNode("TresPerspectiveCamera", { position: [3, 3, 3] }, null, -1)),
          _createVNode(_unref(Kk), { "make-default": "" }),
          _createElementVNode("TresMesh", {
            ref_key: "boxRef",
            ref: boxRef,
            position: [-2, 1, 0],
            onClick: _cache[0] || (_cache[0] = ($event) => changeObject(boxRef.value))
          }, [..._cache[2] || (_cache[2] = [
            _createElementVNode("TresBoxGeometry", null, null, -1),
            _createElementVNode("TresMeshNormalMaterial", null, null, -1)
          ])], 512),
          transformRef.value ? (_openBlock(), _createBlock(_unref(Qk), _mergeProps({
            key: 0,
            object: transformRef.value
          }, controlsState), null, 16, ["object"])) : _createCommentVNode("", true),
          _createElementVNode("TresMesh", {
            ref_key: "sphereRef",
            ref: sphereRef,
            position: [2, 1, 0],
            onClick: _cache[1] || (_cache[1] = ($event) => changeObject(sphereRef.value))
          }, [..._cache[3] || (_cache[3] = [
            _createElementVNode("TresSphereGeometry", null, null, -1),
            _createElementVNode("TresMeshNormalMaterial", null, null, -1)
          ])], 512),
          _cache[5] || (_cache[5] = _createElementVNode("TresAmbientLight", { intensity: 1 }, null, -1)),
          _cache[6] || (_cache[6] = _createElementVNode("TresGridHelper", null, null, -1))
        ]),
        _: 1
      }, 16);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=transformControls.B3xqqDWW1767105581793.js.map
