"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[57514],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),g=p(n),m=r,d=g["".concat(s,".").concat(m)]||g[m]||u[m]||l;return n?a.createElement(d,i(i({ref:t},c),{},{components:n})):a.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[g]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},19742:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={slug:"/en/engines/table-engines/mergetree-family/collapsingmergetree",sidebar_position:70,sidebar_label:"CollapsingMergeTree"},i="CollapsingMergeTree",o={unversionedId:"en/engines/table-engines/mergetree-family/collapsingmergetree",id:"en/engines/table-engines/mergetree-family/collapsingmergetree",title:"CollapsingMergeTree",description:"The engine inherits from MergeTree and adds the logic of rows collapsing to data parts merge algorithm.",source:"@site/docs/en/engines/table-engines/mergetree-family/collapsingmergetree.md",sourceDirName:"en/engines/table-engines/mergetree-family",slug:"/en/engines/table-engines/mergetree-family/collapsingmergetree",permalink:"/docs/en/engines/table-engines/mergetree-family/collapsingmergetree",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/engines/table-engines/mergetree-family/collapsingmergetree.md",tags:[],version:"current",sidebarPosition:70,frontMatter:{slug:"/en/engines/table-engines/mergetree-family/collapsingmergetree",sidebar_position:70,sidebar_label:"CollapsingMergeTree"},sidebar:"sqlreference",previous:{title:"AggregatingMergeTree",permalink:"/docs/en/engines/table-engines/mergetree-family/aggregatingmergetree"},next:{title:"VersionedCollapsingMergeTree",permalink:"/docs/en/engines/table-engines/mergetree-family/versionedcollapsingmergetree"}},s={},p=[{value:"Creating a Table",id:"creating-a-table",level:2},{value:"CollapsingMergeTree Parameters",id:"collapsingmergetree-parameters",level:2},{value:"sign",id:"sign",level:3},{value:"Query clauses",id:"query-clauses",level:2},{value:"Collapsing",id:"table_engine-collapsingmergetree-collapsing",level:2},{value:"Data",id:"data",level:3},{value:"Algorithm",id:"table_engine-collapsingmergetree-collapsing-algorithm",level:3},{value:"Example of Use",id:"example-of-use",level:2},{value:"Example of Another Approach",id:"example-of-another-approach",level:2}],c={toc:p},g="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(g,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"collapsingmergetree"},"CollapsingMergeTree"),(0,r.kt)("p",null,"The engine inherits from ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/mergetree-family/mergetree"},"MergeTree")," and adds the logic of rows collapsing to data parts merge algorithm."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"CollapsingMergeTree")," asynchronously deletes (collapses) pairs of rows if all of the fields in a sorting key (",(0,r.kt)("inlineCode",{parentName:"p"},"ORDER BY"),") are equivalent except the particular field ",(0,r.kt)("inlineCode",{parentName:"p"},"Sign"),", which can have ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"-1")," values. Rows without a pair are kept. For more details see the ",(0,r.kt)("a",{parentName:"p",href:"#table_engine-collapsingmergetree-collapsing"},"Collapsing")," section of the document."),(0,r.kt)("p",null,"The engine may significantly reduce the volume of storage and increase the efficiency of ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT")," query as a consequence."),(0,r.kt)("h2",{id:"creating-a-table"},"Creating a Table"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE [IF NOT EXISTS] [db.]table_name [ON CLUSTER cluster]\n(\n    name1 [type1] [DEFAULT|MATERIALIZED|ALIAS expr1],\n    name2 [type2] [DEFAULT|MATERIALIZED|ALIAS expr2],\n    ...\n) ENGINE = CollapsingMergeTree(sign)\n[PARTITION BY expr]\n[ORDER BY expr]\n[SAMPLE BY expr]\n[SETTINGS name=value, ...]\n")),(0,r.kt)("p",null,"For a description of query parameters, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/create/table"},"query description"),"."),(0,r.kt)("h2",{id:"collapsingmergetree-parameters"},"CollapsingMergeTree Parameters"),(0,r.kt)("h3",{id:"sign"},"sign"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"sign")," \u2014 Name of the column with the type of row: ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," is a \u201cstate\u201d row, ",(0,r.kt)("inlineCode",{parentName:"p"},"-1")," is a \u201ccancel\u201d row."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Column data type \u2014 `Int8`.\n")),(0,r.kt)("h2",{id:"query-clauses"},"Query clauses"),(0,r.kt)("p",null,"When creating a ",(0,r.kt)("inlineCode",{parentName:"p"},"CollapsingMergeTree")," table, the same ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/mergetree-family/mergetree#table_engine-mergetree-creating-a-table"},"query clauses")," are required, as when creating a ",(0,r.kt)("inlineCode",{parentName:"p"},"MergeTree")," table."),(0,r.kt)("details",{markdown:"1"},(0,r.kt)("summary",null,"Deprecated Method for Creating a Table"),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Do not use this method in new projects and, if possible, switch old projects to the method described above.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE [IF NOT EXISTS] [db.]table_name [ON CLUSTER cluster]\n(\n    name1 [type1] [DEFAULT|MATERIALIZED|ALIAS expr1],\n    name2 [type2] [DEFAULT|MATERIALIZED|ALIAS expr2],\n    ...\n) ENGINE [=] CollapsingMergeTree(date-column [, sampling_expression], (primary, key), index_granularity, sign)\n")),(0,r.kt)("p",null,"All of the parameters excepting ",(0,r.kt)("inlineCode",{parentName:"p"},"sign")," have the same meaning as in ",(0,r.kt)("inlineCode",{parentName:"p"},"MergeTree"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"sign")," \u2014 Name of the column with the type of row: ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," \u2014 \u201cstate\u201d row, ",(0,r.kt)("inlineCode",{parentName:"p"},"-1")," \u2014 \u201ccancel\u201d row."),(0,r.kt)("p",{parentName:"li"},"Column Data Type \u2014 ",(0,r.kt)("inlineCode",{parentName:"p"},"Int8"),".")))),(0,r.kt)("h2",{id:"table_engine-collapsingmergetree-collapsing"},"Collapsing"),(0,r.kt)("h3",{id:"data"},"Data"),(0,r.kt)("p",null,"Consider the situation where you need to save continually changing data for some object. It sounds logical to have one row for an object and update it at any change, but update operation is expensive and slow for DBMS because it requires rewriting of the data in the storage. If you need to write data quickly, update not acceptable, but you can write the changes of an object sequentially as follows."),(0,r.kt)("p",null,"Use the particular column ",(0,r.kt)("inlineCode",{parentName:"p"},"Sign"),". If ",(0,r.kt)("inlineCode",{parentName:"p"},"Sign = 1")," it means that the row is a state of an object, let\u2019s call it \u201cstate\u201d row. If ",(0,r.kt)("inlineCode",{parentName:"p"},"Sign = -1")," it means the cancellation of the state of an object with the same attributes, let\u2019s call it \u201ccancel\u201d row."),(0,r.kt)("p",null,"For example, we want to calculate how much pages users checked at some site and how long they were there. At some moment we write the following row with the state of user activity:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500UserID\u2500\u252c\u2500PageViews\u2500\u252c\u2500Duration\u2500\u252c\u2500Sign\u2500\u2510\n\u2502 4324182021466249494 \u2502         5 \u2502      146 \u2502    1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"At some moment later we register the change of user activity and write it with the following two rows."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500UserID\u2500\u252c\u2500PageViews\u2500\u252c\u2500Duration\u2500\u252c\u2500Sign\u2500\u2510\n\u2502 4324182021466249494 \u2502         5 \u2502      146 \u2502   -1 \u2502\n\u2502 4324182021466249494 \u2502         6 \u2502      185 \u2502    1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"The first row cancels the previous state of the object (user). It should copy the sorting key fields of the cancelled state excepting ",(0,r.kt)("inlineCode",{parentName:"p"},"Sign"),"."),(0,r.kt)("p",null,"The second row contains the current state."),(0,r.kt)("p",null,"As we need only the last state of user activity, the rows"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500UserID\u2500\u252c\u2500PageViews\u2500\u252c\u2500Duration\u2500\u252c\u2500Sign\u2500\u2510\n\u2502 4324182021466249494 \u2502         5 \u2502      146 \u2502    1 \u2502\n\u2502 4324182021466249494 \u2502         5 \u2502      146 \u2502   -1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"can be deleted collapsing the invalid (old) state of an object. ",(0,r.kt)("inlineCode",{parentName:"p"},"CollapsingMergeTree")," does this while merging of the data parts."),(0,r.kt)("p",null,"Why we need 2 rows for each change read in the ",(0,r.kt)("a",{parentName:"p",href:"#table_engine-collapsingmergetree-collapsing-algorithm"},"Algorithm")," paragraph."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Peculiar properties of such approach")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The program that writes the data should remember the state of an object to be able to cancel it. \u201cCancel\u201d string should contain copies of the sorting key fields of the \u201cstate\u201d string and the opposite ",(0,r.kt)("inlineCode",{parentName:"li"},"Sign"),". It increases the initial size of storage but allows to write the data quickly."),(0,r.kt)("li",{parentName:"ol"},"Long growing arrays in columns reduce the efficiency of the engine due to load for writing. The more straightforward data, the higher the efficiency."),(0,r.kt)("li",{parentName:"ol"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"SELECT")," results depend strongly on the consistency of object changes history. Be accurate when preparing data for inserting. You can get unpredictable results in inconsistent data, for example, negative values for non-negative metrics such as session depth.")),(0,r.kt)("h3",{id:"table_engine-collapsingmergetree-collapsing-algorithm"},"Algorithm"),(0,r.kt)("p",null,"When ClickHouse merges data parts, each group of consecutive rows with the same sorting key (",(0,r.kt)("inlineCode",{parentName:"p"},"ORDER BY"),") is reduced to not more than two rows, one with ",(0,r.kt)("inlineCode",{parentName:"p"},"Sign = 1")," (\u201cstate\u201d row) and another with ",(0,r.kt)("inlineCode",{parentName:"p"},"Sign = -1")," (\u201ccancel\u201d row). In other words, entries collapse."),(0,r.kt)("p",null,"For each resulting data part ClickHouse saves:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The first \u201ccancel\u201d and the last \u201cstate\u201d rows, if the number of \u201cstate\u201d and \u201ccancel\u201d rows matches and the last row is a \u201cstate\u201d row."),(0,r.kt)("li",{parentName:"ol"},"The last \u201cstate\u201d row, if there are more \u201cstate\u201d rows than \u201ccancel\u201d rows."),(0,r.kt)("li",{parentName:"ol"},"The first \u201ccancel\u201d row, if there are more \u201ccancel\u201d rows than \u201cstate\u201d rows."),(0,r.kt)("li",{parentName:"ol"},"None of the rows, in all other cases.")),(0,r.kt)("p",null,"Also when there are at least 2 more \u201cstate\u201d rows than \u201ccancel\u201d rows, or at least 2 more \u201ccancel\u201d rows then \u201cstate\u201d rows, the merge continues, but ClickHouse treats this situation as a logical error and records it in the server log. This error can occur if the same data were inserted more than once."),(0,r.kt)("p",null,"Thus, collapsing should not change the results of calculating statistics.\nChanges gradually collapsed so that in the end only the last state of almost every object left."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Sign")," is required because the merging algorithm does not guarantee that all of the rows with the same sorting key will be in the same resulting data part and even on the same physical server. ClickHouse process ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT")," queries with multiple threads, and it can not predict the order of rows in the result. The aggregation is required if there is a need to get completely \u201ccollapsed\u201d data from ",(0,r.kt)("inlineCode",{parentName:"p"},"CollapsingMergeTree")," table."),(0,r.kt)("p",null,"To finalize collapsing, write a query with ",(0,r.kt)("inlineCode",{parentName:"p"},"GROUP BY")," clause and aggregate functions that account for the sign. For example, to calculate quantity, use ",(0,r.kt)("inlineCode",{parentName:"p"},"sum(Sign)")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"count()"),". To calculate the sum of something, use ",(0,r.kt)("inlineCode",{parentName:"p"},"sum(Sign * x)")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"sum(x)"),", and so on, and also add ",(0,r.kt)("inlineCode",{parentName:"p"},"HAVING sum(Sign) > 0"),"."),(0,r.kt)("p",null,"The aggregates ",(0,r.kt)("inlineCode",{parentName:"p"},"count"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"sum")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"avg")," could be calculated this way. The aggregate ",(0,r.kt)("inlineCode",{parentName:"p"},"uniq")," could be calculated if an object has at least one state not collapsed. The aggregates ",(0,r.kt)("inlineCode",{parentName:"p"},"min")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"max")," could not be calculated because ",(0,r.kt)("inlineCode",{parentName:"p"},"CollapsingMergeTree")," does not save the values history of the collapsed states."),(0,r.kt)("p",null,"If you need to extract data without aggregation (for example, to check whether rows are present whose newest values match certain conditions), you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"FINAL")," modifier for the ",(0,r.kt)("inlineCode",{parentName:"p"},"FROM")," clause. This approach is significantly less efficient."),(0,r.kt)("h2",{id:"example-of-use"},"Example of Use"),(0,r.kt)("p",null,"Example data:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500UserID\u2500\u252c\u2500PageViews\u2500\u252c\u2500Duration\u2500\u252c\u2500Sign\u2500\u2510\n\u2502 4324182021466249494 \u2502         5 \u2502      146 \u2502    1 \u2502\n\u2502 4324182021466249494 \u2502         5 \u2502      146 \u2502   -1 \u2502\n\u2502 4324182021466249494 \u2502         6 \u2502      185 \u2502    1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"Creation of the table:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE UAct\n(\n    UserID UInt64,\n    PageViews UInt8,\n    Duration UInt8,\n    Sign Int8\n)\nENGINE = CollapsingMergeTree(Sign)\nORDER BY UserID\n")),(0,r.kt)("p",null,"Insertion of the data:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO UAct VALUES (4324182021466249494, 5, 146, 1)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO UAct VALUES (4324182021466249494, 5, 146, -1),(4324182021466249494, 6, 185, 1)\n")),(0,r.kt)("p",null,"We use two ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT")," queries to create two different data parts. If we insert the data with one query ClickHouse creates one data part and will not perform any merge ever."),(0,r.kt)("p",null,"Getting the data:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM UAct\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500UserID\u2500\u252c\u2500PageViews\u2500\u252c\u2500Duration\u2500\u252c\u2500Sign\u2500\u2510\n\u2502 4324182021466249494 \u2502         5 \u2502      146 \u2502   -1 \u2502\n\u2502 4324182021466249494 \u2502         6 \u2502      185 \u2502    1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500UserID\u2500\u252c\u2500PageViews\u2500\u252c\u2500Duration\u2500\u252c\u2500Sign\u2500\u2510\n\u2502 4324182021466249494 \u2502         5 \u2502      146 \u2502    1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"What do we see and where is collapsing?"),(0,r.kt)("p",null,"With two ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT")," queries, we created 2 data parts. The ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT")," query was performed in 2 threads, and we got a random order of rows. Collapsing not occurred because there was no merge of the data parts yet. ClickHouse merges data part in an unknown moment which we can not predict."),(0,r.kt)("p",null,"Thus we need aggregation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    UserID,\n    sum(PageViews * Sign) AS PageViews,\n    sum(Duration * Sign) AS Duration\nFROM UAct\nGROUP BY UserID\nHAVING sum(Sign) > 0\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500UserID\u2500\u252c\u2500PageViews\u2500\u252c\u2500Duration\u2500\u2510\n\u2502 4324182021466249494 \u2502         6 \u2502      185 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"If we do not need aggregation and want to force collapsing, we can use ",(0,r.kt)("inlineCode",{parentName:"p"},"FINAL")," modifier for ",(0,r.kt)("inlineCode",{parentName:"p"},"FROM")," clause."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM UAct FINAL\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500UserID\u2500\u252c\u2500PageViews\u2500\u252c\u2500Duration\u2500\u252c\u2500Sign\u2500\u2510\n\u2502 4324182021466249494 \u2502         6 \u2502      185 \u2502    1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"This way of selecting the data is very inefficient. Don\u2019t use it for big tables."),(0,r.kt)("h2",{id:"example-of-another-approach"},"Example of Another Approach"),(0,r.kt)("p",null,"Example data:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500UserID\u2500\u252c\u2500PageViews\u2500\u252c\u2500Duration\u2500\u252c\u2500Sign\u2500\u2510\n\u2502 4324182021466249494 \u2502         5 \u2502      146 \u2502    1 \u2502\n\u2502 4324182021466249494 \u2502        -5 \u2502     -146 \u2502   -1 \u2502\n\u2502 4324182021466249494 \u2502         6 \u2502      185 \u2502    1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"The idea is that merges take into account only key fields. And in the \u201cCancel\u201d line we can specify negative values that equalize the previous version of the row when summing without using the Sign column. For this approach, it is necessary to change the data type ",(0,r.kt)("inlineCode",{parentName:"p"},"PageViews"),",",(0,r.kt)("inlineCode",{parentName:"p"},"Duration")," to store negative values of UInt8 -",">"," Int16."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE UAct\n(\n    UserID UInt64,\n    PageViews Int16,\n    Duration Int16,\n    Sign Int8\n)\nENGINE = CollapsingMergeTree(Sign)\nORDER BY UserID\n")),(0,r.kt)("p",null,"Let\u2019s test the approach:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"insert into UAct values(4324182021466249494,  5,  146,  1);\ninsert into UAct values(4324182021466249494, -5, -146, -1);\ninsert into UAct values(4324182021466249494,  6,  185,  1);\n\nselect * from UAct final; // avoid using final in production (just for a test or small tables)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500UserID\u2500\u252c\u2500PageViews\u2500\u252c\u2500Duration\u2500\u252c\u2500Sign\u2500\u2510\n\u2502 4324182021466249494 \u2502         6 \u2502      185 \u2502    1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    UserID,\n    sum(PageViews) AS PageViews,\n    sum(Duration) AS Duration\nFROM UAct\nGROUP BY UserID\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500UserID\u2500\u252c\u2500PageViews\u2500\u252c\u2500Duration\u2500\u2510\n\u2502 4324182021466249494 \u2502         6 \u2502      185 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select count() FROM UAct\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500count()\u2500\u2510\n\u2502       3 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"optimize table UAct final;\n\nselect * FROM UAct\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500UserID\u2500\u252c\u2500PageViews\u2500\u252c\u2500Duration\u2500\u252c\u2500Sign\u2500\u2510\n\u2502 4324182021466249494 \u2502         6 \u2502      185 \u2502    1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}u.isMDXComponent=!0}}]);