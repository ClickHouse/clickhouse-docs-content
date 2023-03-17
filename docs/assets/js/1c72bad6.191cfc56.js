"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[19542],{3905:(t,e,r)=>{r.d(e,{Zo:()=>o,kt:()=>y});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var d=a.createContext({}),i=function(t){var e=a.useContext(d),r=e;return t&&(r="function"==typeof t?t(e):p(p({},e),t)),r},o=function(t){var e=i(t.components);return a.createElement(d.Provider,{value:e},t.children)},u="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,d=t.parentName,o=s(t,["components","mdxType","originalType","parentName"]),u=i(r),m=n,y=u["".concat(d,".").concat(m)]||u[m]||c[m]||l;return r?a.createElement(y,p(p({ref:e},o),{},{components:r})):a.createElement(y,p({ref:e},o))}));function y(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,p=new Array(l);p[0]=m;var s={};for(var d in e)hasOwnProperty.call(e,d)&&(s[d]=e[d]);s.originalType=t,s[u]="string"==typeof t?t:n,p[1]=s;for(var i=2;i<l;i++)p[i]=r[i];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},57220:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>d,contentTitle:()=>p,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>i});var a=r(87462),n=(r(67294),r(3905));const l={slug:"/ru/sql-reference/data-types/multiword-types",sidebar_position:61,sidebar_label:"\u0421\u043e\u0441\u0442\u0430\u0432\u043d\u044b\u0435 \u0442\u0438\u043f\u044b"},p="\u0421\u043e\u0441\u0442\u0430\u0432\u043d\u044b\u0435 \u0442\u0438\u043f\u044b",s={unversionedId:"ru/sql-reference/data-types/multiword-types",id:"ru/sql-reference/data-types/multiword-types",title:"\u0421\u043e\u0441\u0442\u0430\u0432\u043d\u044b\u0435 \u0442\u0438\u043f\u044b",description:"multiword-types}",source:"@site/docs/ru/sql-reference/data-types/multiword-types.md",sourceDirName:"ru/sql-reference/data-types",slug:"/ru/sql-reference/data-types/multiword-types",permalink:"/docs/ru/sql-reference/data-types/multiword-types",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/data-types/multiword-types.md",tags:[],version:"current",sidebarPosition:61,frontMatter:{slug:"/ru/sql-reference/data-types/multiword-types",sidebar_position:61,sidebar_label:"\u0421\u043e\u0441\u0442\u0430\u0432\u043d\u044b\u0435 \u0442\u0438\u043f\u044b"},sidebar:"russia",previous:{title:"IPv6",permalink:"/docs/ru/sql-reference/data-types/domains/ipv6"},next:{title:"\u0413\u0435\u043e\u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b",permalink:"/docs/ru/sql-reference/data-types/geo"}},d={},i=[{value:"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 \u0441\u043e\u0441\u0442\u0430\u0432\u043d\u044b\u0445 \u0442\u0438\u043f\u043e\u0432",id:"multiword-types-support",level:2}],o={toc:i},u="wrapper";function c(t){let{components:e,...r}=t;return(0,n.kt)(u,(0,a.Z)({},o,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"multiword-types"},"\u0421\u043e\u0441\u0442\u0430\u0432\u043d\u044b\u0435 \u0442\u0438\u043f\u044b"),(0,n.kt)("p",null,"\u041f\u0440\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438 \u0442\u0430\u0431\u043b\u0438\u0446 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0442\u0438\u043f\u044b \u0434\u0430\u043d\u043d\u044b\u0445 \u0441 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435\u043c, \u0441\u043e\u0441\u0442\u043e\u044f\u0449\u0438\u043c \u0438\u0437 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u0441\u043b\u043e\u0432. \u0422\u0430\u043a\u0438\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044f \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u043b\u0443\u0447\u0448\u0435\u0439 \u0441\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u043c\u043e\u0441\u0442\u0438 \u0441 SQL."),(0,n.kt)("h2",{id:"multiword-types-support"},"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 \u0441\u043e\u0441\u0442\u0430\u0432\u043d\u044b\u0445 \u0442\u0438\u043f\u043e\u0432"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u0421\u043e\u0441\u0442\u0430\u0432\u043d\u044b\u0435 \u0442\u0438\u043f\u044b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u041e\u0431\u044b\u0447\u043d\u044b\u0435 \u0442\u0438\u043f\u044b"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"DOUBLE PRECISION"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/ru/sql-reference/data-types/float"},"Float64"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"CHAR LARGE OBJECT"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/ru/sql-reference/data-types/string"},"String"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"CHAR VARYING"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/ru/sql-reference/data-types/string"},"String"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"CHARACTER LARGE OBJECT"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/ru/sql-reference/data-types/string"},"String"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"CHARACTER VARYING"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/ru/sql-reference/data-types/string"},"String"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"NCHAR LARGE OBJECT"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/ru/sql-reference/data-types/string"},"String"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"NCHAR VARYING"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/ru/sql-reference/data-types/string"},"String"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"NATIONAL CHARACTER LARGE OBJECT"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/ru/sql-reference/data-types/string"},"String"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"NATIONAL CHARACTER VARYING"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/ru/sql-reference/data-types/string"},"String"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"NATIONAL CHAR VARYING"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/ru/sql-reference/data-types/string"},"String"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"NATIONAL CHARACTER"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/ru/sql-reference/data-types/string"},"String"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"NATIONAL CHAR"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/ru/sql-reference/data-types/string"},"String"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"BINARY LARGE OBJECT"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/ru/sql-reference/data-types/string"},"String"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"BINARY VARYING"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/ru/sql-reference/data-types/string"},"String"))))))}c.isMDXComponent=!0}}]);