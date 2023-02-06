"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[25978],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(r),h=n,m=d["".concat(l,".").concat(h)]||d[h]||c[h]||o;return r?a.createElement(m,i(i({ref:t},p),{},{components:r})):a.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:n,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},61819:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const o={slug:"/en/operations/update",sidebar_title:"Self-managed Upgrade",title:"Self-managed Upgrade"},i=void 0,s={unversionedId:"en/operations/update",id:"en/operations/update",title:"Self-managed Upgrade",description:"ClickHouse upgrade overview",source:"@site/docs/en/operations/update.md",sourceDirName:"en/operations",slug:"/en/operations/update",permalink:"/docs/en/operations/update",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/operations/update.md",tags:[],version:"current",frontMatter:{slug:"/en/operations/update",sidebar_title:"Self-managed Upgrade",title:"Self-managed Upgrade"},sidebar:"english",previous:{title:"Backup and Restore",permalink:"/docs/en/operations/backup"},next:{title:"Monitoring",permalink:"/docs/en/operations/monitoring"}},l={},u=[{value:"ClickHouse upgrade overview",id:"clickhouse-upgrade-overview",level:2},{value:"General guidelines",id:"general-guidelines",level:2},{value:"Upgrade ClickHouse server separately from ClickHouse Keeper or ZooKeeper",id:"upgrade-clickhouse-server-separately-from-clickhouse-keeper-or-zookeeper",level:3},{value:"Minor version upgrades should be adopted often",id:"minor-version-upgrades-should-be-adopted-often",level:3},{value:"Test experimental features on a separate ClickHouse server running the target version",id:"test-experimental-features-on-a-separate-clickhouse-server-running-the-target-version",level:3},{value:"Downgrades",id:"downgrades",level:3},{value:"Multiple ClickHouse server versions in a cluster",id:"multiple-clickhouse-server-versions-in-a-cluster",level:3},{value:"Incremental upgrades",id:"incremental-upgrades",level:3},{value:"Recommended plan",id:"recommended-plan",level:2},{value:"ClickHouse server binary upgrade process",id:"clickhouse-server-binary-upgrade-process",level:2}],p={toc:u},d="wrapper";function c(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"clickhouse-upgrade-overview"},"ClickHouse upgrade overview"),(0,n.kt)("p",null,"This document contains:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"general guidelines"),(0,n.kt)("li",{parentName:"ul"},"a recommended plan"),(0,n.kt)("li",{parentName:"ul"},"specifics for upgrading the binaries on your systems")),(0,n.kt)("h2",{id:"general-guidelines"},"General guidelines"),(0,n.kt)("p",null,"These notes should help you with planning, and to understand why we make the recommendations that we do later in the document."),(0,n.kt)("h3",{id:"upgrade-clickhouse-server-separately-from-clickhouse-keeper-or-zookeeper"},"Upgrade ClickHouse server separately from ClickHouse Keeper or ZooKeeper"),(0,n.kt)("p",null,"Unless there is a security fix needed for ClickHouse Keeper or Apache ZooKeeper it is not necessary to upgrade Keeper when you upgrade ClickHouse server.  Keeper stability is required during the upgrade process, so complete the ClickHouse server upgrades before considering an upgrade of Keeper."),(0,n.kt)("h3",{id:"minor-version-upgrades-should-be-adopted-often"},"Minor version upgrades should be adopted often"),(0,n.kt)("p",null,"It is highly recommended to always upgrade to the newest minor version as soon as it is released. Minor releases do not have breaking changes but do have important bug fixes (and may have security fixes)."),(0,n.kt)("h3",{id:"test-experimental-features-on-a-separate-clickhouse-server-running-the-target-version"},"Test experimental features on a separate ClickHouse server running the target version"),(0,n.kt)("p",null,"The compatibility of experimental features can be broken at any moment in any way.  If you are using experimental features, then check the changelogs and consider setting up a separate ClickHouse server with the target version installed and test your use of the experimental features there."),(0,n.kt)("h3",{id:"downgrades"},"Downgrades"),(0,n.kt)("p",null,"If you upgrade and then realize that the new version is not compatible with some feature that you depend on you may be able to downgrade to a recent (less than one year old) version if you have not started to use any of the new features.  Once the new features are used the downgrade will not work."),(0,n.kt)("h3",{id:"multiple-clickhouse-server-versions-in-a-cluster"},"Multiple ClickHouse server versions in a cluster"),(0,n.kt)("p",null,"We make an effort to maintain a one-year compatibility window (which includes 2 LTS versions). This means that any two versions should be able to work together in a cluster if the difference between them is less than one year (or if there are less than two LTS versions between them). However, it is recommended to upgrade all members of a cluster to the same version as quickly as possible, as some minor issues are possible (like slowdown of distributed queries, retriable errors in some background operations in ReplicatedMergeTree, etc)."),(0,n.kt)("p",null,"We never recommend running different versions in the same cluster when the release dates are more than one year. While we do not expect that you will have data loss, the cluster may become unusable. The issues that you should expect if you have more than one year difference in versions include:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"the cluster may not work"),(0,n.kt)("li",{parentName:"ul"},"some (or even all) queries may fail with arbitrary errors"),(0,n.kt)("li",{parentName:"ul"},"arbitrary errors/warnings may appear in the logs"),(0,n.kt)("li",{parentName:"ul"},"it may be impossible to downgrade")),(0,n.kt)("h3",{id:"incremental-upgrades"},"Incremental upgrades"),(0,n.kt)("p",null,"If the difference between the current version and the target version is more than one year, then it is recommended to either:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Upgrade with downtime (stop all servers, upgrade all servers, run all servers)."),(0,n.kt)("li",{parentName:"ul"},"Or to upgrade through an intermediate version (a version less than one year more recent than the current version).")),(0,n.kt)("h2",{id:"recommended-plan"},"Recommended plan"),(0,n.kt)("p",null,"These are the recommended steps for a zero-downtime ClickHouse upgrade:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Make sure that your configuration changes are not in the default ",(0,n.kt)("inlineCode",{parentName:"li"},"/etc/clickhouse-server/config.xml")," file and that they are instead in ",(0,n.kt)("inlineCode",{parentName:"li"},"/etc/clickhouse-server/config.d/"),", as ",(0,n.kt)("inlineCode",{parentName:"li"},"/etc/clickhouse-server/config.xml")," could be overwritten during an upgrade."),(0,n.kt)("li",{parentName:"ol"},"Read through the ",(0,n.kt)("a",{parentName:"li",href:"/docs/en/whats-new/changelog/"},"changelogs")," for breaking changes (going back from the target release to the release you are currently on)."),(0,n.kt)("li",{parentName:"ol"},"Make any updates identified in the breaking changes that can be made before upgrading, and a list of the changes that will need to be made after the upgrade."),(0,n.kt)("li",{parentName:"ol"},"Identify one or more replicas for each shard to keep up while the rest of the replicas for each shard are upgraded."),(0,n.kt)("li",{parentName:"ol"},"On the replicas that will be upgraded, one at a time:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"shutdown ClickHouse server"),(0,n.kt)("li",{parentName:"ul"},"upgrade the server to the target version"),(0,n.kt)("li",{parentName:"ul"},"bring ClickHouse server up"),(0,n.kt)("li",{parentName:"ul"},"wait for the Keeper messages to indicate that the system is stable"),(0,n.kt)("li",{parentName:"ul"},"continue to the next replica"))),(0,n.kt)("li",{parentName:"ol"},"Check for errors in the Keeper log and the ClickHouse log"),(0,n.kt)("li",{parentName:"ol"},"Upgrade the replicas identified in step 4 to the new version"),(0,n.kt)("li",{parentName:"ol"},"Refer to the list of changes made in steps 1 through 3 and make the changes that need to be made after the upgrade.")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"This error message is expected when there are multiple versions of ClickHouse running in a replicated environment.  You will stop seeing these when all replicas are upgraded to the same version."),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"MergeFromLogEntryTask: Code: 40. DB::Exception: Checksums of parts don't match:\nhash of uncompressed files doesn't match. (CHECKSUM_DOESNT_MATCH)  Data after merge is not\nbyte-identical to data on another replicas.\n"))),(0,n.kt)("h2",{id:"clickhouse-server-binary-upgrade-process"},"ClickHouse server binary upgrade process"),(0,n.kt)("p",null,"If ClickHouse was installed from ",(0,n.kt)("inlineCode",{parentName:"p"},"deb")," packages, execute the following commands on the server:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo apt-get update\n$ sudo apt-get install clickhouse-client clickhouse-server\n$ sudo service clickhouse-server restart\n")),(0,n.kt)("p",null,"If you installed ClickHouse using something other than the recommended ",(0,n.kt)("inlineCode",{parentName:"p"},"deb")," packages, use the appropriate update method."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"You can update multiple servers at once as soon as there is no moment when all replicas of one shard are offline.")),(0,n.kt)("p",null,"The upgrade of older version of ClickHouse to specific version:"),(0,n.kt)("p",null,"As an example:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"xx.yy.a.b")," is a current stable version. The latest stable version could be found ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/ClickHouse/releases"},"here")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo apt-get update\n$ sudo apt-get install clickhouse-server=xx.yy.a.b clickhouse-client=xx.yy.a.b clickhouse-common-static=xx.yy.a.b\n$ sudo service clickhouse-server restart\n")))}c.isMDXComponent=!0}}]);