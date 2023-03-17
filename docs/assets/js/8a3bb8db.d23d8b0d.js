"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[44718],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),g=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=g(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=g(t),y=i,f=u["".concat(s,".").concat(y)]||u[y]||p[y]||o;return t?r.createElement(f,l(l({ref:n},c),{},{components:t})):r.createElement(f,l({ref:n},c))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,l=new Array(o);l[0]=y;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a[u]="string"==typeof e?e:i,l[1]=a;for(var g=2;g<o;g++)l[g]=t[g];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},90081:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>g});var r=t(87462),i=(t(67294),t(3905));const o={slug:"/ru/engines/table-engines/log-family/tinylog",sidebar_position:34,sidebar_label:"TinyLog"},l="TinyLog",a={unversionedId:"ru/engines/table-engines/log-family/tinylog",id:"ru/engines/table-engines/log-family/tinylog",title:"TinyLog",description:"tinylog}",source:"@site/docs/ru/engines/table-engines/log-family/tinylog.md",sourceDirName:"ru/engines/table-engines/log-family",slug:"/ru/engines/table-engines/log-family/tinylog",permalink:"/docs/ru/engines/table-engines/log-family/tinylog",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/engines/table-engines/log-family/tinylog.md",tags:[],version:"current",sidebarPosition:34,frontMatter:{slug:"/ru/engines/table-engines/log-family/tinylog",sidebar_position:34,sidebar_label:"TinyLog"},sidebar:"russia",previous:{title:"Log",permalink:"/docs/ru/engines/table-engines/log-family/log"},next:{title:"\u0414\u0432\u0438\u0436\u043a\u0438 \u0442\u0430\u0431\u043b\u0438\u0446 \u0434\u043b\u044f \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438",permalink:"/docs/ru/engines/table-engines/integrations/"}},s={},g=[],c={toc:g},u="wrapper";function p(e){let{components:n,...t}=e;return(0,i.kt)(u,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"tinylog"},"TinyLog"),(0,i.kt)("p",null,"\u0414\u0432\u0438\u0436\u043e\u043a \u043e\u0442\u043d\u043e\u0441\u0438\u0442\u0441\u044f \u043a \u0441\u0435\u043c\u0435\u0439\u0441\u0442\u0432\u0443 \u0434\u0432\u0438\u0436\u043a\u043e\u0432 Log. \u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u043e\u0431\u0449\u0438\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u0438 \u0440\u0430\u0437\u043b\u0438\u0447\u0438\u044f \u0434\u0432\u0438\u0436\u043a\u043e\u0432 \u0432 \u0441\u0442\u0430\u0442\u044c\u0435 ",(0,i.kt)("a",{parentName:"p",href:"/docs/ru/engines/table-engines/log-family/"},"\u0421\u0435\u043c\u0435\u0439\u0441\u0442\u0432\u043e Log"),"."),(0,i.kt)("p",null,"\u0422\u0438\u043f\u0438\u0447\u043d\u044b\u0439 \u0441\u043f\u043e\u0441\u043e\u0431 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u044d\u0442\u043e\u0439 \u0434\u0432\u0438\u0436\u043a\u0430 \u2014 \u044d\u0442\u043e write-once: \u0441\u043d\u0430\u0447\u0430\u043b\u0430 \u0434\u0430\u043d\u043d\u044b\u0435 \u043e\u0434\u0438\u043d \u0440\u0430\u0437 \u0437\u0430\u043f\u0438\u0441\u044b\u0432\u0430\u044e\u0442\u0441\u044f, \u0430 \u0437\u0430\u0442\u0435\u043c \u0447\u0438\u0442\u0430\u044e\u0442\u0441\u044f \u0441\u0442\u043e\u043b\u044c\u043a\u043e \u0440\u0430\u0437, \u0441\u043a\u043e\u043b\u044c\u043a\u043e \u044d\u0442\u043e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0441 \u0434\u0432\u0438\u0436\u043a\u043e\u043c ",(0,i.kt)("inlineCode",{parentName:"p"},"TinyLog")," \u0434\u043b\u044f \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u043c\u0435\u0436\u0443\u0442\u043e\u0447\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u044e\u0442\u0441\u044f \u043d\u0435\u0431\u043e\u043b\u044c\u0448\u0438\u043c\u0438 \u0431\u043b\u043e\u043a\u0430\u043c\u0438. \u0423\u0447\u0442\u0438\u0442\u0435, \u0447\u0442\u043e \u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u0432 \u0431\u043e\u043b\u044c\u0448\u043e\u043c \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0435 \u043c\u0435\u043b\u043a\u0438\u0445 \u0442\u0430\u0431\u043b\u0438\u0446 \u043d\u0435\u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e."),(0,i.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441\u044b \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u044e\u0442\u0441\u044f \u0432 \u043e\u0434\u0438\u043d \u043f\u043e\u0442\u043e\u043a. \u0422\u043e \u0435\u0441\u0442\u044c, \u044d\u0442\u043e\u0442 \u0434\u0432\u0438\u0436\u043e\u043a \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d \u0434\u043b\u044f \u0441\u0440\u0430\u0432\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u043c\u0430\u043b\u0435\u043d\u044c\u043a\u0438\u0445 \u0442\u0430\u0431\u043b\u0438\u0446 (\u0434\u043e 1 000 000 \u0441\u0442\u0440\u043e\u043a). \u042d\u0442\u043e\u0442 \u0434\u0432\u0438\u0436\u043e\u043a \u0442\u0430\u0431\u043b\u0438\u0446 \u0438\u043c\u0435\u0435\u0442 \u0441\u043c\u044b\u0441\u043b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432 \u0442\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435, \u043a\u043e\u0433\u0434\u0430 \u0443 \u0432\u0430\u0441 \u0435\u0441\u0442\u044c \u043c\u043d\u043e\u0433\u043e \u043c\u0430\u043b\u0435\u043d\u044c\u043a\u0438\u0445 \u0442\u0430\u0431\u043b\u0438\u0446, \u0442\u0430\u043a \u043a\u0430\u043a \u043e\u043d \u043f\u0440\u043e\u0449\u0435, \u0447\u0435\u043c \u0434\u0432\u0438\u0436\u043e\u043a ",(0,i.kt)("a",{parentName:"p",href:"/docs/ru/engines/table-engines/log-family/log"},"Log")," (\u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u043e\u0442\u043a\u0440\u044b\u0432\u0430\u0442\u044c \u043c\u0435\u043d\u044c\u0448\u0435 \u0444\u0430\u0439\u043b\u043e\u0432)."))}p.isMDXComponent=!0}}]);