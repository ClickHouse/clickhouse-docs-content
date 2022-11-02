"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[56300,36551],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),u=a,f=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},61455:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={slug:"/en/sql-reference/statements/alter/projection",sidebar_position:49,sidebar_label:"PROJECTION",title:"Manipulating Projections"},l=void 0,c={unversionedId:"en/sql-reference/statements/alter/projection",id:"en/sql-reference/statements/alter/projection",title:"Manipulating Projections",description:"The following operations with projections are available:",source:"@site/docs/en/sql-reference/statements/alter/projection.md",sourceDirName:"en/sql-reference/statements/alter",slug:"/en/sql-reference/statements/alter/projection",permalink:"/docs/en/sql-reference/statements/alter/projection",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/statements/alter/projection.md",tags:[],version:"current",sidebarPosition:49,frontMatter:{slug:"/en/sql-reference/statements/alter/projection",sidebar_position:49,sidebar_label:"PROJECTION",title:"Manipulating Projections"},sidebar:"english",previous:{title:"SETTINGS PROFILE",permalink:"/docs/en/sql-reference/statements/alter/settings-profile"},next:{title:"VIEW",permalink:"/docs/en/sql-reference/statements/alter/view"}},p={},m=[{value:"ADD PROJECTION",id:"add-projection",level:2},{value:"DROP PROJECTION",id:"drop-projection",level:2},{value:"MATERIALIZE PROJECTION",id:"materialize-projection",level:2},{value:"CLEAR PROJECTION",id:"clear-projection",level:2}],d={toc:m};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The following operations with ",(0,o.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/mergetree-family/mergetree#projections"},"projections")," are available:"),(0,o.kt)("h2",{id:"add-projection"},"ADD PROJECTION"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ALTER TABLE [db].name ADD PROJECTION name ( SELECT <COLUMN LIST EXPR> [GROUP BY] [ORDER BY] )")," - Adds projection description to tables metadata."),(0,o.kt)("h2",{id:"drop-projection"},"DROP PROJECTION"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ALTER TABLE [db].name DROP PROJECTION name")," - Removes projection description from tables metadata and deletes projection files from disk. Implemented as a ",(0,o.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/alter/#mutations"},"mutation"),"."),(0,o.kt)("h2",{id:"materialize-projection"},"MATERIALIZE PROJECTION"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ALTER TABLE [db.]table MATERIALIZE PROJECTION name IN PARTITION partition_name")," - The query rebuilds the projection ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," in the partition ",(0,o.kt)("inlineCode",{parentName:"p"},"partition_name"),". Implemented as a ",(0,o.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/alter/#mutations"},"mutation"),"."),(0,o.kt)("h2",{id:"clear-projection"},"CLEAR PROJECTION"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ALTER TABLE [db.]table CLEAR PROJECTION name IN PARTITION partition_name")," - Deletes projection files from disk without removing description. Implemented as a ",(0,o.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/alter/#mutations"},"mutation"),"."),(0,o.kt)("p",null,"The commands ",(0,o.kt)("inlineCode",{parentName:"p"},"ADD"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"DROP")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"CLEAR")," are lightweight in a sense that they only change metadata or remove files."),(0,o.kt)("p",null,"Also, they are replicated, syncing projections metadata via ClickHouse Keeper or ZooKeeper."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Projection manipulation is supported only for tables with ",(0,o.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/mergetree-family/mergetree"},(0,o.kt)("inlineCode",{parentName:"a"},"*MergeTree"))," engine (including ",(0,o.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/mergetree-family/replication"},"replicated")," variants)."))))}u.isMDXComponent=!0},67876:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=n(61455),s=["components"],l={slug:"/zh/sql-reference/statements/alter/projection",sidebar_position:49,sidebar_label:"PROJECTION",title:"Manipulating Projections"},c=void 0,p={unversionedId:"zh/sql-reference/statements/alter/projection",id:"zh/sql-reference/statements/alter/projection",title:"Manipulating Projections",description:"",source:"@site/docs/zh/sql-reference/statements/alter/projection.mdx",sourceDirName:"zh/sql-reference/statements/alter",slug:"/zh/sql-reference/statements/alter/projection",permalink:"/docs/zh/sql-reference/statements/alter/projection",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/statements/alter/projection.mdx",tags:[],version:"current",sidebarPosition:49,frontMatter:{slug:"/zh/sql-reference/statements/alter/projection",sidebar_position:49,sidebar_label:"PROJECTION",title:"Manipulating Projections"},sidebar:"chinese",previous:{title:"\u914d\u7f6e\u6587\u4ef6\u8bbe\u7f6e",permalink:"/docs/zh/sql-reference/statements/alter/settings-profile"},next:{title:"VIEW",permalink:"/docs/zh/sql-reference/statements/alter/view"}},m={},d=[],u={toc:d};function f(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.default,{mdxType:"Content"}))}f.isMDXComponent=!0}}]);