(this["webpackJsonpbsc-dapp-example"]=this["webpackJsonpbsc-dapp-example"]||[]).push([[5],{1110:function(e,t,c){"use strict";c.d(t,"a",(function(){return s}));var n=c(42),a=c(2),s=function(){var e=Object(n.f)();Object(a.useEffect)((function(){return e.listen((function(){document.querySelector("#root").scrollIntoView({behavior:"smooth"},500)}))}),[e])}},1111:function(e,t,c){"use strict";var n=c(15),a=c(2),s=c(8);t.a=function(e){var t=Object(a.useState)(!1),c=Object(n.a)(t,2),i=c[0],r=c[1];return Object(a.useEffect)((function(){var t=document.getElementsByTagName("head")[0],c=document.createElement("link");return c.rel="stylesheet",c.type="text/css",c.href="".concat(e,"?v=").concat(s.b.gitCommitHash),c.media="all",t.appendChild(c),r(!0),function(){document.head.removeChild(c)}}),[e]),i}},1112:function(e,t,c){},1113:function(e,t,c){"use strict";c.d(t,"a",(function(){return p}));var n=c(2),a=c.n(n),s=c(8),i=c(105),r=c(36),l=c(0),o=c.n(l),d=c(7),j=c(13),b=c(42),m=c(264),u=c(3),f=function(){var e=Object(b.f)(),t=Object(b.g)(),c=Object(n.useContext)(m.a),s=c.account,i=c.disconnect,l=c.connect,f=t.pathname,h=function(){var t=Object(d.a)(o.a.mark((function t(c){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("/account"!==c){t.next=9;break}if(!s){t.next=5;break}j.a.show({content:"Do you want to disconnect the wallet?",closeOnAction:!0,actions:[[{key:"cancel",text:"Cancel",danger:!0},{key:"delete",text:"Disconnect",bold:!0}]],onAction:function(e,t){1===t&&i()}}),t.next=7;break;case 5:return t.next=7,l();case 7:t.next=10;break;case 9:"/#tokenomics"===c&&"/"===f?window.$('a[href^="#/#tokenomics"]')[0].click():e.push("".concat(c));case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=a.a.useMemo((function(){var e=[{key:"/",title:"Home",icon:Object(u.jsx)("i",{className:"fas fa-h-square"})},{key:"/marketplace",title:"Marketplace",icon:Object(u.jsx)("i",{className:"fas fa-store"})}];return s?e=[].concat(Object(r.a)(e),[{key:"/dashboard",title:"Dashboard",icon:Object(u.jsx)("i",{className:"fas fa-columns"})},{key:"/armory",title:"Armory",icon:Object(u.jsx)("i",{className:"fas fa-burn"})},{key:"/invitation-list-rewards",title:"Rewards",icon:Object(u.jsx)("i",{className:"fas fa-link"})}]):e.push({key:"/#tokenomics",title:"Pre-sale",icon:Object(u.jsx)("i",{className:"fas fa-wallet"})}),e.push({key:"/account",title:s?"Disconnect":"Connect Wallet",icon:s?Object(u.jsx)("i",{className:"fas fa-sign-out-alt"}):Object(u.jsx)("i",{className:"fas fa-sign-in-alt"})}),e}),[s]);return Object(u.jsx)(j.c,{activeKey:f,onChange:function(e){return h(e)},children:p.map((function(e){return Object(u.jsx)(j.c.Item,{icon:e.icon,title:e.title},e.key)}))})},h=(c(1112),function(){var e=function(){new window.google.translate.TranslateElement({pageLanguage:"en"},"google_translate_element")};return a.a.useEffect((function(){var t=document.createElement("script");t.setAttribute("src","//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"),document.body.appendChild(t),window.googleTranslateElementInit=e,setTimeout((function(){window.$("#google_translate_element .goog-te-gadget").contents().filter((function(){return"#text"===this.nodeName})).remove()}),1e3)}),[]),Object(u.jsxs)("div",{className:"d-flex justify-content-center align-items-center mt-3",children:[Object(u.jsx)("p",{children:Object(u.jsx)("b",{children:"Language"})}),Object(u.jsx)("div",{id:"google_translate_element"})]})});function p(){return Object(u.jsxs)("div",{"data-v-c18f8362":!0,"data-v-11bc6412":!0,className:"footer-page",style:{textAlign:"center",marginBottom:i.isMobile?"116px":0},children:[Object(u.jsx)("img",{"data-v-c18f8362":!0,style:{width:180},src:"img/logo.svg"}),Object(u.jsxs)("div",{"data-v-c18f8362":!0,className:"email",children:["Contact us: ",Object(u.jsxs)("a",{href:"mailto: service@".concat(s.g.name.replaceAll(" ","").toLocaleLowerCase(),"s.com"),className:"contact",children:["service@",s.g.name.replaceAll(" ","").toLocaleLowerCase(),"s.com"]})]}),Object(u.jsxs)("div",{className:"social",children:[Object(u.jsx)("a",{href:s.b.socials.telegram,children:"Telegram"}),Object(u.jsx)("a",{href:s.b.socials.twitter,children:"Twitter"}),Object(u.jsx)("a",{href:s.b.socials.reddit,children:"Reddit"}),Object(u.jsx)("a",{href:s.b.socials.facebook,children:"Facebook"})]}),Object(u.jsxs)("div",{"data-v-c18f8362":!0,className:"copyright",children:["Copyright \xa9 ",(new Date).getFullYear()," ",s.g.name,". All rights reserved."]}),Object(u.jsx)("div",{children:Object(u.jsx)(h,{})}),i.isMobile&&Object(u.jsx)("div",{style:{flex:"0 1 0%",position:"fixed",bottom:"0px",width:"100%",background:"#232125",zIndex:1e3},children:Object(u.jsx)(f,{})})]})}},1114:function(e,t,c){"use strict";c.d(t,"a",(function(){return _}));var n=c(0),a=c.n(n),s=c(7),i=c(2),r=c.n(i),l=c(264),o=c(265),d=(c(106),function(){return(d=Object.assign||function(e){for(var t,c=1,n=arguments.length;c<n;c++)for(var a in t=arguments[c])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)});var j="",b=null,m=null,u=null;function f(){j="",null!==b&&b.disconnect(),null!==m&&(window.clearTimeout(m),m=null)}function h(e){return["BUTTON","INPUT","SELECT","TEXTAREA"].includes(e.tagName)&&!e.hasAttribute("disabled")||["A","AREA"].includes(e.tagName)&&e.hasAttribute("href")}function p(){var e=null;if("#"===j)e=document.body;else{var t=j.replace("#","");null===(e=document.getElementById(t))&&"#top"===j&&(e=document.body)}if(null!==e){u(e);var c=e.getAttribute("tabindex");return null!==c||h(e)||e.setAttribute("tabindex",-1),e.focus({preventScroll:!0}),null!==c||h(e)||(e.blur(),e.removeAttribute("tabindex")),f(),!0}return!1}function x(e){return r.a.forwardRef((function(t,c){var n="";"string"===typeof t.to&&t.to.includes("#")?n="#"+t.to.split("#").slice(1).join("#"):"object"===typeof t.to&&"string"===typeof t.to.hash&&(n=t.to.hash);var a={};e===o.c&&(a.isActive=function(e,t){return e&&e.isExact&&t.hash===n});var s=function(e,t){var c={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(c[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(c[n[a]]=e[n[a]])}return c}(t,["scroll","smooth","timeout","elementId"]);return r.a.createElement(e,d({},a,s,{onClick:function(e){var c;f(),j=t.elementId?"#"+t.elementId:n,t.onClick&&t.onClick(e),""===j||e.defaultPrevented||0!==e.button||t.target&&"_self"!==t.target||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||(u=t.scroll||function(e){return t.smooth?e.scrollIntoView({behavior:"smooth"}):e.scrollIntoView()},c=t.timeout,window.setTimeout((function(){!1===p()&&(null===b&&(b=new MutationObserver(p)),b.observe(document,{attributes:!0,childList:!0,subtree:!0}),m=window.setTimeout((function(){f()}),c||1e4))}),0))},ref:c}),t.children)}))}var g=x(o.b),O=(x(o.c),c(8)),v=c(31),N=c(266),w=c.n(N),y=c(105),T=c(267),E=c(3);function _(e){var t=e.dropdownUrls,c=e.navUrls,n=r.a.useContext(l.a),i=n.account,d=n.isReady,j=n.balance,b=n.statusSell,m=n.sellToken,u=n.disconnect,f=n.connect;return Object(T.a)((function(){document.querySelectorAll("nav .nav-title a").forEach((function(e){"/".concat(e.getAttribute("href"))==="".concat(window.location.pathname).concat(window.location.hash)&&e.click()}))}),500),Object(E.jsx)("nav",{className:"navbar-dark bg-dark navbar-expand-sm",children:Object(E.jsx)("div",{"data-v-7462027c":!0,"data-v-11bc6412":!0,className:"nav-page",children:Object(E.jsxs)("div",{"data-v-7462027c":!0,className:"nav-fixed content_box m-0",children:[Object(E.jsx)("a",{"data-v-7462027c":!0,className:"nav-logo",href:"/",children:Object(E.jsx)("img",{"data-v-7462027c":!0,src:"img/logo.svg"})}),Object(E.jsx)("div",{"data-v-7462027c":!0,className:"nav-title",children:c.filter((function(e){return e.active||void 0===e.active})).map((function(e){var t=e.title,c=e.href;return Object(E.jsx)("div",{"data-v-7462027c":!0,className:"nav-title-a",style:{padding:"10px"},children:Object(E.jsx)(g,{"data-v-7462027c":!0,smooth:!0,to:c,style:{maxWidth:"calc((100vw - 10px)/(".concat(window.document.querySelectorAll(".nav-title-a").length-(y.isMobile?0:1),"))"),overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:t})},c)}))}),Object(E.jsx)("div",{"data-v-7462027c":!0,className:"nav-lan",children:Object(E.jsx)("div",{"data-v-7462027c":!0,className:"header-login",children:i&&i.address?Object(E.jsxs)("div",{className:y.isMobile?"d-none":"",children:[Object(E.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbar-list-4","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(E.jsx)("span",{className:"navbar-toggler-icon"})}),Object(E.jsx)("div",{className:"collapse navbar-collapse",id:"navbar-list-4",children:Object(E.jsx)("ul",{className:"navbar-nav",children:Object(E.jsxs)("li",{className:"nav-item dropdown",children:[Object(E.jsx)("a",{className:"nav-link dropdown-toggle",href:"#",id:"navbarDropdownMenuLink",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:Object(E.jsx)("img",{src:new w.a(50,i.address).getImage(),width:50,height:50,className:"rounded-circle"})}),Object(E.jsxs)("div",{className:"dropdown-menu dropdown-menu-right text-center content_box","aria-labelledby":"navbarDropdownMenuLink",children:[Object(E.jsxs)("a",{className:"dropdown-item",disabled:"disabled",children:[Object(v.c)(i.address)," (",Object(v.a)(j,!1)," ",O.g.symbol,")"]}),t.filter((function(e){return e.active||void 0===e.active})).map((function(e){var t=e.title,c=e.href;return Object(E.jsx)(o.b,{to:c,className:"dropdown-item",children:t},c)})),b&&Object(E.jsx)("a",{className:"dropdown-item",href:"#",onClick:function(e){e.preventDefault();var t=Object(v.m)(function(){var e=Object(s.a)(a.a.mark((function e(c){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:m(c).then((function(){t.close()}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:"Withdraw"}),Object(E.jsx)("a",{className:"dropdown-item",href:"#",onClick:function(e){e.preventDefault(),u()},children:"Disconnect"})]})]})})})]}):d&&Object(E.jsx)("a",{href:"#",className:y.isMobile?"invisible":"visible",onClick:function(e){e.preventDefault(),f()},children:Object(E.jsx)("div",{className:"content_button content_button_yellow m-0",style:{padding:"0.3em 1em 0.5em 1em"},children:Object(E.jsx)("p",{style:{fontSize:"1.3em"},children:y.isMobile?"":"Connect Wallet"})})})})})]})})})}},1115:function(e,t,c){"use strict";c(2),c(1118);var n=c(3);t.a=function(e){var t=e.message,c=e.width,a=void 0===c?500:c;return Object(n.jsxs)("div",{className:"d-flex justify-content-center align-items-center flex-column",style:{position:"relative",width:a,minHeight:a},children:[Object(n.jsx)("img",{src:"img/empty.gif",style:{width:a},alt:""}),Object(n.jsx)("p",{style:{position:"absolute",bottom:a/15,fontSize:a/15},children:t})]})}},1116:function(e,t,c){"use strict";c(2),c(1119);var n=c(3);t.a=function(e){var t=e.message,c=void 0===t?"Loading...":t;e.width;return Object(n.jsx)("div",{className:"d-flex justify-content-center align-items-center flex-column",style:{position:"relative",minHeight:400},children:Object(n.jsx)("p",{style:{fontSize:22},children:c})})}},1117:function(e,t,c){"use strict";c.d(t,"a",(function(){return p}));var n=c(0),a=c.n(n),s=c(7),i=c(2),r=c.n(i),l=c(8),o=c(1114),d=c(31),j=c(105),b=c(1113),m=c(264),u=c(266),f=c.n(u),h=c(3);function p(e){var t=e.children,c=e.isReady,n=e.navUrls,i=e.dropdownUrls,u=e.showToolBar,p=void 0===u||u,x=e.title,g=r.a.useContext(m.a),O=g.account,v=g.balance,N=g.balanceBNB,w=g.statusSale,y=g.convertNumberToPrice,T=g.buyToken,E=g.totalSale,_=g.getTotalSale;return Object(h.jsx)("div",{"data-v-1398d974":!0,id:"app",className:"en application",children:Object(h.jsxs)("div",{"data-v-11bc6412":!0,"data-v-1398d974":!0,id:"homepage",className:"index-page",children:[c&&Object(h.jsx)(o.a,{navUrls:n,dropdownUrls:i}),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("img",{id:"fg3",className:"bg",src:"img/03.png"}),Object(h.jsx)("img",{id:"fg2",className:"bg",src:"img/02.png",style:{top:0}}),Object(h.jsx)("img",{id:"fg1",className:"bg",src:"img/01.png",style:{top:0}})]}),Object(h.jsx)("div",{style:{margin:"120px 0 40px 0"},children:x&&Object(h.jsx)("h2",{className:"gradient-heading",children:x})}),Object(h.jsx)("main",{style:{minHeight:"100vh",marginBottom:50},children:p?Object(h.jsx)(h.Fragment,{children:c&&O&&Object(h.jsx)("div",{className:"container-xl container-md-fluid container-ms-fluid",children:Object(h.jsxs)("section",{className:"dashboard",children:[Object(h.jsxs)("header",{className:"booking-bar content_box m-0",children:[Object(h.jsxs)("div",{className:"booking-bar__info",children:[Object(h.jsx)("h2",{className:"booking-bar__heading",children:Object(h.jsxs)("p",{className:"styled-price",children:[l.g.name," (",l.g.symbol,")"]})}),Object(h.jsx)("p",{className:"booking-bar__sub-heading",children:Object(h.jsxs)("span",{className:"top-flight-card__heading",children:[Object(d.c)(l.g.address,j.isMobile?7:15),Object(h.jsxs)("a",{href:"#",onClick:function(e){e.preventDefault(),Object(d.e)(l.g.address)},children:[" ",Object(h.jsx)("i",{className:"fas fa-copy",style:{fontSize:12}})]})]})})]}),Object(h.jsxs)("div",{className:"booking-bar__inputs",children:[Object(h.jsxs)("div",{className:"icon-input",children:[Object(h.jsxs)("p",{className:"top-flight-card__price styled-price",children:[y(v,!1),w&&"number"===typeof E&&Object(h.jsxs)("a",{href:"#",onClick:function(e){e.preventDefault();var t=Object(d.j)(function(){var e=Object(s.a)(a.a.mark((function e(c){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:T(c).then((function(){_(),t.close()}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E)},children:[" ",Object(h.jsx)("i",{className:"fas fa-plus-circle",style:{fontSize:"70%"}})]})]}),Object(h.jsx)("div",{className:"top-flight-card__info",children:Object(h.jsx)("p",{className:"top-flight-card__heading",children:Object(h.jsx)("img",{src:"img/logo-token.svg",style:{width:28,height:28,borderRadius:14,marginRight:5}})})})]}),Object(h.jsxs)("div",{className:"icon-input",children:[Object(h.jsx)("p",{className:"top-flight-card__price styled-price",children:y(N)}),Object(h.jsx)("div",{className:"top-flight-card__info",children:Object(h.jsx)("p",{className:"top-flight-card__heading",children:Object(h.jsx)("img",{src:"img/bnb.svg",style:{width:28,height:28,borderRadius:14,marginRight:5}})})})]})]})]}),t,Object(h.jsxs)("aside",{className:"user-card content_box m-0",children:[Object(h.jsx)("figure",{className:"user-card__avatar",children:Object(h.jsx)("img",{src:new f.a(40,O.address).getImage(),width:"40",height:"40",className:"rounded-circle"})}),Object(h.jsxs)("div",{className:"p user-card__heading",children:["Hello, ",Object(h.jsxs)("span",{className:"user-card__name",children:[Object(d.c)(O.address,4),Object(h.jsxs)("a",{href:"#",onClick:function(e){e.preventDefault(),Object(d.e)(O.address)},children:[" ",Object(h.jsx)("i",{className:"fas fa-copy",style:{fontSize:12}})]})]})]})]})]})})}):t})]}),Object(h.jsx)(b.a,{})]})})}},1118:function(e,t,c){},1119:function(e,t,c){},1134:function(e,t,c){},1139:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return w}));var n=c(26),a=c(15),s=c(0),i=c.n(s),r=c(7),l=c(2),o=c.n(l),d=c(1111),j=c(264),b=(c(1134),c(42)),m=c(1117),u=c(8),f=c(1115),h=c(1116),p=c(31),x=c(269),g=c(22),O=c(1110),v=c(3),N=function(e){var t=e.typeNft,c=e.id,n=e.timestamp,a=e.speciesId,s=e.HP,l=e.DEF,d=e.AVD,b=e.ATK,m=e.CRT,f=e.WSP,h=e.upgradeTimes,N=e.allowAction,w=o.a.useContext(j.a),y=w.upgradeCharacter,T=w.upgradeWeapons,E=w.getCharacters,_=w.getWeapons,k=w.setOffer,C=w.openEgg,A=w.offers,P=w.removeOffer,F=w.openChest;Object(O.a)();var R=function(){return[u.l.TYPE_NFT.CHARACTER,u.l.TYPE_NFT.WEAPON].includes(t)},Y=function(){return t===u.l.TYPE_NFT.CHARACTER?"character":t===u.l.TYPE_NFT.WEAPON?"weapon":t===u.l.TYPE_NFT.EGG?"egg":"chest"},S=function(e,t){return(e===u.l.TYPE_NFT.CHARACTER?u.d.species[t]:e===u.l.TYPE_NFT.WEAPON?u.p.species[t]:{})||{}},H=function(){var e=Object(r.a)(i.a.mark((function e(n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),0===t?y(c,h).then((function(){E()})):T(c,h).then((function(){_()}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),W=function(){var e=Object(r.a)(i.a.mark((function e(n){var s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),s=Object(p.n)((function(e,n){"bnb"===n?k({tokenId:c,typeNft:t,amount:e,payWithTokens:!1}).then((function(){s.close()})):k({tokenId:c,typeNft:t,amount:e*Math.pow(10,u.g.decimal),payWithTokens:!0}).then((function(){s.close()}))}),"".concat([u.l.TYPE_NFT.WEAPON,u.l.TYPE_NFT.CHARACTER].includes(t)?S(t,a).name:t===u.l.TYPE_NFT.EGG?"Magic Egg":"Weapon Chest"," #").concat(c));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(r.a)(i.a.mark((function e(n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),!N){e.next=5;break}return e.abrupt("return",t===u.l.TYPE_NFT.EGG?C(c):F(c));case 5:g.c.error("Item cannot be opened now!");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(r.a)(i.a.mark((function e(n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),P(c,t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=function(){return!!A&&!!A.find((function(e){return e.tokenId===c&&t===e.typeNft}))};return Object(v.jsxs)("div",{className:"col-md-4 content_box",children:[Object(v.jsx)("div",{className:"row justify-content-center mb-3",children:Object(v.jsx)("div",{className:"content_box_label_".concat([u.l.TYPE_NFT.WEAPON,u.l.TYPE_NFT.CHARACTER].includes(t)?u.d.rareType[S(t,a).rarity].toLocaleLowerCase():"legendary"," font-weight-bold"),children:[u.l.TYPE_NFT.WEAPON,u.l.TYPE_NFT.CHARACTER].includes(t)?u.d.rareType[S(t,a).rarity]||"...":"???"})}),Object(v.jsx)("div",{className:"nft-image",children:Object(v.jsx)(x.LazyLoadImage,{className:"card-img-top",effect:"blur",src:"img/".concat(Y(),"s/").concat(Y(),"_").concat(R()?a:2===t?4:0,".").concat(t===u.l.TYPE_NFT.WEAPON?"png":"gif")})}),Object(v.jsxs)("div",{className:"card-body",children:[Object(v.jsx)("div",{className:"d-flex align-items-center justify-content-center",children:Object(v.jsxs)("div",{className:"text-left text-warning name",children:[[u.l.TYPE_NFT.WEAPON,u.l.TYPE_NFT.CHARACTER].includes(t)?S(t,a).name:t===u.l.TYPE_NFT.EGG?"Magic Egg":"Weapon Chest"," #",c]})}),Object(v.jsxs)("p",{className:"card-text",style:{marginBottom:10},children:[Object(v.jsx)("div",{"data-v-11bc6412":!0,className:"attr-content",children:[u.l.TYPE_NFT.EGG,u.l.TYPE_NFT.CHARACTER].includes(t)?Object(v.jsxs)("div",{"data-v-11bc6412":!0,className:"attr-row display-flex-between mb15",children:[Object(v.jsxs)("div",{"data-v-11bc6412":!0,className:"attr-col",children:[Object(v.jsx)("i",{"data-v-11bc6412":!0,className:"font_family icon-life attr-icon align-middle"}),Object(v.jsxs)("span",{"data-v-11bc6412":!0,className:"attr-text",children:["HP ",Object(v.jsx)("span",{className:"text-success font-weight-bold",children:t===u.l.TYPE_NFT.EGG?"???":s})]})]}),Object(v.jsxs)("div",{"data-v-11bc6412":!0,className:"attr-col",children:[Object(v.jsx)("i",{"data-v-11bc6412":!0,className:"font_family icon-defense attr-icon align-middle"}),Object(v.jsxs)("span",{"data-v-11bc6412":!0,className:"attr-text",children:["DEF ",Object(v.jsx)("span",{className:"text-warning font-weight-bold",children:t===u.l.TYPE_NFT.EGG?"???":l})]})]}),Object(v.jsxs)("div",{"data-v-11bc6412":!0,className:"attr-col",children:[Object(v.jsx)("i",{"data-v-11bc6412":!0,className:"font_family icon-hedge attr-icon align-middle"}),Object(v.jsxs)("span",{"data-v-11bc6412":!0,className:"attr-text",children:["AVD ",Object(v.jsx)("span",{className:"text-info font-weight-bold",children:t===u.l.TYPE_NFT.EGG?"???":d})]})]})]}):Object(v.jsxs)("div",{"data-v-11bc6412":!0,className:"attr-row display-flex-between mb15",children:[Object(v.jsxs)("div",{"data-v-11bc6412":!0,className:"attr-col",children:[Object(v.jsx)("i",{"data-v-11bc6412":!0,className:"font_family icon-attack attr-icon"}),Object(v.jsxs)("span",{"data-v-11bc6412":!0,className:"attr-text",children:["ATK ",Object(v.jsx)("span",{className:"text-success font-weight-bold",children:t===u.l.TYPE_NFT.CHEST?"???":b})]})]}),Object(v.jsxs)("div",{"data-v-11bc6412":!0,className:"attr-col",children:[Object(v.jsx)("i",{"data-v-11bc6412":!0,className:"font_family icon-crit attr-icon"}),Object(v.jsxs)("span",{"data-v-11bc6412":!0,className:"attr-text",children:["CRT ",Object(v.jsx)("span",{className:"text-warning font-weight-bold",children:t===u.l.TYPE_NFT.CHEST?"???":m})]})]}),Object(v.jsxs)("div",{"data-v-11bc6412":!0,className:"attr-col",children:[Object(v.jsx)("i",{"data-v-11bc6412":!0,className:"font_family icon-speed attr-icon"}),Object(v.jsxs)("span",{"data-v-11bc6412":!0,className:"attr-text",children:["WSP ",Object(v.jsx)("span",{className:"text-info font-weight-bold",children:t===u.l.TYPE_NFT.CHEST?"???":f})]})]})]})}),R()?Object(v.jsxs)("div",{children:["Upgrade Price: ",Object(v.jsx)("span",{className:"text-success font-weight-bold",children:Object(p.a)(Object(p.b)(h*u.d.priceUpgrade/10+u.d.priceUpgrade),!1)})," ",u.g.symbol]}):null,Object(v.jsxs)("div",{children:["Created At: ",n.toDate().toLocaleString()]})]}),R()?Object(v.jsx)("a",{href:"#",onClick:H,className:"btn-action",disabled:G(),children:Object(v.jsx)("div",{className:"content_button content_button_yellow",style:{padding:"0.3em 2em 0.5em 2em"},children:Object(v.jsx)("p",{style:{fontSize:"1em"},children:"Upgrade Now"})})}):Object(v.jsx)("a",{href:"#",onClick:D,className:"btn-action",disabled:!N,children:Object(v.jsx)("div",{className:"content_button content_button_yellow",style:{padding:"0.3em 2em 0.5em 2em"},children:Object(v.jsx)("p",{style:{fontSize:"1em"},children:"Open Now"})})}),Object(v.jsx)("a",{href:"#",onClick:function(e){if(0!==Number(a))return G()?I(e):W(e);g.c.error("This is the default weapon you cannot sell!")},className:"btn-action",disabled:0==a,children:Object(v.jsx)("div",{className:"content_button ".concat(G()?"content_button_red":""),style:{padding:"0.3em 2em 0.5em 2em"},children:Object(v.jsx)("p",{style:{fontSize:"1em"},children:G()?"Remove from market":"Sell Now"})})})]})]},"".concat(t,"_").concat(c))};function w(){var e=Object(d.a)("css/dashboard.css"),t=Object(b.f)(),c=o.a.useContext(j.a),s=c.account,l=c.isAdmin,p=c.eggs,x=c.chests,g=c.characters,O=c.weapons,w=c.getCharacters,y=c.getWeapons,T=c.getEggs,E=c.buyEgg,_=c.getChests,k=c.buyChest,C=c.getOffers,A=o.a.useState(u.l.TYPE_NFT.CHARACTER),P=Object(a.a)(A,2),F=P[0],R=P[1],Y=o.a.useMemo((function(){return[{title:"Home",href:"/"},{title:"Dashboard",href:"/dashboard"},{title:"Marketplace",href:"/marketplace"},{title:"Invitation list & Rewards",href:"/invitation-list-rewards"}]}),[]),S=o.a.useMemo((function(){return[{title:"Home",href:"/"},{title:"Marketplace",href:"/marketplace"},{title:"Dashboard",href:"/dashboard"},{title:"Transactions",href:"/transactions"},{title:"Administration",href:"/admin",active:l},{title:"Invitation list & Rewards",href:"/invitation-list-rewards"}]}),[]);o.a.useEffect((function(){setTimeout((function(){window.$('[data-toggle="tooltip"]').tooltip()}),500)}),[p,g,O]),o.a.useEffect((function(){s&&s.address?setTimeout((function(){window.$(".loader").fadeOut(500,"swing",(function(){}))}),4e3):t.push("/")}),[]),o.a.useEffect((function(){s&&(C(),w(),y(),T(),_())}),[s]);var H=function(){var e=Object(r.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),E().then((function(){T()}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),W=function(){var e=Object(r.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),k().then((function(){_()}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsx)(m.a,{isReady:e,navUrls:Y,dropdownUrls:S,title:"Armory",children:Object(v.jsxs)("div",{className:"furnace flights",children:[Object(v.jsxs)("section",{className:"content_box d-flex furnace-toolbar",children:[Object(v.jsxs)("div",{className:"left-toolbar",children:[Object(v.jsxs)("div",{className:"nft-item",role:"button",onClick:function(){return R(u.l.TYPE_NFT.CHARACTER)},children:[Object(v.jsx)("div",{className:"nft-image-item ".concat(F===u.l.TYPE_NFT.CHARACTER?"active":""),children:Object(v.jsx)("img",{src:"img/character.png"})}),Object(v.jsx)("span",{className:"label",children:(g||[]).length})]}),Object(v.jsxs)("div",{className:"nft-item",role:"button",onClick:function(){return R(u.l.TYPE_NFT.WEAPON)},children:[Object(v.jsx)("div",{className:"nft-image-item ".concat(F===u.l.TYPE_NFT.WEAPON?"active":""),children:Object(v.jsx)("img",{src:"img/weapon.png"})}),Object(v.jsx)("span",{className:"label",children:(O||[]).length})]}),Object(v.jsxs)("div",{className:"nft-item",role:"button",onClick:function(){return R(u.l.TYPE_NFT.EGG)},children:[Object(v.jsx)("div",{className:"nft-image-item ".concat(F===u.l.TYPE_NFT.EGG?"active":""),children:Object(v.jsx)("img",{src:"img/egg.png"})}),Object(v.jsx)("span",{className:"label",children:(p||[]).length})]}),Object(v.jsxs)("div",{className:"nft-item",role:"button",onClick:function(){return R(u.l.TYPE_NFT.CHEST)},children:[Object(v.jsx)("div",{className:"nft-image-item ".concat(F===u.l.TYPE_NFT.CHEST?"active":""),children:Object(v.jsx)("img",{src:"img/chest.png"})}),Object(v.jsx)("span",{className:"label",children:(x||[]).length})]})]}),Object(v.jsxs)("div",{className:"right-toolbar",children:[Object(v.jsxs)("a",{href:"#",className:"nft-item",onClick:H,children:[Object(v.jsx)("img",{src:"img/egg.png",style:{width:40,height:40}}),Object(v.jsx)("span",{className:"label",children:Object(v.jsx)("i",{className:"fas fa-plus-circle"})})]}),Object(v.jsxs)("a",{href:"#",className:"nft-item",onClick:W,children:[Object(v.jsx)("img",{src:"img/chest.png",style:{width:40,height:40}}),Object(v.jsx)("span",{className:"label",children:Object(v.jsx)("i",{className:"fas fa-plus-circle"})})]})]})]}),Object(v.jsxs)("section",{className:"content_box content",children:[Object(v.jsxs)("div",{className:"nft-item w-100 ".concat(0!==F?"d-none":""),id:"Warriors",children:[Object(v.jsx)("p",{className:"title text-center",children:"Warriors"}),Object(v.jsxs)("div",{className:"row",children:[g&&g.length?g.map((function(e){var t=Object(n.a)({typeNft:u.l.TYPE_NFT.CHARACTER,allowAction:!0},e);return Object(v.jsx)(N,Object(n.a)({},t),"".concat(t.typeNft,"_").concat(t.id))})):null,!(g&&g.length)&&Object(v.jsx)("div",{className:"h-100 d-flex justify-content-center align-items-center  w-100",children:Object(v.jsx)("p",{children:g?Object(v.jsx)(f.a,{message:"Empty!",width:300}):Object(v.jsx)(h.a,{width:300})})})]})]}),Object(v.jsxs)("div",{className:"nft-item w-100 ".concat(1!==F?"d-none":""),id:"Weapons",children:[Object(v.jsx)("p",{className:"title text-center",children:"Weapons"}),Object(v.jsxs)("div",{className:"row",children:[O&&O.length?O.map((function(e){var t=Object(n.a)({typeNft:u.l.TYPE_NFT.WEAPON,allowAction:!0},e);return Object(v.jsx)(N,Object(n.a)({},t),"".concat(t.typeNft,"_").concat(t.id))})):null,!(O&&O.length)&&Object(v.jsx)("div",{className:"h-100 d-flex justify-content-center align-items-center  w-100",children:Object(v.jsx)("p",{children:O?Object(v.jsx)(f.a,{message:"Empty!",width:300}):Object(v.jsx)(h.a,{width:300})})})]})]}),Object(v.jsxs)("div",{className:"nft-item w-100 ".concat(2!==F?"d-none":""),id:"Eggs",children:[Object(v.jsx)("p",{className:"title text-center",children:"Eggs"}),Object(v.jsxs)("div",{className:"row",children:[p&&p.length?p.map((function(e){var t=Object(n.a)({typeNft:u.l.TYPE_NFT.EGG},e);return Object(v.jsx)(N,Object(n.a)({},t),"".concat(t.typeNft,"_").concat(t.id))})):null,!(p&&p.length)&&Object(v.jsx)("div",{className:"h-100 d-flex justify-content-center align-items-center w-100",children:Object(v.jsx)("p",{children:p?Object(v.jsx)(f.a,{message:"Empty!",width:300}):Object(v.jsx)(h.a,{width:300})})})]})]}),Object(v.jsxs)("div",{className:"nft-item w-100 ".concat(3!==F?"d-none":""),id:"Chests",children:[Object(v.jsx)("p",{className:"title text-center",children:"Chests"}),Object(v.jsxs)("div",{className:"row",children:[x&&x.length?x.map((function(e){var t=Object(n.a)({typeNft:u.l.TYPE_NFT.CHEST},e);return Object(v.jsx)(N,Object(n.a)({},t),"".concat(t.typeNft,"_").concat(t.id))})):null,!(x&&x.length)&&Object(v.jsx)("div",{className:"h-100 d-flex justify-content-center align-items-center w-100",children:Object(v.jsx)("p",{children:x?Object(v.jsx)(f.a,{message:"Empty!",width:300}):Object(v.jsx)(h.a,{width:300})})})]})]})]})]})})}}}]);