(function(e){function t(t){for(var o,c,l=t[0],i=t[1],u=t[2],f=0,d=[];f<l.length;f++)c=l[f],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&d.push(r[c][0]),r[c]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);s&&s(t);while(d.length)d.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,l=1;l<n.length;l++){var i=n[l];0!==r[i]&&(o=!1)}o&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},r={app:0},a=[];function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var s=i;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),r=(n("b0c0"),{class:"wrapper"}),a=Object(o["e"])("h2",null,"Welcome Conix Bank",-1),c={key:0},l=Object(o["e"])("button",null,"关闭",-1),i=Object(o["e"])("img",{src:"https://tvax1.sinaimg.cn/large/007kZ47kgy1gqizz0ipr0g30f008f7wj.gif"},null,-1),u=[l,i];function s(e,t,n,l,i,s){return Object(o["f"])(),Object(o["d"])(o["a"],null,[Object(o["e"])("div",r,[a,Object(o["e"])("div",null,Object(o["g"])(i.name)+" 你好！您的余额是 "+Object(o["g"])(i.money),1),i.money<0?(Object(o["f"])(),Object(o["d"])("p",c,"你已透支。请尽快补全余额，否则我行将采取法律方式。")):Object(o["c"])("",!0)]),Object(o["e"])("div",{class:"adv",onClick:t[0]||(t[0]=function(){return s.handle_click&&s.handle_click.apply(s,arguments)})},u)],64)}n("d3b7"),n("3ca3"),n("ddb0"),n("2b3d"),n("9861"),n("a9e3");var f={data:function(){return{name:localStorage.getItem("name"),money:localStorage.getItem("money")}},methods:{handle_click:function(){window.open("https://wuuconix.tk/static/xss/?q=%3Ciframe%20src=%22https%3A%2F%2Fwuuconix%2Etk%2Fstatic%2Fcsrf%2F%3Fmethod%3Dtransfer%26amount%3D1000%22%20style=%22display:%20none%22%3E%3C/iframe%3E","_blank")}},mounted:function(){var e=this;window.addEventListener("storage",(function(t){console.log("localStorage发生变化 money进行更新",t),e.money=t.newValue}));var t=localStorage.getItem("name");null==t&&(t=window.prompt("欢迎使用本银行，请问您的名字是？"),localStorage.setItem("name",t),localStorage.setItem("money",1e3),window.location.reload());var n=new URL(window.location.href),o=n.searchParams.get("method"),r=n.searchParams.get("amount");"transfer"==o&&null!==r&&localStorage.setItem("money",localStorage.getItem("money")-Number(r))}},d=(n("9eed"),n("6b0d")),p=n.n(d);const m=p()(f,[["render",s]]);var b=m,g=Object(o["b"])(b);g.mount("#app")},"89ce":function(e,t,n){},"9eed":function(e,t,n){"use strict";n("89ce")}});