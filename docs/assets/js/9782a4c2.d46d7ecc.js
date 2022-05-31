"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[10002],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return k}});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},m=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},N={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=s(t),k=i,c=u["".concat(p,".").concat(k)]||u[k]||N[k]||l;return t?a.createElement(c,r(r({ref:n},m),{},{components:t})):a.createElement(c,r({ref:n},m))}));function k(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,r=new Array(l);r[0]=u;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var s=2;s<l;s++)r[s]=t[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},51161:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return N}});var a=t(87462),i=t(63366),l=(t(67294),t(3905)),r=["components"],o={sidebar_label:"JOIN"},p="JOIN\u5b50\u53e5",s={unversionedId:"zh/sql-reference/statements/select/join",id:"zh/sql-reference/statements/select/join",title:"JOIN\u5b50\u53e5",description:"select-join}",source:"@site/docs/zh/sql-reference/statements/select/join.md",sourceDirName:"zh/sql-reference/statements/select",slug:"/zh/sql-reference/statements/select/join",permalink:"/docs/zh/sql-reference/statements/select/join",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/statements/select/join.md",tags:[],version:"current",frontMatter:{sidebar_label:"JOIN"},sidebar:"chinese",previous:{title:"INTO OUTFILE",permalink:"/docs/zh/sql-reference/statements/select/into-outfile"},next:{title:"LIMIT BY",permalink:"/docs/zh/sql-reference/statements/select/limit-by"}},m={},N=[{value:"\u652f\u6301\u7684\u8054\u63a5\u7c7b\u578b",id:"select-join-types",level:2},{value:"\u4e25\u683c",id:"join-settings",level:2},{value:"ASOF JOIN\u4f7f\u7528",id:"asof-join-usage",level:3},{value:"\u5206\u5e03\u5f0f\u8054\u63a5",id:"global-join",level:2},{value:"\u4f7f\u7528\u5efa\u8bae",id:"usage-recommendations",level:2},{value:"\u5904\u7406\u7a7a\u5355\u5143\u683c\u6216\u7a7a\u5355\u5143\u683c",id:"processing-of-empty-or-null-cells",level:3},{value:"\u8bed\u6cd5",id:"syntax",level:3},{value:"\u8bed\u6cd5\u9650\u5236",id:"syntax-limitations",level:3},{value:"\u6027\u80fd",id:"performance",level:3},{value:"\u5185\u5b58\u9650\u5236",id:"memory-limitations",level:3},{value:"\u4f8b\u5b50",id:"examples",level:2}],u={toc:N};function k(e){var n=e.components,t=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"select-join"},"JOIN\u5b50\u53e5"),(0,l.kt)("p",null,"Join\u901a\u8fc7\u4f7f\u7528\u4e00\u4e2a\u6216\u591a\u4e2a\u8868\u7684\u516c\u5171\u503c\u5408\u5e76\u6765\u81ea\u4e00\u4e2a\u6216\u591a\u4e2a\u8868\u7684\u5217\u6765\u751f\u6210\u65b0\u8868\u3002 \u5b83\u662f\u652f\u6301SQL\u7684\u6570\u636e\u5e93\u4e2d\u7684\u5e38\u89c1\u64cd\u4f5c\uff0c\u5b83\u5bf9\u5e94\u4e8e ",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Relational_algebra#Joins_and_join-like_operators"},"\u5173\u7cfb\u4ee3\u6570")," \u52a0\u5165\u3002 \u4e00\u4e2a\u8868\u8fde\u63a5\u7684\u7279\u6b8a\u60c5\u51b5\u901a\u5e38\u88ab\u79f0\u4e3a \u201cself-join\u201d."),(0,l.kt)("p",null,"\u8bed\u6cd5:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT <expr_list>\nFROM <left_table>\n[GLOBAL] [INNER|LEFT|RIGHT|FULL|CROSS] [OUTER|SEMI|ANTI|ANY|ASOF] JOIN <right_table>\n(ON <expr_list>)|(USING <column_list>) ...\n")),(0,l.kt)("p",null,"\u4ece\u8868\u8fbe\u5f0f ",(0,l.kt)("inlineCode",{parentName:"p"},"ON")," \u4ece\u5b50\u53e5\u548c\u5217 ",(0,l.kt)("inlineCode",{parentName:"p"},"USING")," \u5b50\u53e5\u88ab\u79f0\u4e3a \u201cjoin keys\u201d. \u9664\u975e\u53e6\u6709\u8bf4\u660e\uff0c\u52a0\u5165\u4ea7\u751f\u4e00\u4e2a ",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Cartesian_product"},"\u7b1b\u5361\u5c14\u79ef")," \u4ece\u5177\u6709\u5339\u914d\u7684\u884c \u201cjoin keys\u201d\uff0c\u8fd9\u53ef\u80fd\u4f1a\u4ea7\u751f\u6bd4\u6e90\u8868\u66f4\u591a\u7684\u884c\u7684\u7ed3\u679c\u3002"),(0,l.kt)("h2",{id:"select-join-types"},"\u652f\u6301\u7684\u8054\u63a5\u7c7b\u578b"),(0,l.kt)("p",null,"\u6240\u6709\u6807\u51c6 ",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Join_(SQL)"},"SQL JOIN")," \u652f\u6301\u7c7b\u578b:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"INNER JOIN"),"\uff0c\u53ea\u8fd4\u56de\u5339\u914d\u7684\u884c\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"LEFT OUTER JOIN"),"\uff0c\u9664\u4e86\u5339\u914d\u7684\u884c\u4e4b\u5916\uff0c\u8fd8\u8fd4\u56de\u5de6\u8868\u4e2d\u7684\u975e\u5339\u914d\u884c\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"RIGHT OUTER JOIN"),"\uff0c\u9664\u4e86\u5339\u914d\u7684\u884c\u4e4b\u5916\uff0c\u8fd8\u8fd4\u56de\u53f3\u8868\u4e2d\u7684\u975e\u5339\u914d\u884c\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"FULL OUTER JOIN"),"\uff0c\u9664\u4e86\u5339\u914d\u7684\u884c\u4e4b\u5916\uff0c\u8fd8\u4f1a\u8fd4\u56de\u4e24\u4e2a\u8868\u4e2d\u7684\u975e\u5339\u914d\u884c\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"CROSS JOIN"),"\uff0c\u4ea7\u751f\u6574\u4e2a\u8868\u7684\u7b1b\u5361\u5c14\u79ef, \u201cjoin keys\u201d \u662f ",(0,l.kt)("strong",{parentName:"li"},"\u4e0d")," \u6307\u5b9a\u3002")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"JOIN")," \u6ca1\u6709\u6307\u5b9a\u7c7b\u578b\u6697\u6307 ",(0,l.kt)("inlineCode",{parentName:"p"},"INNER"),". \u5173\u952e\u5b57 ",(0,l.kt)("inlineCode",{parentName:"p"},"OUTER")," \u53ef\u4ee5\u5b89\u5168\u5730\u7701\u7565\u3002 \u66ff\u4ee3\u8bed\u6cd5 ",(0,l.kt)("inlineCode",{parentName:"p"},"CROSS JOIN")," \u5728\u6307\u5b9a\u591a\u4e2a\u8868 ",(0,l.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/statements/select/from"},"FROM")," \u7528\u9017\u53f7\u5206\u9694\u3002"),(0,l.kt)("p",null,"ClickHouse\u4e2d\u63d0\u4f9b\u7684\u5176\u4ed6\u8054\u63a5\u7c7b\u578b:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"LEFT SEMI JOIN")," \u548c ",(0,l.kt)("inlineCode",{parentName:"li"},"RIGHT SEMI JOIN"),",\u767d\u540d\u5355 \u201cjoin keys\u201d\uff0c\u800c\u4e0d\u4ea7\u751f\u7b1b\u5361\u5c14\u79ef\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"LEFT ANTI JOIN")," \u548c ",(0,l.kt)("inlineCode",{parentName:"li"},"RIGHT ANTI JOIN"),"\uff0c\u9ed1\u540d\u5355 \u201cjoin keys\u201d\uff0c\u800c\u4e0d\u4ea7\u751f\u7b1b\u5361\u5c14\u79ef\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"LEFT ANY JOIN"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"RIGHT ANY JOIN")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"INNER ANY JOIN"),", partially (for opposite side of ",(0,l.kt)("inlineCode",{parentName:"li"},"LEFT")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"RIGHT"),") or completely (for ",(0,l.kt)("inlineCode",{parentName:"li"},"INNER")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"FULL"),") disables the cartesian product for standard ",(0,l.kt)("inlineCode",{parentName:"li"},"JOIN")," types."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ASOF JOIN")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"LEFT ASOF JOIN"),", joining sequences with a non-exact match. ",(0,l.kt)("inlineCode",{parentName:"li"},"ASOF JOIN")," usage is described below.")),(0,l.kt)("h2",{id:"join-settings"},"\u4e25\u683c"),(0,l.kt)("p",null,'!!! note "\u6ce8"\n\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u65b9\u5f0f\u590d\u76d6\u9ed8\u8ba4\u7684\u4e25\u683c\u6027\u503c ',(0,l.kt)("a",{parentName:"p",href:"/docs/zh/operations/settings/settings#settings-join_default_strictness"},"join_default_strictness")," \u8bbe\u7f6e\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Also the behavior of ClickHouse server for `ANY JOIN` operations depends on the [any_join_distinct_right_table_keys](/docs/zh/operations/settings/settings#any_join_distinct_right_table_keys) setting.\n")),(0,l.kt)("h3",{id:"asof-join-usage"},"ASOF JOIN\u4f7f\u7528"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ASOF JOIN")," \u5f53\u60a8\u9700\u8981\u8fde\u63a5\u6ca1\u6709\u5b8c\u5168\u5339\u914d\u7684\u8bb0\u5f55\u65f6\u975e\u5e38\u6709\u7528\u3002"),(0,l.kt)("p",null,"\u8be5\u7b97\u6cd5\u9700\u8981\u8868\u4e2d\u7684\u7279\u6b8a\u5217\u3002 \u8be5\u5217\u9700\u8981\u6ee1\u8db3:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5fc5\u987b\u5305\u542b\u6709\u5e8f\u5e8f\u5217\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u662f\u4ee5\u4e0b\u7c7b\u578b\u4e4b\u4e00: ",(0,l.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/int-uint"},"Int",(0,l.kt)("em",{parentName:"a"},"\uff0cUInt")),", ",(0,l.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/float"},"Float","*"),", ",(0,l.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/date"},"Date"),", ",(0,l.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/datetime"},"DateTime"),", ",(0,l.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/decimal"},"Decimal","*"),"."),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u80fd\u662f",(0,l.kt)("inlineCode",{parentName:"li"},"JOIN"),"\u5b50\u53e5\u4e2d\u552f\u4e00\u7684\u5217")),(0,l.kt)("p",null,"\u8bed\u6cd5 ",(0,l.kt)("inlineCode",{parentName:"p"},"ASOF JOIN ... ON"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT expressions_list\nFROM table_1\nASOF LEFT JOIN table_2\nON equi_cond AND closest_match_cond\n")),(0,l.kt)("p",null,"\u60a8\u53ef\u4ee5\u4f7f\u7528\u4efb\u610f\u6570\u91cf\u7684\u76f8\u7b49\u6761\u4ef6\u548c\u4e00\u4e2a\u4e14\u53ea\u6709\u4e00\u4e2a\u6700\u63a5\u8fd1\u7684\u5339\u914d\u6761\u4ef6\u3002 \u4f8b\u5982, ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT count() FROM table_1 ASOF LEFT JOIN table_2 ON table_1.a == table_2.b AND table_2.t <= table_1.t"),"."),(0,l.kt)("p",null,"\u652f\u6301\u6700\u63a5\u8fd1\u5339\u914d\u7684\u8fd0\u7b97\u7b26: ",(0,l.kt)("inlineCode",{parentName:"p"},">"),", ",(0,l.kt)("inlineCode",{parentName:"p"},">="),", ",(0,l.kt)("inlineCode",{parentName:"p"},"<"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"<="),"."),(0,l.kt)("p",null,"\u8bed\u6cd5 ",(0,l.kt)("inlineCode",{parentName:"p"},"ASOF JOIN ... USING"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT expressions_list\nFROM table_1\nASOF JOIN table_2\nUSING (equi_column1, ... equi_columnN, asof_column)\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"table_1.asof_column >= table_2.asof_column")," \u4e2d\uff0c ",(0,l.kt)("inlineCode",{parentName:"p"},"ASOF JOIN")," \u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"equi_columnX")," \u6765\u8fdb\u884c\u6761\u4ef6\u5339\u914d\uff0c ",(0,l.kt)("inlineCode",{parentName:"p"},"asof_column")," \u7528\u4e8eJOIN\u6700\u63a5\u8fd1\u5339\u914d\u3002  ",(0,l.kt)("inlineCode",{parentName:"p"},"asof_column")," \u5217\u603b\u662f\u5728\u6700\u540e\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"USING")," \u6761\u4ef6\u4e2d\u3002"),(0,l.kt)("p",null,"\u4f8b\u5982\uff0c\u53c2\u8003\u4e0b\u8868:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"     table_1                           table_2\n  event   | ev_time | user_id       event   | ev_time | user_id\n----------|---------|----------   ----------|---------|----------\n              ...                               ...\nevent_1_1 |  12:00  |  42         event_2_1 |  11:59  |   42\n              ...                 event_2_2 |  12:30  |   42\nevent_1_2 |  13:00  |  42         event_2_3 |  13:00  |   42\n              ...                               ...\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ASOF JOIN"),"\u4f1a\u4ece ",(0,l.kt)("inlineCode",{parentName:"p"},"table_2")," \u4e2d\u7684\u7528\u6237\u4e8b\u4ef6\u65f6\u95f4\u6233\u627e\u51fa\u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"table_1")," \u4e2d\u7528\u6237\u4e8b\u4ef6\u65f6\u95f4\u6233\u4e2d\u6700\u8fd1\u7684\u4e00\u4e2a\u65f6\u95f4\u6233\uff0c\u6765\u6ee1\u8db3\u6700\u63a5\u8fd1\u5339\u914d\u7684\u6761\u4ef6\u3002\u5982\u679c\u6709\u5f97\u8bdd\uff0c\u5219\u76f8\u7b49\u7684\u65f6\u95f4\u6233\u503c\u662f\u6700\u63a5\u8fd1\u7684\u503c\u3002\u5728\u6b64\u4f8b\u4e2d\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"user_id")," \u5217\u53ef\u7528\u4e8e\u6761\u4ef6\u5339\u914d\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"ev_time")," \u5217\u53ef\u7528\u4e8e\u6700\u63a5\u8fd1\u5339\u914d\u3002\u5728\u6b64\u4f8b\u4e2d\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"event_1_1")," \u53ef\u4ee5 JOIN ",(0,l.kt)("inlineCode",{parentName:"p"},"event_2_1"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"event_1_2")," \u53ef\u4ee5JOIN ",(0,l.kt)("inlineCode",{parentName:"p"},"event_2_3"),"\uff0c\u4f46\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"event_2_2")," \u4e0d\u80fd\u88abJOIN\u3002"),(0,l.kt)("p",null,'!!! note "\u6ce8"\n',(0,l.kt)("inlineCode",{parentName:"p"},"ASOF JOIN"),"\u5728 ",(0,l.kt)("a",{parentName:"p",href:"/docs/zh/engines/table-engines/special/join"},"JOIN")," \u8868\u5f15\u64ce\u4e2d ",(0,l.kt)("strong",{parentName:"p"},"\u4e0d\u53d7")," \u652f\u6301\u3002"),(0,l.kt)("h2",{id:"global-join"},"\u5206\u5e03\u5f0f\u8054\u63a5"),(0,l.kt)("p",null,"\u6709\u4e24\u79cd\u65b9\u6cd5\u53ef\u4ee5\u6267\u884c\u6d89\u53ca\u5206\u5e03\u5f0f\u8868\u7684join:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5f53\u4f7f\u7528\u6b63\u5e38 ",(0,l.kt)("inlineCode",{parentName:"li"},"JOIN"),"\uff0c\u5c06\u67e5\u8be2\u53d1\u9001\u5230\u8fdc\u7a0b\u670d\u52a1\u5668\u3002 \u4e3a\u4e86\u521b\u5efa\u6b63\u786e\u7684\u8868\uff0c\u5728\u6bcf\u4e2a\u5b50\u67e5\u8be2\u4e0a\u8fd0\u884c\u5b50\u67e5\u8be2\uff0c\u5e76\u4f7f\u7528\u6b64\u8868\u6267\u884c\u8054\u63a5\u3002 \u6362\u53e5\u8bdd\u8bf4\uff0c\u5728\u6bcf\u4e2a\u670d\u52a1\u5668\u4e0a\u5355\u72ec\u5f62\u6210\u53f3\u8868\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u65f6 ",(0,l.kt)("inlineCode",{parentName:"li"},"GLOBAL ... JOIN"),"\uff0c\u9996\u5148\u8bf7\u6c42\u8005\u670d\u52a1\u5668\u8fd0\u884c\u4e00\u4e2a\u5b50\u67e5\u8be2\u6765\u8ba1\u7b97\u6b63\u786e\u7684\u8868\u3002 \u6b64\u4e34\u65f6\u8868\u5c06\u4f20\u9012\u5230\u6bcf\u4e2a\u8fdc\u7a0b\u670d\u52a1\u5668\uff0c\u5e76\u4f7f\u7528\u4f20\u8f93\u7684\u4e34\u65f6\u6570\u636e\u5bf9\u5176\u8fd0\u884c\u67e5\u8be2\u3002")),(0,l.kt)("p",null,"\u4f7f\u7528\u65f6\u8981\u5c0f\u5fc3 ",(0,l.kt)("inlineCode",{parentName:"p"},"GLOBAL"),". \u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,l.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/operators/in#select-distributed-subqueries"},"\u5206\u5e03\u5f0f\u5b50\u67e5\u8be2")," \u79d1\u3002"),(0,l.kt)("h2",{id:"usage-recommendations"},"\u4f7f\u7528\u5efa\u8bae"),(0,l.kt)("h3",{id:"processing-of-empty-or-null-cells"},"\u5904\u7406\u7a7a\u5355\u5143\u683c\u6216\u7a7a\u5355\u5143\u683c"),(0,l.kt)("p",null,"\u5728\u8fde\u63a5\u8868\u65f6\uff0c\u53ef\u80fd\u4f1a\u51fa\u73b0\u7a7a\u5355\u5143\u683c\u3002 \u8bbe\u7f6e ",(0,l.kt)("a",{parentName:"p",href:"/docs/zh/operations/settings/settings#join_use_nulls"},"join_use_nulls")," \u5b9a\u4e49ClickHouse\u5982\u4f55\u586b\u5145\u8fd9\u4e9b\u5355\u5143\u683c\u3002"),(0,l.kt)("p",null,"\u5982\u679c ",(0,l.kt)("inlineCode",{parentName:"p"},"JOIN")," \u952e\u662f ",(0,l.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/nullable"},"\u53ef\u4e3a\u7a7a")," \u5b57\u6bb5\uff0c\u5176\u4e2d\u81f3\u5c11\u6709\u4e00\u4e2a\u952e\u5177\u6709\u503c\u7684\u884c ",(0,l.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/syntax#null-literal"},"NULL")," \u6ca1\u6709\u52a0\u5165\u3002"),(0,l.kt)("h3",{id:"syntax"},"\u8bed\u6cd5"),(0,l.kt)("p",null,"\u5728\u6307\u5b9a\u7684\u5217 ",(0,l.kt)("inlineCode",{parentName:"p"},"USING")," \u4e24\u4e2a\u5b50\u67e5\u8be2\u4e2d\u5fc5\u987b\u5177\u6709\u76f8\u540c\u7684\u540d\u79f0\uff0c\u5e76\u4e14\u5176\u4ed6\u5217\u5fc5\u987b\u4ee5\u4e0d\u540c\u7684\u65b9\u5f0f\u547d\u540d\u3002 \u60a8\u53ef\u4ee5\u4f7f\u7528\u522b\u540d\u66f4\u6539\u5b50\u67e5\u8be2\u4e2d\u7684\u5217\u540d\u3002"),(0,l.kt)("p",null,"\u8be5 ",(0,l.kt)("inlineCode",{parentName:"p"},"USING")," \u5b50\u53e5\u6307\u5b9a\u4e00\u4e2a\u6216\u591a\u4e2a\u8981\u8054\u63a5\u7684\u5217\uff0c\u8fd9\u5c06\u5efa\u7acb\u8fd9\u4e9b\u5217\u7684\u76f8\u7b49\u6027\u3002 \u5217\u7684\u5217\u8868\u8bbe\u7f6e\u4e0d\u5e26\u62ec\u53f7\u3002 \u4e0d\u652f\u6301\u66f4\u590d\u6742\u7684\u8fde\u63a5\u6761\u4ef6\u3002"),(0,l.kt)("h3",{id:"syntax-limitations"},"\u8bed\u6cd5\u9650\u5236"),(0,l.kt)("p",null,"\u5bf9\u4e8e\u591a\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"JOIN")," \u5355\u4e2a\u5b50\u53e5 ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT")," \u67e5\u8be2:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u4ee5\u6240\u6709\u5217 ",(0,l.kt)("inlineCode",{parentName:"li"},"*")," \u4ec5\u5728\u8054\u63a5\u8868\u65f6\u624d\u53ef\u7528\uff0c\u800c\u4e0d\u662f\u5b50\u67e5\u8be2\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u8be5 ",(0,l.kt)("inlineCode",{parentName:"li"},"PREWHERE")," \u6761\u6b3e\u4e0d\u53ef\u7528\u3002")),(0,l.kt)("p",null,"\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"ON"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"WHERE"),"\uff0c\u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"GROUP BY")," \u6761\u6b3e:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4efb\u610f\u8868\u8fbe\u5f0f\u4e0d\u80fd\u7528\u4e8e ",(0,l.kt)("inlineCode",{parentName:"li"},"ON"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"WHERE"),"\uff0c\u548c ",(0,l.kt)("inlineCode",{parentName:"li"},"GROUP BY")," \u5b50\u53e5\uff0c\u4f46\u4f60\u53ef\u4ee5\u5b9a\u4e49\u4e00\u4e2a\u8868\u8fbe\u5f0f ",(0,l.kt)("inlineCode",{parentName:"li"},"SELECT")," \u5b50\u53e5\uff0c\u7136\u540e\u901a\u8fc7\u522b\u540d\u5728\u8fd9\u4e9b\u5b50\u53e5\u4e2d\u4f7f\u7528\u5b83\u3002")),(0,l.kt)("h3",{id:"performance"},"\u6027\u80fd"),(0,l.kt)("p",null,"\u5f53\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"JOIN"),"\uff0c\u4e0e\u67e5\u8be2\u7684\u5176\u4ed6\u9636\u6bb5\u76f8\u5173\u7684\u6267\u884c\u987a\u5e8f\u6ca1\u6709\u4f18\u5316\u3002 \u8fde\u63a5\uff08\u5728\u53f3\u8868\u4e2d\u641c\u7d22\uff09\u5728\u8fc7\u6ee4\u4e4b\u524d\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"WHERE")," \u548c\u805a\u96c6\u4e4b\u524d\u3002"),(0,l.kt)("p",null,"\u6bcf\u6b21\u4f7f\u7528\u76f8\u540c\u7684\u67e5\u8be2\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"JOIN"),"\uff0c\u5b50\u67e5\u8be2\u518d\u6b21\u8fd0\u884c\uff0c\u56e0\u4e3a\u7ed3\u679c\u672a\u7f13\u5b58\u3002 \u4e3a\u4e86\u907f\u514d\u8fd9\u79cd\u60c5\u51b5\uff0c\u4f7f\u7528\u7279\u6b8a\u7684 ",(0,l.kt)("a",{parentName:"p",href:"/docs/zh/engines/table-engines/special/join"},"\u52a0\u5165\u6211\u4eec")," \u8868\u5f15\u64ce\uff0c\u5b83\u662f\u4e00\u4e2a\u7528\u4e8e\u8fde\u63a5\u7684\u51c6\u5907\u597d\u7684\u6570\u7ec4\uff0c\u603b\u662f\u5728RAM\u4e2d\u3002"),(0,l.kt)("p",null,"\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u4f7f\u7528\u6548\u7387\u66f4\u9ad8 ",(0,l.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/operators/in"},"IN")," \u800c\u4e0d\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"JOIN"),"."),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u9700\u8981\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"JOIN")," \u5bf9\u4e8e\u8fde\u63a5\u7ef4\u5ea6\u8868\uff08\u8fd9\u4e9b\u662f\u5305\u542b\u7ef4\u5ea6\u5c5e\u6027\u7684\u76f8\u5bf9\u8f83\u5c0f\u7684\u8868\uff0c\u4f8b\u5982\u5e7f\u544a\u6d3b\u52a8\u7684\u540d\u79f0\uff09\uff0c ",(0,l.kt)("inlineCode",{parentName:"p"},"JOIN")," \u7531\u4e8e\u6bcf\u4e2a\u67e5\u8be2\u90fd\u4f1a\u91cd\u65b0\u8bbf\u95ee\u6b63\u786e\u7684\u8868\uff0c\u56e0\u6b64\u53ef\u80fd\u4e0d\u592a\u65b9\u4fbf\u3002 \u5bf9\u4e8e\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u6709\u4e00\u4e2a \u201cexternal dictionaries\u201d \u60a8\u5e94\u8be5\u4f7f\u7528\u7684\u529f\u80fd ",(0,l.kt)("inlineCode",{parentName:"p"},"JOIN"),". \u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,l.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/dictionaries/external-dictionaries/external-dicts"},"\u5916\u90e8\u5b57\u5178")," \u79d1\u3002"),(0,l.kt)("h3",{id:"memory-limitations"},"\u5185\u5b58\u9650\u5236"),(0,l.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cClickHouse\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Hash_join"},"\u54c8\u5e0c\u8054\u63a5")," \u7b97\u6cd5\u3002 ClickHouse\u91c7\u53d6 ",(0,l.kt)("inlineCode",{parentName:"p"},"<right_table>")," \u5e76\u5728RAM\u4e2d\u4e3a\u5176\u521b\u5efa\u54c8\u5e0c\u8868\u3002 \u5728\u67d0\u4e2a\u5185\u5b58\u6d88\u8017\u9608\u503c\u4e4b\u540e\uff0cClickHouse\u56de\u9000\u5230\u5408\u5e76\u8054\u63a5\u7b97\u6cd5\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u9700\u8981\u9650\u5236\u8054\u63a5\u64cd\u4f5c\u5185\u5b58\u6d88\u8017\uff0c\u8bf7\u4f7f\u7528\u4ee5\u4e0b\u8bbe\u7f6e:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/zh/operations/settings/query-complexity#settings-max_rows_in_join"},"max_rows_in_join")," \u2014 Limits number of rows in the hash table."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/zh/operations/settings/query-complexity#settings-max_bytes_in_join"},"max_bytes_in_join")," \u2014 Limits size of the hash table.")),(0,l.kt)("p",null,"\u5f53\u4efb\u4f55\u8fd9\u4e9b\u9650\u5236\u8fbe\u5230\uff0cClickHouse\u4f5c\u4e3a ",(0,l.kt)("a",{parentName:"p",href:"/docs/zh/operations/settings/query-complexity#settings-join_overflow_mode"},"join_overflow_mode")," \u8bbe\u7f6e\u6307\u793a\u3002"),(0,l.kt)("h2",{id:"examples"},"\u4f8b\u5b50"),(0,l.kt)("p",null,"\u793a\u4f8b:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    CounterID,\n    hits,\n    visits\nFROM\n(\n    SELECT\n        CounterID,\n        count() AS hits\n    FROM test.hits\n    GROUP BY CounterID\n) ANY LEFT JOIN\n(\n    SELECT\n        CounterID,\n        sum(Sign) AS visits\n    FROM test.visits\n    GROUP BY CounterID\n) USING CounterID\nORDER BY hits DESC\nLIMIT 10\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500CounterID\u2500\u252c\u2500\u2500\u2500hits\u2500\u252c\u2500visits\u2500\u2510\n\u2502   1143050 \u2502 523264 \u2502  13665 \u2502\n\u2502    731962 \u2502 475698 \u2502 102716 \u2502\n\u2502    722545 \u2502 337212 \u2502 108187 \u2502\n\u2502    722889 \u2502 252197 \u2502  10547 \u2502\n\u2502   2237260 \u2502 196036 \u2502   9522 \u2502\n\u2502  23057320 \u2502 147211 \u2502   7689 \u2502\n\u2502    722818 \u2502  90109 \u2502  17847 \u2502\n\u2502     48221 \u2502  85379 \u2502   4652 \u2502\n\u2502  19762435 \u2502  77807 \u2502   7026 \u2502\n\u2502    722884 \u2502  77492 \u2502  11056 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}k.isMDXComponent=!0}}]);