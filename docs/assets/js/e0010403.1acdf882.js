"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[97936],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return y}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),g=i(n),y=a,m=g["".concat(s,".").concat(y)]||g[y]||c[y]||o;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=g;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var i=2;i<o;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},9358:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return y},frontMatter:function(){return p},metadata:function(){return i},toc:function(){return c}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),l=["components"],p={slug:"/en/sql-reference/data-types/geo",sidebar_position:62,sidebar_label:"Geo",title:"Geo Data Types"},s=void 0,i={unversionedId:"en/sql-reference/data-types/geo",id:"en/sql-reference/data-types/geo",title:"Geo Data Types",description:"ClickHouse supports data types for representing geographical objects \u2014 locations, lands, etc.",source:"@site/docs/en/sql-reference/data-types/geo.md",sourceDirName:"en/sql-reference/data-types",slug:"/en/sql-reference/data-types/geo",permalink:"/docs/en/sql-reference/data-types/geo",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/data-types/geo.md",tags:[],version:"current",sidebarPosition:62,frontMatter:{slug:"/en/sql-reference/data-types/geo",sidebar_position:62,sidebar_label:"Geo",title:"Geo Data Types"},sidebar:"english",previous:{title:"Multiword Type Names",permalink:"/docs/en/sql-reference/data-types/multiword-types"},next:{title:"Map(key, value)",permalink:"/docs/en/sql-reference/data-types/map"}},u={},c=[{value:"Point",id:"point",level:2},{value:"Ring",id:"ring",level:2},{value:"Polygon",id:"polygon",level:2},{value:"MultiPolygon",id:"multipolygon",level:2}],g={toc:c};function y(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"ClickHouse supports data types for representing geographical objects \u2014 locations, lands, etc."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"See Also")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/GeoJSON"},"Representing simple geographical features"),".")),(0,o.kt)("h2",{id:"point"},"Point"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Point")," is represented by its X and Y coordinates, stored as a ",(0,o.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/tuple"},"Tuple"),"(",(0,o.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/float"},"Float64"),", ",(0,o.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/float"},"Float64"),")."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example")),(0,o.kt)("p",null,"Query:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE geo_point (p Point) ENGINE = Memory();\nINSERT INTO geo_point VALUES((10, 10));\nSELECT p, toTypeName(p) FROM geo_point;\n")),(0,o.kt)("p",null,"Result:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500p\u2500\u2500\u2500\u2500\u2500\u252c\u2500toTypeName(p)\u2500\u2510\n\u2502 (10,10) \u2502 Point         \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,o.kt)("h2",{id:"ring"},"Ring"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Ring")," is a simple polygon without holes stored as an array of points: ",(0,o.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/array"},"Array"),"(",(0,o.kt)("a",{parentName:"p",href:"#point-data-type"},"Point"),")."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example")),(0,o.kt)("p",null,"Query:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE geo_ring (r Ring) ENGINE = Memory();\nINSERT INTO geo_ring VALUES([(0, 0), (10, 0), (10, 10), (0, 10)]);\nSELECT r, toTypeName(r) FROM geo_ring;\n")),(0,o.kt)("p",null,"Result:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500r\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500toTypeName(r)\u2500\u2510\n\u2502 [(0,0),(10,0),(10,10),(0,10)] \u2502 Ring          \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,o.kt)("h2",{id:"polygon"},"Polygon"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Polygon")," is a polygon with holes stored as an array of rings: ",(0,o.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/array"},"Array"),"(",(0,o.kt)("a",{parentName:"p",href:"#ring-data-type"},"Ring"),"). First element of outer array is the outer shape of polygon and all the following elements are holes."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example")),(0,o.kt)("p",null,"This is a polygon with one hole:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE geo_polygon (pg Polygon) ENGINE = Memory();\nINSERT INTO geo_polygon VALUES([[(20, 20), (50, 20), (50, 50), (20, 50)], [(30, 30), (50, 50), (50, 30)]]);\nSELECT pg, toTypeName(pg) FROM geo_polygon;\n")),(0,o.kt)("p",null,"Result:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500pg\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500toTypeName(pg)\u2500\u2510\n\u2502 [[(20,20),(50,20),(50,50),(20,50)],[(30,30),(50,50),(50,30)]] \u2502 Polygon        \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,o.kt)("h2",{id:"multipolygon"},"MultiPolygon"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"MultiPolygon")," consists of multiple polygons and is stored as an array of polygons: ",(0,o.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/array"},"Array"),"(",(0,o.kt)("a",{parentName:"p",href:"#polygon-data-type"},"Polygon"),")."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example")),(0,o.kt)("p",null,"This multipolygon consists of two separate polygons \u2014 the first one without holes, and the second with one hole:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE geo_multipolygon (mpg MultiPolygon) ENGINE = Memory();\nINSERT INTO geo_multipolygon VALUES([[[(0, 0), (10, 0), (10, 10), (0, 10)]], [[(20, 20), (50, 20), (50, 50), (20, 50)],[(30, 30), (50, 50), (50, 30)]]]);\nSELECT mpg, toTypeName(mpg) FROM geo_multipolygon;\n")),(0,o.kt)("p",null,"Result:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500mpg\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500toTypeName(mpg)\u2500\u2510\n\u2502 [[[(0,0),(10,0),(10,10),(0,10)]],[[(20,20),(50,20),(50,50),(20,50)],[(30,30),(50,50),(50,30)]]] \u2502 MultiPolygon    \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}y.isMDXComponent=!0}}]);