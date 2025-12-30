import { importShared, no, _l } from './index.BxB45aCK1767105581793.js';

const {defineComponent:_defineComponent$2} = await importShared('vue');

const {unref:_unref$1,mergeProps:_mergeProps$1,createElementVNode:_createElementVNode$2,openBlock:_openBlock$2,createElementBlock:_createElementBlock$2} = await importShared('vue');

const _hoisted_1$2 = ["map"];
const {reactive,shallowRef,watchEffect: watchEffect$2} = await importShared('vue');
const _sfc_main$2 = /* @__PURE__ */ _defineComponent$2({
  __name: "buildingsMarkA",
  props: {
    color: { default: "#fff" },
    img: {},
    offset: { default: [0.344, 0.394] },
    foremost: { type: Boolean, default: true },
    sizeAttenuation: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const { state: pTexture } = no(props.img);
    const smState = reactive({
      color: props.color,
      transparent: true,
      depthWrite: false,
      sizeAttenuation: props.sizeAttenuation,
      // 自动缩放
      toneMapped: false,
      depthTest: !props.foremost
      // 深度检测 (是否遮挡)
    });
    const tsRef = shallowRef(null);
    watchEffect$2(() => {
      if (tsRef.value) {
        tsRef.value.geometry = tsRef.value.geometry.clone();
        tsRef.value.geometry.translate(props.offset[0], props.offset[1], 0);
      }
    });
    return (_ctx, _cache) => {
      return _openBlock$2(), _createElementBlock$2("TresSprite", {
        ref_key: "tsRef",
        ref: tsRef,
        scale: 0.1,
        renderOrder: "99999"
      }, [
        _createElementVNode$2("TresSpriteMaterial", _mergeProps$1(smState, { map: _unref$1(pTexture) }), null, 16, _hoisted_1$2)
      ], 512);
    };
  }
});

const {defineComponent:_defineComponent$1} = await importShared('vue');

const {createElementVNode:_createElementVNode$1,unref:_unref,mergeProps:_mergeProps,openBlock:_openBlock$1,createElementBlock:_createElementBlock$1} = await importShared('vue');

const _hoisted_1$1 = ["args"];
const _hoisted_2 = ["side"];
const {nextTick,ref: ref$1,watch,watchEffect: watchEffect$1} = await importShared('vue');
const {Matrix4,DoubleSide: DoubleSide$1,Color: Color$1} = await importShared('three');

const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "radraA",
  props: {
    size: { default: 300 },
    radius: { default: 240 },
    color: { default: "#ffff00" },
    opacity: { default: 0.9 },
    speed: { default: 1 },
    followWidth: { default: 220 }
  },
  setup(__props) {
    const props = __props;
    const { onBeforeRender } = _l();
    const timeDelta = { value: 0 };
    const TresCircleGeometryRef = ref$1();
    onBeforeRender(() => {
      timeDelta.value += 0.02 * props.speed;
    });
    const shader = {
      transparent: true,
      // blending: AdditiveBlending,
      depthWrite: false,
      depthTest: true,
      vertexShader: `
	varying vec3 vPosition;
	void main() {
		vPosition = position;
		vec4 modelPosition = modelMatrix * vec4(position, 1.0);
		vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectionPosition = projectionMatrix * viewPosition;
    gl_Position = projectionPosition;
  }
  `,
      fragmentShader: `
	uniform float uRadius;     
  uniform float uTime;      
  uniform float uFollowWidth; 
  varying vec3 vPosition;
	uniform float uOpacity;
	uniform vec3 ncolor;
  float calcAngle(vec3 oFrag){
    float fragAngle;
    const vec3 ox = vec3(1,0,0);
    float dianji = oFrag.x * ox.x + oFrag.z*ox.z;
    float oFrag_length = length(oFrag); // length是内置函数
    float ox_length = length(ox); // length是内置函数
    float yuxian = dianji / (oFrag_length * ox_length);
    fragAngle = acos(yuxian);
    fragAngle = degrees(fragAngle);
    if(oFrag.z > 0.0) {
      fragAngle = -fragAngle + 360.0;
    }
    float scanAngle = uTime * 100.0 - floor(uTime * 100.0 / 360.0) * 360.0;
    float angle = scanAngle - fragAngle;
    if(angle < 0.0){
      angle = angle + 360.0;
    }
    return angle;
  }
  void main() {
			// length内置函数，取向量的长度
		if(length(vPosition) == 0.0 || length(vPosition) > uRadius-2.0){
			gl_FragColor = vec4( ncolor, uOpacity );
		} else {
			float angle = calcAngle(vPosition);
			if(angle < uFollowWidth){
				// 尾焰区域
				float opacity =  1.0 - angle / uFollowWidth; 
				gl_FragColor = vec4( ncolor, uOpacity * opacity );  
			} else {
				// 其他位置的像素均为透明
				gl_FragColor = vec4( ncolor, 0.0 ); 
			}
		}
	}
  `,
      uniforms: {
        uRadius: { value: props.radius },
        uTime: timeDelta,
        uFollowWidth: { value: props.followWidth },
        ncolor: { value: new Color$1(props.color) },
        uOpacity: { value: props.opacity }
      }
    };
    watch(TresCircleGeometryRef, (newValue, oldValue) => {
      if (newValue && oldValue === void 0) {
        TresCircleGeometryRef.value.applyMatrix4(new Matrix4().makeRotationX(-Math.PI / 2));
      }
    });
    watch(() => props.size, () => {
      nextTick(() => {
        TresCircleGeometryRef.value.applyMatrix4(new Matrix4().makeRotationX(Math.PI / 2));
      });
    });
    watchEffect$1(() => {
      if (props.color) {
        shader.uniforms.ncolor.value = new Color$1(props.color);
      }
      if (props.opacity) {
        shader.uniforms.uOpacity.value = props.opacity;
      }
      if (props.radius) {
        shader.uniforms.uRadius.value = props.radius;
      }
      if (props.followWidth) {
        shader.uniforms.uFollowWidth.value = props.followWidth;
      }
    });
    return (_ctx, _cache) => {
      return _openBlock$1(), _createElementBlock$1("TresMesh", null, [
        _createElementVNode$1("TresCircleGeometry", {
          ref_key: "TresCircleGeometryRef",
          ref: TresCircleGeometryRef,
          args: [props.size, 64]
        }, null, 8, _hoisted_1$1),
        _createElementVNode$1("TresShaderMaterial", _mergeProps(shader, { side: _unref(DoubleSide$1) }), null, 16, _hoisted_2)
      ]);
    };
  }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,openBlock:_openBlock,createElementBlock:_createElementBlock} = await importShared('vue');

const _hoisted_1 = ["args"];
const {ref,watchEffect} = await importShared('vue');
const {DoubleSide,Color,LineCurve3,Vector3} = await importShared('three');

const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "radraB",
  props: {
    radius: { default: 1 },
    maxRadius: { default: 20 },
    color: { default: "#ffff00" },
    opacity: { default: 1 },
    speed: { default: 0.3 },
    height: { default: 100 }
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const MeshRef = ref();
    const uScale = ref(1);
    const shader = {
      transparent: true,
      depthWrite: false,
      side: DoubleSide,
      uniforms: {
        uColor: { value: new Color(props.color) },
        uOpacity: { value: props.opacity },
        uHeight: { value: props.height },
        uScale
      },
      vertexShader: `
    uniform float uScale;
    varying float vY;

    void main() {
      vec3 p = position;
      p.xz *= uScale;
      vY = position.y;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
    }
  `,
      fragmentShader: `
    uniform vec3 uColor;
    uniform float uOpacity;
    uniform float uHeight;
    varying float vY;

    void main() {
      float alpha = (1.0 - vY / uHeight) * uOpacity;
      gl_FragColor = vec4(uColor, alpha);
    }
  `
    };
    watchEffect(() => {
      shader.uniforms.uColor.value.set(props.color);
      shader.uniforms.uOpacity.value = props.opacity;
      shader.uniforms.uHeight.value = props.height;
    });
    const { onBeforeRender } = _l();
    let t = 0;
    onBeforeRender(() => {
      t += 0.02 * props.speed;
      const k = t % 1;
      const r = props.radius + k * (props.maxRadius - props.radius);
      uScale.value = r / props.radius;
    });
    const tubePath = ref(new LineCurve3(
      new Vector3(0, 0, 0),
      new Vector3(0, 10, 0)
    ));
    __expose({ MeshRef });
    return (_ctx, _cache) => {
      return _openBlock(), _createElementBlock("TresMesh", {
        ref_key: "MeshRef",
        ref: MeshRef,
        renderOrder: 2e3
      }, [
        _createElementVNode("TresTubeGeometry", {
          args: [
            tubePath.value,
            20,
            props.radius,
            64,
            false
          ]
        }, null, 8, _hoisted_1),
        _createElementVNode("TresShaderMaterial", _normalizeProps(_guardReactiveProps(shader)), null, 16)
      ], 512);
    };
  }
});

export { _sfc_main$2 as _sfc_main, _sfc_main$1, _sfc_main as _sfc_main$2 };
//# sourceMappingURL=radraB.vue_vue_type_script_setup_true_lang.CkKBJ52L1767105581793.js.map
