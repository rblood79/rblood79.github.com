(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a3a4917e"],{"12b2":function(t,e,i){"use strict";var s=i("2b0e");e["a"]=s["default"].extend({name:"v-card-title",functional:!0,props:{primaryTitle:Boolean},render:function(t,e){var i=e.data,s=e.props,a=e.children;return i.staticClass=("v-card__title "+(i.staticClass||"")).trim(),s.primaryTitle&&(i.staticClass+=" v-card__title--primary"),t("div",i,a)}})},"23bfd":function(t,e,i){"use strict";var s=i("80d2"),a=i("2b0e");e["a"]=a["default"].extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles:function(){var t={},e=Object(s["b"])(this.height),i=Object(s["b"])(this.minHeight),a=Object(s["b"])(this.minWidth),r=Object(s["b"])(this.maxHeight),n=Object(s["b"])(this.maxWidth),o=Object(s["b"])(this.width);return e&&(t.height=e),i&&(t.minHeight=i),a&&(t.minWidth=a),r&&(t.maxHeight=r),n&&(t.maxWidth=n),o&&(t.width=o),t}}})},"253d":function(t,e,i){},"46b4":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{attrs:{fluid:""}},[s("v-layout",{attrs:{row:"",wrap:""}},t._l(t.items,function(e){var i;return s("v-flex",t._b({key:e.idx,attrs:{"d-flex":""}},"v-flex",(i={},i["xs"+e.flex[0]+" sm"+e.flex[1]]=!0,i),!1),[s("v-card",{attrs:{flat:""}},[s("v-card-title",{attrs:{"primary-title":""}},[s("div",[e.title?s("div",{staticClass:"headline primary--text",domProps:{textContent:t._s(e.title)}},[t._v("title")]):t._e(),e.titleSub?s("span",{staticClass:"grey--text",domProps:{textContent:t._s(e.titleSub)}}):t._e()])]),e.src?s("v-img",{attrs:{src:e.src,"lazy-src":e.src,"aspect-ratio":"1",height:e.height}}):t._e(),s("v-card-text",{domProps:{textContent:t._s(e.article)}})],1)],1)}),1),s("v-layout",{attrs:{row:"",wrap:""}},[s("img",{attrs:{src:i("f47b")}})])],1)},a=[],r={components:{},data:function(){return{items:[{idx:0,flex:[12,12],title:"Application",titleSub:"one source multiple used",article:"accurate colors. On a technical level, it uses a combination of factory-applied corrections (specifically, gamma correction and color temperature correction) and software tuning to give you a display with consistent, accurate colors, no matter which ASUS product you are using.",src:i("98e5"),height:320},{idx:1,flex:[12,12],title:"Total service",titleSub:"one source multiple used",article:"",src:i("c5fa"),height:320},{idx:2,flex:[12,6],title:"Logistics System",titleSub:"Hardware, Perfected.",article:"It’s an unavoidable fact that no two LCD panels show exactly the same colors. This is due to many factors that can’t be eliminated completely during manufacturing, such as the liquid crystal chemistry, backlight variations and normal manufacturing tolerances. However, these differences can be minimized by careful quality control and fine-tuning of the display’s parameters. This is exactly what ASUS Splendid does: put simply, it ensures that all our display panels show identical, accurate colors. On a technical level, it uses a combination of factory-applied corrections (specifically, gamma correction and color temperature correction) and software tuning to give you a display with consistent, accurate colors, no matter which ASUS product you are using.",src:"https://dlcdnimgs.asus.com/websites/global/productcustomizedTab/1343/V6/images/head-sonicmaster.jpg",height:640},{idx:3,flex:[12,6],title:"Desktop Application",titleSub:"Perfect Images, Always.",article:"Tru2Life Video is an exclusive video enhancement technology that’s similar to that found in high-end TVs. It uses intelligent software algorithms to optimize the sharpness and contrast of every video frame, so that videos look clearer, more detailed and more realistic. Every time your computer sends a frame of video to the screen, ASUS Tru2Life Video analyses every single pixel in the frame and optimizes its brightness and sharpness individually.",src:"https://dlcdnimgs.asus.com/websites/global/productcustomizedTab/1343/V6/images/zenanywhere/img-kv.jpg",height:320},{idx:4,flex:[12,6],title:"Mobile Application",titleSub:"Access Your PC Anywhere",article:"ZenAnywhere is an easy-to-use online service that allows secure remote access to your personal data and webcam on your ASUS PC. It even allows you to remotely wake your PC, put it in sleep mode, or shut it down. ZenAnywhere is easy to set up — simply create an account, sign in and you’re ready to go!",src:"https://dlcdnimgs.asus.com/websites/global/productcustomizedTab/1343/V6/images/eyecare/reducesblue-before.jpg",height:320},{idx:5,flex:[12,6],title:"CMS",titleSub:"Access Your PC Anywhere",article:"GIFTBOX is a portal that gives you access to the most popular apps available, including apps from the Microsoft Store, classic desktop apps and web apps. ASUS GIFTBOX not only offers a wide and diverse range of useful apps covering almost everything you need, but also gives you exclusive free trials, discounts and deals on premium apps, for the best ASUS experience! It gives you the power to personalize your laptop with the apps you know and love, so your laptop can reflect who you are and what you like, right from the start. they've renamed it.",src:"https://dlcdnimgs.asus.com/websites/global/productcustomizedTab/1343/V6/images/head-giftbox.jpg",height:320}]}},mounted:function(){},methods:{test:function(){}}},n=r,o=i("2877"),c=i("6544"),l=i.n(c),d=i("b0af"),u=i("99d9"),h=i("12b2"),m=i("a523"),p=i("0e8f"),g=i("adda"),f=i("a722"),v=Object(o["a"])(n,s,a,!1,null,null,null);e["default"]=v.exports;l()(v,{VCard:d["a"],VCardText:u["a"],VCardTitle:h["a"],VContainer:m["a"],VFlex:p["a"],VImg:g["a"],VLayout:f["a"]})},"4c34":function(t,e,i){},"4c94":function(t,e,i){},"99d9":function(t,e,i){"use strict";var s=i("80d2"),a=i("b0af"),r=i("adda"),n=i("d9bd"),o=r["a"].extend({name:"v-card-media",mounted:function(){Object(n["d"])("v-card-media",this.src?"v-img":"v-responsive",this)}}),c=i("12b2");i.d(e,"a",function(){return d});var l=Object(s["d"])("v-card__actions"),d=Object(s["d"])("v-card__text");a["a"],c["a"]},adda:function(t,e,i){"use strict";i("253d"),i("4c34");var s=i("23bfd"),a=i("58df"),r=Object(a["a"])(s["a"]).extend({name:"v-responsive",props:{aspectRatio:[String,Number]},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content"},this.$slots.default)}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),n=r,o=i("d9bd");e["a"]=n.extend({name:"v-img",props:{alt:String,contain:Boolean,src:{type:[String,Object],default:""},gradient:String,lazySrc:String,srcset:String,sizes:String,position:{type:String,default:"center center"},transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0}},computed:{computedAspectRatio:function(){return this.normalisedSrc.aspect},normalisedSrc:function(){return"string"===typeof this.src?{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||this.calculatedAspectRatio)}:{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect||this.calculatedAspectRatio)}},__cachedImage:function(){if(!this.normalisedSrc.src&&!this.normalisedSrc.lazySrc)return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient("+this.gradient+")"),e&&t.push('url("'+e+'")');var i=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[i]):i}},watch:{src:function(){this.isLoading?this.loadImage():this.init()},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(){if(this.normalisedSrc.lazySrc){var t=new Image;t.src=this.normalisedSrc.lazySrc,this.pollForSize(t,null)}this.normalisedSrc.src&&this.loadImage()},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src)},onError:function(){Object(o["a"])("Image load failed\n\nsrc: "+this.normalisedSrc.src,this),this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,e=new Image;this.image=e,e.onload=function(){e.decode?e.decode().catch(function(e){Object(o["c"])("Failed to decode image, trying to render anyway\n\nsrc: "+t.normalisedSrc.src+(e.message?"\nOriginal error: "+e.message:""),t)}).then(t.onLoad):t.onLoad()},e.onerror=this.onError,e.src=this.normalisedSrc.src,this.sizes&&(e.sizes=this.sizes),this.normalisedSrc.srcset&&(e.srcset=this.normalisedSrc.srcset),this.aspectRatio||this.pollForSize(e),this.getSrc()},pollForSize:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,s=function s(){var a=t.naturalHeight,r=t.naturalWidth;a||r?e.calculatedAspectRatio=r/a:null!=i&&setTimeout(s,i)};s()},__genPlaceholder:function(){if(this.$slots.placeholder){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{attrs:{name:this.transition}},t):t[0]}}},render:function(t){var e=n.options.render.call(this,t);return e.data.staticClass+=" v-image",e.data.attrs={role:this.alt?"img":void 0,"aria-label":this.alt},e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,e.data,e.children)}})},b0af:function(t,e,i){"use strict";i("4c94"),i("d0e7");var s=i("b64a"),a=i("2b0e");function r(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var n=a["default"].extend({name:"elevatable",props:{elevation:[Number,String]},computed:{computedElevation:function(){return this.elevation},elevationClasses:function(){return this.computedElevation?r({},"elevation-"+this.computedElevation,!0):{}}}}),o=i("23bfd"),c=i("6a18"),l=i("58df"),d=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s])}return t},u=Object(l["a"])(s["a"],n,o["a"],c["a"]).extend({name:"v-sheet",props:{tag:{type:String,default:"div"},tile:Boolean},computed:{classes:function(){return d({"v-sheet":!0,"v-sheet--tile":this.tile},this.themeClasses,this.elevationClasses)},styles:function(){return this.measurableStyles}},render:function(t){var e={class:this.classes,style:this.styles,on:this.$listeners};return t(this.tag,this.setBackgroundColor(this.color,e),this.$slots.default)}}),h=u,m=i("0d01"),p=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s])}return t};e["a"]=Object(l["a"])(m["a"],h).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,raised:Boolean},computed:{classes:function(){return p({"v-card":!0,"v-card--flat":this.flat,"v-card--hover":this.hover},h.options.computed.classes.call(this))},styles:function(){var t=p({},h.options.computed.styles.call(this));return this.img&&(t.background='url("'+this.img+'") center center / cover no-repeat'),t}},render:function(t){var e=this.generateRouteLink(this.classes),i=e.tag,s=e.data;return s.style=this.styles,t(i,this.setBackgroundColor(this.color,s),this.$slots.default)}})},c5fa:function(t,e,i){t.exports=i.p+"img/amith-nair-1154456-unsplash.7ad90866.jpg"},d0e7:function(t,e,i){},f47b:function(t,e,i){t.exports=i.p+"img/mac.466677d7.png"}}]);
//# sourceMappingURL=chunk-a3a4917e.7cf48739.js.map