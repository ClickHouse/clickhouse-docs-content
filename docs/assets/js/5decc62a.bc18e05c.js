"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[38257],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=u(n),d=o,m=f["".concat(l,".").concat(d)]||f[d]||p[d]||a;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},32675:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],c={slug:"/zh/sql-reference/functions/comparison-functions",sidebar_position:36,sidebar_label:"\u6bd4\u8f83\u51fd\u6570"},l="\u6bd4\u8f83\u51fd\u6570",u={unversionedId:"zh/sql-reference/functions/comparison-functions",id:"zh/sql-reference/functions/comparison-functions",title:"\u6bd4\u8f83\u51fd\u6570",description:"bi-jiao-han-shu}",source:"@site/docs/zh/sql-reference/functions/comparison-functions.md",sourceDirName:"zh/sql-reference/functions",slug:"/zh/sql-reference/functions/comparison-functions",permalink:"/docs/zh/sql-reference/functions/comparison-functions",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/functions/comparison-functions.md",tags:[],version:"current",sidebarPosition:36,frontMatter:{slug:"/zh/sql-reference/functions/comparison-functions",sidebar_position:36,sidebar_label:"\u6bd4\u8f83\u51fd\u6570"},sidebar:"chinese",previous:{title:"\u7b97\u672f\u51fd\u6570",permalink:"/docs/zh/sql-reference/functions/arithmetic-functions"},next:{title:"\u903b\u8f91\u51fd\u6570",permalink:"/docs/zh/sql-reference/functions/logical-functions"}},s={},p=[{value:"\u7b49\u4e8e\uff0ca=b\u548ca==b \u8fd0\u7b97\u7b26",id:"equals-a-b-and-a-b-operator",level:2},{value:"\u4e0d\u7b49\u4e8e\uff0ca!=b\u548ca&lt;&gt;b \u8fd0\u7b97\u7b26",id:"notequals-a-operator-b-and-a-b",level:2},{value:"\u5c11, &lt; \u8fd0\u7b97\u7b26",id:"less-operator",level:2},{value:"\u5927\u4e8e, &gt; \u8fd0\u7b97\u7b26",id:"greater-operator",level:2},{value:"\u5c0f\u4e8e\u7b49\u4e8e, &lt;= \u8fd0\u7b97\u7b26",id:"lessorequals-operator",level:2},{value:"\u5927\u4e8e\u7b49\u4e8e, &gt;= \u8fd0\u7b97\u7b26",id:"greaterorequals-operator",level:2}],f={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"bi-jiao-han-shu"},"\u6bd4\u8f83\u51fd\u6570"),(0,a.kt)("p",null,"\u6bd4\u8f83\u51fd\u6570\u59cb\u7ec8\u8fd4\u56de0\u62161\uff08UInt8\uff09\u3002"),(0,a.kt)("p",null,"\u53ef\u4ee5\u6bd4\u8f83\u4ee5\u4e0b\u7c7b\u578b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6570\u5b57"),(0,a.kt)("li",{parentName:"ul"},"String \u548c FixedString"),(0,a.kt)("li",{parentName:"ul"},"\u65e5\u671f"),(0,a.kt)("li",{parentName:"ul"},"\u65e5\u671f\u65f6\u95f4")),(0,a.kt)("p",null,"\u4ee5\u4e0a\u6bcf\u4e2a\u7ec4\u5185\u7684\u7c7b\u578b\u5747\u53ef\u4e92\u76f8\u6bd4\u8f83\uff0c\u4f46\u662f\u5bf9\u4e8e\u4e0d\u540c\u7ec4\u7684\u7c7b\u578b\u95f4\u4e0d\u80fd\u591f\u8fdb\u884c\u6bd4\u8f83\u3002"),(0,a.kt)("p",null,"\u4f8b\u5982\uff0c\u60a8\u65e0\u6cd5\u5c06\u65e5\u671f\u4e0e\u5b57\u7b26\u4e32\u8fdb\u884c\u6bd4\u8f83\u3002\u60a8\u5fc5\u987b\u4f7f\u7528\u51fd\u6570\u5c06\u5b57\u7b26\u4e32\u8f6c\u6362\u4e3a\u65e5\u671f\uff0c\u53cd\u4e4b\u4ea6\u7136\u3002"),(0,a.kt)("p",null,"\u5b57\u7b26\u4e32\u6309\u5b57\u8282\u8fdb\u884c\u6bd4\u8f83\u3002\u8f83\u77ed\u7684\u5b57\u7b26\u4e32\u5c0f\u4e8e\u4ee5\u5176\u5f00\u5934\u5e76\u4e14\u81f3\u5c11\u5305\u542b\u4e00\u4e2a\u5b57\u7b26\u7684\u6240\u6709\u5b57\u7b26\u4e32\u3002"),(0,a.kt)("h2",{id:"equals-a-b-and-a-b-operator"},"\u7b49\u4e8e\uff0ca=b\u548ca==b \u8fd0\u7b97\u7b26"),(0,a.kt)("h2",{id:"notequals-a-operator-b-and-a-b"},"\u4e0d\u7b49\u4e8e\uff0ca!=b\u548ca","<",">","b \u8fd0\u7b97\u7b26"),(0,a.kt)("h2",{id:"less-operator"},"\u5c11, ","<"," \u8fd0\u7b97\u7b26"),(0,a.kt)("h2",{id:"greater-operator"},"\u5927\u4e8e, ",">"," \u8fd0\u7b97\u7b26"),(0,a.kt)("h2",{id:"lessorequals-operator"},"\u5c0f\u4e8e\u7b49\u4e8e, ","<","= \u8fd0\u7b97\u7b26"),(0,a.kt)("h2",{id:"greaterorequals-operator"},"\u5927\u4e8e\u7b49\u4e8e, ",">","= \u8fd0\u7b97\u7b26"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/query_language/functions/comparison_functions/"},"\u6765\u6e90\u6587\u7ae0")," "))}d.isMDXComponent=!0}}]);