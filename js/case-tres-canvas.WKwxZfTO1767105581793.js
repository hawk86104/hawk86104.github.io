import { importShared, ol, sz, _export_sfc } from './index.BxB45aCK1767105581793.js';
import { T_, Gy, Hy, _sfc_main as _sfc_main$1, cy, $d, ol as ol$1, rl } from './DevTDTTiles.vue_vue_type_script_setup_true_lang.xgh0_FRH1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {unref:_unref,createElementVNode:_createElementVNode,createVNode:_createVNode,withCtx:_withCtx,Suspense:_Suspense,openBlock:_openBlock,createBlock:_createBlock} = await importShared('vue');
const {SRGBColorSpace,NoToneMapping,RepeatWrapping} = await importShared('three');
const {ref} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "case-tres-canvas",
  setup(__props) {
    const isReverse = ref(false);
    const currentWidth = ref(50);
    const sceneConfig = ref({
      effectProps: {
        enabled: false,
        focusArea: 0.7,
        feather: 0.1
      },
      ambientLight: {
        color: "#fff",
        intensity: 1
      },
      directionalLight: {
        color: "#fff",
        intensity: 2,
        position: [-1500, 500, 500]
      },
      background: "/plugins/topoProject/image/farm_field_puresky_2k.jpg"
    });
    const cameraPosition = ref({
      heading: 90,
      pitch: -45,
      distance: 3500,
      longitude: 118.778677,
      latitude: 32.043848
    });
    const linePoints1 = ref([
      { lon: 118.7718992505998, lat: 32.048676359766205, height: 2 },
      { lon: 118.77167793595339, lat: 32.04805744392108, height: 2 },
      { lon: 118.77166214130284, lat: 32.04729526571329, height: 2 },
      { lon: 118.77160087238872, lat: 32.04652529304961, height: 2 },
      { lon: 118.77143111628408, lat: 32.045861240144234, height: 2 },
      { lon: 118.77131065257191, lat: 32.04518210653741, height: 2 },
      { lon: 118.77104659672545, lat: 32.04432481498553, height: 2 },
      { lon: 118.77305137841847, lat: 32.044199188797705, height: 2 },
      { lon: 118.77491591919784, lat: 32.04407306187032, height: 2 },
      { lon: 118.77617104172464, lat: 32.04400442187922, height: 2 },
      { lon: 118.7770485259856, lat: 32.04389047216671, height: 2 },
      { lon: 118.77886843030677, lat: 32.043800969863184, height: 2 },
      { lon: 118.77887771581442, lat: 32.047897433566774, height: 2 },
      { lon: 118.77782860780604, lat: 32.048149373507826, height: 2 },
      { lon: 118.77493727724737, lat: 32.04850912214137, height: 2 },
      { lon: 118.77222067439243, lat: 32.048745240407655, height: 2 },
      { lon: 118.77189852250268, lat: 32.04867503285453, height: 2 }
    ]);
    const linePoints2 = ref([
      { lon: 118.77104995028407, lat: 32.04432652118088, height: 2 },
      { lon: 118.77083093656233, lat: 32.04369654031245, height: 2 },
      { lon: 118.77074193970225, lat: 32.04320188228803, height: 2 },
      { lon: 118.77212845063343, lat: 32.04301423588683, height: 2 },
      { lon: 118.77243799256172, lat: 32.0429242675843, height: 2 },
      { lon: 118.77334541611606, lat: 32.042516060564594, height: 2 },
      { lon: 118.77428409956542, lat: 32.04208752044599, height: 2 },
      { lon: 118.77508037104826, lat: 32.04172212553125, height: 2 },
      { lon: 118.77625847097653, lat: 32.04122998995771, height: 2 },
      { lon: 118.77729111451407, lat: 32.0407714385028, height: 2 },
      { lon: 118.77880663290568, lat: 32.04010951641948, height: 2 },
      { lon: 118.77894918269499, lat: 32.04008234258646, height: 2 },
      { lon: 118.77889572196926, lat: 32.04156999047311, height: 2 },
      { lon: 118.77888291156296, lat: 32.042872145039325, height: 2 },
      { lon: 118.7788699336732, lat: 32.04379153519727, height: 2 },
      { lon: 118.77758160227347, lat: 32.04386002840478, height: 2 },
      { lon: 118.77695045939828, lat: 32.043910153565534, height: 2 },
      { lon: 118.77613148142285, lat: 32.04399608361527, height: 2 },
      { lon: 118.77485315837134, lat: 32.04408009119443, height: 2 },
      { lon: 118.77297505215631, lat: 32.04420239678866, height: 2 },
      { lon: 118.77104860683477, lat: 32.0443239814409, height: 2 }
    ]);
    return (_ctx, _cache) => {
      return _openBlock(), _createBlock(_unref(ol), {
        "window-size": "",
        alpha: "",
        antialias: "",
        "auto-clear": "",
        "disable-render": "",
        "output-color-space": _unref(SRGBColorSpace),
        "tone-mapping": _unref(NoToneMapping),
        "pixel-ratio": 1
      }, {
        default: _withCtx(() => [
          _cache[1] || (_cache[1] = _createElementVNode("TresPerspectiveCamera", {
            fov: 29,
            near: 50,
            far: 1e6
          }, null, -1)),
          _createVNode(_unref(T_)),
          _createVNode(_unref(Gy), {
            position: cameraPosition.value,
            "onUpdate:position": _cache[0] || (_cache[0] = ($event) => cameraPosition.value = $event),
            "min-distance": 1
          }, null, 8, ["position"]),
          _createVNode(_unref(Hy), { sceneConfig: sceneConfig.value }, null, 8, ["sceneConfig"]),
          _createVNode(_sfc_main$1),
          (_openBlock(), _createBlock(_Suspense, null, {
            default: _withCtx(() => [
              _createVNode(_unref(sz), { path: "plugins/digitalCity/image/flyLine5.png" }, {
                default: _withCtx(({ state }) => [
                  _createVNode(_unref(cy), {
                    texture: state,
                    wrapT: _unref(RepeatWrapping),
                    wrapS: _unref(RepeatWrapping)
                  }, null, 8, ["texture", "wrapT", "wrapS"]),
                  _createVNode(_unref($d), {
                    reverse: isReverse.value,
                    duration: 1500
                  }, {
                    default: _withCtx(() => [
                      _createVNode(_unref(ol$1), {
                        points: linePoints1.value,
                        color: "#ff0000",
                        width: currentWidth.value,
                        map: state
                      }, null, 8, ["points", "width", "map"])
                    ]),
                    _: 2
                  }, 1032, ["reverse"])
                ]),
                _: 1
              })
            ]),
            _: 1
          })),
          (_openBlock(), _createBlock(_Suspense, null, {
            default: _withCtx(() => [
              _createVNode(_unref(sz), { path: "plugins/digitalCity/image/flyLine5.png" }, {
                default: _withCtx(({ state }) => [
                  _createVNode(_unref(cy), {
                    texture: state,
                    wrapT: _unref(RepeatWrapping),
                    wrapS: _unref(RepeatWrapping)
                  }, null, 8, ["texture", "wrapT", "wrapS"]),
                  _createVNode(_unref($d), {
                    reverse: isReverse.value,
                    duration: 1500
                  }, {
                    default: _withCtx(() => [
                      _createVNode(_unref(rl), {
                        points: linePoints2.value,
                        color: "#00ff00",
                        width: currentWidth.value,
                        map: state
                      }, null, 8, ["points", "width", "map"])
                    ]),
                    _: 2
                  }, 1032, ["reverse"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }))
        ]),
        _: 1
      }, 8, ["output-color-space", "tone-mapping"]);
    };
  }
});

const caseTresCanvas = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7369f510"]]);

export { caseTresCanvas as default };
//# sourceMappingURL=case-tres-canvas.WKwxZfTO1767105581793.js.map
