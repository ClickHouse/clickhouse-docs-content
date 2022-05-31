"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[46755],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),h=u(r),d=o,f=h["".concat(c,".").concat(d)]||h[d]||p[d]||s;return r?n.createElement(f,a(a({ref:t},l),{},{components:r})):n.createElement(f,a({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var u=2;u<s;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},75533:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var n=r(87462),o=r(63366),s=(r(67294),r(3905)),a=["components"],i={sidebar_label:"Performance",sidebar_position:40,description:"ClickHouse shows the best performance with the highest throughput for long queries and the lowest latency on short queries"},c="Performance",u={unversionedId:"en/about-us/performance",id:"en/about-us/performance",title:"Performance",description:"ClickHouse shows the best performance with the highest throughput for long queries and the lowest latency on short queries",source:"@site/docs/en/about-us/performance.md",sourceDirName:"en/about-us",slug:"/en/about-us/performance",permalink:"/docs/en/about-us/performance",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/about-us/performance.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{sidebar_label:"Performance",sidebar_position:40,description:"ClickHouse shows the best performance with the highest throughput for long queries and the lowest latency on short queries"},sidebar:"english",previous:{title:"Adopters",permalink:"/docs/en/about-us/adopters"}},l={},p=[{value:"Throughput for a Single Large Query",id:"throughput-for-a-single-large-query",level:2},{value:"Latency When Processing Short Queries",id:"latency-when-processing-short-queries",level:2},{value:"Throughput When Processing a Large Quantity of Short Queries",id:"throughput-when-processing-a-large-quantity-of-short-queries",level:2},{value:"Performance When Inserting Data",id:"performance-when-inserting-data",level:2}],h={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"performance"},"Performance"),(0,s.kt)("p",null,"According to internal testing results at Yandex, ClickHouse shows the best performance (both the highest throughput for long queries and the lowest latency on short queries) for comparable operating scenarios among systems of its class that were available for testing. You can view the test results on a ",(0,s.kt)("a",{parentName:"p",href:"https://clickhouse.com/benchmark/dbms/"},"separate page"),"."),(0,s.kt)("p",null,"Numerous independent benchmarks came to similar conclusions. They are not difficult to find using an internet search, or you can see ",(0,s.kt)("a",{parentName:"p",href:"https://clickhouse.com/#independent-benchmarks"},"our small collection of related links"),"."),(0,s.kt)("h2",{id:"throughput-for-a-single-large-query"},"Throughput for a Single Large Query"),(0,s.kt)("p",null,"Throughput can be measured in rows per second or megabytes per second. If the data is placed in the page cache, a query that is not too complex is processed on modern hardware at a speed of approximately 2-10 GB/s of uncompressed data on a single server (for the most straightforward cases, the speed may reach 30 GB/s). If data is not placed in the page cache, the speed depends on the disk subsystem and the data compression rate. For example, if the disk subsystem allows reading data at 400 MB/s, and the data compression rate is 3, the speed is expected to be around 1.2 GB/s. To get the speed in rows per second, divide the speed in bytes per second by the total size of the columns used in the query. For example, if 10 bytes of columns are extracted, the speed is expected to be around 100-200 million rows per second."),(0,s.kt)("p",null,"The processing speed increases almost linearly for distributed processing, but only if the number of rows resulting from aggregation or sorting is not too large."),(0,s.kt)("h2",{id:"latency-when-processing-short-queries"},"Latency When Processing Short Queries"),(0,s.kt)("p",null,"If a query uses a primary key and does not select too many columns and rows to process (hundreds of thousands), you can expect less than 50 milliseconds of latency (single digits of milliseconds in the best case) if data is placed in the page cache. Otherwise, latency is mostly dominated by the number of seeks. If you use rotating disk drives, for a system that is not overloaded, the latency can be estimated with this formula: ",(0,s.kt)("inlineCode",{parentName:"p"},"seek time (10 ms) * count of columns queried * count of data parts"),"."),(0,s.kt)("h2",{id:"throughput-when-processing-a-large-quantity-of-short-queries"},"Throughput When Processing a Large Quantity of Short Queries"),(0,s.kt)("p",null,"Under the same conditions, ClickHouse can handle several hundred queries per second on a single server (up to several thousand in the best case). Since this scenario is not typical for analytical DBMSs, we recommend expecting a maximum of 100 queries per second."),(0,s.kt)("h2",{id:"performance-when-inserting-data"},"Performance When Inserting Data"),(0,s.kt)("p",null,"We recommend inserting data in packets of at least 1000 rows, or no more than a single request per second. When inserting to a MergeTree table from a tab-separated dump, the insertion speed can be from 50 to 200 MB/s. If the inserted rows are around 1 KB in size, the speed will be from 50,000 to 200,000 rows per second. If the rows are small, the performance can be higher in rows per second (on Banner System data -",(0,s.kt)("inlineCode",{parentName:"p"},">")," 500,000 rows per second; on Graphite data -",(0,s.kt)("inlineCode",{parentName:"p"},">")," 1,000,000 rows per second). To improve performance, you can make multiple INSERT queries in parallel, which scales linearly."))}d.isMDXComponent=!0}}]);