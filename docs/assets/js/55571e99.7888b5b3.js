"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[54899],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),u=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=u(e.components);return a.createElement(o.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(t),m=r,h=p["".concat(o,".").concat(m)]||p[m]||c[m]||i;return t?a.createElement(h,l(l({ref:n},d),{},{components:t})):a.createElement(h,l({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=p;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var u=2;u<i;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},84091:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var a=t(87462),r=t(63366),i=(t(67294),t(3905)),l=["components"],s={sidebar_label:'New York Public Library "What\'s on the Menu?" Dataset'},o='New York Public Library "What\'s on the Menu?" Dataset',u={unversionedId:"en/getting-started/example-datasets/menus",id:"en/getting-started/example-datasets/menus",title:'New York Public Library "What\'s on the Menu?" Dataset',description:"The dataset is created by the New York Public Library. It contains historical data on the menus of hotels, restaurants and cafes with the dishes along with their prices.",source:"@site/docs/en/getting-started/example-datasets/menus.md",sourceDirName:"en/getting-started/example-datasets",slug:"/en/getting-started/example-datasets/menus",permalink:"/en/getting-started/example-datasets/menus",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/docs-staging/docs/en/getting-started/example-datasets/menus.md",tags:[],version:"current",frontMatter:{sidebar_label:'New York Public Library "What\'s on the Menu?" Dataset'},sidebar:"english",previous:{title:"GitHub Events",permalink:"/en/getting-started/example-datasets/github-events"},next:{title:"Web Analytics Data",permalink:"/en/getting-started/example-datasets/metrica"}},d={},c=[{value:"Download the Dataset",id:"download-dataset",level:2},{value:"Unpack the Dataset",id:"unpack-dataset",level:2},{value:"Create the Tables",id:"create-tables",level:2},{value:"Import the Data",id:"import-data",level:2},{value:"Denormalize the Data",id:"denormalize-data",level:2},{value:"Validate the Data",id:"validate-data",level:2},{value:"Run Some Queries",id:"run-queries",level:2},{value:"Averaged historical prices of dishes",id:"query-averaged-historical-prices",level:3},{value:"Burger Prices",id:"query-burger-prices",level:3},{value:"Vodka",id:"query-vodka",level:3},{value:"Caviar",id:"query-caviar",level:3},{value:"Online Playground",id:"playground",level:2}],p={toc:c};function m(e){var n=e.components,t=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"new-york-public-library-whats-on-the-menu-dataset"},'New York Public Library "What\'s on the Menu?" Dataset'),(0,i.kt)("p",null,"The dataset is created by the New York Public Library. It contains historical data on the menus of hotels, restaurants and cafes with the dishes along with their prices."),(0,i.kt)("p",null,"Source: ",(0,i.kt)("a",{parentName:"p",href:"http://menus.nypl.org/data"},"http://menus.nypl.org/data"),"\nThe data is in public domain."),(0,i.kt)("p",null,"The data is from library's archive and it may be incomplete and difficult for statistical analysis. Nevertheless it is also very yummy.\nThe size is just 1.3 million records about dishes in the menus \u2014 it's a very small data volume for ClickHouse, but it's still a good example."),(0,i.kt)("h2",{id:"download-dataset"},"Download the Dataset"),(0,i.kt)("p",null,"Run the command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://s3.amazonaws.com/menusdata.nypl.org/gzips/2021_08_01_07_01_17_data.tgz\n")),(0,i.kt)("p",null,"Replace the link to the up to date link from ",(0,i.kt)("a",{parentName:"p",href:"http://menus.nypl.org/data"},"http://menus.nypl.org/data")," if needed.\nDownload size is about 35 MB."),(0,i.kt)("h2",{id:"unpack-dataset"},"Unpack the Dataset"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"tar xvf 2021_08_01_07_01_17_data.tgz\n")),(0,i.kt)("p",null,"Uncompressed size is about 150 MB."),(0,i.kt)("p",null,"The data is normalized consisted of four tables:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Menu")," \u2014 Information about menus: the name of the restaurant, the date when menu was seen, etc."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Dish")," \u2014 Information about dishes: the name of the dish along with some characteristic."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MenuPage")," \u2014 Information about the pages in the menus, because every page belongs to some menu."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MenuItem")," \u2014 An item of the menu. A dish along with its price on some menu page: links to dish and menu page.")),(0,i.kt)("h2",{id:"create-tables"},"Create the Tables"),(0,i.kt)("p",null,"We use ",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/decimal"},"Decimal")," data type to store prices."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE dish\n(\n    id UInt32,\n    name String,\n    description String,\n    menus_appeared UInt32,\n    times_appeared Int32,\n    first_appeared UInt16,\n    last_appeared UInt16,\n    lowest_price Decimal64(3),\n    highest_price Decimal64(3)\n) ENGINE = MergeTree ORDER BY id;\n\nCREATE TABLE menu\n(\n    id UInt32,\n    name String,\n    sponsor String,\n    event String,\n    venue String,\n    place String,\n    physical_description String,\n    occasion String,\n    notes String,\n    call_number String,\n    keywords String,\n    language String,\n    date String,\n    location String,\n    location_type String,\n    currency String,\n    currency_symbol String,\n    status String,\n    page_count UInt16,\n    dish_count UInt16\n) ENGINE = MergeTree ORDER BY id;\n\nCREATE TABLE menu_page\n(\n    id UInt32,\n    menu_id UInt32,\n    page_number UInt16,\n    image_id String,\n    full_height UInt16,\n    full_width UInt16,\n    uuid UUID\n) ENGINE = MergeTree ORDER BY id;\n\nCREATE TABLE menu_item\n(\n    id UInt32,\n    menu_page_id UInt32,\n    price Decimal64(3),\n    high_price Decimal64(3),\n    dish_id UInt32,\n    created_at DateTime,\n    updated_at DateTime,\n    xpos Float64,\n    ypos Float64\n) ENGINE = MergeTree ORDER BY id;\n")),(0,i.kt)("h2",{id:"import-data"},"Import the Data"),(0,i.kt)("p",null,"Upload data into ClickHouse, run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'clickhouse-client --format_csv_allow_single_quotes 0 --input_format_null_as_default 0 --query "INSERT INTO dish FORMAT CSVWithNames" < Dish.csv\nclickhouse-client --format_csv_allow_single_quotes 0 --input_format_null_as_default 0 --query "INSERT INTO menu FORMAT CSVWithNames" < Menu.csv\nclickhouse-client --format_csv_allow_single_quotes 0 --input_format_null_as_default 0 --query "INSERT INTO menu_page FORMAT CSVWithNames" < MenuPage.csv\nclickhouse-client --format_csv_allow_single_quotes 0 --input_format_null_as_default 0 --date_time_input_format best_effort --query "INSERT INTO menu_item FORMAT CSVWithNames" < MenuItem.csv\n')),(0,i.kt)("p",null,"We use ",(0,i.kt)("a",{parentName:"p",href:"/en/interfaces/formats#csvwithnames"},"CSVWithNames")," format as the data is represented by CSV with header."),(0,i.kt)("p",null,"We disable ",(0,i.kt)("inlineCode",{parentName:"p"},"format_csv_allow_single_quotes")," as only double quotes are used for data fields and single quotes can be inside the values and should not confuse the CSV parser."),(0,i.kt)("p",null,"We disable ",(0,i.kt)("a",{parentName:"p",href:"/en/operations/settings/#settings-input-format-null-as-default"},"input_format_null_as_default")," as our data does not have ",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/syntax#null-literal"},"NULL"),". Otherwise ClickHouse will try to parse ",(0,i.kt)("inlineCode",{parentName:"p"},"\\N")," sequences and can be confused with ",(0,i.kt)("inlineCode",{parentName:"p"},"\\")," in data."),(0,i.kt)("p",null,"The setting ",(0,i.kt)("a",{parentName:"p",href:"/en/operations/settings/#settings-date_time_input_format"},"date_time_input_format best_effort")," allows to parse ",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/datetime"},"DateTime"),"  fields in wide variety of formats. For example, ISO-8601 without seconds like '2000-01-01 01:02' will be recognized. Without this setting only fixed DateTime format is allowed."),(0,i.kt)("h2",{id:"denormalize-data"},"Denormalize the Data"),(0,i.kt)("p",null,"Data is presented in multiple tables in ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Database_normalization#Normal_forms"},"normalized form"),". It means you have to perform ",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/statements/select/join#select-join"},"JOIN")," if you want to query, e.g. dish names from menu items.\nFor typical analytical tasks it is way more efficient to deal with pre-JOINed data to avoid doing ",(0,i.kt)("inlineCode",{parentName:"p"},"JOIN"),' every time. It is called "denormalized" data.'),(0,i.kt)("p",null,"We will create a table ",(0,i.kt)("inlineCode",{parentName:"p"},"menu_item_denorm")," where will contain all the data JOINed together:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE menu_item_denorm\nENGINE = MergeTree ORDER BY (dish_name, created_at)\nAS SELECT\n    price,\n    high_price,\n    created_at,\n    updated_at,\n    xpos,\n    ypos,\n    dish.id AS dish_id,\n    dish.name AS dish_name,\n    dish.description AS dish_description,\n    dish.menus_appeared AS dish_menus_appeared,\n    dish.times_appeared AS dish_times_appeared,\n    dish.first_appeared AS dish_first_appeared,\n    dish.last_appeared AS dish_last_appeared,\n    dish.lowest_price AS dish_lowest_price,\n    dish.highest_price AS dish_highest_price,\n    menu.id AS menu_id,\n    menu.name AS menu_name,\n    menu.sponsor AS menu_sponsor,\n    menu.event AS menu_event,\n    menu.venue AS menu_venue,\n    menu.place AS menu_place,\n    menu.physical_description AS menu_physical_description,\n    menu.occasion AS menu_occasion,\n    menu.notes AS menu_notes,\n    menu.call_number AS menu_call_number,\n    menu.keywords AS menu_keywords,\n    menu.language AS menu_language,\n    menu.date AS menu_date,\n    menu.location AS menu_location,\n    menu.location_type AS menu_location_type,\n    menu.currency AS menu_currency,\n    menu.currency_symbol AS menu_currency_symbol,\n    menu.status AS menu_status,\n    menu.page_count AS menu_page_count,\n    menu.dish_count AS menu_dish_count\nFROM menu_item\n    JOIN dish ON menu_item.dish_id = dish.id\n    JOIN menu_page ON menu_item.menu_page_id = menu_page.id\n    JOIN menu ON menu_page.menu_id = menu.id;\n")),(0,i.kt)("h2",{id:"validate-data"},"Validate the Data"),(0,i.kt)("p",null,"Query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT count() FROM menu_item_denorm;\n")),(0,i.kt)("p",null,"Result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500count()\u2500\u2510\n\u2502 1329175 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("h2",{id:"run-queries"},"Run Some Queries"),(0,i.kt)("h3",{id:"query-averaged-historical-prices"},"Averaged historical prices of dishes"),(0,i.kt)("p",null,"Query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    round(toUInt32OrZero(extract(menu_date, '^\\\\d{4}')), -1) AS d,\n    count(),\n    round(avg(price), 2),\n    bar(avg(price), 0, 100, 100)\nFROM menu_item_denorm\nWHERE (menu_currency = 'Dollars') AND (d > 0) AND (d < 2022)\nGROUP BY d\nORDER BY d ASC;\n")),(0,i.kt)("p",null,"Result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500d\u2500\u252c\u2500count()\u2500\u252c\u2500round(avg(price), 2)\u2500\u252c\u2500bar(avg(price), 0, 100, 100)\u2500\u2510\n\u2502 1850 \u2502     618 \u2502                  1.5 \u2502 \u2588\u258d                           \u2502\n\u2502 1860 \u2502    1634 \u2502                 1.29 \u2502 \u2588\u258e                           \u2502\n\u2502 1870 \u2502    2215 \u2502                 1.36 \u2502 \u2588\u258e                           \u2502\n\u2502 1880 \u2502    3909 \u2502                 1.01 \u2502 \u2588                            \u2502\n\u2502 1890 \u2502    8837 \u2502                  1.4 \u2502 \u2588\u258d                           \u2502\n\u2502 1900 \u2502  176292 \u2502                 0.68 \u2502 \u258b                            \u2502\n\u2502 1910 \u2502  212196 \u2502                 0.88 \u2502 \u258a                            \u2502\n\u2502 1920 \u2502  179590 \u2502                 0.74 \u2502 \u258b                            \u2502\n\u2502 1930 \u2502   73707 \u2502                  0.6 \u2502 \u258c                            \u2502\n\u2502 1940 \u2502   58795 \u2502                 0.57 \u2502 \u258c                            \u2502\n\u2502 1950 \u2502   41407 \u2502                 0.95 \u2502 \u258a                            \u2502\n\u2502 1960 \u2502   51179 \u2502                 1.32 \u2502 \u2588\u258e                           \u2502\n\u2502 1970 \u2502   12914 \u2502                 1.86 \u2502 \u2588\u258b                           \u2502\n\u2502 1980 \u2502    7268 \u2502                 4.35 \u2502 \u2588\u2588\u2588\u2588\u258e                        \u2502\n\u2502 1990 \u2502   11055 \u2502                 6.03 \u2502 \u2588\u2588\u2588\u2588\u2588\u2588                       \u2502\n\u2502 2000 \u2502    2467 \u2502                11.85 \u2502 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258b                 \u2502\n\u2502 2010 \u2502     597 \u2502                25.66 \u2502 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258b   \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,"Take it with a grain of salt."),(0,i.kt)("h3",{id:"query-burger-prices"},"Burger Prices"),(0,i.kt)("p",null,"Query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    round(toUInt32OrZero(extract(menu_date, '^\\\\d{4}')), -1) AS d,\n    count(),\n    round(avg(price), 2),\n    bar(avg(price), 0, 50, 100)\nFROM menu_item_denorm\nWHERE (menu_currency = 'Dollars') AND (d > 0) AND (d < 2022) AND (dish_name ILIKE '%burger%')\nGROUP BY d\nORDER BY d ASC;\n")),(0,i.kt)("p",null,"Result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500d\u2500\u252c\u2500count()\u2500\u252c\u2500round(avg(price), 2)\u2500\u252c\u2500bar(avg(price), 0, 50, 100)\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 1880 \u2502       2 \u2502                 0.42 \u2502 \u258b                                     \u2502\n\u2502 1890 \u2502       7 \u2502                 0.85 \u2502 \u2588\u258b                                    \u2502\n\u2502 1900 \u2502     399 \u2502                 0.49 \u2502 \u258a                                     \u2502\n\u2502 1910 \u2502     589 \u2502                 0.68 \u2502 \u2588\u258e                                    \u2502\n\u2502 1920 \u2502     280 \u2502                 0.56 \u2502 \u2588                                     \u2502\n\u2502 1930 \u2502      74 \u2502                 0.42 \u2502 \u258b                                     \u2502\n\u2502 1940 \u2502     119 \u2502                 0.59 \u2502 \u2588\u258f                                    \u2502\n\u2502 1950 \u2502     134 \u2502                 1.09 \u2502 \u2588\u2588\u258f                                   \u2502\n\u2502 1960 \u2502     272 \u2502                 0.92 \u2502 \u2588\u258b                                    \u2502\n\u2502 1970 \u2502     108 \u2502                 1.18 \u2502 \u2588\u2588\u258e                                   \u2502\n\u2502 1980 \u2502      88 \u2502                 2.82 \u2502 \u2588\u2588\u2588\u2588\u2588\u258b                                \u2502\n\u2502 1990 \u2502     184 \u2502                 3.68 \u2502 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258e                              \u2502\n\u2502 2000 \u2502      21 \u2502                 7.14 \u2502 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258e                       \u2502\n\u2502 2010 \u2502       6 \u2502                18.42 \u2502 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258b \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("h3",{id:"query-vodka"},"Vodka"),(0,i.kt)("p",null,"Query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    round(toUInt32OrZero(extract(menu_date, '^\\\\d{4}')), -1) AS d,\n    count(),\n    round(avg(price), 2),\n    bar(avg(price), 0, 50, 100)\nFROM menu_item_denorm\nWHERE (menu_currency IN ('Dollars', '')) AND (d > 0) AND (d < 2022) AND (dish_name ILIKE '%vodka%')\nGROUP BY d\nORDER BY d ASC;\n")),(0,i.kt)("p",null,"Result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500d\u2500\u252c\u2500count()\u2500\u252c\u2500round(avg(price), 2)\u2500\u252c\u2500bar(avg(price), 0, 50, 100)\u2500\u2510\n\u2502 1910 \u2502       2 \u2502                    0 \u2502                             \u2502\n\u2502 1920 \u2502       1 \u2502                  0.3 \u2502 \u258c                           \u2502\n\u2502 1940 \u2502      21 \u2502                 0.42 \u2502 \u258b                           \u2502\n\u2502 1950 \u2502      14 \u2502                 0.59 \u2502 \u2588\u258f                          \u2502\n\u2502 1960 \u2502     113 \u2502                 2.17 \u2502 \u2588\u2588\u2588\u2588\u258e                       \u2502\n\u2502 1970 \u2502      37 \u2502                 0.68 \u2502 \u2588\u258e                          \u2502\n\u2502 1980 \u2502      19 \u2502                 2.55 \u2502 \u2588\u2588\u2588\u2588\u2588                       \u2502\n\u2502 1990 \u2502      86 \u2502                  3.6 \u2502 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258f                    \u2502\n\u2502 2000 \u2502       2 \u2502                 3.98 \u2502 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258a                    \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,"To get vodka we have to write ",(0,i.kt)("inlineCode",{parentName:"p"},"ILIKE '%vodka%'")," and this definitely makes a statement."),(0,i.kt)("h3",{id:"query-caviar"},"Caviar"),(0,i.kt)("p",null,"Let's print caviar prices. Also let's print a name of any dish with caviar."),(0,i.kt)("p",null,"Query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    round(toUInt32OrZero(extract(menu_date, '^\\\\d{4}')), -1) AS d,\n    count(),\n    round(avg(price), 2),\n    bar(avg(price), 0, 50, 100),\n    any(dish_name)\nFROM menu_item_denorm\nWHERE (menu_currency IN ('Dollars', '')) AND (d > 0) AND (d < 2022) AND (dish_name ILIKE '%caviar%')\nGROUP BY d\nORDER BY d ASC;\n")),(0,i.kt)("p",null,"Result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},'\u250c\u2500\u2500\u2500\u2500d\u2500\u252c\u2500count()\u2500\u252c\u2500round(avg(price), 2)\u2500\u252c\u2500bar(avg(price), 0, 50, 100)\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500any(dish_name)\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 1090 \u2502       1 \u2502                    0 \u2502                                  \u2502 Caviar                                                                                                                              \u2502\n\u2502 1880 \u2502       3 \u2502                    0 \u2502                                  \u2502 Caviar                                                                                                                              \u2502\n\u2502 1890 \u2502      39 \u2502                 0.59 \u2502 \u2588\u258f                               \u2502 Butter and caviar                                                                                                                   \u2502\n\u2502 1900 \u2502    1014 \u2502                 0.34 \u2502 \u258b                                \u2502 Anchovy Caviar on Toast                                                                                                             \u2502\n\u2502 1910 \u2502    1588 \u2502                 1.35 \u2502 \u2588\u2588\u258b                              \u2502 1/1 Br\xf6tchen Caviar                                                                                                                 \u2502\n\u2502 1920 \u2502     927 \u2502                 1.37 \u2502 \u2588\u2588\u258b                              \u2502 ASTRAKAN CAVIAR                                                                                                                     \u2502\n\u2502 1930 \u2502     289 \u2502                 1.91 \u2502 \u2588\u2588\u2588\u258b                             \u2502 Astrachan caviar                                                                                                                    \u2502\n\u2502 1940 \u2502     201 \u2502                 0.83 \u2502 \u2588\u258b                               \u2502 (SPECIAL) Domestic Caviar Sandwich                                                                                                  \u2502\n\u2502 1950 \u2502      81 \u2502                 2.27 \u2502 \u2588\u2588\u2588\u2588\u258c                            \u2502 Beluga Caviar                                                                                                                       \u2502\n\u2502 1960 \u2502     126 \u2502                 2.21 \u2502 \u2588\u2588\u2588\u2588\u258d                            \u2502 Beluga Caviar                                                                                                                       \u2502\n\u2502 1970 \u2502     105 \u2502                 0.95 \u2502 \u2588\u258a                               \u2502 BELUGA MALOSSOL CAVIAR AMERICAN DRESSING                                                                                            \u2502\n\u2502 1980 \u2502      12 \u2502                 7.22 \u2502 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258d                  \u2502 Authentic Iranian Beluga Caviar the world\'s finest black caviar presented in ice garni and a sampling of chilled 100\xb0 Russian vodka \u2502\n\u2502 1990 \u2502      74 \u2502                14.42 \u2502 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258b    \u2502 Avocado Salad, Fresh cut avocado with caviare                                                                                       \u2502\n\u2502 2000 \u2502       3 \u2502                 7.82 \u2502 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258b                 \u2502 Aufgeschlagenes Kartoffelsueppchen mit Forellencaviar                                                                               \u2502\n\u2502 2010 \u2502       6 \u2502                15.58 \u2502 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258f \u2502 "OYSTERS AND PEARLS" "Sabayon" of Pearl Tapioca with Island Creek Oysters and Russian Sevruga Caviar                                \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n')),(0,i.kt)("p",null,"At least they have caviar with vodka. Very nice."),(0,i.kt)("h2",{id:"playground"},"Online Playground"),(0,i.kt)("p",null,"The data is uploaded to ClickHouse Playground, ",(0,i.kt)("a",{parentName:"p",href:"https://gh-api.clickhouse.com/play?user=play#U0VMRUNUCiAgICByb3VuZCh0b1VJbnQzMk9yWmVybyhleHRyYWN0KG1lbnVfZGF0ZSwgJ15cXGR7NH0nKSksIC0xKSBBUyBkLAogICAgY291bnQoKSwKICAgIHJvdW5kKGF2ZyhwcmljZSksIDIpLAogICAgYmFyKGF2ZyhwcmljZSksIDAsIDUwLCAxMDApLAogICAgYW55KGRpc2hfbmFtZSkKRlJPTSBtZW51X2l0ZW1fZGVub3JtCldIRVJFIChtZW51X2N1cnJlbmN5IElOICgnRG9sbGFycycsICcnKSkgQU5EIChkID4gMCkgQU5EIChkIDwgMjAyMikgQU5EIChkaXNoX25hbWUgSUxJS0UgJyVjYXZpYXIlJykKR1JPVVAgQlkgZApPUkRFUiBCWSBkIEFTQw=="},"example"),"."))}m.isMDXComponent=!0}}]);