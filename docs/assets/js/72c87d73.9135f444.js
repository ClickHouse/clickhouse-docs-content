"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[29461],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,k=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return a?n.createElement(k,o(o({ref:t},c),{},{components:a})):n.createElement(k,o({ref:t},c))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},68717:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>k,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={sidebar_position:1,slug:"/en/quick-start",sidebar_label:"Quick Start",keywords:["clickhouse","install","getting started","quick start"]},o="ClickHouse Quick Start",s={unversionedId:"en/get-started/index",id:"en/get-started/index",title:"ClickHouse Quick Start",description:"Step 1: Get ClickHouse",source:"@site/docs/en/get-started/index.md",sourceDirName:"en/get-started",slug:"/en/quick-start",permalink:"/docs/en/quick-start",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/get-started/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/en/quick-start",sidebar_label:"Quick Start",keywords:["clickhouse","install","getting started","quick start"]}},l={},p=[{value:"Step 1: Get ClickHouse",id:"step-1-get-clickhouse",level:2},{value:"Step 2: Connect to ClickHouse",id:"step-2-connect-to-clickhouse",level:2},{value:"Step 3: Create a database and table",id:"step-3-create-a-database-and-table",level:2},{value:"Step 4: Insert Data",id:"step-4-insert-data",level:2},{value:"Step 5: Using the ClickHouse Client",id:"step-5-using-the-clickhouse-client",level:2},{value:"Step 6: Insert a CSV file",id:"step-6-insert-a-csv-file",level:2},{value:"What&#39;s Next?",id:"whats-next",level:2}],c=(u="SQLConsoleDetail",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var u;const d={toc:p},m="wrapper";function k(e){let{components:t,...i}=e;return(0,r.kt)(m,(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"clickhouse-quick-start"},"ClickHouse Quick Start"),(0,r.kt)("h2",{id:"step-1-get-clickhouse"},"Step 1: Get ClickHouse"),(0,r.kt)("p",null,"To create a free ClickHouse service in ",(0,r.kt)("a",{parentName:"p",href:"https://clickhouse.cloud"},"ClickHouse Cloud"),", you just need to sign up by completing the following steps:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create an account on the ",(0,r.kt)("a",{parentName:"li",href:"https://clickhouse.cloud/signUp"},"sign-up page")),(0,r.kt)("li",{parentName:"ul"},"Verify your email address (by clicking the link in the email you receive)"),(0,r.kt)("li",{parentName:"ul"},"Login using the username and password you just created")),(0,r.kt)("p",null,"Once you are logged in, ClickHouse Cloud starts the onboarding wizard which walks you through creating a new ClickHouse service. Select your\ndesired region for deploying the service, and give your new service a name:"),(0,r.kt)("div",{class:"eighty-percent"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"New ClickHouse Service",src:a(65828).Z,width:"1024",height:"1008"}))),(0,r.kt)("br",null),(0,r.kt)("p",null,"ClickHouse Cloud uses IP filtering to limit access to your service. Notice your local IP address is already added, and you can add more now or after\nafter your service is up and running:"),(0,r.kt)("div",{class:"eighty-percent"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"IP Filtering",src:a(23924).Z,width:"1022",height:"618"}))),(0,r.kt)("br",null),(0,r.kt)("p",null,"ClickHouse Cloud generates a password for the ",(0,r.kt)("inlineCode",{parentName:"p"},"default")," user - be sure to save your credentials. (You can always change them later.)"),(0,r.kt)("div",{class:"eighty-percent"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Download Credentials",src:a(86130).Z,width:"1020",height:"1008"}))),(0,r.kt)("p",null,"Your new service will be provisioned and you should see it on your ClickHouse Cloud dashboard:"),(0,r.kt)("div",{class:"eighty-percent"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Download Credentials",src:a(40030).Z,width:"1680",height:"634"}))),(0,r.kt)("br",null),(0,r.kt)("p",null,"Congratulations! Your ClickHouse Cloud service is up and running. Keep reading for details on how to connect to it and start ingesting data."),(0,r.kt)("h2",{id:"step-2-connect-to-clickhouse"},"Step 2: Connect to ClickHouse"),(0,r.kt)("p",null,"For getting started quickly, ClickHouse provides a web-based SQL console."),(0,r.kt)(c,{mdxType:"SQLConsoleDetail"}),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"ClickHouse takes the security of your data very seriously, and during the creation of your service you were prompted to configure the IP Access List for your service.  If you skipped this, or clicked away by mistake, you will not be able to connect to your service."),(0,r.kt)("p",{parentName:"admonition"},"View the ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/manage/security/ip-access-list"},"IP Access List")," docs page for details on how to add your local IP address.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter a simple query to verify that your connection is working:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW databases\n")),(0,r.kt)("p",{parentName:"li"}," You should see 4 databases in the list, plus any that you may have added."))),(0,r.kt)("p",null,"  That's it - you are ready to start using your new ClickHouse service!"),(0,r.kt)("h2",{id:"step-3-create-a-database-and-table"},"Step 3: Create a database and table"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Like most database management systems, ClickHouse logically groups tables into ",(0,r.kt)("strong",{parentName:"p"},"databases"),". Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"CREATE DATABASE")," command to create a new database in ClickHouse:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE IF NOT EXISTS helloworld\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the following command to create a table named ",(0,r.kt)("inlineCode",{parentName:"p"},"my_first_table")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"helloworld")," database:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE helloworld.my_first_table\n(\n    user_id UInt32,\n    message String,\n    timestamp DateTime,\n    metric Float32\n)\nENGINE = MergeTree()\nPRIMARY KEY (user_id, timestamp)\n")),(0,r.kt)("p",{parentName:"li"},"In the example above, ",(0,r.kt)("inlineCode",{parentName:"p"},"my_first_table")," is a MergeTree table with four columns:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"user_id"),":  a 32-bit unsigned integer"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"message"),": a String data type, which replaces types like VARCHAR, BLOB, CLOB and others from other database systems"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"timestamp"),": a DateTime value, which represents an instant in time"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"metric"),": a 32-bit floating point number")),(0,r.kt)("admonition",{parentName:"li",title:"table engines",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The table engine determines:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"How and where the data is stored"),(0,r.kt)("li",{parentName:"ul"},"Which queries are supported"),(0,r.kt)("li",{parentName:"ul"},"Whether or not the data is replicated")),(0,r.kt)("p",{parentName:"admonition"},"There are many engines to choose from, but for a simple table on a single-node ClickHouse server, ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/mergetree-family/mergetree"},"MergeTree")," is your likely choice.")),(0,r.kt)("h3",{parentName:"li",id:"a-brief-intro-to-primary-keys"},"A Brief Intro to Primary Keys"),(0,r.kt)("p",{parentName:"li"},"Before you go any further, it is important to understand how primary keys work in ClickHouse (the implementation\nof primary keys might seem unexpected!):"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"primary keys in ClickHouse are ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"not unique"))," for each row in a table")),(0,r.kt)("p",{parentName:"li"},"The primary key of a ClickHouse table determines how the data is sorted when written to disk. Every 8,192 rows or 10MB of\ndata (referred to as the ",(0,r.kt)("strong",{parentName:"p"},"index granularity"),") creates an entry in the primary key index file. This granularity concept\ncreates a ",(0,r.kt)("strong",{parentName:"p"},"sparse index")," that can easily fit in memory, and the granules represent a stripe of the smallest amount of\ncolumn data that gets processed during ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT")," queries."),(0,r.kt)("p",{parentName:"li"},"The primary key can be defined using the ",(0,r.kt)("inlineCode",{parentName:"p"},"PRIMARY KEY")," parameter. If you define a table without a ",(0,r.kt)("inlineCode",{parentName:"p"},"PRIMARY KEY")," specified,\nthen the key becomes the tuple specified in the ",(0,r.kt)("inlineCode",{parentName:"p"},"ORDER BY")," clause. If you specify both a ",(0,r.kt)("inlineCode",{parentName:"p"},"PRIMARY KEY ")," and an ",(0,r.kt)("inlineCode",{parentName:"p"},"ORDER BY"),", the primary key must be a subset of the sort order."),(0,r.kt)("p",{parentName:"li"},"The primary key is also the sorting key, which is a tuple of ",(0,r.kt)("inlineCode",{parentName:"p"},"(user_id, timestamp)"),".  Therefore, the data stored in each\ncolumn file will be sorted by ",(0,r.kt)("inlineCode",{parentName:"p"},"user_id"),", then ",(0,r.kt)("inlineCode",{parentName:"p"},"timestamp"),"."))),(0,r.kt)("h2",{id:"step-4-insert-data"},"Step 4: Insert Data"),(0,r.kt)("p",null,"You can use the familiar ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT INTO TABLE")," command with ClickHouse, but it is important to understand that each insert into a ",(0,r.kt)("inlineCode",{parentName:"p"},"MergeTree")," table causes a ",(0,r.kt)("strong",{parentName:"p"},"part")," to be created in storage."),(0,r.kt)("admonition",{title:"ClickHouse best practice",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Insert a large number of rows per batch - tens of thousands or even millions of\nrows at once. Don't worry - ClickHouse can easily handle that type of volume - and it will ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/cloud/bestpractices/bulk-inserts"},"save you money")," by sending fewer write requests to your service.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Even for a simple example, let's insert more than one row at a time:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO helloworld.my_first_table (user_id, message, timestamp, metric) VALUES\n    (101, 'Hello, ClickHouse!',                                 now(),       -1.0    ),\n    (102, 'Insert a lot of rows per batch',                     yesterday(), 1.41421 ),\n    (102, 'Sort your data based on your commonly-used queries', today(),     2.718   ),\n    (101, 'Granules are the smallest chunks of data read',      now() + 5,   3.14159 )\n")),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Notice the ",(0,r.kt)("inlineCode",{parentName:"p"},"timestamp")," column is populated using various ",(0,r.kt)("strong",{parentName:"p"},"Date")," and ",(0,r.kt)("strong",{parentName:"p"},"DateTime")," functions. ClickHouse has hundreds of useful functions that you can ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/functions/"},"view in the ",(0,r.kt)("strong",{parentName:"a"},"Functions")," section"),"."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Let's verify it worked:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM helloworld.my_first_table\n")),(0,r.kt)("p",{parentName:"li"}," You should see the four rows of data that were inserted:"))),(0,r.kt)("h2",{id:"step-5-using-the-clickhouse-client"},"Step 5: Using the ClickHouse Client"),(0,r.kt)("p",null,"You can also connect to your ClickHouse Cloud service using a command-line tool named ",(0,r.kt)("strong",{parentName:"p"},"clickhouse-client"),". The connection details are in the ",(0,r.kt)("strong",{parentName:"p"},"Native")," tab in the services connection details:"),(0,r.kt)("p",null,"  ",(0,r.kt)("img",{alt:"clickhouse client connection details",src:a(67397).Z,width:"1261",height:"756"})),(0,r.kt)("p",null,"  Download info to be determined (we need a download link for\n`clickhouse-client and clickhouse-local for Cloud customers)"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the command, substituting your hostname, username, and password:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"clickhouse-client --host HOSTNAME.REGION.CSP.clickhouse.cloud \\\n--secure --port 9440 \\\n--user default \\\n--password <password>\n")),(0,r.kt)("p",{parentName:"li"},"If you get the smiley face prompt, you are ready to run queries!"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-response"},":)\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Give it a try by running the following query:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM helloworld.my_first_table\nORDER BY timestamp\n")),(0,r.kt)("p",{parentName:"li"},"Notice the response comes back in a nice table format:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-response"},"\u250c\u2500user_id\u2500\u252c\u2500message\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500timestamp\u2500\u252c\u2500\u2500metric\u2500\u2510\n\u2502     102 \u2502 Insert a lot of rows per batch                     \u2502 2022-03-21 00:00:00 \u2502 1.41421 \u2502\n\u2502     102 \u2502 Sort your data based on your commonly-used queries \u2502 2022-03-22 00:00:00 \u2502   2.718 \u2502\n\u2502     101 \u2502 Hello, ClickHouse!                                 \u2502 2022-03-22 14:04:09 \u2502      -1 \u2502\n\u2502     101 \u2502 Granules are the smallest chunks of data read      \u2502 2022-03-22 14:04:14 \u2502 3.14159 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n4 rows in set. Elapsed: 0.008 sec.\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add a ",(0,r.kt)("inlineCode",{parentName:"p"},"FORMAT")," clause to specify one of the ",(0,r.kt)("a",{parentName:"p",href:"/en/interfaces/formats/"},"many supported output formats of ClickHouse"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM helloworld.my_first_table\nORDER BY timestamp\nFORMAT TabSeparated\n")),(0,r.kt)("p",{parentName:"li"},"In the above query, the output is returned as tab-separated:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-response"},"Query id: 3604df1c-acfd-4117-9c56-f86c69721121\n\n102 Insert a lot of rows per batch  2022-03-21 00:00:00 1.41421\n102 Sort your data based on your commonly-used queries  2022-03-22 00:00:00 2.718\n101 Hello, ClickHouse!  2022-03-22 14:04:09 -1\n101 Granules are the smallest chunks of data read   2022-03-22 14:04:14 3.14159\n\n4 rows in set. Elapsed: 0.005 sec.\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To exit the ",(0,r.kt)("inlineCode",{parentName:"p"},"clickhouse-client"),", enter the ",(0,r.kt)("strong",{parentName:"p"},"exit")," command:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"exit\n")))),(0,r.kt)("h2",{id:"step-6-insert-a-csv-file"},"Step 6: Insert a CSV file"),(0,r.kt)("p",null,"A common task when getting started with a database is to insert some data that you already have in files. We have some\nsample data online that you can insert that represents clickstream data - it includes a user ID, a URL that was visited, and\nthe timestamp of the event."),(0,r.kt)("p",null,"Suppose we have the following text in a CSV file named ",(0,r.kt)("inlineCode",{parentName:"p"},"data.csv"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"102,This is data in a file,2022-02-22 10:43:28,123.45\n101,It is comma-separated,2022-02-23 00:00:00,456.78\n103,Use FORMAT to specify the format,2022-02-21 10:43:30,678.90\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The following command inserts the data into ",(0,r.kt)("inlineCode",{parentName:"p"},"my_first_table"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"clickhouse-client --host HOSTNAME.REGION.CSP.clickhouse.cloud \\\n--secure --port 9440 \\\n--user default \\\n--password <password> \\\n--query='INSERT INTO helloworld.my_first_table FORMAT CSV' < data.csv\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Notice the new rows appear in the table now:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"New rows from CSV file",src:a(31111).Z,width:"1818",height:"1016"})))),(0,r.kt)("h2",{id:"whats-next"},"What's Next?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("a",{parentName:"li",href:"/docs/en/tutorial"},"Tutorial")," has you insert 2 million rows into a table and write some analytical queries"),(0,r.kt)("li",{parentName:"ul"},"We have a list of ",(0,r.kt)("a",{parentName:"li",href:"/docs/en/getting-started/example-datasets/"},"example datasets")," with instructions on how to insert them"),(0,r.kt)("li",{parentName:"ul"},"Check out our 25-minute video on ",(0,r.kt)("a",{parentName:"li",href:"https://clickhouse.com/company/events/getting-started-with-clickhouse/"},"Getting Started with ClickHouse")),(0,r.kt)("li",{parentName:"ul"},"If your data is coming from an external source, view our ",(0,r.kt)("a",{parentName:"li",href:"/docs/en/integrations"},"collection of integration guides")," for connecting to message queues, databases, pipelines and more"),(0,r.kt)("li",{parentName:"ul"},"If you are using a UI/BI visualization tool, view the ",(0,r.kt)("a",{parentName:"li",href:"/docs/en/integrations/data-visualization"},"user guides for connecting a UI to ClickHouse")),(0,r.kt)("li",{parentName:"ul"},"The user guide on ",(0,r.kt)("a",{parentName:"li",href:"/docs/en/optimize/sparse-primary-indexes"},"primary keys")," is everything you need to know about primary keys and how to define them")))}k.isMDXComponent=!0},65828:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/createservice1-56a8ed87acd09e5798e7d1da32379c0f.png"},23924:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/createservice2-6516fb7bb7c0d41f6c3f7eac811b4083.png"},86130:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/createservice3-92da9cfc22eb3e2994b9c413d077350a.png"},40030:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/createservice4-803ad195b51a13c9fee3f3fea3fff35e.png"},67397:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/CloudClickhouseClientDetails-bf6a0cf51a64a8ab54c550311e484598.png"},31111:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/quickstart_04-f7171ecb8578b11f5084b2f1bdaa98b3.png"}}]);