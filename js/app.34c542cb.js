(function(t){function e(e){for(var i,a,s=e[0],c=e[1],l=e[2],u=0,d=[];u<s.length;u++)a=s[u],o[a]&&d.push(o[a][0]),o[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);m&&m(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(i=!1)}i&&(r.splice(e--,1),t=c(c.s=n[0]))}return t}var i={},a={app:0},o={app:0},r=[];function s(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-0eae7cf0":"ef12d230","chunk-1b2505b0":"c7e1991d","chunk-224c1e3a":"4e89e4ba","chunk-259eb5dc":"882fc8d4","chunk-2d21022b":"f9c2c279","chunk-2d21d68f":"1f78a01d","chunk-33cb4c39":"4024e531","chunk-3cb8b004":"837eefad","chunk-4787d8ea":"921939cf","chunk-495698f2":"782cfb6e","chunk-50cb0636":"29bd482c","chunk-69f226b8":"3f5bb1f0","chunk-7ff1289e":"84e67be9","chunk-87c21750":"0a46b22d","chunk-a7325750":"fd9e4082","chunk-c6bb9632":"7a4ca16c","chunk-ce49c93e":"e31c1ab3"}[t]+".js"}function c(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-0eae7cf0":1,"chunk-1b2505b0":1,"chunk-224c1e3a":1,"chunk-259eb5dc":1,"chunk-33cb4c39":1,"chunk-3cb8b004":1,"chunk-4787d8ea":1,"chunk-495698f2":1,"chunk-50cb0636":1,"chunk-69f226b8":1,"chunk-7ff1289e":1,"chunk-87c21750":1,"chunk-a7325750":1,"chunk-c6bb9632":1,"chunk-ce49c93e":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise(function(e,n){for(var i="css/"+({}[t]||t)+"."+{"chunk-0eae7cf0":"fa2c1b2e","chunk-1b2505b0":"fe49429a","chunk-224c1e3a":"4d8b4f2d","chunk-259eb5dc":"72373e96","chunk-2d21022b":"31d6cfe0","chunk-2d21d68f":"31d6cfe0","chunk-33cb4c39":"2d8256a2","chunk-3cb8b004":"28fa001e","chunk-4787d8ea":"d0a0a16a","chunk-495698f2":"bc2f4344","chunk-50cb0636":"1cbc0716","chunk-69f226b8":"83425a78","chunk-7ff1289e":"61131589","chunk-87c21750":"36a1492f","chunk-a7325750":"304d1a5f","chunk-c6bb9632":"ddb5002e","chunk-ce49c93e":"9f45d7b0"}[t]+".css",o=c.p+i,r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var l=r[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===i||u===o))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],u=l.getAttribute("data-href");if(u===i||u===o)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var i=e&&e.target&&e.target.src||o,r=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=i,delete a[t],m.parentNode.removeChild(m),n(r)},m.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(m)}).then(function(){a[t]=0}));var i=o[t];if(0!==i)if(i)e.push(i[2]);else{var r=new Promise(function(e,n){i=o[t]=[e,n]});e.push(i[2]=r);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(t),l=function(e){u.onerror=u.onload=null,clearTimeout(d);var n=o[t];if(0!==n){if(n){var i=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,r=new Error("Loading chunk "+t+" failed.\n("+i+": "+a+")");r.type=i,r.request=a,n[1](r)}o[t]=void 0}};var d=setTimeout(function(){l({type:"timeout",target:u})},12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=i,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)c.d(n,i,function(e){return t[e]}.bind(null,i));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var m=u;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"05b7":function(t,e,n){},"1d3b":function(t,e,n){"use strict";var i=n("2ced"),a=n.n(i);a.a},"1d48":function(t,e,n){},"2a18":function(t,e,n){t.exports=n.p+"img/tyler-franta-589346-unsplash.0e4e463f.jpg"},"2ced":function(t,e,n){},"2f0f":function(t,e,n){t.exports=n.p+"img/william-white-34988-unsplash.fac457cf.jpg"},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d"),n("db4d");var i=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{class:t.isDetail},[t.$store.state.isMobile?t._e():n("guide",{attrs:{axisV:""}}),t.$store.state.isMobile?t._e():n("header",[n("v-toolbar",{attrs:{app:"",height:"56px"}},[n("v-toolbar-title",{staticClass:"hidden-sm-and-down"},[t._v(t._s(t.$store.state.appName))]),n("v-spacer"),n("keep-alive",["default"===t.$route.meta.layout?n("menu-bar",{staticClass:"hidden-sm-and-down",class:{active:t.position},attrs:{menuPosition:"top"}}):n("v-btn",{attrs:{fab:"",round:"",flat:""},on:{click:t.fn_back}},[n("v-icon",{staticClass:"clear"},[t._v("clear")])],1)],1)],1)],1),n("v-content",[n("keep-alive",[t.$store.state.isMobile?n("transition",{attrs:{name:"slide-top"}},[n(t.layout,{tag:"component"})],1):n(t.layout,{tag:"component"})],1)],1),n("v-footer",{attrs:{height:"56px",app:""}},[t.$store.state.isMenu?n("div",{staticClass:"overay",on:{click:t.fn_menu}}):t._e(),t.$store.state.isMobile?n("aside",{staticClass:"menu-mobile",class:{active:t.$store.state.isMenu}},[n("div"),n("keep-alive",[n("menu-bar",{attrs:{menuPosition:"side"}})],1)],1):t._e(),n("div",{staticClass:"footer-group"},[n("span",{staticClass:"copyright"},[t._v("Copyright © "+t._s((new Date).getFullYear())+" "+t._s(t.$store.state.appName))]),n("v-spacer"),n("span",{staticClass:"other"},[t._v(t._s(t.$store.state.appBuilder))])],1),"default"===t.$route.meta.layout&&t.$store.state.isMobile?n("v-btn",{attrs:{fab:"",flat:""},on:{click:t.fn_menu}},[t.$store.state.isMenu?n("v-icon",{staticClass:"clear"},[t._v("clear")]):n("v-icon",{staticClass:"subject"},[t._v("subject")])],1):t.$store.state.isMobile?n("v-btn",{attrs:{fab:"",flat:""},on:{click:t.fn_back}},[n("v-icon",{staticClass:"clear"},[t._v("clear")])],1):t._e()],1)],1)},o=[],r=n("c0d6"),s=n("8c4f"),c=function(){return n.e("chunk-1b2505b0").then(n.bind(null,"eabb"))},l=function(){return n.e("chunk-33cb4c39").then(n.bind(null,"57e3"))},u=function(){return n.e("chunk-69f226b8").then(n.bind(null,"a1d1"))},d=function(){return n.e("chunk-ce49c93e").then(n.bind(null,"cc0e"))},m=function(){return n.e("chunk-87c21750").then(n.bind(null,"013f"))},p=function(){return n.e("chunk-50cb0636").then(n.bind(null,"aa4b"))},f=function(){return n.e("chunk-a7325750").then(n.bind(null,"46b4"))},h=function(){return n.e("chunk-7ff1289e").then(n.bind(null,"17be"))},b=function(){return n.e("chunk-c6bb9632").then(n.bind(null,"f3e7"))},v=function(){return n.e("chunk-3cb8b004").then(n.bind(null,"70d8"))},g=function(){return n.e("chunk-2d21d68f").then(n.bind(null,"d0d1"))},k=function(){return n.e("chunk-2d21022b").then(n.bind(null,"b733"))},y=function(){return n.e("chunk-0eae7cf0").then(n.bind(null,"ae8d"))},w=function(){return n.e("chunk-259eb5dc").then(n.bind(null,"0b31"))},_=function(){return n.e("chunk-495698f2").then(n.bind(null,"54a3"))},S=function(){return n.e("chunk-224c1e3a").then(n.bind(null,"7890"))},T=function(){return n.e("chunk-4787d8ea").then(n.bind(null,"864c"))};i["default"].use(s["a"]);var M=new s["a"]({mode:"history",routes:[{path:"/Test",name:"Test",meta:{layout:"detail",id:0,title:"Test",titleSub:"Page Not Found",article:"sorry sorry sorry, but try again other menu",transition:"slide-top",scrollToTop:!0},components:{detail:T}},{path:"*",name:"NotFound",meta:{layout:"detail",id:0,title:"404 Error",titleSub:"Page Not Found",article:"sorry sorry sorry, but try again other menu",transition:"slide-top",scrollToTop:!0},components:{detail:p},props:{detail:{id:"0",title:"404 Error",titleSub:"sorry The requested URL / was not found on this server.",article:"Where technical strength meets innovative business strategy",src:n("ebd4"),label:"뒤로",path:"/"}}},{path:"/",name:"Landing",meta:{layout:"default",id:0,title:"We know the www",titleSub:"Lorem amet consectetur adipiscing dolore magna aliqua enim minim",article:"Landing page",scrollToTop:!0},components:{router0:c}},{path:"/service/application",name:"Application",meta:{layout:"detail",id:3,title:"Application",titleSub:"Application Sub",article:"Application Comment",transition:"zoom-in",scrollToTop:!0},components:{detail:f}},{path:"/service/product",name:"Product",meta:{layout:"detail",id:7,title:"Product",titleSub:"Product Sub",article:"Product Comment",transition:"zoom-in",scrollToTop:!0},components:{detail:h}},{path:"/service",name:"Service",meta:{layout:"default",id:1,title:"What we do is different",titleSub:"Where technical strength meets innovative business strategy",article:"We know the system, who ever",scrollToTop:!0},components:{router0:l,router1:y,router2:w,router3:_},props:{router1:{id:1,title:"판매중",titleSub:"data report for ATTO",article:"당신은<br/><em>생각만</em><br/>하세요<br/>그후엔 우리가",src:n("892d"),label:"제품 구경하기",path:"/service/product",transition:"slide-left"},router2:{id:3,title:"주문제작품",titleSub:"web, desktop, mobile, all flatform",article:"비교<br/>선택<br/><em>성공적</em><br/>프로젝트",src:n("98e5"),label:"게임은 안만듬",path:"/service/application",transition:"zoom-in"},router3:{id:7,title:"같지만 다른",titleSub:"Build your application today!",article:"게임처럼 <em>즐기세요</em> 다양한 제품을",src:n("8042"),label:"준비중...",path:"",transition:"zoom-in"}}},{path:"/about/history",name:"History",components:{detail:b},meta:{layout:"detail",id:3,title:"History",titleSub:"History Sub",article:"History Comment",transition:"zoom-in",scrollToTop:!0}},{path:"/about/member",name:"Member",components:{detail:v},meta:{layout:"detail",id:7,title:"Member",titleSub:"Member Sub",article:"Member Comment",transition:"zoom-in",scrollToTop:!0}},{path:"/about",name:"About",meta:{layout:"default",id:2,title:"I'll let you know",titleSub:"With great power comes great capability.",article:"Creative to digital factory We develop your projects as if they were our own",scrollToTop:!0},components:{router0:u,router1:_,router2:y,router3:w},props:{router0:{id:0,title:"이야기",titleSub:"half professional",article:"365일 24시간 어제도 오늘도 내일도 고민중인 사람들... 점심 메뉴로",src:n("2f0f"),label:"",path:""},router1:{id:4,title:"내 집 같은",titleSub:"I do not want to go home",article:"어서와 <em>이런 곳은</em> 처음이지",src:n("2a18"),label:"",path:""},router2:{id:3,title:"월급받는 사람들",titleSub:"Half professional",article:"때로는 <em>개발자</em>처럼 때로는 <em>사용자</em>처럼",src:n("a509"),label:"자주 보면 부끄러움",path:"/about/member"},router3:{id:7,title:"걸어온 길",titleSub:"Do the best way",label:"한번만 봐도 충분",article:"좋은 <em>회사</em> 찾다가 내가 차린 <em>회사</em>",src:n("e787"),path:"/about/history",transition:"slide-left"}}},{path:"/support",name:"Support",meta:{layout:"default",id:3,title:"I'll support you a lot",titleSub:"What’s covered with Personal and help brands and companies",article:"We would love to hear from you and get to know your project",scrollToTop:!0},components:{router0:d,router1:S,router2:_,router3:y},props:{router3:{id:7,title:"자료실",titleSub:"이것저것 다 있어요",article:"데이터 무제한 아니면 <em>돈</em><br/>나간다",src:n("e94a"),label:"찾아 보기",path:"/about/data"},router2:{id:3,title:"새로운 소식",titleSub:"notice & news",label:"뜨면 알려줄게",article:"새로운<br/>정보가<br/>있다면 <em>같이 </em>해요",src:n("e895"),path:"/about/news"}}},{path:"/detail",name:"Detail",component:g,meta:{title:"Detail",titleSub:"deep story",article:"Lorem ipsum dolor amet consectetur adipiscing dolore magna aliqua enim minim estudiat veniam siad venumus dolore",scrollToTop:!0}},{path:"/board",name:"Board",component:k,meta:{title:"Board",titleSub:"notice & news",article:"Lorem ipsum dolor amet consectetur adipiscing dolore magna aliqua enim minim estudiat veniam siad venumus dolore",scrollToTop:!0}},{path:"/login",name:"Login",meta:{layout:"detail",id:0,title:"login",titleSub:"Page Not Found",article:"sorry sorry sorry, but try again other menu",transition:"slide-top",scrollToTop:!0},components:{detail:m}}]}),x=M,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"guide-group"},[this.axisV?n("ul",{ref:"guideVertical",staticClass:"guide vertical",attrs:{tag:"ul"}},t._l(5,function(t){return n("li",{key:t,staticClass:"guide-item"})}),0):t._e(),this.axisH?n("ul",{ref:"guideHorizental",staticClass:"guide horizental",attrs:{tag:"ul"}},t._l(3,function(t){return n("li",{key:t,staticClass:"guide-item"})}),0):t._e()])},$=[],j={props:{axisV:Boolean,axisH:Boolean},data:function(){return{}},created:function(){},mounted:function(){},methods:{fn_test:function(){}}},P=j,E=(n("1d3b"),n("2877")),N=Object(E["a"])(P,C,$,!1,null,"c2092b2e",null),z=N.exports,H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.$store.state.isMobile?n("v-btn-toggle",t._l(t.menuItems,function(e){return n("v-btn",{key:e.name,attrs:{flat:"",to:e.path}},[t._v(t._s(e.name))])}),1):n("v-tabs",{attrs:{color:"transparent","slider-color":"primary","mobile-break-point":"375",right:""},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},t._l(t.menuItems,function(e){return n("v-tab",{key:e.name,attrs:{ripple:"",to:e.path}},[t._v(t._s(e.name))])}),1)},O=[],L={props:["menuPosition"],data:function(){return{drawer:null,menuItems:[{name:"시작",path:"/"},{name:"하는일",path:"/service"},{name:"소개",path:"/about"},{name:"지원",path:"/support"},{name:"로그인",path:"/login"}],active:null}},created:function(){},mounted:function(){},computed:{},methods:{next:function(){var t=parseInt(this.active);this.active=t<2?t+1:0}}},Y=L,A=Object(E["a"])(Y,H,O,!1,null,"5d1d4026",null),B=A.exports,D="default",W={components:{Guide:z,MenuBar:B},data:function(){return{isTest:!1,isMobile:!1,isDetail:"default",sidebar:!1,position:!1,deltaY:0,transitionName:"zoom-in",scrollPosition:0,startScrollPosition:0,ticking:!1,isMenu:this.$store.state.isMenu}},beforeDestroy:function(){"undefined"!==typeof window&&(window.removeEventListener("pointerdown",this.fn_pointer,{passive:!0}),window.removeEventListener("pointerup",this.fn_pointer,{passive:!0}))},computed:{layout:function(){return(this.$route.meta.layout||D)+"_layout"}},created:function(){this.appName=this.$store.state.appName,r["a"].commit("isMobile",{active:window.innerWidth<1125}),r["a"].commit("isTest",{active:this.isTest})},mounted:function(){var t=this;x.beforeEach(function(e,n,i){t.isDetail=e.meta.layout,e.meta.index>n.meta.index?t.position=!0:t.position=!1,e.meta.transition?t.transitionName="zoom-in":t.transitionName="zoom-out",i()}),this.fn_resize()},methods:{fn_scroll:function(){this.startScrollPosition>window.scrollY||window.scrollY<=1?this.deltaY=0:this.deltaY=1,r["a"].commit("scrollY",{num:window.scrollY}),this.startScrollPosition=window.scrollY},fn_pointer:function(t){this.startScrollPosition=window.scrollY},fn_wheel:function(t){this.startScrollPosition=window.scrollY},fn_resize:function(){r["a"].commit("isMobile",{active:window.innerWidth<750}),r["a"].commit("outHeight",{num:window.outerHeight})},fn_back:function(){x.go(-1)},fn_menu:function(){this.$store.state.isMenu?this.isMenu=!1:this.isMenu=!0,r["a"].commit("isMenu",{active:this.isMenu})}}},I=W,q=(n("5c0b"),Object(E["a"])(I,a,o,!1,null,null,null)),F=q.exports,V=n("ce5b"),R=n.n(V),J=(n("bf40"),n("cf77"),n("7212")),U=n.n(J),G=(n("dfa4"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("keep-alive",[n("router-view",{attrs:{name:"detail"}})],1)}),K=[],X={created:function(){},mounted:function(){},data:function(){return{}}},Q=X,Z=(n("f039"),Object(E["a"])(Q,G,K,!1,null,"44c11201",null)),tt=Z.exports,et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.$store.state.isMobile?n("swiper",{ref:"visualm",class:[t.$route.name],attrs:{options:t.swiperOption}},[n("swiper-slide",{staticClass:"block block0"},[n("transition",{attrs:{name:"slide-bottom"}},[n("router-view",{attrs:{name:"router0"}})],1)],1),n("swiper-slide",{staticClass:"block block1"},[n("transition",{attrs:{name:"slide-bottom"}},[n("router-view",{attrs:{name:"router1"}})],1)],1),n("swiper-slide",{staticClass:"block block2"},[n("transition",{attrs:{name:"slide-bottom"}},[n("router-view",{attrs:{name:"router2"}})],1)],1),n("swiper-slide",{staticClass:"block block3"},[n("transition",{attrs:{name:"slide-bottom"}},[n("router-view",{attrs:{name:"router3"}})],1)],1)],1):n("div",{staticClass:"swiper-container"},[n("v-container",{ref:"visual",staticClass:"visual swiper-wrapper",class:[t.$route.name],attrs:{fluid:""}},[n("div",{staticClass:"block block0 swiper-slide",attrs:{name:"block0"}},[n("keep-alive",[t.$store.state.isMobile?t._e():n("transition",{attrs:{name:"slide-left"}},[n("router-view",{attrs:{name:"router0"}})],1)],1)],1),n("div",{staticClass:"block block1 swiper-slide",attrs:{name:"block1"}},[n("keep-alive",[t.$store.state.isMobile?t._e():n("transition",{attrs:{name:"slide-right"}},[n("router-view",{attrs:{name:"router1"}})],1)],1)],1),n("div",{staticClass:"block block2 swiper-slide",attrs:{name:"block2"}},[n("keep-alive",[t.$store.state.isMobile?t._e():n("transition",{attrs:{name:"slide-bottom"}},[n("router-view",{attrs:{name:"router2"}})],1)],1)],1),n("div",{staticClass:"block block3 swiper-slide",attrs:{name:"block3"}},[n("keep-alive",[t.$store.state.isMobile?t._e():n("transition",{attrs:{name:"slide-top"}},[n("router-view",{attrs:{name:"router3"}})],1)],1)],1)])],1)},nt=[],it=(n("ac6a"),n("28a5"),n("589d")),at=n.n(it),ot={data:function(){return{transitionName:"slide-top",items:[],swiperOption:{direction:"vertical"}}},created:function(){},destroyed:function(){},watch:{},mounted:function(){var t=this,e=null;this.$store.state.items<=0&&!this.$store.state.isMobile&&r["a"].commit("items",{array:this.fn_array(this.$refs["visual"])}),this.$store.state.isMobile,x.beforeEach(function(n,i,a){e=n.meta.id,t.$store.state.isMobile||"detail"==n.meta.layout?a():n.path.split("/").length>2?(t.transitionName=n.meta.transition,a()):t.fn_sub(a,t.$store.state.itemsValue[e],t.$store.state.items,e)}),x.afterEach(function(t,e){r["a"].commit("isMenu",{active:!1})})},computed:{},beforeDestroy:function(){},methods:{fetchData:function(){},fn_array:function(t){for(var e=[],n=0;n<t.childNodes.length-1;n++)e[n]=t.childNodes[n];return e},fn_sub:function(t,e,n,i){var a=n.length-1;i>0?n.forEach(function(n,o){n.children.length>0&&n.children[0].classList.add("hide"),at()(n,{"max-width":e.width[o],"max-height":e.height[o],left:e.x[o],top:e.y[o]},{duration:360,easing:[.25,.8,.5,1],complete:function(){n.children.length>0&&n.children[0].classList.remove("hide"),o!==a&&0!==i||t()}})}):(n[0].children[0].classList.add("hide"),at()(n[0],{"max-width":e.width[0],"max-height":e.height[0]},{duration:360,easing:[.25,.8,.5,1],complete:function(){n[0].children[0].classList.remove("hide"),n[0].removeAttribute("style"),t()}}))}}},rt=ot,st=(n("773d"),Object(E["a"])(rt,et,nt,!1,null,null,null)),ct=st.exports,lt=n("a899"),ut=n.n(lt);i["default"].component("default_layout",ct),i["default"].component("detail_layout",tt),i["default"].config.productionTip=!1,i["default"].use(R.a,{theme:{primary:"#4bb4e7",secondary:"#03a9f4",accent:"#0277bd",error:"#f00",dark:"#242424"}}),i["default"].use(U.a),i["default"].use(ut.a),new i["default"]({router:x,store:r["a"],render:function(t){return t(F)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var i=n("5e27"),a=n.n(i);a.a},"5e27":function(t,e,n){},"773d":function(t,e,n){"use strict";var i=n("05b7"),a=n.n(i);a.a},8042:function(t,e,n){t.exports=n.p+"img/sleek-playstation-controller-picjumbo-com.ef7b1d39.jpg"},"892d":function(t,e,n){t.exports=n.p+"img/olav-ahrens-rotne-1102458-unsplash.514ac1cc.jpg"},"98e5":function(t,e,n){t.exports=n.p+"img/reza-namdari-1309908-unsplash.630a12d7.jpg"},a509:function(t,e,n){t.exports=n.p+"img/nik-macmillan-280300.4a6f4d3a.jpg"},a899:function(t,e,n){},c0d6:function(t,e,n){"use strict";var i=n("2b0e"),a=n("2f62");i["default"].use(a["a"]),e["a"]=new a["a"].Store({state:{appName:"Haemilsoft Inc.",appBuilder:"A Report / C Builder / X Studio",scrollY:0,deltaY:0,inHeight:0,outHeight:0,isMobile:!1,isMenu:!1,menus:["landing","survice","about","support","member"],itemsColor:["#1e9cd9","#0277bd","#2f5aa8","#242424","#313131"],items:[],itemsValue:[{speed:[640,375,375,375],width:[1500,375,375,375],height:[640,320,320,320],x:[0,375,750,1125],y:[0,0,0,0],z:[0,0,0,0],background:["#0277bd","#242424","#2f5aa8","#1e9cd9"]},{speed:[525,640,640,320],width:[375,750,188,375],height:[640,640,320,320],x:[0,375,1125,1125],y:[0,0,0,320],z:[0,0,0,0],background:["#0277bd","#242424","#2f5aa8","#1e9cd9"]},{speed:[525,375,375,320],width:[1125,1125,375,375],height:[320,320,320,160],x:[0,0,1125,1125],y:[0,320,0,320],z:[0,0,0,0],background:["#0277bd","#242424","#2f5aa8","#1e9cd9"]},{speed:[525,337,640,337],width:[750,375,375,188],height:[640,640,320,320],x:[0,750,1125,1125],y:[0,0,0,320],z:[0,0,0,0],background:["#0277bd","#242424","#2f5aa8","#1e9cd9"]}]},getters:{},mutations:{isTest:function(t,e){t.isTest=e.active},isMobile:function(t,e){t.isMobile=e.active},items:function(t,e){t.items=e.array},scrollY:function(t,e){t.scrollY=e.num},deltaY:function(t,e){t.deltaY=e.num},inHeight:function(t,e){t.inHeight=e.num},outHeight:function(t,e){t.outHeight=e.num},isMenu:function(t,e){t.isMenu=e.active}},actions:{}})},cf77:function(t,e,n){},e787:function(t,e,n){t.exports=n.p+"img/daniel-cheung-554578-unsplash.dafc17c9.jpg"},e895:function(t,e,n){t.exports=n.p+"img/remi-walle-86579-unsplash.19818be9.jpg"},e94a:function(t,e,n){t.exports=n.p+"img/joel-filipe-187166-unsplash.51c234ae.jpg"},ebd4:function(t,e,n){t.exports=n.p+"img/Ryu3s-stance.c2f22c3c.gif"},f039:function(t,e,n){"use strict";var i=n("1d48"),a=n.n(i);a.a}});
//# sourceMappingURL=app.34c542cb.js.map