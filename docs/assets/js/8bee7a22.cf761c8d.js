"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[43095,65918],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),p=s(a),m=i,k=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return a?n.createElement(k,l(l({ref:t},u),{},{components:a})):n.createElement(k,l({ref:t},u))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,l=new Array(o);l[0]=p;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:i,l[1]=r;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},17017:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>s});var n=a(87462),i=(a(67294),a(3905));const o={sidebar_label:"Marketplace",slug:"/en/cloud/marketplace",title:"Marketplace"},l=void 0,r={unversionedId:"en/cloud/marketplace",id:"en/cloud/marketplace",title:"Marketplace",description:"How can I start using ClickHouse Cloud connected to my AWS/GCP/Azure account billing?",source:"@site/docs/en/cloud/marketplace.md",sourceDirName:"en/cloud",slug:"/en/cloud/marketplace",permalink:"/docs/en/cloud/marketplace",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/cloud/marketplace.md",tags:[],version:"current",frontMatter:{sidebar_label:"Marketplace",slug:"/en/cloud/marketplace",title:"Marketplace"},sidebar:"english",previous:{title:"Upgrades",permalink:"/docs/en/manage/updates"},next:{title:"Cloud Reference",permalink:"/docs/category/cloud-reference"}},c={},s=[{value:"How can I start using ClickHouse Cloud connected to my AWS/GCP/Azure account billing?",id:"how-can-i-start-using-clickhouse-cloud-connected-to-my-awsgcpazure-account-billing",level:2},{value:"AWS (GCP and AZURE coming soon)",id:"aws-gcp-and-azure-coming-soon",level:3},{value:"How can I understand that my organization is connected to the aws marketplace billing?",id:"how-can-i-understand-that-my-organization-is-connected-to-the-aws-marketplace-billing",level:2},{value:"I am an existing ClickHouse Cloud user. What will happen if I subscribe to the CH Cloud via aws marketplace?",id:"i-am-an-existing-clickhouse-cloud-user-what-will-happen-if-i-subscribe-to-the-ch-cloud-via-aws-marketplace",level:2},{value:"I am an existing ClickHouse Cloud user and I want my existing services to be billed via marketplace.",id:"i-am-an-existing-clickhouse-cloud-user-and-i-want-my-existing-services-to-be-billed-via-marketplace",level:2},{value:"I subscribed as a marketplace user and now I want to unsubscribe from the ClickHouse Cloud.",id:"i-subscribed-as-a-marketplace-user-and-now-i-want-to-unsubscribe-from-the-clickhouse-cloud",level:2},{value:"Previously I subscribed to ClickHouse Cloud as a marketplace user, then I unsubscribed, but now I want to subscribe back.",id:"previously-i-subscribed-to-clickhouse-cloud-as-a-marketplace-user-then-i-unsubscribed-but-now-i-want-to-subscribe-back",level:2},{value:"How do I access my invoice for my AWS marketplace subscription to the ClickHouse Cloud service?",id:"how-do-i-access-my-invoice-for-my-aws-marketplace-subscription-to-the-clickhouse-cloud-service",level:2},{value:"Why do the dates on the Usage statements not match my AWS Marketplace Invoice?",id:"why-do-the-dates-on-the-usage-statements-not-match-my-aws-marketplace-invoice",level:3},{value:"Where can I find general billing information",id:"where-can-i-find-general-billing-information",level:2}],u={toc:s};function d(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"how-can-i-start-using-clickhouse-cloud-connected-to-my-awsgcpazure-account-billing"},"How can I start using ClickHouse Cloud connected to my AWS/GCP/Azure account billing?"),(0,i.kt)("h3",{id:"aws-gcp-and-azure-coming-soon"},"AWS (GCP and AZURE coming soon)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Log into the AWS console using your AWS account"),(0,i.kt)("li",{parentName:"ul"},"Navigate to the ",(0,i.kt)("a",{parentName:"li",href:"https://aws.amazon.com/marketplace/pp/prodview-jettukeanwrfc"},"ClickHouse Cloud at aws marketplace")),(0,i.kt)("li",{parentName:"ul"},'Click "View purchase options"'),(0,i.kt)("li",{parentName:"ul"},'In the "Contract Options" section of the page, enter any number in the Units field. This will not affect the price your pay as the price for these units for the public offering is $0. These units are usually used when accepting a private offer from ClickHouse Cloud.'),(0,i.kt)("li",{parentName:"ul"},'Click "Create contract"'),(0,i.kt)("li",{parentName:"ul"},'Click "Set up your account".'),(0,i.kt)("li",{parentName:"ul"},"You will be redirected to the special aws marketplace ClickHouse Cloud login page. Please, complete your sign-in / sign-up at this page so we can bind your ClickHouse Cloud organization to AWS billing:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},'If you are a new CH Cloud user, click "Register" at the bottom of the page. You will be prompted to create a new user and verify the email. After verifying your email, you can leave the ClickHouse Cloud login page and login using the new username at the ',(0,i.kt)("a",{parentName:"li",href:"https://clickhouse.cloud"},"https://clickhouse.cloud"),"."),(0,i.kt)("li",{parentName:"ul"},"If you are an existing CH Cloud user, simply log in using your credentials."))),(0,i.kt)("li",{parentName:"ul"},"After successful log in, a new ClickHouse Cloud organization will be created. This organization will be connected to your AWS billing account.")),(0,i.kt)("h2",{id:"how-can-i-understand-that-my-organization-is-connected-to-the-aws-marketplace-billing"},"How can I understand that my organization is connected to the aws marketplace billing?"),(0,i.kt)("p",null,"In ClickHouse Cloud console, navigate to ",(0,i.kt)("strong",{parentName:"p"},"Admin")," -> ",(0,i.kt)("strong",{parentName:"p"},"Billing"),". You should see the name of the marketplace and the link in the ",(0,i.kt)("strong",{parentName:"p"},"Payment details section")),(0,i.kt)("h2",{id:"i-am-an-existing-clickhouse-cloud-user-what-will-happen-if-i-subscribe-to-the-ch-cloud-via-aws-marketplace"},"I am an existing ClickHouse Cloud user. What will happen if I subscribe to the CH Cloud via aws marketplace?"),(0,i.kt)("p",null,"A separate organization connected to the marketplace will be created. Your existing services and organizations will remain and they will not be connected to the marketplace billing."),(0,i.kt)("p",null,"You can switch between organizations in the top right corner of the ClickHouse Cloud console."),(0,i.kt)("h2",{id:"i-am-an-existing-clickhouse-cloud-user-and-i-want-my-existing-services-to-be-billed-via-marketplace"},"I am an existing ClickHouse Cloud user and I want my existing services to be billed via marketplace."),(0,i.kt)("p",null,"Please contact ",(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.cloud/support"},"ClickHouse Cloud support")," in this case."),(0,i.kt)("h2",{id:"i-subscribed-as-a-marketplace-user-and-now-i-want-to-unsubscribe-from-the-clickhouse-cloud"},"I subscribed as a marketplace user and now I want to unsubscribe from the ClickHouse Cloud."),(0,i.kt)("p",null,"Note that you can simply stop using ClickHouse Cloud and delete all existing ClickHouse Cloud services. Even though the subscription will still be active, you will not be paying anything as ClickHouse Cloud doesn't have any recurring fees."),(0,i.kt)("p",null,"If you want to unsubscribe, please navigate to the Cloud Provider console and cancel the subscription renewal there. Once the subscription ends, all existing services will be stopped and you will be prompted to add a credit card. If no card was added, after two weeks all existing services will be deleted."),(0,i.kt)("h2",{id:"previously-i-subscribed-to-clickhouse-cloud-as-a-marketplace-user-then-i-unsubscribed-but-now-i-want-to-subscribe-back"},"Previously I subscribed to ClickHouse Cloud as a marketplace user, then I unsubscribed, but now I want to subscribe back."),(0,i.kt)("p",null,'In that case please subscribe to the ClickHouse Cloud as usual (see "How can I start using ClickHouse Cloud connected to my AWS/GCP/Azure account billing?"). Note that a new ClickHouse Cloud organization will be created and connected to the marketplace.'),(0,i.kt)("h2",{id:"how-do-i-access-my-invoice-for-my-aws-marketplace-subscription-to-the-clickhouse-cloud-service"},"How do I access my invoice for my AWS marketplace subscription to the ClickHouse Cloud service?"),(0,i.kt)("p",null,"All marketplace subscriptions will be billed and invoiced by AWS. You can download the invoice from the AWS Billing Dashboard."),(0,i.kt)("h3",{id:"why-do-the-dates-on-the-usage-statements-not-match-my-aws-marketplace-invoice"},"Why do the dates on the Usage statements not match my AWS Marketplace Invoice?"),(0,i.kt)("p",null,"AWS Marketplace billing follows the calendar month cycle.  For example, for usage between December 1st and January 1st, an invoice will be generated between January 3rd and January 5th"),(0,i.kt)("p",null,"ClickHouse Cloud usage statements follow a different billing cycle where usage is metered and reported over 30 days starting from the day of sign up"),(0,i.kt)("p",null,"The usage and invoice dates will differ if these dates are not the same. Since usage statements track usage by day for a given service, users can rely on statements to see the breakdown of costs."),(0,i.kt)("h2",{id:"where-can-i-find-general-billing-information"},"Where can I find general billing information"),(0,i.kt)("p",null,"Please see the ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/manage/billing"},"billing")," documentation."))}d.isMDXComponent=!0},55694:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var n=a(87462),i=(a(67294),a(3905)),o=a(17017);const l={slug:"/en/faq/marketplace",title:"Marketplace"},r=void 0,c={unversionedId:"en/faq/marketplace",id:"en/faq/marketplace",title:"Marketplace",description:"",source:"@site/docs/en/faq/marketplace.md",sourceDirName:"en/faq",slug:"/en/faq/marketplace",permalink:"/docs/en/faq/marketplace",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/faq/marketplace.md",tags:[],version:"current",frontMatter:{slug:"/en/faq/marketplace",title:"Marketplace"},sidebar:"english",previous:{title:"Can I use ClickHouse as a time-series database?",permalink:"/docs/en/faq/use-cases/time-series"},next:{title:"What's New",permalink:"/docs/en/whats-new"}},s={},u=[],d={toc:u};function p(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(o.default,{mdxType:"Content"}))}p.isMDXComponent=!0}}]);