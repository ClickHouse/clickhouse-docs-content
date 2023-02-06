"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[26983],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||s;return r?n.createElement(f,o(o({ref:t},l),{},{components:r})):n.createElement(f,o({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<s;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},95383:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const s={slug:"/en/operations/system-tables/detached_parts"},o="detached_parts",i={unversionedId:"en/operations/system-tables/detached_parts",id:"en/operations/system-tables/detached_parts",title:"detached_parts",description:"Contains information about detached parts of MergeTree tables. The reason column specifies why the part was detached.",source:"@site/docs/en/operations/system-tables/detached_parts.md",sourceDirName:"en/operations/system-tables",slug:"/en/operations/system-tables/detached_parts",permalink:"/docs/en/operations/system-tables/detached_parts",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/operations/system-tables/detached_parts.md",tags:[],version:"current",frontMatter:{slug:"/en/operations/system-tables/detached_parts"},sidebar:"english",previous:{title:"databases",permalink:"/docs/en/operations/system-tables/databases"},next:{title:"dictionaries",permalink:"/docs/en/operations/system-tables/dictionaries"}},c={},p=[],l={toc:p},d="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"detached_parts"},"detached_parts"),(0,a.kt)("p",null,"Contains information about detached parts of ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/mergetree-family/mergetree"},"MergeTree")," tables. The ",(0,a.kt)("inlineCode",{parentName:"p"},"reason")," column specifies why the part was detached."),(0,a.kt)("p",null,"For user-detached parts, the reason is empty. Such parts can be attached with ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/alter/partition#alter_attach-partition"},"ALTER TABLE ATTACH PARTITION","|","PART")," command."),(0,a.kt)("p",null,"For the description of other columns, see ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/operations/system-tables/parts#system_tables-parts"},"system.parts"),"."),(0,a.kt)("p",null,"If part name is invalid, values of some columns may be ",(0,a.kt)("inlineCode",{parentName:"p"},"NULL"),". Such parts can be deleted with ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/alter/partition#alter_drop-detached"},"ALTER TABLE DROP DETACHED PART"),"."))}u.isMDXComponent=!0}}]);