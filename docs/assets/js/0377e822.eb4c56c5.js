"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[92787],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(n),c=r,k=u["".concat(s,".").concat(c)]||u[c]||d[c]||i;return n?a.createElement(k,l(l({ref:t},m),{},{components:n})):a.createElement(k,l({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},27457:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return d}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],o={slug:"/ru/engines/table-engines/integrations/s3",sidebar_position:4,sidebar_label:"S3"},s="\u0414\u0432\u0438\u0436\u043e\u043a \u0442\u0430\u0431\u043b\u0438\u0446 S3",p={unversionedId:"ru/engines/table-engines/integrations/s3",id:"ru/engines/table-engines/integrations/s3",title:"\u0414\u0432\u0438\u0436\u043e\u043a \u0442\u0430\u0431\u043b\u0438\u0446 S3",description:"table-engine-s3}",source:"@site/docs/ru/engines/table-engines/integrations/s3.md",sourceDirName:"ru/engines/table-engines/integrations",slug:"/ru/engines/table-engines/integrations/s3",permalink:"/docs/ru/engines/table-engines/integrations/s3",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/engines/table-engines/integrations/s3.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{slug:"/ru/engines/table-engines/integrations/s3",sidebar_position:4,sidebar_label:"S3"},sidebar:"russia",previous:{title:"MySQL",permalink:"/docs/ru/engines/table-engines/integrations/mysql"},next:{title:"MongoDB",permalink:"/docs/ru/engines/table-engines/integrations/mongodb"}},m={},d=[{value:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u044b",id:"creating-a-table",level:2},{value:"\u0412\u0438\u0440\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u0442\u043e\u043b\u0431\u0446\u044b",id:"virtual-columns",level:2},{value:"\u0414\u0435\u0442\u0430\u043b\u0438 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438",id:"implementation-details",level:2},{value:"\u0421\u0438\u043c\u0432\u043e\u043b\u044b \u043f\u043e\u0434\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438",id:"wildcards-in-path",level:2}],u={toc:d};function c(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"table-engine-s3"},"\u0414\u0432\u0438\u0436\u043e\u043a \u0442\u0430\u0431\u043b\u0438\u0446 S3"),(0,i.kt)("p",null,"\u042d\u0442\u043e\u0442 \u0434\u0432\u0438\u0436\u043e\u043a \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044e \u0441 \u044d\u043a\u043e\u0441\u0438\u0441\u0442\u0435\u043c\u043e\u0439 ",(0,i.kt)("a",{parentName:"p",href:"https://aws.amazon.com/s3/"},"Amazon S3"),". \u041e\u043d \u043f\u043e\u0445\u043e\u0436 \u043d\u0430 \u0434\u0432\u0438\u0436\u043e\u043a ",(0,i.kt)("a",{parentName:"p",href:"/docs/ru/engines/table-engines/special/file#table_engines-hdfs"},"HDFS"),", \u043d\u043e \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u0441\u043f\u0435\u0446\u0438\u0444\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0434\u043b\u044f S3 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438."),(0,i.kt)("h2",{id:"creating-a-table"},"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u044b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE s3_engine_table (name String, value UInt32)\n    ENGINE = S3(path, [aws_access_key_id, aws_secret_access_key,] format, [compression])\n    [SETTINGS ...]\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0434\u0432\u0438\u0436\u043a\u0430")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"path"),' \u2014 URL-\u0430\u0434\u0440\u0435\u0441 \u0431\u0430\u043a\u0435\u0442\u0430 \u0441 \u0443\u043a\u0430\u0437\u0430\u043d\u0438\u0435\u043c \u043f\u0443\u0442\u0438 \u043a \u0444\u0430\u0439\u043b\u0443. \u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u043f\u043e\u0434\u0441\u0442\u0430\u043d\u043e\u0432\u043e\u0447\u043d\u044b\u0435 \u0437\u043d\u0430\u043a\u0438 \u0432 \u0440\u0435\u0436\u0438\u043c\u0435 "\u0442\u043e\u043b\u044c\u043a\u043e \u0447\u0442\u0435\u043d\u0438\u0435": ',(0,i.kt)("inlineCode",{parentName:"li"},"*"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"?"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"{abc,def}")," \u0438 ",(0,i.kt)("inlineCode",{parentName:"li"},"{N..M}")," \u0433\u0434\u0435 ",(0,i.kt)("inlineCode",{parentName:"li"},"N"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"M")," \u2014 \u0447\u0438\u0441\u043b\u0430, ",(0,i.kt)("inlineCode",{parentName:"li"},"'abc'"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"'def'")," \u2014 \u0441\u0442\u0440\u043e\u043a\u0438. \u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u0441\u043c\u043e\u0442\u0440\u0438 ",(0,i.kt)("a",{parentName:"li",href:"#wildcards-in-path"},"\u043d\u0438\u0436\u0435"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"format")," \u2014 ",(0,i.kt)("a",{parentName:"li",href:"/docs/ru/interfaces/formats#formats"},"\u0444\u043e\u0440\u043c\u0430\u0442")," \u0444\u0430\u0439\u043b\u0430."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"aws_access_key_id"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"aws_secret_access_key")," - \u0434\u0430\u043d\u043d\u044b\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0443\u0447\u0435\u0442\u043d\u043e\u0439 \u0437\u0430\u043f\u0438\u0441\u0438 ",(0,i.kt)("a",{parentName:"li",href:"https://aws.amazon.com/ru/"},"AWS"),". \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0438\u0445 \u0434\u043b\u044f \u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438 \u0432\u0430\u0448\u0438\u0445 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432. \u041d\u0435\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440. \u0415\u0441\u043b\u0438 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0443\u0447\u0435\u0442\u043d\u043e\u0439 \u0437\u0430\u043f\u0438\u0441\u0438 \u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d\u044b, \u0442\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u0434\u0430\u043d\u043d\u044b\u0435 \u0438\u0437 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0430. \u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 ",(0,i.kt)("a",{parentName:"li",href:"/docs/ru/engines/table-engines/mergetree-family/mergetree#table_engine-mergetree-s3"},"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0441\u0435\u0440\u0432\u0438\u0441\u0430 S3 \u0434\u043b\u044f \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"compression")," \u2014 \u0442\u0438\u043f \u0441\u0436\u0430\u0442\u0438\u044f. \u0412\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"gzip/gz"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"brotli/br"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"xz/LZMA"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"zstd/zst"),". \u041d\u0435\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440. \u0415\u0441\u043b\u0438 \u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d\u043e, \u0442\u043e \u0442\u0438\u043f \u0441\u0436\u0430\u0442\u0438\u044f \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442\u0441\u044f \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043f\u043e \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044e \u0444\u0430\u0439\u043b\u0430.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE s3_engine_table (name String, value UInt32) \n    ENGINE=S3('https://storage.yandexcloud.net/my-test-bucket-768/test-data.csv.gz', 'CSV', 'gzip')\n    SETTINGS input_format_with_names_use_header = 0;\n\nINSERT INTO s3_engine_table VALUES ('one', 1), ('two', 2), ('three', 3);\n\nSELECT * FROM s3_engine_table LIMIT 2;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500name\u2500\u252c\u2500value\u2500\u2510\n\u2502 one  \u2502     1 \u2502\n\u2502 two  \u2502     2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("h2",{id:"virtual-columns"},"\u0412\u0438\u0440\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u0442\u043e\u043b\u0431\u0446\u044b"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"_path")," \u2014 \u043f\u0443\u0442\u044c \u043a \u0444\u0430\u0439\u043b\u0443."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"_file")," \u2014 \u0438\u043c\u044f \u0444\u0430\u0439\u043b\u0430.")),(0,i.kt)("p",null,"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u043f\u0440\u043e \u0432\u0438\u0440\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u0442\u043e\u043b\u0431\u0446\u044b \u043c\u043e\u0436\u043d\u043e \u043f\u0440\u043e\u0447\u0438\u0442\u0430\u0442\u044c ",(0,i.kt)("a",{parentName:"p",href:"/docs/ru/engines/table-engines/#table_engines-virtual_columns"},"\u0437\u0434\u0435\u0441\u044c"),"."),(0,i.kt)("h2",{id:"implementation-details"},"\u0414\u0435\u0442\u0430\u043b\u0438 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u0427\u0442\u0435\u043d\u0438\u0435 \u0438 \u0437\u0430\u043f\u0438\u0441\u044c \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u043f\u0430\u0440\u0430\u043b\u043b\u0435\u043b\u044c\u043d\u044b\u043c\u0438."),(0,i.kt)("li",{parentName:"ul"},"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0440\u0435\u043f\u043b\u0438\u043a\u0430\u0446\u0438\u044f \u0431\u0435\u0437 \u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445 (",(0,i.kt)("a",{parentName:"li",href:"/docs/ru/operations/storing-data#zero-copy"},"zero-copy"),")."),(0,i.kt)("li",{parentName:"ul"},"\u041d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044e\u0442\u0441\u044f:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u0437\u0430\u043f\u0440\u043e\u0441\u044b ",(0,i.kt)("inlineCode",{parentName:"li"},"ALTER")," \u0438 ",(0,i.kt)("inlineCode",{parentName:"li"},"SELECT...SAMPLE"),","),(0,i.kt)("li",{parentName:"ul"},"\u0438\u043d\u0434\u0435\u043a\u0441\u044b.")))),(0,i.kt)("h2",{id:"wildcards-in-path"},"\u0421\u0438\u043c\u0432\u043e\u043b\u044b \u043f\u043e\u0434\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438"),(0,i.kt)("p",null,"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442 ",(0,i.kt)("inlineCode",{parentName:"p"},"path")," \u043c\u043e\u0436\u0435\u0442 \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u043d\u0430 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0444\u0430\u0439\u043b\u043e\u0432, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u0441\u0438\u043c\u0432\u043e\u043b\u044b \u043f\u043e\u0434\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438. \u0414\u043b\u044f \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0444\u0430\u0439\u043b \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c \u0438 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c \u0432\u0441\u0435\u043c\u0443 \u0448\u0430\u0431\u043b\u043e\u043d\u0443 \u043f\u0443\u0442\u0438. \u0421\u043f\u0438\u0441\u043e\u043a \u0444\u0430\u0439\u043b\u043e\u0432 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442\u0441\u044f \u0432\u043e \u0432\u0440\u0435\u043c\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u0430 ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT")," (\u043d\u0435 \u0432 \u043c\u043e\u043c\u0435\u043d\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u0430 ",(0,i.kt)("inlineCode",{parentName:"p"},"CREATE"),")."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"*")," \u2014 \u0437\u0430\u043c\u0435\u043d\u044f\u0435\u0442 \u043b\u044e\u0431\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043b\u044e\u0431\u044b\u0445 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432, \u043a\u0440\u043e\u043c\u0435 ",(0,i.kt)("inlineCode",{parentName:"li"},"/"),", \u0432\u043a\u043b\u044e\u0447\u0430\u044f \u043f\u0443\u0441\u0442\u0443\u044e \u0441\u0442\u0440\u043e\u043a\u0443."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"?")," \u2014 \u0437\u0430\u043c\u0435\u043d\u044f\u0435\u0442 \u043b\u044e\u0431\u044b\u0435 \u043e\u0434\u0438\u043d\u043e\u0447\u043d\u044b\u0435 \u0441\u0438\u043c\u0432\u043e\u043b\u044b."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{some_string, another_string, yet_another_one}")," \u2014 \u0437\u0430\u043c\u0435\u043d\u044f\u0435\u0442 \u043b\u044e\u0431\u044b\u0435 \u0441\u0442\u0440\u043e\u043a\u0438 ",(0,i.kt)("inlineCode",{parentName:"li"},"'some_string', 'another_string', 'yet_another_one'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{N..M}")," \u2014 \u0437\u0430\u043c\u0435\u043d\u044f\u0435\u0442 \u043b\u044e\u0431\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u043e\u0442 N \u0434\u043e M, \u0432\u043a\u043b\u044e\u0447\u0430\u044f \u043e\u0431\u0435 \u0433\u0440\u0430\u043d\u0438\u0446\u044b. N \u0438 M \u043c\u043e\u0433\u0443\u0442 \u0438\u043c\u0435\u0442\u044c \u0432\u0435\u0434\u0443\u0449\u0438\u0435 \u043d\u0443\u043b\u0438, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 ",(0,i.kt)("inlineCode",{parentName:"li"},"000..078"),".")),(0,i.kt)("p",null,"\u041a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438 \u0441 ",(0,i.kt)("inlineCode",{parentName:"p"},"{}")," \u0430\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u044b \u0444\u0443\u043d\u043a\u0446\u0438\u0438 ",(0,i.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/table-functions/remote"},"remote"),"."),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),'"\u041f\u0440\u0438\u043c\u0435\u0447\u0430\u043d\u0438\u0435"')),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre"},"\u0415\u0441\u043b\u0438 \u0441\u043f\u0438\u0441\u043e\u043a \u0444\u0430\u0439\u043b\u043e\u0432 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d\u044b \u0447\u0438\u0441\u0435\u043b \u0441 \u0432\u0435\u0434\u0443\u0449\u0438\u043c\u0438 \u043d\u0443\u043b\u044f\u043c\u0438, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044e \u0441 \u0444\u0438\u0433\u0443\u0440\u043d\u044b\u043c\u0438 \u0441\u043a\u043e\u0431\u043a\u0430\u043c\u0438 \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0439 \u0446\u0438\u0444\u0440\u044b \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e \u0438\u043b\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 `?`.\n")),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440 \u043f\u043e\u0434\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 1")),(0,i.kt)("p",{parentName:"div"},"\u0422\u0430\u0431\u043b\u0438\u0446\u0430 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0434\u0430\u043d\u043d\u044b\u0435 \u0438\u0437 \u0444\u0430\u0439\u043b\u043e\u0432 \u0441 \u0438\u043c\u0435\u043d\u0430\u043c\u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"file-000.csv"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"file-001.csv"),", \u2026 , ",(0,i.kt)("inlineCode",{parentName:"p"},"file-999.csv"),":"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE big_table (name String, value UInt32)\n    ENGINE = S3('https://storage.yandexcloud.net/my-bucket/my_folder/file-{000..999}.csv', 'CSV');\n")),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440 \u043f\u043e\u0434\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 2")),(0,i.kt)("p",{parentName:"div"},"\u041f\u0440\u0435\u0434\u043f\u043e\u043b\u043e\u0436\u0438\u043c, \u0435\u0441\u0442\u044c \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0444\u0430\u0439\u043b\u043e\u0432 \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 CSV \u0441\u043e \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c\u0438 URL-\u0430\u0434\u0440\u0435\u0441\u0430\u043c\u0438 \u0432 S3:"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"'",(0,i.kt)("a",{parentName:"li",href:"https://storage.yandexcloud.net/my-bucket/some_folder/some_file_1.csv'"},"https://storage.yandexcloud.net/my-bucket/some_folder/some_file_1.csv'")),(0,i.kt)("li",{parentName:"ul"},"'",(0,i.kt)("a",{parentName:"li",href:"https://storage.yandexcloud.net/my-bucket/some_folder/some_file_2.csv'"},"https://storage.yandexcloud.net/my-bucket/some_folder/some_file_2.csv'")),(0,i.kt)("li",{parentName:"ul"},"'",(0,i.kt)("a",{parentName:"li",href:"https://storage.yandexcloud.net/my-bucket/some_folder/some_file_3.csv'"},"https://storage.yandexcloud.net/my-bucket/some_folder/some_file_3.csv'")),(0,i.kt)("li",{parentName:"ul"},"'",(0,i.kt)("a",{parentName:"li",href:"https://storage.yandexcloud.net/my-bucket/another_folder/some_file_1.csv'"},"https://storage.yandexcloud.net/my-bucket/another_folder/some_file_1.csv'")),(0,i.kt)("li",{parentName:"ul"},"'",(0,i.kt)("a",{parentName:"li",href:"https://storage.yandexcloud.net/my-bucket/another_folder/some_file_2.csv'"},"https://storage.yandexcloud.net/my-bucket/another_folder/some_file_2.csv'")),(0,i.kt)("li",{parentName:"ul"},"'",(0,i.kt)("a",{parentName:"li",href:"https://storage.yandexcloud.net/my-bucket/another_folder/some_file_3.csv'"},"https://storage.yandexcloud.net/my-bucket/another_folder/some_file_3.csv'"))),(0,i.kt)("p",{parentName:"div"},"\u0421\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u043f\u043e\u0441\u043e\u0431\u043e\u0432 \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0442\u0430\u0431\u043b\u0438\u0446\u0443, \u0432\u043a\u043b\u044e\u0447\u0430\u044e\u0449\u0443\u044e \u0432 \u0441\u0435\u0431\u044f \u0432\u0441\u0435 \u0448\u0435\u0441\u0442\u044c \u0444\u0430\u0439\u043b\u043e\u0432:"),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},"\u0417\u0430\u0434\u0430\u0439\u0442\u0435 \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d \u0434\u043b\u044f \u0441\u0443\u0444\u0444\u0438\u043a\u0441\u043e\u0432 \u0432 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0438 \u0444\u0430\u0439\u043b\u0430: ")),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE table_with_range (name String, value UInt32)\n    ENGINE = S3('https://storage.yandexcloud.net/my-bucket/{some,another}_folder/some_file_{1..3}', 'CSV');\n")),(0,i.kt)("ol",{parentName:"div",start:2},(0,i.kt)("li",{parentName:"ol"},"\u0422\u0430\u0431\u043b\u0438\u0446\u0430 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0432\u0441\u0435 \u0444\u0430\u0439\u043b\u044b \u0441 \u043f\u0440\u0435\u0444\u0438\u043a\u0441\u043e\u043c ",(0,i.kt)("inlineCode",{parentName:"li"},"some_file_")," (\u0432 \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0430\u0445 \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0434\u0440\u0443\u0433\u0438\u0445 \u0444\u0430\u0439\u043b\u043e\u0432 \u0441 \u0442\u0430\u043a\u0438\u043c \u043f\u0440\u0435\u0444\u0438\u043a\u0441\u043e\u043c):")),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE table_with_question_mark (name String, value UInt32)\n    ENGINE = S3('https://storage.yandexcloud.net/my-bucket/{some,another}_folder/some_file_?', 'CSV');\n")),(0,i.kt)("ol",{parentName:"div",start:3},(0,i.kt)("li",{parentName:"ol"},"\u0422\u0430\u0431\u043b\u0438\u0446\u0430 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0432\u0441\u0435 \u0444\u0430\u0439\u043b\u044b \u0432 \u043e\u0431\u043e\u0438\u0445 \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0430\u0445 (\u0432 \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0430\u0445 \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0434\u0440\u0443\u0433\u0438\u0445 \u0444\u0430\u0439\u043b\u043e\u0432, \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0445 \u0444\u043e\u0440\u043c\u0430\u0442\u0443 \u0438 \u0441\u0445\u0435\u043c\u0435, \u043e\u043f\u0438\u0441\u0430\u043d\u043d\u044b\u043c \u0432 \u0437\u0430\u043f\u0440\u043e\u0441\u0435):")),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE table_with_asterisk (name String, value UInt32)\n    ENGINE = S3('https://storage.yandexcloud.net/my-bucket/{some,another}_folder/*', 'CSV');\n")),(0,i.kt)("h2",{parentName:"div",id:"s3-settings"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0434\u0432\u0438\u0436\u043a\u0430 S3"),(0,i.kt)("p",{parentName:"div"},"\u041f\u0435\u0440\u0435\u0434 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435\u043c \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u0438\u043b\u0438 \u0432 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u043c \u0444\u0430\u0439\u043b\u0435 \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u044b \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438:"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"s3_max_single_part_upload_size")," \u2014 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439 \u0440\u0430\u0437\u043c\u0435\u0440 \u043e\u0431\u044a\u0435\u043a\u0442\u0430 \u0434\u043b\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c \u043e\u0434\u043d\u043e\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043d\u043e\u0439 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0432 S3. \u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u2014 ",(0,i.kt)("inlineCode",{parentName:"li"},"64 M\u0431"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"s3_min_upload_part_size")," \u2014 \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439 \u0440\u0430\u0437\u043c\u0435\u0440 \u043e\u0431\u044a\u0435\u043a\u0442\u0430 \u0434\u043b\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u043f\u0440\u0438 \u043c\u043d\u043e\u0433\u043e\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043d\u043e\u0439 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u0432 ",(0,i.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AmazonS3/latest/dev/uploadobjusingmpu.html"},"S3 Multipart upload"),". \u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u2014 ",(0,i.kt)("inlineCode",{parentName:"li"},"512 M\u0431"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"s3_max_redirects")," \u2014 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u043d\u044b\u0445 \u043f\u0435\u0440\u0435\u0430\u0434\u0440\u0435\u0441\u0430\u0446\u0438\u0439 S3. \u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u2014 ",(0,i.kt)("inlineCode",{parentName:"li"},"10"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"s3_single_read_retries")," \u2014 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u043e\u043f\u044b\u0442\u043e\u043a \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u043f\u0440\u0438 \u0435\u0434\u0438\u043d\u0438\u0447\u043d\u043e\u043c \u0447\u0442\u0435\u043d\u0438\u0438. \u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u2014 ",(0,i.kt)("inlineCode",{parentName:"li"},"4"),".")),(0,i.kt)("p",{parentName:"div"},"\u0421\u043e\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u0438: \u0435\u0441\u043b\u0438 \u0437\u043b\u043e\u043d\u0430\u043c\u0435\u0440\u0435\u043d\u043d\u044b\u0439 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0435\u0442 \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u043b\u044c\u043d\u044b\u0435 URL-\u0430\u0434\u0440\u0435\u0441\u0430 S3, \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 ",(0,i.kt)("inlineCode",{parentName:"p"},"s3_max_redirects")," \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d \u0432 \u043d\u043e\u043b\u044c, \u0447\u0442\u043e\u0431\u044b \u0438\u0437\u0431\u0435\u0436\u0430\u0442\u044c \u0430\u0442\u0430\u043a ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Server-side_request_forgery"},"SSRF"),". \u041a\u0430\u043a \u0430\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u0430, \u0432 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0443\u043a\u0430\u0437\u0430\u043d ",(0,i.kt)("inlineCode",{parentName:"p"},"remote_host_filter"),"."),(0,i.kt)("h2",{parentName:"div",id:"endpoint-settings"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0442\u043e\u0447\u043a\u0438 \u043f\u0440\u0438\u0435\u043c\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u0430"),(0,i.kt)("p",{parentName:"div"},"\u0414\u043b\u044f \u0442\u043e\u0447\u043a\u0438 \u043f\u0440\u0438\u0435\u043c\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 (\u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0442\u043e\u0447\u043d\u043e\u043c\u0443 \u043f\u0440\u0435\u0444\u0438\u043a\u0441\u0443 URL-\u0430\u0434\u0440\u0435\u0441\u0430) \u0432 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u043c \u0444\u0430\u0439\u043b\u0435 \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u0437\u0430\u0434\u0430\u043d\u044b \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438:"),(0,i.kt)("p",{parentName:"div"},"\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u0430\u044f \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430:"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"endpoint")," \u2014 \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442 \u043f\u0440\u0435\u0444\u0438\u043a\u0441 \u0442\u043e\u0447\u043a\u0438 \u043f\u0440\u0438\u0435\u043c\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u0430.")),(0,i.kt)("p",{parentName:"div"},"\u041d\u0435\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438:"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"access_key_id")," \u0438 ",(0,i.kt)("inlineCode",{parentName:"li"},"secret_access_key")," \u2014 \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u044e\u0442 \u0443\u0447\u0435\u0442\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0434\u043b\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0441 \u0434\u0430\u043d\u043d\u043e\u0439 \u0442\u043e\u0447\u043a\u043e\u0439 \u043f\u0440\u0438\u0435\u043c\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u0430."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"use_environment_credentials")," \u2014 \u0435\u0441\u043b\u0438 ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),", S3-\u043a\u043b\u0438\u0435\u043d\u0442 \u0431\u0443\u0434\u0435\u0442 \u043f\u044b\u0442\u0430\u0442\u044c\u0441\u044f \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0443\u0447\u0435\u0442\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0438\u0437 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 \u0441\u0440\u0435\u0434\u044b \u0438 \u043c\u0435\u0442\u0430\u0434\u0430\u043d\u043d\u044b\u0445 ",(0,i.kt)("a",{parentName:"li",href:"https://ru.wikipedia.org/wiki/Amazon_EC2"},"Amazon EC2")," \u0434\u043b\u044f \u0434\u0430\u043d\u043d\u043e\u0439 \u0442\u043e\u0447\u043a\u0438 \u043f\u0440\u0438\u0435\u043c\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u0430. \u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u2014 ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"use_insecure_imds_request")," \u2014 \u043f\u0440\u0438\u0437\u043d\u0430\u043a \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u043c\u0435\u043d\u0435\u0435 \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0433\u043e \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f \u043f\u0440\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u043a IMDS \u043f\u0440\u0438 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0438 \u0443\u0447\u0451\u0442\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 \u0438\u0437 \u043c\u0435\u0442\u0430\u0434\u0430\u043d\u043d\u044b\u0445 Amazon EC2. \u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u2014 ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"region")," \u2014 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0440\u0435\u0433\u0438\u043e\u043d\u0430 S3."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"header")," \u2014 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u0442 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0439 HTTP-\u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u043a \u0437\u0430\u043f\u0440\u043e\u0441\u0443 \u043d\u0430 \u0437\u0430\u0434\u0430\u043d\u043d\u0443\u044e \u0442\u043e\u0447\u043a\u0443 \u043f\u0440\u0438\u0435\u043c\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u0430. \u041c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0440\u0430\u0437."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"server_side_encryption_customer_key_base64")," \u2014 \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0435 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0438 \u0434\u043b\u044f \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u043a \u043e\u0431\u044a\u0435\u043a\u0442\u0430\u043c S3 \u0441 \u0448\u0438\u0444\u0440\u043e\u0432\u0430\u043d\u0438\u0435\u043c SSE-C."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"single_read_retries")," \u2014 \u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u043e\u043f\u044b\u0442\u043e\u043a \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u043f\u0440\u0438 \u0435\u0434\u0438\u043d\u0438\u0447\u043d\u043e\u043c \u0447\u0442\u0435\u043d\u0438\u0438. \u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u2014 ",(0,i.kt)("inlineCode",{parentName:"li"},"4"),".")),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<s3>\n    <endpoint-name>\n        <endpoint>https://storage.yandexcloud.net/my-test-bucket-768/</endpoint>\n        \x3c!-- <access_key_id>ACCESS_KEY_ID</access_key_id> --\x3e\n        \x3c!-- <secret_access_key>SECRET_ACCESS_KEY</secret_access_key> --\x3e\n        \x3c!-- <region>us-west-1</region> --\x3e\n        \x3c!-- <use_environment_credentials>false</use_environment_credentials> --\x3e\n        \x3c!-- <use_insecure_imds_request>false</use_insecure_imds_request> --\x3e\n        \x3c!-- <header>Authorization: Bearer SOME-TOKEN</header> --\x3e\n        \x3c!-- <server_side_encryption_customer_key_base64>BASE64-ENCODED-KEY</server_side_encryption_customer_key_base64> --\x3e\n        \x3c!-- <single_read_retries>4</single_read_retries> --\x3e\n    </endpoint-name>\n</s3>\n")),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"\u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0442\u0430\u043a\u0436\u0435")),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/table-functions/s3"},"\u0422\u0430\u0431\u043b\u0438\u0447\u043d\u0430\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u044f s3"))))))}c.isMDXComponent=!0}}]);