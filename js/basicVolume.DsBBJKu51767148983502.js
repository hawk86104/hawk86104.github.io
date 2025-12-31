import{importShared as a}from"./3d-tiles-renderer.DZNovkLO1767148983502.js";import{Fs as P,_l as C,Kk as F,_export_sfc as T}from"./index.DTe2qqjO1767148983502.js";import{Pane as M}from"./tweakpane.BQRZXf8M1767148983502.js";var R=`precision mediump float;

uniform vec3 u_camera;
uniform vec3 u_resolution;
uniform float u_time;

varying vec3 v_hitPos;
varying vec3 v_hitPosWorldSpace;
varying vec3 v_cameraObjectSpace;

void main() {
  vec3 pos = position;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);

  v_hitPos = position.xyz;

  v_hitPosWorldSpace = (modelMatrix * vec4(position, 1.0)).xyz;

  v_cameraObjectSpace = (inverse(modelMatrix) * vec4(u_camera, 1.0)).xyz;
}`,E=`precision mediump int;
precision mediump float;

uniform vec3 u_camera;
uniform vec3 u_resolution;
uniform mediump sampler3D u_volume;
uniform vec3 u_crossSectionSize;
uniform float u_dt;
uniform float u_time;
uniform float u_color;
uniform float u_isoValue;
uniform float u_alphaVal;

vec3 palette(in float t) {
  vec3 a = vec3(0.5, 0.5, 0.5);
  vec3 b = vec3(0.5, 0.5, 0.5);
  vec3 c = vec3(1.0, 1.0, 1.0);
  vec3 d = vec3(0.00, 0.33, 0.67);

  return a + b * cos(6.28318 * (c * t + d));
}

varying vec3 v_hitPos;
varying vec3 v_hitPosWorldSpace;
varying vec3 v_cameraObjectSpace;

vec2 intersect_box(vec3 orig, vec3 dir) {

  vec3 box_min = vec3(-u_crossSectionSize);
  vec3 box_max = vec3(u_crossSectionSize);
  vec3 inv_dir = 1.0 / dir;
  vec3 tmin_tmp = (box_min - orig) * inv_dir;
  vec3 tmax_tmp = (box_max - orig) * inv_dir;
  vec3 tmin = min(tmin_tmp, tmax_tmp);
  vec3 tmax = max(tmin_tmp, tmax_tmp);
  float t0 = max(tmin.x, max(tmin.y, tmin.z));
  float t1 = min(tmax.x, min(tmax.y, tmax.z));
  return vec2(t0, t1);
}

void main() {
  vec3 rayOrigin = vec3(0.0, 0.0, -3.0);
  rayOrigin = v_cameraObjectSpace;

  vec2 uv = 2.0 * gl_FragCoord.xy / u_resolution.xy - 1.0;
  vec3 rayDir = normalize(vec3(uv, 1.0));
  rayDir = normalize(v_hitPos - rayOrigin);

  vec2 t_hit = intersect_box(rayOrigin, rayDir);
  if (t_hit.x > t_hit.y) {
    discard;
  }

  t_hit.x = max(t_hit.x, 0.0);

  float dt = u_dt;

  vec4 color = vec4(0.0);

  vec3 p = rayOrigin + t_hit.x * rayDir + 0.5;
  for (float t = t_hit.x; t < t_hit.y; t += dt) {

    float textureVal = texture(u_volume, p).r;

    vec4 val_color = vec4(0.0);
    float val_color_alpha = textureVal * 0.1;

    val_color_alpha = smoothstep(0.0, u_alphaVal, val_color_alpha);

    vec3 red = vec3(1.0, 0.0, 0.0);
    vec3 white = vec3(1.0);
    if (abs(u_color - 1.0) <= 0.01) {
      val_color = vec4(white, val_color_alpha);
    } else if (abs(u_color - 2.0) <= 0.01) {
      val_color = vec4(mix(red, white, val_color_alpha), val_color_alpha);
    } else {
      val_color = vec4(palette(textureVal), val_color_alpha);
    }

    color.rgb += (1.0 - color.a) * val_color.a * val_color.rgb;
    color.a += (1.0 - color.a) * val_color.a;

    if (textureVal > u_isoValue) {
      float gxLess = texture(u_volume, vec3(p.x - rayDir.x * u_dt, p.y, p.z)).r;
      float gxMore = texture(u_volume, vec3(p.x + rayDir.x * u_dt, p.y, p.z)).r;
      float dgx = gxMore - gxLess;

      float gyLess = texture(u_volume, vec3(p.x, p.y - rayDir.y * u_dt, p.z)).r;
      float gyMore = texture(u_volume, vec3(p.x, p.y + rayDir.y * u_dt, p.z)).r;
      float dgy = gyMore - gyLess;

      float gzLess = texture(u_volume, vec3(p.x, p.y, p.z - rayDir.z * u_dt)).r;
      float gzMore = texture(u_volume, vec3(p.x, p.y, p.z + rayDir.z * u_dt)).r;
      float dgz = gzMore - gzLess;
      vec3 n = normalize(vec3(dgx, dgy, dgz));

      vec3 lightSource = vec3(1.0);
      vec3 lightDir = normalize(lightSource);
      float diffuseStrength = max(dot(n, lightDir), 0.0);

      vec3 viewSource = normalize(rayOrigin);
      vec3 reflectSource = normalize(reflect(-lightSource, n));
      float specularStrength = max(0.0, dot(viewSource, reflectSource));
      specularStrength = pow(specularStrength, 64.0);

      color.rgb = diffuseStrength * val_color.rgb + specularStrength * val_color.rgb;
      color.rgb *= val_color.rgb;
      color.a = 0.95;
      break;
    }

    if (color.a >= 0.95) {
      break;
    }

    p += rayDir * dt;
  }

  gl_FragColor = color;
}`;const{defineComponent:O}=await a("vue"),{createElementVNode:y,unref:S,openBlock:L,createElementBlock:N}=await a("vue"),$=["rotation-x"],A=["uniforms","vertexShader","fragmentShader"],{ref:b,reactive:j,onMounted:W,watch:U}=await a("vue"),o=await a("three"),l=41,G=O({__name:"basicVolumeRendering",setup(k){const v=window.innerWidth,_=window.innerHeight,g=b(null),n=b(null),d=()=>{fetch("/plugins/volumeRendering/image/nucleon_41x41x41_uint8.raw").then(t=>t.arrayBuffer()).then(t=>{const e=new Uint8Array(t),h=new Uint8Array(l*l*l);for(let m=0;m<e.length;m++)h[m]=e[m];n.value=h}).catch(t=>{console.error("Error fetching volume data:",t)})},x=new o.Clock;x.start();const f=new M().addFolder({title:"Display Settings"}),c=f.addFolder({title:"Cross Section Settings"}),u=new o.Vector3(.5,.5,.5);c.addBinding(u,"x",{label:"X",min:.02,max:.5,step:.02}),c.addBinding(u,"y",{label:"Y",min:.02,max:.5,step:.02}),c.addBinding(u,"z",{label:"Z",min:.02,max:.5,step:.02}),c.expanded=!0;const{camera:D}=P(),r=j({u_camera:{value:D.value?.position},u_resolution:{value:new o.Vector3(v,_,1)},u_dt:{value:.004},u_time:{value:0},u_crossSectionSize:{value:u},u_color:{value:1},u_volume:{value:null},u_isoValue:{value:.2},u_alphaVal:{value:.2}}),s=f.addFolder({title:"Algorithm Settings"});s.addBinding(r.u_dt,"value",{label:"dt",min:4e-4,max:.016,step:2e-4}),s.addBinding(r.u_color,"value",{label:"color",min:1,max:3,step:1}),s.addBinding(r.u_alphaVal,"value",{label:"alphaVal",min:.01,max:1,step:.01}),s.addBinding(r.u_isoValue,"value",{label:"isoValue",min:0,max:1,step:.04}),U(n,t=>{if(t){const e=new o.Data3DTexture(t,l,l,l);e.format=o.RedFormat,e.minFilter=o.LinearFilter,e.magFilter=o.LinearFilter,e.wrapT=o.RepeatWrapping,e.needsUpdate=!0,r.u_volume.value=e}});const{onBeforeRender:B}=C();return B(()=>{r.u_time.value=x.getElapsedTime()}),W(()=>{d()}),(t,e)=>(L(),N("TresMesh",{ref_key:"meshRef",ref:g,"rotation-x":Math.PI/-2},[e[0]||(e[0]=y("TresSphereGeometry",{args:[1,16,16]},null,-1)),y("TresShaderMaterial",{uniforms:r,vertexShader:S(R),fragmentShader:S(E)},null,8,A)],8,$))}}),{defineComponent:H}=await a("vue"),{createElementVNode:i,createTextVNode:I,unref:Z,normalizeProps:K,guardReactiveProps:X,createVNode:p,Suspense:Y,withCtx:w,openBlock:z,createBlock:q,resolveComponent:J,mergeProps:Q,Fragment:ee,createElementBlock:ne}=await a("vue"),{reactive:V}=await a("vue"),te=H({__name:"basicVolume",setup(k){const v=V({windowSize:!0,alpha:!0,antialias:!0,clearAlpha:0,disableRender:!0}),_=V({enableDamping:!0,enableZoom:!0,enablePan:!0,enableRotate:!0,makeDefault:!0});return(g,n)=>{const d=J("TresCanvas");return z(),ne(ee,null,[n[3]||(n[3]=i("div",{class:"info"},[i("a",{href:"https://klacansky.com/open-scivis-datasets/skull/skull_256x256x256_uint8.raw",target:"_blank"}," https://klacansky.com/open-scivis-datasets/skull/skull_256x256x256_uint8.raw "),i("br"),I(" 请自行下载数据集, 复制到 /plugins/volumeRendering/image/skull_256x256x256_uint8.raw 并更改文件请求指向和 dim 大小 ")],-1)),p(d,Q({clearColor:"#201919"},v),{default:w(()=>[n[0]||(n[0]=i("TresPerspectiveCamera",{fov:75,near:.001,far:1e3,position:[-1,.4,-1],"look-at":[0,0,0],up:[0,1,0]},null,-1)),n[1]||(n[1]=i("TresAmbientLight",{intensity:2},null,-1)),p(Z(F),K(X(_)),null,16),(z(),q(Y,null,{default:w(()=>[p(G,{position:[0,0,0]})]),_:1})),n[2]||(n[2]=i("TresGridHelper",{args:[50,50],position:[0,-5,0]},null,-1))]),_:1},16)],64)}}}),ie=T(te,[["__scopeId","data-v-08c577c7"]]);export{ie as default};
