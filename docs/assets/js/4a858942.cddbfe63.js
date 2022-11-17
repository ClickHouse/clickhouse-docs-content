"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[35067,9512],{3905:(e,n,t)=>{t.d(n,{Zo:()=>f,kt:()=>d});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},f=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,f=s(e,["components","mdxType","originalType","parentName"]),h=c(t),d=o,g=h["".concat(l,".").concat(d)]||h[d]||u[d]||a;return t?r.createElement(g,i(i({ref:n},f),{},{components:t})):r.createElement(g,i({ref:n},f))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=h;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},7447:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=t(87462),o=(t(67294),t(3905));const a={slug:"/en/sql-reference/functions/geo/",sidebar_label:"Geo",sidebar_position:62,title:"Geo Functions"},i=void 0,s={unversionedId:"en/sql-reference/functions/geo/index",id:"en/sql-reference/functions/geo/index",title:"Geo Functions",description:"Geographical Coordinates Functions",source:"@site/docs/en/sql-reference/functions/geo/index.md",sourceDirName:"en/sql-reference/functions/geo",slug:"/en/sql-reference/functions/geo/",permalink:"/docs/en/sql-reference/functions/geo/",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/functions/geo/index.md",tags:[],version:"current",sidebarPosition:62,frontMatter:{slug:"/en/sql-reference/functions/geo/",sidebar_label:"Geo",sidebar_position:62,title:"Geo Functions"},sidebar:"english",previous:{title:"arrayJoin",permalink:"/docs/en/sql-reference/functions/array-join"},next:{title:"Geographical Coordinates",permalink:"/docs/en/sql-reference/functions/geo/coordinates"}},l={},c=[{value:"Geographical Coordinates Functions",id:"geographical-coordinates-functions",level:2},{value:"Geohash Functions",id:"geohash-functions",level:2},{value:"H3 Indexes Functions",id:"h3-indexes-functions",level:2},{value:"S2 Index Functions",id:"s2-index-functions",level:2}],f={toc:c};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"geographical-coordinates-functions"},"Geographical Coordinates Functions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/functions/geo/coordinates#greatcircledistance"},"greatCircleDistance")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/functions/geo/coordinates#geodistance"},"geoDistance")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/functions/geo/coordinates#greatcircleangle"},"greatCircleAngle")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/functions/geo/coordinates#pointinellipses"},"pointInEllipses")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/functions/geo/coordinates#pointinpolygon"},"pointInPolygon"))),(0,o.kt)("h2",{id:"geohash-functions"},"Geohash Functions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/functions/geo/geohash#geohashencode"},"geohashEncode")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/functions/geo/geohash#geohashdecode"},"geohashDecode")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/functions/geo/geohash#geohashesinbox"},"geohashesInBox"))),(0,o.kt)("h2",{id:"h3-indexes-functions"},"H3 Indexes Functions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/functions/geo/h3#h3isvalid"},"h3IsValid")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/functions/geo/h3#h3getresolution"},"h3GetResolution")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/functions/geo/h3#h3edgeangle"},"h3EdgeAngle")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/functions/geo/h3#h3edgelengthm"},"h3EdgeLengthM")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/functions/geo/h3#h3edgelengthkm"},"h3EdgeLengthKm")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/functions/geo/h3#geotoh3"},"geoToH3")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/functions/geo/h3#h3togeo"},"h3ToGeo")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/functions/geo/h3#h3togeoboundary"},"h3ToGeoBoundary")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/functions/geo/h3#h3kring"},"h3kRing")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/functions/geo/h3#h3getbasecell"},"h3GetBaseCell")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/functions/geo/h3#h3hexaream2"},"h3HexAreaM2")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/functions/geo/h3#h3hexareakm2"},"h3HexAreaKm2")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/functions/geo/h3#h3indexesareneighbors"},"h3IndexesAreNeighbors")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/functions/geo/h3#h3tochildren"},"h3ToChildren")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/functions/geo/h3#h3toparent"},"h3ToParent")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/functions/geo/h3#h3tostring"},"h3ToString")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/functions/geo/h3#stringtoh3"},"stringToH3")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/functions/geo/h3#h3getresolution"},"h3GetResolution")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/functions/geo/h3#h3isresclassiii"},"h3IsResClassIII")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/functions/geo/h3#h3ispentagon"},"h3IsPentagon")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/functions/geo/h3#h3getfaces"},"h3GetFaces")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/functions/geo/h3#h3cellaream2"},"h3CellAreaM2")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/functions/geo/h3#h3cellarearads2"},"h3CellAreaRads2")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/functions/geo/h3#h3tocenterchild"},"h3ToCenterChild")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/functions/geo/h3#h3exactedgelengthm"},"h3ExactEdgeLengthM")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/functions/geo/h3#h3exactedgelengthkm"},"h3ExactEdgeLengthKm")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/functions/geo/h3#h3exactedgelengthrads"},"h3ExactEdgeLengthRads")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/functions/geo/h3#h3numhexagons"},"h3NumHexagons")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/functions/geo/h3#h3line"},"h3Line")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/functions/geo/h3#h3distance"},"h3Distance")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/functions/geo/h3#h3hexring"},"h3HexRing")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/functions/geo/h3#h3getunidirectionaledge"},"h3GetUnidirectionalEdge")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/functions/geo/h3#h3unidirectionaledgeisvalid"},"h3UnidirectionalEdgeIsValid")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/functions/geo/h3#h3getoriginindexfromunidirectionaledge"},"h3GetOriginIndexFromUnidirectionalEdge")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/functions/geo/h3#h3getdestinationindexfromunidirectionaledge"},"h3GetDestinationIndexFromUnidirectionalEdge")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/functions/geo/h3#h3getindexesfromunidirectionaledge"},"h3GetIndexesFromUnidirectionalEdge")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/functions/geo/h3#h3getunidirectionaledgesfromhexagon"},"h3GetUnidirectionalEdgesFromHexagon")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/functions/geo/h3#h3getunidirectionaledgeboundary"},"h3GetUnidirectionalEdgeBoundary"))),(0,o.kt)("h2",{id:"s2-index-functions"},"S2 Index Functions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/functions/geo/s2#geotos2"},"geoToS2")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/functions/geo/s2#s2togeo"},"s2ToGeo")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/functions/geo/s2#s2getneighbors"},"s2GetNeighbors")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/functions/geo/s2#s2cellsintersect"},"s2CellsIntersect")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/functions/geo/s2#s2capcontains"},"s2CapContains")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/functions/geo/s2#s2capunion"},"s2CapUnion")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/functions/geo/s2#s2rectadd"},"s2RectAdd")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/functions/geo/s2#s2rectcontains"},"s2RectContains")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/functions/geo/s2#s2rectunion"},"s2RectUnion")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/functions/geo/s2#s2rectintersection"},"s2RectIntersection"))))}u.isMDXComponent=!0},41142:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>f});var r=t(87462),o=(t(67294),t(3905)),a=t(7447);const i={slug:"/zh/sql-reference/functions/geo/",sidebar_label:"Geo",sidebar_position:62,title:"Geo Functions"},s=void 0,l={unversionedId:"zh/sql-reference/functions/geo/index",id:"zh/sql-reference/functions/geo/index",title:"Geo Functions",description:"",source:"@site/docs/zh/sql-reference/functions/geo/index.mdx",sourceDirName:"zh/sql-reference/functions/geo",slug:"/zh/sql-reference/functions/geo/",permalink:"/docs/zh/sql-reference/functions/geo/",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/functions/geo/index.mdx",tags:[],version:"current",sidebarPosition:62,frontMatter:{slug:"/zh/sql-reference/functions/geo/",sidebar_label:"Geo",sidebar_position:62,title:"Geo Functions"},sidebar:"chinese",previous:{title:"IN \u8fd0\u7b97\u7b26",permalink:"/docs/zh/sql-reference/functions/in-functions"},next:{title:"Geographical Coordinates",permalink:"/docs/zh/sql-reference/functions/geo/coordinates"}},c={},f=[],u={toc:f};function h(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)(a.default,{mdxType:"Content"}))}h.isMDXComponent=!0}}]);