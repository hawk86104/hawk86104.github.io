import{importShared as o}from"./3d-tiles-renderer.DZNovkLO1767148983502.js";import{oz as d}from"./index.DTe2qqjO1767148983502.js";var m=`vec4 permute(vec4 x) {
    return mod(((x * 34.0) + 1.0) * x, 289.0);
}
vec4 taylorInvSqrt(vec4 r) {
    return 1.79284291400159 - 0.85373472095314 * r;
}

float snoise(vec3 v) {
    const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

    
    vec3 i = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);

    
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);

    
    vec3 x1 = x0 - i1 + 1.0 * C.xxx;
    vec3 x2 = x0 - i2 + 2.0 * C.xxx;
    vec3 x3 = x0 - 1. + 3.0 * C.xxx;

    
    i = mod(i, 289.0);
    vec4 p = permute(permute(permute(
                    i.z + vec4(0.0, i1.z, i2.z, 1.0))
                    + i.y + vec4(0.0, i1.y, i2.y, 1.0))
                + i.x + vec4(0.0, i1.x, i2.x, 1.0));

    
    
    float n_ = 1.0 / 7.0; 
    vec3 ns = n_ * D.wyz - D.xzx;

    vec4 j = p - 49.0 * floor(p * ns.z * ns.z); 

    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_); 

    vec4 x = x_ * ns.x + ns.yyyy;
    vec4 y = y_ * ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);

    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);

    vec4 s0 = floor(b0) * 2.0 + 1.0;
    vec4 s1 = floor(b1) * 2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));

    vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);

    
    vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;

    
    vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1),
                dot(p2, x2), dot(p3, x3)));
}`;const{defineComponent:p}=await o("vue"),{unref:c,openBlock:f,createBlock:y}=await o("vue"),{watch:g}=await o("vue"),r=await o("three"),z=`
	varying vec3 vPos;
	void main() {
		vPos = position;
	}
`,_=p({__name:"material",props:{baseMaterial:{type:Object},uEdgeColor:{default:"#4d9bff"},uEdge:{default:6},uFreq:{default:.41},uAmp:{default:20},uProgress:{default:-2}},setup(a){const e=a,v=e.baseMaterial??r.MeshPhysicalMaterial,n={uEdgeColor:{value:new r.Color(e.uEdgeColor)},uFreq:{value:e.uFreq},uAmp:{value:e.uAmp},uProgress:{value:e.uProgress},uEdge:{value:e.uEdge}},u=`
  varying vec3 vPos;

  uniform float uFreq;
  uniform float uAmp;
  uniform float uProgress;
  uniform float uEdge;
  uniform vec3 uEdgeColor;

  ${m}

	void main() {
		float noise = snoise(vPos * uFreq) * uAmp; // calculate snoise in fragment shader for smooth dissolve edges

    if(noise < uProgress) discard; // discard any fragment where noise is lower than progress

    float edgeWidth = uProgress + uEdge;

    if(noise > uProgress && noise < edgeWidth){
        csm_DiffuseColor = vec4(vec3(uEdgeColor),noise); // colors the edge
    }else{
				csm_DiffuseColor = vec4(csm_DiffuseColor.xyz,1.0);
		}
	}
`;return g(()=>[e.uEdgeColor,e.uEdge,e.uFreq,e.uAmp,e.uProgress],([s,t,i,x,l])=>{n.uEdgeColor.value.setStyle(s),n.uEdge.value=t,n.uFreq.value=i,n.uAmp.value=x,n.uProgress.value=l}),(s,t)=>(f(),y(c(d),{baseMaterial:c(v),vertexShader:z,side:r.DoubleSide,fragmentShader:u,uniforms:n},null,8,["baseMaterial","side"]))}});export{_ as _sfc_main,m as snoise_default};
