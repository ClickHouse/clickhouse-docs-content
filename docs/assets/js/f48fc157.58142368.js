"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[76545],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),d=c(n),p=i,g=d["".concat(s,".").concat(p)]||d[p]||h[p]||l;return n?a.createElement(g,o(o({ref:t},u),{},{components:n})):a.createElement(g,o({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=p;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[d]="string"==typeof e?e:i,o[1]=r;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},80400:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const l={slug:"/en/cloud/sql-console/",sidbar_label:"SQL Console"},o="The SQL Console",r={unversionedId:"en/get-started/sql-console/index",id:"en/get-started/sql-console/index",title:"The SQL Console",description:"SQL console is the fastest and easiest way to explore and query your databases in ClickHouse Cloud.  You can use the SQL console to:",source:"@site/docs/en/get-started/sql-console/index.md",sourceDirName:"en/get-started/sql-console",slug:"/en/cloud/sql-console/",permalink:"/docs/en/cloud/sql-console/",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/get-started/sql-console/index.md",tags:[],version:"current",frontMatter:{slug:"/en/cloud/sql-console/",sidbar_label:"SQL Console"}},s={},c=[{value:"Opening SQL Console from Control Plane",id:"opening-sql-console-from-control-plane",level:2},{value:"Loading the SQL Console Directly",id:"loading-the-sql-console-directly",level:3},{value:"Using the service switcher",id:"using-the-service-switcher",level:3},{value:"Exploring Tables",id:"exploring-tables",level:2},{value:"Viewing Table List and Schema Info",id:"viewing-table-list-and-schema-info",level:3},{value:"Exploring Table Data",id:"exploring-table-data",level:3},{value:"Inspecting Cell Data",id:"inspecting-cell-data",level:3},{value:"Filtering and Sorting Tables",id:"filtering-and-sorting-tables",level:2},{value:"Sorting a table",id:"sorting-a-table",level:3},{value:"Filtering a table",id:"filtering-a-table",level:3},{value:"Filtering and sorting together",id:"filtering-and-sorting-together",level:3},{value:"Creating a query from filters and sorts",id:"creating-a-query-from-filters-and-sorts",level:3},{value:"Creating and Running a Query",id:"creating-and-running-a-query",level:2},{value:"Creating a Query",id:"creating-a-query",level:3},{value:"Running a Query",id:"running-a-query",level:3},{value:"Canceling a Query",id:"canceling-a-query",level:3},{value:"Saving a Query",id:"saving-a-query",level:3},{value:"Advanced Querying Features",id:"advanced-querying-features",level:2},{value:"Searching query results",id:"searching-query-results",level:3},{value:"Adjusting pagination settings",id:"adjusting-pagination-settings",level:3},{value:"Exporting query result data",id:"exporting-query-result-data",level:3},{value:"Visualizing Query Data",id:"visualizing-query-data",level:2},{value:"Creating charts",id:"creating-charts",level:3},{value:"Customizing charts",id:"customizing-charts",level:3}],u={toc:c},d="wrapper";function h(e){let{components:t,...l}=e;return(0,i.kt)(d,(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"the-sql-console"},"The SQL Console"),(0,i.kt)("p",null,"SQL console is the fastest and easiest way to explore and query your databases in ClickHouse Cloud.  You can use the SQL console to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Connect to your ClickHouse Cloud Services"),(0,i.kt)("li",{parentName:"ul"},"View, filter, and sort table data"),(0,i.kt)("li",{parentName:"ul"},"Execute queries and visualize result data in just a few clicks"),(0,i.kt)("li",{parentName:"ul"},"Share queries with team members and collaborate more effectively.")),(0,i.kt)("h2",{id:"opening-sql-console-from-control-plane"},"Opening SQL Console from Control Plane"),(0,i.kt)("p",null,"The SQL console can be opened directly from your Service overview screen.  Simply click the \u2018Connect\u2019 button and select \u2018Open SQL console\u2019."),(0,i.kt)("p",null,"  ",(0,i.kt)("img",{alt:"Open the SQL console from a service",src:n(38313).Z,width:"1757",height:"888"})),(0,i.kt)("p",null,"The SQL Console will open in a new tab and prompt you to input your service credentials:"),(0,i.kt)("p",null,"  ",(0,i.kt)("img",{alt:"Enter credentials",src:n(66370).Z,width:"798",height:"427"})),(0,i.kt)("p",null,"After inputting your credentials, click \u2018Connect\u2019 and the SQL Console will attempt to connect and authenticate.  If this is successful, you should now be able to see the SQL Console interface:"),(0,i.kt)("p",null,"  ",(0,i.kt)("img",{alt:"Authentication success",src:n(33880).Z,width:"1756",height:"888"})),(0,i.kt)("h3",{id:"loading-the-sql-console-directly"},"Loading the SQL Console Directly"),(0,i.kt)("p",null,"The SQL Console can also be loaded directly by navigating to ",(0,i.kt)("a",{parentName:"p",href:"https://console.clickhouse.cloud."},"https://console.clickhouse.cloud."),"  After logging into your ClickHouse Cloud account, you will be presented with a list of services.  Select one and enter your service credentials on the service authentication screen:"),(0,i.kt)("p",null,"  ",(0,i.kt)("img",{alt:"Select a service",src:n(32490).Z,width:"624",height:"408"})),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If only one service exists in your organization, the SQL Console will immediately direct you to the service authentication screen")),(0,i.kt)("h3",{id:"using-the-service-switcher"},"Using the service switcher"),(0,i.kt)("p",null,"You can easily switch between your services directly from the SQL Console.  Simply open the service switcher in the top right corner of the Console and select a different service:"),(0,i.kt)("p",null,"  ",(0,i.kt)("img",{alt:"Switch services",src:n(51669).Z,width:"1757",height:"890"})),(0,i.kt)("h2",{id:"exploring-tables"},"Exploring Tables"),(0,i.kt)("h3",{id:"viewing-table-list-and-schema-info"},"Viewing Table List and Schema Info"),(0,i.kt)("p",null,"An overview of tables contained in your ClickHouse instance can be found in the left sidebar area.  Use the database selector at the top of the left bar to view the tables in a specific database"),(0,i.kt)("p",null,"  ",(0,i.kt)("img",{alt:"table list and schema",src:n(11144).Z,width:"1238",height:"731"})),(0,i.kt)("p",null,"Tables in the list can also be expanded to view columns and types"),(0,i.kt)("p",null,"  ",(0,i.kt)("img",{alt:"view columns",src:n(13410).Z,width:"1236",height:"731"})),(0,i.kt)("h3",{id:"exploring-table-data"},"Exploring Table Data"),(0,i.kt)("p",null,"Click on a table in the list to open it in a new tab.  In the Table View, data can be easily viewed, selected, and copied.  Note that structure and formatting are preserved when copy-pasting to spreadsheet applications such as Microsoft Excel and Google Sheets. You can flip between pages of table data (paginated in 30-row increments) using the navigation in the footer."),(0,i.kt)("p",null,"  ",(0,i.kt)("img",{alt:"abc",src:n(39975).Z,width:"1236",height:"730"})),(0,i.kt)("h3",{id:"inspecting-cell-data"},"Inspecting Cell Data"),(0,i.kt)("p",null,"The Cell Inspector tool can be used to view large amounts of data contained within a single cell.  To open it, right-click on a cell and select \u2018Inspect Cell\u2019.  The contents of the cell inspector can be copied by clicking the copy icon in the top right corner of the inspector contents."),(0,i.kt)("p",null,"  ",(0,i.kt)("img",{alt:"inspecting cell content",src:n(66107).Z,width:"1231",height:"727"})),(0,i.kt)("h2",{id:"filtering-and-sorting-tables"},"Filtering and Sorting Tables"),(0,i.kt)("h3",{id:"sorting-a-table"},"Sorting a table"),(0,i.kt)("p",null,"To sort a table in the SQL console, open a table and select the \u2018Sort\u2019 button in the toolbar.  This button will open a menu that will allow you to configure your sort.  You can choose a column by which to sort and configure the ordering of the sort (ascending or descending).  Select \u2018Apply\u2019 or press Enter to sort your table"),(0,i.kt)("p",null,"  ",(0,i.kt)("img",{alt:"sort descending on a column",src:n(25245).Z,width:"1233",height:"728"})),(0,i.kt)("p",null,"The SQL console also allows you to add multiple sorts to a table.  Click the \u2018Sort\u2019 button again to add another sort.  Note: sorts are applied in the order that they appear in the sort pane (top to bottom). To remove a sort, simply click the \u2018x\u2019 button next to the sort."),(0,i.kt)("h3",{id:"filtering-a-table"},"Filtering a table"),(0,i.kt)("p",null,"To filter a table in the SQL console, open a table and select the \u2018Filter\u2019 button.  Just like sorting, this button will open a menu that will allow you to configure your filter.  You can choose a column by which to filter and select the necessary criteria.  The SQL console intelligently displays filter options that correspond to the type of data contained in the column."),(0,i.kt)("p",null,"  ",(0,i.kt)("img",{alt:"filter on the radio column equal to GSM",src:n(82959).Z,width:"1233",height:"727"})),(0,i.kt)("p",null,"When you\u2019re happy with your filter, you can select \u2018Apply\u2019 to filter your data.  You can also add additional filters as shown below."),(0,i.kt)("p",null,"  ",(0,i.kt)("img",{alt:"Add a filter on range greater than 2000",src:n(63852).Z,width:"1234",height:"729"})),(0,i.kt)("p",null,"Similar to the sort functionality, click the \u2018x\u2019 button next to a filter to remove it."),(0,i.kt)("h3",{id:"filtering-and-sorting-together"},"Filtering and sorting together"),(0,i.kt)("p",null,"The SQL console allows you to filter and sort a table at the same time.  To do this, add all desired filters and sorts using the steps described above and click the \u2018Apply\u2019 button."),(0,i.kt)("p",null,"  ",(0,i.kt)("img",{alt:"Filtering and sorting together",src:n(87115).Z,width:"1234",height:"725"})),(0,i.kt)("h3",{id:"creating-a-query-from-filters-and-sorts"},"Creating a query from filters and sorts"),(0,i.kt)("p",null,"The SQL console can convert your sorts and filters directly into queries with one click.  Simply select the \u2018Create Query\u2019 button from the toolbar with the sort and filter parameters of your choosing.  After clicking \u2018Create query\u2019, a new query tab will open pre-populated with the SQL command corresponding to the data contained in your table view."),(0,i.kt)("p",null,"  ",(0,i.kt)("img",{alt:"Create a query from sorts and filters",src:n(74283).Z,width:"1234",height:"729"})),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Filters and sorts are not mandatory when using the \u2018Create Query\u2019 feature.")),(0,i.kt)("p",null,"You can learn more about querying in the SQL console by reading the (link) query documentation."),(0,i.kt)("h2",{id:"creating-and-running-a-query"},"Creating and Running a Query"),(0,i.kt)("h3",{id:"creating-a-query"},"Creating a Query"),(0,i.kt)("p",null,"There are two ways to create a new query in the SQL console."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Click the \u2018+\u2019 button in the tab bar")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Select the \u2018New Query\u2019 button from the left sidebar query list"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Creating a query",src:n(77006).Z,width:"1236",height:"730"})))),(0,i.kt)("h3",{id:"running-a-query"},"Running a Query"),(0,i.kt)("p",null,"To run a query, type your SQL command(s) into the SQL Editor and click the \u2018Run\u2019 button or use the shortcut ",(0,i.kt)("inlineCode",{parentName:"p"},"cmd / ctrl + enter"),".  To write and run multiple commands sequentially, make sure to add a semicolon after each command."),(0,i.kt)("p",null,"Query Execution Options\nBy default, clicking the run button will run all commands contained in the SQL Editor.  The SQL console supports two other query execution options:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Run selected command(s)"),(0,i.kt)("li",{parentName:"ul"},"Run command at the cursor")),(0,i.kt)("p",null,"To run selected command(s), highlight the desired command or sequence of commands and click the \u2018Run\u2019 button (or use the ",(0,i.kt)("inlineCode",{parentName:"p"},"cmd / ctrl + enter")," shortcut).  You can also select \u2018Run selected\u2019 from the SQL Editor context menu (opened by right-clicking anywhere within the editor) when a selection is present."),(0,i.kt)("p",null,"  ",(0,i.kt)("img",{alt:"run selected query",src:n(14894).Z,width:"1232",height:"728"})),(0,i.kt)("p",null,"Running the command at the current cursor position can be achieved in two ways:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Select \u2018At Cursor\u2019 from the extended run options menu (or use the corresponding ",(0,i.kt)("inlineCode",{parentName:"p"},"cmd / ctrl + shift + enter")," keyboard shortcut"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"run at cursor",src:n(11498).Z,width:"1233",height:"727"})))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Selecting \u2018Run at cursor\u2019 from the SQL Editor context menu"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"run at cursor",src:n(81230).Z,width:"1233",height:"729"})))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The command present at the cursor position will flash yellow on execution.")),(0,i.kt)("h3",{id:"canceling-a-query"},"Canceling a Query"),(0,i.kt)("p",null,"While a query is running, the \u2018Run\u2019 button in the Query Editor toolbar will be replaced with a \u2018Cancel\u2019 button.  Simply click this button or press ",(0,i.kt)("inlineCode",{parentName:"p"},"Esc")," to cancel the query.  Note: Any results that have already been returned will persist after cancellation."),(0,i.kt)("p",null,"  ",(0,i.kt)("img",{alt:"Cancel a query",src:n(31158).Z,width:"1233",height:"727"})),(0,i.kt)("h3",{id:"saving-a-query"},"Saving a Query"),(0,i.kt)("p",null,"If not previously named, your query should be called \u2018Untitled Query\u2019.  Click on the query name to change it.  Renaming a query will cause the query to be saved."),(0,i.kt)("p",null,"  ",(0,i.kt)("img",{alt:"Give a query a name",src:n(47237).Z,width:"1233",height:"727"})),(0,i.kt)("p",null,"You can also use the save button or ",(0,i.kt)("inlineCode",{parentName:"p"},"cmd / ctrl + s")," keyboard shortcut to save a query."),(0,i.kt)("p",null,"  ",(0,i.kt)("img",{alt:"Save the query",src:n(62283).Z,width:"1235",height:"728"})),(0,i.kt)("h2",{id:"advanced-querying-features"},"Advanced Querying Features"),(0,i.kt)("h3",{id:"searching-query-results"},"Searching query results"),(0,i.kt)("p",null,"After a query is executed, you can quickly search through the returned result set using the search input in the result pane. This feature assists in previewing the results of an additional ",(0,i.kt)("inlineCode",{parentName:"p"},"WHERE")," clause or simply checking to ensure that specific data is included in the result set. After inputting a value into the search input, the result pane will update and return records containing an entry that matches the inputted value. In this example, we\u2019ll look for all instances of ",(0,i.kt)("inlineCode",{parentName:"p"},"alexey-milovidov")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"github_events")," table for the ClickHouse repo:"),(0,i.kt)("p",null,"  ",(0,i.kt)("img",{alt:"Search GitHub data",src:n(217).Z,width:"1699",height:"865"})),(0,i.kt)("p",null,"Note: Any field matching the inputted value will be returned. For example, the third record in the above screenshot does not match \u2018alexey-milovidov\u2019 in the ",(0,i.kt)("inlineCode",{parentName:"p"},"actor_login")," field, but the ",(0,i.kt)("inlineCode",{parentName:"p"},"body")," field does:"),(0,i.kt)("p",null,"  ",(0,i.kt)("img",{alt:"Match in body",src:n(44038).Z,width:"1831",height:"869"})),(0,i.kt)("h3",{id:"adjusting-pagination-settings"},"Adjusting pagination settings"),(0,i.kt)("p",null,"By default, the query result pane will display every result record on a single page.  For larger result sets, it may be preferable to paginate results for easier viewing.  This can be accomplished using the pagination selector in the bottom right corner of the result pane:\n",(0,i.kt)("img",{alt:"Pagination options",src:n(33097).Z,width:"1760",height:"841"})),(0,i.kt)("p",null,"Selecting a page size will immediately apply pagination to the result set and navigation options will appear in the middle of the result pane footer"),(0,i.kt)("p",null,"  ",(0,i.kt)("img",{alt:"Pagination navigation",src:n(17124).Z,width:"1761",height:"843"})),(0,i.kt)("h3",{id:"exporting-query-result-data"},"Exporting query result data"),(0,i.kt)("p",null,"Query result sets can be easily exported to CSV format directly from the SQL console.  To do so, open the ",(0,i.kt)("inlineCode",{parentName:"p"},"\u2022\u2022\u2022")," menu on the right side of the result pane toolbar and select \u2018Download as CSV\u2019."),(0,i.kt)("p",null,"  ",(0,i.kt)("img",{alt:"Download as CSV",src:n(29525).Z,width:"1761",height:"842"})),(0,i.kt)("h2",{id:"visualizing-query-data"},"Visualizing Query Data"),(0,i.kt)("p",null,"Some data can be more easily interpreted in chart form.  You can quickly create visualizations from query result data directly from the SQL console in just a few clicks.   As an example, we\u2019ll use a query that calculates weekly statistics for NYC taxi trips:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"select\n   toStartOfWeek(pickup_datetime) as week,\n   sum(total_amount) as fare_total,\n   sum(trip_distance) as distance_total,\n   count(*) as trip_total\nfrom\n   nyc_taxi\ngroup by\n   1\norder by\n   1 asc\n")),(0,i.kt)("p",null,"  ",(0,i.kt)("img",{alt:"Tabular query results",src:n(10137).Z,width:"1762",height:"852"})),(0,i.kt)("p",null," Without visualization, these results are difficult to interpret.  Let\u2019s turn them into a chart."),(0,i.kt)("h3",{id:"creating-charts"},"Creating charts"),(0,i.kt)("p",null,"To begin building your visualization, select the \u2018Chart\u2019 option from the query result pane toolbar.  A chart configuration pane will appear:"),(0,i.kt)("p",null,"  ",(0,i.kt)("img",{alt:"Switch from query to chart",src:n(78579).Z,width:"1759",height:"850"})),(0,i.kt)("p",null,"We\u2019ll start by creating a simple bar chart tracking ",(0,i.kt)("inlineCode",{parentName:"p"},"trip_total")," by ",(0,i.kt)("inlineCode",{parentName:"p"},"week"),".  To accomplish this, we\u2019ll drag the ",(0,i.kt)("inlineCode",{parentName:"p"},"week")," field to the x-axis and the ",(0,i.kt)("inlineCode",{parentName:"p"},"trip_total")," field to the y-axis:"),(0,i.kt)("p",null,"  ",(0,i.kt)("img",{alt:"Trip total by week",src:n(59743).Z,width:"1758",height:"850"})),(0,i.kt)("p",null,"Most chart types support multiple fields on numeric axes.  To demonstrate, we\u2019ll drag the fare_total field onto the y-axis:"),(0,i.kt)("p",null,"  ",(0,i.kt)("img",{alt:"Bar chart",src:n(73471).Z,width:"1199",height:"405"})),(0,i.kt)("h3",{id:"customizing-charts"},"Customizing charts"),(0,i.kt)("p",null,"The SQL console supports ten chart types that can be selected from the chart type selector in the chart configuration pane.  For example, we can easily change the previous chart type from Bar to an Area:"),(0,i.kt)("p",null,"  ",(0,i.kt)("img",{alt:"Change from Bar chart to Area",src:n(84969).Z,width:"1761",height:"854"})),(0,i.kt)("p",null,"Chart titles match the name of the query supplying the data.  Updating the name of the query will cause the Chart title to update as well:"),(0,i.kt)("p",null,"  ",(0,i.kt)("img",{alt:"Update query name",src:n(5424).Z,width:"1760",height:"849"})),(0,i.kt)("p",null,"A number of more advanced chart characteristics can also be adjusted in the \u2018Advanced\u2019 section of the chart configuration pane.  To begin, we\u2019ll adjust the following settings:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Subtitle"),(0,i.kt)("li",{parentName:"ul"},"Axis titles"),(0,i.kt)("li",{parentName:"ul"},"Label orientation for the x-axis")),(0,i.kt)("p",null,"Our chart will be updated accordingly:"),(0,i.kt)("p",null,"  ",(0,i.kt)("img",{alt:"Update subtitle etc.",src:n(81877).Z,width:"1446",height:"832"})),(0,i.kt)("p",null,"In some scenarios, it may be necessary to adjust the axis scales for each field independently. This can also be accomplished in the \u2018Advanced\u2019 section of the chart configuration pane by specifying min and max values for an axis range.  As an example, the above chart looks good, but in order to demonstrate the correlation between our ",(0,i.kt)("inlineCode",{parentName:"p"},"trip_total")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"fare_total")," fields, the axis ranges need some adjustment:"),(0,i.kt)("p",null,"  ",(0,i.kt)("img",{alt:"Adjust axis scale",src:n(49075).Z,width:"1445",height:"835"})))}h.isMDXComponent=!0},39975:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/abc-96d8527ac5e5505cba7624da1daf57c2.png"},63852:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/add-more-filters-1f682720c736e1248e375e83ed3f6cd7.png"},49075:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/adjust-axis-scale-f9d2e1bda759e00dd08b852f68cbd034.png"},33880:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/authentication-success-b15490d6fcbc56d2e40d279d8a15c3ac.png"},73471:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/bar-chart-0bfff5d4d1ea4ab305aff8107bde90dd.png"},31158:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/cancel-a-query-0d81ed8b0629991e4f84840e8c853048.png"},84969:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/change-from-bar-to-area-f04d51639933454b7a237dd2ed06a969.png"},74283:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/create-a-query-from-sorts-and-filters-e475e62f33dfb4a4f3a9818359dba880.png"},77006:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/creating-a-query-ed6aac144f217d978a23091f1e57b488.png"},29525:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/download-as-csv-a72144f2146aa08a5016088f84d1653a.png"},66370:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/enter-credentials-5923a45c32b12767f46afa814c3eb178.png"},82959:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/filter-on-radio-column-equal-gsm-4fcdd9d87a424ea943187ab9b9d80522.png"},87115:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/filtering-and-sorting-together-38856652fd50bc280651e72082f2d7bf.png"},47237:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/give-a-query-a-name-ed75a663c2ec498e1f8c78e8d83214f6.png"},66107:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/inspecting-cell-content-63692e6af8e2667230e7be72fdd3736d.png"},44038:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/match-in-body-60a2d67bc335e10c0cfd62257755f33e.png"},38313:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/open-sql-console-from-service-45849c7ce4c8882df3ceb36d273a024b.png"},17124:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pagination-nav-9ac159d1e83b97eb08c1dbc918895b34.png"},33097:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pagination-79e102a8104014a5133b3141fe175dce.png"},11498:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/run-at-cursor-2-1e039323c26bfe8e0008112087291e69.png"},81230:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/run-at-cursor-ede28bb468b63179f51fe458f363471f.png"},14894:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/run-selected-query-9819419299d157fd058dd44db3f7fbbb.png"},62283:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/save-the-query-8606f3e4dd8121d04bba64065366371a.png"},217:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/search-github-bad4edebbb108abe3af8665d63dc88f7.png"},32490:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/select-a-service-9304b1dbae1cb91413752f746a38d4fd.png"},25245:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/sort-descending-on-column-713158caf604a24ee0f9ea23e1fb727d.png"},78579:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/switch-from-query-to-chart-4ff10dfd29497e2e0d67097c7bf9c56c.png"},51669:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/switch-services-040df358bc93c7c88f407bed863a1818.png"},11144:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/table-list-and-schema-03fbffb93e0e045fe34b9091b1d89041.png"},10137:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/tabular-query-results-344b85c15d2640898d566b58003144c9.png"},59743:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/trip-total-by-week-0dd2e4d9b193ec7b99a5e049c242dc9b.png"},5424:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/update-query-name-608f57a586974c0c4a17738fe36bb704.png"},81877:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/update-subtitle-etc-dbc7864108b10b5fdfcca8f3f1a4c6bd.png"},13410:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/view-columns-79ef9a92ff595309cc8122db75495206.png"}}]);