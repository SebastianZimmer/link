var cdxEditorLink=function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=6)}([function(e,t,n){"use strict";e.exports=function(){function e(){var e=document.createElement("INPUT");return e.type="input",e.classList.add(s.inputElement),e.placeholder="Paste Link...",e}function t(){var e=document.createElement("DIV");return e.classList.add(s.linkHolder),e}function r(e){var n=t(),r=document.createElement("DIV"),i=document.createElement("DIV"),o=document.createElement("DIV"),l=document.createElement("A");switch(n.dataset.style=e.style,n.classList.add(s.linkHolder,s.linkRendered),i.classList.add(s.cover),i.style.backgroundImage='url("'+e.image+'")',r.textContent=e.title,r.classList.add(s.embedTitle),o.textContent=e.description,o.classList.add(s.description),l.textContent=e.linkText,l.href=e.linkUrl,l.classList.add(s.anchor),n.appendChild(i),e.style){case"smallCover":i.classList.add(s.smallCover);break;case"bigCover":i.classList.add(s.bigCover)}return n.appendChild(r),n.appendChild(o),n.appendChild(l),n}function i(){var e=document.createElement("DIV");return e.classList.add(s.linkSettings),e}function o(e,t){var n=document.createElement("SPAN");return n.textContent=e[t],n.classList.add(s.linkSettingsItem),n}function l(){var e=document.createElement("LABEL");return e.classList.add(s.label),e}function c(e){var t=codex.editor.content.currentNode,n=e||t.querySelector("."+s.linkHolder),r=n.querySelector("."+s.embedTitle),i=n.querySelector("."+s.cover),o=i.style.backgroundImage.match(/http?.[^"]+/),l=n.querySelector("."+s.description),c=n.querySelector("."+s.anchor),a={};return a.style=n.dataset.style,a.image=o,a.title=r.textContent,a.description=l.innerHTML,a.linkText=c.innerHTML,a.linkUrl=c.href,a}var s={linkHolder:"cdx-link-tool",linkRendered:"cdx-link-tool--rendered",embedTitle:"cdx-link-tool__title",cover:"cdx-link-tool__cover",smallCover:"cdx-link-tool__cover--small",bigCover:"cdx-link-tool__cover--big",description:"cdx-link-tool__description",anchor:"cdx-link-tool__anchor",inputElement:"cdx-link-tool__input",inputError:"cdx-link-tool__input--error",label:"cdx-link-tool__label",labelLoading:"cdx-link-tool__label--loading",labelFinish:"cdx-link-tool__label--finish",linkSettings:"link-settings",linkSettingsItem:"link-settings__item",settingsItemActive:"link-settings__item--active"};return n(7),{css:s,drawInput:e,drawLabel:l,drawLinkHolder:t,drawEmbed:r,drawSettingsHolder:i,drawSettingsItem:o,getDataFromHTML:c}}()},function(e,t,n){"use strict";e.exports=function(){function e(e){var t=void 0;if(e&&e.style)t=r.drawEmbed(e);else{var n=void 0;t=r.drawLinkHolder(),n=r.drawInput(),n.addEventListener("paste",i.URLPasted.bind(n)),t.appendChild(n)}return t}function t(t){return e(t)}return t}();var r=n(0),i=n(5)},function(e,t,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};e.exports=function(e){return e.config=null,e.prepare=function(t){return new Promise(function(n,i){"object"===(void 0===t?"undefined":r(t))&&t.fetchURL?(e.config=t,n()):i("Cant initialize plugin without fetch server")})},e}({})},function(e,t,n){"use strict";e.exports=function(){function e(e){var t={tags:{}},n={tags:{p:{}}},r={tags:{p:{},a:{href:!0,target:"_blank",rel:"nofollow"},b:{},i:{}}};return"bigCover"!=e.style&&"smallCover"!=e.style&&(e.style="smallCover"),e.title=codex.editor.sanitizer.clean(e.title,n),e.description=codex.editor.sanitizer.clean(e.description,r),e.linkText=codex.editor.sanitizer.clean(e.linkText,t),e.linkUrl=codex.editor.sanitizer.clean(e.linkUrl,t),e.image=codex.editor.sanitizer.clean(e.image,t),e}function t(t){return e(r.getDataFromHTML(t))}return t}();var r=n(0)},function(e,t,n){"use strict";e.exports=function(){function e(){var e=codex.editor.content.currentNode,n=e.querySelector("."+r.css.linkHolder),i=r.drawSettingsHolder(),o={smallCover:"Маленькая обложка",bigCover:"Большая обложка"};for(var l in o){var c=r.drawSettingsItem(o,l);c.dataset.style=l,c.addEventListener("click",t),n.dataset.style==l&&c.classList.add(r.css.settingsItemActive),i.appendChild(c)}return i}function t(){var e=codex.editor.content.currentNode;switch(this.dataset.style){case"smallCover":n(e);break;case"bigCover":o(e)}codex.editor.toolbar.settings.close()}function n(e){var t=r.getDataFromHTML(),n=void 0;t.style="smallCover",n=i(t),codex.editor.content.switchBlock(e,n,"link")}function o(e){var t=r.getDataFromHTML(),n=void 0;t.style="bigCover",n=i(t),codex.editor.content.switchBlock(e,n,"link")}return e}();var r=n(0),i=n(1)},function(e,t,n){"use strict";e.exports=function(){function e(e){var o=this,c=void 0,s=void 0;c=e.clipboardData||window.clipboardData,s=c.getData("Text"),o.classList.remove(r.css.inputError),codex.editor.core.ajax({url:i.config.fetchURL+"?url="+s,type:"GET",beforeSend:t.bind(o),success:n,error:l})}function t(){var e=this,t=r.drawLabel(),n=e.parentNode;return n.insertBefore(t,e),window.setTimeout(function(){t.classList.add(r.css.labelLoading)},50),n}function n(e){var t=this,n=void 0,c=t.querySelector("."+r.css.label),s=void 0;c.classList.add(r.css.labelFinish);try{n=JSON.parse(e),n.style=i.config.defaultStyle,n.success||1===n.success?(s=o(n),window.setTimeout(function(){codex.editor.content.switchBlock(t,s,"link")},2500)):l.call(t,n.message)}catch(e){l.call(t)}}function l(e){var t=this,n=t.querySelector("."+r.css.label);t.querySelector("."+r.css.inputElement).classList.add(r.css.inputError),n.remove(),codex.editor.notifications.notification({type:"error",message:e||"Unsupported link"})}return{URLPasted:e}}();var r=n(0),i=n(2),o=n(1)},function(e,t,n){"use strict";e.exports=function(){var e=n(1),t=n(3),r=n(4);return{prepare:n(2).prepare,render:e,save:t,settings:r}}()},function(e,t){}]);