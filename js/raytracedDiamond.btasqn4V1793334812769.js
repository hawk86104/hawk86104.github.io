import{importShared as g,GLTFLoader as W}from"./3d-tiles-renderer.0ZkQEcW81793334812769.js";import{OrbitControls_default as $}from"./index.DFUkrMeP1793334812769.js";import{Pane as j}from"./tweakpane.BQRZXf8M1793334812769.js";import{loading as Y}from"./domCanvas.DPY_p4nQ1793334812769.js";import"./default.vue_vue_type_script_setup_true_lang.Do7UZdsM1793334812769.js";import"./three-mesh-ui.module.CkSX5wjT1793334812769.js";import"./domPanel.vue_vue_type_style_index_0_lang.DOGU2Ui81793334812769.js";import{useTresExperience as q}from"./useTresExperience.RQIS_IQg1793334812769.js";import{EXRLoader as K}from"./EXRLoader.ZhxPHXYg1793334812769.js";import{Reflector as X}from"./Reflector.B1PEXQW41793334812769.js";import{getIndexArray as Z,getVertexCount as J,BYTES_PER_NODE as B,IS_LEAF as Q,COUNT as ee,OFFSET as te,RIGHT_NODE as re,SPLIT_AXIS as ie,BOUNDING_DATA_INDEX as ne,MeshBVH as oe,SAH as ae}from"./MeshBVH.CXgdyPuu1793334812769.js";const{DataTexture:ce,FloatType:F,IntType:T,UnsignedIntType:A,ByteType:P,UnsignedByteType:E,ShortType:se,UnsignedShortType:le,RedFormat:de,RGFormat:ue,RGBAFormat:N,RedIntegerFormat:me,RGIntegerFormat:fe,RGBAIntegerFormat:z,NearestFilter:R}=await g("three");function ve(n){switch(n){case 1:return"R";case 2:return"RG";case 3:return"RGBA";case 4:return"RGBA"}throw new Error}function he(n){switch(n){case 1:return de;case 2:return ue;case 3:return N;case 4:return N}}function O(n){switch(n){case 1:return me;case 2:return fe;case 3:return z;case 4:return z}}class V extends ce{constructor(){super(),this.minFilter=R,this.magFilter=R,this.generateMipmaps=!1,this.overrideItemSize=null,this._forcedType=null}updateFrom(e){const t=this.overrideItemSize,i=e.itemSize,r=e.count;if(t!==null){if(i*r%t!==0)throw new Error("VertexAttributeTexture: overrideItemSize must divide evenly into buffer length.");e.itemSize=t,e.count=r*i/t}const o=e.itemSize,a=e.count,f=e.normalized,s=e.array.constructor,l=s.BYTES_PER_ELEMENT;let v=this._forcedType,u=o;if(v===null)switch(s){case Float32Array:v=F;break;case Uint8Array:case Uint16Array:case Uint32Array:v=A;break;case Int8Array:case Int16Array:case Int32Array:v=T;break}let c,d,h,p,x=ve(o);switch(v){case F:h=1,d=he(o),f&&l===1?(p=s,x+="8",s===Uint8Array?c=E:(c=P,x+="_SNORM")):(p=Float32Array,x+="32F",c=F);break;case T:x+=l*8+"I",h=f?Math.pow(2,s.BYTES_PER_ELEMENT*8-1):1,d=O(o),l===1?(p=Int8Array,c=P):l===2?(p=Int16Array,c=se):(p=Int32Array,c=T);break;case A:x+=l*8+"UI",h=f?Math.pow(2,s.BYTES_PER_ELEMENT*8-1):1,d=O(o),l===1?(p=Uint8Array,c=E):l===2?(p=Uint16Array,c=le):(p=Uint32Array,c=A);break}u===3&&(d===N||d===z)&&(u=4);const m=Math.ceil(Math.sqrt(a))||1,I=u*m*m,b=new p(I),L=e.normalized;e.normalized=!1;for(let D=0;D<a;D++){const M=u*D;b[M]=e.getX(D)/h,o>=2&&(b[M+1]=e.getY(D)/h),o>=3&&(b[M+2]=e.getZ(D)/h,u===4&&(b[M+3]=1)),o>=4&&(b[M+3]=e.getW(D)/h)}e.normalized=L,this.internalFormat=x,this.format=d,this.type=c,this.image.width=m,this.image.height=m,this.image.data=b,this.needsUpdate=!0,this.dispose(),e.itemSize=i,e.count=r}}class pe extends V{constructor(){super(),this._forcedType=A}}class ye extends V{constructor(){super(),this._forcedType=F}}const{DataTexture:H,FloatType:xe,UnsignedIntType:ge,RGBAFormat:be,RGIntegerFormat:De,NearestFilter:w,BufferAttribute:Ie}=await g("three");class Me{constructor(){this.index=new pe,this.position=new ye,this.bvhBounds=new H,this.bvhContents=new H,this._cachedIndexAttr=null,this.index.overrideItemSize=3}updateFrom(e){const{geometry:t}=e;if(_e(e,this.bvhBounds,this.bvhContents),this.position.updateFrom(t.attributes.position),e.indirect){const i=e._indirectBuffer;if(this._cachedIndexAttr===null||this._cachedIndexAttr.count!==i.length)if(t.index)this._cachedIndexAttr=t.index.clone();else{const r=Z(J(t));this._cachedIndexAttr=new Ie(r,1,!1)}we(t,i,this._cachedIndexAttr),this.index.updateFrom(this._cachedIndexAttr)}else this.index.updateFrom(t.index)}dispose(){const{index:e,position:t,bvhBounds:i,bvhContents:r}=this;e&&e.dispose(),t&&t.dispose(),i&&i.dispose(),r&&r.dispose()}}function we(n,e,t){const i=t.array,r=n.index?n.index.array:null;for(let o=0,a=e.length;o<a;o++){const f=3*o,s=3*e[o];for(let l=0;l<3;l++)i[f+l]=r?r[s+l]:s+l}}function _e(n,e,t){const i=n._roots;if(i.length!==1)throw new Error("MeshBVHUniformStruct: Multi-root BVHs not supported.");const r=i[0],o=new Uint16Array(r),a=new Uint32Array(r),f=new Float32Array(r),s=r.byteLength/B,l=2*Math.ceil(Math.sqrt(s/2)),v=new Float32Array(4*l*l),u=Math.ceil(Math.sqrt(s)),c=new Uint32Array(2*u*u);for(let d=0;d<s;d++){const h=d*B/4,p=h*2,x=ne(h);for(let m=0;m<3;m++)v[8*d+0+m]=f[x+0+m],v[8*d+4+m]=f[x+3+m];if(Q(p,o)){const m=ee(p,o),I=te(h,a),b=4294901760|m;c[d*2+0]=b,c[d*2+1]=I}else{const m=4*re(h,a)/B,I=ie(h,a);c[d*2+0]=I,c[d*2+1]=m}}e.image.data=v,e.image.width=l,e.image.height=l,e.format=be,e.type=xe,e.internalFormat="RGBA32F",e.minFilter=w,e.magFilter=w,e.generateMipmaps=!1,e.needsUpdate=!0,e.dispose(),t.image.data=c,t.image.width=u,t.image.height=u,t.format=De,t.type=ge,t.internalFormat="RG32UI",t.minFilter=w,t.magFilter=w,t.generateMipmaps=!1,t.needsUpdate=!0,t.dispose()}const Fe=`

// A stack of uint32 indices can can store the indices for
// a perfectly balanced tree with a depth up to 31. Lower stack
// depth gets higher performance.
//
// However not all trees are balanced. Best value to set this to
// is the trees max depth.
#ifndef BVH_STACK_DEPTH
#define BVH_STACK_DEPTH 60
#endif

#ifndef INFINITY
#define INFINITY 1e20
#endif

// Utilities
uvec4 uTexelFetch1D( usampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

ivec4 iTexelFetch1D( isampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 texelFetch1D( sampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 textureSampleBarycoord( sampler2D tex, vec3 barycoord, uvec3 faceIndices ) {

	return
		barycoord.x * texelFetch1D( tex, faceIndices.x ) +
		barycoord.y * texelFetch1D( tex, faceIndices.y ) +
		barycoord.z * texelFetch1D( tex, faceIndices.z );

}

void ndcToCameraRay(
	vec2 coord, mat4 cameraWorld, mat4 invProjectionMatrix,
	out vec3 rayOrigin, out vec3 rayDirection
) {

	// get camera look direction and near plane for camera clipping
	vec4 lookDirection = cameraWorld * vec4( 0.0, 0.0, - 1.0, 0.0 );
	vec4 nearVector = invProjectionMatrix * vec4( 0.0, 0.0, - 1.0, 1.0 );
	float near = abs( nearVector.z / nearVector.w );

	// get the camera direction and position from camera matrices
	vec4 origin = cameraWorld * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec4 direction = invProjectionMatrix * vec4( coord, 0.5, 1.0 );
	direction /= direction.w;
	direction = cameraWorld * direction - origin;

	// slide the origin along the ray until it sits at the near clip plane position
	origin.xyz += direction.xyz * near / dot( direction, lookDirection );

	rayOrigin = origin.xyz;
	rayDirection = direction.xyz;

}
`,Ae=`

#ifndef TRI_INTERSECT_EPSILON
#define TRI_INTERSECT_EPSILON 1e-5
#endif

// Raycasting
bool intersectsBounds( vec3 rayOrigin, vec3 rayDirection, vec3 boundsMin, vec3 boundsMax, out float dist ) {

	// https://www.reddit.com/r/opengl/comments/8ntzz5/fast_glsl_ray_box_intersection/
	// https://tavianator.com/2011/ray_box.html
	vec3 invDir = 1.0 / rayDirection;

	// find intersection distances for each plane
	vec3 tMinPlane = invDir * ( boundsMin - rayOrigin );
	vec3 tMaxPlane = invDir * ( boundsMax - rayOrigin );

	// get the min and max distances from each intersection
	vec3 tMinHit = min( tMaxPlane, tMinPlane );
	vec3 tMaxHit = max( tMaxPlane, tMinPlane );

	// get the furthest hit distance
	vec2 t = max( tMinHit.xx, tMinHit.yz );
	float t0 = max( t.x, t.y );

	// get the minimum hit distance
	t = min( tMaxHit.xx, tMaxHit.yz );
	float t1 = min( t.x, t.y );

	// set distance to 0.0 if the ray starts inside the box
	dist = max( t0, 0.0 );

	return t1 >= dist;

}

bool intersectsTriangle(
	vec3 rayOrigin, vec3 rayDirection, vec3 a, vec3 b, vec3 c,
	out vec3 barycoord, out vec3 norm, out float dist, out float side
) {

	// https://stackoverflow.com/questions/42740765/intersection-between-line-and-triangle-in-3d
	vec3 edge1 = b - a;
	vec3 edge2 = c - a;
	norm = cross( edge1, edge2 );

	float det = - dot( rayDirection, norm );
	float invdet = 1.0 / det;

	vec3 AO = rayOrigin - a;
	vec3 DAO = cross( AO, rayDirection );

	vec4 uvt;
	uvt.x = dot( edge2, DAO ) * invdet;
	uvt.y = - dot( edge1, DAO ) * invdet;
	uvt.z = dot( AO, norm ) * invdet;
	uvt.w = 1.0 - uvt.x - uvt.y;

	// set the hit information
	barycoord = uvt.wxy; // arranged in A, B, C order
	dist = uvt.z;
	side = sign( det );
	norm = side * normalize( norm );

	// add an epsilon to avoid misses between triangles
	uvt += vec4( TRI_INTERSECT_EPSILON );

	return all( greaterThanEqual( uvt, vec4( 0.0 ) ) );

}

bool intersectTriangles(
	// geometry info and triangle range
	sampler2D positionAttr, usampler2D indexAttr, uint offset, uint count,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// outputs
	inout float minDistance, inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	bool found = false;
	vec3 localBarycoord, localNormal;
	float localDist, localSide;
	for ( uint i = offset, l = offset + count; i < l; i ++ ) {

		uvec3 indices = uTexelFetch1D( indexAttr, i ).xyz;
		vec3 a = texelFetch1D( positionAttr, indices.x ).rgb;
		vec3 b = texelFetch1D( positionAttr, indices.y ).rgb;
		vec3 c = texelFetch1D( positionAttr, indices.z ).rgb;

		if (
			intersectsTriangle( rayOrigin, rayDirection, a, b, c, localBarycoord, localNormal, localDist, localSide )
			&& localDist < minDistance
		) {

			found = true;
			minDistance = localDist;

			faceIndices = uvec4( indices.xyz, i );
			faceNormal = localNormal;

			side = localSide;
			barycoord = localBarycoord;
			dist = localDist;

		}

	}

	return found;

}

bool intersectsBVHNodeBounds( vec3 rayOrigin, vec3 rayDirection, sampler2D bvhBounds, uint currNodeIndex, out float dist ) {

	uint cni2 = currNodeIndex * 2u;
	vec3 boundsMin = texelFetch1D( bvhBounds, cni2 ).xyz;
	vec3 boundsMax = texelFetch1D( bvhBounds, cni2 + 1u ).xyz;
	return intersectsBounds( rayOrigin, rayDirection, boundsMin, boundsMax, dist );

}

// use a macro to hide the fact that we need to expand the struct into separate fields
#define	bvhIntersectFirstHit(		bvh,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)	_bvhIntersectFirstHit(		bvh.position, bvh.index, bvh.bvhBounds, bvh.bvhContents,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)

bool _bvhIntersectFirstHit(
	// bvh info
	sampler2D bvh_position, usampler2D bvh_index, sampler2D bvh_bvhBounds, usampler2D bvh_bvhContents,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// output variables split into separate variables due to output precision
	inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	// stack needs to be twice as long as the deepest tree we expect because
	// we push both the left and right child onto the stack every traversal
	int ptr = 0;
	uint stack[ BVH_STACK_DEPTH ];
	stack[ 0 ] = 0u;

	float triangleDistance = INFINITY;
	bool found = false;
	while ( ptr > - 1 && ptr < BVH_STACK_DEPTH ) {

		uint currNodeIndex = stack[ ptr ];
		ptr --;

		// check if we intersect the current bounds
		float boundsHitDistance;
		if (
			! intersectsBVHNodeBounds( rayOrigin, rayDirection, bvh_bvhBounds, currNodeIndex, boundsHitDistance )
			|| boundsHitDistance > triangleDistance
		) {

			continue;

		}

		uvec2 boundsInfo = uTexelFetch1D( bvh_bvhContents, currNodeIndex ).xy;
		bool isLeaf = bool( boundsInfo.x & 0xffff0000u );

		if ( isLeaf ) {

			uint count = boundsInfo.x & 0x0000ffffu;
			uint offset = boundsInfo.y;

			found = intersectTriangles(
				bvh_position, bvh_index, offset, count,
				rayOrigin, rayDirection, triangleDistance,
				faceIndices, faceNormal, barycoord, side, dist
			) || found;

		} else {

			uint leftIndex = currNodeIndex + 1u;
			uint splitAxis = boundsInfo.x & 0x0000ffffu;
			uint rightIndex = boundsInfo.y;

			bool leftToRight = rayDirection[ splitAxis ] >= 0.0;
			uint c1 = leftToRight ? leftIndex : rightIndex;
			uint c2 = leftToRight ? rightIndex : leftIndex;

			// set c2 in the stack so we traverse it later. We need to keep track of a pointer in
			// the stack while we traverse. The second pointer added is the one that will be
			// traversed first
			ptr ++;
			stack[ ptr ] = c2;

			ptr ++;
			stack[ ptr ] = c1;

		}

	}

	return found;

}
`,Ce=`
struct BVH {

	usampler2D index;
	sampler2D position;

	sampler2D bvhBounds;
	usampler2D bvhContents;

};
`,Be=Ce,Te=`
	${Fe}
	${Ae}
`,C=await g("three");function Se({envMap:n,camera:e,resolution:t=new C.Vector2(1,1),color:i=new C.Color(1,1,1),ior:r=2.4,bounces:o=3,correctMips:a=!0,chromaticAberration:f=!0,aberrationStrength:s=.01}={}){return new C.ShaderMaterial({uniforms:{envMap:{value:n},bvh:{value:new Me},bounces:{value:o},color:{value:i},ior:{value:r},correctMips:{value:a},projectionMatrixInv:{value:e.projectionMatrixInverse},viewMatrixInv:{value:e.matrixWorld},chromaticAberration:{value:f},aberrationStrength:{value:s},resolution:{value:t}},vertexShader:`
    varying vec3 vWorldPosition;
    varying vec3 vNormal;
    uniform mat4 viewMatrixInv;
    void main() {
        vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
        vNormal = (viewMatrixInv * vec4(normalMatrix * normal, 0.0)).xyz;
        gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
    }
    `,fragmentShader:`
    precision highp isampler2D;
    precision highp usampler2D;
    varying vec3 vWorldPosition;
    varying vec3 vNormal;
    uniform samplerCube envMap;
    uniform float bounces;
    ${Be}
    ${Te}
    uniform BVH bvh;
    uniform float ior;
    uniform vec3 color;
    uniform bool correctMips;
    uniform bool chromaticAberration;
    uniform mat4 projectionMatrixInv;
    uniform mat4 viewMatrixInv;
    uniform mat4 modelMatrix;
    uniform vec2 resolution;
    uniform float aberrationStrength;
    vec3 totalInternalReflection(vec3 ro, vec3 rd, vec3 normal, float ior, mat4 modelMatrixInverse) {
        vec3 rayOrigin = ro;
        vec3 rayDirection = rd;
        rayDirection = refract(rayDirection, normal, 1.0 / ior);
        rayOrigin = vWorldPosition + rayDirection * 0.001;
        rayOrigin = (modelMatrixInverse * vec4(rayOrigin, 1.0)).xyz;
        rayDirection = normalize((modelMatrixInverse * vec4(rayDirection, 0.0)).xyz);
        for(float i = 0.0; i < bounces; i++) {
            uvec4 faceIndices = uvec4( 0u );
            vec3 faceNormal = vec3( 0.0, 0.0, 1.0 );
            vec3 barycoord = vec3( 0.0 );
            float side = 1.0;
            float dist = 0.0;
            bvhIntersectFirstHit( bvh, rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist );
            vec3 hitPos = rayOrigin + rayDirection * max(dist - 0.001, 0.0);
            vec3 tempDir = refract(rayDirection, faceNormal, ior);
            if (length(tempDir) != 0.0) {
                rayDirection = tempDir;
                break;
            }
            rayDirection = reflect(rayDirection, faceNormal);
            rayOrigin = hitPos + rayDirection * 0.01;
        }
        rayDirection = normalize((modelMatrix * vec4(rayDirection, 0.0)).xyz);
        return rayDirection;
    }
    void main() {
        mat4 modelMatrixInverse = inverse(modelMatrix);
        vec2 uv = gl_FragCoord.xy / resolution;
        vec3 directionCamPerfect = (projectionMatrixInv * vec4(uv * 2.0 - 1.0, 0.0, 1.0)).xyz;
        directionCamPerfect = (viewMatrixInv * vec4(directionCamPerfect, 0.0)).xyz;
        directionCamPerfect = normalize(directionCamPerfect);
        vec3 normal = vNormal;
        vec3 rayOrigin = cameraPosition;
        vec3 rayDirection = normalize(vWorldPosition - cameraPosition);
        vec3 finalColor;
        if (chromaticAberration) {
        vec3 rayDirectionR = totalInternalReflection(rayOrigin, rayDirection, normal, max(ior * (1.0 - aberrationStrength), 1.0), modelMatrixInverse);
        vec3 rayDirectionG = totalInternalReflection(rayOrigin, rayDirection, normal, max(ior, 1.0), modelMatrixInverse);
        vec3 rayDirectionB = totalInternalReflection(rayOrigin, rayDirection, normal, max(ior * (1.0 + aberrationStrength), 1.0), modelMatrixInverse);
        float finalColorR = textureGrad(envMap, rayDirectionR, dFdx(correctMips ? directionCamPerfect: rayDirection), dFdy(correctMips ? directionCamPerfect: rayDirection)).r;
        float finalColorG = textureGrad(envMap, rayDirectionG, dFdx(correctMips ? directionCamPerfect: rayDirection), dFdy(correctMips ? directionCamPerfect: rayDirection)).g;
        float finalColorB = textureGrad(envMap, rayDirectionB, dFdx(correctMips ? directionCamPerfect: rayDirection), dFdy(correctMips ? directionCamPerfect: rayDirection)).b;
        finalColor = vec3(finalColorR, finalColorG, finalColorB) * color;
        } else {
            rayDirection = totalInternalReflection(rayOrigin, rayDirection, normal, max(ior, 1.0), modelMatrixInverse);
            finalColor = textureGrad(envMap, rayDirection, dFdx(correctMips ? directionCamPerfect: rayDirection), dFdy(correctMips ? directionCamPerfect: rayDirection)).rgb;
            finalColor *= color;
        }
        gl_FragColor = vec4(vec3(finalColor), 1.0);
    }
    `})}function Ne(n,e={}){n.boundsTree=new oe(n.toNonIndexed(),{strategy:ae});const t=new C.Mesh(n,Se(e));return t.material.uniforms.bvh.value.updateFrom(n.boundsTree),t.castShadow=!0,t.receiveShadow=!0,t}function ze(n,e,t){n.uniforms.resolution.value.set(e,t)}const y=await g("three"),Pe={assetBase:"/plugins/basic/materials/raytracedDiamond/",async setup({renderer:n,scene:e,camera:t,resolveAsset:i}){e.background=new y.Color(0);const r=await new K().loadAsync(i("colorful_studio.exr"));r.mapping=y.EquirectangularReflectionMapping,r.generateMipmaps=!0,r.minFilter=y.LinearMipmapLinearFilter,e.environment=r;const o=new X(new y.CircleGeometry(70,64),{clipBias:.003,textureWidth:1024,textureHeight:1024});o.rotation.x=-Math.PI/2,o.position.y=-.02,e.add(o);const a=new y.Mesh(new y.CircleGeometry(70,64),new y.MeshStandardMaterial({color:394758,roughness:.18,metalness:.35,envMapIntensity:.5,transparent:!0,opacity:.78}));a.rotation.x=-Math.PI/2,e.add(a);const s=(await new W().loadAsync(i("diamond.glb"))).scene.children[0].children[0].children[0].children[0].children[0].geometry;s.scale(10,10,10),s.translate(0,5,0);const l=new y.WebGLCubeRenderTarget(512,{type:y.HalfFloatType});l.fromEquirectangularTexture(n,r);const v=Ne(s,{envMap:l.texture,camera:t,resolution:new y.Vector2(1,1),aberrationStrength:.05});e.add(v);const u=v.material.uniforms;return{setParameters(c){u.bounces.value=c.bounces,u.ior.value=c.ior,u.aberrationStrength.value=c.aberrationStrength,u.chromaticAberration.value=c.chromaticAberration,u.correctMips.value=c.correctMips},resize({bufferWidth:c,bufferHeight:d}){ze(v.material,c,d)},dispose(){s.dispose(),v.material.dispose(),o.dispose(),o.geometry.dispose(),a.geometry.dispose(),a.material.dispose(),r.dispose(),l.dispose()}}}},{withAsyncContext:Ee,defineComponent:Re}=await g("vue"),Oe=Re({__name:"index",props:{bounces:{},ior:{},aberrationStrength:{},chromaticAberration:{type:Boolean},correctMips:{type:Boolean}},emits:["progress"],async setup(n,{emit:e}){let t,i;const r=n,o=e;return[t,i]=Ee(()=>q(Pe,r,a=>o("progress",a))),await t,i(),(a,f)=>null}}),{defineComponent:He}=await g("vue"),{unref:S,createVNode:_,createElementVNode:ke,mergeProps:Ge,Suspense:Ue,withCtx:k,openBlock:G,createBlock:Ve,resolveComponent:Le,Fragment:We,createElementBlock:$e}=await g("vue"),{onUnmounted:je,reactive:Ye,ref:U}=await g("vue"),{NoToneMapping:qe}=await g("three"),at=He({__name:"raytracedDiamond",setup(n){const e=U(!1),t=U(0),i=Ye({bounces:3,ior:2.4,aberrationStrength:.05,chromaticAberration:!0,correctMips:!0}),r=new j({title:"钻石光学参数"});return r.addBinding(i,"ior",{label:"折射率 IOR",min:1,max:3,step:.01}),r.addBinding(i,"bounces",{label:"内部反弹",min:1,max:10,step:1}),r.addBinding(i,"aberrationStrength",{label:"色散强度",min:0,max:.15,step:.001}),r.addBinding(i,"chromaticAberration",{label:"启用色散"}),r.addBinding(i,"correctMips",{label:"Mip 校正"}),je(()=>r.dispose()),(o,a)=>{const f=Le("TresCanvas");return G(),$e(We,null,[_(S(Y),{"progress-value":t.value,finished:e.value,"show-progress":""},null,8,["progress-value","finished"]),_(f,{"clear-color":"#000000",antialias:!1,"tone-mapping":S(qe),"window-size":""},{default:k(()=>[a[2]||(a[2]=ke("TresPerspectiveCamera",{position:[30,18,30],fov:50,near:.1,far:500},null,-1)),_(S($),{"make-default":"",target:[0,6,0],"min-distance":12,"max-distance":120,"max-polar-angle":Math.PI*.49},null,8,["max-polar-angle"]),(G(),Ve(Ue,{onResolve:a[1]||(a[1]=s=>e.value=!0)},{default:k(()=>[_(Oe,Ge(i,{onProgress:a[0]||(a[0]=s=>t.value=s)}),null,16)]),_:1}))]),_:1},8,["tone-mapping"])],64)}}});export{at as default};
