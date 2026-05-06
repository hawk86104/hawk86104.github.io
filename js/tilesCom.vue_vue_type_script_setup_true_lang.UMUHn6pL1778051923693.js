import{importShared as c,Ai as E}from"./3d-tiles-renderer.BJbxqKE81778051923693.js";import{useTres as P,useLoop as D,getActivePinia as L}from"./index.B7i7oDbe1778051923693.js";import{applyTransform as R,alignmentCenter as N}from"./utils.BgmbLCkh1778051923693.js";import{B as O}from"./three-custom-shader-material.es.BzYu9Z8O1778051923693.js";import{LineMaterial as z,LineSegmentsGeometry as G,LineSegments2 as S}from"./LineSegments2.DEW1IVrC1778051923693.js";var W=`varying vec3 vPosition;
void main(){
	
	vPosition = position;
	csm_Position=position*vec3(1.);
}`,F=`varying vec3 vPosition; 
uniform vec3 uMax;      
uniform vec3 uMin;      
uniform float uOpacity;
uniform float uBorderWidth;
uniform vec3 uLightColor;
uniform vec3 uColor;
uniform float uCircleTime;
uniform float uTime;
uniform vec3 uTopColor; 
uniform bool uGradient;

void main() {
  vec3 distColor = uColor;

  
  float residue = mod(uTime, uCircleTime);
  float rate = residue / uCircleTime;
  float lightOffset = rate * (uMax.z - uMin.z);

  if (uMin.z + lightOffset < vPosition.z &&
      uMin.z + lightOffset + uBorderWidth > vPosition.z) {
    csm_DiffuseColor = vec4(uLightColor, uOpacity);
  } else {
    csm_DiffuseColor = vec4(distColor, uOpacity);
  }

  
  if (uGradient) {
    float rateHeight = (vPosition.z - uMin.z) / (uMax.z - uMin.z);
    float mixNumber = clamp(rateHeight * 2.3 - 1.5, 0.1, 1.);
    vec3 outColor = mix(csm_DiffuseColor.xyz, uTopColor, mixNumber);
    csm_DiffuseColor = vec4(outColor, uOpacity);
  }
}`;const{defineComponent:U}=await c("vue"),{unref:j,createElementVNode:k,openBlock:H,createElementBlock:A}=await c("vue"),V=["rotation-x"],I=["object"],{watch:f}=await c("vue"),a=await c("three"),X=U({__name:"tilesCom",props:{tilesUrl:{default:"./plugins/geokit/tiles/tileset.json"},isRotation:{type:Boolean,default:!0},isRranslation:{type:Boolean,default:!0},bulidingsColor:{default:"#e523ff"},topColor:{default:"#ffff00"},lightColor:{default:"#ffffff"},borderWidth:{default:5},opacity:{default:.8},gradient:{type:Boolean,default:!0},speed:{default:1},lineOpacity:{default:1},linewidth:{default:1},lineColor:{default:"#000000"}},setup(h,{expose:C}){const i=h,m={value:0},w=()=>{const e=new a.Box3,t=new a.Sphere;let o=null;if(r.getBoundingBox(e)&&!e.isEmpty()?o=e.getCenter(new a.Vector3):r.getBoundingSphere(t)&&Number.isFinite(t.radius)&&t.radius>0&&(o=t.center.clone()),!o)throw new Error("3DTiles 原始坐标尚未准备完成，请稍后再试");const n={lat:0,lon:0,height:0};if(r.ellipsoid.getPositionToCartographic(o,n),!Number.isFinite(n.lon)||!Number.isFinite(n.lat)||!Number.isFinite(n.height))throw new Error("3DTiles 原始坐标解析失败");return{lon:Number(a.MathUtils.radToDeg(n.lon).toFixed(6)),lat:Number(a.MathUtils.radToDeg(n.lat).toFixed(6)),height:Number(n.height.toFixed(3))}},y=()=>{if(!window.gisPlaneEditor_extendMeshes_group)return null;const t=L()?.state?.value?.gisPlaneEditorExtendMeshList?.emxlist;if(!t)return null;let o=r.group?.parent;for(;o;){const n=o.uuid;if(n&&t[n]){const l=t[n];if(l?.object3D)return l.object3D}o=o.parent}return null},b=()=>{const e=y();if(!e)return;const t=w();return e.geoPosition||(e.geoPosition={lon:0,lat:0,height:0}),Object.assign(e.geoPosition,t),t},M=e=>{e.userData.builds=!0;const{geometry:t}=e;t.computeBoundingBox(),t.computeBoundingSphere();const{max:o,min:n}=t.boundingBox,l=new O({baseMaterial:new a.MeshPhongMaterial,vertexShader:W,fragmentShader:F,silent:!0,uniforms:{uMax:{value:o},uMin:{value:n},uBorderWidth:{value:i.borderWidth},uCircleTime:{value:5},uColor:{value:new a.Color(i.bulidingsColor)},uOpacity:{value:i.opacity},uLightColor:{value:new a.Color(i.lightColor)},uTopColor:{value:new a.Color(i.topColor)},uTime:m,uGradient:{value:i.gradient}},depthWrite:!0,depthTest:!0,transparent:!0,side:a.DoubleSide});e.material.dispose(),e.material=l},u=new z({color:i.lineColor,linewidth:i.linewidth,opacity:i.lineOpacity,transparent:!0,depthWrite:!1,depthTest:!0});u.resolution.set(window.innerWidth,window.innerHeight);const x=e=>{const t=new a.EdgesGeometry(e.geometry.clone());let n=new G().fromEdgesGeometry(t);const l=new S(n,u);l.userData.lines=!0,l.applyMatrix4(e.matrix.clone()),e.parent.add(l)},T=({scene:e})=>{e.traverse(t=>{t.isMesh&&t.material&&(M(t),x(t))})},{camera:d,renderer:p,sizes:_}=P(),g=(e,t,o)=>{e.setCamera(t),e.setResolutionFromRenderer(t,o)},v=()=>{let e=new E(i.tilesUrl);return e.fetchOptions.mode="cors",e.errorTarget=12,e.addEventListener("load-model",T),e.addEventListener("load-tile-set",()=>{N(e,i.isRotation,i.isRranslation)}),e.addEventListener("dispose-model",({scene:t})=>{t.traverse(o=>{o.material&&o.material.dispose(),o.userData&&o.userData.lines&&(o.geometry.dispose(),o.material.dispose())})}),g(e,d.value,p),e};let r=v();f(d,()=>{d.value&&g(r,d.value,p)},{immediate:!0});const{onBeforeRender:B}=D();return B(({delta:e})=>{d.value&&_.width.value&&r.update&&(d.value.updateMatrixWorld(),r.update(),m.value+=e*i.speed)}),f(()=>[i.bulidingsColor,i.topColor,i.lightColor,i.borderWidth,i.opacity,i.gradient],([e,t,o,n,l])=>{r.group.traverse(s=>{s.isMesh&&s.userData&&s.userData.builds&&(s.material.uniforms.uColor.value.set(e),s.material.uniforms.uTopColor.value.set(t),s.material.uniforms.uLightColor.value.set(o),s.material.uniforms.uBorderWidth.value=n,s.material.uniforms.uOpacity.value=l,s.material.uniforms.uGradient.value=i.gradient,s.material.needsUpdate=!0)})}),f(()=>[i.lineColor,i.linewidth,i.lineOpacity],([e,t,o])=>{u.color.set(e),u.linewidth=t,u.opacity=o,u.needsUpdate=!0}),f(()=>i.tilesUrl,e=>{e!==r.rootURL&&(r.dispose(),r=v())}),f(()=>[i.isRotation,i.isRranslation],()=>{r.group&&R(r.group,i.isRotation,i.isRranslation)}),C({applyNativeGeoPosition:b}),(e,t)=>(H(),A("TresGroup",{"rotation-x":e.isRotation?-Math.PI/2:0},[k("primitive",{object:j(r).group},null,8,I)],8,V))}});export{X as _sfc_main,F as buildingsShaderMaterial_default,W as buildingsShaderMaterial_default$1};
