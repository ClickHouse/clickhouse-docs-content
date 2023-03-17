"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[51368],{3905:(e,r,n)=>{n.d(r,{Zo:()=>p,kt:()=>m});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=t.createContext({}),c=function(e){var r=t.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},p=function(e){var r=c(e.components);return t.createElement(u.Provider,{value:r},e.children)},i="mdxType",g={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),i=c(n),f=a,m=i["".concat(u,".").concat(f)]||i[f]||g[f]||o;return n?t.createElement(m,s(s({ref:r},p),{},{components:n})):t.createElement(m,s({ref:r},p))}));function m(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=f;var l={};for(var u in r)hasOwnProperty.call(r,u)&&(l[u]=r[u]);l.originalType=e,l[i]="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=n[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},59335:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>u,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var t=n(87462),a=(n(67294),n(3905));const o={slug:"/en/sql-reference/aggregate-functions/reference/grouparraylast",sidebar_position:110},s="groupArrayLast",l={unversionedId:"en/sql-reference/aggregate-functions/reference/grouparraylast",id:"en/sql-reference/aggregate-functions/reference/grouparraylast",title:"groupArrayLast",description:"Syntax: groupArrayLast(max_size)(x)",source:"@site/docs/en/sql-reference/aggregate-functions/reference/grouparraylast.md",sourceDirName:"en/sql-reference/aggregate-functions/reference",slug:"/en/sql-reference/aggregate-functions/reference/grouparraylast",permalink:"/docs/en/sql-reference/aggregate-functions/reference/grouparraylast",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/aggregate-functions/reference/grouparraylast.md",tags:[],version:"current",sidebarPosition:110,frontMatter:{slug:"/en/sql-reference/aggregate-functions/reference/grouparraylast",sidebar_position:110},sidebar:"sqlreference",previous:{title:"groupArray",permalink:"/docs/en/sql-reference/aggregate-functions/reference/grouparray"},next:{title:"groupUniqArray",permalink:"/docs/en/sql-reference/aggregate-functions/reference/groupuniqarray"}},u={},c=[],p={toc:c},i="wrapper";function g(e){let{components:r,...n}=e;return(0,a.kt)(i,(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"grouparraylast"},"groupArrayLast"),(0,a.kt)("p",null,"Syntax: ",(0,a.kt)("inlineCode",{parentName:"p"},"groupArrayLast(max_size)(x)")),(0,a.kt)("p",null,"Creates an array of last argument values.\nFor example, ",(0,a.kt)("inlineCode",{parentName:"p"},"groupArrayLast(1)(x)")," is equivalent to ",(0,a.kt)("inlineCode",{parentName:"p"},"[anyLast (x)]"),"."),(0,a.kt)("p",null,"In some cases, you can still rely on the order of execution. This applies to cases when ",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT")," comes from a subquery that uses ",(0,a.kt)("inlineCode",{parentName:"p"},"ORDER BY"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("p",null,"Query:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"select groupArrayLast(2)(number+1) numbers from numbers(10)\n")),(0,a.kt)("p",null,"Result:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500numbers\u2500\u2510\n\u2502 [9,10]  \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,"In compare to ",(0,a.kt)("inlineCode",{parentName:"p"},"groupArray"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"select groupArray(2)(number+1) numbers from numbers(10)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500numbers\u2500\u2510\n\u2502 [1,2]   \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}g.isMDXComponent=!0}}]);