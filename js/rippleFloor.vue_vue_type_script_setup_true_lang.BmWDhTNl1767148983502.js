import{importShared as t}from"./3d-tiles-renderer.DZNovkLO1767148983502.js";import{_l as c}from"./index.DTe2qqjO1767148983502.js";const{defineComponent:v}=await t("vue"),{createElementVNode:f,openBlock:m,createElementBlock:y}=await t("vue"),u=["rotation-x"],h=["uniforms"],{onMounted:g,watch:p,reactive:C}=await t("vue"),l=await t("three"),L=`
    varying vec2 vUv;
    void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`,z=`
    uniform float time;
    uniform vec3 color1;
    uniform vec3 color2;
    uniform vec3 lineColor;
    uniform vec3 flyLineColor;
    uniform float gridSize;
    uniform float lineWidth;
    uniform float flySpeed;
    uniform float flyIntensity;
    uniform float dotSize;
    varying vec2 vUv;
    
    void main() {
        // 缩放UV以创建网格
        vec2 scaledUv = vUv * gridSize;
        
        // 创建棋盘格图案
        vec2 cellIndex = floor(scaledUv);
        float checkValue = mod(cellIndex.x + cellIndex.y, 2.0);
        vec3 baseColor = (checkValue < 1.0) ? color1 : color2;
        
        // 创建基础网格线
        vec2 gridUv = fract(scaledUv);
        
        // 基础垂直线
        float verticalLine = abs(gridUv.x - 0.5) / fwidth(gridUv.x);
        float verticalMask = 1.0 - smoothstep(0.0, lineWidth, verticalLine);
        
        // 基础水平线
        float horizontalLine = abs(gridUv.y - 0.5) / fwidth(gridUv.y);
        float horizontalMask = 1.0 - smoothstep(0.0, lineWidth, horizontalLine);
        
        // 组合基础线条
        float baseLineMask = max(verticalMask, horizontalMask);
        vec3 colorWithLines = mix(baseColor, lineColor, baseLineMask);
        
        // 创建飞线效果
        // 垂直线飞线
        float flyVertical = sin(gridUv.y * 6.28 + time * flySpeed) * flyIntensity;
        float flyVerticalLine = abs(gridUv.x - 0.5 + flyVertical) / fwidth(gridUv.x);
        float flyVerticalMask = 1.0 - smoothstep(0.0, lineWidth * 0.5, flyVerticalLine);
        
        // 水平线飞线
        float flyHorizontal = sin(gridUv.x * 6.28 + time * flySpeed * 0.7) * flyIntensity;
        float flyHorizontalLine = abs(gridUv.y - 0.5 + flyHorizontal) / fwidth(gridUv.y);
        float flyHorizontalMask = 1.0 - smoothstep(0.0, lineWidth * 0.5, flyHorizontalLine);
        
        // 组合飞线
        float flyLineMask = max(flyVerticalMask, flyHorizontalMask);
        
        // 添加飞线的发光效果
        float glowVertical = exp(-flyVerticalLine * 2.0) * 0.3;
        float glowHorizontal = exp(-flyHorizontalLine * 2.0) * 0.3;
        float glowMask = max(glowVertical, glowHorizontal);
        
        // 创建节点效果 - 在网格正方形的四个顶点
        float dotRadius = dotSize;
        float dotFeather = dotSize * 0.3;
        
        // 计算到四个顶点的距离
        vec2 topLeft = vec2(0.0, 0.0);
        vec2 topRight = vec2(1.0, 0.0);
        vec2 bottomLeft = vec2(0.0, 1.0);
        vec2 bottomRight = vec2(1.0, 1.0);
        
        float distTopLeft = length(gridUv - topLeft);
        float distTopRight = length(gridUv - topRight);
        float distBottomLeft = length(gridUv - bottomLeft);
        float distBottomRight = length(gridUv - bottomRight);
        
        // 找到最近顶点的距离
        float minDist = min(min(distTopLeft, distTopRight), min(distBottomLeft, distBottomRight));
        
        // 在最近顶点附近绘制节点
        float dotMask = 1.0 - smoothstep(dotRadius - dotFeather, dotRadius + dotFeather, minDist);
        
        // 飞线经过节点时的增强效果
        float nodeGlow = dotMask * flyLineMask * 3.0;
        
        // 组合所有效果
        vec3 finalColor = colorWithLines;
        
        // 添加飞线颜色
        finalColor = mix(finalColor, flyLineColor, flyLineMask);
        
        // 添加发光效果
        finalColor += flyLineColor * glowMask;
        finalColor += flyLineColor * nodeGlow;
        
        // 添加节点 - 使用飞线颜色而不是白色
        finalColor = mix(finalColor, flyLineColor, dotMask);
        
        gl_FragColor = vec4(finalColor, 1.0);
    }
`,x=v({__name:"rippleFloor",props:{color:{default:"#ffed00"},flySpeed:{default:3},flyIntensity:{default:.3},dotSize:{default:.03},lineColor:{default:"#66f5ff"},floorColor1:{default:"#4c6480"},floorColor2:{default:"#acb4c0"},gridSize:{default:50},lineWidth:{default:.02},paused:{type:Boolean,default:!1}},setup(d){const o=d,e=C({time:{value:0},color1:{value:new l.Color(o.floorColor1)},color2:{value:new l.Color(o.floorColor2)},lineColor:{value:new l.Color(o.lineColor)},flyLineColor:{value:new l.Color(o.lineColor)},gridSize:{value:o.gridSize},lineWidth:{value:o.lineWidth},flySpeed:{value:o.flySpeed},flyIntensity:{value:o.flyIntensity},dotSize:{value:o.dotSize}}),{onBeforeRender:s}=c();let i=0;s(({delta:r})=>{o.paused||(i+=r,e.time.value=i)});const a=()=>{e.color1.value=new l.Color(o.floorColor1),e.color2.value=new l.Color(o.floorColor2),e.lineColor.value=new l.Color(o.lineColor),e.flyLineColor.value=new l.Color(o.lineColor),e.gridSize.value=o.gridSize,e.lineWidth.value=o.lineWidth,e.flySpeed.value=o.flySpeed,e.flyIntensity.value=o.flyIntensity,e.dotSize.value=o.dotSize};return g(()=>{a()}),p(()=>[o.flySpeed,o.flyIntensity,o.dotSize,o.lineColor,o.floorColor1,o.floorColor2,o.gridSize,o.lineWidth],a),(r,n)=>(m(),y("TresMesh",{"rotation-x":-Math.PI/2,position:[0,0,0]},[n[0]||(n[0]=f("TresPlaneGeometry",{args:[10,10]},null,-1)),f("TresShaderMaterial",{uniforms:e,"vertex-shader":L,"fragment-shader":z,side:2},null,8,h)],8,u))}});export{x as _sfc_main};
