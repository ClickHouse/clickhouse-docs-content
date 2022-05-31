"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[79772],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),f=a,d=u["".concat(l,".").concat(f)]||u[f]||m[f]||o;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},71616:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],s={},l="row_policies",p={unversionedId:"en/operations/system-tables/row_policies",id:"en/operations/system-tables/row_policies",title:"row_policies",description:"systemtables-rowpolicies}",source:"@site/docs/en/operations/system-tables/row_policies.md",sourceDirName:"en/operations/system-tables",slug:"/en/operations/system-tables/row_policies",permalink:"/docs/en/operations/system-tables/row_policies",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/operations/system-tables/row_policies.md",tags:[],version:"current",frontMatter:{},sidebar:"english",previous:{title:"roles",permalink:"/docs/en/operations/system-tables/roles"},next:{title:"session_log",permalink:"/docs/en/operations/system-tables/session_log"}},c={},m=[{value:"See Also",id:"see-also",level:2}],u={toc:m};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"system_tables-row_policies"},"row_policies"),(0,o.kt)("p",null,"Contains filters for one particular table, as well as a list of roles and/or users which should use this row policy."),(0,o.kt)("p",null,"Columns:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"name")," (",(0,o.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/string"},"String"),") \u2014 Name of a row policy.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"short_name")," (",(0,o.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/string"},"String"),') \u2014 Short name of a row policy. Names of row policies are compound, for example: myfilter ON mydb.mytable. Here "myfilter ON mydb.mytable" is the name of the row policy, "myfilter" is it\'s short name.')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"database")," (",(0,o.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/string"},"String"),") \u2014 Database name.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"table")," (",(0,o.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/string"},"String"),") \u2014 Table name.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"id")," (",(0,o.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/uuid"},"UUID"),") \u2014 Row policy ID.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"storage")," (",(0,o.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/string"},"String"),") \u2014 Name of the directory where the row policy is stored.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"select_filter")," (",(0,o.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/nullable"},"Nullable"),"(",(0,o.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/string"},"String"),")) \u2014 Condition which is used to filter rows.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"is_restrictive")," (",(0,o.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/int-uint#uint-ranges"},"UInt8"),") \u2014 Shows whether the row policy restricts access to rows, see ",(0,o.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/create/row-policy#create-row-policy-as"},"CREATE ROW POLICY"),". Value:")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"0")," \u2014 The row policy is defined with ",(0,o.kt)("inlineCode",{parentName:"p"},"AS PERMISSIVE")," clause.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"1")," \u2014 The row policy is defined with ",(0,o.kt)("inlineCode",{parentName:"p"},"AS RESTRICTIVE")," clause.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"apply_to_all")," (",(0,o.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/int-uint#uint-ranges"},"UInt8"),") \u2014 Shows that the row policies set for all roles and/or users.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"apply_to_list")," (",(0,o.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/array"},"Array"),"(",(0,o.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/string"},"String"),")) \u2014 List of the roles and/or users to which the row policies is applied.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"apply_to_except")," (",(0,o.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/array"},"Array"),"(",(0,o.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/string"},"String"),")) \u2014 The row policies is applied to all roles and/or users excepting of the listed ones."))),(0,o.kt)("h2",{id:"see-also"},"See Also"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/statements/show#show-policies-statement"},"SHOW POLICIES"))),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/system-tables/row_policies"},"Original article")," "))}f.isMDXComponent=!0}}]);