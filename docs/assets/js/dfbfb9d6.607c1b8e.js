"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[16471],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return k}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(n),k=i,d=m["".concat(c,".").concat(k)]||m[k]||u[k]||r;return n?a.createElement(d,l(l({ref:t},s),{},{components:n})):a.createElement(d,l({ref:t},s))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},20741:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),l=["components"],o={sidebar_position:60,sidebar_label:"clickhouse-local"},c="clickhouse-local",p={unversionedId:"ru/operations/utilities/clickhouse-local",id:"ru/operations/utilities/clickhouse-local",title:"clickhouse-local",description:"clickhouse-local}",source:"@site/docs/ru/operations/utilities/clickhouse-local.md",sourceDirName:"ru/operations/utilities",slug:"/ru/operations/utilities/clickhouse-local",permalink:"/ru/operations/utilities/clickhouse-local",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/docs-staging/docs/ru/operations/utilities/clickhouse-local.md",tags:[],version:"current",sidebarPosition:60,frontMatter:{sidebar_position:60,sidebar_label:"clickhouse-local"},sidebar:"russia",previous:{title:"clickhouse-copier",permalink:"/ru/operations/utilities/clickhouse-copier"},next:{title:"clickhouse-benchmark",permalink:"/ru/operations/utilities/clickhouse-benchmark"}},s={},u=[],m={toc:u};function k(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"clickhouse-local"},"clickhouse-local"),(0,r.kt)("p",null,"\u041f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u0442 \u043d\u0430 \u0432\u0445\u043e\u0434 \u0434\u0430\u043d\u043d\u044b\u0435, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043c\u043e\u0436\u043d\u043e \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0432 \u0442\u0430\u0431\u043b\u0438\u0447\u043d\u043e\u043c \u0432\u0438\u0434\u0435 \u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442 \u043d\u0430\u0434 \u043d\u0438\u043c\u0438 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438, \u0437\u0430\u0434\u0430\u043d\u043d\u044b\u0435 \u043d\u0430 ",(0,r.kt)("a",{parentName:"p",href:"/ru/operations/utilities/clickhouse-local"},"\u044f\u0437\u044b\u043a\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432")," ClickHouse."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"clickhouse-local")," \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u0434\u0432\u0438\u0436\u043e\u043a \u0441\u0435\u0440\u0432\u0435\u0440\u0430 ClickHouse, \u0442.\u0435. \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0432\u0441\u0435 \u0444\u043e\u0440\u043c\u0430\u0442\u044b \u0434\u0430\u043d\u043d\u044b\u0445 \u0438 \u0434\u0432\u0438\u0436\u043a\u0438 \u0442\u0430\u0431\u043b\u0438\u0446, \u0441 \u043a\u043e\u0442\u043e\u0440\u044b\u043c\u0438 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 ClickHouse, \u043f\u0440\u0438 \u044d\u0442\u043e\u043c \u0434\u043b\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0439 \u043d\u0435 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0437\u0430\u043f\u0443\u0449\u0435\u043d\u043d\u044b\u0439 \u0441\u0435\u0440\u0432\u0435\u0440."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"clickhouse-local")," \u043f\u0440\u0438 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0435 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u043d\u0435 \u0438\u043c\u0435\u0435\u0442 \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u043a \u0434\u0430\u043d\u043d\u044b\u043c, \u043a\u043e\u0442\u043e\u0440\u044b\u043c\u0438 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442 \u0441\u0435\u0440\u0432\u0435\u0440 ClickHouse, \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044b\u0439 \u043d\u0430 \u044d\u0442\u043e\u043c \u0436\u0435 \u0445\u043e\u0441\u0442\u0435, \u043e\u0434\u043d\u0430\u043a\u043e \u043c\u043e\u0436\u043d\u043e \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044e \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043a\u043b\u044e\u0447\u0430 ",(0,r.kt)("inlineCode",{parentName:"p"},"--config-file"),"."),(0,r.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),'"Warning"')),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre"},"\u041c\u044b \u043d\u0435 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u043c \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0442\u044c \u0441\u0435\u0440\u0432\u0435\u0440\u043d\u0443\u044e \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044e \u043a `clickhouse-local`, \u043f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 \u0434\u0430\u043d\u043d\u044b\u0435 \u043c\u043e\u0436\u043d\u043e \u043b\u0435\u0433\u043a\u043e \u043f\u043e\u0432\u0440\u0435\u0434\u0438\u0442\u044c \u043d\u0435\u043e\u0441\u0442\u043e\u0440\u043e\u0436\u043d\u044b\u043c\u0438 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f\u043c\u0438.\n")),(0,r.kt)("p",{parentName:"div"},"\u0414\u043b\u044f \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0441\u043e\u0437\u0434\u0430\u0435\u0442\u0441\u044f \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0439 \u043a\u0430\u0442\u0430\u043b\u043e\u0433."),(0,r.kt)("h2",{parentName:"div",id:"usage"},"\u0412\u044b\u0437\u043e\u0432 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u044b"),(0,r.kt)("p",{parentName:"div"},"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u0444\u043e\u0440\u043c\u0430\u0442 \u0432\u044b\u0437\u043e\u0432\u0430:"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ clickhouse-local --structure "table_structure" --input-format "format_of_incoming_data" \\\n    --query "query"\n')),(0,r.kt)("p",{parentName:"div"},"\u041a\u043b\u044e\u0447\u0438 \u043a\u043e\u043c\u0430\u043d\u0434\u044b:"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-S"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"--structure")," \u2014 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u0442\u0430\u0431\u043b\u0438\u0446\u044b, \u0432 \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u0431\u0443\u0434\u0443\u0442 \u043f\u043e\u043c\u0435\u0449\u0435\u043d\u044b \u0432\u0445\u043e\u0434\u044f\u0449\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0435."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-if"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"--input-format")," \u2014 \u0444\u043e\u0440\u043c\u0430\u0442 \u0432\u0445\u043e\u0434\u044f\u0449\u0438\u0445 \u0434\u0430\u043d\u043d\u044b\u0445. \u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u2014 ",(0,r.kt)("inlineCode",{parentName:"li"},"TSV"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-f"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"--file")," \u2014 \u043f\u0443\u0442\u044c \u043a \u0444\u0430\u0439\u043b\u0443 \u0441 \u0434\u0430\u043d\u043d\u044b\u043c\u0438. \u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u2014 ",(0,r.kt)("inlineCode",{parentName:"li"},"stdin"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-q"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"--query")," \u2014 \u0437\u0430\u043f\u0440\u043e\u0441\u044b \u043d\u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435. \u0420\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u0435\u043b\u044c \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u2014 ",(0,r.kt)("inlineCode",{parentName:"li"},";"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-qf"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"--queries-file")," - \u043f\u0443\u0442\u044c \u043a \u0444\u0430\u0439\u043b\u0443 \u0441 \u0437\u0430\u043f\u0440\u043e\u0441\u0430\u043c\u0438 \u0434\u043b\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f. \u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0437\u0430\u0434\u0430\u0442\u044c \u043b\u0438\u0431\u043e \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 ",(0,r.kt)("inlineCode",{parentName:"li"},"query"),", \u043b\u0438\u0431\u043e ",(0,r.kt)("inlineCode",{parentName:"li"},"queries-file"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-N"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"--table")," \u2014 \u0438\u043c\u044f \u0442\u0430\u0431\u043b\u0438\u0446\u044b, \u0432 \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u0431\u0443\u0434\u0443\u0442 \u043f\u043e\u043c\u0435\u0449\u0435\u043d\u044b \u0432\u0445\u043e\u0434\u044f\u0449\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0435. \u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e - ",(0,r.kt)("inlineCode",{parentName:"li"},"table"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-of"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"--format"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"--output-format")," \u2014 \u0444\u043e\u0440\u043c\u0430\u0442 \u0432\u044b\u0445\u043e\u0434\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445. \u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u2014 ",(0,r.kt)("inlineCode",{parentName:"li"},"TSV"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-d"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"--database")," \u2014 \u0431\u0430\u0437\u0430 \u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e. \u0415\u0441\u043b\u0438 \u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d\u043e, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",(0,r.kt)("inlineCode",{parentName:"li"},"_local"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--stacktrace")," \u2014 \u0432\u044b\u0432\u043e\u0434 \u043e\u0442\u043b\u0430\u0434\u043e\u0447\u043d\u043e\u0439 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043f\u0440\u0438 \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f\u0445."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--echo")," \u2014 \u043f\u0435\u0440\u0435\u0434 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435\u043c  \u0437\u0430\u043f\u0440\u043e\u0441 \u0432\u044b\u0432\u043e\u0434\u0438\u0442\u0441\u044f \u0432 \u043a\u043e\u043d\u0441\u043e\u043b\u044c."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--verbose")," \u2014 \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u044b\u0439 \u0432\u044b\u0432\u043e\u0434 \u043f\u0440\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0430."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--logger.console")," \u2014 \u043b\u043e\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439 \u0432 \u043a\u043e\u043d\u0441\u043e\u043b\u044c."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--logger.log")," \u2014 \u043b\u043e\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439 \u0432 \u0444\u0430\u0439\u043b \u0441 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u043c \u0438\u043c\u0435\u043d\u0435\u043c."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--logger.level")," \u2014 \u0443\u0440\u043e\u0432\u0435\u043d\u044c \u043b\u043e\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--ignore-error")," \u2014 \u043d\u0435 \u043f\u0440\u0435\u043a\u0440\u0430\u0449\u0430\u0442\u044c \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0443 \u0435\u0441\u043b\u0438 \u0437\u0430\u043f\u0440\u043e\u0441 \u0432\u044b\u0434\u0430\u043b \u043e\u0448\u0438\u0431\u043a\u0443."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-c"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"--config-file")," \u2014 \u043f\u0443\u0442\u044c \u043a \u0444\u0430\u0439\u043b\u0443 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438. \u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e ",(0,r.kt)("inlineCode",{parentName:"li"},"clickhouse-local")," \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u0442\u0441\u044f \u0441 \u043f\u0443\u0441\u0442\u043e\u0439 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0435\u0439. \u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b \u0438\u043c\u0435\u0435\u0442 \u0442\u043e\u0442 \u0436\u0435 \u0444\u043e\u0440\u043c\u0430\u0442, \u0447\u0442\u043e \u0438 \u0434\u043b\u044f \u0441\u0435\u0440\u0432\u0435\u0440\u0430 ClickHouse, \u0438 \u0432 \u043d\u0451\u043c \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432\u0441\u0435 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0441\u0435\u0440\u0432\u0435\u0440\u0430. \u041e\u0431\u044b\u0447\u043d\u043e \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u043d\u0435 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f; \u0435\u0441\u043b\u0438 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0439 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440, \u0442\u043e \u044d\u0442\u043e \u043c\u043e\u0436\u043d\u043e \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043a\u043b\u044e\u0447\u043e\u043c \u0441 \u0438\u043c\u0435\u043d\u0435\u043c \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--no-system-tables")," \u2014 \u0437\u0430\u043f\u0443\u0441\u043a \u0431\u0435\u0437 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0441\u0438\u0441\u0442\u0435\u043c\u043d\u044b\u0445 \u0442\u0430\u0431\u043b\u0438\u0446."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--help")," \u2014 \u0432\u044b\u0432\u043e\u0434 \u0441\u043f\u0440\u0430\u0432\u043e\u0447\u043d\u043e\u0439 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043e ",(0,r.kt)("inlineCode",{parentName:"li"},"clickhouse-local"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-V"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"--version")," \u2014 \u0432\u044b\u0432\u043e\u0434 \u0442\u0435\u043a\u0443\u0449\u0435\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \u0438 \u0432\u044b\u0445\u043e\u0434.")),(0,r.kt)("h2",{parentName:"div",id:"examples"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b \u0432\u044b\u0437\u043e\u0432\u0430"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ echo -e "1,2\\n3,4" | clickhouse-local --structure "a Int64, b Int64" \\\n    --input-format "CSV" --query "SELECT * FROM table"\nRead 2 rows, 32.00 B in 0.000 sec., 5182 rows/sec., 80.97 KiB/sec.\n1   2\n3   4\n')),(0,r.kt)("p",{parentName:"div"},"\u0412\u044b\u0437\u043e\u0432 \u0432\u044b\u0448\u0435 \u044d\u043a\u0432\u0438\u0432\u0430\u043b\u0435\u043d\u0442\u0435\u043d \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u043c\u0443:"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ echo -e "1,2\\n3,4" | clickhouse-local --query "\n    CREATE TABLE table (a Int64, b Int64) ENGINE = File(CSV, stdin);\n    SELECT a, b FROM table;\n    DROP TABLE table"\nRead 2 rows, 32.00 B in 0.000 sec., 4987 rows/sec., 77.93 KiB/sec.\n1   2\n3   4\n')),(0,r.kt)("p",{parentName:"div"},"\u041d\u0435\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043a\u043b\u044e\u0447\u0438 ",(0,r.kt)("inlineCode",{parentName:"p"},"stdin")," \u0438\u043b\u0438 ",(0,r.kt)("inlineCode",{parentName:"p"},"--file"),". \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043e\u0442\u043a\u0440\u044b\u0432\u0430\u0442\u044c \u043b\u044e\u0431\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0444\u0430\u0439\u043b\u043e\u0432 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e ",(0,r.kt)("a",{parentName:"p",href:"/ru/sql-reference/table-functions/file"},"\u0442\u0430\u0431\u043b\u0438\u0447\u043d\u043e\u0439 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 ",(0,r.kt)("inlineCode",{parentName:"a"},"file")),":"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ echo 1 | tee 1.tsv\n1\n\n$ echo 2 | tee 2.tsv\n2\n\n$ clickhouse-local --query \"\n    select * from file('1.tsv', TSV, 'a int') t1\n    cross join file('2.tsv', TSV, 'b int') t2\"\n1   2\n")),(0,r.kt)("p",{parentName:"div"},"\u041e\u0431\u044a\u0451\u043c \u043e\u043f\u0435\u0440\u0430\u0442\u0438\u0432\u043d\u043e\u0439 \u043f\u0430\u043c\u044f\u0442\u0438, \u0437\u0430\u043d\u0438\u043c\u0430\u0435\u043c\u043e\u0439 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0430\u043c\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u043b \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c (Unix):"),(0,r.kt)("p",{parentName:"div"},"\u0417\u0430\u043f\u0440\u043e\u0441:"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ ps aux | tail -n +2 | awk \'{ printf("%s\\t%s\\n", $1, $4) }\' \\\n    | clickhouse-local --structure "user String, mem Float64" \\\n        --query "SELECT user, round(sum(mem), 2) as memTotal\n            FROM table GROUP BY user ORDER BY memTotal DESC FORMAT Pretty"\n')),(0,r.kt)("p",{parentName:"div"},"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Read 186 rows, 4.15 KiB in 0.035 sec., 5302 rows/sec., 118.34 KiB/sec.\n\u250f\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2533\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2513\n\u2503 user     \u2503 memTotal \u2503\n\u2521\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2547\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2529\n\u2502 bayonet  \u2502    113.5 \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 root     \u2502      8.8 \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n...\n")))))}k.isMDXComponent=!0}}]);