"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[97852],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),o=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=o(n),c=i,d=m["".concat(p,".").concat(c)]||m[c]||k[c]||l;return n?a.createElement(d,r(r({ref:t},u),{},{components:n})):a.createElement(d,r({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=c;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[m]="string"==typeof e?e:i,r[1]=s;for(var o=2;o<l;o++)r[o]=n[o];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},51359:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>k,frontMatter:()=>l,metadata:()=>s,toc:()=>o});var a=n(87462),i=(n(67294),n(3905));const l={slug:"/en/sql-reference/functions/bit-functions",sidebar_position:48,sidebar_label:"Bit"},r="Bit Functions",s={unversionedId:"en/sql-reference/functions/bit-functions",id:"en/sql-reference/functions/bit-functions",title:"Bit Functions",description:"Bit functions work for any pair of types from UInt8, UInt16, UInt32, UInt64, Int8, Int16, Int32, Int64, Float32, or Float64. Some functions support String and FixedString types.",source:"@site/docs/en/sql-reference/functions/bit-functions.md",sourceDirName:"en/sql-reference/functions",slug:"/en/sql-reference/functions/bit-functions",permalink:"/docs/en/sql-reference/functions/bit-functions",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/functions/bit-functions.md",tags:[],version:"current",sidebarPosition:48,frontMatter:{slug:"/en/sql-reference/functions/bit-functions",sidebar_position:48,sidebar_label:"Bit"},sidebar:"sqlreference",previous:{title:"Splitting and Merging Strings and Arrays",permalink:"/docs/en/sql-reference/functions/splitting-merging-functions"},next:{title:"Bitmap",permalink:"/docs/en/sql-reference/functions/bitmap-functions"}},p={},o=[{value:"bitAnd(a, b)",id:"bitanda-b",level:2},{value:"bitOr(a, b)",id:"bitora-b",level:2},{value:"bitXor(a, b)",id:"bitxora-b",level:2},{value:"bitNot(a)",id:"bitnota",level:2},{value:"bitShiftLeft(a, b)",id:"bitshiftlefta-b",level:2},{value:"bitShiftRight(a, b)",id:"bitshiftrighta-b",level:2},{value:"bitRotateLeft(a, b)",id:"bitrotatelefta-b",level:2},{value:"bitRotateRight(a, b)",id:"bitrotaterighta-b",level:2},{value:"bitSlice(s, offset, length)",id:"bitslices-offset-length",level:2},{value:"bitTest",id:"bittest",level:2},{value:"bitTestAll",id:"bittestall",level:2},{value:"bitTestAny",id:"bittestany",level:2},{value:"bitCount",id:"bitcount",level:2},{value:"bitHammingDistance",id:"bithammingdistance",level:2}],u={toc:o},m="wrapper";function k(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"bit-functions"},"Bit Functions"),(0,i.kt)("p",null,"Bit functions work for any pair of types from ",(0,i.kt)("inlineCode",{parentName:"p"},"UInt8"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"UInt16"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"UInt32"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"UInt64"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Int8"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Int16"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Int32"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Int64"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Float32"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"Float64"),". Some functions support ",(0,i.kt)("inlineCode",{parentName:"p"},"String")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"FixedString")," types."),(0,i.kt)("p",null,"The result type is an integer with bits equal to the maximum bits of its arguments. If at least one of the arguments is signed, the result is a signed number. If an argument is a floating-point number, it is cast to Int64."),(0,i.kt)("h2",{id:"bitanda-b"},"bitAnd(a, b)"),(0,i.kt)("h2",{id:"bitora-b"},"bitOr(a, b)"),(0,i.kt)("h2",{id:"bitxora-b"},"bitXor(a, b)"),(0,i.kt)("h2",{id:"bitnota"},"bitNot(a)"),(0,i.kt)("h2",{id:"bitshiftlefta-b"},"bitShiftLeft(a, b)"),(0,i.kt)("p",null,"Shifts the binary representation of a value to the left by a specified number of bit positions."),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"FixedString")," or a ",(0,i.kt)("inlineCode",{parentName:"p"},"String")," is treated as a single multibyte value."),(0,i.kt)("p",null,"Bits of a ",(0,i.kt)("inlineCode",{parentName:"p"},"FixedString")," value are lost as they are shifted out. On the contrary, a ",(0,i.kt)("inlineCode",{parentName:"p"},"String")," value is extended with additional bytes, so no bits are lost."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Syntax")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"bitShiftLeft(a, b)\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Arguments")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"a")," \u2014 A value to shift. ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"Integer types"),", ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/string"},"String")," or ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/fixedstring"},"FixedString"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"b")," \u2014 The number of shift positions. ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"Unsigned integer types"),", 64 bit types or less are allowed.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returned value")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Shifted value.")),(0,i.kt)("p",null,"The type of the returned value is the same as the type of the input value."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("p",null,"In the following queries ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/functions/encoding-functions#bin"},"bin")," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/functions/encoding-functions#hex"},"hex")," functions are used to show bits of shifted values."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT 99 AS a, bin(a), bitShiftLeft(a, 2) AS a_shifted, bin(a_shifted);\nSELECT 'abc' AS a, hex(a), bitShiftLeft(a, 4) AS a_shifted, hex(a_shifted);\nSELECT toFixedString('abc', 3) AS a, hex(a), bitShiftLeft(a, 4) AS a_shifted, hex(a_shifted);\n")),(0,i.kt)("p",null,"Result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500a\u2500\u252c\u2500bin(99)\u2500\u2500\u252c\u2500a_shifted\u2500\u252c\u2500bin(bitShiftLeft(99, 2))\u2500\u2510\n\u2502 99 \u2502 01100011 \u2502       140 \u2502 10001100                 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500a\u2500\u2500\u2500\u252c\u2500hex('abc')\u2500\u252c\u2500a_shifted\u2500\u252c\u2500hex(bitShiftLeft('abc', 4))\u2500\u2510\n\u2502 abc \u2502 616263     \u2502 &0        \u2502 06162630                    \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500a\u2500\u2500\u2500\u252c\u2500hex(toFixedString('abc', 3))\u2500\u252c\u2500a_shifted\u2500\u252c\u2500hex(bitShiftLeft(toFixedString('abc', 3), 4))\u2500\u2510\n\u2502 abc \u2502 616263                       \u2502 &0        \u2502 162630                                        \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("h2",{id:"bitshiftrighta-b"},"bitShiftRight(a, b)"),(0,i.kt)("p",null,"Shifts the binary representation of a value to the right by a specified number of bit positions."),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"FixedString")," or a ",(0,i.kt)("inlineCode",{parentName:"p"},"String")," is treated as a single multibyte value. Note that the length of a ",(0,i.kt)("inlineCode",{parentName:"p"},"String")," value is reduced as bits are shifted out."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Syntax")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"bitShiftRight(a, b)\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Arguments")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"a")," \u2014 A value to shift. ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"Integer types"),", ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/string"},"String")," or ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/fixedstring"},"FixedString"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"b")," \u2014 The number of shift positions. ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"Unsigned integer types"),", 64 bit types or less are allowed.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returned value")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Shifted value.")),(0,i.kt)("p",null,"The type of the returned value is the same as the type of the input value."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("p",null,"Query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT 101 AS a, bin(a), bitShiftRight(a, 2) AS a_shifted, bin(a_shifted);\nSELECT 'abc' AS a, hex(a), bitShiftRight(a, 12) AS a_shifted, hex(a_shifted);\nSELECT toFixedString('abc', 3) AS a, hex(a), bitShiftRight(a, 12) AS a_shifted, hex(a_shifted);\n")),(0,i.kt)("p",null,"Result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500a\u2500\u252c\u2500bin(101)\u2500\u252c\u2500a_shifted\u2500\u252c\u2500bin(bitShiftRight(101, 2))\u2500\u2510\n\u2502 101 \u2502 01100101 \u2502        25 \u2502 00011001                   \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500a\u2500\u2500\u2500\u252c\u2500hex('abc')\u2500\u252c\u2500a_shifted\u2500\u252c\u2500hex(bitShiftRight('abc', 12))\u2500\u2510\n\u2502 abc \u2502 616263     \u2502           \u2502 0616                          \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500a\u2500\u2500\u2500\u252c\u2500hex(toFixedString('abc', 3))\u2500\u252c\u2500a_shifted\u2500\u252c\u2500hex(bitShiftRight(toFixedString('abc', 3), 12))\u2500\u2510\n\u2502 abc \u2502 616263                       \u2502           \u2502 000616                                          \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("h2",{id:"bitrotatelefta-b"},"bitRotateLeft(a, b)"),(0,i.kt)("h2",{id:"bitrotaterighta-b"},"bitRotateRight(a, b)"),(0,i.kt)("h2",{id:"bitslices-offset-length"},"bitSlice(s, offset, length)"),(0,i.kt)("p",null,"Returns a substring starting with the bit from the \u2018offset\u2019 index that is \u2018length\u2019 bits long. bits indexing starts from\n1"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Syntax")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"bitSlice(s, offset[, length])\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Arguments")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"s")," \u2014 s is ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/string"},"String")," or ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/fixedstring"},"FixedString"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"offset")," \u2014 The start index with bit, A positive value indicates an offset on the left, and a negative value is an indent on the right. Numbering of the bits begins with 1."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"length")," \u2014 The length of substring with bit. If you specify a negative value, the function returns an open substring ","[","offset, array_length - length","]",". If you omit the value, the function returns the substring ","[","offset, the_end_string","]",". If length exceeds s, it will be truncate.If length isn't multiple of 8, will fill 0 on the right.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returned value")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The substring. ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/string"},"String"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("p",null,"Query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"select bin('Hello'), bin(bitSlice('Hello', 1, 8))\nselect bin('Hello'), bin(bitSlice('Hello', 1, 2))\nselect bin('Hello'), bin(bitSlice('Hello', 1, 9))\nselect bin('Hello'), bin(bitSlice('Hello', -4, 8))\n")),(0,i.kt)("p",null,"Result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500bin('Hello')\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500bin(bitSlice('Hello', 1, 8))\u2500\u2510\n\u2502 0100100001100101011011000110110001101111 \u2502 01001000                     \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500bin('Hello')\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500bin(bitSlice('Hello', 1, 2))\u2500\u2510\n\u2502 0100100001100101011011000110110001101111 \u2502 01000000                     \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500bin('Hello')\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500bin(bitSlice('Hello', 1, 9))\u2500\u2510\n\u2502 0100100001100101011011000110110001101111 \u2502 0100100000000000             \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500bin('Hello')\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500bin(bitSlice('Hello', -4, 8))\u2500\u2510\n\u2502 0100100001100101011011000110110001101111 \u2502 11110000                      \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("h2",{id:"bittest"},"bitTest"),(0,i.kt)("p",null,"Takes any integer and converts it into ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Binary_number"},"binary form"),", returns the value of a bit at specified position. The countdown starts from 0 from the right to the left."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Syntax")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT bitTest(number, index)\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Arguments")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"number")," \u2013 Integer number."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"index")," \u2013 Position of bit.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returned values")),(0,i.kt)("p",null,"Returns a value of bit at specified position."),(0,i.kt)("p",null,"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"UInt8"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("p",null,"For example, the number 43 in base-2 (binary) numeral system is 101011."),(0,i.kt)("p",null,"Query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT bitTest(43, 1);\n")),(0,i.kt)("p",null,"Result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500bitTest(43, 1)\u2500\u2510\n\u2502              1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,"Another example:"),(0,i.kt)("p",null,"Query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT bitTest(43, 2);\n")),(0,i.kt)("p",null,"Result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500bitTest(43, 2)\u2500\u2510\n\u2502              0 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("h2",{id:"bittestall"},"bitTestAll"),(0,i.kt)("p",null,"Returns result of ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Logical_conjunction"},"logical conjuction")," (AND operator) of all bits at given positions. The countdown starts from 0 from the right to the left."),(0,i.kt)("p",null,"The conjuction for bitwise operations:"),(0,i.kt)("p",null,"0 AND 0 = 0"),(0,i.kt)("p",null,"0 AND 1 = 0"),(0,i.kt)("p",null,"1 AND 0 = 0"),(0,i.kt)("p",null,"1 AND 1 = 1"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Syntax")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT bitTestAll(number, index1, index2, index3, index4, ...)\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Arguments")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"number")," \u2013 Integer number."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"index1"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"index2"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"index3"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"index4")," \u2013 Positions of bit. For example, for set of positions (",(0,i.kt)("inlineCode",{parentName:"li"},"index1"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"index2"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"index3"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"index4"),") is true if and only if all of its positions are true (",(0,i.kt)("inlineCode",{parentName:"li"},"index1")," \u22c0 ",(0,i.kt)("inlineCode",{parentName:"li"},"index2"),", \u22c0 ",(0,i.kt)("inlineCode",{parentName:"li"},"index3")," \u22c0 ",(0,i.kt)("inlineCode",{parentName:"li"},"index4"),").")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returned values")),(0,i.kt)("p",null,"Returns result of logical conjuction."),(0,i.kt)("p",null,"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"UInt8"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("p",null,"For example, the number 43 in base-2 (binary) numeral system is 101011."),(0,i.kt)("p",null,"Query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT bitTestAll(43, 0, 1, 3, 5);\n")),(0,i.kt)("p",null,"Result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500bitTestAll(43, 0, 1, 3, 5)\u2500\u2510\n\u2502                          1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,"Another example:"),(0,i.kt)("p",null,"Query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT bitTestAll(43, 0, 1, 3, 5, 2);\n")),(0,i.kt)("p",null,"Result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500bitTestAll(43, 0, 1, 3, 5, 2)\u2500\u2510\n\u2502                             0 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("h2",{id:"bittestany"},"bitTestAny"),(0,i.kt)("p",null,"Returns result of ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Logical_disjunction"},"logical disjunction")," (OR operator) of all bits at given positions. The countdown starts from 0 from the right to the left."),(0,i.kt)("p",null,"The disjunction for bitwise operations:"),(0,i.kt)("p",null,"0 OR 0 = 0"),(0,i.kt)("p",null,"0 OR 1 = 1"),(0,i.kt)("p",null,"1 OR 0 = 1"),(0,i.kt)("p",null,"1 OR 1 = 1"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Syntax")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT bitTestAny(number, index1, index2, index3, index4, ...)\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Arguments")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"number")," \u2013 Integer number."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"index1"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"index2"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"index3"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"index4")," \u2013 Positions of bit.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returned values")),(0,i.kt)("p",null,"Returns result of logical disjuction."),(0,i.kt)("p",null,"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"UInt8"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("p",null,"For example, the number 43 in base-2 (binary) numeral system is 101011."),(0,i.kt)("p",null,"Query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT bitTestAny(43, 0, 2);\n")),(0,i.kt)("p",null,"Result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500bitTestAny(43, 0, 2)\u2500\u2510\n\u2502                    1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,"Another example:"),(0,i.kt)("p",null,"Query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT bitTestAny(43, 4, 2);\n")),(0,i.kt)("p",null,"Result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500bitTestAny(43, 4, 2)\u2500\u2510\n\u2502                    0 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("h2",{id:"bitcount"},"bitCount"),(0,i.kt)("p",null,"Calculates the number of bits set to one in the binary representation of a number."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Syntax")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"bitCount(x)\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Arguments")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"x")," \u2014 ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"Integer")," or ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/float"},"floating-point")," number. The function uses the value representation in memory. It allows supporting floating-point numbers.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returned value")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Number of bits set to one in the input number.")),(0,i.kt)("p",null,"The function does not convert input value to a larger type (",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Sign_extension"},"sign extension"),"). So, for example, ",(0,i.kt)("inlineCode",{parentName:"p"},"bitCount(toUInt8(-1)) = 8"),"."),(0,i.kt)("p",null,"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"UInt8"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("p",null,"Take for example the number 333. Its binary representation: 0000000101001101."),(0,i.kt)("p",null,"Query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT bitCount(333);\n")),(0,i.kt)("p",null,"Result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500bitCount(333)\u2500\u2510\n\u2502             5 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("h2",{id:"bithammingdistance"},"bitHammingDistance"),(0,i.kt)("p",null,"Returns the ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Hamming_distance"},"Hamming Distance")," between the bit representations of two integer values. Can be used with ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/functions/hash-functions#ngramsimhash"},"SimHash")," functions for detection of semi-duplicate strings. The smaller is the distance, the more likely those strings are the same."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Syntax")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"bitHammingDistance(int1, int2)\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Arguments")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"int1")," \u2014 First integer value. ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"Int64"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"int2")," \u2014 Second integer value. ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"Int64"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returned value")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The Hamming distance.")),(0,i.kt)("p",null,"Type: ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt8"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples")),(0,i.kt)("p",null,"Query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT bitHammingDistance(111, 121);\n")),(0,i.kt)("p",null,"Result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500bitHammingDistance(111, 121)\u2500\u2510\n\u2502                            3 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,"With ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/functions/hash-functions#ngramsimhash"},"SimHash"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT bitHammingDistance(ngramSimHash('cat ate rat'), ngramSimHash('rat ate cat'));\n")),(0,i.kt)("p",null,"Result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500bitHammingDistance(ngramSimHash('cat ate rat'), ngramSimHash('rat ate cat'))\u2500\u2510\n\u2502                                                                            5 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}k.isMDXComponent=!0}}]);