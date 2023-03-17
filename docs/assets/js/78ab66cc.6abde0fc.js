"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[15925],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),c=r,k=u["".concat(l,".").concat(c)]||u[c]||m[c]||a;return n?i.createElement(k,o(o({ref:t},d),{},{components:n})):i.createElement(k,o({ref:t},d))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},12290:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var i=n(87462),r=(n(67294),n(3905));const a={slug:"/en/operations/settings/permissions-for-queries",sidebar_position:58,sidebar_label:"Permissions for Queries"},o="Permissions for Queries",s={unversionedId:"en/operations/settings/permissions-for-queries",id:"en/operations/settings/permissions-for-queries",title:"Permissions for Queries",description:"Queries in ClickHouse can be divided into several types:",source:"@site/docs/en/operations/settings/permissions-for-queries.md",sourceDirName:"en/operations/settings",slug:"/en/operations/settings/permissions-for-queries",permalink:"/docs/en/operations/settings/permissions-for-queries",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/operations/settings/permissions-for-queries.md",tags:[],version:"current",sidebarPosition:58,frontMatter:{slug:"/en/operations/settings/permissions-for-queries",sidebar_position:58,sidebar_label:"Permissions for Queries"},sidebar:"docs",previous:{title:"Format Settings",permalink:"/docs/en/operations/settings/formats"},next:{title:"Restrictions on Query Complexity",permalink:"/docs/en/operations/settings/query-complexity"}},l={},p=[{value:"readonly",id:"readonly",level:2},{value:"allow_ddl",id:"settings_allow_ddl",level:2}],d={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"permissions-for-queries"},"Permissions for Queries"),(0,r.kt)("p",null,"Queries in ClickHouse can be divided into several types:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Read data queries: ",(0,r.kt)("inlineCode",{parentName:"li"},"SELECT"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"SHOW"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"DESCRIBE"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"EXISTS"),"."),(0,r.kt)("li",{parentName:"ol"},"Write data queries: ",(0,r.kt)("inlineCode",{parentName:"li"},"INSERT"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"OPTIMIZE"),"."),(0,r.kt)("li",{parentName:"ol"},"Change settings query: ",(0,r.kt)("inlineCode",{parentName:"li"},"SET"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"USE"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Data_definition_language"},"DDL")," queries: ",(0,r.kt)("inlineCode",{parentName:"li"},"CREATE"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"ALTER"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"RENAME"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"ATTACH"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"DETACH"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"DROP")," ",(0,r.kt)("inlineCode",{parentName:"li"},"TRUNCATE"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"KILL QUERY"),".")),(0,r.kt)("p",null,"The following settings regulate user permissions by the type of query:"),(0,r.kt)("h2",{id:"readonly"},"readonly"),(0,r.kt)("p",null,"Restricts permissions for read data, write data, and change settings queries."),(0,r.kt)("p",null,"When set to 1, allows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"All types of read queries (like SELECT and equivalent queries)."),(0,r.kt)("li",{parentName:"ul"},"Queries that modify only session context (like USE).")),(0,r.kt)("p",null,"When set to 2, allows the above plus:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"SET and CREATE TEMPORARY TABLE"),(0,r.kt)("admonition",{parentName:"li",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Queries like EXISTS, DESCRIBE, EXPLAIN, SHOW PROCESSLIST, etc are equivalent to SELECT, because they just do select from system tables.")))),(0,r.kt)("p",null,"Possible values:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"0 \u2014 Read, Write, and Change settings queries are allowed."),(0,r.kt)("li",{parentName:"ul"},"1 \u2014 Only Read data queries are allowed."),(0,r.kt)("li",{parentName:"ul"},"2 \u2014 Read data and Change settings queries are allowed.")),(0,r.kt)("p",null,"Default value: 0"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"After setting ",(0,r.kt)("inlineCode",{parentName:"p"},"readonly = 1"),", the user can\u2019t change ",(0,r.kt)("inlineCode",{parentName:"p"},"readonly")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"allow_ddl")," settings in the current session."),(0,r.kt)("p",{parentName:"admonition"},"When using the ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," method in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/interfaces/http"},"HTTP interface"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"readonly = 1")," is set automatically. To modify data, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"POST")," method."),(0,r.kt)("p",{parentName:"admonition"},"Setting ",(0,r.kt)("inlineCode",{parentName:"p"},"readonly = 1")," prohibits the user from changing settings. There is a way to prohibit the user from changing only specific settings. Also there is a way to allow changing only specific settings under ",(0,r.kt)("inlineCode",{parentName:"p"},"readonly = 1")," restrictions. For details see ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/operations/settings/constraints-on-settings"},"constraints on settings"),".")),(0,r.kt)("h2",{id:"settings_allow_ddl"},"allow_ddl"),(0,r.kt)("p",null,"Allows or denies ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Data_definition_language"},"DDL")," queries."),(0,r.kt)("p",null,"Possible values:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"0 \u2014 DDL queries are not allowed."),(0,r.kt)("li",{parentName:"ul"},"1 \u2014 DDL queries are allowed.")),(0,r.kt)("p",null,"Default value: 1"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"You cannot run ",(0,r.kt)("inlineCode",{parentName:"p"},"SET allow_ddl = 1")," if ",(0,r.kt)("inlineCode",{parentName:"p"},"allow_ddl = 0")," for the current session.")),(0,r.kt)("admonition",{title:"KILL QUERY",type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"KILL QUERY")," can be performed with any combination of readonly and allow_ddl settings.")))}m.isMDXComponent=!0}}]);