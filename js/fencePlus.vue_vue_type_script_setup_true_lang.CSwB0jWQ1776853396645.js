import{importShared as c,mergeGeometries as w}from"./3d-tiles-renderer.Bx8Ba9fW1776853396645.js";import{useLoop as M,customShaderMaterial_default as x}from"./index.BRe8atec1776853396645.js";const{defineComponent:b}=await c("vue"),{unref:g,createVNode:B,openBlock:U,createElementBlock:O}=await c("vue"),P=["geometry"],s=await c("three"),{watch:y}=await c("vue"),I=b({__name:"fencePlus",props:{width:{default:100},height:{default:100},depth:{default:100},color:{default:"#ffff00"},opacity:{default:1},thickness:{default:.99},room:{default:.7},num:{default:8},speed:{default:.15}},setup(_){const e=_,t={vertexShader:`
		precision highp float;
		precision highp int;
		varying vec2 vUv;
		void main() {
			vUv = uv;
		}
`,fragmentShader:`
				precision highp float;
				precision highp int;
				uniform float time;
				uniform float uOpacity;
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
                    csm_DiffuseColor = vec4(fragColor.rgb, fragColor.a * uOpacity * (1. - vUv.y));

					if(vUv.y < room){
						float alpha = smoothstep(1.0 - thickness - 0.1, 1.0 - thickness, sinnum);
						fragColor = mix(csm_DiffuseColor, wcolor, alpha);
						fragColor.a = fragColor.a * uOpacity;
						csm_DiffuseColor = fragColor;
					}
				}
		`,uniforms:{time:{type:"pv2",value:0},color:{type:"uvs",value:new s.Color(e.color)},uOpacity:{value:e.opacity},num:{value:e.num},thickness:{value:e.thickness},speed:{value:e.speed},room:{value:e.room}}};let f=null;function v(r,a,o){const n=[],i=(k,S)=>{const h=new s.PlaneGeometry(k,S,1,1),u=[];return u.push(0,1),u.push(1,1),u.push(0,0),u.push(1,0),h.setAttribute("uv",new s.Float32BufferAttribute(u,2)),h},l=i(r,o);l.rotateY(Math.PI),l.translate(0,o/2,-a/2),n.push(l);const d=i(r,o);d.translate(0,o/2,a/2),n.push(d);const m=i(a,o);m.rotateY(Math.PI/2),m.translate(-r/2,o/2,0),n.push(m);const p=i(a,o);return p.rotateY(-Math.PI/2),p.translate(r/2,o/2,0),n.push(p),w(n,!0)}f=v(e.width,e.depth,e.height);const{onBeforeRender:C}=M();return C(({delta:r})=>{t.uniforms.time.value+=r}),y(()=>[e.color,e.opacity,e.num,e.thickness,e.speed,e.room],([r,a,o,n,i,l])=>{t.uniforms.color.value=new s.Color(r),t.uniforms.uOpacity.value=a,t.uniforms.num.value=o,t.uniforms.thickness.value=n,t.uniforms.speed.value=i,t.uniforms.room.value=l}),y(()=>[e.width,e.depth,e.height],([r,a,o])=>{f=v(r,a,o)}),(r,a)=>(U(),O("TresMesh",{renderOrder:2e3,geometry:g(f)},[B(g(x),{baseMaterial:s.MeshBasicMaterial,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,uniforms:t.uniforms,side:s.DoubleSide,transparent:"",depthWrite:!1,depthTest:!0,blending:s.NormalBlending,silent:"",toneMapped:!1},null,8,["baseMaterial","vertexShader","fragmentShader","uniforms","side","blending"])],8,P))}});export{I as _sfc_main};
