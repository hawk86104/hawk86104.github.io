import { importShared, Fs, kk, Kk } from './index.BxB45aCK1767105581793.js';
import { _sfc_main as _sfc_main$c } from './viewportGizmo.vue_vue_type_script_setup_true_lang.Df9F-KR41767105581793.js';
import { instance } from './Resource.Dxl2bF_-1767105581793.js';
import { _sfc_main$1 as _sfc_main$d } from './index.EB9aFE0Q1767105581793.js';
import './skyBoxAmesh.vue_vue_type_script_setup_true_lang.Cd3eKmZW1767105581793.js';
import './skyBoxBmesh.vue_vue_type_script_setup_true_lang.DvKDLewX1767105581793.js';
import './skyBoxDmesh.vue_vue_type_script_setup_true_lang.DRUMhbde1767105581793.js';
import { _sfc_main$1 as _sfc_main$9, _sfc_main$3 as _sfc_main$a, loading$2 as loading } from './generalFont.vue_vue_type_script_setup_true_lang.DqoG1H6g1767105581793.js';
import './default.vue_vue_type_script_setup_true_lang.DQGKkIwV1767105581793.js';
import './three-mesh-ui.module.CjQAT-M_1767105581793.js';
import { _sfc_main as _sfc_main$b } from './domPanel.vue_vue_type_style_index_0_lang.dV59iE041767105581793.js';
import './staticWater.vue_vue_type_script_setup_true_lang.4m35QlAa1767105581793.js';
import './iceFloor.vue_vue_type_script_setup_true_lang.Bffk1fiK1767105581793.js';
import { _sfc_main as _sfc_main$6 } from './gerstnerWater.vue_vue_type_script_setup_true_lang.CK3FxufO1767105581793.js';
import './customWaterMesh.vue_vue_type_script_setup_true_lang.DP0YOBvn1767105581793.js';
import { Sky, standardizationMeshCopy, meshAddEvent, onReadySenceOnce } from './forEditor.BxK-3RL21767105581793.js';
import { _t, Yt, to, vo } from './tres-post-processing.CBYUVLxv1767105581793.js';
import './reflectorDiffuse.vue_vue_type_script_setup_true_lang.BuW1EemC1767105581793.js';
import './reflectorDUDV.vue_vue_type_script_setup_true_lang.Cce3m26z1767105581793.js';
import './reflectorShaderMesh.vue_vue_type_script_setup_true_lang.D0T9d0go1767105581793.js';
import { _sfc_main$6 as _sfc_main$7 } from './dynamicRotatingBase.vue_vue_type_script_setup_true_lang.B3Epdjc31767105581793.js';
import './whiteFloorMesh.vue_vue_type_script_setup_true_lang.B9UIV1AE1767105581793.js';
import './gridPlusCom.vue_vue_type_script_setup_true_lang.BIqyIrzr1767105581793.js';
import './videoFloor.vue_vue_type_script_setup_true_lang.BEyCiDvU1767105581793.js';
import './digitalGround.vue_vue_type_script_setup_true_lang.BPvRJNY41767105581793.js';
import './imgFloor.vue_vue_type_script_setup_true_lang.D-OHfrvs1767105581793.js';
import './reflectorRoundedBox.vue_vue_type_script_setup_true_lang.B0i-7O7p1767105581793.js';
import './particleBase.vue_vue_type_script_setup_true_lang.BTwaqkrr1767105581793.js';
import './rippleFloor.vue_vue_type_script_setup_true_lang.DU-KS3_f1767105581793.js';
import { _sfc_main$10 as _sfc_main$8 } from './customShaderMaterial.vue_vue_type_script_setup_true_lang.rDMIDGqx1767105581793.js';
import './index.vue_vue_type_script_setup_true_lang.D7-hpzmy1767105581793.js';

const {defineComponent:_defineComponent$5} = await importShared('vue');

const {unref:_unref$5,normalizeProps:_normalizeProps$2,guardReactiveProps:_guardReactiveProps$1,createVNode:_createVNode$2,Suspense:_Suspense$2,withCtx:_withCtx$3,openBlock:_openBlock$5,createBlock:_createBlock$3,createElementBlock:_createElementBlock$4} = await importShared('vue');

const _hoisted_1$2 = { position: [0, -2e-3, 0] };
const _sfc_main$5 = /* @__PURE__ */ _defineComponent$5({
  __name: "floor",
  props: {
    fState: { default: {} },
    gridState: { default: {} }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return _openBlock$5(), _createElementBlock$4("TresGroup", _hoisted_1$2, [
        (_openBlock$5(), _createBlock$3(_Suspense$2, null, {
          default: _withCtx$3(() => [
            _createVNode$2(_unref$5(_sfc_main$6), _normalizeProps$2(_guardReactiveProps$1(_ctx.fState)), null, 16)
          ]),
          _: 1
        }))
      ]);
    };
  }
});

const {defineComponent:_defineComponent$4} = await importShared('vue');

const {unref:_unref$4,createElementVNode:_createElementVNode$1,Fragment:_Fragment$1,openBlock:_openBlock$4,createElementBlock:_createElementBlock$3} = await importShared('vue');

const _hoisted_1$1 = ["object"];
const _hoisted_2 = ["object"];
const THREE$3 = await importShared('three');

const {watch} = await importShared('vue');
const _sfc_main$4 = /* @__PURE__ */ _defineComponent$4({
  __name: "skylight",
  props: {
    curTime: {},
    direct: {},
    intensity: { default: 1 },
    shadowIntensity: { default: 1 },
    toneMapping: { default: THREE$3.ACESFilmicToneMapping },
    toneMappingExposure: { default: 1 }
  },
  setup(__props) {
    const props = __props;
    const sky = new Sky();
    sky.scale.setScalar(1e3);
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
    const { renderer } = Fs();
    renderer.toneMappingExposure = props.toneMappingExposure;
    renderer.toneMapping = props.toneMapping;
    return (_ctx, _cache) => {
      return _openBlock$4(), _createElementBlock$3(_Fragment$1, null, [
        _createElementVNode$1("primitive", { object: _unref$4(sky) }, null, 8, _hoisted_1$1),
        _createElementVNode$1("primitive", { object: _unref$4(light) }, null, 8, _hoisted_2)
      ], 64);
    };
  }
});

const {defineComponent:_defineComponent$3} = await importShared('vue');

const {unref:_unref$3,openBlock:_openBlock$3,createElementBlock:_createElementBlock$2} = await importShared('vue');

const _hoisted_1 = ["object"];
const THREE$2 = await importShared('three');

const {ref: ref$1} = await importShared('vue');
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
        const { mixer, actions } = kk(ref$1(animations), glb);
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
    const oneglb0_0 = standardizationMeshCopy(instance.getItem("灯塔B.glb").scene);
    const op0_0 = { "uuid": "4c8821f0-8ef6-41c0-a964-6b447bd56239", "rotation": { "x": 0, "y": 0, "z": 0 }, "visible": true, "position": { "x": -89.642, "y": -0.784, "z": -79.459 }, "scale": { "x": 0.2, "y": 0.2, "z": 0.2 }, "renderOrder": 0, "castShadow": false, "receiveShadow": false, "name": "灯塔B", "actionList": { "timeScale": 1, "actions": {} } };
    syncMeshProp(oneglb0_0, op0_0, instance.getItem("灯塔B.glb").animations);
    glbsGroup.add(oneglb0_0);
    const oneglb1_0 = standardizationMeshCopy(instance.getItem("货轮B.glb").scene);
    const op1_0 = { "uuid": "670f59b7-487c-4cec-aaed-328e392965ff", "rotation": { "x": 0.011340316950557396, "y": 15718236624510755e-21, "z": 0.0027720668085343394 }, "visible": true, "position": { "x": 4.891, "y": -1.189124326363998, "z": 10.46 }, "scale": { "x": 0.6, "y": 0.6, "z": 0.6 }, "renderOrder": 0, "castShadow": false, "receiveShadow": false, "name": "货轮B", "actionList": { "timeScale": 1, "actions": {} } };
    syncMeshProp(oneglb1_0, op1_0, instance.getItem("货轮B.glb").animations);
    glbsGroup.add(oneglb1_0);
    meshAddEvent(oneglb1_0, [
      {
        eventType: "click",
        enabled: false,
        function: (PointerEvent, currentObject, point, object, distance) => {
          console.log("单击事件:" + currentObject.uuid, PointerEvent, currentObject, point, object, distance);
        }
      },
      {
        eventType: "doubleclick",
        enabled: false,
        function: (PointerEvent, currentObject, point, object, distance) => {
          console.log("双击事件:" + currentObject.uuid, PointerEvent, currentObject, point, object, distance);
        }
      },
      {
        eventType: "contextmenu",
        enabled: false,
        function: (PointerEvent, currentObject, point, object, distance) => {
          console.log("鼠标右键:" + currentObject.uuid, PointerEvent, currentObject, point, object, distance);
        }
      },
      {
        eventType: "pointerenter",
        enabled: true,
        function: (PointerEvent, currentObject, point, object, distance) => {
          window.tvtDomPanel2visible.value = true;
          document.body.style.cursor = "pointer";
          console.log("鼠标移入:" + currentObject.uuid, PointerEvent, currentObject, point, object, distance);
        }
      },
      {
        eventType: "pointerleave",
        enabled: true,
        function: (PointerEvent, currentObject, point, object, distance) => {
          window.tvtDomPanel2visible.value = false;
          document.body.style.cursor = "default";
          console.log("鼠标移出:" + currentObject.uuid, PointerEvent, currentObject, point, object, distance);
        }
      }
    ]);
    const oneglb2_0 = standardizationMeshCopy(instance.getItem("游轮A.glb").scene);
    const op2_0 = { "uuid": "75ef2b5c-62d6-4c23-b9c9-e8c2d6cd440a", "rotation": { "x": -0.028761572024479633, "y": 53580117989377876e-21, "z": -0.0037255517435211528 }, "visible": true, "position": { "x": -25.194, "y": -0.9499404222230202, "z": -44.363 }, "scale": { "x": 1, "y": 1, "z": 1 }, "renderOrder": 0, "castShadow": false, "receiveShadow": false, "name": "游轮A", "actionList": { "timeScale": 1, "actions": {} } };
    syncMeshProp(oneglb2_0, op2_0, instance.getItem("游轮A.glb").animations);
    glbsGroup.add(oneglb2_0);
    meshAddEvent(oneglb2_0, [
      {
        eventType: "click",
        enabled: false,
        function: (PointerEvent, currentObject, point, object, distance) => {
          console.log("单击事件:" + currentObject.uuid, PointerEvent, currentObject, point, object, distance);
        }
      },
      {
        eventType: "doubleclick",
        enabled: false,
        function: (PointerEvent, currentObject, point, object, distance) => {
          console.log("双击事件:" + currentObject.uuid, PointerEvent, currentObject, point, object, distance);
        }
      },
      {
        eventType: "contextmenu",
        enabled: false,
        function: (PointerEvent, currentObject, point, object, distance) => {
          console.log("鼠标右键:" + currentObject.uuid, PointerEvent, currentObject, point, object, distance);
        }
      },
      {
        eventType: "pointerenter",
        enabled: true,
        function: (PointerEvent, currentObject, point, object, distance) => {
          console.log("鼠标移入:" + currentObject.uuid, PointerEvent, currentObject, point, object, distance);
          window.tvtDomPanel1visible.value = true;
          document.body.style.cursor = "pointer";
          console.log("鼠标移入:" + currentObject.uuid, PointerEvent, currentObject, point, object, distance);
        }
      },
      {
        eventType: "pointerleave",
        enabled: true,
        function: (PointerEvent, currentObject, point, object, distance) => {
          window.tvtDomPanel1visible.value = false;
          document.body.style.cursor = "default";
          console.log("鼠标移出:" + currentObject.uuid, PointerEvent, currentObject, point, object, distance);
        }
      }
    ]);
    const oneglb3_0 = standardizationMeshCopy(instance.getItem("风电机B.glb").scene);
    const op3_0 = { "uuid": "7229e153-93c4-446f-8c67-319ae4c40487", "rotation": { "x": -3.141592653589793, "y": 0.8915926535897933, "z": -3.141592653589793 }, "visible": true, "position": { "x": -20.865000000000002, "y": -0.523, "z": -102.563 }, "scale": { "x": 1, "y": 1.2, "z": 1 }, "renderOrder": 0, "castShadow": false, "receiveShadow": false, "name": "风电机B", "actionList": { "timeScale": 1, "actions": { "WindTurbines": 1 } } };
    syncMeshProp(oneglb3_0, op3_0, instance.getItem("风电机B.glb").animations);
    glbsGroup.add(oneglb3_0);
    const oneglb3_1 = standardizationMeshCopy(instance.getItem("风电机B.glb").scene);
    const op3_1 = { "uuid": "f0110b48-c960-4ce1-8e98-fbce2fdaa037", "rotation": { "x": -3.141592653589793, "y": 0.8915926535897933, "z": -3.141592653589793 }, "visible": true, "position": { "x": 31.039, "y": -0.523, "z": -144.81900000000002 }, "scale": { "x": 1, "y": 1.2, "z": 1 }, "renderOrder": 0, "castShadow": false, "receiveShadow": false, "name": "风电机B", "actionList": { "timeScale": 1, "actions": { "WindTurbines": 1 } } };
    syncMeshProp(oneglb3_1, op3_1, instance.getItem("风电机B.glb").animations);
    glbsGroup.add(oneglb3_1);
    const oneglb3_2 = standardizationMeshCopy(instance.getItem("风电机B.glb").scene);
    const op3_2 = { "uuid": "c5c14774-7b51-4bcc-906d-f1706d951c0a", "rotation": { "x": -3.141592653589793, "y": 0.8915926535897933, "z": -3.141592653589793 }, "visible": true, "position": { "x": -18.967, "y": -0.523, "z": -155.776 }, "scale": { "x": 1, "y": 1.2, "z": 1 }, "renderOrder": 0, "castShadow": false, "receiveShadow": false, "name": "风电机B", "actionList": { "timeScale": 1, "actions": { "WindTurbines": 1 } } };
    syncMeshProp(oneglb3_2, op3_2, instance.getItem("风电机B.glb").animations);
    glbsGroup.add(oneglb3_2);
    const oneglb3_3 = standardizationMeshCopy(instance.getItem("风电机B.glb").scene);
    const op3_3 = { "uuid": "a4b5c472-ebbc-49f6-b4cb-241ef1dd8810", "rotation": { "x": -3.141592653589793, "y": 0.8915926535897933, "z": -3.141592653589793 }, "visible": true, "position": { "x": 6.238, "y": -0.523, "z": -150.404 }, "scale": { "x": 1, "y": 1.2, "z": 1 }, "renderOrder": 0, "castShadow": false, "receiveShadow": false, "name": "风电机B", "actionList": { "timeScale": 1, "actions": { "WindTurbines": 1 } } };
    syncMeshProp(oneglb3_3, op3_3, instance.getItem("风电机B.glb").animations);
    glbsGroup.add(oneglb3_3);
    const oneglb3_4 = standardizationMeshCopy(instance.getItem("风电机B.glb").scene);
    const op3_4 = { "uuid": "26aa2615-d20b-4d82-8106-a896781540a8", "rotation": { "x": -3.141592653589793, "y": 0.8915926535897933, "z": -3.141592653589793 }, "visible": true, "position": { "x": 3.747, "y": -0.523, "z": -100.664 }, "scale": { "x": 1, "y": 1.2, "z": 1 }, "renderOrder": 0, "castShadow": false, "receiveShadow": false, "name": "风电机B", "actionList": { "timeScale": 1, "actions": { "WindTurbines": 1 } } };
    syncMeshProp(oneglb3_4, op3_4, instance.getItem("风电机B.glb").animations);
    glbsGroup.add(oneglb3_4);
    const oneglb3_5 = standardizationMeshCopy(instance.getItem("风电机B.glb").scene);
    const op3_5 = { "uuid": "87cc1f5b-334b-4dfd-b846-ffdabb6d80f9", "rotation": { "x": -3.141592653589793, "y": 0.8915926535897933, "z": -3.141592653589793 }, "visible": true, "position": { "x": 29.54, "y": -0.523, "z": -97.354 }, "scale": { "x": 1, "y": 1.2, "z": 1 }, "renderOrder": 0, "castShadow": false, "receiveShadow": false, "name": "风电机B", "actionList": { "timeScale": 1, "actions": { "WindTurbines": 1 } } };
    syncMeshProp(oneglb3_5, op3_5, instance.getItem("风电机B.glb").animations);
    glbsGroup.add(oneglb3_5);
    const oneglb4_0 = standardizationMeshCopy(instance.getItem("风电机A.glb").scene);
    const op4_0 = { "uuid": "5ae98182-959e-4790-99c4-697f3a71f972", "rotation": { "x": 0, "y": 0, "z": 0 }, "visible": true, "position": { "x": -47.114000000000004, "y": -0.49, "z": -116.732 }, "scale": { "x": 2, "y": 2.5, "z": 2 }, "renderOrder": 0, "castShadow": false, "receiveShadow": false, "name": "风电机A", "actionList": { "timeScale": 1, "actions": { "TurbineRotation": 1 } } };
    syncMeshProp(oneglb4_0, op4_0, instance.getItem("风电机A.glb").animations);
    glbsGroup.add(oneglb4_0);
    const oneglb5_0 = standardizationMeshCopy(instance.getItem("浮标A.glb").scene);
    const op5_0 = { "uuid": "52df6326-8128-4687-a752-51b56df75185", "rotation": { "x": 0.14006728658097345, "y": 0.010700356584025858, "z": 0.15224562763014243 }, "visible": true, "position": { "x": -76.925, "y": -2.7408526475183908, "z": -18.594 }, "scale": { "x": 0.02, "y": 0.02, "z": 0.02 }, "renderOrder": 0, "castShadow": false, "receiveShadow": false, "name": "浮标A", "actionList": { "timeScale": 1, "actions": {} } };
    syncMeshProp(oneglb5_0, op5_0, instance.getItem("浮标A.glb").animations);
    glbsGroup.add(oneglb5_0);
    const oneglb5_1 = standardizationMeshCopy(instance.getItem("浮标A.glb").scene);
    const op5_1 = { "uuid": "f0c2641d-e5d5-47cd-b638-91cbaf06af5e", "rotation": { "x": 0, "y": 0, "z": 0 }, "visible": true, "position": { "x": -54.084, "y": -0.86, "z": -18.071 }, "scale": { "x": 0.02, "y": 0.02, "z": 0.02 }, "renderOrder": 0, "castShadow": false, "receiveShadow": false, "name": "浮标A", "actionList": { "timeScale": 1, "actions": {} } };
    syncMeshProp(oneglb5_1, op5_1, instance.getItem("浮标A.glb").animations);
    glbsGroup.add(oneglb5_1);
    const oneglb5_2 = standardizationMeshCopy(instance.getItem("浮标A.glb").scene);
    const op5_2 = { "uuid": "6200a408-1b9f-4073-824a-063ae623a5ba", "rotation": { "x": 0, "y": 0, "z": 0 }, "visible": true, "position": { "x": -24.257, "y": -0.86, "z": -18.071 }, "scale": { "x": 0.02, "y": 0.02, "z": 0.02 }, "renderOrder": 0, "castShadow": false, "receiveShadow": false, "name": "浮标A", "actionList": { "timeScale": 1, "actions": {} } };
    syncMeshProp(oneglb5_2, op5_2, instance.getItem("浮标A.glb").animations);
    glbsGroup.add(oneglb5_2);
    const oneglb5_3 = standardizationMeshCopy(instance.getItem("浮标A.glb").scene);
    const op5_3 = { "uuid": "c37ca173-1ffd-43d5-8645-254547b96e36", "rotation": { "x": 0, "y": 0, "z": 0 }, "visible": true, "position": { "x": 9.359, "y": -0.86, "z": -18.071 }, "scale": { "x": 0.02, "y": 0.02, "z": 0.02 }, "renderOrder": 0, "castShadow": false, "receiveShadow": false, "name": "浮标A", "actionList": { "timeScale": 1, "actions": {} } };
    syncMeshProp(oneglb5_3, op5_3, instance.getItem("浮标A.glb").animations);
    glbsGroup.add(oneglb5_3);
    const oneglb5_4 = standardizationMeshCopy(instance.getItem("浮标A.glb").scene);
    const op5_4 = { "uuid": "59a38498-8204-4279-8d6b-c84704941f3c", "rotation": { "x": 0, "y": 0, "z": 0 }, "visible": true, "position": { "x": 42.304, "y": -0.86, "z": -18.071 }, "scale": { "x": 0.02, "y": 0.02, "z": 0.02 }, "renderOrder": 0, "castShadow": false, "receiveShadow": false, "name": "浮标A", "actionList": { "timeScale": 1, "actions": {} } };
    syncMeshProp(oneglb5_4, op5_4, instance.getItem("浮标A.glb").animations);
    glbsGroup.add(oneglb5_4);
    setTimeout(() => {
      onReadySenceOnce();
    }, 1500);
    return (_ctx, _cache) => {
      return _openBlock$3(), _createElementBlock$2("primitive", { object: _unref$3(glbsGroup) }, null, 8, _hoisted_1);
    };
  }
});

const {defineComponent:_defineComponent$2} = await importShared('vue');

const {unref:_unref$2,normalizeProps:_normalizeProps$1,openBlock:_openBlock$2,createBlock:_createBlock$2,mergeProps:_mergeProps$1,createCommentVNode:_createCommentVNode$1,withCtx:_withCtx$2,Suspense:_Suspense$1} = await importShared('vue');

const {computed} = await importShared('vue');

const THREE$1 = await importShared('three');
const _sfc_main$2 = /* @__PURE__ */ _defineComponent$2({
  __name: "tresProcessing",
  props: {
    postProcessing: { default: {} }
  },
  setup(__props) {
    const props = __props;
    const isEffectComposerPmndrs = computed(() => props.postProcessing.isOpenList.Bloom || props.postProcessing.isOpenList.chromaticAberration || props.postProcessing.isOpenList.grid);
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

const {ref} = await importShared('vue');
const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "extendMeshes",
  setup(__props) {
    const eMeshState0 = { "length": 60, "speed": 1, "width": 1.4, "bendPosition": 1, "curvature": 0.33, "backgroundColor": "#D32709", "backgroundAlpha": 0.25, "segments": 240, "arrowColor": "#ffffff", "arrowWidth": 5.2, "arrowHeight": 5.6, "arrowSpacing": 4.6, "arrowOffset": 0, "arrowLineWidth": 18, "arrowStyle": "chevron", "pixelWorldScale": 0.066 };
    const eMeshState1 = { "length": 60, "speed": 1, "width": 1.4, "bendPosition": 1, "curvature": 0.33, "backgroundColor": "#0949D3", "backgroundAlpha": 0.25, "segments": 240, "arrowColor": "#ffffff", "arrowWidth": 5.2, "arrowHeight": 5.6, "arrowSpacing": 4.6, "arrowOffset": 0, "arrowLineWidth": 18, "arrowStyle": "chevron", "pixelWorldScale": 0.066 };
    const eMeshState2 = { "modelValue": { "type": "Box", "args": [5, 1.1, 3, 2, 1, 2] }, "materialType": "TransmissionMaterial", "materialProps": { "color": "#FFFFFF", "roughness": 0.11, "reflectivity": 0.73, "attenuationColor": "#6C6C6C", "attenuationDistance": 0.38, "chromaticAberration": 0, "anisotropicBlur": 0.37, "distortion": 0.3, "temporalDistortion": 0, "backside": false, "thickness": 0.17, "backsideThickness": 0.46 } };
    const eMeshState3 = { "text": "MRC集装箱货轮 - 18260GT", "size": 1.5, "height": 0.22, "curveSegments": 9, "bevelEnabled": true, "bevelThickness": 0.05, "bevelSize": 0.02, "bevelOffset": 0, "bevelSegments": 4, "center": true, "materialType": "MeshStandardMaterial", "materialProps": { "color": "#993B3B", "map": null, "wireframe": false, "opacity": 1, "transparent": false, "side": 0, "alphaTest": 0, "blending": 1, "depthTest": true, "depthWrite": true, "emissive": "#000000", "emissiveIntensity": 1, "metalness": 0.49, "roughness": 0.72, "metalnessMap": null, "roughnessMap": null, "normalMap": null, "normalScale": { "x": 1, "y": 1 }, "bumpMap": null, "bumpScale": 1, "displacementMap": null, "displacementScale": 0.85, "displacementBias": 0, "aoMap": null, "aoMapIntensity": 1, "envMap": null, "envMapIntensity": 1 } };
    const eMeshState4 = { "color": "#993B3B", "hasArrow": true, "radius": 0.1, "length": 10, "cutoffRatio": 0.91, "roughness": 0.16, "metalness": 0.62 };
    const eMeshState5 = { "color": "#344AAB", "hasArrow": true, "radius": 0.1, "length": 10, "cutoffRatio": 0.91, "roughness": 0.16, "metalness": 0.62 };
    const eMeshState6 = { "modelValue": { "type": "Box", "args": [5, 1.1, 2.7, 2, 1, 2] }, "materialType": "TransmissionMaterial", "materialProps": { "color": "#FFFFFF", "roughness": 0.11, "reflectivity": 0.73, "attenuationColor": "#6C6C6C", "attenuationDistance": 0.38, "chromaticAberration": 0, "anisotropicBlur": 0.37, "distortion": 0.3, "temporalDistortion": 0, "backside": false, "thickness": 0.17, "backsideThickness": 0.46 } };
    const eMeshState7 = { "text": "豪华邮轮探险号 - 3280GT", "size": 1.5, "height": 0.22, "curveSegments": 9, "bevelEnabled": true, "bevelThickness": 0.05, "bevelSize": 0.02, "bevelOffset": 0, "bevelSegments": 4, "center": true, "materialType": "MeshStandardMaterial", "materialProps": { "color": "#344AAB", "map": null, "wireframe": false, "opacity": 1, "transparent": false, "side": 0, "alphaTest": 0, "blending": 1, "depthTest": true, "depthWrite": true, "emissive": "#000000", "emissiveIntensity": 1, "metalness": 0.49, "roughness": 0.72, "metalnessMap": null, "roughnessMap": null, "normalMap": null, "normalScale": { "x": 1, "y": 1 }, "bumpMap": null, "bumpScale": 1, "displacementMap": null, "displacementScale": 0.85, "displacementBias": 0, "aoMap": null, "aoMapIntensity": 1, "envMap": null, "envMapIntensity": 1 } };
    const eMeshState8 = { "center": true, "transform": true, "sprite": false, "distanceFactor": 3, "domContent": '<div class="semi-wrap" aria-hidden="true">\n  <div class="semi">\n    <div class="ring" style="--p:86;"></div>\n    <div class="sheen"></div>\n  </div>\n\n  <div class="info">\n    <div class="label">仓位</div>\n    <div class="percent">86%</div>\n  </div>\n</div>\n\n<style>\n/* 组件局部变量，无全局污染 */\n.semi-wrap{\n  --size: 240px;\n  --thickness: 44px;\n  --accent: #2fb0ff;\n  --base: rgba(255,255,255,0.08);\n  --p: 86;\n\n  width: var(--size);\n  height: calc(var(--size)/2 + 56px);\n  position: relative;\n  font-family: "Segoe UI", Roboto, "PingFang SC", "Helvetica Neue", Arial;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n}\n\n/* 半圆容器 */\n.semi-wrap .semi{\n  width: var(--size);\n  height: var(--size);\n  position: absolute;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  overflow: hidden;\n  pointer-events: none;\n}\n\n/* 环 */\n.semi-wrap .ring{\n  --d: var(--size);\n  width: var(--d);\n  height: var(--d);\n  border-radius: 50%;\n  position: absolute;\n  left: 0;\n  top: 0;\n\n  transform: rotate(90deg);\n  transform-origin: 50% 50%;\n\n  background-image:\n    conic-gradient(from 180deg, var(--accent) calc(var(--p) * 1.8deg), transparent 0),\n    radial-gradient(circle at center,\n      transparent calc(50% - var(--thickness)),\n      rgba(0,0,0,0) calc(50% - var(--thickness) + .5px)\n    );\n  background-blend-mode: normal;\n\n  -webkit-mask:\n    radial-gradient(circle at center,\n      transparent calc(50% - var(--thickness)),\n      black calc(50% - var(--thickness) + .5px)\n    );\n  mask:\n    radial-gradient(circle at center,\n      transparent calc(50% - var(--thickness)),\n      black calc(50% - var(--thickness) + .5px)\n    );\n  -webkit-mask-composite: source-in;\n  mask-composite: exclude;\n\n  filter: drop-shadow(0 8px 20px rgba(47,176,255,0.14));\n}\n\n/* 高光 */\n.semi-wrap .sheen{\n  position: absolute;\n  width: var(--size);\n  height: var(--size);\n  left: 0;\n  top: 0;\n  border-radius: 50%;\n  pointer-events: none;\n  opacity: .9;\n\n  background:\n    conic-gradient(from 180deg,\n      rgba(255,255,255,0) 0deg,\n      rgba(255,255,255,.22) 2deg,\n      rgba(255,255,255,0) 4deg,\n      transparent 5deg\n    );\n\n  -webkit-mask:\n    radial-gradient(circle at center,\n      transparent calc(50% - var(--thickness)),\n      black calc(50% - var(--thickness) + .5px)\n    );\n  mask:\n    radial-gradient(circle at center,\n      transparent calc(50% - var(--thickness)),\n      black calc(50% - var(--thickness) + .5px)\n    );\n\n  animation: sheen-rotate 3.2s linear infinite;\n  transform-origin: 50% 50%;\n}\n\n/* 发光呼吸 */\n.semi-wrap .ring::after{\n  content: "";\n  position: absolute;\n  inset: 0;\n  border-radius: 50%;\n  pointer-events: none;\n\n  box-shadow: 0 0 18px rgba(47,176,255,0.12), 0 0 36px rgba(47,176,255,0.06);\n  opacity: 1;\n  animation: glow 2.8s ease-in-out infinite;\n\n  -webkit-mask:\n    radial-gradient(circle at center,\n      transparent calc(50% - var(--thickness)),\n      black calc(50% - var(--thickness) + .5px)\n    );\n  mask:\n    radial-gradient(circle at center,\n      transparent calc(50% - var(--thickness)),\n      black calc(50% - var(--thickness) + .5px)\n    );\n}\n\n/* 信息区 */\n.semi-wrap .info{\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  top: 4px;\n  text-align: center;\n  color: white;\n  pointer-events: none;\n  width: 100%;\n}\n\n.semi-wrap .label{\n  font-size: 26px;\n  opacity: 1;\n  margin-bottom: -8px;\n  font-weight: 800;\n}\n\n.semi-wrap .percent{\n  font-size: 32px;\n  font-weight: 800;\n  letter-spacing: .4px;\n  text-shadow: 0 3px 10px rgba(0,0,0,.45);\n}\n\n/* 动效 */\n@keyframes sheen-rotate{\n  from { transform: rotate(0deg); }\n  to   { transform: rotate(360deg); }\n}\n@keyframes glow{\n  0%   { opacity: .75; transform: scale(1); }\n  50%  { opacity: 1;   transform: scale(1.02); }\n  100% { opacity: .75; transform: scale(1); }\n}\n</style>' };
    const eMeshState9 = { "center": true, "transform": true, "sprite": false, "distanceFactor": 3, "domContent": '<div class="semi-wrap2" aria-hidden="true">\n  <div class="semi">\n    <div class="ring" style="--p:68;"></div>\n    <div class="sheen"></div>\n  </div>\n\n  <div class="info">\n    <div class="label">仓位</div>\n    <div class="percent">68%</div>\n  </div>\n</div>\n\n<style>\n/* 组件局部变量，无全局污染 */\n.semi-wrap2{\n  --size: 240px;           /* 外圆直径（半圆基于此） */\n  --thickness: 44px;       /* 环厚 */\n  --accent: #D32709;       /* 填充色（进度）*/\n  --base: rgba(255,255,255,0.08); /* 未填充透明/弱色（尽量透明）*/\n  --p: 68;                 /* 默认百分比（0-100），可覆盖到元素上 */\n\n  width: var(--size);\n  height: calc(var(--size)/2 + 56px);\n  position: relative;\n  font-family: "Segoe UI", Roboto, "PingFang SC", "Helvetica Neue", Arial;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n}\n\n/* 半圆容器 */\n.semi-wrap2 .semi{\n  width: var(--size);\n  height: var(--size);\n  position: absolute;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  overflow: hidden;\n  pointer-events: none;\n}\n\n/* 环 */\n.semi-wrap2 .ring{\n  --d: var(--size);\n  width: var(--d);\n  height: var(--d);\n  border-radius: 50%;\n  position: absolute;\n  left: 0;\n  top: 0;\n\n  transform: rotate(90deg);\n  transform-origin: 50% 50%;\n\n  background-image:\n    conic-gradient(from 180deg, var(--accent) calc(var(--p) * 1.8deg), transparent 0),\n    radial-gradient(circle at center,\n      transparent calc(50% - var(--thickness)),\n      rgba(0,0,0,0) calc(50% - var(--thickness) + .5px)\n    );\n  background-blend-mode: normal;\n\n  -webkit-mask:\n    radial-gradient(circle at center,\n      transparent calc(50% - var(--thickness)),\n      black calc(50% - var(--thickness) + .5px)\n    );\n  mask:\n    radial-gradient(circle at center,\n      transparent calc(50% - var(--thickness)),\n      black calc(50% - var(--thickness) + .5px)\n    );\n  -webkit-mask-composite: source-in;\n  mask-composite: exclude;\n\n  filter: drop-shadow(0 8px 20px rgba(47,176,255,0.14));\n}\n\n/* 高光 */\n.semi-wrap2 .sheen{\n  position: absolute;\n  width: var(--size);\n  height: var(--size);\n  left: 0;\n  top: 0;\n  border-radius: 50%;\n  pointer-events: none;\n  opacity: .9;\n\n  background:\n    conic-gradient(from 180deg,\n      rgba(255,255,255,0) 0deg,\n      rgba(255,255,255,.22) 2deg,\n      rgba(255,255,255,0) 4deg,\n      transparent 5deg\n    );\n\n  -webkit-mask:\n    radial-gradient(circle at center,\n      transparent calc(50% - var(--thickness)),\n      black calc(50% - var(--thickness) + .5px)\n    );\n  mask:\n    radial-gradient(circle at center,\n      transparent calc(50% - var(--thickness)),\n      black calc(50% - var(--thickness) + .5px)\n    );\n\n  animation: sheen-rotate 3.2s linear infinite;\n  transform-origin: 50% 50%;\n}\n\n/* 发光呼吸 */\n.semi-wrap2 .ring::after{\n  content: "";\n  position: absolute;\n  inset: 0;\n  border-radius: 50%;\n  pointer-events: none;\n\n  box-shadow: 0 0 18px rgba(47,176,255,0.12), 0 0 36px rgba(47,176,255,0.06);\n  opacity: 1;\n  animation: glow 2.8s ease-in-out infinite;\n\n  -webkit-mask:\n    radial-gradient(circle at center,\n      transparent calc(50% - var(--thickness)),\n      black calc(50% - var(--thickness) + .5px)\n    );\n  mask:\n    radial-gradient(circle at center,\n      transparent calc(50% - var(--thickness)),\n      black calc(50% - var(--thickness) + .5px)\n    );\n}\n\n/* 信息区 */\n.semi-wrap2 .info{\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  top: 4px;\n  text-align: center;\n  color: white;\n  pointer-events: none;\n  width: 100%;\n}\n\n.semi-wrap2 .label{\n  font-size: 26px;\n  opacity: 1;\n  margin-bottom: -8px;\n  font-weight: 800;\n}\n\n.semi-wrap2 .percent{\n  font-size: 32px;\n  font-weight: 800;\n  letter-spacing: .4px;\n  text-shadow: 0 3px 10px rgba(0,0,0,.45);\n}\n\n/* 动效 */\n@keyframes sheen-rotate{\n  from { transform: rotate(0deg); }\n  to   { transform: rotate(360deg); }\n}\n@keyframes glow{\n  0%   { opacity: .75; transform: scale(1); }\n  50%  { opacity: 1;   transform: scale(1.02); }\n  100% { opacity: .75; transform: scale(1); }\n}\n</style>' };
    const tvtDomPanel1visible = ref(false);
    const tvtDomPanel2visible = ref(false);
    window.tvtDomPanel1visible = tvtDomPanel1visible;
    window.tvtDomPanel2visible = tvtDomPanel2visible;
    return (_ctx, _cache) => {
      return _openBlock$1(), _createElementBlock$1("TresGroup", null, [
        (_openBlock$1(), _createBlock$1(_Suspense, null, {
          default: _withCtx$1(() => [
            _createVNode$1(_unref$1(_sfc_main$7), _mergeProps({
              position: [-135.023, 0.1, 10.726],
              rotation: [-1.55, 0, 0],
              scale: [5, 5, 5],
              name: "滚动箭头组件",
              uuid: "9d8aa48a-5303-4227-b335-f1740742de50",
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
            _createVNode$1(_unref$1(_sfc_main$7), _mergeProps({
              position: [95.032, 0.1, -45.215],
              rotation: [-1.5915919188276957, -17482726218845442e-20, -3.1331871250633148],
              scale: [5, 5, 5],
              name: "滚动箭头组件",
              uuid: "13b3c540-85ec-4529-93e8-a00027f08a3a",
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
            _createVNode$1(_unref$1(_sfc_main$8), _mergeProps({
              position: [13.619, 0.851, 24.773],
              rotation: [0, 0, 0],
              scale: [7, 1, 1],
              name: "图形合集组件",
              uuid: "59ba73a5-6d86-4c27-977e-78c95c7bb340",
              castShadow: false,
              receiveShadow: false,
              renderOrder: 0,
              visible: true
            }, eMeshState2), null, 16)
          ]),
          _: 1
        })),
        (_openBlock$1(), _createBlock$1(_Suspense, null, {
          default: _withCtx$1(() => [
            _createVNode$1(_unref$1(_sfc_main$9), _mergeProps({
              position: [11.285, 1.3900000000000001, 24.641000000000002],
              rotation: [-1.6600000000000004, 0, 0],
              scale: [1, 1, 1],
              name: "标准三维字体",
              uuid: "85280b80-7a1c-4031-8cc8-aaf70f892041",
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
            _createVNode$1(_unref$1(_sfc_main$a), _mergeProps({
              position: [-5.89, 0.354, 22.939],
              rotation: [-1.5298976620779419, -0.07073732188678589, -1.5679040721375466],
              scale: [1.5, 1, 1.5],
              name: "箭头线组件",
              uuid: "ea09fd01-9c32-4e07-838d-28a4d6379448",
              castShadow: false,
              receiveShadow: false,
              renderOrder: 0,
              visible: true
            }, eMeshState4), null, 16)
          ]),
          _: 1
        })),
        (_openBlock$1(), _createBlock$1(_Suspense, null, {
          default: _withCtx$1(() => [
            _createVNode$1(_unref$1(_sfc_main$a), _mergeProps({
              position: [-16.14, 0.354, -30.504],
              rotation: [-1.5298976620779419, -0.07073732188678589, -1.5679040721375466],
              scale: [1.5, 1, 1.5],
              name: "箭头线组件",
              uuid: "3a2b9c28-5cb3-40c2-9811-4e06fcf7ed3a",
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
            _createVNode$1(_unref$1(_sfc_main$8), _mergeProps({
              position: [2.387, 0.851, -27.739],
              rotation: [0, 0, 0],
              scale: [6.5, 1, 1],
              name: "图形合集组件",
              uuid: "fdd0ac03-4039-4a30-8c03-a1b5e170fef4",
              castShadow: false,
              receiveShadow: false,
              renderOrder: 0,
              visible: true
            }, eMeshState6), null, 16)
          ]),
          _: 1
        })),
        (_openBlock$1(), _createBlock$1(_Suspense, null, {
          default: _withCtx$1(() => [
            _createVNode$1(_unref$1(_sfc_main$9), _mergeProps({
              position: [0.40900000000000003, 1.3900000000000001, -27.722],
              rotation: [-1.6600000000000004, 0, 0],
              scale: [1, 1, 1],
              name: "标准三维字体",
              uuid: "124add95-dcae-4b8e-98cd-0fb79f90a276",
              castShadow: false,
              receiveShadow: false,
              renderOrder: 0,
              visible: true
            }, eMeshState7), null, 16)
          ]),
          _: 1
        })),
        (_openBlock$1(), _createBlock$1(_Suspense, null, {
          default: _withCtx$1(() => [
            _createVNode$1(_unref$1(_sfc_main$b), _mergeProps({
              position: [-20.97, 14.288, -44.687],
              rotation: [-9689998818189584e-33, 0.010000000000000989, 2446423349157282e-31],
              scale: [5, 5, 5],
              name: "dom面板",
              uuid: "00346b27-ba1e-4b17-a699-8ba3248060a6",
              castShadow: false,
              receiveShadow: false,
              renderOrder: 0,
              visible: tvtDomPanel1visible.value
            }, eMeshState8), null, 16, ["visible"])
          ]),
          _: 1
        })),
        (_openBlock$1(), _createBlock$1(_Suspense, null, {
          default: _withCtx$1(() => [
            _createVNode$1(_unref$1(_sfc_main$b), _mergeProps({
              position: [2.758, 9.34, 8.858],
              rotation: [-9689998818189584e-33, 0.010000000000000989, 2446423349157282e-31],
              scale: [5, 5, 5],
              name: "dom面板",
              uuid: "0c4f4069-85da-4feb-95c1-a808eb53f315",
              castShadow: false,
              receiveShadow: false,
              renderOrder: 0,
              visible: tvtDomPanel2visible.value
            }, eMeshState9), null, 16, ["visible"])
          ]),
          _: 1
        }))
      ]);
    };
  }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {unref:_unref,createVNode:_createVNode,createElementVNode:_createElementVNode,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,openBlock:_openBlock,createBlock:_createBlock,createCommentVNode:_createCommentVNode,resolveComponent:_resolveComponent,withCtx:_withCtx,Fragment:_Fragment,createElementBlock:_createElementBlock} = await importShared('vue');

const THREE = await importShared('three');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "freeShipSea",
  setup(__props) {
    const fState = { "size": 0.8, "wireframe": false, "waterColor": "#002E5C", "waves": { "A": { "direction": 0, "steepness": 0.16, "wavelength": 60 }, "B": { "direction": 30, "steepness": 0.24, "wavelength": 30 }, "C": { "direction": 60, "steepness": 0.33, "wavelength": 15 } }, "meshUUIDList": [{ "uuid": "670f59b7-487c-4cec-aaed-328e392965ff", "floatScale": 0.4, "yOffsetScale": 0.3 }, { "uuid": "75ef2b5c-62d6-4c23-b9c9-e8c2d6cd440a", "floatScale": 0.4, "yOffsetScale": 0.4 }, { "uuid": "52df6326-8128-4687-a752-51b56df75185", "floatScale": 1.1, "yOffsetScale": 0.68 }, { "uuid": "f0c2641d-e5d5-47cd-b638-91cbaf06af5e", "floatScale": 1.1, "yOffsetScale": 0.68 }, { "uuid": "6200a408-1b9f-4073-824a-063ae623a5ba", "floatScale": 1.2, "yOffsetScale": 0.68 }, { "uuid": "c37ca173-1ffd-43d5-8645-254547b96e36", "floatScale": 1.2, "yOffsetScale": 0.68 }, { "uuid": "59a38498-8204-4279-8d6b-c84704941f3c", "floatScale": 1.2, "yOffsetScale": 0.68 }], "scale": 0.81 };
    const gridState = { "cellSize": 0.6, "cellThickness": 1, "cellColor": "#6f6f6f", "sectionColor": "#63e2b7", "sectionSize": 3.3, "sectionThickness": 1.5, "fadeDistance": 25, "fadeStrength": 1, "infiniteGrid": true };
    const basiceEnvState = { "type": "desert", "on": true, "environmentIntensity": 1.2, "environmentRotations": { "x": 0.06, "y": 0, "z": 0 } };
    const sState = { "curTime": 7.6, "direct": -0.1, "intensity": 1, "shadowIntensity": 1, "toneMapping": 1, "toneMappingExposure": 0.99 };
    const pState = { "isOpenList": {}, "configList": {} };
    const tcConfig = {
      clearColor: "#201919",
      windowSize: true,
      shadows: true,
      toneMapping: THREE.ACESFilmicToneMapping,
      toneMappingExposure: 0.6,
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
      { functionName: "GLTFLoader", url: "https://oss.icegl.cn/p/modelServer/models/4海上标识/models/灯塔B.glb" },
      { functionName: "GLTFLoader", url: "https://oss.icegl.cn/p/modelServer/models/3船/models/货轮B.glb" },
      { functionName: "GLTFLoader", url: "https://oss.icegl.cn/p/modelServer/models/3船/models/游轮A.glb" },
      { functionName: "GLTFLoader", url: "https://oss.icegl.cn/p/modelServer/models/4海上标识/models/风电机B.glb" },
      { functionName: "GLTFLoader", url: "https://oss.icegl.cn/p/modelServer/models/4海上标识/models/风电机A.glb" },
      { functionName: "GLTFLoader", url: "https://oss.icegl.cn/p/modelServer/models/4海上标识/models/浮标A.glb" }
    ]);
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createElementBlock(_Fragment, null, [
        _createVNode(_unref(loading), { useResourceManager: "" }),
        _createVNode(_component_TresCanvas, _normalizeProps(_guardReactiveProps(tcConfig)), {
          default: _withCtx(() => [
            _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", {
              position: [37.98, 38.83, 49.21],
              fov: 75,
              aspect: 1,
              near: 1,
              far: 1e5
            }, null, -1)),
            _createVNode(_unref(Kk), {
              makeDefault: "",
              target: new THREE.Vector3(-1.76, 3.13, -19.4)
            }, null, 8, ["target"]),
            _cache[1] || (_cache[1] = _createElementVNode("TresAmbientLight", {
              color: 16777215,
              intensity: 0.5
            }, null, -1)),
            _createVNode(_unref(_sfc_main$c), _normalizeProps(_guardReactiveProps(viewportConfig)), null, 16),
            _createVNode(_sfc_main$5, {
              fState,
              gridState
            }),
            _createVNode(_sfc_main$4, _normalizeProps(_guardReactiveProps(sState)), null, 16),
            _unref(instance).hasAllFinished.value ? (_openBlock(), _createBlock(_sfc_main$3, { key: 0 })) : _createCommentVNode("", true),
            _unref(instance).hasAllFinished.value ? (_openBlock(), _createBlock(_sfc_main$1, { key: 1 })) : _createCommentVNode("", true),
            _createVNode(_sfc_main$2, { postProcessing: pState }),
            _createVNode(_unref(_sfc_main$d), _normalizeProps(_guardReactiveProps(basiceEnvState)), null, 16)
          ]),
          _: 1
        }, 16)
      ], 64);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=freeShipSea.D0w4ksr51767105581793.js.map
