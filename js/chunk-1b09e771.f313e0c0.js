(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1b09e771"],{"0d00":function(t,e,i){t.exports=i.p+"img/Balrog-Dizzy.2c40c1b5.gif"},"12b2":function(t,e,i){"use strict";var n=i("2b0e");e["a"]=n["default"].extend({name:"v-card-title",functional:!0,props:{primaryTitle:Boolean},render:function(t,e){var i=e.data,n=e.props,a=e.children;return i.staticClass=("v-card__title "+(i.staticClass||"")).trim(),n.primaryTitle&&(i.staticClass+=" v-card__title--primary"),t("div",i,a)}})},"150c":function(t,e,i){t.exports=i.p+"img/Dhalsim-Dizzy.a0cc87e5.gif"},"15a5":function(t,e,i){t.exports=i.p+"img/Zangief-mech-walk.86eb1b47.gif"},"1dff":function(t,e,i){"use strict";var n=i("d1e8"),a=i.n(n);a.a},"23bfd":function(t,e,i){"use strict";var n=i("80d2"),a=i("2b0e");e["a"]=a["default"].extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles:function(){var t={},e=Object(n["c"])(this.height),i=Object(n["c"])(this.minHeight),a=Object(n["c"])(this.minWidth),r=Object(n["c"])(this.maxHeight),s=Object(n["c"])(this.maxWidth),o=Object(n["c"])(this.width);return e&&(t.height=e),i&&(t.minHeight=i),a&&(t.minWidth=a),r&&(t.maxHeight=r),s&&(t.maxWidth=s),o&&(t.width=o),t}}})},"4c94":function(t,e,i){},"4e52":function(t,e,i){t.exports=i.p+"img/Zangief-Dizzy.9c79d0b2.gif"},"7eda":function(t,e,i){t.exports=i.p+"img/Makoto-Dizzy.5859d3bc.gif"},"7fc1":function(t,e,i){t.exports=i.p+"img/Chunri-Dizzy.d4a493a8.gif"},"87f5":function(t,e,i){t.exports=i.p+"img/Sodom-Dizzy.96aa37d6.gif"},aa4b:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{staticClass:"notfound",attrs:{fluid:""}},[i("v-layout",{attrs:{row:"",wrap:""}},t._l(t.items,function(e){var n;return i("v-flex",t._b({key:e.idx,attrs:{"d-flex":""}},"v-flex",(n={},n["xs"+e.flex]=!0,n),!1),[i("v-card",{attrs:{flat:""}},[i("v-card-title",{attrs:{"secondary-title":""}},[i("div",[e.title?i("div",{staticClass:"display-3 secondary--text",domProps:{textContent:t._s(e.title)}},[t._v("title")]):t._e(),e.titleSub?i("span",{staticClass:"grey--text",domProps:{textContent:t._s(e.titleSub)}}):t._e()])]),i("div",{staticClass:"v-image",on:{click:t.fn_random}},[i("img",{attrs:{src:t.images[t.num],"lazy-src":t.images[t.num]}})])],1)],1)}),1)],1)},a=[],r={components:{},props:{id:String,title:String,titleSub:String,article:String,tag:String,src:String,path:String},data:function(){return{num:0,key:!1,images:[i("0d00"),i("c6de"),i("7fc1"),i("150c"),i("7eda"),i("cf35"),i("87f5"),i("4e52"),i("15a5")],items:[{idx:0,flex:"12",title:"404 page not found",titleSub:"The requested URL / was not found on this server.",article:"",src:i("ebd4")}]}},mounted:function(){this.fn_random()},methods:{fn_random:function(){this.num=Math.round(Math.random()*(this.images.length-1))}}},s=r,o=(i("1dff"),i("2877")),c=i("6544"),l=i.n(c),u=i("b0af"),d=i("12b2"),f=i("a523"),h=i("0e8f"),m=i("a722"),g=Object(o["a"])(s,n,a,!1,null,"80bfd92e",null);e["default"]=g.exports;l()(g,{VCard:u["a"],VCardTitle:d["a"],VContainer:f["a"],VFlex:h["a"],VLayout:m["a"]})},b0af:function(t,e,i){"use strict";i("4c94"),i("d0e7");var n=i("b64a"),a=i("2b0e");function r(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var s=a["default"].extend({name:"elevatable",props:{elevation:[Number,String]},computed:{computedElevation:function(){return this.elevation},elevationClasses:function(){return this.computedElevation?r({},"elevation-"+this.computedElevation,!0):{}}}}),o=i("23bfd"),c=i("6a18"),l=i("58df"),u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},d=Object(l["a"])(n["a"],s,o["a"],c["a"]).extend({name:"v-sheet",props:{tag:{type:String,default:"div"},tile:Boolean},computed:{classes:function(){return u({"v-sheet":!0,"v-sheet--tile":this.tile},this.themeClasses,this.elevationClasses)},styles:function(){return this.measurableStyles}},render:function(t){var e={class:this.classes,style:this.styles,on:this.$listeners};return t(this.tag,this.setBackgroundColor(this.color,e),this.$slots.default)}}),f=d,h=i("0d01"),m=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t};e["a"]=Object(l["a"])(h["a"],f).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,raised:Boolean},computed:{classes:function(){return m({"v-card":!0,"v-card--flat":this.flat,"v-card--hover":this.hover},f.options.computed.classes.call(this))},styles:function(){var t=m({},f.options.computed.styles.call(this));return this.img&&(t.background='url("'+this.img+'") center center / cover no-repeat'),t}},render:function(t){var e=this.generateRouteLink(this.classes),i=e.tag,n=e.data;return n.style=this.styles,t(i,this.setBackgroundColor(this.color,n),this.$slots.default)}})},c6de:function(t,e,i){t.exports=i.p+"img/Blanka-Dizzy.d5d49245.gif"},cf35:function(t,e,i){t.exports=i.p+"img/Makoto.601b3fe6.webp"},d0e7:function(t,e,i){},d1e8:function(t,e,i){}}]);
//# sourceMappingURL=chunk-1b09e771.f313e0c0.js.map