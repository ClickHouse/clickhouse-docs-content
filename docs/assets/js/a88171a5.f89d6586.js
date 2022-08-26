"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[69927],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return f}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),u=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},c=function(e){var r=u(e.components);return n.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(t),f=o,y=m["".concat(l,".").concat(f)]||m[f]||p[f]||s;return t?n.createElement(y,a(a({ref:r},c),{},{components:t})):n.createElement(y,a({ref:r},c))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var s=t.length,a=new Array(s);a[0]=m;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var u=2;u<s;u++)a[u]=t[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},52462:function(e,r,t){t.r(r),t.d(r,{assets:function(){return c},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var n=t(87462),o=t(63366),s=(t(67294),t(3905)),a=["components"],i={slug:"/ru/operations/system-tables/errors"},l="system.errors",u={unversionedId:"ru/operations/system-tables/errors",id:"ru/operations/system-tables/errors",title:"system.errors",description:"system_tables-errors}",source:"@site/docs/ru/operations/system-tables/errors.md",sourceDirName:"ru/operations/system-tables",slug:"/ru/operations/system-tables/errors",permalink:"/docs/ru/operations/system-tables/errors",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/operations/system-tables/errors.md",tags:[],version:"current",frontMatter:{slug:"/ru/operations/system-tables/errors"},sidebar:"russia",previous:{title:"system.enabled_roles",permalink:"/docs/ru/operations/system-tables/enabled-roles"},next:{title:"system.events",permalink:"/docs/ru/operations/system-tables/events"}},c={},p=[],m={toc:p};function f(e){var r=e.components,t=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"system_tables-errors"},"system.errors"),(0,s.kt)("p",null,"\u0421\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u043a\u043e\u0434\u044b \u043e\u0448\u0438\u0431\u043e\u043a \u0441 \u0443\u043a\u0430\u0437\u0430\u043d\u0438\u0435\u043c \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u0441\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u043d\u0438\u0439."),(0,s.kt)("p",null,"\u0421\u0442\u043e\u043b\u0431\u0446\u044b:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"name")," (",(0,s.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/string"},"String"),") \u2014 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043e\u0448\u0438\u0431\u043a\u0438 (",(0,s.kt)("inlineCode",{parentName:"li"},"errorCodeToName"),")."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"code")," (",(0,s.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/int-uint"},"Int32"),") \u2014 \u043d\u043e\u043c\u0435\u0440 \u043a\u043e\u0434\u0430 \u043e\u0448\u0438\u0431\u043a\u0438."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"value")," (",(0,s.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043e\u0448\u0438\u0431\u043e\u043a.")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM system.errors\nWHERE value > 0\nORDER BY code ASC\nLIMIT 1\n\n\u250c\u2500name\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500code\u2500\u252c\u2500value\u2500\u2510\n\u2502 CANNOT_OPEN_FILE \u2502   76 \u2502     1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}f.isMDXComponent=!0}}]);