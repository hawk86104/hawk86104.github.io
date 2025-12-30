import { importShared, _l, oz, Kk } from './index.BxB45aCK1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';
import { _sfc_main as _sfc_main$2 } from './reflectorDUDV.vue_vue_type_script_setup_true_lang.Cce3m26z1767105581793.js';
import { useTexture$1 as useTexture } from './customShaderMaterial.vue_vue_type_script_setup_true_lang.rDMIDGqx1767105581793.js';
import './index.vue_vue_type_script_setup_true_lang.D7-hpzmy1767105581793.js';

const {withAsyncContext:_withAsyncContext,defineComponent:_defineComponent$1} = await importShared('vue');

const {unref:_unref$1,createElementVNode:_createElementVNode$1,createVNode:_createVNode$1,openBlock:_openBlock$1,createElementBlock:_createElementBlock} = await importShared('vue');

const _hoisted_1 = ["rotateX"];
const _hoisted_2 = ["position", "aIndex", "aNormal"];
const THREE = await importShared('three');
const {useAttrs,watch} = await importShared('vue');
const vertex = `
varying vec2 vMapUv;
attribute float aIndex;
attribute vec3 aNormal;
uniform float uTime;
uniform float uScale;
uniform float uHeight;
uniform sampler2D uPerlinTexture;
varying float vIndex;
varying float vSelfIndex;
varying float vCircleNum;
float getStrength(float aIndex, float uTime, vec3 aNormal) {
    float selfIndex = mod(aIndex, 720.0);
    float circleNum = (aIndex - selfIndex) / 720.0;
    vec3 pDir = normalize(aNormal);
    float waveWidth = 90.0;
    float totalLength = 720.0;
    float modUtime = mod(uTime * 50.0, 720.0);
    float dw = waveWidth * 0.5;
    float smoothStart = smoothstep(modUtime, modUtime + dw, selfIndex);
    float smoothEnd = 1.0 - smoothstep(modUtime + waveWidth - dw, modUtime + waveWidth, selfIndex);
    float strength = min(smoothStart, smoothEnd);
    float isOver = step(720.0, modUtime + waveWidth);
    float over = (modUtime + waveWidth - 720.0);
    float isOverStep1 = (1.0 - step(dw, over)) * isOver;
    float isOverStep2 = step(dw, over);
    float overStep1Left = min(smoothstep(modUtime, modUtime + dw, selfIndex), (1.0 - smoothstep(modUtime + waveWidth - dw, modUtime + waveWidth, selfIndex)));
    float overStep1Right = 1.0 - smoothstep(modUtime + waveWidth - dw, modUtime + waveWidth, selfIndex + 720.0);
    float overStep1 = max(overStep1Left, overStep1Right);
    float overStep2Left = smoothstep(modUtime, modUtime + dw, selfIndex);
    float overStep2Right = min(smoothstep(modUtime, modUtime + dw, selfIndex + 720.0), (1.0 - smoothstep(modUtime + waveWidth - dw, modUtime + waveWidth, selfIndex + 720.0)));
    float overStep2 = max(overStep2Left, overStep2Right);
    float os = isOverStep1 * overStep1 + overStep2 * isOverStep2;
    strength = (1.0 - isOver) * strength + isOver * os;
    return strength;
}
void main() {
	vMapUv = uv;
	float selfIndex = mod(aIndex, 720.0);
	float circleNum = (aIndex - selfIndex) / 720.0;
	vec3 pDir = normalize(aNormal);
	float noise = texture(uPerlinTexture, vec2((selfIndex / 720.0), mod(uTime * 0.1, 1.0))).r;
	float strength = getStrength(aIndex, uTime, aNormal);
	strength += getStrength(aIndex, uTime + 10.0 + noise, aNormal);
	strength += getStrength(aIndex, uTime + 20.0 + noise, aNormal);
	strength += getStrength(aIndex, uTime + 30.0 + noise, aNormal);
	strength += getStrength(aIndex, uTime + 40.0 + noise, aNormal);
	strength += getStrength(aIndex, uTime + 50.0 + noise, aNormal);
	strength += getStrength(aIndex, uTime + 60.0 + noise, aNormal);
	strength += getStrength(aIndex, uTime + 70.0 + noise, aNormal);
	strength += getStrength(aIndex, uTime + 80.0 + noise, aNormal);
	strength += getStrength(aIndex, uTime + 90.0 + noise, aNormal);
	csm_Position.x += pDir.x * strength * 0.5;
	csm_Position.z += strength * circleNum * noise * uHeight;
	csm_Position.y += pDir.z * strength * 0.5;
	vIndex = aIndex;
	csm_PointSize = 0.01*uScale;
}
`;
const fragment = `
varying vec2 vMapUv;
varying float vIndex;
uniform float uTime;
uniform vec3 baseColor;
uniform sampler2D uPerlinTexture;
void main() {
	vec3 whiteColor = vec3( 1.0,1.0,1.0);
	float selfIndex=mod(vIndex,720.0);
	float circleNum=(vIndex - selfIndex)/720.0;
	vec3 finalColor=mix(baseColor,diffuse,circleNum/5.0);
	finalColor*=1.0;
	csm_DiffuseColor = vec4( finalColor, opacity );
}
`;
const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "lineMagicZone",
  props: {
    height: {
      default: 1.6
    },
    speed: {
      default: 1
    },
    color: {
      default: "#90ee90"
    }
  },
  async setup(__props) {
    let __temp, __restore;
    const attrs = useAttrs();
    const props = __props;
    const pTexture = ([__temp, __restore] = _withAsyncContext(() => useTexture(["./plugins/basic/shine/image/round.png", "./plugins/digitalCity/image/noise/noisePerlin.png"])), __temp = await __temp, __restore(), __temp);
    const curve = new THREE.EllipseCurve(0, 0, 8, 8, 0, 2 * Math.PI, false, 0);
    const pointsPos = [];
    for (let i = 0; i < 5; i++) {
      pointsPos.push(...curve.getPoints(719));
      curve.xRadius += 0.2;
      curve.yRadius += 0.2;
    }
    const aIndex = new Float32Array(pointsPos.map((_, index) => index));
    const geometry = new THREE.BufferGeometry().setFromPoints(pointsPos);
    const geoPosList = geometry.getAttribute("position").array;
    const aNormals = new Float32Array(geoPosList.length);
    for (let i = 0; i < geoPosList.length / 3; i++) {
      const i3 = i * 3;
      geoPosList[i3 + 1] += Math.floor(i / 720) * 0.15;
      const baseIndex = i % 720 * 3;
      const offsetIndex = (i % 720 + 720 * 4) * 3;
      aNormals[i3] = geoPosList[offsetIndex] - geoPosList[baseIndex];
      aNormals[i3 + 1] = geoPosList[offsetIndex + 1] - geoPosList[baseIndex + 1];
      aNormals[i3 + 2] = geoPosList[offsetIndex + 2] - geoPosList[baseIndex + 2];
    }
    const uniforms = {
      uTime: { value: 0 },
      uScale: { value: attrs.scale ? attrs.scale : 1 },
      uHeight: { value: props.height },
      uPerlinTexture: { value: pTexture[1] },
      baseColor: { value: new THREE.Color(props.color) }
    };
    const { onRender } = _l();
    onRender(() => {
      uniforms.uTime.value += 0.01 * props.speed;
    });
    watch(
      () => [props.color, attrs.scale, props.height],
      ([color, scale, height]) => {
        uniforms.baseColor.value.set(color);
        uniforms.uScale.value = scale;
        uniforms.uHeight.value = height;
      }
    );
    return (_ctx, _cache) => {
      return _openBlock$1(), _createElementBlock("TresGroup", null, [
        _createElementVNode$1("TresPoints", {
          rotateX: -Math.PI / 2,
          scale: 0.1
        }, [
          _createElementVNode$1("TresBufferGeometry", {
            position: [_unref$1(geoPosList), 3],
            aIndex: [_unref$1(aIndex), 1],
            aNormal: [_unref$1(aNormals), 3]
          }, null, 8, _hoisted_2),
          _createVNode$1(_unref$1(oz), {
            baseMaterial: THREE.PointsMaterial,
            vertexShader: vertex,
            fragmentShader: fragment,
            uniforms,
            map: _unref$1(pTexture)[0],
            alphaMap: _unref$1(pTexture)[0],
            transparent: "",
            depthWrite: false,
            blending: THREE.AdditiveBlending,
            color: "#409eff",
            size: 0.1
          }, null, 8, ["baseMaterial", "map", "alphaMap", "blending"])
        ], 8, _hoisted_1)
      ]);
    };
  }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,createVNode:_createVNode,mergeProps:_mergeProps,Suspense:_Suspense,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock,resolveComponent:_resolveComponent} = await importShared('vue');

const {reactive} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "lineMagicZone",
  setup(__props) {
    const reflectorState = reactive({
      reflectivity: 0.1,
      showGridHelper: true,
      scale: 1
    });
    const configState = reactive({
      color: "#ff0000",
      scale: 1.8,
      height: 2.4,
      speed: 1
    });
    const paneControl = new Pane();
    paneControl.addBinding(configState, "color", { label: "颜色" });
    paneControl.addBinding(configState, "scale", {
      label: "大小",
      min: 0.1,
      max: 3,
      step: 0.1
    });
    paneControl.addBinding(configState, "height", {
      label: "高度",
      min: 0.1,
      max: 3,
      step: 0.1
    });
    paneControl.addBinding(configState, "speed", {
      label: "速度",
      min: -5,
      max: 5,
      step: 0.1
    });
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createBlock(_component_TresCanvas, {
        clearColor: "#201919",
        "window-size": "",
        antialias: "",
        alpha: "",
        logarithmicDepthBuffer: ""
      }, {
        default: _withCtx(() => [
          _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", {
            position: [5, 5, 5],
            fov: 45,
            near: 0.1,
            far: 1e4
          }, null, -1)),
          _createVNode(_unref(Kk), { enableDamping: "" }),
          _cache[1] || (_cache[1] = _createElementVNode("TresAmbientLight", { intensity: 2 }, null, -1)),
          (_openBlock(), _createBlock(_Suspense, null, {
            default: _withCtx(() => [
              _createVNode(_sfc_main$1, _mergeProps({ position: [3, 0, 0] }, configState), null, 16)
            ]),
            _: 1
          })),
          (_openBlock(), _createBlock(_Suspense, null, {
            default: _withCtx(() => [
              _createVNode(_sfc_main$1, {
                position: [-3, 0, 0],
                scale: 1.6,
                height: 3
              })
            ]),
            _: 1
          })),
          _createVNode(_sfc_main$2, _mergeProps({ position: [0, -0.5, 0] }, reflectorState), null, 16)
        ]),
        _: 1
      });
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=lineMagicZone.CL_8DF-L1767105581793.js.map
