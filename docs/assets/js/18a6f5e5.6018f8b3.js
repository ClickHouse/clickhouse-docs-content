"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[71301],{3905:(e,r,t)=>{t.d(r,{Zo:()=>f,kt:()=>g});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},f=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,c=e.originalType,s=e.parentName,f=a(e,["components","mdxType","originalType","parentName"]),p=l(t),g=o,m=p["".concat(s,".").concat(g)]||p[g]||u[g]||c;return t?n.createElement(m,i(i({ref:r},f),{},{components:t})):n.createElement(m,i({ref:r},f))}));function g(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var c=t.length,i=new Array(c);i[0]=p;var a={};for(var s in r)hasOwnProperty.call(r,s)&&(a[s]=r[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var l=2;l<c;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},99443:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>a,toc:()=>l});var n=t(87462),o=(t(67294),t(3905));const c={slug:"/zh/sql-reference/aggregate-functions/reference/sumwithoverflow",sidebar_position:140},i="sumWithOverflow",a={unversionedId:"zh/sql-reference/aggregate-functions/reference/sumwithoverflow",id:"zh/sql-reference/aggregate-functions/reference/sumwithoverflow",title:"sumWithOverflow",description:"sumwithoverflowx}",source:"@site/docs/zh/sql-reference/aggregate-functions/reference/sumwithoverflow.md",sourceDirName:"zh/sql-reference/aggregate-functions/reference",slug:"/zh/sql-reference/aggregate-functions/reference/sumwithoverflow",permalink:"/docs/zh/sql-reference/aggregate-functions/reference/sumwithoverflow",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/aggregate-functions/reference/sumwithoverflow.md",tags:[],version:"current",sidebarPosition:140,frontMatter:{slug:"/zh/sql-reference/aggregate-functions/reference/sumwithoverflow",sidebar_position:140},sidebar:"chinese",previous:{title:"groupBitmapXor",permalink:"/docs/zh/sql-reference/aggregate-functions/reference/groupbitmapxor"},next:{title:"deltaSum",permalink:"/docs/zh/sql-reference/aggregate-functions/reference/deltasum"}},s={},l=[],f={toc:l};function u(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"sumwithoverflowx"},"sumWithOverflow"),(0,o.kt)("p",null,"\u4f7f\u7528\u4e0e\u8f93\u5165\u53c2\u6570\u76f8\u540c\u7684\u6570\u636e\u7c7b\u578b\u8ba1\u7b97\u7ed3\u679c\u7684\u6570\u5b57\u603b\u548c\u3002\u5982\u679c\u603b\u548c\u8d85\u8fc7\u6b64\u6570\u636e\u7c7b\u578b\u7684\u6700\u5927\u503c\uff0c\u5219\u4f7f\u7528\u6ea2\u51fa\u8fdb\u884c\u8ba1\u7b97\u3002"),(0,o.kt)("p",null,"\u53ea\u9002\u7528\u4e8e\u6570\u5b57\u3002"))}u.isMDXComponent=!0}}]);