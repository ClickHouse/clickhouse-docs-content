"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[48620],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(t),m=i,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return t?a.createElement(k,r(r({ref:n},u),{},{components:t})):a.createElement(k,r({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,r=new Array(l);r[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var p=2;p<l;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},37436:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=t(87462),i=(t(67294),t(3905));const l={slug:"/ru/engines/table-engines/special/join",sidebar_position:40,sidebar_label:"Join"},r="Join",o={unversionedId:"ru/engines/table-engines/special/join",id:"ru/engines/table-engines/special/join",title:"Join",description:"join}",source:"@site/docs/ru/engines/table-engines/special/join.md",sourceDirName:"ru/engines/table-engines/special",slug:"/ru/engines/table-engines/special/join",permalink:"/docs/ru/engines/table-engines/special/join",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/engines/table-engines/special/join.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{slug:"/ru/engines/table-engines/special/join",sidebar_position:40,sidebar_label:"Join"},sidebar:"russia",previous:{title:"Set",permalink:"/docs/ru/engines/table-engines/special/set"},next:{title:"URL",permalink:"/docs/ru/engines/table-engines/special/url"}},s={},p=[{value:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u044b",id:"creating-a-table",level:2},{value:"\u041e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u0438 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u0438",id:"specifics-and-recommendations",level:2},{value:"\u0425\u0440\u0430\u043d\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445",id:"data-storage",level:3},{value:"\u0412\u044b\u0431\u043e\u0440\u043a\u0430 \u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445",id:"selecting-and-inserting-data",level:3},{value:"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445",id:"deleting-data",level:3},{value:"\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f \u0438 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438",id:"join-limitations-and-settings",level:3},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f",id:"example",level:2}],u={toc:p};function c(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"join"},"Join"),(0,i.kt)("p",null,"\u041f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043b\u0435\u043d\u043d\u0430\u044f \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u0434\u0430\u043d\u043d\u044b\u0445 \u0434\u043b\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0432 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u044f\u0445 ",(0,i.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/statements/select/join#select-join"},"JOIN"),"."),(0,i.kt)("h2",{id:"creating-a-table"},"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u044b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE [IF NOT EXISTS] [db.]table_name [ON CLUSTER cluster]\n(\n    name1 [type1] [DEFAULT|MATERIALIZED|ALIAS expr1] [TTL expr1],\n    name2 [type2] [DEFAULT|MATERIALIZED|ALIAS expr2] [TTL expr2],\n) ENGINE = Join(join_strictness, join_type, k1[, k2, ...])\n")),(0,i.kt)("p",null,"\u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u043e\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 ",(0,i.kt)("a",{parentName:"p",href:"/docs/ru/engines/table-engines/special/join#create-table-query"},"CREATE TABLE"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0434\u0432\u0438\u0436\u043a\u0430")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"join_strictness")," \u2013 ",(0,i.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/statements/select/join#select-join-types"},"\u0441\u0442\u0440\u043e\u0433\u043e\u0441\u0442\u044c JOIN"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"join_type")," \u2013 ",(0,i.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/statements/select/join#select-join-types"},"\u0442\u0438\u043f JOIN"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"k1[, k2, ...]")," \u2013 \u043a\u043b\u044e\u0447\u0435\u0432\u044b\u0435 \u0441\u0442\u043e\u043b\u0431\u0446\u044b \u0441\u0435\u043a\u0446\u0438\u0438 ",(0,i.kt)("inlineCode",{parentName:"li"},"USING")," \u0441 \u043a\u043e\u0442\u043e\u0440\u044b\u043c\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442\u0441\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u044f ",(0,i.kt)("inlineCode",{parentName:"li"},"JOIN"),".")),(0,i.kt)("p",null,"\u0412\u0432\u043e\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b ",(0,i.kt)("inlineCode",{parentName:"p"},"join_strictness")," \u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"join_type")," \u0431\u0435\u0437 \u043a\u0430\u0432\u044b\u0447\u0435\u043a, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, ",(0,i.kt)("inlineCode",{parentName:"p"},"Join(ANY, LEFT, col1)"),". \u041e\u043d\u0438 \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u0442\u0430\u043a\u0438\u043c\u0438 \u0436\u0435 \u043a\u0430\u043a \u0438 \u0432 \u0442\u043e\u0439 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"JOIN"),", \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u0442\u0430\u0431\u043b\u0438\u0446\u0430 \u0431\u0443\u0434\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f. \u0415\u0441\u043b\u0438 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0442, ClickHouse \u043d\u0435 \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442 \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0442\u044c \u043d\u0435\u0432\u0435\u0440\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435."),(0,i.kt)("h2",{id:"specifics-and-recommendations"},"\u041e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u0438 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u0438"),(0,i.kt)("h3",{id:"data-storage"},"\u0425\u0440\u0430\u043d\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445"),(0,i.kt)("p",null,"\u0414\u0430\u043d\u043d\u044b\u0435 \u0442\u0430\u0431\u043b\u0438\u0446 ",(0,i.kt)("inlineCode",{parentName:"p"},"Join")," \u0432\u0441\u0435\u0433\u0434\u0430 \u043d\u0430\u0445\u043e\u0434\u044f\u0442\u0441\u044f \u0432 \u043e\u043f\u0435\u0440\u0430\u0442\u0438\u0432\u043d\u043e\u0439 \u043f\u0430\u043c\u044f\u0442\u0438. \u041f\u0440\u0438 \u0432\u0441\u0442\u0430\u0432\u043a\u0435 \u0441\u0442\u0440\u043e\u043a \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0443 ClickHouse \u0437\u0430\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442 \u0431\u043b\u043e\u043a\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 \u043a\u0430\u0442\u0430\u043b\u043e\u0433 \u043d\u0430 \u0434\u0438\u0441\u043a\u0435, \u0447\u0442\u043e\u0431\u044b \u0438\u0445 \u043c\u043e\u0436\u043d\u043e \u0431\u044b\u043b\u043e \u0432\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043f\u0440\u0438 \u043f\u0435\u0440\u0435\u0437\u0430\u043f\u0443\u0441\u043a\u0435 \u0441\u0435\u0440\u0432\u0435\u0440\u0430."),(0,i.kt)("p",null,"\u041f\u0440\u0438 \u0430\u0432\u0430\u0440\u0438\u0439\u043d\u043e\u043c \u043f\u0435\u0440\u0435\u0437\u0430\u043f\u0443\u0441\u043a\u0435 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u0431\u043b\u043e\u043a \u0434\u0430\u043d\u043d\u044b\u0445 \u043d\u0430 \u0434\u0438\u0441\u043a\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u043e\u0442\u0435\u0440\u044f\u043d \u0438\u043b\u0438 \u043f\u043e\u0432\u0440\u0435\u0436\u0434\u0451\u043d. \u0412 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u043c\u043e\u0436\u0435\u0442 \u043f\u043e\u0442\u0440\u0435\u0431\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0432\u0440\u0443\u0447\u043d\u0443\u044e \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0444\u0430\u0439\u043b \u0441 \u043f\u043e\u0432\u0440\u0435\u0436\u0434\u0451\u043d\u043d\u044b\u043c\u0438 \u0434\u0430\u043d\u043d\u044b\u043c\u0438."),(0,i.kt)("h3",{id:"selecting-and-inserting-data"},"\u0412\u044b\u0431\u043e\u0440\u043a\u0430 \u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445"),(0,i.kt)("p",null,"\u0414\u043b\u044f \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0441 \u0434\u0432\u0438\u0436\u043a\u043e\u043c ",(0,i.kt)("inlineCode",{parentName:"p"},"Join")," \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0437\u0430\u043f\u0440\u043e\u0441 ",(0,i.kt)("inlineCode",{parentName:"p"},"INSERT"),". \u0415\u0441\u043b\u0438 \u0442\u0430\u0431\u043b\u0438\u0446\u0430 \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u043b\u0430\u0441\u044c \u0441\u043e \u0441\u0442\u0440\u043e\u0433\u043e\u0441\u0442\u044c\u044e ",(0,i.kt)("inlineCode",{parentName:"p"},"ANY"),", \u0442\u043e \u0434\u0430\u043d\u043d\u044b\u0435 \u0441 \u043f\u043e\u0432\u0442\u043e\u0440\u044f\u044e\u0449\u0438\u043c\u0438\u0441\u044f \u043a\u043b\u044e\u0447\u0430\u043c\u0438 \u0438\u0433\u043d\u043e\u0440\u0438\u0440\u0443\u044e\u0442\u0441\u044f. \u0415\u0441\u043b\u0438 \u0437\u0430\u0434\u0430\u0432\u0430\u043b\u0430\u0441\u044c \u0441\u0442\u0440\u043e\u0433\u043e\u0441\u0442\u044c ",(0,i.kt)("inlineCode",{parentName:"p"},"ALL"),", \u0442\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u0432\u0441\u0435 \u0441\u0442\u0440\u043e\u043a\u0438."),(0,i.kt)("p",null,"\u041e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044f ",(0,i.kt)("inlineCode",{parentName:"p"},"Join")," \u0442\u0430\u0431\u043b\u0438\u0446:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0432 \u043f\u0440\u0430\u0432\u043e\u0439 \u0447\u0430\u0441\u0442\u0438 \u0441\u0435\u043a\u0446\u0438\u0438 ",(0,i.kt)("inlineCode",{parentName:"li"},"JOIN"),"."),(0,i.kt)("li",{parentName:"ul"},"\u0418\u0437\u0432\u043b\u0435\u0447\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u0438\u0437 \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0442\u0430\u043a\u0438\u043c \u0436\u0435 \u043e\u0431\u0440\u0430\u0437\u043e\u043c \u043a\u0430\u043a \u0438\u0437 \u0441\u043b\u043e\u0432\u0430\u0440\u044f \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0444\u0443\u043d\u043a\u0446\u0438\u0438 ",(0,i.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/functions/other-functions#joinget"},"joinGet"),".")),(0,i.kt)("h3",{id:"deleting-data"},"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445"),(0,i.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441\u044b ",(0,i.kt)("inlineCode",{parentName:"p"},"ALTER DELETE")," \u0434\u043b\u044f \u0442\u0430\u0431\u043b\u0438\u0446 \u0441 \u0434\u0432\u0438\u0436\u043a\u043e\u043c ",(0,i.kt)("inlineCode",{parentName:"p"},"Join")," \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u044e\u0442\u0441\u044f \u043a\u0430\u043a ",(0,i.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/statements/alter/#mutations"},"\u043c\u0443\u0442\u0430\u0446\u0438\u0438"),". \u041f\u0440\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0438 \u043c\u0443\u0442\u0430\u0446\u0438\u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"DELETE")," \u0441\u0447\u0438\u0442\u044b\u0432\u0430\u044e\u0442\u0441\u044f \u043e\u0442\u0444\u0438\u043b\u044c\u0442\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0438 \u043f\u0435\u0440\u0435\u0437\u0430\u043f\u0438\u0441\u044b\u0432\u0430\u044e\u0442\u0441\u044f \u0432 \u043e\u043f\u0435\u0440\u0430\u0442\u0438\u0432\u043d\u0443\u044e \u043f\u0430\u043c\u044f\u0442\u044c \u0438 \u043d\u0430 \u0434\u0438\u0441\u043a."),(0,i.kt)("h3",{id:"join-limitations-and-settings"},"\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f \u0438 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"),(0,i.kt)("p",null,"\u041f\u0440\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438 \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u044e\u0442\u0441\u044f \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/ru/operations/settings/settings#join_use_nulls"},"join_use_nulls")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/ru/operations/settings/query-complexity#settings-max_rows_in_join"},"max_rows_in_join")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/ru/operations/settings/query-complexity#settings-max_bytes_in_join"},"max_bytes_in_join")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/ru/operations/settings/query-complexity#settings-join_overflow_mode"},"join_overflow_mode")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/ru/operations/settings/settings#settings-join_any_take_last_row"},"join_any_take_last_row")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/ru/operations/settings/settings#persistent"},"persistent"))),(0,i.kt)("p",null,"\u0422\u0430\u0431\u043b\u0438\u0446\u044b \u0441 \u0434\u0432\u0438\u0436\u043a\u043e\u043c ",(0,i.kt)("inlineCode",{parentName:"p"},"Join")," \u043d\u0435\u043b\u044c\u0437\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u044f\u0445 ",(0,i.kt)("inlineCode",{parentName:"p"},"GLOBAL JOIN"),"."),(0,i.kt)("p",null,"\u0414\u0432\u0438\u0436\u043e\u043a ",(0,i.kt)("inlineCode",{parentName:"p"},"Join")," \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0443 ",(0,i.kt)("a",{parentName:"p",href:"/docs/ru/operations/settings/settings#join_use_nulls"},"join_use_nulls")," \u0432 \u0437\u0430\u043f\u0440\u043e\u0441\u0435 ",(0,i.kt)("inlineCode",{parentName:"p"},"CREATE TABLE"),". \u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043e\u0434\u043d\u043e \u0438 \u0442\u043e \u0436\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430 ",(0,i.kt)("inlineCode",{parentName:"p"},"join_use_nulls")," \u0432 \u0437\u0430\u043f\u0440\u043e\u0441\u0430\u0445 ",(0,i.kt)("inlineCode",{parentName:"p"},"CRATE TABLE")," \u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT"),"."),(0,i.kt)("h2",{id:"example"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f"),(0,i.kt)("p",null,"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u043b\u0435\u0432\u043e\u0439 \u0442\u0430\u0431\u043b\u0438\u0446\u044b:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE id_val(`id` UInt32, `val` UInt32) ENGINE = TinyLog;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO id_val VALUES (1,11)(2,12)(3,13);\n")),(0,i.kt)("p",null,"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u043f\u0440\u0430\u0432\u043e\u0439 \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0441 \u0434\u0432\u0438\u0436\u043a\u043e\u043c ",(0,i.kt)("inlineCode",{parentName:"p"},"Join"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE id_val_join(`id` UInt32, `val` UInt8) ENGINE = Join(ANY, LEFT, id);\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO id_val_join VALUES (1,21)(1,22)(3,23);\n")),(0,i.kt)("p",null,"\u041e\u0431\u044a\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435 \u0442\u0430\u0431\u043b\u0438\u0446:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM id_val ANY LEFT JOIN id_val_join USING (id);\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500id\u2500\u252c\u2500val\u2500\u252c\u2500id_val_join.val\u2500\u2510\n\u2502  1 \u2502  11 \u2502              21 \u2502\n\u2502  2 \u2502  12 \u2502               0 \u2502\n\u2502  3 \u2502  13 \u2502              23 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,"\u0412 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0430\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u044b, \u043c\u043e\u0436\u043d\u043e \u0438\u0437\u0432\u043b\u0435\u0447\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u0438\u0437 \u0442\u0430\u0431\u043b\u0438\u0446\u044b ",(0,i.kt)("inlineCode",{parentName:"p"},"Join"),", \u0443\u043a\u0430\u0437\u0430\u0432 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043a\u043b\u044e\u0447\u0430 \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT joinGet('id_val_join', 'val', toUInt32(1));\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500joinGet('id_val_join', 'val', toUInt32(1))\u2500\u2510\n\u2502                                         21 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u0438\u0437 \u0442\u0430\u0431\u043b\u0438\u0446\u044b ",(0,i.kt)("inlineCode",{parentName:"p"},"Join"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE id_val_join DELETE WHERE id = 3;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500id\u2500\u252c\u2500val\u2500\u2510\n\u2502  1 \u2502  21 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2518\n")))}c.isMDXComponent=!0}}]);