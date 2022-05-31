"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[3128],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(n),h=r,c=m["".concat(l,".").concat(h)]||m[h]||u[h]||i;return n?a.createElement(c,o(o({ref:t},d),{},{components:n})):a.createElement(c,o({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},41786:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],s={},l="zookeeper_log",p={unversionedId:"en/operations/system-tables/zookeeper_log",id:"en/operations/system-tables/zookeeper_log",title:"zookeeper_log",description:"system-zookeeper_log}",source:"@site/docs/en/operations/system-tables/zookeeper_log.md",sourceDirName:"en/operations/system-tables",slug:"/en/operations/system-tables/zookeeper_log",permalink:"/docs/en/operations/system-tables/zookeeper_log",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/operations/system-tables/zookeeper_log.md",tags:[],version:"current",frontMatter:{},sidebar:"english",previous:{title:"zookeeper",permalink:"/docs/en/operations/system-tables/zookeeper"},next:{title:"Testing Hardware",permalink:"/docs/en/operations/performance-test"}},d={},u=[],m={toc:u};function h(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"system-zookeeper_log"},"zookeeper_log"),(0,i.kt)("p",null,"This table contains information about the parameters of the request to the ZooKeeper server and the response from it."),(0,i.kt)("p",null,"For requests, only columns with request parameters are filled in, and the remaining columns are filled with default values (",(0,i.kt)("inlineCode",{parentName:"p"},"0")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"NULL"),"). When the response arrives, the data from the response is added to the other columns."),(0,i.kt)("p",null,"Columns with request parameters:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"type")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/enum"},"Enum"),") \u2014 Event type in the ZooKeeper client. Can have one of the following values:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Request")," \u2014 The request has been sent."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Response")," \u2014 The response was received."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Finalize")," \u2014 The connection is lost, no response was received."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"event_date")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/date"},"Date"),") \u2014 The date when the event happened."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"event_time")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/datetime64"},"DateTime64"),") \u2014 The date and time when the event happened."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"address")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/domains/ipv6"},"IPv6"),") \u2014 IP address of ZooKeeper server that was used to make the request."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"port")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt16"),") \u2014 The port of ZooKeeper server that was used to make the request."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"session_id")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"Int64"),") \u2014 The session ID that the ZooKeeper server sets for each connection."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"xid")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"Int32"),") \u2014 The ID of the request within the session. This is usually a sequential request number. It is the same for the request row and the paired ",(0,i.kt)("inlineCode",{parentName:"li"},"response"),"/",(0,i.kt)("inlineCode",{parentName:"li"},"finalize")," row."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"has_watch")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt8"),") \u2014 The request whether the ",(0,i.kt)("a",{parentName:"li",href:"https://zookeeper.apache.org/doc/r3.3.3/zookeeperProgrammers.html#ch_zkWatches"},"watch")," has been set."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"op_num")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/enum"},"Enum"),") \u2014 The type of request or response."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"path")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/string"},"String"),") \u2014 The path to the ZooKeeper node specified in the request, or an empty string  if the request not requires specifying a path."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"data")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/string"},"String"),") \u2014 The data written to the ZooKeeper node (for the ",(0,i.kt)("inlineCode",{parentName:"li"},"SET")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"CREATE")," requests \u2014 what the request wanted to write, for the response to the ",(0,i.kt)("inlineCode",{parentName:"li"},"GET")," request \u2014 what was read) or an empty string."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"is_ephemeral")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt8"),") \u2014 Is the ZooKeeper node being created as an ",(0,i.kt)("a",{parentName:"li",href:"https://zookeeper.apache.org/doc/r3.3.3/zookeeperProgrammers.html#Ephemeral+Nodes"},"ephemeral"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"is_sequential")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt8"),") \u2014 Is the ZooKeeper node being created as an ",(0,i.kt)("a",{parentName:"li",href:"https://zookeeper.apache.org/doc/r3.3.3/zookeeperProgrammers.html#Sequence+Nodes+--+Unique+Naming"},"sequential"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"version")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/nullable"},"Nullable(Int32)"),") \u2014 The version of the ZooKeeper node that the request expects when executing. This is supported for ",(0,i.kt)("inlineCode",{parentName:"li"},"CHECK"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"SET"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"REMOVE")," requests (is relevant ",(0,i.kt)("inlineCode",{parentName:"li"},"-1")," if the request does not check the version or ",(0,i.kt)("inlineCode",{parentName:"li"},"NULL")," for other requests that do not support version checking)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"requests_size")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt32"),") \u2014 The number of requests included in the multi request (this is a special request that consists of several consecutive ordinary requests and executes them atomically). All requests included in multi request will have the same ",(0,i.kt)("inlineCode",{parentName:"li"},"xid"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"request_idx")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt32"),") \u2014 The number of the request included in multi request (for multi request \u2014 ",(0,i.kt)("inlineCode",{parentName:"li"},"0"),", then in order from ",(0,i.kt)("inlineCode",{parentName:"li"},"1"),").")),(0,i.kt)("p",null,"Columns with request response parameters:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"zxid")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"Int64"),") \u2014 ZooKeeper transaction ID. The serial number issued by the ZooKeeper server in response to a successfully executed request (",(0,i.kt)("inlineCode",{parentName:"li"},"0")," if the request was not executed/returned an error/the client does not know whether the request was executed)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"error")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/nullable"},"Nullable(Enum)"),") \u2014 Error code. Can have many values, here are just some of them:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ZOK")," \u2014 The request was executed seccessfully."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ZCONNECTIONLOSS")," \u2014 The connection was lost."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ZOPERATIONTIMEOUT")," \u2014 The request execution timeout has expired."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ZSESSIONEXPIRED")," \u2014 The session has expired."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"NULL")," \u2014 The request is completed."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"watch_type")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/nullable"},"Nullable(Enum)"),") \u2014 The type of the ",(0,i.kt)("inlineCode",{parentName:"li"},"watch")," event (for responses with ",(0,i.kt)("inlineCode",{parentName:"li"},"op_num")," = ",(0,i.kt)("inlineCode",{parentName:"li"},"Watch"),"), for the remaining responses: ",(0,i.kt)("inlineCode",{parentName:"li"},"NULL"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"watch_state")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/nullable"},"Nullable(Enum)"),") \u2014 The status of the ",(0,i.kt)("inlineCode",{parentName:"li"},"watch")," event (for responses with ",(0,i.kt)("inlineCode",{parentName:"li"},"op_num")," = ",(0,i.kt)("inlineCode",{parentName:"li"},"Watch"),"), for the remaining responses: ",(0,i.kt)("inlineCode",{parentName:"li"},"NULL"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"path_created")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/string"},"String"),") \u2014 The path to the created ZooKeeper node (for responses to the ",(0,i.kt)("inlineCode",{parentName:"li"},"CREATE")," request), may differ from the ",(0,i.kt)("inlineCode",{parentName:"li"},"path")," if the node is created as a ",(0,i.kt)("inlineCode",{parentName:"li"},"sequential"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"stat_czxid")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"Int64"),") \u2014 The ",(0,i.kt)("inlineCode",{parentName:"li"},"zxid")," of the change that caused this ZooKeeper node to be created."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"stat_mzxid")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"Int64"),") \u2014 The ",(0,i.kt)("inlineCode",{parentName:"li"},"zxid")," of the change that last modified this ZooKeeper node."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"stat_pzxid")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"Int64"),") \u2014 The transaction ID of the change that last modified childern of this ZooKeeper node."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"stat_version")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"Int32"),") \u2014 The number of changes to the data of this ZooKeeper node."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"stat_cversion")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"Int32"),") \u2014 The number of changes to the children of this ZooKeeper node."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"stat_dataLength")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"Int32"),") \u2014 The length of the data field of this ZooKeeper node."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"stat_numChildren")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"Int32"),") \u2014 The number of children of this ZooKeeper node."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"children")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/array"},"Array(String)"),") \u2014 The list of child ZooKeeper nodes (for responses to ",(0,i.kt)("inlineCode",{parentName:"li"},"LIST")," request).")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("p",null,"Query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM system.zookeeper_log WHERE (session_id = '106662742089334927') AND (xid = '10858') FORMAT Vertical;\n")),(0,i.kt)("p",null,"Result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Row 1:\n\u2500\u2500\u2500\u2500\u2500\u2500\ntype:             Request\nevent_date:       2021-08-09\nevent_time:       2021-08-09 21:38:30.291792\naddress:          ::\nport:             2181\nsession_id:       106662742089334927\nxid:              10858\nhas_watch:        1\nop_num:           List\npath:             /clickhouse/task_queue/ddl\ndata:             \nis_ephemeral:     0\nis_sequential:    0\nversion:          \u1d3a\u1d41\u1d38\u1d38\nrequests_size:    0\nrequest_idx:      0\nzxid:             0\nerror:            \u1d3a\u1d41\u1d38\u1d38\nwatch_type:       \u1d3a\u1d41\u1d38\u1d38\nwatch_state:      \u1d3a\u1d41\u1d38\u1d38\npath_created:     \nstat_czxid:       0\nstat_mzxid:       0\nstat_pzxid:       0\nstat_version:     0\nstat_cversion:    0\nstat_dataLength:  0\nstat_numChildren: 0\nchildren:         []\n\nRow 2:\n\u2500\u2500\u2500\u2500\u2500\u2500\ntype:             Response\nevent_date:       2021-08-09\nevent_time:       2021-08-09 21:38:30.292086\naddress:          ::\nport:             2181\nsession_id:       106662742089334927\nxid:              10858\nhas_watch:        1\nop_num:           List\npath:             /clickhouse/task_queue/ddl\ndata:             \nis_ephemeral:     0\nis_sequential:    0\nversion:          \u1d3a\u1d41\u1d38\u1d38\nrequests_size:    0\nrequest_idx:      0\nzxid:             16926267\nerror:            ZOK\nwatch_type:       \u1d3a\u1d41\u1d38\u1d38\nwatch_state:      \u1d3a\u1d41\u1d38\u1d38\npath_created:     \nstat_czxid:       16925469\nstat_mzxid:       16925469\nstat_pzxid:       16926179\nstat_version:     0\nstat_cversion:    7\nstat_dataLength:  0\nstat_numChildren: 7\nchildren:         ['query-0000000006','query-0000000005','query-0000000004','query-0000000003','query-0000000002','query-0000000001','query-0000000000']\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"See Also")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/en/operations/tips#zookeeper"},"ZooKeeper")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://zookeeper.apache.org/doc/r3.3.3/zookeeperProgrammers.html"},"ZooKeeper guide"))))}h.isMDXComponent=!0}}]);