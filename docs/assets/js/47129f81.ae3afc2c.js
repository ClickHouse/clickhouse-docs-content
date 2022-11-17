"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[96840],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),k=l(r),d=i,m=k["".concat(s,".").concat(d)]||k[d]||u[d]||a;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=k;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},36845:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var n=r(87462),i=(r(67294),r(3905));const a={slug:"/ru/operations/backup",sidebar_position:49,sidebar_label:"\u0420\u0435\u0437\u0435\u0440\u0432\u043d\u043e\u0435 \u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445"},o="\u0420\u0435\u0437\u0435\u0440\u0432\u043d\u043e\u0435 \u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445",p={unversionedId:"ru/operations/backup",id:"ru/operations/backup",title:"\u0420\u0435\u0437\u0435\u0440\u0432\u043d\u043e\u0435 \u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445",description:"rezervnoe-kopirovanie-dannykh}",source:"@site/docs/ru/operations/backup.md",sourceDirName:"ru/operations",slug:"/ru/operations/backup",permalink:"/docs/ru/operations/backup",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/operations/backup.md",tags:[],version:"current",sidebarPosition:49,frontMatter:{slug:"/ru/operations/backup",sidebar_position:49,sidebar_label:"\u0420\u0435\u0437\u0435\u0440\u0432\u043d\u043e\u0435 \u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445"},sidebar:"russia",previous:{title:"\u0410\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f \u043f\u043e \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0443 SSL X.509",permalink:"/docs/ru/operations/external-authenticators/ssl-x509"},next:{title:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0435 \u0444\u0430\u0439\u043b\u044b",permalink:"/docs/ru/operations/configuration-files"}},s={},l=[{value:"\u0414\u0443\u0431\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445",id:"dublirovanie-dannykh",level:2},{value:"\u0421\u043d\u0438\u043c\u043a\u0438 \u0444\u0430\u0439\u043b\u043e\u0432\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u044b",id:"snimki-failovoi-sistemy",level:2},{value:"clickhouse-copier",id:"clickhouse-copier",level:2},{value:"\u041c\u0430\u043d\u0438\u043f\u0443\u043b\u044f\u0446\u0438\u0438 \u0441 \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u044f\u043c\u0438",id:"manipuliatsii-s-partitsiiami",level:2}],c={toc:l};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"rezervnoe-kopirovanie-dannykh"},"\u0420\u0435\u0437\u0435\u0440\u0432\u043d\u043e\u0435 \u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/ru/engines/table-engines/mergetree-family/replication"},"\u0420\u0435\u043f\u043b\u0438\u043a\u0430\u0446\u0438\u044f")," \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u0437\u0430\u0449\u0438\u0442\u0443 \u043e\u0442 \u0430\u043f\u043f\u0430\u0440\u0430\u0442\u043d\u044b\u0445 \u0441\u0431\u043e\u0435\u0432, \u043d\u043e \u043d\u0435 \u0437\u0430\u0449\u0438\u0449\u0430\u0435\u0442 \u043e\u0442 \u0447\u0435\u043b\u043e\u0432\u0435\u0447\u0435\u0441\u043a\u0438\u0445 \u043e\u0448\u0438\u0431\u043e\u043a: \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u043e\u0433\u043e \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445, \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f \u043d\u0435 \u0442\u043e\u0439 \u0442\u0430\u0431\u043b\u0438\u0446\u044b, \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u043d\u0430\u0434\u043e \u0431\u044b\u043b\u043e, \u0438\u043b\u0438 \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u043d\u0430 \u043d\u0435 \u0442\u043e\u043c \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0435, \u0430 \u0442\u0430\u043a\u0436\u0435 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043d\u044b\u0445 \u043e\u0448\u0438\u0431\u043e\u043a, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u0440\u0438\u0432\u043e\u0434\u044f\u0442 \u043a \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e\u0439 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u0438\u043b\u0438 \u0438\u0445 \u043f\u043e\u0432\u0440\u0435\u0436\u0434\u0435\u043d\u0438\u044e. \u0412\u043e \u043c\u043d\u043e\u0433\u0438\u0445 \u0441\u043b\u0443\u0447\u0430\u044f\u0445 \u043f\u043e\u0434\u043e\u0431\u043d\u044b\u0435 \u043e\u0448\u0438\u0431\u043a\u0438 \u0432\u043b\u0438\u044f\u044e\u0442 \u043d\u0430 \u0432\u0441\u0435 \u0440\u0435\u043f\u043b\u0438\u043a\u0438. ClickHouse \u0438\u043c\u0435\u0435\u0442 \u0432\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u0435 \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0430 \u0437\u0430\u0449\u0438\u0442\u044b \u0434\u043b\u044f \u043f\u0440\u0435\u0434\u043e\u0442\u0432\u0440\u0430\u0449\u0435\u043d\u0438\u044f \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0442\u0438\u043f\u043e\u0432 \u043e\u0448\u0438\u0431\u043e\u043a \u2014 \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e ",(0,i.kt)("a",{parentName:"p",href:"/docs/ru/operations/server-configuration-parameters/settings#max-table-size-to-drop"},"\u043d\u0435 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0441\u044f \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0442\u0430\u0431\u043b\u0438\u0446\u044b ","*","MergeTree, \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0449\u0438\u0435 \u0431\u043e\u043b\u0435\u0435 50 \u0413\u0431 \u0434\u0430\u043d\u043d\u044b\u0445, \u043e\u0434\u043d\u043e\u0439 \u043a\u043e\u043c\u0430\u043d\u0434\u043e\u0439"),". \u041e\u0434\u043d\u0430\u043a\u043e \u044d\u0442\u0438 \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0430 \u0437\u0430\u0449\u0438\u0442\u044b \u043d\u0435 \u043e\u0445\u0432\u0430\u0442\u044b\u0432\u0430\u044e\u0442 \u0432\u0441\u0435 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0435 \u0441\u043b\u0443\u0447\u0430\u0438 \u0438 \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u043e\u0431\u043e\u0439\u0434\u0435\u043d\u044b."),(0,i.kt)("p",null,"\u0414\u043b\u044f \u0442\u043e\u0433\u043e \u0447\u0442\u043e\u0431\u044b \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e \u0443\u043c\u0435\u043d\u044c\u0448\u0438\u0442\u044c \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0435 \u0447\u0435\u043b\u043e\u0432\u0435\u0447\u0435\u0441\u043a\u0438\u0435 \u043e\u0448\u0438\u0431\u043a\u0438, \u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u0442\u0449\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u0438\u0442\u044c \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u044e \u0440\u0435\u0437\u0435\u0440\u0432\u043d\u043e\u0433\u043e \u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0438 \u0432\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445 ",(0,i.kt)("strong",{parentName:"p"},"\u0437\u0430\u0440\u0430\u043d\u0435\u0435"),"."),(0,i.kt)("p",null,"\u041a\u0430\u0436\u0434\u0430\u044f \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u044f \u0438\u043c\u0435\u0435\u0442 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0435 \u0440\u0435\u0441\u0443\u0440\u0441\u044b \u0438 \u0431\u0438\u0437\u043d\u0435\u0441-\u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u043d\u0435\u0442 \u0443\u043d\u0438\u0432\u0435\u0440\u0441\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0440\u0435\u0448\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u0440\u0435\u0437\u0435\u0440\u0432\u043d\u043e\u0433\u043e \u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0438 \u0432\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f ClickHouse, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0431\u0443\u0434\u0435\u0442 \u043f\u043e\u0434\u0445\u043e\u0434\u0438\u0442\u044c \u0432 \u043a\u0430\u0436\u0434\u043e\u0439 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u0438. \u0422\u043e, \u0447\u0442\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0434\u043b\u044f \u043e\u0434\u043d\u043e\u0433\u043e \u0433\u0438\u0433\u0430\u0431\u0430\u0439\u0442\u0430 \u0434\u0430\u043d\u043d\u044b\u0445, \u0441\u043a\u043e\u0440\u0435\u0435 \u0432\u0441\u0435\u0433\u043e, \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0434\u043b\u044f \u0434\u0435\u0441\u044f\u0442\u043a\u043e\u0432 \u043f\u0435\u0442\u0430\u0431\u0430\u0439\u0442. \u0421\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u043e \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0445 \u043f\u043e\u0434\u0445\u043e\u0434\u043e\u0432 \u0441\u043e \u0441\u0432\u043e\u0438\u043c\u0438 \u043f\u043b\u044e\u0441\u0430\u043c\u0438 \u0438 \u043c\u0438\u043d\u0443\u0441\u0430\u043c\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0431\u0443\u0434\u0443\u0442 \u0440\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0435\u043d\u044b \u043d\u0438\u0436\u0435. \u0420\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u0442\u0441\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043f\u043e\u0434\u0445\u043e\u0434\u043e\u0432 \u0432\u043c\u0435\u0441\u0442\u043e \u043e\u0434\u043d\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u043a\u043e\u043c\u043f\u0435\u043d\u0441\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0438\u0445 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0435 \u043d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043a\u0438."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},':::note "\u041f\u0440\u0438\u043c\u0435\u0447\u0430\u043d\u0438\u0435"\n\u0418\u043c\u0435\u0439\u0442\u0435 \u0432 \u0432\u0438\u0434\u0443, \u0447\u0442\u043e \u0435\u0441\u043b\u0438 \u0432\u044b \u0441\u043e\u0437\u0434\u0430\u043b\u0438 \u0440\u0435\u0437\u0435\u0440\u0432\u043d\u0443\u044e \u043a\u043e\u043f\u0438\u044e \u0447\u0435\u0433\u043e-\u0442\u043e \u0438 \u043d\u0438\u043a\u043e\u0433\u0434\u0430 \u043d\u0435 \u043f\u044b\u0442\u0430\u043b\u0438\u0441\u044c \u0432\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0435\u0451, \u0441\u043a\u043e\u0440\u0435\u0435 \u0432\u0441\u0435\u0433\u043e, \u0432\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0434\u043e\u043b\u0436\u043d\u044b\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c, \u043a\u043e\u0433\u0434\u0430 \u0432\u0430\u043c \u044d\u0442\u043e \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u043f\u043e\u043d\u0430\u0434\u043e\u0431\u0438\u0442\u0441\u044f (\u0438\u043b\u0438, \u043f\u043e \u043a\u0440\u0430\u0439\u043d\u0435\u0439 \u043c\u0435\u0440\u0435, \u044d\u0442\u043e \u0437\u0430\u0439\u043c\u0435\u0442 \u0431\u043e\u043b\u044c\u0448\u0435 \u0432\u0440\u0435\u043c\u0435\u043d\u0438, \u0447\u0435\u043c \u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u0438\u0435\u043c\u043b\u0435\u043c\u043e \u0434\u043b\u044f \u0431\u0438\u0437\u043d\u0435\u0441\u0430). \u041f\u043e\u044d\u0442\u043e\u043c\u0443, \u043a\u0430\u043a\u043e\u0439 \u0431\u044b \u043f\u043e\u0434\u0445\u043e\u0434 \u043a \u0440\u0435\u0437\u0435\u0440\u0432\u043d\u043e\u043c\u0443 \u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044e \u0432\u044b \u043d\u0438 \u0432\u044b\u0431\u0440\u0430\u043b\u0438, \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0438\u0440\u0443\u0439\u0442\u0435 \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u0432\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f \u0438 \u0440\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u043e \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0439\u0442\u0435 \u0435\u0433\u043e \u043d\u0430 \u0440\u0435\u0437\u0435\u0440\u0432\u043d\u043e\u043c \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0435 ClickHouse.\n:::\n')),(0,i.kt)("h2",{id:"dublirovanie-dannykh"},"\u0414\u0443\u0431\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445"),(0,i.kt)("p",null,"\u0427\u0430\u0441\u0442\u043e \u0434\u0430\u043d\u043d\u044b\u0435, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u043e\u0441\u0442\u0443\u043f\u0430\u044e\u0442 \u0432 ClickHouse, \u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u0447\u0435\u0440\u0435\u0437 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u0443\u044e \u043e\u0442\u043a\u0430\u0437\u043e\u0443\u0441\u0442\u043e\u0439\u0447\u0438\u0432\u0443\u044e \u043e\u0447\u0435\u0440\u0435\u0434\u044c, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 ",(0,i.kt)("a",{parentName:"p",href:"https://kafka.apache.org"},"Apache Kafka"),". \u0412 \u044d\u0442\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u043c\u043e\u0436\u043d\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u043d\u0430\u0431\u043e\u0440 \u043f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u043e\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0431\u0443\u0434\u0443\u0442 \u0441\u0447\u0438\u0442\u044b\u0432\u0430\u0442\u044c \u043e\u0434\u0438\u043d \u0438 \u0442\u043e\u0442 \u0436\u0435 \u043f\u043e\u0442\u043e\u043a \u0434\u0430\u043d\u043d\u044b\u0445 \u0432\u043e \u0432\u0440\u0435\u043c\u044f \u0437\u0430\u043f\u0438\u0441\u0438 \u0432 ClickHouse \u0438 \u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0435\u0433\u043e \u0432 \u0445\u043e\u043b\u043e\u0434\u043d\u043e\u043c \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435. \u0411\u043e\u043b\u044c\u0448\u0438\u043d\u0441\u0442\u0432\u043e \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0439 \u0443\u0436\u0435 \u0438\u043c\u0435\u044e\u0442 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u043c\u044b\u0435 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0445\u043e\u043b\u043e\u0434\u043d\u044b\u0435 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435\u043c \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u0438\u043b\u0438 \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0439 \u0444\u0430\u0439\u043b\u043e\u0432\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u043e\u0439, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 ",(0,i.kt)("a",{parentName:"p",href:"https://hadoop.apache.org/docs/stable/hadoop-project-dist/hadoop-hdfs/HdfsDesign.html"},"HDFS"),"."),(0,i.kt)("h2",{id:"snimki-failovoi-sistemy"},"\u0421\u043d\u0438\u043c\u043a\u0438 \u0444\u0430\u0439\u043b\u043e\u0432\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u044b"),(0,i.kt)("p",null,"\u041d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u044b\u0435 \u0444\u0430\u0439\u043b\u043e\u0432\u044b\u0435 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0442 \u0434\u0435\u043b\u0430\u0442\u044c \u0441\u043d\u0438\u043c\u043a\u0438 (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/ZFS"},"ZFS"),"), \u043d\u043e \u043e\u043d\u0438 \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u043d\u0435 \u043b\u0443\u0447\u0448\u0438\u043c \u0432\u044b\u0431\u043e\u0440\u043e\u043c \u0434\u043b\u044f \u043e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u043d\u0438\u044f \u0436\u0438\u0432\u044b\u0445 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432. \u0412\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u043c \u0440\u0435\u0448\u0435\u043d\u0438\u0435\u043c \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u0440\u0435\u043f\u043b\u0438\u043a \u0441 \u0442\u0430\u043a\u043e\u0439 \u0444\u0430\u0439\u043b\u043e\u0432\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u043e\u0439 \u0438 \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u0438\u0445 \u0438\u0437 ",(0,i.kt)("a",{parentName:"p",href:"/docs/ru/engines/table-engines/special/distributed"},"Distributed")," \u0442\u0430\u0431\u043b\u0438\u0446, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0445 \u0434\u043b\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT"),". \u0421\u043d\u0438\u043c\u043a\u0438 \u043d\u0430 \u0442\u0430\u043a\u0438\u0445 \u0440\u0435\u043f\u043b\u0438\u043a\u0430\u0445 \u0431\u0443\u0434\u0443\u0442 \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b \u0434\u043b\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432, \u0438\u0437\u043c\u0435\u043d\u044f\u044e\u0449\u0438\u0445 \u0434\u0430\u043d\u043d\u044b\u0435. \u0412 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0431\u043e\u043d\u0443\u0441\u0430, \u044d\u0442\u0438 \u0440\u0435\u043f\u043b\u0438\u043a\u0438 \u043c\u043e\u0433\u0443\u0442 \u0438\u043c\u0435\u0442\u044c \u043e\u0441\u043e\u0431\u044b\u0435 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u044f \u0441 \u0431\u043e\u043b\u044c\u0448\u0438\u043c \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e\u043c \u0434\u0438\u0441\u043a\u043e\u0432, \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u044b\u0445 \u043a \u0441\u0435\u0440\u0432\u0435\u0440\u0443, \u0447\u0442\u043e \u0431\u0443\u0434\u0435\u0442 \u044d\u043a\u043e\u043d\u043e\u043c\u0438\u0447\u0435\u0441\u043a\u0438 \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u044b\u043c."),(0,i.kt)("h2",{id:"clickhouse-copier"},"clickhouse-copier"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/ru/operations/utilities/clickhouse-copier"},"clickhouse-copier")," \u2014 \u044d\u0442\u043e \u0443\u043d\u0438\u0432\u0435\u0440\u0441\u0430\u043b\u044c\u043d\u044b\u0439 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0438\u0437\u043d\u0430\u0447\u0430\u043b\u044c\u043d\u043e \u0431\u044b\u043b \u0441\u043e\u0437\u0434\u0430\u043d \u0434\u043b\u044f \u043f\u0435\u0440\u0435\u0448\u0430\u0440\u0434\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0442\u0430\u0431\u043b\u0438\u0446 \u0441 \u043f\u0435\u0442\u0430\u0431\u0430\u0439\u0442\u0430\u043c\u0438 \u0434\u0430\u043d\u043d\u044b\u0445. \u0415\u0433\u043e \u0442\u0430\u043a\u0436\u0435 \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0434\u043b\u044f \u0440\u0435\u0437\u0435\u0440\u0432\u043d\u043e\u0433\u043e \u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0438 \u0432\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f, \u043f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 \u043e\u043d \u043d\u0430\u0434\u0451\u0436\u043d\u043e \u043a\u043e\u043f\u0438\u0440\u0443\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0435 \u043c\u0435\u0436\u0434\u0443 \u0442\u0430\u0431\u043b\u0438\u0446\u0430\u043c\u0438 \u0438 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430\u043c\u0438 ClickHouse."),(0,i.kt)("p",null,"\u0414\u043b\u044f \u043d\u0435\u0431\u043e\u043b\u044c\u0448\u0438\u0445 \u043e\u0431\u044a\u0451\u043c\u043e\u0432 \u0434\u0430\u043d\u043d\u044b\u0445 \u043c\u043e\u0436\u043d\u043e \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u0442\u044c ",(0,i.kt)("inlineCode",{parentName:"p"},"INSERT INTO ... SELECT ...")," \u0432 \u0443\u0434\u0430\u043b\u0451\u043d\u043d\u044b\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u044b."),(0,i.kt)("h2",{id:"manipuliatsii-s-partitsiiami"},"\u041c\u0430\u043d\u0438\u043f\u0443\u043b\u044f\u0446\u0438\u0438 \u0441 \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u044f\u043c\u0438"),(0,i.kt)("p",null,"ClickHouse \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441 ",(0,i.kt)("inlineCode",{parentName:"p"},"ALTER TABLE ... FREEZE PARTITION ...")," \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0439 \u043a\u043e\u043f\u0438\u0438 \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u0439 \u0442\u0430\u0431\u043b\u0438\u0446\u044b. \u042d\u0442\u043e \u0440\u0435\u0430\u043b\u0438\u0437\u0443\u0435\u0442\u0441\u044f \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0436\u0435\u0441\u0442\u043a\u0438\u0445 \u0441\u0441\u044b\u043b\u043e\u043a (hardlinks) \u043d\u0430 \u043a\u0430\u0442\u0430\u043b\u043e\u0433 ",(0,i.kt)("inlineCode",{parentName:"p"},"/var/lib/clickhouse/shadow/"),", \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u0442\u0430\u043a\u0430\u044f \u043a\u043e\u043f\u0438\u044f \u043e\u0431\u044b\u0447\u043d\u043e \u043d\u0435 \u0437\u0430\u043d\u0438\u043c\u0430\u0435\u0442 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043c\u0435\u0441\u0442\u043e \u043d\u0430 \u0434\u0438\u0441\u043a\u0435 \u0434\u043b\u044f \u0441\u0442\u0430\u0440\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445. \u0421\u043e\u0437\u0434\u0430\u043d\u043d\u044b\u0435 \u043a\u043e\u043f\u0438\u0438 \u0444\u0430\u0439\u043b\u043e\u0432 \u043d\u0435 \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u044e\u0442\u0441\u044f \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c ClickHouse, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0440\u043e\u0441\u0442\u043e \u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0438\u0445 \u0442\u0430\u043c: \u0443 \u0432\u0430\u0441 \u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u043e\u0441\u0442\u0430\u044f \u0440\u0435\u0437\u0435\u0440\u0432\u043d\u0430\u044f \u043a\u043e\u043f\u0438\u044f, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u043d\u0435 \u0442\u0440\u0435\u0431\u0443\u0435\u0442 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0439 \u0432\u043d\u0435\u0448\u043d\u0435\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u044b, \u043e\u0434\u043d\u0430\u043a\u043e \u043f\u0440\u0438 \u0430\u043f\u043f\u0430\u0440\u0430\u0442\u043d\u044b\u0445 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0430\u0445 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0443\u0442\u0440\u0430\u0442\u0438\u0442\u044c \u0438 \u0430\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0438 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043d\u0443\u044e \u043a\u043e\u043f\u0438\u044e. \u041f\u043e \u044d\u0442\u043e\u0439 \u043f\u0440\u0438\u0447\u0438\u043d\u0435, \u043b\u0443\u0447\u0448\u0435 \u0443\u0434\u0430\u043b\u0435\u043d\u043d\u043e \u0441\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0438\u0445 \u0432 \u0434\u0440\u0443\u0433\u043e\u0435 \u043c\u0435\u0441\u0442\u043e, \u0430 \u0437\u0430\u0442\u0435\u043c \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u0443\u044e \u043a\u043e\u043f\u0438\u044e. \u0420\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0435 \u0444\u0430\u0439\u043b\u043e\u0432\u044b\u0435 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u0438 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0430 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u043f\u043e-\u043f\u0440\u0435\u0436\u043d\u0435\u043c\u0443 \u044f\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u0445\u043e\u0440\u043e\u0448\u0438\u043c\u0438 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u0430\u043c\u0438 \u0434\u043b\u044f \u044d\u0442\u043e\u0433\u043e, \u043e\u0434\u043d\u0430\u043a\u043e \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0438 \u043e\u0431\u044b\u0447\u043d\u044b\u0435 \u043f\u0440\u0438\u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u043d\u044b\u0435 \u0444\u0430\u0439\u043b\u043e\u0432\u044b\u0435 \u0441\u0435\u0440\u0432\u0435\u0440\u044b \u0441 \u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0431\u043e\u043b\u044c\u0448\u043e\u0439 \u0451\u043c\u043a\u043e\u0441\u0442\u044c\u044e (\u0432 \u044d\u0442\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0430 \u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442\u044c \u0447\u0435\u0440\u0435\u0437 \u0441\u0435\u0442\u0435\u0432\u0443\u044e \u0444\u0430\u0439\u043b\u043e\u0432\u0443\u044e \u0441\u0438\u0441\u0442\u0435\u043c\u0443 \u0438\u043b\u0438, \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e, ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Rsync"},"rsync"),")."),(0,i.kt)("p",null,"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0441\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0430\u0445, \u0441\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0445 \u0441 \u043c\u0430\u043d\u0438\u043f\u0443\u043b\u044f\u0446\u0438\u044f\u043c\u0438 \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u044f\u043c\u0438, \u0441\u043c. \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435 ",(0,i.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/statements/alter/partition#alter_manipulations-with-partitions"},"ALTER"),"."),(0,i.kt)("p",null,"\u0414\u043b\u044f \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u0438 \u044d\u0442\u043e\u0433\u043e \u043f\u043e\u0434\u0445\u043e\u0434\u0430 \u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442 \u043e\u0442 \u0441\u0442\u043e\u0440\u043e\u043d\u043d\u0438\u0445 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u043e\u0432: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/AlexAkulov/clickhouse-backup"},"clickhouse-backup"),"."))}u.isMDXComponent=!0}}]);