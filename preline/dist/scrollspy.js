!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var o in n)("object"==typeof exports?exports:t)[o]=n[o]}}(self,(()=>(()=>{"use strict";var t={737:(t,e)=>{
/*
 * HSBasePlugin
 * @version: 2.1.0
 * @author: HTMLStream
 * @license: Licensed under MIT (https://preline.co/docs/license.html)
 * Copyright 2023 HTMLStream
 */
Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e,n){this.el=t,this.options=e,this.events=n,this.el=t,this.options=e,this.events={}}return t.prototype.createCollection=function(t,e){var n;t.push({id:(null===(n=null==e?void 0:e.el)||void 0===n?void 0:n.id)||t.length+1,element:e})},t.prototype.fireEvent=function(t,e){if(void 0===e&&(e=null),this.events.hasOwnProperty(t))return this.events[t](e)},t.prototype.on=function(t,e){this.events[t]=e},t}();e.default=n},591:function(t,e,n){
/*
 * HSScrollspy
 * @version: 2.1.0
 * @author: HTMLStream
 * @license: Licensed under MIT (https://preline.co/docs/license.html)
 * Copyright 2023 HTMLStream
 */
var o,r=this&&this.__extends||(o=function(t,e){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},o(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=n(969),s=function(t){function e(e,n){void 0===n&&(n={});var o=t.call(this,e,n)||this;return o.activeSection=null,o.contentId=o.el.getAttribute("data-hs-scrollspy"),o.content=document.querySelector(o.contentId),o.links=o.el.querySelectorAll("[href]"),o.sections=[],o.scrollableId=o.el.getAttribute("data-hs-scrollspy-scrollable-parent"),o.scrollable=o.scrollableId?document.querySelector(o.scrollableId):document,o.init(),o}return r(e,t),e.prototype.init=function(){var t=this;this.createCollection(window.$hsScrollspyCollection,this),this.links.forEach((function(e){t.sections.push(t.scrollable.querySelector(e.getAttribute("href")))})),Array.from(this.sections).forEach((function(e){if(!e.getAttribute("id"))return!1;t.scrollable.addEventListener("scroll",(function(n){return t.update(n,e)}))})),this.links.forEach((function(e){e.addEventListener("click",(function(n){if(n.preventDefault(),"javascript:;"===e.getAttribute("href"))return!1;t.scrollTo(e)}))}))},e.prototype.update=function(t,e){var n=parseInt((0,i.getClassProperty)(this.el,"--scrollspy-offset","0")),o=parseInt((0,i.getClassProperty)(e,"--scrollspy-offset"))||n,r=t.target===document?0:parseInt(String(t.target.getBoundingClientRect().top)),s=parseInt(String(e.getBoundingClientRect().top))-o-r,l=e.offsetHeight;if(s<=0&&s+l>0){if(this.activeSection===e)return!1;this.links.forEach((function(t){t.classList.remove("active")}));var c=this.el.querySelector('[href="#'.concat(e.getAttribute("id"),'"]'));if(c){c.classList.add("active");var a=c.closest("[data-hs-scrollspy-group]");if(a){var u=a.querySelector("[href]");u&&u.classList.add("active")}}this.activeSection=e}},e.prototype.scrollTo=function(t){var e=t.getAttribute("href"),n=document.querySelector(e),o=parseInt((0,i.getClassProperty)(this.el,"--scrollspy-offset","0")),r=parseInt((0,i.getClassProperty)(n,"--scrollspy-offset"))||o,s=this.scrollable===document?0:this.scrollable.offsetTop,l=n.offsetTop-r-s,c=this.scrollable===document?window:this.scrollable,a=function(){window.history.replaceState(null,null,t.getAttribute("href")),"scrollTo"in c&&c.scrollTo({top:l,left:0,behavior:"smooth"})},u=this.fireEvent("beforeScroll",this.el);(0,i.dispatch)("beforeScroll.hs.scrollspy",this.el,this.el),u instanceof Promise?u.then((function(){return a()})):a()},e.getInstance=function(t,e){void 0===e&&(e=!1);var n=window.$hsScrollspyCollection.find((function(e){return e.element.el===("string"==typeof t?document.querySelector(t):t)}));return n?e?n:n.element.el:null},e.autoInit=function(){window.$hsScrollspyCollection||(window.$hsScrollspyCollection=[]),document.querySelectorAll("[data-hs-scrollspy]:not(.--prevent-on-load-init)").forEach((function(t){window.$hsScrollspyCollection.find((function(e){var n;return(null===(n=null==e?void 0:e.element)||void 0===n?void 0:n.el)===t}))||new e(t)}))},e}(n(737).default);window.addEventListener("load",(function(){s.autoInit()})),"undefined"!=typeof window&&(window.HSScrollspy=s),e.default=s},969:function(t,e){var n=this;Object.defineProperty(e,"__esModule",{value:!0}),e.menuSearchHistory=e.classToClassList=e.htmlToElement=e.afterTransition=e.dispatch=e.debounce=e.isFormElement=e.isParentOrElementHidden=e.isEnoughSpace=e.isIpadOS=e.isIOS=e.getClassPropertyAlt=e.getClassProperty=e.stringToBoolean=void 0;e.stringToBoolean=function(t){return"true"===t};e.getClassProperty=function(t,e,n){return void 0===n&&(n=""),(window.getComputedStyle(t).getPropertyValue(e)||n).replace(" ","")};e.getClassPropertyAlt=function(t,e,n){void 0===n&&(n="");var o="";return t.classList.forEach((function(t){t.includes(e)&&(o=t)})),o.match(/:(.*)]/)?o.match(/:(.*)]/)[1]:n};e.isIOS=function(){return!!/iPad|iPhone|iPod/.test(navigator.platform)||navigator.maxTouchPoints&&navigator.maxTouchPoints>2&&/MacIntel/.test(navigator.platform)};e.isIpadOS=function(){return navigator.maxTouchPoints&&navigator.maxTouchPoints>2&&/MacIntel/.test(navigator.platform)};e.isEnoughSpace=function(t,e,n,o,r){void 0===n&&(n="auto"),void 0===o&&(o=10),void 0===r&&(r=null);var i=e.getBoundingClientRect(),s=r?r.getBoundingClientRect():null,l=window.innerHeight,c=s?i.top-s.top:i.top,a=(r?s.bottom:l)-i.bottom,u=t.clientHeight+o;return"bottom"===n?a>=u:"top"===n?c>=u:c>=u||a>=u};e.isFormElement=function(t){return t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement};var o=function(t){return!!t&&("none"===window.getComputedStyle(t).display||o(t.parentElement))};e.isParentOrElementHidden=o;e.debounce=function(t,e){var o;return void 0===e&&(e=200),function(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];clearTimeout(o),o=setTimeout((function(){t.apply(n,r)}),e)}};e.dispatch=function(t,e,n){void 0===n&&(n=null);var o=new CustomEvent(t,{detail:{payload:n},bubbles:!0,cancelable:!0,composed:!1});e.dispatchEvent(o)};e.afterTransition=function(t,e){var n=function(){e(),t.removeEventListener("transitionend",n,!0)};window.getComputedStyle(t,null).getPropertyValue("transition")!==(navigator.userAgent.includes("Firefox")?"all":"all 0s ease 0s")?t.addEventListener("transitionend",n,!0):e()};e.htmlToElement=function(t){var e=document.createElement("template");return t=t.trim(),e.innerHTML=t,e.content.firstChild};e.classToClassList=function(t,e,n,o){void 0===n&&(n=" "),void 0===o&&(o="add"),t.split(n).forEach((function(t){return"add"===o?e.classList.add(t):e.classList.remove(t)}))};e.menuSearchHistory={historyIndex:-1,addHistory:function(t){this.historyIndex=t},existsInHistory:function(t){return t>this.historyIndex},clearHistory:function(){this.historyIndex=-1}}}},e={};var n=function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={exports:{}};return t[o].call(i.exports,i,i.exports,n),i.exports}(591);return n})()));