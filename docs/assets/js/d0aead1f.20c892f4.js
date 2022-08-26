"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[64821],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(r),f=o,y=m["".concat(l,".").concat(f)]||m[f]||p[f]||s;return r?n.createElement(y,a(a({ref:t},c),{},{components:r})):n.createElement(y,a({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var u=2;u<s;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},87759:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var n=r(87462),o=r(63366),s=(r(67294),r(3905)),a=["components"],i={slug:"/ru/operations/system-tables/current-roles"},l="system.current_roles",u={unversionedId:"ru/operations/system-tables/current-roles",id:"ru/operations/system-tables/current-roles",title:"system.current_roles",description:"systemtables-currentroles}",source:"@site/docs/ru/operations/system-tables/current-roles.md",sourceDirName:"ru/operations/system-tables",slug:"/ru/operations/system-tables/current-roles",permalink:"/docs/ru/operations/system-tables/current-roles",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/operations/system-tables/current-roles.md",tags:[],version:"current",frontMatter:{slug:"/ru/operations/system-tables/current-roles"},sidebar:"russia",previous:{title:"system.crash_log",permalink:"/docs/ru/operations/system-tables/crash-log"},next:{title:"system.data_skipping_indices",permalink:"/docs/ru/operations/system-tables/data_skipping_indices"}},c={},p=[],m={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"system_tables-current_roles"},"system.current_roles"),(0,s.kt)("p",null,"\u0421\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0430\u043a\u0442\u0438\u0432\u043d\u044b\u0435 \u0440\u043e\u043b\u0438 \u0442\u0435\u043a\u0443\u0449\u0435\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f. ",(0,s.kt)("inlineCode",{parentName:"p"},"SET ROLE")," \u0438\u0437\u043c\u0435\u043d\u044f\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435 \u044d\u0442\u043e\u0439 \u0442\u0430\u0431\u043b\u0438\u0446\u044b."),(0,s.kt)("p",null,"\u0421\u0442\u043e\u043b\u0431\u0446\u044b:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"role_name")," (",(0,s.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/string"},"String"),")) \u2014 \u0418\u043c\u044f \u0440\u043e\u043b\u0438."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"with_admin_option")," (",(0,s.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/int-uint#uint-ranges"},"UInt8"),") \u2014 \u0424\u043b\u0430\u0433, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442, \u043e\u0431\u043b\u0430\u0434\u0430\u0435\u0442 \u043b\u0438 ",(0,s.kt)("inlineCode",{parentName:"li"},"current_role")," \u0440\u043e\u043b\u044c \u043f\u0440\u0438\u0432\u0438\u043b\u0435\u0433\u0438\u0435\u0439 ",(0,s.kt)("inlineCode",{parentName:"li"},"ADMIN OPTION"),"."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"is_default")," (",(0,s.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/int-uint#uint-ranges"},"UInt8"),") \u2014  \u0424\u043b\u0430\u0433, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442, \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043b\u0438 ",(0,s.kt)("inlineCode",{parentName:"li"},"current_role")," \u0440\u043e\u043b\u044c\u044e \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e.")))}f.isMDXComponent=!0}}]);