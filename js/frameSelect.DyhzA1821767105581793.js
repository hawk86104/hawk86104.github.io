import { importShared, NA, Fs, Kk } from './index.BxB45aCK1767105581793.js';

const {Frustum,Vector3,Matrix4,Quaternion} = await importShared('three');


const _frustum = new Frustum();
const _center = new Vector3();

const _tmpPoint = new Vector3();

const _vecNear = new Vector3();
const _vecTopLeft = new Vector3();
const _vecTopRight = new Vector3();
const _vecDownRight = new Vector3();
const _vecDownLeft = new Vector3();

const _vecFarTopLeft = new Vector3();
const _vecFarTopRight = new Vector3();
const _vecFarDownRight = new Vector3();
const _vecFarDownLeft = new Vector3();

const _vectemp1 = new Vector3();
const _vectemp2 = new Vector3();
const _vectemp3 = new Vector3();

const _matrix = new Matrix4();
const _quaternion = new Quaternion();
const _scale = new Vector3();

/**
 * This class can be used to select 3D objects in a scene with a selection box.
 * It is recommended to visualize the selected area with the help of {@link SelectionHelper}.
 *
 * ```js
 * const selectionBox = new SelectionBox( camera, scene );
 * const selectedObjects = selectionBox.select( startPoint, endPoint );
 * ```
 *
 * @three_import import { SelectionBox } from 'three/addons/interactive/SelectionBox.js';
 */
class SelectionBox {

	/**
	 * Constructs a new selection box.
	 *
	 * @param {Camera} camera - The camera the scene is rendered with.
	 * @param {Scene} scene - The scene.
	 * @param {number} [deep=Number.MAX_VALUE] - How deep the selection frustum of perspective cameras should extend.
	 */
	constructor( camera, scene, deep = Number.MAX_VALUE ) {

		/**
		 * The camera the scene is rendered with.
		 *
		 * @type {Camera}
		 */
		this.camera = camera;

		/**
		 * The camera the scene is rendered with.
		 *
		 * @type {Scene}
		 */
		this.scene = scene;

		/**
		 * The start point of the selection.
		 *
		 * @type {Vector3}
		 */
		this.startPoint = new Vector3();

		/**
		 * The end point of the selection.
		 *
		 * @type {Vector3}
		 */
		this.endPoint = new Vector3();

		/**
		 * The selected 3D objects.
		 *
		 * @type {Array<Object3D>}
		 */
		this.collection = [];

		/**
		 * The selected instance IDs of instanced meshes.
		 *
		 * @type {Object}
		 */
		this.instances = {};

		/**
		 * How deep the selection frustum of perspective cameras should extend.
		 *
		 * @type {number}
		 * @default Number.MAX_VALUE
		 */
		this.deep = deep;

	}

	/**
	 * This method selects 3D objects in the scene based on the given start
	 * and end point. If no parameters are provided, the method uses the start
	 * and end values of the respective members.
	 *
	 * @param {Vector3} [startPoint] - The start point.
	 * @param {Vector3} [endPoint] - The end point.
	 * @return {Array<Object3D>} The selected 3D objects.
	 */
	select( startPoint, endPoint ) {

		this.startPoint = startPoint || this.startPoint;
		this.endPoint = endPoint || this.endPoint;
		this.collection = [];

		this._updateFrustum( this.startPoint, this.endPoint );
		this._searchChildInFrustum( _frustum, this.scene );

		return this.collection;

	}

	// private

	_updateFrustum( startPoint, endPoint ) {

		startPoint = startPoint || this.startPoint;
		endPoint = endPoint || this.endPoint;

		// Avoid invalid frustum

		if ( startPoint.x === endPoint.x ) {

			endPoint.x += Number.EPSILON;

		}

		if ( startPoint.y === endPoint.y ) {

			endPoint.y += Number.EPSILON;

		}

		this.camera.updateProjectionMatrix();
		this.camera.updateMatrixWorld();

		if ( this.camera.isPerspectiveCamera ) {

			_tmpPoint.copy( startPoint );
			_tmpPoint.x = Math.min( startPoint.x, endPoint.x );
			_tmpPoint.y = Math.max( startPoint.y, endPoint.y );
			endPoint.x = Math.max( startPoint.x, endPoint.x );
			endPoint.y = Math.min( startPoint.y, endPoint.y );

			_vecNear.setFromMatrixPosition( this.camera.matrixWorld );
			_vecTopLeft.copy( _tmpPoint );
			_vecTopRight.set( endPoint.x, _tmpPoint.y, 0 );
			_vecDownRight.copy( endPoint );
			_vecDownLeft.set( _tmpPoint.x, endPoint.y, 0 );

			_vecTopLeft.unproject( this.camera );
			_vecTopRight.unproject( this.camera );
			_vecDownRight.unproject( this.camera );
			_vecDownLeft.unproject( this.camera );

			_vectemp1.copy( _vecTopLeft ).sub( _vecNear );
			_vectemp2.copy( _vecTopRight ).sub( _vecNear );
			_vectemp3.copy( _vecDownRight ).sub( _vecNear );
			_vectemp1.normalize();
			_vectemp2.normalize();
			_vectemp3.normalize();

			_vectemp1.multiplyScalar( this.deep );
			_vectemp2.multiplyScalar( this.deep );
			_vectemp3.multiplyScalar( this.deep );
			_vectemp1.add( _vecNear );
			_vectemp2.add( _vecNear );
			_vectemp3.add( _vecNear );

			const planes = _frustum.planes;

			planes[ 0 ].setFromCoplanarPoints( _vecNear, _vecTopLeft, _vecTopRight );
			planes[ 1 ].setFromCoplanarPoints( _vecNear, _vecTopRight, _vecDownRight );
			planes[ 2 ].setFromCoplanarPoints( _vecDownRight, _vecDownLeft, _vecNear );
			planes[ 3 ].setFromCoplanarPoints( _vecDownLeft, _vecTopLeft, _vecNear );
			planes[ 4 ].setFromCoplanarPoints( _vecTopRight, _vecDownRight, _vecDownLeft );
			planes[ 5 ].setFromCoplanarPoints( _vectemp3, _vectemp2, _vectemp1 );
			planes[ 5 ].normal.multiplyScalar( -1 );

		} else if ( this.camera.isOrthographicCamera ) {

			const left = Math.min( startPoint.x, endPoint.x );
			const top = Math.max( startPoint.y, endPoint.y );
			const right = Math.max( startPoint.x, endPoint.x );
			const down = Math.min( startPoint.y, endPoint.y );

			_vecTopLeft.set( left, top, -1 );
			_vecTopRight.set( right, top, -1 );
			_vecDownRight.set( right, down, -1 );
			_vecDownLeft.set( left, down, -1 );

			_vecFarTopLeft.set( left, top, 1 );
			_vecFarTopRight.set( right, top, 1 );
			_vecFarDownRight.set( right, down, 1 );
			_vecFarDownLeft.set( left, down, 1 );

			_vecTopLeft.unproject( this.camera );
			_vecTopRight.unproject( this.camera );
			_vecDownRight.unproject( this.camera );
			_vecDownLeft.unproject( this.camera );

			_vecFarTopLeft.unproject( this.camera );
			_vecFarTopRight.unproject( this.camera );
			_vecFarDownRight.unproject( this.camera );
			_vecFarDownLeft.unproject( this.camera );

			const planes = _frustum.planes;

			planes[ 0 ].setFromCoplanarPoints( _vecTopLeft, _vecFarTopLeft, _vecFarTopRight );
			planes[ 1 ].setFromCoplanarPoints( _vecTopRight, _vecFarTopRight, _vecFarDownRight );
			planes[ 2 ].setFromCoplanarPoints( _vecFarDownRight, _vecFarDownLeft, _vecDownLeft );
			planes[ 3 ].setFromCoplanarPoints( _vecFarDownLeft, _vecFarTopLeft, _vecTopLeft );
			planes[ 4 ].setFromCoplanarPoints( _vecTopRight, _vecDownRight, _vecDownLeft );
			planes[ 5 ].setFromCoplanarPoints( _vecFarDownRight, _vecFarTopRight, _vecFarTopLeft );
			planes[ 5 ].normal.multiplyScalar( -1 );

		} else {

			console.error( 'THREE.SelectionBox: Unsupported camera type.' );

		}

	}

	_searchChildInFrustum( frustum, object ) {

		if ( object.isMesh || object.isLine || object.isPoints ) {

			if ( object.isInstancedMesh ) {

				this.instances[ object.uuid ] = [];

				for ( let instanceId = 0; instanceId < object.count; instanceId ++ ) {

					object.getMatrixAt( instanceId, _matrix );
					_matrix.decompose( _center, _quaternion, _scale );
					_center.applyMatrix4( object.matrixWorld );

					if ( frustum.containsPoint( _center ) ) {

						this.instances[ object.uuid ].push( instanceId );

					}

				}

			} else {

				if ( object.geometry.boundingSphere === null ) object.geometry.computeBoundingSphere();

				_center.copy( object.geometry.boundingSphere.center );

				_center.applyMatrix4( object.matrixWorld );

				if ( frustum.containsPoint( _center ) ) {

					this.collection.push( object );

				}

			}

		}

		if ( object.children.length > 0 ) {

			for ( let x = 0; x < object.children.length; x ++ ) {

				this._searchChildInFrustum( frustum, object.children[ x ] );

			}

		}

	}

}

const {Vector2} = await importShared('three');


/**
 * A helper for {@link SelectionBox}.
 *
 * It visualizes the current selection box with a `div` container element.
 *
 * @three_import import { SelectionHelper } from 'three/addons/interactive/SelectionHelper.js';
 */
class SelectionHelper {

	/**
	 * Constructs a new selection helper.
	 *
	 * @param {(WebGPURenderer|WebGLRenderer)} renderer - The renderer.
	 * @param {string} cssClassName - The CSS class name of the `div`.
	 */
	constructor( renderer, cssClassName ) {

		/**
		 * The visualization of the selection box.
		 *
		 * @type {HTMLDivElement}
		 */
		this.element = document.createElement( 'div' );
		this.element.classList.add( cssClassName );
		this.element.style.pointerEvents = 'none';

		/**
		 * A reference to the renderer.
		 *
		 * @type {(WebGPURenderer|WebGLRenderer)}
		 */
		this.renderer = renderer;

		/**
		 * Whether the mouse or pointer is pressed down.
		 *
		 * @type {boolean}
		 * @default false
		 */
		this.isDown = false;

		/**
		 * Whether helper is enabled or not.
		 *
		 * @type {boolean}
		 * @default true
		 */
		this.enabled = true;

		// private

		this._startPoint = new Vector2();
		this._pointTopLeft = new Vector2();
		this._pointBottomRight = new Vector2();

		this._onPointerDown = function ( event ) {

			if ( this.enabled === false ) return;

			this.isDown = true;
			this._onSelectStart( event );

		}.bind( this );

		this._onPointerMove = function ( event ) {

			if ( this.enabled === false ) return;

			if ( this.isDown ) {

				this._onSelectMove( event );

			}

		}.bind( this );

		this._onPointerUp = function ( ) {

			if ( this.enabled === false ) return;

			this.isDown = false;
			this._onSelectOver();

		}.bind( this );

		this.renderer.domElement.addEventListener( 'pointerdown', this._onPointerDown );
		this.renderer.domElement.addEventListener( 'pointermove', this._onPointerMove );
		this.renderer.domElement.addEventListener( 'pointerup', this._onPointerUp );

	}

	/**
	 * Call this method if you no longer want use to the controls. It frees all internal
	 * resources and removes all event listeners.
	 */
	dispose() {

		this.renderer.domElement.removeEventListener( 'pointerdown', this._onPointerDown );
		this.renderer.domElement.removeEventListener( 'pointermove', this._onPointerMove );
		this.renderer.domElement.removeEventListener( 'pointerup', this._onPointerUp );

		this.element.remove(); // in case disposal happens while dragging

	}

	// private

	_onSelectStart( event ) {

		this.element.style.display = 'none';

		this.renderer.domElement.parentElement.appendChild( this.element );

		this.element.style.left = event.clientX + 'px';
		this.element.style.top = event.clientY + 'px';
		this.element.style.width = '0px';
		this.element.style.height = '0px';

		this._startPoint.x = event.clientX;
		this._startPoint.y = event.clientY;

	}

	_onSelectMove( event ) {

		this.element.style.display = 'block';

		this._pointBottomRight.x = Math.max( this._startPoint.x, event.clientX );
		this._pointBottomRight.y = Math.max( this._startPoint.y, event.clientY );
		this._pointTopLeft.x = Math.min( this._startPoint.x, event.clientX );
		this._pointTopLeft.y = Math.min( this._startPoint.y, event.clientY );

		this.element.style.left = this._pointTopLeft.x + 'px';
		this.element.style.top = this._pointTopLeft.y + 'px';
		this.element.style.width = ( this._pointBottomRight.x - this._pointTopLeft.x ) + 'px';
		this.element.style.height = ( this._pointBottomRight.y - this._pointTopLeft.y ) + 'px';

	}

	_onSelectOver() {

		this.element.remove();

	}

}

const {defineComponent:_defineComponent$1} = await importShared('vue');

const {unref:_unref$1,openBlock:_openBlock$1,createElementBlock:_createElementBlock,createCommentVNode:_createCommentVNode} = await importShared('vue');

const _hoisted_1 = ["object"];
const {onMounted,watchEffect} = await importShared('vue');

const THREE = await importShared('three');
const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "frameSelect",
  setup(__props) {
    const { state: pState } = NA(`${"https://opensource.cdn.icegl.cn"}/model/operationTool/湖中小亭/湖中小亭.gltf`);
    const { camera, renderer, scene, sizes, controls } = Fs();
    const selectionBox = new SelectionBox(camera.value, scene.value);
    const helper = new SelectionHelper(renderer, "selectBox");
    const init = function() {
      document.addEventListener("mousedown", onMouseDown, false);
      document.addEventListener("mousemove", onMouseMove, false);
      document.addEventListener("mouseup", onMouseUp, false);
    };
    let onMouseDown = function(event) {
      console.log(controls.value);
      for (const item of selectionBox.collection) {
        if (item instanceof THREE.Mesh) {
          item.material.emissive.set(0);
        }
      }
      selectionBox.collection.length = 0;
      selectionBox.startPoint.set(event.clientX / sizes.width.value * 2 - 1, -(event.clientY / sizes.height.value) * 2 + 1, 0.5);
    };
    let onMouseMove = function(event) {
      if (helper.isDown) {
        selectionBox.endPoint.set(event.clientX / sizes.width.value * 2 - 1, -(event.clientY / sizes.height.value) * 2 + 1, 0.5);
        const allSelected = selectionBox.select();
        console.log("allSelected", allSelected);
        for (let i = 0; i < allSelected.length; i++) {
          const item = allSelected[i];
          if (item instanceof THREE.Mesh) {
            item.material.emissive.set(16252928);
          }
        }
      }
    };
    let onMouseUp = function(event) {
      const allSelected = selectionBox.select();
      selectionBox.endPoint.set(event.clientX / sizes.width.value * 2 - 1, -(event.clientY / sizes.height.value) * 2 + 1, 0.5);
      for (let i = 0; i < allSelected.length; i++) {
        const item = allSelected[i];
        if (item instanceof THREE.Mesh) {
          item.material.emissive.set(0);
        }
      }
    };
    onMounted(() => {
      init();
    });
    watchEffect(() => {
    });
    return (_ctx, _cache) => {
      return _unref$1(pState) ? (_openBlock$1(), _createElementBlock("primitive", {
        key: 0,
        object: _unref$1(pState)?.scene
      }, null, 8, _hoisted_1)) : _createCommentVNode("", true);
    };
  }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,createVNode:_createVNode,Suspense:_Suspense,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock,resolveComponent:_resolveComponent,mergeProps:_mergeProps} = await importShared('vue');

const {reactive} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "frameSelect",
  setup(__props) {
    const state = reactive({
      // windowSize: true,
      alpha: true,
      antialias: true
    });
    const controlsState = reactive({
      enableDamping: false,
      enableZoom: false,
      autoRotate: false,
      enablePan: false,
      enableRotate: false,
      makeDefault: true
    });
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createBlock(_component_TresCanvas, _mergeProps({
        clearColor: "#201919",
        "window-size": ""
      }, state), {
        default: _withCtx(() => [
          _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", {
            fov: 60,
            near: 0.1,
            far: 2e3,
            position: [0, 10, -28]
          }, null, -1)),
          _cache[1] || (_cache[1] = _createElementVNode("TresAmbientLight", { intensity: 1 }, null, -1)),
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
//# sourceMappingURL=frameSelect.DyhzA1821767105581793.js.map
