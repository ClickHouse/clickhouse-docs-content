"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[27170],{3905:function(e,t,n){n.d(t,{Zo:function(){return o},kt:function(){return k}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),u=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},o=function(e){var t=u(e.components);return r.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),p=u(n),k=a,m=p["".concat(d,".").concat(k)]||p[k]||s[k]||i;return n?r.createElement(m,l(l({ref:t},o),{},{components:n})):r.createElement(m,l({ref:t},o))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=p;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},39210:function(e,t,n){n.r(t),n.d(t,{assets:function(){return o},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return s}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],c={slug:"/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-structure",machine_translated:!0,machine_translated_rev:"72537a2d527c63c07aa5d2361a8829f3895cf2bd",sidebar_position:44,sidebar_label:"\u5b57\u5178\u952e\u548c\u5b57\u6bb5"},d="\u5b57\u5178\u952e\u548c\u5b57\u6bb5",u={unversionedId:"zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-structure",id:"zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-structure",title:"\u5b57\u5178\u952e\u548c\u5b57\u6bb5",description:"dictionary-key-and-fields}",source:"@site/docs/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-structure.md",sourceDirName:"zh/sql-reference/dictionaries/external-dictionaries",slug:"/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-structure",permalink:"/docs/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-structure",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-structure.md",tags:[],version:"current",sidebarPosition:44,frontMatter:{slug:"/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-structure",machine_translated:!0,machine_translated_rev:"72537a2d527c63c07aa5d2361a8829f3895cf2bd",sidebar_position:44,sidebar_label:"\u5b57\u5178\u952e\u548c\u5b57\u6bb5"},sidebar:"chinese",previous:{title:"\u5916\u90e8\u5b57\u5178\u7684\u6765\u6e90",permalink:"/docs/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-sources"},next:{title:"\u5206\u5c42\u5b57\u5178",permalink:"/docs/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-hierarchical"}},o={},s=[{value:"\u952e",id:"ext_dict_structure-key",level:2},{value:"\u6570\u5b57\u952e",id:"ext_dict-numeric-key",level:3},{value:"\u590d\u5408\u5bc6\u94a5",id:"composite-key",level:3},{value:"\u5c5e\u6027",id:"ext_dict_structure-attributes",level:2},{value:"\u53e6\u8bf7\u53c2\u9605",id:"see-also",level:2}],p={toc:s};function k(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"dictionary-key-and-fields"},"\u5b57\u5178\u952e\u548c\u5b57\u6bb5"),(0,i.kt)("p",null,"\u8be5 ",(0,i.kt)("inlineCode",{parentName:"p"},"<structure>")," \u5b50\u53e5\u63cf\u8ff0\u53ef\u7528\u4e8e\u67e5\u8be2\u7684\u5b57\u5178\u952e\u548c\u5b57\u6bb5\u3002"),(0,i.kt)("p",null,"XML\u63cf\u8ff0:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<dictionary>\n    <structure>\n        <id>\n            <name>Id</name>\n        </id>\n\n        <attribute>\n            \x3c!-- Attribute parameters --\x3e\n        </attribute>\n\n        ...\n\n    </structure>\n</dictionary>\n")),(0,i.kt)("p",null,"\u5c5e\u6027\u5728\u5143\u7d20\u4e2d\u63cf\u8ff0:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<id>")," \u2014 ",(0,i.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-structure#ext_dict_structure-key"},"\u952e\u5217"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<attribute>")," \u2014 ",(0,i.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-structure#ext_dict_structure-attributes"},"\u6570\u636e\u5217"),". \u53ef\u4ee5\u6709\u591a\u4e2a\u5c5e\u6027\u3002")),(0,i.kt)("p",null,"DDL\u67e5\u8be2:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DICTIONARY dict_name (\n    Id UInt64,\n    -- attributes\n)\nPRIMARY KEY Id\n...\n")),(0,i.kt)("p",null,"\u67e5\u8be2\u6b63\u6587\u4e2d\u63cf\u8ff0\u4e86\u5c5e\u6027:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PRIMARY KEY")," \u2014 ",(0,i.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-structure#ext_dict_structure-key"},"\u952e\u5217")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"AttrName AttrType")," \u2014 ",(0,i.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-structure#ext_dict_structure-attributes"},"\u6570\u636e\u5217"),". \u53ef\u4ee5\u6709\u591a\u4e2a\u5c5e\u6027\u3002")),(0,i.kt)("h2",{id:"ext_dict_structure-key"},"\u952e"),(0,i.kt)("p",null,"ClickHouse\u652f\u6301\u4ee5\u4e0b\u7c7b\u578b\u7684\u952e:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6570\u5b57\u952e\u3002 ",(0,i.kt)("inlineCode",{parentName:"li"},"UInt64"),". \u5728\u5b9a\u4e49 ",(0,i.kt)("inlineCode",{parentName:"li"},"<id>")," \u6807\u8bb0\u6216\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"PRIMARY KEY")," \u5173\u952e\u5b57\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u590d\u5408\u5bc6\u94a5\u3002 \u7ec4\u4e0d\u540c\u7c7b\u578b\u7684\u503c\u3002 \u5728\u6807\u7b7e\u4e2d\u5b9a\u4e49 ",(0,i.kt)("inlineCode",{parentName:"li"},"<key>")," \u6216 ",(0,i.kt)("inlineCode",{parentName:"li"},"PRIMARY KEY")," \u5173\u952e\u5b57\u3002")),(0,i.kt)("p",null,"Xml\u7ed3\u6784\u53ef\u4ee5\u5305\u542b ",(0,i.kt)("inlineCode",{parentName:"p"},"<id>")," \u6216 ",(0,i.kt)("inlineCode",{parentName:"p"},"<key>"),". DDL-\u67e5\u8be2\u5fc5\u987b\u5305\u542b\u5355\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"PRIMARY KEY"),"."),(0,i.kt)("p",null,'!!! warning "\u8b66\u544a"\n\u4e0d\u80fd\u5c06\u952e\u63cf\u8ff0\u4e3a\u5c5e\u6027\u3002'),(0,i.kt)("h3",{id:"ext_dict-numeric-key"},"\u6570\u5b57\u952e"),(0,i.kt)("p",null,"\u7c7b\u578b: ",(0,i.kt)("inlineCode",{parentName:"p"},"UInt64"),"."),(0,i.kt)("p",null,"\u914d\u7f6e\u793a\u4f8b:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<id>\n    <name>Id</name>\n</id>\n")),(0,i.kt)("p",null,"\u914d\u7f6e\u5b57\u6bb5:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name")," \u2013 The name of the column with keys.")),(0,i.kt)("p",null,"\u5bf9\u4e8eDDL-\u67e5\u8be2:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DICTIONARY (\n    Id UInt64,\n    ...\n)\nPRIMARY KEY Id\n...\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PRIMARY KEY")," \u2013 The name of the column with keys.")),(0,i.kt)("h3",{id:"composite-key"},"\u590d\u5408\u5bc6\u94a5"),(0,i.kt)("p",null,"\u5173\u952e\u53ef\u4ee5\u662f\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"tuple")," \u4ece\u4efb\u4f55\u7c7b\u578b\u7684\u5b57\u6bb5\u3002 \u8be5 ",(0,i.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-layout"},"\u5e03\u5c40")," \u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u5fc5\u987b\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"complex_key_hashed")," \u6216 ",(0,i.kt)("inlineCode",{parentName:"p"},"complex_key_cache"),"."),(0,i.kt)("p",null,'!!! tip "\u63d0\u793a"\n\u590d\u5408\u952e\u53ef\u4ee5\u7531\u5355\u4e2a\u5143\u7d20\u7ec4\u6210\u3002 \u4f8b\u5982\uff0c\u8fd9\u4f7f\u5f97\u53ef\u4ee5\u4f7f\u7528\u5b57\u7b26\u4e32\u4f5c\u4e3a\u952e\u3002'),(0,i.kt)("p",null,"\u952e\u7ed3\u6784\u5728\u5143\u7d20\u4e2d\u8bbe\u7f6e ",(0,i.kt)("inlineCode",{parentName:"p"},"<key>"),". \u952e\u5b57\u6bb5\u7684\u683c\u5f0f\u4e0e\u5b57\u5178\u7684\u683c\u5f0f\u76f8\u540c ",(0,i.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-structure"},"\u5c5e\u6027"),". \u793a\u4f8b:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<structure>\n    <key>\n        <attribute>\n            <name>field1</name>\n            <type>String</type>\n        </attribute>\n        <attribute>\n            <name>field2</name>\n            <type>UInt32</type>\n        </attribute>\n        ...\n    </key>\n...\n")),(0,i.kt)("p",null,"\u6216"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DICTIONARY (\n    field1 String,\n    field2 String\n    ...\n)\nPRIMARY KEY field1, field2\n...\n")),(0,i.kt)("p",null,"\u5bf9\u4e8e\u67e5\u8be2 ",(0,i.kt)("inlineCode",{parentName:"p"},"dictGet*")," \u51fd\u6570\u4e2d\uff0c\u4e00\u4e2a\u5143\u7ec4\u4f5c\u4e3a\u952e\u4f20\u9012\u3002 \u793a\u4f8b: ",(0,i.kt)("inlineCode",{parentName:"p"},"dictGetString('dict_name', 'attr_name', tuple('string for field1', num_for_field2))"),"."),(0,i.kt)("h2",{id:"ext_dict_structure-attributes"},"\u5c5e\u6027"),(0,i.kt)("p",null,"\u914d\u7f6e\u793a\u4f8b:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<structure>\n    ...\n    <attribute>\n        <name>Name</name>\n        <type>ClickHouseDataType</type>\n        <null_value></null_value>\n        <expression>rand64()</expression>\n        <hierarchical>true</hierarchical>\n        <injective>true</injective>\n        <is_object_id>true</is_object_id>\n    </attribute>\n</structure>\n")),(0,i.kt)("p",null,"\u6216"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DICTIONARY somename (\n    Name ClickHouseDataType DEFAULT '' EXPRESSION rand64() HIERARCHICAL INJECTIVE IS_OBJECT_ID\n)\n")),(0,i.kt)("p",null,"\u914d\u7f6e\u5b57\u6bb5:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u6807\u7b7e"),(0,i.kt)("th",{parentName:"tr",align:null},"\u4ea7\u54c1\u63cf\u8ff0"),(0,i.kt)("th",{parentName:"tr",align:null},"\u5fc5\u586b\u9879"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"name")),(0,i.kt)("td",{parentName:"tr",align:null},"\u5217\u540d\u79f0\u3002"),(0,i.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"type")),(0,i.kt)("td",{parentName:"tr",align:null},"ClickHouse\u6570\u636e\u7c7b\u578b\u3002",(0,i.kt)("br",null),"ClickHouse\u5c1d\u8bd5\u5c06\u5b57\u5178\u4e2d\u7684\u503c\u8f6c\u6362\u4e3a\u6307\u5b9a\u7684\u6570\u636e\u7c7b\u578b\u3002 \u4f8b\u5982\uff0c\u5bf9\u4e8eMySQL\uff0c\u8be5\u5b57\u6bb5\u53ef\u80fd\u662f ",(0,i.kt)("inlineCode",{parentName:"td"},"TEXT"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"VARCHAR"),"\uff0c\u6216 ",(0,i.kt)("inlineCode",{parentName:"td"},"BLOB")," \u5728MySQL\u6e90\u8868\u4e2d\uff0c\u4f46\u5b83\u53ef\u4ee5\u4e0a\u4f20\u4e3a ",(0,i.kt)("inlineCode",{parentName:"td"},"String")," \u5728\u514b\u91cc\u514b\u8c6a\u65af",(0,i.kt)("br",null),(0,i.kt)("a",{parentName:"td",href:"/docs/zh/sql-reference/data-types/nullable"},"\u53ef\u4e3a\u7a7a")," \u4e0d\u652f\u6301\u3002"),(0,i.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"null_value")),(0,i.kt)("td",{parentName:"tr",align:null},"\u975e\u73b0\u6709\u5143\u7d20\u7684\u9ed8\u8ba4\u503c\u3002",(0,i.kt)("br",null),"\u5728\u793a\u4f8b\u4e2d\uff0c\u5b83\u662f\u4e00\u4e2a\u7a7a\u5b57\u7b26\u4e32\u3002 \u4f60\u4e0d\u80fd\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"td"},"NULL")," \u5728\u8fd9\u4e2a\u9886\u57df\u3002"),(0,i.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"expression")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/zh/sql-reference/syntax#syntax-expressions"},"\u8868\u8fbe\u5f0f")," ClickHouse\u5bf9\u8be5\u503c\u6267\u884c\u3002",(0,i.kt)("br",null),"\u8868\u8fbe\u5f0f\u53ef\u4ee5\u662f\u8fdc\u7a0bSQL\u6570\u636e\u5e93\u4e2d\u7684\u5217\u540d\u3002 \u56e0\u6b64\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u5b83\u4e3a\u8fdc\u7a0b\u5217\u521b\u5efa\u522b\u540d\u3002",(0,i.kt)("br",null),(0,i.kt)("br",null),"\u9ed8\u8ba4\u503c\uff1a\u65e0\u8868\u8fbe\u5f0f\u3002"),(0,i.kt)("td",{parentName:"tr",align:null},"\u975e\u4e5f\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{name:"hierarchical-dict-attr"})," ",(0,i.kt)("inlineCode",{parentName:"td"},"hierarchical")),(0,i.kt)("td",{parentName:"tr",align:null},"\u5982\u679c ",(0,i.kt)("inlineCode",{parentName:"td"},"true"),"\uff0c\u8be5\u5c5e\u6027\u5305\u542b\u5f53\u524d\u952e\u7684\u7236\u952e\u503c\u3002 \u770b ",(0,i.kt)("a",{parentName:"td",href:"/docs/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-hierarchical"},"\u5206\u5c42\u5b57\u5178"),".",(0,i.kt)("br",null),(0,i.kt)("br",null),"\u9ed8\u8ba4\u503c: ",(0,i.kt)("inlineCode",{parentName:"td"},"false"),"."),(0,i.kt)("td",{parentName:"tr",align:null},"\u975e\u4e5f\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"injective")),(0,i.kt)("td",{parentName:"tr",align:null},"\u6807\u5fd7\uff0c\u663e\u793a\u662f\u5426 ",(0,i.kt)("inlineCode",{parentName:"td"},"id -> attribute")," \u56fe\u50cf\u662f ",(0,i.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/Injective_function"},"\u6ce8\u5c04"),".",(0,i.kt)("br",null),"\u5982\u679c ",(0,i.kt)("inlineCode",{parentName:"td"},"true"),"\uff0cClickHouse\u53ef\u4ee5\u81ea\u52a8\u653e\u7f6e\u540e ",(0,i.kt)("inlineCode",{parentName:"td"},"GROUP BY")," \u5b50\u53e5\u6ce8\u5165\u5b57\u5178\u7684\u8bf7\u6c42\u3002 \u901a\u5e38\u5b83\u663e\u7740\u51cf\u5c11\u4e86\u8fd9\u79cd\u8bf7\u6c42\u7684\u6570\u91cf\u3002",(0,i.kt)("br",null),(0,i.kt)("br",null),"\u9ed8\u8ba4\u503c: ",(0,i.kt)("inlineCode",{parentName:"td"},"false"),"."),(0,i.kt)("td",{parentName:"tr",align:null},"\u975e\u4e5f\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"is_object_id")),(0,i.kt)("td",{parentName:"tr",align:null},"\u663e\u793a\u662f\u5426\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u5bf9MongoDB\u6587\u6863\u6267\u884c\u67e5\u8be2\u7684\u6807\u5fd7 ",(0,i.kt)("inlineCode",{parentName:"td"},"ObjectID"),".",(0,i.kt)("br",null),(0,i.kt)("br",null),"\u9ed8\u8ba4\u503c: ",(0,i.kt)("inlineCode",{parentName:"td"},"false"),"."),(0,i.kt)("td",{parentName:"tr",align:null},"\u975e\u4e5f\u3002")))),(0,i.kt)("h2",{id:"see-also"},"\u53e6\u8bf7\u53c2\u9605"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/functions/ext-dict-functions"},"\u4f7f\u7528\u5916\u90e8\u5b57\u5178\u7684\u51fd\u6570"),".")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/query_language/dicts/external_dicts_dict_structure/"},"\u539f\u59cb\u6587\u7ae0")," "))}k.isMDXComponent=!0}}]);