"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[21022],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>_});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),i=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=i(r),m=a,_=p["".concat(c,".").concat(m)]||p[m]||d[m]||s;return r?n.createElement(_,o(o({ref:t},u),{},{components:r})):n.createElement(_,o({ref:t},u))}));function _(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var i=2;i<s;i++)o[i]=r[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},29804:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>i});var n=r(87462),a=(r(67294),r(3905));const s={slug:"/en/operations/system-tables/stack_trace"},o="stack_trace",l={unversionedId:"en/operations/system-tables/stack_trace",id:"en/operations/system-tables/stack_trace",title:"stack_trace",description:"Contains stack traces of all server threads. Allows developers to introspect the server state.",source:"@site/docs/en/operations/system-tables/stack_trace.md",sourceDirName:"en/operations/system-tables",slug:"/en/operations/system-tables/stack_trace",permalink:"/docs/en/operations/system-tables/stack_trace",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/operations/system-tables/stack_trace.md",tags:[],version:"current",frontMatter:{slug:"/en/operations/system-tables/stack_trace"},sidebar:"docs",previous:{title:"settings_profiles",permalink:"/docs/en/operations/system-tables/settings_profiles"},next:{title:"storage_policies",permalink:"/docs/en/operations/system-tables/storage_policies"}},c={},i=[],u={toc:i},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"stack_trace"},"stack_trace"),(0,a.kt)("p",null,"Contains stack traces of all server threads. Allows developers to introspect the server state."),(0,a.kt)("p",null,"To analyze stack frames, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"addressToLine"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"addressToLineWithInlines"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"addressToSymbol")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"demangle")," ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/functions/introspection"},"introspection functions"),"."),(0,a.kt)("p",null,"Columns:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"thread_name")," (",(0,a.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/string"},"String"),") \u2014 Thread name."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"thread_id")," (",(0,a.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 Thread identifier."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"query_id")," (",(0,a.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/string"},"String"),") \u2014 Query identifier that can be used to get details about a query that was running from the ",(0,a.kt)("a",{parentName:"li",href:"/docs/en/operations/system-tables/query_log"},"query_log")," system table."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"trace")," (",(0,a.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/array"},"Array(UInt64)"),") \u2014 A ",(0,a.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Stack_trace"},"stack trace")," which represents a list of physical addresses where the called methods are stored.")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Check out the Knowledge Base for some handy queries, including ",(0,a.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/knowledgebase/find-expensive-queries"},"how to see what threads are currently running")," and ",(0,a.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/knowledgebase/useful-queries-for-troubleshooting"},"useful queries for troubleshooting"),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("p",null,"Enabling introspection functions:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SET allow_introspection_functions = 1;\n")),(0,a.kt)("p",null,"Getting symbols from ClickHouse object files:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"WITH arrayMap(x -> demangle(addressToSymbol(x)), trace) AS all SELECT thread_name, thread_id, query_id, arrayStringConcat(all, '\\n') AS res FROM system.stack_trace LIMIT 1 \\G;\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"Row 1:\n\u2500\u2500\u2500\u2500\u2500\u2500\nthread_name: clickhouse-serv\n\nthread_id: 686\nquery_id:  1a11f70b-626d-47c1-b948-f9c7b206395d\nres:       sigqueue\nDB::StorageSystemStackTrace::fillData(std::__1::vector<COW<DB::IColumn>::mutable_ptr<DB::IColumn>, std::__1::allocator<COW<DB::IColumn>::mutable_ptr<DB::IColumn> > >&, DB::Context const&, DB::SelectQueryInfo const&) const\nDB::IStorageSystemOneBlock<DB::StorageSystemStackTrace>::read(std::__1::vector<std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char> >, std::__1::allocator<std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char> > > > const&, DB::SelectQueryInfo const&, DB::Context const&, DB::QueryProcessingStage::Enum, unsigned long, unsigned int)\nDB::InterpreterSelectQuery::executeFetchColumns(DB::QueryProcessingStage::Enum, DB::QueryPipeline&, std::__1::shared_ptr<DB::PrewhereInfo> const&, std::__1::vector<std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char> >, std::__1::allocator<std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char> > > > const&)\nDB::InterpreterSelectQuery::executeImpl(DB::QueryPipeline&, std::__1::shared_ptr<DB::IBlockInputStream> const&, std::__1::optional<DB::Pipe>)\nDB::InterpreterSelectQuery::execute()\nDB::InterpreterSelectWithUnionQuery::execute()\nDB::executeQueryImpl(char const*, char const*, DB::Context&, bool, DB::QueryProcessingStage::Enum, bool, DB::ReadBuffer*)\nDB::executeQuery(std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char> > const&, DB::Context&, bool, DB::QueryProcessingStage::Enum, bool)\nDB::TCPHandler::runImpl()\nDB::TCPHandler::run()\nPoco::Net::TCPServerConnection::start()\nPoco::Net::TCPServerDispatcher::run()\nPoco::PooledThread::run()\nPoco::ThreadImpl::runnableEntry(void*)\nstart_thread\n__clone\n")),(0,a.kt)("p",null,"Getting filenames and line numbers in ClickHouse source code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"WITH arrayMap(x -> addressToLine(x), trace) AS all, arrayFilter(x -> x LIKE '%/dbms/%', all) AS dbms SELECT thread_name, thread_id, query_id, arrayStringConcat(notEmpty(dbms) ? dbms : all, '\\n') AS res FROM system.stack_trace LIMIT 1 \\G;\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"Row 1:\n\u2500\u2500\u2500\u2500\u2500\u2500\nthread_name: clickhouse-serv\n\nthread_id: 686\nquery_id:  cad353e7-1c29-4b2e-949f-93e597ab7a54\nres:       /lib/x86_64-linux-gnu/libc-2.27.so\n/build/obj-x86_64-linux-gnu/../src/Storages/System/StorageSystemStackTrace.cpp:182\n/build/obj-x86_64-linux-gnu/../contrib/libcxx/include/vector:656\n/build/obj-x86_64-linux-gnu/../src/Interpreters/InterpreterSelectQuery.cpp:1338\n/build/obj-x86_64-linux-gnu/../src/Interpreters/InterpreterSelectQuery.cpp:751\n/build/obj-x86_64-linux-gnu/../contrib/libcxx/include/optional:224\n/build/obj-x86_64-linux-gnu/../src/Interpreters/InterpreterSelectWithUnionQuery.cpp:192\n/build/obj-x86_64-linux-gnu/../src/Interpreters/executeQuery.cpp:384\n/build/obj-x86_64-linux-gnu/../src/Interpreters/executeQuery.cpp:643\n/build/obj-x86_64-linux-gnu/../src/Server/TCPHandler.cpp:251\n/build/obj-x86_64-linux-gnu/../src/Server/TCPHandler.cpp:1197\n/build/obj-x86_64-linux-gnu/../contrib/poco/Net/src/TCPServerConnection.cpp:57\n/build/obj-x86_64-linux-gnu/../contrib/libcxx/include/atomic:856\n/build/obj-x86_64-linux-gnu/../contrib/poco/Foundation/include/Poco/Mutex_POSIX.h:59\n/build/obj-x86_64-linux-gnu/../contrib/poco/Foundation/include/Poco/AutoPtr.h:223\n/lib/x86_64-linux-gnu/libpthread-2.27.so\n/lib/x86_64-linux-gnu/libc-2.27.so\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"See Also")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/functions/introspection"},"Introspection Functions")," \u2014 Which introspection functions are available and how to use them."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/en/operations/system-tables/trace_log"},"system.trace_log")," \u2014 Contains stack traces collected by the sampling query profiler."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/functions/array-functions#array-map"},"arrayMap")," \u2014 Description and usage example of the ",(0,a.kt)("inlineCode",{parentName:"li"},"arrayMap")," function."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/functions/array-functions#array-filter"},"arrayFilter")," \u2014 Description and usage example of the ",(0,a.kt)("inlineCode",{parentName:"li"},"arrayFilter")," function.")))}d.isMDXComponent=!0}}]);