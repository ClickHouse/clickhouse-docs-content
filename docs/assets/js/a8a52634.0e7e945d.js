"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[4174],{3905:function(e,t,n){n.d(t,{Zo:function(){return i},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},i=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(o,".").concat(m)]||d[m]||c[m]||l;return n?r.createElement(f,s(s({ref:t},i),{},{components:n})):r.createElement(f,s({ref:t},i))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,s[1]=p;for(var u=2;u<l;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},84524:function(e,t,n){n.r(t),n.d(t,{assets:function(){return i},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return c}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),s=["components"],p={sidebar_position:54,sidebar_label:"Tuple(T1, T2, ...)"},o="Tuple(t1, T2, \u2026)",u={unversionedId:"en/sql-reference/data-types/tuple",id:"en/sql-reference/data-types/tuple",title:"Tuple(t1, T2, \u2026)",description:"A tuple of elements, each having an individual type.",source:"@site/docs/en/sql-reference/data-types/tuple.md",sourceDirName:"en/sql-reference/data-types",slug:"/en/sql-reference/data-types/tuple",permalink:"/docs/en/sql-reference/data-types/tuple",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/data-types/tuple.md",tags:[],version:"current",sidebarPosition:54,frontMatter:{sidebar_position:54,sidebar_label:"Tuple(T1, T2, ...)"},sidebar:"english",previous:{title:"Nested(Name1 Type1, Name2 Type2, ...)",permalink:"/docs/en/sql-reference/data-types/nested-data-structures/nested"},next:{title:"Nullable",permalink:"/docs/en/sql-reference/data-types/nullable"}},i={},c=[{value:"Creating a Tuple",id:"creating-a-tuple",level:2},{value:"Working with Data Types",id:"working-with-data-types",level:2},{value:"Addressing Tuple Elements",id:"addressing-tuple-elements",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,s);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"tuplet1-t2-"},"Tuple(t1, T2, \u2026)"),(0,l.kt)("p",null,"A tuple of elements, each having an individual ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/#data_types"},"type"),"."),(0,l.kt)("p",null,"Tuples are used for temporary column grouping. Columns can be grouped when an IN expression is used in a query, and for specifying certain formal parameters of lambda functions. For more information, see the sections ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/operators/in"},"IN operators")," and ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/functions/#higher-order-functions"},"Higher order functions"),"."),(0,l.kt)("p",null,"Tuples can be the result of a query. In this case, for text formats other than JSON, values are comma-separated in brackets. In JSON formats, tuples are output as arrays (in square brackets)."),(0,l.kt)("h2",{id:"creating-a-tuple"},"Creating a Tuple"),(0,l.kt)("p",null,"You can use a function to create a tuple:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"tuple(T1, T2, ...)\n")),(0,l.kt)("p",null,"Example of creating a tuple:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT tuple(1,'a') AS x, toTypeName(x)\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500x\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500toTypeName(tuple(1, 'a'))\u2500\u2510\n\u2502 (1,'a') \u2502 Tuple(UInt8, String)      \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"working-with-data-types"},"Working with Data Types"),(0,l.kt)("p",null,"When creating a tuple on the fly, ClickHouse automatically detects the type of each argument as the minimum of the types which can store the argument value. If the argument is ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/syntax#null-literal"},"NULL"),", the type of the tuple element is ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/nullable"},"Nullable"),"."),(0,l.kt)("p",null,"Example of automatic data type detection:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT tuple(1, NULL) AS x, toTypeName(x)\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500x\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500toTypeName(tuple(1, NULL))\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 (1,NULL) \u2502 Tuple(UInt8, Nullable(Nothing)) \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"addressing-tuple-elements"},"Addressing Tuple Elements"),(0,l.kt)("p",null,"It is possible to read elements of named tuples using indexes and names:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE named_tuples (`a` Tuple(s String, i Int64)) ENGINE = Memory;\n\nINSERT INTO named_tuples VALUES (('y', 10)), (('x',-10));\n\nSELECT a.s FROM named_tuples;\n\nSELECT a.2 FROM named_tuples;\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500a.s\u2500\u2510\n\u2502 y   \u2502\n\u2502 x   \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2518\n\n\u250c\u2500tupleElement(a, 2)\u2500\u2510\n\u2502                 10 \u2502\n\u2502                -10 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/data_types/tuple/"},"Original article")," "))}m.isMDXComponent=!0}}]);