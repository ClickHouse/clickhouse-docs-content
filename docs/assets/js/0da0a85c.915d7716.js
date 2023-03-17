"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[18793],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),p=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(a),k=n,f=m["".concat(o,".").concat(k)]||m[k]||u[k]||l;return a?r.createElement(f,s(s({ref:t},c),{},{components:a})):r.createElement(f,s({ref:t},c))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,s=new Array(l);s[0]=k;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[m]="string"==typeof e?e:n,s[1]=i;for(var p=2;p<l;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},80370:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const l={slug:"/zh/operations/access-rights",sidebar_position:48,sidebar_label:"\u8bbf\u95ee\u6743\u9650\u548c\u8d26\u6237\u7ba1\u7406"},s="\u8bbf\u95ee\u6743\u9650\u548c\u8d26\u6237\u7ba1\u7406",i={unversionedId:"zh/operations/access-rights",id:"zh/operations/access-rights",title:"\u8bbf\u95ee\u6743\u9650\u548c\u8d26\u6237\u7ba1\u7406",description:"access-rights}",source:"@site/docs/zh/operations/access-rights.md",sourceDirName:"zh/operations",slug:"/zh/operations/access-rights",permalink:"/docs/zh/operations/access-rights",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/operations/access-rights.md",tags:[],version:"current",sidebarPosition:48,frontMatter:{slug:"/zh/operations/access-rights",sidebar_position:48,sidebar_label:"\u8bbf\u95ee\u6743\u9650\u548c\u8d26\u6237\u7ba1\u7406"},sidebar:"chinese",previous:{title:"\u66f4\u65b0",permalink:"/docs/zh/operations/update"},next:{title:"External User Authenticators and Directories",permalink:"/docs/zh/operations/external-authenticators/"}},o={},p=[{value:"\u7528\u6cd5",id:"access-control-usage",level:2},{value:"\u5f53\u524d\u89e3\u51b3\u65b9\u6848\u7684\u7279\u6027",id:"access-control-properties",level:3},{value:"\u7528\u6237\u8d26\u6237",id:"user-account-management",level:2},{value:"\u8bbe\u7f6e\u5e94\u7528\u89c4\u5219",id:"access-control-settings-applying",level:3},{value:"\u89d2\u8272",id:"role-management",level:2},{value:"\u884c\u7b56\u7565",id:"row-policy-management",level:2},{value:"\u8bbe\u7f6e\u63cf\u8ff0",id:"settings-profiles-management",level:2},{value:"\u914d\u989d",id:"quotas-management",level:2},{value:"\u5f00\u542fSQL\u9a71\u52a8\u65b9\u5f0f\u7684\u8bbf\u95ee\u6743\u9650\u548c\u8d26\u6237\u7ba1\u7406",id:"enabling-access-control",level:2}],c={toc:p},m="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"access-rights"},"\u8bbf\u95ee\u6743\u9650\u548c\u8d26\u6237\u7ba1\u7406"),(0,n.kt)("p",null,"ClickHouse\u652f\u6301\u57fa\u4e8e",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Role-based_access_control"},"RBAC"),"\u7684\u8bbf\u95ee\u63a7\u5236\u7ba1\u7406\u3002"),(0,n.kt)("p",null,"ClickHouse\u6743\u9650\u5b9e\u4f53\u5305\u62ec\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#user-account-management"},"\u7528\u6237\u8d26\u6237")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#role-management"},"\u89d2\u8272")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#row-policy-management"},"\u884c\u7b56\u7565")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#settings-profiles-management"},"\u8bbe\u7f6e\u63cf\u8ff0")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#quotas-management"},"\u914d\u989d"))),(0,n.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u65b9\u5f0f\u914d\u7f6e\u6743\u9650\u5b9e\u4f53\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u901a\u8fc7SQL\u9a71\u52a8\u7684\u5de5\u4f5c\u6d41\u65b9\u5f0f."),(0,n.kt)("p",{parentName:"li"},"  \u4f60\u9700\u8981",(0,n.kt)("a",{parentName:"p",href:"#enabling-access-control"},"\u5f00\u542f"),"\u8fd9\u4e2a\u529f\u80fd.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u670d\u52a1\u7aef",(0,n.kt)("a",{parentName:"p",href:"/docs/zh/operations/configuration-files"},"\u914d\u7f6e\u6587\u4ef6")," ",(0,n.kt)("inlineCode",{parentName:"p"},"users.xml")," \u548c ",(0,n.kt)("inlineCode",{parentName:"p"},"config.xml"),"."))),(0,n.kt)("p",null,"\u6211\u4eec\u5efa\u8bae\u4f60\u4f7f\u7528SQL\u5de5\u4f5c\u6d41\u7684\u65b9\u5f0f\u3002\u5f53\u7136\u914d\u7f6e\u7684\u65b9\u5f0f\u4e5f\u53ef\u4ee5\u540c\u65f6\u8d77\u4f5c\u7528, \u6240\u4ee5\u5982\u679c\u4f60\u6b63\u5728\u7528\u670d\u52a1\u7aef\u914d\u7f6e\u7684\u65b9\u5f0f\u6765\u7ba1\u7406\u6743\u9650\u548c\u8d26\u6237\uff0c\u4f60\u53ef\u4ee5\u5e73\u6ed1\u7684\u5207\u6362\u5230SQL\u9a71\u52a8\u7684\u5de5\u4f5c\u6d41\u65b9\u5f0f\u3002"),(0,n.kt)("admonition",{type:"warning"},(0,n.kt)("p",{parentName:"admonition"},"\u4f60\u65e0\u6cd5\u540c\u65f6\u4f7f\u7528\u4e24\u4e2a\u914d\u7f6e\u7684\u65b9\u5f0f\u6765\u7ba1\u7406\u540c\u4e00\u4e2a\u6743\u9650\u5b9e\u4f53\u3002")),(0,n.kt)("h2",{id:"access-control-usage"},"\u7528\u6cd5"),(0,n.kt)("p",null,"\u9ed8\u8ba4ClickHouse\u63d0\u4f9b\u4e86\u4e00\u4e2a ",(0,n.kt)("inlineCode",{parentName:"p"},"default")," \u8d26\u53f7\uff0c\u8fd9\u4e2a\u8d26\u53f7\u6709\u6240\u6709\u7684\u6743\u9650\uff0c\u4f46\u662f\u4e0d\u80fd\u4f7f\u7528SQL\u9a71\u52a8\u65b9\u5f0f\u7684\u8bbf\u95ee\u6743\u9650\u548c\u8d26\u6237\u7ba1\u7406\u3002",(0,n.kt)("inlineCode",{parentName:"p"},"default"),"\u4e3b\u8981\u7528\u5728\u7528\u6237\u540d\u8fd8\u672a\u8bbe\u7f6e\u7684\u60c5\u51b5\uff0c\u6bd4\u5982\u4ece\u5ba2\u6237\u7aef\u767b\u5f55\u6216\u8005\u6267\u884c\u5206\u5e03\u5f0f\u67e5\u8be2\u3002\u5728\u5206\u5e03\u5f0f\u67e5\u8be2\u4e2d\u5982\u679c\u670d\u52a1\u7aef\u6216\u8005\u96c6\u7fa4\u6ca1\u6709\u6307\u5b9a",(0,n.kt)("a",{parentName:"p",href:"/docs/zh/engines/table-engines/special/distributed"},"\u7528\u6237\u540d\u5bc6\u7801"),"\u90a3\u9ed8\u8ba4\u7684\u8d26\u6237\u5c31\u4f1a\u88ab\u4f7f\u7528\u3002"),(0,n.kt)("p",null,"\u5982\u679c\u4f60\u521a\u5f00\u59cb\u4f7f\u7528ClickHouse\uff0c\u8003\u8651\u5982\u4e0b\u573a\u666f\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u4e3a ",(0,n.kt)("inlineCode",{parentName:"li"},"default")," \u7528\u6237",(0,n.kt)("a",{parentName:"li",href:"#enabling-access-control"},"\u5f00\u542fSQL\u9a71\u52a8\u65b9\u5f0f\u7684\u8bbf\u95ee\u6743\u9650\u548c\u8d26\u6237\u7ba1\u7406")," ."),(0,n.kt)("li",{parentName:"ol"},"\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"li"},"default")," \u7528\u6237\u767b\u5f55\u5e76\u4e14\u521b\u5efa\u6240\u9700\u8981\u7684\u6240\u6709\u7528\u6237\u3002 \u4e0d\u8981\u5fd8\u8bb0\u521b\u5efa\u7ba1\u7406\u5458\u8d26\u6237 (",(0,n.kt)("inlineCode",{parentName:"li"},"GRANT ALL ON *.* WITH GRANT OPTION TO admin_user_account"),")\u3002"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/docs/zh/operations/settings/permissions-for-queries#permissions_for_queries"},"\u9650\u5236")," ",(0,n.kt)("inlineCode",{parentName:"li"},"default")," \u7528\u6237\u7684\u6743\u9650\u5e76\u4e14\u7981\u7528SQL\u9a71\u52a8\u65b9\u5f0f\u7684\u8bbf\u95ee\u6743\u9650\u548c\u8d26\u6237\u7ba1\u7406\u3002")),(0,n.kt)("h3",{id:"access-control-properties"},"\u5f53\u524d\u89e3\u51b3\u65b9\u6848\u7684\u7279\u6027"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4f60\u751a\u81f3\u53ef\u4ee5\u5728\u6570\u636e\u5e93\u548c\u8868\u4e0d\u5b58\u5728\u7684\u65f6\u5019\u6388\u4e88\u6743\u9650\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5982\u679c\u8868\u88ab\u5220\u9664\uff0c\u548c\u8fd9\u5f20\u8868\u5173\u8054\u7684\u7279\u6743\u4e0d\u4f1a\u88ab\u5220\u9664\u3002\u8fd9\u610f\u5473\u7740\u5982\u679c\u4f60\u521b\u5efa\u4e00\u5f20\u540c\u540d\u7684\u8868\uff0c\u6240\u6709\u7684\u7279\u6743\u4ecd\u65e7\u6709\u6548\u3002\u5982\u679c\u60f3\u5220\u9664\u8fd9\u5f20\u8868\u5173\u8054\u7684\u7279\u6743\uff0c\u4f60\u53ef\u4ee5\u6267\u884c ",(0,n.kt)("inlineCode",{parentName:"li"},"REVOKE ALL PRIVILEGES ON db.table FROM ALL"),"  \u67e5\u8be2\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u7279\u6743\u6ca1\u6709\u751f\u547d\u5468\u671f\u3002")),(0,n.kt)("h2",{id:"user-account-management"},"\u7528\u6237\u8d26\u6237"),(0,n.kt)("p",null,"\u7528\u6237\u8d26\u6237\u662f\u6743\u9650\u5b9e\u4f53\uff0c\u7528\u6765\u6388\u6743\u64cd\u4f5cClickHouse\uff0c\u7528\u6237\u8d26\u6237\u5305\u542b\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u6807\u8bc6\u7b26\u4fe1\u606f\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/statements/grant#grant-privileges"},"\u7279\u6743"),"\u7528\u6765\u5b9a\u4e49\u7528\u6237\u53ef\u4ee5\u6267\u884c\u7684\u67e5\u8be2\u7684\u8303\u56f4\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u8fde\u63a5\u5230ClickHouse\u7684\u4e3b\u673a\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u6307\u5b9a\u6216\u8005\u9ed8\u8ba4\u7684\u89d2\u8272\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u7528\u6237\u767b\u5f55\u7684\u65f6\u5019\u9ed8\u8ba4\u7684\u9650\u5236\u8bbe\u7f6e\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u6307\u5b9a\u7684\u8bbe\u7f6e\u63cf\u8ff0\u3002")),(0,n.kt)("p",null,"\u7279\u6743\u53ef\u4ee5\u901a\u8fc7",(0,n.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/statements/grant"},"GRANT"),"\u67e5\u8be2\u6388\u6743\u7ed9\u7528\u6237\u6216\u8005\u901a\u8fc7",(0,n.kt)("a",{parentName:"p",href:"#role-management"},"\u89d2\u8272"),"\u6388\u4e88\u3002\u5982\u679c\u60f3\u64a4\u9500\u7279\u6743\uff0c\u53ef\u4ee5\u4f7f\u7528",(0,n.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/statements/revoke"},"REVOKE"),"\u67e5\u8be2\u3002\u67e5\u8be2\u7528\u6237\u6240\u6709\u7684\u7279\u6743\uff0c\u4f7f\u7528",(0,n.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/statements/show#show-grants-statement"},"SHOW GRANTS"),"\u8bed\u53e5\u3002"),(0,n.kt)("p",null,"\u67e5\u8be2\u7ba1\u7406\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/statements/create#create-user-statement"},"CREATE USER")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/statements/alter#alter-user-statement"},"ALTER USER")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/statements/misc#drop-user-statement"},"DROP USER")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/statements/show#show-create-user-statement"},"SHOW CREATE USER"))),(0,n.kt)("h3",{id:"access-control-settings-applying"},"\u8bbe\u7f6e\u5e94\u7528\u89c4\u5219"),(0,n.kt)("p",null,"\u5bf9\u4e8e\u4e00\u4e2a\u7528\u6237\u8d26\u6237\u6765\u8bf4\uff0c\u8bbe\u7f6e\u53ef\u4ee5\u901a\u8fc7\u591a\u79cd\u65b9\u5f0f\u914d\u7f6e\uff1a\u901a\u8fc7\u89d2\u8272\u626e\u6f14\u548c\u8bbe\u7f6e\u63cf\u8ff0\u3002\u5bf9\u4e8e\u4e00\u4e2a\u767b\u9646\u7684\u8d26\u53f7\u6765\u8bf4\uff0c\u5982\u679c\u4e00\u4e2a\u8bbe\u7f6e\u5bf9\u5e94\u4e86\u591a\u4e2a\u4e0d\u540c\u7684\u6743\u9650\u5b9e\u4f53\uff0c\u8fd9\u4e9b\u8bbe\u7f6e\u7684\u5e94\u7528\u89c4\u5219\u5982\u4e0b\uff08\u4f18\u5148\u6743\u4ece\u9ad8\u5230\u5e95\uff09\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u7528\u6237\u8d26\u6237\u8bbe\u7f6e\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u7528\u6237\u8d26\u53f7\u9ed8\u8ba4\u7684\u89d2\u8272\u8bbe\u7f6e\u3002\u5982\u679c\u8fd9\u4e2a\u8bbe\u7f6e\u914d\u7f6e\u4e86\u591a\u4e2a\u89d2\u8272\uff0c\u90a3\u8bbe\u7f6e\u7684\u5e94\u7528\u662f\u6ca1\u6709\u89c4\u5b9a\u7684\u987a\u5e8f\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u4ece\u8bbe\u7f6e\u63cf\u8ff0\u5206\u6279\u7ed9\u7528\u6237\u6216\u8005\u89d2\u8272\u7684\u8bbe\u7f6e\u3002\u5982\u679c\u8fd9\u4e2a\u8bbe\u7f6e\u914d\u7f6e\u4e86\u591a\u4e2a\u89d2\u8272\uff0c\u90a3\u8bbe\u7f6e\u7684\u5e94\u7528\u662f\u6ca1\u6709\u89c4\u5b9a\u7684\u987a\u5e8f\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u5bf9\u6240\u6709\u670d\u52a1\u5668\u6709\u6548\u7684\u9ed8\u8ba4\u6216\u8005",(0,n.kt)("a",{parentName:"li",href:"/docs/zh/operations/server-configuration-parameters/settings#default-profile"},"default profile"),"\u7684\u8bbe\u7f6e\u3002")),(0,n.kt)("h2",{id:"role-management"},"\u89d2\u8272"),(0,n.kt)("p",null,"\u89d2\u8272\u662f\u6743\u9650\u5b9e\u4f53\u7684\u96c6\u5408\uff0c\u53ef\u4ee5\u88ab\u6388\u4e88\u7528\u6237\u8d26\u53f7\u3002"),(0,n.kt)("p",null,"\u89d2\u8272\u5305\u62ec\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/statements/grant#grant-privileges"},"\u7279\u6743")),(0,n.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e\u548c\u9650\u5236"),(0,n.kt)("li",{parentName:"ul"},"\u5206\u914d\u7684\u89d2\u8272\u5217\u8868")),(0,n.kt)("p",null,"\u67e5\u8be2\u7ba1\u7406:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/statements/create#create-role-statement"},"CREATE ROLE")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/statements/alter#alter-role-statement"},"ALTER ROLE")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/statements/misc#drop-role-statement"},"DROP ROLE")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/statements/misc#set-role-statement"},"SET ROLE")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/statements/misc#set-default-role-statement"},"SET DEFAULT ROLE")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/statements/show#show-create-role-statement"},"SHOW CREATE ROLE"))),(0,n.kt)("p",null,"\u4f7f\u7528",(0,n.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/statements/grant"},"GRANT")," \u67e5\u8be2\u53ef\u4ee5\u628a\u7279\u6743\u6388\u4e88\u7ed9\u89d2\u8272\u3002\u7528",(0,n.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/statements/revoke"},"REVOKE"),"\u6765\u64a4\u56de\u7279\u6743\u3002"),(0,n.kt)("h2",{id:"row-policy-management"},"\u884c\u7b56\u7565"),(0,n.kt)("p",null,"\u884c\u7b56\u7565\u662f\u4e00\u4e2a\u8fc7\u6ee4\u5668\uff0c\u7528\u6765\u5b9a\u4e49\u54ea\u4e9b\u884c\u6570\u636e\u53ef\u4ee5\u88ab\u8d26\u6237\u6216\u8005\u89d2\u8272\u8bbf\u95ee\u3002\u5bf9\u4e00\u4e2a\u7279\u5b9a\u7684\u8868\u6765\u8bf4\uff0c\u884c\u7b56\u7565\u5305\u62ec\u8fc7\u6ee4\u5668\u548c\u4f7f\u7528\u8fd9\u4e2a\u7b56\u7565\u7684\u8d26\u6237\u548c\u89d2\u8272\u3002"),(0,n.kt)("p",null,"\u67e5\u8be2\u7ba1\u7406\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/statements/create#create-row-policy-statement"},"CREATE ROW POLICY")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/statements/alter#alter-row-policy-statement"},"ALTER ROW POLICY")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/statements/misc#drop-row-policy-statement"},"DROP ROW POLICY")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/statements/show#show-create-row-policy-statement"},"SHOW CREATE ROW POLICY"))),(0,n.kt)("h2",{id:"settings-profiles-management"},"\u8bbe\u7f6e\u63cf\u8ff0"),(0,n.kt)("p",null,"\u8bbe\u7f6e\u63cf\u8ff0\u662f",(0,n.kt)("a",{parentName:"p",href:"/docs/zh/operations/settings/"},"\u8bbe\u7f6e"),"\u7684\u6c47\u603b\u3002\u8bbe\u7f6e\u6c47\u603b\u5305\u62ec\u8bbe\u7f6e\u548c\u9650\u5236\uff0c\u5f53\u7136\u4e5f\u5305\u62ec\u8fd9\u4e9b\u63cf\u8ff0\u7684\u5bf9\u8c61\uff1a\u89d2\u8272\u548c\u8d26\u6237\u3002"),(0,n.kt)("p",null,"\u67e5\u8be2\u7ba1\u7406:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/statements/create#create-settings-profile-statement"},"CREATE SETTINGS PROFILE")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/statements/alter#alter-settings-profile-statement"},"ALTER SETTINGS PROFILE")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/statements/misc#drop-settings-profile-statement"},"DROP SETTINGS PROFILE")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/statements/show#show-create-settings-profile-statement"},"SHOW CREATE SETTINGS PROFILE"))),(0,n.kt)("h2",{id:"quotas-management"},"\u914d\u989d"),(0,n.kt)("p",null,"\u914d\u989d\u7528\u6765\u9650\u5236\u8d44\u6e90\u7684\u4f7f\u7528\u60c5\u51b5\u3002\u53c2\u8003",(0,n.kt)("a",{parentName:"p",href:"/docs/zh/operations/quotas"},"\u914d\u989d"),"."),(0,n.kt)("p",null,"\u914d\u989d\u5305\u62ec\u7279\u5b9a\u65f6\u95f4\u7684\u9650\u5236\u6761\u4ef6\u548c\u4f7f\u7528\u8fd9\u4e2a\u914d\u989d\u7684\u8d26\u6237\u548c\u89d2\u8272\u3002"),(0,n.kt)("p",null,"Management queries:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/statements/create#create-quota-statement"},"CREATE QUOTA")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/statements/alter#alter-quota-statement"},"ALTER QUOTA")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/statements/misc#drop-quota-statement"},"DROP QUOTA")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/statements/show#show-create-quota-statement"},"SHOW CREATE QUOTA"))),(0,n.kt)("h2",{id:"enabling-access-control"},"\u5f00\u542fSQL\u9a71\u52a8\u65b9\u5f0f\u7684\u8bbf\u95ee\u6743\u9650\u548c\u8d26\u6237\u7ba1\u7406"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u4e3a\u914d\u7f6e\u7684\u5b58\u50a8\u8bbe\u7f6e\u4e00\u4e2a\u76ee\u5f55."),(0,n.kt)("p",{parentName:"li"},"  ClickHouse\u628a\u8bbf\u95ee\u5b9e\u4f53\u7684\u76f8\u5173\u914d\u7f6e\u5b58\u50a8\u5728",(0,n.kt)("a",{parentName:"p",href:"/docs/zh/operations/server-configuration-parameters/settings#access_control_path"},"\u8bbf\u95ee\u63a7\u5236\u76ee\u5f55"),"\uff0c\u800c\u8fd9\u4e2a\u76ee\u5f55\u53ef\u4ee5\u901a\u8fc7\u670d\u52a1\u7aef\u8fdb\u884c\u914d\u7f6e.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u4e3a\u81f3\u5c11\u4e00\u4e2a\u8d26\u6237\u5f00\u542fSQL\u9a71\u52a8\u65b9\u5f0f\u7684\u8bbf\u95ee\u6743\u9650\u548c\u8d26\u6237\u7ba1\u7406."),(0,n.kt)("p",{parentName:"li"},"   \u9ed8\u8ba4\u60c5\u51b5\uff0cSQL\u9a71\u52a8\u65b9\u5f0f\u7684\u8bbf\u95ee\u6743\u9650\u548c\u8d26\u6237\u7ba1\u7406\u5bf9\u6240\u6709\u7528\u6237\u90fd\u662f\u5173\u95ed\u7684\u3002\u4f60\u9700\u8981\u5728 ",(0,n.kt)("inlineCode",{parentName:"p"},"users.xml")," \u4e2d\u914d\u7f6e\u81f3\u5c11\u4e00\u4e2a\u7528\u6237\uff0c\u5e76\u4e14\u628a",(0,n.kt)("a",{parentName:"p",href:"/docs/zh/operations/settings/settings-users#access_management-user-setting"},"\u6743\u9650\u7ba1\u7406"),"\u7684\u503c\u8bbe\u7f6e\u4e3a1\u3002"))))}u.isMDXComponent=!0}}]);