import{importShared as c,mergeGeometries as Y}from"./3d-tiles-renderer.DZNovkLO1767148983502.js";import{loading$1 as X,_sfc_main$7 as q}from"./generalFont.vue_vue_type_script_setup_true_lang.Cx7Vff0m1767148983502.js";import"./default.vue_vue_type_script_setup_true_lang.Bjy6WD1C1767148983502.js";import"./three-mesh-ui.module.Cv5lk1vQ1767148983502.js";import"./domPanel.vue_vue_type_style_index_0_lang.DqrQKbSz1767148983502.js";import{Pane as K}from"./tweakpane.BQRZXf8M1767148983502.js";import{NA as G,_l as j,Fs as D,_export_sfc as Q}from"./index.DTe2qqjO1767148983502.js";import{OBJLoader as Z,loadOBJ as ee}from"./util.BSe2cx611767148983502.js";import{RenderPass as te,EffectComposer as ne}from"./RenderPass.DewL5X8q1767148983502.js";import{UnrealBloomPass as oe}from"./UnrealBloomPass.Ct_StmlH1767148983502.js";var ae=`varying vec2 vUv;
void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  vUv = uv;
}`,re=`uniform sampler2D uTextureA;
uniform sampler2D uTextureB;
precision mediump float; 
uniform float uTime;
uniform float uScroll;
varying vec2 vUv;

mat3 rotationMatrix3(vec3 axis, float angle) {
  axis = normalize(axis);
  float s = sin(angle);
  float c = cos(angle);
  float oc = 1. - c;

  return mat3(oc * axis.x * axis.x + c, oc * axis.x * axis.y - axis.z * s,
              oc * axis.z * axis.x + axis.y * s,
              oc * axis.x * axis.y + axis.z * s, oc * axis.y * axis.y + c,
              oc * axis.y * axis.z - axis.x * s,
              oc * axis.z * axis.x - axis.y * s,
              oc * axis.y * axis.z + axis.x * s, oc * axis.z * axis.z + c);
}

void main() {
  vec3 textureA = rotationMatrix3(vec3(10., 6., 3.), sin(uTime) * .1) *
                  texture2D(uTextureA, vUv).xyz;
  

  vec3 textureB = rotationMatrix3(vec3(10., 6., 3.), sin(uTime) * .1) *
                  texture2D(uTextureB, vUv).xyz;
  

  float t = uScroll;
  vec3 pos = mix(textureA, textureB, t);

  gl_FragColor = vec4(pos, 1.);
}`;const y=await c("three"),z=s=>{let n=s.attributes.position.count,i=Math.ceil(Math.sqrt(n)),o=Math.ceil(n/i),a=new Float32Array(i*o*4);function d(e){let g=Math.floor(e.length/3);for(let l=g-1;l>0;l--){const r=Math.floor(Math.random()*(l+1));for(let f=0;f<3;f++){let P=e[l*3+f];e[l*3+f]=e[r*3+f],e[r*3+f]=P}}return e}d(s.attributes.position.array);for(let e=0;e<n;e++){const v=s.attributes.position.array[e*3+0],g=s.attributes.position.array[e*3+1],l=s.attributes.position.array[e*3+2],r=0;a[e*4+0]=v,a[e*4+1]=g,a[e*4+2]=l,a[e*4+3]=r}let t=new y.DataTexture(a,i,o,y.RGBAFormat,y.FloatType);return t.needsUpdate=!0,t},se=()=>new y.ShaderMaterial({uniforms:{uTextureA:{value:null},uTextureB:{value:null},uTime:{value:0},uScroll:{value:0}},vertexShader:ae,fragmentShader:re}),ie=()=>{const s=se(),n=new y.BufferGeometry;return n.setAttribute("position",new y.BufferAttribute(new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,-1,0,1,1,0,-1,1,0]),3)),n.setAttribute("uv",new y.BufferAttribute(new Float32Array([0,1,1,1,1,0,0,1,1,0,0,0]),2)),new y.Mesh(n,s)};var le=`uniform sampler2D
    uPositions; 
uniform float uSize;
uniform float uPixelRatio;
varying vec3 vPos;
varying vec2 vUv;
void main() {
  vec3 pos = texture2D(uPositions, position.xy).xyz;

  float customSize = uSize;

  vec4 modelPosition = modelMatrix * vec4(pos, 1.0);
  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectionPosition = projectionMatrix * viewPosition;

  gl_Position = projectionPosition;
  gl_PointSize = customSize * uPixelRatio;
  gl_PointSize *= (1.0 / -viewPosition.z);

  vPos = pos;
}`,ue=`precision mediump float;
varying vec3 vPos;
uniform vec3 uColor; 
void main() {

  float distanceToCenter = distance(gl_PointCoord, vec2(0.5));
  float strength = 0.05 / distanceToCenter - 0.1;

  

  gl_FragColor = vec4(uColor, strength * length(vPos));
}`;const{defineComponent:ce}=await c("vue"),{unref:me,openBlock:pe,createElementBlock:fe}=await c("vue"),de=["object"],B=await c("three"),ve=ce({__name:"particalMesh",props:{progress:{default:0},width:{default:256},height:{default:256}},setup(s,{expose:n}){const i=s,o=()=>new B.ShaderMaterial({uniforms:{uPositions:{value:null},uSize:{value:12},uPixelRatio:{value:Math.min(window.devicePixelRatio,2)},uColor:{value:new B.Color("#ffaa00")}},vertexShader:le,fragmentShader:ue,transparent:!0,depthWrite:!1,blending:B.AdditiveBlending});let d=((t,e)=>{const v=t*e;let g=new Float32Array(v*3);for(let r=0;r<v;r++){let f=r*3;g[f+0]=r%t/t,g[f+1]=r/t/e}const l=new B.BufferGeometry;return l.setAttribute("position",new B.BufferAttribute(g,3)),new B.Points(l,o())})(i.width,i.height);return n({particles:d}),(t,e)=>(pe(),fe("primitive",{object:me(d)},null,8,de))}}),{withAsyncContext:ge,defineComponent:xe}=await c("vue"),{openBlock:he,createBlock:_e}=await c("vue"),h=await c("three"),{ref:R,watch:U}=await c("vue"),we=xe({__name:"particalFBO",props:{progress:{default:0},width:{default:256},height:{default:256},color:{default:"#ffaa00"}},async setup(s){let n,i;const o=s,a=R(null),d=new h.WebGLRenderTarget(o.width,o.height,{minFilter:h.NearestFilter,magFilter:h.NearestFilter,generateMipmaps:!1,colorSpace:h.SRGBColorSpace,depthBuffer:!1,stencilBuffer:!1,format:h.RGBAFormat,type:h.FloatType}),t=m=>{const u=[];return m.traverse(p=>{p instanceof h.Mesh&&(p.geometry.deleteAttribute("uv"),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("tangent"),u.push(p.geometry))}),Y(u)},e="https://opensource.cdn.icegl.cn",v=e+"/model/medical/brainparts.OBJ",g=new Z,l=([n,i]=ge(()=>ee(v,g)),n=await n,i(),n),r=t(l);r.scale(.01,.01,.01);const f=z(r),P=R(null),T=R(null),b=e+"/model/eCommerce/guanYu.glb",{state:A,nodes:k,materials:Ge,animations:Ue}=G(b,{draco:!0,decoderPath:"./draco/"});U(()=>A.value,m=>{if(m?.scene)try{const u=m.scene||m?.scene||m.scene,p=u.children?.[0]??u,x=t(p);x.rotateX(Math.PI/2),x.translate(0,-.9,0),P.value=z(x)}catch(u){console.warn("guanyu merge error",u)}},{immediate:!0});const O=e+"/model/industry4/modelDraco.glb",{state:H,nodes:Ne,materials:Ve,animations:je}=G(O,{draco:!0,decoderPath:"./draco/"});U(()=>H.value,m=>{if(m?.scene)try{const u=m.scene||m,p=u.children?.[0]??u,x=t(p);x.rotateX(-Math.PI/2),x.rotateY(Math.PI/3),x.translate(0,0,0),T.value=z(x)}catch(u){console.warn("plane merge error",u)}},{immediate:!0});const _=ie(),$=new h.Scene,I=new h.OrthographicCamera(-1,1,1,-1,1/Math.pow(2,53),1);$.add(_);const{onBeforeRender:W}=j(),{camera:J,renderer:C}=D();return W(({elapsed:m})=>{if(C&&J.value&&a.value){C.setRenderTarget(d),C.clear(),C.render($,I),C.setRenderTarget(null);const u=P.value||null,p=f||null,x=T.value||null,F=h.MathUtils.clamp(-o.progress/2,0,1);if(F<1/2?(_.material.uniforms.uTextureA.value=u??p,_.material.uniforms.uTextureB.value=p,_.material.uniforms.uScroll.value=F*2):(_.material.uniforms.uTextureA.value=p,_.material.uniforms.uTextureB.value=x??p,_.material.uniforms.uScroll.value=(F-1/2)*2),_.material.uniforms.uTime.value=m,a.value?.particles?.material?.uniforms){a.value.particles.material.uniforms.uPositions.value=d.texture;const L=a.value.particles.material.uniforms.uColor;L&&L.value.setStyle(o.color)}}}),(m,u)=>(he(),_e(ve,{ref_key:"pMesh",ref:a,progress:m.progress},null,8,["progress"]))}}),{defineComponent:ye}=await c("vue"),{watchEffect:Pe}=await c("vue"),M=await c("three"),Be=ye({__name:"particalPass",props:{use:{type:Boolean,default:!0}},setup(s){const n=s,{camera:i,renderer:o,scene:a,sizes:d}=D(),t={threshold:0,strength:.472,radius:1.61};let e=null;const v=(l,r,f,P,T)=>{const b=new te(l,r),A=new oe(new M.Vector2(P,T),t.strength,t.radius,t.threshold),k=new M.WebGLRenderTarget(P,T,{generateMipmaps:!1,minFilter:M.LinearFilter,magFilter:M.LinearFilter,format:M.RGBAFormat,colorSpace:M.SRGBColorSpace,samples:0});e=new ne(f,k),e.addPass(b),e.addPass(A)};Pe(()=>{d.width.value&&v(a.value,i.value,o,d.width.value,d.height.value)});const{onRender:g}=j();return g(()=>{n.use?e&&e.render():o&&i.value&&o.render(a.value,i.value)}),(l,r)=>null}}),{defineComponent:Me}=await c("vue"),{unref:Te,createVNode:S,createElementVNode:w,Suspense:Ce,withCtx:E,openBlock:N,createBlock:Se,resolveComponent:be,normalizeProps:Ae,guardReactiveProps:Fe,Fragment:ze,createElementBlock:Re}=await c("vue"),{ref:Ee,watchEffect:ke,reactive:$e}=await c("vue"),V=await c("three"),Le=Me({__name:"scrollPartical",setup(s){const n=Ee(0);ke(()=>{console.log("jaime ~ progress:",n.value)});const i={clearColor:"#000",outputColorSpace:V.LinearSRGBColorSpace,toneMapping:V.NoToneMapping,toneMappingExposure:1,windowSize:!0,renderMode:"manual",powerPreference:"high-performance",antialias:!0,alpha:!1,useLegacyLights:!1,physicallyCorrectLights:!0},o=$e({pass:!0,color:"#6aff00"}),a=new K({title:"参数",expanded:!0});return a.addBinding(o,"pass",{label:"后处理"}),a.addBinding(o,"color",{label:"颜色"}),(d,t)=>{const e=be("TresCanvas");return N(),Re(ze,null,[S(Te(X),{styleNum:4}),S(e,Ae(Fe(i)),{default:E(()=>[t[1]||(t[1]=w("TresPerspectiveCamera",{position:[0,0,-4],fov:45,near:.1,far:1e3,"look-at":[0,0,0]},null,-1)),S(Be,{use:o.pass},null,8,["use"]),S(q,{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=v=>n.value=v),distance:10,"smooth-scroll":.1,htmlScroll:""},{default:E(()=>[(N(),Se(Ce,null,{default:E(()=>[S(we,{progress:n.value,color:o.color},null,8,["progress","color"])]),_:1}))]),_:1},8,["modelValue"])]),_:1},16),t[2]||(t[2]=w("main",null,[w("section",null,[w("h1",null,"关羽 - GuanYu")]),w("section",null,[w("h1",{style:{"margin-left":"-11em","margin-bottom":"-10em"}},"大脑 - Brain")]),w("section",null,[w("h1",{style:{"margin-left":"11em","margin-bottom":"-10em"}},"设备 - Device")])],-1))],64)}}}),Qe=Q(Le,[["__scopeId","data-v-9439621a"]]);export{Qe as default};
