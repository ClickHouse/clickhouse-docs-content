"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[98381],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,u=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=i(n),f=a,g=m["".concat(c,".").concat(f)]||m[f]||l[f]||u;return n?r.createElement(g,s(s({ref:t},p),{},{components:n})):r.createElement(g,s({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var u=n.length,s=new Array(u);s[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var i=2;i<u;i++)s[i]=n[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},41528:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return l}});var r=n(87462),a=n(63366),u=(n(67294),n(3905)),s=["components"],o={slug:"/ru/sql-reference/aggregate-functions/reference/summap",sidebar_position:141},c=void 0,i={unversionedId:"ru/sql-reference/aggregate-functions/reference/summap",id:"ru/sql-reference/aggregate-functions/reference/summap",title:"summap",description:"sumMap(key, value), sumMap(Tuple(key, value))",source:"@site/docs/ru/sql-reference/aggregate-functions/reference/summap.md",sourceDirName:"ru/sql-reference/aggregate-functions/reference",slug:"/ru/sql-reference/aggregate-functions/reference/summap",permalink:"/docs/ru/sql-reference/aggregate-functions/reference/summap",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/aggregate-functions/reference/summap.md",tags:[],version:"current",sidebarPosition:141,frontMatter:{slug:"/ru/sql-reference/aggregate-functions/reference/summap",sidebar_position:141},sidebar:"russia",previous:{title:"deltaSumTimestamp",permalink:"/docs/ru/sql-reference/aggregate-functions/reference/deltasumtimestamp"},next:{title:"minMap",permalink:"/docs/ru/sql-reference/aggregate-functions/reference/minmap"}},p={},l=[{value:"sumMap(key, value), sumMap(Tuple(key, value))",id:"agg_functions-summap",level:2}],m={toc:l};function f(e){var t=e.components,n=(0,a.Z)(e,s);return(0,u.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("h2",{id:"agg_functions-summap"},"sumMap(key, value), sumMap(Tuple(key, value))"),(0,u.kt)("p",null,"\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442 \u0441\u0443\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043c\u0430\u0441\u0441\u0438\u0432\u0430 \u2018value\u2019 \u043f\u043e \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u043c \u043a\u043b\u044e\u0447\u0430\u043c \u0437\u0430\u0434\u0430\u043d\u043d\u044b\u043c \u0432 \u043c\u0430\u0441\u0441\u0438\u0432\u0435 \u2018key\u2019.\n\u041f\u0435\u0440\u0435\u0434\u0430\u0447\u0430 \u043a\u043e\u0440\u0442\u0435\u0436\u0430 \u043a\u043b\u044e\u0447\u0435\u0439 \u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u043c\u0430\u0441\u0441\u0438\u0432\u0430 \u0441\u0438\u043d\u043e\u043d\u0438\u043c\u0438\u0447\u043d\u043e \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0435 \u0434\u0432\u0443\u0445 \u043c\u0430\u0441\u0441\u0438\u0432\u043e\u0432 \u043a\u043b\u044e\u0447\u0435\u0439 \u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439.\n\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u0432 \u2018key\u2019 \u0438 \u2018value\u2019 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u043e\u0434\u0438\u043d\u0430\u043a\u043e\u0432\u044b\u043c \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0438, \u0434\u043b\u044f \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442 \u0441\u0443\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435.\n\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043a\u043e\u0440\u0442\u0435\u0436 \u0438\u0437 \u0434\u0432\u0443\u0445 \u043c\u0430\u0441\u0441\u0438\u0432\u043e\u0432 - \u043a\u043b\u044e\u0447\u0438 \u0432 \u043e\u0442\u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u043c \u043f\u043e\u0440\u044f\u0434\u043a\u0435 \u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f, \u043f\u0440\u043e\u0441\u0443\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u043f\u043e \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u043c \u043a\u043b\u044e\u0447\u0430\u043c."),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440:")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE sum_map(\n    date Date,\n    timeslot DateTime,\n    statusMap Nested(\n        status UInt16,\n        requests UInt64\n      ),\n      statusMapTuple Tuple(Array(Int32), Array(Int32))\n) ENGINE = Log;\nINSERT INTO sum_map VALUES\n    ('2000-01-01', '2000-01-01 00:00:00', [1, 2, 3], [10, 10, 10], ([1, 2, 3], [10, 10, 10])),\n    ('2000-01-01', '2000-01-01 00:00:00', [3, 4, 5], [10, 10, 10], ([3, 4, 5], [10, 10, 10])),\n    ('2000-01-01', '2000-01-01 00:01:00', [4, 5, 6], [10, 10, 10], ([4, 5, 6], [10, 10, 10])),\n    ('2000-01-01', '2000-01-01 00:01:00', [6, 7, 8], [10, 10, 10], ([6, 7, 8], [10, 10, 10]));\n\nSELECT\n    timeslot,\n    sumMap(statusMap.status, statusMap.requests),\n    sumMap(statusMapTuple)\nFROM sum_map\nGROUP BY timeslot\n")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500timeslot\u2500\u252c\u2500sumMap(statusMap.status, statusMap.requests)\u2500\u252c\u2500sumMap(statusMapTuple)\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 2000-01-01 00:00:00 \u2502 ([1,2,3,4,5],[10,10,20,10,10])               \u2502 ([1,2,3,4,5],[10,10,20,10,10]) \u2502\n\u2502 2000-01-01 00:01:00 \u2502 ([4,5,6,7,8],[10,10,20,10,10])               \u2502 ([4,5,6,7,8],[10,10,20,10,10]) \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}f.isMDXComponent=!0}}]);