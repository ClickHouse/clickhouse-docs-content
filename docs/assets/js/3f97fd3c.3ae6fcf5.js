"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[93586],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(a),f=r,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||o;return a?n.createElement(m,i(i({ref:t},u),{},{components:a})):n.createElement(m,i({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},69657:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={slug:"/en/integrations/data-ingestion/kafka/code/producer/"},i="Kafka Producer",s={unversionedId:"en/integrations/data-ingestion/kafka/code/producer/README",id:"en/integrations/data-ingestion/kafka/code/producer/README",title:"Kafka Producer",description:"Supports ClickHouse documentation on Kafka.",source:"@site/docs/en/integrations/data-ingestion/kafka/code/producer/README.md",sourceDirName:"en/integrations/data-ingestion/kafka/code/producer",slug:"/en/integrations/data-ingestion/kafka/code/producer/",permalink:"/docs/en/integrations/data-ingestion/kafka/code/producer/",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/integrations/data-ingestion/kafka/code/producer/README.md",tags:[],version:"current",frontMatter:{slug:"/en/integrations/data-ingestion/kafka/code/producer/"},sidebar:"english",previous:{title:"Kafka Connect Configurations",permalink:"/docs/en/integrations/data-ingestion/kafka/code/connectors/"},next:{title:"Ingest MQTT data",permalink:"/docs/en/integrations/mqtt"}},l={},c=[{value:"Requirements",id:"requirements",level:2},{value:"Setup",id:"setup",level:2},{value:"Usage",id:"usage",level:2},{value:"Not in scope",id:"not-in-scope",level:2},{value:"Large Datasets",id:"large-datasets",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"kafka-producer"},"Kafka Producer"),(0,r.kt)("p",null,"Supports ",(0,r.kt)("a",{parentName:"p",href:"/en/integrations/kafka"},"ClickHouse documentation on Kafka"),"."),(0,r.kt)("p",null,"This is a simple Kafka producer written in Python for ndjson data. It ensures a schema is set for the JSON - either generating a schema or using a specified one."),(0,r.kt)("p",null,"Schemas are required for tools such as the Kafka JDBC sink."),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Python 3.8.10+"),(0,r.kt)("li",{parentName:"ul"},"Kafka instance v7+. Easiest solution is to create a Kafka cluster in Confluent Cloud - which offers an adequate free tier."),(0,r.kt)("li",{parentName:"ul"},"Ndjson file. A sample github ndjson file can be found ",(0,r.kt)("a",{parentName:"li",href:"https://datasets-documentation.s3.eu-west-3.amazonaws.com/kafka/github_all_columns.ndjson"},"here")," with accompanying config for the script ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ClickHouse/kafka-samples/blob/main/producer/github.config"},"here"),". See ",(0,r.kt)("a",{parentName:"li",href:"#larger-datasets"},"Larger Datasets")," if a larger test file is required.")),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"pip install -r requirements.txt")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Prepare a configuration. See ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ClickHouse/kafka-samples/blob/main/producer/github.config"},"github.config")," for examples. Any target topic will be automatically created if it doesn't exist."),(0,r.kt)("li",{parentName:"ol"},"(Optional) Prepare a ",(0,r.kt)("a",{parentName:"li",href:"https://json-schema.org/"},"JSON schema file")," for your ndjson and specify this in the config from (1) via ",(0,r.kt)("inlineCode",{parentName:"li"},"input.schema"),". To infer a schema automatically do not set this parameter. This will cause the schema to be inferred from the first 100 lines. This is best effort only (but works for the gitub dataset)!"),(0,r.kt)("li",{parentName:"ol"},"Run it!")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"python producer.py -c <config_file>")),(0,r.kt)("h2",{id:"not-in-scope"},"Not in scope"),(0,r.kt)("p",null,"Whilst all producer configuration parameters supported by the ",(0,r.kt)("a",{parentName:"p",href:"https://kafka-python.readthedocs.io/en/master/apidoc/KafkaProducer.html"},"Kafka python client")," can be used - replace ",(0,r.kt)("inlineCode",{parentName:"p"},"_")," with ",(0,r.kt)("inlineCode",{parentName:"p"},".")," in the configuration, no work has been done regards testing these settings for optimal performance."),(0,r.kt)("h2",{id:"large-datasets"},"Large Datasets"),(0,r.kt)("p",null,"The sample ",(0,r.kt)("a",{parentName:"p",href:"https://datasets-documentation.s3.eu-west-3.amazonaws.com/kafka/github_all_columns.ndjson"},"Github dataset")," consists of events on the ClickHouse Github repository. This static files covers the period ",(0,r.kt)("inlineCode",{parentName:"p"},"2019-09-23")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"2022-01-05"),"."),(0,r.kt)("p",null,"Specifically, this file was generated from the following command executed against the ",(0,r.kt)("a",{parentName:"p",href:"https://ghe.clickhouse.tech/#clickhouse-demo-access"},"ClickHouse play site"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"clickhouse-client --secure --host play.clickhouse.com --port 9440 --user explorer --query \"SELECT file_time, event_type, actor_login, repo_name, created_at, updated_at, action, comment_id, path, ref, ref_type, creator_user_login, number, title, labels, state, assignee, assignees, closed_at, merged_at, merge_commit_sha, requested_reviewers, merged_by, review_comments, member_login FROM github_events WHERE repo_name = 'ClickHouse/ClickHouse' ORDER BY created_at ASC LIMIT 200000 FORMAT JSONEachRow\" > github_all_columns.ndjson\n")),(0,r.kt)("p",null,"Note the upper limit 200k rows and restriction to the ",(0,r.kt)("inlineCode",{parentName:"p"},"ClickHouse/ClickHouse")," repository. Feel free to use this command to generate larger datasets for testing, potentially exploring other repositories. If you experience quota limits, instructions for downloading and transforming the data can be found ",(0,r.kt)("a",{parentName:"p",href:"https://ghe.clickhouse.tech/#download-the-dataset"},"here"),"."))}d.isMDXComponent=!0}}]);