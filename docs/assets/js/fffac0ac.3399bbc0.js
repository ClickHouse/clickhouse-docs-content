"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[25282],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),g=o,m=u["".concat(s,".").concat(g)]||u[g]||f[g]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=g;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},901:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const i={},a="Ignoring incorrect settings",c={permalink:"/docs/knowledgebase/ignoring-incorrect-settings",source:"@site/knowledgebase/ignoring-incorrect-settings.md",title:"Ignoring incorrect settings",description:"When a user-level setting is specified in the wrong place, the server won't start and an exception message is sent to the log. However, you can tell ClickHouse to ignore the incorrect setting using the skipcheckforincorrectsettings setting:",date:"2023-03-17T17:39:50.000Z",formattedDate:"March 17, 2023",tags:[],readingTime:.345,hasTruncateMarker:!1,authors:[],frontMatter:{},prevItem:{title:"How do I contribute code to ClickHouse?",permalink:"/docs/knowledgebase/how-do-i-contribute-code-to-clickhouse"},nextItem:{title:"Improving Map performance",permalink:"/docs/knowledgebase/improve-map-performance"}},s={authorsImageUrls:[]},l=[],p={toc:l},u="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When a user-level setting is specified in the wrong place, the server won't start and an exception message is sent to the log. However, you can tell ClickHouse to ignore the incorrect setting using the ",(0,o.kt)("inlineCode",{parentName:"p"},"skip_check_for_incorrect_settings")," setting:"),(0,o.kt)("p",null,"Add the following to ",(0,o.kt)("inlineCode",{parentName:"p"},"config.xml"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<skip_check_for_incorrect_settings>1</skip_check_for_incorrect_settings>\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"User-level settings should be specified in ",(0,o.kt)("inlineCode",{parentName:"p"},"users.xml")," inside a ",(0,o.kt)("inlineCode",{parentName:"p"},"<profile>")," section for the specific user profile, (or in ",(0,o.kt)("inlineCode",{parentName:"p"},"<default>")," for default settings.")))}f.isMDXComponent=!0}}]);