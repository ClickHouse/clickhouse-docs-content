"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[24738],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>y});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),s=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(c.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(t),m=r,y=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return t?a.createElement(y,l(l({ref:n},p),{},{components:t})):a.createElement(y,l({ref:n},p))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},35402:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=t(87462),r=(t(67294),t(3905));const i={slug:"/en/engines/table-engines/special/dictionary",sidebar_position:20,sidebar_label:"Dictionary"},l="Dictionary Table Engine",o={unversionedId:"en/engines/table-engines/special/dictionary",id:"en/engines/table-engines/special/dictionary",title:"Dictionary Table Engine",description:"The Dictionary engine displays the dictionary data as a ClickHouse table.",source:"@site/docs/en/engines/table-engines/special/dictionary.md",sourceDirName:"en/engines/table-engines/special",slug:"/en/engines/table-engines/special/dictionary",permalink:"/docs/en/engines/table-engines/special/dictionary",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/engines/table-engines/special/dictionary.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{slug:"/en/engines/table-engines/special/dictionary",sidebar_position:20,sidebar_label:"Dictionary"},sidebar:"sqlreference",previous:{title:"Distributed",permalink:"/docs/en/engines/table-engines/special/distributed"},next:{title:"Merge",permalink:"/docs/en/engines/table-engines/special/merge"}},c={},s=[{value:"Example",id:"example",level:2}],p={toc:s},u="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"dictionary-table-engine"},"Dictionary Table Engine"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Dictionary")," engine displays the ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/dictionaries"},"dictionary")," data as a ClickHouse table."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"As an example, consider a dictionary of ",(0,r.kt)("inlineCode",{parentName:"p"},"products")," with the following configuration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dictionaries>\n    <dictionary>\n        <name>products</name>\n        <source>\n            <odbc>\n                <table>products</table>\n                <connection_string>DSN=some-db-server</connection_string>\n            </odbc>\n        </source>\n        <lifetime>\n            <min>300</min>\n            <max>360</max>\n        </lifetime>\n        <layout>\n            <flat/>\n        </layout>\n        <structure>\n            <id>\n                <name>product_id</name>\n            </id>\n            <attribute>\n                <name>title</name>\n                <type>String</type>\n                <null_value></null_value>\n            </attribute>\n        </structure>\n    </dictionary>\n</dictionaries>\n")),(0,r.kt)("p",null,"Query the dictionary data:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    name,\n    type,\n    key,\n    attribute.names,\n    attribute.types,\n    bytes_allocated,\n    element_count,\n    source\nFROM system.dictionaries\nWHERE name = 'products'\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500name\u2500\u2500\u2500\u2500\u2500\u252c\u2500type\u2500\u252c\u2500key\u2500\u2500\u2500\u2500\u252c\u2500attribute.names\u2500\u252c\u2500attribute.types\u2500\u252c\u2500bytes_allocated\u2500\u252c\u2500element_count\u2500\u252c\u2500source\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 products \u2502 Flat \u2502 UInt64 \u2502 ['title']       \u2502 ['String']      \u2502        23065376 \u2502        175032 \u2502 ODBC: .products \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/functions/ext-dict-functions#ext_dict_functions"},"dictGet","*")," function to get the dictionary data in this format."),(0,r.kt)("p",null,"This view isn\u2019t helpful when you need to get raw data, or when performing a ",(0,r.kt)("inlineCode",{parentName:"p"},"JOIN")," operation. For these cases, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"Dictionary")," engine, which displays the dictionary data in a table."),(0,r.kt)("p",null,"Syntax:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE %table_name% (%fields%) engine = Dictionary(%dictionary_name%)`\n")),(0,r.kt)("p",null,"Usage example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"create table products (product_id UInt64, title String) Engine = Dictionary(products);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  Ok\n")),(0,r.kt)("p",null,"Take a look at what\u2019s in the table."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select * from products limit 1;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500product_id\u2500\u252c\u2500title\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502        152689 \u2502 Some item       \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"See Also")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/table-functions/dictionary#dictionary-function"},"Dictionary function"))))}d.isMDXComponent=!0}}]);