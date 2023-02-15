"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[8214],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>m});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=n.createContext({}),o=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},d=function(e){var r=o(e.components);return n.createElement(l.Provider,{value:r},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=o(t),f=i,m=u["".concat(l,".").concat(f)]||u[f]||p[f]||a;return t?n.createElement(m,c(c({ref:r},d),{},{components:t})):n.createElement(m,c({ref:r},d))}));function m(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,c=new Array(a);c[0]=f;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[u]="string"==typeof e?e:i,c[1]=s;for(var o=2;o<a;o++)c[o]=t[o];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},86055:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>o});var n=t(87462),i=(t(67294),t(3905));const a={slug:"/ru/sql-reference/dictionaries/external-dictionaries/external-dicts",sidebar_position:39,sidebar_label:"\u0412\u043d\u0435\u0448\u043d\u0438\u0435 \u0441\u043b\u043e\u0432\u0430\u0440\u0438"},c="\u0412\u043d\u0435\u0448\u043d\u0438\u0435 \u0441\u043b\u043e\u0432\u0430\u0440\u0438",s={unversionedId:"ru/sql-reference/dictionaries/external-dictionaries/external-dicts",id:"ru/sql-reference/dictionaries/external-dictionaries/external-dicts",title:"\u0412\u043d\u0435\u0448\u043d\u0438\u0435 \u0441\u043b\u043e\u0432\u0430\u0440\u0438",description:"dicts-external-dicts}",source:"@site/docs/ru/sql-reference/dictionaries/external-dictionaries/external-dicts.md",sourceDirName:"ru/sql-reference/dictionaries/external-dictionaries",slug:"/ru/sql-reference/dictionaries/external-dictionaries/external-dicts",permalink:"/docs/ru/sql-reference/dictionaries/external-dictionaries/external-dicts",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/dictionaries/external-dictionaries/external-dicts.md",tags:[],version:"current",sidebarPosition:39,frontMatter:{slug:"/ru/sql-reference/dictionaries/external-dictionaries/external-dicts",sidebar_position:39,sidebar_label:"\u0412\u043d\u0435\u0448\u043d\u0438\u0435 \u0441\u043b\u043e\u0432\u0430\u0440\u0438"},sidebar:"russia",previous:{title:"\u0412\u043d\u0435\u0448\u043d\u0438\u0435 \u0441\u043b\u043e\u0432\u0430\u0440\u0438",permalink:"/docs/ru/sql-reference/dictionaries/external-dictionaries/"},next:{title:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0432\u043d\u0435\u0448\u043d\u0435\u0433\u043e \u0441\u043b\u043e\u0432\u0430\u0440\u044f",permalink:"/docs/ru/sql-reference/dictionaries/external-dictionaries/external-dicts-dict"}},l={},o=[{value:"\u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0442\u0430\u043a\u0436\u0435",id:"ext-dicts-see-also",level:2}],d={toc:o},u="wrapper";function p(e){let{components:r,...t}=e;return(0,i.kt)(u,(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"dicts-external-dicts"},"\u0412\u043d\u0435\u0448\u043d\u0438\u0435 \u0441\u043b\u043e\u0432\u0430\u0440\u0438"),(0,i.kt)("p",null,"\u0421\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0442\u044c \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0435 \u0441\u043b\u043e\u0432\u0430\u0440\u0438 \u0438\u0437 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0445 \u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u043e\u0432 \u0434\u0430\u043d\u043d\u044b\u0445. \u0418\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u043e\u043c \u0434\u0430\u043d\u043d\u044b\u0445 \u0434\u043b\u044f \u0441\u043b\u043e\u0432\u0430\u0440\u044f \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u044b\u0439/\u0438\u0441\u043f\u043e\u043b\u043d\u044f\u0435\u043c\u044b\u0439 \u0444\u0430\u0439\u043b, HTTP(s) \u0440\u0435\u0441\u0443\u0440\u0441 \u0438\u043b\u0438 \u0434\u0440\u0443\u0433\u0430\u044f \u0421\u0423\u0411\u0414. \u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435 \xab",(0,i.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-sources"},"\u0418\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u0438 \u0432\u043d\u0435\u0448\u043d\u0438\u0445 \u0441\u043b\u043e\u0432\u0430\u0440\u0435\u0439"),"\xbb."),(0,i.kt)("p",null,"ClickHouse:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u041f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u0438\u043b\u0438 \u0447\u0430\u0441\u0442\u0438\u0447\u043d\u043e \u0445\u0440\u0430\u043d\u0438\u0442 \u0441\u043b\u043e\u0432\u0430\u0440\u0438 \u0432 \u043e\u043f\u0435\u0440\u0430\u0442\u0438\u0432\u043d\u043e\u0439 \u043f\u0430\u043c\u044f\u0442\u0438."),(0,i.kt)("li",{parentName:"ul"},"\u041f\u0435\u0440\u0438\u043e\u0434\u0438\u0447\u0435\u0441\u043a\u0438 \u043e\u0431\u043d\u043e\u0432\u043b\u044f\u0435\u0442 \u0438\u0445 \u0438 \u0434\u0438\u043d\u0430\u043c\u0438\u0447\u0435\u0441\u043a\u0438 \u043f\u043e\u0434\u0433\u0440\u0443\u0436\u0430\u0435\u0442 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f."),(0,i.kt)("li",{parentName:"ul"},"\u041f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u0432\u043d\u0435\u0448\u043d\u0438\u0435 \u0441\u043b\u043e\u0432\u0430\u0440\u0438 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e xml-\u0444\u0430\u0439\u043b\u043e\u0432 \u0438\u043b\u0438 ",(0,i.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/statements/create/dictionary#create-dictionary-query"},"DDL-\u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432"),".")),(0,i.kt)("p",null,"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f \u0432\u043d\u0435\u0448\u043d\u0438\u0445 \u0441\u043b\u043e\u0432\u0430\u0440\u0435\u0439 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u0432 \u043e\u0434\u043d\u043e\u043c \u0438\u043b\u0438 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 xml-\u0444\u0430\u0439\u043b\u0430\u0445. \u041f\u0443\u0442\u044c \u043a \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0432 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0435 ",(0,i.kt)("a",{parentName:"p",href:"/docs/ru/operations/server-configuration-parameters/settings#server_configuration_parameters-dictionaries_config"},"dictionaries_config"),"."),(0,i.kt)("p",null,"\u0421\u043b\u043e\u0432\u0430\u0440\u0438 \u043c\u043e\u0433\u0443\u0442 \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0442\u044c\u0441\u044f \u043f\u0440\u0438 \u0441\u0442\u0430\u0440\u0442\u0435 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u0438\u043b\u0438 \u043f\u0440\u0438 \u043f\u0435\u0440\u0432\u043e\u043c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438, \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 ",(0,i.kt)("a",{parentName:"p",href:"/docs/ru/operations/server-configuration-parameters/settings#server_configuration_parameters-dictionaries_lazy_load"},"dictionaries_lazy_load"),"."),(0,i.kt)("p",null,"\u0421\u0438\u0441\u0442\u0435\u043c\u043d\u0430\u044f \u0442\u0430\u0431\u043b\u0438\u0446\u0430 ",(0,i.kt)("a",{parentName:"p",href:"/docs/ru/operations/system-tables/dictionaries#system_tables-dictionaries"},"system.dictionaries")," \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e \u0441\u043b\u043e\u0432\u0430\u0440\u044f\u0445, \u0441\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435. \u0414\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0441\u043b\u043e\u0432\u0430\u0440\u044f \u0442\u0430\u043c \u043c\u043e\u0436\u043d\u043e \u043d\u0430\u0439\u0442\u0438:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u0421\u0442\u0430\u0442\u0443\u0441 \u0441\u043b\u043e\u0432\u0430\u0440\u044f."),(0,i.kt)("li",{parentName:"ul"},"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b."),(0,i.kt)("li",{parentName:"ul"},"\u041c\u0435\u0442\u0440\u0438\u043a\u0438, \u043d\u0430\u043f\u043e\u0434\u043e\u0431\u0438\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u0437\u0430\u043d\u044f\u0442\u043e\u0439 \u0441\u043b\u043e\u0432\u0430\u0440\u0451\u043c RAM \u0438\u043b\u0438 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u043a \u0441\u043b\u043e\u0432\u0430\u0440\u044e \u0441 \u043c\u043e\u043c\u0435\u043d\u0442\u0430 \u0435\u0433\u043e \u0443\u0441\u043f\u0435\u0448\u043d\u043e\u0439 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438.")),(0,i.kt)("p",null,"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b \u0441\u043b\u043e\u0432\u0430\u0440\u0435\u0439 \u0438\u043c\u0435\u0435\u0442 \u0432\u0438\u0434:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<clickhouse>\n    <comment>\u041d\u0435\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u0441 \u043b\u044e\u0431\u044b\u043c \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u044b\u043c. \u0418\u0433\u043d\u043e\u0440\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c ClickHouse.</comment>\n\n    \x3c!--\u041d\u0435\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u044d\u043b\u0435\u043c\u0435\u043d\u0442, \u0438\u043c\u044f \u0444\u0430\u0439\u043b\u0430 \u0441 \u043f\u043e\u0434\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430\u043c\u0438--\x3e\n    <include_from>/etc/metrika.xml</include_from>\n\n\n    <dictionary>\n        \x3c!-- \u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f \u0441\u043b\u043e\u0432\u0430\u0440\u044f --\x3e\n    </dictionary>\n\n    ...\n\n    <dictionary>\n        \x3c!-- \u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f \u0441\u043b\u043e\u0432\u0430\u0440\u044f --\x3e\n    </dictionary>\n</clickhouse>\n")),(0,i.kt)("p",null,"\u0412 \u043e\u0434\u043d\u043e\u043c \u0444\u0430\u0439\u043b\u0435 \u043c\u043e\u0436\u043d\u043e ",(0,i.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/dictionaries/external-dictionaries/external-dicts-dict"},"\u0441\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c")," \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u043b\u044c\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u043b\u043e\u0432\u0430\u0440\u0435\u0439."),(0,i.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0432\u044b \u0441\u043e\u0437\u0434\u0430\u0451\u0442\u0435 \u0432\u043d\u0435\u0448\u043d\u0438\u0435 \u0441\u043b\u043e\u0432\u0430\u0440\u0438 ",(0,i.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/statements/create/#create-dictionary-query"},"DDL-\u0437\u0430\u043f\u0440\u043e\u0441\u0430\u043c\u0438"),", \u0442\u043e \u043d\u0435 \u0437\u0430\u0434\u0430\u0432\u0430\u0439\u0442\u0435 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044e \u0441\u043b\u043e\u0432\u0430\u0440\u044f \u0432 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u0441\u0435\u0440\u0432\u0435\u0440\u0430."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},':::note "\u0412\u043d\u0438\u043c\u0430\u043d\u0438\u0435"\n\u041c\u043e\u0436\u043d\u043e \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u044b\u0432\u0430\u0442\u044c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043f\u043e \u043d\u0435\u0431\u043e\u043b\u044c\u0448\u043e\u043c\u0443 \u0441\u043b\u043e\u0432\u0430\u0440\u044e, \u043e\u043f\u0438\u0441\u0430\u0432 \u0435\u0433\u043e \u0432 \u0437\u0430\u043f\u0440\u043e\u0441\u0435 `SELECT` (\u0441\u043c. \u0444\u0443\u043d\u043a\u0446\u0438\u044e [transform](/docs/ru/sql-reference/functions/other-functions)). \u042d\u0442\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u043d\u0435 \u0441\u0432\u044f\u0437\u0430\u043d\u0430 \u0441 \u0432\u043d\u0435\u0448\u043d\u0438\u043c\u0438 \u0441\u043b\u043e\u0432\u0430\u0440\u044f\u043c\u0438.\n:::\n')),(0,i.kt)("h2",{id:"ext-dicts-see-also"},"\u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0442\u0430\u043a\u0436\u0435"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/dictionaries/external-dictionaries/external-dicts-dict"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0432\u043d\u0435\u0448\u043d\u0435\u0433\u043e \u0441\u043b\u043e\u0432\u0430\u0440\u044f")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-layout"},"\u0425\u0440\u0430\u043d\u0435\u043d\u0438\u0435 \u0441\u043b\u043e\u0432\u0430\u0440\u0435\u0439 \u0432 \u043f\u0430\u043c\u044f\u0442\u0438")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-lifetime"},"\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u0441\u043b\u043e\u0432\u0430\u0440\u0435\u0439")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-sources"},"\u0418\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u0438 \u0432\u043d\u0435\u0448\u043d\u0438\u0445 \u0441\u043b\u043e\u0432\u0430\u0440\u0435\u0439")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-structure"},"\u041a\u043b\u044e\u0447 \u0438 \u043f\u043e\u043b\u044f \u0441\u043b\u043e\u0432\u0430\u0440\u044f")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/functions/ext-dict-functions"},"\u0424\u0443\u043d\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u0432\u043d\u0435\u0448\u043d\u0438\u043c\u0438 \u0441\u043b\u043e\u0432\u0430\u0440\u044f\u043c\u0438"))))}p.isMDXComponent=!0}}]);