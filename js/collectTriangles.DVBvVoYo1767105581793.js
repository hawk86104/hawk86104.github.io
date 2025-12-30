import { importShared, Fs, _l, Kk, tk } from './index.BxB45aCK1767105581793.js';
import { _sfc_main$6 as _sfc_main$2 } from './generalFont.vue_vue_type_script_setup_true_lang.DqoG1H6g1767105581793.js';
import './default.vue_vue_type_script_setup_true_lang.DQGKkIwV1767105581793.js';
import './three-mesh-ui.module.CjQAT-M_1767105581793.js';
import './domPanel.vue_vue_type_style_index_0_lang.dV59iE041767105581793.js';
import { useLoader } from './customShaderMaterial.vue_vue_type_script_setup_true_lang.rDMIDGqx1767105581793.js';
import './index.vue_vue_type_script_setup_true_lang.D7-hpzmy1767105581793.js';
import { STLLoader } from './Resource.Dxl2bF_-1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';
import { INTERSECTED, CONTAINED, NOT_INTERSECTED, computeBoundsTree, disposeBoundsTree, acceleratedRaycast } from './ExtensionUtilities.DzCxl7kb1767105581793.js';

const THREE$1 = await importShared('three');


const initEvent = (mouse, brushActive, camera, mouseType, targetMesh, controls) => {
    window.addEventListener('pointermove', (e) => {
        mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
        brushActive.value = true;
    });

    window.addEventListener(
        'pointerdown',
        (e) => {
            mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
            mouseType.value = e.button;

            const raycaster = new THREE$1.Raycaster();
            raycaster.setFromCamera(mouse, camera.value);
            raycaster.firstHitOnly = true;

            const res = raycaster.intersectObject(targetMesh.value, true);
            brushActive.value = true;
            controls.enabled = res.length === 0;
        },
        true,
    );

    window.addEventListener(
        'pointerup',
        (e) => {
            mouseType.value = -1;
            if (e.pointerType === 'touch') {
                brushActive.value = false;
            }
        },
        true,
    );
};

const {withAsyncContext:_withAsyncContext,defineComponent:_defineComponent$1} = await importShared('vue');

const {unref:_unref$1,createElementVNode:_createElementVNode$1,Fragment:_Fragment$1,openBlock:_openBlock$1,createElementBlock:_createElementBlock$1} = await importShared('vue');

const _hoisted_1 = ["geometry", "material"];
const _hoisted_2 = ["geometry"];
const THREE = await importShared('three');

const {ref: ref$1,watchEffect} = await importShared('vue');
const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "model",
  props: {
    controls: {}
  },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    const initMeshBvh = () => {
      THREE.BufferGeometry.prototype.computeBoundsTree = computeBoundsTree;
      THREE.BufferGeometry.prototype.disposeBoundsTree = disposeBoundsTree;
      THREE.Mesh.prototype.raycast = acceleratedRaycast;
    };
    initMeshBvh();
    const geometry = ([__temp, __restore] = _withAsyncContext(() => useLoader(STLLoader, `${"https://opensource.cdn.icegl.cn"}/model/industry4/TR12J_OCC.stl`)), __temp = await __temp, __restore(), __temp);
    const material = new THREE.MeshStandardMaterial({ color: 16777215, roughness: 0.2, metalness: 1, vertexColors: true });
    const colorArray = new Uint8Array(geometry.attributes.position.count * 3);
    colorArray.fill(255);
    const colorAttr = new THREE.BufferAttribute(colorArray, 3, true);
    colorAttr.setUsage(THREE.DynamicDrawUsage);
    geometry.setAttribute("color", colorAttr);
    const targetMesh = ref$1(null);
    const brushMesh = ref$1(null);
    const brushActive = ref$1(false);
    const mouseType = ref$1(-1);
    const size = ref$1(0.2);
    const mouse = new THREE.Vector2();
    const { camera } = Fs();
    const raycaster = ref$1(new THREE.Raycaster());
    const pColor = { x: 15 / 255, y: 78 / 255, z: 85 / 255 };
    let bvh = null;
    watchEffect(() => {
      if (targetMesh.value) {
        console.log("targetMesh.value init", targetMesh.value);
        targetMesh.value.geometry.computeBoundsTree();
        bvh = geometry.boundsTree;
        initEvent(mouse, brushActive, camera, mouseType, targetMesh, props.controls.instance);
      }
    });
    const { onBeforeRender } = _l();
    onBeforeRender(() => {
      const indexAttr = geometry.index;
      if (!brushMesh.value) {
        return;
      }
      if (props.controls.instance.active || !brushActive.value) {
        brushMesh.value.visible = false;
      } else {
        brushMesh.value.scale.setScalar(size.value);
        raycaster.value.setFromCamera(mouse, camera.value);
        raycaster.value.firstHitOnly = true;
        const res = raycaster.value.intersectObject(targetMesh.value, true);
        if (res.length) {
          brushMesh.value.position.copy(res[0].point);
          props.controls.instance.enabled = false;
          brushMesh.value.visible = true;
          const inverseMatrix = new THREE.Matrix4();
          inverseMatrix.copy(targetMesh.value.matrixWorld).invert();
          const sphere = new THREE.Sphere();
          sphere.center.copy(brushMesh.value.position).applyMatrix4(inverseMatrix);
          sphere.radius = size.value * 100;
          const indices = [];
          const tempVec = new THREE.Vector3();
          bvh?.shapecast({
            intersectsBounds: (box) => {
              const intersects = sphere.intersectsBox(box);
              const { min, max } = box;
              if (intersects) {
                for (let x = 0; x <= 1; x++) {
                  for (let y = 0; y <= 1; y++) {
                    for (let z = 0; z <= 1; z++) {
                      tempVec.set(x === 0 ? min.x : max.x, y === 0 ? min.y : max.y, z === 0 ? min.z : max.z);
                      if (!sphere.containsPoint(tempVec)) {
                        return INTERSECTED;
                      }
                    }
                  }
                }
                return CONTAINED;
              }
              return intersects ? INTERSECTED : NOT_INTERSECTED;
            },
            intersectsTriangle: (tri, i, contained) => {
              if (contained || tri.intersectsSphere(sphere)) {
                const i3 = 3 * i;
                indices.push(i3, i3 + 1, i3 + 2);
              }
              return false;
            }
          });
          if (mouseType.value === 0 || mouseType.value === 2) {
            let r = 1, g = 1, b = 1;
            if (mouseType.value === 0) {
              r = pColor.x;
              g = pColor.y;
              b = pColor.z;
            }
            for (let i = 0, l = indices.length; i < l; i++) {
              const i2 = indexAttr.getX(indices[i]);
              colorAttr.setX(i2, r);
              colorAttr.setY(i2, g);
              colorAttr.setZ(i2, b);
            }
            colorAttr.needsUpdate = true;
          }
        } else {
          brushMesh.value.visible = false;
          props.controls.instance.enabled = true;
        }
      }
    });
    const paneControl = new Pane();
    const btn = paneControl.addButton({
      title: "点击按钮",
      label: "生成模型"
    });
    const outGeometry = new THREE.BufferGeometry();
    outGeometry.setAttribute("position", new THREE.BufferAttribute(new Float32Array(), 0));
    btn.on("click", () => {
      const outArray = [];
      const outNormalArray = [];
      for (let i = 0; i < colorAttr.count; i++) {
        if (colorAttr.getX(i) === pColor.x && colorAttr.getY(i) === pColor.y && colorAttr.getZ(i) === pColor.z) {
          outArray.push(geometry.attributes.position.getX(i), geometry.attributes.position.getY(i), geometry.attributes.position.getZ(i));
          outNormalArray.push(geometry.attributes.normal.getX(i), geometry.attributes.normal.getY(i), geometry.attributes.normal.getZ(i));
        }
      }
      const vertices = new Float32Array(outArray);
      outGeometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
      outGeometry.setAttribute("normal", new THREE.BufferAttribute(vertices, 3));
    });
    return (_ctx, _cache) => {
      return _openBlock$1(), _createElementBlock$1(_Fragment$1, null, [
        _createElementVNode$1("TresMesh", {
          ref_key: "targetMesh",
          ref: targetMesh,
          geometry: _unref$1(geometry),
          scale: 5e-3,
          material: _unref$1(material)
        }, null, 8, _hoisted_1),
        _createElementVNode$1("TresMesh", {
          ref_key: "brushMesh",
          ref: brushMesh,
          visible: false
        }, [..._cache[0] || (_cache[0] = [
          _createElementVNode$1("TresSphereGeometry", { args: [1, 40, 40] }, null, -1),
          _createElementVNode$1("TresMeshStandardMaterial", {
            color: 15483002,
            roughness: 0.75,
            metalness: 0,
            transparent: true,
            opacity: 0.5,
            premultipliedAlpha: true,
            emissive: 15483002,
            emissiveIntensity: 0.5
          }, null, -1)
        ])], 512),
        _createElementVNode$1("TresMesh", {
          geometry: _unref$1(outGeometry),
          position: [-2, -2, 2],
          scale: 5e-3
        }, [..._cache[1] || (_cache[1] = [
          _createElementVNode$1("TresMeshStandardMaterial", {
            color: "#023249",
            roughness: 0.2,
            metalness: 0,
            envMapIntensity: 0.2
          }, null, -1)
        ])], 8, _hoisted_2)
      ], 64);
    };
  }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {unref:_unref,createVNode:_createVNode,createElementVNode:_createElementVNode,mergeProps:_mergeProps,Suspense:_Suspense,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock,resolveComponent:_resolveComponent,Fragment:_Fragment,createElementBlock:_createElementBlock} = await importShared('vue');

const {reactive,ref} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "collectTriangles",
  setup(__props) {
    const state = reactive({
      clearColor: "#999999",
      antialias: true
    });
    const controlsState = reactive({
      autoRotate: false
    });
    const controlsRef = ref(null);
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createElementBlock(_Fragment, null, [
        _createVNode(_unref(_sfc_main$2)),
        _createVNode(_component_TresCanvas, _mergeProps(state, { "window-size": "" }), {
          default: _withCtx(() => [
            _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", {
              position: [5, 1, 15],
              fov: 30,
              near: 0.1,
              far: 1e3
            }, null, -1)),
            _createVNode(_unref(Kk), _mergeProps({
              ref_key: "controlsRef",
              ref: controlsRef
            }, controlsState), null, 16),
            _cache[1] || (_cache[1] = _createElementVNode("TresAmbientLight", { intensity: 1 }, null, -1)),
            (_openBlock(), _createBlock(_Suspense, null, {
              default: _withCtx(() => [
                _createVNode(_sfc_main$1, { controls: controlsRef.value }, null, 8, ["controls"])
              ]),
              _: 1
            })),
            (_openBlock(), _createBlock(_Suspense, null, {
              default: _withCtx(() => [
                _createVNode(_unref(tk), {
                  background: false,
                  files: ["pos-x.jpg", "neg-x.jpg", "pos-y.jpg", "neg-y.jpg", "pos-z.jpg", "neg-z.jpg"],
                  path: ("https://opensource.cdn.icegl.cn") + "/images/skyBox/6jpg/"
                }, null, 8, ["path"])
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
//# sourceMappingURL=collectTriangles.DVBvVoYo1767105581793.js.map
