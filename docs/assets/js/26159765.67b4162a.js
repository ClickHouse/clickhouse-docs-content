"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[61362,16484],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(r),d=a,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||s;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<s;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},43890:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const s={slug:"/en/sql-reference/statements/create/quota",sidebar_position:42,sidebar_label:"QUOTA",title:"CREATE QUOTA"},o=void 0,i={unversionedId:"en/sql-reference/statements/create/quota",id:"en/sql-reference/statements/create/quota",title:"CREATE QUOTA",description:"Creates a quota that can be assigned to a user or a role.",source:"@site/docs/en/sql-reference/statements/create/quota.md",sourceDirName:"en/sql-reference/statements/create",slug:"/en/sql-reference/statements/create/quota",permalink:"/docs/en/sql-reference/statements/create/quota",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/statements/create/quota.md",tags:[],version:"current",sidebarPosition:42,frontMatter:{slug:"/en/sql-reference/statements/create/quota",sidebar_position:42,sidebar_label:"QUOTA",title:"CREATE QUOTA"},sidebar:"english",previous:{title:"ROW POLICY",permalink:"/docs/en/sql-reference/statements/create/row-policy"},next:{title:"SETTINGS PROFILE",permalink:"/docs/en/sql-reference/statements/create/settings-profile"}},l={},c=[],u={toc:c},p="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Creates a ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/operations/access-rights#quotas-management"},"quota")," that can be assigned to a user or a role."),(0,a.kt)("p",null,"Syntax:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE QUOTA [IF NOT EXISTS | OR REPLACE] name [ON CLUSTER cluster_name]\n    [KEYED BY {user_name | ip_address | client_key | client_key,user_name | client_key,ip_address} | NOT KEYED]\n    [FOR [RANDOMIZED] INTERVAL number {second | minute | hour | day | week | month | quarter | year}\n        {MAX { {queries | query_selects | query_inserts | errors | result_rows | result_bytes | read_rows | read_bytes | execution_time} = number } [,...] |\n         NO LIMITS | TRACKING ONLY} [,...]]\n    [TO {role [,...] | ALL | ALL EXCEPT role [,...]}]\n")),(0,a.kt)("p",null,"Keys ",(0,a.kt)("inlineCode",{parentName:"p"},"user_name"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ip_address"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"client_key"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"client_key, user_name")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"client_key, ip_address")," correspond to the fields in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/operations/system-tables/quotas"},"system.quotas")," table."),(0,a.kt)("p",null,"Parameters ",(0,a.kt)("inlineCode",{parentName:"p"},"queries"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"query_selects"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"query_inserts"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"errors"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"result_rows"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"result_bytes"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"read_rows"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"read_bytes"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"execution_time")," correspond to the fields in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/operations/system-tables/quotas_usage"},"system.quotas_usage")," table."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ON CLUSTER")," clause allows creating quotas on a cluster, see ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/distributed-ddl"},"Distributed DDL"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples")),(0,a.kt)("p",null,"Limit the maximum number of queries for the current user with 123 queries in 15 months constraint:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE QUOTA qA FOR INTERVAL 15 month MAX queries = 123 TO CURRENT_USER;\n")),(0,a.kt)("p",null,"For the default user limit the maximum execution time with half a second in 30 minutes, and limit the maximum number of queries with 321 and the maximum number of errors with 10 in 5 quaters:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE QUOTA qB FOR INTERVAL 30 minute MAX execution_time = 0.5, FOR INTERVAL 5 quarter MAX queries = 321, errors = 10 TO default;\n")))}m.isMDXComponent=!0},47663:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(87462),a=(r(67294),r(3905)),s=r(43890);const o={slug:"/zh/sql-reference/statements/create/quota",sidebar_position:42,sidebar_label:"QUOTA",title:"CREATE QUOTA"},i=void 0,l={unversionedId:"zh/sql-reference/statements/create/quota",id:"zh/sql-reference/statements/create/quota",title:"CREATE QUOTA",description:"",source:"@site/docs/zh/sql-reference/statements/create/quota.mdx",sourceDirName:"zh/sql-reference/statements/create",slug:"/zh/sql-reference/statements/create/quota",permalink:"/docs/zh/sql-reference/statements/create/quota",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/statements/create/quota.mdx",tags:[],version:"current",sidebarPosition:42,frontMatter:{slug:"/zh/sql-reference/statements/create/quota",sidebar_position:42,sidebar_label:"QUOTA",title:"CREATE QUOTA"},sidebar:"chinese",previous:{title:"ROW POLICY",permalink:"/docs/zh/sql-reference/statements/create/row-policy"},next:{title:"SETTINGS PROFILE",permalink:"/docs/zh/sql-reference/statements/create/settings-profile"}},c={},u=[],p={toc:u},m="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(s.default,{mdxType:"Content"}))}d.isMDXComponent=!0}}]);