import{importShared as i}from"./3d-tiles-renderer.DZNovkLO1767148983502.js";import{rz as m,_l as g}from"./index.DTe2qqjO1767148983502.js";const{defineComponent:p}=await i("vue"),{createElementVNode:l,normalizeProps:d,guardReactiveProps:h,openBlock:_,createElementBlock:x}=await i("vue"),w=["rotateX"],C=["args"],{watch:u}=await i("vue"),o=await i("three"),D=p({__name:"digitalGround",props:{size:{default:10},speed:{default:1},color:{default:"#FFFFFF"}},setup(s){const t=s,{textures:v,isLoading:c}=m(["./plugins/floor/image/digitalGround1.png","./plugins/floor/image/digitalGround2.png","./plugins/floor/image/digitalGround3.png","./plugins/floor/image/digitalGround4.png"]),a={uniforms:{time:{value:0},radius:{value:t.size},uColor:{value:new o.Color(t.color)},texture0:{value:null},texture1:{value:null},texture2:{value:null},texture3:{value:null}},vertexShader:`
        varying vec3 vPosition;
        varying vec2 vUv;
        void main(){
            vPosition = position;
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }
    `,fragmentShader:`
        uniform float time;
        uniform float radius;

        uniform sampler2D texture0;
        uniform sampler2D texture1;
        uniform sampler2D texture2;
        uniform sampler2D texture3;

        varying vec3 vPosition;
        uniform vec3 uColor;
        varying vec2 vUv;

        float wave(float a, float l, float s, float second, float val) {
            float PI = 3.141592653;
            float wave = a * sin(- val * 2.0 * PI / l + second * s * 2.0 * PI / l);
            return (wave + 1.0) / 2.0;
        }
        void main(){
            vec4 basceColor = vec4(uColor, 1.0);
            vec4 back = texture2D( texture0, vUv * 16.0);

            vec4 ori1 = texture2D( texture1, vUv * 4.0); // 电子元件
            vec4 ori2 = texture2D( texture2, vUv * 16.0 ); // 点
            vec4 ori3 = texture2D( texture3, vUv * 16.0 ); // 网格

            float length = length( vec2(vPosition.x, vPosition.y) );
            // 应用波函数蒙版
            float flag1 = wave(1.0, radius / 2.0, 45.0, time, length);
            if (flag1 < 0.5) {
                flag1 = 0.0;
            }
            ori1.a = ori1.a * (flag1 * 0.8 + 0.2);
            float flag2 = wave(1.0, radius / 3.0, 30.0, time, length);
            ori2.a = ori2.a * (flag2 * 0.8 + 0.2);
            float flag3 = wave(1.0, 60.0, 20.0, time, length);
            ori3.a = ori3.a * (flag3 * 2.0 - 1.5);
            // 应用蒙版
            float alpha = clamp(ori1.a + ori2.a + ori3.a + back.a * 0.01, 0.0, 1.0);
            basceColor.a = alpha*2.0;

            gl_FragColor = basceColor * clamp((2.0 - (length * 2.0 / radius)), 0.0, 1.0);
        }
    `,side:o.DoubleSide,transparent:!0};u([v,c],([e,n])=>{if(e&&!n){for(let r=0;r<e.length;r++)e[r].colorSpace=o.LinearSRGBColorSpace,e[r].wrapS=o.RepeatWrapping,e[r].wrapT=o.RepeatWrapping,e[r].magFilter=o.LinearFilter,e[r].minFilter=o.LinearMipmapLinearFilter;a.uniforms.texture0.value=e[0],a.uniforms.texture1.value=e[1],a.uniforms.texture2.value=e[2],a.uniforms.texture3.value=e[3]}}),u(()=>t.color,e=>{a.uniforms.uColor.value=new o.Color(e)});const{onBeforeRender:f}=g();return f(({elapsed:e})=>{a.uniforms.time.value=e/10*t.speed}),(e,n)=>(_(),x("TresGroup",null,[l("TresMesh",{rotateX:-Math.PI/2},[l("TresCircleGeometry",{args:[e.size]},null,8,C),l("TresShaderMaterial",d(h(a)),null,16)],8,w)]))}});export{D as _sfc_main};
