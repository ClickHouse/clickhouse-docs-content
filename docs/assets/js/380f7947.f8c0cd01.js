"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[80620],{3905:function(e,r,n){n.d(r,{Zo:function(){return u},kt:function(){return m}});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function l(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?l(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=t.createContext({}),p=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},u=function(e){var r=p(e.components);return t.createElement(s.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},k=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),k=p(n),m=a,b=k["".concat(s,".").concat(m)]||k[m]||c[m]||l;return n?t.createElement(b,o(o({ref:r},u),{},{components:n})):t.createElement(b,o({ref:r},u))}));function m(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=k;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}k.displayName="MDXCreateElement"},76007:function(e,r,n){n.r(r),n.d(r,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var t=n(87462),a=n(63366),l=(n(67294),n(3905)),o=["components"],i={slug:"/zh/operations/external-authenticators/kerberos"},s="Kerberos\u8ba4\u8bc1",p={unversionedId:"zh/operations/external-authenticators/kerberos",id:"zh/operations/external-authenticators/kerberos",title:"Kerberos\u8ba4\u8bc1",description:"external-authenticators-kerberos}",source:"@site/docs/zh/operations/external-authenticators/kerberos.md",sourceDirName:"zh/operations/external-authenticators",slug:"/zh/operations/external-authenticators/kerberos",permalink:"/docs/zh/operations/external-authenticators/kerberos",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/operations/external-authenticators/kerberos.md",tags:[],version:"current",frontMatter:{slug:"/zh/operations/external-authenticators/kerberos"},sidebar:"chinese",previous:{title:"External User Authenticators and Directories",permalink:"/docs/zh/operations/external-authenticators/"},next:{title:"LDAP",permalink:"/docs/zh/operations/external-authenticators/ldap"}},u={},c=[{value:"\u5f00\u542fKerberos",id:"enabling-kerberos-in-clickHouse",level:2},{value:"\u53c2\u6570:",id:"parameters",level:4},{value:"Kerberos\u4f5c\u4e3a\u73b0\u6709\u7528\u6237\u7684\u5916\u90e8\u8eab\u4efd\u9a8c\u8bc1\u5668",id:"kerberos-as-an-external-authenticator-for-existing-users",level:2},{value:"<code>users.xml</code>\u4e2d\u542f\u7528Kerberos",id:"enabling-kerberos-in-users-xml",level:3},{value:"\u4f7f\u7528 SQL \u542f\u7528 Kerberos",id:"enabling-kerberos-using-sql",level:3}],k={toc:c};function m(e){var r=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,t.Z)({},k,n,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"external-authenticators-kerberos"},"Kerberos\u8ba4\u8bc1"),(0,l.kt)("p",null,"\u73b0\u6709\u6b63\u786e\u914d\u7f6e\u7684 ClickHouse \u7528\u6237\u53ef\u4ee5\u901a\u8fc7 Kerberos \u8eab\u4efd\u9a8c\u8bc1\u534f\u8bae\u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1."),(0,l.kt)("p",null,"\u76ee\u524d, Kerberos \u53ea\u80fd\u7528\u4f5c\u73b0\u6709\u7528\u6237\u7684\u5916\u90e8\u8eab\u4efd\u9a8c\u8bc1\u5668\uff0c\u8fd9\u4e9b\u7528\u6237\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"users.xml")," \u6216\u672c\u5730\u8bbf\u95ee\u63a7\u5236\u8def\u5f84\u4e2d\u5b9a\u4e49.\n\u8fd9\u4e9b\u7528\u6237\u53ea\u80fd\u4f7f\u7528 HTTP \u8bf7\u6c42, \u5e76\u4e14\u5fc5\u987b\u80fd\u591f\u4f7f\u7528 GSS-SPNEGO \u673a\u5236\u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1."),(0,l.kt)("p",null,"\u5bf9\u4e8e\u8fd9\u79cd\u65b9\u6cd5, \u5fc5\u987b\u5728\u7cfb\u7edf\u4e2d\u914d\u7f6e Kerberos, \u4e14\u5fc5\u987b\u5728 ClickHouse \u914d\u7f6e\u4e2d\u542f\u7528."),(0,l.kt)("h2",{id:"enabling-kerberos-in-clickHouse"},"\u5f00\u542fKerberos"),(0,l.kt)("p",null,"\u8981\u542f\u7528 Kerberos, \u5e94\u8be5\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"config.xml")," \u4e2d\u5305\u542b ",(0,l.kt)("inlineCode",{parentName:"p"},"kerberos")," \u90e8\u5206. \u6b64\u90e8\u5206\u53ef\u80fd\u5305\u542b\u5176\u4ed6\u53c2\u6570."),(0,l.kt)("h4",{id:"parameters"},"\u53c2\u6570:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"principal")," - \u5c06\u5728\u63a5\u53d7\u5b89\u5168\u4e0a\u4e0b\u6587\u65f6\u83b7\u53d6\u548c\u4f7f\u7528\u7684\u89c4\u8303\u670d\u52a1\u4e3b\u4f53\u540d\u79f0.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u6b64\u53c2\u6570\u662f\u53ef\u9009\u7684, \u5982\u679c\u7701\u7565, \u5c06\u4f7f\u7528\u9ed8\u8ba4\u4e3b\u4f53.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"realm")," - \u4e00\u4e2a\u9886\u57df, \u7528\u4e8e\u5c06\u8eab\u4efd\u9a8c\u8bc1\u9650\u5236\u4e3a\u4ec5\u90a3\u4e9b\u53d1\u8d77\u8005\u9886\u57df\u4e0e\u5176\u5339\u914d\u7684\u8bf7\u6c42.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u6b64\u53c2\u6570\u662f\u53ef\u9009\u7684\uff0c\u5982\u679c\u7701\u7565\uff0c\u5219\u4e0d\u4f1a\u5e94\u7528\u5176\u4ed6\u9886\u57df\u7684\u8fc7\u6ee4."))),(0,l.kt)("p",null,"\u793a\u4f8b (\u8fdb\u5165 ",(0,l.kt)("inlineCode",{parentName:"p"},"config.xml"),"):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<yandex>\n    <!- ... --\x3e\n    <kerberos />\n</yandex>\n")),(0,l.kt)("p",null,"\u4e3b\u4f53\u89c4\u8303:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<yandex>\n    <!- ... --\x3e\n    <kerberos>\n        <principal>HTTP/clickhouse.example.com@EXAMPLE.COM</principal>\n    </kerberos>\n</yandex>\n")),(0,l.kt)("p",null,"\u6309\u9886\u57df\u8fc7\u6ee4:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<yandex>\n    <!- ... --\x3e\n    <kerberos>\n        <realm>EXAMPLE.COM</realm>\n    </kerberos>\n</yandex>\n")),(0,l.kt)("p",null,'!!! warning "\u6ce8\u610f"'),(0,l.kt)("p",null,"\u60a8\u53ea\u80fd\u5b9a\u4e49\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"kerberos")," \u90e8\u5206. \u591a\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"kerberos")," \u90e8\u5206\u7684\u5b58\u5728\u5c06\u5f3a\u5236 ClickHouse \u7981\u7528 Kerberos \u8eab\u4efd\u9a8c\u8bc1."),(0,l.kt)("p",null,'!!! warning "\u6ce8\u610f"'),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"\u4e3b\u4f53"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"\u9886\u57df"),"\u90e8\u5206\u4e0d\u80fd\u540c\u65f6\u6307\u5b9a. ",(0,l.kt)("inlineCode",{parentName:"p"},"\u4e3b\u4f53"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"\u9886\u57df"),"\u7684\u51fa\u73b0\u5c06\u8feb\u4f7fClickHouse\u7981\u7528Kerberos\u8eab\u4efd\u9a8c\u8bc1."),(0,l.kt)("h2",{id:"kerberos-as-an-external-authenticator-for-existing-users"},"Kerberos\u4f5c\u4e3a\u73b0\u6709\u7528\u6237\u7684\u5916\u90e8\u8eab\u4efd\u9a8c\u8bc1\u5668"),(0,l.kt)("p",null,"Kerberos\u53ef\u4ee5\u7528\u4f5c\u9a8c\u8bc1\u672c\u5730\u5b9a\u4e49\u7528\u6237(\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"users.xml"),"\u6216\u672c\u5730\u8bbf\u95ee\u63a7\u5236\u8def\u5f84\u4e2d\u5b9a\u4e49\u7684\u7528\u6237)\u8eab\u4efd\u7684\u65b9\u6cd5\u3002\u76ee\u524d\uff0c",(0,l.kt)("strong",{parentName:"p"},"\u53ea\u6709"),"\u901a\u8fc7HTTP\u63a5\u53e3\u7684\u8bf7\u6c42\u624d\u80fd\u88ab\u8ba4\u8bc1(\u901a\u8fc7GSS-SPNEGO\u673a\u5236)."),(0,l.kt)("p",null,"Kerberos\u4e3b\u4f53\u540d\u79f0\u683c\u5f0f\u901a\u5e38\u9075\u5faa\u4ee5\u4e0b\u6a21\u5f0f:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"primary/instance@REALM"))),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"/instance")," \u90e8\u5206\u53ef\u80fd\u51fa\u73b0\u96f6\u6b21\u6216\u591a\u6b21. ",(0,l.kt)("strong",{parentName:"p"},"\u53d1\u8d77\u8005\u7684\u89c4\u8303\u4e3b\u4f53\u540d\u79f0\u7684\u4e3b\u8981\u90e8\u5206\u5e94\u4e0e\u88ab\u8ba4\u8bc1\u7528\u6237\u540d\u5339\u914d, \u4ee5\u4fbf\u8eab\u4efd\u9a8c\u8bc1\u6210\u529f"),"."),(0,l.kt)("h3",{id:"enabling-kerberos-in-users-xml"},(0,l.kt)("inlineCode",{parentName:"h3"},"users.xml"),"\u4e2d\u542f\u7528Kerberos"),(0,l.kt)("p",null,"\u4e3a\u4e86\u542f\u7528\u7528\u6237\u7684 Kerberos \u8eab\u4efd\u9a8c\u8bc1, \u8bf7\u5728\u7528\u6237\u5b9a\u4e49\u4e2d\u6307\u5b9a ",(0,l.kt)("inlineCode",{parentName:"p"},"kerberos")," \u90e8\u5206\u800c\u4e0d\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"\u5bc6\u7801"),"\u6216\u7c7b\u4f3c\u90e8\u5206."),(0,l.kt)("p",null,"\u53c2\u6570:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"realm")," - \u7528\u4e8e\u5c06\u8eab\u4efd\u9a8c\u8bc1\u9650\u5236\u4e3a\u4ec5\u90a3\u4e9b\u53d1\u8d77\u8005\u7684\u9886\u57df\u4e0e\u5176\u5339\u914d\u7684\u8bf7\u6c42\u7684\u9886\u57df."),(0,l.kt)("li",{parentName:"ul"},"\u6b64\u53c2\u6570\u662f\u53ef\u9009\u7684, \u5982\u679c\u7701\u7565, \u5219\u4e0d\u4f1a\u5e94\u7528\u5176\u4ed6\u6309\u9886\u57df\u7684\u8fc7\u6ee4.")),(0,l.kt)("p",null,"\u793a\u4f8b (\u8fdb\u5165 ",(0,l.kt)("inlineCode",{parentName:"p"},"users.xml"),"):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"<yandex>\n    <!- ... --\x3e\n    <users>\n        <!- ... --\x3e\n        <my_user>\n            <!- ... --\x3e\n            <kerberos>\n                <realm>EXAMPLE.COM</realm>\n            </kerberos>\n        </my_user>\n    </users>\n</yandex>\n")),(0,l.kt)("p",null,'!!! warning "\u8b66\u544a"'),(0,l.kt)("p",null,"\u6ce8\u610f, Kerberos\u8eab\u4efd\u9a8c\u8bc1\u4e0d\u80fd\u4e0e\u4efb\u4f55\u5176\u4ed6\u8eab\u4efd\u9a8c\u8bc1\u673a\u5236\u4e00\u8d77\u4f7f\u7528. \u4efb\u4f55\u5176\u4ed6\u90e8\u5206(\u5982",(0,l.kt)("inlineCode",{parentName:"p"},"\u5bc6\u7801"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"kerberos"),")\u7684\u51fa\u73b0\u90fd\u4f1a\u8feb\u4f7fClickHouse\u5173\u95ed."),(0,l.kt)("p",null,'!!! info "\u63d0\u9192"'),(0,l.kt)("p",null,"\u8bf7\u6ce8\u610f, \u73b0\u5728, \u4e00\u65e6\u7528\u6237 ",(0,l.kt)("inlineCode",{parentName:"p"},"my_user")," \u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"kerberos"),", \u5fc5\u987b\u5728\u4e3b ",(0,l.kt)("inlineCode",{parentName:"p"},"config.xml")," \u6587\u4ef6\u4e2d\u542f\u7528 Kerberos\uff0c\u5982\u524d\u6240\u8ff0."),(0,l.kt)("h3",{id:"enabling-kerberos-using-sql"},"\u4f7f\u7528 SQL \u542f\u7528 Kerberos"),(0,l.kt)("p",null,"\u5728 ClickHouse \u4e2d\u542f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/access-rights/#access-control"},"SQL \u9a71\u52a8\u7684\u8bbf\u95ee\u63a7\u5236\u548c\u5e10\u6237\u7ba1\u7406"),"\u540e, \u4e5f\u53ef\u4ee5\u4f7f\u7528 SQL \u8bed\u53e5\u521b\u5efa\u7531 Kerberos \u8bc6\u522b\u7684\u7528\u6237."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE USER my_user IDENTIFIED WITH kerberos REALM 'EXAMPLE.COM'\n")),(0,l.kt)("p",null,"...\u6216\u8005, \u4e0d\u6309\u9886\u57df\u8fc7\u6ee4:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE USER my_user IDENTIFIED WITH kerberos\n")))}m.isMDXComponent=!0}}]);