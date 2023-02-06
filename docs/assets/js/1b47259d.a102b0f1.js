"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[41238],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(r),f=i,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||s;return r?n.createElement(m,a(a({ref:t},c),{},{components:r})):n.createElement(m,a({ref:t},c))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=r.length,a=new Array(s);a[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:i,a[1]=o;for(var u=2;u<s;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},13400:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var n=r(87462),i=(r(67294),r(3905));const s={slug:"/en/sql-reference/distributed-ddl",sidebar_position:3,sidebar_label:"Distributed DDL"},a="Distributed DDL Queries (ON CLUSTER Clause)",o={unversionedId:"en/sql-reference/distributed-ddl",id:"en/sql-reference/distributed-ddl",title:"Distributed DDL Queries (ON CLUSTER Clause)",description:"By default the CREATE, DROP, ALTER, and RENAME queries affect only the current server where they are executed. In a cluster setup, it is possible to run such queries in a distributed manner with the ON CLUSTER clause.",source:"@site/docs/en/sql-reference/distributed-ddl.md",sourceDirName:"en/sql-reference",slug:"/en/sql-reference/distributed-ddl",permalink:"/docs/en/sql-reference/distributed-ddl",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/distributed-ddl.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{slug:"/en/sql-reference/distributed-ddl",sidebar_position:3,sidebar_label:"Distributed DDL"},sidebar:"english",previous:{title:"Syntax",permalink:"/docs/en/sql-reference/syntax"},next:{title:"Functions",permalink:"/docs/en/sql-reference/functions/"}},l={},u=[],c={toc:u},d="wrapper";function p(e){let{components:t,...r}=e;return(0,i.kt)(d,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"distributed-ddl-queries-on-cluster-clause"},"Distributed DDL Queries (ON CLUSTER Clause)"),(0,i.kt)("p",null,"By default the ",(0,i.kt)("inlineCode",{parentName:"p"},"CREATE"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"DROP"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ALTER"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"RENAME")," queries affect only the current server where they are executed. In a cluster setup, it is possible to run such queries in a distributed manner with the ",(0,i.kt)("inlineCode",{parentName:"p"},"ON CLUSTER")," clause."),(0,i.kt)("p",null,"For example, the following query creates the ",(0,i.kt)("inlineCode",{parentName:"p"},"all_hits")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Distributed")," table on each host in ",(0,i.kt)("inlineCode",{parentName:"p"},"cluster"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE IF NOT EXISTS all_hits ON CLUSTER cluster (p Date, i Int32) ENGINE = Distributed(cluster, default, hits)\n")),(0,i.kt)("p",null,"In order to run these queries correctly, each host must have the same cluster definition (to simplify syncing configs, you can use substitutions from ZooKeeper). They must also connect to the ZooKeeper servers."),(0,i.kt)("p",null,"The local version of the query will eventually be executed on each host in the cluster, even if some hosts are currently not available."),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"The order for executing queries within a single host is guaranteed.")))}p.isMDXComponent=!0}}]);