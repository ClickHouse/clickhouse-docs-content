"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[16011],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return n?a.createElement(f,s(s({ref:t},d),{},{components:n})):a.createElement(f,s({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},74484:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={sidebar_label:"Pull to ClickHouse",sidebar_position:3,slug:"/en/integrations/redshift/redshift-pull-to-clickhouse",description:"Pull data from Redshift to ClickHouse"},s="Pull Data from Redshift to ClickHouse",o={unversionedId:"en/integrations/migration/redshift/redshift-pull-to-clickhouse",id:"en/integrations/migration/redshift/redshift-pull-to-clickhouse",title:"Pull Data from Redshift to ClickHouse",description:"Pull data from Redshift to ClickHouse",source:"@site/docs/en/integrations/migration/redshift/redshift-pull-to-clickhouse.md",sourceDirName:"en/integrations/migration/redshift",slug:"/en/integrations/redshift/redshift-pull-to-clickhouse",permalink:"/docs/en/integrations/redshift/redshift-pull-to-clickhouse",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/integrations/migration/redshift/redshift-pull-to-clickhouse.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Pull to ClickHouse",sidebar_position:3,slug:"/en/integrations/redshift/redshift-pull-to-clickhouse",description:"Pull data from Redshift to ClickHouse"}},l={},c=[{value:"Pros",id:"pros",level:4},{value:"Cons",id:"cons",level:4},{value:"Tutorial",id:"tutorial",level:3}],d={toc:c};function u(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pull-data-from-redshift-to-clickhouse"},"Pull Data from Redshift to ClickHouse"),(0,r.kt)("p",null,"In the pull scenario, the idea is to leverage the ClickHouse JDBC Bridge to connect to a Redshift cluster directly from a ClickHouse instance and perform ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT INTO ... SELECT")," queries:"),(0,r.kt)("img",{src:n(58982).Z,class:"image",alt:"PULL from Redshit to ClickHouse"}),(0,r.kt)("h4",{id:"pros"},"Pros"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Generic to all JDBC compatible tools"),(0,r.kt)("li",{parentName:"ul"},"Elegant solution to allow querying multiple external datasources from within ClickHouse")),(0,r.kt)("h4",{id:"cons"},"Cons"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Requires a ClickHouse JDBC Bridge instance which can turn into a potential scalability bottleneck")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Even though Redshift is based on PostgreSQL, using the ClickHouse PostgreSQL table function or table engine is not possible since ClickHouse requires PostgreSQL version 9 or above and the Redshift API is based on an earlier version (8.x)."))),(0,r.kt)("h3",{id:"tutorial"},"Tutorial"),(0,r.kt)("p",null,"To use this option, you need to set up a ClickHouse JDBC Bridge. ClickHouse JDBC Bridge is a standalone Java application that handles JDBC connectivity and acts as a proxy between the ClickHouse instance and the datasources. For this tutorial, we used a pre-populated Redshift instance with a ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/redshift/latest/dg/c_sampledb.html"},"sample database"),"."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Deploy the ClickHouse JDBC Bridge. For more details, see our user guide on ",(0,r.kt)("a",{parentName:"li",href:"/docs/en/integrations/jdbc/jdbc-with-clickhouse"},"JDBC for External Datasources"))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you are using ClickHouse Cloud, you will need to run your ClickHouse JDBC Bridge on a separate environnment and connect to ClickHouse Cloud using the ",(0,r.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/sql-reference/table-functions/remote/"},"remoteSecure")," function"))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configure your Redshift datasource for ClickHouse JDBC Bridge. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/clickhouse-jdbc-bridge/config/datasources/redshift.json ")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "redshift-server": {\n    "aliases": [\n      "redshift"\n    ],\n    "driverUrls": [\n    "https://s3.amazonaws.com/redshift-downloads/drivers/jdbc/2.1.0.4/redshift-jdbc42-2.1.0.4.jar"\n    ],\n    "driverClassName": "com.amazon.redshift.jdbc.Driver",\n    "jdbcUrl": "jdbc:redshift://redshift-cluster-1.ckubnplpz1uv.us-east-1.redshift.amazonaws.com:5439/dev",\n    "username": "awsuser",\n    "password": "<password>",\n    "maximumPoolSize": 5\n  }\n}\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Once ClickHouse JDBC Bridge deployed and running, you can start querying your Redshift instance from ClickHouse"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM jdbc('redshift', 'select username, firstname, lastname from users limit 5')\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-response"},"Query id: 1b7de211-c0f6-4117-86a2-276484f9f4c0\n\n\u250c\u2500username\u2500\u252c\u2500firstname\u2500\u252c\u2500lastname\u2500\u2510\n\u2502 PGL08LJI \u2502 Vladimir  \u2502 Humphrey \u2502\n\u2502 XDZ38RDD \u2502 Barry     \u2502 Roy      \u2502\n\u2502 AEB55QTM \u2502 Reagan    \u2502 Hodge    \u2502\n\u2502 OWY35QYB \u2502 Tamekah   \u2502 Juarez   \u2502\n\u2502 MSD36KVR \u2502 Mufutau   \u2502 Watkins  \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n5 rows in set. Elapsed: 0.438 sec.\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM jdbc('redshift', 'select count(*) from sales')\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-response"},"Query id: 2d0f957c-8f4e-43b2-a66a-cc48cc96237b\n\n\u250c\u2500\u2500count\u2500\u2510\n\u2502 172456 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n1 rows in set. Elapsed: 0.304 sec.\n")))),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the following, we display importing data using an ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT INTO ... SELECT")," statement"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"# TABLE CREATION with 3 columns\nCREATE TABLE users_imported\n(\n    `username` String,\n    `firstname` String,\n    `lastname` String\n)\nENGINE = MergeTree\nORDER BY firstname\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-response"},"Query id: c7c4c44b-cdb2-49cf-b319-4e569976ab05\n\nOk.\n\n0 rows in set. Elapsed: 0.233 sec.\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"# IMPORTING DATA\nINSERT INTO users_imported (*) SELECT *\nFROM jdbc('redshift', 'select username, firstname, lastname from users')\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-response"},"Query id: 9d3a688d-b45a-40f4-a7c7-97d93d7149f1\n\nOk.\n\n0 rows in set. Elapsed: 4.498 sec. Processed 49.99 thousand rows, 2.49 MB (11.11 thousand rows/s., 554.27 KB/s.)\n")))))}u.isMDXComponent=!0},58982:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pull-b3ab6dde4c89d2a59b961b5430a68167.png"}}]);