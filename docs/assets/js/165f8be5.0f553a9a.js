"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[50427],{3905:(e,r,n)=>{n.d(r,{Zo:()=>l,kt:()=>f});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=t.createContext({}),u=function(e){var r=t.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},l=function(e){var r=u(e.components);return t.createElement(p.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},g=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),g=u(n),f=a,y=g["".concat(p,".").concat(f)]||g[f]||s[f]||o;return n?t.createElement(y,c(c({ref:r},l),{},{components:n})):t.createElement(y,c({ref:r},l))}));function f(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=g;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return t.createElement.apply(null,c)}return t.createElement.apply(null,n)}g.displayName="MDXCreateElement"},59030:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>p,contentTitle:()=>c,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var t=n(87462),a=(n(67294),n(3905));const o={slug:"/zh/sql-reference/aggregate-functions/reference/grouparray",sidebar_position:110},c="groupArray",i={unversionedId:"zh/sql-reference/aggregate-functions/reference/grouparray",id:"zh/sql-reference/aggregate-functions/reference/grouparray",title:"groupArray",description:"agg_function-grouparray}",source:"@site/docs/zh/sql-reference/aggregate-functions/reference/grouparray.md",sourceDirName:"zh/sql-reference/aggregate-functions/reference",slug:"/zh/sql-reference/aggregate-functions/reference/grouparray",permalink:"/docs/zh/sql-reference/aggregate-functions/reference/grouparray",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/aggregate-functions/reference/grouparray.md",tags:[],version:"current",sidebarPosition:110,frontMatter:{slug:"/zh/sql-reference/aggregate-functions/reference/grouparray",sidebar_position:110},sidebar:"chinese",previous:{title:"topKWeighted",permalink:"/docs/zh/sql-reference/aggregate-functions/reference/topkweighted"},next:{title:"groupUniqArray",permalink:"/docs/zh/sql-reference/aggregate-functions/reference/groupuniqarray"}},p={},u=[],l={toc:u};function s(e){let{components:r,...n}=e;return(0,a.kt)("wrapper",(0,t.Z)({},l,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"agg_function-grouparray"},"groupArray"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8bed\u6cd5")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"groupArray(x)\n\u6216\ngroupArray(max_size)(x)\n")),(0,a.kt)("p",null,"\u521b\u5efa\u53c2\u6570\u503c\u7684\u6570\u7ec4\u3002\n\u503c\u53ef\u4ee5\u6309\u4efb\u4f55\uff08\u4e0d\u786e\u5b9a\uff09\u987a\u5e8f\u6dfb\u52a0\u5230\u6570\u7ec4\u4e2d\u3002"),(0,a.kt)("p",null,"\u7b2c\u4e8c\u4e2a\u7248\u672c\uff08\u5e26\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"max_size")," \u53c2\u6570\uff09\u5c06\u7ed3\u679c\u6570\u7ec4\u7684\u5927\u5c0f\u9650\u5236\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"max_size")," \u4e2a\u5143\u7d20\u3002\n\u4f8b\u5982, ",(0,a.kt)("inlineCode",{parentName:"p"},"groupArray (1) (x)")," \u76f8\u5f53\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"[any (x)]")," \u3002"),(0,a.kt)("p",null,"\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u60a8\u4ecd\u7136\u53ef\u4ee5\u4f9d\u8d56\u6267\u884c\u987a\u5e8f\u3002\u8fd9\u9002\u7528\u4e8eSELECT(\u67e5\u8be2)\u6765\u81ea\u4f7f\u7528\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"ORDER BY")," \u5b50\u67e5\u8be2\u7684\u60c5\u51b5\u3002"))}s.isMDXComponent=!0}}]);