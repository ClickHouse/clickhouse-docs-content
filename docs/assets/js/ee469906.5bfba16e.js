"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[99798],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),i=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},s=function(e){var n=i(e.components);return r.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=i(t),d=a,k=m["".concat(o,".").concat(d)]||m[d]||u[d]||l;return t?r.createElement(k,p(p({ref:n},s),{},{components:t})):r.createElement(k,p({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,p=new Array(l);p[0]=m;var c={};for(var o in n)hasOwnProperty.call(n,o)&&(c[o]=n[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,p[1]=c;for(var i=2;i<l;i++)p[i]=t[i];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},63573:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return c},metadata:function(){return i},toc:function(){return u}});var r=t(87462),a=t(63366),l=(t(67294),t(3905)),p=["components"],c={},o="\u5b57\u7b26\u4e32\u66ff\u6362\u51fd\u6570",i={unversionedId:"zh/sql-reference/functions/string-replace-functions",id:"zh/sql-reference/functions/string-replace-functions",title:"\u5b57\u7b26\u4e32\u66ff\u6362\u51fd\u6570",description:"zi-fu-chuan-ti-huan-han-shu}",source:"@site/docs/zh/sql-reference/functions/string-replace-functions.md",sourceDirName:"zh/sql-reference/functions",slug:"/zh/sql-reference/functions/string-replace-functions",permalink:"/docs/zh/sql-reference/functions/string-replace-functions",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/functions/string-replace-functions.md",tags:[],version:"current",frontMatter:{},sidebar:"chinese",previous:{title:"\u5b57\u7b26\u4e32\u51fd\u6570",permalink:"/docs/zh/sql-reference/functions/string-functions"},next:{title:"\u5b57\u7b26\u4e32\u641c\u7d22\u51fd\u6570",permalink:"/docs/zh/sql-reference/functions/string-search-functions"}},s={},u=[{value:"replaceOne(haystack, pattern, replacement)",id:"replaceonehaystack-pattern-replacement",level:2},{value:"replaceAll(haystack, pattern, replacement), replace(haystack, pattern, replacement)",id:"replaceallhaystack-pattern-replacement-replacehaystack-pattern-replacement",level:2},{value:"replaceRegexpOne(haystack, pattern, replacement)",id:"replaceregexponehaystack-pattern-replacement",level:2},{value:"replaceRegexpAll(haystack, pattern, replacement)",id:"replaceregexpallhaystack-pattern-replacement",level:2},{value:"regexpQuoteMeta(s)",id:"regexpquotemetas",level:2}],m={toc:u};function d(e){var n=e.components,t=(0,a.Z)(e,p);return(0,l.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"zi-fu-chuan-ti-huan-han-shu"},"\u5b57\u7b26\u4e32\u66ff\u6362\u51fd\u6570"),(0,l.kt)("h2",{id:"replaceonehaystack-pattern-replacement"},"replaceOne(haystack, pattern, replacement)"),(0,l.kt)("p",null,"\u7528\u2019replacement\u2019\u5b50\u4e32\u66ff\u6362\u2019haystack\u2019\u4e2d\u7b2c\u4e00\u6b21\u51fa\u73b0\u7684\u2019pattern\u2019\u5b50\u4e32\uff08\u5982\u679c\u5b58\u5728\uff09\u3002\n\u2019pattern\u2019\u548c\u2019replacement\u2019\u5fc5\u987b\u662f\u5e38\u91cf\u3002"),(0,l.kt)("h2",{id:"replaceallhaystack-pattern-replacement-replacehaystack-pattern-replacement"},"replaceAll(haystack, pattern, replacement), replace(haystack, pattern, replacement)"),(0,l.kt)("p",null,"\u7528\u2019replacement\u2019\u5b50\u4e32\u66ff\u6362\u2019haystack\u2019\u4e2d\u51fa\u73b0\u7684\u6240\u6709\u7684\u2019pattern\u2019\u5b50\u4e32\u3002"),(0,l.kt)("h2",{id:"replaceregexponehaystack-pattern-replacement"},"replaceRegexpOne(haystack, pattern, replacement)"),(0,l.kt)("p",null,"\u4f7f\u7528\u2019pattern\u2019\u6b63\u5219\u8868\u8fbe\u5f0f\u7684\u66ff\u6362\u3002 \u2018pattern\u2019\u53ef\u4ee5\u662f\u4efb\u610f\u4e00\u4e2a\u6709\u6548\u7684re2\u6b63\u5219\u8868\u8fbe\u5f0f\u3002\n\u5982\u679c\u5b58\u5728\u4e0e\u2019pattern\u2019\u6b63\u5219\u8868\u8fbe\u5f0f\u5339\u914d\u7684\u5339\u914d\u9879\uff0c\u4ec5\u66ff\u6362\u7b2c\u4e00\u4e2a\u5339\u914d\u9879\u3002\n\u6a21\u5f0fpattern\u53ef\u4ee5\u6307\u5b9a\u4e3a\u2018replacement\u2019\u3002\u6b64\u6a21\u5f0f\u53ef\u4ee5\u5305\u542b\u66ff\u4ee3",(0,l.kt)("inlineCode",{parentName:"p"},"\\0-\\9"),"\u3002\n\u66ff\u4ee3",(0,l.kt)("inlineCode",{parentName:"p"},"\\0"),"\u5305\u542b\u4e86\u6574\u4e2a\u6b63\u5219\u8868\u8fbe\u5f0f\u3002\u66ff\u4ee3",(0,l.kt)("inlineCode",{parentName:"p"},"\\1-\\9"),"\u5bf9\u5e94\u4e8e\u5b50\u6a21\u5f0f\u7f16\u53f7\u3002\u8981\u5728\u6a21\u677f\u4e2d\u4f7f\u7528\u53cd\u659c\u6760",(0,l.kt)("inlineCode",{parentName:"p"},"\\"),"\uff0c\u8bf7\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"\\"),"\u5c06\u5176\u8f6c\u4e49\u3002\n\u53e6\u5916\u8fd8\u8bf7\u8bb0\u4f4f\uff0c\u5b57\u7b26\u4e32\u5b57\u9762\u503c(literal)\u9700\u8981\u989d\u5916\u7684\u8f6c\u4e49\u3002"),(0,l.kt)("p",null,"\u793a\u4f8b1.\u5c06\u65e5\u671f\u8f6c\u6362\u4e3a\u7f8e\u56fd\u683c\u5f0f\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT DISTINCT\n    EventDate,\n    replaceRegexpOne(toString(EventDate), '(\\\\d{4})-(\\\\d{2})-(\\\\d{2})', '\\\\2/\\\\3/\\\\1') AS res\nFROM test.hits\nLIMIT 7\nFORMAT TabSeparated\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"2014-03-17      03/17/2014\n2014-03-18      03/18/2014\n2014-03-19      03/19/2014\n2014-03-20      03/20/2014\n2014-03-21      03/21/2014\n2014-03-22      03/22/2014\n2014-03-23      03/23/2014\n")),(0,l.kt)("p",null,"\u793a\u4f8b2.\u590d\u5236\u5b57\u7b26\u4e32\u5341\u6b21\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT replaceRegexpOne('Hello, World!', '.*', '\\\\0\\\\0\\\\0\\\\0\\\\0\\\\0\\\\0\\\\0\\\\0\\\\0') AS res\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u250c\u2500res\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 Hello, World!Hello, World!Hello, World!Hello, World!Hello, World!Hello, World!Hello, World!Hello, World!Hello, World!Hello, World! \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"replaceregexpallhaystack-pattern-replacement"},"replaceRegexpAll(haystack, pattern, replacement)"),(0,l.kt)("p",null,"\u4e0ereplaceRegexpOne\u76f8\u540c\uff0c\u4f46\u4f1a\u66ff\u6362\u6240\u6709\u51fa\u73b0\u7684\u5339\u914d\u9879\u3002\u4f8b\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT replaceRegexpAll('Hello, World!', '.', '\\\\0\\\\0') AS res\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u250c\u2500res\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 HHeelllloo,,  WWoorrlldd!! \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"\u4f5c\u4e3a\u4f8b\u5916\uff0c\u5bf9\u4e8e\u7a7a\u5b50\u5b57\u7b26\u4e32\uff0c\u6b63\u5219\u8868\u8fbe\u5f0f\u53ea\u4f1a\u8fdb\u884c\u4e00\u6b21\u66ff\u6362\u3002\n\u793a\u4f8b:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT replaceRegexpAll('Hello, World!', '^', 'here: ') AS res\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u250c\u2500res\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 here: Hello, World! \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"regexpquotemetas"},"regexpQuoteMeta(s)"),(0,l.kt)("p",null,"\u8be5\u51fd\u6570\u7528\u4e8e\u5728\u5b57\u7b26\u4e32\u4e2d\u7684\u67d0\u4e9b\u9884\u5b9a\u4e49\u5b57\u7b26\u4e4b\u524d\u6dfb\u52a0\u53cd\u659c\u6760\u3002\n\u9884\u5b9a\u4e49\u5b57\u7b26\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"\\0"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"\\\\"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"|"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"("),", ",(0,l.kt)("inlineCode",{parentName:"p"},")"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"^"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"$"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"."),", ",(0,l.kt)("inlineCode",{parentName:"p"},"["),", ",(0,l.kt)("inlineCode",{parentName:"p"},"]"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"?"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"*"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"+"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"{"),", ",(0,l.kt)("inlineCode",{parentName:"p"},":"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"-"),"\u3002\n\u8fd9\u4e2a\u5b9e\u73b0\u4e0ere2::RE2::QuoteMeta\u7565\u6709\u4e0d\u540c\u3002\u5b83\u4ee5",(0,l.kt)("inlineCode",{parentName:"p"},"\\0")," \u8f6c\u4e49\u96f6\u5b57\u8282\uff0c\u800c\u4e0d\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"\\x00"),"\uff0c\u5e76\u4e14\u53ea\u8f6c\u4e49\u5fc5\u9700\u7684\u5b57\u7b26\u3002\n\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u94fe\u63a5\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://github.com/google/re2/blob/master/re2/re2.cc#L473"},"RE2")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/query_language/functions/string_replace_functions/"},"\u6765\u6e90\u6587\u7ae0")," "))}d.isMDXComponent=!0}}]);