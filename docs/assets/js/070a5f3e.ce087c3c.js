"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[72554],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>y});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),g=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=g(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=g(t),u=i,y=p["".concat(s,".").concat(u)]||p[u]||f[u]||o;return t?r.createElement(y,a(a({ref:n},c),{},{components:t})):r.createElement(y,a({ref:n},c))}));function y(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:i,a[1]=l;for(var g=2;g<o;g++)a[g]=t[g];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},81192:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>g});var r=t(87462),i=(t(67294),t(3905));const o={slug:"/en/engines/table-engines/log-family/tinylog",toc_priority:34,toc_title:"TinyLog"},a="TinyLog",l={unversionedId:"en/engines/table-engines/log-family/tinylog",id:"en/engines/table-engines/log-family/tinylog",title:"TinyLog",description:"The engine belongs to the log engine family. See Log Engine Family for common properties of log engines and their differences.",source:"@site/docs/en/engines/table-engines/log-family/tinylog.md",sourceDirName:"en/engines/table-engines/log-family",slug:"/en/engines/table-engines/log-family/tinylog",permalink:"/docs/en/engines/table-engines/log-family/tinylog",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/engines/table-engines/log-family/tinylog.md",tags:[],version:"current",frontMatter:{slug:"/en/engines/table-engines/log-family/tinylog",toc_priority:34,toc_title:"TinyLog"},sidebar:"sqlreference",previous:{title:"Stripelog",permalink:"/docs/en/engines/table-engines/log-family/stripelog"},next:{title:"Integrations",permalink:"/docs/en/engines/table-engines/integrations/"}},s={},g=[],c={toc:g},p="wrapper";function f(e){let{components:n,...t}=e;return(0,i.kt)(p,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"tinylog"},"TinyLog"),(0,i.kt)("p",null,"The engine belongs to the log engine family. See ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/log-family/"},"Log Engine Family")," for common properties of log engines and their differences."),(0,i.kt)("p",null,"This table engine is typically used with the write-once method: write data one time, then read it as many times as necessary. For example, you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"TinyLog"),"-type tables for intermediary data that is processed in small batches. Note that storing data in a large number of small tables is inefficient."),(0,i.kt)("p",null,"Queries are executed in a single stream. In other words, this engine is intended for relatively small tables (up to about 1,000,000 rows). It makes sense to use this table engine if you have many small tables, since it\u2019s simpler than the ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/log-family/log"},"Log")," engine (fewer files need to be opened)."))}f.isMDXComponent=!0}}]);