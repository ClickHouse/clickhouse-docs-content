"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[79672],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),c=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=c(r),f=a,y=d["".concat(o,".").concat(f)]||d[f]||i[f]||l;return r?n.createElement(y,p(p({ref:t},s),{},{components:r})):n.createElement(y,p({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,p=new Array(l);p[0]=d;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:a,p[1]=u;for(var c=2;c<l;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},21842:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>i,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const l={slug:"/zh/sql-reference/data-types/tuple"},p="Tuple(T1, T2, \u2026)",u={unversionedId:"zh/sql-reference/data-types/tuple",id:"zh/sql-reference/data-types/tuple",title:"Tuple(T1, T2, \u2026)",description:"tuplet1-t2}",source:"@site/docs/zh/sql-reference/data-types/tuple.md",sourceDirName:"zh/sql-reference/data-types",slug:"/zh/sql-reference/data-types/tuple",permalink:"/docs/zh/sql-reference/data-types/tuple",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/data-types/tuple.md",tags:[],version:"current",frontMatter:{slug:"/zh/sql-reference/data-types/tuple"},sidebar:"chinese",previous:{title:"\u5b57\u7b26\u4e32",permalink:"/docs/zh/sql-reference/data-types/string"},next:{title:"ANSI\u517c\u5bb9\u6027",permalink:"/docs/zh/sql-reference/ansi"}},o={},c=[{value:"\u521b\u5efa\u5143\u7ec4",id:"chuang-jian-yuan-zu",level:2},{value:"\u5143\u7ec4\u4e2d\u7684\u6570\u636e\u7c7b\u578b",id:"yuan-zu-zhong-de-shu-ju-lei-xing",level:2}],s={toc:c};function i(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tuplet1-t2"},"Tuple(T1, T2, \u2026)"),(0,a.kt)("p",null,"\u5143\u7ec4\uff0c\u5176\u4e2d\u6bcf\u4e2a\u5143\u7d20\u90fd\u6709\u5355\u72ec\u7684 ",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/#data_types"},"\u7c7b\u578b"),"\u3002"),(0,a.kt)("p",null,"\u4e0d\u80fd\u5728\u8868\u4e2d\u5b58\u50a8\u5143\u7ec4\uff08\u9664\u4e86\u5185\u5b58\u8868\uff09\u3002\u5b83\u4eec\u53ef\u4ee5\u7528\u4e8e\u4e34\u65f6\u5217\u5206\u7ec4\u3002\u5728\u67e5\u8be2\u4e2d\uff0cIN \u8868\u8fbe\u5f0f\u548c\u5e26\u7279\u5b9a\u53c2\u6570\u7684 lambda \u51fd\u6570\u53ef\u4ee5\u6765\u5bf9\u4e34\u65f6\u5217\u8fdb\u884c\u5206\u7ec4\u3002\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/tuple"},"IN \u64cd\u4f5c\u7b26")," \u548c ",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/tuple"},"\u9ad8\u9636\u51fd\u6570"),"\u3002"),(0,a.kt)("p",null,"\u5143\u7ec4\u53ef\u4ee5\u662f\u67e5\u8be2\u7684\u7ed3\u679c\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u5bf9\u4e8eJSON\u4ee5\u5916\u7684\u6587\u672c\u683c\u5f0f\uff0c\u62ec\u53f7\u4e2d\u7684\u503c\u662f\u9017\u53f7\u5206\u9694\u7684\u3002\u5728JSON\u683c\u5f0f\u4e2d\uff0c\u5143\u7ec4\u4f5c\u4e3a\u6570\u7ec4\u8f93\u51fa\uff08\u5728\u65b9\u62ec\u53f7\u4e2d\uff09\u3002"),(0,a.kt)("h2",{id:"chuang-jian-yuan-zu"},"\u521b\u5efa\u5143\u7ec4"),(0,a.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528\u51fd\u6570\u6765\u521b\u5efa\u5143\u7ec4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"tuple(T1, T2, ...)\n")),(0,a.kt)("p",null,"\u521b\u5efa\u5143\u7ec4\u7684\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT tuple(1,'a') AS x, toTypeName(x)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-response"},"\u250c\u2500x\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500toTypeName(tuple(1, 'a'))\u2500\u2510\n\u2502 (1,'a') \u2502 Tuple(UInt8, String)      \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("h2",{id:"yuan-zu-zhong-de-shu-ju-lei-xing"},"\u5143\u7ec4\u4e2d\u7684\u6570\u636e\u7c7b\u578b"),(0,a.kt)("p",null,"\u5728\u52a8\u6001\u521b\u5efa\u5143\u7ec4\u65f6\uff0cClickHouse \u4f1a\u81ea\u52a8\u4e3a\u5143\u7ec4\u7684\u6bcf\u4e00\u4e2a\u53c2\u6570\u8d4b\u4e88\u6700\u5c0f\u53ef\u8868\u8fbe\u7684\u7c7b\u578b\u3002\u5982\u679c\u53c2\u6570\u4e3a ",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/tuple#null-literal"},"NULL"),"\uff0c\u90a3\u8fd9\u4e2a\u5143\u7ec4\u5bf9\u5e94\u5143\u7d20\u662f ",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/nullable"},"\u53ef\u4e3a\u7a7a"),"\u3002"),(0,a.kt)("p",null,"\u81ea\u52a8\u6570\u636e\u7c7b\u578b\u68c0\u6d4b\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT tuple(1, NULL) AS x, toTypeName(x)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-response"},"\u250c\u2500x\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500toTypeName(tuple(1, NULL))\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 (1,NULL) \u2502 Tuple(UInt8, Nullable(Nothing)) \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}i.isMDXComponent=!0}}]);