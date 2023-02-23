"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[60373],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=i(n),f=a,d=u["".concat(c,".").concat(f)]||u[f]||m[f]||l;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var i=2;i<l;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},72047:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>i});var r=n(87462),a=(n(67294),n(3905));const l={slug:"/en/sql-reference/table-functions/format",sidebar_position:56,sidebar_label:"format"},o="format",s={unversionedId:"en/sql-reference/table-functions/format",id:"en/sql-reference/table-functions/format",title:"format",description:"Parses data from arguments according to specified input format. If structure argument is not specified, it's extracted from the data.",source:"@site/docs/en/sql-reference/table-functions/format.md",sourceDirName:"en/sql-reference/table-functions",slug:"/en/sql-reference/table-functions/format",permalink:"/docs/en/sql-reference/table-functions/format",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/table-functions/format.md",tags:[],version:"current",sidebarPosition:56,frontMatter:{slug:"/en/sql-reference/table-functions/format",sidebar_position:56,sidebar_label:"format"},sidebar:"english",previous:{title:"sqlite",permalink:"/docs/en/sql-reference/table-functions/sqlite"},next:{title:"DeltaLake",permalink:"/docs/en/sql-reference/table-functions/deltalake"}},c={},i=[],p={toc:i},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"format"},"format"),(0,a.kt)("p",null,"Parses data from arguments according to specified input format. If structure argument is not specified, it's extracted from the data."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Syntax")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"format(format_name, [structure], data)\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"format_name")," \u2014 The ",(0,a.kt)("a",{parentName:"li",href:"/docs/en/interfaces/formats#formats"},"format")," of the data."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"structure")," - Structure of the table. Optional. Format 'column1_name column1_type, column2_name column2_type, ...'."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"data")," \u2014 String literal or constant expression that returns a string containing data in specified format")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returned value")),(0,a.kt)("p",null,"A table with data parsed from ",(0,a.kt)("inlineCode",{parentName:"p"},"data")," argument according to specified format and specified or extracted structure."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples")),(0,a.kt)("p",null,"Without ",(0,a.kt)("inlineCode",{parentName:"p"},"structure")," argument:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Query:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'SELECT * FROM format(JSONEachRow,\n$$\n{"a": "Hello", "b": 111}\n{"a": "World", "b": 123}\n{"a": "Hello", "b": 112}\n{"a": "World", "b": 124}\n$$)\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-response"},"\u250c\u2500\u2500\u2500b\u2500\u252c\u2500a\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 111 \u2502 Hello \u2502\n\u2502 123 \u2502 World \u2502\n\u2502 112 \u2502 Hello \u2502\n\u2502 124 \u2502 World \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Query:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'DESC format(JSONEachRow,\n$$\n{"a": "Hello", "b": 111}\n{"a": "World", "b": 123}\n{"a": "Hello", "b": 112}\n{"a": "World", "b": 124}\n$$)\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-response"},"\u250c\u2500name\u2500\u252c\u2500type\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500default_type\u2500\u252c\u2500default_expression\u2500\u252c\u2500comment\u2500\u252c\u2500codec_expression\u2500\u252c\u2500ttl_expression\u2500\u2510\n\u2502 b    \u2502 Nullable(Float64) \u2502              \u2502                    \u2502         \u2502                  \u2502                \u2502\n\u2502 a    \u2502 Nullable(String)  \u2502              \u2502                    \u2502         \u2502                  \u2502                \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,"With ",(0,a.kt)("inlineCode",{parentName:"p"},"structure")," argument:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Query:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'SELECT * FROM format(JSONEachRow, \'a String, b UInt32\',\n$$\n{"a": "Hello", "b": 111}\n{"a": "World", "b": 123}\n{"a": "Hello", "b": 112}\n{"a": "World", "b": 124}\n$$)\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-response"},"\u250c\u2500a\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500b\u2500\u2510\n\u2502 Hello \u2502 111 \u2502\n\u2502 World \u2502 123 \u2502\n\u2502 Hello \u2502 112 \u2502\n\u2502 World \u2502 124 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"See Also")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/en/interfaces/formats"},"Formats"))))}m.isMDXComponent=!0}}]);