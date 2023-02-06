"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[16723],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>E});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=s(n),d=l,E=u["".concat(o,".").concat(d)]||u[d]||c[d]||r;return n?a.createElement(E,i(i({ref:t},m),{},{components:n})):a.createElement(E,i({ref:t},m))}));function E(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[u]="string"==typeof e?e:l,i[1]=p;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},57804:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var a=n(87462),l=(n(67294),n(3905));const r={slug:"/zh/sql-reference/statements/create"},i=void 0,p={unversionedId:"zh/sql-reference/statements/create",id:"zh/sql-reference/statements/create",title:"create",description:"CREATE DATABASE",source:"@site/docs/zh/sql-reference/statements/create.md",sourceDirName:"zh/sql-reference/statements",slug:"/zh/sql-reference/statements/create",permalink:"/docs/zh/sql-reference/statements/create",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/statements/create.md",tags:[],version:"current",frontMatter:{slug:"/zh/sql-reference/statements/create"},sidebar:"chinese",previous:{title:"WATCH",permalink:"/docs/zh/sql-reference/statements/watch"},next:{title:"insert-into",permalink:"/docs/zh/sql-reference/statements/insert-into"}},o={},s=[{value:"CREATE DATABASE",id:"create-database",level:2},{value:"CREATE TABLE",id:"create-table-query",level:2},{value:"\u9ed8\u8ba4\u503c",id:"create-default-values",level:3},{value:"\u5236\u7ea6\u56e0\u7d20",id:"constraints",level:3},{value:"Ttl\u8868\u8fbe\u5f0f",id:"ttl-expression",level:3},{value:"\u5217\u538b\u7f29\u7f16\u89e3ecs",id:"codecs",level:3},{value:"\u4e13\u4e1a\u7f16\u89e3ecs",id:"create-query-specialized-codecs",level:4},{value:"\u901a\u7528\u7f16\u89e3ecs",id:"create-query-common-purpose-codecs",level:4},{value:"\u4e34\u65f6\u8868",id:"lin-shi-biao",level:2},{value:"\u5206\u5e03\u5f0fDDL\u67e5\u8be2 \uff08ON CLUSTER \u5b50\u53e5\uff09",id:"fen-bu-shi-ddlcha-xun-on-cluster-zi-ju",level:2},{value:"CREATE VIEW",id:"create-view",level:2},{value:"CREATE DICTIONARY",id:"create-dictionary-query",level:2}],m={toc:s},u="wrapper";function c(e){let{components:t,...n}=e;return(0,l.kt)(u,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"create-database"},"CREATE DATABASE"),(0,l.kt)("p",null,"\u8be5\u67e5\u8be2\u7528\u4e8e\u6839\u636e\u6307\u5b9a\u540d\u79f0\u521b\u5efa\u6570\u636e\u5e93\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE [IF NOT EXISTS] db_name\n")),(0,l.kt)("p",null,"\u6570\u636e\u5e93\u5176\u5b9e\u53ea\u662f\u7528\u4e8e\u5b58\u653e\u8868\u7684\u4e00\u4e2a\u76ee\u5f55\u3002\n\u5982\u679c\u67e5\u8be2\u4e2d\u5b58\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"IF NOT EXISTS"),"\uff0c\u5219\u5f53\u6570\u636e\u5e93\u5df2\u7ecf\u5b58\u5728\u65f6\uff0c\u8be5\u67e5\u8be2\u4e0d\u4f1a\u8fd4\u56de\u4efb\u4f55\u9519\u8bef\u3002"),(0,l.kt)("h2",{id:"create-table-query"},"CREATE TABLE"),(0,l.kt)("p",null,"\u5bf9\u4e8e",(0,l.kt)("inlineCode",{parentName:"p"},"CREATE TABLE"),"\uff0c\u5b58\u5728\u4ee5\u4e0b\u51e0\u79cd\u65b9\u5f0f\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE [IF NOT EXISTS] [db.]table_name [ON CLUSTER cluster]\n(\n    name1 [type1] [DEFAULT|MATERIALIZED|ALIAS expr1],\n    name2 [type2] [DEFAULT|MATERIALIZED|ALIAS expr2],\n    ...\n) ENGINE = engine\n")),(0,l.kt)("p",null,"\u5728\u6307\u5b9a\u7684\u2019db\u2019\u6570\u636e\u5e93\u4e2d\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a\u2019name\u2019\u7684\u8868\uff0c\u5982\u679c\u67e5\u8be2\u4e2d\u6ca1\u6709\u5305\u542b\u2019db\u2019\uff0c\u5219\u9ed8\u8ba4\u4f7f\u7528\u5f53\u524d\u9009\u62e9\u7684\u6570\u636e\u5e93\u4f5c\u4e3a\u2019db\u2019\u3002\u540e\u9762\u7684\u662f\u5305\u542b\u5728\u62ec\u53f7\u4e2d\u7684\u8868\u7ed3\u6784\u4ee5\u53ca\u8868\u5f15\u64ce\u7684\u58f0\u660e\u3002\n\u5176\u4e2d\u8868\u7ed3\u6784\u58f0\u660e\u662f\u4e00\u4e2a\u5305\u542b\u4e00\u7ec4\u5217\u63cf\u8ff0\u58f0\u660e\u7684\u7ec4\u5408\u3002\u5982\u679c\u8868\u5f15\u64ce\u662f\u652f\u6301\u7d22\u5f15\u7684\uff0c\u90a3\u4e48\u53ef\u4ee5\u5728\u8868\u5f15\u64ce\u7684\u53c2\u6570\u4e2d\u5bf9\u5176\u8fdb\u884c\u8bf4\u660e\u3002"),(0,l.kt)("p",null,"\u5728\u6700\u7b80\u5355\u7684\u60c5\u51b5\u4e0b\uff0c\u5217\u63cf\u8ff0\u662f\u6307",(0,l.kt)("inlineCode",{parentName:"p"},"\u540d\u79f0 \u7c7b\u578b"),"\u8fd9\u6837\u7684\u5b50\u53e5\u3002\u4f8b\u5982\uff1a ",(0,l.kt)("inlineCode",{parentName:"p"},"RegionID UInt32"),"\u3002\n\u4f46\u662f\u4e5f\u53ef\u4ee5\u4e3a\u5217\u53e6\u5916\u5b9a\u4e49\u9ed8\u8ba4\u503c\u8868\u8fbe\u5f0f\uff08\u89c1\u540e\u6587\uff09\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE [IF NOT EXISTS] [db.]table_name AS [db2.]name2 [ENGINE = engine]\n")),(0,l.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a\u4e0e",(0,l.kt)("inlineCode",{parentName:"p"},"db2.name2"),"\u5177\u6709\u76f8\u540c\u7ed3\u6784\u7684\u8868\uff0c\u540c\u65f6\u4f60\u53ef\u4ee5\u5bf9\u5176\u6307\u5b9a\u4e0d\u540c\u7684\u8868\u5f15\u64ce\u58f0\u660e\u3002\u5982\u679c\u6ca1\u6709\u8868\u5f15\u64ce\u58f0\u660e\uff0c\u5219\u521b\u5efa\u7684\u8868\u5c06\u4e0e",(0,l.kt)("inlineCode",{parentName:"p"},"db2.name2"),"\u4f7f\u7528\u76f8\u540c\u7684\u8868\u5f15\u64ce\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE [IF NOT EXISTS] [db.]table_name ENGINE = engine AS SELECT ...\n")),(0,l.kt)("p",null,"\u4f7f\u7528\u6307\u5b9a\u7684\u5f15\u64ce\u521b\u5efa\u4e00\u4e2a\u4e0e",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT"),"\u5b50\u53e5\u7684\u7ed3\u679c\u5177\u6709\u76f8\u540c\u7ed3\u6784\u7684\u8868\uff0c\u5e76\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT"),"\u5b50\u53e5\u7684\u7ed3\u679c\u586b\u5145\u5b83\u3002"),(0,l.kt)("p",null,"\u4ee5\u4e0a\u6240\u6709\u60c5\u51b5\uff0c\u5982\u679c\u6307\u5b9a\u4e86",(0,l.kt)("inlineCode",{parentName:"p"},"IF NOT EXISTS"),"\uff0c\u90a3\u4e48\u5728\u8be5\u8868\u5df2\u7ecf\u5b58\u5728\u7684\u60c5\u51b5\u4e0b\uff0c\u67e5\u8be2\u4e0d\u4f1a\u8fd4\u56de\u4efb\u4f55\u9519\u8bef\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u67e5\u8be2\u51e0\u4e4e\u4e0d\u4f1a\u505a\u4efb\u4f55\u4e8b\u60c5\u3002"),(0,l.kt)("p",null,"\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"ENGINE"),"\u5b50\u53e5\u540e\u8fd8\u53ef\u80fd\u5b58\u5728\u4e00\u4e9b\u5176\u4ed6\u7684\u5b50\u53e5\uff0c\u66f4\u8be6\u7ec6\u7684\u4fe1\u606f\u53ef\u4ee5\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/statements/create"},"\u8868\u5f15\u64ce")," \u4e2d\u5173\u4e8e\u5efa\u8868\u7684\u63cf\u8ff0\u3002"),(0,l.kt)("h3",{id:"create-default-values"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("p",null,"\u5728\u5217\u63cf\u8ff0\u4e2d\u4f60\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u4e4b\u4e00\u4e3a\u5217\u6307\u5b9a\u9ed8\u8ba4\u8868\u8fbe\u5f0f\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"DEFAULT expr"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"MATERIALIZED expr"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"ALIAS expr"),"\u3002\n\u793a\u4f8b\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"URLDomain String DEFAULT domain(URL)"),"\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u5728\u5217\u63cf\u8ff0\u4e2d\u672a\u5b9a\u4e49\u4efb\u4f55\u9ed8\u8ba4\u8868\u8fbe\u5f0f\uff0c\u90a3\u4e48\u7cfb\u7edf\u5c06\u4f1a\u6839\u636e\u7c7b\u578b\u8bbe\u7f6e\u5bf9\u5e94\u7684\u9ed8\u8ba4\u503c\uff0c\u5982\uff1a\u6570\u503c\u7c7b\u578b\u4e3a\u96f6\u3001\u5b57\u7b26\u4e32\u7c7b\u578b\u4e3a\u7a7a\u5b57\u7b26\u4e32\u3001\u6570\u7ec4\u7c7b\u578b\u4e3a\u7a7a\u6570\u7ec4\u3001\u65e5\u671f\u7c7b\u578b\u4e3a\u20191970-01-01\u2019\u4ee5\u53ca\u65f6\u95f4\u7c7b\u578b\u4e3a zero unix timestamp\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u5b9a\u4e49\u4e86\u9ed8\u8ba4\u8868\u8fbe\u5f0f\uff0c\u5219\u53ef\u4ee5\u4e0d\u5b9a\u4e49\u5217\u7684\u7c7b\u578b\u3002\u5982\u679c\u6ca1\u6709\u660e\u786e\u7684\u5b9a\u4e49\u7c7b\u7684\u7c7b\u578b\uff0c\u5219\u4f7f\u7528\u9ed8\u8ba4\u8868\u8fbe\u5f0f\u7684\u7c7b\u578b\u3002\u4f8b\u5982\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"EventDate DEFAULT toDate(EventTime)")," - \u6700\u7ec8\u2019EventDate\u2019\u5c06\u4f7f\u7528\u2019Date\u2019\u4f5c\u4e3a\u7c7b\u578b\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u540c\u65f6\u6307\u5b9a\u4e86\u9ed8\u8ba4\u8868\u8fbe\u5f0f\u4e0e\u5217\u7684\u7c7b\u578b\uff0c\u5219\u5c06\u4f7f\u7528\u7c7b\u578b\u8f6c\u6362\u51fd\u6570\u5c06\u9ed8\u8ba4\u8868\u8fbe\u5f0f\u8f6c\u6362\u4e3a\u6307\u5b9a\u7684\u7c7b\u578b\u3002\u4f8b\u5982\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"Hits UInt32 DEFAULT 0"),"\u4e0e",(0,l.kt)("inlineCode",{parentName:"p"},"Hits UInt32 DEFAULT toUInt32(0)"),"\u610f\u601d\u76f8\u540c\u3002"),(0,l.kt)("p",null,"\u9ed8\u8ba4\u8868\u8fbe\u5f0f\u53ef\u4ee5\u5305\u542b\u5e38\u91cf\u6216\u8868\u7684\u4efb\u610f\u5176\u4ed6\u5217\u3002\u5f53\u521b\u5efa\u6216\u66f4\u6539\u8868\u7ed3\u6784\u65f6\uff0c\u7cfb\u7edf\u5c06\u4f1a\u8fd0\u884c\u68c0\u67e5\uff0c\u786e\u4fdd\u4e0d\u4f1a\u5305\u542b\u5faa\u73af\u4f9d\u8d56\u3002\u5bf9\u4e8eINSERT, \u5b83\u4ec5\u68c0\u67e5\u8868\u8fbe\u5f0f\u662f\u5426\u662f\u53ef\u4ee5\u89e3\u6790\u7684 - \u5b83\u4eec\u53ef\u4ee5\u4ece\u4e2d\u8ba1\u7b97\u51fa\u6240\u6709\u9700\u8981\u7684\u5217\u7684\u9ed8\u8ba4\u503c\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"DEFAULT expr")),(0,l.kt)("p",null,"\u666e\u901a\u7684\u9ed8\u8ba4\u503c\uff0c\u5982\u679cINSERT\u4e2d\u4e0d\u5305\u542b\u6307\u5b9a\u7684\u5217\uff0c\u90a3\u4e48\u5c06\u901a\u8fc7\u8868\u8fbe\u5f0f\u8ba1\u7b97\u5b83\u7684\u9ed8\u8ba4\u503c\u5e76\u586b\u5145\u5b83\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"MATERIALIZED expr")),(0,l.kt)("p",null,"\u7269\u5316\u8868\u8fbe\u5f0f\uff0c\u88ab\u8be5\u8868\u8fbe\u5f0f\u6307\u5b9a\u7684\u5217\u4e0d\u80fd\u5305\u542b\u5728INSERT\u7684\u5217\u8868\u4e2d\uff0c\u56e0\u4e3a\u5b83\u603b\u662f\u88ab\u8ba1\u7b97\u51fa\u6765\u7684\u3002\n\u5bf9\u4e8eINSERT\u800c\u8a00\uff0c\u4e0d\u9700\u8981\u8003\u8651\u8fd9\u4e9b\u5217\u3002\n\u53e6\u5916\uff0c\u5728SELECT\u67e5\u8be2\u4e2d\u5982\u679c\u5305\u542b\u661f\u53f7\uff0c\u6b64\u5217\u4e0d\u4f1a\u88ab\u7528\u6765\u66ff\u6362\u661f\u53f7\uff0c\u8fd9\u662f\u56e0\u4e3a\u8003\u8651\u5230\u6570\u636e\u8f6c\u50a8\uff0c\u5728\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT *"),"\u67e5\u8be2\u51fa\u7684\u7ed3\u679c\u603b\u80fd\u591f\u88ab\u2019INSERT\u2019\u56de\u8868\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ALIAS expr")),(0,l.kt)("p",null,"\u522b\u540d\u3002\u8fd9\u6837\u7684\u5217\u4e0d\u4f1a\u5b58\u50a8\u5728\u8868\u4e2d\u3002\n\u5b83\u7684\u503c\u4e0d\u80fd\u591f\u901a\u8fc7INSERT\u5199\u5165\uff0c\u540c\u65f6\u4f7f\u7528SELECT\u67e5\u8be2\u661f\u53f7\u65f6\uff0c\u8fd9\u4e9b\u5217\u4e5f\u4e0d\u4f1a\u88ab\u7528\u6765\u66ff\u6362\u661f\u53f7\u3002\n\u4f46\u662f\u5b83\u4eec\u53ef\u4ee5\u663e\u793a\u7684\u7528\u4e8eSELECT\u4e2d\uff0c\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u5728\u67e5\u8be2\u5206\u6790\u4e2d\u522b\u540d\u5c06\u88ab\u66ff\u6362\u3002"),(0,l.kt)("p",null,"\u5f53\u4f7f\u7528ALTER\u67e5\u8be2\u5bf9\u6dfb\u52a0\u65b0\u7684\u5217\u65f6\uff0c\u4e0d\u540c\u4e8e\u4e3a\u6240\u6709\u65e7\u6570\u636e\u6dfb\u52a0\u8fd9\u4e2a\u5217\uff0c\u5bf9\u4e8e\u9700\u8981\u5728\u65e7\u6570\u636e\u4e2d\u67e5\u8be2\u65b0\u5217\uff0c\u53ea\u4f1a\u5728\u67e5\u8be2\u65f6\u52a8\u6001\u8ba1\u7b97\u8fd9\u4e2a\u65b0\u5217\u7684\u503c\u3002\u4f46\u662f\u5982\u679c\u65b0\u5217\u7684\u9ed8\u8ba4\u8868\u793a\u4e2d\u4f9d\u8d56\u5176\u4ed6\u5217\u7684\u503c\u8fdb\u884c\u8ba1\u7b97\uff0c\u90a3\u4e48\u540c\u6837\u4f1a\u52a0\u8f7d\u8fd9\u4e9b\u4f9d\u8d56\u7684\u5217\u7684\u6570\u636e\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u5411\u8868\u4e2d\u6dfb\u52a0\u4e00\u4e2a\u65b0\u5217\uff0c\u5e76\u5728\u4e4b\u540e\u7684\u4e00\u6bb5\u65f6\u95f4\u540e\u4fee\u6539\u5b83\u7684\u9ed8\u8ba4\u8868\u8fbe\u5f0f\uff0c\u5219\u65e7\u6570\u636e\u4e2d\u7684\u503c\u5c06\u4f1a\u88ab\u6539\u53d8\u3002\u8bf7\u6ce8\u610f\uff0c\u5728\u8fd0\u884c\u540e\u53f0\u5408\u5e76\u65f6\uff0c\u7f3a\u5c11\u7684\u5217\u7684\u503c\u5c06\u88ab\u8ba1\u7b97\u540e\u5199\u5165\u5230\u5408\u5e76\u540e\u7684\u6570\u636e\u90e8\u5206\u4e2d\u3002"),(0,l.kt)("p",null,"\u4e0d\u80fd\u591f\u4e3anested\u7c7b\u578b\u7684\u5217\u8bbe\u7f6e\u9ed8\u8ba4\u503c\u3002"),(0,l.kt)("h3",{id:"constraints"},"\u5236\u7ea6\u56e0\u7d20"),(0,l.kt)("p",null,"\u968f\u7740\u5217\u63cf\u8ff0\u7ea6\u675f\u53ef\u4ee5\u5b9a\u4e49:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE [IF NOT EXISTS] [db.]table_name [ON CLUSTER cluster]\n(\n    name1 [type1] [DEFAULT|MATERIALIZED|ALIAS expr1] [compression_codec] [TTL expr1],\n    ...\n    CONSTRAINT constraint_name_1 CHECK boolean_expr_1,\n    ...\n) ENGINE = engine\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"boolean_expr_1")," \u53ef\u4ee5\u901a\u8fc7\u4efb\u4f55\u5e03\u5c14\u8868\u8fbe\u5f0f\u3002 \u5982\u679c\u4e3a\u8868\u5b9a\u4e49\u4e86\u7ea6\u675f\uff0c\u5219\u5c06\u4e3a\u8868\u4e2d\u7684\u6bcf\u4e00\u884c\u68c0\u67e5\u5b83\u4eec\u4e2d\u7684\u6bcf\u4e00\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"INSERT")," query. If any constraint is not satisfied \u2014 server will raise an exception with constraint name and checking expression."),(0,l.kt)("p",null,"\u6dfb\u52a0\u5927\u91cf\u7684\u7ea6\u675f\u4f1a\u5bf9big\u7684\u6027\u80fd\u4ea7\u751f\u8d1f\u9762\u5f71\u54cd ",(0,l.kt)("inlineCode",{parentName:"p"},"INSERT")," \u67e5\u8be2\u3002"),(0,l.kt)("h3",{id:"ttl-expression"},"Ttl\u8868\u8fbe\u5f0f"),(0,l.kt)("p",null,"\u5b9a\u4e49\u503c\u7684\u5b58\u50a8\u65f6\u95f4\u3002 \u53ea\u80fd\u4e3aMergeTree\u7cfb\u5217\u8868\u6307\u5b9a\u3002 \u6709\u5173\u8be6\u7ec6\u8bf4\u660e\uff0c\u8bf7\u53c2\u9605 ",(0,l.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/statements/create#table_engine-mergetree-ttl"},"\u5217\u548c\u8868\u7684TTL"),"."),(0,l.kt)("h3",{id:"codecs"},"\u5217\u538b\u7f29\u7f16\u89e3ecs"),(0,l.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cClickHouse\u5e94\u7528\u4ee5\u4e0b\u5b9a\u4e49\u7684\u538b\u7f29\u65b9\u6cd5 ",(0,l.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/statements/create#server-settings-compression"},"\u670d\u52a1\u5668\u8bbe\u7f6e"),"\uff0c\u5217\u3002 \u60a8\u8fd8\u53ef\u4ee5\u5b9a\u4e49\u5728\u6bcf\u4e2a\u5355\u72ec\u7684\u5217\u7684\u538b\u7f29\u65b9\u6cd5 ",(0,l.kt)("inlineCode",{parentName:"p"},"CREATE TABLE")," \u67e5\u8be2\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE codec_example\n(\n    dt Date CODEC(ZSTD),\n    ts DateTime CODEC(LZ4HC),\n    float_value Float32 CODEC(NONE),\n    double_value Float64 CODEC(LZ4HC(9))\n    value Float32 CODEC(Delta, ZSTD)\n)\nENGINE = <Engine>\n...\n")),(0,l.kt)("p",null,'!!! warning "\u8b66\u544a"\n\u60a8\u65e0\u6cd5\u4f7f\u7528\u5916\u90e8\u5b9e\u7528\u7a0b\u5e8f\u89e3\u538b\u7f29ClickHouse\u6570\u636e\u5e93\u6587\u4ef6\uff0c\u5982 ',(0,l.kt)("inlineCode",{parentName:"p"},"lz4"),". \u76f8\u53cd\uff0c\u4f7f\u7528\u7279\u6b8a\u7684 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/ClickHouse/tree/master/programs/compressor"},"\uff82\u73af\u677fcompressor\uff6e\uff82\u5609\uff6f\uff82\u5072")," \u5b9e\u7528\u7a0b\u5e8f\u3002"),(0,l.kt)("p",null,"\u4e0b\u8868\u5f15\u64ce\u652f\u6301\u538b\u7f29:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/statements/create"},"MergeTree")," \u5bb6\u5ead"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/statements/create"},"\u65e5\u5fd7")," \u5bb6\u5ead"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/statements/create"},"\u8bbe\u7f6e")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/statements/create"},"\u52a0\u5165\u6211\u4eec"))),(0,l.kt)("p",null,"ClickHouse\u652f\u6301\u901a\u7528\u7f16\u89e3\u7801\u5668\u548c\u4e13\u7528\u7f16\u89e3ecs\u3002"),(0,l.kt)("h4",{id:"create-query-specialized-codecs"},"\u4e13\u4e1a\u7f16\u89e3ecs"),(0,l.kt)("p",null,"\u8fd9\u4e9b\u7f16\u89e3\u7801\u5668\u65e8\u5728\u901a\u8fc7\u4f7f\u7528\u6570\u636e\u7684\u7279\u5b9a\u529f\u80fd\u4f7f\u538b\u7f29\u66f4\u6709\u6548\u3002 \u5176\u4e2d\u4e00\u4e9b\u7f16\u89e3\u7801\u5668\u4e0d\u538b\u7f29\u6570\u636e\u672c\u8eab\u3002 \u76f8\u53cd\uff0c\u4ed6\u4eec\u51c6\u5907\u7684\u6570\u636e\u7528\u4e8e\u5171\u540c\u76ee\u7684\u7684\u7f16\u89e3ec\uff0c\u5176\u538b\u7f29\u5b83\u6bd4\u6ca1\u6709\u8fd9\u79cd\u51c6\u5907\u66f4\u597d\u3002"),(0,l.kt)("p",null,"\u4e13\u4e1a\u7f16\u89e3ecs:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Delta(delta_bytes)")," \u2014 Compression approach in which raw values are replaced by the difference of two neighboring values, except for the first value that stays unchanged. Up to ",(0,l.kt)("inlineCode",{parentName:"li"},"delta_bytes")," \u7528\u4e8e\u5b58\u50a8\u589e\u91cf\u503c\uff0c\u6240\u4ee5 ",(0,l.kt)("inlineCode",{parentName:"li"},"delta_bytes")," \u662f\u539f\u59cb\u503c\u7684\u6700\u5927\u5927\u5c0f\u3002 \u53ef\u80fd ",(0,l.kt)("inlineCode",{parentName:"li"},"delta_bytes")," \u503c:1,2,4,8. \u9ed8\u8ba4\u503c ",(0,l.kt)("inlineCode",{parentName:"li"},"delta_bytes")," \u662f ",(0,l.kt)("inlineCode",{parentName:"li"},"sizeof(type)")," \u5982\u679c\u7b49\u4e8e1\uff0c2\uff0c4\u62168\u3002 \u5728\u6240\u6709\u5176\u4ed6\u60c5\u51b5\u4e0b\uff0c\u5b83\u662f1\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"DoubleDelta")," \u2014 Calculates delta of deltas and writes it in compact binary form. Optimal compression rates are achieved for monotonic sequences with a constant stride, such as time series data. Can be used with any fixed-width type. Implements the algorithm used in Gorilla TSDB, extending it to support 64-bit types. Uses 1 extra bit for 32-byte deltas: 5-bit prefixes instead of 4-bit prefixes. For additional information, see Compressing Time Stamps in ",(0,l.kt)("a",{parentName:"li",href:"http://www.vldb.org/pvldb/vol8/p1816-teller.pdf"},"Gorilla\uff1a\u4e00\u4e2a\u5feb\u901f\u3001\u53ef\u6269\u5c55\u7684\u5185\u5b58\u65f6\u95f4\u5e8f\u5217\u6570\u636e\u5e93"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Gorilla")," \u2014 Calculates XOR between current and previous value and writes it in compact binary form. Efficient when storing a series of floating point values that change slowly, because the best compression rate is achieved when neighboring values are binary equal. Implements the algorithm used in Gorilla TSDB, extending it to support 64-bit types. For additional information, see Compressing Values in ",(0,l.kt)("a",{parentName:"li",href:"http://www.vldb.org/pvldb/vol8/p1816-teller.pdf"},"Gorilla\uff1a\u4e00\u4e2a\u5feb\u901f\u3001\u53ef\u6269\u5c55\u7684\u5185\u5b58\u65f6\u95f4\u5e8f\u5217\u6570\u636e\u5e93"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"T64")," \u2014 Compression approach that crops unused high bits of values in integer data types (including ",(0,l.kt)("inlineCode",{parentName:"li"},"Enum"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"Date")," \u548c ",(0,l.kt)("inlineCode",{parentName:"li"},"DateTime"),"). \u5728\u7b97\u6cd5\u7684\u6bcf\u4e2a\u6b65\u9aa4\u4e2d\uff0c\u7f16\u89e3\u7801\u5668\u91c7\u752864\u4e2a\u503c\u5757\uff0c\u5c06\u5b83\u4eec\u653e\u516564x64\u4f4d\u77e9\u9635\u4e2d\uff0c\u5bf9\u5176\u8fdb\u884c\u8f6c\u7f6e\uff0c\u88c1\u526a\u672a\u4f7f\u7528\u7684\u503c\u4f4d\u5e76\u5c06\u5176\u4f59\u90e8\u5206\u4f5c\u4e3a\u5e8f\u5217\u8fd4\u56de\u3002 \u672a\u4f7f\u7528\u7684\u4f4d\u662f\u4f7f\u7528\u538b\u7f29\u7684\u6574\u4e2a\u6570\u636e\u90e8\u5206\u7684\u6700\u5927\u503c\u548c\u6700\u5c0f\u503c\u4e4b\u95f4\u6ca1\u6709\u533a\u522b\u7684\u4f4d\u3002")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"DoubleDelta")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"Gorilla")," \u7f16\u89e3\u7801\u5668\u5728Gorilla TSDB\u4e2d\u7528\u4f5c\u5176\u538b\u7f29\u7b97\u6cd5\u7684\u7ec4\u4ef6\u3002 \u5927\u7329\u7329\u7684\u65b9\u6cd5\u662f\u6709\u6548\u7684\u60c5\u51b5\u4e0b\uff0c\u5f53\u6709\u7f13\u6162\u53d8\u5316\u7684\u503c\u4e0e\u4ed6\u4eec\u7684\u65f6\u95f4\u6233\u5e8f\u5217\u3002 \u65f6\u95f4\u6233\u662f\u7531\u6709\u6548\u5730\u538b\u7f29 ",(0,l.kt)("inlineCode",{parentName:"p"},"DoubleDelta")," \u7f16\u89e3ec\uff0c\u548c\u503c\u6709\u6548\u5730\u7531\u538b\u7f29 ",(0,l.kt)("inlineCode",{parentName:"p"},"Gorilla")," \u7f16\u89e3ec \u4f8b\u5982\uff0c\u8981\u83b7\u53d6\u6709\u6548\u5b58\u50a8\u7684\u8868\uff0c\u53ef\u4ee5\u5728\u4ee5\u4e0b\u914d\u7f6e\u4e2d\u521b\u5efa\u5b83:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE codec_example\n(\n    timestamp DateTime CODEC(DoubleDelta),\n    slow_values Float32 CODEC(Gorilla)\n)\nENGINE = MergeTree()\n")),(0,l.kt)("h4",{id:"create-query-common-purpose-codecs"},"\u901a\u7528\u7f16\u89e3ecs"),(0,l.kt)("p",null,"\u7f16\u89e3ecs:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"NONE")," \u2014 No compression."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"LZ4")," \u2014 Lossless ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/lz4/lz4"},"\u6570\u636e\u538b\u7f29\u7b97\u6cd5")," \u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4f7f\u7528\u3002 \u5e94\u7528LZ4\u5feb\u901f\u538b\u7f29\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"LZ4HC[(level)]")," \u2014 LZ4 HC (high compression) algorithm with configurable level. Default level: 9. Setting ",(0,l.kt)("inlineCode",{parentName:"li"},"level <= 0")," \u5e94\u7528\u9ed8\u8ba4\u7ea7\u522b\u3002 \u53ef\u80fd\u7684\u6c34\u5e73\uff1a","[","1\uff0c12","]","\u3002 \u63a8\u8350\u7ea7\u522b\u8303\u56f4\uff1a","[","4\uff0c9","]","\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ZSTD[(level)]")," \u2014 ",(0,l.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Zstandard"},"ZSTD\u538b\u7f29\u7b97\u6cd5")," \u53ef\u914d\u7f6e ",(0,l.kt)("inlineCode",{parentName:"li"},"level"),". \u53ef\u80fd\u7684\u6c34\u5e73\uff1a","[","1\uff0c22","]","\u3002 \u9ed8\u8ba4\u503c\uff1a1\u3002")),(0,l.kt)("p",null,"\u9ad8\u538b\u7f29\u7ea7\u522b\u5bf9\u4e8e\u975e\u5bf9\u79f0\u573a\u666f\u975e\u5e38\u6709\u7528\uff0c\u4f8b\u5982\u538b\u7f29\u4e00\u6b21\uff0c\u91cd\u590d\u89e3\u538b\u7f29\u3002 \u66f4\u9ad8\u7684\u7ea7\u522b\u610f\u5473\u7740\u66f4\u597d\u7684\u538b\u7f29\u548c\u66f4\u9ad8\u7684CPU\u4f7f\u7528\u7387\u3002"),(0,l.kt)("h2",{id:"lin-shi-biao"},"\u4e34\u65f6\u8868"),(0,l.kt)("p",null,"ClickHouse\u652f\u6301\u4e34\u65f6\u8868\uff0c\u5176\u5177\u6709\u4ee5\u4e0b\u7279\u5f81\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5f53\u56de\u8bdd\u7ed3\u675f\u65f6\uff0c\u4e34\u65f6\u8868\u5c06\u968f\u4f1a\u8bdd\u4e00\u8d77\u6d88\u5931\uff0c\u8fd9\u5305\u542b\u94fe\u63a5\u4e2d\u65ad\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4e34\u65f6\u8868\u4ec5\u80fd\u591f\u4f7f\u7528Memory\u8868\u5f15\u64ce\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u65e0\u6cd5\u4e3a\u4e34\u65f6\u8868\u6307\u5b9a\u6570\u636e\u5e93\u3002\u5b83\u662f\u5728\u6570\u636e\u5e93\u4e4b\u5916\u521b\u5efa\u7684\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u4e34\u65f6\u8868\u4e0e\u53e6\u4e00\u4e2a\u8868\u540d\u79f0\u76f8\u540c\uff0c\u90a3\u4e48\u5f53\u5728\u67e5\u8be2\u65f6\u6ca1\u6709\u663e\u793a\u7684\u6307\u5b9adb\u7684\u60c5\u51b5\u4e0b\uff0c\u5c06\u4f18\u5148\u4f7f\u7528\u4e34\u65f6\u8868\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u5206\u5e03\u5f0f\u5904\u7406\uff0c\u67e5\u8be2\u4e2d\u4f7f\u7528\u7684\u4e34\u65f6\u8868\u5c06\u88ab\u4f20\u9012\u5230\u8fdc\u7a0b\u670d\u52a1\u5668\u3002")),(0,l.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528\u4e0b\u9762\u7684\u8bed\u6cd5\u521b\u5efa\u4e00\u4e2a\u4e34\u65f6\u8868\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TEMPORARY TABLE [IF NOT EXISTS] table_name [ON CLUSTER cluster]\n(\n    name1 [type1] [DEFAULT|MATERIALIZED|ALIAS expr1],\n    name2 [type2] [DEFAULT|MATERIALIZED|ALIAS expr2],\n    ...\n)\n")),(0,l.kt)("p",null,"\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u4e34\u65f6\u8868\u4e0d\u662f\u624b\u52a8\u521b\u5efa\u7684\uff0c\u53ea\u6709\u5728\u5206\u5e03\u5f0f\u67e5\u8be2\u5904\u7406\u4e2d\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"(GLOBAL) IN"),"\u65f6\u4e3a\u5916\u90e8\u6570\u636e\u521b\u5efa\u3002\u66f4\u591a\u4fe1\u606f\uff0c\u53ef\u4ee5\u53c2\u8003\u76f8\u5173\u7ae0\u8282\u3002"),(0,l.kt)("h2",{id:"fen-bu-shi-ddlcha-xun-on-cluster-zi-ju"},"\u5206\u5e03\u5f0fDDL\u67e5\u8be2 \uff08ON CLUSTER \u5b50\u53e5\uff09"),(0,l.kt)("p",null,"\u5bf9\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"CREATE"),"\uff0c ",(0,l.kt)("inlineCode",{parentName:"p"},"DROP"),"\uff0c ",(0,l.kt)("inlineCode",{parentName:"p"},"ALTER"),"\uff0c\u4ee5\u53ca",(0,l.kt)("inlineCode",{parentName:"p"},"RENAME"),"\u67e5\u8be2\uff0c\u7cfb\u7edf\u652f\u6301\u5176\u8fd0\u884c\u5728\u6574\u4e2a\u96c6\u7fa4\u4e0a\u3002\n\u4f8b\u5982\uff0c\u4ee5\u4e0b\u67e5\u8be2\u5c06\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"cluster"),"\u96c6\u7fa4\u7684\u6240\u6709\u8282\u70b9\u4e0a\u521b\u5efa\u540d\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"all_hits"),"\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"Distributed"),"\u8868\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE IF NOT EXISTS all_hits ON CLUSTER cluster (p Date, i Int32) ENGINE = Distributed(cluster, default, hits)\n")),(0,l.kt)("p",null,"\u4e3a\u4e86\u80fd\u591f\u6b63\u786e\u7684\u8fd0\u884c\u8fd9\u79cd\u67e5\u8be2\uff0c\u6bcf\u53f0\u4e3b\u673a\u5fc5\u987b\u5177\u6709\u76f8\u540c\u7684cluster\u58f0\u660e\uff08\u4e3a\u4e86\u7b80\u5316\u914d\u7f6e\u7684\u540c\u6b65\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528zookeeper\u7684\u65b9\u5f0f\u8fdb\u884c\u914d\u7f6e\uff09\u3002\u540c\u65f6\u8fd9\u4e9b\u4e3b\u673a\u8fd8\u5fc5\u987b\u94fe\u63a5\u5230zookeeper\u670d\u52a1\u5668\u3002\n\u8fd9\u4e2a\u67e5\u8be2\u5c06\u6700\u7ec8\u5728\u96c6\u7fa4\u7684\u6bcf\u53f0\u4e3b\u673a\u4e0a\u8fd0\u884c\uff0c\u5373\u4f7f\u4e00\u4e9b\u4e3b\u673a\u5f53\u524d\u5904\u4e8e\u4e0d\u53ef\u7528\u72b6\u6001\u3002\u540c\u65f6\u5b83\u8fd8\u4fdd\u8bc1\u4e86\u6240\u6709\u7684\u67e5\u8be2\u5728\u5355\u53f0\u4e3b\u673a\u4e2d\u7684\u6267\u884c\u987a\u5e8f\u3002"),(0,l.kt)("h2",{id:"create-view"},"CREATE VIEW"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE [MATERIALIZED] VIEW [IF NOT EXISTS] [db.]table_name [TO[db.]name] [ENGINE = engine] [POPULATE] AS SELECT ...\n")),(0,l.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a\u89c6\u56fe\u3002\u5b83\u5b58\u5728\u4e24\u79cd\u53ef\u9009\u62e9\u7684\u7c7b\u578b\uff1a\u666e\u901a\u89c6\u56fe\u4e0e\u7269\u5316\u89c6\u56fe\u3002"),(0,l.kt)("p",null,"\u666e\u901a\u89c6\u56fe\u4e0d\u5b58\u50a8\u4efb\u4f55\u6570\u636e\uff0c\u53ea\u662f\u6267\u884c\u4ece\u53e6\u4e00\u4e2a\u8868\u4e2d\u7684\u8bfb\u53d6\u3002\u6362\u53e5\u8bdd\u8bf4\uff0c\u666e\u901a\u89c6\u56fe\u53ea\u662f\u4fdd\u5b58\u4e86\u89c6\u56fe\u7684\u67e5\u8be2\uff0c\u5f53\u4ece\u89c6\u56fe\u4e2d\u67e5\u8be2\u65f6\uff0c\u6b64\u67e5\u8be2\u88ab\u4f5c\u4e3a\u5b50\u67e5\u8be2\u7528\u4e8e\u66ff\u6362FROM\u5b50\u53e5\u3002"),(0,l.kt)("p",null,"\u4e3e\u4e2a\u4f8b\u5b50\uff0c\u5047\u8bbe\u4f60\u5df2\u7ecf\u521b\u5efa\u4e86\u4e00\u4e2a\u89c6\u56fe\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE VIEW view AS SELECT ...\n")),(0,l.kt)("p",null,"\u8fd8\u6709\u4e00\u4e2a\u67e5\u8be2\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT a, b, c FROM view\n")),(0,l.kt)("p",null,"\u8fd9\u4e2a\u67e5\u8be2\u5b8c\u5168\u7b49\u4ef7\u4e8e\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT a, b, c FROM (SELECT ...)\n")),(0,l.kt)("p",null,"\u7269\u5316\u89c6\u56fe\u5b58\u50a8\u7684\u6570\u636e\u662f\u7531\u76f8\u5e94\u7684SELECT\u67e5\u8be2\u8f6c\u6362\u5f97\u6765\u7684\u3002"),(0,l.kt)("p",null,"\u5728\u521b\u5efa\u7269\u5316\u89c6\u56fe\u65f6\uff0c\u4f60\u8fd8\u5fc5\u987b\u6307\u5b9a\u8868\u7684\u5f15\u64ce - \u5c06\u4f1a\u4f7f\u7528\u8fd9\u4e2a\u8868\u5f15\u64ce\u5b58\u50a8\u6570\u636e\u3002"),(0,l.kt)("p",null,"\u76ee\u524d\u7269\u5316\u89c6\u56fe\u7684\u5de5\u4f5c\u539f\u7406\uff1a\u5f53\u5c06\u6570\u636e\u5199\u5165\u5230\u7269\u5316\u89c6\u56fe\u4e2dSELECT\u5b50\u53e5\u6240\u6307\u5b9a\u7684\u8868\u65f6\uff0c\u63d2\u5165\u7684\u6570\u636e\u4f1a\u901a\u8fc7SELECT\u5b50\u53e5\u67e5\u8be2\u8fdb\u884c\u8f6c\u6362\u5e76\u5c06\u6700\u7ec8\u7ed3\u679c\u63d2\u5165\u5230\u89c6\u56fe\u4e2d\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u521b\u5efa\u7269\u5316\u89c6\u56fe\u65f6\u6307\u5b9a\u4e86POPULATE\u5b50\u53e5\uff0c\u5219\u5728\u521b\u5efa\u65f6\u5c06\u8be5\u8868\u7684\u6570\u636e\u63d2\u5165\u5230\u7269\u5316\u89c6\u56fe\u4e2d\u3002\u5c31\u50cf\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"CREATE TABLE ... AS SELECT ..."),"\u4e00\u6837\u3002\u5426\u5219\uff0c\u7269\u5316\u89c6\u56fe\u53ea\u4f1a\u5305\u542b\u5728\u7269\u5316\u89c6\u56fe\u521b\u5efa\u540e\u7684\u65b0\u5199\u5165\u7684\u6570\u636e\u3002\u6211\u4eec\u4e0d\u63a8\u8350\u4f7f\u7528POPULATE\uff0c\u56e0\u4e3a\u5728\u89c6\u56fe\u521b\u5efa\u671f\u95f4\u5199\u5165\u7684\u6570\u636e\u5c06\u4e0d\u4f1a\u5199\u5165\u5176\u4e2d\u3002"),(0,l.kt)("p",null,"\u5f53\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT"),"\u5b50\u53e5\u5305\u542b",(0,l.kt)("inlineCode",{parentName:"p"},"DISTINCT"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"GROUP BY"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"ORDER BY"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"LIMIT"),"\u65f6\uff0c\u8bf7\u6ce8\u610f\uff0c\u8fd9\u4e9b\u4ec5\u4f1a\u5728\u63d2\u5165\u6570\u636e\u65f6\u5728\u6bcf\u4e2a\u5355\u72ec\u7684\u6570\u636e\u5757\u4e0a\u6267\u884c\u3002\u4f8b\u5982\uff0c\u5982\u679c\u4f60\u5728\u5176\u4e2d\u5305\u542b\u4e86",(0,l.kt)("inlineCode",{parentName:"p"},"GROUP BY"),"\uff0c\u5219\u53ea\u4f1a\u5728\u67e5\u8be2\u671f\u95f4\u8fdb\u884c\u805a\u5408\uff0c\u4f46\u805a\u5408\u8303\u56f4\u4ec5\u9650\u4e8e\u5355\u4e2a\u6279\u7684\u5199\u5165\u6570\u636e\u3002\u6570\u636e\u4e0d\u4f1a\u8fdb\u4e00\u6b65\u88ab\u805a\u5408\u3002\u4f46\u662f\u5f53\u4f60\u4f7f\u7528\u4e00\u4e9b\u5176\u4ed6\u6570\u636e\u805a\u5408\u5f15\u64ce\u65f6\u8fd9\u662f\u4f8b\u5916\u7684\uff0c\u5982\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"SummingMergeTree"),"\u3002"),(0,l.kt)("p",null,"\u76ee\u524d\u5bf9\u7269\u5316\u89c6\u56fe\u6267\u884c",(0,l.kt)("inlineCode",{parentName:"p"},"ALTER"),"\u662f\u4e0d\u652f\u6301\u7684\uff0c\u56e0\u6b64\u8fd9\u53ef\u80fd\u662f\u4e0d\u65b9\u4fbf\u7684\u3002\u5982\u679c\u7269\u5316\u89c6\u56fe\u662f\u4f7f\u7528\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"TO [db.]name"),"\u7684\u65b9\u5f0f\u8fdb\u884c\u6784\u5efa\u7684\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"DETACH"),"\u8bed\u53e5\u5148\u5c06\u89c6\u56fe\u5265\u79bb\uff0c\u7136\u540e\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"ALTER"),"\u8fd0\u884c\u5728\u76ee\u6807\u8868\u4e0a\uff0c\u7136\u540e\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"ATTACH"),"\u5c06\u4e4b\u524d\u5265\u79bb\u7684\u8868\u91cd\u65b0\u52a0\u8f7d\u8fdb\u6765\u3002"),(0,l.kt)("p",null,"\u89c6\u56fe\u770b\u8d77\u6765\u548c\u666e\u901a\u7684\u8868\u76f8\u540c\u3002\u4f8b\u5982\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"SHOW TABLES"),"\u67e5\u770b\u5230\u5b83\u4eec\u3002"),(0,l.kt)("p",null,"\u6ca1\u6709\u5355\u72ec\u7684\u5220\u9664\u89c6\u56fe\u7684\u8bed\u6cd5\u3002\u5982\u679c\u8981\u5220\u9664\u89c6\u56fe\uff0c\u8bf7\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"DROP TABLE"),"\u3002"),(0,l.kt)("h2",{id:"create-dictionary-query"},"CREATE DICTIONARY"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DICTIONARY [IF NOT EXISTS] [db.]dictionary_name [ON CLUSTER cluster]\n(\n    key1 type1  [DEFAULT|EXPRESSION expr1] [HIERARCHICAL|INJECTIVE|IS_OBJECT_ID],\n    key2 type2  [DEFAULT|EXPRESSION expr2] [HIERARCHICAL|INJECTIVE|IS_OBJECT_ID],\n    attr1 type2 [DEFAULT|EXPRESSION expr3],\n    attr2 type2 [DEFAULT|EXPRESSION expr4]\n)\nPRIMARY KEY key1, key2\nSOURCE(SOURCE_NAME([param1 value1 ... paramN valueN]))\nLAYOUT(LAYOUT_NAME([param_name param_value]))\nLIFETIME({MIN min_val MAX max_val | max_val})\n")))}c.isMDXComponent=!0}}]);