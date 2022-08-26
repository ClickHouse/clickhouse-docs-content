"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[87523],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},36550:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return u}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],p={slug:"/zh/sql-reference/data-types/domains/ipv6"},l=void 0,s={unversionedId:"zh/sql-reference/data-types/domains/ipv6",id:"zh/sql-reference/data-types/domains/ipv6",title:"ipv6",description:"IPv6",source:"@site/docs/zh/sql-reference/data-types/domains/ipv6.md",sourceDirName:"zh/sql-reference/data-types/domains",slug:"/zh/sql-reference/data-types/domains/ipv6",permalink:"/docs/zh/sql-reference/data-types/domains/ipv6",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/data-types/domains/ipv6.md",tags:[],version:"current",frontMatter:{slug:"/zh/sql-reference/data-types/domains/ipv6"},sidebar:"chinese",previous:{title:"ipv4",permalink:"/docs/zh/sql-reference/data-types/domains/ipv4"},next:{title:"Multiword Type Names",permalink:"/docs/zh/sql-reference/data-types/multiword-types"}},c={},u=[{value:"IPv6",id:"ipv6",level:2},{value:"\u57fa\u672c\u7528\u6cd5",id:"ji-ben-yong-fa",level:3}],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"ipv6"},"IPv6"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"IPv6"),"\u662f\u4e0e",(0,o.kt)("inlineCode",{parentName:"p"},"FixedString(16)"),"\u7c7b\u578b\u4fdd\u6301\u4e8c\u8fdb\u5236\u517c\u5bb9\u7684Domain\u7c7b\u578b\uff0c\u5176\u7528\u4e8e\u5b58\u50a8IPv6\u5730\u5740\u7684\u503c\u3002\u5b83\u63d0\u4f9b\u4e86\u66f4\u4e3a\u7d27\u51d1\u7684\u4e8c\u8fdb\u5236\u5b58\u50a8\u7684\u540c\u65f6\u652f\u6301\u8bc6\u522b\u53ef\u8bfb\u6027\u66f4\u52a0\u53cb\u597d\u7684\u8f93\u5165\u8f93\u51fa\u683c\u5f0f\u3002"),(0,o.kt)("h3",{id:"ji-ben-yong-fa"},"\u57fa\u672c\u7528\u6cd5"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE hits (url String, from IPv6) ENGINE = MergeTree() ORDER BY url;\n\nDESCRIBE TABLE hits;\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u250c\u2500name\u2500\u252c\u2500type\u2500\u2500\u2500\u252c\u2500default_type\u2500\u252c\u2500default_expression\u2500\u252c\u2500comment\u2500\u252c\u2500codec_expression\u2500\u2510\n\u2502 url  \u2502 String \u2502              \u2502                    \u2502         \u2502                  \u2502\n\u2502 from \u2502 IPv6   \u2502              \u2502                    \u2502         \u2502                  \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,o.kt)("p",null,"\u540c\u65f6\u60a8\u4e5f\u53ef\u4ee5\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"IPv6"),"\u7c7b\u578b\u7684\u5217\u4f5c\u4e3a\u4e3b\u952e\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE hits (url String, from IPv6) ENGINE = MergeTree() ORDER BY from;\n")),(0,o.kt)("p",null,"\u5728\u5199\u5165\u4e0e\u67e5\u8be2\u65f6\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"IPv6"),"\u7c7b\u578b\u80fd\u591f\u8bc6\u522b\u53ef\u8bfb\u6027\u66f4\u52a0\u53cb\u597d\u7684\u8f93\u5165\u8f93\u51fa\u683c\u5f0f\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO hits (url, from) VALUES ('https://wikipedia.org', '2a02:aa08:e000:3100::2')('https://clickhouse.com', '2001:44c8:129:2632:33:0:252:2')('https://clickhouse.com/docs/en/', '2a02:e980:1e::1');\n\nSELECT * FROM hits;\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u250c\u2500url\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500from\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 https://clickhouse.com          \u2502 2001:44c8:129:2632:33:0:252:2 \u2502\n\u2502 https://clickhouse.com/docs/en/ \u2502 2a02:e980:1e::1               \u2502\n\u2502 https://wikipedia.org              \u2502 2a02:aa08:e000:3100::2        \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,o.kt)("p",null,"\u540c\u65f6\u5b83\u63d0\u4f9b\u66f4\u4e3a\u7d27\u51d1\u7684\u4e8c\u8fdb\u5236\u5b58\u50a8\u683c\u5f0f\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT toTypeName(from), hex(from) FROM hits LIMIT 1;\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u250c\u2500toTypeName(from)\u2500\u252c\u2500hex(from)\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 IPv6             \u2502 200144C8012926320033000002520002 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,o.kt)("p",null,"\u4e0d\u53ef\u9690\u5f0f\u8f6c\u6362\u4e3a\u9664",(0,o.kt)("inlineCode",{parentName:"p"},"FixedString(16)"),"\u4ee5\u5916\u7684\u5176\u4ed6\u7c7b\u578b\u7c7b\u578b\u3002\u5982\u679c\u8981\u5c06",(0,o.kt)("inlineCode",{parentName:"p"},"IPv6"),"\u7c7b\u578b\u7684\u503c\u8f6c\u6362\u6210\u5b57\u7b26\u4e32\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"IPv6NumToString()"),"\u663e\u793a\u7684\u8fdb\u884c\u8f6c\u6362\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT toTypeName(s), IPv6NumToString(from) as s FROM hits LIMIT 1;\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u250c\u2500toTypeName(IPv6NumToString(from))\u2500\u252c\u2500s\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 String                            \u2502 2001:44c8:129:2632:33:0:252:2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,o.kt)("p",null,"\u6216\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"CAST"),"\u5c06\u5176\u8f6c\u6362\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"FixedString(16)"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT toTypeName(i), CAST(from as FixedString(16)) as i FROM hits LIMIT 1;\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u250c\u2500toTypeName(CAST(from, 'FixedString(16)'))\u2500\u252c\u2500i\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 FixedString(16)                           \u2502  \ufffd\ufffd\ufffd \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/data_types/domains/ipv6"},"\u6765\u6e90\u6587\u7ae0")," "))}d.isMDXComponent=!0}}]);