"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[40309],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>d});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},c="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),c=p(n),m=r,d=c["".concat(s,".").concat(m)]||c[m]||k[m]||l;return n?a.createElement(d,i(i({ref:e},u),{},{components:n})):a.createElement(d,i({ref:e},u))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[c]="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},10175:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={sidebar_label:"ClickHouse Kafka Connect Sink",sidebar_position:1,slug:"/en/integrations/kafka/self-managed/connect-sink",description:"The official Kafka connector from ClickHouse."},i="ClickHouse Kafka Connect Sink",o={unversionedId:"en/integrations/data-ingestion/kafka/self-managed/kafka-clickhouse-connect-sink",id:"en/integrations/data-ingestion/kafka/self-managed/kafka-clickhouse-connect-sink",title:"ClickHouse Kafka Connect Sink",description:"The official Kafka connector from ClickHouse.",source:"@site/docs/en/integrations/data-ingestion/kafka/self-managed/kafka-clickhouse-connect-sink.md",sourceDirName:"en/integrations/data-ingestion/kafka/self-managed",slug:"/en/integrations/kafka/self-managed/connect-sink",permalink:"/docs/en/integrations/kafka/self-managed/connect-sink",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/integrations/data-ingestion/kafka/self-managed/kafka-clickhouse-connect-sink.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"ClickHouse Kafka Connect Sink",sidebar_position:1,slug:"/en/integrations/kafka/self-managed/connect-sink",description:"The official Kafka connector from ClickHouse."},sidebar:"english",previous:{title:"Self-managed Kafka",permalink:"/docs/en/integrations/kafka/self-managed"},next:{title:"Kafka Connect JDBC Connector",permalink:"/docs/en/integrations/kafka/self-managed/jdbc"}},s={},p=[{value:"License",id:"license",level:2},{value:"Requirements for the environment",id:"requirements-for-the-environment",level:2},{value:"Version compatibility matrix",id:"version-compatibility-matrix",level:2},{value:"Main Features",id:"main-features",level:2},{value:"Installation instructions",id:"installation-instructions",level:2},{value:"Configuration options",id:"configuration-options",level:2},{value:"Target Tables",id:"target-tables",level:2},{value:"Pre-processing",id:"pre-processing",level:2},{value:"Supported Data types",id:"supported-data-types",level:2},{value:"Logging",id:"logging",level:2},{value:"Monitoring",id:"monitoring",level:2},{value:"Limitations",id:"limitations",level:2},{value:"Related Content",id:"related-content",level:2}],u={toc:p},c="wrapper";function k(t){let{components:e,...n}=t;return(0,r.kt)(c,(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"clickhouse-kafka-connect-sink"},"ClickHouse Kafka Connect Sink"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The connector is available in beta stage for early adopters. If you notice a problem, please ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/clickhouse-kafka-connect/issues/new"},"file an issue."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ClickHouse Kafka Connect Sink")," is the Kafka connector delivering data from a Kafka topic to a ClickHouse table."),(0,r.kt)("h2",{id:"license"},"License"),(0,r.kt)("p",null,"The Kafka Connector Sink is distributed under the ",(0,r.kt)("a",{parentName:"p",href:"https://www.apache.org/licenses/LICENSE-2.0"},"Apache 2.0 License")),(0,r.kt)("h2",{id:"requirements-for-the-environment"},"Requirements for the environment"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://docs.confluent.io/platform/current/connect/index.html"},"Kafka Connect")," framework v2.7 or later should be installed in the environment."),(0,r.kt)("h2",{id:"version-compatibility-matrix"},"Version compatibility matrix"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ClickHouse Kafka Connect version"),(0,r.kt)("th",{parentName:"tr",align:null},"ClickHouse version"),(0,r.kt)("th",{parentName:"tr",align:null},"Kafka Connect"),(0,r.kt)("th",{parentName:"tr",align:null},"Confluent platform"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0.0.7"),(0,r.kt)("td",{parentName:"tr",align:null},"22.5 or later"),(0,r.kt)("td",{parentName:"tr",align:null},"2.7 or later"),(0,r.kt)("td",{parentName:"tr",align:null},"6.1 or later")))),(0,r.kt)("h2",{id:"main-features"},"Main Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Shipped with out-of-the-box exactly-once semantics. It's powered by a new ClickHouse core feature named ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ClickHouse/ClickHouse/pull/39976"},"KeeperMap")," (used as a state store by the connector) and allows for minimalistic architecture."),(0,r.kt)("li",{parentName:"ul"},"Support for 3rd-party state stores: Currently defaults to In-memory but can use KeeperMap (Redis to be added soon)."),(0,r.kt)("li",{parentName:"ul"},"Core integration: Built, maintained, and supported by ClickHouse."),(0,r.kt)("li",{parentName:"ul"},"Tested continuously against ",(0,r.kt)("a",{parentName:"li",href:"https://clickhouse.com/cloud"},"ClickHouse Cloud"),"."),(0,r.kt)("li",{parentName:"ul"},"Data inserts with a declared schema and schemaless."),(0,r.kt)("li",{parentName:"ul"},"Support for most major data types of ClickHouse (more to be added soon)")),(0,r.kt)("h2",{id:"installation-instructions"},"Installation instructions"),(0,r.kt)("p",null,"The connector is distributed as a single uber JAR file containing all the class files necessary to run the plugin."),(0,r.kt)("p",null,"To install the plugin, follow these steps:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Download a zip archive containing the Connector JAR file from the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ClickHouse/clickhouse-kafka-connect/releases"},"Releases")," page of ClickHouse Kafka Connect Sink repository."),(0,r.kt)("li",{parentName:"ul"},"Extract the ZIP file content and copy it to the desired location."),(0,r.kt)("li",{parentName:"ul"},"Add a path with the plugin director to ",(0,r.kt)("a",{parentName:"li",href:"https://kafka.apache.org/documentation/#connectconfigs_plugin.path"},"plugin.path")," configuration in your Connect properties file to allow Confluent Platform to find the plugin."),(0,r.kt)("li",{parentName:"ul"},"Provide a topic name, ClickHouse instance hostname, and password in config.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"connector.class=com.clickhouse.kafka.connect.ClickHouseSinkConnector\ntasks.max=1\ntopics=<topic_name>\nssl=true\nsecurity.protocol=SSL\nhostname=<hostname>\ndatabase=<database_name>\npassword=<password>\nssl.truststore.location=/tmp/kafka.client.truststore.jks\nport=8443\nvalue.converter.schemas.enable=false\nvalue.converter=org.apache.kafka.connect.json.JsonConverter\nexactlyOnce=true\nusername=default\nschemas.enable=false\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Restart the Confluent Platform."),(0,r.kt)("li",{parentName:"ul"},"If you use Confluent Platform, log into Confluent Control Center UI to verify the ClickHouse Sink is available in the list of available connectors.")),(0,r.kt)("h2",{id:"configuration-options"},"Configuration options"),(0,r.kt)("p",null,"To connect the ClickHouse Sink to the ClickHouse server, you need to provide:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"connection details: hostname (",(0,r.kt)("strong",{parentName:"li"},"required"),") and port (optional)"),(0,r.kt)("li",{parentName:"ul"},"user credentials: password (",(0,r.kt)("strong",{parentName:"li"},"required"),") and username (optional)")),(0,r.kt)("p",null,"The full table of configuration options:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hostname"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"required")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The hostname or IP address of the server"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"port"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Port the server listens to"),(0,r.kt)("td",{parentName:"tr",align:null},"8443")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"username"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the user on whose behalf to connect to the server"),(0,r.kt)("td",{parentName:"tr",align:null},"default")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"password"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"required")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Password for the specified user"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"database"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the database to write to"),(0,r.kt)("td",{parentName:"tr",align:null},"default")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ssl"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Enable TLS for network connections"),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"exactlyOnce"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Enable exactly-once processing guarantees.",(0,r.kt)("br",null),"When ",(0,r.kt)("strong",{parentName:"td"},"true"),", stores processing state in KeeperMap.",(0,r.kt)("br",null),"When ",(0,r.kt)("strong",{parentName:"td"},"false"),", stores processing state in-memory."),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"timeoutSeconds"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Connection timeout in seconds."),(0,r.kt)("td",{parentName:"tr",align:null},"30")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"retryCount"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Maximum number of retries for a query. No delay between retries."),(0,r.kt)("td",{parentName:"tr",align:null},"3")))),(0,r.kt)("h2",{id:"target-tables"},"Target Tables"),(0,r.kt)("p",null,"ClickHouse Connect Sink reads messages from Kafka topics and writes them to appropriate tables. ClickHouse Connect Sink writes data into existing tables. Please, make sure a target table with an appropriate schema was created in ClickHouse before starting to insert data into it."),(0,r.kt)("p",null,"Each topic requires a dedicated target table in ClickHouse. The target table name must match the source topic name. "),(0,r.kt)("h2",{id:"pre-processing"},"Pre-processing"),(0,r.kt)("p",null,"If you need to transform outbound messages before they are sent to ClickHouse Kafka Connect\nSink, use ",(0,r.kt)("a",{parentName:"p",href:"https://docs.confluent.io/platform/current/connect/transforms/overview.html"},"Kafka Connect Transformations"),"."),(0,r.kt)("h2",{id:"supported-data-types"},"Supported Data types"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"With a schema declared:")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Kafka Connect Type"),(0,r.kt)("th",{parentName:"tr",align:null},"ClickHouse Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Supported"),(0,r.kt)("th",{parentName:"tr",align:null},"Primitive"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"STRING"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"INT8"),(0,r.kt)("td",{parentName:"tr",align:null},"Int8"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"INT16"),(0,r.kt)("td",{parentName:"tr",align:null},"Int16"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"INT32"),(0,r.kt)("td",{parentName:"tr",align:null},"Int32"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"INT64"),(0,r.kt)("td",{parentName:"tr",align:null},"Int64"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FLOAT32"),(0,r.kt)("td",{parentName:"tr",align:null},"Float32"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FLOAT64"),(0,r.kt)("td",{parentName:"tr",align:null},"Float64"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BOOLEAN"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ARRAY"),(0,r.kt)("td",{parentName:"tr",align:null},"Array(Primitive)"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MAP"),(0,r.kt)("td",{parentName:"tr",align:null},"Map(Primitive, Primitive)"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"STRUCT"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BYTES"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"No")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Without a schema declared:")),(0,r.kt)("p",null,"A record is converted into JSON and sent to ClickHouse as a value in ",(0,r.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/sql-reference/formats/#jsoneachrow"},"JSONEachRow")," format."),(0,r.kt)("h2",{id:"logging"},"Logging"),(0,r.kt)("p",null,"Logging is automatically provided by Kafka Connect Platform.\nThe logging destination and format might be configured via Kafka connect ",(0,r.kt)("a",{parentName:"p",href:"https://docs.confluent.io/platform/current/connect/logging.html#log4j-properties-file"},"configuration file"),"."),(0,r.kt)("p",null,"If using the Confluent Platform, the logs can be seen by running a CLI command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"confluent local services connect log\n")),(0,r.kt)("p",null,"For additional details check out the official ",(0,r.kt)("a",{parentName:"p",href:"https://docs.confluent.io/platform/current/connect/logging.html"},"tutorial"),"."),(0,r.kt)("h2",{id:"monitoring"},"Monitoring"),(0,r.kt)("p",null,"ClickHouse Kafka Connect reports runtime metrics via ",(0,r.kt)("a",{parentName:"p",href:"https://www.oracle.com/technical-resources/articles/javase/jmx.html"},"Java Management Extensions (JMX)"),". JMX is enabled in Kafka Connector by default."),(0,r.kt)("p",null,"ClickHouse Connect MBeanName:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"com.clickhouse:type=ClickHouseKafkaConnector,name=SinkTask{id}\n")),(0,r.kt)("p",null,"ClickHouse Kafka Connect reports the following metrics:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"receivedRecords"),(0,r.kt)("td",{parentName:"tr",align:null},"long"),(0,r.kt)("td",{parentName:"tr",align:null},"The total number of records received.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"recordProcessingTime"),(0,r.kt)("td",{parentName:"tr",align:null},"long"),(0,r.kt)("td",{parentName:"tr",align:null},"Total time in nanoseconds spent grouping and converting records to a unified structure.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"taskProcessingTime"),(0,r.kt)("td",{parentName:"tr",align:null},"long"),(0,r.kt)("td",{parentName:"tr",align:null},"Total time in nanoseconds spent processing and inserting data into ClickHouse.")))),(0,r.kt)("h2",{id:"limitations"},"Limitations"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Deletes are not supported."),(0,r.kt)("li",{parentName:"ul"},"Batch size is inherited from the Kafka Consumer properties."),(0,r.kt)("li",{parentName:"ul"},"When using KeeperMap for exactly-once and the offset is changed or rewound, you need to delete the content from KeeperMap for that specific topic.")),(0,r.kt)("h2",{id:"related-content"},"Related Content"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Blog: ",(0,r.kt)("a",{parentName:"li",href:"https://clickhouse.com/blog/kafka-connect-connector-clickhouse-with-exactly-once"},"Announcing a new official ClickHouse Kafka Connector"))))}k.isMDXComponent=!0}}]);