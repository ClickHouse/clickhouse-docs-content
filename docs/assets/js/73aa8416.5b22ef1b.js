"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[98639],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},i="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),i=p(n),m=l,d=i["".concat(c,".").concat(m)]||i[m]||f[m]||a;return n?r.createElement(d,s(s({ref:t},u),{},{components:n})):r.createElement(d,s({ref:t},u))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,s=new Array(a);s[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[i]="string"==typeof e?e:l,s[1]=o;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},29516:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var r=n(87462),l=(n(67294),n(3905));const a={slug:"/zh/sql-reference/statements/select/where",sidebar_label:"WHERE"},s="WHERE",o={unversionedId:"zh/sql-reference/statements/select/where",id:"zh/sql-reference/statements/select/where",title:"WHERE",description:"select-where}",source:"@site/docs/zh/sql-reference/statements/select/where.md",sourceDirName:"zh/sql-reference/statements/select",slug:"/zh/sql-reference/statements/select/where",permalink:"/docs/zh/sql-reference/statements/select/where",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/statements/select/where.md",tags:[],version:"current",frontMatter:{slug:"/zh/sql-reference/statements/select/where",sidebar_label:"WHERE"},sidebar:"chinese",previous:{title:"UNION ALL",permalink:"/docs/zh/sql-reference/statements/select/union"},next:{title:"WITH",permalink:"/docs/zh/sql-reference/statements/select/with"}},c={},p=[],u={toc:p},i="wrapper";function f(e){let{components:t,...n}=e;return(0,l.kt)(i,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"select-where"},"WHERE"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"WHERE")," \u5b50\u53e5\u5141\u8bb8\u8fc7\u6ee4\u6765\u81ea",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT"),"\u7684\u5b50\u53e5 ",(0,l.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/statements/select/from"},"FROM")," \u7684\u6570\u636e."),(0,l.kt)("p",null,"\u5982\u679c\u6709\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"WHERE")," \u5b50\u53e5\uff0c\u5b83\u5fc5\u987b\u5305\u542b\u4e00\u4e2a\u8868\u8fbe\u5f0f\u4e0e ",(0,l.kt)("inlineCode",{parentName:"p"},"UInt8")," \u7c7b\u578b\u3002 \u8fd9\u901a\u5e38\u662f\u4e00\u4e2a\u5e26\u6709\u6bd4\u8f83\u548c\u903b\u8f91\u8fd0\u7b97\u7b26\u7684\u8868\u8fbe\u5f0f\u3002 \u8868\u8fbe\u5f0f\u8ba1\u7b97\u7ed3\u679c\u4e3a0\u7684\u884c\u5c06\u88ab\u6392\u9664\u5728\u5728\u8fdb\u4e00\u6b65\u7684\u8f6c\u6362\u6216\u7ed3\u679c\u4e4b\u5916\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u57fa\u7840\u8868\u5f15\u64ce\u652f\u6301\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"WHERE"),"\u8868\u8fbe\u5f0f\u4f1a\u4f7f\u7528\u7d22\u5f15\u548c\u5206\u533a\u8fdb\u884c\u526a\u679d\u3002"),(0,l.kt)("p",null,'!!! note "\u6ce8"\n\u6709\u4e00\u4e2a\u53eb\u505a\u8fc7\u6ee4\u4f18\u5316 ',(0,l.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/statements/select/prewhere"},"prewhere")," \u7684\u4e1c\u897f."),(0,l.kt)("p",null,"\u5982\u679c\u9700\u8981\u6d4b\u8bd5\u4e00\u4e2a ",(0,l.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/syntax#null-literal"},"NULL")," \u503c\uff0c\u8bf7\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/operators/#operator-is-null"},"IS NULL")," and ",(0,l.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/operators/#is-not-null"},"IS NOT NULL")," \u8fd0\u7b97\u7b26\u6216 ",(0,l.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/functions/functions-for-nulls#isnull"},"isNull")," \u548c ",(0,l.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/functions/functions-for-nulls#isnotnull"},"isNotNull")," \u51fd\u6570\u3002\u5426\u5219\u5e26\u6709 NULL \u7684\u8868\u8fbe\u5f0f\u6c38\u8fdc\u4e0d\u4f1a\u901a\u8fc7\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,l.kt)("p",null,"\u5728 ",(0,l.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/table-functions/numbers"},"numbers table")," \u8868\u4e0a\u6267\u884c\u4e0b\u8ff0\u8bed\u53e5\u4ee5\u627e\u5230\u4e3a3\u7684\u500d\u6570\u4e14\u5927\u4e8e10\u7684\u6570\u5b57\uff1a\nTo find numbers that are multiples of 3 and are greater than 10 execute the following query on the :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT number FROM numbers(20) WHERE (number > 10) AND (number % 3 == 0);\n")),(0,l.kt)("p",null,"\u7ed3\u679c:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500number\u2500\u2510\n\u2502     12 \u2502\n\u2502     15 \u2502\n\u2502     18 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"\u5e26\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},"NULL")," \u503c\u7684\u67e5\u8be2:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE t_null(x Int8, y Nullable(Int8)) ENGINE=MergeTree() ORDER BY x;\nINSERT INTO t_null VALUES (1, NULL), (2, 3);\n\nSELECT * FROM t_null WHERE y IS NULL;\nSELECT * FROM t_null WHERE y != 0;\n")),(0,l.kt)("p",null,"\u7ed3\u679c:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500x\u2500\u252c\u2500\u2500\u2500\u2500y\u2500\u2510\n\u2502 1 \u2502 \u1d3a\u1d41\u1d38\u1d38 \u2502\n\u2514\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500x\u2500\u252c\u2500y\u2500\u2510\n\u2502 2 \u2502 3 \u2502\n\u2514\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2518\n")))}f.isMDXComponent=!0}}]);