"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[35838],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=i.createContext({}),c=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return i.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(t),m=r,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return t?i.createElement(f,s(s({ref:n},p),{},{components:t})):i.createElement(f,s({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,s=new Array(a);s[0]=u;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<a;c++)s[c]=t[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},48860:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var i=t(87462),r=(t(67294),t(3905));const a={slug:"/en/engines/table-engines/special/materializedview",sidebar_position:100,sidebar_label:"MaterializedView"},s="MaterializedView Table Engine",o={unversionedId:"en/engines/table-engines/special/materializedview",id:"en/engines/table-engines/special/materializedview",title:"MaterializedView Table Engine",description:"Used for implementing materialized views (for more information, see CREATE VIEW). For storing data, it uses a different engine that was specified when creating the view. When reading from a table, it just uses that engine.",source:"@site/docs/en/engines/table-engines/special/materializedview.md",sourceDirName:"en/engines/table-engines/special",slug:"/en/engines/table-engines/special/materializedview",permalink:"/docs/en/engines/table-engines/special/materializedview",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/engines/table-engines/special/materializedview.md",tags:[],version:"current",sidebarPosition:100,frontMatter:{slug:"/en/engines/table-engines/special/materializedview",sidebar_position:100,sidebar_label:"MaterializedView"},sidebar:"english",previous:{title:"View",permalink:"/docs/en/engines/table-engines/special/view"},next:{title:"Memory",permalink:"/docs/en/engines/table-engines/special/memory"}},l={},c=[],p={toc:c};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"materializedview-table-engine"},"MaterializedView Table Engine"),(0,r.kt)("p",null,"Used for implementing materialized views (for more information, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/create/view#materialized"},"CREATE VIEW"),"). For storing data, it uses a different engine that was specified when creating the view. When reading from a table, it just uses that engine."))}d.isMDXComponent=!0}}]);