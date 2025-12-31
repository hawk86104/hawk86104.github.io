import{importShared as i}from"./3d-tiles-renderer.DZNovkLO1767148983502.js";import{Fs as S,_l as b,Tz as B,Kk as U}from"./index.DTe2qqjO1767148983502.js";import{ClearMaskPass as E,EffectComposer as R,RenderPass as y,MaskPass as V,ShaderPass as G,CopyShader as I}from"./RenderPass.DewL5X8q1767148983502.js";import{UnrealBloomPass as N}from"./UnrealBloomPass.Ct_StmlH1767148983502.js";import{Pass as Q,FullScreenQuad as X}from"./Pass.CNeFv-CX1767148983502.js";const m={uniforms:{tDiffuse:{value:null},tDisp:{value:null},byp:{value:0},amount:{value:.08},angle:{value:.02},seed:{value:.02},seed_x:{value:.02},seed_y:{value:.02},distortion_x:{value:.5},distortion_y:{value:.6},col_s:{value:.05}},vertexShader:`

		varying vec2 vUv;
		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		uniform int byp; //should we apply the glitch ?

		uniform sampler2D tDiffuse;
		uniform sampler2D tDisp;

		uniform float amount;
		uniform float angle;
		uniform float seed;
		uniform float seed_x;
		uniform float seed_y;
		uniform float distortion_x;
		uniform float distortion_y;
		uniform float col_s;

		varying vec2 vUv;


		float rand(vec2 co){
			return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
		}

		void main() {
			if(byp<1) {
				vec2 p = vUv;
				float xs = floor(gl_FragCoord.x / 0.5);
				float ys = floor(gl_FragCoord.y / 0.5);
				//based on staffantans glitch shader for unity https://github.com/staffantan/unityglitch
				float disp = texture2D(tDisp, p*seed*seed).r;
				if(p.y<distortion_x+col_s && p.y>distortion_x-col_s*seed) {
					if(seed_x>0.){
						p.y = 1. - (p.y + distortion_y);
					}
					else {
						p.y = distortion_y;
					}
				}
				if(p.x<distortion_y+col_s && p.x>distortion_y-col_s*seed) {
					if(seed_y>0.){
						p.x=distortion_x;
					}
					else {
						p.x = 1. - (p.x + distortion_x);
					}
				}
				p.x+=disp*seed_x*(seed/5.);
				p.y+=disp*seed_y*(seed/5.);
				//base from RGB shift shader
				vec2 offset = amount * vec2( cos(angle), sin(angle));
				vec4 cr = texture2D(tDiffuse, p + offset);
				vec4 cga = texture2D(tDiffuse, p);
				vec4 cb = texture2D(tDiffuse, p - offset);
				gl_FragColor = vec4(cr.r, cga.g, cb.b, cga.a);
				//add noise
				vec4 snow = 200.*amount*vec4(rand(vec2(xs * seed,ys * seed*50.))*0.2);
				gl_FragColor = gl_FragColor+ snow;
			}
			else {
				gl_FragColor=texture2D (tDiffuse, vUv);
			}
		}`},{DataTexture:$,FloatType:H,MathUtils:a,RedFormat:L,ShaderMaterial:W,UniformsUtils:A}=await i("three");class j extends Q{constructor(e=64){super(),this.uniforms=A.clone(m.uniforms),this.material=new W({uniforms:this.uniforms,vertexShader:m.vertexShader,fragmentShader:m.fragmentShader}),this.goWild=!1,this._heightMap=this._generateHeightmap(e),this.uniforms.tDisp.value=this.heightMap,this._fsQuad=new X(this.material),this._curF=0,this._randX=0,this._generateTrigger()}render(e,s,o){this.uniforms.tDiffuse.value=o.texture,this.uniforms.seed.value=Math.random(),this.uniforms.byp.value=0,this._curF%this._randX==0||this.goWild==!0?(this.uniforms.amount.value=Math.random()/30,this.uniforms.angle.value=a.randFloat(-Math.PI,Math.PI),this.uniforms.seed_x.value=a.randFloat(-1,1),this.uniforms.seed_y.value=a.randFloat(-1,1),this.uniforms.distortion_x.value=a.randFloat(0,1),this.uniforms.distortion_y.value=a.randFloat(0,1),this._curF=0,this._generateTrigger()):this._curF%this._randX<this._randX/5?(this.uniforms.amount.value=Math.random()/90,this.uniforms.angle.value=a.randFloat(-Math.PI,Math.PI),this.uniforms.distortion_x.value=a.randFloat(0,1),this.uniforms.distortion_y.value=a.randFloat(0,1),this.uniforms.seed_x.value=a.randFloat(-.3,.3),this.uniforms.seed_y.value=a.randFloat(-.3,.3)):this.goWild==!1&&(this.uniforms.byp.value=1),this._curF++,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(s),this.clear&&e.clear(),this._fsQuad.render(e))}dispose(){this.material.dispose(),this.heightMap.dispose(),this._fsQuad.dispose()}_generateTrigger(){this._randX=a.randInt(120,240)}_generateHeightmap(e){const s=new Float32Array(e*e),o=e*e;for(let n=0;n<o;n++){const t=a.randFloat(0,1);s[n]=t}const f=new $(s,e,e,L,H);return f.needsUpdate=!0,f}}const{defineComponent:K}=await i("vue"),{unref:q,openBlock:J,createBlock:O}=await i("vue"),{watchEffect:Y}=await i("vue"),l=await i("three"),Z=K({__name:"MaskPass",setup(_){const e=new E,{camera:s,renderer:o,scene:f,sizes:n}=S();let t=null;const h={threshold:0,strength:.972,radius:.21},P=(r,d,D,v,g)=>{const u=new y(r,d);t.addPass(u);const c=new N(new l.Vector2(v,g),h.strength,h.radius,h.threshold);t.addPass(c)},F=(r,d,D,v,g)=>{const u=new l.DirectionalLight(16777215);u.position.set(550,100,550),u.intensity=1.6,r.add(u);let c=new l.Mesh(new l.BoxGeometry(1,1,1),new l.MeshNormalMaterial);c.position.set(1,2,4),r.add(c);var x=new y(r,d);x.clear=!1,t.addPass(x);const T=new V(r,d);t.addPass(T);const k=new j;t.addPass(k),t.addPass(e)},C=()=>{const r=new G(I);r.renderToScreen=!0,t.addPass(r)};Y(()=>{n.width.value&&!t&&(t=new R(o),t.renderTarget1.stencilBuffer=!0,t.renderTarget2.stencilBuffer=!0,P(f.value,s.value,o,n.width.value,n.height.value),F(new l.Scene,s.value,o,n.width.value,n.height.value),C())});const{onRender:M}=b();return M(()=>{t&&(o.autoClear=!1,t.render())}),(r,d)=>(J(),O(q(B),{args:[1,1,1],color:"orange",position:[3,2,1]}))}}),{defineComponent:z}=await i("vue"),{createElementVNode:p,unref:ee,createVNode:w,resolveComponent:te,withCtx:se,openBlock:ae,createBlock:oe}=await i("vue"),ue=z({__name:"MaskPass",setup(_){return(e,s)=>{const o=te("TresCanvas");return ae(),oe(o,{renderMode:"manual","window-size":""},{default:se(()=>[s[0]||(s[0]=p("TresPerspectiveCamera",{position:[10,10,10]},null,-1)),s[1]||(s[1]=p("TresAmbientLight",{intensity:1},null,-1)),w(ee(U)),s[2]||(s[2]=p("TresGridHelper",{args:[10,10]},null,-1)),w(Z)]),_:1})}}});export{ue as default};
