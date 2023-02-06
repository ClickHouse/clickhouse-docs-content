"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[2031],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},i=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),p=u(r),b=a,f=p["".concat(l,".").concat(b)]||p[b]||d[b]||c;return r?n.createElement(f,o(o({ref:t},i),{},{components:r})):n.createElement(f,o({ref:t},i))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var u=2;u<c;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},85250:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>c,metadata:()=>s,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const c={slug:"/en/sql-reference/table-functions/jdbc",sidebar_position:43,sidebar_label:"jdbc"},o="jdbc",s={unversionedId:"en/sql-reference/table-functions/jdbc",id:"en/sql-reference/table-functions/jdbc",title:"jdbc",description:"jdbc(datasource, schema, table) - returns table that is connected via JDBC driver.",source:"@site/docs/en/sql-reference/table-functions/jdbc.md",sourceDirName:"en/sql-reference/table-functions",slug:"/en/sql-reference/table-functions/jdbc",permalink:"/docs/en/sql-reference/table-functions/jdbc",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/table-functions/jdbc.md",tags:[],version:"current",sidebarPosition:43,frontMatter:{slug:"/en/sql-reference/table-functions/jdbc",sidebar_position:43,sidebar_label:"jdbc"},sidebar:"english",previous:{title:"postgresql",permalink:"/docs/en/sql-reference/table-functions/postgresql"},next:{title:"odbc",permalink:"/docs/en/sql-reference/table-functions/odbc"}},l={},u=[],i={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"jdbc"},"jdbc"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"jdbc(datasource, schema, table)")," - returns table that is connected via JDBC driver."),(0,a.kt)("p",null,"This table function requires separate ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/clickhouse-jdbc-bridge"},"clickhouse-jdbc-bridge")," program to be running.\nIt supports Nullable types (based on DDL of remote table that is queried)."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM jdbc('jdbc:mysql://localhost:3306/?user=root&password=root', 'schema', 'table')\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM jdbc('mysql://localhost:3306/?user=root&password=root', 'select * from schema.table')\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM jdbc('mysql-dev?p1=233', 'num Int32', 'select toInt32OrZero(''{{p1}}'') as num')\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM jdbc('mysql-dev?p1=233', 'num Int32', 'select toInt32OrZero(''{{p1}}'') as num')\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT a.datasource AS server1, b.datasource AS server2, b.name AS db\nFROM jdbc('mysql-dev?datasource_column', 'show databases') a\nINNER JOIN jdbc('self?datasource_column', 'show databases') b ON a.Database = b.name\n")))}d.isMDXComponent=!0}}]);