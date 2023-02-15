"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[49074],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>f});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),d=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(o),m=n,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||a;return o?r.createElement(f,l(l({ref:t},c),{},{components:o})):r.createElement(f,l({ref:t},c))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:n,l[1]=i;for(var d=2;d<a;d++)l[d]=o[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},42675:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var r=o(87462),n=(o(67294),o(3905));const a={slug:"/en/faq/operations/delete-old-data",title:"Is it possible to delete old records from a ClickHouse table?",toc_hidden:!0,toc_priority:20},l="Is It Possible to Delete Old Records from a ClickHouse Table?",i={unversionedId:"en/faq/operations/delete-old-data",id:"en/faq/operations/delete-old-data",title:"Is it possible to delete old records from a ClickHouse table?",description:"is-it-possible-to-delete-old-records-from-a-clickhouse-table}",source:"@site/docs/en/faq/operations/delete-old-data.md",sourceDirName:"en/faq/operations",slug:"/en/faq/operations/delete-old-data",permalink:"/docs/en/faq/operations/delete-old-data",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/faq/operations/delete-old-data.md",tags:[],version:"current",frontMatter:{slug:"/en/faq/operations/delete-old-data",title:"Is it possible to delete old records from a ClickHouse table?",toc_hidden:!0,toc_priority:20},sidebar:"english",previous:{title:"Question about Operating ClickHouse Servers and Clusters",permalink:"/docs/en/faq/operations/"},next:{title:"Does ClickHouse support multi-region replication?",permalink:"/docs/en/faq/operations/multi-region-replication"}},s={},d=[{value:"TTL",id:"ttl",level:2},{value:"DELETE FROM",id:"delete-from",level:2},{value:"ALTER DELETE",id:"alter-delete",level:2},{value:"DROP PARTITION",id:"drop-partition",level:2},{value:"TRUNCATE",id:"truncate",level:2}],c={toc:d},p="wrapper";function u(e){let{components:t,...o}=e;return(0,n.kt)(p,(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"is-it-possible-to-delete-old-records-from-a-clickhouse-table"},"Is It Possible to Delete Old Records from a ClickHouse Table?"),(0,n.kt)("p",null,"The short answer is \u201cyes\u201d. ClickHouse has multiple mechanisms that allow freeing up disk space by removing old data. Each mechanism is aimed for different scenarios."),(0,n.kt)("h2",{id:"ttl"},"TTL"),(0,n.kt)("p",null,"ClickHouse allows to automatically drop values when some condition happens. This condition is configured as an expression based on any columns, usually just static offset for any timestamp column."),(0,n.kt)("p",null,"The key advantage of this approach is that it does not need any external system to trigger, once TTL is configured, data removal happens automatically in background."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"TTL can also be used to move data not only to ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Null_device"},"/dev/null"),", but also between different storage systems, like from SSD to HDD.")),(0,n.kt)("p",null,"More details on ",(0,n.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/mergetree-family/mergetree#table_engine-mergetree-ttl"},"configuring TTL"),"."),(0,n.kt)("h2",{id:"delete-from"},"DELETE FROM"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/delete"},"DELETE FROM")," allows standard DELETE queries to be run in ClickHouse. The rows targeted in the filter clause are marked as deleted, and removed from future result sets.  Cleanup of the rows happens asynchronously."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"DELETE FROM is an experimental feature and must be enabled with:"),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"SET allow_experimental_lightweight_delete = true;\n"))),(0,n.kt)("h2",{id:"alter-delete"},"ALTER DELETE"),(0,n.kt)("p",null,"ALTER DELETE removes rows using asynchronous batch operations. Unlike DELETE FROM, queries run after the ALTER DELETE and before the batch operations complete will include the rows targeted for deletion.  For more details see the ",(0,n.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/alter/delete"},"ALTER DELETE")," docs."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"ALTER DELETE")," can be issued to flexibly remove old data. If you need to do it regularly, the main downside will be the need to have an external system to submit the query. There are also some performance considerations since mutations rewrite complete parts even there is only a single row to be deleted."),(0,n.kt)("p",null,"This is the most common approach to make your system based on ClickHouse ",(0,n.kt)("a",{parentName:"p",href:"https://gdpr-info.eu"},"GDPR"),"-compliant."),(0,n.kt)("p",null,"More details on ",(0,n.kt)("a",{parentName:"p",href:"../../sql-reference/statements/alter/#alter-mutations"},"mutations"),"."),(0,n.kt)("h2",{id:"drop-partition"},"DROP PARTITION"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"ALTER TABLE ... DROP PARTITION")," provides a cost-efficient way to drop a whole partition. It\u2019s not that flexible and needs proper partitioning scheme configured on table creation, but still covers most common cases. Like mutations need to be executed from an external system for regular use."),(0,n.kt)("p",null,"More details on ",(0,n.kt)("a",{parentName:"p",href:"../../sql-reference/statements/alter/partition/#alter_drop-partition"},"manipulating partitions"),"."),(0,n.kt)("h2",{id:"truncate"},"TRUNCATE"),(0,n.kt)("p",null,"It\u2019s rather radical to drop all data from a table, but in some cases it might be exactly what you need."),(0,n.kt)("p",null,"More details on ",(0,n.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/truncate"},"table truncation"),"."))}u.isMDXComponent=!0}}]);