import{importShared as m,Ai as b}from"./3d-tiles-renderer.DZNovkLO1767148983502.js";import{Fs as x,_l as T}from"./index.DTe2qqjO1767148983502.js";import{applyTransform as B,alignmentCenter as R}from"./utils.Dy5vlvhc1767148983502.js";import{B as E}from"./three-custom-shader-material.es.DIiohWIA1767148983502.js";import{LineMaterial as L,LineSegmentsGeometry as O,LineSegments2 as z}from"./LineSegments2.BWdpcsAi1767148983502.js";var D=`varying vec3 vPosition;
void main(){
	
	vPosition = position;
	csm_Position=position*vec3(1.);
}`,W=`varying vec3 vPosition; 
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
}`;const{defineComponent:P}=await m("vue"),{unref:S,createElementVNode:G,openBlock:k,createElementBlock:U}=await m("vue"),N=["rotation-x"],H=["object"],{watch:f}=await m("vue"),s=await m("three"),$=P({__name:"tilesCom",props:{tilesUrl:{default:"./plugins/geokit/tiles/tileset.json"},isRotation:{type:Boolean,default:!0},isRranslation:{type:Boolean,default:!0},bulidingsColor:{default:"#e523ff"},topColor:{default:"#ffff00"},lightColor:{default:"#ffffff"},borderWidth:{default:5},opacity:{default:.8},gradient:{type:Boolean,default:!0},speed:{default:1},lineOpacity:{default:1},linewidth:{default:1},lineColor:{default:"#000000"}},setup(C){const t=C,p={value:0},h=e=>{e.userData.builds=!0;const{geometry:o}=e;o.computeBoundingBox(),o.computeBoundingSphere();const{max:i,min:d}=o.boundingBox,a=new E({baseMaterial:new s.MeshPhongMaterial,vertexShader:D,fragmentShader:W,silent:!0,uniforms:{uMax:{value:i},uMin:{value:d},uBorderWidth:{value:t.borderWidth},uCircleTime:{value:5},uColor:{value:new s.Color(t.bulidingsColor)},uOpacity:{value:t.opacity},uLightColor:{value:new s.Color(t.lightColor)},uTopColor:{value:new s.Color(t.topColor)},uTime:p,uGradient:{value:t.gradient}},depthWrite:!0,depthTest:!0,transparent:!0,side:s.DoubleSide});e.material.dispose(),e.material=a},l=new L({color:t.lineColor,linewidth:t.linewidth,opacity:t.lineOpacity,transparent:!0,depthWrite:!1,depthTest:!0});l.resolution.set(window.innerWidth,window.innerHeight);const y=e=>{const o=new s.EdgesGeometry(e.geometry.clone());let d=new O().fromEdgesGeometry(o);const a=new z(d,l);a.userData.lines=!0,a.applyMatrix4(e.matrix.clone()),e.parent.add(a)},w=({scene:e})=>{e.traverse(o=>{o.isMesh&&o.material&&(h(o),y(o))})},{camera:u,renderer:c,sizes:M}=x(),v=(e,o,i)=>{e.setCamera(o),e.setResolutionFromRenderer(o,i)},g=()=>{let e=new b(t.tilesUrl);return e.fetchOptions.mode="cors",e.errorTarget=12,e.addEventListener("load-model",w),e.addEventListener("load-tile-set",()=>{R(e,t.isRotation,t.isRranslation)}),e.addEventListener("dispose-model",({scene:o})=>{o.traverse(i=>{i.material&&i.material.dispose(),i.userData&&i.userData.lines&&(i.geometry.dispose(),i.material.dispose())})}),v(e,u.value,c),e};let r=g();f(u,()=>{u.value&&v(r,u.value,c)},{immediate:!0});const{onBeforeRender:_}=T();return _(({delta:e})=>{u.value&&M.width.value&&r.update&&(u.value.updateMatrixWorld(),r.update(),p.value+=e*t.speed)}),f(()=>[t.bulidingsColor,t.topColor,t.lightColor,t.borderWidth,t.opacity,t.gradient],([e,o,i,d,a])=>{r.group.traverse(n=>{n.isMesh&&n.userData&&n.userData.builds&&(n.material.uniforms.uColor.value.set(e),n.material.uniforms.uTopColor.value.set(o),n.material.uniforms.uLightColor.value.set(i),n.material.uniforms.uBorderWidth.value=d,n.material.uniforms.uOpacity.value=a,n.material.uniforms.uGradient.value=t.gradient,n.material.needsUpdate=!0)})}),f(()=>[t.lineColor,t.linewidth,t.lineOpacity],([e,o,i])=>{l.color.set(e),l.linewidth=o,l.opacity=i,l.needsUpdate=!0}),f(()=>t.tilesUrl,e=>{e!==r.rootURL&&(r.dispose(),r=g())}),f(()=>[t.isRotation,t.isRranslation],()=>{r.group&&B(r.group,t.isRotation,t.isRranslation)}),(e,o)=>(k(),U("TresGroup",{"rotation-x":e.isRotation?-Math.PI/2:0},[G("primitive",{object:S(r).group},null,8,H)],8,N))}});export{$ as _sfc_main,W as buildingsShaderMaterial_default,D as buildingsShaderMaterial_default$1};
