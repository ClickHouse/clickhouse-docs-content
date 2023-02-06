"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[74233],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),i=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=i(r),m=a,d=p["".concat(c,".").concat(m)]||p[m]||f[m]||o;return r?n.createElement(d,l(l({ref:t},u),{},{components:r})):n.createElement(d,l({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,l[1]=s;for(var i=2;i<o;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},55345:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var n=r(87462),a=(r(67294),r(3905));const o={slug:"/ru/sql-reference/statements/select/format",sidebar_label:"FORMAT"},l="\u0421\u0435\u043a\u0446\u0438\u044f FORMAT",s={unversionedId:"ru/sql-reference/statements/select/format",id:"ru/sql-reference/statements/select/format",title:"\u0421\u0435\u043a\u0446\u0438\u044f FORMAT",description:"format-clause}",source:"@site/docs/ru/sql-reference/statements/select/format.md",sourceDirName:"ru/sql-reference/statements/select",slug:"/ru/sql-reference/statements/select/format",permalink:"/docs/ru/sql-reference/statements/select/format",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/statements/select/format.md",tags:[],version:"current",frontMatter:{slug:"/ru/sql-reference/statements/select/format",sidebar_label:"FORMAT"},sidebar:"russia",previous:{title:"EXCEPT",permalink:"/docs/ru/sql-reference/statements/select/except"},next:{title:"FROM",permalink:"/docs/ru/sql-reference/statements/select/from"}},c={},i=[{value:"\u0424\u043e\u0440\u043c\u0430\u0442 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e",id:"default-format",level:2},{value:"\u0414\u0435\u0442\u0430\u043b\u0438 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438",id:"implementation-details",level:2}],u={toc:i},p="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"format-clause"},"\u0421\u0435\u043a\u0446\u0438\u044f FORMAT"),(0,a.kt)("p",null,"ClickHouse \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0448\u0438\u0440\u043e\u043a\u0438\u0439 \u0441\u043f\u0435\u043a\u0442\u0440 ",(0,a.kt)("a",{parentName:"p",href:"/docs/ru/interfaces/formats"},"\u0444\u043e\u0440\u043c\u0430\u0442\u043e\u0432 \u0441\u0435\u0440\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438")," \u044d\u0442\u043e \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u043e, \u0432 \u0447\u0430\u0441\u0442\u043d\u043e\u0441\u0442\u0438, \u0434\u043b\u044f \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u0432 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432. \u0421\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u043f\u043e\u0441\u043e\u0431\u043e\u0432 \u0432\u044b\u0431\u043e\u0440\u0430 \u0444\u043e\u0440\u043c\u0430\u0442\u0430 \u0434\u043b\u044f ",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT"),", \u043e\u0434\u0438\u043d \u0438\u0437 \u043d\u0438\u0445 \u0437\u0430\u043a\u043b\u044e\u0447\u0430\u0435\u0442\u0441\u044f \u0432 \u0442\u043e\u043c, \u0447\u0442\u043e\u0431\u044b \u0443\u043a\u0430\u0437\u0430\u0442\u044c ",(0,a.kt)("inlineCode",{parentName:"p"},"FORMAT format")," \u0432 \u043a\u043e\u043d\u0446\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u0430, \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0438\u0440\u0443\u044e\u0449\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0432 \u043b\u044e\u0431\u043e\u043c \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u043c \u0444\u043e\u0440\u043c\u0430\u0442\u0435."),(0,a.kt)("p",null,"\u041e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442 \u043c\u043e\u0436\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0434\u043b\u044f \u0443\u0434\u043e\u0431\u0441\u0442\u0432\u0430, \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438 \u0441 \u0434\u0440\u0443\u0433\u0438\u043c\u0438 \u0441\u0438\u0441\u0442\u0435\u043c\u0430\u043c\u0438 \u0438\u043b\u0438 \u0434\u043b\u044f \u043f\u043e\u0432\u044b\u0448\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438."),(0,a.kt)("h2",{id:"default-format"},"\u0424\u043e\u0440\u043c\u0430\u0442 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e"),(0,a.kt)("p",null,"\u0415\u0441\u043b\u0438 ",(0,a.kt)("inlineCode",{parentName:"p"},"FORMAT")," \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043e\u043f\u0443\u0449\u0435\u043d\u043e, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0444\u043e\u0440\u043c\u0430\u0442 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043a\u0430\u043a \u043e\u0442 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a, \u0442\u0430\u043a \u0438 \u043e\u0442 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u043e\u0433\u043e \u0434\u043b\u044f \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u043a \u0441\u0435\u0440\u0432\u0435\u0440\u0443 ClickHouse. \u0414\u043b\u044f ",(0,a.kt)("a",{parentName:"p",href:"/docs/ru/interfaces/http"},"HTTP \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430")," \u0438 ",(0,a.kt)("a",{parentName:"p",href:"/docs/ru/interfaces/cli"},"\u043a\u043b\u0438\u0435\u043d\u0442\u0430 \u043a\u043e\u043c\u0430\u043d\u0434\u043d\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0438")," \u0432 \u043f\u0430\u043a\u0435\u0442\u043d\u043e\u043c \u0440\u0435\u0436\u0438\u043c\u0435, \u0444\u043e\u0440\u043c\u0430\u0442 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u2014 ",(0,a.kt)("inlineCode",{parentName:"p"},"TabSeparated"),". \u0414\u043b\u044f \u043a\u043b\u0438\u0435\u043d\u0442\u0430 \u043a\u043e\u043c\u0430\u043d\u0434\u043d\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0438 \u0432 \u0438\u043d\u0442\u0435\u0440\u0430\u043a\u0442\u0438\u0432\u043d\u043e\u043c \u0440\u0435\u0436\u0438\u043c\u0435 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0444\u043e\u0440\u043c\u0430\u0442 ",(0,a.kt)("inlineCode",{parentName:"p"},"PrettyCompact")," (\u043e\u043d \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442 \u043a\u043e\u043c\u043f\u0430\u043a\u0442\u043d\u044b\u0435 \u0447\u0435\u043b\u043e\u0432\u0435\u043a\u043e\u0447\u0438\u0442\u0430\u0435\u043c\u044b\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u044b)."),(0,a.kt)("h2",{id:"implementation-details"},"\u0414\u0435\u0442\u0430\u043b\u0438 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438"),(0,a.kt)("p",null,"\u041f\u0440\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 \u043a\u043b\u0438\u0435\u043d\u0442\u0430 \u043a\u043e\u043c\u0430\u043d\u0434\u043d\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0438 \u0434\u0430\u043d\u043d\u044b\u0435 \u0432\u0441\u0435\u0433\u0434\u0430 \u043f\u0435\u0440\u0435\u0434\u0430\u044e\u0442\u0441\u044f \u043f\u043e \u0441\u0435\u0442\u0438 \u0432\u043e \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0435\u043c \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e\u043c \u0444\u043e\u0440\u043c\u0430\u0442\u0435 (",(0,a.kt)("inlineCode",{parentName:"p"},"Native"),"). \u041a\u043b\u0438\u0435\u043d\u0442 \u0441\u0430\u043c\u043e\u0441\u0442\u043e\u044f\u0442\u0435\u043b\u044c\u043d\u043e \u0438\u043d\u0442\u0435\u0440\u043f\u0440\u0435\u0442\u0438\u0440\u0443\u0435\u0442 ",(0,a.kt)("inlineCode",{parentName:"p"},"FORMAT")," \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u0438 \u0444\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u0443\u0435\u0442 \u0441\u0430\u043c\u0438 \u0434\u0430\u043d\u043d\u044b\u0435 (\u0442\u0435\u043c \u0441\u0430\u043c\u044b\u043c \u043e\u0441\u0432\u043e\u0431\u043e\u0436\u0434\u0430\u044f \u0441\u0435\u0442\u044c \u0438 \u0441\u0435\u0440\u0432\u0435\u0440 \u043e\u0442 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0439 \u043d\u0430\u0433\u0440\u0443\u0437\u043a\u0438)."))}f.isMDXComponent=!0}}]);