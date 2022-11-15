"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[65607],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return p}});var i=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=i.createContext({}),c=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return i.createElement(l.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(t),p=o,h=d["".concat(l,".").concat(p)]||d[p]||g[p]||r;return t?i.createElement(h,a(a({ref:n},u),{},{components:t})):i.createElement(h,a({ref:n},u))}));function p(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,a=new Array(r);a[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<r;c++)a[c]=t[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},66926:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return g}});var i=t(87462),o=t(63366),r=(t(67294),t(3905)),a=["components"],s={slug:"/en/sql-reference/functions/ym-dict-functions",sidebar_position:59,sidebar_label:"Embedded Dictionaries"},l="Functions for Working with Embedded Dictionaries",c={unversionedId:"en/sql-reference/functions/ym-dict-functions",id:"en/sql-reference/functions/ym-dict-functions",title:"Functions for Working with Embedded Dictionaries",description:"In order for the functions below to work, the server config must specify the paths and addresses for getting all the embedded dictionaries. The dictionaries are loaded at the first call of any of these functions. If the reference lists can\u2019t be loaded, an exception is thrown.",source:"@site/docs/en/sql-reference/functions/ym-dict-functions.md",sourceDirName:"en/sql-reference/functions",slug:"/en/sql-reference/functions/ym-dict-functions",permalink:"/docs/en/sql-reference/functions/ym-dict-functions",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/functions/ym-dict-functions.md",tags:[],version:"current",sidebarPosition:59,frontMatter:{slug:"/en/sql-reference/functions/ym-dict-functions",sidebar_position:59,sidebar_label:"Embedded Dictionaries"},sidebar:"english",previous:{title:"Dictionaries",permalink:"/docs/en/sql-reference/functions/ext-dict-functions"},next:{title:"IN Operator",permalink:"/docs/en/sql-reference/functions/in-functions"}},u={},g=[{value:"Multiple Geobases",id:"multiple-geobases",level:2},{value:"regionToCity(id[, geobase])",id:"regiontocityid-geobase",level:3},{value:"regionToArea(id[, geobase])",id:"regiontoareaid-geobase",level:3},{value:"regionToDistrict(id[, geobase])",id:"regiontodistrictid-geobase",level:3},{value:"regionToCountry(id[, geobase])",id:"regiontocountryid-geobase",level:3},{value:"regionToContinent(id[, geobase])",id:"regiontocontinentid-geobase",level:3},{value:"regionToTopContinent(id[, geobase])",id:"regiontotopcontinentid-geobase",level:3},{value:"regionToPopulation(id[, geobase])",id:"regiontopopulationid-geobase",level:3},{value:"regionIn(lhs, rhs[, geobase])",id:"regioninlhs-rhs-geobase",level:3},{value:"regionHierarchy(id[, geobase])",id:"regionhierarchyid-geobase",level:3},{value:"regionToName(id[, lang])",id:"regiontonameid-lang",level:3}],d={toc:g};function p(e){var n=e.components,t=(0,o.Z)(e,a);return(0,r.kt)("wrapper",(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"functions-for-working-with-embedded-dictionaries"},"Functions for Working with Embedded Dictionaries"),(0,r.kt)("p",null,"In order for the functions below to work, the server config must specify the paths and addresses for getting all the embedded dictionaries. The dictionaries are loaded at the first call of any of these functions. If the reference lists can\u2019t be loaded, an exception is thrown."),(0,r.kt)("p",null,"For information about creating reference lists, see the section \u201cDictionaries\u201d."),(0,r.kt)("h2",{id:"multiple-geobases"},"Multiple Geobases"),(0,r.kt)("p",null,"ClickHouse supports working with multiple alternative geobases (regional hierarchies) simultaneously, in order to support various perspectives on which countries certain regions belong to."),(0,r.kt)("p",null,"The \u2018clickhouse-server\u2019 config specifies the file with the regional hierarchy::",(0,r.kt)("inlineCode",{parentName:"p"},"<path_to_regions_hierarchy_file>/opt/geo/regions_hierarchy.txt</path_to_regions_hierarchy_file>")),(0,r.kt)("p",null,"Besides this file, it also searches for files nearby that have the _ symbol and any suffix appended to the name (before the file extension).\nFor example, it will also find the file ",(0,r.kt)("inlineCode",{parentName:"p"},"/opt/geo/regions_hierarchy_ua.txt"),", if present."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ua")," is called the dictionary key. For a dictionary without a suffix, the key is an empty string."),(0,r.kt)("p",null,"All the dictionaries are re-loaded in runtime (once every certain number of seconds, as defined in the builtin_dictionaries_reload_interval config parameter, or once an hour by default). However, the list of available dictionaries is defined one time, when the server starts."),(0,r.kt)("p",null,"All functions for working with regions have an optional argument at the end \u2013 the dictionary key. It is referred to as the geobase.\nExample:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"regionToCountry(RegionID) \u2013 Uses the default dictionary: /opt/geo/regions_hierarchy.txt\nregionToCountry(RegionID, '') \u2013 Uses the default dictionary: /opt/geo/regions_hierarchy.txt\nregionToCountry(RegionID, 'ua') \u2013 Uses the dictionary for the 'ua' key: /opt/geo/regions_hierarchy_ua.txt\n")),(0,r.kt)("h3",{id:"regiontocityid-geobase"},"regionToCity(id","[",", geobase","]",")"),(0,r.kt)("p",null,"Accepts a UInt32 number \u2013 the region ID from the geobase. If this region is a city or part of a city, it returns the region ID for the appropriate city. Otherwise, returns 0."),(0,r.kt)("h3",{id:"regiontoareaid-geobase"},"regionToArea(id","[",", geobase","]",")"),(0,r.kt)("p",null,"Converts a region to an area (type 5 in the geobase). In every other way, this function is the same as \u2018regionToCity\u2019."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT DISTINCT regionToName(regionToArea(toUInt32(number), 'ua'))\nFROM system.numbers\nLIMIT 15\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500regionToName(regionToArea(toUInt32(number), \\'ua\\'))\u2500\u2510\n\u2502                                                      \u2502\n\u2502 Moscow and Moscow region                             \u2502\n\u2502 St. Petersburg and Leningrad region                  \u2502\n\u2502 Belgorod region                                      \u2502\n\u2502 Ivanovsk region                                      \u2502\n\u2502 Kaluga region                                        \u2502\n\u2502 Kostroma region                                      \u2502\n\u2502 Kursk region                                         \u2502\n\u2502 Lipetsk region                                       \u2502\n\u2502 Orlov region                                         \u2502\n\u2502 Ryazan region                                        \u2502\n\u2502 Smolensk region                                      \u2502\n\u2502 Tambov region                                        \u2502\n\u2502 Tver region                                          \u2502\n\u2502 Tula region                                          \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h3",{id:"regiontodistrictid-geobase"},"regionToDistrict(id","[",", geobase","]",")"),(0,r.kt)("p",null,"Converts a region to a federal district (type 4 in the geobase). In every other way, this function is the same as \u2018regionToCity\u2019."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT DISTINCT regionToName(regionToDistrict(toUInt32(number), 'ua'))\nFROM system.numbers\nLIMIT 15\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500regionToName(regionToDistrict(toUInt32(number), \\'ua\\'))\u2500\u2510\n\u2502                                                          \u2502\n\u2502 Central federal district                                 \u2502\n\u2502 Northwest federal district                               \u2502\n\u2502 South federal district                                   \u2502\n\u2502 North Caucases federal district                          \u2502\n\u2502 Privolga federal district                                \u2502\n\u2502 Ural federal district                                    \u2502\n\u2502 Siberian federal district                                \u2502\n\u2502 Far East federal district                                \u2502\n\u2502 Scotland                                                 \u2502\n\u2502 Faroe Islands                                            \u2502\n\u2502 Flemish region                                           \u2502\n\u2502 Brussels capital region                                  \u2502\n\u2502 Wallonia                                                 \u2502\n\u2502 Federation of Bosnia and Herzegovina                     \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h3",{id:"regiontocountryid-geobase"},"regionToCountry(id","[",", geobase","]",")"),(0,r.kt)("p",null,"Converts a region to a country. In every other way, this function is the same as \u2018regionToCity\u2019.\nExample: ",(0,r.kt)("inlineCode",{parentName:"p"},"regionToCountry(toUInt32(213)) = 225")," converts Moscow (213) to Russia (225)."),(0,r.kt)("h3",{id:"regiontocontinentid-geobase"},"regionToContinent(id","[",", geobase","]",")"),(0,r.kt)("p",null,"Converts a region to a continent. In every other way, this function is the same as \u2018regionToCity\u2019.\nExample: ",(0,r.kt)("inlineCode",{parentName:"p"},"regionToContinent(toUInt32(213)) = 10001")," converts Moscow (213) to Eurasia (10001)."),(0,r.kt)("h3",{id:"regiontotopcontinentid-geobase"},"regionToTopContinent(id","[",", geobase","]",")"),(0,r.kt)("p",null,"Finds the highest continent in the hierarchy for the region."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Syntax")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"regionToTopContinent(id[, geobase])\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"id")," \u2014 Region ID from the geobase. ",(0,r.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt32"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"geobase")," \u2014 Dictionary key. See ",(0,r.kt)("a",{parentName:"li",href:"#multiple-geobases"},"Multiple Geobases"),". ",(0,r.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/string"},"String"),". Optional.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returned value")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Identifier of the top level continent (the latter when you climb the hierarchy of regions)."),(0,r.kt)("li",{parentName:"ul"},"0, if there is none.")),(0,r.kt)("p",null,"Type: ",(0,r.kt)("inlineCode",{parentName:"p"},"UInt32"),"."),(0,r.kt)("h3",{id:"regiontopopulationid-geobase"},"regionToPopulation(id","[",", geobase","]",")"),(0,r.kt)("p",null,"Gets the population for a region.\nThe population can be recorded in files with the geobase. See the section \u201cDictionaries\u201d.\nIf the population is not recorded for the region, it returns 0.\nIn the geobase, the population might be recorded for child regions, but not for parent regions."),(0,r.kt)("h3",{id:"regioninlhs-rhs-geobase"},"regionIn(lhs, rhs","[",", geobase","]",")"),(0,r.kt)("p",null,"Checks whether a \u2018lhs\u2019 region belongs to a \u2018rhs\u2019 region. Returns a UInt8 number equal to 1 if it belongs, or 0 if it does not belong.\nThe relationship is reflexive \u2013 any region also belongs to itself."),(0,r.kt)("h3",{id:"regionhierarchyid-geobase"},"regionHierarchy(id","[",", geobase","]",")"),(0,r.kt)("p",null,"Accepts a UInt32 number \u2013 the region ID from the geobase. Returns an array of region IDs consisting of the passed region and all parents along the chain.\nExample: ",(0,r.kt)("inlineCode",{parentName:"p"},"regionHierarchy(toUInt32(213)) = [213,1,3,225,10001,10000]"),"."),(0,r.kt)("h3",{id:"regiontonameid-lang"},"regionToName(id","[",", lang","]",")"),(0,r.kt)("p",null,"Accepts a UInt32 number \u2013 the region ID from the geobase. A string with the name of the language can be passed as a second argument. Supported languages are: ru, en, ua, uk, by, kz, tr. If the second argument is omitted, the language \u2018ru\u2019 is used. If the language is not supported, an exception is thrown. Returns a string \u2013 the name of the region in the corresponding language. If the region with the specified ID does not exist, an empty string is returned."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ua")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"uk")," both mean Ukrainian."))}p.isMDXComponent=!0}}]);