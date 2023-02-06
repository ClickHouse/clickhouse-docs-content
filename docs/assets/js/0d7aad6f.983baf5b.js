"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[635],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>m});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),p=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},l=function(e){var r=p(e.components);return n.createElement(i.Provider,{value:r},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),s=p(t),f=a,m=s["".concat(i,".").concat(f)]||s[f]||d[f]||o;return t?n.createElement(m,c(c({ref:r},l),{},{components:t})):n.createElement(m,c({ref:r},l))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=f;var u={};for(var i in r)hasOwnProperty.call(r,i)&&(u[i]=r[i]);u.originalType=e,u[s]="string"==typeof e?e:a,c[1]=u;for(var p=2;p<o;p++)c[p]=t[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},26473:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var n=t(87462),a=(t(67294),t(3905));const o={slug:"/ru/faq/general/mapreduce",title:"Why not use something like MapReduce?",sidebar_position:110},c="\u041f\u043e\u0447\u0435\u043c\u0443 \u0431\u044b \u043d\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u0442\u0438\u043f\u0430 MapReduce?",u={unversionedId:"ru/faq/general/mapreduce",id:"ru/faq/general/mapreduce",title:"Why not use something like MapReduce?",description:"why-not-use-something-like-mapreduce}",source:"@site/docs/ru/faq/general/mapreduce.md",sourceDirName:"ru/faq/general",slug:"/ru/faq/general/mapreduce",permalink:"/docs/ru/faq/general/mapreduce",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/faq/general/mapreduce.md",tags:[],version:"current",sidebarPosition:110,frontMatter:{slug:"/ru/faq/general/mapreduce",title:"Why not use something like MapReduce?",sidebar_position:110},sidebar:"russia",previous:{title:"\u0427\u0442\u043e \u0442\u0430\u043a\u043e\u0435 \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432\u0430\u044f \u0431\u0430\u0437\u0430 \u0434\u0430\u043d\u043d\u044b\u0445?",permalink:"/docs/ru/faq/general/columnar-database"},next:{title:"How do I contribute code to ClickHouse?",permalink:"/docs/ru/faq/general/how-do-i-contribute-code-to-clickhouse"}},i={},p=[],l={toc:p},s="wrapper";function d(e){let{components:r,...t}=e;return(0,a.kt)(s,(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"why-not-use-something-like-mapreduce"},"\u041f\u043e\u0447\u0435\u043c\u0443 \u0431\u044b \u043d\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u0442\u0438\u043f\u0430 MapReduce?"),(0,a.kt)("p",null,"\u0421\u0438\u0441\u0442\u0435\u043c\u0430\u043c\u0438 \u0442\u0438\u043f\u0430 MapReduce \u0431\u0443\u0434\u0435\u043c \u043d\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0451\u043d\u043d\u044b\u0445 \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u0439, \u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0432\u0451\u0440\u0442\u043a\u0438 \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043d\u0430 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0451\u043d\u043d\u043e\u0439 \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0438. \u041d\u0430\u0438\u0431\u043e\u043b\u0435\u0435 \u0440\u0430\u0441\u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0451\u043d\u043d\u043e\u0435 \u0440\u0435\u0448\u0435\u043d\u0438\u0435 \u0441 \u043e\u0442\u043a\u0440\u044b\u0442\u044b\u043c \u043a\u043e\u0434\u043e\u043c \u0432 \u0434\u0430\u043d\u043d\u043e\u043c \u043a\u043b\u0430\u0441\u0441\u0435 \u2014 ",(0,a.kt)("a",{parentName:"p",href:"http://hadoop.apache.org"},"Apache Hadoop"),". \u0412 \u043a\u0440\u0443\u043f\u043d\u044b\u0445 IT \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u044f\u0445 \u0432\u0440\u043e\u0434\u0435 Google \u0438\u043b\u0438 \u042f\u043d\u0434\u0435\u043a\u0441 \u0447\u0430\u0441\u0442\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0435 \u0437\u0430\u043a\u0440\u044b\u0442\u044b\u0435 \u0440\u0435\u0448\u0435\u043d\u0438\u044f."),(0,a.kt)("p",null,'\u0422\u0430\u043a\u0438\u0435 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u043d\u0435 \u043f\u043e\u0434\u0445\u043e\u0434\u044f\u0442 \u0434\u043b\u044f \u043e\u043d\u043b\u0430\u0439\u043d \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u0432 \u0441\u0438\u043b\u0443 \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u0431\u043e\u043b\u044c\u0448\u043e\u0439 \u0437\u0430\u0434\u0435\u0440\u0436\u043a\u0438. \u0422\u043e \u0435\u0441\u0442\u044c \u043d\u0435 \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u044b \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0431\u044d\u043a\u0435\u043d\u0434\u0430 \u0434\u043b\u044f \u0432\u0435\u0431-\u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430. \u0422\u0430\u043a\u0436\u0435 \u044d\u0442\u0438 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u043d\u0435 \u043f\u043e\u0434\u0445\u043e\u0434\u044f\u0442 \u0434\u043b\u044f \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 \u0440\u0435\u0430\u043b\u044c\u043d\u043e\u043c \u0432\u0440\u0435\u043c\u0435\u043d\u0438. \u0420\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0451\u043d\u043d\u0430\u044f \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043d\u0435 \u043e\u043f\u0442\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u043c \u0441\u043f\u043e\u0441\u043e\u0431\u043e\u043c \u0434\u043b\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 \u0441\u0432\u0451\u0440\u0442\u043a\u0438 \u0432 \u0441\u043b\u0443\u0447\u0430\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432, \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u044e\u0449\u0438\u0445\u0441\u044f \u0432 \u0440\u0435\u0436\u0438\u043c\u0435 \u043e\u043d\u043b\u0430\u0439\u043d, \u043f\u043e\u0442\u043e\u043c\u0443 \u0447\u0442\u043e \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 \u0438 \u0432\u0441\u0435 \u043f\u0440\u043e\u043c\u0435\u0436\u0443\u0442\u043e\u0447\u043d\u044b\u0435 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b (\u0435\u0441\u043b\u0438 \u0442\u0430\u043a\u0438\u0435 \u0435\u0441\u0442\u044c) \u043f\u043e\u043c\u0435\u0449\u0430\u044e\u0442\u0441\u044f \u0432 \u043e\u043f\u0435\u0440\u0430\u0442\u0438\u0432\u043d\u0443\u044e \u043f\u0430\u043c\u044f\u0442\u044c \u043d\u0430 \u043e\u0434\u043d\u043e\u043c \u0441\u0435\u0440\u0432\u0435\u0440\u0435. \u0412 \u0442\u0430\u043a\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u043e\u043f\u0442\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u043c \u0441\u043f\u043e\u0441\u043e\u0431\u043e\u043c \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 \u0441\u0432\u0451\u0440\u0442\u043a\u0438 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0445\u0435\u0448-\u0442\u0430\u0431\u043b\u0438\u0446\u0430. \u0427\u0430\u0441\u0442\u044b\u043c \u0441\u043f\u043e\u0441\u043e\u0431\u043e\u043c \u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u0438 "map-reduce" \u0437\u0430\u0434\u0430\u0447 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043f\u0440\u0435\u0434\u0430\u0433\u0440\u0435\u0433\u0430\u0446\u0438\u044f (\u0447\u0430\u0441\u0442\u0438\u0447\u043d\u0430\u044f \u0441\u0432\u0451\u0440\u0442\u043a\u0430) \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c \u0445\u0435\u0448-\u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0432 \u043e\u043f\u0435\u0440\u0430\u0442\u0438\u0432\u043d\u043e\u0439 \u043f\u0430\u043c\u044f\u0442\u0438. \u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0434\u0435\u043b\u0430\u0435\u0442 \u044d\u0442\u0443 \u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u044e \u0432 \u0440\u0443\u0447\u043d\u043e\u043c \u0440\u0435\u0436\u0438\u043c\u0435. \u0420\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0451\u043d\u043d\u0430\u044f \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430 \u2014 \u043e\u0441\u043d\u043e\u0432\u043d\u0430\u044f \u043f\u0440\u0438\u0447\u0438\u043d\u0430 \u0442\u043e\u0440\u043c\u043e\u0437\u043e\u0432 \u043f\u0440\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0438 \u043d\u0435\u0441\u043b\u043e\u0436\u043d\u044b\u0445 \u0437\u0430\u0434\u0430\u0447 \u0442\u0438\u043f\u0430 "map-reduce".'),(0,a.kt)("p",null,"\u0411\u043e\u043b\u044c\u0448\u0438\u043d\u0441\u0442\u0432\u043e \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0439 MapReduce \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0442\u044c \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u043b\u044c\u043d\u044b\u0439 \u043a\u043e\u0434 \u043d\u0430 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0435. \u041d\u043e \u0434\u043b\u044f OLAP-\u0437\u0430\u0434\u0430\u0447 \u043b\u0443\u0447\u0448\u0435 \u043f\u043e\u0434\u0445\u043e\u0434\u0438\u0442 \u0434\u0435\u043a\u043b\u0430\u0440\u0430\u0442\u0438\u0432\u043d\u044b\u0439 \u044f\u0437\u044b\u043a \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0431\u044b\u0441\u0442\u0440\u043e \u043f\u0440\u043e\u0432\u043e\u0434\u0438\u0442\u044c \u0438\u0441\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u044f. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0434\u043b\u044f Hadoop \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0442 Hive \u0438 Pig. \u0422\u0430\u043a\u0436\u0435 \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u043d\u0430 Cloudera Impala, Shark (\u0443\u0441\u0442\u0430\u0440\u0435\u0432\u0448\u0438\u0439) \u0434\u043b\u044f Spark, \u0430 \u0442\u0430\u043a\u0436\u0435 Spark SQL, Presto, Apache Drill. \u0412\u043f\u0440\u043e\u0447\u0435\u043c, \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u043f\u0440\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0438 \u0442\u0430\u043a\u0438\u0445 \u0437\u0430\u0434\u0430\u0447 \u043e\u0447\u0435\u043d\u044c \u043d\u0435\u043e\u043f\u0442\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f, \u0435\u0441\u043b\u0438 \u0441\u0440\u0430\u0432\u043d\u0438\u0432\u0430\u0442\u044c \u0441\u043e \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u043c\u0438 \u0441\u0438\u0441\u0442\u0435\u043c\u0430\u043c\u0438, \u0430 \u043e\u0442\u043d\u043e\u0441\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0432\u044b\u0441\u043e\u043a\u0430\u044f \u0437\u0430\u0434\u0435\u0440\u0436\u043a\u0430 \u043d\u0435 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u044d\u0442\u0438 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0431\u044d\u043a\u0435\u043d\u0434\u0430 \u0434\u043b\u044f \u0432\u0435\u0431-\u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430."))}d.isMDXComponent=!0}}]);