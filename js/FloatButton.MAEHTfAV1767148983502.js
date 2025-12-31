import{importShared as M}from"./3d-tiles-renderer.DZNovkLO1767148983502.js";import{derived as B,cB as x,cM as y,c as l,cE as a,createInjectionKey as D,useConfig as j,useTheme as R,useThemeClass as k,resolveWrappedSlot as K,resolveSlot as W,call as z}from"./light.Bp388JKA1767148983502.js";import{formatLength as u}from"./format-length.BHvmju661767148983502.js";import{NBaseIcon as J,ErrorIcon as Q}from"./Close.BeIyDfIs1767148983502.js";import{useMergedState as X,on as Y,off as Z}from"./use-merged-state.qnrvbG9d1767148983502.js";function oo(o){const{popoverColor:e,dividerColor:r,borderRadius:s}=o;return{color:e,buttonBorderColor:r,borderRadiusSquare:s,boxShadow:"0 2px 8px 0px rgba(0, 0, 0, .12)"}}const eo={common:B,self:oo},to=x("float-button-group",[x("float-button",`
 position: relative;
 `),y("square-shape",`
 background-color: var(--n-color);
 cursor: pointer;
 display: flex;
 width: fit-content;
 align-items: center;
 justify-content: center;
 border-radius: var(--n-border-radius-square);
 flex-direction: column;
 box-shadow: var(--n-box-shadow);
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[x("float-button",`
 background-color: unset;
 border-radius: 0;
 box-shadow: none;
 box-sizing: content-box;
 `,[l("&:not(:last-child)",`
 border-bottom: 1px solid var(--n-button-border-color); 
 `),l("&:first-child",`
 border-top-left-radius: 4px;
 border-top-right-radius: 4px;
 `),l("&:last-child",`
 border-bottom-left-radius: 4px;
 border-bottom-right-radius: 4px;
 `),a("fill",`
 top: 4px;
 right: 4px;
 bottom: 4px;
 left: 4px;
 border-radius: var(--n-border-radius-square); 
 `)])]),y("circle-shape",[l(">:not(:last-child)",`
 margin-bottom: 16px;
 `)])]),{computed:ro,defineComponent:no,h:io,provide:so,toRef:ao}=await M("vue"),lo=Object.assign(Object.assign({},R.props),{left:[Number,String],right:[Number,String],top:[Number,String],bottom:[Number,String],shape:{type:String,default:"circle"},position:{type:String,default:"fixed"}}),N=D("n-float-button-group"),Ro=no({name:"FloatButtonGroup",props:lo,setup(o){const{mergedClsPrefixRef:e,inlineThemeDisabled:r}=j(o),s=R("FloatButtonGroup","-float-button-group",to,eo,o,e),d=ro(()=>{const{self:{color:c,boxShadow:m,buttonBorderColor:i,borderRadiusSquare:p},common:{cubicBezierEaseInOut:b}}=s.value;return{"--n-bezier":b,"--n-box-shadow":m,"--n-color":c,"--n-button-border-color":i,"--n-border-radius-square":p,position:o.position,left:u(o.left)||"",right:u(o.right)||"",top:u(o.top)||"",bottom:u(o.bottom)||""}});so(N,{shapeRef:ao(o,"shape")});const t=r?k("float-button",void 0,d,o):void 0;return{cssVars:r?void 0:d,mergedClsPrefix:e,themeClass:t?.themeClass,onRender:t?.onRender}},render(){const{mergedClsPrefix:o,cssVars:e,shape:r}=this;return io("div",{class:[`${o}-float-button-group`,`${o}-float-button-group--${r}-shape`],style:e,role:"group"},this.$slots)}});function uo(o){const{popoverColor:e,textColor2:r,buttonColor2Hover:s,buttonColor2Pressed:d,primaryColor:t,primaryColorHover:c,primaryColorPressed:m,borderRadius:i}=o;return{color:e,colorHover:s,colorPressed:d,colorPrimary:t,colorPrimaryHover:c,colorPrimaryPressed:m,textColor:r,boxShadow:"0 2px 8px 0px rgba(0, 0, 0, .16)",boxShadowHover:"0 2px 12px 0px rgba(0, 0, 0, .24)",boxShadowPressed:"0 2px 12px 0px rgba(0, 0, 0, .24)",textColorPrimary:"#fff",borderRadiusSquare:i}}const co={common:B,self:uo},bo=x("float-button",`
 user-select: none;
 cursor: pointer;
 color: var(--n-text-color);
 background-color: var(--n-color);
 font-size: 18px;
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 box-shadow: var(--n-box-shadow);
 display: flex;
 align-items: stretch;
 box-sizing: border-box;
`,[y("circle-shape",`
 border-radius: 4096px;
 `),y("square-shape",`
 border-radius: var(--n-border-radius-square);
 `),a("fill",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0
 left: 0;
 transition: background-color .3s var(--n-bezier);
 border-radius: inherit;
 `),a("body",`
 position: relative;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 transition: transform .3s var(--n-bezier), opacity .3s var(--n-bezier);
 border-radius: inherit;
 flex-direction: column;
 box-sizing: border-box;
 padding: 2px 4px;
 gap: 2px;
 transform: scale(1);
 `,[a("description",`
 font-size: 12px;
 text-align: center;
 line-height: 14px;
 `)]),l("&:hover","box-shadow: var(--n-box-shadow-hover);",[l(">",[a("fill",`
 background-color: var(--n-color-hover);
 `)])]),l("&:active","box-shadow: var(--n-box-shadow-pressed);",[l(">",[a("fill",`
 background-color: var(--n-color-pressed);
 `)])]),y("show-menu",[l(">",[a("menu",`
 pointer-events: all;
 bottom: 100%;
 opacity: 1;
 `),a("close",`
 transform: scale(1);
 opacity: 1;
 `),a("body",`
 transform: scale(0.75);
 opacity: 0;
 `)])]),a("close",`
 opacity: 0;
 transform: scale(0.75);
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 display: flex;
 align-items: center;
 justify-content: center;
 transition: transform .3s var(--n-bezier), opacity .3s var(--n-bezier);
 `),a("menu",`
 position: absolute;
 bottom: calc(100% - 8px);
 display: flex;
 flex-direction: column;
 opacity: 0;
 pointer-events: none;
 transition:
 opacity .3s var(--n-bezier),
 bottom .3s var(--n-bezier); 
 `,[l("> *",`
 margin-bottom: 16px;
 `),x("float-button",`
 position: relative !important;
 `)])]),{computed:C,defineComponent:fo,h:f,inject:mo,onBeforeUnmount:po,onMounted:ho,ref:$,toRef:go}=await M("vue"),vo=Object.assign(Object.assign({},R.props),{width:{type:[Number,String],default:40},height:{type:[Number,String],default:40},left:[Number,String],right:[Number,String],top:[Number,String],bottom:[Number,String],shape:{type:String,default:"circle"},position:{type:String,default:"fixed"},type:{type:String,default:"default"},menuTrigger:String,showMenu:{type:Boolean,default:void 0},onUpdateShowMenu:{type:[Function,Array],default:void 0},"onUpdate:showMenu":{type:[Function,Array],default:void 0}}),Po=fo({name:"FloatButton",props:vo,slots:Object,setup(o){const{mergedClsPrefixRef:e,inlineThemeDisabled:r}=j(o),s=$(null),d=R("FloatButton","-float-button",bo,co,o,e),t=mo(N,null),c=$(!1),m=go(o,"showMenu"),i=X(m,c);function p(n){const{onUpdateShowMenu:v,"onUpdate:showMenu":S}=o;c.value=n,v&&z(v,n),S&&z(S,n)}const b=C(()=>{const{self:{color:n,textColor:v,boxShadow:S,boxShadowHover:T,boxShadowPressed:E,colorHover:F,colorPrimary:O,colorPrimaryHover:I,textColorPrimary:U,borderRadiusSquare:G,colorPressed:V,colorPrimaryPressed:L},common:{cubicBezierEaseInOut:A}}=d.value,{type:w}=o;return{"--n-bezier":A,"--n-box-shadow":S,"--n-box-shadow-hover":T,"--n-box-shadow-pressed":E,"--n-color":w==="primary"?O:n,"--n-text-color":w==="primary"?U:v,"--n-color-hover":w==="primary"?I:F,"--n-color-pressed":w==="primary"?L:V,"--n-border-radius-square":G}}),h=C(()=>{const{width:n,height:v}=o;return Object.assign({position:t?void 0:o.position,width:u(n),minHeight:u(v)},t?null:{left:u(o.left),right:u(o.right),top:u(o.top),bottom:u(o.bottom)})}),_=C(()=>t?t.shapeRef.value:o.shape),q=()=>{o.menuTrigger==="hover"&&p(!0)},P=()=>{o.menuTrigger==="hover"&&i.value&&p(!1)},H=()=>{o.menuTrigger==="click"&&p(!i.value)},g=r?k("float-button",C(()=>o.type[0]),b,o):void 0;return ho(()=>{const n=s.value;n&&Y("mousemoveoutside",n,P)}),po(()=>{const n=s.value;n&&Z("mousemoveoutside",n,P)}),{inlineStyle:h,selfElRef:s,cssVars:r?void 0:b,mergedClsPrefix:e,mergedShape:_,mergedShowMenu:i,themeClass:g?.themeClass,onRender:g?.onRender,Mouseenter:q,handleMouseleave:P,handleClick:H}},render(){var o;const{mergedClsPrefix:e,cssVars:r,mergedShape:s,type:d,menuTrigger:t,mergedShowMenu:c,themeClass:m,$slots:i,inlineStyle:p,onRender:b}=this;return b?.(),f("div",{ref:"selfElRef",class:[`${e}-float-button`,`${e}-float-button--${s}-shape`,`${e}-float-button--${d}-type`,c&&`${e}-float-button--show-menu`,m],style:[r,p],onMouseenter:this.Mouseenter,onMouseleave:this.handleMouseleave,onClick:this.handleClick,role:"button"},f("div",{class:`${e}-float-button__fill`,"aria-hidden":!0}),f("div",{class:`${e}-float-button__body`},(o=i.default)===null||o===void 0?void 0:o.call(i),K(i.description,h=>h?f("div",{class:`${e}-float-button__description`},h):null)),t?f("div",{class:`${e}-float-button__close`},f(J,{clsPrefix:e},{default:()=>f(Q,null)})):null,t?f("div",{onClick:h=>{h.stopPropagation()},"data-float-button-menu":!0,class:`${e}-float-button__menu`},W(i.menu,()=>[])):null)}});export{Ro as FloatButtonGroup,Po as NFloatButton,lo as floatButtonGroupProps,vo as floatButtonProps};
