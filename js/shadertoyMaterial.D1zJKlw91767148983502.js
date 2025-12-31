import{importShared as v}from"./3d-tiles-renderer.DZNovkLO1767148983502.js";import{Kk as T}from"./index.DTe2qqjO1767148983502.js";import{useTexture as P}from"./customShaderMaterial.vue_vue_type_script_setup_true_lang.B7dQ_CiZ1767148983502.js";import"./index.vue_vue_type_script_setup_true_lang.CjsHShHS1767148983502.js";import{B as R}from"./three-custom-shader-material.es.DIiohWIA1767148983502.js";import{Pane as U}from"./tweakpane.BQRZXf8M1767148983502.js";const{DoubleSide:z,MeshPhysicalMaterial:B}=await v("three");class m{constructor(e,l){const s=m.replaceVariable(e),u=new R({baseMaterial:B,vertexShader:`	
            varying vec2 vUv;
            void main() {
                csm_Position = position * vec3(1.0);
                vUv = uv;
            } `,fragmentShader:s,side:z,uniforms:l.material.uniforms});this.material=u,console.log(this.material)}static replaceVariable(e){return e=`varying vec2 vUv;
`+e,/iTime|iTimeDelta/g.test(e)&&(e=`varying vec2 vUv;
uniform float utime;
`+e.split(`varying vec2 vUv;
`)[1],e=e.replace(/iTime|iTimeDelta/g,"utime")),/iResolution\.[a-zA-Z_]+/g.test(e)&&(e=`varying vec2 vUv;
uniform vec2 uresolution;
`+e.split(`varying vec2 vUv;
`)[1],e=e.replace(/iResolution\.[a-zA-Z_]+/g,"1."),e=e.replace(/iResolution/g,"1.")),/iChannel0|iChannel1|iChannel2|iChannel3/g.test(e)&&(e=`varying vec2 vUv;
uniform sampler2D  utexture;
`+e.split(`varying vec2 vUv;
`)[1],e=e.replace(/iChannel0|iChannel1|iChannel2|iChannel3/g,"utexture")),e.replace(/iMouse/g,"umouse"),e.replace(/void mainImage\( out vec4 fragColor, in vec2 fragCoord \)/g,"void main()").replace(/fragColor/g,"csm_DiffuseColor").replace(/fragCoord/g,"vUv")}}const{withAsyncContext:D,defineComponent:k}=await v("vue"),{createElementVNode:n,unref:g,normalizeProps:G,guardReactiveProps:K,createVNode:M,resolveComponent:A,mergeProps:I,withCtx:N,openBlock:V,createBlock:Y}=await v("vue"),E={ref:"perspectiveCameraRef",position:[300,250,-122],fov:45,near:1,far:1e4},L=["object","side"],{reactive:W,onMounted:j}=await v("vue"),{DoubleSide:H,Mesh:O,Vector2:X,BoxGeometry:x,Group:Z,PlaneGeometry:$,TorusKnotGeometry:q}=await v("three"),ie=k({__name:"shadertoyMaterial",async setup(F){let e,l;const s={clearColor:"#000000",shadows:!0,alpha:!1,useLegacyLights:!0},u={autoRotate:!0,enableDamping:!0},f=new U({title:"参数"});let C=([e,l]=D(()=>P("./plugins/earthSample/image/earthA/moon_ring.png")),e=await e,l(),e),i=new Z,a=W({material:{uniforms:{utime:{value:0},uresolution:{value:new X(40,40)},utexture:{value:C}}}}),r=new x(100,100,100),p=new m(`/* 
    Kishimisu's video: https://youtu.be/f4s1h2YETNY
    Kishumisu's shader link: https://www.shadertoy.com/view/mtyGWy
*/

vec3 palette( float t ) {
    vec3 a = vec3(0.5, 0.5, 0.5);
    vec3 b = vec3(0.5, 0.5, 0.5);
    vec3 c = vec3(1.0, 1.0, 1.0);
    vec3 d = vec3(0.263,0.416,0.557);

    return a + b*cos( 6.28318*(c*t+d) );
}

void mainImage( out vec4 fragColor, in vec2 fragCoord ) {
    vec2 uv = (fragCoord * 2.0 - iResolution.xy) / iResolution.y;
    vec2 uv0 = uv;
    vec3 finalColor = vec3(0.0);
    
    for (float i = 0.0; i < 5.0; i++) {
        uv = fract(uv * 1.5) - 0.5;

        float d = length(uv) * exp(-length(uv0));

        vec3 col = palette(length(uv0) + i*.4 + iTime*.4);

        d = sin(d*8. + iTime)/8.;
        d = abs(d);

        d = pow(0.01 / d, 1.2);

        finalColor += col * d;
    }
        
    fragColor = vec4(finalColor, 1.0);
}`,a),c=new O(r,p.material);f.addBlade({view:"list",label:"shadertoy在线地址",parse:o=>String(o),options:[{text:"1",value:`/* 
    Kishimisu's video: https://youtu.be/f4s1h2YETNY
    Kishumisu's shader link: https://www.shadertoy.com/view/mtyGWy
*/

vec3 palette( float t ) {
    vec3 a = vec3(0.5, 0.5, 0.5);
    vec3 b = vec3(0.5, 0.5, 0.5);
    vec3 c = vec3(1.0, 1.0, 1.0);
    vec3 d = vec3(0.263,0.416,0.557);

    return a + b*cos( 6.28318*(c*t+d) );
}

void mainImage( out vec4 fragColor, in vec2 fragCoord ) {
    vec2 uv = (fragCoord * 2.0 - iResolution.xy) / iResolution.y;
    vec2 uv0 = uv;
    vec3 finalColor = vec3(0.0);
    
    for (float i = 0.0; i < 5.0; i++) {
        uv = fract(uv * 1.5) - 0.5;

        float d = length(uv) * exp(-length(uv0));

        vec3 col = palette(length(uv0) + i*.4 + iTime*.4);

        d = sin(d*8. + iTime)/8.;
        d = abs(d);

        d = pow(0.01 / d, 1.2);

        finalColor += col * d;
    }
        
    fragColor = vec4(finalColor, 1.0);
}`},{text:"2",value:`precision highp float;


mat2 rot(float a) {
    float c = cos(a), s = sin(a);
    return mat2(c,s,-s,c);
}

const float pi = acos(-1.0);
const float pi2 = pi*2.0;

vec2 pmod(vec2 p, float r) {
    float a = atan(p.x, p.y) + pi/r;
    float n = pi2 / r;
    a = floor(a/n)*n;
    return p*rot(-a);
}

float box( vec3 p, vec3 b ) {
    vec3 d = abs(p) - b;
    return min(max(d.x,max(d.y,d.z)),0.0) + length(max(d,0.0));
}

float ifsBox(vec3 p) {
    for (int i=0; i<5; i++) {
        p = abs(p) - 1.0;
        p.xy *= rot(iTime*0.3);
        p.xz *= rot(iTime*0.1);
    }
    p.xz *= rot(iTime);
    return box(p, vec3(0.4,0.8,0.3));
}

float map(vec3 p, vec3 cPos) {
    vec3 p1 = p;
    p1.x = mod(p1.x-5., 10.) - 5.;
    p1.y = mod(p1.y-5., 10.) - 5.;
    p1.z = mod(p1.z, 16.)-8.;
    p1.xy = pmod(p1.xy, 5.0);
    return ifsBox(p1);
}

void mainImage( out vec4 fragColor, in vec2 fragCoord ) {
    vec2 p = (fragCoord.xy * 2.0 - iResolution.xy) / min(iResolution.x, iResolution.y);

    vec3 cPos = vec3(0.0,0.0, -3.0 * iTime);
    // vec3 cPos = vec3(0.3*sin(iTime*0.8), 0.4*cos(iTime*0.3), -6.0 * iTime);
    vec3 cDir = normalize(vec3(0.0, 0.0, -1.0));
    vec3 cUp  = vec3(sin(iTime), 1.0, 0.0);
    vec3 cSide = cross(cDir, cUp);

    vec3 ray = normalize(cSide * p.x + cUp * p.y + cDir);

    // Phantom Mode https://www.shadertoy.com/view/MtScWW by aiekick
    float acc = 0.0;
    float acc2 = 0.0;
    float t = 0.0;
    for (int i = 0; i < 99; i++) {
        vec3 pos = cPos + ray * t;
        float dist = map(pos, cPos);
        dist = max(abs(dist), 0.02);
        float a = exp(-dist*3.0);
        if (mod(length(pos)+24.0*iTime, 30.0) < 3.0) {
            a *= 2.0;
            acc2 += a;
        }
        acc += a;
        t += dist * 0.5;
    }

    vec3 col = vec3(acc * 0.01, acc * 0.011 + acc2*0.002, acc * 0.012+ acc2*0.005);
    fragColor = vec4(col, 1.0 - t * 0.03);
}`}],value:`/* 
    Kishimisu's video: https://youtu.be/f4s1h2YETNY
    Kishumisu's shader link: https://www.shadertoy.com/view/mtyGWy
*/

vec3 palette( float t ) {
    vec3 a = vec3(0.5, 0.5, 0.5);
    vec3 b = vec3(0.5, 0.5, 0.5);
    vec3 c = vec3(1.0, 1.0, 1.0);
    vec3 d = vec3(0.263,0.416,0.557);

    return a + b*cos( 6.28318*(c*t+d) );
}

void mainImage( out vec4 fragColor, in vec2 fragCoord ) {
    vec2 uv = (fragCoord * 2.0 - iResolution.xy) / iResolution.y;
    vec2 uv0 = uv;
    vec3 finalColor = vec3(0.0);
    
    for (float i = 0.0; i < 5.0; i++) {
        uv = fract(uv * 1.5) - 0.5;

        float d = length(uv) * exp(-length(uv0));

        vec3 col = palette(length(uv0) + i*.4 + iTime*.4);

        d = sin(d*8. + iTime)/8.;
        d = abs(d);

        d = pow(0.01 / d, 1.2);

        finalColor += col * d;
    }
        
    fragColor = vec4(finalColor, 1.0);
}`}).on("change",o=>{p=new m(o.value,a),c.material=p.material,i.add(c),d(i,r)});let h=new x(100,100,100),w=new $(100,100),y=new q(100,10,100,16);f.addBlade({view:"list",label:"几何体",options:[{text:"BOX",value:h},{text:"Plane",value:w},{text:"TorusKnot",value:y}],value:h}).on("change",o=>{r=o.value,c.geometry=r,i.add(c),d(i,r)});const d=(o,t)=>{o.children[0].geometry.dispose(),o.children[0].geometry=t},b=({delta:o})=>{a.material.uniforms.utime.value+=o*10};return j(()=>{i.add(c),d(i,r)}),(o,t)=>{const _=A("TresCanvas");return V(),Y(_,I(s,{"window-size":"",onLoop:b}),{default:N(()=>[n("TresPerspectiveCamera",E,null,512),M(g(T),G(K(u)),null,16),t[0]||(t[0]=n("TresAmbientLight",{color:"#ffffff"},null,-1)),t[1]||(t[1]=n("TresDirectionalLight",{position:[100,100,0],intensity:.5,color:"#ffffff"},null,-1)),n("primitive",{object:g(i),side:g(H)},null,8,L),t[2]||(t[2]=n("TresAxesHelper",{args:[1e3],position:[0,19,0]},null,-1)),t[3]||(t[3]=n("TresGridHelper",{args:[6e3,100],position:[0,19,0]},null,-1))]),_:1},16)}}});export{ie as default};
