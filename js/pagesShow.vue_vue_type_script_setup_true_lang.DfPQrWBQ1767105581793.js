import { importShared, _l, Kk } from './index.BxB45aCK1767105581793.js';
import { instance } from './Resource.Dxl2bF_-1767105581793.js';
import { B } from './three-custom-shader-material.es.CWVfv5Xe1767105581793.js';
import { buildingsCustomShaderMaterial_default, buildingsCustomShaderMaterial_default$1 } from './buildingsCustomShaderMaterial.geCsebl-1767105581793.js';
import { LineSegmentsGeometry, LineMaterial, LineSegments2 } from './LineSegments2.3MkrpAcm1767105581793.js';

const {watch: watch$1} = await importShared('vue');

const loadCityFBX = async () => {
  const path = ("https://opensource.cdn.icegl.cn") + "/model/digitalCity/shanghai.FBX";
  instance.getResource("FBXLoader", path, "shanghai.FBX");
  const modelR = instance.getReactiveItem("shanghai.FBX");
  return new Promise((resolve, reject) => {
    const stopWatch = watch$1(
      () => modelR(),
      (model) => {
        if (model) {
          stopWatch();
          let CITY_UNTRIANGULATED = null;
          let LANDMASS = null;
          let roads = null;
          model.traverse((child) => {
            if (child.name === "CITY_UNTRIANGULATED") {
              CITY_UNTRIANGULATED = child;
            }
            if (child.name === "LANDMASS") {
              LANDMASS = child;
            }
            if (child.name === "ROADS") {
              roads = child;
            }
          });
          resolve({
            model,
            city: CITY_UNTRIANGULATED,
            land: LANDMASS,
            roads
          });
        } else {
          reject(new Error("FBX 加载失败，未得到模型"));
        }
      }
    );
  });
};

const {defineComponent:_defineComponent$2} = await importShared('vue');

const {unref:_unref$2,openBlock:_openBlock$2,createElementBlock:_createElementBlock$2} = await importShared('vue');

const _hoisted_1$2 = ["object"];
const {watchEffect: watchEffect$1,watch} = await importShared('vue');
const THREE = await importShared('three');

const _sfc_main$2 = /* @__PURE__ */ _defineComponent$2({
  __name: "buildingsModelCustomShader",
  props: {
    model: {},
    bulidingsColor: { default: "#e523ff" },
    landColor: { default: "#112233" },
    topColor: { default: "#ffff00" },
    opacity: { default: 0.9 },
    gradient: { type: Boolean, default: true }
  },
  setup(__props) {
    const props = __props;
    const CITY_UNTRIANGULATED = props.model.city;
    CITY_UNTRIANGULATED.renderOrder = 1001;
    const LANDMASS = props.model.land;
    const setColorMaterial = (type, param) => {
      let materials;
      {
        materials = Array.isArray(LANDMASS.material) ? LANDMASS.material : [LANDMASS.material];
        materials.forEach((material) => {
          material[param].setStyle(props.landColor);
          material.side = THREE.DoubleSide;
        });
      }
    };
    const setEffectMaterial = () => {
      const { geometry } = CITY_UNTRIANGULATED;
      geometry.computeBoundingBox();
      geometry.computeBoundingSphere();
      const { max, min } = geometry.boundingBox;
      if (CITY_UNTRIANGULATED.material.__csm) {
        return;
      }
      const material = new B({
        baseMaterial: CITY_UNTRIANGULATED.material,
        vertexShader: buildingsCustomShaderMaterial_default$1,
        fragmentShader: buildingsCustomShaderMaterial_default,
        silent: true,
        // Disables the default warning if true
        uniforms: {
          uMax: { value: max },
          uMin: { value: min },
          uBorderWidth: { value: 5 },
          uCircleTime: { value: 5 },
          uColor: {
            value: new THREE.Color(props.bulidingsColor)
          },
          uOpacity: {
            value: props.opacity
          },
          uLightColor: {
            value: new THREE.Color("#ffffff")
          },
          uTopColor: {
            value: new THREE.Color(props.topColor)
          },
          uTime: {
            value: 0
          },
          uGradient: {
            value: props.gradient
          }
        },
        depthWrite: true,
        depthTest: true,
        transparent: true,
        //如果材质透明，那么楼宇就被渲染到后面了
        side: THREE.DoubleSide
        //双面渲染
        // lights: true,
      });
      CITY_UNTRIANGULATED.material.dispose();
      CITY_UNTRIANGULATED.material = material;
    };
    setEffectMaterial();
    const { onBeforeRender } = _l();
    onBeforeRender(({ delta }) => {
      CITY_UNTRIANGULATED.material.uniforms.uTime.value += delta;
    });
    watchEffect$1(() => {
      if (props.bulidingsColor) {
        CITY_UNTRIANGULATED.material.uniforms.uColor.value.setStyle(props.bulidingsColor);
      }
      if (props.landColor) {
        setColorMaterial("land", "color");
      }
      if (props.opacity) {
        CITY_UNTRIANGULATED.material.uniforms.uOpacity.value = props.opacity;
      }
    });
    watch(props, (newValue, oldValue) => {
      CITY_UNTRIANGULATED.material.uniforms.uGradient.value = newValue.gradient;
    });
    const pObject = props.model.model.clone();
    return (_ctx, _cache) => {
      return _openBlock$2(), _createElementBlock$2("primitive", { object: _unref$2(pObject) }, null, 8, _hoisted_1$2);
    };
  }
});

const {defineComponent:_defineComponent$1} = await importShared('vue');

const {unref:_unref$1,openBlock:_openBlock$1,createElementBlock:_createElementBlock$1} = await importShared('vue');

const _hoisted_1$1 = ["object"];
const {Color,EdgesGeometry,ShaderMaterial} = await importShared('three');
const {watchEffect} = await importShared('vue');

const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "buildingsLines",
  props: {
    builds: {},
    width: { default: 1 },
    color: { default: "#FFF" },
    opacity: { default: 1 },
    style: { default: "Wireframe" }
  },
  setup(__props) {
    const props = __props;
    let line = null;
    let shader = null;
    if (props.style === "Wireframe") {
      const edges = new EdgesGeometry(props.builds.geometry);
      let geometry = new LineSegmentsGeometry();
      let wideEdges = geometry.fromEdgesGeometry(edges);
      let edgesmaterial = new LineMaterial({
        color: props.color,
        linewidth: props.width,
        opacity: props.opacity,
        transparent: true,
        depthWrite: true,
        depthTest: true
      });
      edgesmaterial.resolution.set(window.innerWidth, window.innerHeight);
      line = new LineSegments2(wideEdges, edgesmaterial);
      line.applyMatrix4(props.builds.matrix.clone());
    } else {
      shader = {
        transparent: true,
        uniforms: {
          uColor: {
            value: new Color(props.color)
          },
          uOpacity: {
            value: props.opacity
          }
        },
        vertexShader: `
       void main() {
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
        fragmentShader: ` 
        uniform vec3 uColor;
				uniform float uOpacity;
        void main() {
          gl_FragColor = vec4(uColor, uOpacity);
        }
      `
      };
      const geometry = new EdgesGeometry(props.builds.geometry);
      const surroundLineMaterial = new ShaderMaterial(shader);
      line = new LineSegments(geometry, surroundLineMaterial);
      line.applyMatrix4(props.builds.matrix.clone());
      line.material.linewidth = props.width;
      line.renderOrder = 1e3;
    }
    watchEffect(() => {
      if (props.style === "Shader") {
        if (props.color) {
          shader.uniforms.uColor.value = new Color(props.color);
        }
        if (props.opacity) {
          shader.uniforms.uOpacity.value = props.opacity;
        }
      }
      if (props.style === "Wireframe") {
        if (props.color) {
          line.material.color = new Color(props.color);
        }
        if (props.opacity) {
          line.material.opacity = props.opacity;
        }
      }
      if (props.width) {
        line.material.linewidth = props.width;
      }
    });
    return (_ctx, _cache) => {
      return _openBlock$1(), _createElementBlock$1("primitive", { object: _unref$1(line) }, null, 8, _hoisted_1$1);
    };
  }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,createVNode:_createVNode,Fragment:_Fragment,openBlock:_openBlock,createElementBlock:_createElementBlock,createCommentVNode:_createCommentVNode,renderSlot:_renderSlot,resolveComponent:_resolveComponent,mergeProps:_mergeProps,withCtx:_withCtx,createBlock:_createBlock} = await importShared('vue');

const _hoisted_1 = {
  key: 1,
  args: [1e3],
  position: [0, 19, 0]
};
const _hoisted_2 = {
  key: 2,
  args: [6e3, 100],
  position: [0, 19, 0]
};
const {SRGBColorSpace,BasicShadowMap,ACESFilmicToneMapping} = await importShared('three');

const {reactive,ref,onMounted} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "pagesShow",
  props: {
    showBuildings: { type: Boolean, default: true },
    autoRotate: { type: Boolean, default: true },
    showAxesHelper: { type: Boolean, default: true },
    showGridHelper: { type: Boolean, default: true },
    disableRender: { type: Boolean, default: false }
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const state = reactive({
      clearColor: "#000000",
      shadows: true,
      alpha: false,
      useLegacyLights: true,
      shadowMapType: BasicShadowMap,
      outputColorSpace: SRGBColorSpace,
      toneMapping: ACESFilmicToneMapping,
      toneMappingExposure: 1.2,
      renderMode: props.disableRender ? "manual" : "always"
    });
    const controlsState = { autoRotate: props.autoRotate, enableDamping: true, makeDefault: true };
    let cityFBX = ref(null);
    const contextReady = ref(false);
    onMounted(async () => {
      if (props.showBuildings) {
        cityFBX.value = await loadCityFBX();
      }
      contextReady.value = true;
    });
    const onReady = (context) => {
      debugger;
    };
    const tcRef = ref();
    __expose({
      context: tcRef,
      contextReady
    });
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createBlock(_component_TresCanvas, _mergeProps({
        ref_key: "tcRef",
        ref: tcRef
      }, state, {
        "window-size": "",
        onReady
      }), {
        default: _withCtx(() => [
          _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", {
            position: [600, 750, -1221],
            fov: 45,
            near: 1,
            far: 1e5
          }, null, -1)),
          _createVNode(_unref(Kk), _normalizeProps(_guardReactiveProps(controlsState)), null, 16),
          _cache[1] || (_cache[1] = _createElementVNode("TresAmbientLight", { color: "#ffffff" }, null, -1)),
          _cache[2] || (_cache[2] = _createElementVNode("TresDirectionalLight", {
            position: [100, 100, 0],
            intensity: 0.5,
            color: "#ffffff"
          }, null, -1)),
          props.showBuildings && contextReady.value ? (_openBlock(), _createElementBlock(_Fragment, { key: 0 }, [
            _createVNode(_sfc_main$2, { model: _unref(cityFBX) }, null, 8, ["model"]),
            _createVNode(_sfc_main$1, {
              builds: _unref(cityFBX).city,
              color: "#000"
            }, null, 8, ["builds"])
          ], 64)) : _createCommentVNode("", true),
          _renderSlot(_ctx.$slots, "ability"),
          props.showAxesHelper ? (_openBlock(), _createElementBlock("TresAxesHelper", _hoisted_1)) : _createCommentVNode("", true),
          props.showGridHelper ? (_openBlock(), _createElementBlock("TresGridHelper", _hoisted_2)) : _createCommentVNode("", true)
        ]),
        _: 3
      }, 16);
    };
  }
});

export { _sfc_main, _sfc_main$2 as _sfc_main$1, _sfc_main$1 as _sfc_main$2, loadCityFBX };
//# sourceMappingURL=pagesShow.vue_vue_type_script_setup_true_lang.DfPQrWBQ1767105581793.js.map
