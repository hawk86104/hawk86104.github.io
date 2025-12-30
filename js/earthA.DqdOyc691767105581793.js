import { importShared, _l, Qz, rz, Kk } from './index.BxB45aCK1767105581793.js';
import { _sfc_main as _sfc_main$5 } from './default.vue_vue_type_script_setup_true_lang.DQGKkIwV1767105581793.js';
import { gsapWithCSS } from './index.Dxfioss_1767105581793.js';

const {defineComponent:_defineComponent$4} = await importShared('vue');

const {unref:_unref$4,openBlock:_openBlock$4,createBlock:_createBlock} = await importShared('vue');

const {shallowRef,ref: ref$1,onMounted: onMounted$1} = await importShared('vue');
const _sfc_main$4 = /* @__PURE__ */ _defineComponent$4({
  __name: "starts",
  setup(__props) {
    const { onBeforeRender } = _l();
    const yRotation = shallowRef(0);
    onBeforeRender(({ delta }) => {
      yRotation.value += 0.02 * delta;
    });
    const StarsREF = ref$1();
    onMounted$1(() => {
      StarsREF.value.instance.material.color.setHex(5076687);
      StarsREF.value.instance.scale.set(5, 5, 5);
    });
    return (_ctx, _cache) => {
      return _openBlock$4(), _createBlock(_unref$4(Qz), {
        ref_key: "StarsREF",
        ref: StarsREF,
        rotation: [0, yRotation.value, 0],
        radius: 100,
        depth: 50,
        count: 1e4,
        size: 5,
        "size-attenuation": true
      }, null, 8, ["rotation"]);
    };
  }
});

const {defineComponent:_defineComponent$3} = await importShared('vue');

const {createElementVNode:_createElementVNode$3,unref:_unref$3,Fragment:_Fragment$3,openBlock:_openBlock$3,createElementBlock:_createElementBlock$3} = await importShared('vue');

const _hoisted_1$2 = { position: [0, 0, 0] };
const _hoisted_2$2 = ["map"];
const _hoisted_3$2 = ["map", "alphaMap", "blending"];
const _hoisted_4$2 = { scale: [155, 155, 0] };
const _hoisted_5$1 = ["map", "blending"];
const _hoisted_6$1 = { scale: [128, 128, 0] };
const _hoisted_7 = ["map", "blending"];
const {AdditiveBlending: AdditiveBlending$2} = await importShared('three');

const _sfc_main$3 = /* @__PURE__ */ _defineComponent$3({
  __name: "earthmap",
  setup(__props) {
    const { textures: pTexture } = rz(
      ["./plugins/earthSample/image/earthA/map.jpg", "./plugins/earthSample/image/earthA/earth.jpg", "./plugins/earthSample/image/earthA/glow.png", "./plugins/earthSample/image/earthA/innerGlow.png"]
    );
    return (_ctx, _cache) => {
      return _openBlock$3(), _createElementBlock$3(_Fragment$3, null, [
        _createElementVNode$3("TresMesh", _hoisted_1$2, [
          _cache[0] || (_cache[0] = _createElementVNode$3("TresSphereGeometry", { args: [50, 32, 32] }, null, -1)),
          _createElementVNode$3("TresMeshBasicMaterial", {
            map: _unref$3(pTexture)[0]
          }, null, 8, _hoisted_2$2)
        ]),
        _createElementVNode$3("TresMesh", null, [
          _cache[1] || (_cache[1] = _createElementVNode$3("TresSphereGeometry", { args: [53, 32, 32] }, null, -1)),
          _createElementVNode$3("TresMeshBasicMaterial", {
            map: _unref$3(pTexture)[1],
            alphaMap: _unref$3(pTexture)[1],
            blending: _unref$3(AdditiveBlending$2),
            transparent: true
          }, null, 8, _hoisted_3$2)
        ]),
        _createElementVNode$3("TresSprite", _hoisted_4$2, [
          _createElementVNode$3("TresSpriteMaterial", {
            color: "#4d76cf",
            map: _unref$3(pTexture)[2],
            blending: _unref$3(AdditiveBlending$2),
            depthWrite: false,
            depthTest: false,
            transparent: true
          }, null, 8, _hoisted_5$1)
        ]),
        _createElementVNode$3("TresSprite", _hoisted_6$1, [
          _createElementVNode$3("TresSpriteMaterial", {
            color: "#4d76cf",
            map: _unref$3(pTexture)[3],
            blending: _unref$3(AdditiveBlending$2),
            depthWrite: false,
            depthTest: false,
            transparent: true
          }, null, 8, _hoisted_7)
        ])
      ], 64);
    };
  }
});

const {defineComponent:_defineComponent$2} = await importShared('vue');

const {renderList:_renderList,Fragment:_Fragment$2,openBlock:_openBlock$2,createElementBlock:_createElementBlock$2,createElementVNode:_createElementVNode$2,unref:_unref$2} = await importShared('vue');

const _hoisted_1$1 = ["position"];
const _hoisted_2$1 = ["map", "alphaMap", "blending", "side"];
const _hoisted_3$1 = ["rotation-y"];
const _hoisted_4$1 = ["map", "alphaMap", "blending", "side"];
const _hoisted_5 = ["rotation-x"];
const _hoisted_6 = ["map", "blending", "side"];
const {onMounted,getCurrentInstance,watch,nextTick} = await importShared('vue');
const {AdditiveBlending: AdditiveBlending$1,DoubleSide: DoubleSide$1,Vector3} = await importShared('three');
const GZNUM = 30;
const _sfc_main$2 = /* @__PURE__ */ _defineComponent$2({
  __name: "lightlinepoint",
  setup(__props) {
    const { textures: pTexture, isLoading } = rz(
      ["./plugins/earthSample/image/earthA/light_column.png", "./plugins/earthSample/image/earthA/label.png"]
    );
    const gspList = [];
    let proxy = null;
    onMounted(() => {
      proxy = getCurrentInstance().proxy;
      for (let i = 1; i <= GZNUM; i++) {
        gspList.push(gsapWithCSS.to(proxy.$refs[`meshCircleRef${i}`][0].scale, {
          duration: 1 + Math.random() * 0.5,
          x: 2,
          y: 2,
          z: 2,
          repeat: -1,
          delay: Math.random() * 0.5,
          yoyo: true,
          ease: "power2.inOut"
        }));
      }
    });
    watch(isLoading, (newVal) => {
      if (!newVal) {
        nextTick(() => {
          for (let i = 1; i <= GZNUM; i++) {
            const tmpMesh = proxy.$refs[`meshRef${i}`][0];
            tmpMesh.quaternion.setFromUnitVectors(
              new Vector3(0, 1, 0),
              tmpMesh.position.clone().normalize()
            );
          }
        });
      }
    });
    const lon2xyz = (R, longitude, latitude) => {
      let lon = longitude * Math.PI / 180;
      const lat = latitude * Math.PI / 180;
      lon = -lon;
      const x = R * Math.cos(lat) * Math.cos(lon);
      const y = R * Math.sin(lat);
      const z = R * Math.cos(lat) * Math.sin(lon);
      return [x, y, z];
    };
    const positionRandom = () => {
      const lat = Math.random() * 180 - 90;
      const lon = Math.random() * 360 - 180;
      return lon2xyz(60, lon, lat);
    };
    return (_ctx, _cache) => {
      return _openBlock$2(), _createElementBlock$2(_Fragment$2, null, _renderList(GZNUM, (i) => {
        return _createElementVNode$2("TresMesh", {
          ref_for: true,
          ref: `meshRef${i}`,
          key: i,
          position: positionRandom()
        }, [
          _cache[2] || (_cache[2] = _createElementVNode$2("TresPlaneGeometry", { args: [3, 20] }, null, -1)),
          _createElementVNode$2("TresMeshBasicMaterial", {
            color: "#ffffff",
            map: _unref$2(pTexture)[0],
            alphaMap: _unref$2(pTexture)[0],
            blending: _unref$2(AdditiveBlending$1),
            side: _unref$2(DoubleSide$1),
            depthWrite: false,
            transparent: true
          }, null, 8, _hoisted_2$1),
          _createElementVNode$2("TresMesh", {
            "rotation-y": Math.PI / 2
          }, [
            _cache[0] || (_cache[0] = _createElementVNode$2("TresPlaneGeometry", { args: [3, 20] }, null, -1)),
            _createElementVNode$2("TresMeshBasicMaterial", {
              color: "#ffffff",
              map: _unref$2(pTexture)[0],
              alphaMap: _unref$2(pTexture)[0],
              blending: _unref$2(AdditiveBlending$1),
              side: _unref$2(DoubleSide$1),
              depthWrite: false,
              transparent: true
            }, null, 8, _hoisted_4$1)
          ], 8, _hoisted_3$1),
          _createElementVNode$2("TresMesh", {
            ref_for: true,
            ref: `meshCircleRef${i}`,
            "rotation-x": -Math.PI / 2,
            position: [0, -7, 0]
          }, [
            _cache[1] || (_cache[1] = _createElementVNode$2("TresPlaneGeometry", { args: [6, 6] }, null, -1)),
            _createElementVNode$2("TresMeshBasicMaterial", {
              color: "#ffffff",
              map: _unref$2(pTexture)[1],
              blending: _unref$2(AdditiveBlending$1),
              side: _unref$2(DoubleSide$1),
              depthWrite: false,
              transparent: true
            }, null, 8, _hoisted_6)
          ], 8, _hoisted_5)
        ], 8, _hoisted_1$1);
      }), 64);
    };
  }
});

const {defineComponent:_defineComponent$1} = await importShared('vue');

const {createElementVNode:_createElementVNode$1,unref:_unref$1,Fragment:_Fragment$1,openBlock:_openBlock$1,createElementBlock:_createElementBlock$1} = await importShared('vue');

const _hoisted_1 = ["rotation-x"];
const _hoisted_2 = ["map", "emissiveMap"];
const _hoisted_3 = ["rotation-x"];
const _hoisted_4 = ["map", "blending", "side"];
const {ref} = await importShared('vue');
const {AdditiveBlending,DoubleSide} = await importShared('three');

const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "moon",
  setup(__props) {
    const { textures: pTexture } = rz(
      ["./plugins/earthSample/image/earthA/moon.jpg", "./plugins/earthSample/image/earthA/moon_ring.png"]
    );
    const { onBeforeRender } = _l();
    const moonRef = ref(null);
    onBeforeRender(({ elapsed }) => {
      if (moonRef) {
        const tempelapsed = elapsed / 20;
        moonRef.value.position.x = 150 * Math.cos(tempelapsed * Math.PI * 2);
        moonRef.value.position.z = 150 * Math.sin(tempelapsed * Math.PI * 2);
        moonRef.value.rotation.set(0, tempelapsed * Math.PI * 8, 0);
      }
    });
    return (_ctx, _cache) => {
      return _openBlock$1(), _createElementBlock$1(_Fragment$1, null, [
        _createElementVNode$1("TresMesh", {
          ref_key: "moonRef",
          ref: moonRef,
          position: [150, 0, 0],
          "rotation-x": -Math.PI / 2
        }, [
          _cache[0] || (_cache[0] = _createElementVNode$1("TresSphereGeometry", { args: [5, 32, 32] }, null, -1)),
          _createElementVNode$1("TresMeshStandardMaterial", {
            map: _unref$1(pTexture)[0],
            emissive: "#ffffff",
            emissiveMap: _unref$1(pTexture)[0]
          }, null, 8, _hoisted_2)
        ], 8, _hoisted_1),
        _createElementVNode$1("TresMesh", {
          "rotation-x": -Math.PI / 2
        }, [
          _cache[1] || (_cache[1] = _createElementVNode$1("TresRingGeometry", { args: [145, 155, 64] }, null, -1)),
          _createElementVNode$1("TresMeshBasicMaterial", {
            map: _unref$1(pTexture)[1],
            blending: _unref$1(AdditiveBlending),
            side: _unref$1(DoubleSide),
            depthWrite: false,
            transparent: true,
            opacity: 0.5
          }, null, 8, _hoisted_4)
        ], 8, _hoisted_3)
      ], 64);
    };
  }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {createVNode:_createVNode,createElementVNode:_createElementVNode,unref:_unref,resolveComponent:_resolveComponent,mergeProps:_mergeProps,withCtx:_withCtx,Fragment:_Fragment,openBlock:_openBlock,createElementBlock:_createElementBlock} = await importShared('vue');
const {PCFSoftShadowMap,SRGBColorSpace} = await importShared('three');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "earthA",
  setup(__props) {
    const gl = {
      clearColor: "#030311",
      shadows: true,
      alpha: false,
      outputColorSpace: SRGBColorSpace,
      shadowMapType: PCFSoftShadowMap,
      useLegacyLights: true
    };
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createElementBlock(_Fragment, null, [
        _createVNode(_sfc_main$5),
        _createVNode(_component_TresCanvas, _mergeProps(gl, { "window-size": "" }), {
          default: _withCtx(() => [
            _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", {
              position: [0, 50, 300],
              fov: 45,
              near: 0.1,
              far: 1e5
            }, null, -1)),
            _createVNode(_unref(Kk), {
              autoRotate: true,
              autoRotateSpeed: 2
            }),
            _createVNode(_sfc_main$4),
            _createVNode(_sfc_main$3),
            _createVNode(_sfc_main$2),
            _createVNode(_sfc_main$1),
            _cache[1] || (_cache[1] = _createElementVNode("TresAmbientLight", {
              color: "#484068",
              intensity: 1
            }, null, -1))
          ]),
          _: 1
        }, 16)
      ], 64);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=earthA.DqdOyc691767105581793.js.map
