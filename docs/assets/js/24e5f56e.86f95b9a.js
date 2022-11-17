"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[96137],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=i,f=u["".concat(o,".").concat(m)]||u[m]||p[m]||a;return n?r.createElement(f,l(l({ref:t},d),{},{components:n})):r.createElement(f,l({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=u;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:i,l[1]=c;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},99925:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(87462),i=(n(67294),n(3905));const a={slug:"/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-lifetime",machine_translated:!0,machine_translated_rev:"72537a2d527c63c07aa5d2361a8829f3895cf2bd",sidebar_position:42,sidebar_label:"\u5b57\u5178\u66f4\u65b0"},l="\u5b57\u5178\u66f4\u65b0",c={unversionedId:"zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-lifetime",id:"zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-lifetime",title:"\u5b57\u5178\u66f4\u65b0",description:"dictionary-updates}",source:"@site/docs/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-lifetime.md",sourceDirName:"zh/sql-reference/dictionaries/external-dictionaries",slug:"/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-lifetime",permalink:"/docs/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-lifetime",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-lifetime.md",tags:[],version:"current",sidebarPosition:42,frontMatter:{slug:"/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-lifetime",machine_translated:!0,machine_translated_rev:"72537a2d527c63c07aa5d2361a8829f3895cf2bd",sidebar_position:42,sidebar_label:"\u5b57\u5178\u66f4\u65b0"},sidebar:"chinese",previous:{title:"\u5728\u5185\u5b58\u4e2d\u5b58\u50a8\u5b57\u5178",permalink:"/docs/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-layout"},next:{title:"\u5916\u90e8\u5b57\u5178\u7684\u6765\u6e90",permalink:"/docs/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-sources"}},o={},s=[],d={toc:s};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"dictionary-updates"},"\u5b57\u5178\u66f4\u65b0"),(0,i.kt)("p",null,"ClickHouse\u5b9a\u671f\u66f4\u65b0\u5b57\u5178\u3002 \u5b8c\u5168\u4e0b\u8f7d\u5b57\u5178\u7684\u66f4\u65b0\u95f4\u9694\u548c\u7f13\u5b58\u5b57\u5178\u7684\u65e0\u6548\u95f4\u9694\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"<lifetime>")," \u5728\u51e0\u79d2\u949f\u5185\u6807\u8bb0\u3002"),(0,i.kt)("p",null,"\u5b57\u5178\u66f4\u65b0\uff08\u9664\u9996\u6b21\u4f7f\u7528\u7684\u52a0\u8f7d\u4e4b\u5916\uff09\u4e0d\u4f1a\u963b\u6b62\u67e5\u8be2\u3002 \u5728\u66f4\u65b0\u671f\u95f4\uff0c\u5c06\u4f7f\u7528\u65e7\u7248\u672c\u7684\u5b57\u5178\u3002 \u5982\u679c\u5728\u66f4\u65b0\u8fc7\u7a0b\u4e2d\u53d1\u751f\u9519\u8bef\uff0c\u5219\u5c06\u9519\u8bef\u5199\u5165\u670d\u52a1\u5668\u65e5\u5fd7\uff0c\u5e76\u4f7f\u7528\u65e7\u7248\u672c\u7684\u5b57\u5178\u7ee7\u7eed\u67e5\u8be2\u3002"),(0,i.kt)("p",null,"\u8bbe\u7f6e\u793a\u4f8b:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<dictionary>\n    ...\n    <lifetime>300</lifetime>\n    ...\n</dictionary>\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DICTIONARY (...)\n...\nLIFETIME(300)\n...\n")),(0,i.kt)("p",null,"\u8bbe\u7f6e ",(0,i.kt)("inlineCode",{parentName:"p"},"<lifetime>0</lifetime>")," (",(0,i.kt)("inlineCode",{parentName:"p"},"LIFETIME(0)"),"\uff09\u9632\u6b62\u5b57\u5178\u66f4\u65b0\u3002"),(0,i.kt)("p",null,"\u60a8\u53ef\u4ee5\u8bbe\u7f6e\u5347\u7ea7\u7684\u65f6\u95f4\u95f4\u9694\uff0cClickHouse\u5c06\u5728\u6b64\u8303\u56f4\u5185\u9009\u62e9\u4e00\u4e2a\u7edf\u4e00\u7684\u968f\u673a\u65f6\u95f4\u3002 \u4e3a\u4e86\u5728\u5927\u91cf\u670d\u52a1\u5668\u4e0a\u5347\u7ea7\u65f6\u5206\u914d\u5b57\u5178\u6e90\u4e0a\u7684\u8d1f\u8f7d\uff0c\u8fd9\u662f\u5fc5\u8981\u7684\u3002"),(0,i.kt)("p",null,"\u8bbe\u7f6e\u793a\u4f8b:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<dictionary>\n    ...\n    <lifetime>\n        <min>300</min>\n        <max>360</max>\n    </lifetime>\n    ...\n</dictionary>\n")),(0,i.kt)("p",null,"\u6216"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"LIFETIME(MIN 300 MAX 360)\n")),(0,i.kt)("p",null,"\u5982\u679c ",(0,i.kt)("inlineCode",{parentName:"p"},"<min>0</min>")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"<max>0</max>"),"\uff0cClickHouse\u4e0d\u4f1a\u6309\u8d85\u65f6\u91cd\u65b0\u52a0\u8f7d\u5b57\u5178\u3002\n\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u5982\u679c\u5b57\u5178\u914d\u7f6e\u6587\u4ef6\u5df2\u66f4\u6539\uff0cClickHouse\u53ef\u4ee5\u66f4\u65e9\u5730\u91cd\u65b0\u52a0\u8f7d\u5b57\u5178 ",(0,i.kt)("inlineCode",{parentName:"p"},"SYSTEM RELOAD DICTIONARY")," \u547d\u4ee4\u88ab\u6267\u884c\u3002"),(0,i.kt)("p",null,"\u5347\u7ea7\u5b57\u5178\u65f6\uff0cClickHouse\u670d\u52a1\u5668\u6839\u636e\u5b57\u5178\u7684\u7c7b\u578b\u5e94\u7528\u4e0d\u540c\u7684\u903b\u8f91 ",(0,i.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-sources"},"\u6765\u6e90"),":"),(0,i.kt)("p",null,"\u5347\u7ea7\u5b57\u5178\u65f6\uff0cClickHouse\u670d\u52a1\u5668\u6839\u636e\u5b57\u5178\u7684\u7c7b\u578b\u5e94\u7528\u4e0d\u540c\u7684\u903b\u8f91 ",(0,i.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-sources"},"\u6765\u6e90"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u6587\u672c\u6587\u4ef6\uff0c\u5b83\u68c0\u67e5\u4fee\u6539\u7684\u65f6\u95f4\u3002 \u5982\u679c\u65f6\u95f4\u4e0e\u5148\u524d\u8bb0\u5f55\u7684\u65f6\u95f4\u4e0d\u540c\uff0c\u5219\u66f4\u65b0\u5b57\u5178\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5bf9\u4e8eMyISAM\u8868\uff0c\u4fee\u6539\u7684\u65f6\u95f4\u4f7f\u7528\u68c0\u67e5 ",(0,i.kt)("inlineCode",{parentName:"li"},"SHOW TABLE STATUS")," \u67e5\u8be2\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6bcf\u6b21\u90fd\u4f1a\u66f4\u65b0\u6765\u81ea\u5176\u4ed6\u6765\u6e90\u7684\u5b57\u5178\u3002")),(0,i.kt)("p",null,"\u5bf9\u4e8eMySQL\uff08InnoDB\uff09\uff0cODBC\u548cClickHouse\u6e90\u4ee3\u7801\uff0c\u60a8\u53ef\u4ee5\u8bbe\u7f6e\u4e00\u4e2a\u67e5\u8be2\uff0c\u53ea\u6709\u5728\u5b57\u5178\u771f\u6b63\u6539\u53d8\u65f6\u624d\u4f1a\u66f4\u65b0\u5b57\u5178\uff0c\u800c\u4e0d\u662f\u6bcf\u6b21\u90fd\u66f4\u65b0\u3002 \u4e3a\u6b64\uff0c\u8bf7\u6309\u7167\u4e0b\u5217\u6b65\u9aa4\u64cd\u4f5c:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5b57\u5178\u8868\u5fc5\u987b\u5177\u6709\u5728\u6e90\u6570\u636e\u66f4\u65b0\u65f6\u59cb\u7ec8\u66f4\u6539\u7684\u5b57\u6bb5\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u6e90\u7684\u8bbe\u7f6e\u5fc5\u987b\u6307\u5b9a\u68c0\u7d22\u66f4\u6539\u5b57\u6bb5\u7684\u67e5\u8be2\u3002 ClickHouse\u670d\u52a1\u5668\u5c06\u67e5\u8be2\u7ed3\u679c\u89e3\u91ca\u4e3a\u4e00\u884c\uff0c\u5982\u679c\u6b64\u884c\u76f8\u5bf9\u4e8e\u5176\u4ee5\u524d\u7684\u72b6\u6001\u53d1\u751f\u4e86\u66f4\u6539\uff0c\u5219\u66f4\u65b0\u5b57\u5178\u3002 \u6307\u5b9a\u67e5\u8be2 ",(0,i.kt)("inlineCode",{parentName:"li"},"<invalidate_query>")," \u5b57\u6bb5\u4e2d\u7684\u8bbe\u7f6e ",(0,i.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-sources"},"\u6765\u6e90"),".")),(0,i.kt)("p",null,"\u8bbe\u7f6e\u793a\u4f8b:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<dictionary>\n    ...\n    <odbc>\n      ...\n      <invalidate_query>SELECT update_time FROM dictionary_source where id = 1</invalidate_query>\n    </odbc>\n    ...\n</dictionary>\n")),(0,i.kt)("p",null,"\u6216"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"...\nSOURCE(ODBC(... invalidate_query 'SELECT update_time FROM dictionary_source where id = 1'))\n...\n")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/query_language/dicts/external_dicts_dict_lifetime/"},"\u539f\u59cb\u6587\u7ae0")," "))}p.isMDXComponent=!0}}]);