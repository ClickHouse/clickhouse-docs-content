"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[29519],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),d=s,f=p["".concat(i,".").concat(d)]||p[d]||m[d]||a;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[p]="string"==typeof e?e:s,l[1]=o;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},57731:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=n(87462),s=(n(67294),n(3905));const a={slug:"/en/sql-reference/statements/select/with",sidebar_label:"WITH"},l="WITH Clause",o={unversionedId:"en/sql-reference/statements/select/with",id:"en/sql-reference/statements/select/with",title:"WITH Clause",description:"ClickHouse supports Common Table Expressions (CTE), that is provides to use results of WITH clause in the rest of SELECT query. Named subqueries can be included to the current and child query context in places where table objects are allowed. Recursion is prevented by hiding the current level CTEs from the WITH expression.",source:"@site/docs/en/sql-reference/statements/select/with.md",sourceDirName:"en/sql-reference/statements/select",slug:"/en/sql-reference/statements/select/with",permalink:"/docs/en/sql-reference/statements/select/with",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/statements/select/with.md",tags:[],version:"current",frontMatter:{slug:"/en/sql-reference/statements/select/with",sidebar_label:"WITH"},sidebar:"sqlreference",previous:{title:"WHERE",permalink:"/docs/en/sql-reference/statements/select/where"},next:{title:"INSERT INTO",permalink:"/docs/en/sql-reference/statements/insert-into"}},i={},c=[{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2}],u={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,s.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"with-clause"},"WITH Clause"),(0,s.kt)("p",null,"ClickHouse supports Common Table Expressions (",(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Hierarchical_and_recursive_queries_in_SQL"},"CTE"),"), that is provides to use results of ",(0,s.kt)("inlineCode",{parentName:"p"},"WITH")," clause in the rest of ",(0,s.kt)("inlineCode",{parentName:"p"},"SELECT")," query. Named subqueries can be included to the current and child query context in places where table objects are allowed. Recursion is prevented by hiding the current level CTEs from the WITH expression."),(0,s.kt)("h2",{id:"syntax"},"Syntax"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"WITH <expression> AS <identifier>\n")),(0,s.kt)("p",null,"or"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"WITH <identifier> AS <subquery expression>\n")),(0,s.kt)("h2",{id:"examples"},"Examples"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 1:")," Using constant expression as \u201cvariable\u201d"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"WITH '2019-08-01 15:23:00' as ts_upper_bound\nSELECT *\nFROM hits\nWHERE\n    EventDate = toDate(ts_upper_bound) AND\n    EventTime <= ts_upper_bound;\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 2:")," Evicting a sum(bytes) expression result from the SELECT clause column list"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"WITH sum(bytes) as s\nSELECT\n    formatReadableSize(s),\n    table\nFROM system.parts\nGROUP BY table\nORDER BY s;\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 3:")," Using results of a scalar subquery"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"/* this example would return TOP 10 of most huge tables */\nWITH\n    (\n        SELECT sum(bytes)\n        FROM system.parts\n        WHERE active\n    ) AS total_disk_usage\nSELECT\n    (sum(bytes) / total_disk_usage) * 100 AS table_disk_usage,\n    table\nFROM system.parts\nGROUP BY table\nORDER BY table_disk_usage DESC\nLIMIT 10;\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 4:")," Reusing expression in a subquery"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"WITH test1 AS (SELECT i + 1, j + 1 FROM test1)\nSELECT * FROM test1;\n")))}m.isMDXComponent=!0}}]);