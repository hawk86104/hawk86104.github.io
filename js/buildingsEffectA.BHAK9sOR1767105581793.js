import { importShared, _l } from './index.BxB45aCK1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';
import { loadCityFBX, _sfc_main as _sfc_main$3 } from './pagesShow.vue_vue_type_script_setup_true_lang.DfPQrWBQ1767105581793.js';
import { B } from './three-custom-shader-material.es.CWVfv5Xe1767105581793.js';

const {defineComponent:_defineComponent$2} = await importShared('vue');

const {unref:_unref$2,openBlock:_openBlock$2,createElementBlock:_createElementBlock$1} = await importShared('vue');

const _hoisted_1$1 = ["object"];
const {watchEffect: watchEffect$1,watch} = await importShared('vue');

const THREE = await importShared('three');

const _sfc_main$2 = /* @__PURE__ */ _defineComponent$2({
  __name: "bModel",
  props: {
    model: {},
    bulidingsColor: { default: "#e523ff" },
    landColor: { default: "#112233" },
    topColor: { default: "#ffff00" },
    opacity: { default: 0.9 },
    gradient: { type: Boolean, default: true }
  },
  setup(__props) {
    const props = __props;
    const CITY_UNTRIANGULATED = props.model.city;
    props.model.model.children[0].material = new THREE.MeshBasicMaterial({ color: "#ffff00" });
    CITY_UNTRIANGULATED.renderOrder = 1001;
    const LANDMASS = props.model.land;
    const setColorMaterial = (type, param) => {
      let materials;
      {
        materials = Array.isArray(LANDMASS.material) ? LANDMASS.material : [LANDMASS.material];
        materials.forEach((material) => {
          material[param].setStyle(props.landColor);
          material.side = THREE.DoubleSide;
        });
      }
    };
    const setEffectMaterial = () => {
      const { geometry } = CITY_UNTRIANGULATED;
      geometry.computeBoundingBox();
      geometry.computeBoundingSphere();
      const { max, min } = geometry.boundingBox;
      if (CITY_UNTRIANGULATED.material.__csm) {
        return;
      }
      const material = new B({
        baseMaterial: CITY_UNTRIANGULATED.material,
        vertexShader: `
		varying vec4 vPosition;
		void main() {
			vPosition = modelMatrix * vec4(position,1.0);
			csm_Position = position * vec3(1.0);
		}
		`,
        fragmentShader: `
		uniform mat4 modelMatrix;
		varying vec4 vPosition;
		uniform vec3 uMax; 
		uniform vec3 uMin; 
		uniform float uOpacity;  
		uniform float uBorderWidth; 
		uniform vec3 uLightColor;
		uniform vec3 uColor;
		uniform float uCircleTime; 
		uniform float uTime; 
		uniform vec3 uTopColor;					//顶部颜色
		uniform bool uGradient;
		vec4 uMax_world;
		vec4 uMin_world;
		void main() {
			// 转世界坐标
			uMax_world =  modelMatrix * vec4(uMax,1.0);
			uMin_world =  modelMatrix * vec4(uMin,1.0);
			vec3 distColor = uColor;
			float residue = uTime - floor(uTime / uCircleTime) * uCircleTime;
			float rate = residue / uCircleTime;
			float lightOffset = rate * (uMax_world.y - uMin_world.y);

			if (uMin_world.y + lightOffset < vPosition.y && uMin_world.y + lightOffset + uBorderWidth > vPosition.y) {
				csm_DiffuseColor = vec4(uLightColor, uOpacity);
			} else {
				csm_DiffuseColor = vec4(distColor, uOpacity);
			}

			//根据高度计算颜色
			if(uGradient){
				float rateHight = (vPosition.y - uMin_world.y) / (uMax_world.y - uMin_world.y); 
				vec3 outColor = mix(csm_DiffuseColor.xyz, uTopColor, rateHight*2.0);
				csm_DiffuseColor = vec4(outColor, uOpacity);
			}
    }
		`,
        silent: true,
        // Disables the default warning if true
        uniforms: {
          uMax: { value: max },
          uMin: { value: min },
          uBorderWidth: { value: 5 },
          uCircleTime: { value: 5 },
          uColor: {
            value: new THREE.Color(props.bulidingsColor)
          },
          uOpacity: {
            value: props.opacity
          },
          uLightColor: {
            value: new THREE.Color("#ffffff")
          },
          uTopColor: {
            value: new THREE.Color(props.topColor)
          },
          uTime: {
            value: 0
          },
          uGradient: {
            value: props.gradient
          }
        },
        depthWrite: true,
        depthTest: true,
        transparent: true,
        //如果材质透明，那么楼宇就被渲染到后面了
        side: THREE.DoubleSide
        //双面渲染
        // lights: true,
      });
      CITY_UNTRIANGULATED.material.dispose();
      CITY_UNTRIANGULATED.material = material;
    };
    setEffectMaterial();
    const { onBeforeRender } = _l();
    onBeforeRender(({ delta }) => {
      CITY_UNTRIANGULATED.material.uniforms.uTime.value += delta;
    });
    watchEffect$1(() => {
      if (props.bulidingsColor) {
        CITY_UNTRIANGULATED.material.uniforms.uColor.value.setStyle(props.bulidingsColor);
      }
      if (props.landColor) {
        setColorMaterial("land", "color");
      }
      if (props.opacity) {
        CITY_UNTRIANGULATED.material.uniforms.uOpacity.value = props.opacity;
      }
    });
    watch(props, (newValue, oldValue) => {
      CITY_UNTRIANGULATED.material.uniforms.uGradient.value = newValue.gradient;
    });
    const pObject = props.model.model.clone();
    return (_ctx, _cache) => {
      return _openBlock$2(), _createElementBlock$1("primitive", { object: _unref$2(pObject) }, null, 8, _hoisted_1$1);
    };
  }
});

var buildingsEfffectA_default$1="varying vec3 vPosition;\nvoid main(){\n	vPosition=position;\n	vec4 viewPosition=modelViewMatrix*vec4(position,1.);\n	gl_Position=projectionMatrix*viewPosition;\n}";

var buildingsEfffectA_default="uniform float uScale;\nuniform float uGradual;\nuniform float uTime;\nuniform vec3 uColor;\nuniform vec3 uSrcColor;\nvarying vec3 vPosition;\n\nvoid main(){\n	float dis=distance(vPosition.xz,vec2(.0,.0));\n	if(dis>uScale){\n		discard;\n	}\n	float opacity=smoothstep(uScale/uGradual*uTime,uScale*uTime,dis);\n	opacity*=step(dis,uScale*uTime);\n	\n	if(opacity<.3){\n		gl_FragColor=vec4(uSrcColor,1.-opacity);\n	}else{\n		gl_FragColor=vec4(uColor,opacity);\n	}\n	\n}";

const {defineComponent:_defineComponent$1} = await importShared('vue');

const {unref:_unref$1,openBlock:_openBlock$1,createElementBlock:_createElementBlock} = await importShared('vue');

const _hoisted_1 = ["object"];
const {Color,EdgesGeometry,ShaderMaterial,LineSegments} = await importShared('three');
const {watchEffect} = await importShared('vue');

const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "bLine",
  props: {
    builds: {},
    color: { default: "#FFF" },
    srcColor: { default: "#000" },
    scale: { default: 2e3 },
    gradual: { default: 10 },
    speed: { default: 0.5 }
  },
  setup(__props) {
    const props = __props;
    let line = null;
    const shader = {
      transparent: true,
      uniforms: {
        uColor: {
          value: new Color(props.color)
        },
        uSrcColor: {
          value: new Color(props.srcColor)
        },
        uScale: {
          value: props.scale
        },
        uTime: {
          value: 0
        },
        uGradual: {
          value: props.gradual
        }
      },
      vertexShader: buildingsEfffectA_default$1,
      fragmentShader: buildingsEfffectA_default
    };
    let geometry = new EdgesGeometry(props.builds.geometry).clone();
    geometry = geometry.applyMatrix4(props.builds.matrix);
    const surroundLineMaterial = new ShaderMaterial(shader);
    line = new LineSegments(geometry, surroundLineMaterial);
    line.material.linewidth = props.width;
    line.renderOrder = 1e3;
    watchEffect(() => {
      if (props.color) {
        shader.uniforms.uColor.value = new Color(props.color);
      }
      if (props.srcColor) {
        shader.uniforms.uSrcColor.value = new Color(props.srcColor);
      }
      if (props.scale) {
        shader.uniforms.uScale.value = props.scale;
      }
      if (props.gradual) {
        shader.uniforms.uGradual.value = props.gradual;
      }
    });
    const { onBeforeRender } = _l();
    onBeforeRender(({ delta }) => {
      shader.uniforms.uTime.value += delta * props.speed;
      shader.uniforms.uTime.value %= 1;
    });
    return (_ctx, _cache) => {
      return _openBlock$1(), _createElementBlock("primitive", { object: _unref$1(line) }, null, 8, _hoisted_1);
    };
  }
});

const {withAsyncContext:_withAsyncContext,defineComponent:_defineComponent} = await importShared('vue');

const {unref:_unref,createVNode:_createVNode,mergeProps:_mergeProps,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock} = await importShared('vue');

const {reactive} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "buildingsEffectA",
  async setup(__props) {
    let __temp, __restore;
    const CityFBX = ([__temp, __restore] = _withAsyncContext(() => loadCityFBX()), __temp = await __temp, __restore(), __temp);
    const lineState = reactive({
      color: "#FFF",
      srcColor: "#000",
      scale: 2e3,
      gradual: 6.6,
      speed: 0.3
    });
    const paneControl = new Pane({
      title: "效果参数",
      expanded: true
    });
    paneControl.addBinding(lineState, "srcColor", { label: "线原颜色" });
    paneControl.addBinding(lineState, "color", { label: "线扫颜色" });
    paneControl.addBinding(lineState, "speed", {
      label: "速度",
      min: 0.1,
      max: 1,
      step: 0.1
    });
    paneControl.addBinding(lineState, "scale", {
      label: "最大扩散",
      min: 10,
      max: 2e3,
      step: 10
    });
    paneControl.addBinding(lineState, "gradual", {
      label: "扩散系数",
      min: 1.1,
      max: 10,
      step: 0.1
    });
    return (_ctx, _cache) => {
      return _openBlock(), _createBlock(_sfc_main$3, {
        showAxesHelper: false,
        autoRotate: false,
        showBuildings: false
      }, {
        ability: _withCtx(() => [
          _createVNode(_sfc_main$2, {
            model: _unref(CityFBX),
            bulidingsColor: "#000000",
            landColor: "#112233",
            topColor: "#999"
          }, null, 8, ["model"]),
          _createVNode(_sfc_main$1, _mergeProps({
            builds: _unref(CityFBX).city
          }, lineState), null, 16, ["builds"])
        ]),
        _: 1
      });
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=buildingsEffectA.BHAK9sOR1767105581793.js.map
