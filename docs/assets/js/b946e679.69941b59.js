"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[35852],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,f=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(f,s(s({ref:t},c),{},{components:n})):a.createElement(f,s({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},42319:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),s=["components"],l={sidebar_position:54,sidebar_label:"JSON"},i="JSON",p={unversionedId:"en/sql-reference/data-types/json",id:"en/sql-reference/data-types/json",title:"JSON",description:"json-data-type}",source:"@site/docs/en/sql-reference/data-types/json.md",sourceDirName:"en/sql-reference/data-types",slug:"/en/sql-reference/data-types/json",permalink:"/docs/en/sql-reference/data-types/json",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/data-types/json.md",tags:[],version:"current",sidebarPosition:54,frontMatter:{sidebar_position:54,sidebar_label:"JSON"},sidebar:"english",previous:{title:"AggregateFunction",permalink:"/docs/en/sql-reference/data-types/aggregatefunction"},next:{title:"Nested Data Structures",permalink:"/docs/en/sql-reference/data-types/nested-data-structures/"}},c={},u=[{value:"Example",id:"usage-example",level:2},{value:"Displaying JSON columns",id:"displaying-json-columns",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"json-data-type"},"JSON"),(0,o.kt)("p",null,"Stores JavaScript Object Notation (JSON) documents in a single column."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"JSON")," is an alias for ",(0,o.kt)("inlineCode",{parentName:"p"},"Object('json')"),"."),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The JSON data type is an experimental feature. To use it, set ",(0,o.kt)("inlineCode",{parentName:"p"},"allow_experimental_object_type = 1"),"."))),(0,o.kt)("h2",{id:"usage-example"},"Example"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 1")),(0,o.kt)("p",null,"Creating a table with a ",(0,o.kt)("inlineCode",{parentName:"p"},"JSON")," column and inserting data into it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE json\n(\n    o JSON\n)\nENGINE = Memory\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},'INSERT INTO json VALUES (\'{"a": 1, "b": { "c": 2, "d": [1, 2, 3] }}\')\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT o.a, o.b.c, o.b.d[3] FROM json\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500o.a\u2500\u252c\u2500o.b.c\u2500\u252c\u2500arrayElement(o.b.d, 3)\u2500\u2510\n\u2502   1 \u2502     2 \u2502                      3 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 2")),(0,o.kt)("p",null,"To be able to create an ordered ",(0,o.kt)("inlineCode",{parentName:"p"},"MergeTree")," family table the sorting key has to be extracted into its column. For example, to insert a file of compressed HTTP access logs in JSON format:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE logs\n(\n    timestamp DateTime,\n    message JSON\n)\nENGINE = MergeTree\nORDER BY timestamp\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO logs\nSELECT parseDateTimeBestEffort(JSONExtractString(json, 'timestamp')), json\nFROM file('access.json.gz', JSONAsString)\n")),(0,o.kt)("h2",{id:"displaying-json-columns"},"Displaying JSON columns"),(0,o.kt)("p",null,"When displaying a ",(0,o.kt)("inlineCode",{parentName:"p"},"JSON")," column ClickHouse only shows the field values by default (because internally, it is represented as a tuple). You can display the field names as well by setting ",(0,o.kt)("inlineCode",{parentName:"p"},"output_format_json_named_tuples_as_objects = 1"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SET output_format_json_named_tuples_as_objects = 1\n\nSELECT * FROM json FORMAT JSONEachRow\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'{"o":{"a":1,"b":{"c":2,"d":[1,2,3]}}}\n')))}d.isMDXComponent=!0}}]);