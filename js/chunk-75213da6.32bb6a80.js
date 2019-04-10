(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-75213da6"],{"0aea":function(t,e,n){"use strict";var i=n("f993"),o=n.n(i);o.a},"5abe":function(t,e){(function(t,e){"use strict";if("IntersectionObserver"in t&&"IntersectionObserverEntry"in t&&"intersectionRatio"in t.IntersectionObserverEntry.prototype)"isIntersecting"in t.IntersectionObserverEntry.prototype||Object.defineProperty(t.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}});else{var n=[];o.prototype.THROTTLE_TIMEOUT=100,o.prototype.POLL_INTERVAL=null,o.prototype.USE_MUTATION_OBSERVER=!0,o.prototype.observe=function(t){var e=this._observationTargets.some(function(e){return e.element==t});if(!e){if(!t||1!=t.nodeType)throw new Error("target must be an Element");this._registerInstance(),this._observationTargets.push({element:t,entry:null}),this._monitorIntersections(),this._checkForIntersections()}},o.prototype.unobserve=function(t){this._observationTargets=this._observationTargets.filter(function(e){return e.element!=t}),this._observationTargets.length||(this._unmonitorIntersections(),this._unregisterInstance())},o.prototype.disconnect=function(){this._observationTargets=[],this._unmonitorIntersections(),this._unregisterInstance()},o.prototype.takeRecords=function(){var t=this._queuedEntries.slice();return this._queuedEntries=[],t},o.prototype._initThresholds=function(t){var e=t||[0];return Array.isArray(e)||(e=[e]),e.sort().filter(function(t,e,n){if("number"!=typeof t||isNaN(t)||t<0||t>1)throw new Error("threshold must be a number between 0 and 1 inclusively");return t!==n[e-1]})},o.prototype._parseRootMargin=function(t){var e=t||"0px",n=e.split(/\s+/).map(function(t){var e=/^(-?\d*\.?\d+)(px|%)$/.exec(t);if(!e)throw new Error("rootMargin must be specified in pixels or percent");return{value:parseFloat(e[1]),unit:e[2]}});return n[1]=n[1]||n[0],n[2]=n[2]||n[0],n[3]=n[3]||n[1],n},o.prototype._monitorIntersections=function(){this._monitoringIntersections||(this._monitoringIntersections=!0,this.POLL_INTERVAL?this._monitoringInterval=setInterval(this._checkForIntersections,this.POLL_INTERVAL):(a(t,"resize",this._checkForIntersections,!0),a(e,"scroll",this._checkForIntersections,!0),this.USE_MUTATION_OBSERVER&&"MutationObserver"in t&&(this._domObserver=new MutationObserver(this._checkForIntersections),this._domObserver.observe(e,{attributes:!0,childList:!0,characterData:!0,subtree:!0}))))},o.prototype._unmonitorIntersections=function(){this._monitoringIntersections&&(this._monitoringIntersections=!1,clearInterval(this._monitoringInterval),this._monitoringInterval=null,c(t,"resize",this._checkForIntersections,!0),c(e,"scroll",this._checkForIntersections,!0),this._domObserver&&(this._domObserver.disconnect(),this._domObserver=null))},o.prototype._checkForIntersections=function(){var t=this._rootIsInDom(),e=t?this._getRootRect():f();this._observationTargets.forEach(function(n){var o=n.element,s=u(o),a=this._rootContainsTarget(o),c=n.entry,l=t&&a&&this._computeTargetAndRootIntersection(o,e),f=n.entry=new i({time:r(),target:o,boundingClientRect:s,rootBounds:e,intersectionRect:l});c?t&&a?this._hasCrossedThreshold(c,f)&&this._queuedEntries.push(f):c&&c.isIntersecting&&this._queuedEntries.push(f):this._queuedEntries.push(f)},this),this._queuedEntries.length&&this._callback(this.takeRecords(),this)},o.prototype._computeTargetAndRootIntersection=function(n,i){if("none"!=t.getComputedStyle(n).display){var o=u(n),r=o,s=d(n),a=!1;while(!a){var c=null,f=1==s.nodeType?t.getComputedStyle(s):{};if("none"==f.display)return;if(s==this.root||s==e?(a=!0,c=i):s!=e.body&&s!=e.documentElement&&"visible"!=f.overflow&&(c=u(s)),c&&(r=l(c,r),!r))break;s=d(s)}return r}},o.prototype._getRootRect=function(){var t;if(this.root)t=u(this.root);else{var n=e.documentElement,i=e.body;t={top:0,left:0,right:n.clientWidth||i.clientWidth,width:n.clientWidth||i.clientWidth,bottom:n.clientHeight||i.clientHeight,height:n.clientHeight||i.clientHeight}}return this._expandRectByRootMargin(t)},o.prototype._expandRectByRootMargin=function(t){var e=this._rootMarginValues.map(function(e,n){return"px"==e.unit?e.value:e.value*(n%2?t.width:t.height)/100}),n={top:t.top-e[0],right:t.right+e[1],bottom:t.bottom+e[2],left:t.left-e[3]};return n.width=n.right-n.left,n.height=n.bottom-n.top,n},o.prototype._hasCrossedThreshold=function(t,e){var n=t&&t.isIntersecting?t.intersectionRatio||0:-1,i=e.isIntersecting?e.intersectionRatio||0:-1;if(n!==i)for(var o=0;o<this.thresholds.length;o++){var r=this.thresholds[o];if(r==n||r==i||r<n!==r<i)return!0}},o.prototype._rootIsInDom=function(){return!this.root||h(e,this.root)},o.prototype._rootContainsTarget=function(t){return h(this.root||e,t)},o.prototype._registerInstance=function(){n.indexOf(this)<0&&n.push(this)},o.prototype._unregisterInstance=function(){var t=n.indexOf(this);-1!=t&&n.splice(t,1)},t.IntersectionObserver=o,t.IntersectionObserverEntry=i}function i(t){this.time=t.time,this.target=t.target,this.rootBounds=t.rootBounds,this.boundingClientRect=t.boundingClientRect,this.intersectionRect=t.intersectionRect||f(),this.isIntersecting=!!t.intersectionRect;var e=this.boundingClientRect,n=e.width*e.height,i=this.intersectionRect,o=i.width*i.height;this.intersectionRatio=n?Number((o/n).toFixed(4)):this.isIntersecting?1:0}function o(t,e){var n=e||{};if("function"!=typeof t)throw new Error("callback must be a function");if(n.root&&1!=n.root.nodeType)throw new Error("root must be an Element");this._checkForIntersections=s(this._checkForIntersections.bind(this),this.THROTTLE_TIMEOUT),this._callback=t,this._observationTargets=[],this._queuedEntries=[],this._rootMarginValues=this._parseRootMargin(n.rootMargin),this.thresholds=this._initThresholds(n.threshold),this.root=n.root||null,this.rootMargin=this._rootMarginValues.map(function(t){return t.value+t.unit}).join(" ")}function r(){return t.performance&&performance.now&&performance.now()}function s(t,e){var n=null;return function(){n||(n=setTimeout(function(){t(),n=null},e))}}function a(t,e,n,i){"function"==typeof t.addEventListener?t.addEventListener(e,n,i||!1):"function"==typeof t.attachEvent&&t.attachEvent("on"+e,n)}function c(t,e,n,i){"function"==typeof t.removeEventListener?t.removeEventListener(e,n,i||!1):"function"==typeof t.detatchEvent&&t.detatchEvent("on"+e,n)}function l(t,e){var n=Math.max(t.top,e.top),i=Math.min(t.bottom,e.bottom),o=Math.max(t.left,e.left),r=Math.min(t.right,e.right),s=r-o,a=i-n;return s>=0&&a>=0&&{top:n,bottom:i,left:o,right:r,width:s,height:a}}function u(t){var e;try{e=t.getBoundingClientRect()}catch(n){}return e?(e.width&&e.height||(e={top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.right-e.left,height:e.bottom-e.top}),e):f()}function f(){return{top:0,bottom:0,left:0,right:0,width:0,height:0}}function h(t,e){var n=e;while(n){if(n==t)return!0;n=d(n)}return!1}function d(t){var e=t.parentNode;return e&&11==e.nodeType&&e.host?e.host:e}})(window,document)},7296:function(t,e,n){"use strict";var i=n("95c4"),o=n.n(i);o.a},"95c4":function(t,e,n){},a1d1:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:""}},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("h3",{staticClass:"headline-mobile headline white--text"},[t._v("하고싶은 거")]),n("h4",{staticClass:"caption"},[t._v("We are objective")]),n("p",[t._v("\n        유명한 개발 회사가 되고 싶은거, kosdak에 상장하는 거, 돈 잘버는 회사가 되고 싶은거\n        "),n("br"),t._v("강남에 지사 내보는 거, 제주도로 회사 옮기는거, 다니고싶은 직장에 뽑히고 싶은 거, 입사 이력서 밤새 보고 싶은 거\n        "),n("br"),t._v("Active X 없이 편하게 쓸 수 있는 프로그램을 만드는 것\n        "),n("br"),t._v("좋은 직원들 돈땜에 그만두게 하지 않는 거, 목요일 점심 퇴근 하고싶은 거\n        "),n("br"),t._v("맛없는 점심 그만 먹고 싶은거, 비싼 시X즈 사고싶은 거\n        "),n("br"),t._v("워크샵 2주동안 가보는 거\n        "),n("br"),t._v("XXX놈 안보는 거, XXX놈 그래 그놈\n        "),n("br"),t._v("아직은 이루고 싶은게 너~~무 많은 회사\n      ")]),n("p",[t._v("이런 회사가 되고 싶고, 이런 회사가 되기 위해 지금 노력 합니다.")])])],1),n("Scrollama",{attrs:{debug:!0,offset:.5,progress:!0},on:{"step-progress":function(e){var n=e.progress;return t.currStepProgress=n},"step-enter":t.stepEnterHandler,"step-exit":t.stepExitHandler}},[n("div",{staticClass:"graphic",attrs:{slot:"graphic"},slot:"graphic"},[t._v(t._s(t.currStepId)+"/"+t._s(Math.round(100*t.currStepProgress))+"%")]),t._l(t.steps,function(e){return n("div",{key:e.no,staticClass:"step",class:{"is-active":e.id==t.currStepId},style:t._scale,attrs:{"data-step-id":e.id}},[n("p",[t._v("STEP "+t._s(e.id)+" "+t._s(t.currStepProgress)+"%")])])})],2)],1)},o=[],r=(n("5abe"),n("a57f")),s={name:"App",components:{Scrollama:r["a"]},data:function(){return{dumyText:"Our talented designers, developers and project managers not only share the same passion for creating beautiful websites and products, but also capable of offering scalable solutions for all business types.",currStep:null,currStepId:null,currStepProgress:null,steps:[{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7}]}},computed:{headerStyle:function(){return{transform:"translateY(-".concat(25*this.currStepProgress,"%) scale(").concat(1-this.currStepProgress,")")}},_opacity:function(){return{opacity:this.currStepProgress}},_scale:function(){return{transform:1}}},methods:{stepEnterHandler:function(t){var e=t.element;t.direction,t.index;this.currStepId=e.dataset.stepId},stepExitHandler:function(t){t.element,t.direction,t.index;this.currStepId=null}}},a=s,c=(n("7296"),n("0aea"),n("2877")),l=n("6544"),u=n.n(l),f=n("a523"),h=n("0e8f"),d=n("a722"),p=Object(c["a"])(a,i,o,!1,null,null,null);e["default"]=p.exports;u()(p,{VContainer:f["a"],VFlex:h["a"],VLayout:d["a"]})},a57f:function(t,e,n){"use strict";(function(t){"undefined"!==typeof window?window:"undefined"!==typeof t||"undefined"!==typeof self&&self;function n(t,e){return e={exports:{}},t(e,e.exports),e.exports}var i=n(function(t,e){(function(e,n){t.exports=n()})(0,function(){function t(t){for(var e=t.length,n=[],i=0;i<e;i+=1)n.push(t[i]);return n}function e(t){return t instanceof Element?t:"string"===typeof t?document.querySelector(t):null}function n(e,n){return void 0===n&&(n=document),"string"===typeof e?t(n.querySelectorAll(e)):e instanceof Element?t([e]):e instanceof NodeList?t(e):e instanceof Array?e:[]}function i(t){var e=t.id,n=t.i;return"scrollama__debug-step--"+e+"-"+n}function o(t){var e=t.id;return"scrollama__debug-offset--"+e}function r(t){var e=t.id,n=t.offsetVal,i=t.stepClass,r=document.createElement("div");r.setAttribute("id",o({id:e})),r.setAttribute("class","scrollama__debug-offset"),r.style.position="fixed",r.style.left="0",r.style.width="100%",r.style.height="0px",r.style.borderTop="2px dashed black",r.style.zIndex="9999";var s=document.createElement("p");s.innerText='".'+i+'" trigger: '+n,s.style.fontSize="12px",s.style.fontFamily="monospace",s.style.color="black",s.style.margin="0",s.style.padding="6px",r.appendChild(s),document.body.appendChild(r)}function s(t){var e=t.id,n=t.offsetVal,i=t.stepEl,o=i[0].getAttribute("class");r({id:e,offsetVal:n,stepClass:o})}function a(t){var e=t.id,n=t.offsetMargin,i=(t.offsetVal,o({id:e})),r=document.querySelector("#"+i);r.style.top=n+"px"}function c(t){var e=t.id,n=(t.stepOffsetHeight,t.offsetMargin);t.offsetVal;a({id:e,offsetMargin:n})}function l(t){var e=t.id,n=t.index,o=t.state,r=i({id:e,i:n}),s=document.querySelector("#"+r+"_above"),a=document.querySelector("#"+r+"_below"),c="enter"===o?"block":"none";s&&(s.style.display=c),a&&(a.style.display=c)}function u(){var t=1,i={},o={},r=null,a=null,u=null,f=null,h=0,d=0,p=0,v=0,g=null,m=null,_=null,b=!1,y=!1,w=!1,E=!1,x=0,I=!1,T=!1,O=null,R=null,k=-1,S=null,M=[];function C(){var t="abcdefghijklmnopqrstuv",e=t.length,n=(new Date).getTime(),i=[0,0,0].map(function(n){return t[Math.floor(Math.random()*e)]}).join("");return""+i+n}function A(t){var e=0;if(t.offsetParent)do{e+=t.offsetTop,t=t.offsetParent}while(t);return e<0?0:e}function H(){var t=document.body,e=document.documentElement;return Math.max(t.scrollHeight,t.offsetHeight,e.clientHeight,e.scrollHeight,e.offsetHeight)}function L(t){return+t.getAttribute("data-scrollama-index")}function P(){window.pageYOffset>k?S="down":window.pageYOffset<k&&(S="up"),k=window.pageYOffset}function $(){p=window.innerHeight,v=H(),_=a?a.getBoundingClientRect():null,d=h*p,g=u?u.map(function(t){return t.offsetHeight}):[],m=u?u.map(A):[],y&&b&&rt(),w&&c({id:f,stepOffsetHeight:g,offsetMargin:d,offsetVal:h})}function z(t){t&&!y?(b&&rt(),y=!0):t||(o.top&&o.top.disconnect(),o.bottom&&o.bottom.disconnect(),o.stepAbove&&o.stepAbove.forEach(function(t){return t.disconnect()}),o.stepBelow&&o.stepBelow.forEach(function(t){return t.disconnect()}),o.stepProgress&&o.stepProgress.forEach(function(t){return t.disconnect()}),o.viewportAbove&&o.viewportAbove.forEach(function(t){return t.disconnect()}),o.viewportBelow&&o.viewportBelow.forEach(function(t){return t.disconnect()}),y=!1)}function B(t){for(var e=Math.ceil(t/x),n=[],i=1/e,o=0;o<e;o++)n.push(o*i);return n}function F(t,e){if("above"===e)for(var n=0;n<t;n++){var i=O[n];"enter"===i.state&&N(u[n],"down"),"up"===i.direction&&(V(u[n],"down",!1),N(u[n],"down"))}else if("below"===e)for(var o=O.length-1;o>t;o--){var r=O[o];"enter"===r.state&&N(u[o],"up"),"down"===r.direction&&(V(u[o],"up",!1),N(u[o],"up"))}}function V(t,e,n){void 0===n&&(n=!0);var o=L(t),r={element:t,index:o,direction:e};O[o].direction=e,O[o].state="enter",I&&n&&"down"===e&&F(o,"above"),I&&n&&"up"===e&&F(o,"below"),i.stepEnter&&"function"===typeof i.stepEnter&&!M[o]&&(i.stepEnter(r,O),w&&l({id:f,index:o,state:"enter"}),T&&(M[o]=!0)),E&&j(t,"down"===e?0:1)}function N(t,e){var n=L(t),o={element:t,index:n,direction:e};O[n].direction=e,O[n].state="exit",E&&j(t,"down"===e?1:0),i.stepExit&&"function"===typeof i.stepExit&&(i.stepExit(o,O),w&&l({id:f,index:n,state:"exit"}))}function j(t,e){var n=L(t),o={element:t,index:n,progress:e};i.stepProgress&&"function"===typeof i.stepProgress&&i.stepProgress(o)}function W(){var t={direction:S};R.direction=S,R.state="enter",i.containerEnter&&"function"===typeof i.containerEnter&&i.containerEnter(t)}function q(){var t={direction:S};R.direction=S,R.state="exit",i.containerExit&&"function"===typeof i.containerExit&&i.containerExit(t)}function X(e){P(),e.forEach(function(e){var n=e.isIntersecting,i=e.boundingClientRect,o=e.target,r=i.bottom,s=i.height,a=r-d,c=L(o),l=O[c];a>=-t&&(n&&"down"===S&&"enter"!==l.state?V(o,S):n||"up"!==S||"enter"!==l.state?!n&&a>=s&&"down"===S&&"enter"===l.state&&N(o,S):N(o,S))})}function D(e){P(),e.forEach(function(e){var n=e.isIntersecting,i=e.boundingClientRect,o=e.target,r=i.bottom,s=i.height,a=r-d,c=L(o),l=O[c];a>=-t&&a<s&&n&&"up"===S&&"enter"!==l.state?V(o,S):a<=t&&!n&&"down"===S&&"enter"===l.state&&N(o,S)})}function Y(t){P(),t.forEach(function(t){var e=t.isIntersecting,n=t.target,i=L(n),o=O[i];e&&"down"===S&&"enter"!==o.state&&"down"!==o.direction&&(V(n,"down"),N(n,"down"))})}function U(t){P(),t.forEach(function(t){var e=t.isIntersecting,n=t.target,i=L(n),o=O[i];e&&"up"===S&&"enter"!==o.state&&"up"!==o.direction&&(V(n,"up"),N(n,"up"))})}function J(e){P(),e.forEach(function(e){var n=e.isIntersecting,i=e.intersectionRatio,o=e.boundingClientRect,r=e.target,s=o.bottom,a=s-d;n&&a>=-t&&j(r,+i.toFixed(3))})}function G(e){P();var n=e[0],i=n.isIntersecting,o=n.boundingClientRect,r=(o.top,o.bottom);r>-t&&(i?W(S):"enter"===R.state&&q(S))}function K(e){P();var n=e[0],i=n.isIntersecting,o=n.boundingClientRect,r=o.top;r<t&&(i?W(S):"enter"===R.state&&q(S))}function Q(){o.top&&o.top.unobserve(r);var t={root:null,rootMargin:p+"px 0px -"+p+"px 0px",threshold:0};o.top=new IntersectionObserver(G,t),o.top.observe(r)}function Z(){o.bottom&&o.bottom.unobserve(r);var t={root:null,rootMargin:"-"+_.height+"px 0px "+_.height+"px 0px",threshold:0};o.bottom=new IntersectionObserver(K,t),o.bottom.observe(r)}function tt(){o.stepAbove&&o.stepAbove.forEach(function(t){return t.disconnect()}),o.stepAbove=u.map(function(t,e){var n=g[e],i=-p+d,o=n+"px 0px "+i+"px 0px",r={root:null,rootMargin:o,threshold:0},s=new IntersectionObserver(X,r);return s.observe(t),s})}function et(){o.stepBelow&&o.stepBelow.forEach(function(t){return t.disconnect()}),o.stepBelow=u.map(function(t,e){var n=-d,i=v-p+g[e]+d,o=n+"px 0px "+i+"px 0px",r={root:null,rootMargin:o,threshold:0},s=new IntersectionObserver(D,r);return s.observe(t),s})}function nt(){o.viewportAbove&&o.viewportAbove.forEach(function(t){return t.disconnect()}),o.viewportAbove=u.map(function(t,e){var n=m[e],i=-(p-d+g[e]),o=n+"px 0px "+i+"px 0px",r={root:null,rootMargin:o,threshold:0},s=new IntersectionObserver(Y,r);return s.observe(t),s})}function it(){o.viewportBelow&&o.viewportBelow.forEach(function(t){return t.disconnect()}),o.viewportBelow=u.map(function(t,e){var n=-(d+g[e]),i=v-m[e]-g[e]-d,o=n+"px 0px "+i+"px 0px",r={root:null,rootMargin:o,threshold:0},s=new IntersectionObserver(U,r);return s.observe(t),s})}function ot(){o.stepProgress&&o.stepProgress.forEach(function(t){return t.disconnect()}),o.stepProgress=u.map(function(t,e){var n=g[e]-d,i=-p+d,o=n+"px 0px "+i+"px 0px",r=B(g[e]),s={root:null,rootMargin:o,threshold:r},a=new IntersectionObserver(J,s);return a.observe(t),a})}function rt(){nt(),it(),tt(),et(),E&&ot(),r&&a&&(Q(),Z())}function st(){u.forEach(function(t,e){return t.setAttribute("data-scrollama-index",e)})}function at(){O=u.map(function(){return{direction:null,state:null}}),R={direction:null,state:null}}function ct(){w&&s({id:f,stepEl:u,offsetVal:h})}var lt={setup:function(t){var i=t.container,o=t.graphic,s=t.step,c=t.offset;void 0===c&&(c=.5);var l=t.progress;void 0===l&&(l=!1);var h=t.threshold;void 0===h&&(h=4);var d=t.debug;void 0===d&&(d=!1);var p=t.order;void 0===p&&(p=!0);var v=t.once;return void 0===v&&(v=!1),f=C(),u=n(s),r=i?e(i):null,a=o?e(o):null,u.length?(w=d,E=l,I=p,T=v,lt.offsetTrigger(c),x=Math.max(1,+h),b=!0,ct(),st(),at(),$(),z(!0),lt):(console.error("scrollama error: no step elements"),lt)},resize:function(){return $(),lt},enable:function(){return z(!0),lt},disable:function(){return z(!1),lt},destroy:function(){z(!1),Object.keys(i).forEach(function(t){return i[t]=null}),Object.keys(o).forEach(function(t){return o[t]=null})},offsetTrigger:function(t){return t&&!isNaN(t)?(h=Math.min(Math.max(0,t),1),lt):h},onStepEnter:function(t){return i.stepEnter=t,lt},onStepExit:function(t){return i.stepExit=t,lt},onStepProgress:function(t){return i.stepProgress=t,lt},onContainerEnter:function(t){return i.containerEnter=t,lt},onContainerExit:function(t){return i.containerExit=t,lt}};return lt}return u})});function o(){var t=window.navigator.userAgent,e=t.indexOf("MSIE ");if(e>0)return parseInt(t.substring(e+5,t.indexOf(".",e)),10);var n=t.indexOf("Trident/");if(n>0){var i=t.indexOf("rv:");return parseInt(t.substring(i+3,t.indexOf(".",i)),10)}var o=t.indexOf("Edge/");return o>0?parseInt(t.substring(o+5,t.indexOf(".",o)),10):-1}var r=void 0;function s(){s.init||(s.init=!0,r=-1!==o())}var a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"resize-observer",attrs:{tabindex:"-1"}})},staticRenderFns:[],_scopeId:"data-v-b329ee4c",name:"resize-observer",methods:{compareAndNotify:function(){this._w===this.$el.offsetWidth&&this._h===this.$el.offsetHeight||(this._w=this.$el.offsetWidth,this._h=this.$el.offsetHeight,this.$emit("notify"))},addResizeHandlers:function(){this._resizeObject.contentDocument.defaultView.addEventListener("resize",this.compareAndNotify),this.compareAndNotify()},removeResizeHandlers:function(){this._resizeObject&&this._resizeObject.onload&&(!r&&this._resizeObject.contentDocument&&this._resizeObject.contentDocument.defaultView.removeEventListener("resize",this.compareAndNotify),delete this._resizeObject.onload)}},mounted:function(){var t=this;s(),this.$nextTick(function(){t._w=t.$el.offsetWidth,t._h=t.$el.offsetHeight});var e=document.createElement("object");this._resizeObject=e,e.setAttribute("aria-hidden","true"),e.setAttribute("tabindex",-1),e.onload=this.addResizeHandlers,e.type="text/html",r&&this.$el.appendChild(e),e.data="about:blank",r||this.$el.appendChild(e)},beforeDestroy:function(){this.removeResizeHandlers()}};function c(t){t.component("resize-observer",a),t.component("ResizeObserver",a)}var l={version:"0.4.5",install:c},u=null;"undefined"!==typeof window?u=window.Vue:"undefined"!==typeof t&&(u=t.Vue),u&&u.use(l);var f=n(function(t){(function(e,n){var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var r=!1,s="undefined"!==typeof e;s&&e.getComputedStyle?function(){var t=n.createElement("div");["","-webkit-","-moz-","-ms-"].some(function(e){try{t.style.position=e+"sticky"}catch(n){}return""!=t.style.position})&&(r=!0)}():r=!0;var a=!1,c="undefined"!==typeof ShadowRoot,l={top:null,left:null},u=[];function f(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])}function h(t){return parseFloat(t)||0}function d(t){var e=0;while(t)e+=t.offsetTop,t=t.offsetParent;return e}var p=function(){function t(e){if(o(this,t),!(e instanceof HTMLElement))throw new Error("First argument must be HTMLElement");if(u.some(function(t){return t._node===e}))throw new Error("Stickyfill is already applied to this node");this._node=e,this._stickyMode=null,this._active=!1,u.push(this),this.refresh()}return i(t,[{key:"refresh",value:function(){if(!r&&!this._removed){this._active&&this._deactivate();var t=this._node,i=getComputedStyle(t),o={position:i.position,top:i.top,display:i.display,marginTop:i.marginTop,marginBottom:i.marginBottom,marginLeft:i.marginLeft,marginRight:i.marginRight,cssFloat:i.cssFloat};if(!isNaN(parseFloat(o.top))&&"table-cell"!=o.display&&"none"!=o.display){this._active=!0;var s=t.style.position;"sticky"!=i.position&&"-webkit-sticky"!=i.position||(t.style.position="static");var a=t.parentNode,l=c&&a instanceof ShadowRoot?a.host:a,u=t.getBoundingClientRect(),p=l.getBoundingClientRect(),v=getComputedStyle(l);this._parent={node:l,styles:{position:l.style.position},offsetHeight:l.offsetHeight},this._offsetToWindow={left:u.left,right:n.documentElement.clientWidth-u.right},this._offsetToParent={top:u.top-p.top-h(v.borderTopWidth),left:u.left-p.left-h(v.borderLeftWidth),right:-u.right+p.right-h(v.borderRightWidth)},this._styles={position:s,top:t.style.top,bottom:t.style.bottom,left:t.style.left,right:t.style.right,width:t.style.width,marginTop:t.style.marginTop,marginLeft:t.style.marginLeft,marginRight:t.style.marginRight};var g=h(o.top);this._limits={start:u.top+e.pageYOffset-g,end:p.top+e.pageYOffset+l.offsetHeight-h(v.borderBottomWidth)-t.offsetHeight-g-h(o.marginBottom)};var m=v.position;"absolute"!=m&&"relative"!=m&&(l.style.position="relative"),this._recalcPosition();var _=this._clone={};_.node=n.createElement("div"),f(_.node.style,{width:u.right-u.left+"px",height:u.bottom-u.top+"px",marginTop:o.marginTop,marginBottom:o.marginBottom,marginLeft:o.marginLeft,marginRight:o.marginRight,cssFloat:o.cssFloat,padding:0,border:0,borderSpacing:0,fontSize:"1em",position:"static"}),a.insertBefore(_.node,t),_.docOffsetTop=d(_.node)}}}},{key:"_recalcPosition",value:function(){if(this._active&&!this._removed){var t=l.top<=this._limits.start?"start":l.top>=this._limits.end?"end":"middle";if(this._stickyMode!=t){switch(t){case"start":f(this._node.style,{position:"absolute",left:this._offsetToParent.left+"px",right:this._offsetToParent.right+"px",top:this._offsetToParent.top+"px",bottom:"auto",width:"auto",marginLeft:0,marginRight:0,marginTop:0});break;case"middle":f(this._node.style,{position:"fixed",left:this._offsetToWindow.left+"px",right:this._offsetToWindow.right+"px",top:this._styles.top,bottom:"auto",width:"auto",marginLeft:0,marginRight:0,marginTop:0});break;case"end":f(this._node.style,{position:"absolute",left:this._offsetToParent.left+"px",right:this._offsetToParent.right+"px",top:"auto",bottom:0,width:"auto",marginLeft:0,marginRight:0});break}this._stickyMode=t}}}},{key:"_fastCheck",value:function(){this._active&&!this._removed&&(Math.abs(d(this._clone.node)-this._clone.docOffsetTop)>1||Math.abs(this._parent.node.offsetHeight-this._parent.offsetHeight)>1)&&this.refresh()}},{key:"_deactivate",value:function(){var t=this;this._active&&!this._removed&&(this._clone.node.parentNode.removeChild(this._clone.node),delete this._clone,f(this._node.style,this._styles),delete this._styles,u.some(function(e){return e!==t&&e._parent&&e._parent.node===t._parent.node})||f(this._parent.node.style,this._parent.styles),delete this._parent,this._stickyMode=null,this._active=!1,delete this._offsetToWindow,delete this._offsetToParent,delete this._limits)}},{key:"remove",value:function(){var t=this;this._deactivate(),u.some(function(e,n){if(e._node===t._node)return u.splice(n,1),!0}),this._removed=!0}}]),t}(),v={stickies:u,Sticky:p,forceSticky:function(){r=!1,g(),this.refreshAll()},addOne:function(t){if(!(t instanceof HTMLElement)){if(!t.length||!t[0])return;t=t[0]}for(var e=0;e<u.length;e++)if(u[e]._node===t)return u[e];return new p(t)},add:function(t){if(t instanceof HTMLElement&&(t=[t]),t.length){for(var e=[],n=function(n){var i=t[n];return i instanceof HTMLElement?u.some(function(t){if(t._node===i)return e.push(t),!0})?"continue":void e.push(new p(i)):(e.push(void 0),"continue")},i=0;i<t.length;i++)n(i);return e}},refreshAll:function(){u.forEach(function(t){return t.refresh()})},removeOne:function(t){if(!(t instanceof HTMLElement)){if(!t.length||!t[0])return;t=t[0]}u.some(function(e){if(e._node===t)return e.remove(),!0})},remove:function(t){if(t instanceof HTMLElement&&(t=[t]),t.length)for(var e=function(e){var n=t[e];u.some(function(t){if(t._node===n)return t.remove(),!0})},n=0;n<t.length;n++)e(n)},removeAll:function(){while(u.length)u[0].remove()}};function g(){if(!a){a=!0,r(),e.addEventListener("scroll",r),e.addEventListener("resize",v.refreshAll),e.addEventListener("orientationchange",v.refreshAll);var t=void 0,i=void 0,o=void 0;"hidden"in n?(i="hidden",o="visibilitychange"):"webkitHidden"in n&&(i="webkitHidden",o="webkitvisibilitychange"),o?(n[i]||s(),n.addEventListener(o,function(){n[i]?c():s()})):s()}function r(){e.pageXOffset!=l.left?(l.top=e.pageYOffset,l.left=e.pageXOffset,v.refreshAll()):e.pageYOffset!=l.top&&(l.top=e.pageYOffset,l.left=e.pageXOffset,u.forEach(function(t){return t._recalcPosition()}))}function s(){t=setInterval(function(){u.forEach(function(t){return t._fastCheck()})},500)}function c(){clearInterval(t)}}r||g(),t.exports?t.exports=v:s&&(e.Stickyfill=v)})(window,document)}),h={name:"Scrollama",components:{ResizeObserver:a},props:{id:{type:String,validator:function(t){return!/\s/.test(t)},default:function(){return Math.random().toString(36).substr(2,9)}}},mounted:function(){f.add(this.$refs["scrollama-graphic"]),this.scroller=i(),this.setup()},beforeDestroy:function(){this.scroller.destroy()},computed:{opts:function(){return Object.assign({},this.$attrs,{step:"#scrollama-steps-"+this.id+">div",container:"#scrollama-container-"+this.id,graphic:"#scrollama-graphic-"+this.id})}},methods:{setup:function(){var t=this;this.scroller.destroy(),this.scroller.setup(this.opts),this.$listeners["step-progress"]&&this.scroller.onStepProgress(function(e){t.$emit("step-progress",e)}),this.$listeners["step-enter"]&&this.scroller.onStepEnter(function(e){t.$emit("step-enter",e)}),this.$listeners["step-exit"]&&this.scroller.onStepExit(function(e){t.$emit("step-exit",e)}),this.$listeners["container-enter"]&&this.scroller.onContainerEnter(function(e){t.$emit("container-enter",e)}),this.$listeners["container-exit"]&&this.scroller.onContainerExit(function(e){t.$emit("container-exit",e)}),this.scroller.resize()},handleResize:function(){this.scroller.resize()}}};function d(t,e,n,i,o,r,s,a,c,l){"boolean"!==typeof s&&(c=a,a=s,s=!1);var u,f="function"===typeof n?n.options:n;if(t&&t.render&&(f.render=t.render,f.staticRenderFns=t.staticRenderFns,f._compiled=!0,o&&(f.functional=!0)),i&&(f._scopeId=i),r?(u=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,c(t)),t&&t._registeredComponents&&t._registeredComponents.add(r)},f._ssrRegister=u):e&&(u=s?function(){e.call(this,l(this.$root.$options.shadowRoot))}:function(t){e.call(this,a(t))}),u)if(f.functional){var h=f.render;f.render=function(t,e){return u.call(e),h(t,e)}}else{var d=f.beforeCreate;f.beforeCreate=d?[].concat(d,u):[u]}return n}var p=d,v=h,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"scrollama-container",class:{"with-graphic":t.$slots.graphic},attrs:{id:"scrollama-container-"+t.id}},[n("div",{ref:"scrollama-graphic",staticClass:"scrollama-graphic",attrs:{id:"scrollama-graphic-"+t.id}},[t._t("graphic")],2),t._v(" "),n("div",{staticClass:"scrollama-steps",attrs:{id:"scrollama-steps-"+t.id}},[t._t("default")],2),t._v(" "),n("resize-observer",{on:{notify:t.handleResize}})],1)},m=[];g._withStripped=!0;var _=void 0,b=void 0,y=void 0,w=!1,E=p({render:g,staticRenderFns:m},_,v,b,w,y,void 0,void 0);function x(t){x.installed||(x.installed=!0,t.component("Scrollama",E))}var I={install:x},T=null;"undefined"!==typeof window?T=window.Vue:"undefined"!==typeof t&&(T=t.Vue),T&&T.use(I),e["a"]=E}).call(this,n("c8ba"))},f993:function(t,e,n){}}]);
//# sourceMappingURL=chunk-75213da6.32bb6a80.js.map