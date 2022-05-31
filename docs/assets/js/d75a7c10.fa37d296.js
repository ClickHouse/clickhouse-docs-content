"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[22706],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),f=a,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||o;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},76494:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={sidebar_position:20,sidebar_label:"MySQL Interface"},c="MySQL Interface",l={unversionedId:"en/interfaces/mysql",id:"en/interfaces/mysql",title:"MySQL Interface",description:"mysql-interface}",source:"@site/docs/en/interfaces/mysql.md",sourceDirName:"en/interfaces",slug:"/en/interfaces/mysql",permalink:"/docs/en/interfaces/mysql",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/interfaces/mysql.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20,sidebar_label:"MySQL Interface"},sidebar:"english",previous:{title:"HTTP Interface",permalink:"/docs/en/interfaces/http"},next:{title:"PostgreSQL Interface",permalink:"/docs/en/interfaces/postgresql"}},p={},u=[],m={toc:u};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mysql-interface"},"MySQL Interface"),(0,o.kt)("p",null,"ClickHouse supports MySQL wire protocol. It can be enabled by ",(0,o.kt)("a",{parentName:"p",href:"/docs/en/operations/server-configuration-parameters/settings#server_configuration_parameters-mysql_port"},"mysql_port")," setting in configuration file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<mysql_port>9004</mysql_port>\n")),(0,o.kt)("p",null,"Example of connecting using command-line tool ",(0,o.kt)("inlineCode",{parentName:"p"},"mysql"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ mysql --protocol tcp -u default -P 9004\n")),(0,o.kt)("p",null,"Output if a connection succeeded:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Welcome to the MySQL monitor.  Commands end with ; or \\g.\nYour MySQL connection id is 4\nServer version: 20.2.1.1-ClickHouse\n\nCopyright (c) 2000, 2019, Oracle and/or its affiliates. All rights reserved.\n\nOracle is a registered trademark of Oracle Corporation and/or its\naffiliates. Other names may be trademarks of their respective\nowners.\n\nType 'help;' or '\\h' for help. Type '\\c' to clear the current input statement.\n\nmysql>\n")),(0,o.kt)("p",null,"For compatibility with all MySQL clients, it is recommended to specify user password with ",(0,o.kt)("a",{parentName:"p",href:"/docs/en/operations/settings/settings-users#password_double_sha1_hex"},"double SHA1")," in configuration file.\nIf user password is specified using ",(0,o.kt)("a",{parentName:"p",href:"/docs/en/operations/settings/settings-users#password_sha256_hex"},"SHA256"),", some clients won\u2019t be able to authenticate (mysqljs and old versions of command-line tool MySQL and MariaDB)."),(0,o.kt)("p",null,"Restrictions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"prepared queries are not supported")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"some data types are sent as strings"))),(0,o.kt)("p",null,"To cancel a long query use ",(0,o.kt)("inlineCode",{parentName:"p"},"KILL QUERY connection_id")," statement (it is replaced with ",(0,o.kt)("inlineCode",{parentName:"p"},"KILL QUERY WHERE query_id = connection_id")," while proceeding). For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'$ mysql --protocol tcp -h mysql_server -P 9004 default -u default --password=123 -e "KILL QUERY 123456;"\n')),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/interfaces/mysql/"},"Original article")," "))}f.isMDXComponent=!0}}]);