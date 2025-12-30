import { importShared } from './index.BxB45aCK1767105581793.js';
import { shaderMaterial } from './shaderMaterial.BXDL7cvO1767105581793.js';

const THREE$1 = await importShared('three');

/** Based on
    https://github.com/Fyrestar/THREE.InfiniteGridHelper by https://github.com/Fyrestar
    and https://github.com/threlte/threlte/blob/main/packages/extras/src/lib/components/Grid/Grid.svelte
    by https://github.com/grischaerbe and https://github.com/jerzakm
*/

const GridMaterial = shaderMaterial({
  cellSize: 0.5,
  sectionSize: 1,
  fadeDistance: 100,
  fadeStrength: 1,
  cellThickness: 0.5,
  sectionThickness: 1,
  cellColor: new THREE$1.Color(),
  sectionColor: new THREE$1.Color(),
  infiniteGrid: false,
  followCamera: false,
  worldCamProjPosition: new THREE$1.Vector3(),
  worldPlanePosition: new THREE$1.Vector3()
}, /* glsl */`
      varying vec3 localPosition;
      varying vec4 worldPosition;
  
      uniform vec3 worldCamProjPosition;
      uniform vec3 worldPlanePosition;
      uniform float fadeDistance;
      uniform bool infiniteGrid;
      uniform bool followCamera;
  
      void main() {
        localPosition = position.xzy;
        if (infiniteGrid) localPosition *= 1.0 + fadeDistance;
        
        worldPosition = modelMatrix * vec4(localPosition, 1.0);
        if (followCamera) {
          worldPosition.xyz += (worldCamProjPosition - worldPlanePosition);
          localPosition = (inverse(modelMatrix) * worldPosition).xyz;
        }
  
        gl_Position = projectionMatrix * viewMatrix * worldPosition;
      }
    `, /* glsl */`
      varying vec3 localPosition;
      varying vec4 worldPosition;
  
      uniform vec3 worldCamProjPosition;
      uniform float cellSize;
      uniform float sectionSize;
      uniform vec3 cellColor;
      uniform vec3 sectionColor;
      uniform float fadeDistance;
      uniform float fadeStrength;
      uniform float cellThickness;
      uniform float sectionThickness;
  
      float getGrid(float size, float thickness) {
        vec2 r = localPosition.xz / size;
        vec2 grid = abs(fract(r - 0.5) - 0.5) / fwidth(r);
        float line = min(grid.x, grid.y) + 1.0 - thickness;
        return 1.0 - min(line, 1.0);
      }
  
      void main() {
        float g1 = getGrid(cellSize, cellThickness);
        float g2 = getGrid(sectionSize, sectionThickness);
  
        float dist = distance(worldCamProjPosition, worldPosition.xyz);
        float d = 1.0 - min(dist / fadeDistance, 1.0);
        vec3 color = mix(cellColor, sectionColor, min(1.0, sectionThickness * g2));
  
        gl_FragColor = vec4(color, (g1 + g2) * pow(d, fadeStrength));
        gl_FragColor.a = mix(0.75 * gl_FragColor.a, gl_FragColor.a, g2);
        if (gl_FragColor.a <= 0.0) discard;
  
        #include <tonemapping_fragment>
        #include <${parseInt(THREE$1.REVISION.replace(/\D+/g, '')) >= 154 ? 'colorspace_fragment' : 'encodings_fragment'}>
      }
    `);
const Grid = ({
  args = [1, 1],
  cellColor = new THREE$1.Color('#000000'),
  sectionColor = new THREE$1.Color('#2080ff'),
  cellSize = 0.5,
  sectionSize = 1,
  followCamera = false,
  infiniteGrid = false,
  fadeDistance = 100,
  fadeStrength = 1,
  cellThickness = 0.5,
  sectionThickness = 1,
  side = THREE$1.BackSide
} = {}) => {
  const uniforms1 = {
    cellSize,
    sectionSize,
    cellColor,
    sectionColor,
    cellThickness,
    sectionThickness
  };
  const uniforms2 = {
    fadeDistance,
    fadeStrength,
    infiniteGrid,
    followCamera
  };
  const gridMaterial = new GridMaterial({
    transparent: true,
    side,
    ...uniforms1,
    ...uniforms2
  });
  const planeGeometry = new THREE$1.PlaneGeometry(args[0], args[1]);
  const mesh = new THREE$1.Mesh(planeGeometry, gridMaterial);
  mesh.frustumCulled = false;
  const plane = new THREE$1.Plane();
  const upVector = new THREE$1.Vector3(0, 1, 0);
  const zeroVector = new THREE$1.Vector3(0, 0, 0);
  const update = camera => {
    if (!mesh.parent) return;
    plane.setFromNormalAndCoplanarPoint(upVector, zeroVector).applyMatrix4(mesh.matrixWorld);
    const gridMaterial = mesh.material;
    const worldCamProjPosition = gridMaterial.uniforms.worldCamProjPosition;
    const worldPlanePosition = gridMaterial.uniforms.worldPlanePosition;
    plane.projectPoint(camera.position, worldCamProjPosition.value);
    worldPlanePosition.value.set(0, 0, 0).applyMatrix4(mesh.matrixWorld);
  };
  return {
    mesh,
    update
  };
};

const {defineComponent:_defineComponent} = await importShared('vue');

const {unref:_unref,openBlock:_openBlock,createElementBlock:_createElementBlock} = await importShared('vue');

const _hoisted_1 = ["object"];
const THREE = await importShared('three');

const {watchEffect} = await importShared('vue');

const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "gridPlusCom",
  props: {
    args: { default: [10, 10] },
    cellColor: { default: "#6f6f6f" },
    cellSize: { default: 0.6 },
    cellThickness: { default: 1 },
    sectionColor: { default: "#9d4b4b" },
    sectionSize: { default: 3.3 },
    sectionThickness: { default: 1.5 },
    fadeDistance: { default: 25 },
    fadeStrength: { default: 1 },
    followCamera: { type: Boolean, default: false },
    infiniteGrid: { type: Boolean, default: true }
  },
  setup(__props) {
    const props = __props;
    const grid = Grid({
      args: props.args,
      cellSize: props.cellSize,
      cellThickness: props.cellThickness,
      cellColor: new THREE.Color(props.cellColor),
      sectionSize: props.sectionSize,
      sectionThickness: props.sectionThickness,
      sectionColor: new THREE.Color(props.sectionColor),
      fadeDistance: props.fadeDistance,
      fadeStrength: props.fadeStrength,
      followCamera: props.followCamera,
      infiniteGrid: props.infiniteGrid
    });
    watchEffect(() => {
      const mate = grid.mesh.material;
      mate.cellSize = props.cellSize;
      mate.cellThickness = props.cellThickness;
      mate.cellColor.set(props.cellColor);
      mate.sectionColor.set(props.sectionColor);
      mate.sectionSize = props.sectionSize;
      mate.sectionThickness = props.sectionThickness;
      mate.fadeDistance = props.fadeDistance;
      mate.fadeStrength = props.fadeStrength;
      mate.followCamera = props.followCamera;
      mate.infiniteGrid = props.infiniteGrid;
    });
    return (_ctx, _cache) => {
      return _openBlock(), _createElementBlock("primitive", {
        object: _unref(grid).mesh
      }, null, 8, _hoisted_1);
    };
  }
});

export { _sfc_main };
//# sourceMappingURL=gridPlusCom.vue_vue_type_script_setup_true_lang.BIqyIrzr1767105581793.js.map
