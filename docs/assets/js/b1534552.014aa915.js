"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[32308],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>f});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=n.createContext({}),d=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(i),m=a,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||r;return i?n.createElement(f,o(o({ref:t},c),{},{components:i})):n.createElement(f,o({ref:t},c))}));function f(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var d=2;d<r;d++)o[d]=i[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}m.displayName="MDXCreateElement"},64167:(e,t,i)=>{i.d(t,{ZP:()=>l});var n=i(87462),a=(i(67294),i(3905));const r={toc:[]},o="wrapper";function l(e){let{components:t,...i}=e;return(0,a.kt)(o,(0,n.Z)({},r,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If you are using a dictionary with ClickHouse Cloud please use the DDL query option to create your dictionaries, and create your dictionary as user ",(0,a.kt)("inlineCode",{parentName:"p"},"default"),".\nAlso, verify the list of supported dictionary sources in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/whats-new/cloud-compatibility"},"Cloud Compatibility guide"),".")))}l.isMDXComponent=!0},36578:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=i(87462),a=(i(67294),i(3905)),r=i(64167);const o={slug:"/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-lifetime",sidebar_position:42,sidebar_label:"Dictionary Updates"},l="Dictionary Updates",s={unversionedId:"en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-lifetime",id:"en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-lifetime",title:"Dictionary Updates",description:"ClickHouse periodically updates the dictionaries. The update interval for fully downloaded dictionaries and the invalidation interval for cached dictionaries are defined in the lifetime tag in seconds.",source:"@site/docs/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-lifetime.md",sourceDirName:"en/sql-reference/dictionaries/external-dictionaries",slug:"/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-lifetime",permalink:"/docs/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-lifetime",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-lifetime.md",tags:[],version:"current",sidebarPosition:42,frontMatter:{slug:"/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-lifetime",sidebar_position:42,sidebar_label:"Dictionary Updates"},sidebar:"english",previous:{title:"Storing Dictionaries in Memory",permalink:"/docs/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-layout"},next:{title:"Dictionary Sources",permalink:"/docs/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-sources"}},d={},c=[{value:"Related Content",id:"related-content",level:2}],u={toc:c},p="wrapper";function m(e){let{components:t,...i}=e;return(0,a.kt)(p,(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"dictionary-updates"},"Dictionary Updates"),(0,a.kt)("p",null,"ClickHouse periodically updates the dictionaries. The update interval for fully downloaded dictionaries and the invalidation interval for cached dictionaries are defined in the ",(0,a.kt)("inlineCode",{parentName:"p"},"lifetime")," tag in seconds."),(0,a.kt)("p",null,"Dictionary updates (other than loading for first use) do not block queries. During updates, the old version of a dictionary is used. If an error occurs during an update, the error is written to the server log, and queries continue using the old version of dictionaries."),(0,a.kt)("p",null,"Example of settings:"),(0,a.kt)(r.ZP,{mdxType:"CloudDetails"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<dictionary>\n    ...\n    <lifetime>300</lifetime>\n    ...\n</dictionary>\n")),(0,a.kt)("p",null,"or"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DICTIONARY (...)\n...\nLIFETIME(300)\n...\n")),(0,a.kt)("p",null,"Setting ",(0,a.kt)("inlineCode",{parentName:"p"},"<lifetime>0</lifetime>")," (",(0,a.kt)("inlineCode",{parentName:"p"},"LIFETIME(0)"),") prevents dictionaries from updating."),(0,a.kt)("p",null,"You can set a time interval for updates, and ClickHouse will choose a uniformly random time within this range. This is necessary in order to distribute the load on the dictionary source when updating on a large number of servers."),(0,a.kt)("p",null,"Example of settings:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<dictionary>\n    ...\n    <lifetime>\n        <min>300</min>\n        <max>360</max>\n    </lifetime>\n    ...\n</dictionary>\n")),(0,a.kt)("p",null,"or"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"LIFETIME(MIN 300 MAX 360)\n")),(0,a.kt)("p",null,"If ",(0,a.kt)("inlineCode",{parentName:"p"},"<min>0</min>")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"<max>0</max>"),", ClickHouse does not reload the dictionary by timeout.\nIn this case, ClickHouse can reload the dictionary earlier if the dictionary configuration file was changed or the ",(0,a.kt)("inlineCode",{parentName:"p"},"SYSTEM RELOAD DICTIONARY")," command was executed."),(0,a.kt)("p",null,"When updating the dictionaries, the ClickHouse server applies different logic depending on the type of ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-sources"},"source"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"For a text file, it checks the time of modification. If the time differs from the previously recorded time, the dictionary is updated."),(0,a.kt)("li",{parentName:"ul"},"For MySQL source, the time of modification is checked using a ",(0,a.kt)("inlineCode",{parentName:"li"},"SHOW TABLE STATUS")," query (in case of MySQL 8 you need to disable meta-information caching in MySQL by ",(0,a.kt)("inlineCode",{parentName:"li"},"set global information_schema_stats_expiry=0"),")."),(0,a.kt)("li",{parentName:"ul"},"Dictionaries from other sources are updated every time by default.")),(0,a.kt)("p",null,"For other sources (ODBC, PostgreSQL, ClickHouse, etc), you can set up a query that will update the dictionaries only if they really changed, rather than each time. To do this, follow these steps:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The dictionary table must have a field that always changes when the source data is updated."),(0,a.kt)("li",{parentName:"ul"},"The settings of the source must specify a query that retrieves the changing field. The ClickHouse server interprets the query result as a row, and if this row has changed relative to its previous state, the dictionary is updated. Specify the query in the ",(0,a.kt)("inlineCode",{parentName:"li"},"<invalidate_query>")," field in the settings for the ",(0,a.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-sources"},"source"),".")),(0,a.kt)("p",null,"Example of settings:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<dictionary>\n    ...\n    <odbc>\n      ...\n      <invalidate_query>SELECT update_time FROM dictionary_source where id = 1</invalidate_query>\n    </odbc>\n    ...\n</dictionary>\n")),(0,a.kt)("p",null,"or"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"...\nSOURCE(ODBC(... invalidate_query 'SELECT update_time FROM dictionary_source where id = 1'))\n...\n")),(0,a.kt)("p",null,"For ",(0,a.kt)("inlineCode",{parentName:"p"},"Cache"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ComplexKeyCache"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"SSDCache"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"SSDComplexKeyCache")," dictionaries both synchronious and asynchronious updates are supported."),(0,a.kt)("p",null,"It is also possible for ",(0,a.kt)("inlineCode",{parentName:"p"},"Flat"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Hashed"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ComplexKeyHashed")," dictionaries to only request data that was changed after the previous update. If ",(0,a.kt)("inlineCode",{parentName:"p"},"update_field")," is specified as part of the dictionary source configuration, value of the previous update time in seconds will be added to the data request. Depends on source type (Executable, HTTP, MySQL, PostgreSQL, ClickHouse, or ODBC) different logic will be applied to ",(0,a.kt)("inlineCode",{parentName:"p"},"update_field")," before request data from an external source."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If the source is HTTP then ",(0,a.kt)("inlineCode",{parentName:"li"},"update_field")," will be added as a query parameter with the last update time as the parameter value."),(0,a.kt)("li",{parentName:"ul"},"If the source is Executable then ",(0,a.kt)("inlineCode",{parentName:"li"},"update_field")," will be added as an executable script argument with the last update time as the argument value."),(0,a.kt)("li",{parentName:"ul"},"If the source is ClickHouse, MySQL, PostgreSQL, ODBC there will be an additional part of ",(0,a.kt)("inlineCode",{parentName:"li"},"WHERE"),", where ",(0,a.kt)("inlineCode",{parentName:"li"},"update_field")," is compared as greater or equal with the last update time.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Per default, this ",(0,a.kt)("inlineCode",{parentName:"li"},"WHERE"),"-condition is checked at the highest level of the SQL-Query. Alternatively, the condition can be checked in any other ",(0,a.kt)("inlineCode",{parentName:"li"},"WHERE"),"-clause within the query using the ",(0,a.kt)("inlineCode",{parentName:"li"},"{condition}"),"-keyword. Example:")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"...\nSOURCE(CLICKHOUSE(... \n    update_field 'added_time' \n    QUERY '\n        SELECT my_arr.1 AS x, my_arr.2 AS y, creation_time \n        FROM (\n            SELECT arrayZip(x_arr, y_arr) AS my_arr, creation_time \n            FROM dictionary_source\n            WHERE {condition}\n        )'\n))\n...\n")))),(0,a.kt)("p",null,"If ",(0,a.kt)("inlineCode",{parentName:"p"},"update_field")," option is set, additional option ",(0,a.kt)("inlineCode",{parentName:"p"},"update_lag")," can be set. Value of ",(0,a.kt)("inlineCode",{parentName:"p"},"update_lag")," option is subtracted from previous update time before request updated data."),(0,a.kt)("p",null,"Example of settings:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<dictionary>\n    ...\n        <clickhouse>\n            ...\n            <update_field>added_time</update_field>\n            <update_lag>15</update_lag>\n        </clickhouse>\n    ...\n</dictionary>\n")),(0,a.kt)("p",null,"or"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"...\nSOURCE(CLICKHOUSE(... update_field 'added_time' update_lag 15))\n...\n")),(0,a.kt)("h2",{id:"related-content"},"Related Content"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://clickhouse.com/blog/faster-queries-dictionaries-clickhouse"},"Using dictionaries to accelerate queries"))))}m.isMDXComponent=!0}}]);