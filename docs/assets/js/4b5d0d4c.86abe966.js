"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[77758],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",N={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,c=u["".concat(s,".").concat(d)]||u[d]||N[d]||l;return n?r.createElement(c,i(i({ref:t},m),{},{components:n})):r.createElement(c,i({ref:t},m))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},68748:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>N,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const l={slug:"/ru/sql-reference/statements/create/user",sidebar_position:39,sidebar_label:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c"},i="CREATE USER",o={unversionedId:"ru/sql-reference/statements/create/user",id:"ru/sql-reference/statements/create/user",title:"CREATE USER",description:"create-user-statement}",source:"@site/docs/ru/sql-reference/statements/create/user.md",sourceDirName:"ru/sql-reference/statements/create",slug:"/ru/sql-reference/statements/create/user",permalink:"/docs/ru/sql-reference/statements/create/user",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/statements/create/user.md",tags:[],version:"current",sidebarPosition:39,frontMatter:{slug:"/ru/sql-reference/statements/create/user",sidebar_position:39,sidebar_label:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c"},sidebar:"russia",previous:{title:"FUNCTION",permalink:"/docs/ru/sql-reference/statements/create/function"},next:{title:"\u0420\u043e\u043b\u044c",permalink:"/docs/ru/sql-reference/statements/create/role"}},s={},p=[{value:"\u0418\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f",id:"\u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f",level:2},{value:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0439 \u0445\u043e\u0441\u0442",id:"\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0439-\u0445\u043e\u0441\u0442",level:2},{value:"\u0421\u0435\u043a\u0446\u0438\u044f GRANTEES",id:"grantees",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b",id:"create-user-examples",level:2}],m={toc:p},u="wrapper";function N(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"create-user-statement"},"CREATE USER"),(0,a.kt)("p",null,"\u0421\u043e\u0437\u0434\u0430\u0435\u0442 ",(0,a.kt)("a",{parentName:"p",href:"/docs/ru/operations/access-rights#user-account-management"},"\u0430\u043a\u043a\u0430\u0443\u043d\u0442\u044b \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439"),"."),(0,a.kt)("p",null,"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE USER [IF NOT EXISTS | OR REPLACE] name1 [ON CLUSTER cluster_name1]\n        [, name2 [ON CLUSTER cluster_name2] ...]\n    [NOT IDENTIFIED | IDENTIFIED {[WITH {no_password | plaintext_password | sha256_password | sha256_hash | double_sha1_password | double_sha1_hash}] BY {'password' | 'hash'}} | {WITH ldap SERVER 'server_name'} | {WITH kerberos [REALM 'realm']}]\n    [HOST {LOCAL | NAME 'name' | REGEXP 'name_regexp' | IP 'address' | LIKE 'pattern'} [,...] | ANY | NONE]\n    [DEFAULT ROLE role [,...]]\n    [DEFAULT DATABASE database | NONE]\n    [GRANTEES {user | role | ANY | NONE} [,...] [EXCEPT {user | role} [,...]]]\n    [SETTINGS variable [= value] [MIN [=] min_value] [MAX [=] max_value] [READONLY | WRITABLE] | PROFILE 'profile_name'] [,...]\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ON CLUSTER")," \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u0432 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0435, \u0441\u043c. ",(0,a.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/distributed-ddl"},"\u0420\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0435 DDL"),"."),(0,a.kt)("h2",{id:"\u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f"},"\u0418\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f"),(0,a.kt)("p",null,"\u0421\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u043f\u043e\u0441\u043e\u0431\u043e\u0432 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"IDENTIFIED WITH no_password")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"IDENTIFIED WITH plaintext_password BY 'qwerty'")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"IDENTIFIED WITH sha256_password BY 'qwerty'")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"IDENTIFIED BY 'password'")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"IDENTIFIED WITH sha256_hash BY 'hash'")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"IDENTIFIED WITH sha256_hash BY 'hash' SALT 'salt'")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"IDENTIFIED WITH double_sha1_password BY 'qwerty'")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"IDENTIFIED WITH double_sha1_hash BY 'hash'")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"IDENTIFIED WITH ldap SERVER 'server_name'")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"IDENTIFIED WITH kerberos")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"IDENTIFIED WITH kerberos REALM 'realm'"))),(0,a.kt)("p",null,"\u0414\u043b\u044f \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438 \u0441 sha256_hash \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f ",(0,a.kt)("inlineCode",{parentName:"p"},"SALT")," - \u0445\u044d\u0448 \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d \u043e\u0442 \u043a\u043e\u043d\u043a\u0430\u0442\u0435\u043d\u0430\u0446\u0438\u0438 'password' \u0438 'salt'."),(0,a.kt)("h2",{id:"\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0439-\u0445\u043e\u0441\u0442"},"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0439 \u0445\u043e\u0441\u0442"),(0,a.kt)("p",null,"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0439 \u0445\u043e\u0441\u0442 \u2014 \u044d\u0442\u043e \u0445\u043e\u0441\u0442, \u0441 \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u043c\u043e\u0436\u043d\u043e \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c ClickHouse. \u0425\u043e\u0441\u0442 \u0437\u0430\u0434\u0430\u0435\u0442\u0441\u044f \u0432 \u0441\u0435\u043a\u0446\u0438\u0438 ",(0,a.kt)("inlineCode",{parentName:"p"},"HOST")," \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c\u0438 \u0441\u043f\u043e\u0441\u043e\u0431\u0430\u043c\u0438:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"HOST IP 'ip_address_or_subnetwork'")," \u2014 \u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043c\u043e\u0436\u0435\u0442 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c\u0441\u044f \u043a \u0441\u0435\u0440\u0432\u0435\u0440\u0443 ClickHouse \u0442\u043e\u043b\u044c\u043a\u043e \u0441 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0433\u043e IP-\u0430\u0434\u0440\u0435\u0441\u0430 \u0438\u043b\u0438 ",(0,a.kt)("a",{parentName:"li",href:"https://ru.wikipedia.org/wiki/%D0%9F%D0%BE%D0%B4%D1%81%D0%B5%D1%82%D1%8C"},"\u043f\u043e\u0434\u0441\u0435\u0442\u0438"),". \u041f\u0440\u0438\u043c\u0435\u0440\u044b: ",(0,a.kt)("inlineCode",{parentName:"li"},"HOST IP '192.168.0.0/16'"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"HOST IP '2001:DB8::/32'"),". \u041f\u0440\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 \u0432 \u044d\u043a\u0441\u043f\u043b\u0443\u0430\u0442\u0430\u0446\u0438\u0438 \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0439\u0442\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b ",(0,a.kt)("inlineCode",{parentName:"li"},"HOST IP")," (IP-\u0430\u0434\u0440\u0435\u0441\u0430 \u0438 \u043c\u0430\u0441\u043a\u0438 \u043f\u043e\u0434\u0441\u0435\u0442\u0438), \u0442\u0430\u043a \u043a\u0430\u043a \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 ",(0,a.kt)("inlineCode",{parentName:"li"},"host")," \u0438 ",(0,a.kt)("inlineCode",{parentName:"li"},"host_regexp")," \u043c\u043e\u0436\u0435\u0442 \u043f\u0440\u0438\u0432\u0435\u0441\u0442\u0438 \u043a \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0439 \u0437\u0430\u0434\u0435\u0440\u0436\u043a\u0435."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"HOST ANY")," \u2014 \u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043c\u043e\u0436\u0435\u0442 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c\u0441\u044f \u0441 \u043b\u044e\u0431\u043e\u0433\u043e \u0445\u043e\u0441\u0442\u0430. \u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"HOST LOCAL")," \u2014 \u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043c\u043e\u0436\u0435\u0442 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"HOST NAME 'fqdn'")," \u2014 \u0425\u043e\u0441\u0442 \u0437\u0430\u0434\u0430\u0435\u0442\u0441\u044f \u0447\u0435\u0440\u0435\u0437 FQDN. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, ",(0,a.kt)("inlineCode",{parentName:"li"},"HOST NAME 'mysite.com'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"HOST REGEXP 'regexp'")," \u2014 \u041f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0440\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u044b\u0435 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u044f ",(0,a.kt)("a",{parentName:"li",href:"http://www.pcre.org/"},"pcre"),", \u0447\u0442\u043e\u0431\u044b \u0437\u0430\u0434\u0430\u0442\u044c \u0445\u043e\u0441\u0442\u044b. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, ",(0,a.kt)("inlineCode",{parentName:"li"},"HOST REGEXP '.*\\.mysite\\.com'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"HOST LIKE 'template'")," \u2014 \u041f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 ",(0,a.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/functions/string-search-functions#function-like"},"LIKE")," \u0434\u043b\u044f \u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u0438 \u0445\u043e\u0441\u0442\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, ",(0,a.kt)("inlineCode",{parentName:"li"},"HOST LIKE '%'")," \u044d\u043a\u0432\u0438\u0432\u0430\u043b\u0435\u043d\u0442\u0435\u043d ",(0,a.kt)("inlineCode",{parentName:"li"},"HOST ANY"),"; ",(0,a.kt)("inlineCode",{parentName:"li"},"HOST LIKE '%.mysite.com'")," \u0440\u0430\u0437\u0440\u0435\u0448\u0430\u0435\u0442 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u0441\u043e \u0432\u0441\u0435\u0445 \u0445\u043e\u0441\u0442\u043e\u0432 \u0432 \u0434\u043e\u043c\u0435\u043d\u0435 ",(0,a.kt)("inlineCode",{parentName:"li"},"mysite.com"),".")),(0,a.kt)("p",null,"\u0422\u0430\u043a\u0436\u0435, \u0447\u0442\u043e\u0431\u044b \u0437\u0430\u0434\u0430\u0442\u044c \u0445\u043e\u0441\u0442, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c ",(0,a.kt)("inlineCode",{parentName:"p"},"@")," \u0432\u043c\u0435\u0441\u0442\u0435 \u0441 \u0438\u043c\u0435\u043d\u0435\u043c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f. \u041f\u0440\u0438\u043c\u0435\u0440\u044b:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"CREATE USER mira@'127.0.0.1'")," \u2014 \u042d\u043a\u0432\u0438\u0432\u0430\u043b\u0435\u043d\u0442\u043d\u043e ",(0,a.kt)("inlineCode",{parentName:"li"},"HOST IP"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"CREATE USER mira@'localhost'")," \u2014 \u042d\u043a\u0432\u0438\u0432\u0430\u043b\u0435\u043d\u0442\u043d\u043e ",(0,a.kt)("inlineCode",{parentName:"li"},"HOST LOCAL"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"CREATE USER mira@'192.168.%.%'")," \u2014 \u042d\u043a\u0432\u0438\u0432\u0430\u043b\u0435\u043d\u0442\u043d\u043e ",(0,a.kt)("inlineCode",{parentName:"li"},"HOST LIKE"),".")),(0,a.kt)("admonition",{title:'"\u0412\u043d\u0438\u043c\u0430\u043d\u0438\u0435"',type:"info"},(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"ClickHouse \u0442\u0440\u0430\u043a\u0442\u0443\u0435\u0442 \u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044e `user_name@'address'` \u043a\u0430\u043a \u0438\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0446\u0435\u043b\u0438\u043a\u043e\u043c. \u0422\u043e \u0435\u0441\u0442\u044c \u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u0441 \u043e\u0434\u0438\u043d\u0430\u043a\u043e\u0432\u044b\u043c\u0438 `user_name`, \u043d\u043e \u0440\u0430\u0437\u043d\u044b\u043c\u0438 \u0447\u0430\u0441\u0442\u044f\u043c\u0438 \u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438 \u043f\u043e\u0441\u043b\u0435 `@`, \u043d\u043e \u043b\u0443\u0447\u0448\u0435 \u0442\u0430\u043a \u043d\u0435 \u0434\u0435\u043b\u0430\u0442\u044c.\n"))),(0,a.kt)("h2",{id:"grantees"},"\u0421\u0435\u043a\u0446\u0438\u044f GRANTEES"),(0,a.kt)("p",null,"\u0423\u043a\u0430\u0437\u044b\u0432\u0430\u044e\u0442\u0441\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438 \u0438\u043b\u0438 \u0440\u043e\u043b\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u043c \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u043e \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c ",(0,a.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/statements/grant#grant-privileges"},"\u043f\u0440\u0438\u0432\u0438\u043b\u0435\u0433\u0438\u0438")," \u043e\u0442 \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0435\u043c\u043e\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u043f\u0440\u0438 \u0443\u0441\u043b\u043e\u0432\u0438\u0438, \u0447\u0442\u043e \u044d\u0442\u043e\u043c\u0443 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044e \u0442\u0430\u043a\u0436\u0435 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d \u0432\u0435\u0441\u044c \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0439 \u0434\u043e\u0441\u0442\u0443\u043f \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c ",(0,a.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/statements/grant#grant-privigele-syntax"},"GRANT OPTION"),". \u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0441\u0435\u043a\u0446\u0438\u0438 ",(0,a.kt)("inlineCode",{parentName:"p"},"GRANTEES"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"user")," \u2014 \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c, \u043a\u043e\u0442\u043e\u0440\u043e\u043c\u0443 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u043e \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c \u043f\u0440\u0438\u0432\u0438\u043b\u0435\u0433\u0438\u0438 \u043e\u0442 \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0435\u043c\u043e\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"role")," \u2014 \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0440\u043e\u043b\u044c, \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u043e \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c \u043f\u0440\u0438\u0432\u0438\u043b\u0435\u0433\u0438\u0438 \u043e\u0442 \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0435\u043c\u043e\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ANY")," \u2014 \u043b\u044e\u0431\u043e\u043c\u0443 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044e \u0438\u043b\u0438 \u043b\u044e\u0431\u043e\u0439 \u0440\u043e\u043b\u0438 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u043e \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c \u043f\u0440\u0438\u0432\u0438\u043b\u0435\u0433\u0438\u0438 \u043e\u0442 \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0435\u043c\u043e\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f. \u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"NONE")," \u2014 \u043d\u0438\u043a\u043e\u043c\u0443 \u043d\u0435 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u043e \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c \u043f\u0440\u0438\u0432\u0438\u043b\u0435\u0433\u0438\u0438 \u043e\u0442 \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0435\u043c\u043e\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f.")),(0,a.kt)("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0441\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u043b\u044e\u0431\u043e\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0438\u043b\u0438 \u0440\u043e\u043b\u044c, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435 ",(0,a.kt)("inlineCode",{parentName:"p"},"EXCEPT"),". \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, ",(0,a.kt)("inlineCode",{parentName:"p"},"CREATE USER user1 GRANTEES ANY EXCEPT user2"),". \u042d\u0442\u043e \u043e\u0437\u043d\u0430\u0447\u0430\u0435\u0442, \u0447\u0442\u043e \u0435\u0441\u043b\u0438 ",(0,a.kt)("inlineCode",{parentName:"p"},"user1")," \u0438\u043c\u0435\u0435\u0442 \u043f\u0440\u0438\u0432\u0438\u043b\u0435\u0433\u0438\u0438, \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0435 \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c ",(0,a.kt)("inlineCode",{parentName:"p"},"GRANT OPTION"),", \u043e\u043d \u0441\u043c\u043e\u0436\u0435\u0442 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0438\u0445 \u043b\u044e\u0431\u043e\u043c\u0443, \u043a\u0440\u043e\u043c\u0435 ",(0,a.kt)("inlineCode",{parentName:"p"},"user2"),"."),(0,a.kt)("h2",{id:"create-user-examples"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b"),(0,a.kt)("p",null,"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0430\u043a\u043a\u0430\u0443\u043d\u0442 ",(0,a.kt)("inlineCode",{parentName:"p"},"mira"),", \u0437\u0430\u0449\u0438\u0449\u0435\u043d\u043d\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u0435\u043c ",(0,a.kt)("inlineCode",{parentName:"p"},"qwerty"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE USER mira HOST IP '127.0.0.1' IDENTIFIED WITH sha256_password BY 'qwerty';\n")),(0,a.kt)("p",null,"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c ",(0,a.kt)("inlineCode",{parentName:"p"},"mira")," \u0434\u043e\u043b\u0436\u0435\u043d \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u043a\u043b\u0438\u0435\u043d\u0442\u0441\u043a\u043e\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043d\u0430 \u0445\u043e\u0441\u0442\u0435, \u0433\u0434\u0435 \u0437\u0430\u043f\u0443\u0449\u0435\u043d ClickHouse."),(0,a.kt)("p",null,"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0430\u043a\u043a\u0430\u0443\u043d\u0442 ",(0,a.kt)("inlineCode",{parentName:"p"},"john"),", \u043d\u0430\u0437\u043d\u0430\u0447\u0438\u0442\u044c \u043d\u0430 \u043d\u0435\u0433\u043e \u0440\u043e\u043b\u0438, \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u0440\u043e\u043b\u0438 \u0440\u043e\u043b\u044f\u043c\u0438 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE USER john DEFAULT ROLE role1, role2;\n")),(0,a.kt)("p",null,"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0430\u043a\u043a\u0430\u0443\u043d\u0442 ",(0,a.kt)("inlineCode",{parentName:"p"},"john")," \u0438 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0440\u043e\u043b\u044f\u043c\u0438 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0432\u0441\u0435 \u0435\u0433\u043e \u0431\u0443\u0434\u0443\u0449\u0438\u0435 \u0440\u043e\u043b\u0438:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE USER john DEFAULT ROLE ALL;\n")),(0,a.kt)("p",null,"\u041a\u043e\u0433\u0434\u0430 \u0440\u043e\u043b\u044c \u0431\u0443\u0434\u0435\u0442 \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0430 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0443 ",(0,a.kt)("inlineCode",{parentName:"p"},"john"),", \u043e\u043d\u0430 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0441\u0442\u0430\u043d\u0435\u0442 \u0440\u043e\u043b\u044c\u044e \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e."),(0,a.kt)("p",null,"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0430\u043a\u043a\u0430\u0443\u043d\u0442 ",(0,a.kt)("inlineCode",{parentName:"p"},"john")," \u0438 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0440\u043e\u043b\u044f\u043c\u0438 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0432\u0441\u0435 \u0435\u0433\u043e \u0431\u0443\u0434\u0443\u0449\u0438\u0435 \u0440\u043e\u043b\u0438, \u043a\u0440\u043e\u043c\u0435 ",(0,a.kt)("inlineCode",{parentName:"p"},"role1")," \u0438 ",(0,a.kt)("inlineCode",{parentName:"p"},"role2"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE USER john DEFAULT ROLE ALL EXCEPT role1, role2;\n")),(0,a.kt)("p",null,"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0441 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u043e\u043c ",(0,a.kt)("inlineCode",{parentName:"p"},"john")," \u0438 \u0440\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u044c \u0435\u043c\u0443 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0441\u0432\u043e\u0438 \u043f\u0440\u0438\u0432\u0438\u043b\u0435\u0433\u0438\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044e \u0441 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u043e\u043c ",(0,a.kt)("inlineCode",{parentName:"p"},"jack"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE USER john GRANTEES jack;\n")))}N.isMDXComponent=!0}}]);