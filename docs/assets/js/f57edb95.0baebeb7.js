"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[15568],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(t),d=r,h=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return t?a.createElement(h,o(o({ref:n},p),{},{components:t})):a.createElement(h,o({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=c;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},97291:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=t(87462),r=(t(67294),t(3905));const l={slug:"/en/sql-reference/data-types/enum",sidebar_position:50,sidebar_label:"Enum"},o="Enum",i={unversionedId:"en/sql-reference/data-types/enum",id:"en/sql-reference/data-types/enum",title:"Enum",description:"Enumerated type consisting of named values.",source:"@site/docs/en/sql-reference/data-types/enum.md",sourceDirName:"en/sql-reference/data-types",slug:"/en/sql-reference/data-types/enum",permalink:"/docs/en/sql-reference/data-types/enum",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/data-types/enum.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{slug:"/en/sql-reference/data-types/enum",sidebar_position:50,sidebar_label:"Enum"},sidebar:"english",previous:{title:"DateTime64",permalink:"/docs/en/sql-reference/data-types/datetime64"},next:{title:"LowCardinality",permalink:"/docs/en/sql-reference/data-types/lowcardinality"}},s={},u=[{value:"Usage Examples",id:"usage-examples",level:2},{value:"General Rules and Usage",id:"general-rules-and-usage",level:2}],p={toc:u};function m(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"enum"},"Enum"),(0,r.kt)("p",null,"Enumerated type consisting of named values."),(0,r.kt)("p",null,"Named values can be declared as ",(0,r.kt)("inlineCode",{parentName:"p"},"'string' = integer")," pairs or ",(0,r.kt)("inlineCode",{parentName:"p"},"'string'")," names . ClickHouse stores only numbers, but supports operations with the values through their names."),(0,r.kt)("p",null,"ClickHouse supports:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"8-bit ",(0,r.kt)("inlineCode",{parentName:"li"},"Enum"),". It can contain up to 256 values enumerated in the ",(0,r.kt)("inlineCode",{parentName:"li"},"[-128, 127]")," range."),(0,r.kt)("li",{parentName:"ul"},"16-bit ",(0,r.kt)("inlineCode",{parentName:"li"},"Enum"),". It can contain up to 65536 values enumerated in the ",(0,r.kt)("inlineCode",{parentName:"li"},"[-32768, 32767]")," range.")),(0,r.kt)("p",null,"ClickHouse automatically chooses the type of ",(0,r.kt)("inlineCode",{parentName:"p"},"Enum")," when data is inserted. You can also use ",(0,r.kt)("inlineCode",{parentName:"p"},"Enum8")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Enum16")," types to be sure in the size of storage."),(0,r.kt)("h2",{id:"usage-examples"},"Usage Examples"),(0,r.kt)("p",null,"Here we create a table with an ",(0,r.kt)("inlineCode",{parentName:"p"},"Enum8('hello' = 1, 'world' = 2)")," type column:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE t_enum\n(\n    x Enum('hello' = 1, 'world' = 2)\n)\nENGINE = TinyLog\n")),(0,r.kt)("p",null,"Similarly, you could omit numbers. ClickHouse will assign consecutive numbers automatically. Numbers are assigned starting from 1 by default."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE t_enum\n(\n    x Enum('hello', 'world')\n)\nENGINE = TinyLog\n")),(0,r.kt)("p",null,"You can also specify legal starting number for the first name."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE t_enum\n(\n    x Enum('hello' = 1, 'world')\n)\nENGINE = TinyLog\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE t_enum\n(\n    x Enum8('hello' = -129, 'world')\n)\nENGINE = TinyLog\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Exception on server:\nCode: 69. DB::Exception: Value -129 for element 'hello' exceeds range of Enum8.\n")),(0,r.kt)("p",null,"Column ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," can only store values that are listed in the type definition: ",(0,r.kt)("inlineCode",{parentName:"p"},"'hello'")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"'world'"),". If you try to save any other value, ClickHouse will raise an exception. 8-bit size for this ",(0,r.kt)("inlineCode",{parentName:"p"},"Enum")," is chosen automatically."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO t_enum VALUES ('hello'), ('world'), ('hello')\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Ok.\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO t_enum values('a')\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Exception on client:\nCode: 49. DB::Exception: Unknown element 'a' for type Enum('hello' = 1, 'world' = 2)\n")),(0,r.kt)("p",null,"When you query data from the table, ClickHouse outputs the string values from ",(0,r.kt)("inlineCode",{parentName:"p"},"Enum"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM t_enum\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500x\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 hello \u2502\n\u2502 world \u2502\n\u2502 hello \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"If you need to see the numeric equivalents of the rows, you must cast the ",(0,r.kt)("inlineCode",{parentName:"p"},"Enum")," value to integer type."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT CAST(x, 'Int8') FROM t_enum\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500CAST(x, 'Int8')\u2500\u2510\n\u2502               1 \u2502\n\u2502               2 \u2502\n\u2502               1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"To create an Enum value in a query, you also need to use ",(0,r.kt)("inlineCode",{parentName:"p"},"CAST"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT toTypeName(CAST('a', 'Enum(\\'a\\' = 1, \\'b\\' = 2)'))\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500toTypeName(CAST('a', 'Enum(\\'a\\' = 1, \\'b\\' = 2)'))\u2500\u2510\n\u2502 Enum8('a' = 1, 'b' = 2)                             \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h2",{id:"general-rules-and-usage"},"General Rules and Usage"),(0,r.kt)("p",null,"Each of the values is assigned a number in the range ",(0,r.kt)("inlineCode",{parentName:"p"},"-128 ... 127")," for ",(0,r.kt)("inlineCode",{parentName:"p"},"Enum8")," or in the range ",(0,r.kt)("inlineCode",{parentName:"p"},"-32768 ... 32767")," for ",(0,r.kt)("inlineCode",{parentName:"p"},"Enum16"),". All the strings and numbers must be different. An empty string is allowed. If this type is specified (in a table definition), numbers can be in an arbitrary order. However, the order does not matter."),(0,r.kt)("p",null,"Neither the string nor the numeric value in an ",(0,r.kt)("inlineCode",{parentName:"p"},"Enum")," can be ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/syntax"},"NULL"),"."),(0,r.kt)("p",null,"An ",(0,r.kt)("inlineCode",{parentName:"p"},"Enum")," can be contained in ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/nullable"},"Nullable")," type. So if you create a table using the query"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE t_enum_nullable\n(\n    x Nullable( Enum8('hello' = 1, 'world' = 2) )\n)\nENGINE = TinyLog\n")),(0,r.kt)("p",null,"it can store not only ",(0,r.kt)("inlineCode",{parentName:"p"},"'hello'")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"'world'"),", but ",(0,r.kt)("inlineCode",{parentName:"p"},"NULL"),", as well."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO t_enum_nullable Values('hello'),('world'),(NULL)\n")),(0,r.kt)("p",null,"In RAM, an ",(0,r.kt)("inlineCode",{parentName:"p"},"Enum")," column is stored in the same way as ",(0,r.kt)("inlineCode",{parentName:"p"},"Int8")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Int16")," of the corresponding numerical values."),(0,r.kt)("p",null,"When reading in text form, ClickHouse parses the value as a string and searches for the corresponding string from the set of Enum values. If it is not found, an exception is thrown. When reading in text format, the string is read and the corresponding numeric value is looked up. An exception will be thrown if it is not found.\nWhen writing in text form, it writes the value as the corresponding string. If column data contains garbage (numbers that are not from the valid set), an exception is thrown. When reading and writing in binary form, it works the same way as for Int8 and Int16 data types.\nThe implicit default value is the value with the lowest number."),(0,r.kt)("p",null,"During ",(0,r.kt)("inlineCode",{parentName:"p"},"ORDER BY"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"GROUP BY"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"IN"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"DISTINCT")," and so on, Enums behave the same way as the corresponding numbers. For example, ORDER BY sorts them numerically. Equality and comparison operators work the same way on Enums as they do on the underlying numeric values."),(0,r.kt)("p",null,"Enum values cannot be compared with numbers. Enums can be compared to a constant string. If the string compared to is not a valid value for the Enum, an exception will be thrown. The IN operator is supported with the Enum on the left-hand side and a set of strings on the right-hand side. The strings are the values of the corresponding Enum."),(0,r.kt)("p",null,"Most numeric and string operations are not defined for Enum values, e.g.\xa0adding a number to an Enum or concatenating a string to an Enum.\nHowever, the Enum has a natural ",(0,r.kt)("inlineCode",{parentName:"p"},"toString")," function that returns its string value."),(0,r.kt)("p",null,"Enum values are also convertible to numeric types using the ",(0,r.kt)("inlineCode",{parentName:"p"},"toT")," function, where T is a numeric type. When T corresponds to the enum\u2019s underlying numeric type, this conversion is zero-cost.\nThe Enum type can be changed without cost using ALTER, if only the set of values is changed. It is possible to both add and remove members of the Enum using ALTER (removing is safe only if the removed value has never been used in the table). As a safeguard, changing the numeric value of a previously defined Enum member will throw an exception."),(0,r.kt)("p",null,"Using ALTER, it is possible to change an Enum8 to an Enum16 or vice versa, just like changing an Int8 to Int16."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/data_types/enum/"},"Original article")," "))}m.isMDXComponent=!0}}]);