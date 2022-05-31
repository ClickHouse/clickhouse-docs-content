"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[50411],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||s;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<s;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},44871:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return u}});var r=n(87462),a=n(63366),s=(n(67294),n(3905)),i=["components"],o={sidebar_position:40,sidebar_label:"UPDATE"},l="ALTER TABLE \u2026 UPDATE Statements",c={unversionedId:"en/sql-reference/statements/alter/update",id:"en/sql-reference/statements/alter/update",title:"ALTER TABLE \u2026 UPDATE Statements",description:"alter-table-update-statements}",source:"@site/docs/en/sql-reference/statements/alter/update.md",sourceDirName:"en/sql-reference/statements/alter",slug:"/en/sql-reference/statements/alter/update",permalink:"/docs/en/sql-reference/statements/alter/update",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/statements/alter/update.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{sidebar_position:40,sidebar_label:"UPDATE"},sidebar:"english",previous:{title:"DELETE",permalink:"/docs/en/sql-reference/statements/alter/delete"},next:{title:"ORDER BY",permalink:"/docs/en/sql-reference/statements/alter/order-by"}},p={},u=[],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"alter-table-update-statements"},"ALTER TABLE \u2026 UPDATE Statements"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE [db.]table UPDATE column1 = expr1 [, ...] WHERE filter_expr\n")),(0,s.kt)("p",null,"Manipulates data matching the specified filtering expression. Implemented as a ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/alter/#mutations"},"mutation"),"."),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"The ",(0,s.kt)("inlineCode",{parentName:"p"},"ALTER TABLE")," prefix makes this syntax different from most other systems supporting SQL. It is intended to signify that unlike similar queries in OLTP databases this is a heavy operation not designed for frequent use."))),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"filter_expr")," must be of type ",(0,s.kt)("inlineCode",{parentName:"p"},"UInt8"),". This query updates values of specified columns to the values of corresponding expressions in rows for which the ",(0,s.kt)("inlineCode",{parentName:"p"},"filter_expr")," takes a non-zero value. Values are casted to the column type using the ",(0,s.kt)("inlineCode",{parentName:"p"},"CAST")," operator. Updating columns that are used in the calculation of the primary or the partition key is not supported."),(0,s.kt)("p",null,"One query can contain several commands separated by commas."),(0,s.kt)("p",null,"The synchronicity of the query processing is defined by the ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/operations/settings/settings#mutations_sync"},"mutations_sync")," setting. By default, it is asynchronous."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"See also")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/statements/alter/#mutations"},"Mutations")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/statements/alter/#synchronicity-of-alter-queries"},"Synchronicity of ALTER Queries")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/en/operations/settings/settings#mutations_sync"},"mutations_sync")," setting")))}d.isMDXComponent=!0}}]);