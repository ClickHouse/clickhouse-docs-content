"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[57344],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>k});var a=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var c=a.createContext({}),s=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},p=function(t){var e=s(t.components);return a.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,r=t.originalType,c=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),d=s(n),k=i,h=d["".concat(c,".").concat(k)]||d[k]||u[k]||r;return n?a.createElement(h,l(l({ref:e},p),{},{components:n})):a.createElement(h,l({ref:e},p))}));function k(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=n.length,l=new Array(r);l[0]=d;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=t,o.mdxType="string"==typeof t?t:i,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},67740:(t,e,n)=>{n.d(e,{ZP:()=>l});var a=n(87462),i=(n(67294),n(3905));const r={toc:[]};function l(t){let{components:e,...l}=t;return(0,i.kt)("wrapper",(0,a.Z)({},r,l,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"To connect to ClickHouse with HTTP(S) you need this information:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The HOST and PORT: typically, the port is 8443 when using TLS or 8123 when not using TLS.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The DATABASE NAME: out of the box, there is a database named ",(0,i.kt)("inlineCode",{parentName:"p"},"default"),", use the name of the database that you want to connect to.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The USERNAME and PASSWORD: out of the box, the username is ",(0,i.kt)("inlineCode",{parentName:"p"},"default"),". Use the username appropriate for your use case."))),(0,i.kt)("p",null,"The details for your ClickHouse Cloud service are available in the ClickHouse Cloud console.  Select the service that you will connect to and click ",(0,i.kt)("strong",{parentName:"p"},"Connect"),":"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"ClickHouse Cloud service connect button",src:n(64872).Z,width:"939",height:"474"})),(0,i.kt)("p",null,"Choose ",(0,i.kt)("strong",{parentName:"p"},"HTTPS"),", and the details are available in an example ",(0,i.kt)("inlineCode",{parentName:"p"},"curl")," command. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"ClickHouse Cloud HTTPS connection details",src:n(33273).Z,width:"586",height:"470"})),(0,i.kt)("p",null,"If you are using self-managed ClickHouse, the connection details are set by your ClickHouse administrator."))}l.isMDXComponent=!0},29117:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var a=n(87462),i=(n(67294),n(3905)),r=n(67740);const l={sidebar_label:"Introduction",sidebar_position:10,keywords:["clickhouse","python","client","connect","integrate"],slug:"/en/integrations/language-clients/python/intro",description:"The ClickHouse Connect project suite for connecting Python to ClickHouse"},o="Python Integration with ClickHouse Connect",c={unversionedId:"en/integrations/language-clients/python/intro",id:"en/integrations/language-clients/python/intro",title:"Python Integration with ClickHouse Connect",description:"The ClickHouse Connect project suite for connecting Python to ClickHouse",source:"@site/docs/en/integrations/language-clients/python/intro.md",sourceDirName:"en/integrations/language-clients/python",slug:"/en/integrations/language-clients/python/intro",permalink:"/docs/en/integrations/language-clients/python/intro",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/integrations/language-clients/python/intro.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_label:"Introduction",sidebar_position:10,keywords:["clickhouse","python","client","connect","integrate"],slug:"/en/integrations/language-clients/python/intro",description:"The ClickHouse Connect project suite for connecting Python to ClickHouse"},sidebar:"english",previous:{title:"Python",permalink:"/docs/en/integrations/python"},next:{title:"Driver API",permalink:"/docs/en/integrations/language-clients/python/driver-api"}},s={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Requirements and Compatibility",id:"requirements-and-compatibility",level:2},{value:"Installation",id:"installation",level:2},{value:"Support Policy",id:"support-policy",level:2},{value:"Basic Usage",id:"basic-usage",level:2},{value:"Gather your connection details",id:"gather-your-connection-details",level:3},{value:"Establish a connection",id:"establish-a-connection",level:3},{value:"Use a ClickHouse Connect client instance to connect to a ClickHouse server on localhost:",id:"use-a-clickhouse-connect-client-instance-to-connect-to-a-clickhouse-server-on-localhost",level:4},{value:"Use a ClickHouse Connect client instance to connect to a ClickHouse Cloud service:",id:"use-a-clickhouse-connect-client-instance-to-connect-to-a-clickhouse-cloud-service",level:4},{value:"Interact with your database",id:"interact-with-your-database",level:3}],u={toc:p};function d(t){let{components:e,...n}=t;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"python-integration-with-clickhouse-connect"},"Python Integration with ClickHouse Connect"),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"ClickHouse Connect is a suite of Python packages providing interoperability with a wide range of Python applications.\nThe three primary components are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A low level driver in the package ",(0,i.kt)("inlineCode",{parentName:"li"},"clickhouse_connect.driver"),". This package includes a basic client that handles\nall ClickHouse Connect requests to the ClickHouse Server, as well assorted helper classes and utility functions."),(0,i.kt)("li",{parentName:"ul"},"A limited ",(0,i.kt)("a",{parentName:"li",href:"https://www.sqlalchemy.org/"},"SQLAlchemy")," dialect in the package ",(0,i.kt)("inlineCode",{parentName:"li"},"clickhouse_connect.cc_sqlalchemy"),". This\npackage focuses implements query/cursor functionality, and does not generally support SQLAlchemy DDL and ORM\noperations.\n(SQLAlchemy is targeted toward OLTP databases, and we recommend more specialized tools and frameworks to manage\nthe ClickHouse OLAP database.)"),(0,i.kt)("li",{parentName:"ul"},"An Apache ",(0,i.kt)("a",{parentName:"li",href:"https://superset.apache.org/"},"Superset")," EngineSpec in the ",(0,i.kt)("inlineCode",{parentName:"li"},"clickhouse_connect.cc_superset"),". This package will\nautomatically add a ",(0,i.kt)("strong",{parentName:"li"},"ClickHouse Connect")," Superset connector when ClickHouses Connect is installed. This EngineSpec\nsupports all core Superset query functionality, but does not currently support certain advanced features such as file\nupload to a ClickHouse table.")),(0,i.kt)("p",null,"This documentation is current as of the beta release 0.5.0."),(0,i.kt)("h2",{id:"requirements-and-compatibility"},"Requirements and Compatibility"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"},"Python"),(0,i.kt)("th",{parentName:"tr",align:"left"}),(0,i.kt)("th",{parentName:"tr",align:"right"},"Platform\xb9"),(0,i.kt)("th",{parentName:"tr",align:"left"}),(0,i.kt)("th",{parentName:"tr",align:"right"},"ClickHouse"),(0,i.kt)("th",{parentName:"tr",align:"left"}),(0,i.kt)("th",{parentName:"tr",align:"right"},"SQLAlchemy\xb2"),(0,i.kt)("th",{parentName:"tr",align:"left"}),(0,i.kt)("th",{parentName:"tr",align:"right"},"Apache Superset"),(0,i.kt)("th",{parentName:"tr",align:"left"}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"2.x, <3.7"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u274c"),(0,i.kt)("td",{parentName:"tr",align:"right"},"Linux (x86)"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"right"},"<22.3\xb3"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\ud83d\udfe1"),(0,i.kt)("td",{parentName:"tr",align:"right"},"<1.3"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u274c"),(0,i.kt)("td",{parentName:"tr",align:"right"},"<1.4"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u274c")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"3.7.x"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"right"},"Linux (Aarch64)"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"right"},"22.3.x"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"right"},"1.3.x"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"right"},"1.4.x"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2705")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"3.8.x"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"right"},"macOS (x86)"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"right"},"22.4-22.7\xb3"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\ud83d\udfe1"),(0,i.kt)("td",{parentName:"tr",align:"right"},"1.4.x"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"right"},"1.5.x"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2705")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"3.9.x"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"right"},"macOs (M1)"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"right"},"22.8.x"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"right"},">=2.x"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u274c"),(0,i.kt)("td",{parentName:"tr",align:"right"},"2.0.x"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2705")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"3.10.x"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"right"},"Windows"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"right"},"22.9.x\xb3"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\ud83d\udfe1"),(0,i.kt)("td",{parentName:"tr",align:"right"}),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"right"}),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"3.11.x"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"right"}),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"right"},"22.10.x"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"right"}),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"right"}),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"}),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"right"}),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"right"},"22.11.x"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"right"}),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"right"}),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"}),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"right"}),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"right"},"22.12.x"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"right"}),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"right"}),(0,i.kt)("td",{parentName:"tr",align:"left"})))),(0,i.kt)("p",null,"\xb9ClickHouse Connect has been explicitly tested against the listed platforms.  In addition, untested binary wheels (with C\noptimization) are built for all architectures supported by the excellent ",(0,i.kt)("a",{parentName:"p",href:"https://cibuildwheel.readthedocs.io/en/stable/"},"cibuildwheel")," project.\nFinally, because ClickHouse Connect can also run as pure Python, the source installation should work on any recent\nPython installation."),(0,i.kt)("p",null,"\xb2Again SQLAlchemy support is limited primarily to query functionality.  The full SQLAlchemy API is not supported."),(0,i.kt)("p",null,"\xb3ClickHouse Connect has been tested against all currently supported ClickHouse versions. Because it uses the HTTP\nprotocol, it should also work correctly for most other versions of ClickHouse, although there may be some\nincompatibilities with certain advanced data types."),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"Install ClickHouse Connect from PyPI via pip:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"pip install clickhouse-connect")),(0,i.kt)("p",null,"ClickHouse Connect can also be installed from source:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"git clone")," the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ClickHouse/clickhouse-connect"},"GitHub repository"),"."),(0,i.kt)("li",{parentName:"ul"},"(Optional) run ",(0,i.kt)("inlineCode",{parentName:"li"},"pip install cython")," to build and enable the C/Cython optimizations"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cd")," to the project root directory and run ",(0,i.kt)("inlineCode",{parentName:"li"},"pip install ."))),(0,i.kt)("h2",{id:"support-policy"},"Support Policy"),(0,i.kt)("p",null,"ClickHouse Connect is currently in beta and only the current beta release is actively supported. Please update to the latest\nversion before reported any issues. Issues should be filed in\nthe ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/clickhouse-connect/issues"},"GitHub project"),".",(0,i.kt)("br",{parentName:"p"}),"\n","Future releases of ClickHouse Connect are guaranteed to be compatible with actively supported ClickHouse versions at the\ntime of release (generally the three most recent ",(0,i.kt)("inlineCode",{parentName:"p"},"stable")," and two most recent ",(0,i.kt)("inlineCode",{parentName:"p"},"lts")," releases)."),(0,i.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,i.kt)("h3",{id:"gather-your-connection-details"},"Gather your connection details"),(0,i.kt)(r.ZP,{mdxType:"ConnectionDetails"}),(0,i.kt)("h3",{id:"establish-a-connection"},"Establish a connection"),(0,i.kt)("p",null,"There are two examples shown for connecting to ClickHouse:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Connecting to a ClickHouse server on localhost."),(0,i.kt)("li",{parentName:"ul"},"Connecting to a ClickHouse Cloud service.")),(0,i.kt)("h4",{id:"use-a-clickhouse-connect-client-instance-to-connect-to-a-clickhouse-server-on-localhost"},"Use a ClickHouse Connect client instance to connect to a ClickHouse server on localhost:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import clickhouse_connect\n\nclient = clickhouse_connect.get_client(host='localhost', username='default', password='password')\n")),(0,i.kt)("h4",{id:"use-a-clickhouse-connect-client-instance-to-connect-to-a-clickhouse-cloud-service"},"Use a ClickHouse Connect client instance to connect to a ClickHouse Cloud service:"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Use the connection details gathered earlier.  ClickHouse Cloud services require TLS, so use port 8443."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import clickhouse_connect\n\nclient = clickhouse_connect.get_client(host='HOSTNAME.clickhouse.cloud', port=8443, username='default', password='your password')\n")),(0,i.kt)("h3",{id:"interact-with-your-database"},"Interact with your database"),(0,i.kt)("p",null,"To run a ClickHouse SQL command, use the client ",(0,i.kt)("inlineCode",{parentName:"p"},"command")," method:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"client.command('CREATE TABLE new_table (key UInt32, value String, metric Float64) ENGINE MergeTree ORDER BY key')\n")),(0,i.kt)("p",null,"To insert batch data, use the client ",(0,i.kt)("inlineCode",{parentName:"p"},"insert")," method with a two-dimensional array of rows and values:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"row1 = [1000, 'String Value 1000', 5.233]\nrow2 = [2000, 'String Value 2000', -107.04]\ndata = [row1, row2]\nclient.insert('new_table', data, column_names=['key', 'value', 'metric']) \n")),(0,i.kt)("p",null,"To retrieve data using ClickHouse SQL, use the client ",(0,i.kt)("inlineCode",{parentName:"p"},"query")," method:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"result = client.query('SELECT max(key), avg(metric) FROM new_table')\nresult.result_rows\nOut[13]: [(2000, -50.9035)]\n")))}d.isMDXComponent=!0},64872:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/cloud-connect-button-e2247559831d9d3549387ddfb0deee9b.png"},33273:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/connection-details-https-6ceceb667ac0b41ab35a2ad390b7e2dc.png"}}]);