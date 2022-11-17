"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[51594],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(a),d=o,u=m["".concat(l,".").concat(d)]||m[d]||g[d]||i;return a?n.createElement(u,r(r({ref:t},p),{},{components:a})):n.createElement(u,r({ref:t},p))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},15939:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(87462),o=(a(67294),a(3905));const i={sidebar_label:"Vector",sidebar_position:220,slug:"/en/integrations/vector-to-clickhouse",description:"How to tail a log file into ClickHouse using Vector"},r="Integrating Vector with ClickHouse",s={unversionedId:"en/integrations/data-ingestion/etl-tools/vector-to-clickhouse",id:"en/integrations/data-ingestion/etl-tools/vector-to-clickhouse",title:"Integrating Vector with ClickHouse",description:"How to tail a log file into ClickHouse using Vector",source:"@site/docs/en/integrations/data-ingestion/etl-tools/vector-to-clickhouse.md",sourceDirName:"en/integrations/data-ingestion/etl-tools",slug:"/en/integrations/vector-to-clickhouse",permalink:"/docs/en/integrations/vector-to-clickhouse",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/integrations/data-ingestion/etl-tools/vector-to-clickhouse.md",tags:[],version:"current",sidebarPosition:220,frontMatter:{sidebar_label:"Vector",sidebar_position:220,slug:"/en/integrations/vector-to-clickhouse",description:"How to tail a log file into ClickHouse using Vector"},sidebar:"english",previous:{title:"Pivot to ClickHouse",permalink:"/docs/en/integrations/redshift/redshift-pivot-to-clickhouse"},next:{title:"From a DBMS",permalink:"/docs/en/integrations/data-ingestion/dbms"}},l={},c=[{value:"1. Create a database and table",id:"1-create-a-database-and-table",level:2},{value:"2.  Configure Nginx",id:"2--configure-nginx",level:2},{value:"3. Configure Vector",id:"3-configure-vector",level:2},{value:"4. Parse the Logs",id:"4-parse-the-logs",level:2}],p={toc:c};function g(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"integrating-vector-with-clickhouse"},"Integrating Vector with ClickHouse"),(0,o.kt)("p",null,"Being able to analyze your logs in real time is critical for production applications. Have you ever wondered if ClickHouse is good at storing and analyzing log data? Just checkout ",(0,o.kt)("a",{href:"https://eng.uber.com/logging/",target:"_blank"},"Uber's experience")," with converting their logging infrastructure from ELK to ClickHouse. "),(0,o.kt)("p",null,"This guide shows how to use the popular data pipeline ",(0,o.kt)("a",{href:"https://vector.dev/docs/about/what-is-vector/",target:"_blank"},"Vector")," to tail an Nginx log file and send it to ClickHouse. The steps below would be similar for tailing any type of log file. We will assume you already have ClickHouse up and running and Vector installed (no need to start it yet though)."),(0,o.kt)("h2",{id:"1-create-a-database-and-table"},"1. Create a database and table"),(0,o.kt)("p",null,"Let's define a table to store the log events:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"We will start with a new database named ",(0,o.kt)("strong",{parentName:"p"},"nginxdb"),":"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE IF NOT EXISTS nginxdb\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"For starters, we are just going to insert the entire log event as a single string. Obviously this is not a great format for performing analytics on the log data, but we will figure that part out below using ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"materialized views")),"."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE IF NOT EXISTS  nginxdb.access_logs (\n    message String\n) \nENGINE = MergeTree()\nORDER BY tuple()\n")),(0,o.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"There is not really a need for a primary key yet, so that is why ",(0,o.kt)("strong",{parentName:"p"},"ORDER BY")," is set to ",(0,o.kt)("strong",{parentName:"p"},"tuple()"),"."))))),(0,o.kt)("h2",{id:"2--configure-nginx"},"2.  Configure Nginx"),(0,o.kt)("p",null,"We certainly do not want to spend too much time explaining Nginx, but we also do not want to hide all the details, so in this step we will provide you with enough details to get Nginx logging configured. "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The following ",(0,o.kt)("inlineCode",{parentName:"p"},"access_log")," property sends logs to ",(0,o.kt)("strong",{parentName:"p"},"/var/log/nginx/my_access.log")," in the ",(0,o.kt)("strong",{parentName:"p"},"combined")," format. This value goes in the ",(0,o.kt)("inlineCode",{parentName:"p"},"http")," section of your ",(0,o.kt)("strong",{parentName:"p"},"nginx.conf")," file:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"http {\n    include       /etc/nginx/mime.types;\n    default_type  application/octet-stream;\n    access_log  /var/log/nginx/my_access.log combined;\n    sendfile        on;\n    keepalive_timeout  65;\n    include /etc/nginx/conf.d/*.conf;\n}\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Be sure to restart Nginx if you had to modify ",(0,o.kt)("strong",{parentName:"p"},"nginx.conf"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Generate some log events in the access log by visiting pages on your web server. Logs in the ",(0,o.kt)("strong",{parentName:"p"},"combined")," format have the following format:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'192.168.208.1 - - [12/Oct/2021:03:31:44 +0000] "GET / HTTP/1.1" 200 615 "-" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.63 Safari/537.36"\n192.168.208.1 - - [12/Oct/2021:03:31:44 +0000] "GET /favicon.ico HTTP/1.1" 404 555 "http://localhost/" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.63 Safari/537.36"\n192.168.208.1 - - [12/Oct/2021:03:31:49 +0000] "GET / HTTP/1.1" 304 0 "-" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.63 Safari/537.36"\n')))),(0,o.kt)("h2",{id:"3-configure-vector"},"3. Configure Vector"),(0,o.kt)("p",null,"Vector collects, transforms and routes logs, metrics, and traces (referred to as ",(0,o.kt)("strong",{parentName:"p"},"sources"),") to lots of different vendors (referred to as ",(0,o.kt)("strong",{parentName:"p"},"sinks"),"), including out-of-the-box compatibility with ClickHouse. Sources and sinks are defined in a configuration file named ",(0,o.kt)("strong",{parentName:"p"},"vector.toml"),"."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The following ",(0,o.kt)("strong",{parentName:"p"},"vector.toml")," defines a ",(0,o.kt)("strong",{parentName:"p"},"source")," of type ",(0,o.kt)("strong",{parentName:"p"},"file")," that tails the end of ",(0,o.kt)("strong",{parentName:"p"},"my_access.log"),", and it also defines a ",(0,o.kt)("strong",{parentName:"p"},"sink")," as the ",(0,o.kt)("strong",{parentName:"p"},"access_logs")," table defined above:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'[sources.nginx_logs]\ntype = "file"\ninclude = [ "/var/log/nginx/my_access.log" ]\nread_from = "end"\n\n[sinks.clickhouse]\ntype = "clickhouse"\ninputs = ["nginx_logs"]\nendpoint = "http://clickhouse-server:8123"\ndatabase = "nginxdb"\ntable = "access_logs"\nskip_unknown_fields = true\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Start up Vector using the configuration above. ",(0,o.kt)("a",{href:"https://vector.dev/docs/",target:"_blank"},"Visit the Vector documentation")," for more details on defining sources and sinks.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Verify the access logs are being inserted into ClickHouse. Run the following query and you should see the access logs in your table:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM nginxdb.access_logs\n")),(0,o.kt)("img",{src:a(81520).Z,class:"image",alt:"View the logs"}))),(0,o.kt)("h2",{id:"4-parse-the-logs"},"4. Parse the Logs"),(0,o.kt)("p",null,"Having the logs in ClickHouse is great, but storing each event as a single string does not allow for much data analysis. Let's see how to parse the log events using a materialized view."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"A ",(0,o.kt)("strong",{parentName:"p"},"materialized view")," (MV, for short) is a new table based on an existing table, and when inserts are made to the existing table, the new data is also added to the materialized view. Let's see how to define a MV that contains a parsed representation of the log events in ",(0,o.kt)("strong",{parentName:"p"},"access_logs"),", in other words:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'192.168.208.1 - - [12/Oct/2021:15:32:43 +0000] "GET / HTTP/1.1" 304 0 "-" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.63 Safari/537.36"\n')),(0,o.kt)("p",{parentName:"li"},"There are various functions in ClickHouse to parse the string, but for starters let's take a look at ",(0,o.kt)("strong",{parentName:"p"},"splitByWhitespace")," - which parses a string by whitespace and returns each token in an array. To demonstrate, run the following command:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sql"},'SELECT splitByWhitespace(\'192.168.208.1 - - [12/Oct/2021:15:32:43 +0000] "GET / HTTP/1.1" 304 0 "-" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.63 Safari/537.36"\')\n')),(0,o.kt)("p",{parentName:"li"},"Notice the response is pretty close to what we want! A few of the strings have some extra characters, and the user agent (the browser details) did not need to be parsed, but we will resolve that in the next step:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'["192.168.208.1","-","-","[12/Oct/2021:15:32:43","+0000]","\\"GET","/","HTTP/1.1\\"","304","0","\\"-\\"","\\"Mozilla/5.0","(Macintosh;","Intel","Mac","OS","X","10_15_7)","AppleWebKit/537.36","(KHTML,","like","Gecko)","Chrome/93.0.4577.63","Safari/537.36\\""]\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Similar to ",(0,o.kt)("strong",{parentName:"p"},"splitByWhitespace"),", the ",(0,o.kt)("strong",{parentName:"p"},"splitByRegexp")," function splits a string into an array based on a regular expression. Run the following command, which returns two strings. "),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sql"},'SELECT splitByRegexp(\'\\S \\d+ "([^"]*)"\', \'192.168.208.1 - - [12/Oct/2021:15:32:43 +0000] "GET / HTTP/1.1" 304 0 "-" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.63 Safari/537.36"\')\n')),(0,o.kt)("p",{parentName:"li"},"Notice the second string returned is the user agent successfully parsed from the log:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'["192.168.208.1 - - [12/Oct/2021:15:32:43 +0000] \\"GET / HTTP/1.1\\" 30"," \\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.63 Safari/537.36\\""]\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Before looking at the final ",(0,o.kt)("strong",{parentName:"p"},"CREATE MATERIALIZED VIEW")," command, let's view a couple more functions used to cleanup the data. For example, the ",(0,o.kt)("strong",{parentName:"p"},"RequestMethod")," looks like ",(0,o.kt)("strong",{parentName:"p"},'"GET')," with an unwanted double-quote. Run the following ",(0,o.kt)("strong",{parentName:"p"},"trim")," function, which removes the double quote:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT trim(LEADING '\"' FROM '\"GET')\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The time string has a leading square bracket, and also is not in a format that ClickHouse can parse into a date. However, if we change the separater from a colon (",(0,o.kt)("strong",{parentName:"p"},":"),") to a comma (",(0,o.kt)("strong",{parentName:"p"},","),") then the parsing works great:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT parseDateTimeBestEffort(replaceOne(trim(LEADING '[' FROM '[12/Oct/2021:15:32:43'), ':', ' '))\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"We are now ready to define our materialized view. Our definition includes ",(0,o.kt)("strong",{parentName:"p"},"POPULATE"),", which means the existing rows in ",(0,o.kt)("strong",{parentName:"p"},"access_logs")," will be processed and inserted right away. Run the following SQL statement:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE MATERIALIZED VIEW nginxdb.access_logs_view\n(\n    RemoteAddr String,\n    Client String,\n    RemoteUser String,\n    TimeLocal DateTime,\n    RequestMethod String,\n    Request String,\n    HttpVersion String,\n    Status Int32,\n    BytesSent Int64,\n    UserAgent String\n)\nENGINE = MergeTree()\nORDER BY RemoteAddr\nPOPULATE AS\nWITH \n    splitByWhitespace(message) as split,\n    splitByRegexp('\\S \\d+ \"([^\"]*)\"', message) as referer\nSELECT\n    split[1] AS RemoteAddr,\n    split[2] AS Client,\n    split[3] AS RemoteUser,\n    parseDateTimeBestEffort(replaceOne(trim(LEADING '[' FROM split[4]), ':', ' ')) AS TimeLocal,\n    trim(LEADING '\"' FROM split[6]) AS RequestMethod,\n    split[7] AS Request,\n    trim(TRAILING '\"' FROM split[8]) AS HttpVersion,\n    split[9] AS Status,\n    split[10] AS BytesSent,\n    trim(BOTH '\"' from referer[2]) AS UserAgent\nFROM \n    (SELECT message FROM nginxdb.access_logs)\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Now verify it worked. You should see the access logs nicely parsed into columns:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM nginxdb.access_logs_view\n")),(0,o.kt)("img",{src:a(18164).Z,class:"image",alt:"View the logs"}),(0,o.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The lesson above stored the data in two tables, but you could change the initial ",(0,o.kt)("strong",{parentName:"p"},"nginxdb.access_logs")," table to use the ",(0,o.kt)("strong",{parentName:"p"},"Null")," table engine - the parsed data will still end up in the ",(0,o.kt)("strong",{parentName:"p"},"nginxdb.access_logs_view")," table, but the raw data will not be stored in a table."))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Summary:")," By using Vector, which only required a simple install and quick configuration, we can send logs from an Nginx server to a table in ClickHouse. By using a clever materialized view, we can parse those logs into columns for easier analytics."))}g.isMDXComponent=!0},81520:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/vector_01-9656cf4ea12581d6ff5bc6e99bbd389e.png"},18164:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/vector_02-63ecf678f78dd5bfe8ef644d5e966d4c.png"}}]);