"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[14670],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},p=Object.keys(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),o=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=o(e.components);return a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=o(r),d=n,f=u["".concat(i,".").concat(d)]||u[d]||m[d]||p;return r?a.createElement(f,s(s({ref:t},c),{},{components:r})):a.createElement(f,s({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,s=new Array(p);s[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var o=2;o<p;o++)s[o]=r[o];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},72109:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return l},metadata:function(){return o},toc:function(){return m}});var a=r(87462),n=r(63366),p=(r(67294),r(3905)),s=["components"],l={},i="system.replicated_fetches",o={unversionedId:"zh/operations/system-tables/replicated_fetches",id:"zh/operations/system-tables/replicated_fetches",title:"system.replicated_fetches",description:"systemtables-replicatedfetches}",source:"@site/docs/zh/operations/system-tables/replicated_fetches.md",sourceDirName:"zh/operations/system-tables",slug:"/zh/operations/system-tables/replicated_fetches",permalink:"/docs/zh/operations/system-tables/replicated_fetches",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/operations/system-tables/replicated_fetches.md",tags:[],version:"current",frontMatter:{},sidebar:"chinese",previous:{title:"\u7cfb\u7edf\u3002\u526f\u672c",permalink:"/docs/zh/operations/system-tables/replicas"},next:{title:"system.replication_queue",permalink:"/docs/zh/operations/system-tables/replication_queue"}},c={},m=[],u={toc:m};function d(e){var t=e.components,r=(0,n.Z)(e,s);return(0,p.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"system_tables-replicated_fetches"},"system.replicated_fetches"),(0,p.kt)("p",null,"\u5305\u542b\u5f53\u524d\u6b63\u5728\u8fd0\u884c\u7684\u540e\u53f0\u63d0\u53d6\u7684\u4fe1\u606f."),(0,p.kt)("p",null,"\u5217\u4fe1\u606f:"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"database")," (",(0,p.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/string"},"String"),") \u2014 \u6570\u636e\u5e93\u540d\u79f0.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"table")," (",(0,p.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/string"},"String"),") \u2014 \u8868\u540d\u79f0.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"elapsed")," (",(0,p.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/float"},"Float64"),") \u2014 \u663e\u793a\u5f53\u524d\u6b63\u5728\u8fd0\u884c\u7684\u540e\u53f0\u63d0\u53d6\u5f00\u59cb\u4ee5\u6765\u7ecf\u8fc7\u7684\u65f6\u95f4(\u4ee5\u79d2\u4e3a\u5355\u4f4d).")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"progress")," (",(0,p.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/float"},"Float64"),") \u2014 \u5b8c\u6210\u5de5\u4f5c\u7684\u767e\u5206\u6bd4\u4ece0\u52301.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"result_part_name")," (",(0,p.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/string"},"String"),") \u2014 \u663e\u793a\u5f53\u524d\u6b63\u5728\u8fd0\u884c\u7684\u540e\u53f0\u63d0\u53d6\u7684\u7ed3\u679c\u800c\u5f62\u6210\u7684\u90e8\u5206\u7684\u540d\u79f0.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"result_part_path")," (",(0,p.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/string"},"String"),") \u2014 \u663e\u793a\u5f53\u524d\u6b63\u5728\u8fd0\u884c\u7684\u540e\u53f0\u63d0\u53d6\u7684\u7ed3\u679c\u800c\u5f62\u6210\u7684\u90e8\u5206\u7684\u7edd\u5bf9\u8def\u5f84.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"partition_id")," (",(0,p.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/string"},"String"),") \u2014 \u5206\u533a ID.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"total_size_bytes_compressed")," (",(0,p.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 \u7ed3\u679c\u90e8\u5206\u4e2d\u538b\u7f29\u6570\u636e\u7684\u603b\u5927\u5c0f(\u4ee5\u5b57\u8282\u4e3a\u5355\u4f4d).")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"bytes_read_compressed")," (",(0,p.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 \u4ece\u7ed3\u679c\u90e8\u5206\u8bfb\u53d6\u7684\u538b\u7f29\u5b57\u8282\u6570.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"source_replica_path")," (",(0,p.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/string"},"String"),") \u2014 \u6e90\u526f\u672c\u7684\u7edd\u5bf9\u8def\u5f84.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"source_replica_hostname")," (",(0,p.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/string"},"String"),") \u2014 \u6e90\u526f\u672c\u7684\u4e3b\u673a\u540d\u79f0.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"source_replica_port")," (",(0,p.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/int-uint"},"UInt16"),") \u2014 \u6e90\u526f\u672c\u7684\u7aef\u53e3\u53f7.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"interserver_scheme")," (",(0,p.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/string"},"String"),") \u2014 Name of the interserver scheme.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"URI")," (",(0,p.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/string"},"String"),") \u2014 \u7edf\u4e00\u8d44\u6e90\u6807\u8bc6\u7b26.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"to_detached")," (",(0,p.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/int-uint"},"UInt8"),") \u2014 \u8be5\u6807\u5fd7\u6307\u793a\u662f\u5426\u6b63\u5728\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"TO DETACHED")," \u8868\u8fbe\u5f0f\u6267\u884c\u5f53\u524d\u6b63\u5728\u8fd0\u884c\u7684\u540e\u53f0\u63d0\u53d6.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"thread_id")," (",(0,p.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 \u7ebf\u7a0b\u6807\u8bc6\u7b26."))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM system.replicated_fetches LIMIT 1 FORMAT Vertical;\n")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-text"},"Row 1:\n\u2500\u2500\u2500\u2500\u2500\u2500\ndatabase:                    default\ntable:                       t\nelapsed:                     7.243039876\nprogress:                    0.41832135995612835\nresult_part_name:            all_0_0_0\nresult_part_path:            /var/lib/clickhouse/store/700/70080a04-b2de-4adf-9fa5-9ea210e81766/all_0_0_0/\npartition_id:                all\ntotal_size_bytes_compressed: 1052783726\nbytes_read_compressed:       440401920\nsource_replica_path:         /clickhouse/test/t/replicas/1\nsource_replica_hostname:     node1\nsource_replica_port:         9009\ninterserver_scheme:          http\nURI:                         http://node1:9009/?endpoint=DataPartsExchange%3A%2Fclickhouse%2Ftest%2Ft%2Freplicas%2F1&part=all_0_0_0&client_protocol_version=4&compress=false\nto_detached:                 0\nthread_id:                   54\n")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u53e6\u8bf7\u53c2\u9605")),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"../../sql-reference/statements/system/#query-language-system-replicated"},"\u7ba1\u7406 ReplicatedMergeTree \u8868"))),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/system_tables/replicated_fetches"},"\u539f\u59cb\u6587\u7ae0")," "))}d.isMDXComponent=!0}}]);