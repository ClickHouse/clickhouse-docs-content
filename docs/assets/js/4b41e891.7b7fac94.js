"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[64097],{3905:(e,r,t)=>{t.d(r,{Zo:()=>i,kt:()=>d});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=n.createContext({}),p=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},i=function(e){var r=p(e.components);return n.createElement(u.Provider,{value:r},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},E=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),c=p(t),E=a,d=c["".concat(u,".").concat(E)]||c[E]||m[E]||l;return t?n.createElement(d,s(s({ref:r},i),{},{components:t})):n.createElement(d,s({ref:r},i))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=t.length,s=new Array(l);s[0]=E;var o={};for(var u in r)hasOwnProperty.call(r,u)&&(o[u]=r[u]);o.originalType=e,o[c]="string"==typeof e?e:a,s[1]=o;for(var p=2;p<l;p++)s[p]=t[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}E.displayName="MDXCreateElement"},23135:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=t(87462),a=(t(67294),t(3905));const l={slug:"/ru/sql-reference/statements/alter/user",sidebar_position:45,sidebar_label:"USER"},s="ALTER USER",o={unversionedId:"ru/sql-reference/statements/alter/user",id:"ru/sql-reference/statements/alter/user",title:"ALTER USER",description:"alter-user-statement}",source:"@site/docs/ru/sql-reference/statements/alter/user.md",sourceDirName:"ru/sql-reference/statements/alter",slug:"/ru/sql-reference/statements/alter/user",permalink:"/docs/ru/sql-reference/statements/alter/user",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/statements/alter/user.md",tags:[],version:"current",sidebarPosition:45,frontMatter:{slug:"/ru/sql-reference/statements/alter/user",sidebar_position:45,sidebar_label:"USER"},sidebar:"russia",previous:{title:"TTL",permalink:"/docs/ru/sql-reference/statements/alter/ttl"},next:{title:"QUOTA",permalink:"/docs/ru/sql-reference/statements/alter/quota"}},u={},p=[{value:"\u0421\u0435\u043a\u0446\u0438\u044f GRANTEES",id:"grantees",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b",id:"alter-user-examples",level:2}],i={toc:p},c="wrapper";function m(e){let{components:r,...t}=e;return(0,a.kt)(c,(0,n.Z)({},i,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"alter-user-statement"},"ALTER USER"),(0,a.kt)("p",null,"\u0418\u0437\u043c\u0435\u043d\u044f\u0435\u0442 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u044b \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 ClickHouse."),(0,a.kt)("p",null,"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER USER [IF EXISTS] name1 [ON CLUSTER cluster_name1] [RENAME TO new_name1]\n        [, name2 [ON CLUSTER cluster_name2] [RENAME TO new_name2] ...]\n    [NOT IDENTIFIED | IDENTIFIED {[WITH {no_password | plaintext_password | sha256_password | sha256_hash | double_sha1_password | double_sha1_hash}] BY {'password' | 'hash'}} | {WITH ldap SERVER 'server_name'} | {WITH kerberos [REALM 'realm']}]\n    [[ADD | DROP] HOST {LOCAL | NAME 'name' | REGEXP 'name_regexp' | IP 'address' | LIKE 'pattern'} [,...] | ANY | NONE]\n    [DEFAULT ROLE role [,...] | ALL | ALL EXCEPT role [,...] ]\n    [GRANTEES {user | role | ANY | NONE} [,...] [EXCEPT {user | role} [,...]]]\n    [SETTINGS variable [= value] [MIN [=] min_value] [MAX [=] max_value] [READONLY | WRITABLE] | PROFILE 'profile_name'] [,...]\n")),(0,a.kt)("p",null,"\u0414\u043b\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f ",(0,a.kt)("inlineCode",{parentName:"p"},"ALTER USER")," \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u0430 \u043f\u0440\u0438\u0432\u0438\u043b\u0435\u0433\u0438\u044f ",(0,a.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/statements/grant#grant-access-management"},"ALTER USER"),"."),(0,a.kt)("h2",{id:"grantees"},"\u0421\u0435\u043a\u0446\u0438\u044f GRANTEES"),(0,a.kt)("p",null,"\u041e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u0438\u043b\u0438 \u0440\u043e\u043b\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u043c \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u043e \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c ",(0,a.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/statements/grant#grant-privileges"},"\u043f\u0440\u0438\u0432\u0438\u043b\u0435\u0433\u0438\u0438")," \u043e\u0442 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u043f\u0440\u0438 \u0443\u0441\u043b\u043e\u0432\u0438\u0438, \u0447\u0442\u043e \u044d\u0442\u043e\u043c\u0443 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044e \u0442\u0430\u043a\u0436\u0435 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d \u0432\u0435\u0441\u044c \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0439 \u0434\u043e\u0441\u0442\u0443\u043f \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c ",(0,a.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/statements/grant#grant-privigele-syntax"},"GRANT OPTION"),". \u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0441\u0435\u043a\u0446\u0438\u0438 ",(0,a.kt)("inlineCode",{parentName:"p"},"GRANTEES"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"user")," \u2014 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c, \u043a\u043e\u0442\u043e\u0440\u043e\u043c\u0443 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u043e \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c \u043f\u0440\u0438\u0432\u0438\u043b\u0435\u0433\u0438\u0438 \u043e\u0442 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"role")," \u2014 \u0440\u043e\u043b\u044c, \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u043e \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c \u043f\u0440\u0438\u0432\u0438\u043b\u0435\u0433\u0438\u0438 \u043e\u0442 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ANY")," \u2014 \u043b\u044e\u0431\u043e\u043c\u0443 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044e \u0438\u043b\u0438 \u043b\u044e\u0431\u043e\u0439 \u0440\u043e\u043b\u0438 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u043e \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c \u043f\u0440\u0438\u0432\u0438\u043b\u0435\u0433\u0438\u0438 \u043e\u0442 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f. \u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"NONE")," \u2014 \u043d\u0438\u043a\u043e\u043c\u0443 \u043d\u0435 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u043e \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c \u043f\u0440\u0438\u0432\u0438\u043b\u0435\u0433\u0438\u0438 \u043e\u0442 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f.")),(0,a.kt)("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0441\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u043b\u044e\u0431\u043e\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0438\u043b\u0438 \u0440\u043e\u043b\u044c, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435 ",(0,a.kt)("inlineCode",{parentName:"p"},"EXCEPT"),". \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, ",(0,a.kt)("inlineCode",{parentName:"p"},"ALTER USER user1 GRANTEES ANY EXCEPT user2"),". \u042d\u0442\u043e \u043e\u0437\u043d\u0430\u0447\u0430\u0435\u0442, \u0447\u0442\u043e \u0435\u0441\u043b\u0438 ",(0,a.kt)("inlineCode",{parentName:"p"},"user1")," \u0438\u043c\u0435\u0435\u0442 \u043f\u0440\u0438\u0432\u0438\u043b\u0435\u0433\u0438\u0438, \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0435 \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c ",(0,a.kt)("inlineCode",{parentName:"p"},"GRANT OPTION"),", \u043e\u043d \u0441\u043c\u043e\u0436\u0435\u0442 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0438\u0445 \u043b\u044e\u0431\u043e\u043c\u0443, \u043a\u0440\u043e\u043c\u0435 ",(0,a.kt)("inlineCode",{parentName:"p"},"user2"),"."),(0,a.kt)("h2",{id:"alter-user-examples"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b"),(0,a.kt)("p",null,"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0440\u043e\u043b\u044f\u043c\u0438 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0440\u043e\u043b\u0438, \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044b\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044e:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER USER user DEFAULT ROLE role1, role2;\n")),(0,a.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0440\u043e\u043b\u0438 \u043d\u0435 \u0431\u044b\u043b\u0438 \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u044b \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044e, ClickHouse \u0432\u044b\u0431\u0440\u0430\u0441\u044b\u0432\u0430\u0435\u0442 \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435."),(0,a.kt)("p",null,"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0440\u043e\u043b\u044f\u043c\u0438 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0432\u0441\u0435 \u0440\u043e\u043b\u0438, \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044b\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044e:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER USER user DEFAULT ROLE ALL;\n")),(0,a.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0440\u043e\u043b\u044c \u0431\u0443\u0434\u0435\u0442 \u0432\u043f\u043e\u0441\u043b\u0435\u0434\u0441\u0442\u0432\u0438\u0438 \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0430 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044e, \u043e\u043d\u0430 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0441\u0442\u0430\u043d\u0435\u0442 \u0440\u043e\u043b\u044c\u044e \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e."),(0,a.kt)("p",null,"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0440\u043e\u043b\u044f\u043c\u0438 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0432\u0441\u0435 \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044b\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044e \u0440\u043e\u043b\u0438 \u043a\u0440\u043e\u043c\u0435 ",(0,a.kt)("inlineCode",{parentName:"p"},"role1")," \u0438 ",(0,a.kt)("inlineCode",{parentName:"p"},"role2"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER USER user DEFAULT ROLE ALL EXCEPT role1, role2;\n")),(0,a.kt)("p",null,"\u0420\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044e \u0441 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u043e\u043c ",(0,a.kt)("inlineCode",{parentName:"p"},"john")," \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0441\u0432\u043e\u0438 \u043f\u0440\u0438\u0432\u0438\u043b\u0435\u0433\u0438\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044e \u0441 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u043e\u043c ",(0,a.kt)("inlineCode",{parentName:"p"},"jack"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER USER john GRANTEES jack;\n")))}m.isMDXComponent=!0}}]);