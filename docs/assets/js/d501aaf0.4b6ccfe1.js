"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[50821],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(r),f=a,d=m["".concat(i,".").concat(f)]||m[f]||u[f]||o;return r?n.createElement(d,l(l({ref:t},c),{},{components:r})):n.createElement(d,l({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},69326:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={slug:"/en/sql-reference/statements/revoke",sidebar_position:39,sidebar_label:"REVOKE"},l="REVOKE Statement",s={unversionedId:"en/sql-reference/statements/revoke",id:"en/sql-reference/statements/revoke",title:"REVOKE Statement",description:"Revokes privileges from users or roles.",source:"@site/docs/en/sql-reference/statements/revoke.md",sourceDirName:"en/sql-reference/statements",slug:"/en/sql-reference/statements/revoke",permalink:"/docs/en/sql-reference/statements/revoke",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/statements/revoke.md",tags:[],version:"current",sidebarPosition:39,frontMatter:{slug:"/en/sql-reference/statements/revoke",sidebar_position:39,sidebar_label:"REVOKE"},sidebar:"english",previous:{title:"EXPLAIN",permalink:"/docs/en/sql-reference/statements/explain"},next:{title:"ATTACH",permalink:"/docs/en/sql-reference/statements/attach"}},i={},p=[{value:"Syntax",id:"syntax",level:2},{value:"Description",id:"description",level:2},{value:"Partial Revokes",id:"partial-revokes",level:3},{value:"Examples",id:"examples",level:2}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"revoke-statement"},"REVOKE Statement"),(0,a.kt)("p",null,"Revokes privileges from users or roles."),(0,a.kt)("h2",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Revoking privileges from users")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"REVOKE [ON CLUSTER cluster_name] privilege[(column_name [,...])] [,...] ON {db.table|db.*|*.*|table|*} FROM {user | CURRENT_USER} [,...] | ALL | ALL EXCEPT {user | CURRENT_USER} [,...]\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Revoking roles from users")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"REVOKE [ON CLUSTER cluster_name] [ADMIN OPTION FOR] role [,...] FROM {user | role | CURRENT_USER} [,...] | ALL | ALL EXCEPT {user_name | role_name | CURRENT_USER} [,...]\n")),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"To revoke some privilege you can use a privilege of a wider scope than you plan to revoke. For example, if a user has the ",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT (x,y)")," privilege, administrator can execute ",(0,a.kt)("inlineCode",{parentName:"p"},"REVOKE SELECT(x,y) ..."),", or ",(0,a.kt)("inlineCode",{parentName:"p"},"REVOKE SELECT * ..."),", or even ",(0,a.kt)("inlineCode",{parentName:"p"},"REVOKE ALL PRIVILEGES ...")," query to revoke this privilege."),(0,a.kt)("h3",{id:"partial-revokes"},"Partial Revokes"),(0,a.kt)("p",null,"You can revoke a part of a privilege. For example, if a user has the ",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT *.*")," privilege you can revoke from it a privilege to read data from some table or a database."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Grant the ",(0,a.kt)("inlineCode",{parentName:"p"},"john")," user account with a privilege to select from all the databases, excepting the ",(0,a.kt)("inlineCode",{parentName:"p"},"accounts")," one:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"GRANT SELECT ON *.* TO john;\nREVOKE SELECT ON accounts.* FROM john;\n")),(0,a.kt)("p",null,"Grant the ",(0,a.kt)("inlineCode",{parentName:"p"},"mira")," user account with a privilege to select from all the columns of the ",(0,a.kt)("inlineCode",{parentName:"p"},"accounts.staff")," table, excepting the ",(0,a.kt)("inlineCode",{parentName:"p"},"wage")," one."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"GRANT SELECT ON accounts.staff TO mira;\nREVOKE SELECT(wage) ON accounts.staff FROM mira;\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/settings/settings/"},"Original article")))}u.isMDXComponent=!0}}]);