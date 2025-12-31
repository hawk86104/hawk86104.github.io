import{importShared as r}from"./3d-tiles-renderer.DZNovkLO1767148983502.js";import{_l as w,oz as T}from"./index.DTe2qqjO1767148983502.js";import{buildRoundedPath as U}from"./buildFlexiblePipe.Dz4Dgd2u1767148983502.js";const{defineComponent:R}=await r("vue"),{createElementVNode:b,unref:G,createVNode:E,openBlock:P,createElementBlock:D}=await r("vue"),L={renderOrder:9999},B=["args"],{watch:f,ref:k}=await r("vue"),a=await r("three"),A=`
	varying vec2 vUv;
	void main() {
		vUv = vec3( uv, 1 ).xy; 
	}
`,N=`
  uniform float uTime;
  varying vec2 vUv;
  uniform vec3 uGapColor;
	uniform float uStripeScale;

	void main() {
		vec2 vUV;  
		vUV=vUv;
		vUV.x+=uTime/uStripeScale;

		float ssColor = smoothstep(.31,.49,fract(vUV.x*uStripeScale));
		vec3 finalColor = mix(uGapColor, csm_DiffuseColor.xyz, ssColor);
    csm_DiffuseColor=vec4(finalColor,1.0);
	}
`,j=R({__name:"flexiblePipe2",props:{color:{default:"0xff0000"},uGapColor:{default:"#ffffff"},radius:{default:.1},bodyLength:{default:2},headLength:{default:1},headAngle:{default:0},radialSegments:{default:16},tailAngle:{default:0},tailLength:{default:.5},filletRadius:{default:.3},speed:{default:.01},uStripeScale:{default:10},metalness:{default:.3},roughness:{default:.5},reflectivity:{default:.5},ior:{default:1.5}},setup(m){const e=m,i=k(new a.CurvePath);f(()=>[e.bodyLength,e.headLength,e.headAngle,e.tailAngle,e.tailLength,e.filletRadius,e.radialSegments],([t,l,h,p,S,g,C])=>{const n=t/2,s=new a.Vector3(0,0,-n),u=new a.Vector3(0,0,n),d=a.MathUtils.degToRad(h),y=new a.Vector3(Math.cos(d),Math.sin(d),0),M=u.clone().add(y.multiplyScalar(l)),c=a.MathUtils.degToRad(p),V=new a.Vector3(Math.cos(c),Math.sin(c),0),_=[s.clone().add(V.multiplyScalar(S)),s,u,M];i.value=U(_,g,C)},{immediate:!0});const o={uTime:{value:0},uStripeScale:{value:10},uGapColor:{value:new a.Color(e.uGapColor)}};f(()=>[e.uGapColor,e.uStripeScale],([t,l])=>{o.uStripeScale.value=l,o.uGapColor.value.setStyle(t)},{immediate:!0});const{onBeforeRender:v}=w();return v(()=>{o.uTime.value+=e.speed}),(t,l)=>(P(),D("TresMesh",L,[b("TresTubeGeometry",{args:[i.value,64,t.radius,t.radialSegments,!1]},null,8,B),E(G(T),{baseMaterial:a.MeshPhysicalMaterial,color:t.color,metalness:t.metalness,roughness:t.roughness,reflectivity:t.reflectivity,ior:t.ior,side:a.DoubleSide,transparent:"",vertexShader:A,fragmentShader:N,uniforms:o},null,8,["baseMaterial","color","metalness","roughness","reflectivity","ior","side"])]))}});export{j as _sfc_main};
