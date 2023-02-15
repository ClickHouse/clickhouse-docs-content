"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[36318],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>k});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(t),d=i,k=m["".concat(s,".").concat(d)]||m[d]||c[d]||l;return t?a.createElement(k,r(r({ref:n},u),{},{components:t})):a.createElement(k,r({ref:n},u))}));function k(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,r=new Array(l);r[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[m]="string"==typeof e?e:i,r[1]=o;for(var p=2;p<l;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},60625:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=t(87462),i=(t(67294),t(3905));const l={slug:"/en/engines/table-engines/special/executable",sidebar_position:40,sidebar_label:"Executable"},r="Executable and ExecutablePool Table Engines",o={unversionedId:"en/engines/table-engines/special/executable",id:"en/engines/table-engines/special/executable",title:"Executable and ExecutablePool Table Engines",description:"The Executable and ExecutablePool table engines allow you to define a table whose rows are generated from a script that you define (by writing rows to stdout). The executable script is stored in the users_scripts directory and can read data from any source.",source:"@site/docs/en/engines/table-engines/special/executable.md",sourceDirName:"en/engines/table-engines/special",slug:"/en/engines/table-engines/special/executable",permalink:"/docs/en/engines/table-engines/special/executable",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/engines/table-engines/special/executable.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{slug:"/en/engines/table-engines/special/executable",sidebar_position:40,sidebar_label:"Executable"},sidebar:"english",previous:{title:"Merge",permalink:"/docs/en/engines/table-engines/special/merge"},next:{title:"File",permalink:"/docs/en/engines/table-engines/special/file"}},s={},p=[{value:"Creating an Executable Table",id:"creating-an-executable-table",level:2},{value:"Passing Query Results to a Script",id:"passing-query-results-to-a-script",level:2},{value:"Creating an ExecutablePool Table",id:"creating-an-executablepool-table",level:2}],u={toc:p},m="wrapper";function c(e){let{components:n,...t}=e;return(0,i.kt)(m,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"executable-and-executablepool-table-engines"},"Executable and ExecutablePool Table Engines"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Executable")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ExecutablePool")," table engines allow you to define a table whose rows are generated from a script that you define (by writing rows to ",(0,i.kt)("strong",{parentName:"p"},"stdout"),"). The executable script is stored in the ",(0,i.kt)("inlineCode",{parentName:"p"},"users_scripts")," directory and can read data from any source."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Executable")," tables: the script is run on every query"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ExecutablePool")," tables: maintains a pool of persistent processes, and takes processes from the pool for reads")),(0,i.kt)("p",null,"You can optionally include one or more input queries that stream their results to ",(0,i.kt)("strong",{parentName:"p"},"stdin")," for the script to read."),(0,i.kt)("h2",{id:"creating-an-executable-table"},"Creating an Executable Table"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Executable")," table engine requires two parameters: the name of the script and the format of the incoming data. You can optionally pass in one or more input queries:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"Executable(script_name, format, [input_query...])\n")),(0,i.kt)("p",null,"Here are the relevant settings for an ",(0,i.kt)("inlineCode",{parentName:"p"},"Executable")," table:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"send_chunk_header"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Description: Send the number of rows in each chunk before sending a chunk to process. This setting can help to write your script in a more efficient way to preallocate some resources"),(0,i.kt)("li",{parentName:"ul"},"Default value: false"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"command_termination_timeout"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Description: Command termination timeout in seconds"),(0,i.kt)("li",{parentName:"ul"},"Default value: 10"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"command_read_timeout"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Description: Timeout for reading data from command stdout in milliseconds"),(0,i.kt)("li",{parentName:"ul"},"Default value: 10000"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"command_write_timeout"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Description: Timeout for writing data to command stdin in milliseconds"),(0,i.kt)("li",{parentName:"ul"},"Default value: 10000")))),(0,i.kt)("p",null,"Let's look at an example. The following Python script is named ",(0,i.kt)("inlineCode",{parentName:"p"},"my_script.py")," and is saved in the ",(0,i.kt)("inlineCode",{parentName:"p"},"user_scripts")," folder. It reads in a number ",(0,i.kt)("inlineCode",{parentName:"p"},"i")," and prints ",(0,i.kt)("inlineCode",{parentName:"p"},"i")," random strings, with each string preceded by a number that is separated by a tab:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"#!/usr/bin/python3\n\nimport sys\nimport string\nimport random\n\ndef main():\n\n    # Read input value\n    for number in sys.stdin:\n        i = int(number)\n\n        # Generate some random rows\n        for id in range(0, i):\n            letters = string.ascii_letters\n            random_string =  ''.join(random.choices(letters ,k=10))\n            print(str(id) + '\\t' + random_string + '\\n', end='')\n\n        # Flush results to stdout\n        sys.stdout.flush()\n\nif __name__ == \"__main__\":\n    main()\n")),(0,i.kt)("p",null,"The following ",(0,i.kt)("inlineCode",{parentName:"p"},"my_executable_table")," is built from the output of ",(0,i.kt)("inlineCode",{parentName:"p"},"my_script.py"),", which will generate 10 random strings everytime you run a ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT")," from ",(0,i.kt)("inlineCode",{parentName:"p"},"my_executable_table"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE my_executable_table (\n   x UInt32,\n   y String\n)\nENGINE = Executable('my_script.py', TabSeparated, (SELECT 10))\n")),(0,i.kt)("p",null,"Creating the table returns immediately and does not invoke the script. Querying ",(0,i.kt)("inlineCode",{parentName:"p"},"my_executable_table")," causes the script to be invoked:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM my_executable_table\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-response"},"\u250c\u2500x\u2500\u252c\u2500y\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 0 \u2502 BsnKBsNGNH \u2502\n\u2502 1 \u2502 mgHfBCUrWM \u2502\n\u2502 2 \u2502 iDQAVhlygr \u2502\n\u2502 3 \u2502 uNGwDuXyCk \u2502\n\u2502 4 \u2502 GcFdQWvoLB \u2502\n\u2502 5 \u2502 UkciuuOTVO \u2502\n\u2502 6 \u2502 HoKeCdHkbs \u2502\n\u2502 7 \u2502 xRvySxqAcR \u2502\n\u2502 8 \u2502 LKbXPHpyDI \u2502\n\u2502 9 \u2502 zxogHTzEVV \u2502\n\u2514\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("h2",{id:"passing-query-results-to-a-script"},"Passing Query Results to a Script"),(0,i.kt)("p",null,"Users of the Hacker News website leave comments. Python contains a natural language processing toolkit (",(0,i.kt)("inlineCode",{parentName:"p"},"nltk"),") with a ",(0,i.kt)("inlineCode",{parentName:"p"},"SentimentIntensityAnalyzer")," for determining if comments are positive, negative, or neutral - including assigning a value between -1 (a very negative comment) and 1 (a very positive comment). Let's create an ",(0,i.kt)("inlineCode",{parentName:"p"},"Executable")," table that computes the sentiment of Hacker News comments using ",(0,i.kt)("inlineCode",{parentName:"p"},"nltk"),"."),(0,i.kt)("p",null,"This example uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"hackernews")," table described ",(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/engines/table-engines/mergetree-family/invertedindexes/#full-text-search-of-the-hacker-news-dataset"},"here"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"hackernews")," table includes an ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," column of type ",(0,i.kt)("inlineCode",{parentName:"p"},"UInt64")," and a ",(0,i.kt)("inlineCode",{parentName:"p"},"String")," column named ",(0,i.kt)("inlineCode",{parentName:"p"},"comment"),". Let's start by defining the ",(0,i.kt)("inlineCode",{parentName:"p"},"Executable")," table:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE sentiment (\n   id UInt64,\n   sentiment Float32\n)\nENGINE = Executable(\n    'sentiment.py',\n    TabSeparated,\n    (SELECT id, comment FROM hackernews WHERE id > 0 AND comment != '' LIMIT 20)\n);\n")),(0,i.kt)("p",null,"Some comments about the ",(0,i.kt)("inlineCode",{parentName:"p"},"sentiment")," table:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The file ",(0,i.kt)("inlineCode",{parentName:"li"},"sentiment.py")," is saved in the ",(0,i.kt)("inlineCode",{parentName:"li"},"user_scripts")," folder (the default folder of the ",(0,i.kt)("inlineCode",{parentName:"li"},"user_scripts_path")," setting)"),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"TabSeparated")," format means our Python script needs to generate rows of raw data that contain tab-separated values"),(0,i.kt)("li",{parentName:"ul"},"The query selects two columns from ",(0,i.kt)("inlineCode",{parentName:"li"},"hackernews"),". The Python script will need to parse out those column values from the incoming rows")),(0,i.kt)("p",null,"Here is the defintion of ",(0,i.kt)("inlineCode",{parentName:"p"},"sentiment.py"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"#!/usr/local/bin/python3.9\n\nimport sys\nimport nltk\nfrom nltk.sentiment import SentimentIntensityAnalyzer\n\ndef main():\n    sentiment_analyzer = SentimentIntensityAnalyzer()\n\n    while True:\n        try:\n            row = sys.stdin.readline()\n            if row == '':\n                break\n\n            split_line = row.split(\"\\t\")\n\n            id = str(split_line[0])\n            comment = split_line[1]\n\n            score = sentiment_analyzer.polarity_scores(comment)['compound']\n            print(id + '\\t' + str(score) + '\\n', end='')\n            sys.stdout.flush()\n        except BaseException as x:\n            break\n\nif __name__ == \"__main__\":\n    main()\n")),(0,i.kt)("p",null,"Some comments about our Python script:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For this to work, you will need to run ",(0,i.kt)("inlineCode",{parentName:"li"},"nltk.downloader.download('vader_lexicon')"),". This could have been placed in the script, but then it would have been downloaded every time a query was executed on the ",(0,i.kt)("inlineCode",{parentName:"li"},"sentiment")," table - which is not efficient"),(0,i.kt)("li",{parentName:"ul"},"Each value of ",(0,i.kt)("inlineCode",{parentName:"li"},"row")," is going to be a row in the result set of ",(0,i.kt)("inlineCode",{parentName:"li"},"SELECT id, comment FROM hackernews WHERE id > 0 AND comment != '' LIMIT 20")),(0,i.kt)("li",{parentName:"ul"},"The incoming row is tab-separated, so we parse out the ",(0,i.kt)("inlineCode",{parentName:"li"},"id")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"comment")," using the Python ",(0,i.kt)("inlineCode",{parentName:"li"},"split")," function"),(0,i.kt)("li",{parentName:"ul"},"The result of ",(0,i.kt)("inlineCode",{parentName:"li"},"polarity_scores")," is a JSON object with a handful of values. We decided to just grab the ",(0,i.kt)("inlineCode",{parentName:"li"},"compound")," value of this JSON object"),(0,i.kt)("li",{parentName:"ul"},"Recall that the ",(0,i.kt)("inlineCode",{parentName:"li"},"sentiment")," table in ClickHouse uses the ",(0,i.kt)("inlineCode",{parentName:"li"},"TabSeparated")," format and contains two columns, so our ",(0,i.kt)("inlineCode",{parentName:"li"},"print")," function separates those columns with a tab")),(0,i.kt)("p",null,"Every time you write a query that selects rows from the ",(0,i.kt)("inlineCode",{parentName:"p"},"sentiment")," table, the ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT id, comment FROM hackernews WHERE id > 0 AND comment != '' LIMIT 20")," query is executed and the result is passed to ",(0,i.kt)("inlineCode",{parentName:"p"},"sentiment.py"),". Let's test it out:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM sentiment\n")),(0,i.kt)("p",null,"The response looks like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-response"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500id\u2500\u252c\u2500sentiment\u2500\u2510\n\u2502  7398199 \u2502    0.4404 \u2502\n\u2502 21640317 \u2502    0.1779 \u2502\n\u2502 21462000 \u2502         0 \u2502\n\u2502 25168863 \u2502         0 \u2502\n\u2502 25168978 \u2502   -0.1531 \u2502\n\u2502 25169359 \u2502         0 \u2502\n\u2502 25169394 \u2502   -0.9231 \u2502\n\u2502 25169766 \u2502    0.4137 \u2502\n\u2502 25172570 \u2502    0.7469 \u2502\n\u2502 25173687 \u2502    0.6249 \u2502\n\u2502 28291534 \u2502         0 \u2502\n\u2502 28291669 \u2502   -0.4767 \u2502\n\u2502 28291731 \u2502         0 \u2502\n\u2502 28291949 \u2502   -0.4767 \u2502\n\u2502 28292004 \u2502    0.3612 \u2502\n\u2502 28292050 \u2502    -0.296 \u2502\n\u2502 28292322 \u2502         0 \u2502\n\u2502 28295172 \u2502    0.7717 \u2502\n\u2502 28295288 \u2502    0.4404 \u2502\n\u2502 21465723 \u2502   -0.6956 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("h2",{id:"creating-an-executablepool-table"},"Creating an ExecutablePool Table"),(0,i.kt)("p",null,"The syntax for ",(0,i.kt)("inlineCode",{parentName:"p"},"ExecutablePool")," is similar to ",(0,i.kt)("inlineCode",{parentName:"p"},"Executable"),", but there are a couple of relevant settings unique to an ",(0,i.kt)("inlineCode",{parentName:"p"},"ExecutablePool")," table:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pool_size"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Description: Processes pool size. If size is 0, then there are no size restrictions"),(0,i.kt)("li",{parentName:"ul"},"Default value: 16"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"max_command_execution_time"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Description: Max command execution time in seconds"),(0,i.kt)("li",{parentName:"ul"},"Default value: 10")))),(0,i.kt)("p",null,"We can easily convert the ",(0,i.kt)("inlineCode",{parentName:"p"},"sentiment")," table above to use ",(0,i.kt)("inlineCode",{parentName:"p"},"ExecutablePool")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"Executable"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE sentiment_pooled (\n   id UInt64,\n   sentiment Float32\n)\nENGINE = ExecutablePool(\n    'sentiment.py',\n    TabSeparated,\n    (SELECT id, comment FROM hackernews WHERE id > 0 AND comment != '' LIMIT 20000)\n)\nSETTINGS\n    pool_size = 4;\n")),(0,i.kt)("p",null,"ClickHouse will maintain 4 processes on-demand when your client queries the ",(0,i.kt)("inlineCode",{parentName:"p"},"sentiment_pooled")," table."))}c.isMDXComponent=!0}}]);