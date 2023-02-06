"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[95179],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),m=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=m(n),d=a,k=c["".concat(s,".").concat(d)]||c[d]||u[d]||i;return n?r.createElement(k,l(l({ref:t},p),{},{components:n})):r.createElement(k,l({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var m=2;m<i;m++)l[m]=n[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},75852:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var r=n(87462),a=(n(67294),n(3905));const i={slug:"/zh/operations/system-tables/text_log",machine_translated:!0,machine_translated_rev:"5decc73b5dc60054f19087d3690c4eb99446a6c3"},l="\u7cfb\u7edf\u3002text_log",o={unversionedId:"zh/operations/system-tables/text_log",id:"zh/operations/system-tables/text_log",title:"\u7cfb\u7edf\u3002text_log",description:"systemtables-textlog}",source:"@site/docs/zh/operations/system-tables/text_log.md",sourceDirName:"zh/operations/system-tables",slug:"/zh/operations/system-tables/text_log",permalink:"/docs/zh/operations/system-tables/text_log",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/operations/system-tables/text_log.md",tags:[],version:"current",frontMatter:{slug:"/zh/operations/system-tables/text_log",machine_translated:!0,machine_translated_rev:"5decc73b5dc60054f19087d3690c4eb99446a6c3"},sidebar:"chinese",previous:{title:"system.tables",permalink:"/docs/zh/operations/system-tables/tables"},next:{title:"system.time_zones",permalink:"/docs/zh/operations/system-tables/time_zones"}},s={},m=[],p={toc:m},c="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"system_tables-text_log"},"\u7cfb\u7edf\u3002text_log"),(0,a.kt)("p",null,"\u5305\u542b\u65e5\u5fd7\u8bb0\u5f55\u6761\u76ee\u3002 \u8fdb\u5165\u8be5\u8868\u7684\u65e5\u5fd7\u8bb0\u5f55\u7ea7\u522b\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u8fdb\u884c\u9650\u5236 ",(0,a.kt)("inlineCode",{parentName:"p"},"text_log.level")," \u670d\u52a1\u5668\u8bbe\u7f6e\u3002"),(0,a.kt)("p",null,"\u5217:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"event_date")," (Date) \u2014 Date of the entry."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"event_time")," (DateTime) \u2014 Time of the entry."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"microseconds")," (UInt32) \u2014 Microseconds of the entry."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"thread_name")," (String) \u2014 Name of the thread from which the logging was done."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"thread_id")," (UInt64) \u2014 OS thread ID."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"level")," (",(0,a.kt)("inlineCode",{parentName:"li"},"Enum8"),") \u2014 Entry level. Possible values:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"li"},"'Fatal'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"2")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"li"},"'Critical'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"3")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"li"},"'Error'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"4")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"li"},"'Warning'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"5")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"li"},"'Notice'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"6")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"li"},"'Information'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"7")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"li"},"'Debug'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"8")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"li"},"'Trace'"),"."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"query_id")," (String) \u2014 ID of the query."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"logger_name")," (LowCardinality(String)) \u2014 Name of the logger (i.e.\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"DDLWorker"),")."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"message")," (String) \u2014 The message itself."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"revision")," (UInt32) \u2014 ClickHouse revision."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"source_file")," (LowCardinality(String)) \u2014 Source file from which the logging was done."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"source_line")," (UInt64) \u2014 Source line from which the logging was done.")))}u.isMDXComponent=!0}}]);