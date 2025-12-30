import { importShared, _l } from './index.BxB45aCK1767105581793.js';
import { _sfc_main as _sfc_main$2 } from './pagesShow.vue_vue_type_script_setup_true_lang.DfPQrWBQ1767105581793.js';
import { BatchedRenderer, RenderMode, GridEmitter, ConstantColor, ParticleSystem, ConstantValue, IntervalValue, ColorOverLife, ColorRange, SizeOverLife, PiecewiseBezier, Bezier, FrameOverLife } from './three.quarks.esm.C9WjGUm11767105581793.js';
import { useTexture } from './customShaderMaterial.vue_vue_type_script_setup_true_lang.rDMIDGqx1767105581793.js';
import './index.vue_vue_type_script_setup_true_lang.D7-hpzmy1767105581793.js';
import './reflectorDiffuse.vue_vue_type_script_setup_true_lang.BuW1EemC1767105581793.js';
import './reflectorDUDV.vue_vue_type_script_setup_true_lang.Cce3m26z1767105581793.js';
import './reflectorShaderMesh.vue_vue_type_script_setup_true_lang.D0T9d0go1767105581793.js';
import './dynamicRotatingBase.vue_vue_type_script_setup_true_lang.B3Epdjc31767105581793.js';
import './whiteFloorMesh.vue_vue_type_script_setup_true_lang.B9UIV1AE1767105581793.js';
import { _sfc_main as _sfc_main$3 } from './gridPlusCom.vue_vue_type_script_setup_true_lang.BIqyIrzr1767105581793.js';
import './videoFloor.vue_vue_type_script_setup_true_lang.BEyCiDvU1767105581793.js';
import './digitalGround.vue_vue_type_script_setup_true_lang.BPvRJNY41767105581793.js';
import './imgFloor.vue_vue_type_script_setup_true_lang.D-OHfrvs1767105581793.js';
import './reflectorRoundedBox.vue_vue_type_script_setup_true_lang.B0i-7O7p1767105581793.js';
import './particleBase.vue_vue_type_script_setup_true_lang.BTwaqkrr1767105581793.js';
import './rippleFloor.vue_vue_type_script_setup_true_lang.DU-KS3_f1767105581793.js';

const {withAsyncContext:_withAsyncContext,defineComponent:_defineComponent$1} = await importShared('vue');

const {unref:_unref$1,createElementVNode:_createElementVNode,openBlock:_openBlock$1,createElementBlock:_createElementBlock} = await importShared('vue');

const _hoisted_1 = ["object"];
const _hoisted_2 = ["object"];
const THREE = await importShared('three');
const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "firefly",
  props: {
    color: { default: "#b0ffff" },
    size: { default: 1 }
  },
  async setup(__props) {
    let __temp, __restore;
    const batchSystem = new BatchedRenderer();
    const texture = ([__temp, __restore] = _withAsyncContext(() => useTexture("./plugins/basic/shine/image/round.png")), __temp = await __temp, __restore(), __temp);
    const muzzle = {
      duration: 100,
      looping: true,
      startLife: new IntervalValue(0.1, 20),
      startSpeed: new ConstantValue(20),
      startSize: new IntervalValue(6, 20),
      startColor: new ConstantColor(new THREE.Vector4(1, 1, 1, 1)),
      worldSpace: false,
      maxParticle: 5e3,
      emissionOverTime: new ConstantValue(20),
      emissionBursts: [
        {
          time: 10,
          count: new ConstantValue(100),
          cycle: 10,
          interval: 1,
          probability: 1
        }
      ],
      shape: new GridEmitter({ width: 1500, height: 1500, column: 70, row: 70 }),
      material: new THREE.MeshBasicMaterial({ map: texture, blending: THREE.AdditiveBlending, transparent: true }),
      startTileIndex: new ConstantValue(91),
      uTileCount: 0,
      vTileCount: 0,
      renderOrder: 9999,
      renderMode: RenderMode.BillBoard
    };
    const muzzle1 = new ParticleSystem(muzzle);
    muzzle1.addBehavior(new ColorOverLife(new ColorRange(new THREE.Vector4(1, 0.3882312, 0.125, 1), new THREE.Vector4(0, 0.826827, 0.3014706, 1))));
    muzzle1.addBehavior(new SizeOverLife(new PiecewiseBezier([[new Bezier(1, 0.95, 0.75, 0), 0]])));
    muzzle1.addBehavior(new FrameOverLife(new PiecewiseBezier([[new Bezier(91, 94, 97, 100), 0]])));
    muzzle1.emitter.name = "muzzle1";
    batchSystem.addSystem(muzzle1);
    batchSystem.rotateX(-Math.PI / 2);
    const { onBeforeRender } = _l();
    onBeforeRender(({ delta }) => {
      batchSystem.update(delta);
    });
    return (_ctx, _cache) => {
      return _openBlock$1(), _createElementBlock("TresGroup", null, [
        _createElementVNode("primitive", {
          object: _unref$1(muzzle1).emitter
        }, null, 8, _hoisted_1),
        _createElementVNode("primitive", { object: _unref$1(batchSystem) }, null, 8, _hoisted_2)
      ]);
    };
  }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {createVNode:_createVNode,Suspense:_Suspense,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock,unref:_unref,mergeProps:_mergeProps} = await importShared('vue');

const {reactive} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "particleFirefly",
  setup(__props) {
    const gridState = reactive({
      cellSize: 60,
      cellThickness: 1,
      cellColor: "#6f6f6f",
      sectionColor: "#92399e",
      sectionSize: 330,
      sectionThickness: 1.5,
      fadeDistance: 3600,
      fadeStrength: 1,
      followCamera: false,
      infiniteGrid: true
    });
    return (_ctx, _cache) => {
      return _openBlock(), _createBlock(_sfc_main$2, {
        showAxesHelper: false,
        showGridHelper: false
      }, {
        ability: _withCtx(() => [
          (_openBlock(), _createBlock(_Suspense, null, {
            default: _withCtx(() => [
              _createVNode(_sfc_main$1, { position: [0, 20, 0] })
            ]),
            _: 1
          })),
          _createVNode(_unref(_sfc_main$3), _mergeProps({ args: [100, 100] }, gridState, { position: [0, -50, 0] }), null, 16)
        ]),
        _: 1
      });
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=particleFirefly.BCpm9HXn1767105581793.js.map
