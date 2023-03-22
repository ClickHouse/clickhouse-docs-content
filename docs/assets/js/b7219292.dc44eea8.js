"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[36084],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var o=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(a),d=r,h=p["".concat(l,".").concat(d)]||p[d]||m[d]||n;return a?o.createElement(h,s(s({ref:t},u),{},{components:a})):o.createElement(h,s({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,s=new Array(n);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<n;c++)s[c]=a[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,a)}d.displayName="MDXCreateElement"},52710:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var o=a(87462),r=(a(67294),a(3905));const n={slug:"/en/faq/general/why-clickhouse-is-so-fast",title:"Why is ClickHouse so fast?",toc_hidden:!0,toc_priority:8},s="Why is ClickHouse so fast?",i={permalink:"/docs/knowledgebase/en/faq/general/why-clickhouse-is-so-fast",source:"@site/knowledgebase/faq/general/why-clickhouse-is-so-fast.md",title:"Why is ClickHouse so fast?",description:"It was designed to be fast. Query execution performance has always been a top priority during the development process, but other important characteristics like user-friendliness, scalability, and security were also considered so ClickHouse could become a real production system.",date:"2023-03-22T17:55:58.000Z",formattedDate:"March 22, 2023",tags:[],readingTime:3.88,hasTruncateMarker:!1,authors:[],frontMatter:{slug:"/en/faq/general/why-clickhouse-is-so-fast",title:"Why is ClickHouse so fast?",toc_hidden:!0,toc_priority:8},prevItem:{title:"Who is using ClickHouse?",permalink:"/docs/knowledgebase/en/faq/general/who-is-using-clickhouse"},nextItem:{title:"Questions About Integrating ClickHouse and Other Systems",permalink:"/docs/knowledgebase/en/faq/integration/"}},l={authorsImageUrls:[]},c=[{value:"&quot;Building for Fast&quot;, Alexey Milovidov (CTO, ClickHouse)",id:"building-for-fast-alexey-milovidov-cto-clickhouse",level:3},{value:"What Makes ClickHouse so Fast?",id:"what-makes-clickhouse-so-fast",level:2},{value:"Architecture choices",id:"architecture-choices",level:3},{value:"Attention to Low-Level Details",id:"attention-to-low-level-details",level:3}],u={toc:c},p="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"It was designed to be fast. Query execution performance has always been a top priority during the development process, but other important characteristics like user-friendliness, scalability, and security were also considered so ClickHouse could become a real production system."),(0,r.kt)("h3",{id:"building-for-fast-alexey-milovidov-cto-clickhouse"},'"Building for Fast", Alexey Milovidov (CTO, ClickHouse)'),(0,r.kt)("iframe",{width:"675",height:"380",src:"https://www.youtube.com/embed/CAS2otEoerM",frameborder:"0",allow:"accelerometer; autoplay; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=CAS2otEoerM"},'"Building for Fast"')," talk from ClickHouse Meetup Amsterdam, June 2022."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=ZOZQCQEtrz8"},'"Secrets of ClickHouse Performance Optimizations"')," talk from Big Data Technology Conference, December 2019, offers a more technical take on the same topic."),(0,r.kt)("h2",{id:"what-makes-clickhouse-so-fast"},"What Makes ClickHouse so Fast?"),(0,r.kt)("h3",{id:"architecture-choices"},"Architecture choices"),(0,r.kt)("p",null,"ClickHouse was initially built as a prototype to do just a single task well: to filter and aggregate data as fast as possible. That\u2019s what needs to be done to build a typical analytical report, and that\u2019s what a typical ",(0,r.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/sql-reference/statements/select/group-by.md"},"GROUP BY")," query does. The ClickHouse team has made several high-level decisions that, when combined, made achieving this task possible:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Column-oriented storage:"),"   Source data often contain hundreds or even thousands of columns, while a report can use just a few of them. The system needs to avoid reading unnecessary columns to avoid expensive disk read operations."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Indexes:"),"  Memory resident ClickHouse data structures allow the reading of only the necessary columns, and only the necessary row ranges of those columns."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Data compression:"),"   Storing different values of the same column together often leads to better compression ratios (compared to row-oriented systems) because in real data a column often has the same, or not so many different, values for neighboring rows. In addition to general-purpose compression, ClickHouse supports ",(0,r.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/sql-reference/statements/create/table.md/#specialized-codecs"},"specialized codecs")," that can make data even more compact."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Vectorized query execution:"),"  ClickHouse not only stores data in columns but also processes data in columns. This leads to better CPU cache utilization and allows for ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/SIMD"},"SIMD")," CPU instructions usage."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Scalability:"),"   ClickHouse can leverage all available CPU cores and disks to execute even a single query. Not only on a single server but all CPU cores and disks of a cluster as well."),(0,r.kt)("h3",{id:"attention-to-low-level-details"},"Attention to Low-Level Details"),(0,r.kt)("p",null,"But many other database management systems use similar techniques. What really makes ClickHouse stand out is ",(0,r.kt)("strong",{parentName:"p"},"attention to low-level details"),". Most programming languages provide implementations for most common algorithms and data structures, but they tend to be too generic to be effective. Every task can be considered as a landscape with various characteristics, instead of just throwing in random implementation. For example, if you need a hash table, here are some key questions to consider:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Which hash function to choose?"),(0,r.kt)("li",{parentName:"ul"},"Collision resolution algorithm: ",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Open_addressing"},"open addressing")," vs ",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Hash_table#Separate_chaining"},"chaining"),"?"),(0,r.kt)("li",{parentName:"ul"},"Memory layout: one array for keys and values or separate arrays? Will it store small or large values?"),(0,r.kt)("li",{parentName:"ul"},"Fill factor: when and how to resize? How to move values around on resize?"),(0,r.kt)("li",{parentName:"ul"},"Will values be removed and which algorithm will work better if they will?"),(0,r.kt)("li",{parentName:"ul"},"Will we need fast probing with bitmaps, inline placement of string keys, support for non-movable values, prefetch, and batching?")),(0,r.kt)("p",null,"Hash table is a key data structure for ",(0,r.kt)("inlineCode",{parentName:"p"},"GROUP BY")," implementation and ClickHouse automatically chooses one of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/ClickHouse/blob/master/src/Interpreters/Aggregator.h"},"30+ variations")," for each specific query."),(0,r.kt)("p",null,"The same goes for algorithms, for example, in sorting you might consider:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"What will be sorted: an array of numbers, tuples, strings, or structures?"),(0,r.kt)("li",{parentName:"ul"},"Is all data available completely in RAM?"),(0,r.kt)("li",{parentName:"ul"},"Do we need a stable sort?"),(0,r.kt)("li",{parentName:"ul"},"Do we need a full sort? Maybe partial sort or n-th element will suffice?"),(0,r.kt)("li",{parentName:"ul"},"How to implement comparisons?"),(0,r.kt)("li",{parentName:"ul"},"Are we sorting data that has already been partially sorted?")),(0,r.kt)("p",null,"Algorithms that they rely on characteristics of data they are working with can often do better than their generic counterparts. If it is not really known in advance, the system can try various implementations and choose the one that works best in runtime. For example, see an ",(0,r.kt)("a",{parentName:"p",href:"https://habr.com/en/company/yandex/blog/457612/"},"article on how LZ4 decompression is implemented in ClickHouse"),"."),(0,r.kt)("p",null,"Last but not least, the ClickHouse team always monitors the Internet on people claiming that they came up with the best implementation, algorithm, or data structure to do something and tries it out. Those claims mostly appear to be false, but from time to time you\u2019ll indeed find a gem."),(0,r.kt)("admonition",{title:"Tips for building your own high-performance software",type:"info"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Keep in mind low-level details when designing your system."),(0,r.kt)("li",{parentName:"ul"},"Design based on hardware capabilities."),(0,r.kt)("li",{parentName:"ul"},"Choose data structures and abstractions based on the needs of the task."),(0,r.kt)("li",{parentName:"ul"},"Provide specializations for special cases."),(0,r.kt)("li",{parentName:"ul"},'Try new, "best" algorithms, that you read about yesterday.'),(0,r.kt)("li",{parentName:"ul"},"Choose an algorithm in runtime based on statistics."),(0,r.kt)("li",{parentName:"ul"},"Benchmark on real datasets."),(0,r.kt)("li",{parentName:"ul"},"Test for performance regressions in CI."),(0,r.kt)("li",{parentName:"ul"},"Measure and observe everything."))))}m.isMDXComponent=!0}}]);