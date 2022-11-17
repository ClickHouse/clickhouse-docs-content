"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[49985],{3905:(e,r,n)=>{n.d(r,{Zo:()=>s,kt:()=>f});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function l(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?l(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=t.createContext({}),u=function(e){var r=t.useContext(i),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},s=function(e){var r=u(e.components);return t.createElement(i.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},g=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),g=u(n),f=a,m=g["".concat(i,".").concat(f)]||g[f]||p[f]||l;return n?t.createElement(m,o(o({ref:r},s),{},{components:n})):t.createElement(m,o({ref:r},s))}));function f(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=g;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<l;u++)o[u]=n[u];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}g.displayName="MDXCreateElement"},54566:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var t=n(87462),a=(n(67294),n(3905));const l={slug:"/ru/sql-reference/aggregate-functions/reference/argmax",sidebar_position:106},o="argMax",c={unversionedId:"ru/sql-reference/aggregate-functions/reference/argmax",id:"ru/sql-reference/aggregate-functions/reference/argmax",title:"argMax",description:"agg-function-argmax}",source:"@site/docs/ru/sql-reference/aggregate-functions/reference/argmax.md",sourceDirName:"ru/sql-reference/aggregate-functions/reference",slug:"/ru/sql-reference/aggregate-functions/reference/argmax",permalink:"/docs/ru/sql-reference/aggregate-functions/reference/argmax",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/aggregate-functions/reference/argmax.md",tags:[],version:"current",sidebarPosition:106,frontMatter:{slug:"/ru/sql-reference/aggregate-functions/reference/argmax",sidebar_position:106},sidebar:"russia",previous:{title:"argMin",permalink:"/docs/ru/sql-reference/aggregate-functions/reference/argmin"},next:{title:"avgWeighted",permalink:"/docs/ru/sql-reference/aggregate-functions/reference/avgweighted"}},i={},u=[],s={toc:u};function p(e){let{components:r,...n}=e;return(0,a.kt)("wrapper",(0,t.Z)({},s,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"agg-function-argmax"},"argMax"),(0,a.kt)("p",null,"\u0412\u044b\u0447\u0438\u0441\u043b\u044f\u0435\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",(0,a.kt)("inlineCode",{parentName:"p"},"arg")," \u043f\u0440\u0438 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u043c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0438 ",(0,a.kt)("inlineCode",{parentName:"p"},"val"),". \u0415\u0441\u043b\u0438 \u0435\u0441\u0442\u044c \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0440\u0430\u0437\u043d\u044b\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 ",(0,a.kt)("inlineCode",{parentName:"p"},"arg")," \u0434\u043b\u044f \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 ",(0,a.kt)("inlineCode",{parentName:"p"},"val"),", \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043f\u0435\u0440\u0432\u043e\u0435 \u043f\u043e\u043f\u0430\u0432\u0448\u0435\u0435\u0441\u044f \u0438\u0437 \u0442\u0430\u043a\u0438\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"argMax(arg, val)\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"arg")," \u2014 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"val")," \u2014 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",(0,a.kt)("inlineCode",{parentName:"li"},"arg"),", \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0435 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u043c\u0443 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044e ",(0,a.kt)("inlineCode",{parentName:"li"},"val"),".")),(0,a.kt)("p",null,"\u0422\u0438\u043f: \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0442\u0438\u043f\u0443 ",(0,a.kt)("inlineCode",{parentName:"p"},"arg"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,a.kt)("p",null,"\u0418\u0441\u0445\u043e\u0434\u043d\u0430\u044f \u0442\u0430\u0431\u043b\u0438\u0446\u0430:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500user\u2500\u2500\u2500\u2500\u2500\u252c\u2500salary\u2500\u2510\n\u2502 director \u2502   5000 \u2502\n\u2502 manager  \u2502   3000 \u2502\n\u2502 worker   \u2502   1000 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT argMax(user, salary), argMax(tuple(user, salary), salary) FROM salary;\n")),(0,a.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500argMax(user, salary)\u2500\u252c\u2500argMax(tuple(user, salary), salary)\u2500\u2510\n\u2502 director             \u2502 ('director',5000)                   \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}p.isMDXComponent=!0}}]);