"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[41514],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},i=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,s=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),b=u(r),d=a,f=b["".concat(s,".").concat(d)]||b[d]||p[d]||c;return r?n.createElement(f,o(o({ref:t},i),{},{components:r})):n.createElement(f,o({ref:t},i))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<c;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},7855:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const c={slug:"/zh/sql-reference/table-functions/jdbc",sidebar_position:43,sidebar_label:"jdbc"},o="jdbc",l={unversionedId:"zh/sql-reference/table-functions/jdbc",id:"zh/sql-reference/table-functions/jdbc",title:"jdbc",description:"table-function-jdbc}",source:"@site/docs/zh/sql-reference/table-functions/jdbc.md",sourceDirName:"zh/sql-reference/table-functions",slug:"/zh/sql-reference/table-functions/jdbc",permalink:"/docs/zh/sql-reference/table-functions/jdbc",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/table-functions/jdbc.md",tags:[],version:"current",sidebarPosition:43,frontMatter:{slug:"/zh/sql-reference/table-functions/jdbc",sidebar_position:43,sidebar_label:"jdbc"},sidebar:"chinese",previous:{title:"postgresql",permalink:"/docs/zh/sql-reference/table-functions/postgresql"},next:{title:"odbc",permalink:"/docs/zh/sql-reference/table-functions/odbc"}},s={},u=[],i={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"table-function-jdbc"},"jdbc"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"jdbc(datasource, schema, table)")," -\u8fd4\u56de\u901a\u8fc7JDBC\u9a71\u52a8\u7a0b\u5e8f\u8fde\u63a5\u7684\u8868\u3002"),(0,a.kt)("p",null,"\u6b64\u8868\u51fd\u6570\u9700\u8981\u5355\u72ec\u7684 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/clickhouse-jdbc-bridge"},"clickhouse-jdbc-bridge")," \u7a0b\u5e8f\u624d\u80fd\u8fd0\u884c\u3002\n\u5b83\u652f\u6301\u53ef\u7a7a\u7c7b\u578b\uff08\u57fa\u4e8e\u67e5\u8be2\u7684\u8fdc\u7a0b\u8868\u7684DDL\uff09\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM jdbc('jdbc:mysql://localhost:3306/?user=root&password=root', 'schema', 'table')\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM jdbc('mysql://localhost:3306/?user=root&password=root', 'select * from schema.table')\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM jdbc('mysql-dev?p1=233', 'num Int32', 'select toInt32OrZero(''{{p1}}'') as num')\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM jdbc('mysql-dev?p1=233', 'num Int32', 'select toInt32OrZero(''{{p1}}'') as num')\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT a.datasource AS server1, b.datasource AS server2, b.name AS db\nFROM jdbc('mysql-dev?datasource_column', 'show databases') a\nINNER JOIN jdbc('self?datasource_column', 'show databases') b ON a.Database = b.name\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/query_language/table_functions/jdbc/"},"\u539f\u59cb\u6587\u7ae0")," "))}p.isMDXComponent=!0}}]);