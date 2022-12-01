"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[30353],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(a),m=i,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return a?n.createElement(h,s(s({ref:t},p),{},{components:a})):n.createElement(h,s({ref:t},p))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,s=new Array(r);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<r;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},28842:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=a(87462),i=(a(67294),a(3905));const r={sidebar_label:"Pivot to ClickHouse",sidebar_position:4,slug:"/en/integrations/redshift/redshift-pivot-to-clickhouse",description:"Pivot using S3"},s="Pivot Data from Redshift to ClickHouse using S3",o={unversionedId:"en/integrations/migration/redshift/redshift-pivot-to-clickhouse",id:"en/integrations/migration/redshift/redshift-pivot-to-clickhouse",title:"Pivot Data from Redshift to ClickHouse using S3",description:"Pivot using S3",source:"@site/docs/en/integrations/migration/redshift/redshift-pivot-to-clickhouse.md",sourceDirName:"en/integrations/migration/redshift",slug:"/en/integrations/redshift/redshift-pivot-to-clickhouse",permalink:"/docs/en/integrations/redshift/redshift-pivot-to-clickhouse",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/integrations/migration/redshift/redshift-pivot-to-clickhouse.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_label:"Pivot to ClickHouse",sidebar_position:4,slug:"/en/integrations/redshift/redshift-pivot-to-clickhouse",description:"Pivot using S3"},sidebar:"english",previous:{title:"Pull to ClickHouse",permalink:"/docs/en/integrations/redshift/redshift-pull-to-clickhouse"},next:{title:"Optimize",permalink:"/docs/en/optimize"}},l={},c=[{value:"Pros",id:"pros",level:4},{value:"Cons",id:"cons",level:4},{value:"Tutorial",id:"tutorial",level:3}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"pivot-data-from-redshift-to-clickhouse-using-s3"},"Pivot Data from Redshift to ClickHouse using S3"),(0,i.kt)("p",null,"In this scenario, we export data to S3 in an intermediary pivot format and, in a second step, load the data from S3 into ClickHouse."),(0,i.kt)("img",{src:a(42557).Z,class:"image",alt:"PIVOT from Redshit using S3"}),(0,i.kt)("h4",{id:"pros"},"Pros"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Both Redshift and ClickHouse have powerful S3 integration features."),(0,i.kt)("li",{parentName:"ul"},"Leverages the existing features such as the Redshift ",(0,i.kt)("inlineCode",{parentName:"li"},"UNLOAD")," command and ClickHouse S3 table function / table engine."),(0,i.kt)("li",{parentName:"ul"},"Scales seamlessly thanks to parallel reads and high throughput capabilities from/to S3 in ClickHouse."),(0,i.kt)("li",{parentName:"ul"},"Can leverage sophisticated and compressed formats like Apache Parquet.")),(0,i.kt)("h4",{id:"cons"},"Cons"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Two steps in the process (unload from Redshift then load into ClickHouse).")),(0,i.kt)("h3",{id:"tutorial"},"Tutorial"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Using Redshift's ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/redshift/latest/dg/r_UNLOAD.html"},"UNLOAD")," feature, export the data into a an existing private S3 bucket:"),(0,i.kt)("img",{src:a(87836).Z,class:"image",alt:"UNLOAD from Redshit to S3"}),(0,i.kt)("p",{parentName:"li"},"It will generate part files containing the raw data in S3"),(0,i.kt)("img",{src:a(53021).Z,class:"image",alt:"Data in S3"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create the table in ClickHouse:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE users\n(\n    username String,\n    firstname String,\n    lastname String\n)\nENGINE = MergeTree\nORDER BY username\n")),(0,i.kt)("p",{parentName:"li"},"Alternatively, ClickHouse can try to infer the table structure using ",(0,i.kt)("inlineCode",{parentName:"p"},"CREATE TABLE ... EMPTY AS SELECT"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE users\nENGINE = MergeTree ORDER BY username\nEMPTY AS\nSELECT * FROM s3('https://your-bucket.s3.amazonaws.com/unload/users/*', '<aws_access_key>', '<aws_secret_access_key>', 'CSV')\n")),(0,i.kt)("p",{parentName:"li"},"This works especially well when the data is in a format that contains information about data types, like Parquet.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Load the S3 files into ClickHouse using an ",(0,i.kt)("inlineCode",{parentName:"p"},"INSERT INTO ... SELECT")," statement:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO users SELECT *\nFROM s3('https://your-bucket.s3.amazonaws.com/unload/users/*', '<aws_access_key>', '<aws_secret_access_key>', 'CSV')\n")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-response"},"Query id: 2e7e219a-6124-461c-8d75-e4f5002c8557\n\nOk.\n\n0 rows in set. Elapsed: 0.545 sec. Processed 49.99 thousand rows, 2.34 MB (91.72 thousand rows/s., 4.30 MB/s.)\n")))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This example used CSV as the pivot format. However, for production workloads we recommend Apache Parquet as the best option for large migrations since it comes with compression and can save some storage costs while reducing transfer times. (By default, each row group is compressed using SNAPPY). ClickHouse also leverages Parquet's column orientation to speed up data ingestion."))))}u.isMDXComponent=!0},42557:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/pivot-3fe3713d3a34ba2c8740019113d000dc.png"},87836:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/s3-1-be9a86f6c8ae20e367d00b100700d396.png"},53021:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/s3-2-dbabae19318318b3d931ff907823cf7a.png"}}]);