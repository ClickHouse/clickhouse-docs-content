"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[8025],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(r),f=a,d=m["".concat(l,".").concat(f)]||m[f]||u[f]||o;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5572:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],s={},l="current_roles",c={unversionedId:"en/operations/system-tables/current-roles",id:"en/operations/system-tables/current-roles",title:"current_roles",description:"systemtables-currentroles}",source:"@site/docs/en/operations/system-tables/current-roles.md",sourceDirName:"en/operations/system-tables",slug:"/en/operations/system-tables/current-roles",permalink:"/en/operations/system-tables/current-roles",editUrl:"https://github.com/ClickHouse/clickhouse-docs/tree/main/docs/en/operations/system-tables/current-roles.md",tags:[],version:"current",frontMatter:{},sidebar:"english",previous:{title:"crash_log",permalink:"/en/operations/system-tables/crash-log"},next:{title:"data_skipping_indices",permalink:"/en/operations/system-tables/data_skipping_indices"}},p={},u=[],m={toc:u};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"system_tables-current_roles"},"current_roles"),(0,o.kt)("p",null,"Contains active roles of a current user. ",(0,o.kt)("inlineCode",{parentName:"p"},"SET ROLE")," changes the contents of this table."),(0,o.kt)("p",null,"Columns:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"role_name")," (",(0,o.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/string"},"String"),")) \u2014 Role name.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"with_admin_option")," (",(0,o.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/int-uint#uint-ranges"},"UInt8"),") \u2014 Flag that shows whether ",(0,o.kt)("inlineCode",{parentName:"p"},"current_role")," is a role with ",(0,o.kt)("inlineCode",{parentName:"p"},"ADMIN OPTION")," privilege.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"is_default")," (",(0,o.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/int-uint#uint-ranges"},"UInt8"),") \u2014 Flag that shows whether ",(0,o.kt)("inlineCode",{parentName:"p"},"current_role")," is a default role."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/system-tables/current-roles"},"Original article")," "))))}f.isMDXComponent=!0}}]);