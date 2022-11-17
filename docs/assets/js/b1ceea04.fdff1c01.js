"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[21992],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var a=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=a.createContext({}),d=function(e){var t=a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(o),m=n,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||r;return o?a.createElement(f,i(i({ref:t},c),{},{components:o})):a.createElement(f,i({ref:t},c))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var d=2;d<r;d++)i[d]=o[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}u.displayName="MDXCreateElement"},28569:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var a=o(87462),n=(o(67294),o(3905));const r={slug:"/zh/faq/operations/delete-old-data",title:"Is it possible to delete old records from a ClickHouse table?",toc_hidden:!0,sidebar_position:20},i="Is It Possible to Delete Old Records from a ClickHouse Table?",s={unversionedId:"zh/faq/operations/delete-old-data",id:"zh/faq/operations/delete-old-data",title:"Is it possible to delete old records from a ClickHouse table?",description:"is-it-possible-to-delete-old-records-from-a-clickhouse-table}",source:"@site/docs/zh/faq/operations/delete-old-data.md",sourceDirName:"zh/faq/operations",slug:"/zh/faq/operations/delete-old-data",permalink:"/docs/zh/faq/operations/delete-old-data",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/faq/operations/delete-old-data.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{slug:"/zh/faq/operations/delete-old-data",title:"Is it possible to delete old records from a ClickHouse table?",toc_hidden:!0,sidebar_position:20},sidebar:"chinese",previous:{title:"Which ClickHouse version to use in production?",permalink:"/docs/zh/faq/operations/production"},next:{title:"ClickHouse\u652f\u6301\u591a\u533a\u57df\u590d\u5236\u5417?",permalink:"/docs/zh/faq/operations/multi-region-replication"}},l={},d=[{value:"TTL",id:"ttl",level:2},{value:"ALTER DELETE",id:"alter-delete",level:2},{value:"DROP PARTITION",id:"drop-partition",level:2},{value:"TRUNCATE",id:"truncate",level:2}],c={toc:d};function p(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"is-it-possible-to-delete-old-records-from-a-clickhouse-table"},"Is It Possible to Delete Old Records from a ClickHouse Table?"),(0,n.kt)("p",null,"The short answer is \u201cyes\u201d. ClickHouse has multiple mechanisms that allow freeing up disk space by removing old data. Each mechanism is aimed for different scenarios."),(0,n.kt)("h2",{id:"ttl"},"TTL"),(0,n.kt)("p",null,"ClickHouse allows to automatically drop values when some condition happens. This condition is configured as an expression based on any columns, usually just static offset for any timestamp column."),(0,n.kt)("p",null,"The key advantage of this approach is that it does not need any external system to trigger, once TTL is configured, data removal happens automatically in background."),(0,n.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"TTL can also be used to move data not only to ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Null_device"},"/dev/null"),", but also between different storage systems, like from SSD to HDD."))),(0,n.kt)("p",null,"More details on ",(0,n.kt)("a",{parentName:"p",href:"../../engines/table-engines/mergetree-family/mergetree/#table_engine-mergetree-ttl"},"configuring TTL"),"."),(0,n.kt)("h2",{id:"alter-delete"},"ALTER DELETE"),(0,n.kt)("p",null,"ClickHouse does not have real-time point deletes like in ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Online_transaction_processing"},"OLTP")," databases. The closest thing to them are mutations. They are issued as ",(0,n.kt)("inlineCode",{parentName:"p"},"ALTER ... DELETE")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"ALTER ... UPDATE")," queries to distinguish from normal ",(0,n.kt)("inlineCode",{parentName:"p"},"DELETE")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"UPDATE")," as they are asynchronous batch operations, not immediate modifications. The rest of syntax after ",(0,n.kt)("inlineCode",{parentName:"p"},"ALTER TABLE")," prefix is similar."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"ALTER DELETE")," can be issued to flexibly remove old data. If you need to do it regularly, the main downside will be the need to have an external system to submit the query. There are also some performance considerations since mutation rewrite complete parts even there\u2019s only a single row to be deleted."),(0,n.kt)("p",null,"This is the most common approach to make your system based on ClickHouse ",(0,n.kt)("a",{parentName:"p",href:"https://gdpr-info.eu"},"GDPR"),"-compliant."),(0,n.kt)("p",null,"More details on ",(0,n.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/statements/alter/#alter-mutations"},"mutations"),"."),(0,n.kt)("h2",{id:"drop-partition"},"DROP PARTITION"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"ALTER TABLE ... DROP PARTITION")," provides a cost-efficient way to drop a whole partition. It\u2019s not that flexible and needs proper partitioning scheme configured on table creation, but still covers most common cases. Like mutations need to be executed from an external system for regular use."),(0,n.kt)("p",null,"More details on ",(0,n.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/statements/alter/partition/#alter_drop-partition"},"manipulating partitions"),"."),(0,n.kt)("h2",{id:"truncate"},"TRUNCATE"),(0,n.kt)("p",null,"It\u2019s rather radical to drop all data from a table, but in some cases it might be exactly what you need."),(0,n.kt)("p",null,"More details on ",(0,n.kt)("a",{parentName:"p",href:"../../sql-reference/statements/truncate/"},"table truncation"),"."))}p.isMDXComponent=!0}}]);