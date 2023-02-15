"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[66581],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),m=i,g=u["".concat(c,".").concat(m)]||u[m]||f[m]||o;return r?n.createElement(g,a(a({ref:t},p),{},{components:r})):n.createElement(g,a({ref:t},p))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},43438:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(87462),i=(r(67294),r(3905));const o={sidebar_label:"Performance Tips",sidebar_position:5,keywords:["clickhouse","go","client","high-level","api","database","sql","performance"],slug:"/en/integrations/go/clickhouse-go/performance-tips",description:"Performance Tips"},a="Performance Tips",s={unversionedId:"en/integrations/language-clients/go/clickhouse-go/performance-tips",id:"en/integrations/language-clients/go/clickhouse-go/performance-tips",title:"Performance Tips",description:"Performance Tips",source:"@site/docs/en/integrations/language-clients/go/clickhouse-go/performance-tips.md",sourceDirName:"en/integrations/language-clients/go/clickhouse-go",slug:"/en/integrations/go/clickhouse-go/performance-tips",permalink:"/docs/en/integrations/go/clickhouse-go/performance-tips",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/integrations/language-clients/go/clickhouse-go/performance-tips.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_label:"Performance Tips",sidebar_position:5,keywords:["clickhouse","go","client","high-level","api","database","sql","performance"],slug:"/en/integrations/go/clickhouse-go/performance-tips",description:"Performance Tips"},sidebar:"english",previous:{title:"Database/SQL API",permalink:"/docs/en/integrations/go/clickhouse-go/database-sql-api"},next:{title:"Python",permalink:"/docs/en/integrations/python"}},c={},l=[],p={toc:l},u="wrapper";function f(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"performance-tips"},"Performance Tips"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Utilize the ClickHouse API where possible, especially for primitive types. This avoids significant reflection and indirection."),(0,i.kt)("li",{parentName:"ul"},"If reading large datasets, consider modifying the ",(0,i.kt)("a",{parentName:"li",href:"clickhouse-api#connection-settings"},"BlockBufferSize"),". This will increase the memory footprint but will mean more blocks can be decoded in parallel during row iteration. The default value of 2 is conservative and minimizes memory overhead. Higher values will mean more blocks in memory. This requires testing since different queries can produce different block sizes. It can therefore be set on a ",(0,i.kt)("a",{parentName:"li",href:"clickhouse-api#using-context"},"query level")," via the Context."),(0,i.kt)("li",{parentName:"ul"},"Be specific with your types when inserting data. While the client aims to be flexible, e.g., allowing strings to be parsed for UUIDs or IPs, this requires data validation and incurs a cost at insert time."),(0,i.kt)("li",{parentName:"ul"},"Use column-oriented inserts where possible. Again these should be strongly typed, avoiding the need for the client to convert your values."),(0,i.kt)("li",{parentName:"ul"},"If using the JSON type, encoding of structs and maps to a columnar format is done on the client. This requires reflection, which can be expensive and more work for the client. Conversely, it requires less computation by ClickHouse at insert time. To shift computation to ClickHouse, insert data as a string. Where this work is performed is a design decision but ClickHouse will be more performant if you have cluster resource capacity."),(0,i.kt)("li",{parentName:"ul"},"Follow ClickHouse ",(0,i.kt)("a",{parentName:"li",href:"https://clickhouse.com/docs/en/sql-reference/statements/insert-into/#performance-considerations"},"recommendations")," for optimal insert performance.")))}f.isMDXComponent=!0}}]);