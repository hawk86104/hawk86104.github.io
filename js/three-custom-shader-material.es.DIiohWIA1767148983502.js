import{importShared as P}from"./3d-tiles-renderer.DZNovkLO1767148983502.js";const T=await P("three"),D=`
    
#ifdef IS_VERTEX
    vec3 csm_Position;
    vec4 csm_PositionRaw;
    vec3 csm_Normal;

    // csm_PointSize
    #ifdef IS_POINTSMATERIAL
        float csm_PointSize;
    #endif
#else
    vec4 csm_DiffuseColor;
    vec4 csm_FragColor;
    float csm_UnlitFac;

    // csm_Emissive, csm_Roughness, csm_Metalness
    #if defined IS_MESHSTANDARDMATERIAL || defined IS_MESHPHYSICALMATERIAL
        vec3 csm_Emissive;
        float csm_Roughness;
        float csm_Metalness;
        float csm_Iridescence;
        
        #if defined IS_MESHPHYSICALMATERIAL
            float csm_Clearcoat;
            float csm_ClearcoatRoughness;
            vec3 csm_ClearcoatNormal;
            float csm_Transmission;
            float csm_Thickness;
        #endif
    #endif

    // csm_AO
    #if defined IS_MESHSTANDARDMATERIAL || defined IS_MESHPHYSICALMATERIAL || defined IS_MESHBASICMATERIAL || defined IS_MESHLAMBERTMATERIAL || defined IS_MESHPHONGMATERIAL || defined IS_MESHTOONMATERIAL
        float csm_AO;
    #endif

    // csm_Bump
    #if defined IS_MESHLAMBERTMATERIAL || defined IS_MESHMATCAPMATERIAL || defined IS_MESHNORMALMATERIAL || defined IS_MESHPHONGMATERIAL || defined IS_MESHPHYSICALMATERIAL || defined IS_MESHSTANDARDMATERIAL || defined IS_MESHTOONMATERIAL || defined IS_SHADOWMATERIAL 
        vec3 csm_Bump;
        vec3 csm_FragNormal;
    #endif

    float csm_DepthAlpha;
#endif
`,H=`

#ifdef IS_VERTEX
    // csm_Position & csm_PositionRaw
    #ifdef IS_UNKNOWN
        csm_Position = vec3(0.0);
        csm_PositionRaw = vec4(0.0);
        csm_Normal = vec3(0.0);
    #else
        csm_Position = position;
        csm_PositionRaw = projectionMatrix * modelViewMatrix * vec4(position, 1.);
        csm_Normal = normal;
    #endif

    // csm_PointSize
    #ifdef IS_POINTSMATERIAL
        csm_PointSize = size;
    #endif
#else
    csm_UnlitFac = 0.0;

    // csm_DiffuseColor & csm_FragColor
    #if defined IS_UNKNOWN || defined IS_SHADERMATERIAL || defined IS_MESHDEPTHMATERIAL || defined IS_MESHDISTANCEMATERIAL || defined IS_MESHNORMALMATERIAL || defined IS_SHADOWMATERIAL
        csm_DiffuseColor = vec4(1.0, 0.0, 1.0, 1.0);
        csm_FragColor = vec4(1.0, 0.0, 1.0, 1.0);
    #else
        #ifdef USE_MAP
            vec4 _csm_sampledDiffuseColor = texture2D(map, vMapUv);

            #ifdef DECODE_VIDEO_TEXTURE
            // inline sRGB decode (TODO: Remove this code when https://crbug.com/1256340 is solved)
            _csm_sampledDiffuseColor = vec4(mix(pow(_csm_sampledDiffuseColor.rgb * 0.9478672986 + vec3(0.0521327014), vec3(2.4)), _csm_sampledDiffuseColor.rgb * 0.0773993808, vec3(lessThanEqual(_csm_sampledDiffuseColor.rgb, vec3(0.04045)))), _csm_sampledDiffuseColor.w);
            #endif

            csm_DiffuseColor = vec4(diffuse, opacity) * _csm_sampledDiffuseColor;
            csm_FragColor = vec4(diffuse, opacity) * _csm_sampledDiffuseColor;
        #else
            csm_DiffuseColor = vec4(diffuse, opacity);
            csm_FragColor = vec4(diffuse, opacity);
        #endif
    #endif

    // csm_Emissive, csm_Roughness, csm_Metalness
    #if defined IS_MESHSTANDARDMATERIAL || defined IS_MESHPHYSICALMATERIAL
        csm_Emissive = emissive;
        csm_Roughness = roughness;
        csm_Metalness = metalness;

        #ifdef USE_IRIDESCENCE
            csm_Iridescence = iridescence;
        #else
            csm_Iridescence = 0.0;
        #endif

        #if defined IS_MESHPHYSICALMATERIAL
            #ifdef USE_CLEARCOAT
                csm_Clearcoat = clearcoat;
                csm_ClearcoatRoughness = clearcoatRoughness;
            #else
                csm_Clearcoat = 0.0;
                csm_ClearcoatRoughness = 0.0;
            #endif

            #ifdef USE_TRANSMISSION
                csm_Transmission = transmission;
                csm_Thickness = thickness;
            #else
                csm_Transmission = 0.0;
                csm_Thickness = 0.0;
            #endif
        #endif
    #endif

    // csm_AO
    #if defined IS_MESHSTANDARDMATERIAL || defined IS_MESHPHYSICALMATERIAL || defined IS_MESHBASICMATERIAL || defined IS_MESHLAMBERTMATERIAL || defined IS_MESHPHONGMATERIAL || defined IS_MESHTOONMATERIAL
        csm_AO = 0.0;
    #endif

    // csm_Bump
    #if defined IS_MESHLAMBERTMATERIAL || defined IS_MESHMATCAPMATERIAL || defined IS_MESHNORMALMATERIAL || defined IS_MESHPHONGMATERIAL || defined IS_MESHPHYSICALMATERIAL || defined IS_MESHSTANDARDMATERIAL || defined IS_MESHTOONMATERIAL || defined IS_SHADOWMATERIAL 
        csm_Bump = vec3(0.0);
        #ifdef FLAT_SHADED
            vec3 fdx = dFdx( vViewPosition );
            vec3 fdy = dFdy( vViewPosition );
            csm_FragNormal = normalize( cross( fdx, fdy ) );
        #else
            csm_FragNormal = normalize(vNormal);
            #ifdef DOUBLE_SIDED
                csm_FragNormal *= gl_FrontFacing ? 1.0 : - 1.0;
            #endif
        #endif
    #endif

    csm_DepthAlpha = 1.0;
#endif
`,y=`
    varying mat4 csm_internal_vModelViewMatrix;
`,O=`
    csm_internal_vModelViewMatrix = modelViewMatrix;
`,b=`
    varying mat4 csm_internal_vModelViewMatrix;
`,x=`
    
`,e={diffuse:"csm_DiffuseColor",roughness:"csm_Roughness",metalness:"csm_Metalness",emissive:"csm_Emissive",ao:"csm_AO",bump:"csm_Bump",fragNormal:"csm_FragNormal",clearcoat:"csm_Clearcoat",clearcoatRoughness:"csm_ClearcoatRoughness",clearcoatNormal:"csm_ClearcoatNormal",transmission:"csm_Transmission",thickness:"csm_Thickness",iridescence:"csm_Iridescence",pointSize:"csm_PointSize",fragColor:"csm_FragColor",depthAlpha:"csm_DepthAlpha",unlitFac:"csm_UnlitFac",position:"csm_Position",positionRaw:"csm_PositionRaw",normal:"csm_Normal"},F={[`${e.position}`]:"*",[`${e.positionRaw}`]:"*",[`${e.normal}`]:"*",[`${e.depthAlpha}`]:"*",[`${e.pointSize}`]:["PointsMaterial"],[`${e.diffuse}`]:"*",[`${e.fragColor}`]:"*",[`${e.fragNormal}`]:"*",[`${e.unlitFac}`]:"*",[`${e.emissive}`]:["MeshStandardMaterial","MeshPhysicalMaterial"],[`${e.roughness}`]:["MeshStandardMaterial","MeshPhysicalMaterial"],[`${e.metalness}`]:["MeshStandardMaterial","MeshPhysicalMaterial"],[`${e.iridescence}`]:["MeshStandardMaterial","MeshPhysicalMaterial"],[`${e.ao}`]:["MeshStandardMaterial","MeshPhysicalMaterial","MeshBasicMaterial","MeshLambertMaterial","MeshPhongMaterial","MeshToonMaterial"],[`${e.bump}`]:["MeshLambertMaterial","MeshMatcapMaterial","MeshNormalMaterial","MeshPhongMaterial","MeshPhysicalMaterial","MeshStandardMaterial","MeshToonMaterial","ShadowMaterial"],[`${e.clearcoat}`]:["MeshPhysicalMaterial"],[`${e.clearcoatRoughness}`]:["MeshPhysicalMaterial"],[`${e.clearcoatNormal}`]:["MeshPhysicalMaterial"],[`${e.transmission}`]:["MeshPhysicalMaterial"],[`${e.thickness}`]:["MeshPhysicalMaterial"]},w={"*":{"#include <lights_physical_fragment>":T.ShaderChunk.lights_physical_fragment,"#include <transmission_fragment>":T.ShaderChunk.transmission_fragment},[`${e.normal}`]:{"#include <beginnormal_vertex>":`
    vec3 objectNormal = ${e.normal};
    #ifdef USE_TANGENT
	    vec3 objectTangent = vec3( tangent.xyz );
    #endif
    `},[`${e.position}`]:{"#include <begin_vertex>":`
    vec3 transformed = ${e.position};
  `},[`${e.positionRaw}`]:{"#include <project_vertex>":`
    #include <project_vertex>
    gl_Position = ${e.positionRaw};
  `},[`${e.pointSize}`]:{"gl_PointSize = size;":`
    gl_PointSize = ${e.pointSize};
    `},[`${e.diffuse}`]:{"#include <color_fragment>":`
    #include <color_fragment>
    diffuseColor = ${e.diffuse};
  `},[`${e.fragColor}`]:{"#include <opaque_fragment>":`
    #include <opaque_fragment>
    gl_FragColor = mix(gl_FragColor, ${e.fragColor}, ${e.unlitFac});
  `},[`${e.emissive}`]:{"vec3 totalEmissiveRadiance = emissive;":`
    vec3 totalEmissiveRadiance = ${e.emissive};
    `},[`${e.roughness}`]:{"#include <roughnessmap_fragment>":`
    #include <roughnessmap_fragment>
    roughnessFactor = ${e.roughness};
    `},[`${e.metalness}`]:{"#include <metalnessmap_fragment>":`
    #include <metalnessmap_fragment>
    metalnessFactor = ${e.metalness};
    `},[`${e.ao}`]:{"#include <aomap_fragment>":`
    #include <aomap_fragment>
    reflectedLight.indirectDiffuse *= 1. - ${e.ao};
    `},[`${e.bump}`]:{"#include <normal_fragment_maps>":`
    #include <normal_fragment_maps>

    vec3 csm_internal_orthogonal = ${e.bump} - (dot(${e.bump}, normal) * normal);
    vec3 csm_internal_projectedbump = mat3(csm_internal_vModelViewMatrix) * csm_internal_orthogonal;
    normal = normalize(normal - csm_internal_projectedbump);
    `},[`${e.fragNormal}`]:{"#include <normal_fragment_maps>":`
      #include <normal_fragment_maps>
      normal = ${e.fragNormal};
    `},[`${e.depthAlpha}`]:{"gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );":`
      gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity * 1.0 - ${e.depthAlpha} );
    `,"gl_FragColor = packDepthToRGBA( fragCoordZ );":`
      if(${e.depthAlpha} < 1.0) discard;
      gl_FragColor = packDepthToRGBA( dist );
    `,"gl_FragColor = packDepthToRGBA( dist );":`
      if(${e.depthAlpha} < 1.0) discard;
      gl_FragColor = packDepthToRGBA( dist );
    `},[`${e.clearcoat}`]:{"material.clearcoat = clearcoat;":`material.clearcoat = ${e.clearcoat};`},[`${e.clearcoatRoughness}`]:{"material.clearcoatRoughness = clearcoatRoughness;":`material.clearcoatRoughness = ${e.clearcoatRoughness};`},[`${e.clearcoatNormal}`]:{"#include <clearcoat_normal_fragment_begin>":`
      vec3 csm_coat_internal_orthogonal = csm_ClearcoatNormal - (dot(csm_ClearcoatNormal, nonPerturbedNormal) * nonPerturbedNormal);
      vec3 csm_coat_internal_projectedbump = mat3(csm_internal_vModelViewMatrix) * csm_coat_internal_orthogonal;
      vec3 clearcoatNormal = normalize(nonPerturbedNormal - csm_coat_internal_projectedbump);
    `},[`${e.transmission}`]:{"material.transmission = transmission;":`
      material.transmission = ${e.transmission};
    `},[`${e.thickness}`]:{"material.thickness = thickness;":`
      material.thickness = ${e.thickness};
    `},[`${e.iridescence}`]:{"material.iridescence = iridescence;":`
      material.iridescence = ${e.iridescence};
    `}},k={clearcoat:[e.clearcoat,e.clearcoatNormal,e.clearcoatRoughness],transmission:[e.transmission],iridescence:[e.iridescence]};function z(S){let i=0;for(let l=0;l<S.length;l++)i=S.charCodeAt(l)+(i<<6)+(i<<16)-i;const _=i>>>0;return String(_)}function B(S){try{new S}catch(i){if(i.message.indexOf("is not a constructor")>=0)return!1}return!0}function L(S){return S.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g,"")}class j extends T.Material{constructor({baseMaterial:i,vertexShader:_,fragmentShader:l,uniforms:p,patchMap:v,cacheKey:f,...m}){if(!i)throw new Error("CustomShaderMaterial: baseMaterial is required.");let s;if(B(i)){const a=Object.keys(m).length===0;s=new i(a?void 0:m)}else s=i,Object.assign(s,m);if(["ShaderMaterial","RawShaderMaterial"].includes(s.type))throw new Error(`CustomShaderMaterial does not support ${s.type} as a base material.`);super(),this.uniforms={},this.vertexShader="",this.fragmentShader="";const o=s;o.name=`CustomShaderMaterial<${s.name||s.type}>`,o.update=this.update,o.__csm={prevOnBeforeCompile:s.onBeforeCompile,baseMaterial:s,vertexShader:_,fragmentShader:l,uniforms:p,patchMap:v,cacheKey:f};const R={...o.uniforms||{},...p||{}};o.uniforms=this.uniforms=R,o.vertexShader=this.vertexShader=_||"",o.fragmentShader=this.fragmentShader=l||"",o.update({fragmentShader:o.fragmentShader,vertexShader:o.vertexShader,uniforms:o.uniforms,patchMap:v,cacheKey:f}),Object.assign(this,o);const g=Object.getOwnPropertyDescriptors(Object.getPrototypeOf(o));for(const a in g){const r=g[a];(r.get||r.set)&&Object.defineProperty(this,a,r)}return Object.defineProperty(this,"type",{get(){return s.type},set(a){s.type=a}}),this}update({fragmentShader:i,vertexShader:_,uniforms:l,cacheKey:p,patchMap:v}){const f=L(_||""),m=L(i||""),s=this;l&&(s.uniforms=l),_&&(s.vertexShader=_),i&&(s.fragmentShader=i),Object.entries(k).forEach(([a,r])=>{for(const M in r){const t=r[M];(m&&m.includes(t)||f&&f.includes(t))&&(s[a]||(s[a]=1))}});const o=s.__csm.prevOnBeforeCompile,R=(a,r,M)=>{let t,u="";if(r){const n=r.search(/void\s+main\s*\(\s*\)\s*{/);if(n!==-1){u=r.slice(0,n);let h=0,c=-1;for(let d=n;d<r.length;d++)if(r[d]==="{"&&h++,r[d]==="}"&&(h--,h===0)){c=d;break}if(c!==-1){const d=r.slice(n,c+1);t=d.slice(d.indexOf("{")+1,-1)}}else u=r}if(M&&r&&r.includes(e.fragColor)&&t&&(t=`csm_UnlitFac = 1.0;
`+t),a.includes("//~CSM_DEFAULTS")){a=a.replace("void main() {",`
          // THREE-CustomShaderMaterial by Faraz Shaikh: https://github.com/FarazzShaikh/THREE-CustomShaderMaterial
  
          ${u}
          
          void main() {
          `);const n=a.lastIndexOf("//~CSM_MAIN_END");if(n!==-1){const h=`
            ${t?`${t}`:""}
            //~CSM_MAIN_END
          `;a=a.slice(0,n)+h+a.slice(n)}}else{const n=/void\s*main\s*\(\s*\)\s*{/gm;a=a.replace(n,`
          // THREE-CustomShaderMaterial by Faraz Shaikh: https://github.com/FarazzShaikh/THREE-CustomShaderMaterial
  
          //~CSM_DEFAULTS
          ${M?b:y}
          ${D}
  
          ${u}
          
          void main() {
            {
              ${H}
            }
            ${M?x:O}

            ${t?`${t}`:""}
            //~CSM_MAIN_END
          `)}return a};s.onBeforeCompile=(a,r)=>{o?.(a,r);const M=v||{},t=s.type,u=t?`#define IS_${t.toUpperCase()};
`:`#define IS_UNKNOWN;
`;a.vertexShader=u+`#define IS_VERTEX
`+a.vertexShader,a.fragmentShader=u+`#define IS_FRAGMENT
`+a.fragmentShader;const n=h=>{for(const c in h){const d=c==="*"||f&&f.includes(c);if(c==="*"||m&&m.includes(c)||d){const E=F[c];if(E&&E!=="*"&&(Array.isArray(E)?!E.includes(t):E!==t)){console.error(`CustomShaderMaterial: ${c} is not available in ${t}. Shader cannot compile.`);return}const C=h[c];for(const I in C){const A=C[I];if(typeof A=="object"){const $=A.type,N=A.value;$==="fs"?a.fragmentShader=a.fragmentShader.replace(I,N):$==="vs"&&(a.vertexShader=a.vertexShader.replace(I,N))}else A&&(a.vertexShader=a.vertexShader.replace(I,A),a.fragmentShader=a.fragmentShader.replace(I,A))}}}};n(w),n(M),a.vertexShader=R(a.vertexShader,f,!1),a.fragmentShader=R(a.fragmentShader,m,!0),l&&(a.uniforms={...a.uniforms,...s.uniforms}),s.uniforms=a.uniforms};const g=s.customProgramCacheKey;s.customProgramCacheKey=()=>(p?.()||z((f||"")+(m||"")))+g?.call(s),s.needsUpdate=!0}clone(){const i=this;return new i.constructor({baseMaterial:i.__csm.baseMaterial.clone(),vertexShader:i.__csm.vertexShader,fragmentShader:i.__csm.fragmentShader,uniforms:i.__csm.uniforms,patchMap:i.__csm.patchMap,cacheKey:i.__csm.cacheKey})}}export{j as B};
