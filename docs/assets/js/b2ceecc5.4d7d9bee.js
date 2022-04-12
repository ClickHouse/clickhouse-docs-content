"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[58139],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=a.createContext({}),u=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=u(e.components);return a.createElement(o.Provider,{value:n},e.children)},k={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),s=u(t),m=l,N=s["".concat(o,".").concat(m)]||s[m]||k[m]||r;return t?a.createElement(N,i(i({ref:n},d),{},{components:t})):a.createElement(N,i({ref:n},d))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=s;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"==typeof e?e:l,i[1]=p;for(var u=2;u<r;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},20285:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return k}});var a=t(87462),l=t(63366),r=(t(67294),t(3905)),i=["components"],p={},o="\u64cd\u4f5c\u7b26",u={unversionedId:"zh/sql-reference/operators/index",id:"zh/sql-reference/operators/index",title:"\u64cd\u4f5c\u7b26",description:"cao-zuo-fu}",source:"@site/docs/zh/sql-reference/operators/index.md",sourceDirName:"zh/sql-reference/operators",slug:"/zh/sql-reference/operators/",permalink:"/zh/sql-reference/operators/",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/docs-staging/docs/zh/sql-reference/operators/index.md",tags:[],version:"current",frontMatter:{},sidebar:"chinese",previous:{title:"Window Functions",permalink:"/zh/sql-reference/window-functions/"},next:{title:"IN \u64cd\u4f5c\u7b26",permalink:"/zh/sql-reference/operators/in"}},d={},k=[{value:"\u4e0b\u6807\u8fd0\u7b97\u7b26",id:"xia-biao-yun-suan-fu",level:2},{value:"\u8d1f\u53f7",id:"fu-hao",level:2},{value:"\u4e58\u53f7\u3001\u9664\u53f7\u548c\u53d6\u4f59",id:"cheng-hao-chu-hao-he-qu-yu",level:2},{value:"\u52a0\u53f7\u548c\u51cf\u53f7",id:"jia-hao-he-jian-hao",level:2},{value:"\u5173\u7cfb\u8fd0\u7b97\u7b26",id:"guan-xi-yun-suan-fu",level:2},{value:"\u96c6\u5408\u5173\u7cfb\u8fd0\u7b97\u7b26",id:"ji-he-guan-xi-yun-suan-fu",level:2},{value:"\u903b\u8f91\u975e",id:"luo-ji-fei",level:2},{value:"\u903b\u8f91\u4e0e",id:"luo-ji-yu",level:2},{value:"\u903b\u8f91\u6216",id:"luo-ji-huo",level:2},{value:"\u6761\u4ef6\u8fd0\u7b97\u7b26",id:"tiao-jian-yun-suan-fu",level:2},{value:"\u4f7f\u7528\u65e5\u671f\u548c\u65f6\u95f4\u7684\u64cd\u4f5c\u5458",id:"operators-datetime",level:2},{value:"EXTRACT",id:"operator-extract",level:3},{value:"INTERVAL",id:"operator-interval",level:3},{value:"CASE\u6761\u4ef6\u8868\u8fbe\u5f0f",id:"operator_case",level:2},{value:"\u8fde\u63a5\u8fd0\u7b97\u7b26",id:"lian-jie-yun-suan-fu",level:2},{value:"\u521b\u5efa Lambda \u51fd\u6570",id:"chuang-jian-lambda-han-shu",level:2},{value:"\u521b\u5efa\u6570\u7ec4",id:"chuang-jian-shu-zu",level:2},{value:"\u521b\u5efa\u5143\u7ec4",id:"chuang-jian-yuan-zu",level:2},{value:"\u7ed3\u5408\u65b9\u5f0f",id:"jie-he-fang-shi",level:2},{value:"\u5224\u65ad\u662f\u5426\u4e3a <code>NULL</code>",id:"pan-duan-shi-fou-wei-null",level:2},{value:"IS NULL",id:"operator-is-null",level:3},{value:"IS NOT NULL",id:"is-not-null",level:3}],s={toc:k};function m(e){var n=e.components,t=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cao-zuo-fu"},"\u64cd\u4f5c\u7b26"),(0,r.kt)("p",null,"\u6240\u6709\u7684\u64cd\u4f5c\u7b26\uff08\u8fd0\u7b97\u7b26\uff09\u90fd\u4f1a\u5728\u67e5\u8be2\u65f6\u4f9d\u636e\u4ed6\u4eec\u7684\u4f18\u5148\u7ea7\u53ca\u5176\u7ed3\u5408\u987a\u5e8f\u5728\u88ab\u89e3\u6790\u65f6\u8f6c\u6362\u4e3a\u5bf9\u5e94\u7684\u51fd\u6570\u3002\u4e0b\u9762\u6309\u4f18\u5148\u7ea7\u4ece\u9ad8\u5230\u4f4e\u5217\u51fa\u5404\u7ec4\u8fd0\u7b97\u7b26\u53ca\u5176\u5bf9\u5e94\u7684\u51fd\u6570\uff1a"),(0,r.kt)("h2",{id:"xia-biao-yun-suan-fu"},"\u4e0b\u6807\u8fd0\u7b97\u7b26"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"a[N]")," \u2013 \u6570\u7ec4\u4e2d\u7684\u7b2cN\u4e2a\u5143\u7d20; \u5bf9\u5e94\u51fd\u6570 ",(0,r.kt)("inlineCode",{parentName:"p"},"arrayElement(a, N)")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"a.N")," \u2013 \u5143\u7ec4\u4e2d\u7b2cN\u4e2a\u5143\u7d20; \u5bf9\u5e94\u51fd\u6570 ",(0,r.kt)("inlineCode",{parentName:"p"},"tupleElement(a, N)")),(0,r.kt)("h2",{id:"fu-hao"},"\u8d1f\u53f7"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-a")," \u2013 \u5bf9\u5e94\u51fd\u6570 ",(0,r.kt)("inlineCode",{parentName:"p"},"negate(a)")),(0,r.kt)("h2",{id:"cheng-hao-chu-hao-he-qu-yu"},"\u4e58\u53f7\u3001\u9664\u53f7\u548c\u53d6\u4f59"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"a * b")," \u2013 \u5bf9\u5e94\u51fd\u6570 ",(0,r.kt)("inlineCode",{parentName:"p"},"multiply(a, b)")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"a / b")," \u2013 \u5bf9\u5e94\u51fd\u6570 ",(0,r.kt)("inlineCode",{parentName:"p"},"divide(a, b)")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"a % b")," \u2013 \u5bf9\u5e94\u51fd\u6570 ",(0,r.kt)("inlineCode",{parentName:"p"},"modulo(a, b)")),(0,r.kt)("h2",{id:"jia-hao-he-jian-hao"},"\u52a0\u53f7\u548c\u51cf\u53f7"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"a + b")," \u2013 \u5bf9\u5e94\u51fd\u6570 ",(0,r.kt)("inlineCode",{parentName:"p"},"plus(a, b)")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"a - b")," \u2013 \u5bf9\u5e94\u51fd\u6570 ",(0,r.kt)("inlineCode",{parentName:"p"},"minus(a, b)")),(0,r.kt)("h2",{id:"guan-xi-yun-suan-fu"},"\u5173\u7cfb\u8fd0\u7b97\u7b26"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"a = b")," \u2013 \u5bf9\u5e94\u51fd\u6570 ",(0,r.kt)("inlineCode",{parentName:"p"},"equals(a, b)")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"a == b")," \u2013 \u5bf9\u5e94\u51fd\u6570 ",(0,r.kt)("inlineCode",{parentName:"p"},"equals(a, b)")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"a != b")," \u2013 \u5bf9\u5e94\u51fd\u6570 ",(0,r.kt)("inlineCode",{parentName:"p"},"notEquals(a, b)")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"a <> b")," \u2013 \u5bf9\u5e94\u51fd\u6570 ",(0,r.kt)("inlineCode",{parentName:"p"},"notEquals(a, b)")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"a <= b")," \u2013 \u5bf9\u5e94\u51fd\u6570 ",(0,r.kt)("inlineCode",{parentName:"p"},"lessOrEquals(a, b)")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"a >= b")," \u2013 \u5bf9\u5e94\u51fd\u6570 ",(0,r.kt)("inlineCode",{parentName:"p"},"greaterOrEquals(a, b)")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"a < b")," \u2013 \u5bf9\u5e94\u51fd\u6570 ",(0,r.kt)("inlineCode",{parentName:"p"},"less(a, b)")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"a > b")," \u2013 \u5bf9\u5e94\u51fd\u6570 ",(0,r.kt)("inlineCode",{parentName:"p"},"greater(a, b)")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"a LIKE s")," \u2013 \u5bf9\u5e94\u51fd\u6570 ",(0,r.kt)("inlineCode",{parentName:"p"},"like(a, b)")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"a NOT LIKE s")," \u2013 \u5bf9\u5e94\u51fd\u6570 ",(0,r.kt)("inlineCode",{parentName:"p"},"notLike(a, b)")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"a BETWEEN b AND c")," \u2013 \u7b49\u4ef7\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"a >= b AND a <= c")),(0,r.kt)("h2",{id:"ji-he-guan-xi-yun-suan-fu"},"\u96c6\u5408\u5173\u7cfb\u8fd0\u7b97\u7b26"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"\u8be6\u89c1\u6b64\u8282 ",(0,r.kt)("a",{parentName:"em",href:"/zh/sql-reference/operators/in#select-in-operators"},"IN \u76f8\u5173\u64cd\u4f5c\u7b26")," \u3002")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"a IN ...")," \u2013 \u5bf9\u5e94\u51fd\u6570 ",(0,r.kt)("inlineCode",{parentName:"p"},"in(a, b)")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"a NOT IN ...")," \u2013 \u5bf9\u5e94\u51fd\u6570 ",(0,r.kt)("inlineCode",{parentName:"p"},"notIn(a, b)")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"a GLOBAL IN ...")," \u2013 \u5bf9\u5e94\u51fd\u6570 ",(0,r.kt)("inlineCode",{parentName:"p"},"globalIn(a, b)")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"a GLOBAL NOT IN ...")," \u2013 \u5bf9\u5e94\u51fd\u6570 ",(0,r.kt)("inlineCode",{parentName:"p"},"globalNotIn(a, b)")),(0,r.kt)("h2",{id:"luo-ji-fei"},"\u903b\u8f91\u975e"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"NOT a")," \u2013 \u5bf9\u5e94\u51fd\u6570 ",(0,r.kt)("inlineCode",{parentName:"p"},"not(a)")),(0,r.kt)("h2",{id:"luo-ji-yu"},"\u903b\u8f91\u4e0e"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"a AND b")," \u2013 \u5bf9\u5e94\u51fd\u6570",(0,r.kt)("inlineCode",{parentName:"p"},"and(a, b)")),(0,r.kt)("h2",{id:"luo-ji-huo"},"\u903b\u8f91\u6216"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"a OR b")," \u2013 \u5bf9\u5e94\u51fd\u6570 ",(0,r.kt)("inlineCode",{parentName:"p"},"or(a, b)")),(0,r.kt)("h2",{id:"tiao-jian-yun-suan-fu"},"\u6761\u4ef6\u8fd0\u7b97\u7b26"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"a ? b : c")," \u2013 \u5bf9\u5e94\u51fd\u6570 ",(0,r.kt)("inlineCode",{parentName:"p"},"if(a, b, c)")),(0,r.kt)("p",null,"\u6ce8\u610f:"),(0,r.kt)("p",null,"\u6761\u4ef6\u8fd0\u7b97\u7b26\u4f1a\u5148\u8ba1\u7b97\u8868\u8fbe\u5f0fb\u548c\u8868\u8fbe\u5f0fc\u7684\u503c\uff0c\u518d\u6839\u636e\u8868\u8fbe\u5f0fa\u7684\u771f\u5047\uff0c\u8fd4\u56de\u76f8\u5e94\u7684\u503c\u3002\u5982\u679c\u8868\u8fbe\u5f0fb\u548c\u8868\u8fbe\u5f0fc\u662f ",(0,r.kt)("a",{parentName:"p",href:"/zh/sql-reference/functions/array-join#functions_arrayjoin"},"arrayJoin()")," \u51fd\u6570\uff0c\u5219\u4e0d\u7ba1\u8868\u8fbe\u5f0fa\u662f\u771f\u662f\u5047\uff0c\u6bcf\u884c\u90fd\u4f1a\u88ab\u590d\u5236\u5c55\u5f00\u3002"),(0,r.kt)("h2",{id:"operators-datetime"},"\u4f7f\u7528\u65e5\u671f\u548c\u65f6\u95f4\u7684\u64cd\u4f5c\u5458"),(0,r.kt)("h3",{id:"operator-extract"},"EXTRACT"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"EXTRACT(part FROM date);\n")),(0,r.kt)("p",null,"\u4ece\u7ed9\u5b9a\u65e5\u671f\u4e2d\u63d0\u53d6\u90e8\u4ef6\u3002 \u4f8b\u5982\uff0c\u60a8\u53ef\u4ee5\u4ece\u7ed9\u5b9a\u65e5\u671f\u68c0\u7d22\u4e00\u4e2a\u6708\uff0c\u6216\u4ece\u65f6\u95f4\u68c0\u7d22\u4e00\u79d2\u949f\u3002"),(0,r.kt)("p",null,"\u8be5 ",(0,r.kt)("inlineCode",{parentName:"p"},"part")," \u53c2\u6570\u6307\u5b9a\u8981\u68c0\u7d22\u7684\u65e5\u671f\u90e8\u5206\u3002 \u4ee5\u4e0b\u503c\u53ef\u7528:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DAY")," \u2014 The day of the month. Possible values: 1\u201331."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"MONTH")," \u2014 The number of a month. Possible values: 1\u201312."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"YEAR")," \u2014 The year."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SECOND")," \u2014 The second. Possible values: 0\u201359."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"MINUTE")," \u2014 The minute. Possible values: 0\u201359."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"HOUR")," \u2014 The hour. Possible values: 0\u201323.")),(0,r.kt)("p",null,"\u8be5 ",(0,r.kt)("inlineCode",{parentName:"p"},"part")," \u53c2\u6570\u4e0d\u533a\u5206\u5927\u5c0f\u5199\u3002"),(0,r.kt)("p",null,"\u8be5 ",(0,r.kt)("inlineCode",{parentName:"p"},"date")," \u53c2\u6570\u6307\u5b9a\u8981\u5904\u7406\u7684\u65e5\u671f\u6216\u65f6\u95f4\u3002 \u65e0\u8bba\u662f ",(0,r.kt)("a",{parentName:"p",href:"/zh/sql-reference/data-types/date"},"\u65e5\u671f")," \u6216 ",(0,r.kt)("a",{parentName:"p",href:"/zh/sql-reference/data-types/datetime"},"\u65e5\u671f\u65f6\u95f4")," \u652f\u6301\u7c7b\u578b\u3002"),(0,r.kt)("p",null,"\u4f8b:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT EXTRACT(DAY FROM toDate('2017-06-15'));\nSELECT EXTRACT(MONTH FROM toDate('2017-06-15'));\nSELECT EXTRACT(YEAR FROM toDate('2017-06-15'));\n")),(0,r.kt)("p",null,"\u5728\u4e0b\u9762\u7684\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u521b\u5efa\u4e00\u4e2a\u8868\uff0c\u5e76\u5728\u5176\u4e2d\u63d2\u5165\u4e00\u4e2a\u503c ",(0,r.kt)("inlineCode",{parentName:"p"},"DateTime")," \u7c7b\u578b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE test.Orders\n(\n    OrderId UInt64,\n    OrderName String,\n    OrderDate DateTime\n)\nENGINE = Log;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO test.Orders VALUES (1, 'Jarlsberg Cheese', toDateTime('2008-10-11 13:23:44'));\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    toYear(OrderDate) AS OrderYear,\n    toMonth(OrderDate) AS OrderMonth,\n    toDayOfMonth(OrderDate) AS OrderDay,\n    toHour(OrderDate) AS OrderHour,\n    toMinute(OrderDate) AS OrderMinute,\n    toSecond(OrderDate) AS OrderSecond\nFROM test.Orders;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500OrderYear\u2500\u252c\u2500OrderMonth\u2500\u252c\u2500OrderDay\u2500\u252c\u2500OrderHour\u2500\u252c\u2500OrderMinute\u2500\u252c\u2500OrderSecond\u2500\u2510\n\u2502      2008 \u2502         10 \u2502       11 \u2502        13 \u2502          23 \u2502          44 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u770b\u5230\u66f4\u591a\u7684\u4f8b\u5b50 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/ClickHouse/blob/master/tests/queries/0_stateless/00619_extract.sql"},"\u6d4b\u8bd5"),"."),(0,r.kt)("h3",{id:"operator-interval"},"INTERVAL"),(0,r.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a ",(0,r.kt)("a",{parentName:"p",href:"/zh/sql-reference/operators/"},"\u95f4\u9694"),"-\u5e94\u5728\u7b97\u672f\u8fd0\u7b97\u4e2d\u4f7f\u7528\u7684\u7c7b\u578b\u503c ",(0,r.kt)("a",{parentName:"p",href:"/zh/sql-reference/data-types/date"},"\u65e5\u671f")," \u548c ",(0,r.kt)("a",{parentName:"p",href:"/zh/sql-reference/data-types/datetime"},"\u65e5\u671f\u65f6\u95f4"),"-\u7c7b\u578b\u503c\u3002"),(0,r.kt)("p",null,"\u793a\u4f8b:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT now() AS current_date_time, current_date_time + INTERVAL 4 DAY + INTERVAL 3 HOUR\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500current_date_time\u2500\u252c\u2500plus(plus(now(), toIntervalDay(4)), toIntervalHour(3))\u2500\u2510\n\u2502 2019-10-23 11:16:28 \u2502                                    2019-10-27 14:16:28 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u53e6\u8bf7\u53c2\u9605")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/sql-reference/operators/"},"\u95f4\u9694")," \u6570\u636e\u7c7b\u578b"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/sql-reference/operators/#function-tointerval"},"toInterval")," \u7c7b\u578b\u8f6c\u6362\u51fd\u6570")),(0,r.kt)("h2",{id:"operator_case"},"CASE\u6761\u4ef6\u8868\u8fbe\u5f0f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CASE [x]\n    WHEN a THEN b\n    [WHEN ... THEN ...]\n    [ELSE c]\nEND\n")),(0,r.kt)("p",null,"\u5982\u679c\u6307\u5b9a\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," \uff0c\u8be5\u8868\u8fbe\u5f0f\u4f1a\u8f6c\u6362\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"transform(x, [a, ...], [b, ...], c)")," \u51fd\u6570\u3002\u5426\u5219\u8f6c\u6362\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"multiIf(a, b, ..., c)")),(0,r.kt)("p",null,"\u5982\u679c\u8be5\u8868\u8fbe\u5f0f\u4e2d\u6ca1\u6709 ",(0,r.kt)("inlineCode",{parentName:"p"},"ELSE c")," \u5b50\u53e5\uff0c\u5219\u9ed8\u8ba4\u503c\u5c31\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"NULL")),(0,r.kt)("p",null,"\u4f46 ",(0,r.kt)("inlineCode",{parentName:"p"},"transform")," \u51fd\u6570\u4e0d\u652f\u6301 ",(0,r.kt)("inlineCode",{parentName:"p"},"NULL")," "),(0,r.kt)("h2",{id:"lian-jie-yun-suan-fu"},"\u8fde\u63a5\u8fd0\u7b97\u7b26"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"s1 || s2")," \u2013 \u5bf9\u5e94\u51fd\u6570 ",(0,r.kt)("inlineCode",{parentName:"p"},"concat(s1, s2)")),(0,r.kt)("h2",{id:"chuang-jian-lambda-han-shu"},"\u521b\u5efa Lambda \u51fd\u6570"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"x -> expr")," \u2013 \u5bf9\u5e94\u51fd\u6570 ",(0,r.kt)("inlineCode",{parentName:"p"},"lambda(x, expr)")),(0,r.kt)("p",null,"\u63a5\u4e0b\u6765\u7684\u8fd9\u4e9b\u64cd\u4f5c\u7b26\u56e0\u4e3a\u5176\u672c\u8eab\u662f\u62ec\u53f7\u6ca1\u6709\u4f18\u5148\u7ea7\uff1a"),(0,r.kt)("h2",{id:"chuang-jian-shu-zu"},"\u521b\u5efa\u6570\u7ec4"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"[x1, ...]")," \u2013 \u5bf9\u5e94\u51fd\u6570 ",(0,r.kt)("inlineCode",{parentName:"p"},"array(x1, ...)")),(0,r.kt)("h2",{id:"chuang-jian-yuan-zu"},"\u521b\u5efa\u5143\u7ec4"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"(x1, x2, ...)")," \u2013 \u5bf9\u5e94\u51fd\u6570 ",(0,r.kt)("inlineCode",{parentName:"p"},"tuple(x2, x2, ...)")),(0,r.kt)("h2",{id:"jie-he-fang-shi"},"\u7ed3\u5408\u65b9\u5f0f"),(0,r.kt)("p",null,"\u6240\u6709\u7684\u540c\u7ea7\u64cd\u4f5c\u7b26\u4ece\u5de6\u5230\u53f3\u7ed3\u5408\u3002\u4f8b\u5982\uff0c ",(0,r.kt)("inlineCode",{parentName:"p"},"1 + 2 + 3")," \u4f1a\u8f6c\u6362\u6210 ",(0,r.kt)("inlineCode",{parentName:"p"},"plus(plus(1, 2), 3)"),"\u3002\n\u6240\u4ee5\uff0c\u6709\u65f6\u4ed6\u4eec\u4f1a\u8ddf\u6211\u4eec\u9884\u671f\u7684\u4e0d\u592a\u4e00\u6837\u3002\u4f8b\u5982\uff0c ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT 4 > 2 > 3")," \u7684\u7ed3\u679c\u662f0\u3002"),(0,r.kt)("p",null,"\u4e3a\u4e86\u9ad8\u6548\uff0c ",(0,r.kt)("inlineCode",{parentName:"p"},"and")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"or")," \u51fd\u6570\u652f\u6301\u4efb\u610f\u591a\u53c2\u6570\uff0c\u4e00\u8fde\u4e32\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"AND")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"OR")," \u8fd0\u7b97\u7b26\u4f1a\u8f6c\u6362\u6210\u5176\u5bf9\u5e94\u7684\u5355\u4e2a\u51fd\u6570\u3002"),(0,r.kt)("h2",{id:"pan-duan-shi-fou-wei-null"},"\u5224\u65ad\u662f\u5426\u4e3a ",(0,r.kt)("inlineCode",{parentName:"h2"},"NULL")),(0,r.kt)("p",null,"ClickHouse \u652f\u6301 ",(0,r.kt)("inlineCode",{parentName:"p"},"IS NULL")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"IS NOT NULL")," \u3002"),(0,r.kt)("h3",{id:"operator-is-null"},"IS NULL"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e ",(0,r.kt)("a",{parentName:"li",href:"/zh/sql-reference/operators/"},"\u53ef\u4e3a\u7a7a")," \u7c7b\u578b\u7684\u503c\uff0c ",(0,r.kt)("inlineCode",{parentName:"li"},"IS NULL")," \u4f1a\u8fd4\u56de\uff1a",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1")," \u503c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"NULL")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"0")," \u5426\u5219"))),(0,r.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u5176\u4ed6\u7c7b\u578b\u7684\u503c\uff0c ",(0,r.kt)("inlineCode",{parentName:"li"},"IS NULL")," \u603b\u4f1a\u8fd4\u56de ",(0,r.kt)("inlineCode",{parentName:"li"},"0"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},":) SELECT x+100 FROM t_null WHERE y IS NULL\n\nSELECT x + 100\nFROM t_null\nWHERE isNull(y)\n\n\u250c\u2500plus(x, 100)\u2500\u2510\n\u2502          101 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n1 rows in set. Elapsed: 0.002 sec.\n")),(0,r.kt)("h3",{id:"is-not-null"},"IS NOT NULL"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e ",(0,r.kt)("a",{parentName:"li",href:"/zh/sql-reference/operators/"},"\u53ef\u4e3a\u7a7a")," \u7c7b\u578b\u7684\u503c\uff0c ",(0,r.kt)("inlineCode",{parentName:"li"},"IS NOT NULL")," \u4f1a\u8fd4\u56de\uff1a",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"0")," \u503c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"NULL")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1")," \u5426\u5219"))),(0,r.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u5176\u4ed6\u7c7b\u578b\u7684\u503c\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"IS NOT NULL")," \u603b\u4f1a\u8fd4\u56de ",(0,r.kt)("inlineCode",{parentName:"li"},"1"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},":) SELECT * FROM t_null WHERE y IS NOT NULL\n\nSELECT *\nFROM t_null\nWHERE isNotNull(y)\n\n\u250c\u2500x\u2500\u252c\u2500y\u2500\u2510\n\u2502 2 \u2502 3 \u2502\n\u2514\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2518\n\n1 rows in set. Elapsed: 0.002 sec.\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/query_language/operators/"},"\u6765\u6e90\u6587\u7ae0")," "))}m.isMDXComponent=!0}}]);