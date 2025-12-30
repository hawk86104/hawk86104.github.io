import { importShared, Fs, Kk } from './index.BxB45aCK1767105581793.js';
import { _sfc_main as _sfc_main$4 } from './reflectorMesh.vue_vue_type_script_setup_true_lang.C0JOAmqn1767105581793.js';
import { _sfc_main$6 as _sfc_main$3 } from './generalFont.vue_vue_type_script_setup_true_lang.DqoG1H6g1767105581793.js';
import './default.vue_vue_type_script_setup_true_lang.DQGKkIwV1767105581793.js';
import './three-mesh-ui.module.CjQAT-M_1767105581793.js';
import './domPanel.vue_vue_type_style_index_0_lang.dV59iE041767105581793.js';
import './customShaderMaterial.vue_vue_type_script_setup_true_lang.rDMIDGqx1767105581793.js';
import './index.vue_vue_type_script_setup_true_lang.D7-hpzmy1767105581793.js';
import { useGLTF } from './index.CTrIPOkZ1767105581793.js';
import { _sfc_main as _sfc_main$2 } from './cloudPoints.vue_vue_type_script_setup_true_lang.BO607L2f1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';

const {withAsyncContext:_withAsyncContext,defineComponent:_defineComponent$1} = await importShared('vue');

const {unref:_unref$1,createElementVNode:_createElementVNode$1,createVNode:_createVNode$1,Fragment:_Fragment$1,openBlock:_openBlock$1,createElementBlock:_createElementBlock$1} = await importShared('vue');

const _hoisted_1 = ["object"];
const {toRaw} = await importShared('vue');
const {Plane,Vector3} = await importShared('three');
const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "planeClipping",
  async setup(__props) {
    let __temp, __restore;
    const { renderer } = Fs();
    renderer.localClippingEnabled = true;
    const { nodes } = ([__temp, __restore] = _withAsyncContext(() => useGLTF(
      `${"https://opensource.cdn.icegl.cn"}/model/industry4/plane/scene.gltf`
    )), __temp = await __temp, __restore(), __temp);
    const floor = nodes.Sketchfab_model.getObjectByName("Floor");
    floor.removeFromParent();
    const cubeAvion = nodes.Sketchfab_model.getObjectByName("Cube006_Avion_0");
    cubeAvion.castShadow = true;
    const clipPlanes = [
      new Plane(new Vector3(1, 0, 0), 0),
      new Plane(new Vector3(0, 0, -1), 0)
    ];
    cubeAvion.material.clipIntersection = true;
    cubeAvion.material.clippingPlanes = clipPlanes;
    const cubeMoteur = nodes.Sketchfab_model.getObjectByName("Cube006_M_Moteur_0");
    cubeMoteur.material.clipIntersection = true;
    cubeMoteur.material.clippingPlanes = clipPlanes;
    const cubeCSBlack = nodes.Sketchfab_model.getObjectByName("CS_Black_0");
    const paneControl = new Pane({
      title: "裁剪参数",
      expanded: true
    });
    paneControl.addBinding(clipPlanes[0], "constant", {
      label: "x",
      min: -200,
      max: 200,
      step: 1
    });
    paneControl.addBinding(clipPlanes[1], "constant", {
      label: "y",
      min: -200,
      max: 250,
      step: 1
    });
    return (_ctx, _cache) => {
      return _openBlock$1(), _createElementBlock$1(_Fragment$1, null, [
        _createElementVNode$1("primitive", {
          object: toRaw(_unref$1(nodes).Sketchfab_model)
        }, null, 8, _hoisted_1),
        _createVNode$1(_sfc_main$2, {
          isRemoveSrc: "",
          model: toRaw(_unref$1(cubeCSBlack)),
          color: "#fff"
        }, null, 8, ["model"])
      ], 64);
    };
  }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {unref:_unref,createVNode:_createVNode,createElementVNode:_createElementVNode,Suspense:_Suspense,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,resolveComponent:_resolveComponent,Fragment:_Fragment,createElementBlock:_createElementBlock} = await importShared('vue');

const {shallowRef,watchEffect,reactive} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "planeClipping",
  setup(__props) {
    const configState = reactive({
      mirrorSize: 900,
      gridSize: 880,
      mirrorColor: "#efefef",
      divisions: 10,
      //网格密度							 初始化时设置
      colorCenterLine: "#444444",
      //网格颜色 中心的XZ轴		  初始化时设置
      colorGrid: "#888888"
      //网格颜色							 初始化时设置
    });
    const TDirectionalLight = shallowRef();
    watchEffect(() => {
      if (TDirectionalLight.value) {
        TDirectionalLight.value.shadow.mapSize.set(1e3, 1e3);
        TDirectionalLight.value.shadow.camera.near = 0.1;
        TDirectionalLight.value.shadow.camera.far = 5e3;
        TDirectionalLight.value.shadow.camera.top = 200;
        TDirectionalLight.value.shadow.camera.right = 200;
        TDirectionalLight.value.shadow.camera.left = -200;
        TDirectionalLight.value.shadow.camera.bottom = -200;
        TDirectionalLight.value.shadow.radius = 10;
      }
    });
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createElementBlock(_Fragment, null, [
        _createVNode(_unref(_sfc_main$3)),
        _createVNode(_component_TresCanvas, {
          clearColor: "#333",
          shadows: "",
          "window-size": ""
        }, {
          default: _withCtx(() => [
            _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", {
              position: [500, 330, 500],
              fov: 50,
              near: 0.1,
              far: 1e4
            }, null, -1)),
            _createVNode(_unref(Kk)),
            _cache[1] || (_cache[1] = _createElementVNode("TresAmbientLight", {
              color: "#ffffff",
              intensity: 1
            }, null, -1)),
            _createElementVNode("TresDirectionalLight", {
              ref_key: "TDirectionalLight",
              ref: TDirectionalLight,
              color: "#ffffff",
              position: [300, 300, 350],
              intensity: 6,
              "cast-shadow": ""
            }, null, 512),
            (_openBlock(), _createBlock(_Suspense, null, {
              default: _withCtx(() => [
                _createVNode(_sfc_main$1)
              ]),
              _: 1
            })),
            _createVNode(_sfc_main$4, _normalizeProps(_guardReactiveProps(configState)), null, 16)
          ]),
          _: 1
        })
      ], 64);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=planeClipping.BKRx_2qT1767105581793.js.map
