"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[36551],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,g=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},61455:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={slug:"/en/sql-reference/statements/alter/projection",sidebar_position:49,sidebar_label:"PROJECTION",title:"Projections"},o=void 0,s={unversionedId:"en/sql-reference/statements/alter/projection",id:"en/sql-reference/statements/alter/projection",title:"Projections",description:"Projections store data in a format that optimizes query execution, this feature is useful for:",source:"@site/docs/en/sql-reference/statements/alter/projection.md",sourceDirName:"en/sql-reference/statements/alter",slug:"/en/sql-reference/statements/alter/projection",permalink:"/docs/en/sql-reference/statements/alter/projection",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/statements/alter/projection.md",tags:[],version:"current",sidebarPosition:49,frontMatter:{slug:"/en/sql-reference/statements/alter/projection",sidebar_position:49,sidebar_label:"PROJECTION",title:"Projections"},sidebar:"english",previous:{title:"SETTINGS PROFILE",permalink:"/docs/en/sql-reference/statements/alter/settings-profile"},next:{title:"VIEW",permalink:"/docs/en/sql-reference/statements/alter/view"}},l={},p=[{value:"Example filtering without using primary keys",id:"example-filtering-without-using-primary-keys",level:2},{value:"Example pre-aggregation query",id:"example-pre-aggregation-query",level:2},{value:"ADD PROJECTION",id:"add-projection",level:2},{value:"DROP PROJECTION",id:"drop-projection",level:2},{value:"MATERIALIZE PROJECTION",id:"materialize-projection",level:2},{value:"CLEAR PROJECTION",id:"clear-projection",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Projections store data in a format that optimizes query execution, this feature is useful for:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Running queries on a column that is not a part of the primary key"),(0,a.kt)("li",{parentName:"ul"},"Pre-aggregating columns, it will reduce both computation and IO")),(0,a.kt)("p",null,"You can define one or more projections for a table, and during the query analysis the projection with the least data to scan will be selected by ClickHouse without modifying the query provided by the user."),(0,a.kt)("h2",{id:"example-filtering-without-using-primary-keys"},"Example filtering without using primary keys"),(0,a.kt)("p",null,"Creating the table:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"CREATE TABLE visits_order\n(\n   `user_id` UInt64,\n   `user_name` String,\n   `pages_visited` Nullable(Float64),\n   `user_agent` String\n)\nENGINE = MergeTree()\nPRIMARY KEY user_agent\n")),(0,a.kt)("p",null,"Using ",(0,a.kt)("inlineCode",{parentName:"p"},"ALTER TABLE"),", we could add the Projection to an existing table:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ALTER TABLE visits_order ADD PROJECTION user_name_projection (\nSELECT\n* \nORDER BY user_name\n)\n\nALTER TABLE visits_order MATERIALIZE PROJECTION user_name_projection\n")),(0,a.kt)("p",null,"Inserting the data:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"INSERT INTO visits_order SELECT\n    number,\n    'test',\n    1.5 * (number / 2),\n    'Android'\nFROM numbers(1, 100);\n")),(0,a.kt)("p",null,"The Projection will allow us to filter by ",(0,a.kt)("inlineCode",{parentName:"p"},"user_name")," fast even if in the original Table ",(0,a.kt)("inlineCode",{parentName:"p"},"user_name")," was not defined as a ",(0,a.kt)("inlineCode",{parentName:"p"},"PRIMARY_KEY"),".\nAt query time ClickHouse determined that less data will be processed if the projection is used, as the data is ordered by ",(0,a.kt)("inlineCode",{parentName:"p"},"user_name"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SELECT\n    *\nFROM visits_order\nWHERE user_name='test'\nLIMIT 2\n")),(0,a.kt)("p",null,"To verify that a query is using the projection, we could review the ",(0,a.kt)("inlineCode",{parentName:"p"},"system.query_log")," table. On the ",(0,a.kt)("inlineCode",{parentName:"p"},"projections")," field we have the name of the projection used or empty if none has been used:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SELECT query, projections FROM system.query_log WHERE query_id='<query_id>'\n")),(0,a.kt)("h2",{id:"example-pre-aggregation-query"},"Example pre-aggregation query"),(0,a.kt)("p",null,"Creating the table with the Projection:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"CREATE TABLE visits\n(\n   `user_id` UInt64,\n   `user_name` String,\n   `pages_visited` Nullable(Float64),\n   `user_agent` String,\n   PROJECTION projection_visits_by_user\n   (\n       SELECT\n           user_agent,\n           sum(pages_visited)\n       GROUP BY user_id, user_agent\n   )\n)\nENGINE = MergeTree()\nORDER BY user_agent\n")),(0,a.kt)("p",null,"Inserting the data:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"INSERT INTO visits SELECT\n    number,\n    'test',\n    1.5 * (number / 2),\n    'Android'\nFROM numbers(1, 100);\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"INSERT INTO visits SELECT\n    number,\n    'test',\n    1. * (number / 2),\n   'IOS'\nFROM numbers(100, 500);\n")),(0,a.kt)("p",null,"We will execute a first query using ",(0,a.kt)("inlineCode",{parentName:"p"},"GROUP BY")," using the field ",(0,a.kt)("inlineCode",{parentName:"p"},"user_agent"),", this query will not use the projection defined as the pre-aggregation does not match."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SELECT\n    user_agent,\n    count(DISTINCT user_id)\nFROM visits\nGROUP BY user_agent\n")),(0,a.kt)("p",null,"To use the projection we could execute queries that select part of, or all of the pre-aggregation and ",(0,a.kt)("inlineCode",{parentName:"p"},"GROUP BY")," fields."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SELECT\n    user_agent\nFROM visits\nWHERE user_id > 50 AND user_id < 150\nGROUP BY user_agent\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SELECT\n    user_agent,\n    sum(pages_visited)\nFROM visits\nGROUP BY user_id\n")),(0,a.kt)("p",null,"As mentioned before, we could review the ",(0,a.kt)("inlineCode",{parentName:"p"},"system.query_log")," table. On the ",(0,a.kt)("inlineCode",{parentName:"p"},"projections")," field we have the name of the projection used or empty if none has been used:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SELECT query, projections FROM system.query_log WHERE query_id='<query_id>'\n")),(0,a.kt)("h1",{id:"manipulating-projections"},"Manipulating Projections"),(0,a.kt)("p",null,"The following operations with ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/mergetree-family/mergetree/#projections"},"projections")," are available:"),(0,a.kt)("h2",{id:"add-projection"},"ADD PROJECTION"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ALTER TABLE [db].name ADD PROJECTION name ( SELECT <COLUMN LIST EXPR> [GROUP BY] [ORDER BY] )")," - Adds projection description to tables metadata."),(0,a.kt)("h2",{id:"drop-projection"},"DROP PROJECTION"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ALTER TABLE [db].name DROP PROJECTION name")," - Removes projection description from tables metadata and deletes projection files from disk. Implemented as a ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/alter/#mutations"},"mutation"),"."),(0,a.kt)("h2",{id:"materialize-projection"},"MATERIALIZE PROJECTION"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ALTER TABLE [db.]table MATERIALIZE PROJECTION name IN PARTITION partition_name")," - The query rebuilds the projection ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," in the partition ",(0,a.kt)("inlineCode",{parentName:"p"},"partition_name"),". Implemented as a ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/alter/#mutations"},"mutation"),"."),(0,a.kt)("h2",{id:"clear-projection"},"CLEAR PROJECTION"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ALTER TABLE [db.]table CLEAR PROJECTION name IN PARTITION partition_name")," - Deletes projection files from disk without removing description. Implemented as a ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/alter/#mutations"},"mutation"),"."),(0,a.kt)("p",null,"The commands ",(0,a.kt)("inlineCode",{parentName:"p"},"ADD"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"DROP")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"CLEAR")," are lightweight in a sense that they only change metadata or remove files."),(0,a.kt)("p",null,"Also, they are replicated, syncing projections metadata via ClickHouse Keeper or ZooKeeper."),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Projection manipulation is supported only for tables with ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/mergetree-family/mergetree"},(0,a.kt)("inlineCode",{parentName:"a"},"*MergeTree"))," engine (including ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/mergetree-family/replication"},"replicated")," variants)."))))}c.isMDXComponent=!0}}]);