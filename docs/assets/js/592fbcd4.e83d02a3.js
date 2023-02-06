"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[24010],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var c=n.createContext({}),i=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=i(r),y=s,d=m["".concat(c,".").concat(y)]||m[y]||p[y]||a;return r?n.createElement(d,o(o({ref:t},u),{},{components:r})):n.createElement(d,o({ref:t},u))}));function d(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=r.length,o=new Array(a);o[0]=y;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:s,o[1]=l;for(var i=2;i<a;i++)o[i]=r[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},37395:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>i});var n=r(87462),s=(r(67294),r(3905));const a={slug:"/ru/operations/system-tables/asynchronous_metrics"},o="system.asynchronous_metrics",l={unversionedId:"ru/operations/system-tables/asynchronous_metrics",id:"ru/operations/system-tables/asynchronous_metrics",title:"system.asynchronous_metrics",description:"systemtables-asynchronousmetrics}",source:"@site/docs/ru/operations/system-tables/asynchronous_metrics.md",sourceDirName:"ru/operations/system-tables",slug:"/ru/operations/system-tables/asynchronous_metrics",permalink:"/docs/ru/operations/system-tables/asynchronous_metrics",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/operations/system-tables/asynchronous_metrics.md",tags:[],version:"current",frontMatter:{slug:"/ru/operations/system-tables/asynchronous_metrics"},sidebar:"russia",previous:{title:"asynchronous_metric_log",permalink:"/docs/ru/operations/system-tables/asynchronous_metric_log"},next:{title:"system.clusters",permalink:"/docs/ru/operations/system-tables/clusters"}},c={},i=[],u={toc:i},m="wrapper";function p(e){let{components:t,...r}=e;return(0,s.kt)(m,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"system_tables-asynchronous_metrics"},"system.asynchronous_metrics"),(0,s.kt)("p",null,"\u0421\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u043c\u0435\u0442\u0440\u0438\u043a\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u0435\u0440\u0438\u043e\u0434\u0438\u0447\u0435\u0441\u043a\u0438 \u0432\u044b\u0447\u0438\u0441\u043b\u044f\u044e\u0442\u0441\u044f \u0432 \u0444\u043e\u043d\u043e\u0432\u043e\u043c \u0440\u0435\u0436\u0438\u043c\u0435. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u043e\u0431\u044a\u0451\u043c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u043e\u0439 \u043e\u043f\u0435\u0440\u0430\u0442\u0438\u0432\u043d\u043e\u0439 \u043f\u0430\u043c\u044f\u0442\u0438."),(0,s.kt)("p",null,"\u0421\u0442\u043e\u043b\u0431\u0446\u044b:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"metric")," (",(0,s.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/string"},"String"),") \u2014 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043c\u0435\u0442\u0440\u0438\u043a\u0438."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"value")," (",(0,s.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/float"},"Float64"),") \u2014 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043c\u0435\u0442\u0440\u0438\u043a\u0438.")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM system.asynchronous_metrics LIMIT 10\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500metric\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500value\u2500\u2510\n\u2502 jemalloc.background_thread.run_interval \u2502          0 \u2502\n\u2502 jemalloc.background_thread.num_runs     \u2502          0 \u2502\n\u2502 jemalloc.background_thread.num_threads  \u2502          0 \u2502\n\u2502 jemalloc.retained                       \u2502  422551552 \u2502\n\u2502 jemalloc.mapped                         \u2502 1682989056 \u2502\n\u2502 jemalloc.resident                       \u2502 1656446976 \u2502\n\u2502 jemalloc.metadata_thp                   \u2502          0 \u2502\n\u2502 jemalloc.metadata                       \u2502   10226856 \u2502\n\u2502 UncompressedCacheCells                  \u2502          0 \u2502\n\u2502 MarkCacheFiles                          \u2502          0 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0442\u0430\u043a\u0436\u0435")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/ru/operations/monitoring"},"\u041c\u043e\u043d\u0438\u0442\u043e\u0440\u0438\u043d\u0433")," \u2014 \u043e\u0441\u043d\u043e\u0432\u044b \u043c\u043e\u043d\u0438\u0442\u043e\u0440\u0438\u043d\u0433\u0430 \u0432 ClickHouse."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#system_tables-metrics"},"system.metrics")," \u2014 \u0442\u0430\u0431\u043b\u0438\u0446\u0430 \u0441 \u043c\u0433\u043d\u043e\u0432\u0435\u043d\u043d\u043e \u0432\u044b\u0447\u0438\u0441\u043b\u044f\u0435\u043c\u044b\u043c\u0438 \u043c\u0435\u0442\u0440\u0438\u043a\u0430\u043c\u0438."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#system_tables-events"},"system.events")," \u2014 \u0442\u0430\u0431\u043b\u0438\u0446\u0430 \u0441 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e\u043c \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u0435\u0434\u0448\u0438\u0445 \u0441\u043e\u0431\u044b\u0442\u0438\u0439."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#system_tables-metric_log"},"system.metric_log")," \u2014 \u0442\u0430\u0431\u043b\u0438\u0446\u0430 \u0444\u0438\u043a\u0441\u0438\u0440\u0443\u044e\u0449\u0430\u044f \u0438\u0441\u0442\u043e\u0440\u0438\u044e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u043c\u0435\u0442\u0440\u0438\u043a \u0438\u0437 ",(0,s.kt)("inlineCode",{parentName:"li"},"system.metrics")," \u0438 ",(0,s.kt)("inlineCode",{parentName:"li"},"system.events"),".")))}p.isMDXComponent=!0}}]);