"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[7007],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>h});var a=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var p=a.createContext({}),i=function(e){var t=a.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},c=function(e){var t=i(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=i(o),d=n,h=u["".concat(p,".").concat(d)]||u[d]||m[d]||r;return o?a.createElement(h,s(s({ref:t},c),{},{components:o})):a.createElement(h,s({ref:t},c))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,s=new Array(r);s[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:n,s[1]=l;for(var i=2;i<r;i++)s[i]=o[i];return a.createElement.apply(null,s)}return a.createElement.apply(null,o)}d.displayName="MDXCreateElement"},51510:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>i});var a=o(87462),n=(o(67294),o(3905));const r={date:new Date("2023-03-22T00:00:00.000Z")},s="Export PostgreSQL data to Parquet, CSV or JSON",l={permalink:"/docs/knowledgebase/postgresql-to-parquet-csv-json",source:"@site/knowledgebase/postgresql-to-parquet-csv-json.md",title:"Export PostgreSQL data to Parquet, CSV or JSON",description:"This one is easy with clickhouse-local:",date:"2023-03-22T00:00:00.000Z",formattedDate:"March 22, 2023",tags:[],readingTime:2.35,hasTruncateMarker:!1,authors:[],frontMatter:{date:"2023-03-22T00:00:00.000Z"},prevItem:{title:"Converting Files from Parquet to CSV or JSON",permalink:"/docs/knowledgebase/parquet-to-csv-json"},nextItem:{title:"Export MySQL data to Parquet, CSV or JSON",permalink:"/docs/knowledgebase/mysql-to-parquet-csv-json"}},p={authorsImageUrls:[]},i=[{value:"Export PostgreSQL to Parquet",id:"export-postgresql-to-parquet",level:2},{value:"Export PostgreSQL to CSV",id:"export-postgresql-to-csv",level:2},{value:"Export PostgreSQL to JSON",id:"export-postgresql-to-json",level:2},{value:"Stream PostgreSQL to another process",id:"stream-postgresql-to-another-process",level:2}],c={toc:i},u="wrapper";function m(e){let{components:t,...o}=e;return(0,n.kt)(u,(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This one is easy with ",(0,n.kt)("inlineCode",{parentName:"p"},"clickhouse-local"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Use the ",(0,n.kt)("a",{parentName:"li",href:"https://clickhouse.com/docs/en/sql-reference/table-functions/postgresql"},(0,n.kt)("inlineCode",{parentName:"a"},"postgresql")," table function")," to read the data"),(0,n.kt)("li",{parentName:"ul"},"Use the ",(0,n.kt)("inlineCode",{parentName:"li"},"INTO OUTFILE _filename_ FORMAT")," clause and specify the desired output format")),(0,n.kt)("p",null,"The output format can be any of the supported ",(0,n.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/interfaces/formats"},"ouput formats")," in ClickHouse. Let's look at a few examples..."),(0,n.kt)("p",null,"These examples use ",(0,n.kt)("inlineCode",{parentName:"p"},"clickhouse-local"),", which is a part of the ClickHouse binary. Download it using the following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl https://clickhouse.com/ | sh\n")),(0,n.kt)("h2",{id:"export-postgresql-to-parquet"},"Export PostgreSQL to Parquet"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"postgresql")," table function allows ",(0,n.kt)("inlineCode",{parentName:"p"},"SELECT")," (and ",(0,n.kt)("inlineCode",{parentName:"p"},"INSERT"),") queries to be performed on data that is stored on a remote PostgreSQL server. For example, to view the entire contents of a table in PostgreSQL:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"SELECT *\nFROM\n   postgresql(\n    'localhost:5432',\n    'postgres_database',\n    'postgres_table',\n    'user',\n    'password'\n);\n")),(0,n.kt)("p",null,"We can pipe the output of this query to a file using ",(0,n.kt)("inlineCode",{parentName:"p"},"INTO OUTFILE"),". Use ",(0,n.kt)("inlineCode",{parentName:"p"},"FORMAT")," to specify the format of the file to be created. Let's grab the entire contents of the PostgreSQL table, and send its contents to a Parquet file:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"./clickhouse local -q \"SELECT * FROM\n   postgresql(\n    'localhost:5432',\n    'postgres_database',\n    'postgres_table',\n    'user',\n    'password'\n)\nINTO OUTFILE 'my_output_file.parquet'\"\n")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Because the name of the output file has a ",(0,n.kt)("inlineCode",{parentName:"p"},".parquet")," extension, ClickHouse assumes we want the Parquet format, so notice we omitted the ",(0,n.kt)("inlineCode",{parentName:"p"},"FORMAT Parquet")," clause.")),(0,n.kt)("h2",{id:"export-postgresql-to-csv"},"Export PostgreSQL to CSV"),(0,n.kt)("p",null,"It's the same as for Parquet, except we specify a more approriate filename for the output:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"./clickhouse local -q \"SELECT * FROM\n   postgresql(\n    'localhost:5432',\n    'postgres_database',\n    'postgres_table',\n    'user',\n    'password'\n)\nINTO OUTFILE 'my_output_file.csv'\"\n")),(0,n.kt)("p",null,"That's it! ClickHouse sees the ",(0,n.kt)("inlineCode",{parentName:"p"},".csv")," extension on the output file name and outputs the data as comma-separated. Otherwise, it's the exact same command as above."),(0,n.kt)("h2",{id:"export-postgresql-to-json"},"Export PostgreSQL to JSON"),(0,n.kt)("p",null,"To go from PostgreSQL to JSON, we just change the filename and ClickHouse will figure out the format:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"./clickhouse local -q \"SELECT * FROM\n   postgresql(\n    'localhost:5432',\n    'postgres_database',\n    'postgres_table',\n    'user',\n    'password'\n)\nINTO OUTFILE 'my_output_file.ndjson'\"\n")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"You don't have to stop here - you can use ",(0,n.kt)("inlineCode",{parentName:"p"},"clickhouse-local")," to pull data from PostgreSQL and send it to ",(0,n.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/sql-reference/formats/"},"all types of output formats"),"."),(0,n.kt)("p",{parentName:"admonition"},"If ClickHouse can not determine the output type by the filename extension, or if you want to specifically choose a format, add the ",(0,n.kt)("inlineCode",{parentName:"p"},"FOMRAT")," clause:"),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"```bash\n./clickhouse local -q \"SELECT * FROM\n   postgresql(\n    'localhost:5432',\n    'postgres_database',\n    'postgres_table',\n    'user',\n    'password'\n)\nINTO OUTFILE 'my_output_file.ndjson'\nFORMAT JSONEachRow\"\n"))),(0,n.kt)("h2",{id:"stream-postgresql-to-another-process"},"Stream PostgreSQL to another process"),(0,n.kt)("p",null,"Instead of using ",(0,n.kt)("inlineCode",{parentName:"p"},"INTO OUTFILE"),", you can stream the results of a table function to another process. Here's a simple example to demonstrate the syntax - we count the number of rows using the Linux ",(0,n.kt)("inlineCode",{parentName:"p"},"wc -l")," command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"./clickhouse local -q \"SELECT *\nFROM s3('https://datasets-documentation.s3.eu-west-3.amazonaws.com/house_parquet/house_0.parquet'\nFORMAT JSONEachRow\n)\" | wc -l\n")),(0,n.kt)("p",null,"However, we could easily stream the rows to a shell script, Python script, or any other process that you want."))}m.isMDXComponent=!0}}]);