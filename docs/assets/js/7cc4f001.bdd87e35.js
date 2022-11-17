"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[7100],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>c});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(t),c=r,h=m["".concat(s,".").concat(c)]||m[c]||d[c]||i;return t?a.createElement(h,o(o({ref:n},u),{},{components:t})):a.createElement(h,o({ref:n},u))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},29366:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=t(87462),r=(t(67294),t(3905));const i={},o="Approximate Nearest Neighbor Search Indexes [experimental]",l={unversionedId:"en/engines/table-engines/mergetree-family/annindexes",id:"en/engines/table-engines/mergetree-family/annindexes",title:"Approximate Nearest Neighbor Search Indexes [experimental]",description:"table_engines-ANNIndex}",source:"@site/docs/en/engines/table-engines/mergetree-family/annindexes.md",sourceDirName:"en/engines/table-engines/mergetree-family",slug:"/en/engines/table-engines/mergetree-family/annindexes",permalink:"/docs/en/engines/table-engines/mergetree-family/annindexes",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/engines/table-engines/mergetree-family/annindexes.md",tags:[],version:"current",frontMatter:{},sidebar:"english",previous:{title:"GraphiteMergeTree",permalink:"/docs/en/engines/table-engines/mergetree-family/graphitemergetree"},next:{title:"Log Family",permalink:"/docs/en/engines/table-engines/log-family/"}},s={},p=[{value:"Indexes Structure",id:"indexes-structure",level:2},{value:"Create table with ANNIndex",id:"create-table-with-annindex",level:2}],u={toc:p};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"table_engines-ANNIndex"},"Approximate Nearest Neighbor Search Indexes ","[experimental]"),(0,r.kt)("p",null,"The main task that indexes achieve is to quickly find nearest neighbors for multidimensional data. An example of such a problem can be finding similar pictures (texts) for a given picture (text). That problem can be reduced to finding the nearest ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/architecture/overview-extracting-and-serving-feature-embeddings-for-machine-learning"},"embeddings"),". They can be created from data using ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/functions/#executable-user-defined-functions"},"UDF"),"."),(0,r.kt)("p",null,"The next query finds the closest neighbors in N-dimensional space using the L2 (Euclidean) distance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * \nFROM table_name \nWHERE L2Distance(Column, Point) < MaxDistance \nLIMIT N\n")),(0,r.kt)("p",null,"But it will take some time for execution because of the long calculation of the distance between ",(0,r.kt)("inlineCode",{parentName:"p"},"TargetEmbedding")," and all other vectors. This is where ANN indexes can help. They store a compact approximation of the search space (e.g. using clustering, search trees, etc.) and are able to compute approximate neighbors quickly."),(0,r.kt)("h2",{id:"indexes-structure"},"Indexes Structure"),(0,r.kt)("p",null,"Approximate Nearest Neighbor Search Indexes (",(0,r.kt)("inlineCode",{parentName:"p"},"ANNIndexes"),") are similar to skip indexes. They are constructed by some granules and determine which of them should be skipped. Compared to skip indices, ANN indices use their results not only to skip some group of granules, but also to select particular granules from a set of granules."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ANNIndexes")," are designed to speed up two types of queries:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h6",{parentName:"li",id:"type-1-where"},"Type 1: Where"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * \nFROM table_name \nWHERE DistanceFunction(Column, Point) < MaxDistance \nLIMIT N\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h6",{parentName:"li",id:"type-2-order-by"},"Type 2: Order by"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * \nFROM table_name [WHERE ...] \nORDER BY DistanceFunction(Column, Point) \nLIMIT N\n")))),(0,r.kt)("p",null,"In these queries, ",(0,r.kt)("inlineCode",{parentName:"p"},"DistanceFunction")," is selected from ",(0,r.kt)("a",{parentName:"p",href:"../../../sql-reference/functions/distance-functions"},"distance functions"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"Point")," is a known vector (something like ",(0,r.kt)("inlineCode",{parentName:"p"},"(0.1, 0.1, ... )"),"). To avoid writing large vectors, use ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/interfaces/cli#queries-with-parameters-cli-queries-with-parameters"},"client parameters"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"Value")," - a float value that will bound the neighbourhood."),(0,r.kt)("p",null,'!!! note "Note"\nANN index can\'t speed up query that satisfies both types(',(0,r.kt)("inlineCode",{parentName:"p"},"where + order by"),", only one of them). All queries must have the limit, as algorithms are used to find nearest neighbors and need a specific number of them."),(0,r.kt)("p",null,'!!! note "Note"\nIndexes are applied only to queries with a limit less than the ',(0,r.kt)("inlineCode",{parentName:"p"},"max_limit_for_ann_queries")," setting. This helps to avoid memory overflows in queries with a large limit. ",(0,r.kt)("inlineCode",{parentName:"p"},"max_limit_for_ann_queries")," setting can be changed if you know you can provide enough memory. The default value is ",(0,r.kt)("inlineCode",{parentName:"p"},"1000000"),"."),(0,r.kt)("p",null,"Both types of queries are handled the same way. The indexes get ",(0,r.kt)("inlineCode",{parentName:"p"},"n")," neighbors (where ",(0,r.kt)("inlineCode",{parentName:"p"},"n")," is taken from the ",(0,r.kt)("inlineCode",{parentName:"p"},"LIMIT")," clause) and work with them. In ",(0,r.kt)("inlineCode",{parentName:"p"},"ORDER BY")," query they remember the numbers of all parts of the granule that have at least one of neighbor. In ",(0,r.kt)("inlineCode",{parentName:"p"},"WHERE")," query they remember only those parts that satisfy the requirements."),(0,r.kt)("h2",{id:"create-table-with-annindex"},"Create table with ANNIndex"),(0,r.kt)("p",null,"This feature is disabled by default. To enable it, set ",(0,r.kt)("inlineCode",{parentName:"p"},"allow_experimental_annoy_index")," to 1. Also, this feature is disabled for arm, due to likely problems with the algorithm."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE t\n(\n  `id` Int64,\n  `number` Tuple(Float32, Float32, Float32),\n  INDEX x number TYPE annoy GRANULARITY N\n)\nENGINE = MergeTree\nORDER BY id;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE t\n(\n  `id` Int64,\n  `number` Array(Float32),\n  INDEX x number TYPE annoy GRANULARITY N\n)\nENGINE = MergeTree\nORDER BY id;\n")),(0,r.kt)("p",null,"With greater ",(0,r.kt)("inlineCode",{parentName:"p"},"GRANULARITY")," indexes remember the data structure better. The ",(0,r.kt)("inlineCode",{parentName:"p"},"GRANULARITY")," indicates how many granules will be used to construct the index. The more data is provided for the index, the more of it can be handled by one index and the more chances that with the right hyperparameters the index will remember the data structure better. But some indexes can't be built if they don't have enough data, so this granule will always participate in the query. For more information, see the description of indexes."),(0,r.kt)("p",null,"As the indexes are built only during insertions into table, ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"OPTIMIZE")," queries are slower than for ordinary table. At this stage indexes remember all the information about the given data. ANNIndexes should be used if you have immutable or rarely changed data and many read requests."),(0,r.kt)("p",null,"You can create your table with index which uses certain algorithm. Now only indices based on the following algorithms are supported:"),(0,r.kt)("h1",{id:"index-list"},"Index list"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/en/engines/table-engines/mergetree-family/annindexes#annoy-annoy"},"Annoy"))),(0,r.kt)("h1",{id:"annoy"},"Annoy"),(0,r.kt)("p",null,"Implementation of the algorithm was taken from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/spotify/annoy"},"this repository"),"."),(0,r.kt)("p",null,"Short description of the algorithm:\nThe algorithm recursively divides in half all space by random linear surfaces (lines in 2D, planes in 3D e.t.c.). Thus it makes tree of polyhedrons and points that they contains. Repeating the operation several times for greater accuracy it creates a forest.\nTo find K Nearest Neighbours it goes down through the trees and fills the buffer of closest points using the priority queue of polyhedrons. Next, it sorts buffer and return the nearest K points."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE t\n(\n  id Int64,\n  number Tuple(Float32, Float32, Float32),\n  INDEX x number TYPE annoy(T) GRANULARITY N\n)\nENGINE = MergeTree\nORDER BY id;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE t\n(\n  id Int64,\n  number Array(Float32),\n  INDEX x number TYPE annoy(T) GRANULARITY N\n)\nENGINE = MergeTree\nORDER BY id;\n")),(0,r.kt)("p",null,'!!! note "Note"\nTable with array field will work faster, but all arrays ',(0,r.kt)("strong",{parentName:"p"},"must")," have same length. Use ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/create/table#constraints"},"CONSTRAINT")," to avoid errors. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"CONSTRAINT constraint_name_1 CHECK length(number) = 256"),"."),(0,r.kt)("p",null,"Parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"T")," is the number of trees which algorithm will create. The bigger it is, the slower (approximately linear) it works (in both ",(0,r.kt)("inlineCode",{parentName:"p"},"CREATE")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT")," requests), but the better accuracy you get (adjusted for randomness). "),(0,r.kt)("p",null,"Annoy supports only ",(0,r.kt)("inlineCode",{parentName:"p"},"L2Distance"),"."),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT")," in the settings (",(0,r.kt)("inlineCode",{parentName:"p"},"ann_index_select_query_params"),") you can specify the size of the internal buffer (more details in the description above or in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/spotify/annoy"},"original repository"),"). During the query it will inspect up to ",(0,r.kt)("inlineCode",{parentName:"p"},"search_k")," nodes which defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"n_trees * n")," if not provided. ",(0,r.kt)("inlineCode",{parentName:"p"},"search_k")," gives you a run-time tradeoff between better accuracy and speed."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * \nFROM table_name [WHERE ...] \nORDER BY L2Distance(Column, Point) \nLIMIT N\nSETTING ann_index_select_query_params=`k_search=100`\n")))}d.isMDXComponent=!0}}]);