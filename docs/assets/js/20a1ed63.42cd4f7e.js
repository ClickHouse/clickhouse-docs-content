"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[80457],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,y=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return n?a.createElement(y,s(s({ref:t},c),{},{components:n})):a.createElement(y,s({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},29259:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={slug:"/en/operations/system-tables/data_type_families"},s="data_type_families",o={unversionedId:"en/operations/system-tables/data_type_families",id:"en/operations/system-tables/data_type_families",title:"data_type_families",description:"Contains information about supported data types.",source:"@site/docs/en/operations/system-tables/data_type_families.md",sourceDirName:"en/operations/system-tables",slug:"/en/operations/system-tables/data_type_families",permalink:"/docs/en/operations/system-tables/data_type_families",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/operations/system-tables/data_type_families.md",tags:[],version:"current",frontMatter:{slug:"/en/operations/system-tables/data_type_families"},sidebar:"english",previous:{title:"data_skipping_indices",permalink:"/docs/en/operations/system-tables/data_skipping_indices"},next:{title:"databases",permalink:"/docs/en/operations/system-tables/databases"}},l={},p=[],c={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"data_type_families"},"data_type_families"),(0,r.kt)("p",null,"Contains information about supported ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/"},"data types"),"."),(0,r.kt)("p",null,"Columns:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/string"},"String"),") \u2014 Data type name."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"case_insensitive")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt8"),") \u2014 Property that shows whether you can use a data type name in a query in case insensitive manner or not. For example, ",(0,r.kt)("inlineCode",{parentName:"li"},"Date")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"date")," are both valid."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"alias_to")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/string"},"String"),") \u2014 Data type name for which ",(0,r.kt)("inlineCode",{parentName:"li"},"name")," is an alias.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM system.data_type_families WHERE alias_to = 'String'\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500name\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500case_insensitive\u2500\u252c\u2500alias_to\u2500\u2510\n\u2502 LONGBLOB   \u2502                1 \u2502 String   \u2502\n\u2502 LONGTEXT   \u2502                1 \u2502 String   \u2502\n\u2502 TINYTEXT   \u2502                1 \u2502 String   \u2502\n\u2502 TEXT       \u2502                1 \u2502 String   \u2502\n\u2502 VARCHAR    \u2502                1 \u2502 String   \u2502\n\u2502 MEDIUMBLOB \u2502                1 \u2502 String   \u2502\n\u2502 BLOB       \u2502                1 \u2502 String   \u2502\n\u2502 TINYBLOB   \u2502                1 \u2502 String   \u2502\n\u2502 CHAR       \u2502                1 \u2502 String   \u2502\n\u2502 MEDIUMTEXT \u2502                1 \u2502 String   \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"See Also")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/syntax"},"Syntax")," \u2014 Information about supported syntax.")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/system-tables/data_type_families"},"Original article")," "))}m.isMDXComponent=!0}}]);