"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[98487],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=l(r),f=a,d=m["".concat(c,".").concat(f)]||m[f]||p[f]||s;return r?n.createElement(d,o(o({ref:t},u),{},{components:r})):n.createElement(d,o({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<s;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},33679:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const s={slug:"/ru/sql-reference/statements/alter/constraint",sidebar_position:43,sidebar_label:"\u041c\u0430\u043d\u0438\u043f\u0443\u043b\u044f\u0446\u0438\u0438 \u0441 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f\u043c\u0438"},o="\u041c\u0430\u043d\u0438\u043f\u0443\u043b\u044f\u0446\u0438\u0438 \u0441 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f\u043c\u0438 (constraints)",i={unversionedId:"ru/sql-reference/statements/alter/constraint",id:"ru/sql-reference/statements/alter/constraint",title:"\u041c\u0430\u043d\u0438\u043f\u0443\u043b\u044f\u0446\u0438\u0438 \u0441 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f\u043c\u0438 (constraints)",description:"manipuliatsii-s-ogranicheniiami-constraints}",source:"@site/docs/ru/sql-reference/statements/alter/constraint.md",sourceDirName:"ru/sql-reference/statements/alter",slug:"/ru/sql-reference/statements/alter/constraint",permalink:"/docs/ru/sql-reference/statements/alter/constraint",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/statements/alter/constraint.md",tags:[],version:"current",sidebarPosition:43,frontMatter:{slug:"/ru/sql-reference/statements/alter/constraint",sidebar_position:43,sidebar_label:"\u041c\u0430\u043d\u0438\u043f\u0443\u043b\u044f\u0446\u0438\u0438 \u0441 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f\u043c\u0438"},sidebar:"russia",previous:{title:"\u041c\u0430\u043d\u0438\u043f\u0443\u043b\u044f\u0446\u0438\u0438 \u0441 \u0438\u043d\u0434\u0435\u043a\u0441\u0430\u043c\u0438",permalink:"/docs/ru/sql-reference/statements/alter/index"},next:{title:"TTL",permalink:"/docs/ru/sql-reference/statements/alter/ttl"}},c={},l=[],u={toc:l};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"manipuliatsii-s-ogranicheniiami-constraints"},"\u041c\u0430\u043d\u0438\u043f\u0443\u043b\u044f\u0446\u0438\u0438 \u0441 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f\u043c\u0438 (constraints)"),(0,a.kt)("p",null,"\u041f\u0440\u043e \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u043e ",(0,a.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/statements/create/table#constraints"},"\u0442\u0443\u0442"),"."),(0,a.kt)("p",null,"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0438\u043b\u0438 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0435 \u043c\u043e\u0436\u043d\u043e \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE [db].name [ON CLUSTER cluster] ADD CONSTRAINT constraint_name CHECK expression;\nALTER TABLE [db].name [ON CLUSTER cluster] DROP CONSTRAINT constraint_name;\n")),(0,a.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441\u044b \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u044e\u0442 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0438\u043b\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u043c\u0435\u0442\u0430\u0434\u0430\u043d\u043d\u044b\u0445 \u043e\u0431 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f\u0445 \u0442\u0430\u0431\u043b\u0438\u0446\u044b ",(0,a.kt)("inlineCode",{parentName:"p"},"[db].name"),", \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u044e\u0442\u0441\u044f \u043c\u0433\u043d\u043e\u0432\u0435\u043d\u043d\u043e."),(0,a.kt)("p",null,"\u0415\u0441\u043b\u0438 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0435 \u043f\u043e\u044f\u0432\u0438\u043b\u043e\u0441\u044c \u0434\u043b\u044f \u043d\u0435\u043f\u0443\u0441\u0442\u043e\u0439 \u0442\u0430\u0431\u043b\u0438\u0446\u044b, \u0442\u043e ",(0,a.kt)("em",{parentName:"p"},"\u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u0438\u043c\u0435\u044e\u0449\u0438\u0445\u0441\u044f \u0434\u0430\u043d\u043d\u044b\u0445 \u043d\u0435 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0441\u044f"),"."),(0,a.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441 \u043d\u0430 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0439 \u0434\u043b\u044f Replicated \u0442\u0430\u0431\u043b\u0438\u0446 \u0440\u0435\u043f\u043b\u0438\u0446\u0438\u0440\u0443\u0435\u0442\u0441\u044f, \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u044f \u043d\u043e\u0432\u044b\u0435 \u043c\u0435\u0442\u0430\u0434\u0430\u043d\u043d\u044b\u0435 \u0432 ZooKeeper \u0438 \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u043d\u0430 \u0432\u0441\u0435\u0445 \u0440\u0435\u043f\u043b\u0438\u043a\u0430\u0445."))}p.isMDXComponent=!0}}]);