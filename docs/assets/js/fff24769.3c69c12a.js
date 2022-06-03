"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[24569],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=p(n),c=r,h=d["".concat(l,".").concat(c)]||d[c]||u[c]||o;return n?a.createElement(h,i(i({ref:t},m),{},{components:n})):a.createElement(h,i({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},88194:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],s={sidebar_label:"GROUP BY"},l="GROUP BY Clause",p={unversionedId:"en/sql-reference/statements/select/group-by",id:"en/sql-reference/statements/select/group-by",title:"GROUP BY Clause",description:"GROUP BY clause switches the SELECT query into an aggregation mode, which works as follows:",source:"@site/docs/en/sql-reference/statements/select/group-by.md",sourceDirName:"en/sql-reference/statements/select",slug:"/en/sql-reference/statements/select/group-by",permalink:"/docs/en/sql-reference/statements/select/group-by",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/statements/select/group-by.md",tags:[],version:"current",frontMatter:{sidebar_label:"GROUP BY"},sidebar:"english",previous:{title:"FROM",permalink:"/docs/en/sql-reference/statements/select/from"},next:{title:"HAVING",permalink:"/docs/en/sql-reference/statements/select/having"}},m={},u=[{value:"NULL Processing",id:"null-processing",level:2},{value:"WITH ROLLUP Modifier",id:"with-rollup-modifier",level:2},{value:"WITH CUBE Modifier",id:"with-cube-modifier",level:2},{value:"WITH TOTALS Modifier",id:"with-totals-modifier",level:2},{value:"Configuring Totals Processing",id:"configuring-totals-processing",level:3},{value:"Examples",id:"examples",level:2},{value:"Implementation Details",id:"implementation-details",level:2},{value:"GROUP BY Optimization Depending on Table Sorting Key",id:"group-by-optimization-depending-on-table-sorting-key",level:3},{value:"GROUP BY in External Memory",id:"group-by-in-external-memory",level:3}],d={toc:u};function c(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"group-by-clause"},"GROUP BY Clause"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"GROUP BY")," clause switches the ",(0,o.kt)("inlineCode",{parentName:"p"},"SELECT")," query into an aggregation mode, which works as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"GROUP BY")," clause contains a list of expressions (or a single expression, which is considered to be the list of length one). This list acts as a \u201cgrouping key\u201d, while each individual expression will be referred to as a \u201ckey expression\u201d."),(0,o.kt)("li",{parentName:"ul"},"All the expressions in the ",(0,o.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/statements/select/"},"SELECT"),", ",(0,o.kt)("a",{parentName:"li",href:"../../../sql-reference/statements/select/having"},"HAVING"),", and ",(0,o.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/statements/select/order-by"},"ORDER BY")," clauses ",(0,o.kt)("strong",{parentName:"li"},"must")," be calculated based on key expressions ",(0,o.kt)("strong",{parentName:"li"},"or")," on ",(0,o.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/aggregate-functions/"},"aggregate functions")," over non-key expressions (including plain columns). In other words, each column selected from the table must be used either in a key expression or inside an aggregate function, but not both."),(0,o.kt)("li",{parentName:"ul"},"Result of aggregating ",(0,o.kt)("inlineCode",{parentName:"li"},"SELECT")," query will contain as many rows as there were unique values of \u201cgrouping key\u201d in source table. Usually this signficantly reduces the row count, often by orders of magnitude, but not necessarily: row count stays the same if all \u201cgrouping key\u201d values were distinct.")),(0,o.kt)("p",null,"When you want to group data in the table by column numbers instead of column names, enable the setting ",(0,o.kt)("a",{parentName:"p",href:"/docs/en/operations/settings/settings#enable-positional-arguments"},"enable_positional_arguments"),"."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"There\u2019s an additional way to run aggregation over a table. If a query contains table columns only inside aggregate functions, the ",(0,o.kt)("inlineCode",{parentName:"p"},"GROUP BY clause")," can be omitted, and aggregation by an empty set of keys is assumed. Such queries always return exactly one row."))),(0,o.kt)("h2",{id:"null-processing"},"NULL Processing"),(0,o.kt)("p",null,"For grouping, ClickHouse interprets ",(0,o.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/syntax#null-literal"},"NULL")," as a value, and ",(0,o.kt)("inlineCode",{parentName:"p"},"NULL==NULL"),". It differs from ",(0,o.kt)("inlineCode",{parentName:"p"},"NULL")," processing in most other contexts."),(0,o.kt)("p",null,"Here\u2019s an example to show what this means."),(0,o.kt)("p",null,"Assume you have this table:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500x\u2500\u252c\u2500\u2500\u2500\u2500y\u2500\u2510\n\u2502 1 \u2502    2 \u2502\n\u2502 2 \u2502 \u1d3a\u1d41\u1d38\u1d38 \u2502\n\u2502 3 \u2502    2 \u2502\n\u2502 3 \u2502    3 \u2502\n\u2502 3 \u2502 \u1d3a\u1d41\u1d38\u1d38 \u2502\n\u2514\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,o.kt)("p",null,"The query ",(0,o.kt)("inlineCode",{parentName:"p"},"SELECT sum(x), y FROM t_null_big GROUP BY y")," results in:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500sum(x)\u2500\u252c\u2500\u2500\u2500\u2500y\u2500\u2510\n\u2502      4 \u2502    2 \u2502\n\u2502      3 \u2502    3 \u2502\n\u2502      5 \u2502 \u1d3a\u1d41\u1d38\u1d38 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,o.kt)("p",null,"You can see that ",(0,o.kt)("inlineCode",{parentName:"p"},"GROUP BY")," for ",(0,o.kt)("inlineCode",{parentName:"p"},"y = NULL")," summed up ",(0,o.kt)("inlineCode",{parentName:"p"},"x"),", as if ",(0,o.kt)("inlineCode",{parentName:"p"},"NULL")," is this value."),(0,o.kt)("p",null,"If you pass several keys to ",(0,o.kt)("inlineCode",{parentName:"p"},"GROUP BY"),", the result will give you all the combinations of the selection, as if ",(0,o.kt)("inlineCode",{parentName:"p"},"NULL")," were a specific value."),(0,o.kt)("h2",{id:"with-rollup-modifier"},"WITH ROLLUP Modifier"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"WITH ROLLUP")," modifier is used to calculate subtotals for the key expressions, based on their order in the ",(0,o.kt)("inlineCode",{parentName:"p"},"GROUP BY")," list. The subtotals rows are added after the result table."),(0,o.kt)("p",null,"The subtotals are calculated in the reverse order: at first subtotals are calculated for the last key expression in the list, then for the previous one, and so on up to the first key expression."),(0,o.kt)("p",null,'In the subtotals rows the values of already "grouped" key expressions are set to ',(0,o.kt)("inlineCode",{parentName:"p"},"0")," or empty line."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Mind that ",(0,o.kt)("a",{parentName:"p",href:"../../../sql-reference/statements/select/having"},"HAVING")," clause can affect the subtotals results."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example")),(0,o.kt)("p",null,"Consider the table t:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500year\u2500\u252c\u2500month\u2500\u252c\u2500day\u2500\u2510\n\u2502 2019 \u2502     1 \u2502   5 \u2502\n\u2502 2019 \u2502     1 \u2502  15 \u2502\n\u2502 2020 \u2502     1 \u2502   5 \u2502\n\u2502 2020 \u2502     1 \u2502  15 \u2502\n\u2502 2020 \u2502    10 \u2502   5 \u2502\n\u2502 2020 \u2502    10 \u2502  15 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,o.kt)("p",null,"Query:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT year, month, day, count(*) FROM t GROUP BY year, month, day WITH ROLLUP;\n")),(0,o.kt)("p",null,"As ",(0,o.kt)("inlineCode",{parentName:"p"},"GROUP BY"),' section has three key expressions, the result contains four tables with subtotals "rolled up" from right to left:'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"GROUP BY year, month, day"),";"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"GROUP BY year, month")," (and ",(0,o.kt)("inlineCode",{parentName:"li"},"day")," column is filled with zeros);"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"GROUP BY year")," (now ",(0,o.kt)("inlineCode",{parentName:"li"},"month, day")," columns are both filled with zeros);"),(0,o.kt)("li",{parentName:"ul"},"and totals (and all three key expression columns are zeros).")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500year\u2500\u252c\u2500month\u2500\u252c\u2500day\u2500\u252c\u2500count()\u2500\u2510\n\u2502 2020 \u2502    10 \u2502  15 \u2502       1 \u2502\n\u2502 2020 \u2502     1 \u2502   5 \u2502       1 \u2502\n\u2502 2019 \u2502     1 \u2502   5 \u2502       1 \u2502\n\u2502 2020 \u2502     1 \u2502  15 \u2502       1 \u2502\n\u2502 2019 \u2502     1 \u2502  15 \u2502       1 \u2502\n\u2502 2020 \u2502    10 \u2502   5 \u2502       1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500year\u2500\u252c\u2500month\u2500\u252c\u2500day\u2500\u252c\u2500count()\u2500\u2510\n\u2502 2019 \u2502     1 \u2502   0 \u2502       2 \u2502\n\u2502 2020 \u2502     1 \u2502   0 \u2502       2 \u2502\n\u2502 2020 \u2502    10 \u2502   0 \u2502       2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500year\u2500\u252c\u2500month\u2500\u252c\u2500day\u2500\u252c\u2500count()\u2500\u2510\n\u2502 2019 \u2502     0 \u2502   0 \u2502       2 \u2502\n\u2502 2020 \u2502     0 \u2502   0 \u2502       4 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500year\u2500\u252c\u2500month\u2500\u252c\u2500day\u2500\u252c\u2500count()\u2500\u2510\n\u2502    0 \u2502     0 \u2502   0 \u2502       6 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,o.kt)("h2",{id:"with-cube-modifier"},"WITH CUBE Modifier"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"WITH CUBE")," modifier is used to calculate subtotals for every combination of the key expressions in the ",(0,o.kt)("inlineCode",{parentName:"p"},"GROUP BY")," list. The subtotals rows are added after the result table."),(0,o.kt)("p",null,'In the subtotals rows the values of all "grouped" key expressions are set to ',(0,o.kt)("inlineCode",{parentName:"p"},"0")," or empty line."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Mind that ",(0,o.kt)("a",{parentName:"p",href:"../../../sql-reference/statements/select/having"},"HAVING")," clause can affect the subtotals results."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example")),(0,o.kt)("p",null,"Consider the table t:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500year\u2500\u252c\u2500month\u2500\u252c\u2500day\u2500\u2510\n\u2502 2019 \u2502     1 \u2502   5 \u2502\n\u2502 2019 \u2502     1 \u2502  15 \u2502\n\u2502 2020 \u2502     1 \u2502   5 \u2502\n\u2502 2020 \u2502     1 \u2502  15 \u2502\n\u2502 2020 \u2502    10 \u2502   5 \u2502\n\u2502 2020 \u2502    10 \u2502  15 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,o.kt)("p",null,"Query:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT year, month, day, count(*) FROM t GROUP BY year, month, day WITH CUBE;\n")),(0,o.kt)("p",null,"As ",(0,o.kt)("inlineCode",{parentName:"p"},"GROUP BY")," section has three key expressions, the result contains eight tables with subtotals for all key expression combinations:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"GROUP BY year, month, day")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"GROUP BY year, month")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"GROUP BY year, day")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"GROUP BY year")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"GROUP BY month, day")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"GROUP BY month")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"GROUP BY day")),(0,o.kt)("li",{parentName:"ul"},"and totals.")),(0,o.kt)("p",null,"Columns, excluded from ",(0,o.kt)("inlineCode",{parentName:"p"},"GROUP BY"),", are filled with zeros."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500year\u2500\u252c\u2500month\u2500\u252c\u2500day\u2500\u252c\u2500count()\u2500\u2510\n\u2502 2020 \u2502    10 \u2502  15 \u2502       1 \u2502\n\u2502 2020 \u2502     1 \u2502   5 \u2502       1 \u2502\n\u2502 2019 \u2502     1 \u2502   5 \u2502       1 \u2502\n\u2502 2020 \u2502     1 \u2502  15 \u2502       1 \u2502\n\u2502 2019 \u2502     1 \u2502  15 \u2502       1 \u2502\n\u2502 2020 \u2502    10 \u2502   5 \u2502       1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500year\u2500\u252c\u2500month\u2500\u252c\u2500day\u2500\u252c\u2500count()\u2500\u2510\n\u2502 2019 \u2502     1 \u2502   0 \u2502       2 \u2502\n\u2502 2020 \u2502     1 \u2502   0 \u2502       2 \u2502\n\u2502 2020 \u2502    10 \u2502   0 \u2502       2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500year\u2500\u252c\u2500month\u2500\u252c\u2500day\u2500\u252c\u2500count()\u2500\u2510\n\u2502 2020 \u2502     0 \u2502   5 \u2502       2 \u2502\n\u2502 2019 \u2502     0 \u2502   5 \u2502       1 \u2502\n\u2502 2020 \u2502     0 \u2502  15 \u2502       2 \u2502\n\u2502 2019 \u2502     0 \u2502  15 \u2502       1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500year\u2500\u252c\u2500month\u2500\u252c\u2500day\u2500\u252c\u2500count()\u2500\u2510\n\u2502 2019 \u2502     0 \u2502   0 \u2502       2 \u2502\n\u2502 2020 \u2502     0 \u2502   0 \u2502       4 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500year\u2500\u252c\u2500month\u2500\u252c\u2500day\u2500\u252c\u2500count()\u2500\u2510\n\u2502    0 \u2502     1 \u2502   5 \u2502       2 \u2502\n\u2502    0 \u2502    10 \u2502  15 \u2502       1 \u2502\n\u2502    0 \u2502    10 \u2502   5 \u2502       1 \u2502\n\u2502    0 \u2502     1 \u2502  15 \u2502       2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500year\u2500\u252c\u2500month\u2500\u252c\u2500day\u2500\u252c\u2500count()\u2500\u2510\n\u2502    0 \u2502     1 \u2502   0 \u2502       4 \u2502\n\u2502    0 \u2502    10 \u2502   0 \u2502       2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500year\u2500\u252c\u2500month\u2500\u252c\u2500day\u2500\u252c\u2500count()\u2500\u2510\n\u2502    0 \u2502     0 \u2502   5 \u2502       3 \u2502\n\u2502    0 \u2502     0 \u2502  15 \u2502       3 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500year\u2500\u252c\u2500month\u2500\u252c\u2500day\u2500\u252c\u2500count()\u2500\u2510\n\u2502    0 \u2502     0 \u2502   0 \u2502       6 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,o.kt)("h2",{id:"with-totals-modifier"},"WITH TOTALS Modifier"),(0,o.kt)("p",null,"If the ",(0,o.kt)("inlineCode",{parentName:"p"},"WITH TOTALS")," modifier is specified, another row will be calculated. This row will have key columns containing default values (zeros or empty lines), and columns of aggregate functions with the values calculated across all the rows (the \u201ctotal\u201d values)."),(0,o.kt)("p",null,"This extra row is only produced in ",(0,o.kt)("inlineCode",{parentName:"p"},"JSON*"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"TabSeparated*"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"Pretty*")," formats, separately from the other rows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In ",(0,o.kt)("inlineCode",{parentName:"li"},"JSON*")," formats, this row is output as a separate \u2018totals\u2019 field."),(0,o.kt)("li",{parentName:"ul"},"In ",(0,o.kt)("inlineCode",{parentName:"li"},"TabSeparated*")," formats, the row comes after the main result, preceded by an empty row (after the other data)."),(0,o.kt)("li",{parentName:"ul"},"In ",(0,o.kt)("inlineCode",{parentName:"li"},"Pretty*")," formats, the row is output as a separate table after the main result."),(0,o.kt)("li",{parentName:"ul"},"In the other formats it is not available.")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"totals is output in the results of ",(0,o.kt)("inlineCode",{parentName:"p"},"SELECT")," queries, and is not output in ",(0,o.kt)("inlineCode",{parentName:"p"},"INSERT INTO ... SELECT"),". "))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"WITH TOTALS")," can be run in different ways when ",(0,o.kt)("a",{parentName:"p",href:"../../../sql-reference/statements/select/having"},"HAVING")," is present. The behavior depends on the ",(0,o.kt)("inlineCode",{parentName:"p"},"totals_mode")," setting."),(0,o.kt)("h3",{id:"configuring-totals-processing"},"Configuring Totals Processing"),(0,o.kt)("p",null,"By default, ",(0,o.kt)("inlineCode",{parentName:"p"},"totals_mode = 'before_having'"),". In this case, \u2018totals\u2019 is calculated across all rows, including the ones that do not pass through HAVING and ",(0,o.kt)("inlineCode",{parentName:"p"},"max_rows_to_group_by"),"."),(0,o.kt)("p",null,"The other alternatives include only the rows that pass through HAVING in \u2018totals\u2019, and behave differently with the setting ",(0,o.kt)("inlineCode",{parentName:"p"},"max_rows_to_group_by")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"group_by_overflow_mode = 'any'"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"after_having_exclusive")," \u2013 Don\u2019t include rows that didn\u2019t pass through ",(0,o.kt)("inlineCode",{parentName:"p"},"max_rows_to_group_by"),". In other words, \u2018totals\u2019 will have less than or the same number of rows as it would if ",(0,o.kt)("inlineCode",{parentName:"p"},"max_rows_to_group_by")," were omitted."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"after_having_inclusive")," \u2013 Include all the rows that didn\u2019t pass through \u2018max_rows_to_group_by\u2019 in \u2018totals\u2019. In other words, \u2018totals\u2019 will have more than or the same number of rows as it would if ",(0,o.kt)("inlineCode",{parentName:"p"},"max_rows_to_group_by")," were omitted."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"after_having_auto")," \u2013 Count the number of rows that passed through HAVING. If it is more than a certain amount (by default, 50%), include all the rows that didn\u2019t pass through \u2018max_rows_to_group_by\u2019 in \u2018totals\u2019. Otherwise, do not include them."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"totals_auto_threshold")," \u2013 By default, 0.5. The coefficient for ",(0,o.kt)("inlineCode",{parentName:"p"},"after_having_auto"),"."),(0,o.kt)("p",null,"If ",(0,o.kt)("inlineCode",{parentName:"p"},"max_rows_to_group_by")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"group_by_overflow_mode = 'any'")," are not used, all variations of ",(0,o.kt)("inlineCode",{parentName:"p"},"after_having")," are the same, and you can use any of them (for example, ",(0,o.kt)("inlineCode",{parentName:"p"},"after_having_auto"),")."),(0,o.kt)("p",null,"You can use ",(0,o.kt)("inlineCode",{parentName:"p"},"WITH TOTALS")," in subqueries, including subqueries in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/select/join"},"JOIN")," clause (in this case, the respective total values are combined)."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    count(),\n    median(FetchTiming > 60 ? 60 : FetchTiming),\n    count() - sum(Refresh)\nFROM hits\n")),(0,o.kt)("p",null,"As opposed to MySQL (and conforming to standard SQL), you can\u2019t get some value of some column that is not in a key or aggregate function (except constant expressions). To work around this, you can use the \u2018any\u2019 aggregate function (get the first encountered value) or \u2018min/max\u2019."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    domainWithoutWWW(URL) AS domain,\n    count(),\n    any(Title) AS title -- getting the first occurred page header for each domain.\nFROM hits\nGROUP BY domain\n")),(0,o.kt)("p",null,"For every different key value encountered, ",(0,o.kt)("inlineCode",{parentName:"p"},"GROUP BY")," calculates a set of aggregate function values."),(0,o.kt)("h2",{id:"implementation-details"},"Implementation Details"),(0,o.kt)("p",null,"Aggregation is one of the most important features of a column-oriented DBMS, and thus it\u2019s implementation is one of the most heavily optimized parts of ClickHouse. By default, aggregation is done in memory using a hash-table. It has 40+ specializations that are chosen automatically depending on \u201cgrouping key\u201d data types."),(0,o.kt)("h3",{id:"group-by-optimization-depending-on-table-sorting-key"},"GROUP BY Optimization Depending on Table Sorting Key"),(0,o.kt)("p",null,"The aggregation can be performed more effectively, if a table is sorted by some key, and ",(0,o.kt)("inlineCode",{parentName:"p"},"GROUP BY")," expression contains at least prefix of sorting key or injective functions. In this case when a new key is read from table, the in-between result of aggregation can be finalized and sent to client. This behaviour is switched on by the ",(0,o.kt)("a",{parentName:"p",href:"/docs/en/operations/settings/settings#optimize_aggregation_in_order"},"optimize_aggregation_in_order")," setting. Such optimization reduces memory usage during aggregation, but in some cases may slow down the query execution."),(0,o.kt)("h3",{id:"group-by-in-external-memory"},"GROUP BY in External Memory"),(0,o.kt)("p",null,"You can enable dumping temporary data to the disk to restrict memory usage during ",(0,o.kt)("inlineCode",{parentName:"p"},"GROUP BY"),".\nThe ",(0,o.kt)("a",{parentName:"p",href:"/docs/en/operations/settings/settings#settings-max_bytes_before_external_group_by"},"max_bytes_before_external_group_by")," setting determines the threshold RAM consumption for dumping ",(0,o.kt)("inlineCode",{parentName:"p"},"GROUP BY")," temporary data to the file system. If set to 0 (the default), it is disabled."),(0,o.kt)("p",null,"When using ",(0,o.kt)("inlineCode",{parentName:"p"},"max_bytes_before_external_group_by"),", we recommend that you set ",(0,o.kt)("inlineCode",{parentName:"p"},"max_memory_usage")," about twice as high. This is necessary because there are two stages to aggregation: reading the data and forming intermediate data (1) and merging the intermediate data (2). Dumping data to the file system can only occur during stage 1. If the temporary data wasn\u2019t dumped, then stage 2 might require up to the same amount of memory as in stage 1."),(0,o.kt)("p",null,"For example, if ",(0,o.kt)("a",{parentName:"p",href:"/docs/en/operations/settings/settings#settings_max_memory_usage"},"max_memory_usage")," was set to 10000000000 and you want to use external aggregation, it makes sense to set ",(0,o.kt)("inlineCode",{parentName:"p"},"max_bytes_before_external_group_by")," to 10000000000, and ",(0,o.kt)("inlineCode",{parentName:"p"},"max_memory_usage")," to 20000000000. When external aggregation is triggered (if there was at least one dump of temporary data), maximum consumption of RAM is only slightly more than ",(0,o.kt)("inlineCode",{parentName:"p"},"max_bytes_before_external_group_by"),"."),(0,o.kt)("p",null,"With distributed query processing, external aggregation is performed on remote servers. In order for the requester server to use only a small amount of RAM, set ",(0,o.kt)("inlineCode",{parentName:"p"},"distributed_aggregation_memory_efficient")," to 1."),(0,o.kt)("p",null,"When merging data flushed to the disk, as well as when merging results from remote servers when the ",(0,o.kt)("inlineCode",{parentName:"p"},"distributed_aggregation_memory_efficient")," setting is enabled, consumes up to ",(0,o.kt)("inlineCode",{parentName:"p"},"1/256 * the_number_of_threads")," from the total amount of RAM."),(0,o.kt)("p",null,"When external aggregation is enabled, if there was less than ",(0,o.kt)("inlineCode",{parentName:"p"},"max_bytes_before_external_group_by")," of data (i.e.\xa0data was not flushed), the query runs just as fast as without external aggregation. If any temporary data was flushed, the run time will be several times longer (approximately three times)."),(0,o.kt)("p",null,"If you have an ",(0,o.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/select/order-by"},"ORDER BY")," with a ",(0,o.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/select/limit"},"LIMIT")," after ",(0,o.kt)("inlineCode",{parentName:"p"},"GROUP BY"),", then the amount of used RAM depends on the amount of data in ",(0,o.kt)("inlineCode",{parentName:"p"},"LIMIT"),", not in the whole table. But if the ",(0,o.kt)("inlineCode",{parentName:"p"},"ORDER BY")," does not have ",(0,o.kt)("inlineCode",{parentName:"p"},"LIMIT"),", do not forget to enable external sorting (",(0,o.kt)("inlineCode",{parentName:"p"},"max_bytes_before_external_sort"),")."))}c.isMDXComponent=!0}}]);