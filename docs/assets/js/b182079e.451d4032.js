"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[20945],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(r),k=o,d=m["".concat(p,".").concat(k)]||m[k]||c[k]||a;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},13093:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={slug:"/ru/operations/monitoring",sidebar_position:45,sidebar_label:"\u041c\u043e\u043d\u0438\u0442\u043e\u0440\u0438\u043d\u0433"},i="\u041c\u043e\u043d\u0438\u0442\u043e\u0440\u0438\u043d\u0433",s={unversionedId:"ru/operations/monitoring",id:"ru/operations/monitoring",title:"\u041c\u043e\u043d\u0438\u0442\u043e\u0440\u0438\u043d\u0433",description:"monitoring}",source:"@site/docs/ru/operations/monitoring.md",sourceDirName:"ru/operations",slug:"/ru/operations/monitoring",permalink:"/docs/ru/operations/monitoring",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/operations/monitoring.md",tags:[],version:"current",sidebarPosition:45,frontMatter:{slug:"/ru/operations/monitoring",sidebar_position:45,sidebar_label:"\u041c\u043e\u043d\u0438\u0442\u043e\u0440\u0438\u043d\u0433"},sidebar:"russia",previous:{title:"\u0422\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f",permalink:"/docs/ru/operations/requirements"},next:{title:"\u0423\u0441\u0442\u0440\u0430\u043d\u0435\u043d\u0438\u0435 \u043d\u0435\u0438\u0441\u043f\u0440\u0430\u0432\u043d\u043e\u0441\u0442\u0435\u0439",permalink:"/docs/ru/operations/troubleshooting"}},p={},l=[{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0440\u0435\u0441\u0443\u0440\u0441\u043e\u0432",id:"ispolzovanie-resursov",level:2},{value:"\u041c\u0435\u0442\u0440\u0438\u043a\u0438 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 ClickHouse",id:"metriki-servera-clickhouse",level:2}],u={toc:l};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"monitoring"},"\u041c\u043e\u043d\u0438\u0442\u043e\u0440\u0438\u043d\u0433"),(0,o.kt)("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u0442\u044c:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0430\u043f\u043f\u0430\u0440\u0430\u0442\u043d\u044b\u0445 \u0440\u0435\u0441\u0443\u0440\u0441\u043e\u0432."),(0,o.kt)("li",{parentName:"ul"},"\u041c\u0435\u0442\u0440\u0438\u043a\u0438 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 ClickHouse.")),(0,o.kt)("h2",{id:"ispolzovanie-resursov"},"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0440\u0435\u0441\u0443\u0440\u0441\u043e\u0432"),(0,o.kt)("p",null,"ClickHouse \u043d\u0435 \u043e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u0430\u043f\u043f\u0430\u0440\u0430\u0442\u043d\u044b\u0445 \u0440\u0435\u0441\u0443\u0440\u0441\u043e\u0432 \u0441\u0430\u043c\u043e\u0441\u0442\u043e\u044f\u0442\u0435\u043b\u044c\u043d\u043e."),(0,o.kt)("p",null,"\u0420\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u043c \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u0442\u044c:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0443 \u0438 \u0442\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0443 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u0440\u043e\u0432."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"\u041c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c [dmesg](https://en.wikipedia.org/wiki/Dmesg), [turbostat](https://www.linux.org/docs/man8/turbostat.html) \u0438\u043b\u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u044b.\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f, \u043e\u043f\u0435\u0440\u0430\u0442\u0438\u0432\u043d\u043e\u0439 \u043f\u0430\u043c\u044f\u0442\u0438 \u0438 \u0441\u0435\u0442\u0438."))),(0,o.kt)("h2",{id:"metriki-servera-clickhouse"},"\u041c\u0435\u0442\u0440\u0438\u043a\u0438 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 ClickHouse"),(0,o.kt)("p",null,"\u0421\u0435\u0440\u0432\u0435\u0440 ClickHouse \u0438\u043c\u0435\u0435\u0442 \u0432\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u0435 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u044b \u043c\u043e\u043d\u0438\u0442\u043e\u0440\u0438\u043d\u0433\u0430."),(0,o.kt)("p",null,"\u0414\u043b\u044f \u043e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u043d\u0438\u044f \u0441\u043e\u0431\u044b\u0442\u0438\u0439 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u043b\u043e\u0433\u0438. \u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0430 ",(0,o.kt)("a",{parentName:"p",href:"/docs/ru/operations/server-configuration-parameters/settings#server_configuration_parameters-logger"},"logger"),"."),(0,o.kt)("p",null,"ClickHouse \u0441\u043e\u0431\u0438\u0440\u0430\u0435\u0442:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u0420\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0435 \u043c\u0435\u0442\u0440\u0438\u043a\u0438 \u0442\u043e\u0433\u043e, \u043a\u0430\u043a \u0441\u0435\u0440\u0432\u0435\u0440 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u0432\u044b\u0447\u0438\u0441\u043b\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0440\u0435\u0441\u0443\u0440\u0441\u044b."),(0,o.kt)("li",{parentName:"ul"},"\u041e\u0431\u0449\u0443\u044e \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0443 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432.")),(0,o.kt)("p",null,"\u041c\u0435\u0442\u0440\u0438\u043a\u0438 \u043d\u0430\u0445\u043e\u0434\u044f\u0442\u0441\u044f \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0430\u0445 ",(0,o.kt)("a",{parentName:"p",href:"/docs/ru/operations/system-tables/metrics#system_tables-metrics"},"system.metrics"),", ",(0,o.kt)("a",{parentName:"p",href:"/docs/ru/operations/system-tables/events#system_tables-events"},"system.events")," \u0438 ",(0,o.kt)("a",{parentName:"p",href:"/docs/ru/operations/system-tables/asynchronous_metrics#system_tables-asynchronous_metrics"},"system.asynchronous_metrics"),"."),(0,o.kt)("p",null,"\u041c\u043e\u0436\u043d\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u044d\u043a\u0441\u043f\u043e\u0440\u0442 \u043c\u0435\u0442\u0440\u0438\u043a \u0438\u0437 ClickHouse \u0432 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/graphite-project"},"Graphite"),". \u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0441\u0435\u043a\u0446\u0438\u044e ",(0,o.kt)("a",{parentName:"p",href:"/docs/ru/operations/server-configuration-parameters/settings#server_configuration_parameters-graphite"},"graphite")," \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0430 ClickHouse. \u041f\u0435\u0440\u0435\u0434 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u043e\u0439 \u044d\u043a\u0441\u043f\u043e\u0440\u0442\u0430 \u043c\u0435\u0442\u0440\u0438\u043a \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c Graphite, \u043a\u0430\u043a \u0443\u043a\u0430\u0437\u0430\u043d\u043e \u0432 ",(0,o.kt)("a",{parentName:"p",href:"https://graphite.readthedocs.io/en/latest/install.html"},"\u043e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u043c \u0440\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u0435"),"."),(0,o.kt)("p",null,"\u041c\u043e\u0436\u043d\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u044d\u043a\u0441\u043f\u043e\u0440\u0442 \u043c\u0435\u0442\u0440\u0438\u043a \u0438\u0437 ClickHouse \u0432 ",(0,o.kt)("a",{parentName:"p",href:"https://prometheus.io"},"Prometheus"),". \u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0441\u0435\u043a\u0446\u0438\u044e ",(0,o.kt)("a",{parentName:"p",href:"/docs/ru/operations/server-configuration-parameters/settings#server_configuration_parameters-prometheus"},"prometheus")," \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0430 ClickHouse. \u041f\u0435\u0440\u0435\u0434 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u043e\u0439 \u044d\u043a\u0441\u043f\u043e\u0440\u0442\u0430 \u043c\u0435\u0442\u0440\u0438\u043a \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c Prometheus, \u043a\u0430\u043a \u0443\u043a\u0430\u0437\u0430\u043d\u043e \u0432 ",(0,o.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/prometheus/latest/installation/"},"\u043e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u043c \u0440\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u0435"),"."),(0,o.kt)("p",null,"\u0422\u0430\u043a\u0436\u0435, \u043c\u043e\u0436\u043d\u043e \u043e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u0441\u0442\u044c \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u0447\u0435\u0440\u0435\u0437 HTTP API. \u041e\u0442\u043f\u0440\u0430\u0432\u044c\u0442\u0435 ",(0,o.kt)("inlineCode",{parentName:"p"},"HTTP GET")," \u043a \u0440\u0435\u0441\u0443\u0440\u0441\u0443 ",(0,o.kt)("inlineCode",{parentName:"p"},"/ping"),". \u0415\u0441\u043b\u0438 \u0441\u0435\u0440\u0432\u0435\u0440 \u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d, \u043e\u043d \u043e\u0442\u0432\u0435\u0447\u0430\u0435\u0442 ",(0,o.kt)("inlineCode",{parentName:"p"},"200 OK"),"."),(0,o.kt)("p",null,"\u0414\u043b\u044f \u043c\u043e\u043d\u0438\u0442\u043e\u0440\u0438\u043d\u0433\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u0432 \u0432 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u043d\u043e\u0439 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 ",(0,o.kt)("a",{parentName:"p",href:"/docs/ru/operations/settings/settings#settings-max_replica_delay_for_distributed_queries"},"max_replica_delay_for_distributed_queries")," \u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c HTTP \u0440\u0435\u0441\u0443\u0440\u0441 ",(0,o.kt)("inlineCode",{parentName:"p"},"/replicas_status"),". \u0415\u0441\u043b\u0438 \u0440\u0435\u043f\u043b\u0438\u043a\u0430 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430 \u0438 \u043d\u0435 \u043e\u0442\u0441\u0442\u0430\u0451\u0442 \u043e\u0442 \u0434\u0440\u0443\u0433\u0438\u0445 \u0440\u0435\u043f\u043b\u0438\u043a, \u0442\u043e \u0437\u0430\u043f\u0440\u043e\u0441 \u043a ",(0,o.kt)("inlineCode",{parentName:"p"},"/replicas_status")," \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 ",(0,o.kt)("inlineCode",{parentName:"p"},"200 OK"),". \u0415\u0441\u043b\u0438 \u0440\u0435\u043f\u043b\u0438\u043a\u0430 \u043e\u0442\u0441\u0442\u0430\u0451\u0442, \u0442\u043e \u0437\u0430\u043f\u0440\u043e\u0441 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 ",(0,o.kt)("inlineCode",{parentName:"p"},"503 HTTP_SERVICE_UNAVAILABLE"),", \u0432\u043a\u043b\u044e\u0447\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e \u0440\u0430\u0437\u043c\u0435\u0440\u0435 \u043e\u0442\u0441\u0442\u0430\u0432\u0430\u043d\u0438\u044f."))}c.isMDXComponent=!0}}]);