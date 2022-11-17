"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[42273],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,f=u["".concat(o,".").concat(d)]||u[d]||m[d]||s;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<s;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},67165:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const s={slug:"/en/sql-reference/statements/select/limit-by",sidebar_label:"LIMIT BY"},i="LIMIT BY Clause",l={unversionedId:"en/sql-reference/statements/select/limit-by",id:"en/sql-reference/statements/select/limit-by",title:"LIMIT BY Clause",description:"A query with the LIMIT n BY expressions clause selects the first n rows for each distinct value of expressions. The key for LIMIT BY can contain any number of expressions.",source:"@site/docs/en/sql-reference/statements/select/limit-by.md",sourceDirName:"en/sql-reference/statements/select",slug:"/en/sql-reference/statements/select/limit-by",permalink:"/docs/en/sql-reference/statements/select/limit-by",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/statements/select/limit-by.md",tags:[],version:"current",frontMatter:{slug:"/en/sql-reference/statements/select/limit-by",sidebar_label:"LIMIT BY"},sidebar:"english",previous:{title:"JOIN",permalink:"/docs/en/sql-reference/statements/select/join"},next:{title:"LIMIT",permalink:"/docs/en/sql-reference/statements/select/limit"}},o={},c=[{value:"Examples",id:"examples",level:2}],p={toc:c};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"limit-by-clause"},"LIMIT BY Clause"),(0,a.kt)("p",null,"A query with the ",(0,a.kt)("inlineCode",{parentName:"p"},"LIMIT n BY expressions")," clause selects the first ",(0,a.kt)("inlineCode",{parentName:"p"},"n")," rows for each distinct value of ",(0,a.kt)("inlineCode",{parentName:"p"},"expressions"),". The key for ",(0,a.kt)("inlineCode",{parentName:"p"},"LIMIT BY")," can contain any number of ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/syntax#syntax-expressions"},"expressions"),"."),(0,a.kt)("p",null,"ClickHouse supports the following syntax variants:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"LIMIT [offset_value, ]n BY expressions")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"LIMIT n OFFSET offset_value BY expressions"))),(0,a.kt)("p",null,"During query processing, ClickHouse selects data ordered by sorting key. The sorting key is set explicitly using an ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/select/order-by#select-order-by"},"ORDER BY")," clause or implicitly as a property of the table engine (row order is only guaranteed when using ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/select/order-by#select-order-by"},"ORDER BY"),", otherwise the row blocks will not be ordered due to multi-threading). Then ClickHouse applies ",(0,a.kt)("inlineCode",{parentName:"p"},"LIMIT n BY expressions")," and returns the first ",(0,a.kt)("inlineCode",{parentName:"p"},"n")," rows for each distinct combination of ",(0,a.kt)("inlineCode",{parentName:"p"},"expressions"),". If ",(0,a.kt)("inlineCode",{parentName:"p"},"OFFSET")," is specified, then for each data block that belongs to a distinct combination of ",(0,a.kt)("inlineCode",{parentName:"p"},"expressions"),", ClickHouse skips ",(0,a.kt)("inlineCode",{parentName:"p"},"offset_value")," number of rows from the beginning of the block and returns a maximum of ",(0,a.kt)("inlineCode",{parentName:"p"},"n")," rows as a result. If ",(0,a.kt)("inlineCode",{parentName:"p"},"offset_value")," is bigger than the number of rows in the data block, ClickHouse returns zero rows from the block."),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},(0,a.kt)("inlineCode",{parentName:"p"},"LIMIT BY")," is not related to ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/select/limit"},"LIMIT"),". They can both be used in the same query."))),(0,a.kt)("p",null,"If you want to use column numbers instead of column names in the ",(0,a.kt)("inlineCode",{parentName:"p"},"LIMIT BY")," clause, enable the setting ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/operations/settings/settings#enable-positional-arguments"},"enable_positional_arguments"),".\t"),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Sample table:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE limit_by(id Int, val Int) ENGINE = Memory;\nINSERT INTO limit_by VALUES (1, 10), (1, 11), (1, 12), (2, 20), (2, 21);\n")),(0,a.kt)("p",null,"Queries:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM limit_by ORDER BY id, val LIMIT 2 BY id\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500id\u2500\u252c\u2500val\u2500\u2510\n\u2502  1 \u2502  10 \u2502\n\u2502  1 \u2502  11 \u2502\n\u2502  2 \u2502  20 \u2502\n\u2502  2 \u2502  21 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM limit_by ORDER BY id, val LIMIT 1, 2 BY id\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500id\u2500\u252c\u2500val\u2500\u2510\n\u2502  1 \u2502  11 \u2502\n\u2502  1 \u2502  12 \u2502\n\u2502  2 \u2502  21 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT * FROM limit_by ORDER BY id, val LIMIT 2 OFFSET 1 BY id")," query returns the same result."),(0,a.kt)("p",null,"The following query returns the top 5 referrers for each ",(0,a.kt)("inlineCode",{parentName:"p"},"domain, device_type")," pair with a maximum of 100 rows in total (",(0,a.kt)("inlineCode",{parentName:"p"},"LIMIT n BY + LIMIT"),")."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    domainWithoutWWW(URL) AS domain,\n    domainWithoutWWW(REFERRER_URL) AS referrer,\n    device_type,\n    count() cnt\nFROM hits\nGROUP BY domain, referrer, device_type\nORDER BY cnt DESC\nLIMIT 5 BY domain, device_type\nLIMIT 100\n")))}m.isMDXComponent=!0}}]);