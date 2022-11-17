"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[38134],{3905:(e,r,t)=>{t.d(r,{Zo:()=>f,kt:()=>g});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},f=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,c=e.originalType,s=e.parentName,f=i(e,["components","mdxType","originalType","parentName"]),u=l(t),g=o,m=u["".concat(s,".").concat(g)]||u[g]||p[g]||c;return t?n.createElement(m,a(a({ref:r},f),{},{components:t})):n.createElement(m,a({ref:r},f))}));function g(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var c=t.length,a=new Array(c);a[0]=u;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var l=2;l<c;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5754:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var n=t(87462),o=(t(67294),t(3905));const c={slug:"/zh/sql-reference/aggregate-functions/reference/corr",sidebar_position:107},a="corr",i={unversionedId:"zh/sql-reference/aggregate-functions/reference/corr",id:"zh/sql-reference/aggregate-functions/reference/corr",title:"corr",description:"corrx-y}",source:"@site/docs/zh/sql-reference/aggregate-functions/reference/corr.md",sourceDirName:"zh/sql-reference/aggregate-functions/reference",slug:"/zh/sql-reference/aggregate-functions/reference/corr",permalink:"/docs/zh/sql-reference/aggregate-functions/reference/corr",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/aggregate-functions/reference/corr.md",tags:[],version:"current",sidebarPosition:107,frontMatter:{slug:"/zh/sql-reference/aggregate-functions/reference/corr",sidebar_position:107},sidebar:"chinese",previous:{title:"avgWeighted",permalink:"/docs/zh/sql-reference/aggregate-functions/reference/avgweighted"},next:{title:"topK",permalink:"/docs/zh/sql-reference/aggregate-functions/reference/topk"}},s={},l=[],f={toc:l};function p(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"corrx-y"},"corr"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u8bed\u6cd5")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"`corr(x, y)`\n")),(0,o.kt)("p",null,"\u8ba1\u7b97Pearson\u76f8\u5173\u7cfb\u6570: ",(0,o.kt)("inlineCode",{parentName:"p"},"\u03a3((x - x\u0305)(y - y\u0305)) / sqrt(\u03a3((x - x\u0305)^2) * \u03a3((y - y\u0305)^2))"),"\u3002"),(0,o.kt)("p",null,'!!! note "\u6ce8"\n\u8be5\u51fd\u6570\u4f7f\u7528\u6570\u503c\u4e0d\u7a33\u5b9a\u7684\u7b97\u6cd5\u3002 \u5982\u679c\u4f60\u9700\u8981 ',(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Numerical_stability"},"\u6570\u503c\u7a33\u5b9a\u6027")," \u5728\u8ba1\u7b97\u4e2d\uff0c\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"corrStable")," \u51fd\u6570\u3002 \u5b83\u7684\u5de5\u4f5c\u901f\u5ea6\u8f83\u6162\uff0c\u4f46\u63d0\u4f9b\u8f83\u4f4e\u7684\u8ba1\u7b97\u9519\u8bef\u3002"))}p.isMDXComponent=!0}}]);