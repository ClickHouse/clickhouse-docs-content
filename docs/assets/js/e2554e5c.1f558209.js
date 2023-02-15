"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[64255],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>y});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(t),m=l,y=c["".concat(s,".").concat(m)]||c[m]||d[m]||r;return t?a.createElement(y,o(o({ref:n},u),{},{components:t})):a.createElement(y,o({ref:n},u))}));function y(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,o=new Array(r);o[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[c]="string"==typeof e?e:l,o[1]=i;for(var p=2;p<r;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},52245:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var a=t(87462),l=(t(67294),t(3905));const r={slug:"/en/sql-reference/data-types/nullable",sidebar_position:55,sidebar_label:"Nullable"},o="Nullable(typename)",i={unversionedId:"en/sql-reference/data-types/nullable",id:"en/sql-reference/data-types/nullable",title:"Nullable(typename)",description:"Allows to store special marker (NULL) that denotes \u201cmissing value\u201d alongside normal values allowed by TypeName. For example, a Nullable(Int8) type column can store Int8 type values, and the rows that do not have a value will store NULL.",source:"@site/docs/en/sql-reference/data-types/nullable.md",sourceDirName:"en/sql-reference/data-types",slug:"/en/sql-reference/data-types/nullable",permalink:"/docs/en/sql-reference/data-types/nullable",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/data-types/nullable.md",tags:[],version:"current",sidebarPosition:55,frontMatter:{slug:"/en/sql-reference/data-types/nullable",sidebar_position:55,sidebar_label:"Nullable"},sidebar:"english",previous:{title:"Tuple(T1, T2, ...)",permalink:"/docs/en/sql-reference/data-types/tuple"},next:{title:"Special Data Types",permalink:"/docs/en/sql-reference/data-types/special-data-types/"}},s={},p=[{value:"Storage Features",id:"storage-features",level:2},{value:"Finding NULL",id:"finding-null",level:2},{value:"Usage Example",id:"usage-example",level:2}],u={toc:p},c="wrapper";function d(e){let{components:n,...t}=e;return(0,l.kt)(c,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"nullabletypename"},"Nullable(typename)"),(0,l.kt)("p",null,"Allows to store special marker (",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/syntax"},"NULL"),") that denotes \u201cmissing value\u201d alongside normal values allowed by ",(0,l.kt)("inlineCode",{parentName:"p"},"TypeName"),". For example, a ",(0,l.kt)("inlineCode",{parentName:"p"},"Nullable(Int8)")," type column can store ",(0,l.kt)("inlineCode",{parentName:"p"},"Int8")," type values, and the rows that do not have a value will store ",(0,l.kt)("inlineCode",{parentName:"p"},"NULL"),"."),(0,l.kt)("p",null,"For a ",(0,l.kt)("inlineCode",{parentName:"p"},"TypeName"),", you can\u2019t use composite data types ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/array"},"Array")," and ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/tuple"},"Tuple"),". Composite data types can contain ",(0,l.kt)("inlineCode",{parentName:"p"},"Nullable")," type values, such as ",(0,l.kt)("inlineCode",{parentName:"p"},"Array(Nullable(Int8))"),"."),(0,l.kt)("p",null,"A ",(0,l.kt)("inlineCode",{parentName:"p"},"Nullable")," type field can\u2019t be included in table indexes."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"NULL")," is the default value for any ",(0,l.kt)("inlineCode",{parentName:"p"},"Nullable")," type, unless specified otherwise in the ClickHouse server configuration."),(0,l.kt)("h2",{id:"storage-features"},"Storage Features"),(0,l.kt)("p",null,"To store ",(0,l.kt)("inlineCode",{parentName:"p"},"Nullable")," type values in a table column, ClickHouse uses a separate file with ",(0,l.kt)("inlineCode",{parentName:"p"},"NULL")," masks in addition to normal file with values. Entries in masks file allow ClickHouse to distinguish between ",(0,l.kt)("inlineCode",{parentName:"p"},"NULL")," and a default value of corresponding data type for each table row. Because of an additional file, ",(0,l.kt)("inlineCode",{parentName:"p"},"Nullable")," column consumes additional storage space compared to a similar normal one."),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Using ",(0,l.kt)("inlineCode",{parentName:"p"},"Nullable")," almost always negatively affects performance, keep this in mind when designing your databases.")),(0,l.kt)("h2",{id:"finding-null"},"Finding NULL"),(0,l.kt)("p",null,"It is possible to find ",(0,l.kt)("inlineCode",{parentName:"p"},"NULL")," values in a column by using ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," subcolumn without reading the whole column. It returns ",(0,l.kt)("inlineCode",{parentName:"p"},"1")," if the corresponding value is ",(0,l.kt)("inlineCode",{parentName:"p"},"NULL")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"0")," otherwise."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("p",null,"Query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE nullable (`n` Nullable(UInt32)) ENGINE = MergeTree ORDER BY tuple();\n\nINSERT INTO nullable VALUES (1) (NULL) (2) (NULL);\n\nSELECT n.null FROM nullable;\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500n.null\u2500\u2510\n\u2502      0 \u2502\n\u2502      1 \u2502\n\u2502      0 \u2502\n\u2502      1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"usage-example"},"Usage Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE t_null(x Int8, y Nullable(Int8)) ENGINE TinyLog\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO t_null VALUES (1, NULL), (2, 3)\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT x + y FROM t_null\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500plus(x, y)\u2500\u2510\n\u2502       \u1d3a\u1d41\u1d38\u1d38 \u2502\n\u2502          5 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}d.isMDXComponent=!0}}]);