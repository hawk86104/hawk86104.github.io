import { importShared, _export_sfc } from './index.BxB45aCK1767105581793.js';
import { UTM, utmToLonLat, webMercatorToLonLat } from './TerrainMeshProvider.DWdowYX-1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {toDisplayString:_toDisplayString,openBlock:_openBlock,createElementBlock:_createElementBlock} = await importShared('vue');

const _hoisted_1 = { class: "lonLatDiv" };
const {ref,watch} = await importShared('vue');
const THREE = await importShared('three');

const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "raycasterEvent",
  props: {
    tileMapRef: {}
  },
  setup(__props) {
    const props = __props;
    const lonLat = ref([0, 0]);
    watch(() => props.tileMapRef, (newVal, oldVal) => {
      if (!oldVal && newVal) {
        let onMouseMove = function(event) {
          mouse.x = event.clientX / window.innerWidth * 2 - 1;
          mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
          raycaster.setFromCamera(mouse, newVal.camera);
          var intersects = raycaster.intersectObjects(newVal.map.children);
          if (intersects.length > 0) {
            var intersection = intersects[0];
            if (newVal.map.provider.geometryProvider.coordType === UTM) {
              lonLat.value = utmToLonLat(intersection.point.x, -intersection.point.z);
            } else {
              lonLat.value = webMercatorToLonLat(intersection.point.x, -intersection.point.z);
            }
            lonLat.value[0] = lonLat.value[0].toFixed(4);
            lonLat.value[1] = lonLat.value[1].toFixed(4);
          }
        };
        console.log("raycasterEvent:", newVal);
        var raycaster = new THREE.Raycaster();
        var mouse = new THREE.Vector2();
        document.addEventListener("mousemove", onMouseMove, false);
      }
    });
    return (_ctx, _cache) => {
      return _openBlock(), _createElementBlock("div", _hoisted_1, " lon:" + _toDisplayString(lonLat.value[0]) + " lat:" + _toDisplayString(lonLat.value[1]), 1);
    };
  }
});

const raycasterEvent = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-462a60f8"]]);

export { raycasterEvent };
//# sourceMappingURL=raycasterEvent.Dgj-Z7aT1767105581793.js.map
