"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[94781],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,E=m["".concat(i,".").concat(d)]||m[d]||p[d]||s;return n?r.createElement(E,l(l({ref:t},c),{},{components:n})):r.createElement(E,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,l=new Array(s);l[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<s;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},32238:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var r=n(87462),a=n(63366),s=(n(67294),n(3905)),l=["components"],o={slug:"/en/sql-reference/statements/alter/user",sidebar_position:45,sidebar_label:"USER",title:"ALTER USER"},i=void 0,u={unversionedId:"en/sql-reference/statements/alter/user",id:"en/sql-reference/statements/alter/user",title:"ALTER USER",description:"Changes ClickHouse user accounts.",source:"@site/docs/en/sql-reference/statements/alter/user.md",sourceDirName:"en/sql-reference/statements/alter",slug:"/en/sql-reference/statements/alter/user",permalink:"/docs/en/sql-reference/statements/alter/user",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/statements/alter/user.md",tags:[],version:"current",sidebarPosition:45,frontMatter:{slug:"/en/sql-reference/statements/alter/user",sidebar_position:45,sidebar_label:"USER",title:"ALTER USER"},sidebar:"english",previous:{title:"TTL",permalink:"/docs/en/sql-reference/statements/alter/ttl"},next:{title:"QUOTA",permalink:"/docs/en/sql-reference/statements/alter/quota"}},c={},p=[{value:"GRANTEES Clause",id:"grantees-clause",level:2},{value:"Examples",id:"examples",level:2}],m={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,s.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Changes ClickHouse user accounts."),(0,s.kt)("p",null,"Syntax:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER USER [IF EXISTS] name1 [ON CLUSTER cluster_name1] [RENAME TO new_name1]\n        [, name2 [ON CLUSTER cluster_name2] [RENAME TO new_name2] ...]\n    [NOT IDENTIFIED | IDENTIFIED {[WITH {no_password | plaintext_password | sha256_password | sha256_hash | double_sha1_password | double_sha1_hash}] BY {'password' | 'hash'}} | {WITH ldap SERVER 'server_name'} | {WITH kerberos [REALM 'realm']} | {WITH ssl_certificate CN 'common_name'}]\n    [[ADD | DROP] HOST {LOCAL | NAME 'name' | REGEXP 'name_regexp' | IP 'address' | LIKE 'pattern'} [,...] | ANY | NONE]\n    [DEFAULT ROLE role [,...] | ALL | ALL EXCEPT role [,...] ]\n    [GRANTEES {user | role | ANY | NONE} [,...] [EXCEPT {user | role} [,...]]]\n    [SETTINGS variable [= value] [MIN [=] min_value] [MAX [=] max_value] [READONLY | WRITABLE] | PROFILE 'profile_name'] [,...]\n")),(0,s.kt)("p",null,"To use ",(0,s.kt)("inlineCode",{parentName:"p"},"ALTER USER")," you must have the ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/grant#grant-access-management"},"ALTER USER")," privilege."),(0,s.kt)("h2",{id:"grantees-clause"},"GRANTEES Clause"),(0,s.kt)("p",null,"Specifies users or roles which are allowed to receive ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/grant#grant-privileges"},"privileges")," from this user on the condition this user has also all required access granted with ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/grant#grant-privigele-syntax"},"GRANT OPTION"),". Options of the ",(0,s.kt)("inlineCode",{parentName:"p"},"GRANTEES")," clause:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"user")," \u2014 Specifies a user this user can grant privileges to."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"role")," \u2014 Specifies a role this user can grant privileges to."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"ANY")," \u2014 This user can grant privileges to anyone. It's the default setting."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"NONE")," \u2014 This user can grant privileges to none.")),(0,s.kt)("p",null,"You can exclude any user or role by using the ",(0,s.kt)("inlineCode",{parentName:"p"},"EXCEPT")," expression. For example, ",(0,s.kt)("inlineCode",{parentName:"p"},"ALTER USER user1 GRANTEES ANY EXCEPT user2"),". It means if ",(0,s.kt)("inlineCode",{parentName:"p"},"user1")," has some privileges granted with ",(0,s.kt)("inlineCode",{parentName:"p"},"GRANT OPTION")," it will be able to grant those privileges to anyone except ",(0,s.kt)("inlineCode",{parentName:"p"},"user2"),"."),(0,s.kt)("h2",{id:"examples"},"Examples"),(0,s.kt)("p",null,"Set assigned roles as default:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER USER user DEFAULT ROLE role1, role2\n")),(0,s.kt)("p",null,"If roles aren\u2019t previously assigned to a user, ClickHouse throws an exception."),(0,s.kt)("p",null,"Set all the assigned roles to default:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER USER user DEFAULT ROLE ALL\n")),(0,s.kt)("p",null,"If a role is assigned to a user in the future, it will become default automatically."),(0,s.kt)("p",null,"Set all the assigned roles to default, excepting ",(0,s.kt)("inlineCode",{parentName:"p"},"role1")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"role2"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER USER user DEFAULT ROLE ALL EXCEPT role1, role2\n")),(0,s.kt)("p",null,"Allows the user with ",(0,s.kt)("inlineCode",{parentName:"p"},"john")," account to grant his privileges to the user with ",(0,s.kt)("inlineCode",{parentName:"p"},"jack")," account:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER USER john GRANTEES jack;\n")))}d.isMDXComponent=!0}}]);