(this["webpackJsonpbsc-dapp-example"]=this["webpackJsonpbsc-dapp-example"]||[]).push([[5],{1110:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(42),c=n(2),s=function(){var e=Object(a.f)();Object(c.useEffect)((function(){return e.listen((function(){document.querySelector("#root").scrollIntoView({behavior:"smooth"},500)}))}),[e])}},1111:function(e,t,n){"use strict";var a=n(15),c=n(2),s=n(8);t.a=function(e){var t=Object(c.useState)(!1),n=Object(a.a)(t,2),i=n[0],r=n[1];return Object(c.useEffect)((function(){var t=document.getElementsByTagName("head")[0],n=document.createElement("link");return n.rel="stylesheet",n.type="text/css",n.href="".concat(e,"?v=").concat(s.b.gitCommitHash),n.media="all",t.appendChild(n),r(!0),function(){document.head.removeChild(n)}}),[e]),i}},1112:function(e,t,n){},1113:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(2),c=n.n(a),s=n(8),i=n(105),r=n(36),l=n(0),o=n.n(l),d=n(7),j=n(13),b=n(42),u=n(264),m=n(3),h=function(){var e=Object(b.f)(),t=Object(b.g)(),n=Object(a.useContext)(u.a),s=n.account,i=n.disconnect,l=n.connect,h=t.pathname,f=function(){var t=Object(d.a)(o.a.mark((function t(n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("/account"!==n){t.next=9;break}if(!s){t.next=5;break}j.a.show({content:"Do you want to disconnect the wallet?",closeOnAction:!0,actions:[[{key:"cancel",text:"Cancel",danger:!0},{key:"delete",text:"Disconnect",bold:!0}]],onAction:function(e,t){1===t&&i()}}),t.next=7;break;case 5:return t.next=7,l();case 7:t.next=10;break;case 9:"/#tokenomics"===n&&"/"===h?window.$('a[href^="#/#tokenomics"]')[0].click():e.push("".concat(n));case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=c.a.useMemo((function(){var e=[{key:"/",title:"Home",icon:Object(m.jsx)("i",{className:"fas fa-h-square"})},{key:"/marketplace",title:"Marketplace",icon:Object(m.jsx)("i",{className:"fas fa-store"})}];return s?e=[].concat(Object(r.a)(e),[{key:"/dashboard",title:"Dashboard",icon:Object(m.jsx)("i",{className:"fas fa-columns"})},{key:"/armory",title:"Armory",icon:Object(m.jsx)("i",{className:"fas fa-burn"})},{key:"/invitation-list-rewards",title:"Rewards",icon:Object(m.jsx)("i",{className:"fas fa-link"})}]):e.push({key:"/#tokenomics",title:"Pre-sale",icon:Object(m.jsx)("i",{className:"fas fa-wallet"})}),e.push({key:"/account",title:s?"Disconnect":"Connect Wallet",icon:s?Object(m.jsx)("i",{className:"fas fa-sign-out-alt"}):Object(m.jsx)("i",{className:"fas fa-sign-in-alt"})}),e}),[s]);return Object(m.jsx)(j.c,{activeKey:h,onChange:function(e){return f(e)},children:p.map((function(e){return Object(m.jsx)(j.c.Item,{icon:e.icon,title:e.title},e.key)}))})},f=(n(1112),function(){var e=function(){new window.google.translate.TranslateElement({pageLanguage:"en"},"google_translate_element")};return c.a.useEffect((function(){var t=document.createElement("script");t.setAttribute("src","//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"),document.body.appendChild(t),window.googleTranslateElementInit=e,setTimeout((function(){window.$("#google_translate_element .goog-te-gadget").contents().filter((function(){return"#text"===this.nodeName})).remove()}),1e3)}),[]),Object(m.jsxs)("div",{className:"d-flex justify-content-center align-items-center mt-3",children:[Object(m.jsx)("p",{children:Object(m.jsx)("b",{children:"Language"})}),Object(m.jsx)("div",{id:"google_translate_element"})]})});function p(){return Object(m.jsxs)("div",{"data-v-c18f8362":!0,"data-v-11bc6412":!0,className:"footer-page",style:{textAlign:"center",marginBottom:i.isMobile?"116px":0},children:[Object(m.jsx)("img",{"data-v-c18f8362":!0,style:{width:180},src:"img/logo.svg"}),Object(m.jsxs)("div",{"data-v-c18f8362":!0,className:"email",children:["Support Email: ",Object(m.jsxs)("a",{href:"mailto: support@".concat(s.g.name.replaceAll(" ","").toLocaleLowerCase(),".com"),className:"contact",children:["support@",s.g.name.replaceAll(" ","").toLocaleLowerCase(),".com"]})," ",Object(m.jsx)("br",{}),"Partnership & Inquiry Email: ",Object(m.jsxs)("a",{href:"mailto: hello@".concat(s.g.name.replaceAll(" ","").toLocaleLowerCase(),".com"),className:"contact",children:["hello@",s.g.name.replaceAll(" ","").toLocaleLowerCase(),".com"]})]}),Object(m.jsxs)("div",{className:"social",children:[Object(m.jsx)("a",{target:"_blank",href:s.b.socials.telegram,children:"Telegram"}),Object(m.jsx)("a",{target:"_blank",href:s.b.socials.twitter,children:"Twitter"}),Object(m.jsx)("a",{target:"_blank",href:s.b.socials.reddit,children:"Reddit"}),Object(m.jsx)("a",{target:"_blank",href:s.b.socials.facebook,children:"Facebook"})]}),Object(m.jsxs)("div",{"data-v-c18f8362":!0,className:"copyright",children:["Copyright \xa9 ",(new Date).getFullYear()," ",s.g.name,". All rights reserved."]}),Object(m.jsx)("div",{children:Object(m.jsx)(f,{})}),i.isMobile&&Object(m.jsx)("div",{style:{flex:"0 1 0%",position:"fixed",bottom:"0px",width:"100%",background:"#232125",zIndex:1e3},children:Object(m.jsx)(h,{})})]})}},1114:function(e,t,n){"use strict";n.d(t,"a",(function(){return k}));var a=n(0),c=n.n(a),s=n(7),i=n(2),r=n.n(i),l=n(264),o=n(42),d=n(265),j=(n(106),function(){return(j=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var c in t=arguments[n])Object.prototype.hasOwnProperty.call(t,c)&&(e[c]=t[c]);return e}).apply(this,arguments)});var b="",u=null,m=null,h=null;function f(){b="",null!==u&&u.disconnect(),null!==m&&(window.clearTimeout(m),m=null)}function p(e){return["BUTTON","INPUT","SELECT","TEXTAREA"].includes(e.tagName)&&!e.hasAttribute("disabled")||["A","AREA"].includes(e.tagName)&&e.hasAttribute("href")}function x(){var e=null;if("#"===b)e=document.body;else{var t=b.replace("#","");null===(e=document.getElementById(t))&&"#top"===b&&(e=document.body)}if(null!==e){h(e);var n=e.getAttribute("tabindex");return null!==n||p(e)||e.setAttribute("tabindex",-1),e.focus({preventScroll:!0}),null!==n||p(e)||(e.blur(),e.removeAttribute("tabindex")),f(),!0}return!1}function g(e){return r.a.forwardRef((function(t,n){var a="";"string"===typeof t.to&&t.to.includes("#")?a="#"+t.to.split("#").slice(1).join("#"):"object"===typeof t.to&&"string"===typeof t.to.hash&&(a=t.to.hash);var c={};e===d.c&&(c.isActive=function(e,t){return e&&e.isExact&&t.hash===a});var s=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(a=Object.getOwnPropertySymbols(e);c<a.length;c++)t.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(e,a[c])&&(n[a[c]]=e[a[c]])}return n}(t,["scroll","smooth","timeout","elementId"]);return r.a.createElement(e,j({},c,s,{onClick:function(e){var n;f(),b=t.elementId?"#"+t.elementId:a,t.onClick&&t.onClick(e),""===b||e.defaultPrevented||0!==e.button||t.target&&"_self"!==t.target||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||(h=t.scroll||function(e){return t.smooth?e.scrollIntoView({behavior:"smooth"}):e.scrollIntoView()},n=t.timeout,window.setTimeout((function(){!1===x()&&(null===u&&(u=new MutationObserver(x)),u.observe(document,{attributes:!0,childList:!0,subtree:!0}),m=window.setTimeout((function(){f()}),n||1e4))}),0))},ref:n}),t.children)}))}var O=g(d.b),v=(g(d.c),n(8)),N=n(31),w=n(266),y=n.n(w),T=n(105),E=n(267),_=n(3);function k(e){var t=e.dropdownUrls,n=e.navUrls,a=Object(o.f)(),i=r.a.useContext(l.a),j=i.account,b=i.isReady,u=i.balance,m=i.statusSell,h=i.sellToken,f=i.disconnect,p=i.connect;return Object(E.a)((function(){document.querySelectorAll("nav .nav-title a").forEach((function(e){"/".concat(e.getAttribute("href"))==="".concat(window.location.pathname).concat(window.location.hash)&&e.click()}))}),500),Object(_.jsx)("nav",{className:"navbar-dark bg-dark navbar-expand-sm",children:Object(_.jsx)("div",{"data-v-7462027c":!0,"data-v-11bc6412":!0,className:"nav-page",children:Object(_.jsxs)("div",{"data-v-7462027c":!0,className:"nav-fixed content_box m-0",children:[Object(_.jsx)("a",{"data-v-7462027c":!0,className:"nav-logo",href:"/",children:Object(_.jsx)("img",{"data-v-7462027c":!0,src:"img/logo.svg"})}),Object(_.jsx)("div",{"data-v-7462027c":!0,className:"nav-title",children:n.filter((function(e){return e.active||void 0===e.active})).map((function(e){var t=e.title,n=e.href;return Object(_.jsx)("div",{"data-v-7462027c":!0,className:"nav-title-a",style:{padding:T.isMobile?"8px":"10px"},children:Object(_.jsx)(O,{"data-v-7462027c":!0,smooth:!0,to:n,style:{maxWidth:"calc((100vw - 10px)/(".concat(window.document.querySelectorAll(".nav-title-a").length-(T.isMobile?0:1),"))"),overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:t})},n)}))}),Object(_.jsx)("div",{"data-v-7462027c":!0,className:"nav-lan",children:Object(_.jsx)("div",{"data-v-7462027c":!0,className:"header-login",children:j&&j.address?Object(_.jsxs)("div",{className:T.isMobile?"d-none":"",children:[Object(_.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbar-list-4","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(_.jsx)("span",{className:"navbar-toggler-icon"})}),Object(_.jsx)("div",{className:"collapse navbar-collapse",id:"navbar-list-4",children:Object(_.jsx)("ul",{className:"navbar-nav",children:Object(_.jsxs)("li",{className:"nav-item dropdown",children:[Object(_.jsx)("a",{className:"nav-link dropdown-toggle",href:"#",id:"navbarDropdownMenuLink",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:Object(_.jsx)("img",{src:new y.a(50,j.address).getImage(),width:50,height:50,className:"rounded-circle"})}),Object(_.jsxs)("div",{className:"dropdown-menu dropdown-menu-right text-center content_box","aria-labelledby":"navbarDropdownMenuLink",children:[Object(_.jsxs)("a",{className:"dropdown-item",disabled:"disabled",children:[Object(N.c)(j.address)," (",Object(N.a)(u,!1)," ",v.g.symbol,")"]}),t.filter((function(e){return e.active||void 0===e.active})).map((function(e){var t=e.title,n=e.href;return Object(_.jsx)(d.b,{to:n,className:"dropdown-item",children:t},n)})),m&&Object(_.jsx)("a",{className:"dropdown-item",href:"#",onClick:function(e){e.preventDefault();var t=Object(N.m)(function(){var e=Object(s.a)(c.a.mark((function e(n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:h(n).then((function(){t.close()}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:"Withdraw"}),Object(_.jsx)("a",{className:"dropdown-item",href:"#",onClick:function(e){e.preventDefault(),f()},children:"Disconnect"})]})]})})})]}):b&&Object(_.jsx)("a",{href:"#",className:T.isMobile?"invisible":"visible",onClick:function(e){e.preventDefault(),p().then((function(){a.push("/dashboard")}))},children:Object(_.jsx)("div",{className:"content_button content_button_yellow m-0",style:{padding:"0.3em 1em 0.5em 1em"},children:Object(_.jsx)("p",{style:{fontSize:"1.3em"},children:T.isMobile?"":"Connect Wallet"})})})})})]})})})}},1115:function(e,t,n){"use strict";n(2),n(1118);var a=n(3);t.a=function(e){var t=e.message,n=e.width,c=void 0===n?500:n;return Object(a.jsxs)("div",{className:"d-flex justify-content-center align-items-center flex-column",style:{position:"relative",width:c,minHeight:c},children:[Object(a.jsx)("img",{src:"img/empty.gif",style:{width:c},alt:""}),Object(a.jsx)("p",{style:{position:"absolute",bottom:c/15,fontSize:c/15},children:t})]})}},1116:function(e,t,n){"use strict";n(2),n(1119);var a=n(3);t.a=function(e){var t=e.message,n=void 0===t?"Loading...":t;e.width;return Object(a.jsx)("div",{className:"d-flex justify-content-center align-items-center flex-column",style:{position:"relative",minHeight:400},children:Object(a.jsx)("p",{style:{fontSize:22},children:n})})}},1117:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(0),c=n.n(a),s=n(7),i=n(2),r=n.n(i),l=n(8),o=n(1114),d=n(31),j=n(105),b=n(1113),u=n(264),m=n(266),h=n.n(m),f=n(3);function p(e){var t=e.children,n=e.isReady,a=e.navUrls,i=e.dropdownUrls,m=e.showToolBar,p=void 0===m||m,x=e.title,g=r.a.useContext(u.a),O=g.account,v=g.balance,N=g.balanceBNB,w=g.statusSale,y=g.convertNumberToPrice,T=g.buyToken,E=g.totalSale,_=g.getTotalSale;return Object(f.jsx)("div",{"data-v-1398d974":!0,id:"app",className:"en application",children:Object(f.jsxs)("div",{"data-v-11bc6412":!0,"data-v-1398d974":!0,id:"homepage",className:"index-page",children:[n&&Object(f.jsx)(o.a,{navUrls:a,dropdownUrls:i}),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("img",{id:"fg3",className:"bg",src:"img/03.png"}),Object(f.jsx)("img",{id:"fg2",className:"bg",src:"img/02.png",style:{top:0}}),Object(f.jsx)("img",{id:"fg1",className:"bg",src:"img/01.png",style:{top:0}})]}),Object(f.jsx)("div",{style:{margin:"120px 0 40px 0"},children:x&&Object(f.jsx)("h2",{className:"gradient-heading",children:x})}),Object(f.jsx)("main",{style:{minHeight:"100vh",marginBottom:50},children:p?Object(f.jsx)(f.Fragment,{children:n&&O&&Object(f.jsx)("div",{className:"container-xl container-md-fluid container-ms-fluid",children:Object(f.jsxs)("section",{className:"dashboard",children:[Object(f.jsxs)("header",{className:"booking-bar content_box m-0",children:[Object(f.jsxs)("div",{className:"booking-bar__info",children:[Object(f.jsx)("h2",{className:"booking-bar__heading",children:Object(f.jsxs)("p",{className:"styled-price",children:[l.g.name," (",l.g.symbol,")"]})}),Object(f.jsx)("p",{className:"booking-bar__sub-heading",children:Object(f.jsxs)("span",{className:"top-flight-card__heading",children:[Object(d.c)(l.g.address,j.isMobile?7:15),Object(f.jsxs)("a",{href:"#",onClick:function(e){e.preventDefault(),Object(d.e)(l.g.address)},children:[" ",Object(f.jsx)("i",{className:"fas fa-copy",style:{fontSize:12}})]})]})})]}),Object(f.jsxs)("div",{className:"booking-bar__inputs",children:[Object(f.jsxs)("div",{className:"icon-input",children:[Object(f.jsxs)("p",{className:"top-flight-card__price styled-price",children:[y(v,!1),w&&"number"===typeof E&&Object(f.jsxs)("a",{href:"#",onClick:function(e){e.preventDefault();var t=Object(d.j)(function(){var e=Object(s.a)(c.a.mark((function e(n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:T(n).then((function(){_(),t.close()}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E)},children:[" ",Object(f.jsx)("i",{className:"fas fa-plus-circle",style:{fontSize:"70%"}})]})]}),Object(f.jsx)("div",{className:"top-flight-card__info",children:Object(f.jsx)("p",{className:"top-flight-card__heading",children:Object(f.jsx)("img",{src:"img/logo-token.svg",style:{width:28,height:28,borderRadius:14,marginRight:5}})})})]}),Object(f.jsxs)("div",{className:"icon-input",children:[Object(f.jsx)("p",{className:"top-flight-card__price styled-price",children:y(N)}),Object(f.jsx)("div",{className:"top-flight-card__info",children:Object(f.jsx)("p",{className:"top-flight-card__heading",children:Object(f.jsx)("img",{src:"img/bnb.svg",style:{width:28,height:28,borderRadius:14,marginRight:5}})})})]})]})]}),t,Object(f.jsxs)("aside",{className:"user-card content_box m-0",children:[Object(f.jsx)("figure",{className:"user-card__avatar",children:Object(f.jsx)("img",{src:new h.a(40,O.address).getImage(),width:"40",height:"40",className:"rounded-circle"})}),Object(f.jsxs)("div",{className:"p user-card__heading",children:["Hello, ",Object(f.jsxs)("span",{className:"user-card__name",children:[Object(d.c)(O.address,4),Object(f.jsxs)("a",{href:"#",onClick:function(e){e.preventDefault(),Object(d.e)(O.address)},children:[" ",Object(f.jsx)("i",{className:"fas fa-copy",style:{fontSize:12}})]})]})]})]})]})})}):t})]}),Object(f.jsx)(b.a,{})]})})}},1118:function(e,t,n){},1119:function(e,t,n){},1134:function(e,t,n){},1139:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return w}));var a=n(26),c=n(15),s=n(0),i=n.n(s),r=n(7),l=n(2),o=n.n(l),d=n(1111),j=n(264),b=(n(1134),n(42)),u=n(1117),m=n(8),h=n(1115),f=n(1116),p=n(31),x=n(269),g=n(25),O=n(1110),v=n(3),N=function(e){var t=e.typeNft,n=e.id,a=e.timestamp,c=e.speciesId,s=e.HP,l=e.DEF,d=e.AVD,b=e.ATK,u=e.CRT,h=e.WSP,f=e.MGZ,N=e.upgradeTimes,w=e.allowAction,y=o.a.useContext(j.a),T=y.upgradeCharacter,E=y.upgradeWeapons,_=y.getCharacters,k=y.getWeapons,C=y.setOffer,A=y.openEgg,P=y.offers,F=y.removeOffer,Y=y.openChest;Object(O.a)();var R=function(){return[m.l.TYPE_NFT.CHARACTER,m.l.TYPE_NFT.WEAPON].includes(t)},S=function(){return t===m.l.TYPE_NFT.CHARACTER?"character":t===m.l.TYPE_NFT.WEAPON?"weapon":t===m.l.TYPE_NFT.EGG?"egg":"chest"},H=function(e,t){return(e===m.l.TYPE_NFT.CHARACTER?m.d.species[t]:e===m.l.TYPE_NFT.WEAPON?m.p.species[t]:{})||{}},D=function(){var e=Object(r.a)(i.a.mark((function e(a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),0===t?T(n,N).then((function(){_()})):E(n,N).then((function(){k()}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),W=function(){var e=Object(r.a)(i.a.mark((function e(a){var s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),s=Object(p.n)((function(e,a){"bnb"===a?C({tokenId:n,typeNft:t,amount:e,payWithTokens:!1}).then((function(){s.close()})):C({tokenId:n,typeNft:t,amount:e*Math.pow(10,m.g.decimal),payWithTokens:!0}).then((function(){s.close()}))}),"".concat([m.l.TYPE_NFT.WEAPON,m.l.TYPE_NFT.CHARACTER].includes(t)?H(t,c).name:t===m.l.TYPE_NFT.EGG?"Magic Egg":"Weapon Chest"," #").concat(n));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=function(){var e=Object(r.a)(i.a.mark((function e(a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),!w){e.next=5;break}return e.abrupt("return",t===m.l.TYPE_NFT.EGG?A(n):Y(n));case 5:g.c.error("Item cannot be opened now!");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(r.a)(i.a.mark((function e(a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),F(n,t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=function(){return!!P&&!!P.find((function(e){return e.tokenId===n&&t===e.typeNft}))};return Object(v.jsxs)("div",{className:"col-md-4 content_box",children:[Object(v.jsx)("div",{className:"row justify-content-center mb-3",children:Object(v.jsx)("div",{className:"content_box_label_".concat([m.l.TYPE_NFT.WEAPON,m.l.TYPE_NFT.CHARACTER].includes(t)?m.d.rareType[H(t,c).rarity].toLocaleLowerCase():"legendary"," font-weight-bold"),children:[m.l.TYPE_NFT.WEAPON,m.l.TYPE_NFT.CHARACTER].includes(t)?m.d.rareType[H(t,c).rarity]||"...":"???"})}),Object(v.jsx)("div",{className:"nft-image",children:Object(v.jsx)(x.LazyLoadImage,{className:"card-img-top",effect:"blur",src:"img/".concat(S(),"s/").concat(S(),"_").concat(R()?c:2===t?4:0,".").concat(t===m.l.TYPE_NFT.WEAPON?"png":"gif")})}),Object(v.jsxs)("div",{className:"card-body",children:[Object(v.jsx)("div",{className:"d-flex align-items-center justify-content-center",children:Object(v.jsxs)("div",{className:"text-left text-warning name",children:[[m.l.TYPE_NFT.WEAPON,m.l.TYPE_NFT.CHARACTER].includes(t)?H(t,c).name:t===m.l.TYPE_NFT.EGG?"Magic Egg":"Weapon Chest"," #",n]})}),Object(v.jsxs)("p",{className:"card-text",style:{marginBottom:10},children:[Object(v.jsx)("div",{"data-v-11bc6412":!0,className:"attr-content",children:[m.l.TYPE_NFT.EGG,m.l.TYPE_NFT.CHARACTER].includes(t)?Object(v.jsxs)("div",{"data-v-11bc6412":!0,className:"attr-row display-flex-between mb15",children:[Object(v.jsxs)("div",{"data-v-11bc6412":!0,className:"attr-col",children:[Object(v.jsx)("i",{"data-v-11bc6412":!0,className:"font_family icon-life attr-icon align-middle"}),Object(v.jsxs)("span",{"data-v-11bc6412":!0,className:"attr-text",children:["HP ",Object(v.jsx)("span",{className:"text-success font-weight-bold",children:t===m.l.TYPE_NFT.EGG?"???":s/1e3})]})]}),Object(v.jsxs)("div",{"data-v-11bc6412":!0,className:"attr-col",children:[Object(v.jsx)("i",{"data-v-11bc6412":!0,className:"font_family icon-defense attr-icon align-middle"}),Object(v.jsxs)("span",{"data-v-11bc6412":!0,className:"attr-text",children:["DEF ",Object(v.jsx)("span",{className:"text-warning font-weight-bold",children:t===m.l.TYPE_NFT.EGG?"???":l/1e3})]})]}),Object(v.jsxs)("div",{"data-v-11bc6412":!0,className:"attr-col",children:[Object(v.jsx)("i",{"data-v-11bc6412":!0,className:"font_family icon-hedge attr-icon align-middle"}),Object(v.jsxs)("span",{"data-v-11bc6412":!0,className:"attr-text",children:["AVD ",Object(v.jsx)("span",{className:"text-info font-weight-bold",children:t===m.l.TYPE_NFT.EGG?"???":d/1e3})]})]})]}):Object(v.jsxs)("div",{"data-v-11bc6412":!0,className:"attr-row display-flex-between mb15",children:[Object(v.jsxs)("div",{"data-v-11bc6412":!0,className:"attr-col",children:[Object(v.jsx)("i",{"data-v-11bc6412":!0,className:"font_family icon-attack attr-icon"}),Object(v.jsxs)("span",{"data-v-11bc6412":!0,className:"attr-text",children:["ATK ",Object(v.jsx)("span",{className:"text-success font-weight-bold",children:t===m.l.TYPE_NFT.CHEST?"???":b/1e3})]})]}),Object(v.jsxs)("div",{"data-v-11bc6412":!0,className:"attr-col",children:[Object(v.jsx)("i",{"data-v-11bc6412":!0,className:"font_family icon-crit attr-icon"}),Object(v.jsxs)("span",{"data-v-11bc6412":!0,className:"attr-text",children:["CRT ",Object(v.jsx)("span",{className:"text-warning font-weight-bold",children:t===m.l.TYPE_NFT.CHEST?"???":u/1e3})]})]}),Object(v.jsxs)("div",{"data-v-11bc6412":!0,className:"attr-col",children:[Object(v.jsx)("i",{"data-v-11bc6412":!0,className:"font_family icon-speed attr-icon"}),Object(v.jsxs)("span",{"data-v-11bc6412":!0,className:"attr-text",children:["WSP ",Object(v.jsx)("span",{className:"text-info font-weight-bold",children:t===m.l.TYPE_NFT.CHEST?"???":h/1e3})]})]}),"0"!==(t===m.l.TYPE_NFT.CHEST?"???":f)&&Object(v.jsxs)("div",{"data-v-11bc6412":!0,className:"attr-col",children:[Object(v.jsx)("img",{src:"img/bullets.svg",style:{width:20,height:21,marginRight:7,verticalAlign:"text-top"},alt:""}),Object(v.jsx)("span",{"data-v-11bc6412":!0,style:{verticalAlign:"text-top"},className:"attr-text",children:"MGZ "})," ",Object(v.jsx)("span",{className:"text-light font-weight-bold",children:t===m.l.TYPE_NFT.CHEST?"???":f/1e3})]})]})}),R()?Object(v.jsxs)("div",{children:["Upgrade Price: ",Object(v.jsx)("span",{className:"text-success font-weight-bold",children:Object(p.a)(Object(p.b)(N*m.d.priceUpgrade/10+m.d.priceUpgrade),!1)})," ",m.g.symbol]}):null,Object(v.jsxs)("div",{children:["Created At: ",a.toDate().toLocaleString()]})]}),R()?Object(v.jsx)("a",{href:"#",onClick:D,className:"btn-action",disabled:M(),children:Object(v.jsx)("div",{className:"content_button content_button_yellow",style:{padding:"0.3em 2em 0.5em 2em"},children:Object(v.jsx)("p",{style:{fontSize:"1em"},children:"Upgrade Now"})})}):Object(v.jsx)("a",{href:"#",onClick:G,className:"btn-action",disabled:!w,children:Object(v.jsx)("div",{className:"content_button content_button_yellow",style:{padding:"0.3em 2em 0.5em 2em"},children:Object(v.jsx)("p",{style:{fontSize:"1em"},children:"Open Now"})})}),Object(v.jsx)("a",{href:"#",onClick:function(e){if(0!==Number(c))return M()?I(e):W(e);g.c.error("This is the default weapon you cannot sell!")},className:"btn-action",disabled:0==c,children:Object(v.jsx)("div",{className:"content_button ".concat(M()?"content_button_red":""),style:{padding:"0.3em 2em 0.5em 2em"},children:Object(v.jsx)("p",{style:{fontSize:"1em"},children:M()?"Remove from market":"Sell Now"})})})]})]},"".concat(t,"_").concat(n))};function w(){var e=Object(d.a)("css/dashboard.css"),t=Object(b.f)(),n=o.a.useContext(j.a),s=n.account,l=n.isAdmin,p=n.eggs,x=n.chests,g=n.characters,O=n.weapons,w=n.getCharacters,y=n.getWeapons,T=n.getEggs,E=n.buyEgg,_=n.getChests,k=n.buyChest,C=n.getOffers,A=n.openAllEgg,P=n.openAllChest,F=o.a.useState(m.l.TYPE_NFT.CHARACTER),Y=Object(c.a)(F,2),R=Y[0],S=Y[1],H=o.a.useMemo((function(){return[{title:"Home",href:"/"},{title:"Dashboard",href:"/dashboard"},{title:"Marketplace",href:"/marketplace"},{title:"Invitation list & Rewards",href:"/invitation-list-rewards"}]}),[]),D=o.a.useMemo((function(){return[{title:"Home",href:"/"},{title:"Marketplace",href:"/marketplace"},{title:"Dashboard",href:"/dashboard"},{title:"Transactions",href:"/transactions"},{title:"Administration",href:"/admin",active:l},{title:"Invitation list & Rewards",href:"/invitation-list-rewards"}]}),[]);o.a.useEffect((function(){setTimeout((function(){window.$('[data-toggle="tooltip"]').tooltip()}),500)}),[p,g,O]),o.a.useEffect((function(){s&&s.address?setTimeout((function(){window.$(".loader").fadeOut(500,"swing",(function(){}))}),4e3):t.push("/")}),[]),o.a.useEffect((function(){s&&(C(),w(),y(),T(),_())}),[s]);var W=function(){var e=Object(r.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),n=window.$('input[name^="amountEgg"]').val(),E(n).then((function(){T()}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=function(){var e=Object(r.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),n=window.$('input[name^="amountChest"]').val(),k(n).then((function(){_()}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(r.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),A();case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=Object(r.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),P();case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsx)(u.a,{isReady:e,navUrls:H,dropdownUrls:D,title:"Armory",children:Object(v.jsxs)("div",{className:"furnace flights",children:[Object(v.jsxs)("section",{className:"content_box d-flex furnace-toolbar",children:[Object(v.jsxs)("div",{className:"left-toolbar",children:[Object(v.jsxs)("div",{className:"nft-item",role:"button",onClick:function(){return S(m.l.TYPE_NFT.CHARACTER)},children:[Object(v.jsx)("div",{className:"nft-image-item ".concat(R===m.l.TYPE_NFT.CHARACTER?"active":""),children:Object(v.jsx)("img",{src:"img/character.png"})}),Object(v.jsx)("span",{className:"label",children:(g||[]).length})]}),Object(v.jsxs)("div",{className:"nft-item",role:"button",onClick:function(){return S(m.l.TYPE_NFT.WEAPON)},children:[Object(v.jsx)("div",{className:"nft-image-item ".concat(R===m.l.TYPE_NFT.WEAPON?"active":""),children:Object(v.jsx)("img",{src:"img/weapon.png"})}),Object(v.jsx)("span",{className:"label",children:(O||[]).length})]}),Object(v.jsxs)("div",{className:"nft-item",role:"button",onClick:function(){return S(m.l.TYPE_NFT.EGG)},children:[Object(v.jsx)("div",{className:"nft-image-item ".concat(R===m.l.TYPE_NFT.EGG?"active":""),children:Object(v.jsx)("img",{src:"img/egg.png"})}),Object(v.jsx)("span",{className:"label",children:(p||[]).length})]}),Object(v.jsxs)("div",{className:"nft-item",role:"button",onClick:function(){return S(m.l.TYPE_NFT.CHEST)},children:[Object(v.jsx)("div",{className:"nft-image-item ".concat(R===m.l.TYPE_NFT.CHEST?"active":""),children:Object(v.jsx)("img",{src:"img/chest.png"})}),Object(v.jsx)("span",{className:"label",children:(x||[]).length})]})]}),Object(v.jsxs)("div",{className:"right-toolbar",children:[Object(v.jsxs)("div",{className:"nft-item",children:[Object(v.jsx)("input",{type:"number",name:"amountEgg",className:"content_box m-0",onBlur:function(e){Number(0|e.target.value)<1&&(e.target.value="1")},defaultValue:"1"}),Object(v.jsxs)("a",{href:"#",onClick:W,children:[Object(v.jsx)("img",{src:"img/egg.png",style:{width:40,height:40}}),Object(v.jsx)("span",{className:"label",children:Object(v.jsx)("i",{className:"fas fa-plus-circle"})})]})]}),Object(v.jsxs)("div",{className:"nft-item",children:[Object(v.jsx)("input",{type:"number",name:"amountChest",className:"content_box m-0",defaultValue:"1",onBlur:function(e){Number(0|e.target.value)<1&&(e.target.value="1")}}),Object(v.jsxs)("a",{href:"#",onClick:G,children:[Object(v.jsx)("img",{src:"img/chest.png",style:{width:40,height:40}}),Object(v.jsx)("span",{className:"label",children:Object(v.jsx)("i",{className:"fas fa-plus-circle"})})]})]})]})]}),Object(v.jsxs)("section",{className:"content_box content",children:[Object(v.jsxs)("div",{className:"nft-item w-100 ".concat(0!==R?"d-none":""),id:"Warriors",children:[Object(v.jsx)("p",{className:"title text-center",children:"Warriors"}),Object(v.jsxs)("div",{className:"row",children:[g&&g.length?g.map((function(e){var t=Object(a.a)({typeNft:m.l.TYPE_NFT.CHARACTER,allowAction:!0},e);return Object(v.jsx)(N,Object(a.a)({},t),"".concat(t.typeNft,"_").concat(t.id))})):null,!(g&&g.length)&&Object(v.jsx)("div",{className:"h-100 d-flex justify-content-center align-items-center  w-100",children:Object(v.jsx)("p",{children:g?Object(v.jsx)(h.a,{message:"Empty!",width:300}):Object(v.jsx)(f.a,{width:300})})})]})]}),Object(v.jsxs)("div",{className:"nft-item w-100 ".concat(1!==R?"d-none":""),id:"Weapons",children:[Object(v.jsx)("p",{className:"title text-center",children:"Weapons"}),Object(v.jsxs)("div",{className:"row",children:[O&&O.length?O.map((function(e){var t=Object(a.a)({typeNft:m.l.TYPE_NFT.WEAPON,allowAction:!0},e);return Object(v.jsx)(N,Object(a.a)({},t),"".concat(t.typeNft,"_").concat(t.id))})):null,!(O&&O.length)&&Object(v.jsx)("div",{className:"h-100 d-flex justify-content-center align-items-center w-100",children:Object(v.jsx)("p",{children:O?Object(v.jsx)(h.a,{message:"Empty!",width:300}):Object(v.jsx)(f.a,{width:300})})})]})]}),Object(v.jsxs)("div",{className:"nft-item w-100 ".concat(2!==R?"d-none":""),id:"Eggs",children:[Object(v.jsxs)("div",{className:"d-flex justify-content-center align-items-center w-100 position-relative",children:[Object(v.jsx)("p",{className:"title text-center",children:"Eggs"}),(p||[]).length>1&&Object(v.jsx)("div",{className:"title-right",children:Object(v.jsx)("a",{href:"#",onClick:I,children:Object(v.jsxs)("span",{children:[Object(v.jsx)("i",{className:"fas fa-check-double"}),"Open all (Maximum 10 eggs)"]})})})]}),Object(v.jsxs)("div",{className:"row",children:[p&&p.length?p.map((function(e){var t=Object(a.a)({typeNft:m.l.TYPE_NFT.EGG},e);return Object(v.jsx)(N,Object(a.a)({},t),"".concat(t.typeNft,"_").concat(t.id))})):null,!(p&&p.length)&&Object(v.jsx)("div",{className:"h-100 d-flex justify-content-center align-items-center w-100",children:Object(v.jsx)("p",{children:p?Object(v.jsx)(h.a,{message:"Empty!",width:300}):Object(v.jsx)(f.a,{width:300})})})]})]}),Object(v.jsxs)("div",{className:"nft-item w-100 ".concat(3!==R?"d-none":""),id:"Chests",children:[Object(v.jsxs)("div",{className:"d-flex justify-content-center align-items-center w-100 position-relative",children:[Object(v.jsx)("p",{className:"title text-center",children:"Chests"}),(x||[]).length>1&&Object(v.jsx)("div",{className:"title-right",children:Object(v.jsx)("a",{href:"#",onClick:M,children:Object(v.jsxs)("span",{children:[Object(v.jsx)("i",{className:"fas fa-check-double"}),"Open all (Maximum 10 chests)"]})})})]}),Object(v.jsxs)("div",{className:"row",children:[x&&x.length?x.map((function(e){var t=Object(a.a)({typeNft:m.l.TYPE_NFT.CHEST},e);return Object(v.jsx)(N,Object(a.a)({},t),"".concat(t.typeNft,"_").concat(t.id))})):null,!(x&&x.length)&&Object(v.jsx)("div",{className:"h-100 d-flex justify-content-center align-items-center w-100",children:Object(v.jsx)("p",{children:x?Object(v.jsx)(h.a,{message:"Empty!",width:300}):Object(v.jsx)(f.a,{width:300})})})]})]})]})]})})}}}]);