"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[99589],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>m});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)o=s[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)o=s[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(o),d=r,m=p["".concat(l,".").concat(d)]||p[d]||h[d]||s;return o?n.createElement(m,a(a({ref:t},u),{},{components:o})):n.createElement(m,a({ref:t},u))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=o.length,a=new Array(s);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:r,a[1]=i;for(var c=2;c<s;c++)a[c]=o[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},361:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=o(87462),r=(o(67294),o(3905));const s={slug:"/en/faq/general/who-is-using-clickhouse",title:"Who is using ClickHouse?",toc_hidden:!0,toc_priority:9},a="Who Is Using ClickHouse?",i={unversionedId:"en/faq/general/who-is-using-clickhouse",id:"en/faq/general/who-is-using-clickhouse",title:"Who is using ClickHouse?",description:"who-is-using-clickhouse}",source:"@site/docs/en/faq/general/who-is-using-clickhouse.md",sourceDirName:"en/faq/general",slug:"/en/faq/general/who-is-using-clickhouse",permalink:"/docs/en/faq/general/who-is-using-clickhouse",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/faq/general/who-is-using-clickhouse.md",tags:[],version:"current",frontMatter:{slug:"/en/faq/general/who-is-using-clickhouse",title:"Who is using ClickHouse?",toc_hidden:!0,toc_priority:9},sidebar:"english",previous:{title:"What is OLAP?",permalink:"/docs/en/faq/general/olap"},next:{title:"Why is ClickHouse so fast?",permalink:"/docs/en/faq/general/why-clickhouse-is-so-fast"}},l={},c=[],u={toc:c},p="wrapper";function h(e){let{components:t,...o}=e;return(0,r.kt)(p,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"who-is-using-clickhouse"},"Who Is Using ClickHouse?"),(0,r.kt)("p",null,"Being an open-source product makes this question not so straightforward to answer. You do not have to tell anyone if you want to start using ClickHouse, you just go grab source code or pre-compiled packages. There\u2019s no contract to sign and the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/ClickHouse/blob/master/LICENSE"},"Apache 2.0 license")," allows for unconstrained software distribution."),(0,r.kt)("p",null,"Also, the technology stack is often in a grey zone of what\u2019s covered by an NDA. Some companies consider technologies they use as a competitive advantage even if they are open-source and do not allow employees to share any details publicly. Some see some PR risks and allow employees to share implementation details only with their PR department approval."),(0,r.kt)("p",null,"So how to tell who is using ClickHouse?"),(0,r.kt)("p",null,"One way is to ",(0,r.kt)("strong",{parentName:"p"},"ask around"),". If it\u2019s not in writing, people are much more willing to share what technologies are used in their companies, what the use cases are, what kind of hardware is used, data volumes, etc. We\u2019re talking with users regularly on ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/channel/UChtmrD-dsdpspr42P_PyRAw/playlists"},"ClickHouse Meetups")," all over the world and have heard stories about 1000+ companies that use ClickHouse. Unfortunately, that\u2019s not reproducible and we try to treat such stories as if they were told under NDA to avoid any potential troubles. But you can come to any of our future meetups and talk with other users on your own. There are multiple ways how meetups are announced, for example, you can subscribe to ",(0,r.kt)("a",{parentName:"p",href:"http://twitter.com/ClickHouseDB/"},"our Twitter"),"."),(0,r.kt)("p",null,"The second way is to look for companies ",(0,r.kt)("strong",{parentName:"p"},"publicly saying")," that they use ClickHouse. It\u2019s more substantial because there\u2019s usually some hard evidence like a blog post, talk video recording, slide deck, etc. We collect the collection of links to such evidence on our ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/docs/en/about-us/adopters"},"Adopters"))," page. Feel free to contribute the story of your employer or just some links you\u2019ve stumbled upon (but try not to violate your NDA in the process)."),(0,r.kt)("p",null,"You can find names of very large companies in the adopters list, like Bloomberg, Cisco, China Telecom, Tencent, or Uber, but with the first approach, we found that there are many more. For example, if you take ",(0,r.kt)("a",{parentName:"p",href:"https://www.forbes.com/sites/hanktucker/2020/05/13/worlds-largest-technology-companies-2020-apple-stays-on-top-zoom-and-uber-debut/"},"the list of largest IT companies by Forbes (2020)")," over half of them are using ClickHouse in some way. Also, it would be unfair not to mention ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/about-us/history"},"Yandex"),", the company which initially open-sourced ClickHouse in 2016 and happens to be one of the largest IT companies in Europe."))}h.isMDXComponent=!0}}]);