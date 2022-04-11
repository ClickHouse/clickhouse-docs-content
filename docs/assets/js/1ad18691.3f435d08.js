"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[16045],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),f=u(n),c=a,d=f["".concat(s,".").concat(c)]||f[c]||m[c]||l;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},28228:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return m}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),i=["components"],o={sidebar_position:45,sidebar_label:"hdfs"},s="hdfs",u={unversionedId:"en/sql-reference/table-functions/hdfs",id:"en/sql-reference/table-functions/hdfs",title:"hdfs",description:"hdfs}",source:"@site/docs/en/sql-reference/table-functions/hdfs.md",sourceDirName:"en/sql-reference/table-functions",slug:"/en/sql-reference/table-functions/hdfs",permalink:"/en/sql-reference/table-functions/hdfs",editUrl:"https://github.com/ClickHouse/clickhouse-docs/tree/main/docs/en/sql-reference/table-functions/hdfs.md",tags:[],version:"current",sidebarPosition:45,frontMatter:{sidebar_position:45,sidebar_label:"hdfs"},sidebar:"english",previous:{title:"odbc",permalink:"/en/sql-reference/table-functions/odbc"},next:{title:"s3",permalink:"/en/sql-reference/table-functions/s3"}},p={},m=[{value:"Virtual Columns",id:"virtual-columns",level:2}],f={toc:m};function c(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"hdfs"},"hdfs"),(0,l.kt)("p",null,"Creates a table from files in HDFS. This table function is similar to ",(0,l.kt)("a",{parentName:"p",href:"/en/sql-reference/table-functions/url"},"url")," and ",(0,l.kt)("a",{parentName:"p",href:"/en/sql-reference/table-functions/file"},"file")," ones."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"hdfs(URI, format, structure)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Input parameters")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"URI")," \u2014 The relative URI to the file in HDFS. Path to file support following globs in readonly mode: ",(0,l.kt)("inlineCode",{parentName:"li"},"*"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"?"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"{abc,def}")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"{N..M}")," where ",(0,l.kt)("inlineCode",{parentName:"li"},"N"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"M")," \u2014 numbers, ","`",(0,l.kt)("inlineCode",{parentName:"li"},"'abc', 'def'")," \u2014 strings."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"format")," \u2014 The ",(0,l.kt)("a",{parentName:"li",href:"/en/interfaces/formats#formats"},"format")," of the file."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"structure")," \u2014 Structure of the table. Format ",(0,l.kt)("inlineCode",{parentName:"li"},"'column1_name column1_type, column2_name column2_type, ...'"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returned value")),(0,l.kt)("p",null,"A table with the specified structure for reading or writing data in the specified file."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("p",null,"Table from ",(0,l.kt)("inlineCode",{parentName:"p"},"hdfs://hdfs1:9000/test")," and selection of the first two rows from it:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM hdfs('hdfs://hdfs1:9000/test', 'TSV', 'column1 UInt32, column2 UInt32, column3 UInt32')\nLIMIT 2\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500column1\u2500\u252c\u2500column2\u2500\u252c\u2500column3\u2500\u2510\n\u2502       1 \u2502       2 \u2502       3 \u2502\n\u2502       3 \u2502       2 \u2502       1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Globs in path")),(0,l.kt)("p",null,"Multiple path components can have globs. For being processed file should exists and matches to the whole path pattern (not only suffix or prefix)."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"*")," \u2014 Substitutes any number of any characters except ",(0,l.kt)("inlineCode",{parentName:"li"},"/")," including empty string."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"?")," \u2014 Substitutes any single character."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"{some_string,another_string,yet_another_one}")," \u2014 Substitutes any of strings ",(0,l.kt)("inlineCode",{parentName:"li"},"'some_string', 'another_string', 'yet_another_one'"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"{N..M}")," \u2014 Substitutes any number in range from N to M including both borders.")),(0,l.kt)("p",null,"Constructions with ",(0,l.kt)("inlineCode",{parentName:"p"},"{}")," are similar to the ",(0,l.kt)("a",{parentName:"p",href:"/en/sql-reference/table-functions/remote"},"remote table function"),")."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Suppose that we have several files with following URIs on HDFS:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u2018hdfs://hdfs1:9000/some_dir/some_file_1\u2019"),(0,l.kt)("li",{parentName:"ul"},"\u2018hdfs://hdfs1:9000/some_dir/some_file_2\u2019"),(0,l.kt)("li",{parentName:"ul"},"\u2018hdfs://hdfs1:9000/some_dir/some_file_3\u2019"),(0,l.kt)("li",{parentName:"ul"},"\u2018hdfs://hdfs1:9000/another_dir/some_file_1\u2019"),(0,l.kt)("li",{parentName:"ul"},"\u2018hdfs://hdfs1:9000/another_dir/some_file_2\u2019"),(0,l.kt)("li",{parentName:"ul"},"\u2018hdfs://hdfs1:9000/another_dir/some_file_3\u2019")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Query the amount of rows in these files:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT count(*)\nFROM hdfs('hdfs://hdfs1:9000/{some,another}_dir/some_file_{1..3}', 'TSV', 'name String, value UInt32')\n")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"Query the amount of rows in all files of these two directories:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT count(*)\nFROM hdfs('hdfs://hdfs1:9000/{some,another}_dir/*', 'TSV', 'name String, value UInt32')\n")),(0,l.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"If your listing of files contains number ranges with leading zeros, use the construction with braces for each digit separately or use ",(0,l.kt)("inlineCode",{parentName:"p"},"?"),"."))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("p",null,"Query the data from files named ",(0,l.kt)("inlineCode",{parentName:"p"},"file000"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"file001"),", \u2026 , ",(0,l.kt)("inlineCode",{parentName:"p"},"file999"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT count(*)\nFROM hdfs('hdfs://hdfs1:9000/big_dir/file{0..9}{0..9}{0..9}', 'CSV', 'name String, value UInt32')\n")),(0,l.kt)("h2",{id:"virtual-columns"},"Virtual Columns"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"_path")," \u2014 Path to the file."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"_file")," \u2014 Name of the file.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"See Also")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/en/engines/table-engines/#table_engines-virtual_columns"},"Virtual columns"))))}c.isMDXComponent=!0}}]);