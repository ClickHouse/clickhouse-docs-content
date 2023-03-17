"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[7075,97936],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),i=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=i(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=i(n),g=r,y=u["".concat(s,".").concat(g)]||u[g]||d[g]||o;return n?a.createElement(y,l(l({ref:t},c),{},{components:n})):a.createElement(y,l({ref:t},c))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=g;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:r,l[1]=p;for(var i=2;i<o;i++)l[i]=n[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},9358:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>i});var a=n(87462),r=(n(67294),n(3905));const o={slug:"/en/sql-reference/data-types/geo",sidebar_position:62,sidebar_label:"Geo",title:"Geo Data Types"},l=void 0,p={unversionedId:"en/sql-reference/data-types/geo",id:"en/sql-reference/data-types/geo",title:"Geo Data Types",description:"ClickHouse supports data types for representing geographical objects \u2014 locations, lands, etc.",source:"@site/docs/en/sql-reference/data-types/geo.md",sourceDirName:"en/sql-reference/data-types",slug:"/en/sql-reference/data-types/geo",permalink:"/docs/en/sql-reference/data-types/geo",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/data-types/geo.md",tags:[],version:"current",sidebarPosition:62,frontMatter:{slug:"/en/sql-reference/data-types/geo",sidebar_position:62,sidebar_label:"Geo",title:"Geo Data Types"},sidebar:"sqlreference",previous:{title:"Multiword Type Names",permalink:"/docs/en/sql-reference/data-types/multiword-types"},next:{title:"Map(key, value)",permalink:"/docs/en/sql-reference/data-types/map"}},s={},i=[{value:"Point",id:"point",level:2},{value:"Ring",id:"ring",level:2},{value:"Polygon",id:"polygon",level:2},{value:"MultiPolygon",id:"multipolygon",level:2},{value:"Related Content",id:"related-content",level:2}],c={toc:i},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"ClickHouse supports data types for representing geographical objects \u2014 locations, lands, etc."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"See Also")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/GeoJSON"},"Representing simple geographical features"),".")),(0,r.kt)("h2",{id:"point"},"Point"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Point")," is represented by its X and Y coordinates, stored as a ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/tuple"},"Tuple"),"(",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/float"},"Float64"),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/float"},"Float64"),")."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("p",null,"Query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE geo_point (p Point) ENGINE = Memory();\nINSERT INTO geo_point VALUES((10, 10));\nSELECT p, toTypeName(p) FROM geo_point;\n")),(0,r.kt)("p",null,"Result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500p\u2500\u2500\u2500\u2500\u2500\u252c\u2500toTypeName(p)\u2500\u2510\n\u2502 (10,10) \u2502 Point         \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h2",{id:"ring"},"Ring"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Ring")," is a simple polygon without holes stored as an array of points: ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/array"},"Array"),"(",(0,r.kt)("a",{parentName:"p",href:"#point-data-type"},"Point"),")."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("p",null,"Query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE geo_ring (r Ring) ENGINE = Memory();\nINSERT INTO geo_ring VALUES([(0, 0), (10, 0), (10, 10), (0, 10)]);\nSELECT r, toTypeName(r) FROM geo_ring;\n")),(0,r.kt)("p",null,"Result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500r\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500toTypeName(r)\u2500\u2510\n\u2502 [(0,0),(10,0),(10,10),(0,10)] \u2502 Ring          \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h2",{id:"polygon"},"Polygon"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Polygon")," is a polygon with holes stored as an array of rings: ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/array"},"Array"),"(",(0,r.kt)("a",{parentName:"p",href:"#ring-data-type"},"Ring"),"). First element of outer array is the outer shape of polygon and all the following elements are holes."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("p",null,"This is a polygon with one hole:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE geo_polygon (pg Polygon) ENGINE = Memory();\nINSERT INTO geo_polygon VALUES([[(20, 20), (50, 20), (50, 50), (20, 50)], [(30, 30), (50, 50), (50, 30)]]);\nSELECT pg, toTypeName(pg) FROM geo_polygon;\n")),(0,r.kt)("p",null,"Result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500pg\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500toTypeName(pg)\u2500\u2510\n\u2502 [[(20,20),(50,20),(50,50),(20,50)],[(30,30),(50,50),(50,30)]] \u2502 Polygon        \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h2",{id:"multipolygon"},"MultiPolygon"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"MultiPolygon")," consists of multiple polygons and is stored as an array of polygons: ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/array"},"Array"),"(",(0,r.kt)("a",{parentName:"p",href:"#polygon-data-type"},"Polygon"),")."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("p",null,"This multipolygon consists of two separate polygons \u2014 the first one without holes, and the second with one hole:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE geo_multipolygon (mpg MultiPolygon) ENGINE = Memory();\nINSERT INTO geo_multipolygon VALUES([[[(0, 0), (10, 0), (10, 10), (0, 10)]], [[(20, 20), (50, 20), (50, 50), (20, 50)],[(30, 30), (50, 50), (50, 30)]]]);\nSELECT mpg, toTypeName(mpg) FROM geo_multipolygon;\n")),(0,r.kt)("p",null,"Result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500mpg\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500toTypeName(mpg)\u2500\u2510\n\u2502 [[[(0,0),(10,0),(10,10),(0,10)]],[[(20,20),(50,20),(50,50),(20,50)],[(30,30),(50,50),(50,30)]]] \u2502 MultiPolygon    \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h2",{id:"related-content"},"Related Content"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://clickhouse.com/blog/real-world-data-noaa-climate-data"},"Exploring massive, real-world data sets: 100+ Years of Weather Records in ClickHouse"))))}d.isMDXComponent=!0},73372:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>g,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905)),o=n(9358);const l={slug:"/zh/sql-reference/data-types/geo",sidebar_position:62,sidebar_label:"Geo",title:"Geo Data Types"},p=void 0,s={unversionedId:"zh/sql-reference/data-types/geo",id:"zh/sql-reference/data-types/geo",title:"Geo Data Types",description:"",source:"@site/docs/zh/sql-reference/data-types/geo.mdx",sourceDirName:"zh/sql-reference/data-types",slug:"/zh/sql-reference/data-types/geo",permalink:"/docs/zh/sql-reference/data-types/geo",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/data-types/geo.mdx",tags:[],version:"current",sidebarPosition:62,frontMatter:{slug:"/zh/sql-reference/data-types/geo",sidebar_position:62,sidebar_label:"Geo",title:"Geo Data Types"},sidebar:"chinese",previous:{title:"Multiword Type Names",permalink:"/docs/zh/sql-reference/data-types/multiword-types"},next:{title:"Map(key, value)",permalink:"/docs/zh/sql-reference/data-types/map"}},i={},c=[],u={toc:c},d="wrapper";function g(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.default,{mdxType:"Content"}))}g.isMDXComponent=!0}}]);