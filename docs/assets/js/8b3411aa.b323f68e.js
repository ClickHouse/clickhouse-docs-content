"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[63810],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},10331:(e,t,n)=>{n.d(t,{ZP:()=>l});var a=n(87462),r=(n(67294),n(3905));const i={toc:[]},o="wrapper";function l(e){let{components:t,...n}=e;return(0,r.kt)(o,(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This page is not applicable to ",(0,r.kt)("a",{parentName:"p",href:"https://clickhouse.com/cloud"},"ClickHouse Cloud"),". The feature documented here is not available in ClickHouse Cloud services.\nSee the ClickHouse ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/whats-new/cloud-compatibility"},"Cloud Compatibility")," guide for more information.")))}l.isMDXComponent=!0},55288:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905)),i=n(10331);const o={sidebar_label:"Configuring LDAP",sidebar_position:20,slug:"/en/guides/sre/configuring-ldap"},l="Configuring ClickHouse to Use LDAP for Authentication and Role Mapping",s={unversionedId:"en/guides/sre/user-management/configuring-ldap",id:"en/guides/sre/user-management/configuring-ldap",title:"Configuring ClickHouse to Use LDAP for Authentication and Role Mapping",description:"ClickHouse can be configured to use LDAP to authenticate ClickHouse database users. This guide provides a simple example of integrating ClickHouse with an LDAP system authenticating to a publicly available directory.",source:"@site/docs/en/guides/sre/user-management/configuring-ldap.md",sourceDirName:"en/guides/sre/user-management",slug:"/en/guides/sre/configuring-ldap",permalink:"/docs/en/guides/sre/configuring-ldap",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/guides/sre/user-management/configuring-ldap.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_label:"Configuring LDAP",sidebar_position:20,slug:"/en/guides/sre/configuring-ldap"},sidebar:"english",previous:{title:"Users",permalink:"/docs/en/manage/users"},next:{title:"SSL User Certificate Authentication",permalink:"/docs/en/guides/sre/ssl-user-auth"}},p={},c=[{value:"1. Configure LDAP connection settings in ClickHouse",id:"1-configure-ldap-connection-settings-in-clickhouse",level:2},{value:"2. Configure ClickHouse database roles and permissions",id:"2-configure-clickhouse-database-roles-and-permissions",level:2},{value:"3. Test the LDAP configuration",id:"3-test-the-ldap-configuration",level:2},{value:"Summary",id:"summary",level:2}],u={toc:c},d="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"configuring-clickhouse-to-use-ldap-for-authentication-and-role-mapping"},"Configuring ClickHouse to Use LDAP for Authentication and Role Mapping"),(0,r.kt)(i.ZP,{mdxType:"SelfManaged"}),(0,r.kt)("p",null,"ClickHouse can be configured to use LDAP to authenticate ClickHouse database users. This guide provides a simple example of integrating ClickHouse with an LDAP system authenticating to a publicly available directory."),(0,r.kt)("h2",{id:"1-configure-ldap-connection-settings-in-clickhouse"},"1. Configure LDAP connection settings in ClickHouse"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Test your connection to this public LDAP server:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ ldapsearch -x -b dc=example,dc=com -H ldap://ldap.forumsys.com\n")),(0,r.kt)("p",{parentName:"li"},"The reply will be something like this:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-response"},"# extended LDIF\n#\n# LDAPv3\n# base <dc=example,dc=com> with scope subtree\n# filter: (objectclass=*)\n# requesting: ALL\n#\n\n# example.com\ndn: dc=example,dc=com\nobjectClass: top\nobjectClass: dcObject\nobjectClass: organization\no: example.com\ndc: example\n...\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Edit the ",(0,r.kt)("inlineCode",{parentName:"p"},"config.xml")," file and add the following to configure LDAP:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<ldap_servers>\n    <test_ldap_server>\n    <host>ldap.forumsys.com</host>\n    <port>389</port>\n    <bind_dn>uid={user_name},dc=example,dc=com</bind_dn>\n    <enable_tls>no</enable_tls>\n    <tls_require_cert>never</tls_require_cert>\n    </test_ldap_server>\n</ldap_servers>\n")),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"<test_ldap_server>")," tags is an arbitrary label to identify a particular LDAP server.")),(0,r.kt)("p",{parentName:"li"},"These are the basic settings used above:"),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"host"),(0,r.kt)("td",{parentName:"tr",align:null},"hostname or IP of LDAP server"),(0,r.kt)("td",{parentName:"tr",align:null},"ldap.forumsys.com")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"port"),(0,r.kt)("td",{parentName:"tr",align:null},"directory port for LDAP server"),(0,r.kt)("td",{parentName:"tr",align:null},"389")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bind_dn"),(0,r.kt)("td",{parentName:"tr",align:null},"template path to users"),(0,r.kt)("td",{parentName:"tr",align:null},"uid={user_name},dc=example,dc=com")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"enable_tls"),(0,r.kt)("td",{parentName:"tr",align:null},"whether to use secure ldap"),(0,r.kt)("td",{parentName:"tr",align:null},"no")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tls_require_cert"),(0,r.kt)("td",{parentName:"tr",align:null},"whether to require certificate for connection"),(0,r.kt)("td",{parentName:"tr",align:null},"never")))),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"In this example, since the public server uses 389 and does not use a secure port, we disable TLS for demonstration purposes.")),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"View the ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/operations/external-authenticators/ldap"},"LDAP doc page")," for more details on the LDAP settings."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add the ",(0,r.kt)("inlineCode",{parentName:"p"},"<ldap>")," section to ",(0,r.kt)("inlineCode",{parentName:"p"},"<user_directories>")," section to configure the user role mapping. This section defines when a user is authenticated and what role the user will receive. In this basic example, any user authenticating to LDAP will receive the ",(0,r.kt)("inlineCode",{parentName:"p"},"scientists_role")," which will be defined at a later step in ClickHouse. The section should look similar to this:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<user_directories>\n    <users_xml>\n        <path>users.xml</path>\n    </users_xml>\n    <local_directory>\n        <path>/var/lib/clickhouse/access/</path>\n    </local_directory>\n    <ldap>\n          <server>test_ldap_server</server>\n          <roles>\n             <scientists_role />\n          </roles>\n          <role_mapping>\n             <base_dn>dc=example,dc=com</base_dn>\n             <search_filter>(&amp;(objectClass=groupOfUniqueNames)(uniqueMember={bind_dn}))</search_filter>\n             <attribute>cn</attribute>\n          </role_mapping>\n    </ldap>\n</user_directories>\n")),(0,r.kt)("p",{parentName:"li"},"These are the basic settings used above:"),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"server"),(0,r.kt)("td",{parentName:"tr",align:null},"label defined in the prior ldap_servers section"),(0,r.kt)("td",{parentName:"tr",align:null},"test_ldap_server")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"roles"),(0,r.kt)("td",{parentName:"tr",align:null},"name of the roles defined in ClickHouse the users will be mapped to"),(0,r.kt)("td",{parentName:"tr",align:null},"scientists_role")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"base_dn"),(0,r.kt)("td",{parentName:"tr",align:null},"base path to start search for groups with user"),(0,r.kt)("td",{parentName:"tr",align:null},"dc=example,dc=com")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"search_filter"),(0,r.kt)("td",{parentName:"tr",align:null},"ldap search filter to identify groups to select for mapping users"),(0,r.kt)("td",{parentName:"tr",align:null},"(","&","(objectClass=groupOfUniqueNames)(uniqueMember={bind_dn}))")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"attribute"),(0,r.kt)("td",{parentName:"tr",align:null},"which attribute name should value be returned from"),(0,r.kt)("td",{parentName:"tr",align:null},"cn")))))),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Restart your ClickHouse server to apply the settings.")),(0,r.kt)("h2",{id:"2-configure-clickhouse-database-roles-and-permissions"},"2. Configure ClickHouse database roles and permissions"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The procedures in this section assumes that SQL Access Control and Account Management in ClickHouse has been enabled. To enable, view the ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/guides/sre/users-and-roles"},"SQL Users and Roles guide"),".")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a role in clickhouse with the same name used in the role mapping section of the ",(0,r.kt)("inlineCode",{parentName:"p"},"config.xml")," file"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE ROLE scientists_role;\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Grant needed privileges to the role. The following statement grants admin privileges to any user able to authenticate through LDAP:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"GRANT ALL ON *.* TO scientists_role;\n")))),(0,r.kt)("h2",{id:"3-test-the-ldap-configuration"},"3. Test the LDAP configuration"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Login using the ClickHouse client"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ clickhouse-client --user einstein --password password\nClickHouse client version 22.2.2.1.\nConnecting to localhost:9000 as user einstein.\nConnected to ClickHouse server version 22.2.2 revision 54455.\n\nchnode1 :)\n")),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"ldapsearch")," command in step 1 to view all of the users available in the directory and for all of the users the password is ",(0,r.kt)("inlineCode",{parentName:"p"},"password")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Test that the user was mapped correctly to the ",(0,r.kt)("inlineCode",{parentName:"p"},"scientists_role")," role and has admin permissions"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW DATABASES\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-response"},"Query id: 93b785ff-1482-4eda-95b0-b2d68b2c5e0f\n\n\u250c\u2500name\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 INFORMATION_SCHEMA \u2502\n\u2502 db1_mysql          \u2502\n\u2502 db2                \u2502\n\u2502 db3                \u2502\n\u2502 db4_mysql          \u2502\n\u2502 db5_merge          \u2502\n\u2502 default            \u2502\n\u2502 information_schema \u2502\n\u2502 system             \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n9 rows in set. Elapsed: 0.004 sec.\n")))),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"This article demostrated the basics of configuring ClickHouse to authenticate to an LDAP server and also to map to a role.  There are also options for configuring individual users in ClickHouse but having those users be authenticated by LDAP without configuring automated role mapping. The LDAP module can also be used to connect to Active Directory."))}m.isMDXComponent=!0}}]);