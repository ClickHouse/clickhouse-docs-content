"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[21843],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>m});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),u=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=u(e.components);return n.createElement(c.Provider,{value:r},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(t),d=o,m=p["".concat(c,".").concat(d)]||p[d]||f[d]||a;return t?n.createElement(m,i(i({ref:r},l),{},{components:t})):n.createElement(m,i({ref:r},l))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},15946:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var n=t(87462),o=(t(67294),t(3905));const a={sidebar_position:1,description:"Improving Map performance"},i="How to check grants and standard permissions for default user in ClickHouse Cloud",s={permalink:"/docs/knowledgebase/user-permissions-on-cloud",source:"@site/knowledgebase/user-permissions-on-cloud.md",title:"How to check grants and standard permissions for default user in ClickHouse Cloud",description:"Improving Map performance",date:"2023-03-17T17:39:50.000Z",formattedDate:"March 17, 2023",tags:[],readingTime:.125,hasTruncateMarker:!1,authors:[],frontMatter:{sidebar_position:1,description:"Improving Map performance"},prevItem:{title:"Useful queries for troubleshooting",permalink:"/docs/knowledgebase/useful-queries-for-troubleshooting"},nextItem:{title:"Who is using ClickHouse?",permalink:"/docs/knowledgebase/who-is-using-clickhouse"}},c={authorsImageUrls:[]},u=[],l={toc:u},p="wrapper";function f(e){let{components:r,...t}=e;return(0,o.kt)(p,(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can check the current privileges and permission (RBAC) for default user and other users' max privileges in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/data-plane-application/blob/main/clickhouse-operator/util/clickhouseclient/database_user_supervisor.go#L54"},"this part of the data plane code")))}f.isMDXComponent=!0}}]);