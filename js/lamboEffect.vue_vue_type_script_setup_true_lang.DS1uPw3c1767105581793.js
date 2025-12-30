import { importShared, Fs, _l } from './index.BxB45aCK1767105581793.js';
import { ShaderPass, RenderPass, EffectComposer } from './RenderPass.XMM8w9Yd1767105581793.js';
import { OutputPass } from './OutputPass.C3RhefbZ1767105581793.js';
import { UnrealBloomPass } from './UnrealBloomPass.DHFMJH-X1767105581793.js';

const {ClampToEdgeWrapping,Data3DTexture,FileLoader,LinearFilter,Loader,UnsignedByteType,Vector3} = await importShared('three');


/**
 * A loader for the Cube LUT format.
 *
 * References:
 * - [Cube LUT Specification]{@link https://web.archive.org/web/20220220033515/https://wwwimages2.adobe.com/content/dam/acom/en/products/speedgrade/cc/pdfs/cube-lut-specification-1.0.pdf}
 *
 * ```js
 * const loader = new LUTCubeLoader();
 * const map = loader.loadAsync( 'luts/Bourbon 64.CUBE' );
 * ```
 *
 * @augments Loader
 * @three_import import { LUTCubeLoader } from 'three/addons/loaders/LUTCubeLoader.js';
 */
class LUTCubeLoader extends Loader {

	/**
	 * Constructs a new Cube LUT loader.
	 *
	 * @param {LoadingManager} [manager] - The loading manager.
	 */
	constructor( manager ) {

		super( manager );

		/**
		 * The texture type.
		 *
		 * @type {(UnsignedByteType|FloatType)}
		 * @default UnsignedByteType
		 */
		this.type = UnsignedByteType;

	}

	/**
	 * Sets the texture type.
	 *
	 * @param {(UnsignedByteType|FloatType)} type - The texture type to set.
	 * @return {LUTCubeLoader} A reference to this loader.
	 */
	setType( type ) {

		this.type = type;

		return this;

	}

	/**
	 * Starts loading from the given URL and passes the loaded Cube LUT asset
	 * to the `onLoad()` callback.
	 *
	 * @param {string} url - The path/URL of the file to be loaded. This can also be a data URI.
	 * @param {function({title:string,size:number,domainMin:Vector3,domainMax:Vector3,texture3D:Data3DTexture})} onLoad - Executed when the loading process has been finished.
	 * @param {onProgressCallback} onProgress - Executed while the loading is in progress.
	 * @param {onErrorCallback} onError - Executed when errors occur.
	 */
	load( url, onLoad, onProgress, onError ) {

		const loader = new FileLoader( this.manager );
		loader.setPath( this.path );
		loader.setResponseType( 'text' );
		loader.load( url, text => {

			try {

				onLoad( this.parse( text ) );

			} catch ( e ) {

				if ( onError ) {

					onError( e );

				} else {

					console.error( e );

				}

				this.manager.itemError( url );

			}

		}, onProgress, onError );

	}

	/**
	 * Parses the given Cube LUT data and returns the resulting 3D data texture.
	 *
	 * @param {string} input - The raw Cube LUT data as a string.
	 * @return {{title:string,size:number,domainMin:Vector3,domainMax:Vector3,texture3D:Data3DTexture}} The parsed Cube LUT.
	 */
	parse( input ) {

		const regExpTitle = /TITLE +"([^"]*)"/;
		const regExpSize = /LUT_3D_SIZE +(\d+)/;
		const regExpDomainMin = /DOMAIN_MIN +([\d.]+) +([\d.]+) +([\d.]+)/;
		const regExpDomainMax = /DOMAIN_MAX +([\d.]+) +([\d.]+) +([\d.]+)/;
		const regExpDataPoints = /^([\d.e+-]+) +([\d.e+-]+) +([\d.e+-]+) *$/gm;

		let result = regExpTitle.exec( input );
		const title = ( result !== null ) ? result[ 1 ] : null;

		result = regExpSize.exec( input );

		if ( result === null ) {

			throw new Error( 'LUTCubeLoader: Missing LUT_3D_SIZE information' );

		}

		const size = Number( result[ 1 ] );
		const length = size ** 3 * 4;
		const data = this.type === UnsignedByteType ? new Uint8Array( length ) : new Float32Array( length );

		const domainMin = new Vector3( 0, 0, 0 );
		const domainMax = new Vector3( 1, 1, 1 );

		result = regExpDomainMin.exec( input );

		if ( result !== null ) {

			domainMin.set( Number( result[ 1 ] ), Number( result[ 2 ] ), Number( result[ 3 ] ) );

		}

		result = regExpDomainMax.exec( input );

		if ( result !== null ) {

			domainMax.set( Number( result[ 1 ] ), Number( result[ 2 ] ), Number( result[ 3 ] ) );

		}

		if ( domainMin.x > domainMax.x || domainMin.y > domainMax.y || domainMin.z > domainMax.z ) {

			throw new Error( 'LUTCubeLoader: Invalid input domain' );

		}

		const scale = this.type === UnsignedByteType ? 255 : 1;
		let i = 0;

		while ( ( result = regExpDataPoints.exec( input ) ) !== null ) {

			data[ i ++ ] = Number( result[ 1 ] ) * scale;
			data[ i ++ ] = Number( result[ 2 ] ) * scale;
			data[ i ++ ] = Number( result[ 3 ] ) * scale;
			data[ i ++ ] = scale;

		}

		const texture3D = new Data3DTexture();
		texture3D.image.data = data;
		texture3D.image.width = size;
		texture3D.image.height = size;
		texture3D.image.depth = size;
		texture3D.type = this.type;
		texture3D.magFilter = LinearFilter;
		texture3D.minFilter = LinearFilter;
		texture3D.wrapS = ClampToEdgeWrapping;
		texture3D.wrapT = ClampToEdgeWrapping;
		texture3D.wrapR = ClampToEdgeWrapping;
		texture3D.generateMipmaps = false;
		texture3D.needsUpdate = true;

		return {
			title,
			size,
			domainMin,
			domainMax,
			texture3D,
		};

	}

}

const LUTShader = {

	name: 'LUTShader',

	uniforms: {

		lut: { value: null },
		lutSize: { value: 0 },

		tDiffuse: { value: null },
		intensity: { value: 1.0 },
	},

	vertexShader: /* glsl */`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}

	`,

	fragmentShader: /* glsl */`

		uniform float lutSize;
		uniform sampler3D lut;

		varying vec2 vUv;
		uniform float intensity;
		uniform sampler2D tDiffuse;
		void main() {

			vec4 val = texture2D( tDiffuse, vUv );
			vec4 lutVal;

			// pull the sample in by half a pixel so the sample begins
			// at the center of the edge pixels.
			float pixelWidth = 1.0 / lutSize;
			float halfPixelWidth = 0.5 / lutSize;
			vec3 uvw = vec3( halfPixelWidth ) + val.rgb * ( 1.0 - pixelWidth );


			lutVal = vec4( texture( lut, uvw ).rgb, val.a );

			gl_FragColor = vec4( mix( val, lutVal, intensity ) );

		}

	`,

};

/**
 * Pass for color grading via lookup tables.
 *
 * ```js
 * const lutPass = new LUTPass( { lut: lut.texture3D } );
 * composer.addPass( lutPass );
 * ```
 *
 * @augments ShaderPass
 * @three_import import { LUTPass } from 'three/addons/postprocessing/LUTPass.js';
 */
class LUTPass extends ShaderPass {

	/**
	 * Constructs a LUT pass.
	 *
	 * @param {{lut:Data3DTexture,intensity:number}} [options={}] - The pass options.
	 */
	constructor( options = {} ) {

		super( LUTShader );

		/**
		 * The LUT as a 3D texture.
		 *
		 * @type {?Data3DTexture}
		 * @default null
		 */
		this.lut = options.lut || null;

		/**
		 * The intensity.
		 *
		 * @type {?number}
		 * @default 1
		 */
		this.intensity = 'intensity' in options ? options.intensity : 1;

	}

	set lut( v ) {

		const material = this.material;

		if ( v !== this.lut ) {

			material.uniforms.lut.value = null;

			if ( v ) {

				material.uniforms.lutSize.value = v.image.width;
				material.uniforms.lut.value = v;

			}

		}

	}

	get lut() {

		return this.material.uniforms.lut.value;

	}

	set intensity( v ) {

		this.material.uniforms.intensity.value = v;

	}

	get intensity() {

		return this.material.uniforms.intensity.value;

	}

}

const {defineComponent:_defineComponent} = await importShared('vue');

const {watchEffect} = await importShared('vue');

const THREE = await importShared('three');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "lamboEffect",
  setup(__props) {
    const { camera, renderer, scene, sizes } = Fs();
    const params = {
      threshold: 0.666,
      strength: 0.366,
      // 强度
      radius: 0.33
      // 半径
    };
    let effectComposer = null;
    let lutPass = null;
    const Effect = (scene2, camera2, renderer2, width, height) => {
      const renderScene = new RenderPass(scene2, camera2);
      const bloomPass = new UnrealBloomPass(new THREE.Vector2(width, height), params.strength, params.radius, params.threshold);
      effectComposer = new EffectComposer(renderer2);
      effectComposer.addPass(renderScene);
      effectComposer.addPass(bloomPass);
      effectComposer.addPass(new OutputPass());
      lutPass = new LUTPass({
        intensity: 1
      });
      effectComposer.addPass(lutPass);
    };
    new LUTCubeLoader().load(
      ("https://opensource.cdn.icegl.cn") + "/model/industry4/F-6800-STD.cube",
      function(result) {
        lutPass.lut = result.texture3D;
      }
    );
    watchEffect(() => {
      if (sizes.width.value) {
        Effect(scene.value, camera.value, renderer, sizes.width.value, sizes.height.value);
      }
    });
    const { onRender } = _l();
    onRender(() => {
      if (effectComposer) {
        effectComposer.render();
      }
    });
    return (_ctx, _cache) => {
      return null;
    };
  }
});

export { _sfc_main };
//# sourceMappingURL=lamboEffect.vue_vue_type_script_setup_true_lang.DS1uPw3c1767105581793.js.map
