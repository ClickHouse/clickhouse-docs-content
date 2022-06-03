"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[17523],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return c}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),p=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=p(e.components);return a.createElement(o.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(t),c=r,N=u["".concat(o,".").concat(c)]||u[c]||d[c]||i;return t?a.createElement(N,l(l({ref:n},m),{},{components:t})):a.createElement(N,l({ref:n},m))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=u;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var p=2;p<i;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},92193:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var a=t(87462),r=t(63366),i=(t(67294),t(3905)),l=["components"],s={sidebar_position:39,sidebar_label:"EXPLAIN"},o="EXPLAIN Statement",p={unversionedId:"en/sql-reference/statements/explain",id:"en/sql-reference/statements/explain",title:"EXPLAIN Statement",description:"Shows the execution plan of a statement.",source:"@site/docs/en/sql-reference/statements/explain.md",sourceDirName:"en/sql-reference/statements",slug:"/en/sql-reference/statements/explain",permalink:"/docs/en/sql-reference/statements/explain",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/statements/explain.md",tags:[],version:"current",sidebarPosition:39,frontMatter:{sidebar_position:39,sidebar_label:"EXPLAIN"},sidebar:"english",previous:{title:"GRANT",permalink:"/docs/en/sql-reference/statements/grant"},next:{title:"REVOKE",permalink:"/docs/en/sql-reference/statements/revoke"}},m={},d=[{value:"EXPLAIN Types",id:"explain-types",level:2},{value:"EXPLAIN AST",id:"explain-ast",level:3},{value:"EXPLAIN SYNTAX",id:"explain-syntax",level:3},{value:"EXPLAIN PLAN",id:"explain-plan",level:3},{value:"EXPLAIN PIPELINE",id:"explain-pipeline",level:3},{value:"EXPLAIN ESTIMATE",id:"explain-estimate",level:3},{value:"EXPLAIN TABLE OVERRIDE",id:"explain-table-override",level:3}],u={toc:d};function c(e){var n=e.components,t=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"explain-statement"},"EXPLAIN Statement"),(0,i.kt)("p",null,"Shows the execution plan of a statement."),(0,i.kt)("p",null,"Syntax:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"EXPLAIN [AST | SYNTAX | PLAN | PIPELINE | ESTIMATE | TABLE OVERRIDE] [setting = value, ...]\n    [\n      SELECT ... |\n      tableFunction(...) [COLUMNS (...)] [ORDER BY ...] [PARTITION BY ...] [PRIMARY KEY] [SAMPLE BY ...] [TTL ...]\n    ]\n    [FORMAT ...]\n")),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"EXPLAIN SELECT sum(number) FROM numbers(10) UNION ALL SELECT sum(number) FROM numbers(10) ORDER BY sum(number) ASC FORMAT TSV;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"Union\n  Expression (Projection)\n    Expression (Before ORDER BY and SELECT)\n      Aggregating\n        Expression (Before GROUP BY)\n          SettingQuotaAndLimits (Set limits and quota after reading from storage)\n            ReadFromStorage (SystemNumbers)\n  Expression (Projection)\n    MergingSorted (Merge sorted streams for ORDER BY)\n      MergeSorting (Merge sorted blocks for ORDER BY)\n        PartialSorting (Sort each block for ORDER BY)\n          Expression (Before ORDER BY and SELECT)\n            Aggregating\n              Expression (Before GROUP BY)\n                SettingQuotaAndLimits (Set limits and quota after reading from storage)\n                  ReadFromStorage (SystemNumbers)\n")),(0,i.kt)("h2",{id:"explain-types"},"EXPLAIN Types"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"AST")," \u2014 Abstract syntax tree."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SYNTAX")," \u2014 Query text after AST-level optimizations."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PLAN")," \u2014 Query execution plan."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PIPELINE")," \u2014 Query execution pipeline.")),(0,i.kt)("h3",{id:"explain-ast"},"EXPLAIN AST"),(0,i.kt)("p",null,"Dump query AST. Supports all types of queries, not only ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT"),"."),(0,i.kt)("p",null,"Examples:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"EXPLAIN AST SELECT 1;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SelectWithUnionQuery (children 1)\n ExpressionList (children 1)\n  SelectQuery (children 1)\n   ExpressionList (children 1)\n    Literal UInt64_1\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"EXPLAIN AST ALTER TABLE t1 DELETE WHERE date = today();\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"  explain\n  AlterQuery  t1 (children 1)\n   ExpressionList (children 1)\n    AlterCommand 27 (children 1)\n     Function equals (children 1)\n      ExpressionList (children 2)\n       Identifier date\n       Function today (children 1)\n        ExpressionList\n")),(0,i.kt)("h3",{id:"explain-syntax"},"EXPLAIN SYNTAX"),(0,i.kt)("p",null,"Returns query after syntax optimizations."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"EXPLAIN SYNTAX SELECT * FROM system.numbers AS a, system.numbers AS b, system.numbers AS c;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    `--a.number` AS `a.number`,\n    `--b.number` AS `b.number`,\n    number AS `c.number`\nFROM\n(\n    SELECT\n        number AS `--a.number`,\n        b.number AS `--b.number`\n    FROM system.numbers AS a\n    CROSS JOIN system.numbers AS b\n) AS `--.s`\nCROSS JOIN system.numbers AS c\n")),(0,i.kt)("h3",{id:"explain-plan"},"EXPLAIN PLAN"),(0,i.kt)("p",null,"Dump query plan steps."),(0,i.kt)("p",null,"Settings:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"header")," \u2014 Prints output header for step. Default: 0."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"description")," \u2014 Prints step description. Default: 1."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"indexes")," \u2014 Shows used indexes, the number of filtered parts and the number of filtered granules for every index applied. Default: 0. Supported for ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/engines/table-engines/mergetree-family/mergetree"},"MergeTree")," tables."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"actions")," \u2014 Prints detailed information about step actions. Default: 0."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"json")," \u2014 Prints query plan steps as a row in ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/interfaces/formats#json"},"JSON")," format. Default: 0. It is recommended to use ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/interfaces/formats#tabseparatedraw"},"TSVRaw")," format to avoid unnecessary escaping.")),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"EXPLAIN SELECT sum(number) FROM numbers(10) GROUP BY number % 4;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"Union\n  Expression (Projection)\n  Expression (Before ORDER BY and SELECT)\n    Aggregating\n      Expression (Before GROUP BY)\n        SettingQuotaAndLimits (Set limits and quota after reading from storage)\n          ReadFromStorage (SystemNumbers)\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Step and query cost estimation is not supported."))),(0,i.kt)("p",null,"When ",(0,i.kt)("inlineCode",{parentName:"p"},"json = 1"),", the query plan is represented in JSON format. Every node is a dictionary that always has the keys ",(0,i.kt)("inlineCode",{parentName:"p"},"Node Type")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Plans"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"Node Type")," is a string with a step name. ",(0,i.kt)("inlineCode",{parentName:"p"},"Plans")," is an array with child step descriptions. Other optional keys may be added depending on node type and settings."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"EXPLAIN json = 1, description = 0 SELECT 1 UNION ALL SELECT 2 FORMAT TSVRaw;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "Plan": {\n      "Node Type": "Union",\n      "Plans": [\n        {\n          "Node Type": "Expression",\n          "Plans": [\n            {\n              "Node Type": "SettingQuotaAndLimits",\n              "Plans": [\n                {\n                  "Node Type": "ReadFromStorage"\n                }\n              ]\n            }\n          ]\n        },\n        {\n          "Node Type": "Expression",\n          "Plans": [\n            {\n              "Node Type": "SettingQuotaAndLimits",\n              "Plans": [\n                {\n                  "Node Type": "ReadFromStorage"\n                }\n              ]\n            }\n          ]\n        }\n      ]\n    }\n  }\n]\n')),(0,i.kt)("p",null,"With ",(0,i.kt)("inlineCode",{parentName:"p"},"description")," = 1, the ",(0,i.kt)("inlineCode",{parentName:"p"},"Description")," key is added to the step:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Node Type": "ReadFromStorage",\n  "Description": "SystemOne"\n}\n')),(0,i.kt)("p",null,"With ",(0,i.kt)("inlineCode",{parentName:"p"},"header")," = 1, the ",(0,i.kt)("inlineCode",{parentName:"p"},"Header")," key is added to the step as an array of columns."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"EXPLAIN json = 1, description = 0, header = 1 SELECT 1, 2 + dummy;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "Plan": {\n      "Node Type": "Expression",\n      "Header": [\n        {\n          "Name": "1",\n          "Type": "UInt8"\n        },\n        {\n          "Name": "plus(2, dummy)",\n          "Type": "UInt16"\n        }\n      ],\n      "Plans": [\n        {\n          "Node Type": "SettingQuotaAndLimits",\n          "Header": [\n            {\n              "Name": "dummy",\n              "Type": "UInt8"\n            }\n          ],\n          "Plans": [\n            {\n              "Node Type": "ReadFromStorage",\n              "Header": [\n                {\n                  "Name": "dummy",\n                  "Type": "UInt8"\n                }\n              ]\n            }\n          ]\n        }\n      ]\n    }\n  }\n]\n')),(0,i.kt)("p",null,"With ",(0,i.kt)("inlineCode",{parentName:"p"},"indexes")," = 1, the ",(0,i.kt)("inlineCode",{parentName:"p"},"Indexes")," key is added. It contains an array of used indexes. Each index is described as JSON with ",(0,i.kt)("inlineCode",{parentName:"p"},"Type")," key (a string ",(0,i.kt)("inlineCode",{parentName:"p"},"MinMax"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Partition"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"PrimaryKey")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Skip"),") and optional keys:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Name")," \u2014 An index name (for now, is used only for ",(0,i.kt)("inlineCode",{parentName:"li"},"Skip")," index)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Keys")," \u2014 An array of columns used by the index."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Condition")," \u2014 A string with condition used."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Description")," \u2014 An index (for now, is used only for ",(0,i.kt)("inlineCode",{parentName:"li"},"Skip")," index)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Initial Parts")," \u2014 A number of parts before the index is applied."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Selected Parts")," \u2014 A number of parts after the index is applied."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Initial Granules")," \u2014 A number of granules before the index is applied."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Selected Granulesis")," \u2014 A number of granules after the index is applied.")),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"Node Type": "ReadFromMergeTree",\n"Indexes": [\n  {\n    "Type": "MinMax",\n    "Keys": ["y"],\n    "Condition": "(y in [1, +inf))",\n    "Initial Parts": 5,\n    "Selected Parts": 4,\n    "Initial Granules": 12,\n    "Selected Granules": 11\n  },\n  {\n    "Type": "Partition",\n    "Keys": ["y", "bitAnd(z, 3)"],\n    "Condition": "and((bitAnd(z, 3) not in [1, 1]), and((y in [1, +inf)), (bitAnd(z, 3) not in [1, 1])))",\n    "Initial Parts": 4,\n    "Selected Parts": 3,\n    "Initial Granules": 11,\n    "Selected Granules": 10\n  },\n  {\n    "Type": "PrimaryKey",\n    "Keys": ["x", "y"],\n    "Condition": "and((x in [11, +inf)), (y in [1, +inf)))",\n    "Initial Parts": 3,\n    "Selected Parts": 2,\n    "Initial Granules": 10,\n    "Selected Granules": 6\n  },\n  {\n    "Type": "Skip",\n    "Name": "t_minmax",\n    "Description": "minmax GRANULARITY 2",\n    "Initial Parts": 2,\n    "Selected Parts": 1,\n    "Initial Granules": 6,\n    "Selected Granules": 2\n  },\n  {\n    "Type": "Skip",\n    "Name": "t_set",\n    "Description": "set GRANULARITY 2",\n    "Initial Parts": 1,\n    "Selected Parts": 1,\n    "Initial Granules": 2,\n    "Selected Granules": 1\n  }\n]\n')),(0,i.kt)("p",null,"With ",(0,i.kt)("inlineCode",{parentName:"p"},"actions")," = 1, added keys depend on step type."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"EXPLAIN json = 1, actions = 1, description = 0 SELECT 1 FORMAT TSVRaw;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "Plan": {\n      "Node Type": "Expression",\n      "Expression": {\n        "Inputs": [],\n        "Actions": [\n          {\n            "Node Type": "Column",\n            "Result Type": "UInt8",\n            "Result Type": "Column",\n            "Column": "Const(UInt8)",\n            "Arguments": [],\n            "Removed Arguments": [],\n            "Result": 0\n          }\n        ],\n        "Outputs": [\n          {\n            "Name": "1",\n            "Type": "UInt8"\n          }\n        ],\n        "Positions": [0],\n        "Project Input": true\n      },\n      "Plans": [\n        {\n          "Node Type": "SettingQuotaAndLimits",\n          "Plans": [\n            {\n              "Node Type": "ReadFromStorage"\n            }\n          ]\n        }\n      ]\n    }\n  }\n]\n')),(0,i.kt)("h3",{id:"explain-pipeline"},"EXPLAIN PIPELINE"),(0,i.kt)("p",null,"Settings:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"header")," \u2014 Prints header for each output port. Default: 0."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"graph")," \u2014 Prints a graph described in the ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/DOT_(graph_description_language)"},"DOT")," graph description language. Default: 0."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"compact")," \u2014 Prints graph in compact mode if ",(0,i.kt)("inlineCode",{parentName:"li"},"graph")," setting is enabled. Default: 1.")),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"EXPLAIN PIPELINE SELECT sum(number) FROM numbers_mt(100000) GROUP BY number % 4;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"(Union)\n(Expression)\nExpressionTransform\n  (Expression)\n  ExpressionTransform\n    (Aggregating)\n    Resize 2 \u2192 1\n      AggregatingTransform \xd7 2\n        (Expression)\n        ExpressionTransform \xd7 2\n          (SettingQuotaAndLimits)\n            (ReadFromStorage)\n            NumbersMt \xd7 2 0 \u2192 1\n")),(0,i.kt)("h3",{id:"explain-estimate"},"EXPLAIN ESTIMATE"),(0,i.kt)("p",null,"Shows the estimated number of rows, marks and parts to be read from the tables while processing the query. Works with tables in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/mergetree-family/mergetree#table_engines-mergetree"},"MergeTree")," family. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("p",null,"Creating a table:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE ttt (i Int64) ENGINE = MergeTree() ORDER BY i SETTINGS index_granularity = 16, write_final_mark = 0;\nINSERT INTO ttt SELECT number FROM numbers(128);\nOPTIMIZE TABLE ttt;\n")),(0,i.kt)("p",null,"Query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"EXPLAIN ESTIMATE SELECT * FROM ttt;\n")),(0,i.kt)("p",null,"Result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500database\u2500\u252c\u2500table\u2500\u252c\u2500parts\u2500\u252c\u2500rows\u2500\u252c\u2500marks\u2500\u2510\n\u2502 default  \u2502 ttt   \u2502     1 \u2502  128 \u2502     8 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("h3",{id:"explain-table-override"},"EXPLAIN TABLE OVERRIDE"),(0,i.kt)("p",null,"Shows the result of a table override on a table schema accessed through a table function.\nAlso does some validation, throwing an exception if the override would have caused some kind of failure."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("p",null,"Assume you have a remote MySQL table like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE db.tbl (\n    id INT PRIMARY KEY,\n    created DATETIME DEFAULT now()\n)\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"EXPLAIN TABLE OVERRIDE mysql('127.0.0.1:3306', 'db', 'tbl', 'root', 'clickhouse')\nPARTITION BY toYYYYMM(assumeNotNull(created))\n")),(0,i.kt)("p",null,"Result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500explain\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 PARTITION BY uses columns: `created` Nullable(DateTime) \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The validation is not complete, so a successfull query does not guarantee that the override would not cause issues."))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/sql-reference/statements/explain/"},"\u041eriginal article")," "))}c.isMDXComponent=!0}}]);