"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[41412],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=s(n),d=i,_=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(_,a(a({ref:t},c),{},{components:n})):r.createElement(_,a({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:i,a[1]=u;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},14043:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return p}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],u={sidebar_position:98,slug:"/ru/development/integrating_rust_libraries"},l="\u0418\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044f \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a \u043d\u0430 \u044f\u0437\u044b\u043a\u0435 Rust \u0432 ClickHouse.",s={unversionedId:"ru/development/integrating_rust_libraries",id:"ru/development/integrating_rust_libraries",title:"\u0418\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044f \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a \u043d\u0430 \u044f\u0437\u044b\u043a\u0435 Rust \u0432 ClickHouse.",description:"\u0418\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044f \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a \u0431\u0443\u0434\u0435\u0442 \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u0440\u0430\u0431\u043e\u0442\u044b \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u043d\u043e\u0439 \u0434\u043b\u044f \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438 BLAKE3.",source:"@site/docs/ru/development/integrating_rust_libraries.md",sourceDirName:"ru/development",slug:"/ru/development/integrating_rust_libraries",permalink:"/docs/ru/development/integrating_rust_libraries",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/development/integrating_rust_libraries.md",tags:[],version:"current",sidebarPosition:98,frontMatter:{sidebar_position:98,slug:"/ru/development/integrating_rust_libraries"},sidebar:"russia",previous:{title:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0435 \u0441\u0442\u043e\u0440\u043e\u043d\u043d\u0438\u0435 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438",permalink:"/docs/ru/development/contrib"},next:{title:"Testing",permalink:"/docs/ru/development/tests"}},c={},p=[],m={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044f-\u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a-\u043d\u0430-\u044f\u0437\u044b\u043a\u0435-rust-\u0432-clickhouse"},"\u0418\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044f \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a \u043d\u0430 \u044f\u0437\u044b\u043a\u0435 Rust \u0432 ClickHouse."),(0,o.kt)("p",null,"\u0418\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044f \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a \u0431\u0443\u0434\u0435\u0442 \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u0440\u0430\u0431\u043e\u0442\u044b \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u043d\u043e\u0439 \u0434\u043b\u044f \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438 BLAKE3."),(0,o.kt)("p",null,"\u041f\u0435\u0440\u0432\u044b\u043c \u0448\u0430\u0433\u043e\u043c \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438 \u0432 \u043f\u0430\u043f\u043a\u0443 /rust. \u0414\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0432 \u043f\u0430\u043f\u043a\u0435 \u043f\u0443\u0441\u0442\u043e\u0439 Rust-\u043f\u0440\u043e\u0435\u043a\u0442, \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0432 \u0432 Cargo.toml \u043d\u0443\u0436\u043d\u0443\u044e \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0443. \u0422\u0430\u043a\u0436\u0435 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043a\u043e\u043c\u043f\u0438\u043b\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043d\u043e\u0432\u0443\u044e \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0443 \u043a\u0430\u043a \u0441\u0442\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0443\u044e, \u0434\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c ",(0,o.kt)("inlineCode",{parentName:"p"},'crate-type = ["staticlib"]')," \u0432 Cargo.toml."),(0,o.kt)("p",null,"\u0414\u0430\u043b\u0435\u0435 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0443 \u043a CMake. \u0414\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u0432 ClickHouse \u0431\u044b\u043b\u0430 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0430 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0430 Corrosion. \u041f\u0435\u0440\u0432\u044b\u043c \u0448\u0430\u0433\u043e\u043c \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u043f\u0430\u043f\u043a\u0438 \u0441 \u043d\u043e\u0432\u043e\u0439 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u043e\u0439 \u0432 \u043a\u043e\u0440\u043d\u0435\u0432\u043e\u043c CMakeLists.txt \u043f\u0430\u043f\u043a\u0438 /rust. \u041f\u043e\u0441\u043b\u0435 \u044d\u0442\u043e\u0433\u043e \u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044e \u0441 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u043e\u0439 \u0444\u0430\u0439\u043b CMakeLists.txt, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u0437\u0432\u0430\u043d\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u0438\u0437 Corrosion. \u041a\u0430\u043a \u043f\u0440\u0438\u043c\u0435\u0440, \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u043c \u0444\u0430\u0439\u043b \u0438\u0437 BLAKE3:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"corrosion_import_crate(MANIFEST_PATH Cargo.toml NO_STD)\n\ntarget_include_directories(_ch_rust_blake3 INTERFACE include)\nadd_library(ch_rust::blake3 ALIAS _ch_rust_blake3)\n")),(0,o.kt)("p",null,"\u0422\u0430\u043a\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c, \u043c\u044b \u0441\u043e\u0437\u0434\u0430\u0434\u0438\u043c \u043f\u0440\u0438 \u043f\u043e\u043c\u043e\u0449\u0438 Corrosion \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 CMake-\u0442\u0430\u0440\u0433\u0435\u0442, \u0430 \u0437\u0430\u0442\u0435\u043c \u043f\u0435\u0440\u0435\u043e\u0431\u043e\u0437\u043d\u0430\u0447\u0438\u043c \u0435\u0433\u043e \u0431\u043e\u043b\u0435\u0435 \u043f\u043e\u043d\u044f\u0442\u043d\u044b\u043c \u0438\u043c\u0435\u043d\u0435\u043c. \u0421\u0442\u043e\u0438\u0442 \u043e\u0442\u043c\u0435\u0442\u0438\u0442\u044c, \u0447\u0442\u043e \u0438\u043c\u044f ",(0,o.kt)("inlineCode",{parentName:"p"},"_ch_rust_blake3")," \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442 \u0438\u0437 Cargo.toml, \u0433\u0434\u0435 \u043e\u043d\u043e \u0432\u044b\u0441\u0442\u0443\u043f\u0430\u0435\u0442 \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0438\u043c\u0435\u043d\u0438 \u043f\u0440\u043e\u0435\u043a\u0442\u0430 (",(0,o.kt)("inlineCode",{parentName:"p"},'name = "_ch_rust_blake3"'),")."),(0,o.kt)("p",null,"\u041f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 \u0442\u0438\u043f\u044b \u0434\u0430\u043d\u043d\u044b\u0445 Rust \u043d\u0435 \u0441\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u043c\u044b \u0441 \u0442\u0438\u043f\u0430\u043c\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 C/C++, \u0442\u043e \u0432 \u043f\u0440\u043e\u0435\u043a\u0442\u0435 \u043c\u044b \u043e\u043f\u0438\u0448\u0435\u043c \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u0434\u043b\u044f \u043c\u0435\u0442\u043e\u0434\u043e\u0432-\u043f\u0440\u043e\u0441\u043b\u043e\u0435\u043a, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0431\u0443\u0434\u0443\u0442 \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u044b\u0432\u0430\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435, \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c\u044b\u0435 \u0438\u0437 C/C++, \u0432\u044b\u0437\u044b\u0432\u0430\u0442\u044c \u043c\u0435\u0442\u043e\u0434\u044b \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438, \u0430 \u0437\u0430\u0442\u0435\u043c \u0434\u0435\u043b\u0430\u0442\u044c \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u044b\u0445 \u043e\u0431\u0440\u0430\u0442\u043d\u043e \u0434\u0430\u043d\u043d\u044b\u0445. \u0412 \u0447\u0430\u0441\u0442\u043d\u043e\u0441\u0442\u0438, \u0440\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0438\u043c \u0442\u0430\u043a\u043e\u0439 \u043c\u0435\u0442\u043e\u0434, \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u043d\u044b\u0439 \u0434\u043b\u044f BLAKE3:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'#[no_mangle]\npub unsafe extern "C" fn blake3_apply_shim(\n    begin: *const c_char,\n    _size: u32,\n    out_char_data: *mut u8,\n) -> *mut c_char {\n    if begin.is_null() {\n        let err_str = CString::new("input was a null pointer").unwrap();\n        return err_str.into_raw();\n    }\n    let mut hasher = blake3::Hasher::new();\n    let input_bytes = CStr::from_ptr(begin);\n    let input_res = input_bytes.to_bytes();\n    hasher.update(input_res);\n    let mut reader = hasher.finalize_xof();\n    reader.fill(std::slice::from_raw_parts_mut(out_char_data, blake3::OUT_LEN));\n    std::ptr::null_mut()\n}\n')),(0,o.kt)("p",null,"\u041d\u0430 \u0432\u0445\u043e\u0434 \u043c\u0435\u0442\u043e\u0434 \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u0442 \u0441\u0442\u0440\u043e\u043a\u0443 \u0432 C-\u0441\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u043c\u043e\u043c \u0444\u043e\u0440\u043c\u0430\u0442\u0435, \u0435\u0451 \u0440\u0430\u0437\u043c\u0435\u0440 \u0438 \u0443\u043a\u0430\u0437\u0430\u0442\u0435\u043b\u044c, \u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0431\u0443\u0434\u0435\u0442 \u043f\u043e\u043b\u043e\u0436\u0435\u043d \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442. \u041a\u0440\u043e\u043c\u0435 \u0442\u043e\u0433\u043e, \u0434\u043b\u044f \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u0438\u043c\u0435\u0442\u044c \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0432\u044b\u0432\u0435\u0441\u0442\u0438 \u043e\u0448\u0438\u0431\u043a\u0443, \u043c\u0435\u0442\u043e\u0434 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0441\u0442\u0440\u043e\u043a\u0443 \u0441 \u043d\u0435\u0439 \u043a\u0430\u043a \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0440\u0430\u0431\u043e\u0442\u044b (\u0438 \u043d\u0443\u043b\u0435\u0432\u043e\u0439 \u0443\u043a\u0430\u0437\u0430\u0442\u0435\u043b\u044c \u0432 \u0441\u043b\u0443\u0447\u0430\u0435 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u044f \u043e\u0448\u0438\u0431\u043e\u043a). C-\u0441\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u043c\u044b\u0435 \u043d\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u0432 \u043c\u0435\u0442\u043e\u0434\u0430\u0445 BLAKE3, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u043e\u043d\u0438 \u043a\u043e\u043d\u0432\u0435\u0440\u0442\u0438\u0440\u0443\u044e\u0442\u0441\u044f \u043f\u043e\u0441\u0440\u0435\u0434\u0441\u0442\u0432\u043e\u043c \u0441\u043e\u043e\u0442\u0432\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0445 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440 \u0438 \u043c\u0435\u0442\u043e\u0434\u043e\u0432 \u0432 \u043f\u0440\u0438\u0432\u044b\u0447\u043d\u044b\u0435 \u0444\u043e\u0440\u043c\u0430\u0442\u044b \u0434\u043b\u044f \u044f\u0437\u044b\u043a\u0430 Rust. \u0414\u0430\u043b\u0435\u0435 \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u044e\u0442\u0441\u044f \u043e\u0440\u0438\u0433\u0438\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u043c\u0435\u0442\u043e\u0434\u044b \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438. \u0418\u0445 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u0442\u044c \u043e\u0431\u0440\u0430\u0442\u043d\u043e \u0432 C-\u0441\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u043c\u044b\u0435 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b, \u043e\u0434\u043d\u0430\u043a\u043e \u0432 \u0434\u0430\u043d\u043d\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u0443\u0434\u0430\u0435\u0442\u0441\u044f \u0438\u0437\u0431\u0435\u0436\u0430\u0442\u044c \u043e\u0431\u0440\u0430\u0442\u043d\u043e\u0439 \u043a\u043e\u043d\u0432\u0435\u0440\u0442\u0430\u0446\u0438\u0438, \u043f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0430 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0437\u0430\u043f\u0438\u0441\u044c \u043d\u0430\u043f\u0440\u044f\u043c\u0443\u044e \u043f\u043e \u0443\u043a\u0430\u0437\u0430\u0442\u0435\u043b\u044e *mut u8."),(0,o.kt)("p",null,"\u041a\u0440\u043e\u043c\u0435 \u0442\u043e\u0433\u043e, \u0441\u0442\u043e\u0438\u0442 \u043e\u0442\u043c\u0435\u0442\u0438\u0442\u044c \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0430\u0442\u0442\u0440\u0438\u0431\u0443\u0442\u0430 #","[no_mangle]",' \u0438 \u0443\u043a\u0430\u0437\u0430\u043d\u0438\u044f extern "C" \u0434\u043b\u044f \u0432\u0441\u0435\u0445 \u0442\u0430\u043a\u0438\u0445 \u043c\u0435\u0442\u043e\u0434\u043e\u0432. \u0411\u0435\u0437 \u043d\u0438\u0445 \u043d\u0435 \u0443\u0434\u0430\u0441\u0442\u0441\u044f \u043f\u0440\u043e\u0432\u0435\u0441\u0442\u0438 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u0443\u044e \u0441\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u043c\u0443\u044e \u0441 C/C++ \u043a\u043e\u043c\u043f\u0438\u043b\u044f\u0446\u0438\u044e. \u041a\u0440\u043e\u043c\u0435 \u0442\u043e\u0433\u043e, \u043e\u043d\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b \u0434\u043b\u044f \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0433\u043e \u044d\u0442\u0430\u043f\u0430 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438.'),(0,o.kt)("p",null,"\u041f\u043e\u0441\u043b\u0435 \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u0438\u044f \u043a\u043e\u0434\u0430 \u043c\u0435\u0442\u043e\u0434\u043e\u0432-\u043f\u0440\u043e\u0441\u043b\u043e\u0435\u043a \u043d\u0430\u043c \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u0438\u0442\u044c \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u0447\u043d\u044b\u0439 \u0444\u0430\u0439\u043b \u0434\u043b\u044f \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438. \u042d\u0442\u043e \u043c\u043e\u0436\u043d\u043e \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0432\u0440\u0443\u0447\u043d\u0443\u044e, \u043b\u0438\u0431\u043e \u0432\u043e\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u043e\u0439 cbindgen \u0434\u043b\u044f \u0430\u0432\u0442\u043e\u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438. \u0412 \u0441\u043b\u0443\u0447\u0430\u0435 \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c cbindgen, \u043d\u0430\u043c \u043f\u043e\u043d\u0430\u0434\u043e\u0431\u0438\u0442\u0441\u044f \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u0441\u0431\u043e\u0440\u043e\u0447\u043d\u044b\u0439 \u0441\u043a\u0440\u0438\u043f\u0442 build.rs \u0438 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c cbindgen \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 build-dependency."),(0,o.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440 \u0441\u0431\u043e\u0440\u043e\u0447\u043d\u043e\u0433\u043e \u0441\u043a\u0440\u0438\u043f\u0442\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u043c \u043c\u043e\u0436\u043d\u043e \u0430\u0432\u0442\u043e\u0441\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u0447\u043d\u044b\u0439 \u0444\u0430\u0439\u043b:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'    let crate_dir = env::var("CARGO_MANIFEST_DIR").unwrap();\n\n    let package_name = env::var("CARGO_PKG_NAME").unwrap();\n    let output_file = ("include/".to_owned() + &format!("{}.h", package_name)).to_string();\n\n    match cbindgen::generate(&crate_dir) {\n        Ok(header) => {\n            header.write_to_file(&output_file);\n        }\n        Err(err) => {\n            panic!("{}", err)\n        }\n    }\n')),(0,o.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0432\u043e\u0437\u043d\u0438\u043a\u0430\u044e\u0442 \u043f\u0440\u043e\u0431\u0435\u043c\u044b \u0441 \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0435\u0439 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u043e\u0432, \u043c\u043e\u0436\u0435\u0442 \u043f\u043e\u0442\u0440\u0435\u0431\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u043f\u043e\u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0441 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0435\u0439 cbindgen \u0447\u0435\u0440\u0435\u0437 \u0444\u0430\u0439\u043b cbindgen.toml, \u0432\u0437\u044f\u0432 \u043e\u0440\u0438\u0433\u0438\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u0442\u0435\u043c\u043f\u043b\u0435\u0439\u0442 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0430 cbindgen: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/eqrion/cbindgen/blob/master/template.toml"},"https://github.com/eqrion/cbindgen/blob/master/template.toml"),"."),(0,o.kt)("p",null,"\u0412 \u0437\u0430\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435, \u0441\u0442\u043e\u0438\u0442 \u043e\u0442\u043c\u0435\u0442\u0438\u0442\u044c \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0443, \u0441 \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u043f\u0440\u0438\u0448\u043b\u043e\u0441\u044c \u0441\u0442\u043e\u043b\u043a\u043d\u0443\u0442\u044c\u0441\u044f \u043f\u0440\u0438 \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438 BLAKE3:\nC++ MemorySanitizer \u043f\u043b\u043e\u0445\u043e \u043f\u043e\u043d\u0438\u043c\u0430\u0435\u0442 \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044e \u043f\u0430\u043c\u044f\u0442\u0438 \u0432 Rust, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u0434\u043b\u044f \u0438\u0437\u0431\u0435\u0436\u0430\u043d\u0438\u044f \u043b\u043e\u0436\u043d\u043e\u043f\u043e\u043b\u043e\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u0441\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u043d\u0438\u0439 \u0434\u043b\u044f BLAKE3 \u0431\u044b\u043b \u0441\u043e\u0437\u0434\u0430\u043d \u0430\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u043d\u044b\u0439 \u043c\u0435\u0442\u043e\u0434, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0431\u043e\u043b\u0435\u0435 \u044f\u0432\u043d\u043e, \u043d\u043e \u043f\u0440\u0438 \u044d\u0442\u043e\u043c \u043c\u0435\u0434\u043b\u0435\u043d\u043d\u0435\u0435, \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043b \u043f\u0430\u043c\u044f\u0442\u044c. \u041e\u043d \u043a\u043e\u043c\u043f\u0438\u043b\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0441\u0431\u043e\u0440\u043a\u0438 \u0441 MemorySanitizer \u0438 \u0432 \u0440\u0435\u043b\u0438\u0437 \u043d\u0435 \u043f\u043e\u043f\u0430\u0434\u0430\u0435\u0442. \u0412\u0435\u0440\u043e\u044f\u0442\u043d\u043e, \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u044b \u0438 \u0431\u043e\u043b\u0435\u0435 \u043a\u0440\u0430\u0441\u0438\u0432\u044b\u0435 \u0441\u043f\u043e\u0441\u043e\u0431\u044b \u0440\u0435\u0448\u0435\u043d\u0438\u044f \u044d\u0442\u043e\u0439 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u044b, \u043d\u043e \u043f\u0440\u0438 \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438 BLAKE3 \u043e\u043d\u0438 \u043d\u0435 \u0431\u044b\u043b\u0438 \u043e\u0431\u043d\u0430\u0440\u0443\u0436\u0435\u043d\u044b."))}d.isMDXComponent=!0}}]);