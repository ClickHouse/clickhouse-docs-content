"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[99565],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},89446:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={slug:"/en/faq/integration/file-export",title:"How do I export data from ClickHouse to a file?",toc_hidden:!0,toc_priority:10},i="How Do I Export Data from ClickHouse to a File?",l={permalink:"/docs/knowledgebase/en/faq/integration/file-export",source:"@site/knowledgebase/file-export.md",title:"How do I export data from ClickHouse to a file?",description:"Using INTO OUTFILE Clause",date:"2023-03-22T17:55:58.000Z",formattedDate:"March 22, 2023",tags:[],readingTime:1.51,hasTruncateMarker:!1,authors:[],frontMatter:{slug:"/en/faq/integration/file-export",title:"How do I export data from ClickHouse to a file?",toc_hidden:!0,toc_priority:10},prevItem:{title:"Execute SYSTEM statements on all nodes in ClickHouse Cloud",permalink:"/docs/knowledgebase/execute-system-queries-in-cloud"},nextItem:{title:"Filtered aggregates in ClickHouse",permalink:"/docs/knowledgebase/filtered-aggregates"}},s={authorsImageUrls:[]},c=[{value:"Using INTO OUTFILE Clause",id:"using-into-outfile-clause",level:2},{value:"Using a File-Engine Table",id:"using-a-file-engine-table",level:2},{value:"Using Command-Line Redirection",id:"using-command-line-redirection",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"using-into-outfile-clause"},"Using INTO OUTFILE Clause"),(0,r.kt)("p",null,"Add an ",(0,r.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/sql-reference/statements/select/into-outfile.md"},"INTO OUTFILE")," clause to your query."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM table INTO OUTFILE 'file'\n")),(0,r.kt)("p",null,"By default, ClickHouse uses the file extension of the filename to deteremine the output format and compression. For example, all of the rows in ",(0,r.kt)("inlineCode",{parentName:"p"},"nyc_taxi")," will be exported to the ",(0,r.kt)("inlineCode",{parentName:"p"},"nyc_taxi.parquet")," using the Parquet format:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM nyc_taxi\nINTO OUTFILE 'taxi_rides.parquet'\n")),(0,r.kt)("p",null,"And the following file will be a compressed, tab-separated file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM nyc_taxi\nINTO OUTFILE 'taxi_rides.tsv.gz'\n")),(0,r.kt)("p",null,"If ClickHouse can not determine the format from the file extension, then the output format defaults to ",(0,r.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/interfaces/formats.md"},"TabSeparated")," for output data. To specify the ",(0,r.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/interfaces/formats.md"},"output format"),", use the ",(0,r.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/sql-reference/statements/select/format.md"},"FORMAT clause"),"."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM nyc_taxi\nINTO OUTFILE 'taxi_rides.txt'\nFORMAT CSV\n")),(0,r.kt)("h2",{id:"using-a-file-engine-table"},"Using a File-Engine Table"),(0,r.kt)("p",null,"Another option is to use the ",(0,r.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/engines/table-engines/special/file.md"},"File")," table engine, where ClickHouse uses the file to store the data. You can perform queries and inserts directly on the file."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE my_table (\n   x UInt32,\n   y String,\n   z DateTime\n)\nENGINE = File(Parquet)\n")),(0,r.kt)("p",null,"Insert a few rows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO my_table VALUES\n   (1, 'Hello', now()),\n   (2, 'World', now()),\n   (3, 'Goodbye', now())\n")),(0,r.kt)("p",null,"The file is stored in the ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," folder of your ClickHouse server - specifically in ",(0,r.kt)("inlineCode",{parentName:"p"},"/data/default/my_table")," in a file named ",(0,r.kt)("inlineCode",{parentName:"p"},"data.Parquet"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Using the ",(0,r.kt)("inlineCode",{parentName:"p"},"File")," table engine is incredibly handy for creating and querying files on your file system, but keep in mind that ",(0,r.kt)("inlineCode",{parentName:"p"},"File")," tables are not ",(0,r.kt)("inlineCode",{parentName:"p"},"MergeTree")," tables, so you don't get all the benefits that come with ",(0,r.kt)("inlineCode",{parentName:"p"},"MergeTree"),". Use ",(0,r.kt)("inlineCode",{parentName:"p"},"File")," for convenience when exporting data out of ClickHouse in convenient formats.")),(0,r.kt)("h2",{id:"using-command-line-redirection"},"Using Command-Line Redirection"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ clickhouse-client --query "SELECT * from table" --format FormatName > result.txt\n')),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/interfaces/cli.md"},"clickhouse-client"),"."))}m.isMDXComponent=!0}}]);