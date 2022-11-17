"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[29055,30046],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,k=m["".concat(o,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(k,s(s({ref:t},c),{},{components:n})):a.createElement(k,s({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},22966:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={slug:"/en/sql-reference/statements/create/user",sidebar_position:39,sidebar_label:"USER",title:"CREATE USER"},s=void 0,l={unversionedId:"en/sql-reference/statements/create/user",id:"en/sql-reference/statements/create/user",title:"CREATE USER",description:"Creates user accounts.",source:"@site/docs/en/sql-reference/statements/create/user.md",sourceDirName:"en/sql-reference/statements/create",slug:"/en/sql-reference/statements/create/user",permalink:"/docs/en/sql-reference/statements/create/user",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/statements/create/user.md",tags:[],version:"current",sidebarPosition:39,frontMatter:{slug:"/en/sql-reference/statements/create/user",sidebar_position:39,sidebar_label:"USER",title:"CREATE USER"},sidebar:"english",previous:{title:"FUNCTION",permalink:"/docs/en/sql-reference/statements/create/function"},next:{title:"ROLE",permalink:"/docs/en/sql-reference/statements/create/role"}},o={},p=[{value:"Identification",id:"identification",level:2},{value:"User Host",id:"user-host",level:2},{value:"GRANTEES Clause",id:"grantees-clause",level:2},{value:"Examples",id:"examples",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Creates ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/operations/access-rights#user-account-management"},"user accounts"),"."),(0,r.kt)("p",null,"Syntax:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE USER [IF NOT EXISTS | OR REPLACE] name1 [ON CLUSTER cluster_name1]\n        [, name2 [ON CLUSTER cluster_name2] ...]\n    [NOT IDENTIFIED | IDENTIFIED {[WITH {no_password | plaintext_password | sha256_password | sha256_hash | double_sha1_password | double_sha1_hash}] BY {'password' | 'hash'}} | {WITH ldap SERVER 'server_name'} | {WITH kerberos [REALM 'realm']} | {WITH ssl_certificate CN 'common_name'}]\n    [HOST {LOCAL | NAME 'name' | REGEXP 'name_regexp' | IP 'address' | LIKE 'pattern'} [,...] | ANY | NONE]\n    [DEFAULT ROLE role [,...]]\n    [DEFAULT DATABASE database | NONE]\n    [GRANTEES {user | role | ANY | NONE} [,...] [EXCEPT {user | role} [,...]]]\n    [SETTINGS variable [= value] [MIN [=] min_value] [MAX [=] max_value] [READONLY | WRITABLE] | PROFILE 'profile_name'] [,...]\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ON CLUSTER")," clause allows creating users on a cluster, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/distributed-ddl"},"Distributed DDL"),"."),(0,r.kt)("h2",{id:"identification"},"Identification"),(0,r.kt)("p",null,"There are multiple ways of user identification:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IDENTIFIED WITH no_password")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IDENTIFIED WITH plaintext_password BY 'qwerty'")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IDENTIFIED WITH sha256_password BY 'qwerty'")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"IDENTIFIED BY 'password'")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IDENTIFIED WITH sha256_hash BY 'hash'")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"IDENTIFIED WITH sha256_hash BY 'hash' SALT 'salt'")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IDENTIFIED WITH double_sha1_password BY 'qwerty'")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IDENTIFIED WITH double_sha1_hash BY 'hash'")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IDENTIFIED WITH ldap SERVER 'server_name'")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IDENTIFIED WITH kerberos")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"IDENTIFIED WITH kerberos REALM 'realm'")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IDENTIFIED WITH ssl_certificate CN 'mysite.com:user'"))),(0,r.kt)("p",null,"For identification with sha256_hash using ",(0,r.kt)("inlineCode",{parentName:"p"},"SALT")," - hash must be calculated from concatination of 'password' and 'salt'."),(0,r.kt)("h2",{id:"user-host"},"User Host"),(0,r.kt)("p",null,"User host is a host from which a connection to ClickHouse server could be established. The host can be specified in the ",(0,r.kt)("inlineCode",{parentName:"p"},"HOST")," query section in the following ways:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"HOST IP 'ip_address_or_subnetwork'")," \u2014 User can connect to ClickHouse server only from the specified IP address or a ",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Subnetwork"},"subnetwork"),". Examples: ",(0,r.kt)("inlineCode",{parentName:"li"},"HOST IP '192.168.0.0/16'"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"HOST IP '2001:DB8::/32'"),". For use in production, only specify ",(0,r.kt)("inlineCode",{parentName:"li"},"HOST IP")," elements (IP addresses and their masks), since using ",(0,r.kt)("inlineCode",{parentName:"li"},"host")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"host_regexp")," might cause extra latency."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"HOST ANY")," \u2014 User can connect from any location. This is a default option."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"HOST LOCAL")," \u2014 User can connect only locally."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"HOST NAME 'fqdn'")," \u2014 User host can be specified as FQDN. For example, ",(0,r.kt)("inlineCode",{parentName:"li"},"HOST NAME 'mysite.com'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"HOST REGEXP 'regexp'")," \u2014 You can use ",(0,r.kt)("a",{parentName:"li",href:"http://www.pcre.org/"},"pcre")," regular expressions when specifying user hosts. For example, ",(0,r.kt)("inlineCode",{parentName:"li"},"HOST REGEXP '.*\\.mysite\\.com'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"HOST LIKE 'template'")," \u2014 Allows you to use the ",(0,r.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/functions/string-search-functions#function-like"},"LIKE")," operator to filter the user hosts. For example, ",(0,r.kt)("inlineCode",{parentName:"li"},"HOST LIKE '%'")," is equivalent to ",(0,r.kt)("inlineCode",{parentName:"li"},"HOST ANY"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"HOST LIKE '%.mysite.com'")," filters all the hosts in the ",(0,r.kt)("inlineCode",{parentName:"li"},"mysite.com")," domain.")),(0,r.kt)("p",null,"Another way of specifying host is to use ",(0,r.kt)("inlineCode",{parentName:"p"},"@")," syntax following the username. Examples:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CREATE USER mira@'127.0.0.1'")," \u2014 Equivalent to the ",(0,r.kt)("inlineCode",{parentName:"li"},"HOST IP")," syntax."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CREATE USER mira@'localhost'")," \u2014 Equivalent to the ",(0,r.kt)("inlineCode",{parentName:"li"},"HOST LOCAL")," syntax."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CREATE USER mira@'192.168.%.%'")," \u2014 Equivalent to the ",(0,r.kt)("inlineCode",{parentName:"li"},"HOST LIKE")," syntax.")),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"ClickHouse treats ",(0,r.kt)("inlineCode",{parentName:"p"},"user_name@'address'")," as a username as a whole. Thus, technically you can create multiple users with the same ",(0,r.kt)("inlineCode",{parentName:"p"},"user_name")," and different constructions after ",(0,r.kt)("inlineCode",{parentName:"p"},"@"),". However, we do not recommend to do so."))),(0,r.kt)("h2",{id:"grantees-clause"},"GRANTEES Clause"),(0,r.kt)("p",null,"Specifies users or roles which are allowed to receive ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/grant#grant-privileges"},"privileges")," from this user on the condition this user has also all required access granted with ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/grant#grant-privigele-syntax"},"GRANT OPTION"),". Options of the ",(0,r.kt)("inlineCode",{parentName:"p"},"GRANTEES")," clause:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"user")," \u2014 Specifies a user this user can grant privileges to."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"role")," \u2014 Specifies a role this user can grant privileges to."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ANY")," \u2014 This user can grant privileges to anyone. It's the default setting."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"NONE")," \u2014 This user can grant privileges to none.")),(0,r.kt)("p",null,"You can exclude any user or role by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"EXCEPT")," expression. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"CREATE USER user1 GRANTEES ANY EXCEPT user2"),". It means if ",(0,r.kt)("inlineCode",{parentName:"p"},"user1")," has some privileges granted with ",(0,r.kt)("inlineCode",{parentName:"p"},"GRANT OPTION")," it will be able to grant those privileges to anyone except ",(0,r.kt)("inlineCode",{parentName:"p"},"user2"),"."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Create the user account ",(0,r.kt)("inlineCode",{parentName:"p"},"mira")," protected by the password ",(0,r.kt)("inlineCode",{parentName:"p"},"qwerty"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE USER mira HOST IP '127.0.0.1' IDENTIFIED WITH sha256_password BY 'qwerty';\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"mira")," should start client app at the host where the ClickHouse server runs."),(0,r.kt)("p",null,"Create the user account ",(0,r.kt)("inlineCode",{parentName:"p"},"john"),", assign roles to it and make this roles default:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE USER john DEFAULT ROLE role1, role2;\n")),(0,r.kt)("p",null,"Create the user account ",(0,r.kt)("inlineCode",{parentName:"p"},"john")," and make all his future roles default:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE USER john DEFAULT ROLE ALL;\n")),(0,r.kt)("p",null,"When some role is assigned to ",(0,r.kt)("inlineCode",{parentName:"p"},"john")," in the future, it will become default automatically."),(0,r.kt)("p",null,"Create the user account ",(0,r.kt)("inlineCode",{parentName:"p"},"john")," and make all his future roles default excepting ",(0,r.kt)("inlineCode",{parentName:"p"},"role1")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"role2"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE USER john DEFAULT ROLE ALL EXCEPT role1, role2;\n")),(0,r.kt)("p",null,"Create the user account ",(0,r.kt)("inlineCode",{parentName:"p"},"john")," and allow him to grant his privileges to the user with ",(0,r.kt)("inlineCode",{parentName:"p"},"jack")," account:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE USER john GRANTEES jack;\n")))}u.isMDXComponent=!0},71427:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var a=n(87462),r=(n(67294),n(3905)),i=n(22966);const s={slug:"/zh/sql-reference/statements/create/user",sidebar_position:39,sidebar_label:"USER",title:"CREATE USER"},l=void 0,o={unversionedId:"zh/sql-reference/statements/create/user",id:"zh/sql-reference/statements/create/user",title:"CREATE USER",description:"",source:"@site/docs/zh/sql-reference/statements/create/user.mdx",sourceDirName:"zh/sql-reference/statements/create",slug:"/zh/sql-reference/statements/create/user",permalink:"/docs/zh/sql-reference/statements/create/user",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/statements/create/user.mdx",tags:[],version:"current",sidebarPosition:39,frontMatter:{slug:"/zh/sql-reference/statements/create/user",sidebar_position:39,sidebar_label:"USER",title:"CREATE USER"},sidebar:"chinese",previous:{title:"FUNCTION",permalink:"/docs/zh/sql-reference/statements/create/function"},next:{title:"ROLE",permalink:"/docs/zh/sql-reference/statements/create/role"}},p={},c=[],u={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.default,{mdxType:"Content"}))}m.isMDXComponent=!0}}]);