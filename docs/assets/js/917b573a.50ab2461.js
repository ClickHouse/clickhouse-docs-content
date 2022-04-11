"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[29416],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var l=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=l.createContext({}),u=function(e){var n=l.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=u(e.components);return l.createElement(p.Provider,{value:n},e.children)},k={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},c=l.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=u(t),m=a,g=c["".concat(p,".").concat(m)]||c[m]||k[m]||r;return t?l.createElement(g,i(i({ref:n},s),{},{components:t})):l.createElement(g,i({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=c;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<r;u++)i[u]=t[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,t)}c.displayName="MDXCreateElement"},21914:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return k}});var l=t(87462),a=t(63366),r=(t(67294),t(3905)),i=["components"],o={},p="GEO\u51fd\u6570",u={unversionedId:"zh/sql-reference/functions/geo",id:"zh/sql-reference/functions/geo",title:"GEO\u51fd\u6570",description:"geohan-shu}",source:"@site/docs/zh/sql-reference/functions/geo.md",sourceDirName:"zh/sql-reference/functions",slug:"/zh/sql-reference/functions/geo",permalink:"/zh/sql-reference/functions/geo",editUrl:"https://github.com/ClickHouse/clickhouse-docs/tree/main/docs/zh/sql-reference/functions/geo.md",tags:[],version:"current",frontMatter:{},sidebar:"chinese",previous:{title:"Nullable\u5904\u7406\u51fd\u6570",permalink:"/zh/sql-reference/functions/functions-for-nulls"},next:{title:"Hash\u51fd\u6570",permalink:"/zh/sql-reference/functions/hash-functions"}},s={},k=[{value:"\u5927\u5706\u5f62\u8ddd\u79bb",id:"greatcircledistance",level:2},{value:"\u5c16\u5c16\u7684\u4eba",id:"pointinellipses",level:2},{value:"pointInPolygon",id:"pointinpolygon",level:2},{value:"geohashEncode",id:"geohashencode",level:2},{value:"geohashDecode",id:"geohashdecode",level:2},{value:"geoToH3",id:"geotoh3",level:2},{value:"geohashesInBox",id:"geohashesinbox",level:2}],c={toc:k};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,l.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"geohan-shu"},"GEO\u51fd\u6570"),(0,r.kt)("h2",{id:"greatcircledistance"},"\u5927\u5706\u5f62\u8ddd\u79bb"),(0,r.kt)("p",null,"\u4f7f\u7528",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Great-circle_distance"},"great-circle distance\u516c\u5f0f"),"\u8ba1\u7b97\u5730\u7403\u8868\u9762\u4e24\u70b9\u4e4b\u95f4\u7684\u8ddd\u79bb\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"greatCircleDistance(lon1Deg, lat1Deg, lon2Deg, lat2Deg)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8f93\u5165\u53c2\u6570")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"lon1Deg")," \u2014 \u7b2c\u4e00\u4e2a\u70b9\u7684\u7ecf\u5ea6\uff0c\u5355\u4f4d\uff1a\u5ea6\uff0c\u8303\u56f4\uff1a ",(0,r.kt)("inlineCode",{parentName:"li"},"[-180\xb0, 180\xb0]"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"lat1Deg")," \u2014 \u7b2c\u4e00\u4e2a\u70b9\u7684\u7eac\u5ea6\uff0c\u5355\u4f4d\uff1a\u5ea6\uff0c\u8303\u56f4\uff1a ",(0,r.kt)("inlineCode",{parentName:"li"},"[-90\xb0, 90\xb0]"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"lon2Deg")," \u2014 \u7b2c\u4e8c\u4e2a\u70b9\u7684\u7ecf\u5ea6\uff0c\u5355\u4f4d\uff1a\u5ea6\uff0c\u8303\u56f4\uff1a ",(0,r.kt)("inlineCode",{parentName:"li"},"[-180\xb0, 180\xb0]"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"lat2Deg")," \u2014 \u7b2c\u4e8c\u4e2a\u70b9\u7684\u7eac\u5ea6\uff0c\u5355\u4f4d\uff1a\u5ea6\uff0c\u8303\u56f4\uff1a ",(0,r.kt)("inlineCode",{parentName:"li"},"[-90\xb0, 90\xb0]"),"\u3002")),(0,r.kt)("p",null,"\u6b63\u503c\u5bf9\u5e94\u5317\u7eac\u548c\u4e1c\u7ecf\uff0c\u8d1f\u503c\u5bf9\u5e94\u5357\u7eac\u548c\u897f\u7ecf\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u503c")),(0,r.kt)("p",null,"\u5730\u7403\u8868\u9762\u7684\u4e24\u70b9\u4e4b\u95f4\u7684\u8ddd\u79bb\uff0c\u4ee5\u7c73\u4e3a\u5355\u4f4d\u3002"),(0,r.kt)("p",null,"\u5f53\u8f93\u5165\u53c2\u6570\u503c\u8d85\u51fa\u89c4\u5b9a\u7684\u8303\u56f4\u65f6\u5c06\u629b\u51fa\u5f02\u5e38\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT greatCircleDistance(55.755831, 37.617673, -55.755831, -37.617673)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500greatCircleDistance(55.755831, 37.617673, -55.755831, -37.617673)\u2500\u2510\n\u2502                                                14132374.194975413 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h2",{id:"pointinellipses"},"\u5c16\u5c16\u7684\u4eba"),(0,r.kt)("p",null,"\u68c0\u67e5\u6307\u5b9a\u7684\u70b9\u662f\u5426\u81f3\u5c11\u5305\u542b\u5728\u6307\u5b9a\u7684\u4e00\u4e2a\u692d\u5706\u4e2d\u3002\n\u4e0b\u8ff0\u4e2d\u7684\u5750\u6807\u662f\u51e0\u4f55\u56fe\u5f62\u5728\u7b1b\u5361\u5c14\u5750\u6807\u7cfb\u4e2d\u7684\u4f4d\u7f6e\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"pointInEllipses(x, y, x\u2080, y\u2080, a\u2080, b\u2080,...,x\u2099, y\u2099, a\u2099, b\u2099)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8f93\u5165\u53c2\u6570")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"x, y")," \u2014 \u5e73\u9762\u4e0a\u67d0\u4e2a\u70b9\u7684\u5750\u6807\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"x\u1d62, y\u1d62")," \u2014 \u7b2ci\u4e2a\u692d\u5706\u7684\u4e2d\u5fc3\u5750\u6807\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"a\u1d62, b\u1d62")," \u2014 \u4ee5x, y\u5750\u6807\u4e3a\u5355\u4f4d\u7684\u7b2ci\u4e2a\u692d\u5706\u7684\u8f74\u3002")),(0,r.kt)("p",null,"\u8f93\u5165\u53c2\u6570\u7684\u4e2a\u6570\u5fc5\u987b\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"2+4\u22c5n"),"\uff0c\u5176\u4e2d",(0,r.kt)("inlineCode",{parentName:"p"},"n"),"\u662f\u692d\u5706\u7684\u6570\u91cf\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u503c")),(0,r.kt)("p",null,"\u5982\u679c\u8be5\u70b9\u81f3\u5c11\u5305\u542b\u5728\u4e00\u4e2a\u692d\u5706\u4e2d\uff0c\u5219\u8fd4\u56de",(0,r.kt)("inlineCode",{parentName:"p"},"1"),"\uff1b\u5426\u5219\uff0c\u5219\u8fd4\u56de",(0,r.kt)("inlineCode",{parentName:"p"},"0"),"\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT pointInEllipses(55.755831, 37.617673, 55.755831, 37.617673, 1.0, 2.0)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500pointInEllipses(55.755831, 37.617673, 55.755831, 37.617673, 1., 2.)\u2500\u2510\n\u2502                                                                   1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h2",{id:"pointinpolygon"},"pointInPolygon"),(0,r.kt)("p",null,"\u68c0\u67e5\u6307\u5b9a\u7684\u70b9\u662f\u5426\u5305\u542b\u5728\u6307\u5b9a\u7684\u591a\u8fb9\u5f62\u4e2d\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"pointInPolygon((x, y), [(a, b), (c, d) ...], ...)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8f93\u5165\u53c2\u6570")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"(x, y)")," \u2014 \u5e73\u9762\u4e0a\u67d0\u4e2a\u70b9\u7684\u5750\u6807\u3002",(0,r.kt)("a",{parentName:"li",href:"/zh/sql-reference/functions/geo"},"\u5143\u7ec4"),"\u7c7b\u578b\uff0c\u5305\u542b\u5750\u6807\u7684\u4e24\u4e2a\u6570\u5b57\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[(a, b), (c, d) ...]")," \u2014 \u591a\u8fb9\u5f62\u7684\u9876\u70b9\u3002",(0,r.kt)("a",{parentName:"li",href:"/zh/sql-reference/functions/geo"},"\u9635\u5217"),"\u7c7b\u578b\u3002\u6bcf\u4e2a\u9876\u70b9\u7531\u4e00\u5bf9\u5750\u6807",(0,r.kt)("inlineCode",{parentName:"li"},"(a, b)"),"\u8868\u793a\u3002\u9876\u70b9\u53ef\u4ee5\u6309\u987a\u65f6\u9488\u6216\u9006\u65f6\u9488\u6307\u5b9a\u3002\u9876\u70b9\u7684\u4e2a\u6570\u5e94\u8be5\u5927\u4e8e\u7b49\u4e8e3\u3002\u540c\u65f6\u53ea\u80fd\u662f\u5e38\u91cf\u7684\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u8be5\u51fd\u6570\u8fd8\u652f\u6301\u9542\u7a7a\u7684\u591a\u8fb9\u5f62\uff08\u5207\u9664\u90e8\u5206\uff09\u3002\u5982\u679c\u9700\u8981\uff0c\u53ef\u4ee5\u4f7f\u7528\u51fd\u6570\u7684\u5176\u4ed6\u53c2\u6570\u5b9a\u4e49\u9700\u8981\u5207\u9664\u90e8\u5206\u7684\u591a\u8fb9\u5f62\u3002(The function does not support non-simply-connected polygons.)")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u503c")),(0,r.kt)("p",null,"\u5982\u679c\u5750\u6807\u70b9\u5b58\u5728\u5728\u591a\u8fb9\u5f62\u8303\u56f4\u5185\uff0c\u5219\u8fd4\u56de",(0,r.kt)("inlineCode",{parentName:"p"},"1"),"\u3002\u5426\u5219\u8fd4\u56de",(0,r.kt)("inlineCode",{parentName:"p"},"0"),"\u3002\n\u5982\u679c\u5750\u6807\u4f4d\u4e8e\u591a\u8fb9\u5f62\u7684\u8fb9\u754c\u4e0a\uff0c\u5219\u8be5\u51fd\u6570\u53ef\u80fd\u8fd4\u56de",(0,r.kt)("inlineCode",{parentName:"p"},"1"),"\uff0c\u6216\u53ef\u80fd\u8fd4\u56de",(0,r.kt)("inlineCode",{parentName:"p"},"0"),"\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT pointInPolygon((3., 3.), [(6, 0), (8, 4), (5, 8), (0, 2)]) AS res\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500res\u2500\u2510\n\u2502   1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h2",{id:"geohashencode"},"geohashEncode"),(0,r.kt)("p",null,"\u5c06\u7ecf\u5ea6\u548c\u7eac\u5ea6\u7f16\u7801\u4e3ageohash-string\uff0c\u8bf7\u53c2\u9605\uff08",(0,r.kt)("a",{parentName:"p",href:"http://geohash.org/,https://en.wikipedia.org/wiki/Geohash%EF%BC%89%E3%80%82"},"http://geohash.org/,https://en.wikipedia.org/wiki/Geohash\uff09\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"geohashEncode(longitude, latitude, [precision])\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8f93\u5165\u503c")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"longitude - \u8981\u7f16\u7801\u7684\u5750\u6807\u7684\u7ecf\u5ea6\u90e8\u5206\u3002\u5176\u503c\u5e94\u5728",(0,r.kt)("inlineCode",{parentName:"li"},"[-180\xb0\uff0c180\xb0]"),"\u8303\u56f4\u5185"),(0,r.kt)("li",{parentName:"ul"},"latitude - \u8981\u7f16\u7801\u7684\u5750\u6807\u7684\u7eac\u5ea6\u90e8\u5206\u3002\u5176\u503c\u5e94\u5728",(0,r.kt)("inlineCode",{parentName:"li"},"[-90\xb0\uff0c90\xb0]"),"\u8303\u56f4\u5185"),(0,r.kt)("li",{parentName:"ul"},"precision - \u53ef\u9009\uff0c\u751f\u6210\u7684geohash-string\u7684\u957f\u5ea6\uff0c\u9ed8\u8ba4\u4e3a",(0,r.kt)("inlineCode",{parentName:"li"},"12"),"\u3002\u53d6\u503c\u8303\u56f4\u4e3a",(0,r.kt)("inlineCode",{parentName:"li"},"[1,12]"),"\u3002\u4efb\u4f55\u5c0f\u4e8e",(0,r.kt)("inlineCode",{parentName:"li"},"1"),"\u6216\u5927\u4e8e",(0,r.kt)("inlineCode",{parentName:"li"},"12"),"\u7684\u503c\u90fd\u4f1a\u9ed8\u8ba4\u8f6c\u6362\u4e3a",(0,r.kt)("inlineCode",{parentName:"li"},"12"),"\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u503c")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5750\u6807\u7f16\u7801\u7684\u5b57\u7b26\u4e32\uff08\u4f7f\u7528base32\u7f16\u7801\u7684\u4fee\u6539\u7248\u672c\uff09\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT geohashEncode(-5.60302734375, 42.593994140625, 0) AS res\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500res\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 ezs42d000000 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h2",{id:"geohashdecode"},"geohashDecode"),(0,r.kt)("p",null,"\u5c06\u4efb\u4f55geohash\u7f16\u7801\u7684\u5b57\u7b26\u4e32\u89e3\u7801\u4e3a\u7ecf\u5ea6\u548c\u7eac\u5ea6\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8f93\u5165\u503c")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"encoded string - geohash\u7f16\u7801\u7684\u5b57\u7b26\u4e32\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u503c")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"(longitude, latitude) - \u7ecf\u5ea6\u548c\u7eac\u5ea6\u7684",(0,r.kt)("inlineCode",{parentName:"li"},"Float64"),"\u503c\u76842\u5143\u7ec4\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT geohashDecode('ezs42') AS res\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500res\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 (-5.60302734375,42.60498046875) \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h2",{id:"geotoh3"},"geoToH3"),(0,r.kt)("p",null,"\u8ba1\u7b97\u6307\u5b9a\u7684\u5206\u8fa8\u7387\u7684",(0,r.kt)("a",{parentName:"p",href:"https://uber.github.io/h3/#/documentation/overview/introduction"},"H3"),"\u7d22\u5f15",(0,r.kt)("inlineCode",{parentName:"p"},"(lon, lat)"),"\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"geoToH3(lon, lat, resolution)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8f93\u5165\u503c")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"lon")," \u2014 \u7ecf\u5ea6\u3002 ",(0,r.kt)("a",{parentName:"li",href:"/zh/sql-reference/functions/geo"},"Float64"),"\u7c7b\u578b\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"lat")," \u2014 \u7eac\u5ea6\u3002 ",(0,r.kt)("a",{parentName:"li",href:"/zh/sql-reference/functions/geo"},"Float64"),"\u7c7b\u578b\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"resolution")," \u2014 \u7d22\u5f15\u7684\u5206\u8fa8\u7387\u3002 \u53d6\u503c\u8303\u56f4\u4e3a: ",(0,r.kt)("inlineCode",{parentName:"li"},"[0, 15]"),"\u3002 ",(0,r.kt)("a",{parentName:"li",href:"/zh/sql-reference/functions/geo"},"UInt8"),"\u7c7b\u578b\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u503c")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"H3\u4e2d\u516d\u8fb9\u5f62\u7684\u7d22\u5f15\u503c\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u53d1\u751f\u5f02\u5e38\u65f6\u8fd4\u56de0\u3002")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/zh/sql-reference/functions/geo"},"UInt64"),"\u7c7b\u578b\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT geoToH3(37.79506683, 55.71290588, 15) as h3Index\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500h3Index\u2500\u2510\n\u2502 644325524701193974 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h2",{id:"geohashesinbox"},"geohashesInBox"),(0,r.kt)("p",null,"\u8ba1\u7b97\u5728\u6307\u5b9a\u7cbe\u5ea6\u4e0b\u8ba1\u7b97\u6700\u5c0f\u5305\u542b\u6307\u5b9a\u7684\u7ecf\u7eac\u8303\u56f4\u7684\u6700\u5c0f\u56fe\u5f62\u7684geohash\u6570\u7ec4\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8f93\u5165\u503c")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"longitude_min - \u6700\u5c0f\u7ecf\u5ea6\u3002\u5176\u503c\u5e94\u5728",(0,r.kt)("inlineCode",{parentName:"li"},"[-180\xb0\uff0c180\xb0]"),"\u8303\u56f4\u5185"),(0,r.kt)("li",{parentName:"ul"},"latitude_min - \u6700\u5c0f\u7eac\u5ea6\u3002\u5176\u503c\u5e94\u5728",(0,r.kt)("inlineCode",{parentName:"li"},"[-90\xb0\uff0c90\xb0]"),"\u8303\u56f4\u5185"),(0,r.kt)("li",{parentName:"ul"},"longitude_max - \u6700\u5927\u7ecf\u5ea6\u3002\u5176\u503c\u5e94\u5728",(0,r.kt)("inlineCode",{parentName:"li"},"[-180\xb0\uff0c180\xb0]"),"\u8303\u56f4\u5185"),(0,r.kt)("li",{parentName:"ul"},"latitude_max - \u6700\u5927\u7eac\u5ea6\u3002\u5176\u503c\u5e94\u5728",(0,r.kt)("inlineCode",{parentName:"li"},"[-90\xb0\uff0c90\xb0]"),"\u8303\u56f4\u5185"),(0,r.kt)("li",{parentName:"ul"},"precision - geohash\u7684\u7cbe\u5ea6\u3002\u5176\u503c\u5e94\u5728",(0,r.kt)("inlineCode",{parentName:"li"},"[1, 12]"),"\u5185\u7684",(0,r.kt)("inlineCode",{parentName:"li"},"UInt8"),"\u7c7b\u578b\u7684\u6570\u5b57")),(0,r.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c\u4e0a\u8ff0\u6240\u6709\u7684\u5750\u6807\u53c2\u6570\u5fc5\u987b\u540c\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"Float32"),"\u6216",(0,r.kt)("inlineCode",{parentName:"p"},"Float64"),"\u4e2d\u7684\u4e00\u79cd\u7c7b\u578b\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u503c")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5305\u542b\u6307\u5b9a\u8303\u56f4\u5185\u7684\u6307\u5b9a\u7cbe\u5ea6\u7684geohash\u5b57\u7b26\u4e32\u6570\u7ec4\u3002\u6ce8\u610f\uff0c\u60a8\u4e0d\u5e94\u8be5\u4f9d\u8d56\u8fd4\u56de\u6570\u7ec4\u4e2dgeohash\u7684\u987a\u5e8f\u3002"),(0,r.kt)("li",{parentName:"ul"},"[","]"," - \u5f53\u4f20\u5165\u7684\u6700\u5c0f\u7ecf\u7eac\u5ea6\u5927\u4e8e\u6700\u5927\u7ecf\u7eac\u5ea6\u65f6\u5c06\u8fd4\u56de\u4e00\u4e2a\u7a7a\u6570\u7ec4\u3002")),(0,r.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c\u5982\u679c\u751f\u6210\u7684\u6570\u7ec4\u957f\u5ea6\u8d85\u8fc710000\u65f6\uff0c\u5219\u51fd\u6570\u5c06\u629b\u51fa\u5f02\u5e38\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT geohashesInBox(24.48, 40.56, 24.785, 40.81, 4) AS thasos\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500thasos\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 ['sx1q','sx1r','sx32','sx1w','sx1x','sx38'] \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/query_language/functions/geo/"},"\u6765\u6e90\u6587\u7ae0")," "))}m.isMDXComponent=!0}}]);