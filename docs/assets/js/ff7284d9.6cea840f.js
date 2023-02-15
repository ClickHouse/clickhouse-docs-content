"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[82093],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=s(r),f=i,m=u["".concat(l,".").concat(f)]||u[f]||p[f]||a;return r?n.createElement(m,c(c({ref:t},d),{},{components:r})):n.createElement(m,c({ref:t},d))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,c=new Array(a);c[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:i,c[1]=o;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},57472:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var n=r(87462),i=(r(67294),r(3905));const a={slug:"/ru/sql-reference/dictionaries/external-dictionaries/external-dicts-dict",sidebar_position:40,sidebar_label:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0432\u043d\u0435\u0448\u043d\u0435\u0433\u043e \u0441\u043b\u043e\u0432\u0430\u0440\u044f"},c="\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0432\u043d\u0435\u0448\u043d\u0435\u0433\u043e \u0441\u043b\u043e\u0432\u0430\u0440\u044f",o={unversionedId:"ru/sql-reference/dictionaries/external-dictionaries/external-dicts-dict",id:"ru/sql-reference/dictionaries/external-dictionaries/external-dicts-dict",title:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0432\u043d\u0435\u0448\u043d\u0435\u0433\u043e \u0441\u043b\u043e\u0432\u0430\u0440\u044f",description:"dicts-external-dicts-dict}",source:"@site/docs/ru/sql-reference/dictionaries/external-dictionaries/external-dicts-dict.md",sourceDirName:"ru/sql-reference/dictionaries/external-dictionaries",slug:"/ru/sql-reference/dictionaries/external-dictionaries/external-dicts-dict",permalink:"/docs/ru/sql-reference/dictionaries/external-dictionaries/external-dicts-dict",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/dictionaries/external-dictionaries/external-dicts-dict.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{slug:"/ru/sql-reference/dictionaries/external-dictionaries/external-dicts-dict",sidebar_position:40,sidebar_label:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0432\u043d\u0435\u0448\u043d\u0435\u0433\u043e \u0441\u043b\u043e\u0432\u0430\u0440\u044f"},sidebar:"russia",previous:{title:"\u0412\u043d\u0435\u0448\u043d\u0438\u0435 \u0441\u043b\u043e\u0432\u0430\u0440\u0438",permalink:"/docs/ru/sql-reference/dictionaries/external-dictionaries/external-dicts"},next:{title:"\u0425\u0440\u0430\u043d\u0435\u043d\u0438\u0435 \u0441\u043b\u043e\u0432\u0430\u0440\u0435\u0439 \u0432 \u043f\u0430\u043c\u044f\u0442\u0438",permalink:"/docs/ru/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-layout"}},l={},s=[],d={toc:s},u="wrapper";function p(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"dicts-external-dicts-dict"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0432\u043d\u0435\u0448\u043d\u0435\u0433\u043e \u0441\u043b\u043e\u0432\u0430\u0440\u044f"),(0,i.kt)("p",null,"XML-\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f \u0441\u043b\u043e\u0432\u0430\u0440\u044f \u0438\u043c\u0435\u0435\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0443\u044e \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0443:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<dictionary>\n    <name>dict_name</name>\n\n    <structure>\n      \x3c!-- Complex key configuration --\x3e\n    </structure>\n\n    <source>\n      \x3c!-- Source configuration --\x3e\n    </source>\n\n    <layout>\n      \x3c!-- Memory layout configuration --\x3e\n    </layout>\n\n    <lifetime>\n      \x3c!-- Lifetime of dictionary in memory --\x3e\n    </lifetime>\n</dictionary>\n")),(0,i.kt)("p",null,"\u0421\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0439 ",(0,i.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/statements/create/dictionary#create-dictionary-query"},"DDL-\u0437\u0430\u043f\u0440\u043e\u0441")," \u0438\u043c\u0435\u0435\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0432\u0438\u0434:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DICTIONARY dict_name\n(\n    ... -- attributes\n)\nPRIMARY KEY ... -- complex or single key configuration\nSOURCE(...) -- Source configuration\nLAYOUT(...) -- Memory layout configuration\nLIFETIME(...) -- Lifetime of dictionary in memory\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name")," \u2014 \u0418\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440, \u043f\u043e\u0434 \u043a\u043e\u0442\u043e\u0440\u044b\u043c \u0441\u043b\u043e\u0432\u0430\u0440\u044c \u0431\u0443\u0434\u0435\u0442 \u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d \u0434\u043b\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f. \u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0441\u0438\u043c\u0432\u043e\u043b\u044b ",(0,i.kt)("inlineCode",{parentName:"li"},"[a-zA-Z0-9_\\-]"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-sources"},"source")," \u2014 \u0418\u0441\u0442\u043e\u0447\u043d\u0438\u043a \u0441\u043b\u043e\u0432\u0430\u0440\u044f."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-layout"},"layout")," \u2014 \u0420\u0430\u0437\u043c\u0435\u0449\u0435\u043d\u0438\u0435 \u0441\u043b\u043e\u0432\u0430\u0440\u044f \u0432 \u043f\u0430\u043c\u044f\u0442\u0438."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-structure"},"structure")," \u2014 \u0421\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u0441\u043b\u043e\u0432\u0430\u0440\u044f. \u041a\u043b\u044e\u0447 \u0438 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043c\u043e\u0436\u043d\u043e \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043f\u043e \u043a\u043b\u044e\u0447\u0443."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-lifetime"},"lifetime")," \u2014 \u041f\u0435\u0440\u0438\u043e\u0434\u0438\u0447\u043d\u043e\u0441\u0442\u044c \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f \u0441\u043b\u043e\u0432\u0430\u0440\u0435\u0439.")))}p.isMDXComponent=!0}}]);