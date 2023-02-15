"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[19351,89712],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},y=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),y=r,g=u["".concat(c,".").concat(y)]||u[y]||d[y]||o;return n?i.createElement(g,a(a({ref:t},p),{},{components:n})):i.createElement(g,a({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=y;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:r,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}y.displayName="MDXCreateElement"},73932:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var i=n(87462),r=(n(67294),n(3905));const o={slug:"/en/cloud/bestpractices/low-cardinality-partitioning-key",sidebar_label:"Choose a Low Cardinality Partitioning Key",title:"Choose a Low Cardinality Partitioning Key"},a=void 0,s={unversionedId:"en/cloud/bestpractices/partitioningkey",id:"en/cloud/bestpractices/partitioningkey",title:"Choose a Low Cardinality Partitioning Key",description:"When you send an insert statement (that should contain many rows - see section above) to a table in ClickHouse Cloud, and that",source:"@site/docs/en/cloud/bestpractices/partitioningkey.md",sourceDirName:"en/cloud/bestpractices",slug:"/en/cloud/bestpractices/low-cardinality-partitioning-key",permalink:"/docs/en/cloud/bestpractices/low-cardinality-partitioning-key",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/cloud/bestpractices/partitioningkey.md",tags:[],version:"current",frontMatter:{slug:"/en/cloud/bestpractices/low-cardinality-partitioning-key",sidebar_label:"Choose a Low Cardinality Partitioning Key",title:"Choose a Low Cardinality Partitioning Key"},sidebar:"english",previous:{title:"Avoid Optimize Final",permalink:"/docs/en/cloud/bestpractices/avoid-optimize-final"},next:{title:"Manage Cloud",permalink:"/docs/category/manage-cloud"}},c={},l=[],p={toc:l},u="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,i.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"When you send an insert statement (that should contain many rows - see ",(0,r.kt)("a",{parentName:"p",href:"#ingest-data-in-bulk"},"section above"),") to a table in ClickHouse Cloud, and that\ntable is not using a ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/mergetree-family/custom-partitioning-key"},"partitioning key")," then all row data from that insert is written into a new part on storage:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"compression block diagram",src:n(19056).Z,width:"2406",height:"1425"})),(0,r.kt)("p",null,"However, when you send an insert statement to a table in ClickHouse Cloud, and that table has a partitioning key, then ClickHouse:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"checks the partitioning key values of the rows contained in the insert"),(0,r.kt)("li",{parentName:"ul"},"creates one new part on storage per distinct partitioning key value"),(0,r.kt)("li",{parentName:"ul"},"places the rows in the corresponding parts by partitioning key value")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"compression block diagram",src:n(96830).Z,width:"2406",height:"1425"})),(0,r.kt)("p",null,"Therefore, to minimize the number of write requests to the ClickHouse Cloud object storage, use a low cardinality partitioning key or avoid using any partitioning key for your table."))}d.isMDXComponent=!0},88262:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>y,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var i=n(87462),r=(n(67294),n(3905)),o=n(73932);const a={slug:"/en/optimize/partitioning-key",sidebar_label:"Partitioning Key",title:"Choose a Low Cardinality Partitioning Key"},s=void 0,c={unversionedId:"en/guides/best-practices/partitioningkey",id:"en/guides/best-practices/partitioningkey",title:"Choose a Low Cardinality Partitioning Key",description:"",source:"@site/docs/en/guides/best-practices/partitioningkey.md",sourceDirName:"en/guides/best-practices",slug:"/en/optimize/partitioning-key",permalink:"/docs/en/optimize/partitioning-key",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/guides/best-practices/partitioningkey.md",tags:[],version:"current",frontMatter:{slug:"/en/optimize/partitioning-key",sidebar_label:"Partitioning Key",title:"Choose a Low Cardinality Partitioning Key"},sidebar:"english",previous:{title:"Bulk Inserts",permalink:"/docs/en/optimize/bulk-inserts"},next:{title:"Primary Indexes",permalink:"/docs/en/guides/improving-query-performance/sparse-primary-indexes"}},l={},p=[],u={toc:p},d="wrapper";function y(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.default,{mdxType:"Content"}))}y.isMDXComponent=!0},19056:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/partitioning-01-20916be1fcc18359081d4620359121f4.png"},96830:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/partitioning-02-e7008ab710a593c841b5983a62a82378.png"}}]);