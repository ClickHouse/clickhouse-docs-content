"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[9167],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),o=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=o(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=o(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||l;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var o=2;o<l;o++)s[o]=n[o];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},14233:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return p}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),s=["components"],i={slug:"/ru/sql-reference/statements/describe-table",sidebar_position:42,sidebar_label:"DESCRIBE TABLE"},c="DESCRIBE TABLE",o={unversionedId:"ru/sql-reference/statements/describe-table",id:"ru/sql-reference/statements/describe-table",title:"DESCRIBE TABLE",description:"misc-describe-table}",source:"@site/docs/ru/sql-reference/statements/describe-table.md",sourceDirName:"ru/sql-reference/statements",slug:"/ru/sql-reference/statements/describe-table",permalink:"/docs/ru/sql-reference/statements/describe-table",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/statements/describe-table.md",tags:[],version:"current",sidebarPosition:42,frontMatter:{slug:"/ru/sql-reference/statements/describe-table",sidebar_position:42,sidebar_label:"DESCRIBE TABLE"},sidebar:"russia",previous:{title:"\u041f\u0440\u043e\u0447\u0438\u0435 \u0432\u0438\u0434\u044b \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432",permalink:"/docs/ru/sql-reference/statements/misc"},next:{title:"DETACH",permalink:"/docs/ru/sql-reference/statements/detach"}},u={},p=[],m={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"misc-describe-table"},"DESCRIBE TABLE"),(0,l.kt)("p",null,"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u044b."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"DESC|DESCRIBE TABLE [db.]table [INTO OUTFILE filename] [FORMAT format]\n")),(0,l.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441 ",(0,l.kt)("inlineCode",{parentName:"p"},"DESCRIBE")," \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0441\u0442\u043e\u043b\u0431\u0446\u0430 \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0441\u0442\u0440\u043e\u043a\u0443 \u0441\u043e \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f\u043c\u0438 \u0442\u0438\u043f\u0430 ",(0,l.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/string"},"String"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"name")," \u2014 \u0438\u043c\u044f \u0441\u0442\u043e\u043b\u0431\u0446\u0430;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"type")," \u2014 \u0442\u0438\u043f \u0441\u0442\u043e\u043b\u0431\u0446\u0430;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"default_type")," \u2014 \u0432\u0438\u0434 ",(0,l.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/statements/create/table#create-default-values"},"\u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"DEFAULT"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"MATERIALIZED")," \u0438\u043b\u0438 ",(0,l.kt)("inlineCode",{parentName:"li"},"ALIAS"),". \u0415\u0441\u043b\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u043d\u0435 \u0437\u0430\u0434\u0430\u043d\u043e, \u0442\u043e \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442\u0441\u044f \u043f\u0443\u0441\u0442\u0430\u044f \u0441\u0442\u0440\u043e\u043a\u0430;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"default_expression")," \u2014 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435, \u0437\u0430\u0434\u0430\u043d\u043d\u043e\u0435 \u0432 \u0441\u0435\u043a\u0446\u0438\u0438 ",(0,l.kt)("inlineCode",{parentName:"li"},"DEFAULT"),";"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"comment")," \u2014 ",(0,l.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/statements/alter/column#alter_comment-column"},"\u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439"),";"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"codec_expression")," \u2014 ",(0,l.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/statements/create/table#codecs"},"\u043a\u043e\u0434\u0435\u043a"),", \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f \u043a \u0441\u0442\u043e\u043b\u0431\u0446\u0443;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ttl_expression")," \u2014 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435 ",(0,l.kt)("a",{parentName:"li",href:"/docs/ru/engines/table-engines/mergetree-family/mergetree#table_engine-mergetree-ttl"},"TTL"),";"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"is_subcolumn")," \u2014 \u0444\u043b\u0430\u0433, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0440\u0430\u0432\u0435\u043d ",(0,l.kt)("inlineCode",{parentName:"li"},"1")," \u0434\u043b\u044f \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0438\u0445 \u043f\u043e\u0434\u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432. \u041e\u043d \u043f\u043e\u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0432 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0435, \u0442\u043e\u043b\u044c\u043a\u043e \u0435\u0441\u043b\u0438 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043f\u043e\u0434\u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u043e\u0439 ",(0,l.kt)("a",{parentName:"li",href:"/docs/ru/operations/settings/settings#describe_include_subcolumns"},"describe_include_subcolumns"),".")),(0,l.kt)("p",null,"\u041a\u0430\u0436\u0434\u044b\u0439 \u0441\u0442\u043e\u043b\u0431\u0435\u0446 ",(0,l.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/nested-data-structures/nested"},"Nested")," \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440 \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e. \u041f\u0435\u0440\u0435\u0434 \u0435\u0433\u043e \u0438\u043c\u0435\u043d\u0435\u043c \u0441\u0442\u0430\u0432\u0438\u0442\u0441\u044f \u0438\u043c\u044f \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u0441\u043a\u043e\u0433\u043e \u0441\u0442\u043e\u043b\u0431\u0446\u0430 \u0441 \u0442\u043e\u0447\u043a\u043e\u0439.\n\u0427\u0442\u043e\u0431\u044b \u043e\u0442\u043e\u0431\u0440\u0430\u0437\u0438\u0442\u044c \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0438\u0435 \u043f\u043e\u0434\u0441\u0442\u043e\u043b\u0431\u0446\u044b \u0434\u0440\u0443\u0433\u0438\u0445 \u0442\u0438\u043f\u043e\u0432 \u0434\u0430\u043d\u043d\u044b\u0445, \u043d\u0443\u0436\u043d\u043e \u0432\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0443 ",(0,l.kt)("a",{parentName:"p",href:"/docs/ru/operations/settings/settings#describe_include_subcolumns"},"describe_include_subcolumns"),". "),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,l.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE describe_example (\n    id UInt64, text String DEFAULT 'unknown' CODEC(ZSTD),\n    user Tuple (name String, age UInt8)\n) ENGINE = MergeTree() ORDER BY id;\n\nDESCRIBE TABLE describe_example;\nDESCRIBE TABLE describe_example SETTINGS describe_include_subcolumns=1;\n")),(0,l.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500name\u2500\u252c\u2500type\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500default_type\u2500\u252c\u2500default_expression\u2500\u252c\u2500comment\u2500\u252c\u2500codec_expression\u2500\u252c\u2500ttl_expression\u2500\u2510\n\u2502 id   \u2502 UInt64                        \u2502              \u2502                    \u2502         \u2502                  \u2502                \u2502\n\u2502 text \u2502 String                        \u2502 DEFAULT      \u2502 'unknown'          \u2502         \u2502 ZSTD(1)          \u2502                \u2502\n\u2502 user \u2502 Tuple(name String, age UInt8) \u2502              \u2502                    \u2502         \u2502                  \u2502                \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"\u0412\u0442\u043e\u0440\u043e\u0439 \u0437\u0430\u043f\u0440\u043e\u0441 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0432\u044b\u0432\u043e\u0434\u0438\u0442 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e \u043f\u043e\u0434\u0441\u0442\u043e\u043b\u0431\u0446\u0430\u0445:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500name\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500type\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500default_type\u2500\u252c\u2500default_expression\u2500\u252c\u2500comment\u2500\u252c\u2500codec_expression\u2500\u252c\u2500ttl_expression\u2500\u252c\u2500is_subcolumn\u2500\u2510\n\u2502 id        \u2502 UInt64                        \u2502              \u2502                    \u2502         \u2502                  \u2502                \u2502            0 \u2502\n\u2502 text      \u2502 String                        \u2502 DEFAULT      \u2502 'unknown'          \u2502         \u2502 ZSTD(1)          \u2502                \u2502            0 \u2502\n\u2502 user      \u2502 Tuple(name String, age UInt8) \u2502              \u2502                    \u2502         \u2502                  \u2502                \u2502            0 \u2502\n\u2502 user.name \u2502 String                        \u2502              \u2502                    \u2502         \u2502                  \u2502                \u2502            1 \u2502\n\u2502 user.age  \u2502 UInt8                         \u2502              \u2502                    \u2502         \u2502                  \u2502                \u2502            1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0421\u043c. \u0442\u0430\u043a\u0436\u0435")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 ",(0,l.kt)("a",{parentName:"li",href:"/docs/ru/operations/settings/settings#describe_include_subcolumns"},"describe_include_subcolumns"),".")))}d.isMDXComponent=!0}}]);