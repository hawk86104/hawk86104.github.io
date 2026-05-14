import{importShared as _}from"./3d-tiles-renderer.SzstPcaT1778740850391.js";import{derived as D,composite as C,c as g,cB as r,insideModal as q,insidePopover as J,cNotM as Y,cM as $,cE as v,useConfig as L,useTheme as y,createKey as F,useThemeClass as H,createInjectionKey as Z,throwError as ee}from"./light.CNkfQ5k91778740850391.js";import{flatten as oe,repeat as re}from"./Scrollbar.D7PGUpQz1778740850391.js";import{getSlot as te}from"./Space.Cm5MuPVX1778740850391.js";import{useCompitable as ne}from"./use-compitable.DbzEvT6_1778740850391.js";import{kebabCase as ie}from"./index.CVd4Rgkn1778740850391.js";import{useRtl as Q}from"./use-rtl.DmSwU7Xb1778740850391.js";function K(e,o="default",t=[]){const{children:i}=e;if(i!==null&&typeof i=="object"&&!Array.isArray(i)){const l=i[o];if(typeof l=="function")return l()}return t}const le={thPaddingBorderedSmall:"8px 12px",thPaddingBorderedMedium:"12px 16px",thPaddingBorderedLarge:"16px 24px",thPaddingSmall:"0",thPaddingMedium:"0",thPaddingLarge:"0",tdPaddingBorderedSmall:"8px 12px",tdPaddingBorderedMedium:"12px 16px",tdPaddingBorderedLarge:"16px 24px",tdPaddingSmall:"0 0 8px 0",tdPaddingMedium:"0 0 12px 0",tdPaddingLarge:"0 0 16px 0"};function de(e){const{tableHeaderColor:o,textColor2:t,textColor1:i,cardColor:l,modalColor:n,popoverColor:s,dividerColor:c,borderRadius:h,fontWeightStrong:f,lineHeight:d,fontSizeSmall:a,fontSizeMedium:x,fontSizeLarge:u}=e;return Object.assign(Object.assign({},le),{lineHeight:d,fontSizeSmall:a,fontSizeMedium:x,fontSizeLarge:u,titleTextColor:i,thColor:C(l,o),thColorModal:C(n,o),thColorPopover:C(s,o),thTextColor:i,thFontWeight:f,tdTextColor:t,tdColor:l,tdColorModal:n,tdColorPopover:s,borderColor:C(l,c),borderColorModal:C(n,c),borderColorPopover:C(s,c),borderRadius:h})}const ae={common:D,self:de},se=g([r("descriptions",{fontSize:"var(--n-font-size)"},[r("descriptions-separator",`
 display: inline-block;
 margin: 0 8px 0 2px;
 `),r("descriptions-table-wrapper",[r("descriptions-table",[r("descriptions-table-row",[r("descriptions-table-header",{padding:"var(--n-th-padding)"}),r("descriptions-table-content",{padding:"var(--n-td-padding)"})])])]),Y("bordered",[r("descriptions-table-wrapper",[r("descriptions-table",[r("descriptions-table-row",[g("&:last-child",[r("descriptions-table-content",{paddingBottom:0})])])])])]),$("left-label-placement",[r("descriptions-table-content",[g("> *",{verticalAlign:"top"})])]),$("left-label-align",[g("th",{textAlign:"left"})]),$("center-label-align",[g("th",{textAlign:"center"})]),$("right-label-align",[g("th",{textAlign:"right"})]),$("bordered",[r("descriptions-table-wrapper",`
 border-radius: var(--n-border-radius);
 overflow: hidden;
 background: var(--n-merged-td-color);
 border: 1px solid var(--n-merged-border-color);
 `,[r("descriptions-table",[r("descriptions-table-row",[g("&:not(:last-child)",[r("descriptions-table-content",{borderBottom:"1px solid var(--n-merged-border-color)"}),r("descriptions-table-header",{borderBottom:"1px solid var(--n-merged-border-color)"})]),r("descriptions-table-header",`
 font-weight: 400;
 background-clip: padding-box;
 background-color: var(--n-merged-th-color);
 `,[g("&:not(:last-child)",{borderRight:"1px solid var(--n-merged-border-color)"})]),r("descriptions-table-content",[g("&:not(:last-child)",{borderRight:"1px solid var(--n-merged-border-color)"})])])])])]),r("descriptions-header",`
 font-weight: var(--n-th-font-weight);
 font-size: 18px;
 transition: color .3s var(--n-bezier);
 line-height: var(--n-line-height);
 margin-bottom: 16px;
 color: var(--n-title-text-color);
 `),r("descriptions-table-wrapper",`
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[r("descriptions-table",`
 width: 100%;
 border-collapse: separate;
 border-spacing: 0;
 box-sizing: border-box;
 `,[r("descriptions-table-row",`
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `,[r("descriptions-table-header",`
 font-weight: var(--n-th-font-weight);
 line-height: var(--n-line-height);
 display: table-cell;
 box-sizing: border-box;
 color: var(--n-th-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),r("descriptions-table-content",`
 vertical-align: top;
 line-height: var(--n-line-height);
 display: table-cell;
 box-sizing: border-box;
 color: var(--n-td-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[v("content",`
 transition: color .3s var(--n-bezier);
 display: inline-block;
 color: var(--n-td-text-color);
 `)]),v("label",`
 font-weight: var(--n-th-font-weight);
 transition: color .3s var(--n-bezier);
 display: inline-block;
 margin-right: 14px;
 color: var(--n-th-text-color);
 `)])])])]),r("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color);
 --n-merged-td-color: var(--n-td-color);
 --n-merged-border-color: var(--n-border-color);
 `),q(r("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color-modal);
 --n-merged-td-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)),J(r("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color-popover);
 --n-merged-td-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]),U="DESCRIPTION_ITEM_FLAG";function ce(e){return typeof e=="object"&&e&&!Array.isArray(e)?e.type&&e.type[U]:!1}const{computed:G,defineComponent:he,h:m}=await _("vue"),be=Object.assign(Object.assign({},y.props),{title:String,column:{type:Number,default:3},columns:Number,labelPlacement:{type:String,default:"top"},labelAlign:{type:String,default:"left"},separator:{type:String,default:":"},size:{type:String,default:"medium"},bordered:Boolean,labelClass:String,labelStyle:[Object,String],contentClass:String,contentStyle:[Object,String]}),We=he({name:"Descriptions",props:be,slots:Object,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:t}=L(e),i=y("Descriptions","-descriptions",se,ae,e,o),l=G(()=>{const{size:s,bordered:c}=e,{common:{cubicBezierEaseInOut:h},self:{titleTextColor:f,thColor:d,thColorModal:a,thColorPopover:x,thTextColor:u,thFontWeight:z,tdTextColor:j,tdColor:B,tdColorModal:O,tdColorPopover:b,borderColor:S,borderColorModal:E,borderColorPopover:w,borderRadius:P,lineHeight:k,[F("fontSize",s)]:I,[F(c?"thPaddingBordered":"thPadding",s)]:R,[F(c?"tdPaddingBordered":"tdPadding",s)]:M}}=i.value;return{"--n-title-text-color":f,"--n-th-padding":R,"--n-td-padding":M,"--n-font-size":I,"--n-bezier":h,"--n-th-font-weight":z,"--n-line-height":k,"--n-th-text-color":u,"--n-td-text-color":j,"--n-th-color":d,"--n-th-color-modal":a,"--n-th-color-popover":x,"--n-td-color":B,"--n-td-color-modal":O,"--n-td-color-popover":b,"--n-border-radius":P,"--n-border-color":S,"--n-border-color-modal":E,"--n-border-color-popover":w}}),n=t?H("descriptions",G(()=>{let s="";const{size:c,bordered:h}=e;return h&&(s+="a"),s+=c[0],s}),l,e):void 0;return{mergedClsPrefix:o,cssVars:t?void 0:l,themeClass:n?.themeClass,onRender:n?.onRender,compitableColumn:ne(e,["columns","column"]),inlineThemeDisabled:t}},render(){const e=this.$slots.default,o=e?oe(e()):[];o.length;const{contentClass:t,labelClass:i,compitableColumn:l,labelPlacement:n,labelAlign:s,size:c,bordered:h,title:f,cssVars:d,mergedClsPrefix:a,separator:x,onRender:u}=this;u?.();const z=o.filter(b=>ce(b)),j={span:0,row:[],secondRow:[],rows:[]},O=z.reduce((b,S,E)=>{const w=S.props||{},P=z.length-1===E,k=["label"in w?w.label:K(S,"label")],I=[K(S)],R=w.span||1,M=b.span;b.span+=R;const A=w.labelStyle||w["label-style"]||this.labelStyle,V=w.contentStyle||w["content-style"]||this.contentStyle;if(n==="left")h?b.row.push(m("th",{class:[`${a}-descriptions-table-header`,i],colspan:1,style:A},k),m("td",{class:[`${a}-descriptions-table-content`,t],colspan:P?(l-M)*2+1:R*2-1,style:V},I)):b.row.push(m("td",{class:`${a}-descriptions-table-content`,colspan:P?(l-M)*2:R*2},m("span",{class:[`${a}-descriptions-table-content__label`,i],style:A},[...k,x&&m("span",{class:`${a}-descriptions-separator`},x)]),m("span",{class:[`${a}-descriptions-table-content__content`,t],style:V},I)));else{const W=P?(l-M)*2:R*2;b.row.push(m("th",{class:[`${a}-descriptions-table-header`,i],colspan:W,style:A},k)),b.secondRow.push(m("td",{class:[`${a}-descriptions-table-content`,t],colspan:W,style:V},I))}return(b.span>=l||P)&&(b.span=0,b.row.length&&(b.rows.push(b.row),b.row=[]),n!=="left"&&b.secondRow.length&&(b.rows.push(b.secondRow),b.secondRow=[])),b},j).rows.map(b=>m("tr",{class:`${a}-descriptions-table-row`},b));return m("div",{style:d,class:[`${a}-descriptions`,this.themeClass,`${a}-descriptions--${n}-label-placement`,`${a}-descriptions--${s}-label-align`,`${a}-descriptions--${c}-size`,h&&`${a}-descriptions--bordered`]},f||this.$slots.header?m("div",{class:`${a}-descriptions-header`},f||te(this,"header")):null,m("div",{class:`${a}-descriptions-table-wrapper`},m("table",{class:`${a}-descriptions-table`},m("tbody",null,n==="top"&&m("tr",{class:`${a}-descriptions-table-row`,style:{visibility:"collapse"}},re(l*2,m("td",null))),O))))}}),{defineComponent:pe}=await _("vue"),ge={label:String,span:{type:Number,default:1},labelClass:String,labelStyle:[Object,String],contentClass:String,contentStyle:[Object,String]},Ke=pe({name:"DescriptionsItem",[U]:!0,props:ge,slots:Object,render(){return null}}),me={common:D},{computed:ve,defineComponent:fe,h:ue}=await _("vue"),xe=Object.assign(Object.assign({},y.props),{tag:{type:String,default:"div"}}),Ge=fe({name:"Element",alias:["El"],props:xe,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:t}=L(e),i=y("Element","-element",void 0,me,e,o),l=ve(()=>{const{common:s}=i.value;return Object.keys(s).reduce((c,h)=>(c[`--${ie(h)}`]=s[h],c),{})}),n=t?H("element",void 0,l,e):void 0;return{mergedClsPrefix:o,cssVars:t?void 0:l,themeClass:n?.themeClass,onRender:n?.onRender}},render(){var e;const{tag:o,mergedClsPrefix:t,cssVars:i,themeClass:l,onRender:n,$slots:s}=this;return n?.(),ue(o,{role:"none",class:[`${t}-element`,l],style:i},(e=s.default)===null||e===void 0?void 0:e.call(s))}});function Ce(e){const{textColor2:o,cardColor:t,modalColor:i,popoverColor:l,dividerColor:n,borderRadius:s,fontSize:c,hoverColor:h}=e;return{textColor:o,color:t,colorHover:h,colorModal:i,colorHoverModal:C(i,h),colorPopover:l,colorHoverPopover:C(l,h),borderColor:n,borderColorModal:C(i,n),borderColorPopover:C(l,n),borderRadius:s,fontSize:c}}const $e={common:D,self:Ce};function we(e){const{textColor1:o,textColor2:t,fontWeightStrong:i,fontSize:l}=e;return{fontSize:l,titleTextColor:o,textColor:t,titleFontWeight:i}}const ye={common:D,self:we},Se=g([r("list",`
 --n-merged-border-color: var(--n-border-color);
 --n-merged-color: var(--n-color);
 --n-merged-color-hover: var(--n-color-hover);
 margin: 0;
 font-size: var(--n-font-size);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 padding: 0;
 list-style-type: none;
 color: var(--n-text-color);
 background-color: var(--n-merged-color);
 `,[$("show-divider",[r("list-item",[g("&:not(:last-child)",[v("divider",`
 background-color: var(--n-merged-border-color);
 `)])])]),$("clickable",[r("list-item",`
 cursor: pointer;
 `)]),$("bordered",`
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `),$("hoverable",[r("list-item",`
 border-radius: var(--n-border-radius);
 `,[g("&:hover",`
 background-color: var(--n-merged-color-hover);
 `,[v("divider",`
 background-color: transparent;
 `)])])]),$("bordered, hoverable",[r("list-item",`
 padding: 12px 20px;
 `),v("header, footer",`
 padding: 12px 20px;
 `)]),v("header, footer",`
 padding: 12px 0;
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `,[g("&:not(:last-child)",`
 border-bottom: 1px solid var(--n-merged-border-color);
 `)]),r("list-item",`
 position: relative;
 padding: 12px 0; 
 box-sizing: border-box;
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[v("prefix",`
 margin-right: 20px;
 flex: 0;
 `),v("suffix",`
 margin-left: 20px;
 flex: 0;
 `),v("main",`
 flex: 1;
 `),v("divider",`
 height: 1px;
 position: absolute;
 bottom: 0;
 left: 0;
 right: 0;
 background-color: transparent;
 transition: background-color .3s var(--n-bezier);
 pointer-events: none;
 `)])]),q(r("list",`
 --n-merged-color-hover: var(--n-color-hover-modal);
 --n-merged-color: var(--n-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)),J(r("list",`
 --n-merged-color-hover: var(--n-color-hover-popover);
 --n-merged-color: var(--n-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]),{computed:ze,defineComponent:Pe,h:N,provide:Re,toRef:_e}=await _("vue"),je=Object.assign(Object.assign({},y.props),{size:{type:String,default:"medium"},bordered:Boolean,clickable:Boolean,hoverable:Boolean,showDivider:{type:Boolean,default:!0}}),X=Z("n-list"),qe=Pe({name:"List",props:je,slots:Object,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:t,mergedRtlRef:i}=L(e),l=Q("List",i,o),n=y("List","-list",Se,$e,e,o);Re(X,{showDividerRef:_e(e,"showDivider"),mergedClsPrefixRef:o});const s=ze(()=>{const{common:{cubicBezierEaseInOut:h},self:{fontSize:f,textColor:d,color:a,colorModal:x,colorPopover:u,borderColor:z,borderColorModal:j,borderColorPopover:B,borderRadius:O,colorHover:b,colorHoverModal:S,colorHoverPopover:E}}=n.value;return{"--n-font-size":f,"--n-bezier":h,"--n-text-color":d,"--n-color":a,"--n-border-radius":O,"--n-border-color":z,"--n-border-color-modal":j,"--n-border-color-popover":B,"--n-color-modal":x,"--n-color-popover":u,"--n-color-hover":b,"--n-color-hover-modal":S,"--n-color-hover-popover":E}}),c=t?H("list",void 0,s,e):void 0;return{mergedClsPrefix:o,rtlEnabled:l,cssVars:t?void 0:s,themeClass:c?.themeClass,onRender:c?.onRender}},render(){var e;const{$slots:o,mergedClsPrefix:t,onRender:i}=this;return i?.(),N("ul",{class:[`${t}-list`,this.rtlEnabled&&`${t}-list--rtl`,this.bordered&&`${t}-list--bordered`,this.showDivider&&`${t}-list--show-divider`,this.hoverable&&`${t}-list--hoverable`,this.clickable&&`${t}-list--clickable`,this.themeClass],style:this.cssVars},o.header?N("div",{class:`${t}-list__header`},o.header()):null,(e=o.default)===null||e===void 0?void 0:e.call(o),o.footer?N("div",{class:`${t}-list__footer`},o.footer()):null)}}),{defineComponent:Oe,h:T,inject:Ee}=await _("vue"),Je=Oe({name:"ListItem",slots:Object,setup(){const e=Ee(X,null);return e||ee("list-item","`n-list-item` must be placed in `n-list`."),{showDivider:e.showDividerRef,mergedClsPrefix:e.mergedClsPrefixRef}},render(){const{$slots:e,mergedClsPrefix:o}=this;return T("li",{class:`${o}-list-item`},e.prefix?T("div",{class:`${o}-list-item__prefix`},e.prefix()):null,e.default?T("div",{class:`${o}-list-item__main`},e):null,e.suffix?T("div",{class:`${o}-list-item__suffix`},e.suffix()):null,this.showDivider&&T("div",{class:`${o}-list-item__divider`}))}}),ke=r("thing",`
 display: flex;
 transition: color .3s var(--n-bezier);
 font-size: var(--n-font-size);
 color: var(--n-text-color);
`,[r("thing-avatar",`
 margin-right: 12px;
 margin-top: 2px;
 `),r("thing-avatar-header-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 `,[r("thing-header-wrapper",`
 flex: 1;
 `)]),r("thing-main",`
 flex-grow: 1;
 `,[r("thing-header",`
 display: flex;
 margin-bottom: 4px;
 justify-content: space-between;
 align-items: center;
 `,[v("title",`
 font-size: 16px;
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 color: var(--n-title-text-color);
 `)]),v("description",[g("&:not(:last-child)",`
 margin-bottom: 4px;
 `)]),v("content",[g("&:not(:first-child)",`
 margin-top: 12px;
 `)]),v("footer",[g("&:not(:first-child)",`
 margin-top: 12px;
 `)]),v("action",[g("&:not(:first-child)",`
 margin-top: 12px;
 `)])])]),{computed:Ie,defineComponent:Me,Fragment:Te,h:p}=await _("vue"),Be=Object.assign(Object.assign({},y.props),{title:String,titleExtra:String,description:String,descriptionClass:String,descriptionStyle:[String,Object],content:String,contentClass:String,contentStyle:[String,Object],contentIndented:Boolean}),Qe=Me({name:"Thing",props:Be,slots:Object,setup(e,{slots:o}){const{mergedClsPrefixRef:t,inlineThemeDisabled:i,mergedRtlRef:l}=L(e),n=y("Thing","-thing",ke,ye,e,t),s=Q("Thing",l,t),c=Ie(()=>{const{self:{titleTextColor:f,textColor:d,titleFontWeight:a,fontSize:x},common:{cubicBezierEaseInOut:u}}=n.value;return{"--n-bezier":u,"--n-font-size":x,"--n-text-color":d,"--n-title-font-weight":a,"--n-title-text-color":f}}),h=i?H("thing",void 0,c,e):void 0;return()=>{var f;const{value:d}=t,a=s?s.value:!1;return(f=h?.onRender)===null||f===void 0||f.call(h),p("div",{class:[`${d}-thing`,h?.themeClass,a&&`${d}-thing--rtl`],style:i?void 0:c.value},o.avatar&&e.contentIndented?p("div",{class:`${d}-thing-avatar`},o.avatar()):null,p("div",{class:`${d}-thing-main`},!e.contentIndented&&(o.header||e.title||o["header-extra"]||e.titleExtra||o.avatar)?p("div",{class:`${d}-thing-avatar-header-wrapper`},o.avatar?p("div",{class:`${d}-thing-avatar`},o.avatar()):null,o.header||e.title||o["header-extra"]||e.titleExtra?p("div",{class:`${d}-thing-header-wrapper`},p("div",{class:`${d}-thing-header`},o.header||e.title?p("div",{class:`${d}-thing-header__title`},o.header?o.header():e.title):null,o["header-extra"]||e.titleExtra?p("div",{class:`${d}-thing-header__extra`},o["header-extra"]?o["header-extra"]():e.titleExtra):null),o.description||e.description?p("div",{class:[`${d}-thing-main__description`,e.descriptionClass],style:e.descriptionStyle},o.description?o.description():e.description):null):null):p(Te,null,o.header||e.title||o["header-extra"]||e.titleExtra?p("div",{class:`${d}-thing-header`},o.header||e.title?p("div",{class:`${d}-thing-header__title`},o.header?o.header():e.title):null,o["header-extra"]||e.titleExtra?p("div",{class:`${d}-thing-header__extra`},o["header-extra"]?o["header-extra"]():e.titleExtra):null):null,o.description||e.description?p("div",{class:[`${d}-thing-main__description`,e.descriptionClass],style:e.descriptionStyle},o.description?o.description():e.description):null),o.default||e.content?p("div",{class:[`${d}-thing-main__content`,e.contentClass],style:e.contentStyle},o.default?o.default():e.content):null,o.footer?p("div",{class:`${d}-thing-main__footer`},o.footer()):null,o.action?p("div",{class:`${d}-thing-main__action`},o.action()):null))}}});export{We as NDescriptions,Ke as NDescriptionsItem,Ge as NElement,qe as NList,Je as NListItem,Qe as NThing,ge as descriptionsItemProps,be as descriptionsProps,xe as elementProps,je as listProps,de as self,Ce as self$1,we as self$2,Be as thingProps};
