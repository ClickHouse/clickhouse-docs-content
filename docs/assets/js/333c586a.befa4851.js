"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[97319],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(r),g=a,f=u["".concat(c,".").concat(g)]||u[g]||m[g]||l;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=g;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},85350:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const l={slug:"/ru/interfaces/grpc",sidebar_position:18,sidebar_label:"gRPC \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441"},i="\u0418\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 gRPC",o={unversionedId:"ru/interfaces/grpc",id:"ru/interfaces/grpc",title:"\u0418\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 gRPC",description:"grpc-interface}",source:"@site/docs/ru/interfaces/grpc.md",sourceDirName:"ru/interfaces",slug:"/ru/interfaces/grpc",permalink:"/docs/ru/interfaces/grpc",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/interfaces/grpc.md",tags:[],version:"current",sidebarPosition:18,frontMatter:{slug:"/ru/interfaces/grpc",sidebar_position:18,sidebar_label:"gRPC \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441"},sidebar:"russia",previous:{title:"\u041a\u043b\u0438\u0435\u043d\u0442 \u043a\u043e\u043c\u0430\u043d\u0434\u043d\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0438",permalink:"/docs/ru/interfaces/cli"},next:{title:"\u0420\u043e\u0434\u043d\u043e\u0439 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 (TCP)",permalink:"/docs/ru/interfaces/tcp"}},c={},p=[{value:"\u0412\u0432\u0435\u0434\u0435\u043d\u0438\u0435",id:"grpc-interface-introduction",level:2},{value:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f gRPC",id:"grpc-interface-configuration",level:2},{value:"\u0412\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u0439 \u043a\u043b\u0438\u0435\u043d\u0442",id:"grpc-client",level:2}],s={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"grpc-interface"},"\u0418\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 gRPC"),(0,a.kt)("h2",{id:"grpc-interface-introduction"},"\u0412\u0432\u0435\u0434\u0435\u043d\u0438\u0435"),(0,a.kt)("p",null,"ClickHouse \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 ",(0,a.kt)("a",{parentName:"p",href:"https://grpc.io/"},"gRPC"),". \u042d\u0442\u043e \u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u0443\u0434\u0430\u043b\u0435\u043d\u043d\u043e\u0433\u043e \u0432\u044b\u0437\u043e\u0432\u0430 \u043f\u0440\u043e\u0446\u0435\u0434\u0443\u0440 \u0441 \u043e\u0442\u043a\u0440\u044b\u0442\u044b\u043c \u0438\u0441\u0445\u043e\u0434\u043d\u044b\u043c \u043a\u043e\u0434\u043e\u043c, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 HTTP/2 \u0438 ",(0,a.kt)("a",{parentName:"p",href:"https://ru.wikipedia.org/wiki/Protocol_Buffers"},"Protocol Buffers"),". \u0412 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 gRPC \u0432 ClickHouse \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044e\u0442\u0441\u044f:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"SSL; "),(0,a.kt)("li",{parentName:"ul"},"\u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f; "),(0,a.kt)("li",{parentName:"ul"},"\u0441\u0435\u0441\u0441\u0438\u0438; "),(0,a.kt)("li",{parentName:"ul"},"\u0441\u0436\u0430\u0442\u0438\u0435; "),(0,a.kt)("li",{parentName:"ul"},"\u043f\u0430\u0440\u0430\u043b\u043b\u0435\u043b\u044c\u043d\u044b\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u044b, \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u043c\u044b\u0435 \u0447\u0435\u0440\u0435\u0437 \u043e\u0434\u0438\u043d \u043a\u0430\u043d\u0430\u043b; "),(0,a.kt)("li",{parentName:"ul"},"\u043e\u0442\u043c\u0435\u043d\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432; "),(0,a.kt)("li",{parentName:"ul"},"\u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0433\u0440\u0435\u0441\u0441\u0430 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0439 \u0438 \u043b\u043e\u0433\u043e\u0432; "),(0,a.kt)("li",{parentName:"ul"},"\u0432\u043d\u0435\u0448\u043d\u0438\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u044b.")),(0,a.kt)("p",null,"\u0421\u043f\u0435\u0446\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442\u0441\u044f \u0432 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/ClickHouse/blob/master/src/Server/grpc_protos/clickhouse_grpc.proto"},"clickhouse_grpc.proto"),"."),(0,a.kt)("h2",{id:"grpc-interface-configuration"},"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f gRPC"),(0,a.kt)("p",null,"\u0427\u0442\u043e\u0431\u044b \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u043c \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 gRPC, \u043d\u0443\u0436\u043d\u043e \u0437\u0430\u0434\u0430\u0442\u044c \u043f\u043e\u0440\u0442 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 ",(0,a.kt)("inlineCode",{parentName:"p"},"grpc_port")," \u0432 ",(0,a.kt)("a",{parentName:"p",href:"/docs/ru/operations/configuration-files"},"\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u0441\u0435\u0440\u0432\u0435\u0440\u0430"),". \u0414\u0440\u0443\u0433\u0438\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u043d\u044b \u0432 \u043f\u0440\u0438\u043c\u0435\u0440\u0435:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<grpc_port>9100</grpc_port>\n    <grpc>\n        <enable_ssl>false</enable_ssl>\n\n        \x3c!-- \u041f\u0443\u0442\u0438 \u043a \u0444\u0430\u0439\u043b\u0430\u043c \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432 \u0438 \u043a\u043b\u044e\u0447\u0435\u0439. \u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u043f\u0440\u0438 \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u043e\u043c SSL --\x3e\n        <ssl_cert_file>/path/to/ssl_cert_file</ssl_cert_file>\n        <ssl_key_file>/path/to/ssl_key_file</ssl_key_file>\n\n        \x3c!-- \u0417\u0430\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u0442 \u043b\u0438 \u0441\u0435\u0440\u0432\u0435\u0440 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442 \u043a\u043b\u0438\u0435\u043d\u0442\u0430 --\x3e\n        <ssl_require_client_auth>false</ssl_require_client_auth>\n\n        \x3c!-- \u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f, \u0435\u0441\u043b\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0437\u0430\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0442\u044c \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442 --\x3e\n        <ssl_ca_cert_file>/path/to/ssl_ca_cert_file</ssl_ca_cert_file>\n\n        \x3c!-- \u0410\u043b\u0433\u043e\u0440\u0438\u0442\u043c \u0441\u0436\u0430\u0442\u0438\u044f \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e (\u043f\u0440\u0438\u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f, \u0435\u0441\u043b\u0438 \u043a\u043b\u0438\u0435\u043d\u0442 \u043d\u0435 \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442 \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c, \u0441\u043c. result_compression \u0432 QueryInfo).\n             \u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044e\u0442\u0441\u044f \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u044b: none, deflate, gzip, stream_gzip --\x3e\n        <compression>deflate</compression>\n\n        \x3c!-- \u0423\u0440\u043e\u0432\u0435\u043d\u044c \u0441\u0436\u0430\u0442\u0438\u044f \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e (\u043f\u0440\u0438\u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f, \u0435\u0441\u043b\u0438 \u043a\u043b\u0438\u0435\u043d\u0442 \u043d\u0435 \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442 \u0443\u0440\u043e\u0432\u0435\u043d\u044c \u0441\u0436\u0430\u0442\u0438\u044f, \u0441\u043c. result_compression \u0432 QueryInfo).\n             \u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043c\u044b\u0435 \u0443\u0440\u043e\u0432\u043d\u0438: none, low, medium, high --\x3e\n        <compression_level>medium</compression_level>\n\n        \x3c!-- \u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0435 \u0432 \u0431\u0430\u0439\u0442\u0430\u0445 \u043d\u0430 \u0440\u0430\u0437\u043c\u0435\u0440 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u043c\u044b\u0445 \u0438 \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u043c\u044b\u0445 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0439. -1 \u043e\u0437\u043d\u0430\u0447\u0430\u0435\u0442 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u0435 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f --\x3e\n        <max_send_message_size>-1</max_send_message_size>\n        <max_receive_message_size>-1</max_receive_message_size>\n\n        \x3c!-- \u0412\u044b\u0432\u043e\u0434\u0438\u0442\u044c \u043b\u0438 \u0434\u0435\u0442\u0430\u043b\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u043b\u043e\u0433\u0438 --\x3e\n        <verbose_logs>false</verbose_logs>\n    </grpc>\n")),(0,a.kt)("h2",{id:"grpc-client"},"\u0412\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u0439 \u043a\u043b\u0438\u0435\u043d\u0442"),(0,a.kt)("p",null,"\u041c\u043e\u0436\u043d\u043e \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043a\u043b\u0438\u0435\u043d\u0442 \u043d\u0430 \u043b\u044e\u0431\u043e\u043c \u044f\u0437\u044b\u043a\u0435 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044f gRPC, \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/ClickHouse/blob/master/src/Server/grpc_protos/clickhouse_grpc.proto"},"\u0441\u043f\u0435\u0446\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438"),".\n\u0422\u0430\u043a\u0436\u0435 \u043c\u043e\u0436\u043d\u043e \u0432\u043e\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0432\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u043c Python \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u043c. \u041e\u043d \u0440\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d \u0432 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/ClickHouse/blob/master/utils/grpc-client/clickhouse-grpc-client.py"},"utils/grpc-client/clickhouse-grpc-client.py")," \u0432 \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0438. \u0414\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0432\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u043e\u0433\u043e \u043a\u043b\u0438\u0435\u043d\u0442\u0430 \u0442\u0440\u0435\u0431\u0443\u044e\u0442\u0441\u044f Python \u043c\u043e\u0434\u0443\u043b\u0438 ",(0,a.kt)("a",{parentName:"p",href:"https://grpc.io/docs/languages/python/quickstart"},"grpcio \u0438 grpcio-tools"),". "),(0,a.kt)("p",null,"\u041a\u043b\u0438\u0435\u043d\u0442 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--help")," \u2013 \u0432\u044b\u0432\u0435\u0441\u0442\u0438 \u0441\u043f\u0440\u0430\u0432\u043a\u0443 \u0438 \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044c \u0440\u0430\u0431\u043e\u0442\u0443."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--host HOST, -h HOST")," \u2013 \u0438\u043c\u044f \u0441\u0435\u0440\u0432\u0435\u0440\u0430. \u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e: ",(0,a.kt)("inlineCode",{parentName:"li"},"localhost"),". \u041c\u043e\u0436\u043d\u043e \u0437\u0430\u0434\u0430\u0442\u044c \u0430\u0434\u0440\u0435\u0441 IPv4 \u0438\u043b\u0438 IPv6."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--port PORT")," \u2013 \u043d\u043e\u043c\u0435\u0440 \u043f\u043e\u0440\u0442\u0430. \u042d\u0442\u043e\u0442 \u043f\u043e\u0440\u0442 \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0437\u0430\u0434\u0430\u043d \u0432 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 ClickHouse \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u043e\u0439 ",(0,a.kt)("inlineCode",{parentName:"li"},"grpc_port"),". \u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e: ",(0,a.kt)("inlineCode",{parentName:"li"},"9100"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--user USER_NAME, -u USER_NAME")," \u2013 \u0438\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f. \u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e: ",(0,a.kt)("inlineCode",{parentName:"li"},"default"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--password PASSWORD")," \u2013 \u043f\u0430\u0440\u043e\u043b\u044c. \u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e: \u043f\u0443\u0441\u0442\u0430\u044f \u0441\u0442\u0440\u043e\u043a\u0430."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--query QUERY, -q QUERY")," \u2013 \u0437\u0430\u043f\u0440\u043e\u0441, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u0441\u044f, \u043a\u043e\u0433\u0434\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u043d\u0435\u0438\u043d\u0442\u0435\u0440\u0430\u043a\u0442\u0438\u0432\u043d\u044b\u0439 \u0440\u0435\u0436\u0438\u043c \u0440\u0430\u0431\u043e\u0442\u044b."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--database DATABASE, -d DATABASE")," \u2013 \u0431\u0430\u0437\u0430 \u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e. \u0415\u0441\u043b\u0438 \u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d\u0430, \u0442\u043e \u0431\u0443\u0434\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0430 \u0431\u0430\u0437\u0430 \u0434\u0430\u043d\u043d\u044b\u0445, \u0437\u0430\u0434\u0430\u043d\u043d\u0430\u044f \u0432 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430\u0445 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 (\u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e ",(0,a.kt)("inlineCode",{parentName:"li"},"default"),")."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--format OUTPUT_FORMAT, -f OUTPUT_FORMAT")," \u2013 ",(0,a.kt)("a",{parentName:"li",href:"/docs/ru/interfaces/formats"},"\u0444\u043e\u0440\u043c\u0430\u0442")," \u0432\u044b\u0432\u043e\u0434\u0430 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430. \u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0434\u043b\u044f \u0438\u043d\u0442\u0435\u0440\u0430\u043a\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u0440\u0435\u0436\u0438\u043c\u0430: ",(0,a.kt)("inlineCode",{parentName:"li"},"PrettyCompact"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--debug")," \u2013 \u0432\u044b\u0432\u043e\u0434 \u043e\u0442\u043b\u0430\u0434\u043e\u0447\u043d\u043e\u0439 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438.")),(0,a.kt)("p",null,"\u0427\u0442\u043e\u0431\u044b \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u043a\u043b\u0438\u0435\u043d\u0442 \u0432 \u0438\u043d\u0442\u0435\u0440\u0430\u043a\u0442\u0438\u0432\u043d\u043e\u043c \u0440\u0435\u0436\u0438\u043c\u0435, \u043d\u0435 \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0439\u0442\u0435 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442 ",(0,a.kt)("inlineCode",{parentName:"p"},"--query"),"."),(0,a.kt)("p",null,"\u0412 \u043d\u0435\u0438\u043d\u0442\u0435\u0440\u0430\u043a\u0442\u0438\u0432\u043d\u043e\u043c \u0440\u0435\u0436\u0438\u043c\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u043c\u043e\u0436\u043d\u043e \u043f\u0435\u0440\u0435\u0434\u0430\u0442\u044c \u0447\u0435\u0440\u0435\u0437 ",(0,a.kt)("inlineCode",{parentName:"p"},"stdin"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u043a\u043b\u0438\u0435\u043d\u0442\u0430")),(0,a.kt)("p",null,"\u0412 \u043f\u0440\u0438\u043c\u0435\u0440\u0435 \u0441\u043e\u0437\u0434\u0430\u0435\u0442\u0441\u044f \u0442\u0430\u0431\u043b\u0438\u0446\u0430, \u0438 \u0432 \u043d\u0435\u0435 \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u044e\u0442\u0441\u044f \u0434\u0430\u043d\u043d\u044b\u0435 \u0438\u0437 CSV \u0444\u0430\u0439\u043b\u0430. \u0417\u0430\u0442\u0435\u043c \u0432\u044b\u0432\u043e\u0434\u0438\u0442\u0441\u044f \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u044b."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'./clickhouse-grpc-client.py -q "CREATE TABLE grpc_example_table (id UInt32, text String) ENGINE = MergeTree() ORDER BY id;"\necho "0,Input data for" > a.txt ; echo "1,gRPC protocol example" >> a.txt\ncat a.txt | ./clickhouse-grpc-client.py -q "INSERT INTO grpc_example_table FORMAT CSV"\n\n./clickhouse-grpc-client.py --format PrettyCompact -q "SELECT * FROM grpc_example_table;"\n')),(0,a.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500id\u2500\u252c\u2500text\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502  0 \u2502 Input data for        \u2502\n\u2502  1 \u2502 gRPC protocol example \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}m.isMDXComponent=!0}}]);