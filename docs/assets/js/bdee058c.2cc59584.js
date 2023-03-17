"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[86303],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(a),d=r,k=u["".concat(o,".").concat(d)]||u[d]||c[d]||i;return a?n.createElement(k,l(l({ref:t},m),{},{components:a})):n.createElement(k,l({ref:t},m))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[u]="string"==typeof e?e:r,l[1]=s;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},28077:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={slug:"/zh/operations/system-tables/query_thread_log"},l="\u7cfb\u7edf\u3002query_thread_log",s={unversionedId:"zh/operations/system-tables/query_thread_log",id:"zh/operations/system-tables/query_thread_log",title:"\u7cfb\u7edf\u3002query_thread_log",description:"systemtables-querythread_log}",source:"@site/docs/zh/operations/system-tables/query_thread_log.md",sourceDirName:"zh/operations/system-tables",slug:"/zh/operations/system-tables/query_thread_log",permalink:"/docs/zh/operations/system-tables/query_thread_log",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/operations/system-tables/query_thread_log.md",tags:[],version:"current",frontMatter:{slug:"/zh/operations/system-tables/query_thread_log"},sidebar:"chinese",previous:{title:"system.query_log",permalink:"/docs/zh/operations/system-tables/query_log"},next:{title:"system.query_views_log",permalink:"/docs/zh/operations/system-tables/query_views_log"}},o={},p=[],m={toc:p},u="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"system_tables-query_thread_log"},"\u7cfb\u7edf\u3002query_thread_log"),(0,r.kt)("p",null,"\u5305\u542b\u6709\u5173\u6267\u884c\u67e5\u8be2\u7684\u7ebf\u7a0b\u7684\u4fe1\u606f\uff0c\u4f8b\u5982\uff0c\u7ebf\u7a0b\u540d\u79f0\u3001\u7ebf\u7a0b\u5f00\u59cb\u65f6\u95f4\u3001\u67e5\u8be2\u5904\u7406\u7684\u6301\u7eed\u65f6\u95f4\u3002"),(0,r.kt)("p",null,"\u5f00\u542f\u65e5\u5fd7\u529f\u80fd:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5728\u914d\u7f6e\u53c2\u6570 ",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/operations/server-configuration-parameters/settings#server_configuration_parameters-query_thread_log"},"query_thread_log")," \u90e8\u5206\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u8bbe\u7f6e ",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/operations/settings/settings#settings-log-query-threads"},"log_query_threads")," \u4e3a1\u3002")),(0,r.kt)("p",null,"\u6570\u636e\u4ece\u7f13\u5b58\u5199\u5165\u6570\u636e\u8868\u5468\u671f\u65f6\u95f4\u53c2\u6570 ",(0,r.kt)("inlineCode",{parentName:"p"},"flush_interval_milliseconds")," \u4f4d\u4e8e ",(0,r.kt)("a",{parentName:"p",href:"/docs/zh/operations/server-configuration-parameters/settings#server_configuration_parameters-query_thread_log"},"query_thread_log")," \u670d\u52a1\u5668\u8bbe\u7f6e\u90e8\u5206\u3002\u5982\u679c\u9700\u8981\u5f3a\u5236\u4ece\u7f13\u5b58\u5199\u5165\u6570\u636e\u8868\uff0c\u8bf7\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/statements/system#query_language-system-flush_logs"},"SYSTEM FLUSH LOGS")," \u67e5\u8be2\u8bf7\u6c42\u3002"),(0,r.kt)("p",null,"ClickHouse\u4e0d\u4f1a\u81ea\u52a8\u4ece\u8868\u4e2d\u5220\u9664\u6570\u636e\u3002 \u6b32\u4e86\u89e3\u66f4\u591a\u8be6\u60c5\uff0c\u8bf7\u53c2\u7167 ",(0,r.kt)("a",{parentName:"p",href:"/docs/zh/operations/system-tables/#system-tables-introduction"},"\u4ecb\u7ecd"),"\u3002"),(0,r.kt)("p",null,"\u5217:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"event_date")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/date"},"\u65e5\u671f"),") \u2014 \u8be5\u67e5\u8be2\u7ebf\u7a0b\u6267\u884c\u5b8c\u6210\u7684\u65e5\u671f\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"event_time")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/datetime"},"\u65e5\u671f\u65f6\u95f4"),") \u2014 \u8be5\u67e5\u8be2\u7ebf\u7a0b\u6267\u884c\u5b8c\u6210\u7684\u65f6\u95f4\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"query_start_time")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/datetime"},"\u65e5\u671f\u65f6\u95f4"),") \u2014 \u67e5\u8be2\u7684\u5f00\u59cb\u65f6\u95f4\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"query_duration_ms")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/int-uint#uint-ranges"},"UInt64"),") \u2014 \u67e5\u8be2\u6267\u884c\u6301\u7eed\u7684\u65f6\u95f4\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"read_rows")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/int-uint#uint-ranges"},"UInt64"),") \u2014 \u8bfb\u53d6\u7684\u884c\u6570\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"read_bytes")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/int-uint#uint-ranges"},"UInt64"),") \u2014 \u8bfb\u53d6\u7684\u5b57\u8282\u6570\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"written_rows")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/int-uint#uint-ranges"},"UInt64"),") \u2014 \u5bf9\u4e8e ",(0,r.kt)("inlineCode",{parentName:"li"},"INSERT")," \u67e5\u8be2\uff0c\u5199\u5165\u7684\u884c\u6570\u3002 \u5bf9\u4e8e\u5176\u4ed6\u67e5\u8be2\uff0c\u4e3a0\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"written_bytes")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/int-uint#uint-ranges"},"UInt64"),") \u2014 \u5bf9\u4e8e ",(0,r.kt)("inlineCode",{parentName:"li"},"INSERT")," \u67e5\u8be2\uff0c\u5199\u5165\u7684\u5b57\u8282\u6570\u3002 \u5bf9\u4e8e\u5176\u4ed6\u67e5\u8be2\uff0c\u4e3a0\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"memory_usage")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/int-uint"},"Int64"),") \u2014 \u5728\u7ebf\u7a0b\u4e0a\u4e0b\u6587\uff0c\u5206\u914d\u7684\u5185\u5b58\u548c\u7a7a\u95f2\u5185\u5b58\u4e4b\u5dee\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"peak_memory_usage")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/int-uint"},"Int64"),") \u2014 \u5728\u7ebf\u7a0b\u4e0a\u4e0b\u6587\uff0c\u5206\u914d\u7684\u5185\u5b58\u548c\u7a7a\u95f2\u5185\u5b58\u4e4b\u5dee\u7684\u6700\u5927\u503c\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"thread_name")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/string"},"\u5b57\u7b26\u4e32"),") \u2014 \u7ebf\u7a0b\u540d\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"thread_number")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/int-uint"},"UInt32"),") \u2014 \u5185\u90e8\u7ebf\u7a0bID\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"thread_id")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/int-uint"},"Int32"),") \u2014 \u7ebf\u7a0bID\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"master_thread_id")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/int-uint#uint-ranges"},"UInt64"),") \u2014 OS\u521d\u59cb\u7ebf\u7a0b\u7684\u521d\u59cbID\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"query")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/string"},"\u5b57\u7b26\u4e32"),") \u2014 \u67e5\u8be2\u8bed\u53e5\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"is_initial_query")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/int-uint#uint-ranges"},"UInt8"),") \u2014 \u67e5\u8be2\u7c7b\u578b\uff0c\u53ef\u80fd\u7684\u503c\uff1a",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"1 \u2014 \u7531\u7528\u6237\u53d1\u8d77\u7684\u67e5\u8be2\u3002"),(0,r.kt)("li",{parentName:"ul"},"0 \u2014 \u7531\u5176\u4ed6\u67e5\u8be2\u53d1\u8d77\u7684\u5206\u5e03\u5f0f\u67e5\u8be2\u3002"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"user")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/string"},"\u5b57\u7b26\u4e32"),") \u2014 \u53d1\u8d77\u67e5\u8be2\u7684\u7528\u6237\u540d\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"query_id")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/string"},"\u5b57\u7b26\u4e32"),") \u2014 \u67e5\u8be2\u7684ID\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"address")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/domains/ipv6"},"IPv6"),") \u2014 \u53d1\u8d77\u67e5\u8be2\u7684IP\u5730\u5740\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"port")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/int-uint#uint-ranges"},"UInt16"),") \u2014 \u53d1\u8d77\u67e5\u8be2\u7684\u7aef\u53e3\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"initial_user")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/string"},"\u5b57\u7b26\u4e32"),") \u2014 \u9996\u6b21\u53d1\u8d77\u67e5\u8be2\u7684\u7528\u6237\u540d\uff08\u5bf9\u4e8e\u5206\u5e03\u5f0f\u67e5\u8be2\uff09\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"initial_query_id")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/string"},"\u5b57\u7b26\u4e32"),") \u2014 \u9996\u6b21\u53d1\u8d77\u67e5\u8be2\u7684ID\uff08\u5bf9\u4e8e\u5206\u5e03\u5f0f\u67e5\u8be2\uff09\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"initial_address")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/domains/ipv6"},"IPv6"),") \u2014 \u53d1\u8d77\u8be5\u67e5\u8be2\u7684\u7236\u67e5\u8be2IP\u5730\u5740\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"initial_port")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/int-uint#uint-ranges"},"UInt16"),") \u2014 \u53d1\u8d77\u8be5\u67e5\u8be2\u7684\u7236\u67e5\u8be2\u7aef\u53e3\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"interface")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/int-uint#uint-ranges"},"UInt8"),") \u2014 \u53d1\u8d77\u67e5\u8be2\u7684\u754c\u9762\uff0c\u53ef\u80fd\u7684\u503c:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"1 \u2014 TCP."),(0,r.kt)("li",{parentName:"ul"},"2 \u2014 HTTP."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"os_user")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/string"},"\u5b57\u7b26\u4e32"),") \u2014 \u4f7f\u7528 ",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/interfaces/cli"},"clickhouse-client")," \u7684\u7cfb\u7edf\u7528\u6237\u540d\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"client_hostname")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/string"},"\u5b57\u7b26\u4e32"),") \u2014 \u8fd0\u884c ",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/interfaces/cli"},"clickhouse-client")," \u6216\u53e6\u4e00\u4e2aTCP\u5ba2\u6237\u7aef\u7684\u4e3b\u673a\u540d\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"client_name")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/string"},"\u5b57\u7b26\u4e32"),") \u2014 ",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/interfaces/cli"},"clickhouse-client")," \u6216\u53e6\u4e00\u4e2aTCP\u5ba2\u6237\u7aef\u7684\u540d\u79f0\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"client_revision")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/int-uint"},"UInt32"),") \u2014 ",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/interfaces/cli"},"clickhouse-client")," \u6216\u53e6\u4e00\u4e2aTCP\u5ba2\u6237\u7aef\u7684\u4fee\u8ba2\u53f7\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"client_version_major")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/int-uint"},"UInt32"),") \u2014 ",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/interfaces/cli"},"clickhouse-client")," \u6216\u53e6\u4e00\u4e2aTCP\u5ba2\u6237\u7aef\u7684\u4e3b\u7248\u672c\u53f7\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"client_version_minor")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/int-uint"},"UInt32"),") \u2014 ",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/interfaces/cli"},"clickhouse-client")," \u6216\u53e6\u4e00\u4e2aTCP\u5ba2\u6237\u7aef\u7684\u6b21\u7248\u672c\u53f7\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"client_version_patch")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/int-uint"},"UInt32"),") \u2014 ",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/interfaces/cli"},"clickhouse-client")," \u6216\u53e6\u4e00\u4e2aTCP\u5ba2\u6237\u7aef\u7684\u8865\u4e01\u7248\u672c\u53f7\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"http_method")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/int-uint#uint-ranges"},"UInt8"),") \u2014 \u53d1\u8d77\u67e5\u8be2\u7684HTTP\u65b9\u6cd5\uff0c\u53ef\u80fd\u7684\u503c\uff1a",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"0 \u2014 \u67e5\u8be2\u901a\u8fc7TCP\u754c\u9762\u53d1\u8d77\u3002"),(0,r.kt)("li",{parentName:"ul"},"1 \u2014 ",(0,r.kt)("inlineCode",{parentName:"li"},"GET")," \u65b9\u6cd5\u88ab\u4f7f\u7528\u3002"),(0,r.kt)("li",{parentName:"ul"},"2 \u2014 ",(0,r.kt)("inlineCode",{parentName:"li"},"POST")," \u65b9\u6cd5\u88ab\u4f7f\u7528\u3002"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"http_user_agent")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/string"},"\u5b57\u7b26\u4e32"),") \u2014 ",(0,r.kt)("inlineCode",{parentName:"li"},"UserAgent")," HTTP\u8bf7\u6c42\u4e2d\u4f20\u9012\u7684UA\u8868\u5934\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"quota_key")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/string"},"\u5b57\u7b26\u4e32"),") \u2014  \u201cquota key\u201d \u5728 ",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/operations/quotas"},"\u914d\u989d")," \u8bbe\u7f6e\u5185\uff08\u8be6\u89c1 ",(0,r.kt)("inlineCode",{parentName:"li"},"keyed"),")."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"revision")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/int-uint"},"UInt32"),") \u2014 ClickHouse \u4fee\u8ba2\u7248\u672c\u53f7."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ProfileEvents")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/array"},"\u6570\u7ec4\uff08\u5b57\u7b26\u4e32, UInt64)"),") \u2014 \u5bf9\u4e8e\u8be5\u7ebf\u7a0b\u7684\u591a\u4e2a\u6307\u6807\u8ba1\u6570\u5668\u3002\u8fd9\u4e00\u9879\u53ef\u4ee5\u53c2\u8003 ",(0,r.kt)("a",{parentName:"li",href:"#system_tables-events"},"system.events"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"}," SELECT * FROM system.query_thread_log LIMIT 1 FORMAT Vertical\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Row 1:\n\u2500\u2500\u2500\u2500\u2500\u2500\nevent_date:           2020-05-13\nevent_time:           2020-05-13 14:02:28\nquery_start_time:     2020-05-13 14:02:28\nquery_duration_ms:    0\nread_rows:            1\nread_bytes:           1\nwritten_rows:         0\nwritten_bytes:        0\nmemory_usage:         0\npeak_memory_usage:    0\nthread_name:          QueryPipelineEx\nthread_id:            28952\nmaster_thread_id:     28924\nquery:                SELECT 1\nis_initial_query:     1\nuser:                 default\nquery_id:             5e834082-6f6d-4e34-b47b-cd1934f4002a\naddress:              ::ffff:127.0.0.1\nport:                 57720\ninitial_user:         default\ninitial_query_id:     5e834082-6f6d-4e34-b47b-cd1934f4002a\ninitial_address:      ::ffff:127.0.0.1\ninitial_port:         57720\ninterface:            1\nos_user:              bayonet\nclient_hostname:      clickhouse.ru-central1.internal\nclient_name:          ClickHouse client\nclient_revision:      54434\nclient_version_major: 20\nclient_version_minor: 4\nclient_version_patch: 1\nhttp_method:          0\nhttp_user_agent:\nquota_key:\nrevision:             54434\nProfileEvents:        {'Query':1,'SelectQuery':1,'ReadCompressedBytes':36,'CompressedReadBufferBlocks':1,'CompressedReadBufferBytes':10,'IOBufferAllocs':1,'IOBufferAllocBytes':89,'ContextLock':15,'RWLockAcquiredReadLocks':1}\n...\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u53e6\u8bf7\u53c2\u9605")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/zh/operations/system-tables/query_log#system_tables-query_log"},"system.query_log")," \u2014 ",(0,r.kt)("inlineCode",{parentName:"li"},"query_log")," \u7cfb\u7edf\u8868\u63cf\u8ff0\uff0c\u5176\u4e2d\u5305\u542b\u6709\u5173\u67e5\u8be2\u6267\u884c\u7684\u516c\u5171\u4fe1\u606f\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/zh/operations/system-tables/query_views_log#system_tables-query_views_log"},"system.query_views_log")," \u2014 \u8fd9\u4e2a\u8868\u5305\u542b\u5728\u67e5\u8be2\u7ebf\u7a0b\u4e2d\u4f7f\u7528\u7684\u5404\u4e2a\u89c6\u56fe\u7684\u4fe1\u606f\u3002")))}c.isMDXComponent=!0}}]);