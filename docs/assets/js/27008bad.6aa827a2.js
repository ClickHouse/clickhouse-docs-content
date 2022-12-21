"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[26642],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),p=c(a),m=l,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return a?n.createElement(h,o(o({ref:t},u),{},{components:a})):n.createElement(h,o({ref:t},u))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,o=new Array(i);o[0]=p;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:l,o[1]=r;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},92885:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var n=a(87462),l=(a(67294),a(3905));const i={slug:"/en/whats-new/cloud",sidebar_label:"Cloud Changelog",title:"Cloud Changelog"},o=void 0,r={unversionedId:"en/cloud/reference/changelog",id:"en/cloud/reference/changelog",title:"Cloud Changelog",description:"In addition to this ClickHouse Cloud changelog, please see the Cloud Compatibility page.",source:"@site/docs/en/cloud/reference/changelog.md",sourceDirName:"en/cloud/reference",slug:"/en/whats-new/cloud",permalink:"/docs/en/whats-new/cloud",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/cloud/reference/changelog.md",tags:[],version:"current",frontMatter:{slug:"/en/whats-new/cloud",sidebar_label:"Cloud Changelog",title:"Cloud Changelog"},sidebar:"english",previous:{title:"Architecture",permalink:"/docs/en/cloud/reference/architecture"},next:{title:"Cloud Compatibility",permalink:"/docs/en/whats-new/cloud-compatibility"}},s={},c=[{value:"December 20, 2022",id:"december-20-2022",level:2},{value:"Console changes",id:"console-changes",level:3},{value:"Reliability and performance",id:"reliability-and-performance",level:3},{value:"Integrations changes",id:"integrations-changes",level:3},{value:"December 6, 2022 - General Availability",id:"december-6-2022---general-availability",level:2},{value:"Production-ready",id:"production-ready",level:3},{value:"Major new capabilities",id:"major-new-capabilities",level:3},{value:"Pricing and metering changes",id:"pricing-and-metering-changes",level:3},{value:"Integrations changes",id:"integrations-changes-1",level:3},{value:"Console changes",id:"console-changes-1",level:3},{value:"Documentation changes",id:"documentation-changes",level:3},{value:"Bug fixes",id:"bug-fixes",level:3},{value:"November 29, 2022",id:"november-29-2022",level:2},{value:"General changes",id:"general-changes",level:3},{value:"Console changes",id:"console-changes-2",level:3},{value:"ClickHouse 22.11 version upgrade",id:"clickhouse-2211-version-upgrade",level:3},{value:"Integrations",id:"integrations",level:3},{value:"Bug fixes",id:"bug-fixes-1",level:3},{value:"Known issues in this release",id:"known-issues-in-this-release",level:3},{value:"November 17, 2022",id:"november-17-2022",level:2},{value:"General changes",id:"general-changes-1",level:3},{value:"Console changes",id:"console-changes-3",level:3},{value:"Bug fixes",id:"bug-fixes-2",level:3},{value:"Known issues",id:"known-issues",level:3},{value:"November 3, 2022",id:"november-3-2022",level:2},{value:"General changes",id:"general-changes-2",level:3},{value:"Configuration changes",id:"configuration-changes",level:3},{value:"Console changes",id:"console-changes-4",level:3},{value:"ClickHouse 22.10 version upgrade",id:"clickhouse-2210-version-upgrade",level:3},{value:"October 25, 2022",id:"october-25-2022",level:2},{value:"General changes",id:"general-changes-3",level:3},{value:"Configuration changes",id:"configuration-changes-1",level:3},{value:"Console changes",id:"console-changes-5",level:3},{value:"October 4, 2022 - Beta",id:"october-4-2022---beta",level:2}],u={toc:c};function d(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"In addition to this ClickHouse Cloud changelog, please see the ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/whats-new/cloud-compatibility"},"Cloud Compatibility")," page."),(0,l.kt)("h2",{id:"december-20-2022"},"December 20, 2022"),(0,l.kt)("p",null,"This release introduces seamless logins for administrators to SQL console, improved read performance for cold reads, and an improved Metabase connector for ClickHouse Cloud."),(0,l.kt)("h3",{id:"console-changes"},"Console changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Enabled seamless access to SQL console for admin users "),(0,l.kt)("li",{parentName:"ul"},'Changed default role for new invitees to "Administrator"'),(0,l.kt)("li",{parentName:"ul"},"Added onboarding survey")),(0,l.kt)("h3",{id:"reliability-and-performance"},"Reliability and performance"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Added retry logic for longer running insert queries to recover in the event of network failures"),(0,l.kt)("li",{parentName:"ul"},"Optimized backup schedule to run backups only if data was modified"),(0,l.kt)("li",{parentName:"ul"},"Improved read performance of cold reads ")),(0,l.kt)("h3",{id:"integrations-changes"},"Integrations changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/connect-a-ui/metabase-and-clickhouse"},"Metabase plugin")," got a long-awaited v0.9.1 major update. Now it is compatible with the latest Metabase version and has been thoroughly tested against ClickHouse Cloud.")),(0,l.kt)("h2",{id:"december-6-2022---general-availability"},"December 6, 2022 - General Availability"),(0,l.kt)("p",null,"ClickHouse Cloud is now production-ready with SOC2 Type II compliance, uptime SLAs for production workloads, and public status page. This release includes major new capabilities like AWS Marketplace integration, SQL console - a data exploration workbench for ClickHouse users, and ClickHouse Academy - self-paced learning in ClickHouse Cloud. Learn more in this ",(0,l.kt)("a",{parentName:"p",href:"https://clickhouse.com/blog/clickhouse-cloud-generally-available"},"blog"),"."),(0,l.kt)("h3",{id:"production-ready"},"Production-ready"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"SOC2 Type II compliance (details in ",(0,l.kt)("a",{parentName:"li",href:"https://clickhouse.com/blog/clickhouse-cloud-is-now-soc-2-type-ii-compliant"},"blog")," and ",(0,l.kt)("a",{parentName:"li",href:"https://trust.clickhouse.com/"},"Trust Center"),")"),(0,l.kt)("li",{parentName:"ul"},"Public ",(0,l.kt)("a",{parentName:"li",href:"https://status.clickhouse.com/"},"Status Page")," for ClickHouse Cloud"),(0,l.kt)("li",{parentName:"ul"},"Uptime SLA available for production use cases"),(0,l.kt)("li",{parentName:"ul"},"Availability on ",(0,l.kt)("a",{parentName:"li",href:"https://aws.amazon.com/marketplace/pp/prodview-jettukeanwrfc"},"AWS Marketplace"))),(0,l.kt)("h3",{id:"major-new-capabilities"},"Major new capabilities"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Introduced SQL console, the data exploration workbench for ClickHouse users"),(0,l.kt)("li",{parentName:"ul"},"Launched ",(0,l.kt)("a",{parentName:"li",href:"https://learn.clickhouse.com/visitor_class_catalog"},"ClickHouse Academy"),", self-paced learning in ClickHouse Cloud")),(0,l.kt)("h3",{id:"pricing-and-metering-changes"},"Pricing and metering changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Extended trial to 30 days"),(0,l.kt)("li",{parentName:"ul"},"Introduced fixed-capacity, low-monthly-spend Development Services, well-suited for starter projects and development/staging environments"),(0,l.kt)("li",{parentName:"ul"},"Introduced new reduced pricing on Production Services, as we continue to improve how ClickHouse Cloud operates and scales"),(0,l.kt)("li",{parentName:"ul"},"Improved granularity and fidelity when metering compute")),(0,l.kt)("h3",{id:"integrations-changes-1"},"Integrations changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Enabled support for ClickHouse Postgres / MySQL integration engines"),(0,l.kt)("li",{parentName:"ul"},"Added support for SQL user-defined functions (UDFs)"),(0,l.kt)("li",{parentName:"ul"},"Advanced Kafka Connect sink to Beta status"),(0,l.kt)("li",{parentName:"ul"},"Improved Integrations UI by introducing rich meta-data about versions, update status, and more")),(0,l.kt)("h3",{id:"console-changes-1"},"Console changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Multi-factor authentication support in the cloud console"),(0,l.kt)("li",{parentName:"ul"},"Improved cloud console navigation for mobile devices")),(0,l.kt)("h3",{id:"documentation-changes"},"Documentation changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Introduced a dedicated ",(0,l.kt)("a",{parentName:"li",href:"https://clickhouse.com/docs/en/cloud/overview"},"documentation")," section for ClickHouse Cloud")),(0,l.kt)("h3",{id:"bug-fixes"},"Bug fixes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Addressed known issue where restore from backup did not always work due to dependency resolution")),(0,l.kt)("h2",{id:"november-29-2022"},"November 29, 2022"),(0,l.kt)("p",null,"This release brings SOC2 Type II compliance, updates the ClickHouse version to 22.11, and improves a number of ClickHouse clients and integrations."),(0,l.kt)("h3",{id:"general-changes"},"General changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Reached SOC2 Type II compliance (details in ",(0,l.kt)("a",{parentName:"li",href:"https://clickhouse.com/blog/clickhouse-cloud-is-now-soc-2-type-ii-compliant"},"blog")," and ",(0,l.kt)("a",{parentName:"li",href:"https://trust.clickhouse.com"},"Trust Center"),")")),(0,l.kt)("h3",{id:"console-changes-2"},"Console changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'Added an "Idle" status indicator to show that a service has been automatically paused')),(0,l.kt)("h3",{id:"clickhouse-2211-version-upgrade"},"ClickHouse 22.11 version upgrade"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Added support for Hudi and DeltaLake table engines and table functions"),(0,l.kt)("li",{parentName:"ul"},"Improved recursive directory traversal for S3"),(0,l.kt)("li",{parentName:"ul"},"Added support for composite time interval syntax"),(0,l.kt)("li",{parentName:"ul"},"Improved insert reliability with retries on insert"),(0,l.kt)("li",{parentName:"ul"},"See the ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/whats-new/changelog/#-clickhouse-release-2211-2022-11-17"},"detailed 22.11 changelog")," for the complete list of changes.")),(0,l.kt)("h3",{id:"integrations"},"Integrations"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Python client: v3.11 support, improved insert performance"),(0,l.kt)("li",{parentName:"ul"},"Go client: fix DateTime and Int64 support"),(0,l.kt)("li",{parentName:"ul"},"JS client: support for mutual SSL authentication"),(0,l.kt)("li",{parentName:"ul"},"dbt-clickhouse: support for DBT v1.3")),(0,l.kt)("h3",{id:"bug-fixes-1"},"Bug fixes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Fixed a bug that showed an outdated ClickHouse version after an upgrade"),(0,l.kt)("li",{parentName:"ul"},'Changing grants for the "default" account no longer interrupts sessions'),(0,l.kt)("li",{parentName:"ul"},"Newly created non-admin accounts no longer have system table access by default")),(0,l.kt)("h3",{id:"known-issues-in-this-release"},"Known issues in this release"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Restore from backup may not work due to dependency resolution")),(0,l.kt)("h2",{id:"november-17-2022"},"November 17, 2022"),(0,l.kt)("p",null,"This release enables dictionaries from local ClickHouse table and HTTP sources, introduces support for the Mumbai region, and improves the cloud console user experience."),(0,l.kt)("h3",{id:"general-changes-1"},"General changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Added support for ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/dictionaries/external-dictionaries/external-dicts"},"dictionaries")," from local ClickHouse table and HTTP sources"),(0,l.kt)("li",{parentName:"ul"},"Introduced support for the Mumbai ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/cloud/reference/supported-regions"},"region"))),(0,l.kt)("h3",{id:"console-changes-3"},"Console changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Improved billing invoice formatting"),(0,l.kt)("li",{parentName:"ul"},"Streamlined user interface for payment method capture"),(0,l.kt)("li",{parentName:"ul"},"Added more granular activity logging for backups"),(0,l.kt)("li",{parentName:"ul"},"Improved error handling during file upload")),(0,l.kt)("h3",{id:"bug-fixes-2"},"Bug fixes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Fixed a bug that could lead to failing backups if there were single large files in some parts"),(0,l.kt)("li",{parentName:"ul"},"Fixed a bug where restores from backup did not succeed if access list changes were applied at the same time")),(0,l.kt)("h3",{id:"known-issues"},"Known issues"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Restore from backup may not work due to dependency resolution")),(0,l.kt)("h2",{id:"november-3-2022"},"November 3, 2022"),(0,l.kt)("p",null,"This release removes read & write units from pricing (see the ",(0,l.kt)("a",{parentName:"p",href:"https://clickhouse.com/pricing"},"pricing page")," for details), updates the ClickHouse version to 22.10, adds support for higher vertical scaling for self-service customers, and improves reliability through better defaults."),(0,l.kt)("h3",{id:"general-changes-2"},"General changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Removed read/write units from the pricing model")),(0,l.kt)("h3",{id:"configuration-changes"},"Configuration changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The settings ",(0,l.kt)("inlineCode",{parentName:"li"},"allow_suspicious_low_cardinality_types"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"allow_suspicious_fixed_string_types")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"allow_suspicious_codecs")," (default is false) cannot be changed by users anymore for stability reasons.")),(0,l.kt)("h3",{id:"console-changes-4"},"Console changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Increased the self-service maximum for vertical scaling to 720GB memory for paying customers"),(0,l.kt)("li",{parentName:"ul"},"Improved the restore from backup workflow to set IP Access List rules and password"),(0,l.kt)("li",{parentName:"ul"},"Introduced waitlists for GCP and Azure in the service creation dialog"),(0,l.kt)("li",{parentName:"ul"},"Improved error handling during file upload"),(0,l.kt)("li",{parentName:"ul"},"Improved workflows for billing administration")),(0,l.kt)("h3",{id:"clickhouse-2210-version-upgrade"},"ClickHouse 22.10 version upgrade"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'Improved merges on top of object stores by relaxing the "too many parts" threshold in the presence of many large parts (at least 10 GiB). This enables up to petabytes of data in a single partition of a single table.'),(0,l.kt)("li",{parentName:"ul"},"Improved control over merging with the ",(0,l.kt)("inlineCode",{parentName:"li"},"min_age_to_force_merge_seconds")," setting, to merge after a certain time threshold."),(0,l.kt)("li",{parentName:"ul"},"Added MySQL-compatible syntax to reset settings ",(0,l.kt)("inlineCode",{parentName:"li"},"SET setting_name = DEFAULT"),"."),(0,l.kt)("li",{parentName:"ul"},"Added functions for Morton curve encoding, Java integer hashing, and random number generation."),(0,l.kt)("li",{parentName:"ul"},"See the ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/whats-new/changelog/#-clickhouse-release-2210-2022-10-25"},"detailed 22.10 changelog")," for the complete list of changes.")),(0,l.kt)("h2",{id:"october-25-2022"},"October 25, 2022"),(0,l.kt)("p",null,"This release significantly lowers compute consumption for small workloads, lowers compute pricing (see ",(0,l.kt)("a",{parentName:"p",href:"https://clickhouse.com/pricing"},"pricing")," page for details), improves stability through better defaults, and enhances the Billing and Usage views in the ClickHouse Cloud console."),(0,l.kt)("h3",{id:"general-changes-3"},"General changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Reduced minimum service memory allocation to 24G"),(0,l.kt)("li",{parentName:"ul"},"Reduced service idle timeout from 30 minutes to 5 minutes")),(0,l.kt)("h3",{id:"configuration-changes-1"},"Configuration changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Reduced max_parts_in_total from 100k to 10k. The default value of the ",(0,l.kt)("inlineCode",{parentName:"li"},"max_parts_in_total")," setting for MergeTree tables has been lowered from 100,000 to 10,000. The reason for this change is that we observed that a large number of data parts is likely to cause a slow startup time of services in the cloud. A large number of parts usually indicates a choice of too granular partition key, which is typically done accidentally and should be avoided. The change of default will allow the detection of these cases earlier.")),(0,l.kt)("h3",{id:"console-changes-5"},"Console changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Enhanced credit usage details in the Billing view for trial users"),(0,l.kt)("li",{parentName:"ul"},"Improved tooltips and help text, and added a link to the pricing page in the Usage view"),(0,l.kt)("li",{parentName:"ul"},"Improved workflow when switching options for IP filtering"),(0,l.kt)("li",{parentName:"ul"},"Added resend email confirmation button to the cloud console")),(0,l.kt)("h2",{id:"october-4-2022---beta"},"October 4, 2022 - Beta"),(0,l.kt)("p",null,"ClickHouse Cloud began its public Beta on October 4th, 2022. Learn more in this ",(0,l.kt)("a",{parentName:"p",href:"https://clickhouse.com/blog/clickhouse-cloud-public-beta"},"blog"),"."),(0,l.kt)("p",null,"The ClickHouse Cloud version is based on ClickHouse core v22.10. For a list of compatible features, refer to the ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/whats-new/cloud-compatibility"},"Cloud Compatibility")," guide."))}d.isMDXComponent=!0}}]);