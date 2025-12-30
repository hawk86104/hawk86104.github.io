import { importShared, _l, Kk } from './index.BxB45aCK1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';
import './reflectorDiffuse.vue_vue_type_script_setup_true_lang.BuW1EemC1767105581793.js';
import { _sfc_main as _sfc_main$2 } from './reflectorDUDV.vue_vue_type_script_setup_true_lang.Cce3m26z1767105581793.js';
import './reflectorShaderMesh.vue_vue_type_script_setup_true_lang.D0T9d0go1767105581793.js';
import './dynamicRotatingBase.vue_vue_type_script_setup_true_lang.B3Epdjc31767105581793.js';
import './whiteFloorMesh.vue_vue_type_script_setup_true_lang.B9UIV1AE1767105581793.js';
import './gridPlusCom.vue_vue_type_script_setup_true_lang.BIqyIrzr1767105581793.js';
import './videoFloor.vue_vue_type_script_setup_true_lang.BEyCiDvU1767105581793.js';
import './digitalGround.vue_vue_type_script_setup_true_lang.BPvRJNY41767105581793.js';
import './imgFloor.vue_vue_type_script_setup_true_lang.D-OHfrvs1767105581793.js';
import './reflectorRoundedBox.vue_vue_type_script_setup_true_lang.B0i-7O7p1767105581793.js';
import './particleBase.vue_vue_type_script_setup_true_lang.BTwaqkrr1767105581793.js';
import './rippleFloor.vue_vue_type_script_setup_true_lang.DU-KS3_f1767105581793.js';
import { useTexture } from './customShaderMaterial.vue_vue_type_script_setup_true_lang.rDMIDGqx1767105581793.js';
import './index.vue_vue_type_script_setup_true_lang.D7-hpzmy1767105581793.js';
import { getlinePoints } from './utils.uRDybWT71767105581793.js';

const {withAsyncContext:_withAsyncContext$1,defineComponent:_defineComponent$1} = await importShared('vue');

const {unref:_unref$1,createElementVNode:_createElementVNode$1,openBlock:_openBlock$1,createElementBlock:_createElementBlock} = await importShared('vue');

const _hoisted_1 = ["args"];
const _hoisted_2 = ["blending", "map", "side", "alphaMap", "color"];
const {watch} = await importShared('vue');
const THREE = await importShared('three');

const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "streamLine",
  props: {
    color: { default: "#2bc4dc" },
    radius: { default: 0.2 },
    speed: { default: 1 },
    radialSegments: { default: 6 },
    tubularSegments: { default: 64 },
    closed: { type: Boolean, default: false },
    clockwise: { type: Boolean, default: true },
    fewNum: { default: 1 },
    linesList: { default: () => [
      [15, 0, 15],
      [15, 0, -15],
      [-15, 0, -15],
      [-15, 0, 10],
      [15, 0, 15]
    ] }
  },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    const pTexture = ([__temp, __restore] = _withAsyncContext$1(() => useTexture("./plugins/digitalCity/image/line2.png")), __temp = await __temp, __restore(), __temp);
    pTexture.needsUpdate = true;
    pTexture.wrapS = pTexture.wrapT = THREE.RepeatWrapping;
    pTexture.repeat.set(props.fewNum, 1);
    pTexture.rotation = props.clockwise ? 0 : Math.PI;
    pTexture.generateMipmaps = false;
    pTexture.magFilter = THREE.NearestFilter;
    let pathPoint = [];
    props.linesList.forEach((point) => {
      pathPoint.push(new THREE.Vector3().fromArray(point));
    });
    const curve = new THREE.CatmullRomCurve3(pathPoint);
    const { onBeforeRender } = _l();
    onBeforeRender(() => {
      pTexture.offset.x += 2e-3 * props.speed;
    });
    watch(
      () => [props.clockwise, props.fewNum],
      ([clockwise, fewNum]) => {
        pTexture.rotation = clockwise ? 0 : Math.PI;
        pTexture.repeat.set(fewNum, 1);
      }
    );
    return (_ctx, _cache) => {
      return _openBlock$1(), _createElementBlock("TresMesh", null, [
        _createElementVNode$1("TresTubeGeometry", {
          args: [_unref$1(curve), props.tubularSegments, props.radius, props.radialSegments, props.closed]
        }, null, 8, _hoisted_1),
        _createElementVNode$1("TresMeshBasicMaterial", {
          blending: THREE.AdditiveBlending,
          map: _unref$1(pTexture),
          side: THREE.DoubleSide,
          alphaMap: _unref$1(pTexture),
          transparent: true,
          color: props.color
        }, null, 8, _hoisted_2)
      ]);
    };
  }
});

const {withAsyncContext:_withAsyncContext,defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,createVNode:_createVNode,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,Suspense:_Suspense,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock,mergeProps:_mergeProps,resolveComponent:_resolveComponent} = await importShared('vue');

const {reactive} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "streamLines",
  async setup(__props) {
    let __temp, __restore;
    const reflectorState = reactive({
      reflectivity: 0.1,
      showGridHelper: false,
      scale: 5
    });
    const configState = reactive({
      color: "#bd01ff",
      radius: 0.2,
      speed: 1,
      tubularSegments: 64,
      radialSegments: 6,
      closed: false,
      clockwise: false,
      fewNum: 1,
      linesList: [
        [15, 0, 15],
        [15, 0, -15],
        [-15, 0, -15],
        [-15, 0, 10],
        [13, 0, 15]
      ]
    });
    const paneControl = new Pane();
    paneControl.addBinding(configState, "color", { label: "流光颜色" });
    paneControl.addBinding(configState, "radius", {
      label: "管道半径",
      min: 0.01,
      max: 1,
      step: 0.01
    });
    paneControl.addBinding(configState, "speed", {
      label: "跑动速度",
      min: 0.1,
      max: 10,
      step: 0.1
    });
    paneControl.addBinding(configState, "tubularSegments", {
      label: "管道路径平滑",
      min: 1,
      max: 100,
      step: 1
    });
    paneControl.addBinding(configState, "radialSegments", {
      label: "管道壁圆润",
      min: 1,
      max: 20,
      step: 1
    });
    paneControl.addBinding(configState, "closed", { label: "闭合管道" });
    paneControl.addBinding(configState, "clockwise", { label: "顺时针流动" });
    paneControl.addBinding(configState, "fewNum", {
      label: "流线数量",
      min: 1,
      max: 10,
      step: 1
    });
    const linePath = ([__temp, __restore] = _withAsyncContext(() => getlinePoints("./plugins/simpleGIS/json/320000_full.json")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createBlock(_component_TresCanvas, {
        clearColor: "#201919",
        "window-size": ""
      }, {
        default: _withCtx(() => [
          _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", {
            position: [25, 25, 25],
            fov: 45,
            near: 0.1,
            far: 1e4
          }, null, -1)),
          _createVNode(_unref(Kk), {
            enableDamping: "",
            autoRotate: ""
          }),
          (_openBlock(), _createBlock(_Suspense, null, {
            default: _withCtx(() => [
              _createVNode(_sfc_main$1, _normalizeProps(_guardReactiveProps(configState)), null, 16)
            ]),
            _: 1
          })),
          (_openBlock(), _createBlock(_Suspense, null, {
            default: _withCtx(() => [
              _createVNode(_sfc_main$1, {
                linesList: _unref(linePath),
                position: [0, 0, -4]
              }, null, 8, ["linesList"])
            ]),
            _: 1
          })),
          (_openBlock(), _createBlock(_Suspense, null, {
            default: _withCtx(() => [
              _createVNode(_unref(_sfc_main$2), _mergeProps({ position: [0, -0.5, 0] }, reflectorState), null, 16)
            ]),
            _: 1
          }))
        ]),
        _: 1
      });
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=streamLines.h7ddbKml1767105581793.js.map
