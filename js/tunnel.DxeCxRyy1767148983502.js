import{importShared as t}from"./3d-tiles-renderer.DZNovkLO1767148983502.js";import{Kk as f}from"./index.DTe2qqjO1767148983502.js";import{argestCircle_default as v}from"./argestCircle.WJcEHp9_1767148983502.js";const{defineComponent:d}=await t("vue"),{createElementVNode:o,unref:c,normalizeProps:n,guardReactiveProps:i,createVNode:m,resolveComponent:p,mergeProps:g,withCtx:T,openBlock:_,createBlock:C}=await t("vue"),x={ref:"perspectiveCameraRef",position:[600,750,-1221],fov:45,near:1,far:1e4},h=["rotation-x"],{AdditiveBlending:w,DoubleSide:P}=await t("three"),b=`
varying vec2 vUv;
uniform float uTime;
vec3 palette(float t) {
    vec3 a = vec3(0.5, 0.5, 0.5);
    vec3 b = vec3(0.5, 0.5, 0.5);
    vec3 c = vec3(1.0, 1.0, 1.0);
    vec3 d = vec3(sin(uTime * 0.2) * 0.5 + 0.5, cos(uTime * 0.25) * 0.5 + 0.5, sin(uTime * 0.3 + 1.0) * 0.5 + 0.5);
    
    return a + b * cos(6.28318 * (c * t + d));
}

void main(){
    vec2 uv = vUv-vec2(0.5);
    
    float angle = atan(uv.y, uv.x);
    float radius = length(uv);
    
    int sides = int(5.0 + 4.0 * sin(uTime * 0.5)); 
    angle = mod(angle, 6.28318 / float(sides)) * float(sides);
    
    vec2 uv0 = vec2(radius, angle);
    vec3 finalColor = vec3(0.0);
    
    for(float i = 0.0; i < 5.0; i++) {
        uv0.x = fract(uv0.x * (1.5 + 0.1 * sin(uTime)));
        
        float d = uv0.x * exp(-radius);

        vec3 col = palette(uv0.x + i * 0.4 + uTime * 0.4);

        d = sin(d * (8.0 + 4.0 * sin(uTime * 0.1)) + uTime) / 8.0;
        d = abs(d);

        d = pow(0.01 / d, 1.2 + 0.1 * sin(uTime));

        finalColor += col * d;
    }
    
    gl_FragColor = vec4(finalColor, 1.0);
}
`,L=d({__name:"tunnel",setup(y){const a={clearColor:"#000000",shadows:!0,alpha:!1,useLegacyLights:!0},s={autoRotate:!0,enableDamping:!0},r={uniforms:{uTime:{type:"f",value:0}},vertexShader:v,fragmentShader:b,side:P,blending:w,depthWrite:!1,transparent:!0},l=function(){r.uniforms.uTime.value+=.006};return(B,e)=>{const u=p("TresCanvas");return _(),C(u,g(a,{"window-size":"",onLoop:l}),{default:T(()=>[o("TresPerspectiveCamera",x,null,512),m(c(f),n(i(s)),null,16),e[1]||(e[1]=o("TresAmbientLight",{color:"#ffffff"},null,-1)),e[2]||(e[2]=o("TresDirectionalLight",{position:[100,100,0],intensity:.5,color:"#ffffff"},null,-1)),o("TresMesh",{ref:"quanMeshRef",position:[0,100,0],"rotation-x":2*Math.PI/360*90},[e[0]||(e[0]=o("TresPlaneGeometry",{args:[1e3,1e3]},null,-1)),o("TresShaderMaterial",n(i(r)),null,16)],8,h),e[3]||(e[3]=o("TresAxesHelper",{args:[1e3],position:[0,19,0]},null,-1)),e[4]||(e[4]=o("TresGridHelper",{args:[6e3,100],position:[0,19,0]},null,-1))]),_:1},16)}}});export{L as default};
