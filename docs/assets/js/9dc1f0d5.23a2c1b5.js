"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[79396],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),o=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=o(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=o(a),d=n,f=m["".concat(u,".").concat(d)]||m[d]||c[d]||l;return a?r.createElement(f,s(s({ref:t},p),{},{components:a})):r.createElement(f,s({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,s=new Array(l);s[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var o=2;o<l;o++)s[o]=a[o];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},75775:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var r=a(87462),n=(a(67294),a(3905));const l={slug:"/ru/operations/system-tables/quotas_usage"},s="system.quotas_usage",i={unversionedId:"ru/operations/system-tables/quotas_usage",id:"ru/operations/system-tables/quotas_usage",title:"system.quotas_usage",description:"systemtables-quotasusage}",source:"@site/docs/ru/operations/system-tables/quotas_usage.md",sourceDirName:"ru/operations/system-tables",slug:"/ru/operations/system-tables/quotas_usage",permalink:"/docs/ru/operations/system-tables/quotas_usage",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/operations/system-tables/quotas_usage.md",tags:[],version:"current",frontMatter:{slug:"/ru/operations/system-tables/quotas_usage"},sidebar:"russia",previous:{title:"system.quotas",permalink:"/docs/ru/operations/system-tables/quotas"},next:{title:"system.replicas",permalink:"/docs/ru/operations/system-tables/replicas"}},u={},o=[{value:"\u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0442\u0430\u043a\u0436\u0435",id:"see-also",level:2}],p={toc:o};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"system_tables-quotas_usage"},"system.quotas_usage"),(0,n.kt)("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u043a\u0432\u043e\u0442 \u0432\u0441\u0435\u043c\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f\u043c\u0438."),(0,n.kt)("p",null,"\u0421\u0442\u043e\u043b\u0431\u0446\u044b:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"quota_name")," (",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/string"},"String"),") \u2014 \u0438\u043c\u044f \u043a\u0432\u043e\u0442\u044b."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"quota_key")," (",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/string"},"String"),") \u2014 \u043a\u043b\u044e\u0447 \u043a\u0432\u043e\u0442\u044b."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"is_current")," (",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/int-uint#uint-ranges"},"UInt8"),") \u2014 \u043a\u0432\u043e\u0442\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u0442\u0435\u043a\u0443\u0449\u0435\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"start_time")," (",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/nullable"},"Nullable"),"(",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/datetime"},"DateTime"),"))) \u2014 \u0432\u0440\u0435\u043c\u044f \u043d\u0430\u0447\u0430\u043b\u0430 \u0440\u0430\u0441\u0447\u0435\u0442\u0430 \u043f\u043e\u0442\u0440\u0435\u0431\u043b\u0435\u043d\u0438\u044f \u0440\u0435\u0441\u0443\u0440\u0441\u043e\u0432."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"end_time")," (",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/nullable"},"Nullable"),"(",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/datetime"},"DateTime"),"))) \u2014 \u0432\u0440\u0435\u043c\u044f \u043e\u043a\u043e\u043d\u0447\u0430\u043d\u0438\u044f \u0440\u0430\u0441\u0447\u0435\u0442\u0430 \u043f\u043e\u0442\u0440\u0435\u0431\u043b\u0435\u043d\u0438\u044f \u0440\u0435\u0441\u0443\u0440\u0441\u043e\u0432."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"duration")," (",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/nullable"},"Nullable"),"(",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/int-uint"},"UInt32"),")) \u2014 \u0434\u043b\u0438\u043d\u0430 \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0433\u043e \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u0430 \u0434\u043b\u044f \u0440\u0430\u0441\u0447\u0435\u0442\u0430 \u043f\u043e\u0442\u0440\u0435\u0431\u043b\u0435\u043d\u0438\u044f \u0440\u0435\u0441\u0443\u0440\u0441\u043e\u0432, \u0432 \u0441\u0435\u043a\u0443\u043d\u0434\u0430\u0445."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"queries")," (",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/nullable"},"Nullable"),"(",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 \u043e\u0431\u0449\u0435\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u043d\u0430 \u044d\u0442\u043e\u043c \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u0435."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"max_queries")," (",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/nullable"},"Nullable"),"(",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"query_selects")," (",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/nullable"},"Nullable"),"(",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 \u043e\u0431\u0449\u0435\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 ",(0,n.kt)("inlineCode",{parentName:"li"},"SELECT")," \u043d\u0430 \u044d\u0442\u043e\u043c \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u0435."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"max_query_selects")," (",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/nullable"},"Nullable"),"(",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 ",(0,n.kt)("inlineCode",{parentName:"li"},"SELECT")," \u043d\u0430 \u044d\u0442\u043e\u043c \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u0435."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"query_inserts")," (",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/nullable"},"Nullable"),"(",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 \u043e\u0431\u0449\u0435\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 ",(0,n.kt)("inlineCode",{parentName:"li"},"INSERT")," \u043d\u0430 \u044d\u0442\u043e\u043c \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u0435."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"max_query_inserts")," (",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/nullable"},"Nullable"),"(",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 ",(0,n.kt)("inlineCode",{parentName:"li"},"INSERT")," \u043d\u0430 \u044d\u0442\u043e\u043c \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u0435."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"errors")," (",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/nullable"},"Nullable"),"(",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 \u0447\u0438\u0441\u043b\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432, \u0432\u044b\u0437\u0432\u0430\u0432\u0448\u0438\u0445 \u043e\u0448\u0438\u0431\u043a\u0438."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"max_errors")," (",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/nullable"},"Nullable"),"(",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u043e\u0448\u0438\u0431\u043e\u043a."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"result_rows")," (",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/nullable"},"Nullable"),"(",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 \u043e\u0431\u0449\u0435\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0442\u0440\u043e\u043a, \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u043d\u043d\u044b\u0445 \u0432 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0435."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"max_result_rows")," (",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/nullable"},"Nullable"),"(",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0438\u0441\u0445\u043e\u0434\u043d\u044b\u0445 \u0441\u0442\u0440\u043e\u043a, \u0441\u0447\u0438\u0442\u044b\u0432\u0430\u0435\u043c\u044b\u0445 \u0438\u0437 \u0442\u0430\u0431\u043b\u0438\u0446."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"result_bytes")," (",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/nullable"},"Nullable"),"(",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 \u043e\u0431\u044a\u0435\u043c \u043e\u043f\u0435\u0440\u0430\u0442\u0438\u0432\u043d\u043e\u0439 \u043f\u0430\u043c\u044f\u0442\u0438 \u0432 \u0431\u0430\u0439\u0442\u0430\u0445, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0439 \u0434\u043b\u044f \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u0430."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"max_result_bytes")," (",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/nullable"},"Nullable"),"(",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439 \u043e\u0431\u044a\u0435\u043c \u043e\u043f\u0435\u0440\u0430\u0442\u0438\u0432\u043d\u043e\u0439 \u043f\u0430\u043c\u044f\u0442\u0438, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0439 \u0434\u043b\u044f \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u0430, \u0432 \u0431\u0430\u0439\u0442\u0430\u0445."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"read_rows")," (",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/nullable"},"Nullable"),"(",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 \u043e\u0431\u0449\u0435\u0435 \u0447\u0438\u0441\u043b\u043e \u0438\u0441\u0445\u043e\u0434\u043d\u044b\u0445 \u0441\u0442\u0440\u043e\u043a, \u0441\u0447\u0438\u0442\u044b\u0432\u0430\u0435\u043c\u044b\u0445 \u0438\u0437 \u0442\u0430\u0431\u043b\u0438\u0446 \u0434\u043b\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u043d\u0430 \u0432\u0441\u0435\u0445 \u0443\u0434\u0430\u043b\u0435\u043d\u043d\u044b\u0445 \u0441\u0435\u0440\u0432\u0435\u0440\u0430\u0445."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"max_read_rows")," (",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/nullable"},"Nullable"),"(",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0442\u0440\u043e\u043a, \u0441\u0447\u0438\u0442\u044b\u0432\u0430\u0435\u043c\u044b\u0445 \u0438\u0437 \u0432\u0441\u0435\u0445 \u0442\u0430\u0431\u043b\u0438\u0446 \u0438 \u0442\u0430\u0431\u043b\u0438\u0447\u043d\u044b\u0445 \u0444\u0443\u043d\u043a\u0446\u0438\u0439, \u0443\u0447\u0430\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0445 \u0432 \u0437\u0430\u043f\u0440\u043e\u0441\u0430\u0445."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"read_bytes")," (",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/nullable"},"Nullable"),"(",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 \u043e\u0431\u0449\u0435\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0431\u0430\u0439\u0442, \u0441\u0447\u0438\u0442\u0430\u043d\u043d\u044b\u0445 \u0438\u0437 \u0432\u0441\u0435\u0445 \u0442\u0430\u0431\u043b\u0438\u0446 \u0438 \u0442\u0430\u0431\u043b\u0438\u0447\u043d\u044b\u0445 \u0444\u0443\u043d\u043a\u0446\u0438\u0439, \u0443\u0447\u0430\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0445 \u0432 \u0437\u0430\u043f\u0440\u043e\u0441\u0430\u0445."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"max_read_bytes")," (",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/nullable"},"Nullable"),"(",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0431\u0430\u0439\u0442, \u0441\u0447\u0438\u0442\u044b\u0432\u0430\u0435\u043c\u044b\u0445 \u0438\u0437 \u0432\u0441\u0435\u0445 \u0442\u0430\u0431\u043b\u0438\u0446 \u0438 \u0442\u0430\u0431\u043b\u0438\u0447\u043d\u044b\u0445 \u0444\u0443\u043d\u043a\u0446\u0438\u0439."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"execution_time")," (",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/nullable"},"Nullable"),"(",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/float"},"Float64"),")) \u2014 \u043e\u0431\u0449\u0435\u0435 \u0432\u0440\u0435\u043c\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u0430, \u0432 \u0441\u0435\u043a\u0443\u043d\u0434\u0430\u0445."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"max_execution_time")," (",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/nullable"},"Nullable"),"(",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/float"},"Float64"),")) \u2014 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u0430.")),(0,n.kt)("h2",{id:"see-also"},"\u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0442\u0430\u043a\u0436\u0435"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/statements/show#show-quota-statement"},"SHOW QUOTA"))))}c.isMDXComponent=!0}}]);