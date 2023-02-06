"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[62361],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var c=n.createContext({}),i=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=i(r),m=s,d=p["".concat(c,".").concat(m)]||p[m]||f[m]||a;return r?n.createElement(d,o(o({ref:t},u),{},{components:r})):n.createElement(d,o({ref:t},u))}));function d(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=r.length,o=new Array(a);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:s,o[1]=l;for(var i=2;i<a;i++)o[i]=r[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},19650:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>i});var n=r(87462),s=(r(67294),r(3905));const a={slug:"/ru/sql-reference/statements/set",sidebar_position:49,sidebar_label:"SET"},o="SET",l={unversionedId:"ru/sql-reference/statements/set",id:"ru/sql-reference/statements/set",title:"SET",description:"query-set}",source:"@site/docs/ru/sql-reference/statements/set.md",sourceDirName:"ru/sql-reference/statements",slug:"/ru/sql-reference/statements/set",permalink:"/docs/ru/sql-reference/statements/set",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/statements/set.md",tags:[],version:"current",sidebarPosition:49,frontMatter:{slug:"/ru/sql-reference/statements/set",sidebar_position:49,sidebar_label:"SET"},sidebar:"russia",previous:{title:"EXCHANGE",permalink:"/docs/ru/sql-reference/statements/exchange"},next:{title:"SET ROLE",permalink:"/docs/ru/sql-reference/statements/set-role"}},c={},i=[],u={toc:i},p="wrapper";function f(e){let{components:t,...r}=e;return(0,s.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"query-set"},"SET"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SET param = value\n")),(0,s.kt)("p",null,"\u0423\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",(0,s.kt)("inlineCode",{parentName:"p"},"value")," \u0434\u043b\u044f ",(0,s.kt)("a",{parentName:"p",href:"/docs/ru/operations/settings/"},"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438")," ",(0,s.kt)("inlineCode",{parentName:"p"},"param")," \u0432 \u0442\u0435\u043a\u0443\u0449\u0435\u0439 \u0441\u0435\u0441\u0441\u0438\u0438. ",(0,s.kt)("a",{parentName:"p",href:"/docs/ru/operations/server-configuration-parameters/settings"},"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0441\u0435\u0440\u0432\u0435\u0440\u0430")," \u043d\u0435\u043b\u044c\u0437\u044f \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043f\u043e\u0434\u043e\u0431\u043d\u044b\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c."),(0,s.kt)("p",null,"\u041c\u043e\u0436\u043d\u043e \u043e\u0434\u043d\u0438\u043c \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u043c \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0432\u0441\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0438\u0437 \u0437\u0430\u0434\u0430\u043d\u043d\u043e\u0433\u043e \u043f\u0440\u043e\u0444\u0438\u043b\u044f \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SET profile = 'profile-name-from-the-settings-file'\n")),(0,s.kt)("p",null,"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u043e\u0441\u0442\u0438 \u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435 ",(0,s.kt)("a",{parentName:"p",href:"/docs/ru/operations/settings/settings"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"),"."))}f.isMDXComponent=!0}}]);