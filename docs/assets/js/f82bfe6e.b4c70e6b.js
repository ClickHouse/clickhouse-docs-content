"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[99207],{3905:(e,t,n)=>{n.d(t,{Zo:()=>g,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},g=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),c=p(n),u=r,m=c["".concat(s,".").concat(u)]||c[u]||d[u]||i;return n?a.createElement(m,l(l({ref:t},g),{},{components:n})):a.createElement(m,l({ref:t},g))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},49287:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={slug:"/en/engines/table-engines/mergetree-family/versionedcollapsingmergetree",sidebar_position:80,sidebar_label:"VersionedCollapsingMergeTree"},l="VersionedCollapsingMergeTree",o={unversionedId:"en/engines/table-engines/mergetree-family/versionedcollapsingmergetree",id:"en/engines/table-engines/mergetree-family/versionedcollapsingmergetree",title:"VersionedCollapsingMergeTree",description:"This engine:",source:"@site/docs/en/engines/table-engines/mergetree-family/versionedcollapsingmergetree.md",sourceDirName:"en/engines/table-engines/mergetree-family",slug:"/en/engines/table-engines/mergetree-family/versionedcollapsingmergetree",permalink:"/docs/en/engines/table-engines/mergetree-family/versionedcollapsingmergetree",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/engines/table-engines/mergetree-family/versionedcollapsingmergetree.md",tags:[],version:"current",sidebarPosition:80,frontMatter:{slug:"/en/engines/table-engines/mergetree-family/versionedcollapsingmergetree",sidebar_position:80,sidebar_label:"VersionedCollapsingMergeTree"},sidebar:"sqlreference",previous:{title:"CollapsingMergeTree",permalink:"/docs/en/engines/table-engines/mergetree-family/collapsingmergetree"},next:{title:"GraphiteMergeTree",permalink:"/docs/en/engines/table-engines/mergetree-family/graphitemergetree"}},s={},p=[{value:"Creating a Table",id:"creating-a-table",level:2},{value:"Engine Parameters",id:"engine-parameters",level:3},{value:"sign",id:"sign",level:4},{value:"version",id:"version",level:4},{value:"Query Clauses",id:"query-clauses",level:3},{value:"Collapsing",id:"table_engines_versionedcollapsingmergetree",level:2},{value:"Data",id:"data",level:3},{value:"Algorithm",id:"table_engines-versionedcollapsingmergetree-algorithm",level:3},{value:"Selecting Data",id:"selecting-data",level:2},{value:"Example of Use",id:"example-of-use",level:2}],g={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"versionedcollapsingmergetree"},"VersionedCollapsingMergeTree"),(0,r.kt)("p",null,"This engine:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Allows quick writing of object states that are continually changing."),(0,r.kt)("li",{parentName:"ul"},"Deletes old object states in the background. This significantly reduces the volume of storage.")),(0,r.kt)("p",null,"See the section ",(0,r.kt)("a",{parentName:"p",href:"#table_engines_versionedcollapsingmergetree"},"Collapsing")," for details."),(0,r.kt)("p",null,"The engine inherits from ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/mergetree-family/mergetree#table_engines-mergetree"},"MergeTree")," and adds the logic for collapsing rows to the algorithm for merging data parts. ",(0,r.kt)("inlineCode",{parentName:"p"},"VersionedCollapsingMergeTree")," serves the same purpose as ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/mergetree-family/collapsingmergetree"},"CollapsingMergeTree")," but uses a different collapsing algorithm that allows inserting the data in any order with multiple threads. In particular, the ",(0,r.kt)("inlineCode",{parentName:"p"},"Version")," column helps to collapse the rows properly even if they are inserted in the wrong order. In contrast, ",(0,r.kt)("inlineCode",{parentName:"p"},"CollapsingMergeTree")," allows only strictly consecutive insertion."),(0,r.kt)("h2",{id:"creating-a-table"},"Creating a Table"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE [IF NOT EXISTS] [db.]table_name [ON CLUSTER cluster]\n(\n    name1 [type1] [DEFAULT|MATERIALIZED|ALIAS expr1],\n    name2 [type2] [DEFAULT|MATERIALIZED|ALIAS expr2],\n    ...\n) ENGINE = VersionedCollapsingMergeTree(sign, version)\n[PARTITION BY expr]\n[ORDER BY expr]\n[SAMPLE BY expr]\n[SETTINGS name=value, ...]\n")),(0,r.kt)("p",null,"For a description of query parameters, see the ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/create/table"},"query description"),"."),(0,r.kt)("h3",{id:"engine-parameters"},"Engine Parameters"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"VersionedCollapsingMergeTree(sign, version)\n")),(0,r.kt)("h4",{id:"sign"},"sign"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"sign")," \u2014 Name of the column with the type of row: ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," is a \u201cstate\u201d row, ",(0,r.kt)("inlineCode",{parentName:"p"},"-1")," is a \u201ccancel\u201d row."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"The column data type should be `Int8`.\n")),(0,r.kt)("h4",{id:"version"},"version"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"version")," \u2014 Name of the column with the version of the object state."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"The column data type should be `UInt*`.\n")),(0,r.kt)("h3",{id:"query-clauses"},"Query Clauses"),(0,r.kt)("p",null,"When creating a ",(0,r.kt)("inlineCode",{parentName:"p"},"VersionedCollapsingMergeTree")," table, the same ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/mergetree-family/mergetree"},"clauses")," are required as when creating a ",(0,r.kt)("inlineCode",{parentName:"p"},"MergeTree")," table."),(0,r.kt)("details",{markdown:"1"},(0,r.kt)("summary",null,"Deprecated Method for Creating a Table"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Do not use this method in new projects. If possible, switch old projects to the method described above.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE [IF NOT EXISTS] [db.]table_name [ON CLUSTER cluster]\n(\n    name1 [type1] [DEFAULT|MATERIALIZED|ALIAS expr1],\n    name2 [type2] [DEFAULT|MATERIALIZED|ALIAS expr2],\n    ...\n) ENGINE [=] VersionedCollapsingMergeTree(date-column [, samp#table_engines_versionedcollapsingmergetreeling_expression], (primary, key), index_granularity, sign, version)\n")),(0,r.kt)("p",null,"All of the parameters except ",(0,r.kt)("inlineCode",{parentName:"p"},"sign")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"version")," have the same meaning as in ",(0,r.kt)("inlineCode",{parentName:"p"},"MergeTree"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"sign")," \u2014 Name of the column with the type of row: ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," is a \u201cstate\u201d row, ",(0,r.kt)("inlineCode",{parentName:"p"},"-1")," is a \u201ccancel\u201d row."),(0,r.kt)("p",{parentName:"li"},"Column Data Type \u2014 ",(0,r.kt)("inlineCode",{parentName:"p"},"Int8"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"version")," \u2014 Name of the column with the version of the object state."),(0,r.kt)("p",{parentName:"li"},"The column data type should be ",(0,r.kt)("inlineCode",{parentName:"p"},"UInt*"),".")))),(0,r.kt)("h2",{id:"table_engines_versionedcollapsingmergetree"},"Collapsing"),(0,r.kt)("h3",{id:"data"},"Data"),(0,r.kt)("p",null,"Consider a situation where you need to save continually changing data for some object. It is reasonable to have one row for an object and update the row whenever there are changes. However, the update operation is expensive and slow for a DBMS because it requires rewriting the data in the storage. Update is not acceptable if you need to write data quickly, but you can write the changes to an object sequentially as follows."),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"Sign")," column when writing the row. If ",(0,r.kt)("inlineCode",{parentName:"p"},"Sign = 1")," it means that the row is a state of an object (let\u2019s call it the \u201cstate\u201d row). If ",(0,r.kt)("inlineCode",{parentName:"p"},"Sign = -1")," it indicates the cancellation of the state of an object with the same attributes (let\u2019s call it the \u201ccancel\u201d row). Also use the ",(0,r.kt)("inlineCode",{parentName:"p"},"Version")," column, which should identify each state of an object with a separate number."),(0,r.kt)("p",null,"For example, we want to calculate how many pages users visited on some site and how long they were there. At some point in time we write the following row with the state of user activity:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500UserID\u2500\u252c\u2500PageViews\u2500\u252c\u2500Duration\u2500\u252c\u2500Sign\u2500\u252c\u2500Version\u2500\u2510\n\u2502 4324182021466249494 \u2502         5 \u2502      146 \u2502    1 \u2502       1 |\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"At some point later we register the change of user activity and write it with the following two rows."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500UserID\u2500\u252c\u2500PageViews\u2500\u252c\u2500Duration\u2500\u252c\u2500Sign\u2500\u252c\u2500Version\u2500\u2510\n\u2502 4324182021466249494 \u2502         5 \u2502      146 \u2502   -1 \u2502       1 |\n\u2502 4324182021466249494 \u2502         6 \u2502      185 \u2502    1 \u2502       2 |\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"The first row cancels the previous state of the object (user). It should copy all of the fields of the canceled state except ",(0,r.kt)("inlineCode",{parentName:"p"},"Sign"),"."),(0,r.kt)("p",null,"The second row contains the current state."),(0,r.kt)("p",null,"Because we need only the last state of user activity, the rows"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500UserID\u2500\u252c\u2500PageViews\u2500\u252c\u2500Duration\u2500\u252c\u2500Sign\u2500\u252c\u2500Version\u2500\u2510\n\u2502 4324182021466249494 \u2502         5 \u2502      146 \u2502    1 \u2502       1 |\n\u2502 4324182021466249494 \u2502         5 \u2502      146 \u2502   -1 \u2502       1 |\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"can be deleted, collapsing the invalid (old) state of the object. ",(0,r.kt)("inlineCode",{parentName:"p"},"VersionedCollapsingMergeTree")," does this while merging the data parts."),(0,r.kt)("p",null,"To find out why we need two rows for each change, see ",(0,r.kt)("a",{parentName:"p",href:"#table_engines-versionedcollapsingmergetree-algorithm"},"Algorithm"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Notes on Usage")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The program that writes the data should remember the state of an object to be able to cancel it. \u201cCancel\u201d string should contain copies of the primary key fields and the version of the \u201cstate\u201d string and the opposite ",(0,r.kt)("inlineCode",{parentName:"li"},"Sign"),". It increases the initial size of storage but allows to write the data quickly."),(0,r.kt)("li",{parentName:"ol"},"Long growing arrays in columns reduce the efficiency of the engine due to the load for writing. The more straightforward the data, the better the efficiency."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"SELECT")," results depend strongly on the consistency of the history of object changes. Be accurate when preparing data for inserting. You can get unpredictable results with inconsistent data, such as negative values for non-negative metrics like session depth.")),(0,r.kt)("h3",{id:"table_engines-versionedcollapsingmergetree-algorithm"},"Algorithm"),(0,r.kt)("p",null,"When ClickHouse merges data parts, it deletes each pair of rows that have the same primary key and version and different ",(0,r.kt)("inlineCode",{parentName:"p"},"Sign"),". The order of rows does not matter."),(0,r.kt)("p",null,"When ClickHouse inserts data, it orders rows by the primary key. If the ",(0,r.kt)("inlineCode",{parentName:"p"},"Version")," column is not in the primary key, ClickHouse adds it to the primary key implicitly as the last field and uses it for ordering."),(0,r.kt)("h2",{id:"selecting-data"},"Selecting Data"),(0,r.kt)("p",null,"ClickHouse does not guarantee that all of the rows with the same primary key will be in the same resulting data part or even on the same physical server. This is true both for writing the data and for subsequent merging of the data parts. In addition, ClickHouse processes ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT")," queries with multiple threads, and it cannot predict the order of rows in the result. This means that aggregation is required if there is a need to get completely \u201ccollapsed\u201d data from a ",(0,r.kt)("inlineCode",{parentName:"p"},"VersionedCollapsingMergeTree")," table."),(0,r.kt)("p",null,"To finalize collapsing, write a query with a ",(0,r.kt)("inlineCode",{parentName:"p"},"GROUP BY")," clause and aggregate functions that account for the sign. For example, to calculate quantity, use ",(0,r.kt)("inlineCode",{parentName:"p"},"sum(Sign)")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"count()"),". To calculate the sum of something, use ",(0,r.kt)("inlineCode",{parentName:"p"},"sum(Sign * x)")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"sum(x)"),", and add ",(0,r.kt)("inlineCode",{parentName:"p"},"HAVING sum(Sign) > 0"),"."),(0,r.kt)("p",null,"The aggregates ",(0,r.kt)("inlineCode",{parentName:"p"},"count"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"sum")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"avg")," can be calculated this way. The aggregate ",(0,r.kt)("inlineCode",{parentName:"p"},"uniq")," can be calculated if an object has at least one non-collapsed state. The aggregates ",(0,r.kt)("inlineCode",{parentName:"p"},"min")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"max")," can\u2019t be calculated because ",(0,r.kt)("inlineCode",{parentName:"p"},"VersionedCollapsingMergeTree")," does not save the history of values of collapsed states."),(0,r.kt)("p",null,"If you need to extract the data with \u201ccollapsing\u201d but without aggregation (for example, to check whether rows are present whose newest values match certain conditions), you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"FINAL")," modifier for the ",(0,r.kt)("inlineCode",{parentName:"p"},"FROM")," clause. This approach is inefficient and should not be used with large tables."),(0,r.kt)("h2",{id:"example-of-use"},"Example of Use"),(0,r.kt)("p",null,"Example data:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500UserID\u2500\u252c\u2500PageViews\u2500\u252c\u2500Duration\u2500\u252c\u2500Sign\u2500\u252c\u2500Version\u2500\u2510\n\u2502 4324182021466249494 \u2502         5 \u2502      146 \u2502    1 \u2502       1 |\n\u2502 4324182021466249494 \u2502         5 \u2502      146 \u2502   -1 \u2502       1 |\n\u2502 4324182021466249494 \u2502         6 \u2502      185 \u2502    1 \u2502       2 |\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"Creating the table:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE UAct\n(\n    UserID UInt64,\n    PageViews UInt8,\n    Duration UInt8,\n    Sign Int8,\n    Version UInt8\n)\nENGINE = VersionedCollapsingMergeTree(Sign, Version)\nORDER BY UserID\n")),(0,r.kt)("p",null,"Inserting the data:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO UAct VALUES (4324182021466249494, 5, 146, 1, 1)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO UAct VALUES (4324182021466249494, 5, 146, -1, 1),(4324182021466249494, 6, 185, 1, 2)\n")),(0,r.kt)("p",null,"We use two ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT")," queries to create two different data parts. If we insert the data with a single query, ClickHouse creates one data part and will never perform any merge."),(0,r.kt)("p",null,"Getting the data:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM UAct\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500UserID\u2500\u252c\u2500PageViews\u2500\u252c\u2500Duration\u2500\u252c\u2500Sign\u2500\u252c\u2500Version\u2500\u2510\n\u2502 4324182021466249494 \u2502         5 \u2502      146 \u2502    1 \u2502       1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500UserID\u2500\u252c\u2500PageViews\u2500\u252c\u2500Duration\u2500\u252c\u2500Sign\u2500\u252c\u2500Version\u2500\u2510\n\u2502 4324182021466249494 \u2502         5 \u2502      146 \u2502   -1 \u2502       1 \u2502\n\u2502 4324182021466249494 \u2502         6 \u2502      185 \u2502    1 \u2502       2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"What do we see here and where are the collapsed parts?\nWe created two data parts using two ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT")," queries. The ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT")," query was performed in two threads, and the result is a random order of rows.\nCollapsing did not occur because the data parts have not been merged yet. ClickHouse merges data parts at an unknown point in time which we cannot predict."),(0,r.kt)("p",null,"This is why we need aggregation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    UserID,\n    sum(PageViews * Sign) AS PageViews,\n    sum(Duration * Sign) AS Duration,\n    Version\nFROM UAct\nGROUP BY UserID, Version\nHAVING sum(Sign) > 0\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500UserID\u2500\u252c\u2500PageViews\u2500\u252c\u2500Duration\u2500\u252c\u2500Version\u2500\u2510\n\u2502 4324182021466249494 \u2502         6 \u2502      185 \u2502       2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"If we do not need aggregation and want to force collapsing, we can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"FINAL")," modifier for the ",(0,r.kt)("inlineCode",{parentName:"p"},"FROM")," clause."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM UAct FINAL\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500UserID\u2500\u252c\u2500PageViews\u2500\u252c\u2500Duration\u2500\u252c\u2500Sign\u2500\u252c\u2500Version\u2500\u2510\n\u2502 4324182021466249494 \u2502         6 \u2502      185 \u2502    1 \u2502       2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"This is a very inefficient way to select data. Don\u2019t use it for large tables."))}d.isMDXComponent=!0}}]);