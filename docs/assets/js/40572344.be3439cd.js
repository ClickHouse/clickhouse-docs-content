"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[90136],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>u});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),d=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=d(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=d(t),u=i,g=c["".concat(l,".").concat(u)]||c[u]||p[u]||a;return t?r.createElement(g,o(o({ref:n},m),{},{components:t})):r.createElement(g,o({ref:n},m))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=c;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var d=2;d<a;d++)o[d]=t[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},42434:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var r=t(87462),i=(t(67294),t(3905));const a={},o="Inverted indexes [experimental]",s={unversionedId:"en/engines/table-engines/mergetree-family/invertedindexes",id:"en/engines/table-engines/mergetree-family/invertedindexes",title:"Inverted indexes [experimental]",description:"table_engines-ANNIndex}",source:"@site/docs/en/engines/table-engines/mergetree-family/invertedindexes.md",sourceDirName:"en/engines/table-engines/mergetree-family",slug:"/en/engines/table-engines/mergetree-family/invertedindexes",permalink:"/docs/en/engines/table-engines/mergetree-family/invertedindexes",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/engines/table-engines/mergetree-family/invertedindexes.md",tags:[],version:"current",frontMatter:{},sidebar:"english",previous:{title:"Approximate Nearest Neighbor Search Indexes [experimental]",permalink:"/docs/en/engines/table-engines/mergetree-family/annindexes"},next:{title:"Log Family",permalink:"/docs/en/engines/table-engines/log-family/"}},l={},d=[{value:"Usage",id:"usage",level:2}],m={toc:d};function p(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"table_engines-ANNIndex"},"Inverted indexes ","[experimental]"),(0,i.kt)("p",null,"Inverted indexes are an experimental type of ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/mergetree-family/mergetree#available-types-of-indices"},"secondary indexes")," which provide fast text search\ncapabilities for ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/string"},"String")," or ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/fixedstring"},"FixedString"),'\ncolumns. The main idea of an inverted indexes is to store a mapping from "terms" to the rows which contains these terms. "Terms" are\ntokenized cells of the string column. For example, string cell "I will be a little late" is by default tokenized into six terms "I", "will",\n"be", "a", "little" and "late". Another kind of tokenizer are n-grams. For example, the result of 3-gram tokenization will be 21 terms "I w",\n" wi", "wil", "ill", "ll ", "l b", " be" etc. The more fine-granular the input strings are tokenized, the bigger but also the more\nuseful the resulting inverted index will be. '),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Inverted indexes are experimental and should not be used in production environment yet. They may change in future in backwards-incompatible\nways, for example with respect to their DDL/DQL syntax or performance/compression characteristics."))),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"To use inverted indexes, first enable them in the configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SET allow_experimental_inverted_index = true;\n")),(0,i.kt)("p",null,"An inverted index can be defined on a string column using the following syntax"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE tab (key UInt64, str String, INDEX inv_idx(s) TYPE inverted(N) GRANULARITY 1) Engine=MergeTree ORDER BY (k);\n")),(0,i.kt)("p",null,"where ",(0,i.kt)("inlineCode",{parentName:"p"},"N")," specifies the tokenizer:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"inverted(0)")," (or shorter: ",(0,i.kt)("inlineCode",{parentName:"li"},"inverted()"),') set the tokenizer to "tokens", i.e. split strings along spaces,'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"inverted(N)")," with ",(0,i.kt)("inlineCode",{parentName:"li"},"N"),' between 2 and 8 sets the tokenizer to "ngrams(N)"')),(0,i.kt)("p",null,"Being a type of skipping indexes, inverted indexes can be dropped or added to a column after table creation:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE tbl DROP INDEX inv_idx;\nALTER TABLE tbl ADD INDEX inv_idx(s) TYPE inverted(2) GRANULARITY 1;\n")),(0,i.kt)("p",null,"To use the index, no special functions or syntax are required. Typical string search predicates automatically leverage the index. As\nexamples, consider:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * from tab WHERE s == 'Hello World;;\nSELECT * from tab WHERE s IN (\u2018Hello\u2019, \u2018World\u2019);\nSELECT * from tab WHERE s LIKE \u2018%Hello%\u2019;\nSELECT * from tab WHERE multiSearchAny(s, \u2018Hello\u2019, \u2018World\u2019);\nSELECT * from tab WHERE hasToken(s, \u2018Hello\u2019);\nSELECT * from tab WHERE multiSearchAll(s, [\u2018Hello\u2019, \u2018World\u2019])\n")),(0,i.kt)("p",null,"The inverted index also works on columns of type ",(0,i.kt)("inlineCode",{parentName:"p"},"Array(String)"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Array(FixedString)"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Map(String)")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Map(String)"),"."),(0,i.kt)("p",null,'Like for other secondary indices, each column part has its own inverted index. Furthermore, each inverted index is internally divided into\n"segments". The existence and size of the segments is generally transparent to users but the segment size determines the memory consumption\nduring index construction (e.g. when two parts are merged). Configuration parameter "max_digestion_size_per_segment" (default: 256 MB)\ncontrols the amount of data read consumed from the underlying column before a new segment is created. Incrementing the parameter raises the\nintermediate memory consumption for index constuction but also improves lookup performance since fewer segments need to be checked on\naverage to evaluate a query.'),(0,i.kt)("p",null,"Unlike other secondary indices, inverted indexes (for now) map to row numbers (row ids) instead of granule ids. The reason for this design\nis performance. In practice, users often search for multiple terms at once. For example, filter predicate ",(0,i.kt)("inlineCode",{parentName:"p"},"WHERE s LIKE '%little%' OR s LIKE\n'%big%'"),' can be evaluated directly using an inverted index by forming the union of the rowid lists for terms "little" and "big". This also\nmeans that parameter ',(0,i.kt)("inlineCode",{parentName:"p"},"GRANULARITY")," supplied to index creation has no meaning (it may be removed from the syntax in future)."))}p.isMDXComponent=!0}}]);