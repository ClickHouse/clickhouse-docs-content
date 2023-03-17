"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[64136],{3905:(e,n,r)=>{r.d(n,{Zo:()=>c,kt:()=>f});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function u(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=t.createContext({}),i=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},c=function(e){var n=i(e.components);return t.createElement(l.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},b=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=i(r),b=a,f=p["".concat(l,".").concat(b)]||p[b]||m[b]||o;return r?t.createElement(f,s(s({ref:n},c),{},{components:r})):t.createElement(f,s({ref:n},c))}));function f(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=b;var u={};for(var l in n)hasOwnProperty.call(n,l)&&(u[l]=n[l]);u.originalType=e,u[p]="string"==typeof e?e:a,s[1]=u;for(var i=2;i<o;i++)s[i]=r[i];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}b.displayName="MDXCreateElement"},98887:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>i});var t=r(87462),a=(r(67294),r(3905));const o={slug:"/ru/sql-reference/table-functions/numbers",sidebar_position:39,sidebar_label:"numbers"},s="numbers",u={unversionedId:"ru/sql-reference/table-functions/numbers",id:"ru/sql-reference/table-functions/numbers",title:"numbers",description:"numbers}",source:"@site/docs/ru/sql-reference/table-functions/numbers.md",sourceDirName:"ru/sql-reference/table-functions",slug:"/ru/sql-reference/table-functions/numbers",permalink:"/docs/ru/sql-reference/table-functions/numbers",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/table-functions/numbers.md",tags:[],version:"current",sidebarPosition:39,frontMatter:{slug:"/ru/sql-reference/table-functions/numbers",sidebar_position:39,sidebar_label:"numbers"},sidebar:"russia",previous:{title:"merge",permalink:"/docs/ru/sql-reference/table-functions/merge"},next:{title:"remote",permalink:"/docs/ru/sql-reference/table-functions/remote"}},l={},i=[],c={toc:i},p="wrapper";function m(e){let{components:n,...r}=e;return(0,a.kt)(p,(0,t.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"numbers"},"numbers"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"numbers(N)")," - \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0442\u0430\u0431\u043b\u0438\u0446\u0443 \u0441 \u0435\u0434\u0438\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u043c \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u043c ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," (UInt64), \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0449\u0438\u043c \u043d\u0430\u0442\u0443\u0440\u0430\u043b\u044c\u043d\u044b\u0435 \u0447\u0438\u0441\u043b\u0430 \u043e\u0442 ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," \u0434\u043e ",(0,a.kt)("inlineCode",{parentName:"p"},"N-1"),".\n",(0,a.kt)("inlineCode",{parentName:"p"},"numbers(N, M)")," - \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0442\u0430\u0431\u043b\u0438\u0446\u0443 \u0441 \u0435\u0434\u0438\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u043c \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u043c ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," (UInt64), \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0449\u0438\u043c \u043d\u0430\u0442\u0443\u0440\u0430\u043b\u044c\u043d\u044b\u0435 \u0447\u0438\u0441\u043b\u0430 \u043e\u0442 ",(0,a.kt)("inlineCode",{parentName:"p"},"N")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"(N + M - 1)"),"."),(0,a.kt)("p",null,"\u0422\u0430\u043a \u0436\u0435 \u043a\u0430\u043a \u0438 \u0442\u0430\u0431\u043b\u0438\u0446\u0430 ",(0,a.kt)("inlineCode",{parentName:"p"},"system.numbers")," \u043c\u043e\u0436\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0434\u043b\u044f \u0442\u0435\u0441\u0442\u043e\u0432 \u0438 \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438 \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439. \u0424\u0443\u043d\u043a\u0446\u0438\u044f ",(0,a.kt)("inlineCode",{parentName:"p"},"numbers(N, M)")," \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0431\u043e\u043b\u0435\u0435 \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e, \u0447\u0435\u043c \u0432\u044b\u0431\u043e\u0440\u043a\u0430 \u0438\u0437 ",(0,a.kt)("inlineCode",{parentName:"p"},"system.numbers"),"."),(0,a.kt)("p",null,"\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u044b \u044d\u043a\u0432\u0438\u0432\u0430\u043b\u0435\u043d\u0442\u043d\u044b:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM numbers(10);\nSELECT * FROM numbers(0,10);\nSELECT * FROM system.numbers LIMIT 10;\n")),(0,a.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440\u044b:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"-- \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u0432\u0441\u0435\u0445 \u0434\u0430\u0442 \u043e\u0442 2010-01-01 \u0434\u043e 2010-12-31\nselect toDate('2010-01-01') + number as d FROM numbers(365);\n")))}m.isMDXComponent=!0}}]);