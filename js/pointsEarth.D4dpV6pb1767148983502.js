import{importShared as l}from"./3d-tiles-renderer.DZNovkLO1767148983502.js";import{useTexture$1 as P}from"./customShaderMaterial.vue_vue_type_script_setup_true_lang.B7dQ_CiZ1767148983502.js";import"./index.vue_vue_type_script_setup_true_lang.CjsHShHS1767148983502.js";import{Kk as z}from"./index.DTe2qqjO1767148983502.js";import{Pane as b}from"./tweakpane.BQRZXf8M1767148983502.js";var C=`uniform float size;
  uniform sampler2D elevTexture;
  uniform sampler2D alphaTexture;
  uniform float uTime;
  uniform float uWaveHeight;
  uniform float uWaveSpeed;

  varying vec2 vUv;
  varying float vVisible;
  varying float vAlpha;
  varying float vElevation;
  
  float random(vec3 st) {
    return fract(sin(dot(st.xyz, vec3(12.9898,78.233,45.164))) * 43758.5453123);
}

float noise(vec3 st) {
    vec3 i = floor(st);
    vec3 f = fract(st);

    
    float a = random(i);
    float b = random(i + vec3(1.0, 0.0, 0.0));
    float c = random(i + vec3(0.0, 1.0, 0.0));
    float d = random(i + vec3(1.0, 1.0, 0.0));
    float e = random(i + vec3(0.0, 0.0, 1.0));
    float f1 = random(i + vec3(1.0, 0.0, 1.0));
    float g = random(i + vec3(0.0, 1.0, 1.0));
    float h = random(i + vec3(1.0, 1.0, 1.0));

    vec3 u = f * f * (3.0 - 2.0 * f);

    return mix(mix(mix(a, b, u.x), mix(c, d, u.x), u.y),
               mix(mix(e, f1, u.x), mix(g, h, u.x), u.y), u.z);
}

float fbm(vec3 st) {
    float value = 0.0;
    float amplitude = 0.5;

    for (int i = 0; i < 5; i++) {
        value += amplitude * noise(st);
        st *= 2.0;
        amplitude *= 0.5;
    }
    return value;
}

  void main() {
    vUv = uv;
    float alphaLand = 1.0 - texture2D(alphaTexture, vUv).r;
    vAlpha = alphaLand;
    vec3 newPosition = position;

    if(alphaLand < 0.5) {
      
      
      float waveHeight = uWaveHeight; 
      float waveSpeed = uWaveSpeed;  
      float displacement = (fbm(newPosition * 5.0 + uTime * waveSpeed) * 2.0 - 1.0) * waveHeight;
      vElevation = displacement;
      newPosition += normal * displacement ;
    }

    vec4 mvPosition = modelViewMatrix * vec4( newPosition, 1.0 );
    float elv = texture2D(elevTexture, vUv).r;
    vec3 vNormal = normalMatrix * normal;
    vVisible = step(0.0, dot( -normalize(mvPosition.xyz), normalize(vNormal)));
    mvPosition.z += 0.45 * elv;

    
    float dist = length(mvPosition.xyz);
    
    float pointSize = size * (1.0 - dist / 10.0);
    gl_PointSize = max(pointSize, 1.0);
    gl_PointSize = pointSize;
    gl_Position = projectionMatrix * mvPosition;
  }`,E=`uniform sampler2D colorTexture;
  
  uniform sampler2D earthTexture;
  uniform sampler2D starTexture;

  varying vec2 vUv;
  varying float vVisible;
  varying float vAlpha;
  varying float vElevation;

  void main() {
    if (floor(vVisible + 0.1) == 0.0) discard;
    vec2 coord = gl_PointCoord;
    float alpha = texture2D(starTexture, coord).a;
    
    if (alpha < 0.1) discard;

    
    vec3 color = texture2D(colorTexture, vUv).rgb;
    vec3 earth = texture2D(earthTexture, vUv).rgb;
    color = mix(color, earth, 0.65);
    if(
      vAlpha > 0.5
    ) {
      gl_FragColor = vec4(color, vAlpha);
    }else {
      
      float elevationEffect = clamp(vElevation*30.0, -1.0, 1.0); 
      vec3 deep_sea_blue = vec3(0.004, 0.227, 0.388);
      vec3 adjustedColor = mix(deep_sea_blue, earth*1.75, (elevationEffect + 1.0) * 0.5); 
      gl_FragColor = vec4(adjustedColor, 1.0-vAlpha);
    }
  }`;const{withAsyncContext:M,defineComponent:k}=await l("vue"),{createElementVNode:e,unref:D,createVNode:R,mergeProps:m,normalizeProps:B,guardReactiveProps:V,resolveComponent:A,withCtx:H,openBlock:W,createBlock:j}=await l("vue"),f=await l("three"),{shallowRef:c}=await l("vue"),K=k({__name:"pointsEarth",async setup(U){let o,p;const s={color:"#17c5a9",pointSize:4},d={clearColor:"#122148",shadows:!1,alpha:!1,outputColorSpace:f.SRGBColorSpace},g={color:s.color,wireframe:!0,transparent:!0,opacity:.2},a=([o,p]=M(()=>P(["./plugins/earthSample/image/pointsEarth/00_earthmap1k.jpg","./plugins/earthSample/image/pointsEarth/circle.png","./plugins/earthSample/image/pointsEarth/04_rainbow1k.jpg","./plugins/earthSample/image/pointsEarth/01_earthbump1k.jpg","./plugins/earthSample/image/pointsEarth/02_earthspec1k.jpg"])),o=await o,p(),o),h=a[0],x=a[1],_=a[2],T=a[3],y=a[4],t={uniforms:{size:{type:"f",value:s.pointSize},uTime:{type:"f",value:0},uWaveHeight:{type:"f",value:.075},uWaveSpeed:{type:"f",value:.2},colorTexture:{type:"t",value:_},elevTexture:{type:"t",value:T},alphaTexture:{type:"t",value:y},earthTexture:{type:"t",value:h},starTexture:{type:"t",value:x}},vertexShader:C,fragmentShader:E,transparent:!0,side:f.FrontSide},v=c(),u=c(),r=new b().addFolder({title:"Debug"});r.addBinding(s,"color",{type:"color"}).on("change",({value:i})=>{u.value.color.set(i)}),r.addBinding(t.uniforms.size,"value",{min:.1,max:10,step:.1,label:"粒子大小"}),r.addBinding(t.uniforms.uWaveHeight,"value",{min:.01,max:.5,step:.01,label:"海浪高度"}),r.addBinding(t.uniforms.uWaveSpeed,"value",{min:.01,max:1,step:.01,label:"海浪变化速度"});const S=({delta:i})=>{v.value&&(v.value.rotation.y+=.002,t.uniforms.uTime.value+=10*i)};return(i,n)=>{const w=A("TresCanvas");return W(),j(w,m(d,{"window-size":"",onLoop:S}),{default:H(()=>[n[2]||(n[2]=e("TresPerspectiveCamera",{position:[0,0,3.5],fov:45,near:.1,far:20},null,-1)),R(D(z),{autoRotate:!0,autoRotateSpeed:2}),e("TresGroup",{ref_key:"groupRef",ref:v},[e("TresMesh",null,[n[0]||(n[0]=e("TresIcosahedronGeometry",{args:[1,4]},null,-1)),e("TresMeshBasicMaterial",m({ref_key:"wireframeMaterialRef",ref:u},g),null,16)]),e("TresPoints",null,[n[1]||(n[1]=e("TresIcosahedronGeometry",{args:[1,128]},null,-1)),e("TresShaderMaterial",B(V(t)),null,16)])],512),n[3]||(n[3]=e("TresHemisphereLight",{args:["#ffffff","#080820",3]},null,-1))]),_:1},16)}}});export{K as default};
