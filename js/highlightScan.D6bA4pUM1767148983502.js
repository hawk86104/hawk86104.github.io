import{importShared as n}from"./3d-tiles-renderer.DZNovkLO1767148983502.js";import{_sfc_main as _}from"./earth.vue_vue_type_script_setup_true_lang.DS1QdSs11767148983502.js";import{_l as f,Kk as g}from"./index.DTe2qqjO1767148983502.js";import{Pane as C}from"./tweakpane.BQRZXf8M1767148983502.js";const{defineComponent:w}=await n("vue"),{createElementVNode:p,normalizeProps:y,guardReactiveProps:h,openBlock:B,createElementBlock:P}=await n("vue"),r=await n("three"),{watch:x}=await n("vue"),T=w({__name:"highlightScan",props:{color:{default:"#FFFFFF"},opacity:{default:1},speed:{default:1}},setup(u){const e=u,o={uniforms:{uTime:{value:0},pointNum:{value:new r.Vector2(32,16)},uColor:{value:new r.Color(e.color)},uOpacity:{value:e.opacity}},transparent:!0,vertexShader:`
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
}`};x(()=>[e.color,e.opacity],([a,t])=>{o.uniforms.uColor.value=new r.Color(a),o.uniforms.uOpacity.value=t});const{onBeforeRender:m}=f();return m(({delta:a})=>{o.uniforms.uTime.value+=a*.1*e.speed}),(a,t)=>(B(),P("TresMesh",null,[t[0]||(t[0]=p("TresSphereGeometry",{args:[1,32,32]},null,-1)),p("TresShaderMaterial",y(h(o)),null,16)]))}}),{defineComponent:F}=await n("vue"),{createElementVNode:d,unref:S,createVNode:i,Suspense:v,withCtx:l,openBlock:s,createBlock:c,normalizeProps:k,guardReactiveProps:b,resolveComponent:E}=await n("vue"),{reactive:V}=await n("vue"),M=F({__name:"highlightScan",setup(u){const e=V({color:"#9affea",opacity:.58,speed:4.8,scale:1.1}),o=new C;return o.addBinding(e,"color",{label:"颜色"}),o.addBinding(e,"opacity",{label:"透明度",min:0,max:1,step:.01}),o.addBinding(e,"speed",{label:"速度",min:.1,max:5,step:.1}),o.addBinding(e,"scale",{label:"大小",min:1.01,max:2,step:.01}),(m,a)=>{const t=E("TresCanvas");return s(),c(t,{clearColor:"#201919","window-size":""},{default:l(()=>[a[0]||(a[0]=d("TresPerspectiveCamera",{position:[3,3,0],fov:45,near:.1,far:1e4},null,-1)),i(S(g),{enableDamping:""}),a[1]||(a[1]=d("TresAmbientLight",{intensity:3},null,-1)),(s(),c(v,null,{default:l(()=>[i(_)]),_:1})),(s(),c(v,null,{default:l(()=>[i(T,k(b(e)),null,16)]),_:1}))]),_:1})}}});export{M as default};
