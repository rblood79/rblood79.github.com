(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d5b582aa"],{"23bfd":function(t,e,i){"use strict";var s=i("80d2"),a=i("2b0e");e["a"]=a["default"].extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles:function(){var t={},e=Object(s["b"])(this.height),i=Object(s["b"])(this.minHeight),a=Object(s["b"])(this.minWidth),r=Object(s["b"])(this.maxHeight),n=Object(s["b"])(this.maxWidth),c=Object(s["b"])(this.width);return e&&(t.height=e),i&&(t.minHeight=i),a&&(t.minWidth=a),r&&(t.maxHeight=r),n&&(t.maxWidth=n),c&&(t.width=c),t}}})},"253d":function(t,e,i){},"4c34":function(t,e,i){},"4c94":function(t,e,i){},"63b1":function(t,e,i){"use strict";var s=i("efb7"),a=i.n(s);a.a},adda:function(t,e,i){"use strict";i("253d"),i("4c34");var s=i("23bfd"),a=i("58df"),r=Object(a["a"])(s["a"]).extend({name:"v-responsive",props:{aspectRatio:[String,Number]},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content"},this.$slots.default)}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),n=r,c=i("d9bd");e["a"]=n.extend({name:"v-img",props:{alt:String,contain:Boolean,src:{type:[String,Object],default:""},gradient:String,lazySrc:String,srcset:String,sizes:String,position:{type:String,default:"center center"},transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0}},computed:{computedAspectRatio:function(){return this.normalisedSrc.aspect},normalisedSrc:function(){return"string"===typeof this.src?{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||this.calculatedAspectRatio)}:{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect||this.calculatedAspectRatio)}},__cachedImage:function(){if(!this.normalisedSrc.src&&!this.normalisedSrc.lazySrc)return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient("+this.gradient+")"),e&&t.push('url("'+e+'")');var i=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[i]):i}},watch:{src:function(){this.isLoading?this.loadImage():this.init()},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(){if(this.normalisedSrc.lazySrc){var t=new Image;t.src=this.normalisedSrc.lazySrc,this.pollForSize(t,null)}this.normalisedSrc.src&&this.loadImage()},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src)},onError:function(){Object(c["a"])("Image load failed\n\nsrc: "+this.normalisedSrc.src,this),this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,e=new Image;this.image=e,e.onload=function(){e.decode?e.decode().catch(function(e){Object(c["c"])("Failed to decode image, trying to render anyway\n\nsrc: "+t.normalisedSrc.src+(e.message?"\nOriginal error: "+e.message:""),t)}).then(t.onLoad):t.onLoad()},e.onerror=this.onError,e.src=this.normalisedSrc.src,this.sizes&&(e.sizes=this.sizes),this.normalisedSrc.srcset&&(e.srcset=this.normalisedSrc.srcset),this.aspectRatio||this.pollForSize(e),this.getSrc()},pollForSize:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,s=function s(){var a=t.naturalHeight,r=t.naturalWidth;a||r?e.calculatedAspectRatio=r/a:null!=i&&setTimeout(s,i)};s()},__genPlaceholder:function(){if(this.$slots.placeholder){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{attrs:{name:this.transition}},t):t[0]}}},render:function(t){var e=n.options.render.call(this,t);return e.data.staticClass+=" v-image",e.data.attrs={role:this.alt?"img":void 0,"aria-label":this.alt},e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,e.data,e.children)}})},b0af:function(t,e,i){"use strict";i("4c94"),i("d0e7");var s=i("b64a"),a=i("2b0e");function r(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var n=a["default"].extend({name:"elevatable",props:{elevation:[Number,String]},computed:{computedElevation:function(){return this.elevation},elevationClasses:function(){return this.computedElevation?r({},"elevation-"+this.computedElevation,!0):{}}}}),c=i("23bfd"),o=i("6a18"),l=i("58df"),h=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s])}return t},d=Object(l["a"])(s["a"],n,c["a"],o["a"]).extend({name:"v-sheet",props:{tag:{type:String,default:"div"},tile:Boolean},computed:{classes:function(){return h({"v-sheet":!0,"v-sheet--tile":this.tile},this.themeClasses,this.elevationClasses)},styles:function(){return this.measurableStyles}},render:function(t){var e={class:this.classes,style:this.styles,on:this.$listeners};return t(this.tag,this.setBackgroundColor(this.color,e),this.$slots.default)}}),u=d,m=i("0d01"),g=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s])}return t};e["a"]=Object(l["a"])(m["a"],u).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,raised:Boolean},computed:{classes:function(){return g({"v-card":!0,"v-card--flat":this.flat,"v-card--hover":this.hover},u.options.computed.classes.call(this))},styles:function(){var t=g({},u.options.computed.styles.call(this));return this.img&&(t.background='url("'+this.img+'") center center / cover no-repeat'),t}},render:function(t){var e=this.generateRouteLink(this.classes),i=e.tag,s=e.data;return s.style=this.styles,t(i,this.setBackgroundColor(this.color,s),this.$slots.default)}})},d0e7:function(t,e,i){},efb7:function(t,e,i){},f3e7:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{staticClass:"horizental",attrs:{fluid:""}},[i("v-layout",{attrs:{row:"",wrap:""}},t._l(t.items,function(e){var s;return i("v-flex",t._b({key:e.idx,attrs:{"d-flex":""}},"v-flex",(s={},s["xs"+e.flex[0]+" sm"+e.flex[1]]=!0,s),!1),[i("v-card",{attrs:{flat:""}},[i("v-container",{attrs:{fluid:""}},[i("div",{staticClass:"header"},[e.title?i("h2",{staticClass:"headline-mobile headline secondary--text",domProps:{textContent:t._s(e.title)}}):t._e(),e.titleSub?i("h3",{staticClass:"caption white--text",domProps:{textContent:t._s(e.titleSub)}}):t._e()])]),e.src?i("v-img",{attrs:{src:e.src,"lazy-src":e.src,"aspect-ratio":"1",height:e.height}}):t._e(),e.article?i("p",{staticClass:"article",domProps:{textContent:t._s(e.article)}}):t._e()],1)],1)}),1)],1)},a=[],r={components:{},data:function(){return{items:[{idx:0,flex:[12,12],title:"걸어온 길",titleSub:"do the best way",article:"2013년 추운 어느 겨울... 좋은 회사 찾아 헤메이는 한남자가 있었다 그는 여러 회사를 가봤지만 포기하고, 경남 진주에 뿌리 내리고 한국항공우주산업을 주거래처로 엔진관리시스템 개발/운영을 시작으로 현재까지 공군/해군에 까지 손을 뻗치고 있고 ATTO report라고 보고서제작 솔루션도 제작판매 하고 현재 웹제작 플랫폼도 만들고 있다.",src:i("e787"),height:320}]}},mounted:function(){},methods:{}},n=r,c=(i("63b1"),i("2877")),o=i("6544"),l=i.n(o),h=i("b0af"),d=i("a523"),u=i("0e8f"),m=i("adda"),g=i("a722"),f=Object(c["a"])(n,s,a,!1,null,"0810f13a",null);e["default"]=f.exports;l()(f,{VCard:h["a"],VContainer:d["a"],VFlex:u["a"],VImg:m["a"],VLayout:g["a"]})}}]);
//# sourceMappingURL=chunk-d5b582aa.72c13e99.js.map