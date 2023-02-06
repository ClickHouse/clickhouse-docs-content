"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[36141],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(a),p=r,m=d["".concat(s,".").concat(p)]||d[p]||h[p]||o;return a?n.createElement(m,i(i({ref:t},u),{},{components:a})):n.createElement(m,i({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(86010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(87462),r=a(67294),o=a(86010),i=a(12466),l=a(16550),s=a(91980),c=a(67392),u=a(50012);function d(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function h(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=h(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,c]=m({queryString:a,groupId:n}),[d,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),b=(()=>{const e=s??d;return p({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{b&&l(b)}),[b]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),g(e)}),[c,g,o]),tabValues:o}}var b=a(72389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:t,block:a,selectedValue:l,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),h=e=>{const t=e.currentTarget,a=u.indexOf(t),n=c[a].value;n!==l&&(d(t),s(n))},p=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:p,onClick:h},i,{className:(0,o.Z)("tabs__item",k.tabItem,i?.className,{"tabs__item--active":l===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function C(e){const t=g(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",k.tabList)},r.createElement(f,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function w(e){const t=(0,b.Z)();return r.createElement(C,(0,n.Z)({key:String(t)},e))}},70777:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var n=a(87462),r=(a(67294),a(3905)),o=a(74866),i=a(85162);const l={sidebar_label:"JDBC",sidebar_position:2,keywords:["clickhouse","jdbc","connect","integrate"],slug:"/en/integrations/jdbc/jdbc-with-clickhouse",description:"The ClickHouse JDBC Bridge allows ClickHouse to access data from any external data source for which a JDBC driver is available"},s="Connecting ClickHouse to external data sources with JDBC",c={unversionedId:"en/integrations/data-ingestion/dbms/jdbc-with-clickhouse",id:"en/integrations/data-ingestion/dbms/jdbc-with-clickhouse",title:"Connecting ClickHouse to external data sources with JDBC",description:"The ClickHouse JDBC Bridge allows ClickHouse to access data from any external data source for which a JDBC driver is available",source:"@site/docs/en/integrations/data-ingestion/dbms/jdbc-with-clickhouse.md",sourceDirName:"en/integrations/data-ingestion/dbms",slug:"/en/integrations/jdbc/jdbc-with-clickhouse",permalink:"/docs/en/integrations/jdbc/jdbc-with-clickhouse",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/integrations/data-ingestion/dbms/jdbc-with-clickhouse.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"JDBC",sidebar_position:2,keywords:["clickhouse","jdbc","connect","integrate"],slug:"/en/integrations/jdbc/jdbc-with-clickhouse",description:"The ClickHouse JDBC Bridge allows ClickHouse to access data from any external data source for which a JDBC driver is available"},sidebar:"english",previous:{title:"ODBC",permalink:"/docs/en/integrations/data-ingestion/dbms/odbc-with-clickhouse"},next:{title:"MySQL",permalink:"/docs/en/integrations/mysql"}},u={},d=[{value:"Install the ClickHouse JDBC Bridge locally",id:"install-the-clickhouse-jdbc-bridge-locally",level:2},{value:"Use the JDBC connection from within ClickHouse",id:"use-the-jdbc-connection-from-within-clickhouse",level:2},{value:"Install the ClickHouse JDBC Bridge externally",id:"install-the-clickhouse-jdbc-bridge-externally",level:2}],h={toc:d},p="wrapper";function m(e){let{components:t,...l}=e;return(0,r.kt)(p,(0,n.Z)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"connecting-clickhouse-to-external-data-sources-with-jdbc"},"Connecting ClickHouse to external data sources with JDBC"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Using JDBC requires the ClickHouse JDBC bridge, so you will need to use ",(0,r.kt)("inlineCode",{parentName:"p"},"clickhouse-local")," on a local machine to stream the data from your database to ClickHouse Cloud. Visit the ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/integrations/migration/clickhouse-local#example-2-migrating-from-mysql-to-clickhouse-cloud-with-the-jdbc-bridge"},(0,r.kt)("strong",{parentName:"a"},"Using clickhouse-local"))," page in the ",(0,r.kt)("strong",{parentName:"p"},"Migrate")," section of the docs for details.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Overview:")," The ",(0,r.kt)("a",{href:"https://github.com/ClickHouse/clickhouse-jdbc-bridge",target:"_blank"},"ClickHouse JDBC Bridge")," in combination with the ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/table-functions/jdbc"},"jdbc table function")," or the ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/integrations/jdbc"},"JDBC table engine")," allows ClickHouse to access data from any external data source for which a ",(0,r.kt)("a",{href:"https://en.wikipedia.org/wiki/JDBC_driver",target:"_blank"},"JDBC driver")," is available:"),(0,r.kt)("img",{src:a(99188).Z,class:"image",alt:"ClickHouse JDBC Bridge"}),"This is handy when there is no native built-in [integration engine](/docs/en/engines/table-engines/#integration-engines-integration-engines), table function, or external dictionary for the external data source available, but a JDBC driver for the data source exists.",(0,r.kt)("p",null,"You can use the ClickHouse JDBC Bridge for both reads and writes. And in parallel for multiple external data sources, e.g. you can run distributed queries on ClickHouse across multiple external and internal data sources in real time."),(0,r.kt)("p",null,"In this lesson we will show you how easy it is to install, configure, and run the ClickHouse JDBC Bridge in order to connect ClickHouse with an external data source. We will use MySQL as the external data source for this lesson."),(0,r.kt)("p",null,"Let's get started!"),(0,r.kt)("admonition",{title:"Prerequisites",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"You have access to a machine that has:"),(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},"a Unix shell and internet access"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{href:"https://www.gnu.org/software/wget/",target:"_blank"},"wget")," installed"),(0,r.kt)("li",{parentName:"ol"},"a current version of ",(0,r.kt)("strong",{parentName:"li"},"Java")," (e.g. ",(0,r.kt)("a",{href:"https://openjdk.java.net",target:"_blank"},"OpenJDK")," Version >= 17) installed"),(0,r.kt)("li",{parentName:"ol"},"a current version of ",(0,r.kt)("strong",{parentName:"li"},"MySQL")," (e.g. ",(0,r.kt)("a",{href:"https://www.mysql.com",target:"_blank"},"MySQL")," Version >=8) installed and running"),(0,r.kt)("li",{parentName:"ol"},"a current version of ",(0,r.kt)("strong",{parentName:"li"},"ClickHouse")," ",(0,r.kt)("a",{parentName:"li",href:"/docs/en/install"},"installed")," and running"))),(0,r.kt)("h2",{id:"install-the-clickhouse-jdbc-bridge-locally"},"Install the ClickHouse JDBC Bridge locally"),(0,r.kt)("p",null,"The easiest way to use the ClickHouse JDBC Bridge is to install and run it on the same host where also ClickHouse is running:",(0,r.kt)("img",{src:a(93007).Z,class:"image",alt:"ClickHouse JDBC Bridge locally"})),(0,r.kt)("p",null,"Let's start by connecting to the Unix shell on the machine where ClickHouse is running and create a local folder where we will later install the ClickHouse JDBC Bridge into (feel free to name the folder anything you like and put it anywhere you like):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir ~/clickhouse-jdbc-bridge\n")),(0,r.kt)("p",null,"Now we download the ",(0,r.kt)("a",{href:"https://github.com/ClickHouse/clickhouse-jdbc-bridge/releases/",target:"_blank"},"current version")," of the ClickHouse JDBC Bridge into that folder:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~/clickhouse-jdbc-bridge\nwget https://github.com/ClickHouse/clickhouse-jdbc-bridge/releases/download/v2.0.7/clickhouse-jdbc-bridge-2.0.7-shaded.jar\n")),(0,r.kt)("p",null,"In order to be able to connect to MySQL we are creating a named data source:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~/clickhouse-jdbc-bridge\nmkdir -p config/datasources\ntouch config/datasources/mysql8.json\n")),(0,r.kt)("p",null," You can now copy and paste the following configuration into the file ",(0,r.kt)("inlineCode",{parentName:"p"},"~/clickhouse-jdbc-bridge/config/datasources/mysql8.json"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "mysql8": {\n  "driverUrls": [\n    "https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.28/mysql-connector-java-8.0.28.jar"\n  ],\n  "jdbcUrl": "jdbc:mysql://<host>:<port>",\n  "username": "<username>",\n  "password": "<password>"\n  }\n}\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"in the config file above"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"you are free to use any name you like for the datasource, we used ",(0,r.kt)("inlineCode",{parentName:"li"},"mysql8")),(0,r.kt)("li",{parentName:"ul"},"in the value for the ",(0,r.kt)("inlineCode",{parentName:"li"},"jdbcUrl")," you need to replace ",(0,r.kt)("inlineCode",{parentName:"li"},"<host>"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"<port>")," with appropriate values according to your running MySQL instance, e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},'"jdbc:mysql://localhost:3306"')),(0,r.kt)("li",{parentName:"ul"},"you need to replace ",(0,r.kt)("inlineCode",{parentName:"li"},"<username>")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"<password>")," with your MySQL credentials, if you don't use a password, you can delete the ",(0,r.kt)("inlineCode",{parentName:"li"},'"password": "<password>"')," line in the config file above"),(0,r.kt)("li",{parentName:"ul"},"in the value for ",(0,r.kt)("inlineCode",{parentName:"li"},"driverUrls")," we just specified a URL from which the ",(0,r.kt)("a",{href:"https://repo1.maven.org/maven2/mysql/mysql-connector-java/",target:"_blank"},"current version")," of the MySQL JDBC driver can be downloaded. That's all we have to do, and the ClickHouse JDBC Bridge will automatically download that JDBC driver (into a OS specific directory)."))),(0,r.kt)("br",null),(0,r.kt)("p",null,"Now we are ready to start the ClickHouse JDBC Bridge:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~/clickhouse-jdbc-bridge\njava -jar clickhouse-jdbc-bridge-2.0.7-shaded.jar\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"We started the ClickHouse JDBC Bridge in foreground mode. In order to stop the Bridge you can bring the Unix shell window from above in foreground and press ",(0,r.kt)("inlineCode",{parentName:"p"},"CTRL+C"),".")),(0,r.kt)("h2",{id:"use-the-jdbc-connection-from-within-clickhouse"},"Use the JDBC connection from within ClickHouse"),(0,r.kt)("p",null,"ClickHouse can now access MySQL data by either using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/table-functions/jdbc"},"jdbc table function")," or the ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/integrations/jdbc"},"JDBC table engine"),"."),(0,r.kt)("p",null,"The easiest way to execute the following examples is to copy and paste them into the ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/interfaces/cli"},(0,r.kt)("inlineCode",{parentName:"a"},"clickhouse-client"))," or into the ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/interfaces/http"},"Play UI"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"jdbc Table Function:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM jdbc('mysql8', 'mydatabase', 'mytable');\n")),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"As the first paramter for the jdbc table funtion we are using the name of the named data source that we configured above.")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"JDBC Table Engine:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE mytable (\n     <column> <column_type>,\n     ...\n)\nENGINE = JDBC('mysql8', 'mydatabase', 'mytable');\n\nSELECT * FROM mytable;\n")),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"}," As the first paramter for the jdbc engine clause we are using the name of the named data source that we configured above"),(0,r.kt)("p",{parentName:"admonition"}," The schema of the ClickHouse JDBC engine table and schema of the connected MySQL table must be aligned, e.g. the column names and order must be the same, and the column data types must be compatible")))),(0,r.kt)("h2",{id:"install-the-clickhouse-jdbc-bridge-externally"},"Install the ClickHouse JDBC Bridge externally"),(0,r.kt)("p",null,"For a distributed ClickHouse cluster (a cluster with more than one ClickHouse host) it makes sense to install and run the ClickHouse JDBC Bridge externally on its own host:"),(0,r.kt)("img",{src:a(98843).Z,class:"image",alt:"ClickHouse JDBC Bridge externally"}),"This has the advantage that each ClickHouse host can access the JDBC Bridge. Otherwise the JDBC Bridge would need to be installed locally for each ClickHouse instance that is supposed to access external data sources via the Bridge.",(0,r.kt)("p",null,"In order to install the ClickHouse JDBC Bridge externally, we do the following steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"We install, configure and run the ClickHouse JDBC Bridge on a dedicated host by following the steps described in section 1 of this guide.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On each ClickHouse Host we add the following configuration block to the ",(0,r.kt)("a",{href:"https://clickhouse.com/docs/en/operations/configuration-files/#configuration_files",target:"_blank"},"ClickHouse server configuration")," (depending on your chosen configuration format, use either the XML or YAML version):"))),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"xml",label:"XML",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<jdbc_bridge>\n   <host>JDBC-Bridge-Host</host>\n   <port>9019</port>\n</jdbc_bridge>\n"))),(0,r.kt)(i.Z,{value:"yaml",label:"YAML",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"jdbc_bridge:\n    host: JDBC-Bridge-Host\n    port: 9019\n")))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"you need to replace ",(0,r.kt)("inlineCode",{parentName:"li"},"JDBC-Bridge-Host")," with the hostname or ip address of the dedicated ClickHouse JDBC Bridge host"),(0,r.kt)("li",{parentName:"ul"},"we specified the default ClickHouse JDBC Bridge port ",(0,r.kt)("inlineCode",{parentName:"li"},"9019"),", if you are using a different port for the JDBC Bridge then you must adapt the configuration above accordingly"))))}m.isMDXComponent=!0},99188:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/jdbc-01-ddd928634a13f89e6668b364eab54718.png"},93007:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/jdbc-02-a24eef98d4a05696d84a8b0c3e536496.png"},98843:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/jdbc-03-40dee8fbae32db5a70d76ac0e1c883c1.png"}}]);