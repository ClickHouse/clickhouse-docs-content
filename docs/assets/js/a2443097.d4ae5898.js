"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[54222],{3905:function(e,n,t){t.d(n,{Zo:function(){return k},kt:function(){return c}});var l=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,l,r=function(e,n){if(null==e)return{};var t,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=l.createContext({}),o=function(e){var n=l.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},k=function(e){var n=o(e.components);return l.createElement(p.Provider,{value:n},e.children)},N={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},s=l.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,k=u(e,["components","mdxType","originalType","parentName"]),s=o(t),c=r,m=s["".concat(p,".").concat(c)]||s[c]||N[c]||a;return t?l.createElement(m,i(i({ref:n},k),{},{components:t})):l.createElement(m,i({ref:n},k))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=s;var u={};for(var p in n)hasOwnProperty.call(n,p)&&(u[p]=n[p]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var o=2;o<a;o++)i[o]=t[o];return l.createElement.apply(null,i)}return l.createElement.apply(null,t)}s.displayName="MDXCreateElement"},61256:function(e,n,t){t.r(n),t.d(n,{assets:function(){return k},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return u},metadata:function(){return o},toc:function(){return N}});var l=t(87462),r=t(63366),a=(t(67294),t(3905)),i=["components"],u={},p="Nullable\u5904\u7406\u51fd\u6570",o={unversionedId:"zh/sql-reference/functions/functions-for-nulls",id:"zh/sql-reference/functions/functions-for-nulls",title:"Nullable\u5904\u7406\u51fd\u6570",description:"nullablechu-li-han-shu}",source:"@site/docs/zh/sql-reference/functions/functions-for-nulls.md",sourceDirName:"zh/sql-reference/functions",slug:"/zh/sql-reference/functions/functions-for-nulls",permalink:"/docs/zh/sql-reference/functions/functions-for-nulls",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/functions/functions-for-nulls.md",tags:[],version:"current",frontMatter:{},sidebar:"chinese",previous:{title:"\u5b57\u5178\u51fd\u6570",permalink:"/docs/zh/sql-reference/functions/ext-dict-functions"},next:{title:"GEO\u51fd\u6570",permalink:"/docs/zh/sql-reference/functions/geo"}},k={},N=[{value:"isNull",id:"isnull",level:2},{value:"isNotNull",id:"isnotnull",level:2},{value:"\u5408\u5e76",id:"coalesce",level:2},{value:"ifNull",id:"ifnull",level:2},{value:"nullIf",id:"nullif",level:2},{value:"assumeNotNull",id:"assumenotnull",level:2},{value:"\u53ef\u8c03\u6574",id:"tonullable",level:2}],s={toc:N};function c(e){var n=e.components,t=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,l.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"nullablechu-li-han-shu"},"Nullable\u5904\u7406\u51fd\u6570"),(0,a.kt)("h2",{id:"isnull"},"isNull"),(0,a.kt)("p",null,"\u68c0\u67e5\u53c2\u6570\u662f\u5426\u4e3a",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/syntax#null-literal"},"NULL"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"isNull(x)\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u53c2\u6570")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"x")," \u2014 \u4e00\u4e2a\u975e\u590d\u5408\u6570\u636e\u7c7b\u578b\u7684\u503c\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u503c")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1")," \u5982\u679c",(0,a.kt)("inlineCode",{parentName:"li"},"x"),"\u4e3a",(0,a.kt)("inlineCode",{parentName:"li"},"NULL"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"0")," \u5982\u679c",(0,a.kt)("inlineCode",{parentName:"li"},"x"),"\u4e0d\u4e3a",(0,a.kt)("inlineCode",{parentName:"li"},"NULL"),"\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,a.kt)("p",null,"\u5b58\u5728\u4ee5\u4e0b\u5185\u5bb9\u7684\u8868"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u250c\u2500x\u2500\u252c\u2500\u2500\u2500\u2500y\u2500\u2510\n\u2502 1 \u2502 \u1d3a\u1d41\u1d38\u1d38 \u2502\n\u2502 2 \u2502    3 \u2502\n\u2514\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,"\u5bf9\u5176\u8fdb\u884c\u67e5\u8be2"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},":) SELECT x FROM t_null WHERE isNull(y)\n\nSELECT x\nFROM t_null\nWHERE isNull(y)\n\n\u250c\u2500x\u2500\u2510\n\u2502 1 \u2502\n\u2514\u2500\u2500\u2500\u2518\n\n1 rows in set. Elapsed: 0.010 sec.\n")),(0,a.kt)("h2",{id:"isnotnull"},"isNotNull"),(0,a.kt)("p",null,"\u68c0\u67e5\u53c2\u6570\u662f\u5426\u4e0d\u4e3a ",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/syntax#null-literal"},"NULL"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"isNotNull(x)\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u53c2\u6570:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"x")," \u2014 \u4e00\u4e2a\u975e\u590d\u5408\u6570\u636e\u7c7b\u578b\u7684\u503c\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u503c")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"0")," \u5982\u679c",(0,a.kt)("inlineCode",{parentName:"li"},"x"),"\u4e3a",(0,a.kt)("inlineCode",{parentName:"li"},"NULL"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1")," \u5982\u679c",(0,a.kt)("inlineCode",{parentName:"li"},"x"),"\u4e0d\u4e3a",(0,a.kt)("inlineCode",{parentName:"li"},"NULL"),"\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,a.kt)("p",null,"\u5b58\u5728\u4ee5\u4e0b\u5185\u5bb9\u7684\u8868"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u250c\u2500x\u2500\u252c\u2500\u2500\u2500\u2500y\u2500\u2510\n\u2502 1 \u2502 \u1d3a\u1d41\u1d38\u1d38 \u2502\n\u2502 2 \u2502    3 \u2502\n\u2514\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,"\u5bf9\u5176\u8fdb\u884c\u67e5\u8be2"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},":) SELECT x FROM t_null WHERE isNotNull(y)\n\nSELECT x\nFROM t_null\nWHERE isNotNull(y)\n\n\u250c\u2500x\u2500\u2510\n\u2502 2 \u2502\n\u2514\u2500\u2500\u2500\u2518\n\n1 rows in set. Elapsed: 0.010 sec.\n")),(0,a.kt)("h2",{id:"coalesce"},"\u5408\u5e76"),(0,a.kt)("p",null,"\u68c0\u67e5\u4ece\u5de6\u5230\u53f3\u662f\u5426\u4f20\u9012\u4e86\xabNULL\xbb\u53c2\u6570\u5e76\u8fd4\u56de\u7b2c\u4e00\u4e2a\u975e",(0,a.kt)("inlineCode",{parentName:"p"},"'NULL"),"\u53c2\u6570\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"coalesce(x,...)\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u53c2\u6570:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4efb\u4f55\u6570\u91cf\u7684\u975e\u590d\u5408\u7c7b\u578b\u7684\u53c2\u6570\u3002\u6240\u6709\u53c2\u6570\u5fc5\u987b\u4e0e\u6570\u636e\u7c7b\u578b\u517c\u5bb9\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u503c")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7b2c\u4e00\u4e2a\u975e\u2019NULL","`","\u53c2\u6570\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"NULL"),"\uff0c\u5982\u679c\u6240\u6709\u53c2\u6570\u90fd\u662f\u2019NULL","`","\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,a.kt)("p",null,"\u8003\u8651\u53ef\u4ee5\u6307\u5b9a\u591a\u79cd\u8054\u7cfb\u5ba2\u6237\u7684\u65b9\u5f0f\u7684\u8054\u7cfb\u4eba\u5217\u8868\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u250c\u2500name\u2500\u2500\u2500\u2500\u2500\u252c\u2500mail\u2500\u252c\u2500phone\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500icq\u2500\u2510\n\u2502 client 1 \u2502 \u1d3a\u1d41\u1d38\u1d38 \u2502 123-45-67 \u2502  123 \u2502\n\u2502 client 2 \u2502 \u1d3a\u1d41\u1d38\u1d38 \u2502 \u1d3a\u1d41\u1d38\u1d38      \u2502 \u1d3a\u1d41\u1d38\u1d38 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"mail"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"phone"),"\u5b57\u6bb5\u662fString\u7c7b\u578b\uff0c\u4f46",(0,a.kt)("inlineCode",{parentName:"p"},"icq"),"\u5b57\u6bb5\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"UInt32"),"\uff0c\u6240\u4ee5\u5b83\u9700\u8981\u8f6c\u6362\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"String"),"\u3002"),(0,a.kt)("p",null,"\u4ece\u8054\u7cfb\u4eba\u5217\u8868\u4e2d\u83b7\u53d6\u5ba2\u6237\u7684\u7b2c\u4e00\u4e2a\u53ef\u7528\u8054\u7cfb\u65b9\u5f0f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},":) SELECT coalesce(mail, phone, CAST(icq,'Nullable(String)')) FROM aBook\n\nSELECT coalesce(mail, phone, CAST(icq, 'Nullable(String)'))\nFROM aBook\n\n\u250c\u2500name\u2500\u2500\u2500\u2500\u2500\u252c\u2500coalesce(mail, phone, CAST(icq, 'Nullable(String)'))\u2500\u2510\n\u2502 client 1 \u2502 123-45-67                                            \u2502\n\u2502 client 2 \u2502 \u1d3a\u1d41\u1d38\u1d38                                                 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n2 rows in set. Elapsed: 0.006 sec.\n")),(0,a.kt)("h2",{id:"ifnull"},"ifNull"),(0,a.kt)("p",null,"\u5982\u679c\u7b2c\u4e00\u4e2a\u53c2\u6570\u4e3a\xabNULL\xbb\uff0c\u5219\u8fd4\u56de\u7b2c\u4e8c\u4e2a\u53c2\u6570\u7684\u503c\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ifNull(x,alt)\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u53c2\u6570:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"x")," \u2014 \u8981\u68c0\u67e5\xabNULL\xbb\u7684\u503c\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"alt")," \u2014 \u5982\u679c",(0,a.kt)("inlineCode",{parentName:"li"},"x"),"\u4e3a\u2019NULL","`","\uff0c\u51fd\u6570\u8fd4\u56de\u7684\u503c\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u503c")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4ef7\u503c ",(0,a.kt)("inlineCode",{parentName:"li"},"x"),"\uff0c\u5982\u679c ",(0,a.kt)("inlineCode",{parentName:"li"},"x")," \u4e0d\u662f ",(0,a.kt)("inlineCode",{parentName:"li"},"NULL"),"."),(0,a.kt)("li",{parentName:"ul"},"\u4ef7\u503c ",(0,a.kt)("inlineCode",{parentName:"li"},"alt"),"\uff0c\u5982\u679c ",(0,a.kt)("inlineCode",{parentName:"li"},"x")," \u662f ",(0,a.kt)("inlineCode",{parentName:"li"},"NULL"),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SELECT ifNull('a', 'b')\n\n\u250c\u2500ifNull('a', 'b')\u2500\u2510\n\u2502 a                \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\nSELECT ifNull(NULL, 'b')\n\n\u250c\u2500ifNull(NULL, 'b')\u2500\u2510\n\u2502 b                 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("h2",{id:"nullif"},"nullIf"),(0,a.kt)("p",null,"\u5982\u679c\u53c2\u6570\u76f8\u7b49\uff0c\u5219\u8fd4\u56de",(0,a.kt)("inlineCode",{parentName:"p"},"NULL"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"nullIf(x, y)\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u53c2\u6570:")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"x"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"y")," \u2014 \u7528\u4e8e\u6bd4\u8f83\u7684\u503c\u3002 \u5b83\u4eec\u5fc5\u987b\u662f\u7c7b\u578b\u517c\u5bb9\u7684\uff0c\u5426\u5219\u5c06\u629b\u51fa\u5f02\u5e38\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u503c")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u53c2\u6570\u76f8\u7b49\uff0c\u5219\u4e3a",(0,a.kt)("inlineCode",{parentName:"li"},"NULL"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u53c2\u6570\u4e0d\u76f8\u7b49\uff0c\u5219\u4e3a",(0,a.kt)("inlineCode",{parentName:"li"},"x"),"\u503c\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SELECT nullIf(1, 1)\n\n\u250c\u2500nullIf(1, 1)\u2500\u2510\n\u2502         \u1d3a\u1d41\u1d38\u1d38 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\nSELECT nullIf(1, 2)\n\n\u250c\u2500nullIf(1, 2)\u2500\u2510\n\u2502            1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("h2",{id:"assumenotnull"},"assumeNotNull"),(0,a.kt)("p",null,"\u5c06",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/functions/functions-for-nulls"},"\u53ef\u4e3a\u7a7a"),"\u7c7b\u578b\u7684\u503c\u8f6c\u6362\u4e3a\u975e",(0,a.kt)("inlineCode",{parentName:"p"},"Nullable"),"\u7c7b\u578b\u7684\u503c\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"assumeNotNull(x)\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"x")," \u2014 \u539f\u59cb\u503c\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u503c")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c",(0,a.kt)("inlineCode",{parentName:"li"},"x"),"\u4e0d\u4e3a",(0,a.kt)("inlineCode",{parentName:"li"},"NULL"),"\uff0c\u8fd4\u56de\u975e",(0,a.kt)("inlineCode",{parentName:"li"},"Nullable"),"\u7c7b\u578b\u7684\u539f\u59cb\u503c\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c",(0,a.kt)("inlineCode",{parentName:"li"},"x"),"\u4e3a",(0,a.kt)("inlineCode",{parentName:"li"},"NULL"),"\uff0c\u8fd4\u56de\u5bf9\u5e94\u975e",(0,a.kt)("inlineCode",{parentName:"li"},"Nullable"),"\u7c7b\u578b\u7684\u9ed8\u8ba4\u503c\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,a.kt)("p",null,"\u5b58\u5728\u5982\u4e0b",(0,a.kt)("inlineCode",{parentName:"p"},"t_null"),"\u8868\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SHOW CREATE TABLE t_null\n\n\u250c\u2500statement\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 CREATE TABLE default.t_null ( x Int8,  y Nullable(Int8)) ENGINE = TinyLog \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n\u250c\u2500x\u2500\u252c\u2500\u2500\u2500\u2500y\u2500\u2510\n\u2502 1 \u2502 \u1d3a\u1d41\u1d38\u1d38 \u2502\n\u2502 2 \u2502    3 \u2502\n\u2514\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,"\u5c06\u5217",(0,a.kt)("inlineCode",{parentName:"p"},"y"),"\u4f5c\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"assumeNotNull"),"\u51fd\u6570\u7684\u53c2\u6570\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SELECT assumeNotNull(y) FROM t_null\n\n\u250c\u2500assumeNotNull(y)\u2500\u2510\n\u2502                0 \u2502\n\u2502                3 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\nSELECT toTypeName(assumeNotNull(y)) FROM t_null\n\n\u250c\u2500toTypeName(assumeNotNull(y))\u2500\u2510\n\u2502 Int8                         \u2502\n\u2502 Int8                         \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("h2",{id:"tonullable"},"\u53ef\u8c03\u6574"),(0,a.kt)("p",null,"\u5c06\u53c2\u6570\u7684\u7c7b\u578b\u8f6c\u6362\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"Nullable"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"toNullable(x)\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"x")," \u2014 \u4efb\u4f55\u975e\u590d\u5408\u7c7b\u578b\u7684\u503c\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u503c")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8f93\u5165\u7684\u503c\uff0c\u4f46\u5176\u7c7b\u578b\u4e3a",(0,a.kt)("inlineCode",{parentName:"li"},"Nullable"),"\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SELECT toTypeName(10)\n\n\u250c\u2500toTypeName(10)\u2500\u2510\n\u2502 UInt8          \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\nSELECT toTypeName(toNullable(10))\n\n\u250c\u2500toTypeName(toNullable(10))\u2500\u2510\n\u2502 Nullable(UInt8)            \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/query_language/functions/functions_for_nulls/"},"\u6765\u6e90\u6587\u7ae0")," "))}c.isMDXComponent=!0}}]);