import{importShared as a}from"./3d-tiles-renderer.DZNovkLO1767148983502.js";import{_sfc_main as f}from"./earth.vue_vue_type_script_setup_true_lang.DS1QdSs11767148983502.js";import{_l as h,Kk as g}from"./index.DTe2qqjO1767148983502.js";import{Pane as _}from"./tweakpane.BQRZXf8M1767148983502.js";const{defineComponent:C}=await a("vue"),{createElementVNode:v,normalizeProps:S,guardReactiveProps:k,openBlock:x,createElementBlock:y}=await a("vue"),P=["args"],m=await a("three"),{watch:w}=await a("vue"),B=C({__name:"smokeSphere",props:{color:{default:"#FFFFFF"},opacity:{default:1},speed:{default:1},phiLength:{default:2*Math.PI},thetaLength:{default:Math.PI}},setup(c){const e=c,o={uniforms:{iTime:{value:1},smokeStrengthScale:{value:1},uColor:{value:new m.Color(e.color)},uOpacity:{value:e.opacity}},transparent:!0,vertexShader:`
								varying vec2 vUv;
								void main(){
									vUv=uv;
									gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
								}`,fragmentShader:`
		precision highp float;
		varying vec2 vUv;
		uniform float iTime;
		uniform float smokeStrengthScale;
		uniform vec3 uColor;
		uniform float uOpacity;
		float R21 (vec2 p) {
			return fract(sin(dot(p.xy, vec2(2.3245,5.234)))*123.5632145);
		}
		float NoiseValue (vec2 uv) {
			vec2 gv = fract(uv);
			vec2 id = floor(uv);
			gv = gv * gv * (3. - 2. * gv);
			float a = R21(id);
			float b = R21(id + vec2(1., 0.));
			float c = R21(id + vec2(0., 1.));
			float d = R21(id + vec2(1., 1.));
		
			return mix(a, b, gv.x) + (c - a)* gv.y * (1. - gv.x) + (d - b) * gv.x * gv.y;
		}
		float SmoothNoise (vec2 uv) {
		
			float value = 0.;
			float amplitude = .5;
		
			for (int i = 0; i < 8; i++) {
				value += NoiseValue(uv) * amplitude;
				uv *= 2.;
				amplitude *= .5;
			}
			
			return value;
		}
		void main() {
			vec2 uv = 1.0 - vUv;
			vec3 col = vec3(0.);
			vec3 smokeCol = uColor;
			vec2 rn = vec2(0.5, 0.5);
			rn.x = SmoothNoise(uv + 1.984 * vec2(1.7,9.2)+ 0.158*iTime );
			rn.y = SmoothNoise(uv + 1. * vec2(8.3,2.8)+ 0.126*iTime);
			float smokeStrength = smoothstep(0.0, 1.0, SmoothNoise(uv+rn*2.5));
			gl_FragColor = vec4(smokeCol, smokeStrength * smokeStrengthScale * uOpacity);
		}
		`};w(()=>[e.color,e.opacity],([t,n])=>{o.uniforms.uColor.value=new m.Color(t),o.uniforms.uOpacity.value=n});const{onBeforeRender:u}=h();return u(({delta:t})=>{o.uniforms.iTime.value+=t*e.speed}),(t,n)=>(x(),y("TresMesh",null,[v("TresSphereGeometry",{args:[1,32,32,0,t.phiLength,0,t.thetaLength]},null,8,P),v("TresShaderMaterial",S(k(o)),null,16)]))}}),{defineComponent:T}=await a("vue"),{createElementVNode:p,unref:N,createVNode:r,Suspense:d,withCtx:i,openBlock:l,createBlock:s,normalizeProps:b,guardReactiveProps:R,resolveComponent:M}=await a("vue"),{reactive:E}=await a("vue"),I=T({__name:"smokeEarth",setup(c){const e=E({color:"#00d5ff",opacity:.58,speed:1.8,scale:1.1,phiLength:2*Math.PI,thetaLength:Math.PI}),o=new _;return o.addBinding(e,"color",{label:"颜色"}),o.addBinding(e,"opacity",{label:"透明度",min:0,max:1,step:.01}),o.addBinding(e,"speed",{label:"速度",min:.1,max:5,step:.1}),o.addBinding(e,"scale",{label:"大小",min:1.01,max:2,step:.01}),o.addBinding(e,"phiLength",{label:"水平范围",min:0,max:2*Math.PI,step:.01}),o.addBinding(e,"thetaLength",{label:"垂直范围",min:0,max:Math.PI,step:.01}),(u,t)=>{const n=M("TresCanvas");return l(),s(n,{clearColor:"#201919","window-size":""},{default:i(()=>[t[0]||(t[0]=p("TresPerspectiveCamera",{position:[3,3,0],fov:45,near:.1,far:1e4},null,-1)),r(N(g),{enableDamping:""}),t[1]||(t[1]=p("TresAmbientLight",{intensity:3},null,-1)),(l(),s(d,null,{default:i(()=>[r(f)]),_:1})),(l(),s(d,null,{default:i(()=>[r(B,b(R(e)),null,16)]),_:1}))]),_:1})}}});export{I as default};
