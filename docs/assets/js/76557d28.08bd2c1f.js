"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[9677],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,d=p["".concat(c,".").concat(m)]||p[m]||f[m]||o;return n?r.createElement(d,l(l({ref:t},u),{},{components:n})):r.createElement(d,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},50867:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={slug:"/en/faq/integration/file-export",title:"How do I export data from ClickHouse to a file?",toc_hidden:!0,toc_priority:10},l="How Do I Export Data from ClickHouse to a File?",i={permalink:"/docs/knowledgebase/en/faq/integration/file-export",source:"@site/knowledgebase/faq/integration/file-export.md",title:"How do I export data from ClickHouse to a file?",description:"Using INTO OUTFILE Clause",date:"2023-03-17T17:39:50.000Z",formattedDate:"March 17, 2023",tags:[],readingTime:.45,hasTruncateMarker:!1,authors:[],frontMatter:{slug:"/en/faq/integration/file-export",title:"How do I export data from ClickHouse to a file?",toc_hidden:!0,toc_priority:10},prevItem:{title:"Why is ClickHouse so fast?",permalink:"/docs/knowledgebase/en/faq/general/why-clickhouse-is-so-fast"},nextItem:{title:"Questions About Integrating ClickHouse and Other Systems",permalink:"/docs/knowledgebase/en/faq/integration/"}},c={authorsImageUrls:[]},s=[{value:"Using INTO OUTFILE Clause",id:"using-into-outfile-clause",level:2},{value:"Using a File-Engine Table",id:"using-a-file-engine-table",level:2},{value:"Using Command-Line Redirection",id:"using-command-line-redirection",level:2}],u={toc:s},p="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"using-into-outfile-clause"},"Using INTO OUTFILE Clause"),(0,a.kt)("p",null,"Add an ",(0,a.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/sql-reference/statements/select/into-outfile.md"},"INTO OUTFILE")," clause to your query."),(0,a.kt)("p",null,"For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM table INTO OUTFILE 'file'\n")),(0,a.kt)("p",null,"By default, ClickHouse uses the ",(0,a.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/interfaces/formats.md"},"TabSeparated")," format for output data. To select the ",(0,a.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/interfaces/formats.md"},"data format"),", use the ",(0,a.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/sql-reference/statements/select/format.md"},"FORMAT clause"),"."),(0,a.kt)("p",null,"For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM table INTO OUTFILE 'file' FORMAT CSV\n")),(0,a.kt)("h2",{id:"using-a-file-engine-table"},"Using a File-Engine Table"),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/engines/table-engines/special/file.md"},"File")," table engine."),(0,a.kt)("h2",{id:"using-command-line-redirection"},"Using Command-Line Redirection"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'$ clickhouse-client --query "SELECT * from table" --format FormatName > result.txt\n')),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/interfaces/cli.md"},"clickhouse-client"),"."))}f.isMDXComponent=!0}}]);