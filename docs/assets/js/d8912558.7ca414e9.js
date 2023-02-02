"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[45113],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=i,g=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(g,r(r({ref:t},c),{},{components:n})):a.createElement(g,r({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var u=2;u<o;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},81694:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=n(87462),i=(n(67294),n(3905));const o={sidebar_label:"EMQX Cloud Data Integration",sidebar_position:4,slug:"/en/integrations/emqx/emqx-cloud-data-integration",description:"Introduction to EMQX Cloud Data Integration"},r="Integration EMQX Cloud with ClickHouse Cloud",s={unversionedId:"en/integrations/data-ingestion/emqx/emqx-cloud-data-integration",id:"en/integrations/data-ingestion/emqx/emqx-cloud-data-integration",title:"Integration EMQX Cloud with ClickHouse Cloud",description:"Introduction to EMQX Cloud Data Integration",source:"@site/docs/en/integrations/data-ingestion/emqx/emqx-cloud-data-integration.md",sourceDirName:"en/integrations/data-ingestion/emqx",slug:"/en/integrations/emqx/emqx-cloud-data-integration",permalink:"/docs/en/integrations/emqx/emqx-cloud-data-integration",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/integrations/data-ingestion/emqx/emqx-cloud-data-integration.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_label:"EMQX Cloud Data Integration",sidebar_position:4,slug:"/en/integrations/emqx/emqx-cloud-data-integration",description:"Introduction to EMQX Cloud Data Integration"},sidebar:"english",previous:{title:"Create EMQX Cloud Deployment",permalink:"/docs/en/integrations/emqx/create-emqx-cloud-deployment"},next:{title:"Workflow Samples",permalink:"/docs/en/integrations/emqx/workflow-samples"}},l={},u=[{value:"Create ClickHouse Resource",id:"create-clickhouse-resource",level:2},{value:"Create A New Rule",id:"create-a-new-rule",level:2},{value:"Add a response action",id:"add-a-response-action",level:2},{value:"View Rules Details",id:"view-rules-details",level:2}],c={toc:u};function d(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"integration-emqx-cloud-with-clickhouse-cloud"},"Integration EMQX Cloud with ClickHouse Cloud"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://docs.emqx.com/en/cloud/latest/rule_engine/introduction.html#general-flow"},"EMQX Cloud Data Integrations"),' is used to configure the rules for handling and responding to EMQX message flows and device events. The Data Integrations not only provides a clear and flexible "configurable" architecture solution, but also simplifies the development process, improves user usability, and reduces the coupling degree between the business system and EMQX Cloud. It also provides a superior infrastructure for customization of EMQX Cloud\'s proprietary capabilities.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"emqx_cloud_data_integration",src:n(64608).Z,width:"1746",height:"812"})),(0,i.kt)("p",null,"EMQX Cloud offers more than 30 native integrations with popular data systems. ClickHouse is one of them."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"data_integration_clickhouse",src:n(23509).Z,width:"3080",height:"1902"})),(0,i.kt)("h2",{id:"create-clickhouse-resource"},"Create ClickHouse Resource"),(0,i.kt)("p",null,'Click "Data Integrations" on the left menu and click "View All Resouces". You will find the ClickHouse in the Data Persistence section or you can search for ClickHouse.'),(0,i.kt)("p",null,"Click the ClickHouse card to create a new resource."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Note: add a note for this resource."),(0,i.kt)("li",{parentName:"ul"},"Server address: this is the address of your ClickHouse Cloud service, remember don\u2019t forget the port."),(0,i.kt)("li",{parentName:"ul"},"Database name: \u2018emqx\u2019 we created in the above steps."),(0,i.kt)("li",{parentName:"ul"},"User: the username for connecting to your ClickHouse Cloud service."),(0,i.kt)("li",{parentName:"ul"},"Key: the password for the connection.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"data_integration_resource",src:n(56723).Z,width:"3468",height:"1504"})),(0,i.kt)("h2",{id:"create-a-new-rule"},"Create A New Rule"),(0,i.kt)("p",null,"During the creation of the resource, you will see a popup, and clicking \u2018New\u2019 will leads you to the rule creation page."),(0,i.kt)("p",null,"EMQX provides a powerful ",(0,i.kt)("a",{parentName:"p",href:"https://docs.emqx.com/en/cloud/latest/rule_engine/rules.html"},"rule engine")," that can transform, and enrich the raw MQTT message before sending it to third-party systems."),(0,i.kt)("p",null,"Here\u2019s the rule used in this tutorial:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},'SELECT\n   clientid as client_id,\n   (timestamp div 1000) as timestamp,\n   topic as topic,\n   payload.temp as temp,\n   payload.hum as hum\nFROM\n"temp_hum/emqx"\n')),(0,i.kt)("p",null,"It will read the messages from the \u2018temp_hum/emqx\u2019 topic and enrich the JSON object by adding client_id, topic, and timestamp info."),(0,i.kt)("p",null,"So, the raw JSON you send to the topic:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'{"temp": 28.5, "hum": 0.68}\n')),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"data_integration_rule_1",src:n(23516).Z,width:"2356",height:"1568"})),(0,i.kt)("p",null,"You can use the SQL test to test and see the results."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"data_integration_rule_2",src:n(66272).Z,width:"2344",height:"1718"})),(0,i.kt)("p",null,"Now click on the \u201cNEXT\u201d button. This step is to tell EMQX Cloud how to insert refined data into your ClickHouse database."),(0,i.kt)("h2",{id:"add-a-response-action"},"Add a response action"),(0,i.kt)("p",null,"If you have only one resource, you don\u2019t need to modify the \u2018Resource\u2019 and \u2018Action Type\u2019.\nYou only need to set the SQL template. Here\u2019s the example used for this tutorial:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"INSERT INTO temp_hum (client_id, timestamp, topic, temp, hum) VALUES ('${client_id}', ${timestamp}, '${topic}', ${temp}, ${hum})\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"data_integration_rule_action",src:n(64544).Z,width:"2310",height:"1586"})),(0,i.kt)("p",null,"This is a template for inserting data into Clickhouse, you can see the variables are used here."),(0,i.kt)("h2",{id:"view-rules-details"},"View Rules Details"),(0,i.kt)("p",null,'Click "Confirm" and "View Details". Now, everything should be well set. You can see the data integration works from rule details page.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"data_integration_details",src:n(54822).Z,width:"2344",height:"1950"})),(0,i.kt)("p",null,'All the MQTT messages sent to the "temp_hum/emqx" topic will be persisted into your ClickHouse Cloud database.'))}d.isMDXComponent=!0},23509:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/data_integration_clickhouse-af6f3882d90e0220a520028a3f717558.png"},54822:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/data_integration_details-8d808aa6d793f622886a210974fc264c.png"},56723:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/data_integration_resource-276cd9b209292c004135b7e5f173a70f.png"},23516:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/data_integration_rule_1-0e2208a14335aebbfd52fed762ed578b.png"},66272:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/data_integration_rule_2-d49f9d73fe87939c333413712810f40e.png"},64544:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/data_integration_rule_action-f931168bf9890e8afa8477faceef125d.png"},64608:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/emqx_cloud_data_integration-ef508af3e17ec51038ad4e652a64c0f3.png"}}]);