"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[78641],{3905:(e,r,n)=>{n.d(r,{Zo:()=>d,kt:()=>h});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=t.createContext({}),p=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},d=function(e){var r=p(e.components);return t.createElement(l.Provider,{value:r},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||o;return n?t.createElement(h,i(i({ref:r},d),{},{components:n})):t.createElement(h,i({ref:r},d))}));function h(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},81776:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var t=n(87462),a=(n(67294),n(3905));const o={description:"The new setting allow_asynchronous_read_from_io_pool_for_merge_tree allows the number of reading threads (streams) to be higher than the number of threads in the rest of the query execution pipeline."},i="Synchronous data reading",s={permalink:"/docs/knowledgebase/async_vs_optimize_read_in_order",source:"@site/knowledgebase/async_vs_optimize_read_in_order.md",title:"Synchronous data reading",description:"The new setting allow_asynchronous_read_from_io_pool_for_merge_tree allows the number of reading threads (streams) to be higher than the number of threads in the rest of the query execution pipeline.",date:"2023-03-17T17:39:50.000Z",formattedDate:"March 17, 2023",tags:[],readingTime:3.685,hasTruncateMarker:!1,authors:[],frontMatter:{description:"The new setting allow_asynchronous_read_from_io_pool_for_merge_tree allows the number of reading threads (streams) to be higher than the number of threads in the rest of the query execution pipeline."},prevItem:{title:"Are Materialized Views inserted synchronously?",permalink:"/docs/knowledgebase/are_materialized_views_inserted_asynchronously"},nextItem:{title:"It's Pi Day! Let's calculate pi using SQL",permalink:"/docs/knowledgebase/calculate-pi-using-sql"}},l={authorsImageUrls:[]},p=[{value:"Asynchronous data reading",id:"asynchronous-data-reading",level:3},{value:"Benchmarks",id:"benchmarks",level:3},{value:"What about optimize_read_in_order?",id:"what-about-optimize_read_in_order",level:3},{value:"optimize_read_in_order has precedence over asynchronous reading",id:"optimize_read_in_order-has-precedence-over-asynchronous-reading",level:3},{value:"Example demonstrating all of the above",id:"example-demonstrating-all-of-the-above",level:3}],d={toc:p},c="wrapper";function u(e){let{components:r,...n}=e;return(0,a.kt)(c,(0,t.Z)({},d,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Normally the ",(0,a.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/settings/settings/#settings-max_threads"},"max_threads")," setting ",(0,a.kt)("a",{parentName:"p",href:"https://clickhouse.com/company/events/query-performance-introspection"},"controls")," the number of parallel reading threads and parallel query processing threads:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/97666923/212138072-5410b684-d00d-4218-93c5-6f49523928a5.png",alt:"Untitled scene"})),(0,a.kt)("p",null,"The data is read 'in order', column after column, from disk."),(0,a.kt)("h3",{id:"asynchronous-data-reading"},"Asynchronous data reading"),(0,a.kt)("p",null,"The new setting ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/ClickHouse/pull/43260"},"allow_asynchronous_read_from_io_pool_for_merge_tree")," allows the number of reading threads (streams) to be higher than the number of threads in the rest of the query execution pipeline to ",(0,a.kt)("strong",{parentName:"p"},"speed up cold queries on low-CPU ClickHouse Cloud services"),", and to ",(0,a.kt)("strong",{parentName:"p"},"increase performance for I/O bound queries"),".\nWhen the setting is enabled, then the amount of reading threads is controlled by the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/ClickHouse/pull/43260"},"max_streams_for_merge_tree_reading")," setting:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/97666923/212138124-82efba35-7948-4c16-8c44-cba5f0c5c5ae.png",alt:"Untitled scene"})),(0,a.kt)("p",null,"The data is read asynchronously, in parallel from different columns."),(0,a.kt)("p",null,"Note that there is also the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/ClickHouse/pull/43260"},"max_streams_to_max_threads_ratio")," setting for configuring the ratio between the number of reading threads (streams) and the number of threads in the rest of the query execution pipeline.\nBut in benchmarks it did ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/product/issues/637#issuecomment-1302644078"},"not")," help as ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/product/issues/637#issuecomment-1347067863"},"much")," as the ",(0,a.kt)("inlineCode",{parentName:"p"},"max_streams_for_merge_tree_reading")," setting"),(0,a.kt)("h3",{id:"benchmarks"},"Benchmarks"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/product/issues/637#issuecomment-1347067863"},"Here")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/product/issues/637#issuecomment-1360369066"},"here")," are some benchmarks regarding speeding up a cold query on a ClickHouse Cloud service."),(0,a.kt)("h3",{id:"what-about-optimize_read_in_order"},"What about optimize_read_in_order?"),(0,a.kt)("p",null,"With the ",(0,a.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/sql-reference/statements/select/order-by/#optimization-of-data-reading"},"optimize_read_in_order optimization"),", ClickHouse can ",(0,a.kt)("a",{parentName:"p",href:"https://clickhouse.com/blog/clickhouse-faster-queries-with-projections-and-primary-indexes"},"skip")," resorting data in memory if the queries sort order reflects the physical order of data on disk, ",(0,a.kt)("strong",{parentName:"p"},"but that requires reading the data in order (in contrast to asynchronous reading)"),":"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/97666923/212138180-1a4e29d5-43f1-4bfa-a1d6-df2824417508.png",alt:"Untitled scene"})),(0,a.kt)("h3",{id:"optimize_read_in_order-has-precedence-over-asynchronous-reading"},"optimize_read_in_order has precedence over asynchronous reading"),(0,a.kt)("p",null,"When ClickHouse sees that ",(0,a.kt)("inlineCode",{parentName:"p"},"optimize_read_in_order optimization")," can be applied, then the ",(0,a.kt)("inlineCode",{parentName:"p"},"allow_asynchronous_read_from_io_pool_for_merge_tree")," setting will be ignored / disabled."),(0,a.kt)("h3",{id:"example-demonstrating-all-of-the-above"},"Example demonstrating all of the above"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Create and load the ",(0,a.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/getting-started/example-datasets/uk-price-paid"},"UK Property Price Paid table"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Check set value of max_threads (by default the amount of CPU cores that ClickHouse sees on the node executing the query"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SELECT getSetting('max_threads');\n\n\n\u250c\u2500getSetting('max_threads')\u2500\u2510\n\u2502                        10 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Check query pipeline with default amount of threads for both reading and processing the data")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"EXPLAIN PIPELINE\nSELECT *\nFROM uk_price_paid;\n\n\u250c\u2500explain\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 (Expression)                 \u2502\n\u2502 ExpressionTransform \xd7 10     \u2502\n\u2502   (ReadFromMergeTree)        \u2502\n\u2502   MergeTreeThread \xd7 10 0 \u2192 1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Check query pipeline with 60 async reading threads and default amount of threads for the rest of the query execution pipeline")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"EXPLAIN PIPELINE\nSELECT *\nFROM uk_price_paid\nSETTINGS\n    allow_asynchronous_read_from_io_pool_for_merge_tree = 1,\n    max_streams_for_merge_tree_reading = 60;\n\n\n\u250c\u2500explain\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 (Expression)                   \u2502\n\u2502 ExpressionTransform \xd7 10       \u2502\n\u2502   (ReadFromMergeTree)          \u2502\n\u2502   Resize 60 \u2192 10               \u2502\n\u2502     MergeTreeThread \xd7 60 0 \u2192 1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Check query pipeline with 20 threads for both reading and processing the data")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"EXPLAIN PIPELINE\nSELECT *\nFROM uk_price_paid\nSETTINGS\n    max_threads = 20;\n\n\n\u250c\u2500explain\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 (Expression)                 \u2502\n\u2502 ExpressionTransform \xd7 20     \u2502\n\u2502   (ReadFromMergeTree)        \u2502\n\u2502   MergeTreeThread \xd7 20 0 \u2192 1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Check query pipeline with 60 async reading threads and 20 threads for the rest of the query execution pipeline")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"EXPLAIN PIPELINE\nSELECT *\nFROM uk_price_paid\nSETTINGS\n    max_threads = 20,\n    allow_asynchronous_read_from_io_pool_for_merge_tree = 1,\n    max_streams_for_merge_tree_reading = 60;\n\n\n\u250c\u2500explain\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 (Expression)                   \u2502\n\u2502 ExpressionTransform \xd7 20       \u2502\n\u2502   (ReadFromMergeTree)          \u2502\n\u2502   Resize 60 \u2192 20               \u2502\n\u2502     MergeTreeThread \xd7 60 0 \u2192 1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Check query pipeline with 60 async reading threads and 20 threads for the rest of the query execution pipeline\nwhen ",(0,a.kt)("inlineCode",{parentName:"li"},"optimize_read_in_order optimization")," can be applied")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"EXPLAIN PIPELINE\nSELECT *\nFROM uk_price_paid\nORDER BY postcode1, postcode2\nSETTINGS\n    max_threads = 20,\n    allow_asynchronous_read_from_io_pool_for_merge_tree= 1,\n    max_streams_for_merge_tree_reading= 60;\n\n\n\u250c\u2500explain\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 (Expression)                      \u2502\n\u2502 ExpressionTransform               \u2502\n\u2502   (Sorting)                       \u2502\n\u2502   MergingSortedTransform 20 \u2192 1   \u2502\n\u2502     (Expression)                  \u2502\n\u2502     ExpressionTransform \xd7 20      \u2502\n\u2502       (ReadFromMergeTree)         \u2502\n\u2502       MergeTreeInOrder \xd7 20 0 \u2192 1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n\n-- note that this is equivalent to disabling allow_asynchronous_read_from_io_pool_for_merge_tree\n\nEXPLAIN PIPELINE\nSELECT *\nFROM uk_price_paid\nORDER BY postcode1, postcode2\nSETTINGS\n    max_threads = 20,\n    allow_asynchronous_read_from_io_pool_for_merge_tree = 0,\n    max_streams_for_merge_tree_reading = 0;\n\n\n\u250c\u2500explain\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 (Expression)                      \u2502\n\u2502 ExpressionTransform               \u2502\n\u2502   (Sorting)                       \u2502\n\u2502   MergingSortedTransform 20 \u2192 1   \u2502\n\u2502     (Expression)                  \u2502\n\u2502     ExpressionTransform \xd7 20      \u2502\n\u2502       (ReadFromMergeTree)         \u2502\n\u2502       MergeTreeInOrder \xd7 20 0 \u2192 1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n-- note that you can enforce allow_asynchronous_read_from_io_pool_for_merge_tree by disabling optimize_read_in_order\n\nEXPLAIN PIPELINE\nSELECT *\nFROM uk_price_paid\nORDER BY\n    postcode1 ASC,\n    postcode2 ASC\nSETTINGS\n    max_threads = 20,\n    allow_asynchronous_read_from_io_pool_for_merge_tree = 1,\n    max_streams_for_merge_tree_reading = 60,\n    optimize_read_in_order = 0;\n\n\n\u250c\u2500explain\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 (Expression)                         \u2502\n\u2502 ExpressionTransform                  \u2502\n\u2502   (Sorting)                          \u2502\n\u2502   MergingSortedTransform 20 \u2192 1      \u2502\n\u2502     MergeSortingTransform \xd7 20       \u2502\n\u2502       (Expression)                   \u2502\n\u2502       ExpressionTransform \xd7 20       \u2502\n\u2502         (ReadFromMergeTree)          \u2502\n\u2502         Resize 60 \u2192 20               \u2502\n\u2502           MergeTreeThread \xd7 60 0 \u2192 1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n\n")))}u.isMDXComponent=!0}}]);