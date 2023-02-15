"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[6404],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=l,f=m["".concat(o,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[m]="string"==typeof e?e:l,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},45087:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(87462),l=(n(67294),n(3905));const a={slug:"/zh/sql-reference/statements/select/limit-by",sidebar_label:"LIMIT BY"},i="LIMIT BY\u5b50\u53e5",s={unversionedId:"zh/sql-reference/statements/select/limit-by",id:"zh/sql-reference/statements/select/limit-by",title:"LIMIT BY\u5b50\u53e5",description:"limit-by-clause}",source:"@site/docs/zh/sql-reference/statements/select/limit-by.md",sourceDirName:"zh/sql-reference/statements/select",slug:"/zh/sql-reference/statements/select/limit-by",permalink:"/docs/zh/sql-reference/statements/select/limit-by",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/statements/select/limit-by.md",tags:[],version:"current",frontMatter:{slug:"/zh/sql-reference/statements/select/limit-by",sidebar_label:"LIMIT BY"},sidebar:"chinese",previous:{title:"JOIN",permalink:"/docs/zh/sql-reference/statements/select/join"},next:{title:"LIMIT",permalink:"/docs/zh/sql-reference/statements/select/limit"}},o={},c=[{value:"\u4f8b",id:"examples",level:2}],p={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,l.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"limit-by-clause"},"LIMIT BY\u5b50\u53e5"),(0,l.kt)("p",null,"\u4e00\u4e2a\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"LIMIT n BY expressions"),"\u4ece\u53e5\u7684\u67e5\u8be2\u4f1a\u4ee5\u53bb\u91cd\u540e\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"expressions"),"\u7ed3\u679c\u5206\u7ec4\uff0c\u6bcf\u4e00\u5206\u7ec4\u9009\u62e9\u524d",(0,l.kt)("inlineCode",{parentName:"p"},"n"),"\u884c\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"LIMIT BY"),"\u6307\u5b9a\u7684\u503c\u53ef\u4ee5\u662f\u4efb\u610f\u6570\u91cf\u7684",(0,l.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/syntax#syntax-expressions"},"\u8868\u8fbe\u5f0f"),"\u3002"),(0,l.kt)("p",null,"ClickHouse\u652f\u6301\u4ee5\u4e0b\u8bed\u6cd5\u53d8\u4f53:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"LIMIT [offset_value, ]n BY expressions")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"LIMIT n OFFSET offset_value BY expressions"))),(0,l.kt)("p",null,"\u5904\u7406\u67e5\u8be2\u65f6\uff0cClickHouse\u9996\u5148\u9009\u62e9\u7ecf\u7531\u6392\u5e8f\u952e\u6392\u5e8f\u8fc7\u540e\u7684\u6570\u636e\u3002\u6392\u5e8f\u952e\u53ef\u4ee5\u663e\u5f0f\u5730\u4f7f\u7528",(0,l.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/statements/select/order-by#select-order-by"},"ORDER BY"),"\u4ece\u53e5\u6307\u5b9a\uff0c\u6216\u9690\u5f0f\u5730\u4f7f\u7528\u8868\u5f15\u64ce\u4f7f\u7528\u7684\u6392\u5e8f\u952e\uff08\u6570\u636e\u7684\u987a\u5e8f\u4ec5\u5728\u4f7f\u7528",(0,l.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/statements/select/order-by#select-order-by"},"ORDER BY"),"\u65f6\u624d\u53ef\u4ee5\u4fdd\u8bc1\uff0c\u5426\u5219\u7531\u4e8e\u591a\u7ebf\u7a0b\u5904\u7406\uff0c\u6570\u636e\u987a\u5e8f\u4f1a\u968f\u673a\u5316\uff09\u3002\u7136\u540eClickHouse\u6267\u884c",(0,l.kt)("inlineCode",{parentName:"p"},"LIMIT n BY expressions"),"\u4ece\u53e5\uff0c\u5c06\u6bcf\u4e00\u884c\u6309 ",(0,l.kt)("inlineCode",{parentName:"p"},"expressions")," \u7684\u503c\u8fdb\u884c\u5206\u7ec4\uff0c\u5e76\u5bf9\u6bcf\u4e00\u5206\u7ec4\u8fd4\u56de\u524d",(0,l.kt)("inlineCode",{parentName:"p"},"n"),"\u884c\u3002\u5982\u679c\u6307\u5b9a\u4e86",(0,l.kt)("inlineCode",{parentName:"p"},"OFFSET"),"\uff0c\u90a3\u4e48\u5bf9\u4e8e\u6bcf\u4e00\u5206\u7ec4\uff0cClickHouse\u4f1a\u8df3\u8fc7\u524d",(0,l.kt)("inlineCode",{parentName:"p"},"offset_value"),"\u884c\uff0c\u63a5\u7740\u8fd4\u56de\u524d",(0,l.kt)("inlineCode",{parentName:"p"},"n"),"\u884c\u3002\u5982\u679c",(0,l.kt)("inlineCode",{parentName:"p"},"offset_value"),"\u5927\u4e8e\u67d0\u4e00\u5206\u7ec4\u7684\u884c\u6570\uff0cClickHouse\u4f1a\u4ece\u5206\u7ec4\u8fd4\u56de0\u884c\u3002"),(0,l.kt)("p",null,'!!! note "\u6ce8"\n',(0,l.kt)("inlineCode",{parentName:"p"},"LIMIT BY"),"\u4e0e",(0,l.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/statements/select/limit"},"LIMIT"),"\u6ca1\u6709\u5173\u7cfb\u3002\u5b83\u4eec\u53ef\u4ee5\u5728\u540c\u4e00\u4e2a\u67e5\u8be2\u4e2d\u4f7f\u7528\u3002"),(0,l.kt)("h2",{id:"examples"},"\u4f8b"),(0,l.kt)("p",null,"\u6837\u4f8b\u8868:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE limit_by(id Int, val Int) ENGINE = Memory;\nINSERT INTO limit_by VALUES (1, 10), (1, 11), (1, 12), (2, 20), (2, 21);\n")),(0,l.kt)("p",null,"\u67e5\u8be2:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM limit_by ORDER BY id, val LIMIT 2 BY id\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500id\u2500\u252c\u2500val\u2500\u2510\n\u2502  1 \u2502  10 \u2502\n\u2502  1 \u2502  11 \u2502\n\u2502  2 \u2502  20 \u2502\n\u2502  2 \u2502  21 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM limit_by ORDER BY id, val LIMIT 1, 2 BY id\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500id\u2500\u252c\u2500val\u2500\u2510\n\u2502  1 \u2502  11 \u2502\n\u2502  1 \u2502  12 \u2502\n\u2502  2 \u2502  21 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"\u4e0e ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT * FROM limit_by ORDER BY id, val LIMIT 2 OFFSET 1 BY id")," \u8fd4\u56de\u76f8\u540c\u7684\u7ed3\u679c\u3002"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u67e5\u8be2\u8fd4\u56de\u6bcf\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"domain,device_type"),"\u7ec4\u5408\u7684\u524d5\u4e2arefferrer\uff0c\u603b\u8ba1\u8fd4\u56de\u81f3\u591a100\u884c(",(0,l.kt)("inlineCode",{parentName:"p"},"LIMIT n BY + LIMIT"),")\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    domainWithoutWWW(URL) AS domain,\n    domainWithoutWWW(REFERRER_URL) AS referrer,\n    device_type,\n    count() cnt\nFROM hits\nGROUP BY domain, referrer, device_type\nORDER BY cnt DESC\nLIMIT 5 BY domain, device_type\nLIMIT 100\n")))}u.isMDXComponent=!0}}]);