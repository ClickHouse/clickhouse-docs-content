"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[57999],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},i=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),m=u(n),f=a,d=m["".concat(s,".").concat(f)]||m[f]||p[f]||l;return n?r.createElement(d,o(o({ref:t},i),{},{components:n})):r.createElement(d,o({ref:t},i))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},19136:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const l={slug:"/ru/sql-reference/statements/create/function",sidebar_position:38,sidebar_label:"FUNCTION"},o="CREATE FUNCTION",c={unversionedId:"ru/sql-reference/statements/create/function",id:"ru/sql-reference/statements/create/function",title:"CREATE FUNCTION",description:"create-function}",source:"@site/docs/ru/sql-reference/statements/create/function.md",sourceDirName:"ru/sql-reference/statements/create",slug:"/ru/sql-reference/statements/create/function",permalink:"/docs/ru/sql-reference/statements/create/function",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/statements/create/function.md",tags:[],version:"current",sidebarPosition:38,frontMatter:{slug:"/ru/sql-reference/statements/create/function",sidebar_position:38,sidebar_label:"FUNCTION"},sidebar:"russia",previous:{title:"\u0421\u043b\u043e\u0432\u0430\u0440\u044c",permalink:"/docs/ru/sql-reference/statements/create/dictionary"},next:{title:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c",permalink:"/docs/ru/sql-reference/statements/create/user"}},s={},u=[],i={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"create-function"},"CREATE FUNCTION"),(0,a.kt)("p",null,"\u0421\u043e\u0437\u0434\u0430\u0435\u0442 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0443\u044e \u0444\u0443\u043d\u043a\u0446\u0438\u044e \u0438\u0437 \u043b\u044f\u043c\u0431\u0434\u0430-\u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u044f. \u0412\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432 \u0444\u0443\u043d\u043a\u0446\u0438\u0438, \u043a\u043e\u043d\u0441\u0442\u0430\u043d\u0442, \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u043e\u0432 \u0438 \u0432\u044b\u0437\u043e\u0432\u043e\u0432 \u0434\u0440\u0443\u0433\u0438\u0445 \u0444\u0443\u043d\u043a\u0446\u0438\u0439."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE FUNCTION name AS (parameter0, ...) -> expression\n")),(0,a.kt)("p",null,"\u0423 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u043b\u044c\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432."),(0,a.kt)("p",null,"\u0421\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0439 \u043d\u0430 \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0435\u043c\u044b\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u0418\u043c\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u043c \u0441\u0440\u0435\u0434\u0438 \u0432\u0441\u0435\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0445 \u0438 \u0441\u0438\u0441\u0442\u0435\u043c\u043d\u044b\u0445 \u0444\u0443\u043d\u043a\u0446\u0438\u0439."),(0,a.kt)("li",{parentName:"ul"},"\u0420\u0435\u043a\u0443\u0440\u0441\u0438\u0432\u043d\u044b\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0437\u0430\u043f\u0440\u0435\u0449\u0435\u043d\u044b."),(0,a.kt)("li",{parentName:"ul"},"\u0412\u0441\u0435 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0435\u0439, \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u043f\u0435\u0440\u0435\u0447\u0438\u0441\u043b\u0435\u043d\u044b \u0432 \u0441\u043f\u0438\u0441\u043a\u0435 \u0435\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432.")),(0,a.kt)("p",null,"\u0415\u0441\u043b\u0438 \u043a\u0430\u043a\u043e\u0435-\u043d\u0438\u0431\u0443\u0434\u044c \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0435 \u043d\u0430\u0440\u0443\u0448\u0430\u0435\u0442\u0441\u044f, \u0442\u043e \u043f\u0440\u0438 \u043f\u043e\u043f\u044b\u0442\u043a\u0435 \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0444\u0443\u043d\u043a\u0446\u0438\u044e \u0432\u043e\u0437\u043d\u0438\u043a\u0430\u0435\u0442 \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,a.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE FUNCTION linear_equation AS (x, k, b) -> k*x + b;\nSELECT number, linear_equation(number, 2, 1) FROM numbers(3);\n")),(0,a.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500number\u2500\u252c\u2500plus(multiply(2, number), 1)\u2500\u2510\n\u2502      0 \u2502                            1 \u2502\n\u2502      1 \u2502                            3 \u2502\n\u2502      2 \u2502                            5 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,"\u0412 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u043c \u0437\u0430\u043f\u0440\u043e\u0441\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0430\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u0432\u044b\u0437\u044b\u0432\u0430\u0435\u0442 ",(0,a.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/functions/conditional-functions"},"\u0443\u0441\u043b\u043e\u0432\u043d\u0443\u044e \u0444\u0443\u043d\u043a\u0446\u0438\u044e"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE FUNCTION parity_str AS (n) -> if(n % 2, 'odd', 'even');\nSELECT number, parity_str(number) FROM numbers(3);\n")),(0,a.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500number\u2500\u252c\u2500if(modulo(number, 2), 'odd', 'even')\u2500\u2510\n\u2502      0 \u2502 even                                 \u2502\n\u2502      1 \u2502 odd                                  \u2502\n\u2502      2 \u2502 even                                 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}p.isMDXComponent=!0}}]);