import { importShared, NA, Uk, _l, Kk } from './index.BxB45aCK1767105581793.js';
import { _sfc_main$6 as _sfc_main$3 } from './generalFont.vue_vue_type_script_setup_true_lang.DqoG1H6g1767105581793.js';
import './default.vue_vue_type_script_setup_true_lang.DQGKkIwV1767105581793.js';
import './three-mesh-ui.module.CjQAT-M_1767105581793.js';
import './domPanel.vue_vue_type_style_index_0_lang.dV59iE041767105581793.js';
import { _sfc_main as _sfc_main$4 } from './model.vue_vue_type_script_setup_true_lang.CEnsjPVr1767105581793.js';

const {defineComponent:_defineComponent$2} = await importShared('vue');

const {unref:_unref$2,openBlock:_openBlock$2,createElementBlock:_createElementBlock$2,createCommentVNode:_createCommentVNode$1,mergeProps:_mergeProps$1,createVNode:_createVNode$2,Suspense:_Suspense$1,withCtx:_withCtx$2,createBlock:_createBlock$1} = await importShared('vue');

const _hoisted_1$1 = ["rotate-x"];
const _hoisted_2$1 = ["object"];
const {watch: watch$1} = await importShared('vue');

const _sfc_main$2 = /* @__PURE__ */ _defineComponent$2({
  __name: "floorText",
  setup(__props) {
    let floor = null;
    const { state: pState, nodes } = NA(
      `${"https://opensource.cdn.icegl.cn"}/model/floor/redTextFloor/scene.gltf`,
      { draco: true, decoderPath: "./draco/" }
    );
    watch$1(
      () => nodes.value,
      (nodesValue) => {
        if (!nodesValue) return;
        floor = nodesValue.Sketchfab_model.getObjectByName("floor_grid_07_-_Default_0");
      }
    );
    const t3dConfig = {
      size: 16,
      height: 3,
      curveSegments: 5,
      bevelEnabled: true,
      bevelThickness: 0.05,
      bevelSize: 0.12,
      bevelOffset: 0.2,
      bevelSegments: 4
    };
    return (_ctx, _cache) => {
      return _openBlock$2(), _createElementBlock$2("TresGroup", {
        "rotate-x": -Math.PI / 2
      }, [
        _unref$2(pState) ? (_openBlock$2(), _createElementBlock$2("primitive", {
          key: 0,
          object: _unref$2(floor),
          scale: 3,
          "receive-shadow": ""
        }, null, 8, _hoisted_2$1)) : _createCommentVNode$1("", true),
        (_openBlock$2(), _createBlock$1(_Suspense$1, null, {
          default: _withCtx$2(() => [
            _createVNode$2(_unref$2(Uk), _mergeProps$1({
              text: "DFS 230A-1 新型滑翔机",
              position: [-145, -265, 2]
            }, t3dConfig, {
              "cast-shadow": "",
              font: ("https://opensource.cdn.icegl.cn") + "/fonts/FZLanTingHeiS-UL-GB_Regular.json",
              center: ""
            }), null, 16, ["font"])
          ]),
          _: 1
        }))
      ], 8, _hoisted_1$1);
    };
  }
});

const {defineComponent:_defineComponent$1} = await importShared('vue');

const {unref:_unref$1,createElementVNode:_createElementVNode$1,mergeProps:_mergeProps,withCtx:_withCtx$1,createVNode:_createVNode$1,Suspense:_Suspense,openBlock:_openBlock$1,createBlock:_createBlock,createElementBlock:_createElementBlock$1,createCommentVNode:_createCommentVNode} = await importShared('vue');

const _hoisted_1 = { key: 0 };
const _hoisted_2 = ["object", "position-z", "rotation-z"];
const _hoisted_3 = ["object", "position-z", "rotation-y", "rotation-z"];
const _hoisted_4 = ["color", "emissive"];
const {Color} = await importShared('three');

const {ref,watch} = await importShared('vue');

const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "arrow2.5D",
  props: {
    textRotation: { default: [0, 0, 0] },
    text: { default: "文本" },
    zRoom: { default: 5 },
    arrScale: { default: [2, 2, 0.8] },
    color: { default: "#9a7a4d" }
  },
  setup(__props) {
    const props = __props;
    const { state: pState, nodes } = NA("./plugins/UIdemo/model/arrowWhite2.5d.glb");
    watch(
      () => nodes.value,
      (nodes2) => {
        if (!nodes2) return;
        console.log(nodes2.RootNode.value);
        nodes2.RootNode.scale.set(props.arrScale[0], props.arrScale[1], props.arrScale[2]);
        nodes2.RootNode.children[0].children[0].material.color = new Color(props.color);
        nodes2.RootNode.children[0].children[0].material.emissive = new Color(props.color);
        nodes2.RootNode.children[0].children[0].castShadow = true;
        nodes2.RootNode.children[0].children[0].roughness = 0;
        nodes2.RootNode.children[1].children[0].material.color = new Color(props.color);
        nodes2.RootNode.children[1].children[0].material.emissive = new Color(props.color);
        nodes2.RootNode.children[1].children[0].castShadow = true;
        nodes2.RootNode.children[1].children[0].roughness = 0;
      }
    );
    const t3dConfig = {
      size: 0.7,
      height: 0.1,
      curveSegments: 5,
      bevelEnabled: true,
      bevelThickness: 0.05,
      bevelSize: 6e-3,
      bevelOffset: 0.02,
      bevelSegments: 4
    };
    let rotationZnum = ref(0);
    const { onRender } = _l();
    onRender(({ delta }) => {
      rotationZnum.value += delta * 2;
    });
    return (_ctx, _cache) => {
      return _unref$1(pState) ? (_openBlock$1(), _createElementBlock$1("TresGroup", _hoisted_1, [
        _createElementVNode$1("primitive", {
          object: _unref$1(nodes).RootNode,
          "position-z": props.zRoom,
          "rotation-z": _unref$1(rotationZnum)
        }, null, 8, _hoisted_2),
        _createElementVNode$1("primitive", {
          object: _unref$1(nodes).RootNode.clone(),
          "position-z": -props.zRoom,
          "rotation-y": -Math.PI,
          "rotation-z": _unref$1(rotationZnum)
        }, null, 8, _hoisted_3),
        (_openBlock$1(), _createBlock(_Suspense, null, {
          default: _withCtx$1(() => [
            _createVNode$1(_unref$1(Uk), _mergeProps({
              text: props.text,
              position: [0, 0.2, 0]
            }, t3dConfig, {
              "cast-shadow": "",
              rotation: props.textRotation,
              font: ("https://opensource.cdn.icegl.cn") + "/fonts/FZLanTingHeiS-UL-GB_Regular.json",
              center: ""
            }), {
              default: _withCtx$1(() => [
                _createElementVNode$1("TresMeshStandardMaterial", {
                  color: props.color,
                  emissive: props.color
                }, null, 8, _hoisted_4)
              ]),
              _: 1
            }, 16, ["text", "rotation", "font"])
          ]),
          _: 1
        }))
      ])) : _createCommentVNode("", true);
    };
  }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {unref:_unref,createVNode:_createVNode,createElementVNode:_createElementVNode,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,resolveComponent:_resolveComponent,withCtx:_withCtx,Fragment:_Fragment,openBlock:_openBlock,createElementBlock:_createElementBlock} = await importShared('vue');

const THREE = await importShared('three');
const {shallowRef,watchEffect} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "sizeMark",
  setup(__props) {
    const TDirectionalLight = shallowRef();
    watchEffect(() => {
      if (TDirectionalLight.value) {
        TDirectionalLight.value.shadow.mapSize.set(2048, 2048);
        TDirectionalLight.value.shadow.camera.near = 0.1;
        TDirectionalLight.value.shadow.camera.far = 5e3;
        TDirectionalLight.value.shadow.camera.top = 500;
        TDirectionalLight.value.shadow.camera.right = 500;
        TDirectionalLight.value.shadow.camera.left = -500;
        TDirectionalLight.value.shadow.camera.bottom = -500;
        TDirectionalLight.value.shadow.radius = 2;
      }
    });
    const controlsState = {
      enableDamping: true,
      dampingFactor: 0.05,
      autoRotate: true,
      autoRotateSpeed: 2
    };
    const gl = {
      clearColor: "#999",
      outputColorSpace: THREE.SRGBColorSpace,
      toneMapping: THREE.ACESFilmicToneMapping,
      toneMappingExposure: 1.8,
      windowSize: true,
      powerPreference: "high-performance",
      // antialias: true,
      shadows: true
      // useLegacyLights: false,
      // physicallyCorrectLights: true,
    };
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createElementBlock(_Fragment, null, [
        _createVNode(_unref(_sfc_main$3)),
        _createVNode(_component_TresCanvas, _normalizeProps(_guardReactiveProps(gl)), {
          default: _withCtx(() => [
            _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", {
              position: [-100, 800, 500],
              fov: 50,
              near: 0.1,
              far: 1e4
            }, null, -1)),
            _createVNode(_unref(Kk), _normalizeProps(_guardReactiveProps(controlsState)), null, 16),
            _cache[1] || (_cache[1] = _createElementVNode("TresAmbientLight", {
              color: "#ffffff",
              intensity: 2
            }, null, -1)),
            _createElementVNode("TresDirectionalLight", {
              ref_key: "TDirectionalLight",
              ref: TDirectionalLight,
              color: "#ffffff",
              position: [260, 260, 350],
              intensity: 6,
              "cast-shadow": ""
            }, null, 512),
            _createVNode(_sfc_main$4),
            _createVNode(_sfc_main$2),
            _createVNode(_sfc_main$1, {
              position: [230, 10, 0],
              scale: 30,
              text: "长:86m",
              textRotation: [-Math.PI / 5, 0, 0]
            }, null, 8, ["textRotation"]),
            _createVNode(_sfc_main$1, {
              position: [0, 10, 230],
              scale: 30,
              text: "宽:62m",
              rotation: [0, -Math.PI / 2, Math.PI / 5],
              zRoom: 3,
              textRotation: [-Math.PI / 5, Math.PI / 2, Math.PI / 5],
              arrScale: [2, 2, 0.4]
            }, null, 8, ["rotation", "textRotation"]),
            _createVNode(_sfc_main$1, {
              position: [-230, 96, 0],
              scale: 30,
              text: "高:46m",
              rotation: [Math.PI / 2, 0, 0],
              zRoom: 2,
              arrScale: [2, 2, 0.4],
              textRotation: [-Math.PI / 1.5, 0, 0]
            }, null, 8, ["rotation", "textRotation"])
          ]),
          _: 1
        }, 16)
      ], 64);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=sizeMark.BjIilwbY1767105581793.js.map
