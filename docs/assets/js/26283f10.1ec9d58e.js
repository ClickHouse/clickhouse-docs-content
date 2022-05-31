"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[41586],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),f=u(n),m=l,d=f["".concat(s,".").concat(m)]||f[m]||p[m]||a;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},36179:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var r=n(87462),l=n(63366),a=(n(67294),n(3905)),i=["components"],o={sidebar_position:55,sidebar_label:"sqlite"},s=void 0,u={unversionedId:"ru/sql-reference/table-functions/sqlite",id:"ru/sql-reference/table-functions/sqlite",title:"sqlite",description:"sqlite",source:"@site/docs/ru/sql-reference/table-functions/sqlite.md",sourceDirName:"ru/sql-reference/table-functions",slug:"/ru/sql-reference/table-functions/sqlite",permalink:"/docs/ru/sql-reference/table-functions/sqlite",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/table-functions/sqlite.md",tags:[],version:"current",sidebarPosition:55,frontMatter:{sidebar_position:55,sidebar_label:"sqlite"},sidebar:"russia",previous:{title:"s3Cluster",permalink:"/docs/ru/sql-reference/table-functions/s3Cluster"},next:{title:"view",permalink:"/docs/ru/sql-reference/table-functions/view"}},c={},p=[{value:"sqlite",id:"sqlite",level:2}],f={toc:p};function m(e){var t=e.components,n=(0,l.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"sqlite"},"sqlite"),(0,a.kt)("p",null,"\u041f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441\u044b \u043a \u0434\u0430\u043d\u043d\u044b\u043c, \u0445\u0440\u0430\u043d\u044f\u0449\u0438\u043c\u0441\u044f \u0432 \u0431\u0430\u0437\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 ",(0,a.kt)("a",{parentName:"p",href:"/docs/ru/engines/database-engines/sqlite"},"SQLite"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441")," "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"    sqlite('db_path', 'table_name')\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b")," "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"db_path")," \u2014 \u043f\u0443\u0442\u044c \u043a \u0444\u0430\u0439\u043b\u0443 \u0441 \u0431\u0430\u0437\u043e\u0439 \u0434\u0430\u043d\u043d\u044b\u0445 SQLite. ",(0,a.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/string"},"String"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"table_name")," \u2014 \u0438\u043c\u044f \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0432 \u0431\u0430\u0437\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 SQLite. ",(0,a.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/string"},"String"),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u041e\u0431\u044a\u0435\u043a\u0442 \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0441 \u0442\u0435\u043c\u0438 \u0436\u0435 \u0441\u0442\u043e\u043b\u0431\u0446\u0430\u043c\u0438, \u0447\u0442\u043e \u0438 \u0432 \u0438\u0441\u0445\u043e\u0434\u043d\u043e\u0439 \u0442\u0430\u0431\u043b\u0438\u0446\u0435 ",(0,a.kt)("inlineCode",{parentName:"li"},"SQLite"),". ")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,a.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM sqlite('sqlite.db', 'table1') ORDER BY col2;\n")),(0,a.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500col1\u2500\u2500\u252c\u2500col2\u2500\u2510\n\u2502 line1 \u2502    1 \u2502\n\u2502 line2 \u2502    2 \u2502\n\u2502 line3 \u2502    3 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u0421\u043c. \u0442\u0430\u043a\u0436\u0435")," "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/ru/engines/table-engines/integrations/sqlite"},"SQLite")," \u0434\u0432\u0438\u0436\u043e\u043a \u0442\u0430\u0431\u043b\u0438\u0446")))}m.isMDXComponent=!0}}]);