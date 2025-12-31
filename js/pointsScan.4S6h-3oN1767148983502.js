import{importShared as t}from"./3d-tiles-renderer.DZNovkLO1767148983502.js";import{_sfc_main as f}from"./earth.vue_vue_type_script_setup_true_lang.DS1QdSs11767148983502.js";import{_l as _,Kk as C}from"./index.DTe2qqjO1767148983502.js";import{Pane as g}from"./tweakpane.BQRZXf8M1767148983502.js";const{defineComponent:w}=await t("vue"),{createElementVNode:m,normalizeProps:y,guardReactiveProps:P,openBlock:B,createElementBlock:T}=await t("vue"),a=await t("three"),{watch:x}=await t("vue"),S=w({__name:"pointsScan",props:{color:{default:"#FFFFFF"},opacity:{default:1},speed:{default:1}},setup(u){const e=u,o={uniforms:{uTime:{value:0},pointNum:{value:new a.Vector2(32,16)},uColor:{value:new a.Color(e.color)},uOpacity:{value:e.opacity}},transparent:!0,vertexShader:`
					varying vec2 vUv;
                    void main(){
						vUv=uv;
						gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                    }`,fragmentShader:`
					float PI = acos(-1.0);
                    uniform vec3 uColor;
                    uniform vec2 pointNum;
                    uniform float uTime;
                    varying vec2 vUv;
					uniform float uOpacity;
                    void main(){
						vec2 uv = vUv+ vec2(0.0, uTime);
						float current = abs(sin(uv.y * PI));
						if(current < sin(0.4714*PI)) {
							current=current*0.5;
						}
						float d = distance(fract(uv * pointNum*2.0), vec2(0.5, 0.5));

						if(d > current*0.2 ) {
							discard;
						} else {
							gl_FragColor =vec4(uColor,current*uOpacity);
						}
                    }`};x(()=>[e.color,e.opacity],([n,r])=>{o.uniforms.uColor.value=new a.Color(n),o.uniforms.uOpacity.value=r});const{onBeforeRender:p}=_();return p(({delta:n})=>{o.uniforms.uTime.value+=n*.1*e.speed}),(n,r)=>(B(),T("TresMesh",null,[r[0]||(r[0]=m("TresSphereGeometry",{args:[1,32,32]},null,-1)),m("TresShaderMaterial",y(P(o)),null,16)]))}}),{defineComponent:k}=await t("vue"),{createElementVNode:d,unref:N,createVNode:i,Suspense:v,withCtx:l,openBlock:s,createBlock:c,normalizeProps:E,guardReactiveProps:V,resolveComponent:b}=await t("vue"),{reactive:h}=await t("vue"),M=k({__name:"pointsScan",setup(u){const e=h({color:"#ffffff",opacity:.48,speed:4.8,scale:1.1}),o=new g;return o.addBinding(e,"color",{label:"颜色"}),o.addBinding(e,"opacity",{label:"透明度",min:0,max:1,step:.01}),o.addBinding(e,"speed",{label:"速度",min:.1,max:5,step:.1}),o.addBinding(e,"scale",{label:"大小",min:1.01,max:2,step:.01}),(p,n)=>{const r=b("TresCanvas");return s(),c(r,{clearColor:"#201919","window-size":""},{default:l(()=>[n[0]||(n[0]=d("TresPerspectiveCamera",{position:[3,3,0],fov:45,near:.1,far:1e4},null,-1)),i(N(C),{enableDamping:""}),n[1]||(n[1]=d("TresAmbientLight",{intensity:3},null,-1)),(s(),c(v,null,{default:l(()=>[i(f)]),_:1})),(s(),c(v,null,{default:l(()=>[i(S,E(V(e)),null,16)]),_:1}))]),_:1})}}});export{M as default};
