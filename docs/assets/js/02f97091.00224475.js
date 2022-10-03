"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[66581],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=l(n),m=i,g=f["".concat(c,".").concat(m)]||f[m]||p[m]||o;return n?r.createElement(g,a(a({ref:t},u),{},{components:n})):r.createElement(g,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},43438:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],s={sidebar_label:"Performance Tips",sidebar_position:5,keywords:["clickhouse","go","client","high-level","api","database","sql","performance"],slug:"/en/integrations/go/clickhouse-go/performance-tips",description:"Performance Tips"},c="Performance Tips",l={unversionedId:"en/integrations/language-clients/go/clickhouse-go/performance-tips",id:"en/integrations/language-clients/go/clickhouse-go/performance-tips",title:"Performance Tips",description:"Performance Tips",source:"@site/docs/en/integrations/language-clients/go/clickhouse-go/performance-tips.md",sourceDirName:"en/integrations/language-clients/go/clickhouse-go",slug:"/en/integrations/go/clickhouse-go/performance-tips",permalink:"/docs/en/integrations/go/clickhouse-go/performance-tips",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/integrations/language-clients/go/clickhouse-go/performance-tips.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_label:"Performance Tips",sidebar_position:5,keywords:["clickhouse","go","client","high-level","api","database","sql","performance"],slug:"/en/integrations/go/clickhouse-go/performance-tips",description:"Performance Tips"},sidebar:"english",previous:{title:"Database/SQL API",permalink:"/docs/en/integrations/go/clickhouse-go/database-sql-api"},next:{title:"Data ingestion",permalink:"/docs/en/integrations/data-ingestion"}},u={},p=[],f={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"performance-tips"},"Performance Tips"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Utilize the ClickHouse API where possible, especially for primitive types. This avoids significant reflection and indirection."),(0,o.kt)("li",{parentName:"ul"},"Be specific with your types when inserting data. While the client aims to be flexible, e.g., allowing strings to be parsed for UUIDs or IPs, this requires data validation and incurs a cost at insert time."),(0,o.kt)("li",{parentName:"ul"},"Use column-oriented inserts where possible. Again these should be strongly typed, avoiding the need for the client to convert your values."),(0,o.kt)("li",{parentName:"ul"},"If using the JSON type, encoding of structs and maps to a columnar format is done on the client. This requires reflection, which can be expensive and more work for the client. Conversely, it requires less computation by ClickHouse at insert time. To shift computation to ClickHouse, insert data as a string. Where this work is performed is a design decision but ClickHouse will be more performant if you have cluster resource capacity."),(0,o.kt)("li",{parentName:"ul"},"Follow ClickHouse ",(0,o.kt)("a",{parentName:"li",href:"https://clickhouse.com/docs/en/sql-reference/statements/insert-into/#performance-considerations"},"recommendations")," for optimal insert performance.")))}m.isMDXComponent=!0}}]);