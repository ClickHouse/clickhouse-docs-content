"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[35705],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},40375:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],l={},s="zookeeper",p={unversionedId:"en/operations/system-tables/zookeeper",id:"en/operations/system-tables/zookeeper",title:"zookeeper",description:"The table does not exist unless ClickHouse Keeper or ZooKeeper is configured. The system.zookeeper table exposes data from the Keeper cluster defined in the config.",source:"@site/docs/en/operations/system-tables/zookeeper.md",sourceDirName:"en/operations/system-tables",slug:"/en/operations/system-tables/zookeeper",permalink:"/docs/en/operations/system-tables/zookeeper",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/operations/system-tables/zookeeper.md",tags:[],version:"current",frontMatter:{},sidebar:"english",previous:{title:"users",permalink:"/docs/en/operations/system-tables/users"},next:{title:"zookeeper_log",permalink:"/docs/en/operations/system-tables/zookeeper_log"}},c={},u=[],m={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"zookeeper"},"zookeeper"),(0,a.kt)("p",null,"The table does not exist unless ClickHouse Keeper or ZooKeeper is configured. The ",(0,a.kt)("inlineCode",{parentName:"p"},"system.zookeeper")," table exposes data from the Keeper cluster defined in the config.\nThe query must either have a \u2018path =\u2019   condition or a ",(0,a.kt)("inlineCode",{parentName:"p"},"path IN"),"  condition set with the ",(0,a.kt)("inlineCode",{parentName:"p"},"WHERE")," clause as shown below. This corresponds to the path of the children that you want to get data for."),(0,a.kt)("p",null,"The query ",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT * FROM system.zookeeper WHERE path = '/clickhouse'")," outputs data for all children on the ",(0,a.kt)("inlineCode",{parentName:"p"},"/clickhouse")," node.\nTo output data for all root nodes, write path = \u2018/\u2019.\nIf the path specified in \u2018path\u2019 does not exist, an exception will be thrown."),(0,a.kt)("p",null,"The query ",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT * FROM system.zookeeper WHERE path IN ('/', '/clickhouse')")," outputs data for all children on the ",(0,a.kt)("inlineCode",{parentName:"p"},"/")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"/clickhouse")," node.\nIf in the specified \u2018path\u2019 collection has does not exist path, an exception will be thrown.\nIt can be used to do a batch of Keeper path queries."),(0,a.kt)("p",null,"Columns:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"name")," (String) \u2014 The name of the node."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"path")," (String) \u2014 The path to the node."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"value")," (String) \u2014 Node value."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dataLength")," (Int32) \u2014 Size of the value."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"numChildren")," (Int32) \u2014 Number of descendants."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"czxid")," (Int64) \u2014 ID of the transaction that created the node."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"mzxid")," (Int64) \u2014 ID of the transaction that last changed the node."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pzxid")," (Int64) \u2014 ID of the transaction that last deleted or added descendants."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ctime")," (DateTime) \u2014 Time of node creation."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"mtime")," (DateTime) \u2014 Time of the last modification of the node."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"version")," (Int32) \u2014 Node version: the number of times the node was changed."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cversion")," (Int32) \u2014 Number of added or removed descendants."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"aversion")," (Int32) \u2014 Number of changes to the ACL."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ephemeralOwner")," (Int64) \u2014 For ephemeral nodes, the ID of the session that owns this node.")),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM system.zookeeper\nWHERE path = '/clickhouse/tables/01-08/visits/replicas'\nFORMAT Vertical\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"Row 1:\n\u2500\u2500\u2500\u2500\u2500\u2500\nname:           example01-08-1\nvalue:\nczxid:          932998691229\nmzxid:          932998691229\nctime:          2015-03-27 16:49:51\nmtime:          2015-03-27 16:49:51\nversion:        0\ncversion:       47\naversion:       0\nephemeralOwner: 0\ndataLength:     0\nnumChildren:    7\npzxid:          987021031383\npath:           /clickhouse/tables/01-08/visits/replicas\n\nRow 2:\n\u2500\u2500\u2500\u2500\u2500\u2500\nname:           example01-08-2\nvalue:\nczxid:          933002738135\nmzxid:          933002738135\nctime:          2015-03-27 16:57:01\nmtime:          2015-03-27 16:57:01\nversion:        0\ncversion:       37\naversion:       0\nephemeralOwner: 0\ndataLength:     0\nnumChildren:    7\npzxid:          987021252247\npath:           /clickhouse/tables/01-08/visits/replicas\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/system-tables/zookeeper"},"Original article")," "))}d.isMDXComponent=!0}}]);