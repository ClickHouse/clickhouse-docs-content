"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[7834],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=i.createContext({}),l=function(e){var t=i.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(r),f=n,h=u["".concat(c,".").concat(f)]||u[f]||p[f]||o;return r?i.createElement(h,a(a({ref:t},d),{},{components:r})):i.createElement(h,a({ref:t},d))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var l=2;l<o;l++)a[l]=r[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}u.displayName="MDXCreateElement"},96808:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var i=r(87462),n=(r(67294),r(3905));const o={sidebar_label:"Migration Options",sidebar_position:1,slug:"/en/integrations/redshift/migrate-redshift-to-clickhouse",description:"Migrating Data from Redshift to ClickHouse"},a="Migrating Data from Redshift to ClickHouse",s={unversionedId:"en/integrations/migration/redshift/migrate-redshift-to-clickhouse",id:"en/integrations/migration/redshift/migrate-redshift-to-clickhouse",title:"Migrating Data from Redshift to ClickHouse",description:"Migrating Data from Redshift to ClickHouse",source:"@site/docs/en/integrations/migration/redshift/migrate-redshift-to-clickhouse.md",sourceDirName:"en/integrations/migration/redshift",slug:"/en/integrations/redshift/migrate-redshift-to-clickhouse",permalink:"/docs/en/integrations/redshift/migrate-redshift-to-clickhouse",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/integrations/migration/redshift/migrate-redshift-to-clickhouse.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Migration Options",sidebar_position:1,slug:"/en/integrations/redshift/migrate-redshift-to-clickhouse",description:"Migrating Data from Redshift to ClickHouse"},sidebar:"english",previous:{title:"Object Storage to ClickHouse Cloud",permalink:"/docs/en/integrations/migration/object-storage-to-clickhouse"},next:{title:"Push to ClickHouse",permalink:"/docs/en/integrations/redshift/redshift-push-to-clickhouse"}},c={},l=[],d={toc:l};function p(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,i.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"migrating-data-from-redshift-to-clickhouse"},"Migrating Data from Redshift to ClickHouse"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://aws.amazon.com/redshift/"},"Amazon Redshift")," is a popular cloud data warehousing solution that is part of the Amazon Web Services offerings. This guide presents different approaches to migrating data from a Redshift instance to ClickHouse. We will cover three options:"),(0,n.kt)("img",{src:r(77875).Z,class:"image",alt:"Redshit to ClickHouse Migration Options"}),(0,n.kt)("p",null,"From the ClickHouse instance standpoint, you can either:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"/docs/en/integrations/redshift/redshift-push-to-clickhouse"},"PUSH"))," data to ClickHouse using a third party ETL/ELT tool or service")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"/docs/en/integrations/redshift/redshift-pull-to-clickhouse"},"PULL"))," data from Redshift leveraging the ClickHouse JDBC Bridge")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"/docs/en/integrations/redshift/redshift-pivot-to-clickhouse"},"PIVOT"))," using S3 object storage using an \u201cUnload then load\u201d logic"))),(0,n.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"We used Redshift as a data source in this tutorial. However, the migration approaches presented here are not exclusive to Redshift, and similar steps can be derived for any compatible data source."))))}p.isMDXComponent=!0},77875:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/redshift-to-clickhouse-763a7570093d65fe0d2f8f523f60dc07.png"}}]);