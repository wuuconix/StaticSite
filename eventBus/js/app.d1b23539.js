(function(t){function e(e){for(var c,u,a=e[0],i=e[1],d=e[2],f=0,p=[];f<a.length;f++)u=a[f],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&p.push(o[u][0]),o[u]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(t[c]=i[c]);s&&s(e);while(p.length)p.shift()();return r.push.apply(r,d||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],c=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(c=!1)}c&&(r.splice(e--,1),t=u(u.s=n[0]))}return t}var c={},o={app:0},r=[];function u(e){if(c[e])return c[e].exports;var n=c[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=t,u.c=c,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var c in t)u.d(n,c,function(e){return t[e]}.bind(null,c));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],i=a.push.bind(a);a.push=e,a=a.slice();for(var d=0;d<a.length;d++)e(a[d]);var s=i;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0def":function(t,e,n){},2692:function(t,e,n){"use strict";n("e4ca")},"2f90":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),o={class:"wrapper"};function r(t,e,n,r,u,a){var i=Object(c["i"])("childa"),d=Object(c["i"])("childb");return Object(c["f"])(),Object(c["c"])("div",o,[Object(c["e"])(i),Object(c["e"])(d)])}var u={class:"wrappper"},a={key:0};function i(t,e,n,o,r,i){return Object(c["f"])(),Object(c["c"])("div",u,[Object(c["l"])(Object(c["d"])("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=function(t){return r.a_content=t}),placeholder:"a_content"},null,512),[[c["k"],r.a_content]]),Object(c["d"])("button",{onClick:e[1]||(e[1]=function(){return i.sendB&&i.sendB.apply(i,arguments)})},"发送给B"),r.b_content?(Object(c["f"])(),Object(c["c"])("p",a,Object(c["j"])(r.b_content),1)):Object(c["b"])("",!0)])}var d={data:function(){return{a_content:"",b_content:""}},methods:{sendB:function(){this.eventBus.emit("sendB",this.a_content)}},mounted:function(){var t=this;this.eventBus.on("sendA",(function(e){t.b_content=e}))}},s=(n("d4c6"),n("6b0d")),f=n.n(s);const p=f()(d,[["render",i],["__scopeId","data-v-1de56fa9"]]);var b=p,l={class:"wrappper"},j={key:0};function v(t,e,n,o,r,u){return Object(c["f"])(),Object(c["c"])("div",l,[Object(c["l"])(Object(c["d"])("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=function(t){return r.b_content=t}),placeholder:"b_content"},null,512),[[c["k"],r.b_content]]),Object(c["d"])("button",{onClick:e[1]||(e[1]=function(){return u.sendA&&u.sendA.apply(u,arguments)})},"发送给A"),r.a_content?(Object(c["f"])(),Object(c["c"])("p",j,Object(c["j"])(r.a_content),1)):Object(c["b"])("",!0)])}var O={data:function(){return{a_content:"",b_content:""}},methods:{sendA:function(){this.eventBus.emit("sendA",this.b_content)}},mounted:function(){var t=this;this.eventBus.on("sendB",(function(e){t.a_content=e}))}};n("2692");const h=f()(O,[["render",v],["__scopeId","data-v-264055be"]]);var _=h,y={components:{childa:b,childb:_}};n("b2c5");const m=f()(y,[["render",r],["__scopeId","data-v-1d1f1c01"]]);var g=m,w=n("1344"),B=Object(w["a"])(),k=Object(c["a"])(g);k.config.globalProperties.eventBus=B,k.mount("#app")},b2c5:function(t,e,n){"use strict";n("0def")},d4c6:function(t,e,n){"use strict";n("2f90")},e4ca:function(t,e,n){}});
//# sourceMappingURL=app.d1b23539.js.map