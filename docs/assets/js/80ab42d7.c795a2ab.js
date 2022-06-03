"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[50951],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),f=c(n),m=i,d=f["".concat(s,".").concat(m)]||f[m]||u[m]||a;return n?r.createElement(d,l(l({ref:t},p),{},{components:n})):r.createElement(d,l({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},92796:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return u}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),l=["components"],o={sidebar_position:19,sidebar_label:"gRPC Interface"},s="gRPC Interface",c={unversionedId:"en/interfaces/grpc",id:"en/interfaces/grpc",title:"gRPC Interface",description:"Introduction",source:"@site/docs/en/interfaces/grpc.md",sourceDirName:"en/interfaces",slug:"/en/interfaces/grpc",permalink:"/docs/en/interfaces/grpc",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/interfaces/grpc.md",tags:[],version:"current",sidebarPosition:19,frontMatter:{sidebar_position:19,sidebar_label:"gRPC Interface"},sidebar:"english",previous:{title:"Native Interface (TCP)",permalink:"/docs/en/interfaces/tcp"},next:{title:"HTTP Interface",permalink:"/docs/en/interfaces/http"}},p={},u=[{value:"Introduction",id:"grpc-interface-introduction",level:2},{value:"gRPC Configuration",id:"grpc-interface-configuration",level:2},{value:"Built-in Client",id:"grpc-client",level:2}],f={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"grpc-interface"},"gRPC Interface"),(0,a.kt)("h2",{id:"grpc-interface-introduction"},"Introduction"),(0,a.kt)("p",null,"ClickHouse supports ",(0,a.kt)("a",{parentName:"p",href:"https://grpc.io/"},"gRPC")," interface. It is an open source remote procedure call system that uses HTTP/2 and ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Protocol_Buffers"},"Protocol Buffers"),". The implementation of gRPC in ClickHouse supports:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"SSL;"),(0,a.kt)("li",{parentName:"ul"},"authentication;"),(0,a.kt)("li",{parentName:"ul"},"sessions;"),(0,a.kt)("li",{parentName:"ul"},"compression;"),(0,a.kt)("li",{parentName:"ul"},"parallel queries through the same channel;"),(0,a.kt)("li",{parentName:"ul"},"cancellation of queries;"),(0,a.kt)("li",{parentName:"ul"},"getting progress and logs;"),(0,a.kt)("li",{parentName:"ul"},"external tables.")),(0,a.kt)("p",null,"The specification of the interface is described in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/ClickHouse/blob/master/src/Server/grpc_protos/clickhouse_grpc.proto"},"clickhouse_grpc.proto"),"."),(0,a.kt)("h2",{id:"grpc-interface-configuration"},"gRPC Configuration"),(0,a.kt)("p",null,"To use the gRPC interface set ",(0,a.kt)("inlineCode",{parentName:"p"},"grpc_port")," in the main ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/operations/configuration-files"},"server configuration"),". Other configuration options see in the following example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<grpc_port>9100</grpc_port>\n    <grpc>\n        <enable_ssl>false</enable_ssl>\n\n        \x3c!-- The following two files are used only if SSL is enabled --\x3e\n        <ssl_cert_file>/path/to/ssl_cert_file</ssl_cert_file>\n        <ssl_key_file>/path/to/ssl_key_file</ssl_key_file>\n\n        \x3c!-- Whether server requests client for a certificate --\x3e\n        <ssl_require_client_auth>false</ssl_require_client_auth>\n\n        \x3c!-- The following file is used only if ssl_require_client_auth=true --\x3e\n        <ssl_ca_cert_file>/path/to/ssl_ca_cert_file</ssl_ca_cert_file>\n\n        \x3c!-- Default compression algorithm (applied if client doesn't specify another algorithm, see result_compression in QueryInfo).\n             Supported algorithms: none, deflate, gzip, stream_gzip --\x3e\n        <compression>deflate</compression>\n\n        \x3c!-- Default compression level (applied if client doesn't specify another level, see result_compression in QueryInfo).\n             Supported levels: none, low, medium, high --\x3e\n        <compression_level>medium</compression_level>\n\n        \x3c!-- Send/receive message size limits in bytes. -1 means unlimited --\x3e\n        <max_send_message_size>-1</max_send_message_size>\n        <max_receive_message_size>-1</max_receive_message_size>\n\n        \x3c!-- Enable if you want to get detailed logs --\x3e\n        <verbose_logs>false</verbose_logs>\n    </grpc>\n")),(0,a.kt)("h2",{id:"grpc-client"},"Built-in Client"),(0,a.kt)("p",null,"You can write a client in any of the programming languages supported by gRPC using the provided ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/ClickHouse/blob/master/src/Server/grpc_protos/clickhouse_grpc.proto"},"specification"),".\nOr you can use a built-in Python client. It is placed in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/ClickHouse/blob/master/utils/grpc-client/clickhouse-grpc-client.py"},"utils/grpc-client/clickhouse-grpc-client.py")," in the repository. The built-in client requires ",(0,a.kt)("a",{parentName:"p",href:"https://grpc.io/docs/languages/python/quickstart"},"grpcio and grpcio-tools")," Python modules."),(0,a.kt)("p",null,"The client supports the following arguments:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--help")," \u2013 Shows a help message and exits."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--host HOST, -h HOST")," \u2013 A server name. Default value: ",(0,a.kt)("inlineCode",{parentName:"li"},"localhost"),". You can use IPv4 or IPv6 addresses also."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--port PORT")," \u2013 A port to connect to. This port should be enabled in the ClickHouse server configuration (see ",(0,a.kt)("inlineCode",{parentName:"li"},"grpc_port"),"). Default value: ",(0,a.kt)("inlineCode",{parentName:"li"},"9100"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--user USER_NAME, -u USER_NAME")," \u2013 A user name. Default value: ",(0,a.kt)("inlineCode",{parentName:"li"},"default"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--password PASSWORD")," \u2013 A password. Default value: empty string."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--query QUERY, -q QUERY")," \u2013 A query to process when using non-interactive mode."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--database DATABASE, -d DATABASE")," \u2013 A default database. If not specified, the current database set in the server settings is used (",(0,a.kt)("inlineCode",{parentName:"li"},"default")," by default)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--format OUTPUT_FORMAT, -f OUTPUT_FORMAT")," \u2013 A result output ",(0,a.kt)("a",{parentName:"li",href:"/docs/en/interfaces/formats"},"format"),". Default value for interactive mode: ",(0,a.kt)("inlineCode",{parentName:"li"},"PrettyCompact"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--debug")," \u2013 Enables showing debug information.")),(0,a.kt)("p",null,"To run the client in an interactive mode call it without ",(0,a.kt)("inlineCode",{parentName:"p"},"--query")," argument."),(0,a.kt)("p",null,"In a batch mode query data can be passed via ",(0,a.kt)("inlineCode",{parentName:"p"},"stdin"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Client Usage Example")),(0,a.kt)("p",null,"In the following example a table is created and loaded with data from a CSV file. Then the content of the table is queried."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'./clickhouse-grpc-client.py -q "CREATE TABLE grpc_example_table (id UInt32, text String) ENGINE = MergeTree() ORDER BY id;"\necho "0,Input data for" > a.txt ; echo "1,gRPC protocol example" >> a.txt\ncat a.txt | ./clickhouse-grpc-client.py -q "INSERT INTO grpc_example_table FORMAT CSV"\n\n./clickhouse-grpc-client.py --format PrettyCompact -q "SELECT * FROM grpc_example_table;"\n')),(0,a.kt)("p",null,"Result:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500id\u2500\u252c\u2500text\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502  0 \u2502 Input data for        \u2502\n\u2502  1 \u2502 gRPC protocol example \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}m.isMDXComponent=!0}}]);