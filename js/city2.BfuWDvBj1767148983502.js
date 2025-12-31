import{importShared as c}from"./3d-tiles-renderer.DZNovkLO1767148983502.js";import{_l as z,NA as N,Kk as j}from"./index.DTe2qqjO1767148983502.js";import{LineSegmentsGeometry as A,LineMaterial as T,LineSegments2 as P}from"./LineSegments2.BWdpcsAi1767148983502.js";import{B as V}from"./three-custom-shader-material.es.DIiohWIA1767148983502.js";import{resetUV as g,initMeshBvh as E,setThreeWater2 as U}from"./utils.DURg_k-q1767148983502.js";import{buildingsCustomShaderMaterial_default as W,buildingsCustomShaderMaterial_default$1 as D}from"./buildingsCustomShaderMaterial.BegDixQI1767148983502.js";import{_sfc_main as $}from"./roadLight.vue_vue_type_script_setup_true_lang.3AVvD8L01767148983502.js";const{ShaderMaterial:F,Clock:L,Uniform:d,Color:b,NormalBlending:ge,AdditiveBlending:R,FrontSide:G,BackSide:pe,DoubleSide:he}=await c("three");class I extends F{constructor(e={}){super(),this.vertexShader=`
      #define STANDARD
      varying vec3 vViewPosition;
      #ifdef USE_TRANSMISSION
      varying vec3 vWorldPosition;
      #endif
    
      varying vec2 vUv;
      varying vec4 vPos;
      varying vec3 vNormalW;
      varying vec3 vPositionW;

      #include <common>
      #include <uv_pars_vertex>
      #include <envmap_pars_vertex>
      #include <color_pars_vertex>
      #include <fog_pars_vertex>
      #include <morphtarget_pars_vertex>
      #include <skinning_pars_vertex>
      #include <logdepthbuf_pars_vertex>
      #include <clipping_planes_pars_vertex>

      void main() {
        
        #include <uv_vertex>
        #include <color_vertex>
        #include <morphcolor_vertex>
      
        #if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
      
          #include <beginnormal_vertex>
          #include <morphnormal_vertex>
          #include <skinbase_vertex>
          #include <skinnormal_vertex>
          #include <defaultnormal_vertex>
      
        #endif
      
        #include <begin_vertex>
        #include <morphtarget_vertex>
        #include <skinning_vertex>
        #include <project_vertex>
        #include <logdepthbuf_vertex>
        #include <clipping_planes_vertex>
      
        #include <worldpos_vertex>
        #include <envmap_vertex>
        #include <fog_vertex>

        mat4 modelViewProjectionMatrix = projectionMatrix * modelViewMatrix;

        vUv = uv;
        vPos = projectionMatrix * modelViewMatrix * vec4( transformed, 1.0 );
        vPositionW = vec3( vec4( transformed, 1.0 ) * modelMatrix);
        vNormalW = normalize( vec3( vec4( normal, 0.0 ) * modelMatrix ) );
        
        gl_Position = modelViewProjectionMatrix * vec4( transformed, 1.0 );

      }`,this.fragmentShader=` 
      varying vec2 vUv;
      varying vec3 vPositionW;
      varying vec4 vPos;
      varying vec3 vNormalW;
      
      uniform float time;
      uniform float fresnelOpacity;
      uniform float scanlineSize;
      uniform float fresnelAmount;
      uniform float signalSpeed;
      uniform float hologramBrightness;
      uniform float hologramOpacity;
      uniform bool blinkFresnelOnly;
      uniform bool enableBlinking;
      uniform vec3 hologramColor;

      float flicker( float amt, float time ) {return clamp( fract( cos( time ) * 43758.5453123 ), amt, 1.0 );}
      float random(in float a, in float b) { return fract((cos(dot(vec2(a,b) ,vec2(12.9898,78.233))) * 43758.5453)); }

      void main() {
        vec2 vCoords = vPos.xy;
        vCoords /= vPos.w;
        vCoords = vCoords * 0.5 + 0.5;
        vec2 myUV = fract( vCoords );

        // Defines hologram main color
        vec4 hologramColor = vec4(hologramColor, mix(hologramBrightness, vUv.y, 0.5));

        // Add scanlines
        float scanlines = 10.;
        scanlines += 20. * sin(time *signalSpeed * 20.8 - myUV.y * 60. * scanlineSize);
        scanlines *= smoothstep(1.3 * cos(time *signalSpeed + myUV.y * scanlineSize), 0.78, 0.9);
        scanlines *= max(0.25, sin(time *signalSpeed) * 1.0);        
        
        // Scanlines offsets
        float r = random(vUv.x, vUv.y);
        float g = random(vUv.y * 20.2, 	vUv.y * .2);
        float b = random(vUv.y * .9, 	vUv.y * .2);

        // Scanline composition
        hologramColor += vec4(r*scanlines, b*scanlines, r, 1.0) / 84.;
        vec4 scanlineMix = mix(vec4(0.0), hologramColor, hologramColor.a);

        // Calculates fresnel
        vec3 viewDirectionW = normalize(cameraPosition - vPositionW);
        float fresnelEffect = dot(viewDirectionW, vNormalW) * (1.6 - fresnelOpacity/2.);
        fresnelEffect = clamp(fresnelAmount - fresnelEffect, 0., fresnelOpacity);

        // Blinkin effect
        //Suggested by Octano - https://x.com/OtanoDesign?s=20
        float blinkValue = enableBlinking ? 0.6 - signalSpeed : 1.0;
        float blink = flicker(blinkValue, time * signalSpeed * .02);
    
        // Final shader composition
        vec3 finalColor;

        if(blinkFresnelOnly){
          // finalColor = vec3(1.0,1.0,0);
          finalColor = scanlineMix.rgb + fresnelEffect * blink;
        }else{
          finalColor = scanlineMix.rgb * blink + fresnelEffect;
        }

        gl_FragColor = vec4( finalColor, hologramOpacity);

      }`,this.uniforms={time:new d(0),fresnelOpacity:new d(e.fresnelOpacity!==void 0?e.fresnelOpacity:1),fresnelAmount:new d(e.fresnelAmount!==void 0?e.fresnelAmount:.45),scanlineSize:new d(e.scanlineSize!==void 0?e.scanlineSize:8),hologramBrightness:new d(e.hologramBrightness!==void 0?e.hologramBrightness:1),signalSpeed:new d(e.signalSpeed!==void 0?e.signalSpeed:1),hologramColor:new d(e.hologramColor!==void 0?new b(e.hologramColor):new b("#00d5ff")),enableBlinking:new d(e.enableBlinking!==void 0?e.enableBlinking:!0),blinkFresnelOnly:new d(e.blinkFresnelOnly!==void 0?e.blinkFresnelOnly:!0),hologramOpacity:new d(e.hologramOpacity!==void 0?e.hologramOpacity:1)},this.clock=new L,this.setValues(e),this.depthTest=e.depthTest!==void 0?e.depthTest:!1,this.blending=e.blendMode!==void 0?e.blendMode:R,this.transparent=!0,this.side=e.side!==void 0?e.side:G}update(){this.uniforms.time.value=this.clock.getElapsedTime()}}const{defineComponent:q}=await c("vue"),{Color:p,DoubleSide:H,AdditiveBlending:K}=await c("three"),J=q({__name:"importantBuildings",props:{group:{}},setup(f){const e=f,n={fresnelAmount:0,fresnelOpacity:0,scanlineSize:15,signalSpeed:1.3,hologramColor:"#e05b0f"},i=new I({blendMode:K,hologramBrightness:2.5,side:H});i.uniforms.fresnelAmount.value=n.fresnelAmount,i.uniforms.scanlineSize.value=n.scanlineSize,i.uniforms.signalSpeed.value=n.signalSpeed,i.uniforms.fresnelOpacity.value=n.fresnelOpacity,i.uniforms.hologramColor.value=new p(n.hologramColor),i.uniforms.enableBlinking.value=!1,i.depthTest=!0;let t,r,a=null;(()=>{const s=e.group.getObjectByName("02-huanqiujinrongzhongxin_huanqiujinrongzhongxin_0");s.name="环球金融中心",s.material.dispose(),g(s.geometry),s.material=i,t=e.group.getObjectByName("01-shanghaizhongxindasha_shanghaizhongxindasha_0"),t.name="上海中心",t.material.dispose(),g(t.geometry),t.material=i.clone(),t.material.uniforms.hologramColor.value=new p("#006cf9"),t.material.uniforms.fresnelAmount.value=1,t.material.uniforms.scanlineSize.value=2.1,t.material.uniforms.signalSpeed.value=.4,r=e.group.getObjectByName("03-jinmaodasha_jjinmaodasha_0"),r.name="金茂大厦",r.material.dispose(),g(r.geometry),r.material=i.clone(),r.material.uniforms.hologramColor.value=new p("#5e0fe0"),r.material.uniforms.scanlineSize.value=15,r.material.uniforms.signalSpeed.value=.18,a=e.group.getObjectByName("04-dongfangmingzhu_dongfangmingzhu_0"),a.name="东方明珠塔",a.material.dispose(),g(a.geometry),a.material=i.clone(),a.material.uniforms.scanlineSize.value=5,a.material.uniforms.signalSpeed.value=1.3,a.material.uniforms.hologramColor.value=new p("#e00f0f"),a.material.uniforms.fresnelOpacity.value=.1})();const{onBeforeRender:o}=z();return o(()=>{i.update(),t.material.update(),r.material.update(),a.material.update()}),(s,u)=>null}}),{defineComponent:Q}=await c("vue"),{openBlock:y,createElementBlock:B,createCommentVNode:k,createBlock:X,Fragment:Y}=await c("vue"),Z=["object"],{ref:O,watch:ee,toRaw:m}=await c("vue"),{Color:h,DoubleSide:ne,EdgesGeometry:oe,MeshStandardMaterial:ie}=await c("three"),le=Q({__name:"buildingsMode",setup(f){E();const{state:e}=N("https://opensource.cdn.icegl.cn/model/digitalCity/shanghaiDraco/shanghaiDraco.gltf",{draco:!0,decoderPath:"./draco/"}),n=O(null);ee(()=>e.value,l=>{l?.scene&&(n.value=l.scene.clone(),n.value.traverse(async o=>{if(o.isMesh&&(o.name.indexOf("Shanghai")!==-1||o.name.indexOf("Object")!==-1)&&o.name.indexOf("Floor")===-1)if(o.name.indexOf("River")!==-1){const s=await U(m(o));s.position.set(0,0,1800),o.add(s)}else t(m(o)),r(m(o))}))});const i=O(0),t=l=>{const{geometry:o}=l;o.computeBoundingBox(),o.computeBoundingSphere(),o.computeBoundsTree();const{max:s,min:u}=o.boundingBox,v=new V({baseMaterial:ie,vertexShader:D,fragmentShader:W,silent:!0,uniforms:{uMax:{value:s},uMin:{value:u},uBorderWidth:{value:.006},uCircleTime:{value:3},uColor:{value:new h("#005c58")},uOpacity:{value:.8},uLightColor:{value:new h("#990")},uTopColor:{value:new h("#888800")},uTime:i,uGradient:{value:!0}},depthWrite:!0,depthTest:!0,transparent:!0,side:ne});l.material.dispose(),l.material=v},r=l=>{const o=new oe(l.geometry,1e3);let u=new A().fromEdgesGeometry(o);u.computeBoundsTree();let v=new T({color:new h("#000"),linewidth:.8,opacity:.6,transparent:!0,depthWrite:!0,depthTest:!0});v.resolution.set(window.innerWidth,window.innerHeight),l.add(new P(u,v))},{onBeforeRender:a}=z();return a(({delta:l})=>{i.value+=l}),(l,o)=>(y(),B(Y,null,[n.value?(y(),B("primitive",{key:0,object:m(n.value),position:[1,0,1]},null,8,Z)):k("",!0),n.value?(y(),X(J,{key:1,group:m(n.value)},null,8,["group"])):k("",!0)],64))}}),{defineComponent:te}=await c("vue"),{createElementVNode:_,unref:ae,createVNode:x,Suspense:M,withCtx:S,openBlock:w,createBlock:C,resolveComponent:re}=await c("vue"),_e=te({__name:"city2",setup(f){return(e,n)=>{const i=re("TresCanvas");return w(),C(i,{shadows:"","window-size":"",clearColor:"#333"},{default:S(()=>[n[0]||(n[0]=_("TresPerspectiveCamera",{position:[.5,2,1.5],fov:45,near:.1,far:1e5},null,-1)),x(ae(j)),n[1]||(n[1]=_("TresAmbientLight",{color:"#ffffff"},null,-1)),n[2]||(n[2]=_("TresDirectionalLight",{position:[0,3,3],intensity:2,color:"#ffffff","cast-shadow":"","shadow-mapSize-width":1024,"shadow-mapSize-height":1024},null,-1)),(w(),C(M,null,{default:S(()=>[x(le)]),_:1})),(w(),C(M,null,{default:S(()=>[x($,{color:"#ffffff",radius:1,speed:1,geoJson:"plugins/digitalCity/geojson/secondarySmall.geojson","rotation-y":1.3826597599330712,scale:.001025905404044292,position:[-1.877460474821603,.01,-1.5464791950519081]})]),_:1})),n[3]||(n[3]=_("TresGridHelper",{args:[6,10],position:[0,0,0]},null,-1))]),_:1})}}});export{_e as default};
