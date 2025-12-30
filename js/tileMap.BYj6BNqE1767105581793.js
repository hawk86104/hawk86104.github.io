import { importShared, Fs, _l } from './index.BxB45aCK1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';
import { OrbitControls } from './OrbitControls.zXZoX3Ge1767105581793.js';
import { MERC, PlaneProvider, MartiniTerrainProvider, MapProvider, TerrainMeshProvider, Map, lonLatToWebMerctor } from './TerrainMeshProvider.DWdowYX-1767105581793.js';
import { raycasterEvent } from './raycasterEvent.Dgj-Z7aT1767105581793.js';
import { flyToNative } from './utils.uRDybWT71767105581793.js';

const {defineComponent:_defineComponent$1} = await importShared('vue');

const {unref:_unref,openBlock:_openBlock$1,createElementBlock:_createElementBlock$1} = await importShared('vue');

const _hoisted_1 = ["object", "rotation"];
const THREE$1 = await importShared('three');
const {watchEffect,watch} = await importShared('vue');
const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "tileMapMesh",
  props: {
    bbox: { default: [104.955976, 20.149765, 120.998419, 30.528687] },
    maxZoom: { default: 20 },
    opposite: { type: Boolean, default: false },
    genBright: { default: 1 },
    genContrast: { default: 1 },
    genSaturation: { default: 1 },
    monochrome: { default: "#fff" },
    isMonochrome: { type: Boolean, default: false },
    mapCenter: {},
    tweenInstance: { default: null }
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const { renderer, scene } = Fs();
    const planProvider = new PlaneProvider();
    planProvider.coordType = MERC;
    const martiniProvider = new MartiniTerrainProvider();
    martiniProvider.source = "https://api.maptiler.com/tiles/terrain-rgb-v2/[z]/[x]/[y].webp?key=L55MtSxL94Yb4hQeWewp";
    martiniProvider.coordType = MERC;
    const mapProvider = new MapProvider();
    mapProvider.source = "https://webrd04.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=7&x={x}&y={y}&z={z}";
    mapProvider.showTileNo = false;
    mapProvider.useWorker = true;
    const meshProvider = new TerrainMeshProvider(planProvider, mapProvider);
    meshProvider.showBoundingBox = false;
    meshProvider.wireframe = false;
    meshProvider.flatShading = false;
    meshProvider.useStandardMaterial = false;
    meshProvider.filter = {
      opposite: props.opposite,
      monochrome: props.isMonochrome ? {
        r: 0.299,
        g: 0.587,
        b: 0.114
      } : null,
      //单色滤镜
      genBright: props.genBright,
      //高亮
      genContrast: props.genContrast,
      //对比度
      genSaturation: props.genSaturation
      //饱和度
    };
    if (props.monochrome) {
      let color = new THREE$1.Color(props.monochrome);
      if (meshProvider.filter) {
        meshProvider.filter.monochrome = {
          r: color.r,
          g: color.g,
          b: color.b
        };
      }
    }
    const map = new Map();
    map.provider = meshProvider;
    map.bbox = props.bbox;
    map.maxZoom = props.maxZoom;
    const camera = new THREE$1.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1e7 * 10);
    camera.up = new THREE$1.Vector3(0, 1, 0);
    camera.position.set(props.mapCenter[0], props.mapCenter[2], -props.mapCenter[1]);
    camera.lookAt(new THREE$1.Vector3(camera.position.x, 0, camera.position.z - 2e3));
    map.camera = camera;
    let orbitControl = null;
    watchEffect(() => {
      if (renderer && !orbitControl) {
        orbitControl = new OrbitControls(camera, renderer.domElement);
        orbitControl.enableDamping = true;
        orbitControl.dampingFactor = 0.05;
        orbitControl.minDistance = 600;
        orbitControl.position0.set(camera.position.x, camera.position.y, camera.position.z);
        orbitControl.target.set(camera.position.x, 0, camera.position.z - 2e3);
      }
    });
    watch(
      () => [props.opposite, props.isMonochrome, props.monochrome],
      ([opposite, isMonochrome, monochrome]) => {
        if (meshProvider.filter) {
          let color = new THREE$1.Color(monochrome);
          meshProvider.filter.opposite = opposite;
          meshProvider.filter.monochrome = isMonochrome ? {
            r: color.r,
            g: color.g,
            b: color.b
          } : null;
        }
      }
    );
    watch(
      () => [props.genBright, props.genContrast, props.genSaturation],
      ([genBright, genContrast, genSaturation]) => {
        if (meshProvider.filter) {
          meshProvider.filter.genBright = genBright;
          meshProvider.filter.genContrast = genContrast;
          meshProvider.filter.genSaturation = genSaturation;
        }
      }
    );
    const { onBeforeRender } = _l();
    onBeforeRender(() => {
      if (renderer) {
        props.tweenInstance?.update();
        if (orbitControl) {
          orbitControl.update();
        }
        map.update();
        const far = Math.abs(camera.position.y) * 50;
        camera.far = far + 5e3;
        camera.updateProjectionMatrix();
        renderer.render(scene.value, camera);
      }
    });
    __expose({
      camera,
      map,
      orbitControl
    });
    return (_ctx, _cache) => {
      return _openBlock$1(), _createElementBlock$1("primitive", {
        object: _unref(map),
        rotation: [-Math.PI / 2, 0, 0]
      }, null, 8, _hoisted_1);
    };
  }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {mergeProps:_mergeProps,createVNode:_createVNode,resolveComponent:_resolveComponent,withCtx:_withCtx,Fragment:_Fragment,openBlock:_openBlock,createElementBlock:_createElementBlock} = await importShared('vue');

const {reactive,shallowRef} = await importShared('vue');

const THREE = await importShared('three');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "tileMap",
  setup(__props) {
    const positionUtm = lonLatToWebMerctor(118.779958, 32.017136);
    const mapCenter = [positionUtm[0], positionUtm[1], 5e3];
    const tileMapMeshRef = shallowRef();
    const tileMapState = reactive({
      opposite: true,
      genBright: 1.3,
      genContrast: 1,
      genSaturation: 1,
      isMonochrome: true,
      monochrome: "#4688b5",
      mapCenter,
      tweenInstance: null
    });
    const paneControl = new Pane({ title: "参数" });
    paneControl.addBinding(tileMapState, "opposite", { label: "反色" });
    paneControl.addBinding(tileMapState, "genBright", {
      label: "高亮",
      min: 0.1,
      max: 3,
      step: 0.1
    });
    paneControl.addBinding(tileMapState, "genContrast", {
      label: "对比度",
      min: 0.1,
      max: 3,
      step: 0.1
    });
    paneControl.addBinding(tileMapState, "genSaturation", {
      label: "饱和度",
      min: 0.1,
      max: 3,
      step: 0.1
    });
    paneControl.addBinding(tileMapState, "isMonochrome", { label: "单色滤镜" });
    paneControl.addBinding(tileMapState, "monochrome", { label: "滤镜颜色" });
    const pUtmList = {
      at: lonLatToWebMerctor(118.7425, 31.9998),
      xjk: lonLatToWebMerctor(118.7842, 32.0418),
      nss: lonLatToWebMerctor(118.7503, 31.9082)
    };
    paneControl.addBlade({
      view: "list",
      label: "飞去",
      options: [
        { text: "奥体中心", value: "at" },
        { text: "新街口", value: "xjk" },
        { text: "牛首山", value: "nss" }
      ],
      value: "at"
    }).on("change", (e) => {
      const toP = new THREE.Vector3(pUtmList[e.value][0], 2e3, -pUtmList[e.value][1]);
      tileMapState.tweenInstance = flyToNative(tileMapMeshRef.value.camera, toP, tileMapMeshRef.value.orbitControl, [0, -300], 4e3);
    });
    const state = reactive({
      clearColor: "#201919",
      antialias: true,
      logarithmicDepthBuffer: true,
      renderMode: "manual",
      outputColorSpace: THREE.SRGBColorSpace,
      toneMapping: THREE.NoToneMapping
      // precision: 'highp'
    });
    setTimeout(() => {
      const pUtm = pUtmList.at;
      const toP = new THREE.Vector3(pUtm[0], 1600, -pUtm[1]);
      tileMapState.tweenInstance = flyToNative(tileMapMeshRef.value.camera, toP, tileMapMeshRef.value.orbitControl, [-2e3, -2e3], 2e3);
    }, 1e3);
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createElementBlock(_Fragment, null, [
        _createVNode(_component_TresCanvas, _mergeProps(state, { "window-size": "" }), {
          default: _withCtx(() => [
            _createVNode(_sfc_main$1, _mergeProps(tileMapState, {
              ref_key: "tileMapMeshRef",
              ref: tileMapMeshRef,
              bbox: [80, 16, 128, 50]
            }), null, 16)
          ]),
          _: 1
        }, 16),
        _createVNode(raycasterEvent, { tileMapRef: tileMapMeshRef.value }, null, 8, ["tileMapRef"])
      ], 64);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=tileMap.BYj6BNqE1767105581793.js.map
