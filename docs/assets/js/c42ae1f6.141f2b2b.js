"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[61575],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>f});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(t),f=o,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||a;return t?n.createElement(m,i(i({ref:r},u),{},{components:t})):n.createElement(m,i({ref:r},u))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},92178:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=t(87462),o=(t(67294),t(3905));const a={slug:"/en/sql-reference/functions/comparison-functions",sidebar_position:36,sidebar_label:"Comparison"},i="Comparison Functions",s={unversionedId:"en/sql-reference/functions/comparison-functions",id:"en/sql-reference/functions/comparison-functions",title:"Comparison Functions",description:"Comparison functions always return 0 or 1 (Uint8).",source:"@site/docs/en/sql-reference/functions/comparison-functions.md",sourceDirName:"en/sql-reference/functions",slug:"/en/sql-reference/functions/comparison-functions",permalink:"/docs/en/sql-reference/functions/comparison-functions",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/functions/comparison-functions.md",tags:[],version:"current",sidebarPosition:36,frontMatter:{slug:"/en/sql-reference/functions/comparison-functions",sidebar_position:36,sidebar_label:"Comparison"},sidebar:"english",previous:{title:"Arrays",permalink:"/docs/en/sql-reference/functions/array-functions"},next:{title:"Logical",permalink:"/docs/en/sql-reference/functions/logical-functions"}},l={},c=[{value:"equals, a <code>=</code> b and a <code>==</code> b operator",id:"equals-a--b-and-a--b-operator",level:3},{value:"notEquals, a <code>!=</code> b and a <code>&lt;&gt;</code> b operator",id:"notequals-a--b-and-a--b-operator",level:3},{value:"less, <code>&lt;</code> operator",id:"less--operator",level:3},{value:"greater, <code>&gt;</code> operator",id:"greater--operator",level:3},{value:"lessOrEquals, <code>&lt;=</code> operator",id:"lessorequals--operator",level:3},{value:"greaterOrEquals, <code>&gt;=</code> operator",id:"greaterorequals--operator",level:3}],u={toc:c};function p(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"comparison-functions"},"Comparison Functions"),(0,o.kt)("p",null,"Comparison functions always return 0 or 1 (Uint8)."),(0,o.kt)("p",null,"The following types can be compared:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"numbers"),(0,o.kt)("li",{parentName:"ul"},"strings and fixed strings"),(0,o.kt)("li",{parentName:"ul"},"dates"),(0,o.kt)("li",{parentName:"ul"},"dates with times")),(0,o.kt)("p",null,"within each group, but not between different groups."),(0,o.kt)("p",null,"For example, you can\u2019t compare a date with a string. You have to use a function to convert the string to a date, or vice versa."),(0,o.kt)("p",null,"Strings are compared by bytes. A shorter string is smaller than all strings that start with it and that contain at least one more character."),(0,o.kt)("h3",{id:"equals-a--b-and-a--b-operator"},"equals, a ",(0,o.kt)("inlineCode",{parentName:"h3"},"=")," b and a ",(0,o.kt)("inlineCode",{parentName:"h3"},"==")," b operator"),(0,o.kt)("h3",{id:"notequals-a--b-and-a--b-operator"},"notEquals, a ",(0,o.kt)("inlineCode",{parentName:"h3"},"!=")," b and a ",(0,o.kt)("inlineCode",{parentName:"h3"},"<>")," b operator"),(0,o.kt)("h3",{id:"less--operator"},"less, ",(0,o.kt)("inlineCode",{parentName:"h3"},"<")," operator"),(0,o.kt)("h3",{id:"greater--operator"},"greater, ",(0,o.kt)("inlineCode",{parentName:"h3"},">")," operator"),(0,o.kt)("h3",{id:"lessorequals--operator"},"lessOrEquals, ",(0,o.kt)("inlineCode",{parentName:"h3"},"<=")," operator"),(0,o.kt)("h3",{id:"greaterorequals--operator"},"greaterOrEquals, ",(0,o.kt)("inlineCode",{parentName:"h3"},">=")," operator"))}p.isMDXComponent=!0}}]);