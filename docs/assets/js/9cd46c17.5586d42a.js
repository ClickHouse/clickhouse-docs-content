"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[17502,42040],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=r,g=p["".concat(l,".").concat(h)]||p[h]||d[h]||o;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},16679:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={slug:"/en/sql-reference/functions/geo/geohash",sidebar_label:"Geohash",title:"Functions for Working with Geohash"},i=void 0,s={unversionedId:"en/sql-reference/functions/geo/geohash",id:"en/sql-reference/functions/geo/geohash",title:"Functions for Working with Geohash",description:"Geohash is the geocode system, which subdivides Earth\u2019s surface into buckets of grid shape and encodes each cell into a short string of letters and digits. It is a hierarchical data structure, so the longer is the geohash string, the more precise is the geographic location.",source:"@site/docs/en/sql-reference/functions/geo/geohash.md",sourceDirName:"en/sql-reference/functions/geo",slug:"/en/sql-reference/functions/geo/geohash",permalink:"/docs/en/sql-reference/functions/geo/geohash",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/functions/geo/geohash.md",tags:[],version:"current",frontMatter:{slug:"/en/sql-reference/functions/geo/geohash",sidebar_label:"Geohash",title:"Functions for Working with Geohash"},sidebar:"english",previous:{title:"Geographical Coordinates",permalink:"/docs/en/sql-reference/functions/geo/coordinates"},next:{title:"H3 Indexes",permalink:"/docs/en/sql-reference/functions/geo/h3"}},l={},c=[{value:"geohashEncode",id:"geohashencode",level:2},{value:"geohashDecode",id:"geohashdecode",level:2},{value:"geohashesInBox",id:"geohashesinbox",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Geohash"},"Geohash")," is the geocode system, which subdivides Earth\u2019s surface into buckets of grid shape and encodes each cell into a short string of letters and digits. It is a hierarchical data structure, so the longer is the geohash string, the more precise is the geographic location."),(0,r.kt)("p",null,"If you need to manually convert geographic coordinates to geohash strings, you can use ",(0,r.kt)("a",{parentName:"p",href:"http://geohash.org/"},"geohash.org"),"."),(0,r.kt)("h2",{id:"geohashencode"},"geohashEncode"),(0,r.kt)("p",null,"Encodes latitude and longitude as a ",(0,r.kt)("a",{parentName:"p",href:"#geohash"},"geohash"),"-string."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"geohashEncode(longitude, latitude, [precision])\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Input values")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"longitude - longitude part of the coordinate you want to encode. Floating in range",(0,r.kt)("inlineCode",{parentName:"li"},"[-180\xb0, 180\xb0]")),(0,r.kt)("li",{parentName:"ul"},"latitude - latitude part of the coordinate you want to encode. Floating in range ",(0,r.kt)("inlineCode",{parentName:"li"},"[-90\xb0, 90\xb0]")),(0,r.kt)("li",{parentName:"ul"},"precision - Optional, length of the resulting encoded string, defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"12"),". Integer in range ",(0,r.kt)("inlineCode",{parentName:"li"},"[1, 12]"),". Any value less than ",(0,r.kt)("inlineCode",{parentName:"li"},"1")," or greater than ",(0,r.kt)("inlineCode",{parentName:"li"},"12")," is silently converted to ",(0,r.kt)("inlineCode",{parentName:"li"},"12"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returned values")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"alphanumeric ",(0,r.kt)("inlineCode",{parentName:"li"},"String")," of encoded coordinate (modified version of the base32-encoding alphabet is used).")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT geohashEncode(-5.60302734375, 42.593994140625, 0) AS res;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500res\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 ezs42d000000 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h2",{id:"geohashdecode"},"geohashDecode"),(0,r.kt)("p",null,"Decodes any ",(0,r.kt)("a",{parentName:"p",href:"#geohash"},"geohash"),"-encoded string into longitude and latitude."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Input values")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"encoded string - geohash-encoded string.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returned values")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"(longitude, latitude) - 2-tuple of ",(0,r.kt)("inlineCode",{parentName:"li"},"Float64")," values of longitude and latitude.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT geohashDecode('ezs42') AS res;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500res\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 (-5.60302734375,42.60498046875) \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h2",{id:"geohashesinbox"},"geohashesInBox"),(0,r.kt)("p",null,"Returns an array of ",(0,r.kt)("a",{parentName:"p",href:"#geohash"},"geohash"),"-encoded strings of given precision that fall inside and intersect boundaries of given box, basically a 2D grid flattened into array."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Syntax")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"geohashesInBox(longitude_min, latitude_min, longitude_max, latitude_max, precision)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"longitude_min")," \u2014 Minimum longitude. Range: ",(0,r.kt)("inlineCode",{parentName:"li"},"[-180\xb0, 180\xb0]"),". Type: ",(0,r.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/float"},"Float"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"latitude_min")," \u2014 Minimum latitude. Range: ",(0,r.kt)("inlineCode",{parentName:"li"},"[-90\xb0, 90\xb0]"),". Type: ",(0,r.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/float"},"Float"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"longitude_max")," \u2014 Maximum longitude. Range: ",(0,r.kt)("inlineCode",{parentName:"li"},"[-180\xb0, 180\xb0]"),". Type: ",(0,r.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/float"},"Float"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"latitude_max")," \u2014 Maximum latitude. Range: ",(0,r.kt)("inlineCode",{parentName:"li"},"[-90\xb0, 90\xb0]"),". Type: ",(0,r.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/float"},"Float"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"precision")," \u2014 Geohash precision. Range: ",(0,r.kt)("inlineCode",{parentName:"li"},"[1, 12]"),". Type: ",(0,r.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt8"),".")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"All coordinate parameters must be of the same type: either ",(0,r.kt)("inlineCode",{parentName:"p"},"Float32")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Float64"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returned values")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Array of precision-long strings of geohash-boxes covering provided area, you should not rely on order of items."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[]")," - Empty array if minimum latitude and longitude values aren\u2019t less than corresponding maximum values.")),(0,r.kt)("p",null,"Type: ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/array"},"Array"),"(",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/string"},"String"),")."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Function throws an exception if resulting array is over 10\u2019000\u2019000 items long.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("p",null,"Query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT geohashesInBox(24.48, 40.56, 24.785, 40.81, 4) AS thasos;\n")),(0,r.kt)("p",null,"Result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500thasos\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 ['sx1q','sx1r','sx32','sx1w','sx1x','sx38'] \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}d.isMDXComponent=!0},81007:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=n(87462),r=(n(67294),n(3905)),o=n(16679);const i={slug:"/zh/sql-reference/functions/geo/geohash",sidebar_label:"Geohash",title:"Functions for Working with Geohash"},s=void 0,l={unversionedId:"zh/sql-reference/functions/geo/geohash",id:"zh/sql-reference/functions/geo/geohash",title:"Functions for Working with Geohash",description:"",source:"@site/docs/zh/sql-reference/functions/geo/geohash.mdx",sourceDirName:"zh/sql-reference/functions/geo",slug:"/zh/sql-reference/functions/geo/geohash",permalink:"/docs/zh/sql-reference/functions/geo/geohash",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/functions/geo/geohash.mdx",tags:[],version:"current",frontMatter:{slug:"/zh/sql-reference/functions/geo/geohash",sidebar_label:"Geohash",title:"Functions for Working with Geohash"},sidebar:"chinese",previous:{title:"Geographical Coordinates",permalink:"/docs/zh/sql-reference/functions/geo/coordinates"},next:{title:"H3 Indexes",permalink:"/docs/zh/sql-reference/functions/geo/h3"}},c={},u=[],p={toc:u},d="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.default,{mdxType:"Content"}))}h.isMDXComponent=!0}}]);