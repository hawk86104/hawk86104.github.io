import { importShared, zr, Kk, Tz } from './index.BxB45aCK1767105581793.js';
import { HDRLoader } from './HDRLoader.N6EfVL3B1767105581793.js';

const {CubeTexture,DataTexture,FileLoader,FloatType,HalfFloatType,LinearFilter,LinearSRGBColorSpace,Loader} = await importShared('three');

/**
 * A loader for loading HDR cube textures.
 *
 * ```js
 * const loader = new HDRCubeTextureLoader();
 * loader.setPath( 'textures/cube/pisaHDR/' );
 * const cubeTexture = await loader.loadAsync( [ 'px.hdr', 'nx.hdr', 'py.hdr', 'ny.hdr', 'pz.hdr', 'nz.hdr' ] );
 *
 * scene.background = cubeTexture;
 * scene.environment = cubeTexture;
 * ```
 *
 * @augments Loader
 * @three_import import { HDRCubeTextureLoader } from 'three/addons/loaders/HDRCubeTextureLoader.js';
 */
class HDRCubeTextureLoader extends Loader {

	/**
	 * Constructs a new HDR cube texture loader.
	 *
	 * @param {LoadingManager} [manager] - The loading manager.
	 */
	constructor( manager ) {

		super( manager );

		/**
		 * The internal HDR loader that loads the
		 * individual textures for each cube face.
		 *
         * @type {HDRLoader}
		 */
		this.hdrLoader = new HDRLoader();

		/**
		 * The texture type.
		 *
		 * @type {(HalfFloatType|FloatType)}
		 * @default HalfFloatType
		 */
		this.type = HalfFloatType;

	}

	/**
	 * Starts loading from the given URLs and passes the loaded HDR cube texture
	 * to the `onLoad()` callback.
	 *
	 * @param {Array<string>} urls - The paths/URLs of the files to be loaded. This can also be a data URIs.
	 * @param {function(CubeTexture)} onLoad - Executed when the loading process has been finished.
	 * @param {onProgressCallback} onProgress - Executed while the loading is in progress.
	 * @param {onErrorCallback} onError - Executed when errors occur.
	 * @return {CubeTexture} The HDR cube texture.
	 */
	load( urls, onLoad, onProgress, onError ) {

		const texture = new CubeTexture();

		texture.type = this.type;

		switch ( texture.type ) {

			case FloatType:

				texture.colorSpace = LinearSRGBColorSpace;
				texture.minFilter = LinearFilter;
				texture.magFilter = LinearFilter;
				texture.generateMipmaps = false;
				break;

			case HalfFloatType:

				texture.colorSpace = LinearSRGBColorSpace;
				texture.minFilter = LinearFilter;
				texture.magFilter = LinearFilter;
				texture.generateMipmaps = false;
				break;

		}

		const scope = this;

		let loaded = 0;

		function loadHDRData( i, onLoad, onProgress, onError ) {

			new FileLoader( scope.manager )
				.setPath( scope.path )
				.setResponseType( 'arraybuffer' )
				.setWithCredentials( scope.withCredentials )
				.load( urls[ i ], function ( buffer ) {

					loaded ++;

					const texData = scope.hdrLoader.parse( buffer );

					if ( ! texData ) return;

					if ( texData.data !== undefined ) {

						const dataTexture = new DataTexture( texData.data, texData.width, texData.height );

						dataTexture.type = texture.type;
						dataTexture.colorSpace = texture.colorSpace;
						dataTexture.format = texture.format;
						dataTexture.minFilter = texture.minFilter;
						dataTexture.magFilter = texture.magFilter;
						dataTexture.generateMipmaps = texture.generateMipmaps;

						texture.images[ i ] = dataTexture;

					}

					if ( loaded === 6 ) {

						texture.needsUpdate = true;
						if ( onLoad ) onLoad( texture );

					}

				}, onProgress, onError );

		}

		for ( let i = 0; i < urls.length; i ++ ) {

			loadHDRData( i, onLoad, onProgress, onError );

		}

		return texture;

	}

	/**
	 * Sets the texture type.
	 *
     * @param {(HalfFloatType|FloatType)} value - The texture type to set.
     * @return {HDRCubeTextureLoader} A reference to this loader.
	 */
	setDataType( value ) {

		this.type = value;
		this.hdrLoader.setDataType( value );

		return this;

	}

}

const {defineComponent:_defineComponent$1} = await importShared('vue');
const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "skyBoxFmesh",
  props: {
    texture: {}
  },
  setup(__props) {
    const props = __props;
    const { scene } = zr();
    const loader = new HDRCubeTextureLoader();
    const texture = loader.setPath(props.texture).load([
      "px.hdr",
      "nx.hdr",
      "py.hdr",
      "ny.hdr",
      "pz.hdr",
      "nz.hdr"
    ]);
    scene.value.environment = texture;
    scene.value.background = texture;
    return (_ctx, _cache) => {
      return null;
    };
  }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,createVNode:_createVNode,Suspense:_Suspense,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock,resolveComponent:_resolveComponent,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps} = await importShared('vue');

const THREE = await importShared('three');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "skyBoxF",
  setup(__props) {
    const tcConfig = {
      clearColor: "#201919",
      windowSize: true,
      toneMapping: THREE.ACESFilmicToneMapping,
      toneMappingExposure: 0.8
    };
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createBlock(_component_TresCanvas, _normalizeProps(_guardReactiveProps(tcConfig)), {
        default: _withCtx(() => [
          _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", {
            position: [15, 15, 15],
            fov: 45,
            near: 0.1,
            far: 1e4,
            "look-at": [0, 0, 0]
          }, null, -1)),
          _createVNode(_unref(Kk), { enableDamping: "" }),
          _createVNode(_unref(Tz), {
            args: [3, 3, 3],
            color: "orange",
            position: [-13, 0, 1]
          }),
          _cache[1] || (_cache[1] = _createElementVNode("TresMesh", {
            position: [10, 2, -4],
            "cast-shadow": ""
          }, [
            _createElementVNode("TresBoxGeometry", { args: [2, 2, 2] }),
            _createElementVNode("TresMeshNormalMaterial")
          ], -1)),
          _cache[2] || (_cache[2] = _createElementVNode("TresMesh", { position: [0, 0, 0] }, [
            _createElementVNode("TresTorusKnotGeometry", { args: [3, 1, 64, 8, 2, 3] }),
            _createElementVNode("TresMeshStandardMaterial", {
              color: "#ffffff",
              metalness: 1,
              roughness: 0.14
            })
          ], -1)),
          (_openBlock(), _createBlock(_Suspense, null, {
            default: _withCtx(() => [
              _createVNode(_sfc_main$1, {
                texture: ("https://opensource.cdn.icegl.cn") + "/images/skyBox/6hdr/"
              }, null, 8, ["texture"])
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
//# sourceMappingURL=skyBoxF.CCT0bNEt1767105581793.js.map
