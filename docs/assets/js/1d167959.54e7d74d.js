"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[52464],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>f});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},k="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),k=l(t),p=o,f=k["".concat(c,".").concat(p)]||k[p]||u[p]||r;return t?a.createElement(f,i(i({ref:n},m),{},{components:t})):a.createElement(f,i({ref:n},m))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=p;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[k]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},82229:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=t(87462),o=(t(67294),t(3905));const r={sidebar_label:"Amazon MSK with Kafka Connect Sink",sidebar_position:2,slug:"/en/integrations/kafka/amazon-msk/connect-sink",description:"The official Kafka connector from ClickHouse with Amazon MSK"},i="The official Kafka connector from ClickHouse with Amazon MSK",s={unversionedId:"en/integrations/data-ingestion/kafka/cloud/msk/msk-clickhouse-connect-sink",id:"en/integrations/data-ingestion/kafka/cloud/msk/msk-clickhouse-connect-sink",title:"The official Kafka connector from ClickHouse with Amazon MSK",description:"The official Kafka connector from ClickHouse with Amazon MSK",source:"@site/docs/en/integrations/data-ingestion/kafka/cloud/msk/msk-clickhouse-connect-sink.md",sourceDirName:"en/integrations/data-ingestion/kafka/cloud/msk",slug:"/en/integrations/kafka/amazon-msk/connect-sink",permalink:"/docs/en/integrations/kafka/amazon-msk/connect-sink",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/integrations/data-ingestion/kafka/cloud/msk/msk-clickhouse-connect-sink.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Amazon MSK with Kafka Connect Sink",sidebar_position:2,slug:"/en/integrations/kafka/amazon-msk/connect-sink",description:"The official Kafka connector from ClickHouse with Amazon MSK"},sidebar:"english",previous:{title:"Amazon MSK intro",permalink:"/docs/en/integrations/kafka/amazon-msk/intro"},next:{title:"Kafka Samples",permalink:"/docs/en/integrations/data-ingestion/kafka/code/"}},c={},l=[{value:"Steps",id:"steps",level:3}],m={toc:l},k="wrapper";function u(e){let{components:n,...t}=e;return(0,o.kt)(k,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"the-official-kafka-connector-from-clickhouse-with-amazon-msk"},"The official Kafka connector from ClickHouse with Amazon MSK"),(0,o.kt)("h3",{id:"steps"},"Steps"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/msk/latest/developerguide/create-cluster.html"},"Create an MSK instance"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/msk/latest/developerguide/create-client-iam-role.html"},"Create and assign IAM role"),"."),(0,o.kt)("li",{parentName:"ol"},"Download a ",(0,o.kt)("inlineCode",{parentName:"li"},"jar")," file from ClickHouse Connect Sink ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/ClickHouse/clickhouse-kafka-connect/releases"},"Release page"),"."),(0,o.kt)("li",{parentName:"ol"},"Install the downloaded ",(0,o.kt)("inlineCode",{parentName:"li"},"jar")," file on ",(0,o.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/msk/latest/developerguide/msk-connect-plugins.html"},"Custom plugin page")," of Amazon MSK console."),(0,o.kt)("li",{parentName:"ol"},"If Connector communicates with a public ClickHouse instance, ",(0,o.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/msk/latest/developerguide/msk-connect-internet-access.html"},"enable internet access"),"."),(0,o.kt)("li",{parentName:"ol"},"Provide a topic name, ClickHouse instance hostname, and password in config.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"connector.class=com.clickhouse.kafka.connect.ClickHouseSinkConnector\ntasks.max=1\ntopics=<topic_name>\nssl=true\nsecurity.protocol=SSL\nhostname=<hostname>\ndatabase=<database_name>\npassword=<password>\nssl.truststore.location=/tmp/kafka.client.truststore.jks\nport=8443\nvalue.converter.schemas.enable=false\nvalue.converter=org.apache.kafka.connect.json.JsonConverter\nexactlyOnce=true\nusername=default\nschemas.enable=false\n")))}u.isMDXComponent=!0}}]);