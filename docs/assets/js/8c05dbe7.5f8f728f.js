"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[70192],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),p=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(o.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),g=a,m=u["".concat(o,".").concat(g)]||u[g]||d[g]||l;return t?r.createElement(m,i(i({ref:n},c),{},{components:t})):r.createElement(m,i({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=g;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<l;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},94909:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=t(87462),a=(t(67294),t(3905));const l={slug:"/zh/engines/table-engines/special/url"},i="URL(URL,\u683c\u5f0f)",s={unversionedId:"zh/engines/table-engines/special/url",id:"zh/engines/table-engines/special/url",title:"URL(URL,\u683c\u5f0f)",description:"table_engines-url}",source:"@site/docs/zh/engines/table-engines/special/url.md",sourceDirName:"zh/engines/table-engines/special",slug:"/zh/engines/table-engines/special/url",permalink:"/docs/zh/engines/table-engines/special/url",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/engines/table-engines/special/url.md",tags:[],version:"current",frontMatter:{slug:"/zh/engines/table-engines/special/url"},sidebar:"chinese",previous:{title:"\u96c6\u5408",permalink:"/docs/zh/engines/table-engines/special/set"},next:{title:"\u89c6\u56fe",permalink:"/docs/zh/engines/table-engines/special/view"}},o={},p=[{value:"\u5728 ClickHouse \u670d\u52a1\u5668\u4e2d\u4f7f\u7528\u5f15\u64ce",id:"zai-clickhouse-fu-wu-qi-zhong-shi-yong-yin-qing",level:2},{value:"\u529f\u80fd\u5b9e\u73b0",id:"gong-neng-shi-xian",level:2}],c={toc:p},u="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"table_engines-url"},"URL(URL,\u683c\u5f0f)"),(0,a.kt)("p",null,"\u7528\u4e8e\u7ba1\u7406\u8fdc\u7a0b HTTP/HTTPS \u670d\u52a1\u5668\u4e0a\u7684\u6570\u636e\u3002\u8be5\u5f15\u64ce\u7c7b\u4f3c\n",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/engines/table-engines/special/file"},"\u6587\u4ef6")," \u5f15\u64ce\u3002"),(0,a.kt)("h2",{id:"zai-clickhouse-fu-wu-qi-zhong-shi-yong-yin-qing"},"\u5728 ClickHouse \u670d\u52a1\u5668\u4e2d\u4f7f\u7528\u5f15\u64ce"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Format")," \u5fc5\u987b\u662f ClickHouse \u53ef\u4ee5\u7528\u4e8e\n",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT")," \u67e5\u8be2\u7684\u4e00\u79cd\u683c\u5f0f\uff0c\u82e5\u6709\u5fc5\u8981\uff0c\u8fd8\u8981\u53ef\u7528\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"INSERT")," \u3002\u6709\u5173\u652f\u6301\u683c\u5f0f\u7684\u5b8c\u6574\u5217\u8868\uff0c\u8bf7\u67e5\u770b\n",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/interfaces/formats#formats"},"\u683c\u5f0f"),"\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"URL")," \u5fc5\u987b\u7b26\u5408\u7edf\u4e00\u8d44\u6e90\u5b9a\u4f4d\u7b26\u7684\u7ed3\u6784\u3002\u6307\u5b9a\u7684URL\u5fc5\u987b\u6307\u5411\u4e00\u4e2a\nHTTP \u6216 HTTPS \u670d\u52a1\u5668\u3002\u5bf9\u4e8e\u670d\u52a1\u7aef\u54cd\u5e94\uff0c\n\u4e0d\u9700\u8981\u4efb\u4f55\u989d\u5916\u7684 HTTP \u5934\u6807\u8bb0\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"INSERT")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT")," \u67e5\u8be2\u4f1a\u5206\u522b\u8f6c\u6362\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"POST")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"GET")," \u8bf7\u6c42\u3002\n\u5bf9\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"POST")," \u8bf7\u6c42\u7684\u5904\u7406\uff0c\u8fdc\u7a0b\u670d\u52a1\u5668\u5fc5\u987b\u652f\u6301\n",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Chunked_transfer_encoding"},"\u5206\u5757\u4f20\u8f93\u7f16\u7801"),"\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b\uff1a")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"1.")," \u5728 Clickhouse \u670d\u52a1\u4e0a\u521b\u5efa\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"url_engine_table")," \u8868\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE url_engine_table (word String, value UInt64)\nENGINE=URL('http://127.0.0.1:12345/', CSV)\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"2.")," \u7528\u6807\u51c6\u7684 Python 3 \u5de5\u5177\u5e93\u521b\u5efa\u4e00\u4e2a\u57fa\u672c\u7684 HTTP \u670d\u52a1\u5e76\n\u542f\u52a8\u5b83\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python3"},"from http.server import BaseHTTPRequestHandler, HTTPServer\n\nclass CSVHTTPServer(BaseHTTPRequestHandler):\n    def do_GET(self):\n        self.send_response(200)\n        self.send_header('Content-type', 'text/csv')\n        self.end_headers()\n\n        self.wfile.write(bytes('Hello,1\\nWorld,2\\n', \"utf-8\"))\n\nif __name__ == \"__main__\":\n    server_address = ('127.0.0.1', 12345)\n    HTTPServer(server_address, CSVHTTPServer).serve_forever()\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"python3 server.py\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"3.")," \u67e5\u8be2\u8bf7\u6c42:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM url_engine_table\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u250c\u2500word\u2500\u2500\u252c\u2500value\u2500\u2510\n\u2502 Hello \u2502     1 \u2502\n\u2502 World \u2502     2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("h2",{id:"gong-neng-shi-xian"},"\u529f\u80fd\u5b9e\u73b0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8bfb\u5199\u64cd\u4f5c\u90fd\u652f\u6301\u5e76\u53d1"),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ALTER")," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"SELECT...SAMPLE")," \u64cd\u4f5c\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u7d22\u5f15\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u526f\u672c\u3002")))))}d.isMDXComponent=!0}}]);