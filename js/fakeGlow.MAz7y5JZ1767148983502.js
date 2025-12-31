import{importShared as s}from"./3d-tiles-renderer.DZNovkLO1767148983502.js";import{Kk as v,tk as h}from"./index.DTe2qqjO1767148983502.js";import{Pane as S}from"./tweakpane.BQRZXf8M1767148983502.js";const{ShaderMaterial:y,Uniform:a,Color:d,AdditiveBlending:C,FrontSide:F,BackSide:z,DoubleSide:x}=await s("three");class _ extends y{constructor(e={}){super(),this.vertexShader=`
      varying vec3 vPosition;
      varying vec3 vNormal;

      void main() {
        vec4 modelPosition = modelMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * viewMatrix * modelPosition;
        vec4 modelNormal = modelMatrix * vec4(normal, 0.0);
        vPosition = modelPosition.xyz;
        vNormal = modelNormal.xyz;

      }
    `,this.fragmentShader=`
      uniform vec3 glowColor;
      uniform float falloff;
      uniform float glowSharpness;
      uniform float glowInternalRadius;
      uniform float opacity;

      varying vec3 vPosition;
      varying vec3 vNormal;

      void main()
      {
        // Normal
        vec3 normal = normalize(vNormal);
        if(!gl_FrontFacing)
            normal *= - 1.0;
        vec3 viewDirection = normalize(cameraPosition - vPosition);
        float fresnel = dot(viewDirection, normal);
        fresnel = pow(fresnel, glowInternalRadius + 0.1);
        float falloff = smoothstep(0., falloff, fresnel);
        float fakeGlow = fresnel;
        fakeGlow += fresnel * glowSharpness;
        fakeGlow *= falloff;
        gl_FragColor = vec4(clamp(glowColor * fresnel, 0., 1.0), clamp(fakeGlow, 0., opacity));

        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      } 
      `,this.uniforms={opacity:new a(e.opacity!==void 0?e.opacity:1),glowInternalRadius:new a(e.glowInternalRadius!==void 0?e.glowInternalRadius:6),glowSharpness:new a(e.glowSharpness!==void 0?e.glowSharpness:.5),falloff:new a(e.falloff!==void 0?e.falloff:.1),glowColor:new a(e.glowColor!==void 0?new d(e.glowColor):new d("#00d5ff"))},this.setValues(e),this.depthTest=e.depthTest!==void 0?e.depthTest:!1,this.blending=e.blendMode!==void 0?e.blendMode:C,this.transparent=!0,this.side=e.side!==void 0?e.side:x}}const{defineComponent:k}=await s("vue"),{createElementVNode:l,unref:r,createVNode:f,Suspense:T,withCtx:u,openBlock:g,createBlock:c,resolveComponent:b}=await s("vue"),B={position:[0,6,0]},M=["object"],{reactive:G,watchEffect:P}=await s("vue"),t=await s("three"),D=k({__name:"fakeGlow",setup(p){const e=new S({title:"辉光参数",expanded:!0}),o=G({glowColor:"#a058c1",falloff:1.4,glowInternalRadius:3.7,glowSharpness:0,opacity:1,side:t.FrontSide,depthTest:!1}),i=new _,w=new t.Mesh(new t.TorusKnotGeometry(4,3.8,128,128),i);return e.addBinding(o,"glowColor",{label:"颜色"}),e.addBinding(o,"falloff",{label:"衰减",min:0,max:10,step:.1}),e.addBinding(o,"glowInternalRadius",{label:"内半径",min:-5,max:5,step:.1}),e.addBinding(o,"glowSharpness",{label:"清晰度",min:0,max:10,step:.1}),e.addBinding(o,"opacity",{label:"透明",min:0,max:1,step:.1}),e.addBinding(o,"side",{label:"材质面",options:{FrontSide:t.FrontSide,BackSide:t.BackSide,DoubleSide:t.DoubleSide}}),P(()=>{i.uniforms.falloff.value=o.falloff,i.uniforms.glowColor.value=new t.Color(o.glowColor),i.uniforms.glowInternalRadius.value=o.glowInternalRadius,i.uniforms.glowSharpness.value=o.glowSharpness,i.uniforms.opacity.value=o.opacity,i.side=o.side}),(N,n)=>{const m=b("TresCanvas");return g(),c(m,{"window-size":"",clearColor:1},{default:u(()=>[n[1]||(n[1]=l("TresPerspectiveCamera",{position:[0,25,25],near:.1,fov:65},null,-1)),n[2]||(n[2]=l("TresAmbientLight",{intensity:1.5},null,-1)),n[3]||(n[3]=l("TresDirectionalLight",{position:[100,100,60],intensity:20},null,-1)),f(r(v),{autoRotate:""}),n[4]||(n[4]=l("TresGridHelper",{args:[20,10]},null,-1)),l("TresGroup",B,[n[0]||(n[0]=l("TresMesh",null,[l("TresTorusKnotGeometry",{args:[4,.5,128,128]}),l("TresMeshPhysicalMaterial",{color:"blue",roughness:.2,clearcoat:1})],-1)),l("primitive",{object:r(w)},null,8,M)]),(g(),c(T,null,{default:u(()=>[f(r(h),{files:["pos-x.jpg","neg-x.jpg","pos-y.jpg","neg-y.jpg","pos-z.jpg","neg-z.jpg"],path:"https://opensource.cdn.icegl.cn/images/skyBox/6jpg/"},null,8,["path"])]),_:1}))]),_:1})}}});export{D as default};
