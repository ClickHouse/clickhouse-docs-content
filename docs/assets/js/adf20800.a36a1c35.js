"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[66480],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var s=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,s,r=function(e,t){if(null==e)return{};var a,s,r={},n=Object.keys(e);for(s=0;s<n.length;s++)a=n[s],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(s=0;s<n.length;s++)a=n[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=s.createContext({}),c=function(e){var t=s.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return s.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},m=s.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(a),d=r,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||n;return a?s.createElement(f,i(i({ref:t},u),{},{components:a})):s.createElement(f,i({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<n;c++)i[c]=a[c];return s.createElement.apply(null,i)}return s.createElement.apply(null,a)}m.displayName="MDXCreateElement"},77299:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>o,toc:()=>c});var s=a(87462),r=(a(67294),a(3905));const n={slug:"/en/faq/use-cases/time-series",title:"Can I use ClickHouse as a time-series database?",toc_hidden:!0,toc_priority:101},i="Can I Use ClickHouse As a Time-Series Database?",o={unversionedId:"en/faq/use-cases/time-series",id:"en/faq/use-cases/time-series",title:"Can I use ClickHouse as a time-series database?",description:"can-i-use-clickhouse-as-a-time-series-database}",source:"@site/docs/en/faq/use-cases/time-series.md",sourceDirName:"en/faq/use-cases",slug:"/en/faq/use-cases/time-series",permalink:"/docs/en/faq/use-cases/time-series",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/faq/use-cases/time-series.md",tags:[],version:"current",frontMatter:{slug:"/en/faq/use-cases/time-series",title:"Can I use ClickHouse as a time-series database?",toc_hidden:!0,toc_priority:101},sidebar:"english",previous:{title:"Can I use ClickHouse as a key-value storage?",permalink:"/docs/en/faq/use-cases/key-value"},next:{title:"Marketplace",permalink:"/docs/en/faq/marketplace"}},l={},c=[{value:"Related Content",id:"related-content",level:2}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,s.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"can-i-use-clickhouse-as-a-time-series-database"},"Can I Use ClickHouse As a Time-Series Database?"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note: Please see the blog ",(0,r.kt)("a",{parentName:"em",href:"https://clickhouse.com/blog/working-with-time-series-data-and-functions-ClickHouse"},"Working with Time series data in ClickHouse")," for additional examples of using ClickHouse for time series analysis.")),(0,r.kt)("p",null,"ClickHouse is a generic data storage solution for ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/faq/general/olap"},"OLAP")," workloads, while there are many specialized time-series database management systems. Nevertheless, ClickHouse\u2019s ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/faq/general/why-clickhouse-is-so-fast"},"focus on query execution speed")," allows it to outperform specialized systems in many cases. There are many independent benchmarks on this topic out there, so we\u2019re not going to conduct one here. Instead, let\u2019s focus on ClickHouse features that are important to use if that\u2019s your use case."),(0,r.kt)("p",null,"First of all, there are ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"../../sql-reference/statements/create/table#specialized-codecs"},"specialized codecs"))," which make typical time-series. Either common algorithms like ",(0,r.kt)("inlineCode",{parentName:"p"},"DoubleDelta")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Gorilla")," or specific to ClickHouse like ",(0,r.kt)("inlineCode",{parentName:"p"},"T64"),"."),(0,r.kt)("p",null,"Second, time-series queries often hit only recent data, like one day or one week old. It makes sense to use servers that have both fast nVME/SSD drives and high-capacity HDD drives. ClickHouse ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/mergetree-family/mergetree/##table_engine-mergetree-multiple-volumes"},"TTL")," feature allows to configure keeping fresh hot data on fast drives and gradually move it to slower drives as it ages. Rollup or removal of even older data is also possible if your requirements demand it."),(0,r.kt)("p",null,"Even though it\u2019s against ClickHouse philosophy of storing and processing raw data, you can use ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/create/view"},"materialized views")," to fit into even tighter latency or costs requirements."),(0,r.kt)("h2",{id:"related-content"},"Related Content"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Blog: ",(0,r.kt)("a",{parentName:"li",href:"https://clickhouse.com/blog/working-with-time-series-data-and-functions-ClickHouse"},"Working with time series data in ClickHouse"))))}p.isMDXComponent=!0}}]);