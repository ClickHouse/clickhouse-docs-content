"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[39013],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=c(r),d=a,f=p["".concat(l,".").concat(d)]||p[d]||u[d]||s;return r?n.createElement(f,o(o({ref:t},m),{},{components:r})):n.createElement(f,o({ref:t},m))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<s;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},84044:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const s={slug:"/zh/operations/system-tables/metric_log",machine_translated:!0,machine_translated_rev:"5decc73b5dc60054f19087d3690c4eb99446a6c3"},o="\u7cfb\u7edf\u3002metric_log",i={unversionedId:"zh/operations/system-tables/metric_log",id:"zh/operations/system-tables/metric_log",title:"\u7cfb\u7edf\u3002metric_log",description:"systemtables-metriclog}",source:"@site/docs/zh/operations/system-tables/metric_log.md",sourceDirName:"zh/operations/system-tables",slug:"/zh/operations/system-tables/metric_log",permalink:"/docs/zh/operations/system-tables/metric_log",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/operations/system-tables/metric_log.md",tags:[],version:"current",frontMatter:{slug:"/zh/operations/system-tables/metric_log",machine_translated:!0,machine_translated_rev:"5decc73b5dc60054f19087d3690c4eb99446a6c3"},sidebar:"chinese",previous:{title:"\u7cfb\u7edf\u3002\u5408\u5e76",permalink:"/docs/zh/operations/system-tables/merges"},next:{title:"system.metrics",permalink:"/docs/zh/operations/system-tables/metrics"}},l={},c=[],m={toc:c},p="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"system_tables-metric_log"},"\u7cfb\u7edf\u3002metric_log"),(0,a.kt)("p",null,"\u5305\u542b\u8868\u4e2d\u5ea6\u91cf\u503c\u7684\u5386\u53f2\u8bb0\u5f55 ",(0,a.kt)("inlineCode",{parentName:"p"},"system.metrics")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"system.events"),"\uff0c\u5b9a\u671f\u5237\u65b0\u5230\u78c1\u76d8\u3002\n\u6253\u5f00\u6307\u6807\u5386\u53f2\u8bb0\u5f55\u6536\u96c6 ",(0,a.kt)("inlineCode",{parentName:"p"},"system.metric_log"),",\u521b\u5efa ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/clickhouse-server/config.d/metric_log.xml")," \u5177\u6709\u4ee5\u4e0b\u5185\u5bb9:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<clickhouse>\n    <metric_log>\n        <database>system</database>\n        <table>metric_log</table>\n        <flush_interval_milliseconds>7500</flush_interval_milliseconds>\n        <collect_interval_milliseconds>1000</collect_interval_milliseconds>\n    </metric_log>\n</clickhouse>\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM system.metric_log LIMIT 1 FORMAT Vertical;\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"Row 1:\n\u2500\u2500\u2500\u2500\u2500\u2500\nevent_date:                                                 2020-02-18\nevent_time:                                                 2020-02-18 07:15:33\nmilliseconds:                                               554\nProfileEvent_Query:                                         0\nProfileEvent_SelectQuery:                                   0\nProfileEvent_InsertQuery:                                   0\nProfileEvent_FileOpen:                                      0\nProfileEvent_Seek:                                          0\nProfileEvent_ReadBufferFromFileDescriptorRead:              1\nProfileEvent_ReadBufferFromFileDescriptorReadFailed:        0\nProfileEvent_ReadBufferFromFileDescriptorReadBytes:         0\nProfileEvent_WriteBufferFromFileDescriptorWrite:            1\nProfileEvent_WriteBufferFromFileDescriptorWriteFailed:      0\nProfileEvent_WriteBufferFromFileDescriptorWriteBytes:       56\n...\nCurrentMetric_Query:                                        0\nCurrentMetric_Merge:                                        0\nCurrentMetric_PartMutation:                                 0\nCurrentMetric_ReplicatedFetch:                              0\nCurrentMetric_ReplicatedSend:                               0\nCurrentMetric_ReplicatedChecks:                             0\n...\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u53e6\u8bf7\u53c2\u9605")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/zh/operations/system-tables/asynchronous_metrics#system_tables-asynchronous_metrics"},"\u7cfb\u7edf\u3002asynchronous_metrics")," \u2014 Contains periodically calculated metrics."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/zh/operations/system-tables/events#system_tables-events"},"\u7cfb\u7edf\u3002\u6d3b\u52a8")," \u2014 Contains a number of events that occurred."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/zh/operations/system-tables/metrics#system_tables-metrics"},"\u7cfb\u7edf\u3002\u6307\u6807")," \u2014 Contains instantly calculated metrics."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/zh/operations/monitoring"},"\u76d1\u6d4b")," \u2014 Base concepts of ClickHouse monitoring.")))}u.isMDXComponent=!0}}]);