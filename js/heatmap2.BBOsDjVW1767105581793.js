import { importShared, defineStore, _export_sfc } from './index.BxB45aCK1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';
import { loadCityFBX, _sfc_main as _sfc_main$3, _sfc_main$2 as _sfc_main$4 } from './pagesShow.vue_vue_type_script_setup_true_lang.DfPQrWBQ1767105581793.js';
import { h337 } from './heatmap.EAX66iZz1767105581793.js';
import { resetUV } from './utils.-sNu4bkd1767105581793.js';
import { mergeGeometries } from './BufferGeometryUtils.NxcZsV4J1767105581793.js';
import { computeBoundsTree, disposeBoundsTree, acceleratedRaycast } from './ExtensionUtilities.DzCxl7kb1767105581793.js';

const {MathUtils} = await importShared('three');

// 放工具函数
const max = 36;
const min = -10;
const getData = (heatmap, point) => {
	return heatmap.getValueAt(point) + min
};
const setData = (heatmap, data) => {
	if (!data) {
		let i = 0;
		data = [];
		while (i < 1000) {
			data.push({ x: MathUtils.randInt(1, heatmap._config.width), y: MathUtils.randInt(1, heatmap._config.height), value: MathUtils.randInt(min, max) });
			i++;
		}
	}
	heatmap.setData({
		max: max,
		min: min,
		data
	});
	// heatmap.setDataMin(20)
};
const initHeatmap = (cW = 250, cH = 250, showCanvas = true) => {
	const heatmapCanvas = document.createElement("heatmap-canvas");
	heatmapCanvas.style.position = 'absolute';
	if (!showCanvas) {
		heatmapCanvas.style.display = 'none';
	}
	heatmapCanvas.style.top = '0';
	heatmapCanvas.style.left = '0';
	document.body.appendChild(heatmapCanvas);
	const heatmap = h337.create({
		container: heatmapCanvas,
		width: cW,
		height: cH,
		blur: '.8',
		radius: 10,
		gradient: {
			0.25: "rgb(0,0,255)",
			0.55: "rgb(0,255,0)",
			0.85: "yellow",
			1.0: "rgb(255,0,0)"
		}
	});
	return heatmap
};

const {ref: ref$2} = await importShared('vue');


const useDigitalCityStore = defineStore('buildingsHeatmap', () => {
	const showDiv = ref$2(false);
	const temperature = ref$2(0);
	function setShowDiv (show) {
		showDiv.value = show;
	}
	function setTemperature (v) {
		temperature.value = v;
	}

	return { showDiv, temperature, setShowDiv, setTemperature }
});

const {defineComponent:_defineComponent$1} = await importShared('vue');

const {unref:_unref$2,createElementVNode:_createElementVNode,Fragment:_Fragment$1,openBlock:_openBlock$2,createElementBlock:_createElementBlock$2} = await importShared('vue');

const _hoisted_1 = ["object", "rotation-x"];
const _hoisted_2 = ["object"];
const {watchEffect} = await importShared('vue');

const THREE = await importShared('three');
const _sfc_main$2 = /* @__PURE__ */ _defineComponent$1({
  __name: "buildingsHeatmap",
  props: {
    model: {},
    opacity: { default: 1 }
  },
  setup(__props) {
    const initMeshBvh = () => {
      THREE.BufferGeometry.prototype.computeBoundsTree = computeBoundsTree;
      THREE.BufferGeometry.prototype.disposeBoundsTree = disposeBoundsTree;
      THREE.Mesh.prototype.raycast = acceleratedRaycast;
    };
    initMeshBvh();
    const props = __props;
    const heatmap = initHeatmap();
    setData(heatmap);
    const heatmapTexture = new THREE.Texture(heatmap._renderer.canvas);
    heatmapTexture.needsUpdate = true;
    const creatShaderMaterial = (texture) => {
      return new THREE.ShaderMaterial({
        vertexShader: `
		varying vec2 vUv;
		void main() {
			gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
			vUv = uv;
		}
		`,
        fragmentShader: `
		uniform sampler2D heightMap;
		uniform float uOpacity;
		varying vec2 vUv;
		void main() {
			gl_FragColor = vec4(texture2D(heightMap, vUv.xy).rgb, uOpacity);
    }
		`,
        uniforms: {
          uOpacity: {
            value: props.opacity
          },
          heightMap: {
            type: "t",
            value: texture
          }
        },
        depthWrite: true,
        depthTest: true,
        transparent: true,
        //如果材质透明，那么楼宇就被渲染到后面了
        side: THREE.DoubleSide
        //双面渲染
      });
    };
    const CITY_UNTRIANGULATED = props.model.city.clone();
    delete CITY_UNTRIANGULATED.geometry.attributes.normal;
    delete CITY_UNTRIANGULATED.geometry.attributes.uv;
    const geometry1 = CITY_UNTRIANGULATED.geometry.clone().applyMatrix4(CITY_UNTRIANGULATED.matrix);
    const LANDMASS = props.model.land.clone();
    delete LANDMASS.geometry.attributes.normal;
    const geometry2 = LANDMASS.geometry.clone().applyMatrix4(LANDMASS.matrix);
    const bufferGeometries = mergeGeometries([geometry1, geometry2]);
    bufferGeometries.applyMatrix4(new THREE.Matrix4().makeRotationX(Math.PI / 2));
    resetUV(bufferGeometries);
    bufferGeometries.computeBoundsTree();
    const material = creatShaderMaterial(heatmapTexture);
    const meshObj = new THREE.Mesh(bufferGeometries, material);
    watchEffect(() => {
      if (props.opacity) {
        material.uniforms.uOpacity.value = props.opacity;
      }
    });
    const buildingsHeatmap = useDigitalCityStore();
    const onPointerMove = (ev) => {
      if (ev) {
        const valueUV = { x: ev.uv.x * heatmap._config.width, y: (1 - ev.uv.y) * heatmap._config.height };
        console.log("数值：", ev);
        console.log("数值———：", getData(heatmap, valueUV));
        buildingsHeatmap.setTemperature(getData(heatmap, valueUV));
      }
    };
    const onPointerEnter = (ev) => {
      if (ev) {
        buildingsHeatmap.$patch({ showDiv: true });
      }
    };
    const onPointerLeave = (ev) => {
      if (ev) {
        buildingsHeatmap.setShowDiv(false);
      }
    };
    return (_ctx, _cache) => {
      return _openBlock$2(), _createElementBlock$2(_Fragment$1, null, [
        _createElementVNode("primitive", {
          object: _unref$2(meshObj),
          "rotation-x": -Math.PI / 2,
          onPointermove: onPointerMove,
          onPointerenter: onPointerEnter,
          onPointerleave: onPointerLeave
        }, null, 40, _hoisted_1),
        _createElementVNode("primitive", {
          object: props.model.model.children[0].clone()
        }, null, 8, _hoisted_2)
      ], 64);
    };
  }
});

const {unref:_unref$1,toDisplayString:_toDisplayString,vShow:_vShow,normalizeStyle:_normalizeStyle,withDirectives:_withDirectives,openBlock:_openBlock$1,createElementBlock:_createElementBlock$1} = await importShared('vue');
const {ref: ref$1,onMounted,onUnmounted} = await importShared('vue');


// 创建响应式的鼠标位置对象

const _sfc_main$1 = {
  __name: 'dataDiv',
  setup(__props) {

const buildingsHeatmap = useDigitalCityStore();
const mousePosition = ref$1({ top: 0, left: 0 });
// 更新鼠标位置的函数
function updateMousePosition (event) {
	mousePosition.value.left = event.clientX + 5 + 'px';
	mousePosition.value.top = event.clientY - 20 + 'px';
}
// 组件挂载时添加监听器
onMounted(() => {
	window.addEventListener('mousemove', updateMousePosition);
});

// 组件销毁时移除监听器
onUnmounted(() => {
	window.removeEventListener('mousemove', updateMousePosition);
});

return (_ctx, _cache) => {
  return _withDirectives((_openBlock$1(), _createElementBlock$1("div", {
    class: "title",
    style: _normalizeStyle(mousePosition.value)
  }, "温度：" + _toDisplayString(_unref$1(buildingsHeatmap).temperature) + "℃ ", 5)), [
    [_vShow, _unref$1(buildingsHeatmap).showDiv]
  ])
}
}

};
const dataDiv = /*#__PURE__*/_export_sfc(_sfc_main$1, [['__scopeId',"data-v-fac3e7fd"]]);

const {withAsyncContext:_withAsyncContext,defineComponent:_defineComponent} = await importShared('vue');

const {unref:_unref,mergeProps:_mergeProps,createVNode:_createVNode,withCtx:_withCtx,Fragment:_Fragment,openBlock:_openBlock,createElementBlock:_createElementBlock} = await importShared('vue');

const {reactive,ref} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "heatmap2",
  async setup(__props) {
    let __temp, __restore;
    const showbuildingsLines = ref(false);
    const CityFBX = ([__temp, __restore] = _withAsyncContext(() => loadCityFBX()), __temp = await __temp, __restore(), __temp);
    showbuildingsLines.value = true;
    const buildingsLinesState = reactive({
      width: 1,
      color: "#000",
      opacity: 1,
      show: true
    });
    const buildingState = reactive({
      opacity: 0.9
    });
    const paneControl = new Pane({
      title: "参数",
      expanded: true
    });
    paneControl.addBinding(buildingState, "opacity", {
      label: "透明度",
      min: 0,
      max: 1,
      step: 0.1
    });
    return (_ctx, _cache) => {
      return _openBlock(), _createElementBlock(_Fragment, null, [
        _createVNode(_sfc_main$3, {
          showBuildings: false,
          autoRotate: false
        }, {
          ability: _withCtx(() => [
            _createVNode(_sfc_main$2, _mergeProps({ model: _unref(CityFBX) }, buildingState), null, 16, ["model"]),
            _createVNode(_sfc_main$4, _mergeProps(buildingsLinesState, {
              builds: _unref(CityFBX).city
            }), null, 16, ["builds"])
          ]),
          _: 1
        }),
        _createVNode(dataDiv)
      ], 64);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=heatmap2.BBOsDjVW1767105581793.js.map
