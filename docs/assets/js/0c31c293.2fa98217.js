"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[10625],{3905:function(e,n,r){r.d(n,{Zo:function(){return c},kt:function(){return f}});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=t.createContext({}),u=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},c=function(e){var n=u(e.components);return t.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(r),f=o,y=m["".concat(l,".").concat(f)]||m[f]||p[f]||a;return r?t.createElement(y,i(i({ref:n},c),{},{components:r})):t.createElement(y,i({ref:n},c))}));function f(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},70932:function(e,n,r){r.r(n),r.d(n,{assets:function(){return c},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var t=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],s={sidebar_position:61,sidebar_label:"\u0424\u0443\u043d\u043a\u0446\u0438\u044f ArrayJoin"},l="\u0424\u0443\u043d\u043a\u0446\u0438\u044f ArrayJoin",u={unversionedId:"ru/sql-reference/functions/array-join",id:"ru/sql-reference/functions/array-join",title:"\u0424\u0443\u043d\u043a\u0446\u0438\u044f ArrayJoin",description:"functions_arrayjoin}",source:"@site/docs/ru/sql-reference/functions/array-join.md",sourceDirName:"ru/sql-reference/functions",slug:"/ru/sql-reference/functions/array-join",permalink:"/docs/ru/sql-reference/functions/array-join",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/functions/array-join.md",tags:[],version:"current",sidebarPosition:61,frontMatter:{sidebar_position:61,sidebar_label:"\u0424\u0443\u043d\u043a\u0446\u0438\u044f ArrayJoin"},sidebar:"russia",previous:{title:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0430 IN",permalink:"/docs/ru/sql-reference/functions/in-functions"},next:{title:"\u0413\u0435\u043e-\u0434\u0430\u043d\u043d\u044b\u0435",permalink:"/docs/ru/sql-reference/functions/geo/"}},c={},p=[],m={toc:p};function f(e){var n=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,t.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"functions_arrayjoin"},"\u0424\u0443\u043d\u043a\u0446\u0438\u044f ArrayJoin"),(0,a.kt)("p",null,"\u042d\u0442\u043e \u0441\u043e\u0432\u0441\u0435\u043c \u043d\u0435\u043e\u0431\u044b\u0447\u043d\u0430\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u044f."),(0,a.kt)("p",null,"\u041e\u0431\u044b\u0447\u043d\u044b\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u043d\u0435 \u0438\u0437\u043c\u0435\u043d\u044f\u044e\u0442 \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u043e \u0441\u0442\u0440\u043e\u043a, \u0430 \u043b\u0438\u0448\u044c \u0438\u0437\u043c\u0435\u043d\u044f\u044e\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0432 \u043a\u0430\u0436\u0434\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0435 (map).\n\u0410\u0433\u0440\u0435\u0433\u0430\u0442\u043d\u044b\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u044e\u0442 \u0441\u0432\u0451\u0440\u0442\u043a\u0443 \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u0430 \u0441\u0442\u0440\u043e\u043a (fold, reduce).\n\u0424\u0443\u043d\u043a\u0446\u0438\u044f ",(0,a.kt)("inlineCode",{parentName:"p"},"arrayJoin")," \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442 \u0440\u0430\u0437\u043c\u043d\u043e\u0436\u0435\u043d\u0438\u0435 \u043a\u0430\u0436\u0434\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0438 \u0432 \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u043e \u0441\u0442\u0440\u043e\u043a (unfold)."),(0,a.kt)("p",null,"\u0424\u0443\u043d\u043a\u0446\u0438\u044f \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u0442 \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0430 \u043c\u0430\u0441\u0441\u0438\u0432, \u0438 \u0440\u0430\u0437\u043c\u043d\u043e\u0436\u0430\u0435\u0442 \u0438\u0441\u0445\u043e\u0434\u043d\u0443\u044e \u0441\u0442\u0440\u043e\u043a\u0443 \u0432 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u0442\u0440\u043e\u043a - \u043f\u043e \u0447\u0438\u0441\u043b\u0443 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u043c\u0430\u0441\u0441\u0438\u0432\u0430.\n\u0412\u0441\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0432 \u0441\u0442\u043e\u043b\u0431\u0446\u0430\u0445 \u043f\u0440\u043e\u0441\u0442\u043e \u043a\u043e\u043f\u0438\u0440\u0443\u044e\u0442\u0441\u044f, \u043a\u0440\u043e\u043c\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0432 \u0441\u0442\u043e\u043b\u0431\u0446\u0435 \u0441 \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435\u043c \u044d\u0442\u043e\u0439 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 - \u043e\u043d \u0437\u0430\u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f \u043d\u0430 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043c\u0430\u0441\u0441\u0438\u0432\u0430."),(0,a.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT arrayJoin([1, 2, 3] AS src) AS dst, 'Hello', src\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500dst\u2500\u252c\u2500\\'Hello\\'\u2500\u252c\u2500src\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502   1 \u2502 Hello     \u2502 [1,2,3] \u2502\n\u2502   2 \u2502 Hello     \u2502 [1,2,3] \u2502\n\u2502   3 \u2502 Hello     \u2502 [1,2,3] \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,"\u0424\u0443\u043d\u043a\u0446\u0438\u044f ",(0,a.kt)("inlineCode",{parentName:"p"},"arrayJoin")," \u0432\u043b\u0438\u044f\u0435\u0442 \u043d\u0430 \u0432\u0441\u0435 \u0441\u0435\u043a\u0446\u0438\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0430, \u0432\u043a\u043b\u044e\u0447\u0430\u044f \u0441\u0435\u043a\u0446\u0438\u044e ",(0,a.kt)("inlineCode",{parentName:"p"},"WHERE"),". \u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435 \u043d\u0430 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 2, \u0445\u043e\u0442\u044f \u043f\u043e\u0434\u0437\u0430\u043f\u0440\u043e\u0441 \u0432\u0435\u0440\u043d\u0443\u043b 1 \u0441\u0442\u0440\u043e\u043a\u0443."),(0,a.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT sum(1) AS impressions\nFROM\n(\n    SELECT ['Istanbul', 'Berlin', 'Bobruisk'] AS cities\n)\nWHERE arrayJoin(cities) IN ['Istanbul', 'Berlin'];\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500impressions\u2500\u2510\n\u2502           2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,"\u0412 \u0437\u0430\u043f\u0440\u043e\u0441\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u043e \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0444\u0443\u043d\u043a\u0446\u0438\u0439 ",(0,a.kt)("inlineCode",{parentName:"p"},"arrayJoin"),". \u0412 \u044d\u0442\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435, \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0435 \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0434\u0435\u043b\u0430\u0435\u0442\u0441\u044f \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0440\u0430\u0437 \u0438 \u0441\u0442\u0440\u043e\u043a\u0438 \u043f\u0435\u0440\u0435\u043c\u043d\u043e\u0436\u0430\u044e\u0442\u0441\u044f."),(0,a.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    sum(1) AS impressions,\n    arrayJoin(cities) AS city,\n    arrayJoin(browsers) AS browser\nFROM\n(\n    SELECT\n        ['Istanbul', 'Berlin', 'Bobruisk'] AS cities,\n        ['Firefox', 'Chrome', 'Chrome'] AS browsers\n)\nGROUP BY\n    2,\n    3\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500impressions\u2500\u252c\u2500city\u2500\u2500\u2500\u2500\u2500\u252c\u2500browser\u2500\u2510\n\u2502           2 \u2502 Istanbul \u2502 Chrome  \u2502\n\u2502           1 \u2502 Istanbul \u2502 Firefox \u2502\n\u2502           2 \u2502 Berlin   \u2502 Chrome  \u2502\n\u2502           1 \u2502 Berlin   \u2502 Firefox \u2502\n\u2502           2 \u2502 Bobruisk \u2502 Chrome  \u2502\n\u2502           1 \u2502 Bobruisk \u2502 Firefox \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435 \u043d\u0430 \u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441 ",(0,a.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/statements/select/array-join"},"ARRAY JOIN")," \u0432 \u0437\u0430\u043f\u0440\u043e\u0441\u0435 SELECT, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0431\u043e\u043b\u0435\u0435 \u0448\u0438\u0440\u043e\u043a\u0438\u0435 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438.\n",(0,a.kt)("inlineCode",{parentName:"p"},"ARRAY JOIN")," \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u0442\u044c \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043c\u0430\u0441\u0441\u0438\u0432\u043e\u0432 \u0441 \u043e\u0434\u0438\u043d\u0430\u043a\u043e\u0432\u044b\u043c \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e\u043c \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u0437\u0430 \u0440\u0430\u0437."),(0,a.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    sum(1) AS impressions,\n    city,\n    browser\nFROM\n(\n    SELECT\n        ['Istanbul', 'Berlin', 'Bobruisk'] AS cities,\n        ['Firefox', 'Chrome', 'Chrome'] AS browsers\n)\nARRAY JOIN\n    cities AS city,\n    browsers AS browser\nGROUP BY\n    2,\n    3\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500impressions\u2500\u252c\u2500city\u2500\u2500\u2500\u2500\u2500\u252c\u2500browser\u2500\u2510\n\u2502           1 \u2502 Istanbul \u2502 Firefox \u2502\n\u2502           1 \u2502 Berlin   \u2502 Chrome  \u2502\n\u2502           1 \u2502 Bobruisk \u2502 Chrome  \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,"\u0418\u043b\u0438 \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c ",(0,a.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/tuple"},"Tuple")),(0,a.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    sum(1) AS impressions,\n    (arrayJoin(arrayZip(cities, browsers)) AS t).1 AS city,\n    t.2 AS browser\nFROM\n(\n    SELECT\n        ['Istanbul', 'Berlin', 'Bobruisk'] AS cities,\n        ['Firefox', 'Chrome', 'Chrome'] AS browsers\n)\nGROUP BY\n    2,\n    3\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500impressions\u2500\u252c\u2500city\u2500\u2500\u2500\u2500\u2500\u252c\u2500browser\u2500\u2510\n\u2502           1 \u2502 Istanbul \u2502 Firefox \u2502\n\u2502           1 \u2502 Berlin   \u2502 Chrome  \u2502\n\u2502           1 \u2502 Bobruisk \u2502 Chrome  \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}f.isMDXComponent=!0}}]);