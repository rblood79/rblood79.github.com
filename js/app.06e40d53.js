(function(t){function e(e){for(var n,i,s=e[0],l=e[1],c=e[2],u=0,d=[];u<s.length;u++)i=s[u],o[i]&&d.push(o[i][0]),o[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);p&&p(e);while(d.length)d.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,i=1;i<a.length;i++){var s=a[i];0!==o[s]&&(n=!1)}n&&(r.splice(e--,1),t=l(l.s=a[0]))}return t}var n={},i={app:0},o={app:0},r=[];function s(t){return l.p+"js/"+({}[t]||t)+"."+{"chunk-1368ba62":"ba220c21","chunk-1b09e771":"38a57d95","chunk-2d0c9386":"6af08a0d","chunk-2d207d33":"93512ee4","chunk-2d21022b":"b074ea74","chunk-2d21d68f":"a70aef34","chunk-2d221b8b":"511fe6c6","chunk-2d226519":"7fb91c24","chunk-38b9d23c":"4e92f58d","chunk-3af00a28":"ff178b52","chunk-441de8a6":"05341e5d","chunk-5cd5b814":"03ba7c86","chunk-6c86c4d4":"2aaa0649","chunk-6ed99d86":"19bc2d7f","chunk-a3a4917e":"e68d5812","chunk-bde9470a":"8717e371"}[t]+".js"}function l(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(t){var e=[],a={"chunk-1368ba62":1,"chunk-1b09e771":1,"chunk-38b9d23c":1,"chunk-3af00a28":1,"chunk-441de8a6":1,"chunk-5cd5b814":1,"chunk-6c86c4d4":1,"chunk-6ed99d86":1,"chunk-a3a4917e":1,"chunk-bde9470a":1};i[t]?e.push(i[t]):0!==i[t]&&a[t]&&e.push(i[t]=new Promise(function(e,a){for(var n="css/"+({}[t]||t)+"."+{"chunk-1368ba62":"7bfb4826","chunk-1b09e771":"40816891","chunk-2d0c9386":"31d6cfe0","chunk-2d207d33":"31d6cfe0","chunk-2d21022b":"31d6cfe0","chunk-2d21d68f":"31d6cfe0","chunk-2d221b8b":"31d6cfe0","chunk-2d226519":"31d6cfe0","chunk-38b9d23c":"823518e4","chunk-3af00a28":"5f9734cf","chunk-441de8a6":"823518e4","chunk-5cd5b814":"1830f29c","chunk-6c86c4d4":"823518e4","chunk-6ed99d86":"1a20a315","chunk-a3a4917e":"1ea6623c","chunk-bde9470a":"823518e4"}[t]+".css",o=l.p+n,r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var c=r[s],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===n||u===o))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){c=d[s],u=c.getAttribute("data-href");if(u===n||u===o)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var n=e&&e.target&&e.target.src||o,r=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=n,delete i[t],p.parentNode.removeChild(p),a(r)},p.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(p)}).then(function(){i[t]=0}));var n=o[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise(function(e,a){n=o[t]=[e,a]});e.push(n[2]=r);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=s(t),c=function(e){u.onerror=u.onload=null,clearTimeout(d);var a=o[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src,r=new Error("Loading chunk "+t+" failed.\n("+n+": "+i+")");r.type=n,r.request=i,a[1](r)}o[t]=void 0}};var d=setTimeout(function(){c({type:"timeout",target:u})},12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=n,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(a,n,function(e){return t[e]}.bind(null,n));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var p=u;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"1d3b":function(t,e,a){"use strict";var n=a("d8d1"),i=a.n(n);i.a},"2a18":function(t,e,a){t.exports=a.p+"img/tyler-franta-589346-unsplash.0e4e463f.jpg"},"2f0f":function(t,e,a){t.exports=a.p+"img/william-white-34988-unsplash.fac457cf.jpg"},4360:function(t,e,a){"use strict";var n=a("2b0e"),i=a("2f62");n["default"].use(i["a"]),e["a"]=new i["a"].Store({state:{appName:"HAEMILSOFT",scrollY:0,deltaY:0,inHeight:0,outHeight:0,isMobile:!1,itemsColor:["#1e9cd9","#0277bd","#2f5aa8","#242424","#313131"],items:[],itemsValue:[{speed:[640,375,375,375,375,375,375,375],width:[1500,375,375,375,375,375,375,375],height:[640,320,320,320,320,320,320,320],x:[0,375,750,1125,0,375,750,1125],y:[0,0,0,0,320,320,320,320],z:[0,0,0,0,0,0,0,0],background:["#1e9cd9","#0277bd","#2f5aa8","#242424","#0277bd","#0277BD","#242424","#242424"]},{speed:[525,640,640,320,375,337,375,375],width:[375,375,375,188,375,375,375,375],height:[640,640,640,320,320,320,320,320],x:[0,375,750,1125,0,375,750,1125],y:[0,0,0,0,320,320,320,320],z:[0,0,0,0,0,0,0,0],background:["#1e9cd9","#0277bd","#2f5aa8","#242424","#0277bd","#0277BD","#242424","#242424"]},{speed:[525,375,375,320,320,320,320,375],width:[1125,375,375,375,1125,375,375,375],height:[320,320,320,320,320,320,320,160],x:[0,375,750,1125,0,375,750,1125],y:[0,0,0,0,320,320,320,320],z:[0,0,0,0,0,0,0,0],background:["#1e9cd9","#0277bd","#2f5aa8","#242424","#0277bd","#0277BD","#242424","#242424"]},{speed:[525,337,640,337,337,337,337,320],width:[750,375,375,375,375,375,375,188],height:[640,320,640,320,320,320,320,320],x:[0,375,750,1125,0,375,750,1125],y:[0,0,0,0,320,320,320,320],z:[0,0,0,0,0,0,0,0],background:["#1e9cd9","#0277bd","#2f5aa8","#242424","#0277bd","#0277BD","#242424","#242424"]}]},getters:{},mutations:{isTest:function(t,e){t.isTest=e.active},isMobile:function(t,e){t.isMobile=e.active},items:function(t,e){t.items=e.array},scrollY:function(t,e){t.scrollY=e.num},deltaY:function(t,e){t.deltaY=e.num},inHeight:function(t,e){t.inHeight=e.num},outHeight:function(t,e){t.outHeight=e.num}},actions:{}})},"4c76":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d"),a("db4d");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{class:t.isDetail},[t.$store.state.isMobile?t._e():a("guide",{attrs:{axisV:""}}),a("header",{class:{active:1==t.deltaY}},[a("v-navigation-drawer",{attrs:{dark:"",app:"","disable-resize-watcher":"",fixed:"",clipped:t.$vuetify.breakpoint.lgAndUp,right:"",flat:"",overflow:""},model:{value:t.sidebar,callback:function(e){t.sidebar=e},expression:"sidebar"}},[a("keep-alive",[a("menu-bar",{attrs:{menuPosition:"side"}})],1)],1),a("v-toolbar",{attrs:{app:"","clipped-left":t.$vuetify.breakpoint.lgAndUp,height:"56px"}},[a("v-toolbar-title",[t._v(t._s(t.$store.state.appName))]),a("v-spacer"),t.isTest?a("span",{staticClass:"test"},[t._v(t._s(t.$store.state.outHeight)+" / "+t._s(t.$store.state.inHeight)+" / "+t._s(t.$store.state.scrollY))]):t._e(),a("keep-alive",["default"===t.$route.meta.layout?a("menu-bar",{staticClass:"hidden-sm-and-down",class:{active:t.position},attrs:{menuPosition:"top"}}):a("v-btn",{attrs:{fab:"",round:"",flat:""},on:{click:t.fn_back}},[a("v-icon",{staticClass:"clear"},[t._v("clear")])],1)],1),"default"===t.$route.meta.layout?a("v-toolbar-side-icon",{staticClass:"sidebar hidden-md-and-up",on:{click:function(e){e.stopPropagation(),t.sidebar=!t.sidebar}}}):t._e()],1)],1),a("v-content",[a("keep-alive",[a(t.layout,{tag:"component"},[a("router-view")],1)],1)],1),a("keep-alive",[a("footer-bar")],1)],1)},o=[],r=a("4360"),s=a("8c4f"),l=function(){return a.e("chunk-3af00a28").then(a.bind(null,"eabb"))},c=function(){return a.e("chunk-2d0c9386").then(a.bind(null,"57e3"))},u=function(){return a.e("chunk-2d207d33").then(a.bind(null,"a1d1"))},d=function(){return a.e("chunk-2d221b8b").then(a.bind(null,"cc0e"))},p=function(){return a.e("chunk-bde9470a").then(a.bind(null,"013f"))},m=function(){return a.e("chunk-1b09e771").then(a.bind(null,"aa4b"))},f=function(){return a.e("chunk-a3a4917e").then(a.bind(null,"46b4"))},h=function(){return a.e("chunk-38b9d23c").then(a.bind(null,"8fac"))},b=function(){return a.e("chunk-6c86c4d4").then(a.bind(null,"17be"))},v=function(){return a.e("chunk-441de8a6").then(a.bind(null,"f3e7"))},g=function(){return a.e("chunk-5cd5b814").then(a.bind(null,"70d8"))},k=function(){return a.e("chunk-2d21d68f").then(a.bind(null,"d0d1"))},w=function(){return a.e("chunk-2d21022b").then(a.bind(null,"b733"))},y=function(){return a.e("chunk-1368ba62").then(a.bind(null,"ae8da"))},_=function(){return a.e("chunk-6ed99d86").then(a.bind(null,"7890"))};n["default"].use(s["a"]);var T=new s["a"]({mode:"history",routes:[{path:"*",name:"NotFound",meta:{layout:"detail",id:0,title:"404 Error",titleSub:"Page Not Found",article:"sorry sorry sorry, but try again other menu",transition:"slide-top",scrollToTop:!0},components:{detail:m},props:{detail:{id:"0",title:"404 Error",titleSub:"sorry The requested URL / was not found on this server.",article:"Where technical strength meets innovative business strategy",src:a("ebd4"),label:"뒤로",path:"/"}}},{path:"/",name:"Landing",meta:{layout:"default",id:0,title:"We know the www",titleSub:"Lorem amet consectetur adipiscing dolore magna aliqua enim minim",article:"Landing page",scrollToTop:!0},components:{router0:l}},{path:"/service/application",name:"Application",components:{detail:f},meta:{layout:"detail",id:3,title:"Application",titleSub:"Application Sub",article:"Application Comment",transition:"zoom-in",scrollToTop:!0}},{path:"/service/system",name:"System",components:{detail:h},meta:{layout:"detail",id:2,title:"System",titleSub:"System Sub",article:"System Comment",transition:"zoom-in",scrollToTop:!0}},{path:"/service/product",name:"Product",components:{detail:b},meta:{layout:"detail",id:7,title:"Product",titleSub:"Product Sub",article:"Product Comment",transition:"zoom-in",scrollToTop:!0}},{path:"/service",name:"Service",meta:{layout:"default",id:1,title:"What we do is different",titleSub:"Where technical strength meets innovative business strategy",article:"We know the system, who ever",scrollToTop:!0},components:{router0:c,router1:y,router2:y,router3:y,router7:y},props:{router1:{id:1,title:"솔루션",titleSub:"data report for ATTO",article:"쉽고 편한 웹보고서 프로그램 ATTO report 와 설치가 필요없는 웹제작 도구 X studio",src:a("892d"),label:"제품 구경하기",path:"/service/product",transition:"zoom-in"},router2:{id:2,title:"시스템개발",titleSub:"system build & management",article:"느리고 에러나는 오래된 시스템부터 새로운 시스템을 구축 할때 최고의 전문가들이 당신을 도와드립니다. No pain No gain",src:a("bd51"),label:"어디까지 되나 보기",path:"/service/system",transition:"zoom-in"},router3:{id:3,title:"어플리케이션",titleSub:"web, desktop, mobile, all flatform",article:"Desktop, mobile, 어떠한 환경이든 원하는 프로그램 형태로 최적화된 프로그램을 제작해 드립니다.",src:a("98e5"),label:"게임은 안만듬",path:"/service/application",transition:"zoom-in"},router7:{id:7,title:"즐겁게 일할수 있는",titleSub:"Build your application today!",article:"",src:a("8042"),label:"준비중...",path:"",transition:"zoom-in"}}},{path:"/about/history",name:"History",components:{detail:v},meta:{layout:"detail",id:3,title:"History",titleSub:"History Sub",article:"History Comment",transition:"zoom-in",scrollToTop:!0}},{path:"/about/member",name:"Member",components:{detail:g},meta:{layout:"detail",id:7,title:"Member",titleSub:"Member Sub",article:"Member Comment",transition:"zoom-in",scrollToTop:!0}},{path:"/about",name:"About",meta:{layout:"default",id:2,title:"I'll let you know",titleSub:"With great power comes great capability.",article:"Creative to digital factory We develop your projects as if they were our own",scrollToTop:!0},components:{router0:u,router3:y,router4:y,router7:y},props:{router0:{id:0,title:"이야기",titleSub:"half professional",article:"365일 24시간 어제도 오늘도 내일도 고민중인 사람들... 점심 메뉴로",src:a("2f0f"),label:"",path:""},router3:{id:3,title:"사람들",titleSub:"half professional",article:"365일 24시간 어제도 오늘도 내일도 고민중인 사람들... 점심 메뉴로",src:a("a509"),label:"자주 보면 부끄러움",path:"/about/member"},router4:{id:4,title:"좀더 좋은 기술과 편리한 디자인",titleSub:"Easy to create and easy to use",article:"어떻게 하면 좀더 쉽게 사용할 수 있게 할까? 늘 최적화된 제품을 위해",src:a("2a18"),label:"",path:""},router7:{id:7,title:"걸어온 길",titleSub:"Do the best way",label:"한번만 봐도 충분",article:"좋은 회사 찾다가 내가 차린 회사, 직원들 등골 뺴먹지 않는 회사",src:a("e787"),path:"/about/history",transition:"slide-left"}}},{path:"/support",name:"Support",meta:{layout:"default",id:3,title:"I'll support you a lot",titleSub:"What’s covered with Personal and help brands and companies",article:"We would love to hear from you and get to know your project",scrollToTop:!0},components:{router0:d,router2:_,router3:y,router7:y},props:{router3:{id:3,title:"새로운 소식",titleSub:"notice & news",label:"뜨면 알려줄게",src:a("e895"),path:"/about/news"},router7:{id:7,title:"다운로드",titleSub:"이것저것 다 있어요",src:a("e94a"),label:"찾아 보기",path:"/about/data"}}},{path:"/detail",name:"Detail",component:k,meta:{title:"Detail",titleSub:"deep story",article:"Lorem ipsum dolor amet consectetur adipiscing dolore magna aliqua enim minim estudiat veniam siad venumus dolore",scrollToTop:!0}},{path:"/board",name:"Board",component:w,meta:{title:"Board",titleSub:"notice & news",article:"Lorem ipsum dolor amet consectetur adipiscing dolore magna aliqua enim minim estudiat veniam siad venumus dolore",scrollToTop:!0}},{path:"/login",name:"Login",meta:{layout:"detail",id:0,title:"login",titleSub:"Page Not Found",article:"sorry sorry sorry, but try again other menu",transition:"slide-top",scrollToTop:!0},components:{detail:p}}]}),S=T,x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"guide-group"},[this.axisV?a("ul",{ref:"guideVertical",staticClass:"guide vertical",attrs:{tag:"ul"}},t._l(5,function(t){return a("li",{key:t,staticClass:"guide-item"})}),0):t._e(),this.axisH?a("ul",{ref:"guideHorizental",staticClass:"guide horizental",attrs:{tag:"ul"}},t._l(3,function(t){return a("li",{key:t,staticClass:"guide-item"})}),0):t._e()])},L=[],N={props:{axisV:Boolean,axisH:Boolean},data:function(){return{}},created:function(){},mounted:function(){},methods:{fn_test:function(){}}},C=N,E=(a("1d3b"),a("2877")),j=Object(E["a"])(C,x,L,!1,null,"c2092b2e",null),$=j.exports,z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.$store.state.isMobile?a("v-btn-toggle",t._l(t.menuItems,function(e){return a("v-btn",{key:e.name,attrs:{flat:"",to:e.path}},[t._v(t._s(e.name))])}),1):a("v-tabs",{attrs:{color:"transparent","slider-color":"primary","mobile-break-point":"375",right:""},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},t._l(t.menuItems,function(e){return a("v-tab",{key:e.name,attrs:{ripple:"",to:e.path}},[t._v(t._s(e.name))])}),1)},P=[],H={props:["menuPosition"],data:function(){return{drawer:null,menuItems:[{name:"시작",path:"/"},{name:"하는일",path:"/service"},{name:"소개",path:"/about"},{name:"지원",path:"/support"},{name:"로그인",path:"/login"}],active:null}},created:function(){},mounted:function(){},computed:{},methods:{next:function(){var t=parseInt(this.active);this.active=t<2?t+1:0}}},V=H,O=a("6544"),A=a.n(O),B=a("8336"),Y=a("a609"),M=a("71a3"),D=a("fe57"),W=Object(E["a"])(V,z,P,!1,null,null,null),I=W.exports;A()(W,{VBtn:B["a"],VBtnToggle:Y["a"],VTab:M["a"],VTabs:D["a"]});var F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-footer",{attrs:{height:"56px",app:""}},[a("span",[t._v("© "+t._s((new Date).getFullYear())+" "+t._s(t.appName)+" ")]),a("v-spacer"),a("span",[t._v(t._s(t.appBuilder))])],1)},q=[],U={data:function(){return{appName:"haemilsoft",appBuilder:"ATTO report / X studio"}}},G=U,J=(a("760c"),a("553a")),R=a("9910"),X=Object(E["a"])(G,F,q,!1,null,null,null),K=X.exports;A()(X,{VFooter:J["a"],VSpacer:R["a"]});var Q="default",Z={components:{Guide:$,MenuBar:I,FooterBar:K},data:function(){return{isTest:!1,isMobile:!1,isDetail:"default",sidebar:!1,position:!1,deltaY:0,appName:"appName",transitionName:"zoom-in",scrollPosition:0,startScrollPosition:0,ticking:!1}},beforeDestroy:function(){"undefined"!==typeof window&&(window.removeEventListener("pointerdown",this.fn_pointer,{passive:!0}),window.removeEventListener("pointerup",this.fn_pointer,{passive:!0}),window.removeEventListener("resize",this.fn_resize,{passive:!0}),window.removeEventListener("scroll",this.fn_scroll,{passive:!0}),window.removeEventListener("wheel",this.fn_wheel,{passice:!0}))},computed:{layout:function(){return(this.$route.meta.layout||Q)+"-layout"}},created:function(){this.appName=this.$store.state.appName,r["a"].commit("isTest",{active:this.isTest})},mounted:function(){var t=this;S.beforeEach(function(e,a,n){t.isDetail=e.meta.layout,e.meta.index>a.meta.index?t.position=!0:t.position=!1,e.meta.transition?t.transitionName="zoom-in":t.transitionName="zoom-out",n()}),window.addEventListener("pointerdown",this.fn_pointer,{passive:!0}),window.addEventListener("pointerup",this.fn_pointer,{passive:!0}),window.addEventListener("scroll",this.fn_scroll,{passive:!0}),window.addEventListener("wheel",this.fn_wheel,{passive:!0}),window.addEventListener("resize",this.fn_resize,{passive:!0}),this.fn_resize()},methods:{fn_scroll:function(){this.startScrollPosition>window.scrollY||window.scrollY<=1?this.deltaY=0:this.deltaY=1,r["a"].commit("scrollY",{num:window.scrollY}),this.startScrollPosition=window.scrollY},fn_pointer:function(t){this.startScrollPosition=window.scrollY},fn_wheel:function(t){this.startScrollPosition=window.scrollY},fn_resize:function(){r["a"].commit("isMobile",{active:window.innerWidth<1125}),r["a"].commit("outHeight",{num:window.outerHeight}),window.innerWidth<1125?r["a"].commit("inHeight",{num:window.innerHeight-56}):r["a"].commit("inHeight",{num:"100%"})},fn_back:function(){S.go(-1)}}},tt=Z,et=a("7496"),at=a("549c"),nt=a("132d"),it=a("f774"),ot=a("71d9"),rt=a("706c"),st=a("2a7f"),lt=Object(E["a"])(tt,i,o,!1,null,null,null),ct=lt.exports;A()(lt,{VApp:et["a"],VBtn:B["a"],VContent:at["a"],VIcon:nt["a"],VNavigationDrawer:it["a"],VSpacer:R["a"],VToolbar:ot["a"],VToolbarSideIcon:rt["a"],VToolbarTitle:st["a"]});var ut=a("ce5b"),dt=a.n(ut),pt=(a("bf40"),a("c0a4")),mt=a.n(pt),ft=a("a899"),ht=a.n(ft),bt=(a("04dc"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{ref:"visual",staticClass:"visual",class:[t.$route.name],attrs:{fluid:""}},[a("div",{staticClass:"block block0 isLoad",class:{active:t.isLoad},attrs:{name:"block0"}},[a("keep-alive",[a("router-view",{attrs:{name:"router0"}})],1)],1),a("div",{staticClass:"block block1 isLoad",class:{active:t.isLoad},attrs:{name:"block1"}},[a("keep-alive",[a("router-view",{attrs:{name:"router1"}})],1)],1),a("div",{staticClass:"block block2 isLoad",class:{active:t.isLoad},attrs:{name:"block2"}},[a("keep-alive",[a("router-view",{attrs:{name:"router2"}})],1)],1),a("div",{staticClass:"block block3 isLoad",class:{active:t.isLoad},attrs:{name:"block3"}},[a("keep-alive",[a("router-view",{attrs:{name:"router3"}})],1)],1),a("div",{staticClass:"block block4 isLoad",class:{active:t.isLoad},attrs:{name:"block4"}},[a("keep-alive",[a("router-view",{attrs:{name:"router4"}})],1)],1),a("div",{staticClass:"block block5",attrs:{name:"block5"}},[a("keep-alive",[a("router-view",{attrs:{name:"router5"}})],1)],1),a("div",{staticClass:"block block6",attrs:{name:"block6"}},[a("keep-alive",[a("router-view",{attrs:{name:"router6"}})],1)],1),a("div",{staticClass:"block block7 isLoad",class:{active:t.isLoad},attrs:{name:"block7"}},[a("keep-alive",[a("router-view",{attrs:{name:"router7"}})],1)],1),a("div",{staticClass:"sub-title",class:{active:t.isLoad}},[a("h2",{staticClass:"title-top headline",attrs:{"data-title":t.isTitle}},[t._v(t._s(t.$store.state.isTitle))]),a("p",{staticClass:"title-des caption"},[t._v(t._s(t.$store.state.isTitleSub))])])])}),vt=[],gt=(a("ac6a"),a("28a5"),a("589d")),kt=a.n(gt),wt={components:{Guide:$},data:function(){return{isLoad:!1,isTitle:"title",istitleSub:"sub",sidebar:!1,transitionName:"slide-top",locale:"en",items:[]}},created:function(){},watch:{},mounted:function(){var t=this,e=null;this.$store.state.items<=0&&r["a"].commit("items",{array:this.fn_array(this.$refs["visual"])}),S.beforeEach(function(a,n,i){if(e=a.meta.id,t.isTitle=a.meta.title,t.isTitleSub=a.meta.titleSub,t.$store.state.isMobile||"detail"==a.meta.layout)i();else if(t.isLoad=!0,a.path.split("/").length>2)t.transitionName=a.meta.transition,i();else{var o=t.transitionName.split("-");t.transitionName=o[0],"top"===o[1]?t.transitionName=t.transitionName+"-bottom":"right"===o[1]?t.transitionName=t.transitionName+"-left":"bottom"===o[1]?t.transitionName=t.transitionName+"-top":"left"===o[1]?t.transitionName=t.transitionName+"-right":"in"===o[1]?t.transitionName=t.transitionName+"-out":"out"===o[1]?t.transitionName=t.transitionName+"-in":t.transitionName="fade",t.fn_sub(i,t.$store.state.itemsValue[e],t.$store.state.items,e)}}),S.afterEach(function(e,a){window.scrollTo(0,0),t.isLoad=!1})},computed:{},methods:{fetchData:function(){},fn_array:function(t){for(var e=[],a=0;a<t.childNodes.length-1;a++)e[a]=t.childNodes[a];return e},fn_sub:function(t,e,a,n){var i=a.length-1;n>0?a.forEach(function(a,o){a.children.length>0&&a.children[0].classList.add("hide"),kt()(a,{"max-width":e.width[o],"max-height":e.height[o],left:e.x[o],top:e.y[o]},{duration:300,easing:[.25,.8,.5,1],complete:function(){a.children.length>0&&a.children[0].classList.remove("hide"),o!==i&&0!==n||t()}})}):(a[0].children[0].classList.add("hide"),kt()(a[0],{"max-width":e.width[0],"max-height":e.height[0]},{duration:400,easing:[.25,.8,.5,1],complete:function(){a[0].children[0].classList.remove("hide"),a[0].removeAttribute("style"),t()}}))}}},yt=wt,_t=a("a523"),Tt=Object(E["a"])(yt,bt,vt,!1,null,null,null),St=Tt.exports;A()(Tt,{VContainer:_t["a"]});var xt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("keep-alive",[a("router-view",{attrs:{name:"detail"}})],1)},Lt=[],Nt={created:function(){},mounted:function(){},data:function(){return{}}},Ct=Nt,Et=(a("7c40"),Object(E["a"])(Ct,xt,Lt,!1,null,"3aac5d9d",null)),jt=Et.exports;n["default"].component("default-layout",St),n["default"].component("detail-layout",jt),n["default"].use(ht.a),n["default"].use(scroll),n["default"].use(dt.a,{theme:{primary:"#4bb4e7",secondary:"#03a9f4",accent:"#323232",error:mt.a.red.accent3}}),n["default"].config.productionTip=!1,new n["default"]({router:S,store:r["a"],render:function(t){return t(ct)}}).$mount("#app")},"760c":function(t,e,a){"use strict";var n=a("93ff"),i=a.n(n);i.a},"7c40":function(t,e,a){"use strict";var n=a("4c76"),i=a.n(n);i.a},8042:function(t,e,a){t.exports=a.p+"img/sleek-playstation-controller-picjumbo-com.632391aa.jpg"},"892d":function(t,e,a){t.exports=a.p+"img/olav-ahrens-rotne-1102458-unsplash.f743aa1f.jpg"},"93ff":function(t,e,a){},"98e5":function(t,e,a){t.exports=a.p+"img/reza-namdari-1309908-unsplash.4c33be7f.jpg"},a509:function(t,e,a){t.exports=a.p+"img/nik-macmillan-280300.4a6f4d3a.jpg"},a899:function(t,e,a){},bd51:function(t,e,a){t.exports=a.p+"img/ali-morshedlou-566510.2d584779.jpg"},d8d1:function(t,e,a){},e787:function(t,e,a){t.exports=a.p+"img/daniel-cheung-554578-unsplash.dafc17c9.jpg"},e895:function(t,e,a){t.exports=a.p+"img/remi-walle-86579-unsplash.5f37081a.jpg"},e94a:function(t,e,a){t.exports=a.p+"img/joel-filipe-187166-unsplash.ab64b17d.jpg"},ebd4:function(t,e,a){t.exports=a.p+"img/Ryu3s-stance.c2f22c3c.gif"}});
//# sourceMappingURL=app.06e40d53.js.map