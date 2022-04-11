"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[17653],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return g}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),u=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=u(e.components);return n.createElement(p.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=u(t),g=o,m=f["".concat(p,".").concat(g)]||f[g]||s[g]||a;return t?n.createElement(m,i(i({ref:r},l),{},{components:t})):n.createElement(m,i({ref:r},l))}));function g(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},1210:function(e,r,t){t.r(r),t.d(r,{assets:function(){return l},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return s}});var n=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],c={sidebar_position:127},p="groupBitXor",u={unversionedId:"zh/sql-reference/aggregate-functions/reference/groupbitxor",id:"zh/sql-reference/aggregate-functions/reference/groupbitxor",title:"groupBitXor",description:"groupbitxor}",source:"@site/docs/zh/sql-reference/aggregate-functions/reference/groupbitxor.md",sourceDirName:"zh/sql-reference/aggregate-functions/reference",slug:"/zh/sql-reference/aggregate-functions/reference/groupbitxor",permalink:"/zh/sql-reference/aggregate-functions/reference/groupbitxor",editUrl:"https://github.com/ClickHouse/clickhouse-docs/tree/main/docs/zh/sql-reference/aggregate-functions/reference/groupbitxor.md",tags:[],version:"current",sidebarPosition:127,frontMatter:{sidebar_position:127},sidebar:"chinese",previous:{title:"groupBitOr",permalink:"/zh/sql-reference/aggregate-functions/reference/groupbitor"},next:{title:"groupBitmap",permalink:"/zh/sql-reference/aggregate-functions/reference/groupbitmap"}},l={},s=[],f={toc:s};function g(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"groupbitxor"},"groupBitXor"),(0,a.kt)("p",null,"\u5bf9\u4e8e\u6570\u5b57\u5e8f\u5217\u6309\u4f4d\u5e94\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"XOR")," \u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8bed\u6cd5")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"groupBitXor(expr)\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u53c2\u6570")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"expr")," \u2013 \u7ed3\u679c\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"UInt*")," \u7c7b\u578b\u7684\u8868\u8fbe\u5f0f\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u503c")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"UInt*")," \u7c7b\u578b\u7684\u503c\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,a.kt)("p",null,"\u6d4b\u8bd5\u6570\u636e:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"binary     decimal\n00101100 = 44\n00011100 = 28\n00001101 = 13\n01010101 = 85\n")),(0,a.kt)("p",null,"\u67e5\u8be2:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT groupBitXor(num) FROM t\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"num")," \u662f\u5305\u542b\u6d4b\u8bd5\u6570\u636e\u7684\u5217\u3002"),(0,a.kt)("p",null,"\u7ed3\u679c:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"binary     decimal\n01101000 = 104\n")))}g.isMDXComponent=!0}}]);