import { importShared, Fs, gz, zr, _l, Kk, yk } from './index.BxB45aCK1767105581793.js';
import { _sfc_main$6 as _sfc_main$7 } from './generalFont.vue_vue_type_script_setup_true_lang.DqoG1H6g1767105581793.js';
import './default.vue_vue_type_script_setup_true_lang.DQGKkIwV1767105581793.js';
import './three-mesh-ui.module.CjQAT-M_1767105581793.js';
import './domPanel.vue_vue_type_style_index_0_lang.dV59iE041767105581793.js';
import './index.EB9aFE0Q1767105581793.js';
import './skyBoxAmesh.vue_vue_type_script_setup_true_lang.Cd3eKmZW1767105581793.js';
import './skyBoxBmesh.vue_vue_type_script_setup_true_lang.DvKDLewX1767105581793.js';
import { _sfc_main as _sfc_main$9 } from './skyBoxDmesh.vue_vue_type_script_setup_true_lang.DRUMhbde1767105581793.js';
import './reflectorDiffuse.vue_vue_type_script_setup_true_lang.BuW1EemC1767105581793.js';
import './reflectorDUDV.vue_vue_type_script_setup_true_lang.Cce3m26z1767105581793.js';
import './reflectorShaderMesh.vue_vue_type_script_setup_true_lang.D0T9d0go1767105581793.js';
import './dynamicRotatingBase.vue_vue_type_script_setup_true_lang.B3Epdjc31767105581793.js';
import './whiteFloorMesh.vue_vue_type_script_setup_true_lang.B9UIV1AE1767105581793.js';
import { _sfc_main as _sfc_main$8 } from './gridPlusCom.vue_vue_type_script_setup_true_lang.BIqyIrzr1767105581793.js';
import './videoFloor.vue_vue_type_script_setup_true_lang.BEyCiDvU1767105581793.js';
import './digitalGround.vue_vue_type_script_setup_true_lang.BPvRJNY41767105581793.js';
import './imgFloor.vue_vue_type_script_setup_true_lang.D-OHfrvs1767105581793.js';
import './reflectorRoundedBox.vue_vue_type_script_setup_true_lang.B0i-7O7p1767105581793.js';
import './particleBase.vue_vue_type_script_setup_true_lang.BTwaqkrr1767105581793.js';
import './rippleFloor.vue_vue_type_script_setup_true_lang.DU-KS3_f1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';
import { instance } from './Resource.Dxl2bF_-1767105581793.js';
import { gsapWithCSS } from './index.Dxfioss_1767105581793.js';
import { mergeGeometries } from './BufferGeometryUtils.NxcZsV4J1767105581793.js';
import { _sfc_main$2 as _sfc_main$6 } from './customShaderMaterial.vue_vue_type_script_setup_true_lang.rDMIDGqx1767105581793.js';
import './index.vue_vue_type_script_setup_true_lang.D7-hpzmy1767105581793.js';

const {defineComponent:_defineComponent$2} = await importShared('vue');

const {unref:_unref$5,createElementVNode:_createElementVNode$4,withCtx:_withCtx$3,createVNode:_createVNode$3,Fragment:_Fragment$4,openBlock:_openBlock$5,createElementBlock:_createElementBlock$5} = await importShared('vue');

const _hoisted_1$4 = ["object", "rotation-y"];
const _hoisted_2$3 = ["rotation", "geometry", "material"];
const THREE$4 = await importShared('three');
const {ref: ref$2,watchEffect: watchEffect$1} = await importShared('vue');
const _sfc_main$5 = /* @__PURE__ */ _defineComponent$2({
  __name: "officeBuild",
  setup(__props) {
    const { scene: model } = instance.getItem("officeBuild.glb");
    const { scene, camera } = Fs();
    const raycaster = ref$2(new THREE$4.Raycaster());
    model.traverse((child) => {
      if (child.isMesh) {
        child.frustumCulled = false;
        child.material.side = THREE$4.DoubleSide;
        child.castShadow = true;
        child.receiveShadow = true;
        child.material.emissive = child.material.color;
        child.material.emissiveMap = child.material.map;
        child.material.emissiveIntensity = 0.8;
        child.material.envmap = scene.value.background;
      }
    });
    const srcModel = model.clone();
    let curPointerFloorName = "";
    const reSrcMaterial = () => {
      model.getObjectByName(curPointerFloorName)?.traverse((child) => {
        if (child.isMesh) {
          child.material = srcModel.getObjectByName(child.name).material;
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
    };
    window.addEventListener("pointermove", (e) => {
      const mouse = new THREE$4.Vector2();
      mouse.x = e.clientX / window.innerWidth * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
      raycaster.value.setFromCamera(mouse, camera.value);
      const res = raycaster.value.intersectObject(model, true);
      if (res.length > 0 && res[0] && res[0].object && res[0].object.parent) {
        if (curPointerFloorName === res[0].object.parent.name) {
          return;
        }
        reSrcMaterial();
        res[0].object.parent.traverse((child) => {
          if (child.isMesh) {
            child.material = new THREE$4.MeshPhongMaterial({
              color: "#00d1ff",
              transparent: true,
              opacity: 0.7,
              // emissive: child.material.color,
              emissiveMap: child.material.map,
              emissiveIntensity: 2
            });
            child.castShadow = false;
            child.receiveShadow = false;
          }
        });
        curPointerFloorName = res[0].object.parent.name;
      } else {
        if (curPointerFloorName) {
          reSrcMaterial();
          curPointerFloorName = "";
        }
      }
    });
    let curClickFloorName = "";
    window.addEventListener("click", (e) => {
      const mouse = new THREE$4.Vector2();
      mouse.x = e.clientX / window.innerWidth * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
      raycaster.value.setFromCamera(mouse, camera.value);
      const res = raycaster.value.intersectObject(model, true);
      if (res.length > 0 && res[0] && res[0].object && res[0].object.parent) {
        if (curClickFloorName === "runing") {
          return;
        }
        if (curClickFloorName === res[0].object.parent.name) {
          gsapWithCSS.to(res[0].object.parent.position, {
            z: srcModel.getObjectByName(curClickFloorName).position.z,
            duration: 2,
            ease: "power1.inOut",
            onComplete: () => {
              curClickFloorName = "";
            }
          });
          curClickFloorName = "runing";
          return;
        }
        if (curClickFloorName) {
          gsapWithCSS.to(model.getObjectByName(curClickFloorName).position, {
            z: srcModel.getObjectByName(curClickFloorName).position.z,
            duration: 2,
            ease: "power1.inOut",
            onComplete: () => {
              curClickFloorName = "";
            }
          });
        }
        gsapWithCSS.to(res[0].object.parent.position, {
          z: srcModel.getObjectByName(res[0].object.parent.name).position.z - 40,
          duration: 2,
          ease: "power1.inOut",
          onComplete: () => {
            curClickFloorName = res[0].object.parent.name;
          }
        });
        curClickFloorName = "runing";
      }
    });
    const tooltipMaterial = new THREE$4.MeshPhysicalMaterial({
      roughness: 0.3,
      metalness: 0.05,
      color: "#3a4f75",
      envMapIntensity: 0.75,
      clearcoatRoughness: 0,
      clearcoat: 1
    });
    const { scene: tooltips } = instance.getItem("arctic_tooltip.glb");
    const tooltipRef = ref$2(null);
    watchEffect$1(() => {
      if (tooltipRef.value) {
        gsapWithCSS.to(tooltipRef.value.rotation, {
          y: Math.PI * 2.5,
          duration: 3,
          ease: "power1.inOut",
          repeat: -1,
          yoyo: true
        });
      }
    });
    return (_ctx, _cache) => {
      return _openBlock$5(), _createElementBlock$5(_Fragment$4, null, [
        _createElementVNode$4("primitive", {
          object: _unref$5(model),
          "cast-shadow": "",
          "receive-shadow": "",
          position: [13.5, 0, -45],
          scale: [0.2, 0.3, 0.2],
          name: "办公大厅",
          "rotation-y": Math.PI
        }, null, 8, _hoisted_1$4),
        _createElementVNode$4("TresMesh", {
          ref_key: "tooltipRef",
          ref: tooltipRef,
          scale: [0.05, 0.02, 4e-3],
          rotation: [0, Math.PI / 2, 0],
          position: [12, 25, -35],
          geometry: _unref$5(tooltips).getObjectByName("Arctic_Tooltip_lambert4_0").geometry,
          material: _unref$5(tooltipMaterial)
        }, [
          _createVNode$3(_unref$5(gz), {
            center: true,
            transform: ""
          }, {
            default: _withCtx$3(() => [..._cache[0] || (_cache[0] = [
              _createElementVNode$4("h1", {
                class: "text-xs p-0.5 rounded -mt-10 text-white font-bold",
                style: { "font-size": "78rem", "width": "5em", "text-align": "center", "margin-top": "1em", "scale": "0.7 1.5" }
              }, " 楼宇分层 ", -1)
            ])]),
            _: 1
          })
        ], 8, _hoisted_2$3)
      ], 64);
    };
  }
});

const {unref:_unref$4,createElementVNode:_createElementVNode$3,withCtx:_withCtx$2,createVNode:_createVNode$2,Fragment:_Fragment$3,openBlock:_openBlock$4,createElementBlock:_createElementBlock$4} = await importShared('vue');


const _hoisted_1$3 = ["object", "rotation-y"];
const _hoisted_2$2 = ["rotation", "geometry", "material"];
const THREE$3 = await importShared('three');
const {ref: ref$1,watchEffect} = await importShared('vue');


const _sfc_main$4 = {
  __name: 'laboratoryBuild',
  setup(__props) {

const { scene: model } = instance.getItem('laboratoryBuild.glb');
const { scene } = zr();

const geometryArr = [];
const materialArr = [];
model.traverse((child) => {
    child.updateMatrixWorld(true);
    if (child.isMesh) {
        child.geometry.applyMatrix4(child.matrixWorld);
        geometryArr.push(child.geometry);

        // child.material.emissive = child.material.color
        child.material.emissiveMap = child.material.map;
        child.material.emissiveIntensity = 0.1;
        child.material.envmap = scene.value.background;
        materialArr.push(child.material);
    }
});
const geometryMerged = mergeGeometries(geometryArr, true);
const meshMerged = new THREE$3.Mesh(geometryMerged, materialArr);

const { scene: tooltips } = instance.getItem('arctic_tooltip.glb');
const tooltipMaterial = new THREE$3.MeshPhysicalMaterial({
    roughness: 0.3,
    metalness: 0.05,
    color: '#b07560',
    envMapIntensity: 0.75,
    clearcoatRoughness: 0,
    clearcoat: 1,
});

const tooltipRef = ref$1(null);
watchEffect(() => {
    if (tooltipRef.value) {
        gsapWithCSS.to(tooltipRef.value.rotation, {
            y: Math.PI * 2.5,
            duration: 3,
            ease: 'power1.inOut',
            repeat: -1,
            yoyo: true,
        });
    }
});

return (_ctx, _cache) => {
  return (_openBlock$4(), _createElementBlock$4(_Fragment$3, null, [
    _createElementVNode$3("primitive", {
      object: _unref$4(meshMerged),
      "cast-shadow": "",
      "receive-shadow": "",
      position: [-33, 0, 7],
      scale: [0.7, 1.2, 0.7],
      name: "实验楼",
      "rotation-y": Math.PI / 2
    }, null, 8, _hoisted_1$3),
    _createElementVNode$3("TresMesh", {
      ref_key: "tooltipRef",
      ref: tooltipRef,
      scale: [0.03, 0.02, 0.004],
      rotation: [0, Math.PI / 2, 0],
      position: [-32, 27, 12],
      geometry: _unref$4(tooltips).getObjectByName('Arctic_Tooltip_lambert4_0').geometry,
      material: _unref$4(tooltipMaterial)
    }, [
      _createVNode$2(_unref$4(gz), {
        center: true,
        transform: ""
      }, {
        default: _withCtx$2(() => [...(_cache[0] || (_cache[0] = [
          _createElementVNode$3("h1", {
            class: "text-xs p-0.5 rounded -mt-10 text-white font-bold",
            style: {"font-size":"78rem","width":"4em","text-align":"center","margin-top":"1em"}
          }, "实验楼", -1)
        ]))]),
        _: 1
      })
    ], 8, _hoisted_2$2)
  ], 64))
}
}

};

const {unref:_unref$3,createElementVNode:_createElementVNode$2,withCtx:_withCtx$1,createVNode:_createVNode$1,normalizeProps:_normalizeProps$1,guardReactiveProps:_guardReactiveProps$1,Fragment:_Fragment$2,openBlock:_openBlock$3,createElementBlock:_createElementBlock$3} = await importShared('vue');


const _hoisted_1$2 = ["object"];
const _hoisted_2$1 = ["rotation", "geometry"];
const THREE$2 = await importShared('three');

const {ref,watch: watch$2} = await importShared('vue');

const velocity = 0.0003; // 移动速度

const _sfc_main$3 = {
  __name: 'car',
  props: {
    darkModel: {
        type: Boolean,
        default: false,
    },
},
  setup(__props) {

const props = __props;

const materialState = {
    color: '#ffda99',
    roughness: 0.21,
    reflectivity: 1,
    attenuationColor: '#ffda35',
    attenuationDistance: 2,
    chromaticAberration: 0.05,
    anisotropicBlur: 0.1,
    distortion: 1.8,
    temporalDistortion: 0,
    backside: false,
    thickness: 1,
    backsideThickness: 0.5,
};

const { scene } = Fs();

// const {
//     scene: model,
//     nodes,
//     materials,
// } = await useGLTF('./plugins/industry4/model/lambo.glb', {
//     draco: true,
//     decoderPath: './draco/',
// })
const { scene: model, nodes, materials } = instance.getItem('lambo.glb');

model.children[0].scale.setScalar(0.02);
nodes.glass_003.scale.setScalar(2.7);
materials.FrameBlack.roughness = 0;
materials.FrameBlack.metalness = 0.75;

materials.Chrome.metalness = 1;
materials.Chrome.roughness = 0;

materials.BreakDiscs.metalness = 0.2;
materials.BreakDiscs.roughness = 0.2;

materials.TiresGum.metalness = 0;
materials.TiresGum.roughness = 0.4;

materials.GreyElements.metalness = 0;

nodes.yellow_WhiteCar_0.material = new THREE$2.MeshPhysicalMaterial({
    roughness: 0.3,
    metalness: 0.05,
    color: '#ffda35',
    envMapIntensity: 0.75,
    clearcoatRoughness: 0,
    clearcoat: 1,
});

Object.values(nodes).forEach((node) => {
    if (node.isMesh) {
        if (node.name.startsWith('glass')) node.geometry.computeVertexNormals();
        if (node.name === 'silver_001_BreakDiscs_0') {
            node.material = materials.BreakDiscs.clone();
            node.material.color = new THREE$2.Color('#ddd');
        }
        node.castShadow = true;
        node.receiveShadow = true;
        // node.material.emissive = node.material.color
        node.material.emissiveMap = node.material.map;
        node.material.emissiveIntensity = 0.1;
        node.material.envmap = scene.value.background;
    }
});
const spotLight = new THREE$2.SpotLight(0xffffff);
model.add(spotLight);
model.add(spotLight.target);
spotLight.angle = Math.PI / 4;
spotLight.position.set(0, 2, 5);
spotLight.target.position.set(0, 1, 7);
spotLight.penumbra = 0.1;
spotLight.decay = 0.01;
spotLight.intensity = 3;
spotLight.castShadow = true;
spotLight.shadow.mapSize.width = 1024;
spotLight.shadow.mapSize.height = 1024;
spotLight.shadow.camera.near = 0.1;
spotLight.shadow.camera.far = 1000;
spotLight.shadow.camera.bias = 0.005; // 去除摩尔纹、伪影
spotLight.visible = true;

const { scene: tooltips } = instance.getItem('arctic_tooltip.glb');

const curve = new THREE$2.CatmullRomCurve3([
    new THREE$2.Vector3(10, 1.5, 35),
    new THREE$2.Vector3(35, 1.5, 35),
    new THREE$2.Vector3(35, 1.5, -80),
    new THREE$2.Vector3(47, 1.5, -80),
    new THREE$2.Vector3(47, 1.5, 35),
    new THREE$2.Vector3(100, 1.5, 35),
    new THREE$2.Vector3(100, 1.5, 47),
    new THREE$2.Vector3(-100, 1.5, 47),
    new THREE$2.Vector3(-100, 1.5, 35),
]);
curve.curveType = 'catmullrom'; // 曲线类型
curve.closed = true; // 是否封闭曲线
curve.tension = 0.2; // 设置线的张力，0为无弧度折线

// const points = curve.getPoints()
// const geometry = new THREE.BufferGeometry().setFromPoints(points)
// const material = new THREE.LineBasicMaterial({ color: 0xffff00 })
// const curveObject = new THREE.Line(geometry, material)
// curveObject.position.y = 2
// scene.value.add(curveObject)

const tooltipRef = ref(null);
let progress = 0;
const moveOnCurve = () => {
    if (curve) {
        if (progress <= 1 - velocity) {
            const point = curve.getPointAt(progress);
            const pointBox = curve.getPointAt(progress + velocity);

            if (point && pointBox) {
                tooltipRef.value.position.set(point.x, point.y + 6, point.z);
                model.position.set(point.x, point.y, point.z);
                model.lookAt(pointBox.x, pointBox.y, pointBox.z);

                // 若模型加载进来默认面部是正对Z轴负方向的，所以直接lookAt会导致出现倒着跑的现象，这里用重新设置朝向的方法来解决。
                // const offsetAngle = 22 // 目标移动时的朝向偏移
                // const mtx = new THREE.Matrix4() // 创建一个4维矩阵
                // mtx.lookAt(model.position, pointBox, model.up) // 设置朝向
                // mtx.multiply(new THREE.Matrix4().makeRotationFromEuler(new THREE.Euler(0, offsetAngle, 0)))
                // const toRot = new THREE.Quaternion().setFromRotationMatrix(mtx) //计算出需要进行旋转的四元数值
                // model.quaternion.slerp(toRot, 0.2)
            }
            progress += velocity;
        } else {
            progress = 0;
        }
    }
};
watch$2(tooltipRef, (value) => {
    if (value) {
        gsapWithCSS.to(tooltipRef.value.rotation, {
            y: Math.PI * 2.5,
            duration: 3,
            ease: 'power1.inOut',
            repeat: -1,
            yoyo: true,
        });
    }
});

watch$2(
    () => props.darkModel,
    (value) => {
        if (spotLight) {
            spotLight.visible = value;
        }
    },
    { immediate: true },
);
const { onBeforeRender } = _l();
onBeforeRender(() => {
    moveOnCurve();
});

return (_ctx, _cache) => {
  return (_openBlock$3(), _createElementBlock$3(_Fragment$2, null, [
    _createElementVNode$2("primitive", { object: _unref$3(model) }, null, 8, _hoisted_1$2),
    _createElementVNode$2("TresMesh", {
      ref_key: "tooltipRef",
      ref: tooltipRef,
      scale: [0.03, 0.02, 0.004],
      rotation: [0, Math.PI / 2, 0],
      position: [10, 6, 35],
      geometry: _unref$3(tooltips).getObjectByName('Arctic_Tooltip_lambert4_0').geometry
    }, [
      _createVNode$1(_unref$3(gz), {
        center: true,
        transform: ""
      }, {
        default: _withCtx$1(() => [...(_cache[0] || (_cache[0] = [
          _createElementVNode$2("h1", {
            class: "text-xs p-0.5 rounded -mt-10 text-#ffff99 font-bold",
            style: {"font-size":"78rem","width":"4em","text-align":"center","margin-top":"1em"}
          }, " 别追我 ", -1)
        ]))]),
        _: 1
      }),
      _createVNode$1(_unref$3(_sfc_main$6), _normalizeProps$1(_guardReactiveProps$1(materialState)), null, 16)
    ], 8, _hoisted_2$1)
  ], 64))
}
}

};

const {defineComponent:_defineComponent$1} = await importShared('vue');

const {unref:_unref$2,openBlock:_openBlock$2,createElementBlock:_createElementBlock$2} = await importShared('vue');

const _hoisted_1$1 = ["object"];
const {watch: watch$1} = await importShared('vue');
const _sfc_main$2 = /* @__PURE__ */ _defineComponent$1({
  __name: "sculpture",
  props: {
    darkModel: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const { scene: model } = instance.getItem("vr_sculpture_park.glb");
    const { scene } = zr();
    model.traverse(async (child) => {
      if (child.isMesh) {
        child.material.emissiveMap = child.material.map;
        child.material.emissive = child.material.color;
        child.material.envmap = scene.value.background;
        child.castShadow = true;
        child.receiveShadow = true;
        child.frustumCulled = false;
      }
      if (child.isObject3D) {
        child.frustumCulled = false;
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
    watch$1(
      () => props.darkModel,
      (value) => {
        if (model) {
          model.traverse(async (child) => {
            if (child.isMesh) {
              if (value === false) {
                child.material.emissiveIntensity = 0.6;
              } else {
                child.material.emissiveIntensity = 0;
              }
            }
          });
        }
      },
      { immediate: true }
    );
    return (_ctx, _cache) => {
      return _openBlock$2(), _createElementBlock$2("primitive", {
        "cast-shadow": "",
        "receive-shadow": "",
        object: _unref$2(model),
        name: "主场景"
      }, null, 8, _hoisted_1$1);
    };
  }
});

const {unref:_unref$1,createElementVNode:_createElementVNode$1,Fragment:_Fragment$1,openBlock:_openBlock$1,createElementBlock:_createElementBlock$1} = await importShared('vue');


const _hoisted_1 = { position: [10, 0, 0] };
const _hoisted_2 = { position: [-33 * 4, 0, 40.4] };
const _hoisted_3 = ["object"];
const _hoisted_4 = { position: [-33 * 3, 0, 40.4] };
const _hoisted_5 = ["object"];
const _hoisted_6 = { position: [-33 * 2, 0, 40.4] };
const _hoisted_7 = ["object"];
const _hoisted_8 = { position: [-33, 0, 40.4] };
const _hoisted_9 = ["object"];
const _hoisted_10 = { position: [0, 0, 40.4] };
const _hoisted_11 = ["object"];
const _hoisted_12 = { position: [33 * 2 - 5.5, 0, 40.4] };
const _hoisted_13 = ["object"];
const _hoisted_14 = { position: [33 * 3 - 5.5, 0, 40.4] };
const _hoisted_15 = ["object"];
const _hoisted_16 = { position: [-3.3, -0.2, 18] };
const _hoisted_17 = { position: [0, 0, 0] };
const _hoisted_18 = ["object"];
const _hoisted_19 = { position: [0, 0, 33 * 1] };
const _hoisted_20 = ["object"];
const _hoisted_21 = { position: [0, 0, 33 * 2] };
const _hoisted_22 = ["object"];
const _hoisted_23 = { position: [0, 0, 33 * 3] };
const _hoisted_24 = ["object"];
const _hoisted_25 = { position: [0, 0, 33 * 5 - 6] };
const _hoisted_26 = ["object"];
const _hoisted_27 = { position: [0, 0, 33 * 6 - 6] };
const _hoisted_28 = ["object"];

const THREE$1 = await importShared('three');


const _sfc_main$1 = {
  __name: 'street',
  setup(__props) {

const curResource = instance.getItem('low_poly_street.glb');
const nodes = curResource.nodes;
const Cube497_530 = nodes.Sketchfab_model.getObjectByName('Cube497_530');
Cube497_530.children[0].receiveShadow = true;
const Cube549_582 = nodes.Sketchfab_model.getObjectByName('Cube549_582');
Cube549_582.children[0].receiveShadow = true;
const Cube550_583 = nodes.Sketchfab_model.getObjectByName('Cube550_583');
Cube550_583.children[0].receiveShadow = true;
const Cube551_854 = nodes.Sketchfab_model.getObjectByName('Cube551_854');
Cube551_854.children[0].receiveShadow = true;
const Cube552_855 = nodes.Sketchfab_model.getObjectByName('Cube552_855');
Cube552_855.children[0].receiveShadow = true;
const Cube553_856 = nodes.Sketchfab_model.getObjectByName('Cube553_856');
Cube553_856.children[0].receiveShadow = true;

const group = new THREE$1.Group();
group.add(Cube497_530, Cube549_582, Cube550_583, Cube551_854, Cube552_855, Cube553_856);
group.scale.setScalar(0.83);
group.rotation.set(0, 0.008, 0);
const box = new THREE$1.Box3().setFromObject(group);
const center = new THREE$1.Vector3();
box.getCenter(center);
group.position.x = -center.x;
group.position.y = -center.y;
group.position.z = -center.z;

const group2 = group.clone();
group2.rotateY(Math.PI / 2);

return (_ctx, _cache) => {
  return (_openBlock$1(), _createElementBlock$1(_Fragment$1, null, [
    _createElementVNode$1("TresGroup", _hoisted_1, [
      _createElementVNode$1("TresGroup", _hoisted_2, [
        _createElementVNode$1("primitive", {
          object: _unref$1(group).clone()
        }, null, 8, _hoisted_3)
      ]),
      _createElementVNode$1("TresGroup", _hoisted_4, [
        _createElementVNode$1("primitive", {
          object: _unref$1(group).clone()
        }, null, 8, _hoisted_5)
      ]),
      _createElementVNode$1("TresGroup", _hoisted_6, [
        _createElementVNode$1("primitive", {
          object: _unref$1(group).clone()
        }, null, 8, _hoisted_7)
      ]),
      _createElementVNode$1("TresGroup", _hoisted_8, [
        _createElementVNode$1("primitive", {
          object: _unref$1(group).clone()
        }, null, 8, _hoisted_9)
      ]),
      _createElementVNode$1("TresGroup", _hoisted_10, [
        _createElementVNode$1("primitive", {
          object: _unref$1(group).clone()
        }, null, 8, _hoisted_11)
      ]),
      _createElementVNode$1("TresGroup", _hoisted_12, [
        _createElementVNode$1("primitive", {
          object: _unref$1(group).clone()
        }, null, 8, _hoisted_13)
      ]),
      _createElementVNode$1("TresGroup", _hoisted_14, [
        _createElementVNode$1("primitive", {
          object: _unref$1(group).clone()
        }, null, 8, _hoisted_15)
      ])
    ]),
    _createElementVNode$1("TresGroup", _hoisted_16, [
      _createElementVNode$1("TresGroup", _hoisted_17, [
        _createElementVNode$1("primitive", {
          object: _unref$1(group2).clone()
        }, null, 8, _hoisted_18)
      ]),
      _createElementVNode$1("TresGroup", _hoisted_19, [
        _createElementVNode$1("primitive", {
          object: _unref$1(group2).clone()
        }, null, 8, _hoisted_20)
      ]),
      _createElementVNode$1("TresGroup", _hoisted_21, [
        _createElementVNode$1("primitive", {
          object: _unref$1(group2).clone()
        }, null, 8, _hoisted_22)
      ]),
      _createElementVNode$1("TresGroup", _hoisted_23, [
        _createElementVNode$1("primitive", {
          object: _unref$1(group2).clone()
        }, null, 8, _hoisted_24)
      ]),
      _createElementVNode$1("TresGroup", _hoisted_25, [
        _createElementVNode$1("primitive", {
          object: _unref$1(group2).clone()
        }, null, 8, _hoisted_26)
      ]),
      _createElementVNode$1("TresGroup", _hoisted_27, [
        _createElementVNode$1("primitive", {
          object: _unref$1(group2).clone()
        }, null, 8, _hoisted_28)
      ])
    ])
  ], 64))
}
}

};

const {defineComponent:_defineComponent} = await importShared('vue');

const {unref:_unref,createVNode:_createVNode,createElementVNode:_createElementVNode,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock,createCommentVNode:_createCommentVNode,mergeProps:_mergeProps,Suspense:_Suspense,resolveComponent:_resolveComponent,Fragment:_Fragment,createElementBlock:_createElementBlock} = await importShared('vue');
const {reactive,shallowRef,watch} = await importShared('vue');
const THREE = await importShared('three');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "simplePark",
  setup(__props) {
    instance.loadResources([
      { functionName: "GLTFLoader", url: `${"https://opensource.cdn.icegl.cn"}/model/digitalPark/officeBuild.glb` },
      { functionName: "GLTFLoader", url: "./plugins/digitalPark/model/arctic_tooltip.glb" },
      { functionName: "GLTFLoader", url: "./plugins/digitalPark/model/laboratoryBuild.glb" },
      { functionName: "GLTFLoader", url: `${"https://opensource.cdn.icegl.cn"}/model/digitalPark/low_poly_street.glb` },
      { functionName: "GLTFLoader", url: "./plugins/digitalPark/model/vr_sculpture_park.glb" },
      { functionName: "GLTFLoader", url: "./plugins/industry4/model/lambo.glb" }
    ]);
    const state = reactive({
      // clearColor: '#201919',
      shadows: true,
      shadowMap: true,
      shadowMapType: THREE.PCFSoftShadowMap,
      windowSize: true
    });
    const controlsState = reactive({
      enableDamping: true,
      dampingFactor: 0.05
    });
    const gridState = reactive({
      cellSize: 10,
      cellThickness: 1,
      cellColor: "#4c4c4c",
      sectionColor: "#bbc26b",
      sectionSize: 50,
      sectionThickness: 3,
      fadeDistance: 600,
      fadeStrength: 3,
      followCamera: false,
      infiniteGrid: true
    });
    const TDirectionalLight = shallowRef();
    watch(TDirectionalLight, (value) => {
      if (value) {
        TDirectionalLight.value.shadow.mapSize.set(1024 * 5, 1024 * 5);
        TDirectionalLight.value.shadow.bias = -1e-5;
        TDirectionalLight.value.shadow.color = new THREE.Color(0);
        TDirectionalLight.value.shadow.camera.near = 0.5;
        TDirectionalLight.value.shadow.camera.far = 5e4;
        TDirectionalLight.value.shadow.camera.top = 300;
        TDirectionalLight.value.shadow.camera.right = 300;
        TDirectionalLight.value.shadow.camera.left = -300;
        TDirectionalLight.value.shadow.camera.bottom = -300;
      }
    });
    const darkModel = shallowRef(false);
    const paneControl = new Pane();
    const tcRef = shallowRef();
    paneControl.addBinding(darkModel, "value", { label: "黑夜模式" });
    watch(darkModel, (value) => {
      if (TDirectionalLight.value) {
        TDirectionalLight.value.visible = !value;
        if (tcRef.value) {
          tcRef.value.context.scene.value.backgroundIntensity = value ? 0 : 1;
        }
      }
    });
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createElementBlock(_Fragment, null, [
        _createVNode(_unref(_sfc_main$7), { useResourceManager: "" }),
        _createVNode(_component_TresCanvas, _mergeProps(state, {
          ref_key: "tcRef",
          ref: tcRef
        }), {
          default: _withCtx(() => [
            _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", {
              position: [40, 30, 82],
              fov: 45,
              near: 0.1,
              far: 1e4
            }, null, -1)),
            _createVNode(_unref(Kk), _normalizeProps(_guardReactiveProps(controlsState)), null, 16),
            _cache[1] || (_cache[1] = _createElementVNode("TresAmbientLight", { intensity: 0.1 }, null, -1)),
            _createVNode(_unref(yk), null, {
              default: _withCtx(() => [
                _createElementVNode("TresDirectionalLight", {
                  ref_key: "TDirectionalLight",
                  ref: TDirectionalLight,
                  position: [80, 80, -8],
                  intensity: 3,
                  castShadow: true
                }, null, 512)
              ]),
              _: 1
            }),
            _unref(instance).hasAllFinished.value ? (_openBlock(), _createBlock(_sfc_main$5, { key: 0 })) : _createCommentVNode("", true),
            _unref(instance).hasAllFinished.value ? (_openBlock(), _createBlock(_sfc_main$4, { key: 1 })) : _createCommentVNode("", true),
            _unref(instance).hasAllFinished.value ? (_openBlock(), _createBlock(_sfc_main$1, { key: 2 })) : _createCommentVNode("", true),
            _unref(instance).hasAllFinished.value ? (_openBlock(), _createBlock(_sfc_main$2, {
              key: 3,
              darkModel: darkModel.value
            }, null, 8, ["darkModel"])) : _createCommentVNode("", true),
            _unref(instance).hasAllFinished.value ? (_openBlock(), _createBlock(_sfc_main$3, {
              key: 4,
              darkModel: darkModel.value
            }, null, 8, ["darkModel"])) : _createCommentVNode("", true),
            _createVNode(_unref(_sfc_main$8), _mergeProps({ args: [100, 100] }, gridState, { position: [0, -10, 0] }), null, 16),
            (_openBlock(), _createBlock(_Suspense, null, {
              default: _withCtx(() => [
                _createVNode(_unref(_sfc_main$9), {
                  environment: false,
                  texture: "./plugins/skyBox/image/kloofendal_48d_partly_cloudy_puresky.jpg"
                })
              ]),
              _: 1
            }))
          ]),
          _: 1
        }, 16)
      ], 64);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=simplePark.CRAMdcfw1767105581793.js.map
