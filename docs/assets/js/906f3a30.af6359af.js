"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[17564],{85162:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294),r=a(86010);const l={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:a,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,s),hidden:a},t)}},83596:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(87462),r=a(67294),l=a(86010),s=a(35281);const o={codeBlockContainer:"codeBlockContainer_APcc"};function i(e){let{as:t,...a}=e;return r.createElement(t,(0,n.Z)({},a,{className:(0,l.Z)(a.className,o.codeBlockContainer,s.k.common.codeBlock)}))}},31792:(e,t,a)=>{a.d(t,{Z:()=>C});var n=a(87462),r=a(67294),l=a(86010),s=a(12466),o=a(16550),i=a(91980),u=a(67392),c=a(50012);function d(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=p(e),[s,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[i,u]=k({queryString:a,groupId:n}),[d,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),f=(()=>{const e=i??d;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{f&&o(f)}),[f]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),h(e)}),[u,h,l]),tabValues:l}}var f=a(72389);const b={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var g=a(55412);function N(e){let{className:t,block:a,selectedValue:o,selectValue:i,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),p=e=>{const t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==o&&(d(t),i(n))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement(g.Z,{type:"ul",role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",b.tabList,{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:s}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},s,{className:(0,l.Z)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":o===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=h(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",b.tabList)},r.createElement(N,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function C(e){const t=(0,f.Z)();return r.createElement(w,(0,n.Z)({key:String(t)},e))}},94537:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>k,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var n=a(87462),r=(a(67294),a(3905)),l=a(31792),s=a(85162);a(31353);const o={slug:"/en/getting-started/quick-start",sidebar_label:"Quick Start",sidebar_position:1,keywords:["clickhouse","install","getting started","quick start"],pagination_next:"en/getting-started/index"},i="ClickHouse Quick Start",u={unversionedId:"en/quick-start",id:"en/quick-start",title:"ClickHouse Quick Start",description:"1: Download the binary",source:"@site/docs/en/quick-start.mdx",sourceDirName:"en",slug:"/en/getting-started/quick-start",permalink:"/docs/en/getting-started/quick-start",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/quick-start.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/en/getting-started/quick-start",sidebar_label:"Quick Start",sidebar_position:1,keywords:["clickhouse","install","getting started","quick start"],pagination_next:"en/getting-started/index"},sidebar:"docs",previous:{title:"What is ClickHouse?",permalink:"/docs/en/intro"},next:{title:"Overview",permalink:"/docs/en/getting-started/example-datasets/"}},c={},d=[{value:"1: Download the binary",id:"1-download-the-binary",level:2},{value:"2: Start the server",id:"2-start-the-server",level:2},{value:"3: Start the client",id:"3-start-the-client",level:2},{value:"4: Create a table",id:"4-create-a-table",level:2},{value:"5. Insert data",id:"5-insert-data",level:2},{value:"6. Query your new table",id:"6-query-your-new-table",level:2},{value:"7: Insert your own data",id:"7-insert-your-own-data",level:2},{value:"What&#39;s Next?",id:"whats-next",level:2}],p={toc:d},m="wrapper";function k(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"clickhouse-quick-start"},"ClickHouse Quick Start"),(0,r.kt)("h2",{id:"1-download-the-binary"},"1: Download the binary"),(0,r.kt)("p",null,"ClickHouse runs natively on Linux, FreeBSD and macOS, and runs on Windows via the ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows/wsl/about"},"WSL"),".\nThe simplest way to download ClickHouse locally is to run the following ",(0,r.kt)("inlineCode",{parentName:"p"},"curl")," command. It determines if your operating system is supported,\nthen downloads an appropriate ClickHouse binary:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl https://clickhouse.com/ | sh\n")),(0,r.kt)("h2",{id:"2-start-the-server"},"2: Start the server"),(0,r.kt)("p",null,"Run the following command to start the ClickHouse server:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./clickhouse server\n")),(0,r.kt)("h2",{id:"3-start-the-client"},"3: Start the client"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"clickhouse-client")," to connect to your ClickHouse service. Open a new Terminal, change directories to where your ",(0,r.kt)("inlineCode",{parentName:"p"},"clickhouse"),"\nbinary is saved, and run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./clickhouse client\n")),(0,r.kt)("p",null,"You should see a smiling face as it connects to your service running on localhost:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-response"},"my-host :)\n")),(0,r.kt)("h2",{id:"4-create-a-table"},"4: Create a table"),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"CREATE TABLE")," to define a new table. Typical SQL DDL commans work in ClickHouse with one addition - tables in ClickHouse require\nan ",(0,r.kt)("inlineCode",{parentName:"p"},"ENGINE")," clause. Use ",(0,r.kt)("inlineCode",{parentName:"p"},"MergeTree")," to take advantage of the performance benefits of ClickHouse:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE my_first_table\n(\n    user_id UInt32,\n    message String,\n    timestamp DateTime,\n    metric Float32\n)\nENGINE = MergeTree\nPRIMARY KEY (user_id, timestamp)\n")),(0,r.kt)("h2",{id:"5-insert-data"},"5. Insert data"),(0,r.kt)("p",null,"You can use the familiar ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT INTO TABLE")," command with ClickHouse, but it is important to understand that each insert into a\n",(0,r.kt)("inlineCode",{parentName:"p"},"MergeTree")," table causes a ",(0,r.kt)("strong",{parentName:"p"},"part")," (folder) to be created in storage. To minimize parts, bulk insert lots of rows at a time (tens of\nthousands or even millions at once)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO my_first_table (user_id, message, timestamp, metric) VALUES\n    (101, 'Hello, ClickHouse!',                                 now(),       -1.0    ),\n    (102, 'Insert a lot of rows per batch',                     yesterday(), 1.41421 ),\n    (102, 'Sort your data based on your commonly-used queries', today(),     2.718   ),\n    (101, 'Granules are the smallest chunks of data read',      now() + 5,   3.14159 )\n")),(0,r.kt)("h2",{id:"6-query-your-new-table"},"6. Query your new table"),(0,r.kt)("p",null,"You can write a SELECT query just like you would with any SQL database:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"}," SELECT *\n FROM my_first_table\n ORDER BY timestamp\n")),(0,r.kt)("p",null,"  Notice the response comes back in a nice table format:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-response"},"\u250c\u2500user_id\u2500\u252c\u2500message\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500timestamp\u2500\u252c\u2500\u2500metric\u2500\u2510\n\u2502     102 \u2502 Insert a lot of rows per batch                     \u2502 2022-03-21 00:00:00 \u2502 1.41421 \u2502\n\u2502     102 \u2502 Sort your data based on your commonly-used queries \u2502 2022-03-22 00:00:00 \u2502   2.718 \u2502\n\u2502     101 \u2502 Hello, ClickHouse!                                 \u2502 2022-03-22 14:04:09 \u2502      -1 \u2502\n\u2502     101 \u2502 Granules are the smallest chunks of data read      \u2502 2022-03-22 14:04:14 \u2502 3.14159 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n4 rows in set. Elapsed: 0.008 sec.\n")),(0,r.kt)("h2",{id:"7-insert-your-own-data"},"7: Insert your own data"),(0,r.kt)("p",null,"The next step is to get your current data into ClickHouse. We have lots of ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/table-functions/"},"table functions"),"\nand ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/integrations"},"integrations")," for ingesting data. We have some examples in the tabs below, or check out our ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/integrations"},"Integrations"),"\nfor a long list of technologies that integrate with ClickHouse."),(0,r.kt)(l.Z,{groupId:"read_data",mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"S3",label:"S3",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"Use the ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/table-functions/s3"},(0,r.kt)("inlineCode",{parentName:"a"},"s3")," table function")," to read files from S3. It's a table function - meaning that the\nresult is a table that can be:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"used as the source of a ",(0,r.kt)("inlineCode",{parentName:"li"},"SELECT")," query (allowing you to run ad-hoc queries and leave your data in S3), or..."),(0,r.kt)("li",{parentName:"ol"},"insert the resulting table into a ",(0,r.kt)("inlineCode",{parentName:"li"},"MergeTree")," table (when you are ready to move your data into ClickHouse)")),(0,r.kt)("p",null,"An ad-hoc query looks like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n   passenger_count,\n   avg(toFloat32(total_amount))\nFROM s3(\n    'https://datasets-documentation.s3.eu-west-3.amazonaws.com/nyc-taxi/trips_0.gz',\n    'TabSeparatedWithNames'\n)\nGROUP BY passenger_count\nORDER BY passenger_count;\n")),(0,r.kt)("p",null,"Moving the data into a ClickHouse table looks like the following, where ",(0,r.kt)("inlineCode",{parentName:"p"},"nyc_taxi")," is a ",(0,r.kt)("inlineCode",{parentName:"p"},"MergeTree")," table:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO nyc_taxi\n   SELECT * FROM s3(\n    'https://datasets-documentation.s3.eu-west-3.amazonaws.com/nyc-taxi/trips_0.gz',\n    'TabSeparatedWithNames'\n)\nSETTINGS input_format_allow_errors_num=25000;\n")),(0,r.kt)("p",null,"View our ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/integrations/s3"},"collection of AWS S3 documentation pages")," for lots more details and examples of using S3 with ClickHouse.")),(0,r.kt)(s.Z,{value:"GCS",label:"GCS",mdxType:"TabItem"},(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/table-functions/s3"},(0,r.kt)("inlineCode",{parentName:"a"},"s3")," table function")," used for reading data in AWS S3 also works on files in Google Cloud Storage. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n   *\nFROM s3(\n  'https://storage.googleapis.com/my-bucket/trips.parquet',\n  'MY_GCS_HMAC_KEY',\n  'MY_GCS_HMAC_SECRET_KEY',\n  'Parquet'\n)\nLIMIT 1000\n")),(0,r.kt)("p",null,"Find more details on the ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/table-functions/s3"},(0,r.kt)("inlineCode",{parentName:"a"},"s3")," table function page"),".")),(0,r.kt)(s.Z,{value:"URL",label:"Web",mdxType:"TabItem"},(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/table-functions/url"},(0,r.kt)("inlineCode",{parentName:"a"},"url")," table function")," reads files accessible from the web:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM url(\n    'http://prod2.publicdata.landregistry.gov.uk.s3-website-eu-west-1.amazonaws.com/pp-complete.csv',\n    'CSV'\n  );\n")),(0,r.kt)("p",null,"Find more details on the ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/table-functions/url"},(0,r.kt)("inlineCode",{parentName:"a"},"url")," table function page"),".")),(0,r.kt)(s.Z,{value:"local_file",label:"Local",mdxType:"TabItem"},(0,r.kt)("p",null,"Use the ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/table-functions/file"},(0,r.kt)("inlineCode",{parentName:"a"},"file")," table engine")," to read a local file. For simplicity, copy the file to the ",(0,r.kt)("inlineCode",{parentName:"p"},"user_files")," directory (which is\nfound in the directory where you downloaded the ClickHouse binary)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"DESCRIBE TABLE file('comments.tsv')\n\nQuery id: 8ca9b2f9-65a2-4982-954a-890de710a336\n\n\u250c\u2500name\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500type\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500default_type\u2500\u252c\u2500default_expression\u2500\u252c\u2500comment\u2500\u252c\u2500codec_expression\u2500\u252c\u2500ttl_expression\u2500\u2510\n\u2502 id        \u2502 Nullable(Int64)         \u2502              \u2502                    \u2502         \u2502                  \u2502                \u2502\n\u2502 type      \u2502 Nullable(String)        \u2502              \u2502                    \u2502         \u2502                  \u2502                \u2502\n\u2502 author    \u2502 Nullable(String)        \u2502              \u2502                    \u2502         \u2502                  \u2502                \u2502\n\u2502 timestamp \u2502 Nullable(DateTime64(9)) \u2502              \u2502                    \u2502         \u2502                  \u2502                \u2502\n\u2502 comment   \u2502 Nullable(String)        \u2502              \u2502                    \u2502         \u2502                  \u2502                \u2502\n\u2502 children  \u2502 Array(Nullable(Int64))  \u2502              \u2502                    \u2502         \u2502                  \u2502                \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"Notice ClickHouse infers the names and data types of your columns by analyzing a large batch of rows.\nIf ClickHouse can not determine the storage type from the filename, you can specify it as the second argument:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT count()\nFROM file(\n  'comments.tsv',\n  'TabSeparatedWithNames'\n)\n")),(0,r.kt)("p",null,"View the ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/table-functions/file"},(0,r.kt)("inlineCode",{parentName:"a"},"file")," table function")," docs page for more details.")),(0,r.kt)(s.Z,{value:"PostgreSQL",label:"PostgreSQL",mdxType:"TabItem"},(0,r.kt)("p",null,"Use the ",(0,r.kt)("a",{parentName:"p",href:"/en/sql-reference/table-functions/postgresql"},(0,r.kt)("inlineCode",{parentName:"a"},"postgresql")," table function")," to read data from a table in PostgreSQL:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM\n   postgresql(\n    'localhost:5432',\n    'my_database',\n    'my_table',\n    'postgresql_user',\n    'password')\n;\n")),(0,r.kt)("p",null,"View the ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/table-functions/postgresql"},(0,r.kt)("inlineCode",{parentName:"a"},"postgresql")," table function")," docs page for more details.")),(0,r.kt)(s.Z,{value:"MySQL",label:"MySQL",mdxType:"TabItem"},(0,r.kt)("p",null,"Use the ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/table-functions/mysql"},(0,r.kt)("inlineCode",{parentName:"a"},"mysql")," table function")," to read data from a table in MySQL:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM\n   mysql(\n    'localhost:3306',\n    'my_database',\n    'my_table',\n    'postgresql_user',\n    'password')\n;\n")),(0,r.kt)("p",null,"View the ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/table-functions/mysql"},(0,r.kt)("inlineCode",{parentName:"a"},"mysql")," table function")," docs page for more details.")),(0,r.kt)(s.Z,{value:"Other DBMS",label:"ODBC/JDBC",mdxType:"TabItem"},(0,r.kt)("p",null,"ClickHouse can read data from any ODBC or JDBC data source:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM\n   odbc(\n    'DSN=mysqlconn',\n    'my_database',\n    'my_table'\n  );\n")),(0,r.kt)("p",null,"View the ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/table-functions/odbc"},(0,r.kt)("inlineCode",{parentName:"a"},"odbc")," table function")," and the ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/table-functions/jdbc"},(0,r.kt)("inlineCode",{parentName:"a"},"jdbc")," table function")," docs pages for more details.")),(0,r.kt)(s.Z,{value:"messagequeue",label:"Message Queues",mdxType:"TabItem"},(0,r.kt)("p",null,"Message queues can stream data into ClickHouse using the corresponding table engine, including:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Kafka"),": integrate with Kafka using the ",(0,r.kt)("a",{parentName:"li",href:"/docs/en//engines/table-engines/integrations/kafka"},(0,r.kt)("inlineCode",{parentName:"a"},"Kafka")," table engine")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Amazon MSK"),": integrate with ",(0,r.kt)("a",{parentName:"li",href:"/docs/en/integrations/msk"},"Amazon Managed Streaming for Apache Kafka (MSK)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"RabbitMQ"),": integrate with RabbitMQ using the ",(0,r.kt)("a",{parentName:"li",href:"/docs/en/engines/table-engines/integrations/rabbitmq"},(0,r.kt)("inlineCode",{parentName:"a"},"RabbitMQ")," table engine")))),(0,r.kt)(s.Z,{value:"datalake",label:"Data Lakes",mdxType:"TabItem"},(0,r.kt)("p",null,"ClickHouse has table functions to read data from the following sources:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Hadoop"),": integrate with Apache Hadoop using the ",(0,r.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/table-functions/hdfs"},(0,r.kt)("inlineCode",{parentName:"a"},"hdfs")," table function")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Hudi"),": read from existing Apache Hudi tables in S3 using the ",(0,r.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/table-functions/hudi"},(0,r.kt)("inlineCode",{parentName:"a"},"hudi")," table function")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Iceberg"),": read from existing Apache Iceberg tables in S3 using the ",(0,r.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/table-functions/iceberg"},(0,r.kt)("inlineCode",{parentName:"a"},"iceberg")," table function")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"DeltaLake"),": read from existing Delta Lake tables in S3 using the ",(0,r.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/table-functions/deltalake"},(0,r.kt)("inlineCode",{parentName:"a"},"deltaLake")," table function")))),(0,r.kt)(s.Z,{value:"Other",label:"Other",mdxType:"TabItem"},(0,r.kt)("p",null,"Check out our ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/integrations"},"long list of ClickHouse integrations")," to find how to connect your existing frameworks and data sources to ClickHouse."))),(0,r.kt)("h2",{id:"whats-next"},"What's Next?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Check out the ",(0,r.kt)("a",{parentName:"li",href:"/docs/en/tutorial"},"Advanced Tutorial")," which takes a much deeper dive into the key concepts and capabilities of ClickHouse"),(0,r.kt)("li",{parentName:"ul"},"Continue your learning by taking our free on-demand training courses at the ",(0,r.kt)("a",{parentName:"li",href:"https://learn.clickhouse.com/visitor_class_catalog"},"ClickHouse Academy")),(0,r.kt)("li",{parentName:"ul"},"We have a list of ",(0,r.kt)("a",{parentName:"li",href:"/docs/en/getting-started/example-datasets/"},"example datasets")," with instructions on how to insert them"),(0,r.kt)("li",{parentName:"ul"},"If your data is coming from an external source, view our ",(0,r.kt)("a",{parentName:"li",href:"/docs/en/integrations/"},"collection of integration guides")," for connecting to message queues, databases, pipelines and more"),(0,r.kt)("li",{parentName:"ul"},"If you are using a UI/BI visualization tool, view the ",(0,r.kt)("a",{parentName:"li",href:"/docs/en/integrations/data-visualization/"},"user guides for connecting a UI to ClickHouse")),(0,r.kt)("li",{parentName:"ul"},"The user guide on ",(0,r.kt)("a",{parentName:"li",href:"/docs/en/optimize/sparse-primary-indexes"},"primary keys")," is everything you need to know about primary keys and how to define them")))}k.isMDXComponent=!0}}]);