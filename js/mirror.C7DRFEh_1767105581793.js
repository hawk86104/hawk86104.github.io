import { Fs, importShared, Kk } from './index.BxB45aCK1767105581793.js';
import { RoundedBoxGeometry } from './RoundedBoxGeometry.CdlVEy_31767105581793.js';

const THREE$1 = await importShared('three');


const _sfc_main$1 = {
  __name: 'mirror',
  setup(__props) {

const { scene } = Fs();
const texture = {
  matcap:
    "/plugins/visualArts/image/photo.avif",
  env:
    "/plugins/visualArts/image/photo-1536566482680-fca31930a0bd.avif"
};

class LightBar {
  constructor(props) {
    this.geometry(props.scene, props.uid);
  }
  geometry (e, i) {
    const amp = 1;
    const c_mat = new THREE$1.MeshBasicMaterial();
    const c_geo = new THREE$1.CapsuleGeometry(0.02, 0.5 + Math.random(), 5, 16);
    this.c_mes = new THREE$1.Mesh(c_geo, c_mat);
    this.c_mes.position.y =
      -Math.random() * (amp / 2) + Math.random() * (amp / 2);
    this.c_mes.position.x = -Math.sin(i * 0.3) * Math.PI;
    this.c_mes.position.z = -Math.cos(i * 0.3) * Math.PI;
    e.add(this.c_mes);
  }
}

class Space {
  constructor(props) {
    this.init();
  }
  init () {
    this.lights();
    this.object();
    this.capsule();
  }
  lights () {
    const h_light = new THREE$1.HemisphereLight(0xffffff, 0xaaaacc, 1);
    const p_light = new THREE$1.PointLight(0xffffff, 0.2);
    p_light.castShadow = true;
    p_light.position.set(1, 5, 1);
    scene.value.add(h_light, p_light);
  }
  capsule () {
    for (let i = 0; i <= 20; i++) {
      new LightBar({ scene: scene.value, uid: i });
    }
  }
  object () {
    const o_geo = new RoundedBoxGeometry(1, 1, 1, 5, 0.05);
    const c_geo = new THREE$1.CircleGeometry(5, 5);
    const o_mat = new THREE$1.MeshMatcapMaterial({
      color: 0xffffff,
      //side: THREE.DoubleSide,
      matcap: new THREE$1.TextureLoader().load(texture.matcap),
      map: new THREE$1.TextureLoader().load(texture.env)
    });

    const c_mes = new THREE$1.Mesh(c_geo, o_mat);
    const o_mes = new THREE$1.Mesh(o_geo, o_mat);
    c_mes.rotateX(Math.PI / 2);
    c_mes.position.y = -1;
    scene.value.add(o_mes);
  }

}
new Space();

return (_ctx, _cache) => {
  return null
}
}

};

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,createVNode:_createVNode,Suspense:_Suspense,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock,resolveComponent:_resolveComponent} = await importShared('vue');

const THREE = await importShared('three');

const {reactive} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "mirror",
  setup(__props) {
    const controlsState = reactive({
      enableDamping: true,
      enableZoom: true,
      autoRotate: true,
      enablePan: true,
      enableRotate: true
    });
    const tcConfig = {
      clearColor: "#000000",
      windowSize: true,
      toneMapping: THREE.ACESFilmicToneMapping,
      toneMappingExposure: 0.8,
      shadows: true
    };
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createBlock(_component_TresCanvas, _normalizeProps(_guardReactiveProps(tcConfig)), {
        default: _withCtx(() => [
          _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", {
            position: [0, 2, 8],
            fov: 45,
            near: 0.1,
            far: 1e3
          }, null, -1)),
          _createVNode(_unref(Kk), _normalizeProps(_guardReactiveProps(controlsState)), null, 16),
          _cache[1] || (_cache[1] = _createElementVNode("TresAmbientLight", { intensity: 2 }, null, -1)),
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
//# sourceMappingURL=mirror.C7DRFEh_1767105581793.js.map
