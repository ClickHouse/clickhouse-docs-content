"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[89697],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,f=u["".concat(o,".").concat(d)]||u[d]||m[d]||l;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<l;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},62212:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const l={slug:"/en/sql-reference/statements/select/distinct",sidebar_label:"DISTINCT"},s="DISTINCT Clause",i={unversionedId:"en/sql-reference/statements/select/distinct",id:"en/sql-reference/statements/select/distinct",title:"DISTINCT Clause",description:"If SELECT DISTINCT is specified, only unique rows will remain in a query result. Thus only a single row will remain out of all the sets of fully matching rows in the result.",source:"@site/docs/en/sql-reference/statements/select/distinct.md",sourceDirName:"en/sql-reference/statements/select",slug:"/en/sql-reference/statements/select/distinct",permalink:"/docs/en/sql-reference/statements/select/distinct",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/statements/select/distinct.md",tags:[],version:"current",frontMatter:{slug:"/en/sql-reference/statements/select/distinct",sidebar_label:"DISTINCT"},sidebar:"english",previous:{title:"ARRAY JOIN",permalink:"/docs/en/sql-reference/statements/select/array-join"},next:{title:"EXCEPT",permalink:"/docs/en/sql-reference/statements/select/except"}},o={},c=[{value:"DISTINCT and ORDER BY",id:"distinct-and-order-by",level:2},{value:"Null Processing",id:"null-processing",level:2},{value:"Alternatives",id:"alternatives",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"distinct-clause"},"DISTINCT Clause"),(0,a.kt)("p",null,"If ",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT DISTINCT")," is specified, only unique rows will remain in a query result. Thus only a single row will remain out of all the sets of fully matching rows in the result."),(0,a.kt)("p",null,"You can specify the list of columns that must have unique values: ",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT DISTINCT ON (column1, column2,...)"),". If the columns are not specified, all of them are taken into consideration."),(0,a.kt)("p",null,"Consider the table:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500a\u2500\u252c\u2500b\u2500\u252c\u2500c\u2500\u2510\n\u2502 1 \u2502 1 \u2502 1 \u2502\n\u2502 1 \u2502 1 \u2502 1 \u2502\n\u2502 2 \u2502 2 \u2502 2 \u2502\n\u2502 2 \u2502 2 \u2502 2 \u2502\n\u2502 1 \u2502 1 \u2502 2 \u2502\n\u2502 1 \u2502 2 \u2502 2 \u2502\n\u2514\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,"Using ",(0,a.kt)("inlineCode",{parentName:"p"},"DISTINCT")," without specifying columns:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT DISTINCT * FROM t1;\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500a\u2500\u252c\u2500b\u2500\u252c\u2500c\u2500\u2510\n\u2502 1 \u2502 1 \u2502 1 \u2502\n\u2502 2 \u2502 2 \u2502 2 \u2502\n\u2502 1 \u2502 1 \u2502 2 \u2502\n\u2502 1 \u2502 2 \u2502 2 \u2502\n\u2514\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,"Using ",(0,a.kt)("inlineCode",{parentName:"p"},"DISTINCT")," with specified columns:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT DISTINCT ON (a,b) * FROM t1;\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500a\u2500\u252c\u2500b\u2500\u252c\u2500c\u2500\u2510\n\u2502 1 \u2502 1 \u2502 1 \u2502\n\u2502 2 \u2502 2 \u2502 2 \u2502\n\u2502 1 \u2502 2 \u2502 2 \u2502\n\u2514\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2518\n")),(0,a.kt)("h2",{id:"distinct-and-order-by"},"DISTINCT and ORDER BY"),(0,a.kt)("p",null,"ClickHouse supports using the ",(0,a.kt)("inlineCode",{parentName:"p"},"DISTINCT")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"ORDER BY")," clauses for different columns in one query. The ",(0,a.kt)("inlineCode",{parentName:"p"},"DISTINCT")," clause is executed before the ",(0,a.kt)("inlineCode",{parentName:"p"},"ORDER BY")," clause."),(0,a.kt)("p",null,"Consider the table:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500a\u2500\u252c\u2500b\u2500\u2510\n\u2502 2 \u2502 1 \u2502\n\u2502 1 \u2502 2 \u2502\n\u2502 3 \u2502 3 \u2502\n\u2502 2 \u2502 4 \u2502\n\u2514\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,"Selecting data:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT DISTINCT a FROM t1 ORDER BY b ASC;\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500a\u2500\u2510\n\u2502 2 \u2502\n\u2502 1 \u2502\n\u2502 3 \u2502\n\u2514\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,"Selecting data with the different sorting direction:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT DISTINCT a FROM t1 ORDER BY b DESC;\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500a\u2500\u2510\n\u2502 3 \u2502\n\u2502 1 \u2502\n\u2502 2 \u2502\n\u2514\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,"Row ",(0,a.kt)("inlineCode",{parentName:"p"},"2, 4")," was cut before sorting."),(0,a.kt)("p",null,"Take this implementation specificity into account when programming queries."),(0,a.kt)("h2",{id:"null-processing"},"Null Processing"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"DISTINCT")," works with ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/syntax#null-literal"},"NULL")," as if ",(0,a.kt)("inlineCode",{parentName:"p"},"NULL")," were a specific value, and ",(0,a.kt)("inlineCode",{parentName:"p"},"NULL==NULL"),". In other words, in the ",(0,a.kt)("inlineCode",{parentName:"p"},"DISTINCT")," results, different combinations with ",(0,a.kt)("inlineCode",{parentName:"p"},"NULL")," occur only once. It differs from ",(0,a.kt)("inlineCode",{parentName:"p"},"NULL")," processing in most other contexts."),(0,a.kt)("h2",{id:"alternatives"},"Alternatives"),(0,a.kt)("p",null,"It is possible to obtain the same result by applying ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/select/group-by"},"GROUP BY")," across the same set of values as specified as ",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT")," clause, without using any aggregate functions. But there are few differences from ",(0,a.kt)("inlineCode",{parentName:"p"},"GROUP BY")," approach:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"DISTINCT")," can be applied together with ",(0,a.kt)("inlineCode",{parentName:"li"},"GROUP BY"),"."),(0,a.kt)("li",{parentName:"ul"},"When ",(0,a.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/statements/select/order-by"},"ORDER BY")," is omitted and ",(0,a.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/statements/select/limit"},"LIMIT")," is defined, the query stops running immediately after the required number of different rows has been read."),(0,a.kt)("li",{parentName:"ul"},"Data blocks are output as they are processed, without waiting for the entire query to finish running.")))}m.isMDXComponent=!0}}]);