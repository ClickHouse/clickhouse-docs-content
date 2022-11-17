"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[37531],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>f});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),g=c(t),f=o,m=g["".concat(p,".").concat(f)]||g[f]||s[f]||a;return t?n.createElement(m,i(i({ref:r},u),{},{components:t})):n.createElement(m,i({ref:r},u))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=g;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},27578:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=t(87462),o=(t(67294),t(3905));const a={slug:"/en/sql-reference/aggregate-functions/reference/groupbitxor",sidebar_position:127},i="groupBitXor",l={unversionedId:"en/sql-reference/aggregate-functions/reference/groupbitxor",id:"en/sql-reference/aggregate-functions/reference/groupbitxor",title:"groupBitXor",description:"Applies bitwise XOR for series of numbers.",source:"@site/docs/en/sql-reference/aggregate-functions/reference/groupbitxor.md",sourceDirName:"en/sql-reference/aggregate-functions/reference",slug:"/en/sql-reference/aggregate-functions/reference/groupbitxor",permalink:"/docs/en/sql-reference/aggregate-functions/reference/groupbitxor",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/aggregate-functions/reference/groupbitxor.md",tags:[],version:"current",sidebarPosition:127,frontMatter:{slug:"/en/sql-reference/aggregate-functions/reference/groupbitxor",sidebar_position:127},sidebar:"english",previous:{title:"groupBitOr",permalink:"/docs/en/sql-reference/aggregate-functions/reference/groupbitor"},next:{title:"groupBitmap",permalink:"/docs/en/sql-reference/aggregate-functions/reference/groupbitmap"}},p={},c=[],u={toc:c};function s(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"groupbitxor"},"groupBitXor"),(0,o.kt)("p",null,"Applies bitwise ",(0,o.kt)("inlineCode",{parentName:"p"},"XOR")," for series of numbers."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"groupBitXor(expr)\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"expr")," \u2013 An expression that results in ",(0,o.kt)("inlineCode",{parentName:"p"},"UInt*")," type."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Return value")),(0,o.kt)("p",null,"Value of the ",(0,o.kt)("inlineCode",{parentName:"p"},"UInt*")," type."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example")),(0,o.kt)("p",null,"Test data:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"binary     decimal\n00101100 = 44\n00011100 = 28\n00001101 = 13\n01010101 = 85\n")),(0,o.kt)("p",null,"Query:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT groupBitXor(num) FROM t\n")),(0,o.kt)("p",null,"Where ",(0,o.kt)("inlineCode",{parentName:"p"},"num")," is the column with the test data."),(0,o.kt)("p",null,"Result:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"binary     decimal\n01101000 = 104\n")))}s.isMDXComponent=!0}}]);