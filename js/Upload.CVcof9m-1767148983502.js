import{importShared as T}from"./3d-tiles-renderer.DZNovkLO1767148983502.js";import{useRtl as Wt,isMounted as fo,useMemo as ho}from"./use-rtl.q0hodkC81767148983502.js";import{fadeInHeightExpandTransition as pt,omit as go}from"./use-message.BBJznJob1767148983502.js";import{derived as Ie,composite as fe,changeColor as se,cB as v,cE as V,cM as E,c as U,resolveSlot as bt,resolveWrappedSlot as po,useConfig as pe,useTheme as le,createKey as oe,useThemeClass as Le,throwError as ve,createTheme as Vt,createInjectionKey as wt,cNotM as vo,call as ce,murmur2 as mo,error as Ot,warn as bo}from"./light.Bp388JKA1767148983502.js";import{NFadeInExpandTransition as Ct}from"./browser.DwR5nDQ71767148983502.js";import{NBaseClose as wo,useLocale as Co}from"./Suffix.D4O-Hju71767148983502.js";import{replaceable as de,NBaseIcon as q}from"./Close.BeIyDfIs1767148983502.js";import{ErrorIcon as yt,WarningIcon as xt,InfoIcon as Rt,SuccessIcon as $t}from"./Warning.CwdGGzpm1767148983502.js";import{getMargin as yo,createId as Xe,fadeInTransition as vt,pxfy as xo}from"./Scrollbar.BsFc6odp1767148983502.js";import{dialogApiInjectionKey as Xt,dialogReactiveListInjectionKey as qt,NModal as Ro,NDialog as $o,dialogPropKeys as So,dialogProps as ko,dialogProviderInjectionKey as Po,useClickPosition as zo,useClicked as Io}from"./Modal.gAO5b5xb1767148983502.js";import{keep as Lo,LazyTeleport as Oo,zindexable as To}from"./keep.Bwm3V3-L1767148983502.js";import{isBrowser as Gt,NBaseLoading as Bo,iconSwitchTransition as Do,NIconSwitchTransition as jo,useFormItem as Eo}from"./Loading.DOiIlXyA1767148983502.js";import{useCompitable as Fo}from"./use-compitable.DdqYCU_J1767148983502.js";import{formatLength as be}from"./format-length.BHvmju661767148983502.js";import{fadeInScaleUpTransition as Mo}from"./Card.CLGorf6I1767148983502.js";import{tooltipLight as Uo,NTooltip as No}from"./Tooltip.OuYxhOxT1767148983502.js";import{useMergedState as qe,on as Ke,off as Be}from"./use-merged-state.qnrvbG9d1767148983502.js";import{kebabCase as _o}from"./index.DTe2qqjO1767148983502.js";import{beforeNextFrameOnce as Ao}from"./Popover.caJSk_RB1767148983502.js";import{buttonLight as Ho,Button as De}from"./Button.DslW6U6X1767148983502.js";import{EyeIcon as Wo}from"./Input.FhrARThI1767148983502.js";import{AddIcon as Vo}from"./Add.BlZG3onn1767148983502.js";function St(e,t){if(!e)return;const o=document.createElement("a");o.href=e,t!==void 0&&(o.download=t),document.body.appendChild(o),o.click(),document.body.removeChild(o)}function Bi(e,t){St(e,t)}const{h:je}=await T("vue"),Xo=de("attach",()=>je("svg",{viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},je("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},je("g",{fill:"currentColor","fill-rule":"nonzero"},je("path",{d:"M3.25735931,8.70710678 L7.85355339,4.1109127 C8.82986412,3.13460197 10.4127766,3.13460197 11.3890873,4.1109127 C12.365398,5.08722343 12.365398,6.67013588 11.3890873,7.64644661 L6.08578644,12.9497475 C5.69526215,13.3402718 5.06209717,13.3402718 4.67157288,12.9497475 C4.28104858,12.5592232 4.28104858,11.9260582 4.67157288,11.5355339 L9.97487373,6.23223305 C10.1701359,6.0369709 10.1701359,5.72038841 9.97487373,5.52512627 C9.77961159,5.32986412 9.4630291,5.32986412 9.26776695,5.52512627 L3.96446609,10.8284271 C3.18341751,11.6094757 3.18341751,12.8758057 3.96446609,13.6568542 C4.74551468,14.4379028 6.01184464,14.4379028 6.79289322,13.6568542 L12.0961941,8.35355339 C13.4630291,6.98671837 13.4630291,4.77064094 12.0961941,3.40380592 C10.7293591,2.0369709 8.51328163,2.0369709 7.14644661,3.40380592 L2.55025253,8 C2.35499039,8.19526215 2.35499039,8.51184464 2.55025253,8.70710678 C2.74551468,8.90236893 3.06209717,8.90236893 3.25735931,8.70710678 Z"}))))),{h:Ee}=await T("vue"),qo=de("cancel",()=>Ee("svg",{viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},Ee("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},Ee("g",{fill:"currentColor","fill-rule":"nonzero"},Ee("path",{d:"M2.58859116,2.7156945 L2.64644661,2.64644661 C2.82001296,2.47288026 3.08943736,2.45359511 3.2843055,2.58859116 L3.35355339,2.64644661 L8,7.293 L12.6464466,2.64644661 C12.8417088,2.45118446 13.1582912,2.45118446 13.3535534,2.64644661 C13.5488155,2.84170876 13.5488155,3.15829124 13.3535534,3.35355339 L8.707,8 L13.3535534,12.6464466 C13.5271197,12.820013 13.5464049,13.0894374 13.4114088,13.2843055 L13.3535534,13.3535534 C13.179987,13.5271197 12.9105626,13.5464049 12.7156945,13.4114088 L12.6464466,13.3535534 L8,8.707 L3.35355339,13.3535534 C3.15829124,13.5488155 2.84170876,13.5488155 2.64644661,13.3535534 C2.45118446,13.1582912 2.45118446,12.8417088 2.64644661,12.6464466 L7.293,8 L2.64644661,3.35355339 C2.47288026,3.17998704 2.45359511,2.91056264 2.58859116,2.7156945 L2.64644661,2.64644661 L2.58859116,2.7156945 Z"}))))),{h:Fe}=await T("vue"),Zt=de("download",()=>Fe("svg",{viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},Fe("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},Fe("g",{fill:"currentColor","fill-rule":"nonzero"},Fe("path",{d:"M3.5,13 L12.5,13 C12.7761424,13 13,13.2238576 13,13.5 C13,13.7454599 12.8231248,13.9496084 12.5898756,13.9919443 L12.5,14 L3.5,14 C3.22385763,14 3,13.7761424 3,13.5 C3,13.2545401 3.17687516,13.0503916 3.41012437,13.0080557 L3.5,13 L12.5,13 L3.5,13 Z M7.91012437,1.00805567 L8,1 C8.24545989,1 8.44960837,1.17687516 8.49194433,1.41012437 L8.5,1.5 L8.5,10.292 L11.1819805,7.6109127 C11.3555469,7.43734635 11.6249713,7.4180612 11.8198394,7.55305725 L11.8890873,7.6109127 C12.0626536,7.78447906 12.0819388,8.05390346 11.9469427,8.2487716 L11.8890873,8.31801948 L8.35355339,11.8535534 C8.17998704,12.0271197 7.91056264,12.0464049 7.7156945,11.9114088 L7.64644661,11.8535534 L4.1109127,8.31801948 C3.91565056,8.12275734 3.91565056,7.80617485 4.1109127,7.6109127 C4.28447906,7.43734635 4.55390346,7.4180612 4.7487716,7.55305725 L4.81801948,7.6109127 L7.5,10.292 L7.5,1.5 C7.5,1.25454011 7.67687516,1.05039163 7.91012437,1.00805567 L8,1 L7.91012437,1.00805567 Z"}))))),{defineComponent:Go,h:Je}=await T("vue"),Zo=Go({name:"ResizeSmall",render(){return Je("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},Je("g",{fill:"none"},Je("path",{d:"M5.5 4A1.5 1.5 0 0 0 4 5.5v1a.5.5 0 0 1-1 0v-1A2.5 2.5 0 0 1 5.5 3h1a.5.5 0 0 1 0 1h-1zM16 5.5A1.5 1.5 0 0 0 14.5 4h-1a.5.5 0 0 1 0-1h1A2.5 2.5 0 0 1 17 5.5v1a.5.5 0 0 1-1 0v-1zm0 9a1.5 1.5 0 0 1-1.5 1.5h-1a.5.5 0 0 0 0 1h1a2.5 2.5 0 0 0 2.5-2.5v-1a.5.5 0 0 0-1 0v1zm-12 0A1.5 1.5 0 0 0 5.5 16h1.25a.5.5 0 0 1 0 1H5.5A2.5 2.5 0 0 1 3 14.5v-1.25a.5.5 0 0 1 1 0v1.25zM8.5 7A1.5 1.5 0 0 0 7 8.5v3A1.5 1.5 0 0 0 8.5 13h3a1.5 1.5 0 0 0 1.5-1.5v-3A1.5 1.5 0 0 0 11.5 7h-3zM8 8.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3z",fill:"currentColor"})))}}),{h:Qe}=await T("vue"),Yo=de("retry",()=>Qe("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},Qe("path",{d:"M320,146s24.36-12-64-12A160,160,0,1,0,416,294",style:"fill: none; stroke: currentcolor; stroke-linecap: round; stroke-miterlimit: 10; stroke-width: 32px;"}),Qe("polyline",{points:"256 58 336 138 256 218",style:"fill: none; stroke: currentcolor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 32px;"}))),{h:et}=await T("vue"),Ko=de("rotateClockwise",()=>et("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},et("path",{d:"M3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 12.7916 15.3658 15.2026 13 16.3265V14.5C13 14.2239 12.7761 14 12.5 14C12.2239 14 12 14.2239 12 14.5V17.5C12 17.7761 12.2239 18 12.5 18H15.5C15.7761 18 16 17.7761 16 17.5C16 17.2239 15.7761 17 15.5 17H13.8758C16.3346 15.6357 18 13.0128 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 10.2761 2.22386 10.5 2.5 10.5C2.77614 10.5 3 10.2761 3 10Z",fill:"currentColor"}),et("path",{d:"M10 12C11.1046 12 12 11.1046 12 10C12 8.89543 11.1046 8 10 8C8.89543 8 8 8.89543 8 10C8 11.1046 8.89543 12 10 12ZM10 11C9.44772 11 9 10.5523 9 10C9 9.44772 9.44772 9 10 9C10.5523 9 11 9.44772 11 10C11 10.5523 10.5523 11 10 11Z",fill:"currentColor"}))),{h:tt}=await T("vue"),Jo=de("rotateClockwise",()=>tt("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},tt("path",{d:"M17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 12.7916 4.63419 15.2026 7 16.3265V14.5C7 14.2239 7.22386 14 7.5 14C7.77614 14 8 14.2239 8 14.5V17.5C8 17.7761 7.77614 18 7.5 18H4.5C4.22386 18 4 17.7761 4 17.5C4 17.2239 4.22386 17 4.5 17H6.12422C3.66539 15.6357 2 13.0128 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 10.2761 17.7761 10.5 17.5 10.5C17.2239 10.5 17 10.2761 17 10Z",fill:"currentColor"}),tt("path",{d:"M10 12C8.89543 12 8 11.1046 8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10C12 11.1046 11.1046 12 10 12ZM10 11C10.5523 11 11 10.5523 11 10C11 9.44772 10.5523 9 10 9C9.44772 9 9 9.44772 9 10C9 10.5523 9.44772 11 10 11Z",fill:"currentColor"}))),{h:Se}=await T("vue"),Qo=de("trash",()=>Se("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},Se("path",{d:"M432,144,403.33,419.74A32,32,0,0,1,371.55,448H140.46a32,32,0,0,1-31.78-28.26L80,144",style:"fill: none; stroke: currentcolor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 32px;"}),Se("rect",{x:"32",y:"64",width:"448",height:"80",rx:"16",ry:"16",style:"fill: none; stroke: currentcolor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 32px;"}),Se("line",{x1:"312",y1:"240",x2:"200",y2:"352",style:"fill: none; stroke: currentcolor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 32px;"}),Se("line",{x1:"312",y1:"352",x2:"200",y2:"240",style:"fill: none; stroke: currentcolor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 32px;"}))),{h:ot}=await T("vue"),er=de("zoomIn",()=>ot("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},ot("path",{d:"M11.5 8.5C11.5 8.22386 11.2761 8 11 8H9V6C9 5.72386 8.77614 5.5 8.5 5.5C8.22386 5.5 8 5.72386 8 6V8H6C5.72386 8 5.5 8.22386 5.5 8.5C5.5 8.77614 5.72386 9 6 9H8V11C8 11.2761 8.22386 11.5 8.5 11.5C8.77614 11.5 9 11.2761 9 11V9H11C11.2761 9 11.5 8.77614 11.5 8.5Z",fill:"currentColor"}),ot("path",{d:"M8.5 3C11.5376 3 14 5.46243 14 8.5C14 9.83879 13.5217 11.0659 12.7266 12.0196L16.8536 16.1464C17.0488 16.3417 17.0488 16.6583 16.8536 16.8536C16.68 17.0271 16.4106 17.0464 16.2157 16.9114L16.1464 16.8536L12.0196 12.7266C11.0659 13.5217 9.83879 14 8.5 14C5.46243 14 3 11.5376 3 8.5C3 5.46243 5.46243 3 8.5 3ZM8.5 4C6.01472 4 4 6.01472 4 8.5C4 10.9853 6.01472 13 8.5 13C10.9853 13 13 10.9853 13 8.5C13 6.01472 10.9853 4 8.5 4Z",fill:"currentColor"}))),{h:rt}=await T("vue"),tr=de("zoomOut",()=>rt("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},rt("path",{d:"M11 8C11.2761 8 11.5 8.22386 11.5 8.5C11.5 8.77614 11.2761 9 11 9H6C5.72386 9 5.5 8.77614 5.5 8.5C5.5 8.22386 5.72386 8 6 8H11Z",fill:"currentColor"}),rt("path",{d:"M14 8.5C14 5.46243 11.5376 3 8.5 3C5.46243 3 3 5.46243 3 8.5C3 11.5376 5.46243 14 8.5 14C9.83879 14 11.0659 13.5217 12.0196 12.7266L16.1464 16.8536L16.2157 16.9114C16.4106 17.0464 16.68 17.0271 16.8536 16.8536C17.0488 16.6583 17.0488 16.3417 16.8536 16.1464L12.7266 12.0196C13.5217 11.0659 14 9.83879 14 8.5ZM4 8.5C4 6.01472 6.01472 4 8.5 4C10.9853 4 13 6.01472 13 8.5C13 10.9853 10.9853 13 8.5 13C6.01472 13 4 10.9853 4 8.5Z",fill:"currentColor"}))),or={iconMargin:"11px 8px 0 12px",iconMarginRtl:"11px 12px 0 8px",iconSize:"24px",closeIconSize:"16px",closeSize:"20px",closeMargin:"13px 14px 0 0",closeMarginRtl:"13px 0 0 14px",padding:"13px"};function rr(e){const{lineHeight:t,borderRadius:o,fontWeightStrong:r,baseColor:i,dividerColor:l,actionColor:c,textColor1:s,textColor2:n,closeColorHover:d,closeColorPressed:a,closeIconColor:u,closeIconColorHover:g,closeIconColorPressed:x,infoColor:h,successColor:f,warningColor:R,errorColor:y,fontSize:z}=e;return Object.assign(Object.assign({},or),{fontSize:z,lineHeight:t,titleFontWeight:r,borderRadius:o,border:`1px solid ${l}`,color:c,titleTextColor:s,iconColor:n,contentTextColor:n,closeBorderRadius:o,closeColorHover:d,closeColorPressed:a,closeIconColor:u,closeIconColorHover:g,closeIconColorPressed:x,borderInfo:`1px solid ${fe(i,se(h,{alpha:.25}))}`,colorInfo:fe(i,se(h,{alpha:.08})),titleTextColorInfo:s,iconColorInfo:h,contentTextColorInfo:n,closeColorHoverInfo:d,closeColorPressedInfo:a,closeIconColorInfo:u,closeIconColorHoverInfo:g,closeIconColorPressedInfo:x,borderSuccess:`1px solid ${fe(i,se(f,{alpha:.25}))}`,colorSuccess:fe(i,se(f,{alpha:.08})),titleTextColorSuccess:s,iconColorSuccess:f,contentTextColorSuccess:n,closeColorHoverSuccess:d,closeColorPressedSuccess:a,closeIconColorSuccess:u,closeIconColorHoverSuccess:g,closeIconColorPressedSuccess:x,borderWarning:`1px solid ${fe(i,se(R,{alpha:.33}))}`,colorWarning:fe(i,se(R,{alpha:.08})),titleTextColorWarning:s,iconColorWarning:R,contentTextColorWarning:n,closeColorHoverWarning:d,closeColorPressedWarning:a,closeIconColorWarning:u,closeIconColorHoverWarning:g,closeIconColorPressedWarning:x,borderError:`1px solid ${fe(i,se(y,{alpha:.25}))}`,colorError:fe(i,se(y,{alpha:.08})),titleTextColorError:s,iconColorError:y,contentTextColorError:n,closeColorHoverError:d,closeColorPressedError:a,closeIconColorError:u,closeIconColorHoverError:g,closeIconColorPressedError:x})}const nr={common:Ie,self:rr},ir=v("alert",`
 line-height: var(--n-line-height);
 border-radius: var(--n-border-radius);
 position: relative;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 text-align: start;
 word-break: break-word;
`,[V("border",`
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 transition: border-color .3s var(--n-bezier);
 border: var(--n-border);
 pointer-events: none;
 `),E("closable",[v("alert-body",[V("title",`
 padding-right: 24px;
 `)])]),V("icon",{color:"var(--n-icon-color)"}),v("alert-body",{padding:"var(--n-padding)"},[V("title",{color:"var(--n-title-text-color)"}),V("content",{color:"var(--n-content-text-color)"})]),pt({originalTransition:"transform .3s var(--n-bezier)",enterToProps:{transform:"scale(1)"},leaveToProps:{transform:"scale(0.9)"}}),V("icon",`
 position: absolute;
 left: 0;
 top: 0;
 align-items: center;
 justify-content: center;
 display: flex;
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 margin: var(--n-icon-margin);
 `),V("close",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 `),E("show-icon",[v("alert-body",{paddingLeft:"calc(var(--n-icon-margin-left) + var(--n-icon-size) + var(--n-icon-margin-right))"})]),E("right-adjust",[v("alert-body",{paddingRight:"calc(var(--n-close-size) + var(--n-padding) + 2px)"})]),v("alert-body",`
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 `,[V("title",`
 transition: color .3s var(--n-bezier);
 font-size: 16px;
 line-height: 19px;
 font-weight: var(--n-title-font-weight);
 `,[U("& +",[V("content",{marginTop:"9px"})])]),V("content",{transition:"color .3s var(--n-bezier)",fontSize:"var(--n-font-size)"})]),V("icon",{transition:"color .3s var(--n-bezier)"})]),{computed:Tt,defineComponent:lr,h:ee,mergeProps:ar,ref:sr,watchEffect:Di}=await T("vue"),cr=Object.assign(Object.assign({},le.props),{title:String,showIcon:{type:Boolean,default:!0},type:{type:String,default:"default"},bordered:{type:Boolean,default:!0},closable:Boolean,onClose:Function,onAfterLeave:Function,onAfterHide:Function}),ji=lr({name:"Alert",inheritAttrs:!1,props:cr,slots:Object,setup(e){const{mergedClsPrefixRef:t,mergedBorderedRef:o,inlineThemeDisabled:r,mergedRtlRef:i}=pe(e),l=le("Alert","-alert",ir,nr,e,t),c=Wt("Alert",i,t),s=Tt(()=>{const{common:{cubicBezierEaseInOut:x},self:h}=l.value,{fontSize:f,borderRadius:R,titleFontWeight:y,lineHeight:z,iconSize:F,iconMargin:I,iconMarginRtl:m,closeIconSize:P,closeBorderRadius:O,closeSize:k,closeMargin:S,closeMarginRtl:B,padding:b}=h,{type:C}=e,{left:M,right:Z}=yo(I);return{"--n-bezier":x,"--n-color":h[oe("color",C)],"--n-close-icon-size":P,"--n-close-border-radius":O,"--n-close-color-hover":h[oe("closeColorHover",C)],"--n-close-color-pressed":h[oe("closeColorPressed",C)],"--n-close-icon-color":h[oe("closeIconColor",C)],"--n-close-icon-color-hover":h[oe("closeIconColorHover",C)],"--n-close-icon-color-pressed":h[oe("closeIconColorPressed",C)],"--n-icon-color":h[oe("iconColor",C)],"--n-border":h[oe("border",C)],"--n-title-text-color":h[oe("titleTextColor",C)],"--n-content-text-color":h[oe("contentTextColor",C)],"--n-line-height":z,"--n-border-radius":R,"--n-font-size":f,"--n-title-font-weight":y,"--n-icon-size":F,"--n-icon-margin":I,"--n-icon-margin-rtl":m,"--n-close-size":k,"--n-close-margin":S,"--n-close-margin-rtl":B,"--n-padding":b,"--n-icon-margin-left":M,"--n-icon-margin-right":Z}}),n=r?Le("alert",Tt(()=>e.type[0]),s,e):void 0,d=sr(!0),a=()=>{const{onAfterLeave:x,onAfterHide:h}=e;x&&x(),h&&h()};return{rtlEnabled:c,mergedClsPrefix:t,mergedBordered:o,visible:d,handleCloseClick:()=>{var x;Promise.resolve((x=e.onClose)===null||x===void 0?void 0:x.call(e)).then(h=>{h!==!1&&(d.value=!1)})},handleAfterLeave:()=>{a()},mergedTheme:l,cssVars:r?void 0:s,themeClass:n?.themeClass,onRender:n?.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),ee(Ct,{onAfterLeave:this.handleAfterLeave},{default:()=>{const{mergedClsPrefix:t,$slots:o}=this,r={class:[`${t}-alert`,this.themeClass,this.closable&&`${t}-alert--closable`,this.showIcon&&`${t}-alert--show-icon`,!this.title&&this.closable&&`${t}-alert--right-adjust`,this.rtlEnabled&&`${t}-alert--rtl`],style:this.cssVars,role:"alert"};return this.visible?ee("div",Object.assign({},ar(this.$attrs,r)),this.closable&&ee(wo,{clsPrefix:t,class:`${t}-alert__close`,onClick:this.handleCloseClick}),this.bordered&&ee("div",{class:`${t}-alert__border`}),this.showIcon&&ee("div",{class:`${t}-alert__icon`,"aria-hidden":"true"},bt(o.icon,()=>[ee(q,{clsPrefix:t},{default:()=>{switch(this.type){case"success":return ee($t,null);case"info":return ee(Rt,null);case"warning":return ee(xt,null);case"error":return ee(yt,null);default:return null}}})])),ee("div",{class:[`${t}-alert-body`,this.mergedBordered&&`${t}-alert-body--bordered`]},po(o.header,i=>{const l=i||this.title;return l?ee("div",{class:`${t}-alert-body__title`},l):null}),o.default&&ee("div",{class:`${t}-alert-body__content`},o))):null}})}}),dr=Gt&&"loading"in document.createElement("img");function ur(e={}){var t;const{root:o=null}=e;return{hash:`${e.rootMargin||"0px 0px 0px 0px"}-${Array.isArray(e.threshold)?e.threshold.join(","):(t=e.threshold)!==null&&t!==void 0?t:"0"}`,options:Object.assign(Object.assign({},e),{root:(typeof o=="string"?document.querySelector(o):o)||document.documentElement})}}const nt=new WeakMap,it=new WeakMap,lt=new WeakMap,fr=(e,t,o)=>{if(!e)return()=>{};const r=ur(t),{root:i}=r.options;let l;const c=nt.get(i);c?l=c:(l=new Map,nt.set(i,l));let s,n;l.has(r.hash)?(n=l.get(r.hash),n[1].has(e)||(s=n[0],n[1].add(e),s.observe(e))):(s=new IntersectionObserver(u=>{u.forEach(g=>{if(g.isIntersecting){const x=it.get(g.target),h=lt.get(g.target);x&&x(),h&&(h.value=!0)}})},r.options),s.observe(e),n=[s,new Set([e])],l.set(r.hash,n));let d=!1;const a=()=>{d||(it.delete(e),lt.delete(e),d=!0,n[1].has(e)&&(n[0].unobserve(e),n[1].delete(e)),n[1].size<=0&&l.delete(r.hash),l.size||nt.delete(i))};return it.set(e,a),lt.set(e,o),a},{inject:Yt}=await T("vue");function Ei(){const e=Yt(Xt,null);return e===null&&ve("use-dialog","No outer <n-dialog-provider /> founded."),e}function Fi(){const e=Yt(qt,null);return e===null&&ve("use-dialog-reactive-list","No outer <n-dialog-provider /> founded."),e}const{defineComponent:hr,h:Bt,normalizeClass:gr,ref:pr}=await T("vue"),vr=Object.assign(Object.assign({},ko),{onAfterEnter:Function,onAfterLeave:Function,transformOrigin:String,blockScroll:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},onEsc:Function,autoFocus:{type:Boolean,default:!0},internalStyle:[String,Object],maskClosable:{type:Boolean,default:!0},zIndex:Number,onPositiveClick:Function,onNegativeClick:Function,onClose:Function,onMaskClick:Function,draggable:[Boolean,Object]}),mr=hr({name:"DialogEnvironment",props:Object.assign(Object.assign({},vr),{internalKey:{type:String,required:!0},to:[String,Object],onInternalAfterLeave:{type:Function,required:!0}}),setup(e){const t=pr(!0);function o(){const{onInternalAfterLeave:a,internalKey:u,onAfterLeave:g}=e;a&&a(u),g&&g()}function r(a){const{onPositiveClick:u}=e;u?Promise.resolve(u(a)).then(g=>{g!==!1&&n()}):n()}function i(a){const{onNegativeClick:u}=e;u?Promise.resolve(u(a)).then(g=>{g!==!1&&n()}):n()}function l(){const{onClose:a}=e;a?Promise.resolve(a()).then(u=>{u!==!1&&n()}):n()}function c(a){const{onMaskClick:u,maskClosable:g}=e;u&&(u(a),g&&n())}function s(){const{onEsc:a}=e;a&&a()}function n(){t.value=!1}function d(a){t.value=a}return{show:t,hide:n,handleUpdateShow:d,handleAfterLeave:o,handleCloseClick:l,handleNegativeClick:i,handlePositiveClick:r,handleMaskClick:c,handleEsc:s}},render(){const{handlePositiveClick:e,handleUpdateShow:t,handleNegativeClick:o,handleCloseClick:r,handleAfterLeave:i,handleMaskClick:l,handleEsc:c,to:s,zIndex:n,maskClosable:d,show:a}=this;return Bt(Ro,{show:a,onUpdateShow:t,onMaskClick:l,onEsc:c,to:s,zIndex:n,maskClosable:d,onAfterEnter:this.onAfterEnter,onAfterLeave:i,closeOnEsc:this.closeOnEsc,blockScroll:this.blockScroll,autoFocus:this.autoFocus,transformOrigin:this.transformOrigin,draggable:this.draggable,internalAppear:!0,internalDialog:!0},{default:({draggableClass:u})=>Bt($o,Object.assign({},Lo(this.$props,So),{titleClass:gr([this.titleClass,u]),style:this.internalStyle,onClose:r,onNegativeClick:o,onPositiveClick:e}))})}}),{defineComponent:br,Fragment:wr,h:Dt,provide:at,reactive:Cr,ref:yr}=await T("vue"),xr={injectionKey:String,to:[String,Object]},Mi=br({name:"DialogProvider",props:xr,setup(){const e=yr([]),t={};function o(s={}){const n=Xe(),d=Cr(Object.assign(Object.assign({},s),{key:n,destroy:()=>{var a;(a=t[`n-dialog-${n}`])===null||a===void 0||a.hide()}}));return e.value.push(d),d}const r=["info","success","warning","error"].map(s=>n=>o(Object.assign(Object.assign({},n),{type:s})));function i(s){const{value:n}=e;n.splice(n.findIndex(d=>d.key===s),1)}function l(){Object.values(t).forEach(s=>{s?.hide()})}const c={create:o,destroyAll:l,info:r[0],success:r[1],warning:r[2],error:r[3]};return at(Xt,c),at(Po,{clickedRef:Io(64),clickedPositionRef:zo()}),at(qt,e),Object.assign(Object.assign({},c),{dialogList:e,dialogInstRefs:t,handleAfterLeave:i})},render(){var e,t;return Dt(wr,null,[this.dialogList.map(o=>Dt(mr,go(o,["destroy","style"],{internalStyle:o.style,to:this.to,ref:r=>{r===null?delete this.dialogInstRefs[`n-dialog-${o.key}`]:this.dialogInstRefs[`n-dialog-${o.key}`]=r},internalKey:o.key,onInternalAfterLeave:this.handleAfterLeave}))),(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e)])}});function Rr(e){const{infoColor:t,successColor:o,warningColor:r,errorColor:i,textColor2:l,progressRailColor:c,fontSize:s,fontWeight:n}=e;return{fontSize:s,fontSizeCircle:"28px",fontWeightCircle:n,railColor:c,railHeight:"8px",iconSizeCircle:"36px",iconSizeLine:"18px",iconColor:t,iconColorInfo:t,iconColorSuccess:o,iconColorWarning:r,iconColorError:i,textColorCircle:l,textColorLineInner:"rgb(255, 255, 255)",textColorLineOuter:l,fillColor:t,fillColorInfo:t,fillColorSuccess:o,fillColorWarning:r,fillColorError:i,lineBgProcessing:"linear-gradient(90deg, rgba(255, 255, 255, .3) 0%, rgba(255, 255, 255, .5) 100%)"}}const Kt={name:"Progress",common:Ie,self:Rr};function $r(e){const{opacityDisabled:t,heightTiny:o,heightSmall:r,heightMedium:i,heightLarge:l,heightHuge:c,primaryColor:s,fontSize:n}=e;return{fontSize:n,textColor:s,sizeTiny:o,sizeSmall:r,sizeMedium:i,sizeLarge:l,sizeHuge:c,color:s,opacitySpinning:t}}const Sr={common:Ie,self:$r};function kr(e){const{iconColor:t,primaryColor:o,errorColor:r,textColor2:i,successColor:l,opacityDisabled:c,actionColor:s,borderColor:n,hoverColor:d,lineHeight:a,borderRadius:u,fontSize:g}=e;return{fontSize:g,lineHeight:a,borderRadius:u,draggerColor:s,draggerBorder:`1px dashed ${n}`,draggerBorderHover:`1px dashed ${o}`,itemColorHover:d,itemColorHoverError:se(r,{alpha:.06}),itemTextColor:i,itemTextColorError:r,itemTextColorSuccess:l,itemIconColor:t,itemDisabledOpacity:c,itemBorderImageCardError:`1px solid ${r}`,itemBorderImageCard:`1px solid ${n}`}}const Pr=Vt({name:"Upload",common:Ie,peers:{Button:Ho,Progress:Kt},self:kr});function zr(){return{toolbarIconColor:"rgba(255, 255, 255, .9)",toolbarColor:"rgba(0, 0, 0, .35)",toolbarBoxShadow:"none",toolbarBorderRadius:"24px"}}const Ir=Vt({name:"Image",common:Ie,peers:{Tooltip:Uo},self:zr}),{h:Re}=await T("vue");function Lr(){return Re("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Re("path",{d:"M6 5C5.75454 5 5.55039 5.17688 5.50806 5.41012L5.5 5.5V14.5C5.5 14.7761 5.72386 15 6 15C6.24546 15 6.44961 14.8231 6.49194 14.5899L6.5 14.5V5.5C6.5 5.22386 6.27614 5 6 5ZM13.8536 5.14645C13.68 4.97288 13.4106 4.9536 13.2157 5.08859L13.1464 5.14645L8.64645 9.64645C8.47288 9.82001 8.4536 10.0894 8.58859 10.2843L8.64645 10.3536L13.1464 14.8536C13.3417 15.0488 13.6583 15.0488 13.8536 14.8536C14.0271 14.68 14.0464 14.4106 13.9114 14.2157L13.8536 14.1464L9.70711 10L13.8536 5.85355C14.0488 5.65829 14.0488 5.34171 13.8536 5.14645Z",fill:"currentColor"}))}function Or(){return Re("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Re("path",{d:"M13.5 5C13.7455 5 13.9496 5.17688 13.9919 5.41012L14 5.5V14.5C14 14.7761 13.7761 15 13.5 15C13.2545 15 13.0504 14.8231 13.0081 14.5899L13 14.5V5.5C13 5.22386 13.2239 5 13.5 5ZM5.64645 5.14645C5.82001 4.97288 6.08944 4.9536 6.28431 5.08859L6.35355 5.14645L10.8536 9.64645C11.0271 9.82001 11.0464 10.0894 10.9114 10.2843L10.8536 10.3536L6.35355 14.8536C6.15829 15.0488 5.84171 15.0488 5.64645 14.8536C5.47288 14.68 5.4536 14.4106 5.58859 14.2157L5.64645 14.1464L9.79289 10L5.64645 5.85355C5.45118 5.65829 5.45118 5.34171 5.64645 5.14645Z",fill:"currentColor"}))}function Tr(){return Re("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Re("path",{d:"M4.089 4.216l.057-.07a.5.5 0 0 1 .638-.057l.07.057L10 9.293l5.146-5.147a.5.5 0 0 1 .638-.057l.07.057a.5.5 0 0 1 .057.638l-.057.07L10.707 10l5.147 5.146a.5.5 0 0 1 .057.638l-.057.07a.5.5 0 0 1-.638.057l-.07-.057L10 10.707l-5.146 5.147a.5.5 0 0 1-.638.057l-.07-.057a.5.5 0 0 1-.057-.638l.057-.07L9.293 10L4.146 4.854a.5.5 0 0 1-.057-.638l.057-.07l-.057.07z",fill:"currentColor"}))}const kt=Object.assign(Object.assign({},le.props),{onPreviewPrev:Function,onPreviewNext:Function,showToolbar:{type:Boolean,default:!0},showToolbarTooltip:Boolean,renderToolbar:Function}),Jt=wt("n-image"),Br=U([U("body >",[v("image-container","position: fixed;")]),v("image-preview-container",`
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 `),v("image-preview-overlay",`
 z-index: -1;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 background: rgba(0, 0, 0, .3);
 `,[vt()]),v("image-preview-toolbar",`
 z-index: 1;
 position: absolute;
 left: 50%;
 transform: translateX(-50%);
 border-radius: var(--n-toolbar-border-radius);
 height: 48px;
 bottom: 40px;
 padding: 0 12px;
 background: var(--n-toolbar-color);
 box-shadow: var(--n-toolbar-box-shadow);
 color: var(--n-toolbar-icon-color);
 transition: color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[v("base-icon",`
 padding: 0 8px;
 font-size: 28px;
 cursor: pointer;
 `),vt()]),v("image-preview-wrapper",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 pointer-events: none;
 `,[Mo()]),v("image-preview",`
 user-select: none;
 -webkit-user-select: none;
 pointer-events: all;
 margin: auto;
 max-height: calc(100vh - 32px);
 max-width: calc(100vw - 32px);
 transition: transform .3s var(--n-bezier);
 `),v("image",`
 display: inline-flex;
 max-height: 100%;
 max-width: 100%;
 `,[vo("preview-disabled",`
 cursor: pointer;
 `),U("img",`
 border-radius: inherit;
 `)])]),{computed:Dr,defineComponent:jr,Fragment:st,h:j,inject:Er,normalizeStyle:Fr,onBeforeUnmount:Mr,ref:Me,toRef:Ur,toRefs:Nr,Transition:ct,vShow:_r,watch:Ar,withDirectives:jt}=await T("vue"),Ue=32,Hr=Object.assign(Object.assign({},kt),{src:String,show:{type:Boolean,default:void 0},defaultShow:Boolean,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],onNext:Function,onPrev:Function,onClose:[Function,Array]}),Qt=jr({name:"ImagePreview",props:Hr,setup(e){const{src:t}=Nr(e),{mergedClsPrefixRef:o}=pe(e),r=le("Image","-image",Br,Ir,e,o);let i=null;const l=Me(null),c=Me(null),s=Me(!1),{localeRef:n}=Co("Image"),d=Me(e.defaultShow),a=Ur(e,"show"),u=qe(a,d);function g(){const{value:p}=c;if(!i||!p)return;const{style:$}=p,w=i.getBoundingClientRect(),N=w.left+w.width/2,_=w.top+w.height/2;$.transformOrigin=`${N}px ${_}px`}function x(p){var $,w;switch(p.key){case" ":p.preventDefault();break;case"ArrowLeft":($=e.onPrev)===null||$===void 0||$.call(e);break;case"ArrowRight":(w=e.onNext)===null||w===void 0||w.call(e);break;case"ArrowUp":p.preventDefault(),Te();break;case"ArrowDown":p.preventDefault(),Pt();break;case"Escape":zt();break}}function h(p){const{onUpdateShow:$,"onUpdate:show":w}=e;$&&ce($,p),w&&ce(w,p),d.value=p,s.value=!0}Ar(u,p=>{p?Ke("keydown",document,x):Be("keydown",document,x)}),Mr(()=>{Be("keydown",document,x)});let f=0,R=0,y=0,z=0,F=0,I=0,m=0,P=0,O=!1;function k(p){const{clientX:$,clientY:w}=p;y=$-f,z=w-R,Ao(ne)}function S(p){const{mouseUpClientX:$,mouseUpClientY:w,mouseDownClientX:N,mouseDownClientY:_}=p,J=N-$,re=_-w,ie=`vertical${re>0?"Top":"Bottom"}`,ue=`horizontal${J>0?"Left":"Right"}`;return{moveVerticalDirection:ie,moveHorizontalDirection:ue,deltaHorizontal:J,deltaVertical:re}}function B(p){const{value:$}=l;if(!$)return{offsetX:0,offsetY:0};const w=$.getBoundingClientRect(),{moveVerticalDirection:N,moveHorizontalDirection:_,deltaHorizontal:J,deltaVertical:re}=p||{};let ie=0,ue=0;return w.width<=window.innerWidth?ie=0:w.left>0?ie=(w.width-window.innerWidth)/2:w.right<window.innerWidth?ie=-(w.width-window.innerWidth)/2:_==="horizontalRight"?ie=Math.min((w.width-window.innerWidth)/2,F-(J??0)):ie=Math.max(-((w.width-window.innerWidth)/2),F-(J??0)),w.height<=window.innerHeight?ue=0:w.top>0?ue=(w.height-window.innerHeight)/2:w.bottom<window.innerHeight?ue=-(w.height-window.innerHeight)/2:N==="verticalBottom"?ue=Math.min((w.height-window.innerHeight)/2,I-(re??0)):ue=Math.max(-((w.height-window.innerHeight)/2),I-(re??0)),{offsetX:ie,offsetY:ue}}function b(p){Be("mousemove",document,k),Be("mouseup",document,b);const{clientX:$,clientY:w}=p;O=!1;const N=S({mouseUpClientX:$,mouseUpClientY:w,mouseDownClientX:m,mouseDownClientY:P}),_=B(N);y=_.offsetX,z=_.offsetY,ne()}const C=Er(Jt,null);function M(p){var $,w;if((w=($=C?.previewedImgPropsRef.value)===null||$===void 0?void 0:$.onMousedown)===null||w===void 0||w.call($,p),p.button!==0)return;const{clientX:N,clientY:_}=p;O=!0,f=N-y,R=_-z,F=y,I=z,m=N,P=_,ne(),Ke("mousemove",document,k),Ke("mouseup",document,b)}const Z=1.5;let G=0,D=1,X=0;function H(p){var $,w;(w=($=C?.previewedImgPropsRef.value)===null||$===void 0?void 0:$.onDblclick)===null||w===void 0||w.call($,p);const N=Oe();D=D===N?1:N,ne()}function K(){D=1,G=0}function Q(){var p;K(),X=0,(p=e.onPrev)===null||p===void 0||p.call(e)}function ae(){var p;K(),X=0,(p=e.onNext)===null||p===void 0||p.call(e)}function Ge(){X-=90,ne()}function Ze(){X+=90,ne()}function Ye(){const{value:p}=l;if(!p)return 1;const{innerWidth:$,innerHeight:w}=window,N=Math.max(1,p.naturalHeight/(w-Ue)),_=Math.max(1,p.naturalWidth/($-Ue));return Math.max(3,N*2,_*2)}function Oe(){const{value:p}=l;if(!p)return 1;const{innerWidth:$,innerHeight:w}=window,N=p.naturalHeight/(w-Ue),_=p.naturalWidth/($-Ue);return N<1&&_<1?1:Math.max(N,_)}function Te(){const p=Ye();D<p&&(G+=1,D=Math.min(p,Math.pow(Z,G)),ne())}function Pt(){if(D>.5){const p=D;G-=1,D=Math.max(.5,Math.pow(Z,G));const $=p-D;ne(!1);const w=B();D+=$,ne(!1),D-=$,y=w.offsetX,z=w.offsetY,ne()}}function lo(){const p=t.value;p&&St(p,void 0)}function ne(p=!0){var $;const{value:w}=l;if(!w)return;const{style:N}=w,_=Fr(($=C?.previewedImgPropsRef.value)===null||$===void 0?void 0:$.style);let J="";if(typeof _=="string")J=`${_};`;else for(const ie in _)J+=`${_o(ie)}: ${_[ie]};`;const re=`transform-origin: center; transform: translateX(${y}px) translateY(${z}px) rotate(${X}deg) scale(${D});`;O?N.cssText=`${J}cursor: grabbing; transition: none;${re}`:N.cssText=`${J}cursor: grab;${re}${p?"":"transition: none;"}`,p||w.offsetHeight}function zt(){if(u.value){const{onClose:p}=e;p&&ce(p),h(!1),d.value=!1}}function ao(){D=Oe(),G=Math.ceil(Math.log(D)/Math.log(Z)),y=0,z=0,ne()}const so={setThumbnailEl:p=>{i=p}};function co(p,$){if(e.showToolbarTooltip){const{value:w}=r;return j(No,{to:!1,theme:w.peers.Tooltip,themeOverrides:w.peerOverrides.Tooltip,keepAliveOnHover:!1},{default:()=>n.value[$],trigger:()=>p})}else return p}const It=Dr(()=>{const{common:{cubicBezierEaseInOut:p},self:{toolbarIconColor:$,toolbarBorderRadius:w,toolbarBoxShadow:N,toolbarColor:_}}=r.value;return{"--n-bezier":p,"--n-toolbar-icon-color":$,"--n-toolbar-color":_,"--n-toolbar-border-radius":w,"--n-toolbar-box-shadow":N}}),{inlineThemeDisabled:Lt}=pe(),me=Lt?Le("image-preview",void 0,It,e):void 0;function uo(p){p.preventDefault()}return Object.assign({clsPrefix:o,previewRef:l,previewWrapperRef:c,previewSrc:t,mergedShow:u,appear:fo(),displayed:s,previewedImgProps:C?.previewedImgPropsRef,handleWheel:uo,handlePreviewMousedown:M,handlePreviewDblclick:H,syncTransformOrigin:g,handleAfterLeave:()=>{K(),X=0,s.value=!1},handleDragStart:p=>{var $,w;(w=($=C?.previewedImgPropsRef.value)===null||$===void 0?void 0:$.onDragstart)===null||w===void 0||w.call($,p),p.preventDefault()},zoomIn:Te,zoomOut:Pt,handleDownloadClick:lo,rotateCounterclockwise:Ge,rotateClockwise:Ze,handleSwitchPrev:Q,handleSwitchNext:ae,withTooltip:co,resizeToOrignalImageSize:ao,cssVars:Lt?void 0:It,themeClass:me?.themeClass,onRender:me?.onRender,doUpdateShow:h,close:zt},so)},render(){var e,t;const{clsPrefix:o,renderToolbar:r,withTooltip:i}=this,l=i(j(q,{clsPrefix:o,onClick:this.handleSwitchPrev},{default:Lr}),"tipPrevious"),c=i(j(q,{clsPrefix:o,onClick:this.handleSwitchNext},{default:Or}),"tipNext"),s=i(j(q,{clsPrefix:o,onClick:this.rotateCounterclockwise},{default:()=>j(Jo,null)}),"tipCounterclockwise"),n=i(j(q,{clsPrefix:o,onClick:this.rotateClockwise},{default:()=>j(Ko,null)}),"tipClockwise"),d=i(j(q,{clsPrefix:o,onClick:this.resizeToOrignalImageSize},{default:()=>j(Zo,null)}),"tipOriginalSize"),a=i(j(q,{clsPrefix:o,onClick:this.zoomOut},{default:()=>j(tr,null)}),"tipZoomOut"),u=i(j(q,{clsPrefix:o,onClick:this.handleDownloadClick},{default:()=>j(Zt,null)}),"tipDownload"),g=i(j(q,{clsPrefix:o,onClick:()=>this.close()},{default:Tr}),"tipClose"),x=i(j(q,{clsPrefix:o,onClick:this.zoomIn},{default:()=>j(er,null)}),"tipZoomIn");return j(st,null,(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e),j(Oo,{show:this.mergedShow},{default:()=>{var h;return this.mergedShow||this.displayed?((h=this.onRender)===null||h===void 0||h.call(this),jt(j("div",{ref:"containerRef",class:[`${o}-image-preview-container`,this.themeClass],style:this.cssVars,onWheel:this.handleWheel},j(ct,{name:"fade-in-transition",appear:this.appear},{default:()=>this.mergedShow?j("div",{class:`${o}-image-preview-overlay`,onClick:()=>this.close()}):null}),this.showToolbar?j(ct,{name:"fade-in-transition",appear:this.appear},{default:()=>this.mergedShow?j("div",{class:`${o}-image-preview-toolbar`},r?r({nodes:{prev:l,next:c,rotateCounterclockwise:s,rotateClockwise:n,resizeToOriginalSize:d,zoomOut:a,zoomIn:x,download:u,close:g}}):j(st,null,this.onPrev?j(st,null,l,c):null,s,n,d,a,x,u,g)):null}):null,j(ct,{name:"fade-in-scale-up-transition",onAfterLeave:this.handleAfterLeave,appear:this.appear,onEnter:this.syncTransformOrigin,onBeforeLeave:this.syncTransformOrigin},{default:()=>{const{previewedImgProps:f={}}=this;return jt(j("div",{class:`${o}-image-preview-wrapper`,ref:"previewWrapperRef"},j("img",Object.assign({},f,{draggable:!1,onMousedown:this.handlePreviewMousedown,onDblclick:this.handlePreviewDblclick,class:[`${o}-image-preview`,f.class],key:this.previewSrc,src:this.previewSrc,ref:"previewRef",onDragstart:this.handleDragStart}))),[[_r,this.mergedShow]])}})),[[To,{enabled:this.mergedShow}]])):null}}))}}),{computed:we,defineComponent:Wr,h:Vr,provide:Xr,ref:Ne,toRef:dt}=await T("vue"),eo=wt("n-image-group"),qr=Object.assign(Object.assign({},kt),{srcList:Array,current:Number,defaultCurrent:{type:Number,default:0},show:{type:Boolean,default:void 0},defaultShow:Boolean,onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],onUpdateCurrent:[Function,Array],"onUpdate:current":[Function,Array]}),Gr=Wr({name:"ImageGroup",props:qr,setup(e){const{mergedClsPrefixRef:t}=pe(e),o=`c${Xe()}`,r=Ne(null),i=Ne(e.defaultShow),l=dt(e,"show"),c=qe(l,i),s=Ne(new Map),n=we(()=>{if(e.srcList){const k=new Map;return e.srcList.forEach((S,B)=>{k.set(`p${B}`,S)}),k}return s.value}),d=we(()=>Array.from(n.value.keys())),a=()=>d.value.length;function u(k,S){e.srcList&&ve("image-group","`n-image` can't be placed inside `n-image-group` when image group's `src-list` prop is set.");const B=`r${k}`;return s.value.has(`r${B}`)||s.value.set(B,S),function(){s.value.has(B)||s.value.delete(B)}}const g=Ne(e.defaultCurrent),x=dt(e,"current"),h=qe(x,g),f=k=>{if(k!==h.value){const{onUpdateCurrent:S,"onUpdate:current":B}=e;S&&ce(S,k),B&&ce(B,k),g.value=k}},R=we(()=>d.value[h.value]),y=k=>{const S=d.value.indexOf(k);S!==h.value&&f(S)},z=we(()=>n.value.get(R.value));function F(k){const{onUpdateShow:S,"onUpdate:show":B}=e;S&&ce(S,k),B&&ce(B,k),i.value=k}function I(){F(!1)}const m=we(()=>{const k=(B,b)=>{for(let C=B;C<=b;C++){const M=d.value[C];if(n.value.get(M))return C}},S=k(h.value+1,a()-1);return S===void 0?k(0,h.value-1):S}),P=we(()=>{const k=(B,b)=>{for(let C=B;C>=b;C--){const M=d.value[C];if(n.value.get(M))return C}},S=k(h.value-1,0);return S===void 0?k(a()-1,h.value+1):S});function O(k){var S,B;k===1?(P.value!==void 0&&f(m.value),(S=e.onPreviewNext)===null||S===void 0||S.call(e)):(m.value!==void 0&&f(P.value),(B=e.onPreviewPrev)===null||B===void 0||B.call(e))}return Xr(eo,{mergedClsPrefixRef:t,registerImageUrl:u,setThumbnailEl:k=>{var S;(S=r.value)===null||S===void 0||S.setThumbnailEl(k)},toggleShow:k=>{F(!0),y(k)},groupId:o,renderToolbarRef:dt(e,"renderToolbar")}),{mergedClsPrefix:t,previewInstRef:r,mergedShow:c,src:z,onClose:I,next:()=>{O(1)},prev:()=>{O(-1)}}},render(){return Vr(Qt,{theme:this.theme,themeOverrides:this.themeOverrides,ref:"previewInstRef",onPrev:this.prev,onNext:this.next,src:this.src,show:this.mergedShow,showToolbar:this.showToolbar,showToolbarTooltip:this.showToolbarTooltip,renderToolbar:this.renderToolbar,onClose:this.onClose},this.$slots)}}),{computed:Zr,defineComponent:Yr,h:ut,inject:Kr,onBeforeUnmount:Jr,onMounted:Et,provide:Qr,ref:Ce,toRef:en,watchEffect:ft}=await T("vue"),tn=Object.assign({alt:String,height:[String,Number],imgProps:Object,previewedImgProps:Object,lazy:Boolean,intersectionObserverOptions:Object,objectFit:{type:String,default:"fill"},previewSrc:String,fallbackSrc:String,width:[String,Number],src:String,previewDisabled:Boolean,loadDescription:String,onError:Function,onLoad:Function},kt);let on=0;const rn=Yr({name:"Image",props:tn,slots:Object,inheritAttrs:!1,setup(e){const t=Ce(null),o=Ce(!1),r=Ce(null),i=Kr(eo,null),{mergedClsPrefixRef:l}=i||pe(e),c=Zr(()=>e.previewSrc||e.src),s=Ce(!1),n=on++,d=()=>{if(e.previewDisabled||o.value)return;if(i){i.setThumbnailEl(t.value),i.toggleShow(`r${n}`);return}const{value:f}=r;f&&(f.setThumbnailEl(t.value),s.value=!0)},a={click:()=>{d()},showPreview:d},u=Ce(!e.lazy);Et(()=>{var f;(f=t.value)===null||f===void 0||f.setAttribute("data-group-id",i?.groupId||"")}),Et(()=>{if(e.lazy&&e.intersectionObserverOptions){let f;const R=ft(()=>{f?.(),f=void 0,f=fr(t.value,e.intersectionObserverOptions,u)});Jr(()=>{R(),f?.()})}}),ft(()=>{var f;e.src||((f=e.imgProps)===null||f===void 0||f.src),o.value=!1}),ft(f=>{var R;const y=(R=i?.registerImageUrl)===null||R===void 0?void 0:R.call(i,n,c.value||"");f(()=>{y?.()})});function g(f){var R,y;a.showPreview(),(y=(R=e.imgProps)===null||R===void 0?void 0:R.onClick)===null||y===void 0||y.call(R,f)}function x(){s.value=!1}const h=Ce(!1);return Qr(Jt,{previewedImgPropsRef:en(e,"previewedImgProps")}),Object.assign({mergedClsPrefix:l,groupId:i?.groupId,previewInstRef:r,imageRef:t,mergedPreviewSrc:c,showError:o,shouldStartLoading:u,loaded:h,mergedOnClick:f=>{g(f)},onPreviewClose:x,mergedOnError:f=>{if(!u.value)return;o.value=!0;const{onError:R,imgProps:{onError:y}={}}=e;R?.(f),y?.(f)},mergedOnLoad:f=>{const{onLoad:R,imgProps:{onLoad:y}={}}=e;R?.(f),y?.(f),h.value=!0},previewShow:s},a)},render(){var e,t;const{mergedClsPrefix:o,imgProps:r={},loaded:i,$attrs:l,lazy:c}=this,s=bt(this.$slots.error,()=>[]),n=(t=(e=this.$slots).placeholder)===null||t===void 0?void 0:t.call(e),d=this.src||r.src,a=this.showError&&s.length?s:ut("img",Object.assign(Object.assign({},r),{ref:"imageRef",width:this.width||r.width,height:this.height||r.height,src:this.showError?this.fallbackSrc:c&&this.intersectionObserverOptions?this.shouldStartLoading?d:void 0:d,alt:this.alt||r.alt,"aria-label":this.alt||r.alt,onClick:this.mergedOnClick,onError:this.mergedOnError,onLoad:this.mergedOnLoad,loading:dr&&c&&!this.intersectionObserverOptions?"lazy":"eager",style:[r.style||"",n&&!i?{height:"0",width:"0",visibility:"hidden"}:"",{objectFit:this.objectFit}],"data-error":this.showError,"data-preview-src":this.previewSrc||this.src}));return ut("div",Object.assign({},l,{role:"none",class:[l.class,`${o}-image`,(this.previewDisabled||this.showError)&&`${o}-image--preview-disabled`]}),this.groupId?a:ut(Qt,{theme:this.theme,themeOverrides:this.themeOverrides,ref:"previewInstRef",showToolbar:this.showToolbar,showToolbarTooltip:this.showToolbarTooltip,renderToolbar:this.renderToolbar,src:this.mergedPreviewSrc,show:!this.previewDisabled&&this.previewShow,onClose:this.onPreviewClose},{default:()=>a}),!i&&n)}}),{computed:nn,defineComponent:ln,h:A}=await T("vue"),an={success:A($t,null),error:A(yt,null),warning:A(xt,null),info:A(Rt,null)},sn=ln({name:"ProgressCircle",props:{clsPrefix:{type:String,required:!0},status:{type:String,required:!0},strokeWidth:{type:Number,required:!0},fillColor:[String,Object],railColor:String,railStyle:[String,Object],percentage:{type:Number,default:0},offsetDegree:{type:Number,default:0},showIndicator:{type:Boolean,required:!0},indicatorTextColor:String,unit:String,viewBoxWidth:{type:Number,required:!0},gapDegree:{type:Number,required:!0},gapOffsetDegree:{type:Number,default:0}},setup(e,{slots:t}){const o=nn(()=>{const l="gradient",{fillColor:c}=e;return typeof c=="object"?`${l}-${mo(JSON.stringify(c))}`:l});function r(l,c,s,n){const{gapDegree:d,viewBoxWidth:a,strokeWidth:u}=e,g=50,x=0,h=g,f=0,R=2*g,y=50+u/2,z=`M ${y},${y} m ${x},${h}
      a ${g},${g} 0 1 1 ${f},${-R}
      a ${g},${g} 0 1 1 ${-f},${R}`,F=Math.PI*2*g,I={stroke:n==="rail"?s:typeof e.fillColor=="object"?`url(#${o.value})`:s,strokeDasharray:`${l/100*(F-d)}px ${a*8}px`,strokeDashoffset:`-${d/2}px`,transformOrigin:c?"center":void 0,transform:c?`rotate(${c}deg)`:void 0};return{pathString:z,pathStyle:I}}const i=()=>{const l=typeof e.fillColor=="object",c=l?e.fillColor.stops[0]:"",s=l?e.fillColor.stops[1]:"";return l&&A("defs",null,A("linearGradient",{id:o.value,x1:"0%",y1:"100%",x2:"100%",y2:"0%"},A("stop",{offset:"0%","stop-color":c}),A("stop",{offset:"100%","stop-color":s})))};return()=>{const{fillColor:l,railColor:c,strokeWidth:s,offsetDegree:n,status:d,percentage:a,showIndicator:u,indicatorTextColor:g,unit:x,gapOffsetDegree:h,clsPrefix:f}=e,{pathString:R,pathStyle:y}=r(100,0,c,"rail"),{pathString:z,pathStyle:F}=r(a,n,l,"fill"),I=100+s;return A("div",{class:`${f}-progress-content`,role:"none"},A("div",{class:`${f}-progress-graph`,"aria-hidden":!0},A("div",{class:`${f}-progress-graph-circle`,style:{transform:h?`rotate(${h}deg)`:void 0}},A("svg",{viewBox:`0 0 ${I} ${I}`},i(),A("g",null,A("path",{class:`${f}-progress-graph-circle-rail`,d:R,"stroke-width":s,"stroke-linecap":"round",fill:"none",style:y})),A("g",null,A("path",{class:[`${f}-progress-graph-circle-fill`,a===0&&`${f}-progress-graph-circle-fill--empty`],d:z,"stroke-width":s,"stroke-linecap":"round",fill:"none",style:F}))))),u?A("div",null,t.default?A("div",{class:`${f}-progress-custom-content`,role:"none"},t.default()):d!=="default"?A("div",{class:`${f}-progress-icon`,"aria-hidden":!0},A(q,{clsPrefix:f},{default:()=>an[d]})):A("div",{class:`${f}-progress-text`,style:{color:g},role:"none"},A("span",{class:`${f}-progress-text__percentage`},a),A("span",{class:`${f}-progress-text__unit`},x))):null)}}}),{computed:_e,defineComponent:cn,h:Y}=await T("vue"),dn={success:Y($t,null),error:Y(yt,null),warning:Y(xt,null),info:Y(Rt,null)},un=cn({name:"ProgressLine",props:{clsPrefix:{type:String,required:!0},percentage:{type:Number,default:0},railColor:String,railStyle:[String,Object],fillColor:[String,Object],status:{type:String,required:!0},indicatorPlacement:{type:String,required:!0},indicatorTextColor:String,unit:{type:String,default:"%"},processing:{type:Boolean,required:!0},showIndicator:{type:Boolean,required:!0},height:[String,Number],railBorderRadius:[String,Number],fillBorderRadius:[String,Number]},setup(e,{slots:t}){const o=_e(()=>be(e.height)),r=_e(()=>{var c,s;return typeof e.fillColor=="object"?`linear-gradient(to right, ${(c=e.fillColor)===null||c===void 0?void 0:c.stops[0]} , ${(s=e.fillColor)===null||s===void 0?void 0:s.stops[1]})`:e.fillColor}),i=_e(()=>e.railBorderRadius!==void 0?be(e.railBorderRadius):e.height!==void 0?be(e.height,{c:.5}):""),l=_e(()=>e.fillBorderRadius!==void 0?be(e.fillBorderRadius):e.railBorderRadius!==void 0?be(e.railBorderRadius):e.height!==void 0?be(e.height,{c:.5}):"");return()=>{const{indicatorPlacement:c,railColor:s,railStyle:n,percentage:d,unit:a,indicatorTextColor:u,status:g,showIndicator:x,processing:h,clsPrefix:f}=e;return Y("div",{class:`${f}-progress-content`,role:"none"},Y("div",{class:`${f}-progress-graph`,"aria-hidden":!0},Y("div",{class:[`${f}-progress-graph-line`,{[`${f}-progress-graph-line--indicator-${c}`]:!0}]},Y("div",{class:`${f}-progress-graph-line-rail`,style:[{backgroundColor:s,height:o.value,borderRadius:i.value},n]},Y("div",{class:[`${f}-progress-graph-line-fill`,h&&`${f}-progress-graph-line-fill--processing`],style:{maxWidth:`${e.percentage}%`,background:r.value,height:o.value,lineHeight:o.value,borderRadius:l.value}},c==="inside"?Y("div",{class:`${f}-progress-graph-line-indicator`,style:{color:u}},t.default?t.default():`${d}${a}`):null)))),x&&c==="outside"?Y("div",null,t.default?Y("div",{class:`${f}-progress-custom-content`,style:{color:u},role:"none"},t.default()):g==="default"?Y("div",{role:"none",class:`${f}-progress-icon ${f}-progress-icon--as-text`,style:{color:u}},d,a):Y("div",{class:`${f}-progress-icon`,"aria-hidden":!0},Y(q,{clsPrefix:f},{default:()=>dn[g]}))):null)}}}),{computed:fn,defineComponent:hn,h:te}=await T("vue");function Ft(e,t,o=100){return`m ${o/2} ${o/2-e} a ${e} ${e} 0 1 1 0 ${2*e} a ${e} ${e} 0 1 1 0 -${2*e}`}const gn=hn({name:"ProgressMultipleCircle",props:{clsPrefix:{type:String,required:!0},viewBoxWidth:{type:Number,required:!0},percentage:{type:Array,default:[0]},strokeWidth:{type:Number,required:!0},circleGap:{type:Number,required:!0},showIndicator:{type:Boolean,required:!0},fillColor:{type:Array,default:()=>[]},railColor:{type:Array,default:()=>[]},railStyle:{type:Array,default:()=>[]}},setup(e,{slots:t}){const o=fn(()=>e.percentage.map((l,c)=>`${Math.PI*l/100*(e.viewBoxWidth/2-e.strokeWidth/2*(1+2*c)-e.circleGap*c)*2}, ${e.viewBoxWidth*8}`)),r=(i,l)=>{const c=e.fillColor[l],s=typeof c=="object"?c.stops[0]:"",n=typeof c=="object"?c.stops[1]:"";return typeof e.fillColor[l]=="object"&&te("linearGradient",{id:`gradient-${l}`,x1:"100%",y1:"0%",x2:"0%",y2:"100%"},te("stop",{offset:"0%","stop-color":s}),te("stop",{offset:"100%","stop-color":n}))};return()=>{const{viewBoxWidth:i,strokeWidth:l,circleGap:c,showIndicator:s,fillColor:n,railColor:d,railStyle:a,percentage:u,clsPrefix:g}=e;return te("div",{class:`${g}-progress-content`,role:"none"},te("div",{class:`${g}-progress-graph`,"aria-hidden":!0},te("div",{class:`${g}-progress-graph-circle`},te("svg",{viewBox:`0 0 ${i} ${i}`},te("defs",null,u.map((x,h)=>r(x,h))),u.map((x,h)=>te("g",{key:h},te("path",{class:`${g}-progress-graph-circle-rail`,d:Ft(i/2-l/2*(1+2*h)-c*h,l,i),"stroke-width":l,"stroke-linecap":"round",fill:"none",style:[{strokeDashoffset:0,stroke:d[h]},a[h]]}),te("path",{class:[`${g}-progress-graph-circle-fill`,x===0&&`${g}-progress-graph-circle-fill--empty`],d:Ft(i/2-l/2*(1+2*h)-c*h,l,i),"stroke-width":l,"stroke-linecap":"round",fill:"none",style:{strokeDasharray:o.value[h],strokeDashoffset:0,stroke:typeof n[h]=="object"?`url(#gradient-${h})`:n[h]}})))))),s&&t.default?te("div",null,te("div",{class:`${g}-progress-text`},t.default())):null)}}}),pn=U([v("progress",{display:"inline-block"},[v("progress-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 `),E("line",`
 width: 100%;
 display: block;
 `,[v("progress-content",`
 display: flex;
 align-items: center;
 `,[v("progress-graph",{flex:1})]),v("progress-custom-content",{marginLeft:"14px"}),v("progress-icon",`
 width: 30px;
 padding-left: 14px;
 height: var(--n-icon-size-line);
 line-height: var(--n-icon-size-line);
 font-size: var(--n-icon-size-line);
 `,[E("as-text",`
 color: var(--n-text-color-line-outer);
 text-align: center;
 width: 40px;
 font-size: var(--n-font-size);
 padding-left: 4px;
 transition: color .3s var(--n-bezier);
 `)])]),E("circle, dashboard",{width:"120px"},[v("progress-custom-content",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `),v("progress-text",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 color: inherit;
 font-size: var(--n-font-size-circle);
 color: var(--n-text-color-circle);
 font-weight: var(--n-font-weight-circle);
 transition: color .3s var(--n-bezier);
 white-space: nowrap;
 `),v("progress-icon",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 color: var(--n-icon-color);
 font-size: var(--n-icon-size-circle);
 `)]),E("multiple-circle",`
 width: 200px;
 color: inherit;
 `,[v("progress-text",`
 font-weight: var(--n-font-weight-circle);
 color: var(--n-text-color-circle);
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 transition: color .3s var(--n-bezier);
 `)]),v("progress-content",{position:"relative"}),v("progress-graph",{position:"relative"},[v("progress-graph-circle",[U("svg",{verticalAlign:"bottom"}),v("progress-graph-circle-fill",`
 stroke: var(--n-fill-color);
 transition:
 opacity .3s var(--n-bezier),
 stroke .3s var(--n-bezier),
 stroke-dasharray .3s var(--n-bezier);
 `,[E("empty",{opacity:0})]),v("progress-graph-circle-rail",`
 transition: stroke .3s var(--n-bezier);
 overflow: hidden;
 stroke: var(--n-rail-color);
 `)]),v("progress-graph-line",[E("indicator-inside",[v("progress-graph-line-rail",`
 height: 16px;
 line-height: 16px;
 border-radius: 10px;
 `,[v("progress-graph-line-fill",`
 height: inherit;
 border-radius: 10px;
 `),v("progress-graph-line-indicator",`
 background: #0000;
 white-space: nowrap;
 text-align: right;
 margin-left: 14px;
 margin-right: 14px;
 height: inherit;
 font-size: 12px;
 color: var(--n-text-color-line-inner);
 transition: color .3s var(--n-bezier);
 `)])]),E("indicator-inside-label",`
 height: 16px;
 display: flex;
 align-items: center;
 `,[v("progress-graph-line-rail",`
 flex: 1;
 transition: background-color .3s var(--n-bezier);
 `),v("progress-graph-line-indicator",`
 background: var(--n-fill-color);
 font-size: 12px;
 transform: translateZ(0);
 display: flex;
 vertical-align: middle;
 height: 16px;
 line-height: 16px;
 padding: 0 10px;
 border-radius: 10px;
 position: absolute;
 white-space: nowrap;
 color: var(--n-text-color-line-inner);
 transition:
 right .2s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `)]),v("progress-graph-line-rail",`
 position: relative;
 overflow: hidden;
 height: var(--n-rail-height);
 border-radius: 5px;
 background-color: var(--n-rail-color);
 transition: background-color .3s var(--n-bezier);
 `,[v("progress-graph-line-fill",`
 background: var(--n-fill-color);
 position: relative;
 border-radius: 5px;
 height: inherit;
 width: 100%;
 max-width: 0%;
 transition:
 background-color .3s var(--n-bezier),
 max-width .2s var(--n-bezier);
 `,[E("processing",[U("&::after",`
 content: "";
 background-image: var(--n-line-bg-processing);
 animation: progress-processing-animation 2s var(--n-bezier) infinite;
 `)])])])])])]),U("@keyframes progress-processing-animation",`
 0% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 100%;
 opacity: 1;
 }
 66% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 0;
 }
 100% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 0;
 }
 `)]),{computed:Ae,defineComponent:vn,h:He}=await T("vue"),mn=Object.assign(Object.assign({},le.props),{processing:Boolean,type:{type:String,default:"line"},gapDegree:Number,gapOffsetDegree:Number,status:{type:String,default:"default"},railColor:[String,Array],railStyle:[String,Array],color:[String,Array,Object],viewBoxWidth:{type:Number,default:100},strokeWidth:{type:Number,default:7},percentage:[Number,Array],unit:{type:String,default:"%"},showIndicator:{type:Boolean,default:!0},indicatorPosition:{type:String,default:"outside"},indicatorPlacement:{type:String,default:"outside"},indicatorTextColor:String,circleGap:{type:Number,default:1},height:Number,borderRadius:[String,Number],fillBorderRadius:[String,Number],offsetDegree:Number}),bn=vn({name:"Progress",props:mn,setup(e){const t=Ae(()=>e.indicatorPlacement||e.indicatorPosition),o=Ae(()=>{if(e.gapDegree||e.gapDegree===0)return e.gapDegree;if(e.type==="dashboard")return 75}),{mergedClsPrefixRef:r,inlineThemeDisabled:i}=pe(e),l=le("Progress","-progress",pn,Kt,e,r),c=Ae(()=>{const{status:n}=e,{common:{cubicBezierEaseInOut:d},self:{fontSize:a,fontSizeCircle:u,railColor:g,railHeight:x,iconSizeCircle:h,iconSizeLine:f,textColorCircle:R,textColorLineInner:y,textColorLineOuter:z,lineBgProcessing:F,fontWeightCircle:I,[oe("iconColor",n)]:m,[oe("fillColor",n)]:P}}=l.value;return{"--n-bezier":d,"--n-fill-color":P,"--n-font-size":a,"--n-font-size-circle":u,"--n-font-weight-circle":I,"--n-icon-color":m,"--n-icon-size-circle":h,"--n-icon-size-line":f,"--n-line-bg-processing":F,"--n-rail-color":g,"--n-rail-height":x,"--n-text-color-circle":R,"--n-text-color-line-inner":y,"--n-text-color-line-outer":z}}),s=i?Le("progress",Ae(()=>e.status[0]),c,e):void 0;return{mergedClsPrefix:r,mergedIndicatorPlacement:t,gapDeg:o,cssVars:i?void 0:c,themeClass:s?.themeClass,onRender:s?.onRender}},render(){const{type:e,cssVars:t,indicatorTextColor:o,showIndicator:r,status:i,railColor:l,railStyle:c,color:s,percentage:n,viewBoxWidth:d,strokeWidth:a,mergedIndicatorPlacement:u,unit:g,borderRadius:x,fillBorderRadius:h,height:f,processing:R,circleGap:y,mergedClsPrefix:z,gapDeg:F,gapOffsetDegree:I,themeClass:m,$slots:P,onRender:O}=this;return O?.(),He("div",{class:[m,`${z}-progress`,`${z}-progress--${e}`,`${z}-progress--${i}`],style:t,"aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":n,role:e==="circle"||e==="line"||e==="dashboard"?"progressbar":"none"},e==="circle"||e==="dashboard"?He(sn,{clsPrefix:z,status:i,showIndicator:r,indicatorTextColor:o,railColor:l,fillColor:s,railStyle:c,offsetDegree:this.offsetDegree,percentage:n,viewBoxWidth:d,strokeWidth:a,gapDegree:F===void 0?e==="dashboard"?75:0:F,gapOffsetDegree:I,unit:g},P):e==="line"?He(un,{clsPrefix:z,status:i,showIndicator:r,indicatorTextColor:o,railColor:l,fillColor:s,railStyle:c,percentage:n,processing:R,indicatorPlacement:u,unit:g,fillBorderRadius:h,railBorderRadius:x,height:f},P):e==="multiple-circle"?He(gn,{clsPrefix:z,strokeWidth:a,railColor:l,fillColor:s,railStyle:c,viewBoxWidth:d,percentage:n,showIndicator:r,circleGap:y},P):null)}}),wn=U([U("@keyframes spin-rotate",`
 from {
 transform: rotate(0);
 }
 to {
 transform: rotate(360deg);
 }
 `),v("spin-container",`
 position: relative;
 `,[v("spin-body",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[vt()])]),v("spin-body",`
 display: inline-flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 `),v("spin",`
 display: inline-flex;
 height: var(--n-size);
 width: var(--n-size);
 font-size: var(--n-size);
 color: var(--n-color);
 `,[E("rotate",`
 animation: spin-rotate 2s linear infinite;
 `)]),v("spin-description",`
 display: inline-block;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 margin-top: 8px;
 `),v("spin-content",`
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 pointer-events: all;
 `,[E("spinning",`
 user-select: none;
 -webkit-user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]),{computed:ht,defineComponent:Cn,h:he,ref:yn,Transition:xn,watchEffect:Rn}=await T("vue"),$n={small:20,medium:18,large:16},Sn=Object.assign(Object.assign({},le.props),{contentClass:String,contentStyle:[Object,String],description:String,stroke:String,size:{type:[String,Number],default:"medium"},show:{type:Boolean,default:!0},strokeWidth:Number,rotate:{type:Boolean,default:!0},spinning:{type:Boolean,validator:()=>!0,default:void 0},delay:Number}),Ui=Cn({name:"Spin",props:Sn,slots:Object,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=pe(e),r=le("Spin","-spin",wn,Sr,e,t),i=ht(()=>{const{size:n}=e,{common:{cubicBezierEaseInOut:d},self:a}=r.value,{opacitySpinning:u,color:g,textColor:x}=a,h=typeof n=="number"?xo(n):a[oe("size",n)];return{"--n-bezier":d,"--n-opacity-spinning":u,"--n-size":h,"--n-color":g,"--n-text-color":x}}),l=o?Le("spin",ht(()=>{const{size:n}=e;return typeof n=="number"?String(n):n[0]}),i,e):void 0,c=Fo(e,["spinning","show"]),s=yn(!1);return Rn(n=>{let d;if(c.value){const{delay:a}=e;if(a){d=window.setTimeout(()=>{s.value=!0},a),n(()=>{clearTimeout(d)});return}}s.value=c.value}),{mergedClsPrefix:t,active:s,mergedStrokeWidth:ht(()=>{const{strokeWidth:n}=e;if(n!==void 0)return n;const{size:d}=e;return $n[typeof d=="number"?"medium":d]}),cssVars:o?void 0:i,themeClass:l?.themeClass,onRender:l?.onRender}},render(){var e,t;const{$slots:o,mergedClsPrefix:r,description:i}=this,l=o.icon&&this.rotate,c=(i||o.description)&&he("div",{class:`${r}-spin-description`},i||((e=o.description)===null||e===void 0?void 0:e.call(o))),s=o.icon?he("div",{class:[`${r}-spin-body`,this.themeClass]},he("div",{class:[`${r}-spin`,l&&`${r}-spin--rotate`],style:o.default?"":this.cssVars},o.icon()),c):he("div",{class:[`${r}-spin-body`,this.themeClass]},he(Bo,{clsPrefix:r,style:o.default?"":this.cssVars,stroke:this.stroke,"stroke-width":this.mergedStrokeWidth,class:`${r}-spin`}),c);return(t=this.onRender)===null||t===void 0||t.call(this),o.default?he("div",{class:[`${r}-spin-container`,this.themeClass],style:this.cssVars},he("div",{class:[`${r}-spin-content`,this.active&&`${r}-spin-content--spinning`,this.contentClass],style:this.contentStyle},o),he(xn,{name:"fade-in-transition"},{default:()=>this.active?s:null})):s}}),$e=wt("n-upload"),kn=U([v("upload","width: 100%;",[E("dragger-inside",[v("upload-trigger",`
 display: block;
 `)]),E("drag-over",[v("upload-dragger",`
 border: var(--n-dragger-border-hover);
 `)])]),v("upload-dragger",`
 cursor: pointer;
 box-sizing: border-box;
 width: 100%;
 text-align: center;
 border-radius: var(--n-border-radius);
 padding: 24px;
 opacity: 1;
 transition:
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 background-color: var(--n-dragger-color);
 border: var(--n-dragger-border);
 `,[U("&:hover",`
 border: var(--n-dragger-border-hover);
 `),E("disabled",`
 cursor: not-allowed;
 `)]),v("upload-trigger",`
 display: inline-block;
 box-sizing: border-box;
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 `,[U("+",[v("upload-file-list","margin-top: 8px;")]),E("disabled",`
 opacity: var(--n-item-disabled-opacity);
 cursor: not-allowed;
 `),E("image-card",`
 width: 96px;
 height: 96px;
 `,[v("base-icon",`
 font-size: 24px;
 `),v("upload-dragger",`
 padding: 0;
 height: 100%;
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `)])]),v("upload-file-list",`
 line-height: var(--n-line-height);
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 `,[U("a, img","outline: none;"),E("disabled",`
 opacity: var(--n-item-disabled-opacity);
 cursor: not-allowed;
 `,[v("upload-file","cursor: not-allowed;")]),E("grid",`
 display: grid;
 grid-template-columns: repeat(auto-fill, 96px);
 grid-gap: 8px;
 margin-top: 0;
 `),v("upload-file",`
 display: block;
 box-sizing: border-box;
 cursor: default;
 padding: 0px 12px 0 6px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `,[pt(),v("progress",[pt({foldPadding:!0})]),U("&:hover",`
 background-color: var(--n-item-color-hover);
 `,[v("upload-file-info",[V("action",`
 opacity: 1;
 `)])]),E("image-type",`
 border-radius: var(--n-border-radius);
 text-decoration: underline;
 text-decoration-color: #0000;
 `,[v("upload-file-info",`
 padding-top: 0px;
 padding-bottom: 0px;
 width: 100%;
 height: 100%;
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding: 6px 0;
 `,[v("progress",`
 padding: 2px 0;
 margin-bottom: 0;
 `),V("name",`
 padding: 0 8px;
 `),V("thumbnail",`
 width: 32px;
 height: 32px;
 font-size: 28px;
 display: flex;
 justify-content: center;
 align-items: center;
 `,[U("img",`
 width: 100%;
 `)])])]),E("text-type",[v("progress",`
 box-sizing: border-box;
 padding-bottom: 6px;
 margin-bottom: 6px;
 `)]),E("image-card-type",`
 position: relative;
 width: 96px;
 height: 96px;
 border: var(--n-item-border-image-card);
 border-radius: var(--n-border-radius);
 padding: 0;
 display: flex;
 align-items: center;
 justify-content: center;
 transition: border-color .3s var(--n-bezier), background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 overflow: hidden;
 `,[v("progress",`
 position: absolute;
 left: 8px;
 bottom: 8px;
 right: 8px;
 width: unset;
 `),v("upload-file-info",`
 padding: 0;
 width: 100%;
 height: 100%;
 `,[V("thumbnail",`
 width: 100%;
 height: 100%;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 font-size: 36px;
 `,[U("img",`
 width: 100%;
 `)])]),U("&::before",`
 position: absolute;
 z-index: 1;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 opacity: 0;
 transition: opacity .2s var(--n-bezier);
 content: "";
 `),U("&:hover",[U("&::before","opacity: 1;"),v("upload-file-info",[V("thumbnail","opacity: .12;")])])]),E("error-status",[U("&:hover",`
 background-color: var(--n-item-color-hover-error);
 `),v("upload-file-info",[V("name","color: var(--n-item-text-color-error);"),V("thumbnail","color: var(--n-item-text-color-error);")]),E("image-card-type",`
 border: var(--n-item-border-image-card-error);
 `)]),E("with-url",`
 cursor: pointer;
 `,[v("upload-file-info",[V("name",`
 color: var(--n-item-text-color-success);
 text-decoration-color: var(--n-item-text-color-success);
 `,[U("a",`
 text-decoration: underline;
 `)])])]),v("upload-file-info",`
 position: relative;
 padding-top: 6px;
 padding-bottom: 6px;
 display: flex;
 flex-wrap: nowrap;
 `,[V("thumbnail",`
 font-size: 18px;
 opacity: 1;
 transition: opacity .2s var(--n-bezier);
 color: var(--n-item-icon-color);
 `,[v("base-icon",`
 margin-right: 2px;
 vertical-align: middle;
 transition: color .3s var(--n-bezier);
 `)]),V("action",`
 padding-top: inherit;
 padding-bottom: inherit;
 position: absolute;
 right: 0;
 top: 0;
 bottom: 0;
 width: 80px;
 display: flex;
 align-items: center;
 transition: opacity .2s var(--n-bezier);
 justify-content: flex-end;
 opacity: 0;
 `,[v("button",[U("&:not(:last-child)",{marginRight:"4px"}),v("base-icon",[U("svg",[Do()])])]),E("image-type",`
 position: relative;
 max-width: 80px;
 width: auto;
 `),E("image-card-type",`
 z-index: 2;
 position: absolute;
 width: 100%;
 height: 100%;
 left: 0;
 right: 0;
 bottom: 0;
 top: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 `)]),V("name",`
 color: var(--n-item-text-color);
 flex: 1;
 display: flex;
 justify-content: center;
 text-overflow: ellipsis;
 overflow: hidden;
 flex-direction: column;
 text-decoration-color: #0000;
 font-size: var(--n-font-size);
 transition:
 color .3s var(--n-bezier),
 text-decoration-color .3s var(--n-bezier); 
 `,[U("a",`
 color: inherit;
 text-decoration: underline;
 `)])])])]),v("upload-file-input",`
 display: none;
 width: 0;
 height: 0;
 opacity: 0;
 `)]),{defineComponent:Pn,h:zn,inject:In}=await T("vue"),to="__UPLOAD_DRAGGER__",Ln=Pn({name:"UploadDragger",[to]:!0,setup(e,{slots:t}){const o=In($e,null);return o||ve("upload-dragger","`n-upload-dragger` must be placed inside `n-upload`."),()=>{const{mergedClsPrefixRef:{value:r},mergedDisabledRef:{value:i},maxReachedRef:{value:l}}=o;return zn("div",{class:[`${r}-upload-dragger`,(i||l)&&`${r}-upload-dragger--disabled`]},t)}}}),{h:xe}=await T("vue");function On(){return xe("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 28 28"},xe("g",{fill:"none"},xe("path",{d:"M21.75 3A3.25 3.25 0 0 1 25 6.25v15.5A3.25 3.25 0 0 1 21.75 25H6.25A3.25 3.25 0 0 1 3 21.75V6.25A3.25 3.25 0 0 1 6.25 3h15.5zm.583 20.4l-7.807-7.68a.75.75 0 0 0-.968-.07l-.084.07l-7.808 7.68c.183.065.38.1.584.1h15.5c.204 0 .4-.035.583-.1l-7.807-7.68l7.807 7.68zM21.75 4.5H6.25A1.75 1.75 0 0 0 4.5 6.25v15.5c0 .208.036.408.103.593l7.82-7.692a2.25 2.25 0 0 1 3.026-.117l.129.117l7.82 7.692c.066-.185.102-.385.102-.593V6.25a1.75 1.75 0 0 0-1.75-1.75zm-3.25 3a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5zm0 1.5a1 1 0 1 0 0 2a1 1 0 0 0 0-2z",fill:"currentColor"})))}function Tn(){return xe("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 28 28"},xe("g",{fill:"none"},xe("path",{d:"M6.4 2A2.4 2.4 0 0 0 4 4.4v19.2A2.4 2.4 0 0 0 6.4 26h15.2a2.4 2.4 0 0 0 2.4-2.4V11.578c0-.729-.29-1.428-.805-1.944l-6.931-6.931A2.4 2.4 0 0 0 14.567 2H6.4zm-.9 2.4a.9.9 0 0 1 .9-.9H14V10a2 2 0 0 0 2 2h6.5v11.6a.9.9 0 0 1-.9.9H6.4a.9.9 0 0 1-.9-.9V4.4zm16.44 6.1H16a.5.5 0 0 1-.5-.5V4.06l6.44 6.44z",fill:"currentColor"})))}const{defineComponent:Bn,h:Mt,inject:Dn}=await T("vue"),jn=Bn({name:"UploadProgress",props:{show:Boolean,percentage:{type:Number,required:!0},status:{type:String,required:!0}},setup(){return{mergedTheme:Dn($e).mergedThemeRef}},render(){return Mt(Ct,null,{default:()=>this.show?Mt(bn,{type:"line",showIndicator:!1,percentage:this.percentage,status:this.status,height:2,theme:this.mergedTheme.peers.Progress,themeOverrides:this.mergedTheme.peerOverrides.Progress}):null})}});var mt=function(e,t,o,r){function i(l){return l instanceof o?l:new o(function(c){c(l)})}return new(o||(o=Promise))(function(l,c){function s(a){try{d(r.next(a))}catch(u){c(u)}}function n(a){try{d(r.throw(a))}catch(u){c(u)}}function d(a){a.done?l(a.value):i(a.value).then(s,n)}d((r=r.apply(e,t||[])).next())})};function oo(e){return e.includes("image/")}function Ut(e=""){const t=e.split("/"),r=t[t.length-1].split(/#|\?/)[0];return(/\.[^./\\]*$/.exec(r)||[""])[0]}const Nt=/(webp|svg|png|gif|jpg|jpeg|jfif|bmp|dpg|ico)$/i,ro=e=>{if(e.type)return oo(e.type);const t=Ut(e.name||"");if(Nt.test(t))return!0;const o=e.thumbnailUrl||e.url||"",r=Ut(o);return!!(/^data:image\//.test(o)||Nt.test(r))};function En(e){return mt(this,void 0,void 0,function*(){return yield new Promise(t=>{if(!e.type||!oo(e.type)){t("");return}t(window.URL.createObjectURL(e))})})}const Fn=Gt&&window.FileReader&&window.File;function Mn(e){return e.isDirectory}function Un(e){return e.isFile}function Nn(e,t){return mt(this,void 0,void 0,function*(){const o=[];function r(i){return mt(this,void 0,void 0,function*(){for(const l of i)if(l){if(t&&Mn(l)){const c=l.createReader();let s=[],n;try{do n=yield new Promise((d,a)=>{c.readEntries(d,a)}),s=s.concat(n);while(n.length>0)}catch(d){Ot("upload","error happens when handling directory upload",d)}yield r(s)}else if(Un(l))try{const c=yield new Promise((s,n)=>{l.file(s,n)});o.push({file:c,entry:l,source:"dnd"})}catch(c){Ot("upload","error happens when handling file upload",c)}}})}return yield r(e),o})}function ze(e){const{id:t,name:o,percentage:r,status:i,url:l,file:c,thumbnailUrl:s,type:n,fullPath:d,batchId:a}=e;return{id:t,name:o,percentage:r??null,status:i,url:l??null,file:c??null,thumbnailUrl:s??null,type:n??null,fullPath:d??null,batchId:a??null}}function _n(e,t,o){return e=e.toLowerCase(),t=t.toLocaleLowerCase(),o=o.toLocaleLowerCase(),o.split(",").map(i=>i.trim()).filter(Boolean).some(i=>{if(i.startsWith(".")){if(e.endsWith(i))return!0}else if(i.includes("/")){const[l,c]=t.split("/"),[s,n]=i.split("/");if((s==="*"||l&&s&&s===l)&&(n==="*"||c&&n&&n===c))return!0}else return!0;return!1})}var _t=function(e,t,o,r){function i(l){return l instanceof o?l:new o(function(c){c(l)})}return new(o||(o=Promise))(function(l,c){function s(a){try{d(r.next(a))}catch(u){c(u)}}function n(a){try{d(r.throw(a))}catch(u){c(u)}}function d(a){a.done?l(a.value):i(a.value).then(s,n)}d((r=r.apply(e,t||[])).next())})};const{computed:ge,defineComponent:An,h:L,inject:Hn,ref:At,watchEffect:Wn}=await T("vue"),We={paddingMedium:"0 3px",heightMedium:"24px",iconSizeMedium:"18px"},Vn=An({name:"UploadFile",props:{clsPrefix:{type:String,required:!0},file:{type:Object,required:!0},listType:{type:String,required:!0},index:{type:Number,required:!0}},setup(e){const t=Hn($e),o=At(null),r=At(""),i=ge(()=>{const{file:m}=e;return m.status==="finished"?"success":m.status==="error"?"error":"info"}),l=ge(()=>{const{file:m}=e;if(m.status==="error")return"error"}),c=ge(()=>{const{file:m}=e;return m.status==="uploading"}),s=ge(()=>{if(!t.showCancelButtonRef.value)return!1;const{file:m}=e;return["uploading","pending","error"].includes(m.status)}),n=ge(()=>{if(!t.showRemoveButtonRef.value)return!1;const{file:m}=e;return["finished"].includes(m.status)}),d=ge(()=>{if(!t.showDownloadButtonRef.value)return!1;const{file:m}=e;return["finished"].includes(m.status)}),a=ge(()=>{if(!t.showRetryButtonRef.value)return!1;const{file:m}=e;return["error"].includes(m.status)}),u=ho(()=>r.value||e.file.thumbnailUrl||e.file.url),g=ge(()=>{if(!t.showPreviewButtonRef.value)return!1;const{file:{status:m},listType:P}=e;return["finished"].includes(m)&&u.value&&P==="image-card"});function x(){return _t(this,void 0,void 0,function*(){const m=t.onRetryRef.value;m&&(yield m({file:e.file}))===!1||t.submit(e.file.id)})}function h(m){m.preventDefault();const{file:P}=e;["finished","pending","error"].includes(P.status)?R(P):["uploading"].includes(P.status)?z(P):bo("upload","The button clicked type is unknown.")}function f(m){m.preventDefault(),y(e.file)}function R(m){const{xhrMap:P,doChange:O,onRemoveRef:{value:k},mergedFileListRef:{value:S}}=t;Promise.resolve(k?k({file:Object.assign({},m),fileList:S,index:e.index}):!0).then(B=>{if(B===!1)return;const b=Object.assign({},m,{status:"removed"});P.delete(m.id),O(b,void 0,{remove:!0})})}function y(m){const{onDownloadRef:{value:P},customDownloadRef:{value:O}}=t;Promise.resolve(P?P(Object.assign({},m)):!0).then(k=>{k!==!1&&(O?O(Object.assign({},m)):St(m.url,m.name))})}function z(m){const{xhrMap:P}=t,O=P.get(m.id);O?.abort(),R(Object.assign({},m))}function F(m){const{onPreviewRef:{value:P}}=t;if(P)P(e.file,{event:m});else if(e.listType==="image-card"){const{value:O}=o;if(!O)return;O.showPreview()}}const I=()=>_t(this,void 0,void 0,function*(){const{listType:m}=e;m!=="image"&&m!=="image-card"||t.shouldUseThumbnailUrlRef.value(e.file)&&(r.value=yield t.getFileThumbnailUrlResolver(e.file))});return Wn(()=>{I()}),{mergedTheme:t.mergedThemeRef,progressStatus:i,buttonType:l,showProgress:c,disabled:t.mergedDisabledRef,showCancelButton:s,showRemoveButton:n,showDownloadButton:d,showRetryButton:a,showPreviewButton:g,mergedThumbnailUrl:u,shouldUseThumbnailUrl:t.shouldUseThumbnailUrlRef,renderIcon:t.renderIconRef,imageRef:o,handleRemoveOrCancelClick:h,handleDownloadClick:f,handleRetryClick:x,handlePreviewClick:F}},render(){const{clsPrefix:e,mergedTheme:t,listType:o,file:r,renderIcon:i}=this;let l;const c=o==="image";c||o==="image-card"?l=!this.shouldUseThumbnailUrl(r)||!this.mergedThumbnailUrl?L("span",{class:`${e}-upload-file-info__thumbnail`},i?i(r):ro(r)?L(q,{clsPrefix:e},{default:On}):L(q,{clsPrefix:e},{default:Tn})):L("a",{rel:"noopener noreferer",target:"_blank",href:r.url||void 0,class:`${e}-upload-file-info__thumbnail`,onClick:this.handlePreviewClick},o==="image-card"?L(rn,{src:this.mergedThumbnailUrl||void 0,previewSrc:r.url||void 0,alt:r.name,ref:"imageRef"}):L("img",{src:this.mergedThumbnailUrl||void 0,alt:r.name})):l=L("span",{class:`${e}-upload-file-info__thumbnail`},i?i(r):L(q,{clsPrefix:e},{default:()=>L(Xo,null)}));const n=L(jn,{show:this.showProgress,percentage:r.percentage||0,status:this.progressStatus}),d=o==="text"||o==="image";return L("div",{class:[`${e}-upload-file`,`${e}-upload-file--${this.progressStatus}-status`,r.url&&r.status!=="error"&&o!=="image-card"&&`${e}-upload-file--with-url`,`${e}-upload-file--${o}-type`]},L("div",{class:`${e}-upload-file-info`},l,L("div",{class:`${e}-upload-file-info__name`},d&&(r.url&&r.status!=="error"?L("a",{rel:"noopener noreferer",target:"_blank",href:r.url||void 0,onClick:this.handlePreviewClick},r.name):L("span",{onClick:this.handlePreviewClick},r.name)),c&&n),L("div",{class:[`${e}-upload-file-info__action`,`${e}-upload-file-info__action--${o}-type`]},this.showPreviewButton?L(De,{key:"preview",quaternary:!0,type:this.buttonType,onClick:this.handlePreviewClick,theme:t.peers.Button,themeOverrides:t.peerOverrides.Button,builtinThemeOverrides:We},{icon:()=>L(q,{clsPrefix:e},{default:()=>L(Wo,null)})}):null,(this.showRemoveButton||this.showCancelButton)&&!this.disabled&&L(De,{key:"cancelOrTrash",theme:t.peers.Button,themeOverrides:t.peerOverrides.Button,quaternary:!0,builtinThemeOverrides:We,type:this.buttonType,onClick:this.handleRemoveOrCancelClick},{icon:()=>L(jo,null,{default:()=>this.showRemoveButton?L(q,{clsPrefix:e,key:"trash"},{default:()=>L(Qo,null)}):L(q,{clsPrefix:e,key:"cancel"},{default:()=>L(qo,null)})})}),this.showRetryButton&&!this.disabled&&L(De,{key:"retry",quaternary:!0,type:this.buttonType,onClick:this.handleRetryClick,theme:t.peers.Button,themeOverrides:t.peerOverrides.Button,builtinThemeOverrides:We},{icon:()=>L(q,{clsPrefix:e},{default:()=>L(Yo,null)})}),this.showDownloadButton?L(De,{key:"download",quaternary:!0,type:this.buttonType,onClick:this.handleDownloadClick,theme:t.peers.Button,themeOverrides:t.peerOverrides.Button,builtinThemeOverrides:We},{icon:()=>L(q,{clsPrefix:e},{default:()=>L(Zt,null)})}):null)),!c&&n)}}),{computed:Xn,defineComponent:qn,h:Ve,inject:Gn}=await T("vue"),no=qn({name:"UploadTrigger",props:{abstract:Boolean},slots:Object,setup(e,{slots:t}){const o=Gn($e,null);o||ve("upload-trigger","`n-upload-trigger` must be placed inside `n-upload`.");const{mergedClsPrefixRef:r,mergedDisabledRef:i,maxReachedRef:l,listTypeRef:c,dragOverRef:s,openOpenFileDialog:n,draggerInsideRef:d,handleFileAddition:a,mergedDirectoryDndRef:u,triggerClassRef:g,triggerStyleRef:x}=o,h=Xn(()=>c.value==="image-card");function f(){i.value||l.value||n()}function R(I){I.preventDefault(),s.value=!0}function y(I){I.preventDefault(),s.value=!0}function z(I){I.preventDefault(),s.value=!1}function F(I){var m;if(I.preventDefault(),!d.value||i.value||l.value){s.value=!1;return}const P=(m=I.dataTransfer)===null||m===void 0?void 0:m.items;P?.length?Nn(Array.from(P).map(O=>O.webkitGetAsEntry()),u.value).then(O=>{a(O)}).finally(()=>{s.value=!1}):s.value=!1}return()=>{var I;const{value:m}=r;return e.abstract?(I=t.default)===null||I===void 0?void 0:I.call(t,{handleClick:f,handleDrop:F,handleDragOver:R,handleDragEnter:y,handleDragLeave:z}):Ve("div",{class:[`${m}-upload-trigger`,(i.value||l.value)&&`${m}-upload-trigger--disabled`,h.value&&`${m}-upload-trigger--image-card`,g.value],style:x.value,onClick:f,onDrop:F,onDragover:R,onDragenter:y,onDragleave:z},h.value?Ve(Ln,null,{default:()=>bt(t.default,()=>[Ve(q,{clsPrefix:m},{default:()=>Ve(Vo,null)})])}):t)}}}),{computed:Zn,defineComponent:Yn,h:ke,inject:Kn}=await T("vue"),Jn=Yn({name:"UploadFileList",setup(e,{slots:t}){const o=Kn($e,null);o||ve("upload-file-list","`n-upload-file-list` must be placed inside `n-upload`.");const{abstractRef:r,mergedClsPrefixRef:i,listTypeRef:l,mergedFileListRef:c,fileListClassRef:s,fileListStyleRef:n,cssVarsRef:d,themeClassRef:a,maxReachedRef:u,showTriggerRef:g,imageGroupPropsRef:x}=o,h=Zn(()=>l.value==="image-card"),f=()=>c.value.map((y,z)=>ke(Vn,{clsPrefix:i.value,key:y.id,file:y,index:z,listType:l.value})),R=()=>h.value?ke(Gr,Object.assign({},x.value),{default:f}):ke(Ct,{group:!0},{default:f});return()=>{const{value:y}=i,{value:z}=r;return ke("div",{class:[`${y}-upload-file-list`,h.value&&`${y}-upload-file-list--grid`,z?a?.value:void 0,s.value],style:[z&&d?d.value:"",n.value]},R(),g.value&&!u.value&&h.value&&ke(no,null,t))}}});var Ht=function(e,t,o,r){function i(l){return l instanceof o?l:new o(function(c){c(l)})}return new(o||(o=Promise))(function(l,c){function s(a){try{d(r.next(a))}catch(u){c(u)}}function n(a){try{d(r.throw(a))}catch(u){c(u)}}function d(a){a.done?l(a.value):i(a.value).then(s,n)}d((r=r.apply(e,t||[])).next())})};const{computed:Pe,defineComponent:Qn,Fragment:ei,h:ye,nextTick:ti,provide:oi,ref:gt,Teleport:ri,toRef:W}=await T("vue");function ni(e,t,o){const{doChange:r,xhrMap:i}=e;let l=0;function c(n){var d;let a=Object.assign({},t,{status:"error",percentage:l});i.delete(t.id),a=ze(((d=e.onError)===null||d===void 0?void 0:d.call(e,{file:a,event:n}))||a),r(a,n)}function s(n){var d;if(e.isErrorState){if(e.isErrorState(o)){c(n);return}}else if(o.status<200||o.status>=300){c(n);return}let a=Object.assign({},t,{status:"finished",percentage:l});i.delete(t.id),a=ze(((d=e.onFinish)===null||d===void 0?void 0:d.call(e,{file:a,event:n}))||a),r(a,n)}return{handleXHRLoad:s,handleXHRError:c,handleXHRAbort(n){const d=Object.assign({},t,{status:"removed",file:null,percentage:l});i.delete(t.id),r(d,n)},handleXHRProgress(n){const d=Object.assign({},t,{status:"uploading"});if(n.lengthComputable){const a=Math.ceil(n.loaded/n.total*100);d.percentage=a,l=a}r(d,n)}}}function ii(e){const{inst:t,file:o,data:r,headers:i,withCredentials:l,action:c,customRequest:s}=e,{doChange:n}=e.inst;let d=0;s({file:o,data:r,headers:i,withCredentials:l,action:c,onProgress(a){const u=Object.assign({},o,{status:"uploading"}),g=a.percent;u.percentage=g,d=g,n(u)},onFinish(){var a;let u=Object.assign({},o,{status:"finished",percentage:d});u=ze(((a=t.onFinish)===null||a===void 0?void 0:a.call(t,{file:u}))||u),n(u)},onError(){var a;let u=Object.assign({},o,{status:"error",percentage:d});u=ze(((a=t.onError)===null||a===void 0?void 0:a.call(t,{file:u}))||u),n(u)}})}function li(e,t,o){const r=ni(e,t,o);o.onabort=r.handleXHRAbort,o.onerror=r.handleXHRError,o.onload=r.handleXHRLoad,o.upload&&(o.upload.onprogress=r.handleXHRProgress)}function io(e,t){return typeof e=="function"?e({file:t}):e||{}}function ai(e,t,o){const r=io(t,o);r&&Object.keys(r).forEach(i=>{e.setRequestHeader(i,r[i])})}function si(e,t,o){const r=io(t,o);r&&Object.keys(r).forEach(i=>{e.append(i,r[i])})}function ci(e,t,o,{method:r,action:i,withCredentials:l,responseType:c,headers:s,data:n}){const d=new XMLHttpRequest;d.responseType=c,e.xhrMap.set(o.id,d),d.withCredentials=l;const a=new FormData;if(si(a,n,o),o.file!==null&&a.append(t,o.file),li(e,o,d),i!==void 0){d.open(r.toUpperCase(),i),ai(d,s,o),d.send(a);const u=Object.assign({},o,{status:"uploading"});e.doChange(u)}}const di=Object.assign(Object.assign({},le.props),{name:{type:String,default:"file"},accept:String,action:String,customRequest:Function,directory:Boolean,directoryDnd:{type:Boolean,default:void 0},method:{type:String,default:"POST"},multiple:Boolean,showFileList:{type:Boolean,default:!0},data:[Object,Function],headers:[Object,Function],withCredentials:Boolean,responseType:{type:String,default:""},disabled:{type:Boolean,default:void 0},onChange:Function,onRemove:Function,onFinish:Function,onError:Function,onRetry:Function,onBeforeUpload:Function,isErrorState:Function,onDownload:Function,customDownload:Function,defaultUpload:{type:Boolean,default:!0},fileList:Array,"onUpdate:fileList":[Function,Array],onUpdateFileList:[Function,Array],fileListClass:String,fileListStyle:[String,Object],defaultFileList:{type:Array,default:()=>[]},showCancelButton:{type:Boolean,default:!0},showRemoveButton:{type:Boolean,default:!0},showDownloadButton:Boolean,showRetryButton:{type:Boolean,default:!0},showPreviewButton:{type:Boolean,default:!0},listType:{type:String,default:"text"},onPreview:Function,shouldUseThumbnailUrl:{type:Function,default:e=>Fn?ro(e):!1},createThumbnailUrl:Function,abstract:Boolean,max:Number,showTrigger:{type:Boolean,default:!0},imageGroupProps:Object,inputProps:Object,triggerClass:String,triggerStyle:[String,Object],renderIcon:Function}),Ni=Qn({name:"Upload",props:di,setup(e){e.abstract&&e.listType==="image-card"&&ve("upload","when the list-type is image-card, abstract is not supported.");const{mergedClsPrefixRef:t,inlineThemeDisabled:o,mergedRtlRef:r}=pe(e),i=le("Upload","-upload",kn,Pr,e,t),l=Wt("Upload",r,t),c=Eo(e),s=gt(e.defaultFileList),n=W(e,"fileList"),d=gt(null),a={value:!1},u=gt(!1),g=new Map,x=qe(n,s),h=Pe(()=>x.value.map(ze)),f=Pe(()=>{const{max:b}=e;return b!==void 0?h.value.length>=b:!1});function R(){var b;(b=d.value)===null||b===void 0||b.click()}function y(b){const C=b.target;m(C.files?Array.from(C.files).map(M=>({file:M,entry:null,source:"input"})):null,b),C.value=""}function z(b){const{"onUpdate:fileList":C,onUpdateFileList:M}=e;C&&ce(C,b),M&&ce(M,b),s.value=b}const F=Pe(()=>e.multiple||e.directory),I=(b,C,M={append:!1,remove:!1})=>{const{append:Z,remove:G}=M,D=Array.from(h.value),X=D.findIndex(H=>H.id===b.id);if(Z||G||~X){Z?D.push(b):G?D.splice(X,1):D.splice(X,1,b);const{onChange:H}=e;H&&H({file:b,fileList:D,event:C}),z(D)}};function m(b,C){if(!b||b.length===0)return;const{onBeforeUpload:M}=e;b=F.value?b:[b[0]];const{max:Z,accept:G}=e;b=b.filter(({file:X,source:H})=>H==="dnd"&&G?.trim()?_n(X.name,X.type,G):!0),Z&&(b=b.slice(0,Z-h.value.length));const D=Xe();Promise.all(b.map(X=>Ht(this,[X],void 0,function*({file:H,entry:K}){var Q;const ae={id:Xe(),batchId:D,name:H.name,status:"pending",percentage:0,file:H,url:null,type:H.type,thumbnailUrl:null,fullPath:(Q=K?.fullPath)!==null&&Q!==void 0?Q:`/${H.webkitRelativePath||H.name}`};return!M||(yield M({file:ae,fileList:h.value}))!==!1?ae:null}))).then(X=>Ht(this,void 0,void 0,function*(){let H=Promise.resolve();X.forEach(K=>{H=H.then(ti).then(()=>{K&&I(K,C,{append:!0})})}),yield H})).then(()=>{e.defaultUpload&&P()})}function P(b){const{method:C,action:M,withCredentials:Z,headers:G,data:D,name:X}=e,H=b!==void 0?h.value.filter(Q=>Q.id===b):h.value,K=b!==void 0;H.forEach(Q=>{const{status:ae}=Q;(ae==="pending"||ae==="error"&&K)&&(e.customRequest?ii({inst:{doChange:I,xhrMap:g,onFinish:e.onFinish,onError:e.onError},file:Q,action:M,withCredentials:Z,headers:G,data:D,customRequest:e.customRequest}):ci({doChange:I,xhrMap:g,onFinish:e.onFinish,onError:e.onError,isErrorState:e.isErrorState},X,Q,{method:C,action:M,withCredentials:Z,responseType:e.responseType,headers:G,data:D}))})}function O(b){var C;if(b.thumbnailUrl)return b.thumbnailUrl;const{createThumbnailUrl:M}=e;return M?(C=M(b.file,b))!==null&&C!==void 0?C:b.url||"":b.url?b.url:b.file?En(b.file):""}const k=Pe(()=>{const{common:{cubicBezierEaseInOut:b},self:{draggerColor:C,draggerBorder:M,draggerBorderHover:Z,itemColorHover:G,itemColorHoverError:D,itemTextColorError:X,itemTextColorSuccess:H,itemTextColor:K,itemIconColor:Q,itemDisabledOpacity:ae,lineHeight:Ge,borderRadius:Ze,fontSize:Ye,itemBorderImageCardError:Oe,itemBorderImageCard:Te}}=i.value;return{"--n-bezier":b,"--n-border-radius":Ze,"--n-dragger-border":M,"--n-dragger-border-hover":Z,"--n-dragger-color":C,"--n-font-size":Ye,"--n-item-color-hover":G,"--n-item-color-hover-error":D,"--n-item-disabled-opacity":ae,"--n-item-icon-color":Q,"--n-item-text-color":K,"--n-item-text-color-error":X,"--n-item-text-color-success":H,"--n-line-height":Ge,"--n-item-border-image-card-error":Oe,"--n-item-border-image-card":Te}}),S=o?Le("upload",void 0,k,e):void 0;oi($e,{mergedClsPrefixRef:t,mergedThemeRef:i,showCancelButtonRef:W(e,"showCancelButton"),showDownloadButtonRef:W(e,"showDownloadButton"),showRemoveButtonRef:W(e,"showRemoveButton"),showRetryButtonRef:W(e,"showRetryButton"),onRemoveRef:W(e,"onRemove"),onDownloadRef:W(e,"onDownload"),customDownloadRef:W(e,"customDownload"),mergedFileListRef:h,triggerClassRef:W(e,"triggerClass"),triggerStyleRef:W(e,"triggerStyle"),shouldUseThumbnailUrlRef:W(e,"shouldUseThumbnailUrl"),renderIconRef:W(e,"renderIcon"),xhrMap:g,submit:P,doChange:I,showPreviewButtonRef:W(e,"showPreviewButton"),onPreviewRef:W(e,"onPreview"),getFileThumbnailUrlResolver:O,listTypeRef:W(e,"listType"),dragOverRef:u,openOpenFileDialog:R,draggerInsideRef:a,handleFileAddition:m,mergedDisabledRef:c.mergedDisabledRef,maxReachedRef:f,fileListClassRef:W(e,"fileListClass"),fileListStyleRef:W(e,"fileListStyle"),abstractRef:W(e,"abstract"),acceptRef:W(e,"accept"),cssVarsRef:o?void 0:k,themeClassRef:S?.themeClass,onRender:S?.onRender,showTriggerRef:W(e,"showTrigger"),imageGroupPropsRef:W(e,"imageGroupProps"),mergedDirectoryDndRef:Pe(()=>{var b;return(b=e.directoryDnd)!==null&&b!==void 0?b:e.directory}),onRetryRef:W(e,"onRetry")});const B={clear:()=>{s.value=[]},submit:P,openOpenFileDialog:R};return Object.assign({mergedClsPrefix:t,draggerInsideRef:a,rtlEnabled:l,inputElRef:d,mergedTheme:i,dragOver:u,mergedMultiple:F,cssVars:o?void 0:k,themeClass:S?.themeClass,onRender:S?.onRender,handleFileInputChange:y},B)},render(){var e,t;const{draggerInsideRef:o,mergedClsPrefix:r,$slots:i,directory:l,onRender:c}=this;if(i.default&&!this.abstract){const n=i.default()[0];!((e=n?.type)===null||e===void 0)&&e[to]&&(o.value=!0)}const s=ye("input",Object.assign({},this.inputProps,{ref:"inputElRef",type:"file",class:`${r}-upload-file-input`,accept:this.accept,multiple:this.mergedMultiple,onChange:this.handleFileInputChange,webkitdirectory:l||void 0,directory:l||void 0}));return this.abstract?ye(ei,null,(t=i.default)===null||t===void 0?void 0:t.call(i),ye(ri,{to:"body"},s)):(c?.(),ye("div",{class:[`${r}-upload`,this.rtlEnabled&&`${r}-upload--rtl`,o.value&&`${r}-upload--dragger-inside`,this.dragOver&&`${r}-upload--drag-over`,this.themeClass],style:this.cssVars},s,this.showTrigger&&this.listType!=="image-card"&&ye(no,null,i),this.showFileList&&ye(Jn,null,i)))}});export{ji as NAlert,Mi as NDialogProvider,rn as NImage,Gr as NImageGroup,Qt as NImagePreview,bn as NProgress,Ui as NSpin,Ni as NUpload,Ln as NUploadDragger,Jn as NUploadFileList,no as NUploadTrigger,cr as alertProps,or as commonVars,xr as dialogProviderProps,St as download,qr as imageGroupProps,Hr as imagePreviewProps,tn as imageProps,dr as isImageSupportNativeLazy,fr as observeIntersection,mn as progressProps,Bi as publicDownload,Rr as self,$r as self$1,kr as self$2,Sn as spinProps,di as uploadProps,Ei as useDialog,Fi as useDialogReactiveList};
