"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[87111],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},28993:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={sidebar_position:59,sidebar_label:"IPv4"},p=void 0,s={unversionedId:"ru/sql-reference/data-types/domains/ipv4",id:"ru/sql-reference/data-types/domains/ipv4",title:"ipv4",description:"IPv4",source:"@site/docs/ru/sql-reference/data-types/domains/ipv4.md",sourceDirName:"ru/sql-reference/data-types/domains",slug:"/ru/sql-reference/data-types/domains/ipv4",permalink:"/docs/ru/sql-reference/data-types/domains/ipv4",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/data-types/domains/ipv4.md",tags:[],version:"current",sidebarPosition:59,frontMatter:{sidebar_position:59,sidebar_label:"IPv4"},sidebar:"russia",previous:{title:"\u0414\u043e\u043c\u0435\u043d\u044b",permalink:"/docs/ru/sql-reference/data-types/domains/"},next:{title:"IPv6",permalink:"/docs/ru/sql-reference/data-types/domains/ipv6"}},c={},u=[{value:"IPv4",id:"ipv4",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435",id:"primenenie",level:3}],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"ipv4"},"IPv4"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"IPv4")," \u2014 \u044d\u0442\u043e \u0434\u043e\u043c\u0435\u043d, \u0431\u0430\u0437\u0438\u0440\u0443\u044e\u0449\u0438\u0439\u0441\u044f \u043d\u0430 \u0442\u0438\u043f\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 ",(0,o.kt)("inlineCode",{parentName:"p"},"UInt32")," \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044b\u0439 \u0434\u043b\u044f \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u0430\u0434\u0440\u0435\u0441\u043e\u0432 IPv4. \u041e\u043d \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u043a\u043e\u043c\u043f\u0430\u043a\u0442\u043d\u043e\u0435 \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u0441 \u0443\u0434\u043e\u0431\u043d\u044b\u043c \u0434\u043b\u044f \u0447\u0435\u043b\u043e\u0432\u0435\u043a\u0430 \u0444\u043e\u0440\u043c\u0430\u0442\u043e\u043c \u0432\u0432\u043e\u0434\u0430-\u0432\u044b\u0432\u043e\u0434\u0430, \u0438 \u044f\u0432\u043d\u043e \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0435\u043c\u044b\u043c \u0442\u0438\u043f\u043e\u043c \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u044b."),(0,o.kt)("h3",{id:"primenenie"},"\u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE hits (url String, from IPv4) ENGINE = MergeTree() ORDER BY url;\n\nDESCRIBE TABLE hits;\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500name\u2500\u252c\u2500type\u2500\u2500\u2500\u252c\u2500default_type\u2500\u252c\u2500default_expression\u2500\u252c\u2500comment\u2500\u252c\u2500codec_expression\u2500\u2510\n\u2502 url  \u2502 String \u2502              \u2502                    \u2502         \u2502                  \u2502\n\u2502 from \u2502 IPv4   \u2502              \u2502                    \u2502         \u2502                  \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,o.kt)("p",null,"\u0418\u043b\u0438 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0434\u043e\u043c\u0435\u043d IPv4 \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043a\u043b\u044e\u0447\u0430:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE hits (url String, from IPv4) ENGINE = MergeTree() ORDER BY from;\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"IPv4")," \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0432\u0441\u0442\u0430\u0432\u043a\u0443 \u0432 \u0432\u0438\u0434\u0435 \u0441\u0442\u0440\u043e\u043a \u0441 \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u044b\u043c \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435\u043c IPv4 \u0430\u0434\u0440\u0435\u0441\u0430:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO hits (url, from) VALUES ('https://wikipedia.org', '116.253.40.133')('https://clickhouse.com', '183.247.232.58')('https://clickhouse.com/docs/en/', '116.106.34.242');\n\nSELECT * FROM hits;\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500url\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500from\u2500\u2510\n\u2502 https://clickhouse.com/docs/en/ \u2502 116.106.34.242 \u2502\n\u2502 https://wikipedia.org              \u2502 116.253.40.133 \u2502\n\u2502 https://clickhouse.com          \u2502 183.247.232.58 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,o.kt)("p",null,"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0445\u0440\u0430\u043d\u044f\u0442\u0441\u044f \u0432 \u043a\u043e\u043c\u043f\u0430\u043a\u0442\u043d\u043e\u0439 \u0431\u0438\u043d\u0430\u0440\u043d\u043e\u0439 \u0444\u043e\u0440\u043c\u0435:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT toTypeName(from), hex(from) FROM hits LIMIT 1;\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500toTypeName(from)\u2500\u252c\u2500hex(from)\u2500\u2510\n\u2502 IPv4             \u2502 B7F7E83A  \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,o.kt)("p",null,"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0441 \u0434\u043e\u043c\u0435\u043d\u043d\u044b\u043c \u0442\u0438\u043f\u043e\u043c \u0434\u0430\u043d\u043d\u044b\u0445 \u043d\u0435 \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u0443\u044e\u0442\u0441\u044f \u043d\u0435\u044f\u0432\u043d\u043e \u0432 \u0434\u0440\u0443\u0433\u0438\u0435 \u0442\u0438\u043f\u044b \u0434\u0430\u043d\u043d\u044b\u0445, \u043a\u0440\u043e\u043c\u0435 ",(0,o.kt)("inlineCode",{parentName:"p"},"UInt32"),".\n\u0415\u0441\u043b\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u0442\u044c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0442\u0438\u043f\u0430 ",(0,o.kt)("inlineCode",{parentName:"p"},"IPv4")," \u0432 \u0441\u0442\u0440\u043e\u043a\u0443, \u0442\u043e \u044d\u0442\u043e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0434\u0435\u043b\u0430\u0442\u044c \u044f\u0432\u043d\u043e \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0444\u0443\u043d\u043a\u0446\u0438\u0438 ",(0,o.kt)("inlineCode",{parentName:"p"},"IPv4NumToString()"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT toTypeName(s), IPv4NumToString(from) AS s FROM hits LIMIT 1;\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500toTypeName(IPv4NumToString(from))\u2500\u252c\u2500s\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 String                            \u2502 183.247.232.58 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,o.kt)("p",null,"\u0418\u043b\u0438 \u043f\u0440\u0438\u0432\u043e\u0434\u0438\u0442\u044c \u043a \u0442\u0438\u043f\u0443 \u0434\u0430\u043d\u043d\u044b\u0445 ",(0,o.kt)("inlineCode",{parentName:"p"},"UInt32"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT toTypeName(i), CAST(from AS UInt32) AS i FROM hits LIMIT 1;\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500toTypeName(CAST(from, 'UInt32'))\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500i\u2500\u2510\n\u2502 UInt32                           \u2502 3086477370 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}d.isMDXComponent=!0}}]);