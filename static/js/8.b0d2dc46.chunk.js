(this["webpackJsonpbsc-dapp-example"]=this["webpackJsonpbsc-dapp-example"]||[]).push([[8],{1110:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(42),c=n(2),s=function(){var e=Object(a.f)();Object(c.useEffect)((function(){return e.listen((function(){document.querySelector("#root").scrollIntoView({behavior:"smooth"},500)}))}),[e])}},1111:function(e,t,n){"use strict";var a=n(15),c=n(2),s=n(8);t.a=function(e){var t=Object(c.useState)(!1),n=Object(a.a)(t,2),i=n[0],r=n[1];return Object(c.useEffect)((function(){var t=document.getElementsByTagName("head")[0],n=document.createElement("link");return n.rel="stylesheet",n.type="text/css",n.href="".concat(e,"?v=").concat(s.b.gitCommitHash),n.media="all",t.appendChild(n),r(!0),function(){document.head.removeChild(n)}}),[e]),i}},1112:function(e,t,n){},1113:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var a=n(2),c=n.n(a),s=n(8),i=n(105),r=n(36),o=n(0),l=n.n(o),d=n(7),b=n(13),u=n(42),j=n(264),h=n(3),m=function(){var e=Object(u.f)(),t=Object(u.g)(),n=Object(a.useContext)(j.a),s=n.account,i=n.disconnect,o=n.connect,m=t.pathname,f=function(){var t=Object(d.a)(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("/account"!==n){t.next=9;break}if(!s){t.next=5;break}b.a.show({content:"Do you want to disconnect the wallet?",closeOnAction:!0,actions:[[{key:"cancel",text:"Cancel",danger:!0},{key:"delete",text:"Disconnect",bold:!0}]],onAction:function(e,t){1===t&&i()}}),t.next=7;break;case 5:return t.next=7,o();case 7:t.next=10;break;case 9:"/#tokenomics"===n&&"/"===m?window.$('a[href^="#/#tokenomics"]')[0].click():e.push("".concat(n));case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),g=c.a.useMemo((function(){var e=[{key:"/",title:"Home",icon:Object(h.jsx)("i",{className:"fas fa-h-square"})},{key:"/marketplace",title:"Marketplace",icon:Object(h.jsx)("i",{className:"fas fa-store"})}];return s?e=[].concat(Object(r.a)(e),[{key:"/dashboard",title:"Dashboard",icon:Object(h.jsx)("i",{className:"fas fa-columns"})},{key:"/armory",title:"Armory",icon:Object(h.jsx)("i",{className:"fas fa-burn"})},{key:"/invitation-list-rewards",title:"Rewards",icon:Object(h.jsx)("i",{className:"fas fa-link"})}]):e.push({key:"/#tokenomics",title:"Pre-sale",icon:Object(h.jsx)("i",{className:"fas fa-wallet"})}),e.push({key:"/account",title:s?"Disconnect":"Connect Wallet",icon:s?Object(h.jsx)("i",{className:"fas fa-sign-out-alt"}):Object(h.jsx)("i",{className:"fas fa-sign-in-alt"})}),e}),[s]);return Object(h.jsx)(b.c,{activeKey:m,onChange:function(e){return f(e)},children:g.map((function(e){return Object(h.jsx)(b.c.Item,{icon:e.icon,title:e.title},e.key)}))})},f=(n(1112),function(){var e=function(){new window.google.translate.TranslateElement({pageLanguage:"en"},"google_translate_element")};return c.a.useEffect((function(){var t=document.createElement("script");t.setAttribute("src","//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"),document.body.appendChild(t),window.googleTranslateElementInit=e,setTimeout((function(){window.$("#google_translate_element .goog-te-gadget").contents().filter((function(){return"#text"===this.nodeName})).remove()}),1e3)}),[]),Object(h.jsxs)("div",{className:"d-flex justify-content-center align-items-center mt-3",children:[Object(h.jsx)("p",{children:Object(h.jsx)("b",{children:"Language"})}),Object(h.jsx)("div",{id:"google_translate_element"})]})});function g(){return Object(h.jsxs)("div",{"data-v-c18f8362":!0,"data-v-11bc6412":!0,className:"footer-page",style:{textAlign:"center",marginBottom:i.isMobile?"116px":0},children:[Object(h.jsx)("img",{"data-v-c18f8362":!0,style:{width:180},src:"img/logo.svg"}),Object(h.jsxs)("div",{"data-v-c18f8362":!0,className:"email",children:["Contact us: ",Object(h.jsxs)("a",{href:"mailto: service@".concat(s.g.name.replaceAll(" ","").toLocaleLowerCase(),"s.com"),className:"contact",children:["service@",s.g.name.replaceAll(" ","").toLocaleLowerCase(),"s.com"]})]}),Object(h.jsxs)("div",{className:"social",children:[Object(h.jsx)("a",{href:s.b.socials.telegram,children:"Telegram"}),Object(h.jsx)("a",{href:s.b.socials.twitter,children:"Twitter"}),Object(h.jsx)("a",{href:s.b.socials.reddit,children:"Reddit"}),Object(h.jsx)("a",{href:s.b.socials.facebook,children:"Facebook"})]}),Object(h.jsxs)("div",{"data-v-c18f8362":!0,className:"copyright",children:["Copyright \xa9 ",(new Date).getFullYear()," ",s.g.name,". All rights reserved."]}),Object(h.jsx)("div",{children:Object(h.jsx)(f,{})}),i.isMobile&&Object(h.jsx)("div",{style:{flex:"0 1 0%",position:"fixed",bottom:"0px",width:"100%",background:"#232125",zIndex:1e3},children:Object(h.jsx)(m,{})})]})}},1114:function(e,t,n){"use strict";n.d(t,"a",(function(){return C}));var a=n(0),c=n.n(a),s=n(7),i=n(2),r=n.n(i),o=n(264),l=n(265),d=(n(106),function(){return(d=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var c in t=arguments[n])Object.prototype.hasOwnProperty.call(t,c)&&(e[c]=t[c]);return e}).apply(this,arguments)});var b="",u=null,j=null,h=null;function m(){b="",null!==u&&u.disconnect(),null!==j&&(window.clearTimeout(j),j=null)}function f(e){return["BUTTON","INPUT","SELECT","TEXTAREA"].includes(e.tagName)&&!e.hasAttribute("disabled")||["A","AREA"].includes(e.tagName)&&e.hasAttribute("href")}function g(){var e=null;if("#"===b)e=document.body;else{var t=b.replace("#","");null===(e=document.getElementById(t))&&"#top"===b&&(e=document.body)}if(null!==e){h(e);var n=e.getAttribute("tabindex");return null!==n||f(e)||e.setAttribute("tabindex",-1),e.focus({preventScroll:!0}),null!==n||f(e)||(e.blur(),e.removeAttribute("tabindex")),m(),!0}return!1}function p(e){return r.a.forwardRef((function(t,n){var a="";"string"===typeof t.to&&t.to.includes("#")?a="#"+t.to.split("#").slice(1).join("#"):"object"===typeof t.to&&"string"===typeof t.to.hash&&(a=t.to.hash);var c={};e===l.c&&(c.isActive=function(e,t){return e&&e.isExact&&t.hash===a});var s=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(a=Object.getOwnPropertySymbols(e);c<a.length;c++)t.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(e,a[c])&&(n[a[c]]=e[a[c]])}return n}(t,["scroll","smooth","timeout","elementId"]);return r.a.createElement(e,d({},c,s,{onClick:function(e){var n;m(),b=t.elementId?"#"+t.elementId:a,t.onClick&&t.onClick(e),""===b||e.defaultPrevented||0!==e.button||t.target&&"_self"!==t.target||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||(h=t.scroll||function(e){return t.smooth?e.scrollIntoView({behavior:"smooth"}):e.scrollIntoView()},n=t.timeout,window.setTimeout((function(){!1===g()&&(null===u&&(u=new MutationObserver(g)),u.observe(document,{attributes:!0,childList:!0,subtree:!0}),j=window.setTimeout((function(){m()}),n||1e4))}),0))},ref:n}),t.children)}))}var x=p(l.b),v=(p(l.c),n(8)),O=n(31),w=n(266),y=n.n(w),N=n(105),k=n(267),_=n(3);function C(e){var t=e.dropdownUrls,n=e.navUrls,a=r.a.useContext(o.a),i=a.account,d=a.isReady,b=a.balance,u=a.statusSell,j=a.sellToken,h=a.disconnect,m=a.connect;return Object(k.a)((function(){document.querySelectorAll("nav .nav-title a").forEach((function(e){"/".concat(e.getAttribute("href"))==="".concat(window.location.pathname).concat(window.location.hash)&&e.click()}))}),500),Object(_.jsx)("nav",{className:"navbar-dark bg-dark navbar-expand-sm",children:Object(_.jsx)("div",{"data-v-7462027c":!0,"data-v-11bc6412":!0,className:"nav-page",children:Object(_.jsxs)("div",{"data-v-7462027c":!0,className:"nav-fixed content_box m-0",children:[Object(_.jsx)("a",{"data-v-7462027c":!0,className:"nav-logo",href:"/",children:Object(_.jsx)("img",{"data-v-7462027c":!0,src:"img/logo.svg"})}),Object(_.jsx)("div",{"data-v-7462027c":!0,className:"nav-title",children:n.filter((function(e){return e.active||void 0===e.active})).map((function(e){var t=e.title,n=e.href;return Object(_.jsx)("div",{"data-v-7462027c":!0,className:"nav-title-a",style:{padding:N.isMobile?"8px":"10px"},children:Object(_.jsx)(x,{"data-v-7462027c":!0,smooth:!0,to:n,style:{maxWidth:"calc((100vw - 10px)/(".concat(window.document.querySelectorAll(".nav-title-a").length-(N.isMobile?0:1),"))"),overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:t})},n)}))}),Object(_.jsx)("div",{"data-v-7462027c":!0,className:"nav-lan",children:Object(_.jsx)("div",{"data-v-7462027c":!0,className:"header-login",children:i&&i.address?Object(_.jsxs)("div",{className:N.isMobile?"d-none":"",children:[Object(_.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbar-list-4","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(_.jsx)("span",{className:"navbar-toggler-icon"})}),Object(_.jsx)("div",{className:"collapse navbar-collapse",id:"navbar-list-4",children:Object(_.jsx)("ul",{className:"navbar-nav",children:Object(_.jsxs)("li",{className:"nav-item dropdown",children:[Object(_.jsx)("a",{className:"nav-link dropdown-toggle",href:"#",id:"navbarDropdownMenuLink",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:Object(_.jsx)("img",{src:new y.a(50,i.address).getImage(),width:50,height:50,className:"rounded-circle"})}),Object(_.jsxs)("div",{className:"dropdown-menu dropdown-menu-right text-center content_box","aria-labelledby":"navbarDropdownMenuLink",children:[Object(_.jsxs)("a",{className:"dropdown-item",disabled:"disabled",children:[Object(O.c)(i.address)," (",Object(O.a)(b,!1)," ",v.g.symbol,")"]}),t.filter((function(e){return e.active||void 0===e.active})).map((function(e){var t=e.title,n=e.href;return Object(_.jsx)(l.b,{to:n,className:"dropdown-item",children:t},n)})),u&&Object(_.jsx)("a",{className:"dropdown-item",href:"#",onClick:function(e){e.preventDefault();var t=Object(O.m)(function(){var e=Object(s.a)(c.a.mark((function e(n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:j(n).then((function(){t.close()}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:"Withdraw"}),Object(_.jsx)("a",{className:"dropdown-item",href:"#",onClick:function(e){e.preventDefault(),h()},children:"Disconnect"})]})]})})})]}):d&&Object(_.jsx)("a",{href:"#",className:N.isMobile?"invisible":"visible",onClick:function(e){e.preventDefault(),m()},children:Object(_.jsx)("div",{className:"content_button content_button_yellow m-0",style:{padding:"0.3em 1em 0.5em 1em"},children:Object(_.jsx)("p",{style:{fontSize:"1.3em"},children:N.isMobile?"":"Connect Wallet"})})})})})]})})})}},1115:function(e,t,n){"use strict";n(2),n(1118);var a=n(3);t.a=function(e){var t=e.message,n=e.width,c=void 0===n?500:n;return Object(a.jsxs)("div",{className:"d-flex justify-content-center align-items-center flex-column",style:{position:"relative",width:c,minHeight:c},children:[Object(a.jsx)("img",{src:"img/empty.gif",style:{width:c},alt:""}),Object(a.jsx)("p",{style:{position:"absolute",bottom:c/15,fontSize:c/15},children:t})]})}},1116:function(e,t,n){"use strict";n(2),n(1119);var a=n(3);t.a=function(e){var t=e.message,n=void 0===t?"Loading...":t;e.width;return Object(a.jsx)("div",{className:"d-flex justify-content-center align-items-center flex-column",style:{position:"relative",minHeight:400},children:Object(a.jsx)("p",{style:{fontSize:22},children:n})})}},1117:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var a=n(0),c=n.n(a),s=n(7),i=n(2),r=n.n(i),o=n(8),l=n(1114),d=n(31),b=n(105),u=n(1113),j=n(264),h=n(266),m=n.n(h),f=n(3);function g(e){var t=e.children,n=e.isReady,a=e.navUrls,i=e.dropdownUrls,h=e.showToolBar,g=void 0===h||h,p=e.title,x=r.a.useContext(j.a),v=x.account,O=x.balance,w=x.balanceBNB,y=x.statusSale,N=x.convertNumberToPrice,k=x.buyToken,_=x.totalSale,C=x.getTotalSale;return Object(f.jsx)("div",{"data-v-1398d974":!0,id:"app",className:"en application",children:Object(f.jsxs)("div",{"data-v-11bc6412":!0,"data-v-1398d974":!0,id:"homepage",className:"index-page",children:[n&&Object(f.jsx)(l.a,{navUrls:a,dropdownUrls:i}),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("img",{id:"fg3",className:"bg",src:"img/03.png"}),Object(f.jsx)("img",{id:"fg2",className:"bg",src:"img/02.png",style:{top:0}}),Object(f.jsx)("img",{id:"fg1",className:"bg",src:"img/01.png",style:{top:0}})]}),Object(f.jsx)("div",{style:{margin:"120px 0 40px 0"},children:p&&Object(f.jsx)("h2",{className:"gradient-heading",children:p})}),Object(f.jsx)("main",{style:{minHeight:"100vh",marginBottom:50},children:g?Object(f.jsx)(f.Fragment,{children:n&&v&&Object(f.jsx)("div",{className:"container-xl container-md-fluid container-ms-fluid",children:Object(f.jsxs)("section",{className:"dashboard",children:[Object(f.jsxs)("header",{className:"booking-bar content_box m-0",children:[Object(f.jsxs)("div",{className:"booking-bar__info",children:[Object(f.jsx)("h2",{className:"booking-bar__heading",children:Object(f.jsxs)("p",{className:"styled-price",children:[o.g.name," (",o.g.symbol,")"]})}),Object(f.jsx)("p",{className:"booking-bar__sub-heading",children:Object(f.jsxs)("span",{className:"top-flight-card__heading",children:[Object(d.c)(o.g.address,b.isMobile?7:15),Object(f.jsxs)("a",{href:"#",onClick:function(e){e.preventDefault(),Object(d.e)(o.g.address)},children:[" ",Object(f.jsx)("i",{className:"fas fa-copy",style:{fontSize:12}})]})]})})]}),Object(f.jsxs)("div",{className:"booking-bar__inputs",children:[Object(f.jsxs)("div",{className:"icon-input",children:[Object(f.jsxs)("p",{className:"top-flight-card__price styled-price",children:[N(O,!1),y&&"number"===typeof _&&Object(f.jsxs)("a",{href:"#",onClick:function(e){e.preventDefault();var t=Object(d.j)(function(){var e=Object(s.a)(c.a.mark((function e(n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:k(n).then((function(){C(),t.close()}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_)},children:[" ",Object(f.jsx)("i",{className:"fas fa-plus-circle",style:{fontSize:"70%"}})]})]}),Object(f.jsx)("div",{className:"top-flight-card__info",children:Object(f.jsx)("p",{className:"top-flight-card__heading",children:Object(f.jsx)("img",{src:"img/logo-token.svg",style:{width:28,height:28,borderRadius:14,marginRight:5}})})})]}),Object(f.jsxs)("div",{className:"icon-input",children:[Object(f.jsx)("p",{className:"top-flight-card__price styled-price",children:N(w)}),Object(f.jsx)("div",{className:"top-flight-card__info",children:Object(f.jsx)("p",{className:"top-flight-card__heading",children:Object(f.jsx)("img",{src:"img/bnb.svg",style:{width:28,height:28,borderRadius:14,marginRight:5}})})})]})]})]}),t,Object(f.jsxs)("aside",{className:"user-card content_box m-0",children:[Object(f.jsx)("figure",{className:"user-card__avatar",children:Object(f.jsx)("img",{src:new m.a(40,v.address).getImage(),width:"40",height:"40",className:"rounded-circle"})}),Object(f.jsxs)("div",{className:"p user-card__heading",children:["Hello, ",Object(f.jsxs)("span",{className:"user-card__name",children:[Object(d.c)(v.address,4),Object(f.jsxs)("a",{href:"#",onClick:function(e){e.preventDefault(),Object(d.e)(v.address)},children:[" ",Object(f.jsx)("i",{className:"fas fa-copy",style:{fontSize:12}})]})]})]})]})]})})}):t})]}),Object(f.jsx)(u.a,{})]})})}},1118:function(e,t,n){},1119:function(e,t,n){},1132:function(e,t,n){},1137:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return v}));var a=n(0),c=n.n(a),s=n(7),i=n(15),r=n(2),o=n.n(r),l=n(1111),d=n(264),b=n(31),u=n(13),j=(n(1132),n(42)),h=n(1117),m=n(1115),f=n(1116),g=n(105),p=n(1110),x=n(3);function v(){var e=Object(l.a)("css/dashboard.css"),t=Object(j.f)();Object(p.a)();var n=o.a.useContext(d.a),a=n.account,r=n.getTransactions,v=n.isAdmin,O=n.getBscUrl,w=o.a.useState(),y=Object(i.a)(w,2),N=y[0],k=y[1],_=o.a.useState(0),C=Object(i.a)(_,2),T=C[0],E=C[1],A=o.a.useMemo((function(){return[{title:"Home",href:"/"},{title:"Marketplace",href:"/marketplace"},{title:"Dashboard",href:"/dashboard"},{title:"Invitation list & Rewards",href:"/invitation-list-rewards"}]}),[]),S=o.a.useMemo((function(){return[{title:"Home",href:"/"},{title:"Marketplace",href:"/marketplace"},{title:"Dashboard",href:"/dashboard"},{title:"Armory",href:"/armory"},{title:"Administration",href:"/admin",active:v},{title:"Invitation list & Rewards",href:"/invitation-list-rewards"}]}),[]);o.a.useEffect((function(){a&&a.address?(M(),setTimeout((function(){window.$(".loader").fadeOut(500,"swing",(function(){}))}),4e3)):t.push("/")}),[]),o.a.useEffect((function(){setTimeout((function(){window.$('[data-toggle="tooltip"]').tooltip()}),500)}),[N]);var M=function(){var e=Object(s.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u.d.show({icon:"loading",content:"Loading...",maskClickable:!1,duration:0}),e.next=3,r(T,20);case 3:(t=e.sent)&&t.length?(k((N||[]).concat(t)),E(20===t.length?T+1:-1)):E(-1),u.d.clear();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(x.jsx)(h.a,{isReady:e,navUrls:A,dropdownUrls:S,title:"Transactions",children:Object(x.jsxs)("section",{className:"flights content_box",style:{minHeight:785},children:[Object(x.jsxs)("table",{className:"table table-borderless table-hover",style:{fontSize:g.isMobile?"2.2rem":"1.7rem"},children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{scope:"col",children:"#"}),Object(x.jsx)("th",{scope:"col",children:"Txn Hash"}),Object(x.jsx)("th",{scope:"col",children:"From"}),Object(x.jsx)("th",{scope:"col",children:"To"}),Object(x.jsx)("th",{scope:"col",children:"Value"})]})}),Object(x.jsx)("tbody",{children:N&&N.length?N.map((function(e,t){return Object(x.jsxs)("tr",{role:"button",onClick:function(){window.open("".concat(O(),"/tx/").concat(e.hash))},children:[Object(x.jsx)("th",{scope:"row",className:"1"===e.isError?"bg-danger":"",children:t+1}),Object(x.jsx)("td",{"data-toggle":"tooltip","data-placement":"bottom",title:e.hash,className:"".concat("1"===e.isError?"bg-danger":""," text-info"),children:Object(b.c)(e.hash,7)}),Object(x.jsx)("td",{"data-toggle":"tooltip","data-placement":"bottom",title:e.from,className:"1"===e.isError?"bg-danger":"",children:Object(b.c)(e.from,7)}),Object(x.jsx)("td",{"data-toggle":"tooltip","data-placement":"bottom",title:e.to,className:"1"===e.isError?"bg-danger":"",children:Object(b.c)(e.to,7)}),Object(x.jsxs)("td",{className:"".concat("1"===e.isError?"bg-danger":""," text-success"),children:[e.value/1e18," BNB"]})]},t)})):null})]}),T>-1&&Object(x.jsx)("div",{className:"load-more",children:Object(x.jsx)("a",{href:"#",onClick:function(e){e.preventDefault(),M()},children:"Load more"})}),!(N&&N.length)&&Object(x.jsx)("div",{className:"h-100 d-flex justify-content-center align-items-center",children:Object(x.jsx)("p",{children:N?Object(x.jsx)(m.a,{message:"Empty!",width:300}):Object(x.jsx)(f.a,{width:300})})})]})})}}}]);