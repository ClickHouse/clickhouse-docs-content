"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[75360],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),k=c(r),d=i,f=k["".concat(u,".").concat(d)]||k[d]||p[d]||o;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,l=new Array(o);l[0]=k;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},28012:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return p}});var n=r(87462),i=r(63366),o=(r(67294),r(3905)),l=["components"],a={sidebar_position:7,sidebar_label:"\u0418\u0441\u0442\u043e\u0440\u0438\u044f ClickHouse"},u="\u0418\u0441\u0442\u043e\u0440\u0438\u044f ClickHouse",c={unversionedId:"ru/introduction/history",id:"ru/introduction/history",title:"\u0418\u0441\u0442\u043e\u0440\u0438\u044f ClickHouse",description:"istoriia-clickhouse}",source:"@site/docs/ru/introduction/history.md",sourceDirName:"ru/introduction",slug:"/ru/introduction/history",permalink:"/docs/ru/introduction/history",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/introduction/history.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,sidebar_label:"\u0418\u0441\u0442\u043e\u0440\u0438\u044f ClickHouse"},sidebar:"russia",previous:{title:"\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c",permalink:"/docs/ru/introduction/performance"},next:{title:"\u041d\u0430\u0447\u0430\u043b\u043e \u0440\u0430\u0431\u043e\u0442\u044b",permalink:"/docs/ru/getting-started/"}},s={},p=[{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0432 \u042f\u043d\u0434\u0435\u043a\u0441.\u041c\u0435\u0442\u0440\u0438\u043a\u0435 \u0438 \u0434\u0440\u0443\u0433\u0438\u0445 \u043e\u0442\u0434\u0435\u043b\u0430\u0445 \u042f\u043d\u0434\u0435\u043a\u0441\u0430",id:"ispolzovanie-v-iandeks-metrike-i-drugikh-otdelakh-iandeksa",level:2},{value:"\u0410\u0433\u0440\u0435\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u0438 \u043d\u0435\u0430\u0433\u0440\u0435\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435",id:"agregirovannye-i-neagregirovannye-dannye",level:2}],k={toc:p};function d(e){var t=e.components,r=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"istoriia-clickhouse"},"\u0418\u0441\u0442\u043e\u0440\u0438\u044f ClickHouse"),(0,o.kt)("p",null,"ClickHouse \u0438\u0437\u043d\u0430\u0447\u0430\u043b\u044c\u043d\u043e \u0440\u0430\u0437\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u043b\u0441\u044f \u0434\u043b\u044f \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0435\u043d\u0438\u044f \u0440\u0430\u0431\u043e\u0442\u044b ",(0,o.kt)("a",{parentName:"p",href:"https://metrika.yandex.ru/"},"\u042f\u043d\u0434\u0435\u043a\u0441.\u041c\u0435\u0442\u0440\u0438\u043a\u0438"),", ",(0,o.kt)("a",{parentName:"p",href:"http://w3techs.com/technologies/overview/traffic_analysis/all"},"\u0432\u0442\u043e\u0440\u043e\u0439 \u043a\u0440\u0443\u043f\u043d\u0435\u0439\u0448\u0435\u0439 \u0432 \u043c\u0438\u0440\u0435")," \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u044b \u0434\u043b\u044f \u0432\u0435\u0431 \u0430\u043d\u0430\u043b\u0438\u0442\u0438\u043a\u0438, \u0438 \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0430\u0435\u0442 \u0431\u044b\u0442\u044c \u0435\u0451 \u043a\u043b\u044e\u0447\u0435\u0432\u044b\u043c \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u043c. \u041f\u0440\u0438 \u0431\u043e\u043b\u0435\u0435 13 \u0442\u0440\u0438\u043b\u043b\u0438\u043e\u043d\u0430\u0445 \u0437\u0430\u043f\u0438\u0441\u0435\u0439 \u0432 \u0431\u0430\u0437\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u0438 \u0431\u043e\u043b\u0435\u0435 20 \u043c\u0438\u043b\u043b\u0438\u0430\u0440\u0434\u0430\u0445 \u0441\u043e\u0431\u044b\u0442\u0438\u0439 \u0432 \u0441\u0443\u0442\u043a\u0438, ClickHouse \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0438\u043d\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043b\u044c\u043d\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u0435 \u043e\u0442\u0447\u0451\u0442\u044b \u043d\u0430 \u043b\u0435\u0442\u0443 \u043d\u0430\u043f\u0440\u044f\u043c\u0443\u044e \u0438\u0437 \u043d\u0435\u0430\u0433\u0440\u0435\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445. \u0414\u0430\u043d\u043d\u0430\u044f \u0441\u0442\u0430\u0442\u044c\u044f \u0432\u043a\u0440\u0430\u0442\u0446\u0435 \u0434\u0435\u043c\u043e\u043d\u0441\u0442\u0440\u0438\u0440\u0443\u0435\u0442 \u043a\u0430\u043a\u0438\u0435 \u0446\u0435\u043b\u0438 \u0438\u0441\u0442\u043e\u0440\u0438\u0447\u0435\u0441\u043a\u0438 \u0441\u0442\u043e\u044f\u043b\u0438 \u043f\u0435\u0440\u0435\u0434 ClickHouse \u043d\u0430 \u0440\u0430\u043d\u043d\u0438\u0445 \u044d\u0442\u0430\u043f\u0430\u0445 \u0435\u0433\u043e \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044f."),(0,o.kt)("p",null,"\u042f\u043d\u0434\u0435\u043a\u0441.\u041c\u0435\u0442\u0440\u0438\u043a\u0430 \u043d\u0430 \u043b\u0435\u0442\u0443 \u0441\u0442\u0440\u043e\u0438\u0442 \u0438\u043d\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043b\u044c\u043d\u044b\u0435 \u043e\u0442\u0447\u0451\u0442\u044b \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u0445\u0438\u0442\u043e\u0432 \u0438 \u0432\u0438\u0437\u0438\u0442\u043e\u0432, \u0441 \u043f\u0435\u0440\u0438\u043e\u0434\u043e\u043c \u0438 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u043b\u044c\u043d\u044b\u043c\u0438 \u0441\u0435\u0433\u043c\u0435\u043d\u0442\u0430\u043c\u0438, \u0437\u0430\u0434\u0430\u0432\u0430\u0435\u043c\u044b\u043c\u0438 \u043a\u043e\u043d\u0435\u0447\u043d\u044b\u043c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u043c. \u0427\u0430\u0441\u0442\u043e \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u0435 \u0441\u043b\u043e\u0436\u043d\u044b\u0445 \u0430\u0433\u0440\u0435\u0433\u0430\u0442\u043e\u0432, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 \u0447\u0438\u0441\u043b\u0430 \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439. \u041d\u043e\u0432\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0434\u043b\u044f \u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u044f \u043e\u0442\u0447\u0435\u0442\u0430 \u043f\u043e\u0441\u0442\u0443\u043f\u0430\u044e\u0442 \u0432 \u0440\u0435\u0430\u043b\u044c\u043d\u043e\u043c \u0432\u0440\u0435\u043c\u0435\u043d\u0438."),(0,o.kt)("p",null,"\u041d\u0430 \u0430\u043f\u0440\u0435\u043b\u044c 2014, \u0432 \u042f\u043d\u0434\u0435\u043a\u0441.\u041c\u0435\u0442\u0440\u0438\u043a\u0443 \u043f\u043e\u0441\u0442\u0443\u043f\u0430\u043b\u043e \u043e\u043a\u043e\u043b\u043e 12 \u043c\u0438\u043b\u043b\u0438\u0430\u0440\u0434\u043e\u0432 \u0441\u043e\u0431\u044b\u0442\u0438\u0439 (\u043f\u043e\u043a\u0430\u0437\u043e\u0432 \u0441\u0442\u0440\u0430\u043d\u0438\u0446 \u0438 \u043a\u043b\u0438\u043a\u043e\u0432 \u043c\u044b\u0448\u0438) \u0435\u0436\u0435\u0434\u043d\u0435\u0432\u043d\u043e. \u0412\u0441\u0435 \u044d\u0442\u0438 \u0441\u043e\u0431\u044b\u0442\u0438\u044f \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u044b \u0434\u043b\u044f \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438 \u0441\u0442\u0440\u043e\u0438\u0442\u044c \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u043b\u044c\u043d\u044b\u0435 \u043e\u0442\u0447\u0451\u0442\u044b. \u041e\u0434\u0438\u043d \u0437\u0430\u043f\u0440\u043e\u0441 \u043c\u043e\u0436\u0435\u0442 \u043f\u043e\u0442\u0440\u0435\u0431\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0441\u043a\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043c\u0438\u043b\u043b\u0438\u043e\u043d\u044b \u0441\u0442\u0440\u043e\u043a \u0437\u0430 \u0432\u0440\u0435\u043c\u044f \u043d\u0435 \u0431\u043e\u043b\u0435\u0435 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u0441\u043e\u0442\u0435\u043d \u043c\u0438\u043b\u043b\u0438\u0441\u0435\u043a\u0443\u043d\u0434, \u0438\u043b\u0438 \u0441\u043e\u0442\u043d\u0438 \u043c\u0438\u043b\u043b\u0438\u043e\u043d\u043e\u0432 \u0441\u0442\u0440\u043e\u043a \u0437\u0430 \u0432\u0440\u0435\u043c\u044f \u043d\u0435 \u0431\u043e\u043b\u0435\u0435 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u0441\u0435\u043a\u0443\u043d\u0434."),(0,o.kt)("h2",{id:"ispolzovanie-v-iandeks-metrike-i-drugikh-otdelakh-iandeksa"},"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0432 \u042f\u043d\u0434\u0435\u043a\u0441.\u041c\u0435\u0442\u0440\u0438\u043a\u0435 \u0438 \u0434\u0440\u0443\u0433\u0438\u0445 \u043e\u0442\u0434\u0435\u043b\u0430\u0445 \u042f\u043d\u0434\u0435\u043a\u0441\u0430"),(0,o.kt)("p",null,"\u0412 \u042f\u043d\u0434\u0435\u043a\u0441.\u041c\u0435\u0442\u0440\u0438\u043a\u0435 ClickHouse \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u0437\u0430\u0434\u0430\u0447.\n\u041e\u0441\u043d\u043e\u0432\u043d\u0430\u044f \u0437\u0430\u0434\u0430\u0447\u0430 - \u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u0435 \u043e\u0442\u0447\u0451\u0442\u043e\u0432 \u0432 \u0440\u0435\u0436\u0438\u043c\u0435 \u043e\u043d\u043b\u0430\u0439\u043d \u043f\u043e \u043d\u0435\u0430\u0433\u0440\u0435\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u043c \u0434\u0430\u043d\u043d\u044b\u043c. \u0414\u043b\u044f \u0440\u0435\u0448\u0435\u043d\u0438\u044f \u044d\u0442\u043e\u0439 \u0437\u0430\u0434\u0430\u0447\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u043a\u043b\u0430\u0441\u0442\u0435\u0440 \u0438\u0437 374 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u0432, \u0445\u0440\u0430\u043d\u044f\u0449\u0438\u0439 \u0431\u043e\u043b\u0435\u0435 20,3 \u0442\u0440\u0438\u043b\u043b\u0438\u043e\u043d\u043e\u0432 \u0441\u0442\u0440\u043e\u043a \u0432 \u0431\u0430\u0437\u0435 \u0434\u0430\u043d\u043d\u044b\u0445. \u041e\u0431\u044a\u0451\u043c \u0441\u0436\u0430\u0442\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445, \u0431\u0435\u0437 \u0443\u0447\u0451\u0442\u0430 \u0434\u0443\u0431\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0438 \u0440\u0435\u043f\u043b\u0438\u043a\u0430\u0446\u0438\u0438, \u0441\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u043e\u043a\u043e\u043b\u043e 2 \u041f\u0411. \u041e\u0431\u044a\u0451\u043c \u043d\u0435\u0441\u0436\u0430\u0442\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 (\u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 tsv) \u0441\u043e\u0441\u0442\u0430\u0432\u0438\u043b \u0431\u044b, \u043f\u0440\u0438\u0431\u043b\u0438\u0437\u0438\u0442\u0435\u043b\u044c\u043d\u043e, 17 \u041f\u0411."),(0,o.kt)("p",null,"\u0422\u0430\u043a\u0436\u0435 ClickHouse \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u0434\u043b\u044f \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445 \u0412\u0435\u0431\u0432\u0438\u0437\u043e\u0440\u0430;"),(0,o.kt)("li",{parentName:"ul"},"\u0434\u043b\u044f \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u043f\u0440\u043e\u043c\u0435\u0436\u0443\u0442\u043e\u0447\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445;"),(0,o.kt)("li",{parentName:"ul"},"\u0434\u043b\u044f \u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u044f \u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u044b\u0445 \u043e\u0442\u0447\u0451\u0442\u043e\u0432 \u0410\u043d\u0430\u043b\u0438\u0442\u0438\u043a\u0430\u043c\u0438;"),(0,o.kt)("li",{parentName:"ul"},"\u0434\u043b\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u0432 \u0446\u0435\u043b\u044f\u0445 \u043e\u0442\u043b\u0430\u0434\u043a\u0438 \u0434\u0432\u0438\u0436\u043a\u0430 \u041c\u0435\u0442\u0440\u0438\u043a\u0438;"),(0,o.kt)("li",{parentName:"ul"},"\u0434\u043b\u044f \u0430\u043d\u0430\u043b\u0438\u0437\u0430 \u043b\u043e\u0433\u043e\u0432 \u0440\u0430\u0431\u043e\u0442\u044b API \u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u043e\u0433\u043e \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430.")),(0,o.kt)("p",null,"ClickHouse \u0438\u043c\u0435\u0435\u0442 \u0431\u043e\u043b\u0435\u0435 \u0434\u0435\u0441\u044f\u0442\u043a\u0430 \u0438\u043d\u0441\u0442\u0430\u043b\u043b\u044f\u0446\u0438\u0439 \u0432 \u0434\u0440\u0443\u0433\u0438\u0445 \u043e\u0442\u0434\u0435\u043b\u0430\u0445 \u042f\u043d\u0434\u0435\u043a\u0441\u0430: \u0432 \u0412\u0435\u0440\u0442\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0445 \u0441\u0435\u0440\u0432\u0438\u0441\u0430\u0445, \u041c\u0430\u0440\u043a\u0435\u0442\u0435, \u0414\u0438\u0440\u0435\u043a\u0442\u0435, \u0411\u041a, \u0411\u0438\u0437\u043d\u0435\u0441 \u0430\u043d\u0430\u043b\u0438\u0442\u0438\u043a\u0435, \u041c\u043e\u0431\u0438\u043b\u044c\u043d\u043e\u0439 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0435, AdFox, \u041f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0441\u0435\u0440\u0432\u0438\u0441\u0430\u0445 \u0438 \u0442 \u043f."),(0,o.kt)("h2",{id:"agregirovannye-i-neagregirovannye-dannye"},"\u0410\u0433\u0440\u0435\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u0438 \u043d\u0435\u0430\u0433\u0440\u0435\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435"),(0,o.kt)("p",null,"\u0421\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u043c\u043d\u0435\u043d\u0438\u0435, \u0447\u0442\u043e \u0434\u043b\u044f \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e \u0441\u0447\u0438\u0442\u0430\u0442\u044c \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0443, \u0434\u0430\u043d\u043d\u044b\u0435 \u043d\u0443\u0436\u043d\u043e \u0430\u0433\u0440\u0435\u0433\u0438\u0440\u043e\u0432\u0430\u0442\u044c, \u0442\u0430\u043a \u043a\u0430\u043a \u044d\u0442\u043e \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0443\u043c\u0435\u043d\u044c\u0448\u0438\u0442\u044c \u043e\u0431\u044a\u0451\u043c \u0434\u0430\u043d\u043d\u044b\u0445."),(0,o.kt)("p",null,"\u041d\u043e \u0430\u0433\u0440\u0435\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u044f\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u043e\u0447\u0435\u043d\u044c \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u043d\u044b\u043c \u0440\u0435\u0448\u0435\u043d\u0438\u0435\u043c, \u043f\u043e \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c \u043f\u0440\u0438\u0447\u0438\u043d\u0430\u043c:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u0432\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0437\u0430\u0440\u0430\u043d\u0435\u0435 \u0437\u043d\u0430\u0442\u044c \u043f\u0435\u0440\u0435\u0447\u0435\u043d\u044c \u043e\u0442\u0447\u0451\u0442\u043e\u0432, \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044e;"),(0,o.kt)("li",{parentName:"ul"},"\u0442\u043e \u0435\u0441\u0442\u044c, \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u043f\u043e\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u043b\u044c\u043d\u044b\u0439 \u043e\u0442\u0447\u0451\u0442;"),(0,o.kt)("li",{parentName:"ul"},"\u043f\u0440\u0438 \u0430\u0433\u0440\u0435\u0433\u0430\u0446\u0438\u0438 \u043f\u043e \u0431\u043e\u043b\u044c\u0448\u043e\u043c\u0443 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0443 \u043a\u043b\u044e\u0447\u0435\u0439, \u043e\u0431\u044a\u0451\u043c \u0434\u0430\u043d\u043d\u044b\u0445 \u043d\u0435 \u0443\u043c\u0435\u043d\u044c\u0448\u0430\u0435\u0442\u0441\u044f \u0438 \u0430\u0433\u0440\u0435\u0433\u0430\u0446\u0438\u044f \u0431\u0435\u0441\u043f\u043e\u043b\u0435\u0437\u043d\u0430;"),(0,o.kt)("li",{parentName:"ul"},"\u043f\u0440\u0438 \u0431\u043e\u043b\u044c\u0448\u043e\u043c \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0435 \u043e\u0442\u0447\u0451\u0442\u043e\u0432, \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442\u0441\u044f \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u043c\u043d\u043e\u0433\u043e \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u043e\u0432 \u0430\u0433\u0440\u0435\u0433\u0430\u0446\u0438\u0438 (\u043a\u043e\u043c\u0431\u0438\u043d\u0430\u0442\u043e\u0440\u043d\u044b\u0439 \u0432\u0437\u0440\u044b\u0432);"),(0,o.kt)("li",{parentName:"ul"},"\u043f\u0440\u0438 \u0430\u0433\u0440\u0435\u0433\u0430\u0446\u0438\u0438 \u043f\u043e \u043a\u043b\u044e\u0447\u0430\u043c \u0432\u044b\u0441\u043e\u043a\u043e\u0439 \u043a\u0430\u0440\u0434\u0438\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438 (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, URL) \u043e\u0431\u044a\u0451\u043c \u0434\u0430\u043d\u043d\u044b\u0445 \u0443\u043c\u0435\u043d\u044c\u0448\u0430\u0435\u0442\u0441\u044f \u043d\u0435 \u0441\u0438\u043b\u044c\u043d\u043e (\u043c\u0435\u043d\u0435\u0435 \u0447\u0435\u043c \u0432 2 \u0440\u0430\u0437\u0430);"),(0,o.kt)("li",{parentName:"ul"},"\u0438\u0437-\u0437\u0430 \u044d\u0442\u043e\u0433\u043e, \u043e\u0431\u044a\u0451\u043c \u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u0440\u0438 \u0430\u0433\u0440\u0435\u0433\u0430\u0446\u0438\u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0435 \u0443\u043c\u0435\u043d\u044c\u0448\u0438\u0442\u044c\u0441\u044f, \u0430 \u0432\u044b\u0440\u0430\u0441\u0442\u0438;"),(0,o.kt)("li",{parentName:"ul"},"\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438 \u0431\u0443\u0434\u0443\u0442 \u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u043d\u0435 \u0432\u0441\u0435 \u043e\u0442\u0447\u0451\u0442\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043c\u044b \u0434\u043b\u044f \u043d\u0438\u0445 \u043f\u043e\u0441\u0447\u0438\u0442\u0430\u0435\u043c - \u0442\u043e \u0435\u0441\u0442\u044c, \u0431\u043e\u043b\u044c\u0448\u0430\u044f \u0447\u0430\u0441\u0442\u044c \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u0439 \u0431\u0435\u0441\u043f\u043e\u043b\u0435\u0437\u043d\u0430;"),(0,o.kt)("li",{parentName:"ul"},"\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u043d\u0430\u0440\u0443\u0448\u0435\u043d\u0438\u0435 \u043b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u0446\u0435\u043b\u043e\u0441\u0442\u043d\u043e\u0441\u0442\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 \u0434\u043b\u044f \u0440\u0430\u0437\u043d\u044b\u0445 \u0430\u0433\u0440\u0435\u0433\u0430\u0446\u0438\u0439;")),(0,o.kt)("p",null,"\u041a\u0430\u043a \u0432\u0438\u0434\u043d\u043e, \u0435\u0441\u043b\u0438 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u0430\u0433\u0440\u0435\u0433\u0438\u0440\u043e\u0432\u0430\u0442\u044c, \u0438 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0441 \u043d\u0435\u0430\u0433\u0440\u0435\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u043c\u0438 \u0434\u0430\u043d\u043d\u044b\u043c\u0438, \u0442\u043e \u044d\u0442\u043e \u0434\u0430\u0436\u0435 \u043c\u043e\u0436\u0435\u0442 \u0443\u043c\u0435\u043d\u044c\u0448\u0438\u0442\u044c \u043e\u0431\u044a\u0451\u043c \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u0439."),(0,o.kt)("p",null,"\u0412\u043f\u0440\u043e\u0447\u0435\u043c, \u043f\u0440\u0438 \u0430\u0433\u0440\u0435\u0433\u0430\u0446\u0438\u0438, \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u0430\u044f \u0447\u0430\u0441\u0442\u044c \u0440\u0430\u0431\u043e\u0442\u044b \u0432\u044b\u043d\u043e\u0441\u0438\u0442\u0441\u044f \u0432 \u043e\u0444\u0444\u043b\u0430\u0439\u043d\u0435, \u0438 \u0435\u0451 \u043c\u043e\u0436\u043d\u043e \u0434\u0435\u043b\u0430\u0442\u044c \u0441\u0440\u0430\u0432\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0441\u043f\u043e\u043a\u043e\u0439\u043d\u043e. \u0414\u043b\u044f \u0441\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u044f, \u043f\u0440\u0438 \u043e\u043d\u043b\u0430\u0439\u043d \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u044f\u0445, \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u044f \u043d\u0430\u0434\u043e \u0434\u0435\u043b\u0430\u0442\u044c \u0442\u0430\u043a \u0431\u044b\u0441\u0442\u0440\u043e, \u043a\u0430\u043a \u044d\u0442\u043e \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e, \u0442\u0430\u043a \u043a\u0430\u043a \u0438\u043c\u0435\u043d\u043d\u043e \u0432 \u043c\u043e\u043c\u0435\u043d\u0442 \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u0439 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0436\u0434\u0451\u0442 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430."),(0,o.kt)("p",null,"\u0412 \u042f\u043d\u0434\u0435\u043a\u0441.\u041c\u0435\u0442\u0440\u0438\u043a\u0435 \u0435\u0441\u0442\u044c \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u0430\u044f \u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u0434\u043b\u044f \u0430\u0433\u0440\u0435\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 - Metrage, \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0431\u043e\u043b\u044c\u0448\u0438\u043d\u0441\u0442\u0432\u043e \u043e\u0442\u0447\u0451\u0442\u043e\u0432.\n\u0422\u0430\u043a\u0436\u0435 \u0432 \u042f\u043d\u0434\u0435\u043a\u0441.\u041c\u0435\u0442\u0440\u0438\u043a\u0435 \u0441 2009 \u0433\u043e\u0434\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043b\u0430\u0441\u044c \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u0430\u044f OLAP \u0411\u0414 \u0434\u043b\u044f \u043d\u0435\u0430\u0433\u0440\u0435\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 - OLAPServer, \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u0440\u0430\u043d\u044c\u0448\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u043b \u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0442\u043e\u0440 \u043e\u0442\u0447\u0451\u0442\u043e\u0432.\nOLAPServer \u0445\u043e\u0440\u043e\u0448\u043e \u043f\u043e\u0434\u0445\u043e\u0434\u0438\u043b \u0434\u043b\u044f \u043d\u0435\u0430\u0433\u0440\u0435\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445, \u043d\u043e \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u043b \u043c\u043d\u043e\u0433\u043e \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0439, \u043d\u0435 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0449\u0438\u0445 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0435\u0433\u043e \u0434\u043b\u044f \u0432\u0441\u0435\u0445 \u043e\u0442\u0447\u0451\u0442\u043e\u0432 \u0442\u0430\u043a, \u043a\u0430\u043a \u0445\u043e\u0447\u0435\u0442\u0441\u044f: \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0438 \u0442\u0438\u043f\u043e\u0432 \u0434\u0430\u043d\u043d\u044b\u0445 (\u0442\u043e\u043b\u044c\u043a\u043e \u0447\u0438\u0441\u043b\u0430), \u043d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0438\u043d\u043a\u0440\u0435\u043c\u0435\u043d\u0442\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 \u0440\u0435\u0430\u043b\u044c\u043d\u043e\u043c \u0432\u0440\u0435\u043c\u0435\u043d\u0438 (\u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0435\u0440\u0435\u0437\u0430\u043f\u0438\u0441\u044c\u044e \u0434\u0430\u043d\u043d\u044b\u0445 \u0437\u0430 \u0441\u0443\u0442\u043a\u0438). OLAPServer \u043d\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0421\u0423\u0411\u0414, \u0430 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0439 \u0411\u0414."),(0,o.kt)("p",null,"\u0427\u0442\u043e\u0431\u044b \u0441\u043d\u044f\u0442\u044c \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f OLAPServer-\u0430 \u0438 \u0440\u0435\u0448\u0438\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0443 \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u043d\u0435\u0430\u0433\u0440\u0435\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u043c\u0438 \u0434\u0430\u043d\u043d\u044b\u043c\u0438 \u0434\u043b\u044f \u0432\u0441\u0435\u0445 \u043e\u0442\u0447\u0451\u0442\u043e\u0432, \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0430\u043d\u0430 \u0421\u0423\u0411\u0414 ClickHouse."))}d.isMDXComponent=!0}}]);