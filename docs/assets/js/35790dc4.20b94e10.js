"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[94778],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=i,h=m["".concat(s,".").concat(u)]||m[u]||c[u]||r;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},94881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const r={slug:"/en/operations/storing-data",sidebar_position:68,sidebar_label:"External Disks for Storing Data",title:"External Disks for Storing Data"},o=void 0,l={unversionedId:"en/operations/storing-data",id:"en/operations/storing-data",title:"External Disks for Storing Data",description:"Data, processed in ClickHouse, is usually stored in the local file system \u2014 on the same machine with the ClickHouse server. That requires large-capacity disks, which can be expensive enough. To avoid that you can store the data remotely \u2014 on Amazon S3 disks or in the Hadoop Distributed File System (HDFS).",source:"@site/docs/en/operations/storing-data.md",sourceDirName:"en/operations",slug:"/en/operations/storing-data",permalink:"/docs/en/operations/storing-data",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/operations/storing-data.md",tags:[],version:"current",sidebarPosition:68,frontMatter:{slug:"/en/operations/storing-data",sidebar_position:68,sidebar_label:"External Disks for Storing Data",title:"External Disks for Storing Data"},sidebar:"english",previous:{title:"Network ports",permalink:"/docs/en/guides/sre/network-ports"},next:{title:"Configuration",permalink:"/docs/en/manage/configuration"}},s={},p=[{value:"Configuring HDFS",id:"configuring-hdfs",level:2},{value:"Using Virtual File System for Data Encryption",id:"encrypted-virtual-file-system",level:2},{value:"Using local cache",id:"using-local-cache",level:2},{value:"Storing Data on Web Server",id:"storing-data-on-webserver",level:2},{value:"Zero-copy Replication (not ready for production)",id:"zero-copy",level:2}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Data, processed in ClickHouse, is usually stored in the local file system \u2014 on the same machine with the ClickHouse server. That requires large-capacity disks, which can be expensive enough. To avoid that you can store the data remotely \u2014 on ",(0,i.kt)("a",{parentName:"p",href:"https://aws.amazon.com/s3/"},"Amazon S3")," disks or in the Hadoop Distributed File System (",(0,i.kt)("a",{parentName:"p",href:"https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/HdfsDesign.html"},"HDFS"),")."),(0,i.kt)("p",null,"To work with data stored on ",(0,i.kt)("inlineCode",{parentName:"p"},"Amazon S3")," disks use ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/integrations/s3"},"S3")," table engine, and to work with data in the Hadoop Distributed File System \u2014 ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/integrations/hdfs"},"HDFS")," table engine."),(0,i.kt)("p",null,"To load data from a web server with static files use a disk with type ",(0,i.kt)("a",{parentName:"p",href:"#storing-data-on-webserver"},"web"),"."),(0,i.kt)("h2",{id:"configuring-hdfs"},"Configuring HDFS"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/mergetree-family/mergetree"},"MergeTree")," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/log-family/log"},"Log")," family table engines can store data to HDFS using a disk with type ",(0,i.kt)("inlineCode",{parentName:"p"},"HDFS"),"."),(0,i.kt)("p",null,"Configuration markup:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<clickhouse>\n    <storage_configuration>\n        <disks>\n            <hdfs>\n                <type>hdfs</type>\n                <endpoint>hdfs://hdfs1:9000/clickhouse/</endpoint>\n            </hdfs>\n        </disks>\n        <policies>\n            <hdfs>\n                <volumes>\n                    <main>\n                        <disk>hdfs</disk>\n                    </main>\n                </volumes>\n            </hdfs>\n        </policies>\n    </storage_configuration>\n\n    <merge_tree>\n        <min_bytes_for_wide_part>0</min_bytes_for_wide_part>\n    </merge_tree>\n</clickhouse>\n")),(0,i.kt)("p",null,"Required parameters:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"endpoint")," \u2014 HDFS endpoint URL in ",(0,i.kt)("inlineCode",{parentName:"li"},"path")," format. Endpoint URL should contain a root path to store data.")),(0,i.kt)("p",null,"Optional parameters:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"min_bytes_for_seek")," \u2014 The minimal number of bytes to use seek operation instead of sequential read. Default value: ",(0,i.kt)("inlineCode",{parentName:"li"},"1 Mb"),".")),(0,i.kt)("h2",{id:"encrypted-virtual-file-system"},"Using Virtual File System for Data Encryption"),(0,i.kt)("p",null,"You can encrypt the data stored on ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/mergetree-family/mergetree/#table_engine-mergetree-s3"},"S3"),", or ",(0,i.kt)("a",{parentName:"p",href:"#configuring-hdfs"},"HDFS")," external disks, or on a local disk. To turn on the encryption mode, in the configuration file you must define a disk with the type ",(0,i.kt)("inlineCode",{parentName:"p"},"encrypted")," and choose a disk on which the data will be saved. An ",(0,i.kt)("inlineCode",{parentName:"p"},"encrypted")," disk ciphers all written files on the fly, and when you read files from an ",(0,i.kt)("inlineCode",{parentName:"p"},"encrypted")," disk it deciphers them automatically. So you can work with an ",(0,i.kt)("inlineCode",{parentName:"p"},"encrypted")," disk like with a normal one."),(0,i.kt)("p",null,"Example of disk configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<disks>\n  <disk1>\n    <type>local</type>\n    <path>/path1/</path>\n  </disk1>\n  <disk2>\n    <type>encrypted</type>\n    <disk>disk1</disk>\n    <path>path2/</path>\n    <key>_16_ascii_chars_</key>\n  </disk2>\n</disks>\n")),(0,i.kt)("p",null,"For example, when ClickHouse writes data from some table to a file ",(0,i.kt)("inlineCode",{parentName:"p"},"store/all_1_1_0/data.bin")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"disk1"),", then in fact this file will be written to the physical disk along the path ",(0,i.kt)("inlineCode",{parentName:"p"},"/path1/store/all_1_1_0/data.bin"),"."),(0,i.kt)("p",null,"When writing the same file to ",(0,i.kt)("inlineCode",{parentName:"p"},"disk2"),", it will actually be written to the physical disk at the path ",(0,i.kt)("inlineCode",{parentName:"p"},"/path1/path2/store/all_1_1_0/data.bin")," in encrypted mode."),(0,i.kt)("p",null,"Required parameters:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"type")," \u2014 ",(0,i.kt)("inlineCode",{parentName:"li"},"encrypted"),". Otherwise the encrypted disk is not created."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"disk")," \u2014 Type of disk for data storage."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"key")," \u2014 The key for encryption and decryption. Type: ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"Uint64"),". You can use ",(0,i.kt)("inlineCode",{parentName:"li"},"key_hex")," parameter to encrypt in hexadecimal form.\nYou can specify multiple keys using the ",(0,i.kt)("inlineCode",{parentName:"li"},"id")," attribute (see example above).")),(0,i.kt)("p",null,"Optional parameters:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"path")," \u2014 Path to the location on the disk where the data will be saved. If not specified, the data will be saved in the root directory."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"current_key_id")," \u2014 The key used for encryption. All the specified keys can be used for decryption, and you can always switch to another key while maintaining access to previously encrypted data."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"algorithm")," \u2014 ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/statements/create/table/#create-query-encryption-codecs"},"Algorithm")," for encryption. Possible values: ",(0,i.kt)("inlineCode",{parentName:"li"},"AES_128_CTR"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"AES_192_CTR")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"AES_256_CTR"),". Default value: ",(0,i.kt)("inlineCode",{parentName:"li"},"AES_128_CTR"),". The key length depends on the algorithm: ",(0,i.kt)("inlineCode",{parentName:"li"},"AES_128_CTR")," \u2014 16 bytes, ",(0,i.kt)("inlineCode",{parentName:"li"},"AES_192_CTR")," \u2014 24 bytes, ",(0,i.kt)("inlineCode",{parentName:"li"},"AES_256_CTR")," \u2014 32 bytes.")),(0,i.kt)("p",null,"Example of disk configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<clickhouse>\n    <storage_configuration>\n        <disks>\n            <disk_s3>\n                <type>s3</type>\n                <endpoint>...\n            </disk_s3>\n            <disk_s3_encrypted>\n                <type>encrypted</type>\n                <disk>disk_s3</disk>\n                <algorithm>AES_128_CTR</algorithm>\n                <key_hex id="0">00112233445566778899aabbccddeeff</key_hex>\n                <key_hex id="1">ffeeddccbbaa99887766554433221100</key_hex>\n                <current_key_id>1</current_key_id>\n            </disk_s3_encrypted>\n        </disks>\n    </storage_configuration>\n</clickhouse>\n')),(0,i.kt)("h2",{id:"using-local-cache"},"Using local cache"),(0,i.kt)("p",null,"It is possible to configure local cache over disks in storage configuration starting from version 22.3. For versions 22.3 - 22.7 cache is supported only for ",(0,i.kt)("inlineCode",{parentName:"p"},"s3")," disk type. For versions >= 22.8 cache is supported for any disk type: S3, Azure, Local, Encrypted, etc. Cache uses ",(0,i.kt)("inlineCode",{parentName:"p"},"LRU")," cache policy."),(0,i.kt)("p",null,"Example of configuration for versions later or equal to 22.8:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<clickhouse>\n    <storage_configuration>\n        <disks>\n            <s3>\n                <type>s3</type>\n                <endpoint>...</endpoint>\n                ... s3 configuration ...\n            </s3>\n            <cache>\n                <type>cache</type>\n                <disk>s3</disk>\n                <path>/s3_cache/</path>\n                <max_size>10Gi</max_size>\n            </cache>\n        </disks>\n        <policies>\n            <volumes>\n                <main>\n                    <disk>cache</disk>\n                </main>\n            </volumes>\n        <policies>\n    </storage_configuration>\n")),(0,i.kt)("p",null,"Example of configuration for versions earlier than 22.8:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<clickhouse>\n    <storage_configuration>\n        <disks>\n            <s3>\n                <type>s3</type>\n                <endpoint>...</endpoint>\n                ... s3 configuration ...\n                <data_cache_enabled>1</data_cache_enabled>\n                <data_cache_max_size>10737418240</data_cache_max_size>\n            </s3>\n        </disks>\n        <policies>\n            <volumes>\n                <main>\n                    <disk>s3</disk>\n                </main>\n            </volumes>\n        <policies>\n    </storage_configuration>\n")),(0,i.kt)("p",null,"Cache ",(0,i.kt)("strong",{parentName:"p"},"configuration settings"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"path")," - path to the directory with cache. Default: None, this setting is obligatory.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"max_size")," - maximum size of the cache in bytes or in readable format, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"ki, Mi, Gi, etc"),", example ",(0,i.kt)("inlineCode",{parentName:"p"},"10Gi")," (such format works starting from ",(0,i.kt)("inlineCode",{parentName:"p"},"22.10")," version). When the limit is reached, cache files are evicted according to the cache eviction policy. Default: None, this setting is obligatory.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"cache_on_write_operations")," - allow to turn on ",(0,i.kt)("inlineCode",{parentName:"p"},"write-through")," cache (caching data on any write operations: ",(0,i.kt)("inlineCode",{parentName:"p"},"INSERT")," queries, background merges). Default: ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"write-through")," cache can be disabled per query using setting ",(0,i.kt)("inlineCode",{parentName:"p"},"enable_filesystem_cache_on_write_operations")," (data is cached only if both cache config settings and corresponding query setting are enabled).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"enable_filesystem_query_cache_limit")," - allow to limit the size of cache which is downloaded within each query (depends on user setting ",(0,i.kt)("inlineCode",{parentName:"p"},"max_query_cache_size"),"). Default: ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"enable_cache_hits_threshold")," - a number, which defines how many times some data needs to be read before it will be cached. Default: ",(0,i.kt)("inlineCode",{parentName:"p"},"0"),", e.g. the data is cached at the first attempt to read it.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"do_not_evict_index_and_mark_files")," - do not evict small frequently used files according to cache policy. Default: ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),". This setting was added in version 22.8. If you used filesystem cache before this version, then it will not work on versions starting from 22.8 if this setting is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),". If you want to use this setting, clear old cache created before version 22.8 before upgrading.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"max_file_segment_size")," - a maximum size of a single cache file in bytes or in readable format (",(0,i.kt)("inlineCode",{parentName:"p"},"ki, Mi, Gi, etc"),", example ",(0,i.kt)("inlineCode",{parentName:"p"},"10Gi"),"). Default: ",(0,i.kt)("inlineCode",{parentName:"p"},"104857600")," (",(0,i.kt)("inlineCode",{parentName:"p"},"100Mi"),").")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"max_elements")," - a limit for a number of cache files. Default: ",(0,i.kt)("inlineCode",{parentName:"p"},"1048576"),"."))),(0,i.kt)("p",null,"Cache ",(0,i.kt)("strong",{parentName:"p"},"query settings"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"enable_filesystem_cache")," - allows to disable cache per query even if storage policy was configured with ",(0,i.kt)("inlineCode",{parentName:"p"},"cache")," disk type. Default: ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"read_from_filesystem_cache_if_exists_otherwise_bypass_cache")," - allows to use cache in query only if it already exists, otherwise query data will not be written to local cache storage. Default: ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"enable_filesystem_cache_on_write_operations")," - turn on ",(0,i.kt)("inlineCode",{parentName:"p"},"write-through")," cache. This setting works only if setting ",(0,i.kt)("inlineCode",{parentName:"p"},"cache_on_write_operations")," in cache configuration is turned on.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"enable_filesystem_cache_log")," - turn on logging to ",(0,i.kt)("inlineCode",{parentName:"p"},"system.filesystem_cache_log")," table. Gives a detailed view of cache usage per query. Default: ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"max_query_cache_size")," - a limit for the cache size, which can be written to local cache storage. Requires enabled ",(0,i.kt)("inlineCode",{parentName:"p"},"enable_filesystem_query_cache_limit")," in cache configuration. Default: ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"skip_download_if_exceeds_query_cache")," - allows to change the behaviour of setting ",(0,i.kt)("inlineCode",{parentName:"p"},"max_query_cache_size"),". Default: ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),". If this setting is turned on and cache download limit during query was reached, no more cache will be downloaded to cache storage. If this setting is turned off and cache download limit during query was reached, cache will still be written by cost of evicting previously downloaded (within current query) data, e.g. second behaviour allows to preserve ",(0,i.kt)("inlineCode",{parentName:"p"},"last recentltly used")," behaviour while keeping query cache limit."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"}," Warning "),"\nCache configuration settings and cache query settings correspond to the latest ClickHouse version, for earlier versions something might not be supported."),(0,i.kt)("p",null,"Cache ",(0,i.kt)("strong",{parentName:"p"},"system tables"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"system.filesystem_cache")," - system tables which shows current state of cache.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"system.filesystem_cache_log")," - system table which shows detailed cache usage per query. Requires ",(0,i.kt)("inlineCode",{parentName:"p"},"enable_filesystem_cache_log")," setting to be ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"."))),(0,i.kt)("p",null,"Cache ",(0,i.kt)("strong",{parentName:"p"},"commands"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"SYSTEM DROP FILESYSTEM CACHE (<path>) (ON CLUSTER)"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"SHOW FILESYSTEM CACHES")," -- show list of filesystem caches which were configured on the server. (For versions <= ",(0,i.kt)("inlineCode",{parentName:"p"},"22.8")," the command is named ",(0,i.kt)("inlineCode",{parentName:"p"},"SHOW CACHES"),")"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW FILESYSTEM CACHES\n")),(0,i.kt)("p",null,"Result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500Caches\u2500\u2500\u2500\u2500\u2510\n\u2502 s3_cache  \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DESCRIBE CACHE '<cache_name>'")," - show cache configuration and some general statistics for a specific cache. Cache name can be taken from ",(0,i.kt)("inlineCode",{parentName:"li"},"SHOW CACHES")," command. (For versions <= ",(0,i.kt)("inlineCode",{parentName:"li"},"22.8")," the command is named ",(0,i.kt)("inlineCode",{parentName:"li"},"DESCRIBE CACHE"),")")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"DESCRIBE CACHE 's3_cache'\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500max_size\u2500\u252c\u2500max_elements\u2500\u252c\u2500max_file_segment_size\u2500\u252c\u2500cache_on_write_operations\u2500\u252c\u2500enable_cache_hits_threshold\u2500\u252c\u2500current_size\u2500\u252c\u2500current_elements\u2500\u252c\u2500path\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500do_not_evict_index_and_mark_files\u2500\u2510\n\u2502 10000000000 \u2502      1048576 \u2502             104857600 \u2502                         1 \u2502                           0 \u2502         3276 \u2502               54 \u2502 /s3_cache/  \u2502                                 1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,"Cache current metrics:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"FilesystemCacheSize"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"FilesystemCacheElements")))),(0,i.kt)("p",null,"Cache asynchronous metrics:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"FilesystemCacheBytes"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"FilesystemCacheFiles")))),(0,i.kt)("p",null,"Cache profile events:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"CachedReadBufferReadFromSourceBytes"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"CachedReadBufferReadFromCacheBytes,"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"CachedReadBufferReadFromSourceMicroseconds"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"CachedReadBufferReadFromCacheMicroseconds"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"CachedReadBufferCacheWriteBytes"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"CachedReadBufferCacheWriteMicroseconds"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"CachedWriteBufferCacheWriteBytes"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"CachedWriteBufferCacheWriteMicroseconds")))),(0,i.kt)("h2",{id:"storing-data-on-webserver"},"Storing Data on Web Server"),(0,i.kt)("p",null,"There is a tool ",(0,i.kt)("inlineCode",{parentName:"p"},"clickhouse-static-files-uploader"),", which prepares a data directory for a given table (",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT data_paths FROM system.tables WHERE name = 'table_name'"),"). For each table you need, you get a directory of files. These files can be uploaded to, for example, a web server with static files. After this preparation, you can load this table into any ClickHouse server via ",(0,i.kt)("inlineCode",{parentName:"p"},"DiskWeb"),"."),(0,i.kt)("p",null,"This is a read-only disk. Its data is only read and never modified. A new table is loaded to this disk via ",(0,i.kt)("inlineCode",{parentName:"p"},"ATTACH TABLE")," query (see example below). Local disk is not actually used, each ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT")," query will result in a ",(0,i.kt)("inlineCode",{parentName:"p"},"http")," request to fetch required data. All modification of the table data will result in an exception, i.e. the following types of queries are not allowed: ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/create/table"},"CREATE TABLE"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/alter/"},"ALTER TABLE"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/rename/#misc_operations-rename_table"},"RENAME TABLE"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/detach"},"DETACH TABLE")," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/truncate"},"TRUNCATE TABLE"),"."),(0,i.kt)("p",null,"Web server storage is supported only for the ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/mergetree-family/mergetree"},"MergeTree")," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/log-family/log"},"Log")," engine families. To access the data stored on a ",(0,i.kt)("inlineCode",{parentName:"p"},"web")," disk, use the ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/mergetree-family/mergetree/#terms"},"storage_policy")," setting when executing the query. For example, ",(0,i.kt)("inlineCode",{parentName:"p"},"ATTACH TABLE table_web UUID '{}' (id Int32) ENGINE = MergeTree() ORDER BY id SETTINGS storage_policy = 'web'"),"."),(0,i.kt)("p",null,"A ready test case. You need to add this configuration to config:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<clickhouse>\n    <storage_configuration>\n        <disks>\n            <web>\n                <type>web</type>\n                <endpoint>https://clickhouse-datasets.s3.yandex.net/disk-with-static-files-tests/test-hits/</endpoint>\n            </web>\n        </disks>\n        <policies>\n            <web>\n                <volumes>\n                    <main>\n                        <disk>web</disk>\n                    </main>\n                </volumes>\n            </web>\n        </policies>\n    </storage_configuration>\n</clickhouse>\n")),(0,i.kt)("p",null,"And then execute this query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"ATTACH TABLE test_hits UUID '1ae36516-d62d-4218-9ae3-6516d62da218'\n(\n    WatchID UInt64,\n    JavaEnable UInt8,\n    Title String,\n    GoodEvent Int16,\n    EventTime DateTime,\n    EventDate Date,\n    CounterID UInt32,\n    ClientIP UInt32,\n    ClientIP6 FixedString(16),\n    RegionID UInt32,\n    UserID UInt64,\n    CounterClass Int8,\n    OS UInt8,\n    UserAgent UInt8,\n    URL String,\n    Referer String,\n    URLDomain String,\n    RefererDomain String,\n    Refresh UInt8,\n    IsRobot UInt8,\n    RefererCategories Array(UInt16),\n    URLCategories Array(UInt16),\n    URLRegions Array(UInt32),\n    RefererRegions Array(UInt32),\n    ResolutionWidth UInt16,\n    ResolutionHeight UInt16,\n    ResolutionDepth UInt8,\n    FlashMajor UInt8,\n    FlashMinor UInt8,\n    FlashMinor2 String,\n    NetMajor UInt8,\n    NetMinor UInt8,\n    UserAgentMajor UInt16,\n    UserAgentMinor FixedString(2),\n    CookieEnable UInt8,\n    JavascriptEnable UInt8,\n    IsMobile UInt8,\n    MobilePhone UInt8,\n    MobilePhoneModel String,\n    Params String,\n    IPNetworkID UInt32,\n    TraficSourceID Int8,\n    SearchEngineID UInt16,\n    SearchPhrase String,\n    AdvEngineID UInt8,\n    IsArtifical UInt8,\n    WindowClientWidth UInt16,\n    WindowClientHeight UInt16,\n    ClientTimeZone Int16,\n    ClientEventTime DateTime,\n    SilverlightVersion1 UInt8,\n    SilverlightVersion2 UInt8,\n    SilverlightVersion3 UInt32,\n    SilverlightVersion4 UInt16,\n    PageCharset String,\n    CodeVersion UInt32,\n    IsLink UInt8,\n    IsDownload UInt8,\n    IsNotBounce UInt8,\n    FUniqID UInt64,\n    HID UInt32,\n    IsOldCounter UInt8,\n    IsEvent UInt8,\n    IsParameter UInt8,\n    DontCountHits UInt8,\n    WithHash UInt8,\n    HitColor FixedString(1),\n    UTCEventTime DateTime,\n    Age UInt8,\n    Sex UInt8,\n    Income UInt8,\n    Interests UInt16,\n    Robotness UInt8,\n    GeneralInterests Array(UInt16),\n    RemoteIP UInt32,\n    RemoteIP6 FixedString(16),\n    WindowName Int32,\n    OpenerName Int32,\n    HistoryLength Int16,\n    BrowserLanguage FixedString(2),\n    BrowserCountry FixedString(2),\n    SocialNetwork String,\n    SocialAction String,\n    HTTPError UInt16,\n    SendTiming Int32,\n    DNSTiming Int32,\n    ConnectTiming Int32,\n    ResponseStartTiming Int32,\n    ResponseEndTiming Int32,\n    FetchTiming Int32,\n    RedirectTiming Int32,\n    DOMInteractiveTiming Int32,\n    DOMContentLoadedTiming Int32,\n    DOMCompleteTiming Int32,\n    LoadEventStartTiming Int32,\n    LoadEventEndTiming Int32,\n    NSToDOMContentLoadedTiming Int32,\n    FirstPaintTiming Int32,\n    RedirectCount Int8,\n    SocialSourceNetworkID UInt8,\n    SocialSourcePage String,\n    ParamPrice Int64,\n    ParamOrderID String,\n    ParamCurrency FixedString(3),\n    ParamCurrencyID UInt16,\n    GoalsReached Array(UInt32),\n    OpenstatServiceName String,\n    OpenstatCampaignID String,\n    OpenstatAdID String,\n    OpenstatSourceID String,\n    UTMSource String,\n    UTMMedium String,\n    UTMCampaign String,\n    UTMContent String,\n    UTMTerm String,\n    FromTag String,\n    HasGCLID UInt8,\n    RefererHash UInt64,\n    URLHash UInt64,\n    CLID UInt32,\n    YCLID UInt64,\n    ShareService String,\n    ShareURL String,\n    ShareTitle String,\n    ParsedParams Nested(\n        Key1 String,\n        Key2 String,\n        Key3 String,\n        Key4 String,\n        Key5 String,\n        ValueDouble Float64),\n    IslandID FixedString(16),\n    RequestNum UInt32,\n    RequestTry UInt8\n)\nENGINE = MergeTree()\nPARTITION BY toYYYYMM(EventDate)\nORDER BY (CounterID, EventDate, intHash32(UserID))\nSAMPLE BY intHash32(UserID)\nSETTINGS storage_policy='web';\n")),(0,i.kt)("p",null,"Required parameters:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"type")," \u2014 ",(0,i.kt)("inlineCode",{parentName:"li"},"web"),". Otherwise the disk is not created."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"endpoint")," \u2014 The endpoint URL in ",(0,i.kt)("inlineCode",{parentName:"li"},"path")," format. Endpoint URL must contain a root path to store data, where they were uploaded.")),(0,i.kt)("p",null,"Optional parameters:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"min_bytes_for_seek")," \u2014 The minimal number of bytes to use seek operation instead of sequential read. Default value: ",(0,i.kt)("inlineCode",{parentName:"li"},"1")," Mb."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"remote_fs_read_backoff_threashold")," \u2014 The maximum wait time when trying to read data for remote disk. Default value: ",(0,i.kt)("inlineCode",{parentName:"li"},"10000")," seconds."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"remote_fs_read_backoff_max_tries")," \u2014 The maximum number of attempts to read with backoff. Default value: ",(0,i.kt)("inlineCode",{parentName:"li"},"5"),".")),(0,i.kt)("p",null,"If a query fails with an exception ",(0,i.kt)("inlineCode",{parentName:"p"},"DB:Exception Unreachable URL"),", then you can try to adjust the settings: ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/operations/settings/settings/#http_connection_timeout"},"http_connection_timeout"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/operations/settings/settings/#http_receive_timeout"},"http_receive_timeout"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/operations/server-configuration-parameters/settings/#keep-alive-timeout"},"keep_alive_timeout"),"."),(0,i.kt)("p",null,"To get files for upload run:\n",(0,i.kt)("inlineCode",{parentName:"p"},"clickhouse static-files-disk-uploader --metadata-path <path> --output-dir <dir>")," (",(0,i.kt)("inlineCode",{parentName:"p"},"--metadata-path")," can be found in query ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT data_paths FROM system.tables WHERE name = 'table_name'"),")."),(0,i.kt)("p",null,"When loading files by ",(0,i.kt)("inlineCode",{parentName:"p"},"endpoint"),", they must be loaded into ",(0,i.kt)("inlineCode",{parentName:"p"},"<endpoint>/store/")," path, but config must contain only ",(0,i.kt)("inlineCode",{parentName:"p"},"endpoint"),"."),(0,i.kt)("p",null,"If URL is not reachable on disk load when the server is starting up tables, then all errors are caught. If in this case there were errors, tables can be reloaded (become visible) via ",(0,i.kt)("inlineCode",{parentName:"p"},"DETACH TABLE table_name")," -> ",(0,i.kt)("inlineCode",{parentName:"p"},"ATTACH TABLE table_name"),". If metadata was successfully loaded at server startup, then tables are available straight away."),(0,i.kt)("p",null,"Use ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/operations/settings/settings/#http-max-single-read-retries"},"http_max_single_read_retries")," setting to limit the maximum number of retries during a single HTTP read."),(0,i.kt)("h2",{id:"zero-copy"},"Zero-copy Replication (not ready for production)"),(0,i.kt)("p",null,"Zero-copy replication is possible, but not recommended, with  ",(0,i.kt)("inlineCode",{parentName:"p"},"S3")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"HDFS")," disks. Zero-copy replication means that if the data is stored remotely on several machines and needs to be synchronized, then only the metadata is replicated (paths to the data parts), but not the data itself."),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Zero-copy replication is not ready for production")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Zero-copy replication is disabled by default in ClickHouse version 22.8 and higher.  This feature is not recommended for production use."))))}c.isMDXComponent=!0}}]);