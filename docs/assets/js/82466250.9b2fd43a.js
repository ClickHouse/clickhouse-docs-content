"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[29173],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,k=c["".concat(o,".").concat(d)]||c[d]||m[d]||i;return n?r.createElement(k,l(l({ref:t},u),{},{components:n})):r.createElement(k,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},66807:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],s={slug:"/zh/operations/system-tables/query_views_log"},o="system.query_views_log",p={unversionedId:"zh/operations/system-tables/query_views_log",id:"zh/operations/system-tables/query_views_log",title:"system.query_views_log",description:"systemtables-queryviews_log}",source:"@site/docs/zh/operations/system-tables/query_views_log.md",sourceDirName:"zh/operations/system-tables",slug:"/zh/operations/system-tables/query_views_log",permalink:"/docs/zh/operations/system-tables/query_views_log",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/operations/system-tables/query_views_log.md",tags:[],version:"current",frontMatter:{slug:"/zh/operations/system-tables/query_views_log"},sidebar:"chinese",previous:{title:"\u7cfb\u7edf\u3002query_thread_log",permalink:"/docs/zh/operations/system-tables/query_thread_log"},next:{title:"system.quota_limits",permalink:"/docs/zh/operations/system-tables/quota_limits"}},u={},m=[],c={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"system_tables-query_views_log"},"system.query_views_log"),(0,i.kt)("p",null,"\u5305\u542b\u6709\u5173\u8fd0\u884c\u67e5\u8be2\u65f6\u6267\u884c\u7684\u4ece\u5c5e\u89c6\u56fe\u7684\u4fe1\u606f\uff0c\u4f8b\u5982\u89c6\u56fe\u7c7b\u578b\u6216\u6267\u884c\u65f6\u95f4."),(0,i.kt)("p",null,"\u5f00\u59cb\u8bb0\u5f55:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5728 ",(0,i.kt)("a",{parentName:"li",href:"/docs/zh/operations/server-configuration-parameters/settings#server_configuration_parameters-query_views_log"},"query_views_log")," \u90e8\u5206\u914d\u7f6e\u53c2\u6570."),(0,i.kt)("li",{parentName:"ol"},"\u8bbe\u7f6e ",(0,i.kt)("a",{parentName:"li",href:"/docs/zh/operations/settings/settings#settings-log-query-views"},"log_query_views")," \u4e3a 1.")),(0,i.kt)("p",null,"\u6570\u636e\u7684\u5237\u65b0\u5468\u671f\u662f\u5728",(0,i.kt)("a",{parentName:"p",href:"/docs/zh/operations/server-configuration-parameters/settings#server_configuration_parameters-query_views_log"},"query_views_log"),"\u670d\u52a1\u5668\u8bbe\u7f6e\u90e8\u5206\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"flush_interval_milliseconds")," \u53c2\u6570\u4e2d\u8bbe\u7f6e\u7684. \u8981\u5f3a\u5236\u5237\u65b0\uff0c\u8bf7\u4f7f\u7528",(0,i.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/statements/system#query_language-system-flush_logs"},"SYSTEM FLUSH LOGS"),"\u67e5\u8be2."),(0,i.kt)("p",null,"ClickHouse\u4e0d\u4f1a\u81ea\u52a8\u4ece\u8868\u4e2d\u5220\u9664\u6570\u636e. \u8be6\u89c1 ",(0,i.kt)("a",{parentName:"p",href:"/docs/zh/operations/system-tables/#system-tables-introduction"},"Introduction"),"."),(0,i.kt)("p",null,"\u60a8\u53ef\u4ee5\u4f7f\u7528",(0,i.kt)("a",{parentName:"p",href:"/docs/zh/operations/settings/settings#log-queries-probability"},"log_queries_probability"),"\u8bbe\u7f6e\u6765\u51cf\u5c11\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"query_views_log")," \u8868\u4e2d\u6ce8\u518c\u7684\u67e5\u8be2\u6570\u91cf."),(0,i.kt)("p",null,"\u5217\u4fe1\u606f:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"event_date")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/date"},"Date"),") \u2014 \u89c6\u56fe\u7684\u6700\u540e\u4e00\u4e2a\u4e8b\u4ef6\u53d1\u751f\u7684\u65e5\u671f."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"event_time")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/datetime"},"DateTime"),") \u2014 \u89c6\u56fe\u5b8c\u6210\u6267\u884c\u7684\u65e5\u671f\u548c\u65f6\u95f4."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"event_time_microseconds")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/datetime"},"DateTime"),") \u2014 \u89c6\u56fe\u4ee5\u5fae\u79d2\u7cbe\u5ea6\u5b8c\u6210\u6267\u884c\u7684\u65e5\u671f\u548c\u65f6\u95f4."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"view_duration_ms")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/int-uint#uint-ranges"},"UInt64"),") \u2014 \u89c6\u56fe\u6267\u884c\u7684\u6301\u7eed\u65f6\u95f4(\u5404\u9636\u6bb5\u4e4b\u548c), \u4ee5\u6beb\u79d2\u4e3a\u5355\u4f4d."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"initial_query_id")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/string"},"String"),") \u2014 \u521d\u59cb\u67e5\u8be2\u7684ID (\u7528\u4e8e\u5206\u5e03\u5f0f\u67e5\u8be2\u6267\u884c)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"view_name")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/string"},"String"),") \u2014 \u89c6\u56fe\u540d\u79f0."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"view_uuid")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/uuid"},"UUID"),") \u2014 \u89c6\u56fe\u7684UUID."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"view_type")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/enum"},"Enum8"),") \u2014 \u89c6\u56fe\u7c7b\u578b. \u503c:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"'Default' = 1")," \u2014 ",(0,i.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/statements/create/view#normal"},"Default views"),". \u4e0d\u5e94\u8be5\u51fa\u73b0\u5728\u65e5\u5fd7\u4e2d."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"'Materialized' = 2")," \u2014 ",(0,i.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/statements/create/view#materialized"},"Materialized views"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"'Live' = 3")," \u2014 ",(0,i.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/statements/create/view#live-view"},"Live views"),"."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"view_query")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/string"},"String"),") \u2014 \u89c6\u56fe\u6267\u884c\u7684\u67e5\u8be2."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"view_target")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/string"},"String"),") \u2014 \u89c6\u56fe\u76ee\u6807\u8868\u7684\u540d\u79f0."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"read_rows")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/int-uint#uint-ranges"},"UInt64"),") \u2014 \u8bfb\u884c\u6570."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"read_bytes")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/int-uint#uint-ranges"},"UInt64"),") \u2014 \u8bfb\u5b57\u8282\u6570."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"written_rows")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/int-uint#uint-ranges"},"UInt64"),") \u2014 \u5199\u5165\u884c\u6570."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"written_bytes")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/int-uint#uint-ranges"},"UInt64"),") \u2014 \u5199\u5165\u5b57\u8282\u6570."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"peak_memory_usage")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/int-uint"},"Int64"),") \u2014 \u5728\u6b64\u89c6\u56fe\u4e0a\u4e0b\u6587\u4e2d, \u5df2\u5206\u914d\u5185\u5b58\u548c\u5df2\u91ca\u653e\u5185\u5b58\u4e4b\u95f4\u7684\u6700\u5927\u5dee\u503c."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ProfileEvents")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/array"},"Map(String, UInt64)"),") \u2014 ProfileEvents\u5ea6\u91cf\u4e0d\u540c\u7684\u6307\u6807. \u5b83\u4eec\u7684\u63cf\u8ff0\u53ef\u4ee5\u5728\u8868 ",(0,i.kt)("a",{parentName:"li",href:"/docs/zh/operations/system-tables/events#system_tables-events"},"system.events")," \u4e2d\u627e\u5230."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"status")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/enum"},"Enum8"),") \u2014 \u89c6\u56fe\u72b6\u6001. \u503c:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"'QueryStart' = 1")," \u2014 \u6210\u529f\u542f\u52a8\u89c6\u56fe\u6267\u884c. \u4e0d\u5e94\u8be5\u51fa\u73b0."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"'QueryFinish' = 2")," \u2014 \u89c6\u56fe\u6267\u884c\u6210\u529f\u7ed3\u675f."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"'ExceptionBeforeStart' = 3")," \u2014 \u89c6\u56fe\u6267\u884c\u5f00\u59cb\u524d\u7684\u5f02\u5e38."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"'ExceptionWhileProcessing' = 4")," \u2014 \u89c6\u56fe\u6267\u884c\u671f\u95f4\u7684\u5f02\u5e38."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"exception_code")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/int-uint"},"Int32"),") \u2014 \u5f02\u5e38\u4ee3\u7801."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"exception")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/string"},"String"),") \u2014 \u5f02\u5e38\u62a5\u6587."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"stack_trace")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/string"},"String"),") \u2014 ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Stack_trace"},"\u5806\u6808\u8ddf\u8e2a"),". \u5982\u679c\u67e5\u8be2\u6210\u529f\u5b8c\u6210, \u5219\u4e3a\u7a7a\u5b57\u7b26\u4e32.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,i.kt)("p",null,"\u67e5\u8be2:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM system.query_views_log LIMIT 1 \\G;\n")),(0,i.kt)("p",null,"\u7ed3\u679c:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Row 1:\n\u2500\u2500\u2500\u2500\u2500\u2500\nevent_date:              2021-06-22\nevent_time:              2021-06-22 13:23:07\nevent_time_microseconds: 2021-06-22 13:23:07.738221\nview_duration_ms:        0\ninitial_query_id:        c3a1ac02-9cad-479b-af54-9e9c0a7afd70\nview_name:               default.matview_inner\nview_uuid:               00000000-0000-0000-0000-000000000000\nview_type:               Materialized\nview_query:              SELECT * FROM default.table_b\nview_target:             default.`.inner.matview_inner`\nread_rows:               4\nread_bytes:              64\nwritten_rows:            2\nwritten_bytes:           32\npeak_memory_usage:       4196188\nProfileEvents:           {'FileOpen':2,'WriteBufferFromFileDescriptorWrite':2,'WriteBufferFromFileDescriptorWriteBytes':187,'IOBufferAllocs':3,'IOBufferAllocBytes':3145773,'FunctionExecute':3,'DiskWriteElapsedMicroseconds':13,'InsertedRows':2,'InsertedBytes':16,'SelectedRows':4,'SelectedBytes':48,'ContextLock':16,'RWLockAcquiredReadLocks':1,'RealTimeMicroseconds':698,'SoftPageFaults':4,'OSReadChars':463}\nstatus:                  QueryFinish\nexception_code:          0\nexception:\nstack_trace:\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u53e6\u8bf7\u53c2\u9605")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/zh/operations/system-tables/query_log#system_tables-query_log"},"system.query_log")," \u2014 \u5305\u542b\u67e5\u8be2\u6267\u884c\u7684\u5e38\u7528\u4fe1\u606f\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"query_log"),"\u7cfb\u7edf\u8868\u7684\u63cf\u8ff0."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/zh/operations/system-tables/query_thread_log#system_tables-query_thread_log"},"system.query_thread_log")," \u2014 \u5305\u542b\u5173\u4e8e\u6bcf\u4e2a\u67e5\u8be2\u6267\u884c\u7ebf\u7a0b\u7684\u4fe1\u606f.")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/system_tables/query_thread_log"},"\u539f\u59cb\u6587\u7ae0")," "))}d.isMDXComponent=!0}}]);