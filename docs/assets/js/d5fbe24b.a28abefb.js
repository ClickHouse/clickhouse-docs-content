"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[37653],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=l(r),m=a,d=p["".concat(i,".").concat(m)]||p[m]||f[m]||c;return r?n.createElement(d,s(s({ref:t},u),{},{components:r})):n.createElement(d,s({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,s=new Array(c);s[0]=p;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var l=2;l<c;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},78367:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return f}});var n=r(87462),a=r(63366),c=(r(67294),r(3905)),s=["components"],o={slug:"/ru/sql-reference/statements/create/",sidebar_label:"CREATE",sidebar_position:34},i="\u0417\u0430\u043f\u0440\u043e\u0441\u044b CREATE",l={unversionedId:"ru/sql-reference/statements/create/index",id:"ru/sql-reference/statements/create/index",title:"\u0417\u0430\u043f\u0440\u043e\u0441\u044b CREATE",description:"create-queries}",source:"@site/docs/ru/sql-reference/statements/create/index.md",sourceDirName:"ru/sql-reference/statements/create",slug:"/ru/sql-reference/statements/create/",permalink:"/docs/ru/sql-reference/statements/create/",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/statements/create/index.md",tags:[],version:"current",sidebarPosition:34,frontMatter:{slug:"/ru/sql-reference/statements/create/",sidebar_label:"CREATE",sidebar_position:34},sidebar:"russia",previous:{title:"INSERT INTO",permalink:"/docs/ru/sql-reference/statements/insert-into"},next:{title:"\u0411\u0430\u0437\u0430 \u0434\u0430\u043d\u043d\u044b\u0445",permalink:"/docs/ru/sql-reference/statements/create/database"}},u={},f=[],p={toc:f};function m(e){var t=e.components,r=(0,a.Z)(e,s);return(0,c.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"create-queries"},"\u0417\u0430\u043f\u0440\u043e\u0441\u044b CREATE"),(0,c.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441 create \u0441\u043e\u0437\u0434\u0430\u0435\u0442 \u043d\u043e\u0432\u0443\u044e \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u044c \u043e\u0434\u043d\u043e\u0433\u043e \u0438\u0437 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u0442\u0438\u043f\u043e\u0432:"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/statements/create/database"},"DATABASE")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/statements/create/table"},"TABLE")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/statements/create/view"},"VIEW")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/statements/create/dictionary"},"DICTIONARY")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/statements/create/function"},"FUNCTION")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/statements/create/user"},"USER")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/statements/create/role"},"ROLE")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/statements/create/row-policy"},"ROW POLICY")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/statements/create/quota"},"QUOTA")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/statements/create/settings-profile"},"SETTINGS PROFILE"))))}m.isMDXComponent=!0}}]);