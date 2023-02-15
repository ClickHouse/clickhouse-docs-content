"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[30382],{3905:(e,r,n)=>{n.d(r,{Zo:()=>s,kt:()=>y});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function u(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=t.createContext({}),p=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},s=function(e){var r=p(e.components);return t.createElement(c.Provider,{value:r},e.children)},l="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},g=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),l=p(n),g=a,y=l["".concat(c,".").concat(g)]||l[g]||f[g]||o;return n?t.createElement(y,i(i({ref:r},s),{},{components:n})):t.createElement(y,i({ref:r},s))}));function y(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var u={};for(var c in r)hasOwnProperty.call(r,c)&&(u[c]=r[c]);u.originalType=e,u[l]="string"==typeof e?e:a,i[1]=u;for(var p=2;p<o;p++)i[p]=n[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}g.displayName="MDXCreateElement"},5136:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var t=n(87462),a=(n(67294),n(3905));const o={slug:"/ru/sql-reference/aggregate-functions/reference/groupuniqarray",sidebar_position:111},i="groupUniqArray",u={unversionedId:"ru/sql-reference/aggregate-functions/reference/groupuniqarray",id:"ru/sql-reference/aggregate-functions/reference/groupuniqarray",title:"groupUniqArray",description:"groupuniqarray}",source:"@site/docs/ru/sql-reference/aggregate-functions/reference/groupuniqarray.md",sourceDirName:"ru/sql-reference/aggregate-functions/reference",slug:"/ru/sql-reference/aggregate-functions/reference/groupuniqarray",permalink:"/docs/ru/sql-reference/aggregate-functions/reference/groupuniqarray",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/aggregate-functions/reference/groupuniqarray.md",tags:[],version:"current",sidebarPosition:111,frontMatter:{slug:"/ru/sql-reference/aggregate-functions/reference/groupuniqarray",sidebar_position:111},sidebar:"russia",previous:{title:"groupArray",permalink:"/docs/ru/sql-reference/aggregate-functions/reference/grouparray"},next:{title:"groupArrayInsertAt",permalink:"/docs/ru/sql-reference/aggregate-functions/reference/grouparrayinsertat"}},c={},p=[],s={toc:p},l="wrapper";function f(e){let{components:r,...n}=e;return(0,a.kt)(l,(0,t.Z)({},s,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"groupuniqarray"},"groupUniqArray"),(0,a.kt)("p",null,"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441: ",(0,a.kt)("inlineCode",{parentName:"p"},"groupUniqArray(x)")," \u0438\u043b\u0438 ",(0,a.kt)("inlineCode",{parentName:"p"},"groupUniqArray(max_size)(x)")),(0,a.kt)("p",null,"\u0421\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u043c\u0430\u0441\u0441\u0438\u0432 \u0438\u0437 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0430. \u0420\u0430\u0441\u0445\u043e\u0434 \u043e\u043f\u0435\u0440\u0430\u0442\u0438\u0432\u043d\u043e\u0439 \u043f\u0430\u043c\u044f\u0442\u0438 \u0442\u0430\u043a\u043e\u0439 \u0436\u0435, \u043a\u0430\u043a \u0443 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 ",(0,a.kt)("inlineCode",{parentName:"p"},"uniqExact"),"."),(0,a.kt)("p",null,"\u0424\u0443\u043d\u043a\u0446\u0438\u044f ",(0,a.kt)("inlineCode",{parentName:"p"},"groupUniqArray(max_size)(x)")," \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0432\u0430\u0435\u0442 \u0440\u0430\u0437\u043c\u0435\u0440 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0438\u0440\u0443\u044e\u0449\u0435\u0433\u043e \u043c\u0430\u0441\u0441\u0438\u0432\u0430 \u0434\u043e ",(0,a.kt)("inlineCode",{parentName:"p"},"max_size")," \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, ",(0,a.kt)("inlineCode",{parentName:"p"},"groupUniqArray(1)(x)")," \u0440\u0430\u0432\u043d\u043e\u0437\u043d\u0430\u0447\u043d\u043e ",(0,a.kt)("inlineCode",{parentName:"p"},"[any(x)]"),"."))}f.isMDXComponent=!0}}]);