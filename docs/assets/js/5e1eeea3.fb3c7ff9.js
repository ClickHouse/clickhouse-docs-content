"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[48286],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(r),f=a,d=m["".concat(i,".").concat(f)]||m[f]||u[f]||s;return r?n.createElement(d,l(l({ref:t},p),{},{components:r})):n.createElement(d,l({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,l=new Array(s);l[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<s;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},78051:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return u}});var n=r(87462),a=r(63366),s=(r(67294),r(3905)),l=["components"],o={sidebar_position:40,sidebar_label:"ROLE"},i="CREATE ROLE",c={unversionedId:"en/sql-reference/statements/create/role",id:"en/sql-reference/statements/create/role",title:"CREATE ROLE",description:"create-role-statement}",source:"@site/docs/en/sql-reference/statements/create/role.md",sourceDirName:"en/sql-reference/statements/create",slug:"/en/sql-reference/statements/create/role",permalink:"/docs/en/sql-reference/statements/create/role",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/statements/create/role.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{sidebar_position:40,sidebar_label:"ROLE"},sidebar:"english",previous:{title:"USER",permalink:"/docs/en/sql-reference/statements/create/user"},next:{title:"ROW POLICY",permalink:"/docs/en/sql-reference/statements/create/row-policy"}},p={},u=[{value:"Managing Roles",id:"managing-roles",level:2},{value:"Examples",id:"create-role-examples",level:2}],m={toc:u};function f(e){var t=e.components,r=(0,a.Z)(e,l);return(0,s.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"create-role-statement"},"CREATE ROLE"),(0,s.kt)("p",null,"Creates new ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/operations/access-rights#role-management"},"roles"),". Role is a set of ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/grant#grant-privileges"},"privileges"),". A ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/create/user"},"user")," assigned a role gets all the privileges of this role."),(0,s.kt)("p",null,"Syntax:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE ROLE [IF NOT EXISTS | OR REPLACE] name1 [, name2 ...]\n    [SETTINGS variable [= value] [MIN [=] min_value] [MAX [=] max_value] [READONLY|WRITABLE] | PROFILE 'profile_name'] [,...]\n")),(0,s.kt)("h2",{id:"managing-roles"},"Managing Roles"),(0,s.kt)("p",null,"A user can be assigned multiple roles. Users can apply their assigned roles in arbitrary combinations by the ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/set-role"},"SET ROLE")," statement. The final scope of privileges is a combined set of all the privileges of all the applied roles. If a user has privileges granted directly to it\u2019s user account, they are also combined with the privileges granted by roles."),(0,s.kt)("p",null,"User can have default roles which apply at user login. To set default roles, use the ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/set-role#set-default-role-statement"},"SET DEFAULT ROLE")," statement or the ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/alter/user#alter-user-statement"},"ALTER USER")," statement."),(0,s.kt)("p",null,"To revoke a role, use the ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/revoke"},"REVOKE")," statement."),(0,s.kt)("p",null,"To delete role, use the ",(0,s.kt)("a",{parentName:"p",href:"../../../sql-reference/statements/drop#drop-role-statement"},"DROP ROLE")," statement. The deleted role is being automatically revoked from all the users and roles to which it was assigned."),(0,s.kt)("h2",{id:"create-role-examples"},"Examples"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE ROLE accountant;\nGRANT SELECT ON db.* TO accountant;\n")),(0,s.kt)("p",null,"This sequence of queries creates the role ",(0,s.kt)("inlineCode",{parentName:"p"},"accountant")," that has the privilege of reading data from the ",(0,s.kt)("inlineCode",{parentName:"p"},"db")," database."),(0,s.kt)("p",null,"Assigning the role to the user ",(0,s.kt)("inlineCode",{parentName:"p"},"mira"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"GRANT accountant TO mira;\n")),(0,s.kt)("p",null,"After the role is assigned, the user can apply it and execute the allowed queries. For example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SET ROLE accountant;\nSELECT * FROM db.*;\n")))}f.isMDXComponent=!0}}]);