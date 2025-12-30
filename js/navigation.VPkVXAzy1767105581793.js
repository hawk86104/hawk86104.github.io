import { importShared, _export_sfc, NA, Kk } from './index.BxB45aCK1767105581793.js';
import { OrbitControls } from './OrbitControls.zXZoX3Ge1767105581793.js';

const {defineComponent:_defineComponent$2} = await importShared('vue');

const {openBlock:_openBlock$2,createElementBlock:_createElementBlock$2} = await importShared('vue');

const _hoisted_1$1 = { id: "containerNav" };
const {onMounted: onMounted$1,watchEffect: watchEffect$1} = await importShared('vue');

const THREE = await importShared('three');
const _sfc_main$2 = /* @__PURE__ */ _defineComponent$2({
  __name: "navigation",
  props: {
    message: {}
  },
  setup(__props) {
    const props = __props;
    let scene = null;
    let camera = null;
    let renderer = null;
    let container = null;
    let cube = null;
    let initSence = () => {
      container = document.getElementById("containerNav");
      scene = new THREE.Scene();
      scene.background = new THREE.Color("#f7f7f9");
      camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1e4);
      camera.position.z = 2500;
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        canvas: container
      });
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
      var light = new THREE.AmbientLight(16777215);
      scene.add(light);
      var directionalLight = new THREE.DirectionalLight(16777215, 1);
      directionalLight.position.set(1, 1, 1).normalize();
      scene.add(directionalLight);
      const orbit = new OrbitControls(camera, renderer.domElement);
      orbit.enableDamping = true;
      orbit.dampingFactor = 0.05;
      orbit.enabled = true;
      orbit.enableZoom = true;
      orbit.enableRotate = true;
      orbit.enablePan = false;
      const axesHelper = new THREE.AxesHelper(5);
      scene.add(axesHelper);
      function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
      }
      animate();
    };
    let createNav = () => {
      let geometry = new THREE.BoxGeometry(1800, 1800, 1800);
      let materials = createMetrial();
      cube = new THREE.Mesh(geometry, materials);
      cube.position.set(0, 0, 0);
      scene.add(cube);
      initEvent(materials);
    };
    let createMetrial = () => {
      const CANVAS_SIZE = 256;
      let materials = [];
      let aa = ["右", "左", "上", "下", "前", "后"];
      aa.forEach(function(text) {
        var canvas = document.createElement("canvas");
        canvas.width = CANVAS_SIZE;
        canvas.height = CANVAS_SIZE;
        var context = canvas.getContext("2d");
        context.fillStyle = "#f6fcff";
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.fillStyle = "black";
        context.font = "bold 100px arial";
        context.textAlign = "center";
        context.textBaseline = "middle";
        context.fillText(text, canvas.width / 2, canvas.height / 2);
        var texture = new THREE.Texture(canvas);
        texture.needsUpdate = true;
        var material = new THREE.MeshStandardMaterial({
          map: texture,
          color: 16777215,
          emissive: 0,
          side: THREE.DoubleSide
        });
        materials.push(material);
      });
      return materials;
    };
    let initEvent = (materials) => {
      var raycaster = new THREE.Raycaster();
      var mouse = new THREE.Vector2();
      function onClick(event) {
        mouse.x = event.offsetX / container.clientWidth * 2 - 1;
        mouse.y = -(event.offsetY / container.clientHeight) * 2 + 1;
        raycaster.setFromCamera(mouse, camera);
        var intersects = raycaster.intersectObjects([cube]);
        for (var i = 0; i < materials.length; i++) {
          materials[i].emissive.set(0);
        }
        if (intersects.length > 0) {
          let index = intersects[0].face.materialIndex;
          updateMainCamera(index);
          materials[index].emissive.set("#eb780a");
        }
      }
      renderer.domElement.addEventListener("click", onClick, false);
    };
    let updateMainCamera = (index) => {
      console.log("message", props.message);
      let initCameraPos = 50;
      if (index == 4) {
        props.message.position.set(0, 0, initCameraPos);
      } else if (index == 5) {
        props.message.position.set(0, 0, -initCameraPos);
      } else if (index == 1) {
        props.message.position.set(-initCameraPos, 0, 0);
      } else if (index == 0) {
        props.message.position.set(initCameraPos, 0, 0);
      } else if (index == 3) {
        props.message.position.set(0, -initCameraPos, 0);
      } else if (index == 2) {
        props.message.position.set(0, initCameraPos, 0);
      }
      props.message.lookAt(new THREE.Vector3(0, 0, 0));
    };
    onMounted$1(() => {
      initSence();
      createNav();
    });
    watchEffect$1(() => {
    });
    return (_ctx, _cache) => {
      return _openBlock$2(), _createElementBlock$2("canvas", _hoisted_1$1);
    };
  }
});

const navigation = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-67395f0d"]]);

const {withAsyncContext:_withAsyncContext,defineComponent:_defineComponent$1} = await importShared('vue');

const {unref:_unref$1,openBlock:_openBlock$1,createElementBlock:_createElementBlock$1,createCommentVNode:_createCommentVNode} = await importShared('vue');

const _hoisted_1 = ["object"];
const {onMounted,watchEffect} = await importShared('vue');
const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "navScene",
  async setup(__props) {
    let __temp, __restore;
    const { state: pState } = ([__temp, __restore] = _withAsyncContext(() => NA(`${"https://opensource.cdn.icegl.cn"}/model/operationTool/湖中小亭/湖中小亭.gltf`)), __temp = await __temp, __restore(), __temp);
    onMounted(() => {
    });
    watchEffect(() => {
    });
    return (_ctx, _cache) => {
      return _unref$1(pState) ? (_openBlock$1(), _createElementBlock$1("primitive", {
        key: 0,
        object: _unref$1(pState)?.scene
      }, null, 8, _hoisted_1)) : _createCommentVNode("", true);
    };
  }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,createVNode:_createVNode,Suspense:_Suspense,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock,resolveComponent:_resolveComponent,mergeProps:_mergeProps,createElementBlock:_createElementBlock} = await importShared('vue');

const {reactive,ref} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "navigation",
  setup(__props) {
    const navSceneCamera = ref(null);
    const state = reactive({
      windowSize: true,
      alpha: true,
      antialias: true
    });
    const controlsState = reactive({
      enableDamping: true,
      enableZoom: true,
      enablePan: true,
      enableRotate: true,
      makeDefault: true
    });
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createElementBlock("div", null, [
        _createVNode(_component_TresCanvas, _mergeProps({ clearColor: "#201919" }, state), {
          default: _withCtx(() => [
            _createElementVNode("TresPerspectiveCamera", {
              fov: 60,
              near: 0.1,
              far: 2e3,
              position: [0, 0, 50],
              "look-at": [0, 0, 0],
              ref_key: "navSceneCamera",
              ref: navSceneCamera
            }, null, 512),
            _cache[0] || (_cache[0] = _createElementVNode("TresAmbientLight", { intensity: 2 }, null, -1)),
            _createVNode(_unref(Kk), _normalizeProps(_guardReactiveProps(controlsState)), null, 16),
            (_openBlock(), _createBlock(_Suspense, null, {
              default: _withCtx(() => [
                _createVNode(_sfc_main$1)
              ]),
              _: 1
            }))
          ]),
          _: 1
        }, 16),
        _createVNode(navigation, { message: navSceneCamera.value }, null, 8, ["message"])
      ]);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=navigation.VPkVXAzy1767105581793.js.map
