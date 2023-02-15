"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[76324],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>d});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(t),u=a,d=c["".concat(s,".").concat(u)]||c[u]||g[u]||i;return t?r.createElement(d,l(l({ref:n},m),{},{components:t})):r.createElement(d,l({ref:n},m))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=u;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},13176:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=t(87462),a=(t(67294),t(3905));const i={slug:"/en/engines/table-engines/mergetree-family/replacingmergetree",sidebar_position:40,sidebar_label:"ReplacingMergeTree"},l="ReplacingMergeTree",o={unversionedId:"en/engines/table-engines/mergetree-family/replacingmergetree",id:"en/engines/table-engines/mergetree-family/replacingmergetree",title:"ReplacingMergeTree",description:"The engine differs from MergeTree in that it removes duplicate entries with the same sorting key value (ORDER BY table section, not PRIMARY KEY).",source:"@site/docs/en/engines/table-engines/mergetree-family/replacingmergetree.md",sourceDirName:"en/engines/table-engines/mergetree-family",slug:"/en/engines/table-engines/mergetree-family/replacingmergetree",permalink:"/docs/en/engines/table-engines/mergetree-family/replacingmergetree",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/engines/table-engines/mergetree-family/replacingmergetree.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{slug:"/en/engines/table-engines/mergetree-family/replacingmergetree",sidebar_position:40,sidebar_label:"ReplacingMergeTree"},sidebar:"english",previous:{title:"Custom Partitioning Key",permalink:"/docs/en/engines/table-engines/mergetree-family/custom-partitioning-key"},next:{title:"SummingMergeTree",permalink:"/docs/en/engines/table-engines/mergetree-family/summingmergetree"}},s={},p=[{value:"Creating a Table",id:"creating-a-table",level:2},{value:"ReplacingMergeTree Parameters",id:"replacingmergetree-parameters",level:2},{value:"ver",id:"ver",level:3},{value:"Query clauses",id:"query-clauses",level:2}],m={toc:p},c="wrapper";function g(e){let{components:n,...t}=e;return(0,a.kt)(c,(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"replacingmergetree"},"ReplacingMergeTree"),(0,a.kt)("p",null,"The engine differs from ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/mergetree-family/mergetree#table_engines-mergetree"},"MergeTree")," in that it removes duplicate entries with the same ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/mergetree-family/mergetree"},"sorting key")," value (",(0,a.kt)("inlineCode",{parentName:"p"},"ORDER BY")," table section, not ",(0,a.kt)("inlineCode",{parentName:"p"},"PRIMARY KEY"),")."),(0,a.kt)("p",null,"Data deduplication occurs only during a merge. Merging occurs in the background at an unknown time, so you can\u2019t plan for it. Some of the data may remain unprocessed. Although you can run an unscheduled merge using the ",(0,a.kt)("inlineCode",{parentName:"p"},"OPTIMIZE")," query, do not count on using it, because the ",(0,a.kt)("inlineCode",{parentName:"p"},"OPTIMIZE")," query will read and write a large amount of data."),(0,a.kt)("p",null,"Thus, ",(0,a.kt)("inlineCode",{parentName:"p"},"ReplacingMergeTree")," is suitable for clearing out duplicate data in the background in order to save space, but it does not guarantee the absence of duplicates."),(0,a.kt)("h2",{id:"creating-a-table"},"Creating a Table"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE [IF NOT EXISTS] [db.]table_name [ON CLUSTER cluster]\n(\n    name1 [type1] [DEFAULT|MATERIALIZED|ALIAS expr1],\n    name2 [type2] [DEFAULT|MATERIALIZED|ALIAS expr2],\n    ...\n) ENGINE = ReplacingMergeTree([ver])\n[PARTITION BY expr]\n[ORDER BY expr]\n[PRIMARY KEY expr]\n[SAMPLE BY expr]\n[SETTINGS name=value, ...]\n")),(0,a.kt)("p",null,"For a description of request parameters, see ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/create/table"},"statement description"),"."),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"Uniqueness of rows is determined by the ",(0,a.kt)("inlineCode",{parentName:"p"},"ORDER BY")," table section, not ",(0,a.kt)("inlineCode",{parentName:"p"},"PRIMARY KEY"),".")),(0,a.kt)("h2",{id:"replacingmergetree-parameters"},"ReplacingMergeTree Parameters"),(0,a.kt)("h3",{id:"ver"},"ver"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ver")," \u2014 column with the version number. Type ",(0,a.kt)("inlineCode",{parentName:"p"},"UInt*"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Date"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"DateTime")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"DateTime64"),". Optional parameter."),(0,a.kt)("p",null,"When merging, ",(0,a.kt)("inlineCode",{parentName:"p"},"ReplacingMergeTree")," from all the rows with the same sorting key leaves only one:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The last in the selection, if ",(0,a.kt)("inlineCode",{parentName:"li"},"ver")," not set. A selection is a set of rows in a set of parts participating in the merge. The most recently created part (the last insert) will be the last one in the selection. Thus, after deduplication, the very last row from the most recent insert will remain for each unique sorting key."),(0,a.kt)("li",{parentName:"ul"},"With the maximum version, if ",(0,a.kt)("inlineCode",{parentName:"li"},"ver")," specified. If ",(0,a.kt)("inlineCode",{parentName:"li"},"ver"),' is the same for several rows, then it will use "if ',(0,a.kt)("inlineCode",{parentName:"li"},"ver"),' is not specified" rule for them, i.e. the most recent inserted row will remain.')),(0,a.kt)("p",null,"Example: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"-- without ver - the last inserted 'wins'\nCREATE TABLE myFirstReplacingMT\n(\n    `key` Int64,\n    `someCol` String,\n    `eventTime` DateTime\n)\nENGINE = ReplacingMergeTree\nORDER BY key;\n\nINSERT INTO myFirstReplacingMT Values (1, 'first', '2020-01-01 01:01:01');\nINSERT INTO myFirstReplacingMT Values (1, 'second', '2020-01-01 00:00:00');\n\nSELECT * FROM myFirstReplacingMT FINAL;\n\n\u250c\u2500key\u2500\u252c\u2500someCol\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500eventTime\u2500\u2510\n\u2502   1 \u2502 second  \u2502 2020-01-01 00:00:00 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n\n-- with ver - the row with the biggest ver 'wins'\nCREATE TABLE mySecondReplacingMT\n(\n    `key` Int64,\n    `someCol` String,\n    `eventTime` DateTime\n)\nENGINE = ReplacingMergeTree(eventTime)\nORDER BY key;\n\nINSERT INTO mySecondReplacingMT Values (1, 'first', '2020-01-01 01:01:01');\nINSERT INTO mySecondReplacingMT Values (1, 'second', '2020-01-01 00:00:00');\n\nSELECT * FROM mySecondReplacingMT FINAL;\n\n\u250c\u2500key\u2500\u252c\u2500someCol\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500eventTime\u2500\u2510\n\u2502   1 \u2502 first   \u2502 2020-01-01 01:01:01 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("h2",{id:"query-clauses"},"Query clauses"),(0,a.kt)("p",null,"When creating a ",(0,a.kt)("inlineCode",{parentName:"p"},"ReplacingMergeTree")," table the same ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/mergetree-family/mergetree"},"clauses")," are required, as when creating a ",(0,a.kt)("inlineCode",{parentName:"p"},"MergeTree")," table."),(0,a.kt)("details",{markdown:"1"},(0,a.kt)("summary",null,"Deprecated Method for Creating a Table"),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"Do not use this method in new projects and, if possible, switch old projects to the method described above.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE [IF NOT EXISTS] [db.]table_name [ON CLUSTER cluster]\n(\n    name1 [type1] [DEFAULT|MATERIALIZED|ALIAS expr1],\n    name2 [type2] [DEFAULT|MATERIALIZED|ALIAS expr2],\n    ...\n) ENGINE [=] ReplacingMergeTree(date-column [, sampling_expression], (primary, key), index_granularity, [ver])\n")),(0,a.kt)("p",null,"All of the parameters excepting ",(0,a.kt)("inlineCode",{parentName:"p"},"ver")," have the same meaning as in ",(0,a.kt)("inlineCode",{parentName:"p"},"MergeTree"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ver")," - column with the version. Optional parameter. For a description, see the text above."))))}g.isMDXComponent=!0}}]);