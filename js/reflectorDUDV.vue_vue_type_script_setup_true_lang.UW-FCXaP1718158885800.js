import{bE as b,bF as M,bG as g,bm as w,bH as y,a5 as R,bC as h,aH as _,bk as C,bt as m,aA as T,bB as B,aa as E,B as j,o as U,c as G,a1 as p,T as d}from"./vendor.J2DLLmWp1718158885800.js";import{d as P}from"./dither.glsl.y2WXw1t-1718158885800.js";import{R as F}from"./Reflector.q7IW5c_i1718158885800.js";import"./OimoPhysicsBuffer.b5DejoFC1718158885800.js";const H="\nin vec3 position;\nin vec3 normal;\nin vec2 uv;\n\nuniform mat4 modelMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;\nuniform vec3 cameraPosition;\n\nuniform mat3 uMapTransform;\nuniform mat4 uMatrix;\n\nout vec2 vUv;\nout vec4 vCoord;\nout vec3 vNormal;\nout vec3 vToEye;\n\nvoid main() {\n    vUv = (uMapTransform * vec3(uv, 1.0)).xy;\n    vCoord = uMatrix * vec4(position, 1.0);\n    vNormal = normalMatrix * normal;\n\n    vec4 worldPosition = modelMatrix * vec4(position, 1.0);\n    vToEye = cameraPosition - worldPosition.xyz;\n\n    vec4 mvPosition = viewMatrix * worldPosition;\n    gl_Position = projectionMatrix * mvPosition;\n}\n",N="\nprecision highp float;\n\nuniform sampler2D tMap;\nuniform sampler2D tReflect;\nuniform sampler2D tReflectBlur;\nuniform float uReflectivity;\n\nin vec2 vUv;\nin vec4 vCoord;\nin vec3 vNormal;\nin vec3 vToEye;\n\nout vec4 FragColor;\n\n".concat(P,"\n\nvoid main() {\n    vec2 reflectionUv = vCoord.xy / vCoord.w;\n\n    vec4 dudv = texture(tMap, vUv);\n    vec4 color = texture(tReflect, reflectionUv);\n\n    vec4 blur;\n\n    blur = texture(tReflectBlur, reflectionUv + dudv.rg / 256.0);\n    color = mix(color, blur, smoothstep(1.0, 0.1, dudv.g));\n\n    blur = texture(tReflectBlur, reflectionUv);\n    color = mix(color, blur, smoothstep(0.5, 1.0, dudv.r));\n\n    FragColor = color * mix(0.6, 0.75, dudv.g);\n\n    // Fresnel term\n    vec3 toEye = normalize(vToEye);\n    float theta = max(dot(toEye, vNormal), 0.0);\n    float reflectance = uReflectivity + (1.0 - uReflectivity) * pow((1.0 - theta), 5.0);\n\n    FragColor = mix(vec4(0), FragColor, reflectance);\n\n    #ifdef DITHERING\n        FragColor.rgb = dither(FragColor.rgb);\n    #endif\n\n    FragColor.a = 1.0;\n}\n");class D extends b{constructor({map:t=null,reflectivity:o=0,dithering:s=!1}={}){const e={glslVersion:M,defines:{DITHERING:s},uniforms:{tMap:{value:null},tReflect:{value:null},tReflectBlur:{value:null},uMapTransform:{value:new g},uMatrix:{value:new w},uReflectivity:{value:o}},vertexShader:H,fragmentShader:N,blending:y};t&&(t.updateMatrix(),e.uniforms=Object.assign(e.uniforms,{tMap:{value:t},uMapTransform:{value:t.matrix}})),super(e)}}const z=["scale"],I=["object"],S=["object"],L=R({__name:"reflectorDUDV",props:{reflectivity:{default:.8},showGridHelper:{type:Boolean,default:!0},scale:{default:1},ignoreObjects:{default:[]},size:{default:[10,10]}},async setup(v,{expose:t}){let o,s;const e=v,i=new F,u=new h(e.size[0]-.5,e.size[1]);u.visible=e.showGridHelper;const{map:n}=([o,s]=_(()=>C({map:"./plugins/floor/image/waterdudv.jpg"})),o=await o,s(),o);n.wrapS=m,n.wrapT=m,n.repeat.set(6,3);const l=new D({map:n,reflectivity:e.reflectivity});l.uniforms.tReflect={value:i.renderTarget.texture},l.uniforms.tReflectBlur=i.renderTargetUniform,l.uniforms.uMatrix=i.textureMatrixUniform;const a=new T(new B(e.size[0],e.size[1]),l);return a.rotation.x=-Math.PI/2,a.add(i),a.onBeforeRender=(c,f,x)=>{a.visible=!1,e.ignoreObjects.forEach(r=>{r.isMesh&&(r.visible=!1),r.value&&r.value.isMesh&&(r.value.visible=!1)}),i.update(c,f,x),e.ignoreObjects.forEach(r=>{r.isMesh&&(r.visible=!0),r.value&&r.value.isMesh&&(r.value.visible=!0)}),a.visible=!0},E(()=>{e.reflectivity&&(l.uniforms.uReflectivity.value=e.reflectivity)}),j(()=>e.showGridHelper,c=>{u.visible=c}),t({reflector:i}),(c,f)=>(U(),G("TresGroup",{scale:e.scale},[p("primitive",{object:d(a),"position-y":-.01},null,8,I),p("primitive",{object:d(u)},null,8,S)],8,z))}});export{L as _};