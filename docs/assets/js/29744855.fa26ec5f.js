"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[90126],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>O});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),i=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=i(r),f=o,O=p["".concat(c,".").concat(f)]||p[f]||m[f]||a;return r?n.createElement(O,l(l({ref:t},u),{},{components:r})):n.createElement(O,l({ref:t},u))}));function O(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,l[1]=s;for(var i=2;i<a;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},21984:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>i});var n=r(87462),o=(r(67294),r(3905));const a={slug:"/ru/sql-reference/statements/alter/row-policy",sidebar_position:47,sidebar_label:"ROW POLICY"},l="ALTER ROW POLICY",s={unversionedId:"ru/sql-reference/statements/alter/row-policy",id:"ru/sql-reference/statements/alter/row-policy",title:"ALTER ROW POLICY",description:"alter-row-policy-statement}",source:"@site/docs/ru/sql-reference/statements/alter/row-policy.md",sourceDirName:"ru/sql-reference/statements/alter",slug:"/ru/sql-reference/statements/alter/row-policy",permalink:"/docs/ru/sql-reference/statements/alter/row-policy",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/statements/alter/row-policy.md",tags:[],version:"current",sidebarPosition:47,frontMatter:{slug:"/ru/sql-reference/statements/alter/row-policy",sidebar_position:47,sidebar_label:"ROW POLICY"},sidebar:"russia",previous:{title:"ROLE",permalink:"/docs/ru/sql-reference/statements/alter/role"},next:{title:"SETTINGS PROFILE",permalink:"/docs/ru/sql-reference/statements/alter/settings-profile"}},c={},i=[],u={toc:i},p="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"alter-row-policy-statement"},"ALTER ROW POLICY"),(0,o.kt)("p",null,"\u0418\u0437\u043c\u0435\u043d\u044f\u0435\u0442 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0443 \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u043a \u0441\u0442\u0440\u043e\u043a\u0430\u043c."),(0,o.kt)("p",null,"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER [ROW] POLICY [IF EXISTS] name1 [ON CLUSTER cluster_name1] ON [database1.]table1 [RENAME TO new_name1]\n        [, name2 [ON CLUSTER cluster_name2] ON [database2.]table2 [RENAME TO new_name2] ...]\n    [AS {PERMISSIVE | RESTRICTIVE}]\n    [FOR SELECT]\n    [USING {condition | NONE}][,...]\n    [TO {role [,...] | ALL | ALL EXCEPT role [,...]}]\n")))}m.isMDXComponent=!0}}]);