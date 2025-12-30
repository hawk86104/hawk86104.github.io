import { importShared, Fs, Kk } from './index.BxB45aCK1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';

const {defineComponent:_defineComponent$1} = await importShared('vue');

const {onMounted,watchEffect,ref} = await importShared('vue');

const THREE = await importShared('three');
const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "drawArrows",
  setup(__props) {
    const { camera, scene } = Fs();
    const raycaster = ref(new THREE.Raycaster());
    const mouse = new THREE.Vector2();
    const points = [];
    ref(null);
    const planeGeometry = new THREE.PlaneGeometry(200, 200);
    const planeMaterial = new THREE.MeshBasicMaterial({ color: 65280, side: THREE.DoubleSide });
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.set(0, 0, Math.PI / 2);
    scene.value.add(plane);
    let type = "";
    const initLine = function() {
      window.addEventListener("click", onMouseClick, false);
    };
    let onMouseRightClick = function(event) {
      event.preventDefault();
      window.removeEventListener("click", onMouseClick, false);
      window.removeEventListener("contextmenu", onMouseRightClick, false);
    };
    let onMouseClick = function(event) {
      mouse.x = event.clientX / window.innerWidth * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      raycaster.value.setFromCamera(mouse, camera.value);
      const intersects = raycaster.value.intersectObject(plane);
      if (intersects.length > 0) {
        const point = intersects[0].point;
        points.push(new THREE.Vector3(point.x, point.y, 0));
        switch (type) {
          case "line":
            updatePolygonLine(intersects[0].normal);
            break;
        }
      }
    };
    let updatePolygonLine = function(normal) {
      if (points.length == 2) {
        const path = new THREE.CatmullRomCurve3(points);
        const tubeGeometry = new THREE.TubeGeometry(path, 20, 2, 8, false);
        const material = new THREE.MeshBasicMaterial({ color: 16711680 });
        const tube = new THREE.Mesh(tubeGeometry, material);
        scene.value.add(tube);
        const dir = normal;
        const group1 = cloneTube(path, dir, Math.PI / 5);
        scene.value.add(group1);
        const group2 = cloneTube(path, dir, -Math.PI / 5);
        scene.value.add(group2);
        const sphere = drawSphere(points[1]);
        scene.value.add(sphere);
        points.length = 0;
      }
    };
    let drawSphere = function(position) {
      const sphereGeometry = new THREE.SphereGeometry(1.8, 32, 32);
      const sphereMaterial = new THREE.MeshBasicMaterial({ color: 16711680 });
      const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
      sphere.position.copy(position);
      return sphere;
    };
    let cloneTube = function(path, dir, angle) {
      const cutoffRatio = 0.8;
      const subPath = new THREE.CatmullRomCurve3([
        path.getPointAt(cutoffRatio),
        // 原路径的起点
        path.getPointAt(1)
        // 原路径的截断点
      ]);
      const newTubeGeometry = new THREE.TubeGeometry(subPath, 30, 2, 8, false);
      const material = new THREE.MeshBasicMaterial({ color: 16711680 });
      const newTube = new THREE.Mesh(newTubeGeometry, material);
      const tubeClone = newTube.clone();
      const group = new THREE.Group();
      group.add(tubeClone);
      group.position.copy(points[1]);
      tubeClone.position.sub(points[1]);
      group.rotation.set(Math.abs(dir.x) * angle, Math.abs(dir.y) * angle, Math.abs(dir.z) * angle);
      return group;
    };
    const initUI = function() {
      const paneControl = new Pane({
        title: "箭头",
        expanded: true
      });
      const f1 = paneControl.addFolder({
        title: "参数(鼠标间断点两个点，分别作为箭头的起点)，点击鼠标右键移除绘制"
      });
      f1.addButton({
        title: "绘制箭头",
        label: "激活"
        // optional
      }).on("click", () => {
        window.removeEventListener("click", onMouseClick, false);
        window.addEventListener("contextmenu", onMouseRightClick, false);
        type = "line";
        initLine();
      });
    };
    onMounted(() => {
      initUI();
    });
    watchEffect(() => {
    });
    return (_ctx, _cache) => {
      return null;
    };
  }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,createVNode:_createVNode,Suspense:_Suspense,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock,resolveComponent:_resolveComponent,mergeProps:_mergeProps} = await importShared('vue');

const {reactive} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "drawArrows",
  setup(__props) {
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
      return _openBlock(), _createBlock(_component_TresCanvas, _mergeProps({ clearColor: "#201919" }, state), {
        default: _withCtx(() => [
          _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", {
            fov: 60,
            near: 0.1,
            far: 2e3,
            position: [0, 0, 200],
            "look-at": [0, 0, 0]
          }, null, -1)),
          _cache[1] || (_cache[1] = _createElementVNode("TresAmbientLight", { intensity: 2 }, null, -1)),
          _createVNode(_unref(Kk), _normalizeProps(_guardReactiveProps(controlsState)), null, 16),
          (_openBlock(), _createBlock(_Suspense, null, {
            default: _withCtx(() => [
              _createVNode(_sfc_main$1)
            ]),
            _: 1
          }))
        ]),
        _: 1
      }, 16);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=drawArrows.CZMd-KJu1767105581793.js.map
