"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[89762,32799],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,d=u["".concat(i,".").concat(m)]||u[m]||f[m]||s;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<s;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},93410:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const s={slug:"/en/sql-reference/statements/select/offset",sidebar_label:"OFFSET",title:"OFFSET FETCH Clause"},o=void 0,l={unversionedId:"en/sql-reference/statements/select/offset",id:"en/sql-reference/statements/select/offset",title:"OFFSET FETCH Clause",description:"OFFSET and FETCH allow you to retrieve data by portions. They specify a row block which you want to get by a single query.",source:"@site/docs/en/sql-reference/statements/select/offset.md",sourceDirName:"en/sql-reference/statements/select",slug:"/en/sql-reference/statements/select/offset",permalink:"/docs/en/sql-reference/statements/select/offset",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/statements/select/offset.md",tags:[],version:"current",frontMatter:{slug:"/en/sql-reference/statements/select/offset",sidebar_label:"OFFSET",title:"OFFSET FETCH Clause"},sidebar:"english",previous:{title:"LIMIT",permalink:"/docs/en/sql-reference/statements/select/limit"},next:{title:"ORDER BY",permalink:"/docs/en/sql-reference/statements/select/order-by"}},i={},c=[{value:"Examples",id:"examples",level:2}],p={toc:c},u="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"OFFSET")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"FETCH")," allow you to retrieve data by portions. They specify a row block which you want to get by a single query."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"OFFSET offset_row_count {ROW | ROWS}] [FETCH {FIRST | NEXT} fetch_row_count {ROW | ROWS} {ONLY | WITH TIES}]\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"offset_row_count")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"fetch_row_count")," value can be a number or a literal constant. You can omit ",(0,a.kt)("inlineCode",{parentName:"p"},"fetch_row_count"),"; by default, it equals to 1."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"OFFSET")," specifies the number of rows to skip before starting to return rows from the query result set."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"FETCH")," specifies the maximum number of rows that can be in the result of a query."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ONLY")," option is used to return rows that immediately follow the rows omitted by the ",(0,a.kt)("inlineCode",{parentName:"p"},"OFFSET"),". In this case the ",(0,a.kt)("inlineCode",{parentName:"p"},"FETCH")," is an alternative to the ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/select/limit"},"LIMIT")," clause. For example, the following query"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM test_fetch ORDER BY a OFFSET 1 ROW FETCH FIRST 3 ROWS ONLY;\n")),(0,a.kt)("p",null,"is identical to the query"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM test_fetch ORDER BY a LIMIT 3 OFFSET 1;\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"WITH TIES")," option is used to return any additional rows that tie for the last place in the result set according to the ",(0,a.kt)("inlineCode",{parentName:"p"},"ORDER BY")," clause. For example, if ",(0,a.kt)("inlineCode",{parentName:"p"},"fetch_row_count")," is set to 5 but two additional rows match the values of the ",(0,a.kt)("inlineCode",{parentName:"p"},"ORDER BY")," columns in the fifth row, the result set will contain seven rows."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"According to the standard, the ",(0,a.kt)("inlineCode",{parentName:"p"},"OFFSET")," clause must come before the ",(0,a.kt)("inlineCode",{parentName:"p"},"FETCH")," clause if both are present.")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The real offset can also depend on the ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/operations/settings/settings#offset"},"offset")," setting.")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Input table:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500a\u2500\u252c\u2500b\u2500\u2510\n\u2502 1 \u2502 1 \u2502\n\u2502 2 \u2502 1 \u2502\n\u2502 3 \u2502 4 \u2502\n\u2502 1 \u2502 3 \u2502\n\u2502 5 \u2502 4 \u2502\n\u2502 0 \u2502 6 \u2502\n\u2502 5 \u2502 7 \u2502\n\u2514\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,"Usage of the ",(0,a.kt)("inlineCode",{parentName:"p"},"ONLY")," option:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM test_fetch ORDER BY a OFFSET 3 ROW FETCH FIRST 3 ROWS ONLY;\n")),(0,a.kt)("p",null,"Result:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500a\u2500\u252c\u2500b\u2500\u2510\n\u2502 2 \u2502 1 \u2502\n\u2502 3 \u2502 4 \u2502\n\u2502 5 \u2502 4 \u2502\n\u2514\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,"Usage of the ",(0,a.kt)("inlineCode",{parentName:"p"},"WITH TIES")," option:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM test_fetch ORDER BY a OFFSET 3 ROW FETCH FIRST 3 ROWS WITH TIES;\n")),(0,a.kt)("p",null,"Result:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500a\u2500\u252c\u2500b\u2500\u2510\n\u2502 2 \u2502 1 \u2502\n\u2502 3 \u2502 4 \u2502\n\u2502 5 \u2502 4 \u2502\n\u2502 5 \u2502 7 \u2502\n\u2514\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2518\n")))}f.isMDXComponent=!0},82203:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905)),s=n(93410);const o={slug:"/zh/sql-reference/statements/select/offset",sidebar_label:"OFFSET",title:"OFFSET FETCH Clause"},l=void 0,i={unversionedId:"zh/sql-reference/statements/select/offset",id:"zh/sql-reference/statements/select/offset",title:"OFFSET FETCH Clause",description:"",source:"@site/docs/zh/sql-reference/statements/select/offset.mdx",sourceDirName:"zh/sql-reference/statements/select",slug:"/zh/sql-reference/statements/select/offset",permalink:"/docs/zh/sql-reference/statements/select/offset",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/statements/select/offset.mdx",tags:[],version:"current",frontMatter:{slug:"/zh/sql-reference/statements/select/offset",sidebar_label:"OFFSET",title:"OFFSET FETCH Clause"},sidebar:"chinese",previous:{title:"LIMIT",permalink:"/docs/zh/sql-reference/statements/select/limit"},next:{title:"ORDER BY",permalink:"/docs/zh/sql-reference/statements/select/order-by"}},c={},p=[],u={toc:p},f="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(f,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(s.default,{mdxType:"Content"}))}m.isMDXComponent=!0}}]);