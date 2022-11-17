"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[73675],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>p});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=u(n),p=o,k=h["".concat(s,".").concat(p)]||h[p]||d[p]||a;return n?i.createElement(k,r(r({ref:t},c),{},{components:n})):i.createElement(k,r({ref:t},c))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var u=2;u<a;u++)r[u]=n[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3056:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var i=n(87462),o=(n(67294),n(3905));const a={slug:"/en/guides/developer/full-text-search",sidebar_label:"Full-text Search with Quickwit",sidebar_position:2},r="Full-text search with ClickHouse and Quickwit",l={unversionedId:"en/guides/developer/full-text-search",id:"en/guides/developer/full-text-search",title:"Full-text search with ClickHouse and Quickwit",description:"If you are using ClickHouse and you end up in a situation wishing you had full",source:"@site/docs/en/guides/developer/full-text-search.md",sourceDirName:"en/guides/developer",slug:"/en/guides/developer/full-text-search",permalink:"/docs/en/guides/developer/full-text-search",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/guides/developer/full-text-search.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{slug:"/en/guides/developer/full-text-search",sidebar_label:"Full-text Search with Quickwit",sidebar_position:2},sidebar:"english",previous:{title:"Guides",permalink:"/docs/en/guides"},next:{title:"Updating and Deleting Data",permalink:"/docs/en/guides/developer/mutations"}},s={},u=[{value:"Installing ClickHouse",id:"installing-clickhouse",level:2},{value:"Installing Quickwit",id:"installing-quickwit",level:2},{value:"Indexing Data in QuickWit",id:"indexing-data-in-quickwit",level:2},{value:"Adding Data to ClickHouse",id:"adding-data-to-clickhouse",level:2},{value:"Full-text search within ClickHouse",id:"full-text-search-within-clickhouse",level:2},{value:"Conclusion",id:"conclusion",level:2}],c={toc:u};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"full-text-search-with-clickhouse-and-quickwit"},"Full-text search with ClickHouse and Quickwit"),(0,o.kt)("p",null,"If you are using ClickHouse and you end up in a situation wishing you had full\ntext search abilities you have to know that it is possible to use a search\nengine within ClickHouse. Quickwit is a distributed search engine. It is\ndesigned from the ground up to offer cost-efficiency and high reliability on\nlarge data sets and the good news is that Quickwit can be used within\nClickHouse. In this guide we are going to show you how you can add full text\nsearch to ClickHouse."),(0,o.kt)("h2",{id:"installing-clickhouse"},"Installing ClickHouse"),(0,o.kt)("p",null,"The  first step is to install Quickwit and ClickHouse if you don\u2019t have them\ninstalled already, follow the instruction below to install ClickHouse:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'sudo apt-get install apt-transport-https ca-certificates dirmngr\nsudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv E0C56BD4\n\necho "deb https://repo.clickhouse.com/deb/stable/ main/" | sudo tee \\\n    /etc/apt/sources.list.d/clickhouse.list\nsudo apt-get update\n\nsudo apt-get install -y clickhouse-server clickhouse-client\n\nsudo service clickhouse-server start\n')),(0,o.kt)("h2",{id:"installing-quickwit"},"Installing Quickwit"),(0,o.kt)("p",null,"Quickwit is relying on two external libraries to work correctly. You will need\nto install them before installing Quickwit"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# Quickwit depends on the following external libraries to work correctly\nsudo apt-get -y update\nsudo apt-get -y install libpq-dev libssl-dev\n")),(0,o.kt)("p",null,"Once these two libraries are installed you can go ahead and install Quickwit:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"curl -L https://install.quickwit.io | sh\n# Quickwit detects the config from CLI args or the QW_CONFIG env variable.\n# Let's set QW_CONFIG to the default config.\ncd quickwit-v*/\nexport QW_CONFIG=./config/quickwit.yaml\n")),(0,o.kt)("p",null,"You can test that Quickwit has been properly installed by running the following\ncommand:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"./quickwit --version\n")),(0,o.kt)("p",null,"Now that both ClickHouse and Quickwit are installed and run all we have to do is\nadd some data to both of them."),(0,o.kt)("h2",{id:"indexing-data-in-quickwit"},"Indexing Data in QuickWit"),(0,o.kt)("p",null,"The first thing we need to do is provide a data schema for the data we are going\nto use. We are going to use a subset of the data provided by GitHub. You can\nfind the original data here, the dataset we are going to use has slightly been\nmodified in order to be more practical to use."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"curl -o gh-archive-index-config.yaml https://datasets-documentation.s3.eu-west-3.amazonaws.com/full-text-search/gh-archive-index-config.yaml\n./quickwit index create --index-config gh-archive-index-config.yaml\n")),(0,o.kt)("p",null,"Now that the data schema is defined, let\u2019s download and index some data in\nQuickwit:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"wget https://datasets-documentation.s3.eu-west-3.amazonaws.com/full-text-search/gh-archive-2021-12-text-only.json.gz\ngunzip -c gh-archive-2021-12-text-only.json.gz | ./quickwit index ingest --index gh-archive\n")),(0,o.kt)("p",null,"You can search through your data within Quickwit:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'./quickwit index search --index gh-archive --query "clickhouse"\n')),(0,o.kt)("p",null,"But we want to use it in conjunction with ClickHouse, so in order to do so, we\nwill need to create a searcher."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"./quickwit run --service searcher\n")),(0,o.kt)("p",null,"This command will start an HTTP server with a REST API. We are now ready to\nfetch some ids with the search stream endpoint. Let's start by streaming them on\na simple query and with a CSV output format."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl "http://0.0.0.0:7280/api/v1/gh-archive/search/stream?query=clickhouse&outputFormat=csv&fastField=id"\n')),(0,o.kt)("p",null,"In the remaining of this guide we will be using the ClickHouse binary output\nformat to speed up queries using ClickHouse."),(0,o.kt)("h2",{id:"adding-data-to-clickhouse"},"Adding Data to ClickHouse"),(0,o.kt)("p",null,"First thing first, we need to connect to the ClickHouse database. Let\u2019s use the\n",(0,o.kt)("inlineCode",{parentName:"p"},"clickhouse-client")," to do it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"clickhouse-client \u2013password <PASSWORD>\n")),(0,o.kt)("p",null,"The first thing we need to do is to create a database:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'CREATE DATABASE "github";\nUSE github;\n')),(0,o.kt)("p",null,"Now we need to create the table that\u2019s going to store our data:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"CREATE TABLE github.github_events\n(\n    `id` UInt64,\n    `event_type` Enum('CommitCommentEvent' = 1, 'CreateEvent' = 2, 'DeleteEvent' = 3, 'ForkEvent' = 4, 'GollumEvent' = 5, 'IssueCommentEvent' = 6, 'IssuesEvent' = 7, 'MemberEvent' = 8, 'PublicEvent' = 9, 'PullRequestEvent' = 10, 'PullRequestReviewCommentEvent' = 11, 'PushEvent' = 12, 'ReleaseEvent' = 13, 'SponsorshipEvent' = 14, 'WatchEvent' = 15, 'GistEvent' = 16, 'FollowEvent' = 17, 'DownloadEvent' = 18, 'PullRequestReviewEvent' = 19, 'ForkApplyEvent' = 20, 'Event' = 21, 'TeamAddEvent' = 22),\n    `actor_login` LowCardinality(String),\n    `repo_name` LowCardinality(String),\n    `created_at` Int64,\n    `action` Enum('none' = 0, 'created' = 1, 'added' = 2, 'edited' = 3, 'deleted' = 4, 'opened' = 5, 'closed' = 6, 'reopened' = 7, 'assigned' = 8, 'unassigned' = 9, 'labeled' = 10, 'unlabeled' = 11, 'review_requested' = 12, 'review_request_removed' = 13, 'synchronize' = 14, 'started' = 15, 'published' = 16, 'update' = 17, 'create' = 18, 'fork' = 19, 'merged' = 20),\n    `comment_id` UInt64,\n    `body` String,\n    `ref` LowCardinality(String),\n    `number` UInt32,\n    `title` String,\n    `labels` Array(LowCardinality(String)),\n    `additions` UInt32,\n    `deletions` UInt32,\n    `commit_id` String\n)\nENGINE = MergeTree\nORDER BY (event_type, repo_name, created_at)\n")),(0,o.kt)("p",null,"We are going to add some data to ClickHouse. It\u2019s the same dataset as the one we\nhave indexed in Quickwit but this time it does not include text fields since\nthey are indexed already."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'wget https://datasets-documentation.s3.eu-west-3.amazonaws.com/full-text-search/gh-archive-2021-12.json.gz\ngunzip -c gh-archive-2021-12.json.gz | clickhouse-client --query="INSERT INTO github.github_events FORMAT JSONEachRow" --password <PASSWORD>\n')),(0,o.kt)("p",null,"Now that the data is in ClickHouse we can query them using the ",(0,o.kt)("inlineCode",{parentName:"p"},"clikchouse-client"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"SELECT\n    repo_name,\n    count() AS stars\nFROM github.github_events\nWHERE event_type = 'WatchEvent'\nGROUP BY repo_name\nORDER BY stars DESC\nLIMIT 5\n")),(0,o.kt)("h2",{id:"full-text-search-within-clickhouse"},"Full-text search within ClickHouse"),(0,o.kt)("p",null,"So we have data both in ClickHouse and in QuickWit all there is to do now is to\nquery them! The url function allows you to fetch ids using the Quickwit search\nstream:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"SELECT count(*)\nFROM url('http://127.0.0.1:7280/api/v1/gh-archive/search/stream?query=clickhouse&fastField=id&outputFormat=clickHouseRowBinary', RowBinary, 'id UInt64')\n")),(0,o.kt)("p",null,"In this query above we are counting the number of ID returned by the ClickHouse\nquery executed in QuickWit. As you can see below, it\u2019s returning the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u250c\u2500count()\u2500\u2510\n\u2502   2012  \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n1 rows in set. Elapsed: 0.010 sec. Processed 2.01 thousand rows, 16.10 KB (210.35 thousand rows/s., 1.68 MB/s.)\n")),(0,o.kt)("p",null,"We can search multiple tokens by separating them with a ",(0,o.kt)("inlineCode",{parentName:"p"},"+")," :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"SELECT count(*) FROM url('http://127.0.0.1:7280/api/v1/gh-archive/search/stream?query=clickhouse+cloki&fastField=id&outputFormat=clickHouseRowBinary', RowBinary, 'id UInt64')\n")),(0,o.kt)("p",null,"In the query above we are searching for documents containing the words\n",(0,o.kt)("inlineCode",{parentName:"p"},"ClickHouse AND cloki"),". Now we can tweak the query around to search for\n",(0,o.kt)("inlineCode",{parentName:"p"},"ClickHouse OR cloki"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"SELECT count(*)\nFROM url('http://127.0.0.1:7280/api/v1/gh-archive/search/stream?query=clickhouse+OR+cloki&fastField=id&outputFormat=clickHouseRowBinary', RowBinary, 'id UInt64')\n")),(0,o.kt)("p",null,"So the full text search is working, now let\u2019s combine it with some ",(0,o.kt)("inlineCode",{parentName:"p"},"GROUP BY"),"\nthat would be done on the ClickHouse side. Here we want to know how many rows\nmatch the words: ",(0,o.kt)("inlineCode",{parentName:"p"},"ClickHouse"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"cloki")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"quickwit")," and in which GitHub\nrepository there located in."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"SELECT\n      count(*) AS count,\n      repo_name AS repo\nFROM github.github_events\nWHERE id IN (\n    SELECT id\n    FROM url('http://127.0.0.1:7280/api/v1/gh-archive/search/stream?query=cloki+OR+clickhouse+OR+quickwit&fastField=id&outputFormat=clickHouseRowBinary', RowBinary, 'id UInt64')\n)\nGROUP BY repo ORDER BY count DESC\n")),(0,o.kt)("p",null,"And as you can see below, it is fast:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u250c\u2500count\u2500\u252c\u2500repo\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502   874 \u2502 ClickHouse/ClickHouse                             \u2502\n\u2502   112 \u2502 traceon/ClickHouse                                \u2502\n\u2502   112 \u2502 quickwit-inc/quickwit                             \u2502\n\u2502   110 \u2502 PostHog/posthog                                   \u2502\n\u2502    73 \u2502 PostHog/charts-clickhouse                         \u2502\n\u2502    64 \u2502 datafuselabs/databend                             \u2502\n\u2502    54 \u2502 airbytehq/airbyte                                 \u2502\n\u2502    53 \u2502 ClickHouse/clickhouse-jdbc                        \u2502\n\u2502    37 \u2502 getsentry/snuba                                   \u2502\n\u2502    37 \u2502 PostHog/posthog.com                               \u2502\n\u2026\n\u2026\n\u2502     1 \u2502 antrea-io/antrea                                  \u2502\n\u2502     1 \u2502 python/typeshed                                   \u2502\n\u2502     1 \u2502 Sunt-ing/database-system-readings                 \u2502\n\u2502     1 \u2502 duckdb/duckdb                                     \u2502\n\u2502     1 \u2502 open-botech/ClickHouse                            \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n195 rows in set. Elapsed: 0.518 sec. Processed 45.43 million rows, 396.87 MB (87.77 million rows/s., 766.79 MB/s.)\n")),(0,o.kt)("p",null,"The query is really fast, returning the result in 0.5 second."),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"Using Quickwit within ClickHouse gives a lot of flexibility in how you work with\nyour data, especially when your data contains textual information and you need\nto be able to search through them very quickly. You can find more information on\nhow to use Quickwit directly on their documentation."))}d.isMDXComponent=!0}}]);