"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[18459],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),f=a,d=u["".concat(l,".").concat(f)]||u[f]||m[f]||s;return r?n.createElement(d,o(o({ref:t},p),{},{components:r})):n.createElement(d,o({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<s;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},13576:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const s={slug:"/ru/sql-reference/statements/create/settings-profile",sidebar_position:43,sidebar_label:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a"},o="CREATE SETTINGS PROFILE",i={unversionedId:"ru/sql-reference/statements/create/settings-profile",id:"ru/sql-reference/statements/create/settings-profile",title:"CREATE SETTINGS PROFILE",description:"create-settings-profile-statement}",source:"@site/docs/ru/sql-reference/statements/create/settings-profile.md",sourceDirName:"ru/sql-reference/statements/create",slug:"/ru/sql-reference/statements/create/settings-profile",permalink:"/docs/ru/sql-reference/statements/create/settings-profile",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/statements/create/settings-profile.md",tags:[],version:"current",sidebarPosition:43,frontMatter:{slug:"/ru/sql-reference/statements/create/settings-profile",sidebar_position:43,sidebar_label:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a"},sidebar:"russia",previous:{title:"\u041a\u0432\u043e\u0442\u0430",permalink:"/docs/ru/sql-reference/statements/create/quota"},next:{title:"ALTER",permalink:"/docs/ru/sql-reference/statements/alter/"}},l={},c=[{value:"\u041f\u0440\u0438\u043c\u0435\u0440",id:"create-settings-profile-syntax",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"create-settings-profile-statement"},"CREATE SETTINGS PROFILE"),(0,a.kt)("p",null,"\u0421\u043e\u0437\u0434\u0430\u0435\u0442 ",(0,a.kt)("a",{parentName:"p",href:"/docs/ru/operations/access-rights#settings-profiles-management"},"\u043f\u0440\u043e\u0444\u0438\u043b\u0438 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a"),", \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u043f\u0440\u0438\u0441\u0432\u043e\u0435\u043d\u044b \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044e \u0438\u043b\u0438 \u0440\u043e\u043b\u0438."),(0,a.kt)("p",null,"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE SETTINGS PROFILE [IF NOT EXISTS | OR REPLACE] name1 [ON CLUSTER cluster_name1]\n        [, name2 [ON CLUSTER cluster_name2] ...]\n    [SETTINGS variable [= value] [MIN [=] min_value] [MAX [=] max_value] [CONST|READONLY|WRITABLE|CHANGEABLE_IN_READONLY] | INHERIT 'profile_name'] [,...]\n")),(0,a.kt)("p",null,"\u0421\u0435\u043a\u0446\u0438\u044f ",(0,a.kt)("inlineCode",{parentName:"p"},"ON CLUSTER")," \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u0438 \u043d\u0430 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0435, \u0441\u043c. ",(0,a.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/distributed-ddl"},"\u0420\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0435 DDL \u0437\u0430\u043f\u0440\u043e\u0441\u044b"),"."),(0,a.kt)("h2",{id:"create-settings-profile-syntax"},"\u041f\u0440\u0438\u043c\u0435\u0440"),(0,a.kt)("p",null,"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a ",(0,a.kt)("inlineCode",{parentName:"p"},"max_memory_usage_profile"),", \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0438 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 ",(0,a.kt)("inlineCode",{parentName:"p"},"max_memory_usage"),". \u041f\u0440\u0438\u0441\u0432\u043e\u0438\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044e ",(0,a.kt)("inlineCode",{parentName:"p"},"robin"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE SETTINGS PROFILE max_memory_usage_profile SETTINGS max_memory_usage = 100000001 MIN 90000000 MAX 110000000 TO robin\n")))}m.isMDXComponent=!0}}]);