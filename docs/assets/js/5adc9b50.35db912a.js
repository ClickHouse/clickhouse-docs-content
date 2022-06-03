"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[4665],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=a,f=m["".concat(s,".").concat(u)]||m[u]||d[u]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88039:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={toc_hidden_folder:!0,sidebar_position:42,sidebar_label:"INDEX"},s="Manipulating Data Skipping Indices",c={unversionedId:"en/sql-reference/statements/alter/index/index",id:"en/sql-reference/statements/alter/index/index",title:"Manipulating Data Skipping Indices",description:"The following operations are available:",source:"@site/docs/en/sql-reference/statements/alter/index/index.md",sourceDirName:"en/sql-reference/statements/alter/index",slug:"/en/sql-reference/statements/alter/index/",permalink:"/docs/en/sql-reference/statements/alter/index/",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/statements/alter/index/index.md",tags:[],version:"current",sidebarPosition:42,frontMatter:{toc_hidden_folder:!0,sidebar_position:42,sidebar_label:"INDEX"},sidebar:"english",previous:{title:"SAMPLE BY",permalink:"/docs/en/sql-reference/statements/alter/sample-by"},next:{title:"CONSTRAINT",permalink:"/docs/en/sql-reference/statements/alter/constraint"}},p={},d=[],m={toc:d};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"manipulating-data-skipping-indices"},"Manipulating Data Skipping Indices"),(0,i.kt)("p",null,"The following operations are available:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"ALTER TABLE [db].name ADD INDEX name expression TYPE type GRANULARITY value [FIRST|AFTER name]")," - Adds index description to tables metadata.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"ALTER TABLE [db].name DROP INDEX name")," - Removes index description from tables metadata and deletes index files from disk.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"ALTER TABLE [db.]table MATERIALIZE INDEX name [IN PARTITION partition_name]")," - Rebuilds the secondary index ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," for the specified ",(0,i.kt)("inlineCode",{parentName:"p"},"partition_name"),". Implemented as a ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/alter/#mutations"},"mutation"),". If ",(0,i.kt)("inlineCode",{parentName:"p"},"IN PARTITION")," part is omitted then it rebuilds the index for the whole table data."))),(0,i.kt)("p",null,"The first two commands are lightweight in a sense that they only change metadata or remove files."),(0,i.kt)("p",null,"Also, they are replicated, syncing indices metadata via ZooKeeper."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Index manipulation is supported only for tables with ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/mergetree-family/mergetree"},(0,i.kt)("inlineCode",{parentName:"a"},"*MergeTree"))," engine (including ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/mergetree-family/replication"},"replicated")," variants)."))))}u.isMDXComponent=!0}}]);