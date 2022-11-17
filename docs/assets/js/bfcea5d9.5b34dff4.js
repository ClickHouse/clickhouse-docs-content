"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[91199],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>b});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=i.createContext({}),g=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=g(e.components);return i.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=g(t),b=r,m=u["".concat(l,".").concat(b)]||u[b]||p[b]||a;return t?i.createElement(m,s(s({ref:n},c),{},{components:t})):i.createElement(m,s({ref:n},c))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,s=new Array(a);s[0]=u;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var g=2;g<a;g++)s[g]=t[g];return i.createElement.apply(null,s)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},80117:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>g});var i=t(87462),r=(t(67294),t(3905));const a={slug:"/zh/engines/table-engines/integrations/",sidebar_label:"\u96c6\u6210\u7684\u8868\u5f15\u64ce",sidebar_position:30},s="\u96c6\u6210\u7684\u8868\u5f15\u64ce",o={unversionedId:"zh/engines/table-engines/integrations/index",id:"zh/engines/table-engines/integrations/index",title:"\u96c6\u6210\u7684\u8868\u5f15\u64ce",description:"table-engines-for-integrations}",source:"@site/docs/zh/engines/table-engines/integrations/index.md",sourceDirName:"zh/engines/table-engines/integrations",slug:"/zh/engines/table-engines/integrations/",permalink:"/docs/zh/engines/table-engines/integrations/",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/engines/table-engines/integrations/index.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{slug:"/zh/engines/table-engines/integrations/",sidebar_label:"\u96c6\u6210\u7684\u8868\u5f15\u64ce",sidebar_position:30},sidebar:"chinese",previous:{title:"TinyLog",permalink:"/docs/zh/engines/table-engines/log-family/tinylog"},next:{title:"Hive",permalink:"/docs/zh/engines/table-engines/integrations/hive"}},l={},g=[],c={toc:g};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"table-engines-for-integrations"},"\u96c6\u6210\u7684\u8868\u5f15\u64ce"),(0,r.kt)("p",null,"ClickHouse \u63d0\u4f9b\u4e86\u591a\u79cd\u65b9\u5f0f\u6765\u4e0e\u5916\u90e8\u7cfb\u7edf\u96c6\u6210\uff0c\u5305\u62ec\u8868\u5f15\u64ce\u3002\u50cf\u6240\u6709\u5176\u4ed6\u7684\u8868\u5f15\u64ce\u4e00\u6837\uff0c\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"CREATE TABLE"),"\u6216",(0,r.kt)("inlineCode",{parentName:"p"},"ALTER TABLE"),"\u67e5\u8be2\u8bed\u53e5\u6765\u5b8c\u6210\u914d\u7f6e\u3002\u7136\u540e\u4ece\u7528\u6237\u7684\u89d2\u5ea6\u6765\u770b\uff0c\u914d\u7f6e\u7684\u96c6\u6210\u770b\u8d77\u6765\u50cf\u67e5\u8be2\u4e00\u4e2a\u6b63\u5e38\u7684\u8868\uff0c\u4f46\u5bf9\u5b83\u7684\u67e5\u8be2\u662f\u4ee3\u7406\u7ed9\u5916\u90e8\u7cfb\u7edf\u7684\u3002\u8fd9\u79cd\u900f\u660e\u7684\u67e5\u8be2\u662f\u8fd9\u79cd\u65b9\u6cd5\u76f8\u5bf9\u4e8e\u5176\u4ed6\u96c6\u6210\u65b9\u6cd5\u7684\u4e3b\u8981\u4f18\u52bf\u4e4b\u4e00\uff0c\u6bd4\u5982\u5916\u90e8\u5b57\u5178\u6216\u8868\u51fd\u6570\uff0c\u5b83\u4eec\u9700\u8981\u5728\u6bcf\u6b21\u4f7f\u7528\u65f6\u4f7f\u7528\u81ea\u5b9a\u4e49\u67e5\u8be2\u65b9\u6cd5\u3002"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u662f\u652f\u6301\u7684\u96c6\u6210\u65b9\u5f0f:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/zh/engines/table-engines/integrations/odbc"},"ODBC")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/zh/engines/table-engines/integrations/jdbc"},"JDBC")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/zh/engines/table-engines/integrations/mysql"},"MySQL")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/zh/engines/table-engines/integrations/mongodb"},"MongoDB")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/zh/engines/table-engines/integrations/hdfs"},"HDFS")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/zh/engines/table-engines/integrations/s3"},"S3")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/zh/engines/table-engines/integrations/kafka"},"Kafka")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/zh/engines/table-engines/integrations/embedded-rocksdb"},"EmbeddedRocksDB")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/zh/engines/table-engines/integrations/rabbitmq"},"RabbitMQ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/zh/engines/table-engines/integrations/postgresql"},"PostgreSQL")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/zh/engines/table-engines/integrations/sqlite"},"SQLite")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/zh/engines/table-engines/integrations/hive"},"Hive"))))}p.isMDXComponent=!0}}]);