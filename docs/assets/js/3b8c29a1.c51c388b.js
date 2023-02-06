"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[78367],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>y});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(t),d=i,y=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return t?r.createElement(y,l(l({ref:n},c),{},{components:t})):r.createElement(y,l({ref:n},c))}));function y(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},32073:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var r=t(87462),i=(t(67294),t(3905));const a={slug:"/zh/engines/table-engines/integrations/mysql"},l="MySQL",o={unversionedId:"zh/engines/table-engines/integrations/mysql",id:"zh/engines/table-engines/integrations/mysql",title:"MySQL",description:"mysql}",source:"@site/docs/zh/engines/table-engines/integrations/mysql.md",sourceDirName:"zh/engines/table-engines/integrations",slug:"/zh/engines/table-engines/integrations/mysql",permalink:"/docs/zh/engines/table-engines/integrations/mysql",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/engines/table-engines/integrations/mysql.md",tags:[],version:"current",frontMatter:{slug:"/zh/engines/table-engines/integrations/mysql"},sidebar:"chinese",previous:{title:"Kafka",permalink:"/docs/zh/engines/table-engines/integrations/kafka"},next:{title:"\u5206\u5e03\u5f0f\u5f15\u64ce",permalink:"/docs/zh/engines/table-engines/special/distributed"}},s={},p=[],c={toc:p},u="wrapper";function m(e){let{components:n,...t}=e;return(0,i.kt)(u,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"mysql"},"MySQL"),(0,i.kt)("p",null,"MySQL \u5f15\u64ce\u53ef\u4ee5\u5bf9\u5b58\u50a8\u5728\u8fdc\u7a0b MySQL \u670d\u52a1\u5668\u4e0a\u7684\u6570\u636e\u6267\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT")," \u67e5\u8be2\u3002"),(0,i.kt)("p",null,"\u8c03\u7528\u683c\u5f0f\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"MySQL('host:port', 'database', 'table', 'user', 'password'[, replace_query, 'on_duplicate_clause']);\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u8c03\u7528\u53c2\u6570")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"host:port")," \u2014 MySQL \u670d\u52a1\u5668\u5730\u5740\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"database")," \u2014 \u6570\u636e\u5e93\u7684\u540d\u79f0\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"table")," \u2014 \u8868\u540d\u79f0\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"user")," \u2014 \u6570\u636e\u5e93\u7528\u6237\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"password")," \u2014 \u7528\u6237\u5bc6\u7801\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"replace_query")," \u2014 \u5c06 ",(0,i.kt)("inlineCode",{parentName:"li"},"INSERT INTO")," \u67e5\u8be2\u662f\u5426\u66ff\u6362\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"REPLACE INTO")," \u7684\u6807\u5fd7\u3002\u5982\u679c ",(0,i.kt)("inlineCode",{parentName:"li"},"replace_query=1"),"\uff0c\u5219\u66ff\u6362\u67e5\u8be2"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"'on_duplicate_clause'")," \u2014 \u5c06 ",(0,i.kt)("inlineCode",{parentName:"li"},"ON DUPLICATE KEY UPDATE 'on_duplicate_clause'")," \u8868\u8fbe\u5f0f\u6dfb\u52a0\u5230 ",(0,i.kt)("inlineCode",{parentName:"li"},"INSERT")," \u67e5\u8be2\u8bed\u53e5\u4e2d\u3002\u4f8b\u5982\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"impression = VALUES(impression) + impression"),"\u3002\u5982\u679c\u9700\u8981\u6307\u5b9a ",(0,i.kt)("inlineCode",{parentName:"li"},"'on_duplicate_clause'"),"\uff0c\u5219\u9700\u8981\u8bbe\u7f6e ",(0,i.kt)("inlineCode",{parentName:"li"},"replace_query=0"),"\u3002\u5982\u679c\u540c\u65f6\u8bbe\u7f6e ",(0,i.kt)("inlineCode",{parentName:"li"},"replace_query = 1")," \u548c ",(0,i.kt)("inlineCode",{parentName:"li"},"'on_duplicate_clause'"),"\uff0c\u5219\u4f1a\u629b\u51fa\u5f02\u5e38\u3002")),(0,i.kt)("p",null,"\u6b64\u65f6\uff0c\u7b80\u5355\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"WHERE")," \u5b50\u53e5\uff08\u4f8b\u5982 ",(0,i.kt)("inlineCode",{parentName:"p"},"=, !=, >, >=, <, <="),"\uff09\u662f\u5728 MySQL \u670d\u52a1\u5668\u4e0a\u6267\u884c\u3002"),(0,i.kt)("p",null,"\u5176\u4f59\u6761\u4ef6\u4ee5\u53ca ",(0,i.kt)("inlineCode",{parentName:"p"},"LIMIT")," \u91c7\u6837\u7ea6\u675f\u8bed\u53e5\u4ec5\u5728\u5bf9MySQL\u7684\u67e5\u8be2\u5b8c\u6210\u540e\u624d\u5728ClickHouse\u4e2d\u6267\u884c\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"MySQL")," \u5f15\u64ce\u4e0d\u652f\u6301 ",(0,i.kt)("a",{parentName:"p",href:"/docs/zh/engines/table-engines/integrations/mysql"},"\u53ef\u4e3a\u7a7a")," \u6570\u636e\u7c7b\u578b\uff0c\u56e0\u6b64\uff0c\u5f53\u4eceMySQL\u8868\u4e2d\u8bfb\u53d6\u6570\u636e\u65f6\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"NULL")," \u5c06\u8f6c\u6362\u4e3a\u6307\u5b9a\u5217\u7c7b\u578b\u7684\u9ed8\u8ba4\u503c\uff08\u901a\u5e38\u4e3a0\u6216\u7a7a\u5b57\u7b26\u4e32\uff09\u3002"))}m.isMDXComponent=!0}}]);