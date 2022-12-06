"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[60720,26642],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),p=c(n),h=l,g=p["".concat(s,".").concat(h)]||p[h]||d[h]||o;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,i=new Array(o);i[0]=p;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:l,i[1]=r;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},92885:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var a=n(87462),l=(n(67294),n(3905));const o={slug:"/en/whats-new/cloud",sidebar_label:"Cloud Changelog",title:"Cloud Changelog"},i=void 0,r={unversionedId:"en/cloud/reference/changelog",id:"en/cloud/reference/changelog",title:"Cloud Changelog",description:"In addition to this ClickHouse Cloud changelog, please see the Cloud Compatibility page.",source:"@site/docs/en/cloud/reference/changelog.md",sourceDirName:"en/cloud/reference",slug:"/en/whats-new/cloud",permalink:"/docs/en/whats-new/cloud",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/cloud/reference/changelog.md",tags:[],version:"current",frontMatter:{slug:"/en/whats-new/cloud",sidebar_label:"Cloud Changelog",title:"Cloud Changelog"},sidebar:"english",previous:{title:"Architecture",permalink:"/docs/en/cloud/reference/architecture"},next:{title:"Cloud Compatibility",permalink:"/docs/en/whats-new/cloud-compatibility"}},s={},c=[{value:"November 29, 2022",id:"november-29-2022",level:2},{value:"General changes",id:"general-changes",level:3},{value:"Console changes",id:"console-changes",level:3},{value:"ClickHouse 22.11 version upgrade",id:"clickhouse-2211-version-upgrade",level:3},{value:"Integrations",id:"integrations",level:3},{value:"Bug fixes",id:"bug-fixes",level:3},{value:"Known issues in this release",id:"known-issues-in-this-release",level:3},{value:"November 17, 2022",id:"november-17-2022",level:2},{value:"General changes",id:"general-changes-1",level:3},{value:"Console changes",id:"console-changes-1",level:3},{value:"Bug fixes",id:"bug-fixes-1",level:3},{value:"Known issues",id:"known-issues",level:3},{value:"November 3, 2022",id:"november-3-2022",level:2},{value:"General changes",id:"general-changes-2",level:3},{value:"Configuration changes",id:"configuration-changes",level:3},{value:"Console changes",id:"console-changes-2",level:3},{value:"ClickHouse 22.10 version upgrade",id:"clickhouse-2210-version-upgrade",level:3},{value:"October 25, 2022",id:"october-25-2022",level:2},{value:"General changes",id:"general-changes-3",level:3},{value:"Configuration changes",id:"configuration-changes-1",level:3},{value:"Console changes",id:"console-changes-3",level:3},{value:"October 4, 2022",id:"october-4-2022",level:2}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"In addition to this ClickHouse Cloud changelog, please see the ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/whats-new/cloud-compatibility"},"Cloud Compatibility")," page."),(0,l.kt)("h2",{id:"november-29-2022"},"November 29, 2022"),(0,l.kt)("p",null,"This release brings SOC2 Type II compliance, updates the ClickHouse version to 22.11, and improves a number of ClickHouse clients and integrations."),(0,l.kt)("h3",{id:"general-changes"},"General changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Reached SOC2 Type II compliance (details in ",(0,l.kt)("a",{parentName:"li",href:"https://clickhouse.com/blog/clickhouse-cloud-is-now-soc-2-type-ii-compliant"},"blog")," and ",(0,l.kt)("a",{parentName:"li",href:"https://trust.clickhouse.com"},"Trust Center"),")")),(0,l.kt)("h3",{id:"console-changes"},"Console changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'Added an "Idle" status indicator to show that a service has been automatically paused')),(0,l.kt)("h3",{id:"clickhouse-2211-version-upgrade"},"ClickHouse 22.11 version upgrade"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Added support for Hudi and DeltaLake table engines and table functions"),(0,l.kt)("li",{parentName:"ul"},"Improved recursive directory traversal for S3"),(0,l.kt)("li",{parentName:"ul"},"Added support for composite time interval syntax"),(0,l.kt)("li",{parentName:"ul"},"Improved insert reliability with retries on insert"),(0,l.kt)("li",{parentName:"ul"},"See the ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/whats-new/changelog/#-clickhouse-release-2211-2022-11-17"},"detailed 22.11 changelog")," for the complete list of changes.")),(0,l.kt)("h3",{id:"integrations"},"Integrations"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Python client: v3.11 support, improved insert performance"),(0,l.kt)("li",{parentName:"ul"},"Go client: fix DateTime and Int64 support"),(0,l.kt)("li",{parentName:"ul"},"JS client: support for mutual SSL authentication"),(0,l.kt)("li",{parentName:"ul"},"dbt-clickhouse: support for DBT v1.3")),(0,l.kt)("h3",{id:"bug-fixes"},"Bug fixes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Fixed a bug that showed an outdated ClickHouse version after an upgrade"),(0,l.kt)("li",{parentName:"ul"},'Changing grants for the "default" account no longer interrupts sessions'),(0,l.kt)("li",{parentName:"ul"},"Newly created non-admin accounts no longer have system table access by default")),(0,l.kt)("h3",{id:"known-issues-in-this-release"},"Known issues in this release"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Restore from backup may not work due to dependency resolution")),(0,l.kt)("h2",{id:"november-17-2022"},"November 17, 2022"),(0,l.kt)("p",null,"This release enables dictionaries from local ClickHouse table and HTTP sources, introduces support for the Mumbai region, and improves the cloud console user experience."),(0,l.kt)("h3",{id:"general-changes-1"},"General changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Added support for ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/dictionaries/external-dictionaries/external-dicts"},"dictionaries")," from local ClickHouse table and HTTP sources"),(0,l.kt)("li",{parentName:"ul"},"Introduced support for the Mumbai ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/cloud/reference/supported-regions"},"region"))),(0,l.kt)("h3",{id:"console-changes-1"},"Console changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Improved billing invoice formatting"),(0,l.kt)("li",{parentName:"ul"},"Streamlined user interface for payment method capture"),(0,l.kt)("li",{parentName:"ul"},"Added more granular activity logging for backups"),(0,l.kt)("li",{parentName:"ul"},"Improved error handling during file upload")),(0,l.kt)("h3",{id:"bug-fixes-1"},"Bug fixes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Fixed a bug that could lead to failing backups if there were single large files in some parts"),(0,l.kt)("li",{parentName:"ul"},"Fixed a bug where restores from backup did not succeed if access list changes were applied at the same time")),(0,l.kt)("h3",{id:"known-issues"},"Known issues"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Restore from backup may not work due to dependency resolution")),(0,l.kt)("h2",{id:"november-3-2022"},"November 3, 2022"),(0,l.kt)("p",null,"This release removes read & write units from pricing (see the ",(0,l.kt)("a",{parentName:"p",href:"https://clickhouse.com/pricing"},"pricing page")," for details), updates the ClickHouse version to 22.10, adds support for higher vertical scaling for self-service customers, and improves reliability through better defaults."),(0,l.kt)("h3",{id:"general-changes-2"},"General changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Removed read/write units from the pricing model")),(0,l.kt)("h3",{id:"configuration-changes"},"Configuration changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The settings ",(0,l.kt)("inlineCode",{parentName:"li"},"allow_suspicious_low_cardinality_types"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"allow_suspicious_fixed_string_types")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"allow_suspicious_codecs")," (default is false) cannot be changed by users anymore for stability reasons.")),(0,l.kt)("h3",{id:"console-changes-2"},"Console changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Increased the self-service maximum for vertical scaling to 720GB memory for paying customers"),(0,l.kt)("li",{parentName:"ul"},"Improved the restore from backup workflow to set IP Access List rules and password"),(0,l.kt)("li",{parentName:"ul"},"Introduced waitlists for GCP and Azure in the service creation dialog"),(0,l.kt)("li",{parentName:"ul"},"Improved error handling during file upload"),(0,l.kt)("li",{parentName:"ul"},"Improved workflows for billing administration")),(0,l.kt)("h3",{id:"clickhouse-2210-version-upgrade"},"ClickHouse 22.10 version upgrade"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'Improved merges on top of object stores by relaxing the "too many parts" threshold in the presence of many large parts (at least 10 GiB). This enables up to petabytes of data in a single partition of a single table.'),(0,l.kt)("li",{parentName:"ul"},"Improved control over merging with the ",(0,l.kt)("inlineCode",{parentName:"li"},"min_age_to_force_merge_seconds")," setting, to merge after a certain time threshold."),(0,l.kt)("li",{parentName:"ul"},"Added MySQL-compatible syntax to reset settings ",(0,l.kt)("inlineCode",{parentName:"li"},"SET setting_name = DEFAULT"),"."),(0,l.kt)("li",{parentName:"ul"},"Added functions for Morton curve encoding, Java integer hashing, and random number generation."),(0,l.kt)("li",{parentName:"ul"},"See the ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/whats-new/changelog/#-clickhouse-release-2210-2022-10-25"},"detailed 22.10 changelog")," for the complete list of changes.")),(0,l.kt)("h2",{id:"october-25-2022"},"October 25, 2022"),(0,l.kt)("p",null,"This release significantly lowers compute consumption for small workloads, lowers compute pricing (see ",(0,l.kt)("a",{parentName:"p",href:"https://clickhouse.com/pricing"},"pricing")," page for details), improves stability through better defaults, and enhances the Billing and Usage views in the ClickHouse Cloud console."),(0,l.kt)("h3",{id:"general-changes-3"},"General changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Reduced minimum service memory allocation to 24G"),(0,l.kt)("li",{parentName:"ul"},"Reduced service idle timeout from 30 minutes to 5 minutes")),(0,l.kt)("h3",{id:"configuration-changes-1"},"Configuration changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Reduced max_parts_in_total from 100k to 10k. The default value of the ",(0,l.kt)("inlineCode",{parentName:"li"},"max_parts_in_total")," setting for MergeTree tables has been lowered from 100,000 to 10,000. The reason for this change is that we observed that a large number of data parts is likely to cause a slow startup time of services in the cloud. A large number of parts usually indicates a choice of too granular partition key, which is typically done accidentally and should be avoided. The change of default will allow the detection of these cases earlier.")),(0,l.kt)("h3",{id:"console-changes-3"},"Console changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Enhanced credit usage details in the Billing view for trial users"),(0,l.kt)("li",{parentName:"ul"},"Improved tooltips and help text, and added a link to the pricing page in the Usage view"),(0,l.kt)("li",{parentName:"ul"},"Improved workflow when switching options for IP filtering"),(0,l.kt)("li",{parentName:"ul"},"Added resend email confirmation button to the cloud console")),(0,l.kt)("h2",{id:"october-4-2022"},"October 4, 2022"),(0,l.kt)("p",null,"ClickHouse Cloud began its public Beta on October 4th, 2022. ",(0,l.kt)("a",{parentName:"p",href:"https://clickhouse.com/blog/clickhouse-cloud-public-beta"},"Learn more"),"."),(0,l.kt)("p",null,"The ClickHouse Cloud version is based on ClickHouse core v22.10. For a list of compatible features, refer to the ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/whats-new/cloud-compatibility"},"Cloud Compatibility")," guide."))}d.isMDXComponent=!0},18115:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=n(87462),l=(n(67294),n(3905)),o=n(92885);const i={sidebar_position:1,sidebar_label:"Cloud"},r="Cloud Changelog",s={unversionedId:"en/whats-new/changelog/cloud",id:"en/whats-new/changelog/cloud",title:"Cloud Changelog",description:"",source:"@site/docs/en/whats-new/changelog/cloud.md",sourceDirName:"en/whats-new/changelog",slug:"/en/whats-new/changelog/cloud",permalink:"/docs/en/whats-new/changelog/cloud",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/whats-new/changelog/cloud.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Cloud"},sidebar:"english",previous:{title:"Changelog",permalink:"/docs/category/changelog"},next:{title:"2022",permalink:"/docs/en/whats-new/changelog/"}},c={},u=[],d={toc:u};function p(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"cloud-changelog"},"Cloud Changelog"),(0,l.kt)(o.default,{mdxType:"CloudChangelog"}))}p.isMDXComponent=!0}}]);