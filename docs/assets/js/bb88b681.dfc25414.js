"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[49649],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},_=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),_=s(n),c=i,d=_["".concat(p,".").concat(c)]||_[c]||u[c]||l;return n?a.createElement(d,r(r({ref:t},m),{},{components:n})):a.createElement(d,r({ref:t},m))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=_;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var s=2;s<l;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}_.displayName="MDXCreateElement"},72038:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(87462),i=(n(67294),n(3905));const l={slug:"/ru/operations/system-tables/replicas"},r="system.replicas",o={unversionedId:"ru/operations/system-tables/replicas",id:"ru/operations/system-tables/replicas",title:"system.replicas",description:"system_tables-replicas}",source:"@site/docs/ru/operations/system-tables/replicas.md",sourceDirName:"ru/operations/system-tables",slug:"/ru/operations/system-tables/replicas",permalink:"/docs/ru/operations/system-tables/replicas",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/operations/system-tables/replicas.md",tags:[],version:"current",frontMatter:{slug:"/ru/operations/system-tables/replicas"},sidebar:"russia",previous:{title:"system.quotas_usage",permalink:"/docs/ru/operations/system-tables/quotas_usage"},next:{title:"system.replicated_fetches",permalink:"/docs/ru/operations/system-tables/replicated_fetches"}},p={},s=[],m={toc:s};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"system_tables-replicas"},"system.replicas"),(0,i.kt)("p",null,"\u0421\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u0438 \u0441\u0442\u0430\u0442\u0443\u0441 \u0434\u043b\u044f \u0440\u0435\u043f\u043b\u0438\u0446\u0438\u0440\u0443\u0435\u043c\u044b\u0445 \u0442\u0430\u0431\u043b\u0438\u0446, \u0440\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u043d\u044b\u0445 \u043d\u0430 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u043c \u0441\u0435\u0440\u0432\u0435\u0440\u0435.\n\u042d\u0442\u0443 \u0442\u0430\u0431\u043b\u0438\u0446\u0443 \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0434\u043b\u044f \u043c\u043e\u043d\u0438\u0442\u043e\u0440\u0438\u043d\u0433\u0430. \u0422\u0430\u0431\u043b\u0438\u0446\u0430 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u043f\u043e \u0441\u0442\u0440\u043e\u0447\u043a\u0435 \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0439 Replicated","*","-\u0442\u0430\u0431\u043b\u0438\u0446\u044b."),(0,i.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM system.replicas\nWHERE table = 'test_table'\nFORMAT Vertical\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Query id: dc6dcbcb-dc28-4df9-ae27-4354f5b3b13e\n\nRow 1:\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\ndatabase:                    db\ntable:                       test_table\nengine:                      ReplicatedMergeTree\nis_leader:                   1\ncan_become_leader:           1\nis_readonly:                 0\nis_session_expired:          0\nfuture_parts:                0\nparts_to_check:              0\nzookeeper_path:              /test/test_table\nreplica_name:                r1\nreplica_path:                /test/test_table/replicas/r1\ncolumns_version:             -1\nqueue_size:                  27\ninserts_in_queue:            27\nmerges_in_queue:             0\npart_mutations_in_queue:     0\nqueue_oldest_time:           2021-10-12 14:48:48\ninserts_oldest_time:         2021-10-12 14:48:48\nmerges_oldest_time:          1970-01-01 03:00:00\npart_mutations_oldest_time:  1970-01-01 03:00:00\noldest_part_to_get:          1_17_17_0\noldest_part_to_merge_to:     \noldest_part_to_mutate_to:    \nlog_max_index:               206\nlog_pointer:                 207\nlast_queue_update:           2021-10-12 14:50:08\nabsolute_delay:              99\ntotal_replicas:              5\nactive_replicas:             5\nlast_queue_update_exception: \nzookeeper_exception:         \nreplica_is_active:           {'r1':1,'r2':1}\n")),(0,i.kt)("p",null,"\u0421\u0442\u043e\u043b\u0431\u0446\u044b:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"database")," (",(0,i.kt)("inlineCode",{parentName:"li"},"String"),") - \u0438\u043c\u044f \u0411\u0414."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"table")," (",(0,i.kt)("inlineCode",{parentName:"li"},"String"),") - \u0438\u043c\u044f \u0442\u0430\u0431\u043b\u0438\u0446\u044b."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"engine")," (",(0,i.kt)("inlineCode",{parentName:"li"},"String"),") - \u0438\u043c\u044f \u0434\u0432\u0438\u0436\u043a\u0430 \u0442\u0430\u0431\u043b\u0438\u0446\u044b."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"is_leader")," (",(0,i.kt)("inlineCode",{parentName:"li"},"UInt8"),") - \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043b\u0438 \u0440\u0435\u043f\u043b\u0438\u043a\u0430 \u043b\u0438\u0434\u0435\u0440\u043e\u043c.\n\u041d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0440\u0435\u043f\u043b\u0438\u043a \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u043b\u0438\u0434\u0435\u0440\u0430\u043c\u0438 \u043e\u0434\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e. \u0420\u0435\u043f\u043b\u0438\u043a\u0435 \u043c\u043e\u0436\u043d\u043e \u0437\u0430\u043f\u0440\u0435\u0442\u0438\u0442\u044c \u0431\u044b\u0442\u044c \u043b\u0438\u0434\u0435\u0440\u043e\u043c \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e ",(0,i.kt)("inlineCode",{parentName:"li"},"merge_tree")," \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 ",(0,i.kt)("inlineCode",{parentName:"li"},"replicated_can_become_leader"),". \u041b\u0438\u0434\u0435\u0440\u044b \u043d\u0430\u0437\u043d\u0430\u0447\u0430\u044e\u0442 \u0444\u043e\u043d\u043e\u0432\u044b\u0435 \u0441\u043b\u0438\u044f\u043d\u0438\u044f, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0441\u0442\u0438.\n\u0417\u0430\u043c\u0435\u0447\u0443, \u0447\u0442\u043e \u0437\u0430\u043f\u0438\u0441\u044c \u043c\u043e\u0436\u043d\u043e \u043e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043b\u044f\u0442\u044c \u043d\u0430 \u043b\u044e\u0431\u0443\u044e \u0440\u0435\u043f\u043b\u0438\u043a\u0443 (\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0443\u044e \u0438 \u0438\u043c\u0435\u044e\u0449\u0443\u044e \u0441\u0435\u0441\u0441\u0438\u044e \u0432 ZK), \u043d\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e \u043e\u0442 \u043b\u0438\u0434\u0435\u0440\u0441\u0442\u0432\u0430."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"can_become_leader")," (",(0,i.kt)("inlineCode",{parentName:"li"},"UInt8"),") - \u043c\u043e\u0436\u0435\u0442 \u043b\u0438 \u0440\u0435\u043f\u043b\u0438\u043a\u0430 \u0431\u044b\u0442\u044c \u043b\u0438\u0434\u0435\u0440\u043e\u043c."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"is_readonly")," (",(0,i.kt)("inlineCode",{parentName:"li"},"UInt8"),") - \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u043b\u0438 \u0440\u0435\u043f\u043b\u0438\u043a\u0430 \u0432 \u0440\u0435\u0436\u0438\u043c\u0435 \xab\u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0447\u0442\u0435\u043d\u0438\u044f\xbb\n\u042d\u0442\u043e\u0442 \u0440\u0435\u0436\u0438\u043c \u0432\u043a\u043b\u044e\u0447\u0430\u0435\u0442\u0441\u044f, \u0435\u0441\u043b\u0438 \u0432 \u043a\u043e\u043d\u0444\u0438\u0433\u0435 \u043d\u0435\u0442 \u0441\u0435\u043a\u0446\u0438\u0438 \u0441 ZK; \u0435\u0441\u043b\u0438 \u043f\u0440\u0438 \u043f\u0435\u0440\u0435\u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u0441\u0435\u0441\u0441\u0438\u0438 \u0432 ZK \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430; \u0432\u043e \u0432\u0440\u0435\u043c\u044f \u043f\u0435\u0440\u0435\u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u0441\u0435\u0441\u0441\u0438\u0438 \u0441 ZK."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"is_session_expired")," (",(0,i.kt)("inlineCode",{parentName:"li"},"UInt8"),") - \u0438\u0441\u0442\u0435\u043a\u043b\u0430 \u043b\u0438 \u0441\u0435\u0441\u0441\u0438\u044f \u0441 ZK. \u0412 \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u043c, \u0442\u043e \u0436\u0435 \u0441\u0430\u043c\u043e\u0435, \u0447\u0442\u043e \u0438 ",(0,i.kt)("inlineCode",{parentName:"li"},"is_readonly"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"future_parts")," (",(0,i.kt)("inlineCode",{parentName:"li"},"UInt32"),") - \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043a\u0443\u0441\u043a\u043e\u0432 \u0441 \u0434\u0430\u043d\u043d\u044b\u043c\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u043e\u044f\u0432\u044f\u0442\u0441\u044f \u0432 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0435 INSERT-\u043e\u0432 \u0438\u043b\u0438 \u0441\u043b\u0438\u044f\u043d\u0438\u0439, \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0435\u0449\u0451 \u043f\u0440\u0435\u0434\u0441\u0442\u043e\u0438\u0442 \u0441\u0434\u0435\u043b\u0430\u0442\u044c"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"parts_to_check")," (",(0,i.kt)("inlineCode",{parentName:"li"},"UInt32"),") - \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043a\u0443\u0441\u043a\u043e\u0432 \u0441 \u0434\u0430\u043d\u043d\u044b\u043c\u0438 \u0432 \u043e\u0447\u0435\u0440\u0435\u0434\u0438 \u043d\u0430 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0443. \u041a\u0443\u0441\u043e\u043a \u043f\u043e\u043c\u0435\u0449\u0430\u0435\u0442\u0441\u044f \u0432 \u043e\u0447\u0435\u0440\u0435\u0434\u044c \u043d\u0430 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0443, \u0435\u0441\u043b\u0438 \u0435\u0441\u0442\u044c \u043f\u043e\u0434\u043e\u0437\u0440\u0435\u043d\u0438\u0435, \u0447\u0442\u043e \u043e\u043d \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0431\u0438\u0442\u044b\u043c."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"zookeeper_path")," (",(0,i.kt)("inlineCode",{parentName:"li"},"String"),") - \u043f\u0443\u0442\u044c \u043a \u0434\u0430\u043d\u043d\u044b\u043c \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0432 ZK."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"replica_name")," (",(0,i.kt)("inlineCode",{parentName:"li"},"String"),") - \u0438\u043c\u044f \u0440\u0435\u043f\u043b\u0438\u043a\u0438 \u0432 ZK; \u0440\u0430\u0437\u043d\u044b\u0435 \u0440\u0435\u043f\u043b\u0438\u043a\u0438 \u043e\u0434\u043d\u043e\u0439 \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0438\u043c\u0435\u044e\u0442 \u0440\u0430\u0437\u043d\u043e\u0435 \u0438\u043c\u044f."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"replica_path")," (",(0,i.kt)("inlineCode",{parentName:"li"},"String"),") - \u043f\u0443\u0442\u044c \u043a \u0434\u0430\u043d\u043d\u044b\u043c \u0440\u0435\u043f\u043b\u0438\u043a\u0438 \u0432 ZK. \u0422\u043e \u0436\u0435 \u0441\u0430\u043c\u043e\u0435, \u0447\u0442\u043e \u043a\u043e\u043d\u043a\u0430\u0442\u0435\u043d\u0430\u0446\u0438\u044f zookeeper_path/replicas/replica_path."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"columns_version")," (",(0,i.kt)("inlineCode",{parentName:"li"},"Int32"),") - \u043d\u043e\u043c\u0435\u0440 \u0432\u0435\u0440\u0441\u0438\u0438 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b \u0442\u0430\u0431\u043b\u0438\u0446\u044b. \u041e\u0431\u043e\u0437\u043d\u0430\u0447\u0430\u0435\u0442, \u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0440\u0430\u0437 \u0431\u044b\u043b \u0441\u0434\u0435\u043b\u0430\u043d ALTER. \u0415\u0441\u043b\u0438 \u043d\u0430 \u0440\u0435\u043f\u043b\u0438\u043a\u0430\u0445 \u0440\u0430\u0437\u043d\u044b\u0435 \u0432\u0435\u0440\u0441\u0438\u0438, \u0437\u043d\u0430\u0447\u0438\u0442 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0440\u0435\u043f\u043b\u0438\u043a\u0438 \u0441\u0434\u0435\u043b\u0430\u043b\u0438 \u0435\u0449\u0451 \u043d\u0435 \u0432\u0441\u0435 ALTER-\u044b."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"queue_size")," (",(0,i.kt)("inlineCode",{parentName:"li"},"UInt32"),") - \u0440\u0430\u0437\u043c\u0435\u0440 \u043e\u0447\u0435\u0440\u0435\u0434\u0438 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u0440\u0435\u0434\u0441\u0442\u043e\u0438\u0442 \u0441\u0434\u0435\u043b\u0430\u0442\u044c. \u041a \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f\u043c \u043e\u0442\u043d\u043e\u0441\u044f\u0442\u0441\u044f \u0432\u0441\u0442\u0430\u0432\u043a\u0438 \u0431\u043b\u043e\u043a\u043e\u0432 \u0434\u0430\u043d\u043d\u044b\u0445, \u0441\u043b\u0438\u044f\u043d\u0438\u044f, \u0438 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0434\u0440\u0443\u0433\u0438\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f. \u041a\u0430\u043a \u043f\u0440\u0430\u0432\u0438\u043b\u043e, \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u0435\u0442 \u0441 future_parts."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"inserts_in_queue")," (",(0,i.kt)("inlineCode",{parentName:"li"},"UInt32"),") - \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0432\u0441\u0442\u0430\u0432\u043e\u043a \u0431\u043b\u043e\u043a\u043e\u0432 \u0434\u0430\u043d\u043d\u044b\u0445, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u0440\u0435\u0434\u0441\u0442\u043e\u0438\u0442 \u0441\u0434\u0435\u043b\u0430\u0442\u044c. \u041e\u0431\u044b\u0447\u043d\u043e \u0432\u0441\u0442\u0430\u0432\u043a\u0438 \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0441\u0442\u0440\u043e \u0440\u0435\u043f\u043b\u0438\u0446\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f. \u0415\u0441\u043b\u0438 \u0432\u0435\u043b\u0438\u0447\u0438\u043d\u0430 \u0431\u043e\u043b\u044c\u0448\u0430\u044f - \u0437\u043d\u0430\u0447\u0438\u0442 \u0447\u0442\u043e-\u0442\u043e \u043d\u0435 \u0442\u0430\u043a."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"merges_in_queue")," (",(0,i.kt)("inlineCode",{parentName:"li"},"UInt32"),") - \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u043b\u0438\u044f\u043d\u0438\u0439, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u0440\u0435\u0434\u0441\u0442\u043e\u0438\u0442 \u0441\u0434\u0435\u043b\u0430\u0442\u044c. \u0411\u044b\u0432\u0430\u044e\u0442 \u0434\u043b\u0438\u043d\u043d\u044b\u0435 \u0441\u043b\u0438\u044f\u043d\u0438\u044f - \u0442\u043e \u0435\u0441\u0442\u044c, \u044d\u0442\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435 \u043d\u0443\u043b\u044f \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"part_mutations_in_queue")," (",(0,i.kt)("inlineCode",{parentName:"li"},"UInt32"),") - \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043c\u0443\u0442\u0430\u0446\u0438\u0439, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u0440\u0435\u0434\u0441\u0442\u043e\u0438\u0442 \u0441\u0434\u0435\u043b\u0430\u0442\u044c."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"queue_oldest_time")," (",(0,i.kt)("inlineCode",{parentName:"li"},"DateTime"),") - \u0435\u0441\u043b\u0438 ",(0,i.kt)("inlineCode",{parentName:"li"},"queue_size")," \u0431\u043e\u043b\u044c\u0448\u0435 0, \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442, \u043a\u043e\u0433\u0434\u0430 \u0431\u044b\u043b\u0430 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0430 \u0432 \u043e\u0447\u0435\u0440\u0435\u0434\u044c \u0441\u0430\u043c\u0430\u044f \u0441\u0442\u0430\u0440\u0430\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u044f."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"inserts_oldest_time")," (",(0,i.kt)("inlineCode",{parentName:"li"},"DateTime"),") - \u0441\u043c. ",(0,i.kt)("inlineCode",{parentName:"li"},"queue_oldest_time"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"merges_oldest_time")," (",(0,i.kt)("inlineCode",{parentName:"li"},"DateTime"),") - \u0441\u043c. ",(0,i.kt)("inlineCode",{parentName:"li"},"queue_oldest_time"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"part_mutations_oldest_time")," (",(0,i.kt)("inlineCode",{parentName:"li"},"DateTime"),") - \u0441\u043c. ",(0,i.kt)("inlineCode",{parentName:"li"},"queue_oldest_time"),".")),(0,i.kt)("p",null,"\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 4 \u0441\u0442\u043e\u043b\u0431\u0446\u0430 \u0438\u043c\u0435\u044e\u0442 \u043d\u0435\u043d\u0443\u043b\u0435\u0432\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u0435\u0441\u043b\u0438 \u0430\u043a\u0442\u0438\u0432\u043d\u0430 \u0441\u0435\u0441\u0441\u0438\u044f \u0441 ZK."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"log_max_index")," (",(0,i.kt)("inlineCode",{parentName:"li"},"UInt64"),") - \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439 \u043d\u043e\u043c\u0435\u0440 \u0437\u0430\u043f\u0438\u0441\u0438 \u0432 \u043e\u0431\u0449\u0435\u043c \u043b\u043e\u0433\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"log_pointer")," (",(0,i.kt)("inlineCode",{parentName:"li"},"UInt64"),") - \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439 \u043d\u043e\u043c\u0435\u0440 \u0437\u0430\u043f\u0438\u0441\u0438 \u0438\u0437 \u043e\u0431\u0449\u0435\u0433\u043e \u043b\u043e\u0433\u0430 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439, \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u0440\u0435\u043f\u043b\u0438\u043a\u0430 \u0441\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043b\u0430 \u0432 \u0441\u0432\u043e\u044e \u043e\u0447\u0435\u0440\u0435\u0434\u044c \u0434\u043b\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f, \u043f\u043b\u044e\u0441 \u0435\u0434\u0438\u043d\u0438\u0446\u0430. \u0415\u0441\u043b\u0438 log_pointer \u0441\u0438\u043b\u044c\u043d\u043e \u043c\u0435\u043d\u044c\u0448\u0435 log_max_index, \u0437\u043d\u0430\u0447\u0438\u0442 \u0447\u0442\u043e-\u0442\u043e \u043d\u0435 \u0442\u0430\u043a."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"last_queue_update")," (",(0,i.kt)("inlineCode",{parentName:"li"},"DateTime"),") - \u0432\u0440\u0435\u043c\u044f \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0433\u043e \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u0430."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"absolute_delay")," (",(0,i.kt)("inlineCode",{parentName:"li"},"UInt64"),") - \u0437\u0430\u0434\u0435\u0440\u0436\u043a\u0430 (\u0432 \u0441\u0435\u043a\u0443\u043d\u0434\u0430\u0445) \u0434\u043b\u044f \u0442\u0435\u043a\u0443\u0449\u0435\u0439 \u0440\u0435\u043f\u043b\u0438\u043a\u0438."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"total_replicas")," (",(0,i.kt)("inlineCode",{parentName:"li"},"UInt8"),") - \u043e\u0431\u0449\u0435\u0435 \u0447\u0438\u0441\u043b\u043e \u0438\u0437\u0432\u0435\u0441\u0442\u043d\u044b\u0445 \u0440\u0435\u043f\u043b\u0438\u043a \u044d\u0442\u043e\u0439 \u0442\u0430\u0431\u043b\u0438\u0446\u044b."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"active_replicas")," (",(0,i.kt)("inlineCode",{parentName:"li"},"UInt8"),") - \u0447\u0438\u0441\u043b\u043e \u0440\u0435\u043f\u043b\u0438\u043a \u044d\u0442\u043e\u0439 \u0442\u0430\u0431\u043b\u0438\u0446\u044b, \u0438\u043c\u0435\u044e\u0449\u0438\u0445 \u0441\u0435\u0441\u0441\u0438\u044e \u0432 ZK; \u0442\u043e \u0435\u0441\u0442\u044c, \u0447\u0438\u0441\u043b\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u044e\u0449\u0438\u0445 \u0440\u0435\u043f\u043b\u0438\u043a."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"last_queue_update_exception")," (",(0,i.kt)("inlineCode",{parentName:"li"},"String"),") - \u0435\u0441\u043b\u0438 \u0432 \u043e\u0447\u0435\u0440\u0435\u0434\u0438 \u0435\u0441\u0442\u044c \u0431\u0438\u0442\u044b\u0435 \u0437\u0430\u043f\u0438\u0441\u0438. \u041e\u0441\u043e\u0431\u0435\u043d\u043d\u043e \u0432\u0430\u0436\u043d\u043e, \u043a\u043e\u0433\u0434\u0430 \u0432 ClickHouse \u043d\u0430\u0440\u0443\u0448\u0430\u0435\u0442\u0441\u044f \u043e\u0431\u0440\u0430\u0442\u043d\u0430\u044f \u0441\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u043c\u043e\u0441\u0442\u044c \u043c\u0435\u0436\u0434\u0443 \u0432\u0435\u0440\u0441\u0438\u044f\u043c\u0438, \u0430 \u0437\u0430\u043f\u0438\u0441\u0438 \u0436\u0443\u0440\u043d\u0430\u043b\u0430, \u0441\u0434\u0435\u043b\u0430\u043d\u043d\u044b\u0435 \u0431\u043e\u043b\u0435\u0435 \u043d\u043e\u0432\u044b\u043c\u0438 \u0432\u0435\u0440\u0441\u0438\u044f\u043c\u0438, \u043d\u0435 \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u043f\u0440\u043e\u0430\u043d\u0430\u043b\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u044b \u0441\u0442\u0430\u0440\u044b\u043c\u0438 \u0432\u0435\u0440\u0441\u0438\u044f\u043c\u0438."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"zookeeper_exception")," (",(0,i.kt)("inlineCode",{parentName:"li"},"String"),") - \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u043e\u0431 \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0438. \u041f\u043e\u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f, \u0435\u0441\u043b\u0438 \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043f\u0440\u0438 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0438 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u0438\u0437 ZooKeeper."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"replica_is_active")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/map"},"Map(String, UInt8)"),") \u2014 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0435 \u043c\u0435\u0436\u0434\u0443 \u0438\u043c\u0435\u043d\u0435\u043c \u0440\u0435\u043f\u043b\u0438\u043a\u0438 \u0438 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u043c \u0430\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u0438 \u0440\u0435\u043f\u043b\u0438\u043a\u0438.")),(0,i.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0437\u0430\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0442\u044c \u0432\u0441\u0435 \u0441\u0442\u043e\u043b\u0431\u0446\u044b, \u0442\u043e \u0442\u0430\u0431\u043b\u0438\u0446\u0430 \u043c\u043e\u0436\u0435\u0442 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0441\u043b\u0435\u0433\u043a\u0430 \u043c\u0435\u0434\u043b\u0435\u043d\u043d\u043e, \u0442\u0430\u043a \u043a\u0430\u043a \u043d\u0430 \u043a\u0430\u0436\u0434\u0443\u044e \u0441\u0442\u0440\u043e\u0447\u043a\u0443 \u0434\u0435\u043b\u0430\u0435\u0442\u0441\u044f \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0447\u0442\u0435\u043d\u0438\u0439 \u0438\u0437 ZK.\n\u0415\u0441\u043b\u0438 \u043d\u0435 \u0437\u0430\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0442\u044c \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0435 4 \u0441\u0442\u043e\u043b\u0431\u0446\u0430 (log_max_index, log_pointer, total_replicas, active_replicas), \u0442\u043e \u0442\u0430\u0431\u043b\u0438\u0446\u0430 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0431\u044b\u0441\u0442\u0440\u043e."),(0,i.kt)("p",null,"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0442\u0430\u043a \u043c\u043e\u0436\u043d\u043e \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c, \u0447\u0442\u043e \u0432\u0441\u0451 \u0445\u043e\u0440\u043e\u0448\u043e:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    database,\n    table,\n    is_leader,\n    is_readonly,\n    is_session_expired,\n    future_parts,\n    parts_to_check,\n    columns_version,\n    queue_size,\n    inserts_in_queue,\n    merges_in_queue,\n    log_max_index,\n    log_pointer,\n    total_replicas,\n    active_replicas\nFROM system.replicas\nWHERE\n       is_readonly\n    OR is_session_expired\n    OR future_parts > 20\n    OR parts_to_check > 10\n    OR queue_size > 20\n    OR inserts_in_queue > 10\n    OR log_max_index - log_pointer > 10\n    OR total_replicas < 2\n    OR active_replicas < total_replicas\n")),(0,i.kt)("p",null,"\u0415\u0441\u043b\u0438 \u044d\u0442\u043e\u0442 \u0437\u0430\u043f\u0440\u043e\u0441 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 - \u0437\u043d\u0430\u0447\u0438\u0442 \u0432\u0441\u0451 \u0445\u043e\u0440\u043e\u0448\u043e."))}u.isMDXComponent=!0}}]);