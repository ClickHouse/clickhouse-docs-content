"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[30046],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>N});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(a),d=r,N=u["".concat(o,".").concat(d)]||u[d]||c[d]||i;return a?n.createElement(N,l(l({ref:t},m),{},{components:a})):n.createElement(N,l({ref:t},m))}));function N(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[u]="string"==typeof e?e:r,l[1]=s;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},22966:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={slug:"/en/sql-reference/statements/create/user",sidebar_position:39,sidebar_label:"USER",title:"CREATE USER"},l=void 0,s={unversionedId:"en/sql-reference/statements/create/user",id:"en/sql-reference/statements/create/user",title:"CREATE USER",description:"Creates user accounts.",source:"@site/docs/en/sql-reference/statements/create/user.md",sourceDirName:"en/sql-reference/statements/create",slug:"/en/sql-reference/statements/create/user",permalink:"/docs/en/sql-reference/statements/create/user",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/statements/create/user.md",tags:[],version:"current",sidebarPosition:39,frontMatter:{slug:"/en/sql-reference/statements/create/user",sidebar_position:39,sidebar_label:"USER",title:"CREATE USER"},sidebar:"sqlreference",previous:{title:"FUNCTION",permalink:"/docs/en/sql-reference/statements/create/function"},next:{title:"ROLE",permalink:"/docs/en/sql-reference/statements/create/role"}},o={},p=[{value:"Identification",id:"identification",level:2},{value:"Examples",id:"examples",level:2},{value:"User Host",id:"user-host",level:2},{value:"GRANTEES Clause",id:"grantees-clause",level:2},{value:"Examples",id:"examples-1",level:2}],m={toc:p},u="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Creates ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/operations/access-rights#user-account-management"},"user accounts"),"."),(0,r.kt)("p",null,"Syntax:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE USER [IF NOT EXISTS | OR REPLACE] name1 [ON CLUSTER cluster_name1]\n        [, name2 [ON CLUSTER cluster_name2] ...]\n    [NOT IDENTIFIED | IDENTIFIED {[WITH {no_password | plaintext_password | sha256_password | sha256_hash | double_sha1_password | double_sha1_hash}] BY {'password' | 'hash'}} | {WITH ldap SERVER 'server_name'} | {WITH kerberos [REALM 'realm']} | {WITH ssl_certificate CN 'common_name'}]\n    [HOST {LOCAL | NAME 'name' | REGEXP 'name_regexp' | IP 'address' | LIKE 'pattern'} [,...] | ANY | NONE]\n    [DEFAULT ROLE role [,...]]\n    [DEFAULT DATABASE database | NONE]\n    [GRANTEES {user | role | ANY | NONE} [,...] [EXCEPT {user | role} [,...]]]\n    [SETTINGS variable [= value] [MIN [=] min_value] [MAX [=] max_value] [READONLY | WRITABLE] | PROFILE 'profile_name'] [,...]\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ON CLUSTER")," clause allows creating users on a cluster, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/distributed-ddl"},"Distributed DDL"),"."),(0,r.kt)("h2",{id:"identification"},"Identification"),(0,r.kt)("p",null,"There are multiple ways of user identification:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IDENTIFIED WITH no_password")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IDENTIFIED WITH plaintext_password BY 'qwerty'")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IDENTIFIED WITH sha256_password BY 'qwerty'")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"IDENTIFIED BY 'password'")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IDENTIFIED WITH sha256_hash BY 'hash'")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"IDENTIFIED WITH sha256_hash BY 'hash' SALT 'salt'")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IDENTIFIED WITH double_sha1_password BY 'qwerty'")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IDENTIFIED WITH double_sha1_hash BY 'hash'")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IDENTIFIED WITH ldap SERVER 'server_name'")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IDENTIFIED WITH kerberos")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"IDENTIFIED WITH kerberos REALM 'realm'")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IDENTIFIED WITH ssl_certificate CN 'mysite.com:user'"))),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The following username is ",(0,r.kt)("inlineCode",{parentName:"p"},"name1")," and does not require a password - which obviously doesn't provide much security:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE USER name1 NOT IDENTIFIED\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To specify a plaintext password:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE USER name2 IDENTIFIED WITH plaintext_password BY 'my_password'\n")),(0,r.kt)("admonition",{parentName:"li",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The password is stored in a SQL text file in ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/lib/clickhouse/access"),", so it's not a good idea to use ",(0,r.kt)("inlineCode",{parentName:"p"},"plaintext_password"),". Try ",(0,r.kt)("inlineCode",{parentName:"p"},"sha256_password")," instead, as demonstrated next..."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The best option is to use a password that is hashed using SHA-256. ClickHouse will hash the password for you when you specify ",(0,r.kt)("inlineCode",{parentName:"p"},"IDENTIFIED WITH sha256_password"),". For example:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE USER name3 IDENTIFIED WITH sha256_password BY 'my_password'\n")),(0,r.kt)("p",{parentName:"li"},"Notice ClickHouse generates and runs the following command for you:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-response"},"CREATE USER name3\nIDENTIFIED WITH sha256_hash\nBY '8B3404953FCAA509540617F082DB13B3E0734F90FF6365C19300CC6A6EA818D6'\nSALT 'D6489D8B5692D82FF944EA6415785A8A8A1AF33825456AFC554487725A74A609'\n")),(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"name3")," user can now login using ",(0,r.kt)("inlineCode",{parentName:"p"},"my_password"),", but the password is stored as the hashed value above. THe following SQL file was created in ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/lib/clickhouse/access")," and gets executed at server startup:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/var/lib/clickhouse/access $ cat 3843f510-6ebd-a52d-72ac-e021686d8a93.sql\nATTACH USER name3 IDENTIFIED WITH sha256_hash BY '0C268556C1680BEF0640AAC1E7187566704208398DA31F03D18C74F5C5BE5053' SALT '4FB16307F5E10048196966DD7E6876AE53DE6A1D1F625488482C75F14A5097C7';\n")),(0,r.kt)("admonition",{parentName:"li",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you have already created a hash value and corresponding salt value for a username, then you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"IDENTIFIED WITH sha256_hash BY 'hash'")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"IDENTIFIED WITH sha256_hash BY 'hash' SALT 'salt'"),". For identification with ",(0,r.kt)("inlineCode",{parentName:"p"},"sha256_hash")," using ",(0,r.kt)("inlineCode",{parentName:"p"},"SALT")," - hash must be calculated from concatenation of 'password' and 'salt'."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"double_sha1_password")," is not typically needed, but comes in handy when working with clients that require it (like the MySQL interface):"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE USER name4 IDENTIFIED WITH double_sha1_password BY 'my_password'\n")),(0,r.kt)("p",{parentName:"li"},"ClickHouse generates and runs the following query:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-response"},"CREATE USER name4 IDENTIFIED WITH double_sha1_hash BY 'CCD3A959D6A004B9C3807B728BC2E55B67E10518'\n")))),(0,r.kt)("h2",{id:"user-host"},"User Host"),(0,r.kt)("p",null,"User host is a host from which a connection to ClickHouse server could be established. The host can be specified in the ",(0,r.kt)("inlineCode",{parentName:"p"},"HOST")," query section in the following ways:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"HOST IP 'ip_address_or_subnetwork'")," \u2014 User can connect to ClickHouse server only from the specified IP address or a ",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Subnetwork"},"subnetwork"),". Examples: ",(0,r.kt)("inlineCode",{parentName:"li"},"HOST IP '192.168.0.0/16'"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"HOST IP '2001:DB8::/32'"),". For use in production, only specify ",(0,r.kt)("inlineCode",{parentName:"li"},"HOST IP")," elements (IP addresses and their masks), since using ",(0,r.kt)("inlineCode",{parentName:"li"},"host")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"host_regexp")," might cause extra latency."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"HOST ANY")," \u2014 User can connect from any location. This is a default option."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"HOST LOCAL")," \u2014 User can connect only locally."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"HOST NAME 'fqdn'")," \u2014 User host can be specified as FQDN. For example, ",(0,r.kt)("inlineCode",{parentName:"li"},"HOST NAME 'mysite.com'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"HOST REGEXP 'regexp'")," \u2014 You can use ",(0,r.kt)("a",{parentName:"li",href:"http://www.pcre.org/"},"pcre")," regular expressions when specifying user hosts. For example, ",(0,r.kt)("inlineCode",{parentName:"li"},"HOST REGEXP '.*\\.mysite\\.com'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"HOST LIKE 'template'")," \u2014 Allows you to use the ",(0,r.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/functions/string-search-functions#function-like"},"LIKE")," operator to filter the user hosts. For example, ",(0,r.kt)("inlineCode",{parentName:"li"},"HOST LIKE '%'")," is equivalent to ",(0,r.kt)("inlineCode",{parentName:"li"},"HOST ANY"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"HOST LIKE '%.mysite.com'")," filters all the hosts in the ",(0,r.kt)("inlineCode",{parentName:"li"},"mysite.com")," domain.")),(0,r.kt)("p",null,"Another way of specifying host is to use ",(0,r.kt)("inlineCode",{parentName:"p"},"@")," syntax following the username. Examples:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CREATE USER mira@'127.0.0.1'")," \u2014 Equivalent to the ",(0,r.kt)("inlineCode",{parentName:"li"},"HOST IP")," syntax."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CREATE USER mira@'localhost'")," \u2014 Equivalent to the ",(0,r.kt)("inlineCode",{parentName:"li"},"HOST LOCAL")," syntax."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CREATE USER mira@'192.168.%.%'")," \u2014 Equivalent to the ",(0,r.kt)("inlineCode",{parentName:"li"},"HOST LIKE")," syntax.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"ClickHouse treats ",(0,r.kt)("inlineCode",{parentName:"p"},"user_name@'address'")," as a username as a whole. Thus, technically you can create multiple users with the same ",(0,r.kt)("inlineCode",{parentName:"p"},"user_name")," and different constructions after ",(0,r.kt)("inlineCode",{parentName:"p"},"@"),". However, we do not recommend to do so.")),(0,r.kt)("h2",{id:"grantees-clause"},"GRANTEES Clause"),(0,r.kt)("p",null,"Specifies users or roles which are allowed to receive ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/grant#grant-privileges"},"privileges")," from this user on the condition this user has also all required access granted with ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/grant#grant-privigele-syntax"},"GRANT OPTION"),". Options of the ",(0,r.kt)("inlineCode",{parentName:"p"},"GRANTEES")," clause:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"user")," \u2014 Specifies a user this user can grant privileges to."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"role")," \u2014 Specifies a role this user can grant privileges to."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ANY")," \u2014 This user can grant privileges to anyone. It's the default setting."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"NONE")," \u2014 This user can grant privileges to none.")),(0,r.kt)("p",null,"You can exclude any user or role by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"EXCEPT")," expression. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"CREATE USER user1 GRANTEES ANY EXCEPT user2"),". It means if ",(0,r.kt)("inlineCode",{parentName:"p"},"user1")," has some privileges granted with ",(0,r.kt)("inlineCode",{parentName:"p"},"GRANT OPTION")," it will be able to grant those privileges to anyone except ",(0,r.kt)("inlineCode",{parentName:"p"},"user2"),"."),(0,r.kt)("h2",{id:"examples-1"},"Examples"),(0,r.kt)("p",null,"Create the user account ",(0,r.kt)("inlineCode",{parentName:"p"},"mira")," protected by the password ",(0,r.kt)("inlineCode",{parentName:"p"},"qwerty"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE USER mira HOST IP '127.0.0.1' IDENTIFIED WITH sha256_password BY 'qwerty';\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"mira")," should start client app at the host where the ClickHouse server runs."),(0,r.kt)("p",null,"Create the user account ",(0,r.kt)("inlineCode",{parentName:"p"},"john"),", assign roles to it and make this roles default:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE USER john DEFAULT ROLE role1, role2;\n")),(0,r.kt)("p",null,"Create the user account ",(0,r.kt)("inlineCode",{parentName:"p"},"john")," and make all his future roles default:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE USER john DEFAULT ROLE ALL;\n")),(0,r.kt)("p",null,"When some role is assigned to ",(0,r.kt)("inlineCode",{parentName:"p"},"john")," in the future, it will become default automatically."),(0,r.kt)("p",null,"Create the user account ",(0,r.kt)("inlineCode",{parentName:"p"},"john")," and make all his future roles default excepting ",(0,r.kt)("inlineCode",{parentName:"p"},"role1")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"role2"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE USER john DEFAULT ROLE ALL EXCEPT role1, role2;\n")),(0,r.kt)("p",null,"Create the user account ",(0,r.kt)("inlineCode",{parentName:"p"},"john")," and allow him to grant his privileges to the user with ",(0,r.kt)("inlineCode",{parentName:"p"},"jack")," account:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE USER john GRANTEES jack;\n")))}c.isMDXComponent=!0}}]);