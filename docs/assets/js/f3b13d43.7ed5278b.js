"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[18169],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||s;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<s;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},20448:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var a=n(87462),r=n(63366),s=(n(67294),n(3905)),o=["components"],l={sidebar_position:57,sidebar_label:"Nested(Name1 Type1, Name2 Type2, ...)"},i="Nested",u={unversionedId:"en/sql-reference/data-types/nested-data-structures/nested",id:"en/sql-reference/data-types/nested-data-structures/nested",title:"Nested",description:"Nested(name1 Type1, Name2 Type2, \u2026)",source:"@site/docs/en/sql-reference/data-types/nested-data-structures/nested.md",sourceDirName:"en/sql-reference/data-types/nested-data-structures",slug:"/en/sql-reference/data-types/nested-data-structures/nested",permalink:"/docs/en/sql-reference/data-types/nested-data-structures/nested",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/data-types/nested-data-structures/nested.md",tags:[],version:"current",sidebarPosition:57,frontMatter:{sidebar_position:57,sidebar_label:"Nested(Name1 Type1, Name2 Type2, ...)"},sidebar:"english",previous:{title:"Nested Data Structures",permalink:"/docs/en/sql-reference/data-types/nested-data-structures/"},next:{title:"Tuple(T1, T2, ...)",permalink:"/docs/en/sql-reference/data-types/tuple"}},c={},p=[{value:"Nested(name1 Type1, Name2 Type2, \u2026)",id:"nestedname1-type1-name2-type2-",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"nested"},"Nested"),(0,s.kt)("h2",{id:"nestedname1-type1-name2-type2-"},"Nested(name1 Type1, Name2 Type2, \u2026)"),(0,s.kt)("p",null,"A nested data structure is like a table inside a cell. The parameters of a nested data structure \u2013 the column names and types \u2013 are specified the same way as in a ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/create/table"},"CREATE TABLE")," query. Each table row can correspond to any number of rows in a nested data structure."),(0,s.kt)("p",null,"Example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE test.visits\n(\n    CounterID UInt32,\n    StartDate Date,\n    Sign Int8,\n    IsNew UInt8,\n    VisitID UInt64,\n    UserID UInt64,\n    ...\n    Goals Nested\n    (\n        ID UInt32,\n        Serial UInt32,\n        EventTime DateTime,\n        Price Int64,\n        OrderID String,\n        CurrencyID UInt32\n    ),\n    ...\n) ENGINE = CollapsingMergeTree(StartDate, intHash32(UserID), (CounterID, StartDate, intHash32(UserID), VisitID), 8192, Sign)\n")),(0,s.kt)("p",null,"This example declares the ",(0,s.kt)("inlineCode",{parentName:"p"},"Goals")," nested data structure, which contains data about conversions (goals reached). Each row in the \u2018visits\u2019 table can correspond to zero or any number of conversions."),(0,s.kt)("p",null,"When ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/operations/settings/settings#flatten-nested"},"flatten_nested")," is set to ",(0,s.kt)("inlineCode",{parentName:"p"},"0")," (which is not by default), arbitrary levels of nesting are supported."),(0,s.kt)("p",null,"In most cases, when working with a nested data structure, its columns are specified with column names separated by a dot. These columns make up an array of matching types. All the column arrays of a single nested data structure have the same length."),(0,s.kt)("p",null,"Example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    Goals.ID,\n    Goals.EventTime\nFROM test.visits\nWHERE CounterID = 101500 AND length(Goals.ID) < 5\nLIMIT 10\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500Goals.ID\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500Goals.EventTime\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 [1073752,591325,591325]        \u2502 ['2014-03-17 16:38:10','2014-03-17 16:38:48','2014-03-17 16:42:27']                       \u2502\n\u2502 [1073752]                      \u2502 ['2014-03-17 00:28:25']                                                                   \u2502\n\u2502 [1073752]                      \u2502 ['2014-03-17 10:46:20']                                                                   \u2502\n\u2502 [1073752,591325,591325,591325] \u2502 ['2014-03-17 13:59:20','2014-03-17 22:17:55','2014-03-17 22:18:07','2014-03-17 22:18:51'] \u2502\n\u2502 []                             \u2502 []                                                                                        \u2502\n\u2502 [1073752,591325,591325]        \u2502 ['2014-03-17 11:37:06','2014-03-17 14:07:47','2014-03-17 14:36:21']                       \u2502\n\u2502 []                             \u2502 []                                                                                        \u2502\n\u2502 []                             \u2502 []                                                                                        \u2502\n\u2502 [591325,1073752]               \u2502 ['2014-03-17 00:46:05','2014-03-17 00:46:05']                                             \u2502\n\u2502 [1073752,591325,591325,591325] \u2502 ['2014-03-17 13:28:33','2014-03-17 13:30:26','2014-03-17 18:51:21','2014-03-17 18:51:45'] \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,s.kt)("p",null,"It is easiest to think of a nested data structure as a set of multiple column arrays of the same length."),(0,s.kt)("p",null,"The only place where a SELECT query can specify the name of an entire nested data structure instead of individual columns is the ARRAY JOIN clause. For more information, see \u201cARRAY JOIN clause\u201d. Example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    Goal.ID,\n    Goal.EventTime\nFROM test.visits\nARRAY JOIN Goals AS Goal\nWHERE CounterID = 101500 AND length(Goals.ID) < 5\nLIMIT 10\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500Goal.ID\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500Goal.EventTime\u2500\u2510\n\u2502 1073752 \u2502 2014-03-17 16:38:10 \u2502\n\u2502  591325 \u2502 2014-03-17 16:38:48 \u2502\n\u2502  591325 \u2502 2014-03-17 16:42:27 \u2502\n\u2502 1073752 \u2502 2014-03-17 00:28:25 \u2502\n\u2502 1073752 \u2502 2014-03-17 10:46:20 \u2502\n\u2502 1073752 \u2502 2014-03-17 13:59:20 \u2502\n\u2502  591325 \u2502 2014-03-17 22:17:55 \u2502\n\u2502  591325 \u2502 2014-03-17 22:18:07 \u2502\n\u2502  591325 \u2502 2014-03-17 22:18:51 \u2502\n\u2502 1073752 \u2502 2014-03-17 11:37:06 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,s.kt)("p",null,"You can\u2019t perform SELECT for an entire nested data structure. You can only explicitly list individual columns that are part of it."),(0,s.kt)("p",null,"For an INSERT query, you should pass all the component column arrays of a nested data structure separately (as if they were individual column arrays). During insertion, the system checks that they have the same length."),(0,s.kt)("p",null,"For a DESCRIBE query, the columns in a nested data structure are listed separately in the same way."),(0,s.kt)("p",null,"The ALTER query for elements in a nested data structure has limitations."),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/data_types/nested_data_structures/nested/"},"Original article")," "))}m.isMDXComponent=!0}}]);