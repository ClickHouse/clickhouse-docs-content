"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[66480],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var s=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,s,a=function(e,t){if(null==e)return{};var r,s,a={},n=Object.keys(e);for(s=0;s<n.length;s++)r=n[s],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(s=0;s<n.length;s++)r=n[s],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=s.createContext({}),l=function(e){var t=s.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return s.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},m=s.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=l(r),d=a,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||n;return r?s.createElement(f,i(i({ref:t},u),{},{components:r})):s.createElement(f,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<n;l++)i[l]=r[l];return s.createElement.apply(null,i)}return s.createElement.apply(null,r)}m.displayName="MDXCreateElement"},77299:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>o,toc:()=>l});var s=r(87462),a=(r(67294),r(3905));const n={slug:"/en/faq/use-cases/time-series",title:"Can I use ClickHouse as a time-series database?",toc_hidden:!0,toc_priority:101},i="Can I Use ClickHouse As a Time-Series Database?",o={unversionedId:"en/faq/use-cases/time-series",id:"en/faq/use-cases/time-series",title:"Can I use ClickHouse as a time-series database?",description:"can-i-use-clickhouse-as-a-time-series-database}",source:"@site/docs/en/faq/use-cases/time-series.md",sourceDirName:"en/faq/use-cases",slug:"/en/faq/use-cases/time-series",permalink:"/docs/en/faq/use-cases/time-series",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/faq/use-cases/time-series.md",tags:[],version:"current",frontMatter:{slug:"/en/faq/use-cases/time-series",title:"Can I use ClickHouse as a time-series database?",toc_hidden:!0,toc_priority:101},sidebar:"english",previous:{title:"Can I use ClickHouse as a key-value storage?",permalink:"/docs/en/faq/use-cases/key-value"},next:{title:"What's New",permalink:"/docs/en/whats-new"}},c={},l=[],u={toc:l};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,s.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"can-i-use-clickhouse-as-a-time-series-database"},"Can I Use ClickHouse As a Time-Series Database?"),(0,a.kt)("p",null,"ClickHouse is a generic data storage solution for ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/faq/general/olap"},"OLAP")," workloads, while there are many specialized time-series database management systems. Nevertheless, ClickHouse\u2019s ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/faq/general/why-clickhouse-is-so-fast"},"focus on query execution speed")," allows it to outperform specialized systems in many cases. There are many independent benchmarks on this topic out there, so we\u2019re not going to conduct one here. Instead, let\u2019s focus on ClickHouse features that are important to use if that\u2019s your use case."),(0,a.kt)("p",null,"First of all, there are ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"../../sql-reference/statements/create/table#specialized-codecs"},"specialized codecs"))," which make typical time-series. Either common algorithms like ",(0,a.kt)("inlineCode",{parentName:"p"},"DoubleDelta")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Gorilla")," or specific to ClickHouse like ",(0,a.kt)("inlineCode",{parentName:"p"},"T64"),"."),(0,a.kt)("p",null,"Second, time-series queries often hit only recent data, like one day or one week old. It makes sense to use servers that have both fast nVME/SSD drives and high-capacity HDD drives. ClickHouse ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/mergetree-family/mergetree/##table_engine-mergetree-multiple-volumes"},"TTL")," feature allows to configure keeping fresh hot data on fast drives and gradually move it to slower drives as it ages. Rollup or removal of even older data is also possible if your requirements demand it."),(0,a.kt)("p",null,"Even though it\u2019s against ClickHouse philosophy of storing and processing raw data, you can use ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/create/view"},"materialized views")," to fit into even tighter latency or costs requirements."))}p.isMDXComponent=!0}}]);