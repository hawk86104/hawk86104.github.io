import { importShared, Fs, NA, ol, Kk } from './index.BxB45aCK1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';
import { shaderMaterial } from './shaderMaterial.BXDL7cvO1767105581793.js';
import { mergeVertices, toCreasedNormals, mergeGeometries } from './BufferGeometryUtils.NxcZsV4J1767105581793.js';

const {BufferGeometry,Color,Float32BufferAttribute,Vector2,Vector3,Vector4} = await importShared('three');

const _cb = new Vector3(), _ab = new Vector3();

/**
 * This class can be used to modify a geometry by simplifying it. A typical use
 * case for such a modifier is automatic LOD generation.
 *
 * The implementation is based on [Progressive Mesh type Polygon Reduction Algorithm]{@link https://web.archive.org/web/20230610044040/http://www.melax.com/polychop/}
 * by Stan Melax in 1998.
 *
 * ```js
 * const modifier = new SimplifyModifier();
 * geometry = modifier.modify( geometry );
 * ```
 *
 * @three_import import { SimplifyModifier } from 'three/addons/modifiers/SimplifyModifier.js';
 */
class SimplifyModifier {

	/**
	 * Returns a new, modified version of the given geometry by applying a simplification.
	 * Please note that the resulting geometry is always non-indexed.
	 *
	 * @param {BufferGeometry} geometry - The geometry to modify.
	 * @param {number} count - The number of vertices to remove.
	 * @return {BufferGeometry} A new, modified geometry.
	 */
	modify( geometry, count ) {

		geometry = geometry.clone();

		// currently morphAttributes are not supported
		delete geometry.morphAttributes.position;
		delete geometry.morphAttributes.normal;
		const attributes = geometry.attributes;

		// this modifier can only process indexed and non-indexed geometries with at least a position attribute

		for ( const name in attributes ) {

			if ( name !== 'position' && name !== 'uv' && name !== 'normal' && name !== 'tangent' && name !== 'color' ) geometry.deleteAttribute( name );

		}

		geometry = mergeVertices( geometry );

		//
		// put data of original geometry in different data structures
		//

		const vertices = [];
		const faces = [];

		// add vertices

		const positionAttribute = geometry.getAttribute( 'position' );
		const uvAttribute = geometry.getAttribute( 'uv' );
		const normalAttribute = geometry.getAttribute( 'normal' );
		const tangentAttribute = geometry.getAttribute( 'tangent' );
		const colorAttribute = geometry.getAttribute( 'color' );

		let t = null;
		let v2 = null;
		let nor = null;
		let col = null;

		for ( let i = 0; i < positionAttribute.count; i ++ ) {

			const v = new Vector3().fromBufferAttribute( positionAttribute, i );
			if ( uvAttribute ) {

				v2 = new Vector2().fromBufferAttribute( uvAttribute, i );

			}

			if ( normalAttribute ) {

				nor = new Vector3().fromBufferAttribute( normalAttribute, i );

			}

			if ( tangentAttribute ) {

				t = new Vector4().fromBufferAttribute( tangentAttribute, i );

			}

			if ( colorAttribute ) {

				col = new Color().fromBufferAttribute( colorAttribute, i );

			}

			const vertex = new Vertex( v, v2, nor, t, col );
			vertices.push( vertex );

		}

		// add faces

		let index = geometry.getIndex();

		if ( index !== null ) {

			for ( let i = 0; i < index.count; i += 3 ) {

				const a = index.getX( i );
				const b = index.getX( i + 1 );
				const c = index.getX( i + 2 );

				const triangle = new Triangle( vertices[ a ], vertices[ b ], vertices[ c ], a, b, c );
				faces.push( triangle );

			}

		} else {

			for ( let i = 0; i < positionAttribute.count; i += 3 ) {

				const a = i;
				const b = i + 1;
				const c = i + 2;

				const triangle = new Triangle( vertices[ a ], vertices[ b ], vertices[ c ], a, b, c );
				faces.push( triangle );

			}

		}

		// compute all edge collapse costs

		for ( let i = 0, il = vertices.length; i < il; i ++ ) {

			computeEdgeCostAtVertex( vertices[ i ] );

		}

		let nextVertex;

		let z = count;

		while ( z -- ) {

			nextVertex = minimumCostEdge( vertices );

			if ( ! nextVertex ) {

				console.log( 'THREE.SimplifyModifier: No next vertex' );
				break;

			}

			collapse( vertices, faces, nextVertex, nextVertex.collapseNeighbor );

		}

		//

		const simplifiedGeometry = new BufferGeometry();
		const position = [];
		const uv = [];
		const normal = [];
		const tangent = [];
		const color = [];

		index = [];

		//

		for ( let i = 0; i < vertices.length; i ++ ) {

			const vertex = vertices[ i ];
			position.push( vertex.position.x, vertex.position.y, vertex.position.z );
			if ( vertex.uv ) {

				uv.push( vertex.uv.x, vertex.uv.y );

			}

			if ( vertex.normal ) {

				normal.push( vertex.normal.x, vertex.normal.y, vertex.normal.z );

			}

			if ( vertex.tangent ) {

				tangent.push( vertex.tangent.x, vertex.tangent.y, vertex.tangent.z, vertex.tangent.w );

			}

			if ( vertex.color ) {

				color.push( vertex.color.r, vertex.color.g, vertex.color.b );

			}


			// cache final index to GREATLY speed up faces reconstruction
			vertex.id = i;

		}

		//

		for ( let i = 0; i < faces.length; i ++ ) {

			const face = faces[ i ];
			index.push( face.v1.id, face.v2.id, face.v3.id );

		}

		simplifiedGeometry.setAttribute( 'position', new Float32BufferAttribute( position, 3 ) );
		if ( uv.length > 0 ) simplifiedGeometry.setAttribute( 'uv', new Float32BufferAttribute( uv, 2 ) );
		if ( normal.length > 0 ) simplifiedGeometry.setAttribute( 'normal', new Float32BufferAttribute( normal, 3 ) );
		if ( tangent.length > 0 ) simplifiedGeometry.setAttribute( 'tangent', new Float32BufferAttribute( tangent, 4 ) );
		if ( color.length > 0 ) simplifiedGeometry.setAttribute( 'color', new Float32BufferAttribute( color, 3 ) );

		simplifiedGeometry.setIndex( index );

		return simplifiedGeometry;

	}

}

function pushIfUnique( array, object ) {

	if ( array.indexOf( object ) === -1 ) array.push( object );

}

function removeFromArray( array, object ) {

	const k = array.indexOf( object );
	if ( k > -1 ) array.splice( k, 1 );

}

function computeEdgeCollapseCost( u, v ) {

	// if we collapse edge uv by moving u to v then how
	// much different will the model change, i.e. the "error".

	const edgelength = v.position.distanceTo( u.position );
	let curvature = 0;

	const sideFaces = [];

	// find the "sides" triangles that are on the edge uv
	for ( let i = 0, il = u.faces.length; i < il; i ++ ) {

		const face = u.faces[ i ];

		if ( face.hasVertex( v ) ) {

			sideFaces.push( face );

		}

	}

	// use the triangle facing most away from the sides
	// to determine our curvature term
	for ( let i = 0, il = u.faces.length; i < il; i ++ ) {

		let minCurvature = 1;
		const face = u.faces[ i ];

		for ( let j = 0; j < sideFaces.length; j ++ ) {

			const sideFace = sideFaces[ j ];
			// use dot product of face normals.
			const dotProd = face.normal.dot( sideFace.normal );
			minCurvature = Math.min( minCurvature, ( 1.001 - dotProd ) / 2 );

		}

		curvature = Math.max( curvature, minCurvature );

	}

	// crude approach in attempt to preserve borders
	// though it seems not to be totally correct
	const borders = 0;

	if ( sideFaces.length < 2 ) {

		// we add some arbitrary cost for borders,
		// borders += 10;
		curvature = 1;

	}

	const amt = edgelength * curvature + borders;

	return amt;

}

function computeEdgeCostAtVertex( v ) {

	// compute the edge collapse cost for all edges that start
	// from vertex v.  Since we are only interested in reducing
	// the object by selecting the min cost edge at each step, we
	// only cache the cost of the least cost edge at this vertex
	// (in member variable collapse) as well as the value of the
	// cost (in member variable collapseCost).

	if ( v.neighbors.length === 0 ) {

		// collapse if no neighbors.
		v.collapseNeighbor = null;
		v.collapseCost = -0.01;

		return;

	}

	v.collapseCost = 100000;
	v.collapseNeighbor = null;

	// search all neighboring edges for "least cost" edge
	for ( let i = 0; i < v.neighbors.length; i ++ ) {

		const collapseCost = computeEdgeCollapseCost( v, v.neighbors[ i ] );

		if ( ! v.collapseNeighbor ) {

			v.collapseNeighbor = v.neighbors[ i ];
			v.collapseCost = collapseCost;
			v.minCost = collapseCost;
			v.totalCost = 0;
			v.costCount = 0;

		}

		v.costCount ++;
		v.totalCost += collapseCost;

		if ( collapseCost < v.minCost ) {

			v.collapseNeighbor = v.neighbors[ i ];
			v.minCost = collapseCost;

		}

	}

	// we average the cost of collapsing at this vertex
	v.collapseCost = v.totalCost / v.costCount;
	// v.collapseCost = v.minCost;

}

function removeVertex( v, vertices ) {

	console.assert( v.faces.length === 0 );

	while ( v.neighbors.length ) {

		const n = v.neighbors.pop();
		removeFromArray( n.neighbors, v );

	}

	removeFromArray( vertices, v );

}

function removeFace( f, faces ) {

	removeFromArray( faces, f );

	if ( f.v1 ) removeFromArray( f.v1.faces, f );
	if ( f.v2 ) removeFromArray( f.v2.faces, f );
	if ( f.v3 ) removeFromArray( f.v3.faces, f );

	// TODO optimize this!
	const vs = [ f.v1, f.v2, f.v3 ];

	for ( let i = 0; i < 3; i ++ ) {

		const v1 = vs[ i ];
		const v2 = vs[ ( i + 1 ) % 3 ];

		if ( ! v1 || ! v2 ) continue;

		v1.removeIfNonNeighbor( v2 );
		v2.removeIfNonNeighbor( v1 );

	}

}

function collapse( vertices, faces, u, v ) {

	// Collapse the edge uv by moving vertex u onto v

	if ( ! v ) {

		// u is a vertex all by itself so just delete it..
		removeVertex( u, vertices );
		return;

	}

	if ( v.uv ) {

		u.uv.copy( v.uv );

	}

	if ( v.normal ) {

		v.normal.add( u.normal ).normalize();

	}

	if ( v.tangent ) {

		v.tangent.add( u.tangent ).normalize();

	}

	const tmpVertices = [];

	for ( let i = 0; i < u.neighbors.length; i ++ ) {

		tmpVertices.push( u.neighbors[ i ] );

	}


	// delete triangles on edge uv:
	for ( let i = u.faces.length - 1; i >= 0; i -- ) {

		if ( u.faces[ i ] && u.faces[ i ].hasVertex( v ) ) {

			removeFace( u.faces[ i ], faces );

		}

	}

	// update remaining triangles to have v instead of u
	for ( let i = u.faces.length - 1; i >= 0; i -- ) {

		u.faces[ i ].replaceVertex( u, v );

	}


	removeVertex( u, vertices );

	// recompute the edge collapse costs in neighborhood
	for ( let i = 0; i < tmpVertices.length; i ++ ) {

		computeEdgeCostAtVertex( tmpVertices[ i ] );

	}

}



function minimumCostEdge( vertices ) {

	// O(n * n) approach. TODO optimize this

	let least = vertices[ 0 ];

	for ( let i = 0; i < vertices.length; i ++ ) {

		if ( vertices[ i ].collapseCost < least.collapseCost ) {

			least = vertices[ i ];

		}

	}

	return least;

}

// we use a triangle class to represent structure of face slightly differently

class Triangle {

	constructor( v1, v2, v3, a, b, c ) {

		this.a = a;
		this.b = b;
		this.c = c;

		this.v1 = v1;
		this.v2 = v2;
		this.v3 = v3;

		this.normal = new Vector3();

		this.computeNormal();

		v1.faces.push( this );
		v1.addUniqueNeighbor( v2 );
		v1.addUniqueNeighbor( v3 );

		v2.faces.push( this );
		v2.addUniqueNeighbor( v1 );
		v2.addUniqueNeighbor( v3 );


		v3.faces.push( this );
		v3.addUniqueNeighbor( v1 );
		v3.addUniqueNeighbor( v2 );

	}

	computeNormal() {

		const vA = this.v1.position;
		const vB = this.v2.position;
		const vC = this.v3.position;

		_cb.subVectors( vC, vB );
		_ab.subVectors( vA, vB );
		_cb.cross( _ab ).normalize();

		this.normal.copy( _cb );

	}

	hasVertex( v ) {

		return v === this.v1 || v === this.v2 || v === this.v3;

	}

	replaceVertex( oldv, newv ) {

		if ( oldv === this.v1 ) this.v1 = newv;
		else if ( oldv === this.v2 ) this.v2 = newv;
		else if ( oldv === this.v3 ) this.v3 = newv;

		removeFromArray( oldv.faces, this );
		newv.faces.push( this );


		oldv.removeIfNonNeighbor( this.v1 );
		this.v1.removeIfNonNeighbor( oldv );

		oldv.removeIfNonNeighbor( this.v2 );
		this.v2.removeIfNonNeighbor( oldv );

		oldv.removeIfNonNeighbor( this.v3 );
		this.v3.removeIfNonNeighbor( oldv );

		this.v1.addUniqueNeighbor( this.v2 );
		this.v1.addUniqueNeighbor( this.v3 );

		this.v2.addUniqueNeighbor( this.v1 );
		this.v2.addUniqueNeighbor( this.v3 );

		this.v3.addUniqueNeighbor( this.v1 );
		this.v3.addUniqueNeighbor( this.v2 );

		this.computeNormal();

	}

}

class Vertex {

	constructor( v, uv, normal, tangent, color ) {

		this.position = v;
		this.uv = uv;
		this.normal = normal;
		this.tangent = tangent;
		this.color = color;

		this.id = -1; // external use position in vertices list (for e.g. face generation)

		this.faces = []; // faces vertex is connected
		this.neighbors = []; // neighbouring vertices aka "adjacentVertices"

		// these will be computed in computeEdgeCostAtVertex()
		this.collapseCost = 0; // cost of collapsing this vertex, the less the better. aka objdist
		this.collapseNeighbor = null; // best candidate for collapsing

	}

	addUniqueNeighbor( vertex ) {

		pushIfUnique( this.neighbors, vertex );

	}

	removeIfNonNeighbor( n ) {

		const neighbors = this.neighbors;
		const faces = this.faces;

		const offset = neighbors.indexOf( n );

		if ( offset === -1 ) return;

		for ( let i = 0; i < faces.length; i ++ ) {

			if ( faces[ i ].hasVertex( n ) ) return;

		}

		neighbors.splice( offset, 1 );

	}

}

const THREE$2 = await importShared('three');

const OutlinesMaterial = shaderMaterial({
  screenspace: false,
  color: new THREE$2.Color('black'),
  opacity: 1,
  thickness: 0.05,
  size: new THREE$2.Vector2()
}, /* glsl */`
   #include <common>
   #include <morphtarget_pars_vertex>
   #include <skinning_pars_vertex>
   uniform float thickness;
   uniform float screenspace;
   uniform vec2 size;
   void main() {
     #if defined (USE_SKINNING)
	   #include <beginnormal_vertex>
       #include <morphnormal_vertex>
       #include <skinbase_vertex>
       #include <skinnormal_vertex>
       #include <defaultnormal_vertex>
     #endif
     #include <begin_vertex>
	   #include <morphtarget_vertex>
	   #include <skinning_vertex>
     #include <project_vertex>
     vec4 tNormal = vec4(normal, 0.0);
     vec4 tPosition = vec4(transformed, 1.0);
     #ifdef USE_INSTANCING
       tNormal = instanceMatrix * tNormal;
       tPosition = instanceMatrix * tPosition;
     #endif
     if (screenspace == 0.0) {
       vec3 newPosition = tPosition.xyz + tNormal.xyz * thickness;
       gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0); 
     } else {
       vec4 clipPosition = projectionMatrix * modelViewMatrix * tPosition;
       vec4 clipNormal = projectionMatrix * modelViewMatrix * tNormal;
       vec2 offset = normalize(clipNormal.xy) * thickness / size * clipPosition.w * 2.0;
       clipPosition.xy += offset;
       gl_Position = clipPosition;
     }
   }`, /* glsl */`
   uniform vec3 color;
   uniform float opacity;
   void main(){
     gl_FragColor = vec4(color, opacity);
     #include <tonemapping_fragment>
     #include <${parseInt(THREE$2.REVISION.replace(/\D+/g, '')) >= 154 ? 'colorspace_fragment' : 'encodings_fragment'}>
   }`);
function Outlines({
  color = new THREE$2.Color('black'),
  opacity = 1,
  transparent = false,
  screenspace = false,
  toneMapped = true,
  polygonOffset = false,
  polygonOffsetFactor = 0,
  renderOrder = 0,
  thickness = 0.05,
  angle = Math.PI,
  gl
} = {}) {
  const group = new THREE$2.Group();
  let shapeProps = {
    color,
    opacity,
    transparent,
    screenspace,
    toneMapped,
    polygonOffset,
    polygonOffsetFactor,
    renderOrder,
    thickness,
    angle
  };
  function updateMesh(angle) {
    const parent = group.parent;
    group.clear();
    if (parent && parent.geometry) {
      let mesh;
      const material = new OutlinesMaterial({
        side: THREE$2.BackSide
      });
      if (parent.skeleton) {
        mesh = new THREE$2.SkinnedMesh();
        mesh.material = material;
        mesh.bind(parent.skeleton, parent.bindMatrix);
        group.add(mesh);
      } else if (parent.isInstancedMesh) {
        mesh = new THREE$2.InstancedMesh(parent.geometry, material, parent.count);
        mesh.instanceMatrix = parent.instanceMatrix;
        group.add(mesh);
      } else {
        mesh = new THREE$2.Mesh();
        mesh.material = material;
        group.add(mesh);
      }
      mesh.geometry = angle ? toCreasedNormals(parent.geometry, angle) : parent.geometry;
    }
  }
  function updateProps(newProps) {
    shapeProps = {
      ...shapeProps,
      ...newProps
    };
    const mesh = group.children[0];
    if (mesh) {
      const {
        transparent,
        thickness,
        color,
        opacity,
        screenspace,
        toneMapped,
        polygonOffset,
        polygonOffsetFactor,
        renderOrder
      } = shapeProps;
      const contextSize = new THREE$2.Vector2();
      if (!gl && shapeProps.screenspace) {
        console.warn('Outlines: "screenspace" requires a WebGLRenderer instance to calculate the outline size');
      }
      if (gl) gl.getSize(contextSize);
      Object.assign(mesh.material, {
        transparent,
        thickness,
        color,
        opacity,
        size: contextSize,
        screenspace,
        toneMapped,
        polygonOffset,
        polygonOffsetFactor
      });
      if (renderOrder !== undefined) mesh.renderOrder = renderOrder;
    }
  }
  return {
    group,
    updateProps(props) {
      var _props$angle;
      const angle = (_props$angle = props.angle) !== null && _props$angle !== void 0 ? _props$angle : shapeProps.angle;
      if (angle !== shapeProps.angle) {
        updateMesh(angle);
      }
      updateProps(props);
    },
    generate() {
      updateMesh(shapeProps.angle);
      updateProps(shapeProps);
    }
  };
}

const {defineComponent:_defineComponent$2} = await importShared('vue');

const {unref:_unref$2,openBlock:_openBlock$2,createElementBlock:_createElementBlock$1} = await importShared('vue');

const _hoisted_1$2 = ["object"];
const THREE$1 = await importShared('three');
const {onMounted,watchEffect} = await importShared('vue');

const _sfc_main$2 = /* @__PURE__ */ _defineComponent$2({
  __name: "outlineCom",
  props: {
    color: { default: "#ffffff" },
    thickness: { default: 0.1 },
    screenspace: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const { renderer } = Fs();
    const ol = Outlines({
      color: new THREE$1.Color(props.color),
      thickness: props.thickness,
      screenspace: props.screenspace,
      gl: renderer
    });
    onMounted(() => {
      ol.generate();
    });
    watchEffect(() => {
      ol.updateProps({
        color: new THREE$1.Color(props.color),
        thickness: props.thickness,
        screenspace: props.screenspace
      });
    });
    return (_ctx, _cache) => {
      return _openBlock$2(), _createElementBlock$1("primitive", {
        object: _unref$2(ol).group
      }, null, 8, _hoisted_1$2);
    };
  }
});

const {defineComponent:_defineComponent$1} = await importShared('vue');

const {unref:_unref$1,createElementVNode:_createElementVNode$1,createVNode:_createVNode$1,openBlock:_openBlock$1,createElementBlock:_createElementBlock,createCommentVNode:_createCommentVNode} = await importShared('vue');

const _hoisted_1$1 = ["object"];
const _hoisted_2$1 = ["geometry"];
const {watch} = await importShared('vue');

const THREE = await importShared('three');
const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "outlineModel",
  props: {
    color: { default: "#ffffff" },
    thickness: { default: 0.1 },
    screenspace: { type: Boolean, default: false }
  },
  setup(__props) {
    const { state: pState } = NA("./plugins/basic/htmls/model/model.gltf", {
      draco: true,
      decoderPath: "./draco/"
    });
    function simplifyGeometry(geometry, factor = 0.1) {
      const modifier = new SimplifyModifier();
      const simplifiedGeometry = modifier.modify(geometry, Math.floor(geometry.attributes.position.count * factor));
      return simplifiedGeometry;
    }
    function createGeometries(model) {
      const geometries = [];
      model.traverse((child) => {
        if (child.isMesh && child.geometry.isBufferGeometry && child.geometry.attributes.position.count < 1e5) {
          const geometry = child.geometry.clone();
          const matrix = new THREE.Matrix4();
          matrix.copy(child.matrixWorld);
          geometry.applyMatrix4(matrix);
          if (geometry.isBufferGeometry) {
            Object.keys(geometry.attributes).forEach((key) => {
              if (key !== "position") {
                geometry.deleteAttribute(key);
              }
            });
            geometries.push(simplifyGeometry(geometry, 0.1));
          }
        }
      });
      const mergedGeometry = mergeGeometries(geometries);
      return mergedGeometry;
    }
    let MeshGeometries = null;
    watch(
      () => pState.value,
      (state) => {
        if (!state.scene) return;
        MeshGeometries = createGeometries(state.scene);
      }
    );
    return (_ctx, _cache) => {
      return _unref$1(pState) ? (_openBlock$1(), _createElementBlock("primitive", {
        key: 0,
        object: _unref$1(pState)?.scene,
        scale: 1,
        position: [3, -1, -3]
      }, [
        _createElementVNode$1("TresMesh", { geometry: _unref$1(MeshGeometries) }, [
          _cache[0] || (_cache[0] = _createElementVNode$1("TresMeshBasicMaterial", {
            color: "#000000",
            transparent: "",
            opacity: 0
          }, null, -1)),
          _createVNode$1(_sfc_main$2, {
            thickness: _ctx.thickness,
            screenspace: _ctx.screenspace,
            color: _ctx.color
          }, null, 8, ["thickness", "screenspace", "color"])
        ], 8, _hoisted_2$1)
      ], 8, _hoisted_1$1)) : _createCommentVNode("", true);
    };
  }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,createVNode:_createVNode,Suspense:_Suspense,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock,mergeProps:_mergeProps} = await importShared('vue');

const _hoisted_1 = {
  position: [0, 0.9, 0],
  name: "torus"
};
const _hoisted_2 = {
  position: [-2.5, 0.5, 2.5],
  "receive-shadow": "",
  "cast-shadow": "",
  name: "cube"
};
const {ACESFilmicToneMapping} = await importShared('three');

const {reactive} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "outline",
  setup(__props) {
    const state = reactive({
      alpha: true,
      toneMapping: ACESFilmicToneMapping,
      windowSize: true,
      clearColor: "#000000"
    });
    const controlsState = reactive({
      enableDamping: true,
      autoRotate: false
    });
    const outlineState = reactive({
      color: "#ff00ae",
      thickness: 0.1,
      screenspace: false
    });
    const paneControl = new Pane();
    paneControl.addBinding(outlineState, "color", {
      label: "颜色"
    });
    paneControl.addBinding(outlineState, "thickness", {
      label: "thickness",
      min: 0,
      max: 2,
      step: 0.01
    });
    paneControl.addBinding(outlineState, "screenspace", {
      label: "space"
    });
    const outlineModelState = reactive({
      color: "#ffffff",
      thickness: 0.026,
      screenspace: false
    });
    paneControl.addBinding(outlineModelState, "color", {
      label: "模型边框颜色"
    });
    paneControl.addBinding(outlineModelState, "thickness", {
      label: "模型边框粗细",
      min: 0,
      max: 0.2,
      step: 1e-3
    });
    paneControl.addBinding(outlineModelState, "screenspace", {
      label: "模型边框类型"
    });
    return (_ctx, _cache) => {
      return _openBlock(), _createBlock(_unref(ol), _mergeProps(state, { "window-size": "" }), {
        default: _withCtx(() => [
          _cache[4] || (_cache[4] = _createElementVNode("TresPerspectiveCamera", {
            position: [10, 10, 10],
            fov: 45,
            near: 1,
            far: 1e3
          }, null, -1)),
          _createVNode(_unref(Kk), _normalizeProps(_guardReactiveProps(controlsState)), null, 16),
          _cache[5] || (_cache[5] = _createElementVNode("TresAmbientLight", { intensity: 0.5 }, null, -1)),
          _cache[6] || (_cache[6] = _createElementVNode("TresDirectionalLight", {
            position: [15, 15, 15],
            intensity: 1
          }, null, -1)),
          _createElementVNode("TresMesh", _hoisted_1, [
            _cache[0] || (_cache[0] = _createElementVNode("TresTorusKnotGeometry", { args: [1, 0.35, 100, 32] }, null, -1)),
            _cache[1] || (_cache[1] = _createElementVNode("TresMeshStandardMaterial", {
              color: "#ff33ff",
              roughness: 0.3,
              metalness: 0.5
            }, null, -1)),
            _createVNode(_sfc_main$2, _normalizeProps(_guardReactiveProps(outlineState)), null, 16)
          ]),
          _createElementVNode("TresMesh", _hoisted_2, [
            _cache[2] || (_cache[2] = _createElementVNode("TresCylinderGeometry", { args: [1.5, 1.5, 2] }, null, -1)),
            _cache[3] || (_cache[3] = _createElementVNode("TresMeshStandardMaterial", {
              color: 3407871,
              roughness: 0,
              metalness: 0
            }, null, -1)),
            _createVNode(_sfc_main$2)
          ]),
          (_openBlock(), _createBlock(_Suspense, null, {
            default: _withCtx(() => [
              _createVNode(_sfc_main$1, _normalizeProps(_guardReactiveProps(outlineModelState)), null, 16)
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
//# sourceMappingURL=outline.BAVJaTta1767105581793.js.map
