import { importShared, Fs, _l } from './index.BxB45aCK1767105581793.js';
import { Ai } from './CameraTransitionManager-DhJe9L3A.BTX4e7Mf1767105581793.js';
import { B } from './three-custom-shader-material.es.CWVfv5Xe1767105581793.js';
import { buildingsShaderMaterial_default, buildingsShaderMaterial_default$1 } from './tilesCom.vue_vue_type_script_setup_true_lang.F-6N_4461767105581793.js';
import { LineSegmentsGeometry, LineMaterial, LineSegments2 } from './LineSegments2.3MkrpAcm1767105581793.js';
import { OrbitControls } from './OrbitControls.zXZoX3Ge1767105581793.js';
import { UTM, PlaneProvider, MapProvider, TerrainMeshProvider, Map } from './TerrainMeshProvider.DWdowYX-1767105581793.js';

const THREE$2 = await importShared('three');

const rotationBetweenDirections = (dir1, dir2) => {
  const rotation = new THREE$2.Quaternion();
  const a = new THREE$2.Vector3().crossVectors(dir1, dir2);
  rotation.x = a.x;
  rotation.y = a.y;
  rotation.z = a.z;
  rotation.w = 1 + dir1.clone().dot(dir2);
  rotation.normalize();
  return rotation;
};
const onLoadTileSetForCesium3Dtitles = (tiles) => {
  tiles.onLoadTileSet = (tileSet1) => {
    const box = new THREE$2.Box3();
    const sphere = new THREE$2.Sphere();
    const matrix = new THREE$2.Matrix4();
    let position = null;
    let distanceToEllipsoidCenter = 0;
    if (tiles.getOrientedBounds(box, matrix)) {
      position = new THREE$2.Vector3().setFromMatrixPosition(matrix);
      distanceToEllipsoidCenter = position.length();
    } else if (tiles.getBoundingSphere(sphere)) {
      position = sphere.center.clone();
      distanceToEllipsoidCenter = position.length();
    }
    const surfaceDirection = position?.normalize();
    const up = new THREE$2.Vector3(0, 1, 0);
    const rotationToNorthPole = rotationBetweenDirections(surfaceDirection, up);
    tiles.group.quaternion.x = rotationToNorthPole.x;
    tiles.group.quaternion.y = rotationToNorthPole.y;
    tiles.group.quaternion.z = rotationToNorthPole.z;
    tiles.group.quaternion.w = rotationToNorthPole.w;
    tiles.group.position.z = -distanceToEllipsoidCenter;
  };
};

const {defineComponent:_defineComponent$1} = await importShared('vue');

const {unref:_unref$1,createElementVNode:_createElementVNode,openBlock:_openBlock$1,createElementBlock:_createElementBlock$1} = await importShared('vue');

const _hoisted_1$1 = ["object", "rotation"];
const {watchEffect: watchEffect$1,ref} = await importShared('vue');
const THREE$1 = await importShared('three');
const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "tilesBuildings",
  props: {
    bulidingsColor: { default: "#e523ff" },
    topColor: { default: "#ffff00" },
    opacity: { default: 0.8 },
    gradient: { type: Boolean, default: true },
    camera: {}
  },
  setup(__props) {
    const props = __props;
    const timeDelta = ref(0);
    const setEffectMaterial = (mesh) => {
      const { geometry } = mesh;
      geometry.computeBoundingBox();
      geometry.computeBoundingSphere();
      const { max, min } = geometry.boundingBox;
      const material = new B({
        baseMaterial: new THREE$1.MeshPhongMaterial(),
        //mesh.material,
        vertexShader: buildingsShaderMaterial_default$1,
        fragmentShader: buildingsShaderMaterial_default,
        silent: true,
        // wireframe: true,
        uniforms: {
          uMax: { value: max },
          uMin: { value: min },
          uBorderWidth: { value: 5 },
          uCircleTime: { value: 5 },
          uColor: {
            value: new THREE$1.Color(props.bulidingsColor)
          },
          uOpacity: {
            value: props.opacity
          },
          uLightColor: {
            value: new THREE$1.Color("#ffffff")
          },
          uTopColor: {
            value: new THREE$1.Color(props.topColor)
          },
          uTime: timeDelta,
          uGradient: {
            value: props.gradient
          }
        },
        depthWrite: true,
        depthTest: true,
        transparent: true,
        //如果材质透明，那么楼宇就被渲染到后面了
        side: THREE$1.DoubleSide
        //双面渲染
      });
      mesh.material.dispose();
      mesh.material = material;
    };
    const tiles = new Ai("https://jdvop.oss-cn-qingdao.aliyuncs.com/mapv-data/titleset/sz_ns/no.json");
    tiles.errorTarget = 2;
    tiles.addEventListener("load-model", ({ scene }) => {
      scene.traverse((c) => {
        if (c.isMesh) {
          setEffectMaterial(c);
          c.receiveShadow = false;
          c.castShadow = false;
          const edges = new THREE$1.EdgesGeometry(c.geometry.clone());
          let geometry = new LineSegmentsGeometry();
          let wideEdges = geometry.fromEdgesGeometry(edges);
          let edgesmaterial = new LineMaterial({
            color: 0,
            linewidth: 1,
            opacity: 1,
            transparent: true,
            depthWrite: true,
            depthTest: true
          });
          edgesmaterial.resolution.set(window.innerWidth, window.innerHeight);
          const line = new LineSegments2(wideEdges, edgesmaterial);
          line.applyMatrix4(c.matrix.clone());
          c.parent.add(line);
        }
      });
      const box = new THREE$1.Box3();
      const sphere = new THREE$1.Sphere();
      if (tiles.getBoundingBox(box)) {
        box.getCenter(tiles.group.position);
        tiles.group.position.multiplyScalar(-1);
      } else if (tiles.getBoundingSphere(sphere)) {
        tiles.group.position.copy(sphere.center);
        tiles.group.position.multiplyScalar(-1);
      }
    });
    onLoadTileSetForCesium3Dtitles(tiles);
    const { renderer, sizes } = Fs();
    watchEffect$1(() => {
      if (sizes.width.value) {
        tiles.setCamera(props.camera);
        tiles.setResolutionFromRenderer(props.camera, renderer);
      }
    });
    const { onBeforeRender } = _l();
    onBeforeRender(({ delta }) => {
      timeDelta.value += delta * 2;
      if (props.camera && sizes.width.value) {
        props.camera.updateMatrixWorld();
        tiles.update();
      }
    });
    return (_ctx, _cache) => {
      return _openBlock$1(), _createElementBlock$1("TresGroup", null, [
        _createElementVNode("primitive", {
          object: _unref$1(tiles).group,
          rotation: [-Math.PI / 2, 0, 0]
        }, null, 8, _hoisted_1$1)
      ]);
    };
  }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {unref:_unref,openBlock:_openBlock,createElementBlock:_createElementBlock} = await importShared('vue');

const _hoisted_1 = ["object", "rotation"];
const THREE = await importShared('three');
const {watchEffect} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "tileMapBuildingsMesh",
  props: {
    bbox: { default: [104.955976, 20.149765, 120.998419, 30.528687] },
    maxZoom: { default: 20 },
    mapCenter: {},
    camera: {}
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const { renderer, scene } = Fs();
    const planProvider = new PlaneProvider();
    planProvider.coordType = UTM;
    const mapProvider = new MapProvider();
    mapProvider.source = "https://webrd04.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=7&x={x}&y={y}&z={z}";
    mapProvider.showTileNo = false;
    mapProvider.useWorker = true;
    const meshProvider = new TerrainMeshProvider(planProvider, mapProvider);
    meshProvider.showBoundingBox = false;
    meshProvider.wireframe = false;
    meshProvider.flatShading = false;
    meshProvider.filter = {
      opposite: true,
      genBright: 1.3,
      genContrast: 1,
      genSaturation: 1
    };
    let color = new THREE.Color("#4688b5");
    meshProvider.filter.monochrome = {
      r: color.r,
      g: color.g,
      b: color.b
    };
    const map = new Map();
    map.provider = meshProvider;
    map.bbox = props.bbox;
    map.maxZoom = props.maxZoom;
    props.camera.up = new THREE.Vector3(0, 1, 0);
    props.camera.position.set(props.mapCenter[0], props.mapCenter[2], -props.mapCenter[1] + 2e3);
    props.camera.lookAt(new THREE.Vector3(props.camera.position.x, 0, props.camera.position.z - 3e3));
    map.camera = props.camera;
    let orbitControl = null;
    watchEffect(() => {
      if (renderer) {
        orbitControl = new OrbitControls(props.camera, renderer.domElement);
        orbitControl.enableDamping = true;
        orbitControl.dampingFactor = 0.05;
        orbitControl.minDistance = 600;
        orbitControl.position0.set(props.camera.position.x, props.camera.position.y, props.camera.position.z);
        orbitControl.target.set(props.camera.position.x, 0, props.camera.position.z - 2e3);
      }
    });
    const { onBeforeRender } = _l();
    onBeforeRender(() => {
      if (renderer) {
        const far = Math.abs(props.camera.position.y) * 50;
        props.camera.far = far + 5e3;
        props.camera.updateProjectionMatrix();
        if (orbitControl) {
          orbitControl.update();
          orbitControl.target.y = 0;
        }
        map.update();
        renderer.render(scene.value, props.camera);
      }
    });
    __expose({
      camera: props.camera,
      map
    });
    return (_ctx, _cache) => {
      return _openBlock(), _createElementBlock("primitive", {
        object: _unref(map),
        rotation: [-Math.PI / 2, 0, 0]
      }, null, 8, _hoisted_1);
    };
  }
});

export { _sfc_main$1 as _sfc_main, _sfc_main as _sfc_main$1 };
//# sourceMappingURL=tileMapBuildingsMesh.vue_vue_type_script_setup_true_lang.BAhJ7QKa1767105581793.js.map
