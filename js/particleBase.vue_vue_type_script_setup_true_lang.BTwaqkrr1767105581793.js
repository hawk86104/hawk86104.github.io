import { importShared, no, _l, sz } from './index.BxB45aCK1767105581793.js';

const {defineComponent:_defineComponent$1} = await importShared('vue');

const {unref:_unref$1,createElementVNode:_createElementVNode,openBlock:_openBlock$1,createElementBlock:_createElementBlock$1} = await importShared('vue');

const _hoisted_1 = ["size", "color", "alpha-map", "map", "opacity", "alpha-test", "depth-write", "transparent", "size-attenuation"];
const _hoisted_2 = ["position", "velocity"];
const {shallowRef,toRefs,watch: watch$1,watchEffect} = await importShared('vue');

const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "index",
  props: {
    size: { default: 0.1 },
    area: { default: () => [10, 10, 20] },
    color: { default: 16777215 },
    map: {},
    alphaMap: {},
    alphaTest: { default: 0.01 },
    opacity: { default: 0.8 },
    count: { default: 5e3 },
    speed: { default: 0.1 },
    randomness: { default: 0.5 },
    depthWrite: { type: Boolean, default: false },
    transparent: { type: Boolean, default: true },
    sizeAttenuation: { type: Boolean, default: true }
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const {
      size,
      area,
      color,
      alphaMap: alphaMapUrl,
      map: mapUrl,
      opacity,
      alphaTest,
      depthWrite,
      transparent,
      sizeAttenuation,
      count,
      speed,
      randomness
    } = toRefs(props);
    const geometryRef = shallowRef();
    let positionArray = [];
    let velocityArray = [];
    const setPosition = () => {
      positionArray = new Float32Array(count.value * 3);
      for (let i = 0; i < count.value; i++) {
        const i3 = i * 3;
        positionArray[i3] = (Math.random() - 0.5) * area.value[0];
        positionArray[i3 + 1] = (Math.random() - 0.5) * area.value[1];
        positionArray[i3 + 2] = (Math.random() - 0.5) * area.value[2];
      }
    };
    const setSpeed = () => {
      velocityArray = new Float32Array(count.value * 2);
      for (let i = 0; i < count.value * 2; i += 2) {
        velocityArray[i] = (Math.random() - 0.5) / 5 * speed.value * randomness.value;
        velocityArray[i + 1] = Math.random() / 5 * speed.value;
      }
    };
    setSpeed();
    setPosition();
    watch$1(speed, () => {
      setSpeed();
    });
    watchEffect(() => {
      if (speed.value) {
        return;
      }
      setPosition();
    });
    watch$1(
      () => props.area,
      () => {
        setPosition();
      }
    );
    const alphaMapTexture = shallowRef(null);
    const mapTexture = shallowRef(null);
    watchEffect(async () => {
      if (typeof alphaMapUrl.value === "string") {
        const { state: alphaMap } = no(alphaMapUrl.value);
        alphaMapTexture.value = alphaMap.value;
      } else {
        alphaMapTexture.value = alphaMapUrl.value ?? null;
      }
      if (typeof mapUrl.value === "string") {
        const { state: map } = no(mapUrl.value);
        mapTexture.value = map.value;
      } else {
        mapTexture.value = mapUrl.value ?? null;
      }
    });
    const { onBeforeRender } = _l();
    onBeforeRender(() => {
      if (geometryRef.value?.attributes.position.array && geometryRef.value?.attributes.position.count) {
        const positionArray2 = geometryRef.value.attributes.position.array;
        for (let i = 0; i < geometryRef.value.attributes.position.count; i++) {
          const velocityX = velocityArray[i * 2];
          const velocityY = velocityArray[i * 2 + 1];
          positionArray2[i * 3] += velocityX;
          positionArray2[i * 3 + 1] -= velocityY;
          if (positionArray2[i * 3] <= -area.value[0] / 2 || positionArray2[i * 3] >= area.value[0] / 2) {
            positionArray2[i * 3] = positionArray2[i * 3] * -1;
          }
          if (positionArray2[i * 3 + 1] <= -area.value[1] / 2 || positionArray2[i * 3 + 1] >= area.value[1] / 2) {
            positionArray2[i * 3 + 1] = positionArray2[i * 3 + 1] * -1;
          }
        }
        geometryRef.value.attributes.position.needsUpdate = true;
      }
    });
    const pointsRef = shallowRef();
    __expose({ instance: pointsRef });
    return (_ctx, _cache) => {
      return _openBlock$1(), _createElementBlock$1("TresPoints", {
        ref_key: "pointsRef",
        ref: pointsRef
      }, [
        _createElementVNode("TresPointsMaterial", {
          size: _unref$1(size),
          color: _unref$1(color),
          "alpha-map": alphaMapTexture.value,
          map: mapTexture.value,
          opacity: _unref$1(opacity),
          "alpha-test": _unref$1(alphaTest),
          "depth-write": _unref$1(depthWrite),
          transparent: _unref$1(transparent),
          "size-attenuation": _unref$1(sizeAttenuation)
        }, null, 8, _hoisted_1),
        _createElementVNode("TresBufferGeometry", {
          ref_key: "geometryRef",
          ref: geometryRef,
          position: [_unref$1(positionArray), 3],
          velocity: [_unref$1(velocityArray)]
        }, null, 8, _hoisted_2)
      ], 512);
    };
  }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {createVNode:_createVNode,unref:_unref,withCtx:_withCtx,openBlock:_openBlock,createElementBlock:_createElementBlock} = await importShared('vue');

const {ref,watch} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "particleBase",
  props: {
    speed: { default: 0.1 },
    randomness: { default: 1 },
    count: { default: 100 },
    size: { default: 0.1 },
    areaX: { default: 5 },
    areaY: { default: 2 },
    areaZ: { default: 5 },
    color: { default: "#fff" },
    opacity: { default: 1 }
  },
  setup(__props) {
    const props = __props;
    const array = ref([props.areaX, props.areaY, props.areaZ]);
    watch(
      () => [props.areaX, props.areaY, props.areaZ],
      ([areaX, areaY, areaZ]) => {
        array.value = [areaX, areaY, areaZ];
      }
    );
    return (_ctx, _cache) => {
      return _openBlock(), _createElementBlock("TresGroup", null, [
        _createVNode(_unref(sz), { path: "./plugins/digitalCity/image/cilcle.png" }, {
          default: _withCtx(({ state: texture }) => [
            _createVNode(_sfc_main$1, {
              renderOrder: 2001,
              position: [0, _ctx.areaY / 2, 0],
              speed: _ctx.speed,
              color: _ctx.color,
              area: array.value,
              count: _ctx.count,
              depthWrite: false,
              randomness: _ctx.randomness,
              size: _ctx.size,
              transparent: "",
              opacity: _ctx.opacity,
              map: texture
            }, null, 8, ["position", "speed", "color", "area", "count", "randomness", "size", "opacity", "map"])
          ]),
          _: 1
        })
      ]);
    };
  }
});

export { _sfc_main };
//# sourceMappingURL=particleBase.vue_vue_type_script_setup_true_lang.BTwaqkrr1767105581793.js.map
