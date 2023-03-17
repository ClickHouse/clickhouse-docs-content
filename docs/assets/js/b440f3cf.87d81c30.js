"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[50831],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),f=a,y=m["".concat(i,".").concat(f)]||m[f]||u[f]||s;return n?r.createElement(y,l(l({ref:t},c),{},{components:n})):r.createElement(y,l({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,l=new Array(s);l[0]=f;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[m]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<s;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},74098:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const s={slug:"/en/sql-reference/statements/alter/sample-by",sidebar_position:41,sidebar_label:"SAMPLE BY",title:"Manipulating Sampling-Key Expressions"},l=void 0,o={unversionedId:"en/sql-reference/statements/alter/sample-by",id:"en/sql-reference/statements/alter/sample-by",title:"Manipulating Sampling-Key Expressions",description:"Syntax:",source:"@site/docs/en/sql-reference/statements/alter/sample-by.md",sourceDirName:"en/sql-reference/statements/alter",slug:"/en/sql-reference/statements/alter/sample-by",permalink:"/docs/en/sql-reference/statements/alter/sample-by",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/statements/alter/sample-by.md",tags:[],version:"current",sidebarPosition:41,frontMatter:{slug:"/en/sql-reference/statements/alter/sample-by",sidebar_position:41,sidebar_label:"SAMPLE BY",title:"Manipulating Sampling-Key Expressions"},sidebar:"sqlreference",previous:{title:"ORDER BY",permalink:"/docs/en/sql-reference/statements/alter/order-by"},next:{title:"INDEX",permalink:"/docs/en/sql-reference/statements/alter/skipping-index"}},i={},p=[],c={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Syntax:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE [db].name [ON CLUSTER cluster] MODIFY SAMPLE BY new_expression\n")),(0,a.kt)("p",null,"The command changes the ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/mergetree-family/mergetree"},"sampling key")," of the table to ",(0,a.kt)("inlineCode",{parentName:"p"},"new_expression")," (an expression or a tuple of expressions)."),(0,a.kt)("p",null,"The command is lightweight in the sense that it only changes metadata. The primary key must contain the new sample key."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"It only works for tables in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/mergetree-family/mergetree"},"MergeTree")," family (including ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/mergetree-family/replication"},"replicated")," tables).")))}u.isMDXComponent=!0}}]);