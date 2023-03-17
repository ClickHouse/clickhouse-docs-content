"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[5213],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>b});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),d=o,b=u["".concat(i,".").concat(d)]||u[d]||m[d]||a;return t?r.createElement(b,l(l({ref:n},p),{},{components:t})):r.createElement(b,l({ref:n},p))}));function b(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=d;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[u]="string"==typeof e?e:o,l[1]=s;for(var c=2;c<a;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},27478:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=t(87462),o=(t(67294),t(3905));const a={slug:"/en/sql-reference/table-functions/mongodb",sidebar_position:42,sidebar_label:"mongodb"},l="mongodb",s={unversionedId:"en/sql-reference/table-functions/mongodb",id:"en/sql-reference/table-functions/mongodb",title:"mongodb",description:"Allows SELECT queries to be performed on data that is stored on a remote MongoDB server.",source:"@site/docs/en/sql-reference/table-functions/mongodb.md",sourceDirName:"en/sql-reference/table-functions",slug:"/en/sql-reference/table-functions/mongodb",permalink:"/docs/en/sql-reference/table-functions/mongodb",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/table-functions/mongodb.md",tags:[],version:"current",sidebarPosition:42,frontMatter:{slug:"/en/sql-reference/table-functions/mongodb",sidebar_position:42,sidebar_label:"mongodb"},sidebar:"sqlreference",previous:{title:"url",permalink:"/docs/en/sql-reference/table-functions/url"},next:{title:"mysql",permalink:"/docs/en/sql-reference/table-functions/mysql"}},i={},c=[],p={toc:c},u="wrapper";function m(e){let{components:n,...t}=e;return(0,o.kt)(u,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mongodb"},"mongodb"),(0,o.kt)("p",null,"Allows ",(0,o.kt)("inlineCode",{parentName:"p"},"SELECT")," queries to be performed on data that is stored on a remote MongoDB server."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Syntax")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"mongodb(host:port, database, collection, user, password, structure [, options])\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"host:port")," \u2014 MongoDB server address.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"database")," \u2014 Remote database name.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"collection")," \u2014 Remote collection name.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"user")," \u2014 MongoDB user.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"password")," \u2014 User password.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"structure")," - The schema for the ClickHouse table returned from this function.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"options")," - MongoDB connection string options (optional parameter)."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returned Value")),(0,o.kt)("p",null,"A table object with the same columns as the original MongoDB table."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Examples")),(0,o.kt)("p",null,"Suppose we have a collection named ",(0,o.kt)("inlineCode",{parentName:"p"},"my_collection")," defined in a MongoDB database named ",(0,o.kt)("inlineCode",{parentName:"p"},"test"),", and we insert a couple of documents:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},'db.createUser({user:"test_user",pwd:"password",roles:[{role:"readWrite",db:"test"}]})\n\ndb.createCollection("my_collection")\n\ndb.my_collection.insertOne(\n    { log_type: "event", host: "120.5.33.9", command: "check-cpu-usage -w 75 -c 90" }\n)\n\ndb.my_collection.insertOne(\n    { log_type: "event", host: "120.5.33.4", command: "system-check"}\n)\n')),(0,o.kt)("p",null,"Let's query the collection using the ",(0,o.kt)("inlineCode",{parentName:"p"},"mongodb")," table function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM mongodb(\n    '127.0.0.1:27017',\n    'test',\n    'my_collection',\n    'test_user',\n    'password',\n    'log_type String, host String, command String',\n    'connectTimeoutMS=10000'\n)\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"See Also")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/en/engines/table-engines/integrations/mongodb"},"The ",(0,o.kt)("inlineCode",{parentName:"a"},"MongoDB")," table engine")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/dictionaries#mongodb"},"Using MongoDB as a dictionary source"))))}m.isMDXComponent=!0}}]);