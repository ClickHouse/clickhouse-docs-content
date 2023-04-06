"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[76397],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,f=p["".concat(o,".").concat(d)]||p[d]||m[d]||l;return n?a.createElement(f,s(s({ref:t},c),{},{components:n})):a.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[p]="string"==typeof e?e:r,s[1]=i;for(var u=2;u<l;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},81780:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const l={slug:"/en/sql-reference/statements/watch",sidebar_position:53,sidebar_label:"WATCH"},s="WATCH Statement (Experimental)",i={unversionedId:"en/sql-reference/statements/watch",id:"en/sql-reference/statements/watch",title:"WATCH Statement (Experimental)",description:"This is an experimental feature that may change in backwards-incompatible ways in the future releases. Enable live views and WATCH query using set allowexperimentallive_view = 1.",source:"@site/docs/en/sql-reference/statements/watch.md",sourceDirName:"en/sql-reference/statements",slug:"/en/sql-reference/statements/watch",permalink:"/docs/en/sql-reference/statements/watch",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/statements/watch.md",tags:[],version:"current",sidebarPosition:53,frontMatter:{slug:"/en/sql-reference/statements/watch",sidebar_position:53,sidebar_label:"WATCH"},sidebar:"sqlreference",previous:{title:"USE",permalink:"/docs/en/sql-reference/statements/use"},next:{title:"UNDROP",permalink:"/docs/en/sql-reference/statements/undrop"}},o={},u=[{value:"Virtual columns",id:"virtual-columns",level:2},{value:"EVENTS Clause",id:"events-clause",level:2},{value:"LIMIT Clause",id:"limit-clause",level:2},{value:"FORMAT Clause",id:"format-clause",level:2}],c={toc:u},p="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"watch-statement-experimental"},"WATCH Statement (Experimental)"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This is an experimental feature that may change in backwards-incompatible ways in the future releases. Enable live views and ",(0,r.kt)("inlineCode",{parentName:"p"},"WATCH")," query using ",(0,r.kt)("inlineCode",{parentName:"p"},"set allow_experimental_live_view = 1"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"WATCH [db.]live_view\n[EVENTS]\n[LIMIT n]\n[FORMAT format]\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"WATCH")," query performs continuous data retrieval from a ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/create/view#live-view"},"LIVE VIEW")," table. Unless the ",(0,r.kt)("inlineCode",{parentName:"p"},"LIMIT")," clause is specified it provides an infinite stream of query results from a ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/create/view#live-view"},"LIVE VIEW"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"WATCH [db.]live_view [EVENTS] [LIMIT n] [FORMAT format]\n")),(0,r.kt)("h2",{id:"virtual-columns"},"Virtual columns"),(0,r.kt)("p",null,"The virtual ",(0,r.kt)("inlineCode",{parentName:"p"},"_version")," column in the query result indicates the current result version."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE LIVE VIEW lv WITH REFRESH 5 AS SELECT now();\nWATCH lv;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500now()\u2500\u252c\u2500_version\u2500\u2510\n\u2502 2021-02-21 09:17:21 \u2502        1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500now()\u2500\u252c\u2500_version\u2500\u2510\n\u2502 2021-02-21 09:17:26 \u2502        2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500now()\u2500\u252c\u2500_version\u2500\u2510\n\u2502 2021-02-21 09:17:31 \u2502        3 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n...\n")),(0,r.kt)("p",null,"By default, the requested data is returned to the client, while in conjunction with ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/insert-into"},"INSERT INTO")," it can be forwarded to a different table."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO [db.]table WATCH [db.]live_view ...\n")),(0,r.kt)("h2",{id:"events-clause"},"EVENTS Clause"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"EVENTS")," clause can be used to obtain a short form of the ",(0,r.kt)("inlineCode",{parentName:"p"},"WATCH")," query where instead of the query result you will just get the latest query result version."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"WATCH [db.]live_view EVENTS;\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE LIVE VIEW lv WITH REFRESH 5 AS SELECT now();\nWATCH lv EVENTS;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\u250c\u2500version\u2500\u2510\n\u2502       1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500version\u2500\u2510\n\u2502       2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n...\n")),(0,r.kt)("h2",{id:"limit-clause"},"LIMIT Clause"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"LIMIT n")," clause specifies the number of updates the ",(0,r.kt)("inlineCode",{parentName:"p"},"WATCH")," query should wait for before terminating. By default there is no limit on the number of updates and therefore the query will not terminate. The value of ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," indicates that the ",(0,r.kt)("inlineCode",{parentName:"p"},"WATCH")," query should not wait for any new query results and therefore will return immediately once query result is evaluated."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"WATCH [db.]live_view LIMIT 1;\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE LIVE VIEW lv WITH REFRESH 5 AS SELECT now();\nWATCH lv EVENTS LIMIT 1;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\u250c\u2500version\u2500\u2510\n\u2502       1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h2",{id:"format-clause"},"FORMAT Clause"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"FORMAT")," clause works the same way as for the ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/select/format#format-clause"},"SELECT"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/interfaces/formats#jsoneachrowwithprogress"},"JSONEachRowWithProgress")," format should be used when watching ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/create/view#live-view"},"LIVE VIEW")," tables over the HTTP interface. The progress messages will be added to the output to keep the long-lived HTTP connection alive until the query result changes. The interval between progress messages is controlled using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/create/view#live-view-settings"},"live_view_heartbeat_interval")," setting.")))}m.isMDXComponent=!0}}]);