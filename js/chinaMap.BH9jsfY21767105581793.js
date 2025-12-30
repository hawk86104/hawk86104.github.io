import { importShared, Kk } from './index.BxB45aCK1767105581793.js';
import { loadGeojson } from './utils.-sNu4bkd1767105581793.js';
import { mercator } from './mercator.CP32Fc3N1767105581793.js';
import { computeBoundsTree, disposeBoundsTree, acceleratedRaycast } from './ExtensionUtilities.DzCxl7kb1767105581793.js';

const {withAsyncContext:_withAsyncContext} = await importShared('vue');

const {renderList:_renderList,Fragment:_Fragment,openBlock:_openBlock$1,createElementBlock:_createElementBlock,createElementVNode:_createElementVNode$1} = await importShared('vue');


const _hoisted_1 = ["properties", "renderOrder"];
const _hoisted_2 = ["args"];
const {watchEffect,ref} = await importShared('vue');
const THREE = await importShared('three');


const _sfc_main$1 = {
  __name: 'chinaMapMesh',
  async setup(__props) {

let __temp, __restore;

const initMeshBvh = () => {
    THREE.BufferGeometry.prototype.computeBoundsTree = computeBoundsTree;
    THREE.BufferGeometry.prototype.disposeBoundsTree = disposeBoundsTree;
    THREE.Mesh.prototype.raycast = acceleratedRaycast;
};
initMeshBvh();

// 墨卡托投影转换
const projection = mercator().center([104.0, 37.5]).translate([0, 0]);

const areaJson = (
  ([__temp,__restore] = _withAsyncContext(() => loadGeojson('./plugins/simpleGIS/json/china.json', 'features'))),
  __temp = await __temp,
  __restore(),
  __temp
);

const extrudeSettings = {
    depth: 10,
    bevelEnabled: false,
};
const areaList = [];
const makeAreaPrimary = () => {
    areaJson.forEach((elem) => {
        const coordinates = elem.geometry.coordinates;
        coordinates.forEach((multiPolygon) => {
            multiPolygon.forEach((polygon) => {
                const shape = new THREE.Shape();
                for (let i = 0; i < polygon.length; i++) {
                    const [x, y] = projection(polygon[i]);
                    if (i === 0) {
                        shape.moveTo(x, -y);
                    }
                    shape.lineTo(x, -y);
                }
                areaList.push({ shape, properties: elem.properties });
            });
        });
    });
};
makeAreaPrimary();

const material2 = new THREE.LineBasicMaterial({ color: '#3480C4', linewidth: 1, linecap: 'round' });
const tgRef = ref();
watchEffect(() => {
    if (tgRef.value) {
        tgRef.value.children.forEach((item) => {
            item.geometry.computeBoundsTree();

            const arrayMaterial = [item.material, material2];
            item.material = arrayMaterial;
        });
    }
});

let tooltip = null;
const addElementTips = () => {
    const El = document.createElement('div');
    El.className = 'tooltip';
    El.style.border = '1px solid white';
    El.style.position = 'absolute';
    El.style.color = 'white';
    El.style.padding = '0px 6px';
    El.style.whiteSpace = 'no-wrap';
    El.style.visibility = 'hidden';
    document.body.appendChild(El);
    tooltip = El;
};
addElementTips();

const pEnter = (intersection) => {
    intersection.object.material[0].color.set(0xff0000);
    tooltip.innerText = intersection.object.properties.name;
    tooltip.style.visibility = 'visible';
};
const pLeave = (intersection) => {
    intersection.eventObject.material[0].color.set(0x2defff);
    tooltip.style.visibility = 'hidden';
};
const pMove = (intersection) => {
    tooltip.style.left = `${intersection.clientX + 6}px`;
    tooltip.style.top = `${intersection.clientY + 6}px`;
};

return (_ctx, _cache) => {
  return (_openBlock$1(), _createElementBlock("TresGroup", {
    ref_key: "tgRef",
    ref: tgRef
  }, [
    (_openBlock$1(), _createElementBlock(_Fragment, null, _renderList(areaList, (item, index) => {
      return _createElementVNode$1("TresMesh", {
        key: `${index}`,
        properties: item.properties,
        renderOrder: index,
        onPointerenter: pEnter,
        onPointerleave: pLeave,
        onPointermove: pMove
      }, [
        _createElementVNode$1("TresExtrudeGeometry", {
          args: [item.shape, extrudeSettings]
        }, null, 8, _hoisted_2),
        _cache[0] || (_cache[0] = _createElementVNode$1("TresMeshBasicMaterial", {
          color: "#2defff",
          transparent: true,
          opacity: 0.6
        }, null, -1))
      ], 40, _hoisted_1)
    }), 64))
  ], 512))
}
}

};

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,createVNode:_createVNode,Suspense:_Suspense,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock,resolveComponent:_resolveComponent,mergeProps:_mergeProps} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "chinaMap",
  setup(__props) {
    const state = {
      clearColor: "#201919"
      // alpha: false,
    };
    const controlsState = {
      enableDamping: true,
      dampingFactor: 0.05
    };
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createBlock(_component_TresCanvas, _mergeProps(state, { "window-size": "" }), {
        default: _withCtx(() => [
          _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", {
            position: [0, 0, 166],
            fov: 75,
            near: 0.1,
            far: 1e3,
            "look-at": [0, 0, 0]
          }, null, -1)),
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
//# sourceMappingURL=chinaMap.BH9jsfY21767105581793.js.map
