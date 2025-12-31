import{importShared as t}from"./3d-tiles-renderer.DZNovkLO1767148983502.js";import{Kk as x,tk as T}from"./index.DTe2qqjO1767148983502.js";import{Pane as _}from"./tweakpane.BQRZXf8M1767148983502.js";var k=`varying vec2 vUv;
void main()
{
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    vUv = uv;
}`,w=`uniform float uGridThickness;
uniform vec3 uGridColor;
uniform float uCrossScale;
uniform float uCrossThickness;
uniform float uCross;
uniform vec3 uCrossColor;
uniform vec3 uFloorColor;

varying vec2 vUv;

float gridFloor(vec2 uv, vec2 lineWidth) {
    
    
    
    
    
    
    
    vec4 uvDDXY = vec4(dFdx(uv), dFdy(uv));
    vec2 uvDeriv = vec2(length(uvDDXY.xz), length(uvDDXY.yw));

    
    
    
    bool invertLine = lineWidth.x > 0.5;
    vec2 targetWidth = invertLine ? 1.0 - lineWidth : lineWidth;

    
    
    
    
    
    vec2 drawWidth = clamp(targetWidth, uvDeriv, vec2(0.5));

    
    
    
    vec2 lineAA = uvDeriv * 1.5;
    
    
    
    
    
    
    vec2 gridUV = abs(fract(uv) * 2.0 - 1.0);
    gridUV = invertLine ? gridUV : 1.0 - gridUV;

    
    
    
    vec2 grid2 = smoothstep(drawWidth + lineAA, drawWidth - lineAA, gridUV);

    
    
    
    grid2 *= clamp(targetWidth / drawWidth, 0.0, 1.0);

    
    
    
    
    
    grid2 = mix(grid2, targetWidth, clamp(uvDeriv * 2.0 - 1.0, 0.0, 1.0));
    grid2 = invertLine ? 1.0 - grid2 : grid2;

    
    float grid = mix(grid2.x, 1.0, grid2.y);

    return grid;
}

float crossFloor(vec2 uv, float scale, float thickness, float crossIntensity) {
    vec2 lineWidth = vec2(thickness);

    
    
    
    
    
    
    
    vec4 uvDDXY = vec4(dFdx(uv), dFdy(uv));
    vec2 uvDeriv = vec2(length(uvDDXY.xz), length(uvDDXY.yw));

    
    
    
    bool invertLine = lineWidth.x > 0.5;
    
    vec2 targetWidth = lineWidth;

    
    
    
    
    
    vec2 drawWidth = clamp(targetWidth, uvDeriv, vec2(0.5));

    
    
    
    vec2 lineAA = uvDeriv * 1.5;
    
    
    float cutOffX = abs(fract(uv.y) * 2.0 - 1.0) > crossIntensity ? 1.0 : 0.0;
    float cutOffY = abs(fract(uv.x) * 2.0 - 1.0) > crossIntensity ? 1.0 : 0.0;

    
    
    
    
    
    
    
    float uvX = abs(fract(uv.x) * 2.0 - 1.0) + cutOffX;
    float uvY = abs(fract(uv.y) * 2.0 - 1.0) + cutOffY;
    vec2 gridUV = vec2(uvX, uvY);

    

    
    
    
    vec2 grid2 = smoothstep(drawWidth + lineAA, drawWidth - lineAA, gridUV);

    
    
    
    grid2 *= clamp(targetWidth / drawWidth, 0.0, 1.0);

    
    
    
    
    
    grid2 = mix(grid2, targetWidth, clamp(uvDeriv * 2.0 - 1.0, 0.0, 1.0));
    

    
    float grid = mix(grid2.x, 1.0, grid2.y);

    return grid;
}

void main()
{
    vec2 lineWidth = vec2(uGridThickness);
    
    vec2 uv = vUv * 20.0;

    
    float grid = gridFloor(uv, lineWidth);
    
    vec3 gridColor = mix(uFloorColor, uGridColor, vec3(grid));

    
    float crossUv = crossFloor(uv, uCrossScale, uCrossThickness, uCross);
    
    vec3 gridColor2 = mix(gridColor, uCrossColor, vec3(crossUv));
    
    vec3 color =  gridColor2;

    gl_FragColor = vec4(color, 1.0);
}`;const{defineComponent:W}=await t("vue"),{createElementVNode:c,normalizeProps:D,guardReactiveProps:y,openBlock:F,createElementBlock:b}=await t("vue"),B=["rotate-x"],l=await t("three"),{watchEffect:P}=await t("vue"),A=W({__name:"gridFloor",props:{gridColor:{default:"#c4d6ff"},gridThickness:{default:.02},crossColor:{default:"#7a91df"},crossThickness:{default:.02},uCross:{default:.2},floorColor:{default:"#ffffff"}},setup(u){const n=u,e={vertexShader:k,fragmentShader:w,side:l.DoubleSide,transparent:!0,uniforms:{uFloorColor:{value:new l.Color(n.floorColor)},uGridThickness:{value:n.gridThickness},uGridColor:{value:new l.Color(n.gridColor)},uCrossThickness:{value:n.crossThickness},uCross:{value:n.uCross},uCrossColor:{value:new l.Color(n.crossColor)}}};return P(()=>{e.uniforms.uFloorColor.value.set(n.floorColor),e.uniforms.uGridColor.value.set(n.gridColor),e.uniforms.uCrossColor.value.set(n.crossColor),e.uniforms.uGridThickness.value=n.gridThickness,e.uniforms.uCrossThickness.value=n.crossThickness,e.uniforms.uCross.value=n.uCross}),(o,r)=>(F(),b("TresMesh",{"rotate-x":-Math.PI/2},[r[0]||(r[0]=c("TresPlaneGeometry",{args:[10,10,32,32]},null,-1)),c("TresShaderMaterial",D(y(e)),null,16)],8,B))}}),{defineComponent:S}=await t("vue"),{createElementVNode:s,unref:v,normalizeProps:f,guardReactiveProps:g,createVNode:a,Suspense:V,withCtx:m,openBlock:p,createBlock:C,resolveComponent:U,mergeProps:z}=await t("vue"),{ACESFilmicToneMapping:E}=await t("three"),{reactive:d}=await t("vue"),j=S({__name:"gridFloor",setup(u){const n=d({alpha:!0,toneMapping:E,windowSize:!0,clearColor:3355443}),e=d({enableDamping:!0,autoRotate:!1}),o=d({gridColor:"#ffffff",crossColor:"#ef57ff",floorColor:"#000000",gridThickness:.02,crossThickness:.03,uCross:.29}),r=new _;return r.addBinding(o,"gridColor",{label:"网格颜色"}),r.addBinding(o,"gridThickness",{label:"网格厚度",min:.01,max:1,step:.01}),r.addBinding(o,"crossColor",{label:"十字颜色"}),r.addBinding(o,"crossThickness",{label:"十字厚度",min:.01,max:1,step:.01}),r.addBinding(o,"uCross",{label:"十字大小",min:.01,max:1,step:.01}),r.addBinding(o,"floorColor",{label:"地板颜色"}),(G,i)=>{const h=U("TresCanvas");return p(),C(h,z(n,{"window-size":""}),{default:m(()=>[i[0]||(i[0]=s("TresPerspectiveCamera",{position:[6,6,6],fov:45,near:.1,far:1e3},null,-1)),a(v(x),f(g(e)),null,16),i[1]||(i[1]=s("TresAmbientLight",{intensity:.5},null,-1)),i[2]||(i[2]=s("TresDirectionalLight",{position:[15,15,15],intensity:1},null,-1)),i[3]||(i[3]=s("TresMesh",{position:[0,.5,0],scale:.2},[s("TresTorusKnotGeometry",{args:[1,.35,100,32]}),s("TresMeshStandardMaterial",{color:"#ff33ff",roughness:0,metalness:1})],-1)),a(A,f(g(o)),null,16),(p(),C(V,null,{default:m(()=>[a(v(T),{files:["pos-x.jpg","neg-x.jpg","pos-y.jpg","neg-y.jpg","pos-z.jpg","neg-z.jpg"],path:"https://opensource.cdn.icegl.cn/images/skyBox/6jpg/"},null,8,["path"])]),_:1}))]),_:1},16)}}});export{j as default};
