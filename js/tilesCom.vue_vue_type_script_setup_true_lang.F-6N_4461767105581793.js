import { importShared, Fs, _l } from './index.BxB45aCK1767105581793.js';
import { Ai } from './CameraTransitionManager-DhJe9L3A.BTX4e7Mf1767105581793.js';
import { applyTransform, alignmentCenter } from './utils.uRDybWT71767105581793.js';
import { B } from './three-custom-shader-material.es.CWVfv5Xe1767105581793.js';
import { LineMaterial, LineSegmentsGeometry, LineSegments2 } from './LineSegments2.3MkrpAcm1767105581793.js';

var buildingsShaderMaterial_default$1="varying vec3 vPosition;\nvoid main(){\n	\n	vPosition = position;\n	csm_Position=position*vec3(1.);\n}";

var buildingsShaderMaterial_default="varying vec3 vPosition; \nuniform vec3 uMax;      \nuniform vec3 uMin;      \nuniform float uOpacity;\nuniform float uBorderWidth;\nuniform vec3 uLightColor;\nuniform vec3 uColor;\nuniform float uCircleTime;\nuniform float uTime;\nuniform vec3 uTopColor; \nuniform bool uGradient;\n\nvoid main() {\n  vec3 distColor = uColor;\n\n  \n  float residue = mod(uTime, uCircleTime);\n  float rate = residue / uCircleTime;\n  float lightOffset = rate * (uMax.z - uMin.z);\n\n  if (uMin.z + lightOffset < vPosition.z &&\n      uMin.z + lightOffset + uBorderWidth > vPosition.z) {\n    csm_DiffuseColor = vec4(uLightColor, uOpacity);\n  } else {\n    csm_DiffuseColor = vec4(distColor, uOpacity);\n  }\n\n  \n  if (uGradient) {\n    float rateHeight = (vPosition.z - uMin.z) / (uMax.z - uMin.z);\n    float mixNumber = clamp(rateHeight * 2.3 - 1.5, 0.1, 1.);\n    vec3 outColor = mix(csm_DiffuseColor.xyz, uTopColor, mixNumber);\n    csm_DiffuseColor = vec4(outColor, uOpacity);\n  }\n}";

const {defineComponent:_defineComponent} = await importShared('vue');

const {unref:_unref,createElementVNode:_createElementVNode,openBlock:_openBlock,createElementBlock:_createElementBlock} = await importShared('vue');

const _hoisted_1 = ["rotation-x"];
const _hoisted_2 = ["object"];
const {watch} = await importShared('vue');
const THREE = await importShared('three');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "tilesCom",
  props: {
    tilesUrl: { default: "./plugins/geokit/tiles/tileset.json" },
    isRotation: { type: Boolean, default: true },
    isRranslation: { type: Boolean, default: true },
    bulidingsColor: { default: "#e523ff" },
    topColor: { default: "#ffff00" },
    lightColor: { default: "#ffffff" },
    borderWidth: { default: 5 },
    opacity: { default: 0.8 },
    gradient: { type: Boolean, default: true },
    speed: { default: 1 },
    lineOpacity: { default: 1 },
    linewidth: { default: 1 },
    lineColor: { default: "#000000" }
  },
  setup(__props) {
    const props = __props;
    const timeDelta = { value: 0 };
    const setEffectMaterial = (mesh) => {
      mesh.userData.builds = true;
      const { geometry } = mesh;
      geometry.computeBoundingBox();
      geometry.computeBoundingSphere();
      const { max, min } = geometry.boundingBox;
      const buildingMaterial = new B({
        baseMaterial: new THREE.MeshPhongMaterial(),
        vertexShader: buildingsShaderMaterial_default$1,
        fragmentShader: buildingsShaderMaterial_default,
        silent: true,
        uniforms: {
          uMax: { value: max },
          uMin: { value: min },
          uBorderWidth: { value: props.borderWidth },
          uCircleTime: { value: 5 },
          uColor: {
            value: new THREE.Color(props.bulidingsColor)
          },
          uOpacity: {
            value: props.opacity
          },
          uLightColor: {
            value: new THREE.Color(props.lightColor)
          },
          uTopColor: {
            value: new THREE.Color(props.topColor)
          },
          uTime: timeDelta,
          uGradient: {
            value: props.gradient
          }
        },
        depthWrite: true,
        depthTest: true,
        transparent: true,
        side: THREE.DoubleSide
      });
      mesh.material.dispose();
      mesh.material = buildingMaterial;
    };
    const edgesMaterial = new LineMaterial({
      color: props.lineColor,
      linewidth: props.linewidth,
      opacity: props.lineOpacity,
      transparent: true,
      depthWrite: false,
      depthTest: true
    });
    edgesMaterial.resolution.set(window.innerWidth, window.innerHeight);
    const setEdgesLines = (mesh) => {
      const edges = new THREE.EdgesGeometry(mesh.geometry.clone());
      let geometry = new LineSegmentsGeometry();
      let wideEdges = geometry.fromEdgesGeometry(edges);
      const line = new LineSegments2(wideEdges, edgesMaterial);
      line.userData.lines = true;
      line.applyMatrix4(mesh.matrix.clone());
      mesh.parent.add(line);
    };
    const onLoadModel = ({ scene }) => {
      scene.traverse((c) => {
        if (c.isMesh && c.material) {
          setEffectMaterial(c);
          setEdgesLines(c);
        }
      });
    };
    const { camera, renderer, sizes } = Fs();
    const setCameraAndRenderer = (newTiles, camera2, renderer2) => {
      newTiles.setCamera(camera2);
      newTiles.setResolutionFromRenderer(camera2, renderer2);
    };
    const makeNewTiles = () => {
      let newTiles = new Ai(props.tilesUrl);
      newTiles.fetchOptions.mode = "cors";
      newTiles.errorTarget = 12;
      newTiles.addEventListener("load-model", onLoadModel);
      newTiles.addEventListener("load-tile-set", () => {
        alignmentCenter(newTiles, props.isRotation, props.isRranslation);
      });
      newTiles.addEventListener("dispose-model", ({ scene }) => {
        scene.traverse((c) => {
          if (c.material) {
            c.material.dispose();
          }
          if (c.userData && c.userData.lines) {
            c.geometry.dispose();
            c.material.dispose();
          }
        });
      });
      setCameraAndRenderer(newTiles, camera.value, renderer);
      return newTiles;
    };
    let tiles = makeNewTiles();
    watch(
      camera,
      () => {
        if (camera.value) {
          setCameraAndRenderer(tiles, camera.value, renderer);
        }
      },
      { immediate: true }
    );
    const { onBeforeRender } = _l();
    onBeforeRender(({ delta }) => {
      if (camera.value && sizes.width.value && tiles.update) {
        camera.value.updateMatrixWorld();
        tiles.update();
        timeDelta.value += delta * props.speed;
      }
    });
    watch(
      () => [props.bulidingsColor, props.topColor, props.lightColor, props.borderWidth, props.opacity, props.gradient],
      ([bulidingsColor, topColor, lightColor, borderWidth, opacity]) => {
        tiles.group.traverse((mesh) => {
          if (mesh.isMesh && mesh.userData && mesh.userData.builds) {
            mesh.material.uniforms.uColor.value.set(bulidingsColor);
            mesh.material.uniforms.uTopColor.value.set(topColor);
            mesh.material.uniforms.uLightColor.value.set(lightColor);
            mesh.material.uniforms.uBorderWidth.value = borderWidth;
            mesh.material.uniforms.uOpacity.value = opacity;
            mesh.material.uniforms.uGradient.value = props.gradient;
            mesh.material.needsUpdate = true;
          }
        });
      }
    );
    watch(
      () => [props.lineColor, props.linewidth, props.lineOpacity],
      ([lineColor, linewidth, lineOpacity]) => {
        edgesMaterial.color.set(lineColor);
        edgesMaterial.linewidth = linewidth;
        edgesMaterial.opacity = lineOpacity;
        edgesMaterial.needsUpdate = true;
      }
    );
    watch(
      () => props.tilesUrl,
      (tilesUrl) => {
        if (tilesUrl !== tiles.rootURL) {
          tiles.dispose();
          tiles = makeNewTiles();
        }
      }
    );
    watch(
      () => [props.isRotation, props.isRranslation],
      () => {
        if (tiles.group) {
          applyTransform(tiles.group, props.isRotation, props.isRranslation);
        }
      }
    );
    return (_ctx, _cache) => {
      return _openBlock(), _createElementBlock("TresGroup", {
        "rotation-x": _ctx.isRotation ? -Math.PI / 2 : 0
      }, [
        _createElementVNode("primitive", {
          object: _unref(tiles).group
        }, null, 8, _hoisted_2)
      ], 8, _hoisted_1);
    };
  }
});

export { _sfc_main, buildingsShaderMaterial_default, buildingsShaderMaterial_default$1 };
//# sourceMappingURL=tilesCom.vue_vue_type_script_setup_true_lang.F-6N_4461767105581793.js.map
