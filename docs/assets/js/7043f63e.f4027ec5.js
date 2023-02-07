"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[85403],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=s(n),d=r,m=f["".concat(c,".").concat(d)]||f[d]||p[d]||a;return n?o.createElement(m,i(i({ref:t},u),{},{components:n})):o.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[f]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},83393:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=n(87462),r=(n(67294),n(3905));const a={sidebar_label:"Confluent Platform intro",sidebar_position:1,slug:"/en/integrations/kafka/confluent/intro",description:"Introduction into Confluent Platform"},i="Confluent Platform intro",l={unversionedId:"en/integrations/data-ingestion/kafka/cloud/confluent/confluent-intro",id:"en/integrations/data-ingestion/kafka/cloud/confluent/confluent-intro",title:"Confluent Platform intro",description:"Introduction into Confluent Platform",source:"@site/docs/en/integrations/data-ingestion/kafka/cloud/confluent/confluent-intro.md",sourceDirName:"en/integrations/data-ingestion/kafka/cloud/confluent",slug:"/en/integrations/kafka/confluent/intro",permalink:"/docs/en/integrations/kafka/confluent/intro",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/integrations/data-ingestion/kafka/cloud/confluent/confluent-intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Confluent Platform intro",sidebar_position:1,slug:"/en/integrations/kafka/confluent/intro",description:"Introduction into Confluent Platform"},sidebar:"english",previous:{title:"Confluent Platform",permalink:"/docs/en/integrations/kafka/cloud/confluent"},next:{title:"HTTP Sink Connector for Confluent Platform",permalink:"/docs/en/integrations/kafka/confluent/http"}},c={},s=[{value:"Pre-requisites",id:"pre-requisites",level:3}],u={toc:s},f="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(f,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"confluent-platform-intro"},"Confluent Platform intro"),(0,r.kt)("p",null,"We assume you are familiar with the Confluent Platform, specifically Kafka Connect. We recommend the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.confluent.io/platform/current/connect/userguide.html"},"Getting Started guide")," for Kafka Connect and the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.confluent.io/learn-kafka/kafka-connect"},"Kafka Connect 101")," guide."),(0,r.kt)("h3",{id:"pre-requisites"},"Pre-requisites"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://www.confluent.io/installation"},"Download and install the Confluent platform"),". This main Confluent package contains the tested version of Kafka Connect v7.0.1. "),(0,r.kt)("li",{parentName:"ol"},"Java is required for the Confluent Platform. Refer to their documentation for the currently ",(0,r.kt)("a",{parentName:"li",href:"https://docs.confluent.io/platform/current/installation/versions-interoperability.html"},"supported java versions"),"."),(0,r.kt)("li",{parentName:"ol"},"Ensure you have a ClickHouse instance available."),(0,r.kt)("li",{parentName:"ol"},"Kafka instance - Confluent cloud is the easiest for this; otherwise, set up a self-managed instance using the above Confluent package. The setup of Kafka is beyond the scope of these docs.")))}p.isMDXComponent=!0}}]);