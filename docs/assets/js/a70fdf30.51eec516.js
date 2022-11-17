"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[51480],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),o=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},c=function(e){var t=o(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=o(a),k=r,d=m["".concat(i,".").concat(k)]||m[k]||u[k]||l;return a?n.createElement(d,p(p({ref:t},c),{},{components:a})):n.createElement(d,p({ref:t},c))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,p=new Array(l);p[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,p[1]=s;for(var o=2;o<l;o++)p[o]=a[o];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},83010:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>o});var n=a(87462),r=(a(67294),a(3905));const l={slug:"/zh/sql-reference/data-types/map",sidebar_position:65,sidebar_label:"Map(key, value)"},p="Map(key, value)",s={unversionedId:"zh/sql-reference/data-types/map",id:"zh/sql-reference/data-types/map",title:"Map(key, value)",description:"data_type-map}",source:"@site/docs/zh/sql-reference/data-types/map.md",sourceDirName:"zh/sql-reference/data-types",slug:"/zh/sql-reference/data-types/map",permalink:"/docs/zh/sql-reference/data-types/map",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/data-types/map.md",tags:[],version:"current",sidebarPosition:65,frontMatter:{slug:"/zh/sql-reference/data-types/map",sidebar_position:65,sidebar_label:"Map(key, value)"},sidebar:"chinese",previous:{title:"Geo",permalink:"/docs/zh/sql-reference/data-types/geo"},next:{title:"AggregateFunction(name, types_of_arguments\u2026)",permalink:"/docs/zh/sql-reference/data-types/aggregatefunction"}},i={},o=[{value:"\u5c06Tuple\u7c7b\u578b\u8f6c\u6362\u6210Map\u7c7b\u578b",id:"map-and-tuple",level:2},{value:"Map.keys \u548c Map.values \u5355\u72ec\u4f7f\u7528",id:"map-subcolumns",level:2}],c={toc:o};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"data_type-map"},"Map(key, value)"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Map(key, value)")," \u53ef\u4ee5\u5b58\u50a8 ",(0,r.kt)("inlineCode",{parentName:"p"},"key:value")," \u952e\u503c\u5bf9\u7c7b\u578b\u7684\u6570\u636e\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u53c2\u6570")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"key")," \u2014 \u952e\u503c\u5bf9\u7684key\uff0c\u7c7b\u578b\u53ef\u4ee5\u662f\uff1a",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/string"},"String"),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/int-uint"},"Integer"),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/lowcardinality"},"LowCardinality"),", \u6216\u8005 ",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/fixedstring"},"FixedString"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"value")," \u2014 \u952e\u503c\u5bf9\u7684value\uff0c\u7c7b\u578b\u53ef\u4ee5\u662f\uff1a",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/string"},"String"),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/int-uint"},"Integer"),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/array"},"Array"),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/lowcardinality"},"LowCardinality"),", \u6216\u8005 ",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/fixedstring"},"FixedString"),".")),(0,r.kt)("p",null,"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"a['key']")," \u53ef\u4ee5\u4ece ",(0,r.kt)("inlineCode",{parentName:"p"},"a Map('key', 'value')")," \u7c7b\u578b\u7684\u5217\u4e2d\u83b7\u53d6\u5230\u5bf9\u5e94\u7684\u503c\uff0c\u8fd9\u662f\u4e00\u4e2a\u7ebf\u6027\u590d\u6742\u5ea6\u7684\u67e5\u8be2\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,r.kt)("p",null,"\u793a\u4f8b\u8868:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE table_map (a Map(String, UInt64)) ENGINE=Memory;\nINSERT INTO table_map VALUES ({'key1':1, 'key2':10}), ({'key1':2,'key2':20}), ({'key1':3,'key2':30});\n")),(0,r.kt)("p",null,"\u67e5\u8be2 ",(0,r.kt)("inlineCode",{parentName:"p"},"key2")," \u7684\u6240\u6709\u503c:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT a['key2'] FROM table_map;\n")),(0,r.kt)("p",null,"\u67e5\u8be2\u7ed3\u679c:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500arrayElement(a, 'key2')\u2500\u2510\n\u2502                      10 \u2502\n\u2502                      20 \u2502\n\u2502                      30 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"\u5982\u679c\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"Map()")," \u7c7b\u578b\u7684\u5217\u4e2d\uff0c\u67e5\u8be2\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"key")," \u503c\u4e0d\u5b58\u5728\uff0c\u90a3\u4e48\u6839\u636e ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," \u7684\u7c7b\u578b\uff0c\u67e5\u8be2\u7ed3\u679c\u5c06\u4f1a\u662f\u6570\u5b570\uff0c\u7a7a\u5b57\u7b26\u4e32\u6216\u8005\u7a7a\u6570\u7ec4\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO table_map VALUES ({'key3':100}), ({});\nSELECT a['key3'] FROM table_map;\n")),(0,r.kt)("p",null,"\u67e5\u8be2\u7ed3\u679c:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500arrayElement(a, 'key3')\u2500\u2510\n\u2502                     100 \u2502\n\u2502                       0 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500arrayElement(a, 'key3')\u2500\u2510\n\u2502                       0 \u2502\n\u2502                       0 \u2502\n\u2502                       0 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h2",{id:"map-and-tuple"},"\u5c06Tuple\u7c7b\u578b\u8f6c\u6362\u6210Map\u7c7b\u578b"),(0,r.kt)("p",null,"\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/functions/type-conversion-functions#type_conversion_function-cast"},"CAST")," \u65b9\u6cd5\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"Tuple()")," \u8f6c\u6362\u6210 ",(0,r.kt)("inlineCode",{parentName:"p"},"Map()")," \uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT CAST(([1, 2, 3], ['Ready', 'Steady', 'Go']), 'Map(UInt8, String)') AS map;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500map\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 {1:'Ready',2:'Steady',3:'Go'} \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h2",{id:"map-subcolumns"},"Map.keys \u548c Map.values \u5355\u72ec\u4f7f\u7528"),(0,r.kt)("p",null,"\u4e3a\u4e86\u66f4\u597d\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"Map")," \u7c7b\u578b\uff0c\u5728\u4e00\u5b9a\u7684\u573a\u666f\u4e0b\uff0c\u53ef\u4ee5\u5355\u72ec\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"keys")," \u6216\u8005 ",(0,r.kt)("inlineCode",{parentName:"p"},"values"),"\uff0c\u800c\u4e0d\u9700\u8981\u5c06\u6574\u4e2a\u5217\u7684\u6570\u636e\u90fd\u8bfb\u53d6\u51fa\u6765\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,r.kt)("p",null,"\u67e5\u8be2:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE t_map (`a` Map(String, UInt64)) ENGINE = Memory;\nINSERT INTO t_map VALUES (map('key1', 1, 'key2', 2, 'key3', 3));\nSELECT a.keys FROM t_map;\nSELECT a.values FROM t_map;\n")),(0,r.kt)("p",null,"\u7ed3\u679c:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500a.keys\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 ['key1','key2','key3'] \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500a.values\u2500\u2510\n\u2502 [1,2,3]  \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u53e6\u8bf7\u53c2\u9605")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/functions/tuple-map-functions#function-map"},"map()")," function"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/functions/type-conversion-functions#type_conversion_function-cast"},"CAST()")," function")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/zh/sql-reference/data-types/map/"},"Original article")," "))}u.isMDXComponent=!0}}]);