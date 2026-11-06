import{c as t,commonVariables as Z,cB as h,insideModal as ee,insidePopover as oe,asModal as re,cM as i,cE as d,resolveWrappedSlot as m,useConfig as te,useTheme as k,createKey as z,useThemeClass as ne,call as de,ensureValidVNode as v}from"./light.DuSxoRPo1793933382902.js";import{importShared as ae}from"./3d-tiles-renderer.DcET3QoP1793933382902.js";import{useRtl as ie}from"./use-rtl.DYUZNIs91793933382902.js";import{getMargin as se}from"./Scrollbar.DMtfl89p1793933382902.js";import{cardLight as le,NBaseClose as ce}from"./light.DdQWvR4Y1793933382902.js";function be(e){return Object.keys(e)}const{cubicBezierEaseIn:y,cubicBezierEaseOut:$}=Z;function Ce({transformOrigin:e="inherit",duration:l=".2s",enterScale:f=".9",originalTransform:o="",originalTransition:c=""}={}){return[t("&.fade-in-scale-up-transition-leave-active",{transformOrigin:e,transition:`opacity ${l} ${y}, transform ${l} ${y} ${c&&`,${c}`}`}),t("&.fade-in-scale-up-transition-enter-active",{transformOrigin:e,transition:`opacity ${l} ${$}, transform ${l} ${$} ${c&&`,${c}`}`}),t("&.fade-in-scale-up-transition-enter-from, &.fade-in-scale-up-transition-leave-to",{opacity:0,transform:`${o} scale(${f})`}),t("&.fade-in-scale-up-transition-leave-from, &.fade-in-scale-up-transition-enter-to",{opacity:1,transform:`${o} scale(1)`})]}const fe=t([h("card",`
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 display: flex;
 flex-direction: column;
 width: 100%;
 box-sizing: border-box;
 position: relative;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 color: var(--n-text-color);
 word-break: break-word;
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[re({background:"var(--n-color-modal)"}),i("hoverable",[t("&:hover","box-shadow: var(--n-box-shadow);")]),i("content-segmented",[t(">",[d("content",{paddingTop:"var(--n-padding-bottom)"})])]),i("content-soft-segmented",[t(">",[d("content",`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]),i("footer-segmented",[t(">",[d("footer",{paddingTop:"var(--n-padding-bottom)"})])]),i("footer-soft-segmented",[t(">",[d("footer",`
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]),t(">",[h("card-header",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `,[d("main",`
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 min-width: 0;
 color: var(--n-title-text-color);
 `),d("extra",`
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),d("close",`
 margin: 0 0 0 8px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),d("action",`
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `),d("content","flex: 1; min-width: 0;"),d("content, footer",`
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `,[t("&:first-child",{paddingTop:"var(--n-padding-bottom)"})]),d("action",`
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]),h("card-cover",`
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `,[t("img",`
 display: block;
 width: 100%;
 `)]),i("bordered",`
 border: 1px solid var(--n-border-color);
 `,[t("&:target","border-color: var(--n-color-target);")]),i("action-segmented",[t(">",[d("action",[t("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),i("content-segmented, content-soft-segmented",[t(">",[d("content",{transition:"border-color 0.3s var(--n-bezier)"},[t("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),i("footer-segmented, footer-soft-segmented",[t(">",[d("footer",{transition:"border-color 0.3s var(--n-bezier)"},[t("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),i("embedded",`
 background-color: var(--n-color-embedded);
 `)]),ee(h("card",`
 background: var(--n-color-modal);
 `,[i("embedded",`
 background-color: var(--n-color-embedded-modal);
 `)])),oe(h("card",`
 background: var(--n-color-popover);
 `,[i("embedded",`
 background-color: var(--n-color-embedded-popover);
 `)]))]),{computed:S,defineComponent:ge,h:s}=await ae("vue"),w={title:[String,Function],contentClass:String,contentStyle:[Object,String],headerClass:String,headerStyle:[Object,String],headerExtraClass:String,headerExtraStyle:[Object,String],footerClass:String,footerStyle:[Object,String],embedded:Boolean,segmented:{type:[Boolean,Object],default:!1},size:{type:String,default:"medium"},bordered:{type:Boolean,default:!0},closable:Boolean,hoverable:Boolean,role:String,onClose:[Function,Array],tag:{type:String,default:"div"},cover:Function,content:[String,Function],footer:Function,action:Function,headerExtra:Function,closeFocusable:Boolean},ze=be(w),me=Object.assign(Object.assign({},k.props),w),ye=ge({name:"Card",props:me,slots:Object,setup(e){const l=()=>{const{onClose:n}=e;n&&de(n)},{inlineThemeDisabled:f,mergedClsPrefixRef:o,mergedRtlRef:c}=te(e),g=k("Card","-card",fe,le,e,o),x=ie("Card",c,o),p=S(()=>{const{size:n}=e,{self:{color:r,colorModal:b,colorTarget:C,textColor:u,titleTextColor:E,titleFontWeight:B,borderColor:F,actionColor:P,borderRadius:R,lineHeight:_,closeIconColor:O,closeIconColorHover:T,closeIconColorPressed:j,closeColorHover:I,closeColorPressed:M,closeBorderRadius:V,closeIconSize:H,closeSize:N,boxShadow:K,colorPopover:L,colorEmbedded:W,colorEmbeddedModal:A,colorEmbeddedPopover:D,[z("padding",n)]:U,[z("fontSize",n)]:q,[z("titleFontSize",n)]:G},common:{cubicBezierEaseInOut:J}}=g.value,{top:Q,left:X,bottom:Y}=se(U);return{"--n-bezier":J,"--n-border-radius":R,"--n-color":r,"--n-color-modal":b,"--n-color-popover":L,"--n-color-embedded":W,"--n-color-embedded-modal":A,"--n-color-embedded-popover":D,"--n-color-target":C,"--n-text-color":u,"--n-line-height":_,"--n-action-color":P,"--n-title-text-color":E,"--n-title-font-weight":B,"--n-close-icon-color":O,"--n-close-icon-color-hover":T,"--n-close-icon-color-pressed":j,"--n-close-color-hover":I,"--n-close-color-pressed":M,"--n-border-color":F,"--n-box-shadow":K,"--n-padding-top":Q,"--n-padding-bottom":Y,"--n-padding-left":X,"--n-font-size":q,"--n-title-font-size":G,"--n-close-size":N,"--n-close-icon-size":H,"--n-close-border-radius":V}}),a=f?ne("card",S(()=>e.size[0]),p,e):void 0;return{rtlEnabled:x,mergedClsPrefix:o,mergedTheme:g,handleCloseClick:l,cssVars:f?void 0:p,themeClass:a?.themeClass,onRender:a?.onRender}},render(){const{segmented:e,bordered:l,hoverable:f,mergedClsPrefix:o,rtlEnabled:c,onRender:g,embedded:x,tag:p,$slots:a}=this;return g?.(),s(p,{class:[`${o}-card`,this.themeClass,x&&`${o}-card--embedded`,{[`${o}-card--rtl`]:c,[`${o}-card--content${typeof e!="boolean"&&e.content==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.content,[`${o}-card--footer${typeof e!="boolean"&&e.footer==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.footer,[`${o}-card--action-segmented`]:e===!0||e!==!1&&e.action,[`${o}-card--bordered`]:l,[`${o}-card--hoverable`]:f}],style:this.cssVars,role:this.role},m(a.cover,n=>{const r=this.cover?v([this.cover()]):n;return r&&s("div",{class:`${o}-card-cover`,role:"none"},r)}),m(a.header,n=>{const{title:r}=this,b=r?v(typeof r=="function"?[r()]:[r]):n;return b||this.closable?s("div",{class:[`${o}-card-header`,this.headerClass],style:this.headerStyle,role:"heading"},s("div",{class:`${o}-card-header__main`,role:"heading"},b),m(a["header-extra"],C=>{const u=this.headerExtra?v([this.headerExtra()]):C;return u&&s("div",{class:[`${o}-card-header__extra`,this.headerExtraClass],style:this.headerExtraStyle},u)}),this.closable&&s(ce,{clsPrefix:o,class:`${o}-card-header__close`,onClick:this.handleCloseClick,focusable:this.closeFocusable,absolute:!0})):null}),m(a.default,n=>{const{content:r}=this,b=r?v(typeof r=="function"?[r()]:[r]):n;return b&&s("div",{class:[`${o}-card__content`,this.contentClass],style:this.contentStyle,role:"none"},b)}),m(a.footer,n=>{const r=this.footer?v([this.footer()]):n;return r&&s("div",{class:[`${o}-card__footer`,this.footerClass],style:this.footerStyle,role:"none"},r)}),m(a.action,n=>{const r=this.action?v([this.action()]):n;return r&&s("div",{class:`${o}-card__action`,role:"none"},r)}))}});export{ye as NCard,ze as cardBasePropKeys,w as cardBaseProps,me as cardProps,Ce as fadeInScaleUpTransition,be as keysOf};
