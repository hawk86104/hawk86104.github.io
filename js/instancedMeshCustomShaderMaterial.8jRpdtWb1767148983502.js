import{importShared as t}from"./3d-tiles-renderer.DZNovkLO1767148983502.js";import{_l as _,oz as b,ol as y,Kk as M}from"./index.DTe2qqjO1767148983502.js";import{_sfc_main as P,_sfc_main$1 as c}from"./customShaderMaterial.vue_vue_type_script_setup_true_lang.B7dQ_CiZ1767148983502.js";import"./index.vue_vue_type_script_setup_true_lang.CjsHShHS1767148983502.js";const w=`
// Precision-adjusted variations of https://www.shadertoy.com/view/4djSRW
float hash(float p) { p = fract(p * 0.011); p *= p + 7.5; p *= p + p; return fract(p); }
float hash(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.13); p3 += dot(p3, p3.yzx + 3.333); return fract((p3.x + p3.y) * p3.z); }

float noise(vec3 x) {
    const vec3 step = vec3(110, 241, 171);

    vec3 i = floor(x);
    vec3 f = fract(x);

    // For performance, compute the base input to a 1D hash from the integer part of the argument and the
    // incremental change to the 1D based on the 3D -> 1D wrapping
    float n = dot(i, step);

    vec3 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(mix(hash(n + dot(step, vec3(0, 0, 0))), hash(n + dot(step, vec3(1, 0, 0))), u.x),
                   mix(hash(n + dot(step, vec3(0, 1, 0))), hash(n + dot(step, vec3(1, 1, 0))), u.x), u.y),
               mix(mix(hash(n + dot(step, vec3(0, 0, 1))), hash(n + dot(step, vec3(1, 0, 1))), u.x),
                   mix(hash(n + dot(step, vec3(0, 1, 1))), hash(n + dot(step, vec3(1, 1, 1))), u.x), u.y), u.z);
}
`,{defineComponent:z}=await t("vue"),{createElementVNode:S,unref:N,createVNode:C,openBlock:T,createElementBlock:k}=await t("vue"),{ref:B,watch:$}=await t("vue"),u=await t("three"),D=z({__name:"instancedMeshCom",setup(g){const i=B(null),r={vertex:`
    uniform float uTime;
		varying vec3 vPosition;
		${w}
    vec3 displace(vec3 point) {
      vec3 instancePosition = (instanceMatrix * vec4(point, 1.)).xyz;
      return instancePosition + (normal * noise((instancePosition * 3.) + uTime) * 0.8);
    }  

    vec3 orthogonal(vec3 v) {
      return normalize(abs(v.x) > abs(v.z) ? vec3(-v.y, v.x, 0.0)
      : vec3(0.0, -v.z, v.y));
    }

    vec3 recalcNormals(vec3 newPos) {
      float offset = 0.001;
      vec3 tangent = orthogonal(normal);
      vec3 bitangent = normalize(cross(normal, tangent));
      vec3 neighbour1 = position + tangent * offset;
      vec3 neighbour2 = position + bitangent * offset;

      vec3 displacedNeighbour1 = displace(neighbour1);
      vec3 displacedNeighbour2 = displace(neighbour2);

      vec3 displacedTangent = displacedNeighbour1 - newPos;
      vec3 displacedBitangent = displacedNeighbour2 - newPos;

      return normalize(cross(displacedTangent, displacedBitangent));
    }

    void main() {
			vPosition = position;
      vec3 p = displace(position);
      csm_PositionRaw = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(p, 1.);
      csm_Normal = recalcNormals(p);
    }
    `,fragment:`
		varying vec3 vPosition;
		// 函数将 HSL 转换为 RGB
		vec3 hsl2rgb(float h, float s, float l) {
				float c = (1.0 - abs(2.0 * l - 1.0)) * s;
				float x = c * (1.0 - abs(mod(h * 6.0, 2.0) - 1.0));
				float m = l - c / 2.0;
				vec3 rgb;
				if (0.0 <= h && h < 1.0 / 6.0) {
						rgb = vec3(c, x, 0.0);
				} else if (1.0 / 6.0 <= h && h < 2.0 / 6.0) {
						rgb = vec3(x, c, 0.0);
				} else if (2.0 / 6.0 <= h && h < 3.0 / 6.0) {
						rgb = vec3(0.0, c, x);
				} else if (3.0 / 6.0 <= h && h < 4.0 / 6.0) {
						rgb = vec3(0.0, x, c);
				} else if (4.0 / 6.0 <= h && h < 5.0 / 6.0) {
						rgb = vec3(x, 0.0, c);
				} else if (5.0 / 6.0 <= h && h < 6.0 / 6.0) {
						rgb = vec3(c, 0.0, x);
				} else {
						rgb = vec3(0.0, 0.0, 0.0);
				}
				rgb += vec3(m);
				return rgb;
		}
    void main() {
      // csm_DiffuseColor = vec4(1.,1.,1.,1.);
			float h = mod(vPosition.x + vPosition.y + vPosition.z, 1.0); // 色相 H: [0, 1)
			float s = 0.9; // 饱和度 S: 固定为 0.8
			float l = 0.4; // 亮度 L: 固定为 0.5
			vec3 rgb = hsl2rgb(h, s, l);
			csm_DiffuseColor = vec4(rgb,1.);
    }
    `},l={uTime:{value:0}},e=new u.Object3D,{onRender:x}=_();return x(({elapsed:a})=>{l.uTime.value=a}),$(()=>i.value,a=>{if(a){let s=0;for(let v=0;v<88;v++)e.position.set(Math.random(),Math.random(),Math.random()),e.rotation.set(Math.random(),Math.random(),Math.random()),e.position.multiplyScalar(10),e.position.x-=5,e.position.y-=5,e.position.z-=5,e.updateMatrix(),a.setMatrixAt(s++,e.matrix);a.instanceMatrix.needsUpdate=!0}}),(a,s)=>(T(),k("TresInstancedMesh",{ref_key:"tmRef",ref:i,args:[null,null,88]},[s[0]||(s[0]=S("TresSphereGeometry",{args:[1,64,64]},null,-1)),C(N(b),{baseMaterial:u.MeshPhysicalMaterial,vertexShader:r.vertex,fragmentShader:r.fragment,uniforms:l,transparent:""},null,8,["baseMaterial","vertexShader","fragmentShader"])],512))}}),{defineComponent:E}=await t("vue"),{createElementVNode:p,unref:o,normalizeProps:R,guardReactiveProps:V,createVNode:n,withCtx:m,Suspense:I,openBlock:f,createBlock:h,mergeProps:j}=await t("vue"),{ACESFilmicToneMapping:L}=await t("three"),{reactive:d}=await t("vue"),K=E({__name:"instancedMeshCustomShaderMaterial",setup(g){const i=d({alpha:!0,toneMapping:L,windowSize:!0,clearColor:"#000000"}),r=d({enableDamping:!0});return(l,e)=>(f(),h(o(y),j(i,{"window-size":""}),{default:m(()=>[e[0]||(e[0]=p("TresPerspectiveCamera",{position:[15,15,15],fov:45,near:1,far:1e3},null,-1)),n(o(M),R(V(r)),null,16),e[1]||(e[1]=p("TresAmbientLight",{intensity:.5},null,-1)),e[2]||(e[2]=p("TresDirectionalLight",{position:[7,10,-5.5],intensity:5},null,-1)),(f(),h(I,null,{default:m(()=>[n(o(P),{intensity:16,resolution:256,background:"",blur:.6},{default:m(()=>[n(o(c),{intensity:2,form:"circle","rotation-x":Math.PI/2,position:[2*4-3*4/2,4,0],scale:[1,5,0]},null,8,["rotation-x"]),n(o(c),{intensity:2,form:"circle","rotation-x":Math.PI/2,position:[-12/2,4,0],scale:[1,5,0]},null,8,["rotation-x"]),n(o(c),{intensity:1,"rotation-y":-Math.PI/2,position:[-1,0,0],scale:[10,.2,1]},null,8,["rotation-y"]),n(o(c),{intensity:1,"rotation-y":-Math.PI/2,position:[1,0,0],scale:[10,.2,1]},null,8,["rotation-y"])]),_:1})]),_:1})),n(D)]),_:1},16))}});export{K as default};
