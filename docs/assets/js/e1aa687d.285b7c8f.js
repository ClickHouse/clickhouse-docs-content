"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[15591],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=i,g=d["".concat(c,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(g,a(a({ref:t},u),{},{components:n})):r.createElement(g,a({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},81194:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(87462),i=(n(67294),n(3905));const o={sidebar_label:"Introduction",sidebar_position:1,slug:"/en/integrations/s3/s3-intro",description:"Users can insert S3 based data into ClickHouse and use S3 as an export destination"},a="Connnecting S3",s={unversionedId:"en/integrations/data-ingestion/s3/s3-intro",id:"en/integrations/data-ingestion/s3/s3-intro",title:"Connnecting S3",description:"Users can insert S3 based data into ClickHouse and use S3 as an export destination",source:"@site/docs/en/integrations/data-ingestion/s3/s3-intro.md",sourceDirName:"en/integrations/data-ingestion/s3",slug:"/en/integrations/s3/s3-intro",permalink:"/docs/en/integrations/s3/s3-intro",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/integrations/data-ingestion/s3/s3-intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Introduction",sidebar_position:1,slug:"/en/integrations/s3/s3-intro",description:"Users can insert S3 based data into ClickHouse and use S3 as an export destination"},sidebar:"english",previous:{title:"Insert Files from S3",permalink:"/docs/en/integrations/s3"},next:{title:"S3 Table Functions",permalink:"/docs/en/integrations/s3/s3-table-functions"}},c={},l=[],u={toc:l};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"connnecting-s3"},"Connnecting S3"),(0,i.kt)("p",null,"Amazon S3 or Amazon Simple Storage Service is a service offered by Amazon Web Services (AWS) that provides object storage through a web service interface. Users can insert S3 based data into ClickHouse and use S3 as an export destination, thus allowing interaction with \u201cData Lake\u201d architectures. Furthermore, s3 can provide \u201ccold\u201d storage tiers and assist with separating storage and compute. In the following articles, we outline the approach for these use cases: identifying key configuration parameters and any current limitations and providing hints on optimizing performance."),(0,i.kt)("p",null,"We utilize a subset of the New York taxi public dataset for read-orientated examples. We assume you have s3 buckets available for insert examples into which data can be written."))}p.isMDXComponent=!0}}]);