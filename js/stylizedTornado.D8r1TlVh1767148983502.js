import{importShared as o}from"./3d-tiles-renderer.DZNovkLO1767148983502.js";import{Pane as g}from"./tweakpane.BQRZXf8M1767148983502.js";import{instance as c}from"./Resource.DwxffO9V1767148983502.js";import{loading$2 as B}from"./generalFont.vue_vue_type_script_setup_true_lang.Cx7Vff0m1767148983502.js";import"./default.vue_vue_type_script_setup_true_lang.Bjy6WD1C1767148983502.js";import"./three-mesh-ui.module.Cv5lk1vQ1767148983502.js";import"./domPanel.vue_vue_type_style_index_0_lang.DqrQKbSz1767148983502.js";import{_sfc_main as T}from"./pagesShow.vue_vue_type_script_setup_true_lang.Crq63Xp41767148983502.js";import{_l as v}from"./index.DTe2qqjO1767148983502.js";var k=`out vec2 vUv;

void main()
{
    

    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

    vUv = uv;
    
}`,y=`uniform float uTime;
uniform vec3 uFrontColor;
uniform vec3 uBackColor;
uniform sampler2D uNoise;
uniform float uPowerOffset;
uniform float uNoiseCutOff;
uniform bool uColorBoth;

in vec2 vUv;

void clip( float clipValue, float alphaThreshold, int type )
{
    
    switch( type )
    {
        case 0: 
            if( clipValue < alphaThreshold ) discard;
        break;

        case 1: 
            if( clipValue > alphaThreshold ) discard;
        break;

        case 2: 
            if( clipValue <= alphaThreshold ) discard;
        break;

        case 3: 
            if( clipValue >= alphaThreshold ) discard;
        break;

        case 4: 
            if( clipValue == alphaThreshold ) discard;
        break;

        default: 
            if( clipValue < alphaThreshold ) discard;
        break;
    }
}
vec2 tileOffset( vec2 uv , vec2 tiling, vec2 offset )
{
    return  uv * tiling + offset;
}

void main()
{
    vec2 uv = vUv;

    vec2 timeOffset = vec2( uTime * 0.6, 0.0 );

    

    
    vec3 noiseVoronoi = texture( uNoise, uv ).rgb;

    float uvCutOff = uv.y;

    uvCutOff = smoothstep( 0.02, 1.0, uvCutOff + 0.2  );

    
    float noiseCutOff = pow( noiseVoronoi.r, uPowerOffset );

    

    
    vec3 colorFront = uFrontColor;
    colorFront *= noiseCutOff;

    vec3 colorBack = uBackColor;
    colorBack *= noiseCutOff;

    
    vec3 colorFinal = colorFront;

    if( uColorBoth )
    {
        colorFinal = ( ( gl_FrontFacing ) ? colorFront : colorBack );
    }

    
    clip( noiseCutOff, uNoiseCutOff, 0 );

    gl_FragColor = vec4( colorFinal, noiseCutOff * uvCutOff );
    

    #include <tonemapping_fragment>
    #include <colorspace_fragment>

}`;const{defineComponent:O}=await o("vue"),{normalizeProps:V,guardReactiveProps:$,openBlock:S,createElementBlock:b}=await o("vue"),{watch:x}=await o("vue"),p=await o("three"),E=O({__name:"meshSpiralMaterial",props:{frontColor:{default:"#320564"},backColor:{default:"#ec22ff"},intensity:{default:1.5},powerOffset:{default:4},noiseCutOff:{default:.32},colorBoth:{type:Boolean,default:!1}},setup(a){const e=a,n=c.getItem("noiseVoronoi.png"),t={uniforms:{uTime:{value:0},uFrontColor:{value:new p.Color(e.frontColor)},uBackColor:{value:new p.Color(e.backColor).multiplyScalar(e.intensity)},uNoise:{value:n},uPowerOffset:{value:e.powerOffset},uNoiseCutOff:{value:e.noiseCutOff},uColorBoth:{value:e.colorBoth}},vertexShader:k,fragmentShader:y,transparent:!0,side:p.DoubleSide,depthWrite:!0,depthTest:!0},{onBeforeRender:r}=v();return r(({delta:l})=>{t.uniforms.uTime.value+=l}),x(()=>[e.frontColor,e.backColor],([l,f])=>{t.uniforms.uFrontColor.value.setStyle(l),t.uniforms.uBackColor.value.setStyle(f).multiplyScalar(e.intensity)}),(l,f)=>(S(),b("TresShaderMaterial",V($(t)),null,16))}}),{defineComponent:N}=await o("vue"),{unref:R,createVNode:F,createElementVNode:P,openBlock:A,createElementBlock:M}=await o("vue"),U=["geometry"],{ref:I}=await o("vue"),q=N({__name:"highlightMiddle",props:{frontColor:{default:"#111111"},backColor:{default:"#ff810c"}},setup(a){const e=I(null),{nodes:n}=c.getItem("spiral-middle.glb"),{onBeforeRender:t}=v();return t(({delta:r,elapsed:l})=>{if(e.value){const f=l*3.4,m=.2*Math.sin(f)+.8;e.value.rotation.y+=r*6,e.value.scale.set(m,m,m)}}),(r,l)=>(A(),M("TresGroup",null,[P("TresMesh",{ref_key:"meshRef",ref:e,geometry:R(n).Cylinder.geometry,renderOrder:999991},[F(E,{frontColor:r.frontColor,backColor:r.backColor,intensity:2.7,powerOffset:12,colorBoth:""},null,8,["frontColor","backColor"])],8,U)]))}});var G=`out vec2 vUv;

void main()
{
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

    vUv = uv;
}`,H=`uniform float uTime;
uniform vec3 uColor;
uniform float uTwirl;
uniform vec2 uRadialShear;
uniform vec2 uTwirlOffset;
uniform vec2 uRadialOffset;
uniform vec2 uTwirlCenter;
uniform vec2 uRadialCenter;
uniform float uNoisePower;
uniform float uAlphaThreshold;
uniform bool uEdge;

in vec2 vUv;

void clip( float clipValue, float alphaThreshold, int type )
{
    
    switch( type )
    {
        case 0: 
            if( clipValue < alphaThreshold ) discard;
        break;

        case 1: 
            if( clipValue > alphaThreshold ) discard;
        break;

        case 2: 
            if( clipValue <= alphaThreshold ) discard;
        break;

        case 3: 
            if( clipValue >= alphaThreshold ) discard;
        break;

        case 4: 
            if( clipValue == alphaThreshold ) discard;
        break;

        default: 
            if( clipValue < alphaThreshold ) discard;
        break;
    }
}
vec2 twirl(vec2 uv, vec2 center, float strength, vec2 offset)
{
    vec2 delta = uv - center;
    float angle = strength * length(delta);
    float x = cos(angle) * delta.x - sin(angle) * delta.y;
    float y = sin(angle) * delta.x + cos(angle) * delta.y;
    return vec2(x + center.x + offset.x, y + center.y + offset.y);
}
vec2 radialShear( vec2 uv, vec2 center, float strength, vec2 offset )
{
    vec2 delta = uv - center;
    float delta2 = dot( delta.xy, delta.xy );

    float deltaOffset = delta2 * strength;

    return uv + vec2( delta.y, -delta.x) * deltaOffset + offset;
}

vec2 radialShear( vec2 uv, vec2 center, vec2 strength, vec2 offset )
{
    vec2 delta = uv - center;
    vec2 delta2 =  vec2( dot( delta.xy, delta.xy ) );

    vec2 deltaOffset = delta2 * strength;

    return uv + vec2( delta.y, -delta.x) * deltaOffset + offset;
}
float randomSimple(vec2 n) { 
	return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
}

float interpolate( float a, float b, float t )
{
    return ( 1.0 - t ) * a + ( t * b );
}

float valueNoise( vec2 uv )
{
    vec2 i = floor( uv );
    vec2 f = fract( uv );
    f = f * f * ( 3.0 - 2.0 * f );

    uv = abs( fract( uv ) - 0.5 );
    vec2 c0 = i + vec2(0.0, 0.0);
    vec2 c1 = i + vec2(1.0, 0.0);
    vec2 c2 = i + vec2(0.0, 1.0);
    vec2 c3 = i + vec2(1.0, 1.0);
    float r0 = randomSimple(c0);
    float r1 = randomSimple(c1);
    float r2 = randomSimple(c2);
    float r3 = randomSimple(c3);

    float bottomOfGrid = interpolate(r0, r1, f.x);
    float topOfGrid = interpolate(r2, r3, f.x);
    float t = interpolate(bottomOfGrid, topOfGrid, f.y);
    return t;
}

float noiseSimple( vec2 UV, float Scale )
{
    float t = 0.0;

    float freq = pow(2.0, float(0));
    float amp = pow(0.5, float(3-0));
    t += valueNoise(vec2(UV.x*Scale/freq, UV.y*Scale/freq))*amp;

    freq = pow(2.0, float(1));
    amp = pow(0.5, float(3-1));
    t += valueNoise(vec2(UV.x*Scale/freq, UV.y*Scale/freq))*amp;

    freq = pow(2.0, float(2));
    amp = pow(0.5, float(3-2));
    t += valueNoise(vec2(UV.x * Scale / freq, UV.y * Scale / freq ) ) * amp;

    return t;
}
float remap( float value, float min1, float max1, float min2, float max2 ) 
{
  return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
}

void main()
{

    vec2 uv = vUv;
    float time = uTime;

    vec2 twirlOffset = vec2( time * uTwirlOffset.x, time * uTwirlOffset.y );
    vec2 radialOffset = vec2( time * uRadialOffset.x, time * uRadialOffset.y );

    float uvCutOff = uv.y;
    uvCutOff = smoothstep( 0.2, 1.0, uvCutOff + 0.2 );

    vec2 uvRadial = radialShear( uv, uRadialCenter, uRadialShear, radialOffset );
    vec2 uvTwirl = twirl( uv, uTwirlCenter, uTwirl, twirlOffset );

    float noiseRadial = noiseSimple( uvRadial, 20.0 );
    float noiseTwirl = noiseSimple( uvTwirl, 20.0 );

    float noise = noiseRadial * noiseTwirl;

    noise = pow( noise, uNoisePower );

    float dissolve = remap( noise, 0.0, 1.0, 1.0, 0.0 );

    vec3 colorFinal = uColor;
    colorFinal *= noise;

    clip( noise, uAlphaThreshold, 0 );

    vec4 color = vec4( colorFinal, dissolve );

    if( uEdge )
    {
        color.a *= uvCutOff;
    }

    gl_FragColor = color;
    #include <tonemapping_fragment>
    #include <colorspace_fragment>

}`;const{defineComponent:z}=await o("vue"),{normalizeProps:L,guardReactiveProps:D,openBlock:j,createElementBlock:W}=await o("vue"),{watch:J}=await o("vue"),i=await o("three"),h=z({__name:"meshTornadoMaterial",props:{colorBase:{default:"#ff821c"},colorIntensity:{default:12},twirlAmount:{default:8},radialShearAmount:{default:new i.Vector2(5,5)},twirlOffset:{default:new i.Vector2(0,.5)},radialOffset:{default:new i.Vector2(0,.5)},twirlCenter:{default:new i.Vector2(.5,-.5)},radialCenter:{default:new i.Vector2(.5,.5)},noisePower:{default:1},alphaThreshold:{default:.17},showEdge:{type:Boolean,default:!1}},setup(a){const e=a,n={uniforms:{uTime:{value:0},uColor:{value:new i.Color(e.colorBase).multiplyScalar(e.colorIntensity)},uTwirl:{value:e.twirlAmount},uRadialShear:{value:e.radialShearAmount},uTwirlOffset:{value:e.twirlOffset},uRadialOffset:{value:e.radialOffset},uTwirlCenter:{value:e.twirlCenter},uRadialCenter:{value:e.radialCenter},uNoisePower:{value:e.noisePower},uAlphaThreshold:{value:e.alphaThreshold},uEdge:{value:e.showEdge}},vertexShader:G,fragmentShader:H,transparent:!0,side:i.DoubleSide,depthWrite:!0,depthTest:!0},{onBeforeRender:t}=v();return t(({delta:r})=>{n.uniforms.uTime.value+=r}),J(()=>e.colorBase,r=>{n.uniforms.uColor.value.setStyle(r).multiplyScalar(e.colorIntensity)}),(r,l)=>(j(),W("TresShaderMaterial",L(D(n)),null,16))}}),{defineComponent:K}=await o("vue"),{unref:Q,createVNode:X,openBlock:Y,createElementBlock:Z}=await o("vue"),ee=["geometry"],s=await o("three"),oe=K({__name:"tornadoOutter",props:{color:{default:"#ff5400"}},setup(a){const{nodes:e}=c.getItem("tornado.glb");return(n,t)=>(Y(),Z("TresMesh",{geometry:Q(e).tornado.geometry},[X(h,{colorBase:n.color,colorIntensity:2,twirlAmount:6,radialShearAmount:new s.Vector2(.9,.9),twirlCenter:new s.Vector2(.5,-.52),twirlOffset:new s.Vector2(-.5,-.25),radialOffset:new s.Vector2(-.5,.5),alphaThreshold:.18,showEdge:!1},null,8,["colorBase","radialShearAmount","twirlCenter","twirlOffset","radialOffset"])],8,ee))}}),{defineComponent:ne}=await o("vue"),{unref:te,createVNode:re,openBlock:ae,createElementBlock:le}=await o("vue"),ie=["geometry"],u=await o("three"),ce=ne({__name:"tornado",props:{color:{default:"#ff5400"}},setup(a){const{nodes:e}=c.getItem("tornado.glb");return(n,t)=>(ae(),le("TresMesh",{geometry:te(e).tornado.geometry},[re(h,{colorBase:n.color,colorIntensity:13,twirlAmount:8,radialShearAmount:new u.Vector2(.7,.7),twirlCenter:new u.Vector2(.5,-.52),twirlOffset:new u.Vector2(-1,-.5),radialOffset:new u.Vector2(-1,.5),alphaThreshold:.23,showEdge:!1},null,8,["colorBase","radialShearAmount","twirlCenter","twirlOffset","radialOffset"])],8,ie))}}),{defineComponent:fe}=await o("vue"),{unref:se,createVNode:ue,openBlock:de,createElementBlock:me}=await o("vue"),pe=["geometry"],ve=await o("three"),he=fe({__name:"tornadoInner",props:{color:{default:"#ff5400"}},setup(a){const{nodes:e}=c.getItem("tornado.glb");return(n,t)=>(de(),me("TresMesh",{geometry:se(e).tornado.geometry},[ue(h,{colorBase:n.color,colorIntensity:8,radialShearAmount:new ve.Vector2(.7,.7),alphaThreshold:.17,showEdge:!0},null,8,["colorBase","radialShearAmount"])],8,pe))}}),{defineComponent:_e}=await o("vue"),{createVNode:d,openBlock:we,createElementBlock:Ce}=await o("vue"),ge=_e({__name:"experience",props:{color0:{default:"#111111"},color1:{default:"#ff810c"},color2:{default:"#3a3a3a"},color3:{default:"#ff821c"},color4:{default:"#ff5400"}},setup(a){return(e,n)=>(we(),Ce("TresGroup",null,[d(q,{scale:[1.1,4.6,1.1],position:[0,-2,0],frontColor:e.color0,backColor:e.color1},null,8,["frontColor","backColor"]),d(oe,{scale:[.6,.4,.6],position:[0,-2.5,0],renderOrder:999992,color:e.color2},null,8,["color"]),d(ce,{scale:[.44,.4,.44],position:[0,-2.5,0],renderOrder:999993,color:e.color3},null,8,["color"]),d(he,{scale:.4,position:[0,-2.5,0],renderOrder:999994,color:e.color4},null,8,["color"])]))}}),{defineComponent:Be}=await o("vue"),{unref:_,createVNode:w,mergeProps:Te,openBlock:C,createBlock:ke,createCommentVNode:ye,withCtx:Oe,Fragment:Ve,createElementBlock:$e}=await o("vue"),{reactive:Se}=await o("vue"),Ue=Be({__name:"stylizedTornado",setup(a){c.loadResources([{functionName:"GLTFLoader",url:"./plugins/digitalCity/model/spiral-middle.glb"},{functionName:"GLTFLoader",url:"./plugins/digitalCity/model/tornado.glb"},{functionName:"TextureLoader",url:"./plugins/digitalCity/image/noise/noiseVoronoi.png"}]);const e=new g({title:"龙卷风参数",expanded:!0}),n=Se({color0:"#111111",color1:"#ff810c",color2:"#3a3a3a",color3:"#ff821c",color4:"#ff1800"});return e.addBinding(n,"color0",{label:"颜色0"}),e.addBinding(n,"color1",{label:"颜色1"}),e.addBinding(n,"color2",{label:"颜色2"}),e.addBinding(n,"color3",{label:"颜色3"}),e.addBinding(n,"color4",{label:"颜色4"}),(t,r)=>(C(),$e(Ve,null,[w(_(B),{useResourceManager:""}),w(T,{showAxesHelper:!1},{ability:Oe(()=>[_(c).hasAllFinished.value?(C(),ke(ge,Te({key:0,position:[10,280,0],scale:100},n),null,16)):ye("",!0)]),_:1})],64))}});export{Ue as default};
