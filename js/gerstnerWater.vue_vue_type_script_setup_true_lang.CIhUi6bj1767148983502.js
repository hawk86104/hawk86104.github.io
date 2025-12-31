import{importShared as p}from"./3d-tiles-renderer.DZNovkLO1767148983502.js";import{Water as D}from"./Water.CCgygbmw1767148983502.js";import{Fs as I,_l as b}from"./index.DTe2qqjO1767148983502.js";var B=`uniform mat4 textureMatrix;
            uniform float time;

            varying vec4 mirrorCoord;
            varying vec4 worldPosition;

            #include <common>
            #include <fog_pars_vertex>
            #include <shadowmap_pars_vertex>
            #include <logdepthbuf_pars_vertex>

            uniform vec4 waveA;
            uniform vec4 waveB;
            uniform vec4 waveC;

            vec3 GerstnerWave (vec4 wave, vec3 p) {
            	float steepness = wave.z;
            	float wavelength = wave.w;
            	float k = 2.0 * PI / wavelength;
            	float c = sqrt(9.8 / k);
            	vec2 d = normalize(wave.xy);
            	float f = k * (dot(d, p.xy) - c * time);
            	float a = steepness / k;

            	return vec3(
            		d.x * (a * cos(f)),
            		d.y * (a * cos(f)),
            		a * sin(f)
            	);
            }

            void main() {
            	mirrorCoord = modelMatrix * vec4( position, 1.0 );
            	worldPosition = mirrorCoord.xyzw;
            	mirrorCoord = textureMatrix * mirrorCoord;

            	vec3 p = position.xyz;
            	p += GerstnerWave(waveA, position.xyz);
            	p += GerstnerWave(waveB, position.xyz);
            	p += GerstnerWave(waveC, position.xyz);
            	gl_Position = projectionMatrix * modelViewMatrix * vec4( p.x, p.y, p.z, 1.0);

            	#include <beginnormal_vertex>
            	#include <defaultnormal_vertex>
            	#include <logdepthbuf_vertex>
            	#include <fog_vertex>
            	#include <shadowmap_vertex>
            }`,L=`uniform sampler2D mirrorSampler;
            uniform float alpha;
            uniform float time;
            uniform float size;
            uniform float distortionScale;
            uniform sampler2D normalSampler;
            uniform vec3 sunColor;
            uniform vec3 sunDirection;
            uniform vec3 eye;
            uniform vec3 waterColor;

            varying vec4 mirrorCoord;
            varying vec4 worldPosition;

            vec4 getNoise( vec2 uv ) {
                vec2 uv0 = ( uv / 103.0 ) + vec2(time / 17.0, time / 29.0);
                vec2 uv1 = uv / 107.0-vec2( time / -19.0, time / 31.0 );
                vec2 uv2 = uv / vec2( 8907.0, 9803.0 ) + vec2( time / 101.0, time / 97.0 );
                vec2 uv3 = uv / vec2( 1091.0, 1027.0 ) - vec2( time / 109.0, time / -113.0 );
                vec4 noise = texture2D( normalSampler, uv0 ) +
                    texture2D( normalSampler, uv1 ) +
                    texture2D( normalSampler, uv2 ) +
                    texture2D( normalSampler, uv3 );
                return noise * 0.5 - 1.0;
            }

            void sunLight( const vec3 surfaceNormal, const vec3 eyeDirection, float shiny, float spec, float diffuse, inout vec3 diffuseColor, inout vec3 specularColor ) {
                vec3 reflection = normalize( reflect( -sunDirection, surfaceNormal ) );
                float direction = max( 0.0, dot( eyeDirection, reflection ) );
                specularColor += pow( direction, shiny ) * sunColor * spec;
                diffuseColor += max( dot( sunDirection, surfaceNormal ), 0.0 ) * sunColor * diffuse;
            }

            #include <common>
            #include <packing>
            #include <bsdfs>
            #include <fog_pars_fragment>
            #include <logdepthbuf_pars_fragment>
            #include <lights_pars_begin>
            #include <shadowmap_pars_fragment>
            #include <shadowmask_pars_fragment>

            void main() {

                #include <logdepthbuf_fragment>
                vec4 noise = getNoise( worldPosition.xz * size );
                vec3 surfaceNormal = normalize( noise.xzy * vec3( 1.5, 1.0, 1.5 ) );

                vec3 diffuseLight = vec3(0.0);
                vec3 specularLight = vec3(0.0);

                vec3 worldToEye = eye-worldPosition.xyz;
                vec3 eyeDirection = normalize( worldToEye );
                sunLight( surfaceNormal, eyeDirection, 100.0, 2.0, 0.5, diffuseLight, specularLight );

                float distance = length(worldToEye);

                vec2 distortion = surfaceNormal.xz * ( 0.001 + 1.0 / distance ) * distortionScale;
                vec3 reflectionSample = vec3( texture2D( mirrorSampler, mirrorCoord.xy / mirrorCoord.w + distortion ) );

                float theta = max( dot( eyeDirection, surfaceNormal ), 0.0 );
                float rf0 = 0.3;
                float reflectance = rf0 + ( 1.0 - rf0 ) * pow( ( 1.0 - theta ), 5.0 );
                vec3 scatter = max( 0.0, dot( surfaceNormal, eyeDirection ) ) * waterColor;
                vec3 albedo = mix( ( sunColor * diffuseLight * 0.3 + scatter ) * getShadowMask(), ( vec3( 0.1 ) + reflectionSample * 0.9 + reflectionSample * specularLight ), reflectance);
                vec3 outgoingLight = albedo;
                gl_FragColor = vec4( outgoingLight, alpha );

                #include <tonemapping_fragment>
                #include <fog_fragment>
            }`;const{defineComponent:k}=await p("vue"),{unref:A,createElementVNode:E,openBlock:N,createElementBlock:T}=await p("vue"),V=["object","rotation-x"],{watch:d,ref:W}=await p("vue"),s=await p("three"),F=k({__name:"gerstnerWater",props:{distortionScale:{default:3.7},size:{default:1},wireframe:{default:!1},sunDirection:{default:{x:0,y:0,z:0}},sunColor:{default:"#ffffff"},waterColor:{default:"#001e0f"},waves:{type:Object,default:{A:{direction:0,steepness:.4,wavelength:60},B:{direction:30,steepness:.4,wavelength:30},C:{direction:60,steepness:.4,wavelength:15}}},meshUUIDList:{default:()=>[]}},setup(y){const n=y,{scene:m}=I(),M=new s.PlaneGeometry(1024,1024,256,256),c=new D(M,{textureWidth:256,textureHeight:256,waterNormals:new s.TextureLoader().load("./plugins/water/images/waternormals.jpg",function(e){e.wrapS=e.wrapT=s.RepeatWrapping}),sunDirection:new s.Vector3().fromArray([n.sunDirection.x,n.sunDirection.y,n.sunDirection.z]),sunColor:n.sunColor,waterColor:n.waterColor,distortionScale:n.distortionScale,fog:m.value.fog!==void 0}),h=W(null);Object.defineProperty(m.value,"environment",{get(){return h.value},set(e){h.value=e}}),d(h,e=>{console.log("环境贴图变化 :",e),m.value.background=m.value.environment}),c.material.onBeforeCompile=function(e){e.uniforms.waveA={value:[Math.sin(n.waves.A.direction*Math.PI/180),Math.cos(n.waves.A.direction*Math.PI/180),n.waves.A.steepness,n.waves.A.wavelength]},e.uniforms.waveB={value:[Math.sin(n.waves.B.direction*Math.PI/180),Math.cos(n.waves.B.direction*Math.PI/180),n.waves.B.steepness,n.waves.B.wavelength]},e.uniforms.waveC={value:[Math.sin(n.waves.C.direction*Math.PI/180),Math.cos(n.waves.C.direction*Math.PI/180),n.waves.C.steepness,n.waves.C.wavelength]},e.vertexShader=B,e.fragmentShader=L},d(()=>[n.size,n.waterColor],([e,t])=>{c.material.uniforms.size.value=e,c.material.uniforms.waterColor.value.set(t)},{immediate:!0}),d(()=>n.wireframe,e=>{c.material.wireframe=e},{immediate:!0}),d(()=>n.waves,e=>{c.material.uniforms.waveA.value=[Math.sin(e.A.direction*Math.PI/180),Math.cos(e.A.direction*Math.PI/180),e.A.steepness,e.A.wavelength],c.material.uniforms.waveB.value=[Math.sin(e.B.direction*Math.PI/180),Math.cos(e.B.direction*Math.PI/180),e.B.steepness,e.B.wavelength],c.material.uniforms.waveC.value=[Math.sin(e.C.direction*Math.PI/180),Math.cos(e.C.direction*Math.PI/180),e.C.steepness,e.C.wavelength]},{deep:!0});function _(e,t,r){const o=new s.Vector3,i=new s.Vector3(1,0,0),f=new s.Vector3(0,0,1);Object.keys(n.waves).forEach(P=>{const l=n.waves[P],g=Math.PI*2/l.wavelength,z=Math.sqrt(9.8/g),a=new s.Vector2(Math.sin(l.direction*Math.PI/180),-Math.cos(l.direction*Math.PI/180)),u=g*(a.dot(new s.Vector2(e,t))-z*r),x=l.steepness/g;o.x+=a.y*(x*Math.cos(u)),o.y+=x*Math.sin(u),o.z+=a.x*(x*Math.cos(u)),i.x+=-a.x*a.x*(l.steepness*Math.sin(u)),i.y+=a.x*(l.steepness*Math.cos(u)),i.z+=-a.x*a.y*(l.steepness*Math.sin(u)),f.x+=-a.x*a.y*(l.steepness*Math.sin(u)),f.y+=a.y*(l.steepness*Math.cos(u)),f.z+=-a.y*a.y*(l.steepness*Math.sin(u))});const w=f.cross(i).normalize();return{position:o,normal:w}}const v=[];window.globalTvtFun=window.globalTvtFun||{},window.globalTvtFun.gerstnerWater_updateMeshList=(e=!1)=>{!e&&v.length>0&&n.meshUUIDList.forEach(t=>{const r=m.value.getObjectByProperty("uuid",t.uuid);if(r){const o=v.find(i=>i.mesh.uuid===t.uuid);o&&(r.position.copy(o.defaultPosition),r.quaternion.copy(o.defaultQuaternion))}}),v.length=0,n.meshUUIDList.forEach(t=>{const r=m.value.getObjectByProperty("uuid",t.uuid);if(r){let o=1,i=1;t.floatScale!=null&&t.floatScale!==""&&(o=t.floatScale),t.yOffsetScale!=null&&t.yOffsetScale!==""&&(i=t.yOffsetScale),v.push({mesh:r,floatScale:o,yOffsetScale:i,defaultPosition:r.position.clone(),defaultQuaternion:r.quaternion.clone()})}})},d(()=>n.meshUUIDList,()=>{window.globalTvtFun.gerstnerWater_updateMeshList()},{immediate:!0,deep:!0});const C=new s.Vector3(0,1,0),{onBeforeRender:S}=b();return S(()=>{c.material.uniforms.time.value+=.01,v.forEach(e=>{const t=e.mesh,r=e.floatScale,o=_(t.position.x,t.position.z,c.material.uniforms.time.value);t.position.y=o.position.y*e.yOffsetScale;const i=o.normal.clone().normalize(),f=new s.Quaternion().setFromUnitVectors(C,i);if(r!==1){const w=t.quaternion.clone();f.slerp(w,1-r)}t.quaternion.slerp(f,.01*e.floatScale)})}),(e,t)=>(N(),T("TresGroup",null,[E("primitive",{object:A(c),"rotation-x":-Math.PI/2},null,8,V)]))}});export{F as _sfc_main};
