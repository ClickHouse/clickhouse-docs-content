"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[95936,6205],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(r),f=s,d=m["".concat(l,".").concat(f)]||m[f]||u[f]||a;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=r.length,i=new Array(a);i[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[m]="string"==typeof e?e:s,i[1]=o;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},73655:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var n=r(87462),s=(r(67294),r(3905));const a={slug:"/en/sql-reference/statements/create/settings-profile",sidebar_position:43,sidebar_label:"SETTINGS PROFILE",title:"CREATE SETTINGS PROFILE"},i=void 0,o={unversionedId:"en/sql-reference/statements/create/settings-profile",id:"en/sql-reference/statements/create/settings-profile",title:"CREATE SETTINGS PROFILE",description:"Creates settings profiles that can be assigned to a user or a role.",source:"@site/docs/en/sql-reference/statements/create/settings-profile.md",sourceDirName:"en/sql-reference/statements/create",slug:"/en/sql-reference/statements/create/settings-profile",permalink:"/docs/en/sql-reference/statements/create/settings-profile",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/statements/create/settings-profile.md",tags:[],version:"current",sidebarPosition:43,frontMatter:{slug:"/en/sql-reference/statements/create/settings-profile",sidebar_position:43,sidebar_label:"SETTINGS PROFILE",title:"CREATE SETTINGS PROFILE"},sidebar:"english",previous:{title:"QUOTA",permalink:"/docs/en/sql-reference/statements/create/quota"},next:{title:"ALTER",permalink:"/docs/en/sql-reference/statements/alter/"}},l={},c=[{value:"Example",id:"example",level:2}],p={toc:c},m="wrapper";function u(e){let{components:t,...r}=e;return(0,s.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Creates ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/operations/access-rights#settings-profiles-management"},"settings profiles")," that can be assigned to a user or a role."),(0,s.kt)("p",null,"Syntax:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE SETTINGS PROFILE [IF NOT EXISTS | OR REPLACE] name1 [ON CLUSTER cluster_name1]\n        [, name2 [ON CLUSTER cluster_name2] ...]\n    [SETTINGS variable [= value] [MIN [=] min_value] [MAX [=] max_value] [CONST|READONLY|WRITABLE|CHANGEABLE_IN_READONLY] | INHERIT 'profile_name'] [,...]\n")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"ON CLUSTER")," clause allows creating settings profiles on a cluster, see ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/distributed-ddl"},"Distributed DDL"),"."),(0,s.kt)("h2",{id:"example"},"Example"),(0,s.kt)("p",null,"Create the ",(0,s.kt)("inlineCode",{parentName:"p"},"max_memory_usage_profile")," settings profile with value and constraints for the ",(0,s.kt)("inlineCode",{parentName:"p"},"max_memory_usage")," setting and assign it to user ",(0,s.kt)("inlineCode",{parentName:"p"},"robin"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE SETTINGS PROFILE max_memory_usage_profile SETTINGS max_memory_usage = 100000001 MIN 90000000 MAX 110000000 TO robin\n")))}u.isMDXComponent=!0},67883:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(87462),s=(r(67294),r(3905)),a=r(73655);const i={slug:"/zh/sql-reference/statements/create/settings-profile",sidebar_position:43,sidebar_label:"SETTINGS PROFILE",title:"CREATE SETTINGS PROFILE"},o=void 0,l={unversionedId:"zh/sql-reference/statements/create/settings-profile",id:"zh/sql-reference/statements/create/settings-profile",title:"CREATE SETTINGS PROFILE",description:"",source:"@site/docs/zh/sql-reference/statements/create/settings-profile.mdx",sourceDirName:"zh/sql-reference/statements/create",slug:"/zh/sql-reference/statements/create/settings-profile",permalink:"/docs/zh/sql-reference/statements/create/settings-profile",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/statements/create/settings-profile.mdx",tags:[],version:"current",sidebarPosition:43,frontMatter:{slug:"/zh/sql-reference/statements/create/settings-profile",sidebar_position:43,sidebar_label:"SETTINGS PROFILE",title:"CREATE SETTINGS PROFILE"},sidebar:"chinese",previous:{title:"QUOTA",permalink:"/docs/zh/sql-reference/statements/create/quota"},next:{title:"ALTER",permalink:"/docs/zh/sql-reference/statements/alter/"}},c={},p=[],m={toc:p},u="wrapper";function f(e){let{components:t,...r}=e;return(0,s.kt)(u,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(a.default,{mdxType:"Content"}))}f.isMDXComponent=!0}}]);