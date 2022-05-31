"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[36433],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),f=a,b=m["".concat(s,".").concat(f)]||m[f]||p[f]||i;return n?r.createElement(b,o(o({ref:t},u),{},{components:n})):r.createElement(b,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},56:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={sidebar_position:38,sidebar_label:"merge"},s="merge",c={unversionedId:"en/sql-reference/table-functions/merge",id:"en/sql-reference/table-functions/merge",title:"merge",description:"merge}",source:"@site/docs/en/sql-reference/table-functions/merge.md",sourceDirName:"en/sql-reference/table-functions",slug:"/en/sql-reference/table-functions/merge",permalink:"/docs/en/sql-reference/table-functions/merge",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/table-functions/merge.md",tags:[],version:"current",sidebarPosition:38,frontMatter:{sidebar_position:38,sidebar_label:"merge"},sidebar:"english",previous:{title:"file",permalink:"/docs/en/sql-reference/table-functions/file"},next:{title:"numbers",permalink:"/docs/en/sql-reference/table-functions/numbers"}},u={},p=[],m={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"merge"},"merge"),(0,i.kt)("p",null,"Creates a temporary ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/special/merge"},"Merge")," table. The table structure is taken from the first table encountered that matches the regular expression."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Syntax")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"merge('db_name', 'tables_regexp')\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Arguments")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"db_name")," \u2014 Possible values:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"database name, "),(0,i.kt)("li",{parentName:"ul"},"constant expression that returns a string with a database name, for example, ",(0,i.kt)("inlineCode",{parentName:"li"},"currentDatabase()"),","),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"REGEXP(expression)"),", where ",(0,i.kt)("inlineCode",{parentName:"li"},"expression")," is a regular expression to match the DB names."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"tables_regexp")," \u2014 A regular expression to match the table names in the specified DB or DBs."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"See Also")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/en/engines/table-engines/special/merge"},"Merge")," table engine")))}f.isMDXComponent=!0}}]);