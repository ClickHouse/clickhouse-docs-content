"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[2712],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(n),f=a,d=m["".concat(c,".").concat(f)]||m[f]||i[f]||l;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},86721:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return i}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),o=["components"],s={sidebar_position:43,sidebar_label:"DETACH"},c="DETACH",p={unversionedId:"ru/sql-reference/statements/detach",id:"ru/sql-reference/statements/detach",title:"DETACH",description:"detach-statement}",source:"@site/docs/ru/sql-reference/statements/detach.md",sourceDirName:"ru/sql-reference/statements",slug:"/ru/sql-reference/statements/detach",permalink:"/docs/ru/sql-reference/statements/detach",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/statements/detach.md",tags:[],version:"current",sidebarPosition:43,frontMatter:{sidebar_position:43,sidebar_label:"DETACH"},sidebar:"russia",previous:{title:"DESCRIBE",permalink:"/docs/ru/sql-reference/statements/describe-table"},next:{title:"DROP",permalink:"/docs/ru/sql-reference/statements/drop"}},u={},i=[],m={toc:i};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"detach-statement"},"DETACH"),(0,l.kt)("p",null,'\u0417\u0430\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0441\u0435\u0440\u0432\u0435\u0440 "\u0437\u0430\u0431\u044b\u0442\u044c" \u043e \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043e\u0432\u0430\u043d\u0438\u0438 \u0442\u0430\u0431\u043b\u0438\u0446\u044b, \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0438\u043b\u0438 \u0441\u043b\u043e\u0432\u0430\u0440\u044f.'),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"DETACH TABLE|VIEW|DICTIONARY [IF EXISTS] [db.]name [ON CLUSTER cluster] [PERMANENTLY]\n")),(0,l.kt)("p",null,"\u0422\u0430\u043a\u043e\u0439 \u0437\u0430\u043f\u0440\u043e\u0441 \u043d\u0435 \u0443\u0434\u0430\u043b\u044f\u0435\u0442 \u043d\u0438 \u0434\u0430\u043d\u043d\u044b\u0435, \u043d\u0438 \u043c\u0435\u0442\u0430\u0434\u0430\u043d\u043d\u044b\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u044b, \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0438\u043b\u0438 \u0441\u043b\u043e\u0432\u0430\u0440\u044f. \u0415\u0441\u043b\u0438 \u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u043d\u0435 \u0431\u044b\u043b\u043e \u043f\u0435\u0440\u043c\u0430\u043d\u0435\u043d\u0442\u043d\u044b\u043c (\u0437\u0430\u043f\u0440\u043e\u0441 \u0431\u0435\u0437 \u043a\u043b\u044e\u0447\u0435\u0432\u043e\u0433\u043e \u0441\u043b\u043e\u0432\u0430 ",(0,l.kt)("inlineCode",{parentName:"p"},"PERMANENTLY"),"), \u0442\u043e \u043f\u0440\u0438 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u043c \u0437\u0430\u043f\u0443\u0441\u043a\u0435 \u0441\u0435\u0440\u0432\u0435\u0440 \u043f\u0440\u043e\u0447\u0438\u0442\u0430\u0435\u0442 \u043c\u0435\u0442\u0430\u0434\u0430\u043d\u043d\u044b\u0435 \u0438 \u0441\u043d\u043e\u0432\u0430 \u0443\u0437\u043d\u0430\u0435\u0442 \u043e \u0442\u0430\u0431\u043b\u0438\u0446\u0435/\u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0438/\u0441\u043b\u043e\u0432\u0430\u0440\u0435. \u0415\u0441\u043b\u0438 \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u044c \u0431\u044b\u043b\u0430 \u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0430 \u043f\u0435\u0440\u043c\u0430\u043d\u0435\u043d\u0442\u043d\u043e, \u0442\u043e \u0441\u0435\u0440\u0432\u0435\u0440 \u043d\u0435 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442 \u0438\u0445 \u043e\u0431\u0440\u0430\u0442\u043d\u043e \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438."),(0,l.kt)("p",null,"\u041d\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e \u043e\u0442 \u0442\u043e\u0433\u043e, \u043a\u0430\u043a\u0438\u043c \u0441\u043f\u043e\u0441\u043e\u0431\u043e\u043c \u0442\u0430\u0431\u043b\u0438\u0446\u0430 \u0431\u044b\u043b\u0430 \u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0430, \u0435\u0435 \u043c\u043e\u0436\u043d\u043e \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u043e\u0431\u0440\u0430\u0442\u043d\u043e \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0437\u0430\u043f\u0440\u043e\u0441\u0430 ",(0,l.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/statements/attach"},"ATTACH"),". \u0421\u0438\u0441\u0442\u0435\u043c\u043d\u044b\u0435 log \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0442\u0430\u043a\u0436\u0435 \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u044b \u043e\u0431\u0440\u0430\u0442\u043d\u043e (\u043a \u043f\u0440\u0438\u043c\u0435\u0440\u0443, ",(0,l.kt)("inlineCode",{parentName:"p"},"query_log"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"text_log"),' \u0438 \u0434\u0440.). \u0414\u0440\u0443\u0433\u0438\u0435 \u0441\u0438\u0441\u0442\u0435\u043c\u043d\u044b\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u043d\u0435 \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u044b \u043e\u0431\u0440\u0430\u0442\u043d\u043e, \u043d\u043e \u043d\u0430 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u043c \u0437\u0430\u043f\u0443\u0441\u043a\u0435 \u0441\u0435\u0440\u0432\u0435\u0440 \u0441\u043d\u043e\u0432\u0430 "\u0432\u0441\u043f\u043e\u043c\u043d\u0438\u0442" \u043e\u0431 \u044d\u0442\u0438\u0445 \u0442\u0430\u0431\u043b\u0438\u0446\u0430\u0445.'),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ATTACH MATERIALIZED VIEW")," \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d \u0441 \u043a\u0440\u0430\u0442\u043a\u0438\u043c \u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441\u043e\u043c (\u0431\u0435\u0437 ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT"),"), \u043d\u043e \u043c\u043e\u0436\u043d\u043e \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0437\u0430\u043f\u0440\u043e\u0441\u0430 ",(0,l.kt)("inlineCode",{parentName:"p"},"ATTACH TABLE"),"."),(0,l.kt)("p",null,"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435, \u0447\u0442\u043e \u043d\u0435\u043b\u044c\u0437\u044f \u043f\u0435\u0440\u043c\u0430\u043d\u0435\u043d\u0442\u043d\u043e \u043e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0442\u0430\u0431\u043b\u0438\u0446\u0443, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0443\u0436\u0435 \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e \u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0430. \u0414\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u0435\u0435 \u0441\u043d\u0430\u0447\u0430\u043b\u0430 \u043d\u0430\u0434\u043e \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u043e\u0431\u0440\u0430\u0442\u043d\u043e, \u0430 \u0437\u0430\u0442\u0435\u043c \u0441\u043d\u043e\u0432\u0430 \u043e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u043f\u0435\u0440\u043c\u0430\u043d\u0435\u043d\u0442\u043d\u043e."),(0,l.kt)("p",null,"\u0422\u0430\u043a\u0436\u0435 \u043d\u0435\u043b\u044c\u0437\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c ",(0,l.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/statements/drop#drop-table"},"DROP")," \u0441 \u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u043e\u0439 \u0442\u0430\u0431\u043b\u0438\u0446\u0435\u0439 \u0438\u043b\u0438 \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u0442\u0430\u0431\u043b\u0438\u0446\u0443 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e ",(0,l.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/statements/create/table"},"CREATE TABLE")," \u0441 \u0442\u0430\u043a\u0438\u043c \u0436\u0435 \u0438\u043c\u0435\u043d\u0435\u043c, \u043a\u0430\u043a \u0443 \u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u043e\u0439 \u0442\u0430\u0431\u043b\u0438\u0446\u044b. \u0415\u0449\u0435 \u043d\u0435\u043b\u044c\u0437\u044f \u0437\u0430\u043c\u0435\u043d\u0438\u0442\u044c \u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u0443\u044e \u0442\u0430\u0431\u043b\u0438\u0446\u0443 \u0434\u0440\u0443\u0433\u043e\u0439 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0437\u0430\u043f\u0440\u043e\u0441\u0430 ",(0,l.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/statements/rename"},"RENAME TABLE"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,l.kt)("p",null,"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u044b:"),(0,l.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE test ENGINE = Log AS SELECT * FROM numbers(10);\nSELECT * FROM test;\n")),(0,l.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500number\u2500\u2510\n\u2502      0 \u2502\n\u2502      1 \u2502\n\u2502      2 \u2502\n\u2502      3 \u2502\n\u2502      4 \u2502\n\u2502      5 \u2502\n\u2502      6 \u2502\n\u2502      7 \u2502\n\u2502      8 \u2502\n\u2502      9 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"\u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u044b:"),(0,l.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"DETACH TABLE test;\nSELECT * FROM test;\n")),(0,l.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"Received exception from server (version 21.4.1):\nCode: 60. DB::Exception: Received from localhost:9000. DB::Exception: Table default.test doesn't exist.\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0442\u0430\u043a\u0436\u0435")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/statements/create/view#materialized"},"\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/dictionaries/"},"\u0421\u043b\u043e\u0432\u0430\u0440\u0438"))))}f.isMDXComponent=!0}}]);