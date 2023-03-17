"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[50631],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,f=u["".concat(i,".").concat(d)]||u[d]||m[d]||s;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,l=new Array(s);l[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<s;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},10510:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const s={slug:"/en/operations/system-tables/crash-log"},l="crash_log",o={unversionedId:"en/operations/system-tables/crash-log",id:"en/operations/system-tables/crash-log",title:"crash_log",description:"Contains information about stack traces for fatal errors. The table does not exist in the database by default, it is created only when fatal errors occur.",source:"@site/docs/en/operations/system-tables/crash-log.md",sourceDirName:"en/operations/system-tables",slug:"/en/operations/system-tables/crash-log",permalink:"/docs/en/operations/system-tables/crash-log",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/operations/system-tables/crash-log.md",tags:[],version:"current",frontMatter:{slug:"/en/operations/system-tables/crash-log"},sidebar:"docs",previous:{title:"contributors",permalink:"/docs/en/operations/system-tables/contributors"},next:{title:"current_roles",permalink:"/docs/en/operations/system-tables/current-roles"}},i={},c=[],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"crash_log"},"crash_log"),(0,a.kt)("p",null,"Contains information about stack traces for fatal errors. The table does not exist in the database by default, it is created only when fatal errors occur."),(0,a.kt)("p",null,"Columns:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"event_date")," (",(0,a.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/datetime"},"DateTime"),") \u2014 Date of the event."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"event_time")," (",(0,a.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/datetime"},"DateTime"),") \u2014 Time of the event."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"timestamp_ns")," (",(0,a.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 Timestamp of the event with nanoseconds."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"signal")," (",(0,a.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"Int32"),") \u2014 Signal number."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"thread_id")," (",(0,a.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 Thread ID."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"query_id")," (",(0,a.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/string"},"String"),") \u2014 Query ID."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"trace")," (",(0,a.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/array"},"Array"),"(",(0,a.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 Stack trace at the moment of crash. Each element is a virtual memory address inside ClickHouse server process."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"trace_full")," (",(0,a.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/array"},"Array"),"(",(0,a.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/string"},"String"),")) \u2014 Stack trace at the moment of crash. Each element contains a called method inside ClickHouse server process."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"version")," (",(0,a.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/string"},"String"),") \u2014 ClickHouse server version."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"revision")," (",(0,a.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt32"),") \u2014 ClickHouse server revision."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"build_id")," (",(0,a.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/string"},"String"),") \u2014 BuildID that is generated by compiler.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("p",null,"Query:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM system.crash_log ORDER BY event_time DESC LIMIT 1;\n")),(0,a.kt)("p",null,"Result (not full):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"Row 1:\n\u2500\u2500\u2500\u2500\u2500\u2500\nevent_date:   2020-10-14\nevent_time:   2020-10-14 15:47:40\ntimestamp_ns: 1602679660271312710\nsignal:       11\nthread_id:    23624\nquery_id:     428aab7c-8f5c-44e9-9607-d16b44467e69\ntrace:        [188531193,...]\ntrace_full:   ['3. DB::(anonymous namespace)::FunctionFormatReadableTimeDelta::executeImpl(std::__1::vector<DB::ColumnWithTypeAndName, std::__1::allocator<DB::ColumnWithTypeAndName> >&, std::__1::vector<unsigned long, std::__1::allocator<unsigned long> > const&, unsigned long, unsigned long) const @ 0xb3cc1f9 in /home/username/work/ClickHouse/build/programs/clickhouse',...]\nversion:      ClickHouse 20.11.1.1\nrevision:     54442\nbuild_id:\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"See also")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/en/operations/system-tables/trace_log"},"trace_log")," system table")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/system-tables/crash-log"},"Original article")))}m.isMDXComponent=!0}}]);