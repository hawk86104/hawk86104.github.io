import{importShared as c}from"./3d-tiles-renderer.DZNovkLO1767148983502.js";import{_l as et,Kk as ot}from"./index.DTe2qqjO1767148983502.js";import"./index.DFx3vWyO1767148983502.js";import"./skyBoxAmesh.vue_vue_type_script_setup_true_lang.R4i3IxUx1767148983502.js";import{_sfc_main as nt}from"./skyBoxBmesh.vue_vue_type_script_setup_true_lang.D7En_9kn1767148983502.js";import"./skyBoxDmesh.vue_vue_type_script_setup_true_lang.ByNLPS1R1767148983502.js";import{createNoise2D as at}from"./simplex-noise.DV0DHqK31767148983502.js";import{useTexture$1 as rt,CientosShaderMaterial as it}from"./customShaderMaterial.vue_vue_type_script_setup_true_lang.B7dQ_CiZ1767148983502.js";import"./index.vue_vue_type_script_setup_true_lang.CjsHShHS1767148983502.js";const{withAsyncContext:st,defineComponent:lt}=await c("vue"),{unref:i,createElementVNode:z,openBlock:ct,createElementBlock:ut}=await c("vue"),ft=["material"],ht=["index","attributes-position","attributes-uv","attributes-offset","attributes-orientation","attributes-stretch","attributes-halfRootAngleSin","attributes-halfRootAngleCos"],mt=["geometry"],pt=["side"],o=await c("three"),dt=lt({__name:"grass",props:{bW:{default:.12},bH:{default:1},joints:{default:5},width:{default:100},instances:{default:5e4}},async setup(V){let u,w;const S=([u,w]=st(()=>rt(["./plugins/floor/image/blade_diffuse.jpg","./plugins/floor/image/blade_alpha.jpg"])),u=await u,w(),u),a=V,f=at(Math.random);function Y(t,e){const l=[],b=[],d=[],M=[],k=[];let s=new o.Vector4,C=new o.Vector4;const A=-.25,G=.25;for(let D=0;D<t;D++){const N=Math.random()*e-e/2,H=Math.random()*e-e/2,tt=I(N,H);l.push(N,tt,H);let n=Math.PI-Math.random()*(2*Math.PI);M.push(Math.sin(.5*n)),k.push(Math.cos(.5*n));let r=new o.Vector3(0,1,0),v=r.x*Math.sin(n/2),x=r.y*Math.sin(n/2),g=r.z*Math.sin(n/2),_=Math.cos(n/2);s.set(v,x,g,_).normalize(),n=Math.random()*(G-A)+A,r=new o.Vector3(1,0,0),v=r.x*Math.sin(n/2),x=r.y*Math.sin(n/2),g=r.z*Math.sin(n/2),_=Math.cos(n/2),C.set(v,x,g,_).normalize(),s=P(s,C),n=Math.random()*(G-A)+A,r=new o.Vector3(0,0,1),v=r.x*Math.sin(n/2),x=r.y*Math.sin(n/2),g=r.z*Math.sin(n/2),_=Math.cos(n/2),C.set(v,x,g,_).normalize(),s=P(s,C),b.push(s.x,s.y,s.z,s.w),D<t/3?d.push(Math.random()*1.8):d.push(Math.random())}const K=new o.InstancedBufferAttribute(new Float32Array(l),3),X=new o.InstancedBufferAttribute(new Float32Array(b),4),Z=new o.InstancedBufferAttribute(new Float32Array(d),1),J=new o.InstancedBufferAttribute(new Float32Array(k),1),q=new o.InstancedBufferAttribute(new Float32Array(M),1);return{offsetsF32:K,orientationsF32:X,stretchesF32:Z,halfRootAngleCosF32:J,halfRootAngleSinF32:q}}function P(t,e){const l=t.x*e.w+t.y*e.z-t.z*e.y+t.w*e.x,b=-t.x*e.z+t.y*e.w+t.z*e.x+t.w*e.y,d=t.x*e.y-t.y*e.x+t.z*e.w+t.w*e.z,M=-t.x*e.x-t.y*e.y-t.z*e.z+t.w*e.w;return new o.Vector4(l,b,d,M)}function I(t,e){var l=2*f(t/50,e/50);return l+=4*f(t/100,e/100),l+=.2*f(t/10,e/10),l}const h=Y(a.instances,a.width),R=new o.PlaneGeometry(a.bW,a.bH,1,a.joints).translate(0,a.bH/2,0),m=new o.PlaneGeometry(a.width,a.width,32,32);m.lookAt(new o.Vector3(0,1,0));const y=m.attributes.position;for(let t=0;t<y.array.length;t+=3)y.array[t+1]=I(y.array[t],y.array[t+2]);m.attributes.position.needsUpdate=!0,m.computeVertexNormals();const Q=it({bladeHeight:1,map:null,alphaMap:null,time:0,tipColor:new o.Color(.3,.9,0).convertSRGBToLinear(),bottomColor:new o.Color(0,.2,0).convertSRGBToLinear()},`   precision mediump float;
      attribute vec3 offset;
      attribute vec4 orientation;
      attribute float halfrootanglesin;
      attribute float halfrootanglecos;
      attribute float stretch;
      uniform float time;
      uniform float bladeHeight;
      varying vec2 vUv;
      varying float frc;

      //WEBGL-NOISE FROM https://github.com/stegu/webgl-noise
      //Description : Array and textureless GLSL 2D simplex noise function. Author : Ian McEwan, Ashima Arts. Maintainer : stegu Lastmod : 20110822 (ijm) License : Copyright (C) 2011 Ashima Arts. All rights reserved. Distributed under the MIT License. See LICENSE file. https://github.com/ashima/webgl-noise https://github.com/stegu/webgl-noise
      vec3 mod289(vec3 x) {return x - floor(x * (1.0 / 289.0)) * 289.0;} vec2 mod289(vec2 x) {return x - floor(x * (1.0 / 289.0)) * 289.0;} vec3 permute(vec3 x) {return mod289(((x*34.0)+1.0)*x);} float snoise(vec2 v){const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439); vec2 i  = floor(v + dot(v, C.yy) ); vec2 x0 = v -   i + dot(i, C.xx); vec2 i1; i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0); vec4 x12 = x0.xyxy + C.xxzz; x12.xy -= i1; i = mod289(i); vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 )) + i.x + vec3(0.0, i1.x, 1.0 )); vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0); m = m*m ; m = m*m ; vec3 x = 2.0 * fract(p * C.www) - 1.0; vec3 h = abs(x) - 0.5; vec3 ox = floor(x + 0.5); vec3 a0 = x - ox; m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h ); vec3 g; g.x  = a0.x  * x0.x  + h.x  * x0.y; g.yz = a0.yz * x12.xz + h.yz * x12.yw; return 130.0 * dot(m, g);}
      //END NOISE

      //https://www.geeks3d.com/20141201/how-to-rotate-a-vertex-by-a-quaternion-in-glsl/
      vec3 rotateVectorByQuaternion( vec3 v, vec4 q){
        return 2.0 * cross(q.xyz, v * q.w + cross(q.xyz, v)) + v;
      }

      //https://en.wikipedia.org/wiki/Slerp
      vec4 slerp(vec4 v0, vec4 v1, float t) {
        // Only unit quaternions are valid rotations.
        // Normalize to avoid undefined behavior.
        normalize(v0);
        normalize(v1);

        // Compute the cosine of the angle between the two vectors.
        float dot_ = dot(v0, v1);

        // If the dot product is negative, slerp won't take
        // the shorter path. Note that v1 and -v1 are equivalent when
        // the negation is applied to all four components. Fix by
        // reversing one quaternion.
        if (dot_ < 0.0) {
          v1 = -v1;
          dot_ = -dot_;
        }

        const float DOT_THRESHOLD = 0.9995;
        if (dot_ > DOT_THRESHOLD) {
          // If the inputs are too close for comfort, linearly interpolate
          // and normalize the result.
          vec4 result = t*(v1 - v0) + v0;
          normalize(result);
          return result;
        }

        // Since dot is in range [0, DOT_THRESHOLD], acos is safe
        float theta_0 = acos(dot_);       // theta_0 = angle between input vectors
        float theta = theta_0*t;          // theta = angle between v0 and result
        float sin_theta = sin(theta);     // compute this value only once
        float sin_theta_0 = sin(theta_0); // compute this value only once
        float s0 = cos(theta) - dot_ * sin_theta / sin_theta_0;  // == sin(theta_0 - theta) / sin(theta_0)
        float s1 = sin_theta / sin_theta_0;
        return (s0 * v0) + (s1 * v1);
      }

      void main() {
        //Relative position of vertex along the mesh Y direction
        frc = position.y/float(bladeHeight);
        //Get wind data from simplex noise
        float noise = 1.0-(snoise(vec2((time-offset.x/50.0), (time-offset.z/50.0))));
        //Define the direction of an unbent blade of grass rotated around the Y axis
        vec4 direction = vec4(0.0, halfrootanglesin, 0.0, halfrootanglecos);
        //Interpolate between the unbent direction and the direction of growth calculated on the CPU.
        //Using the relative location of the vertex along the Y axis as the weight, we get a smooth bend
        direction = slerp(direction, orientation, frc);
        vec3 vPosition = vec3(position.x, position.y + position.y * stretch, position.z);
        vPosition = rotateVectorByQuaternion(vPosition, direction);

       //Apply wind
       float halfAngle = noise * 0.15;
        vPosition = rotateVectorByQuaternion(vPosition, normalize(vec4(sin(halfAngle), 0.0, -sin(halfAngle), cos(halfAngle))));
        //UV for texture
        vUv = uv;
        //Calculate final position of the vertex from the world offset and the above shenanigans
        gl_Position = projectionMatrix * modelViewMatrix * vec4(offset + vPosition, 1.0 );
      }`,`
      precision mediump float;
      uniform sampler2D map;
      uniform sampler2D alphaMap;
      uniform vec3 tipColor;
      uniform vec3 bottomColor;
      varying vec2 vUv;
      varying float frc;

      void main() {
        //Get transparency information from alpha map
        float alpha = texture2D(alphaMap, vUv).r;
        //If transparent, don't draw
        if(alpha < 0.15) discard;
        //Get colour data from texture
        vec4 col = vec4(texture2D(map, vUv));
        //Add more green towards root
        col = mix(vec4(tipColor, 1.0), col, frc);
        //Add a shadow towards root
        col = mix(vec4(bottomColor, 1.0), col, frc);
        gl_FragColor = col;

        #include <tonemapping_fragment>
	      #include <colorspace_fragment>
      }`,t=>{t.side=o.DoubleSide}),p=new Q;p.map=S[0],p.alphaMap=S[1],p.toneMapped=!1;const{onRender:W}=et();return W(({elapsed:t})=>{p.uniforms.time.value=t/4}),(t,e)=>(ct(),ut("TresGroup",null,[z("TresMesh",{material:i(p)},[z("TresInstancedBufferGeometry",{index:i(R).index,"attributes-position":i(R).attributes.position,"attributes-uv":i(R).attributes.uv,"attributes-offset":i(h).offsetsF32,"attributes-orientation":i(h).orientationsF32,"attributes-stretch":i(h).stretchesF32,"attributes-halfRootAngleSin":i(h).halfRootAngleSinF32,"attributes-halfRootAngleCos":i(h).halfRootAngleCosF32},null,8,ht)],8,ft),z("TresMesh",{position:[0,0,0],geometry:i(m)},[z("TresMeshStandardMaterial",{color:"#000f00",side:o.DoubleSide},null,8,pt)],8,mt)]))}}),{defineComponent:vt}=await c("vue"),{createElementVNode:xt,unref:L,normalizeProps:O,guardReactiveProps:U,createVNode:T,Suspense:$,withCtx:B,openBlock:E,createBlock:F,resolveComponent:gt}=await c("vue"),{ACESFilmicToneMapping:_t}=await c("three"),{reactive:j}=await c("vue"),Dt=vt({__name:"grass",setup(V){const u=j({alpha:!0,toneMapping:_t,windowSize:!0,clearColor:6710886}),w=j({enableDamping:!0,autoRotate:!1});return(S,a)=>{const f=gt("TresCanvas");return E(),F(f,O(U(u)),{default:B(()=>[a[0]||(a[0]=xt("TresPerspectiveCamera",{position:[15,15,10],fov:45,near:.1,far:1e3},null,-1)),T(L(ot),O(U(w)),null,16),(E(),F($,null,{default:B(()=>[T(dt)]),_:1})),(E(),F($,null,{default:B(()=>[T(L(nt),{texture:"https://opensource.cdn.icegl.cn/images/skyBox/desert_1k.hdr"},null,8,["texture"])]),_:1}))]),_:1},16)}}});export{Dt as default};
