"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[92963],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),c=r,k=m["".concat(o,".").concat(c)]||m[c]||d[c]||i;return n?a.createElement(k,s(s({ref:t},u),{},{components:n})):a.createElement(k,s({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=c;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[m]="string"==typeof e?e:r,s[1]=l;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},29929:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={slug:"/en/sql-reference/syntax",sidebar_position:2,sidebar_label:"Syntax"},s="Syntax",l={unversionedId:"en/sql-reference/syntax",id:"en/sql-reference/syntax",title:"Syntax",description:"There are two types of parsers in the system: the full SQL parser (a recursive descent parser), and the data format parser (a fast stream parser).",source:"@site/docs/en/sql-reference/syntax.md",sourceDirName:"en/sql-reference",slug:"/en/sql-reference/syntax",permalink:"/docs/en/sql-reference/syntax",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/syntax.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{slug:"/en/sql-reference/syntax",sidebar_position:2,sidebar_label:"Syntax"},sidebar:"english",previous:{title:"WATCH",permalink:"/docs/en/sql-reference/statements/watch"},next:{title:"Distributed DDL",permalink:"/docs/en/sql-reference/distributed-ddl"}},o={},p=[{value:"Spaces",id:"spaces",level:2},{value:"Comments",id:"comments",level:2},{value:"Keywords",id:"keywords",level:2},{value:"Identifiers",id:"identifiers",level:2},{value:"Literals",id:"literals",level:2},{value:"Numeric",id:"numeric",level:3},{value:"String",id:"string",level:3},{value:"Compound",id:"compound",level:3},{value:"NULL",id:"null",level:3},{value:"Heredoc",id:"heredoc",level:3},{value:"Defining and Using Query Parameters",id:"defining-and-using-query-parameters",level:2},{value:"Functions",id:"functions",level:2},{value:"Operators",id:"operators",level:2},{value:"Data Types and Database Table Engines",id:"data-types-and-database-table-engines",level:2},{value:"Expression Aliases",id:"expression-aliases",level:2},{value:"Notes on Usage",id:"notes-on-usage",level:3},{value:"Asterisk",id:"asterisk",level:2},{value:"Expressions",id:"expressions",level:2}],u={toc:p},m="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"syntax"},"Syntax"),(0,r.kt)("p",null,"There are two types of parsers in the system: the full SQL parser (a recursive descent parser), and the data format parser (a fast stream parser).\nIn all cases except the ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT")," query, only the full SQL parser is used.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT")," query uses both parsers:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO t VALUES (1, 'Hello, world'), (2, 'abc'), (3, 'def')\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT INTO t VALUES")," fragment is parsed by the full parser, and the data ",(0,r.kt)("inlineCode",{parentName:"p"},"(1, 'Hello, world'), (2, 'abc'), (3, 'def')")," is parsed by the fast stream parser. You can also turn on the full parser for the data by using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/operations/settings/formats#settings-input_format_values_interpret_expressions"},"input_format_values_interpret_expressions")," setting. When ",(0,r.kt)("inlineCode",{parentName:"p"},"input_format_values_interpret_expressions = 1"),", ClickHouse first tries to parse values with the fast stream parser. If it fails, ClickHouse tries to use the full parser for the data, treating it like an SQL ",(0,r.kt)("a",{parentName:"p",href:"#syntax-expressions"},"expression"),"."),(0,r.kt)("p",null,"Data can have any format. When a query is received, the server calculates no more than ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/operations/settings/settings#settings-max_query_size"},"max_query_size")," bytes of the request in RAM (by default, 1 MB), and the rest is stream parsed.\nIt allows for avoiding issues with large ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT")," queries."),(0,r.kt)("p",null,"When using the ",(0,r.kt)("inlineCode",{parentName:"p"},"Values")," format in an ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT")," query, it may seem that data is parsed the same as expressions in a ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT")," query, but this is not true. The ",(0,r.kt)("inlineCode",{parentName:"p"},"Values")," format is much more limited."),(0,r.kt)("p",null,"The rest of this article covers the full parser. For more information about format parsers, see the ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/interfaces/formats"},"Formats")," section."),(0,r.kt)("h2",{id:"spaces"},"Spaces"),(0,r.kt)("p",null,"There may be any number of space symbols between syntactical constructions (including the beginning and end of a query). Space symbols include the space, tab, line feed, CR, and form feed."),(0,r.kt)("h2",{id:"comments"},"Comments"),(0,r.kt)("p",null,"ClickHouse supports either SQL-style and C-style comments:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"SQL-style comments start with ",(0,r.kt)("inlineCode",{parentName:"li"},"--"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"#!")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"# ")," and continue to the end of the line, a space after ",(0,r.kt)("inlineCode",{parentName:"li"},"--")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"#!")," can be omitted."),(0,r.kt)("li",{parentName:"ul"},"C-style are from ",(0,r.kt)("inlineCode",{parentName:"li"},"/*")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"*/"),"and can be multiline, spaces are not required either.")),(0,r.kt)("h2",{id:"keywords"},"Keywords"),(0,r.kt)("p",null,"Keywords are case-insensitive when they correspond to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"SQL standard. For example, ",(0,r.kt)("inlineCode",{parentName:"li"},"SELECT"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"select")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"SeLeCt")," are all valid."),(0,r.kt)("li",{parentName:"ul"},"Implementation in some popular DBMS (MySQL or Postgres). For example, ",(0,r.kt)("inlineCode",{parentName:"li"},"DateTime")," is the same as ",(0,r.kt)("inlineCode",{parentName:"li"},"datetime"),".")),(0,r.kt)("p",null,"You can check whether a data type name is case-sensitive in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/operations/system-tables/data_type_families#system_tables-data_type_families"},"system.data_type_families")," table."),(0,r.kt)("p",null,"In contrast to standard SQL, all other keywords (including functions names) are ",(0,r.kt)("strong",{parentName:"p"},"case-sensitive"),"."),(0,r.kt)("p",null,"Keywords are not reserved; they are treated as such only in the corresponding context. If you use ",(0,r.kt)("a",{parentName:"p",href:"#syntax-identifiers"},"identifiers")," with the same name as the keywords, enclose them into double-quotes or backticks. For example, the query ",(0,r.kt)("inlineCode",{parentName:"p"},'SELECT "FROM" FROM table_name')," is valid if the table ",(0,r.kt)("inlineCode",{parentName:"p"},"table_name")," has column with the name ",(0,r.kt)("inlineCode",{parentName:"p"},'"FROM"'),"."),(0,r.kt)("h2",{id:"identifiers"},"Identifiers"),(0,r.kt)("p",null,"Identifiers are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Cluster, database, table, partition, and column names."),(0,r.kt)("li",{parentName:"ul"},"Functions."),(0,r.kt)("li",{parentName:"ul"},"Data types."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#syntax-expression_aliases"},"Expression aliases"),".")),(0,r.kt)("p",null,"Identifiers can be quoted or non-quoted. The latter is preferred."),(0,r.kt)("p",null,"Non-quoted identifiers must match the regex ",(0,r.kt)("inlineCode",{parentName:"p"},"^[a-zA-Z_][0-9a-zA-Z_]*$")," and can not be equal to ",(0,r.kt)("a",{parentName:"p",href:"#syntax-keywords"},"keywords"),". Examples: ",(0,r.kt)("inlineCode",{parentName:"p"},"x"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"_1"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"X_y__Z123_"),"."),(0,r.kt)("p",null,"If you want to use identifiers the same as keywords or you want to use other symbols in identifiers, quote it using double quotes or backticks, for example, ",(0,r.kt)("inlineCode",{parentName:"p"},'"id"'),", ",(0,r.kt)("inlineCode",{parentName:"p"},"`id`"),"."),(0,r.kt)("h2",{id:"literals"},"Literals"),(0,r.kt)("p",null,"There are numeric, string, compound, and ",(0,r.kt)("inlineCode",{parentName:"p"},"NULL")," literals."),(0,r.kt)("h3",{id:"numeric"},"Numeric"),(0,r.kt)("p",null,"Numeric literal tries to be parsed:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"First, as a 64-bit signed number, using the ",(0,r.kt)("a",{parentName:"li",href:"https://en.cppreference.com/w/cpp/string/byte/strtoul"},"strtoull")," function."),(0,r.kt)("li",{parentName:"ul"},"If unsuccessful, as a 64-bit unsigned number, using the ",(0,r.kt)("a",{parentName:"li",href:"https://en.cppreference.com/w/cpp/string/byte/strtol"},"strtoll")," function."),(0,r.kt)("li",{parentName:"ul"},"If unsuccessful, as a floating-point number using the ",(0,r.kt)("a",{parentName:"li",href:"https://en.cppreference.com/w/cpp/string/byte/strtof"},"strtod")," function."),(0,r.kt)("li",{parentName:"ul"},"Otherwise, it returns an error.")),(0,r.kt)("p",null,"Literal value has the smallest type that the value fits in.\nFor example, 1 is parsed as ",(0,r.kt)("inlineCode",{parentName:"p"},"UInt8"),", but 256 is parsed as ",(0,r.kt)("inlineCode",{parentName:"p"},"UInt16"),". For more information, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/"},"Data types"),".\nUnderscores ",(0,r.kt)("inlineCode",{parentName:"p"},"_")," inside numeric literals are ignored and can be used for better readability."),(0,r.kt)("p",null,"Examples: ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"10_000_000"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"0xffff_ffff"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"18446744073709551615"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"0xDEADBEEF"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"01"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"0.1"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"1e100"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"-1e-100"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"inf"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"nan"),"."),(0,r.kt)("h3",{id:"string"},"String"),(0,r.kt)("p",null,"Only string literals in single quotes are supported. The enclosed characters can be backslash-escaped. The following escape sequences have a corresponding special value: ",(0,r.kt)("inlineCode",{parentName:"p"},"\\b"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"\\f"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"\\r"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"\\n"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"\\t"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"\\0"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"\\a"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"\\v"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"\\xHH"),". In all other cases, escape sequences in the format ",(0,r.kt)("inlineCode",{parentName:"p"},"\\c"),", where ",(0,r.kt)("inlineCode",{parentName:"p"},"c")," is any character, are converted to ",(0,r.kt)("inlineCode",{parentName:"p"},"c"),". It means that you can use the sequences ",(0,r.kt)("inlineCode",{parentName:"p"},"\\'"),"and",(0,r.kt)("inlineCode",{parentName:"p"},"\\\\"),". The value will have the ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/string"},"String")," type."),(0,r.kt)("p",null,"In string literals, you need to escape at least ",(0,r.kt)("inlineCode",{parentName:"p"},"'")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"\\"),". Single quotes can be escaped with the single quote, literals ",(0,r.kt)("inlineCode",{parentName:"p"},"'It\\'s'")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"'It''s'")," are equal."),(0,r.kt)("h3",{id:"compound"},"Compound"),(0,r.kt)("p",null,"Arrays are constructed with square brackets ",(0,r.kt)("inlineCode",{parentName:"p"},"[1, 2, 3]"),". Tuples are constructed with round brackets ",(0,r.kt)("inlineCode",{parentName:"p"},"(1, 'Hello, world!', 2)"),".\nTechnically these are not literals, but expressions with the array creation operator and the tuple creation operator, respectively.\nAn array must consist of at least one item, and a tuple must have at least two items.\nThere\u2019s a separate case when tuples appear in the ",(0,r.kt)("inlineCode",{parentName:"p"},"IN")," clause of a ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT")," query. Query results can include tuples, but tuples can\u2019t be saved to a database (except of tables with ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/special/memory"},"Memory")," engine)."),(0,r.kt)("h3",{id:"null"},"NULL"),(0,r.kt)("p",null,"Indicates that the value is missing."),(0,r.kt)("p",null,"In order to store ",(0,r.kt)("inlineCode",{parentName:"p"},"NULL")," in a table field, it must be of the ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/nullable"},"Nullable")," type."),(0,r.kt)("p",null,"Depending on the data format (input or output), ",(0,r.kt)("inlineCode",{parentName:"p"},"NULL")," may have a different representation. For more information, see the documentation for ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/interfaces/formats#formats"},"data formats"),"."),(0,r.kt)("p",null,"There are many nuances to processing ",(0,r.kt)("inlineCode",{parentName:"p"},"NULL"),". For example, if at least one of the arguments of a comparison operation is ",(0,r.kt)("inlineCode",{parentName:"p"},"NULL"),", the result of this operation is also ",(0,r.kt)("inlineCode",{parentName:"p"},"NULL"),". The same is true for multiplication, addition, and other operations. For more information, read the documentation for each operation."),(0,r.kt)("p",null,"In queries, you can check ",(0,r.kt)("inlineCode",{parentName:"p"},"NULL")," using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/operators/#operator-is-null"},"IS NULL")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/operators/"},"IS NOT NULL")," operators and the related functions ",(0,r.kt)("inlineCode",{parentName:"p"},"isNull")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"isNotNull"),"."),(0,r.kt)("h3",{id:"heredoc"},"Heredoc"),(0,r.kt)("p",null,"A ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Here_document"},"heredoc")," is a way to define a string (often multiline), while maintaining the original formatting. A heredoc is defined as a custom string literal, placed between two ",(0,r.kt)("inlineCode",{parentName:"p"},"$")," symbols, for example ",(0,r.kt)("inlineCode",{parentName:"p"},"$heredoc$"),'. A value between two heredocs is processed "as-is".'),(0,r.kt)("p",null,"You can use a heredoc to embed snippets of SQL, HTML, or XML code, etc."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("p",null,"Query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT $smth$SHOW CREATE VIEW my_view$smth$;\n")),(0,r.kt)("p",null,"Result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500'SHOW CREATE VIEW my_view'\u2500\u2510\n\u2502 SHOW CREATE VIEW my_view   \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h2",{id:"defining-and-using-query-parameters"},"Defining and Using Query Parameters"),(0,r.kt)("p",null,"Query parameters allow you to write generic queries that contain abstract placeholders instead of concrete identifiers. When a query with query parameters is executed, all placeholders are resolved and replaced by the actual query parameter values."),(0,r.kt)("p",null,"There are two way to define a query parameter:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"use the ",(0,r.kt)("inlineCode",{parentName:"li"},"SET param_<name>=<value>")," command"),(0,r.kt)("li",{parentName:"ul"},"use ",(0,r.kt)("inlineCode",{parentName:"li"},"--param_<name>='<value>'")," as an argument to ",(0,r.kt)("inlineCode",{parentName:"li"},"clickhouse-client")," on the command line. ",(0,r.kt)("inlineCode",{parentName:"li"},"<name>")," is the name of the query parameter and ",(0,r.kt)("inlineCode",{parentName:"li"},"<value>")," is its value")),(0,r.kt)("p",null,"A query parameter can be referenced in a query using ",(0,r.kt)("inlineCode",{parentName:"p"},"{<name>: <datatype>}"),", where ",(0,r.kt)("inlineCode",{parentName:"p"},"<name>")," is the query parameter name and ",(0,r.kt)("inlineCode",{parentName:"p"},"<datatype>")," is the datatype it is converted to."),(0,r.kt)("p",null,"For example, the following SQL defines parameters named ",(0,r.kt)("inlineCode",{parentName:"p"},"a"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"b"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"c")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"d")," - each with a different data type:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SET param_a = 13;\nSET param_b = 'str';\nSET param_c = '2022-08-04 18:30:53';\nSET param_d = {'10': [11, 12], '13': [14, 15]}';\n\nSELECT\n   {a: UInt32},\n   {b: String},\n   {c: DateTime},\n   {d: Map(String, Array(UInt8))};\n")),(0,r.kt)("p",null,"Result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-response"},"13  str 2022-08-04 18:30:53 {'10':[11,12],'13':[14,15]}\n")),(0,r.kt)("p",null,"If you are using ",(0,r.kt)("inlineCode",{parentName:"p"},"clickhouse-client"),", the parameters are specified as ",(0,r.kt)("inlineCode",{parentName:"p"},"--param_name=value"),". For example, the following parameter has the name ",(0,r.kt)("inlineCode",{parentName:"p"},"message")," and it is retrieved as a ",(0,r.kt)("inlineCode",{parentName:"p"},"String"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"clickhouse-client --param_message='hello' --query=\"SELECT {message: String}\"\n")),(0,r.kt)("p",null,"Result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-response"},"hello\n")),(0,r.kt)("p",null,"If the query parameter represents the name of a database, table, function or other identifier, use ",(0,r.kt)("inlineCode",{parentName:"p"},"Identifier")," for its type. For example, the following query returns rows from a table named ",(0,r.kt)("inlineCode",{parentName:"p"},"uk_price_paid"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'SET param_mytablename = "uk_price_paid";\nSELECT * FROM {mytablename:Identifier};\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Query parameters are not general text substitutions which can be used in arbitrary places in arbitrary SQL queries. They are primarily designed to work in ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT")," statements in place of identifiers or literals.")),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("p",null,"Function calls are written like an identifier with a list of arguments (possibly empty) in round brackets. In contrast to standard SQL, the brackets are required, even for an empty argument list. Example: ",(0,r.kt)("inlineCode",{parentName:"p"},"now()"),".\nThere are regular and aggregate functions (see the section \u201cAggregate functions\u201d). Some aggregate functions can contain two lists of arguments in brackets. Example: ",(0,r.kt)("inlineCode",{parentName:"p"},"quantile (0.9) (x)"),". These aggregate functions are called \u201cparametric\u201d functions, and the arguments in the first list are called \u201cparameters\u201d. The syntax of aggregate functions without parameters is the same as for regular functions."),(0,r.kt)("h2",{id:"operators"},"Operators"),(0,r.kt)("p",null,"Operators are converted to their corresponding functions during query parsing, taking their priority and associativity into account.\nFor example, the expression ",(0,r.kt)("inlineCode",{parentName:"p"},"1 + 2 * 3 + 4")," is transformed to ",(0,r.kt)("inlineCode",{parentName:"p"},"plus(plus(1, multiply(2, 3)), 4)"),"."),(0,r.kt)("h2",{id:"data-types-and-database-table-engines"},"Data Types and Database Table Engines"),(0,r.kt)("p",null,"Data types and table engines in the ",(0,r.kt)("inlineCode",{parentName:"p"},"CREATE")," query are written the same way as identifiers or functions. In other words, they may or may not contain an argument list in brackets. For more information, see the sections \u201cData types,\u201d \u201cTable engines,\u201d and \u201cCREATE\u201d."),(0,r.kt)("h2",{id:"expression-aliases"},"Expression Aliases"),(0,r.kt)("p",null,"An alias is a user-defined name for expression in a query."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"expr AS alias\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"AS")," \u2014 The keyword for defining aliases. You can define the alias for a table name or a column name in a ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT")," clause without using the ",(0,r.kt)("inlineCode",{parentName:"p"},"AS")," keyword."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"For example, `SELECT table_name_alias.column_name FROM table_name table_name_alias`.\n\nIn the [CAST](/docs/en/sql-reference/functions/type-conversion-functions#type_conversion_function-cast) function, the `AS` keyword has another meaning. See the description of the function.\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"expr")," \u2014 Any expression supported by ClickHouse."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"For example, `SELECT column_name * 2 AS double FROM some_table`.\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"alias")," \u2014 Name for ",(0,r.kt)("inlineCode",{parentName:"p"},"expr"),". Aliases should comply with the ",(0,r.kt)("a",{parentName:"p",href:"#syntax-identifiers"},"identifiers")," syntax."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'For example, `SELECT "table t".column_name FROM table_name AS "table t"`.\n')))),(0,r.kt)("h3",{id:"notes-on-usage"},"Notes on Usage"),(0,r.kt)("p",null,"Aliases are global for a query or subquery, and you can define an alias in any part of a query for any expression. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT (1 AS n) + 2, n"),"."),(0,r.kt)("p",null,"Aliases are not visible in subqueries and between subqueries. For example, while executing the query ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT (SELECT sum(b.a) + num FROM b) - a.a AS num FROM a")," ClickHouse generates the exception ",(0,r.kt)("inlineCode",{parentName:"p"},"Unknown identifier: num"),"."),(0,r.kt)("p",null,"If an alias is defined for the result columns in the ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT")," clause of a subquery, these columns are visible in the outer query. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT n + m FROM (SELECT 1 AS n, 2 AS m)"),"."),(0,r.kt)("p",null,"Be careful with aliases that are the same as column or table names. Let\u2019s consider the following example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE t\n(\n    a Int,\n    b Int\n)\nENGINE = TinyLog()\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    argMax(a, b),\n    sum(b) AS b\nFROM t\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Received exception from server (version 18.14.17):\nCode: 184. DB::Exception: Received from localhost:9000, 127.0.0.1. DB::Exception: Aggregate function sum(b) is found inside another aggregate function in query.\n")),(0,r.kt)("p",null,"In this example, we declared table ",(0,r.kt)("inlineCode",{parentName:"p"},"t")," with column ",(0,r.kt)("inlineCode",{parentName:"p"},"b"),". Then, when selecting data, we defined the ",(0,r.kt)("inlineCode",{parentName:"p"},"sum(b) AS b")," alias. As aliases are global, ClickHouse substituted the literal ",(0,r.kt)("inlineCode",{parentName:"p"},"b")," in the expression ",(0,r.kt)("inlineCode",{parentName:"p"},"argMax(a, b)")," with the expression ",(0,r.kt)("inlineCode",{parentName:"p"},"sum(b)"),". This substitution caused the exception. You can change this default behavior by setting ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/operations/settings/settings#prefer_column_name_to_alias"},"prefer_column_name_to_alias")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),"."),(0,r.kt)("h2",{id:"asterisk"},"Asterisk"),(0,r.kt)("p",null,"In a ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT")," query, an asterisk can replace the expression. For more information, see the section \u201cSELECT\u201d."),(0,r.kt)("h2",{id:"expressions"},"Expressions"),(0,r.kt)("p",null,"An expression is a function, identifier, literal, application of an operator, expression in brackets, subquery, or asterisk. It can also contain an alias.\nA list of expressions is one or more expressions separated by commas.\nFunctions and operators, in turn, can have expressions as arguments."))}d.isMDXComponent=!0}}]);