"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[22706],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},76494:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={slug:"/en/interfaces/mysql",sidebar_position:20,sidebar_label:"MySQL Interface"},s="MySQL Interface",i={unversionedId:"en/interfaces/mysql",id:"en/interfaces/mysql",title:"MySQL Interface",description:"ClickHouse supports MySQL wire protocol. To enable the MySQL wire protocol, add the mysqlport setting to your server's configuration file. For example, you could define the port in a new XML file in your config.d folder:",source:"@site/docs/en/interfaces/mysql.md",sourceDirName:"en/interfaces",slug:"/en/interfaces/mysql",permalink:"/docs/en/interfaces/mysql",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/interfaces/mysql.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{slug:"/en/interfaces/mysql",sidebar_position:20,sidebar_label:"MySQL Interface"},sidebar:"english",previous:{title:"HTTP Interface",permalink:"/docs/en/interfaces/http"},next:{title:"PostgreSQL Interface",permalink:"/docs/en/interfaces/postgresql"}},l={},c=[{value:"Connect mysql to ClickHouse",id:"connect-mysql-to-clickhouse",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mysql-interface"},"MySQL Interface"),(0,o.kt)("p",null,"ClickHouse supports MySQL wire protocol. To enable the MySQL wire protocol, add the ",(0,o.kt)("a",{parentName:"p",href:"/docs/en/operations/server-configuration-parameters/settings#server_configuration_parameters-mysql_port"},"mysql_port")," setting to your server's configuration file. For example, you could define the port in a new XML file in your ",(0,o.kt)("inlineCode",{parentName:"p"},"config.d")," folder:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<clickhouse>\n    <mysql_port>9004</mysql_port>\n</clickhouse>\n")),(0,o.kt)("p",null,"Startup your ClickHouse server and look for a log message similar to the following that mentions Listening for MySQL compatibility protocol:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"{} <Information> Application: Listening for MySQL compatibility protocol: 127.0.0.1:9004\n")),(0,o.kt)("h2",{id:"connect-mysql-to-clickhouse"},"Connect mysql to ClickHouse"),(0,o.kt)("p",null,"The following command demonstrates how to connect the MySQL client ",(0,o.kt)("inlineCode",{parentName:"p"},"mysql")," to ClickHouse:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mysql --protocol tcp -h [hostname] -u [username] -P [port_number] [database_name]\n")),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ mysql --protocol tcp -h 127.0.0.1 -u default -P 9004 default\n")),(0,o.kt)("p",null,"Output if a connection succeeded:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Welcome to the MySQL monitor.  Commands end with ; or \\g.\nYour MySQL connection id is 4\nServer version: 20.2.1.1-ClickHouse\n\nCopyright (c) 2000, 2019, Oracle and/or its affiliates. All rights reserved.\n\nOracle is a registered trademark of Oracle Corporation and/or its\naffiliates. Other names may be trademarks of their respective\nowners.\n\nType 'help;' or '\\h' for help. Type '\\c' to clear the current input statement.\n\nmysql>\n")),(0,o.kt)("p",null,"For compatibility with all MySQL clients, it is recommended to specify user password with ",(0,o.kt)("a",{parentName:"p",href:"/docs/en/operations/settings/settings-users#password_double_sha1_hex"},"double SHA1")," in configuration file.\nIf user password is specified using ",(0,o.kt)("a",{parentName:"p",href:"/docs/en/operations/settings/settings-users#password_sha256_hex"},"SHA256"),", some clients won\u2019t be able to authenticate (mysqljs and old versions of command-line tool MySQL and MariaDB)."),(0,o.kt)("p",null,"Restrictions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"prepared queries are not supported")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"some data types are sent as strings"))),(0,o.kt)("p",null,"To cancel a long query use ",(0,o.kt)("inlineCode",{parentName:"p"},"KILL QUERY connection_id")," statement (it is replaced with ",(0,o.kt)("inlineCode",{parentName:"p"},"KILL QUERY WHERE query_id = connection_id")," while proceeding). For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'$ mysql --protocol tcp -h mysql_server -P 9004 default -u default --password=123 -e "KILL QUERY 123456;"\n')))}m.isMDXComponent=!0}}]);