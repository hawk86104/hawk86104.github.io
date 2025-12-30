import { importShared, rz, _l, Fs, no, sz } from './index.BxB45aCK1767105581793.js';
import { useFBO, useTexture } from './customShaderMaterial.vue_vue_type_script_setup_true_lang.rDMIDGqx1767105581793.js';
import './index.vue_vue_type_script_setup_true_lang.D7-hpzmy1767105581793.js';
import { getcenterPoint, loadGeojson } from './utils.-sNu4bkd1767105581793.js';
import { lonLatToUtm } from './TerrainMeshProvider.DWdowYX-1767105581793.js';
import { useGLTF } from './index.CTrIPOkZ1767105581793.js';

const {defineComponent:_defineComponent$8} = await importShared('vue');

const {createElementVNode:_createElementVNode$6,unref:_unref$5,openBlock:_openBlock$8,createElementBlock:_createElementBlock$7} = await importShared('vue');

const _hoisted_1$6 = ["scale"];
const _hoisted_2$5 = { renderOrder: 2200 };
const _hoisted_3$3 = ["args"];
const _hoisted_4$3 = ["side", "map", "color", "opacity"];
const _hoisted_5$2 = ["position"];
const _hoisted_6$1 = ["args"];
const _hoisted_7$1 = ["side", "map", "color", "opacity"];
const THREE$5 = await importShared('three');

const {ref: ref$4,watch: watch$6} = await importShared('vue');

const _sfc_main$6 = /* @__PURE__ */ _defineComponent$8({
  __name: "diffuseCircle",
  props: {
    radius: { default: 100 },
    ballColor: { default: "#ffff00" },
    wallColor: { default: "#ffffff" },
    speed: { default: 1 }
  },
  setup(__props) {
    const props = __props;
    const { textures, isLoading } = rz([
      "./plugins/digitalCity/image/diffuseCircle1.png",
      "./plugins/digitalCity/image/diffuseCircle2.png"
    ]);
    watch$6([textures, isLoading], ([texs, loading]) => {
      if (texs && !loading) {
        texs[1].offset.set(0.5, 0.5);
      }
    });
    const curScale = ref$4(0);
    const opacity = ref$4(1);
    const { onBeforeRender } = _l();
    onBeforeRender(({ delta }) => {
      if (curScale.value > 1) {
        curScale.value = 0;
      }
      curScale.value += delta * props.speed;
      opacity.value = 1.4 - curScale.value;
    });
    return (_ctx, _cache) => {
      return _openBlock$8(), _createElementBlock$7("TresGroup", { scale: curScale.value }, [
        _createElementVNode$6("TresMesh", _hoisted_2$5, [
          _createElementVNode$6("TresSphereGeometry", {
            args: [props.radius, 64, 64, 0, Math.PI * 2, 0, Math.PI / 2]
          }, null, 8, _hoisted_3$3),
          _createElementVNode$6("TresMeshBasicMaterial", {
            side: THREE$5.DoubleSide,
            transparent: "",
            map: _unref$5(textures)[0],
            color: _ctx.ballColor,
            opacity: opacity.value
          }, null, 8, _hoisted_4$3)
        ]),
        _createElementVNode$6("TresMesh", {
          renderOrder: 2201,
          position: [0, props.radius * 0.3, 0]
        }, [
          _createElementVNode$6("TresCylinderGeometry", {
            args: [props.radius * 1.02, props.radius * 1.02, props.radius * 0.6, 32, 1, true],
            openEnded: true
          }, null, 8, _hoisted_6$1),
          _createElementVNode$6("TresMeshBasicMaterial", {
            side: THREE$5.DoubleSide,
            transparent: "",
            map: _unref$5(textures)[1],
            color: _ctx.wallColor,
            opacity: opacity.value
          }, null, 8, _hoisted_7$1)
        ], 8, _hoisted_5$2)
      ], 8, _hoisted_1$6);
    };
  }
});

const {defineComponent:_defineComponent$7} = await importShared('vue');

const {createElementVNode:_createElementVNode$5,normalizeProps:_normalizeProps$2,guardReactiveProps:_guardReactiveProps$2,openBlock:_openBlock$7,createElementBlock:_createElementBlock$6} = await importShared('vue');

const _hoisted_1$5 = { renderOrder: 2200 };
const _hoisted_2$4 = ["args"];
const {toRaw: toRaw$1,watch: watch$5} = await importShared('vue');
const THREE$4 = await importShared('three');

const _sfc_main$5 = /* @__PURE__ */ _defineComponent$7({
  __name: "depthBufferDiffuse",
  props: {
    radius: { default: 100 },
    shieldColor: { default: "#ffff00" },
    rimColor: { default: "#ffffff" },
    threshold: { default: 5e-3 }
  },
  setup(__props) {
    const props = __props;
    const { sizes, camera } = Fs();
    const dpr = sizes.aspectRatio.value;
    const widths = sizes.width.value;
    const heights = sizes.height.value;
    const ws = widths * dpr;
    const hs = heights * dpr;
    const fbo = useFBO({
      height: ws,
      width: hs,
      depth: true,
      isLoop: true
    });
    const shader = {
      blending: THREE$4.NormalBlending,
      transparent: true,
      depthWrite: false,
      depthTest: true,
      side: THREE$4.DoubleSide,
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vPosition;
        void main() {
            vUv = uv;
            vec4 worldPos = modelMatrix * vec4(position, 1.0);
            vec4 modelNormal = modelMatrix * vec4(normal, 0.0);
            vec4 mvPosition = viewMatrix * worldPos;
            gl_Position = projectionMatrix * mvPosition;
            vNormal = modelNormal.xyz;
            vPosition = worldPos.xyz;
        }
    `,
      fragmentShader: `
        uniform sampler2D uDepthTexture; 
        uniform vec2 uResolution;
        uniform float uNear;
        uniform float uFar;
        uniform float uThreshold;
        uniform vec3 uShieldColor;
        uniform vec3 uRimColor;

        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vPosition;

        #include <packing>

        float LinearizeDepth(float depth) {
            float zNdc = 2.0 * depth - 1.0;
            float zEye = (2.0 * uFar * uNear) / ((uFar + uNear) - zNdc * (uFar - uNear));
            float linearDepth = (zEye - uNear) / (uFar - uNear);
            return linearDepth;
        }

        void main() {
            vec3 normal = normalize(vNormal);
            if(gl_FrontFacing) {
                normal *= -1.0;
            }

            vec3 viewDirection = normalize(cameraPosition - vPosition);
            float fresnel = 1. + dot(normal, viewDirection);
            fresnel = pow(fresnel, 4.0);

            vec2 worldCoords = gl_FragCoord.xy/uResolution;

            float sceneDepth = LinearizeDepth(texture2D(uDepthTexture, worldCoords).r);
            float bubbleDepth = LinearizeDepth(gl_FragCoord.z);

            float difference = abs(sceneDepth - bubbleDepth);
            float normalizedDistance = clamp(difference / uThreshold, 0.0, 1.0);
            vec4 intersection = mix(vec4(1.0), vec4(0.0), normalizedDistance);
            intersection.rgb *= uRimColor;

            vec4 color = vec4(uShieldColor, 0.3);
            gl_FragColor = color + intersection + vec4(uRimColor, 1.0) * fresnel;
        }
    `,
      uniforms: {
        uDepthTexture: { value: toRaw$1(fbo?.value?.depthTexture) },
        uResolution: { value: new THREE$4.Vector2(widths, heights) },
        uNear: { value: camera.value?.near ?? 1 },
        uFar: { value: camera.value?.far ?? 1e4 },
        uThreshold: { value: props.threshold },
        uShieldColor: { value: new THREE$4.Color(props.shieldColor) },
        uRimColor: { value: new THREE$4.Color(props.rimColor) }
      }
    };
    const { onRender } = _l();
    onRender(() => {
    });
    watch$5(
      () => [props.rimColor, props.shieldColor, props.threshold],
      ([rimColor, shieldColor, threshold]) => {
        shader.uniforms.uRimColor.value.setStyle(rimColor);
        shader.uniforms.uShieldColor.value.setStyle(shieldColor);
        shader.uniforms.uThreshold.value = threshold;
      }
    );
    return (_ctx, _cache) => {
      return _openBlock$7(), _createElementBlock$6("TresMesh", _hoisted_1$5, [
        _createElementVNode$5("TresSphereGeometry", {
          args: [props.radius, 64, 64]
        }, null, 8, _hoisted_2$4),
        _createElementVNode$5("TresShaderMaterial", _normalizeProps$2(_guardReactiveProps$2(shader)), null, 16)
      ]);
    };
  }
});

const {withAsyncContext:_withAsyncContext$2,defineComponent:_defineComponent$6} = await importShared('vue');

const {unref:_unref$4,openBlock:_openBlock$6,createBlock:_createBlock} = await importShared('vue');

const {watch: watch$4} = await importShared('vue');

await importShared('three');

const {defineComponent:_defineComponent$5} = await importShared('vue');

const {openBlock:_openBlock$5,createElementBlock:_createElementBlock$5,createCommentVNode:_createCommentVNode} = await importShared('vue');
const {watch: watch$3,watchEffect: watchEffect$2,toRaw,ref: ref$3} = await importShared('vue');
await importShared('three');

const {defineComponent:_defineComponent$4} = await importShared('vue');

const {createElementVNode:_createElementVNode$4,normalizeProps:_normalizeProps$1,guardReactiveProps:_guardReactiveProps$1,openBlock:_openBlock$4,createElementBlock:_createElementBlock$4} = await importShared('vue');

const _hoisted_1$4 = { renderOrder: 9999 };
const _hoisted_2$3 = ["rotation"];
const _hoisted_3$2 = ["args"];
const _hoisted_4$2 = ["rotation"];
const _hoisted_5$1 = ["args"];
const THREE$3 = await importShared('three');

const {watchEffect: watchEffect$1} = await importShared('vue');

const _sfc_main$4 = /* @__PURE__ */ _defineComponent$4({
  __name: "rectangleGlow",
  props: {
    w: { default: 100 },
    h: { default: 100 },
    pColor: { default: "#ffff00" },
    gradientWidth: { default: 0.99 },
    glowWidth: { default: 0.99 },
    nNumber: { default: 8 },
    lineWidth: { default: 2 },
    lColor: { default: "#ffff00" }
  },
  setup(__props) {
    const props = __props;
    const pShader = {
      vertexShader: `
 		varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
      fragmentShader: `
    varying vec2 vUv;
		uniform vec3 color;
		uniform float gradientWidth;
		uniform float glowWidth;
		uniform float nNumber;

    void main() {
 			float distX = abs(vUv.x - 0.5) / 0.5;
      float distY = abs(vUv.y - 0.5) / 0.5;

      // 使用 Minkowski 距离，平滑矩形感 + 中心无交叉线 + 对角线也平滑
      float dist = pow(pow(distX, nNumber) + pow(distY, nNumber), 1.0 / nNumber);

      float cutoff = 1.0 - gradientWidth;
  		float alpha = smoothstep(cutoff, cutoff + glowWidth, dist);

      gl_FragColor = vec4(color, alpha);
    }
  `,
      transparent: true,
      side: THREE$3.DoubleSide,
      depthWrite: false,
      depthTest: true,
      uniforms: {
        color: {
          type: "uvs",
          value: new THREE$3.Color(props.pColor)
        },
        gradientWidth: {
          type: "f",
          value: props.gradientWidth
        },
        glowWidth: {
          type: "f",
          value: props.glowWidth
        },
        nNumber: {
          type: "f",
          value: props.nNumber
        }
      }
    };
    const lShader = {
      transparent: true,
      side: THREE$3.DoubleSide,
      depthWrite: false,
      depthTest: true,
      uniforms: {
        borderWidth: { value: props.lineWidth },
        // 边框宽度（相对UV）
        borderColor: { value: new THREE$3.Color(props.lColor) },
        size: { value: new THREE$3.Vector2(props.w, props.h) }
      },
      vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
      fragmentShader: `
    uniform float borderWidth;
    uniform vec3 borderColor;
    varying vec2 vUv;
		uniform vec2 size;

    void main() {
		 	float borderX = borderWidth / size.x;
  		float borderY = borderWidth / size.y;

      float left   = step(vUv.x, borderX);
      float right  = step(1.0 - borderX, vUv.x);
      float bottom = step(vUv.y, borderY);
      float top    = step(1.0 - borderY, vUv.y);

      float edge = max(max(left, right), max(bottom, top)); // 只保留边缘线
      float alpha = edge;

      gl_FragColor = vec4(borderColor, alpha);
    }
  `
    };
    watchEffect$1(() => {
      pShader.uniforms.color.value = new THREE$3.Color(props.pColor);
      pShader.uniforms.gradientWidth.value = props.gradientWidth;
      pShader.uniforms.glowWidth.value = props.glowWidth;
      pShader.uniforms.nNumber.value = props.nNumber;
      lShader.uniforms.borderColor.value = new THREE$3.Color(props.lColor);
      lShader.uniforms.borderWidth.value = props.lineWidth;
      lShader.uniforms.size.value.set(props.w, props.h);
    });
    return (_ctx, _cache) => {
      return _openBlock$4(), _createElementBlock$4("TresGroup", _hoisted_1$4, [
        _createElementVNode$4("TresMesh", {
          rotation: [Math.PI / 2, 0, 0]
        }, [
          _createElementVNode$4("TresPlaneGeometry", {
            args: [_ctx.w, _ctx.h]
          }, null, 8, _hoisted_3$2),
          _createElementVNode$4("TresShaderMaterial", _normalizeProps$1(_guardReactiveProps$1(pShader)), null, 16)
        ], 8, _hoisted_2$3),
        _createElementVNode$4("TresMesh", {
          rotation: [Math.PI / 2, 0, 0]
        }, [
          _createElementVNode$4("TresPlaneGeometry", {
            args: [_ctx.w + _ctx.lineWidth, _ctx.h + _ctx.lineWidth]
          }, null, 8, _hoisted_5$1),
          _createElementVNode$4("TresShaderMaterial", _normalizeProps$1(_guardReactiveProps$1(lShader)), null, 16)
        ], 8, _hoisted_4$2)
      ]);
    };
  }
});

const {defineComponent:_defineComponent$3} = await importShared('vue');

const {unref:_unref$3,createElementVNode:_createElementVNode$3,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,openBlock:_openBlock$3,createElementBlock:_createElementBlock$3} = await importShared('vue');

const _hoisted_1$3 = ["position", "uv"];
const THREE$2 = await importShared('three');

const {watchEffect,ref: ref$2,watch: watch$2} = await importShared('vue');
const _sfc_main$3 = /* @__PURE__ */ _defineComponent$3({
  __name: "wave",
  props: {
    positionSrc: { default: [
      { x: 0, y: 0 },
      { x: 10, y: 10 }
    ] },
    color: { default: "#ffff00" },
    opacity: { default: 0.8 },
    height: { default: 100 },
    frequencyNum: { default: 8 },
    speed: { default: 1 }
  },
  setup(__props) {
    const props = __props;
    const tresMeshRef = ref$2();
    const rippleShader = {
      side: THREE$2.DoubleSide,
      transparent: true,
      depthWrite: false,
      depthTest: true,
      vertexShader: `
varying vec2 vUv; 
void main(){
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
}
`,
      fragmentShader: `
	uniform float uTime;
	varying vec2 vUv;
	#define PI 3.14159265
  uniform float speed;
  uniform vec3 color;
  uniform float opacity;
  uniform float frequencyNum;
	void main(){
			
	float amplitude = 1.;

	float x = vUv.x;
	float y = sin(x * frequencyNum) ;
	float t = 0.01*(-uTime*130.0*speed);
	y += sin(x*frequencyNum*2.1 + t)*4.5;
	y += sin(x*frequencyNum*1.72 + t*1.121)*4.0;
	y += sin(x*frequencyNum*2.221 + t*0.437)*5.0;
	y += sin(x*frequencyNum*3.1122+ t*4.269)*2.5;
	y *= amplitude*0.06;
	y /= 3.;
	y += 0.55;

	float ap = step(vUv.y,y) * (y-vUv.y)/y;

	gl_FragColor = vec4(color,ap*opacity);
}
	`,
      uniforms: {
        uTime: {
          type: "pv2",
          value: 0
        },
        color: {
          type: "uvs",
          value: new THREE$2.Color(props.color)
        },
        opacity: {
          type: "pv2",
          value: props.opacity
        },
        frequencyNum: {
          type: "pv2",
          value: props.frequencyNum
        },
        speed: {
          type: "pv2",
          value: props.speed
        }
      }
    };
    let positionArray = null;
    let uvArray = null;
    function getRippleGeometry(points2 = [], height) {
      const positions = [];
      const uvs = [];
      for (let i = 0, j = positions.length, t = uvs.length; i < points2.length - 1; i++) {
        let vUvyMax = 1;
        let left = points2[i];
        let right = points2[i + 1];
        positions[j++] = left.x;
        positions[j++] = 0;
        positions[j++] = left.y;
        uvs[t++] = 0;
        uvs[t++] = 0;
        positions[j++] = right.x;
        positions[j++] = 0;
        positions[j++] = right.y;
        uvs[t++] = 1;
        uvs[t++] = 0;
        positions[j++] = left.x;
        positions[j++] = height;
        positions[j++] = left.y;
        uvs[t++] = 0;
        uvs[t++] = vUvyMax;
        positions[j++] = left.x;
        positions[j++] = height;
        positions[j++] = left.y;
        uvs[t++] = 0;
        uvs[t++] = vUvyMax;
        positions[j++] = right.x;
        positions[j++] = 0;
        positions[j++] = right.y;
        uvs[t++] = 1;
        uvs[t++] = 0;
        positions[j++] = right.x;
        positions[j++] = height;
        positions[j++] = right.y;
        uvs[t++] = 1;
        uvs[t++] = vUvyMax;
      }
      positionArray = new Float32Array(positions);
      uvArray = new Float32Array(uvs);
    }
    const { centerPoint, points } = getcenterPoint(props.positionSrc);
    getRippleGeometry(points, props.height);
    const { onBeforeRender } = _l();
    onBeforeRender(({ delta }) => {
      rippleShader.uniforms.uTime.value += delta;
    });
    watchEffect(() => {
      if (props.color) {
        rippleShader.uniforms.color.value = new THREE$2.Color(props.color);
      }
      if (props.opacity) {
        rippleShader.uniforms.opacity.value = props.opacity;
      }
      if (props.frequencyNum) {
        rippleShader.uniforms.frequencyNum.value = props.frequencyNum;
      }
      if (props.speed) {
        rippleShader.uniforms.speed.value = props.speed;
      }
      if (tresMeshRef.value) {
        tresMeshRef.value.position.set(centerPoint.x, tresMeshRef.value.position.y, centerPoint.y);
      }
    });
    watch$2(
      () => props.height,
      (height) => {
        getRippleGeometry(points, props.height);
        if (tresMeshRef.value) {
          tresMeshRef.value.position.set(centerPoint.x, tresMeshRef.value.position.y, centerPoint.y);
        }
      }
    );
    return (_ctx, _cache) => {
      return _openBlock$3(), _createElementBlock$3("TresMesh", {
        renderOrder: 2200,
        ref_key: "tresMeshRef",
        ref: tresMeshRef
      }, [
        _createElementVNode$3("TresBufferGeometry", {
          position: [_unref$3(positionArray), 3],
          uv: [_unref$3(uvArray), 2]
        }, null, 8, _hoisted_1$3),
        _createElementVNode$3("TresShaderMaterial", _normalizeProps(_guardReactiveProps(rippleShader)), null, 16)
      ], 512);
    };
  }
});

const {withAsyncContext:_withAsyncContext$1,defineComponent:_defineComponent$2} = await importShared('vue');

const {unref:_unref$2,renderList:_renderList,Fragment:_Fragment,openBlock:_openBlock$2,createElementBlock:_createElementBlock$2,createElementVNode:_createElementVNode$2} = await importShared('vue');

const _hoisted_1$2 = ["args"];
const _hoisted_2$2 = ["map", "side", "color"];
const {watch: watch$1} = await importShared('vue');

const {CatmullRomCurve3,Vector3,RepeatWrapping,DoubleSide} = await importShared('three');
const _sfc_main$2 = /* @__PURE__ */ _defineComponent$2({
  __name: "roadLightByLonLat",
  props: {
    geoJson: {},
    color: { default: "#ffff00" },
    radius: { default: 2 },
    speed: { default: 1 }
  },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    const { state: pTexture } = no("./plugins/digitalCity/image/line.png");
    watch$1(pTexture, (mapv) => {
      if (mapv) {
        mapv.needsUpdate = true;
        mapv.wrapS = mapv.wrapT = RepeatWrapping;
        mapv.repeat.set(1, 1);
      }
    });
    const linePrimary = ([__temp, __restore] = _withAsyncContext$1(() => loadGeojson(props.geoJson)), __temp = await __temp, __restore(), __temp);
    let curve = [];
    for (let i = 0; i < linePrimary.length; i++) {
      const item = linePrimary[i];
      const points = [];
      item.geometry.coordinates.forEach((lineOne) => {
        const onePoint = lonLatToUtm(lineOne[0], lineOne[1], 50);
        points.push(new Vector3(onePoint[0], 0, -onePoint[1]));
      });
      let oneColor = props.color;
      if (item.properties.highway === "primary") oneColor = "#7eff10";
      else if (item.properties.highway === "tertiary") oneColor = "#0eeeee";
      else if (item.properties.highway === "secondary") oneColor = "#ffffff";
      else oneColor = "#ff0ffe";
      curve.push({ cr3: new CatmullRomCurve3(points), color: oneColor });
    }
    const { onBeforeRender } = _l();
    onBeforeRender(() => {
      if (pTexture.value) {
        pTexture.value.offset.x -= Math.random() / 20 * props.speed;
      }
    });
    return (_ctx, _cache) => {
      return _openBlock$2(), _createElementBlock$2("TresGroup", null, [
        (_openBlock$2(true), _createElementBlock$2(_Fragment, null, _renderList(_unref$2(curve), (item, index) => {
          return _openBlock$2(), _createElementBlock$2("TresMesh", {
            key: index,
            renderOrder: 3e3
          }, [
            _createElementVNode$2("TresTubeGeometry", {
              args: [item.cr3, 64, props.radius, 20, false]
            }, null, 8, _hoisted_1$2),
            _createElementVNode$2("TresMeshBasicMaterial", {
              map: _unref$2(pTexture),
              side: _unref$2(DoubleSide),
              transparent: true,
              color: item.color
            }, null, 8, _hoisted_2$2)
          ]);
        }), 128))
      ]);
    };
  }
});

const {defineComponent:_defineComponent$1} = await importShared('vue');

const {createElementVNode:_createElementVNode$1,unref:_unref$1,withCtx:_withCtx,createVNode:_createVNode,openBlock:_openBlock$1,createElementBlock:_createElementBlock$1} = await importShared('vue');

const _hoisted_1$1 = ["rotateX"];
const _hoisted_2$1 = ["rotateX", "position"];
const _hoisted_3$1 = ["args"];
const _hoisted_4$1 = ["map", "depthTest", "side", "color"];
const _hoisted_5 = ["rotateX", "position"];
const _hoisted_6 = ["args"];
const _hoisted_7 = ["map", "depthTest", "side", "color"];
const {ref: ref$1} = await importShared('vue');

const THREE$1 = await importShared('three');
const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "coneAnchorMeshA",
  props: {
    height: { default: 40 },
    color: { default: "#b0ffff" },
    occlusion: { type: Boolean, default: true },
    speed: { default: 0.05 }
  },
  setup(__props) {
    const props = __props;
    const coneGroup = ref$1();
    const { onBeforeRender } = _l();
    onBeforeRender(() => {
      coneGroup.value?.rotateZ(props.speed);
    });
    return (_ctx, _cache) => {
      return _openBlock$1(), _createElementBlock$1("TresGroup", {
        rotateX: -Math.PI / 2,
        ref_key: "coneGroup",
        ref: coneGroup,
        renderOrder: 1e4
      }, [
        _createVNode(_unref$1(sz), { path: "./plugins/digitalCity/image/midGradient.png" }, {
          default: _withCtx(({ state: texture }) => [
            _createElementVNode$1("TresMesh", {
              rotateX: Math.PI / 2,
              position: [0, 0, _ctx.height * 1.25],
              "scale-y": 0.5
            }, [
              _createElementVNode$1("TresConeGeometry", {
                args: [15, _ctx.height, 4, 1, true]
              }, null, 8, _hoisted_3$1),
              _createElementVNode$1("TresMeshLambertMaterial", {
                map: texture,
                transparent: true,
                depthTest: _ctx.occlusion,
                side: THREE$1.DoubleSide,
                color: _ctx.color,
                depthWrite: true
              }, null, 8, _hoisted_4$1)
            ], 8, _hoisted_2$1),
            _createElementVNode$1("TresMesh", {
              rotateX: -Math.PI / 2,
              position: [0, 0, _ctx.height / 2]
            }, [
              _createElementVNode$1("TresConeGeometry", {
                args: [15, _ctx.height, 4, 1, true]
              }, null, 8, _hoisted_6),
              _createElementVNode$1("TresMeshLambertMaterial", {
                map: texture,
                transparent: true,
                depthTest: _ctx.occlusion,
                side: THREE$1.DoubleSide,
                color: _ctx.color,
                depthWrite: true
              }, null, 8, _hoisted_7)
            ], 8, _hoisted_5)
          ]),
          _: 1
        })
      ], 8, _hoisted_1$1);
    };
  }
});

const {withAsyncContext:_withAsyncContext,defineComponent:_defineComponent} = await importShared('vue');

const {unref:_unref,createElementVNode:_createElementVNode,openBlock:_openBlock,createElementBlock:_createElementBlock} = await importShared('vue');

const _hoisted_1 = ["rotateX"];
const _hoisted_2 = ["object"];
const _hoisted_3 = ["args"];
const _hoisted_4 = ["color", "depthTest", "map"];
const {ref,watch} = await importShared('vue');

const THREE = await importShared('three');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "coneAnchorMeshB",
  props: {
    anchorColor: { default: "#b0ffff" },
    rotateSpeed: { default: 0.05 },
    depthTest: { type: Boolean, default: true },
    floorSize: { default: 12 },
    floorColor: { default: "#b0ffff" },
    floorSpeed: { default: 0.6 }
  },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    const { scene } = ([__temp, __restore] = _withAsyncContext(() => useGLTF("./plugins/digitalCity/model/coneAnchorB.glb")), __temp = await __temp, __restore(), __temp);
    const modelScene = scene?.clone();
    const modelMaterial = modelScene.children[0].material.clone();
    modelMaterial.color.set(props.anchorColor);
    modelMaterial.metalness = 0;
    modelMaterial.roughness = 0.5;
    modelMaterial.transparent = true;
    modelMaterial.opacity = 1;
    modelMaterial.depthTest = props.depthTest;
    modelScene.children[0].renderOrder = 0;
    modelScene.children[0].material = modelMaterial;
    const pTexture = ([__temp, __restore] = _withAsyncContext(() => useTexture("./plugins/digitalCity/image/waveCircle.png")), __temp = await __temp, __restore(), __temp);
    const { width, height } = pTexture.image;
    pTexture.wrapS = pTexture.wrapT = THREE.RepeatWrapping;
    pTexture.repeat.set(1 / (width / height), 1);
    watch(
      () => [props.anchorColor, props.depthTest],
      ([color, depthTest]) => {
        modelMaterial.color.set(color);
        modelMaterial.depthTest = depthTest;
      }
    );
    const coneGroup = ref(null);
    const { onRender } = _l();
    let _offset = 0;
    onRender(() => {
      coneGroup.value?.children[0].rotateZ(props.rotateSpeed);
      if (pTexture) {
        _offset += props.floorSpeed;
        pTexture.offset.x = Math.floor(_offset) / (pTexture.image.width / pTexture.image.height);
      }
    });
    return (_ctx, _cache) => {
      return _openBlock(), _createElementBlock("TresGroup", null, [
        _createElementVNode("TresGroup", {
          rotateX: -Math.PI / 2,
          ref_key: "coneGroup",
          ref: coneGroup
        }, [
          _createElementVNode("primitive", { object: _unref(modelScene) }, null, 8, _hoisted_2),
          _createElementVNode("TresMesh", null, [
            _createElementVNode("TresCircleGeometry", {
              args: [_ctx.floorSize, 32]
            }, null, 8, _hoisted_3),
            _createElementVNode("TresMeshStandardMaterial", {
              color: _ctx.floorColor,
              metalness: 0,
              roughness: 0.6,
              transparent: "",
              opacity: 0.8,
              depthTest: props.depthTest,
              depthWrite: false,
              map: _unref(pTexture)
            }, null, 8, _hoisted_4)
          ])
        ], 8, _hoisted_1)
      ]);
    };
  }
});

export { _sfc_main$1 as _sfc_main, _sfc_main as _sfc_main$1, _sfc_main$5 as _sfc_main$2, _sfc_main$6 as _sfc_main$3, _sfc_main$3 as _sfc_main$4, _sfc_main$4 as _sfc_main$5, _sfc_main$2 as _sfc_main$6 };
//# sourceMappingURL=coneAnchorMeshB.vue_vue_type_script_setup_true_lang.BRSVhWtw1767105581793.js.map
