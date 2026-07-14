import{importShared as l}from"./3d-tiles-renderer.DLbEVYVf1784021167877.js";import{useTexture as u,customShaderMaterial_default as c}from"./index.BjVPg-2F1784021167877.js";const d=()=>`
        varying vec2 vUv;

        void main() {
            vUv = uv;
            csm_Position = position;
        }`,p=()=>`
        varying vec2 vUv;
        uniform sampler2D uTexture;
        uniform vec3 uColor;
        uniform float fEdge;

        // 纹理平铺仍然保留在 shader 内，和原来的地板视觉保持一致
        const float repeatTime = 100.0;

        float smoothsteps(float t) {
            return t * t * (3.0 - 2.0 * t);
        }

        void main() {
            vec4 col = texture2D(uTexture, vUv * repeatTime);
            col.rgb = mix(uColor, col.rgb, 0.5);

            float alpha = 1.0;
            float d = length(vUv - vec2(0.5));
            if (d > 0.35) {
                alpha = 1.0 - smoothsteps(clamp((d - 0.35) / max(fEdge - 0.2, 0.0001), 0.0, 1.0));
            }

            csm_DiffuseColor = vec4(col.rgb, alpha);
            csm_DepthAlpha = alpha;
        }`,{defineComponent:h}=await l("vue"),{createElementVNode:v,unref:n,createVNode:m,openBlock:f,createElementBlock:g}=await l("vue"),w=["rotation-x","receiveShadow"],_=["args"],a=await l("three"),{watch:r}=await l("vue"),T=h({__name:"whiteFloorMesh",props:{size:{default:[20,20]},color:{default:"#990"},shadowColor:{default:"#999"},edge:{default:.35},receiveShadow:{type:Boolean,default:!1}},setup(s){const o=s,{state:i}=u("./plugins/floor/image/whiteFloor.jpg"),t={uColor:{value:new a.Color(o.color)},uShadowColor:{value:new a.Color(o.shadowColor)},fEdge:{value:o.edge},uTexture:{value:null}};return r(i,e=>{e&&(e.wrapS=a.RepeatWrapping,e.wrapT=a.RepeatWrapping,e.repeat.set(6,3),t.uTexture.value=e)}),r(()=>o.edge,e=>{t.fEdge.value=e}),r(()=>o.color,e=>{t.uColor.value.set(e)}),r(()=>o.shadowColor,e=>{t.uShadowColor.value.set(e)}),(e,S)=>(f(),g("TresMesh",{"rotation-x":-Math.PI/2,receiveShadow:o.receiveShadow},[v("TresPlaneGeometry",{args:o.size},null,8,_),m(n(c),{baseMaterial:a.MeshPhongMaterial,uniforms:t,side:a.DoubleSide,vertexShader:n(d)(),fragmentShader:n(p)(),transparent:"",silent:""},null,8,["baseMaterial","side","vertexShader","fragmentShader"])],8,w))}});export{T as _sfc_main};
