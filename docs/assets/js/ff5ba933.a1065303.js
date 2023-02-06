"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[17640],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,g=u["".concat(i,".").concat(d)]||u[d]||m[d]||l;return n?r.createElement(g,s(s({ref:t},c),{},{components:n})):r.createElement(g,s({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[u]="string"==typeof e?e:a,s[1]=o;for(var p=2;p<l;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},47160:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const l={slug:"/en/sql-reference/functions/string-replace-functions",sidebar_position:42,sidebar_label:"For Replacing in Strings"},s="Functions for Searching and Replacing in Strings",o={unversionedId:"en/sql-reference/functions/string-replace-functions",id:"en/sql-reference/functions/string-replace-functions",title:"Functions for Searching and Replacing in Strings",description:"Functions for searching and other manipulations with strings are described separately.",source:"@site/docs/en/sql-reference/functions/string-replace-functions.md",sourceDirName:"en/sql-reference/functions",slug:"/en/sql-reference/functions/string-replace-functions",permalink:"/docs/en/sql-reference/functions/string-replace-functions",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/functions/string-replace-functions.md",tags:[],version:"current",sidebarPosition:42,frontMatter:{slug:"/en/sql-reference/functions/string-replace-functions",sidebar_position:42,sidebar_label:"For Replacing in Strings"},sidebar:"english",previous:{title:"For Searching in Strings",permalink:"/docs/en/sql-reference/functions/string-search-functions"},next:{title:"Conditional ",permalink:"/docs/en/sql-reference/functions/conditional-functions"}},i={},p=[{value:"replaceOne(haystack, pattern, replacement)",id:"replaceonehaystack-pattern-replacement",level:2},{value:"replaceAll(haystack, pattern, replacement), replace(haystack, pattern, replacement)",id:"replaceallhaystack-pattern-replacement-replacehaystack-pattern-replacement",level:2},{value:"replaceRegexpOne(haystack, pattern, replacement)",id:"replaceregexponehaystack-pattern-replacement",level:2},{value:"replaceRegexpAll(haystack, pattern, replacement)",id:"replaceregexpallhaystack-pattern-replacement",level:2},{value:"regexpQuoteMeta(s)",id:"regexpquotemetas",level:2},{value:"translate(s, from, to)",id:"translates-from-to",level:2},{value:"translateUTF8(string, from, to)",id:"translateutf8string-from-to",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"functions-for-searching-and-replacing-in-strings"},"Functions for Searching and Replacing in Strings"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Functions for ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/functions/string-search-functions"},"searching")," and ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/functions/string-functions"},"other manipulations with strings")," are described separately.")),(0,a.kt)("h2",{id:"replaceonehaystack-pattern-replacement"},"replaceOne(haystack, pattern, replacement)"),(0,a.kt)("p",null,"Replaces the first occurrence of the substring \u2018pattern\u2019 (if it exists) in \u2018haystack\u2019 by the \u2018replacement\u2019 string.\n\u2018pattern\u2019 and \u2018replacement\u2019 must be constants."),(0,a.kt)("h2",{id:"replaceallhaystack-pattern-replacement-replacehaystack-pattern-replacement"},"replaceAll(haystack, pattern, replacement), replace(haystack, pattern, replacement)"),(0,a.kt)("p",null,"Replaces all occurrences of the substring \u2018pattern\u2019 in \u2018haystack\u2019 by the \u2018replacement\u2019 string."),(0,a.kt)("h2",{id:"replaceregexponehaystack-pattern-replacement"},"replaceRegexpOne(haystack, pattern, replacement)"),(0,a.kt)("p",null,"Replaces the first occurrence of the substring matching the regular expression \u2018pattern\u2019 in \u2018haystack\u2018 by the \u2018replacement\u2018 string.\n\u2018pattern\u2018 must be a constant ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/google/re2/wiki/Syntax"},"re2 regular expression"),".\n\u2018replacement\u2019 must be a plain constant string or a constant string containing substitutions ",(0,a.kt)("inlineCode",{parentName:"p"},"\\0-\\9"),".\nSubstitutions ",(0,a.kt)("inlineCode",{parentName:"p"},"\\1-\\9")," correspond to the 1st to 9th capturing group (submatch), substitution ",(0,a.kt)("inlineCode",{parentName:"p"},"\\0")," corresponds to the entire match.\nTo use a verbatim ",(0,a.kt)("inlineCode",{parentName:"p"},"\\")," character in the \u2018pattern\u2018 or \u2018replacement\u2018 string, escape it using ",(0,a.kt)("inlineCode",{parentName:"p"},"\\"),".\nAlso keep in mind that string literals require an extra escaping."),(0,a.kt)("p",null,"Example 1. Converting ISO dates to American format:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT DISTINCT\n    EventDate,\n    replaceRegexpOne(toString(EventDate), '(\\\\d{4})-(\\\\d{2})-(\\\\d{2})', '\\\\2/\\\\3/\\\\1') AS res\nFROM test.hits\nLIMIT 7\nFORMAT TabSeparated\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"2014-03-17      03/17/2014\n2014-03-18      03/18/2014\n2014-03-19      03/19/2014\n2014-03-20      03/20/2014\n2014-03-21      03/21/2014\n2014-03-22      03/22/2014\n2014-03-23      03/23/2014\n")),(0,a.kt)("p",null,"Example 2. Copying a string ten times:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT replaceRegexpOne('Hello, World!', '.*', '\\\\0\\\\0\\\\0\\\\0\\\\0\\\\0\\\\0\\\\0\\\\0\\\\0') AS res\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500res\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 Hello, World!Hello, World!Hello, World!Hello, World!Hello, World!Hello, World!Hello, World!Hello, World!Hello, World!Hello, World! \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("h2",{id:"replaceregexpallhaystack-pattern-replacement"},"replaceRegexpAll(haystack, pattern, replacement)"),(0,a.kt)("p",null,"Like \u2018replaceRegexpOne\u2018, but replaces all occurrences of the pattern. Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT replaceRegexpAll('Hello, World!', '.', '\\\\0\\\\0') AS res\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500res\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 HHeelllloo,,  WWoorrlldd!! \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,"As an exception, if a regular expression worked on an empty substring, the replacement is not made more than once.\nExample:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT replaceRegexpAll('Hello, World!', '^', 'here: ') AS res\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500res\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 here: Hello, World! \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("h2",{id:"regexpquotemetas"},"regexpQuoteMeta(s)"),(0,a.kt)("p",null,"The function adds a backslash before some predefined characters in the string.\nPredefined characters: ",(0,a.kt)("inlineCode",{parentName:"p"},"\\0"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"\\\\"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"|"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"("),", ",(0,a.kt)("inlineCode",{parentName:"p"},")"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"^"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"$"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"."),", ",(0,a.kt)("inlineCode",{parentName:"p"},"["),", ",(0,a.kt)("inlineCode",{parentName:"p"},"]"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"?"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"*"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"+"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"{"),", ",(0,a.kt)("inlineCode",{parentName:"p"},":"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"-"),".\nThis implementation slightly differs from re2::RE2::QuoteMeta. It escapes zero byte as ",(0,a.kt)("inlineCode",{parentName:"p"},"\\0")," instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"\\x00")," and it escapes only required characters.\nFor more information, see the link: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/google/re2/blob/master/re2/re2.cc#L473"},"RE2")),(0,a.kt)("h2",{id:"translates-from-to"},"translate(s, from, to)"),(0,a.kt)("p",null,"The function replaces characters in the string \u2018s\u2019 in accordance with one-to-one character mapping defined by \u2018from\u2019 and \u2018to\u2019 strings. \u2018from\u2019 and \u2018to\u2019 must be constant ASCII strings of the same size. Non-ASCII characters in the original string are not modified."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT translate('Hello, World!', 'delor', 'DELOR') AS res\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500res\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 HELLO, WORLD! \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("h2",{id:"translateutf8string-from-to"},"translateUTF8(string, from, to)"),(0,a.kt)("p",null,"Similar to previous function, but works with UTF-8 arguments. \u2018from\u2019 and \u2018to\u2019 must be valid constant UTF-8 strings of the same size."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT translateUTF8('H\xe9ll\xf3, W\xf3rld\xa1', '\xf3\xe9\xa1', 'oe!') AS res\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500res\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 Hello, World! \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}m.isMDXComponent=!0}}]);