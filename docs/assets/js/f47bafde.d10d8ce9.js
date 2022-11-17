"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[1937],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(t),f=o,d=m["".concat(l,".").concat(f)]||m[f]||u[f]||i;return t?r.createElement(d,a(a({ref:n},c),{},{components:t})):r.createElement(d,a({ref:n},c))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},88753:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var r=t(87462),o=(t(67294),t(3905));const i={slug:"/zh/operations/configuration-files"},a="\u914d\u7f6e\u6587\u4ef6",p={unversionedId:"zh/operations/configuration-files",id:"zh/operations/configuration-files",title:"\u914d\u7f6e\u6587\u4ef6",description:"configuration_files}",source:"@site/docs/zh/operations/configuration-files.md",sourceDirName:"zh/operations",slug:"/zh/operations/configuration-files",permalink:"/docs/zh/operations/configuration-files",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/operations/configuration-files.md",tags:[],version:"current",frontMatter:{slug:"/zh/operations/configuration-files"},sidebar:"chinese",previous:{title:"External Disks for Storing Data",permalink:"/docs/zh/operations/storing-data"},next:{title:"\u67e5\u8be2\u5206\u6790",permalink:"/docs/zh/operations/optimizing-performance/sampling-query-profiler"}},l={},s=[],c={toc:s};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"configuration_files"},"\u914d\u7f6e\u6587\u4ef6"),(0,o.kt)("p",null,"ClickHouse\u652f\u6301\u591a\u914d\u7f6e\u6587\u4ef6\u7ba1\u7406\u3002\u4e3b\u914d\u7f6e\u6587\u4ef6\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/clickhouse-server/config.xml"),"\u3002\u5176\u4f59\u6587\u4ef6\u987b\u5728\u76ee\u5f55",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/clickhouse-server/config.d"),"\u3002"),(0,o.kt)("p",null,"!!! \u6ce8\u610f\uff1a\n\u6240\u6709\u914d\u7f6e\u6587\u4ef6\u5fc5\u987b\u662fXML\u683c\u5f0f\u3002\u6b64\u5916\uff0c\u914d\u7f6e\u6587\u4ef6\u987b\u6709\u76f8\u540c\u7684\u6839\u5143\u7d20\uff0c\u901a\u5e38\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"<clickhouse>"),"\u3002"),(0,o.kt)("p",null,"\u4e3b\u914d\u7f6e\u6587\u4ef6\u4e2d\u7684\u4e00\u4e9b\u914d\u7f6e\u53ef\u4ee5\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"p"},"replace"),"\u6216",(0,o.kt)("inlineCode",{parentName:"p"},"remove"),"\u5c5e\u6027\u88ab\u914d\u7f6e\u6587\u4ef6\u8986\u76d6\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u4e24\u8005\u90fd\u672a\u6307\u5b9a\uff0c\u5219\u9012\u5f52\u7ec4\u5408\u914d\u7f6e\u7684\u5185\u5bb9\uff0c\u66ff\u6362\u91cd\u590d\u5b50\u9879\u7684\u503c\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u6307\u5b9a",(0,o.kt)("inlineCode",{parentName:"p"},"replace"),"\u5c5e\u6027\uff0c\u5219\u5c06\u6574\u4e2a\u5143\u7d20\u66ff\u6362\u4e3a\u6307\u5b9a\u7684\u5143\u7d20\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u6307\u5b9a",(0,o.kt)("inlineCode",{parentName:"p"},"remove"),"\u5c5e\u6027\uff0c\u5219\u5220\u9664\u8be5\u5143\u7d20\u3002"),(0,o.kt)("p",null,'\u6b64\u5916\uff0c\u914d\u7f6e\u6587\u4ef6\u8fd8\u53ef\u6307\u5b9a"substitutions"\u3002\u5982\u679c\u4e00\u4e2a\u5143\u7d20\u6709',(0,o.kt)("inlineCode",{parentName:"p"},"incl"),"\u5c5e\u6027\uff0c\u5219\u6587\u4ef6\u4e2d\u7684\u76f8\u5e94\u66ff\u6362\u503c\u5c06\u88ab\u4f7f\u7528\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5177\u6709\u66ff\u6362\u7684\u6587\u4ef6\u7684\u8def\u5f84\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/metrika.xml"),"\u3002\u8fd9\u53ef\u4ee5\u5728\u670d\u52a1\u914d\u7f6e\u4e2d\u7684",(0,o.kt)("a",{parentName:"p",href:"/docs/zh/operations/server-configuration-parameters/settings#server_configuration_parameters-include_from"},"include_from"),"\u5143\u7d20\u4e2d\u88ab\u4fee\u6539\u3002\u66ff\u6362\u503c\u5728\u8fd9\u4e2a\u6587\u4ef6\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"/clickhouse/substitution_name"),"\u5143\u7d20\u4e2d\u88ab\u6307\u5b9a\u3002\u5982\u679c",(0,o.kt)("inlineCode",{parentName:"p"},"incl"),"\u4e2d\u6307\u5b9a\u7684\u66ff\u6362\u503c\u4e0d\u5b58\u5728\uff0c\u5219\u5c06\u5176\u8bb0\u5f55\u5728\u65e5\u5fd7\u4e2d\u3002\u4e3a\u9632\u6b62ClickHouse\u8bb0\u5f55\u4e22\u5931\u7684\u66ff\u6362\uff0c\u8bf7\u6307\u5b9a",(0,o.kt)("inlineCode",{parentName:"p"},'optional="true"'),"\u5c5e\u6027\uff08\u4f8b\u5982\uff0c",(0,o.kt)("a",{parentName:"p",href:"/docs/zh/operations/server-configuration-parameters/settings"},"\u5b8f"),"\u8bbe\u7f6e\uff09\u3002"),(0,o.kt)("p",null,"\u66ff\u6362\u4e5f\u53ef\u4ee5\u4eceZooKeeper\u6267\u884c\u3002\u4e3a\u6b64\uff0c\u8bf7\u6307\u5b9a\u5c5e\u6027",(0,o.kt)("inlineCode",{parentName:"p"},'from_zk = "/path/to/node"'),"\u3002\u5143\u7d20\u503c\u88ab\u66ff\u6362\u4e3aZooKeeper\u8282\u70b9",(0,o.kt)("inlineCode",{parentName:"p"},"/path/to/node"),"\u7684\u5185\u5bb9\u3002\u60a8\u8fd8\u53ef\u4ee5\u5c06\u6574\u4e2aXML\u5b50\u6811\u653e\u5728ZooKeeper\u8282\u70b9\u4e0a\uff0c\u5e76\u5c06\u5176\u5b8c\u5168\u63d2\u5165\u5230\u6e90\u5143\u7d20\u4e2d\u3002"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"config.xml")," \u6587\u4ef6\u53ef\u4ee5\u6307\u5b9a\u5355\u72ec\u7684\u914d\u7f6e\u6587\u4ef6\u7528\u4e8e\u914d\u7f6e\u7528\u6237\u8bbe\u7f6e\u3001\u914d\u7f6e\u6587\u4ef6\u53ca\u914d\u989d\u3002\u53ef\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"users_config"),"\u5143\u7d20\u4e2d\u6307\u5b9a\u5176\u914d\u7f6e\u6587\u4ef6\u76f8\u5bf9\u8def\u5f84\u3002\u5176\u9ed8\u8ba4\u503c\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"users.xml"),"\u3002\u5982\u679c",(0,o.kt)("inlineCode",{parentName:"p"},"users_config"),"\u88ab\u7701\u7565\uff0c\u7528\u6237\u8bbe\u7f6e\uff0c\u914d\u7f6e\u6587\u4ef6\u548c\u914d\u989d\u5219\u76f4\u63a5\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"config.xml"),"\u4e2d\u6307\u5b9a\u3002"),(0,o.kt)("p",null,"\u7528\u6237\u914d\u7f6e\u53ef\u4ee5\u5206\u4e3a\u5982",(0,o.kt)("inlineCode",{parentName:"p"},"config.xml"),"\u548c",(0,o.kt)("inlineCode",{parentName:"p"},"config.d/"),"\u7b49\u5f62\u5f0f\u7684\u5355\u72ec\u914d\u7f6e\u6587\u4ef6\u3002\u76ee\u5f55\u540d\u79f0\u4e3a\u914d\u7f6e",(0,o.kt)("inlineCode",{parentName:"p"},"user_config"),"\u7684\u503c\uff0c\u53bb\u6389",(0,o.kt)("inlineCode",{parentName:"p"},".xml"),"\u540e\u7f00\u5e76\u4e0e\u6dfb\u52a0",(0,o.kt)("inlineCode",{parentName:"p"},".d"),"\u3002\u7531\u4e8e",(0,o.kt)("inlineCode",{parentName:"p"},"users_config"),"\u914d\u7f6e\u9ed8\u8ba4\u503c\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"users.xml"),"\uff0c\u6240\u4ee5\u76ee\u5f55\u540d\u9ed8\u8ba4\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"users.d"),"\u3002\u4f8b\u5982\uff0c\u60a8\u53ef\u4ee5\u4e3a\u6bcf\u4e2a\u7528\u6237\u6709\u5355\u72ec\u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ cat /etc/clickhouse-server/users.d/alice.xml\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<clickhouse>\n    <users>\n      <alice>\n          <profile>analytics</profile>\n            <networks>\n                  <ip>::/0</ip>\n            </networks>\n          <password_sha256_hex>...</password_sha256_hex>\n          <quota>analytics</quota>\n      </alice>\n    </users>\n</clickhouse>\n")),(0,o.kt)("p",null,"\u5bf9\u4e8e\u6bcf\u4e2a\u914d\u7f6e\u6587\u4ef6\uff0c\u670d\u52a1\u5668\u8fd8\u4f1a\u5728\u542f\u52a8\u65f6\u751f\u6210 ",(0,o.kt)("inlineCode",{parentName:"p"},"file-preprocessed.xml")," \u6587\u4ef6\u3002\u8fd9\u4e9b\u6587\u4ef6\u5305\u542b\u6240\u6709\u5df2\u5b8c\u6210\u7684\u66ff\u6362\u548c\u590d\u76d6\uff0c\u5e76\u4e14\u5b83\u4eec\u65e8\u5728\u63d0\u4f9b\u4fe1\u606f\u3002\u5982\u679czookeeper\u66ff\u6362\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u4f7f\u7528\uff0c\u4f46ZooKeeper\u5728\u670d\u52a1\u5668\u542f\u52a8\u65f6\u4e0d\u53ef\u7528\uff0c\u5219\u670d\u52a1\u5668\u5c06\u4ece\u9884\u5904\u7406\u7684\u6587\u4ef6\u4e2d\u52a0\u8f7d\u914d\u7f6e\u3002"),(0,o.kt)("p",null,"\u670d\u52a1\u5668\u8ddf\u8e2a\u914d\u7f6e\u6587\u4ef6\u4e2d\u7684\u66f4\u6539\uff0c\u4ee5\u53ca\u6267\u884c\u66ff\u6362\u548c\u590d\u76d6\u65f6\u4f7f\u7528\u7684\u6587\u4ef6\u548cZooKeeper\u8282\u70b9\uff0c\u5e76\u52a8\u6001\u91cd\u65b0\u52a0\u8f7d\u7528\u6237\u548c\u96c6\u7fa4\u7684\u8bbe\u7f6e\u3002 \u8fd9\u610f\u5473\u7740\u60a8\u53ef\u4ee5\u5728\u4e0d\u91cd\u65b0\u542f\u52a8\u670d\u52a1\u5668\u7684\u60c5\u51b5\u4e0b\u4fee\u6539\u7fa4\u96c6\u3001\u7528\u6237\u53ca\u5176\u8bbe\u7f6e\u3002"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/configuration_files/"},"\u539f\u59cb\u6587\u7ae0")," "))}u.isMDXComponent=!0}}]);