"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[24850],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),f=a,d=c["".concat(s,".").concat(f)]||c[f]||m[f]||i;return r?n.createElement(d,o(o({ref:t},u),{},{components:r})):n.createElement(d,o({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},73350:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={slug:"/ru/operations/optimizing-performance/sampling-query-profiler",sidebar_position:54,sidebar_label:"Query Profiling"},o="Sampling Query Profiler",l={unversionedId:"ru/operations/optimizing-performance/sampling-query-profiler",id:"ru/operations/optimizing-performance/sampling-query-profiler",title:"Sampling Query Profiler",description:"sampling-query-profiler}",source:"@site/docs/ru/operations/optimizing-performance/sampling-query-profiler.md",sourceDirName:"ru/operations/optimizing-performance",slug:"/ru/operations/optimizing-performance/sampling-query-profiler",permalink:"/docs/ru/operations/optimizing-performance/sampling-query-profiler",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/operations/optimizing-performance/sampling-query-profiler.md",tags:[],version:"current",sidebarPosition:54,frontMatter:{slug:"/ru/operations/optimizing-performance/sampling-query-profiler",sidebar_position:54,sidebar_label:"Query Profiling"},sidebar:"russia",previous:{title:"Optimizing Performance",permalink:"/docs/ru/operations/optimizing-performance/"},next:{title:"\u0421\u0438\u0441\u0442\u0435\u043c\u043d\u044b\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u044b",permalink:"/docs/ru/operations/system-tables/"}},s={},p=[{value:"Example",id:"example",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sampling-query-profiler"},"Sampling Query Profiler"),(0,a.kt)("p",null,"ClickHouse runs sampling profiler that allows analyzing query execution. Using profiler you can find source code routines that used the most frequently during query execution. You can trace CPU time and wall-clock time spent including idle time."),(0,a.kt)("p",null,"To use profiler:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Setup the ",(0,a.kt)("a",{parentName:"p",href:"/docs/ru/operations/server-configuration-parameters/settings#server_configuration_parameters-trace_log"},"trace_log")," section of the server configuration."),(0,a.kt)("p",{parentName:"li"},"This section configures the ",(0,a.kt)("a",{parentName:"p",href:"/docs/ru/operations/system-tables/trace_log#system_tables-trace_log"},"trace_log")," system table containing the results of the profiler functioning. It is configured by default. Remember that data in this table is valid only for a running server. After the server restart, ClickHouse doesn\u2019t clean up the table and all the stored virtual memory address may become invalid.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Setup the ",(0,a.kt)("a",{parentName:"p",href:"/docs/ru/operations/settings/settings#query_profiler_cpu_time_period_ns"},"query_profiler_cpu_time_period_ns")," or ",(0,a.kt)("a",{parentName:"p",href:"/docs/ru/operations/settings/settings#query_profiler_real_time_period_ns"},"query_profiler_real_time_period_ns")," settings. Both settings can be used simultaneously."),(0,a.kt)("p",{parentName:"li"},"These settings allow you to configure profiler timers. As these are the session settings, you can get different sampling frequency for the whole server, individual users or user profiles, for your interactive session, and for each individual query."))),(0,a.kt)("p",null,"The default sampling frequency is one sample per second and both CPU and real timers are enabled. This frequency allows collecting enough information about ClickHouse cluster. At the same time, working with this frequency, profiler doesn\u2019t affect ClickHouse server\u2019s performance. If you need to profile each individual query try to use higher sampling frequency."),(0,a.kt)("p",null,"To analyze the ",(0,a.kt)("inlineCode",{parentName:"p"},"trace_log")," system table:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Install the ",(0,a.kt)("inlineCode",{parentName:"p"},"clickhouse-common-static-dbg")," package. See ",(0,a.kt)("a",{parentName:"p",href:"/docs/ru/getting-started/install#install-from-deb-packages"},"Install from DEB Packages"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Allow introspection functions by the ",(0,a.kt)("a",{parentName:"p",href:"/docs/ru/operations/settings/settings#settings-allow_introspection_functions"},"allow_introspection_functions")," setting."),(0,a.kt)("p",{parentName:"li"},"For security reasons, introspection functions are disabled by default.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"addressToLine"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"addressToSymbol")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"demangle")," ",(0,a.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/functions/introspection"},"introspection functions")," to get function names and their positions in ClickHouse code. To get a profile for some query, you need to aggregate data from the ",(0,a.kt)("inlineCode",{parentName:"p"},"trace_log")," table. You can aggregate data by individual functions or by the whole stack traces."))),(0,a.kt)("p",null,"If you need to visualize ",(0,a.kt)("inlineCode",{parentName:"p"},"trace_log")," info, try ",(0,a.kt)("a",{parentName:"p",href:"../../interfaces/third-party/gui/#clickhouse-flamegraph"},"flamegraph")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/laplab/clickhouse-speedscope"},"speedscope"),"."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"In this example we:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Filtering ",(0,a.kt)("inlineCode",{parentName:"p"},"trace_log")," data by a query identifier and the current date.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Aggregating by stack trace.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Using introspection functions, we will get a report of:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Names of symbols and corresponding source code functions."),(0,a.kt)("li",{parentName:"ul"},"Source code locations of these functions.")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    count(),\n    arrayStringConcat(arrayMap(x -> concat(demangle(addressToSymbol(x)), '\\n    ', addressToLine(x)), trace), '\\n') AS sym\nFROM system.trace_log\nWHERE (query_id = 'ebca3574-ad0a-400a-9cbc-dca382f5998c') AND (event_date = today())\nGROUP BY trace\nORDER BY count() DESC\nLIMIT 10\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'{% include "examples/sampling_query_profiler_result.txt" %}\n')))}m.isMDXComponent=!0}}]);