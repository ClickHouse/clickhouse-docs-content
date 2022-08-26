"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[87126],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(r),d=s,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||i;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function d(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=r.length,a=new Array(i);a[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,a[1]=o;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},43491:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var n=r(87462),s=r(63366),i=(r(67294),r(3905)),a=["components"],o={slug:"/zh/operations/system-tables/clusters"},l="system.clusters",c={unversionedId:"zh/operations/system-tables/clusters",id:"zh/operations/system-tables/clusters",title:"system.clusters",description:"system-clusters}",source:"@site/docs/zh/operations/system-tables/clusters.md",sourceDirName:"zh/operations/system-tables",slug:"/zh/operations/system-tables/clusters",permalink:"/docs/zh/operations/system-tables/clusters",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/operations/system-tables/clusters.md",tags:[],version:"current",frontMatter:{slug:"/zh/operations/system-tables/clusters"},sidebar:"chinese",previous:{title:"system.asynchronous_metrics",permalink:"/docs/zh/operations/system-tables/asynchronous_metrics"},next:{title:"system.columns",permalink:"/docs/zh/operations/system-tables/columns"}},u={},p=[],m={toc:p};function d(e){var t=e.components,r=(0,s.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"system-clusters"},"system.clusters"),(0,i.kt)("p",null,"\u5305\u542b\u6709\u5173\u914d\u7f6e\u6587\u4ef6\u4e2d\u53ef\u7528\u7684\u96c6\u7fa4\u53ca\u5176\u4e2d\u7684\u670d\u52a1\u5668\u7684\u4fe1\u606f\u3002"),(0,i.kt)("p",null,"\u5217:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cluster")," (String) \u2014 \u96c6\u7fa4\u540d\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"shard_num")," (UInt32) \u2014 \u96c6\u7fa4\u4e2d\u7684\u5206\u7247\u6570\uff0c\u4ece1\u5f00\u59cb\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"shard_weight")," (UInt32) \u2014 \u5199\u6570\u636e\u65f6\u8be5\u5206\u7247\u7684\u76f8\u5bf9\u6743\u91cd\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"replica_num")," (UInt32) \u2014 \u5206\u7247\u7684\u526f\u672c\u6570\u91cf\uff0c\u4ece1\u5f00\u59cb\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"host_name")," (String) \u2014 \u914d\u7f6e\u4e2d\u6307\u5b9a\u7684\u4e3b\u673a\u540d\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"host_address")," (String) \u2014 \u4eceDNS\u83b7\u53d6\u7684\u4e3b\u673aIP\u5730\u5740\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"port")," (UInt16) \u2014 \u8fde\u63a5\u5230\u670d\u52a1\u5668\u7684\u7aef\u53e3\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"user")," (String) \u2014 \u8fde\u63a5\u5230\u670d\u52a1\u5668\u7684\u7528\u6237\u540d\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"errors_count")," (UInt32) - \u6b64\u4e3b\u673a\u65e0\u6cd5\u8bbf\u95ee\u526f\u672c\u7684\u6b21\u6570\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"slowdowns_count")," (UInt32) - \u4e0e\u5bf9\u51b2\u8bf7\u6c42\u5efa\u7acb\u8fde\u63a5\u65f6\u5bfc\u81f4\u66f4\u6539\u526f\u672c\u7684\u51cf\u901f\u6b21\u6570\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"estimated_recovery_time")," (UInt32) - \u5269\u4e0b\u7684\u79d2\u6570\uff0c\u76f4\u5230\u526f\u672c\u9519\u8bef\u8ba1\u6570\u5f52\u96f6\u5e76\u88ab\u89c6\u4e3a\u6062\u590d\u6b63\u5e38\u3002")),(0,i.kt)("p",null,"\u8bf7\u6ce8\u610f ",(0,i.kt)("inlineCode",{parentName:"p"},"errors_count")," \u6bcf\u4e2a\u67e5\u8be2\u96c6\u7fa4\u66f4\u65b0\u4e00\u6b21\uff0c\u4f46 ",(0,i.kt)("inlineCode",{parentName:"p"},"estimated_recovery_time")," \u6309\u9700\u91cd\u65b0\u8ba1\u7b97\u3002 \u6240\u4ee5\u6709\u53ef\u80fd\u662f\u975e\u96f6\u7684\u60c5\u51b5 ",(0,i.kt)("inlineCode",{parentName:"p"},"errors_count")," \u548c\u96f6 ",(0,i.kt)("inlineCode",{parentName:"p"},"estimated_recovery_time"),"\uff0c\u4e0b\u4e00\u4e2a\u67e5\u8be2\u5c06\u4e3a\u96f6 ",(0,i.kt)("inlineCode",{parentName:"p"},"errors_count")," \u5e76\u5c1d\u8bd5\u4f7f\u7528\u526f\u672c\uff0c\u5c31\u597d\u50cf\u5b83\u6ca1\u6709\u9519\u8bef\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u53e6\u8bf7\u53c2\u9605")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/zh/engines/table-engines/special/distributed"},"\u8868\u5f15\u64ce\u5206\u5e03\u5f0f")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/zh/operations/settings/settings#settings-distributed_replica_error_cap"},"distributed_replica_error_cap\u8bbe\u7f6e")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/zh/operations/settings/settings#settings-distributed_replica_error_half_life"},"distributed_replica_error_half_life\u8bbe\u7f6e"))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/zh/operations/system-tables/clusters"},"\u539f\u6587")," "))}d.isMDXComponent=!0}}]);