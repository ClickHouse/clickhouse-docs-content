"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[72786],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,k=u["".concat(o,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},33242:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],s={slug:"/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-sources",machine_translated:!0,machine_translated_rev:"72537a2d527c63c07aa5d2361a8829f3895cf2bd",sidebar_position:43,sidebar_label:"\u5916\u90e8\u5b57\u5178\u7684\u6765\u6e90"},o="\u5916\u90e8\u5b57\u5178\u7684\u6765\u6e90",c={unversionedId:"zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-sources",id:"zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-sources",title:"\u5916\u90e8\u5b57\u5178\u7684\u6765\u6e90",description:"dicts-external-dicts-dict-sources}",source:"@site/docs/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-sources.md",sourceDirName:"zh/sql-reference/dictionaries/external-dictionaries",slug:"/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-sources",permalink:"/docs/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-sources",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-sources.md",tags:[],version:"current",sidebarPosition:43,frontMatter:{slug:"/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-sources",machine_translated:!0,machine_translated_rev:"72537a2d527c63c07aa5d2361a8829f3895cf2bd",sidebar_position:43,sidebar_label:"\u5916\u90e8\u5b57\u5178\u7684\u6765\u6e90"},sidebar:"chinese",previous:{title:"\u5b57\u5178\u66f4\u65b0",permalink:"/docs/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-lifetime"},next:{title:"\u5b57\u5178\u952e\u548c\u5b57\u6bb5",permalink:"/docs/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-structure"}},p={},d=[{value:"\u672c\u5730\u6587\u4ef6",id:"dicts-external_dicts_dict_sources-local_file",level:2},{value:"\u53ef\u6267\u884c\u6587\u4ef6",id:"dicts-external_dicts_dict_sources-executable",level:2},{value:"Http(s)",id:"dicts-external_dicts_dict_sources-http",level:2},{value:"ODBC",id:"dicts-external_dicts_dict_sources-odbc",level:2},{value:"ODBC\u5b57\u5178\u529f\u80fd\u7684\u5df2\u77e5\u6f0f\u6d1e",id:"known-vulnerability-of-the-odbc-dictionary-functionality",level:3},{value:"\u8fde\u63a5Postgresql\u7684\u793a\u4f8b",id:"example-of-connecting-postgresql",level:3},{value:"\u8fde\u63a5MS SQL Server\u7684\u793a\u4f8b",id:"example-of-connecting-ms-sql-server",level:3},{value:"DBMS",id:"dbms",level:2},{value:"Mysql",id:"dicts-external_dicts_dict_sources-mysql",level:3},{value:"ClickHouse",id:"dicts-external_dicts_dict_sources-clickhouse",level:3},{value:"Mongodb",id:"dicts-external_dicts_dict_sources-mongodb",level:3},{value:"Redis",id:"dicts-external_dicts_dict_sources-redis",level:3}],u={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"dicts-external-dicts-dict-sources"},"\u5916\u90e8\u5b57\u5178\u7684\u6765\u6e90"),(0,i.kt)("p",null,"\u5916\u90e8\u5b57\u5178\u53ef\u4ee5\u4ece\u8bb8\u591a\u4e0d\u540c\u7684\u6765\u6e90\u8fde\u63a5\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u4f7f\u7528xml-file\u914d\u7f6e\u5b57\u5178\uff0c\u5219\u914d\u7f6e\u5982\u4e0b\u6240\u793a:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<clickhouse>\n  <dictionary>\n    ...\n    <source>\n      <source_type>\n        \x3c!-- Source configuration --\x3e\n      </source_type>\n    </source>\n    ...\n  </dictionary>\n  ...\n</clickhouse>\n")),(0,i.kt)("p",null,"\u5728\u60c5\u51b5\u4e0b ",(0,i.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/statements/create#create-dictionary-query"},"DDL-\u67e5\u8be2"),"\uff0c\u76f8\u7b49\u7684\u914d\u7f6e\u5c06\u770b\u8d77\u6765\u50cf:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DICTIONARY dict_name (...)\n...\nSOURCE(SOURCE_TYPE(param1 val1 ... paramN valN)) -- Source configuration\n...\n")),(0,i.kt)("p",null,"\u6e90\u914d\u7f6e\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"source")," \u79d1\u3002"),(0,i.kt)("p",null,"\u5bf9\u4e8e\u6e90\u7c7b\u578b ",(0,i.kt)("a",{parentName:"p",href:"#dicts-external_dicts_dict_sources-local_file"},"\u672c\u5730\u6587\u4ef6"),", ",(0,i.kt)("a",{parentName:"p",href:"#dicts-external_dicts_dict_sources-executable"},"\u53ef\u6267\u884c\u6587\u4ef6"),", ",(0,i.kt)("a",{parentName:"p",href:"#dicts-external_dicts_dict_sources-http"},"HTTP(s)"),", ",(0,i.kt)("a",{parentName:"p",href:"#dicts-external_dicts_dict_sources-clickhouse"},"ClickHouse"),"\n\u53ef\u9009\u8bbe\u7f6e:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<source>\n  <file>\n    <path>/opt/dictionaries/os.tsv</path>\n    <format>TabSeparated</format>\n  </file>\n  <settings>\n      <format_csv_allow_single_quotes>0</format_csv_allow_single_quotes>\n  </settings>\n</source>\n")),(0,i.kt)("p",null,"\u6216"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SOURCE(FILE(path './user_files/os.tsv' format 'TabSeparated'))\nSETTINGS(format_csv_allow_single_quotes = 0)\n")),(0,i.kt)("p",null,"\u6765\u6e90\u7c7b\u578b (",(0,i.kt)("inlineCode",{parentName:"p"},"source_type"),"):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#dicts-external_dicts_dict_sources-local_file"},"\u672c\u5730\u6587\u4ef6")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#dicts-external_dicts_dict_sources-executable"},"\u53ef\u6267\u884c\u6587\u4ef6")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#dicts-external_dicts_dict_sources-http"},"HTTP(s)")),(0,i.kt)("li",{parentName:"ul"},"DBMS",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#dicts-external_dicts_dict_sources-odbc"},"ODBC")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#dicts-external_dicts_dict_sources-mysql"},"MySQL")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#dicts-external_dicts_dict_sources-clickhouse"},"ClickHouse")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#dicts-external_dicts_dict_sources-mongodb"},"MongoDB")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#dicts-external_dicts_dict_sources-redis"},"Redis"))))),(0,i.kt)("h2",{id:"dicts-external_dicts_dict_sources-local_file"},"\u672c\u5730\u6587\u4ef6"),(0,i.kt)("p",null,"\u8bbe\u7f6e\u793a\u4f8b:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<source>\n  <file>\n    <path>/opt/dictionaries/os.tsv</path>\n    <format>TabSeparated</format>\n  </file>\n</source>\n")),(0,i.kt)("p",null,"\u6216"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SOURCE(FILE(path './user_files/os.tsv' format 'TabSeparated'))\n")),(0,i.kt)("p",null,"\u8bbe\u7f6e\u5b57\u6bb5:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"path")," \u2013 The absolute path to the file."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"format")," \u2013 The file format. All the formats described in \u201c",(0,i.kt)("a",{parentName:"li",href:"/docs/zh/interfaces/formats#formats"},"\u683c\u5f0f"),"\u201d \u652f\u6301\u3002")),(0,i.kt)("h2",{id:"dicts-external_dicts_dict_sources-executable"},"\u53ef\u6267\u884c\u6587\u4ef6"),(0,i.kt)("p",null,"\u4f7f\u7528\u53ef\u6267\u884c\u6587\u4ef6\u53d6\u51b3\u4e8e ",(0,i.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-layout"},"\u5b57\u5178\u5982\u4f55\u5b58\u50a8\u5728\u5185\u5b58\u4e2d"),". \u5982\u679c\u5b57\u5178\u5b58\u50a8\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"cache")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"complex_key_cache"),"\uff0cClickHouse\u901a\u8fc7\u5411\u53ef\u6267\u884c\u6587\u4ef6\u7684STDIN\u53d1\u9001\u8bf7\u6c42\u6765\u8bf7\u6c42\u5fc5\u8981\u7684\u5bc6\u94a5\u3002 \u5426\u5219\uff0cClickHouse\u5c06\u542f\u52a8\u53ef\u6267\u884c\u6587\u4ef6\u5e76\u5c06\u5176\u8f93\u51fa\u89c6\u4e3a\u5b57\u5178\u6570\u636e\u3002"),(0,i.kt)("p",null,"\u8bbe\u7f6e\u793a\u4f8b:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<source>\n    <executable>\n        <command>cat /opt/dictionaries/os.tsv</command>\n        <format>TabSeparated</format>\n    </executable>\n</source>\n")),(0,i.kt)("p",null,"\u6216"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SOURCE(EXECUTABLE(command 'cat /opt/dictionaries/os.tsv' format 'TabSeparated'))\n")),(0,i.kt)("p",null,"\u8bbe\u7f6e\u5b57\u6bb5:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"command")," \u2013 The absolute path to the executable file, or the file name (if the program directory is written to ",(0,i.kt)("inlineCode",{parentName:"li"},"PATH"),")."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"format")," \u2013 The file format. All the formats described in \u201c",(0,i.kt)("a",{parentName:"li",href:"/docs/zh/interfaces/formats#formats"},"\u683c\u5f0f"),"\u201d \u652f\u6301\u3002")),(0,i.kt)("h2",{id:"dicts-external_dicts_dict_sources-http"},"Http(s)"),(0,i.kt)("p",null,"\u4f7f\u7528HTTP\uff08s\uff09\u670d\u52a1\u5668\u53d6\u51b3\u4e8e ",(0,i.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-layout"},"\u5b57\u5178\u5982\u4f55\u5b58\u50a8\u5728\u5185\u5b58\u4e2d"),". \u5982\u679c\u5b57\u5178\u5b58\u50a8\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"cache")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"complex_key_cache"),"\uff0cClickHouse\u901a\u8fc7\u901a\u8fc7\u53d1\u9001\u8bf7\u6c42\u8bf7\u6c42\u5fc5\u8981\u7684\u5bc6\u94a5 ",(0,i.kt)("inlineCode",{parentName:"p"},"POST")," \u65b9\u6cd5\u3002"),(0,i.kt)("p",null,"\u8bbe\u7f6e\u793a\u4f8b:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<source>\n    <http>\n        <url>http://[::1]/os.tsv</url>\n        <format>TabSeparated</format>\n        <credentials>\n            <user>user</user>\n            <password>password</password>\n        </credentials>\n        <headers>\n            <header>\n                <name>API-KEY</name>\n                <value>key</value>\n            </header>\n        </headers>\n    </http>\n</source>\n")),(0,i.kt)("p",null,"\u6216"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SOURCE(HTTP(\n    url 'http://[::1]/os.tsv'\n    format 'TabSeparated'\n    credentials(user 'user' password 'password')\n    headers(header(name 'API-KEY' value 'key'))\n))\n")),(0,i.kt)("p",null,"\u4e3a\u4e86\u8ba9ClickHouse\u8bbf\u95eeHTTPS\u8d44\u6e90\uff0c\u60a8\u5fc5\u987b ",(0,i.kt)("a",{parentName:"p",href:"/docs/zh/operations/server-configuration-parameters/settings#server_configuration_parameters-openssl"},"\u914d\u7f6eopenSSL")," \u5728\u670d\u52a1\u5668\u914d\u7f6e\u4e2d\u3002"),(0,i.kt)("p",null,"\u8bbe\u7f6e\u5b57\u6bb5:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"url")," \u2013 The source URL."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"format")," \u2013 The file format. All the formats described in \u201c",(0,i.kt)("a",{parentName:"li",href:"/docs/zh/interfaces/formats#formats"},"\u683c\u5f0f"),"\u201d \u652f\u6301\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"credentials")," \u2013 Basic HTTP authentication. Optional parameter.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"user")," \u2013 Username required for the authentication."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"password")," \u2013 Password required for the authentication."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"headers")," \u2013 All custom HTTP headers entries used for the HTTP request. Optional parameter.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"header")," \u2013 Single HTTP header entry."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name")," \u2013 Identifiant name used for the header send on the request."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"value")," \u2013 Value set for a specific identifiant name.")))),(0,i.kt)("h2",{id:"dicts-external_dicts_dict_sources-odbc"},"ODBC"),(0,i.kt)("p",null,"\u60a8\u53ef\u4ee5\u4f7f\u7528\u6b64\u65b9\u6cd5\u8fde\u63a5\u5177\u6709ODBC\u9a71\u52a8\u7a0b\u5e8f\u7684\u4efb\u4f55\u6570\u636e\u5e93\u3002"),(0,i.kt)("p",null,"\u8bbe\u7f6e\u793a\u4f8b:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<source>\n    <odbc>\n        <db>DatabaseName</db>\n        <table>ShemaName.TableName</table>\n        <connection_string>DSN=some_parameters</connection_string>\n        <invalidate_query>SQL_QUERY</invalidate_query>\n    </odbc>\n</source>\n")),(0,i.kt)("p",null,"\u6216"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SOURCE(ODBC(\n    db 'DatabaseName'\n    table 'SchemaName.TableName'\n    connection_string 'DSN=some_parameters'\n    invalidate_query 'SQL_QUERY'\n))\n")),(0,i.kt)("p",null,"\u8bbe\u7f6e\u5b57\u6bb5:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"db")," \u2013 Name of the database. Omit it if the database name is set in the ",(0,i.kt)("inlineCode",{parentName:"li"},"<connection_string>")," \u53c2\u6570\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"table")," \u2013 Name of the table and schema if exists."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"connection_string")," \u2013 Connection string."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"invalidate_query")," \u2013 Query for checking the dictionary status. Optional parameter. Read more in the section ",(0,i.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-lifetime"},"\u66f4\u65b0\u5b57\u5178"),".")),(0,i.kt)("p",null,"ClickHouse\u63a5\u6536\u6765\u81eaODBC-driver\u7684\u5f15\u7528\u7b26\u53f7\uff0c\u5e76\u5c06\u67e5\u8be2\u4e2d\u7684\u6240\u6709\u8bbe\u7f6e\u5f15\u7528\u5230driver\uff0c\u56e0\u6b64\u6709\u5fc5\u8981\u6839\u636e\u6570\u636e\u5e93\u4e2d\u7684\u8868\u540d\u5927\u5c0f\u5199\u8bbe\u7f6e\u8868\u540d\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u60a8\u5728\u4f7f\u7528Oracle\u65f6\u9047\u5230\u7f16\u7801\u95ee\u9898\uff0c\u8bf7\u53c2\u9605\u76f8\u5e94\u7684 ",(0,i.kt)("a",{parentName:"p",href:"/docs/zh/faq/general#oracle-odbc-encodings"},"FAQ")," \u6587\u7ae0."),(0,i.kt)("h3",{id:"known-vulnerability-of-the-odbc-dictionary-functionality"},"ODBC\u5b57\u5178\u529f\u80fd\u7684\u5df2\u77e5\u6f0f\u6d1e"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},':::info "\u6ce8\u610f"\n\u901a\u8fc7ODBC\u9a71\u52a8\u7a0b\u5e8f\u8fde\u63a5\u53c2\u6570\u8fde\u63a5\u5230\u6570\u636e\u5e93\u65f6 `Servername` \u53ef\u4ee5\u53d6\u4ee3\u3002 \u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u503c `USERNAME` \u548c `PASSWORD` \u4ece `odbc.ini` \u88ab\u53d1\u9001\u5230\u8fdc\u7a0b\u670d\u52a1\u5668\uff0c\u5e76\u4e14\u53ef\u80fd\u4f1a\u53d7\u5230\u635f\u5bb3\u3002\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u4e0d\u5b89\u5168\u4f7f\u7528\u793a\u4f8b")),(0,i.kt)("p",null,"\u8ba9\u6211\u4eec\u4e3aPostgreSQL\u914d\u7f6eunixODBC\u3002 \u7684\u5185\u5bb9 ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/odbc.ini"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"[gregtest]\nDriver = /usr/lib/psqlodbca.so\nServername = localhost\nPORT = 5432\nDATABASE = test_db\n#OPTION = 3\nUSERNAME = test\nPASSWORD = test\n")),(0,i.kt)("p",null,"\u5982\u679c\u7136\u540e\u8fdb\u884c\u67e5\u8be2\uff0c\u4f8b\u5982"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM odbc('DSN=gregtest;Servername=some-server.com', 'test_db');\n")),(0,i.kt)("p",null,"ODBC\u9a71\u52a8\u7a0b\u5e8f\u5c06\u53d1\u9001\u7684\u503c ",(0,i.kt)("inlineCode",{parentName:"p"},"USERNAME")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"PASSWORD")," \u4ece ",(0,i.kt)("inlineCode",{parentName:"p"},"odbc.ini")," \u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"some-server.com"),"."),(0,i.kt)("h3",{id:"example-of-connecting-postgresql"},"\u8fde\u63a5Postgresql\u7684\u793a\u4f8b"),(0,i.kt)("p",null,"Ubuntu\u64cd\u4f5c\u7cfb\u7edf\u3002"),(0,i.kt)("p",null,"\u4e3aPostgreSQL\u5b89\u88c5unixODBC\u548cODBC\u9a71\u52a8\u7a0b\u5e8f:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo apt-get install -y unixodbc odbcinst odbc-postgresql\n")),(0,i.kt)("p",null,"\u914d\u7f6e ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/odbc.ini")," \uff08\u6216 ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.odbc.ini"),"):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"    [DEFAULT]\n    Driver = myconnection\n\n    [myconnection]\n    Description         = PostgreSQL connection to my_db\n    Driver              = PostgreSQL Unicode\n    Database            = my_db\n    Servername          = 127.0.0.1\n    UserName            = username\n    Password            = password\n    Port                = 5432\n    Protocol            = 9.3\n    ReadOnly            = No\n    RowVersioning       = No\n    ShowSystemTables    = No\n    ConnSettings        =\n")),(0,i.kt)("p",null,"ClickHouse\u4e2d\u7684\u5b57\u5178\u914d\u7f6e:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<clickhouse>\n    <dictionary>\n        <name>table_name</name>\n        <source>\n            <odbc>\n                \x3c!-- You can specify the following parameters in connection_string: --\x3e\n                \x3c!-- DSN=myconnection;UID=username;PWD=password;HOST=127.0.0.1;PORT=5432;DATABASE=my_db --\x3e\n                <connection_string>DSN=myconnection</connection_string>\n                <table>postgresql_table</table>\n            </odbc>\n        </source>\n        <lifetime>\n            <min>300</min>\n            <max>360</max>\n        </lifetime>\n        <layout>\n            <hashed/>\n        </layout>\n        <structure>\n            <id>\n                <name>id</name>\n            </id>\n            <attribute>\n                <name>some_column</name>\n                <type>UInt64</type>\n                <null_value>0</null_value>\n            </attribute>\n        </structure>\n    </dictionary>\n</clickhouse>\n")),(0,i.kt)("p",null,"\u6216"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DICTIONARY table_name (\n    id UInt64,\n    some_column UInt64 DEFAULT 0\n)\nPRIMARY KEY id\nSOURCE(ODBC(connection_string 'DSN=myconnection' table 'postgresql_table'))\nLAYOUT(HASHED())\nLIFETIME(MIN 300 MAX 360)\n")),(0,i.kt)("p",null,"\u60a8\u53ef\u80fd\u9700\u8981\u7f16\u8f91 ",(0,i.kt)("inlineCode",{parentName:"p"},"odbc.ini")," \u4f7f\u7528\u9a71\u52a8\u7a0b\u5e8f\u6307\u5b9a\u5e93\u7684\u5b8c\u6574\u8def\u5f84 ",(0,i.kt)("inlineCode",{parentName:"p"},"DRIVER=/usr/local/lib/psqlodbcw.so"),"."),(0,i.kt)("h3",{id:"example-of-connecting-ms-sql-server"},"\u8fde\u63a5MS SQL Server\u7684\u793a\u4f8b"),(0,i.kt)("p",null,"Ubuntu\u64cd\u4f5c\u7cfb\u7edf\u3002"),(0,i.kt)("p",null,"\u5b89\u88c5\u9a71\u52a8\u7a0b\u5e8f: :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo apt-get install tdsodbc freetds-bin sqsh\n")),(0,i.kt)("p",null,"\u914d\u7f6e\u9a71\u52a8\u7a0b\u5e8f:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"    $ cat /etc/freetds/freetds.conf\n    ...\n\n    [MSSQL]\n    host = 192.168.56.101\n    port = 1433\n    tds version = 7.0\n    client charset = UTF-8\n\n    $ cat /etc/odbcinst.ini\n    ...\n\n    [FreeTDS]\n    Description     = FreeTDS\n    Driver          = /usr/lib/x86_64-linux-gnu/odbc/libtdsodbc.so\n    Setup           = /usr/lib/x86_64-linux-gnu/odbc/libtdsS.so\n    FileUsage       = 1\n    UsageCount      = 5\n\n    $ cat ~/.odbc.ini\n    ...\n\n    [MSSQL]\n    Description     = FreeTDS\n    Driver          = FreeTDS\n    Servername      = MSSQL\n    Database        = test\n    UID             = test\n    PWD             = test\n    Port            = 1433\n")),(0,i.kt)("p",null,"\u5728ClickHouse\u4e2d\u914d\u7f6e\u5b57\u5178:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<clickhouse>\n    <dictionary>\n        <name>test</name>\n        <source>\n            <odbc>\n                <table>dict</table>\n                <connection_string>DSN=MSSQL;UID=test;PWD=test</connection_string>\n            </odbc>\n        </source>\n\n        <lifetime>\n            <min>300</min>\n            <max>360</max>\n        </lifetime>\n\n        <layout>\n            <flat />\n        </layout>\n\n        <structure>\n            <id>\n                <name>k</name>\n            </id>\n            <attribute>\n                <name>s</name>\n                <type>String</type>\n                <null_value></null_value>\n            </attribute>\n        </structure>\n    </dictionary>\n</clickhouse>\n")),(0,i.kt)("p",null,"\u6216"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DICTIONARY test (\n    k UInt64,\n    s String DEFAULT ''\n)\nPRIMARY KEY k\nSOURCE(ODBC(table 'dict' connection_string 'DSN=MSSQL;UID=test;PWD=test'))\nLAYOUT(FLAT())\nLIFETIME(MIN 300 MAX 360)\n")),(0,i.kt)("h2",{id:"dbms"},"DBMS"),(0,i.kt)("h3",{id:"dicts-external_dicts_dict_sources-mysql"},"Mysql"),(0,i.kt)("p",null,"\u8bbe\u7f6e\u793a\u4f8b:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<source>\n  <mysql>\n      <port>3306</port>\n      <user>clickhouse</user>\n      <password>qwerty</password>\n      <replica>\n          <host>example01-1</host>\n          <priority>1</priority>\n      </replica>\n      <replica>\n          <host>example01-2</host>\n          <priority>1</priority>\n      </replica>\n      <db>db_name</db>\n      <table>table_name</table>\n      <where>id=10</where>\n      <invalidate_query>SQL_QUERY</invalidate_query>\n  </mysql>\n</source>\n")),(0,i.kt)("p",null,"\u6216"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SOURCE(MYSQL(\n    port 3306\n    user 'clickhouse'\n    password 'qwerty'\n    replica(host 'example01-1' priority 1)\n    replica(host 'example01-2' priority 1)\n    db 'db_name'\n    table 'table_name'\n    where 'id=10'\n    invalidate_query 'SQL_QUERY'\n))\n")),(0,i.kt)("p",null,"\u8bbe\u7f6e\u5b57\u6bb5:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"port")," \u2013 The port on the MySQL server. You can specify it for all replicas, or for each one individually (inside ",(0,i.kt)("inlineCode",{parentName:"p"},"<replica>"),").")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"user")," \u2013 Name of the MySQL user. You can specify it for all replicas, or for each one individually (inside ",(0,i.kt)("inlineCode",{parentName:"p"},"<replica>"),").")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"password")," \u2013 Password of the MySQL user. You can specify it for all replicas, or for each one individually (inside ",(0,i.kt)("inlineCode",{parentName:"p"},"<replica>"),").")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"replica")," \u2013 Section of replica configurations. There can be multiple sections."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"- `replica/host` \u2013 The MySQL host.\n- `replica/priority` \u2013 The replica priority. When attempting to connect, ClickHouse traverses the replicas in order of priority. The lower the number, the higher the priority.\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"db")," \u2013 Name of the database.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"table")," \u2013 Name of the table.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"where")," \u2013 The selection criteria. The syntax for conditions is the same as for ",(0,i.kt)("inlineCode",{parentName:"p"},"WHERE")," \u4f8b\u5982\uff0cmysql\u4e2d\u7684\u5b50\u53e5, ",(0,i.kt)("inlineCode",{parentName:"p"},"id > 10 AND id < 20"),". \u53ef\u9009\u53c2\u6570\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"invalidate_query")," \u2013 Query for checking the dictionary status. Optional parameter. Read more in the section ",(0,i.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-lifetime"},"\u66f4\u65b0\u5b57\u5178"),"."))),(0,i.kt)("p",null,"MySQL\u53ef\u4ee5\u901a\u8fc7\u5957\u63a5\u5b57\u5728\u672c\u5730\u4e3b\u673a\u4e0a\u8fde\u63a5\u3002 \u8981\u505a\u5230\u8fd9\u4e00\u70b9\uff0c\u8bbe\u7f6e ",(0,i.kt)("inlineCode",{parentName:"p"},"host")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"socket"),"."),(0,i.kt)("p",null,"\u8bbe\u7f6e\u793a\u4f8b:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<source>\n  <mysql>\n      <host>localhost</host>\n      <socket>/path/to/socket/file.sock</socket>\n      <user>clickhouse</user>\n      <password>qwerty</password>\n      <db>db_name</db>\n      <table>table_name</table>\n      <where>id=10</where>\n      <invalidate_query>SQL_QUERY</invalidate_query>\n  </mysql>\n</source>\n")),(0,i.kt)("p",null,"\u6216"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SOURCE(MYSQL(\n    host 'localhost'\n    socket '/path/to/socket/file.sock'\n    user 'clickhouse'\n    password 'qwerty'\n    db 'db_name'\n    table 'table_name'\n    where 'id=10'\n    invalidate_query 'SQL_QUERY'\n))\n")),(0,i.kt)("h3",{id:"dicts-external_dicts_dict_sources-clickhouse"},"ClickHouse"),(0,i.kt)("p",null,"\u8bbe\u7f6e\u793a\u4f8b:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<source>\n    <clickhouse>\n        <host>example01-01-1</host>\n        <port>9000</port>\n        <user>default</user>\n        <password></password>\n        <db>default</db>\n        <table>ids</table>\n        <where>id=10</where>\n    </clickhouse>\n</source>\n")),(0,i.kt)("p",null,"\u6216"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SOURCE(CLICKHOUSE(\n    host 'example01-01-1'\n    port 9000\n    user 'default'\n    password ''\n    db 'default'\n    table 'ids'\n    where 'id=10'\n))\n")),(0,i.kt)("p",null,"\u8bbe\u7f6e\u5b57\u6bb5:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"host")," \u2013 The ClickHouse host. If it is a local host, the query is processed without any network activity. To improve fault tolerance, you can create a ",(0,i.kt)("a",{parentName:"li",href:"/docs/zh/engines/table-engines/special/distributed"},"\u5206\u5e03")," \u8868\u5e76\u5728\u540e\u7eed\u914d\u7f6e\u4e2d\u8f93\u5165\u5b83\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"port")," \u2013 The port on the ClickHouse server."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"user")," \u2013 Name of the ClickHouse user."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"password")," \u2013 Password of the ClickHouse user."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"db")," \u2013 Name of the database."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"table")," \u2013 Name of the table."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"where")," \u2013 The selection criteria. May be omitted."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"invalidate_query")," \u2013 Query for checking the dictionary status. Optional parameter. Read more in the section ",(0,i.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-lifetime"},"\u66f4\u65b0\u5b57\u5178"),".")),(0,i.kt)("h3",{id:"dicts-external_dicts_dict_sources-mongodb"},"Mongodb"),(0,i.kt)("p",null,"\u8bbe\u7f6e\u793a\u4f8b:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<source>\n    <mongodb>\n        <host>localhost</host>\n        <port>27017</port>\n        <user></user>\n        <password></password>\n        <db>test</db>\n        <collection>dictionary_source</collection>\n    </mongodb>\n</source>\n")),(0,i.kt)("p",null,"\u6216"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SOURCE(MONGO(\n    host 'localhost'\n    port 27017\n    user ''\n    password ''\n    db 'test'\n    collection 'dictionary_source'\n))\n")),(0,i.kt)("p",null,"\u8bbe\u7f6e\u5b57\u6bb5:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"host")," \u2013 The MongoDB host."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"port")," \u2013 The port on the MongoDB server."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"user")," \u2013 Name of the MongoDB user."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"password")," \u2013 Password of the MongoDB user."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"db")," \u2013 Name of the database."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"collection")," \u2013 Name of the collection.")),(0,i.kt)("h3",{id:"dicts-external_dicts_dict_sources-redis"},"Redis"),(0,i.kt)("p",null,"\u8bbe\u7f6e\u793a\u4f8b:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<source>\n    <redis>\n        <host>localhost</host>\n        <port>6379</port>\n        <storage_type>simple</storage_type>\n        <db_index>0</db_index>\n    </redis>\n</source>\n")),(0,i.kt)("p",null,"\u6216"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SOURCE(REDIS(\n    host 'localhost'\n    port 6379\n    storage_type 'simple'\n    db_index 0\n))\n")),(0,i.kt)("p",null,"\u8bbe\u7f6e\u5b57\u6bb5:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"host")," \u2013 The Redis host."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"port")," \u2013 The port on the Redis server."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"storage_type")," \u2013 The structure of internal Redis storage using for work with keys. ",(0,i.kt)("inlineCode",{parentName:"li"},"simple")," \u9002\u7528\u4e8e\u7b80\u5355\u6e90\u548c\u6563\u5217\u5355\u952e\u6e90, ",(0,i.kt)("inlineCode",{parentName:"li"},"hash_map")," \u7528\u4e8e\u5177\u6709\u4e24\u4e2a\u952e\u7684\u6563\u5217\u6e90\u3002 \u4e0d\u652f\u6301\u5177\u6709\u590d\u6742\u952e\u7684\u8303\u56f4\u6e90\u548c\u7f13\u5b58\u6e90\u3002 \u53ef\u4ee5\u7701\u7565\uff0c\u9ed8\u8ba4\u503c\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"simple"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"db_index")," \u2013 The specific numeric index of Redis logical database. May be omitted, default value is 0.")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/query_language/dicts/external_dicts_dict_sources/"},"\u539f\u59cb\u6587\u7ae0")," "))}m.isMDXComponent=!0}}]);