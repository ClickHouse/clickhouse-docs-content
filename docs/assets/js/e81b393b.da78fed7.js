"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[30383],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>y});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(a),m=n,y=d["".concat(l,".").concat(m)]||d[m]||p[m]||s;return a?r.createElement(y,o(o({ref:t},c),{},{components:a})):r.createElement(y,o({ref:t},c))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:n,o[1]=i;for(var u=2;u<s;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},57342:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var r=a(87462),n=(a(67294),a(3905));const s={sidebar_label:"Security Best Practices",slug:"/en/cloud/security/security-companion-guide",title:"Security Companion Guide"},o="Security Best Practices",i={unversionedId:"en/cloud/security/security-companion-guide",id:"en/cloud/security/security-companion-guide",title:"Security Companion Guide",description:"ClickHouse Cloud was created with security in mind. Our goal is to provide you with the tools you need to do your best work without worrying about",source:"@site/docs/en/cloud/security/security-companion-guide.md",sourceDirName:"en/cloud/security",slug:"/en/cloud/security/security-companion-guide",permalink:"/docs/en/cloud/security/security-companion-guide",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/cloud/security/security-companion-guide.md",tags:[],version:"current",frontMatter:{sidebar_label:"Security Best Practices",slug:"/en/cloud/security/security-companion-guide",title:"Security Companion Guide"},sidebar:"cloud",previous:{title:"Users and Roles",permalink:"/docs/en/cloud/users-and-roles"},next:{title:"IP Access List",permalink:"/docs/en/manage/security/ip-access-list"}},l={},u=[{value:"Organization security",id:"organization-security",level:2},{value:"Establish strong passwords",id:"establish-strong-passwords",level:3},{value:"Multi-factor authentication",id:"multi-factor-authentication",level:3},{value:"Organizational role based access",id:"organizational-role-based-access",level:3},{value:"Additional organizational security features",id:"additional-organizational-security-features",level:3},{value:"Network security",id:"network-security",level:2},{value:"Limit database connections",id:"limit-database-connections",level:3},{value:"Database users",id:"database-users",level:2},{value:"Use named admin accounts",id:"use-named-admin-accounts",level:3},{value:"Organize roles",id:"organize-roles",level:3},{value:"Establish secure database passwords",id:"establish-secure-database-passwords",level:3},{value:"Periodically review access",id:"periodically-review-access",level:3},{value:"Data retention",id:"data-retention",level:2},{value:"Data deletion",id:"data-deletion",level:2}],c={toc:u},d="wrapper";function p(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"security-best-practices"},"Security Best Practices"),(0,n.kt)("p",null,"ClickHouse Cloud was created with security in mind. Our goal is to provide you with the tools you need to do your best work without worrying about\nmanaging tedious infrastructure tasks. This guide is designed to make common configurations easy to set up while providing information about\nwhat we do to support you."),(0,n.kt)("p",null,"We hope you find this guide useful and look forward to sharing this journey with you."),(0,n.kt)("h2",{id:"organization-security"},"Organization security"),(0,n.kt)("p",null,"This section relates to securing your ",(0,n.kt)("a",{parentName:"p",href:"https://clickhouse.cloud/"},"ClickHouse Cloud")," account. The ",(0,n.kt)("a",{parentName:"p",href:"#database-users"},"database users")," section below covers how to securely manage database users."),(0,n.kt)("h3",{id:"establish-strong-passwords"},"Establish strong passwords"),(0,n.kt)("p",null,"ClickHouse Cloud allows you to setup a username and password or use your Google account to login. For those setting up a username and password, the\nbest way to protect your ClickHouse account is to have all users set strong passwords. There are many online resources to help you devise a password\nyou can remember. Alternatively, you can use a random password generator and store your password in a password manager for increased security."),(0,n.kt)("p",null,"Minimum password settings currently comply with ",(0,n.kt)("a",{parentName:"p",href:"https://pages.nist.gov/800-63-3/sp800-63b.html#sec4"},"NIST 800-63B")," Authenticator Assurance Level 1:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Minimum 12 characters"),(0,n.kt)("li",{parentName:"ul"},"Includes:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"1 uppercase letter"),(0,n.kt)("li",{parentName:"ul"},"1 lowercase letter"),(0,n.kt)("li",{parentName:"ul"},"1 number"),(0,n.kt)("li",{parentName:"ul"},"1 special character")))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"If you are using Google Password Manager, you may need to manually add a special character to the automatically generated password\nto comply with our password requirements. Google Password Manager can then store the new password for later use.")),(0,n.kt)("h3",{id:"multi-factor-authentication"},"Multi-factor authentication"),(0,n.kt)("p",null,"Users setting a username and password at login can also setup multi-factor authentication once logged into the control panel. Simply click your\ninitials in the upper right corner, select Profile, and click Set up in the Multi-factor authentication section."),(0,n.kt)("h3",{id:"organizational-role-based-access"},"Organizational role based access"),(0,n.kt)("p",null,"Users at the organization level can be granted administrator or developer privileges. Administrators can manage billing and create, modify, or\nterminate services. Developers can interact with existing services."),(0,n.kt)("h3",{id:"additional-organizational-security-features"},"Additional organizational security features"),(0,n.kt)("p",null,"We provide additional security features to protect your account. If a login attempt looks suspicious, we will email you to ask if the attempt was\nvalid and reset your password automatically if you tell us the attempt was unknown to you. We also provide an ",(0,n.kt)("a",{parentName:"p",href:"/docs/en/manage/security/organization-activity"},"Organization Activity")," log within the application to show you when user accounts, IP address lists (more on this below), or services were created, modified or terminated."),(0,n.kt)("h2",{id:"network-security"},"Network security"),(0,n.kt)("h3",{id:"limit-database-connections"},"Limit database connections"),(0,n.kt)("p",null,"We provide the ability to setup ",(0,n.kt)("a",{parentName:"p",href:"/docs/en/manage/security/ip-access-list"},"IP Access Lists"),", which restrict connections to your database to\nspecific IP addresses or ranges. This feature is part of the initial setup or can be configured later by clicking on your service, then the Security tab. You can input IP addresses manually, upload a JSON file containing IP addresses or CIDR block information, or import addresses from other ClickHouse services you previously set up. You can also add a description to each IP address or block to help with administration."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"If you connect to your database from a home internet connection, your internet service provider may periodically update your IP address which may impact your database connection. If this occurs simply sign into your account, go to the Security tab for the service, and use the ",(0,n.kt)("inlineCode",{parentName:"p"},"Add my current IP")," button to update the list.")),(0,n.kt)("h2",{id:"database-users"},"Database users"),(0,n.kt)("p",null,"You can setup additional user accounts within the database, use roles to make access management easier, and easily review user access periodically\nto maintain good security. Follow these steps to roll out access to more people in your organization."),(0,n.kt)("h3",{id:"use-named-admin-accounts"},"Use named admin accounts"),(0,n.kt)("p",null,"Set up a named ",(0,n.kt)("a",{parentName:"p",href:"/docs/en/cloud/users-and-roles/#admin-user"},"Admin user")," and assign them the ",(0,n.kt)("inlineCode",{parentName:"p"},"default_role"),", then securely store the password for the ",(0,n.kt)("em",{parentName:"p"},"default account")," in a vault for break-glass purposes."),(0,n.kt)("h3",{id:"organize-roles"},"Organize roles"),(0,n.kt)("p",null,"Create ",(0,n.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/create/role"},"roles")," that provide specific rights to your databases and tables."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"CREATE ROLE general_read_only;\nGRANT SELECT on my_database.* to general_read_only;\n")),(0,n.kt)("h3",{id:"establish-secure-database-passwords"},"Establish secure database passwords"),(0,n.kt)("p",null,"Use the SHA256_hash method when ",(0,n.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/create/user"},"creating user accounts")," to secure passwords."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"TIP:")," Since users with less than administrative privileges cannot set their own password, ask the user to hash their password using a generator\nsuch as ",(0,n.kt)("a",{parentName:"p",href:"https://tools.keycdn.com/sha256-online-generator"},"this one")," before providing it to the admin to setup the account. Passwords should follow the ",(0,n.kt)("a",{parentName:"p",href:"#establish-strong-passwords"},"requirements")," listed above."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"CREATE USER userName IDENTIFIED WITH sha256_hash BY 'hash';\nGRANT general_read_only TO userName;\n")),(0,n.kt)("h3",{id:"periodically-review-access"},"Periodically review access"),(0,n.kt)("p",null,"Use the query below to return all users, roles and grants for a database."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"SELECT grants.user_name,\n  grants.role_name,\n  users.name AS role_member,\n  grants.access_type,\n  grants.database,\n  grants.table\nFROM system.grants LEFT OUTER JOIN system.role_grants ON grants.role_name = role_grants.granted_role_name\n  LEFT OUTER JOIN system.users ON role_grants.user_name = users.name\n")),(0,n.kt)("h2",{id:"data-retention"},"Data retention"),(0,n.kt)("p",null,"At times you will need to set automated policies to periodically delete data. ClickHouse provides table and column level ",(0,n.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/mergetree-family/mergetree/#table_engine-mergetree-ttl"},"Time to Live (TTL)")," settings that can be used as a general setting or in combination with conditions to delete specific data elements from your tables. You will need a date/time column to determine when to delete data."),(0,n.kt)("p",null,"An example of a TTL is as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"CREATE TABLE database.table\n(\n  field1 String,\n  time_stamp DateTime,\n  field2 String\n)\nENGINE = MergeTree()\nORDER BY time_stamp\nTTL time_stamp + INTERVAL 1 HOUR;\n")),(0,n.kt)("h2",{id:"data-deletion"},"Data deletion"),(0,n.kt)("p",null,"Certain data use cases require the ability to delete individual records on demand. ClickHouse utilizes a unique storage structure to enable fast queries. We recommend data for individual deletion be processed in batches to minimize processing actions. Use the following command to delete data:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"ALTER TABLE database.table DELETE WHERE field1 = 'criteria';\n")),(0,n.kt)("p",null,"We also provide ",(0,n.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/delete/#lightweight-delete-internals"},"Lightweight Delete")," where data is immediately removed from visibility and eventually deleted."))}p.isMDXComponent=!0}}]);