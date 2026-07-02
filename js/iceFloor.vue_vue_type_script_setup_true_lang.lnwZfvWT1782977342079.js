import{importShared as c}from"./3d-tiles-renderer.XifnC2jl1782977342079.js";import{customShaderMaterial_default as d}from"./index.CksDBZ981782977342079.js";import{useTexture$1 as x}from"./index.vue_vue_type_script_setup_true_lang.C37NIyYf1782977342079.js";import"./index.vue_vue_type_script_setup_true_lang.BuRye2jZ1782977342079.js";var C=`uniform float uParallaxDistance;

varying vec2 vParallax;
varying vec2 vUv;

void main() {

  vUv = uv;

  vec3 pos = position;
  vec4 wPos = modelMatrix * vec4(pos, 1.0);

  mat3 tbn = mat3(vec3(1.,0,0), vec3(0,0.,-1.), vec3(0.,1.,0.));
  tbn = transpose(tbn);

  vec3 viewDir = normalize(wPos.xyz - cameraPosition);
  vec3 tbnViewDir = tbn * viewDir;

  vParallax = tbnViewDir.xy;
  vParallax *= uParallaxDistance / dot(-tbnViewDir, vec3(0.0,0.0,1.0));

  csm_Position = pos;

}`,k=`uniform sampler2D uCracksMap;
uniform sampler2D uTrailMap;
uniform sampler2D uPerlin;
uniform vec3 uTintColor;   
uniform float uTintStrength; 

varying vec2 vParallax;
varying vec2 vUv;

void main() {

  float perlin = texture(uPerlin, vUv).r;
  float perlin2 = texture(uPerlin, vUv * 10.).r;
  vec3 trail = texture(uTrailMap, vUv).rgb;
  float cracks = texture(uCracksMap, vUv * 4.).r;
  float nomalization = 1.0;

  vec3 colorBlue = vec3(0.0,0.2,0.25);
  vec3 colorDeepBlue = vec3(0.0,0.01,0.03);
  vec3 colorGreen = vec3(0.1,0.2,0.35);

  float accumulateFrosted = 0.;

  for (int i = 0; i < 50; i++) {
    float aplitude = float(70 - i) / 1.;
    vec2 uv = vUv * 4. + vParallax * 0.002 * float(i + 1);

    float currCrack = (1. - texture(uCracksMap, uv ).r) * aplitude;

    float currTrail = texture(uTrailMap, vUv + vParallax * 0.0025 * float(i + 1)).r;

    currCrack = currCrack * step(0.7, 1. - pow(currTrail,0.7));

    cracks += currCrack;
    nomalization += aplitude;

    accumulateFrosted += currTrail * aplitude;
  }
  cracks /= nomalization;
  accumulateFrosted /= nomalization;
  cracks += pow(1. - texture(uCracksMap, vUv * 4.).r, 3.) * 3. * step(0.92, 1. - pow(trail.r,0.6));
  
  vec3 cracksParallax = texture(uCracksMap, vUv * 2. + vParallax * 0.1).rgb;

  vec3 frosted = colorBlue * 3. + perlin * 0.6 + perlin2 * 0.6;
  vec3 cracksColor = mix(colorBlue, colorGreen, pow(cracks,1.) * 1.);
  cracksColor += pow(cracks,1.) * 2.;
  cracksColor *= perlin * 8. * colorBlue;
  cracksColor += pow(cracks,1.) * 0.5;

  vec3 prxCracksColor = mix(colorDeepBlue, colorBlue, pow(1. - cracksParallax.r,3.) * 10.);
  prxCracksColor *= perlin;
  
  cracksColor = mix(cracksColor, prxCracksColor, 0.3);

  vec3 deepColor = mix(vec3(0.1,0.7,0.7),vec3(0., 0.3, 1.), 1. - pow(accumulateFrosted,1.5));
  cracksColor = mix(cracksColor, deepColor, pow(accumulateFrosted,1.5));
  vec3 color = mix(cracksColor, frosted, pow(trail.r,0.5) );

  
  color = mix(color, uTintColor, uTintStrength);

  vec2 uvCentered = vUv - 0.5;
  float dist = length(uvCentered * 2.0); 
  float edgeFade = smoothstep(0.6, 1.0, dist); 

  float alpha = mix(1.0, 0.0, edgeFade);

  if (alpha < 0.01) discard;

  csm_DiffuseColor = vec4(color, alpha);
  csm_DepthAlpha = alpha;
}`;const{withAsyncContext:h,defineComponent:g}=await c("vue"),{createElementVNode:p,unref:i,createVNode:w,openBlock:T,createElementBlock:P}=await c("vue"),_=["rotate-x"],e=await c("three"),{watch:S}=await c("vue"),b=g({__name:"iceFloor",props:{uParallaxDistance:{default:1},uTintColor:{default:"#666666"},uTintStrength:{default:.1},uStyle:{default:1}},async setup(v){let o,u;const a=v,s=Array.from({length:7},(r,n)=>`./plugins/water/images/textures/${n+1}.png`);s.push("./plugins/water/images/textures/super-perlin.png");const l=([o,u]=h(()=>x(s)),o=await o,u(),o);l.forEach(r=>{r.colorSpace=e.LinearSRGBColorSpace,r.wrapS=e.RepeatWrapping,r.wrapT=e.RepeatWrapping,r.magFilter=e.LinearFilter,r.minFilter=e.LinearMipmapLinearFilter});const t={uTrailMap:{value:null},uCracksMap:new e.Uniform(l[a.uStyle]),uPerlin:new e.Uniform(l[7]),uParallaxDistance:{value:a.uParallaxDistance},uTintColor:{value:new e.Color(a.uTintColor)},uTintStrength:{value:a.uTintStrength}};return S(()=>[a.uParallaxDistance,a.uTintColor,a.uTintStrength,a.uStyle],([r,n,m,f])=>{t.uParallaxDistance.value=r,t.uTintColor.value.set(n),t.uTintStrength.value=m,t.uCracksMap.value=l[f]}),(r,n)=>(T(),P("TresGroup",null,[p("TresMesh",{"rotate-x":-Math.PI/2},[n[0]||(n[0]=p("TresPlaneGeometry",{args:[40,40]},null,-1)),w(i(d),{baseMaterial:e.MeshPhysicalMaterial,vertexShader:i(C),fragmentShader:i(k),uniforms:t,side:e.DoubleSide,roughness:.14,metalness:.02,clearcoat:.25,clearcoatRoughness:.18,transparent:"",silent:""},null,8,["baseMaterial","vertexShader","fragmentShader","side"])],8,_)]))}});export{b as _sfc_main};
