"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[65196],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=c(n),k=r,d=f["".concat(l,".").concat(k)]||f[k]||u[k]||o;return n?a.createElement(d,i(i({ref:t},p),{},{components:n})):a.createElement(d,i({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},79663:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={sidebar_label:"Introduction",sidebar_position:1,slug:"/en/integrations/kafka/kakfa-intro",description:"Introduction to Kafka with ClickHouse"},i="Connecting Kafka",s={unversionedId:"en/integrations/data-ingestion/kafka/kakfa-intro",id:"en/integrations/data-ingestion/kafka/kakfa-intro",title:"Connecting Kafka",description:"Introduction to Kafka with ClickHouse",source:"@site/docs/en/integrations/data-ingestion/kafka/kakfa-intro.md",sourceDirName:"en/integrations/data-ingestion/kafka",slug:"/en/integrations/kafka/kakfa-intro",permalink:"/docs/en/integrations/kafka/kakfa-intro",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/integrations/data-ingestion/kafka/kakfa-intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Introduction",sidebar_position:1,slug:"/en/integrations/kafka/kakfa-intro",description:"Introduction to Kafka with ClickHouse"},sidebar:"english",previous:{title:"Integrate with Kafka",permalink:"/docs/en/integrations/kafka"},next:{title:"Choosing an Approach",permalink:"/docs/en/integrations/kafka/kafka-choosing-an-approach"}},l={},c=[{value:"Assumptions",id:"assumptions",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"connecting-kafka"},"Connecting Kafka"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://kafka.apache.org/"},"Apache Kafka")," is an open-source distributed event streaming platform used by thousands of companies for high-performance data pipelines, streaming analytics, data integration, and mission-critical applications. In most cases involving Kafka and ClickHouse, users will wish to insert Kafka based data into ClickHouse - although the reverse is supported. Below we outline several options for both use cases, identifying the pros and cons of each approach. "),(0,r.kt)("p",null,"For those who do not have a Kafka instance to hand, we recommend ",(0,r.kt)("a",{parentName:"p",href:"https://www.confluent.io/get-started/"},"Confluent Cloud"),", which offers a free tier adequate for testing these examples. For self-managed alternatives, consider the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.confluent.io/operator/current/overview.html"},"Confluent for Kubernetes")," or ",(0,r.kt)("a",{parentName:"p",href:"https://docs.confluent.io/platform/current/installation/installing_cp/overview.html"},"here")," for non-Kubernetes environments. "),(0,r.kt)("h2",{id:"assumptions"},"Assumptions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You are familiar with the Kafka fundamentals, such as producers, consumers and topics."),(0,r.kt)("li",{parentName:"ul"},"You have a topic prepared for these examples. We assume all data is stored in Kafka as JSON, although the principles remain the same if using Avro."),(0,r.kt)("li",{parentName:"ul"},"We utilise the excellent ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/edenhill/kcat"},"kcat")," (formerly kafkacat) in our examples to publish and consume Kafka data."),(0,r.kt)("li",{parentName:"ul"},"Whilst we reference some python scripts for loading sample data, feel free to adapt the examples to your dataset."),(0,r.kt)("li",{parentName:"ul"},"You are broadly familiar with ClickHouse materialized views.")))}u.isMDXComponent=!0}}]);