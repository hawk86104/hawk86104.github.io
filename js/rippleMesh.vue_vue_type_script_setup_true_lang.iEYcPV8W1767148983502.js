import{importShared as m}from"./3d-tiles-renderer.DZNovkLO1767148983502.js";import{_l as M}from"./index.DTe2qqjO1767148983502.js";import{getcenterPoint as _}from"./utils.DURg_k-q1767148983502.js";const{defineComponent:k}=await m("vue"),{unref:w,createElementVNode:C,normalizeProps:E,guardReactiveProps:R,openBlock:U,createElementBlock:B}=await m("vue"),T=["position","uv"],u=await m("three"),{watchEffect:A,ref:V,watch:F}=await m("vue"),G=k({__name:"rippleMesh",props:{positionSrc:{default:[{x:0,y:0},{x:10,y:10}]},color:{default:"#ffff00"},opacity:{default:.8},height:{default:100},num:{default:8},speed:{default:.15}},setup(S){const t=S,a=V(),l={side:u.DoubleSide,transparent:!0,depthWrite:!1,depthTest:!0,vertexShader:`
precision lowp float;
precision lowp int;
${u.ShaderChunk.fog_pars_vertex}
varying vec2 vUv;
void main() {
	vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
	vUv = uv;
	gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
	${u.ShaderChunk.fog_vertex}
}
`,fragmentShader:`
precision lowp float;
precision lowp int;
uniform float time;
uniform float opacity;
uniform vec3 color;
uniform float num;
uniform float speed;
varying vec2 vUv;
void main() {
	vec4 fragColor = vec4(0.);
	float sin = sin((vUv.y - time * speed) * 10. * num);
	float high = 0.92;
	float medium = 0.4;
	if (sin > high) {
		fragColor = vec4(mix(vec3(.8, 1., 1.), color, (1. - sin) / (1. - high)), 1.);
	} else if(sin > medium) {
		fragColor = vec4(color, mix(1., 0., 1.-(sin - medium) / (high - medium)));
	} else {
		fragColor = vec4(color, 0.);
	}
	vec3 fade = mix(color, vec3(0., 0., 0.), vUv.y);
	fragColor = mix(fragColor, vec4(fade, 1.), 0.85);
	gl_FragColor = vec4(fragColor.rgb, fragColor.a * opacity * (1. - vUv.y));
}
`,uniforms:{time:{type:"pv2",value:0},color:{type:"uvs",value:new u.Color(t.color)},opacity:{type:"pv2",value:t.opacity},num:{type:"pv2",value:t.num},speed:{type:"pv2",value:t.speed}}};let h=null,g=null;function x(n=[],s){const e=[],r=[];for(let v=0,o=e.length,i=r.length;v<n.length-1;v++){let y=1,c=n[v],p=n[v+1];e[o++]=c.x,e[o++]=0,e[o++]=c.y,r[i++]=0,r[i++]=0,e[o++]=p.x,e[o++]=0,e[o++]=p.y,r[i++]=1,r[i++]=0,e[o++]=c.x,e[o++]=s,e[o++]=c.y,r[i++]=0,r[i++]=y,e[o++]=c.x,e[o++]=s,e[o++]=c.y,r[i++]=0,r[i++]=y,e[o++]=p.x,e[o++]=0,e[o++]=p.y,r[i++]=1,r[i++]=0,e[o++]=p.x,e[o++]=s,e[o++]=p.y,r[i++]=1,r[i++]=y}h=new Float32Array(e),g=new Float32Array(r)}let{centerPoint:f,points:d}=_(t.positionSrc);x(d,t.height);const{onRender:P}=M();return P(({delta:n})=>{l.uniforms.time.value+=n}),A(()=>{t.color&&(l.uniforms.color.value=new u.Color(t.color)),t.opacity&&(l.uniforms.opacity.value=t.opacity),t.num&&(l.uniforms.num.value=t.num),t.speed&&(l.uniforms.speed.value=t.speed),a.value&&a.value.position.set(f.x,a.value.position.y,f.y)}),F(()=>t.positionSrc,n=>{const{centerPoint:s,points:e}=_(n);f=s,d=e,x(d,t.height),a.value&&a.value.position.set(f.x,a.value.position.y,f.y)}),(n,s)=>(U(),B("TresMesh",{renderOrder:2200,ref_key:"tresMeshRef",ref:a},[C("TresBufferGeometry",{position:[w(h),3],uv:[w(g),2]},null,8,T),C("TresShaderMaterial",E(R(l)),null,16)],512))}});export{G as _sfc_main};
