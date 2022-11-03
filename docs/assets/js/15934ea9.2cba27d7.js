"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[60720],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=c(n),p=r,g=h["".concat(s,".").concat(p)]||h[p]||d[p]||a;return n?o.createElement(g,i(i({ref:t},u),{},{components:n})):o.createElement(g,i({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},18115:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),i=["components"],l={slug:"/en/whats-new/cloud",sidebar_position:1,sidebar_label:"Cloud",title:"Cloud Changelog"},s=void 0,c={unversionedId:"en/whats-new/changelog/cloud",id:"en/whats-new/changelog/cloud",title:"Cloud Changelog",description:"In addition to this ClickHouse Cloud changelog, please see the Cloud Compatibility page.",source:"@site/docs/en/whats-new/changelog/cloud.md",sourceDirName:"en/whats-new/changelog",slug:"/en/whats-new/cloud",permalink:"/docs/en/whats-new/cloud",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/whats-new/changelog/cloud.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/en/whats-new/cloud",sidebar_position:1,sidebar_label:"Cloud",title:"Cloud Changelog"},sidebar:"english",previous:{title:"Changelog",permalink:"/docs/category/changelog"},next:{title:"2022",permalink:"/docs/en/whats-new/changelog/"}},u={},d=[{value:"November 3, 2022",id:"november-3-2022",level:2},{value:"General changes",id:"general-changes",level:3},{value:"Configuration changes",id:"configuration-changes",level:3},{value:"Console changes",id:"console-changes",level:3},{value:"ClickHouse 22.10 version upgrade brings the following highlights",id:"clickhouse-2210-version-upgrade-brings-the-following-highlights",level:3},{value:"October 25, 2022",id:"october-25-2022",level:2},{value:"General changes",id:"general-changes-1",level:3},{value:"Configuration changes",id:"configuration-changes-1",level:3},{value:"Console changes",id:"console-changes-1",level:3},{value:"October 4, 2022",id:"october-4-2022",level:2}],h={toc:d};function p(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In addition to this ClickHouse Cloud changelog, please see the ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/whats-new/cloud-compatibility"},"Cloud Compatibility")," page."),(0,a.kt)("h2",{id:"november-3-2022"},"November 3, 2022"),(0,a.kt)("p",null,"This release removes read & write units from pricing (see the ",(0,a.kt)("a",{parentName:"p",href:"https://clickhouse.com/pricing"},"pricing page")," for details), updates the ClickHouse version to 22.10, adds support for higher vertical scaling for self-service customers, and improves reliability through better defaults."),(0,a.kt)("h3",{id:"general-changes"},"General changes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Removed read/write units from the pricing model")),(0,a.kt)("h3",{id:"configuration-changes"},"Configuration changes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The settings ",(0,a.kt)("inlineCode",{parentName:"li"},"allow_suspicious_low_cardinality_types"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"allow_suspicious_fixed_string_types")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"allow_suspicious_codecs")," (default is false) cannot be changed by users anymore for stability reasons.")),(0,a.kt)("h3",{id:"console-changes"},"Console changes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Increased the self-service maximum for vertical scaling to 720GB memory for paying customers"),(0,a.kt)("li",{parentName:"ul"},"Improved the restore from backup workflow to set IP Access List rules and password"),(0,a.kt)("li",{parentName:"ul"},"Introduced waitlists for GCP and Azure in the service creation dialog"),(0,a.kt)("li",{parentName:"ul"},"Improved error handling during file upload"),(0,a.kt)("li",{parentName:"ul"},"Improved workflows for billing administration")),(0,a.kt)("h3",{id:"clickhouse-2210-version-upgrade-brings-the-following-highlights"},"ClickHouse 22.10 version upgrade brings the following highlights"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Improved merges on top of object stores by relaxing the "too many parts" threshold in the presence of many large parts (at least 10 GiB). This enables up to petabytes of data in a single partition of a single table.'),(0,a.kt)("li",{parentName:"ul"},"Improved control over merging with the ",(0,a.kt)("inlineCode",{parentName:"li"},"min_age_to_force_merge_seconds")," setting, to merge after a certain time threshold."),(0,a.kt)("li",{parentName:"ul"},"Added MySQL-compatible syntax to reset settings ",(0,a.kt)("inlineCode",{parentName:"li"},"SET setting_name = DEFAULT"),". "),(0,a.kt)("li",{parentName:"ul"},"Added functions for Morton curve encoding, Java integer hashing, and random number generation."),(0,a.kt)("li",{parentName:"ul"},"See the ",(0,a.kt)("a",{parentName:"li",href:"/docs/en/whats-new/changelog/#-clickhouse-release-2210-2022-10-25"},"detailed 22.10 changelog")," for the complete list of changes.")),(0,a.kt)("h2",{id:"october-25-2022"},"October 25, 2022"),(0,a.kt)("p",null,"This release significantly lowers compute consumption for small workloads, lowers compute pricing (see ",(0,a.kt)("a",{parentName:"p",href:"https://clickhouse.com/pricing"},"pricing")," page for details), improves stability through better defaults, and enhances the Billing and Usage views in the ClickHouse Cloud console."),(0,a.kt)("h3",{id:"general-changes-1"},"General changes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Reduced minimum service memory allocation to 24G"),(0,a.kt)("li",{parentName:"ul"},"Reduced service idle timeout from 30 minutes to 5 minutes")),(0,a.kt)("h3",{id:"configuration-changes-1"},"Configuration changes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Reduced max_parts_in_total from 100k to 10k. The default value of the ",(0,a.kt)("inlineCode",{parentName:"li"},"max_parts_in_total")," setting for MergeTree tables has been lowered from 100,000 to 10,000. The reason for this change is that we observed that a large number of data parts is likely to cause a slow startup time of services in the cloud. A large number of parts usually indicates a choice of too granular partition key, which is typically done accidentally and should be avoided. The change of default will allow the detection of these cases earlier. ")),(0,a.kt)("h3",{id:"console-changes-1"},"Console changes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Enhanced credit usage details in the Billing view for trial users"),(0,a.kt)("li",{parentName:"ul"},"Improved tooltips and help text, and added a link to the pricing page in the Usage view"),(0,a.kt)("li",{parentName:"ul"},"Improved workflow when switching options for IP filtering"),(0,a.kt)("li",{parentName:"ul"},"Added resend email confirmation button to the cloud console")),(0,a.kt)("h2",{id:"october-4-2022"},"October 4, 2022"),(0,a.kt)("p",null,"ClickHouse Cloud began its public Beta on October 4th, 2022. ",(0,a.kt)("a",{parentName:"p",href:"https://clickhouse.com/blog/clickhouse-cloud-public-beta"},"Learn more"),"."),(0,a.kt)("p",null,"The ClickHouse Cloud version is based on ClickHouse core v22.10. For a list of compatible features, refer to the ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/whats-new/cloud-compatibility"},"Cloud Compatibility")," guide."))}p.isMDXComponent=!0}}]);