import{m as n}from"./@emotion.ZD_ZYAgY1725245456099.js";const t=/\s*,(?![^(]*\))\s*/g,e=/\s+/g;function r(n){let r=[""];return n.forEach((n=>{(n=n&&n.trim())&&(r=n.includes("&")?function(n,e){const r=[];return e.split(t).forEach((t=>{let e=function(n){let t=0;for(let e=0;e<n.length;++e)"&"===n[e]&&++t;return t}(t);if(!e)return void n.forEach((n=>{r.push((n&&n+" ")+t)}));if(1===e)return void n.forEach((n=>{r.push(t.replace("&",n))}));let o=[t];for(;e--;){const t=[];o.forEach((e=>{n.forEach((n=>{t.push(e.replace("&",n))}))})),o=t}o.forEach((n=>r.push(n)))})),r}(r,n):function(n,e){const r=[];return e.split(t).forEach((t=>{n.forEach((n=>{r.push((n&&n+" ")+t)}))})),r}(r,n))})),r.join(", ").replace(e," ")}function o(n){if(!n)return;const t=n.parentElement;t&&t.removeChild(n)}function c(n,t){return(null!=t?t:document.head).querySelector('style[cssr-id="'.concat(n,'"]'))}function s(n){return!!n&&/^\s*@(s|m)/.test(n)}const i=/[A-Z]/g;function u(n){return n.replace(i,(n=>"-"+n.toLowerCase()))}function f(n,t,e,r){if(!t)return"";const o=function(n,t,e){return"function"==typeof n?n({context:t.context,props:e}):n}(t,e,r);if(!o)return"";if("string"==typeof o)return"".concat(n," {\n").concat(o,"\n}");const c=Object.keys(o);if(0===c.length)return e.config.keepEmptyBlock?n+" {\n}":"";const s=n?[n+" {"]:[];return c.forEach((n=>{const t=o[n];"raw"!==n?(n=u(n),null!=t&&s.push("  ".concat(n).concat(function(n,t="  "){return"object"==typeof n&&null!==n?" {\n"+Object.entries(n).map((n=>t+"  ".concat(u(n[0]),": ").concat(n[1],";"))).join("\n")+"\n"+t+"}":": ".concat(n,";")}(t)))):s.push("\n"+t+"\n")})),n&&s.push("}"),s.join("\n")}function l(n,t,e){n&&n.forEach((n=>{if(Array.isArray(n))l(n,t,e);else if("function"==typeof n){const r=n(t);Array.isArray(r)?l(r,t,e):r&&e(r)}else n&&e(n)}))}function a(n,t,e,o,c){const i=n.$;let u="";if(i&&"string"!=typeof i)if("function"==typeof i){const n=i({context:o.context,props:c});s(n)?u=n:t.push(n)}else if(i.before&&i.before(o.context),i.$&&"string"!=typeof i.$){if(i.$){const n=i.$({context:o.context,props:c});s(n)?u=n:t.push(n)}}else s(i.$)?u=i.$:t.push(i.$);else s(i)?u=i:t.push(i);const p=r(t),h=f(p,n.props,o,c);u?e.push("".concat(u," {")):h.length&&e.push(h),n.children&&l(n.children,{context:o.context,props:c},(n=>{if("string"==typeof n){const t=f(p,{raw:n},o,c);e.push(t)}else a(n,t,e,o,c)})),t.pop(),u&&e.push("}"),i&&i.after&&i.after(o.context)}function p(n,t){n.push(t)}function h(t,e,r,o,s,i,u,f,l){let a;if(void 0===r&&(a=e.render(o),r=n(a)),l)return void l.adapter(r,null!=a?a:e.render(o));void 0===f&&(f=document.head);const h=c(r,f);if(null!==h&&!i)return h;const d=null!=h?h:function(n){const t=document.createElement("style");return t.setAttribute("cssr-id",n),t}(r);if(void 0===a&&(a=e.render(o)),d.textContent=a,null!==h)return h;if(u){const n=f.querySelector('meta[name="'.concat(u,'"]'));if(n)return f.insertBefore(d,n),p(e.els,d),d}return s?f.insertBefore(d,f.querySelector("style, link")):f.appendChild(d),p(e.els,d),d}function d(n){return function(n,t,e){const r=[];return a(n,[],r,t,e),r.join("\n\n")}(this,this.instance,n)}function y(n={}){const{id:t,ssr:e,props:r,head:o=!1,force:c=!1,anchorMetaName:s,parent:i}=n;return h(this.instance,this,t,r,o,c,s,i,e)}function m(n={}){const{id:t,parent:e}=n;!function(n,t,e,r){const{els:s}=t;if(void 0===e)s.forEach(o),t.els=[];else{const n=c(e,r);n&&s.includes(n)&&(o(n),t.els=s.filter((t=>t!==n)))}}(this.instance,this,t,e)}"undefined"!=typeof window&&(window.__cssrContext={});const x=function(n,t,e,r){return{instance:n,$:t,props:e,children:r,els:[],render:d,mount:y,unmount:m}};function E(n={}){const t={c:(...n)=>function(n,t,e,r){return Array.isArray(t)?x(n,{$:null},null,t):Array.isArray(e)?x(n,t,null,e):Array.isArray(r)?x(n,t,e,r):x(n,t,e,null)}(t,...n),use:(n,...e)=>n.install(t,...e),find:c,context:{},config:n};return t}function g(n,t){if(void 0===n)return!1;if(t){const{context:{ids:e}}=t;return e.has(n)}return null!==c(n)}export{E as C,g as e};