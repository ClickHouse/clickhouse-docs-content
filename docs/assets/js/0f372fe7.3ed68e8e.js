"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[57491],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),p=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(o.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,g=d["".concat(o,".").concat(m)]||d[m]||c[m]||l;return t?r.createElement(g,i(i({ref:n},u),{},{components:t})):r.createElement(g,i({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=d;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<l;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},82838:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=t(87462),a=(t(67294),t(3905));const l={slug:"/ru/engines/table-engines/special/url",sidebar_position:41,sidebar_label:"URL"},i="URL(URL, Format)",s={unversionedId:"ru/engines/table-engines/special/url",id:"ru/engines/table-engines/special/url",title:"URL(URL, Format)",description:"table_engines-url}",source:"@site/docs/ru/engines/table-engines/special/url.md",sourceDirName:"ru/engines/table-engines/special",slug:"/ru/engines/table-engines/special/url",permalink:"/docs/ru/engines/table-engines/special/url",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/engines/table-engines/special/url.md",tags:[],version:"current",sidebarPosition:41,frontMatter:{slug:"/ru/engines/table-engines/special/url",sidebar_position:41,sidebar_label:"URL"},sidebar:"russia",previous:{title:"Join",permalink:"/docs/ru/engines/table-engines/special/join"},next:{title:"View",permalink:"/docs/ru/engines/table-engines/special/view"}},o={},p=[{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0434\u0432\u0438\u0436\u043a\u0430 \u0432 \u0441\u0435\u0440\u0432\u0435\u0440\u0435 ClickHouse",id:"ispolzovanie-dvizhka-v-servere-clickhouse",level:2},{value:"\u041e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f",id:"osobennosti-ispolzovaniia",level:2}],u={toc:p};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"table_engines-url"},"URL(URL, Format)"),(0,a.kt)("p",null,"\u0423\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u043c\u0438 \u043d\u0430 \u0443\u0434\u0430\u043b\u0435\u043d\u043d\u043e\u043c HTTP/HTTPS \u0441\u0435\u0440\u0432\u0435\u0440\u0435. \u0414\u0430\u043d\u043d\u044b\u0439 \u0434\u0432\u0438\u0436\u043e\u043a \u043f\u043e\u0445\u043e\u0436\n\u043d\u0430 \u0434\u0432\u0438\u0436\u043e\u043a ",(0,a.kt)("a",{parentName:"p",href:"/docs/ru/engines/table-engines/special/file"},"File"),"."),(0,a.kt)("h2",{id:"ispolzovanie-dvizhka-v-servere-clickhouse"},"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0434\u0432\u0438\u0436\u043a\u0430 \u0432 \u0441\u0435\u0440\u0432\u0435\u0440\u0435 ClickHouse"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Format")," \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0442\u0430\u043a\u0438\u043c, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 ClickHouse \u043c\u043e\u0436\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432 \u0437\u0430\u043f\u0440\u043e\u0441\u0430\u0445\n",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT")," \u0438, \u0435\u0441\u043b\u0438 \u0435\u0441\u0442\u044c \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u044c, ",(0,a.kt)("inlineCode",{parentName:"p"},"INSERT"),". \u041f\u043e\u043b\u043d\u044b\u0439 \u0441\u043f\u0438\u0441\u043e\u043a \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043c\u044b\u0445 \u0444\u043e\u0440\u043c\u0430\u0442\u043e\u0432 \u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0432\n\u0440\u0430\u0437\u0434\u0435\u043b\u0435 ",(0,a.kt)("a",{parentName:"p",href:"/docs/ru/interfaces/formats#formats"},"\u0424\u043e\u0440\u043c\u0430\u0442\u044b"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"URL")," \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0435 Uniform Resource Locator. \u041f\u043e \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u043c\u0443 URL \u0434\u043e\u043b\u0436\u0435\u043d \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u0441\u0435\u0440\u0432\u0435\u0440\n\u0440\u0430\u0431\u043e\u0442\u0430\u044e\u0449\u0438\u0439 \u043f\u043e \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b\u0443 HTTP \u0438\u043b\u0438 HTTPS. \u041f\u0440\u0438 \u044d\u0442\u043e\u043c \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0442\u0440\u0435\u0431\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u043d\u0438\u043a\u0430\u043a\u0438\u0445\n\u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u043e\u0432 \u0434\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u043e\u0442\u0432\u0435\u0442\u0430 \u043e\u0442 \u0441\u0435\u0440\u0432\u0435\u0440\u0430."),(0,a.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441\u044b ",(0,a.kt)("inlineCode",{parentName:"p"},"INSERT")," \u0438 ",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT")," \u0442\u0440\u0430\u043d\u0441\u043b\u0438\u0440\u0443\u044e\u0442\u0441\u044f \u0432 ",(0,a.kt)("inlineCode",{parentName:"p"},"POST")," \u0438 ",(0,a.kt)("inlineCode",{parentName:"p"},"GET")," \u0437\u0430\u043f\u0440\u043e\u0441\u044b\n\u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e. \u0414\u043b\u044f \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 ",(0,a.kt)("inlineCode",{parentName:"p"},"POST"),"-\u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u0443\u0434\u0430\u043b\u0435\u043d\u043d\u044b\u0439 \u0441\u0435\u0440\u0432\u0435\u0440 \u0434\u043e\u043b\u0436\u0435\u043d \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0442\u044c\n",(0,a.kt)("a",{parentName:"p",href:"https://ru.wikipedia.org/wiki/Chunked_transfer_encoding"},"Chunked transfer encoding"),"."),(0,a.kt)("p",null,"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u043e\u0432 \u043f\u043e \u0440\u0435\u0434\u0438\u0440\u0435\u043a\u0442\u0430\u043c \u043f\u0440\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0438 HTTP-\u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u043c\u0435\u0442\u043e\u0434\u043e\u043c GET \u043c\u043e\u0436\u043d\u043e \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0442\u044c \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 ",(0,a.kt)("a",{parentName:"p",href:"/docs/ru/operations/settings/settings#setting-max_http_get_redirects"},"max_http_get_redirects"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440:")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"1.")," \u0421\u043e\u0437\u0434\u0430\u0434\u0438\u043c \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u0443 ",(0,a.kt)("inlineCode",{parentName:"p"},"url_engine_table"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE url_engine_table (word String, value UInt64)\nENGINE=URL('http://127.0.0.1:12345/', CSV)\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"2.")," \u0421\u043e\u0437\u0434\u0430\u0434\u0438\u043c \u043f\u0440\u043e\u0441\u0442\u0435\u0439\u0448\u0438\u0439 http-\u0441\u0435\u0440\u0432\u0435\u0440 \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u044b\u043c\u0438 \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0430\u043c\u0438 \u044f\u0437\u044b\u043a\u0430 python3 \u0438\n\u0437\u0430\u043f\u0443\u0441\u0442\u0438\u043c \u0435\u0433\u043e:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python3"},"from http.server import BaseHTTPRequestHandler, HTTPServer\n\nclass CSVHTTPServer(BaseHTTPRequestHandler):\n    def do_GET(self):\n        self.send_response(200)\n        self.send_header('Content-type', 'text/csv')\n        self.end_headers()\n\n        self.wfile.write(bytes('Hello,1\\nWorld,2\\n', \"utf-8\"))\n\nif __name__ == \"__main__\":\n    server_address = ('127.0.0.1', 12345)\n    HTTPServer(server_address, CSVHTTPServer).serve_forever()\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ python3 server.py\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"3.")," \u0417\u0430\u043f\u0440\u043e\u0441\u0438\u043c \u0434\u0430\u043d\u043d\u044b\u0435:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM url_engine_table\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500word\u2500\u2500\u252c\u2500value\u2500\u2510\n\u2502 Hello \u2502     1 \u2502\n\u2502 World \u2502     2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("h2",{id:"osobennosti-ispolzovaniia"},"\u041e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u043c\u043d\u043e\u0433\u043e\u043f\u043e\u0442\u043e\u0447\u043d\u043e\u0435 \u0447\u0442\u0435\u043d\u0438\u0435 \u0438 \u0437\u0430\u043f\u0438\u0441\u044c."),(0,a.kt)("li",{parentName:"ul"},"\u041d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044f:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0439 ",(0,a.kt)("inlineCode",{parentName:"li"},"ALTER")," \u0438 ",(0,a.kt)("inlineCode",{parentName:"li"},"SELECT...SAMPLE"),";"),(0,a.kt)("li",{parentName:"ul"},"\u0438\u043d\u0434\u0435\u043a\u0441\u044b;"),(0,a.kt)("li",{parentName:"ul"},"\u0440\u0435\u043f\u043b\u0438\u043a\u0430\u0446\u0438\u044f.")))))}c.isMDXComponent=!0}}]);