(this["webpackJsonpbsc-dapp-example"]=this["webpackJsonpbsc-dapp-example"]||[]).push([[7],{1110:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(42),c=n(2),s=function(){var e=Object(a.f)();Object(c.useEffect)((function(){return e.listen((function(){document.querySelector("#root").scrollIntoView({behavior:"smooth"},500)}))}),[e])}},1111:function(e,t,n){"use strict";var a=n(15),c=n(2),s=n(8);t.a=function(e){var t=Object(c.useState)(!1),n=Object(a.a)(t,2),i=n[0],r=n[1];return Object(c.useEffect)((function(){var t=document.getElementsByTagName("head")[0],n=document.createElement("link");return n.rel="stylesheet",n.type="text/css",n.href="".concat(e,"?v=").concat(s.b.gitCommitHash),n.media="all",t.appendChild(n),r(!0),function(){document.head.removeChild(n)}}),[e]),i}},1112:function(e,t,n){},1113:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(2),c=n.n(a),s=n(8),i=n(105),r=n(36),o=n(0),l=n.n(o),d=n(7),b=n(13),u=n(42),j=n(264),m=n(3),h=function(){var e=Object(u.f)(),t=Object(u.g)(),n=Object(a.useContext)(j.a),s=n.account,i=n.disconnect,o=n.connect,h=t.pathname,f=function(){var t=Object(d.a)(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("/account"!==n){t.next=9;break}if(!s){t.next=5;break}b.a.show({content:"Do you want to disconnect the wallet?",closeOnAction:!0,actions:[[{key:"cancel",text:"Cancel",danger:!0},{key:"delete",text:"Disconnect",bold:!0}]],onAction:function(e,t){1===t&&i()}}),t.next=7;break;case 5:return t.next=7,o();case 7:t.next=10;break;case 9:"/#tokenomics"===n&&"/"===h?window.$('a[href^="#/#tokenomics"]')[0].click():e.push("".concat(n));case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=c.a.useMemo((function(){var e=[{key:"/",title:"Home",icon:Object(m.jsx)("i",{className:"fas fa-h-square"})},{key:"/marketplace",title:"Marketplace",icon:Object(m.jsx)("i",{className:"fas fa-store"})}];return s?e=[].concat(Object(r.a)(e),[{key:"/dashboard",title:"Dashboard",icon:Object(m.jsx)("i",{className:"fas fa-columns"})},{key:"/armory",title:"Armory",icon:Object(m.jsx)("i",{className:"fas fa-burn"})},{key:"/invitation-list-rewards",title:"Rewards",icon:Object(m.jsx)("i",{className:"fas fa-link"})}]):e.push({key:"/#tokenomics",title:"Pre-sale",icon:Object(m.jsx)("i",{className:"fas fa-wallet"})}),e.push({key:"/account",title:s?"Disconnect":"Connect Wallet",icon:s?Object(m.jsx)("i",{className:"fas fa-sign-out-alt"}):Object(m.jsx)("i",{className:"fas fa-sign-in-alt"})}),e}),[s]);return Object(m.jsx)(b.c,{activeKey:h,onChange:function(e){return f(e)},children:p.map((function(e){return Object(m.jsx)(b.c.Item,{icon:e.icon,title:e.title},e.key)}))})},f=(n(1112),function(){var e=function(){new window.google.translate.TranslateElement({pageLanguage:"en"},"google_translate_element")};return c.a.useEffect((function(){var t=document.createElement("script");t.setAttribute("src","//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"),document.body.appendChild(t),window.googleTranslateElementInit=e,setTimeout((function(){window.$("#google_translate_element .goog-te-gadget").contents().filter((function(){return"#text"===this.nodeName})).remove()}),1e3)}),[]),Object(m.jsxs)("div",{className:"d-flex justify-content-center align-items-center mt-3",children:[Object(m.jsx)("p",{children:Object(m.jsx)("b",{children:"Language"})}),Object(m.jsx)("div",{id:"google_translate_element"})]})});function p(){return Object(m.jsxs)("div",{"data-v-c18f8362":!0,"data-v-11bc6412":!0,className:"footer-page",style:{textAlign:"center",marginBottom:i.isMobile?"116px":0},children:[Object(m.jsx)("img",{"data-v-c18f8362":!0,style:{width:180},src:"img/logo.svg"}),Object(m.jsxs)("div",{"data-v-c18f8362":!0,className:"email",children:["Support Email: ",Object(m.jsxs)("a",{href:"mailto: support@".concat(s.g.name.replaceAll(" ","").toLocaleLowerCase(),".com"),className:"contact",children:["support@",s.g.name.replaceAll(" ","").toLocaleLowerCase(),".com"]})," ",Object(m.jsx)("br",{}),"Partnership & Inquiry Email: ",Object(m.jsxs)("a",{href:"mailto: hello@".concat(s.g.name.replaceAll(" ","").toLocaleLowerCase(),".com"),className:"contact",children:["hello@",s.g.name.replaceAll(" ","").toLocaleLowerCase(),".com"]})]}),Object(m.jsxs)("div",{className:"social",children:[Object(m.jsx)("a",{target:"_blank",href:s.b.socials.telegram,children:"Telegram"}),Object(m.jsx)("a",{target:"_blank",href:s.b.socials.twitter,children:"Twitter"}),Object(m.jsx)("a",{target:"_blank",href:s.b.socials.reddit,children:"Reddit"}),Object(m.jsx)("a",{target:"_blank",href:s.b.socials.facebook,children:"Facebook"})]}),Object(m.jsxs)("div",{"data-v-c18f8362":!0,className:"copyright",children:["Copyright \xa9 ",(new Date).getFullYear()," ",s.g.name,". All rights reserved."]}),Object(m.jsx)("div",{children:Object(m.jsx)(f,{})}),i.isMobile&&Object(m.jsx)("div",{style:{flex:"0 1 0%",position:"fixed",bottom:"0px",width:"100%",background:"#232125",zIndex:1e3},children:Object(m.jsx)(h,{})})]})}},1114:function(e,t,n){"use strict";n.d(t,"a",(function(){return T}));var a=n(0),c=n.n(a),s=n(7),i=n(2),r=n.n(i),o=n(264),l=n(42),d=n(265),b=(n(106),function(){return(b=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var c in t=arguments[n])Object.prototype.hasOwnProperty.call(t,c)&&(e[c]=t[c]);return e}).apply(this,arguments)});var u="",j=null,m=null,h=null;function f(){u="",null!==j&&j.disconnect(),null!==m&&(window.clearTimeout(m),m=null)}function p(e){return["BUTTON","INPUT","SELECT","TEXTAREA"].includes(e.tagName)&&!e.hasAttribute("disabled")||["A","AREA"].includes(e.tagName)&&e.hasAttribute("href")}function g(){var e=null;if("#"===u)e=document.body;else{var t=u.replace("#","");null===(e=document.getElementById(t))&&"#top"===u&&(e=document.body)}if(null!==e){h(e);var n=e.getAttribute("tabindex");return null!==n||p(e)||e.setAttribute("tabindex",-1),e.focus({preventScroll:!0}),null!==n||p(e)||(e.blur(),e.removeAttribute("tabindex")),f(),!0}return!1}function x(e){return r.a.forwardRef((function(t,n){var a="";"string"===typeof t.to&&t.to.includes("#")?a="#"+t.to.split("#").slice(1).join("#"):"object"===typeof t.to&&"string"===typeof t.to.hash&&(a=t.to.hash);var c={};e===d.c&&(c.isActive=function(e,t){return e&&e.isExact&&t.hash===a});var s=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(a=Object.getOwnPropertySymbols(e);c<a.length;c++)t.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(e,a[c])&&(n[a[c]]=e[a[c]])}return n}(t,["scroll","smooth","timeout","elementId"]);return r.a.createElement(e,b({},c,s,{onClick:function(e){var n;f(),u=t.elementId?"#"+t.elementId:a,t.onClick&&t.onClick(e),""===u||e.defaultPrevented||0!==e.button||t.target&&"_self"!==t.target||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||(h=t.scroll||function(e){return t.smooth?e.scrollIntoView({behavior:"smooth"}):e.scrollIntoView()},n=t.timeout,window.setTimeout((function(){!1===g()&&(null===j&&(j=new MutationObserver(g)),j.observe(document,{attributes:!0,childList:!0,subtree:!0}),m=window.setTimeout((function(){f()}),n||1e4))}),0))},ref:n}),t.children)}))}var v=x(d.b),O=(x(d.c),n(8)),w=n(31),y=n(266),N=n.n(y),k=n(105),_=n(267),C=n(3);function T(e){var t=e.dropdownUrls,n=e.navUrls,a=Object(l.f)(),i=r.a.useContext(o.a),b=i.account,u=i.isReady,j=i.balance,m=i.statusSell,h=i.sellToken,f=i.disconnect,p=i.connect;return Object(_.a)((function(){document.querySelectorAll("nav .nav-title a").forEach((function(e){"/".concat(e.getAttribute("href"))==="".concat(window.location.pathname).concat(window.location.hash)&&e.click()}))}),500),Object(C.jsx)("nav",{className:"navbar-dark bg-dark navbar-expand-sm",children:Object(C.jsx)("div",{"data-v-7462027c":!0,"data-v-11bc6412":!0,className:"nav-page",children:Object(C.jsxs)("div",{"data-v-7462027c":!0,className:"nav-fixed content_box m-0",children:[Object(C.jsx)("a",{"data-v-7462027c":!0,className:"nav-logo",href:"/",children:Object(C.jsx)("img",{"data-v-7462027c":!0,src:"img/logo.svg"})}),Object(C.jsx)("div",{"data-v-7462027c":!0,className:"nav-title",children:n.filter((function(e){return e.active||void 0===e.active})).map((function(e){var t=e.title,n=e.href;return Object(C.jsx)("div",{"data-v-7462027c":!0,className:"nav-title-a",style:{padding:k.isMobile?"8px":"10px"},children:Object(C.jsx)(v,{"data-v-7462027c":!0,smooth:!0,to:n,style:{maxWidth:"calc((100vw - 10px)/(".concat(window.document.querySelectorAll(".nav-title-a").length-(k.isMobile?0:1),"))"),overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:t})},n)}))}),Object(C.jsx)("div",{"data-v-7462027c":!0,className:"nav-lan",children:Object(C.jsx)("div",{"data-v-7462027c":!0,className:"header-login",children:b&&b.address?Object(C.jsxs)("div",{className:k.isMobile?"d-none":"",children:[Object(C.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbar-list-4","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(C.jsx)("span",{className:"navbar-toggler-icon"})}),Object(C.jsx)("div",{className:"collapse navbar-collapse",id:"navbar-list-4",children:Object(C.jsx)("ul",{className:"navbar-nav",children:Object(C.jsxs)("li",{className:"nav-item dropdown",children:[Object(C.jsx)("a",{className:"nav-link dropdown-toggle",href:"#",id:"navbarDropdownMenuLink",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:Object(C.jsx)("img",{src:new N.a(50,b.address).getImage(),width:50,height:50,className:"rounded-circle"})}),Object(C.jsxs)("div",{className:"dropdown-menu dropdown-menu-right text-center content_box","aria-labelledby":"navbarDropdownMenuLink",children:[Object(C.jsxs)("a",{className:"dropdown-item",disabled:"disabled",children:[Object(w.c)(b.address)," (",Object(w.a)(j,!1)," ",O.g.symbol,")"]}),t.filter((function(e){return e.active||void 0===e.active})).map((function(e){var t=e.title,n=e.href;return Object(C.jsx)(d.b,{to:n,className:"dropdown-item",children:t},n)})),m&&Object(C.jsx)("a",{className:"dropdown-item",href:"#",onClick:function(e){e.preventDefault();var t=Object(w.m)(function(){var e=Object(s.a)(c.a.mark((function e(n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:h(n).then((function(){t.close()}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:"Withdraw"}),Object(C.jsx)("a",{className:"dropdown-item",href:"#",onClick:function(e){e.preventDefault(),f()},children:"Disconnect"})]})]})})})]}):u&&Object(C.jsx)("a",{href:"#",className:k.isMobile?"invisible":"visible",onClick:function(e){e.preventDefault(),p().then((function(){a.push("/dashboard")}))},children:Object(C.jsx)("div",{className:"content_button content_button_yellow m-0",style:{padding:"0.3em 1em 0.5em 1em"},children:Object(C.jsx)("p",{style:{fontSize:"1.3em"},children:k.isMobile?"":"Connect Wallet"})})})})})]})})})}},1115:function(e,t,n){"use strict";n(2),n(1118);var a=n(3);t.a=function(e){var t=e.message,n=e.width,c=void 0===n?500:n;return Object(a.jsxs)("div",{className:"d-flex justify-content-center align-items-center flex-column",style:{position:"relative",width:c,minHeight:c},children:[Object(a.jsx)("img",{src:"img/empty.gif",style:{width:c},alt:""}),Object(a.jsx)("p",{style:{position:"absolute",bottom:c/15,fontSize:c/15},children:t})]})}},1116:function(e,t,n){"use strict";n(2),n(1119);var a=n(3);t.a=function(e){var t=e.message,n=void 0===t?"Loading...":t;e.width;return Object(a.jsx)("div",{className:"d-flex justify-content-center align-items-center flex-column",style:{position:"relative",minHeight:400},children:Object(a.jsx)("p",{style:{fontSize:22},children:n})})}},1117:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(0),c=n.n(a),s=n(7),i=n(2),r=n.n(i),o=n(8),l=n(1114),d=n(31),b=n(105),u=n(1113),j=n(264),m=n(266),h=n.n(m),f=n(3);function p(e){var t=e.children,n=e.isReady,a=e.navUrls,i=e.dropdownUrls,m=e.showToolBar,p=void 0===m||m,g=e.title,x=r.a.useContext(j.a),v=x.account,O=x.balance,w=x.balanceBNB,y=x.statusSale,N=x.convertNumberToPrice,k=x.buyToken,_=x.totalSale,C=x.getTotalSale;return Object(f.jsx)("div",{"data-v-1398d974":!0,id:"app",className:"en application",children:Object(f.jsxs)("div",{"data-v-11bc6412":!0,"data-v-1398d974":!0,id:"homepage",className:"index-page",children:[n&&Object(f.jsx)(l.a,{navUrls:a,dropdownUrls:i}),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("img",{id:"fg3",className:"bg",src:"img/03.png"}),Object(f.jsx)("img",{id:"fg2",className:"bg",src:"img/02.png",style:{top:0}}),Object(f.jsx)("img",{id:"fg1",className:"bg",src:"img/01.png",style:{top:0}})]}),Object(f.jsx)("div",{style:{margin:"120px 0 40px 0"},children:g&&Object(f.jsx)("h2",{className:"gradient-heading",children:g})}),Object(f.jsx)("main",{style:{minHeight:"100vh",marginBottom:50},children:p?Object(f.jsx)(f.Fragment,{children:n&&v&&Object(f.jsx)("div",{className:"container-xl container-md-fluid container-ms-fluid",children:Object(f.jsxs)("section",{className:"dashboard",children:[Object(f.jsxs)("header",{className:"booking-bar content_box m-0",children:[Object(f.jsxs)("div",{className:"booking-bar__info",children:[Object(f.jsx)("h2",{className:"booking-bar__heading",children:Object(f.jsxs)("p",{className:"styled-price",children:[o.g.name," (",o.g.symbol,")"]})}),Object(f.jsx)("p",{className:"booking-bar__sub-heading",children:Object(f.jsxs)("span",{className:"top-flight-card__heading",children:[Object(d.c)(o.g.address,b.isMobile?7:15),Object(f.jsxs)("a",{href:"#",onClick:function(e){e.preventDefault(),Object(d.e)(o.g.address)},children:[" ",Object(f.jsx)("i",{className:"fas fa-copy",style:{fontSize:12}})]})]})})]}),Object(f.jsxs)("div",{className:"booking-bar__inputs",children:[Object(f.jsxs)("div",{className:"icon-input",children:[Object(f.jsxs)("p",{className:"top-flight-card__price styled-price",children:[N(O,!1),y&&"number"===typeof _&&Object(f.jsxs)("a",{href:"#",onClick:function(e){e.preventDefault();var t=Object(d.j)(function(){var e=Object(s.a)(c.a.mark((function e(n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:k(n).then((function(){C(),t.close()}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_)},children:[" ",Object(f.jsx)("i",{className:"fas fa-plus-circle",style:{fontSize:"70%"}})]})]}),Object(f.jsx)("div",{className:"top-flight-card__info",children:Object(f.jsx)("p",{className:"top-flight-card__heading",children:Object(f.jsx)("img",{src:"img/logo-token.svg",style:{width:28,height:28,borderRadius:14,marginRight:5}})})})]}),Object(f.jsxs)("div",{className:"icon-input",children:[Object(f.jsx)("p",{className:"top-flight-card__price styled-price",children:N(w)}),Object(f.jsx)("div",{className:"top-flight-card__info",children:Object(f.jsx)("p",{className:"top-flight-card__heading",children:Object(f.jsx)("img",{src:"img/bnb.svg",style:{width:28,height:28,borderRadius:14,marginRight:5}})})})]})]})]}),t,Object(f.jsxs)("aside",{className:"user-card content_box m-0",children:[Object(f.jsx)("figure",{className:"user-card__avatar",children:Object(f.jsx)("img",{src:new h.a(40,v.address).getImage(),width:"40",height:"40",className:"rounded-circle"})}),Object(f.jsxs)("div",{className:"p user-card__heading",children:["Hello, ",Object(f.jsxs)("span",{className:"user-card__name",children:[Object(d.c)(v.address,4),Object(f.jsxs)("a",{href:"#",onClick:function(e){e.preventDefault(),Object(d.e)(v.address)},children:[" ",Object(f.jsx)("i",{className:"fas fa-copy",style:{fontSize:12}})]})]})]})]})]})})}):t})]}),Object(f.jsx)(u.a,{})]})})}},1118:function(e,t,n){},1119:function(e,t,n){},1135:function(e,t,n){},1140:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return O}));var a=n(0),c=n.n(a),s=n(7),i=n(15),r=n(2),o=n.n(r),l=n(1111),d=n(264),b=n(31),u=n(13),j=n(8),m=(n(1135),n(42)),h=n(1117),f=n(1115),p=n(1116),g=n(105),x=n(1110),v=n(3);function O(){var e=Object(l.a)("css/dashboard.css"),t=Object(m.f)();Object(x.a)();var n=o.a.useContext(d.a),a=n.account,r=n.convertNumberToPrice,O=n.isAdmin,w=n.getInvitationList,y=o.a.useState(),N=Object(i.a)(y,2),k=N[0],_=N[1],C=o.a.useMemo((function(){return[{title:"Home",href:"/"},{title:"Marketplace",href:"/marketplace"},{title:"Dashboard",href:"/dashboard"},{title:"Transactions",href:"/transactions"}]}),[]),T=o.a.useMemo((function(){return[{title:"Home",href:"/"},{title:"Marketplace",href:"/marketplace"},{title:"Dashboard",href:"/dashboard"},{title:"Armory",href:"/armory"},{title:"Transactions",href:"/transactions"},{title:"Administration",href:"/admin",active:O}]}),[]);o.a.useEffect((function(){a&&a.address?(A(),setTimeout((function(){window.$(".loader").fadeOut(500,"swing",(function(){}))}),4e3)):t.push("/")}),[]);var A=function(){var e=Object(s.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u.d.show({icon:"loading",content:"Loading...",maskClickable:!1,duration:0}),e.next=3,w();case 3:(t=e.sent)&&(_(t),u.d.clear());case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return o.a.useEffect((function(){setTimeout((function(){window.$('[data-toggle="tooltip"]').tooltip()}),500)}),[k]),Object(v.jsx)(h.a,{isReady:e,navUrls:C,dropdownUrls:T,title:"Invitation list & Rewards",children:Object(v.jsxs)("section",{className:"flights content_box",style:{minHeight:785},children:[Object(v.jsxs)("table",{className:"table table-borderless table-hover",style:{fontSize:g.isMobile?"2.2rem":"1.7rem"},children:[Object(v.jsx)("thead",{children:Object(v.jsxs)("tr",{children:[Object(v.jsx)("th",{scope:"col",children:"#"}),Object(v.jsx)("th",{scope:"col",children:"From"}),Object(v.jsx)("th",{scope:"col",children:"To"}),Object(v.jsx)("th",{scope:"col",children:"Reward"})]})}),Object(v.jsx)("tbody",{children:k&&k.length?k.map((function(e,t){return Object(v.jsxs)("tr",{children:[Object(v.jsx)("th",{scope:"row",children:t+1}),Object(v.jsx)("td",{className:"text-info",role:"button",onClick:function(){return Object(b.e)(e.player)},"data-toggle":"tooltip","data-placement":"bottom",title:e,children:Object(b.c)(e,7)}),Object(v.jsx)("td",{role:"button",onClick:function(){return Object(b.e)(a.address)},"data-toggle":"tooltip","data-placement":"bottom",title:a.address,children:Object(b.c)(a.address,7)}),Object(v.jsxs)("td",{className:"text-success font-weight-bold",children:["+",r(j.m.inviter,!1)," ",j.g.symbol]})]},t)})):null})]}),!(k&&k.length)&&Object(v.jsx)("div",{className:"h-100 d-flex justify-content-center align-items-center",children:Object(v.jsx)("p",{children:k?Object(v.jsx)(f.a,{message:"Empty!",width:300}):Object(v.jsx)(p.a,{width:300})})})]})})}}}]);