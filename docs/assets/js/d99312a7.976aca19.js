"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[42161],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>b});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,o=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=c(r),b=s,y=p["".concat(i,".").concat(b)]||p[b]||m[b]||o;return r?n.createElement(y,a(a({ref:t},l),{},{components:r})):n.createElement(y,a({ref:t},l))}));function b(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=r.length,a=new Array(o);a[0]=p;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:s,a[1]=u;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},95158:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var n=r(87462),s=(r(67294),r(3905));const o={slug:"/ru/operations/system-tables/numbers"},a="system.numbers",u={unversionedId:"ru/operations/system-tables/numbers",id:"ru/operations/system-tables/numbers",title:"system.numbers",description:"system-numbers}",source:"@site/docs/ru/operations/system-tables/numbers.md",sourceDirName:"ru/operations/system-tables",slug:"/ru/operations/system-tables/numbers",permalink:"/docs/ru/operations/system-tables/numbers",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/operations/system-tables/numbers.md",tags:[],version:"current",frontMatter:{slug:"/ru/operations/system-tables/numbers"},sidebar:"russia",previous:{title:"system.mutations",permalink:"/docs/ru/operations/system-tables/mutations"},next:{title:"system.numbers_mt",permalink:"/docs/ru/operations/system-tables/numbers_mt"}},i={},c=[],l={toc:c};function m(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"system-numbers"},"system.numbers"),(0,s.kt)("p",null,"\u0422\u0430\u0431\u043b\u0438\u0446\u0430 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u043e\u0434\u0438\u043d \u0441\u0442\u043e\u043b\u0431\u0435\u0446 \u0441 \u0438\u043c\u0435\u043d\u0435\u043c number \u0442\u0438\u043f\u0430 UInt64, \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0449\u0438\u043c \u043f\u043e\u0447\u0442\u0438 \u0432\u0441\u0435 \u043d\u0430\u0442\u0443\u0440\u0430\u043b\u044c\u043d\u044b\u0435 \u0447\u0438\u0441\u043b\u0430, \u043d\u0430\u0447\u0438\u043d\u0430\u044f \u0441 \u043d\u0443\u043b\u044f.\n\u042d\u0442\u0443 \u0442\u0430\u0431\u043b\u0438\u0446\u0443 \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0434\u043b\u044f \u0442\u0435\u0441\u0442\u043e\u0432, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0435\u0441\u043b\u0438 \u0432\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043f\u0435\u0440\u0435\u0431\u043e\u0440.\n\u0427\u0442\u0435\u043d\u0438\u044f \u0438\u0437 \u044d\u0442\u043e\u0439 \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u043d\u0435 \u0440\u0430\u0441\u043f\u0430\u0440\u0430\u043b\u043b\u0435\u043b\u0438\u0432\u0430\u044e\u0442\u0441\u044f."))}m.isMDXComponent=!0}}]);