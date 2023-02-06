"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[40610],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>f});var r=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(o),g=a,f=d["".concat(c,".").concat(g)]||d[g]||p[g]||n;return o?r.createElement(f,i(i({ref:t},u),{},{components:o})):r.createElement(f,i({ref:t},u))}));function f(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,i=new Array(n);i[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<n;l++)i[l]=o[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}g.displayName="MDXCreateElement"},20353:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>l});var r=o(87462),a=(o(67294),o(3905));const n={sidebar_position:50,sidebar_label:"Object Storage to ClickHouse Cloud"},i="Move data from Cloud Object Storage to ClickHouse Cloud",s={unversionedId:"en/integrations/migration/object-storage-to-clickhouse",id:"en/integrations/migration/object-storage-to-clickhouse",title:"Move data from Cloud Object Storage to ClickHouse Cloud",description:"Currently, ClickHouse Cloud only supports Amazon AWS S3 Object Storage.",source:"@site/docs/en/integrations/migration/object-storage-to-clickhouse.md",sourceDirName:"en/integrations/migration",slug:"/en/integrations/migration/object-storage-to-clickhouse",permalink:"/docs/en/integrations/migration/object-storage-to-clickhouse",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/integrations/migration/object-storage-to-clickhouse.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{sidebar_position:50,sidebar_label:"Object Storage to ClickHouse Cloud"},sidebar:"english",previous:{title:"Using a 3rd-party ETL Tool",permalink:"/docs/en/integrations/migration/etl-tool-to-clickhouse"},next:{title:"Migration Options",permalink:"/docs/en/integrations/redshift/migrate-redshift-to-clickhouse"}},c={},l=[],u={toc:l},d="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"move-data-from-cloud-object-storage-to-clickhouse-cloud"},"Move data from Cloud Object Storage to ClickHouse Cloud"),(0,a.kt)("img",{src:o(55384).Z,class:"image",alt:"Migrating Self-managed ClickHouse",style:{width:"90%",padding:"30px"}}),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Currently, ClickHouse Cloud only supports Amazon AWS S3 Object Storage.")),(0,a.kt)("p",null,"If you use a Cloud Object Storage as a data lake and wish to import this data into ClickHouse Cloud,\nor if your current database system is able to directly offload data into a Cloud Object Storage, then you can use one of the\ntable functions - for now, ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/table-functions/s3"},"s3")," or ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/table-functions/s3Cluster"},"s3Cluster"),") - for migrating data stored in Cloud Object Storage into a ClickHouse Cloud table."),(0,a.kt)("p",null,"If your current database system is not able to directly offload data into a Cloud Object Storage, you could use a ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/integrations/migration/etl-tool-to-clickhouse"},"third-party ETL/ELT tool")," or ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/integrations/migration/clickhouse-local"},"clickhouse-local")," for moving data\nfrom you current database system to Cloud Object Storage, in order to migrate that data in a second step into a ClickHouse Cloud table."),(0,a.kt)("p",null,"Although this is a two steps process (offload data into a Cloud Object Storage, then load into ClickHouse), the advantage is that this\nscales to petabytes thanks to a ",(0,a.kt)("a",{parentName:"p",href:"https://clickhouse.com/blog/getting-data-into-clickhouse-part-3-s3"},"solid ClickHouse Cloud")," support of highly-parallel reads from Cloud Object Storage.\nAlso you can leverage sophisticated and compressed formats like ",(0,a.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/interfaces/formats/#data-format-parquet"},"Parquet"),"."),(0,a.kt)("p",null,"There is a ",(0,a.kt)("a",{parentName:"p",href:"https://clickhouse.com/blog/getting-data-into-clickhouse-part-3-s3"},"blog article")," with concrete code examples showing how you can get data into ClickHouse Cloud using S3."))}p.isMDXComponent=!0},55384:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/object-storage-01-5d47cf6f1de90d74fe94a6778de847c0.png"}}]);