import { importShared, sz, _export_sfc } from './index.BxB45aCK1767105581793.js';
import { zy, Gy, Hy, _sfc_main as _sfc_main$1, cy, iy, Q_ } from './DevTDTTiles.vue_vue_type_script_setup_true_lang.xgh0_FRH1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {unref:_unref,createVNode:_createVNode,withCtx:_withCtx,Suspense:_Suspense,openBlock:_openBlock,createBlock:_createBlock} = await importShared('vue');
const {ref,computed} = await importShared('vue');
const {RepeatWrapping} = await importShared('three');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "case-flyline",
  setup(__props) {
    const sceneConfig = ref({
      effectProps: {
        enabled: true,
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
      distance: 500,
      longitude: 118.778677,
      latitude: 32.043848
    });
    const flylineEnd = ref({ lon: 118.78, lat: 32.045, height: 0 });
    const flylineStart1 = ref({ lon: 118.77, lat: 32.042, height: 0 });
    const flylineStart2 = ref({ lon: 118.771, lat: 32.044, height: 0 });
    const flylineStart3 = ref({ lon: 118.773, lat: 32.041, height: 0 });
    const flylineStart4 = ref({ lon: 118.776, lat: 32.043, height: 0 });
    const flylineStart5 = ref({ lon: 118.772, lat: 32.04, height: 0 });
    const flylineTextPosition1 = computed(() => ({
      lon: (flylineStart1.value.lon + flylineEnd.value.lon) / 2,
      lat: (flylineStart1.value.lat + flylineEnd.value.lat) / 2,
      height: 40
    }));
    const flylineTextPosition2 = computed(() => ({
      lon: (flylineStart2.value.lon + flylineEnd.value.lon) / 2,
      lat: (flylineStart2.value.lat + flylineEnd.value.lat) / 2,
      height: 60
    }));
    const flylineTextPosition3 = computed(() => ({
      lon: (flylineStart3.value.lon + flylineEnd.value.lon) / 2,
      lat: (flylineStart3.value.lat + flylineEnd.value.lat) / 2,
      height: 90
    }));
    const flylineTextPosition4 = computed(() => ({
      lon: (flylineStart4.value.lon + flylineEnd.value.lon) / 2,
      lat: (flylineStart4.value.lat + flylineEnd.value.lat) / 2,
      height: 30
    }));
    const flylineTextPosition5 = computed(() => ({
      lon: (flylineStart5.value.lon + flylineEnd.value.lon) / 2,
      lat: (flylineStart5.value.lat + flylineEnd.value.lat) / 2,
      height: 320
    }));
    return (_ctx, _cache) => {
      return _openBlock(), _createBlock(_unref(zy), {
        position: cameraPosition.value,
        "onUpdate:position": _cache[1] || (_cache[1] = ($event) => cameraPosition.value = $event)
      }, {
        default: _withCtx(() => [
          _createVNode(_unref(Gy), {
            position: cameraPosition.value,
            "onUpdate:position": _cache[0] || (_cache[0] = ($event) => cameraPosition.value = $event)
          }, null, 8, ["position"]),
          _createVNode(_unref(Hy), { sceneConfig: sceneConfig.value }, null, 8, ["sceneConfig"]),
          _createVNode(_sfc_main$1),
          (_openBlock(), _createBlock(_Suspense, null, {
            default: _withCtx(() => [
              _createVNode(_unref(sz), { path: "plugins/digitalCity/image/flyLine1.png" }, {
                default: _withCtx(({ state }) => [
                  _createVNode(_unref(cy), {
                    texture: state,
                    wrapT: _unref(RepeatWrapping),
                    wrapS: _unref(RepeatWrapping)
                  }, null, 8, ["texture", "wrapT", "wrapS"]),
                  _createVNode(_unref(iy), {
                    map: state,
                    start: flylineStart1.value,
                    end: flylineEnd.value,
                    type: "mesh",
                    color: "#ff6b6b",
                    width: 20,
                    duration: 2e3,
                    arcHeight: 30,
                    segments: 15
                  }, null, 8, ["map", "start", "end"])
                ]),
                _: 1
              })
            ]),
            _: 1
          })),
          _createVNode(_unref(Q_), {
            text: "基础飞线 - 红色 #ff6b6b - 宽度: 20 - 弧度: 30 - 分段: 15",
            color: "#ff6b6b",
            align: "center",
            point: flylineTextPosition1.value,
            fontSize: 12
          }, null, 8, ["point"]),
          (_openBlock(), _createBlock(_Suspense, null, {
            default: _withCtx(() => [
              _createVNode(_unref(sz), { path: "plugins/digitalCity/image/flyLine2.png" }, {
                default: _withCtx(({ state }) => [
                  _createVNode(_unref(cy), {
                    texture: state,
                    wrapT: _unref(RepeatWrapping),
                    wrapS: _unref(RepeatWrapping)
                  }, null, 8, ["texture", "wrapT", "wrapS"]),
                  _createVNode(_unref(iy), {
                    map: state,
                    start: flylineStart2.value,
                    end: flylineEnd.value,
                    type: "mesh",
                    color: "#4ecdc4",
                    width: 20,
                    duration: 2e3,
                    arcHeight: 50,
                    segments: 20,
                    dashArray: 0.3,
                    dashRatio: 0.6
                  }, null, 8, ["map", "start", "end"])
                ]),
                _: 1
              })
            ]),
            _: 1
          })),
          _createVNode(_unref(Q_), {
            text: "虚线飞线 - 青色 #4ecdc4 - 宽度: 20 - 弧度: 50 - 分段: 20 - 虚线: 0.3/0.6",
            color: "#4ecdc4",
            align: "center",
            point: flylineTextPosition2.value,
            fontSize: 12
          }, null, 8, ["point"]),
          (_openBlock(), _createBlock(_Suspense, null, {
            default: _withCtx(() => [
              _createVNode(_unref(sz), { path: "plugins/digitalCity/image/flyLine3.png" }, {
                default: _withCtx(({ state }) => [
                  _createVNode(_unref(cy), {
                    texture: state,
                    wrapT: _unref(RepeatWrapping),
                    wrapS: _unref(RepeatWrapping)
                  }, null, 8, ["texture", "wrapT", "wrapS"]),
                  _createVNode(_unref(iy), {
                    map: state,
                    start: flylineStart3.value,
                    end: flylineEnd.value,
                    type: "mesh",
                    color: "#45b7d1",
                    duration: 2e3,
                    width: 20,
                    arcHeight: 80,
                    segments: 25
                  }, null, 8, ["map", "start", "end"])
                ]),
                _: 1
              })
            ]),
            _: 1
          })),
          _createVNode(_unref(Q_), {
            text: "高弧度飞线 - 蓝色 #45b7d1 - 宽度: 20 - 弧度: 80 - 分段: 25",
            color: "#45b7d1",
            align: "center",
            point: flylineTextPosition3.value,
            fontSize: 12
          }, null, 8, ["point"]),
          (_openBlock(), _createBlock(_Suspense, null, {
            default: _withCtx(() => [
              _createVNode(_unref(sz), { path: "plugins/digitalCity/image/flyLine4.png" }, {
                default: _withCtx(({ state }) => [
                  _createVNode(_unref(cy), {
                    texture: state,
                    wrapT: _unref(RepeatWrapping),
                    wrapS: _unref(RepeatWrapping)
                  }, null, 8, ["texture", "wrapT", "wrapS"]),
                  _createVNode(_unref(iy), {
                    map: state,
                    start: flylineStart4.value,
                    end: flylineEnd.value,
                    type: "mesh",
                    color: "#96ceb4",
                    duration: 2e3,
                    width: 20,
                    arcHeight: 20,
                    segments: 10
                  }, null, 8, ["map", "start", "end"])
                ]),
                _: 1
              })
            ]),
            _: 1
          })),
          _createVNode(_unref(Q_), {
            text: "细线飞线 - 绿色 #96ceb4 - 宽度: 20 - 弧度: 20 - 分段: 10",
            color: "#96ceb4",
            align: "center",
            point: flylineTextPosition4.value,
            fontSize: 12
          }, null, 8, ["point"]),
          (_openBlock(), _createBlock(_Suspense, null, {
            default: _withCtx(() => [
              _createVNode(_unref(sz), { path: "plugins/digitalCity/image/flyLine5.png" }, {
                default: _withCtx(({ state }) => [
                  _createVNode(_unref(iy), {
                    map: state,
                    start: flylineStart5.value,
                    end: flylineEnd.value,
                    type: "tube",
                    color: "#fff",
                    duration: 2e3,
                    width: 20,
                    arcHeight: 300,
                    segments: 30
                  }, null, 8, ["map", "start", "end"])
                ]),
                _: 1
              })
            ]),
            _: 1
          })),
          _createVNode(_unref(Q_), {
            text: "长距离飞线 - 白色 #fff - 类型: tube - 宽度: 20 - 弧度: 300 - 分段: 30 - 时长: 2s",
            color: "#fff",
            align: "center",
            point: flylineTextPosition5.value,
            fontSize: 12
          }, null, 8, ["point"])
        ]),
        _: 1
      }, 8, ["position"]);
    };
  }
});

const caseFlyline = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b28a4fe0"]]);

export { caseFlyline as default };
//# sourceMappingURL=case-flyline.BAlRK4MQ1767105581793.js.map
