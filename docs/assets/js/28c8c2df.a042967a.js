"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[9908],{3905:(e,r,n)=>{n.d(r,{Zo:()=>u,kt:()=>d});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function p(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=t.createContext({}),l=function(e){var r=t.useContext(i),n=r;return e&&(n="function"==typeof e?e(r):p(p({},r),e)),n},u=function(e){var r=l(e.components);return t.createElement(i.Provider,{value:r},e.children)},s="mdxType",g={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=l(n),f=a,d=s["".concat(i,".").concat(f)]||s[f]||g[f]||o;return n?t.createElement(d,p(p({ref:r},u),{},{components:n})):t.createElement(d,p({ref:r},u))}));function d(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=f;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c[s]="string"==typeof e?e:a,p[1]=c;for(var l=2;l<o;l++)p[l]=n[l];return t.createElement.apply(null,p)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},60202:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>p,default:()=>g,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var t=n(87462),a=(n(67294),n(3905));const o={slug:"/zh/sql-reference/aggregate-functions/reference/groupbitand",sidebar_position:125},p="groupBitAnd",c={unversionedId:"zh/sql-reference/aggregate-functions/reference/groupbitand",id:"zh/sql-reference/aggregate-functions/reference/groupbitand",title:"groupBitAnd",description:"groupbitand}",source:"@site/docs/zh/sql-reference/aggregate-functions/reference/groupbitand.md",sourceDirName:"zh/sql-reference/aggregate-functions/reference",slug:"/zh/sql-reference/aggregate-functions/reference/groupbitand",permalink:"/docs/zh/sql-reference/aggregate-functions/reference/groupbitand",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/aggregate-functions/reference/groupbitand.md",tags:[],version:"current",sidebarPosition:125,frontMatter:{slug:"/zh/sql-reference/aggregate-functions/reference/groupbitand",sidebar_position:125},sidebar:"chinese",previous:{title:"groupArraySample",permalink:"/docs/zh/sql-reference/aggregate-functions/reference/grouparraysample"},next:{title:"groupBitOr",permalink:"/docs/zh/sql-reference/aggregate-functions/reference/groupbitor"}},i={},l=[],u={toc:l},s="wrapper";function g(e){let{components:r,...n}=e;return(0,a.kt)(s,(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"groupbitand"},"groupBitAnd"),(0,a.kt)("p",null,"\u5bf9\u4e8e\u6570\u5b57\u5e8f\u5217\u6309\u4f4d\u5e94\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"AND")," \u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8bed\u6cd5")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"groupBitAnd(expr)\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u53c2\u6570")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"expr")," \u2013 \u7ed3\u679c\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"UInt*")," \u7c7b\u578b\u7684\u8868\u8fbe\u5f0f\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u503c")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"UInt*")," \u7c7b\u578b\u7684\u503c\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,a.kt)("p",null,"\u6d4b\u8bd5\u6570\u636e:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"binary     decimal\n00101100 = 44\n00011100 = 28\n00001101 = 13\n01010101 = 85\n")),(0,a.kt)("p",null,"\u67e5\u8be2:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT groupBitAnd(num) FROM t\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"num")," \u662f\u5305\u542b\u6d4b\u8bd5\u6570\u636e\u7684\u5217\u3002"),(0,a.kt)("p",null,"\u7ed3\u679c:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"binary     decimal\n00000100 = 4\n")))}g.isMDXComponent=!0}}]);