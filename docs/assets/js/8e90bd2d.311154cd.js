"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[52975],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return c}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),o=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=o(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=o(a),c=r,k=u["".concat(l,".").concat(c)]||u[c]||d[c]||i;return a?n.createElement(k,p(p({ref:t},m),{},{components:a})):n.createElement(k,p({ref:t},m))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,p=new Array(i);p[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,p[1]=s;for(var o=2;o<i;o++)p[o]=a[o];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},33159:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return s},metadata:function(){return o},toc:function(){return d}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),p=["components"],s={},l="parts_columns",o={unversionedId:"en/operations/system-tables/parts_columns",id:"en/operations/system-tables/parts_columns",title:"parts_columns",description:"Contains information about parts and columns of MergeTree tables.",source:"@site/docs/en/operations/system-tables/parts_columns.md",sourceDirName:"en/operations/system-tables",slug:"/en/operations/system-tables/parts_columns",permalink:"/docs/en/operations/system-tables/parts_columns",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/operations/system-tables/parts_columns.md",tags:[],version:"current",frontMatter:{},sidebar:"english",previous:{title:"parts",permalink:"/docs/en/operations/system-tables/parts"},next:{title:"processes",permalink:"/docs/en/operations/system-tables/processes"}},m={},d=[],u={toc:d};function c(e){var t=e.components,a=(0,r.Z)(e,p);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"parts_columns"},"parts_columns"),(0,i.kt)("p",null,"Contains information about parts and columns of ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/mergetree-family/mergetree"},"MergeTree")," tables."),(0,i.kt)("p",null,"Each row describes one data part."),(0,i.kt)("p",null,"Columns:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"partition")," (",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/string"},"String"),") \u2014 The partition name. To learn what a partition is, see the description of the ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/alter/#query_language_queries_alter"},"ALTER")," query."),(0,i.kt)("p",{parentName:"li"},"Formats:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"YYYYMM")," for automatic partitioning by month."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"any_string")," when partitioning manually."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"name")," (",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/string"},"String"),") \u2014 Name of the data part.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"part_type")," (",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/string"},"String"),") \u2014 The data part storing format."),(0,i.kt)("p",{parentName:"li"},"Possible values:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Wide")," \u2014 Each column is stored in a separate file in a filesystem."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Compact")," \u2014 All columns are stored in one file in a filesystem.")),(0,i.kt)("p",{parentName:"li"},"Data storing format is controlled by the ",(0,i.kt)("inlineCode",{parentName:"p"},"min_bytes_for_wide_part")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"min_rows_for_wide_part")," settings of the ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/mergetree-family/mergetree"},"MergeTree")," table.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"active")," (",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt8"),") \u2014 Flag that indicates whether the data part is active. If a data part is active, it\u2019s used in a table. Otherwise, it\u2019s deleted. Inactive data parts remain after merging.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"marks")," (",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 The number of marks. To get the approximate number of rows in a data part, multiply ",(0,i.kt)("inlineCode",{parentName:"p"},"marks")," by the index granularity (usually 8192) (this hint does not work for adaptive granularity).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"rows")," (",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 The number of rows.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"bytes_on_disk")," (",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 Total size of all the data part files in bytes.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"data_compressed_bytes")," (",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 Total size of compressed data in the data part. All the auxiliary files (for example, files with marks) are not included.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"data_uncompressed_bytes")," (",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 Total size of uncompressed data in the data part. All the auxiliary files (for example, files with marks) are not included.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"marks_bytes")," (",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 The size of the file with marks.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"modification_time")," (",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/datetime"},"DateTime"),") \u2014 The time the directory with the data part was modified. This usually corresponds to the time of data part creation.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"remove_time")," (",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/datetime"},"DateTime"),") \u2014 The time when the data part became inactive.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"refcount")," (",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt32"),") \u2014 The number of places where the data part is used. A value greater than 2 indicates that the data part is used in queries or merges.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"min_date")," (",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/date"},"Date"),") \u2014 The minimum value of the date key in the data part.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"max_date")," (",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/date"},"Date"),") \u2014 The maximum value of the date key in the data part.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"partition_id")," (",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/string"},"String"),") \u2014 ID of the partition.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"min_block_number")," (",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 The minimum number of data parts that make up the current part after merging.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"max_block_number")," (",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 The maximum number of data parts that make up the current part after merging.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"level")," (",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt32"),") \u2014 Depth of the merge tree. Zero means that the current part was created by insert rather than by merging other parts.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"data_version")," (",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 Number that is used to determine which mutations should be applied to the data part (mutations with a version higher than ",(0,i.kt)("inlineCode",{parentName:"p"},"data_version"),").")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"primary_key_bytes_in_memory")," (",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 The amount of memory (in bytes) used by primary key values.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"primary_key_bytes_in_memory_allocated")," (",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 The amount of memory (in bytes) reserved for primary key values.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"database")," (",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/string"},"String"),") \u2014 Name of the database.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"table")," (",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/string"},"String"),") \u2014 Name of the table.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"engine")," (",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/string"},"String"),") \u2014 Name of the table engine without parameters.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"disk_name")," (",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/string"},"String"),") \u2014 Name of a disk that stores the data part.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"path")," (",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/string"},"String"),") \u2014 Absolute path to the folder with data part files.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"column")," (",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/string"},"String"),") \u2014 Name of the column.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"type")," (",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/string"},"String"),") \u2014 Column type.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"column_position")," (",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 Ordinal position of a column in a table starting with 1.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"default_kind")," (",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/string"},"String"),") \u2014 Expression type (",(0,i.kt)("inlineCode",{parentName:"p"},"DEFAULT"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"MATERIALIZED"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ALIAS"),") for the default value, or an empty string if it is not defined.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"default_expression")," (",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/string"},"String"),") \u2014 Expression for the default value, or an empty string if it is not defined.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"column_bytes_on_disk")," (",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 Total size of the column in bytes.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"column_data_compressed_bytes")," (",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 Total size of compressed data in the column, in bytes.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"column_data_uncompressed_bytes")," (",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 Total size of the decompressed data in the column, in bytes.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"column_marks_bytes")," (",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 The size of the column with marks, in bytes.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"bytes")," (",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 Alias for ",(0,i.kt)("inlineCode",{parentName:"p"},"bytes_on_disk"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"marks_size")," (",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 Alias for ",(0,i.kt)("inlineCode",{parentName:"p"},"marks_bytes"),"."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM system.parts_columns LIMIT 1 FORMAT Vertical;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Row 1:\n\u2500\u2500\u2500\u2500\u2500\u2500\npartition:                             tuple()\nname:                                  all_1_2_1\npart_type:                             Wide\nactive:                                1\nmarks:                                 2\nrows:                                  2\nbytes_on_disk:                         155\ndata_compressed_bytes:                 56\ndata_uncompressed_bytes:               4\nmarks_bytes:                           96\nmodification_time:                     2020-09-23 10:13:36\nremove_time:                           2106-02-07 06:28:15\nrefcount:                              1\nmin_date:                              1970-01-01\nmax_date:                              1970-01-01\npartition_id:                          all\nmin_block_number:                      1\nmax_block_number:                      2\nlevel:                                 1\ndata_version:                          1\nprimary_key_bytes_in_memory:           2\nprimary_key_bytes_in_memory_allocated: 64\ndatabase:                              default\ntable:                                 53r93yleapyears\nengine:                                MergeTree\ndisk_name:                             default\npath:                                  /var/lib/clickhouse/data/default/53r93yleapyears/all_1_2_1/\ncolumn:                                id\ntype:                                  Int8\ncolumn_position:                       1\ndefault_kind:\ndefault_expression:\ncolumn_bytes_on_disk:                  76\ncolumn_data_compressed_bytes:          28\ncolumn_data_uncompressed_bytes:        2\ncolumn_marks_bytes:                    48\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"See Also")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/en/engines/table-engines/mergetree-family/mergetree"},"MergeTree family"))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/system_tables/parts_columns"},"Original article")," "))}c.isMDXComponent=!0}}]);