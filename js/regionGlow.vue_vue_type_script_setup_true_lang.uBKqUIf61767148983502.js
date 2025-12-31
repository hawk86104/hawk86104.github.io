import{importShared as n}from"./3d-tiles-renderer.DZNovkLO1767148983502.js";import{LineGeometry as h,Line2 as w}from"./Line2.BNbNjiwa1767148983502.js";import{LineMaterial as _}from"./LineSegments2.BWdpcsAi1767148983502.js";import{resetUV as x}from"./utils.DURg_k-q1767148983502.js";const{defineComponent:M}=await n("vue"),{unref:v,createElementVNode:m,openBlock:y,createElementBlock:g}=await n("vue"),S=["object","rotation-x"],E=["object","rotation-x"],e=await n("three"),{watchEffect:U}=await n("vue"),j=M({__name:"regionGlow",props:{positionSrc:{default:[[0,0],[1,1]]},color:{default:"#ffff00"}},setup(p){const t=p,r=new e.Shape;t.positionSrc.forEach((o,s)=>{s===0?r.moveTo(o[0],o[1]):r.lineTo(o[0],o[1])});const a=new e.ShaderMaterial({vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    varying vec2 vUv;
		uniform vec3 color;
    void main() {
			// 计算距离四条边的最小距离
        float distance = max(max(vUv.x, -vUv.x), max(vUv.y, -vUv.y));

        // 将距离映射到透明度（从边缘到中心逐渐变透明）
        float alpha = smoothstep(0.1, 0.9, distance*1.1);

        // 设置最终颜色和透明度
        gl_FragColor = vec4(color, alpha);
    }
  `,transparent:!0,side:e.DoubleSide,depthWrite:!1,depthTest:!0,uniforms:{color:{type:"uvs",value:new e.Color(t.color)}}});let i=new e.ShapeGeometry(r);x(i,!0);const f=new e.Mesh(i,a),d=r.getPoints(),l=new h;l.setPositions(d.flatMap(o=>[o.x,o.y,0]));var c=new _({color:new e.Color(t.color),linewidth:2});const u=new w(l,c);return U(()=>{a.uniforms.color.value=new e.Color(t.color),c.color=new e.Color(t.color)}),(o,s)=>(y(),g("TresGroup",null,[m("primitive",{object:v(f),renderOrder:9999,"rotation-x":Math.PI/2},null,8,S),m("primitive",{object:v(u),renderOrder:9999,"rotation-x":Math.PI/2},null,8,E)]))}});export{j as _sfc_main};
