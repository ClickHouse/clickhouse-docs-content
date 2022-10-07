"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[60310],{3905:function(t,e,a){a.d(e,{Zo:function(){return u},kt:function(){return k}});var n=a(67294);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,o=function(t,e){if(null==t)return{};var a,n,o={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var s=n.createContext({}),c=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=c(t.components);return n.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,o=t.mdxType,r=t.originalType,s=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),d=c(a),k=o,m=d["".concat(s,".").concat(k)]||d[k]||p[k]||r;return a?n.createElement(m,i(i({ref:e},u),{},{components:a})):n.createElement(m,i({ref:e},u))}));function k(t,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=a.length,i=new Array(r);i[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:o,i[1]=l;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},92932:function(t,e,a){a.r(e),a.d(e,{assets:function(){return u},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var n=a(87462),o=a(63366),r=(a(67294),a(3905)),i=["components"],l={sidebar_label:"Tableau",sidebar_position:205,slug:"/en/connect-a-ui/tableau-and-clickhouse",keywords:["clickhouse","tableau","connect","integrate","ui"],description:"Tableau can use ClickHouse databases and tables as a data source."},s="Connecting Tableau to ClickHouse",c={unversionedId:"en/integrations/data-visualization/tableau-and-clickhouse",id:"en/integrations/data-visualization/tableau-and-clickhouse",title:"Connecting Tableau to ClickHouse",description:"Tableau can use ClickHouse databases and tables as a data source.",source:"@site/docs/en/integrations/data-visualization/tableau-and-clickhouse.md",sourceDirName:"en/integrations/data-visualization",slug:"/en/connect-a-ui/tableau-and-clickhouse",permalink:"/docs/en/connect-a-ui/tableau-and-clickhouse",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/integrations/data-visualization/tableau-and-clickhouse.md",tags:[],version:"current",sidebarPosition:205,frontMatter:{sidebar_label:"Tableau",sidebar_position:205,slug:"/en/connect-a-ui/tableau-and-clickhouse",keywords:["clickhouse","tableau","connect","integrate","ui"],description:"Tableau can use ClickHouse databases and tables as a data source."},sidebar:"english",previous:{title:"Superset",permalink:"/docs/en/connect-a-ui/superset-and-clickhouse"},next:{title:"Overview",permalink:"/docs/en/integrations/migration/"}},u={},p=[{value:"1.  Download the JDBC Driver",id:"1--download-the-jdbc-driver",level:2},{value:"3. Download the Connector",id:"3-download-the-connector",level:2},{value:"4.  Configure a ClickHouse data source in Tableau",id:"4--configure-a-clickhouse-data-source-in-tableau",level:2},{value:"5. Building Visualizations in Tableau",id:"5-building-visualizations-in-tableau",level:2}],d={toc:p};function k(t){var e=t.components,l=(0,o.Z)(t,i);return(0,r.kt)("wrapper",(0,n.Z)({},d,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"connecting-tableau-to-clickhouse"},"Connecting Tableau to ClickHouse"),(0,r.kt)("p",null,"Tableau can use ClickHouse databases and tables as a data source. This requires a special JDBC driver to be downloaded and saved into a specific location where Tableau can find it."),(0,r.kt)("h2",{id:"1--download-the-jdbc-driver"},"1.  Download the JDBC Driver"),(0,r.kt)("p",null,"The Tableau connector is an extension of the ClickHouse JDBC driver, so you need to download the JDBC driver and save it in the correct folder."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Download the latest version of the ClickHouse JDBC driver at ",(0,r.kt)("a",{href:"",target:"_blank"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/ClickHouse/clickhouse-jdbc/releases/"},"https://github.com/ClickHouse/clickhouse-jdbc/releases/")),". (We used ",(0,r.kt)("a",{href:"https://github.com/ClickHouse/clickhouse-jdbc/releases/download/v0.3.1-patch/clickhouse-jdbc-0.3.1-patch-shaded.jar"},"this version of the driver")," for this tutorial.)")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Make sure you download the ",(0,r.kt)("strong",{parentName:"p"},"clickhouse-jdbc-x.x.x-shaded.jar")," JAR file."))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Store the JDBC driver in the following folder (based on your OS):"),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Operating System"),(0,r.kt)("th",{parentName:"tr",align:null},"Destination folder"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MacOS"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"~/Library/Tableau/Drivers"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Windows"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"C:\\Program Files\\Tableau\\Drivers"))))),(0,r.kt)("br",null),(0,r.kt)("p",{parentName:"li"},"That's it. The driver will be found the next time you start Tableau."))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"3-download-the-connector"},"3. Download the Connector"),(0,r.kt)("p",null,"ANALYTIKA PLUS has built a handy connector for simplifying connections to ClickHouse from Tableau. You can ",(0,r.kt)("a",{href:"https://github.com/analytikaplus/clickhouse-tableau-connector-jdbc",target:"_blank"}," view the details of the project in Github"),". Follow these steps to download the connector..."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The connector is built in a ",(0,r.kt)("strong",{parentName:"p"},"taco")," file (short for ",(0,r.kt)("strong",{parentName:"p"},"Ta"),"bleau ",(0,r.kt)("strong",{parentName:"p"},"Co"),"nnector). Download the latest version at ",(0,r.kt)("a",{href:"https://github.com/analytikaplus/clickhouse-tableau-connector-jdbc/releases/",target:"_blank"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/analytikaplus/clickhouse-tableau-connector-jdbc/releases/"},"https://github.com/analytikaplus/clickhouse-tableau-connector-jdbc/releases/")),". (For this lesson, we downloaded ",(0,r.kt)("strong",{parentName:"p"},"v0.1.1")," of ",(0,r.kt)("strong",{parentName:"p"},"clickhouse_jdbc.taco"),".)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Store ",(0,r.kt)("strong",{parentName:"p"},"clickhouse_jdbc.taco")," in the following folder (based on your OS):"),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Operating System"),(0,r.kt)("th",{parentName:"tr",align:null},"Destination folder"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MacOS"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"~/Documents/My Tableau Repository/Connectors"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Windows"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"C:\\Users","[","Windows User]\\Documents\\My Tableau Repository\\Connectors"))))))),(0,r.kt)("br",null),"The connector is now ready to go.",(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"4--configure-a-clickhouse-data-source-in-tableau"},"4.  Configure a ClickHouse data source in Tableau"),(0,r.kt)("p",null,"Now that you have the driver and connector in the approriate folders on your machine, let's see how to define a data source in Tableau that connects to the ",(0,r.kt)("strong",{parentName:"p"},"TPCD")," database in ClickHouse."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Start Tableau. (If you already had it running, then restart it.)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"From the left-side menu, click on ",(0,r.kt)("strong",{parentName:"p"},"More")," under the ",(0,r.kt)("strong",{parentName:"p"},"To a Server")," section. If everything worked properly, you should see ",(0,r.kt)("strong",{parentName:"p"},"ClickHouse (JDBC) by ANALYTIKA PLUS")," in the list of installed connectors:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"ClickHouse (JDBC) by ANALYTIKA PLUS",src:a(63713).Z,width:"1982",height:"1448"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"ClickHouse (JDBC) by ANALYTIKA PLUS"),"  and a dialog window pops up. Enter the following details:"),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Setting"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Server"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"localhost"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Port"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"8123"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Database"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"default"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Username"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"default"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Password"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"leave blank"))))))),(0,r.kt)("br",null),(0,r.kt)("p",null,"Your settings should look like:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"&quot;ClickHouse Settings&quot;",src:a(27797).Z,width:"511",height:"487"})),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Our ClickHouse database is named ",(0,r.kt)("strong",{parentName:"p"},"TPCD"),", but you must set the ",(0,r.kt)("strong",{parentName:"p"},"Database")," to ",(0,r.kt)("strong",{parentName:"p"},"default")," in the dialog above, then select ",(0,r.kt)("strong",{parentName:"p"},"TPCD")," for the ",(0,r.kt)("strong",{parentName:"p"},"Schema")," in the next step. (This is likely due to a bug in the connector, so this behavior could change, but for now you must use ",(0,r.kt)("strong",{parentName:"p"},"default")," as the database.)"))),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click the ",(0,r.kt)("strong",{parentName:"p"},"Sign In")," button and you should see a new Tableau workbook:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"&quot;New Workbook&quot;",src:a(59773).Z,width:"810",height:"451"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"TPCD")," from the ",(0,r.kt)("strong",{parentName:"p"},"Schema")," dropdown and you should see the list of tables in ",(0,r.kt)("strong",{parentName:"p"},"TPCD"),":"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"&quot;Select TPCD for the Schema&quot;",src:a(57832).Z,width:"719",height:"572"})))),(0,r.kt)("p",null,"You are now ready to build some visualizations in Tableau!"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"5-building-visualizations-in-tableau"},"5. Building Visualizations in Tableau"),(0,r.kt)("p",null,"Now that have a ClickHouse data source configured in Tableau, let's visualize the data..."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Drag the ",(0,r.kt)("strong",{parentName:"p"},"CUSTOMER")," table onto the workbook. Notice the columns appear, but the data table is empty:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"&quot;&quot;",src:a(19490).Z,width:"959",height:"626"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click the ",(0,r.kt)("strong",{parentName:"p"},"Update Now")," button and 100 rows from ",(0,r.kt)("strong",{parentName:"p"},"CUSTOMER")," will populate the table."))),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Drag the ",(0,r.kt)("strong",{parentName:"p"},"ORDERS")," table into the workbook, then set ",(0,r.kt)("strong",{parentName:"p"},"Custkey")," as the relationship field between the two tables:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"&quot;&quot;",src:a(70303).Z,width:"885",height:"644"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You now have the ",(0,r.kt)("strong",{parentName:"p"},"ORDERS")," and ",(0,r.kt)("strong",{parentName:"p"},"LINEITEM")," tables associated with each other as your data source, so you can use this relationship to answer questions about the data. Select the ",(0,r.kt)("strong",{parentName:"p"},"Sheet 1")," tab at the bottom of the workbook."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"&quot;&quot;",src:a(60563).Z,width:"1151",height:"723"})))),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Suppose you want to know how many specific items were ordered each year. Drag ",(0,r.kt)("strong",{parentName:"p"},"Orderdate")," from ",(0,r.kt)("strong",{parentName:"p"},"ORDERS")," into the ",(0,r.kt)("strong",{parentName:"p"},"Columns")," section (the horizontal field), then drag ",(0,r.kt)("strong",{parentName:"p"},"Quantity")," from ",(0,r.kt)("strong",{parentName:"p"},"LINEITEM")," into the ",(0,r.kt)("strong",{parentName:"p"},"Rows"),". Tableau will generate the following line chart:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"&quot;&quot;",src:a(39384).Z,width:"541",height:"526"})))),(0,r.kt)("p",null,"Not a very exciting line chart, but the dataset was generated by a script and built for testing query performance, so you will notice there is not a lot of variations in the simulated orders of the TCPD data."),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Suppose you want to know the average order amount (in dollars) by quarter and also by shipping mode (air, mail, ship, truck, etc.):"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Click the ",(0,r.kt)("strong",{parentName:"li"},"New Worksheet")," tab create a new sheet"),(0,r.kt)("li",{parentName:"ul"},"Drag ",(0,r.kt)("strong",{parentName:"li"},"OrderDate")," from ",(0,r.kt)("strong",{parentName:"li"},"ORDERS")," into ",(0,r.kt)("strong",{parentName:"li"},"Columns")," and change it from ",(0,r.kt)("strong",{parentName:"li"},"Year")," to ",(0,r.kt)("strong",{parentName:"li"},"Quarter")),(0,r.kt)("li",{parentName:"ul"},"Drag ",(0,r.kt)("strong",{parentName:"li"},"Shipmode")," from ",(0,r.kt)("strong",{parentName:"li"},"LINEITEM")," into ",(0,r.kt)("strong",{parentName:"li"},"Rows"))))),(0,r.kt)("p",null,"You should see the following:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"&quot;&quot;",src:a(91672).Z,width:"368",height:"313"})),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("strong",{parentName:"p"},"Abc")," values are just filling in the space until you drag a metric onto the table. Drag ",(0,r.kt)("strong",{parentName:"p"},"Totalprice")," from ",(0,r.kt)("strong",{parentName:"p"},"ORDERS")," onto the table. Notice the default calculation is to ",(0,r.kt)("strong",{parentName:"p"},"SUM")," the ",(0,r.kt)("strong",{parentName:"p"},"Totalpricess"),":"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"&quot;&quot;",src:a(95051).Z,width:"665",height:"383"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"SUM")," and change the ",(0,r.kt)("strong",{parentName:"p"},"Measure")," to ",(0,r.kt)("strong",{parentName:"p"},"Average"),". From the same dropdown menu, select ",(0,r.kt)("strong",{parentName:"p"},"Format")," change the ",(0,r.kt)("strong",{parentName:"p"},"Numbers")," to ",(0,r.kt)("strong",{parentName:"p"},"Currency (Standard)"),":"),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("img",{alt:"&quot;&quot;",src:a(60103).Z,width:"804",height:"379"})),(0,r.kt)("p",{parentName:"li"},"Well done! You have successfully connected Tableau to ClickHouse, and you have opened up a whole world of possibilities for analyzing and visualizing your ClickHouse data."))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Tableau is great, and we love that it connects so nicely to ClickHouse! If you are new to Tableau, ",(0,r.kt)("a",{href:"https://help.tableau.com/current/pro/desktop/en-us/gettingstarted_overview.htm",target:"_blank"},"check out their documentation")," for help on building dashboards and visualizations."))),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Summary:")," You can connect Tableau to ClickHouse using the generic ODBC/JDBC ClickHouse driver, but we really like how this tool from ANALYTIKA PLUS simplifies the process of setting up the connection. If you have any issues with the connector, feel free to reach out to ANALYTIKA PLUS on ",(0,r.kt)("a",{href:"https://github.com/analytikaplus/clickhouse-tableau-connector-jdbc/issues",target:"_blank"},"GitHub"),"."))}k.isMDXComponent=!0},27797:function(t,e,a){e.Z=a.p+"assets/images/tableau_clickhousesettings-5b4bf50e3224584fcbaee7afabff606b.png"},63713:function(t,e,a){e.Z=a.p+"assets/images/tableau_connecttoserver-36e16b7e61feb9cec4949cc40cde5d2b.png"},59773:function(t,e,a){e.Z=a.p+"assets/images/tableau_newworkbook-14fee27354e38083bb1242b847a439a3.png"},57832:function(t,e,a){e.Z=a.p+"assets/images/tableau_tpcdschema-a5b9148a0a208310be6b3e767ca7a8c8.png"},19490:function(t,e,a){e.Z=a.p+"assets/images/tableau_workbook1-368282a1dc991a4edd2a1c337bd20279.png"},70303:function(t,e,a){e.Z=a.p+"assets/images/tableau_workbook2-c0006e97a92ef9dc7b0b2f56506693b0.png"},60563:function(t,e,a){e.Z=a.p+"assets/images/tableau_workbook3-508c26f9bd2c3238ac16a0e3f87bad44.png"},39384:function(t,e,a){e.Z=a.p+"assets/images/tableau_workbook4-f7e57376cdc9855e3af9e3ae1dbc603a.png"},91672:function(t,e,a){e.Z=a.p+"assets/images/tableau_workbook5-e4e402168f0836d2e07a6ac4e729cf96.png"},95051:function(t,e,a){e.Z=a.p+"assets/images/tableau_workbook6-054eaa78d35df915bf128cd8ed015245.png"},60103:function(t,e,a){e.Z=a.p+"assets/images/tableau_workbook7-7595170eaefc7cbf7c1bef32d0d75cb1.png"}}]);