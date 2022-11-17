"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[23979,77397],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=c(n),d=l,m=f["".concat(o,".").concat(d)]||f[d]||p[d]||a;return n?r.createElement(m,s(s({ref:t},u),{},{components:n})):r.createElement(m,s({ref:t},u))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,s=new Array(a);s[0]=f;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:l,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},90839:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(87462),l=(n(67294),n(3905));const a={slug:"/en/sql-reference/table-functions/sqlite",sidebar_position:55,sidebar_label:"sqlite",title:"sqlite"},s=void 0,i={unversionedId:"en/sql-reference/table-functions/sqlite",id:"en/sql-reference/table-functions/sqlite",title:"sqlite",description:"Allows to perform queries on a data stored in an SQLite database.",source:"@site/docs/en/sql-reference/table-functions/sqlite.md",sourceDirName:"en/sql-reference/table-functions",slug:"/en/sql-reference/table-functions/sqlite",permalink:"/docs/en/sql-reference/table-functions/sqlite",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/table-functions/sqlite.md",tags:[],version:"current",sidebarPosition:55,frontMatter:{slug:"/en/sql-reference/table-functions/sqlite",sidebar_position:55,sidebar_label:"sqlite",title:"sqlite"},sidebar:"english",previous:{title:"s3Cluster",permalink:"/docs/en/sql-reference/table-functions/s3Cluster"},next:{title:"Dictionaries",permalink:"/docs/en/sql-reference/dictionaries/"}},o={},c=[],u={toc:c};function p(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Allows to perform queries on a data stored in an ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/engines/database-engines/sqlite"},"SQLite")," database."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")," "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"    sqlite('db_path', 'table_name')\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")," "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"db_path")," \u2014 Path to a file with an SQLite database. ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/string"},"String"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"table_name")," \u2014 Name of a table in the SQLite database. ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/string"},"String"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returned value")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"A table object with the same columns as in the original ",(0,l.kt)("inlineCode",{parentName:"li"},"SQLite")," table.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("p",null,"Query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM sqlite('sqlite.db', 'table1') ORDER BY col2;\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500col1\u2500\u2500\u252c\u2500col2\u2500\u2510\n\u2502 line1 \u2502    1 \u2502\n\u2502 line2 \u2502    2 \u2502\n\u2502 line3 \u2502    3 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"See Also")," "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/en/engines/table-engines/integrations/sqlite"},"SQLite")," table engine")))}p.isMDXComponent=!0},91739:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var r=n(87462),l=(n(67294),n(3905)),a=n(90839);const s={slug:"/zh/sql-reference/table-functions/sqlite",sidebar_position:55,sidebar_label:"sqlite",title:"sqlite"},i=void 0,o={unversionedId:"zh/sql-reference/table-functions/sqlite",id:"zh/sql-reference/table-functions/sqlite",title:"sqlite",description:"",source:"@site/docs/zh/sql-reference/table-functions/sqlite.mdx",sourceDirName:"zh/sql-reference/table-functions",slug:"/zh/sql-reference/table-functions/sqlite",permalink:"/docs/zh/sql-reference/table-functions/sqlite",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/table-functions/sqlite.mdx",tags:[],version:"current",sidebarPosition:55,frontMatter:{slug:"/zh/sql-reference/table-functions/sqlite",sidebar_position:55,sidebar_label:"sqlite",title:"sqlite"},sidebar:"chinese",previous:{title:"s3Cluster",permalink:"/docs/zh/sql-reference/table-functions/s3Cluster"},next:{title:"mysql",permalink:"/docs/zh/sql-reference/table-functions/mysql"}},c={},u=[],p={toc:u};function f(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(a.default,{mdxType:"Content"}))}f.isMDXComponent=!0}}]);