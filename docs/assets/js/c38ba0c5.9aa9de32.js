"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[58729],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return m}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function u(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?u(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},u=Object.keys(e);for(n=0;n<u.length;n++)t=u[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)t=u[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),s=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},p=function(e){var r=s(e.components);return n.createElement(i.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,u=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),g=s(t),m=a,f=g["".concat(i,".").concat(m)]||g[m]||c[m]||u;return t?n.createElement(f,l(l({ref:r},p),{},{components:t})):n.createElement(f,l({ref:r},p))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var u=t.length,l=new Array(u);l[0]=g;var o={};for(var i in r)hasOwnProperty.call(r,i)&&(o[i]=r[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<u;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},46166:function(e,r,t){t.r(r),t.d(r,{assets:function(){return p},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c}});var n=t(87462),a=t(63366),u=(t(67294),t(3905)),l=["components"],o={slug:"/ru/sql-reference/aggregate-functions/reference/grouparrayinsertat",sidebar_position:112},i="groupArrayInsertAt",s={unversionedId:"ru/sql-reference/aggregate-functions/reference/grouparrayinsertat",id:"ru/sql-reference/aggregate-functions/reference/grouparrayinsertat",title:"groupArrayInsertAt",description:"grouparrayinsertat}",source:"@site/docs/ru/sql-reference/aggregate-functions/reference/grouparrayinsertat.md",sourceDirName:"ru/sql-reference/aggregate-functions/reference",slug:"/ru/sql-reference/aggregate-functions/reference/grouparrayinsertat",permalink:"/docs/ru/sql-reference/aggregate-functions/reference/grouparrayinsertat",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/aggregate-functions/reference/grouparrayinsertat.md",tags:[],version:"current",sidebarPosition:112,frontMatter:{slug:"/ru/sql-reference/aggregate-functions/reference/grouparrayinsertat",sidebar_position:112},sidebar:"russia",previous:{title:"groupUniqArray",permalink:"/docs/ru/sql-reference/aggregate-functions/reference/groupuniqarray"},next:{title:"groupArrayMovingSum",permalink:"/docs/ru/sql-reference/aggregate-functions/reference/grouparraymovingsum"}},p={},c=[],g={toc:c};function m(e){var r=e.components,t=(0,a.Z)(e,l);return(0,u.kt)("wrapper",(0,n.Z)({},g,t,{components:r,mdxType:"MDXLayout"}),(0,u.kt)("h1",{id:"grouparrayinsertat"},"groupArrayInsertAt"),(0,u.kt)("p",null,"\u0412\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0432 \u0437\u0430\u0434\u0430\u043d\u043d\u0443\u044e \u043f\u043e\u0437\u0438\u0446\u0438\u044e \u043c\u0430\u0441\u0441\u0438\u0432\u0430."),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-sql"},"groupArrayInsertAt(default_x, size)(x, pos)\n")),(0,u.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0437\u0430\u043f\u0440\u043e\u0441 \u0432\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0432\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u0432 \u043e\u0434\u043d\u0443 \u0438 \u0442\u0443 \u0436\u0435 \u043f\u043e\u0437\u0438\u0446\u0438\u044e, \u0442\u043e \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u0432\u0435\u0434\u0435\u0442 \u0441\u0435\u0431\u044f \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c:"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"\u0415\u0441\u043b\u0438 \u0437\u0430\u043f\u0440\u043e\u0441 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442\u0441\u044f \u0432 \u043e\u0434\u043d\u043e\u043c \u043f\u043e\u0442\u043e\u043a\u0435, \u0442\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u043f\u0435\u0440\u0432\u043e\u0435 \u0438\u0437 \u0432\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u043c\u044b\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439."),(0,u.kt)("li",{parentName:"ul"},"\u0415\u0441\u043b\u0438 \u0437\u0430\u043f\u0440\u043e\u0441 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442\u0441\u044f \u0432 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u043f\u043e\u0442\u043e\u043a\u0430\u0445, \u0442\u043e \u0432 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0438\u0440\u0443\u044e\u0449\u0435\u043c \u043c\u0430\u0441\u0441\u0438\u0432\u0435 \u043c\u043e\u0436\u0435\u0442 \u043e\u043a\u0430\u0437\u0430\u0442\u044c\u0441\u044f \u043b\u044e\u0431\u043e\u0435 \u0438\u0437 \u0432\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u043c\u044b\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439.")),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b")),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("inlineCode",{parentName:"li"},"x")," \u2014 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0431\u0443\u0434\u0435\u0442 \u0432\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043e. ",(0,u.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/syntax#syntax-expressions"},"\u0412\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435"),", \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u044e\u0449\u0435\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043e\u0434\u043d\u043e\u0433\u043e \u0438\u0437 ",(0,u.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/#data_types"},"\u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043c\u044b\u0445 \u0442\u0438\u043f\u043e\u0432 \u0434\u0430\u043d\u043d\u044b\u0445"),"."),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("inlineCode",{parentName:"li"},"pos")," \u2014 \u043f\u043e\u0437\u0438\u0446\u0438\u044f, \u0432 \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u0432\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0437\u0430\u0434\u0430\u043d\u043d\u044b\u0439 \u044d\u043b\u0435\u043c\u0435\u043d\u0442 ",(0,u.kt)("inlineCode",{parentName:"li"},"x"),". \u041d\u0443\u043c\u0435\u0440\u0430\u0446\u0438\u044f \u0438\u043d\u0434\u0435\u043a\u0441\u043e\u0432 \u0432 \u043c\u0430\u0441\u0441\u0438\u0432\u0435 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441 \u043d\u0443\u043b\u044f. ",(0,u.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/int-uint#uint8-uint16-uint32-uint64-int8-int16-int32-int64"},"UInt32"),"."),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("inlineCode",{parentName:"li"},"default_x")," \u2014 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0434\u043b\u044f \u043f\u043e\u0434\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043d\u0430 \u043f\u0443\u0441\u0442\u044b\u0435 \u043f\u043e\u0437\u0438\u0446\u0438\u0438. \u041e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440. ",(0,u.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/syntax#syntax-expressions"},"\u0412\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435"),", \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u044e\u0449\u0435\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0441 \u0442\u0438\u043f\u043e\u043c \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430 ",(0,u.kt)("inlineCode",{parentName:"li"},"x"),". \u0415\u0441\u043b\u0438 ",(0,u.kt)("inlineCode",{parentName:"li"},"default_x")," \u043d\u0435 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f ",(0,u.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/statements/create/table#create-default-values"},"\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e"),"."),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("inlineCode",{parentName:"li"},"size")," \u2014 \u0434\u043b\u0438\u043d\u0430 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0438\u0440\u0443\u044e\u0449\u0435\u0433\u043e \u043c\u0430\u0441\u0441\u0438\u0432\u0430. \u041e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440. \u041f\u0440\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 \u044d\u0442\u043e\u0433\u043e \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0443\u043a\u0430\u0437\u0430\u043d\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e ",(0,u.kt)("inlineCode",{parentName:"li"},"default_x"),". ",(0,u.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/int-uint#uint-ranges"},"UInt32"),".")),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435")),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"\u041c\u0430\u0441\u0441\u0438\u0432 \u0441\u043e \u0432\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u043c\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f\u043c\u0438.")),(0,u.kt)("p",null,"\u0422\u0438\u043f: ",(0,u.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/array#data-type-array"},"Array"),"."),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b")),(0,u.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT groupArrayInsertAt(toString(number), number * 2) FROM numbers(5);\n")),(0,u.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500groupArrayInsertAt(toString(number), multiply(number, 2))\u2500\u2510\n\u2502 ['0','','1','','2','','3','','4']                         \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,u.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT groupArrayInsertAt('-')(toString(number), number * 2) FROM numbers(5);\n")),(0,u.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500groupArrayInsertAt('-')(toString(number), multiply(number, 2))\u2500\u2510\n\u2502 ['0','-','1','-','2','-','3','-','4']                          \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,u.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT groupArrayInsertAt('-', 5)(toString(number), number * 2) FROM numbers(5);\n")),(0,u.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500groupArrayInsertAt('-', 5)(toString(number), multiply(number, 2))\u2500\u2510\n\u2502 ['0','-','1','-','2']                                             \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,u.kt)("p",null,"\u041c\u043d\u043e\u0433\u043e\u043f\u043e\u0442\u043e\u0447\u043d\u0430\u044f \u0432\u0441\u0442\u0430\u0432\u043a\u0430 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u0432 \u043e\u0434\u043d\u0443 \u043f\u043e\u0437\u0438\u0446\u0438\u044e."),(0,u.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT groupArrayInsertAt(number, 0) FROM numbers_mt(10) SETTINGS max_block_size = 1;\n")),(0,u.kt)("p",null,"\u0412 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u044d\u0442\u043e\u0433\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u043c\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0435 \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u043e\u0435 \u0446\u0435\u043b\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u0432 \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d\u0435 ",(0,u.kt)("inlineCode",{parentName:"p"},"[0,9]"),". \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500groupArrayInsertAt(number, 0)\u2500\u2510\n\u2502 [7]                           \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}m.isMDXComponent=!0}}]);