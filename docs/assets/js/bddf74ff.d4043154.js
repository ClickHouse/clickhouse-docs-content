"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[58789],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>y});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),i=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=i(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=i(r),m=n,y=u["".concat(c,".").concat(m)]||u[m]||d[m]||s;return r?a.createElement(y,o(o({ref:t},l),{},{components:r})):a.createElement(y,o({ref:t},l))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[u]="string"==typeof e?e:n,o[1]=p;for(var i=2;i<s;i++)o[i]=r[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},50904:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>p,toc:()=>i});var a=r(87462),n=(r(67294),r(3905));const s={slug:"/ru/operations/system-tables/detached_parts"},o="system.detached_parts",p={unversionedId:"ru/operations/system-tables/detached_parts",id:"ru/operations/system-tables/detached_parts",title:"system.detached_parts",description:"systemtables-detachedparts}",source:"@site/docs/ru/operations/system-tables/detached_parts.md",sourceDirName:"ru/operations/system-tables",slug:"/ru/operations/system-tables/detached_parts",permalink:"/docs/ru/operations/system-tables/detached_parts",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/operations/system-tables/detached_parts.md",tags:[],version:"current",frontMatter:{slug:"/ru/operations/system-tables/detached_parts"},sidebar:"russia",previous:{title:"system.databases",permalink:"/docs/ru/operations/system-tables/databases"},next:{title:"system.dictionaries",permalink:"/docs/ru/operations/system-tables/dictionaries"}},c={},i=[],l={toc:i},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"system_tables-detached_parts"},"system.detached_parts"),(0,n.kt)("p",null,"\u0421\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e\u0431 \u043e\u0442\u0441\u043e\u0435\u0434\u0438\u043d\u0451\u043d\u043d\u044b\u0445 \u043a\u0443\u0441\u043a\u0430\u0445 \u0442\u0430\u0431\u043b\u0438\u0446 \u0441\u0435\u043c\u0435\u0439\u0441\u0442\u0432\u0430 ",(0,n.kt)("a",{parentName:"p",href:"/docs/ru/engines/table-engines/mergetree-family/mergetree"},"MergeTree"),". \u0421\u0442\u043e\u043b\u0431\u0435\u0446 ",(0,n.kt)("inlineCode",{parentName:"p"},"reason")," \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u043f\u0440\u0438\u0447\u0438\u043d\u0443, \u043f\u043e \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u043a\u0443\u0441\u043e\u043a \u0431\u044b\u043b \u043e\u0442\u0441\u043e\u0435\u0434\u0438\u043d\u0451\u043d. \u0414\u043b\u044f \u043a\u0443\u0441\u043e\u0432, \u043e\u0442\u0441\u043e\u0435\u0434\u0438\u043d\u0451\u043d\u043d\u044b\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u043c, ",(0,n.kt)("inlineCode",{parentName:"p"},"reason")," \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u043f\u0443\u0441\u0442\u0443\u044e \u0441\u0442\u0440\u043e\u043a\u0443.\n\u0422\u0430\u043a\u0438\u0435 \u043a\u0443\u0441\u043a\u0438 \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u043f\u0440\u0438\u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u044b \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e ",(0,n.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/statements/alter/#alter_attach-partition"},"ALTER TABLE ATTACH PARTITION|PART"),". \u041e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u0442\u043e\u043b\u0431\u0446\u044b \u043e\u043f\u0438\u0441\u0430\u043d\u044b \u0432 ",(0,n.kt)("a",{parentName:"p",href:"#system_tables-parts"},"system.parts"),".\n\u0415\u0441\u043b\u0438 \u0438\u043c\u044f \u043a\u0443\u0441\u043a\u0430 \u043d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e, \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432 \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c ",(0,n.kt)("inlineCode",{parentName:"p"},"NULL"),". \u0422\u0430\u043a\u0438\u0435 \u043a\u0443\u0441\u043a\u0438 \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u0443\u0434\u0430\u043b\u0435\u043d\u044b \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e ",(0,n.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/statements/alter/#alter_drop-detached"},"ALTER TABLE DROP DETACHED PART"),"."))}d.isMDXComponent=!0}}]);