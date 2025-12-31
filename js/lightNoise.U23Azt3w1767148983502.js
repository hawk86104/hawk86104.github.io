import{importShared as a}from"./3d-tiles-renderer.DZNovkLO1767148983502.js";import{_l as F,Fs as R,_export_sfc as G,Kk as A}from"./index.DTe2qqjO1767148983502.js";import{EffectComposer as S,RenderPass as H,ShaderPass as I}from"./RenderPass.DewL5X8q1767148983502.js";import{UnrealBloomPass as L}from"./UnrealBloomPass.Ct_StmlH1767148983502.js";var C=`float N21(vec2 st){
	return fract(sin(dot(st.xy,vec2(12.9898,78.233)))*43758.5453123);
}
float smoothNoise(vec2 ip){
	vec2 lv=fract(ip);
	vec2 id=floor(ip);
	
	lv=lv*lv*(3.-2.*lv);
	
	float bl=N21(id);
	float br=N21(id+vec2(1,0));
	float b=mix(bl,br,lv.x);
	
	float tl=N21(id+vec2(0,1));
	float tr=N21(id+vec2(1,1));
	float t=mix(tl,tr,lv.x);
	
	return clamp(mix(b,t,lv.y)*.5+.5,0.,1.);
}
float smoothNoise2(vec2 p){
	p.y+=time;
	p/=4.;
	
	float n=smoothNoise(p)*1.5;
	n+=smoothNoise(p*2.01)*.25;
	n+=smoothNoise(p*4.02)*.125;
	n+=smoothNoise(p*8.03)*.0625;
	n/=(1.5+.25+.125+.0625);
	return clamp(n,0.,1.);
}`;const{defineComponent:W}=await a("vue"),{unref:T,createElementVNode:B,Fragment:j,openBlock:X,createElementBlock:K}=await a("vue"),Y=["geometry","material"],q=["material"],J=["rotateX"],m=await a("three"),w=100,O=W({__name:"lucesPlane",props:{globalUniforms:{}},setup(p){const e=p,r=[],l=[],o=new m.SphereGeometry(1,36,18),u=new m.InstancedBufferGeometry().copy(o);u.instanceCount=w;const n=[];for(let t=0;t<w;t++){let s=m.MathUtils.randFloatSpread(49),c=m.MathUtils.randFloatSpread(49),d=m.MathUtils.randFloat(.0625,.125),x=m.MathUtils.randFloat(1,3);n.push(s,c,d),l.push(new m.Vector4(s,c,x,m.MathUtils.randFloat(1,2))),r.push(new m.Vector4(s,c,d,x))}u.setAttribute("instData",new m.InstancedBufferAttribute(new Float32Array(n),3));const _=new m.MeshBasicMaterial({color:16720418,onBeforeCompile:t=>{t.uniforms.noiseTex=e.globalUniforms.noise,t.vertexShader=`
      uniform sampler2D noiseTex;
      attribute vec4 instData;
      ${t.vertexShader}
    `.replace("#include <begin_vertex>",`#include <begin_vertex>
      transformed = position * instData.z;
      
      transformed.x += instData.x;
      transformed.z += instData.y;
      vec2 nUv = (vec2(instData.x, -instData.y) - vec2(-25.)) / 50.;
      float h = texture2D(noiseTex, nUv).g;
      h = (h - 0.5) * 4.;
      transformed.y += h;
      `)}}),b={luces:{value:r}},f=new m.MeshLambertMaterial({color:2363940,onBeforeCompile:t=>{t.uniforms.luces=b.luces,t.uniforms.globalBloom=e.globalUniforms.globalBloom,t.uniforms.noiseTex=e.globalUniforms.noise,t.vertexShader=`
      uniform float time;
      uniform sampler2D noiseTex;
      varying vec3 vPos;
      varying float intensity;
      
      //// https://discourse.threejs.org/t/calculating-vertex-normals-after-displacement-in-the-vertex-shader/16989/8 ///
      
      // the function which defines the displacement
      float displace(vec2 vUv) {
        return (texture2D(noiseTex, vUv).g - 0.5) * 4.;
      }

      vec3 getNormal(vec2 vUv){
        vec3 displacedPosition = position + normal * displace(vUv);

        float texelSize = 1.0 / 512.0; // temporarily hardcoding texture resolution
        float offset = 0.1;

        vec3 neighbour1 = position + vec3(1., 0., 0.) * offset;
        vec3 neighbour2 = position + vec3(0., 0., 1.) * offset;
        vec2 neighbour1uv = vUv + vec2(-texelSize, 0);
        vec2 neighbour2uv = vUv  + vec2(0, -texelSize);
        vec3 displacedNeighbour1 = neighbour1 + normal * displace(neighbour1uv);
        vec3 displacedNeighbour2 = neighbour2 + normal * displace(neighbour2uv);

        // https://i.ya-webdesign.com/images/vector-normals-tangent-16.png
        vec3 displacedTangent = displacedNeighbour1 - displacedPosition;
        vec3 displacedBitangent = displacedNeighbour2 - displacedPosition;

        // https://upload.wikimedia.org/wikipedia/commons/d/d2/Right_hand_rule_cross_product.svg
        vec3 displacedNormal = normalize(cross(displacedBitangent, displacedTangent));
        return displacedNormal;
      }
      
      ${t.vertexShader}
    `.replace("#include <begin_vertex>",`#include <begin_vertex>

        float h = texture2D(noiseTex, uv).g;
        intensity = h;
        h = (h - 0.5) * 4.;
        transformed.y = h;
        vPos = transformed;
        transformedNormal = normalMatrix * getNormal(uv);
      `),t.fragmentShader=`
      uniform vec4 luces[${w}];
      uniform sampler2D noiseTex;
      uniform float globalBloom;
      varying vec3 vPos;
      varying float intensity;

      ${t.fragmentShader}
    `.replace("#include <fog_fragment>",`
        vec3 col = vec3(1, 0, 0)*0.75;
        float intensity = 0.;
        for(int i = 0;i < ${w}; i++){
          vec4 lux = luces[i];
          vec2 luxUv = (vec2(lux.x, -lux.y) - vec2(-25.)) / 50.;
          float h = texture2D(noiseTex, luxUv).g;
          h = (h - 0.5) * 4.;
          vec3 lightPos = vec3(lux.x, h, lux.y);
          float currIntensity = smoothstep(lux.z + lux.w, lux.z, distance(vPos, lightPos));
          intensity += pow(currIntensity, 16.);
        }
        intensity = clamp(intensity, 0., 1.);
        col = mix(col * 0.5, col, intensity);
        col = mix(gl_FragColor.rgb, col, intensity);
        col += vec3(1) * intensity * 0.01;
        gl_FragColor = vec4( col, opacity );
        #include <fog_fragment>
      `).replace("#include <dithering_fragment>",`#include <dithering_fragment>
        if (globalBloom > 0.5) {
          gl_FragColor = vec4(0);
        }
      `)}}),{onBeforeRender:i}=F();return i(({elapsed:t})=>{for(let s=0;s<w;s++){const c=l[s];let d=(c.y+t+25)%50-25;r[s].y=d,r[s].w=(Math.sin(t*c.w*(s%3+1))*Math.cos(t*c.w*(s%5+1))*.25+.25)*c.z+c.z*.75,u.attributes.instData.setY(s,d)}u.attributes.instData.needsUpdate=!0}),(t,s)=>(X(),K(j,null,[B("TresMesh",{geometry:T(u),material:T(_)},null,8,Y),B("TresMesh",{material:T(f)},[B("TresPlaneGeometry",{args:[50,50,500,500],rotateX:-Math.PI*.5},null,8,J)],8,q)],64))}}),{defineComponent:Q}=await a("vue"),{unref:Z,createElementVNode:ee,openBlock:te,createElementBlock:oe}=await a("vue"),ne=["material"],ae=await a("three"),re=Q({__name:"portal",props:{globalUniforms:{}},setup(p){const e=p,r=new ae.MeshBasicMaterial({color:16737843,transparent:!0,onBeforeCompile:l=>{l.uniforms.time=e.globalUniforms.time,l.uniforms.globalBloom=e.globalUniforms.globalBloom,l.fragmentShader=`
      #define S(a, b, t) smoothstep(a, b, t)
      uniform float time;
      uniform float globalBloom;
      
      ${C}
      
      float getTri(vec2 uv, float shift){
        uv = uv * 2.-1.;
        float a = atan(uv.x + shift,uv.y) + 3.1415926;
        float r = 3.1415926 * 2./3.;
        return cos(floor(.5+a/r)*r-a)*length(uv);
      }
      
      float doubleTri(vec2 uv, float still, float width){
        vec2 baseUv = uv;
        vec2 e2 = fwidth(baseUv * 20.);
        float e = min(e2.x, e2.y) * width;
        float baseTri = getTri(baseUv, cos(baseUv.y * 31. + time) * sin(baseUv.y * 27. + time * 4.) * 0.025 * still);
        float td = abs(fract(baseTri * 20.) - 0.5);
        float tri = S(e, 0., td) - S(0., e, td);
        tri *= step(0.4, baseTri) -  step(0.5, baseTri);
        return tri;
      }
      
      ${l.fragmentShader}
    `.replace("vec4 diffuseColor = vec4( diffuse, opacity );",`
        float tri = doubleTri(vUv, 0.0, 16.);
        float triWave = doubleTri(vUv, 1.0, 8.);
        float fullTri = max(tri, triWave);
        
        if (fullTri < 0.5) discard;
        
        vec3 col = mix(diffuse, vec3(0.75), fullTri);
        
        float blinking = smoothNoise(vec2(time, time * 5.));
        blinking = blinking * 0.9 + 0.1;
        
        vec4 diffuseColor = vec4(col * blinking, fullTri);
      `).replace("#include <dithering_fragment>",`#include <dithering_fragment>
        if (globalBloom > 0.5) {
          gl_FragColor = vec4(gl_FragColor.rgb * 0.375, fullTri);
        }
      `)}});return r.defines={USE_UV:""},(l,o)=>(te(),oe("TresMesh",{material:Z(r),position:[0,1.25+2.5,-12]},[...o[0]||(o[0]=[ee("TresPlaneGeometry",{args:[5,5]},null,-1)])],8,ne))}}),{defineComponent:le}=await a("vue"),{unref:N,openBlock:ie,createElementBlock:se}=await a("vue"),ce=["material","geometry"],h=await a("three"),me=2e4,ue=le({__name:"drops",props:{globalUniforms:{}},setup(p){const e=p,r=[],l=[];for(let n=0;n<me;n++){const _=h.MathUtils.randFloatSpread(35),b=h.MathUtils.randFloat(-5,10),f=h.MathUtils.randFloatSpread(35),i=h.MathUtils.randFloat(.25,.5);r.push(_,b,f,_,b,f),l.push(0,i,1,i)}const o=new h.BufferGeometry;o.setAttribute("position",new h.Float32BufferAttribute(r,3)),o.setAttribute("gEnds",new h.Float32BufferAttribute(l,2));const u=new h.LineBasicMaterial({color:8930440,transparent:!0,onBeforeCompile:n=>{n.uniforms.time=e.globalUniforms.time,n.uniforms.noiseTex=e.globalUniforms.noise,n.uniforms.globalBloom=e.globalUniforms.globalBloom,n.vertexShader=`
      uniform float time;
      uniform sampler2D noiseTex;
      attribute vec2 gEnds;
      varying float vGEnds;
      varying float vH;

      ${n.vertexShader}
    `.replace("#include <begin_vertex>",`#include <begin_vertex>
        
      vec3 pos = position;
      
      vec2 nUv = (vec2(pos.x, -pos.z) - vec2(-25.)) / 50.;
      float h = texture2D(noiseTex, nUv).g;
      h = (h - 0.5) * 4.;
      
      pos.y = -mod(10. - (pos.y - time * 5.), 15.) + 10.;
      h = pos.y - h;
      pos.y += gEnds.x * gEnds.y;
      transformed = pos;
      vGEnds = gEnds.x;
      vH = smoothstep(3., 0., h);
      `),n.fragmentShader=`
      uniform float time;
      uniform float globalBloom;
      varying float vGEnds;
      varying float vH;
      ${C}
      ${n.fragmentShader}
    `.replace("vec4 diffuseColor = vec4( diffuse, opacity );",`
      float op = 1. - vGEnds;
      op = pow(op, 3.);
      float h = (pow(vH, 3.) * 0.5 + 0.5);
      vec3 col = diffuse * h; // lighter close to the surface
      col *= 1. + smoothstep(0.99, 1., h); // sparkle at the surface
      if (globalBloom > 0.5) {
        //col *= 0.5;
      }
      vec4 diffuseColor = vec4( col, op );
      
      `)}});return(n,_)=>(ie(),se("TresLineSegments",{material:N(u),geometry:N(o)},null,8,ce))}}),{defineComponent:fe}=await a("vue"),{createVNode:U,Fragment:ve,openBlock:de,createElementBlock:pe}=await a("vue"),v=await a("three"),{watch:ge}=await a("vue"),he=fe({__name:"fboRender",setup(p){const e={time:{value:0},globalBloom:{value:0},noise:{value:null}},r=new v.WebGLRenderTarget(512,512),l=new v.Scene,o=new v.Camera,u=new v.PlaneGeometry(2,2),n=new v.MeshBasicMaterial({onBeforeCompile:g=>{g.uniforms.time=e.time,g.fragmentShader=`
      uniform float time;
      ${C}
      ${g.fragmentShader}
    `.replace("vec4 diffuseColor = vec4( diffuse, opacity );",`
        vec3 col = vec3(0);
        float h = clamp(smoothNoise2(vUv * 50.), 0., 1.);
        col = vec3(h);
        vec4 diffuseColor = vec4( col, opacity );
      `)}});n.defines={USE_UV:""};const _=new v.Mesh(u,n);l.add(_),e.noise.value=r.texture;const{camera:b,renderer:f,scene:i,sizes:t,controls:s}=R();ge(()=>s.value,g=>{g?.target.set(0,2,0),i.value.background||(i.value.background=new v.Color(6706534))});const c=new S(f),d=new S(f),x=new H(i.value,b.value),V=new L(new v.Vector2(t.width.value,t.height.value),1.2,.5,0);c.renderToScreen=!1,c.addPass(x),c.addPass(V);const E=new I(new v.ShaderMaterial({uniforms:{baseTexture:{value:null},bloomTexture:{value:c.renderTarget2.texture}},vertexShader:`
								varying vec2 vUv;
								void main() {
									vUv = uv;
									gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
								}`,fragmentShader:`
								uniform sampler2D baseTexture;
								uniform sampler2D bloomTexture;
								varying vec2 vUv;
								void main() {
									gl_FragColor = ( texture2D( baseTexture, vUv ) + vec4( 1.0 ) * texture2D( bloomTexture, vUv ) );
								}`,defines:{}}),"baseTexture");E.needsSwap=!0,d.addPass(x),d.addPass(E),i.value.fog=new v.Fog(6706534,1,25);const{onBeforeRender:z}=F();return z(({elapsed:g})=>{e.time.value=g,f&&(f.setRenderTarget(r),f.render(l,o),f.setRenderTarget(null),e.globalBloom.value=1.2,i.value.fog.color.set(0),i.value.fog.near=15,i.value.background?.set(0),c.render(),e.globalBloom.value=0,i.value.fog.color.set(6706534),i.value.fog.near=10,i.value.background?.set(6706534),d.render())}),(g,Me)=>(de(),pe(ve,null,[U(O,{globalUniforms:e}),U(re,{globalUniforms:e}),U(ue,{globalUniforms:e})],64))}}),_e={},{createElementVNode:k,createTextVNode:be,openBlock:xe,createElementBlock:we}=await a("vue"),ye={class:"text"};function Te(p,e){return xe(),we("div",ye,[...e[0]||(e[0]=[k("span",{class:"retro noselect"},[k("span",{style:{color:"#eae"}},"光"),be("噪声")],-1)])])}const Be=G(_e,[["render",Te],["__scopeId","data-v-3881bd43"]]),{defineComponent:Ue}=await a("vue"),{createVNode:y,createElementVNode:$,unref:$e,normalizeProps:M,guardReactiveProps:P,resolveComponent:Ce,withCtx:Ee,Fragment:Se,openBlock:Ne,createElementBlock:ke}=await a("vue"),D=await a("three"),ze=Ue({__name:"lightNoise",setup(p){const e={windowSize:!0,antialias:!0,renderMode:"manual"},r={enableDamping:!0,minDistance:5,maxDistance:10,minPolarAngle:D.MathUtils.DEG2RAD*60,maxPolarAngle:D.MathUtils.DEG2RAD*90,makeDefault:!0};return(l,o)=>{const u=Ce("TresCanvas");return Ne(),ke(Se,null,[y(Be),y(u,M(P(e)),{default:Ee(()=>[o[0]||(o[0]=$("TresPerspectiveCamera",{position:[0,3,5],fov:45,near:.1,far:1e3},null,-1)),y($e(A),M(P(r)),null,16),o[1]||(o[1]=$("TresAmbientLight",{intensity:.5},null,-1)),o[2]||(o[2]=$("TresDirectionalLight",{position:[0,3,-12],intensity:1},null,-1)),y(he)]),_:1},16)],64)}}});export{ze as default};
