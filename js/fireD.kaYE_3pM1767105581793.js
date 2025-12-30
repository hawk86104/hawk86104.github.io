import { importShared, no, _l } from './index.BxB45aCK1767105581793.js';
import { _sfc_main as _sfc_main$2 } from './pagesShow.vue_vue_type_script_setup_true_lang.DfPQrWBQ1767105581793.js';
import { BatchedRenderer, RenderMode, ConeEmitter, ParticleSystem, ConstantValue, ConstantColor, IntervalValue, ColorOverLife, ColorRange, Vector4, Noise, SizeOverLife, PiecewiseBezier, Bezier, ForceOverLife } from './three.quarks.esm.C9WjGUm11767105581793.js';

const {defineComponent:_defineComponent$1} = await importShared('vue');

const {unref:_unref,createElementVNode:_createElementVNode,openBlock:_openBlock$1,createElementBlock:_createElementBlock,createCommentVNode:_createCommentVNode} = await importShared('vue');

const _hoisted_1 = { key: 0 };
const _hoisted_2 = ["object"];
const _hoisted_3 = ["object"];
const _hoisted_4 = ["object"];
const _hoisted_5 = ["object"];
const {watch} = await importShared('vue');

const THREE = await importShared('three');
const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "fireD",
  props: {
    color: { default: "#b0ffff" },
    size: { default: 1 }
  },
  setup(__props) {
    const batchSystem = new BatchedRenderer();
    const { state: pTexture, isLoading } = no("./plugins/digitalCity/image/smoke1.png");
    let hmps, yanps, muzzle1;
    watch(
      () => pTexture.value,
      (texture) => {
        if (texture) {
          const hmConfig = {
            duration: 1,
            looping: true,
            startLife: new IntervalValue(1, 5),
            startSpeed: new ConstantValue(6),
            startSize: new IntervalValue(10, 20),
            startColor: new ConstantColor(new Vector4(255 / 255, 180 / 255, 88 / 255, 1)),
            worldSpace: true,
            emissionOverTime: new ConstantValue(100),
            shape: new ConeEmitter({ radius: 5.5, angle: 0.5 }),
            material: new THREE.MeshBasicMaterial({
              map: texture,
              transparent: true,
              side: THREE.DoubleSide,
              depthWrite: true
            }),
            renderMode: RenderMode.BillBoard,
            renderOrder: 9999
          };
          hmps = new ParticleSystem(hmConfig);
          hmps.addBehavior(
            new ColorOverLife(new ColorRange(new Vector4(255 / 255, 180 / 255, 88 / 255, 1), new Vector4(255 / 255, 180 / 255, 88 / 255, 0.1)))
          );
          hmps.emitter.name = "hmps";
          hmps.emitter.rotation.x = -Math.PI / 2;
          batchSystem.addSystem(hmps);
          const muzzle = {
            duration: 1,
            looping: true,
            startLife: new IntervalValue(0.1, 6),
            startSpeed: new ConstantValue(20),
            startSize: new IntervalValue(20, 50),
            startColor: new ConstantColor(new THREE.Vector4(255 / 255, 170 / 255, 120 / 255, 0.7)),
            worldSpace: true,
            emissionOverTime: new ConstantValue(80),
            shape: new ConeEmitter({ radius: 10.5, angle: 0.5 }),
            material: new THREE.MeshBasicMaterial({
              map: texture,
              // blending: THREE.AdditiveBlending,
              transparent: true,
              side: THREE.DoubleSide,
              // color: '#ff0000',
              depthWrite: true
              // depthTest: false,
            }),
            renderMode: RenderMode.BillBoard,
            startTileIndex: new ConstantValue(0),
            uTileCount: 0,
            //如果 图片材质包含集合贴图，则需要设置
            vTileCount: 0,
            renderOrder: 9998
          };
          muzzle1 = new ParticleSystem(muzzle);
          muzzle1.addBehavior(new Noise(new ConstantValue(1), new ConstantValue(2)));
          muzzle1.emitter.rotation.x = -Math.PI / 2;
          muzzle1.addBehavior(
            new ColorOverLife(new ColorRange(new THREE.Vector4(255 / 255, 170 / 255, 75 / 255, 0.9), new THREE.Vector4(145 / 255, 32 / 255, 20 / 255, 0)))
          );
          muzzle1.addBehavior(new SizeOverLife(new PiecewiseBezier([[new Bezier(1, 0.95, 0.75, 1), 0]])));
          muzzle1.addBehavior(new ForceOverLife(new ConstantValue(0), new ConstantValue(1), new ConstantValue(1)));
          muzzle1.emitter.name = "ps";
          batchSystem.addSystem(muzzle1);
          const yanConfig = {
            duration: 1,
            looping: true,
            startLife: new IntervalValue(1, 10),
            startSpeed: new ConstantValue(20),
            startSize: new IntervalValue(40, 70),
            startColor: new ConstantColor(new Vector4(100 / 255, 60 / 255, 70 / 255, 0.9)),
            worldSpace: true,
            emissionOverTime: new ConstantValue(80),
            shape: new ConeEmitter({ radius: 10.5, angle: 0.5 }),
            material: new THREE.MeshBasicMaterial({
              map: texture,
              transparent: true,
              side: THREE.DoubleSide,
              depthWrite: true
            }),
            renderMode: RenderMode.BillBoard,
            renderOrder: 9997
          };
          yanps = new ParticleSystem(yanConfig);
          yanps.addBehavior(new Noise(new ConstantValue(2), new ConstantValue(3)));
          yanps.addBehavior(
            new ColorOverLife(new ColorRange(new Vector4(100 / 255, 60 / 255, 70 / 255, 0.9), new Vector4(100 / 255, 60 / 255, 70 / 255, 0)))
          );
          yanps.addBehavior(new SizeOverLife(new PiecewiseBezier([[new Bezier(1 * 1.5, 0.95 * 1.5, 0.75 * 1.5, 1), 0]])));
          yanps.addBehavior(new ForceOverLife(new ConstantValue(1), new ConstantValue(2), new ConstantValue(1)));
          yanps.emitter.rotation.x = -Math.PI / 2;
          yanps.emitter.name = "yanps";
          yanps.emitter.position.y = 6;
          batchSystem.addSystem(yanps);
        }
      }
    );
    const { onBeforeRender } = _l();
    onBeforeRender(({ delta }) => {
      batchSystem.update(delta);
    });
    return (_ctx, _cache) => {
      return !_unref(isLoading) ? (_openBlock$1(), _createElementBlock("TresGroup", _hoisted_1, [
        _createElementVNode("primitive", {
          object: _unref(hmps).emitter
        }, null, 8, _hoisted_2),
        _createElementVNode("primitive", {
          object: _unref(yanps).emitter
        }, null, 8, _hoisted_3),
        _createElementVNode("primitive", {
          object: _unref(muzzle1).emitter
        }, null, 8, _hoisted_4),
        _createElementVNode("primitive", { object: _unref(batchSystem) }, null, 8, _hoisted_5)
      ])) : _createCommentVNode("", true);
    };
  }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {createVNode:_createVNode,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "fireD",
  setup(__props) {
    return (_ctx, _cache) => {
      return _openBlock(), _createBlock(_sfc_main$2, null, {
        ability: _withCtx(() => [
          _createVNode(_sfc_main$1, { position: [10, 15, 0] })
        ]),
        _: 1
      });
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=fireD.kaYE_3pM1767105581793.js.map
