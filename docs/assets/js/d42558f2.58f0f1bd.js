"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[84291],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return g}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=n.createContext({}),c=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(u.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=c(t),g=a,m=f["".concat(u,".").concat(g)]||f[g]||s[g]||o;return t?n.createElement(m,p(p({ref:r},l),{},{components:t})):n.createElement(m,p({ref:r},l))}));function g(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,p=new Array(o);p[0]=f;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var c=2;c<o;c++)p[c]=t[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},38175:function(e,r,t){t.r(r),t.d(r,{assets:function(){return l},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s}});var n=t(87462),a=t(63366),o=(t(67294),t(3905)),p=["components"],i={sidebar_position:128},u="groupBitmap",c={unversionedId:"ru/sql-reference/aggregate-functions/reference/groupbitmap",id:"ru/sql-reference/aggregate-functions/reference/groupbitmap",title:"groupBitmap",description:"groupbitmap}",source:"@site/docs/ru/sql-reference/aggregate-functions/reference/groupbitmap.md",sourceDirName:"ru/sql-reference/aggregate-functions/reference",slug:"/ru/sql-reference/aggregate-functions/reference/groupbitmap",permalink:"/ru/sql-reference/aggregate-functions/reference/groupbitmap",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/docs-staging/docs/ru/sql-reference/aggregate-functions/reference/groupbitmap.md",tags:[],version:"current",sidebarPosition:128,frontMatter:{sidebar_position:128},sidebar:"russia",previous:{title:"groupBitXor",permalink:"/ru/sql-reference/aggregate-functions/reference/groupbitxor"},next:{title:"groupBitmapAnd",permalink:"/ru/sql-reference/aggregate-functions/reference/groupbitmapand"}},l={},s=[],f={toc:s};function g(e){var r=e.components,t=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"groupbitmap"},"groupBitmap"),(0,o.kt)("p",null,"Bitmap \u0438\u043b\u0438 \u0430\u0433\u0440\u0435\u0433\u0430\u0442\u043d\u044b\u0435 \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u0441\u0442\u043e\u043b\u0431\u0446\u0430 \u0441 \u0442\u0438\u043f\u043e\u043c \u0434\u0430\u043d\u043d\u044b\u0445 ",(0,o.kt)("inlineCode",{parentName:"p"},"UInt*"),", \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u044e\u0442 \u043a\u0430\u0440\u0434\u0438\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0432 \u0432\u0438\u0434\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0442\u0438\u043f\u0430 UInt64, \u0435\u0441\u043b\u0438 \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0441\u0443\u0444\u0444\u0438\u043a\u0441 ",(0,o.kt)("inlineCode",{parentName:"p"},"-State"),", \u0442\u043e \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u044e\u0442 ",(0,o.kt)("a",{parentName:"p",href:"/ru/sql-reference/functions/bitmap-functions#bitmap-functions"},"\u043e\u0431\u044a\u0435\u043a\u0442 bitmap"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"groupBitmap(expr)\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"expr")," \u2013 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435, \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u0438\u043c\u0435\u0435\u0442 \u0442\u0438\u043f \u0434\u0430\u043d\u043d\u044b\u0445 ",(0,o.kt)("inlineCode",{parentName:"p"},"UInt*"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435")),(0,o.kt)("p",null,"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0442\u0438\u043f\u0430 ",(0,o.kt)("inlineCode",{parentName:"p"},"UInt64"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,o.kt)("p",null,"\u0422\u0435\u0441\u0442\u043e\u0432\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"UserID\n1\n1\n2\n3\n")),(0,o.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT groupBitmap(UserID) as num FROM t\n")),(0,o.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"num\n3\n")))}g.isMDXComponent=!0}}]);