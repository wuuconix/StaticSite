(function(t){function e(e){for(var o,a,u=e[0],s=e[1],i=e[2],f=0,d=[];f<u.length;f++)a=u[f],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&d.push(c[a][0]),c[a]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);l&&l(e);while(d.length)d.shift()();return r.push.apply(r,i||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,u=1;u<n.length;u++){var s=n[u];0!==c[s]&&(o=!1)}o&&(r.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},c={app:0},r=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=e,u=u.slice();for(var i=0;i<u.length;i++)e(u[i]);var l=s;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034b":function(t,e,n){"use strict";n("4672")},4672:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),c=function(t){return Object(o["f"])("data-v-6faee2b1"),t=t(),Object(o["e"])(),t},r={class:"wrapper"},a=c((function(){return Object(o["c"])("p",null," F12可查看生命周期中输出的不同内容",-1)})),u=["src"];function s(t,e,n,c,s,i){return Object(o["d"])(),Object(o["b"])("div",r,[a,Object(o["c"])("img",{src:s.src},null,8,u),Object(o["c"])("p",null,Object(o["g"])(s.src),1),Object(o["c"])("button",{onClick:e[0]||(e[0]=function(){return i.changeUrl&&i.changeUrl.apply(i,arguments)})},"点击更换src")])}var i={data:function(){return{src:"https://conix.ml/"}},methods:{changeUrl:function(){this.src="https://conix.ml/?random=".concat(Math.random())}},beforeCreate:function(){console.log("beforeCreate this.$data: ".concat(this.$data)),console.log("beforeCreate this.$data.src: ".concat(this.$data.src)),console.log("beforeCreate this.$el: ".concat(this.$el))},created:function(){console.log("created this.$data.src: ".concat(this.$data.src)),console.log("created this.$el: ".concat(this.$el))},beforeMount:function(){console.log("beforeMount this.$el: ".concat(this.$el))},mounted:function(){console.log("mounted this.$el: ".concat(this.$el))},beforeUpdate:function(){console.log("beforeUpdate this.url: ".concat(this.src))},updated:function(){console.log("updated this.url: ".concat(this.src))},beforeUnmount:function(){console.log("beforeUnmount this.$data.src: ".concat(this.$data.src)),console.log("beforeUnmount this.$el: ".concat(this.$el))},unmounted:function(){console.log("unmounted this.$data.src: ".concat(this.$data.src)),console.log("unmounted this.$el: ".concat(this.$el))}},l=(n("034b"),n("6b0d")),f=n.n(l);const d=f()(i,[["render",s],["__scopeId","data-v-6faee2b1"]]);var p=d,h=Object(o["a"])(p);h.mount("#app"),setTimeout((function(){window.confirm("要unmount页面吗？")&&h.unmount()}),5e3)}});
//# sourceMappingURL=app.af1f870f.js.map