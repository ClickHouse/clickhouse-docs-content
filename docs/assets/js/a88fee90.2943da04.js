"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[92369],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=c(r),g=n,m=u["".concat(p,".").concat(g)]||u[g]||d[g]||i;return r?a.createElement(m,s(s({ref:t},l),{},{components:r})):a.createElement(m,s({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=g;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:n,s[1]=o;for(var c=2;c<i;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},19883:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const i={slug:"/ru/getting-started/example-datasets/wikistat",sidebar_position:17,sidebar_label:"WikiStat"},s="WikiStat",o={unversionedId:"ru/getting-started/example-datasets/wikistat",id:"ru/getting-started/example-datasets/wikistat",title:"WikiStat",description:"wikistat}",source:"@site/docs/ru/getting-started/example-datasets/wikistat.md",sourceDirName:"ru/getting-started/example-datasets",slug:"/ru/getting-started/example-datasets/wikistat",permalink:"/docs/ru/getting-started/example-datasets/wikistat",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/getting-started/example-datasets/wikistat.md",tags:[],version:"current",sidebarPosition:17,frontMatter:{slug:"/ru/getting-started/example-datasets/wikistat",sidebar_position:17,sidebar_label:"WikiStat"},sidebar:"russia",previous:{title:"Star Schema Benchmark",permalink:"/docs/ru/getting-started/example-datasets/star-schema"},next:{title:"\u0422\u0435\u0440\u0430\u0431\u0430\u0439\u0442 \u043b\u043e\u0433\u043e\u0432 \u043a\u043b\u0438\u043a\u043e\u0432 \u043e\u0442 Criteo",permalink:"/docs/ru/getting-started/example-datasets/criteo"}},p={},c=[],l={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"wikistat"},"WikiStat"),(0,n.kt)("p",null,"\u0421\u043c: ",(0,n.kt)("a",{parentName:"p",href:"http://dumps.wikimedia.org/other/pagecounts-raw/"},"http://dumps.wikimedia.org/other/pagecounts-raw/")),(0,n.kt)("p",null,"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u044b:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE wikistat\n(\n    date Date,\n    time DateTime,\n    project String,\n    subproject String,\n    path String,\n    hits UInt64,\n    size UInt64\n) ENGINE = MergeTree(date, (path, time), 8192);\n")),(0,n.kt)("p",null,"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0434\u0430\u043d\u043d\u044b\u0445:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ for i in {2007..2016}; do for j in {01..12}; do echo $i-$j >&2; curl -sSL \"http://dumps.wikimedia.org/other/pagecounts-raw/$i/$i-$j/\" | grep -oE 'pagecounts-[0-9]+-[0-9]+\\.gz'; done; done | sort | uniq | tee links.txt\n$ cat links.txt | while read link; do wget http://dumps.wikimedia.org/other/pagecounts-raw/$(echo $link | sed -r 's/pagecounts-([0-9]{4})([0-9]{2})[0-9]{2}-[0-9]+\\.gz/\\1/')/$(echo $link | sed -r 's/pagecounts-([0-9]{4})([0-9]{2})[0-9]{2}-[0-9]+\\.gz/\\1-\\2/')/$link; done\n$ ls -1 /opt/wikistat/ | grep gz | while read i; do echo $i; gzip -cd /opt/wikistat/$i | ./wikistat-loader --time=\"$(echo -n $i | sed -r 's/pagecounts-([0-9]{4})([0-9]{2})([0-9]{2})-([0-9]{2})([0-9]{2})([0-9]{2})\\.gz/\\1-\\2-\\3 \\4-00-00/')\" | clickhouse-client --query=\"INSERT INTO wikistat FORMAT TabSeparated\"; done\n")))}d.isMDXComponent=!0}}]);