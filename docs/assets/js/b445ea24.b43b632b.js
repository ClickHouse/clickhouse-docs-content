"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[50060],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=a,d=u["".concat(s,".").concat(m)]||u[m]||g[m]||o;return t?r.createElement(d,i(i({ref:n},c),{},{components:t})):r.createElement(d,i({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1788:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=t(87462),a=(t(67294),t(3905));const o={slug:"/zh/engines/table-engines/integrations/mongodb",sidebar_position:5,sidebar_label:"MongoDB"},i="MongoDB",l={unversionedId:"zh/engines/table-engines/integrations/mongodb",id:"zh/engines/table-engines/integrations/mongodb",title:"MongoDB",description:"mongodb}",source:"@site/docs/zh/engines/table-engines/integrations/mongodb.md",sourceDirName:"zh/engines/table-engines/integrations",slug:"/zh/engines/table-engines/integrations/mongodb",permalink:"/docs/zh/engines/table-engines/integrations/mongodb",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/engines/table-engines/integrations/mongodb.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{slug:"/zh/engines/table-engines/integrations/mongodb",sidebar_position:5,sidebar_label:"MongoDB"},sidebar:"chinese",previous:{title:"Hive",permalink:"/docs/zh/engines/table-engines/integrations/hive"},next:{title:"S3",permalink:"/docs/zh/engines/table-engines/integrations/s3"}},s={},p=[{value:"\u521b\u5efa\u4e00\u5f20\u8868",id:"creating-a-table",level:2},{value:"\u7528\u6cd5\u793a\u4f8b",id:"usage-example",level:2}],c={toc:p};function g(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mongodb"},"MongoDB"),(0,a.kt)("p",null,"MongoDB \u5f15\u64ce\u662f\u53ea\u8bfb\u8868\u5f15\u64ce\uff0c\u5141\u8bb8\u4ece\u8fdc\u7a0b MongoDB \u96c6\u5408\u4e2d\u8bfb\u53d6\u6570\u636e(",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT"),"\u67e5\u8be2)\u3002\u5f15\u64ce\u53ea\u652f\u6301\u975e\u5d4c\u5957\u7684\u6570\u636e\u7c7b\u578b\u3002\u4e0d\u652f\u6301 ",(0,a.kt)("inlineCode",{parentName:"p"},"INSERT")," \u67e5\u8be2\u3002"),(0,a.kt)("h2",{id:"creating-a-table"},"\u521b\u5efa\u4e00\u5f20\u8868"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE [IF NOT EXISTS] [db.]table_name\n(\n    name1 [type1],\n    name2 [type2],\n    ...\n) ENGINE = MongoDB(host:port, database, collection, user, password);\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5f15\u64ce\u53c2\u6570")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"host:port")," \u2014 MongoDB \u670d\u52a1\u5668\u5730\u5740.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"database")," \u2014 \u6570\u636e\u5e93\u540d\u79f0.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"collection")," \u2014  \u96c6\u5408\u540d\u79f0.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"user")," \u2014 MongoDB \u7528\u6237.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"password")," \u2014 \u7528\u6237\u5bc6\u7801."))),(0,a.kt)("h2",{id:"usage-example"},"\u7528\u6cd5\u793a\u4f8b"),(0,a.kt)("p",null,"ClickHouse \u4e2d\u7684\u8868\uff0c\u4ece MongoDB \u96c6\u5408\u4e2d\u8bfb\u53d6\u6570\u636e:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"CREATE TABLE mongo_table\n(\n    key UInt64,\n    data String\n) ENGINE = MongoDB('mongo1:27017', 'test', 'simple_table', 'testuser', 'clickhouse');\n")),(0,a.kt)("p",null,"\u67e5\u8be2:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT COUNT() FROM mongo_table;\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500count()\u2500\u2510\n\u2502       4 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/engines/table-engines/integrations/mongodb/"},"\u539f\u59cb\u6587\u7ae0")," "))}g.isMDXComponent=!0}}]);