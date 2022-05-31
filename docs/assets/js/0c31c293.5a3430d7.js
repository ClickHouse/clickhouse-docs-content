"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[10625],{3905:function(e,r,n){n.d(r,{Zo:function(){return s},kt:function(){return y}});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=t.createContext({}),l=function(e){var r=t.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},s=function(e){var r=l(e.components);return t.createElement(u.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=l(n),y=o,d=p["".concat(u,".").concat(y)]||p[y]||f[y]||a;return n?t.createElement(d,i(i({ref:r},s),{},{components:n})):t.createElement(d,i({ref:r},s))}));function y(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var u in r)hasOwnProperty.call(r,u)&&(c[u]=r[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},70932:function(e,r,n){n.r(r),n.d(r,{assets:function(){return s},contentTitle:function(){return u},default:function(){return y},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return f}});var t=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],c={sidebar_position:61,sidebar_label:"\u0424\u0443\u043d\u043a\u0446\u0438\u044f ArrayJoin"},u="\u0424\u0443\u043d\u043a\u0446\u0438\u044f ArrayJoin",l={unversionedId:"ru/sql-reference/functions/array-join",id:"ru/sql-reference/functions/array-join",title:"\u0424\u0443\u043d\u043a\u0446\u0438\u044f ArrayJoin",description:"functions_arrayjoin}",source:"@site/docs/ru/sql-reference/functions/array-join.md",sourceDirName:"ru/sql-reference/functions",slug:"/ru/sql-reference/functions/array-join",permalink:"/docs/ru/sql-reference/functions/array-join",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/functions/array-join.md",tags:[],version:"current",sidebarPosition:61,frontMatter:{sidebar_position:61,sidebar_label:"\u0424\u0443\u043d\u043a\u0446\u0438\u044f ArrayJoin"},sidebar:"russia",previous:{title:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0430 IN",permalink:"/docs/ru/sql-reference/functions/in-functions"},next:{title:"\u0413\u0435\u043e-\u0434\u0430\u043d\u043d\u044b\u0435",permalink:"/docs/ru/sql-reference/functions/geo/"}},s={},f=[],p={toc:f};function y(e){var r=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"functions_arrayjoin"},"\u0424\u0443\u043d\u043a\u0446\u0438\u044f ArrayJoin"),(0,a.kt)("p",null,"\u042d\u0442\u043e \u0441\u043e\u0432\u0441\u0435\u043c \u043d\u0435\u043e\u0431\u044b\u0447\u043d\u0430\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u044f."),(0,a.kt)("p",null,"\u041e\u0431\u044b\u0447\u043d\u044b\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u043d\u0435 \u0438\u0437\u043c\u0435\u043d\u044f\u044e\u0442 \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u043e \u0441\u0442\u0440\u043e\u043a, \u0430 \u043b\u0438\u0448\u044c \u0438\u0437\u043c\u0435\u043d\u044f\u044e\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0432 \u043a\u0430\u0436\u0434\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0435 (map).\n\u0410\u0433\u0440\u0435\u0433\u0430\u0442\u043d\u044b\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u044e\u0442 \u0441\u0432\u0451\u0440\u0442\u043a\u0443 \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u0430 \u0441\u0442\u0440\u043e\u043a (fold, reduce).\n\u0424\u0443\u043d\u043a\u0446\u0438\u044f arrayJoin \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442 \u0440\u0430\u0437\u043c\u043d\u043e\u0436\u0435\u043d\u0438\u0435 \u043a\u0430\u0436\u0434\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0438 \u0432 \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u043e \u0441\u0442\u0440\u043e\u043a (unfold)."),(0,a.kt)("p",null,"\u0424\u0443\u043d\u043a\u0446\u0438\u044f \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u0442 \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0430 \u043c\u0430\u0441\u0441\u0438\u0432, \u0438 \u0440\u0430\u0437\u043c\u043d\u043e\u0436\u0430\u0435\u0442 \u0438\u0441\u0445\u043e\u0434\u043d\u0443\u044e \u0441\u0442\u0440\u043e\u043a\u0443 \u0432 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u0442\u0440\u043e\u043a - \u043f\u043e \u0447\u0438\u0441\u043b\u0443 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u043c\u0430\u0441\u0441\u0438\u0432\u0430.\n\u0412\u0441\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0432 \u0441\u0442\u043e\u043b\u0431\u0446\u0430\u0445 \u043f\u0440\u043e\u0441\u0442\u043e \u043a\u043e\u043f\u0438\u0440\u0443\u044e\u0442\u0441\u044f, \u043a\u0440\u043e\u043c\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0432 \u0441\u0442\u043e\u043b\u0431\u0446\u0435 \u0441 \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435\u043c \u044d\u0442\u043e\u0439 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 - \u043e\u043d \u0437\u0430\u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f \u043d\u0430 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043c\u0430\u0441\u0441\u0438\u0432\u0430."),(0,a.kt)("p",null,"\u0412 \u0437\u0430\u043f\u0440\u043e\u0441\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u043e \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0444\u0443\u043d\u043a\u0446\u0438\u0439 ",(0,a.kt)("inlineCode",{parentName:"p"},"arrayJoin"),". \u0412 \u044d\u0442\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435, \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0435 \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0434\u0435\u043b\u0430\u0435\u0442\u0441\u044f \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0440\u0430\u0437."),(0,a.kt)("p",null,"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435 \u043d\u0430 \u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441 ARRAY JOIN \u0432 \u0437\u0430\u043f\u0440\u043e\u0441\u0435 SELECT, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0431\u043e\u043b\u0435\u0435 \u0448\u0438\u0440\u043e\u043a\u0438\u0435 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438."),(0,a.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT arrayJoin([1, 2, 3] AS src) AS dst, 'Hello', src\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500dst\u2500\u252c\u2500\\'Hello\\'\u2500\u252c\u2500src\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502   1 \u2502 Hello     \u2502 [1,2,3] \u2502\n\u2502   2 \u2502 Hello     \u2502 [1,2,3] \u2502\n\u2502   3 \u2502 Hello     \u2502 [1,2,3] \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}y.isMDXComponent=!0}}]);