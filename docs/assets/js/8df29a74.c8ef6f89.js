"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[78243,97253],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),p=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),g=p(t),d=r,m=g["".concat(o,".").concat(d)]||g[d]||u[d]||i;return t?a.createElement(m,l(l({ref:n},c),{},{components:t})):a.createElement(m,l({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=g;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var p=2;p<i;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},48791:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=t(87462),r=(t(67294),t(3905));const i={slug:"/en/engines/table-engines/special/generate",sidebar_position:140,sidebar_label:"GenerateRandom",title:"GenerateRandom Table Engine"},l=void 0,s={unversionedId:"en/engines/table-engines/special/generate",id:"en/engines/table-engines/special/generate",title:"GenerateRandom Table Engine",description:"The GenerateRandom table engine produces random data for given table schema.",source:"@site/docs/en/engines/table-engines/special/generate.md",sourceDirName:"en/engines/table-engines/special",slug:"/en/engines/table-engines/special/generate",permalink:"/docs/en/engines/table-engines/special/generate",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/engines/table-engines/special/generate.md",tags:[],version:"current",sidebarPosition:140,frontMatter:{slug:"/en/engines/table-engines/special/generate",sidebar_position:140,sidebar_label:"GenerateRandom",title:"GenerateRandom Table Engine"},sidebar:"english",previous:{title:"External Data",permalink:"/docs/en/engines/table-engines/special/external-data"},next:{title:"Guides",permalink:"/docs/en/guides"}},o={},p=[{value:"Usage in ClickHouse Server",id:"usage-in-clickhouse-server",level:2},{value:"Example",id:"example",level:2},{value:"Details of Implementation",id:"details-of-implementation",level:2}],c={toc:p};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The GenerateRandom table engine produces random data for given table schema."),(0,r.kt)("p",null,"Usage examples:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use in test to populate reproducible large table."),(0,r.kt)("li",{parentName:"ul"},"Generate random input for fuzzing tests.")),(0,r.kt)("h2",{id:"usage-in-clickhouse-server"},"Usage in ClickHouse Server"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"ENGINE = GenerateRandom([random_seed] [,max_string_length] [,max_array_length])\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"max_array_length")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"max_string_length")," parameters specify maximum length of all\narray columns and strings correspondingly in generated data."),(0,r.kt)("p",null,"Generate table engine supports only ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT")," queries."),(0,r.kt)("p",null,"It supports all ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/"},"DataTypes")," that can be stored in a table except ",(0,r.kt)("inlineCode",{parentName:"p"},"LowCardinality")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"AggregateFunction"),"."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1.")," Set up the ",(0,r.kt)("inlineCode",{parentName:"p"},"generate_engine_table")," table:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE generate_engine_table (name String, value UInt32) ENGINE = GenerateRandom(1, 5, 3)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2.")," Query the data:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM generate_engine_table LIMIT 3\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500name\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500value\u2500\u2510\n\u2502 c4xJ \u2502 1412771199 \u2502\n\u2502 r    \u2502 1791099446 \u2502\n\u2502 7#$  \u2502  124312908 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h2",{id:"details-of-implementation"},"Details of Implementation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Not supported:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ALTER")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SELECT ... SAMPLE")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"INSERT")),(0,r.kt)("li",{parentName:"ul"},"Indices"),(0,r.kt)("li",{parentName:"ul"},"Replication")))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/engines/table-engines/special/generate/"},"Original article")," "))}u.isMDXComponent=!0},78079:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=t(87462),r=(t(67294),t(3905)),i=t(48791);const l={slug:"/ru/engines/table-engines/special/generate",sidebar_position:140,sidebar_label:"GenerateRandom",title:"GenerateRandom Table Engine"},s=void 0,o={unversionedId:"ru/engines/table-engines/special/generate",id:"ru/engines/table-engines/special/generate",title:"GenerateRandom Table Engine",description:"",source:"@site/docs/ru/engines/table-engines/special/generate.mdx",sourceDirName:"ru/engines/table-engines/special",slug:"/ru/engines/table-engines/special/generate",permalink:"/docs/ru/engines/table-engines/special/generate",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/engines/table-engines/special/generate.mdx",tags:[],version:"current",sidebarPosition:140,frontMatter:{slug:"/ru/engines/table-engines/special/generate",sidebar_position:140,sidebar_label:"GenerateRandom",title:"GenerateRandom Table Engine"},sidebar:"russia",previous:{title:"\u0412\u043d\u0435\u0448\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0434\u043b\u044f \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0430",permalink:"/docs/ru/engines/table-engines/special/external-data"},next:{title:"\u0414\u0432\u0438\u0436\u043a\u0438 \u0431\u0430\u0437 \u0434\u0430\u043d\u043d\u044b\u0445",permalink:"/docs/ru/engines/database-engines/"}},p={},c=[],u={toc:c};function g(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)(i.default,{mdxType:"Content"}))}g.isMDXComponent=!0}}]);