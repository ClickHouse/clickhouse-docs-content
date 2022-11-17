"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[86580],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),f=a,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||o;return n?r.createElement(m,s(s({ref:t},p),{},{components:n})):r.createElement(m,s({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},50485:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={slug:"/en/sql-reference/data-types/date32",sidebar_position:48,sidebar_label:"Date32"},s="Date32",i={unversionedId:"en/sql-reference/data-types/date32",id:"en/sql-reference/data-types/date32",title:"Date32",description:"A date. Supports the date range same with DateTime64. Stored as a signed 32-bit integer in native byte order with the value representing the days since 1970-01-01 (0 represents 1970-01-01 and negative values represent the days before 1970).",source:"@site/docs/en/sql-reference/data-types/date32.md",sourceDirName:"en/sql-reference/data-types",slug:"/en/sql-reference/data-types/date32",permalink:"/docs/en/sql-reference/data-types/date32",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/data-types/date32.md",tags:[],version:"current",sidebarPosition:48,frontMatter:{slug:"/en/sql-reference/data-types/date32",sidebar_position:48,sidebar_label:"Date32"},sidebar:"english",previous:{title:"Date",permalink:"/docs/en/sql-reference/data-types/date"},next:{title:"DateTime",permalink:"/docs/en/sql-reference/data-types/datetime"}},l={},c=[],p={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"date32"},"Date32"),(0,a.kt)("p",null,"A date. Supports the date range same with ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/datetime64"},"DateTime64"),". Stored as a signed 32-bit integer in native byte order with the value representing the days since 1970-01-01 (0 represents 1970-01-01 and negative values represent the days before 1970)."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples")),(0,a.kt)("p",null,"Creating a table with a ",(0,a.kt)("inlineCode",{parentName:"p"},"Date32"),"-type column and inserting data into it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE new\n(\n    `timestamp` Date32,\n    `event_id` UInt8\n)\nENGINE = TinyLog;\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO new VALUES (4102444800, 1), ('2100-01-01', 2);\nSELECT * FROM new;\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500timestamp\u2500\u252c\u2500event_id\u2500\u2510\n\u2502 2100-01-01 \u2502        1 \u2502\n\u2502 2100-01-01 \u2502        2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"See Also")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/functions/type-conversion-functions#todate32"},"toDate32")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/functions/type-conversion-functions#todate32-or-zero"},"toDate32OrZero")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/functions/type-conversion-functions#todate32-or-null"},"toDate32OrNull"))))}d.isMDXComponent=!0}}]);