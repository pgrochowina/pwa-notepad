!function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=2)}([function(e,t,o){},,function(e,t,o){"use strict";o.r(t);o(0);"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("service-worker.js").then((function(e){console.log("ServiceWorker registration successful with scope: ",e.scope)}),(function(e){console.log("ServiceWorker registration failed: ",e)}))}));var r=document.querySelector(".notepad--js"),n=document.querySelector(".copy--js"),c=document.querySelector(".load--js"),u=document.querySelector(".save--js");localStorage.getItem("myMemo")&&(r.value=localStorage.getItem("myMemo")),u.addEventListener("click",(function(){localStorage.setItem("myMemo",r.value)})),c.addEventListener("click",(function(){r.value=localStorage.getItem("myMemo")})),n.addEventListener("click",(function(){r.select(),document.execCommand("copy")}));var l=!1,i=document.querySelector(".button__toggle--js");document.querySelector(".header--js");i.addEventListener("click",(function(){0==l?(document.documentElement.style.setProperty("--primary-color","#282c35"),document.documentElement.style.setProperty("--secondary-color","#ffa7c4"),l=!0):1==l&&(document.documentElement.style.setProperty("--primary-color","white"),document.documentElement.style.setProperty("--secondary-color","#d23669"),l=!1)}))}]);