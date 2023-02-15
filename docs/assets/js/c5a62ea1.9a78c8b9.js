"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[5760],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=d(a),m=r,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||s;return a?n.createElement(f,i(i({ref:t},c),{},{components:a})):n.createElement(f,i({ref:t},c))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var d=2;d<s;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3772:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const s={slug:"/en/about-us/distinctive-features",sidebar_label:"Distinctive Features",sidebar_position:50,description:"Understand what makes ClickHouse stand apart from other database management systems"},i="Distinctive Features of ClickHouse",o={unversionedId:"en/about-us/distinctive-features",id:"en/about-us/distinctive-features",title:"Distinctive Features of ClickHouse",description:"Understand what makes ClickHouse stand apart from other database management systems",source:"@site/docs/en/about-us/distinctive-features.md",sourceDirName:"en/about-us",slug:"/en/about-us/distinctive-features",permalink:"/docs/en/about-us/distinctive-features",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/about-us/distinctive-features.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{slug:"/en/about-us/distinctive-features",sidebar_label:"Distinctive Features",sidebar_position:50,description:"Understand what makes ClickHouse stand apart from other database management systems"},sidebar:"english",previous:{title:"ClickHouse History",permalink:"/docs/en/about-us/history"},next:{title:"Adopters",permalink:"/docs/en/about-us/adopters"}},l={},d=[{value:"True Column-Oriented Database Management System",id:"true-column-oriented-database-management-system",level:2},{value:"Data Compression",id:"data-compression",level:2},{value:"Disk Storage of Data",id:"disk-storage-of-data",level:2},{value:"Parallel Processing on Multiple Cores",id:"parallel-processing-on-multiple-cores",level:2},{value:"Distributed Processing on Multiple Servers",id:"distributed-processing-on-multiple-servers",level:2},{value:"SQL Support",id:"sql-support",level:2},{value:"Vector Computation Engine",id:"vector-engine",level:2},{value:"Real-Time Data Inserts",id:"real-time-data-updates",level:2},{value:"Primary Indexes",id:"primary-index",level:2},{value:"Secondary Indexes",id:"secondary-indexes",level:2},{value:"Suitable for Online Queries",id:"suitable-for-online-queries",level:2},{value:"Support for Approximated Calculations",id:"support-for-approximated-calculations",level:2},{value:"Adaptive Join Algorithm",id:"adaptive-join-algorithm",level:2},{value:"Data Replication and Data Integrity Support",id:"data-replication-and-data-integrity-support",level:2},{value:"Role-Based Access Control",id:"role-based-access-control",level:2},{value:"Features that Can Be Considered Disadvantages",id:"clickhouse-features-that-can-be-considered-disadvantages",level:2}],c={toc:d},u="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"distinctive-features-of-clickhouse"},"Distinctive Features of ClickHouse"),(0,r.kt)("h2",{id:"true-column-oriented-database-management-system"},"True Column-Oriented Database Management System"),(0,r.kt)("p",null,"In a real column-oriented DBMS, no extra data is stored with the values. This means that constant-length values must be supported to avoid storing their length \u201cnumber\u201d next to the values. For example, a billion UInt8-type values should consume around 1 GB uncompressed, or this strongly affects the CPU use. It is essential to store data compactly (without any \u201cgarbage\u201d) even when uncompressed since the speed of decompression (CPU usage) depends mainly on the volume of uncompressed data."),(0,r.kt)("p",null,"This is in contrast to systems that can store values of different columns separately, but that cannot effectively process analytical queries due to their optimization for other scenarios, such as HBase, BigTable, Cassandra, and HyperTable. You would get throughput around a hundred thousand rows per second in these systems, but not hundreds of millions of rows per second."),(0,r.kt)("p",null,"Finally, ClickHouse is a database management system, not a single database. It allows creating tables and databases in runtime, loading data, and running queries without reconfiguring and restarting the server."),(0,r.kt)("h2",{id:"data-compression"},"Data Compression"),(0,r.kt)("p",null,"Some column-oriented DBMSs do not use data compression. However, data compression plays a key role in achieving excellent performance."),(0,r.kt)("p",null,"In addition to efficient general-purpose compression codecs with different trade-offs between disk space and CPU consumption, ClickHouse provides ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/create/table#specialized-codecs"},"specialized codecs")," for specific kinds of data, which allow ClickHouse to compete with and outperform more niche databases, like time-series ones."),(0,r.kt)("h2",{id:"disk-storage-of-data"},"Disk Storage of Data"),(0,r.kt)("p",null,"Keeping data physically sorted by primary key makes it possible to extract data based on specific values or value ranges with low latency in less than a few dozen milliseconds. Some column-oriented DBMSs, such as SAP HANA and Google PowerDrill, can only work in RAM. This approach requires allocation of a larger hardware budget than necessary for real-time analysis."),(0,r.kt)("p",null,"ClickHouse is designed to work on regular hard drives, which means the cost per GB of data storage is low, but SSD and additional RAM are also fully used if available."),(0,r.kt)("h2",{id:"parallel-processing-on-multiple-cores"},"Parallel Processing on Multiple Cores"),(0,r.kt)("p",null,"Large queries are parallelized naturally, taking all the necessary resources available on the current server."),(0,r.kt)("h2",{id:"distributed-processing-on-multiple-servers"},"Distributed Processing on Multiple Servers"),(0,r.kt)("p",null,"Almost none of the columnar DBMSs mentioned above have support for distributed query processing."),(0,r.kt)("p",null,"In ClickHouse, data can reside on different shards. Each shard can be a group of replicas used for fault tolerance. All shards are used to run a query in parallel, transparently for the user."),(0,r.kt)("h2",{id:"sql-support"},"SQL Support"),(0,r.kt)("p",null,"ClickHouse supports a ",(0,r.kt)("a",{parentName:"p",href:"/en/sql-reference/"},"declarative query language based on SQL")," that is identical to the ANSI SQL standard in ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/ansi"},"many cases"),"."),(0,r.kt)("p",null,"Supported queries include ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/select/group-by"},"GROUP BY"),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/select/order-by"},"ORDER BY"),", subqueries in ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/select/from"},"FROM"),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/select/join"},"JOIN")," clause, ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/operators/in"},"IN")," operator, ",(0,r.kt)("a",{parentName:"p",href:"../sql-reference/window-functions/"},"window functions")," and scalar subqueries."),(0,r.kt)("p",null,"Correlated (dependent) subqueries are not supported at the time of writing but might become available in the future."),(0,r.kt)("h2",{id:"vector-engine"},"Vector Computation Engine"),(0,r.kt)("p",null,"Data is not only stored by columns but is processed by vectors (parts of columns), which allows achieving high CPU efficiency."),(0,r.kt)("h2",{id:"real-time-data-updates"},"Real-Time Data Inserts"),(0,r.kt)("p",null,"ClickHouse supports tables with a primary key. To quickly perform queries on the range of the primary key, the data is sorted incrementally using the merge tree. Due to this, data can continually be added to the table. No locks are taken when new data is ingested."),(0,r.kt)("h2",{id:"primary-index"},"Primary Indexes"),(0,r.kt)("p",null,"Having data physically sorted by primary key makes it possible to extract data based on specific values or value ranges with low latency in less than a few dozen milliseconds."),(0,r.kt)("h2",{id:"secondary-indexes"},"Secondary Indexes"),(0,r.kt)("p",null,"Unlike other database management systems, secondary indexes in ClickHouse do not point to specific rows or row ranges. Instead, they allow the database to know in advance that all rows in some data parts would not match the query filtering conditions and do not read them at all, thus they are called ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/mergetree-family/mergetree#table_engine-mergetree-data_skipping-indexes"},"data skipping indexes"),"."),(0,r.kt)("h2",{id:"suitable-for-online-queries"},"Suitable for Online Queries"),(0,r.kt)("p",null,"Most OLAP database management systems do not aim for online queries with sub-second latencies. In alternative systems, report building time of tens of seconds or even minutes is often considered acceptable. Sometimes it takes even more time, which forces systems to prepare reports offline (in advance or by responding with \u201ccome back later\u201d)."),(0,r.kt)("p",null,'In ClickHouse "low latency" means that queries can be processed without delay and without trying to prepare an answer in advance, right at the same moment as the user interface page is loading. In other words, online.'),(0,r.kt)("h2",{id:"support-for-approximated-calculations"},"Support for Approximated Calculations"),(0,r.kt)("p",null,"ClickHouse provides various ways to trade accuracy for performance:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Aggregate functions for approximated calculation of the number of distinct values, medians, and quantiles."),(0,r.kt)("li",{parentName:"ol"},"Running a query based on a part (sample) of data and getting an approximated result. In this case, proportionally less data is retrieved from the disk."),(0,r.kt)("li",{parentName:"ol"},"Running an aggregation for a limited number of random keys, instead of for all keys. Under certain conditions for key distribution in the data, this provides a reasonably accurate result while using fewer resources.")),(0,r.kt)("h2",{id:"adaptive-join-algorithm"},"Adaptive Join Algorithm"),(0,r.kt)("p",null,"ClickHouse adaptively chooses how to ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/select/join"},"JOIN")," multiple tables, by preferring hash-join algorithm and falling back to the merge-join algorithm if there\u2019s more than one large table."),(0,r.kt)("h2",{id:"data-replication-and-data-integrity-support"},"Data Replication and Data Integrity Support"),(0,r.kt)("p",null,"ClickHouse uses asynchronous multi-master replication. After being written to any available replica, all the remaining replicas retrieve their copy in the background. The system maintains identical data on different replicas. Recovery after most failures is performed automatically, or semi-automatically in complex cases."),(0,r.kt)("p",null,"For more information, see the section ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/mergetree-family/replication"},"Data replication"),"."),(0,r.kt)("h2",{id:"role-based-access-control"},"Role-Based Access Control"),(0,r.kt)("p",null,"ClickHouse implements user account management using SQL queries and allows for ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/operations/access-rights"},"role-based access control configuration")," similar to what can be found in ANSI SQL standard and popular relational database management systems."),(0,r.kt)("h2",{id:"clickhouse-features-that-can-be-considered-disadvantages"},"Features that Can Be Considered Disadvantages"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"No full-fledged transactions."),(0,r.kt)("li",{parentName:"ol"},"Lack of ability to modify or delete already inserted data with a high rate and low latency. There are batch deletes and updates available to clean up or modify data, for example, to comply with ",(0,r.kt)("a",{parentName:"li",href:"https://gdpr-info.eu"},"GDPR"),"."),(0,r.kt)("li",{parentName:"ol"},"The sparse index makes ClickHouse not so efficient for point queries retrieving single rows by their keys.")))}p.isMDXComponent=!0}}]);