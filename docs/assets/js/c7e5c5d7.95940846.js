"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[28474],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),h=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=h(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=h(a),d=o,m=u["".concat(l,".").concat(d)]||u[d]||p[d]||i;return a?n.createElement(m,s(s({ref:t},c),{},{components:a})):n.createElement(m,s({ref:t},c))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,s=new Array(i);s[0]=u;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:o,s[1]=r;for(var h=2;h<i;h++)s[h]=a[h];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},68605:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>h});var n=a(87462),o=(a(67294),a(3905));const i={sidebar_label:"Insert Local Files",sidebar_position:2},s="Insert Local Files",r={unversionedId:"en/integrations/data-ingestion/insert-local-files",id:"en/integrations/data-ingestion/insert-local-files",title:"Insert Local Files",description:"You can use clickhouse-client to stream local files into your ClickHouse service. This allows you the ability to preprocess",source:"@site/docs/en/integrations/data-ingestion/insert-local-files.md",sourceDirName:"en/integrations/data-ingestion",slug:"/en/integrations/data-ingestion/insert-local-files",permalink:"/docs/en/integrations/data-ingestion/insert-local-files",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/integrations/data-ingestion/insert-local-files.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Insert Local Files",sidebar_position:2},sidebar:"english",previous:{title:"Upload a CSV File",permalink:"/docs/en/integrations/data-ingestion/upload-file-to-clickhouse-cloud"},next:{title:"Insert Files from S3",permalink:"/docs/en/integrations/s3"}},l={},h=[],c={toc:h};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"insert-local-files"},"Insert Local Files"),(0,o.kt)("p",null,"You can use ",(0,o.kt)("inlineCode",{parentName:"p"},"clickhouse-client")," to stream local files into your ClickHouse service. This allows you the ability to preprocess\nthe data using the many powerful and convenient ClickHouse functions. Let's look at an example..."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Suppose we have a TSV file named ",(0,o.kt)("inlineCode",{parentName:"li"},"comments.tsv")," that contains some Hacker News comments, and the header row contains column names. You need to specify an ",(0,o.kt)("a",{parentName:"li",href:"/docs/en/interfaces/formats"},"input format")," when you insert the data, which in our case is ",(0,o.kt)("inlineCode",{parentName:"li"},"TabSeparatedWithNames"),":")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'id  type    author  timestamp   comment children\n19464423    comment adrianmonk  2019-03-22 16:58:19 "It&#x27;s an apples and oranges comparison in the first place. There are security expenses related to prison populations. You need staff, facilities, equipment, etc. to manage prisoners behavior (prevent fights, etc.) and keep them from escaping. The two things have a different mission, so of course they&#x27;re going to have different costs.<p>It&#x27;s like saying a refrigerator is more expensive than a microwave. It doesn&#x27;t mean anything because they do different things."   []\n19464461    comment sneakernets 2019-03-22 17:01:10 "Because the science is so solid that it&#x27;s beating a dead horse at this point.<p>But with anti-vaxxers, It&#x27;s like telling someone the red apple you&#x27;re holding is red, yet they insist that it&#x27;s green. You can&#x27;t argue &quot;the merits&quot; with people like this." [19464582]\n19465288    comment derefr  2019-03-22 18:15:21 "Because we&#x27;re talking about the backend-deployment+ops-jargon terms &quot;website&quot; and &quot;webapp&quot;, not their general usage. Words can have precise jargon meanings <i>which are different</i> in different disciplines. This is where ops people tend to draw the line: a web<i>site</i> is something you can deploy to e.g. an S3 bucket and it&#x27;ll be fully functional, with no other dependencies that you have to maintain for it. A <i>webapp</i> is something that <i>does</i> have such dependencies that you need to set up and maintain\u2014e.g. a database layer.<p>But even ignoring that, I also define the terms this way because of the prefix &quot;web.&quot; A webapp isn&#x27;t &quot;an app on the web&quot;, but rather &quot;an app powered by the web.&quot; An entirely-offline JavaScript SPA that is just <i>served over</i> the web, <i>isn&#x27;t</i> a web-app. It&#x27;s just a program that runs in a browser, just like a Flash or ActiveX or Java applet is a program that runs in a browser. (Is a Flash game a &quot;web game&quot;? It&#x27;s usually considered a <i>browser game</i>, but that&#x27;s not the same thing.)<p>We already have a term for the thing that {Flash, ActiveX, Java} applets are: apps. Offline JavaScript SPAs are just apps too. We don&#x27;t need to add the prefix &quot;web&quot;; it&#x27;s meaningless here. In any of those cases, if you took the exact same program, and slammed it into an Electron wrapper instead of into a domain-fronted S3 bucket, it would clearly not be a &quot;web app&quot; in any sense. Your SPA would just be &quot;a JavaScript <i>app</i> that uses a browser DOM as its graphics toolkit.&quot; Well, that&#x27;s just as true before you put it in the Electron wrapper.<p>So &quot;web app&quot;, then, has a specific meaning, above and beyond &quot;app.&quot; You need something extra. That something extra is a backend, which your browser\u2014driven by the app&#x27;s logic\u2014interacts with <i>over the web</i>. That&#x27;s what makes an app &quot;a web app.&quot; (This definition intentionally encompasses both server-rendered dynamic HTML, and client-rendered JavaScript SPA apps. You don&#x27;t need a frontend <i>app</i>; you just need a <i>web backend</i> that something is interacting with. That something can be the browser directly, by clicking links and submitting forms; or it can be a JavaScript frontend, using AJAX.)<p>A &quot;web site&quot;, then, is a &quot;web app&quot; without the &quot;app&quot; part. If it&#x27;s clear in the above definition what an &quot;app&quot; is, and what a &quot;web app&quot; is, then you can subtract one from the other to derive a definition of a &quot;web not-app.&quot; That&#x27;s a website: something powered by a web backend, which does not do any app things. If we decide that &quot;app things&quot; are basically &quot;storing state&quot;, then a &quot;site&quot; is an &quot;app&quot; with no persistent state.<p>And since the definition of &quot;web&quot; here is about a backend, then the difference between a &quot;web app&quot; and a &quot;web site&quot; (a web not-app) is probably defined by the properties of the backend. So the difference about the ability of the web backend to store state. So a &quot;web site&quot; is a &quot;web app&quot; where the backend does no app things\u2014i.e., stores no state."   []\n19465534    comment bduerst 2019-03-22 18:36:40 "Apple included: <a href=""https:&#x2F;&#x2F;www.theguardian.com&#x2F;commentisfree&#x2F;2018&#x2F;mar&#x2F;04&#x2F;apple-users-icloud-services-personal-data-china-cybersecurity-law-privacy"" rel=""nofollow"">https:&#x2F;&#x2F;www.theguardian.com&#x2F;commentisfree&#x2F;2018&#x2F;mar&#x2F;04&#x2F;apple-...</a>"    []\n19466269    comment CalChris    2019-03-22 19:55:13 "&gt; It has the same A12 CPU ... with 3 GB of RAM on the <i>system-on-a-chip</i><p>Actually that&#x27;s <i>package-on-package</i>. The LPDDR4X DRAM is glued (well, reflow soldered) to the back of the A12 Bionic.<p><a href=""https:&#x2F;&#x2F;www.techinsights.com&#x2F;about-techinsights&#x2F;overview&#x2F;blog&#x2F;apple-iphone-xs-teardown&#x2F;"" rel=""nofollow"">https:&#x2F;&#x2F;www.techinsights.com&#x2F;about-techinsights&#x2F;overview&#x2F;blo...</a><p><a href=""https:&#x2F;&#x2F;en.wikipedia.org&#x2F;wiki&#x2F;Package_on_package"" rel=""nofollow"">https:&#x2F;&#x2F;en.wikipedia.org&#x2F;wiki&#x2F;Package_on_package</a>"   [19468341]\n19466980    comment onetimemanytime 2019-03-22 21:07:25 "&gt;&gt;<i>The insanity, here, is that you can&#x27;t take the land the motorhome is on and build a studio on it.</i><p>apple and oranges. The permit to built the studio makes that building legit, kinda forever. A motor home, they can chase out with a new law, or just by enforcing existing laws."  []\n19467048    comment karambahh   2019-03-22 21:15:41 "I think you&#x27;re comparing apples to oranges here.<p>If you reclaim a parking space for another use (such as building accommodation for families or an animal shelter), you&#x27;re not depriving the car of anything, it&#x27;s an expensive, large piece of metal and is not sentient.<p>Next, you&#x27;ll say that you&#x27;re depriving car owners from the practicality of parking their vehicles anywhere they like. I&#x27;m perfectly fine with depriving car owners from this convenience to allow a human being to have a roof over their head. (speaking from direct experience as I&#x27;ve just minutes ago had to park my car 1km away from home because the city is currently building housing and has restricted parking space nearby)<p>Then, some might argue that one should be ashamed of helping animals while humans are suffering. That&#x27;s the exact same train of thought with \xabwe can&#x27;t allow more migrants in, we have to take care of our &quot;own&quot; homeless people\xbb.<p>This is a false dichotomy. Western societies inequalities are growing larger and larger. Me trying to do my part is insignificant. Me donating to human or animal causes is a small dent into the mountains of inequalities we live on top of. Us collectively, we do make a difference, by donating, voting and generally keeping our eyes open about the world we live in...<p>Finally, an entirely anecdotal pov: I&#x27;ve witnessed several times extremely poor people going out of their ways to show solidarity to animals or humans. I&#x27;ve also witnessed an awful lot of extremely wealthy individuals complaining about the poor inconveniencing them by just being there, whose wealth was a direct consequences of their ancestors exploiting whose very same poor people."  [19467512]\n')),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Let's create the table for our Hacker News data:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE hackernews (\n    id UInt32,\n    type String,\n    author String,\n    timestamp DateTime,\n    comment String,\n    children Array(UInt32),\n    tokens Array(String)\n)\nENGINE = MergeTree\nORDER BY toYYYYMMDD(timestamp)\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"We want to lowercase the ",(0,o.kt)("inlineCode",{parentName:"li"},"author")," column, which is easily done with the ",(0,o.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/functions/string-functions/#lower-lcase"},(0,o.kt)("inlineCode",{parentName:"a"},"lower")," function"),". We also want to split the ",(0,o.kt)("inlineCode",{parentName:"li"},"comment")," string into tokens and store the result in the ",(0,o.kt)("inlineCode",{parentName:"li"},"tokens")," column, which can be done using the ",(0,o.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/functions/string-search-functions/#extractallhaystack-pattern"},(0,o.kt)("inlineCode",{parentName:"a"},"extractAll")," function"),". You do all of this in one ",(0,o.kt)("inlineCode",{parentName:"li"},"clickhouse-client")," command - notice how the ",(0,o.kt)("inlineCode",{parentName:"li"},"comments.tsv")," file is piped into the ",(0,o.kt)("inlineCode",{parentName:"li"},"clickhouse-client")," using the ",(0,o.kt)("inlineCode",{parentName:"li"},"<")," operator:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"clickhouse-client \\\n    --host avw5r4qs3y.us-east-2.aws.clickhouse.cloud \\\n    --secure \\\n    --port 9440 \\\n    --password Myp@ssw0rd \\\n    --query \"\n    INSERT INTO hackernews\n    SELECT\n        id,\n        type,\n        lower(author),\n        timestamp,\n        comment,\n        children,\n        extractAll(comment, '\\\\w+') as tokens\n    FROM input('id UInt32, type String, author String, timestamp DateTime, comment String, children Array(UInt32)')\n    FORMAT TabSeparatedWithNames\n\" < comments.tsv\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"input")," function is useful here as it allows us to convert the data as it's being inserted into the ",(0,o.kt)("inlineCode",{parentName:"p"},"hackernews")," table. The argument to ",(0,o.kt)("inlineCode",{parentName:"p"},"input")," is the format of the incoming raw data, and you will see this in many of the other table functions (where you specify a schema for the incoming data)."))),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"That's it! The data is up in ClickHouse:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM hackernews\nLIMIT 7\n")),(0,o.kt)("p",null,"The result is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-response"},"\n\u2502  488 \u2502 comment \u2502 mynameishere \u2502 2007-02-22 14:48:18 \u2502 \"It's too bad. Javascript-in-the-browser and Ajax are both nasty hacks that force programmers to do all sorts of shameful things. And the result is--wanky html tricks. Java, for its faults, is fairly clean when run in the applet environment. It has every superiority over JITBAJAX, except for install issues and a chunky load process. Yahoo games seems like just about the only applet success story. Of course, back in the day, non-trivial Applets tended to be too large for the dial-up accounts people had. At least that is changed.\" \u2502 [454927] \u2502 ['It','s','too','bad','Javascript','in','the','browser','and','Ajax','are','both','nasty','hacks','that','force','programmers','to','do','all','sorts','of','shameful','things','And','the','result','is','wanky','html','tricks','Java','for','its','faults','is','fairly','clean','when','run','in','the','applet','environment','It','has','every','superiority','over','JITBAJAX','except','for','install','issues','and','a','chunky','load','process','Yahoo','games','seems','like','just','about','the','only','applet','success','story','Of','course','back','in','the','day','non','trivial','Applets','tended','to','be','too','large','for','the','dial','up','accounts','people','had','At','least','that','is','changed'] \u2502\n\u2502  575 \u2502 comment \u2502 leoc         \u2502 2007-02-23 00:09:49 \u2502 \"I can't find the reference now, but I *think* I've just read something suggesting that the install process for an Apollo applet will involve an &#34;install-this-application?&#34; confirmation dialog followed by a download of 30 seconds or so. If so then Apollo's less promising than I hoped. That kind of install may be low-friction by desktop-app standards but it doesn't compare to the ease of starting a browser-based AJAX or Flash application. (Consider how easy it is to use maps.google.com for the first time.)<p>Surely it will at least be that Apollo applications will run untrusted by default, and that an already-installed app will start automatically whenever you take your browser to the URL you downloaded it from?\" \u2502 [455071] \u2502 ['I','can','t','find','the','reference','now','but','I','think','I','ve','just','read','something','suggesting','that','the','install','process','for','an','Apollo','applet','will','involve','an','34','install','this','application','34','confirmation','dialog','followed','by','a','download','of','30','seconds','or','so','If','so','then','Apollo','s','less','promising','than','I','hoped','That','kind','of','install','may','be','low','friction','by','desktop','app','standards','but','it','doesn','t','compare','to','the','ease','of','starting','a','browser','based','AJAX','or','Flash','application','Consider','how','easy','it','is','to','use','maps','google','com','for','the','first','time','p','Surely','it','will','at','least','be','that','Apollo','applications','will','run','untrusted','by','default','and','that','an','already','installed','app','will','start','automatically','whenever','you','take','your','browser','to','the','URL','you','downloaded','it','from'] \u2502\n\u2502 3110 \u2502 comment \u2502 davidw       \u2502 2007-03-09 09:19:58 \u2502 \"I'm very curious about this tsumobi thing, as it's basically exactly what Hecl is ( http://www.hecl.org ).  I'd sort of abbandoned it as an idea for making any money with directly, though, figuring the advantage was just to be able to develop applications a lot faster.  I was able to prototype ShopList ( http://shoplist.dedasys.com ) in a few minutes with it, for example.<p>Edit: BTW, I'd certainly be interested in chatting with the Tsumobi folks.  It's a good idea - perhaps there are elements in common that can be reused from/added to Hecl, which is open source under a very liberal license, meaning you can take it and include it even in 'commercial' apps.<p>I really think that the 'common' bits in a space like that have to be either free or open source (think about browsers, html, javascript, java applets, etc...), and that that's not where the money is.\" \u2502 [3147]   \u2502 ['I','m','very','curious','about','this','tsumobi','thing','as','it','s','basically','exactly','what','Hecl','is','http','www','hecl','org','I','d','sort','of','abbandoned','it','as','an','idea','for','making','any','money','with','directly','though','figuring','the','advantage','was','just','to','be','able','to','develop','applications','a','lot','faster','I','was','able','to','prototype','ShopList','http','shoplist','dedasys','com','in','a','few','minutes','with','it','for','example','p','Edit','BTW','I','d','certainly','be','interested','in','chatting','with','the','Tsumobi','folks','It','s','a','good','idea','perhaps','there','are','elements','in','common','that','can','be','reused','from','added','to','Hecl','which','is','open','source','under','a','very','liberal','license','meaning','you','can','take','it','and','include','it','even','in','commercial','apps','p','I','really','think','that','the','common','bits','in','a','space','like','that','have','to','be','either','free','or','open','source','think','about','browsers','html','javascript','java','applets','etc','and','that','that','s','not','where','the','money','is'] \u2502\n\u2502 4016 \u2502 comment \u2502 mynameishere \u2502 2007-03-13 22:56:53 \u2502 \"http://www.tigerdirect.com/applications/SearchTools/item-details.asp?EdpNo=2853515&CatId=2511<p>Versus<p>http://store.apple.com/1-800-MY-APPLE/WebObjects/AppleStore?family=MacBookPro<p>These are comparable systems, but the Apple has, as I said, roughly an 800 dollar premium. Actually, the cheapest macbook pro costs the same as the high-end Toshiba. If you make good money, it's not a big deal. But when the girl in the coffeehouse asks me what kind of computer she should get to go along with her minimum wage, I'm basically scum to recommend an Apple.\" \u2502 []       \u2502 ['http','www','tigerdirect','com','applications','SearchTools','item','details','asp','EdpNo','2853515','CatId','2511','p','Versus','p','http','store','apple','com','1','800','MY','APPLE','WebObjects','AppleStore','family','MacBookPro','p','These','are','comparable','systems','but','the','Apple','has','as','I','said','roughly','an','800','dollar','premium','Actually','the','cheapest','macbook','pro','costs','the','same','as','the','high','end','Toshiba','If','you','make','good','money','it','s','not','a','big','deal','But','when','the','girl','in','the','coffeehouse','asks','me','what','kind','of','computer','she','should','get','to','go','along','with','her','minimum','wage','I','m','basically','scum','to','recommend','an','Apple'] \u2502\n\u2502 4568 \u2502 comment \u2502 jwecker      \u2502 2007-03-16 13:08:04 \u2502 I know the feeling.  The same feeling I had back when people were still writing java applets.  Maybe a normal user doesn't feel it- maybe it's the programmer in us knowing that there's a big layer running between me and the browser...                 \u2502 []       \u2502 ['I','know','the','feeling','The','same','feeling','I','had','back','when','people','were','still','writing','java','applets','Maybe','a','normal','user','doesn','t','feel','it','maybe','it','s','the','programmer','in','us','knowing','that','there','s','a','big','layer','running','between','me','and','the','browser'] \u2502\n\u2502 4900 \u2502 comment \u2502 lupin_sansei \u2502 2007-03-19 00:26:30 \u2502 \"The essence of Ajax is getting Javascript to communicate with the server without reloading the page. Although XmlHttpRequest is most convenient, there were other methods of doing this before XmlHttpRequest such as <p>- loading a 1 pixel image and sending data in the image's cookie<p>- loading server data through a tiny frame which contained XML or javascipt data<p>- Using a java applet to fetch the data on behalf of javascript\" \u2502 []       \u2502 ['The','essence','of','Ajax','is','getting','Javascript','to','communicate','with','the','server','without','reloading','the','page','Although','XmlHttpRequest','is','most','convenient','there','were','other','methods','of','doing','this','before','XmlHttpRequest','such','as','p','loading','a','1','pixel','image','and','sending','data','in','the','image','s','cookie','p','loading','server','data','through','a','tiny','frame','which','contained','XML','or','javascipt','data','p','Using','a','java','applet','to','fetch','the','data','on','behalf','of','javascript'] \u2502\n\u2502 5102 \u2502 comment \u2502 staunch      \u2502 2007-03-20 02:42:47 \u2502 \"Well this is exactly the kind of thing that isn't very obvious. It sounds like once you're wealthy there's a new set of rules you have to live by. It's a shame everyone has had to re-learn these things for themselves because a few bad apples can control their jealousy.<p>Very good to hear it's somewhere in your essay queue though. I'll try not to get rich before you write it, so I have some idea of what to expect :-)\" \u2502 []       \u2502 ['Well','this','is','exactly','the','kind','of','thing','that','isn','t','very','obvious','It','sounds','like','once','you','re','wealthy','there','s','a','new','set','of','rules','you','have','to','live','by','It','s','a','shame','everyone','has','had','to','re','learn','these','things','for','themselves','because','a','few','bad','apples','can','control','their','jealousy','p','Very','good','to','hear','it','s','somewhere','in','your','essay','queue','though','I','ll','try','not','to','get','rich','before','you','write','it','so','I','have','some','idea','of','what','to','expect'] \u2502\n\n")),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Another option is to use a tool like ",(0,o.kt)("inlineCode",{parentName:"li"},"cat")," to stream the file to ",(0,o.kt)("inlineCode",{parentName:"li"},"clickhouse-client"),". For exmaple, the following command has the same result as using the ",(0,o.kt)("inlineCode",{parentName:"li"},"<")," operator:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cat comments.tsv | clickhouse-client \\\n    --host avw5r4qs3y.us-east-2.aws.clickhouse.cloud \\\n    --secure \\\n    --port 9440 \\\n    --password Myp@ssw0rd \\\n    --query \"\n    INSERT INTO hackernews\n    SELECT\n        id,\n        type,\n        lower(author),\n        timestamp,\n        comment,\n        children,\n        extractAll(comment, '\\\\w+') as tokens\n    FROM input('id UInt32, type String, author String, timestamp DateTime, comment String, children Array(UInt32)')\n    FORMAT TabSeparatedWithNames\n\"\n")),(0,o.kt)("p",null,"Visit the ",(0,o.kt)("a",{parentName:"p",href:"/docs/en/integrations/sql-clients/clickhouse-client-local"},"docs page on ",(0,o.kt)("inlineCode",{parentName:"a"},"clickhouse-client"))," for details on how to install ",(0,o.kt)("inlineCode",{parentName:"p"},"clickhouse-client")," on your local operating system."))}p.isMDXComponent=!0}}]);