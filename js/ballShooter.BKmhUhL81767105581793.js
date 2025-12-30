import { importShared, zr, Kk } from './index.BxB45aCK1767105581793.js';
import { _sfc_main as _sfc_main$3 } from './XRcom.vue_vue_type_script_setup_true_lang.C2zysHMK1767105581793.js';

const {BufferGeometry,Float32BufferAttribute} = await importShared('three');


/**
 * A special type of box geometry intended for {@link LineSegments}.
 *
 * ```js
 * const geometry = new THREE.BoxLineGeometry();
 * const material = new THREE.LineBasicMaterial( { color: 0x00ff00 } );
 * const lines = new THREE.LineSegments( geometry, material );
 * scene.add( lines );
 * ```
 *
 * @augments BufferGeometry
 * @three_import import { BoxLineGeometry } from 'three/addons/geometries/BoxLineGeometry.js';
 */
class BoxLineGeometry extends BufferGeometry {

	/**
	 * Constructs a new box line geometry.
	 *
	 * @param {number} [width=1] - The width. That is, the length of the edges parallel to the X axis.
	 * @param {number} [height=1] - The height. That is, the length of the edges parallel to the Y axis.
	 * @param {number} [depth=1] - The depth. That is, the length of the edges parallel to the Z axis.
	 * @param {number} [widthSegments=1] - Number of segmented rectangular sections along the width of the sides.
	 * @param {number} [heightSegments=1] - Number of segmented rectangular sections along the height of the sides.
	 * @param {number} [depthSegments=1] - Number of segmented rectangular sections along the depth of the sides.
	 */
	constructor( width = 1, height = 1, depth = 1, widthSegments = 1, heightSegments = 1, depthSegments = 1 ) {

		super();

		widthSegments = Math.floor( widthSegments );
		heightSegments = Math.floor( heightSegments );
		depthSegments = Math.floor( depthSegments );

		const widthHalf = width / 2;
		const heightHalf = height / 2;
		const depthHalf = depth / 2;

		const segmentWidth = width / widthSegments;
		const segmentHeight = height / heightSegments;
		const segmentDepth = depth / depthSegments;

		const vertices = [];

		let x = - widthHalf;
		let y = - heightHalf;
		let z = - depthHalf;

		for ( let i = 0; i <= widthSegments; i ++ ) {

			vertices.push( x, - heightHalf, - depthHalf, x, heightHalf, - depthHalf );
			vertices.push( x, heightHalf, - depthHalf, x, heightHalf, depthHalf );
			vertices.push( x, heightHalf, depthHalf, x, - heightHalf, depthHalf );
			vertices.push( x, - heightHalf, depthHalf, x, - heightHalf, - depthHalf );

			x += segmentWidth;

		}

		for ( let i = 0; i <= heightSegments; i ++ ) {

			vertices.push( - widthHalf, y, - depthHalf, widthHalf, y, - depthHalf );
			vertices.push( widthHalf, y, - depthHalf, widthHalf, y, depthHalf );
			vertices.push( widthHalf, y, depthHalf, - widthHalf, y, depthHalf );
			vertices.push( - widthHalf, y, depthHalf, - widthHalf, y, - depthHalf );

			y += segmentHeight;

		}

		for ( let i = 0; i <= depthSegments; i ++ ) {

			vertices.push( - widthHalf, - heightHalf, z, - widthHalf, heightHalf, z );
			vertices.push( - widthHalf, heightHalf, z, widthHalf, heightHalf, z );
			vertices.push( widthHalf, heightHalf, z, widthHalf, - heightHalf, z );
			vertices.push( widthHalf, - heightHalf, z, - widthHalf, - heightHalf, z );

			z += segmentDepth;

		}

		this.setAttribute( 'position', new Float32BufferAttribute( vertices, 3 ) );

	}

}

const {Clock,Vector3,Quaternion,Matrix4} = await importShared('three');


const RAPIER_PATH = 'https://cdn.skypack.dev/@dimforge/rapier3d-compat@0.15.0';

const frameRate = 60;

const _scale = new Vector3( 1, 1, 1 );
const ZERO = new Vector3();

let RAPIER = null;

function getShape( geometry ) {

	const parameters = geometry.parameters;

	// TODO change type to is*

	if ( geometry.type === 'BoxGeometry' ) {

		const sx = parameters.width !== undefined ? parameters.width / 2 : 0.5;
		const sy = parameters.height !== undefined ? parameters.height / 2 : 0.5;
		const sz = parameters.depth !== undefined ? parameters.depth / 2 : 0.5;

		return RAPIER.ColliderDesc.cuboid( sx, sy, sz )

	} if ( geometry.type === 'SphereGeometry' || geometry.type === 'IcosahedronGeometry' ) {

		const radius = parameters.radius !== undefined ? parameters.radius : 1;
		return RAPIER.ColliderDesc.ball( radius )

	}

	return null

}

async function RapierPhysics() {

	if ( RAPIER === null ) {

		RAPIER = await import( RAPIER_PATH );
		await RAPIER.init();

	}

	// Docs: https://rapier.rs/docs/api/javascript/JavaScript3D/

	const gravity = new Vector3( 0.0, -9.81, 0.0 );
	const world = new RAPIER.World( gravity );

	const meshes = [];
	const meshMap = new WeakMap();

	const _vector = new Vector3();
	const _quaternion = new Quaternion();
	const _matrix = new Matrix4();

	function addScene( scene ) {

		scene.traverse( ( child ) => {

			if ( child.isMesh ) {

				const physics = child.userData.physics;

				if ( physics ) {

					addMesh( child, physics.mass, physics.restitution );

				}

			}

		} );

	}

	function addMesh( mesh, mass = 0, restitution = 0 ) {

		const shape = getShape( mesh.geometry );

		if ( shape === null ) return

		shape.setMass( mass );
		shape.setRestitution( restitution );

		const body = mesh.isInstancedMesh
							? createInstancedBody( mesh, mass, shape )
							: createBody( mesh.position, mesh.quaternion, mass, shape );

		if ( mass > 0 ) {

			meshes.push( mesh );
			meshMap.set( mesh, body );

		}

	}

	function createInstancedBody( mesh, mass, shape ) {

		const array = mesh.instanceMatrix.array;

		const bodies = [];

		for ( let i = 0; i < mesh.count; i ++ ) {

			const position = _vector.fromArray( array, i * 16 + 12 );
			bodies.push( createBody( position, null, mass, shape ) );

		}

		return bodies

	}

	function createBody( position, quaternion, mass, shape ) {

		const desc = mass > 0 ? RAPIER.RigidBodyDesc.dynamic() : RAPIER.RigidBodyDesc.fixed();
		desc.setTranslation( ...position );
		if ( quaternion !== null ) desc.setRotation( quaternion );

		const body = world.createRigidBody( desc );
		world.createCollider( shape, body );

		return body

	}

	function setMeshPosition( mesh, position, index = 0 ) {

		let body = meshMap.get( mesh );

		if ( mesh.isInstancedMesh ) {

			body = body[ index ];

		}

		body.setAngvel( ZERO );
		body.setLinvel( ZERO );
		body.setTranslation( position );

	}

	function setMeshVelocity( mesh, velocity, index = 0 ) {

		let body = meshMap.get( mesh );

		if ( mesh.isInstancedMesh ) {

			body = body[ index ];

		}

		body.setLinvel( velocity );

	}

	//

	const clock = new Clock();

	function step() {
		world.timestep = clock.getDelta();
		world.step();

		//

		for ( let i = 0, l = meshes.length; i < l; i ++ ) {

			const mesh = meshes[ i ];

			if ( mesh.isInstancedMesh ) {

				const array = mesh.instanceMatrix.array;
				const bodies = meshMap.get( mesh );

				for ( let j = 0; j < bodies.length; j ++ ) {

					const body = bodies[ j ];

					const position = body.translation();
					_quaternion.copy( body.rotation() );

					_matrix.compose( position, _quaternion, _scale ).toArray( array, j * 16 );

				}

				mesh.instanceMatrix.needsUpdate = true;
				mesh.computeBoundingSphere();

			} else {

				const body = meshMap.get( mesh );

				mesh.position.copy( body.translation() );
				mesh.quaternion.copy( body.rotation() );

			}

		}

	}

	// animate

	setInterval( step, 1000 / frameRate );

	return {
		addScene,
		addMesh,
		setMeshPosition,
		setMeshVelocity
	}

}

const {withAsyncContext:_withAsyncContext,defineComponent:_defineComponent$2} = await importShared('vue');

const {unref:_unref$2,createElementVNode:_createElementVNode$2,Fragment:_Fragment$1,openBlock:_openBlock$2,createElementBlock:_createElementBlock$1} = await importShared('vue');

const _hoisted_1$1 = ["geometry", "material"];
const _hoisted_2 = ["rotation-z", "geometry", "material"];
const _hoisted_3 = ["rotation-z", "geometry", "material"];
const _hoisted_4 = ["rotation-x", "geometry", "material"];
const _hoisted_5 = ["rotation-x", "geometry", "material"];
const _hoisted_6 = ["object"];
const {onMounted} = await importShared('vue');

const THREE$1 = await importShared('three');
const _sfc_main$2 = /* @__PURE__ */ _defineComponent$2({
  __name: "physicsBalls",
  props: {
    XRcom: {
      default: null
    }
  },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    const geometry = new THREE$1.BoxGeometry(6, 2, 6);
    const material = new THREE$1.MeshNormalMaterial({ visible: false });
    const userDataConfig = { physics: { mass: 0 } };
    const spheresGeometry = new THREE$1.IcosahedronGeometry(0.08, 3);
    const spheresMaterial = new THREE$1.MeshLambertMaterial();
    const spheres = new THREE$1.InstancedMesh(spheresGeometry, spheresMaterial, 800);
    spheres.instanceMatrix.setUsage(THREE$1.DynamicDrawUsage);
    spheres.userData.physics = { mass: 1, restitution: 1.1 };
    const matrix = new THREE$1.Matrix4();
    const color = new THREE$1.Color();
    for (let i = 0; i < spheres.count; i++) {
      const x = Math.random() * 4 - 2;
      const y = Math.random() * 4;
      const z = Math.random() * 4 - 2;
      matrix.setPosition(x, y, z);
      spheres.setMatrixAt(i, matrix);
      spheres.setColorAt(i, color.setHex(16777215 * Math.random()));
    }
    const { scene } = zr();
    const physics = ([__temp, __restore] = _withAsyncContext(() => RapierPhysics()), __temp = await __temp, __restore(), __temp);
    onMounted(() => {
      physics.addScene(scene.value);
    });
    let count = 0;
    const velocity = new THREE$1.Vector3();
    function handleController(controller) {
      if (controller.userData.isSelecting) {
        physics.setMeshPosition(spheres, controller.position, count);
        velocity.x = (Math.random() - 0.5) * 2;
        velocity.y = (Math.random() - 0.5) * 2;
        velocity.z = Math.random() - 9;
        velocity.applyQuaternion(controller.quaternion);
        physics.setMeshVelocity(spheres, velocity, count);
        if (++count === spheres.count) count = 0;
      }
    }
    props.XRcom.onBeforeLoop(() => {
      handleController(props.XRcom.controller0);
      handleController(props.XRcom.controller1);
    });
    return (_ctx, _cache) => {
      return _openBlock$2(), _createElementBlock$1(_Fragment$1, null, [
        _createElementVNode$2("TresMesh", {
          name: "floor",
          position: [0, -1, 0],
          geometry: _unref$2(geometry),
          material: _unref$2(material),
          userData: userDataConfig
        }, null, 8, _hoisted_1$1),
        _createElementVNode$2("TresMesh", {
          name: "wallPX",
          position: [4, 3, 0],
          "rotation-z": Math.PI / 2,
          geometry: _unref$2(geometry),
          material: _unref$2(material),
          userData: userDataConfig
        }, null, 8, _hoisted_2),
        _createElementVNode$2("TresMesh", {
          name: "wallNX",
          position: [-4, 3, 0],
          "rotation-z": Math.PI / 2,
          geometry: _unref$2(geometry),
          material: _unref$2(material),
          userData: userDataConfig
        }, null, 8, _hoisted_3),
        _createElementVNode$2("TresMesh", {
          name: "wallPZ",
          position: [0, 3, 4],
          "rotation-x": Math.PI / 2,
          geometry: _unref$2(geometry),
          material: _unref$2(material),
          userData: userDataConfig
        }, null, 8, _hoisted_4),
        _createElementVNode$2("TresMesh", {
          name: "wallNZ",
          position: [0, 3, -4],
          "rotation-x": Math.PI / 2,
          geometry: _unref$2(geometry),
          material: _unref$2(material),
          userData: userDataConfig
        }, null, 8, _hoisted_5),
        _createElementVNode$2("primitive", { object: _unref$2(spheres) }, null, 8, _hoisted_6)
      ], 64);
    };
  }
});

const {defineComponent:_defineComponent$1} = await importShared('vue');

const {unref:_unref$1,createElementVNode:_createElementVNode$1,createVNode:_createVNode$1,openBlock:_openBlock$1,createBlock:_createBlock$1,createCommentVNode:_createCommentVNode,Suspense:_Suspense,withCtx:_withCtx$1,Fragment:_Fragment,createElementBlock:_createElementBlock} = await importShared('vue');

const _hoisted_1 = ["geometry"];
const {ref,watch} = await importShared('vue');

const THREE = await importShared('three');
const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "ballShooterSence",
  setup(__props) {
    const boxLineGeometry = new BoxLineGeometry(6, 6, 6, 10, 10, 10);
    const onSelectStart = function() {
      if (this?.userData) {
        this.userData.isSelecting = true;
      }
    };
    const onSelectEnd = function() {
      if (this?.userData) {
        this.userData.isSelecting = false;
      }
    };
    const buildController = function(data) {
      let geometry, material;
      switch (data.targetRayMode) {
        case "tracked-pointer":
          geometry = new THREE.BufferGeometry();
          geometry.setAttribute("position", new THREE.Float32BufferAttribute([0, 0, 0, 0, 0, -1], 3));
          geometry.setAttribute("color", new THREE.Float32BufferAttribute([0.5, 0.5, 0.5, 0, 0, 0], 3));
          material = new THREE.LineBasicMaterial({ vertexColors: true, blending: THREE.AdditiveBlending });
          return new THREE.Line(geometry, material);
        case "gaze":
          geometry = new THREE.RingGeometry(0.02, 0.04, 32).translate(0, 0, -1);
          material = new THREE.MeshBasicMaterial({ opacity: 0.5, transparent: true });
          return new THREE.Mesh(geometry, material);
      }
      return new THREE.Group();
    };
    const XRcomRef = ref(null);
    watch(XRcomRef, (v) => {
      if (!v) {
        return;
      }
      v.controller0.addEventListener("selectstart", onSelectStart);
      v.controller0.addEventListener("selectend", onSelectEnd);
      v.controller0.addEventListener("connected", function(event) {
        this.add(buildController(event.data));
      });
      v.controller0.addEventListener("disconnected", function() {
        this.remove(this.children[0]);
      });
      v.controller1.addEventListener("selectstart", onSelectStart);
      v.controller1.addEventListener("selectend", onSelectEnd);
      v.controller1.addEventListener("connected", function(event) {
        this.add(buildController(event.data));
      });
      v.controller1.addEventListener("disconnected", function() {
        this.remove(this.children[0]);
      });
    });
    return (_ctx, _cache) => {
      return _openBlock$1(), _createElementBlock(_Fragment, null, [
        _createElementVNode$1("TresLineSegments", {
          position: [0, 3, 0],
          geometry: _unref$1(boxLineGeometry)
        }, [..._cache[0] || (_cache[0] = [
          _createElementVNode$1("TresLineBasicMaterial", { color: 8421504 }, null, -1)
        ])], 8, _hoisted_1),
        _createVNode$1(_sfc_main$3, {
          ref_key: "XRcomRef",
          ref: XRcomRef,
          sessionInit: { optionalFeatures: ["depth-sensing"], depthSensing: { usagePreference: ["gpu-optimized"], dataFormatPreference: [] } }
        }, null, 512),
        (_openBlock$1(), _createBlock$1(_Suspense, null, {
          default: _withCtx$1(() => [
            XRcomRef.value ? (_openBlock$1(), _createBlock$1(_sfc_main$2, {
              key: 0,
              XRcom: XRcomRef.value
            }, null, 8, ["XRcom"])) : _createCommentVNode("", true)
          ]),
          _: 1
        }))
      ], 64);
    };
  }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,createVNode:_createVNode,resolveComponent:_resolveComponent,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock} = await importShared('vue');

const {reactive} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "ballShooter",
  setup(__props) {
    const state = reactive({
      clearColor: "#444444",
      antialias: true,
      renderMode: "demand",
      windowSize: true
    });
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createBlock(_component_TresCanvas, _normalizeProps(_guardReactiveProps(state)), {
        default: _withCtx(() => [
          _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", {
            position: [0, 1.6, 3],
            fov: 50,
            near: 0.1,
            far: 100
          }, null, -1)),
          _createVNode(_unref(Kk)),
          _cache[1] || (_cache[1] = _createElementVNode("TresHemisphereLight", { args: [12303291, 8947848, 3] }, null, -1)),
          _cache[2] || (_cache[2] = _createElementVNode("TresDirectionalLight", {
            position: [1, 1, 1],
            intensity: 3
          }, null, -1)),
          _createVNode(_sfc_main$1)
        ]),
        _: 1
      }, 16);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=ballShooter.BKmhUhL81767105581793.js.map
