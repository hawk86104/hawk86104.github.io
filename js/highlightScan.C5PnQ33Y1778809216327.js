import{importShared as n}from"./3d-tiles-renderer.C1lnn_Zc1778809216327.js";import{_sfc_main as f}from"./earth.vue_vue_type_script_setup_true_lang.DX-eNCHx1778809216327.js";import{useLoop as _,OrbitControls_default as g}from"./index.CS4UwI0_1778809216327.js";import{Pane as C}from"./tweakpane.BQRZXf8M1778809216327.js";const{defineComponent:w}=await n("vue"),{createElementVNode:m,normalizeProps:y,guardReactiveProps:h,openBlock:B,createElementBlock:P}=await n("vue"),r=await n("three"),{watch:x}=await n("vue"),T=w({__name:"highlightScan",props:{color:{default:"#FFFFFF"},opacity:{default:1},speed:{default:1}},setup(u){const e=u,o={uniforms:{uTime:{value:0},pointNum:{value:new r.Vector2(32,16)},uColor:{value:new r.Color(e.color)},uOpacity:{value:e.opacity}},transparent:!0,vertexShader:`
varying vec2 vUv;

void main(){
    vUv=uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,fragmentShader:`
float PI = acos(-1.0);
uniform vec3 uColor;
uniform float uOpacity;
uniform float uTime;
varying vec2 vUv;

void main(){
    vec2 uv = vUv+ vec2(0.0, uTime);
    float current = abs(sin(uv.y * PI));
    gl_FragColor.rgb = uColor;
    gl_FragColor.a = mix(1.0, 0.0, current);
    gl_FragColor.a = gl_FragColor.a * uOpacity;
}`};x(()=>[e.color,e.opacity],([a,t])=>{o.uniforms.uColor.value=new r.Color(a),o.uniforms.uOpacity.value=t});const{onBeforeRender:p}=_();return p(({delta:a})=>{o.uniforms.uTime.value+=a*.1*e.speed}),(a,t)=>(B(),P("TresMesh",null,[t[0]||(t[0]=m("TresSphereGeometry",{args:[1,32,32]},null,-1)),m("TresShaderMaterial",y(h(o)),null,16)]))}}),{defineComponent:F}=await n("vue"),{createElementVNode:d,unref:S,createVNode:i,Suspense:v,withCtx:l,openBlock:s,createBlock:c,normalizeProps:b,guardReactiveProps:k,resolveComponent:E}=await n("vue"),{reactive:V}=await n("vue"),O=F({__name:"highlightScan",setup(u){const e=V({color:"#9affea",opacity:.58,speed:4.8,scale:1.1}),o=new C;return o.addBinding(e,"color",{label:"颜色"}),o.addBinding(e,"opacity",{label:"透明度",min:0,max:1,step:.01}),o.addBinding(e,"speed",{label:"速度",min:.1,max:5,step:.1}),o.addBinding(e,"scale",{label:"大小",min:1.01,max:2,step:.01}),(p,a)=>{const t=E("TresCanvas");return s(),c(t,{clearColor:"#201919","window-size":""},{default:l(()=>[a[0]||(a[0]=d("TresPerspectiveCamera",{position:[3,3,0],fov:45,near:.1,far:1e4},null,-1)),i(S(g),{enableDamping:""}),a[1]||(a[1]=d("TresAmbientLight",{intensity:3},null,-1)),(s(),c(v,null,{default:l(()=>[i(f)]),_:1})),(s(),c(v,null,{default:l(()=>[i(T,b(k(e)),null,16)]),_:1}))]),_:1})}}});export{O as default};
