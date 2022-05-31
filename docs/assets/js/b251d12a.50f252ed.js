"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[69676],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(r),f=o,y=m["".concat(i,".").concat(f)]||m[f]||u[f]||s;return r?n.createElement(y,a(a({ref:t},p),{},{components:r})):n.createElement(y,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<s;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1794:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var n=r(87462),o=r(63366),s=(r(67294),r(3905)),a=["components"],l={},i="system.roles",c={unversionedId:"ru/operations/system-tables/roles",id:"ru/operations/system-tables/roles",title:"system.roles",description:"system_tables-roles}",source:"@site/docs/ru/operations/system-tables/roles.md",sourceDirName:"ru/operations/system-tables",slug:"/ru/operations/system-tables/roles",permalink:"/docs/ru/operations/system-tables/roles",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/operations/system-tables/roles.md",tags:[],version:"current",frontMatter:{},sidebar:"russia",previous:{title:"system.role_grants",permalink:"/docs/ru/operations/system-tables/role-grants"},next:{title:"system.row_policies",permalink:"/docs/ru/operations/system-tables/row_policies"}},p={},u=[{value:"\u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0442\u0430\u043a\u0436\u0435",id:"see-also",level:2}],m={toc:u};function f(e){var t=e.components,r=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"system_tables-roles"},"system.roles"),(0,s.kt)("p",null,"\u0421\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0441\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043e ",(0,s.kt)("a",{parentName:"p",href:"/docs/ru/operations/access-rights#role-management"},"\u0440\u043e\u043b\u044f\u0445"),"."),(0,s.kt)("p",null,"\u0421\u0442\u043e\u043b\u0431\u0446\u044b:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"name")," (",(0,s.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/string"},"String"),") \u2014 \u0418\u043c\u044f \u0440\u043e\u043b\u0438.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"id")," (",(0,s.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/uuid"},"UUID"),") \u2014 ID \u0440\u043e\u043b\u0438.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"storage")," (",(0,s.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/string"},"String"),") \u2014 \u041f\u0443\u0442\u044c \u043a \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0443 \u0440\u043e\u043b\u0435\u0439. \u041d\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0432 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0435 ",(0,s.kt)("inlineCode",{parentName:"p"},"access_control_path"),"."))),(0,s.kt)("h2",{id:"see-also"},"\u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0442\u0430\u043a\u0436\u0435"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/statements/show#show-roles-statement"},"SHOW ROLES"))))}f.isMDXComponent=!0}}]);