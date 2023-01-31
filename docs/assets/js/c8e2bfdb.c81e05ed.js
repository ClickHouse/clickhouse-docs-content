"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[70598],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,k=p["".concat(l,".").concat(m)]||p[m]||u[m]||r;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},13060:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const r={sidebar_label:"Kafka Connect JDBC Connector",sidebar_position:7,slug:"/en/integrations/kafka/kafka-connect-jdbc",description:"Using JDBC Connector Sink with Kafka Connect and ClickHouse"},i="JDBC Connector",s={unversionedId:"en/integrations/data-ingestion/kafka/kafka-connect-jdbc",id:"en/integrations/data-ingestion/kafka/kafka-connect-jdbc",title:"JDBC Connector",description:"Using JDBC Connector Sink with Kafka Connect and ClickHouse",source:"@site/docs/en/integrations/data-ingestion/kafka/kafka-connect-jdbc.md",sourceDirName:"en/integrations/data-ingestion/kafka",slug:"/en/integrations/kafka/kafka-connect-jdbc",permalink:"/docs/en/integrations/kafka/kafka-connect-jdbc",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/integrations/data-ingestion/kafka/kafka-connect-jdbc.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_label:"Kafka Connect JDBC Connector",sidebar_position:7,slug:"/en/integrations/kafka/kafka-connect-jdbc",description:"Using JDBC Connector Sink with Kafka Connect and ClickHouse"},sidebar:"english",previous:{title:"ClickHouse Kafka Connect Sink",permalink:"/docs/en/integrations/kafka/clickhouse-kafka-connect-sink"},next:{title:"Kafka Connect HTTP Connector",permalink:"/docs/en/integrations/kafka/kafka-connect-http"}},l={},c=[{value:"Steps",id:"steps",level:2},{value:"1. Install Kafka Connect and Connector",id:"1-install-kafka-connect-and-connector",level:3},{value:"2. Download and install the JDBC Driver",id:"2-download-and-install-the-jdbc-driver",level:3},{value:"3. Prepare Configuration",id:"3-prepare-configuration",level:3},{value:"4. Create the ClickHouse table",id:"4-create-the-clickhouse-table",level:3},{value:"5. Start Kafka Connect",id:"5-start-kafka-connect",level:3},{value:"6. Add data to Kafka",id:"6-add-data-to-kafka",level:3},{value:"Recommended Further Reading",id:"recommended-further-reading",level:2}],d={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"jdbc-connector"},"JDBC Connector"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"This connector should only be used if your data is simple and consists of primitive data types e.g., int. ClickHouse specific types such as maps are not supported.")),(0,o.kt)("p",null,"For our examples, we utilize the Confluent distribution of Kafka Connect."),(0,o.kt)("p",null,"Below we describe a simple installation, pulling messages from a single Kafka topic and inserting rows into a ClickHouse table. We recommend Confluent Cloud, which offers a generous free tier for those who do not have a Kafka environment. Either adapt the following examples to your own dataset or utilize the ",(0,o.kt)("a",{parentName:"p",href:"/docs/en/integrations/data-ingestion/kafka/code/producer/"},"sample data and insertion script"),"."),(0,o.kt)("p",null,"Note that a schema is required for the JDBC Connector (You cannot use plain JSON or CSV with the JDBC connector). Whilst the schema can be encoded in each message; it is ",(0,o.kt)("a",{parentName:"p",href:"https://www.confluent.io/blog/kafka-connect-deep-dive-converters-serialization-explained/#json-schemas"},"strongly advised to use the Confluent schema registr"),"y to avoid the associated overhead. The insertion script provided automatically infers a schema from the messages and inserts this to the registry - this script can thus be reused for other datasets. Kafka's keys are assumed to be Strings. Further details on Kafka schemas can be found ",(0,o.kt)("a",{parentName:"p",href:"https://docs.confluent.io/platform/current/schema-registry/index.html"},"here"),"."),(0,o.kt)("h2",{id:"steps"},"Steps"),(0,o.kt)("h3",{id:"1-install-kafka-connect-and-connector"},"1. Install Kafka Connect and Connector"),(0,o.kt)("p",null,"We assume you have downloaded the Confluent package and installed it locally. Follow the installation instructions for installing the connector as documented ",(0,o.kt)("a",{parentName:"p",href:"https://docs.confluent.io/kafka-connect-jdbc/current/#install-the-jdbc-connector"},"here"),"."),(0,o.kt)("p",null,"If you use the confluent-hub installation method, your local configuration files will be updated."),(0,o.kt)("p",null,"For sending data to ClickHouse from Kafka, we use the Sink component of the connector."),(0,o.kt)("h3",{id:"2-download-and-install-the-jdbc-driver"},"2. Download and install the JDBC Driver"),(0,o.kt)("p",null,"Download and install the ClickHouse JDBC driver ",(0,o.kt)("inlineCode",{parentName:"p"},"clickhouse-jdbc-<version>-shaded.jar")," from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/clickhouse-java/releases"},"here"),". Install this into Kafka Connect following the details ",(0,o.kt)("a",{parentName:"p",href:"https://docs.confluent.io/kafka-connect-jdbc/current/#installing-jdbc-drivers"},"here"),". Other drivers may work but have not been tested."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Common Issue: the docs suggest copying the jar to ",(0,o.kt)("inlineCode",{parentName:"p"},"share/java/kafka-connect-jdbc/"),". If you experience issues with Connect finding the driver, copy the driver to ",(0,o.kt)("inlineCode",{parentName:"p"},"share/confluent-hub-components/confluentinc-kafka-connect-jdbc/lib/"),". Or modify ",(0,o.kt)("inlineCode",{parentName:"p"},"plugin.path")," to include the driver - see below."))),(0,o.kt)("h3",{id:"3-prepare-configuration"},"3. Prepare Configuration"),(0,o.kt)("p",null,"Follow ",(0,o.kt)("a",{parentName:"p",href:"https://docs.confluent.io/cloud/current/cp-component/connect-cloud-config.html#set-up-a-local-connect-worker-with-cp-install"},"these instructions")," for setting up a Connect relevant to your installation type, noting the differences between a standalone and distributed cluster. If using Confluent Cloud the distributed setup is relevant."),(0,o.kt)("p",null,"The following parameters are relevant to using the JDBC connector with ClickHouse. A full parameter list can be found ",(0,o.kt)("a",{parentName:"p",href:"https://docs.confluent.io/kafka-connect-jdbc/current/sink-connector/index.html"},"here"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"_connection.url_")," - this should take the form of ",(0,o.kt)("inlineCode",{parentName:"li"},"jdbc:clickhouse://&lt;clickhouse host>:&lt;clickhouse http port>/&lt;target database>")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"connection.user")," - a user with write access to the target database"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"table.name.format"),"- ClickHouse table to insert data. This must exist."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"batch.size")," - The number of rows to send in a single batch. Ensure this set is to an appropriately large number. Per ClickHouse ",(0,o.kt)("a",{parentName:"li",href:"/docs/en/about-us/performance/#performance-when-inserting-data"},"recommendations")," a value of 1000 should be considered a minimum."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"tasks.max")," - The JDBC Sink connector supports running one or more tasks. This can be used to increase performance. Along with batch size this represents your primary means of improving performance."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"value.converter.schemas.enable")," - Set to false if using a schema registry, true if you embed your schemas in the messages."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"value.converter")," - Set according to your datatype e.g. for JSON,  \u201cio.confluent.connect.json.JsonSchemaConverter\u201d."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"key.converter")," - Set to \u201corg.apache.kafka.connect.storage.StringConverter\u201d. We utilise String keys."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"pk.mode")," - Not relevant to ClickHouse. Set to none."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"auto.create")," - Not supported and must be false."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"auto.evolve")," - We recommend false for this setting although it may be supported in the future."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"insert.mode")," - Set to \u201cinsert\u201d. Other modes are not currently supported."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"key.converter")," - Set according to the types of your keys."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"value.converter")," - Set based on the type of data on your topic. This data must have a supported schema - JSON, Avro or Protobuf formats.")),(0,o.kt)("p",null,"If using our sample dataset for testing, ensure the following are set:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"value.converter.schemas.enable")," - Set to false as we utilize a schema registry. Set to true if you are embedding the schema in each message."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"key.converter")," - Set to \u201corg.apache.kafka.connect.storage.StringConverter\u201d. We utilise String keys."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"value.converter")," - Set \u201cio.confluent.connect.json.JsonSchemaConverter\u201d."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"value.converter.schema.registry.url")," - Set to the schema server url along with the credentials for the schema server via the parameter ",(0,o.kt)("inlineCode",{parentName:"li"},"value.converter.schema.registry.basic.auth.user.info"),".")),(0,o.kt)("p",null,"Example configuration files for the Github sample data can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/kafka-samples/tree/main/github_events/jdbc_sink"},"here"),", assuming Connect is run in standalone mode and Kafka is hosted in Confluent Cloud."),(0,o.kt)("h3",{id:"4-create-the-clickhouse-table"},"4. Create the ClickHouse table"),(0,o.kt)("p",null,"Ensure the table has been created, dropping it if it already exists from previous examples. An example compatible with the reduced Github dataset is shown below. Not the absence of any Array or Map types that are not currently not supported:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE github\n(\n    file_time DateTime,\n    event_type Enum('CommitCommentEvent' = 1, 'CreateEvent' = 2, 'DeleteEvent' = 3, 'ForkEvent' = 4, 'GollumEvent' = 5, 'IssueCommentEvent' = 6, 'IssuesEvent' = 7, 'MemberEvent' = 8, 'PublicEvent' = 9, 'PullRequestEvent' = 10, 'PullRequestReviewCommentEvent' = 11, 'PushEvent' = 12, 'ReleaseEvent' = 13, 'SponsorshipEvent' = 14, 'WatchEvent' = 15, 'GistEvent' = 16, 'FollowEvent' = 17, 'DownloadEvent' = 18, 'PullRequestReviewEvent' = 19, 'ForkApplyEvent' = 20, 'Event' = 21, 'TeamAddEvent' = 22),\n    actor_login LowCardinality(String),\n    repo_name LowCardinality(String),\n    created_at DateTime,\n    updated_at DateTime,\n    action Enum('none' = 0, 'created' = 1, 'added' = 2, 'edited' = 3, 'deleted' = 4, 'opened' = 5, 'closed' = 6, 'reopened' = 7, 'assigned' = 8, 'unassigned' = 9, 'labeled' = 10, 'unlabeled' = 11, 'review_requested' = 12, 'review_request_removed' = 13, 'synchronize' = 14, 'started' = 15, 'published' = 16, 'update' = 17, 'create' = 18, 'fork' = 19, 'merged' = 20),\n    comment_id UInt64,\n    path String,\n    ref LowCardinality(String),\n    ref_type Enum('none' = 0, 'branch' = 1, 'tag' = 2, 'repository' = 3, 'unknown' = 4),\n    creator_user_login LowCardinality(String),\n    number UInt32,\n    title String,\n    state Enum('none' = 0, 'open' = 1, 'closed' = 2),\n    assignee LowCardinality(String),\n    closed_at DateTime,\n    merged_at DateTime,\n    merge_commit_sha String,\n    merged_by LowCardinality(String),\n    review_comments UInt32,\n    member_login LowCardinality(String)\n) ENGINE = MergeTree ORDER BY (event_type, repo_name, created_at)\n")),(0,o.kt)("h3",{id:"5-start-kafka-connect"},"5. Start Kafka Connect"),(0,o.kt)("p",null,"Start Kafka Connect in either ",(0,o.kt)("a",{parentName:"p",href:"https://docs.confluent.io/cloud/current/cp-component/connect-cloud-config.html#standalone-cluster"},"standalone")," or ",(0,o.kt)("a",{parentName:"p",href:"https://docs.confluent.io/cloud/current/cp-component/connect-cloud-config.html#distributed-cluster"},"distributed")," mode. For standalone mode, using the ",(0,o.kt)("a",{parentName:"p",href:"/docs/en/integrations/data-ingestion/kafka/code/connectors/"},"sample configurations"),", this is as simple as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./bin/connect-standalone connect.properties.ini github-jdbc-sink.properties.ini\n")),(0,o.kt)("h3",{id:"6-add-data-to-kafka"},"6. Add data to Kafka"),(0,o.kt)("p",null,"Insert messages to Kafka using the ",(0,o.kt)("a",{parentName:"p",href:"/docs/en/integrations/data-ingestion/kafka/code/producer/"},"script and config")," provided. You will need to modify github.config to include your Kafka credentials. The script is currently configured for use with Confluent Cloud."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"python producer.py -c github.config  \n")),(0,o.kt)("p",null,"This script can be used to insert any ndjson file into a Kafka topic. This will attempt to infer a schema for you automatically. The sample config provided will only insert 10k messages - modify ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/clickhouse-docs/tree/main/docs/en/integrations/data-ingestion/kafka/code/producer/github.config#L25"},"here")," if required. This configuration also removes any incompatible Array fields from the dataset during insertion to Kafka."),(0,o.kt)("p",null,"This is required for the JDBC connector to convert messages to INSERT statements. If you are using your own data, ensure you either insert a schema with every message (setting _value.converter.schemas.enable _to true) or ensure your client publishes messages referencing a schema to the registry."),(0,o.kt)("p",null,"Kafka Connect should begin consuming messages and inserting rows into ClickHouse. Note that warnings regards \u201c","[JDBC Compliant Mode]"," Transaction is not supported.\u201d are expected and can be ignored."),(0,o.kt)("p",null,"A simple read on the target table \u201cGithub\u201d should confirm data insertion."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT count() FROM default.github;\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-response"},"| count\\(\\) |\n| :--- |\n| 10000 |\n")),(0,o.kt)("h2",{id:"recommended-further-reading"},"Recommended Further Reading"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.confluent.io/kafka-connect-jdbc/current/sink-connector/sink_config_options.html#sink-config-options"},"Kafka Sink Configuration Parameters")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.confluent.io/blog/kafka-connect-deep-dive-jdbc-source-connector"},"Kafka Connect Deep Dive \u2013 JDBC Source Connector")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://rmoff.net/2021/03/12/kafka-connect-jdbc-sink-deep-dive-working-with-primary-keys/"},"Kafka Connect JDBC Sink deep-dive: Working with Primary Keys")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=b-3qN_tlYR4&t=981s"},"Kafka Connect in Action: JDBC Sink")," - for those who prefer to watch over read."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.confluent.io/blog/kafka-connect-deep-dive-converters-serialization-explained/#json-schemas"},"Kafka Connect Deep Dive \u2013 Converters and Serialization Explained"))))}u.isMDXComponent=!0}}]);