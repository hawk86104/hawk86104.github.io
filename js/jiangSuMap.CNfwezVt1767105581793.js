import { importShared, Fs, _l, gz, Kk } from './index.BxB45aCK1767105581793.js';
import { loadGeojson } from './utils.-sNu4bkd1767105581793.js';
import { useTexture } from './customShaderMaterial.vue_vue_type_script_setup_true_lang.rDMIDGqx1767105581793.js';
import './index.vue_vue_type_script_setup_true_lang.D7-hpzmy1767105581793.js';
import { flyTo } from './utils.uRDybWT71767105581793.js';
import { mercator } from './mercator.CP32Fc3N1767105581793.js';
import { computeBoundsTree, disposeBoundsTree, acceleratedRaycast } from './ExtensionUtilities.DzCxl7kb1767105581793.js';

const {withAsyncContext:_withAsyncContext} = await importShared('vue');

const {renderList:_renderList,Fragment:_Fragment,openBlock:_openBlock$1,createElementBlock:_createElementBlock,toDisplayString:_toDisplayString,createElementVNode:_createElementVNode$1,unref:_unref$1,mergeProps:_mergeProps$1,withCtx:_withCtx$1,createBlock:_createBlock$1,createCommentVNode:_createCommentVNode} = await importShared('vue');


const _hoisted_1 = ["position"];
const _hoisted_2 = ["blending", "map"];
const _hoisted_3 = ["name", "renderOrder", "pCenter"];
const _hoisted_4 = ["args"];
const _hoisted_5 = ["color", "side"];
const _hoisted_6 = ["renderOrder", "position-z"];
const _hoisted_7 = ["position"];
const _hoisted_8 = ["renderOrder"];
const _hoisted_9 = ["position"];

const {watchEffect,ref} = await importShared('vue');
const THREE = await importShared('three');



const _sfc_main$1 = {
  __name: 'jiangSuMapMesh',
  async setup(__props) {

let __temp, __restore;

const initMeshBvh = () => {
    THREE.BufferGeometry.prototype.computeBoundsTree = computeBoundsTree;
    THREE.BufferGeometry.prototype.disposeBoundsTree = disposeBoundsTree;
    THREE.Mesh.prototype.raycast = acceleratedRaycast;
};
initMeshBvh();

const areaJson = (
  ([__temp,__restore] = _withAsyncContext(() => loadGeojson('./plugins/simpleGIS/json/320000_full.json', 'features'))),
  __temp = await __temp,
  __restore(),
  __temp
);
const pTexture = (
  ([__temp,__restore] = _withAsyncContext(() => useTexture('./plugins/simpleGIS/image/icon.png'))),
  __temp = await __temp,
  __restore(),
  __temp
);

const center = areaJson[0].properties.centroid;

//转换成墨卡托坐标，并居中
const offsetXY = mercator();
offsetXY.center(center).translate([0, 0]);

const areaList = [];
const makeAreaPrimary = () => {
    areaJson.forEach((feature) => {
        const color = new THREE.Color(`hsl( ${16}, ${Math.random() * 30 + 55}%, ${Math.random() * 30 + 55}%)`).getHex();
        const depth = Math.random() * 0.3 + 0.3;

        // 关于文字和图标 待会儿制作
        const { centroid, oneCenter, center: Cc, name } = feature.properties;
        const { coordinates, type } = feature.geometry;
        const point = centroid || oneCenter || Cc || [0, 0];

        const htmlPosition = offsetXY(point);
        htmlPosition[1] = -htmlPosition[1];
        htmlPosition[2] = depth;
        areaList.push({ type: 'Html', position: htmlPosition, name });

        const spritePosition = offsetXY(point);
        spritePosition[1] = -spritePosition[1] + 0.2;
        spritePosition[2] = depth + 0.22;

        areaList.push({ type: 'Sprite', position: spritePosition });

        coordinates.forEach((coordinate) => {
            function fn(crdinate) {
                // 制作区域块
                const shape = new THREE.Shape();
                crdinate.forEach((item, idx) => {
                    const [x, y] = offsetXY(item);
                    if (idx === 0) shape.moveTo(x, -y);
                    else shape.lineTo(x, -y);
                });
                areaList.push({ type: 'Shape', shape, name, color, depth, pCenter: spritePosition });

                // 制作边界线
                const points = [];
                crdinate.forEach((item) => {
                    const [x, y] = offsetXY(item);
                    points.push(x, -y, 0);
                });
                areaList.push({ type: 'Line', points: new Float32Array(points), depth });
            }

            if (type === 'MultiPolygon') coordinate.forEach((item) => fn(item));
            if (type === 'Polygon') fn(coordinate);
        });
    });
};
makeAreaPrimary();

const setCenter = (map) => {
    map.rotation.x = -Math.PI / 2;
    const box = new THREE.Box3().setFromObject(map);
    const centerMap = box.getCenter(new THREE.Vector3());

    const offset = [0, 0];
    map.position.x = map.position.x - centerMap.x - offset[0];
    map.position.z = map.position.z - centerMap.z - offset[1];
};
const tgRef = ref();
watchEffect(() => {
    if (tgRef.value) {
        setCenter(tgRef.value);
        tgRef.value.children.forEach((item) => {
            if (item.type === 'Mesh') {
                item.geometry.computeBoundsTree();
            }
        });
    }
});

const pEnter = (intersection) => {
    intersection.object.material.opacity = 0.4;
};
const pLeave = (intersection) => {
    intersection.eventObject.material.opacity = 1;
};

const { camera, controls } = Fs();
let twInstant = null;
const pClick = (intersection) => {
    const targetPosition = new THREE.Vector3();
    targetPosition.x = intersection.point.x;
    targetPosition.y = intersection.point.y + 10;
    targetPosition.z = intersection.point.z;
    twInstant = flyTo(camera, targetPosition, controls);
};
const { onBeforeRender } = _l();
onBeforeRender(() => {
    twInstant?.update();
});
const htmlState = {
    wrapperClass: 'wrapper',
    as: 'div',
    center: true,
    sprite: true,
    prepend: true,
    transform: true,
};

return (_ctx, _cache) => {
  return (_openBlock$1(), _createElementBlock("TresGroup", {
    ref_key: "tgRef",
    ref: tgRef
  }, [
    (_openBlock$1(), _createElementBlock(_Fragment, null, _renderList(areaList, (item, index) => {
      return (_openBlock$1(), _createElementBlock(_Fragment, {
        key: `${index}`
      }, [
        (item.type === 'Html')
          ? (_openBlock$1(), _createBlock$1(_unref$1(gz), _mergeProps$1({
              key: 0,
              ref_for: true
            }, htmlState, {
              position: item.position
            }), {
              default: _withCtx$1(() => [
                _createElementVNode$1("span", null, _toDisplayString(item.name), 1)
              ]),
              _: 2
            }, 1040, ["position"]))
          : _createCommentVNode("", true),
        (item.type === 'Sprite')
          ? (_openBlock$1(), _createElementBlock("TresSprite", {
              key: 1,
              position: item.position,
              scale: 0.3,
              renderOrder: 1000
            }, [
              _createElementVNode$1("TresSpriteMaterial", {
                color: 0xff0000,
                blending: THREE.NormalBlending,
                map: _unref$1(pTexture)
              }, null, 8, _hoisted_2)
            ], 8, _hoisted_1))
          : _createCommentVNode("", true),
        (item.type === 'Shape')
          ? (_openBlock$1(), _createElementBlock("TresMesh", {
              key: 2,
              name: item.name,
              renderOrder: index,
              pCenter: item.pCenter,
              onPointerenter: pEnter,
              onPointerleave: pLeave,
              onClick: pClick
            }, [
              _createElementVNode$1("TresExtrudeGeometry", {
                args: [item.shape, { depth: item.depth, bevelEnabled: false }]
              }, null, 8, _hoisted_4),
              _createElementVNode$1("TresMeshStandardMaterial", {
                color: item.color,
                emissive: 0x000000,
                roughness: 0.45,
                metalness: 0.8,
                transparent: true,
                side: THREE.DoubleSide
              }, null, 8, _hoisted_5)
            ], 40, _hoisted_3))
          : _createCommentVNode("", true),
        (item.type === 'Line')
          ? (_openBlock$1(), _createElementBlock(_Fragment, { key: 3 }, [
              _createElementVNode$1("TresLine", {
                renderOrder: index,
                "position-z": item.depth + 0.0001
              }, [
                _createElementVNode$1("TresBufferGeometry", {
                  position: [item.points, 3]
                }, null, 8, _hoisted_7),
                _cache[0] || (_cache[0] = _createElementVNode$1("TresLineBasicMaterial", {
                  color: 0xffffff,
                  linewidth: 0.5
                }, null, -1))
              ], 8, _hoisted_6),
              _createElementVNode$1("TresLine", {
                renderOrder: index,
                "position-z": -1e-4
              }, [
                _createElementVNode$1("TresBufferGeometry", {
                  position: [item.points, 3]
                }, null, 8, _hoisted_9),
                _cache[1] || (_cache[1] = _createElementVNode$1("TresLineBasicMaterial", {
                  color: 0x000000,
                  linewidth: 0.5
                }, null, -1))
              ], 8, _hoisted_8)
            ], 64))
          : _createCommentVNode("", true)
      ], 64))
    }), 64))
  ], 512))
}
}

};

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,createVNode:_createVNode,Suspense:_Suspense,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock,resolveComponent:_resolveComponent,mergeProps:_mergeProps} = await importShared('vue');

const {reactive} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "jiangSuMap",
  setup(__props) {
    const state = reactive({
      clearColor: "#ffdbd1",
      alpha: true,
      antialias: true
    });
    const controlsState = reactive({
      enableDamping: true,
      dampingFactor: 0.05,
      makeDefault: true
    });
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createBlock(_component_TresCanvas, _mergeProps(state, { "window-size": "" }), {
        default: _withCtx(() => [
          _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", {
            position: [0, 12, 0],
            fov: 75,
            near: 0.1,
            far: 1e3,
            up: [0, 0, -1]
          }, null, -1)),
          _createVNode(_unref(Kk), _normalizeProps(_guardReactiveProps(controlsState)), null, 16),
          _cache[1] || (_cache[1] = _createElementVNode("TresAmbientLight", { intensity: 8.8 }, null, -1)),
          _cache[2] || (_cache[2] = _createElementVNode("TresDirectionalLight", {
            position: [0, 10, 5],
            intensity: 0.2
          }, null, -1)),
          _cache[3] || (_cache[3] = _createElementVNode("TresDirectionalLight", {
            position: [0, 10, -5],
            intensity: 0.2
          }, null, -1)),
          _cache[4] || (_cache[4] = _createElementVNode("TresDirectionalLight", {
            position: [5, 10, 0],
            intensity: 0.2
          }, null, -1)),
          _cache[5] || (_cache[5] = _createElementVNode("TresDirectionalLight", {
            position: [-5, 10, 0],
            intensity: 0.2
          }, null, -1)),
          _cache[6] || (_cache[6] = _createElementVNode("TresGridHelper", { args: [20, 10] }, null, -1)),
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
//# sourceMappingURL=jiangSuMap.CNfwezVt1767105581793.js.map
