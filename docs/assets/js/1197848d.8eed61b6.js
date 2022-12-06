"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[27113,59876],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=i.createContext({}),c=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(a),m=n,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return a?i.createElement(h,r(r({ref:t},d),{},{components:a})):i.createElement(h,r({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,r[1]=l;for(var c=2;c<o;c++)r[c]=a[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}p.displayName="MDXCreateElement"},23317:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=a(87462),n=(a(67294),a(3905));const o={sidebar_label:"Billing",slug:"/en/manage/billing",title:"Billing"},r=void 0,l={unversionedId:"en/cloud/manage/billing",id:"en/cloud/manage/billing",title:"Billing",description:"Pricing",source:"@site/docs/en/cloud/manage/billing.md",sourceDirName:"en/cloud/manage",slug:"/en/manage/billing",permalink:"/docs/en/manage/billing",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/cloud/manage/billing.md",tags:[],version:"current",frontMatter:{sidebar_label:"Billing",slug:"/en/manage/billing",title:"Billing"},sidebar:"english",previous:{title:"Backups",permalink:"/docs/en/manage/backups"},next:{title:"Upgrades",permalink:"/docs/en/manage/updates"}},s={},c=[{value:"Pricing",id:"pricing",level:2},{value:"Sample scenarios and associated cost",id:"sample-scenarios-and-associated-cost",level:2},{value:"Dev/Test scenario ~ $330 per month",id:"devtest-scenario--330-per-month",level:3},{value:"Pricing breakdown for this example:",id:"pricing-breakdown-for-this-example",level:4},{value:"Steady workload scenario ~$2,809 per month",id:"steady-workload-scenario-2809-per-month",level:3},{value:"Pricing breakdown for this example:",id:"pricing-breakdown-for-this-example-1",level:4},{value:"Heavy usage scenario for ad-hoc analytics ~$1,490 per month",id:"heavy-usage-scenario-for-ad-hoc-analytics-1490-per-month",level:3},{value:"Pricing breakdown for this example:",id:"pricing-breakdown-for-this-example-2",level:4},{value:"FAQs",id:"faqs",level:2},{value:"What are the best practices?",id:"what-are-the-best-practices",level:3},{value:"How is storage on disk calculated?",id:"how-is-storage-on-disk-calculated",level:3},{value:"How do I estimate compression?",id:"how-do-i-estimate-compression",level:3},{value:"What tools does ClickHouse offer to estimate the cost for running a service in the cloud if I have a self-managed deployment?",id:"what-tools-does-clickhouse-offer-to-estimate-the-cost-for-running-a-service-in-the-cloud-if-i-have-a-self-managed-deployment",level:3},{value:"Do backups count towards total storage?",id:"do-backups-count-towards-total-storage",level:3},{value:"What billing options are available for ClickHouse Cloud?",id:"what-billing-options-are-available-for-clickhouse-cloud",level:3},{value:"How long is the billing cycle?",id:"how-long-is-the-billing-cycle",level:3},{value:"What controls does ClickHouse Cloud offer to manage costs?",id:"what-controls-does-clickhouse-cloud-offer-to-manage-costs",level:3},{value:"If I have multiple services, do I get an invoice per service or a consolidated invoice?",id:"if-i-have-multiple-services-do-i-get-an-invoice-per-service-or-a-consolidated-invoice",level:3},{value:"If I add my credit card and upgrade before my trial period and credits expire, will I be charged?",id:"if-i-add-my-credit-card-and-upgrade-before-my-trial-period-and-credits-expire-will-i-be-charged",level:3},{value:"How can I keep track of my spending?",id:"how-can-i-keep-track-of-my-spending",level:2}],d={toc:c};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"pricing"},"Pricing"),(0,n.kt)("p",null,"For pricing information see the ",(0,n.kt)("a",{parentName:"p",href:"https://clickhouse.com/pricing"},"ClickHouse Cloud Pricing")," page.  To understand what can affect your bill, and ways that you\ncan manage your spend, keep reading."),(0,n.kt)("h2",{id:"sample-scenarios-and-associated-cost"},"Sample scenarios and associated cost"),(0,n.kt)("h3",{id:"devtest-scenario--330-per-month"},"Dev/Test scenario ~ $330 per month"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Active workload ~50% time"),(0,n.kt)("li",{parentName:"ul"},"24 GB RAM"),(0,n.kt)("li",{parentName:"ul"},"6 CPU"),(0,n.kt)("li",{parentName:"ul"},"256 GB Data")),(0,n.kt)("h4",{id:"pricing-breakdown-for-this-example"},"Pricing breakdown for this example:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Component"),(0,n.kt)("th",{parentName:"tr",align:"right"},"USD Estimate"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Compute units"),(0,n.kt)("td",{parentName:"tr",align:"right"},"$315")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Storage"),(0,n.kt)("td",{parentName:"tr",align:"right"},"$15")))),(0,n.kt)("h3",{id:"steady-workload-scenario-2809-per-month"},"Steady workload scenario ~$2,809 per month"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Active workload ~100% time"),(0,n.kt)("li",{parentName:"ul"},"96 GB RAM"),(0,n.kt)("li",{parentName:"ul"},"24 CPU"),(0,n.kt)("li",{parentName:"ul"},"5 TB Data")),(0,n.kt)("h4",{id:"pricing-breakdown-for-this-example-1"},"Pricing breakdown for this example:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Component"),(0,n.kt)("th",{parentName:"tr",align:"right"},"USD Estimate"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Compute units"),(0,n.kt)("td",{parentName:"tr",align:"right"},"$2521")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Storage"),(0,n.kt)("td",{parentName:"tr",align:"right"},"$288")))),(0,n.kt)("h3",{id:"heavy-usage-scenario-for-ad-hoc-analytics-1490-per-month"},"Heavy usage scenario for ad-hoc analytics ~$1,490 per month"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Active workload ~25% time"),(0,n.kt)("li",{parentName:"ul"},"192 GB RAM"),(0,n.kt)("li",{parentName:"ul"},"48 CPU"),(0,n.kt)("li",{parentName:"ul"},"4 TB Data")),(0,n.kt)("h4",{id:"pricing-breakdown-for-this-example-2"},"Pricing breakdown for this example:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Component"),(0,n.kt)("th",{parentName:"tr",align:"right"},"USD Estimate"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Compute units"),(0,n.kt)("td",{parentName:"tr",align:"right"},"$1260")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Storage"),(0,n.kt)("td",{parentName:"tr",align:"right"},"$230")))),(0,n.kt)("p",null,"For help with further estimation, please contact ",(0,n.kt)("a",{parentName:"p",href:"https://clickhouse.cloud/support"},"support")," if you are already a ClickHouse cloud user, or ",(0,n.kt)("a",{parentName:"p",href:"mailto:sales@clickhouse.com"},"sales@clickhouse.com")," otherwise."),(0,n.kt)("h2",{id:"faqs"},"FAQs"),(0,n.kt)("p",null,"Please read these docs on best practices to ",(0,n.kt)("a",{parentName:"p",href:"/docs/en/cloud/bestpractices/"},"optimize your costs in ClickHouse Cloud"),"."),(0,n.kt)("h3",{id:"what-are-the-best-practices"},"What are the best practices?"),(0,n.kt)("p",null,"There are several ",(0,n.kt)("a",{parentName:"p",href:"/docs/en/cloud/bestpractices/"},"areas of optimization"),", some of them include"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Batching inserts  in place of frequent small-size inserts"),(0,n.kt)("li",{parentName:"ul"},"Having fewer columns in tables"),(0,n.kt)("li",{parentName:"ul"},"Choosing a ",(0,n.kt)("a",{parentName:"li",href:"/docs/en/engines/table-engines/mergetree-family/custom-partitioning-key"},"partition key")," so that inserts go into fewer number of partitions"),(0,n.kt)("li",{parentName:"ul"},"Avoiding write-heavy operations in ClickHouse, such as mutations, OPTIMIZE FINAL, and Nullable columns")),(0,n.kt)("h3",{id:"how-is-storage-on-disk-calculated"},"How is storage on disk calculated?"),(0,n.kt)("p",null,"ClickHouse Cloud uses cloud object storage and is metered on the compressed size of data stored in ClickHouse tables."),(0,n.kt)("h3",{id:"how-do-i-estimate-compression"},"How do I estimate compression?"),(0,n.kt)("p",null,"Compression can vary quite a bit by dataset. It is dependent on how compressible the data is in the first place (number of high vs. low cardinality fields), and how the user sets up the schema (using optional codecs or not, for instance). It can be on the order of 10x for common types of analytical data, but it can be significantly lower or higher as well. See the ",(0,n.kt)("a",{parentName:"p",href:"/docs/en/optimize/"},"optimizing")," documentation for guidance, and this ",(0,n.kt)("a",{parentName:"p",href:"https://www.uber.com/blog/logging/"},"Uber blog")," for a detailed logging use case example.\nThe only practical way to know exactly is to ingest your dataset into ClickHouse and compare the size of the dataset with the size stored in ClickHouse."),(0,n.kt)("p",null,"You can use the query ",(0,n.kt)("inlineCode",{parentName:"p"},"SELECT formatReadableSize(total_bytes) FROM system.tables WHERE name = <your table name>"),"."),(0,n.kt)("h3",{id:"what-tools-does-clickhouse-offer-to-estimate-the-cost-for-running-a-service-in-the-cloud-if-i-have-a-self-managed-deployment"},"What tools does ClickHouse offer to estimate the cost for running a service in the cloud if I have a self-managed deployment?"),(0,n.kt)("p",null,"The ClickHouse query log captures ",(0,n.kt)("a",{parentName:"p",href:"/docs/en/operations/system-tables/query_log"},"key metrics")," that can be used to estimate the cost of running a workload in ClickHouse Cloud.  For details on migrating from self managed to ClickHouse Cloud please refer to the ",(0,n.kt)("a",{parentName:"p",href:"/docs/en/integrations/migration/clickhouse-to-cloud"},"migration documentation"),", and contact ",(0,n.kt)("a",{parentName:"p",href:"https://clickhouse.cloud/support"},"ClickHouse Cloud support")," if you have further questions."),(0,n.kt)("h3",{id:"do-backups-count-towards-total-storage"},"Do backups count towards total storage?"),(0,n.kt)("p",null,"ClickHouse Cloud offers two free backups at no additional cost. Backups do not count towards storage."),(0,n.kt)("h3",{id:"what-billing-options-are-available-for-clickhouse-cloud"},"What billing options are available for ClickHouse Cloud?"),(0,n.kt)("p",null,"ClickHouse Cloud supports the following billing options:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Self-service monthly (in USD, via credit card)"),(0,n.kt)("li",{parentName:"ul"},'Direct-sales annual / multi-year (through pre-paid "ClickHouse Credits", in USD, with additional payment options)')),(0,n.kt)("h3",{id:"how-long-is-the-billing-cycle"},"How long is the billing cycle?"),(0,n.kt)("p",null,"Billing follows a ~30 day billing cycle and the start date is tracked as the date when the ClickHouse Cloud organization was created."),(0,n.kt)("h3",{id:"what-controls-does-clickhouse-cloud-offer-to-manage-costs"},"What controls does ClickHouse Cloud offer to manage costs?"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Trial and Annual Commit customers will be notified with automated emails when the consumption hits certain thresholds - 50%, 75%, and 90%, so that users can take action.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"ClickHouse Cloud allows users to set a maximum auto-scaling limit on their compute via ",(0,n.kt)("a",{parentName:"p",href:"/docs/en/manage/scaling"},"Advanced scaling control"),", a significant cost factor for analytical workloads.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The ",(0,n.kt)("a",{parentName:"p",href:"/docs/en/manage/scaling"},"Advanced scaling control")," lets you set memory limits with an option to control the behavior of pausing/idling during inactivity."))),(0,n.kt)("h3",{id:"if-i-have-multiple-services-do-i-get-an-invoice-per-service-or-a-consolidated-invoice"},"If I have multiple services, do I get an invoice per service or a consolidated invoice?"),(0,n.kt)("p",null,"A consolidated invoice is generated for all services in a given organization for a billing period."),(0,n.kt)("h3",{id:"if-i-add-my-credit-card-and-upgrade-before-my-trial-period-and-credits-expire-will-i-be-charged"},"If I add my credit card and upgrade before my trial period and credits expire, will I be charged?"),(0,n.kt)("p",null,"When a user converts from trial to paid before the 14-day trial period ends, but with credits remaining from the trial credit allowance, we continue to draw down from the trial credits during the initial 14-day trial period, and then charge the credit card."),(0,n.kt)("h2",{id:"how-can-i-keep-track-of-my-spending"},"How can I keep track of my spending?"),(0,n.kt)("p",null,"ClickHouse Cloud console includes a Usage display that gives detailed information about usage per service on compute and storage. This can be used to understand the cost breakdown by metered units."))}u.isMDXComponent=!0},23546:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var i=a(87462),n=(a(67294),a(3905)),o=a(23317);const r={sidebar_position:1,slug:"/en/faq/billing",title:"Billing"},l=void 0,s={unversionedId:"en/faq/billing",id:"en/faq/billing",title:"Billing",description:"",source:"@site/docs/en/faq/billing.md",sourceDirName:"en/faq",slug:"/en/faq/billing",permalink:"/docs/en/faq/billing",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/faq/billing.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/en/faq/billing",title:"Billing"},sidebar:"english",previous:{title:"FAQ",permalink:"/docs/en/faq"},next:{title:"Troubleshooting",permalink:"/docs/en/faq/troubleshooting"}},c={},d=[],u={toc:d};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(o.default,{mdxType:"Content"}))}p.isMDXComponent=!0}}]);