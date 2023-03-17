"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[63998],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(a),p=r,f=d["".concat(l,".").concat(p)]||d[p]||m[p]||o;return a?n.createElement(f,s(s({ref:t},u),{},{components:a})):n.createElement(f,s({ref:t},u))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},94241:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={slug:"/en/faq/general/columnar-database",title:"What is a columnar database?",toc_hidden:!0,toc_priority:101},s="What Is a Columnar Database?",i={permalink:"/docs/knowledgebase/en/faq/general/columnar-database",source:"@site/knowledgebase/faq/general/columnar-database.md",title:"What is a columnar database?",description:"A columnar database stores the data of each column independently. This allows reading data from disk only for those columns that are used in any given query. The cost is that operations that affect whole rows become proportionally more expensive. The synonym for a columnar database is a column-oriented database management system. ClickHouse is a typical example of such a system.",date:"2023-03-17T17:39:50.000Z",formattedDate:"March 17, 2023",tags:[],readingTime:1.015,hasTruncateMarker:!1,authors:[],frontMatter:{slug:"/en/faq/general/columnar-database",title:"What is a columnar database?",toc_hidden:!0,toc_priority:101},prevItem:{title:"Troubleshooting",permalink:"/docs/knowledgebase/en/faq/troubleshooting"},nextItem:{title:"What does \u201cClickHouse\u201d mean?",permalink:"/docs/knowledgebase/en/faq/general/dbms-naming"}},l={authorsImageUrls:[]},c=[],u={toc:c},d="wrapper";function m(e){let{components:t,...o}=e;return(0,r.kt)(d,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A columnar database stores the data of each column independently. This allows reading data from disk only for those columns that are used in any given query. The cost is that operations that affect whole rows become proportionally more expensive. The synonym for a columnar database is a column-oriented database management system. ClickHouse is a typical example of such a system."),(0,r.kt)("p",null,"Key columnar database advantages are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Queries that use only a few columns out of many."),(0,r.kt)("li",{parentName:"ul"},"Aggregating queries against large volumes of data."),(0,r.kt)("li",{parentName:"ul"},"Column-wise data compression.")),(0,r.kt)("p",null,"Here is the illustration of the difference between traditional row-oriented systems and columnar databases when building reports:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Traditional row-oriented"),"\n",(0,r.kt)("img",{alt:"Traditional row-oriented",src:a(91464).Z+"#",width:"630",height:"258"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Columnar"),"\n",(0,r.kt)("img",{alt:"Columnar",src:a(44688).Z+"#",width:"630",height:"258"})),(0,r.kt)("p",null,"A columnar database is the preferred choice for analytical applications because it allows having many columns in a table just in case, but to not pay the cost for unused columns on read query execution time (a traditional OLTP database reads all of the data during queries as the data is stored in rows and not columns). Column-oriented databases are designed for big data processing and data warehousing, they often natively scale using distributed clusters of low-cost hardware to increase throughput. ClickHouse does it with combination of ",(0,r.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/engines/table-engines/special/distributed.md"},"distributed")," and ",(0,r.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/engines/table-engines/mergetree-family/replication.md"},"replicated")," tables."))}m.isMDXComponent=!0},44688:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/column-oriented-d082e49b7743d4ded32c7952bfdb028f.gif"},91464:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/row-oriented-3e6fd5aa48e3075202d242b4799da8fa.gif"}}]);