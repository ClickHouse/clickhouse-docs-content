"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[68994],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(a),h=r,m=d["".concat(l,".").concat(h)]||d[h]||c[h]||i;return a?n.createElement(m,s(s({ref:t},u),{},{components:a})):n.createElement(m,s({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},48251:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={slug:"/en/guides/developer/working-with-json/json-semi-structured",sidebar_label:"Semi-Structured Approach",sidebar_position:3,description:"Using a semi-structured approach"},s="Semi-Structured Approach",o={unversionedId:"en/guides/developer/working-with-json/json-semi-structured",id:"en/guides/developer/working-with-json/json-semi-structured",title:"Semi-Structured Approach",description:"Using a semi-structured approach",source:"@site/docs/en/guides/developer/working-with-json/json-semi-structured.md",sourceDirName:"en/guides/developer/working-with-json",slug:"/en/guides/developer/working-with-json/json-semi-structured",permalink:"/docs/en/guides/developer/working-with-json/json-semi-structured",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/guides/developer/working-with-json/json-semi-structured.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{slug:"/en/guides/developer/working-with-json/json-semi-structured",sidebar_label:"Semi-Structured Approach",sidebar_position:3,description:"Using a semi-structured approach"},sidebar:"english",previous:{title:"Relying on Structure",permalink:"/docs/en/guides/developer/working-with-json/json-structured"},next:{title:"Other Approaches",permalink:"/docs/en/guides/developer/working-with-json/json-other-approaches"}},l={},p=[{value:"Overview",id:"overview",level:2},{value:"Relying on Schema Inference",id:"relying-on-schema-inference",level:2},{value:"JSON Object Type",id:"json-object-type",level:2},{value:"Selecting Dynamic Subcolumns",id:"selecting-dynamic-subcolumns",level:2},{value:"Adding Primary Keys",id:"adding-primary-keys",level:2},{value:"Limitations and Best Practices",id:"limitations-and-best-practices",level:2},{value:"Handling Data Changes",id:"handling-data-changes",level:2},{value:"Adding Columns",id:"adding-columns",level:3},{value:"Changing Columns",id:"changing-columns",level:3},{value:"Handling JSON Formats",id:"handling-json-formats",level:2},{value:"Related Content",id:"related-content",level:2}],u={toc:p};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"semi-structured-approach"},"Semi-Structured Approach"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"To address the challenges of semi-structured data ClickHouse provides a JSON Object type. This feature is only available in versions later than 22.3.1. It represents the future preferred mechanism for handling arbitrary JSON. The alternative approaches described ",(0,r.kt)("a",{parentName:"p",href:"json-other-approaches"},"later"),", which partially rely on imposing a strict schema, still have validity as extracting JSON fields into dedicated columns allows these to be optimized with codecs or utilized primary/sort keys. "),(0,r.kt)("p",null,"The JSON Object type is advantageous when dealing with complex nested structures, which are subject to change. The type automatically infers the columns from the structure during insertion and merges these into the existing table schema. By storing JSON keys and their values as columns and dynamic subcolumns, ClickHouse can exploit the same optimizations used for structured data and thus provide comparable performance. The user is also provided with an intuitive path syntax for column selection. Furthermore, a table can contain a JSON object column with a flexible schema and more strict conventional columns with predefined types."),(0,r.kt)("p",null,"It is important to note that the JSON type primarily syntactically enhances JSON handling at insertion and query time, i.e., it still exploits the native existing ClickHouse types for the columns, with JSON objects represented using the ",(0,r.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/sql-reference/data-types/tuple/"},"Tuple type"),". As a result, previously, manual schema handling is handled automatically with querying significantly simpler."),(0,r.kt)("h2",{id:"relying-on-schema-inference"},"Relying on Schema Inference"),(0,r.kt)("p",null,"Note that recent versions of ClickHouse (22.4.1+) will infer the schema for JSONEachRow. This inference will also work for JSON objects with nested structures. These will be inferred as JSON object fields. For example, executing a DESCRIBE shows the detected schema for the file, including the actor fields:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"DESCRIBE s3('https://datasets-documentation.s3.eu-west-3.amazonaws.com/github/github-2022.ndjson.gz', \n'JSONEachRow') SETTINGS input_format_max_rows_to_read_for_schema_inference=100;\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"type"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Nullable","(","String",")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"actor"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Object","(","'json'",")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"repo"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Object","(","'json'",")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"created","_","at"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Nullable","(","String",")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"payload"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Object","(","'json'",")")))),(0,r.kt)("p",null,"Note the setting ",(0,r.kt)("inlineCode",{parentName:"p"},"input_format_max_rows_to_read_for_schema_inference"),". This determines the number of rows used to infer a schema. In this case, the schema can be inferred within the default of 100 rows. If the first 100 rows contained columns with null values, this would need to be set higher. This schema inference simplifies SELECT statements. Try executing the following to see how the actor and repo columns are returned as JSON."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT type, actor, repo FROM \ns3('https://datasets-documentation.s3.eu-west-3.amazonaws.com/github/github-2022.ndjson.gz', \n'JSONEachRow') LIMIT 2;\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"actor"),(0,r.kt)("th",{parentName:"tr",align:"left"},"repo"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"PushEvent"),(0,r.kt)("td",{parentName:"tr",align:"left"},'{"avatar',"_",'url":"https:',"\\","/","\\","/avatars.githubusercontent.com","\\","/u","\\",'/93110249?","display',"_",'login":"Lakshmipatil2021","id":93110249,"login":"Lakshmipatil2021","url":"https:',"\\","/","\\","/api.github.com","\\","/users","\\",'/Lakshmipatil2021"}'),(0,r.kt)("td",{parentName:"tr",align:"left"},'{"id":429298592,"name":"revacprogramming',"\\",'/pps-test1-Lakshmipatil2021","url":"https:',"\\","/","\\","/api.github.com","\\","/repos","\\","/revacprogramming","\\",'/pps-test1-Lakshmipatil2021"}')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"MemberEvent"),(0,r.kt)("td",{parentName:"tr",align:"left"},'{"avatar',"_",'url":"https:',"\\","/","\\","/avatars.githubusercontent.com","\\","/u","\\",'/95751520?","display',"_",'login":"KStevenT","id":95751520,"login":"KStevenT","url":"https:',"\\","/","\\","/api.github.com","\\","/users","\\",'/KStevenT"}'),(0,r.kt)("td",{parentName:"tr",align:"left"},'{"id":443103546,"name":"KStevenT',"\\","/HTML","_",'ExternalWorkshop","url":"https:',"\\","/","\\","/api.github.com","\\","/repos","\\","/KStevenT","\\","/HTML","_",'ExternalWorkshop"}')))),(0,r.kt)("p",null,"Schema inference and the introduction of the JSON Object Type allow us to handle nested data elegantly and avoid verbose definitions. However, we need to treat the entire row as a JSON object for dynamic properties on the root.  Version 22.4 of ClickHouse introduces the JSONAsObject format to assist with this."),(0,r.kt)("h2",{id:"json-object-type"},"JSON Object Type"),(0,r.kt)("p",null,"Using the same dataset as above, we explicitly declare that each row is a single object via the ",(0,r.kt)("inlineCode",{parentName:"p"},"JSONAsObject")," format.  This single object is mapped to a field event of the type ",(0,r.kt)("inlineCode",{parentName:"p"},"Object(JSON)")," - in this case, we use the shorthand ",(0,r.kt)("inlineCode",{parentName:"p"},"JSON.")," Note if we don\u2019t explicitly specify ",(0,r.kt)("inlineCode",{parentName:"p"},"event")," as the field name in the s3 function, a field ",(0,r.kt)("inlineCode",{parentName:"p"},"json")," will be used:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM s3('https://datasets-documentation.s3.eu-west-3.amazonaws.com/github/github-2022.ndjson.gz', \n'JSONAsObject', 'event JSON') LIMIT 1;\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"event"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},'{"type":"PushEvent","actor.avatar',"_",'url":"https:',"\\","/","\\","/avatars.githubusercontent.com","\\","/u","\\",'/93110249?","actor.display',"_",'login":"Lakshmipatil2021","actor.id":93110249,"actor.login":"Lakshmipatil2021","actor.url":"https:',"\\","/","\\","/api.github.com","\\","/users","\\",'/Lakshmipatil2021","repo.id":429298592,"repo.name":"revacprogramming',"\\",'/pps-test1-Lakshmipatil2021","repo.url":"https:',"\\","/","\\","/api.github.com","\\","/repos","\\","/revacprogramming","\\",'/pps-test1-Lakshmipatil2021","created',"_",'at":"2022-01-04T07:00:00Z","payload.pull',"_","request.updated","_",'at":"","payload.pull',"_",'request.user.login":"","payload.pull',"_",'request.number":0,"payload.pull',"_",'request.title":"","payload.pull',"_",'request.state":"","payload.pull',"_","request.author","_",'association":"","payload.pull',"_",'request.head.ref":"","payload.pull',"_",'request.head.sha":"","payload.pull',"_",'request.base.ref":"","payload.pull',"_",'request.base.sha":"","payload.action":"","payload.ref":"refs',"\\","/heads","\\",'/main","payload.ref',"_",'type":"","payload.size":1,"payload.distinct',"_",'size":1}')))),(0,r.kt)("p",null,"To query this data effectively, we currently need to store it into a MergeTree. This is subject to change in later versions. We, therefore, create a table and insert the rows using an INSERT INTO SELECT. "),(0,r.kt)("p",null,"First, create the table before inserting the rows. This can take a few minutes depending on the hardware and network latency to the s3 source bucket:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note the use of allow_experimental_object_type as the JSON object type is still an experimental feature.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"DROP TABLE IF EXISTS github_json;\n\nSET allow_experimental_object_type=1;\n\nCREATE table github_json(event JSON) ENGINE = MergeTree ORDER BY tuple()\n\nINSERT INTO github_json SELECT * FROM s3('https://datasets-documentation.s3.eu-west-3.amazonaws.com/github/github-2022.ndjson.gz', \nJSONAsObject, 'event JSON');\n")),(0,r.kt)("p",null,"Confirm the table schema and row count as 1m."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT count() FROM github_json;\n\nDESCRIBE github_json;\n\nObject('json')\n")),(0,r.kt)("p",null,"While the above confirms each row is treated as a JSON object, it provides no information on how the fields in the JSON are mapped columns. To obtain this, we can utilize the setting ",(0,r.kt)("inlineCode",{parentName:"p"},"describe_extend_object_types"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"DESCRIBE github_json SETTINGS describe_extend_object_types=1;\n\nTuple(actor Tuple(avatar_url String, display_login String, id Int32, login String, url String), \ncreated_at String, payload Tuple(action String, distinct_size Int32, \npull_request Tuple(author_association String, base Tuple(ref String, sha String), \nhead Tuple(ref String, sha String), number Int32, state String, title String, \nupdated_at String, user Tuple(login String)), ref String, ref_type String, size Int16), \nrepo Tuple(id Int32, name String, url String), type String)\n")),(0,r.kt)("p",null,"The most interesting component of this mapping is the handling of the nested JSON. Note how the JSON structure below is mapped to ",(0,r.kt)("inlineCode",{parentName:"p"},"repo Tuple(id Int32, name String, url String)"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'  "repo": {\n    "id": 429298592,\n    "name": "revacprogramming/pps-test1-Lakshmipatil2021",\n    "url": "https://api.github.com/repos/revacprogramming/pps-test1-Lakshmipatil2021"\n  }\n')),(0,r.kt)("p",null,"This structure could be mapped manually but would require the user to structure data appropriate for insertion and adapt queries to utilize - see ",(0,r.kt)("a",{parentName:"p",href:"./json-other-approaches"},"Other Approaches"),", significantly complicating usage."),(0,r.kt)("p",null,"At this point, we are ready to exploit these dynamically created columns with queries."),(0,r.kt)("h2",{id:"selecting-dynamic-subcolumns"},"Selecting Dynamic Subcolumns"),(0,r.kt)("p",null,"Querying the above table highlights some of the ",(0,r.kt)("a",{parentName:"p",href:"./json-other-approaches"},"historical challenges")," of using Tuples for nested JSON data."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT event.type, event.repo, event.actor FROM github_json LIMIT 1;\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"event.type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"event.repo"),(0,r.kt)("th",{parentName:"tr",align:"left"},"event.actor"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"PushEvent"),(0,r.kt)("td",{parentName:"tr",align:"left"},"(","429298592,'revacprogramming/pps-test1-Lakshmipatil2021','",(0,r.kt)("a",{parentName:"td",href:"https://api.github.com/repos/revacprogramming/pps-test1-Lakshmipatil2021'%5C"},"https://api.github.com/repos/revacprogramming/pps-test1-Lakshmipatil2021'\\"),")"),(0,r.kt)("td",{parentName:"tr",align:"left"},"(","'",(0,r.kt)("a",{parentName:"td",href:"https://avatars.githubusercontent.com/u/93110249?','Lakshmipatil2021','',93110249,'Lakshmipatil2021','https://api.github.com/users/Lakshmipatil2021'%5C"},"https://avatars.githubusercontent.com/u/93110249?','Lakshmipatil2021','',93110249,'Lakshmipatil2021','https://api.github.com/users/Lakshmipatil2021'\\"),")")))),(0,r.kt)("p",null,"To return the original structure we need both JSONEachRow format and the parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"output_format_json_named_tuples_as_objects"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT event.type, event.repo, event.actor FROM github_json LIMIT 1 \nFORMAT JSONEachRow SETTINGS output_format_json_named_tuples_as_objects=1;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"event.type":"PushEvent","event.repo":{"id":429298592,\n"name":"revacprogramming\\/pps-test1-Lakshmipatil2021",\n"url":"https:\\/\\/api.github.com\\/repos\\/revacprogramming\\/pps-test1-Lakshmipatil2021"},\n"event.actor":{"avatar_url":"https:\\/\\/avatars.githubusercontent.com\\/u\\/93110249?",\n"display_login":"Lakshmipatil2021","gravatar_id":"","id":93110249,\n"login":"Lakshmipatil2021","url":"https:\\/\\/api.github.com\\/users\\/Lakshmipatil2021"}}\n')),(0,r.kt)("p",null,"While the above-simplified example illustrates the mechanics of using JSON Object types, users need to query these JSON-based columns using the same filters and aggregation capabilities as any other type. We can translate some of the examples provided here to JSON queries to illustrate equivalence. Note this is a 1m row sample of data only, so results are meaningless."),(0,r.kt)("p",null,"Counting the ",(0,r.kt)("a",{parentName:"p",href:"https://ghe.clickhouse.tech/#top-repositories-by-stars"},"top repositories by stars")," becomes a simple query. Note the use of a period as a path delimiter in nested objects:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT event.repo.name, count() AS stars FROM github_json WHERE event.type = 'WatchEvent' \nGROUP BY event.repo.name ORDER BY stars DESC LIMIT 5;\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"event.repo.name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"stars"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"dwmkerr/hacker-laws"),(0,r.kt)("td",{parentName:"tr",align:"left"},"283")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"tkellogg/dura"),(0,r.kt)("td",{parentName:"tr",align:"left"},"200")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"aplus-framework/app"),(0,r.kt)("td",{parentName:"tr",align:"left"},"157")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"seemoo-lab/opendrop"),(0,r.kt)("td",{parentName:"tr",align:"left"},"111")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"heroku-python/flask-sockets"),(0,r.kt)("td",{parentName:"tr",align:"left"},"92")))),(0,r.kt)("p",null,"More complex queries ",(0,r.kt)("a",{parentName:"p",href:"https://ghe.clickhouse.tech/#how-has-the-list-of-top-repositories-changed-over-the-years"},"showing the list of top repositories over time")," are also possible. We adapt the query as it covers a short period (3 days). Also, note the need to parse the ",(0,r.kt)("inlineCode",{parentName:"p"},"event.created_at field")," with the function ",(0,r.kt)("inlineCode",{parentName:"p"},"parseDateTimeBestEffort")," as this has been inferred as a string."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n   repo AS name,\n   groupArrayInsertAt(toUInt32(c), toUInt64(dateDiff('hour', toDate('2022-01-01'), hour))) AS data\nFROM\n(\n   SELECT\n       lower(event.repo.name) AS repo,\n       toStartOfHour(parseDateTimeBestEffort(event.created_at)) AS hour,\n       count() AS c\n   FROM github_json\n   WHERE (event.type = 'WatchEvent') AND (toYear(parseDateTimeBestEffort(event.created_at)) >= 2022) AND (repo IN\n   (\n       SELECT lower(event.repo.name) AS repo\n       FROM github_json\n       WHERE (event.type = 'WatchEvent') AND (toYear(parseDateTimeBestEffort(event.created_at)) >= 2022)\n       GROUP BY event.repo.name\n       ORDER BY count() DESC\n       LIMIT 10\n   ))\n   GROUP BY\n       repo,\n       hour\n)\nGROUP BY repo\nORDER BY repo ASC;\n")),(0,r.kt)("h2",{id:"adding-primary-keys"},"Adding Primary Keys"),(0,r.kt)("p",null,"The above example is not realistic in that it has no primary or sort key i.e., it uses ",(0,r.kt)("inlineCode",{parentName:"p"},"tuple()"),". This negates the benefit of the index features in ClickHouse. To add a primary key, and still exploit the JSON object capabilities, we recommended using a dedicated subkey for the JSON. This requires inserting the data using the JSONAsRow format instead of JSONAsObject. For example, consider the JSON below and the corresponding table definition and insert statement."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SET allow_experimental_object_type=1;\n\nDROP TABLE IF EXISTS github_json;\n\nCREATE table github_json\n(\n   event_type Enum('CommitCommentEvent' = 1, 'CreateEvent' = 2, 'DeleteEvent' = 3,\n   'ForkEvent' = 4, 'GollumEvent' = 5, 'IssueCommentEvent' = 6, 'IssuesEvent' = 7, 'MemberEvent' = 8, \n   'PublicEvent' = 9, 'PullRequestEvent' = 10, 'PullRequestReviewCommentEvent' = 11, \n   'PushEvent' = 12, 'ReleaseEvent' = 13, 'SponsorshipEvent' = 14, 'WatchEvent' = 15, 'GistEvent' = 16, 'FollowEvent' = 17, 'DownloadEvent' = 18, 'PullRequestReviewEvent' = 19,\n   'ForkApplyEvent' = 20, 'Event' = 21, 'TeamAddEvent' = 22),\n    repo_name LowCardinality(String),\n    event      JSON\n) ENGINE = MergeTree ORDER BY (event_type, repo_name);\n")),(0,r.kt)("p",null,"Inserting data requires us to use the JSONEachRow format. Note how the ",(0,r.kt)("inlineCode",{parentName:"p"},"event")," sub field now holds our dynamic JSON, whilst the root keys are explicitly defined."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'INSERT INTO github_json FORMAT JSONEachRow\n{"event":{"type":"PushEvent","actor":{"avatar_url":"https://avatars.githubusercontent.com/u/41898282?",\n"display_login":"github-actions","gravatar_id":"","id":41898282,"login":"github-actions[bot]",\n"url":"https://api.github.com/users/github-actions[bot]"},"repo":{"id":410071248,\n"name":"pioug/yield-data","url":"https://api.github.com/repos/pioug/yield-data"}},\n"event_type":"PushEvent","repo_name":"pioug/yield-data"}\n')),(0,r.kt)("p",null,"This requires a restructuring of our JSON, which is inconvenient at best. Ideally, we need a more flexible approach that allows us to modify the fields we wish to extract as root keys over time without needing to change our data pipelines. Inserting our row as a ",(0,r.kt)("inlineCode",{parentName:"p"},"String")," inside an EPHEMERAL column ",(0,r.kt)("inlineCode",{parentName:"p"},"message_raw"),", we can extract specific fields of interest using DEFAULT expressions for the root fields. The ",(0,r.kt)("inlineCode",{parentName:"p"},"String")," EPHEMERAL column is also mapped to a JSON object column ",(0,r.kt)("inlineCode",{parentName:"p"},"message")," that provides the usual flexibility. This ",(0,r.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/sql-reference/statements/create/table/#ephemeral"},"EPHEMERAL")," column will not be persisted and will be discarded at INSERT time. Our primary key fields are as a result duplicated i.e. they occur at the root of the document, as well as in the ",(0,r.kt)("inlineCode",{parentName:"p"},"message")," JSON."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"DROP TABLE IF EXISTS github_json;\n\nSET allow_experimental_object_type = 1;\nCREATE table github_json\n(\n   event_type LowCardinality(String) DEFAULT JSONExtractString(message_raw, 'type'),\n   repo_name LowCardinality(String) DEFAULT JSONExtractString(message_raw, 'repo.name'),\n   message JSON DEFAULT message_raw,\n   message_raw String EPHEMERAL\n) ENGINE = MergeTree ORDER BY (event_type, repo_name);\n")),(0,r.kt)("p",null,"Insertion thus requires a modified structure - note how the JSON is parsed as a string inside message_raw."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'INSERT INTO github_json (message_raw) FORMAT JSONEachRow {"message_raw": "{\\"type\\":\\"PushEvent\\", \n\\"created_at\\": \\"2022-01-04 07:00:00\\", \\"actor\\":{\\"avatar_url\\":\\"https://avatars.githubusercontent.com/u/41898282?\\",\n\\"display_login\\":\\"github-actions\\",\\"gravatar_id\\":\\"\\",\\"id\\":41898282,\\"login\\":\\"github-actions[bot]\\",\n\\"url\\":\\"https://api.github.com/users/github-actions[bot]\\"},\\"repo\\":{\\"id\\":410071248,\\"name\\":\\"pioug/yield-data\\",\n\\"url\\":\\"https://api.github.com/repos/pioug/yield-data\\"}}"}\n')),(0,r.kt)("p",null,"To add fields to the root, we in turn just need to ALTER the table definition adding fields as required. For details on how to retrospectively add columns, see the technique used in ",(0,r.kt)("a",{parentName:"p",href:"./json-other-approaches#hybrid-approach-with-materialized-columns"},"Other Approaches"),"."),(0,r.kt)("h2",{id:"limitations-and-best-practices"},"Limitations and Best Practices"),(0,r.kt)("p",null,"Dynamic columns in JSON objects are as fast predefined types. The flexible schema is an extremely powerful feature at every little syntax overhead and a natural fit for handling data such as logs - where keys are frequently added through dynamic properties such as container labels in Kubernetes."),(0,r.kt)("p",null,"Parsing of JSON, and inference of the schema does incur a cost at insertion time. Because of this, we recommend keeping column counts below 10k. Should you need to exceed this, consult",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/ClickHouse/issues/new?assignees=&labels=question&template=10_question.md&title="}," ClickHouse support"),". "),(0,r.kt)("p",null,"There are also limitations as to how dynamic columns can be used. As noted earlier, they cannot be used as primary or sort keys. Furthermore, they cannot be configured to use specific codecs. For optimal performance, we recommend the JSON object type be used for a specific subkey of the JSON and the root keys be declared explicitly. This allows them to be configured with specific codecs or used for sort/primary keys. As shown in ",(0,r.kt)("a",{parentName:"p",href:"#adding-primary-keys"},"Adding Primary Keys"),", this requires the use of the JSONAsRow format vs. inserting the entire row as JSON with the JSONAsObject format."),(0,r.kt)("h2",{id:"handling-data-changes"},"Handling Data Changes"),(0,r.kt)("h3",{id:"adding-columns"},"Adding Columns"),(0,r.kt)("p",null,"Handling semi-structured data requires ClickHouse to adapt new columns as they are added or their type changes. We explore some of these behaviors below."),(0,r.kt)("p",null,"Consider the simple example below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "PushEvent",\n  "actor": {\n    "id": 93110249\n  },\n  "repo": {\n    "id": 429298592,\n    "name": "revacprogramming/pps-test1-Lakshmipatil2021",\n    "url": "https://api.github.com/repos/revacprogramming/pps-test1-Lakshmipatil2021"\n  }\n}\n')),(0,r.kt)("p",null,"Creating a table to accept this data and performing the insert is trivial."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'SET allow_experimental_object_type=1;\nCREATE table github_tmp (event JSON) ENGINE = MergeTree ORDER BY tuple();\n\nINSERT INTO github_tmp FORMAT JSONAsObject\n{"type":"PushEvent","actor":{"id":93110249},"repo":{"id":429298592,\n"name":"revacprogramming/pps-test1-Lakshmipatil2021",\n"url":"https://api.github.com/repos/revacprogramming/pps-test1-Lakshmipatil2021"}}\n')),(0,r.kt)("p",null,"Inspecting the types we can see the columns created:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SET describe_extend_object_types=1;\nDESCRIBE github_tmp;\n\nTuple(actor Tuple(id Int32), repo Tuple(id Int32, name String, url String), type String)\n")),(0,r.kt)("p",null,"Suppose now we insert the following object. This adds additional fields to the actor object:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "type": "PushEvent",\n    "actor": {\n      "avatar_url": "https://avatars.githubusercontent.com/u/81258380?",\n      "display_login": "Helikopter-Bojowy",\n      "gravatar_id": "",\n      "id": 81258380,\n      "login": "Helikopter-Bojowy",\n      "url": "https://api.github.com/users/Helikopter-Bojowy"\n    },\n    "repo": {\n      "id": 352069365,\n      "name": "Helikopter-Bojowy/Exp-na-helikopterze",\n      "url": "https://api.github.com/repos/Helikopter-Bojowy/Exp-na-helikopterze"\n    }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'INSERT INTO github_tmp FORMAT JSONAsObject\n{"type":"PushEvent","actor":{"avatar_url":"https://avatars.githubusercontent.com/u/81258380?",\n"display_login":"Helikopter-Bojowy","gravatar_id":"","id":81258380,"login":"Helikopter-Bojowy",\n"url":"https://api.github.com/users/Helikopter-Bojowy"},"repo":{"id":352069365,\n"name":"Helikopter-Bojowy/Exp-na-helikopterze",\n"url":"https://api.github.com/repos/Helikopter-Bojowy/Exp-na-helikopterze"}}\n')),(0,r.kt)("p",null,"If we inspect the schema, we can see the columns have automatically been inferred and added:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SET describe_extend_object_types=1;\nDESCRIBE github_tmp;\n\nTuple(actor Tuple(avatar_url String, display_login String, gravatar_id String, \nid Int32, login String, url String), repo Tuple(id Int32, name String, url String), \ntype String)\n")),(0,r.kt)("h3",{id:"changing-columns"},"Changing Columns"),(0,r.kt)("p",null,"Despite best efforts, JSON is often inconsistent in types. Whilst some data stores, such as Kafka, can enforce a schema on JSON this is often not enforced. As a result, ClickHouse can receive the same field in multiple types. This often requires unifying types. Consider the following example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "PushEvent",\n  "actor": {\n    "id": 10\n  }\n}\n')),(0,r.kt)("p",null,"Here ",(0,r.kt)("inlineCode",{parentName:"p"},"actor.id")," is an integer. If inserted to a table, it will be mapped to an Int8 as shown below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'SET allow_experimental_object_type=1;\nCREATE table github_types ( event JSON ) ENGINE = MergeTree ORDER BY tuple();\n\nINSERT INTO github_types FORMAT JSONAsObject\n{"type":"PushEvent","actor":{"id":10}}\n\nSET describe_extend_object_types=1;\nDESCRIBE github_types;\n\nTuple(actor Tuple(id Int8), type String)\n')),(0,r.kt)("p",null,"Now Github has alot more users than can be represented by an Int8. A typical user id is much larger. Consider the more realistic example below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'INSERT INTO github_types FORMAT JSONAsObject\n{"type":"PushEvent","actor":{"id":93110249}}\n')),(0,r.kt)("p",null,"As shown the id field is now represented as an Int32."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SET describe_extend_object_types=1;\nDESCRIBE github_types;\n\nTuple(actor Tuple(id Int32), type String)\n")),(0,r.kt)("p",null,"Suppose that Github decides that ids can be alphanumeric, or more realistic a value is inserted as a string e.g."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "type": "PushEvent",\n    "actor": {\n      "id": "81258380"\n    }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'INSERT INTO github_types FORMAT JSONAsObject\n{"type":"PushEvent","actor":{"id":"81258380"}}\n\nSET describe_extend_object_types=1;\nDESCRIBE github_types;\n\nTuple(actor Tuple(id String), type String)\n')),(0,r.kt)("p",null,"As shown, ClickHouse is now forced to represent the ",(0,r.kt)("inlineCode",{parentName:"p"},"actor.id")," column as a string."),(0,r.kt)("p",null,"This sort of coercion is supported for most types that have variable representation e.g. Int, Float. If necessary, ClickHouse will unify to the higher bit type that allows all current values to be represented. If necessary, converting to a ",(0,r.kt)("inlineCode",{parentName:"p"},"String")," represents the least precise definition."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Warning: This changing in types can break queries if you rely on type specific functions e.g. sum for numerics. We recommend you ensure your data is consistent where possible and rely on this feature as a backup vs best practice.")),(0,r.kt)("p",null,"Note that not all types can be unified. Attempting the following, after inserting any of the previous data will result in an error:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'INSERT INTO github_types FORMAT JSONAsObject\n{"type":"PushEvent","actor":{"id":["92258380"]}}\n')),(0,r.kt)("p",null,"The inverse of this would also fail i.e. if for the first row id was an ",(0,r.kt)("inlineCode",{parentName:"p"},"Array(String)")," and subsequent rows were only a ",(0,r.kt)("inlineCode",{parentName:"p"},"String"),". Likewise objects (represented as Tuples) cannot be unified with scalar types such as ",(0,r.kt)("inlineCode",{parentName:"p"},"String"),". The contents of these can, however, be coerced. For example, consider the following where actor.id is first an ",(0,r.kt)("inlineCode",{parentName:"p"},"Array(Int8)")," and then an ",(0,r.kt)("inlineCode",{parentName:"p"},"Array(String)"),". "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'DROP TABLE github_types;\nSET allow_experimental_object_type=1;\nCREATE table github_types ( event JSON ) ENGINE = MergeTree ORDER BY tuple();\n\nINSERT INTO github_types FORMAT JSONAsObject\n{"type":"PushEvent","actor":{"id":[10]}}\n\nSET describe_extend_object_types=1;\nDESCRIBE github_types;\n\nTuple(actor Tuple(id Array(Int8)), type String)\n\nINSERT INTO github_types FORMAT JSONAsObject\n{"type":"PushEvent","actor":{"id":["92258380"]}}\n\nSET describe_extend_object_types=1;\nDESCRIBE github_types;\n\nTuple(actor Tuple(id Array(String)), type String)\n')),(0,r.kt)("h2",{id:"handling-json-formats"},"Handling JSON Formats"),(0,r.kt)("p",null,"ClickHouse can handle JSON in a number of formats, other than JSONEachRow and JSONAsObject. These are useful on both input and output and are described ",(0,r.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/interfaces/formats/#json"},"here"),"."),(0,r.kt)("h2",{id:"related-content"},"Related Content"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://clickhouse.com/blog/getting-data-into-clickhouse-part-2-json"},"Getting Data Into ClickHouse - Part 2 - A JSON detour"))))}c.isMDXComponent=!0}}]);