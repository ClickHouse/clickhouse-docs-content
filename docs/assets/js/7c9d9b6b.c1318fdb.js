"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[19656],{3905:function(e,t,n){n.d(t,{Zo:function(){return i},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},i=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||s;return n?r.createElement(f,l(l({ref:t},i),{},{components:n})):r.createElement(f,l({ref:t},i))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,l=new Array(s);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<s;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},41149:function(e,t,n){n.r(t),n.d(t,{assets:function(){return i},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var r=n(87462),a=n(63366),s=(n(67294),n(3905)),l=["components"],o={},c="Nested(Name1 Type1, Name2 Type2, \u2026)",u={unversionedId:"zh/sql-reference/data-types/nested-data-structures/nested",id:"zh/sql-reference/data-types/nested-data-structures/nested",title:"Nested(Name1 Type1, Name2 Type2, \u2026)",description:"nestedname1-type1-name2-type2}",source:"@site/docs/zh/sql-reference/data-types/nested-data-structures/nested.md",sourceDirName:"zh/sql-reference/data-types/nested-data-structures",slug:"/zh/sql-reference/data-types/nested-data-structures/nested",permalink:"/docs/zh/sql-reference/data-types/nested-data-structures/nested",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/data-types/nested-data-structures/nested.md",tags:[],version:"current",frontMatter:{},sidebar:"chinese",previous:{title:"\u5d4c\u5957\u6570\u636e\u7ed3\u6784",permalink:"/docs/zh/sql-reference/data-types/nested-data-structures/"},next:{title:"\u53ef\u4e3a\u7a7a\uff08\u7c7b\u578b\u540d\u79f0)",permalink:"/docs/zh/sql-reference/data-types/nullable"}},i={},p=[],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,s.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"nestedname1-type1-name2-type2"},"Nested(Name1 Type1, Name2 Type2, \u2026)"),(0,s.kt)("p",null,"\u5d4c\u5957\u6570\u636e\u7ed3\u6784\u7c7b\u4f3c\u4e8e\u5d4c\u5957\u8868\u3002\u5d4c\u5957\u6570\u636e\u7ed3\u6784\u7684\u53c2\u6570\uff08\u5217\u540d\u548c\u7c7b\u578b\uff09\u4e0e CREATE \u67e5\u8be2\u7c7b\u4f3c\u3002\u6bcf\u4e2a\u8868\u53ef\u4ee5\u5305\u542b\u4efb\u610f\u591a\u884c\u5d4c\u5957\u6570\u636e\u7ed3\u6784\u3002"),(0,s.kt)("p",null,"\u793a\u4f8b:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE test.visits\n(\n    CounterID UInt32,\n    StartDate Date,\n    Sign Int8,\n    IsNew UInt8,\n    VisitID UInt64,\n    UserID UInt64,\n    ...\n    Goals Nested\n    (\n        ID UInt32,\n        Serial UInt32,\n        EventTime DateTime,\n        Price Int64,\n        OrderID String,\n        CurrencyID UInt32\n    ),\n    ...\n) ENGINE = CollapsingMergeTree(StartDate, intHash32(UserID), (CounterID, StartDate, intHash32(UserID), VisitID), 8192, Sign)\n")),(0,s.kt)("p",null,"\u4e0a\u8ff0\u793a\u4f8b\u58f0\u660e\u4e86 ",(0,s.kt)("inlineCode",{parentName:"p"},"Goals")," \u8fd9\u79cd\u5d4c\u5957\u6570\u636e\u7ed3\u6784\uff0c\u5b83\u5305\u542b\u8bbf\u5ba2\u8f6c\u5316\u76f8\u5173\u7684\u6570\u636e\uff08\u8bbf\u5ba2\u8fbe\u5230\u7684\u76ee\u6807\uff09\u3002\u5728 \u2018visits\u2019 \u8868\u4e2d\u6bcf\u4e00\u884c\u90fd\u53ef\u4ee5\u5bf9\u5e94\u96f6\u4e2a\u6216\u8005\u4efb\u610f\u4e2a\u8f6c\u5316\u6570\u636e\u3002"),(0,s.kt)("p",null,"\u53ea\u652f\u6301\u4e00\u7ea7\u5d4c\u5957\u3002\u5d4c\u5957\u7ed3\u6784\u7684\u5217\u4e2d\uff0c\u82e5\u5217\u7684\u7c7b\u578b\u662f\u6570\u7ec4\u7c7b\u578b\uff0c\u90a3\u4e48\u8be5\u5217\u5176\u5b9e\u548c\u591a\u7ef4\u6570\u7ec4\u662f\u76f8\u540c\u7684\uff0c\u6240\u4ee5\u76ee\u524d\u5d4c\u5957\u5c42\u7ea7\u7684\u652f\u6301\u5f88\u5c40\u9650\uff08MergeTree \u5f15\u64ce\u4e2d\u4e0d\u652f\u6301\u5b58\u50a8\u8fd9\u6837\u7684\u5217\uff09"),(0,s.kt)("p",null,"\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u5904\u7406\u5d4c\u5957\u6570\u636e\u7ed3\u6784\u65f6\uff0c\u4f1a\u6307\u5b9a\u4e00\u4e2a\u5355\u72ec\u7684\u5217\u3002\u4e3a\u4e86\u8fd9\u6837\u5b9e\u73b0\uff0c\u5217\u7684\u540d\u79f0\u4f1a\u4e0e\u70b9\u53f7\u8fde\u63a5\u8d77\u6765\u3002\u8fd9\u4e9b\u5217\u6784\u6210\u4e86\u4e00\u7ec4\u5339\u914d\u7c7b\u578b\u3002\u5728\u540c\u4e00\u6761\u5d4c\u5957\u6570\u636e\u4e2d\uff0c\u6240\u6709\u7684\u5217\u90fd\u5177\u6709\u76f8\u540c\u7684\u957f\u5ea6\u3002"),(0,s.kt)("p",null,"\u793a\u4f8b:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    Goals.ID,\n    Goals.EventTime\nFROM test.visits\nWHERE CounterID = 101500 AND length(Goals.ID) < 5\nLIMIT 10\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500Goals.ID\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500Goals.EventTime\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 [1073752,591325,591325]        \u2502 ['2014-03-17 16:38:10','2014-03-17 16:38:48','2014-03-17 16:42:27']                       \u2502\n\u2502 [1073752]                      \u2502 ['2014-03-17 00:28:25']                                                                   \u2502\n\u2502 [1073752]                      \u2502 ['2014-03-17 10:46:20']                                                                   \u2502\n\u2502 [1073752,591325,591325,591325] \u2502 ['2014-03-17 13:59:20','2014-03-17 22:17:55','2014-03-17 22:18:07','2014-03-17 22:18:51'] \u2502\n\u2502 []                             \u2502 []                                                                                        \u2502\n\u2502 [1073752,591325,591325]        \u2502 ['2014-03-17 11:37:06','2014-03-17 14:07:47','2014-03-17 14:36:21']                       \u2502\n\u2502 []                             \u2502 []                                                                                        \u2502\n\u2502 []                             \u2502 []                                                                                        \u2502\n\u2502 [591325,1073752]               \u2502 ['2014-03-17 00:46:05','2014-03-17 00:46:05']                                             \u2502\n\u2502 [1073752,591325,591325,591325] \u2502 ['2014-03-17 13:28:33','2014-03-17 13:30:26','2014-03-17 18:51:21','2014-03-17 18:51:45'] \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,s.kt)("p",null,"\u6240\u4ee5\u53ef\u4ee5\u7b80\u5355\u5730\u628a\u5d4c\u5957\u6570\u636e\u7ed3\u6784\u5f53\u505a\u662f\u6240\u6709\u5217\u90fd\u662f\u76f8\u540c\u957f\u5ea6\u7684\u591a\u5217\u6570\u7ec4\u3002"),(0,s.kt)("p",null,"SELECT \u67e5\u8be2\u53ea\u6709\u5728\u4f7f\u7528 ARRAY JOIN \u7684\u65f6\u5019\u624d\u53ef\u4ee5\u6307\u5b9a\u6574\u4e2a\u5d4c\u5957\u6570\u636e\u7ed3\u6784\u7684\u540d\u79f0\u3002\u66f4\u591a\u4fe1\u606f\uff0c\u53c2\u8003 \xabARRAY JOIN \u5b50\u53e5\xbb\u3002\u793a\u4f8b\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    Goal.ID,\n    Goal.EventTime\nFROM test.visits\nARRAY JOIN Goals AS Goal\nWHERE CounterID = 101500 AND length(Goals.ID) < 5\nLIMIT 10\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500Goal.ID\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500Goal.EventTime\u2500\u2510\n\u2502 1073752 \u2502 2014-03-17 16:38:10 \u2502\n\u2502  591325 \u2502 2014-03-17 16:38:48 \u2502\n\u2502  591325 \u2502 2014-03-17 16:42:27 \u2502\n\u2502 1073752 \u2502 2014-03-17 00:28:25 \u2502\n\u2502 1073752 \u2502 2014-03-17 10:46:20 \u2502\n\u2502 1073752 \u2502 2014-03-17 13:59:20 \u2502\n\u2502  591325 \u2502 2014-03-17 22:17:55 \u2502\n\u2502  591325 \u2502 2014-03-17 22:18:07 \u2502\n\u2502  591325 \u2502 2014-03-17 22:18:51 \u2502\n\u2502 1073752 \u2502 2014-03-17 11:37:06 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,s.kt)("p",null,"\u4e0d\u80fd\u5bf9\u6574\u4e2a\u5d4c\u5957\u6570\u636e\u7ed3\u6784\u6267\u884c SELECT\u3002\u53ea\u80fd\u660e\u786e\u5217\u51fa\u5c5e\u4e8e\u5b83\u4e00\u90e8\u5206\u5217\u3002"),(0,s.kt)("p",null,"\u5bf9\u4e8e INSERT \u67e5\u8be2\uff0c\u53ef\u4ee5\u5355\u72ec\u5730\u4f20\u5165\u6240\u6709\u5d4c\u5957\u6570\u636e\u7ed3\u6784\u4e2d\u7684\u5217\u6570\u7ec4\uff08\u5047\u5982\u5b83\u4eec\u662f\u5355\u72ec\u7684\u5217\u6570\u7ec4\uff09\u3002\u5728\u63d2\u5165\u8fc7\u7a0b\u4e2d\uff0c\u7cfb\u7edf\u4f1a\u68c0\u67e5\u5b83\u4eec\u662f\u5426\u6709\u76f8\u540c\u7684\u957f\u5ea6\u3002"),(0,s.kt)("p",null,"\u5bf9\u4e8e DESCRIBE \u67e5\u8be2\uff0c\u5d4c\u5957\u6570\u636e\u7ed3\u6784\u4e2d\u7684\u5217\u4f1a\u4ee5\u76f8\u540c\u7684\u65b9\u5f0f\u5206\u522b\u5217\u51fa\u6765\u3002"),(0,s.kt)("p",null,"ALTER \u67e5\u8be2\u5bf9\u5d4c\u5957\u6570\u636e\u7ed3\u6784\u7684\u64cd\u4f5c\u975e\u5e38\u6709\u9650\u3002"))}m.isMDXComponent=!0}}]);