"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[3988],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,k=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(k,i(i({ref:t},c),{},{components:r})):n.createElement(k,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},71996:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],s={slug:"/ru/operations/system-tables/trace_log"},l="system.trace_log",p={unversionedId:"ru/operations/system-tables/trace_log",id:"ru/operations/system-tables/trace_log",title:"system.trace_log",description:"systemtables-tracelog}",source:"@site/docs/ru/operations/system-tables/trace_log.md",sourceDirName:"ru/operations/system-tables",slug:"/ru/operations/system-tables/trace_log",permalink:"/docs/ru/operations/system-tables/trace_log",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/operations/system-tables/trace_log.md",tags:[],version:"current",frontMatter:{slug:"/ru/operations/system-tables/trace_log"},sidebar:"russia",previous:{title:"time_zones",permalink:"/docs/ru/operations/system-tables/time_zones"},next:{title:"system.users",permalink:"/docs/ru/operations/system-tables/users"}},c={},u=[],m={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"system_tables-trace_log"},"system.trace_log"),(0,o.kt)("p",null,"\u0421\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u044d\u043a\u0437\u0435\u043c\u043f\u043b\u044f\u0440\u044b \u0442\u0440\u0430\u0441\u0441\u0438\u0440\u043e\u0432\u043a\u0438 \u0441\u0442\u0435\u043a\u0430 \u0430\u0434\u0440\u0435\u0441\u043e\u0432 \u0432\u044b\u0437\u043e\u0432\u0430, \u0441\u043e\u0431\u0440\u0430\u043d\u043d\u044b\u0435 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0441\u0435\u043c\u043f\u043b\u0438\u0440\u0443\u044e\u0449\u0435\u0433\u043e \u043f\u0440\u043e\u0444\u0430\u0439\u043b\u0435\u0440\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432."),(0,o.kt)("p",null,"ClickHouse \u0441\u043e\u0437\u0434\u0430\u0435\u0442 \u044d\u0442\u0443 \u0442\u0430\u0431\u043b\u0438\u0446\u0443 \u043a\u043e\u0433\u0434\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0430 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 ",(0,o.kt)("a",{parentName:"p",href:"/docs/ru/operations/server-configuration-parameters/settings#server_configuration_parameters-trace_log"},"trace_log")," \u0432 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u043c \u0444\u0430\u0439\u043b\u0435 \u0441\u0435\u0440\u0432\u0435\u0440\u0430. \u0410 \u0442\u0430\u043a\u0436\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 ",(0,o.kt)("a",{parentName:"p",href:"/docs/ru/operations/settings/settings#query_profiler_real_time_period_ns"},"query_profiler_real_time_period_ns")," \u0438 ",(0,o.kt)("a",{parentName:"p",href:"/docs/ru/operations/settings/settings#query_profiler_cpu_time_period_ns"},"query_profiler_cpu_time_period_ns"),"."),(0,o.kt)("p",null,"\u0414\u043b\u044f \u0430\u043d\u0430\u043b\u0438\u0437\u0430 stack traces, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0438\u043d\u0442\u0440\u043e\u0441\u043f\u0435\u043a\u0446\u0438\u0438 ",(0,o.kt)("inlineCode",{parentName:"p"},"addressToLine"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"addressToSymbol")," \u0438 ",(0,o.kt)("inlineCode",{parentName:"p"},"demangle"),"."),(0,o.kt)("p",null,"\u0421\u0442\u043e\u043b\u0431\u0446\u044b:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"event_date"),"(",(0,o.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/date"},"Date"),") \u2014 \u0434\u0430\u0442\u0430 \u0432 \u043c\u043e\u043c\u0435\u043d\u0442 \u0441\u043d\u044f\u0442\u0438\u044f \u044d\u043a\u0437\u0435\u043c\u043f\u043b\u044f\u0440\u0430 \u0441\u0442\u044d\u043a\u0430 \u0430\u0434\u0440\u0435\u0441\u043e\u0432 \u0432\u044b\u0437\u043e\u0432\u0430.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"event_time"),"(",(0,o.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/datetime"},"DateTime"),") \u2014 \u0434\u0430\u0442\u0430 \u0438 \u0432\u0440\u0435\u043c\u044f \u0432 \u043c\u043e\u043c\u0435\u043d\u0442 \u0441\u043d\u044f\u0442\u0438\u044f \u044d\u043a\u0437\u0435\u043c\u043f\u043b\u044f\u0440\u0430 \u0441\u0442\u044d\u043a\u0430 \u0430\u0434\u0440\u0435\u0441\u043e\u0432 \u0432\u044b\u0437\u043e\u0432\u0430.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"event_time_microseconds")," (",(0,o.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/datetime64"},"DateTime64"),") \u2014 \u0434\u0430\u0442\u0430 \u0438 \u0432\u0440\u0435\u043c\u044f \u0432 \u043c\u043e\u043c\u0435\u043d\u0442 \u0441\u043d\u044f\u0442\u0438\u044f \u044d\u043a\u0437\u0435\u043c\u043f\u043b\u044f\u0440\u0430 \u0441\u0442\u044d\u043a\u0430 \u0430\u0434\u0440\u0435\u0441\u043e\u0432 \u0432\u044b\u0437\u043e\u0432\u0430 \u0441 \u0442\u043e\u0447\u043d\u043e\u0441\u0442\u044c\u044e \u0434\u043e \u043c\u0438\u043a\u0440\u043e\u0441\u0435\u043a\u0443\u043d\u0434.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"revision"),"(",(0,o.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/int-uint"},"UInt32"),") \u2014 \u0440\u0435\u0432\u0438\u0437\u0438\u044f \u0441\u0431\u043e\u0440\u043a\u0438 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 ClickHouse."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"\u0412\u043e \u0432\u0440\u0435\u043c\u044f \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c \u0447\u0435\u0440\u0435\u0437 `clickhouse-client`, \u0432\u044b \u0432\u0438\u0434\u0438\u0442\u0435 \u0441\u0442\u0440\u043e\u043a\u0443 \u043f\u043e\u0445\u043e\u0436\u0443\u044e \u043d\u0430 `Connected to ClickHouse server version 19.18.1 revision 54429.`. \u042d\u0442\u043e \u043f\u043e\u043b\u0435 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u043d\u043e\u043c\u0435\u0440 \u043f\u043e\u0441\u043b\u0435 `revision`, \u043d\u043e \u043d\u0435 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0441\u0442\u0440\u043e\u043a\u0443 \u043f\u043e\u0441\u043b\u0435 `version`.\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"trace_type"),"(",(0,o.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/enum"},"Enum8"),") \u2014 \u0442\u0438\u043f \u0442\u0440\u0430\u0441\u0441\u0438\u0440\u043e\u0432\u043a\u0438:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Real")," \u2014 \u0441\u0431\u043e\u0440 \u0442\u0440\u0430\u0441\u0441\u0438\u0440\u043e\u0432\u043e\u043a \u0441\u0442\u0435\u043a\u0430 \u0430\u0434\u0440\u0435\u0441\u043e\u0432 \u0432\u044b\u0437\u043e\u0432\u0430 \u043f\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0438 wall-clock."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"CPU")," \u2014 \u0441\u0431\u043e\u0440 \u0442\u0440\u0430\u0441\u0441\u0438\u0440\u043e\u0432\u043e\u043a \u0441\u0442\u0435\u043a\u0430 \u0430\u0434\u0440\u0435\u0441\u043e\u0432 \u0432\u044b\u0437\u043e\u0432\u0430 \u043f\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0438 CPU."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Memory")," \u2014 \u0441\u0431\u043e\u0440 \u0432\u044b\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0439 \u043f\u0430\u043c\u044f\u0442\u0438, \u043a\u043e\u0433\u0434\u0430 \u0435\u0435 \u0440\u0430\u0437\u043c\u0435\u0440 \u043f\u0440\u0435\u0432\u044b\u0448\u0430\u0435\u0442 \u043e\u0442\u043d\u043e\u0441\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0438\u043d\u043a\u0440\u0435\u043c\u0435\u043d\u0442."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"MemorySample")," \u2014 \u0441\u0431\u043e\u0440 \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u043e \u0432\u044b\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0439 \u043f\u0430\u043c\u044f\u0442\u0438."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"thread_number"),"(",(0,o.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/int-uint"},"UInt32"),") \u2014 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u0442\u0440\u0435\u0434\u0430.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"query_id"),"(",(0,o.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/string"},"String"),") \u2014 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d \u0434\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0434\u0435\u0442\u0430\u043b\u0435\u0439 \u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0435 \u0438\u0437 \u0442\u0430\u0431\u043b\u0438\u0446\u044b ",(0,o.kt)("a",{parentName:"p",href:"/docs/ru/operations/system-tables/query_log#system_tables-query_log"},"query_log")," system table.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"trace"),"(",(0,o.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/array"},"Array(UInt64)"),") \u2014 \u0442\u0440\u0430\u0441\u0441\u0438\u0440\u043e\u0432\u043a\u0430 \u0441\u0442\u0435\u043a\u0430 \u0430\u0434\u0440\u0435\u0441\u043e\u0432 \u0432\u044b\u0437\u043e\u0432\u0430 \u0432 \u043c\u043e\u043c\u0435\u043d\u0442 \u0441\u0435\u043c\u043f\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f. \u041a\u0430\u0436\u0434\u044b\u0439 \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u043c\u0430\u0441\u0441\u0438\u0432\u0430 \u2014 \u044d\u0442\u043e \u0430\u0434\u0440\u0435\u0441 \u0432\u0438\u0440\u0442\u0443\u0430\u043b\u044c\u043d\u043e\u0439 \u043f\u0430\u043c\u044f\u0442\u0438 \u0432\u043d\u0443\u0442\u0440\u0438 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 ClickHouse."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM system.trace_log LIMIT 1 \\G\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Row 1:\n\u2500\u2500\u2500\u2500\u2500\u2500\nevent_date:              2020-09-10\nevent_time:              2020-09-10 11:23:09\nevent_time_microseconds: 2020-09-10 11:23:09.872924\ntimestamp_ns:            1599762189872924510\nrevision:                54440\ntrace_type:              Memory\nthread_id:               564963\nquery_id:\ntrace:                   [371912858,371912789,371798468,371799717,371801313,371790250,624462773,566365041,566440261,566445834,566460071,566459914,566459842,566459580,566459469,566459389,566459341,566455774,371993941,371988245,372158848,372187428,372187309,372187093,372185478,140222123165193,140222122205443]\nsize:                    5244400\n")))}d.isMDXComponent=!0}}]);