"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[62325],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,k=d["".concat(o,".").concat(u)]||d[u]||c[u]||i;return n?a.createElement(k,l(l({ref:t},m),{},{components:n})):a.createElement(k,l({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},64462:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={slug:"/zh/operations/system-tables/query_log",machine_translated:!0,machine_translated_rev:"5decc73b5dc60054f19087d3690c4eb99446a6c3"},l="system.query_log",s={unversionedId:"zh/operations/system-tables/query_log",id:"zh/operations/system-tables/query_log",title:"system.query_log",description:"systemtables-querylog}",source:"@site/docs/zh/operations/system-tables/query_log.md",sourceDirName:"zh/operations/system-tables",slug:"/zh/operations/system-tables/query_log",permalink:"/docs/zh/operations/system-tables/query_log",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/operations/system-tables/query_log.md",tags:[],version:"current",frontMatter:{slug:"/zh/operations/system-tables/query_log",machine_translated:!0,machine_translated_rev:"5decc73b5dc60054f19087d3690c4eb99446a6c3"},sidebar:"chinese",previous:{title:"\u7cfb\u7edf\u3002\u6d41\u7a0b",permalink:"/docs/zh/operations/system-tables/processes"},next:{title:"\u7cfb\u7edf\u3002query_thread_log",permalink:"/docs/zh/operations/system-tables/query_thread_log"}},o={},p=[],m={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"system_tables-query_log"},"system.query_log"),(0,r.kt)("p",null,"\u5305\u542b\u5df2\u6267\u884c\u67e5\u8be2\u7684\u76f8\u5173\u4fe1\u606f\uff0c\u4f8b\u5982\uff1a\u5f00\u59cb\u65f6\u95f4\u3001\u5904\u7406\u6301\u7eed\u65f6\u95f4\u3001\u9519\u8bef\u6d88\u606f\u3002"),(0,r.kt)("p",null,'!!! note "\u6ce8"\n\u6b64\u8868\u4e0d\u5305\u542b\u4ee5\u4e0b\u5185\u5bb9\u7684\u6444\u53d6\u6570\u636e ',(0,r.kt)("inlineCode",{parentName:"p"},"INSERT")," \u67e5\u8be2\u3002"),(0,r.kt)("p",null,"\u60a8\u53ef\u4ee5\u66f4\u6539query_log\u7684\u8bbe\u7f6e\uff0c\u5728\u670d\u52a1\u5668\u914d\u7f6e\u7684 ",(0,r.kt)("a",{parentName:"p",href:"/docs/zh/operations/server-configuration-parameters/settings#server_configuration_parameters-query-log"},"query_log")," \u90e8\u5206\u3002"),(0,r.kt)("p",null,"\u60a8\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e ",(0,r.kt)("a",{parentName:"p",href:"/docs/zh/operations/settings/settings#settings-log-queries"},"log_queries=0"),"\u6765\u7981\u7528query_log. \u6211\u4eec\u4e0d\u5efa\u8bae\u5173\u95ed\u6b64\u65e5\u5fd7\uff0c\u56e0\u4e3a\u6b64\u8868\u4e2d\u7684\u4fe1\u606f\u5bf9\u4e8e\u89e3\u51b3\u95ee\u9898\u5f88\u91cd\u8981\u3002"),(0,r.kt)("p",null,"\u6570\u636e\u5237\u65b0\u7684\u5468\u671f\u53ef\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"flush_interval_milliseconds")," \u53c2\u6570\u6765\u8bbe\u7f6e ",(0,r.kt)("a",{parentName:"p",href:"/docs/zh/operations/server-configuration-parameters/settings#server_configuration_parameters-query-log"},"query_log")," \u3002 \u8981\u5f3a\u5236\u5237\u65b0\uff0c\u8bf7\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/statements/system#query_language-system-flush_logs"},"SYSTEM FLUSH LOGS"),"\u3002"),(0,r.kt)("p",null,"ClickHouse\u4e0d\u4f1a\u81ea\u52a8\u4ece\u8868\u4e2d\u5220\u9664\u6570\u636e\u3002\u66f4\u591a\u8be6\u60c5\u8bf7\u770b ",(0,r.kt)("a",{parentName:"p",href:"/docs/zh/operations/system-tables/#system-tables-introduction"},"introduction")," \u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"system.query_log")," \u8868\u6ce8\u518c\u4e24\u79cd\u67e5\u8be2:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5ba2\u6237\u7aef\u76f4\u63a5\u8fd0\u884c\u7684\u521d\u59cb\u67e5\u8be2\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u7531\u5176\u4ed6\u67e5\u8be2\u542f\u52a8\u7684\u5b50\u67e5\u8be2\uff08\u7528\u4e8e\u5206\u5e03\u5f0f\u67e5\u8be2\u6267\u884c\uff09\u3002 \u5bf9\u4e8e\u8fd9\u4e9b\u7c7b\u578b\u7684\u67e5\u8be2\uff0c\u6709\u5173\u7236\u67e5\u8be2\u7684\u4fe1\u606f\u663e\u793a\u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"initial_*")," \u5217\u3002")),(0,r.kt)("p",null,"\u6bcf\u4e2a\u67e5\u8be2\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"query_log")," \u8868\u4e2d\u521b\u5efa\u4e00\u6216\u4e24\u884c\u8bb0\u5f55\uff0c\u8fd9\u53d6\u51b3\u4e8e\u67e5\u8be2\u7684\u72b6\u6001\uff08\u89c1 ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," \u5217\uff09:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5982\u679c\u67e5\u8be2\u6267\u884c\u6210\u529f\uff0c\u4f1a\u521b\u5efatype\u5206\u522b\u4e3a",(0,r.kt)("inlineCode",{parentName:"li"},"QueryStart")," \u548c ",(0,r.kt)("inlineCode",{parentName:"li"},"QueryFinish")," \u7684\u4e24\u884c\u8bb0\u5f55\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5982\u679c\u5728\u67e5\u8be2\u5904\u7406\u8fc7\u7a0b\u4e2d\u53d1\u751f\u9519\u8bef\uff0c\u4f1a\u521b\u5efatype\u5206\u522b\u4e3a",(0,r.kt)("inlineCode",{parentName:"li"},"QueryStart")," \u548c ",(0,r.kt)("inlineCode",{parentName:"li"},"ExceptionWhileProcessing")," \u7684\u4e24\u884c\u8bb0\u5f55\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5982\u679c\u5728\u542f\u52a8\u67e5\u8be2\u4e4b\u524d\u53d1\u751f\u9519\u8bef\uff0c\u5219\u521b\u5efa\u4e00\u884ctype\u4e3a",(0,r.kt)("inlineCode",{parentName:"li"},"ExceptionBeforeStart")," \u7684\u8bb0\u5f55\u3002")),(0,r.kt)("p",null,"\u5217:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"type")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/enum"},"Enum8"),") \u2014 \u6267\u884c\u67e5\u8be2\u65f6\u7684\u4e8b\u4ef6\u7c7b\u578b. \u503c:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"'QueryStart' = 1")," \u2014 \u67e5\u8be2\u6210\u529f\u542f\u52a8."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"'QueryFinish' = 2")," \u2014 \u67e5\u8be2\u6210\u529f\u5b8c\u6210."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"'ExceptionBeforeStart' = 3")," \u2014 \u67e5\u8be2\u6267\u884c\u524d\u6709\u5f02\u5e38."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"'ExceptionWhileProcessing' = 4")," \u2014 \u67e5\u8be2\u6267\u884c\u671f\u95f4\u6709\u5f02\u5e38."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"event_date")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/date"},"Date"),") \u2014 \u67e5\u8be2\u5f00\u59cb\u65e5\u671f."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"event_time")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/datetime"},"DateTime"),") \u2014 \u67e5\u8be2\u5f00\u59cb\u65f6\u95f4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"event_time_microseconds")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/datetime64"},"DateTime64"),") \u2014 \u67e5\u8be2\u5f00\u59cb\u65f6\u95f4\uff08\u6beb\u79d2\u7cbe\u5ea6\uff09."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"query_start_time")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/datetime"},"DateTime"),") \u2014 \u67e5\u8be2\u6267\u884c\u7684\u5f00\u59cb\u65f6\u95f4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"query_start_time_microseconds")," (DateTime64) \u2014 \u67e5\u8be2\u6267\u884c\u7684\u5f00\u59cb\u65f6\u95f4\uff08\u6beb\u79d2\u7cbe\u5ea6\uff09."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"query_duration_ms")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/int-uint#uint-ranges"},"UInt64"),") \u2014 \u67e5\u8be2\u6d88\u8017\u7684\u65f6\u95f4\uff08\u6beb\u79d2\uff09."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"read_rows")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/int-uint#uint-ranges"},"UInt64"),") \u2014 \u4ece\u53c2\u4e0e\u4e86\u67e5\u8be2\u7684\u6240\u6709\u8868\u548c\u8868\u51fd\u6570\u8bfb\u53d6\u7684\u603b\u884c\u6570. \u5305\u62ec\uff1a\u666e\u901a\u7684\u5b50\u67e5\u8be2,  ",(0,r.kt)("inlineCode",{parentName:"li"},"IN")," \u548c ",(0,r.kt)("inlineCode",{parentName:"li"},"JOIN"),"\u7684\u5b50\u67e5\u8be2. \u5bf9\u4e8e\u5206\u5e03\u5f0f\u67e5\u8be2 ",(0,r.kt)("inlineCode",{parentName:"li"},"read_rows")," \u5305\u62ec\u5728\u6240\u6709\u526f\u672c\u4e0a\u8bfb\u53d6\u7684\u884c\u603b\u6570\u3002 \u6bcf\u4e2a\u526f\u672c\u53d1\u9001\u5b83\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"read_rows")," \u503c\uff0c\u5e76\u4e14\u67e5\u8be2\u7684\u670d\u52a1\u5668-\u53d1\u8d77\u65b9\u6c47\u603b\u6240\u6709\u63a5\u6536\u5230\u7684\u548c\u672c\u5730\u7684\u503c\u3002 \u7f13\u5b58\u5377\u4e0d\u4f1a\u5f71\u54cd\u6b64\u503c\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"read_bytes")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/int-uint#uint-ranges"},"UInt64"),") \u2014 \u4ece\u53c2\u4e0e\u4e86\u67e5\u8be2\u7684\u6240\u6709\u8868\u548c\u8868\u51fd\u6570\u8bfb\u53d6\u7684\u603b\u5b57\u8282\u6570. \u5305\u62ec\uff1a\u666e\u901a\u7684\u5b50\u67e5\u8be2,  ",(0,r.kt)("inlineCode",{parentName:"li"},"IN")," \u548c ",(0,r.kt)("inlineCode",{parentName:"li"},"JOIN"),"\u7684\u5b50\u67e5\u8be2. \u5bf9\u4e8e\u5206\u5e03\u5f0f\u67e5\u8be2 ",(0,r.kt)("inlineCode",{parentName:"li"},"read_bytes")," \u5305\u62ec\u5728\u6240\u6709\u526f\u672c\u4e0a\u8bfb\u53d6\u7684\u5b57\u8282\u603b\u6570\u3002 \u6bcf\u4e2a\u526f\u672c\u53d1\u9001\u5b83\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"read_bytes")," \u503c\uff0c\u5e76\u4e14\u67e5\u8be2\u7684\u670d\u52a1\u5668-\u53d1\u8d77\u65b9\u6c47\u603b\u6240\u6709\u63a5\u6536\u5230\u7684\u548c\u672c\u5730\u7684\u503c\u3002 \u7f13\u5b58\u5377\u4e0d\u4f1a\u5f71\u54cd\u6b64\u503c\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"written_rows")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/int-uint#uint-ranges"},"UInt64"),") \u2014 \u5bf9\u4e8e ",(0,r.kt)("inlineCode",{parentName:"li"},"INSERT")," \u67e5\u8be2\uff0c\u4e3a\u5199\u5165\u7684\u884c\u6570\u3002 \u5bf9\u4e8e\u5176\u4ed6\u67e5\u8be2\uff0c\u503c\u4e3a0\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"written_bytes")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/int-uint#uint-ranges"},"UInt64"),") \u2014 \u5bf9\u4e8e ",(0,r.kt)("inlineCode",{parentName:"li"},"INSERT")," \u67e5\u8be2\u65f6\uff0c\u4e3a\u5199\u5165\u7684\u5b57\u8282\u6570\u3002 \u5bf9\u4e8e\u5176\u4ed6\u67e5\u8be2\uff0c\u503c\u4e3a0\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"result_rows")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/int-uint#uint-ranges"},"UInt64"),") \u2014 ",(0,r.kt)("inlineCode",{parentName:"li"},"SELECT")," \u67e5\u8be2\u7ed3\u679c\u7684\u884c\u6570\uff0c\u6216",(0,r.kt)("inlineCode",{parentName:"li"},"INSERT")," \u7684\u884c\u6570\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"result_bytes")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/int-uint#uint-ranges"},"UInt64"),") \u2014 \u5b58\u50a8\u67e5\u8be2\u7ed3\u679c\u7684RAM\u91cf."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"memory_usage")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/int-uint#uint-ranges"},"UInt64"),") \u2014 \u67e5\u8be2\u4f7f\u7528\u7684\u5185\u5b58."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"query")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/string"},"String"),") \u2014 \u67e5\u8be2\u8bed\u53e5."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"exception")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/string"},"String"),") \u2014 \u5f02\u5e38\u4fe1\u606f."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"exception_code")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/int-uint"},"Int32"),") \u2014 \u5f02\u5e38\u7801."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"stack_trace")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/string"},"String"),") \u2014 ",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Stack_trace"},"Stack Trace"),". \u5982\u679c\u67e5\u8be2\u6210\u529f\u5b8c\u6210\uff0c\u5219\u4e3a\u7a7a\u5b57\u7b26\u4e32\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"is_initial_query")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/int-uint"},"UInt8"),") \u2014 \u67e5\u8be2\u7c7b\u578b. \u53ef\u80fd\u7684\u503c:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"1 \u2014 \u5ba2\u6237\u7aef\u53d1\u8d77\u7684\u67e5\u8be2."),(0,r.kt)("li",{parentName:"ul"},"0 \u2014 \u7531\u53e6\u4e00\u4e2a\u67e5\u8be2\u53d1\u8d77\u7684\uff0c\u4f5c\u4e3a\u5206\u5e03\u5f0f\u67e5\u8be2\u7684\u4e00\u90e8\u5206."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"user")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/string"},"String"),") \u2014 \u53d1\u8d77\u67e5\u8be2\u7684\u7528\u6237."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"query_id")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/string"},"String"),") \u2014 \u67e5\u8be2ID."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"address")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/domains/ipv6"},"IPv6"),") \u2014 \u53d1\u8d77\u67e5\u8be2\u7684\u5ba2\u6237\u7aefIP\u5730\u5740."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"port")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/int-uint"},"UInt16"),") \u2014 \u53d1\u8d77\u67e5\u8be2\u7684\u5ba2\u6237\u7aef\u7aef\u53e3."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"initial_user")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/string"},"String"),") \u2014 \u521d\u59cb\u67e5\u8be2\u7684\u7528\u6237\u540d\uff08\u7528\u4e8e\u5206\u5e03\u5f0f\u67e5\u8be2\u6267\u884c\uff09."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"initial_query_id")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/string"},"String"),") \u2014 \u8fd0\u884c\u521d\u59cb\u67e5\u8be2\u7684ID\uff08\u7528\u4e8e\u5206\u5e03\u5f0f\u67e5\u8be2\u6267\u884c\uff09."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"initial_address")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/domains/ipv6"},"IPv6"),") \u2014 \u8fd0\u884c\u7236\u67e5\u8be2\u7684IP\u5730\u5740."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"initial_port")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/int-uint"},"UInt16"),") \u2014 \u53d1\u8d77\u7236\u67e5\u8be2\u7684\u5ba2\u6237\u7aef\u7aef\u53e3."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"interface")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/int-uint"},"UInt8"),") \u2014 \u53d1\u8d77\u67e5\u8be2\u7684\u63a5\u53e3. \u53ef\u80fd\u7684\u503c:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"1 \u2014 TCP."),(0,r.kt)("li",{parentName:"ul"},"2 \u2014 HTTP."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"os_user")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/string"},"String"),") \u2014 \u8fd0\u884c ",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/interfaces/cli"},"clickhouse-client"),"\u7684\u64cd\u4f5c\u7cfb\u7edf\u7528\u6237\u540d."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"client_hostname")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/string"},"String"),") \u2014 \u8fd0\u884c",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/interfaces/cli"},"clickhouse-client")," \u6216\u5176\u4ed6TCP\u5ba2\u6237\u7aef\u7684\u673a\u5668\u7684\u4e3b\u673a\u540d\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"client_name")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/string"},"String"),") \u2014 ",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/interfaces/cli"},"clickhouse-client")," \u6216\u5176\u4ed6TCP\u5ba2\u6237\u7aef\u7684\u540d\u79f0\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"client_revision")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/int-uint"},"UInt32"),") \u2014 ",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/interfaces/cli"},"clickhouse-client")," \u6216\u5176\u4ed6TCP\u5ba2\u6237\u7aef\u7684Revision\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"client_version_major")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/int-uint"},"UInt32"),") \u2014 ",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/interfaces/cli"},"clickhouse-client")," \u6216\u5176\u4ed6TCP\u5ba2\u6237\u7aef\u7684Major version\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"client_version_minor")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/int-uint"},"UInt32"),") \u2014 ",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/interfaces/cli"},"clickhouse-client")," \u6216\u5176\u4ed6TCP\u5ba2\u6237\u7aef\u7684Minor version\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"client_version_patch")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/int-uint"},"UInt32"),") \u2014 ",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/interfaces/cli"},"clickhouse-client")," \u6216\u5176\u4ed6TCP\u5ba2\u6237\u7aef\u7684Patch component\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"http_method")," (UInt8) \u2014 \u53d1\u8d77\u67e5\u8be2\u7684HTTP\u65b9\u6cd5. \u53ef\u80fd\u503c:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"0 \u2014 TCP\u63a5\u53e3\u7684\u67e5\u8be2."),(0,r.kt)("li",{parentName:"ul"},"1 \u2014 ",(0,r.kt)("inlineCode",{parentName:"li"},"GET")),(0,r.kt)("li",{parentName:"ul"},"2 \u2014 ",(0,r.kt)("inlineCode",{parentName:"li"},"POST")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"http_user_agent")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/string"},"String"),") \u2014 The ",(0,r.kt)("inlineCode",{parentName:"li"},"UserAgent")," The UserAgent header passed in the HTTP request\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"quota_key")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/string"},"String"),") \u2014 \u5728",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/operations/quotas"},"quotas")," \u914d\u7f6e\u91cc\u8bbe\u7f6e\u7684\u201cquota key\u201d \uff08\u89c1 ",(0,r.kt)("inlineCode",{parentName:"li"},"keyed"),")."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"revision")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/int-uint"},"UInt32"),") \u2014 ClickHouse revision."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ProfileEvents")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/array"},"Map(String, UInt64))"),") \u2014 Counters that measure different metrics. The description of them could be found in the table ",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/operations/system-tables/events#system_tables-events"},"\u7cfb\u7edf\u3002\u6d3b\u52a8")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Settings")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/array"},"Map(String, String)"),") \u2014 Names of settings that were changed when the client ran the query. To enable logging changes to settings, set the ",(0,r.kt)("inlineCode",{parentName:"li"},"log_query_settings")," \u53c2\u6570\u4e3a1\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"thread_ids")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/array"},"Array(UInt64)"),") \u2014 \u53c2\u4e0e\u67e5\u8be2\u7684\u7ebf\u7a0b\u6570."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Settings.Names")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/array"},"Array\uff08String)"),") \u2014 \u5ba2\u6237\u7aef\u8fd0\u884c\u67e5\u8be2\u65f6\u66f4\u6539\u7684\u8bbe\u7f6e\u7684\u540d\u79f0\u3002 \u8981\u542f\u7528\u5bf9\u8bbe\u7f6e\u7684\u65e5\u5fd7\u8bb0\u5f55\u66f4\u6539\uff0c\u8bf7\u5c06log_query_settings\u53c2\u6570\u8bbe\u7f6e\u4e3a1\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Settings.Values")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/array"},"Array\uff08String)"),") \u2014 ",(0,r.kt)("inlineCode",{parentName:"li"},"Settings.Names")," \u5217\u4e2d\u5217\u51fa\u7684\u8bbe\u7f6e\u7684\u503c\u3002\n",(0,r.kt)("strong",{parentName:"li"},"\u793a\u4f8b"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM system.query_log LIMIT 1 FORMAT Vertical;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Row 1:\n\u2500\u2500\u2500\u2500\u2500\u2500\ntype:                 QueryStart\nevent_date:           2020-05-13\nevent_time:           2020-05-13 14:02:28\nquery_start_time:     2020-05-13 14:02:28\nquery_duration_ms:    0\nread_rows:            0\nread_bytes:           0\nwritten_rows:         0\nwritten_bytes:        0\nresult_rows:          0\nresult_bytes:         0\nmemory_usage:         0\nquery:                SELECT 1\nexception_code:       0\nexception:\nstack_trace:\nis_initial_query:     1\nuser:                 default\nquery_id:             5e834082-6f6d-4e34-b47b-cd1934f4002a\naddress:              ::ffff:127.0.0.1\nport:                 57720\ninitial_user:         default\ninitial_query_id:     5e834082-6f6d-4e34-b47b-cd1934f4002a\ninitial_address:      ::ffff:127.0.0.1\ninitial_port:         57720\ninterface:            1\nos_user:              bayonet\nclient_hostname:      clickhouse.ru-central1.internal\nclient_name:          ClickHouse client\nclient_revision:      54434\nclient_version_major: 20\nclient_version_minor: 4\nclient_version_patch: 1\nhttp_method:          0\nhttp_user_agent:\nquota_key:\nrevision:             54434\nthread_ids:           []\nProfileEvents:        {'Query':1,'SelectQuery':1,'ReadCompressedBytes':36,'CompressedReadBufferBlocks':1,'CompressedReadBufferBytes':10,'IOBufferAllocs':1,'IOBufferAllocBytes':89,'ContextLock':15,'RWLockAcquiredReadLocks':1}\nSettings:             {'background_pool_size':'32','load_balancing':'random','allow_suspicious_low_cardinality_types':'1','distributed_aggregation_memory_efficient':'1','skip_unavailable_shards':'1','log_queries':'1','max_bytes_before_external_group_by':'20000000000','max_bytes_before_external_sort':'20000000000','allow_introspection_functions':'1'}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u53e6\u8bf7\u53c2\u9605")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/zh/operations/system-tables/query_thread_log#system_tables-query_thread_log"},"system.query_thread_log")," \u2014 \u8fd9\u4e2a\u8868\u5305\u542b\u4e86\u6bcf\u4e2a\u67e5\u8be2\u6267\u884c\u7ebf\u7a0b\u7684\u4fe1\u606f")))}c.isMDXComponent=!0}}]);