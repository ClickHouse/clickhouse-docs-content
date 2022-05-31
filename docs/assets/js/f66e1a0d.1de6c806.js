"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[15179],{3905:function(e,t,o){o.d(t,{Zo:function(){return c},kt:function(){return m}});var n=o(67294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(o),m=i,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||r;return o?n.createElement(h,a(a({ref:t},c),{},{components:o})):n.createElement(h,a({ref:t},c))}));function m(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=o.length,a=new Array(r);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<r;u++)a[u]=o[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},52217:function(e,t,o){o.r(t),o.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var n=o(87462),i=o(63366),r=(o(67294),o(3905)),a=["components"],s={title:"Which ClickHouse version to use in production?",toc_hidden:!0,toc_priority:10},l="Which ClickHouse Version to Use in Production?",u={unversionedId:"en/faq/operations/production",id:"en/faq/operations/production",title:"Which ClickHouse version to use in production?",description:"which-clickhouse-version-to-use-in-production}",source:"@site/docs/en/faq/operations/production.md",sourceDirName:"en/faq/operations",slug:"/en/faq/operations/production",permalink:"/docs/en/faq/operations/production",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/faq/operations/production.md",tags:[],version:"current",frontMatter:{title:"Which ClickHouse version to use in production?",toc_hidden:!0,toc_priority:10},sidebar:"english",previous:{title:"Does ClickHouse support multi-region replication?",permalink:"/docs/en/faq/operations/multi-region-replication"},next:{title:"Questions about ClickHouse use cases",permalink:"/docs/en/faq/use-cases/"}},c={},p=[{value:"Which ClickHouse Version Do You Recommend?",id:"which-clickhouse-version-do-you-recommend",level:2},{value:"How to Choose Between ClickHouse Releases?",id:"how-to-choose-between-clickhouse-releases",level:2}],d={toc:p};function m(e){var t=e.components,o=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"which-clickhouse-version-to-use-in-production"},"Which ClickHouse Version to Use in Production?"),(0,r.kt)("p",null,"First of all, let\u2019s discuss why people ask this question in the first place. There are two key reasons:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"ClickHouse is developed with pretty high velocity and usually, there are 10+ stable releases per year. It makes a wide range of releases to choose from, which is not so trivial choice."),(0,r.kt)("li",{parentName:"ol"},"Some users want to avoid spending time figuring out which version works best for their use case and just follow someone else\u2019s advice.")),(0,r.kt)("p",null,"The second reason is more fundamental, so we\u2019ll start with it and then get back to navigating through various ClickHouse releases."),(0,r.kt)("h2",{id:"which-clickhouse-version-do-you-recommend"},"Which ClickHouse Version Do You Recommend?"),(0,r.kt)("p",null,"It\u2019s tempting to hire consultants or trust some known experts to get rid of responsibility for your production environment. You install some specific ClickHouse version that someone else recommended, now if there\u2019s some issue with it - it\u2019s not your fault, it\u2019s someone else\u2019s. This line of reasoning is a big trap. No external person knows better what\u2019s going on in your company\u2019s production environment."),(0,r.kt)("p",null,"So how to properly choose which ClickHouse version to upgrade to? Or how to choose your first ClickHouse version? First of all, you need to invest in setting up a ",(0,r.kt)("strong",{parentName:"p"},"realistic pre-production environment"),". In an ideal world, it could be a completely identical shadow copy, but that\u2019s usually expensive."),(0,r.kt)("p",null,"Here\u2019re some key points to get reasonable fidelity in a pre-production environment with not so high costs:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Pre-production environment needs to run an as close set of queries as you intend to run in production:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Don\u2019t make it read-only with some frozen data."),(0,r.kt)("li",{parentName:"ul"},"Don\u2019t make it write-only with just copying data without building some typical reports."),(0,r.kt)("li",{parentName:"ul"},"Don\u2019t wipe it clean instead of applying schema migrations."))),(0,r.kt)("li",{parentName:"ul"},"Use a sample of real production data and queries. Try to choose a sample that\u2019s still representative and makes ",(0,r.kt)("inlineCode",{parentName:"li"},"SELECT")," queries return reasonable results. Use obfuscation if your data is sensitive and internal policies do not allow it to leave the production environment."),(0,r.kt)("li",{parentName:"ul"},"Make sure that pre-production is covered by your monitoring and alerting software the same way as your production environment does."),(0,r.kt)("li",{parentName:"ul"},"If your production spans across multiple datacenters or regions, make your pre-production does the same."),(0,r.kt)("li",{parentName:"ul"},"If your production uses complex features like replication, distributed table, cascading materialize views, make sure they are configured similarly in pre-production."),(0,r.kt)("li",{parentName:"ul"},"There\u2019s a trade-off on using the roughly same number of servers or VMs in pre-production as in production, but of smaller size, or much less of them, but of the same size. The first option might catch extra network-related issues, while the latter is easier to manage.")),(0,r.kt)("p",null,"The second area to invest in is ",(0,r.kt)("strong",{parentName:"p"},"automated testing infrastructure"),". Don\u2019t assume that if some kind of query has executed successfully once, it\u2019ll continue to do so forever. It\u2019s ok to have some unit tests where ClickHouse is mocked but make sure your product has a reasonable set of automated tests that are run against real ClickHouse and check that all important use cases are still working as expected."),(0,r.kt)("p",null,"Extra step forward could be contributing those automated tests to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/ClickHouse/tree/master/tests"},"ClickHouse\u2019s open-source test infrastructure")," that\u2019s continuously used in its day-to-day development. It definitely will take some additional time and effort to learn ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/development/tests"},"how to run it")," and then how to adapt your tests to this framework, but it\u2019ll pay off by ensuring that ClickHouse releases are already tested against them when they are announced stable, instead of repeatedly losing time on reporting the issue after the fact and then waiting for a bugfix to be implemented, backported and released. Some companies even have such test contributions to infrastructure by its use as an internal policy, most notably it\u2019s called ",(0,r.kt)("a",{parentName:"p",href:"https://www.oreilly.com/library/view/software-engineering-at/9781492082781/ch01.html#policies_that_scale_well"},"Beyonce\u2019s Rule")," at Google."),(0,r.kt)("p",null,"When you have your pre-production environment and testing infrastructure in place, choosing the best version is straightforward:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Routinely run your automated tests against new ClickHouse releases. You can do it even for ClickHouse releases that are marked as ",(0,r.kt)("inlineCode",{parentName:"li"},"testing"),", but going forward to the next steps with them is not recommended."),(0,r.kt)("li",{parentName:"ol"},"Deploy the ClickHouse release that passed the tests to pre-production and check that all processes are running as expected."),(0,r.kt)("li",{parentName:"ol"},"Report any issues you discovered to ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ClickHouse/ClickHouse/issues"},"ClickHouse GitHub Issues"),"."),(0,r.kt)("li",{parentName:"ol"},"If there were no major issues, it should be safe to start deploying ClickHouse release to your production environment. Investing in gradual release automation that implements an approach similar to ",(0,r.kt)("a",{parentName:"li",href:"https://martinfowler.com/bliki/CanaryRelease.html"},"canary releases")," or ",(0,r.kt)("a",{parentName:"li",href:"https://martinfowler.com/bliki/BlueGreenDeployment.html"},"green-blue deployments")," might further reduce the risk of issues in production.")),(0,r.kt)("p",null,"As you might have noticed, there\u2019s nothing specific to ClickHouse in the approach described above, people do that for any piece of infrastructure they rely on if they take their production environment seriously."),(0,r.kt)("h2",{id:"how-to-choose-between-clickhouse-releases"},"How to Choose Between ClickHouse Releases?"),(0,r.kt)("p",null,"If you look into contents of ClickHouse package repository, you\u2019ll see four kinds of packages:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"testing")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"prestable")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"stable")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"lts")," (long-term support)")),(0,r.kt)("p",null,"As was mentioned earlier, ",(0,r.kt)("inlineCode",{parentName:"p"},"testing")," is good mostly to notice issues early, running them in production is not recommended because each of them is not tested as thoroughly as other kinds of packages."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"prestable")," is a release candidate which generally looks promising and is likely to become announced as ",(0,r.kt)("inlineCode",{parentName:"p"},"stable")," soon. You can try them out in pre-production and report issues if you see any."),(0,r.kt)("p",null,"For production use, there are two key options: ",(0,r.kt)("inlineCode",{parentName:"p"},"stable")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"lts"),". Here is some guidance on how to choose between them:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"stable")," is the kind of package we recommend by default. They are released roughly monthly (and thus provide new features with reasonable delay) and three latest stable releases are supported in terms of diagnostics and backporting of bugfixes."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"lts")," are released twice a year and are supported for a year after their initial release. You might prefer them over ",(0,r.kt)("inlineCode",{parentName:"li"},"stable")," in the following cases:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Your company has some internal policies that do not allow for frequent upgrades or using non-LTS software."),(0,r.kt)("li",{parentName:"ul"},"You are using ClickHouse in some secondary products that either does not require any complex ClickHouse features and do not have enough resources to keep it updated.")))),(0,r.kt)("p",null,"Many teams who initially thought that ",(0,r.kt)("inlineCode",{parentName:"p"},"lts")," is the way to go, often switch to ",(0,r.kt)("inlineCode",{parentName:"p"},"stable")," anyway because of some recent feature that\u2019s important for their product."),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"One more thing to keep in mind when upgrading ClickHouse: we\u2019re always keeping eye on compatibility across releases, but sometimes it\u2019s not reasonable to keep and some minor details might change. So make sure you check the ",(0,r.kt)("a",{parentName:"p",href:"../../whats-new/changelog/"},"changelog")," before upgrading to see if there are any notes about backward-incompatible changes."))))}m.isMDXComponent=!0}}]);