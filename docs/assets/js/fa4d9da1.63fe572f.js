"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[86443],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),y=o,b=p["".concat(i,".").concat(y)]||p[y]||m[y]||s;return r?n.createElement(b,a(a({ref:t},u),{},{components:r})):n.createElement(b,a({ref:t},u))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=y;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<s;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},13853:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const s={slug:"/zh/operations/system-tables/contributors"},a="system.contributors",l={unversionedId:"zh/operations/system-tables/contributors",id:"zh/operations/system-tables/contributors",title:"system.contributors",description:"system-contributors}",source:"@site/docs/zh/operations/system-tables/contributors.md",sourceDirName:"zh/operations/system-tables",slug:"/zh/operations/system-tables/contributors",permalink:"/docs/zh/operations/system-tables/contributors",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/operations/system-tables/contributors.md",tags:[],version:"current",frontMatter:{slug:"/zh/operations/system-tables/contributors"},sidebar:"chinese",previous:{title:"system.columns",permalink:"/docs/zh/operations/system-tables/columns"},next:{title:"system.crash_log",permalink:"/docs/zh/operations/system-tables/crash-log"}},i={},c=[],u={toc:c},p="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"system-contributors"},"system.contributors"),(0,o.kt)("p",null,"\u6b64\u7cfb\u7edf\u8868\u5305\u542b\u6709\u5173\u8d21\u732e\u8005\u7684\u4fe1\u606f\u3002\u6392\u5217\u987a\u5e8f\u662f\u5728\u67e5\u8be2\u6267\u884c\u65f6\u968f\u673a\u751f\u6210\u7684\u3002"),(0,o.kt)("p",null,"\u5217:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"name")," (String) \u2014 git \u65e5\u5fd7\u4e2d\u7684\u8d21\u732e\u8005 (\u4f5c\u8005) \u540d\u5b57\u3002")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM system.contributors LIMIT 10\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500name\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 Olga Khvostikova \u2502\n\u2502 Max Vetrov       \u2502\n\u2502 LiuYangkuan      \u2502\n\u2502 svladykin        \u2502\n\u2502 zamulla          \u2502\n\u2502 \u0160imon Podlipsk\xfd  \u2502\n\u2502 BayoNet          \u2502\n\u2502 Ilya Khomutov    \u2502\n\u2502 Amy Krishnevsky  \u2502\n\u2502 Loud_Scream      \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,o.kt)("p",null,"\u8981\u5728\u8868\u4e2d\u627e\u5230\u4f60\u81ea\u5df1\uff0c\u8bf7\u8fd9\u6837\u67e5\u8be2:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM system.contributors WHERE name = 'Olga Khvostikova'\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500name\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 Olga Khvostikova \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}m.isMDXComponent=!0}}]);