import { importShared, kk, useWindowSize, Kk } from './index.BxB45aCK1767105581793.js';
import { _sfc_main as _sfc_main$f } from './viewportGizmo.vue_vue_type_script_setup_true_lang.Df9F-KR41767105581793.js';
import { instance } from './Resource.Dxl2bF_-1767105581793.js';
import { _sfc_main as _sfc_main$b, loading$2 as loading } from './generalFont.vue_vue_type_script_setup_true_lang.DqoG1H6g1767105581793.js';
import './default.vue_vue_type_script_setup_true_lang.DQGKkIwV1767105581793.js';
import './three-mesh-ui.module.CjQAT-M_1767105581793.js';
import './domPanel.vue_vue_type_style_index_0_lang.dV59iE041767105581793.js';
import './reflectorDiffuse.vue_vue_type_script_setup_true_lang.BuW1EemC1767105581793.js';
import './reflectorDUDV.vue_vue_type_script_setup_true_lang.Cce3m26z1767105581793.js';
import './reflectorShaderMesh.vue_vue_type_script_setup_true_lang.D0T9d0go1767105581793.js';
import './dynamicRotatingBase.vue_vue_type_script_setup_true_lang.B3Epdjc31767105581793.js';
import { _sfc_main as _sfc_main$7 } from './whiteFloorMesh.vue_vue_type_script_setup_true_lang.B9UIV1AE1767105581793.js';
import { _sfc_main as _sfc_main$6 } from './gridPlusCom.vue_vue_type_script_setup_true_lang.BIqyIrzr1767105581793.js';
import './videoFloor.vue_vue_type_script_setup_true_lang.BEyCiDvU1767105581793.js';
import './digitalGround.vue_vue_type_script_setup_true_lang.BPvRJNY41767105581793.js';
import './imgFloor.vue_vue_type_script_setup_true_lang.D-OHfrvs1767105581793.js';
import { _sfc_main as _sfc_main$e } from './reflectorRoundedBox.vue_vue_type_script_setup_true_lang.B0i-7O7p1767105581793.js';
import { _sfc_main as _sfc_main$a } from './particleBase.vue_vue_type_script_setup_true_lang.BTwaqkrr1767105581793.js';
import './rippleFloor.vue_vue_type_script_setup_true_lang.DU-KS3_f1767105581793.js';
import { Sky, standardizationMeshCopy } from './forEditor.BxK-3RL21767105581793.js';
import { _t, Yt, to, vo } from './tres-post-processing.CBYUVLxv1767105581793.js';
import { _sfc_main as _sfc_main$8 } from './staticWater.vue_vue_type_script_setup_true_lang.4m35QlAa1767105581793.js';
import './iceFloor.vue_vue_type_script_setup_true_lang.Bffk1fiK1767105581793.js';
import './gerstnerWater.vue_vue_type_script_setup_true_lang.CK3FxufO1767105581793.js';
import './customWaterMesh.vue_vue_type_script_setup_true_lang.DP0YOBvn1767105581793.js';
import './radraB.vue_vue_type_script_setup_true_lang.CkKBJ52L1767105581793.js';
import { _sfc_main$5 as _sfc_main$c } from './coneAnchorMeshB.vue_vue_type_script_setup_true_lang.BRSVhWtw1767105581793.js';
import './precipitation.vue_vue_type_script_setup_true_lang.DHN0dZRK1767105581793.js';
import './cloudMesh.vue_vue_type_script_setup_true_lang.t0Z5pxFM1767105581793.js';
import './fireA.vue_vue_type_script_setup_true_lang.K7p2c56E1767105581793.js';
import './fireB.vue_vue_type_script_setup_true_lang.BvbRi80N1767105581793.js';
import './smokeA.vue_vue_type_script_setup_true_lang.DU_w_c7I1767105581793.js';
import './rippleMesh.vue_vue_type_script_setup_true_lang.BMAAJsoC1767105581793.js';
import './regionGlow.vue_vue_type_script_setup_true_lang.BrZi8ehe1767105581793.js';
import { _sfc_main as _sfc_main$9 } from './fencePlus.vue_vue_type_script_setup_true_lang.CoJnUgMe1767105581793.js';
import './utils.-sNu4bkd1767105581793.js';
import './flexiblePipe.vue_vue_type_script_setup_true_lang.BAUqTDRy1767105581793.js';
import { _sfc_main as _sfc_main$d } from './flexiblePipe2.vue_vue_type_script_setup_true_lang.ExGFogAl1767105581793.js';
import './material.vue_vue_type_script_setup_true_lang.KsUSDVCK1767105581793.js';

const {defineComponent:_defineComponent$5} = await importShared('vue');

const {unref:_unref$5,mergeProps:_mergeProps$2,createVNode:_createVNode$2,normalizeProps:_normalizeProps$2,guardReactiveProps:_guardReactiveProps$1,Suspense:_Suspense$2,withCtx:_withCtx$3,openBlock:_openBlock$5,createBlock:_createBlock$3,createElementVNode:_createElementVNode$2,Fragment:_Fragment$2,createElementBlock:_createElementBlock$4} = await importShared('vue');

const _hoisted_1$3 = { position: [0, -2e-3, 0] };
const _sfc_main$5 = /* @__PURE__ */ _defineComponent$5({
  __name: "floor",
  props: {
    fState: { default: {} },
    gridState: { default: {} }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return _openBlock$5(), _createElementBlock$4(_Fragment$2, null, [
        _createVNode$2(_unref$5(_sfc_main$6), _mergeProps$2({ args: [3, 3] }, _ctx.gridState, { position: [0, 0.01, 0] }), null, 16),
        _createElementVNode$2("TresGroup", _hoisted_1$3, [
          (_openBlock$5(), _createBlock$3(_Suspense$2, null, {
            default: _withCtx$3(() => [
              _createVNode$2(_unref$5(_sfc_main$7), _normalizeProps$2(_guardReactiveProps$1(_ctx.fState)), null, 16)
            ]),
            _: 1
          }))
        ])
      ], 64);
    };
  }
});

const {defineComponent:_defineComponent$4} = await importShared('vue');

const {unref:_unref$4,createElementVNode:_createElementVNode$1,Fragment:_Fragment$1,openBlock:_openBlock$4,createElementBlock:_createElementBlock$3} = await importShared('vue');

const _hoisted_1$2 = ["object"];
const _hoisted_2 = ["object"];
const THREE$3 = await importShared('three');

const {watch} = await importShared('vue');
const _sfc_main$4 = /* @__PURE__ */ _defineComponent$4({
  __name: "skylight",
  props: {
    curTime: {},
    direct: {},
    intensity: { default: 1 },
    shadowIntensity: { default: 1 }
  },
  setup(__props) {
    const props = __props;
    const sky = new Sky();
    sky.scale.setScalar(500);
    const skyUniforms = sky.material.uniforms;
    skyUniforms["turbidity"].value = 10;
    skyUniforms["rayleigh"].value = 1;
    skyUniforms["mieCoefficient"].value = 5e-3;
    skyUniforms["mieDirectionalG"].value = 0.9;
    const sun = new THREE$3.Vector3();
    const light = new THREE$3.DirectionalLight(16777215, props.intensity);
    light.castShadow = true;
    light.shadow.mapSize.width = 2048;
    light.shadow.mapSize.height = 2048;
    light.shadow.camera.left = -50;
    light.shadow.camera.right = 50;
    light.shadow.camera.top = 50;
    light.shadow.camera.bottom = -50;
    light.shadow.radius = props.shadowIntensity;
    function updateSun() {
      const hour = props.curTime;
      let theta;
      let lightIntensity;
      let azimuth = 0.15;
      const t = (hour - 6) / 12;
      const elevation = Math.PI * 0.25 * Math.sin(t * Math.PI);
      theta = Math.PI / 2 - elevation;
      lightIntensity = 5 + 0.5 * Math.sin(t * Math.PI);
      azimuth = Math.PI * (props.direct + t);
      sun.setFromSphericalCoords(1, theta, azimuth);
      sky.material.uniforms["sunPosition"].value.copy(sun);
      light.position.copy(sun).multiplyScalar(400);
      light.intensity = lightIntensity * props.intensity;
      light.shadow.intensity = props.shadowIntensity;
    }
    watch(
      () => [props.curTime, props.direct, props.intensity, props.shadowIntensity],
      () => {
        updateSun();
      },
      { immediate: true }
    );
    return (_ctx, _cache) => {
      return _openBlock$4(), _createElementBlock$3(_Fragment$1, null, [
        _createElementVNode$1("primitive", { object: _unref$4(sky) }, null, 8, _hoisted_1$2),
        _createElementVNode$1("primitive", { object: _unref$4(light) }, null, 8, _hoisted_2)
      ], 64);
    };
  }
});

const {defineComponent:_defineComponent$3} = await importShared('vue');

const {unref:_unref$3,openBlock:_openBlock$3,createElementBlock:_createElementBlock$2} = await importShared('vue');

const _hoisted_1$1 = ["object"];
const {ref} = await importShared('vue');

const THREE$2 = await importShared('three');
const _sfc_main$3 = /* @__PURE__ */ _defineComponent$3({
  __name: "glbsList",
  setup(__props) {
    const setupLightingForModel = (selectedMesh, value, type) => {
      selectedMesh.traverse((child) => {
        if (child.isMesh) {
          child[type] = value;
        }
      });
    };
    const syncMeshProp = (glb, meshProp, animations) => {
      glb.uuid = meshProp.uuid;
      glb.name = meshProp.name;
      glb.rotation.set(meshProp.rotation.x, meshProp.rotation.y, meshProp.rotation.z);
      glb.position.set(meshProp.position.x, meshProp.position.y, meshProp.position.z);
      glb.scale.set(meshProp.scale.x, meshProp.scale.y, meshProp.scale.z);
      glb.visible = meshProp.visible;
      glb.renderOrder = meshProp.renderOrder;
      glb.castShadow = meshProp.castShadow;
      glb.receiveShadow = meshProp.receiveShadow;
      setupLightingForModel(glb, meshProp.castShadow, "castShadow");
      setupLightingForModel(glb, meshProp.receiveShadow, "receiveShadow");
      if (animations && meshProp.actionList && meshProp.actionList.actions && Object.keys(meshProp.actionList.actions).length > 0) {
        const { mixer, actions } = kk(ref(animations), glb);
        mixer.value.timeScale = meshProp.actionList.timeScale || 1;
        Object.keys(meshProp.actionList.actions).forEach((actionName) => {
          if (actions[actionName]) {
            if (meshProp.actionList.actions[actionName] !== 0) {
              actions[actionName].play();
            }
          }
        });
      }
    };
    const glbsGroup = new THREE$2.Group();
    const oneglb0_0 = standardizationMeshCopy(instance.getItem("floor.glb").scene);
    const op0_0 = { "uuid": "576b1cc5-d02e-4b25-86f1-876392c10e8f", "rotation": { "x": 0, "y": 0, "z": 0 }, "visible": true, "position": { "x": 8.787, "y": 0.019, "z": -1.437 }, "scale": { "x": 4, "y": 1, "z": 8 }, "renderOrder": 0, "castShadow": false, "receiveShadow": true, "name": "floor", "actionList": { "timeScale": 1, "actions": {} } };
    syncMeshProp(oneglb0_0, op0_0, instance.getItem("floor.glb").animations);
    glbsGroup.add(oneglb0_0);
    const oneglb0_1 = standardizationMeshCopy(instance.getItem("floor.glb").scene);
    const op0_1 = { "uuid": "e64bc3f2-b46e-4fa0-a3fd-14a0df53bbf0", "rotation": { "x": 0, "y": 0, "z": 0 }, "visible": true, "position": { "x": 4.28, "y": 0.02, "z": 2.61 }, "scale": { "x": 2.5, "y": 1, "z": 2 }, "renderOrder": 0, "castShadow": false, "receiveShadow": true, "name": "floor", "actionList": { "timeScale": 1, "actions": {} } };
    syncMeshProp(oneglb0_1, op0_1, instance.getItem("floor.glb").animations);
    glbsGroup.add(oneglb0_1);
    const oneglb0_2 = standardizationMeshCopy(instance.getItem("floor.glb").scene);
    const op0_2 = { "uuid": "bd279b01-83bc-420f-83bb-928faadebbd5", "rotation": { "x": 0, "y": 0, "z": 0 }, "visible": true, "position": { "x": -1.672, "y": 0.02, "z": 2.61 }, "scale": { "x": 3, "y": 1, "z": 3 }, "renderOrder": 0, "castShadow": false, "receiveShadow": true, "name": "floor", "actionList": { "timeScale": 1, "actions": {} } };
    syncMeshProp(oneglb0_2, op0_2, instance.getItem("floor.glb").animations);
    glbsGroup.add(oneglb0_2);
    const oneglb0_3 = standardizationMeshCopy(instance.getItem("floor.glb").scene);
    const op0_3 = { "uuid": "88d36d98-d9d2-4de1-ac88-372f54809ce4", "rotation": { "x": 0, "y": 0, "z": 0 }, "visible": true, "position": { "x": -0.073, "y": 0.02, "z": -1.597 }, "scale": { "x": 3, "y": 1, "z": 3 }, "renderOrder": 0, "castShadow": false, "receiveShadow": true, "name": "floor", "actionList": { "timeScale": 1, "actions": {} } };
    syncMeshProp(oneglb0_3, op0_3, instance.getItem("floor.glb").animations);
    glbsGroup.add(oneglb0_3);
    const oneglb0_4 = standardizationMeshCopy(instance.getItem("floor.glb").scene);
    const op0_4 = { "uuid": "0bae698e-3dd7-49d0-8da4-77795f689986", "rotation": { "x": 0, "y": 0, "z": 0 }, "visible": true, "position": { "x": 4.025, "y": 0.02, "z": -1.44 }, "scale": { "x": 1.5, "y": 1, "z": 1.5 }, "renderOrder": 0, "castShadow": false, "receiveShadow": true, "name": "floor", "actionList": { "timeScale": 1, "actions": {} } };
    syncMeshProp(oneglb0_4, op0_4, instance.getItem("floor.glb").animations);
    glbsGroup.add(oneglb0_4);
    const oneglb0_5 = standardizationMeshCopy(instance.getItem("floor.glb").scene);
    const op0_5 = { "uuid": "cc5994a9-4ba9-4ce2-a71c-f41802919d80", "rotation": { "x": 0, "y": 0, "z": 0 }, "visible": true, "position": { "x": -2.351, "y": 0.02, "z": -5.746 }, "scale": { "x": 6, "y": 1, "z": 3 }, "renderOrder": 0, "castShadow": false, "receiveShadow": true, "name": "floor", "actionList": { "timeScale": 1, "actions": {} } };
    syncMeshProp(oneglb0_5, op0_5, instance.getItem("floor.glb").animations);
    glbsGroup.add(oneglb0_5);
    const oneglb0_6 = standardizationMeshCopy(instance.getItem("floor.glb").scene);
    const op0_6 = { "uuid": "f8db597e-298e-4adc-9125-2b6a6b835103", "rotation": { "x": 0, "y": 0, "z": 0 }, "visible": true, "position": { "x": 4.788, "y": 0.02, "z": -6.354 }, "scale": { "x": 4, "y": 1, "z": 3 }, "renderOrder": 0, "castShadow": false, "receiveShadow": true, "name": "floor", "actionList": { "timeScale": 1, "actions": {} } };
    syncMeshProp(oneglb0_6, op0_6, instance.getItem("floor.glb").animations);
    glbsGroup.add(oneglb0_6);
    const oneglb1_0 = standardizationMeshCopy(instance.getItem("gasTank.glb").scene);
    const op1_0 = { "uuid": "29b4e0f2-6e7b-4ba8-8dfc-895cc0028994", "rotation": { "x": 0, "y": 1.4900000000000002, "z": 0 }, "visible": true, "position": { "x": 7.79605991910698, "y": 0, "z": 0.251 }, "scale": { "x": 1, "y": 1, "z": 1 }, "renderOrder": 0, "castShadow": true, "receiveShadow": false, "name": "gasTank", "actionList": { "timeScale": 1, "actions": {} } };
    syncMeshProp(oneglb1_0, op1_0, instance.getItem("gasTank.glb").animations);
    glbsGroup.add(oneglb1_0);
    const oneglb1_1 = standardizationMeshCopy(instance.getItem("gasTank.glb").scene);
    const op1_1 = { "uuid": "18b2a5bb-e90f-4457-bb23-b1525e69dbaa", "rotation": { "x": 0, "y": 1.4900000000000002, "z": 0 }, "visible": true, "position": { "x": 7.79605991910698, "y": 0, "z": -1.354 }, "scale": { "x": 1, "y": 1, "z": 1 }, "renderOrder": 0, "castShadow": true, "receiveShadow": false, "name": "gasTank", "actionList": { "timeScale": 1, "actions": {} } };
    syncMeshProp(oneglb1_1, op1_1, instance.getItem("gasTank.glb").animations);
    glbsGroup.add(oneglb1_1);
    const oneglb1_2 = standardizationMeshCopy(instance.getItem("gasTank.glb").scene);
    const op1_2 = { "uuid": "77ce8987-c084-46b5-b85d-98ae345e0801", "rotation": { "x": 0, "y": 1.4900000000000002, "z": 0 }, "visible": true, "position": { "x": 7.79605991910698, "y": 0, "z": 1.722 }, "scale": { "x": 1, "y": 1, "z": 1 }, "renderOrder": 0, "castShadow": true, "receiveShadow": false, "name": "gasTank", "actionList": { "timeScale": 1, "actions": {} } };
    syncMeshProp(oneglb1_2, op1_2, instance.getItem("gasTank.glb").animations);
    glbsGroup.add(oneglb1_2);
    const oneglb1_3 = standardizationMeshCopy(instance.getItem("gasTank.glb").scene);
    const op1_3 = { "uuid": "67da04f6-a95a-4f9b-8adb-67a8d01738db", "rotation": { "x": 0, "y": 1.4900000000000002, "z": 0 }, "visible": true, "position": { "x": 7.79605991910698, "y": 0, "z": -2.984 }, "scale": { "x": 1, "y": 1, "z": 1 }, "renderOrder": 0, "castShadow": true, "receiveShadow": false, "name": "gasTank", "actionList": { "timeScale": 1, "actions": {} } };
    syncMeshProp(oneglb1_3, op1_3, instance.getItem("gasTank.glb").animations);
    glbsGroup.add(oneglb1_3);
    const oneglb1_4 = standardizationMeshCopy(instance.getItem("gasTank.glb").scene);
    const op1_4 = { "uuid": "ec9c2d8c-38dd-4e56-a97e-3daf5a697554", "rotation": { "x": 0, "y": 1.4900000000000002, "z": 0 }, "visible": true, "position": { "x": 7.79605991910698, "y": 0, "z": -4.449 }, "scale": { "x": 1, "y": 1, "z": 1 }, "renderOrder": 0, "castShadow": true, "receiveShadow": false, "name": "gasTank", "actionList": { "timeScale": 1, "actions": {} } };
    syncMeshProp(oneglb1_4, op1_4, instance.getItem("gasTank.glb").animations);
    glbsGroup.add(oneglb1_4);
    const oneglb1_5 = standardizationMeshCopy(instance.getItem("gasTank.glb").scene);
    const op1_5 = { "uuid": "e8d675b4-fd69-4cdd-80fb-d8a93be56dea", "rotation": { "x": 0, "y": 1.4900000000000002, "z": 0 }, "visible": true, "position": { "x": 9.789, "y": 0.045, "z": 1.722 }, "scale": { "x": 1, "y": 1, "z": 1 }, "renderOrder": 0, "castShadow": true, "receiveShadow": false, "name": "gasTank", "actionList": { "timeScale": 1, "actions": {} } };
    syncMeshProp(oneglb1_5, op1_5, instance.getItem("gasTank.glb").animations);
    glbsGroup.add(oneglb1_5);
    const oneglb1_6 = standardizationMeshCopy(instance.getItem("gasTank.glb").scene);
    const op1_6 = { "uuid": "b4d8c0ae-2df7-4fb7-910e-8971a5dddc14", "rotation": { "x": 0, "y": 1.4900000000000002, "z": 0 }, "visible": true, "position": { "x": 9.783, "y": 0, "z": 0.251 }, "scale": { "x": 1, "y": 1, "z": 1 }, "renderOrder": 0, "castShadow": true, "receiveShadow": false, "name": "gasTank", "actionList": { "timeScale": 1, "actions": {} } };
    syncMeshProp(oneglb1_6, op1_6, instance.getItem("gasTank.glb").animations);
    glbsGroup.add(oneglb1_6);
    const oneglb1_7 = standardizationMeshCopy(instance.getItem("gasTank.glb").scene);
    const op1_7 = { "uuid": "d033e173-df6d-4e75-9c7f-a3c8e371ce4c", "rotation": { "x": 0, "y": 1.4900000000000002, "z": 0 }, "visible": true, "position": { "x": 9.792, "y": 0, "z": -1.354 }, "scale": { "x": 1, "y": 1, "z": 1 }, "renderOrder": 0, "castShadow": true, "receiveShadow": false, "name": "gasTank", "actionList": { "timeScale": 1, "actions": {} } };
    syncMeshProp(oneglb1_7, op1_7, instance.getItem("gasTank.glb").animations);
    glbsGroup.add(oneglb1_7);
    const oneglb1_8 = standardizationMeshCopy(instance.getItem("gasTank.glb").scene);
    const op1_8 = { "uuid": "3f8c943b-aa8e-4c80-b71c-41e79d8e0b29", "rotation": { "x": 0, "y": 1.4900000000000002, "z": 0 }, "visible": true, "position": { "x": 9.796, "y": 0, "z": -2.984 }, "scale": { "x": 1, "y": 1, "z": 1 }, "renderOrder": 0, "castShadow": true, "receiveShadow": false, "name": "gasTank", "actionList": { "timeScale": 1, "actions": {} } };
    syncMeshProp(oneglb1_8, op1_8, instance.getItem("gasTank.glb").animations);
    glbsGroup.add(oneglb1_8);
    const oneglb1_9 = standardizationMeshCopy(instance.getItem("gasTank.glb").scene);
    const op1_9 = { "uuid": "cebfed3a-c0e1-4b88-9e26-21dd4095d9f5", "rotation": { "x": 0, "y": 1.4900000000000002, "z": 0 }, "visible": true, "position": { "x": 9.841000000000001, "y": 0, "z": -4.449 }, "scale": { "x": 1, "y": 1, "z": 1 }, "renderOrder": 0, "castShadow": true, "receiveShadow": false, "name": "gasTank", "actionList": { "timeScale": 1, "actions": {} } };
    syncMeshProp(oneglb1_9, op1_9, instance.getItem("gasTank.glb").animations);
    glbsGroup.add(oneglb1_9);
    const oneglb1_10 = standardizationMeshCopy(instance.getItem("gasTank.glb").scene);
    const op1_10 = { "uuid": "d0433574-5a31-481c-b500-1652601535fe", "rotation": { "x": 0, "y": 1.4500000000000006, "z": 0 }, "visible": true, "position": { "x": -1.673, "y": 0.017, "z": 3.528 }, "scale": { "x": 1, "y": 1, "z": 1 }, "renderOrder": 0, "castShadow": true, "receiveShadow": false, "name": "gasTank", "actionList": { "timeScale": 1, "actions": {} } };
    syncMeshProp(oneglb1_10, op1_10, instance.getItem("gasTank.glb").animations);
    glbsGroup.add(oneglb1_10);
    const oneglb2_0 = standardizationMeshCopy(instance.getItem("oilTruck.glb").scene);
    const op2_0 = { "uuid": "26706a27-6570-489c-81f0-b3fa430ab947", "rotation": { "x": 3.141592653589793, "y": -1.5615926535897844, "z": 3.141592653589793 }, "visible": true, "position": { "x": 11.32, "y": 0.122, "z": 1.25 }, "scale": { "x": 1.5, "y": 1.5, "z": 1.5 }, "renderOrder": 0, "castShadow": true, "receiveShadow": false, "name": "oilTruck", "actionList": { "timeScale": 1, "actions": {} } };
    syncMeshProp(oneglb2_0, op2_0, instance.getItem("oilTruck.glb").animations);
    glbsGroup.add(oneglb2_0);
    const oneglb2_1 = standardizationMeshCopy(instance.getItem("oilTruck.glb").scene);
    const op2_1 = { "uuid": "1b039658-4780-46b9-8d13-a0077581aa04", "rotation": { "x": 3.141592653589793, "y": -1.5615926535897844, "z": 3.141592653589793 }, "visible": true, "position": { "x": 11.332, "y": 0.138, "z": -1.32 }, "scale": { "x": 1.5, "y": 1.5, "z": 1.5 }, "renderOrder": 0, "castShadow": true, "receiveShadow": false, "name": "oilTruck", "actionList": { "timeScale": 1, "actions": {} } };
    syncMeshProp(oneglb2_1, op2_1, instance.getItem("oilTruck.glb").animations);
    glbsGroup.add(oneglb2_1);
    const oneglb2_2 = standardizationMeshCopy(instance.getItem("oilTruck.glb").scene);
    const op2_2 = { "uuid": "e4128341-fa43-4652-80eb-90f397e1316d", "rotation": { "x": 3.141592653589793, "y": -1.5615926535897844, "z": 3.141592653589793 }, "visible": true, "position": { "x": 11.339, "y": 0.088, "z": -3.8930000000000002 }, "scale": { "x": 1.5, "y": 1.5, "z": 1.5 }, "renderOrder": 0, "castShadow": true, "receiveShadow": false, "name": "oilTruck", "actionList": { "timeScale": 1, "actions": {} } };
    syncMeshProp(oneglb2_2, op2_2, instance.getItem("oilTruck.glb").animations);
    glbsGroup.add(oneglb2_2);
    const oneglb3_0 = standardizationMeshCopy(instance.getItem("cCringUnit.glb").scene);
    const op3_0 = { "uuid": "72ba200e-284d-4d95-9b8f-705614a7c149", "rotation": { "x": -3.141592653589793, "y": 1.545906008118207, "z": -3.141592653589793 }, "visible": true, "position": { "x": 4.369, "y": 0.036000000000000004, "z": 2.6601508132022422 }, "scale": { "x": 1.5, "y": 1.5, "z": 1.5 }, "renderOrder": 0, "castShadow": true, "receiveShadow": false, "name": "cCringUnit", "actionList": { "timeScale": 1, "actions": {} } };
    syncMeshProp(oneglb3_0, op3_0, instance.getItem("cCringUnit.glb").animations);
    glbsGroup.add(oneglb3_0);
    const oneglb4_0 = standardizationMeshCopy(instance.getItem("house.glb").scene);
    const op4_0 = { "uuid": "85b5bae1-8803-4ad8-902c-df31537030c0", "rotation": { "x": -3.141592653589793, "y": 1.5615926535898086, "z": -3.141592653589793 }, "visible": true, "position": { "x": -1.449, "y": 0.091, "z": 2.003 }, "scale": { "x": 2, "y": 2, "z": 2 }, "renderOrder": 0, "castShadow": true, "receiveShadow": false, "name": "house", "actionList": { "timeScale": 1, "actions": {} } };
    syncMeshProp(oneglb4_0, op4_0, instance.getItem("house.glb").animations);
    glbsGroup.add(oneglb4_0);
    const oneglb5_0 = standardizationMeshCopy(instance.getItem("ccUnit.glb").scene);
    const op5_0 = { "uuid": "9e4abbd0-b245-4a83-b96b-81ce55bebb66", "rotation": { "x": 0, "y": 0, "z": 0 }, "visible": true, "position": { "x": 4.285, "y": 0.914, "z": 2.274 }, "scale": { "x": 0.3, "y": 0.3, "z": 0.3 }, "renderOrder": 0, "castShadow": true, "receiveShadow": false, "name": "ccUnit", "actionList": { "timeScale": 1, "actions": {} } };
    syncMeshProp(oneglb5_0, op5_0, instance.getItem("ccUnit.glb").animations);
    glbsGroup.add(oneglb5_0);
    const oneglb6_0 = standardizationMeshCopy(instance.getItem("oilHeater.glb").scene);
    const op6_0 = { "uuid": "a79ce505-e268-4d34-bfc4-3a516f3efe5d", "rotation": { "x": 0, "y": 0, "z": 0 }, "visible": true, "position": { "x": -0.088834118311226, "y": 0.055, "z": -1.4384752323294805 }, "scale": { "x": 1.5, "y": 1.5, "z": 1.5 }, "renderOrder": 0, "castShadow": true, "receiveShadow": false, "name": "oilHeater", "actionList": { "timeScale": 1, "actions": {} } };
    syncMeshProp(oneglb6_0, op6_0, instance.getItem("oilHeater.glb").animations);
    glbsGroup.add(oneglb6_0);
    const oneglb7_0 = standardizationMeshCopy(instance.getItem("tower.glb").scene);
    const op7_0 = { "uuid": "bdb80b7c-76db-42e4-b368-b6a214d786cc", "rotation": { "x": 0, "y": 0, "z": 0 }, "visible": true, "position": { "x": 4.0600000000000005, "y": 0, "z": -1.391 }, "scale": { "x": 0.8, "y": 0.8, "z": 0.8 }, "renderOrder": 0, "castShadow": true, "receiveShadow": false, "name": "tower", "actionList": { "timeScale": 1, "actions": {} } };
    syncMeshProp(oneglb7_0, op7_0, instance.getItem("tower.glb").animations);
    glbsGroup.add(oneglb7_0);
    const oneglb8_0 = standardizationMeshCopy(instance.getItem("oilTank.glb").scene);
    const op8_0 = { "uuid": "e9ff16a4-27a6-4f44-9b53-3e4da147d9d8", "rotation": { "x": 0, "y": 0, "z": 0 }, "visible": true, "position": { "x": -3.709, "y": 0.064, "z": -5.523 }, "scale": { "x": 3, "y": 3, "z": 3 }, "renderOrder": 0, "castShadow": true, "receiveShadow": false, "name": "oilTank", "actionList": { "timeScale": 1, "actions": {} } };
    syncMeshProp(oneglb8_0, op8_0, instance.getItem("oilTank.glb").animations);
    glbsGroup.add(oneglb8_0);
    const oneglb8_1 = standardizationMeshCopy(instance.getItem("oilTank.glb").scene);
    const op8_1 = { "uuid": "2bf85ed6-a4ea-4ffb-b64c-5c5633d3fe34", "rotation": { "x": 0, "y": 0, "z": 0 }, "visible": true, "position": { "x": -0.904, "y": 0.043000000000000003, "z": -5.523 }, "scale": { "x": 3, "y": 3, "z": 3 }, "renderOrder": 0, "castShadow": true, "receiveShadow": false, "name": "oilTank", "actionList": { "timeScale": 1, "actions": {} } };
    syncMeshProp(oneglb8_1, op8_1, instance.getItem("oilTank.glb").animations);
    glbsGroup.add(oneglb8_1);
    const oneglb9_0 = standardizationMeshCopy(instance.getItem("machine.glb").scene);
    const op9_0 = { "uuid": "c77534fe-5b7d-4183-b79f-5bc19e23328d", "rotation": { "x": 3.141592653589793, "y": -1.5315926535897928, "z": 3.141592653589793 }, "visible": true, "position": { "x": 3.93, "y": 0, "z": -6.9670000000000005 }, "scale": { "x": 1.8, "y": 1.8, "z": 1.8 }, "renderOrder": 0, "castShadow": true, "receiveShadow": false, "name": "machine", "actionList": { "timeScale": 1, "actions": {} } };
    syncMeshProp(oneglb9_0, op9_0, instance.getItem("machine.glb").animations);
    glbsGroup.add(oneglb9_0);
    const oneglb10_0 = standardizationMeshCopy(instance.getItem("srUnit.glb").scene);
    const op10_0 = { "uuid": "fc93bb6b-b3cd-4cc3-ba49-4f3549c71a53", "rotation": { "x": 0, "y": -0.23000000000000012, "z": 0 }, "visible": true, "position": { "x": 5.85508464374394, "y": 0, "z": -6.939710421081546 }, "scale": { "x": 1, "y": 1, "z": 1 }, "renderOrder": 0, "castShadow": true, "receiveShadow": false, "name": "srUnit", "actionList": { "timeScale": 1, "actions": {} } };
    syncMeshProp(oneglb10_0, op10_0, instance.getItem("srUnit.glb").animations);
    glbsGroup.add(oneglb10_0);
    const oneglb11_0 = standardizationMeshCopy(instance.getItem("tank2.glb").scene);
    const op11_0 = { "uuid": "04a1ac61-18c3-4406-808c-e867b18df1b8", "rotation": { "x": 0, "y": 0, "z": 0 }, "visible": true, "position": { "x": 5.809887141081189, "y": 0, "z": -5.567 }, "scale": { "x": 1.5, "y": 1.5, "z": 1.5 }, "renderOrder": 0, "castShadow": true, "receiveShadow": false, "name": "tank2", "actionList": { "timeScale": 1, "actions": {} } };
    syncMeshProp(oneglb11_0, op11_0, instance.getItem("tank2.glb").animations);
    glbsGroup.add(oneglb11_0);
    const oneglb12_0 = standardizationMeshCopy(instance.getItem("gtUnit.glb").scene);
    const op12_0 = { "uuid": "f3b12e77-c792-47dd-ab80-68bc3ab83d7c", "rotation": { "x": 0, "y": 0, "z": 0 }, "visible": true, "position": { "x": 3.295, "y": 0, "z": -5.45 }, "scale": { "x": 0.5, "y": 0.5, "z": 0.5 }, "renderOrder": 0, "castShadow": true, "receiveShadow": false, "name": "gtUnit", "actionList": { "timeScale": 1, "actions": {} } };
    syncMeshProp(oneglb12_0, op12_0, instance.getItem("gtUnit.glb").animations);
    glbsGroup.add(oneglb12_0);
    const oneglb12_1 = standardizationMeshCopy(instance.getItem("gtUnit.glb").scene);
    const op12_1 = { "uuid": "2856dbbc-e196-4cea-b56e-d56df961fc7a", "rotation": { "x": 0, "y": 0, "z": 0 }, "visible": true, "position": { "x": 4.188, "y": 0, "z": -5.45 }, "scale": { "x": 0.5, "y": 0.5, "z": 0.5 }, "renderOrder": 0, "castShadow": true, "receiveShadow": false, "name": "gtUnit", "actionList": { "timeScale": 1, "actions": {} } };
    syncMeshProp(oneglb12_1, op12_1, instance.getItem("gtUnit.glb").animations);
    glbsGroup.add(oneglb12_1);
    const oneglb13_0 = standardizationMeshCopy(instance.getItem("flaringDevice.glb").scene);
    const op13_0 = { "uuid": "5bcd1a21-20c2-4a1f-b7e3-78c24d53a57b", "rotation": { "x": -3.141592653589793, "y": 0.02159265358979313, "z": -3.141592653589793 }, "visible": true, "position": { "x": 5.635, "y": 0.079, "z": -2.734 }, "scale": { "x": 1, "y": 1, "z": 1 }, "renderOrder": 0, "castShadow": true, "receiveShadow": false, "name": "flaringDevice", "actionList": { "timeScale": 1, "actions": {} } };
    syncMeshProp(oneglb13_0, op13_0, instance.getItem("flaringDevice.glb").animations);
    glbsGroup.add(oneglb13_0);
    return (_ctx, _cache) => {
      return _openBlock$3(), _createElementBlock$2("primitive", { object: _unref$3(glbsGroup) }, null, 8, _hoisted_1$1);
    };
  }
});

const {defineComponent:_defineComponent$2} = await importShared('vue');

const {unref:_unref$2,normalizeProps:_normalizeProps$1,openBlock:_openBlock$2,createBlock:_createBlock$2,mergeProps:_mergeProps$1,createCommentVNode:_createCommentVNode$1,withCtx:_withCtx$2,Suspense:_Suspense$1} = await importShared('vue');

const {computed: computed$1} = await importShared('vue');

const THREE$1 = await importShared('three');
const _sfc_main$2 = /* @__PURE__ */ _defineComponent$2({
  __name: "tresProcessing",
  props: {
    postProcessing: { default: {} }
  },
  setup(__props) {
    const props = __props;
    const isEffectComposerPmndrs = computed$1(() => props.postProcessing.isOpenList.Bloom || props.postProcessing.isOpenList.chromaticAberration || props.postProcessing.isOpenList.grid);
    const isOneEffect = (type) => {
      return props.postProcessing.isOpenList[type] && props.postProcessing.configList[type];
    };
    return (_ctx, _cache) => {
      return _openBlock$2(), _createBlock$2(_Suspense$1, null, {
        default: _withCtx$2(() => [
          isEffectComposerPmndrs.value ? (_openBlock$2(), _createBlock$2(_unref$2(_t), { key: 0 }, {
            default: _withCtx$2(() => [
              isOneEffect("Bloom") ? (_openBlock$2(), _createBlock$2(_unref$2(Yt), _normalizeProps$1(_mergeProps$1({ key: 0 }, _ctx.postProcessing.configList.Bloom)), null, 16)) : _createCommentVNode$1("", true),
              isOneEffect("chromaticAberration") ? (_openBlock$2(), _createBlock$2(_unref$2(to), {
                key: 1,
                offset: new THREE$1.Vector2(_ctx.postProcessing.configList.chromaticAberration.offsetX, _ctx.postProcessing.configList.chromaticAberration.offsetY),
                "radial-modulation": _ctx.postProcessing.configList.chromaticAberration.radialModulation,
                "modulation-offset": _ctx.postProcessing.configList.chromaticAberration.modulationOffset
              }, null, 8, ["offset", "radial-modulation", "modulation-offset"])) : _createCommentVNode$1("", true),
              isOneEffect("grid") ? (_openBlock$2(), _createBlock$2(_unref$2(vo), _normalizeProps$1(_mergeProps$1({ key: 2 }, _ctx.postProcessing.configList.grid)), null, 16)) : _createCommentVNode$1("", true)
            ]),
            _: 1
          })) : _createCommentVNode$1("", true)
        ]),
        _: 1
      });
    };
  }
});

const {defineComponent:_defineComponent$1} = await importShared('vue');

const {unref:_unref$1,mergeProps:_mergeProps,createVNode:_createVNode$1,Suspense:_Suspense,withCtx:_withCtx$1,openBlock:_openBlock$1,createBlock:_createBlock$1,createElementBlock:_createElementBlock$1} = await importShared('vue');
const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "extendMeshes",
  setup(__props) {
    const eMeshState0 = { waterColor: "#A6A6A6", metalness: 0.64, roughness: 0 };
    const eMeshState1 = { width: 2.909, height: 1.223, depth: 2.698, color: "#4F4F4F", opacity: 0.9, num: 4, thickness: 0.09, speed: 0.08, room: 0.44 };
    const eMeshState2 = { speed: -0.04, randomness: 0.45, count: 124, size: 0.08, color: "#FFFFFF", areaX: 2.4, areaY: 0.9, areaZ: 2.6, opacity: 0.88 };
    const eMeshState3 = {
      isSprite: true,
      text: "废水再利用",
      fontSize: 48,
      fontColor: "#000000",
      backgroundColor: "#EAE9E9B8",
      padding: { y: 35, x: 26 },
      align: "center-bottom",
      scaleFactor: 0.022,
      borderColor: "#000000",
      borderWidth: 1,
      borderRadius: 2,
      dpi: 3.4
    };
    const eMeshState4 = { w: 3.821, h: 7.753, pColor: "#DEDEDE", gradientWidth: 0.69, glowWidth: 0.82, nNumber: 11, lineWidth: 0.03, lColor: "#090909" };
    const eMeshState5 = {
      isSprite: true,
      text: "混合油处理",
      fontSize: 48,
      fontColor: "#000000",
      backgroundColor: "#F1EFEFC7",
      padding: { y: 35, x: 26 },
      align: "center-bottom",
      scaleFactor: 0.022,
      borderColor: "#000000",
      borderWidth: 1,
      borderRadius: 2,
      dpi: 3.4
    };
    const eMeshState6 = {
      color: "#000000",
      uGapColor: "#666666",
      radius: 0.044,
      bodyLength: 2,
      headLength: 0,
      tailLength: 0,
      headAngle: 0,
      radialSegments: 13,
      tailAngle: 0,
      filletRadius: 0.3,
      speed: 0.01,
      metalness: 0.22,
      roughness: 0.94,
      reflectivity: 0.38,
      ior: 1.38,
      uStripeScale: 0
    };
    const eMeshState7 = {
      color: "#3759E1",
      uGapColor: "#FFF3F3",
      radius: 0.058,
      bodyLength: 7.6,
      headLength: 0,
      tailLength: 0,
      headAngle: 0,
      radialSegments: 16,
      tailAngle: 0,
      filletRadius: 0.3,
      speed: -0.013,
      metalness: 0.33,
      roughness: 0.39,
      reflectivity: 0.95,
      ior: 2.33,
      uStripeScale: 13.8
    };
    const eMeshState8 = {
      color: "#FEFEFE",
      uGapColor: "#767676",
      radius: 0.058,
      bodyLength: 1,
      headLength: 1,
      tailLength: 5.5,
      headAngle: 0,
      radialSegments: 16,
      tailAngle: 181,
      filletRadius: 0.3,
      speed: 0.01,
      metalness: 0.3,
      roughness: 0.5,
      reflectivity: 0.5,
      ior: 1.5,
      uStripeScale: 9.9
    };
    const eMeshState9 = {
      color: "#FFFFFF",
      uGapColor: "#767676",
      radius: 0.058,
      bodyLength: 2.4,
      headLength: 0,
      tailLength: 2.9,
      headAngle: 0,
      radialSegments: 16,
      tailAngle: 181,
      filletRadius: 0.3,
      speed: -0.011,
      metalness: 0.3,
      roughness: 0.52,
      reflectivity: 0.5,
      ior: 1.5,
      uStripeScale: 6.2
    };
    const eMeshState10 = {
      color: "#3759E1",
      uGapColor: "#FFF3F3",
      radius: 0.058,
      bodyLength: 10.3,
      headLength: 0,
      tailLength: 0,
      headAngle: 0,
      radialSegments: 16,
      tailAngle: 0,
      filletRadius: 0.3,
      speed: -0.013,
      metalness: 0.23,
      roughness: 0.43,
      reflectivity: 0.95,
      ior: 2.33,
      uStripeScale: 13.8
    };
    const eMeshState11 = {
      isSprite: true,
      text: "原油储罐区",
      fontSize: 48,
      fontColor: "#000000",
      backgroundColor: "#F1EFEFC7",
      padding: { y: 35, x: 26 },
      align: "center-bottom",
      scaleFactor: 0.022,
      borderColor: "#000000",
      borderWidth: 1,
      borderRadius: 2,
      dpi: 3.4
    };
    const eMeshState12 = {
      isSprite: true,
      text: "污水处理区",
      fontSize: 48,
      fontColor: "#000000",
      backgroundColor: "#EAE9E9B8",
      padding: { y: 35, x: 26 },
      align: "center-bottom",
      scaleFactor: 0.022,
      borderColor: "#000000",
      borderWidth: 1,
      borderRadius: 2,
      dpi: 3.4
    };
    const eMeshState13 = {
      color: "#5E5E5E",
      width: 0.93,
      height: 0.44,
      depth: 0.22,
      radius: 0.03,
      roughness: 0.8,
      metalness: 0.35,
      reflectorOffset: -1,
      mix: 0,
      sharpMix: 0
    };
    const eMeshState14 = {
      color: "#5E5E5E",
      width: 0.22,
      height: 0.36,
      depth: 0.44,
      radius: 0.03,
      roughness: 0.8,
      metalness: 0.35,
      reflectorOffset: -1,
      mix: 0,
      sharpMix: 0
    };
    const eMeshState15 = {
      color: "#5E5E5E",
      width: 0.22,
      height: 0.36,
      depth: 0.44,
      radius: 0.03,
      roughness: 0.8,
      metalness: 0.35,
      reflectorOffset: -1,
      mix: 0,
      sharpMix: 0
    };
    const eMeshState16 = {
      color: "#585555",
      width: 1,
      height: 0.08,
      depth: 7.95,
      radius: 0.01,
      roughness: 0.95,
      metalness: 0.21,
      reflectorOffset: -1,
      mix: 0,
      sharpMix: 0
    };
    return (_ctx, _cache) => {
      return _openBlock$1(), _createElementBlock$1("TresGroup", null, [
        (_openBlock$1(), _createBlock$1(_Suspense, null, {
          default: _withCtx$1(() => [
            _createVNode$1(_unref$1(_sfc_main$8), _mergeProps({
              position: [-4.582, 0, -1.401],
              rotation: [0, 0, 0],
              scale: [0.5, 1.5, 0.6],
              name: "静态水",
              uuid: "6bec83bd-ef17-4fe7-8397-16985c460c51",
              castShadow: false,
              receiveShadow: false,
              renderOrder: 0,
              visible: true
            }, eMeshState0), null, 16)
          ]),
          _: 1
        })),
        (_openBlock$1(), _createBlock$1(_Suspense, null, {
          default: _withCtx$1(() => [
            _createVNode$1(_unref$1(_sfc_main$9), _mergeProps({
              position: [-0.065, 0, -1.555],
              rotation: [0, 0, 0],
              scale: [1, 1, 1],
              name: "围墙高级",
              uuid: "c5b757d4-6f0d-4669-baee-dd989f6b7d21",
              castShadow: false,
              receiveShadow: false,
              renderOrder: 0,
              visible: true
            }, eMeshState1), null, 16)
          ]),
          _: 1
        })),
        (_openBlock$1(), _createBlock$1(_Suspense, null, {
          default: _withCtx$1(() => [
            _createVNode$1(_unref$1(_sfc_main$a), _mergeProps({
              position: [-4.623, 0, -1.368],
              rotation: [0, 0, 0],
              scale: [1, 1, 1],
              name: "粒子底座",
              uuid: "c0a948d8-f775-497d-bd4f-de5bcb7b78c3",
              castShadow: false,
              receiveShadow: false,
              renderOrder: 9999,
              visible: true
            }, eMeshState2), null, 16)
          ]),
          _: 1
        })),
        (_openBlock$1(), _createBlock$1(_Suspense, null, {
          default: _withCtx$1(() => [
            _createVNode$1(_unref$1(_sfc_main$b), _mergeProps({
              position: [-1.356, 2.116, 2.606],
              rotation: [0, 0, 0],
              scale: [2, 0.8, 2],
              name: "精灵图文字",
              uuid: "fa8e4041-ab68-467f-94e0-083417229540",
              castShadow: false,
              receiveShadow: false,
              renderOrder: 0,
              visible: true
            }, eMeshState3), null, 16)
          ]),
          _: 1
        })),
        (_openBlock$1(), _createBlock$1(_Suspense, null, {
          default: _withCtx$1(() => [
            _createVNode$1(_unref$1(_sfc_main$c), _mergeProps({
              position: [8.773, 0.122, -1.478],
              rotation: [0, 0, 0],
              scale: [1, 1, 1],
              name: "矩形渐变区域",
              uuid: "1e55fb48-dab3-43a4-9f6a-19bc45d0ef3b",
              castShadow: false,
              receiveShadow: false,
              renderOrder: 9999,
              visible: true
            }, eMeshState4), null, 16)
          ]),
          _: 1
        })),
        (_openBlock$1(), _createBlock$1(_Suspense, null, {
          default: _withCtx$1(() => [
            _createVNode$1(_unref$1(_sfc_main$b), _mergeProps({
              position: [4.773, 2.116, -6.151],
              rotation: [0, 0, 0],
              scale: [2, 0.8, 2],
              name: "精灵图文字",
              uuid: "d8741f1c-933a-40ef-b92c-ca8e916378a8",
              castShadow: false,
              receiveShadow: false,
              renderOrder: 0,
              visible: true
            }, eMeshState5), null, 16)
          ]),
          _: 1
        })),
        (_openBlock$1(), _createBlock$1(_Suspense, null, {
          default: _withCtx$1(() => [
            _createVNode$1(_unref$1(_sfc_main$d), _mergeProps({
              position: [5.6080000000000005, 2.124, -2.622],
              rotation: [1.6000000000000003, 0, 0],
              scale: [1, 1, 1],
              name: "伸缩管线2",
              uuid: "26b3d5dd-2ac5-414c-9178-4dd88a1f1751",
              castShadow: true,
              receiveShadow: false,
              renderOrder: 0,
              visible: true
            }, eMeshState6), null, 16)
          ]),
          _: 1
        })),
        (_openBlock$1(), _createBlock$1(_Suspense, null, {
          default: _withCtx$1(() => [
            _createVNode$1(_unref$1(_sfc_main$d), _mergeProps({
              position: [4.105, 0.31, -1.183],
              rotation: [3.141592653589793, 0.008407346410215549, -3.141592653589793],
              scale: [1, 1, 1],
              name: "伸缩管线2",
              uuid: "89632a2f-47f2-4990-a4fd-2e6d61abce4d",
              castShadow: true,
              receiveShadow: false,
              renderOrder: 0,
              visible: true
            }, eMeshState7), null, 16)
          ]),
          _: 1
        })),
        (_openBlock$1(), _createBlock$1(_Suspense, null, {
          default: _withCtx$1(() => [
            _createVNode$1(_unref$1(_sfc_main$d), _mergeProps({
              position: [-1.192, 0.32, 0.603],
              rotation: [0, -1.570000000000127, 0],
              scale: [1, 1, 1],
              name: "伸缩管线2",
              uuid: "2f18637b-35cf-4ba1-8c81-fa1cdc7d9153",
              castShadow: true,
              receiveShadow: false,
              renderOrder: 0,
              visible: true
            }, eMeshState8), null, 16)
          ]),
          _: 1
        })),
        (_openBlock$1(), _createBlock$1(_Suspense, null, {
          default: _withCtx$1(() => [
            _createVNode$1(_unref$1(_sfc_main$d), _mergeProps({
              position: [-2.133, 0.32, 0.299],
              rotation: [0, 0, 0],
              scale: [1, 1, 1],
              name: "伸缩管线2",
              uuid: "ed6ab873-03b7-49f8-a95b-d83f98e2f28b",
              castShadow: true,
              receiveShadow: false,
              renderOrder: 0,
              visible: true
            }, eMeshState9), null, 16)
          ]),
          _: 1
        })),
        (_openBlock$1(), _createBlock$1(_Suspense, null, {
          default: _withCtx$1(() => [
            _createVNode$1(_unref$1(_sfc_main$d), _mergeProps({
              position: [1.877, 0.31, -1.379],
              rotation: [3.141592653589793, -1.5615926535897844, 3.141592653589793],
              scale: [1, 1, 1],
              name: "伸缩管线2",
              uuid: "623e74ce-36ef-4532-b7f0-95e0a5480081",
              castShadow: true,
              receiveShadow: false,
              renderOrder: 0,
              visible: true
            }, eMeshState10), null, 16)
          ]),
          _: 1
        })),
        (_openBlock$1(), _createBlock$1(_Suspense, null, {
          default: _withCtx$1(() => [
            _createVNode$1(_unref$1(_sfc_main$b), _mergeProps({
              position: [8.895, 2.116, -1.2770000000000001],
              rotation: [0, 0, 0],
              scale: [2, 0.8, 2],
              name: "精灵图文字",
              uuid: "34ef78a4-0d6a-498a-984c-34022b48709e",
              castShadow: false,
              receiveShadow: false,
              renderOrder: 0,
              visible: true
            }, eMeshState11), null, 16)
          ]),
          _: 1
        })),
        (_openBlock$1(), _createBlock$1(_Suspense, null, {
          default: _withCtx$1(() => [
            _createVNode$1(_unref$1(_sfc_main$b), _mergeProps({
              position: [-4.793, 2.116, -1.2770000000000001],
              rotation: [0, 0, 0],
              scale: [2, 0.8, 2],
              name: "精灵图文字",
              uuid: "dcf10a77-fcfd-4beb-8b1b-6819adba6fa4",
              castShadow: false,
              receiveShadow: false,
              renderOrder: 0,
              visible: true
            }, eMeshState12), null, 16)
          ]),
          _: 1
        })),
        (_openBlock$1(), _createBlock$1(_Suspense, null, {
          default: _withCtx$1(() => [
            _createVNode$1(_unref$1(_sfc_main$e), _mergeProps({
              position: [-3.1790000000000003, 0.271, -1.154],
              rotation: [0, 1.5600000000000211, 0],
              scale: [1, 1, 1],
              name: "RoundedBox镜面",
              uuid: "e00355b5-9633-4f6a-8ffb-0d18d6bfce99",
              castShadow: false,
              receiveShadow: false,
              renderOrder: 0,
              visible: true
            }, eMeshState13), null, 16)
          ]),
          _: 1
        })),
        (_openBlock$1(), _createBlock$1(_Suspense, null, {
          default: _withCtx$1(() => [
            _createVNode$1(_unref$1(_sfc_main$e), _mergeProps({
              position: [6.982, 0.271, -1.316],
              rotation: [0, 0, 0],
              scale: [1, 1, 1],
              name: "RoundedBox镜面",
              uuid: "4e288fca-4920-430a-9dc6-ee8e37246f98",
              castShadow: false,
              receiveShadow: false,
              renderOrder: 0,
              visible: true
            }, eMeshState14), null, 16)
          ]),
          _: 1
        })),
        (_openBlock$1(), _createBlock$1(_Suspense, null, {
          default: _withCtx$1(() => [
            _createVNode$1(_unref$1(_sfc_main$e), _mergeProps({
              position: [4.15, 0.271, -4.9350000000000005],
              rotation: [0, 1.5600000000000211, 0],
              scale: [1, 1, 1],
              name: "RoundedBox镜面",
              uuid: "be8588c3-4cc0-4f90-b644-96289e313577",
              castShadow: false,
              receiveShadow: false,
              renderOrder: 0,
              visible: true
            }, eMeshState15), null, 16)
          ]),
          _: 1
        })),
        (_openBlock$1(), _createBlock$1(_Suspense, null, {
          default: _withCtx$1(() => [
            _createVNode$1(_unref$1(_sfc_main$e), _mergeProps({
              position: [11.318, 0.029, -1.369],
              rotation: [0, 0, 0],
              scale: [1, 1, 1],
              name: "RoundedBox镜面",
              uuid: "ebb24af5-7c7c-4f8d-b09d-8ac04296026c",
              castShadow: false,
              receiveShadow: false,
              renderOrder: 0,
              visible: true
            }, eMeshState16), null, 16)
          ]),
          _: 1
        }))
      ]);
    };
  }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {unref:_unref,createVNode:_createVNode,createElementVNode:_createElementVNode,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,openBlock:_openBlock,createBlock:_createBlock,createCommentVNode:_createCommentVNode,resolveComponent:_resolveComponent,withCtx:_withCtx,Fragment:_Fragment,createElementBlock:_createElementBlock} = await importShared('vue');

const _hoisted_1 = ["left", "top", "bottom"];
const THREE = await importShared('three');

const {computed} = await importShared('vue');
const widths = 1e3;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "freeRefiningIndustry",
  setup(__props) {
    const { width, height } = useWindowSize();
    const heights = computed(() => {
      return 1e3 * height.value / width.value;
    });
    const fState = { color: "#C2C2C2", shadowColor: "#8C8C8C", receiveShadow: true, edge: 0.35, scale: 2.93 };
    const gridState = {
      cellSize: 0.59,
      cellThickness: 1,
      cellColor: "#404040",
      sectionColor: "#2F2F2F",
      sectionSize: 3.1,
      sectionThickness: 2.38,
      fadeDistance: 22,
      fadeStrength: 1,
      infiniteGrid: true
    };
    const sState = { curTime: 14.2, direct: 0.5, intensity: 1, shadowIntensity: 0.78 };
    const pState = {
      isOpenList: { Bloom: false, chromaticAberration: false },
      configList: {
        Bloom: { radius: 0.85, intensity: 4, "luminance-threshold": 0.1, "luminance-smoothing": 0.3, "mipmap-blur": false },
        chromaticAberration: { offsetX: 0.07, offsetY: 0.07, radialModulation: true, modulationOffset: 0 }
      }
    };
    const tcConfig = {
      clearColor: "#201919",
      windowSize: true,
      shadows: true,
      toneMapping: THREE.NoToneMapping,
      toneMappingExposure: 1,
      shadowMapType: THREE.PCFSoftShadowMap
    };
    const viewportConfig = {
      size: 100,
      lineWidth: 2,
      type: "sphere",
      placement: "bottom-right",
      offset: {
        right: 10
      }
    };
    instance.loadResources([
      { functionName: "GLTFLoader", url: "https://oss.icegl.cn/p/modelServer/models/0游乐场/models/floor.glb" },
      { functionName: "GLTFLoader", url: "https://oss.icegl.cn/p/modelServer/models/2低像素炼油/models/gasTank.glb" },
      { functionName: "GLTFLoader", url: "https://oss.icegl.cn/p/modelServer/models/2低像素炼油/models/oilTruck.glb" },
      { functionName: "GLTFLoader", url: "https://oss.icegl.cn/p/modelServer/models/2低像素炼油/models/cCringUnit.glb" },
      { functionName: "GLTFLoader", url: "https://oss.icegl.cn/p/modelServer/models/2低像素炼油/models/house.glb" },
      { functionName: "GLTFLoader", url: "https://oss.icegl.cn/p/modelServer/models/2低像素炼油/models/ccUnit.glb" },
      { functionName: "GLTFLoader", url: "https://oss.icegl.cn/p/modelServer/models/2低像素炼油/models/oilHeater.glb" },
      { functionName: "GLTFLoader", url: "https://oss.icegl.cn/p/modelServer/models/2低像素炼油/models/tower.glb" },
      { functionName: "GLTFLoader", url: "https://oss.icegl.cn/p/modelServer/models/2低像素炼油/models/oilTank.glb" },
      { functionName: "GLTFLoader", url: "https://oss.icegl.cn/p/modelServer/models/2低像素炼油/models/machine.glb" },
      { functionName: "GLTFLoader", url: "https://oss.icegl.cn/p/modelServer/models/2低像素炼油/models/srUnit.glb" },
      { functionName: "GLTFLoader", url: "https://oss.icegl.cn/p/modelServer/models/2低像素炼油/models/tank2.glb" },
      { functionName: "GLTFLoader", url: "https://oss.icegl.cn/p/modelServer/models/2低像素炼油/models/gtUnit.glb" },
      { functionName: "GLTFLoader", url: "https://oss.icegl.cn/p/modelServer/models/2低像素炼油/models/flaringDevice.glb" }
    ]);
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createElementBlock(_Fragment, null, [
        _createVNode(_unref(loading), { useResourceManager: "" }),
        _createVNode(_component_TresCanvas, _normalizeProps(_guardReactiveProps(tcConfig)), {
          default: _withCtx(() => [
            _createElementVNode("TresOrthographicCamera", {
              position: [-2.82, 8.65, 12.56],
              left: -widths,
              right: widths,
              top: heights.value,
              bottom: -heights.value,
              zoom: 108.8,
              near: -100,
              far: 1e4
            }, null, 8, _hoisted_1),
            _createVNode(_unref(Kk), {
              makeDefault: "",
              target: new THREE.Vector3(2.53, 1.78, -0.12)
            }, null, 8, ["target"]),
            _cache[0] || (_cache[0] = _createElementVNode("TresAmbientLight", {
              color: 16777215,
              intensity: 0.5
            }, null, -1)),
            _createVNode(_unref(_sfc_main$f), _normalizeProps(_guardReactiveProps(viewportConfig)), null, 16),
            _createVNode(_sfc_main$5, {
              fState,
              gridState
            }),
            _createVNode(_sfc_main$4, _normalizeProps(_guardReactiveProps(sState)), null, 16),
            _unref(instance).hasAllFinished.value ? (_openBlock(), _createBlock(_sfc_main$3, { key: 0 })) : _createCommentVNode("", true),
            _unref(instance).hasAllFinished.value ? (_openBlock(), _createBlock(_sfc_main$1, { key: 1 })) : _createCommentVNode("", true),
            _createVNode(_sfc_main$2, { postProcessing: pState })
          ]),
          _: 1
        }, 16)
      ], 64);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=freeRefiningIndustry.daDlVLAt1767105581793.js.map
