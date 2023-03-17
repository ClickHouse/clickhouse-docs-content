"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[94976],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=l(n),f=a,d=u["".concat(c,".").concat(f)]||u[f]||m[f]||i;return n?r.createElement(d,s(s({ref:t},p),{},{components:n})):r.createElement(d,s({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},52666:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const i={slug:"/en/sql-reference/statements/truncate",sidebar_position:52,sidebar_label:"TRUNCATE"},s="TRUNCATE Statement",o={unversionedId:"en/sql-reference/statements/truncate",id:"en/sql-reference/statements/truncate",title:"TRUNCATE Statement",description:"Removes all data from a table. When the clause IF EXISTS is omitted, the query returns an error if the table does not exist.",source:"@site/docs/en/sql-reference/statements/truncate.md",sourceDirName:"en/sql-reference/statements",slug:"/en/sql-reference/statements/truncate",permalink:"/docs/en/sql-reference/statements/truncate",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/statements/truncate.md",tags:[],version:"current",sidebarPosition:52,frontMatter:{slug:"/en/sql-reference/statements/truncate",sidebar_position:52,sidebar_label:"TRUNCATE"},sidebar:"sqlreference",previous:{title:"SET ROLE",permalink:"/docs/en/sql-reference/statements/set-role"},next:{title:"USE",permalink:"/docs/en/sql-reference/statements/use"}},c={},l=[],p={toc:l},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"truncate-statement"},"TRUNCATE Statement"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"TRUNCATE TABLE [IF EXISTS] [db.]name [ON CLUSTER cluster]\n")),(0,a.kt)("p",null,"Removes all data from a table. When the clause ",(0,a.kt)("inlineCode",{parentName:"p"},"IF EXISTS")," is omitted, the query returns an error if the table does not exist."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"TRUNCATE")," query is not supported for ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/special/view"},"View"),", ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/special/file"},"File"),", ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/special/url"},"URL"),", ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/special/buffer"},"Buffer")," and ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/special/null"},"Null")," table engines."),(0,a.kt)("p",null,"You can use the ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/operations/settings/settings#alter-sync"},"alter_sync")," setting to set up waiting for actions to be executed on replicas."),(0,a.kt)("p",null,"You can specify how long (in seconds) to wait for inactive replicas to execute ",(0,a.kt)("inlineCode",{parentName:"p"},"TRUNCATE")," queries with the ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/operations/settings/settings#replication-wait-for-inactive-replica-timeout"},"replication_wait_for_inactive_replica_timeout")," setting."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If the ",(0,a.kt)("inlineCode",{parentName:"p"},"alter_sync")," is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"2")," and some replicas are not active for more than the time, specified by the ",(0,a.kt)("inlineCode",{parentName:"p"},"replication_wait_for_inactive_replica_timeout")," setting, then an exception ",(0,a.kt)("inlineCode",{parentName:"p"},"UNFINISHED")," is thrown.")))}m.isMDXComponent=!0}}]);