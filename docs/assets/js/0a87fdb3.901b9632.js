"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[3830],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return r?n.createElement(h,o(o({ref:t},c),{},{components:r})):n.createElement(h,o({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},26301:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={slug:"/zh/operations/monitoring",sidebar_position:45,sidebar_label:"\u76d1\u63a7"},o="\u76d1\u63a7",s={unversionedId:"zh/operations/monitoring",id:"zh/operations/monitoring",title:"\u76d1\u63a7",description:"jian-kong}",source:"@site/docs/zh/operations/monitoring.md",sourceDirName:"zh/operations",slug:"/zh/operations/monitoring",permalink:"/docs/zh/operations/monitoring",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/operations/monitoring.md",tags:[],version:"current",sidebarPosition:45,frontMatter:{slug:"/zh/operations/monitoring",sidebar_position:45,sidebar_label:"\u76d1\u63a7"},sidebar:"chinese",previous:{title:"\u5fc5\u5907\u6761\u4ef6",permalink:"/docs/zh/operations/requirements"},next:{title:"\u5e38\u89c1\u95ee\u9898",permalink:"/docs/zh/operations/troubleshooting"}},l={},p=[{value:"\u786c\u4ef6\u8d44\u6e90\u5229\u7528\u7387",id:"ying-jian-zi-yuan-li-yong-lu",level:2},{value:"ClickHouse \u670d\u52a1\u7684\u6307\u6807\u3002",id:"clickhouse-fu-wu-de-zhi-biao",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"jian-kong"},"\u76d1\u63a7"),(0,a.kt)("p",null,"\u53ef\u4ee5\u76d1\u63a7\u5230\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u786c\u4ef6\u8d44\u6e90\u7684\u5229\u7528\u7387\u3002"),(0,a.kt)("li",{parentName:"ul"},"ClickHouse \u670d\u52a1\u7684\u6307\u6807\u3002")),(0,a.kt)("h2",{id:"ying-jian-zi-yuan-li-yong-lu"},"\u786c\u4ef6\u8d44\u6e90\u5229\u7528\u7387"),(0,a.kt)("p",null,"ClickHouse \u672c\u8eab\u4e0d\u4f1a\u53bb\u76d1\u63a7\u786c\u4ef6\u8d44\u6e90\u7684\u72b6\u6001\u3002"),(0,a.kt)("p",null,"\u5f3a\u70c8\u63a8\u8350\u76d1\u63a7\u4ee5\u4e0b\u76d1\u63a7\u9879\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5904\u7406\u5668\u4e0a\u7684\u8d1f\u8f7d\u548c\u6e29\u5ea6\u3002"),(0,a.kt)("p",{parentName:"li"},"   \u53ef\u4ee5\u4f7f\u7528",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Dmesg"},"dmesg"),", ",(0,a.kt)("a",{parentName:"p",href:"https://www.linux.org/docs/man8/turbostat.html"},"turbostat"),"\u6216\u8005\u5176\u4ed6\u5de5\u5177\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u78c1\u76d8\u5b58\u50a8\uff0cRAM\u548c\u7f51\u7edc\u7684\u4f7f\u7528\u7387\u3002"))),(0,a.kt)("h2",{id:"clickhouse-fu-wu-de-zhi-biao"},"ClickHouse \u670d\u52a1\u7684\u6307\u6807\u3002"),(0,a.kt)("p",null,"ClickHouse\u670d\u52a1\u672c\u8eab\u5177\u6709\u7528\u4e8e\u81ea\u6211\u72b6\u6001\u76d1\u89c6\u6307\u6807\u3002"),(0,a.kt)("p",null,"\u8981\u8ddf\u8e2a\u670d\u52a1\u5668\u4e8b\u4ef6\uff0c\u8bf7\u89c2\u5bdf\u670d\u52a1\u5668\u65e5\u5fd7\u3002 \u8bf7\u53c2\u9605\u914d\u7f6e\u6587\u4ef6\u7684 ",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/operations/server-configuration-parameters/settings#server_configuration_parameters-logger"},"logger"),"\u90e8\u5206\u3002"),(0,a.kt)("p",null,"ClickHouse \u6536\u96c6\u7684\u6307\u6807\u9879\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u670d\u52a1\u7528\u4e8e\u8ba1\u7b97\u7684\u8d44\u6e90\u5360\u7528\u7684\u5404\u79cd\u6307\u6807\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5173\u4e8e\u67e5\u8be2\u5904\u7406\u7684\u5e38\u89c1\u7edf\u8ba1\u4fe1\u606f\u3002")),(0,a.kt)("p",null,"\u53ef\u4ee5\u5728",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/operations/system-tables/metrics#system_tables-metrics"},"\u7cfb\u7edf\u6307\u6807"),"\uff0c",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/operations/system-tables/events#system_tables-events"},"\u7cfb\u7edf\u4e8b\u4ef6"),"\u4ee5\u53ca",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/operations/system-tables/asynchronous_metrics#system_tables-asynchronous_metrics"},"\u7cfb\u7edf\u5f02\u6b65\u6307\u6807"),"\u7b49\u7cfb\u7edf\u8868\u67e5\u770b\u6240\u6709\u7684\u6307\u6807\u9879\u3002"),(0,a.kt)("p",null,"\u53ef\u4ee5\u914d\u7f6eClickHouse\u5411",(0,a.kt)("a",{parentName:"p",href:"https://github.com/graphite-project"},"Graphite"),"\u63a8\u9001\u76d1\u63a7\u4fe1\u606f\u5e76\u5bfc\u5165\u6307\u6807\u3002\u53c2\u8003",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/operations/server-configuration-parameters/settings#server_configuration_parameters-graphite"},"Graphite\u76d1\u63a7"),"\u914d\u7f6e\u6587\u4ef6\u3002\u5728\u914d\u7f6e\u6307\u6807\u5bfc\u51fa\u4e4b\u524d\uff0c\u9700\u8981\u53c2\u8003",(0,a.kt)("a",{parentName:"p",href:"https://graphite.readthedocs.io/en/latest/install.html"},"Graphite\u5b98\u65b9\u6559\u7a0b"),"\u642d\u5efaGraphite\u670d\u52a1\u3002"),(0,a.kt)("p",null,"\u6b64\u5916\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7HTTP API\u76d1\u89c6\u670d\u52a1\u5668\u53ef\u7528\u6027\u3002\u5c06HTTP GET\u8bf7\u6c42\u53d1\u9001\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"/ping"),"\u3002\u5982\u679c\u670d\u52a1\u5668\u53ef\u7528\uff0c\u5b83\u5c06\u4ee5 ",(0,a.kt)("inlineCode",{parentName:"p"},"200 OK")," \u54cd\u5e94\u3002"),(0,a.kt)("p",null,"\u8981\u76d1\u89c6\u670d\u52a1\u5668\u96c6\u7fa4\u7684\u914d\u7f6e\uff0c\u5e94\u8bbe\u7f6e",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/operations/settings/settings#settings-max_replica_delay_for_distributed_queries"},"max_replica_delay_for_distributed_queries"),"\u53c2\u6570\u5e76\u4f7f\u7528HTTP\u8d44\u6e90",(0,a.kt)("inlineCode",{parentName:"p"},"/replicas_status"),"\u3002 \u5982\u679c\u526f\u672c\u53ef\u7528\uff0c\u5e76\u4e14\u4e0d\u5ef6\u8fdf\u5728\u5176\u4ed6\u526f\u672c\u4e4b\u540e\uff0c\u5219\u5bf9",(0,a.kt)("inlineCode",{parentName:"p"},"/replicas_status"),"\u7684\u8bf7\u6c42\u5c06\u8fd4\u56de",(0,a.kt)("inlineCode",{parentName:"p"},"200 OK"),"\u3002 \u5982\u679c\u526f\u672c\u6ede\u540e\uff0c\u8bf7\u6c42\u5c06\u8fd4\u56de",(0,a.kt)("inlineCode",{parentName:"p"},"503 HTTP_SERVICE_UNAVAILABLE"),"\uff0c\u5305\u62ec\u6709\u5173\u5f85\u529e\u4e8b\u9879\u5927\u5c0f\u7684\u4fe1\u606f\u3002"))}m.isMDXComponent=!0}}]);