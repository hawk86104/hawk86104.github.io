import { importShared, Fs, _l, rz, NA, kk, no, zr } from './index.BxB45aCK1767105581793.js';
import { useFBO, useTexture } from './customShaderMaterial.vue_vue_type_script_setup_true_lang.rDMIDGqx1767105581793.js';
import './index.vue_vue_type_script_setup_true_lang.D7-hpzmy1767105581793.js';
import { instance } from './Resource.Dxl2bF_-1767105581793.js';
import { gsapWithCSS } from './index.Dxfioss_1767105581793.js';
import { EffectComposer, RenderPass, ShaderPass } from './RenderPass.XMM8w9Yd1767105581793.js';
import { UnrealBloomPass } from './UnrealBloomPass.DHFMJH-X1767105581793.js';
import { BatchedRenderer, QuarksLoader, ConstantValue, ConstantColor } from './three.quarks.esm.C9WjGUm11767105581793.js';

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
const {OrthographicCamera,PlaneGeometry,Mesh: Mesh$1} = await importShared('three');
class FullScreenQuad {
  constructor(material) {
    __publicField(this, "camera", new OrthographicCamera(-1, 1, 1, -1, 0, 1));
    __publicField(this, "geometry", new PlaneGeometry(2, 2));
    __publicField(this, "mesh");
    this.mesh = new Mesh$1(this.geometry, material);
  }
  get material() {
    return this.mesh.material;
  }
  set material(value) {
    this.mesh.material = value;
  }
  dispose() {
    this.mesh.geometry.dispose();
  }
  render(renderer) {
    renderer.render(this.mesh, this.camera);
  }
}

const CopyShader = {
  uniforms: {
    tDiffuse: { value: null },
    opacity: { value: 1 }
  },
  vertexShader: (
    /* glsl */
    `
    varying vec2 vUv;

    void main() {

    	vUv = uv;
    	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

    }
  `
  ),
  fragmentShader: (
    /* glsl */
    `
    uniform float opacity;

    uniform sampler2D tDiffuse;

    varying vec2 vUv;

    void main() {

    	vec4 texel = texture2D( tDiffuse, vUv );
    	gl_FragColor = opacity * texel;

    }
  `
  )
};

const {BackSide,BoxGeometry,InstancedMesh,Mesh,MeshLambertMaterial,MeshStandardMaterial,PointLight,Scene,Object3D} = await importShared('three');


/**
 * This class represents a scene with a basic room setup that can be used as
 * input for {@link PMREMGenerator#fromScene}. The resulting PMREM represents the room's
 * lighting and can be used for Image Based Lighting by assigning it to {@link Scene#environment}
 * or directly as an environment map to PBR materials.
 *
 * The implementation is based on the [EnvironmentScene](https://github.com/google/model-viewer/blob/master/packages/model-viewer/src/three-components/EnvironmentScene.ts)
 * component from the `model-viewer` project.
 *
 * ```js
 * const environment = new RoomEnvironment();
 * const pmremGenerator = new THREE.PMREMGenerator( renderer );
 *
 * const envMap = pmremGenerator.fromScene( environment ).texture;
 * scene.environment = envMap;
 * ```
 *
 * @augments Scene
 * @three_import import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
 */
class RoomEnvironment extends Scene {

	constructor() {

		super();

		const geometry = new BoxGeometry();
		geometry.deleteAttribute( 'uv' );

		const roomMaterial = new MeshStandardMaterial( { side: BackSide } );
		const boxMaterial = new MeshStandardMaterial();

		const mainLight = new PointLight( 0xffffff, 900, 28, 2 );
		mainLight.position.set( 0.418, 16.199, 0.300 );
		this.add( mainLight );

		const room = new Mesh( geometry, roomMaterial );
		room.position.set( -0.757, 13.219, 0.717 );
		room.scale.set( 31.713, 28.305, 28.591 );
		this.add( room );

		const boxes = new InstancedMesh( geometry, boxMaterial, 6 );
		const transform = new Object3D();

		// box1
		transform.position.set( -10.906, 2.009, 1.846 );
		transform.rotation.set( 0, -0.195, 0 );
		transform.scale.set( 2.328, 7.905, 4.651 );
		transform.updateMatrix();
		boxes.setMatrixAt( 0, transform.matrix );

		// box2
		transform.position.set( -5.607, -0.754, -0.758 );
		transform.rotation.set( 0, 0.994, 0 );
		transform.scale.set( 1.970, 1.534, 3.955 );
		transform.updateMatrix();
		boxes.setMatrixAt( 1, transform.matrix );

		// box3
		transform.position.set( 6.167, 0.857, 7.803 );
		transform.rotation.set( 0, 0.561, 0 );
		transform.scale.set( 3.927, 6.285, 3.687 );
		transform.updateMatrix();
		boxes.setMatrixAt( 2, transform.matrix );

		// box4
		transform.position.set( -2.017, 0.018, 6.124 );
		transform.rotation.set( 0, 0.333, 0 );
		transform.scale.set( 2.002, 4.566, 2.064 );
		transform.updateMatrix();
		boxes.setMatrixAt( 3, transform.matrix );

		// box5
		transform.position.set( 2.291, -0.756, -2.621 );
		transform.rotation.set( 0, -0.286, 0 );
		transform.scale.set( 1.546, 1.552, 1.496 );
		transform.updateMatrix();
		boxes.setMatrixAt( 4, transform.matrix );

		// box6
		transform.position.set( -2.193, -0.369, -5.547 );
		transform.rotation.set( 0, 0.516, 0 );
		transform.scale.set( 3.875, 3.487, 2.986 );
		transform.updateMatrix();
		boxes.setMatrixAt( 5, transform.matrix );

		this.add( boxes );


		// -x right
		const light1 = new Mesh( geometry, createAreaLightMaterial( 50 ) );
		light1.position.set( -16.116, 14.37, 8.208 );
		light1.scale.set( 0.1, 2.428, 2.739 );
		this.add( light1 );

		// -x left
		const light2 = new Mesh( geometry, createAreaLightMaterial( 50 ) );
		light2.position.set( -16.109, 18.021, -8.207 );
		light2.scale.set( 0.1, 2.425, 2.751 );
		this.add( light2 );

		// +x
		const light3 = new Mesh( geometry, createAreaLightMaterial( 17 ) );
		light3.position.set( 14.904, 12.198, -1.832 );
		light3.scale.set( 0.15, 4.265, 6.331 );
		this.add( light3 );

		// +z
		const light4 = new Mesh( geometry, createAreaLightMaterial( 43 ) );
		light4.position.set( -0.462, 8.89, 14.520 );
		light4.scale.set( 4.38, 5.441, 0.088 );
		this.add( light4 );

		// -z
		const light5 = new Mesh( geometry, createAreaLightMaterial( 20 ) );
		light5.position.set( 3.235, 11.486, -12.541 );
		light5.scale.set( 2.5, 2.0, 0.1 );
		this.add( light5 );

		// +y
		const light6 = new Mesh( geometry, createAreaLightMaterial( 100 ) );
		light6.position.set( 0.0, 20.0, 0.0 );
		light6.scale.set( 1.0, 0.1, 1.0 );
		this.add( light6 );

	}

	/**
	 * Frees internal resources. This method should be called
	 * when the environment is no longer required.
	 */
	dispose() {

		const resources = new Set();

		this.traverse( ( object ) => {

			if ( object.isMesh ) {

				resources.add( object.geometry );
				resources.add( object.material );

			}

		} );

		for ( const resource of resources ) {

			resource.dispose();

		}

	}

}

function createAreaLightMaterial( intensity ) {

	// create an emissive-only material. see #31348
	const material = new MeshLambertMaterial( {
		color: 0x000000,
		emissive: 0xffffff,
		emissiveIntensity: intensity
	} );

	return material;

}

const sampleFunctions = (
  /* glsl */
  `

	// Without original size argument for power of two targets
	vec4 packedTexture2DLOD( sampler2D tex, vec2 uv, int level ) {

		// the fraction of the uv space used by the target mip
		float targetSubview = 1.0 / pow( 2.0, float( level ) );
		float widthRatio = 2.0 / 3.0;
		vec2 scaledDimensions = vec2( targetSubview * widthRatio, targetSubview );

		// all levels > 0 are on the right third of the texture
		// y is offset from the bottom
		vec2 offset = vec2(
			level > 0 ? widthRatio : 0.0,
			level > 0 ? targetSubview : 0.0
		);

		vec2 samplePoint = mix( offset, offset + scaledDimensions, uv );
		return texture2D( tex, samplePoint );

	}

	vec4 packedTexture2DLOD( sampler2D tex, vec2 uv, float level ) {

		float ratio = mod( level, 1.0 );
		int minLevel = int( floor( level ) );
		int maxLevel = int( ceil( level ) );

		vec4 minValue = packedTexture2DLOD( tex, uv, minLevel );
		vec4 maxValue = packedTexture2DLOD( tex, uv, maxLevel );

		return mix( minValue, maxValue, ratio );

	}

	// With original size argument
	vec4 packedTexture2DLOD( sampler2D tex, vec2 uv, int level, vec2 originalPixelSize ) {

		float floatLevel = float( level );
		vec2 atlasSize;
		atlasSize.x = floor( originalPixelSize.x * 1.5 );
		atlasSize.y = originalPixelSize.y;

		// we stop making mip maps when one dimension == 1
		float maxLevel = min( floor( log2( originalPixelSize.x ) ), floor( log2( originalPixelSize.y ) ) );
		floatLevel = min( floatLevel, maxLevel );

		// use inverse pow of 2 to simulate right bit shift operator
		vec2 currentPixelDimensions = floor( originalPixelSize / pow( 2.0, floatLevel ) );
		vec2 pixelOffset = vec2(
			floatLevel > 0.0 ? originalPixelSize.x : 0.0,
			floatLevel > 0.0 ? currentPixelDimensions.y : 0.0
		);

		// "minPixel / atlasSize" samples the top left piece of the first pixel
		// "maxPixel / atlasSize" samples the bottom right piece of the last pixel
		vec2 minPixel = pixelOffset;
		vec2 maxPixel = pixelOffset + currentPixelDimensions;
		vec2 samplePoint = mix( minPixel, maxPixel, uv );
		samplePoint /= atlasSize;

		vec2 halfPixelSize = 1.0 / ( 2.0 * atlasSize );
		samplePoint = min( samplePoint, maxPixel / atlasSize - halfPixelSize );
		samplePoint = max( samplePoint, minPixel / atlasSize + halfPixelSize );

		return texture2D( tex, samplePoint );

	}

	vec4 packedTexture2DLOD( sampler2D tex, vec2 uv, float level, vec2 originalPixelSize ) {

		float ratio = mod( level, 1.0 );
		int minLevel = int( floor( level ) );
		int maxLevel = int( ceil( level ) );

		vec4 minValue = packedTexture2DLOD( tex, uv, minLevel, originalPixelSize );
		vec4 maxValue = packedTexture2DLOD( tex, uv, maxLevel, originalPixelSize );

		return mix( minValue, maxValue, ratio );

	}

`
);

const {UniformsUtils,Vector2} = await importShared('three');
function clone(shader) {
  const newShader = { ...shader };
  if ("defines" in shader) {
    newShader.defines = { ...shader.defines };
  }
  if ("uniforms" in shader) {
    newShader.uniforms = UniformsUtils.clone(shader.uniforms);
  }
  return newShader;
}
const MipGenerationShader = {
  defines: {
    X_IS_EVEN: 1,
    Y_IS_EVEN: 1
  },
  uniforms: {
    map: { value: null },
    originalMapSize: { value: new Vector2() },
    parentMapSize: { value: new Vector2() },
    parentLevel: { value: 0 }
  },
  vertexShader: (
    /* glsl */
    `
		varying vec2 vUv;
		void main() {

			#include <begin_vertex>
			#include <project_vertex>
			vUv = uv;

		}
	`
  ),
  fragmentShader: (
    /* glsl */
    `
		varying vec2 vUv;
		uniform sampler2D map;
		uniform int parentLevel;
		uniform vec2 parentMapSize;
		uniform vec2 originalMapSize;

		${sampleFunctions}

		#if X_IS_EVEN && Y_IS_EVEN

		#define SAMPLES 4
		#define WIDTH 2
		#define HEIGHT 2

		#elif X_IS_EVEN

		#define SAMPLES 6
		#define WIDTH 2
		#define HEIGHT 3

		#elif Y_IS_EVEN

		#define SAMPLES 6
		#define WIDTH 3
		#define HEIGHT 2

		#else

		#define SAMPLES 9
		#define WIDTH 3
		#define HEIGHT 3

		#endif

		vec4 sampleAt( vec2 uv ) {

			return packedTexture2DLOD( map, uv, parentLevel, originalMapSize );

		}

		void main() {

			vec2 childMapSize = parentMapSize / 2.0;
			// vec2 childPixelSize = 1.0 / childMapSize;
			// vec2 halfChildPixelSize = childPixelSize / 2.0;
			vec2 childPixelPos = floor( vUv * childMapSize );

			vec2 parentPixelSize = 1.0 / parentMapSize;
			vec2 halfParentPixelSize = parentPixelSize / 2.0;
			vec2 parentPixelPos = childPixelPos * 2.0;

			vec2 baseUv = ( parentPixelPos / parentMapSize ) + halfParentPixelSize;

			vec4 samples[ SAMPLES ];
			float weights[ SAMPLES ];

			#if X_IS_EVEN && Y_IS_EVEN

			samples[ 0 ] = sampleAt( baseUv );
			samples[ 1 ] = sampleAt( baseUv + vec2( parentPixelSize.x, 0.0 ) );
			samples[ 2 ] = sampleAt( baseUv + vec2( 0.0, parentPixelSize.y ) );
			samples[ 3 ] = sampleAt( baseUv + vec2( parentPixelSize.x, parentPixelSize.y ) );

			weights[ 0 ] = 0.25;
			weights[ 1 ] = 0.25;
			weights[ 2 ] = 0.25;
			weights[ 3 ] = 0.25;

			#elif X_IS_EVEN

			float wx0 = 0.5;
			float wx1 = 0.5;

			float yden = 2.0 * parentMapSize.y + 1.0;
			float wy0 = ( parentMapSize.y - parentPixelPos.y ) / yden;
			float wy1 = ( parentMapSize.y ) / yden;
			float wy2 = ( parentPixelPos.y + 1.0 ) / yden;

			samples[ 0 ] = sampleAt( baseUv );
			samples[ 1 ] = sampleAt( baseUv + vec2( parentPixelSize.x, 0.0 ) );

			samples[ 2 ] = sampleAt( baseUv + vec2( 0.0, parentPixelSize.y ) );
			samples[ 3 ] = sampleAt( baseUv + vec2( parentPixelSize.x, parentPixelSize.y ) );

			samples[ 4 ] = sampleAt( baseUv + vec2( 0.0, 2.0 * parentPixelSize.y ) );
			samples[ 5 ] = sampleAt( baseUv + vec2( parentPixelSize.x, 2.0 * parentPixelSize.y ) );

			weights[ 0 ] = wx0 * wy0;
			weights[ 1 ] = wx1 * wy0;

			weights[ 2 ] = wx0 * wy1;
			weights[ 3 ] = wx1 * wy1;

			weights[ 4 ] = wx0 * wy2;
			weights[ 5 ] = wx1 * wy2;

			#elif Y_IS_EVEN

			float xden = 2.0 * parentMapSize.x + 1.0;
			float wx0 = ( parentMapSize.x - parentPixelPos.x ) / xden;
			float wx1 = ( parentMapSize.x ) / xden;
			float wx2 = ( parentPixelPos.x + 1.0 ) / xden;

			float wy0 = 0.5;
			float wy1 = 0.5;

			samples[ 0 ] = sampleAt( baseUv );
			samples[ 1 ] = sampleAt( baseUv + vec2( parentPixelSize.x, 0.0 ) );
			samples[ 2 ] = sampleAt( baseUv + vec2( 2.0 * parentPixelSize.x, 0.0 ) );

			samples[ 3 ] = sampleAt( baseUv + vec2( 0.0, parentPixelSize.y ) );
			samples[ 4 ] = sampleAt( baseUv + vec2( parentPixelSize.x, parentPixelSize.y ) );
			samples[ 5 ] = sampleAt( baseUv + vec2( 2.0 * parentPixelSize.x, parentPixelSize.y ) );

			weights[ 0 ] = wx0 * wy0;
			weights[ 1 ] = wx1 * wy0;
			weights[ 2 ] = wx2 * wy0;

			weights[ 3 ] = wx0 * wy1;
			weights[ 4 ] = wx1 * wy1;
			weights[ 5 ] = wx2 * wy1;

			#else

			float xden = 2.0 * parentMapSize.x + 1.0;
			float wx0 = ( parentMapSize.x - parentPixelPos.x ) / xden;
			float wx1 = ( parentMapSize.x ) / xden;
			float wx2 = ( parentPixelPos.x + 1.0 ) / xden;

			float yden = 2.0 * parentMapSize.y + 1.0;
			float wy0 = ( parentMapSize.y - parentPixelPos.y ) / yden;
			float wy1 = ( parentMapSize.y ) / yden;
			float wy2 = ( parentPixelPos.y + 1.0 ) / yden;

			samples[ 0 ] = sampleAt( baseUv );
			samples[ 1 ] = sampleAt( baseUv + vec2( parentPixelSize.x, 0.0 ) );
			samples[ 2 ] = sampleAt( baseUv + vec2( 2.0 * parentPixelSize.x, 0.0 ) );

			samples[ 3 ] = sampleAt( baseUv + vec2( 0.0, parentPixelSize.y ) );
			samples[ 4 ] = sampleAt( baseUv + vec2( parentPixelSize.x, parentPixelSize.y ) );
			samples[ 5 ] = sampleAt( baseUv + vec2( 2.0 * parentPixelSize.x, parentPixelSize.y ) );

			samples[ 6 ] = sampleAt( baseUv + vec2( 0.0, 2.0 * parentPixelSize.y ) );
			samples[ 7 ] = sampleAt( baseUv + vec2( parentPixelSize.x, 2.0 * parentPixelSize.y ) );
			samples[ 8 ] = sampleAt( baseUv + vec2( 2.0 * parentPixelSize.x, 2.0 * parentPixelSize.y ) );

			weights[ 0 ] = wx0 * wy0;
			weights[ 1 ] = wx1 * wy0;
			weights[ 2 ] = wx2 * wy0;

			weights[ 3 ] = wx0 * wy1;
			weights[ 4 ] = wx1 * wy1;
			weights[ 5 ] = wx2 * wy1;

			weights[ 6 ] = wx0 * wy2;
			weights[ 7 ] = wx1 * wy2;
			weights[ 8 ] = wx2 * wy2;

			#endif

			<mipmap_logic>

		}
	`
  )
};

const {Color,ShaderMaterial,MathUtils,WebGLRenderTarget,NearestFilter} = await importShared('three');
const _originalClearColor = new Color();
class PackedMipMapGenerator {
  constructor(mipmapLogic) {
    if (!mipmapLogic) {
      mipmapLogic = /* glsl */
      `

				#pragma unroll_loop
				for ( int i = 0; i < SAMPLES; i ++ ) {

					gl_FragColor += samples[ i ] * weights[ i ];

				}

			`;
    }
    const shader = clone(MipGenerationShader);
    shader.fragmentShader = shader.fragmentShader.replace(/<mipmap_logic>/g, mipmapLogic);
    const mipMaterials = new Array(4);
    mipMaterials[0] = new ShaderMaterial(clone(shader));
    mipMaterials[0].defines.X_IS_EVEN = 0;
    mipMaterials[0].defines.Y_IS_EVEN = 0;
    mipMaterials[1] = new ShaderMaterial(clone(shader));
    mipMaterials[1].defines.X_IS_EVEN = 1;
    mipMaterials[1].defines.Y_IS_EVEN = 0;
    mipMaterials[2] = new ShaderMaterial(clone(shader));
    mipMaterials[2].defines.X_IS_EVEN = 0;
    mipMaterials[2].defines.Y_IS_EVEN = 1;
    mipMaterials[3] = new ShaderMaterial(clone(shader));
    mipMaterials[3].defines.X_IS_EVEN = 1;
    mipMaterials[3].defines.Y_IS_EVEN = 1;
    const swapTarget = new WebGLRenderTarget();
    swapTarget.texture.minFilter = NearestFilter;
    swapTarget.texture.magFilter = NearestFilter;
    this._swapTarget = swapTarget;
    this._copyQuad = new FullScreenQuad(new ShaderMaterial(CopyShader));
    this._mipQuad = new FullScreenQuad(null);
    this._mipMaterials = mipMaterials;
  }
  update(texture, target, renderer, forcePowerOfTwo = false) {
    if (texture.isWebGLRenderTarget) {
      texture = texture.texture;
    }
    const originalAutoClear = renderer.autoClear;
    const originalClearAlpha = renderer.getClearAlpha();
    const originalRenderTarget = renderer.getRenderTarget();
    renderer.getClearColor(_originalClearColor);
    const copyQuad = this._copyQuad;
    const mipQuad = this._mipQuad;
    const swapTarget = this._swapTarget;
    const mipMaterials = this._mipMaterials;
    let width, height;
    if (forcePowerOfTwo) {
      width = MathUtils.floorPowerOfTwo(texture.image.width);
      height = MathUtils.floorPowerOfTwo(texture.image.height);
    } else {
      width = Math.floor(texture.image.width);
      height = Math.floor(texture.image.height);
    }
    const targetWidth = Math.floor(width * 1.5);
    const targetHeight = Math.floor(height);
    target.setSize(targetWidth, targetHeight);
    if (swapTarget.texture.type !== target.texture.type) {
      swapTarget.dispose();
      swapTarget.copy(target);
      swapTarget.texture.image = { ...swapTarget.texture.image };
    } else {
      swapTarget.setSize(targetWidth, targetHeight);
    }
    renderer.autoClear = false;
    renderer.setClearColor(0);
    renderer.setClearAlpha();
    copyQuad.material.uniforms.tDiffuse.value = texture;
    copyQuad.camera.setViewOffset(width, height, 0, 0, targetWidth, targetHeight);
    renderer.setRenderTarget(target);
    renderer.clear();
    copyQuad.render(renderer);
    renderer.setRenderTarget(swapTarget);
    renderer.clear();
    copyQuad.render(renderer);
    let currWidth = width;
    let currHeight = height;
    let mip = 0;
    while (currWidth > 1 && currHeight > 1) {
      const X_FLAG = 1 << 0;
      const Y_FLAG = 1 << 1;
      const index = (currWidth % 2 === 0 ? X_FLAG : 0) | (currHeight % 2 === 0 ? Y_FLAG : 0);
      const material = mipMaterials[index];
      material.uniforms.map.value = swapTarget.texture;
      material.uniforms.parentLevel.value = mip;
      material.uniforms.parentMapSize.value.set(currWidth, currHeight);
      material.uniforms.originalMapSize.value.set(width, height);
      mipQuad.material = material;
      currWidth = Math.floor(currWidth / 2);
      currHeight = Math.floor(currHeight / 2);
      const yOffset = targetHeight - 2 * currHeight;
      renderer.setRenderTarget(target);
      mipQuad.camera.setViewOffset(currWidth, currHeight, -width, -yOffset, targetWidth, targetHeight);
      mipQuad.render(renderer);
      renderer.setRenderTarget(swapTarget);
      material.uniforms.map.value = target.texture;
      mipQuad.render(renderer);
      mip++;
    }
    renderer.setRenderTarget(originalRenderTarget);
    renderer.setClearAlpha(originalClearAlpha);
    renderer.setClearColor(_originalClearColor);
    renderer.autoClear = originalAutoClear;
    return mip + 1;
  }
  dispose() {
    this._swapTarget.dispose();
    this._mipQuad.dispose();
    this._copyQuad.dispose();
    this._mipMaterials.forEach((m) => m.dispose());
  }
}

const {defineComponent:_defineComponent$8} = await importShared('vue');

const THREE$8 = await importShared('three');
const _sfc_main$9 = /* @__PURE__ */ _defineComponent$8({
  __name: "reflectorMipMap",
  props: {
    parent: {},
    resolution: { default: 512 },
    ignoreObjects: { default: [] }
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const reflectPlane = new THREE$8.Plane();
    const reflectMatrix = new THREE$8.Matrix4();
    const camera = new THREE$8.PerspectiveCamera();
    const mipMaper = new PackedMipMapGenerator();
    const renderTarget = useFBO({
      width: props.resolution,
      height: props.resolution,
      settings: {
        type: THREE$8.UnsignedByteType
      }
    });
    const renderTargetMipMap = useFBO({
      width: props.resolution,
      height: props.resolution,
      settings: {
        type: THREE$8.UnsignedByteType
      }
    });
    const { camera: baseCamera, renderer, scene } = Fs();
    const beforeRender = () => {
      if (!baseCamera.value) {
        return;
      }
      reflectPlane.set(new THREE$8.Vector3(0, 1, 0), 0);
      reflectPlane.applyMatrix4(props.parent.matrixWorld);
      camera.copy(baseCamera.value);
      const r = new THREE$8.Vector3(0, 0, 1).clone().negate();
      const o = baseCamera.value.getWorldPosition(new THREE$8.Vector3());
      r.reflect(reflectPlane.normal);
      const p = new THREE$8.Vector3();
      reflectPlane.projectPoint(o, p);
      const y = p.clone();
      y.sub(o), y.add(p), camera.position.copy(y);
      const d = new THREE$8.Vector3(0, 0, -1);
      d.applyQuaternion(
        baseCamera.value.getWorldQuaternion(new THREE$8.Quaternion())
      );
      d.add(o);
      const E = new THREE$8.Vector3();
      props.parent.getWorldPosition(E);
      E.sub(d);
      E.reflect(reflectPlane.normal).negate();
      E.add(props.parent.getWorldPosition(new THREE$8.Vector3()));
      camera.up.set(0, 1, 0);
      camera.applyQuaternion(
        baseCamera.value.getWorldQuaternion(new THREE$8.Quaternion())
      );
      camera.up.reflect(reflectPlane.normal);
      camera.lookAt(E);
      camera.updateMatrixWorld();
      const L = new THREE$8.Matrix4();
      L.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1);
      L.multiply(camera.projectionMatrix);
      L.multiply(camera.matrixWorldInverse);
      reflectMatrix.copy(L);
      reflectPlane.applyMatrix4(camera.matrixWorldInverse);
      const k = new THREE$8.Vector4(
        reflectPlane.normal.x,
        reflectPlane.normal.y,
        reflectPlane.normal.z,
        reflectPlane.constant
      );
      const X = camera.projectionMatrix;
      const $ = new THREE$8.Vector4();
      $.x = (Math.sign(k.x) + X.elements[8]) / X.elements[0];
      $.y = (Math.sign(k.y) + X.elements[9]) / X.elements[5];
      $.z = -1;
      $.w = (1 + X.elements[10]) / X.elements[14];
      k.multiplyScalar(2 / k.dot($));
      X.elements[2] = k.x;
      X.elements[6] = k.y;
      X.elements[10] = k.z + 1;
      X.elements[14] = k.w;
      const Z = renderer.getRenderTarget();
      renderer.setRenderTarget(renderTarget.value);
      renderer.state.buffers.depth.setMask(true);
      renderer.autoClear === false && renderer.clear();
      props.ignoreObjects.forEach((be) => be.visible = false);
      renderer.render(scene.value, camera);
      props.ignoreObjects.forEach((be) => be.visible = true);
      renderer.setRenderTarget(Z);
    };
    const { onBeforeRender } = _l();
    onBeforeRender(() => {
      beforeRender();
      if (renderTarget.value && renderTargetMipMap.value && renderer) {
        mipMaper.update(renderTarget.value.texture, renderTargetMipMap.value, renderer);
      }
    });
    __expose({
      matrix: reflectMatrix,
      renderTarget: renderTargetMipMap
    });
    return (_ctx, _cache) => {
      return null;
    };
  }
});

const {withAsyncContext:_withAsyncContext,defineComponent:_defineComponent$7} = await importShared('vue');

const {createElementVNode:_createElementVNode$5,unref:_unref$5,openBlock:_openBlock$8,createElementBlock:_createElementBlock$8} = await importShared('vue');

const _hoisted_1$7 = ["rotateX", "receiveShadow"];
const _hoisted_2$2 = ["color", "map", "normalMap", "metalnessMap", "roughnessMap", "metalness", "roughness", "normalScale", "side"];
const {watch: watch$8} = await importShared('vue');

const THREE$7 = await importShared('three');
const _sfc_main$8 = /* @__PURE__ */ _defineComponent$7({
  __name: "rubberTiles",
  props: {
    color: { default: "#FFFFFF" },
    repeat: { default: { x: 1, y: 1 } },
    metalness: { default: 1 },
    roughness: { default: 0.66 },
    normalScale: { default: 1 },
    receiveShadow: { type: Boolean, default: false }
  },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    const { textures: pTexture } = ([__temp, __restore] = _withAsyncContext(() => rz([
      "./plugins/floor/image/rubber_tiles_diff_1k.jpg",
      "./plugins/floor/image/rubber_tiles_nor_gl_1k.jpg",
      "./plugins/floor/image/rubber_tiles_arm_1k.jpg"
    ])), __temp = await __temp, __restore(), __temp);
    watch$8([pTexture], ([pTexture2]) => {
      if (pTexture2 && pTexture2.length) {
        for (let i = 0; i < pTexture2.length; i++) {
          pTexture2[i].colorSpace = THREE$7.LinearSRGBColorSpace;
          pTexture2[i].wrapS = THREE$7.RepeatWrapping;
          pTexture2[i].wrapT = THREE$7.RepeatWrapping;
          pTexture2[i].magFilter = THREE$7.LinearFilter;
          pTexture2[i].minFilter = THREE$7.LinearMipmapLinearFilter;
          pTexture2[i].repeat.set(props.repeat.x, props.repeat.y);
        }
      }
    });
    watch$8(
      () => props.repeat,
      (repeat) => {
        for (let i = 0; i < pTexture.value.length; i++) {
          pTexture.value[i].repeat.set(repeat.x, repeat.y);
        }
      },
      { deep: true }
    );
    return (_ctx, _cache) => {
      return _openBlock$8(), _createElementBlock$8("TresGroup", null, [
        _createElementVNode$5("TresMesh", {
          rotateX: -Math.PI / 2,
          receiveShadow: _ctx.receiveShadow
        }, [
          _cache[0] || (_cache[0] = _createElementVNode$5("TresPlaneGeometry", { args: [10, 10] }, null, -1)),
          _createElementVNode$5("TresMeshStandardMaterial", {
            color: props.color,
            map: _unref$5(pTexture)[0],
            normalMap: _unref$5(pTexture)[1],
            metalnessMap: _unref$5(pTexture)[2],
            roughnessMap: _unref$5(pTexture)[2],
            metalness: _ctx.metalness,
            roughness: _ctx.roughness,
            normalScale: _ctx.normalScale,
            side: THREE$7.DoubleSide
          }, null, 8, _hoisted_2$2)
        ], 8, _hoisted_1$7)
      ]);
    };
  }
});

const {defineComponent:_defineComponent$6} = await importShared('vue');

const {openBlock:_openBlock$7,createElementBlock:_createElementBlock$7,createCommentVNode:_createCommentVNode$3} = await importShared('vue');

const _hoisted_1$6 = ["object"];
const {ref: ref$2,toRaw,watch: watch$7} = await importShared('vue');
const _sfc_main$7 = /* @__PURE__ */ _defineComponent$6({
  __name: "topoBase",
  props: {
    selected: { default: "baseModelA" },
    type: { default: ["baseModelA", "baseModelB"] },
    colorlist: {
      default: ["#6381EE", "#FFFFFF"]
    },
    roughness: { default: 0.5 },
    metalness: { default: 0.6 }
  },
  setup(__props) {
    const props = __props;
    const allModelFinish = ref$2(false);
    const readAllModels = async () => {
      for (const name of props.type) {
        await instance.getResource("GLTFLoader", `./plugins/floor/models/topoBase/${name}.glb`, `topo-${name}.glb`);
      }
      allModelFinish.value = true;
    };
    readAllModels();
    const curModel = ref$2(null);
    const curMaterials = {};
    watch$7(
      () => allModelFinish.value,
      (v) => {
        if (v) {
          curModel.value = instance.getReactiveItem(`topo-${props.selected}.glb`)().scene.clone();
          cloneMaterials(curModel.value);
        }
      },
      { immediate: true }
    );
    watch$7(
      () => props.selected,
      async (newValue) => {
        curModel.value = instance.getReactiveItem(`topo-${newValue}.glb`)().scene.clone();
        cloneMaterials(curModel.value);
      }
    );
    const cloneMaterials = (scene) => {
      for (const key in curMaterials) {
        curMaterials[key].dispose();
        delete curMaterials[key];
      }
      scene.traverse((child) => {
        if (child.isMesh && child.material) {
          const originalMaterial = child.material;
          if (!curMaterials[originalMaterial.uuid]) {
            curMaterials[originalMaterial.uuid] = originalMaterial.clone();
          }
          child.material = curMaterials[originalMaterial.uuid];
        }
      });
      setMaterialsColors(props.colorlist);
    };
    const setMaterialsColors = (colorlist) => {
      let index = 0;
      for (const key in curMaterials) {
        if (curMaterials.hasOwnProperty(key)) {
          curMaterials[key].color.set(colorlist[index]);
        }
        index++;
      }
    };
    const setMaterialsProp = (type, value) => {
      for (const key in curMaterials) {
        if (curMaterials.hasOwnProperty(key)) {
          curMaterials[key][type] = value;
        }
      }
    };
    watch$7(
      () => props.colorlist,
      (colorlist) => {
        setMaterialsColors(colorlist);
      },
      { deep: true }
    );
    watch$7(
      () => [props.roughness, props.metalness],
      ([roughness, metalness]) => {
        setMaterialsProp("roughness", roughness);
        setMaterialsProp("metalness", metalness);
      },
      { deep: true }
    );
    return (_ctx, _cache) => {
      return _openBlock$7(), _createElementBlock$7("TresGroup", null, [
        curModel.value ? (_openBlock$7(), _createElementBlock$7("primitive", {
          key: 0,
          object: toRaw(curModel.value)
        }, null, 8, _hoisted_1$6)) : _createCommentVNode$3("", true)
      ]);
    };
  }
});

const {defineComponent:_defineComponent$5} = await importShared('vue');

const {unref:_unref$4,openBlock:_openBlock$6,createElementBlock:_createElementBlock$6,createCommentVNode:_createCommentVNode$2} = await importShared('vue');

const _hoisted_1$5 = ["object"];
const {watch: watch$6} = await importShared('vue');

const THREE$6 = await importShared('three');
const _sfc_main$6 = /* @__PURE__ */ _defineComponent$5({
  __name: "hexagonalWall",
  props: {
    color: { default: "#7432B4" }
  },
  setup(__props) {
    const { renderer, scene: sceneValue, camera, sizes } = Fs();
    const props = __props;
    let effectComposer = null;
    const { textures, isLoading } = rz(["./plugins/floor/image/concrete_wet_floor_basecolor.jpg", "./plugins/floor/image/metal_plate_diff_1k.jpg"]);
    const { state } = NA(`${"https://opensource.cdn.icegl.cn"}/model/floor/baseModelI.glb`, {
      draco: true,
      decoderPath: "./draco/"
    });
    let scene = null;
    watch$6(
      [state, textures, isLoading],
      ([pstate, ptextures, isLoading2]) => {
        if (pstate && ptextures && !isLoading2) {
          scene = pstate.scene;
          scene.traverse((child) => {
            if (child instanceof THREE$6.Mesh) {
              const originalPosition = child.position.clone();
              const scatterRadius = 20 + Math.random() * 30;
              const scatterAngle = Math.random() * Math.PI * 2;
              const scatterHeight = (Math.random() - 0.5) * 20;
              const scatteredPosition = new THREE$6.Vector3(
                originalPosition.x + Math.cos(scatterAngle) * scatterRadius,
                originalPosition.y + scatterHeight,
                originalPosition.z + Math.sin(scatterAngle) * scatterRadius
              );
              meshData.push({
                mesh: child,
                originalPosition,
                scatteredPosition
              });
              child.position.copy(scatteredPosition);
              if (child.name.includes("_")) {
                ptextures[0].wrapS = THREE$6.RepeatWrapping;
                ptextures[0].wrapT = THREE$6.RepeatWrapping;
                ptextures[0].repeat.set(10, 10);
                child.material.map = textures.map;
                child.material.needsUpdate = true;
                child.material.emissive = new THREE$6.Color("#7432B4");
                child.material.emissiveIntensity = 3.5;
              } else {
                if (ptextures[1]) {
                  ptextures[1].wrapS = THREE$6.RepeatWrapping;
                  ptextures[1].wrapT = THREE$6.RepeatWrapping;
                  ptextures[1].repeat.set(10, 10);
                  child.material.map = ptextures[1];
                }
                child.material.color = new THREE$6.Color("#7432B4");
                child.material.metalness = 0.8;
                child.material.roughness = 0.2;
                child.material.envMapIntensity = 2.5;
                child.material.needsUpdate = true;
              }
            }
          });
          setupEnvironment();
          setupBloomEffect();
          createAssemblyAnimation();
        }
      }
    );
    const meshData = [];
    const createAssemblyAnimation = () => {
      if (meshData.length === 0) return;
      const assemblyTimeline = gsapWithCSS.timeline();
      meshData.forEach((data, index) => {
        const delay = Math.random() * 0.8;
        const randomRotation = {
          x: (Math.random() - 0.5) * Math.PI * 2,
          y: (Math.random() - 0.5) * Math.PI * 2,
          z: (Math.random() - 0.5) * Math.PI * 2
        };
        data.mesh.rotation.set(randomRotation.x, randomRotation.y, randomRotation.z);
        assemblyTimeline.to(
          data.mesh.position,
          {
            x: data.originalPosition.x,
            y: data.originalPosition.y,
            z: data.originalPosition.z,
            duration: 3,
            ease: "power2.out",
            delay
          },
          0
        );
        assemblyTimeline.to(
          data.mesh.rotation,
          {
            x: 0,
            y: 0,
            z: 0,
            duration: 3,
            ease: "power2.out",
            delay
          },
          0
        );
      });
      assemblyTimeline.call(() => {
        startFloatingAnimations();
      });
      console.log(`开始拼合动画，共 ${meshData.length} 个mesh`);
    };
    const startFloatingAnimations = () => {
      meshData.forEach((data, index) => {
        gsapWithCSS.to(data.mesh.position, {
          z: data.originalPosition.z + 3 + index / 50,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut"
        });
      });
      console.log("Z轴微动动画已启动");
    };
    const setupBloomEffect = () => {
      if (!renderer || !camera.value || !sizes.width.value) return;
      effectComposer = new EffectComposer(renderer);
      const renderPass = new RenderPass(sceneValue.value, camera.value);
      effectComposer.addPass(renderPass);
      const bloomPass = new UnrealBloomPass(new THREE$6.Vector2(sizes.width.value, sizes.height.value), 0.6, 0.05, 0.25);
      effectComposer.addPass(bloomPass);
    };
    const setupEnvironment = () => {
      const pmremGenerator = new THREE$6.PMREMGenerator(renderer);
      const environment = new RoomEnvironment();
      const envMap = pmremGenerator.fromScene(environment).texture;
      sceneValue.value.environment = envMap;
      scene.traverse((child) => {
        if (child instanceof THREE$6.Mesh && child.material) {
          child.material.envMap = envMap;
          child.material.needsUpdate = true;
        }
      });
      environment.dispose();
    };
    const { onRender } = _l();
    onRender(() => {
      if (effectComposer) {
        effectComposer.render();
      }
    });
    watch$6(
      () => [props.color],
      ([color]) => {
        scene.traverse((child) => {
          if (child instanceof THREE$6.Mesh && child.material) {
            child.material.color = new THREE$6.Color(color);
            child.material.emissive = new THREE$6.Color(color);
          }
        });
      }
    );
    return (_ctx, _cache) => {
      return _unref$4(state) ? (_openBlock$6(), _createElementBlock$6("primitive", {
        key: 0,
        object: _unref$4(state)?.scene,
        "position-y": 0.01
      }, null, 8, _hoisted_1$5)) : _createCommentVNode$2("", true);
    };
  }
});

const {defineComponent:_defineComponent$4} = await importShared('vue');

const {createElementVNode:_createElementVNode$4,unref:_unref$3,openBlock:_openBlock$5,createElementBlock:_createElementBlock$5,createCommentVNode:_createCommentVNode$1} = await importShared('vue');

const _hoisted_1$4 = { key: 0 };
const _hoisted_2$1 = ["object"];
const _hoisted_3$1 = ["object"];
const _hoisted_4$1 = ["object"];
const {onMounted,watch: watch$5,computed} = await importShared('vue');

const THREE$5 = await importShared('three');
const _sfc_main$5 = /* @__PURE__ */ _defineComponent$4({
  __name: "mechaFloor",
  props: {
    color: { default: "#ffed00" }
  },
  setup(__props) {
    const { renderer, scene: sceneValue, camera, sizes } = Fs();
    const props = __props;
    let effectComposer = null;
    const ContrastShader = {
      uniforms: {
        tDiffuse: { value: null },
        contrast: { value: 1.8 }
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,
      fragmentShader: `
        uniform sampler2D tDiffuse;
        uniform float contrast;
        varying vec2 vUv;
        void main() {
            vec4 color = texture2D(tDiffuse, vUv);
            color.rgb = (color.rgb - 0.5) * contrast + 0.8;
            gl_FragColor = color;
        }
    `
    };
    const { state } = NA(`${"https://opensource.cdn.icegl.cn"}/model/floor/baseModelJ.glb`, {
      draco: true,
      decoderPath: "./draco/"
    });
    const scene = computed(() => state?.value?.scene);
    const { state: scenedizuo } = NA("plugins/floor/models/topoBase/baseModelL.glb", {
      draco: true,
      decoderPath: "./draco/"
    });
    const { state: scenejixie } = NA(
      `${"https://opensource.cdn.icegl.cn"}/model/floor/baseModelK.glb`,
      {
        draco: true,
        decoderPath: "./draco/"
      }
    );
    const animations = computed(() => scenejixie.value?.animations || []);
    const model = computed(() => scenejixie?.value?.scene);
    const { actions } = kk(animations, model);
    watch$5(actions, (newActions) => {
      if (newActions.Scene) {
        newActions.Scene.play();
      }
    });
    watch$5(scene, (scene2) => {
      if (!scene2) return;
      scene2.traverse((child) => {
        if (child instanceof THREE$5.Mesh) {
          child.material.emissive = new THREE$5.Color("#ffed00");
          child.material.emissiveIntensity = 20.5;
          child.material.toneMapped = true;
          child.material.needsUpdate = true;
        }
      });
    });
    const setupBloomEffect = () => {
      if (!renderer || !camera.value || !sizes.width.value) return;
      effectComposer = new EffectComposer(renderer);
      const renderPass = new RenderPass(sceneValue.value, camera.value);
      effectComposer.addPass(renderPass);
      const bloomPass = new UnrealBloomPass(new THREE$5.Vector2(sizes.width.value, sizes.height.value), 0.1, 0.1, 0.1);
      effectComposer.addPass(bloomPass);
      const contrastPass = new ShaderPass(ContrastShader);
      contrastPass.uniforms.contrast.value = 1.1;
      effectComposer.addPass(contrastPass);
    };
    const setupEnvironment = () => {
      const pmremGenerator = new THREE$5.PMREMGenerator(renderer);
      const environment = new RoomEnvironment();
      const envMap = pmremGenerator.fromScene(environment).texture;
      sceneValue.value.environment = envMap;
      if (scene.value) {
        scene.value.traverse((child) => {
          if (child instanceof THREE$5.Mesh && child.material) {
            child.material.envMap = envMap;
            child.material.needsUpdate = true;
          }
        });
      }
      environment.dispose();
    };
    const { onRender } = _l();
    onRender(() => {
      if (effectComposer) {
        effectComposer.render();
      }
    });
    onMounted(() => {
      setupEnvironment();
      setTimeout(() => {
        setupBloomEffect();
      }, 200);
    });
    watch$5(
      () => [props.color],
      ([color]) => {
        if (scene.value) {
          scene.value.traverse((child) => {
            if (child instanceof THREE$5.Mesh && child.material) {
              child.material.emissive = new THREE$5.Color(color);
            }
          });
        }
      }
    );
    return (_ctx, _cache) => {
      return scene.value && model.value ? (_openBlock$5(), _createElementBlock$5("TresGroup", _hoisted_1$4, [
        _createElementVNode$4("primitive", {
          object: scene.value,
          "position-y": 0.01
        }, null, 8, _hoisted_2$1),
        _unref$3(scenedizuo) ? (_openBlock$5(), _createElementBlock$5("primitive", {
          key: 0,
          object: _unref$3(scenedizuo)?.scene,
          "position-y": 0.1
        }, null, 8, _hoisted_3$1)) : _createCommentVNode$1("", true),
        _createElementVNode$4("primitive", {
          object: model.value,
          "position-y": 0.1
        }, null, 8, _hoisted_4$1)
      ])) : _createCommentVNode$1("", true);
    };
  }
});

const {defineComponent:_defineComponent$3} = await importShared('vue');

const {unref:_unref$2,openBlock:_openBlock$4,createElementBlock:_createElementBlock$4,createCommentVNode:_createCommentVNode} = await importShared('vue');

const _hoisted_1$3 = ["object"];
const {watch: watch$4} = await importShared('vue');

const THREE$4 = await importShared('three');
const _sfc_main$4 = /* @__PURE__ */ _defineComponent$3({
  __name: "hexagonalFloor",
  props: {
    floorColor: { default: "#ff0000" },
    floorMetalness: { default: 0.8 },
    floorRoughness: { default: 0.2 },
    floorEnvMapIntensity: { default: 2.5 },
    sideColor: { default: "#ffffff" },
    sideOpacity: { default: 0.9 },
    speed: { default: 0.3 }
  },
  setup(__props) {
    const { renderer, scene: sceneValue } = Fs();
    const props = __props;
    const { state: texture } = no("./plugins/floor/image/concrete_wet_floor_basecolor.jpg");
    watch$4(
      texture,
      (texture2) => {
        if (texture2) {
          texture2.wrapS = THREE$4.RepeatWrapping;
          texture2.wrapT = THREE$4.RepeatWrapping;
          texture2.repeat.set(10, 10);
        }
      }
    );
    const { state: pState } = NA(`${"https://opensource.cdn.icegl.cn"}/model/floor/baseModelI.glb`, {
      draco: true,
      decoderPath: "./draco/"
    });
    const meshData = [];
    const tl = gsapWithCSS.timeline();
    watch$4(
      () => pState.value,
      (pState2) => {
        if (!pState2.scene) return;
        const scene = pState2.scene;
        scene.traverse((child) => {
          if (child instanceof THREE$4.Mesh) {
            const originalPosition = child.position.clone();
            const originalRotation = child.rotation.clone();
            const verticalOffset = Math.random() - 0.5;
            const scatteredPosition = new THREE$4.Vector3(
              originalPosition.x,
              originalPosition.y + verticalOffset,
              // 只沿 Y 散开
              originalPosition.z
            );
            const maxTilt = Math.PI / 12;
            const scatteredRotation = new THREE$4.Euler(
              originalRotation.x + (Math.random() - 0.5) * maxTilt,
              originalRotation.y + (Math.random() - 0.5) * maxTilt,
              originalRotation.z
            );
            meshData.push({
              mesh: child,
              originalPosition,
              scatteredPosition,
              originalRotation,
              scatteredRotation
            });
            if (child.name.includes("_")) {
              child.material.emissiveIntensity = 2;
              child.material.metalness = 1;
              child.material.roughness = 0;
              child.material.transparent = true;
            } else {
              child.material.map = texture.value;
            }
            child.material.needsUpdate = true;
          }
        });
        meshData.forEach(({ mesh, scatteredPosition, scatteredRotation }, i) => {
          tl.to(
            mesh.position,
            {
              x: scatteredPosition.x,
              y: scatteredPosition.y,
              z: scatteredPosition.z,
              ease: "power1.inOut",
              repeat: -1,
              yoyo: true
            },
            0
          );
          tl.to(
            mesh.rotation,
            {
              x: scatteredRotation.x,
              y: scatteredRotation.y,
              z: scatteredRotation.z,
              ease: "power1.inOut",
              repeat: -1,
              yoyo: true
            },
            0
          );
        });
        setupEnvironment();
      }
    );
    const setupEnvironment = () => {
      const pmremGenerator = new THREE$4.PMREMGenerator(renderer);
      const environment = new RoomEnvironment();
      const envMap = pmremGenerator.fromScene(environment).texture;
      sceneValue.value.environment = envMap;
      pState.value.scene.traverse((child) => {
        if (child instanceof THREE$4.Mesh && child.material) {
          child.material.envMap = envMap;
          child.material.needsUpdate = true;
        }
      });
      environment.dispose();
      setupMaterial(props.sideColor, props.floorColor, props.sideOpacity, props.floorMetalness, props.floorRoughness, props.floorEnvMapIntensity);
    };
    const setupMaterial = (sideColor, floorColor, sideOpacity, floorMetalness, floorRoughness, floorEnvMapIntensity) => {
      if (!pState.value?.scene) return;
      pState.value.scene.traverse((child) => {
        if (child instanceof THREE$4.Mesh && child.material) {
          if (child.name.includes("_")) {
            child.material.emissive.set(sideColor);
            child.material.opacity = sideOpacity;
          } else {
            child.material.color.set(floorColor);
            child.material.metalness = floorMetalness;
            child.material.roughness = floorRoughness;
            child.material.envMapIntensity = floorEnvMapIntensity;
          }
        }
      });
    };
    watch$4(
      () => [props.sideColor, props.floorColor, props.sideOpacity, props.floorMetalness, props.floorRoughness, props.floorEnvMapIntensity],
      ([sideColor, floorColor, sideOpacity, floorMetalness, floorRoughness, floorEnvMapIntensity]) => {
        setupMaterial(sideColor, floorColor, sideOpacity, floorMetalness, floorRoughness, floorEnvMapIntensity);
      }
    );
    watch$4(
      () => [props.speed],
      ([speed]) => {
        tl.timeScale(speed);
      },
      { immediate: true }
    );
    return (_ctx, _cache) => {
      return _openBlock$4(), _createElementBlock$4("TresGroup", null, [
        _unref$2(pState) ? (_openBlock$4(), _createElementBlock$4("primitive", {
          key: 0,
          object: _unref$2(pState)?.scene,
          position: [0, -0.1, 0]
        }, null, 8, _hoisted_1$3)) : _createCommentVNode("", true)
      ]);
    };
  }
});

const {unref:_unref$1,createElementVNode:_createElementVNode$3,openBlock:_openBlock$3,createElementBlock:_createElementBlock$3} = await importShared('vue');


const _hoisted_1$2 = ["geometry"];
const _hoisted_2 = ["color", "transparent", "opacity", "side"];
const _hoisted_3 = ["geometry"];
const _hoisted_4 = ["map", "side"];

const {watch: watch$3} = await importShared('vue');

const THREE$3 = await importShared('three');


const _sfc_main$3 = {
  __name: 'ribbonArrow',
  props: {
	length: { default: 20 },	// 长度
	width: { default: 1 },	// 宽度
	bendPosition: { default: 0.5 },	// 弯折位置 0-1
	curvature: { default: 0.4 },	// 弯曲度 0-1
	backgroundColor: { default: '#00aaff' },	// 背景颜色
	backgroundAlpha: { default: 0.25 },	// 背景透明度
	segments: { default: 240 },	// 分段数
	arrowColor: { default: '#ffffff' },	// 箭头颜色
	arrowWidth: { default: 0.3 },	// 箭头宽度
	arrowHeight: { default: 0.5 },	// 箭头高度
	arrowSpacing: { default: 0.5 },	// 箭头间距
	arrowOffset: { default: 0 }, // 箭头垂直偏移
	arrowLineWidth: { default: 2 }, // 线条箭头粗细
	arrowStyle: { default: 'chevron' }, // chevron|double|triangle|diamond
	speed: { default: 0.5 }, // 滚动速度
	pixelWorldScale: { default: 0.03 } // 像素到世界单位的转换比例
},
  setup(__props) {

const props = __props;

const computeRibbonPathLength = () => {
	const total = Math.max(0.0001, props.length);
	const bend = THREE$3.MathUtils.clamp(props.bendPosition, 0, 1);
	const L1 = total * bend;
	const L2 = total - L1;
	const maxR = Math.min(L1, L2);
	const radius = (props.curvature > 0 && bend > 0 && bend < 1) ? Math.min(maxR * 0.9, total * 0.2 * props.curvature) : 0;
	const len1 = Math.max(0, L1 - radius);
	const arcLen = radius > 0 ? (Math.PI * radius / 2) : 0;
	const len2 = Math.max(0, L2 - radius);
	const fullLen = len1 + arcLen + len2;
	const L1val = L1;
	return { fullLen, L1val, radius, len1, arcLen }
};
// ----- 1. 构建 L 型路径 -----
let { fullLen, L1val, radius, len1, arcLen } = computeRibbonPathLength();

const pointAt = (s) => {
	s = THREE$3.MathUtils.clamp(s, 0, fullLen);
	if (s <= len1) return new THREE$3.Vector2(s, 0)
	else if (s <= len1 + arcLen && radius > 0) {
		const t = (s - len1) / arcLen;
		const ang = -Math.PI / 2 + t * (Math.PI / 2);
		const cx = L1val - radius, cy = radius;
		return new THREE$3.Vector2(cx + Math.cos(ang) * radius, cy + Math.sin(ang) * radius)
	} else {
		const s2 = s - (len1 + arcLen);
		return new THREE$3.Vector2(L1val, radius + s2)
	}
};

let sampled = [], cumLen = [], pathWorldLength = 0;
const getPathLength = () => {
	sampled = [];
	cumLen = [];
	const samples = Math.max(8, Math.floor(props.segments));
	let prev = pointAt(0), accum = 0;
	sampled.push(prev);
	cumLen.push(0);
	pathWorldLength = 0;
	for (let i = 1; i <= samples; i++) {
		const s = fullLen * (i / samples);
		const p = pointAt(s);
		const d = p.clone().sub(prev).length();
		accum += d;
		sampled.push(p);
		cumLen.push(accum);
		prev = p;
	}
	pathWorldLength = accum;
};
getPathLength();


let geometry = null;
const createBufferGeometry = () => {
	const vertCount = sampled.length * 2;
	const pos = new Float32Array(vertCount * 3);
	const normal = new Float32Array(vertCount * 3);
	const uv = new Float32Array(vertCount * 2);
	const indices = [];
	const halfW = props.width / 2;

	function getTangent (i) {
		if (i === 0) return sampled[1].clone().sub(sampled[0]).normalize()
		else if (i === sampled.length - 1) return sampled[i].clone().sub(sampled[i - 1]).normalize()
		else return sampled[i + 1].clone().sub(sampled[i - 1]).normalize()
	}

	for (let i = 0; i < sampled.length; i++) {
		const p = sampled[i];
		const tang = getTangent(i);
		const n2 = new THREE$3.Vector2(-tang.y, tang.x).normalize();

		const lx = p.x - n2.x * halfW, ly = p.y - n2.y * halfW;
		const rx = p.x + n2.x * halfW, ry = p.y + n2.y * halfW;

		pos[(i * 2 + 0) * 3 + 0] = lx; pos[(i * 2 + 0) * 3 + 1] = ly; pos[(i * 2 + 0) * 3 + 2] = 0;
		pos[(i * 2 + 1) * 3 + 0] = rx; pos[(i * 2 + 1) * 3 + 1] = ry; pos[(i * 2 + 1) * 3 + 2] = 0;

		normal[(i * 2 + 0) * 3 + 0] = 0; normal[(i * 2 + 0) * 3 + 1] = 0; normal[(i * 2 + 0) * 3 + 2] = 1;
		normal[(i * 2 + 1) * 3 + 0] = 0; normal[(i * 2 + 1) * 3 + 1] = 0; normal[(i * 2 + 1) * 3 + 2] = 1;

		const distU = cumLen[i] / (props.arrowWidth + props.arrowSpacing); // 关键：箭头+空白
		uv[(i * 2 + 0) * 2 + 0] = distU; uv[(i * 2 + 0) * 2 + 1] = 0;
		uv[(i * 2 + 1) * 2 + 0] = distU; uv[(i * 2 + 1) * 2 + 1] = 1;
	}

	for (let i = 0; i < sampled.length - 1; i++) {
		const a = i * 2, b = i * 2 + 1, c = (i + 1) * 2, d = (i + 1) * 2 + 1;
		indices.push(a, c, b);
		indices.push(b, c, d);
	}

	if (geometry) {
		geometry.dispose();
	}
	geometry = new THREE$3.BufferGeometry();
	geometry.setAttribute('position', new THREE$3.BufferAttribute(pos, 3));
	geometry.setAttribute('normal', new THREE$3.BufferAttribute(normal, 3));
	geometry.setAttribute('uv', new THREE$3.BufferAttribute(uv, 2));
	geometry.setIndex(indices);
	geometry.computeBoundingBox();
	geometry.computeBoundingSphere();
};
createBufferGeometry();

const makeArrowTextureCanvas = ({ arrowWidthPx, arrowHeightPx, spacingPx, style, color, lineWidth, offset }) => {
	// padding（左右留白）
	const padding = spacingPx;

	// Canvas 的逻辑尺寸（CSS 像素）
	const width = arrowWidthPx + padding * 2;
	const height = arrowHeightPx + padding * 2;

	// 处理高 DPI
	const dpr = Math.max(1, window.devicePixelRatio || 1);
	const canvas = document.createElement('canvas');
	canvas.width = width * dpr;
	canvas.height = height * dpr;
	canvas.style.width = width + 'px';
	canvas.style.height = height + 'px';

	const ctx = canvas.getContext('2d');
	ctx.scale(dpr, dpr);

	ctx.clearRect(0, 0, width, height);
	ctx.strokeStyle = color;
	ctx.fillStyle = color;
	ctx.lineWidth = lineWidth;
	ctx.lineJoin = 'round';
	ctx.lineCap = 'round';

	// 图标绘制区域（保证始终居中）
	const x0 = padding;
	const y0 = padding;
	const w = arrowWidthPx;
	const h = arrowHeightPx;

	const cx = x0 + w / 2;
	const cy = y0 + h / 2 + offset;

	//-------------------------------------------------------
	// 正式绘制图标
	//-------------------------------------------------------
	if (style === 'chevron') {
		ctx.beginPath();
		ctx.moveTo(x0, cy - h / 2);
		ctx.lineTo(x0 + w, cy);
		ctx.lineTo(x0, cy + h / 2);
		ctx.stroke();

	} else if (style === 'double') {
		ctx.beginPath();
		ctx.moveTo(x0, cy - h / 2);
		ctx.lineTo(x0 + w * 0.7, cy);
		ctx.lineTo(x0, cy + h / 2);
		ctx.stroke();
		ctx.beginPath();
		ctx.moveTo(x0 + w * 0.8, cy - h / 2);
		ctx.lineTo(x0 + w * 1.5, cy);
		ctx.lineTo(x0 + w * 0.8, cy + h / 2);
		ctx.stroke();
	} else if (style === 'triangle') {

		ctx.beginPath();
		ctx.moveTo(x0, cy - h / 2);
		ctx.lineTo(x0 + w, cy);
		ctx.lineTo(x0, cy + h / 2);
		ctx.closePath();
		ctx.fill();

	} else if (style === 'diamond') {
		ctx.beginPath();
		ctx.moveTo(cx, cy - h / 2);
		ctx.lineTo(cx + w / 2, cy);
		ctx.lineTo(cx, cy + h / 2);
		ctx.lineTo(cx - w / 2, cy);
		ctx.closePath();
		ctx.fill();

	} else {
		// default chevron stroke
		ctx.beginPath();
		ctx.moveTo(x0, cy - h / 2);
		ctx.lineTo(x0 + w, cy);
		ctx.lineTo(x0, cy + h / 2);
		ctx.stroke();
	}

	const tex = new THREE$3.CanvasTexture(canvas);
	tex.generateMipmaps = false;
	tex.minFilter = THREE$3.LinearFilter;
	tex.magFilter = THREE$3.LinearFilter;
	tex.wrapS = THREE$3.RepeatWrapping;
	tex.wrapT = THREE$3.ClampToEdgeWrapping;
	tex.repeat.set(pathWorldLength / (props.arrowWidth + props.arrowSpacing), 1);
	tex.needsUpdate = true;
	return tex
};

let arrowTex = null;
const getArrowTex = () => {
	if (arrowTex) {
		arrowTex.dispose();
	}
	arrowTex = makeArrowTextureCanvas({
		arrowWidthPx: props.arrowWidth / props.pixelWorldScale,
		arrowHeightPx: props.arrowHeight / props.pixelWorldScale,
		spacingPx: props.arrowSpacing / props.pixelWorldScale,
		style: props.arrowStyle,
		color: props.arrowColor,
		lineWidth: props.arrowLineWidth,
		offset: props.arrowOffset
	});
};
getArrowTex();

watch$3(
	() => [props.length, props.width, props.bendPosition, props.curvature, props.segments, props.arrowColor, props.arrowWidth, props.arrowHeight, props.arrowSpacing, props.arrowOffset, props.arrowLineWidth, props.arrowStyle, props.pixelWorldScale],
	() => {
		({ fullLen, L1val, radius, len1, arcLen } = computeRibbonPathLength());
		getPathLength();
		createBufferGeometry();
		getArrowTex();
	},
);

const { onBeforeRender } = _l();
onBeforeRender(() => {
	if (arrowTex) {
		const dt = props.speed * 0.01;
		arrowTex.offset.x = (arrowTex.offset.x - dt) % 1;
		if (arrowTex.offset.x > 1) arrowTex.offset.x -= 1;
		arrowTex.needsUpdate = true;
	}
});

return (_ctx, _cache) => {
  return (_openBlock$3(), _createElementBlock$3("TresGroup", null, [
    _createElementVNode$3("TresMesh", { geometry: _unref$1(geometry) }, [
      _createElementVNode$3("TresMeshBasicMaterial", {
        color: __props.backgroundColor,
        transparent: __props.backgroundAlpha < 1,
        opacity: __props.backgroundAlpha,
        side: THREE$3.DoubleSide,
        depthWrite: ""
      }, null, 8, _hoisted_2)
    ], 8, _hoisted_1$2),
    _createElementVNode$3("TresMesh", { geometry: _unref$1(geometry) }, [
      _createElementVNode$3("TresMeshBasicMaterial", {
        map: _unref$1(arrowTex),
        transparent: "",
        side: THREE$3.DoubleSide,
        depthWrite: "",
        renderOrder: 1
      }, null, 8, _hoisted_4)
    ], 8, _hoisted_3)
  ]))
}
}

};

const {defineComponent:_defineComponent$2} = await importShared('vue');

const {createElementVNode:_createElementVNode$2,mergeProps:_mergeProps,openBlock:_openBlock$2,createElementBlock:_createElementBlock$2} = await importShared('vue');

const _hoisted_1$1 = ["rotation-x"];
const THREE$2 = await importShared('three');

const {reactive: reactive$1,watch: watch$2,ref: ref$1} = await importShared('vue');
const _sfc_main$2 = /* @__PURE__ */ _defineComponent$2({
  __name: "shaderCircleWave",
  props: {
    color: { default: "#ffffff" },
    colorDark: { default: "#000000" },
    speed: { default: 1 }
  },
  setup(__props) {
    const props = __props;
    const tmsMaterial = reactive$1({
      side: THREE$2.DoubleSide,
      transparent: true,
      blending: THREE$2.AdditiveBlending,
      flatShading: true,
      depthTest: true,
      depthWrite: false,
      uniforms: {
        uTime: { type: "f", value: 0 },
        uScanTex: {
          type: "t",
          value: null
        },
        uScanColor: {
          type: "v3",
          value: new THREE$2.Color(props.color)
        },
        uScanColorDark: {
          type: "v3",
          value: new THREE$2.Color(props.colorDark)
        }
      },
      vertexShader: `
varying vec2 vUv;
varying vec3 vPosition;
void main(){
	vUv=uv;
	vPosition=position;
	gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);
}
`,
      fragmentShader: `
#define uScanOrigin vec3(0.,0.,0.)
#define uScanWaveRatio1 3.2
#define uScanWaveRatio2 2.8

uniform float uTime;
uniform sampler2D uScanTex;
varying vec2 vUv;
varying vec3 vPosition;
uniform vec3 uScanColor;
uniform vec3 uScanColorDark;

float circleWave(vec3 p,vec3 origin,float distRatio){
    float t=uTime;
    float dist=distance(p,origin)*distRatio;
    float radialMove=fract(dist-t);
    float fadeOutMask=1.-smoothstep(1.,3.,dist);
    radialMove*=fadeOutMask;
    float cutInitialMask=1.-step(t,dist);
    radialMove*=cutInitialMask;
    return radialMove;
}

vec3 getScanColor(vec3 worldPos,vec2 uv,vec3 col){
    // mask
    float scanMask=texture(uScanTex,uv).r;
    // waves
    float cw=circleWave(worldPos,uScanOrigin,uScanWaveRatio1);
    float cw2=circleWave(worldPos,uScanOrigin,uScanWaveRatio2);
    // scan
    float mask1=smoothstep(.3,0.,1.-cw);
    mask1*=(1.+scanMask*.7);
    
    float mask2=smoothstep(.07,0.,1.-cw2)*.8;
    mask1+=mask2;
    
    float mask3=smoothstep(.09,0.,1.-cw)*1.5;
    mask1+=mask3;

    // color
    vec3 scanCol=mix(uScanColorDark,uScanColor,mask1);
    col=mix(col,scanCol,mask1);
    
    return col;
		// return vec3(cw);
		// return vec3(scanMask);
		// return worldPos;
		// return vec3(mask1);
		// return scanCol;
}

void main()
{
    vec3 col=vec3(0.);
    col=getScanColor(vPosition,vUv*10.0,col);
    gl_FragColor=vec4(col,1.);
}
`
    });
    const tsmRef = ref$1(null);
    const { state: pTexture } = no("./plugins/floor/image/scan.png");
    watch$2(
      () => pTexture.value,
      (mapv) => {
        if (mapv) {
          mapv.wrapS = THREE$2.RepeatWrapping;
          mapv.wrapT = THREE$2.RepeatWrapping;
          tmsMaterial.uniforms.uScanTex.value = mapv;
          tsmRef.value.needsUpdate = true;
          tsmRef.value.uniformsNeedUpdate = true;
        }
      }
    );
    watch$2(
      () => [props.color, props.colorDark],
      ([color, colorDark]) => {
        tmsMaterial.uniforms.uScanColor.value = new THREE$2.Color(color);
        tmsMaterial.uniforms.uScanColorDark.value = new THREE$2.Color(colorDark);
      }
    );
    const { onBeforeRender } = _l();
    onBeforeRender(() => {
      tmsMaterial.uniforms.uTime.value += 0.01 * props.speed;
    });
    return (_ctx, _cache) => {
      return _openBlock$2(), _createElementBlock$2("TresGroup", null, [
        _createElementVNode$2("TresMesh", {
          "rotation-x": -Math.PI / 2
        }, [
          _cache[0] || (_cache[0] = _createElementVNode$2("TresPlaneGeometry", { args: [1, 1] }, null, -1)),
          _createElementVNode$2("TresShaderMaterial", _mergeProps({
            ref_key: "tsmRef",
            ref: tsmRef
          }, tmsMaterial), null, 16)
        ], 8, _hoisted_1$1)
      ]);
    };
  }
});

const {defineComponent:_defineComponent$1} = await importShared('vue');

const {unref:_unref,createElementVNode:_createElementVNode$1,openBlock:_openBlock$1,createElementBlock:_createElementBlock$1} = await importShared('vue');

const _hoisted_1 = ["object"];
const THREE$1 = await importShared('three');
const {watch: watch$1,onUnmounted} = await importShared('vue');

const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "cartoonMagic",
  props: {
    color: { default: "#00ffff" },
    speed: { default: 1 }
  },
  setup(__props) {
    const props = __props;
    const getPropsColor = (a) => {
      const colorThree = new THREE$1.Color(props.color);
      const tv4color = new THREE$1.Vector4(colorThree.r, colorThree.g, colorThree.b, a);
      const colorRange = new ConstantColor(tv4color);
      return colorRange;
    };
    const batchSystem = new BatchedRenderer();
    const loader = new QuarksLoader();
    loader.setCrossOrigin("");
    const { scene } = zr();
    const emitters = new THREE$1.Group();
    scene.value.add(emitters);
    onUnmounted(() => {
      scene.value.remove(emitters);
    });
    loader.load("./plugins/floor/json/CartoonMagicZone2.json", (obj) => {
      obj.traverse((child) => {
        if (child.type === "ParticleEmitter") {
          if (child.name === "BasicZoneRedEmitter") {
            child.rotation.set(Math.PI / 2, 0, 0);
          }
          const childSystem = child.system;
          if (childSystem.startSpeed.value === -0.25) {
            childSystem.startSpeed = new ConstantValue(-0.5);
          }
          childSystem.startColor = getPropsColor(childSystem.startColor.color.w);
          batchSystem.addSystem(childSystem);
        }
      });
      if (obj.type === "ParticleEmitter") {
        batchSystem.addSystem(obj.system);
      }
      emitters.add(obj);
    });
    const { onBeforeRender } = _l();
    onBeforeRender(() => {
      batchSystem.update(0.01 * props.speed);
    });
    watch$1(
      () => [props.color],
      () => {
        batchSystem.systemToBatchIndex.forEach((value, ps) => {
          ps.startColor = getPropsColor(ps.startColor.color.w);
        });
      }
    );
    return (_ctx, _cache) => {
      return _openBlock$1(), _createElementBlock$1("TresGroup", null, [
        _createElementVNode$1("primitive", { object: _unref(batchSystem) }, null, 8, _hoisted_1)
      ]);
    };
  }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,openBlock:_openBlock,createElementBlock:_createElementBlock} = await importShared('vue');

const THREE = await importShared('three');

const {watch,reactive,ref} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "dynamicRotatingBase",
  props: {
    type: { default: "imgA" },
    color: { default: "#fff" },
    opacity: { default: 0.95 },
    rotationZ: { default: 0.01 },
    videoLoop: { type: Boolean, default: false }
  },
  setup(__props) {
    const tmRef = ref();
    const { onBeforeRender } = _l();
    onBeforeRender(() => {
      if (tmRef.value) {
        tmRef.value.rotation.z += props.rotationZ;
      }
    });
    const congfigRes = {
      imgA: { type: "img", path: "./plugins/floor/image/imgFloor1.png" },
      imgB: { type: "img", path: "./plugins/floor/image/imgFloor2.png" },
      imgC: { type: "img", path: "./plugins/floor/image/imgFloor3.png" },
      videoA: { type: "video", path: ("https://opensource.cdn.icegl.cn") + "/video/floor/floorV1.mp4" },
      videoB: { type: "video", path: ("https://opensource.cdn.icegl.cn") + "/video/floor/floorV2.mp4" },
      videoC: { type: "video", path: ("https://opensource.cdn.icegl.cn") + "/video/floor/floorV3.mp4" }
    };
    const props = __props;
    const tmsMaterial = reactive({
      color: props.color,
      map: null,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: props.opacity,
      blending: THREE.AdditiveBlending,
      depthTest: true,
      depthWrite: false
    });
    const videoDom = document.createElement("video");
    watch(() => props.type, async (type) => {
      tmsMaterial.map?.dispose();
      if (congfigRes[type].type === "img") {
        const texture = await useTexture(congfigRes[type].path);
        texture.colorSpace = THREE.SRGBColorSpace;
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(1, 1);
        tmsMaterial.map = texture;
      } else if (congfigRes[type].type === "video") {
        videoDom.src = congfigRes[type].path;
        videoDom.crossOrigin = "anonymous";
        videoDom.loop = props.videoLoop;
        videoDom.muted = true;
        videoDom.play();
        const texture = new THREE.VideoTexture(videoDom);
        texture.colorSpace = THREE.SRGBColorSpace;
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(1, 1);
        tmsMaterial.map = texture;
      }
    }, { immediate: true });
    watch(
      () => [props.color, props.opacity, props.videoLoop],
      ([color, opacity, videoLoop]) => {
        tmsMaterial.color = new THREE.Color(color);
        tmsMaterial.opacity = opacity;
        videoDom.loop = videoLoop;
      }
    );
    return (_ctx, _cache) => {
      return _openBlock(), _createElementBlock("TresMesh", {
        ref_key: "tmRef",
        ref: tmRef
      }, [
        _cache[0] || (_cache[0] = _createElementVNode("TresPlaneGeometry", { args: [10, 10] }, null, -1)),
        _createElementVNode("TresMeshBasicMaterial", _normalizeProps(_guardReactiveProps(tmsMaterial)), null, 16)
      ], 512);
    };
  }
});

export { _sfc_main$1 as _sfc_main, _sfc_main$2 as _sfc_main$1, _sfc_main as _sfc_main$2, _sfc_main$4 as _sfc_main$3, _sfc_main$6 as _sfc_main$4, _sfc_main$5, _sfc_main$3 as _sfc_main$6, _sfc_main$8 as _sfc_main$7, _sfc_main$7 as _sfc_main$8, _sfc_main$9 };
//# sourceMappingURL=dynamicRotatingBase.vue_vue_type_script_setup_true_lang.B3Epdjc31767105581793.js.map
