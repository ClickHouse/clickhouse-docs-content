"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[76449],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=m(n),c=r,k=p["".concat(s,".").concat(c)]||p[c]||d[c]||l;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},79053:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var a=n(87462),r=(n(67294),n(3905));const l={sidebar_label:"Driver API",sidebar_position:20,keywords:["clickhouse","python","client","connect","integrate"],slug:"/en/integrations/language-clients/python/driver-api",description:"The ClickHouse Connect Core Driver API"},i="ClickHouse Connect Driver API",o={unversionedId:"en/integrations/language-clients/python/driver-api",id:"en/integrations/language-clients/python/driver-api",title:"ClickHouse Connect Driver API",description:"The ClickHouse Connect Core Driver API",source:"@site/docs/en/integrations/language-clients/python/driver-api.md",sourceDirName:"en/integrations/language-clients/python",slug:"/en/integrations/language-clients/python/driver-api",permalink:"/docs/en/integrations/language-clients/python/driver-api",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/integrations/language-clients/python/driver-api.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_label:"Driver API",sidebar_position:20,keywords:["clickhouse","python","client","connect","integrate"],slug:"/en/integrations/language-clients/python/driver-api",description:"The ClickHouse Connect Core Driver API"},sidebar:"english",previous:{title:"Introduction",permalink:"/docs/en/integrations/language-clients/python/intro"},next:{title:"Interfaces",permalink:"/docs/en/interfaces"}},s={},m=[{value:"Client Initialization",id:"client-initialization",level:2},{value:"Connection Parameters",id:"connection-parameters",level:3},{value:"HTTPS/TLS Parameters",id:"httpstls-parameters",level:3},{value:"Additional Parameters",id:"additional-parameters",level:3},{value:"Client Creation Examples",id:"client-creation-examples",level:3},{value:"Common Method Arguments",id:"common-method-arguments",level:2},{value:"Parameters Argument",id:"parameters-argument",level:3},{value:"Settings Argument",id:"settings-argument",level:3},{value:"Client <em>command</em> Method",id:"client-command-method",level:2},{value:"Client <em>query</em> Method",id:"client-query-method",level:2},{value:"Client <em>insert</em> Method",id:"client-insert-method",level:2}],u={toc:m};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"clickhouse-connect-driver-api"},"ClickHouse Connect Driver API"),(0,r.kt)("h2",{id:"client-initialization"},"Client Initialization"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"clickhouse_connect.driver.client")," class provides the primary interface between a Python application and the\nClickHouse database server. Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"clickhouse_connect.get_client")," function to obtain a Client instance, which accepts\nthe following parameters:"),(0,r.kt)("h3",{id:"connection-parameters"},"Connection Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"interface"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"http"),(0,r.kt)("td",{parentName:"tr",align:null},"Must be http or https.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"host"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"localhost"),(0,r.kt)("td",{parentName:"tr",align:null},"The hostname or IP address of the ClickHouse server")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"port"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"8123 or 8443"),(0,r.kt)("td",{parentName:"tr",align:null},"The ClickHouse HTTP or HTTPS port. If not set will default to 8123, or to 8443 if ",(0,r.kt)("em",{parentName:"td"},"secure"),"=",(0,r.kt)("em",{parentName:"td"},"True")," or ",(0,r.kt)("em",{parentName:"td"},"interface"),"=",(0,r.kt)("em",{parentName:"td"},"https"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"username"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"None")),(0,r.kt)("td",{parentName:"tr",align:null},"The ClickHouse user name. If not set, the default ClickHouse user will be used.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"password"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"<empty string"),">"),(0,r.kt)("td",{parentName:"tr",align:null},"The password for ",(0,r.kt)("em",{parentName:"td"},"username"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"database"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"None")),(0,r.kt)("td",{parentName:"tr",align:null},"The default database for the connection. If not set, ClickHouse Connect will use the default database for ",(0,r.kt)("em",{parentName:"td"},"username"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"compress"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"Request gzip compression from ClickHouse HTTP requests. Either the ClickHouse server must have the setting ",(0,r.kt)("inlineCode",{parentName:"td"},"enable_http_compression=1"),", or the ",(0,r.kt)("em",{parentName:"td"},"username")," must have permission to send settings with the request.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"query_limit"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"5000"),(0,r.kt)("td",{parentName:"tr",align:null},"Maximum number of rows to return for any ",(0,r.kt)("inlineCode",{parentName:"td"},"query")," response. Set this to zero to return unlimited rows.  Note that large query limits may result in out of memory exceptions, as all results are loaded into memory at once.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"query_retries"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"Maximum number of retries for a ",(0,r.kt)("inlineCode",{parentName:"td"},"query"),' request. Only "retryable" HTTP responses will be retried.  ',(0,r.kt)("inlineCode",{parentName:"td"},"command")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"insert")," requests are not automatically retried by the driver to prevent unintended duplicate requests.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"connect_timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"HTTP connection timeout in seconds.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"send_receive_timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"300"),(0,r.kt)("td",{parentName:"tr",align:null},"Send/receive timeout for the HTTP connection in seconds.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"client_name"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"clickhouse-connect"),(0,r.kt)("td",{parentName:"tr",align:null},"HTTP User agent string. Modify this to track client queries in the ClickHouse system.query_log.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"send_progress"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"This sets the ClickHouse settings ",(0,r.kt)("inlineCode",{parentName:"td"},"send_progress_in_http_headers=1")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"wait_end_of_query=1"),". This ensures that the summary information returned by ClickHouse on query completion is populated, and also prevents ClickHouse from closing the connection on long queries.")))),(0,r.kt)("h3",{id:"httpstls-parameters"},"HTTPS/TLS Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"verify"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"Validate the ClickHouse server TLS/SSL certificate (hostname, expiration, etc.) if using HTTPS/TLS.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ca_cert"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"None")),(0,r.kt)("td",{parentName:"tr",align:null},"If ",(0,r.kt)("em",{parentName:"td"},"verify"),"=",(0,r.kt)("em",{parentName:"td"},"True"),", the file path to Certificate Authority root to validate ClickHouse server certificate, in .pem format. Ignored if verify is False. This is not necessary if the ClickHouse server certificate is a globally trusted root as verified by the operating system.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"client_cert"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"None")),(0,r.kt)("td",{parentName:"tr",align:null},"File path to a TLS Client certificate in .pem format (for mutual TLS authentication). The file should contain a full certificate chain, including any intermediate certificates.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"client_cert_key"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"None")),(0,r.kt)("td",{parentName:"tr",align:null},"File path to the private key for the Client Certificate. Required if the private key is not included the Client Certificate key file.")))),(0,r.kt)("h3",{id:"additional-parameters"},"Additional Parameters"),(0,r.kt)("p",null,"Additional keyword args to ",(0,r.kt)("inlineCode",{parentName:"p"},"clickhouse_connect.get_client")," not listed above are used as query parameters for all\nrequests to the ClickHouse server.\nBecause they are sent as query parameters, all values for these additional arguments are converted to strings.",(0,r.kt)("br",{parentName:"p"}),"\n","The following parameters are related to the actual query or command:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"buffer_size"),(0,r.kt)("td",{parentName:"tr",align:null},"Buffer size (in bytes) used by ClickHouse Server before writing to the HTTP channel.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"session_id"),(0,r.kt)("td",{parentName:"tr",align:null},"A unique session id to associate related queries on the server. Required for temporary tables.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"compress"),(0,r.kt)("td",{parentName:"tr",align:null},'Whether the ClickHouse server should compress the POST response data. This setting should only be used for "raw" requests.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"decompress"),(0,r.kt)("td",{parentName:"tr",align:null},'Whether the data sent to ClickHouse server must be decompressed. This setting is should only be used for "raw" requests.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"quota_key"),(0,r.kt)("td",{parentName:"tr",align:null},"The quota key associated with this requests. See the ClickHouse server documentation on quotas.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"session_check"),(0,r.kt)("td",{parentName:"tr",align:null},"Used to check the session status.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"session_timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of seconds of inactivity before the identified by the session id will timeout and no longer be considered valid. Defaults to 60 seconds.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"wait_end_of_query"),(0,r.kt)("td",{parentName:"tr",align:null},"Buffers the entire response on the ClickHouse server. This setting is necessary to return summary information. It is set automatically when ",(0,r.kt)("em",{parentName:"td"},"send_progress"),"=",(0,r.kt)("em",{parentName:"td"},"True"),".")))),(0,r.kt)("p",null,"All other keyword args and interpreted as ClickHouse user settings for each request. Please see the full ",(0,r.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/settings/settings"},"ClickHouse\ndocumentation")," for a complete list. Note that\nin most cases, users with ",(0,r.kt)("em",{parentName:"p"},"readonly"),"=",(0,r.kt)("em",{parentName:"p"},"1")," access cannot alter settings sent with a query, so ClickHouse Connect will drop\nsuch settings in the final request and log a warning."),(0,r.kt)("h3",{id:"client-creation-examples"},"Client Creation Examples"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Without any parameters, a ClickHouse Connect client will connect to the default HTTP port on localhost with the\ndefault user and no password:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import clickhouse_connect\n\nclient = clickhouse_connect.get_client()\nclient.server_version\nOut[2]: '22.10.1.98'\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Connecting to a secure (https) external ClickHouse server")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import clickhouse_connect\n\nclient = clickhouse_connect.get_client(host='play.clickhouse.com', secure=True, port=443, user='play', password='clickhouse')\nclient.command('SELECT timezone()')\nOut[2]: 'Etc/UTC'\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Connecting with a session id and other custom connection parameters")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import clickhouse_connect\n\nclient = clickhouse_connect.get_client(host='play.clickhouse.com',\n                                       user='play',\n                                       password='clickhouse',\n                                       port=443,\n                                       session_id='example_session_1',\n                                       connect_timeout=15,\n                                       database='github',\n                                       distributed_ddl_task_timeout=300)\nclient.database                                       \nOut[2]: 'github'\n")),(0,r.kt)("h2",{id:"common-method-arguments"},"Common Method Arguments"),(0,r.kt)("p",null,"Several client methods use one or both of the common ",(0,r.kt)("inlineCode",{parentName:"p"},"parameters")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"settings")," arguments.  These keyword\narguments are described below."),(0,r.kt)("h3",{id:"parameters-argument"},"Parameters Argument"),(0,r.kt)("p",null,"ClickHouse Connect Client ",(0,r.kt)("inlineCode",{parentName:"p"},"query*")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"command")," methods accept an optional ",(0,r.kt)("inlineCode",{parentName:"p"},"parameters")," keyword argument used for\nbinding Python expressions to a ClickHouse value expression in the rendered SQL. The ",(0,r.kt)("inlineCode",{parentName:"p"},"parameters")," argument should be\na dictionary or a sequence. ClickHouse Connect currently uses the Python\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/stdtypes.html#old-string-formatting"},'"printf" style'),"\nstring formatting for parameter substitution."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Example with Python Dictionary, DateTime value and string escaping")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import datetime\n\nmy_date = datetime.datetime(2022, 10, 01, 15, 20, 5)\n\nparameters = {'v1': my_date, 'v2': \"a string with a single quote'\"}\nclient.query('SELECT * FROM some_table WHERE date >= %(v1)s AND string ILIKE %(v2)s', parameters=parameters)\n\n# Generates the following query:\n# SELECT * FROM some_table WHERE date >= '2022-10-01 15:20:05' AND string ILIKE 'a string with a single quote\\''  \n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Example with Python Sequence (Tuple), Float64, and IPv4Address")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import ipaddress\n\nparameters = (35200.44, ipaddress.IPv4Address(0x443d04fe))\nclient.query('SELECT * FROM some_table WHERE metric >= %s AND ip_address = %s', parameters=parameters)\n\n# Generates the following query:\n# SELECT * FROM some_table WHERE metric >= 35200.44 AND ip_address = '68.61.4.254''  \n")),(0,r.kt)("h3",{id:"settings-argument"},"Settings Argument"),(0,r.kt)("p",null,"All the core SQL Client ClickHouse database server accept an optional ",(0,r.kt)("inlineCode",{parentName:"p"},"settings")," keyword argument used for passing\nClickHouse server ",(0,r.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/settings/settings"},"user settings")," for the included SQL\nstatement. The ",(0,r.kt)("inlineCode",{parentName:"p"},"settings")," argument should be a dictionary.  Each item should be a ClickHouse setting name and its\nassociated value. Note that values will be converted to strings when sent to the server as query parameters."),(0,r.kt)("p",null,"As with client level settings, ClickHouse Connect will drop any settings that the server marks as ",(0,r.kt)("em",{parentName:"p"},"readonly"),"=",(0,r.kt)("em",{parentName:"p"},"1"),", with\nan associated log message. Settings that apply only to queries via the ClickHouse HTTP interface are always valid.\nCurrently those include ",(0,r.kt)("inlineCode",{parentName:"p"},"buffer_size"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"session_id"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"compress"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"decompress"),",\n",(0,r.kt)("inlineCode",{parentName:"p"},"session_timeout"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"session_check"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"query_id"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"quota_key"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"wait_end_of_query"),"."),(0,r.kt)("p",null,"Example of using ClickHouse settings:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"settings = {'merge_tree_min_rows_for_concurrent_read': 65535,\n            'session_id': 'session_1234',\n            'use_skip_indexes': False}\nclient.query(\"SELECT event_type, sum(timeout) FROM event_errors WHERE event_time > '2022-08-01'\", settings=settings)            \n")),(0,r.kt)("h2",{id:"client-command-method"},"Client ",(0,r.kt)("em",{parentName:"h2"},"command")," Method"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"Client.command")," method to send SQL queries to the ClickHouse Server that do not normally return data or return\na simple single value rather than a full dataset. This method takes the following parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cmd"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"Required")),(0,r.kt)("td",{parentName:"tr",align:null},"A ClickHouse SQL statement that returns a single value or a single row of values.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"parameters"),(0,r.kt)("td",{parentName:"tr",align:null},"dict or iterable"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"None")),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"#parameters-argument"},"parameters description"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data"),(0,r.kt)("td",{parentName:"tr",align:null},"str or bytes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"None")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional data to include with the command as the POST body.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"settings"),(0,r.kt)("td",{parentName:"tr",align:null},"dict"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"None")),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"#settings-argument"},"settings description"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"use_database"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"Use the client database (specified when creating the client). False means the command will use the default ClickHouse Server database for the connected user.")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"command")," can be used for DDL statements")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"client.command('CREATE TABLE test_command (col_1 String, col_2 DateTime) Engine MergeTree ORDER BY tuple()')\nclient.command('SHOW CREATE TABLE test_command')\nOut[6]: 'CREATE TABLE default.test_command\\\\n(\\\\n    `col_1` String,\\\\n    `col_2` DateTime\\\\n)\\\\nENGINE = MergeTree\\\\nORDER BY tuple()\\\\nSETTINGS index_granularity = 8192'\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"command")," can also be used for simple queries that return only a single row")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"result = client.command('SELECT count() FROM system.tables')\nresult\nOut[7]: 110\n")),(0,r.kt)("h2",{id:"client-query-method"},"Client ",(0,r.kt)("em",{parentName:"h2"},"query")," Method"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Client.query")," method is the primary way to retrieve data from the ClickHouse Server. It utilizes the Native\nClickHouse format over HTTP to transmit large datasets (up to approximately one million rows) efficiently. This method\ntakes the following parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"Required")),(0,r.kt)("td",{parentName:"tr",align:null},"The ClickHouse SQL SELECT or DESCRIBE query.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"parameters"),(0,r.kt)("td",{parentName:"tr",align:null},"dict or iterable"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"None")),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"#parameters-argument"},"parameters description"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"settings"),(0,r.kt)("td",{parentName:"tr",align:null},"dict"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"None")),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"#settings-argument"},"settings description"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"encoding"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"None")),(0,r.kt)("td",{parentName:"tr",align:null},"Encoding used to encode ClickHouse String columns into Python strings.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"use_none"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"Use Python ",(0,r.kt)("em",{parentName:"td"},"None")," type for ClickHouse nulls. If False, use a datatype default (such as 0) for ClickHouse nulls. This is useful forsome library data structures that don't accept NULL type values.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"context"),(0,r.kt)("td",{parentName:"tr",align:null},"QueryContext"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"None")),(0,r.kt)("td",{parentName:"tr",align:null},"A QueryContext object can be used to encapsulate all of the above method arguments. This is useful forreusing the same group of settings.")))),(0,r.kt)("p",null,"The base ",(0,r.kt)("inlineCode",{parentName:"p"},"query")," method returns a QueryResult object with the following properties:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"result_set")," -- A matrix representing the data returned. It consists of a Sequence of rows, with each row being a\nsequence of column values"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"column_names")," -- A tuple of strings representing the column names in the ",(0,r.kt)("inlineCode",{parentName:"li"},"result_set")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"column_types")," -- A tuple of ClickHouseType instances representing the ClickHouse data type for column in\nthe ",(0,r.kt)("inlineCode",{parentName:"li"},"result_set")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"query_id")," -- The ClickHouse query_id (useful for examining the query in the ",(0,r.kt)("inlineCode",{parentName:"li"},"system.query_log")," table)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"summary")," -- Any data returned by the ",(0,r.kt)("inlineCode",{parentName:"li"},"X-ClickHouse-Summary")," HTTP response header")),(0,r.kt)("p",null,"There are three specialized versions of the main ",(0,r.kt)("inlineCode",{parentName:"p"},"query")," method:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"query_np")," -- This version returns a Numpy Array instead a ClickHouse Connect QueryResult. The same method arguments\nare available (except ",(0,r.kt)("inlineCode",{parentName:"li"},"use_none"),", which is always False for Numpy Arrays)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"query_df")," -- This version returns a Pandas Dataframe instead of a ClickHouse Connect QueryResult. Again the same\nmethod arguments are available, except ",(0,r.kt)("inlineCode",{parentName:"li"},"use_none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"query_arrow")," -- This version returns a PyArrow Table. It utilizes the ClickHouse ",(0,r.kt)("inlineCode",{parentName:"li"},"Arrow")," format directly, so\nit only accepts three arguments in common with the main ",(0,r.kt)("inlineCode",{parentName:"li"},"query method"),":  ",(0,r.kt)("inlineCode",{parentName:"li"},"query"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"parameters"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"settings"),". In\naddition there is additional argument ",(0,r.kt)("inlineCode",{parentName:"li"},"use_strings")," which\ndetermines whether the Arrow Table will render ClickHouse String types as strings (if True) or bytes (if False).")),(0,r.kt)("h2",{id:"client-insert-method"},"Client ",(0,r.kt)("em",{parentName:"h2"},"insert")," Method"),(0,r.kt)("p",null,"For the common use case of inserting multiple records into ClickHouse, there is the ",(0,r.kt)("inlineCode",{parentName:"p"},"Client.insert")," method. It takes the\nfollowing parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"table"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"Required")),(0,r.kt)("td",{parentName:"tr",align:null},"The ClickHouse table to insert into. The full table name (including database) is permitted.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data"),(0,r.kt)("td",{parentName:"tr",align:null},"Sequence of Sequences"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"Required")),(0,r.kt)("td",{parentName:"tr",align:null},"The matrix of data to insert, either a Sequence of rows, each of which is a sequence of column values, or a Sequence of columns, each of which is a sequence of row values.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"column_names"),(0,r.kt)("td",{parentName:"tr",align:null},"Sequence of str, or str"),(0,r.kt)("td",{parentName:"tr",align:null},"'*'"),(0,r.kt)("td",{parentName:"tr",align:null},"A list of column_names for the data matrix. If '*' is used instead, ClickHouse Connect will execute a \"pre-query\" to retrieve all of the column names for the table.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"database"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"''"),(0,r.kt)("td",{parentName:"tr",align:null},"The target database of the insert. If not specified, the database for the client will be assumed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"column_types"),(0,r.kt)("td",{parentName:"tr",align:null},"Sequence of ClickHouseType"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"None")),(0,r.kt)("td",{parentName:"tr",align:null},'A list of ClickHouseType instances. If neither column_types or column_type_names is specified, ClickHouse Connect will execute a "pre-query" to retrieve all the column types for the table.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"column_type_names"),(0,r.kt)("td",{parentName:"tr",align:null},"Sequence of ClickHouse type names"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"None")),(0,r.kt)("td",{parentName:"tr",align:null},'A list of ClickHouse datatype names. If neither column_types or column_type_names is specified, ClickHouse Connect will execute a "pre-query" to retrieve all the column types for the table.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"column_oriented"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"If True, the ",(0,r.kt)("inlineCode",{parentName:"td"},"data"),' argument is assume to be a Sequence of columns (and no "pivot" will be necessary to insert the data). Otherwise ',(0,r.kt)("inlineCode",{parentName:"td"},"data")," is interpreted as a Sequence of rows.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"settings"),(0,r.kt)("td",{parentName:"tr",align:null},"dict"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"None")),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"#settings-argument"},"settings description"),".")))),(0,r.kt)("p",null,"This method does not return a value. An exception will be raised if the insert fails for any reason."),(0,r.kt)("p",null,"There are two specialized versions of the main ",(0,r.kt)("inlineCode",{parentName:"p"},"query")," method:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"insert_df")," -- This method requires a ",(0,r.kt)("inlineCode",{parentName:"li"},"data_frame")," argument that must be a Pandas Dataframe instance. In addition to\n",(0,r.kt)("inlineCode",{parentName:"li"},"data_frame"),", the destination ",(0,r.kt)("inlineCode",{parentName:"li"},"table")," argument is required, and the optional ",(0,r.kt)("inlineCode",{parentName:"li"},"database")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"settings")," arguments may\nalso be specified."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"insert_arrow")," -- This method requires an ",(0,r.kt)("inlineCode",{parentName:"li"},"arrow_table")," argument that must be a PyArrow Table instance. In addition to\n",(0,r.kt)("inlineCode",{parentName:"li"},"arrow_table"),", the destination ",(0,r.kt)("inlineCode",{parentName:"li"},"table")," argument is required, and the optional ",(0,r.kt)("inlineCode",{parentName:"li"},"database")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"settings")," arguments may\nalso be specified.")),(0,r.kt)("p",null,"(Note that a Numpy array is a valid Sequence of Sequences, so it can be used as the ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," argument to the main ",(0,r.kt)("inlineCode",{parentName:"p"},"insert"),"\nmethod)."))}d.isMDXComponent=!0}}]);