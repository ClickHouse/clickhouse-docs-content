"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[34428],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),k=l,g=u["".concat(o,".").concat(k)]||u[k]||d[k]||r;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=k;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[u]="string"==typeof e?e:l,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},58274:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(87462),l=(n(67294),n(3905));const r={slug:"/en/sql-reference/functions/geo/s2",sidebar_label:"S2 Geometry"},i="Functions for Working with S2 Index",s={unversionedId:"en/sql-reference/functions/geo/s2",id:"en/sql-reference/functions/geo/s2",title:"Functions for Working with S2 Index",description:"S2 is a geographical indexing system where all geographical data is represented on a three-dimensional sphere (similar to a globe).",source:"@site/docs/en/sql-reference/functions/geo/s2.md",sourceDirName:"en/sql-reference/functions/geo",slug:"/en/sql-reference/functions/geo/s2",permalink:"/docs/en/sql-reference/functions/geo/s2",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/functions/geo/s2.md",tags:[],version:"current",frontMatter:{slug:"/en/sql-reference/functions/geo/s2",sidebar_label:"S2 Geometry"},sidebar:"sqlreference",previous:{title:"H3 Indexes",permalink:"/docs/en/sql-reference/functions/geo/h3"},next:{title:"Nullable",permalink:"/docs/en/sql-reference/functions/functions-for-nulls"}},o={},p=[{value:"geoToS2",id:"geotos2",level:2},{value:"s2ToGeo",id:"s2togeo",level:2},{value:"s2GetNeighbors",id:"s2getneighbors",level:2},{value:"s2CellsIntersect",id:"s2cellsintersect",level:2},{value:"s2CapContains",id:"s2capcontains",level:2},{value:"s2CapUnion",id:"s2capunion",level:2},{value:"s2RectAdd",id:"s2rectadd",level:2},{value:"s2RectContains",id:"s2rectcontains",level:2},{value:"s2RectUnion",id:"s2rectunion",level:2},{value:"s2RectIntersection",id:"s2rectintersection",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,l.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"functions-for-working-with-s2-index"},"Functions for Working with S2 Index"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://s2geometry.io/"},"S2")," is a geographical indexing system where all geographical data is represented on a three-dimensional sphere (similar to a globe)."),(0,l.kt)("p",null,"In the S2 library points are represented as the S2 Index - a specific number which encodes internally a point on the surface of a unit sphere, unlike traditional (latitude, longitude) pairs. To get the S2 point index for a given point specified in the format (latitude, longitude) use the ",(0,l.kt)("a",{parentName:"p",href:"#geotos2"},"geoToS2")," function. Also, you can use the ",(0,l.kt)("a",{parentName:"p",href:"#s2togeo"},"s2ToGeo")," function for getting geographical coordinates corresponding to the specified S2 point index."),(0,l.kt)("h2",{id:"geotos2"},"geoToS2"),(0,l.kt)("p",null,"Returns ",(0,l.kt)("a",{parentName:"p",href:"#s2index"},"S2")," point index corresponding to the provided coordinates ",(0,l.kt)("inlineCode",{parentName:"p"},"(longitude, latitude)"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"geoToS2(lon, lat)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"lon")," \u2014 Longitude. ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/float"},"Float64"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"lat")," \u2014 Latitude. ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/float"},"Float64"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returned values")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"S2 point index.")),(0,l.kt)("p",null,"Type: ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("p",null,"Query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT geoToS2(37.79506683, 55.71290588) AS s2Index;\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500s2Index\u2500\u2510\n\u2502 4704772434919038107 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"s2togeo"},"s2ToGeo"),(0,l.kt)("p",null,"Returns geo coordinates ",(0,l.kt)("inlineCode",{parentName:"p"},"(longitude, latitude)")," corresponding to the provided ",(0,l.kt)("a",{parentName:"p",href:"#s2index"},"S2")," point index."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"s2ToGeo(s2index)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"s2index")," \u2014 S2 Index. ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returned values")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"A tuple consisting of two values: ",(0,l.kt)("inlineCode",{parentName:"li"},"tuple(lon,lat)"),".")),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"lon")," \u2014 ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/float"},"Float64"),". ",(0,l.kt)("inlineCode",{parentName:"p"},"lat")," \u2014 ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/float"},"Float64"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("p",null,"Query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT s2ToGeo(4704772434919038107) AS s2Coodrinates;\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500s2Coodrinates\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 (37.79506681471008,55.7129059052841) \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"s2getneighbors"},"s2GetNeighbors"),(0,l.kt)("p",null,"Returns S2 neighbor indixes corresponding to the provided ",(0,l.kt)("a",{parentName:"p",href:"#s2index"},"S2"),". Each cell in the S2 system is a quadrilateral bounded by four geodesics. So, each cell has 4 neighbors. "),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"s2GetNeighbors(s2index)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"s2index")," \u2014 S2 Index. ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returned values")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"An array consisting of 4 neighbor indexes: ",(0,l.kt)("inlineCode",{parentName:"li"},"array[s2index1, s2index3, s2index2, s2index4]"),".")),(0,l.kt)("p",null,"Type: ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("p",null,"Query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT s2GetNeighbors(5074766849661468672) AS s2Neighbors;\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500s2Neighbors\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 [5074766987100422144,5074766712222515200,5074767536856236032,5074767261978329088] \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"s2cellsintersect"},"s2CellsIntersect"),(0,l.kt)("p",null,"Determines if the two provided ",(0,l.kt)("a",{parentName:"p",href:"#s2index"},"S2")," cells intersect or not."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"s2CellsIntersect(s2index1, s2index2)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"siIndex1"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"s2index2")," \u2014 S2 Index. ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returned values")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"1 \u2014 If the cells intersect."),(0,l.kt)("li",{parentName:"ul"},"0 \u2014 If the cells don't intersect.")),(0,l.kt)("p",null,"Type: ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt8"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("p",null,"Query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT s2CellsIntersect(9926595209846587392, 9926594385212866560) AS intersect;\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500intersect\u2500\u2510\n\u2502         1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"s2capcontains"},"s2CapContains"),(0,l.kt)("p",null,"Determines if a cap contains a S2 point. A cap represents a part of the sphere that has been cut off by a plane. It is defined by a point on a sphere and a radius in degrees."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"s2CapContains(center, degrees, point)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"center")," \u2014 S2 point index corresponding to the cap. ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"degrees")," \u2014 Radius of the cap in degrees. ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/float"},"Float64"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"point")," \u2014 S2 point index. ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returned values")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"1 \u2014 If the cap contains the S2 point index."),(0,l.kt)("li",{parentName:"ul"},"0 \u2014 If the cap doesn't contain the S2 point index.")),(0,l.kt)("p",null,"Type: ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt8"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("p",null,"Query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT s2CapContains(1157339245694594829, 1.0, 1157347770437378819) AS capContains;\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500capContains\u2500\u2510\n\u2502           1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"s2capunion"},"s2CapUnion"),(0,l.kt)("p",null,"Determines the smallest cap that contains the given two input caps. A cap represents a portion of the sphere that has been cut off by a plane. It is defined by a point on a sphere and a radius in degrees."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"s2CapUnion(center1, radius1, center2, radius2)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"center1"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"center2")," \u2014 S2 point indixes corresponding to the two input caps. ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"radius1"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"radius2")," \u2014 Radius of the two input caps in degrees. ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/float"},"Float64"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returned values")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"center")," \u2014 S2 point index corresponding the center of the smallest cap containing the two input caps. Type: ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"radius")," \u2014 Radius of the smallest cap containing the two input caps. Type: ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/float"},"Float64"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("p",null,"Query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT s2CapUnion(3814912406305146967, 1.0, 1157347770437378819, 1.0) AS capUnion;\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500capUnion\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 (4534655147792050737,60.2088283994957) \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"s2rectadd"},"s2RectAdd"),(0,l.kt)("p",null,"Increases the size of the bounding rectangle to include the given S2 point. In the S2 system, a rectangle is represented by a type of S2Region called a ",(0,l.kt)("inlineCode",{parentName:"p"},"S2LatLngRect")," that represents a rectangle in latitude-longitude space."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"s2RectAdd(s2pointLow, s2pointHigh, s2Point)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"s2PointLow")," \u2014 Low S2 point index corresponding to the rectangle. ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"s2PointHigh")," \u2014 High S2 point index corresponding to the rectangle. ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"s2Point")," \u2014 Target S2 point index that the bound rectangle should be grown to include. ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returned values")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"s2PointLow")," \u2014 Low S2 cell id corresponding to the grown rectangle. Type: ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"s2PointHigh")," \u2014 Hight S2 cell id corresponding to the grown rectangle. Type: ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/float"},"UInt64"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("p",null,"Query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT s2RectAdd(5178914411069187297, 5177056748191934217, 5179056748191934217) AS rectAdd;\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500rectAdd\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 (5179062030687166815,5177056748191934217) \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"s2rectcontains"},"s2RectContains"),(0,l.kt)("p",null,"Determines if a given rectangle contains a S2 point. In the S2 system, a rectangle is represented by a type of S2Region called a ",(0,l.kt)("inlineCode",{parentName:"p"},"S2LatLngRect")," that represents a rectangle in latitude-longitude space."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"s2RectContains(s2PointLow, s2PointHi, s2Point)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"s2PointLow")," \u2014 Low S2 point index corresponding to the rectangle. ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"s2PointHigh")," \u2014 High S2 point index corresponding to the rectangle. ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"s2Point")," \u2014 Target S2 point index. ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returned values")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"1 \u2014 If the rectangle contains the given S2 point."),(0,l.kt)("li",{parentName:"ul"},"0 \u2014 If the rectangle doesn't contain the given S2 point.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("p",null,"Query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT s2RectContains(5179062030687166815, 5177056748191934217, 5177914411069187297) AS rectContains;\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500rectContains\u2500\u2510\n\u2502            0 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"s2rectunion"},"s2RectUnion"),(0,l.kt)("p",null,"Returns the smallest rectangle containing the union of this rectangle and the given rectangle. In the S2 system, a rectangle is represented by a type of S2Region called a ",(0,l.kt)("inlineCode",{parentName:"p"},"S2LatLngRect")," that represents a rectangle in latitude-longitude space."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"s2RectUnion(s2Rect1PointLow, s2Rect1PointHi, s2Rect2PointLow, s2Rect2PointHi)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"s2Rect1PointLow"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"s2Rect1PointHi")," \u2014 Low and High S2 point indexes corresponding to the first rectangle. ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"s2Rect2PointLow"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"s2Rect2PointHi")," \u2014 Low and High S2 point indexes corresponding to the second rectangle. ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returned values")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"s2UnionRect2PointLow")," \u2014 Low S2 cell id corresponding to the union rectangle. Type: ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"s2UnionRect2PointHi")," \u2014 High S2 cell id corresponding to the union rectangle. Type: ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("p",null,"Query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT s2RectUnion(5178914411069187297, 5177056748191934217, 5179062030687166815, 5177056748191934217) AS rectUnion;\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500rectUnion\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 (5179062030687166815,5177056748191934217) \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"s2rectintersection"},"s2RectIntersection"),(0,l.kt)("p",null,"Returns the smallest rectangle containing the intersection of this rectangle and the given rectangle. In the S2 system, a rectangle is represented by a type of S2Region called a ",(0,l.kt)("inlineCode",{parentName:"p"},"S2LatLngRect")," that represents a rectangle in latitude-longitude space."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"s2RectIntersection(s2Rect1PointLow, s2Rect1PointHi, s2Rect2PointLow, s2Rect2PointHi)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"s2Rect1PointLow"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"s2Rect1PointHi")," \u2014 Low and High S2 point indexes corresponding to the first rectangle. ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"s2Rect2PointLow"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"s2Rect2PointHi")," \u2014 Low and High S2 point indexes corresponding to the second rectangle. ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returned values")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"s2UnionRect2PointLow")," \u2014 Low S2 cell id corresponding to the rectangle containing the intersection of the given rectangles. Type: ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"s2UnionRect2PointHi")," \u2014 High S2 cell id corresponding to the rectangle containing the intersection of the given rectangles. Type: ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("p",null,"Query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT s2RectIntersection(5178914411069187297, 5177056748191934217, 5179062030687166815, 5177056748191934217) AS rectIntersection;\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500rectIntersection\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 (5178914411069187297,5177056748191934217) \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}d.isMDXComponent=!0}}]);