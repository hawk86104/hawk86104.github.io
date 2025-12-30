import { importShared, zr, Kk } from './index.BxB45aCK1767105581793.js';
import { FontLoader } from './FontLoader.AwXSnrPF1767105581793.js';

const {ExtrudeGeometry} = await importShared('three');


/**
 * A class for generating text as a single geometry. It is constructed by providing a string of text, and a set of
 * parameters consisting of a loaded font and extrude settings.
 *
 * See the {@link FontLoader} page for additional details.
 *
 * `TextGeometry` uses [typeface.json]{@link http://gero3.github.io/facetype.js/} generated fonts.
 * Some existing fonts can be found located in `/examples/fonts`.
 *
 * ```js
 * const loader = new FontLoader();
 * const font = await loader.loadAsync( 'fonts/helvetiker_regular.typeface.json' );
 * const geometry = new TextGeometry( 'Hello three.js!', {
 * 	font: font,
 * 	size: 80,
 * 	depth: 5,
 * 	curveSegments: 12
 * } );
 * ```
 *
 * @augments ExtrudeGeometry
 * @three_import import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
 */
class TextGeometry extends ExtrudeGeometry {

	/**
	 * Constructs a new text geometry.
	 *
	 * @param {string} text - The text that should be transformed into a geometry.
	 * @param {TextGeometry~Options} [parameters] - The text settings.
	 */
	constructor( text, parameters = {} ) {

		const font = parameters.font;

		if ( font === undefined ) {

			super(); // generate default extrude geometry

		} else {

			const shapes = font.generateShapes( text, parameters.size );

			// defaults

			if ( parameters.depth === undefined ) parameters.depth = 50;
			if ( parameters.bevelThickness === undefined ) parameters.bevelThickness = 10;
			if ( parameters.bevelSize === undefined ) parameters.bevelSize = 8;
			if ( parameters.bevelEnabled === undefined ) parameters.bevelEnabled = false;

			super( shapes, parameters );

		}

		this.type = 'TextGeometry';

	}

}

const {withAsyncContext:_withAsyncContext,defineComponent:_defineComponent$1} = await importShared('vue');

const {createElementVNode:_createElementVNode$1,Fragment:_Fragment,openBlock:_openBlock$1,createElementBlock:_createElementBlock} = await importShared('vue');

const {ref} = await importShared('vue');

const THREE = await importShared('three');
const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "tagging",
  async setup(__props) {
    let __temp, __restore;
    const { scene } = zr();
    const torusref = ref();
    const boxref = ref();
    let boundingBox = null;
    function loadFont(fontUrl) {
      return new Promise((resolve, reject) => {
        const loader = new FontLoader();
        loader.load(
          fontUrl,
          (font2) => resolve(font2),
          void 0,
          // 可以在此插入加载进度回调
          (error) => reject(error)
        );
      });
    }
    const font = ([__temp, __restore] = _withAsyncContext(() => loadFont(
      ("https://opensource.cdn.icegl.cn") + "/fonts/FZLanTingHeiS-UL-GB_Regular.json"
    )), __temp = await __temp, __restore(), __temp);
    const getOutBox = function(myMesh) {
      boundingBox = new THREE.Box3().setFromObject(myMesh);
      const size = new THREE.Vector3();
      boundingBox.getSize(size);
      const boxCenter = new THREE.Vector3();
      boundingBox.getCenter(boxCenter);
      return { size, boxCenter };
    };
    const addOutBox = function(size, boxCenter) {
      const boxGeometry = new THREE.BoxGeometry(size.x, size.y, size.z);
      const edges = new THREE.EdgesGeometry(boxGeometry);
      const lineMaterial = new THREE.LineBasicMaterial({ color: "red" });
      const lineSegments = new THREE.LineSegments(edges, lineMaterial);
      lineSegments.position.copy(boxCenter);
      scene.value.add(lineSegments);
    };
    const createLabel = (text, position, targetNormal) => {
      const textGeometry = new TextGeometry(text, {
        font,
        size: 3,
        depth: 1,
        height: 0.2,
        curveSegments: 12,
        bevelEnabled: false
      });
      const textMaterial = new THREE.MeshBasicMaterial({ color: 65280 });
      const textMesh = new THREE.Mesh(textGeometry, textMaterial);
      textMesh.position.copy(position);
      const upx = new THREE.Vector3(1, 0, 0);
      const upx_ = new THREE.Vector3(-1, 0, 0);
      const upy = new THREE.Vector3(0, 1, 0);
      const upy_ = new THREE.Vector3(0, -1, 0);
      const upz = new THREE.Vector3(0, 0, 1);
      const upz_ = new THREE.Vector3(0, 0, -1);
      if (targetNormal.equals(upx) || targetNormal.equals(upx_)) ; else if (targetNormal.equals(upy) || targetNormal.equals(upy_)) {
        textMesh.rotation.set(0, 0, Math.PI / 2);
      } else if (targetNormal.equals(upz) || targetNormal.equals(upz_)) {
        textMesh.rotation.set(0, Math.PI / 2, 0);
      }
      return textMesh;
    };
    const createLine = (start, end, targetNormal) => {
      const group = new THREE.Group();
      const lineGeometry = new THREE.BufferGeometry().setFromPoints([start, end]);
      const line = new THREE.Line(lineGeometry, new THREE.LineBasicMaterial({ color: "green" }));
      const radius = 1;
      const height = 3;
      const radialSegments = 8;
      const coneGeometry = new THREE.ConeGeometry(radius, height, radialSegments);
      const coneMaterial = new THREE.MeshBasicMaterial({ color: "green" });
      const cone1 = new THREE.Mesh(coneGeometry, coneMaterial);
      cone1.type = "Raycone";
      cone1.position.copy(start);
      const cone2 = new THREE.Mesh(coneGeometry, coneMaterial);
      cone2.type = "Raycone";
      cone2.position.copy(end);
      const upx = new THREE.Vector3(1, 0, 0);
      const upy = new THREE.Vector3(0, 1, 0);
      const upz = new THREE.Vector3(0, 0, 1);
      if (targetNormal.equals(upx)) {
        cone1.rotation.set(0, 0, Math.PI / 2);
        cone2.rotation.set(0, 0, -Math.PI / 2);
      } else if (targetNormal.equals(upy)) {
        cone1.rotation.set(0, 0, Math.PI);
      } else if (targetNormal.equals(upz)) {
        cone1.rotation.set(-Math.PI / 2, 0, 0);
        cone2.rotation.set(Math.PI / 2, 0, 0);
      }
      group.add(line);
      group.add(cone1);
      group.add(cone2);
      return group;
    };
    const addDimensionLabel = function(start, end, text) {
      const midPoint = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5);
      const direction = new THREE.Vector3().subVectors(end, start).normalize();
      const lineGroup = createLine(start, end, direction);
      scene.value.add(lineGroup);
      const label = createLabel(text, midPoint, direction);
      scene.value.add(label);
    };
    const changeObject = function(params) {
      const { size, boxCenter } = getOutBox(params);
      addOutBox(size, boxCenter);
      const min = boundingBox.min;
      const max = boundingBox.max;
      const disWidth = Number(size.z.toFixed(2)) + 10;
      const disDepth = 10;
      const disHeight = Number(size.z.toFixed(2)) + 16;
      addDimensionLabel(new THREE.Vector3(min.x, min.y, min.z + disWidth), new THREE.Vector3(max.x, min.y, min.z + disWidth), `长: ${size.x.toFixed(2)}`);
      addDimensionLabel(new THREE.Vector3(min.x, min.y, min.z + disHeight), new THREE.Vector3(min.x, max.y, min.z + disHeight), `高: ${size.y.toFixed(2)}`);
      addDimensionLabel(new THREE.Vector3(min.x - disDepth, min.y, min.z), new THREE.Vector3(min.x - disDepth, min.y, max.z), `宽: ${size.z.toFixed(2)}`);
    };
    return (_ctx, _cache) => {
      return _openBlock$1(), _createElementBlock(_Fragment, null, [
        _createElementVNode$1("TresMesh", {
          ref_key: "torusref",
          ref: torusref,
          position: [-100, 0, 0],
          onClick: _cache[0] || (_cache[0] = ($event) => changeObject(torusref.value))
        }, [..._cache[2] || (_cache[2] = [
          _createElementVNode$1("TresTorusGeometry", { args: [50, 5, 128, 128] }, null, -1),
          _createElementVNode$1("TresMeshBasicMaterial", { color: "orange" }, null, -1)
        ])], 512),
        _createElementVNode$1("TresMesh", {
          ref_key: "boxref",
          ref: boxref,
          position: [100, 0, 0],
          onClick: _cache[1] || (_cache[1] = ($event) => changeObject(boxref.value))
        }, [..._cache[3] || (_cache[3] = [
          _createElementVNode$1("TresBoxGeometry", { args: [80, 100, 20] }, null, -1),
          _createElementVNode$1("TresMeshNormalMaterial", null, null, -1)
        ])], 512)
      ], 64);
    };
  }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,createVNode:_createVNode,Suspense:_Suspense,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock,resolveComponent:_resolveComponent,mergeProps:_mergeProps} = await importShared('vue');

const {reactive} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "tagging",
  setup(__props) {
    const state = reactive({
      windowSize: true,
      alpha: true,
      antialias: true
    });
    const controlsState = reactive({
      enableDamping: true,
      enableZoom: true,
      enablePan: true,
      enableRotate: true,
      makeDefault: true
    });
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createBlock(_component_TresCanvas, _mergeProps({ clearColor: "#201919" }, state), {
        default: _withCtx(() => [
          _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", {
            fov: 60,
            near: 0.1,
            far: 2e3,
            position: [0, 0, 200],
            "look-at": [0, 0, 0]
          }, null, -1)),
          _cache[1] || (_cache[1] = _createElementVNode("TresAmbientLight", { intensity: 2 }, null, -1)),
          _createVNode(_unref(Kk), _normalizeProps(_guardReactiveProps(controlsState)), null, 16),
          (_openBlock(), _createBlock(_Suspense, null, {
            default: _withCtx(() => [
              _createVNode(_sfc_main$1)
            ]),
            _: 1
          }))
        ]),
        _: 1
      }, 16);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=tagging.BCbEotUl1767105581793.js.map
