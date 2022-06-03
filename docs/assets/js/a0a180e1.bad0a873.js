"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[16608],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||c[d]||i;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var u=2;u<i;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},91803:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return c}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),s=["components"],o={},l="query_views_log",u={unversionedId:"en/operations/system-tables/query_views_log",id:"en/operations/system-tables/query_views_log",title:"query_views_log",description:"Contains information about the dependent views executed when running a query, for example, the view type or the execution time.",source:"@site/docs/en/operations/system-tables/query_views_log.md",sourceDirName:"en/operations/system-tables",slug:"/en/operations/system-tables/query_views_log",permalink:"/docs/en/operations/system-tables/query_views_log",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/operations/system-tables/query_views_log.md",tags:[],version:"current",frontMatter:{},sidebar:"english",previous:{title:"query_thread_log",permalink:"/docs/en/operations/system-tables/query_thread_log"},next:{title:"quota_limits",permalink:"/docs/en/operations/system-tables/quota_limits"}},p={},c=[],m={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"query_views_log"},"query_views_log"),(0,i.kt)("p",null,"Contains information about the dependent views executed when running a query, for example, the view type or the execution time."),(0,i.kt)("p",null,"To start logging:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Configure parameters in the ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/operations/server-configuration-parameters/settings#server_configuration_parameters-query_views_log"},"query_views_log")," section."),(0,i.kt)("li",{parentName:"ol"},"Set ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/operations/settings/settings#settings-log-query-views"},"log_query_views")," to 1.")),(0,i.kt)("p",null,"The flushing period of data is set in ",(0,i.kt)("inlineCode",{parentName:"p"},"flush_interval_milliseconds")," parameter of the ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/operations/server-configuration-parameters/settings#server_configuration_parameters-query_views_log"},"query_views_log")," server settings section. To force flushing, use the ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/system#query_language-system-flush_logs"},"SYSTEM FLUSH LOGS")," query."),(0,i.kt)("p",null,"ClickHouse does not delete data from the table automatically. See ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/operations/system-tables/#system-tables-introduction"},"Introduction")," for more details."),(0,i.kt)("p",null,"You can use the ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/operations/settings/settings#log-queries-probability"},"log_queries_probability")," setting to reduce the number of queries, registered in the ",(0,i.kt)("inlineCode",{parentName:"p"},"query_views_log")," table."),(0,i.kt)("p",null,"Columns:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"event_date")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/date"},"Date"),") \u2014 The date when the last event of the view happened."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"event_time")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/datetime"},"DateTime"),") \u2014 The date and time when the view finished execution."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"event_time_microseconds")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/datetime"},"DateTime"),") \u2014 The date and time when the view finished execution with microseconds precision."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"view_duration_ms")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint#uint-ranges"},"UInt64"),") \u2014 Duration of view execution (sum of its stages) in milliseconds."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"initial_query_id")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/string"},"String"),") \u2014 ID of the initial query (for distributed query execution)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"view_name")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/string"},"String"),") \u2014 Name of the view."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"view_uuid")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/uuid"},"UUID"),") \u2014 UUID of the view."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"view_type")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/enum"},"Enum8"),") \u2014 Type of the view. Values:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"'Default' = 1")," \u2014 ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/statements/create/view#normal"},"Default views"),". Should not appear in this log."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"'Materialized' = 2")," \u2014 ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/statements/create/view#materialized"},"Materialized views"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"'Live' = 3")," \u2014 ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/statements/create/view#live-view"},"Live views"),"."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"view_query")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/string"},"String"),") \u2014 The query executed by the view."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"view_target")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/string"},"String"),") \u2014 The name of the view target table."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"read_rows")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint#uint-ranges"},"UInt64"),") \u2014 Number of read rows."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"read_bytes")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint#uint-ranges"},"UInt64"),") \u2014 Number of read bytes."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"written_rows")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint#uint-ranges"},"UInt64"),") \u2014 Number of written rows."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"written_bytes")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint#uint-ranges"},"UInt64"),") \u2014 Number of written bytes."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"peak_memory_usage")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"Int64"),") \u2014 The maximum difference between the amount of allocated and freed memory in context of this view."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ProfileEvents")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/array"},"Map(String, UInt64)"),") \u2014 ProfileEvents that measure different metrics. The description of them could be found in the table ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/operations/system-tables/events#system_tables-events"},"system.events"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"status")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/enum"},"Enum8"),") \u2014 Status of the view. Values:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"'QueryStart' = 1")," \u2014 Successful start the view execution. Should not appear."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"'QueryFinish' = 2")," \u2014 Successful end of the view execution."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"'ExceptionBeforeStart' = 3")," \u2014 Exception before the start of the view execution."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"'ExceptionWhileProcessing' = 4")," \u2014 Exception during the view execution."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"exception_code")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"Int32"),") \u2014 Code of an exception."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"exception")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/string"},"String"),") \u2014 Exception message."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"stack_trace")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/string"},"String"),") \u2014 ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Stack_trace"},"Stack trace"),". An empty string, if the query was completed successfully.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("p",null,"Query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM system.query_views_log LIMIT 1 \\G;\n")),(0,i.kt)("p",null,"Result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Row 1:\n\u2500\u2500\u2500\u2500\u2500\u2500\nevent_date:              2021-06-22\nevent_time:              2021-06-22 13:23:07\nevent_time_microseconds: 2021-06-22 13:23:07.738221\nview_duration_ms:        0\ninitial_query_id:        c3a1ac02-9cad-479b-af54-9e9c0a7afd70\nview_name:               default.matview_inner\nview_uuid:               00000000-0000-0000-0000-000000000000\nview_type:               Materialized\nview_query:              SELECT * FROM default.table_b\nview_target:             default.`.inner.matview_inner`\nread_rows:               4\nread_bytes:              64\nwritten_rows:            2\nwritten_bytes:           32\npeak_memory_usage:       4196188\nProfileEvents:           {'FileOpen':2,'WriteBufferFromFileDescriptorWrite':2,'WriteBufferFromFileDescriptorWriteBytes':187,'IOBufferAllocs':3,'IOBufferAllocBytes':3145773,'FunctionExecute':3,'DiskWriteElapsedMicroseconds':13,'InsertedRows':2,'InsertedBytes':16,'SelectedRows':4,'SelectedBytes':48,'ContextLock':16,'RWLockAcquiredReadLocks':1,'RealTimeMicroseconds':698,'SoftPageFaults':4,'OSReadChars':463}\nstatus:                  QueryFinish\nexception_code:          0\nexception:\nstack_trace:\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"See Also")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/en/operations/system-tables/query_log#system_tables-query_log"},"system.query_log")," \u2014 Description of the ",(0,i.kt)("inlineCode",{parentName:"li"},"query_log")," system table which contains common information about queries execution."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/en/operations/system-tables/query_thread_log#system_tables-query_thread_log"},"system.query_thread_log")," \u2014 This table contains information about each query execution thread.")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/system_tables/query_thread_log"},"Original article")," "))}d.isMDXComponent=!0}}]);