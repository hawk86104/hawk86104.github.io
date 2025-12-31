import{importShared as u,mergeGeometries as w}from"./3d-tiles-renderer.DZNovkLO1767148983502.js";import{_l as P}from"./index.DTe2qqjO1767148983502.js";const{defineComponent:x}=await u("vue"),{unref:M,normalizeProps:U,guardReactiveProps:B,createElementVNode:b,openBlock:E,createElementBlock:S}=await u("vue"),F=["geometry"],l=await u("three"),{watch:g}=await u("vue"),G=x({__name:"fencePlus",props:{width:{default:100},height:{default:100},depth:{default:100},color:{default:"#ffff00"},opacity:{default:1},thickness:{default:.99},room:{default:.7},num:{default:8},speed:{default:.15}},setup(y){const e=y,a={side:l.DoubleSide,transparent:!0,depthWrite:!1,depthTest:!0,blending:l.NormalBlending,vertexShader:`
		precision highp float;
		precision highp int;
		varying vec2 vUv;
		void main() {
			vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
		}
`,fragmentShader:`
				precision highp float;
				precision highp int;
				uniform float time;
				uniform float opacity;
				uniform vec3 color;
				uniform float num;
				uniform float thickness;
				uniform float speed;
				uniform float room;
				varying vec2 vUv;
				void main() {
					vec4 fragColor = vec4(0.);
					float sinnum = sin((vUv.y - time * speed) * 10. * num);

					vec4 wcolor = vec4(mix(color, vec3(1., 1., 1.), 0.9),1.0);

					vec3 fade = mix(color, vec3(1., 1., 1.), vUv.y);
                    fragColor = mix(fragColor, vec4(fade, 1.), 0.85);
                    gl_FragColor = vec4(fragColor.rgb, fragColor.a * opacity * (1. - vUv.y));

					if(vUv.y < room){
						float alpha = smoothstep(1.0 - thickness - 0.1, 1.0 - thickness, sinnum);
						fragColor = mix(gl_FragColor, wcolor, alpha);
						fragColor.a = fragColor.a * opacity;
						gl_FragColor = fragColor;
					}
				}
		`,uniforms:{time:{type:"pv2",value:0},color:{type:"uvs",value:new l.Color(e.color)},opacity:{value:e.opacity},num:{value:e.num},thickness:{value:e.thickness},speed:{value:e.speed},room:{value:e.room}}};let m=null;function v(r,t,o){const n=[],i=(C,k)=>{const h=new l.PlaneGeometry(C,k,1,1),c=[];return c.push(0,1),c.push(1,1),c.push(0,0),c.push(1,0),h.setAttribute("uv",new l.Float32BufferAttribute(c,2)),h},s=i(r,o);s.rotateY(Math.PI),s.translate(0,o/2,-t/2),n.push(s);const d=i(r,o);d.translate(0,o/2,t/2),n.push(d);const f=i(t,o);f.rotateY(Math.PI/2),f.translate(-r/2,o/2,0),n.push(f);const p=i(t,o);return p.rotateY(-Math.PI/2),p.translate(r/2,o/2,0),n.push(p),w(n,!0)}m=v(e.width,e.depth,e.height);const{onBeforeRender:_}=P();return _(({delta:r})=>{a.uniforms.time.value+=r}),g(()=>[e.color,e.opacity,e.num,e.thickness,e.speed,e.room],([r,t,o,n,i,s])=>{a.uniforms.color.value=new l.Color(r),a.uniforms.opacity.value=t,a.uniforms.num.value=o,a.uniforms.thickness.value=n,a.uniforms.speed.value=i,a.uniforms.room.value=s}),g(()=>[e.width,e.depth,e.height],([r,t,o])=>{m=v(r,t,o)}),(r,t)=>(E(),S("TresMesh",{renderOrder:2e3,geometry:M(m)},[b("TresShaderMaterial",U(B(a)),null,16)],8,F))}});export{G as _sfc_main};
