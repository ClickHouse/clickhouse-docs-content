"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[88216],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>m});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var l=n.createContext({}),c=function(t){var e=n.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=c(t.components);return n.createElement(l.Provider,{value:e},t.children)},u="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,l=t.parentName,d=s(t,["components","mdxType","originalType","parentName"]),u=c(a),f=r,m=u["".concat(l,".").concat(f)]||u[f]||p[f]||o;return a?n.createElement(m,i(i({ref:e},d),{},{components:a})):n.createElement(m,i({ref:e},d))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,i=new Array(o);i[0]=f;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[u]="string"==typeof t?t:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},65910:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={slug:"/en/integrations/data-formats",sidebar_label:"Overview",sidebar_position:1,keywords:["clickhouse","CSV","TSV","Parquet","clickhouse-client","clickhouse-local"]},i="Importing from various data formats to ClickHouse",s={unversionedId:"en/integrations/data-ingestion/data-formats/intro",id:"en/integrations/data-ingestion/data-formats/intro",title:"Importing from various data formats to ClickHouse",description:"In this section of the docs, you can find examples for loading from various file types.",source:"@site/docs/en/integrations/data-ingestion/data-formats/intro.md",sourceDirName:"en/integrations/data-ingestion/data-formats",slug:"/en/integrations/data-formats",permalink:"/docs/en/integrations/data-formats",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/integrations/data-ingestion/data-formats/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/en/integrations/data-formats",sidebar_label:"Overview",sidebar_position:1,keywords:["clickhouse","CSV","TSV","Parquet","clickhouse-client","clickhouse-local"]}},l={},c=[{value:"<strong>Binary</strong>",id:"binary",level:3},{value:"<strong>CSV and TSV</strong>",id:"csv-and-tsv",level:3},{value:"<strong>JSON</strong>",id:"json",level:3},{value:"<strong>Parquet data</strong>",id:"parquet-data",level:3},{value:"<strong>SQL data</strong>",id:"sql-data",level:3},{value:"Related Content",id:"related-content",level:2}],d={toc:c},u="wrapper";function p(t){let{components:e,...a}=t;return(0,r.kt)(u,(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"importing-from-various-data-formats-to-clickhouse"},"Importing from various data formats to ClickHouse"),(0,r.kt)("p",null,"In this section of the docs, you can find examples for loading from various file types."),(0,r.kt)("h3",{id:"binary"},(0,r.kt)("a",{parentName:"h3",href:"/docs/en/integrations/data-formats/binary-native"},(0,r.kt)("strong",{parentName:"a"},"Binary"))),(0,r.kt)("p",null,"Export and load binary formats such as ClickHouse Native, MessagePack, Protocol Buffers and Cap\u2019n Proto."),(0,r.kt)("h3",{id:"csv-and-tsv"},(0,r.kt)("a",{parentName:"h3",href:"/docs/en/integrations/data-formats/csv-tsv"},(0,r.kt)("strong",{parentName:"a"},"CSV and TSV"))),(0,r.kt)("p",null,"Import and export the CSV family, including TSV, with custom headers and separators."),(0,r.kt)("h3",{id:"json"},(0,r.kt)("a",{parentName:"h3",href:"/docs/en/integrations/data-formats/json"},(0,r.kt)("strong",{parentName:"a"},"JSON"))),(0,r.kt)("p",null,"Load and export JSON in various formats including as objects and line delimited NDJSON."),(0,r.kt)("h3",{id:"parquet-data"},(0,r.kt)("a",{parentName:"h3",href:"/docs/en/integrations/data-formats/parquet"},(0,r.kt)("strong",{parentName:"a"},"Parquet data"))),(0,r.kt)("p",null,"Handle common Apache formats such as Parquet and Arrow."),(0,r.kt)("h3",{id:"sql-data"},(0,r.kt)("a",{parentName:"h3",href:"/docs/en/integrations/data-formats/sql"},(0,r.kt)("strong",{parentName:"a"},"SQL data"))),(0,r.kt)("p",null,"Need a SQL dump to import into MySQL or Postgresql? Look no further."),(0,r.kt)("p",null,"If you are looking to connect a BI tool like Grafana, Tableau and others, check out the ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/integrations/data-visualization"},"Visualize category")," of the docs."),(0,r.kt)("h2",{id:"related-content"},"Related Content"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Blog: ",(0,r.kt)("a",{parentName:"li",href:"https://clickhouse.com/blog/data-formats-clickhouse-csv-tsv-parquet-native"},"An Introduction to Data Formats in ClickHouse"))))}p.isMDXComponent=!0}}]);