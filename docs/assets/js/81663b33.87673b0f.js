"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[18175],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(r),h=a,m=c["".concat(i,".").concat(h)]||c[h]||d[h]||l;return r?n.createElement(m,s(s({ref:t},p),{},{components:r})):n.createElement(m,s({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,s=new Array(l);s[0]=h;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[c]="string"==typeof e?e:a,s[1]=o;for(var u=2;u<l;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},64318:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const l={slug:"/en/sql-reference/operators/in"},s="IN Operators",o={unversionedId:"en/sql-reference/operators/in",id:"en/sql-reference/operators/in",title:"IN Operators",description:"The IN, NOT IN, GLOBAL IN, and GLOBAL NOT IN operators are covered separately, since their functionality is quite rich.",source:"@site/docs/en/sql-reference/operators/in.md",sourceDirName:"en/sql-reference/operators",slug:"/en/sql-reference/operators/in",permalink:"/docs/en/sql-reference/operators/in",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/operators/in.md",tags:[],version:"current",frontMatter:{slug:"/en/sql-reference/operators/in"},sidebar:"english",previous:{title:"EXISTS",permalink:"/docs/en/sql-reference/operators/exists"},next:{title:"ANSI Compatibility",permalink:"/docs/en/sql-reference/ansi"}},i={},u=[{value:"NULL Processing",id:"null-processing",level:2},{value:"Distributed Subqueries",id:"distributed-subqueries",level:2},{value:"Distributed Subqueries and max_rows_in_set",id:"distributed-subqueries-and-max_rows_in_set",level:3},{value:"Distributed Subqueries and max_parallel_replicas",id:"distributed-subqueries-and-max_parallel_replicas",level:3}],p={toc:u},c="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"in-operators"},"IN Operators"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"IN"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"NOT IN"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"GLOBAL IN"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"GLOBAL NOT IN")," operators are covered separately, since their functionality is quite rich."),(0,a.kt)("p",null,"The left side of the operator is either a single column or a tuple."),(0,a.kt)("p",null,"Examples:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT UserID IN (123, 456) FROM ...\nSELECT (CounterID, UserID) IN ((34, 123), (101500, 456)) FROM ...\n")),(0,a.kt)("p",null,"If the left side is a single column that is in the index, and the right side is a set of constants, the system uses the index for processing the query."),(0,a.kt)("p",null,"Don\u2019t list too many values explicitly (i.e.\xa0millions). If a data set is large, put it in a temporary table (for example, see the section ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/special/external-data"},"External data for query processing"),"), then use a subquery."),(0,a.kt)("p",null,"The right side of the operator can be a set of constant expressions, a set of tuples with constant expressions (shown in the examples above), or the name of a database table or SELECT subquery in brackets."),(0,a.kt)("p",null,"ClickHouse allows types to differ in the left and the right parts of ",(0,a.kt)("inlineCode",{parentName:"p"},"IN")," subquery. In this case it converts the left side value to the type of the right side, as if the ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/functions/type-conversion-functions#type_conversion_function-accurate-cast_or_null"},"accurateCastOrNull")," function is applied. That means, that the data type becomes ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/nullable"},"Nullable"),", and if the conversion cannot be performed, it returns ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/syntax#null-literal"},"NULL"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("p",null,"Query:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT '1' IN (SELECT 1);\n")),(0,a.kt)("p",null,"Result:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500in('1', _subquery49)\u2500\u2510\n\u2502                    1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,"If the right side of the operator is the name of a table (for example, ",(0,a.kt)("inlineCode",{parentName:"p"},"UserID IN users"),"), this is equivalent to the subquery ",(0,a.kt)("inlineCode",{parentName:"p"},"UserID IN (SELECT * FROM users)"),". Use this when working with external data that is sent along with the query. For example, the query can be sent together with a set of user IDs loaded to the \u2018users\u2019 temporary table, which should be filtered."),(0,a.kt)("p",null,"If the right side of the operator is a table name that has the Set engine (a prepared data set that is always in RAM), the data set will not be created over again for each query."),(0,a.kt)("p",null,"The subquery may specify more than one column for filtering tuples.\nExample:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT (CounterID, UserID) IN (SELECT CounterID, UserID FROM ...) FROM ...\n")),(0,a.kt)("p",null,"The columns to the left and right of the IN operator should have the same type."),(0,a.kt)("p",null,"The IN operator and subquery may occur in any part of the query, including in aggregate functions and lambda functions.\nExample:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    EventDate,\n    avg(UserID IN\n    (\n        SELECT UserID\n        FROM test.hits\n        WHERE EventDate = toDate('2014-03-17')\n    )) AS ratio\nFROM test.hits\nGROUP BY EventDate\nORDER BY EventDate ASC\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500EventDate\u2500\u252c\u2500\u2500\u2500\u2500ratio\u2500\u2510\n\u2502 2014-03-17 \u2502        1 \u2502\n\u2502 2014-03-18 \u2502 0.807696 \u2502\n\u2502 2014-03-19 \u2502 0.755406 \u2502\n\u2502 2014-03-20 \u2502 0.723218 \u2502\n\u2502 2014-03-21 \u2502 0.697021 \u2502\n\u2502 2014-03-22 \u2502 0.647851 \u2502\n\u2502 2014-03-23 \u2502 0.648416 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,"For each day after March 17th, count the percentage of pageviews made by users who visited the site on March 17th.\nA subquery in the IN clause is always run just one time on a single server. There are no dependent subqueries."),(0,a.kt)("h2",{id:"null-processing"},"NULL Processing"),(0,a.kt)("p",null,"During request processing, the ",(0,a.kt)("inlineCode",{parentName:"p"},"IN")," operator assumes that the result of an operation with ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/syntax#null-literal"},"NULL")," always equals ",(0,a.kt)("inlineCode",{parentName:"p"},"0"),", regardless of whether ",(0,a.kt)("inlineCode",{parentName:"p"},"NULL")," is on the right or left side of the operator. ",(0,a.kt)("inlineCode",{parentName:"p"},"NULL")," values are not included in any dataset, do not correspond to each other and cannot be compared if ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/operations/settings/settings#transform_null_in"},"transform_null_in = 0"),"."),(0,a.kt)("p",null,"Here is an example with the ",(0,a.kt)("inlineCode",{parentName:"p"},"t_null")," table:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500x\u2500\u252c\u2500\u2500\u2500\u2500y\u2500\u2510\n\u2502 1 \u2502 \u1d3a\u1d41\u1d38\u1d38 \u2502\n\u2502 2 \u2502    3 \u2502\n\u2514\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,"Running the query ",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT x FROM t_null WHERE y IN (NULL,3)")," gives you the following result:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500x\u2500\u2510\n\u2502 2 \u2502\n\u2514\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,"You can see that the row in which ",(0,a.kt)("inlineCode",{parentName:"p"},"y = NULL")," is thrown out of the query results. This is because ClickHouse can\u2019t decide whether ",(0,a.kt)("inlineCode",{parentName:"p"},"NULL")," is included in the ",(0,a.kt)("inlineCode",{parentName:"p"},"(NULL,3)")," set, returns ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," as the result of the operation, and ",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT")," excludes this row from the final output."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT y IN (NULL, 3)\nFROM t_null\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500in(y, tuple(NULL, 3))\u2500\u2510\n\u2502                     0 \u2502\n\u2502                     1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("h2",{id:"distributed-subqueries"},"Distributed Subqueries"),(0,a.kt)("p",null,"There are two options for IN-s with subqueries (similar to JOINs): normal ",(0,a.kt)("inlineCode",{parentName:"p"},"IN")," / ",(0,a.kt)("inlineCode",{parentName:"p"},"JOIN")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"GLOBAL IN")," / ",(0,a.kt)("inlineCode",{parentName:"p"},"GLOBAL JOIN"),". They differ in how they are run for distributed query processing."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Remember that the algorithms described below may work differently depending on the ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/operations/settings/settings"},"settings")," ",(0,a.kt)("inlineCode",{parentName:"p"},"distributed_product_mode")," setting.")),(0,a.kt)("p",null,"When using the regular IN, the query is sent to remote servers, and each of them runs the subqueries in the ",(0,a.kt)("inlineCode",{parentName:"p"},"IN")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"JOIN")," clause."),(0,a.kt)("p",null,"When using ",(0,a.kt)("inlineCode",{parentName:"p"},"GLOBAL IN")," / ",(0,a.kt)("inlineCode",{parentName:"p"},"GLOBAL JOINs"),", first all the subqueries are run for ",(0,a.kt)("inlineCode",{parentName:"p"},"GLOBAL IN")," / ",(0,a.kt)("inlineCode",{parentName:"p"},"GLOBAL JOINs"),", and the results are collected in temporary tables. Then the temporary tables are sent to each remote server, where the queries are run using this temporary data."),(0,a.kt)("p",null,"For a non-distributed query, use the regular ",(0,a.kt)("inlineCode",{parentName:"p"},"IN")," / ",(0,a.kt)("inlineCode",{parentName:"p"},"JOIN"),"."),(0,a.kt)("p",null,"Be careful when using subqueries in the ",(0,a.kt)("inlineCode",{parentName:"p"},"IN")," / ",(0,a.kt)("inlineCode",{parentName:"p"},"JOIN")," clauses for distributed query processing."),(0,a.kt)("p",null,"Let\u2019s look at some examples. Assume that each server in the cluster has a normal ",(0,a.kt)("strong",{parentName:"p"},"local_table"),". Each server also has a ",(0,a.kt)("strong",{parentName:"p"},"distributed_table")," table with the ",(0,a.kt)("strong",{parentName:"p"},"Distributed")," type, which looks at all the servers in the cluster."),(0,a.kt)("p",null,"For a query to the ",(0,a.kt)("strong",{parentName:"p"},"distributed_table"),", the query will be sent to all the remote servers and run on them using the ",(0,a.kt)("strong",{parentName:"p"},"local_table"),"."),(0,a.kt)("p",null,"For example, the query"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT uniq(UserID) FROM distributed_table\n")),(0,a.kt)("p",null,"will be sent to all remote servers as"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT uniq(UserID) FROM local_table\n")),(0,a.kt)("p",null,"and run on each of them in parallel, until it reaches the stage where intermediate results can be combined. Then the intermediate results will be returned to the requestor server and merged on it, and the final result will be sent to the client."),(0,a.kt)("p",null,"Now let\u2019s examine a query with IN:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT uniq(UserID) FROM distributed_table WHERE CounterID = 101500 AND UserID IN (SELECT UserID FROM local_table WHERE CounterID = 34)\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Calculation of the intersection of audiences of two sites.")),(0,a.kt)("p",null,"This query will be sent to all remote servers as"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT uniq(UserID) FROM local_table WHERE CounterID = 101500 AND UserID IN (SELECT UserID FROM local_table WHERE CounterID = 34)\n")),(0,a.kt)("p",null,"In other words, the data set in the IN clause will be collected on each server independently, only across the data that is stored locally on each of the servers."),(0,a.kt)("p",null,"This will work correctly and optimally if you are prepared for this case and have spread data across the cluster servers such that the data for a single UserID resides entirely on a single server. In this case, all the necessary data will be available locally on each server. Otherwise, the result will be inaccurate. We refer to this variation of the query as \u201clocal IN\u201d."),(0,a.kt)("p",null,"To correct how the query works when data is spread randomly across the cluster servers, you could specify ",(0,a.kt)("strong",{parentName:"p"},"distributed_table")," inside a subquery. The query would look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT uniq(UserID) FROM distributed_table WHERE CounterID = 101500 AND UserID IN (SELECT UserID FROM distributed_table WHERE CounterID = 34)\n")),(0,a.kt)("p",null,"This query will be sent to all remote servers as"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT uniq(UserID) FROM local_table WHERE CounterID = 101500 AND UserID IN (SELECT UserID FROM distributed_table WHERE CounterID = 34)\n")),(0,a.kt)("p",null,"The subquery will begin running on each remote server. Since the subquery uses a distributed table, the subquery that is on each remote server will be resent to every remote server as"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT UserID FROM local_table WHERE CounterID = 34\n")),(0,a.kt)("p",null,"For example, if you have a cluster of 100 servers, executing the entire query will require 10,000 elementary requests, which is generally considered unacceptable."),(0,a.kt)("p",null,"In such cases, you should always use GLOBAL IN instead of IN. Let\u2019s look at how it works for the query"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT uniq(UserID) FROM distributed_table WHERE CounterID = 101500 AND UserID GLOBAL IN (SELECT UserID FROM distributed_table WHERE CounterID = 34)\n")),(0,a.kt)("p",null,"The requestor server will run the subquery"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT UserID FROM distributed_table WHERE CounterID = 34\n")),(0,a.kt)("p",null,"and the result will be put in a temporary table in RAM. Then the request will be sent to each remote server as"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT uniq(UserID) FROM local_table WHERE CounterID = 101500 AND UserID GLOBAL IN _data1\n")),(0,a.kt)("p",null,"and the temporary table ",(0,a.kt)("inlineCode",{parentName:"p"},"_data1")," will be sent to every remote server with the query (the name of the temporary table is implementation-defined)."),(0,a.kt)("p",null,"This is more optimal than using the normal IN. However, keep the following points in mind:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"When creating a temporary table, data is not made unique. To reduce the volume of data transmitted over the network, specify DISTINCT in the subquery. (You do not need to do this for a normal IN.)"),(0,a.kt)("li",{parentName:"ol"},"The temporary table will be sent to all the remote servers. Transmission does not account for network topology. For example, if 10 remote servers reside in a datacenter that is very remote in relation to the requestor server, the data will be sent 10 times over the channel to the remote datacenter. Try to avoid large data sets when using GLOBAL IN."),(0,a.kt)("li",{parentName:"ol"},"When transmitting data to remote servers, restrictions on network bandwidth are not configurable. You might overload the network."),(0,a.kt)("li",{parentName:"ol"},"Try to distribute data across servers so that you do not need to use GLOBAL IN on a regular basis."),(0,a.kt)("li",{parentName:"ol"},"If you need to use GLOBAL IN often, plan the location of the ClickHouse cluster so that a single group of replicas resides in no more than one data center with a fast network between them, so that a query can be processed entirely within a single data center.")),(0,a.kt)("p",null,"It also makes sense to specify a local table in the ",(0,a.kt)("inlineCode",{parentName:"p"},"GLOBAL IN")," clause, in case this local table is only available on the requestor server and you want to use data from it on remote servers."),(0,a.kt)("h3",{id:"distributed-subqueries-and-max_rows_in_set"},"Distributed Subqueries and max_rows_in_set"),(0,a.kt)("p",null,"You can use ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/operations/settings/query-complexity#max-rows-in-set"},(0,a.kt)("inlineCode",{parentName:"a"},"max_rows_in_set"))," and ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/operations/settings/query-complexity#max-rows-in-set"},(0,a.kt)("inlineCode",{parentName:"a"},"max_bytes_in_set"))," to control how much data is tranferred during distributed queries. "),(0,a.kt)("p",null,"This is specially important if the  ",(0,a.kt)("inlineCode",{parentName:"p"},"global in")," query returns a large amount of data. Consider the following sql - "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"select * from table1 where col1 global in (select col1 from table2 where <some_predicate>)\n")),(0,a.kt)("p",null,"If ",(0,a.kt)("inlineCode",{parentName:"p"},"some_predicate")," is not selective enough, it will return large amount of data and cause performance issues. In such cases, it is wise to limit the data transfer over the network. Also, note that ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/operations/settings/query-complexity#set_overflow_mode"},(0,a.kt)("inlineCode",{parentName:"a"},"set_overflow_mode"))," is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"throw")," (by default) meaning that an exception is raised when these thresholds are met."),(0,a.kt)("h3",{id:"distributed-subqueries-and-max_parallel_replicas"},"Distributed Subqueries and max_parallel_replicas"),(0,a.kt)("p",null,"When max_parallel_replicas is greater than 1, distributed queries are further transformed. For example, the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT CounterID, count() FROM distributed_table_1 WHERE UserID IN (SELECT UserID FROM local_table_2 WHERE CounterID < 100)\nSETTINGS max_parallel_replicas=3\n")),(0,a.kt)("p",null,"is transformed on each server into"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT CounterID, count() FROM local_table_1 WHERE UserID IN (SELECT UserID FROM local_table_2 WHERE CounterID < 100)\nSETTINGS parallel_replicas_count=3, parallel_replicas_offset=M\n")),(0,a.kt)("p",null,"where M is between 1 and 3 depending on which replica the local query is executing on. These settings affect every MergeTree-family table in the query and have the same effect as applying ",(0,a.kt)("inlineCode",{parentName:"p"},"SAMPLE 1/3 OFFSET (M-1)/3")," on each table."),(0,a.kt)("p",null,"Therefore adding the max_parallel_replicas setting will only produce correct results if both tables have the same replication scheme and are sampled by UserID or a subkey of it. In particular, if local_table_2 does not have a sampling key, incorrect results will be produced. The same rule applies to JOIN."),(0,a.kt)("p",null,"One workaround if local_table_2 does not meet the requirements, is to use ",(0,a.kt)("inlineCode",{parentName:"p"},"GLOBAL IN")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"GLOBAL JOIN"),"."))}d.isMDXComponent=!0}}]);