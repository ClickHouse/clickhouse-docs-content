"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[30485],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=i,g=m["".concat(o,".").concat(d)]||m[d]||p[d]||r;return n?a.createElement(g,s(s({ref:t},c),{},{components:n})):a.createElement(g,s({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,s[1]=l;for(var u=2;u<r;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},25153:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var a=n(87462),i=(n(67294),n(3905));const r={slug:"/en/engines/table-engines/integrations/nats",sidebar_position:14,sidebar_label:"NATS"},s="NATS Engine",l={unversionedId:"en/engines/table-engines/integrations/nats",id:"en/engines/table-engines/integrations/nats",title:"NATS Engine",description:"redisstreams-engine}",source:"@site/docs/en/engines/table-engines/integrations/nats.md",sourceDirName:"en/engines/table-engines/integrations",slug:"/en/engines/table-engines/integrations/nats",permalink:"/docs/en/engines/table-engines/integrations/nats",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/engines/table-engines/integrations/nats.md",tags:[],version:"current",sidebarPosition:14,frontMatter:{slug:"/en/engines/table-engines/integrations/nats",sidebar_position:14,sidebar_label:"NATS"},sidebar:"english",previous:{title:"MaterializedPostgreSQL",permalink:"/docs/en/engines/table-engines/integrations/materialized-postgresql"},next:{title:"Special",permalink:"/docs/en/engines/table-engines/special/"}},o={},u=[{value:"Creating a Table",id:"table_engine-redisstreams-creating-a-table",level:2},{value:"Description",id:"description",level:2},{value:"Virtual Columns",id:"virtual-columns",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"redisstreams-engine"},"NATS Engine"),(0,i.kt)("p",null,"This engine allows integrating ClickHouse with ",(0,i.kt)("a",{parentName:"p",href:"https://nats.io/"},"NATS"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"NATS")," lets you:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Publish or subcribe to message subjects."),(0,i.kt)("li",{parentName:"ul"},"Process new messages as they become available.")),(0,i.kt)("h2",{id:"table_engine-redisstreams-creating-a-table"},"Creating a Table"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE [IF NOT EXISTS] [db.]table_name [ON CLUSTER cluster]\n(\n    name1 [type1] [DEFAULT|MATERIALIZED|ALIAS expr1],\n    name2 [type2] [DEFAULT|MATERIALIZED|ALIAS expr2],\n    ...\n) ENGINE = NATS SETTINGS\n    nats_url = 'host:port',\n    nats_subjects = 'subject1,subject2,...',\n    nats_format = 'data_format'[,]\n    [nats_row_delimiter = 'delimiter_symbol',]\n    [nats_schema = '',]\n    [nats_num_consumers = N,]\n    [nats_queue_group = 'group_name',]\n    [nats_secure = false,]\n    [nats_max_reconnect = N,]\n    [nats_reconnect_wait = N,]\n    [nats_server_list = 'host1:port1,host2:port2,...',]\n    [nats_skip_broken_messages = N,]\n    [nats_max_block_size = N,]\n    [nats_flush_interval_ms = N,]\n    [nats_username = 'user',]\n    [nats_password = 'password']\n    [redis_password = 'clickhouse']\n")),(0,i.kt)("p",null,"Required parameters:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nats_url")," \u2013 host:port (for example, ",(0,i.kt)("inlineCode",{parentName:"li"},"localhost:5672"),").."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nats_subjects")," \u2013 List of subject for NATS table to subscribe/publsh to. Supports wildcard subjects like ",(0,i.kt)("inlineCode",{parentName:"li"},"foo.*.bar")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"baz.>")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nats_format")," \u2013 Message format. Uses the same notation as the SQL ",(0,i.kt)("inlineCode",{parentName:"li"},"FORMAT")," function, such as ",(0,i.kt)("inlineCode",{parentName:"li"},"JSONEachRow"),". For more information, see the ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/interfaces/formats"},"Formats")," section.")),(0,i.kt)("p",null,"Optional parameters:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nats_row_delimiter")," \u2013 Delimiter character, which ends the message."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nats_schema")," \u2013 Parameter that must be used if the format requires a schema definition. For example, ",(0,i.kt)("a",{parentName:"li",href:"https://capnproto.org/"},"Cap\u2019n Proto")," requires the path to the schema file and the name of the root ",(0,i.kt)("inlineCode",{parentName:"li"},"schema.capnp:Message")," object."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nats_num_consumers")," \u2013 The number of consumers per table. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"1"),". Specify more consumers if the throughput of one consumer is insufficient."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nats_queue_group")," \u2013 Name for queue group of NATS subscribers. Default is the table name."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nats_max_reconnect")," \u2013 Maximum amount of reconnection attempts per try to connect to NATS. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"5"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nats_reconnect_wait")," \u2013 Amount of time in milliseconds to sleep between each reconnect attempt. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"5000"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nats_server_list")," - Server list for connection. Can be specified to connect to NATS cluster."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nats_skip_broken_messages")," - NATS message parser tolerance to schema-incompatible messages per block. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"0"),". If ",(0,i.kt)("inlineCode",{parentName:"li"},"nats_skip_broken_messages = N")," then the engine skips ",(0,i.kt)("em",{parentName:"li"},"N")," RabbitMQ messages that cannot be parsed (a message equals a row of data)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nats_max_block_size")," - Number of row collected by poll(s) for flushing data from NATS."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nats_flush_interval_ms")," - Timeout for flushing data read from NATS."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nats_username")," - NATS username."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nats_password")," - NATS password."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nats_token")," - NATS auth token.")),(0,i.kt)("p",null,"SSL connection:"),(0,i.kt)("p",null,"For secure connection use ",(0,i.kt)("inlineCode",{parentName:"p"},"nats_secure = 1"),".\nThe default behaviour of the used library is not to check if the created TLS connection is sufficiently secure. Whether the certificate is expired, self-signed, missing or invalid: the connection is simply permitted. More strict checking of certificates can possibly be implemented in the future."),(0,i.kt)("p",null,"Writing to NATS table:"),(0,i.kt)("p",null,"If table reads only from one subject, any insert will publish to the same subject.\nHowever, if table reads from multiple subjects, we need to specify which subject we want to publish to.\nThat is why whenever inserting into table with multiple subjects, setting ",(0,i.kt)("inlineCode",{parentName:"p"},"stream_like_engine_insert_queue")," is needed.\nYou can select one of the subjects the table reads from and publish your data there. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"  CREATE TABLE queue (\n    key UInt64,\n    value UInt64\n  ) ENGINE = NATS \n    SETTINGS nats_url = 'localhost:4444',\n             nats_subjects = 'subject1,subject2',\n             nats_format = 'JSONEachRow';\n\n  INSERT INTO queue \n  SETTINGS stream_like_engine_insert_queue = 'subject2'\n  VALUES (1, 1);\n")),(0,i.kt)("p",null,"Also format settings can be added along with nats-related settings."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"  CREATE TABLE queue (\n    key UInt64,\n    value UInt64,\n    date DateTime\n  ) ENGINE = NATS \n    SETTINGS nats_url = 'localhost:4444',\n             nats_subjects = 'subject1',\n             nats_format = 'JSONEachRow',\n             date_time_input_format = 'best_effort';\n")),(0,i.kt)("p",null,"The NATS server configuration can be added using the ClickHouse config file.\nMore specifically you can add Redis password for NATS engine:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<nats>\n    <user>click</user>\n    <password>house</password>\n    <token>clickhouse</token>\n</nats>\n")),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"SELECT")," is not particularly useful for reading messages (except for debugging), because each message can be read only once. It is more practical to create real-time threads using ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/create/view"},"materialized views"),". To do this:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Use the engine to create a NATS consumer and consider it a data stream."),(0,i.kt)("li",{parentName:"ol"},"Create a table with the desired structure."),(0,i.kt)("li",{parentName:"ol"},"Create a materialized view that converts data from the engine and puts it into a previously created table.")),(0,i.kt)("p",null,"When the ",(0,i.kt)("inlineCode",{parentName:"p"},"MATERIALIZED VIEW")," joins the engine, it starts collecting data in the background. This allows you to continually receive messages from NATS and convert them to the required format using ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT"),".\nOne NATS table can have as many materialized views as you like, they do not read data from the table directly, but receive new records (in blocks), this way you can write to several tables with different detail level (with grouping - aggregation and without)."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"  CREATE TABLE queue (\n    key UInt64,\n    value UInt64\n  ) ENGINE = NATS \n    SETTINGS nats_url = 'localhost:4444',\n             nats_subjects = 'subject1',\n             nats_format = 'JSONEachRow',\n             date_time_input_format = 'best_effort';\n\n  CREATE TABLE daily (key UInt64, value UInt64)\n    ENGINE = MergeTree() ORDER BY key;\n\n  CREATE MATERIALIZED VIEW consumer TO daily\n    AS SELECT key, value FROM queue;\n\n  SELECT key, value FROM daily ORDER BY key;\n")),(0,i.kt)("p",null,"To stop receiving streams data or to change the conversion logic, detach the materialized view:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"  DETACH TABLE consumer;\n  ATTACH TABLE consumer;\n")),(0,i.kt)("p",null,"If you want to change the target table by using ",(0,i.kt)("inlineCode",{parentName:"p"},"ALTER"),", we recommend disabling the material view to avoid discrepancies between the target table and the data from the view."),(0,i.kt)("h2",{id:"virtual-columns"},"Virtual Columns"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"_subject")," - NATS message subject.")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/engines/table-engines/integrations/nats/"},"Original article")," "))}p.isMDXComponent=!0}}]);