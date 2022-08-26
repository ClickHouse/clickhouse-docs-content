"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[33823],{3905:function(e,n,t){t.d(n,{Zo:function(){return g},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),p=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},g=function(e){var n=p(e.components);return r.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),c=p(t),m=a,d=c["".concat(o,".").concat(m)]||c[m]||u[m]||l;return t?r.createElement(d,i(i({ref:n},g),{},{components:t})):r.createElement(d,i({ref:n},g))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=c;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<l;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},69659:function(e,n,t){t.r(n),t.d(n,{assets:function(){return g},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var r=t(87462),a=t(63366),l=(t(67294),t(3905)),i=["components"],s={slug:"/ru/engines/table-engines/log-family/stripelog",sidebar_position:32,sidebar_label:"StripeLog"},o="StripeLog",p={unversionedId:"ru/engines/table-engines/log-family/stripelog",id:"ru/engines/table-engines/log-family/stripelog",title:"StripeLog",description:"stripelog}",source:"@site/docs/ru/engines/table-engines/log-family/stripelog.md",sourceDirName:"ru/engines/table-engines/log-family",slug:"/ru/engines/table-engines/log-family/stripelog",permalink:"/docs/ru/engines/table-engines/log-family/stripelog",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/engines/table-engines/log-family/stripelog.md",tags:[],version:"current",sidebarPosition:32,frontMatter:{slug:"/ru/engines/table-engines/log-family/stripelog",sidebar_position:32,sidebar_label:"StripeLog"},sidebar:"russia",previous:{title:"\u0421\u0435\u043c\u0435\u0439\u0441\u0442\u0432\u043e Log",permalink:"/docs/ru/engines/table-engines/log-family/"},next:{title:"Log",permalink:"/docs/ru/engines/table-engines/log-family/log"}},g={},u=[{value:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u044b",id:"table_engines-stripelog-creating-a-table",level:2},{value:"\u0417\u0430\u043f\u0438\u0441\u044c \u0434\u0430\u043d\u043d\u044b\u0445",id:"table_engines-stripelog-writing-the-data",level:2},{value:"\u0427\u0442\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445",id:"table_engines-stripelog-reading-the-data",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f",id:"table_engines-stripelog-example-of-use",level:2}],c={toc:u};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"stripelog"},"StripeLog"),(0,l.kt)("p",null,"\u0414\u0432\u0438\u0436\u043e\u043a \u043e\u0442\u043d\u043e\u0441\u0438\u0442\u0441\u044f \u043a \u0441\u0435\u043c\u0435\u0439\u0441\u0442\u0432\u0443 \u0434\u0432\u0438\u0436\u043a\u043e\u0432 Log. \u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u043e\u0431\u0449\u0438\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u0438 \u0440\u0430\u0437\u043b\u0438\u0447\u0438\u044f \u0434\u0432\u0438\u0436\u043a\u043e\u0432 \u0432 \u0441\u0442\u0430\u0442\u044c\u0435 ",(0,l.kt)("a",{parentName:"p",href:"/docs/ru/engines/table-engines/log-family/"},"\u0421\u0435\u043c\u0435\u0439\u0441\u0442\u0432\u043e Log"),"."),(0,l.kt)("p",null,"\u0414\u0432\u0438\u0436\u043e\u043a \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0430\u043d \u0434\u043b\u044f \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u0435\u0432, \u043a\u043e\u0433\u0434\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0437\u0430\u043f\u0438\u0441\u044b\u0432\u0430\u0442\u044c \u043c\u043d\u043e\u0433\u043e \u0442\u0430\u0431\u043b\u0438\u0446 \u0441 \u043d\u0435\u0431\u043e\u043b\u044c\u0448\u0438\u043c \u043e\u0431\u044a\u0451\u043c\u043e\u043c \u0434\u0430\u043d\u043d\u044b\u0445 (\u043c\u0435\u043d\u0435\u0435 1 \u043c\u0438\u043b\u043b\u0438\u043e\u043d\u0430 \u0441\u0442\u0440\u043e\u043a)."),(0,l.kt)("h2",{id:"table_engines-stripelog-creating-a-table"},"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u044b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE [IF NOT EXISTS] [db.]table_name [ON CLUSTER cluster]\n(\n    column1_name [type1] [DEFAULT|MATERIALIZED|ALIAS expr1],\n    column2_name [type2] [DEFAULT|MATERIALIZED|ALIAS expr2],\n    ...\n) ENGINE = StripeLog\n")),(0,l.kt)("p",null,"\u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u043e\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 ",(0,l.kt)("a",{parentName:"p",href:"/docs/ru/engines/table-engines/log-family/stripelog#create-table-query"},"CREATE TABLE"),"."),(0,l.kt)("h2",{id:"table_engines-stripelog-writing-the-data"},"\u0417\u0430\u043f\u0438\u0441\u044c \u0434\u0430\u043d\u043d\u044b\u0445"),(0,l.kt)("p",null,"\u0414\u0432\u0438\u0436\u043e\u043a ",(0,l.kt)("inlineCode",{parentName:"p"},"StripeLog")," \u0445\u0440\u0430\u043d\u0438\u0442 \u0432\u0441\u0435 \u0441\u0442\u043e\u043b\u0431\u0446\u044b \u0432 \u043e\u0434\u043d\u043e\u043c \u0444\u0430\u0439\u043b\u0435. \u041f\u0440\u0438 \u043a\u0430\u0436\u0434\u043e\u043c \u0437\u0430\u043f\u0440\u043e\u0441\u0435 ",(0,l.kt)("inlineCode",{parentName:"p"},"INSERT"),", ClickHouse \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u0442 \u0431\u043b\u043e\u043a \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 \u043a\u043e\u043d\u0435\u0446 \u0444\u0430\u0439\u043b\u0430 \u0442\u0430\u0431\u043b\u0438\u0446\u044b, \u0437\u0430\u043f\u0438\u0441\u044b\u0432\u0430\u044f \u0441\u0442\u043e\u043b\u0431\u0446\u044b \u043e\u0434\u0438\u043d \u0437\u0430 \u0434\u0440\u0443\u0433\u0438\u043c."),(0,l.kt)("p",null,"\u0414\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0439 \u0442\u0430\u0431\u043b\u0438\u0446\u044b ClickHouse \u0437\u0430\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442 \u0444\u0430\u0439\u043b\u044b:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"data.bin")," \u2014 \u0444\u0430\u0439\u043b \u0441 \u0434\u0430\u043d\u043d\u044b\u043c\u0438."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"index.mrk")," \u2014 \u0444\u0430\u0439\u043b \u0441 \u043c\u0435\u0442\u043a\u0430\u043c\u0438. \u041c\u0435\u0442\u043a\u0438 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442 \u0441\u043c\u0435\u0449\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0441\u0442\u043e\u043b\u0431\u0446\u0430 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0432\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043d\u043e\u0433\u043e \u0431\u043b\u043e\u043a\u0430 \u0434\u0430\u043d\u043d\u044b\u0445.")),(0,l.kt)("p",null,"\u0414\u0432\u0438\u0436\u043e\u043a ",(0,l.kt)("inlineCode",{parentName:"p"},"StripeLog")," \u043d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0437\u0430\u043f\u0440\u043e\u0441\u044b ",(0,l.kt)("inlineCode",{parentName:"p"},"ALTER UPDATE")," \u0438 ",(0,l.kt)("inlineCode",{parentName:"p"},"ALTER DELETE"),"."),(0,l.kt)("h2",{id:"table_engines-stripelog-reading-the-data"},"\u0427\u0442\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445"),(0,l.kt)("p",null,"\u0424\u0430\u0439\u043b \u0441 \u043c\u0435\u0442\u043a\u0430\u043c\u0438 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 ClickHouse \u0440\u0430\u0441\u043f\u0430\u0440\u0430\u043b\u043b\u0435\u043b\u0438\u0432\u0430\u0442\u044c \u0447\u0442\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445. \u042d\u0442\u043e \u043e\u0437\u043d\u0430\u0447\u0430\u0435\u0442, \u0447\u0442\u043e \u0437\u0430\u043f\u0440\u043e\u0441 ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT")," \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0441\u0442\u0440\u043e\u043a\u0438 \u0432 \u043d\u0435\u043f\u0440\u0435\u0434\u0441\u043a\u0430\u0437\u0443\u0435\u043c\u043e\u043c \u043f\u043e\u0440\u044f\u0434\u043a\u0435. \u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0441\u0435\u043a\u0446\u0438\u044e ",(0,l.kt)("inlineCode",{parentName:"p"},"ORDER BY")," \u0434\u043b\u044f \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0438 \u0441\u0442\u0440\u043e\u043a."),(0,l.kt)("h2",{id:"table_engines-stripelog-example-of-use"},"\u041f\u0440\u0438\u043c\u0435\u0440 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f"),(0,l.kt)("p",null,"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u044b:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE stripe_log_table\n(\n    timestamp DateTime,\n    message_type String,\n    message String\n)\nENGINE = StripeLog\n")),(0,l.kt)("p",null,"\u0412\u0441\u0442\u0430\u0432\u043a\u0430 \u0434\u0430\u043d\u043d\u044b\u0445:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO stripe_log_table VALUES (now(),'REGULAR','The first regular message')\nINSERT INTO stripe_log_table VALUES (now(),'REGULAR','The second regular message'),(now(),'WARNING','The first warning message')\n")),(0,l.kt)("p",null,"\u041c\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043b\u0438 \u0434\u0432\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 ",(0,l.kt)("inlineCode",{parentName:"p"},"INSERT")," \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0434\u0432\u0443\u0445 \u0431\u043b\u043e\u043a\u043e\u0432 \u0434\u0430\u043d\u043d\u044b\u0445 \u0432\u043d\u0443\u0442\u0440\u0438 \u0444\u0430\u0439\u043b\u0430 ",(0,l.kt)("inlineCode",{parentName:"p"},"data.bin"),"."),(0,l.kt)("p",null,"ClickHouse \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043f\u043e\u0442\u043e\u043a\u043e\u0432 \u043f\u0440\u0438 \u0432\u044b\u0431\u043e\u0440\u0435 \u0434\u0430\u043d\u043d\u044b\u0445. \u041a\u0430\u0436\u0434\u044b\u0439 \u043f\u043e\u0442\u043e\u043a \u0441\u0447\u0438\u0442\u044b\u0432\u0430\u0435\u0442 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0439 \u0431\u043b\u043e\u043a \u0434\u0430\u043d\u043d\u044b\u0445 \u0438 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0438\u0440\u0443\u044e\u0449\u0438\u0435 \u0441\u0442\u0440\u043e\u043a\u0438 \u043d\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e \u043f\u043e \u043c\u0435\u0440\u0435 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u044f. \u0412 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0435 \u043f\u043e\u0440\u044f\u0434\u043e\u043a \u0431\u043b\u043e\u043a\u043e\u0432 \u0441\u0442\u0440\u043e\u043a \u0432 \u0432\u044b\u0445\u043e\u0434\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 \u0431\u043e\u043b\u044c\u0448\u0438\u043d\u0441\u0442\u0432\u0435 \u0441\u043b\u0443\u0447\u0430\u0435\u0432 \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u0435\u0442 \u0441 \u043f\u043e\u0440\u044f\u0434\u043a\u043e\u043c \u0442\u0435\u0445 \u0436\u0435 \u0431\u043b\u043e\u043a\u043e\u0432 \u0432\u043e \u0432\u0445\u043e\u0434\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM stripe_log_table\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500timestamp\u2500\u252c\u2500message_type\u2500\u252c\u2500message\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 2019-01-18 14:27:32 \u2502 REGULAR      \u2502 The second regular message \u2502\n\u2502 2019-01-18 14:34:53 \u2502 WARNING      \u2502 The first warning message  \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500timestamp\u2500\u252c\u2500message_type\u2500\u252c\u2500message\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 2019-01-18 14:23:43 \u2502 REGULAR      \u2502 The first regular message \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u0432 (\u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u043f\u043e \u0432\u043e\u0437\u0440\u0430\u0441\u0442\u0430\u043d\u0438\u044e):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM stripe_log_table ORDER BY timestamp\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500timestamp\u2500\u252c\u2500message_type\u2500\u252c\u2500message\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 2019-01-18 14:23:43 \u2502 REGULAR      \u2502 The first regular message  \u2502\n\u2502 2019-01-18 14:27:32 \u2502 REGULAR      \u2502 The second regular message \u2502\n\u2502 2019-01-18 14:34:53 \u2502 WARNING      \u2502 The first warning message  \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}m.isMDXComponent=!0}}]);