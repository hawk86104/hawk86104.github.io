function r(r,t){if(null==r)return{};var e,n,o=function(r,t){if(null==r)return{};var e={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(t.indexOf(n)>=0)continue;e[n]=r[n]}return e}(r,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(r);for(n=0;n<i.length;n++)e=i[n],t.indexOf(e)>=0||{}.propertyIsEnumerable.call(r,e)&&(o[e]=r[e])}return o}function t(r){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(r)}function e(r){var e=function(r,e){if("object"!=t(r)||!r)return r;var n=r[Symbol.toPrimitive];if(void 0!==n){var o=n.call(r,e||"default");if("object"!=t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(r)}(r,"string");return"symbol"==t(e)?e:e+""}function n(r,t,n){return(t=e(t))in r?Object.defineProperty(r,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[t]=n,r}export{n as _,r as a};