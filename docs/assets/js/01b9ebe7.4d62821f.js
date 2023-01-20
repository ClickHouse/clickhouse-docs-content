"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[44058],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(n),h=r,m=c["".concat(l,".").concat(h)]||c[h]||u[h]||i;return n?a.createElement(m,s(s({ref:t},d),{},{components:n})):a.createElement(m,s({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},25470:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={slug:"/en/guides/developer/deduplication",sidebar_label:"Deduplication Strategies",sidebar_position:1},s="Row-level Deduplication Strategies for Upserts and Frequent Updates",o={unversionedId:"en/guides/developer/deduplication",id:"en/guides/developer/deduplication",title:"Row-level Deduplication Strategies for Upserts and Frequent Updates",description:"Deduplication refers to the process of removing duplicate rows of a dataset. In an OLTP database, this is done easily because each row has a unique primary key - but at the cost of slower inserts. Every inserted row needs to first be searched for and, if found, needs to be replaced.",source:"@site/docs/en/guides/developer/deduplication.md",sourceDirName:"en/guides/developer",slug:"/en/guides/developer/deduplication",permalink:"/docs/en/guides/developer/deduplication",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/guides/developer/deduplication.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/en/guides/developer/deduplication",sidebar_label:"Deduplication Strategies",sidebar_position:1},sidebar:"english",previous:{title:"Guides",permalink:"/docs/en/guides"},next:{title:"Full-text Search with Quickwit",permalink:"/docs/en/guides/developer/full-text-search"}},l={},p=[{value:"Options for deduplication",id:"options-for-deduplication",level:2},{value:"Using ReplacingMergeTree for Upserts",id:"using-replacingmergetree-for-upserts",level:2},{value:"Avoiding FINAL",id:"avoiding-final",level:3},{value:"Using CollapsingMergeTree for Updating Columns Frequently",id:"using-collapsingmergetree-for-updating-columns-frequently",level:2},{value:"Real-time Updates from Multiple Threads",id:"real-time-updates-from-multiple-threads",level:2}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"row-level-deduplication-strategies-for-upserts-and-frequent-updates"},"Row-level Deduplication Strategies for Upserts and Frequent Updates"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Deduplication")," refers to the process of ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"removing duplicate rows of a dataset")),". In an OLTP database, this is done easily because each row has a unique primary key - but at the cost of slower inserts. Every inserted row needs to first be searched for and, if found, needs to be replaced."),(0,r.kt)("p",null,"ClickHouse is built for speed when it comes to data insertion. The storage files are immutable and ClickHouse does not check for an existing primary key before inserting a row - so deduplication involves a bit more effort. This also means that deduplication is not immediate - it is ",(0,r.kt)("strong",{parentName:"p"},"eventual")," - which has a few side effects:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"At any moment in time your table can still have duplicates (rows with the same sorting key)"),(0,r.kt)("li",{parentName:"ul"},"The actual removal of duplicate rows occurs during the merging of parts"),(0,r.kt)("li",{parentName:"ul"},"Your queries need to allow for the possibility of duplicates")),(0,r.kt)("h2",{id:"options-for-deduplication"},"Options for deduplication"),(0,r.kt)("p",null,"Deduplication is implemented in ClickHouse using the following table engines:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"ReplacingMergeTree")," table engine: with this table engine, duplicate rows with the same sorting key are removed during merges. ",(0,r.kt)("inlineCode",{parentName:"p"},"ReplacingMergeTree")," is a good option for emulating upsert behavior (where you want queries to return the last row inserted).")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Collapsing rows: the ",(0,r.kt)("inlineCode",{parentName:"p"},"CollapsingMergeTree")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"VersionedCollapsingMergeTree"),' table engines use a logic where an existing row is "canceled" and a new row is inserted. They are more complex to implement than ',(0,r.kt)("inlineCode",{parentName:"p"},"ReplacingMergeTree"),", but your queries and aggregations can be simpler to write without worrying about whether or not data has been merged yet. These two table engines are useful when you need to update data frequently."))),(0,r.kt)("p",null,"We walk through both of these techniques below. For more details, check out our free on-demand ",(0,r.kt)("a",{parentName:"p",href:"https://learn.clickhouse.com/visitor_catalog_class/show/1050521/"},"Deduplication training course"),"."),(0,r.kt)("h2",{id:"using-replacingmergetree-for-upserts"},"Using ReplacingMergeTree for Upserts"),(0,r.kt)("p",null,"Let's look at a simple example where a table contains Hacker News comments with a views column representing the number of times a comment was viewed. Suppose we insert a new row when an article is published and upsert a new row once a day with the total number of views if the value increases:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE hackernews_rmt (\n    id UInt32,\n    author String,\n    comment String,\n    views UInt64\n)\nENGINE = ReplacingMergeTree\nPRIMARY KEY (author, id)\n")),(0,r.kt)("p",null,"Let's insert two rows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO hackernews_rmt VALUES\n   (1, 'ricardo', 'This is post #1', 0),\n   (2, 'ch_fan', 'This is post #2', 0)\n")),(0,r.kt)("p",null,"To update the ",(0,r.kt)("inlineCode",{parentName:"p"},"views")," column, insert a new row with the same primary key (notice the new values of the ",(0,r.kt)("inlineCode",{parentName:"p"},"views")," column):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO hackernews_rmt VALUES\n   (1, 'ricardo', 'This is post #1', 100),\n   (2, 'ch_fan', 'This is post #2', 200)\n")),(0,r.kt)("p",null,"The table now has 4 rows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM hackernews_rmt\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-response"},"\u250c\u2500id\u2500\u252c\u2500author\u2500\u2500\u252c\u2500comment\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500views\u2500\u2510\n\u2502  2 \u2502 ch_fan  \u2502 This is post #2 \u2502     0 \u2502\n\u2502  1 \u2502 ricardo \u2502 This is post #1 \u2502     0 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500id\u2500\u252c\u2500author\u2500\u2500\u252c\u2500comment\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500views\u2500\u2510\n\u2502  2 \u2502 ch_fan  \u2502 This is post #2 \u2502   200 \u2502\n\u2502  1 \u2502 ricardo \u2502 This is post #1 \u2502   100 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"The separate boxes above in the output demonstrate the two parts behind-the-scenes - this data has not been merged yet, so the duplicate rows have not been removed yet. Let's use the ",(0,r.kt)("inlineCode",{parentName:"p"},"FINAL")," keyword in the ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT")," query, which results in a logical merging of the query result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM hackernews_rmt\nFINAL\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-response"},"\u250c\u2500id\u2500\u252c\u2500author\u2500\u2500\u252c\u2500comment\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500views\u2500\u2510\n\u2502  2 \u2502 ch_fan  \u2502 This is post #2 \u2502   200 \u2502\n\u2502  1 \u2502 ricardo \u2502 This is post #1 \u2502   100 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"The result only has 2 rows, and the last row inserted is the row that gets returned."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Using ",(0,r.kt)("inlineCode",{parentName:"p"},"FINAL")," works OK if you have a small amount of data. If you are dealing with a large amount of data, using ",(0,r.kt)("inlineCode",{parentName:"p"},"FINAL")," is probably not the best option. Let's discuss a better option for finding the latest value of a column\u2026"))),(0,r.kt)("h3",{id:"avoiding-final"},"Avoiding FINAL"),(0,r.kt)("p",null,"Let's update the ",(0,r.kt)("inlineCode",{parentName:"p"},"views")," column again for both unique rows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO hackernews_rmt VALUES\n   (1, 'ricardo', 'This is post #1', 150),\n   (2, 'ch_fan', 'This is post #2', 250)\n")),(0,r.kt)("p",null,"The table has 6 rows now, because an actual merge hasn't happened yet (only the query-time merge when we used ",(0,r.kt)("inlineCode",{parentName:"p"},"FINAL"),")."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM hackernews_rmt\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-response"},"\u250c\u2500id\u2500\u252c\u2500author\u2500\u2500\u252c\u2500comment\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500views\u2500\u2510\n\u2502  2 \u2502 ch_fan  \u2502 This is post #2 \u2502   200 \u2502\n\u2502  1 \u2502 ricardo \u2502 This is post #1 \u2502   100 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500id\u2500\u252c\u2500author\u2500\u2500\u252c\u2500comment\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500views\u2500\u2510\n\u2502  2 \u2502 ch_fan  \u2502 This is post #2 \u2502     0 \u2502\n\u2502  1 \u2502 ricardo \u2502 This is post #1 \u2502     0 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500id\u2500\u252c\u2500author\u2500\u2500\u252c\u2500comment\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500views\u2500\u2510\n\u2502  2 \u2502 ch_fan  \u2502 This is post #2 \u2502   250 \u2502\n\u2502  1 \u2502 ricardo \u2502 This is post #1 \u2502   150 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"Instead of using ",(0,r.kt)("inlineCode",{parentName:"p"},"FINAL"),", let's use some business logic - we know that the ",(0,r.kt)("inlineCode",{parentName:"p"},"views")," column is always increasing, so we can select the row with the largest value using the ",(0,r.kt)("inlineCode",{parentName:"p"},"max")," function after grouping by the desired columns:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    id,\n    author,\n    comment,\n    max(views)\nFROM hackernews_rmt\nGROUP BY (id, author, comment)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-response"},"\u250c\u2500id\u2500\u252c\u2500author\u2500\u2500\u252c\u2500comment\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500max(views)\u2500\u2510\n\u2502  2 \u2502 ch_fan  \u2502 This is post #2 \u2502        250 \u2502\n\u2502  1 \u2502 ricardo \u2502 This is post #1 \u2502        150 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"Grouping as shown in the query above can actually be more efficient (in terms of query performance) than using the ",(0,r.kt)("inlineCode",{parentName:"p"},"FINAL")," keyword. The ",(0,r.kt)("inlineCode",{parentName:"p"},"FINAL")," keyword forces a query to run in a single thread, while ",(0,r.kt)("inlineCode",{parentName:"p"},"GROUP BY")," executes in parallel."),(0,r.kt)("p",null,"Our ",(0,r.kt)("a",{parentName:"p",href:"https://learn.clickhouse.com/visitor_catalog_class/show/1050521/"},"Deduplication training course")," expands on this example, including how to use a ",(0,r.kt)("inlineCode",{parentName:"p"},"version")," column with ",(0,r.kt)("inlineCode",{parentName:"p"},"ReplacingMergeTree"),"."),(0,r.kt)("h2",{id:"using-collapsingmergetree-for-updating-columns-frequently"},"Using CollapsingMergeTree for Updating Columns Frequently"),(0,r.kt)("p",null,"Updating a column involves deleting an existing row and replacing it with new values. As you have already seen, this type of mutation in ClickHouse happens ",(0,r.kt)("em",{parentName:"p"},"eventually")," - during merges. If you have a lot of rows to update, it can actually be more efficient to avoid ",(0,r.kt)("inlineCode",{parentName:"p"},"ALTER TABLE..UPDATE")," and instead just insert the new data alongside the existing data. We could add a column that denotes whether or not the data is stale or new\u2026 and there is actually a table engine that already implements this behavior very nicely, especially considering that it deletes the stale data automatically for you. Let's see how it works."),(0,r.kt)("p",null,"Suppose we track the number of views that a Hacker News comment has using an external system and every few hours, we push the data into ClickHouse. We want the old rows deleted and the new rows to represent the new state of each Hacker News comment. We can use a ",(0,r.kt)("inlineCode",{parentName:"p"},"CollapsingMergeTree")," to implement this behavior."),(0,r.kt)("p",null,"Let's define a table to store the number of views:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE hackernews_views (\n    id UInt32,\n    author String,\n    views UInt64,\n    sign Int8\n)\nENGINE = CollapsingMergeTree(sign)\nPRIMARY KEY (id, author)\n")),(0,r.kt)("p",null,"Notice the ",(0,r.kt)("inlineCode",{parentName:"p"},"hackernews_views")," table has an ",(0,r.kt)("inlineCode",{parentName:"p"},"Int8")," column named sign which is referred to as the ",(0,r.kt)("strong",{parentName:"p"},"sign")," column. The name of the sign column is arbitrary, but the ",(0,r.kt)("inlineCode",{parentName:"p"},"Int8")," data type is required, and notice the column name was passed in to the constructor of the ",(0,r.kt)("inlineCode",{parentName:"p"},"CollapsingMergeTree")," table."),(0,r.kt)("p",null,"What is the sign column of a ",(0,r.kt)("inlineCode",{parentName:"p"},"CollapsingMergeTree")," table? It represents the ",(0,r.kt)("em",{parentName:"p"},"state")," of the row, and the sign column can only be 1 or -1. Here is how it works:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If two rows have the same primary key (or sort order if that is different than the primary key), but different values of the sign column, then the last row inserted with a +1 becomes the state row and the other rows cancel each other"),(0,r.kt)("li",{parentName:"ul"},"Rows that cancel each other out are deleted during merges"),(0,r.kt)("li",{parentName:"ul"},"Rows that do not have a matching pair are kept")),(0,r.kt)("p",null,"Let's add a row to the ",(0,r.kt)("inlineCode",{parentName:"p"},"hackernews_views")," table. Since it is the only row for this primary key, we set its state to 1:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO hackernews_views VALUES\n   (123, 'ricardo', 0, 1)\n")),(0,r.kt)("p",null,"Now suppose we want to change the views column. You insert two rows: one that cancels the existing row, and one that contains the new state of the row:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO hackernews_views VALUES\n   (123, 'ricardo', 0, -1),\n   (123, 'ricardo', 150, 1)\n")),(0,r.kt)("p",null,"The table now has 3 rows with the primary key (123, 'ricardo'):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM hackernews_views\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-response"},"\u250c\u2500\u2500id\u2500\u252c\u2500author\u2500\u2500\u252c\u2500views\u2500\u252c\u2500sign\u2500\u2510\n\u2502 123 \u2502 ricardo \u2502     0 \u2502   -1 \u2502\n\u2502 123 \u2502 ricardo \u2502   150 \u2502    1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500\u2500id\u2500\u252c\u2500author\u2500\u2500\u252c\u2500views\u2500\u252c\u2500sign\u2500\u2510\n\u2502 123 \u2502 ricardo \u2502     0 \u2502    1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"Notice adding ",(0,r.kt)("inlineCode",{parentName:"p"},"FINAL")," returns the current state row:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM hackernews_views\nFINAL\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-response"},"\u250c\u2500\u2500id\u2500\u252c\u2500author\u2500\u2500\u252c\u2500views\u2500\u252c\u2500sign\u2500\u2510\n\u2502 123 \u2502 ricardo \u2502   150 \u2502    1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"But of course, using ",(0,r.kt)("inlineCode",{parentName:"p"},"FINAL")," is not recommended for large tables."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The value passed in for the ",(0,r.kt)("inlineCode",{parentName:"p"},"views")," column in our example is not really needed, nor does it have to match the current value of ",(0,r.kt)("inlineCode",{parentName:"p"},"views")," of the old row. In fact, you can cancel a row with just the primary key and a -1:"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO hackernews_views(id, author, sign) VALUES\n   (123, 'ricardo', -1)\n")))),(0,r.kt)("h2",{id:"real-time-updates-from-multiple-threads"},"Real-time Updates from Multiple Threads"),(0,r.kt)("p",null,"With a ",(0,r.kt)("inlineCode",{parentName:"p"},"CollapsingMergeTree"),' table, rows cancel each other using a sign column, and the state of a row is determined by the last row inserted. But this can be problematic if you are inserting rows from different threads where rows can be inserted out of order. Using the "last" row does not work in this situation.'),(0,r.kt)("p",null,"This is where ",(0,r.kt)("inlineCode",{parentName:"p"},"VersionedCollapsingMergeTree")," comes in handy - it collapses rows just like ",(0,r.kt)("inlineCode",{parentName:"p"},"CollapsingMergeTree"),", but instead of keeping the last row inserted, it keeps the row with the highest value of a version column that you specify."),(0,r.kt)("p",null,"Let's look at an example. Suppose we want to track the number of views of our Hacker News comments, and the data is updated frequently. We want reporting to use the latest values without forcing or waiting for merges. We start with a table similar to ",(0,r.kt)("inlineCode",{parentName:"p"},"CollapsedMergeTree"),", except we add a column to store the version of the state of the row:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE hackernews_views_vcmt (\n    id UInt32,\n    author String,\n    views UInt64,\n    sign Int8,\n    version UInt32\n)\nENGINE = VersionedCollapsingMergeTree(sign, version)\nPRIMARY KEY (id, author)\n")),(0,r.kt)("p",null,"Notice the table uses ",(0,r.kt)("inlineCode",{parentName:"p"},"VersionsedCollapsingMergeTree")," as the engine and passes in the ",(0,r.kt)("strong",{parentName:"p"},"sign column")," and a ",(0,r.kt)("strong",{parentName:"p"},"version column"),". Here is the table works:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"It deletes each pair of rows that have the same primary key and version and different sign"),(0,r.kt)("li",{parentName:"ul"},"The order that rows were inserted does not matter"),(0,r.kt)("li",{parentName:"ul"},"Note that if the version column is not a part of the primary key, ClickHouse adds it to the primary key implicitly as the last field")),(0,r.kt)("p",null,"You use the same type of logic when writing queries - group by the primary key and use clever logic to avoid rows that have been canceled but not deleted yet. Let's add some rows to the ",(0,r.kt)("inlineCode",{parentName:"p"},"hackernews_views_vcmt")," table:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO hackernews_views_vcmt VALUES\n   (1, 'ricardo', 0, 1, 1),\n   (2, 'ch_fan', 0, 1, 1),\n   (3, 'kenny', 0, 1, 1)\n")),(0,r.kt)("p",null,"Now we update two of the rows and delete one of them. To cancel a row, be sure to include the prior version number (since it is a part of the primary key):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO hackernews_views_vcmt VALUES\n   (1, 'ricardo', 0, -1, 1),\n   (1, 'ricardo', 50, 1, 2),\n   (2, 'ch_fan', 0, -1, 1),\n   (3, 'kenny', 0, -1, 1),\n   (3, 'kenny', 1000, 1, 2)\n")),(0,r.kt)("p",null,"We will run the same query as before that cleverly adds and subtracts values based on the sign column:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    id,\n    author,\n    sum(views * sign)\nFROM hackernews_views_vcmt\nGROUP BY (id, author)\nHAVING sum(sign) > 0\nORDER BY id ASC\n")),(0,r.kt)("p",null,"The result is two rows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-response"},"\u250c\u2500id\u2500\u252c\u2500author\u2500\u2500\u252c\u2500sum(multiply(views, sign))\u2500\u2510\n\u2502  1 \u2502 ricardo \u2502                         50 \u2502\n\u2502  3 \u2502 kenny   \u2502                       1000 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"Let's force a table merge:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"OPTIMIZE TABLE hackernews_views_vcmt\n")),(0,r.kt)("p",null,"There should only be two rows in the result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM hackernews_views_vcmt\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-response"},"\u250c\u2500id\u2500\u252c\u2500author\u2500\u2500\u252c\u2500views\u2500\u252c\u2500sign\u2500\u252c\u2500version\u2500\u2510\n\u2502  1 \u2502 ricardo \u2502    50 \u2502    1 \u2502       2 \u2502\n\u2502  3 \u2502 kenny   \u2502  1000 \u2502    1 \u2502       2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"VersionedCollapsingMergeTree")," table is quite handy when you want to implement deduplication while inserting rows from multiple clients and/or threads."))}u.isMDXComponent=!0}}]);