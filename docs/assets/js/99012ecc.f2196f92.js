"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[67877],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(r),m=s,d=u["".concat(c,".").concat(m)]||u[m]||f[m]||o;return r?n.createElement(d,a(a({ref:t},p),{},{components:r})):n.createElement(d,a({ref:t},p))}));function d(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=r.length,a=new Array(o);a[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:s,a[1]=i;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},29138:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(87462),s=(r(67294),r(3905));const o={slug:"/zh/sql-reference/statements/exists",sidebar_position:45,sidebar_label:"EXISTS"},a="EXISTS \u8bed\u53e5",i={unversionedId:"zh/sql-reference/statements/exists",id:"zh/sql-reference/statements/exists",title:"EXISTS \u8bed\u53e5",description:"exists-statement}",source:"@site/docs/zh/sql-reference/statements/exists.md",sourceDirName:"zh/sql-reference/statements",slug:"/zh/sql-reference/statements/exists",permalink:"/docs/zh/sql-reference/statements/exists",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/statements/exists.md",tags:[],version:"current",sidebarPosition:45,frontMatter:{slug:"/zh/sql-reference/statements/exists",sidebar_position:45,sidebar_label:"EXISTS"},sidebar:"chinese",previous:{title:"DROP",permalink:"/docs/zh/sql-reference/statements/drop"},next:{title:"KILL",permalink:"/docs/zh/sql-reference/statements/kill"}},c={},l=[],p={toc:l},u="wrapper";function f(e){let{components:t,...r}=e;return(0,s.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"exists-statement"},"EXISTS \u8bed\u53e5"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"EXISTS [TEMPORARY] [TABLE|DICTIONARY] [db.]name [INTO OUTFILE filename] [FORMAT format]\n")),(0,s.kt)("p",null,"\u8fd4\u56de\u4e00\u4e2a\u5355\u72ec\u7684 ",(0,s.kt)("inlineCode",{parentName:"p"},"UInt8"),"\u7c7b\u578b\u7684\u5217\uff0c\u5982\u679c\u8868\u6216\u6570\u636e\u5e93\u4e0d\u5b58\u5728\uff0c\u5219\u5305\u542b\u4e00\u4e2a\u503c ",(0,s.kt)("inlineCode",{parentName:"p"},"0"),"\uff0c\u5982\u679c\u8868\u5728\u6307\u5b9a\u7684\u6570\u636e\u5e93\u4e2d\u5b58\u5728\uff0c\u5219\u5305\u542b\u4e00\u4e2a\u503c ",(0,s.kt)("inlineCode",{parentName:"p"},"1"),"\u3002"))}f.isMDXComponent=!0}}]);