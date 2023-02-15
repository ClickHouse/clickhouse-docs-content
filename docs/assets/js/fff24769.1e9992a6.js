"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[24569],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),c=r,h=m["".concat(s,".").concat(c)]||m[c]||d[c]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},88194:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={slug:"/en/sql-reference/statements/select/group-by",sidebar_label:"GROUP BY"},i="GROUP BY Clause",l={unversionedId:"en/sql-reference/statements/select/group-by",id:"en/sql-reference/statements/select/group-by",title:"GROUP BY Clause",description:"GROUP BY clause switches the SELECT query into an aggregation mode, which works as follows:",source:"@site/docs/en/sql-reference/statements/select/group-by.md",sourceDirName:"en/sql-reference/statements/select",slug:"/en/sql-reference/statements/select/group-by",permalink:"/docs/en/sql-reference/statements/select/group-by",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/statements/select/group-by.md",tags:[],version:"current",frontMatter:{slug:"/en/sql-reference/statements/select/group-by",sidebar_label:"GROUP BY"},sidebar:"english",previous:{title:"FROM",permalink:"/docs/en/sql-reference/statements/select/from"},next:{title:"HAVING",permalink:"/docs/en/sql-reference/statements/select/having"}},s={},p=[{value:"NULL Processing",id:"null-processing",level:2},{value:"ROLLUP Modifier",id:"rollup-modifier",level:2},{value:"CUBE Modifier",id:"cube-modifier",level:2},{value:"WITH TOTALS Modifier",id:"with-totals-modifier",level:2},{value:"Configuring Totals Processing",id:"configuring-totals-processing",level:3},{value:"GROUP BY ALL",id:"group-by-all",level:2},{value:"Examples",id:"examples",level:2},{value:"GROUPING SETS modifier",id:"grouping-sets-modifier",level:2},{value:"Implementation Details",id:"implementation-details",level:2},{value:"GROUP BY Optimization Depending on Table Sorting Key",id:"group-by-optimization-depending-on-table-sorting-key",level:3},{value:"GROUP BY in External Memory",id:"group-by-in-external-memory",level:3}],u={toc:p},m="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"group-by-clause"},"GROUP BY Clause"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GROUP BY")," clause switches the ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT")," query into an aggregation mode, which works as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GROUP BY")," clause contains a list of expressions (or a single expression, which is considered to be the list of length one). This list acts as a \u201cgrouping key\u201d, while each individual expression will be referred to as a \u201ckey expression\u201d."),(0,r.kt)("li",{parentName:"ul"},"All the expressions in the ",(0,r.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/statements/select/"},"SELECT"),", ",(0,r.kt)("a",{parentName:"li",href:"../../../sql-reference/statements/select/having"},"HAVING"),", and ",(0,r.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/statements/select/order-by"},"ORDER BY")," clauses ",(0,r.kt)("strong",{parentName:"li"},"must")," be calculated based on key expressions ",(0,r.kt)("strong",{parentName:"li"},"or")," on ",(0,r.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/aggregate-functions/"},"aggregate functions")," over non-key expressions (including plain columns). In other words, each column selected from the table must be used either in a key expression or inside an aggregate function, but not both."),(0,r.kt)("li",{parentName:"ul"},"Result of aggregating ",(0,r.kt)("inlineCode",{parentName:"li"},"SELECT")," query will contain as many rows as there were unique values of \u201cgrouping key\u201d in source table. Usually this signficantly reduces the row count, often by orders of magnitude, but not necessarily: row count stays the same if all \u201cgrouping key\u201d values were distinct.")),(0,r.kt)("p",null,"When you want to group data in the table by column numbers instead of column names, enable the setting ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/operations/settings/settings#enable-positional-arguments"},"enable_positional_arguments"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"There\u2019s an additional way to run aggregation over a table. If a query contains table columns only inside aggregate functions, the ",(0,r.kt)("inlineCode",{parentName:"p"},"GROUP BY clause")," can be omitted, and aggregation by an empty set of keys is assumed. Such queries always return exactly one row.")),(0,r.kt)("h2",{id:"null-processing"},"NULL Processing"),(0,r.kt)("p",null,"For grouping, ClickHouse interprets ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/syntax#null-literal"},"NULL")," as a value, and ",(0,r.kt)("inlineCode",{parentName:"p"},"NULL==NULL"),". It differs from ",(0,r.kt)("inlineCode",{parentName:"p"},"NULL")," processing in most other contexts."),(0,r.kt)("p",null,"Here\u2019s an example to show what this means."),(0,r.kt)("p",null,"Assume you have this table:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500x\u2500\u252c\u2500\u2500\u2500\u2500y\u2500\u2510\n\u2502 1 \u2502    2 \u2502\n\u2502 2 \u2502 \u1d3a\u1d41\u1d38\u1d38 \u2502\n\u2502 3 \u2502    2 \u2502\n\u2502 3 \u2502    3 \u2502\n\u2502 3 \u2502 \u1d3a\u1d41\u1d38\u1d38 \u2502\n\u2514\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"The query ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT sum(x), y FROM t_null_big GROUP BY y")," results in:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500sum(x)\u2500\u252c\u2500\u2500\u2500\u2500y\u2500\u2510\n\u2502      4 \u2502    2 \u2502\n\u2502      3 \u2502    3 \u2502\n\u2502      5 \u2502 \u1d3a\u1d41\u1d38\u1d38 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"You can see that ",(0,r.kt)("inlineCode",{parentName:"p"},"GROUP BY")," for ",(0,r.kt)("inlineCode",{parentName:"p"},"y = NULL")," summed up ",(0,r.kt)("inlineCode",{parentName:"p"},"x"),", as if ",(0,r.kt)("inlineCode",{parentName:"p"},"NULL")," is this value."),(0,r.kt)("p",null,"If you pass several keys to ",(0,r.kt)("inlineCode",{parentName:"p"},"GROUP BY"),", the result will give you all the combinations of the selection, as if ",(0,r.kt)("inlineCode",{parentName:"p"},"NULL")," were a specific value."),(0,r.kt)("h2",{id:"rollup-modifier"},"ROLLUP Modifier"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ROLLUP")," modifier is used to calculate subtotals for the key expressions, based on their order in the ",(0,r.kt)("inlineCode",{parentName:"p"},"GROUP BY")," list. The subtotals rows are added after the result table."),(0,r.kt)("p",null,"The subtotals are calculated in the reverse order: at first subtotals are calculated for the last key expression in the list, then for the previous one, and so on up to the first key expression."),(0,r.kt)("p",null,'In the subtotals rows the values of already "grouped" key expressions are set to ',(0,r.kt)("inlineCode",{parentName:"p"},"0")," or empty line."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Mind that ",(0,r.kt)("a",{parentName:"p",href:"../../../sql-reference/statements/select/having"},"HAVING")," clause can affect the subtotals results.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("p",null,"Consider the table t:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500year\u2500\u252c\u2500month\u2500\u252c\u2500day\u2500\u2510\n\u2502 2019 \u2502     1 \u2502   5 \u2502\n\u2502 2019 \u2502     1 \u2502  15 \u2502\n\u2502 2020 \u2502     1 \u2502   5 \u2502\n\u2502 2020 \u2502     1 \u2502  15 \u2502\n\u2502 2020 \u2502    10 \u2502   5 \u2502\n\u2502 2020 \u2502    10 \u2502  15 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"Query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT year, month, day, count(*) FROM t GROUP BY ROLLUP(year, month, day);\n")),(0,r.kt)("p",null,"As ",(0,r.kt)("inlineCode",{parentName:"p"},"GROUP BY"),' section has three key expressions, the result contains four tables with subtotals "rolled up" from right to left:'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GROUP BY year, month, day"),";"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GROUP BY year, month")," (and ",(0,r.kt)("inlineCode",{parentName:"li"},"day")," column is filled with zeros);"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GROUP BY year")," (now ",(0,r.kt)("inlineCode",{parentName:"li"},"month, day")," columns are both filled with zeros);"),(0,r.kt)("li",{parentName:"ul"},"and totals (and all three key expression columns are zeros).")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500year\u2500\u252c\u2500month\u2500\u252c\u2500day\u2500\u252c\u2500count()\u2500\u2510\n\u2502 2020 \u2502    10 \u2502  15 \u2502       1 \u2502\n\u2502 2020 \u2502     1 \u2502   5 \u2502       1 \u2502\n\u2502 2019 \u2502     1 \u2502   5 \u2502       1 \u2502\n\u2502 2020 \u2502     1 \u2502  15 \u2502       1 \u2502\n\u2502 2019 \u2502     1 \u2502  15 \u2502       1 \u2502\n\u2502 2020 \u2502    10 \u2502   5 \u2502       1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500year\u2500\u252c\u2500month\u2500\u252c\u2500day\u2500\u252c\u2500count()\u2500\u2510\n\u2502 2019 \u2502     1 \u2502   0 \u2502       2 \u2502\n\u2502 2020 \u2502     1 \u2502   0 \u2502       2 \u2502\n\u2502 2020 \u2502    10 \u2502   0 \u2502       2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500year\u2500\u252c\u2500month\u2500\u252c\u2500day\u2500\u252c\u2500count()\u2500\u2510\n\u2502 2019 \u2502     0 \u2502   0 \u2502       2 \u2502\n\u2502 2020 \u2502     0 \u2502   0 \u2502       4 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500year\u2500\u252c\u2500month\u2500\u252c\u2500day\u2500\u252c\u2500count()\u2500\u2510\n\u2502    0 \u2502     0 \u2502   0 \u2502       6 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"The same query also can be written using ",(0,r.kt)("inlineCode",{parentName:"p"},"WITH")," keyword."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT year, month, day, count(*) FROM t GROUP BY year, month, day WITH ROLLUP;\n")),(0,r.kt)("h2",{id:"cube-modifier"},"CUBE Modifier"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"CUBE")," modifier is used to calculate subtotals for every combination of the key expressions in the ",(0,r.kt)("inlineCode",{parentName:"p"},"GROUP BY")," list. The subtotals rows are added after the result table."),(0,r.kt)("p",null,'In the subtotals rows the values of all "grouped" key expressions are set to ',(0,r.kt)("inlineCode",{parentName:"p"},"0")," or empty line."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Mind that ",(0,r.kt)("a",{parentName:"p",href:"../../../sql-reference/statements/select/having"},"HAVING")," clause can affect the subtotals results.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("p",null,"Consider the table t:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500year\u2500\u252c\u2500month\u2500\u252c\u2500day\u2500\u2510\n\u2502 2019 \u2502     1 \u2502   5 \u2502\n\u2502 2019 \u2502     1 \u2502  15 \u2502\n\u2502 2020 \u2502     1 \u2502   5 \u2502\n\u2502 2020 \u2502     1 \u2502  15 \u2502\n\u2502 2020 \u2502    10 \u2502   5 \u2502\n\u2502 2020 \u2502    10 \u2502  15 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"Query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT year, month, day, count(*) FROM t GROUP BY CUBE(year, month, day);\n")),(0,r.kt)("p",null,"As ",(0,r.kt)("inlineCode",{parentName:"p"},"GROUP BY")," section has three key expressions, the result contains eight tables with subtotals for all key expression combinations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GROUP BY year, month, day")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GROUP BY year, month")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GROUP BY year, day")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GROUP BY year")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GROUP BY month, day")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GROUP BY month")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GROUP BY day")),(0,r.kt)("li",{parentName:"ul"},"and totals.")),(0,r.kt)("p",null,"Columns, excluded from ",(0,r.kt)("inlineCode",{parentName:"p"},"GROUP BY"),", are filled with zeros."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500year\u2500\u252c\u2500month\u2500\u252c\u2500day\u2500\u252c\u2500count()\u2500\u2510\n\u2502 2020 \u2502    10 \u2502  15 \u2502       1 \u2502\n\u2502 2020 \u2502     1 \u2502   5 \u2502       1 \u2502\n\u2502 2019 \u2502     1 \u2502   5 \u2502       1 \u2502\n\u2502 2020 \u2502     1 \u2502  15 \u2502       1 \u2502\n\u2502 2019 \u2502     1 \u2502  15 \u2502       1 \u2502\n\u2502 2020 \u2502    10 \u2502   5 \u2502       1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500year\u2500\u252c\u2500month\u2500\u252c\u2500day\u2500\u252c\u2500count()\u2500\u2510\n\u2502 2019 \u2502     1 \u2502   0 \u2502       2 \u2502\n\u2502 2020 \u2502     1 \u2502   0 \u2502       2 \u2502\n\u2502 2020 \u2502    10 \u2502   0 \u2502       2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500year\u2500\u252c\u2500month\u2500\u252c\u2500day\u2500\u252c\u2500count()\u2500\u2510\n\u2502 2020 \u2502     0 \u2502   5 \u2502       2 \u2502\n\u2502 2019 \u2502     0 \u2502   5 \u2502       1 \u2502\n\u2502 2020 \u2502     0 \u2502  15 \u2502       2 \u2502\n\u2502 2019 \u2502     0 \u2502  15 \u2502       1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500year\u2500\u252c\u2500month\u2500\u252c\u2500day\u2500\u252c\u2500count()\u2500\u2510\n\u2502 2019 \u2502     0 \u2502   0 \u2502       2 \u2502\n\u2502 2020 \u2502     0 \u2502   0 \u2502       4 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500year\u2500\u252c\u2500month\u2500\u252c\u2500day\u2500\u252c\u2500count()\u2500\u2510\n\u2502    0 \u2502     1 \u2502   5 \u2502       2 \u2502\n\u2502    0 \u2502    10 \u2502  15 \u2502       1 \u2502\n\u2502    0 \u2502    10 \u2502   5 \u2502       1 \u2502\n\u2502    0 \u2502     1 \u2502  15 \u2502       2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500year\u2500\u252c\u2500month\u2500\u252c\u2500day\u2500\u252c\u2500count()\u2500\u2510\n\u2502    0 \u2502     1 \u2502   0 \u2502       4 \u2502\n\u2502    0 \u2502    10 \u2502   0 \u2502       2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500year\u2500\u252c\u2500month\u2500\u252c\u2500day\u2500\u252c\u2500count()\u2500\u2510\n\u2502    0 \u2502     0 \u2502   5 \u2502       3 \u2502\n\u2502    0 \u2502     0 \u2502  15 \u2502       3 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500year\u2500\u252c\u2500month\u2500\u252c\u2500day\u2500\u252c\u2500count()\u2500\u2510\n\u2502    0 \u2502     0 \u2502   0 \u2502       6 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"The same query also can be written using ",(0,r.kt)("inlineCode",{parentName:"p"},"WITH")," keyword."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT year, month, day, count(*) FROM t GROUP BY year, month, day WITH CUBE;\n")),(0,r.kt)("h2",{id:"with-totals-modifier"},"WITH TOTALS Modifier"),(0,r.kt)("p",null,"If the ",(0,r.kt)("inlineCode",{parentName:"p"},"WITH TOTALS")," modifier is specified, another row will be calculated. This row will have key columns containing default values (zeros or empty lines), and columns of aggregate functions with the values calculated across all the rows (the \u201ctotal\u201d values)."),(0,r.kt)("p",null,"This extra row is only produced in ",(0,r.kt)("inlineCode",{parentName:"p"},"JSON*"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"TabSeparated*"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"Pretty*")," formats, separately from the other rows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In ",(0,r.kt)("inlineCode",{parentName:"li"},"XML")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"JSON*")," formats, this row is output as a separate \u2018totals\u2019 field."),(0,r.kt)("li",{parentName:"ul"},"In ",(0,r.kt)("inlineCode",{parentName:"li"},"TabSeparated*"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"CSV*")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"Vertical")," formats, the row comes after the main result, preceded by an empty row (after the other data)."),(0,r.kt)("li",{parentName:"ul"},"In ",(0,r.kt)("inlineCode",{parentName:"li"},"Pretty*")," formats, the row is output as a separate table after the main result."),(0,r.kt)("li",{parentName:"ul"},"In ",(0,r.kt)("inlineCode",{parentName:"li"},"Template")," format, the row is output according to specified template."),(0,r.kt)("li",{parentName:"ul"},"In the other formats it is not available.")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"totals is output in the results of ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT")," queries, and is not output in ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT INTO ... SELECT"),". ")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"WITH TOTALS")," can be run in different ways when ",(0,r.kt)("a",{parentName:"p",href:"../../../sql-reference/statements/select/having"},"HAVING")," is present. The behavior depends on the ",(0,r.kt)("inlineCode",{parentName:"p"},"totals_mode")," setting."),(0,r.kt)("h3",{id:"configuring-totals-processing"},"Configuring Totals Processing"),(0,r.kt)("p",null,"By default, ",(0,r.kt)("inlineCode",{parentName:"p"},"totals_mode = 'before_having'"),". In this case, \u2018totals\u2019 is calculated across all rows, including the ones that do not pass through HAVING and ",(0,r.kt)("inlineCode",{parentName:"p"},"max_rows_to_group_by"),"."),(0,r.kt)("p",null,"The other alternatives include only the rows that pass through HAVING in \u2018totals\u2019, and behave differently with the setting ",(0,r.kt)("inlineCode",{parentName:"p"},"max_rows_to_group_by")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"group_by_overflow_mode = 'any'"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"after_having_exclusive")," \u2013 Don\u2019t include rows that didn\u2019t pass through ",(0,r.kt)("inlineCode",{parentName:"p"},"max_rows_to_group_by"),". In other words, \u2018totals\u2019 will have less than or the same number of rows as it would if ",(0,r.kt)("inlineCode",{parentName:"p"},"max_rows_to_group_by")," were omitted."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"after_having_inclusive")," \u2013 Include all the rows that didn\u2019t pass through \u2018max_rows_to_group_by\u2019 in \u2018totals\u2019. In other words, \u2018totals\u2019 will have more than or the same number of rows as it would if ",(0,r.kt)("inlineCode",{parentName:"p"},"max_rows_to_group_by")," were omitted."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"after_having_auto")," \u2013 Count the number of rows that passed through HAVING. If it is more than a certain amount (by default, 50%), include all the rows that didn\u2019t pass through \u2018max_rows_to_group_by\u2019 in \u2018totals\u2019. Otherwise, do not include them."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"totals_auto_threshold")," \u2013 By default, 0.5. The coefficient for ",(0,r.kt)("inlineCode",{parentName:"p"},"after_having_auto"),"."),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"max_rows_to_group_by")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"group_by_overflow_mode = 'any'")," are not used, all variations of ",(0,r.kt)("inlineCode",{parentName:"p"},"after_having")," are the same, and you can use any of them (for example, ",(0,r.kt)("inlineCode",{parentName:"p"},"after_having_auto"),")."),(0,r.kt)("p",null,"You can use ",(0,r.kt)("inlineCode",{parentName:"p"},"WITH TOTALS")," in subqueries, including subqueries in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/select/join"},"JOIN")," clause (in this case, the respective total values are combined)."),(0,r.kt)("h2",{id:"group-by-all"},"GROUP BY ALL"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GROUP BY ALL")," is equivalent to listing all the SELECT-ed expressions that are not aggregate functions."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    a * 2,\n    b,\n    count(c),\nFROM t\nGROUP BY ALL\n")),(0,r.kt)("p",null,"is the same as"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    a * 2,\n    b,\n    count(c),\nFROM t\nGROUP BY a * 2, b\n")),(0,r.kt)("p",null,"For a special case that if there is a function having both aggregate functions and other fields as its arguments, the ",(0,r.kt)("inlineCode",{parentName:"p"},"GROUP BY")," keys will contain the maximum non-aggregate fields we can extract from it."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    substring(a, 4, 2),\n    substring(substring(a, 1, 2), 1, count(b))\nFROM t\nGROUP BY ALL\n")),(0,r.kt)("p",null,"is the same as"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    substring(a, 4, 2),\n    substring(substring(a, 1, 2), 1, count(b))\nFROM t\nGROUP BY substring(a, 4, 2), substring(a, 1, 2)\n")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    count(),\n    median(FetchTiming > 60 ? 60 : FetchTiming),\n    count() - sum(Refresh)\nFROM hits\n")),(0,r.kt)("p",null,"As opposed to MySQL (and conforming to standard SQL), you can\u2019t get some value of some column that is not in a key or aggregate function (except constant expressions). To work around this, you can use the \u2018any\u2019 aggregate function (get the first encountered value) or \u2018min/max\u2019."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    domainWithoutWWW(URL) AS domain,\n    count(),\n    any(Title) AS title -- getting the first occurred page header for each domain.\nFROM hits\nGROUP BY domain\n")),(0,r.kt)("p",null,"For every different key value encountered, ",(0,r.kt)("inlineCode",{parentName:"p"},"GROUP BY")," calculates a set of aggregate function values."),(0,r.kt)("h2",{id:"grouping-sets-modifier"},"GROUPING SETS modifier"),(0,r.kt)("p",null,"This is the most general modifier.\nThis modifier allows to manually specify several aggregation key sets (grouping sets).\nAggregation is performed separately for each grouping set, after that all results are combined.\nIf a column is not presented in a grouping set, it's filled with a default value."),(0,r.kt)("p",null,"In other words, modifiers described above can be represented via ",(0,r.kt)("inlineCode",{parentName:"p"},"GROUPING SETS"),".\nDespite the fact that queries with ",(0,r.kt)("inlineCode",{parentName:"p"},"ROLLUP"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"CUBE")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"GROUPING SETS")," modifiers are syntactically equal, they may have different performance.\nWhen ",(0,r.kt)("inlineCode",{parentName:"p"},"GROUPING SETS")," try to execute everything in parallel, ",(0,r.kt)("inlineCode",{parentName:"p"},"ROLLUP")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"CUBE")," are executing the final merging of the aggregates in a single thread."),(0,r.kt)("p",null,"In the situation when source columns contain default values, it might be hard to distinguish if a row is a part of the aggregation which uses those columns as keys or not.\nTo solve this problem ",(0,r.kt)("inlineCode",{parentName:"p"},"GROUPING")," function must be used."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("p",null,"The following two queries are equivalent."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- Query 1\nSELECT year, month, day, count(*) FROM t GROUP BY year, month, day WITH ROLLUP;\n\n-- Query 2\nSELECT year, month, day, count(*) FROM t GROUP BY\nGROUPING SETS\n(\n    (year, month, day),\n    (year, month),\n    (year),\n    ()\n);\n")),(0,r.kt)("h2",{id:"implementation-details"},"Implementation Details"),(0,r.kt)("p",null,"Aggregation is one of the most important features of a column-oriented DBMS, and thus it\u2019s implementation is one of the most heavily optimized parts of ClickHouse. By default, aggregation is done in memory using a hash-table. It has 40+ specializations that are chosen automatically depending on \u201cgrouping key\u201d data types."),(0,r.kt)("h3",{id:"group-by-optimization-depending-on-table-sorting-key"},"GROUP BY Optimization Depending on Table Sorting Key"),(0,r.kt)("p",null,"The aggregation can be performed more effectively, if a table is sorted by some key, and ",(0,r.kt)("inlineCode",{parentName:"p"},"GROUP BY")," expression contains at least prefix of sorting key or injective functions. In this case when a new key is read from table, the in-between result of aggregation can be finalized and sent to client. This behaviour is switched on by the ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/operations/settings/settings#optimize_aggregation_in_order"},"optimize_aggregation_in_order")," setting. Such optimization reduces memory usage during aggregation, but in some cases may slow down the query execution."),(0,r.kt)("h3",{id:"group-by-in-external-memory"},"GROUP BY in External Memory"),(0,r.kt)("p",null,"You can enable dumping temporary data to the disk to restrict memory usage during ",(0,r.kt)("inlineCode",{parentName:"p"},"GROUP BY"),".\nThe ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/operations/settings/query-complexity#settings-max_bytes_before_external_group_by"},"max_bytes_before_external_group_by")," setting determines the threshold RAM consumption for dumping ",(0,r.kt)("inlineCode",{parentName:"p"},"GROUP BY")," temporary data to the file system. If set to 0 (the default), it is disabled."),(0,r.kt)("p",null,"When using ",(0,r.kt)("inlineCode",{parentName:"p"},"max_bytes_before_external_group_by"),", we recommend that you set ",(0,r.kt)("inlineCode",{parentName:"p"},"max_memory_usage")," about twice as high. This is necessary because there are two stages to aggregation: reading the data and forming intermediate data (1) and merging the intermediate data (2). Dumping data to the file system can only occur during stage 1. If the temporary data wasn\u2019t dumped, then stage 2 might require up to the same amount of memory as in stage 1."),(0,r.kt)("p",null,"For example, if ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/operations/settings/query-complexity#settings_max_memory_usage"},"max_memory_usage")," was set to 10000000000 and you want to use external aggregation, it makes sense to set ",(0,r.kt)("inlineCode",{parentName:"p"},"max_bytes_before_external_group_by")," to 10000000000, and ",(0,r.kt)("inlineCode",{parentName:"p"},"max_memory_usage")," to 20000000000. When external aggregation is triggered (if there was at least one dump of temporary data), maximum consumption of RAM is only slightly more than ",(0,r.kt)("inlineCode",{parentName:"p"},"max_bytes_before_external_group_by"),"."),(0,r.kt)("p",null,"With distributed query processing, external aggregation is performed on remote servers. In order for the requester server to use only a small amount of RAM, set ",(0,r.kt)("inlineCode",{parentName:"p"},"distributed_aggregation_memory_efficient")," to 1."),(0,r.kt)("p",null,"When merging data flushed to the disk, as well as when merging results from remote servers when the ",(0,r.kt)("inlineCode",{parentName:"p"},"distributed_aggregation_memory_efficient")," setting is enabled, consumes up to ",(0,r.kt)("inlineCode",{parentName:"p"},"1/256 * the_number_of_threads")," from the total amount of RAM."),(0,r.kt)("p",null,"When external aggregation is enabled, if there was less than ",(0,r.kt)("inlineCode",{parentName:"p"},"max_bytes_before_external_group_by")," of data (i.e.\xa0data was not flushed), the query runs just as fast as without external aggregation. If any temporary data was flushed, the run time will be several times longer (approximately three times)."),(0,r.kt)("p",null,"If you have an ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/select/order-by"},"ORDER BY")," with a ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/select/limit"},"LIMIT")," after ",(0,r.kt)("inlineCode",{parentName:"p"},"GROUP BY"),", then the amount of used RAM depends on the amount of data in ",(0,r.kt)("inlineCode",{parentName:"p"},"LIMIT"),", not in the whole table. But if the ",(0,r.kt)("inlineCode",{parentName:"p"},"ORDER BY")," does not have ",(0,r.kt)("inlineCode",{parentName:"p"},"LIMIT"),", do not forget to enable external sorting (",(0,r.kt)("inlineCode",{parentName:"p"},"max_bytes_before_external_sort"),")."))}d.isMDXComponent=!0}}]);