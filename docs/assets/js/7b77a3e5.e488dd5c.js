"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[11084],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>p});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),f=d(n),p=i,h=f["".concat(l,".").concat(p)]||f[p]||u[p]||r;return n?a.createElement(h,s(s({ref:t},m),{},{components:n})):a.createElement(h,s({ref:t},m))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var d=2;d<r;d++)s[d]=n[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},63718:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var a=n(87462),i=(n(67294),n(3905));const r={slug:"/en/engines/table-engines/special/buffer",sidebar_position:120,sidebar_label:"Buffer"},s="Buffer Table Engine",o={unversionedId:"en/engines/table-engines/special/buffer",id:"en/engines/table-engines/special/buffer",title:"Buffer Table Engine",description:"Buffers the data to write in RAM, periodically flushing it to another table. During the read operation, data is read from the buffer and the other table simultaneously.",source:"@site/docs/en/engines/table-engines/special/buffer.md",sourceDirName:"en/engines/table-engines/special",slug:"/en/engines/table-engines/special/buffer",permalink:"/docs/en/engines/table-engines/special/buffer",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/engines/table-engines/special/buffer.md",tags:[],version:"current",sidebarPosition:120,frontMatter:{slug:"/en/engines/table-engines/special/buffer",sidebar_position:120,sidebar_label:"Buffer"},sidebar:"english",previous:{title:"Memory",permalink:"/docs/en/engines/table-engines/special/memory"},next:{title:"External Data",permalink:"/docs/en/engines/table-engines/special/external-data"}},l={},d=[{value:"Engine parameters:",id:"engine-parameters",level:3},{value:"database",id:"database",level:4},{value:"table",id:"table",level:4},{value:"num_layers",id:"num_layers",level:4},{value:"min_time, max_time, min_rows, max_rows, min_bytes, and max_bytes",id:"min_time-max_time-min_rows-max_rows-min_bytes-and-max_bytes",level:4},{value:"Optional engine parameters:",id:"optional-engine-parameters",level:3},{value:"flush_time, flush_rows, and flush_bytes",id:"flush_time-flush_rows-and-flush_bytes",level:4},{value:"min_time, max_time, and flush_time",id:"min_time-max_time-and-flush_time",level:4},{value:"min_rows, max_rows, and flush_rows",id:"min_rows-max_rows-and-flush_rows",level:4},{value:"min_bytes, max_bytes, and flush_bytes",id:"min_bytes-max_bytes-and-flush_bytes",level:4}],m={toc:d};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"buffer-table-engine"},"Buffer Table Engine"),(0,i.kt)("p",null,"Buffers the data to write in RAM, periodically flushing it to another table. During the read operation, data is read from the buffer and the other table simultaneously."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"A recommended alternative to the Buffer Table Engine is enabling ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/optimize/asynchronous-inserts"},"asynchronous inserts"),"."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"Buffer(database, table, num_layers, min_time, max_time, min_rows, max_rows, min_bytes, max_bytes)\n")),(0,i.kt)("h3",{id:"engine-parameters"},"Engine parameters:"),(0,i.kt)("h4",{id:"database"},"database"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"database")," \u2013 Database name. You can use ",(0,i.kt)("inlineCode",{parentName:"p"},"currentDatabase()")," or another constant expression that returns a string."),(0,i.kt)("h4",{id:"table"},"table"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"table")," \u2013 Table to flush data to."),(0,i.kt)("h4",{id:"num_layers"},"num_layers"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"num_layers")," \u2013 Parallelism layer. Physically, the table will be represented as ",(0,i.kt)("inlineCode",{parentName:"p"},"num_layers")," of independent buffers."),(0,i.kt)("h4",{id:"min_time-max_time-min_rows-max_rows-min_bytes-and-max_bytes"},"min_time, max_time, min_rows, max_rows, min_bytes, and max_bytes"),(0,i.kt)("p",null,"Conditions for flushing data from the buffer."),(0,i.kt)("h3",{id:"optional-engine-parameters"},"Optional engine parameters:"),(0,i.kt)("h4",{id:"flush_time-flush_rows-and-flush_bytes"},"flush_time, flush_rows, and flush_bytes"),(0,i.kt)("p",null,"Conditions for flushing data from the buffer in the background (omitted or zero means no ",(0,i.kt)("inlineCode",{parentName:"p"},"flush*")," parameters)."),(0,i.kt)("p",null,"Data is flushed from the buffer and written to the destination table if all the ",(0,i.kt)("inlineCode",{parentName:"p"},"min*")," conditions or at least one ",(0,i.kt)("inlineCode",{parentName:"p"},"max*")," condition are met."),(0,i.kt)("p",null,"Also, if at least one ",(0,i.kt)("inlineCode",{parentName:"p"},"flush*")," condition is met, a flush is initiated in the background. This differs from ",(0,i.kt)("inlineCode",{parentName:"p"},"max*")," since ",(0,i.kt)("inlineCode",{parentName:"p"},"flush*")," allows you to configure background flushes separately to avoid adding latency for ",(0,i.kt)("inlineCode",{parentName:"p"},"INSERT")," queries into Buffer tables."),(0,i.kt)("h4",{id:"min_time-max_time-and-flush_time"},"min_time, max_time, and flush_time"),(0,i.kt)("p",null,"Condition for the time in seconds from the moment of the first write to the buffer."),(0,i.kt)("h4",{id:"min_rows-max_rows-and-flush_rows"},"min_rows, max_rows, and flush_rows"),(0,i.kt)("p",null,"Condition for the number of rows in the buffer."),(0,i.kt)("h4",{id:"min_bytes-max_bytes-and-flush_bytes"},"min_bytes, max_bytes, and flush_bytes"),(0,i.kt)("p",null,"Condition for the number of bytes in the buffer."),(0,i.kt)("p",null,"During the write operation, data is inserted into one or more random buffers (configured with ",(0,i.kt)("inlineCode",{parentName:"p"},"num_layers"),"). Or, if the data part to insert is large enough (greater than ",(0,i.kt)("inlineCode",{parentName:"p"},"max_rows")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"max_bytes"),"), it is written directly to the destination table, omitting the buffer."),(0,i.kt)("p",null,"The conditions for flushing the data are calculated separately for each of the ",(0,i.kt)("inlineCode",{parentName:"p"},"num_layers")," buffers. For example, if ",(0,i.kt)("inlineCode",{parentName:"p"},"num_layers = 16")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"max_bytes = 100000000"),", the maximum RAM consumption is 1.6 GB."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE merge.hits_buffer AS merge.hits ENGINE = Buffer(merge, hits, 1, 10, 100, 10000, 1000000, 10000000, 100000000)\n")),(0,i.kt)("p",null,"Creating a ",(0,i.kt)("inlineCode",{parentName:"p"},"merge.hits_buffer")," table with the same structure as ",(0,i.kt)("inlineCode",{parentName:"p"},"merge.hits")," and using the Buffer engine. When writing to this table, data is buffered in RAM and later written to the \u2018merge.hits\u2019 table. A single buffer is created and the data is flushed if either:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"100 seconds have passed since the last flush (",(0,i.kt)("inlineCode",{parentName:"li"},"max_time"),") or"),(0,i.kt)("li",{parentName:"ul"},"1 million rows have been written (",(0,i.kt)("inlineCode",{parentName:"li"},"max_rows"),") or"),(0,i.kt)("li",{parentName:"ul"},"100 MB of data have been written (",(0,i.kt)("inlineCode",{parentName:"li"},"max_bytes"),") or"),(0,i.kt)("li",{parentName:"ul"},"10 seconds have passed (",(0,i.kt)("inlineCode",{parentName:"li"},"min_time"),") and 10,000 rows (",(0,i.kt)("inlineCode",{parentName:"li"},"min_rows"),") and 10 MB (",(0,i.kt)("inlineCode",{parentName:"li"},"min_bytes"),") of data have been written")),(0,i.kt)("p",null,"For example, if just one row has been written, after 100 seconds, it will be flushed, no matter what. But if many rows have been written, the data will be flushed sooner."),(0,i.kt)("p",null,"When the server is stopped, with ",(0,i.kt)("inlineCode",{parentName:"p"},"DROP TABLE")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"DETACH TABLE"),", buffered data is also flushed to the destination table."),(0,i.kt)("p",null,"You can set empty strings in single quotation marks for the database and table name. This indicates the absence of a destination table. In this case, when the data flush conditions are reached, the buffer is simply cleared. This may be useful for keeping a window of data in memory."),(0,i.kt)("p",null,"When reading from a Buffer table, data is processed both from the buffer and from the destination table (if there is one).\nNote that the Buffer table does not support an index. In other words, data in the buffer is fully scanned, which might be slow for large buffers. (For data in a subordinate table, the index that it supports will be used.)"),(0,i.kt)("p",null,"If the set of columns in the Buffer table does not match the set of columns in a subordinate table, a subset of columns that exist in both tables is inserted."),(0,i.kt)("p",null,"If the types do not match for one of the columns in the Buffer table and a subordinate table, an error message is entered in the server log, and the buffer is cleared.\nThe same happens if the subordinate table does not exist when the buffer is flushed."),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Running ALTER on the Buffer table in releases made before 26 Oct 2021 will cause a ",(0,i.kt)("inlineCode",{parentName:"p"},"Block structure mismatch")," error (see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/ClickHouse/issues/15117"},"#15117")," and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/ClickHouse/pull/30565"},"#30565"),"), so deleting the Buffer table and then recreating is the only option. Check that this error is fixed in your release before trying to run ALTER on the Buffer table."))),(0,i.kt)("p",null,"If the server is restarted abnormally, the data in the buffer is lost."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"FINAL")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"SAMPLE")," do not work correctly for Buffer tables. These conditions are passed to the destination table but are not used for processing data in the buffer. If these features are required, we recommend only using the Buffer table for writing while reading from the destination table."),(0,i.kt)("p",null,"When adding data to a Buffer table, one of the buffers is locked. This causes delays if a read operation is simultaneously being performed from the table."),(0,i.kt)("p",null,"Data that is inserted into a Buffer table may end up in the subordinate table in a different order and in different blocks. Because of this, a Buffer table is difficult to use for writing to a CollapsingMergeTree correctly. To avoid problems, you can set ",(0,i.kt)("inlineCode",{parentName:"p"},"num_layers")," to 1."),(0,i.kt)("p",null,"If the destination table is replicated, some expected characteristics of replicated tables are lost when writing to a Buffer table. The random changes to the order of rows and sizes of data parts cause data deduplication to quit working, which means it is not possible to have a reliable \u2018exactly once\u2019 write to replicated tables."),(0,i.kt)("p",null,"Due to these disadvantages, we can only recommend using a Buffer table in rare cases."),(0,i.kt)("p",null,"A Buffer table is used when too many INSERTs are received from a large number of servers over a unit of time, and data can\u2019t be buffered before insertion, which means the INSERTs can\u2019t run fast enough."),(0,i.kt)("p",null,"Note that it does not make sense to insert data one row at a time, even for Buffer tables. This will only produce a speed of a few thousand rows per second while inserting larger blocks of data can produce over a million rows per second."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/engines/table-engines/special/buffer/"},"Original article")," "))}u.isMDXComponent=!0}}]);