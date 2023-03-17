"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[50722],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(a),h=r,d=p["".concat(l,".").concat(h)]||p[h]||m[h]||s;return a?n.createElement(d,o(o({ref:t},c),{},{components:a})):n.createElement(d,o({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<s;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},16365:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const s={slug:"/en/faq/use-cases/key-value",title:"Can I use ClickHouse as a key-value storage?",toc_hidden:!0,toc_priority:101},o="Can I Use ClickHouse As a Key-Value Storage?",i={permalink:"/docs/knowledgebase/en/faq/use-cases/key-value",source:"@site/knowledgebase/faq/use-cases/key-value.md",title:"Can I use ClickHouse as a key-value storage?",description:"The short answer is \u201cno\u201d. The key-value workload is among top positions in the list of cases when NOT to use ClickHouse. It\u2019s an OLAP system after all, while there are many excellent key-value storage systems out there.",date:"2023-03-17T17:39:50.000Z",formattedDate:"March 17, 2023",tags:[],readingTime:1.695,hasTruncateMarker:!1,authors:[],frontMatter:{slug:"/en/faq/use-cases/key-value",title:"Can I use ClickHouse as a key-value storage?",toc_hidden:!0,toc_priority:101},prevItem:{title:"Questions About ClickHouse Use Cases",permalink:"/docs/knowledgebase/en/faq/use-cases/"},nextItem:{title:"Can I use ClickHouse as a time-series database?",permalink:"/docs/knowledgebase/en/faq/use-cases/time-series"}},l={authorsImageUrls:[]},u=[],c={toc:u},p="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The short answer is ",(0,r.kt)("strong",{parentName:"p"},"\u201cno\u201d"),". The key-value workload is among top positions in the list of cases when ",(0,r.kt)("span",{class:"text-danger"},(0,r.kt)("strong",{parentName:"p"},"NOT"))," to use ClickHouse. It\u2019s an ",(0,r.kt)("a",{parentName:"p",href:"/docs/knowledgebase/olap"},"OLAP")," system after all, while there are many excellent key-value storage systems out there."),(0,r.kt)("p",null,"However, there might be situations where it still makes sense to use ClickHouse for key-value-like queries. Usually, it\u2019s some low-budget products where the main workload is analytical in nature and fits ClickHouse well, but there\u2019s also some secondary process that needs a key-value pattern with not so high request throughput and without strict latency requirements. If you had an unlimited budget, you would have installed a secondary key-value database for this secondary workload, but in reality, there\u2019s an additional cost of maintaining one more storage system (monitoring, backups, etc.) which might be desirable to avoid."),(0,r.kt)("p",null,"If you decide to go against recommendations and run some key-value-like queries against ClickHouse, here are some tips:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The key reason why point queries are expensive in ClickHouse is its sparse primary index of main ",(0,r.kt)("a",{parentName:"li",href:"https://clickhouse.com/docs/en/engines/table-engines/mergetree-family/mergetree.md"},"MergeTree table engine family"),". This index can\u2019t point to each specific row of data, instead, it points to each N-th and the system has to scan from the neighboring N-th row to the desired one, reading excessive data along the way. In a key-value scenario, it might be useful to reduce the value of N with the ",(0,r.kt)("inlineCode",{parentName:"li"},"index_granularity")," setting."),(0,r.kt)("li",{parentName:"ul"},"ClickHouse keeps each column in a separate set of files, so to assemble one complete row it needs to go through each of those files. Their count increases linearly with the number of columns, so in the key-value scenario, it might be worth avoiding using many columns and put all your payload in a single ",(0,r.kt)("inlineCode",{parentName:"li"},"String")," column encoded in some serialization format like JSON, Protobuf, or whatever makes sense."),(0,r.kt)("li",{parentName:"ul"},"There\u2019s an alternative approach that uses ",(0,r.kt)("a",{parentName:"li",href:"https://clickhouse.com/docs/en/engines/table-engines/special/join.md"},"Join")," table engine instead of normal ",(0,r.kt)("inlineCode",{parentName:"li"},"MergeTree")," tables and ",(0,r.kt)("a",{parentName:"li",href:"https://clickhouse.com/docs/en/sql-reference/functions/other-functions/#joinget"},"joinGet")," function to retrieve the data. It can provide better query performance but might have some usability and reliability issues. Here\u2019s an ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ClickHouse/ClickHouse/blob/master/tests/queries/0_stateless/00800_versatile_storage_join.sql#L49-L51"},"usage example"),".")))}m.isMDXComponent=!0}}]);