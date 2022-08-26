"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[15643],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return g}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),m=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=m(e.components);return r.createElement(o.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=m(t),g=a,k=s["".concat(o,".").concat(g)]||s[g]||c[g]||i;return t?r.createElement(k,l(l({ref:n},u),{},{components:t})):r.createElement(k,l({ref:n},u))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=s;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var m=2;m<i;m++)l[m]=t[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},73155:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return o},default:function(){return g},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return c}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),l=["components"],p={slug:"/zh/engines/table-engines/mergetree-family/graphitemergetree",sidebar_position:38,sidebar_label:"GraphiteMergeTree"},o="GraphiteMergeTree",m={unversionedId:"zh/engines/table-engines/mergetree-family/graphitemergetree",id:"zh/engines/table-engines/mergetree-family/graphitemergetree",title:"GraphiteMergeTree",description:"graphitemergetree}",source:"@site/docs/zh/engines/table-engines/mergetree-family/graphitemergetree.md",sourceDirName:"zh/engines/table-engines/mergetree-family",slug:"/zh/engines/table-engines/mergetree-family/graphitemergetree",permalink:"/docs/zh/engines/table-engines/mergetree-family/graphitemergetree",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/engines/table-engines/mergetree-family/graphitemergetree.md",tags:[],version:"current",sidebarPosition:38,frontMatter:{slug:"/zh/engines/table-engines/mergetree-family/graphitemergetree",sidebar_position:38,sidebar_label:"GraphiteMergeTree"},sidebar:"chinese",previous:{title:"\u7248\u672c\u6298\u53e0MergeTree",permalink:"/docs/zh/engines/table-engines/mergetree-family/versionedcollapsingmergetree"},next:{title:"AggregatingMergeTree",permalink:"/docs/zh/engines/table-engines/mergetree-family/aggregatingmergetree"}},u={},c=[{value:"\u521b\u5efa\u8868",id:"creating-table",level:2},{value:"\u6c47\u603b\u914d\u7f6e\u7684\u53c2\u6570",id:"rollup-configuration",level:2},{value:"\u6240\u9700\u7684\u5217",id:"required-columns",level:3},{value:"\u6a21\u5f0fPatterns",id:"patterns",level:3},{value:"\u914d\u7f6e\u793a\u4f8b",id:"configuration-example",level:3}],s={toc:c};function g(e){var n=e.components,t=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"graphitemergetree"},"GraphiteMergeTree"),(0,i.kt)("p",null,"\u8be5\u5f15\u64ce\u7528\u6765\u5bf9 ",(0,i.kt)("a",{parentName:"p",href:"http://graphite.readthedocs.io/en/latest/index.html"},"Graphite"),"\u6570\u636e\u8fdb\u884c\u7626\u8eab\u53ca\u6c47\u603b\u3002\u5bf9\u4e8e\u60f3\u4f7f\u7528CH\u6765\u5b58\u50a8Graphite\u6570\u636e\u7684\u5f00\u53d1\u8005\u6765\u8bf4\u53ef\u80fd\u6709\u7528\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u4e0d\u9700\u8981\u5bf9Graphite\u6570\u636e\u505a\u6c47\u603b\uff0c\u90a3\u4e48\u53ef\u4ee5\u4f7f\u7528\u4efb\u610f\u7684CH\u8868\u5f15\u64ce\uff1b\u4f46\u82e5\u9700\u8981\uff0c\u90a3\u5c31\u91c7\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"GraphiteMergeTree")," \u5f15\u64ce\u3002\u5b83\u80fd\u51cf\u5c11\u5b58\u50a8\u7a7a\u95f4\uff0c\u540c\u65f6\u80fd\u63d0\u9ad8Graphite\u6570\u636e\u7684\u67e5\u8be2\u6548\u7387\u3002"),(0,i.kt)("p",null,"\u8be5\u5f15\u64ce\u7ee7\u627f\u81ea ",(0,i.kt)("a",{parentName:"p",href:"/docs/zh/engines/table-engines/mergetree-family/mergetree"},"MergeTree"),"."),(0,i.kt)("h2",{id:"creating-table"},"\u521b\u5efa\u8868"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE [IF NOT EXISTS] [db.]table_name [ON CLUSTER cluster]\n(\n    Path String,\n    Time DateTime,\n    Value <Numeric_type>,\n    Version <Numeric_type>\n    ...\n) ENGINE = GraphiteMergeTree(config_section)\n[PARTITION BY expr]\n[ORDER BY expr]\n[SAMPLE BY expr]\n[SETTINGS name=value, ...]\n")),(0,i.kt)("p",null,"\u5efa\u8868\u8bed\u53e5\u7684\u8be6\u7ec6\u8bf4\u660e\u8bf7\u53c2\u89c1 ",(0,i.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/statements/create#create-table-query"},"\u521b\u5efa\u8868")),(0,i.kt)("p",null,"\u542b\u6709Graphite\u6570\u636e\u96c6\u7684\u8868\u5e94\u8be5\u5305\u542b\u4ee5\u4e0b\u7684\u6570\u636e\u5217\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u6307\u6807\u540d\u79f0(Graphite sensor)\uff0c\u6570\u636e\u7c7b\u578b\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"String"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u6307\u6807\u7684\u65f6\u95f4\u5ea6\u91cf\uff0c\u6570\u636e\u7c7b\u578b\uff1a ",(0,i.kt)("inlineCode",{parentName:"p"},"DateTime"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u6307\u6807\u7684\u503c\uff0c\u6570\u636e\u7c7b\u578b\uff1a\u4efb\u610f\u6570\u503c\u7c7b\u578b")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u6307\u6807\u7684\u7248\u672c\u53f7\uff0c\u6570\u636e\u7c7b\u578b\uff1a \u4efb\u610f\u6570\u503c\u7c7b\u578b"),(0,i.kt)("p",{parentName:"li"},"  CH\u4ee5\u6700\u5927\u7684\u7248\u672c\u53f7\u4fdd\u5b58\u884c\u8bb0\u5f55\uff0c\u82e5\u7248\u672c\u53f7\u76f8\u540c\uff0c\u4fdd\u7559\u6700\u540e\u5199\u5165\u7684\u6570\u636e\u3002"))),(0,i.kt)("p",null,"\u4ee5\u4e0a\u5217\u5fc5\u987b\u8bbe\u7f6e\u5728\u6c47\u603b\u53c2\u6570\u914d\u7f6e\u4e2d\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"GraphiteMergeTree \u53c2\u6570")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"config_section")," - \u914d\u7f6e\u6587\u4ef6\u4e2d\u6807\u8bc6\u6c47\u603b\u89c4\u5219\u7684\u8282\u70b9\u540d\u79f0")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u5efa\u8868\u8bed\u53e5")),(0,i.kt)("p",null,"\u5728\u521b\u5efa ",(0,i.kt)("inlineCode",{parentName:"p"},"GraphiteMergeTree")," \u8868\u65f6\uff0c\u9700\u8981\u91c7\u7528\u548c ",(0,i.kt)("a",{parentName:"p",href:"/docs/zh/engines/table-engines/mergetree-family/mergetree#table_engine-mergetree-creating-a-table"},"clauses")," \u76f8\u540c\u7684\u8bed\u53e5\uff0c\u5c31\u50cf\u521b\u5efa ",(0,i.kt)("inlineCode",{parentName:"p"},"MergeTree")," \u4e00\u6837\u3002"),(0,i.kt)("details",{markdown:"1"},(0,i.kt)("summary",null,"\u5df2\u5e9f\u5f03\u7684\u5efa\u8868\u8bed\u53e5"),(0,i.kt)("p",null,'!!! \u6ce8\u610f "Attention"\n\u8bf7\u4e0d\u8981\u5728\u65b0\u9879\u76ee\u4e2d\u4f7f\u7528\uff1b\u5982\u6709\u53ef\u80fd\uff0c\u8bf7\u5c06\u65e7\u7684\u9879\u76ee\u6309\u4e0a\u8ff0\u7684\u65b9\u6cd5\u8fdb\u884c\u66ff\u6362\u3002'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE [IF NOT EXISTS] [db.]table_name [ON CLUSTER cluster]\n(\n    EventDate Date,\n    Path String,\n    Time DateTime,\n    Value <Numeric_type>,\n    Version <Numeric_type>\n    ...\n) ENGINE [=] GraphiteMergeTree(date-column [, sampling_expression], (primary, key), index_granularity, config_section)\n")),(0,i.kt)("p",null,"\u9664\u4e86",(0,i.kt)("inlineCode",{parentName:"p"},"config_section"),"\uff0c\u5176\u5b83\u6240\u6709\u53c2\u6570\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"MergeTree"),"\u7684\u76f8\u5e94\u53c2\u6570\u4e00\u6837."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"config_section")," \u2014\u914d\u7f6e\u6587\u4ef6\u4e2d\u8bbe\u7f6e\u6c47\u603b\u89c4\u5219\u7684\u8282\u70b9"))),(0,i.kt)("h2",{id:"rollup-configuration"},"\u6c47\u603b\u914d\u7f6e\u7684\u53c2\u6570"),(0,i.kt)("p",null,"\u6c47\u603b\u7684\u914d\u7f6e\u53c2\u6570\u7531\u670d\u52a1\u5668\u914d\u7f6e\u7684 ",(0,i.kt)("a",{parentName:"p",href:"/docs/zh/operations/server-configuration-parameters/settings#server_configuration_parameters-graphite"},"graphite_rollup")," \u53c2\u6570\u5b9a\u4e49\u3002\u53c2\u6570\u540d\u79f0\u53ef\u4ee5\u662f\u4efb\u610f\u7684\u3002\u5141\u8bb8\u4e3a\u591a\u4e2a\u4e0d\u540c\u8868\u521b\u5efa\u591a\u7ec4\u914d\u7f6e\u5e76\u4f7f\u7528\u3002"),(0,i.kt)("p",null,"\u6c47\u603b\u914d\u7f6e\u7684\u7ed3\u6784\u5982\u4e0b\uff1a\n\u6240\u9700\u7684\u5217\n\u6a21\u5f0fPatterns"),(0,i.kt)("h3",{id:"required-columns"},"\u6240\u9700\u7684\u5217"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"path_column_name")," \u2014 \u4fdd\u5b58\u6307\u6807\u540d\u79f0\u7684\u5217\u540d (Graphite sensor). \u9ed8\u8ba4\u503c: ",(0,i.kt)("inlineCode",{parentName:"li"},"Path"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"time_column_name")," \u2014 \u4fdd\u5b58\u6307\u6807\u65f6\u95f4\u5ea6\u91cf\u7684\u5217\u540d. Default value: ",(0,i.kt)("inlineCode",{parentName:"li"},"Time"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"value_column_name")," \u2014  The name of the column storing the value of the metric at the time set in ",(0,i.kt)("inlineCode",{parentName:"li"},"time_column_name"),".\u9ed8\u8ba4\u503c: ",(0,i.kt)("inlineCode",{parentName:"li"},"Value"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"version_column_name")," - \u4fdd\u5b58\u6307\u6807\u7684\u7248\u672c\u53f7\u5217. \u9ed8\u8ba4\u503c: ",(0,i.kt)("inlineCode",{parentName:"li"},"Timestamp"),".")),(0,i.kt)("h3",{id:"patterns"},"\u6a21\u5f0fPatterns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"patterns")," \u7684\u7ed3\u6784\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"pattern\n    regexp\n    function\npattern\n    regexp\n    age + precision\n    ...\npattern\n    regexp\n    function\n    age + precision\n    ...\npattern\n    ...\ndefault\n    function\n    age + precision\n    ...\n")),(0,i.kt)("p",null,'!!! \u6ce8\u610f "Attention"\n\u6a21\u5f0f\u5fc5\u987b\u4e25\u683c\u6309\u987a\u5e8f\u914d\u7f6e\uff1a'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  1. \u4e0d\u542b`function` or `retention`\u7684Patterns\n  1. \u540c\u65f6\u542b\u6709`function` and `retention`\u7684Patterns\n  1. `default`\u7684Patterns.\n")),(0,i.kt)("p",null,"CH\u5728\u5904\u7406\u884c\u8bb0\u5f55\u65f6\uff0c\u4f1a\u68c0\u67e5 ",(0,i.kt)("inlineCode",{parentName:"p"},"pattern"),"\u8282\u70b9\u7684\u89c4\u5219\u3002\u6bcf\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"pattern"),"\uff08\u542b",(0,i.kt)("inlineCode",{parentName:"p"},"default"),"\uff09\u8282\u70b9\u53ef\u4ee5\u5305\u542b ",(0,i.kt)("inlineCode",{parentName:"p"},"function")," \u7528\u4e8e\u805a\u5408\u64cd\u4f5c\uff0c\u6216",(0,i.kt)("inlineCode",{parentName:"p"},"retention"),"\u53c2\u6570\uff0c\u6216\u8005\u4e24\u8005\u90fd\u6709\u3002\u5982\u679c\u6307\u6807\u540d\u79f0\u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"regexp"),"\u76f8\u5339\u914d\uff0c\u76f8\u5e94 ",(0,i.kt)("inlineCode",{parentName:"p"},"pattern"),"\u7684\u89c4\u5219\u4f1a\u751f\u6548\uff1b\u5426\u5219\uff0c\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"default")," \u8282\u70b9\u7684\u89c4\u5219\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"pattern")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"default")," \u8282\u70b9\u7684\u5b57\u6bb5\u8bbe\u7f6e:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"regexp"),"\u2013 \u6307\u6807\u540d\u7684pattern."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"age")," \u2013 \u6570\u636e\u7684\u6700\u5c0f\u5b58\u6d3b\u65f6\u95f4(\u6309\u79d2\u7b97)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"precision"),"\u2013 \u6309\u79d2\u6765\u8861\u91cf\u6570\u636e\u5b58\u6d3b\u65f6\u95f4\u65f6\u7684\u7cbe\u786e\u7a0b\u5ea6. \u5fc5\u987b\u80fd\u88ab86400\u6574\u9664 (\u4e00\u5929\u7684\u79d2\u6570)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"function")," \u2013 \u5bf9\u4e8e\u5b58\u6d3b\u65f6\u95f4\u5728 ",(0,i.kt)("inlineCode",{parentName:"li"},"[age, age + precision]"),"\u4e4b\u5185\u7684\u6570\u636e\uff0c\u9700\u8981\u4f7f\u7528\u7684\u805a\u5408\u51fd\u6570")),(0,i.kt)("h3",{id:"configuration-example"},"\u914d\u7f6e\u793a\u4f8b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<graphite_rollup>\n    <version_column_name>Version</version_column_name>\n    <pattern>\n        <regexp>click_cost</regexp>\n        <function>any</function>\n        <retention>\n            <age>0</age>\n            <precision>5</precision>\n        </retention>\n        <retention>\n            <age>86400</age>\n            <precision>60</precision>\n        </retention>\n    </pattern>\n    <default>\n        <function>max</function>\n        <retention>\n            <age>0</age>\n            <precision>60</precision>\n        </retention>\n        <retention>\n            <age>3600</age>\n            <precision>300</precision>\n        </retention>\n        <retention>\n            <age>86400</age>\n            <precision>3600</precision>\n        </retention>\n    </default>\n</graphite_rollup>\n")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/table_engines/graphitemergetree/"},"\u539f\u59cb\u6587\u6863")," "))}g.isMDXComponent=!0}}]);