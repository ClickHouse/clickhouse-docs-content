"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[57316],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),g=r,f=p["".concat(l,".").concat(g)]||p[g]||d[g]||a;return n?i.createElement(f,o(o({ref:t},u),{},{components:n})):i.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},75862:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var i=n(87462),r=(n(67294),n(3905));const a={sidebar_label:"Overview",sidebar_position:1,keywords:["clickhouse","ingest","insert","data","ingestion","insertion"],pagination_next:"en/integrations/data-ingestion/upload-file-to-clickhouse-cloud"},o="Inserting Data into ClickHouse",s={unversionedId:"en/integrations/data-ingestion",id:"en/integrations/data-ingestion",title:"Inserting Data into ClickHouse",description:'<iframe src="https://player.vimeo.com/video/754267391?h=71555a7bbf"',source:"@site/docs/en/integrations/data-ingestion.md",sourceDirName:"en/integrations",slug:"/en/integrations/data-ingestion",permalink:"/docs/en/integrations/data-ingestion",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/integrations/data-ingestion.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Overview",sidebar_position:1,keywords:["clickhouse","ingest","insert","data","ingestion","insertion"],pagination_next:"en/integrations/data-ingestion/upload-file-to-clickhouse-cloud"},sidebar:"english",previous:{title:"Proxies",permalink:"/docs/en/interfaces/third-party/proxy"},next:{title:"Upload a CSV File",permalink:"/docs/en/integrations/data-ingestion/upload-file-to-clickhouse-cloud"}},l={},c=[],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"inserting-data-into-clickhouse"},"Inserting Data into ClickHouse"),(0,r.kt)("div",{class:"vimeo-container"},(0,r.kt)("iframe",{src:"https://player.vimeo.com/video/754267391?h=71555a7bbf",width:"640",height:"360",frameborder:"0",allow:"autoplay; fullscreen; picture-in-picture",allowfullscreen:!0})),(0,r.kt)("br",null),(0,r.kt)("p",null,"ClickHouse is a database, so there are countless ways to ingest data. There is no special tool designed just for inserting data into ClickHouse. So how do users get data in? Options include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"simply uploading a CSV file to ClickHouse Cloud as discussed in the ",(0,r.kt)("a",{parentName:"li",href:"/docs/en/getting-started/quick-start"},"Quick Start")),(0,r.kt)("li",{parentName:"ul"},"use ",(0,r.kt)("a",{parentName:"li",href:"/docs/en/integrations/data-ingestion/insert-local-files"},"clickhouse-client or clickhouse-local")," to retrieve data from a local file, external file, or some other database like MySQL, PostgreSQL, or any ODBC- or JDBC-compatible database"),(0,r.kt)("li",{parentName:"ul"},"write your own client application in your favorite programming language like ",(0,r.kt)("a",{parentName:"li",href:"/docs/en/integrations/language-clients/java/"},"Java"),", ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/clickhouse/clickHouse-go#readme"},"Golang")," or ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/clickhouse/clickhouse-connect#readme"},"Python")),(0,r.kt)("li",{parentName:"ul"},"use one of the technologies listed here in the ",(0,r.kt)("strong",{parentName:"li"},"Ingest")," section of the docs, like ",(0,r.kt)("a",{parentName:"li",href:"/docs/en/integrations/kafka/kakfa-intro"},"Kafka"),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/en/integrations/vector-to-clickhouse"},"Vector"),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/en/integrations/airbyte-and-clickhouse"},"Airbyte"),", and more")))}d.isMDXComponent=!0}}]);