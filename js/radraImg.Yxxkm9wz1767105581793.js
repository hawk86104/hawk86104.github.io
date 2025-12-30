import { importShared, Fs, Kk } from './index.BxB45aCK1767105581793.js';
import { scaleImg, $s, pt, en, controlsEvents, showLocation, informationDiv } from './informationDiv.BpVz_Xf81767105581793.js';
import { useTexture$1 as useTexture } from './customShaderMaterial.vue_vue_type_script_setup_true_lang.rDMIDGqx1767105581793.js';
import './index.vue_vue_type_script_setup_true_lang.D7-hpzmy1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';

const {withAsyncContext:_withAsyncContext,defineComponent:_defineComponent$2} = await importShared('vue');

const {unref:_unref$2,createElementVNode:_createElementVNode$2,openBlock:_openBlock$2,createElementBlock:_createElementBlock$2} = await importShared('vue');

const _hoisted_1$1 = ["position"];
const _hoisted_2 = ["scale", "material", "rotateX", "position-y"];
const THREE$1 = await importShared('three');

const {watch: watch$1} = await importShared('vue');
const _sfc_main$2 = /* @__PURE__ */ _defineComponent$2({
  __name: "radraImgShow",
  props: {
    map: {},
    height: { default: 100 },
    opacity: { default: 0.6 }
  },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    const material = new THREE$1.MeshPhongMaterial({
      displacementMap: new THREE$1.Texture(),
      transparent: true,
      side: THREE$1.DoubleSide,
      opacity: props.opacity,
      displacementScale: 0.5,
      displacementBias: 0
      // color: new THREE.Color(props.color),
    });
    material.onBeforeCompile = (shader) => {
      shader.vertexShader = `uniform sampler2D map;
	` + shader.vertexShader;
      shader.vertexShader = shader.vertexShader.replace(
        "#include <displacementmap_vertex>",
        "transformed += normalize( objectNormal ) * ( texture2D(map, vMapUv ).a * displacementScale + displacementBias );"
      );
    };
    const pos = props.map.geo2pos(new THREE$1.Vector3(105, 34, 0));
    pos.applyMatrix4(props.map.matrix);
    const scale = scaleImg(props.map, { x: 67, y: 11 }, { x: 140, y: 57 }, props.height * 1e3);
    const imgList = [];
    for (let index = 0; index < 9; index++) {
      imgList.push(
        `${"https://opensource.cdn.icegl.cn"}/images/simpleGIS/QPFRef_202405311${index}40.png`
      );
    }
    let curImgIndex = 0;
    const pTexture = ([__temp, __restore] = _withAsyncContext(() => useTexture(imgList)), __temp = await __temp, __restore(), __temp);
    material.map = pTexture[curImgIndex];
    watch$1(
      () => [props.color, props.opacity],
      ([color, opacity]) => {
        material.opacity = opacity;
      }
    );
    let intervalId = null;
    let isRunning = false;
    const toggleTimer = () => {
      if (isRunning) {
        clearInterval(intervalId);
        intervalId = null;
        isRunning = false;
      } else {
        intervalId = setInterval(() => {
          curImgIndex = curImgIndex < imgList.length - 1 ? curImgIndex + 1 : 0;
          material.map = pTexture[curImgIndex];
          material.needsUpdate = true;
          console.log(curImgIndex);
        }, 1e3);
        isRunning = true;
      }
    };
    toggleTimer();
    return (_ctx, _cache) => {
      return _openBlock$2(), _createElementBlock$2("TresGroup", {
        position: [..._unref$2(pos)]
      }, [
        _createElementVNode$2("TresMesh", {
          scale: [_unref$2(scale).x, _unref$2(scale).y, _ctx.height * 1e3],
          material: _unref$2(material),
          rotateX: -Math.PI / 2,
          renderOrder: 9999,
          "position-y": _ctx.height * 1e3 / 5
        }, [..._cache[0] || (_cache[0] = [
          _createElementVNode$2("TresPlaneGeometry", { args: [1, 1, 529, 420] }, null, -1)
        ])], 8, _hoisted_2)
      ], 8, _hoisted_1$1);
    };
  }
});

const {defineComponent:_defineComponent$1} = await importShared('vue');

const {createElementVNode:_createElementVNode$1,unref:_unref$1,mergeProps:_mergeProps$1,createVNode:_createVNode$1,Suspense:_Suspense,withCtx:_withCtx$1,openBlock:_openBlock$1,createBlock:_createBlock,Fragment:_Fragment$1,createElementBlock:_createElementBlock$1} = await importShared('vue');

const _hoisted_1 = ["object"];
const {watch,ref,reactive: reactive$1} = await importShared('vue');

const THREE = await importShared('three');
const MAPBOXKEY = "pk.eyJ1IjoiaGF3azg2MTA0IiwiYSI6ImNrbTQ3cWtyeTAxejEzMHBtcW42bmc0N28ifQ.bvS9U_yWdHDh41jzaDS1dw";
const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "mapBoxShow3",
  setup(__props) {
    const radraImgState = reactive$1({
      height: 200,
      opacity: 1
    });
    const paneControl = new Pane({ title: "参数" });
    paneControl.addBinding(radraImgState, "height", {
      label: "高度",
      min: 10,
      max: 300,
      step: 1
    });
    paneControl.addBinding(radraImgState, "opacity", {
      label: "透明度",
      min: 0,
      max: 1,
      step: 0.1
    });
    new $s({
      token: MAPBOXKEY,
      dataType: "image",
      style: "mapbox.satellite"
    });
    new $s({
      token: MAPBOXKEY,
      dataType: "terrain-rgb",
      style: "mapbox.terrain-rgb",
      maxLevel: 15
    });
    const map = new pt({
      // 影像数据源
      imgSource: [new en({ style: "6" }), new en({ style: "8" })],
      // 高程数据源
      // demSource: mapBoxDemSource,
      // 地图投影中央经线经度
      lon0: 90,
      // 最小缩放级别
      minLevel: 2,
      // 最大缩放级别
      maxLevel: 20
    });
    map.rotateX(-Math.PI / 2);
    const centerGeo = new THREE.Vector3(105, 34, 0);
    const camersGeo = new THREE.Vector3(110, 0, 1e7);
    const centerPostion = map.localToWorld(map.geo2map(centerGeo));
    const cameraPosition = map.localToWorld(map.geo2map(camersGeo));
    const tdLight = ref();
    const { camera, controls, scene, renderer } = Fs();
    if (camera.value) {
      camera.value.position.copy(cameraPosition);
    }
    watch(
      () => controls.value,
      (value) => {
        if (value) {
          value.target.copy(centerPostion);
          controlsEvents(value, camera.value, scene.value);
        }
      }
    );
    watch(
      () => tdLight.value,
      (value) => {
        if (value) {
          value.target.position.copy(centerPostion);
        }
      }
    );
    showLocation(camera.value, renderer.domElement, map);
    return (_ctx, _cache) => {
      return _openBlock$1(), _createElementBlock$1(_Fragment$1, null, [
        _createElementVNode$1("TresDirectionalLight", {
          ref_key: "tdLight",
          ref: tdLight,
          position: [0, 2e3, 1e3],
          intensity: 1
        }, null, 512),
        _createElementVNode$1("primitive", { object: _unref$1(map) }, null, 8, _hoisted_1),
        (_openBlock$1(), _createBlock(_Suspense, null, {
          default: _withCtx$1(() => [
            _createVNode$1(_sfc_main$2, _mergeProps$1({ map: _unref$1(map) }, radraImgState), null, 16, ["map"])
          ]),
          _: 1
        }))
      ], 64);
    };
  }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,createVNode:_createVNode,resolveComponent:_resolveComponent,mergeProps:_mergeProps,withCtx:_withCtx,Fragment:_Fragment,openBlock:_openBlock,createElementBlock:_createElementBlock} = await importShared('vue');

const {reactive} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "radraImg",
  setup(__props) {
    const state = reactive({
      clearColor: "#dbf0ff",
      alpha: true,
      antialias: false,
      logarithmicDepthBuffer: true,
      precision: "highp"
    });
    const controlsState = reactive({
      enableDamping: true,
      makeDefault: true,
      screenSpacePanning: false,
      // minDistance: 0.1,
      // maxDistance: 30000,
      // maxPolarAngle: 1.2,
      dampingFactor: 0.035,
      keyPanSpeed: 5
    });
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createElementBlock(_Fragment, null, [
        _createVNode(_component_TresCanvas, _mergeProps(state, { "window-size": "" }), {
          default: _withCtx(() => [
            _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", {
              position: [0, 12, 0],
              fov: 70,
              near: 0.1,
              far: 4e10
            }, null, -1)),
            _createVNode(_unref(Kk), _normalizeProps(_guardReactiveProps(controlsState)), null, 16),
            _cache[1] || (_cache[1] = _createElementVNode("TresAmbientLight", { intensity: 1 }, null, -1)),
            _createVNode(_sfc_main$1)
          ]),
          _: 1
        }, 16),
        _createVNode(informationDiv)
      ], 64);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=radraImg.Yxxkm9wz1767105581793.js.map
