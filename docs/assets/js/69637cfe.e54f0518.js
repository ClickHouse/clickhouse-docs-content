"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[76247],{3905:(e,n,o)=>{o.d(n,{Zo:()=>u,kt:()=>m});var t=o(67294);function r(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function l(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function a(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?l(Object(o),!0).forEach((function(n){r(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function s(e,n){if(null==e)return{};var o,t,r=function(e,n){if(null==e)return{};var o,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)o=l[t],n.indexOf(o)>=0||(r[o]=e[o]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)o=l[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var i=t.createContext({}),c=function(e){var n=t.useContext(i),o=n;return e&&(o="function"==typeof e?e(n):a(a({},n),e)),o},u=function(e){var n=c(e.components);return t.createElement(i.Provider,{value:n},e.children)},d="mdxType",_={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var o=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(o),p=r,m=d["".concat(i,".").concat(p)]||d[p]||_[p]||l;return o?t.createElement(m,a(a({ref:n},u),{},{components:o})):t.createElement(m,a({ref:n},u))}));function m(e,n){var o=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=o.length,a=new Array(l);a[0]=p;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[d]="string"==typeof e?e:r,a[1]=s;for(var c=2;c<l;c++)a[c]=o[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,o)}p.displayName="MDXCreateElement"},86845:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>_,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var t=o(87462),r=(o(67294),o(3905));const l={date:new Date("2023-03-24T00:00:00.000Z")},a="How to check what code is currently running on a server?",s={permalink:"/docs/knowledgebase/which-processes-are-currently-running",source:"@site/knowledgebase/which-processes-are-currently-running.md",title:"How to check what code is currently running on a server?",description:"ClickHouse has a built-in debugger and introspection capabilities. For example, you can get the stack traces of every server's thread at runtime by querying the system.stack_trace table:",date:"2023-03-24T00:00:00.000Z",formattedDate:"March 24, 2023",tags:[],readingTime:2.13,hasTruncateMarker:!1,authors:[],frontMatter:{date:"2023-03-24T00:00:00.000Z"},prevItem:{title:"How can I do partitioned writes by year and month on S3?",permalink:"/docs/knowledgebase/s3_export_data_year_month_folders"},nextItem:{title:"How do I export data from ClickHouse to a file?",permalink:"/docs/knowledgebase/file-export"}},i={authorsImageUrls:[]},c=[],u={toc:c},d="wrapper";function _(e){let{components:n,...o}=e;return(0,r.kt)(d,(0,t.Z)({},u,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"ClickHouse has a built-in debugger and introspection capabilities. For example, you can get the stack traces of every server's thread at runtime by querying the ",(0,r.kt)("inlineCode",{parentName:"p"},"system.stack_trace")," table:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    count(),\n    arrayStringConcat(arrayMap(x -> concat(demangle(addressToSymbol(x)), '\\n    ', addressToLine(x)), trace), '\\n') AS sym\nFROM system.stack_trace\nGROUP BY trace\nORDER BY count() DESC\nLIMIT 10\nFORMAT Vertical\nSETTINGS allow_introspection_functions = 1;\n")),(0,r.kt)("p",null,"The query result will show the locations in the ClickHouse source code where the threads are running or waiting. (You will need to set ",(0,r.kt)("inlineCode",{parentName:"p"},"allow_introspection_functions")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," to enable the ",(0,r.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/sql-reference/functions/introspection"},"introspection functions"),".) The response looks like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-response"},"Row 1:\n\u2500\u2500\u2500\u2500\u2500\u2500\ncount(): 144\nsym:     pthread_cond_wait\n\nDB::BackgroundSchedulePool::threadFunction()\n    /usr/bin/clickhouse\n\n    /usr/bin/clickhouse\nThreadPoolImpl<std::__1::thread>::worker(std::__1::__list_iterator<std::__1::thread, void*>)\n    /usr/bin/clickhouse\n\n    /usr/bin/clickhouse\n\n\nclone\n\n\nRow 2:\n\u2500\u2500\u2500\u2500\u2500\u2500\ncount(): 80\nsym:     pthread_cond_wait\n\nstd::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&)\n    /usr/bin/clickhouse\nDB::MergeTreeBackgroundExecutor<DB::OrdinaryRuntimeQueue>::threadFunction()\n    /usr/bin/clickhouse\nThreadPoolImpl<ThreadFromGlobalPoolImpl<false>>::worker(std::__1::__list_iterator<ThreadFromGlobalPoolImpl<false>, void*>)\n    /usr/bin/clickhouse\nvoid std::__1::__function::__policy_invoker<void ()>::__call_impl<std::__1::__function::__default_alloc_func<ThreadFromGlobalPoolImpl<false>::ThreadFromGlobalPoolImpl<void ThreadPoolImpl<ThreadFromGlobalPoolImpl<false>>::scheduleImpl<void>(std::__1::function<void ()>, long, std::__1::optional<unsigned long>, bool)::'lambda0'()>(void&&)::'lambda'(), void ()>>(std::__1::__function::__policy_storage const*)\n    /usr/bin/clickhouse\nThreadPoolImpl<std::__1::thread>::worker(std::__1::__list_iterator<std::__1::thread, void*>)\n    /usr/bin/clickhouse\n\n    /usr/bin/clickhouse\n\n\nclone\n\n\nRow 3:\n\u2500\u2500\u2500\u2500\u2500\u2500\ncount(): 55\nsym:     pthread_cond_wait\n\nThreadPoolImpl<ThreadFromGlobalPoolImpl<false>>::worker(std::__1::__list_iterator<ThreadFromGlobalPoolImpl<false>, void*>)\n    /usr/bin/clickhouse\nvoid std::__1::__function::__policy_invoker<void ()>::__call_impl<std::__1::__function::__default_alloc_func<ThreadFromGlobalPoolImpl<false>::ThreadFromGlobalPoolImpl<void ThreadPoolImpl<ThreadFromGlobalPoolImpl<false>>::scheduleImpl<void>(std::__1::function<void ()>, long, std::__1::optional<unsigned long>, bool)::'lambda0'()>(void&&)::'lambda'(), void ()>>(std::__1::__function::__policy_storage const*)\n    /usr/bin/clickhouse\nThreadPoolImpl<std::__1::thread>::worker(std::__1::__list_iterator<std::__1::thread, void*>)\n    /usr/bin/clickhouse\n\n    /usr/bin/clickhouse\n\n\nclone\n\n\nRow 4:\n\u2500\u2500\u2500\u2500\u2500\u2500\ncount(): 16\nsym:\n\nDB::AsynchronousInsertQueue::processBatchDeadlines(unsigned long)\n    /usr/bin/clickhouse\n\n    /usr/bin/clickhouse\nThreadPoolImpl<std::__1::thread>::worker(std::__1::__list_iterator<std::__1::thread, void*>)\n    /usr/bin/clickhouse\n\n    /usr/bin/clickhouse\n\n\nclone\n\n\nRow 5:\n\u2500\u2500\u2500\u2500\u2500\u2500\ncount(): 16\nsym:     pthread_cond_wait\n\nstd::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&)\n    /usr/bin/clickhouse\nDB::MergeTreeBackgroundExecutor<DB::MergeMutateRuntimeQueue>::threadFunction()\n    /usr/bin/clickhouse\nThreadPoolImpl<ThreadFromGlobalPoolImpl<false>>::worker(std::__1::__list_iterator<ThreadFromGlobalPoolImpl<false>, void*>)\n    /usr/bin/clickhouse\nvoid std::__1::__function::__policy_invoker<void ()>::__call_impl<std::__1::__function::__default_alloc_func<ThreadFromGlobalPoolImpl<false>::ThreadFromGlobalPoolImpl<void ThreadPoolImpl<ThreadFromGlobalPoolImpl<false>>::scheduleImpl<void>(std::__1::function<void ()>, long, std::__1::optional<unsigned long>, bool)::'lambda0'()>(void&&)::'lambda'(), void ()>>(std::__1::__function::__policy_storage const*)\n    /usr/bin/clickhouse\nThreadPoolImpl<std::__1::thread>::worker(std::__1::__list_iterator<std::__1::thread, void*>)\n    /usr/bin/clickhouse\n\n    /usr/bin/clickhouse\n\n\nclone\n\n\nRow 6:\n\u2500\u2500\u2500\u2500\u2500\u2500\ncount(): 10\nsym:     poll\n\nPoco::Net::SocketImpl::pollImpl(Poco::Timespan&, int)\n    /usr/bin/clickhouse\nPoco::Net::SocketImpl::poll(Poco::Timespan const&, int)\n    /usr/bin/clickhouse\nPoco::Net::TCPServer::run()\n    /usr/bin/clickhouse\nPoco::ThreadImpl::runnableEntry(void*)\n    /usr/bin/clickhouse\n\n\nclone\n\n\nRow 7:\n\u2500\u2500\u2500\u2500\u2500\u2500\ncount(): 9\nsym:     pthread_cond_wait\n\nThreadPoolImpl<std::__1::thread>::worker(std::__1::__list_iterator<std::__1::thread, void*>)\n    /usr/bin/clickhouse\n\n    /usr/bin/clickhouse\n\n\nclone\n\n\nRow 8:\n\u2500\u2500\u2500\u2500\u2500\u2500\ncount(): 7\nsym:     poll\n\nPoco::Net::SocketImpl::pollImpl(Poco::Timespan&, int)\n    /usr/bin/clickhouse\nPoco::Net::SocketImpl::poll(Poco::Timespan const&, int)\n    /usr/bin/clickhouse\nDB::ReadBufferFromPocoSocket::poll(unsigned long) const\n    /usr/bin/clickhouse\nDB::TCPHandler::runImpl()\n    /usr/bin/clickhouse\nDB::TCPHandler::run()\n    /usr/bin/clickhouse\n\n    /usr/bin/clickhouse\nPoco::Net::TCPServerConnection::start()\n    /usr/bin/clickhouse\nPoco::Net::TCPServerDispatcher::run()\n    /usr/bin/clickhouse\nPoco::PooledThread::run()\n    /usr/bin/clickhouse\nPoco::ThreadImpl::runnableEntry(void*)\n    /usr/bin/clickhouse\n\n\nclone\n\n\nRow 9:\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\ncount(): 3\nsym:     pthread_cond_wait\n\nPoco::EventImpl::waitImpl()\n    /usr/bin/clickhouse\nDB::DDLWorker::runCleanupThread()\n    /usr/bin/clickhouse\nvoid std::__1::__function::__policy_invoker<void ()>::__call_impl<std::__1::__function::__default_alloc_func<ThreadFromGlobalPoolImpl<true>::ThreadFromGlobalPoolImpl<void (DB::DDLWorker::*)(), DB::DDLWorker*>(void (DB::DDLWorker::*&&)(), DB::DDLWorker*&&)::'lambda'(), void ()>>(std::__1::__function::__policy_storage const*)\n    /usr/bin/clickhouse\nThreadPoolImpl<std::__1::thread>::worker(std::__1::__list_iterator<std::__1::thread, void*>)\n    /usr/bin/clickhouse\n\n    /usr/bin/clickhouse\n\n\nclone\n\n\nRow 10:\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\ncount(): 3\nsym:     pthread_cond_wait\n\nPoco::EventImpl::waitImpl()\n    /usr/bin/clickhouse\nDB::DDLWorker::runMainThread()\n    /usr/bin/clickhouse\nvoid std::__1::__function::__policy_invoker<void ()>::__call_impl<std::__1::__function::__default_alloc_func<ThreadFromGlobalPoolImpl<true>::ThreadFromGlobalPoolImpl<void (DB::DDLWorker::*)(), DB::DDLWorker*>(void (DB::DDLWorker::*&&)(), DB::DDLWorker*&&)::'lambda'(), void ()>>(std::__1::__function::__policy_storage const*)\n    /usr/bin/clickhouse\nThreadPoolImpl<std::__1::thread>::worker(std::__1::__list_iterator<std::__1::thread, void*>)\n    /usr/bin/clickhouse\n\n    /usr/bin/clickhouse\n\n\nclone\n\n\n10 rows in set. Elapsed: 0.026 sec.\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If you installed ClickHouse from a ",(0,r.kt)("strong",{parentName:"p"},".deb/.rpm/.tgz")," you can also install the package with the debug info to see the line numbers from the source code:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install clickhouse-common-static-dbg\n")),(0,r.kt)("p",{parentName:"admonition"},"If you've installed ClickHouse as a single-binary, it already contains the debug info.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"For more high-level information, check out some of these other system tables:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://clickhouse.com/docs/en/operations/system-tables/processes"},"system.processes")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://clickhouse.com/docs/en/operations/system-tables/query_log"},"system.query_log")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://clickhouse.com/docs/en/operations/system-tables/metric_log"},"system.metric_log")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://clickhouse.com/docs/en/operations/system-tables/asynchronous_metric_log"},"system.asynchronous_metric_log")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://clickhouse.com/docs/en/operations/system-tables/trace_log"},"system.trace_log")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://clickhouse.com/docs/en/operations/system-tables/processors_profile_log"},"system.processor_profile_log"))),(0,r.kt)("p",{parentName:"admonition"},"And there is handy info in the ",(0,r.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/system-tables"},"other system tables")," also.")))}_.isMDXComponent=!0}}]);