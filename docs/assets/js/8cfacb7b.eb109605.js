"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[90193],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),h=r,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||i;return a?n.createElement(m,o(o({ref:t},c),{},{components:a})):n.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},65392:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={slug:"/en/engines/table-engines/mergetree-family/replication",sidebar_position:20,sidebar_label:"Data Replication"},o="Data Replication",l={unversionedId:"en/engines/table-engines/mergetree-family/replication",id:"en/engines/table-engines/mergetree-family/replication",title:"Data Replication",description:"In ClickHouse Cloud replication is managed for you. Please create your tables without adding arguments.  For example, in the text below you would replace:",source:"@site/docs/en/engines/table-engines/mergetree-family/replication.md",sourceDirName:"en/engines/table-engines/mergetree-family",slug:"/en/engines/table-engines/mergetree-family/replication",permalink:"/docs/en/engines/table-engines/mergetree-family/replication",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/engines/table-engines/mergetree-family/replication.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{slug:"/en/engines/table-engines/mergetree-family/replication",sidebar_position:20,sidebar_label:"Data Replication"},sidebar:"sqlreference",previous:{title:"MergeTree",permalink:"/docs/en/engines/table-engines/mergetree-family/mergetree"},next:{title:"Custom Partitioning Key",permalink:"/docs/en/engines/table-engines/mergetree-family/custom-partitioning-key"}},s={},p=[{value:"Creating Replicated Tables",id:"creating-replicated-tables",level:2},{value:"Replicated*MergeTree parameters",id:"replicatedmergetree-parameters",level:3},{value:"zoo_path",id:"zoo_path",level:4},{value:"replica_name",id:"replica_name",level:4},{value:"other_parameters",id:"other_parameters",level:4},{value:"Recovery After Failures",id:"recovery-after-failures",level:2},{value:"Recovery After Complete Data Loss",id:"recovery-after-complete-data-loss",level:2},{value:"Converting from MergeTree to ReplicatedMergeTree",id:"converting-from-mergetree-to-replicatedmergetree",level:2},{value:"Converting from ReplicatedMergeTree to MergeTree",id:"converting-from-replicatedmergetree-to-mergetree",level:2},{value:"Recovery When Metadata in the ClickHouse Keeper Cluster Is Lost or Damaged",id:"recovery-when-metadata-in-the-zookeeper-cluster-is-lost-or-damaged",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"data-replication"},"Data Replication"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"In ClickHouse Cloud replication is managed for you. Please create your tables without adding arguments.  For example, in the text below you would replace:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"ENGINE = ReplicatedReplacingMergeTree('/clickhouse/tables/{shard}/table_name', '{replica}', ver)\n")),(0,r.kt)("p",{parentName:"admonition"},"with:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"ENGINE = ReplicatedReplacingMergeTree\n"))),(0,r.kt)("p",null,"Replication is only supported for tables in the MergeTree family:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ReplicatedMergeTree"),(0,r.kt)("li",{parentName:"ul"},"ReplicatedSummingMergeTree"),(0,r.kt)("li",{parentName:"ul"},"ReplicatedReplacingMergeTree"),(0,r.kt)("li",{parentName:"ul"},"ReplicatedAggregatingMergeTree"),(0,r.kt)("li",{parentName:"ul"},"ReplicatedCollapsingMergeTree"),(0,r.kt)("li",{parentName:"ul"},"ReplicatedVersionedCollapsingMergeTree"),(0,r.kt)("li",{parentName:"ul"},"ReplicatedGraphiteMergeTree")),(0,r.kt)("p",null,"Replication works at the level of an individual table, not the entire server. A server can store both replicated and non-replicated tables at the same time."),(0,r.kt)("p",null,"Replication does not depend on sharding. Each shard has its own independent replication."),(0,r.kt)("p",null,"Compressed data for ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ALTER")," queries is replicated (for more information, see the documentation for ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/alter/#query_language_queries_alter"},"ALTER"),")."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"CREATE"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"DROP"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ATTACH"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"DETACH")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"RENAME")," queries are executed on a single server and are not replicated:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"CREATE TABLE")," query creates a new replicatable table on the server where the query is run. If this table already exists on other servers, it adds a new replica."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"DROP TABLE")," query deletes the replica located on the server where the query is run."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"RENAME")," query renames the table on one of the replicas. In other words, replicated tables can have different names on different replicas.")),(0,r.kt)("p",null,"ClickHouse uses ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/guides/sre/keeper/clickhouse-keeper"},"ClickHouse Keeper")," for storing replicas meta information. It is possible to use ZooKeeper version 3.4.5 or newer, but ClickHouse Keeper is recommended."),(0,r.kt)("p",null,"To use replication, set parameters in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/operations/server-configuration-parameters/settings/#server-settings_zookeeper"},"zookeeper")," server configuration section."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Don\u2019t neglect the security setting. ClickHouse supports the ",(0,r.kt)("inlineCode",{parentName:"p"},"digest")," ",(0,r.kt)("a",{parentName:"p",href:"https://zookeeper.apache.org/doc/current/zookeeperProgrammers.html#sc_ZooKeeperAccessControl"},"ACL scheme")," of the ZooKeeper security subsystem.")),(0,r.kt)("p",null,"Example of setting the addresses of the ClickHouse Keeper cluster:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<zookeeper>\n    <node>\n        <host>example1</host>\n        <port>2181</port>\n    </node>\n    <node>\n        <host>example2</host>\n        <port>2181</port>\n    </node>\n    <node>\n        <host>example3</host>\n        <port>2181</port>\n    </node>\n</zookeeper>\n")),(0,r.kt)("p",null,"ClickHouse also supports storing replicas meta information in an auxiliary ZooKeeper cluster. Do this by providing the ZooKeeper cluster name and path as engine arguments.\nIn other words, it supports storing the metadata of different tables in different ZooKeeper clusters."),(0,r.kt)("p",null,"Example of setting the addresses of the auxiliary ZooKeeper cluster:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<auxiliary_zookeepers>\n    <zookeeper2>\n        <node>\n            <host>example_2_1</host>\n            <port>2181</port>\n        </node>\n        <node>\n            <host>example_2_2</host>\n            <port>2181</port>\n        </node>\n        <node>\n            <host>example_2_3</host>\n            <port>2181</port>\n        </node>\n    </zookeeper2>\n    <zookeeper3>\n        <node>\n            <host>example_3_1</host>\n            <port>2181</port>\n        </node>\n    </zookeeper3>\n</auxiliary_zookeepers>\n")),(0,r.kt)("p",null,"To store table metadata in an auxiliary ZooKeeper cluster instead of the default ZooKeeper cluster, we can use SQL to create the table with\nReplicatedMergeTree engine as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"CREATE TABLE table_name ( ... ) ENGINE = ReplicatedMergeTree('zookeeper_name_configured_in_auxiliary_zookeepers:path', 'replica_name') ...\n")),(0,r.kt)("p",null,"You can specify any existing ZooKeeper cluster and the system will use a directory on it for its own data (the directory is specified when creating a replicatable table)."),(0,r.kt)("p",null,"If ZooKeeper is not set in the config file, you can\u2019t create replicated tables, and any existing replicated tables will be read-only."),(0,r.kt)("p",null,"ZooKeeper is not used in ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT")," queries because replication does not affect the performance of ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT")," and queries run just as fast as they do for non-replicated tables. When querying distributed replicated tables, ClickHouse behavior is controlled by the settings ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/operations/settings/settings/#settings-max_replica_delay_for_distributed_queries"},"max_replica_delay_for_distributed_queries")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/operations/settings/settings/#settings-fallback_to_stale_replicas_for_distributed_queries"},"fallback_to_stale_replicas_for_distributed_queries"),"."),(0,r.kt)("p",null,"For each ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT")," query, approximately ten entries are added to ZooKeeper through several transactions. (To be more precise, this is for each inserted block of data; an INSERT query contains one block or one block per ",(0,r.kt)("inlineCode",{parentName:"p"},"max_insert_block_size = 1048576")," rows.) This leads to slightly longer latencies for ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT")," compared to non-replicated tables. But if you follow the recommendations to insert data in batches of no more than one ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT")," per second, it does not create any problems. The entire ClickHouse cluster used for coordinating one ZooKeeper cluster has a total of several hundred ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERTs")," per second. The throughput on data inserts (the number of rows per second) is just as high as for non-replicated data."),(0,r.kt)("p",null,"For very large clusters, you can use different ZooKeeper clusters for different shards. However, from our experience this has not proven necessary based on production clusters with approximately 300 servers."),(0,r.kt)("p",null,"Replication is asynchronous and multi-master. ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT")," queries (as well as ",(0,r.kt)("inlineCode",{parentName:"p"},"ALTER"),") can be sent to any available server. Data is inserted on the server where the query is run, and then it is copied to the other servers. Because it is asynchronous, recently inserted data appears on the other replicas with some latency. If part of the replicas are not available, the data is written when they become available. If a replica is available, the latency is the amount of time it takes to transfer the block of compressed data over the network. The number of threads performing background tasks for replicated tables can be set by ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/operations/server-configuration-parameters/settings/#background_schedule_pool_size"},"background_schedule_pool_size")," setting."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ReplicatedMergeTree")," engine uses a separate thread pool for replicated fetches. Size of the pool is limited by the ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/operations/settings/settings/#background_fetches_pool_size"},"background_fetches_pool_size")," setting which can be tuned with a server restart."),(0,r.kt)("p",null,"By default, an INSERT query waits for confirmation of writing the data from only one replica. If the data was successfully written to only one replica and the server with this replica ceases to exist, the stored data will be lost. To enable getting confirmation of data writes from multiple replicas, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"insert_quorum")," option."),(0,r.kt)("p",null,"Each block of data is written atomically. The INSERT query is divided into blocks up to ",(0,r.kt)("inlineCode",{parentName:"p"},"max_insert_block_size = 1048576")," rows. In other words, if the ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT")," query has less than 1048576 rows, it is made atomically."),(0,r.kt)("p",null,"Data blocks are deduplicated. For multiple writes of the same data block (data blocks of the same size containing the same rows in the same order), the block is only written once. The reason for this is in case of network failures when the client application does not know if the data was written to the DB, so the ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT")," query can simply be repeated. It does not matter which replica INSERTs were sent to with identical data. ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERTs")," are idempotent. Deduplication parameters are controlled by ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/operations/server-configuration-parameters/settings/#server_configuration_parameters-merge_tree"},"merge_tree")," server settings."),(0,r.kt)("p",null,"During replication, only the source data to insert is transferred over the network. Further data transformation (merging) is coordinated and performed on all the replicas in the same way. This minimizes network usage, which means that replication works well when replicas reside in different datacenters. (Note that duplicating data in different datacenters is the main goal of replication.)"),(0,r.kt)("p",null,"You can have any number of replicas of the same data. Based on our experiences, a relatively reliable and convenient solution could use double replication in production, with each server using RAID-5 or RAID-6 (and RAID-10 in some cases)."),(0,r.kt)("p",null,"The system monitors data synchronicity on replicas and is able to recover after a failure. Failover is automatic (for small differences in data) or semi-automatic (when data differs too much, which may indicate a configuration error)."),(0,r.kt)("h2",{id:"creating-replicated-tables"},"Creating Replicated Tables"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"In ClickHouse Cloud replication is managed for you. Please create your tables without adding arguments.  For example, in the text below you would replace:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"ENGINE = ReplicatedReplacingMergeTree('/clickhouse/tables/{shard}/table_name', '{replica}', ver)\n")),(0,r.kt)("p",{parentName:"admonition"},"with:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"ENGINE = ReplicatedReplacingMergeTree\n"))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Replicated")," prefix is added to the table engine name. For example:",(0,r.kt)("inlineCode",{parentName:"p"},"ReplicatedMergeTree"),"."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Adding ",(0,r.kt)("inlineCode",{parentName:"p"},"Replicated")," is optional in ClickHouse Cloud, as all of the tables are replicated.")),(0,r.kt)("h3",{id:"replicatedmergetree-parameters"},"Replicated","*","MergeTree parameters"),(0,r.kt)("h4",{id:"zoo_path"},"zoo_path"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"zoo_path")," \u2014 The path to the table in ClickHouse Keeper."),(0,r.kt)("h4",{id:"replica_name"},"replica_name"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"replica_name")," \u2014 The replica name in ClickHouse Keeper."),(0,r.kt)("h4",{id:"other_parameters"},"other_parameters"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"other_parameters")," \u2014 Parameters of an engine which is used for creating the replicated version, for example, version in ",(0,r.kt)("inlineCode",{parentName:"p"},"ReplacingMergeTree"),"."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE table_name\n(\n    EventDate DateTime,\n    CounterID UInt32,\n    UserID UInt32,\n    ver UInt16\n) ENGINE = ReplicatedReplacingMergeTree('/clickhouse/tables/{shard}/table_name', '{replica}', ver)\nPARTITION BY toYYYYMM(EventDate)\nORDER BY (CounterID, EventDate, intHash32(UserID))\nSAMPLE BY intHash32(UserID);\n")),(0,r.kt)("details",{markdown:"1"},(0,r.kt)("summary",null,"Example in deprecated syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE table_name\n(\n    EventDate DateTime,\n    CounterID UInt32,\n    UserID UInt32\n) ENGINE = ReplicatedMergeTree('/clickhouse/tables/{shard}/table_name', '{replica}', EventDate, intHash32(UserID), (CounterID, EventDate, intHash32(UserID), EventTime), 8192);\n"))),(0,r.kt)("p",null,"As the example shows, these parameters can contain substitutions in curly brackets. The substituted values are taken from the ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/operations/server-configuration-parameters/settings/#macros"},"macros")," section of the configuration file."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<macros>\n    <shard>02</shard>\n    <replica>example05-02-1</replica>\n</macros>\n")),(0,r.kt)("p",null,"The path to the table in ClickHouse Keeper should be unique for each replicated table. Tables on different shards should have different paths.\nIn this case, the path consists of the following parts:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"/clickhouse/tables/")," is the common prefix. We recommend using exactly this one."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"{shard}")," will be expanded to the shard identifier."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"table_name")," is the name of the node for the table in ClickHouse Keeper. It is a good idea to make it the same as the table name. It is defined explicitly, because in contrast to the table name, it does not change after a RENAME query.\n",(0,r.kt)("em",{parentName:"p"},"HINT"),": you could add a database name in front of ",(0,r.kt)("inlineCode",{parentName:"p"},"table_name")," as well. E.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"db_name.table_name")),(0,r.kt)("p",null,"The two built-in substitutions ",(0,r.kt)("inlineCode",{parentName:"p"},"{database}")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"{table}")," can be used, they expand into the table name and the database name respectively (unless these macros are defined in the ",(0,r.kt)("inlineCode",{parentName:"p"},"macros")," section). So the zookeeper path can be specified as ",(0,r.kt)("inlineCode",{parentName:"p"},"'/clickhouse/tables/{shard}/{database}/{table}'"),".\nBe careful with table renames when using these built-in substitutions. The path in ClickHouse Keeper cannot be changed, and when the table is renamed, the macros will expand into a different path, the table will refer to a path that does not exist in ClickHouse Keeper, and will go into read-only mode."),(0,r.kt)("p",null,"The replica name identifies different replicas of the same table. You can use the server name for this, as in the example. The name only needs to be unique within each shard."),(0,r.kt)("p",null,"You can define the parameters explicitly instead of using substitutions. This might be convenient for testing and for configuring small clusters. However, you can\u2019t use distributed DDL queries (",(0,r.kt)("inlineCode",{parentName:"p"},"ON CLUSTER"),") in this case."),(0,r.kt)("p",null,"When working with large clusters, we recommend using substitutions because they reduce the probability of error."),(0,r.kt)("p",null,"You can specify default arguments for ",(0,r.kt)("inlineCode",{parentName:"p"},"Replicated")," table engine in the server configuration file. For instance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<default_replica_path>/clickhouse/tables/{shard}/{database}/{table}</default_replica_path>\n<default_replica_name>{replica}</default_replica_name>\n")),(0,r.kt)("p",null,"In this case, you can omit arguments when creating tables:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE table_name (\n    x UInt32\n) ENGINE = ReplicatedMergeTree\nORDER BY x;\n")),(0,r.kt)("p",null,"It is equivalent to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE table_name (\n    x UInt32\n) ENGINE = ReplicatedMergeTree('/clickhouse/tables/{shard}/{database}/table_name', '{replica}')\nORDER BY x;\n")),(0,r.kt)("p",null,"Run the ",(0,r.kt)("inlineCode",{parentName:"p"},"CREATE TABLE")," query on each replica. This query creates a new replicated table, or adds a new replica to an existing one."),(0,r.kt)("p",null,"If you add a new replica after the table already contains some data on other replicas, the data will be copied from the other replicas to the new one after running the query. In other words, the new replica syncs itself with the others."),(0,r.kt)("p",null,"To delete a replica, run ",(0,r.kt)("inlineCode",{parentName:"p"},"DROP TABLE"),". However, only one replica is deleted \u2013 the one that resides on the server where you run the query."),(0,r.kt)("h2",{id:"recovery-after-failures"},"Recovery After Failures"),(0,r.kt)("p",null,"If ClickHouse Keeper is unavailable when a server starts, replicated tables switch to read-only mode. The system periodically attempts to connect to ClickHouse Keeper."),(0,r.kt)("p",null,"If ClickHouse Keeper is unavailable during an ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT"),", or an error occurs when interacting with ClickHouse Keeper, an exception is thrown."),(0,r.kt)("p",null,"After connecting to ClickHouse Keeper, the system checks whether the set of data in the local file system matches the expected set of data (ClickHouse Keeper stores this information). If there are minor inconsistencies, the system resolves them by syncing data with the replicas."),(0,r.kt)("p",null,"If the system detects broken data parts (with the wrong size of files) or unrecognized parts (parts written to the file system but not recorded in ClickHouse Keeper), it moves them to the ",(0,r.kt)("inlineCode",{parentName:"p"},"detached")," subdirectory (they are not deleted). Any missing parts are copied from the replicas."),(0,r.kt)("p",null,"Note that ClickHouse does not perform any destructive actions such as automatically deleting a large amount of data."),(0,r.kt)("p",null,"When the server starts (or establishes a new session with ClickHouse Keeper), it only checks the quantity and sizes of all files. If the file sizes match but bytes have been changed somewhere in the middle, this is not detected immediately, but only when attempting to read the data for a ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT")," query. The query throws an exception about a non-matching checksum or size of a compressed block. In this case, data parts are added to the verification queue and copied from the replicas if necessary."),(0,r.kt)("p",null,"If the local set of data differs too much from the expected one, a safety mechanism is triggered. The server enters this in the log and refuses to launch. The reason for this is that this case may indicate a configuration error, such as if a replica on a shard was accidentally configured like a replica on a different shard. However, the thresholds for this mechanism are set fairly low, and this situation might occur during normal failure recovery. In this case, data is restored semi-automatically - by \u201cpushing a button\u201d."),(0,r.kt)("p",null,"To start recovery, create the node ",(0,r.kt)("inlineCode",{parentName:"p"},"/path_to_table/replica_name/flags/force_restore_data")," in ClickHouse Keeper with any content, or run the command to restore all replicated tables:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -u clickhouse touch /var/lib/clickhouse/flags/force_restore_data\n")),(0,r.kt)("p",null,"Then restart the server. On start, the server deletes these flags and starts recovery."),(0,r.kt)("h2",{id:"recovery-after-complete-data-loss"},"Recovery After Complete Data Loss"),(0,r.kt)("p",null,"If all data and metadata disappeared from one of the servers, follow these steps for recovery:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install ClickHouse on the server. Define substitutions correctly in the config file that contains the shard identifier and replicas, if you use them."),(0,r.kt)("li",{parentName:"ol"},"If you had unreplicated tables that must be manually duplicated on the servers, copy their data from a replica (in the directory ",(0,r.kt)("inlineCode",{parentName:"li"},"/var/lib/clickhouse/data/db_name/table_name/"),")."),(0,r.kt)("li",{parentName:"ol"},"Copy table definitions located in ",(0,r.kt)("inlineCode",{parentName:"li"},"/var/lib/clickhouse/metadata/")," from a replica. If a shard or replica identifier is defined explicitly in the table definitions, correct it so that it corresponds to this replica. (Alternatively, start the server and make all the ",(0,r.kt)("inlineCode",{parentName:"li"},"ATTACH TABLE")," queries that should have been in the .sql files in ",(0,r.kt)("inlineCode",{parentName:"li"},"/var/lib/clickhouse/metadata/"),".)"),(0,r.kt)("li",{parentName:"ol"},"To start recovery, create the ClickHouse Keeper node ",(0,r.kt)("inlineCode",{parentName:"li"},"/path_to_table/replica_name/flags/force_restore_data")," with any content, or run the command to restore all replicated tables: ",(0,r.kt)("inlineCode",{parentName:"li"},"sudo -u clickhouse touch /var/lib/clickhouse/flags/force_restore_data"))),(0,r.kt)("p",null,"Then start the server (restart, if it is already running). Data will be downloaded from replicas."),(0,r.kt)("p",null,"An alternative recovery option is to delete information about the lost replica from ClickHouse Keeper (",(0,r.kt)("inlineCode",{parentName:"p"},"/path_to_table/replica_name"),"), then create the replica again as described in \u201c",(0,r.kt)("a",{parentName:"p",href:"#creating-replicated-tables"},"Creating replicated tables"),"\u201d."),(0,r.kt)("p",null,"There is no restriction on network bandwidth during recovery. Keep this in mind if you are restoring many replicas at once."),(0,r.kt)("h2",{id:"converting-from-mergetree-to-replicatedmergetree"},"Converting from MergeTree to ReplicatedMergeTree"),(0,r.kt)("p",null,"We use the term ",(0,r.kt)("inlineCode",{parentName:"p"},"MergeTree")," to refer to all table engines in the ",(0,r.kt)("inlineCode",{parentName:"p"},"MergeTree family"),", the same as for ",(0,r.kt)("inlineCode",{parentName:"p"},"ReplicatedMergeTree"),"."),(0,r.kt)("p",null,"If you had a ",(0,r.kt)("inlineCode",{parentName:"p"},"MergeTree")," table that was manually replicated, you can convert it to a replicated table. You might need to do this if you have already collected a large amount of data in a ",(0,r.kt)("inlineCode",{parentName:"p"},"MergeTree")," table and now you want to enable replication."),(0,r.kt)("p",null,"If the data differs on various replicas, first sync it, or delete this data on all the replicas except one."),(0,r.kt)("p",null,"Rename the existing MergeTree table, then create a ",(0,r.kt)("inlineCode",{parentName:"p"},"ReplicatedMergeTree")," table with the old name.\nMove the data from the old table to the ",(0,r.kt)("inlineCode",{parentName:"p"},"detached")," subdirectory inside the directory with the new table data (",(0,r.kt)("inlineCode",{parentName:"p"},"/var/lib/clickhouse/data/db_name/table_name/"),").\nThen run ",(0,r.kt)("inlineCode",{parentName:"p"},"ALTER TABLE ATTACH PARTITION")," on one of the replicas to add these data parts to the working set."),(0,r.kt)("h2",{id:"converting-from-replicatedmergetree-to-mergetree"},"Converting from ReplicatedMergeTree to MergeTree"),(0,r.kt)("p",null,"Create a MergeTree table with a different name. Move all the data from the directory with the ",(0,r.kt)("inlineCode",{parentName:"p"},"ReplicatedMergeTree")," table data to the new table\u2019s data directory. Then delete the ",(0,r.kt)("inlineCode",{parentName:"p"},"ReplicatedMergeTree")," table and restart the server."),(0,r.kt)("p",null,"If you want to get rid of a ",(0,r.kt)("inlineCode",{parentName:"p"},"ReplicatedMergeTree")," table without launching the server:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Delete the corresponding ",(0,r.kt)("inlineCode",{parentName:"li"},".sql")," file in the metadata directory (",(0,r.kt)("inlineCode",{parentName:"li"},"/var/lib/clickhouse/metadata/"),")."),(0,r.kt)("li",{parentName:"ul"},"Delete the corresponding path in ClickHouse Keeper (",(0,r.kt)("inlineCode",{parentName:"li"},"/path_to_table/replica_name"),").")),(0,r.kt)("p",null,"After this, you can launch the server, create a ",(0,r.kt)("inlineCode",{parentName:"p"},"MergeTree")," table, move the data to its directory, and then restart the server."),(0,r.kt)("h2",{id:"recovery-when-metadata-in-the-zookeeper-cluster-is-lost-or-damaged"},"Recovery When Metadata in the ClickHouse Keeper Cluster Is Lost or Damaged"),(0,r.kt)("p",null,"If the data in ClickHouse Keeper was lost or damaged, you can save data by moving it to an unreplicated table as described above."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"See Also")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/en/operations/server-configuration-parameters/settings/#background_schedule_pool_size"},"background_schedule_pool_size")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/en/operations/server-configuration-parameters/settings/#background_fetches_pool_size"},"background_fetches_pool_size")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/en/operations/settings/settings/#execute-merges-on-single-replica-time-threshold"},"execute_merges_on_single_replica_time_threshold")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/en/operations/settings/merge-tree-settings/#max_replicated_fetches_network_bandwidth"},"max_replicated_fetches_network_bandwidth")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/en/operations/settings/merge-tree-settings/#max_replicated_sends_network_bandwidth"},"max_replicated_sends_network_bandwidth"))))}u.isMDXComponent=!0}}]);