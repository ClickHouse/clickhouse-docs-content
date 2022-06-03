"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[41854],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=p(t),m=a,g=f["".concat(c,".").concat(m)]||f[m]||l[m]||s;return t?r.createElement(g,o(o({ref:n},u),{},{components:t})):r.createElement(g,o({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,o=new Array(s);o[0]=f;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<s;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},37655:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return l}});var r=t(87462),a=t(63366),s=(t(67294),t(3905)),o=["components"],i={sidebar_position:151},c="skewSamp",p={unversionedId:"en/sql-reference/aggregate-functions/reference/skewsamp",id:"en/sql-reference/aggregate-functions/reference/skewsamp",title:"skewSamp",description:"Computes the sample skewness of a sequence.",source:"@site/docs/en/sql-reference/aggregate-functions/reference/skewsamp.md",sourceDirName:"en/sql-reference/aggregate-functions/reference",slug:"/en/sql-reference/aggregate-functions/reference/skewsamp",permalink:"/docs/en/sql-reference/aggregate-functions/reference/skewsamp",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/aggregate-functions/reference/skewsamp.md",tags:[],version:"current",sidebarPosition:151,frontMatter:{sidebar_position:151},sidebar:"english",previous:{title:"skewPop",permalink:"/docs/en/sql-reference/aggregate-functions/reference/skewpop"},next:{title:"kurtPop",permalink:"/docs/en/sql-reference/aggregate-functions/reference/kurtpop"}},u={},l=[],f={toc:l};function m(e){var n=e.components,t=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"skewsamp"},"skewSamp"),(0,s.kt)("p",null,"Computes the ",(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Skewness"},"sample skewness")," of a sequence."),(0,s.kt)("p",null,"It represents an unbiased estimate of the skewness of a random variable if passed values form its sample."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"skewSamp(expr)\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Arguments")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"expr")," \u2014 ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/syntax#syntax-expressions"},"Expression")," returning a number."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returned value")),(0,s.kt)("p",null,"The skewness of the given distribution. Type \u2014 ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/float"},"Float64"),". If ",(0,s.kt)("inlineCode",{parentName:"p"},"n <= 1")," (",(0,s.kt)("inlineCode",{parentName:"p"},"n")," is the size of the sample), then the function returns ",(0,s.kt)("inlineCode",{parentName:"p"},"nan"),"."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT skewSamp(value) FROM series_with_value_column;\n")))}m.isMDXComponent=!0}}]);