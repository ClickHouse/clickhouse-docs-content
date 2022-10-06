"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[43100,73323],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||r;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},27666:function(e,t,n){n.d(t,{ZP:function(){return s}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),l=["components"],o={toc:[]};function s(e){var t=e.components,s=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},o,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"To connect to ClickHouse with native TCP you need this information:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The HOST and PORT: typically, the port is 9440 when using TLS, or 9000 when not using TLS.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The DATABASE NAME: out of the box there is a database named ",(0,r.kt)("inlineCode",{parentName:"p"},"default"),", use the name of the database that you want to connect to.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The USERNAME and PASSWORD: out of the box the username is ",(0,r.kt)("inlineCode",{parentName:"p"},"default"),". Use the username appropriate for your use case."))),(0,r.kt)("p",null,"The details for your ClickHouse Cloud service are available in the ClickHouse Cloud console.  Select the service that you will connect to and click ",(0,r.kt)("strong",{parentName:"p"},"Connect"),":"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"ClickHouse Cloud service connect button",src:n(64872).Z,width:"939",height:"474"})),(0,r.kt)("p",null,"Choose ",(0,r.kt)("strong",{parentName:"p"},"Native"),", and the details are available in an example ",(0,r.kt)("inlineCode",{parentName:"p"},"clickhouse-client")," command. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"ClickHouse Cloud Native TCP connection details",src:n(22998).Z,width:"581",height:"470"})),(0,r.kt)("p",null,"If you are using self-managed ClickHouse, the connection details are set by your ClickHouse administrator."))}s.isMDXComponent=!0},77718:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),l=n(33947),o=["components"],s={sidebar_label:"clickhouse-client",title:"clickhouse-client"},c=void 0,u={unversionedId:"en/integrations/sql-clients/cli",id:"en/integrations/sql-clients/cli",title:"clickhouse-client",description:"",source:"@site/docs/en/integrations/sql-clients/cli.mdx",sourceDirName:"en/integrations/sql-clients",slug:"/en/integrations/sql-clients/cli",permalink:"/docs/en/integrations/sql-clients/cli",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/integrations/sql-clients/cli.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"clickhouse-client",title:"clickhouse-client"},sidebar:"english",previous:{title:"ArcType",permalink:"/docs/en/integrations/sql-clients/arctype"},next:{title:"DataGrip",permalink:"/docs/en/integrations/sql-clients/datagrip"}},p={},d=[],m={toc:d};function h(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(l.default,{mdxType:"Content"}))}h.isMDXComponent=!0},33947:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),l=n(27666),o=["components"],s={slug:"/en/interfaces/cli",sidebar_position:17,sidebar_label:"Command-Line Client"},c="Command-line Client",u={unversionedId:"en/interfaces/cli",id:"en/interfaces/cli",title:"Command-line Client",description:"clickhouse-client",source:"@site/docs/en/interfaces/cli.md",sourceDirName:"en/interfaces",slug:"/en/interfaces/cli",permalink:"/docs/en/interfaces/cli",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/interfaces/cli.md",tags:[],version:"current",sidebarPosition:17,frontMatter:{slug:"/en/interfaces/cli",sidebar_position:17,sidebar_label:"Command-Line Client"},sidebar:"english",previous:{title:"Overview",permalink:"/docs/en/interfaces/overview"},next:{title:"Native Interface (TCP)",permalink:"/docs/en/interfaces/tcp"}},p={},d=[{value:"clickhouse-client",id:"clickhouse-client",level:2},{value:"Usage",id:"cli_usage",level:2},{value:"Gather your connection details",id:"gather-your-connection-details",level:3},{value:"Interactive",id:"interactive",level:3},{value:"Batch",id:"batch",level:3},{value:"Inserting a CSV file into a remote ClickHouse service",id:"inserting-a-csv-file-into-a-remote-clickhouse-service",level:4},{value:"Three different ways of inserting data",id:"three-different-ways-of-inserting-data",level:4},{value:"Notes",id:"notes",level:3},{value:"Queries with Parameters",id:"cli-queries-with-parameters",level:3},{value:"Query Syntax",id:"cli-queries-with-parameters-syntax",level:4},{value:"Example",id:"example",level:4},{value:"Configuring",id:"interfaces_cli_configuration",level:2},{value:"Command Line Options",id:"command-line-options",level:3},{value:"Configuration Files",id:"configuration_files",level:3},{value:"Query ID Format",id:"query-id-format",level:3}],m={toc:d};function h(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"command-line-client"},"Command-line Client"),(0,r.kt)("h2",{id:"clickhouse-client"},"clickhouse-client"),(0,r.kt)("p",null,"ClickHouse provides a native command-line client: ",(0,r.kt)("inlineCode",{parentName:"p"},"clickhouse-client"),". The client supports command-line options and configuration files. For more information, see ",(0,r.kt)("a",{parentName:"p",href:"#interfaces_cli_configuration"},"Configuring"),"."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/en/getting-started/install"},"Install")," it from the ",(0,r.kt)("inlineCode",{parentName:"p"},"clickhouse-client")," package and run it with the command ",(0,r.kt)("inlineCode",{parentName:"p"},"clickhouse-client"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ clickhouse-client\nClickHouse client version 20.13.1.5273 (official build).\nConnecting to localhost:9000 as user default.\nConnected to ClickHouse server version 20.13.1 revision 54442.\n\n:)\n")),(0,r.kt)("p",null,"Different client and server versions are compatible with one another, but some features may not be available in older clients. We recommend using the same version of the client as the server app. When you try to use a client of the older version, then the server, ",(0,r.kt)("inlineCode",{parentName:"p"},"clickhouse-client")," displays the message:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-response"},"ClickHouse client version is older than ClickHouse server.\nIt may lack support for new features.\n")),(0,r.kt)("h2",{id:"cli_usage"},"Usage"),(0,r.kt)("p",null,"The client can be used in interactive and non-interactive (batch) mode. "),(0,r.kt)("h3",{id:"gather-your-connection-details"},"Gather your connection details"),(0,r.kt)(l.ZP,{mdxType:"ConnectionDetails"}),(0,r.kt)("h3",{id:"interactive"},"Interactive"),(0,r.kt)("p",null,"To connect to your ClickHouse Cloud service, or any ClickHouse server using TLS and passwords, interactively use ",(0,r.kt)("inlineCode",{parentName:"p"},"--secure"),", port 9440, and provide your username and password:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"clickhouse-client --host <HOSTNAME> \\\n                  --secure \\\n                  --port 9440 \\\n                  --user <USERNAME> \\\n                  --password <PASSWORD>\n")),(0,r.kt)("p",null,"To connect to a self-managed ClickHouse server you will need the details for that server.  Whether or not TLS is used, port numbers, and passwords are all configurable.  Use the above example for ClickHouse Cloud as a starting point."),(0,r.kt)("h3",{id:"batch"},"Batch"),(0,r.kt)("p",null,"To use batch mode, specify the \u2018query\u2019 parameter, or send data to \u2018stdin\u2019 (it verifies that \u2018stdin\u2019 is not a terminal), or both. Similar to the HTTP interface, when using the \u2018query\u2019 parameter and sending data to \u2018stdin\u2019, the request is a concatenation of the \u2018query\u2019 parameter, a line feed, and the data in \u2018stdin\u2019. This is convenient for large INSERT queries."),(0,r.kt)("p",null,"Examples of using the client to insert data:"),(0,r.kt)("h4",{id:"inserting-a-csv-file-into-a-remote-clickhouse-service"},"Inserting a CSV file into a remote ClickHouse service"),(0,r.kt)("p",null,"This example is appropriate for ClickHouse Cloud, or any ClickHouse server using TLS and a password. In this example a sample dataset CSV file, ",(0,r.kt)("inlineCode",{parentName:"p"},"cell_towers.csv")," is inserted into an existing table ",(0,r.kt)("inlineCode",{parentName:"p"},"cell_towers")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"default")," database:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'clickhouse-client --host HOSTNAME.clickhouse.cloud \\\n  --secure \\\n  --port 9440 \\\n  --user default \\\n  --password PASSWORD \\\n  --query "INSERT INTO cell_towers FORMAT CSVWithNames" \\\n  < cell_towers.csv\n')),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"To concentrate on the query syntax, the rest of the examples leave off the connection details (",(0,r.kt)("inlineCode",{parentName:"p"},"--host"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"--port"),", etc.).  Add them in when you try the commands."))),(0,r.kt)("h4",{id:"three-different-ways-of-inserting-data"},"Three different ways of inserting data"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"echo -ne \"1, 'some text', '2016-08-14 00:00:00'\\n2, 'some more text', '2016-08-14 00:00:01'\" | \\\n  clickhouse-client --database=test --query=\"INSERT INTO test FORMAT CSV\";\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cat <<_EOF | clickhouse-client --database=test --query=\"INSERT INTO test FORMAT CSV\";\n3, 'some text', '2016-08-14 00:00:00'\n4, 'some more text', '2016-08-14 00:00:01'\n_EOF\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'cat file.csv | clickhouse-client --database=test --query="INSERT INTO test FORMAT CSV";\n')),(0,r.kt)("h3",{id:"notes"},"Notes"),(0,r.kt)("p",null,"In batch mode, the default data format is TabSeparated. You can set the format in the FORMAT clause of the query."),(0,r.kt)("p",null,"By default, you can only process a single query in batch mode. To make multiple queries from a \u201cscript,\u201d use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--multiquery")," parameter. This works for all queries except INSERT. Query results are output consecutively without additional separators. Similarly, to process a large number of queries, you can run \u2018clickhouse-client\u2019 for each query. Note that it may take tens of milliseconds to launch the \u2018clickhouse-client\u2019 program."),(0,r.kt)("p",null,"In interactive mode, you get a command line where you can enter queries."),(0,r.kt)("p",null,"If \u2018multiline\u2019 is not specified (the default): To run the query, press Enter. The semicolon is not necessary at the end of the query. To enter a multiline query, enter a backslash ",(0,r.kt)("inlineCode",{parentName:"p"},"\\")," before the line feed. After you press Enter, you will be asked to enter the next line of the query."),(0,r.kt)("p",null,"If multiline is specified: To run a query, end it with a semicolon and press Enter. If the semicolon was omitted at the end of the entered line, you will be asked to enter the next line of the query."),(0,r.kt)("p",null,"Only a single query is run, so everything after the semicolon is ignored."),(0,r.kt)("p",null,"You can specify ",(0,r.kt)("inlineCode",{parentName:"p"},"\\G")," instead of or after the semicolon. This indicates Vertical format. In this format, each value is printed on a separate line, which is convenient for wide tables. This unusual feature was added for compatibility with the MySQL CLI."),(0,r.kt)("p",null,"The command line is based on \u2018replxx\u2019 (similar to \u2018readline\u2019). In other words, it uses the familiar keyboard shortcuts and keeps a history. The history is written to ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.clickhouse-client-history"),"."),(0,r.kt)("p",null,"By default, the format used is PrettyCompact. You can change the format in the FORMAT clause of the query, or by specifying ",(0,r.kt)("inlineCode",{parentName:"p"},"\\G")," at the end of the query, using the ",(0,r.kt)("inlineCode",{parentName:"p"},"--format")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"--vertical")," argument in the command line, or using the client configuration file."),(0,r.kt)("p",null,"To exit the client, press Ctrl+D, or enter one of the following instead of a query: \u201cexit\u201d, \u201cquit\u201d, \u201clogout\u201d, \u201cexit;\u201d, \u201cquit;\u201d, \u201clogout;\u201d, \u201cq\u201d, \u201cQ\u201d, \u201c:q\u201d"),(0,r.kt)("p",null,"When processing a query, the client shows:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Progress, which is updated no more than 10 times per second (by default). For quick queries, the progress might not have time to be displayed."),(0,r.kt)("li",{parentName:"ol"},"The formatted query after parsing, for debugging."),(0,r.kt)("li",{parentName:"ol"},"The result in the specified format."),(0,r.kt)("li",{parentName:"ol"},"The number of lines in the result, the time passed, and the average speed of query processing.")),(0,r.kt)("p",null,"You can cancel a long query by pressing Ctrl+C. However, you will still need to wait for a little for the server to abort the request. It is not possible to cancel a query at certain stages. If you do not wait and press Ctrl+C a second time, the client will exit."),(0,r.kt)("p",null,"The command-line client allows passing external data (external temporary tables) for querying. For more information, see the section \u201cExternal data for query processing\u201d."),(0,r.kt)("h3",{id:"cli-queries-with-parameters"},"Queries with Parameters"),(0,r.kt)("p",null,"You can create a query with parameters and pass values to them from client application. This allows to avoid formatting query with specific dynamic values on client side. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ clickhouse-client --param_parName="[1, 2]"  -q "SELECT * FROM table WHERE a = {parName:Array(UInt16)}"\n')),(0,r.kt)("p",null,"It is also possible to set parameters from within an interactive session:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ clickhouse-client -nq \"\n  SET param_parName='[1, 2]';\n  SELECT {parName:Array(UInt16)}\"\n")),(0,r.kt)("h4",{id:"cli-queries-with-parameters-syntax"},"Query Syntax"),(0,r.kt)("p",null,"Format a query as usual, then place the values that you want to pass from the app parameters to the query in braces in the following format:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"{<name>:<data type>}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name")," \u2014 Placeholder identifier. In the console client it should be used in app parameters as ",(0,r.kt)("inlineCode",{parentName:"li"},"--param_<name> = value"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"data type")," \u2014 ",(0,r.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/"},"Data type")," of the app parameter value. For example, a data structure like ",(0,r.kt)("inlineCode",{parentName:"li"},"(integer, ('string', integer))")," can have the ",(0,r.kt)("inlineCode",{parentName:"li"},"Tuple(UInt8, Tuple(String, UInt8))")," data type (you can also use another ",(0,r.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"integer")," types). It's also possible to pass table, database, column names as a parameter, in that case you would need to use ",(0,r.kt)("inlineCode",{parentName:"li"},"Identifier")," as a data type.")),(0,r.kt)("h4",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ clickhouse-client --param_tuple_in_tuple="(10, (\'dt\', 10))" -q "SELECT * FROM table WHERE val = {tuple_in_tuple:Tuple(UInt8, Tuple(String, UInt8))}"\n$ clickhouse-client --param_tbl="numbers" --param_db="system" --param_col="number" --query "SELECT {col:Identifier} FROM {db:Identifier}.{tbl:Identifier} LIMIT 10"\n')),(0,r.kt)("h2",{id:"interfaces_cli_configuration"},"Configuring"),(0,r.kt)("p",null,"You can pass parameters to ",(0,r.kt)("inlineCode",{parentName:"p"},"clickhouse-client")," (all parameters have a default value) using:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"From the Command Line"),(0,r.kt)("p",{parentName:"li"},"Command-line options override the default values and settings in configuration files.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Configuration files."),(0,r.kt)("p",{parentName:"li"},"Settings in the configuration files override the default values."))),(0,r.kt)("h3",{id:"command-line-options"},"Command Line Options"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--host, -h")," \u2013 The server name, \u2018localhost\u2019 by default. You can use either the name or the IPv4 or IPv6 address."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--port")," \u2013 The port to connect to. Default value: 9000. Note that the HTTP interface and the native interface use different ports."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--user, -u")," \u2013 The username. Default value: default."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--password")," \u2013 The password. Default value: empty string."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--ask-password")," - Prompt the user to enter a password."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--query, -q")," \u2013 The query to process when using non-interactive mode. You must specify either ",(0,r.kt)("inlineCode",{parentName:"li"},"query")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"queries-file")," option."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--queries-file")," \u2013 file path with queries to execute. You must specify either ",(0,r.kt)("inlineCode",{parentName:"li"},"query")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"queries-file")," option."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--database, -d")," \u2013 Select the current default database. Default value: the current database from the server settings (\u2018default\u2019 by default)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--multiline, -m")," \u2013 If specified, allow multiline queries (do not send the query on Enter)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--multiquery, -n")," \u2013 If specified, allow processing multiple queries separated by semicolons."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--format, -f")," \u2013 Use the specified default format to output the result."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--vertical, -E")," \u2013 If specified, use the ",(0,r.kt)("a",{parentName:"li",href:"/docs/en/interfaces/formats#vertical"},"Vertical format")," by default to output the result. This is the same as ",(0,r.kt)("inlineCode",{parentName:"li"},"\u2013format=Vertical"),". In this format, each value is printed on a separate line, which is helpful when displaying wide tables."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--time, -t")," \u2013 If specified, print the query execution time to \u2018stderr\u2019 in non-interactive mode."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--stacktrace")," \u2013 If specified, also print the stack trace if an exception occurs."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--config-file")," \u2013 The name of the configuration file."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--secure")," \u2013 If specified, will connect to server over secure connection (TLS). You might need to configure your CA certificates in the ",(0,r.kt)("a",{parentName:"li",href:"#configuration_files"},"configuration file"),". The available configuration settings are the same as for ",(0,r.kt)("a",{parentName:"li",href:"/docs/en/operations/server-configuration-parameters/settings#server_configuration_parameters-openssl"},"server-side TLS configuration"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--history_file")," \u2014 Path to a file containing command history."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--param_<name>")," \u2014 Value for a ",(0,r.kt)("a",{parentName:"li",href:"#cli-queries-with-parameters"},"query with parameters"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--hardware-utilization")," \u2014 Print hardware utilization information in progress bar."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--print-profile-events")," \u2013 Print ",(0,r.kt)("inlineCode",{parentName:"li"},"ProfileEvents")," packets."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--profile-events-delay-ms")," \u2013 Delay between printing ",(0,r.kt)("inlineCode",{parentName:"li"},"ProfileEvents")," packets (-1 - print only totals, 0 - print every single packet).")),(0,r.kt)("p",null,"Since version 20.5, ",(0,r.kt)("inlineCode",{parentName:"p"},"clickhouse-client")," has automatic syntax highlighting (always enabled)."),(0,r.kt)("h3",{id:"configuration_files"},"Configuration Files"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"clickhouse-client")," uses the first existing file of the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Defined in the ",(0,r.kt)("inlineCode",{parentName:"li"},"--config-file")," parameter."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"./clickhouse-client.xml")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"~/.clickhouse-client/config.xml")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/etc/clickhouse-client/config.xml"))),(0,r.kt)("p",null,"Example of a config file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<config>\n    <user>username</user>\n    <password>password</password>\n    <secure>true</secure>\n    <openSSL>\n      <client>\n        <caConfig>/etc/ssl/cert.pem</caConfig>\n      </client>\n    </openSSL>\n</config>\n")),(0,r.kt)("h3",{id:"query-id-format"},"Query ID Format"),(0,r.kt)("p",null,"In interactive mode ",(0,r.kt)("inlineCode",{parentName:"p"},"clickhouse-client")," shows query ID for every query. By default, the ID is formatted like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"Query id: 927f137d-00f1-4175-8914-0dd066365e96\n")),(0,r.kt)("p",null,"A custom format may be specified in a configuration file inside a ",(0,r.kt)("inlineCode",{parentName:"p"},"query_id_formats")," tag. ",(0,r.kt)("inlineCode",{parentName:"p"},"{query_id}")," placeholder in the format string is replaced with the ID of a query. Several format strings are allowed inside the tag.\nThis feature can be used to generate URLs to facilitate profiling of queries."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<config>\n  <query_id_formats>\n    <speedscope>http://speedscope-host/#profileURL=qp%3Fid%3D{query_id}</speedscope>\n  </query_id_formats>\n</config>\n")),(0,r.kt)("p",null,"If the configuration above is applied, the ID of a query is shown in the following format:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-response"},"speedscope:http://speedscope-host/#profileURL=qp%3Fid%3Dc8ecc783-e753-4b38-97f1-42cddfb98b7d\n")))}h.isMDXComponent=!0},64872:function(e,t,n){t.Z=n.p+"assets/images/cloud-connect-button-e2247559831d9d3549387ddfb0deee9b.png"},22998:function(e,t,n){t.Z=n.p+"assets/images/connection-details-native-ea0d0d9f42237c5a9e10015473a069d6.png"}}]);