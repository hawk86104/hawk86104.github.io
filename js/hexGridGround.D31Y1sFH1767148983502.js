import{importShared as a}from"./3d-tiles-renderer.DZNovkLO1767148983502.js";import{no as _,_l as x,oz as B,Kk as k}from"./index.DTe2qqjO1767148983502.js";import{Pane as b}from"./tweakpane.BQRZXf8M1767148983502.js";import{_sfc_main as C}from"./reflectorDUDV.vue_vue_type_script_setup_true_lang.DYMkkQ781767148983502.js";var M=`varying vec2 uvPosition;

uniform float time;

uniform float raisedBottom;
uniform float waveFrequency;
uniform float wavePow;
uniform int direction;

uniform float division;
uniform float divisionScaleX;

uniform bool hasMaskTexture;
uniform sampler2D maskTexture;

uniform bool isReversed;

uniform float gridWeight;

float hexDist(vec2 p) {
  p = abs(p);
  float d = dot(p, normalize(vec2(1.0, 1.73)));
  return max(d, p.x);
}
vec4 hexCoords(vec2 uv) {
  vec2 r = vec2(1.0, 1.73);
  vec2 h = r * 0.5;
  vec2 a = mod(uv, r) - h;
  vec2 b = mod(uv - h, r) - h;

  vec2 gv = length(a) < length(b) ? a : b;
  vec2 id = uv - gv;

  float x = atan(gv.x, gv.y);
  float y = 0.5 - hexDist(gv);

  return vec4(x, y, id);
}

void main() {
  vec2 uv = uvPosition * vec2(division * divisionScaleX, division);
  vec4 hc = hexCoords(uv);
  vec2 id = hc.zw;
  float distance = id.y;
  if (direction == 3) {
    distance = id.x;
  } else if (direction == 5) {
    distance = length(id.xy);
  } else if (direction == 6) {
    vec2 center = vec2(0.5 * division * divisionScaleX, 0.5 * division);
    distance = length(uv - center);
  }
  float wavy =
      pow(sin((distance * waveFrequency - time)), wavePow) + raisedBottom;

  float diffuseColorA = csm_DiffuseColor.a;
  diffuseColorA *= wavy;

  float mask = 1.0;
  if (hasMaskTexture) {
    vec2 uVm = id / vec2(division * divisionScaleX, division);
    mask = texture2D(maskTexture, uVm).g;
  }

  float w = gridWeight + (1.0 - mask);
  w = clamp(w, 0.0, 1.0);

  float margin = clamp(w * 0.33, 0.00, 0.02);
  float stepMax = w + margin;

  float gridLine = smoothstep(w, stepMax, hc.y);
  gridLine = isReversed ? 1.0 - gridLine : gridLine;
  diffuseColorA *= gridLine;

  
  
  csm_DiffuseColor.rgb *= diffuseColorA;

float brightness = length(csm_DiffuseColor.rgb);

float alphaBlend = smoothstep(0.0, 1.0, brightness);

csm_DiffuseColor.a *= alphaBlend;

csm_FragColor = vec4(csm_DiffuseColor.rgb, csm_DiffuseColor.a);
}`;const{defineComponent:T}=await a("vue"),{unref:d,openBlock:y,createBlock:P}=await a("vue"),{watch:S}=await a("vue"),c=await a("three"),$=`
varying vec2 uvPosition;
void main() {
    uvPosition = uv;
}
`,R=T({__name:"hexGridMaterial",props:{baseMaterial:{default:c.MeshBasicMaterial},speed:{default:1},gridWeight:{default:.03},raisedBottom:{default:.05},waveFrequency:{default:.2},wavePow:{default:4},division:{default:32},divisionScaleX:{default:1},direction:{default:4},isReversed:{default:!1},hasMaskTexture:{default:!1},maskTexture:{default:""}},setup(r){const n=r,e={gridWeight:{value:n.gridWeight},raisedBottom:{value:n.raisedBottom},waveFrequency:{value:n.waveFrequency},wavePow:{value:n.wavePow},direction:{value:n.direction},isReversed:{value:n.isReversed},hasMaskTexture:{value:n.hasMaskTexture},maskTexture:{value:null},division:{value:n.division},divisionScaleX:{value:n.divisionScaleX},time:{value:0}};if(n.maskTexture){const{state:t}=_(n.maskTexture);e.maskTexture=t}S(()=>[n.gridWeight,n.raisedBottom,n.waveFrequency,n.wavePow,n.division,n.divisionScaleX,n.direction,n.isReversed,n.hasMaskTexture],([t,o,s,m,f,p,g,h,w])=>{e.gridWeight.value=t,e.raisedBottom.value=o,e.waveFrequency.value=s,e.wavePow.value=m,e.division.value=f,e.divisionScaleX.value=p,e.direction.value=g,e.isReversed.value=h,e.hasMaskTexture.value=w});const{onBeforeRender:i}=x();return i(({delta:t})=>{e.time.value+=t*n.speed}),(t,o)=>(y(),P(d(B),{baseMaterial:r.baseMaterial,vertexShader:$,side:c.DoubleSide,transparent:"",fragmentShader:d(M),uniforms:e},null,8,["baseMaterial","side","fragmentShader"]))}}),{defineComponent:D}=await a("vue"),{createElementVNode:X,unref:E,mergeProps:F,createVNode:V,openBlock:q,createElementBlock:G}=await a("vue"),W=["rotation"],N=await a("three"),L=D({__name:"hexGridMesh",setup(r){const n=N.MeshBasicMaterial;return(e,i)=>(q(),G("TresMesh",{rotation:[-Math.PI/2,0,0]},[i[0]||(i[0]=X("TresPlaneGeometry",{args:[1,1]},null,-1)),V(R,F({baseMaterial:E(n)},e.$attrs,{maskTexture:"./plugins/floor/image/logoBlack.png"}),null,16,["baseMaterial"])],8,W))}}),{defineComponent:z}=await a("vue"),{createElementVNode:A,unref:H,createVNode:l,mergeProps:u,resolveComponent:I,withCtx:K,openBlock:j,createBlock:J}=await a("vue"),{reactive:v}=await a("vue"),Z=z({__name:"hexGridGround",setup(r){const n=v({reflectivity:.8,showGridHelper:!1,scale:1}),e=v({color:"#de62f2",speed:1.9,gridWeight:.223,raisedBottom:.66,waveFrequency:.066,wavePow:19,division:46,divisionScaleX:1,isReversed:!1,direction:4,hasMaskTexture:!0}),i=new b({title:"hexGridGround",expanded:!0});return i.addBinding(e,"hasMaskTexture",{label:"图片纹理"}),i.addBinding(e,"color",{label:"颜色"}),i.addBinding(e,"speed",{label:"速度",min:-5,max:5,step:.1}),i.addBinding(e,"gridWeight",{label:"网格宽度",min:.001,max:.5,step:.001}),i.addBinding(e,"raisedBottom",{label:"渐变宽度",min:.001,max:1,step:.001}),i.addBinding(e,"waveFrequency",{label:"分段",min:.001,max:1,step:.001}),i.addBinding(e,"wavePow",{label:"渐变强度",min:1,max:30,step:.1}),i.addBinding(e,"division",{label:"网格整体缩放",min:.1,max:50,step:.1}),i.addBinding(e,"divisionScaleX",{label:"网格横向缩放",min:.1,max:10,step:.1}),i.addBinding(e,"isReversed",{label:"颜色取反"}),i.addBinding(e,"direction",{label:"方向类别",min:3,max:6,step:1}),(t,o)=>{const s=I("TresCanvas");return j(),J(s,{clearColor:"#666666","window-size":""},{default:K(()=>[o[0]||(o[0]=A("TresPerspectiveCamera",{position:[3,3,0],fov:45,near:.1,far:1e4},null,-1)),l(H(k),{enableDamping:"",autoRotate:""}),l(L,u(e,{scale:9}),null,16),l(C,u({position:[0,-.06,0]},n),null,16)]),_:1})}}});export{Z as default};
