import { importShared, Fs, _l } from './index.BxB45aCK1767105581793.js';
import { Ai } from './CameraTransitionManager-DhJe9L3A.BTX4e7Mf1767105581793.js';
import { applyTransform, alignmentCenter } from './utils.uRDybWT71767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {unref:_unref,createElementVNode:_createElementVNode,openBlock:_openBlock,createElementBlock:_createElementBlock} = await importShared('vue');

const _hoisted_1 = ["object"];
const {watch,ref} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "obliquePhoto",
  props: {
    tilesUrl: { default: "./plugins/geokit/tiles/tileset.json" },
    isRotation: { type: Boolean, default: false },
    isRranslation: { type: Boolean, default: true }
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const groupRef = ref(null);
    const { camera, renderer, sizes } = Fs();
    const setCameraAndRenderer = (newTiles, camera2, renderer2) => {
      newTiles.setCamera(camera2);
      newTiles.setResolutionFromRenderer(camera2, renderer2);
    };
    const makeNewTiles = () => {
      let newTiles = new Ai(props.tilesUrl);
      newTiles.fetchOptions.mode = "cors";
      newTiles.addEventListener("load-tile-set", () => {
        alignmentCenter(newTiles, props.isRotation, props.isRranslation);
      });
      newTiles.addEventListener("dispose-model", ({ scene }) => {
        scene.traverse((c) => {
          if (c.material) {
            c.material.dispose();
          }
        });
      });
      setCameraAndRenderer(newTiles, camera.value, renderer);
      return newTiles;
    };
    let tiles = makeNewTiles();
    watch(
      () => [props.isRotation, props.isRranslation],
      () => {
        if (tiles.group) {
          applyTransform(tiles.group, props.isRotation, props.isRranslation);
        }
      }
    );
    watch(
      camera,
      () => {
        if (camera.value) {
          setCameraAndRenderer(tiles, camera.value, renderer);
        }
      },
      { immediate: true }
    );
    const { onBeforeRender } = _l();
    onBeforeRender(() => {
      if (camera.value && sizes.width.value && tiles.update) {
        camera.value.updateMatrixWorld();
        tiles.update();
      }
    });
    watch(
      () => props.tilesUrl,
      (tilesUrl) => {
        if (tilesUrl !== tiles.rootURL) {
          tiles.dispose();
          tiles = makeNewTiles();
        }
      }
    );
    __expose({
      group: groupRef,
      tilesGroup: tiles.group
    });
    return (_ctx, _cache) => {
      return _openBlock(), _createElementBlock("TresGroup", {
        ref_key: "groupRef",
        ref: groupRef
      }, [
        _createElementVNode("primitive", {
          object: _unref(tiles).group
        }, null, 8, _hoisted_1)
      ], 512);
    };
  }
});

export { _sfc_main };
//# sourceMappingURL=obliquePhoto.vue_vue_type_script_setup_true_lang.BUTwkNtD1767105581793.js.map
