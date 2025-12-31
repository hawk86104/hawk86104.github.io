import{importShared as d}from"./3d-tiles-renderer.DZNovkLO1767148983502.js";import{Kk as g}from"./index.DTe2qqjO1767148983502.js";import{Pane as w}from"./tweakpane.BQRZXf8M1767148983502.js";import{_sfc_main as b}from"./domPanel.vue_vue_type_style_index_0_lang.DqrQKbSz1767148983502.js";import{NModal as k}from"./Modal.gAO5b5xb1767148983502.js";import{NInput as C}from"./Input.FhrARThI1767148983502.js";import{Button as m}from"./Button.DslW6U6X1767148983502.js";const{defineComponent:_}=await d("vue"),{createElementVNode:a,unref:r,createVNode:o,normalizeProps:h,guardReactiveProps:y,resolveComponent:B,withCtx:i,createTextVNode:u,Fragment:T,openBlock:N,createElementBlock:z}=await d("vue"),P={position:[1,2,3]},{reactive:M,ref:f}=await d("vue"),I=_({__name:"domPanelPage",setup(V){const t=M({center:!1,transform:!0,sprite:!1,distanceFactor:3,domContent:`
    <div class="illustrate2">
  <div class="cStyle1"></div>
  <div class="parallelogram">
    <span>🪃 飞机机翼</span>
    <div class="contentDiv">改善飞行的稳定性和操纵性</div>
  </div>
</div>

<style>
.illustrate2 {
position: relative;
left: 80px;
top: -50px
}
.illustrate2 .cStyle1 {
  width: 15px;
  height: 15px;
  background-color: transparent;
  border-radius: 50%;
  border: 5px solid white;
  position: relative;
  color: white;
}

/* 添加斜线效果 */
.illustrate2 .cStyle1::before {
  content: '';
  position: relative;
  top: -155px;
  left: -446px;
  width: 500px;
  height: 6px;
  display: block;
  transform: rotate(218deg);
  background-color: white;
}

.illustrate2 .parallelogram {
  width: 360px;
  height: 30px;
  color: white;
  position: relative;
  top: -329px;
  left: -760px;
  text-align: right;
  font-size: 38px;
}

.illustrate2 .parallelogram span {
  position: relative;
  right: 18px;
  top: -30px;
  font-weight: bolder;
  /* 可选描边效果
  -webkit-text-stroke: 1px #424242;
  text-stroke: 1px #424242;
  */
}

.illustrate2 .parallelogram .contentDiv {
  text-align: left;
  font-size: 26px;
  display: block;
  margin-top: -19px;
}

/* 利用伪元素before创建平行四边形 */
.illustrate2 .parallelogram::before {
  content: '';
  transform: skew(-45deg);
  background: linear-gradient(45deg, #5a65fc, #ff00f6);
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
</style>

    `}),n=new w({title:"参数",expanded:!0});n.addBinding(t,"center"),n.addBinding(t,"transform"),n.addBinding(t,"sprite"),n.addBinding(t,"distanceFactor",{label:"距离缩放",step:.1,min:.1,max:10});const l=f(!1);n.addButton({title:"编辑",label:"dom代码"}).on("click",()=>{l.value||(l.value=!0)});const s=f(t.domContent);function c(){t.domContent=s.value,l.value=!1}function v(){l.value=!1}return(F,e)=>{const x=B("TresCanvas");return N(),z(T,null,[o(x,{clearColor:"#222","window-size":""},{default:i(()=>[e[4]||(e[4]=a("TresPerspectiveCamera",{position:[2,10,16]},null,-1)),o(r(g)),e[5]||(e[5]=a("TresGridHelper",null,null,-1)),a("TresMesh",P,[e[2]||(e[2]=a("TresBoxGeometry",null,null,-1)),e[3]||(e[3]=a("TresMeshNormalMaterial",null,null,-1)),o(b,h(y(t)),null,16)])]),_:1}),o(r(k),{show:l.value,"onUpdate:show":e[1]||(e[1]=p=>l.value=p),title:"HTML编辑器",preset:"dialog","mask-closable":!1,"z-index":99999999,style:{width:"900px"}},{action:i(()=>[o(r(m),{onClick:v},{default:i(()=>[...e[6]||(e[6]=[u("取消",-1)])]),_:1}),o(r(m),{type:"primary",onClick:c},{default:i(()=>[...e[7]||(e[7]=[u("确认",-1)])]),_:1})]),default:i(()=>[o(r(C),{value:s.value,"onUpdate:value":e[0]||(e[0]=p=>s.value=p),type:"textarea",placeholder:"在这里输入HTML代码",autosize:{minRows:10,maxRows:38}},null,8,["value"])]),_:1},8,["show"])],64)}}});export{I as default};
