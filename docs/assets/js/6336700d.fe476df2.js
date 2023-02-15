"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[36390,88009],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var i=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,i)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,i,a=function(e,t){if(null==e)return{};var o,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)o=n[i],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)o=n[i],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=i.createContext({}),u=function(e){var t=i.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},c=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(o),f=a,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||n;return o?i.createElement(m,r(r({ref:t},c),{},{components:o})):i.createElement(m,r({ref:t},c))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,r=new Array(n);r[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,r[1]=s;for(var u=2;u<n;u++)r[u]=o[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,o)}f.displayName="MDXCreateElement"},51761:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>n,metadata:()=>s,toc:()=>u});var i=o(87462),a=(o(67294),o(3905));const n={slug:"/en/operations/utilities/clickhouse-obfuscator",title:"clickhouse-obfuscator"},r=void 0,s={unversionedId:"en/operations/utilities/clickhouse-obfuscator",id:"en/operations/utilities/clickhouse-obfuscator",title:"clickhouse-obfuscator",description:"A simple tool for table data obfuscation.",source:"@site/docs/en/operations/utilities/clickhouse-obfuscator.md",sourceDirName:"en/operations/utilities",slug:"/en/operations/utilities/clickhouse-obfuscator",permalink:"/docs/en/operations/utilities/clickhouse-obfuscator",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/operations/utilities/clickhouse-obfuscator.md",tags:[],version:"current",frontMatter:{slug:"/en/operations/utilities/clickhouse-obfuscator",title:"clickhouse-obfuscator"},sidebar:"english",previous:{title:"clickhouse-format",permalink:"/docs/en/operations/utilities/clickhouse-format"},next:{title:"clickhouse-odbc-bridge",permalink:"/docs/en/operations/utilities/odbc-bridge"}},l={},u=[],c={toc:u},p="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(p,(0,i.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A simple tool for table data obfuscation."),(0,a.kt)("p",null,"It reads an input table and produces an output table, that retains some properties of input, but contains different data.\nIt allows publishing almost real production data for usage in benchmarks."),(0,a.kt)("p",null,"It is designed to retain the following properties of data:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"cardinalities of values (number of distinct values) for every column and every tuple of columns;")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"conditional cardinalities: number of distinct values of one column under the condition on the value of another column;")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"probability distributions of the absolute value of integers; the sign of signed integers; exponent and sign for floats;")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"probability distributions of the length of strings;")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"probability of zero values of numbers; empty strings and arrays, ",(0,a.kt)("inlineCode",{parentName:"p"},"NULL"),"s;")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"data compression ratio when compressed with LZ77 and entropy family of codecs;")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"continuity (magnitude of difference) of time values across the table; continuity of floating-point values;")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"date component of ",(0,a.kt)("inlineCode",{parentName:"p"},"DateTime")," values;")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"UTF-8 validity of string values;")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"string values look natural."))),(0,a.kt)("p",null,"Most of the properties above are viable for performance testing:"),(0,a.kt)("p",null,"reading data, filtering, aggregatio, and sorting will work at almost the same speed\nas on original data due to saved cardinalities, magnitudes, compression ratios, etc."),(0,a.kt)("p",null,"It works in a deterministic fashion: you define a seed value and the transformation is determined by input data and by seed.\nSome transformations are one to one and could be reversed, so you need to have a large seed and keep it in secret."),(0,a.kt)("p",null,"It uses some cryptographic primitives to transform data but from the cryptographic point of view, it does not do it properly, that is why you should not consider the result as secure unless you have another reason. The result may retain some data you don't want to publish."),(0,a.kt)("p",null,"It always leaves 0, 1, -1 numbers, dates, lengths of arrays, and null flags exactly as in source data.\nFor example, you have a column ",(0,a.kt)("inlineCode",{parentName:"p"},"IsMobile")," in your table with values 0 and 1. In transformed data, it will have the same value."),(0,a.kt)("p",null,"So, the user will be able to count the exact ratio of mobile traffic."),(0,a.kt)("p",null,"Let's give another example. When you have some private data in your table, like user email and you don't want to publish any single email address.\nIf your table is large enough and contains multiple different emails and no email has a very high frequency than all others, it will anonymize all data. But if you have a small number of different values in a column, it can reproduce some of them.\nYou should look at the working algorithm of this tool works, and fine-tune its command line parameters."),(0,a.kt)("p",null,"This tool works fine only with at least a moderate amount of data (at least 1000s of rows)."))}d.isMDXComponent=!0},58251:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>f,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=o(87462),a=(o(67294),o(3905)),n=o(51761);const r={slug:"/zh/operations/utilities/clickhouse-obfuscator",title:"clickhouse-obfuscator"},s=void 0,l={unversionedId:"zh/operations/utilities/clickhouse-obfuscator",id:"zh/operations/utilities/clickhouse-obfuscator",title:"clickhouse-obfuscator",description:"",source:"@site/docs/zh/operations/utilities/clickhouse-obfuscator.mdx",sourceDirName:"zh/operations/utilities",slug:"/zh/operations/utilities/clickhouse-obfuscator",permalink:"/docs/zh/operations/utilities/clickhouse-obfuscator",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/operations/utilities/clickhouse-obfuscator.mdx",tags:[],version:"current",frontMatter:{slug:"/zh/operations/utilities/clickhouse-obfuscator",title:"clickhouse-obfuscator"},sidebar:"chinese",previous:{title:"clickhouse-format",permalink:"/docs/zh/operations/utilities/clickhouse-format"},next:{title:"clickhouse-odbc-bridge",permalink:"/docs/zh/operations/utilities/odbc-bridge"}},u={},c=[],p={toc:c},d="wrapper";function f(e){let{components:t,...o}=e;return(0,a.kt)(d,(0,i.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(n.default,{mdxType:"Content"}))}f.isMDXComponent=!0}}]);