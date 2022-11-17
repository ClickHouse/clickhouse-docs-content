"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[34787],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),y=r,d=u["".concat(o,".").concat(y)]||u[y]||m[y]||s;return n?a.createElement(d,i(i({ref:t},c),{},{components:n})):a.createElement(d,i({ref:t},c))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<s;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},27549:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const s={slug:"/zh/operations/system-tables/data_type_families"},i="system.data_type_families",l={unversionedId:"zh/operations/system-tables/data_type_families",id:"zh/operations/system-tables/data_type_families",title:"system.data_type_families",description:"systemtables-datatype_families}",source:"@site/docs/zh/operations/system-tables/data_type_families.md",sourceDirName:"zh/operations/system-tables",slug:"/zh/operations/system-tables/data_type_families",permalink:"/docs/zh/operations/system-tables/data_type_families",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/operations/system-tables/data_type_families.md",tags:[],version:"current",frontMatter:{slug:"/zh/operations/system-tables/data_type_families"},sidebar:"chinese",previous:{title:"system.data_skipping_indices",permalink:"/docs/zh/operations/system-tables/data_skipping_indices"},next:{title:"system.databases",permalink:"/docs/zh/operations/system-tables/databases"}},o={},p=[],c={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"system_tables-data_type_families"},"system.data_type_families"),(0,r.kt)("p",null,"\u5305\u542b\u6709\u5173\u53d7\u652f\u6301\u7684",(0,r.kt)("a",{parentName:"p",href:"../../sql-reference/data-types/"},"\u6570\u636e\u7c7b\u578b"),"\u7684\u4fe1\u606f."),(0,r.kt)("p",null,"\u5217\u5b57\u6bb5\u5305\u62ec:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/string"},"String"),") \u2014 \u6570\u636e\u7c7b\u578b\u7684\u540d\u79f0."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"case_insensitive")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/int-uint"},"UInt8"),") \u2014 \u8be5\u5c5e\u6027\u663e\u793a\u662f\u5426\u53ef\u4ee5\u5728\u67e5\u8be2\u4e2d\u4ee5\u4e0d\u533a\u5206\u5927\u5c0f\u5199\u7684\u65b9\u5f0f\u4f7f\u7528\u6570\u636e\u7c7b\u578b\u540d\u79f0\u3002\u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"li"},"Date")," \u548c ",(0,r.kt)("inlineCode",{parentName:"li"},"date")," \u90fd\u662f\u6709\u6548\u7684\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"alias_to")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/string"},"String"),") \u2014 \u540d\u79f0\u4e3a\u522b\u540d\u7684\u6570\u636e\u7c7b\u578b\u540d\u79f0\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM system.data_type_families WHERE alias_to = 'String';\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500name\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500case_insensitive\u2500\u252c\u2500alias_to\u2500\u2510\n\u2502 LONGBLOB   \u2502                1 \u2502 String   \u2502\n\u2502 LONGTEXT   \u2502                1 \u2502 String   \u2502\n\u2502 TINYTEXT   \u2502                1 \u2502 String   \u2502\n\u2502 TEXT       \u2502                1 \u2502 String   \u2502\n\u2502 VARCHAR    \u2502                1 \u2502 String   \u2502\n\u2502 MEDIUMBLOB \u2502                1 \u2502 String   \u2502\n\u2502 BLOB       \u2502                1 \u2502 String   \u2502\n\u2502 TINYBLOB   \u2502                1 \u2502 String   \u2502\n\u2502 CHAR       \u2502                1 \u2502 String   \u2502\n\u2502 MEDIUMTEXT \u2502                1 \u2502 String   \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u53e6\u8bf7\u53c2\u9605")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/syntax"},"Syntax")," \u2014 \u5173\u4e8e\u6240\u652f\u6301\u7684\u8bed\u6cd5\u4fe1\u606f.")))}m.isMDXComponent=!0}}]);