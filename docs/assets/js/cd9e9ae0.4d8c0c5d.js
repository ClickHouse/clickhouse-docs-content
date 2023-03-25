"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[40523],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(n),f=r,m=c["".concat(p,".").concat(f)]||c[f]||d[f]||o;return n?a.createElement(m,l(l({ref:t},u),{},{components:n})):a.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},41435:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={date:new Date("2023-03-25T00:00:00.000Z")},l="DB::Exception: Cannot append data in format Parquet to file, because this format doesn't support appends. (CANNOT_APPEND_TO_FILE)",i={permalink:"/docs/knowledgebase/cannot-append-data-to-parquet-format",source:"@site/knowledgebase/cannot-append-data-to-parquet-format.md",title:"DB::Exception: Cannot append data in format Parquet to file, because this format doesn't support appends. (CANNOT_APPEND_TO_FILE)",description:"Suppose you create a table that uses the File table engine with the Parquet format:",date:"2023-03-25T00:00:00.000Z",formattedDate:"March 25, 2023",tags:[],readingTime:1.215,hasTruncateMarker:!1,authors:[],frontMatter:{date:"2023-03-25T00:00:00.000Z"},nextItem:{title:"What queries are using Materialized Views?",permalink:"/docs/knowledgebase/how_to_display_queries_using_MV"}},p={authorsImageUrls:[]},s=[],u={toc:s},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Suppose you create a table that uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"File")," table engine with the Parquet format:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE parquet_test\n(\n    `x` UInt32,\n    `y` String\n)\nENGINE = File(Parquet)\n")),(0,r.kt)("p",null,"You can write to the table once:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO parquet_test VALUES\n   (1, 'Hello'),\n   (2, 'Hi')\n")),(0,r.kt)("p",null,"This creates a file named ",(0,r.kt)("inlineCode",{parentName:"p"},"data.Parquet")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"data/default/parquet_test")," folder. If you try to insert another batch:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO parquet_test VALUES\n   (3, 'World'),\n   (4, 'Bye')\n")),(0,r.kt)("p",null,"...you get the following error:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-response"},"Code: 641. DB::Exception: Received from localhost:9000. DB::Exception: Cannot append data in format Parquet to file, because this format doesn't support appends. You can allow to create a new file on each insert by enabling setting engine_file_allow_create_multiple_files. (CANNOT_APPEND_TO_FILE)\n")),(0,r.kt)("p",null,"You can not append to Parquet files in ClickHouse. But you can tell ClickHouse to create a new file for every ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT")," by enabling the ",(0,r.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/settings/settings#engine_file_allow_create_multiple_files"},(0,r.kt)("inlineCode",{parentName:"a"},"engine_file_allow_create_multiple_files")," setting"),". If enabled, on each insert a new file will be created with a name following this pattern:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"`data.Parquet` -> `data.1.Parquet` -> `data.2.Parquet`, etc.:\n")),(0,r.kt)("p",null,"Let's give it a try. We will put our two commands into a single file named ",(0,r.kt)("inlineCode",{parentName:"p"},"parquet.sql"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SET engine_file_allow_create_multiple_files = 1;\n\nINSERT INTO default.parquet_test VALUES  (3, 'World'), (4, 'Bye');\n")),(0,r.kt)("p",null,"Run it using ",(0,r.kt)("inlineCode",{parentName:"p"},"clickhouse-client"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./clickhouse client --queries-file parquet.sql\n")),(0,r.kt)("p",null,"And now you will see two files in ",(0,r.kt)("inlineCode",{parentName:"p"},"data/default/parquet_test")," (and a new file for each subsequent insert)."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"engine_file_allow_create_multiple_files")," setting applies to other data formats that are not appendable, like JSON and ORC.")))}d.isMDXComponent=!0}}]);