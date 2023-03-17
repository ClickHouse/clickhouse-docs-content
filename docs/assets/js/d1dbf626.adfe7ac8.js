"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[44633],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),u=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(r),c=n,k=m["".concat(o,".").concat(c)]||m[c]||d[c]||i;return r?a.createElement(k,l(l({ref:t},p),{},{components:r})):a.createElement(k,l({ref:t},p))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[m]="string"==typeof e?e:n,l[1]=s;for(var u=2;u<i;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},77912:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const i={slug:"/ru/operations/system-tables/query_thread_log"},l="system.query_thread_log",s={unversionedId:"ru/operations/system-tables/query_thread_log",id:"ru/operations/system-tables/query_thread_log",title:"system.query_thread_log",description:"systemtables-querythread_log}",source:"@site/docs/ru/operations/system-tables/query_thread_log.md",sourceDirName:"ru/operations/system-tables",slug:"/ru/operations/system-tables/query_thread_log",permalink:"/docs/ru/operations/system-tables/query_thread_log",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/operations/system-tables/query_thread_log.md",tags:[],version:"current",frontMatter:{slug:"/ru/operations/system-tables/query_thread_log"},sidebar:"russia",previous:{title:"system.query_log",permalink:"/docs/ru/operations/system-tables/query_log"},next:{title:"system.query_views_log",permalink:"/docs/ru/operations/system-tables/query_views_log"}},o={},u=[],p={toc:u},m="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"system_tables-query_thread_log"},"system.query_thread_log"),(0,n.kt)("p",null,"\u0421\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e \u043f\u043e\u0442\u043e\u043a\u0430\u0445, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u044e\u0442 \u0437\u0430\u043f\u0440\u043e\u0441\u044b, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0438\u043c\u044f \u043f\u043e\u0442\u043e\u043a\u0430, \u0432\u0440\u0435\u043c\u044f \u0435\u0433\u043e \u0437\u0430\u043f\u0443\u0441\u043a\u0430, \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0430."),(0,n.kt)("p",null,"\u0427\u0442\u043e\u0431\u044b \u043d\u0430\u0447\u0430\u0442\u044c \u043b\u043e\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u0442\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b ",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/operations/server-configuration-parameters/settings#server_configuration_parameters-query_thread_log"},"query_thread_log")," \u0432 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u0441\u0435\u0440\u0432\u0435\u0440\u0430."),(0,n.kt)("li",{parentName:"ol"},"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/operations/settings/settings#settings-log-query-threads"},"log_query_threads")," \u0440\u0430\u0432\u043d\u044b\u043c 1.")),(0,n.kt)("p",null,"\u0418\u043d\u0442\u0435\u0440\u0432\u0430\u043b \u0441\u0431\u0440\u043e\u0441\u0430 \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0443 \u0437\u0430\u0434\u0430\u0451\u0442\u0441\u044f \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u043c ",(0,n.kt)("inlineCode",{parentName:"p"},"flush_interval_milliseconds")," \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a \u0441\u0435\u0440\u0432\u0435\u0440\u0430 ",(0,n.kt)("a",{parentName:"p",href:"/docs/ru/operations/server-configuration-parameters/settings#server_configuration_parameters-query_thread_log"},"query_thread_log"),". \u0427\u0442\u043e\u0431\u044b \u043f\u0440\u0438\u043d\u0443\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0437\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043b\u043e\u0433\u0438 \u0438\u0437 \u0431\u0443\u0444\u0435\u0440\u0430 \u043f\u0430\u043c\u044f\u0442\u0438 \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0443, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0437\u0430\u043f\u0440\u043e\u0441 ",(0,n.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/statements/system#query_language-system-flush_logs"},"SYSTEM FLUSH LOGS"),"."),(0,n.kt)("p",null,"ClickHouse \u043d\u0435 \u0443\u0434\u0430\u043b\u044f\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0435 \u0438\u0437 \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438. \u041f\u043e\u0434\u0440\u043e\u0431\u043d\u043e\u0441\u0442\u0438 \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435 ",(0,n.kt)("a",{parentName:"p",href:"/docs/ru/operations/system-tables/#system-tables-introduction"},"\u0412\u0432\u0435\u0434\u0435\u043d\u0438\u0435"),"."),(0,n.kt)("p",null,"\u0427\u0442\u043e\u0431\u044b \u0443\u043c\u0435\u043d\u044c\u0448\u0438\u0442\u044c \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432, \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u044e\u0449\u0438\u0445\u0441\u044f \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0435 ",(0,n.kt)("inlineCode",{parentName:"p"},"query_thread_log"),", \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0443 ",(0,n.kt)("a",{parentName:"p",href:"/docs/ru/operations/settings/settings#log-queries-probability"},"log_queries_probability"),"."),(0,n.kt)("p",null,"\u0421\u0442\u043e\u043b\u0431\u0446\u044b:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"event_date")," (",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/date"},"Date"),") \u2014 \u0434\u0430\u0442\u0430 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u043f\u043e\u0442\u043e\u043a\u043e\u043c."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"event_time")," (",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/datetime"},"DateTime"),") \u2014 \u0434\u0430\u0442\u0430 \u0438 \u0432\u0440\u0435\u043c\u044f \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u043f\u043e\u0442\u043e\u043a\u043e\u043c."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"event_time_microseconds")," (",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/datetime"},"DateTime"),") \u2014 \u0434\u0430\u0442\u0430 \u0438 \u0432\u0440\u0435\u043c\u044f \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u043f\u043e\u0442\u043e\u043a\u043e\u043c \u0441 \u0442\u043e\u0447\u043d\u043e\u0441\u0442\u044c\u044e \u0434\u043e \u043c\u0438\u043a\u0440\u043e\u0441\u0435\u043a\u0443\u043d\u0434."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"query_start_time")," (",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/datetime"},"DateTime"),") \u2014 \u0432\u0440\u0435\u043c\u044f \u043d\u0430\u0447\u0430\u043b\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0430."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"query_start_time_microseconds")," (",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/datetime64"},"DateTime64"),") \u2014 \u0432\u0440\u0435\u043c\u044f \u043d\u0430\u0447\u0430\u043b\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u0441 \u0442\u043e\u0447\u043d\u043e\u0441\u0442\u044c\u044e \u0434\u043e \u043c\u0438\u043a\u0440\u043e\u0441\u0435\u043a\u0443\u043d\u0434."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"query_duration_ms")," (",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/int-uint#uint-ranges"},"UInt64"),") \u2014 \u0434\u043b\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u0432 \u043c\u0438\u043b\u043b\u0438\u0441\u0435\u043a\u0443\u043d\u0434\u0430\u0445."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"read_rows")," (",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/int-uint#uint-ranges"},"UInt64"),") \u2014 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0440\u043e\u0447\u0438\u0442\u0430\u043d\u043d\u044b\u0445 \u0441\u0442\u0440\u043e\u043a."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"read_bytes")," (",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/int-uint#uint-ranges"},"UInt64"),") \u2014 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0440\u043e\u0447\u0438\u0442\u0430\u043d\u043d\u044b\u0445 \u0431\u0430\u0439\u0442\u043e\u0432."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"written_rows")," (",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/int-uint#uint-ranges"},"UInt64"),") \u2014 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0437\u0430\u043f\u0438\u0441\u0430\u043d\u043d\u044b\u0445 \u0441\u0442\u0440\u043e\u043a \u0434\u043b\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 ",(0,n.kt)("inlineCode",{parentName:"li"},"INSERT"),". \u0414\u043b\u044f \u0434\u0440\u0443\u0433\u0438\u0445 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432, \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0441\u0442\u043e\u043b\u0431\u0446\u0430 0."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"written_bytes")," (",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/int-uint#uint-ranges"},"UInt64"),") \u2014 \u043e\u0431\u044a\u0451\u043c \u0437\u0430\u043f\u0438\u0441\u0430\u043d\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 \u0431\u0430\u0439\u0442\u0430\u0445 \u0434\u043b\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 ",(0,n.kt)("inlineCode",{parentName:"li"},"INSERT"),". \u0414\u043b\u044f \u0434\u0440\u0443\u0433\u0438\u0445 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432, \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0441\u0442\u043e\u043b\u0431\u0446\u0430 0."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"memory_usage")," (",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/int-uint"},"Int64"),") \u2014 \u0440\u0430\u0437\u043d\u0438\u0446\u0430 \u043c\u0435\u0436\u0434\u0443 \u0432\u044b\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0439 \u0438 \u043e\u0441\u0432\u043e\u0431\u043e\u0436\u0434\u0451\u043d\u043d\u043e\u0439 \u043f\u0430\u043c\u044f\u0442\u044c\u044e \u0432 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0435 \u043f\u043e\u0442\u043e\u043a\u0430."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"peak_memory_usage")," (",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/int-uint"},"Int64"),") \u2014 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0440\u0430\u0437\u043d\u0438\u0446\u0430 \u043c\u0435\u0436\u0434\u0443 \u0432\u044b\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0439 \u0438 \u043e\u0441\u0432\u043e\u0431\u043e\u0436\u0434\u0451\u043d\u043d\u043e\u0439 \u043f\u0430\u043c\u044f\u0442\u044c\u044e \u0432 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0435 \u043f\u043e\u0442\u043e\u043a\u0430."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"thread_name")," (",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/string"},"String"),") \u2014 \u0438\u043c\u044f \u043f\u043e\u0442\u043e\u043a\u0430."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"thread_id")," (",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/int-uint#uint-ranges"},"UInt64"),") \u2014 tid (ID \u043f\u043e\u0442\u043e\u043a\u0430 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u044b)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"master_thread_id")," (",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/int-uint#uint-ranges"},"UInt64"),") \u2014 tid (ID \u043f\u043e\u0442\u043e\u043a\u0430 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u044b) \u0433\u043b\u0430\u0432\u043d\u043e\u0433\u043e \u043f\u043e\u0442\u043e\u043a\u0430."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"query")," (",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/string"},"String"),") \u2014 \u0442\u0435\u043a\u0441\u0442 \u0437\u0430\u043f\u0440\u043e\u0441\u0430."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"is_initial_query")," (",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/int-uint#uint-ranges"},"UInt8"),") \u2014 \u0432\u0438\u0434 \u0437\u0430\u043f\u0440\u043e\u0441\u0430. \u0412\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"1 \u2014 \u0437\u0430\u043f\u0440\u043e\u0441 \u0431\u044b\u043b \u0438\u043d\u0438\u0446\u0438\u0438\u0440\u043e\u0432\u0430\u043d \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u043c."),(0,n.kt)("li",{parentName:"ul"},"0 \u2014 \u0437\u0430\u043f\u0440\u043e\u0441 \u0431\u044b\u043b \u0438\u043d\u0438\u0446\u0438\u0438\u0440\u043e\u0432\u0430\u043d \u0434\u0440\u0443\u0433\u0438\u043c \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u043c \u043f\u0440\u0438 \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u043c \u0437\u0430\u043f\u0440\u043e\u0441\u0435."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"user")," (",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/string"},"String"),") \u2014 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c, \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0432\u0448\u0438\u0439 \u0442\u0435\u043a\u0443\u0449\u0438\u0439 \u0437\u0430\u043f\u0440\u043e\u0441."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"query_id")," (",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/string"},"String"),") \u2014 ID \u0437\u0430\u043f\u0440\u043e\u0441\u0430."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"address")," (",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/domains/ipv6"},"IPv6"),") \u2014 IP \u0430\u0434\u0440\u0435\u0441, \u0441 \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u043f\u0440\u0438\u0448\u0435\u043b \u0437\u0430\u043f\u0440\u043e\u0441."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"port")," (",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/int-uint#uint-ranges"},"UInt16"),") \u2014 \u043f\u043e\u0440\u0442, \u0441 \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u043f\u0440\u0438\u0448\u0435\u043b \u0437\u0430\u043f\u0440\u043e\u0441."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"initial_user")," (",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/string"},"String"),") \u2014 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c, \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0432\u0448\u0438\u0439 \u043f\u0435\u0440\u0432\u043e\u043d\u0430\u0447\u0430\u043b\u044c\u043d\u044b\u0439 \u0437\u0430\u043f\u0440\u043e\u0441 (\u0434\u043b\u044f \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0445 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"initial_query_id")," (",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/string"},"String"),") \u2014 ID \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u0441\u043a\u043e\u0433\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0430."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"initial_address")," (",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/domains/ipv6"},"IPv6"),") \u2014 IP \u0430\u0434\u0440\u0435\u0441, \u0441 \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u043f\u0440\u0438\u0448\u0435\u043b \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0439 \u0437\u0430\u043f\u0440\u043e\u0441."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"initial_port")," (",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/int-uint#uint-ranges"},"UInt16"),") \u2014 \u043f\u043e\u0440\u0442, \u043f\u0440\u0438\u0448\u0435\u043b \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0439 \u0437\u0430\u043f\u0440\u043e\u0441."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"interface")," (",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/int-uint#uint-ranges"},"UInt8"),") \u2014 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441, \u0441 \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u0443\u0448\u0451\u043b \u0437\u0430\u043f\u0440\u043e\u0441. \u0412\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"1 \u2014 TCP."),(0,n.kt)("li",{parentName:"ul"},"2 \u2014 HTTP."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"os_user")," (",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/string"},"String"),") \u2014 \u0438\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0432 OS, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u043b ",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/interfaces/cli"},"clickhouse-client"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"client_hostname")," (",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/string"},"String"),") \u2014 hostname \u043a\u043b\u0438\u0435\u043d\u0442\u0441\u043a\u043e\u0439 \u043c\u0430\u0448\u0438\u043d\u044b, \u0441 \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u043f\u0440\u0438\u0441\u043e\u0435\u0434\u0438\u043d\u0438\u043b\u0441\u044f ",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/interfaces/cli"},"clickhouse-client")," \u0438\u043b\u0438 \u0434\u0440\u0443\u0433\u043e\u0439 TCP \u043a\u043b\u0438\u0435\u043d\u0442."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"client_name")," (",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/string"},"String"),") \u2014 ",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/interfaces/cli"},"clickhouse-client")," \u0438\u043b\u0438 \u0434\u0440\u0443\u0433\u043e\u0439 TCP \u043a\u043b\u0438\u0435\u043d\u0442."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"client_revision")," (",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/int-uint"},"UInt32"),") \u2014 \u0440\u0435\u0432\u0438\u0437\u0438\u044f ",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/interfaces/cli"},"clickhouse-client")," \u0438\u043b\u0438 \u0434\u0440\u0443\u0433\u043e\u0433\u043e TCP \u043a\u043b\u0438\u0435\u043d\u0442\u0430."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"client_version_major")," (",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/int-uint"},"UInt32"),") \u2014 \u0441\u0442\u0430\u0440\u0448\u0430\u044f \u0432\u0435\u0440\u0441\u0438\u044f ",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/interfaces/cli"},"clickhouse-client")," \u0438\u043b\u0438 \u0434\u0440\u0443\u0433\u043e\u0433\u043e TCP \u043a\u043b\u0438\u0435\u043d\u0442\u0430."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"client_version_minor")," (",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/int-uint"},"UInt32"),") \u2014 \u043c\u043b\u0430\u0434\u0448\u0430\u044f \u0432\u0435\u0440\u0441\u0438\u044f ",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/interfaces/cli"},"clickhouse-client")," \u0438\u043b\u0438 \u0434\u0440\u0443\u0433\u043e\u0433\u043e TCP \u043a\u043b\u0438\u0435\u043d\u0442\u0430."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"client_version_patch")," (",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/int-uint"},"UInt32"),") \u2014 \u043f\u0430\u0442\u0447 ",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/interfaces/cli"},"clickhouse-client")," \u0438\u043b\u0438 \u0434\u0440\u0443\u0433\u043e\u0433\u043e TCP \u043a\u043b\u0438\u0435\u043d\u0442\u0430."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"http_method")," (",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/int-uint#uint-ranges"},"UInt8"),") \u2014 HTTP \u043c\u0435\u0442\u043e\u0434, \u0438\u043d\u0438\u0446\u0438\u0438\u0440\u043e\u0432\u0430\u0432\u0448\u0438\u0439 \u0437\u0430\u043f\u0440\u043e\u0441. \u0412\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"0 \u2014 \u0437\u0430\u043f\u0440\u043e\u0441 \u0437\u0430\u043f\u0443\u0449\u0435\u043d \u0441 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430 TCP."),(0,n.kt)("li",{parentName:"ul"},"1 \u2014 ",(0,n.kt)("inlineCode",{parentName:"li"},"GET"),"."),(0,n.kt)("li",{parentName:"ul"},"2 \u2014 ",(0,n.kt)("inlineCode",{parentName:"li"},"POST"),"."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"http_user_agent")," (",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/string"},"String"),") \u2014 HTTP \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a ",(0,n.kt)("inlineCode",{parentName:"li"},"UserAgent"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"quota_key")," (",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/string"},"String"),") \u2014 \xab\u043a\u043b\u044e\u0447 \u043a\u0432\u043e\u0442\u044b\xbb \u0438\u0437 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a ",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/operations/system-tables/quotas"},"\u043a\u0432\u043e\u0442")," (\u0441\u043c. ",(0,n.kt)("inlineCode",{parentName:"li"},"keyed"),")."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"revision")," (",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/int-uint"},"UInt32"),") \u2014 \u0440\u0435\u0432\u0438\u0437\u0438\u044f ClickHouse."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"ProfileEvents")," (",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/array"},"Map(String, UInt64)"),") \u2014 \u0441\u0447\u0435\u0442\u0447\u0438\u043a\u0438 \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0445 \u043c\u0435\u0442\u0440\u0438\u043a \u0434\u043b\u044f \u0434\u0430\u043d\u043d\u043e\u0433\u043e \u043f\u043e\u0442\u043e\u043a\u0430. \u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043c\u0435\u0442\u0440\u0438\u043a \u043c\u043e\u0436\u043d\u043e \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0438\u0437 \u0442\u0430\u0431\u043b\u0438\u0446\u044b ",(0,n.kt)("a",{parentName:"li",href:"#system_tables-events"},"system.events"),".")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"}," SELECT * FROM system.query_thread_log LIMIT 1 \\G\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"Row 1:\n\u2500\u2500\u2500\u2500\u2500\u2500\nevent_date:                    2020-09-11\nevent_time:                    2020-09-11 10:08:17\nevent_time_microseconds:       2020-09-11 10:08:17.134042\nquery_start_time:              2020-09-11 10:08:17\nquery_start_time_microseconds: 2020-09-11 10:08:17.063150\nquery_duration_ms:             70\nread_rows:                     0\nread_bytes:                    0\nwritten_rows:                  1\nwritten_bytes:                 12\nmemory_usage:                  4300844\npeak_memory_usage:             4300844\nthread_name:                   TCPHandler\nthread_id:                     638133\nmaster_thread_id:              638133\nquery:                         INSERT INTO test1 VALUES\nis_initial_query:              1\nuser:                          default\nquery_id:                      50a320fd-85a8-49b8-8761-98a86bcbacef\naddress:                       ::ffff:127.0.0.1\nport:                          33452\ninitial_user:                  default\ninitial_query_id:              50a320fd-85a8-49b8-8761-98a86bcbacef\ninitial_address:               ::ffff:127.0.0.1\ninitial_port:                  33452\ninterface:                     1\nos_user:                       bharatnc\nclient_hostname:               tower\nclient_name:                   ClickHouse\nclient_revision:               54437\nclient_version_major:          20\nclient_version_minor:          7\nclient_version_patch:          2\nhttp_method:                   0\nhttp_user_agent:\nquota_key:\nrevision:                      54440\nProfileEvents:        {'Query':1,'SelectQuery':1,'ReadCompressedBytes':36,'CompressedReadBufferBlocks':1,'CompressedReadBufferBytes':10,'IOBufferAllocs':1,'IOBufferAllocBytes':89,'ContextLock':15,'RWLockAcquiredReadLocks':1}\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0442\u0430\u043a\u0436\u0435")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/ru/operations/system-tables/query_log#system_tables-query_log"},"system.query_log")," \u2014 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0441\u0438\u0441\u0442\u0435\u043c\u043d\u043e\u0439 \u0442\u0430\u0431\u043b\u0438\u0446\u044b ",(0,n.kt)("inlineCode",{parentName:"li"},"query_log"),", \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u043e\u0431\u0449\u0443\u044e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u044b\u0445 \u0437\u0430\u043f\u0440\u043e\u0441\u0430\u0445."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/ru/operations/system-tables/query_views_log#system_tables-query_views_log"},"system.query_views_log")," \u2014 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0441\u0438\u0441\u0442\u0435\u043c\u043d\u043e\u0439 \u0442\u0430\u0431\u043b\u0438\u0446\u044b ",(0,n.kt)("inlineCode",{parentName:"li"},"query_views_log"),", \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e \u0432\u0441\u0435\u0445 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f\u0445, \u0443\u0447\u0430\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0445 \u0432 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u044b\u0445 \u0437\u0430\u043f\u0440\u043e\u0441\u0430\u0445.")))}d.isMDXComponent=!0}}]);