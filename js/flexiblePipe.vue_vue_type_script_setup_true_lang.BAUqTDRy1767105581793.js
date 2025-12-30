import { importShared, _l } from './index.BxB45aCK1767105581793.js';
import { instance } from './Resource.Dxl2bF_-1767105581793.js';
import { buildRoundedPath } from './buildFlexiblePipe.CSvv9UZ71767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,openBlock:_openBlock,createElementBlock:_createElementBlock} = await importShared('vue');

const _hoisted_1 = { renderOrder: 9999 };
const _hoisted_2 = ["args"];
const _hoisted_3 = ["color", "side", "map"];
const {watch,ref} = await importShared('vue');

const THREE = await importShared('three');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "flexiblePipe",
  props: {
    color: { default: "0xff0000" },
    radius: { default: 0.1 },
    bodyLength: { default: 2 },
    headLength: { default: 1 },
    headAngle: { default: 0 },
    radialSegments: { default: 16 },
    tailAngle: { default: 0 },
    tailLength: { default: 0.5 },
    filletRadius: { default: 0.3 },
    speed: { default: 0.01 }
  },
  setup(__props) {
    const props = __props;
    const path = ref(new THREE.CurvePath());
    watch(
      () => [props.bodyLength, props.headLength, props.headAngle, props.tailAngle, props.tailLength, props.filletRadius, props.radialSegments],
      ([bodyLength, headLength, headAngle, tailAngle, tailLength, filletRadius, radialSegments]) => {
        const halfMid = bodyLength / 2;
        const midStart = new THREE.Vector3(0, 0, -halfMid);
        const midEnd = new THREE.Vector3(0, 0, halfMid);
        const headRad = THREE.MathUtils.degToRad(headAngle);
        const headDir = new THREE.Vector3(Math.cos(headRad), Math.sin(headRad), 0);
        const headPoint = midEnd.clone().add(headDir.multiplyScalar(headLength));
        const tailRad = THREE.MathUtils.degToRad(tailAngle);
        const tailDir = new THREE.Vector3(Math.cos(tailRad), Math.sin(tailRad), 0);
        const tailPoint = midStart.clone().add(tailDir.multiplyScalar(tailLength));
        const pts = [tailPoint, midStart, midEnd, headPoint];
        path.value = buildRoundedPath(pts, filletRadius, radialSegments);
      },
      { immediate: true }
    );
    instance.getResource("TextureLoader", "./plugins/digitalCity/image/line.png", "line.png");
    const getResourceTexture = instance.getReactiveItem("line.png");
    const pTexture = ref(null);
    watch(
      getResourceTexture,
      (getResourceTexture2) => {
        if (getResourceTexture2?.isTexture) {
          pTexture.value = getResourceTexture2.clone();
          pTexture.value.wrapS = pTexture.value.wrapT = THREE.RepeatWrapping;
          pTexture.value.needsUpdate = true;
        }
      },
      { immediate: true }
    );
    const tmsmRef = ref(null);
    const { onBeforeRender } = _l();
    onBeforeRender(() => {
      if (pTexture.value) {
        pTexture.value.offset.x -= props.speed;
      }
    });
    return (_ctx, _cache) => {
      return _openBlock(), _createElementBlock("TresMesh", _hoisted_1, [
        _createElementVNode("TresTubeGeometry", {
          args: [path.value, 64, _ctx.radius, _ctx.radialSegments, false]
        }, null, 8, _hoisted_2),
        _createElementVNode("TresMeshBasicMaterial", {
          ref_key: "tmsmRef",
          ref: tmsmRef,
          color: _ctx.color,
          metalness: 0.3,
          roughness: 0.5,
          side: THREE.DoubleSide,
          transparent: "",
          map: pTexture.value ? pTexture.value : null
        }, null, 8, _hoisted_3)
      ]);
    };
  }
});

export { _sfc_main };
//# sourceMappingURL=flexiblePipe.vue_vue_type_script_setup_true_lang.BAUqTDRy1767105581793.js.map
