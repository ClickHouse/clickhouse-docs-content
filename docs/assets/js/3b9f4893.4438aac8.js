"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[61881],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,y=d["".concat(s,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},18228:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={sidebar_position:60,sidebar_label:"Nothing"},s="Nothing",c={unversionedId:"en/sql-reference/data-types/special-data-types/nothing",id:"en/sql-reference/data-types/special-data-types/nothing",title:"Nothing",description:"nothing}",source:"@site/docs/en/sql-reference/data-types/special-data-types/nothing.md",sourceDirName:"en/sql-reference/data-types/special-data-types",slug:"/en/sql-reference/data-types/special-data-types/nothing",permalink:"/docs/en/sql-reference/data-types/special-data-types/nothing",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/data-types/special-data-types/nothing.md",tags:[],version:"current",sidebarPosition:60,frontMatter:{sidebar_position:60,sidebar_label:"Nothing"},sidebar:"english",previous:{title:"Set",permalink:"/docs/en/sql-reference/data-types/special-data-types/set"},next:{title:"Interval",permalink:"/docs/en/sql-reference/data-types/special-data-types/interval"}},p={},u=[],d={toc:u};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"nothing"},"Nothing"),(0,o.kt)("p",null,"The only purpose of this data type is to represent cases where a value is not expected. So you can\u2019t create a ",(0,o.kt)("inlineCode",{parentName:"p"},"Nothing")," type value."),(0,o.kt)("p",null,"For example, literal ",(0,o.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/syntax#null-literal"},"NULL")," has type of ",(0,o.kt)("inlineCode",{parentName:"p"},"Nullable(Nothing)"),". See more about ",(0,o.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/nullable"},"Nullable"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Nothing")," type can also used to denote empty arrays:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT toTypeName(array())\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500toTypeName(array())\u2500\u2510\n\u2502 Array(Nothing)      \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/data_types/special_data_types/nothing/"},"Original article")," "))}f.isMDXComponent=!0}}]);