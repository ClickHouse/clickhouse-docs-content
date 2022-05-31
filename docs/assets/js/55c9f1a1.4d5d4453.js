"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[82752],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(r),d=o,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4791:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],s={sidebar_position:44,sidebar_label:"Requirements"},l="Requirements",u={unversionedId:"en/operations/requirements",id:"en/operations/requirements",title:"Requirements",description:"CPU",source:"@site/docs/en/operations/requirements.md",sourceDirName:"en/operations",slug:"/en/operations/requirements",permalink:"/docs/en/operations/requirements",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/operations/requirements.md",tags:[],version:"current",sidebarPosition:44,frontMatter:{sidebar_position:44,sidebar_label:"Requirements"},sidebar:"english",previous:{title:"Operations",permalink:"/docs/en/operations"},next:{title:"Monitoring",permalink:"/docs/en/operations/monitoring"}},c={},p=[{value:"CPU",id:"cpu",level:2},{value:"RAM",id:"ram",level:2},{value:"Swap File",id:"swap-file",level:2},{value:"Storage Subsystem",id:"storage-subsystem",level:2},{value:"Network",id:"network",level:2},{value:"Software",id:"software",level:2}],m={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"requirements"},"Requirements"),(0,a.kt)("h2",{id:"cpu"},"CPU"),(0,a.kt)("p",null,"For installation from prebuilt deb packages, use a CPU with x86_64 architecture and support for SSE 4.2 instructions. To run ClickHouse with processors that do not support SSE 4.2 or have AArch64 or PowerPC64LE architecture, you should build ClickHouse from sources."),(0,a.kt)("p",null,"ClickHouse implements parallel data processing and uses all the hardware resources available. When choosing a processor, take into account that ClickHouse works more efficiently at configurations with a large number of cores but a lower clock rate than at configurations with fewer cores and a higher clock rate. For example, 16 cores with 2600 MHz is preferable to 8 cores with 3600 MHz."),(0,a.kt)("p",null,"It is recommended to use ",(0,a.kt)("strong",{parentName:"p"},"Turbo Boost")," and ",(0,a.kt)("strong",{parentName:"p"},"hyper-threading")," technologies. It significantly improves performance with a typical workload."),(0,a.kt)("h2",{id:"ram"},"RAM"),(0,a.kt)("p",null,"We recommend using a minimum of 4GB of RAM to perform non-trivial queries. The ClickHouse server can run with a much smaller amount of RAM, but it requires memory for processing queries."),(0,a.kt)("p",null,"The required volume of RAM depends on:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The complexity of queries."),(0,a.kt)("li",{parentName:"ul"},"The amount of data that is processed in queries.")),(0,a.kt)("p",null,"To calculate the required volume of RAM, you should estimate the size of temporary data for ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/select/group-by#select-group-by-clause"},"GROUP BY"),", ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/select/distinct#select-distinct"},"DISTINCT"),", ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/select/join#select-join"},"JOIN")," and other operations you use."),(0,a.kt)("p",null,"ClickHouse can use external memory for temporary data. See ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/select/group-by#select-group-by-in-external-memory"},"GROUP BY in External Memory")," for details."),(0,a.kt)("h2",{id:"swap-file"},"Swap File"),(0,a.kt)("p",null,"Disable the swap file for production environments."),(0,a.kt)("h2",{id:"storage-subsystem"},"Storage Subsystem"),(0,a.kt)("p",null,"You need to have 2GB of free disk space to install ClickHouse."),(0,a.kt)("p",null,"The volume of storage required for your data should be calculated separately. Assessment should include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Estimation of the data volume."),(0,a.kt)("p",{parentName:"li"},"You can take a sample of the data and get the average size of a row from it. Then multiply the value by the number of rows you plan to store.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The data compression coefficient."),(0,a.kt)("p",{parentName:"li"},"To estimate the data compression coefficient, load a sample of your data into ClickHouse, and compare the actual size of the data with the size of the table stored. For example, clickstream data is usually compressed by 6-10 times."))),(0,a.kt)("p",null,"To calculate the final volume of data to be stored, apply the compression coefficient to the estimated data volume. If you plan to store data in several replicas, then multiply the estimated volume by the number of replicas."),(0,a.kt)("h2",{id:"network"},"Network"),(0,a.kt)("p",null,"If possible, use networks of 10G or higher class."),(0,a.kt)("p",null,"The network bandwidth is critical for processing distributed queries with a large amount of intermediate data. Besides, network speed affects replication processes."),(0,a.kt)("h2",{id:"software"},"Software"),(0,a.kt)("p",null,"ClickHouse is developed primarily for the Linux family of operating systems. The recommended Linux distribution is Ubuntu. The ",(0,a.kt)("inlineCode",{parentName:"p"},"tzdata")," package should be installed in the system."),(0,a.kt)("p",null,"ClickHouse can also work in other operating system families. See details in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/getting-started/install"},"install guide")," section of the documentation."))}d.isMDXComponent=!0}}]);