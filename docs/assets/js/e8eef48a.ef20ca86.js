"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[684],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},u=Object.keys(e);for(r=0;r<u.length;r++)t=u[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)t=u[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var c=r.createContext({}),i=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=i(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,u=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),f=i(t),m=l,d=f["".concat(c,".").concat(m)]||f[m]||p[m]||u;return t?r.createElement(d,a(a({ref:n},s),{},{components:t})):r.createElement(d,a({ref:n},s))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var u=t.length,a=new Array(u);a[0]=f;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:l,a[1]=o;for(var i=2;i<u;i++)a[i]=t[i];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},81970:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return p}});var r=t(87462),l=t(63366),u=(t(67294),t(3905)),a=["components"],o={slug:"/ru/sql-reference/table-functions/null",sidebar_position:53,sidebar_label:"null \u0444\u0443\u043d\u043a\u0446\u0438\u044f"},c="null",i={unversionedId:"ru/sql-reference/table-functions/null",id:"ru/sql-reference/table-functions/null",title:"null",description:"null-function}",source:"@site/docs/ru/sql-reference/table-functions/null.md",sourceDirName:"ru/sql-reference/table-functions",slug:"/ru/sql-reference/table-functions/null",permalink:"/docs/ru/sql-reference/table-functions/null",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/table-functions/null.md",tags:[],version:"current",sidebarPosition:53,frontMatter:{slug:"/ru/sql-reference/table-functions/null",sidebar_position:53,sidebar_label:"null \u0444\u0443\u043d\u043a\u0446\u0438\u044f"},sidebar:"russia",previous:{title:"cluster",permalink:"/docs/ru/sql-reference/table-functions/cluster"},next:{title:"dictionary",permalink:"/docs/ru/sql-reference/table-functions/dictionary"}},s={},p=[],f={toc:p};function m(e){var n=e.components,t=(0,l.Z)(e,a);return(0,u.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,u.kt)("h1",{id:"null-function"},"null"),(0,u.kt)("p",null,"\u0421\u043e\u0437\u0434\u0430\u0435\u0442 \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u0443\u044e \u0442\u0430\u0431\u043b\u0438\u0446\u0443 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0439 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b \u0441 \u0434\u0432\u0438\u0436\u043a\u043e\u043c ",(0,u.kt)("a",{parentName:"p",href:"/docs/ru/engines/table-engines/special/null"},"Null"),". \u0412 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441\u043e \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430\u043c\u0438 \u0434\u0432\u0438\u0436\u043a\u0430, \u0434\u0430\u043d\u043d\u044b\u0435 \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0435 \u0438\u0433\u043d\u043e\u0440\u0438\u0440\u0443\u044e\u0442\u0441\u044f, \u0430 \u0441\u0430\u043c\u0430 \u0442\u0430\u0431\u043b\u0438\u0446\u0430 \u0443\u0434\u0430\u043b\u044f\u0435\u0442\u0441\u044f \u0441\u0440\u0430\u0437\u0443 \u043f\u043e\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u0430. \u0424\u0443\u043d\u043a\u0446\u0438\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u0443\u0434\u043e\u0431\u0441\u0442\u0432\u0430 \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u0438\u044f \u0442\u0435\u0441\u0442\u043e\u0432 \u0438 \u0434\u0435\u043c\u043e\u043d\u0441\u0442\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0445 \u043f\u0440\u0438\u043c\u0435\u0440\u043e\u0432."),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-sql"},"null('structure')\n")),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440")),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("inlineCode",{parentName:"li"},"structure")," \u2014 \u0441\u043f\u0438\u0441\u043e\u043a \u043a\u043e\u043b\u043e\u043d\u043e\u043a \u0438 \u0438\u0445 \u0442\u0438\u043f\u043e\u0432. ",(0,u.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/string"},"String"),".")),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435")),(0,u.kt)("p",null,"\u0412\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f \u0442\u0430\u0431\u043b\u0438\u0446\u0430 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0439 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b \u0441 \u0434\u0432\u0438\u0436\u043a\u043e\u043c ",(0,u.kt)("inlineCode",{parentName:"p"},"Null"),"."),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,u.kt)("p",null,"\u041e\u0434\u0438\u043d \u0437\u0430\u043f\u0440\u043e\u0441 \u0441 \u0444\u0443\u043d\u043a\u0446\u0438\u0435\u0439 ",(0,u.kt)("inlineCode",{parentName:"p"},"null"),":"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO function null('x UInt64') SELECT * FROM numbers_mt(1000000000);\n")),(0,u.kt)("p",null,"\u0437\u0430\u043c\u0435\u043d\u044f\u0435\u0442 \u0442\u0440\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0430:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE t (x UInt64) ENGINE = Null;\nINSERT INTO t SELECT * FROM numbers_mt(1000000000);\nDROP TABLE IF EXISTS t;\n")),(0,u.kt)("p",null,"\u0421\u043c. \u0442\u0430\u043a\u0436\u0435:"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"/docs/ru/engines/table-engines/special/null"},"\u0414\u0432\u0438\u0436\u043e\u043a \u0442\u0430\u0431\u043b\u0438\u0446 Null"))),(0,u.kt)("p",null,(0,u.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/sql-reference/table-functions/null/"},"Original article")," "))}m.isMDXComponent=!0}}]);