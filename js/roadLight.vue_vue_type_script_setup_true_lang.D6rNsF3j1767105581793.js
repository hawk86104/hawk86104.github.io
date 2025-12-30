import { importShared, _l, sz } from './index.BxB45aCK1767105581793.js';
import { loadGeojson } from './utils.-sNu4bkd1767105581793.js';

const {withAsyncContext:_withAsyncContext,defineComponent:_defineComponent} = await importShared('vue');

const {unref:_unref,renderList:_renderList,Fragment:_Fragment,openBlock:_openBlock,createElementBlock:_createElementBlock,createElementVNode:_createElementVNode,withCtx:_withCtx,createVNode:_createVNode} = await importShared('vue');

const _hoisted_1 = { renderOrder: 3e3 };
const _hoisted_2 = ["args"];
const _hoisted_3 = ["map", "side", "color"];
const {ref,watchEffect} = await importShared('vue');
const {CatmullRomCurve3,Vector3,RepeatWrapping,BackSide,Color} = await importShared('three');
const scalegeoScale = 6e4;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "roadLight",
  props: {
    geoJson: {},
    color: { default: "#ffff00" },
    radius: { default: 2 },
    speed: { default: 1 }
  },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    const tgRef = ref();
    const tmbmRef = ref();
    const linePrimary = ([__temp, __restore] = _withAsyncContext(() => loadGeojson(props.geoJson)), __temp = await __temp, __restore(), __temp);
    const geoOffSet = [-31.258949, 0, -121.465782];
    let curve = [];
    for (var i = 0; i < linePrimary.length; i++) {
      const item = linePrimary[i];
      const points = [];
      item.geometry.coordinates.forEach((lineOne) => {
        points.push(new Vector3((lineOne[1] + geoOffSet[0]) * scalegeoScale, geoOffSet[1], (lineOne[0] + geoOffSet[2]) * scalegeoScale));
      });
      curve.push(new CatmullRomCurve3(points));
    }
    watchEffect(() => {
      if (props.color) {
        if (tmbmRef.value) {
          tmbmRef.value.color = new Color(props.color);
        }
      }
    });
    const { onBeforeRender } = _l();
    const ppTexture = ref();
    onBeforeRender(() => {
      if (ppTexture.value) {
        ppTexture.value.offset.x -= Math.random() / 20 * props.speed;
      }
    });
    const handleLoaded = (texture) => {
      texture.wrapS = texture.wrapT = RepeatWrapping;
      texture.repeat.set(1, 1);
      ppTexture.value = texture;
    };
    return (_ctx, _cache) => {
      return _openBlock(), _createElementBlock("TresGroup", {
        ref_key: "tgRef",
        ref: tgRef
      }, [
        _createVNode(_unref(sz), {
          path: "./plugins/digitalCity/image/line.png",
          onLoaded: handleLoaded
        }, {
          default: _withCtx(({ state: pTexture }) => [
            (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_unref(curve), (item) => {
              return _openBlock(), _createElementBlock("TresMesh", _hoisted_1, [
                _createElementVNode("TresTubeGeometry", {
                  args: [item, 64, props.radius, 20, false]
                }, null, 8, _hoisted_2),
                _createElementVNode("TresMeshBasicMaterial", {
                  ref_for: true,
                  ref_key: "tmbmRef",
                  ref: tmbmRef,
                  map: pTexture,
                  side: _unref(BackSide),
                  transparent: true,
                  color: props.color
                }, null, 8, _hoisted_3)
              ]);
            }), 256))
          ]),
          _: 1
        })
      ], 512);
    };
  }
});

export { _sfc_main };
//# sourceMappingURL=roadLight.vue_vue_type_script_setup_true_lang.D6rNsF3j1767105581793.js.map
