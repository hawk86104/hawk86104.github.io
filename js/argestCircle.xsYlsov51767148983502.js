import{importShared as o}from"./3d-tiles-renderer.DZNovkLO1767148983502.js";import{Kk as f}from"./index.DTe2qqjO1767148983502.js";import{argestCircle_default as v}from"./argestCircle.WJcEHp9_1767148983502.js";var m=`varying vec2 vUv;
uniform float uTime;
struct VoronoiData{
	float dist;
	float edgedist;
	vec2 edgenormal;
	vec2 point;
};

vec2 hash22(vec2 p)
{
	vec3 p3=fract(vec3(p.xyx)*vec3(.1031,.1030,.0973));
	p3+=dot(p3,p3.yzx+33.33);
	return fract((p3.xx+p3.yz)*p3.zy);
}
VoronoiData voronoi2dedges(vec2 uv){
	vec2 n=floor(uv);
	vec2 f=fract(uv);
	
	vec2 mg,mr;
	
	float md=8.;
	for(int j=-1;j<=1;j++)
	for(int i=-1;i<=1;i++){
		vec2 g=vec2(i,j);
		vec2 o=hash22(n+g);
		vec2 r=g+o-f;
		float d=dot(r,r);
		
		if(d<md){
			md=d;
			mr=g+o;
		}
	}
	
	float med=8.;
	vec2 men=vec2(0);
	for(int j=-2;j<=2;j++)
	for(int i=-2;i<=2;i++){
		vec2 g=vec2(i,j);
		g+=hash22(n+g);
		vec2 k=g-mr;
		
		float d=dot(k,k);
		if(d>0.){
			float l=dot(g+mr-2.*f,k)*.5/sqrt(d);
			if(l<med){
				men=k;
				med=l;
			}
		}
	}
	return VoronoiData(md,med,normalize(men),mr+n);
}

void main(){
	vec2 uv=vUv*10.+vec2(0.,uTime);
	vec2 p=voronoi2dedges(uv).point;
	VoronoiData v;
	for(int i=0;i<32;i++){
		VoronoiData v=voronoi2dedges(p);
		p+=-v.edgenormal*.2/float(i+1);
	}
	gl_FragColor=vec4(
		smoothstep(0.,.1,distance(uv,p))*
		smoothstep(0.,.01,voronoi2dedges(uv).edgedist)*
		smoothstep(0.,.01,abs(distance(uv,p)-voronoi2dedges(p).edgedist))
	);
}`;const{defineComponent:p}=await o("vue"),{createElementVNode:n,unref:c,normalizeProps:r,guardReactiveProps:i,createVNode:u,resolveComponent:g,mergeProps:_,withCtx:h,openBlock:C,createBlock:T}=await o("vue"),x={ref:"perspectiveCameraRef",position:[600,750,-1221],fov:45,near:1,far:1e4},k=["rotation-x"],{AdditiveBlending:y,DoubleSide:P}=await o("three"),S=p({__name:"argestCircle",setup(V){const a={clearColor:"#000000",shadows:!0,alpha:!1,useLegacyLights:!0},s={autoRotate:!0,enableDamping:!0},t={uniforms:{uTime:{type:"f",value:0}},vertexShader:v,fragmentShader:m,side:P,blending:y,depthWrite:!1,transparent:!0},l=function(){t.uniforms.uTime.value+=.01};return(j,e)=>{const d=g("TresCanvas");return C(),T(d,_(a,{"window-size":"",onLoop:l}),{default:h(()=>[n("TresPerspectiveCamera",x,null,512),u(c(f),r(i(s)),null,16),e[1]||(e[1]=n("TresAmbientLight",{color:"#ffffff"},null,-1)),e[2]||(e[2]=n("TresDirectionalLight",{position:[100,100,0],intensity:.5,color:"#ffffff"},null,-1)),n("TresMesh",{ref:"quanMeshRef",position:[0,100,0],"rotation-x":2*Math.PI/360*90},[e[0]||(e[0]=n("TresPlaneGeometry",{args:[400,400]},null,-1)),n("TresShaderMaterial",r(i(t)),null,16)],8,k),e[3]||(e[3]=n("TresAxesHelper",{args:[1e3],position:[0,19,0]},null,-1)),e[4]||(e[4]=n("TresGridHelper",{args:[6e3,100],position:[0,19,0]},null,-1))]),_:1},16)}}});export{S as default};
