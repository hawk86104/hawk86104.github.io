import { importShared, Kk } from './index.BxB45aCK1767105581793.js';
import { _sfc_main$5 as _sfc_main$1 } from './generalFont.vue_vue_type_script_setup_true_lang.DqoG1H6g1767105581793.js';
import './default.vue_vue_type_script_setup_true_lang.DQGKkIwV1767105581793.js';
import './three-mesh-ui.module.CjQAT-M_1767105581793.js';
import './domPanel.vue_vue_type_style_index_0_lang.dV59iE041767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,createVNode:_createVNode,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,resolveComponent:_resolveComponent,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock} = await importShared('vue');

const THREE = await importShared('three');
const {reactive,onMounted} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "svgComPage",
  setup(__props) {
    const tcConfig = {
      clearColor: "#201919",
      windowSize: true,
      shadows: true,
      toneMapping: THREE.NoToneMapping,
      toneMappingExposure: 1,
      shadowMapType: THREE.PCFSoftShadowMap
    };
    const spriteImgConfig = reactive({
      src: "./plugins/geokit/case-real-3/icons/satellite.svg",
      skipFills: false,
      skipStrokes: false
    });
    const pane = new Pane({
      title: "参数",
      expanded: true
    });
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = ".svg";
    fileInput.style.display = "none";
    document.body.appendChild(fileInput);
    const inputB = pane.addButton({
      title: "替换SVG",
      label: "2MB以内"
    });
    inputB.on("click", () => {
      if (fileInput) {
        fileInput.value = "";
        fileInput.click();
      }
    });
    pane.addBinding(spriteImgConfig, "skipStrokes", { label: "剔除线条" });
    pane.addBinding(spriteImgConfig, "skipFills", { label: "剔除填空" });
    onMounted(() => {
      fileInput.onchange = (event) => {
        const file = event.target.files[0];
        if (!file) return;
        if (file.size > 2 * 1024 * 1024) {
          alert("SVG大小不能超过2MB");
          return;
        }
        const reader = new FileReader();
        reader.onload = (e) => {
          spriteImgConfig.src = e.target.result;
        };
        reader.readAsDataURL(file);
      };
    });
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createBlock(_component_TresCanvas, _normalizeProps(_guardReactiveProps(tcConfig)), {
        default: _withCtx(() => [
          _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", {
            position: [-5, 3, 5],
            fov: 50,
            near: 0.1,
            far: 1e4
          }, null, -1)),
          _createVNode(_unref(Kk)),
          _cache[1] || (_cache[1] = _createElementVNode("TresAmbientLight", null, null, -1)),
          _createVNode(_unref(_sfc_main$1), _normalizeProps(_guardReactiveProps(spriteImgConfig)), null, 16)
        ]),
        _: 1
      }, 16);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=svgComPage.to4mKzdZ1767105581793.js.map
