"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[61195],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(r),d=o,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return r?n.createElement(h,a(a({ref:t},c),{},{components:r})):n.createElement(h,a({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},45928:(e,t,r)=>{r.d(t,{ZP:()=>a});var n=r(87462),o=(r(67294),r(3905));const i={toc:[]};function a(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This page is not applicable to ",(0,o.kt)("a",{parentName:"p",href:"https://clickhouse.com/cloud"},"ClickHouse Cloud"),". The procedure documented here is automated in ClickHouse Cloud services."))))}a.isMDXComponent=!0},59106:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(87462),o=(r(67294),r(3905)),i=r(45928);const a={slug:"/en/operations/monitoring",sidebar_position:45,sidebar_label:"Monitoring"},s="Monitoring",l={unversionedId:"en/operations/monitoring",id:"en/operations/monitoring",title:"Monitoring",description:"You can monitor:",source:"@site/docs/en/operations/monitoring.md",sourceDirName:"en/operations",slug:"/en/operations/monitoring",permalink:"/docs/en/operations/monitoring",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/operations/monitoring.md",tags:[],version:"current",sidebarPosition:45,frontMatter:{slug:"/en/operations/monitoring",sidebar_position:45,sidebar_label:"Monitoring"},sidebar:"english",previous:{title:"Self-managed Upgrade",permalink:"/docs/en/operations/update"},next:{title:"Replication and Sharding",permalink:"/docs/en/manage/replication-and-sharding"}},p={},c=[{value:"Resource Utilization",id:"resource-utilization",level:2},{value:"ClickHouse Server Metrics",id:"clickhouse-server-metrics",level:2}],u={toc:c};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"monitoring"},"Monitoring"),(0,o.kt)(i.ZP,{mdxType:"SelfManaged"}),(0,o.kt)("p",null,"You can monitor:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Utilization of hardware resources."),(0,o.kt)("li",{parentName:"ul"},"ClickHouse server metrics.")),(0,o.kt)("h2",{id:"resource-utilization"},"Resource Utilization"),(0,o.kt)("p",null,"ClickHouse does not monitor the state of hardware resources by itself."),(0,o.kt)("p",null,"It is highly recommended to set up monitoring for:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Load and temperature on processors."),(0,o.kt)("p",{parentName:"li"},"You can use ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Dmesg"},"dmesg"),", ",(0,o.kt)("a",{parentName:"p",href:"https://www.linux.org/docs/man8/turbostat.html"},"turbostat")," or other instruments.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Utilization of storage system, RAM and network."))),(0,o.kt)("h2",{id:"clickhouse-server-metrics"},"ClickHouse Server Metrics"),(0,o.kt)("p",null,"ClickHouse server has embedded instruments for self-state monitoring."),(0,o.kt)("p",null,"To track server events use server logs. See the ",(0,o.kt)("a",{parentName:"p",href:"/docs/en/operations/server-configuration-parameters/settings#server_configuration_parameters-logger"},"logger")," section of the configuration file."),(0,o.kt)("p",null,"ClickHouse collects:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Different metrics of how the server uses computational resources."),(0,o.kt)("li",{parentName:"ul"},"Common statistics on query processing.")),(0,o.kt)("p",null,"You can find metrics in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/en/operations/system-tables/metrics#system_tables-metrics"},"system.metrics"),", ",(0,o.kt)("a",{parentName:"p",href:"/docs/en/operations/system-tables/events#system_tables-events"},"system.events"),", and ",(0,o.kt)("a",{parentName:"p",href:"/docs/en/operations/system-tables/asynchronous_metrics#system_tables-asynchronous_metrics"},"system.asynchronous_metrics")," tables."),(0,o.kt)("p",null,"You can configure ClickHouse to export metrics to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/graphite-project"},"Graphite"),". See the ",(0,o.kt)("a",{parentName:"p",href:"/docs/en/operations/server-configuration-parameters/settings#server_configuration_parameters-graphite"},"Graphite section")," in the ClickHouse server configuration file. Before configuring export of metrics, you should set up Graphite by following their official ",(0,o.kt)("a",{parentName:"p",href:"https://graphite.readthedocs.io/en/latest/install.html"},"guide"),"."),(0,o.kt)("p",null,"You can configure ClickHouse to export metrics to ",(0,o.kt)("a",{parentName:"p",href:"https://prometheus.io"},"Prometheus"),". See the ",(0,o.kt)("a",{parentName:"p",href:"/docs/en/operations/server-configuration-parameters/settings#server_configuration_parameters-prometheus"},"Prometheus section")," in the ClickHouse server configuration file. Before configuring export of metrics, you should set up Prometheus by following their official ",(0,o.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/prometheus/latest/installation/"},"guide"),"."),(0,o.kt)("p",null,"Additionally, you can monitor server availability through the HTTP API. Send the ",(0,o.kt)("inlineCode",{parentName:"p"},"HTTP GET")," request to ",(0,o.kt)("inlineCode",{parentName:"p"},"/ping"),". If the server is available, it responds with ",(0,o.kt)("inlineCode",{parentName:"p"},"200 OK"),"."),(0,o.kt)("p",null,"To monitor servers in a cluster configuration, you should set the ",(0,o.kt)("a",{parentName:"p",href:"/docs/en/operations/settings/settings#settings-max_replica_delay_for_distributed_queries"},"max_replica_delay_for_distributed_queries")," parameter and use the HTTP resource ",(0,o.kt)("inlineCode",{parentName:"p"},"/replicas_status"),". A request to ",(0,o.kt)("inlineCode",{parentName:"p"},"/replicas_status")," returns ",(0,o.kt)("inlineCode",{parentName:"p"},"200 OK")," if the replica is available and is not delayed behind the other replicas. If a replica is delayed, it returns ",(0,o.kt)("inlineCode",{parentName:"p"},"503 HTTP_SERVICE_UNAVAILABLE")," with information about the gap."))}m.isMDXComponent=!0}}]);