"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[5120],{3905:function(e,r,n){n.d(r,{Zo:function(){return l},kt:function(){return g}});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function u(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=t.createContext({}),p=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):u(u({},r),e)),n},l=function(e){var r=p(e.components);return t.createElement(c.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=p(n),g=a,m=f["".concat(c,".").concat(g)]||f[g]||s[g]||o;return n?t.createElement(m,u(u({ref:r},l),{},{components:n})):t.createElement(m,u({ref:r},l))}));function g(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,u=new Array(o);u[0]=f;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,u[1]=i;for(var p=2;p<o;p++)u[p]=n[p];return t.createElement.apply(null,u)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},23939:function(e,r,n){n.r(r),n.d(r,{assets:function(){return l},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return s}});var t=n(87462),a=n(63366),o=(n(67294),n(3905)),u=["components"],i={sidebar_position:125},c="groupBitAnd",p={unversionedId:"ru/sql-reference/aggregate-functions/reference/groupbitand",id:"ru/sql-reference/aggregate-functions/reference/groupbitand",title:"groupBitAnd",description:"groupbitand}",source:"@site/docs/ru/sql-reference/aggregate-functions/reference/groupbitand.md",sourceDirName:"ru/sql-reference/aggregate-functions/reference",slug:"/ru/sql-reference/aggregate-functions/reference/groupbitand",permalink:"/ru/sql-reference/aggregate-functions/reference/groupbitand",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/docs-staging/docs/ru/sql-reference/aggregate-functions/reference/groupbitand.md",tags:[],version:"current",sidebarPosition:125,frontMatter:{sidebar_position:125},sidebar:"russia",previous:{title:"groupArraySample",permalink:"/ru/sql-reference/aggregate-functions/reference/grouparraysample"},next:{title:"groupBitOr",permalink:"/ru/sql-reference/aggregate-functions/reference/groupbitor"}},l={},s=[],f={toc:s};function g(e){var r=e.components,n=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,t.Z)({},f,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"groupbitand"},"groupBitAnd"),(0,o.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u043d\u044f\u0435\u0442 \u043f\u043e\u0431\u0438\u0442\u043e\u0432\u043e\u0435 ",(0,o.kt)("inlineCode",{parentName:"p"},"\u0418")," \u0434\u043b\u044f \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u0447\u0438\u0441\u0435\u043b."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"groupBitAnd(expr)\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"expr")," \u2013 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435, \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u0438\u043c\u0435\u0435\u0442 \u0442\u0438\u043f \u0434\u0430\u043d\u043d\u044b\u0445 ",(0,o.kt)("inlineCode",{parentName:"p"},"UInt*"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435")),(0,o.kt)("p",null,"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0442\u0438\u043f\u0430 ",(0,o.kt)("inlineCode",{parentName:"p"},"UInt*"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,o.kt)("p",null,"\u0422\u0435\u0441\u0442\u043e\u0432\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"binary     decimal\n00101100 = 44\n00011100 = 28\n00001101 = 13\n01010101 = 85\n")),(0,o.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT groupBitAnd(num) FROM t\n")),(0,o.kt)("p",null,"\u0413\u0434\u0435 ",(0,o.kt)("inlineCode",{parentName:"p"},"num")," \u2014 \u0441\u0442\u043e\u043b\u0431\u0435\u0446 \u0441 \u0442\u0435\u0441\u0442\u043e\u0432\u044b\u043c\u0438 \u0434\u0430\u043d\u043d\u044b\u043c\u0438."),(0,o.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"binary     decimal\n00000100 = 4\n")))}g.isMDXComponent=!0}}]);