import{importShared as l}from"./3d-tiles-renderer.DZNovkLO1767148983502.js";import{Fs as U,_l as F,Kk as k}from"./index.DTe2qqjO1767148983502.js";import{RenderPass as N,EffectComposer as S,ShaderPass as b}from"./RenderPass.DewL5X8q1767148983502.js";import{UnrealBloomPass as V}from"./UnrealBloomPass.Ct_StmlH1767148983502.js";import{FilmPass as H}from"./FilmPass.Dd44K0yX1767148983502.js";import{AfterimagePass as O}from"./AfterimagePass.wPbmk7rn1767148983502.js";const{Vector2:R}=await l("three"),$={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new R(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec2 resolution;
		varying vec2 vUv;

		#define EDGE_STEP_COUNT 6
		#define EDGE_GUESS 8.0
		#define EDGE_STEPS 1.0, 1.5, 2.0, 2.0, 2.0, 4.0
		const float edgeSteps[EDGE_STEP_COUNT] = float[EDGE_STEP_COUNT]( EDGE_STEPS );

		float _ContrastThreshold = 0.0312;
		float _RelativeThreshold = 0.063;
		float _SubpixelBlending = 1.0;

		vec4 Sample( sampler2D  tex2D, vec2 uv ) {

			return texture( tex2D, uv );

		}

		float SampleLuminance( sampler2D tex2D, vec2 uv ) {

			return dot( Sample( tex2D, uv ).rgb, vec3( 0.3, 0.59, 0.11 ) );

		}

		float SampleLuminance( sampler2D tex2D, vec2 texSize, vec2 uv, float uOffset, float vOffset ) {

			uv += texSize * vec2(uOffset, vOffset);
			return SampleLuminance(tex2D, uv);

		}

		struct LuminanceData {

			float m, n, e, s, w;
			float ne, nw, se, sw;
			float highest, lowest, contrast;

		};

		LuminanceData SampleLuminanceNeighborhood( sampler2D tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData l;
			l.m = SampleLuminance( tex2D, uv );
			l.n = SampleLuminance( tex2D, texSize, uv,  0.0,  1.0 );
			l.e = SampleLuminance( tex2D, texSize, uv,  1.0,  0.0 );
			l.s = SampleLuminance( tex2D, texSize, uv,  0.0, -1.0 );
			l.w = SampleLuminance( tex2D, texSize, uv, -1.0,  0.0 );

			l.ne = SampleLuminance( tex2D, texSize, uv,  1.0,  1.0 );
			l.nw = SampleLuminance( tex2D, texSize, uv, -1.0,  1.0 );
			l.se = SampleLuminance( tex2D, texSize, uv,  1.0, -1.0 );
			l.sw = SampleLuminance( tex2D, texSize, uv, -1.0, -1.0 );

			l.highest = max( max( max( max( l.n, l.e ), l.s ), l.w ), l.m );
			l.lowest = min( min( min( min( l.n, l.e ), l.s ), l.w ), l.m );
			l.contrast = l.highest - l.lowest;
			return l;

		}

		bool ShouldSkipPixel( LuminanceData l ) {

			float threshold = max( _ContrastThreshold, _RelativeThreshold * l.highest );
			return l.contrast < threshold;

		}

		float DeterminePixelBlendFactor( LuminanceData l ) {

			float f = 2.0 * ( l.n + l.e + l.s + l.w );
			f += l.ne + l.nw + l.se + l.sw;
			f *= 1.0 / 12.0;
			f = abs( f - l.m );
			f = clamp( f / l.contrast, 0.0, 1.0 );

			float blendFactor = smoothstep( 0.0, 1.0, f );
			return blendFactor * blendFactor * _SubpixelBlending;

		}

		struct EdgeData {

			bool isHorizontal;
			float pixelStep;
			float oppositeLuminance, gradient;

		};

		EdgeData DetermineEdge( vec2 texSize, LuminanceData l ) {

			EdgeData e;
			float horizontal =
				abs( l.n + l.s - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.se - 2.0 * l.e ) +
				abs( l.nw + l.sw - 2.0 * l.w );
			float vertical =
				abs( l.e + l.w - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.nw - 2.0 * l.n ) +
				abs( l.se + l.sw - 2.0 * l.s );
			e.isHorizontal = horizontal >= vertical;

			float pLuminance = e.isHorizontal ? l.n : l.e;
			float nLuminance = e.isHorizontal ? l.s : l.w;
			float pGradient = abs( pLuminance - l.m );
			float nGradient = abs( nLuminance - l.m );

			e.pixelStep = e.isHorizontal ? texSize.y : texSize.x;

			if (pGradient < nGradient) {

				e.pixelStep = -e.pixelStep;
				e.oppositeLuminance = nLuminance;
				e.gradient = nGradient;

			} else {

				e.oppositeLuminance = pLuminance;
				e.gradient = pGradient;

			}

			return e;

		}

		float DetermineEdgeBlendFactor( sampler2D  tex2D, vec2 texSize, LuminanceData l, EdgeData e, vec2 uv ) {

			vec2 uvEdge = uv;
			vec2 edgeStep;
			if (e.isHorizontal) {

				uvEdge.y += e.pixelStep * 0.5;
				edgeStep = vec2( texSize.x, 0.0 );

			} else {

				uvEdge.x += e.pixelStep * 0.5;
				edgeStep = vec2( 0.0, texSize.y );

			}

			float edgeLuminance = ( l.m + e.oppositeLuminance ) * 0.5;
			float gradientThreshold = e.gradient * 0.25;

			vec2 puv = uvEdge + edgeStep * edgeSteps[0];
			float pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
			bool pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !pAtEnd; i++ ) {

				puv += edgeStep * edgeSteps[i];
				pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
				pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			}

			if ( !pAtEnd ) {

				puv += edgeStep * EDGE_GUESS;

			}

			vec2 nuv = uvEdge - edgeStep * edgeSteps[0];
			float nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
			bool nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !nAtEnd; i++ ) {

				nuv -= edgeStep * edgeSteps[i];
				nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
				nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			}

			if ( !nAtEnd ) {

				nuv -= edgeStep * EDGE_GUESS;

			}

			float pDistance, nDistance;
			if ( e.isHorizontal ) {

				pDistance = puv.x - uv.x;
				nDistance = uv.x - nuv.x;

			} else {

				pDistance = puv.y - uv.y;
				nDistance = uv.y - nuv.y;

			}

			float shortestDistance;
			bool deltaSign;
			if ( pDistance <= nDistance ) {

				shortestDistance = pDistance;
				deltaSign = pLuminanceDelta >= 0.0;

			} else {

				shortestDistance = nDistance;
				deltaSign = nLuminanceDelta >= 0.0;

			}

			if ( deltaSign == ( l.m - edgeLuminance >= 0.0 ) ) {

				return 0.0;

			}

			return 0.5 - shortestDistance / ( pDistance + nDistance );

		}

		vec4 ApplyFXAA( sampler2D  tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData luminance = SampleLuminanceNeighborhood( tex2D, texSize, uv );
			if ( ShouldSkipPixel( luminance ) ) {

				return Sample( tex2D, uv );

			}

			float pixelBlend = DeterminePixelBlendFactor( luminance );
			EdgeData edge = DetermineEdge( texSize, luminance );
			float edgeBlend = DetermineEdgeBlendFactor( tex2D, texSize, luminance, edge, uv );
			float finalBlend = max( pixelBlend, edgeBlend );

			if (edge.isHorizontal) {

				uv.y += edge.pixelStep * finalBlend;

			} else {

				uv.x += edge.pixelStep * finalBlend;

			}

			return Sample( tex2D, uv );

		}

		void main() {

			gl_FragColor = ApplyFXAA( tDiffuse, resolution.xy, vUv );

		}`},{defineComponent:X}=await l("vue"),{createElementVNode:t,Fragment:I,openBlock:j,createElementBlock:K}=await l("vue"),{watchEffect:P,ref:g}=await l("vue"),w=await l("three"),q=X({__name:"ecLayerMultiple",setup(z){const r=g(),s=g(),n=g(),f=g();P(()=>{r.value&&r.value.layers.set(0),s.value&&s.value.layers.set(1),n.value&&n.value.layers.set(2),f.value&&f.value.layers.set(3)});const{camera:i,renderer:u,scene:_,sizes:D}=U(),h={strength:.572,radius:.51,threshold:0};let p=null,o=null;const B=(a,e,v,E,T)=>{p=new N(a,e),o=new S(v),o.renderToScreen=!1,o.addPass(p);const x=new V(new w.Vector2(E,T),h.strength,h.radius,h.threshold);o.addPass(x)};let m=null;const C=a=>{m=new S(a),m.renderToScreen=!1,m.addPass(p);const e=new H;m.addPass(e)};let c=null;const G=a=>{c=new S(a),c.renderToScreen=!1,c.addPass(p);const e=new O;c.addPass(e)};let d=null;const A=a=>{d=new S(a),d.addPass(p);const e=new w.ShaderMaterial({uniforms:{baseTexture:{value:null},bloomTexture:{value:o.renderTarget2.texture},filmTexture:{value:m.renderTarget2.texture},glitchTexture:{value:c.renderTarget2.texture}},vertexShader:`
            varying vec2 vUv;
            void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
            }
        `,fragmentShader:`
            uniform sampler2D baseTexture;
            uniform sampler2D bloomTexture;
						uniform sampler2D filmTexture;
						uniform sampler2D glitchTexture;
            varying vec2 vUv;
            void main() {
                gl_FragColor = ( 
									vec4( 1.0 ) * texture2D( baseTexture, vUv )  + 
									vec4( 1.0 ) * texture2D( bloomTexture, vUv ) + 
									vec4( 1.0 ) * texture2D( filmTexture, vUv ) + 
									vec4( 1.0 ) * texture2D( glitchTexture, vUv ) 
								);
            }
        `,defines:{}}),v=new b(e,"baseTexture");v.needsSwap=!0,d.addPass(v);const{width:E,height:T}=a.getDrawingBufferSize(new w.Vector2),x=new b($);x.uniforms.resolution.value.set(1/E,1/T),d.addPass(x)};P(()=>{D.width.value&&(B(_.value,i.value,u,D.width.value,D.height.value),G(u),C(u),A(u))});const{onRender:M}=F();return M(()=>{o&&d&&i.value&&(u.clear(),i.value.layers.set(1),o.render(),i.value.layers.set(2),m.render(),i.value.layers.set(3),c.render(),u.clearDepth(),i.value.layers.set(0),d.render(_.value,i.value))}),(a,e)=>(j(),K(I,null,[t("TresMesh",{ref_key:"normalBox",ref:r,position:[3,2,1]},[...e[0]||(e[0]=[t("TresBoxGeometry",{args:[1,1,1]},null,-1),t("TresMeshNormalMaterial",null,null,-1)])],512),t("TresMesh",{ref_key:"shineBox",ref:s,position:[0,2,-4]},[...e[1]||(e[1]=[t("TresBoxGeometry",{args:[1,1,1]},null,-1),t("TresMeshNormalMaterial",null,null,-1)])],512),t("TresMesh",{ref_key:"filmBox",ref:n,position:[1,2,3]},[...e[2]||(e[2]=[t("TresBoxGeometry",{args:[1,1,1]},null,-1),t("TresMeshNormalMaterial",null,null,-1)])],512),t("TresMesh",{ref_key:"glitchSphere",ref:f,position:[-3,2,0]},[...e[3]||(e[3]=[t("TresSphereGeometry",{args:[.8,32,16]},null,-1),t("TresMeshNormalMaterial",null,null,-1)])],512)],64))}}),{defineComponent:J}=await l("vue"),{createElementVNode:L,unref:Q,createVNode:y,resolveComponent:W,withCtx:Y,openBlock:Z,createBlock:ee}=await l("vue"),{watchEffect:te,ref:ne}=await l("vue"),ue=J({__name:"effectComposerMultiple",setup(z){const r=ne();return te(()=>{if(r.value){let s=r.value.context.renderer.instance;s.autoClear=!1}}),(s,n)=>{const f=W("TresCanvas");return Z(),ee(f,{renderMode:"manual","window-size":"",ref_key:"tcRef",ref:r},{default:Y(()=>[n[0]||(n[0]=L("TresPerspectiveCamera",{position:[10,10,10]},null,-1)),n[1]||(n[1]=L("TresAmbientLight",{intensity:1},null,-1)),y(Q(k)),n[2]||(n[2]=L("TresGridHelper",{args:[10,10]},null,-1)),y(q)]),_:1},512)}}});export{ue as default};
