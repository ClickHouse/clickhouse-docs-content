"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[29026],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=p(r),d=a,h=f["".concat(l,".").concat(d)]||f[d]||s[d]||o;return r?n.createElement(h,c(c({ref:t},u),{},{components:r})):n.createElement(h,c({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},64034:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return s}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),c=["components"],i={},l="\u5e38\u89c1\u95ee\u9898",p={unversionedId:"zh/faq/general",id:"zh/faq/general",title:"\u5e38\u89c1\u95ee\u9898",description:"chang-jian-wen-ti}",source:"@site/docs/zh/faq/general.md",sourceDirName:"zh/faq",slug:"/zh/faq/general",permalink:"/docs/zh/faq/general",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/faq/general.md",tags:[],version:"current",frontMatter:{},sidebar:"chinese",previous:{title:"What if I have a problem with encodings when using Oracle via ODBC?",permalink:"/docs/zh/faq/integration/oracle-odbc"},next:{title:"\u672f\u8bed\u7ffb\u8bd1\u7ea6\u5b9a",permalink:"/docs/zh/faq/terms_translation_zh"}},u={},s=[{value:"\u4e3a\u4ec0\u4e48\u4e0d\u4f7f\u7528MapReduce\u4e4b\u7c7b\u7684\u4ea7\u54c1\u5462?",id:"wei-shi-yao-bu-shi-yong-mapreducezhi-lei-de-chan-pin-ni",level:2},{value:"\u5982\u679c\u6211\u5728\u901a\u8fc7ODBC\u4f7f\u7528Oracle\u65f6\u9047\u5230\u7f16\u7801\u95ee\u9898\uff0c\u8be5\u600e\u4e48\u529e\uff1f",id:"oracle-odbc-encodings",level:2}],f={toc:s};function d(e){var t=e.components,r=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"chang-jian-wen-ti"},"\u5e38\u89c1\u95ee\u9898"),(0,o.kt)("h2",{id:"wei-shi-yao-bu-shi-yong-mapreducezhi-lei-de-chan-pin-ni"},"\u4e3a\u4ec0\u4e48\u4e0d\u4f7f\u7528MapReduce\u4e4b\u7c7b\u7684\u4ea7\u54c1\u5462?"),(0,o.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u5c06MapReduce\u8fd9\u7c7b\u7684\u7cfb\u7edf\u79f0\u4e3a\u5206\u5e03\u5f0f\u8ba1\u7b97\u7cfb\u7edf\uff0c\u5176reduce\u64cd\u4f5c\u57fa\u4e8e\u5206\u5e03\u5f0f\u6392\u5e8f\u3002\u5176\u4e2d\u6700\u5e38\u89c1\u7684\u5f00\u6e90\u89e3\u51b3\u65b9\u6848\u662f ",(0,o.kt)("a",{parentName:"p",href:"http://hadoop.apache.org"},"Apache Hadoop"),"\u3002 Yandex\u4f7f\u7528\u4ed6\u4eec\u7684\u5185\u90e8\u89e3\u51b3\u65b9\u6848YT\u3002"),(0,o.kt)("p",null,"\u8fd9\u4e9b\u7cfb\u7edf\u4e0d\u9002\u5408\u5728\u7ebf\u67e5\u8be2\uff0c\u56e0\u4e3a\u5b83\u4eec\u7684\u5ef6\u8fdf\u9ad8\u3002\u6362\u53e5\u8bdd\u8bf4\uff0c\u5b83\u4eec\u4e0d\u80fd\u7528\u4f5cWeb\u63a5\u53e3\u7684\u540e\u7aef\u670d\u52a1\u3002\u8fd9\u4e9b\u7cfb\u7edf\u5bf9\u4e8e\u5b9e\u65f6\u6570\u636e\u66f4\u65b0\u662f\u6ca1\u6709\u7528\u7684\u3002\u5982\u679c\u64cd\u4f5c\u7684\u7ed3\u679c\u548c\u6240\u6709\u4e2d\u95f4\u7ed3\u679c\uff08\u5982\u679c\u6709\u7684\u8bdd\uff09\u4f4d\u4e8e\u5355\u4e2a\u670d\u52a1\u5668\u7684\u5185\u5b58\u4e2d\uff0c\u5219\u5206\u5e03\u5f0f\u6392\u5e8f\u4e0d\u662f\u6267\u884creduce\u64cd\u4f5c\u7684\u6700\u4f73\u65b9\u5f0f\uff0c\u4f46\u8fd9\u901a\u5e38\u662f\u5728\u7ebf\u67e5\u8be2\u7684\u60c5\u51b5\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u54c8\u5e0c\u8868\u662f\u6267\u884creduce\u64cd\u4f5c\u7684\u6700\u4f73\u65b9\u5f0f\u3002\u4f18\u5316map-reduce\u4efb\u52a1\u7684\u5e38\u7528\u65b9\u6cd5\u662f\u4f7f\u7528\u5185\u5b58\u4e2d\u7684\u54c8\u5e0c\u8868\u8fdb\u884c\u9884\u805a\u5408\uff08\u90e8\u5206reduce\uff09\uff0c\u7528\u6237\u624b\u52a8\u6267\u884c\u6b64\u4f18\u5316\u64cd\u4f5c\u3002\u5206\u5e03\u5f0f\u6392\u5e8f\u662f\u8fd0\u884c\u7b80\u5355map-reduce\u4efb\u52a1\u65f6\u6027\u80fd\u964d\u4f4e\u7684\u4e3b\u8981\u539f\u56e0\u4e4b\u4e00\u3002"),(0,o.kt)("p",null,"\u5927\u591a\u6570MapReduce\u7cfb\u7edf\u5141\u8bb8\u60a8\u5728\u96c6\u7fa4\u4e0a\u6267\u884c\u4efb\u610f\u4ee3\u7801\u3002\u4f46\u662f\uff0c\u58f0\u660e\u6027\u67e5\u8be2\u8bed\u8a00\u66f4\u9002\u5408OLAP\uff0c\u4ee5\u4fbf\u5feb\u901f\u8fd0\u884c\u5b9e\u9a8c\u3002\u4f8b\u5982\uff0cHadoop\u5305\u542bHive\u548cPig\uff0cCloudera Impala\u6216Shark\uff08\u8fc7\u65f6\uff09for Spark\uff0c\u4ee5\u53caSpark SQL\u3001Presto\u548cApache Drill\u3002\u4e0e\u4e13\u4e1a\u7cfb\u7edf\u76f8\u6bd4\uff0c\u8fd0\u884c\u6b64\u7c7b\u4efb\u52a1\u65f6\u7684\u6027\u80fd\u975e\u5e38\u4e0d\u7406\u60f3\uff0c\u6240\u4ee5\u5c06\u8fd9\u4e9b\u7cfb\u7edf\u7528\u4f5cWeb\u63a5\u53e3\u7684\u540e\u7aef\u670d\u52a1\u662f\u4e0d\u73b0\u5b9e\u7684\uff0c\u56e0\u4e3a\u5ef6\u8fdf\u76f8\u5bf9\u8f83\u9ad8\u3002"),(0,o.kt)("h2",{id:"oracle-odbc-encodings"},"\u5982\u679c\u6211\u5728\u901a\u8fc7ODBC\u4f7f\u7528Oracle\u65f6\u9047\u5230\u7f16\u7801\u95ee\u9898\uff0c\u8be5\u600e\u4e48\u529e\uff1f"),(0,o.kt)("p",null,"\u5982\u679c\u60a8\u901a\u8fc7ODBC\u9a71\u52a8\u7a0b\u5e8f\u4f7f\u7528Oracle\u4f5c\u4e3a\u5916\u90e8\u5b57\u5178\u7684\u6e90\uff0c\u5219\u9700\u8981\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"NLS_LANG")," \u5728\u53d8\u91cf ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/default/clickhouse"),". \u6b32\u4e86\u89e3\u66f4\u591a\u8be6\u60c5\uff0c\u8bf7\u53c2\u9605 ",(0,o.kt)("a",{parentName:"p",href:"https://www.oracle.com/technetwork/products/globalization/nls-lang-099431.html"},"Oracle NLS_\u5e38\u89c1\u95ee\u9898"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"NLS_LANG=CHINESE_CHINA.ZHS16GBK\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/zh/faq/general/"},"\u6765\u6e90\u6587\u7ae0")," "))}d.isMDXComponent=!0}}]);