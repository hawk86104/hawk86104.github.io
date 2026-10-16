import{importShared as o}from"./3d-tiles-renderer.SrkAf33K1792113086829.js";import"./vanilla-BEVDQrzM.BSmC85A81792113086829.js";import"./three-custom-shader-material.es.Vvy8hiiw1792113086829.js";import"./skyBoxAmesh.vue_vue_type_script_setup_true_lang.DlkVIGVX1792113086829.js";import"./skyBoxBmesh.vue_vue_type_script_setup_true_lang.BWffLfyq1792113086829.js";import"./skyBoxDmesh.vue_vue_type_script_setup_true_lang.t4bSKs-g1792113086829.js";import{version as b,useTresContext as P,useTres as k}from"./index.D0PNIh791792113086829.js";import{EXRLoader as x}from"./EXRLoader.C51mZfyL1792113086829.js";import{loadHDR as C}from"./utils.CAb4OiYw1792113086829.js";const{Mesh:T,IcosahedronGeometry:B,ShaderMaterial:M,DoubleSide:j}=await o("three"),z=c=>c&&c.isCubeTexture;class U extends T{constructor(t,a){var n,u;const s=z(t),e=((u=s?(n=t.image[0])==null?void 0:n.width:t.image.width)!=null?u:1024)/4,i=Math.floor(Math.log2(e)),m=Math.pow(2,i),h=3*Math.max(m,16*7),_=4*m,v=[s?"#define ENVMAP_TYPE_CUBE":"",`#define CUBEUV_TEXEL_WIDTH ${1/h}`,`#define CUBEUV_TEXEL_HEIGHT ${1/_}`,`#define CUBEUV_MAX_MIP ${i}.0`],p=`
        varying vec3 vWorldPosition;
        void main() 
        {
            vec4 worldPosition = ( modelMatrix * vec4( position, 1.0 ) );
            vWorldPosition = worldPosition.xyz;
            
            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }
        `,g=v.join(`
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
            #include <${b>=154?"colorspace_fragment":"encodings_fragment"}>
        }
        `,w={map:{value:t},height:{value:a?.height||15},radius:{value:a?.radius||100}},E=new B(1,16),y=new M({uniforms:w,fragmentShader:g,vertexShader:p,side:j});super(E,y)}set radius(t){this.material.uniforms.radius.value=t}get radius(){return this.material.uniforms.radius.value}set height(t){this.material.uniforms.height.value=t}get height(){return this.material.uniforms.height.value}}await o("three");const{defineComponent:Q}=await o("vue"),{watchEffect:Z}=await o("vue");await o("three");const{withAsyncContext:I,defineComponent:R}=await o("vue"),{unref:A,openBlock:V,createElementBlock:W}=await o("vue"),q=["object","scale"],$=await o("three"),ee=R({__name:"groundProjectedEnvCom",props:{texture:{default:"https://opensource.cdn.icegl.cn/images/skyBox/round_platform_1k.exr"},size:{default:100}},async setup(c){let t,a;const n=c,u=new x,s=([t,a]=I(()=>u.loadAsync(n.texture)),t=await t,a(),t);s.mapping=$.EquirectangularReflectionMapping;const{scene:r}=P();r.value.environment=s;const e=new U(s);return(i,m)=>(V(),W("primitive",{object:A(e),scale:n.size},null,8,q))}}),{defineComponent:D}=await o("vue"),{ref:H,watch:d}=await o("vue"),l=await o("three"),te=D({__name:"basiceEnv",props:{on:{default:!0},background:{default:!1},backgroundBlurriness:{default:0},type:{default:"sunset"},environmentIntensity:{default:1},environmentRotations:{default:{x:0,y:0,z:0}}},setup(c){const t=c;function a(e){return e instanceof l.Euler?e:Array.isArray(e)?new l.Euler(e[0],e[1],e[2]):typeof e=="number"?new l.Euler(e,e,e):e instanceof l.Vector3?new l.Euler(e.x,e.y,e.z):typeof e=="object"&&"x"in e&&"y"in e&&"z"in e?new l.Euler(e.x,e.y,e.z):null}const{scene:n,camera:u,renderer:s}=k(),r=H(null);return d(()=>[t.on,t.background,r.value],([e,i])=>{n.value&&(e&&r.value?n.value.environment=r.value:n.value.environment=null,n.value.background=i&&r.value?r.value:null,window.globalTvtuseTres||(window.globalTvtuseTres={scene:n.value,camera:u.value,renderer:s}))},{immediate:!0}),d(()=>t.type,async e=>{n.value&&f[e]&&(r.value=await C(S+f[e]),t.on&&(n.value.environment=r.value))},{immediate:!0}),d(()=>t.environmentIntensity,e=>{n.value&&(n.value.environmentIntensity=e)},{immediate:!0}),d(()=>t.backgroundBlurriness,e=>{n.value&&(n.value.backgroundBlurriness=e)},{immediate:!0}),d(()=>t.environmentRotations,e=>{if(n.value){const i=a(e);i&&(n.value.environmentRotation.copy(i),n.value.backgroundRotation.copy(i))}},{immediate:!0,deep:!0}),(e,i)=>null}}),f={sunset:"belfast_sunset_puresky_1k.hdr",desert:"desert_1k.hdr",room:"abandoned_games_room_02_1k.hdr",canary:"canary_wharf_1k.hdr",outdoor:"outdoor_umbrellas_1k.hdr",haven:"poly_haven_studio_1k.hdr",shanghai:"shanghai_bund_1k.hdr",hangar:"small_hangar_01_1k.hdr",snowy:"snowy_forest_path_01_1k.hdr",equirectangular:"equirectangular.hdr"},S="./plugins/skyBox/hdr/";export{f as HDRfileList,ee as _sfc_main,te as _sfc_main$1};
