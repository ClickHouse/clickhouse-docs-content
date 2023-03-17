"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[98400],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>y});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),p=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(s.Provider,{value:r},e.children)},i="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),i=p(t),g=a,y=i["".concat(s,".").concat(g)]||i[g]||f[g]||o;return t?n.createElement(y,l(l({ref:r},u),{},{components:t})):n.createElement(y,l({ref:r},u))}));function y(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=g;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c[i]="string"==typeof e?e:a,l[1]=c;for(var p=2;p<o;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},51529:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=t(87462),a=(t(67294),t(3905));const o={slug:"/ru/sql-reference/aggregate-functions/reference/entropy",sidebar_position:302},l="entropy",c={unversionedId:"ru/sql-reference/aggregate-functions/reference/entropy",id:"ru/sql-reference/aggregate-functions/reference/entropy",title:"entropy",description:"entropy}",source:"@site/docs/ru/sql-reference/aggregate-functions/reference/entropy.md",sourceDirName:"ru/sql-reference/aggregate-functions/reference",slug:"/ru/sql-reference/aggregate-functions/reference/entropy",permalink:"/docs/ru/sql-reference/aggregate-functions/reference/entropy",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/aggregate-functions/reference/entropy.md",tags:[],version:"current",sidebarPosition:302,frontMatter:{slug:"/ru/sql-reference/aggregate-functions/reference/entropy",sidebar_position:302},sidebar:"russia",previous:{title:"welchTTest",permalink:"/docs/ru/sql-reference/aggregate-functions/reference/welchttest"},next:{title:"mannWhitneyUTest",permalink:"/docs/ru/sql-reference/aggregate-functions/reference/mannwhitneyutest"}},s={},p=[],u={toc:p},i="wrapper";function f(e){let{components:r,...t}=e;return(0,a.kt)(i,(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"entropy"},"entropy"),(0,a.kt)("p",null,"\u0412\u044b\u0447\u0438\u0441\u043b\u044f\u0435\u0442 ",(0,a.kt)("a",{parentName:"p",href:"https://ru.wikipedia.org/wiki/%D0%98%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D0%B0%D1%8F_%D1%8D%D0%BD%D1%82%D1%80%D0%BE%D0%BF%D0%B8%D1%8F"},"\u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u043e\u043d\u043d\u0443\u044e \u044d\u043d\u0442\u0440\u043e\u043f\u0438\u044e")," \u0441\u0442\u043e\u043b\u0431\u0446\u0430 \u0434\u0430\u043d\u043d\u044b\u0445."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"entropy(val)\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"val")," \u2014 \u0441\u0442\u043e\u043b\u0431\u0435\u0446 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u043b\u044e\u0431\u043e\u0433\u043e \u0442\u0438\u043f\u0430")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u043e\u043d\u043d\u0430\u044f \u044d\u043d\u0442\u0440\u043e\u043f\u0438\u044f.")),(0,a.kt)("p",null,"\u0422\u0438\u043f: ",(0,a.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/float"},"Float64"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,a.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE entropy (`vals` UInt32,`strings` String) ENGINE = Memory;\n\nINSERT INTO entropy VALUES (1, 'A'), (1, 'A'), (1,'A'), (1,'A'), (2,'B'), (2,'B'), (2,'C'), (2,'D');\n\nSELECT entropy(vals), entropy(strings) FROM entropy;\n")),(0,a.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500entropy(vals)\u2500\u252c\u2500entropy(strings)\u2500\u2510\n\u2502             1 \u2502             1.75 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}f.isMDXComponent=!0}}]);