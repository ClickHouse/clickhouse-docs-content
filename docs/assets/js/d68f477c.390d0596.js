"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[79454],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return u}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=s(a),u=i,h=c["".concat(p,".").concat(u)]||c[u]||m[u]||r;return a?n.createElement(h,l(l({ref:t},d),{},{components:a})):n.createElement(h,l({ref:t},d))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},46061:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return m}});var n=a(87462),i=a(63366),r=(a(67294),a(3905)),l=["components"],o={sidebar_position:38,sidebar_label:"PARTITION"},p="Manipulating Partitions and Parts",s={unversionedId:"en/sql-reference/statements/alter/partition",id:"en/sql-reference/statements/alter/partition",title:"Manipulating Partitions and Parts",description:"The following operations with partitions are available:",source:"@site/docs/en/sql-reference/statements/alter/partition.md",sourceDirName:"en/sql-reference/statements/alter",slug:"/en/sql-reference/statements/alter/partition",permalink:"/docs/en/sql-reference/statements/alter/partition",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/statements/alter/partition.md",tags:[],version:"current",sidebarPosition:38,frontMatter:{sidebar_position:38,sidebar_label:"PARTITION"},sidebar:"english",previous:{title:"COLUMN",permalink:"/docs/en/sql-reference/statements/alter/column"},next:{title:"SETTING",permalink:"/docs/en/sql-reference/statements/alter/setting"}},d={},m=[{value:"DETACH PARTITION|PART",id:"detach-partitionpart",level:2},{value:"DROP PARTITION|PART",id:"drop-partitionpart",level:2},{value:"DROP DETACHED PARTITION|PART",id:"drop-detached-partitionpart",level:2},{value:"ATTACH PARTITION|PART",id:"attach-partitionpart",level:2},{value:"ATTACH PARTITION FROM",id:"attach-partition-from",level:2},{value:"REPLACE PARTITION",id:"replace-partition",level:2},{value:"MOVE PARTITION TO TABLE",id:"move-partition-to-table",level:2},{value:"CLEAR COLUMN IN PARTITION",id:"clear-column-in-partition",level:2},{value:"FREEZE PARTITION",id:"freeze-partition",level:2},{value:"UNFREEZE PARTITION",id:"unfreeze-partition",level:2},{value:"CLEAR INDEX IN PARTITION",id:"clear-index-in-partition",level:2},{value:"FETCH PARTITION|PART",id:"fetch-partitionpart",level:2},{value:"MOVE PARTITION|PART",id:"move-partitionpart",level:2},{value:"UPDATE IN PARTITION",id:"update-in-partition",level:2},{value:"Example",id:"example",level:3},{value:"See Also",id:"see-also",level:3},{value:"DELETE IN PARTITION",id:"delete-in-partition",level:2},{value:"Example",id:"example-1",level:3},{value:"See Also",id:"see-also-1",level:3},{value:"How to Set Partition Expression",id:"how-to-set-partition-expression",level:2}],c={toc:m};function u(e){var t=e.components,a=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"manipulating-partitions-and-parts"},"Manipulating Partitions and Parts"),(0,r.kt)("p",null,"The following operations with ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/mergetree-family/custom-partitioning-key"},"partitions")," are available:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#detach-partitionpart"},"DETACH PARTITION","|","PART")," \u2014 Moves a partition or part to the ",(0,r.kt)("inlineCode",{parentName:"li"},"detached")," directory and forget it."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#drop-partitionpart"},"DROP PARTITION","|","PART")," \u2014 Deletes a partition or part."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#attach-partitionpart"},"ATTACH PARTITION","|","PART")," \u2014 Adds a partition or part from the ",(0,r.kt)("inlineCode",{parentName:"li"},"detached")," directory to the table."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#attach-partition-from"},"ATTACH PARTITION FROM")," \u2014 Copies the data partition from one table to another and adds."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#replace-partition"},"REPLACE PARTITION")," \u2014 Copies the data partition from one table to another and replaces."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#move_to_table-partition"},"MOVE PARTITION TO TABLE")," \u2014 Moves the data partition from one table to another."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#clear-column-partition"},"CLEAR COLUMN IN PARTITION")," \u2014 Resets the value of a specified column in a partition."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#clear-index-partition"},"CLEAR INDEX IN PARTITION")," \u2014 Resets the specified secondary index in a partition."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#freeze-partition"},"FREEZE PARTITION")," \u2014 Creates a backup of a partition."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#unfreeze-partition"},"UNFREEZE PARTITION")," \u2014 Removes a backup of a partition."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#fetch-partition"},"FETCH PARTITION","|","PART")," \u2014 Downloads a part or partition from another server."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#move-partition"},"MOVE PARTITION","|","PART")," \u2014 Move partition/data part to another disk or volume."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#update-in-partition"},"UPDATE IN PARTITION")," \u2014 Update data inside the partition by condition."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#delete-in-partition"},"DELETE IN PARTITION")," \u2014 Delete data inside the partition by condition.")),(0,r.kt)("h2",{id:"detach-partitionpart"},"DETACH PARTITION","|","PART"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE table_name DETACH PARTITION|PART partition_expr\n")),(0,r.kt)("p",null,"Moves all data for the specified partition to the ",(0,r.kt)("inlineCode",{parentName:"p"},"detached")," directory. The server forgets about the detached data partition as if it does not exist. The server will not know about this data until you make the ",(0,r.kt)("a",{parentName:"p",href:"#alter_attach-partition"},"ATTACH")," query."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE mt DETACH PARTITION '2020-11-21';\nALTER TABLE mt DETACH PART 'all_2_2_0';\n")),(0,r.kt)("p",null,"Read about setting the partition expression in a section ",(0,r.kt)("a",{parentName:"p",href:"#alter-how-to-specify-part-expr"},"How to specify the partition expression"),"."),(0,r.kt)("p",null,"After the query is executed, you can do whatever you want with the data in the ",(0,r.kt)("inlineCode",{parentName:"p"},"detached")," directory \u2014 delete it from the file system, or just leave it."),(0,r.kt)("p",null,"This query is replicated \u2013 it moves the data to the ",(0,r.kt)("inlineCode",{parentName:"p"},"detached")," directory on all replicas. Note that you can execute this query only on a leader replica. To find out if a replica is a leader, perform the ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT")," query to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/operations/system-tables/replicas#system_tables-replicas"},"system.replicas")," table. Alternatively, it is easier to make a ",(0,r.kt)("inlineCode",{parentName:"p"},"DETACH")," query on all replicas - all the replicas throw an exception, except the leader replicas (as multiple leaders are allowed)."),(0,r.kt)("h2",{id:"drop-partitionpart"},"DROP PARTITION","|","PART"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE table_name DROP PARTITION|PART partition_expr\n")),(0,r.kt)("p",null,"Deletes the specified partition from the table. This query tags the partition as inactive and deletes data completely, approximately in 10 minutes."),(0,r.kt)("p",null,"Read about setting the partition expression in a section ",(0,r.kt)("a",{parentName:"p",href:"#alter-how-to-specify-part-expr"},"How to specify the partition expression"),"."),(0,r.kt)("p",null,"The query is replicated \u2013 it deletes data on all replicas."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE mt DROP PARTITION '2020-11-21';\nALTER TABLE mt DROP PART 'all_4_4_0';\n")),(0,r.kt)("h2",{id:"drop-detached-partitionpart"},"DROP DETACHED PARTITION","|","PART"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE table_name DROP DETACHED PARTITION|PART partition_expr\n")),(0,r.kt)("p",null,"Removes the specified part or all parts of the specified partition from ",(0,r.kt)("inlineCode",{parentName:"p"},"detached"),".\nRead more about setting the partition expression in a section ",(0,r.kt)("a",{parentName:"p",href:"#alter-how-to-specify-part-expr"},"How to specify the partition expression"),"."),(0,r.kt)("h2",{id:"attach-partitionpart"},"ATTACH PARTITION","|","PART"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE table_name ATTACH PARTITION|PART partition_expr\n")),(0,r.kt)("p",null,"Adds data to the table from the ",(0,r.kt)("inlineCode",{parentName:"p"},"detached")," directory. It is possible to add data for an entire partition or for a separate part. Examples:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE visits ATTACH PARTITION 201901;\nALTER TABLE visits ATTACH PART 201901_2_2_0;\n")),(0,r.kt)("p",null,"Read more about setting the partition expression in a section ",(0,r.kt)("a",{parentName:"p",href:"#alter-how-to-specify-part-expr"},"How to specify the partition expression"),"."),(0,r.kt)("p",null,"This query is replicated. The replica-initiator checks whether there is data in the ",(0,r.kt)("inlineCode",{parentName:"p"},"detached")," directory.\nIf data exists, the query checks its integrity. If everything is correct, the query adds the data to the table."),(0,r.kt)("p",null,"If the non-initiator replica, receiving the attach command, finds the part with the correct checksums in its own ",(0,r.kt)("inlineCode",{parentName:"p"},"detached")," folder, it attaches the data without fetching it from other replicas.\nIf there is no part with the correct checksums, the data is downloaded from any replica having the part."),(0,r.kt)("p",null,"You can put data to the ",(0,r.kt)("inlineCode",{parentName:"p"},"detached")," directory on one replica and use the ",(0,r.kt)("inlineCode",{parentName:"p"},"ALTER ... ATTACH")," query to add it to the table on all replicas."),(0,r.kt)("h2",{id:"attach-partition-from"},"ATTACH PARTITION FROM"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE table2 ATTACH PARTITION partition_expr FROM table1\n")),(0,r.kt)("p",null,"This query copies the data partition from ",(0,r.kt)("inlineCode",{parentName:"p"},"table1")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"table2"),".\nNote that data will be deleted neither from ",(0,r.kt)("inlineCode",{parentName:"p"},"table1")," nor from ",(0,r.kt)("inlineCode",{parentName:"p"},"table2"),"."),(0,r.kt)("p",null,"For the query to run successfully, the following conditions must be met:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Both tables must have the same structure."),(0,r.kt)("li",{parentName:"ul"},"Both tables must have the same partition key.")),(0,r.kt)("h2",{id:"replace-partition"},"REPLACE PARTITION"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE table2 REPLACE PARTITION partition_expr FROM table1\n")),(0,r.kt)("p",null,"This query copies the data partition from the ",(0,r.kt)("inlineCode",{parentName:"p"},"table1")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"table2")," and replaces existing partition in the ",(0,r.kt)("inlineCode",{parentName:"p"},"table2"),". Note that data won\u2019t be deleted from ",(0,r.kt)("inlineCode",{parentName:"p"},"table1"),"."),(0,r.kt)("p",null,"For the query to run successfully, the following conditions must be met:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Both tables must have the same structure."),(0,r.kt)("li",{parentName:"ul"},"Both tables must have the same partition key.")),(0,r.kt)("h2",{id:"move-partition-to-table"},"MOVE PARTITION TO TABLE"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE table_source MOVE PARTITION partition_expr TO TABLE table_dest\n")),(0,r.kt)("p",null,"This query moves the data partition from the ",(0,r.kt)("inlineCode",{parentName:"p"},"table_source")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"table_dest")," with deleting the data from ",(0,r.kt)("inlineCode",{parentName:"p"},"table_source"),"."),(0,r.kt)("p",null,"For the query to run successfully, the following conditions must be met:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Both tables must have the same structure."),(0,r.kt)("li",{parentName:"ul"},"Both tables must have the same partition key."),(0,r.kt)("li",{parentName:"ul"},"Both tables must be the same engine family (replicated or non-replicated)."),(0,r.kt)("li",{parentName:"ul"},"Both tables must have the same storage policy.")),(0,r.kt)("h2",{id:"clear-column-in-partition"},"CLEAR COLUMN IN PARTITION"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE table_name CLEAR COLUMN column_name IN PARTITION partition_expr\n")),(0,r.kt)("p",null,"Resets all values in the specified column in a partition. If the ",(0,r.kt)("inlineCode",{parentName:"p"},"DEFAULT")," clause was determined when creating a table, this query sets the column value to a specified default value."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE visits CLEAR COLUMN hour in PARTITION 201902\n")),(0,r.kt)("h2",{id:"freeze-partition"},"FREEZE PARTITION"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE table_name FREEZE [PARTITION partition_expr] [WITH NAME 'backup_name']\n")),(0,r.kt)("p",null,"This query creates a local backup of a specified partition. If the ",(0,r.kt)("inlineCode",{parentName:"p"},"PARTITION")," clause is omitted, the query creates the backup of all partitions at once."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The entire backup process is performed without stopping the server."))),(0,r.kt)("p",null,"Note that for old-styled tables you can specify the prefix of the partition name (for example, ",(0,r.kt)("inlineCode",{parentName:"p"},"2019"),") - then the query creates the backup for all the corresponding partitions. Read about setting the partition expression in a section ",(0,r.kt)("a",{parentName:"p",href:"#alter-how-to-specify-part-expr"},"How to specify the partition expression"),"."),(0,r.kt)("p",null,"At the time of execution, for a data snapshot, the query creates hardlinks to a table data. Hardlinks are placed in the directory ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/lib/clickhouse/shadow/N/..."),", where:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/var/lib/clickhouse/")," is the working ClickHouse directory specified in the config."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"N")," is the incremental number of the backup."),(0,r.kt)("li",{parentName:"ul"},"if the ",(0,r.kt)("inlineCode",{parentName:"li"},"WITH NAME")," parameter is specified, then the value of the ",(0,r.kt)("inlineCode",{parentName:"li"},"'backup_name'")," parameter is used instead of the incremental number. ")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you use ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/mergetree-family/mergetree#table_engine-mergetree-multiple-volumes"},"a set of disks for data storage in a table"),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"shadow/N")," directory appears on every disk, storing data parts that matched by the ",(0,r.kt)("inlineCode",{parentName:"p"},"PARTITION")," expression."))),(0,r.kt)("p",null,"The same structure of directories is created inside the backup as inside ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/lib/clickhouse/"),". The query performs ",(0,r.kt)("inlineCode",{parentName:"p"},"chmod")," for all files, forbidding writing into them."),(0,r.kt)("p",null,"After creating the backup, you can copy the data from ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/lib/clickhouse/shadow/")," to the remote server and then delete it from the local server. Note that the ",(0,r.kt)("inlineCode",{parentName:"p"},"ALTER t FREEZE PARTITION")," query is not replicated. It creates a local backup only on the local server."),(0,r.kt)("p",null,"The query creates backup almost instantly (but first it waits for the current queries to the corresponding table to finish running)."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ALTER TABLE t FREEZE PARTITION")," copies only the data, not table metadata. To make a backup of table metadata, copy the file ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/lib/clickhouse/metadata/database/table.sql")),(0,r.kt)("p",null,"To restore data from a backup, do the following:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create the table if it does not exist. To view the query, use the .sql file (replace ",(0,r.kt)("inlineCode",{parentName:"li"},"ATTACH")," in it with ",(0,r.kt)("inlineCode",{parentName:"li"},"CREATE"),")."),(0,r.kt)("li",{parentName:"ol"},"Copy the data from the ",(0,r.kt)("inlineCode",{parentName:"li"},"data/database/table/")," directory inside the backup to the ",(0,r.kt)("inlineCode",{parentName:"li"},"/var/lib/clickhouse/data/database/table/detached/")," directory."),(0,r.kt)("li",{parentName:"ol"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"ALTER TABLE t ATTACH PARTITION")," queries to add the data to a table.")),(0,r.kt)("p",null,"Restoring from a backup does not require stopping the server."),(0,r.kt)("p",null,"For more information about backups and restoring data, see the ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/operations/backup"},"Data Backup")," section."),(0,r.kt)("h2",{id:"unfreeze-partition"},"UNFREEZE PARTITION"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE 'table_name' UNFREEZE [PARTITION 'part_expr'] WITH NAME 'backup_name'\n")),(0,r.kt)("p",null,"Removes ",(0,r.kt)("inlineCode",{parentName:"p"},"freezed")," partitions with the specified name from the disk. If the ",(0,r.kt)("inlineCode",{parentName:"p"},"PARTITION")," clause is omitted, the query removes the backup of all partitions at once."),(0,r.kt)("h2",{id:"clear-index-in-partition"},"CLEAR INDEX IN PARTITION"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE table_name CLEAR INDEX index_name IN PARTITION partition_expr\n")),(0,r.kt)("p",null,"The query works similar to ",(0,r.kt)("inlineCode",{parentName:"p"},"CLEAR COLUMN"),", but it resets an index instead of a column data."),(0,r.kt)("h2",{id:"fetch-partitionpart"},"FETCH PARTITION|PART"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE table_name FETCH PARTITION|PART partition_expr FROM 'path-in-zookeeper'\n")),(0,r.kt)("p",null,"Downloads a partition from another server. This query only works for the replicated tables."),(0,r.kt)("p",null,"The query does the following:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Downloads the partition|part from the specified shard. In \u2018path-in-zookeeper\u2019 you must specify a path to the shard in ZooKeeper."),(0,r.kt)("li",{parentName:"ol"},"Then the query puts the downloaded data to the ",(0,r.kt)("inlineCode",{parentName:"li"},"detached")," directory of the ",(0,r.kt)("inlineCode",{parentName:"li"},"table_name")," table. Use the ",(0,r.kt)("a",{parentName:"li",href:"#alter_attach-partition"},"ATTACH PARTITION","|","PART")," query to add the data to the table.")),(0,r.kt)("p",null,"For example:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"FETCH PARTITION")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE users FETCH PARTITION 201902 FROM '/clickhouse/tables/01-01/visits';\nALTER TABLE users ATTACH PARTITION 201902;\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"FETCH PART")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE users FETCH PART 201901_2_2_0 FROM '/clickhouse/tables/01-01/visits';\nALTER TABLE users ATTACH PART 201901_2_2_0;\n")),(0,r.kt)("p",null,"Note that:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"ALTER ... FETCH PARTITION|PART")," query isn\u2019t replicated. It places the part or partition to the ",(0,r.kt)("inlineCode",{parentName:"li"},"detached")," directory only on the local server."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"ALTER TABLE ... ATTACH")," query is replicated. It adds the data to all replicas. The data is added to one of the replicas from the ",(0,r.kt)("inlineCode",{parentName:"li"},"detached")," directory, and to the others - from neighboring replicas.")),(0,r.kt)("p",null,"Before downloading, the system checks if the partition exists and the table structure matches. The most appropriate replica is selected automatically from the healthy replicas."),(0,r.kt)("p",null,"Although the query is called ",(0,r.kt)("inlineCode",{parentName:"p"},"ALTER TABLE"),", it does not change the table structure and does not immediately change the data available in the table."),(0,r.kt)("h2",{id:"move-partitionpart"},"MOVE PARTITION","|","PART"),(0,r.kt)("p",null,"Moves partitions or data parts to another volume or disk for ",(0,r.kt)("inlineCode",{parentName:"p"},"MergeTree"),"-engine tables. See ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/mergetree-family/mergetree#table_engine-mergetree-multiple-volumes"},"Using Multiple Block Devices for Data Storage"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE table_name MOVE PARTITION|PART partition_expr TO DISK|VOLUME 'disk_name'\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ALTER TABLE t MOVE")," query:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Not replicated, because different replicas can have different storage policies."),(0,r.kt)("li",{parentName:"ul"},"Returns an error if the specified disk or volume is not configured. Query also returns an error if conditions of data moving, that specified in the storage policy, can\u2019t be applied."),(0,r.kt)("li",{parentName:"ul"},"Can return an error in the case, when data to be moved is already moved by a background process, concurrent ",(0,r.kt)("inlineCode",{parentName:"li"},"ALTER TABLE t MOVE")," query or as a result of background data merging. A user shouldn\u2019t perform any additional actions in this case.")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE hits MOVE PART '20190301_14343_16206_438' TO VOLUME 'slow'\nALTER TABLE hits MOVE PARTITION '2019-09-01' TO DISK 'fast_ssd'\n")),(0,r.kt)("h2",{id:"update-in-partition"},"UPDATE IN PARTITION"),(0,r.kt)("p",null,"Manipulates data in the specifies partition matching the specified filtering expression. Implemented as a ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/alter/#mutations"},"mutation"),"."),(0,r.kt)("p",null,"Syntax:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE [db.]table UPDATE column1 = expr1 [, ...] [IN PARTITION partition_id] WHERE filter_expr\n")),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE mt UPDATE x = x + 1 IN PARTITION 2 WHERE p = 2;\n")),(0,r.kt)("h3",{id:"see-also"},"See Also"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/statements/alter/update#alter-table-update-statements"},"UPDATE"))),(0,r.kt)("h2",{id:"delete-in-partition"},"DELETE IN PARTITION"),(0,r.kt)("p",null,"Deletes data in the specifies partition matching the specified filtering expression. Implemented as a ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/alter/#mutations"},"mutation"),"."),(0,r.kt)("p",null,"Syntax:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE [db.]table DELETE [IN PARTITION partition_id] WHERE filter_expr\n")),(0,r.kt)("h3",{id:"example-1"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE mt DELETE IN PARTITION 2 WHERE p = 2;\n")),(0,r.kt)("h3",{id:"see-also-1"},"See Also"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/statements/alter/delete#alter-mutations"},"DELETE"))),(0,r.kt)("h2",{id:"how-to-set-partition-expression"},"How to Set Partition Expression"),(0,r.kt)("p",null,"You can specify the partition expression in ",(0,r.kt)("inlineCode",{parentName:"p"},"ALTER ... PARTITION")," queries in different ways:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"As a value from the ",(0,r.kt)("inlineCode",{parentName:"li"},"partition")," column of the ",(0,r.kt)("inlineCode",{parentName:"li"},"system.parts")," table. For example, ",(0,r.kt)("inlineCode",{parentName:"li"},"ALTER TABLE visits DETACH PARTITION 201901"),"."),(0,r.kt)("li",{parentName:"ul"},"As a tuple of expressions or constants that matches (in types) the table partitioning keys tuple. In the case of a single element partitioning key, the expression should be wrapped in the ",(0,r.kt)("inlineCode",{parentName:"li"},"tuple (...)")," function. For example, ",(0,r.kt)("inlineCode",{parentName:"li"},"ALTER TABLE visits DETACH PARTITION tuple(toYYYYMM(toDate('2019-01-25')))"),"."),(0,r.kt)("li",{parentName:"ul"},"Using the partition ID. Partition ID is a string identifier of the partition (human-readable, if possible) that is used as the names of partitions in the file system and in ZooKeeper. The partition ID must be specified in the ",(0,r.kt)("inlineCode",{parentName:"li"},"PARTITION ID")," clause, in a single quotes. For example, ",(0,r.kt)("inlineCode",{parentName:"li"},"ALTER TABLE visits DETACH PARTITION ID '201901'"),"."),(0,r.kt)("li",{parentName:"ul"},"In the ",(0,r.kt)("a",{parentName:"li",href:"#alter_attach-partition"},"ALTER ATTACH PART")," and ",(0,r.kt)("a",{parentName:"li",href:"#alter_drop-detached"},"DROP DETACHED PART")," query, to specify the name of a part, use string literal with a value from the ",(0,r.kt)("inlineCode",{parentName:"li"},"name")," column of the ",(0,r.kt)("a",{parentName:"li",href:"/docs/en/operations/system-tables/detached_parts#system_tables-detached_parts"},"system.detached_parts")," table. For example, ",(0,r.kt)("inlineCode",{parentName:"li"},"ALTER TABLE visits ATTACH PART '201901_1_1_0'"),".")),(0,r.kt)("p",null,"Usage of quotes when specifying the partition depends on the type of partition expression. For example, for the ",(0,r.kt)("inlineCode",{parentName:"p"},"String")," type, you have to specify its name in quotes (",(0,r.kt)("inlineCode",{parentName:"p"},"'"),"). For the ",(0,r.kt)("inlineCode",{parentName:"p"},"Date")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Int*")," types no quotes are needed."),(0,r.kt)("p",null,"All the rules above are also true for the ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/misc#misc_operations-optimize"},"OPTIMIZE")," query. If you need to specify the only partition when optimizing a non-partitioned table, set the expression ",(0,r.kt)("inlineCode",{parentName:"p"},"PARTITION tuple()"),". For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"OPTIMIZE TABLE table_not_partitioned PARTITION tuple() FINAL;\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"IN PARTITION")," specifies the partition to which the ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/alter/update#alter-table-update-statements"},"UPDATE")," or ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/alter/delete#alter-mutations"},"DELETE")," expressions are applied as a result of the ",(0,r.kt)("inlineCode",{parentName:"p"},"ALTER TABLE")," query. New parts are created only from the specified partition. In this way, ",(0,r.kt)("inlineCode",{parentName:"p"},"IN PARTITION")," helps to reduce the load when the table is divided into many partitions, and you only need to update the data point-by-point."),(0,r.kt)("p",null,"The examples of ",(0,r.kt)("inlineCode",{parentName:"p"},"ALTER ... PARTITION")," queries are demonstrated in the tests ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/ClickHouse/blob/master/tests/queries/0_stateless/00502_custom_partitioning_local.sql"},(0,r.kt)("inlineCode",{parentName:"a"},"00502_custom_partitioning_local"))," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/ClickHouse/blob/master/tests/queries/0_stateless/00502_custom_partitioning_replicated_zookeeper.sql"},(0,r.kt)("inlineCode",{parentName:"a"},"00502_custom_partitioning_replicated_zookeeper")),"."))}u.isMDXComponent=!0}}]);