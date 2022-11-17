"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[11831],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,s=m(e,["components","mdxType","originalType","parentName"]),u=p(n),k=i,c=u["".concat(o,".").concat(k)]||u[k]||b[k]||r;return n?a.createElement(c,l(l({ref:t},s),{},{components:n})):a.createElement(c,l({ref:t},s))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=u;var m={};for(var o in t)hasOwnProperty.call(t,o)&&(m[o]=t[o]);m.originalType=e,m.mdxType="string"==typeof e?e:i,l[1]=m;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},98366:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>b,frontMatter:()=>r,metadata:()=>m,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const r={slug:"/zh/engines/table-engines/integrations/rabbitmq",sidebar_position:10,sidebar_label:"RabbitMQ"},l="RabbitMQ \u5f15\u64ce",m={unversionedId:"zh/engines/table-engines/integrations/rabbitmq",id:"zh/engines/table-engines/integrations/rabbitmq",title:"RabbitMQ \u5f15\u64ce",description:"rabbitmq-engine}",source:"@site/docs/zh/engines/table-engines/integrations/rabbitmq.md",sourceDirName:"zh/engines/table-engines/integrations",slug:"/zh/engines/table-engines/integrations/rabbitmq",permalink:"/docs/zh/engines/table-engines/integrations/rabbitmq",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/engines/table-engines/integrations/rabbitmq.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{slug:"/zh/engines/table-engines/integrations/rabbitmq",sidebar_position:10,sidebar_label:"RabbitMQ"},sidebar:"chinese",previous:{title:"EmbeddedRocksDB",permalink:"/docs/zh/engines/table-engines/integrations/embedded-rocksdb"},next:{title:"PostgreSQL",permalink:"/docs/zh/engines/table-engines/integrations/postgresql"}},o={},p=[{value:"\u521b\u5efa\u4e00\u5f20\u8868",id:"table_engine-rabbitmq-creating-a-table",level:2},{value:"\u63cf\u8ff0",id:"description",level:2},{value:"\u865a\u62df\u5217",id:"virtual-columns",level:2}],s={toc:p};function b(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"rabbitmq-engine"},"RabbitMQ \u5f15\u64ce"),(0,i.kt)("p",null,"\u8be5\u5f15\u64ce\u5141\u8bb8 ClickHouse \u4e0e ",(0,i.kt)("a",{parentName:"p",href:"https://www.rabbitmq.com"},"RabbitMQ")," \u8fdb\u884c\u96c6\u6210."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"RabbitMQ")," \u53ef\u4ee5\u8ba9\u4f60:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u53d1\u5e03\u6216\u8ba2\u9605\u6570\u636e\u6d41\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5728\u6570\u636e\u6d41\u53ef\u7528\u65f6\u8fdb\u884c\u5904\u7406\u3002")),(0,i.kt)("h2",{id:"table_engine-rabbitmq-creating-a-table"},"\u521b\u5efa\u4e00\u5f20\u8868"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE [IF NOT EXISTS] [db.]table_name [ON CLUSTER cluster]\n(\n    name1 [type1] [DEFAULT|MATERIALIZED|ALIAS expr1],\n    name2 [type2] [DEFAULT|MATERIALIZED|ALIAS expr2],\n    ...\n) ENGINE = RabbitMQ SETTINGS\n    rabbitmq_host_port = 'host:port',\n    rabbitmq_exchange_name = 'exchange_name',\n    rabbitmq_format = 'data_format'[,]\n    [rabbitmq_exchange_type = 'exchange_type',]\n    [rabbitmq_routing_key_list = 'key1,key2,...',]\n    [rabbitmq_row_delimiter = 'delimiter_symbol',]\n    [rabbitmq_schema = '',]\n    [rabbitmq_num_consumers = N,]\n    [rabbitmq_num_queues = N,]\n    [rabbitmq_queue_base = 'queue',]\n    [rabbitmq_deadletter_exchange = 'dl-exchange',]\n    [rabbitmq_persistent = 0,]\n    [rabbitmq_skip_broken_messages = N,]\n    [rabbitmq_max_block_size = N,]\n    [rabbitmq_flush_interval_ms = N]\n")),(0,i.kt)("p",null,"\u5fc5\u8981\u53c2\u6570:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"rabbitmq_host_port")," \u2013 \u4e3b\u673a\u540d:\u7aef\u53e3\u53f7 (\u6bd4\u5982, ",(0,i.kt)("inlineCode",{parentName:"li"},"localhost:5672"),")."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"rabbitmq_exchange_name")," \u2013 RabbitMQ exchange \u540d\u79f0."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"rabbitmq_format")," \u2013 \u6d88\u606f\u683c\u5f0f. \u4f7f\u7528\u4e0eSQL",(0,i.kt)("inlineCode",{parentName:"li"},"FORMAT"),"\u51fd\u6570\u76f8\u540c\u7684\u6807\u8bb0\uff0c\u5982",(0,i.kt)("inlineCode",{parentName:"li"},"JSONEachRow"),"\u3002 \u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,i.kt)("a",{parentName:"li",href:"/docs/zh/interfaces/formats"},"Formats")," \u90e8\u5206.")),(0,i.kt)("p",null,"\u53ef\u9009\u53c2\u6570:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"rabbitmq_exchange_type")," \u2013 RabbitMQ exchange \u7684\u7c7b\u578b: ",(0,i.kt)("inlineCode",{parentName:"li"},"direct"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"fanout"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"topic"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"headers"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"consistent_hash"),". \u9ed8\u8ba4\u662f: ",(0,i.kt)("inlineCode",{parentName:"li"},"fanout"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"rabbitmq_routing_key_list")," \u2013 \u4e00\u4e2a\u4ee5\u9017\u53f7\u5206\u9694\u7684\u8def\u7531\u952e\u5217\u8868."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"rabbitmq_row_delimiter")," \u2013 \u7528\u4e8e\u6d88\u606f\u7ed3\u675f\u7684\u5206\u9694\u7b26."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"rabbitmq_schema")," \u2013 \u5982\u679c\u683c\u5f0f\u9700\u8981\u6a21\u5f0f\u5b9a\u4e49\uff0c\u5fc5\u987b\u4f7f\u7528\u8be5\u53c2\u6570\u3002\u6bd4\u5982, ",(0,i.kt)("a",{parentName:"li",href:"https://capnproto.org/"},"Cap\u2019n Proto")," \u9700\u8981\u6a21\u5f0f\u6587\u4ef6\u7684\u8def\u5f84\u4ee5\u53ca\u6839 ",(0,i.kt)("inlineCode",{parentName:"li"},"schema.capnp:Message")," \u5bf9\u8c61\u7684\u540d\u79f0."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"rabbitmq_num_consumers")," \u2013 \u6bcf\u4e2a\u8868\u7684\u6d88\u8d39\u8005\u6570\u91cf\u3002\u9ed8\u8ba4\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"1"),"\u3002\u5982\u679c\u4e00\u4e2a\u6d88\u8d39\u8005\u7684\u541e\u5410\u91cf\u4e0d\u591f\uff0c\u53ef\u4ee5\u6307\u5b9a\u66f4\u591a\u7684\u6d88\u8d39\u8005."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"rabbitmq_num_queues")," \u2013 \u961f\u5217\u7684\u603b\u6570\u3002\u9ed8\u8ba4\u503c: ",(0,i.kt)("inlineCode",{parentName:"li"},"1"),". \u589e\u52a0\u8fd9\u4e2a\u6570\u5b57\u53ef\u4ee5\u663e\u8457\u63d0\u9ad8\u6027\u80fd."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"rabbitmq_queue_base")," -  \u6307\u5b9a\u4e00\u4e2a\u961f\u5217\u540d\u79f0\u7684\u63d0\u793a\u3002\u8fd9\u4e2a\u8bbe\u7f6e\u7684\u4f7f\u7528\u60c5\u51b5\u5982\u4e0b."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"rabbitmq_deadletter_exchange")," - \u4e3a",(0,i.kt)("a",{parentName:"li",href:"https://www.rabbitmq.com/dlx.html"},"dead letter exchange"),"\u6307\u5b9a\u540d\u79f0\u3002\u4f60\u53ef\u4ee5\u7528\u8fd9\u4e2a exchange \u7684\u540d\u79f0\u521b\u5efa\u53e6\u4e00\u4e2a\u8868\uff0c\u5e76\u5728\u6d88\u606f\u88ab\u91cd\u65b0\u53d1\u5e03\u5230 dead letter exchange \u7684\u60c5\u51b5\u4e0b\u6536\u96c6\u5b83\u4eec\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6ca1\u6709\u6307\u5b9a dead letter exchange\u3002Specify name for a ",(0,i.kt)("a",{parentName:"li",href:"https://www.rabbitmq.com/dlx.html"},"dead letter exchange"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"rabbitmq_persistent")," - \u5982\u679c\u8bbe\u7f6e\u4e3a 1 (true), \u5728\u63d2\u5165\u67e5\u8be2\u4e2d\u4ea4\u4ed8\u6a21\u5f0f\u5c06\u88ab\u8bbe\u7f6e\u4e3a 2 (\u5c06\u6d88\u606f\u6807\u8bb0\u4e3a 'persistent'). \u9ed8\u8ba4\u662f: ",(0,i.kt)("inlineCode",{parentName:"li"},"0"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"rabbitmq_skip_broken_messages")," \u2013 RabbitMQ \u6d88\u606f\u89e3\u6790\u5668\u5bf9\u6bcf\u5757\u6a21\u5f0f\u4e0d\u517c\u5bb9\u6d88\u606f\u7684\u5bb9\u5fcd\u5ea6\u3002\u9ed8\u8ba4\u503c\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"0"),". \u5982\u679c ",(0,i.kt)("inlineCode",{parentName:"li"},"rabbitmq_skip_broken_messages = N"),"\uff0c\u90a3\u4e48\u5f15\u64ce\u5c06\u8df3\u8fc7 ",(0,i.kt)("em",{parentName:"li"},"N")," \u4e2a\u65e0\u6cd5\u89e3\u6790\u7684 RabbitMQ \u6d88\u606f\uff08\u4e00\u6761\u6d88\u606f\u7b49\u4e8e\u4e00\u884c\u6570\u636e\uff09\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"rabbitmq_max_block_size")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"rabbitmq_flush_interval_ms"))),(0,i.kt)("p",null,"\u540c\u65f6\uff0c\u683c\u5f0f\u7684\u8bbe\u7f6e\u4e5f\u53ef\u4ee5\u4e0e rabbitmq \u76f8\u5173\u7684\u8bbe\u7f6e\u4e00\u8d77\u6dfb\u52a0\u3002"),(0,i.kt)("p",null,"\u793a\u4f8b:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"  CREATE TABLE queue (\n    key UInt64,\n    value UInt64,\n    date DateTime\n  ) ENGINE = RabbitMQ SETTINGS rabbitmq_host_port = 'localhost:5672',\n                            rabbitmq_exchange_name = 'exchange1',\n                            rabbitmq_format = 'JSONEachRow',\n                            rabbitmq_num_consumers = 5,\n                            date_time_input_format = 'best_effort';\n")),(0,i.kt)("p",null,"RabbitMQ \u670d\u52a1\u5668\u914d\u7f6e\u5e94\u4f7f\u7528 ClickHouse \u914d\u7f6e\u6587\u4ef6\u6dfb\u52a0\u3002"),(0,i.kt)("p",null,"\u5fc5\u8981\u914d\u7f6e:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"}," <rabbitmq>\n    <username>root</username>\n    <password>clickhouse</password>\n </rabbitmq>\n")),(0,i.kt)("p",null,"\u53ef\u9009\u914d\u7f6e:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"}," <rabbitmq>\n    <vhost>clickhouse</vhost>\n </rabbitmq>\n")),(0,i.kt)("h2",{id:"description"},"\u63cf\u8ff0"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"SELECT"),"\u5bf9\u4e8e\u8bfb\u53d6\u6d88\u606f\u4e0d\u662f\u7279\u522b\u6709\u7528\uff08\u9664\u4e86\u8c03\u8bd5\uff09\uff0c\u56e0\u4e3a\u6bcf\u4e2a\u6d88\u606f\u53ea\u80fd\u8bfb\u53d6\u4e00\u6b21\u3002\u4f7f\u7528",(0,i.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/statements/create#create-view"},"\u7269\u5316\u89c6\u56fe"),"\u521b\u5efa\u5b9e\u65f6\u7ebf\u7a0b\u66f4\u4e3a\u5b9e\u7528\u3002\u8981\u505a\u5230\u8fd9\u4e00\u70b9:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u5f15\u64ce\u521b\u5efa\u4e00\u4e2a RabbitMQ \u6d88\u8d39\u8005\uff0c\u5e76\u5c06\u5176\u89c6\u4e3a\u4e00\u4e2a\u6570\u636e\u6d41\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u521b\u5efa\u4e00\u4e2a\u5177\u6709\u6240\u9700\u7ed3\u6784\u7684\u8868\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u521b\u5efa\u4e00\u4e2a\u7269\u5316\u89c6\u56fe\uff0c\u8f6c\u6362\u6765\u81ea\u5f15\u64ce\u7684\u6570\u636e\u5e76\u5c06\u5176\u653e\u5165\u5148\u524d\u521b\u5efa\u7684\u8868\u4e2d\u3002")),(0,i.kt)("p",null,"\u5f53",(0,i.kt)("inlineCode",{parentName:"p"},"\u7269\u5316\u89c6\u56fe"),"\u52a0\u5165\u5f15\u64ce\u65f6\uff0c\u5b83\u5f00\u59cb\u5728\u540e\u53f0\u6536\u96c6\u6570\u636e\u3002\u8fd9\u5141\u8bb8\u60a8\u6301\u7eed\u63a5\u6536\u6765\u81ea RabbitMQ \u7684\u6d88\u606f\uff0c\u5e76\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT")," \u5c06\u5b83\u4eec\u8f6c\u6362\u4e3a\u6240\u9700\u683c\u5f0f\u3002\n\u4e00\u4e2a RabbitMQ \u8868\u53ef\u4ee5\u6709\u591a\u4e2a\u4f60\u9700\u8981\u7684\u7269\u5316\u89c6\u56fe\u3002"),(0,i.kt)("p",null,"\u6570\u636e\u53ef\u4ee5\u6839\u636e",(0,i.kt)("inlineCode",{parentName:"p"},"rabbitmq_exchange_type"),"\u548c\u6307\u5b9a\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"rabbitmq_routing_key_list"),"\u8fdb\u884c\u901a\u9053\u3002\n\u6bcf\u4e2a\u8868\u4e0d\u80fd\u6709\u591a\u4e8e\u4e00\u4e2a exchange\u3002\u4e00\u4e2a exchange \u53ef\u4ee5\u5728\u591a\u4e2a\u8868\u4e4b\u95f4\u5171\u4eab - \u56e0\u4e3a\u53ef\u4ee5\u4f7f\u7528\u8def\u7531\u8ba9\u6570\u636e\u540c\u65f6\u8fdb\u5165\u591a\u4e2a\u8868\u3002"),(0,i.kt)("p",null,"Exchange \u7c7b\u578b\u7684\u9009\u9879:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"direct")," - \u8def\u7531\u662f\u57fa\u4e8e\u7cbe\u786e\u5339\u914d\u7684\u952e\u3002\u4f8b\u5982\u8868\u7684\u952e\u5217\u8868: ",(0,i.kt)("inlineCode",{parentName:"li"},"key1,key2,key3,key4,key5"),", \u6d88\u606f\u952e\u53ef\u4ee5\u662f\u7b49\u540c\u4ed6\u4eec\u4e2d\u7684\u4efb\u610f\u4e00\u4e2a."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"fanout")," - \u8def\u7531\u5230\u6240\u6709\u7684\u8868 (exchange \u540d\u79f0\u76f8\u540c\u7684\u60c5\u51b5) \u65e0\u8bba\u662f\u4ec0\u4e48\u952e\u90fd\u662f\u8fd9\u6837."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"topic")," - \u8def\u7531\u662f\u57fa\u4e8e\u5e26\u6709\u70b9\u5206\u9694\u952e\u7684\u6a21\u5f0f. \u6bd4\u5982: ",(0,i.kt)("inlineCode",{parentName:"li"},"*.logs"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"records.*.*.2020"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"*.2018,*.2019,*.2020"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"headers")," -  \u8def\u7531\u662f\u57fa\u4e8e",(0,i.kt)("inlineCode",{parentName:"li"},"key=value"),"\u7684\u5339\u914d\uff0c\u8bbe\u7f6e\u4e3a",(0,i.kt)("inlineCode",{parentName:"li"},"x-match=all"),"\u6216",(0,i.kt)("inlineCode",{parentName:"li"},"x-match=any"),". \u4f8b\u5982\u8868\u7684\u952e\u5217\u8868: ",(0,i.kt)("inlineCode",{parentName:"li"},"x-match=all,format=logs,type=report,year=2020"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"consistent_hash")," - \u6570\u636e\u5728\u6240\u6709\u7ed1\u5b9a\u7684\u8868\u4e4b\u95f4\u5747\u5300\u5206\u5e03 (exchange \u540d\u79f0\u76f8\u540c\u7684\u60c5\u51b5). \u8bf7\u6ce8\u610f\uff0c\u8fd9\u79cd exchange \u7c7b\u578b\u5fc5\u987b\u542f\u7528 RabbitMQ \u63d2\u4ef6: ",(0,i.kt)("inlineCode",{parentName:"li"},"rabbitmq-plugins enable rabbitmq_consistent_hash_exchange"),".")),(0,i.kt)("p",null,"\u8bbe\u7f6e",(0,i.kt)("inlineCode",{parentName:"p"},"rabbitmq_queue_base"),"\u53ef\u7528\u4e8e\u4ee5\u4e0b\u60c5\u51b5:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6765\u8ba9\u4e0d\u540c\u7684\u8868\u5171\u4eab\u961f\u5217, \u8fd9\u6837\u5c31\u53ef\u4ee5\u4e3a\u540c\u4e00\u4e2a\u961f\u5217\u6ce8\u518c\u591a\u4e2a\u6d88\u8d39\u8005\uff0c\u8fd9\u4f7f\u5f97\u6027\u80fd\u66f4\u597d\u3002\u5982\u679c\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"li"},"rabbitmq_num_consumers"),"\u548c/\u6216",(0,i.kt)("inlineCode",{parentName:"li"},"rabbitmq_num_queues"),"\u8bbe\u7f6e\uff0c\u5728\u8fd9\u4e9b\u53c2\u6570\u76f8\u540c\u7684\u60c5\u51b5\u4e0b\uff0c\u5b9e\u73b0\u961f\u5217\u7684\u7cbe\u786e\u5339\u914d\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u4ee5\u4fbf\u5728\u4e0d\u662f\u6240\u6709\u6d88\u606f\u90fd\u88ab\u6210\u529f\u6d88\u8d39\u65f6\uff0c\u80fd\u591f\u6062\u590d\u4ece\u67d0\u4e9b\u6301\u4e45\u961f\u5217\u7684\u9605\u8bfb\u3002\u8981\u4ece\u4e00\u4e2a\u7279\u5b9a\u7684\u961f\u5217\u6062\u590d\u6d88\u8017 - \u5728",(0,i.kt)("inlineCode",{parentName:"li"},"rabbitmq_queue_base"),"\u8bbe\u7f6e\u4e2d\u8bbe\u7f6e\u5176\u540d\u79f0\uff0c\u4e0d\u8981\u6307\u5b9a",(0,i.kt)("inlineCode",{parentName:"li"},"rabbitmq_num_consumers"),"\u548c",(0,i.kt)("inlineCode",{parentName:"li"},"rabbitmq_num_queues"),"\uff08\u9ed8\u8ba4\u4e3a1\uff09\u3002\u8981\u6062\u590d\u6240\u6709\u961f\u5217\u7684\u6d88\u8d39\uff0c\u8fd9\u4e9b\u961f\u5217\u662f\u4e3a\u4e00\u4e2a\u7279\u5b9a\u7684\u8868\u6240\u58f0\u660e\u7684 - \u53ea\u8981\u6307\u5b9a\u76f8\u540c\u7684\u8bbe\u7f6e\u3002",(0,i.kt)("inlineCode",{parentName:"li"},"rabbitmq_queue_base"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"rabbitmq_num_consumers"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"rabbitmq_num_queues"),"\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u961f\u5217\u540d\u79f0\u5bf9\u8868\u6765\u8bf4\u662f\u552f\u4e00\u7684\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u4ee5\u91cd\u590d\u4f7f\u7528\u961f\u5217\uff0c\u56e0\u4e3a\u5b83\u4eec\u88ab\u58f0\u660e\u4e3a\u6301\u4e45\u7684\uff0c\u5e76\u4e14\u4e0d\u4f1a\u81ea\u52a8\u5220\u9664\u3002\u53ef\u4ee5\u901a\u8fc7\u4efb\u4f55 RabbitMQ CLI \u5de5\u5177\u5220\u9664\uff09")),(0,i.kt)("p",null,"\u4e3a\u4e86\u63d0\u9ad8\u6027\u80fd\uff0c\u6536\u5230\u7684\u6d88\u606f\u88ab\u5206\u7ec4\u4e3a\u5927\u5c0f\u4e3a ",(0,i.kt)("a",{parentName:"p",href:"/docs/zh/operations/server-configuration-parameters/settings#settings-max_insert_block_size"},"max_insert_block_size")," \u7684\u5757\u3002\u5982\u679c\u5728",(0,i.kt)("a",{parentName:"p",href:"/docs/zh/operations/server-configuration-parameters/settings"},"stream_flush_interval_ms"),"\u6beb\u79d2\u5185\u6ca1\u6709\u5f62\u6210\u6570\u636e\u5757\uff0c\u65e0\u8bba\u6570\u636e\u5757\u662f\u5426\u5b8c\u6574\uff0c\u6570\u636e\u90fd\u4f1a\u88ab\u5237\u5230\u8868\u4e2d\u3002"),(0,i.kt)("p",null,"\u5982\u679c",(0,i.kt)("inlineCode",{parentName:"p"},"rabbitmq_num_consumers"),"\u548c/\u6216",(0,i.kt)("inlineCode",{parentName:"p"},"rabbitmq_num_queues"),"\u8bbe\u7f6e\u4e0e",(0,i.kt)("inlineCode",{parentName:"p"},"rabbitmq_exchange_type"),"\u4e00\u8d77\u88ab\u6307\u5b9a\uff0c\u90a3\u4e48:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5fc5\u987b\u542f\u7528",(0,i.kt)("inlineCode",{parentName:"li"},"rabbitmq-consistent-hash-exchange")," \u63d2\u4ef6."),(0,i.kt)("li",{parentName:"ul"},"\u5fc5\u987b\u6307\u5b9a\u5df2\u53d1\u5e03\u4fe1\u606f\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"message_id"),"\u5c5e\u6027\uff08\u5bf9\u4e8e\u6bcf\u4e2a\u4fe1\u606f/\u6279\u6b21\u90fd\u662f\u552f\u4e00\u7684\uff09\u3002")),(0,i.kt)("p",null,"\u5bf9\u4e8e\u63d2\u5165\u67e5\u8be2\u65f6\u6709\u6d88\u606f\u5143\u6570\u636e\uff0c\u6d88\u606f\u5143\u6570\u636e\u88ab\u6dfb\u52a0\u5230\u6bcf\u4e2a\u53d1\u5e03\u7684\u6d88\u606f\u4e2d:",(0,i.kt)("inlineCode",{parentName:"p"},"messageID"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"republished"),"\u6807\u5fd7\uff08\u5982\u679c\u503c\u4e3atrue\uff0c\u5219\u8868\u793a\u6d88\u606f\u53d1\u5e03\u4e0d\u6b62\u4e00\u6b21\uff09 - \u53ef\u4ee5\u901a\u8fc7\u6d88\u606f\u5934\u8bbf\u95ee\u3002"),(0,i.kt)("p",null,"\u4e0d\u8981\u5728\u63d2\u5165\u548c\u7269\u5316\u89c6\u56fe\u4e2d\u4f7f\u7528\u540c\u4e00\u4e2a\u8868\u3002"),(0,i.kt)("p",null,"\u793a\u4f8b:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"  CREATE TABLE queue (\n    key UInt64,\n    value UInt64\n  ) ENGINE = RabbitMQ SETTINGS rabbitmq_host_port = 'localhost:5672',\n                            rabbitmq_exchange_name = 'exchange1',\n                            rabbitmq_exchange_type = 'headers',\n                            rabbitmq_routing_key_list = 'format=logs,type=report,year=2020',\n                            rabbitmq_format = 'JSONEachRow',\n                            rabbitmq_num_consumers = 5;\n\n  CREATE TABLE daily (key UInt64, value UInt64)\n    ENGINE = MergeTree() ORDER BY key;\n\n  CREATE MATERIALIZED VIEW consumer TO daily\n    AS SELECT key, value FROM queue;\n\n  SELECT key, value FROM daily ORDER BY key;\n")),(0,i.kt)("h2",{id:"virtual-columns"},"\u865a\u62df\u5217"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"_exchange_name")," - RabbitMQ exchange \u540d\u79f0."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"_channel_id")," - \u63a5\u6536\u6d88\u606f\u7684\u6d88\u8d39\u8005\u6240\u58f0\u660e\u7684\u9891\u9053ID."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"_delivery_tag")," - \u6536\u5230\u6d88\u606f\u7684DeliveryTag. \u4ee5\u6bcf\u4e2a\u9891\u9053\u4e3a\u8303\u56f4."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"_redelivered")," - \u6d88\u606f\u7684",(0,i.kt)("inlineCode",{parentName:"li"},"redelivered"),"\u6807\u5fd7."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"_message_id")," - \u6536\u5230\u7684\u6d88\u606f\u7684ID\uff1b\u5982\u679c\u5728\u6d88\u606f\u53d1\u5e03\u65f6\u88ab\u8bbe\u7f6e\uff0c\u5219\u4e3a\u975e\u7a7a."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"_timestamp")," - \u6536\u5230\u7684\u6d88\u606f\u7684\u65f6\u95f4\u6233\uff1b\u5982\u679c\u5728\u6d88\u606f\u53d1\u5e03\u65f6\u88ab\u8bbe\u7f6e\uff0c\u5219\u4e3a\u975e\u7a7a.")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/engines/table-engines/integrations/rabbitmq/"},"\u539f\u59cb\u6587\u7ae0")," "))}b.isMDXComponent=!0}}]);