import{a1 as d,r as v,o as l,x as f,E as p,a8 as m,a9 as u,Y as t,a as g,aa as o,ab as a,L as h,ac as _,ap as x,aA as T}from"./vendor.KaB9nKOc1713775263683.js";const y="varying vec2 vUv;\nvoid main(){\n	vUv=uv;\n	gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);\n}",C="varying vec2 vUv;\nuniform float uTime;\nstruct VoronoiData{\n	float dist;\n	float edgedist;\n	vec2 edgenormal;\n	vec2 point;\n};\n\nvec2 hash22(vec2 p)\n{\n	vec3 p3=fract(vec3(p.xyx)*vec3(.1031,.1030,.0973));\n	p3+=dot(p3,p3.yzx+33.33);\n	return fract((p3.xx+p3.yz)*p3.zy);\n}\nVoronoiData voronoi2dedges(vec2 uv){\n	vec2 n=floor(uv);\n	vec2 f=fract(uv);\n	\n	vec2 mg,mr;\n	\n	float md=8.;\n	for(int j=-1;j<=1;j++)\n	for(int i=-1;i<=1;i++){\n		vec2 g=vec2(i,j);\n		vec2 o=hash22(n+g);\n		vec2 r=g+o-f;\n		float d=dot(r,r);\n		\n		if(d<md){\n			md=d;\n			mr=g+o;\n		}\n	}\n	\n	float med=8.;\n	vec2 men=vec2(0);\n	for(int j=-2;j<=2;j++)\n	for(int i=-2;i<=2;i++){\n		vec2 g=vec2(i,j);\n		g+=hash22(n+g);\n		vec2 k=g-mr;\n		\n		float d=dot(k,k);\n		if(d>0.){\n			float l=dot(g+mr-2.*f,k)*.5/sqrt(d);\n			if(l<med){\n				men=k;\n				med=l;\n			}\n		}\n	}\n	return VoronoiData(md,med,normalize(men),mr+n);\n}\n\nvoid main(){\n	vec2 uv=vUv*10.+vec2(0.,uTime);\n	vec2 p=voronoi2dedges(uv).point;\n	VoronoiData v;\n	for(int i=0;i<32;i++){\n		VoronoiData v=voronoi2dedges(p);\n		p+=-v.edgenormal*.2/float(i+1);\n	}\n	gl_FragColor=vec4(\n		smoothstep(0.,.1,distance(uv,p))*\n		smoothstep(0.,.01,voronoi2dedges(uv).edgedist)*\n		smoothstep(0.,.01,abs(distance(uv,p)-voronoi2dedges(p).edgedist))\n	);\n}",j={ref:"perspectiveCameraRef",position:[600,750,-1221],fov:45,near:1,far:1e4},V=t("TresAmbientLight",{color:"#ffffff"},null,-1),D=t("TresDirectionalLight",{position:[100,100,0],intensity:.5,color:"#ffffff"},null,-1),k=["rotation-x"],M=t("TresPlaneGeometry",{args:[400,400]},null,-1),P=t("TresAxesHelper",{args:[1e3],position:[0,19,0]},null,-1),b=t("TresGridHelper",{args:[6e3,100],position:[0,19,0]},null,-1),S=d({__name:"argestCircle",setup(z){const r={clearColor:"#000000",shadows:!0,alpha:!1,useLegacyLights:!0},s={autoRotate:!0,enableDamping:!0},e={uniforms:{uTime:{type:"f",value:0}},vertexShader:y,fragmentShader:C,side:x,blending:T,depthWrite:!1,transparent:!0},{onLoop:i}=u();return i(({delta:n})=>{e.uniforms.uTime.value+=n}),(n,L)=>{const c=v("TresCanvas");return l(),f(c,m(r,{"window-size":""}),{default:p(()=>[t("TresPerspectiveCamera",j,null,512),g(h(_),o(a(s)),null,16),V,D,t("TresMesh",{ref:"quanMeshRef",position:[0,100,0],"rotation-x":2*Math.PI/360*90},[M,t("TresShaderMaterial",o(a(e)),null,16)],8,k),P,b]),_:1},16)}}});export{S as default};