import{importShared as m}from"./3d-tiles-renderer.DZNovkLO1767148983502.js";import{rz as k}from"./index.DTe2qqjO1767148983502.js";import{Reflector as E}from"./OimoPhysicsController.C1pzCmuS1767148983502.js";const R=e=>{e.vertexShader=e.vertexShader.replace("void main() {",`
		uniform mat4 textureMatrix;
		out vec4 vCoord;
		out vec3 vToEye;

		void main() {
		`),e.vertexShader=e.vertexShader.replace("#include <project_vertex>",`
		#include <project_vertex>

		vCoord = textureMatrix * vec4(transformed, 1.0);
		vToEye = cameraPosition - (modelMatrix * vec4(transformed, 1.0)).xyz;
		`)},j=e=>{e.fragmentShader=e.fragmentShader.replace("void main() {",`
		uniform sampler2D reflectMap;
		uniform float mirror;
		uniform float mixStrength;
		in vec4 vCoord;
		in vec3 vToEye;

		void main() {
		`),e.fragmentShader=e.fragmentShader.replace("#include <emissivemap_fragment>",`
		#include <emissivemap_fragment>

		vec4 normalColor = texture2D(normalMap, vNormalMapUv * normalScale);
		vec3 reflectNormal = normalize(vec3(normalColor.r * 2.0 - 1.0, normalColor.b, normalColor.g * 2.0 - 1.0));
		vec3 reflectCoord = vCoord.xyz / vCoord.w;
		vec2 reflectUv = reflectCoord.xy + reflectCoord.z * reflectNormal.xz * 0.05;
		vec4 reflectColor = texture2D(reflectMap, reflectUv);

		// Fresnel term
		vec3 toEye = normalize(vToEye);
		float theta = max(dot(toEye, normal), 0.0);
		float reflectance = pow((1.0 - theta), 5.0);

		reflectColor = mix(vec4(0), reflectColor, reflectance);

		diffuseColor.rgb = diffuseColor.rgb * ((1.0 - min(1.0, mirror)) + reflectColor.rgb * mixStrength);
		`)},{withAsyncContext:B,defineComponent:z}=await m("vue"),{unref:p,createElementVNode:c,mergeProps:N,openBlock:V,createElementBlock:G,createCommentVNode:P}=await m("vue"),U={key:0},D=["rotation-x"],H=["object","visible"],{Vector2:T,RepeatWrapping:_,Color:x,GridHelper:A}=await m("three"),{watchEffect:F,ref:v,watch:I,nextTick:O}=await m("vue"),J=z({__name:"reflectorDiffuse",props:{mirror:{default:1},mixStrength:{default:10},showGridHelper:{type:Boolean,default:!0},color:{default:"#ffffff"}},async setup(e){let n,u;const l=e,C=new A(9.5,10),f=v(),s=v(),t=v(),i=new E,h={mirror:{value:l.mirror},mixStrength:{value:l.mixStrength}},{textures:M,isLoading:d}=([n,u]=B(()=>k(["./plugins/floor/image/polished_concrete_basecolor.jpg","./plugins/floor/image/polished_concrete_normal.jpg","./plugins/floor/image/polished_concrete_orm.jpg"])),n=await n,u(),n);let g={};I([d,M],([r,o])=>{if(o&&!r){for(var a=0;a<3;a++)o[a].wrapS=_,o[a].wrapT=_,o[a].repeat.set(16,16);g={color:new x("#444"),metalness:1,roughness:1,map:o[0],metalnessMap:o[2],roughnessMap:o[2],aoMap:o[2],aoMapIntensity:1,normalMap:o[1],normalScale:new T(3,3)},O(()=>{f.value.attributes.uv1=f.value.attributes.uv,t.value.aoMap.channel=1,t.value.onBeforeCompile=w,s.value.add(i),s.value.onBeforeRender=(y,S,b)=>{i.update(y,S,b)}})}});const w=r=>{r.uniforms.reflectMap=i.renderTargetUniform,r.uniforms.textureMatrix=i.textureMatrixUniform,r.uniforms=Object.assign(r.uniforms,h),R(r),j(r)};return F(()=>{l.color&&t.value&&(t.value.color=new x(l.color))}),(r,o)=>p(d)?P("",!0):(V(),G("TresGroup",U,[c("TresMesh",{ref_key:"tmRef",ref:s,"rotation-x":-Math.PI/2,"position-y":-.1},[c("TresPlaneGeometry",{ref_key:"tpgRef",ref:f,args:[10,10]},null,512),c("TresMeshStandardMaterial",N({ref_key:"tmsmRef",ref:t},p(g)),null,16)],8,D),c("primitive",{object:p(C),visible:r.showGridHelper},null,8,H)]))}});export{J as _sfc_main};
