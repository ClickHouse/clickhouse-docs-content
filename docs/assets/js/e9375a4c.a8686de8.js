"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[72911],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var o=n.createContext({}),l=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,a=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(r),f=s,y=m["".concat(o,".").concat(f)]||m[f]||u[f]||a;return r?n.createElement(y,i(i({ref:t},c),{},{components:r})):n.createElement(y,i({ref:t},c))}));function f(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=r.length,i=new Array(a);i[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:s,i[1]=p;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},47344:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var n=r(87462),s=(r(67294),r(3905));const a={slug:"/ru/operations/system-tables/settings_profiles"},i="system.settings_profiles",p={unversionedId:"ru/operations/system-tables/settings_profiles",id:"ru/operations/system-tables/settings_profiles",title:"system.settings_profiles",description:"systemtables-settingsprofiles}",source:"@site/docs/ru/operations/system-tables/settings_profiles.md",sourceDirName:"ru/operations/system-tables",slug:"/ru/operations/system-tables/settings_profiles",permalink:"/docs/ru/operations/system-tables/settings_profiles",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/operations/system-tables/settings_profiles.md",tags:[],version:"current",frontMatter:{slug:"/ru/operations/system-tables/settings_profiles"},sidebar:"russia",previous:{title:"system.settings_profile_elements",permalink:"/docs/ru/operations/system-tables/settings_profile_elements"},next:{title:"system.stack_trace",permalink:"/docs/ru/operations/system-tables/stack_trace"}},o={},l=[{value:"\u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0442\u0430\u043a\u0436\u0435",id:"see-also",level:2}],c={toc:l};function u(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"system_tables-settings_profiles"},"system.settings_profiles"),(0,s.kt)("p",null,"\u0421\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u0441\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u043f\u0440\u043e\u0444\u0438\u043b\u0435\u0439 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a."),(0,s.kt)("p",null,"\u0421\u0442\u043e\u043b\u0431\u0446\u044b:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"name")," (",(0,s.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/string"},"String"),") \u2014 \u0418\u043c\u044f \u043f\u0440\u043e\u0444\u0438\u043b\u044f \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"id")," (",(0,s.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/uuid"},"UUID"),") \u2014 ID \u043f\u0440\u043e\u0444\u0438\u043b\u044f \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"storage")," (",(0,s.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/string"},"String"),") \u2014 \u041f\u0443\u0442\u044c \u043a \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0443 \u043f\u0440\u043e\u0444\u0438\u043b\u0435\u0439 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a. \u041d\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0432 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0435 ",(0,s.kt)("inlineCode",{parentName:"p"},"access_control_path"),".")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"num_elements")," (",(0,s.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 \u0427\u0438\u0441\u043b\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u0434\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u043f\u0440\u043e\u0444\u0438\u043b\u044f \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0435 ",(0,s.kt)("inlineCode",{parentName:"p"},"system.settings_profile_elements"),".")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"apply_to_all")," (",(0,s.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/int-uint#uint-ranges"},"UInt8"),") \u2014 \u041f\u0440\u0438\u0437\u043d\u0430\u043a, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442, \u0447\u0442\u043e \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u043f\u0440\u043e\u0444\u0438\u043b\u044f \u0437\u0430\u0434\u0430\u043d\u044b \u0434\u043b\u044f \u0432\u0441\u0435\u0445 \u0440\u043e\u043b\u0435\u0439 \u0438/\u0438\u043b\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"apply_to_list")," (",(0,s.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/array"},"Array"),"(",(0,s.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/string"},"String"),")) \u2014 \u0421\u043f\u0438\u0441\u043e\u043a \u0440\u043e\u043b\u0435\u0439 \u0438/\u0438\u043b\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439, \u043a \u043a\u043e\u0442\u043e\u0440\u044b\u043c \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f \u043f\u0440\u043e\u0444\u0438\u043b\u044c \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"apply_to_except")," (",(0,s.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/array"},"Array"),"(",(0,s.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/string"},"String"),")) \u2014 \u041f\u0440\u043e\u0444\u0438\u043b\u044c \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f \u043a\u043e \u0432\u0441\u0435\u043c \u0440\u043e\u043b\u044f\u043c \u0438/\u0438\u043b\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f\u043c, \u0437\u0430 \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435\u043c \u043f\u0435\u0440\u0435\u0447\u0438\u0441\u043b\u0435\u043d\u043d\u044b\u0445."))),(0,s.kt)("h2",{id:"see-also"},"\u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0442\u0430\u043a\u0436\u0435"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/statements/show#show-profiles-statement"},"SHOW PROFILES"))))}u.isMDXComponent=!0}}]);