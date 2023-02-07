"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[27701],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),f=o,d=u["".concat(l,".").concat(f)]||u[f]||k[f]||r;return a?n.createElement(d,i(i({ref:t},p),{},{components:a})):n.createElement(d,i({ref:t},p))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},17731:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>k,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=a(87462),o=(a(67294),a(3905));const r={sidebar_label:"Choosing an Approach",sidebar_position:2,slug:"/en/integrations/kafka/kafka-choosing-an-approach",description:"The most common approaches for integrating Kafka with ClickHouse"},i="Choosing an option",s={unversionedId:"en/integrations/data-ingestion/kafka/kafka-choosing-an-approach",id:"en/integrations/data-ingestion/kafka/kafka-choosing-an-approach",title:"Choosing an option",description:"The most common approaches for integrating Kafka with ClickHouse",source:"@site/docs/en/integrations/data-ingestion/kafka/kafka-choosing-an-approach.md",sourceDirName:"en/integrations/data-ingestion/kafka",slug:"/en/integrations/kafka/kafka-choosing-an-approach",permalink:"/docs/en/integrations/kafka/kafka-choosing-an-approach",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/integrations/data-ingestion/kafka/kafka-choosing-an-approach.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Choosing an Approach",sidebar_position:2,slug:"/en/integrations/kafka/kafka-choosing-an-approach",description:"The most common approaches for integrating Kafka with ClickHouse"},sidebar:"english",previous:{title:"Introduction",permalink:"/docs/en/integrations/kafka/intro"},next:{title:"Kafka Table Engine",permalink:"/docs/en/integrations/kafka/kafka-table-engine"}},l={},c=[{value:"Universal solution",id:"universal-solution",level:2},{value:"Self-managed Kafka Connectivity",id:"self-managed-kafka-connectivity",level:2},{value:"Cloud-based Kafka Connectivity",id:"cloud-based-kafka-connectivity",level:2},{value:"Choosing an approach",id:"choosing-an-approach",level:2}],p={toc:c},u="wrapper";function k(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"choosing-an-option"},"Choosing an option"),(0,o.kt)("p",null,"When integrating Kafka with ClickHouse, you will need to make early architectural decisions about the high-level approach used. We outline the most common strategies below: "),(0,o.kt)("h2",{id:"universal-solution"},"Universal solution"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Kafka table engine")," - The Kafka table engine provides a Native ClickHouse integration. This table engine ",(0,o.kt)("strong",{parentName:"li"},"pulls")," data from the source system. This requires ClickHouse to have direct access to Kafka.",(0,o.kt)("admonition",{parentName:"li",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Kafka table engine is not supported on ",(0,o.kt)("a",{parentName:"p",href:"https://clickhouse.com/cloud"},"ClickHouse Cloud"),". Please consider Kafka Connect or Vector.")))),(0,o.kt)("h2",{id:"self-managed-kafka-connectivity"},"Self-managed Kafka Connectivity"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Kafka Connect")," - Kafka Connect is a free, open-source component of Apache Kafka\xae that works as a centralized data hub for simple data integration between Kafka and other data systems.  Connectors provide a simple means of scalably and reliably streaming data to and from Kafka.  Source Connectors inserts data to Kafka topics from other systems, whilst Sink Connectors delivers data from Kafka topics into other data stores such as ClickHouse."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Vector")," - Vector is a vendor agnostic data pipeline. With the ability to read from Kafka, and send events to ClickHouse, this represents a robust integration option."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Custom code")," - Custom code using respective client libraries for Kafka and ClickHouse may be appropriate cases where custom processing of events is required. This is beyond the scope of this documentation.")),(0,o.kt)("h2",{id:"cloud-based-kafka-connectivity"},"Cloud-based Kafka Connectivity"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Confluent")," - Confluent platform provides HTTP Sink connector for Confluent Cloud that integrates Apache Kafka with an API via HTTP or HTTPS.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Amazon MSK")," - support Amazon MSK Connect framework to forward data from Apache Kafka clusters to external systems such as ClickHouse. You can install ",(0,o.kt)("strong",{parentName:"p"},"ClickHouse Kafka Connect")," on Amazon MSK."))),(0,o.kt)("h2",{id:"choosing-an-approach"},"Choosing an approach"),(0,o.kt)("p",null,"It comes down to a few decision points:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Connectivity")," - The Kafka table engine needs to be able to pull from Kafka if ClickHouse is the destination. This requires bi-directional connectivity. If there is a network separation, e.g. ClickHouse is in the Cloud and Kafka is self-managed, you may be hesitant to remove this for compliance and security reasons. (This approach is not currently supported in ClickHouse Cloud.) The Kafka table engine utilizes resources within ClickHouse itself, utilizing threads for the consumers. Placing this resource pressure on ClickHouse may not be possible due to resource constraints, or your architects may prefer a separation of concerns. In this case, tools such as Kafka Connect, which run as a separate process and can be deployed on different hardware may be preferable. This allows the process responsible for pulling Kafka data to be scaled independently of ClickHouse.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Hosting on Cloud")," - Cloud vendors may set limitations on Kafka components available on their platform. Follow the guide to explore recommended options for each Cloud vendor.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"External enrichment")," - Whilst messages can be manipulated before insertion into ClickHouse, through the use of functions in the select statement of the materialized view, users may prefer to move complex enrichment external to ClickHouse.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Data flow direction")," - Vector only supports the transfer of data from Kafka to ClickHouse."))))}k.isMDXComponent=!0}}]);