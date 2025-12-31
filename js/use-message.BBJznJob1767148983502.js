import{importShared as I}from"./3d-tiles-renderer.DZNovkLO1767148983502.js";import{c as h,commonVariables as ne,createInjectionKey as P,derived as re,cB as w,cE as y,cM as x,useConfig as H,useTheme as M,createKey as C,useThemeClass as se,throwError as te}from"./light.Bp388JKA1767148983502.js";import{iconSwitchTransition as ie,NIconSwitchTransition as ae,NBaseLoading as ce}from"./Loading.DOiIlXyA1767148983502.js";import{render as le,NBaseClose as de}from"./Suffix.D4O-Hju71767148983502.js";import{useRtl as ue}from"./use-rtl.q0hodkC81767148983502.js";import{NBaseIcon as fe}from"./Close.BeIyDfIs1767148983502.js";import{ErrorIcon as ge,WarningIcon as me,SuccessIcon as pe,InfoIcon as he}from"./Warning.CwdGGzpm1767148983502.js";import{NFadeInExpandTransition as ve}from"./browser.DwR5nDQ71767148983502.js";import{createId as be}from"./Scrollbar.BsFc6odp1767148983502.js";function Ce(r,e=[],t){const o={};return Object.getOwnPropertyNames(r).forEach(c=>{e.includes(c)||(o[c]=r[c])}),Object.assign(o,t)}const{cubicBezierEaseInOut:m,cubicBezierEaseOut:xe,cubicBezierEaseIn:$e}=ne;function Ie({overflow:r="hidden",duration:e=".3s",originalTransition:t="",leavingDelay:o="0s",foldPadding:i=!1,enterToProps:c=void 0,leaveToProps:d=void 0,reverse:l=!1}={}){const s=l?"leave":"enter",n=l?"enter":"leave";return[h(`&.fade-in-height-expand-transition-${n}-from,
 &.fade-in-height-expand-transition-${s}-to`,Object.assign(Object.assign({},c),{opacity:1})),h(`&.fade-in-height-expand-transition-${n}-to,
 &.fade-in-height-expand-transition-${s}-from`,Object.assign(Object.assign({},d),{opacity:0,marginTop:"0 !important",marginBottom:"0 !important",paddingTop:i?"0 !important":void 0,paddingBottom:i?"0 !important":void 0})),h(`&.fade-in-height-expand-transition-${n}-active`,`
 overflow: ${r};
 transition:
 max-height ${e} ${m} ${o},
 opacity ${e} ${xe} ${o},
 margin-top ${e} ${m} ${o},
 margin-bottom ${e} ${m} ${o},
 padding-top ${e} ${m} ${o},
 padding-bottom ${e} ${m} ${o}
 ${t?`,${t}`:""}
 `),h(`&.fade-in-height-expand-transition-${s}-active`,`
 overflow: ${r};
 transition:
 max-height ${e} ${m},
 opacity ${e} ${$e},
 margin-top ${e} ${m},
 margin-bottom ${e} ${m},
 padding-top ${e} ${m},
 padding-bottom ${e} ${m}
 ${t?`,${t}`:""}
 `)]}const L=P("n-message-api"),E=P("n-message-provider"),we={margin:"0 0 8px 0",padding:"10px 20px",maxWidth:"720px",minWidth:"420px",iconMargin:"0 10px 0 0",closeMargin:"0 0 0 10px",closeSize:"20px",closeIconSize:"16px",iconSize:"20px",fontSize:"14px"};function ye(r){const{textColor2:e,closeIconColor:t,closeIconColorHover:o,closeIconColorPressed:i,infoColor:c,successColor:d,errorColor:l,warningColor:s,popoverColor:n,boxShadow2:a,primaryColor:u,lineHeight:p,borderRadius:g,closeColorHover:v,closeColorPressed:b}=r;return Object.assign(Object.assign({},we),{closeBorderRadius:g,textColor:e,textColorInfo:e,textColorSuccess:e,textColorError:e,textColorWarning:e,textColorLoading:e,color:n,colorInfo:n,colorSuccess:n,colorError:n,colorWarning:n,colorLoading:n,boxShadow:a,boxShadowInfo:a,boxShadowSuccess:a,boxShadowError:a,boxShadowWarning:a,boxShadowLoading:a,iconColor:e,iconColorInfo:c,iconColorSuccess:d,iconColorWarning:s,iconColorError:l,iconColorLoading:u,closeColorHover:v,closeColorPressed:b,closeIconColor:t,closeIconColorHover:o,closeIconColorPressed:i,closeColorHoverInfo:v,closeColorPressedInfo:b,closeIconColorInfo:t,closeIconColorHoverInfo:o,closeIconColorPressedInfo:i,closeColorHoverSuccess:v,closeColorPressedSuccess:b,closeIconColorSuccess:t,closeIconColorHoverSuccess:o,closeIconColorPressedSuccess:i,closeColorHoverError:v,closeColorPressedError:b,closeIconColorError:t,closeIconColorHoverError:o,closeIconColorPressedError:i,closeColorHoverWarning:v,closeColorPressedWarning:b,closeIconColorWarning:t,closeIconColorHoverWarning:o,closeIconColorPressedWarning:i,closeColorHoverLoading:v,closeColorPressedLoading:b,closeIconColorLoading:t,closeIconColorHoverLoading:o,closeIconColorPressedLoading:i,loadingColor:u,lineHeight:p,borderRadius:g,border:"0"})}const Oe={common:re,self:ye},A={icon:Function,type:{type:String,default:"info"},content:[String,Number,Function],showIcon:{type:Boolean,default:!0},closable:Boolean,keepAliveOnHover:Boolean,onClose:Function,onMouseenter:Function,onMouseleave:Function},Se=h([w("message-wrapper",`
 margin: var(--n-margin);
 z-index: 0;
 transform-origin: top center;
 display: flex;
 `,[Ie({overflow:"visible",originalTransition:"transform .3s var(--n-bezier)",enterToProps:{transform:"scale(1)"},leaveToProps:{transform:"scale(0.85)"}})]),w("message",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 transform .3s var(--n-bezier),
 margin-bottom .3s var(--n-bezier);
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 border: var(--n-border);
 flex-wrap: nowrap;
 overflow: hidden;
 max-width: var(--n-max-width);
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-shadow: var(--n-box-shadow);
 `,[y("content",`
 display: inline-block;
 line-height: var(--n-line-height);
 font-size: var(--n-font-size);
 `),y("icon",`
 position: relative;
 margin: var(--n-icon-margin);
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 flex-shrink: 0;
 `,[["default","info","success","warning","error","loading"].map(r=>x(`${r}-type`,[h("> *",`
 color: var(--n-icon-color-${r});
 transition: color .3s var(--n-bezier);
 `)])),h("> *",`
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 `,[ie()])]),y("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 flex-shrink: 0;
 `,[h("&:hover",`
 color: var(--n-close-icon-color-hover);
 `),h("&:active",`
 color: var(--n-close-icon-color-pressed);
 `)])]),w("message-container",`
 z-index: 6000;
 position: fixed;
 height: 0;
 overflow: visible;
 display: flex;
 flex-direction: column;
 align-items: center;
 `,[x("top",`
 top: 12px;
 left: 0;
 right: 0;
 `),x("top-left",`
 top: 12px;
 left: 12px;
 right: 0;
 align-items: flex-start;
 `),x("top-right",`
 top: 12px;
 left: 0;
 right: 12px;
 align-items: flex-end;
 `),x("bottom",`
 bottom: 4px;
 left: 0;
 right: 0;
 justify-content: flex-end;
 `),x("bottom-left",`
 bottom: 4px;
 left: 12px;
 right: 0;
 justify-content: flex-end;
 align-items: flex-start;
 `),x("bottom-right",`
 bottom: 4px;
 left: 0;
 right: 12px;
 justify-content: flex-end;
 align-items: flex-end;
 `)])]),{computed:O,defineComponent:je,h:f,inject:ze}=await I("vue"),Pe={info:()=>f(he,null),success:()=>f(pe,null),warning:()=>f(me,null),error:()=>f(ge,null),default:()=>null},He=je({name:"Message",props:Object.assign(Object.assign({},A),{render:Function}),setup(r){const{inlineThemeDisabled:e,mergedRtlRef:t}=H(r),{props:o,mergedClsPrefixRef:i}=ze(E),c=ue("Message",t,i),d=M("Message","-message",Se,Oe,o,i),l=O(()=>{const{type:n}=r,{common:{cubicBezierEaseInOut:a},self:{padding:u,margin:p,maxWidth:g,iconMargin:v,closeMargin:b,closeSize:k,iconSize:R,fontSize:B,lineHeight:N,borderRadius:T,border:W,iconColorInfo:F,iconColorSuccess:_,iconColorWarning:K,iconColorError:V,iconColorLoading:q,closeIconSize:Q,closeBorderRadius:U,[C("textColor",n)]:G,[C("boxShadow",n)]:J,[C("color",n)]:X,[C("closeColorHover",n)]:Y,[C("closeColorPressed",n)]:Z,[C("closeIconColor",n)]:D,[C("closeIconColorPressed",n)]:ee,[C("closeIconColorHover",n)]:oe}}=d.value;return{"--n-bezier":a,"--n-margin":p,"--n-padding":u,"--n-max-width":g,"--n-font-size":B,"--n-icon-margin":v,"--n-icon-size":R,"--n-close-icon-size":Q,"--n-close-border-radius":U,"--n-close-size":k,"--n-close-margin":b,"--n-text-color":G,"--n-color":X,"--n-box-shadow":J,"--n-icon-color-info":F,"--n-icon-color-success":_,"--n-icon-color-warning":K,"--n-icon-color-error":V,"--n-icon-color-loading":q,"--n-close-color-hover":Y,"--n-close-color-pressed":Z,"--n-close-icon-color":D,"--n-close-icon-color-pressed":ee,"--n-close-icon-color-hover":oe,"--n-line-height":N,"--n-border-radius":T,"--n-border":W}}),s=e?se("message",O(()=>r.type[0]),l,{}):void 0;return{mergedClsPrefix:i,rtlEnabled:c,messageProviderProps:o,handleClose(){var n;(n=r.onClose)===null||n===void 0||n.call(r)},cssVars:e?void 0:l,themeClass:s?.themeClass,onRender:s?.onRender,placement:o.placement}},render(){const{render:r,type:e,closable:t,content:o,mergedClsPrefix:i,cssVars:c,themeClass:d,onRender:l,icon:s,handleClose:n,showIcon:a}=this;l?.();let u;return f("div",{class:[`${i}-message-wrapper`,d],onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave,style:[{alignItems:this.placement.startsWith("top")?"flex-start":"flex-end"},c]},r?r(this.$props):f("div",{class:[`${i}-message ${i}-message--${e}-type`,this.rtlEnabled&&`${i}-message--rtl`]},(u=Me(s,e,i))&&a?f("div",{class:`${i}-message__icon ${i}-message__icon--${e}-type`},f(ae,null,{default:()=>u})):null,f("div",{class:`${i}-message__content`},le(o)),t?f(de,{clsPrefix:i,class:`${i}-message__close`,onClick:n,absolute:!0}):null))}});function Me(r,e,t){if(typeof r=="function")return r();{const o=e==="loading"?f(ce,{clsPrefix:t,strokeWidth:24,scale:.85}):Pe[e]();return o?f(fe,{clsPrefix:t,key:e},{default:()=>o}):null}}const{defineComponent:Le,h:S,onMounted:Ee,ref:Ae}=await I("vue"),ke=Le({name:"MessageEnvironment",props:Object.assign(Object.assign({},A),{duration:{type:Number,default:3e3},onAfterLeave:Function,onLeave:Function,internalKey:{type:String,required:!0},onInternalAfterLeave:Function,onHide:Function,onAfterHide:Function}),setup(r){let e=null;const t=Ae(!0);Ee(()=>{o()});function o(){const{duration:a}=r;a&&(e=window.setTimeout(d,a))}function i(a){a.currentTarget===a.target&&e!==null&&(window.clearTimeout(e),e=null)}function c(a){a.currentTarget===a.target&&o()}function d(){const{onHide:a}=r;t.value=!1,e&&(window.clearTimeout(e),e=null),a&&a()}function l(){const{onClose:a}=r;a&&a(),d()}function s(){const{onAfterLeave:a,onInternalAfterLeave:u,onAfterHide:p,internalKey:g}=r;a&&a(),u&&u(g),p&&p()}function n(){d()}return{show:t,hide:d,handleClose:l,handleAfterLeave:s,handleMouseleave:c,handleMouseenter:i,deactivate:n}},render(){return S(ve,{appear:!0,onAfterLeave:this.handleAfterLeave,onLeave:this.onLeave},{default:()=>[this.show?S(He,{content:this.content,type:this.type,icon:this.icon,showIcon:this.showIcon,closable:this.closable,onClose:this.handleClose,onMouseenter:this.keepAliveOnHover?this.handleMouseenter:void 0,onMouseleave:this.keepAliveOnHover?this.handleMouseleave:void 0}):null]})}}),{defineComponent:Re,Fragment:Be,h:$,provide:j,reactive:Ne,ref:z,Teleport:Te}=await I("vue"),We=Object.assign(Object.assign({},M.props),{to:[String,Object],duration:{type:Number,default:3e3},keepAliveOnHover:Boolean,max:Number,placement:{type:String,default:"top"},closable:Boolean,containerClass:String,containerStyle:[String,Object]}),Ye=Re({name:"MessageProvider",props:We,setup(r){const{mergedClsPrefixRef:e}=H(r),t=z([]),o=z({}),i={create(s,n){return c(s,Object.assign({type:"default"},n))},info(s,n){return c(s,Object.assign(Object.assign({},n),{type:"info"}))},success(s,n){return c(s,Object.assign(Object.assign({},n),{type:"success"}))},warning(s,n){return c(s,Object.assign(Object.assign({},n),{type:"warning"}))},error(s,n){return c(s,Object.assign(Object.assign({},n),{type:"error"}))},loading(s,n){return c(s,Object.assign(Object.assign({},n),{type:"loading"}))},destroyAll:l};j(E,{props:r,mergedClsPrefixRef:e}),j(L,i);function c(s,n){const a=be(),u=Ne(Object.assign(Object.assign({},n),{content:s,key:a,destroy:()=>{var g;(g=o.value[a])===null||g===void 0||g.hide()}})),{max:p}=r;return p&&t.value.length>=p&&t.value.shift(),t.value.push(u),u}function d(s){t.value.splice(t.value.findIndex(n=>n.key===s),1),delete o.value[s]}function l(){Object.values(o.value).forEach(s=>{s.hide()})}return Object.assign({mergedClsPrefix:e,messageRefs:o,messageList:t,handleAfterLeave:d},i)},render(){var r,e,t;return $(Be,null,(e=(r=this.$slots).default)===null||e===void 0?void 0:e.call(r),this.messageList.length?$(Te,{to:(t=this.to)!==null&&t!==void 0?t:"body"},$("div",{class:[`${this.mergedClsPrefix}-message-container`,`${this.mergedClsPrefix}-message-container--${this.placement}`,this.containerClass],key:"message-container",style:this.containerStyle},this.messageList.map(o=>$(ke,Object.assign({ref:i=>{i&&(this.messageRefs[o.key]=i)},internalKey:o.key,onInternalAfterLeave:this.handleAfterLeave},Ce(o,["destroy"],void 0),{duration:o.duration===void 0?this.duration:o.duration,keepAliveOnHover:o.keepAliveOnHover===void 0?this.keepAliveOnHover:o.keepAliveOnHover,closable:o.closable===void 0?this.closable:o.closable}))))):null)}}),{inject:Fe}=await I("vue");function Ze(){const r=Fe(L,null);return r===null&&te("use-message","No outer <n-message-provider /> founded. See prerequisite in https://www.naiveui.com/en-US/os-theme/components/message for more details. If you want to use `useMessage` outside setup, please check https://www.naiveui.com/zh-CN/os-theme/components/message#Q-&-A."),r}export{Ye as NMessageProvider,Ie as fadeInHeightExpandTransition,We as messageProviderProps,Ce as omit,ye as self,Ze as useMessage};
