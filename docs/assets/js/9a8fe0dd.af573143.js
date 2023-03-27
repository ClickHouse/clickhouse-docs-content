"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[13097,47807],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,k=m["".concat(s,".").concat(u)]||m[u]||d[u]||i;return n?a.createElement(k,l(l({ref:t},c),{},{components:n})):a.createElement(k,l({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},52552:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={slug:"/en/sql-reference/statements/optimize",sidebar_position:47,sidebar_label:"OPTIMIZE",title:"OPTIMIZE Statement"},l=void 0,o={unversionedId:"en/sql-reference/statements/optimize",id:"en/sql-reference/statements/optimize",title:"OPTIMIZE Statement",description:"This query tries to initialize an unscheduled merge of data parts for tables.",source:"@site/docs/en/sql-reference/statements/optimize.md",sourceDirName:"en/sql-reference/statements",slug:"/en/sql-reference/statements/optimize",permalink:"/docs/en/sql-reference/statements/optimize",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/statements/optimize.md",tags:[],version:"current",sidebarPosition:47,frontMatter:{slug:"/en/sql-reference/statements/optimize",sidebar_position:47,sidebar_label:"OPTIMIZE",title:"OPTIMIZE Statement"},sidebar:"sqlreference",previous:{title:"KILL",permalink:"/docs/en/sql-reference/statements/kill"},next:{title:"RENAME",permalink:"/docs/en/sql-reference/statements/rename"}},s={},p=[{value:"BY expression",id:"by-expression",level:2}],c={toc:p},m="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This query tries to initialize an unscheduled merge of data parts for tables."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"OPTIMIZE")," can\u2019t fix the ",(0,r.kt)("inlineCode",{parentName:"p"},"Too many parts")," error.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Syntax")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"OPTIMIZE TABLE [db.]name [ON CLUSTER cluster] [PARTITION partition | PARTITION ID 'partition_id'] [FINAL] [DEDUPLICATE [BY expression]]\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"OPTIMIZE")," query is supported for ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/mergetree-family/mergetree"},"MergeTree")," family, the ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/special/materializedview"},"MaterializedView")," and the ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/special/buffer"},"Buffer")," engines. Other table engines aren\u2019t supported."),(0,r.kt)("p",null,"When ",(0,r.kt)("inlineCode",{parentName:"p"},"OPTIMIZE")," is used with the ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/mergetree-family/replication"},"ReplicatedMergeTree")," family of table engines, ClickHouse creates a task for merging and waits for execution on all replicas (if the ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/operations/settings/settings#alter-sync"},"alter_sync")," setting is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"2"),") or on current replica (if the ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/operations/settings/settings#alter-sync"},"alter_sync")," setting is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),")."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If ",(0,r.kt)("inlineCode",{parentName:"li"},"OPTIMIZE")," does not perform a merge for any reason, it does not notify the client. To enable notifications, use the ",(0,r.kt)("a",{parentName:"li",href:"/docs/en/operations/settings/settings#setting-optimize_throw_if_noop"},"optimize_throw_if_noop")," setting."),(0,r.kt)("li",{parentName:"ul"},"If you specify a ",(0,r.kt)("inlineCode",{parentName:"li"},"PARTITION"),", only the specified partition is optimized. ",(0,r.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/statements/alter/partition#how-to-set-partition-expression"},"How to set partition expression"),"."),(0,r.kt)("li",{parentName:"ul"},"If you specify ",(0,r.kt)("inlineCode",{parentName:"li"},"FINAL"),", optimization is performed even when all the data is already in one part. You can control this behaviour with ",(0,r.kt)("a",{parentName:"li",href:"/docs/en/operations/settings/settings#optimize-skip-merged-partitions"},"optimize_skip_merged_partitions"),". Also, the merge is forced even if concurrent merges are performed."),(0,r.kt)("li",{parentName:"ul"},"If you specify ",(0,r.kt)("inlineCode",{parentName:"li"},"DEDUPLICATE"),", then completely identical rows (unless by-clause is specified) will be deduplicated (all columns are compared), it makes sense only for the MergeTree engine.")),(0,r.kt)("p",null,"You can specify how long (in seconds) to wait for inactive replicas to execute ",(0,r.kt)("inlineCode",{parentName:"p"},"OPTIMIZE")," queries by the ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/operations/settings/settings#replication-wait-for-inactive-replica-timeout"},"replication_wait_for_inactive_replica_timeout")," setting."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If the ",(0,r.kt)("inlineCode",{parentName:"p"},"alter_sync")," is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"2")," and some replicas are not active for more than the time, specified by the ",(0,r.kt)("inlineCode",{parentName:"p"},"replication_wait_for_inactive_replica_timeout")," setting, then an exception ",(0,r.kt)("inlineCode",{parentName:"p"},"UNFINISHED")," is thrown.")),(0,r.kt)("h2",{id:"by-expression"},"BY expression"),(0,r.kt)("p",null,"If you want to perform deduplication on custom set of columns rather than on all, you can specify list of columns explicitly or use any combination of ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/select/#asterisk"},(0,r.kt)("inlineCode",{parentName:"a"},"*")),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/select/#columns-expression"},(0,r.kt)("inlineCode",{parentName:"a"},"COLUMNS"))," or ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/select/#except-modifier"},(0,r.kt)("inlineCode",{parentName:"a"},"EXCEPT"))," expressions. The explictly written or implicitly expanded list of columns must include all columns specified in row ordering expression (both primary and sorting keys) and partitioning expression (partitioning key)."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Notice that ",(0,r.kt)("inlineCode",{parentName:"p"},"*")," behaves just like in ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/create/table#materialized"},"MATERIALIZED")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/create/table#alias"},"ALIAS")," columns are not used for expansion."),(0,r.kt)("p",{parentName:"admonition"},"Also, it is an error to specify empty list of columns, or write an expression that results in an empty list of columns, or deduplicate by an ",(0,r.kt)("inlineCode",{parentName:"p"},"ALIAS")," column.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Syntax")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"OPTIMIZE TABLE table DEDUPLICATE; -- all columns\nOPTIMIZE TABLE table DEDUPLICATE BY *; -- excludes MATERIALIZED and ALIAS columns\nOPTIMIZE TABLE table DEDUPLICATE BY colX,colY,colZ;\nOPTIMIZE TABLE table DEDUPLICATE BY * EXCEPT colX;\nOPTIMIZE TABLE table DEDUPLICATE BY * EXCEPT (colX, colY);\nOPTIMIZE TABLE table DEDUPLICATE BY COLUMNS('column-matched-by-regex');\nOPTIMIZE TABLE table DEDUPLICATE BY COLUMNS('column-matched-by-regex') EXCEPT colX;\nOPTIMIZE TABLE table DEDUPLICATE BY COLUMNS('column-matched-by-regex') EXCEPT (colX, colY);\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples")),(0,r.kt)("p",null,"Consider the table:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE example (\n    primary_key Int32,\n    secondary_key Int32,\n    value UInt32,\n    partition_key UInt32,\n    materialized_value UInt32 MATERIALIZED 12345,\n    aliased_value UInt32 ALIAS 2,\n    PRIMARY KEY primary_key\n) ENGINE=MergeTree\nPARTITION BY partition_key\nORDER BY (primary_key, secondary_key);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO example (primary_key, secondary_key, value, partition_key)\nVALUES (0, 0, 0, 0), (0, 0, 0, 0), (1, 1, 2, 2), (1, 1, 2, 3), (1, 1, 3, 3);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM example;\n")),(0,r.kt)("p",null,"Result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\n\u250c\u2500primary_key\u2500\u252c\u2500secondary_key\u2500\u252c\u2500value\u2500\u252c\u2500partition_key\u2500\u2510\n\u2502           0 \u2502             0 \u2502     0 \u2502             0 \u2502\n\u2502           0 \u2502             0 \u2502     0 \u2502             0 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500primary_key\u2500\u252c\u2500secondary_key\u2500\u252c\u2500value\u2500\u252c\u2500partition_key\u2500\u2510\n\u2502           1 \u2502             1 \u2502     2 \u2502             2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500primary_key\u2500\u252c\u2500secondary_key\u2500\u252c\u2500value\u2500\u252c\u2500partition_key\u2500\u2510\n\u2502           1 \u2502             1 \u2502     2 \u2502             3 \u2502\n\u2502           1 \u2502             1 \u2502     3 \u2502             3 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"When columns for deduplication are not specified, all of them are taken into account. Row is removed only if all values in all columns are equal to corresponding values in previous row:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"OPTIMIZE TABLE example FINAL DEDUPLICATE;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM example;\n")),(0,r.kt)("p",null,"Result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u250c\u2500primary_key\u2500\u252c\u2500secondary_key\u2500\u252c\u2500value\u2500\u252c\u2500partition_key\u2500\u2510\n\u2502           1 \u2502             1 \u2502     2 \u2502             2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500primary_key\u2500\u252c\u2500secondary_key\u2500\u252c\u2500value\u2500\u252c\u2500partition_key\u2500\u2510\n\u2502           0 \u2502             0 \u2502     0 \u2502             0 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500primary_key\u2500\u252c\u2500secondary_key\u2500\u252c\u2500value\u2500\u252c\u2500partition_key\u2500\u2510\n\u2502           1 \u2502             1 \u2502     2 \u2502             3 \u2502\n\u2502           1 \u2502             1 \u2502     3 \u2502             3 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"When columns are specified implicitly, the table is deduplicated by all columns that are not ",(0,r.kt)("inlineCode",{parentName:"p"},"ALIAS")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"MATERIALIZED"),". Considering the table above, these are ",(0,r.kt)("inlineCode",{parentName:"p"},"primary_key"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"secondary_key"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"value"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"partition_key")," columns:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"OPTIMIZE TABLE example FINAL DEDUPLICATE BY *;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM example;\n")),(0,r.kt)("p",null,"Result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u250c\u2500primary_key\u2500\u252c\u2500secondary_key\u2500\u252c\u2500value\u2500\u252c\u2500partition_key\u2500\u2510\n\u2502           1 \u2502             1 \u2502     2 \u2502             2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500primary_key\u2500\u252c\u2500secondary_key\u2500\u252c\u2500value\u2500\u252c\u2500partition_key\u2500\u2510\n\u2502           0 \u2502             0 \u2502     0 \u2502             0 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500primary_key\u2500\u252c\u2500secondary_key\u2500\u252c\u2500value\u2500\u252c\u2500partition_key\u2500\u2510\n\u2502           1 \u2502             1 \u2502     2 \u2502             3 \u2502\n\u2502           1 \u2502             1 \u2502     3 \u2502             3 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"Deduplicate by all columns that are not ",(0,r.kt)("inlineCode",{parentName:"p"},"ALIAS")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"MATERIALIZED")," and explicitly not ",(0,r.kt)("inlineCode",{parentName:"p"},"value"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"primary_key"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"secondary_key"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"partition_key")," columns."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"OPTIMIZE TABLE example FINAL DEDUPLICATE BY * EXCEPT value;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM example;\n")),(0,r.kt)("p",null,"Result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u250c\u2500primary_key\u2500\u252c\u2500secondary_key\u2500\u252c\u2500value\u2500\u252c\u2500partition_key\u2500\u2510\n\u2502           1 \u2502             1 \u2502     2 \u2502             2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500primary_key\u2500\u252c\u2500secondary_key\u2500\u252c\u2500value\u2500\u252c\u2500partition_key\u2500\u2510\n\u2502           0 \u2502             0 \u2502     0 \u2502             0 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500primary_key\u2500\u252c\u2500secondary_key\u2500\u252c\u2500value\u2500\u252c\u2500partition_key\u2500\u2510\n\u2502           1 \u2502             1 \u2502     2 \u2502             3 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"Deduplicate explicitly by ",(0,r.kt)("inlineCode",{parentName:"p"},"primary_key"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"secondary_key"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"partition_key")," columns:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"OPTIMIZE TABLE example FINAL DEDUPLICATE BY primary_key, secondary_key, partition_key;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM example;\n")),(0,r.kt)("p",null,"Result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u250c\u2500primary_key\u2500\u252c\u2500secondary_key\u2500\u252c\u2500value\u2500\u252c\u2500partition_key\u2500\u2510\n\u2502           1 \u2502             1 \u2502     2 \u2502             2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500primary_key\u2500\u252c\u2500secondary_key\u2500\u252c\u2500value\u2500\u252c\u2500partition_key\u2500\u2510\n\u2502           0 \u2502             0 \u2502     0 \u2502             0 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500primary_key\u2500\u252c\u2500secondary_key\u2500\u252c\u2500value\u2500\u252c\u2500partition_key\u2500\u2510\n\u2502           1 \u2502             1 \u2502     2 \u2502             3 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"Deduplicate by any column matching a regex: ",(0,r.kt)("inlineCode",{parentName:"p"},"primary_key"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"secondary_key"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"partition_key")," columns:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"OPTIMIZE TABLE example FINAL DEDUPLICATE BY COLUMNS('.*_key');\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM example;\n")),(0,r.kt)("p",null,"Result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u250c\u2500primary_key\u2500\u252c\u2500secondary_key\u2500\u252c\u2500value\u2500\u252c\u2500partition_key\u2500\u2510\n\u2502           0 \u2502             0 \u2502     0 \u2502             0 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500primary_key\u2500\u252c\u2500secondary_key\u2500\u252c\u2500value\u2500\u252c\u2500partition_key\u2500\u2510\n\u2502           1 \u2502             1 \u2502     2 \u2502             2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500primary_key\u2500\u252c\u2500secondary_key\u2500\u252c\u2500value\u2500\u252c\u2500partition_key\u2500\u2510\n\u2502           1 \u2502             1 \u2502     2 \u2502             3 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}d.isMDXComponent=!0},82655:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905)),i=n(52552);const l={slug:"/zh/sql-reference/statements/optimize",sidebar_position:47,sidebar_label:"OPTIMIZE",title:"OPTIMIZE Statement"},o=void 0,s={unversionedId:"zh/sql-reference/statements/optimize",id:"zh/sql-reference/statements/optimize",title:"OPTIMIZE Statement",description:"",source:"@site/docs/zh/sql-reference/statements/optimize.mdx",sourceDirName:"zh/sql-reference/statements",slug:"/zh/sql-reference/statements/optimize",permalink:"/docs/zh/sql-reference/statements/optimize",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/statements/optimize.mdx",tags:[],version:"current",sidebarPosition:47,frontMatter:{slug:"/zh/sql-reference/statements/optimize",sidebar_position:47,sidebar_label:"OPTIMIZE",title:"OPTIMIZE Statement"},sidebar:"chinese",previous:{title:"KILL",permalink:"/docs/zh/sql-reference/statements/kill"},next:{title:"RENAME",permalink:"/docs/zh/sql-reference/statements/rename"}},p={},c=[],m={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.default,{mdxType:"Content"}))}u.isMDXComponent=!0}}]);