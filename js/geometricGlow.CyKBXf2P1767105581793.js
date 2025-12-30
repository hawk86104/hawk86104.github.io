import { importShared, Kk } from './index.BxB45aCK1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';

/*
 * @Description:
 * @Version: 1.668
 * @Autor: 地虎降天龙
 * @Date: 2024-12-13 14:35:16
 * @LastEditors: 地虎降天龙
 * @LastEditTime: 2024-12-13 14:35:19
 */
/**
 * Dilate or erode a geometry inplace
 * @param  {THREE.BufferGeometry} geometry - Geometry to dilate
 * @param  {Number} length - Scale factor (positive to dilate, negative to erode)
 */
function dilateBufferGeometry(geometry, length) {
    if (!geometry.isBufferGeometry) {
        console.error('The geometry must be a BufferGeometry.');
        return
    }

    // Ensure the geometry has normals
    if (!geometry.attributes.normal) {
        geometry.computeVertexNormals();
    }

    // Get positions and normals
    const position = geometry.attributes.position;
    const normal = geometry.attributes.normal;

    const posArray = position.array;
    const normalArray = normal.array;

    // Iterate over each vertex
    for (let i = 0; i < position.count; i++) {
        const i3 = i * 3;

        // Modify the position by the normal scaled by length
        posArray[i3] += normalArray[i3] * length; // x
        posArray[i3 + 1] += normalArray[i3 + 1] * length; // y
        posArray[i3 + 2] += normalArray[i3 + 2] * length; // z
    }

    // Notify Three.js that the position has been updated
    position.needsUpdate = true;
}

var geometricGlow_default$1="varying vec3 vVertexWorldPosition;\nvarying vec3 vVertexNormal;\nvarying vec4 vFragColor;\nvoid main() {\n  vVertexNormal = normalize(normalMatrix * normal);\n  vVertexWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}";

var geometricGlow_default="uniform vec3 glowColor;\nuniform float coeficient;\nuniform float power;\nvarying vec3 vVertexNormal;\nvarying vec3 vVertexWorldPosition;\nvarying vec4 vFragColor;\nvoid main() {\n  vec3 worldCameraToVertex = vVertexWorldPosition - cameraPosition;\n  vec3 viewCameraToVertex = (viewMatrix * vec4(worldCameraToVertex, 0.0)).xyz;\n  viewCameraToVertex = normalize(viewCameraToVertex);\n  float intensity =\n      pow(coeficient + dot(vVertexNormal, viewCameraToVertex), power);\n  gl_FragColor = vec4(glowColor, intensity);\n}";

const {defineComponent:_defineComponent$1} = await importShared('vue');

const {unref:_unref$1,mergeProps:_mergeProps$1,createElementVNode:_createElementVNode$1,openBlock:_openBlock$1,createElementBlock:_createElementBlock} = await importShared('vue');

const _hoisted_1$1 = ["geometry"];
const _hoisted_2$1 = ["blending", "side"];
const _hoisted_3$1 = ["geometry"];
const _hoisted_4$1 = ["blending", "side"];
const {watch} = await importShared('vue');

const THREE$1 = await importShared('three');
const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "geometricGlowMesh",
  props: {
    geometry: Object,
    inColor: {
      default: "hotpink"
    },
    outColor: {
      default: "hotpink"
    },
    inPower: {
      default: 1.4
    },
    outPower: {
      default: 1.2
    },
    inCoeficient: {
      default: 1.1
    },
    outCoeficient: {
      default: 0.1
    }
  },
  setup(__props) {
    const props = __props;
    const erodedGeometry = props.geometry.clone();
    dilateBufferGeometry(erodedGeometry, 0.01);
    const dilatedGeometry = props.geometry.clone();
    dilateBufferGeometry(dilatedGeometry, 0.2);
    const inMaterialConfig = {
      uniforms: {
        coeficient: { value: props.inCoeficient },
        power: { value: props.inPower },
        glowColor: { value: new THREE$1.Color(props.inColor) },
        viewVector: { value: new THREE$1.Vector3(0, 0, 1) }
      },
      vertexShader: geometricGlow_default$1,
      fragmentShader: geometricGlow_default
    };
    const outMaterialConfig = {
      uniforms: {
        coeficient: { value: props.outCoeficient },
        power: { value: props.outPower },
        glowColor: { value: new THREE$1.Color(props.outColor) },
        viewVector: { value: new THREE$1.Vector3(0, 0, 1) }
      },
      vertexShader: geometricGlow_default$1,
      fragmentShader: geometricGlow_default
    };
    watch(
      () => [props.inColor, props.outColor],
      ([inColor, outColor]) => {
        inMaterialConfig.uniforms.glowColor.value.set(inColor);
        outMaterialConfig.uniforms.glowColor.value.set(outColor);
      }
    );
    watch(
      () => [props.inPower, props.outPower, props.inCoeficient, props.outCoeficient],
      ([inPower, outPower, inCoeficient, outCoeficient]) => {
        inMaterialConfig.uniforms.power.value = inPower;
        outMaterialConfig.uniforms.power.value = outPower;
        inMaterialConfig.uniforms.coeficient.value = inCoeficient;
        outMaterialConfig.uniforms.coeficient.value = outCoeficient;
      }
    );
    return (_ctx, _cache) => {
      return _openBlock$1(), _createElementBlock("TresGroup", null, [
        _createElementVNode$1("TresMesh", { geometry: _unref$1(erodedGeometry) }, [
          _createElementVNode$1("TresShaderMaterial", _mergeProps$1(inMaterialConfig, {
            blending: THREE$1.AdditiveBlending,
            transparent: "",
            depthWrite: false,
            side: THREE$1.FontSide
          }), null, 16, _hoisted_2$1)
        ], 8, _hoisted_1$1),
        _createElementVNode$1("TresMesh", {
          geometry: _unref$1(dilatedGeometry),
          visible: true
        }, [
          _createElementVNode$1("TresShaderMaterial", _mergeProps$1(outMaterialConfig, {
            blending: THREE$1.AdditiveBlending,
            transparent: "",
            depthWrite: false,
            side: THREE$1.BackSide
          }), null, 16, _hoisted_4$1)
        ], 8, _hoisted_3$1)
      ]);
    };
  }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,createVNode:_createVNode,mergeProps:_mergeProps,resolveComponent:_resolveComponent,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock} = await importShared('vue');

const _hoisted_1 = ["geometry"];
const _hoisted_2 = ["geometry"];
const _hoisted_3 = ["geometry"];
const _hoisted_4 = ["geometry"];
const _hoisted_5 = ["geometry"];
const {reactive} = await importShared('vue');

const THREE = await importShared('three');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "geometricGlow",
  setup(__props) {
    const geometry = new THREE.TorusKnotGeometry(0.75, 0.25, 64);
    const erodedGeometry = geometry.clone();
    dilateBufferGeometry(erodedGeometry, -0.1);
    const dilatedGeometry = geometry.clone();
    dilateBufferGeometry(dilatedGeometry, 0.1);
    const geometricGlowState = reactive({
      inColor: "#0078ff",
      outColor: "#ff00ba",
      inPower: 1.4,
      outPower: 1.2,
      inCoeficient: 1.1,
      outCoeficient: 0.1
    });
    const pane = new Pane();
    pane.addBinding(geometricGlowState, "inColor", { label: "内发光色" });
    pane.addBinding(geometricGlowState, "inPower", { label: "内发光强度", step: 0.01, min: 0, max: 4 });
    pane.addBinding(geometricGlowState, "inCoeficient", { step: 0.01, min: 0, max: 4 });
    pane.addBinding(geometricGlowState, "outColor", { label: "外发光色" });
    pane.addBinding(geometricGlowState, "outPower", { label: "外发光强度", step: 0.01, min: 0, max: 6 });
    pane.addBinding(geometricGlowState, "outCoeficient", { step: 0.01, min: 0, max: 4 });
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createBlock(_component_TresCanvas, {
        "window-size": "",
        clearColor: "#333333"
      }, {
        default: _withCtx(() => [
          _cache[5] || (_cache[5] = _createElementVNode("TresPerspectiveCamera", { position: [5, 5, 5] }, null, -1)),
          _createVNode(_unref(Kk)),
          _createElementVNode("TresMesh", {
            position: [0, 1, -4],
            geometry: _unref(geometry)
          }, [
            _cache[1] || (_cache[1] = _createElementVNode("TresMeshNormalMaterial", {
              transparent: "",
              opacity: 0.8
            }, null, -1)),
            _createElementVNode("TresMesh", { geometry: _unref(erodedGeometry) }, [..._cache[0] || (_cache[0] = [
              _createElementVNode("TresMeshBasicMaterial", {
                wireframe: "",
                color: "#000"
              }, null, -1)
            ])], 8, _hoisted_2)
          ], 8, _hoisted_1),
          _createElementVNode("TresMesh", {
            position: [0, 1, 4],
            geometry: _unref(geometry)
          }, [
            _cache[3] || (_cache[3] = _createElementVNode("TresMeshNormalMaterial", {
              transparent: "",
              opacity: 0.9
            }, null, -1)),
            _createElementVNode("TresMesh", { geometry: _unref(dilatedGeometry) }, [..._cache[2] || (_cache[2] = [
              _createElementVNode("TresMeshBasicMaterial", {
                wireframe: "",
                color: "#000"
              }, null, -1)
            ])], 8, _hoisted_4)
          ], 8, _hoisted_3),
          _createElementVNode("TresMesh", {
            position: [0, 1, 0],
            geometry: _unref(geometry),
            renderOrder: 1
          }, [
            _cache[4] || (_cache[4] = _createElementVNode("TresMeshBasicMaterial", { color: "gray" }, null, -1)),
            _createVNode(_sfc_main$1, _mergeProps({ geometry: _unref(geometry) }, geometricGlowState), null, 16, ["geometry"])
          ], 8, _hoisted_5),
          _cache[6] || (_cache[6] = _createElementVNode("TresGridHelper", { args: [10, 10] }, null, -1))
        ]),
        _: 1
      });
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=geometricGlow.CyKBXf2P1767105581793.js.map
