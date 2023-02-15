"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[78535],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},79968:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={slug:"/en/operations/system-tables/enabled-roles"},l="enabled_roles",s={unversionedId:"en/operations/system-tables/enabled-roles",id:"en/operations/system-tables/enabled-roles",title:"enabled_roles",description:"Contains all active roles at the moment, including current role of the current user and granted roles for current role.",source:"@site/docs/en/operations/system-tables/enabled-roles.md",sourceDirName:"en/operations/system-tables",slug:"/en/operations/system-tables/enabled-roles",permalink:"/docs/en/operations/system-tables/enabled-roles",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/operations/system-tables/enabled-roles.md",tags:[],version:"current",frontMatter:{slug:"/en/operations/system-tables/enabled-roles"},sidebar:"english",previous:{title:"distribution_queue",permalink:"/docs/en/operations/system-tables/distribution_queue"},next:{title:"errors",permalink:"/docs/en/operations/system-tables/errors"}},i={},c=[],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"enabled_roles"},"enabled_roles"),(0,a.kt)("p",null,"Contains all active roles at the moment, including current role of the current user and granted roles for current role."),(0,a.kt)("p",null,"Columns:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"role_name")," (",(0,a.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/string"},"String"),")) \u2014 Role name."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"with_admin_option")," (",(0,a.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint#uint-ranges"},"UInt8"),") \u2014 Flag that shows whether ",(0,a.kt)("inlineCode",{parentName:"li"},"enabled_role")," is a role with ",(0,a.kt)("inlineCode",{parentName:"li"},"ADMIN OPTION")," privilege."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"is_current")," (",(0,a.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint#uint-ranges"},"UInt8"),") \u2014 Flag that shows whether ",(0,a.kt)("inlineCode",{parentName:"li"},"enabled_role")," is a current role of a current user."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"is_default")," (",(0,a.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint#uint-ranges"},"UInt8"),") \u2014 Flag that shows whether ",(0,a.kt)("inlineCode",{parentName:"li"},"enabled_role")," is a default role.")))}d.isMDXComponent=!0}}]);