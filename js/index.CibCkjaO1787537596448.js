import{importShared as n}from"./3d-tiles-renderer.DpOBFJ_D1787537596448.js";import"./vanilla-BEVDQrzM.CNs_dTrg1787537596448.js";import"./three-custom-shader-material.es.dux2V9dF1787537596448.js";import"./skyBoxAmesh.vue_vue_type_script_setup_true_lang.BsXiAeAe1787537596448.js";import"./skyBoxBmesh.vue_vue_type_script_setup_true_lang.C_aB2J6C1787537596448.js";import"./skyBoxDmesh.vue_vue_type_script_setup_true_lang._Sjl6KcM1787537596448.js";import{version as P,useTresContext as x,useTres as b}from"./index.tffnzxeM1787537596448.js";import{EXRLoader as C}from"./EXRLoader.Wj_jtpzH1787537596448.js";import{loadHDR as k}from"./utils.Chz5kirr1787537596448.js";const{Mesh:T,IcosahedronGeometry:M,ShaderMaterial:B,DoubleSide:j}=await n("three"),z=c=>c&&c.isCubeTexture;class U extends T{constructor(t,r){var o,u;const i=z(t),e=((u=i?(o=t.image[0])==null?void 0:o.width:t.image.width)!=null?u:1024)/4,s=Math.floor(Math.log2(e)),m=Math.pow(2,s),h=3*Math.max(m,16*7),_=4*m,p=[i?"#define ENVMAP_TYPE_CUBE":"",`#define CUBEUV_TEXEL_WIDTH ${1/h}`,`#define CUBEUV_TEXEL_HEIGHT ${1/_}`,`#define CUBEUV_MAX_MIP ${s}.0`],v=`
        varying vec3 vWorldPosition;
        void main() 
        {
            vec4 worldPosition = ( modelMatrix * vec4( position, 1.0 ) );
            vWorldPosition = worldPosition.xyz;
            
            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }
        `,g=p.join(`
`)+`
        #define ENVMAP_TYPE_CUBE_UV
        varying vec3 vWorldPosition;
        uniform float radius;
        uniform float height;
        uniform float angle;
        #ifdef ENVMAP_TYPE_CUBE
            uniform samplerCube map;
        #else
            uniform sampler2D map;
        #endif
        // From: https://www.shadertoy.com/view/4tsBD7
        float diskIntersectWithBackFaceCulling( vec3 ro, vec3 rd, vec3 c, vec3 n, float r ) 
        {
            float d = dot ( rd, n );
            
            if( d > 0.0 ) { return 1e6; }
            
            vec3  o = ro - c;
            float t = - dot( n, o ) / d;
            vec3  q = o + rd * t;
            
            return ( dot( q, q ) < r * r ) ? t : 1e6;
        }
        // From: https://www.iquilezles.org/www/articles/intersectors/intersectors.htm
        float sphereIntersect( vec3 ro, vec3 rd, vec3 ce, float ra ) 
        {
            vec3 oc = ro - ce;
            float b = dot( oc, rd );
            float c = dot( oc, oc ) - ra * ra;
            float h = b * b - c;
            
            if( h < 0.0 ) { return -1.0; }
            
            h = sqrt( h );
            
            return - b + h;
        }
        vec3 project() 
        {
            vec3 p = normalize( vWorldPosition );
            vec3 camPos = cameraPosition;
            camPos.y -= height;
            float intersection = sphereIntersect( camPos, p, vec3( 0.0 ), radius );
            if( intersection > 0.0 ) {
                
                vec3 h = vec3( 0.0, - height, 0.0 );
                float intersection2 = diskIntersectWithBackFaceCulling( camPos, p, h, vec3( 0.0, 1.0, 0.0 ), radius );
                p = ( camPos + min( intersection, intersection2 ) * p ) / radius;
            } else {
                p = vec3( 0.0, 1.0, 0.0 );
            }
            return p;
        }
        #include <common>
        #include <cube_uv_reflection_fragment>
        void main() 
        {
            vec3 projectedWorldPosition = project();
            
            #ifdef ENVMAP_TYPE_CUBE
                vec3 outcolor = textureCube( map, projectedWorldPosition ).rgb;
            #else
                vec3 direction = normalize( projectedWorldPosition );
                vec2 uv = equirectUv( direction );
                vec3 outcolor = texture2D( map, uv ).rgb;
            #endif
            gl_FragColor = vec4( outcolor, 1.0 );
            #include <tonemapping_fragment>
            #include <${P>=154?"colorspace_fragment":"encodings_fragment"}>
        }
        `,w={map:{value:t},height:{value:r?.height||15},radius:{value:r?.radius||100}},E=new M(1,16),y=new B({uniforms:w,fragmentShader:g,vertexShader:v,side:j});super(E,y)}set radius(t){this.material.uniforms.radius.value=t}get radius(){return this.material.uniforms.radius.value}set height(t){this.material.uniforms.height.value=t}get height(){return this.material.uniforms.height.value}}await n("three");const{defineComponent:Q}=await n("vue"),{watchEffect:Z}=await n("vue");await n("three");const{withAsyncContext:I,defineComponent:A}=await n("vue"),{unref:R,openBlock:V,createElementBlock:W}=await n("vue"),q=["object","scale"],$=await n("three"),ee=A({__name:"groundProjectedEnvCom",props:{texture:{default:"https://opensource.cdn.icegl.cn/images/skyBox/round_platform_1k.exr"},size:{default:100}},async setup(c){let t,r;const o=c,u=new C,i=([t,r]=I(()=>u.loadAsync(o.texture)),t=await t,r(),t);i.mapping=$.EquirectangularReflectionMapping;const{scene:a}=x();a.value.environment=i;const e=new U(i);return(s,m)=>(V(),W("primitive",{object:R(e),scale:o.size},null,8,q))}}),{defineComponent:D}=await n("vue"),{ref:H,watch:d}=await n("vue"),l=await n("three"),te=D({__name:"basiceEnv",props:{on:{default:!0},type:{default:"sunset"},environmentIntensity:{default:1},environmentRotations:{default:{x:0,y:0,z:0}}},setup(c){const t=c;function r(e){return e instanceof l.Euler?e:Array.isArray(e)?new l.Euler(e[0],e[1],e[2]):typeof e=="number"?new l.Euler(e,e,e):e instanceof l.Vector3?new l.Euler(e.x,e.y,e.z):typeof e=="object"&&"x"in e&&"y"in e&&"z"in e?new l.Euler(e.x,e.y,e.z):null}const{scene:o,camera:u,renderer:i}=b(),a=H(null);return d(()=>[t.on,a.value],([e,s])=>{o.value&&(e&&a.value?o.value.environment=a.value:o.value.environment=null,window.globalTvtuseTres||(window.globalTvtuseTres={scene:o.value,camera:u.value,renderer:i}))},{immediate:!0}),d(()=>t.type,async e=>{o.value&&f[e]&&(a.value=await k(S+f[e]),t.on&&(o.value.environment=a.value))},{immediate:!0}),d(()=>t.environmentIntensity,e=>{o.value&&(o.value.environmentIntensity=e)},{immediate:!0}),d(()=>t.environmentRotations,e=>{if(o.value){const s=r(e);s&&o.value.environmentRotation.copy(s)}},{immediate:!0,deep:!0}),(e,s)=>null}}),f={sunset:"belfast_sunset_puresky_1k.hdr",desert:"desert_1k.hdr",room:"abandoned_games_room_02_1k.hdr",canary:"canary_wharf_1k.hdr",outdoor:"outdoor_umbrellas_1k.hdr",haven:"poly_haven_studio_1k.hdr",shanghai:"shanghai_bund_1k.hdr",hangar:"small_hangar_01_1k.hdr",snowy:"snowy_forest_path_01_1k.hdr",equirectangular:"equirectangular.hdr"},S="./plugins/skyBox/hdr/";export{f as HDRfileList,ee as _sfc_main,te as _sfc_main$1};
