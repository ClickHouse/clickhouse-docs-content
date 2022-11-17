"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[61293],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(o,".").concat(d)]||m[d]||u[d]||s;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<s;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},41128:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const s={slug:"/en/operations/system-tables/clusters"},i="clusters",l={unversionedId:"en/operations/system-tables/clusters",id:"en/operations/system-tables/clusters",title:"clusters",description:"Contains information about clusters available in the config file and the servers in them.",source:"@site/docs/en/operations/system-tables/clusters.md",sourceDirName:"en/operations/system-tables",slug:"/en/operations/system-tables/clusters",permalink:"/docs/en/operations/system-tables/clusters",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/operations/system-tables/clusters.md",tags:[],version:"current",frontMatter:{slug:"/en/operations/system-tables/clusters"},sidebar:"english",previous:{title:"asynchronous_metrics",permalink:"/docs/en/operations/system-tables/asynchronous_metrics"},next:{title:"columns",permalink:"/docs/en/operations/system-tables/columns"}},o={},c=[],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"clusters"},"clusters"),(0,a.kt)("p",null,"Contains information about clusters available in the config file and the servers in them."),(0,a.kt)("p",null,"Columns:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cluster")," (",(0,a.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/string"},"String"),") \u2014 The cluster name."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"shard_num")," (",(0,a.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt32"),") \u2014 The shard number in the cluster, starting from 1."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"shard_weight")," (",(0,a.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt32"),") \u2014 The relative weight of the shard when writing data."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"replica_num")," (",(0,a.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt32"),") \u2014 The replica number in the shard, starting from 1."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"host_name")," (",(0,a.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/string"},"String"),") \u2014 The host name, as specified in the config."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"host_address")," (",(0,a.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/string"},"String"),") \u2014 The host IP address obtained from DNS."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"port")," (",(0,a.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt16"),") \u2014 The port to use for connecting to the server."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"is_local")," (",(0,a.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt8"),") \u2014 Flag that indicates whether the host is local."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"user")," (",(0,a.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/string"},"String"),") \u2014 The name of the user for connecting to the server."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"default_database")," (",(0,a.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/string"},"String"),") \u2014 The default database name."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"errors_count")," (",(0,a.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt32"),") \u2014 The number of times this host failed to reach replica."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"slowdowns_count")," (",(0,a.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt32"),") \u2014 The number of slowdowns that led to changing replica when establishing a connection with hedged requests."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"estimated_recovery_time")," (",(0,a.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt32"),") \u2014 Seconds remaining until the replica error count is zeroed and it is considered to be back to normal.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("p",null,"Query:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM system.clusters LIMIT 2 FORMAT Vertical;\n")),(0,a.kt)("p",null,"Result:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"Row 1:\n\u2500\u2500\u2500\u2500\u2500\u2500\ncluster:                 test_cluster_two_shards\nshard_num:               1\nshard_weight:            1\nreplica_num:             1\nhost_name:               127.0.0.1\nhost_address:            127.0.0.1\nport:                    9000\nis_local:                1\nuser:                    default\ndefault_database:\nerrors_count:            0\nslowdowns_count:         0\nestimated_recovery_time: 0\n\nRow 2:\n\u2500\u2500\u2500\u2500\u2500\u2500\ncluster:                 test_cluster_two_shards\nshard_num:               2\nshard_weight:            1\nreplica_num:             1\nhost_name:               127.0.0.2\nhost_address:            127.0.0.2\nport:                    9000\nis_local:                0\nuser:                    default\ndefault_database:\nerrors_count:            0\nslowdowns_count:         0\nestimated_recovery_time: 0\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"See Also")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/en/engines/table-engines/special/distributed"},"Table engine Distributed")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/en/operations/settings/settings#settings-distributed_replica_error_cap"},"distributed_replica_error_cap setting")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/en/operations/settings/settings#settings-distributed_replica_error_half_life"},"distributed_replica_error_half_life setting"))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/system-tables/clusters"},"Original article")," "))}u.isMDXComponent=!0}}]);