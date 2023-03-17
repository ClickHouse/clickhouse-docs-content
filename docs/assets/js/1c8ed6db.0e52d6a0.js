"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[84509],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(t),d=a,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return t?r.createElement(f,s(s({ref:n},p),{},{components:t})):r.createElement(f,s({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},98267:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=t(87462),a=(t(67294),t(3905));const o={sidebar_position:1,description:"Map lookups such as `a['key']' works with linear complexity (mentioned [here](https://clickhouse.com/docs/en/sql-reference/data-types/map)) and can be inefficient."},s="Improving Map performance",i={permalink:"/docs/knowledgebase/improve-map-performance",source:"@site/knowledgebase/improve-map-performance.md",title:"Improving Map performance",description:"Map lookups such as `a['key']' works with linear complexity (mentioned [here](https://clickhouse.com/docs/en/sql-reference/data-types/map)) and can be inefficient.",date:"2023-03-17T17:39:50.000Z",formattedDate:"March 17, 2023",tags:[],readingTime:2.65,hasTruncateMarker:!1,authors:[],frontMatter:{sidebar_position:1,description:"Map lookups such as `a['key']' works with linear complexity (mentioned [here](https://clickhouse.com/docs/en/sql-reference/data-types/map)) and can be inefficient."},prevItem:{title:"Ignoring incorrect settings",permalink:"/docs/knowledgebase/ignoring-incorrect-settings"},nextItem:{title:"How to ingest Parquet files from an S3 bucket",permalink:"/docs/knowledgebase/ingest-parquet-files-in-s3"}},l={authorsImageUrls:[]},c=[],p={toc:c},u="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Problem")),(0,a.kt)("p",null,"Map lookup such as ",(0,a.kt)("inlineCode",{parentName:"p"},"a['key']")," works with linear complexity (mentioned ",(0,a.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/sql-reference/data-types/map"},"here"),") and can be inefficient. This is because selecting a value with a specific key from a table would require iterating through all keys (~M) across all rows (N) in the Map column, resulting in ~MxN lookups."),(0,a.kt)("p",null,"A lookup using Map can be 10x slower than a String column. The experiment below also shows ~10x slowdown for cold query, and difference in multiple magnitudes of data processed (7.21 MB vs 5.65 GB)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"-- create table with SpanNAme as String and ResourceAttributes as Map\nDROP TABLE IF EXISTS tbl;\nCREATE TABLE tbl (\n    `Timestamp` DateTime64(9) CODEC (Delta(8), ZSTD(1)),\n    `TraceId` String CODEC (ZSTD(1)),\n    `ServiceName` LowCardinality(String) CODEC (ZSTD(1)),\n    `Duration` UInt8 CODEC (ZSTD(1)), -- Int64\n    `SpanName` LowCardinality(String) CODEC (ZSTD(1)),\n    `ResourceAttributes` Map(LowCardinality(String), String) CODEC (ZSTD(1))\n)\nENGINE = MergeTree\nPARTITION BY toDate(Timestamp)\nORDER BY (ServiceName, SpanName, toUnixTimestamp(Timestamp), TraceId);\n\n-- create UDF to generate random Map data for ResourceAttributes\nDROP FUNCTION IF EXISTS genmap;\nCREATE FUNCTION genmap AS (n) -> arrayMap (x-> (x::String, (x*rand32())::String), range(1, n));\n\n-- check that genmap is working as intended\nSELECT genmap(10)::Map(String, String);\n\n-- insert 1M rows\nINSERT INTO tbl\nSELECT\n    now() - randUniform(1, 1000000.) as Timestamp,\n    randomPrintableASCII(2) as TraceId,\n    randomPrintableASCII(2) as ServiceName,\n    rand32() as Duration,\n    randomPrintableASCII(2) as SpanName,\n    genmap(rand64()%500)::Map(String, String) as ResourceAttributes\nFROM numbers(1_000_000);\n\n-- querying for SpanName is faster\n-- [cold] 0 rows in set. Elapsed: 0.642 sec. Processed 1.00 million rows, 7.21 MB (1.56 million rows/s., 11.22 MB/s.)\n-- [warm] 0 rows in set. Elapsed: 0.164 sec. Processed 1.00 million rows, 7.21 MB (6.10 million rows/s., 43.99 MB/s.)\nSELECT\n    COUNT(*),\n    avg(Duration/1E6) as average,\n    quantile(0.95)(Duration/1E6) as p95,\n    quantile(0.99)(Duration/1E6) as p99,\n    SpanName\nFROM tbl\nGROUP BY SpanName ORDER BY 1 DESC LIMIT 50 FORMAT Null;\n\n-- query for ResourceAttributes is slower\n-- [cold] 0 rows in set. Elapsed: 6.432 sec. Processed 1.00 million rows, 5.65 GB (155.46 thousand rows/s., 879.07 MB/s.)\n-- [warm] 0 rows in set. Elapsed: 5.935 sec. Processed 1.00 million rows, 5.65 GB (168.50 thousand rows/s., 952.81 MB/s.)\nSELECT\n    COUNT(*),\n    avg(Duration/1E6) as average,\n    quantile(0.95)(Duration/1E6) as p95,\n    quantile(0.99)(Duration/1E6) as p99,\n    ResourceAttributes['1'] as hostname\nFROM tbl\nGROUP BY hostname ORDER BY 1 DESC LIMIT 50 FORMAT Null;\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Solution"),"\nTo improve the query, we can add another column with the value defaulting to a particular key in the Map column, and then materializing it to populate value for existing rows. This way, we extract and store the necessary value at insertion time, thereby speeding up the lookup at query time."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"-- solution is to add a column with value defaulting to a particular key in Map\nALTER TABLE tbl ADD COLUMN hostname LowCardinality(String) DEFAULT ResourceAttributes['1'];\nALTER TABLE tbl MATERIALIZE COLUMN hostname;\n\n-- query for hostname (new column) is now faster\n-- [cold] 0 rows in set. Elapsed: 2.215 sec. Processed 1.00 million rows, 21.67 MB (451.52 thousand rows/s., 9.78 MB/s.)\n-- [warm] 0 rows in set. Elapsed: 0.541 sec. Processed 1.00 million rows, 21.67 MB (1.85 million rows/s., 40.04 MB/s.)\nSELECT\n    COUNT(*),\n    avg(Duration/1E6) as average,\n    quantile(0.95)(Duration/1E6) as p95,\n    quantile(0.99)(Duration/1E6) as p99,\n    hostname\nFROM tbl\nGROUP BY hostname ORDER BY 1 DESC LIMIT 50 FORMAT Null;\n\n-- drop cache to run query cold\nSYSTEM DROP FILESYSTEM CACHE;\n")))}m.isMDXComponent=!0}}]);