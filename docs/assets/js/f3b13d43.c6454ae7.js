"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[18169],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||s;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,l=new Array(s);l[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<s;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},20448:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var r=n(87462),a=n(63366),s=(n(67294),n(3905)),l=["components"],o={sidebar_position:57,sidebar_label:"Nested(Name1 Type1, Name2 Type2, ...)"},i="Nested",u={unversionedId:"en/sql-reference/data-types/nested-data-structures/nested",id:"en/sql-reference/data-types/nested-data-structures/nested",title:"Nested",description:"nested}",source:"@site/docs/en/sql-reference/data-types/nested-data-structures/nested.md",sourceDirName:"en/sql-reference/data-types/nested-data-structures",slug:"/en/sql-reference/data-types/nested-data-structures/nested",permalink:"/en/sql-reference/data-types/nested-data-structures/nested",editUrl:"https://github.com/ClickHouse/clickhouse-docs/tree/main/docs/en/sql-reference/data-types/nested-data-structures/nested.md",tags:[],version:"current",sidebarPosition:57,frontMatter:{sidebar_position:57,sidebar_label:"Nested(Name1 Type1, Name2 Type2, ...)"},sidebar:"english",previous:{title:"Nested Data Structures",permalink:"/en/sql-reference/data-types/nested-data-structures/"},next:{title:"Tuple(T1, T2, ...)",permalink:"/en/sql-reference/data-types/tuple"}},c={},p=[{value:"Nested(name1 Type1, Name2 Type2, \u2026)",id:"nestedname1-type1-name2-type2",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,s.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"nested"},"Nested"),(0,s.kt)("h2",{id:"nestedname1-type1-name2-type2"},"Nested(name1 Type1, Name2 Type2, \u2026)"),(0,s.kt)("p",null,"A nested data structure is like a table inside a cell. The parameters of a nested data structure \u2013 the column names and types \u2013 are specified the same way as in a ",(0,s.kt)("a",{parentName:"p",href:"/en/sql-reference/statements/create/table"},"CREATE TABLE")," query. Each table row can correspond to any number of rows in a nested data structure."),(0,s.kt)("p",null,"Example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE test.visits\n(\n    CounterID UInt32,\n    StartDate Date,\n    Sign Int8,\n    IsNew UInt8,\n    VisitID UInt64,\n    UserID UInt64,\n    ...\n    Goals Nested\n    (\n        ID UInt32,\n        Serial UInt32,\n        EventTime DateTime,\n        Price Int64,\n        OrderID String,\n        CurrencyID UInt32\n    ),\n    ...\n) ENGINE = CollapsingMergeTree(StartDate, intHash32(UserID), (CounterID, StartDate, intHash32(UserID), VisitID), 8192, Sign)\n")),(0,s.kt)("p",null,"This example declares the ",(0,s.kt)("inlineCode",{parentName:"p"},"Goals")," nested data structure, which contains data about conversions (goals reached). Each row in the \u2018visits\u2019 table can correspond to zero or any number of conversions."),(0,s.kt)("p",null,"When ",(0,s.kt)("a",{parentName:"p",href:"/en/operations/settings/#flatten-nested"},"flatten_nested")," is set to ",(0,s.kt)("inlineCode",{parentName:"p"},"0")," (which is not by default), arbitrary levels of nesting are supported."),(0,s.kt)("p",null,"In most cases, when working with a nested data structure, its columns are specified with column names separated by a dot. These columns make up an array of matching types. All the column arrays of a single nested data structure have the same length."),(0,s.kt)("p",null,"Example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    Goals.ID,\n    Goals.EventTime\nFROM test.visits\nWHERE CounterID = 101500 AND length(Goals.ID) < 5\nLIMIT 10\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500Goals.ID\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500Goals.EventTime\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 [1073752,591325,591325]        \u2502 ['2014-03-17 16:38:10','2014-03-17 16:38:48','2014-03-17 16:42:27']                       \u2502\n\u2502 [1073752]                      \u2502 ['2014-03-17 00:28:25']                                                                   \u2502\n\u2502 [1073752]                      \u2502 ['2014-03-17 10:46:20']                                                                   \u2502\n\u2502 [1073752,591325,591325,591325] \u2502 ['2014-03-17 13:59:20','2014-03-17 22:17:55','2014-03-17 22:18:07','2014-03-17 22:18:51'] \u2502\n\u2502 []                             \u2502 []                                                                                        \u2502\n\u2502 [1073752,591325,591325]        \u2502 ['2014-03-17 11:37:06','2014-03-17 14:07:47','2014-03-17 14:36:21']                       \u2502\n\u2502 []                             \u2502 []                                                                                        \u2502\n\u2502 []                             \u2502 []                                                                                        \u2502\n\u2502 [591325,1073752]               \u2502 ['2014-03-17 00:46:05','2014-03-17 00:46:05']                                             \u2502\n\u2502 [1073752,591325,591325,591325] \u2502 ['2014-03-17 13:28:33','2014-03-17 13:30:26','2014-03-17 18:51:21','2014-03-17 18:51:45'] \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,s.kt)("p",null,"It is easiest to think of a nested data structure as a set of multiple column arrays of the same length."),(0,s.kt)("p",null,"The only place where a SELECT query can specify the name of an entire nested data structure instead of individual columns is the ARRAY JOIN clause. For more information, see \u201cARRAY JOIN clause\u201d. Example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    Goal.ID,\n    Goal.EventTime\nFROM test.visits\nARRAY JOIN Goals AS Goal\nWHERE CounterID = 101500 AND length(Goals.ID) < 5\nLIMIT 10\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500Goal.ID\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500Goal.EventTime\u2500\u2510\n\u2502 1073752 \u2502 2014-03-17 16:38:10 \u2502\n\u2502  591325 \u2502 2014-03-17 16:38:48 \u2502\n\u2502  591325 \u2502 2014-03-17 16:42:27 \u2502\n\u2502 1073752 \u2502 2014-03-17 00:28:25 \u2502\n\u2502 1073752 \u2502 2014-03-17 10:46:20 \u2502\n\u2502 1073752 \u2502 2014-03-17 13:59:20 \u2502\n\u2502  591325 \u2502 2014-03-17 22:17:55 \u2502\n\u2502  591325 \u2502 2014-03-17 22:18:07 \u2502\n\u2502  591325 \u2502 2014-03-17 22:18:51 \u2502\n\u2502 1073752 \u2502 2014-03-17 11:37:06 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,s.kt)("p",null,"You can\u2019t perform SELECT for an entire nested data structure. You can only explicitly list individual columns that are part of it."),(0,s.kt)("p",null,"For an INSERT query, you should pass all the component column arrays of a nested data structure separately (as if they were individual column arrays). During insertion, the system checks that they have the same length."),(0,s.kt)("p",null,"For a DESCRIBE query, the columns in a nested data structure are listed separately in the same way."),(0,s.kt)("p",null,"The ALTER query for elements in a nested data structure has limitations."),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/data_types/nested_data_structures/nested/"},"Original article")," "))}m.isMDXComponent=!0}}]);