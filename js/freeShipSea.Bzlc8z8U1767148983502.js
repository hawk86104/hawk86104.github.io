import{importShared as d}from"./3d-tiles-renderer.DZNovkLO1767148983502.js";import{Fs as me,kk as fe,Kk as ge}from"./index.DTe2qqjO1767148983502.js";import{_sfc_main as be}from"./viewportGizmo.vue_vue_type_script_setup_true_lang.CkeDp5u91767148983502.js";import{instance as t}from"./Resource.DwxffO9V1767148983502.js";import{_sfc_main$1 as he}from"./index.DFx3vWyO1767148983502.js";import"./skyBoxAmesh.vue_vue_type_script_setup_true_lang.R4i3IxUx1767148983502.js";import"./skyBoxBmesh.vue_vue_type_script_setup_true_lang.D7En_9kn1767148983502.js";import"./skyBoxDmesh.vue_vue_type_script_setup_true_lang.ByNLPS1R1767148983502.js";import{_sfc_main$1 as Q,_sfc_main$3 as Z,loading$2 as ve}from"./generalFont.vue_vue_type_script_setup_true_lang.Cx7Vff0m1767148983502.js";import"./default.vue_vue_type_script_setup_true_lang.Bjy6WD1C1767148983502.js";import"./three-mesh-ui.module.Cv5lk1vQ1767148983502.js";import{_sfc_main as j}from"./domPanel.vue_vue_type_style_index_0_lang.DqrQKbSz1767148983502.js";import"./staticWater.vue_vue_type_script_setup_true_lang.Bssbg6WL1767148983502.js";import"./iceFloor.vue_vue_type_script_setup_true_lang.V2BIOtzV1767148983502.js";import{_sfc_main as we}from"./gerstnerWater.vue_vue_type_script_setup_true_lang.CIhUi6bj1767148983502.js";import"./customWaterMesh.vue_vue_type_script_setup_true_lang.bxur8jrl1767148983502.js";import{Sky as _e,standardizationMeshCopy as u,meshAddEvent as ee,onReadySenceOnce as Se}from"./forEditor.ClSSoy8f1767148983502.js";import{_t as ye,Yt as ke,to as xe,vo as ze}from"./tres-post-processing.DS6bSQFm1767148983502.js";import"./reflectorDiffuse.vue_vue_type_script_setup_true_lang.Cxj_Ip691767148983502.js";import"./reflectorDUDV.vue_vue_type_script_setup_true_lang.DYMkkQ781767148983502.js";import"./reflectorShaderMesh.vue_vue_type_script_setup_true_lang.T7UkXoyg1767148983502.js";import{_sfc_main$6 as ne}from"./dynamicRotatingBase.vue_vue_type_script_setup_true_lang.BVQWYa0i1767148983502.js";import"./whiteFloorMesh.vue_vue_type_script_setup_true_lang.BCd7Uxt-1767148983502.js";import"./gridPlusCom.vue_vue_type_script_setup_true_lang.x_N2tft71767148983502.js";import"./videoFloor.vue_vue_type_script_setup_true_lang.Xg1Eqw4f1767148983502.js";import"./digitalGround.vue_vue_type_script_setup_true_lang.DBVFezcY1767148983502.js";import"./imgFloor.vue_vue_type_script_setup_true_lang.BPVumalx1767148983502.js";import"./reflectorRoundedBox.vue_vue_type_script_setup_true_lang.BOdU7iQo1767148983502.js";import"./particleBase.vue_vue_type_script_setup_true_lang.CIf_5jma1767148983502.js";import"./rippleFloor.vue_vue_type_script_setup_true_lang.BmWDhTNl1767148983502.js";import{_sfc_main$10 as te}from"./customShaderMaterial.vue_vue_type_script_setup_true_lang.B7dQ_CiZ1767148983502.js";import"./index.vue_vue_type_script_setup_true_lang.CjsHShHS1767148983502.js";const{defineComponent:Be}=await d("vue"),{unref:Me,normalizeProps:Ce,guardReactiveProps:$e,createVNode:Te,Suspense:Le,withCtx:Ie,openBlock:ae,createBlock:Ae,createElementBlock:Ee}=await d("vue"),Oe={position:[0,-.002,0]},Fe=Be({__name:"floor",props:{fState:{default:{}},gridState:{default:{}}},setup(B){return(i,o)=>(ae(),Ee("TresGroup",Oe,[(ae(),Ae(Le,null,{default:Ie(()=>[Te(Me(we),Ce($e(i.fState)),null,16)]),_:1}))]))}}),{defineComponent:Pe}=await d("vue"),{unref:ie,createElementVNode:oe,Fragment:De,openBlock:Ne,createElementBlock:Ve}=await d("vue"),Re=["object"],We=["object"],N=await d("three"),{watch:Ge}=await d("vue"),He=Pe({__name:"skylight",props:{curTime:{},direct:{},intensity:{default:1},shadowIntensity:{default:1},toneMapping:{default:N.ACESFilmicToneMapping},toneMappingExposure:{default:1}},setup(B){const i=B,o=new _e;o.scale.setScalar(1e3);const a=o.material.uniforms;a.turbidity.value=10,a.rayleigh.value=1,a.mieCoefficient.value=.005,a.mieDirectionalG.value=.9;const l=new N.Vector3,p=new N.DirectionalLight(16777215,i.intensity);p.castShadow=!0,p.shadow.mapSize.width=2048,p.shadow.mapSize.height=2048,p.shadow.camera.left=-50,p.shadow.camera.right=50,p.shadow.camera.top=50,p.shadow.camera.bottom=-50,p.shadow.radius=i.shadowIntensity;function S(){const y=i.curTime;let m,k,C=.15;const x=(y-6)/12,F=Math.PI*.25*Math.sin(x*Math.PI);m=Math.PI/2-F,k=5+.5*Math.sin(x*Math.PI),C=Math.PI*(i.direct+x),l.setFromSphericalCoords(1,m,C),o.material.uniforms.sunPosition.value.copy(l),p.position.copy(l).multiplyScalar(400),p.intensity=k*i.intensity,p.shadow.intensity=i.shadowIntensity}Ge(()=>[i.curTime,i.direct,i.intensity,i.shadowIntensity],()=>{S()},{immediate:!0});const{renderer:M}=me();return M.toneMappingExposure=i.toneMappingExposure,M.toneMapping=i.toneMapping,(y,m)=>(Ne(),Ve(De,null,[oe("primitive",{object:ie(o)},null,8,Re),oe("primitive",{object:ie(p)},null,8,We)],64))}}),{defineComponent:Ue}=await d("vue"),{unref:Xe,openBlock:Ye,createElementBlock:Ke}=await d("vue"),qe=["object"],Je=await d("three"),{ref:Qe}=await d("vue"),Ze=Ue({__name:"glbsList",setup(B){const i=(n,e,s)=>{n.traverse(r=>{r.isMesh&&(r[s]=e)})},o=(n,e,s)=>{if(n.uuid=e.uuid,n.name=e.name,n.rotation.set(e.rotation.x,e.rotation.y,e.rotation.z),n.position.set(e.position.x,e.position.y,e.position.z),n.scale.set(e.scale.x,e.scale.y,e.scale.z),n.visible=e.visible,n.renderOrder=e.renderOrder,n.castShadow=e.castShadow,n.receiveShadow=e.receiveShadow,i(n,e.castShadow,"castShadow"),i(n,e.receiveShadow,"receiveShadow"),s&&e.actionList&&e.actionList.actions&&Object.keys(e.actionList.actions).length>0){const{mixer:r,actions:c}=fe(Qe(s),n);r.value.timeScale=e.actionList.timeScale||1,Object.keys(e.actionList.actions).forEach(D=>{c[D]&&e.actionList.actions[D]!==0&&c[D].play()})}},a=new Je.Group,l=u(t.getItem("灯塔B.glb").scene);o(l,{uuid:"4c8821f0-8ef6-41c0-a964-6b447bd56239",rotation:{x:0,y:0,z:0},visible:!0,position:{x:-89.642,y:-.784,z:-79.459},scale:{x:.2,y:.2,z:.2},renderOrder:0,castShadow:!1,receiveShadow:!1,name:"灯塔B",actionList:{timeScale:1,actions:{}}},t.getItem("灯塔B.glb").animations),a.add(l);const S=u(t.getItem("货轮B.glb").scene);o(S,{uuid:"670f59b7-487c-4cec-aaed-328e392965ff",rotation:{x:.011340316950557396,y:15718236624510755e-21,z:.0027720668085343394},visible:!0,position:{x:4.891,y:-1.189124326363998,z:10.46},scale:{x:.6,y:.6,z:.6},renderOrder:0,castShadow:!1,receiveShadow:!1,name:"货轮B",actionList:{timeScale:1,actions:{}}},t.getItem("货轮B.glb").animations),a.add(S),ee(S,[{eventType:"click",enabled:!1,function:(n,e,s,r,c)=>{console.log("单击事件:"+e.uuid,n,e,s,r,c)}},{eventType:"doubleclick",enabled:!1,function:(n,e,s,r,c)=>{console.log("双击事件:"+e.uuid,n,e,s,r,c)}},{eventType:"contextmenu",enabled:!1,function:(n,e,s,r,c)=>{console.log("鼠标右键:"+e.uuid,n,e,s,r,c)}},{eventType:"pointerenter",enabled:!0,function:(n,e,s,r,c)=>{window.tvtDomPanel2visible.value=!0,document.body.style.cursor="pointer",console.log("鼠标移入:"+e.uuid,n,e,s,r,c)}},{eventType:"pointerleave",enabled:!0,function:(n,e,s,r,c)=>{window.tvtDomPanel2visible.value=!1,document.body.style.cursor="default",console.log("鼠标移出:"+e.uuid,n,e,s,r,c)}}]);const y=u(t.getItem("游轮A.glb").scene);o(y,{uuid:"75ef2b5c-62d6-4c23-b9c9-e8c2d6cd440a",rotation:{x:-.028761572024479633,y:53580117989377876e-21,z:-.0037255517435211528},visible:!0,position:{x:-25.194,y:-.9499404222230202,z:-44.363},scale:{x:1,y:1,z:1},renderOrder:0,castShadow:!1,receiveShadow:!1,name:"游轮A",actionList:{timeScale:1,actions:{}}},t.getItem("游轮A.glb").animations),a.add(y),ee(y,[{eventType:"click",enabled:!1,function:(n,e,s,r,c)=>{console.log("单击事件:"+e.uuid,n,e,s,r,c)}},{eventType:"doubleclick",enabled:!1,function:(n,e,s,r,c)=>{console.log("双击事件:"+e.uuid,n,e,s,r,c)}},{eventType:"contextmenu",enabled:!1,function:(n,e,s,r,c)=>{console.log("鼠标右键:"+e.uuid,n,e,s,r,c)}},{eventType:"pointerenter",enabled:!0,function:(n,e,s,r,c)=>{console.log("鼠标移入:"+e.uuid,n,e,s,r,c),window.tvtDomPanel1visible.value=!0,document.body.style.cursor="pointer",console.log("鼠标移入:"+e.uuid,n,e,s,r,c)}},{eventType:"pointerleave",enabled:!0,function:(n,e,s,r,c)=>{window.tvtDomPanel1visible.value=!1,document.body.style.cursor="default",console.log("鼠标移出:"+e.uuid,n,e,s,r,c)}}]);const k=u(t.getItem("风电机B.glb").scene);o(k,{uuid:"7229e153-93c4-446f-8c67-319ae4c40487",rotation:{x:-3.141592653589793,y:.8915926535897933,z:-3.141592653589793},visible:!0,position:{x:-20.865000000000002,y:-.523,z:-102.563},scale:{x:1,y:1.2,z:1},renderOrder:0,castShadow:!1,receiveShadow:!1,name:"风电机B",actionList:{timeScale:1,actions:{WindTurbines:1}}},t.getItem("风电机B.glb").animations),a.add(k);const x=u(t.getItem("风电机B.glb").scene);o(x,{uuid:"f0110b48-c960-4ce1-8e98-fbce2fdaa037",rotation:{x:-3.141592653589793,y:.8915926535897933,z:-3.141592653589793},visible:!0,position:{x:31.039,y:-.523,z:-144.81900000000002},scale:{x:1,y:1.2,z:1},renderOrder:0,castShadow:!1,receiveShadow:!1,name:"风电机B",actionList:{timeScale:1,actions:{WindTurbines:1}}},t.getItem("风电机B.glb").animations),a.add(x);const P=u(t.getItem("风电机B.glb").scene);o(P,{uuid:"c5c14774-7b51-4bcc-906d-f1706d951c0a",rotation:{x:-3.141592653589793,y:.8915926535897933,z:-3.141592653589793},visible:!0,position:{x:-18.967,y:-.523,z:-155.776},scale:{x:1,y:1.2,z:1},renderOrder:0,castShadow:!1,receiveShadow:!1,name:"风电机B",actionList:{timeScale:1,actions:{WindTurbines:1}}},t.getItem("风电机B.glb").animations),a.add(P);const W=u(t.getItem("风电机B.glb").scene);o(W,{uuid:"a4b5c472-ebbc-49f6-b4cb-241ef1dd8810",rotation:{x:-3.141592653589793,y:.8915926535897933,z:-3.141592653589793},visible:!0,position:{x:6.238,y:-.523,z:-150.404},scale:{x:1,y:1.2,z:1},renderOrder:0,castShadow:!1,receiveShadow:!1,name:"风电机B",actionList:{timeScale:1,actions:{WindTurbines:1}}},t.getItem("风电机B.glb").animations),a.add(W);const G=u(t.getItem("风电机B.glb").scene);o(G,{uuid:"26aa2615-d20b-4d82-8106-a896781540a8",rotation:{x:-3.141592653589793,y:.8915926535897933,z:-3.141592653589793},visible:!0,position:{x:3.747,y:-.523,z:-100.664},scale:{x:1,y:1.2,z:1},renderOrder:0,castShadow:!1,receiveShadow:!1,name:"风电机B",actionList:{timeScale:1,actions:{WindTurbines:1}}},t.getItem("风电机B.glb").animations),a.add(G);const H=u(t.getItem("风电机B.glb").scene);o(H,{uuid:"87cc1f5b-334b-4dfd-b846-ffdabb6d80f9",rotation:{x:-3.141592653589793,y:.8915926535897933,z:-3.141592653589793},visible:!0,position:{x:29.54,y:-.523,z:-97.354},scale:{x:1,y:1.2,z:1},renderOrder:0,castShadow:!1,receiveShadow:!1,name:"风电机B",actionList:{timeScale:1,actions:{WindTurbines:1}}},t.getItem("风电机B.glb").animations),a.add(H);const U=u(t.getItem("风电机A.glb").scene);o(U,{uuid:"5ae98182-959e-4790-99c4-697f3a71f972",rotation:{x:0,y:0,z:0},visible:!0,position:{x:-47.114000000000004,y:-.49,z:-116.732},scale:{x:2,y:2.5,z:2},renderOrder:0,castShadow:!1,receiveShadow:!1,name:"风电机A",actionList:{timeScale:1,actions:{TurbineRotation:1}}},t.getItem("风电机A.glb").animations),a.add(U);const X=u(t.getItem("浮标A.glb").scene);o(X,{uuid:"52df6326-8128-4687-a752-51b56df75185",rotation:{x:.14006728658097345,y:.010700356584025858,z:.15224562763014243},visible:!0,position:{x:-76.925,y:-2.7408526475183908,z:-18.594},scale:{x:.02,y:.02,z:.02},renderOrder:0,castShadow:!1,receiveShadow:!1,name:"浮标A",actionList:{timeScale:1,actions:{}}},t.getItem("浮标A.glb").animations),a.add(X);const Y=u(t.getItem("浮标A.glb").scene);o(Y,{uuid:"f0c2641d-e5d5-47cd-b638-91cbaf06af5e",rotation:{x:0,y:0,z:0},visible:!0,position:{x:-54.084,y:-.86,z:-18.071},scale:{x:.02,y:.02,z:.02},renderOrder:0,castShadow:!1,receiveShadow:!1,name:"浮标A",actionList:{timeScale:1,actions:{}}},t.getItem("浮标A.glb").animations),a.add(Y);const K=u(t.getItem("浮标A.glb").scene);o(K,{uuid:"6200a408-1b9f-4073-824a-063ae623a5ba",rotation:{x:0,y:0,z:0},visible:!0,position:{x:-24.257,y:-.86,z:-18.071},scale:{x:.02,y:.02,z:.02},renderOrder:0,castShadow:!1,receiveShadow:!1,name:"浮标A",actionList:{timeScale:1,actions:{}}},t.getItem("浮标A.glb").animations),a.add(K);const q=u(t.getItem("浮标A.glb").scene);o(q,{uuid:"c37ca173-1ffd-43d5-8645-254547b96e36",rotation:{x:0,y:0,z:0},visible:!0,position:{x:9.359,y:-.86,z:-18.071},scale:{x:.02,y:.02,z:.02},renderOrder:0,castShadow:!1,receiveShadow:!1,name:"浮标A",actionList:{timeScale:1,actions:{}}},t.getItem("浮标A.glb").animations),a.add(q);const J=u(t.getItem("浮标A.glb").scene);return o(J,{uuid:"59a38498-8204-4279-8d6b-c84704941f3c",rotation:{x:0,y:0,z:0},visible:!0,position:{x:42.304,y:-.86,z:-18.071},scale:{x:.02,y:.02,z:.02},renderOrder:0,castShadow:!1,receiveShadow:!1,name:"浮标A",actionList:{timeScale:1,actions:{}}},t.getItem("浮标A.glb").animations),a.add(J),setTimeout(()=>{Se()},1500),(n,e)=>(Ye(),Ke("primitive",{object:Xe(a)},null,8,qe))}}),{defineComponent:je}=await d("vue"),{unref:I,normalizeProps:se,openBlock:T,createBlock:L,mergeProps:re,createCommentVNode:A,withCtx:ce,Suspense:en}=await d("vue"),{computed:nn}=await d("vue"),tn=await d("three"),an=je({__name:"tresProcessing",props:{postProcessing:{default:{}}},setup(B){const i=B,o=nn(()=>i.postProcessing.isOpenList.Bloom||i.postProcessing.isOpenList.chromaticAberration||i.postProcessing.isOpenList.grid),a=l=>i.postProcessing.isOpenList[l]&&i.postProcessing.configList[l];return(l,p)=>(T(),L(en,null,{default:ce(()=>[o.value?(T(),L(I(ye),{key:0},{default:ce(()=>[a("Bloom")?(T(),L(I(ke),se(re({key:0},l.postProcessing.configList.Bloom)),null,16)):A("",!0),a("chromaticAberration")?(T(),L(I(xe),{key:1,offset:new tn.Vector2(l.postProcessing.configList.chromaticAberration.offsetX,l.postProcessing.configList.chromaticAberration.offsetY),"radial-modulation":l.postProcessing.configList.chromaticAberration.radialModulation,"modulation-offset":l.postProcessing.configList.chromaticAberration.modulationOffset},null,8,["offset","radial-modulation","modulation-offset"])):A("",!0),a("grid")?(T(),L(I(ze),se(re({key:2},l.postProcessing.configList.grid)),null,16)):A("",!0)]),_:1})):A("",!0)]),_:1}))}}),{defineComponent:on}=await d("vue"),{unref:g,mergeProps:b,createVNode:h,Suspense:v,withCtx:w,openBlock:f,createBlock:_,createElementBlock:sn}=await d("vue"),{ref:le}=await d("vue"),rn=on({__name:"extendMeshes",setup(B){const i={length:60,speed:1,width:1.4,bendPosition:1,curvature:.33,backgroundColor:"#D32709",backgroundAlpha:.25,segments:240,arrowColor:"#ffffff",arrowWidth:5.2,arrowHeight:5.6,arrowSpacing:4.6,arrowOffset:0,arrowLineWidth:18,arrowStyle:"chevron",pixelWorldScale:.066},o={length:60,speed:1,width:1.4,bendPosition:1,curvature:.33,backgroundColor:"#0949D3",backgroundAlpha:.25,segments:240,arrowColor:"#ffffff",arrowWidth:5.2,arrowHeight:5.6,arrowSpacing:4.6,arrowOffset:0,arrowLineWidth:18,arrowStyle:"chevron",pixelWorldScale:.066},a={modelValue:{type:"Box",args:[5,1.1,3,2,1,2]},materialType:"TransmissionMaterial",materialProps:{color:"#FFFFFF",roughness:.11,reflectivity:.73,attenuationColor:"#6C6C6C",attenuationDistance:.38,chromaticAberration:0,anisotropicBlur:.37,distortion:.3,temporalDistortion:0,backside:!1,thickness:.17,backsideThickness:.46}},l={text:"MRC集装箱货轮 - 18260GT",size:1.5,height:.22,curveSegments:9,bevelEnabled:!0,bevelThickness:.05,bevelSize:.02,bevelOffset:0,bevelSegments:4,center:!0,materialType:"MeshStandardMaterial",materialProps:{color:"#993B3B",map:null,wireframe:!1,opacity:1,transparent:!1,side:0,alphaTest:0,blending:1,depthTest:!0,depthWrite:!0,emissive:"#000000",emissiveIntensity:1,metalness:.49,roughness:.72,metalnessMap:null,roughnessMap:null,normalMap:null,normalScale:{x:1,y:1},bumpMap:null,bumpScale:1,displacementMap:null,displacementScale:.85,displacementBias:0,aoMap:null,aoMapIntensity:1,envMap:null,envMapIntensity:1}},p={color:"#993B3B",hasArrow:!0,radius:.1,length:10,cutoffRatio:.91,roughness:.16,metalness:.62},S={color:"#344AAB",hasArrow:!0,radius:.1,length:10,cutoffRatio:.91,roughness:.16,metalness:.62},M={modelValue:{type:"Box",args:[5,1.1,2.7,2,1,2]},materialType:"TransmissionMaterial",materialProps:{color:"#FFFFFF",roughness:.11,reflectivity:.73,attenuationColor:"#6C6C6C",attenuationDistance:.38,chromaticAberration:0,anisotropicBlur:.37,distortion:.3,temporalDistortion:0,backside:!1,thickness:.17,backsideThickness:.46}},y={text:"豪华邮轮探险号 - 3280GT",size:1.5,height:.22,curveSegments:9,bevelEnabled:!0,bevelThickness:.05,bevelSize:.02,bevelOffset:0,bevelSegments:4,center:!0,materialType:"MeshStandardMaterial",materialProps:{color:"#344AAB",map:null,wireframe:!1,opacity:1,transparent:!1,side:0,alphaTest:0,blending:1,depthTest:!0,depthWrite:!0,emissive:"#000000",emissiveIntensity:1,metalness:.49,roughness:.72,metalnessMap:null,roughnessMap:null,normalMap:null,normalScale:{x:1,y:1},bumpMap:null,bumpScale:1,displacementMap:null,displacementScale:.85,displacementBias:0,aoMap:null,aoMapIntensity:1,envMap:null,envMapIntensity:1}},m={center:!0,transform:!0,sprite:!1,distanceFactor:3,domContent:`<div class="semi-wrap" aria-hidden="true">
  <div class="semi">
    <div class="ring" style="--p:86;"></div>
    <div class="sheen"></div>
  </div>

  <div class="info">
    <div class="label">仓位</div>
    <div class="percent">86%</div>
  </div>
</div>

<style>
/* 组件局部变量，无全局污染 */
.semi-wrap{
  --size: 240px;
  --thickness: 44px;
  --accent: #2fb0ff;
  --base: rgba(255,255,255,0.08);
  --p: 86;

  width: var(--size);
  height: calc(var(--size)/2 + 56px);
  position: relative;
  font-family: "Segoe UI", Roboto, "PingFang SC", "Helvetica Neue", Arial;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

/* 半圆容器 */
.semi-wrap .semi{
  width: var(--size);
  height: var(--size);
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  overflow: hidden;
  pointer-events: none;
}

/* 环 */
.semi-wrap .ring{
  --d: var(--size);
  width: var(--d);
  height: var(--d);
  border-radius: 50%;
  position: absolute;
  left: 0;
  top: 0;

  transform: rotate(90deg);
  transform-origin: 50% 50%;

  background-image:
    conic-gradient(from 180deg, var(--accent) calc(var(--p) * 1.8deg), transparent 0),
    radial-gradient(circle at center,
      transparent calc(50% - var(--thickness)),
      rgba(0,0,0,0) calc(50% - var(--thickness) + .5px)
    );
  background-blend-mode: normal;

  -webkit-mask:
    radial-gradient(circle at center,
      transparent calc(50% - var(--thickness)),
      black calc(50% - var(--thickness) + .5px)
    );
  mask:
    radial-gradient(circle at center,
      transparent calc(50% - var(--thickness)),
      black calc(50% - var(--thickness) + .5px)
    );
  -webkit-mask-composite: source-in;
  mask-composite: exclude;

  filter: drop-shadow(0 8px 20px rgba(47,176,255,0.14));
}

/* 高光 */
.semi-wrap .sheen{
  position: absolute;
  width: var(--size);
  height: var(--size);
  left: 0;
  top: 0;
  border-radius: 50%;
  pointer-events: none;
  opacity: .9;

  background:
    conic-gradient(from 180deg,
      rgba(255,255,255,0) 0deg,
      rgba(255,255,255,.22) 2deg,
      rgba(255,255,255,0) 4deg,
      transparent 5deg
    );

  -webkit-mask:
    radial-gradient(circle at center,
      transparent calc(50% - var(--thickness)),
      black calc(50% - var(--thickness) + .5px)
    );
  mask:
    radial-gradient(circle at center,
      transparent calc(50% - var(--thickness)),
      black calc(50% - var(--thickness) + .5px)
    );

  animation: sheen-rotate 3.2s linear infinite;
  transform-origin: 50% 50%;
}

/* 发光呼吸 */
.semi-wrap .ring::after{
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  pointer-events: none;

  box-shadow: 0 0 18px rgba(47,176,255,0.12), 0 0 36px rgba(47,176,255,0.06);
  opacity: 1;
  animation: glow 2.8s ease-in-out infinite;

  -webkit-mask:
    radial-gradient(circle at center,
      transparent calc(50% - var(--thickness)),
      black calc(50% - var(--thickness) + .5px)
    );
  mask:
    radial-gradient(circle at center,
      transparent calc(50% - var(--thickness)),
      black calc(50% - var(--thickness) + .5px)
    );
}

/* 信息区 */
.semi-wrap .info{
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 4px;
  text-align: center;
  color: white;
  pointer-events: none;
  width: 100%;
}

.semi-wrap .label{
  font-size: 26px;
  opacity: 1;
  margin-bottom: -8px;
  font-weight: 800;
}

.semi-wrap .percent{
  font-size: 32px;
  font-weight: 800;
  letter-spacing: .4px;
  text-shadow: 0 3px 10px rgba(0,0,0,.45);
}

/* 动效 */
@keyframes sheen-rotate{
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}
@keyframes glow{
  0%   { opacity: .75; transform: scale(1); }
  50%  { opacity: 1;   transform: scale(1.02); }
  100% { opacity: .75; transform: scale(1); }
}
</style>`},k={center:!0,transform:!0,sprite:!1,distanceFactor:3,domContent:`<div class="semi-wrap2" aria-hidden="true">
  <div class="semi">
    <div class="ring" style="--p:68;"></div>
    <div class="sheen"></div>
  </div>

  <div class="info">
    <div class="label">仓位</div>
    <div class="percent">68%</div>
  </div>
</div>

<style>
/* 组件局部变量，无全局污染 */
.semi-wrap2{
  --size: 240px;           /* 外圆直径（半圆基于此） */
  --thickness: 44px;       /* 环厚 */
  --accent: #D32709;       /* 填充色（进度）*/
  --base: rgba(255,255,255,0.08); /* 未填充透明/弱色（尽量透明）*/
  --p: 68;                 /* 默认百分比（0-100），可覆盖到元素上 */

  width: var(--size);
  height: calc(var(--size)/2 + 56px);
  position: relative;
  font-family: "Segoe UI", Roboto, "PingFang SC", "Helvetica Neue", Arial;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

/* 半圆容器 */
.semi-wrap2 .semi{
  width: var(--size);
  height: var(--size);
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  overflow: hidden;
  pointer-events: none;
}

/* 环 */
.semi-wrap2 .ring{
  --d: var(--size);
  width: var(--d);
  height: var(--d);
  border-radius: 50%;
  position: absolute;
  left: 0;
  top: 0;

  transform: rotate(90deg);
  transform-origin: 50% 50%;

  background-image:
    conic-gradient(from 180deg, var(--accent) calc(var(--p) * 1.8deg), transparent 0),
    radial-gradient(circle at center,
      transparent calc(50% - var(--thickness)),
      rgba(0,0,0,0) calc(50% - var(--thickness) + .5px)
    );
  background-blend-mode: normal;

  -webkit-mask:
    radial-gradient(circle at center,
      transparent calc(50% - var(--thickness)),
      black calc(50% - var(--thickness) + .5px)
    );
  mask:
    radial-gradient(circle at center,
      transparent calc(50% - var(--thickness)),
      black calc(50% - var(--thickness) + .5px)
    );
  -webkit-mask-composite: source-in;
  mask-composite: exclude;

  filter: drop-shadow(0 8px 20px rgba(47,176,255,0.14));
}

/* 高光 */
.semi-wrap2 .sheen{
  position: absolute;
  width: var(--size);
  height: var(--size);
  left: 0;
  top: 0;
  border-radius: 50%;
  pointer-events: none;
  opacity: .9;

  background:
    conic-gradient(from 180deg,
      rgba(255,255,255,0) 0deg,
      rgba(255,255,255,.22) 2deg,
      rgba(255,255,255,0) 4deg,
      transparent 5deg
    );

  -webkit-mask:
    radial-gradient(circle at center,
      transparent calc(50% - var(--thickness)),
      black calc(50% - var(--thickness) + .5px)
    );
  mask:
    radial-gradient(circle at center,
      transparent calc(50% - var(--thickness)),
      black calc(50% - var(--thickness) + .5px)
    );

  animation: sheen-rotate 3.2s linear infinite;
  transform-origin: 50% 50%;
}

/* 发光呼吸 */
.semi-wrap2 .ring::after{
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  pointer-events: none;

  box-shadow: 0 0 18px rgba(47,176,255,0.12), 0 0 36px rgba(47,176,255,0.06);
  opacity: 1;
  animation: glow 2.8s ease-in-out infinite;

  -webkit-mask:
    radial-gradient(circle at center,
      transparent calc(50% - var(--thickness)),
      black calc(50% - var(--thickness) + .5px)
    );
  mask:
    radial-gradient(circle at center,
      transparent calc(50% - var(--thickness)),
      black calc(50% - var(--thickness) + .5px)
    );
}

/* 信息区 */
.semi-wrap2 .info{
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 4px;
  text-align: center;
  color: white;
  pointer-events: none;
  width: 100%;
}

.semi-wrap2 .label{
  font-size: 26px;
  opacity: 1;
  margin-bottom: -8px;
  font-weight: 800;
}

.semi-wrap2 .percent{
  font-size: 32px;
  font-weight: 800;
  letter-spacing: .4px;
  text-shadow: 0 3px 10px rgba(0,0,0,.45);
}

/* 动效 */
@keyframes sheen-rotate{
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}
@keyframes glow{
  0%   { opacity: .75; transform: scale(1); }
  50%  { opacity: 1;   transform: scale(1.02); }
  100% { opacity: .75; transform: scale(1); }
}
</style>`},C=le(!1),x=le(!1);return window.tvtDomPanel1visible=C,window.tvtDomPanel2visible=x,(F,P)=>(f(),sn("TresGroup",null,[(f(),_(v,null,{default:w(()=>[h(g(ne),b({position:[-135.023,.1,10.726],rotation:[-1.55,0,0],scale:[5,5,5],name:"滚动箭头组件",uuid:"9d8aa48a-5303-4227-b335-f1740742de50",castShadow:!1,receiveShadow:!1,renderOrder:0,visible:!0},i),null,16)]),_:1})),(f(),_(v,null,{default:w(()=>[h(g(ne),b({position:[95.032,.1,-45.215],rotation:[-1.5915919188276957,-.00017482726218845442,-3.1331871250633148],scale:[5,5,5],name:"滚动箭头组件",uuid:"13b3c540-85ec-4529-93e8-a00027f08a3a",castShadow:!1,receiveShadow:!1,renderOrder:0,visible:!0},o),null,16)]),_:1})),(f(),_(v,null,{default:w(()=>[h(g(te),b({position:[13.619,.851,24.773],rotation:[0,0,0],scale:[7,1,1],name:"图形合集组件",uuid:"59ba73a5-6d86-4c27-977e-78c95c7bb340",castShadow:!1,receiveShadow:!1,renderOrder:0,visible:!0},a),null,16)]),_:1})),(f(),_(v,null,{default:w(()=>[h(g(Q),b({position:[11.285,1.3900000000000001,24.641000000000002],rotation:[-1.6600000000000004,0,0],scale:[1,1,1],name:"标准三维字体",uuid:"85280b80-7a1c-4031-8cc8-aaf70f892041",castShadow:!1,receiveShadow:!1,renderOrder:0,visible:!0},l),null,16)]),_:1})),(f(),_(v,null,{default:w(()=>[h(g(Z),b({position:[-5.89,.354,22.939],rotation:[-1.5298976620779419,-.07073732188678589,-1.5679040721375466],scale:[1.5,1,1.5],name:"箭头线组件",uuid:"ea09fd01-9c32-4e07-838d-28a4d6379448",castShadow:!1,receiveShadow:!1,renderOrder:0,visible:!0},p),null,16)]),_:1})),(f(),_(v,null,{default:w(()=>[h(g(Z),b({position:[-16.14,.354,-30.504],rotation:[-1.5298976620779419,-.07073732188678589,-1.5679040721375466],scale:[1.5,1,1.5],name:"箭头线组件",uuid:"3a2b9c28-5cb3-40c2-9811-4e06fcf7ed3a",castShadow:!1,receiveShadow:!1,renderOrder:0,visible:!0},S),null,16)]),_:1})),(f(),_(v,null,{default:w(()=>[h(g(te),b({position:[2.387,.851,-27.739],rotation:[0,0,0],scale:[6.5,1,1],name:"图形合集组件",uuid:"fdd0ac03-4039-4a30-8c03-a1b5e170fef4",castShadow:!1,receiveShadow:!1,renderOrder:0,visible:!0},M),null,16)]),_:1})),(f(),_(v,null,{default:w(()=>[h(g(Q),b({position:[.40900000000000003,1.3900000000000001,-27.722],rotation:[-1.6600000000000004,0,0],scale:[1,1,1],name:"标准三维字体",uuid:"124add95-dcae-4b8e-98cd-0fb79f90a276",castShadow:!1,receiveShadow:!1,renderOrder:0,visible:!0},y),null,16)]),_:1})),(f(),_(v,null,{default:w(()=>[h(g(j),b({position:[-20.97,14.288,-44.687],rotation:[-9689998818189584e-33,.010000000000000989,2446423349157282e-31],scale:[5,5,5],name:"dom面板",uuid:"00346b27-ba1e-4b17-a699-8ba3248060a6",castShadow:!1,receiveShadow:!1,renderOrder:0,visible:C.value},m),null,16,["visible"])]),_:1})),(f(),_(v,null,{default:w(()=>[h(g(j),b({position:[2.758,9.34,8.858],rotation:[-9689998818189584e-33,.010000000000000989,2446423349157282e-31],scale:[5,5,5],name:"dom面板",uuid:"0c4f4069-85da-4feb-95c1-a808eb53f315",castShadow:!1,receiveShadow:!1,renderOrder:0,visible:x.value},k),null,16,["visible"])]),_:1}))]))}}),{defineComponent:cn}=await d("vue"),{unref:$,createVNode:z,createElementVNode:de,normalizeProps:E,guardReactiveProps:O,openBlock:V,createBlock:pe,createCommentVNode:ue,resolveComponent:ln,withCtx:dn,Fragment:pn,createElementBlock:un}=await d("vue"),R=await d("three"),nt=cn({__name:"freeShipSea",setup(B){const i={size:.8,wireframe:!1,waterColor:"#002E5C",waves:{A:{direction:0,steepness:.16,wavelength:60},B:{direction:30,steepness:.24,wavelength:30},C:{direction:60,steepness:.33,wavelength:15}},meshUUIDList:[{uuid:"670f59b7-487c-4cec-aaed-328e392965ff",floatScale:.4,yOffsetScale:.3},{uuid:"75ef2b5c-62d6-4c23-b9c9-e8c2d6cd440a",floatScale:.4,yOffsetScale:.4},{uuid:"52df6326-8128-4687-a752-51b56df75185",floatScale:1.1,yOffsetScale:.68},{uuid:"f0c2641d-e5d5-47cd-b638-91cbaf06af5e",floatScale:1.1,yOffsetScale:.68},{uuid:"6200a408-1b9f-4073-824a-063ae623a5ba",floatScale:1.2,yOffsetScale:.68},{uuid:"c37ca173-1ffd-43d5-8645-254547b96e36",floatScale:1.2,yOffsetScale:.68},{uuid:"59a38498-8204-4279-8d6b-c84704941f3c",floatScale:1.2,yOffsetScale:.68}],scale:.81},o={cellSize:.6,cellThickness:1,cellColor:"#6f6f6f",sectionColor:"#63e2b7",sectionSize:3.3,sectionThickness:1.5,fadeDistance:25,fadeStrength:1,infiniteGrid:!0},a={type:"desert",on:!0,environmentIntensity:1.2,environmentRotations:{x:.06,y:0,z:0}},l={curTime:7.6,direct:-.1,intensity:1,shadowIntensity:1,toneMapping:1,toneMappingExposure:.99},p={isOpenList:{},configList:{}},S={clearColor:"#201919",windowSize:!0,shadows:!0,toneMapping:R.ACESFilmicToneMapping,toneMappingExposure:.6,shadowMapType:R.PCFSoftShadowMap},M={size:100,lineWidth:2,type:"sphere",placement:"bottom-right",offset:{right:10}};return t.loadResources([{functionName:"GLTFLoader",url:"https://oss.icegl.cn/p/modelServer/models/4海上标识/models/灯塔B.glb"},{functionName:"GLTFLoader",url:"https://oss.icegl.cn/p/modelServer/models/3船/models/货轮B.glb"},{functionName:"GLTFLoader",url:"https://oss.icegl.cn/p/modelServer/models/3船/models/游轮A.glb"},{functionName:"GLTFLoader",url:"https://oss.icegl.cn/p/modelServer/models/4海上标识/models/风电机B.glb"},{functionName:"GLTFLoader",url:"https://oss.icegl.cn/p/modelServer/models/4海上标识/models/风电机A.glb"},{functionName:"GLTFLoader",url:"https://oss.icegl.cn/p/modelServer/models/4海上标识/models/浮标A.glb"}]),(y,m)=>{const k=ln("TresCanvas");return V(),un(pn,null,[z($(ve),{useResourceManager:""}),z(k,E(O(S)),{default:dn(()=>[m[0]||(m[0]=de("TresPerspectiveCamera",{position:[37.98,38.83,49.21],fov:75,aspect:1,near:1,far:1e5},null,-1)),z($(ge),{makeDefault:"",target:new R.Vector3(-1.76,3.13,-19.4)},null,8,["target"]),m[1]||(m[1]=de("TresAmbientLight",{color:16777215,intensity:.5},null,-1)),z($(be),E(O(M)),null,16),z(Fe,{fState:i,gridState:o}),z(He,E(O(l)),null,16),$(t).hasAllFinished.value?(V(),pe(Ze,{key:0})):ue("",!0),$(t).hasAllFinished.value?(V(),pe(rn,{key:1})):ue("",!0),z(an,{postProcessing:p}),z($(he),E(O(a)),null,16)]),_:1},16)],64)}}});export{nt as default};
