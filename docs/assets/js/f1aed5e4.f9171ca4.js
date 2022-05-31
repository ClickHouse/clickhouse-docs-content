"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[59690],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),u=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(r),f=a,d=m["".concat(o,".").concat(f)]||m[f]||c[f]||l;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<l;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},61094:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var n=r(87462),a=r(63366),l=(r(67294),r(3905)),i=["components"],s={},o="system.quota_limits",u={unversionedId:"ru/operations/system-tables/quota_limits",id:"ru/operations/system-tables/quota_limits",title:"system.quota_limits",description:"systemtables-quotalimits}",source:"@site/docs/ru/operations/system-tables/quota_limits.md",sourceDirName:"ru/operations/system-tables",slug:"/ru/operations/system-tables/quota_limits",permalink:"/docs/ru/operations/system-tables/quota_limits",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/operations/system-tables/quota_limits.md",tags:[],version:"current",frontMatter:{},sidebar:"russia",previous:{title:"system.query_views_log",permalink:"/docs/ru/operations/system-tables/query_views_log"},next:{title:"system.quota_usage",permalink:"/docs/ru/operations/system-tables/quota_usage"}},p={},c=[],m={toc:c};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"system_tables-quota_limits"},"system.quota_limits"),(0,l.kt)("p",null,"\u0421\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e \u043c\u0430\u043a\u0441\u0438\u043c\u0443\u043c\u0430\u0445 \u0434\u043b\u044f \u0432\u0441\u0435\u0445 \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u043e\u0432 \u0432\u0441\u0435\u0445 \u043a\u0432\u043e\u0442. \u041e\u0434\u043d\u043e\u0439 \u043a\u0432\u043e\u0442\u0435 \u043c\u043e\u0433\u0443\u0442 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c \u043b\u044e\u0431\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0442\u0440\u043e\u043a \u0438\u043b\u0438 \u043d\u043e\u043b\u044c."),(0,l.kt)("p",null,"\u0421\u0442\u043e\u043b\u0431\u0446\u044b:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"quota_name")," (",(0,l.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/string"},"String"),") \u2014 \u0438\u043c\u044f \u043a\u0432\u043e\u0442\u044b."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"duration")," (",(0,l.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/int-uint"},"UInt32"),") \u2014 \u0434\u043b\u0438\u043d\u0430 \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0433\u043e \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u0430 \u0434\u043b\u044f \u0440\u0430\u0441\u0447\u0435\u0442\u0430 \u043f\u043e\u0442\u0440\u0435\u0431\u043b\u0435\u043d\u0438\u044f \u0440\u0435\u0441\u0443\u0440\u0441\u043e\u0432, \u0432 \u0441\u0435\u043a\u0443\u043d\u0434\u0430\u0445."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"is_randomized_interval")," (",(0,l.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/int-uint#uint-ranges"},"UInt8"),") \u2014 \u043b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435. \u041e\u043d\u043e \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442, \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043b\u0438 \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b \u0440\u0430\u043d\u0434\u043e\u043c\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u043c. \u0418\u043d\u0442\u0435\u0440\u0432\u0430\u043b \u0432\u0441\u0435\u0433\u0434\u0430 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0432 \u043e\u0434\u043d\u043e \u0438 \u0442\u043e \u0436\u0435 \u0432\u0440\u0435\u043c\u044f, \u0435\u0441\u043b\u0438 \u043e\u043d \u043d\u0435 \u0440\u0430\u043d\u0434\u043e\u043c\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b \u0432 1 \u043c\u0438\u043d\u0443\u0442\u0443 \u0432\u0441\u0435\u0433\u0434\u0430 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441 \u0446\u0435\u043b\u043e\u0433\u043e \u0447\u0438\u0441\u043b\u0430 \u043c\u0438\u043d\u0443\u0442 (\u0442\u043e \u0435\u0441\u0442\u044c \u043e\u043d \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0432 11:20:00, \u043d\u043e \u043d\u0438\u043a\u043e\u0433\u0434\u0430 \u043d\u0435 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0432 11:20:01), \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b \u0432 \u043e\u0434\u0438\u043d \u0434\u0435\u043d\u044c \u0432\u0441\u0435\u0433\u0434\u0430 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0432 \u043f\u043e\u043b\u043d\u043e\u0447\u044c UTC. \u0415\u0441\u043b\u0438 \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b \u0440\u0430\u043d\u0434\u043e\u043c\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d, \u0442\u043e \u0441\u0430\u043c\u044b\u0439 \u043f\u0435\u0440\u0432\u044b\u0439 \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0432 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u043b\u044c\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f, \u0430 \u043f\u043e\u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u044b \u043d\u0430\u0447\u0438\u043d\u0430\u044e\u0442\u0441\u044f \u043e\u0434\u0438\u043d \u0437\u0430 \u0434\u0440\u0443\u0433\u0438\u043c. \u0417\u043d\u0430\u0447\u0435\u043d\u0438\u044f:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"0")," \u2014 \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b \u0440\u0430\u043d\u0434\u043e\u043c\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"1")," \u2014 \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b \u043d\u0435 \u0440\u0430\u043d\u0434\u043e\u043c\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"max_queries")," (",(0,l.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/nullable"},"Nullable"),"(",(0,l.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"max_query_selects")," (",(0,l.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/nullable"},"Nullable"),"(",(0,l.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 ",(0,l.kt)("inlineCode",{parentName:"li"},"SELECT"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"max_query_inserts")," (",(0,l.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/nullable"},"Nullable"),"(",(0,l.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 ",(0,l.kt)("inlineCode",{parentName:"li"},"INSERT"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"max_errors")," (",(0,l.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/nullable"},"Nullable"),"(",(0,l.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043e\u0448\u0438\u0431\u043e\u043a."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"max_result_rows")," (",(0,l.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/nullable"},"Nullable"),"(",(0,l.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0442\u0440\u043e\u043a \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"max_result_bytes")," (",(0,l.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/nullable"},"Nullable"),"(",(0,l.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439 \u043e\u0431\u044a\u0435\u043c \u043e\u043f\u0435\u0440\u0430\u0442\u0438\u0432\u043d\u043e\u0439 \u043f\u0430\u043c\u044f\u0442\u0438 \u0432 \u0431\u0430\u0439\u0442\u0430\u0445, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0439 \u0434\u043b\u044f \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u0430."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"max_read_rows")," (",(0,l.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/nullable"},"Nullable"),"(",(0,l.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0442\u0440\u043e\u043a, \u0441\u0447\u0438\u0442\u044b\u0432\u0430\u0435\u043c\u044b\u0445 \u0438\u0437 \u0432\u0441\u0435\u0445 \u0442\u0430\u0431\u043b\u0438\u0446 \u0438 \u0442\u0430\u0431\u043b\u0438\u0447\u043d\u044b\u0445 \u0444\u0443\u043d\u043a\u0446\u0438\u0439, \u0443\u0447\u0430\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0445 \u0432 \u0437\u0430\u043f\u0440\u043e\u0441\u0435."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"max_read_bytes")," (",(0,l.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/nullable"},"Nullable"),"(",(0,l.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0431\u0430\u0439\u0442\u043e\u0432, \u0441\u0447\u0438\u0442\u044b\u0432\u0430\u0435\u043c\u044b\u0445 \u0438\u0437 \u0432\u0441\u0435\u0445 \u0442\u0430\u0431\u043b\u0438\u0446 \u0438 \u0442\u0430\u0431\u043b\u0438\u0447\u043d\u044b\u0445 \u0444\u0443\u043d\u043a\u0446\u0438\u0439, \u0443\u0447\u0430\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0445 \u0432 \u0437\u0430\u043f\u0440\u043e\u0441\u0435."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"max_execution_time")," (",(0,l.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/nullable"},"Nullable"),"(",(0,l.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/float"},"Float64"),")) \u2014 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u0430, \u0432 \u0441\u0435\u043a\u0443\u043d\u0434\u0430\u0445.")))}f.isMDXComponent=!0}}]);