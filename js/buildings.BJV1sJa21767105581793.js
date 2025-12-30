import { importShared, _l, _export_sfc } from './index.BxB45aCK1767105581793.js';
import { useMapStore, mapContainer, _sfc_main as _sfc_main$2 } from './mergeTres.BqzN14ph1767105581793.js';
import { loadGeojson } from './utils.-sNu4bkd1767105581793.js';

var buildingModels_default$1="precision highp float;\n#define ambientRatio .5\n#define diffuseRatio .4\n#define specularRatio .1\n\nattribute vec2 faceUv;\nuniform vec4 u_color;\nvarying vec2 v_texCoord;\nvarying vec4 v_color;\nvarying float v_lightWeight;\n\nvoid main(){\n	\n	mat4 matModelViewProjection=projectionMatrix*modelViewMatrix;\n	\n	v_texCoord=faceUv;\n	\n	if(normal==vec3(0.,0.,1.)){\n		v_color=u_color;\n		gl_Position=matModelViewProjection*vec4(position,1.);\n		return;\n	}\n	\n	vec3 worldPos=vec3(vec4(position,1.)*modelMatrix);\n	vec3 worldNormal=vec3(vec4(normal,1.)*modelMatrix);\n	\n	vec3 viewDir=normalize(cameraPosition-worldPos);\n	\n	vec3 lightDir=normalize(vec3(0.,-10.,1.));\n	vec3 halfDir=normalize(viewDir+lightDir);\n	\n	float lambert=dot(worldNormal,lightDir);\n	\n	float specular=pow(max(0.,dot(worldNormal,halfDir)),32.);\n	\n	float lightWeight=ambientRatio+diffuseRatio*lambert+specularRatio*specular;\n	v_texCoord=faceUv;\n	v_lightWeight=lightWeight;\n	\n	\n	\n	\n	\n	v_color=vec4(u_color.rgb*v_lightWeight,u_color.w);\n	\n	gl_Position=matModelViewProjection*vec4(position,1.);\n}";

var buildingModels_default="precision highp float;\nuniform float u_opacity;\nuniform vec4 u_baseColor;\nuniform vec4 u_color;\nuniform vec4 u_brightColor;\nuniform vec4 u_windowColor;\n\nuniform float u_zoom;\nuniform float u_time;\nuniform float u_near;\nuniform float u_far;\nvarying vec2 v_texCoord;\nvarying vec4 v_color;\nvarying float v_lightWeight;\n\nvec3 getWindowColor(float n,float hot,vec3 brightColor,vec3 darkColor){\n	float s=step(hot,n);\n	vec3 color=mix(brightColor,vec3(1.,1.,1.),n);\n	return mix(darkColor,color,s);\n}\n\nfloat random(vec2 st){\n	return fract(sin(dot(st.xy,vec2(12.9898,78.233)))*43758.5453123);\n}\n\nfloat LinearizeDepth()\n{\n	float z=gl_FragCoord.z*2.-1.;\n	return(2.*u_near*u_far)/(u_far+u_near-z*(u_far-u_near));\n}\n\nvec3 fog(vec3 color,vec3 fogColor,float depth){\n	float fogFactor=clamp(depth,0.,1.);\n	vec3 output_color=mix(fogColor,color,fogFactor);\n	return output_color;\n}\n\nfloat sdRect(vec2 p,vec2 sz){\n	vec2 d=abs(p)-sz;\n	float outside=length(max(d,0.));\n	float inside=min(max(d.x,d.y),0.);\n	return outside+inside;\n}\n\nvoid main(){\n	if(v_color.w==0.){\n		discard;\n		return;\n	}\n	vec3 baseColor=u_color.xyz;\n	vec3 brightColor=u_brightColor.xyz;\n	vec3 windowColor=u_windowColor.xyz;\n	float targetColId=5.;\n	float depth=1.-LinearizeDepth()/u_far*u_zoom;\n	vec3 fogColor=vec3(23./255.,31./255.,51./255.);\n	\n	if(v_texCoord.x<0.){\n		vec3 foggedColor=fog(baseColor.xyz+vec3(.12*.9,.2*.9,.3*.9),fogColor,depth);\n		gl_FragColor=vec4(foggedColor,v_color.w*u_opacity);\n	}else{\n		\n		if(u_zoom<14.){\n			gl_FragColor=v_color;\n			return;\n		}\n		\n		if(v_texCoord.x<.01||v_texCoord.x>.99||v_texCoord.y<.01){\n			gl_FragColor=vec4(1.,.7,.25,.5);\n			return;\n		}\n		\n		vec2 st=v_texCoord;\n		vec2 UvScale=v_texCoord;\n		vec2 tStep=vec2(.05,.125);\n		vec2 tStart=vec2(tStep.x*.25,tStep.y*.25);\n		vec2 tEnd=vec2(tStep.x*.75,tStep.y*.75);\n		\n		float u=mod(UvScale.x,tStep.x);\n		float v=mod(UvScale.y,tStep.y);\n		float ux=floor(UvScale.x/tStep.x);\n		float uy=floor(UvScale.y/tStep.y);\n		float n=random(vec2(ux,uy));\n		float lightP=u_time;\n		float head=1.-step(.005,st.y);\n		\n		\n		float sU=step(tStart.x,u)-step(tEnd.x,u);\n		float sV=step(tStart.y,v)-step(tEnd.y,v);\n		vec2 windowSize=vec2(abs(tEnd.x-tStart.x),abs(tEnd.y-tStart.y));\n		float dist=sdRect(vec2(u,v),windowSize);\n		float s=sU*sV;\n		\n		float curColId=ux;\n		float sCol=step(targetColId-.2,curColId)-step(targetColId+.2,curColId);\n		\n		float mLightP=mod(lightP,2.);\n		float sRow=step(mLightP-.2,st.y)-step(mLightP,st.y);\n		if(ux==targetColId){\n			n=0.;\n		}\n		\n		\n		\n		vec3 color=mix(baseColor,getWindowColor(n,u_time,brightColor,windowColor),s);\n		\n		float sFinal=s*sCol*sRow;\n		color+=mix(baseColor,brightColor,sFinal*n);\n		\n		if(head==1.){\n			color=brightColor;\n		}\n		color=color*v_lightWeight;\n		\n		vec3 foggedColor=fog(color,fogColor,depth);\n		\n		gl_FragColor=vec4(foggedColor,1.);\n	}\n	\n}";

const {defineComponent:_defineComponent$1} = await importShared('vue');

const {renderList:_renderList,Fragment:_Fragment$1,openBlock:_openBlock$1,createElementBlock:_createElementBlock$1,createElementVNode:_createElementVNode$1,mergeProps:_mergeProps$1} = await importShared('vue');

const _hoisted_1 = ["position", "faceUv", "normal"];
const {watchEffect,reactive: reactive$1} = await importShared('vue');
const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "buildingModels",
  setup(__props) {
    const mapStore = useMapStore();
    const transP3 = (arr) => {
      for (let i = 0; i < arr.length; i += 3) {
        const s = [arr[i], arr[i + 1]];
        const outP = mapStore.mapHandle.customCoords.lngLatToCoord(s);
        arr[i] = outP[0];
        arr[i + 1] = outP[1];
        arr[i + 2] = arr[i + 2] * 0.2;
      }
    };
    const meshList = reactive$1([]);
    const markBuildingsPrimary = async () => {
      const buildingsPrimary = await loadGeojson(("https://opensource.cdn.icegl.cn") + "/json/AMapGIS/latlngbuildings.geojson", "buildings");
      for (let index = 0; index < buildingsPrimary.length; index++) {
        const element = buildingsPrimary[index];
        transP3(element.geometry);
        const positionArray = new Float32Array(element.geometry);
        const uvArray = new Float32Array(element.faceUv);
        const normalArray = new Float32Array(element.geometry.length);
        meshList.push({ positionArray, uvArray, normalArray });
      }
    };
    const tsMaterialConfig = {
      uniforms: {
        u_opacity: { value: 1 },
        u_time: { value: 0.45 },
        u_color: { value: [0.02, 0.15, 0.5, 1] },
        u_zoom: { value: 1 },
        u_brightColor: { value: [1, 1, 1, 1] },
        // 顶线和亮色
        u_windowColor: { value: [0.07, 0.07, 0.03, 1] },
        u_near: { value: 1 },
        u_far: { value: 1e3 }
      },
      vertexShader: buildingModels_default$1,
      fragmentShader: buildingModels_default
    };
    watchEffect(() => {
      if (mapStore.cameraState) {
        markBuildingsPrimary();
      }
    });
    const { onRender } = _l();
    onRender(() => {
      if (mapStore.cameraState) {
        tsMaterialConfig.uniforms.u_zoom.value = mapStore.mapHandle.getZoom();
        tsMaterialConfig.uniforms.u_near.value = mapStore.cameraState.near;
        tsMaterialConfig.uniforms.u_far.value = mapStore.cameraState.far;
      }
    });
    return (_ctx, _cache) => {
      return _openBlock$1(), _createElementBlock$1("TresGroup", null, [
        (_openBlock$1(true), _createElementBlock$1(_Fragment$1, null, _renderList(meshList, (item, index) => {
          return _openBlock$1(), _createElementBlock$1("TresMesh", {
            key: `${index}`
          }, [
            _createElementVNode$1("TresBufferGeometry", {
              ref_for: true,
              ref: "tbgRef",
              position: [item.positionArray, 3],
              faceUv: [item.uvArray, 2],
              normal: [item.normalArray, 3]
            }, null, 8, _hoisted_1),
            _createElementVNode$1("TresShaderMaterial", _mergeProps$1({ ref_for: true }, tsMaterialConfig), null, 16)
          ]);
        }), 128))
      ]);
    };
  }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {createVNode:_createVNode,createElementVNode:_createElementVNode,Suspense:_Suspense,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock,resolveComponent:_resolveComponent,mergeProps:_mergeProps,Fragment:_Fragment,createElementBlock:_createElementBlock} = await importShared('vue');

const {reactive} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "buildings",
  setup(__props) {
    const mapCenter = [121.407867, 31.157717];
    const state = reactive({
      // windowSize: true,
      alpha: true,
      antialias: true,
      clearAlpha: 0,
      renderMode: "manual"
    });
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createElementBlock(_Fragment, null, [
        _createVNode(mapContainer, {
          center: mapCenter,
          zoom: 19,
          pitch: 65.59312320916906,
          mapStyle: "darkblue"
        }),
        _createVNode(_component_TresCanvas, _mergeProps({
          id: "tresCanvas",
          ref: "tcRef"
        }, state), {
          default: _withCtx(() => [
            _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", {
              fov: 60,
              near: 0.1,
              far: 2e3
            }, null, -1)),
            _cache[1] || (_cache[1] = _createElementVNode("TresAmbientLight", { intensity: 0.5 }, null, -1)),
            _createVNode(_sfc_main$2, { center: mapCenter }),
            (_openBlock(), _createBlock(_Suspense, null, {
              default: _withCtx(() => [
                _createVNode(_sfc_main$1)
              ]),
              _: 1
            }))
          ]),
          _: 1
        }, 16)
      ], 64);
    };
  }
});

const buildings = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2ac5f9dc"]]);

export { buildings as default };
//# sourceMappingURL=buildings.BJV1sJa21767105581793.js.map
