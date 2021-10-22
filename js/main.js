document.addEventListener("DOMContentLoaded",function(){const o=document.getElementById("site-name");let s=o&&o.offsetWidth;const i=document.querySelector("#menus .menus_items");let c=i&&i.offsetWidth;const a=document.querySelector("#search-button");let l=a&&a.offsetWidth;const d=(t=false)=>{if(t){s=o&&o.offsetWidth;c=i&&i.offsetWidth;l=a&&a.offsetWidth}const e=document.getElementById("nav");let n;if(window.innerWidth<768)n=true;else n=s+c+l>e.offsetWidth-120;if(n){e.classList.add("hide-menu")}else{e.classList.remove("hide-menu")}};const t=()=>{d();document.getElementById("nav").classList.add("show")};const e=()=>{const e=document.getElementById("toggle-menu");const n=document.getElementById("sidebar-menus");const t=document.getElementById("menu-mask");const o=document.body;function s(){btf.sidebarPaddingR();o.style.overflow="hidden";btf.fadeIn(t,.5);n.classList.add("open")}function i(){o.style.overflow="";o.style.paddingRight="";btf.fadeOut(t,.5);n.classList.remove("open")}e.addEventListener("click",s);t.addEventListener("click",t=>{if(n.classList.contains("open")){i()}});window.addEventListener("resize",t=>{if(btf.isHidden(e)){if(n.classList.contains("open"))i()}})};const n=()=>{const t=document.getElementById("scroll-down");t&&t.addEventListener("click",function(){btf.scrollToDest(document.getElementById("content-inner").offsetTop,300)})};const r=function(){const t=GLOBAL_CONFIG.highlight;if(!t)return;const e=t.highlightCopy;const n=t.highlightLang;const o=GLOBAL_CONFIG_SITE.isHighlightShrink;const c=t.highlightHeightLimit;const a=e||n||o!==undefined;const s=t.plugin==="highlighjs"?document.querySelectorAll("figure.highlight"):document.querySelectorAll('pre[class*="language-"]');if(!((a||c)&&s.length))return;const i=t.plugin==="prismjs";let l="";let d="";const r=o===true?"closed":"";if(o!==undefined){l=`<i class="fas fa-angle-down expand ${r}"></i>`}if(e){d='<div class="copy-notice"></div><i class="fas fa-paste copy-button"></i>'}const u=(t,e)=>{if(document.queryCommandSupported&&document.queryCommandSupported("copy")){document.execCommand("copy");if(GLOBAL_CONFIG.Snackbar!==undefined){btf.snackbarShow(GLOBAL_CONFIG.copy.success)}else{const n=e.previousElementSibling;n.innerText=GLOBAL_CONFIG.copy.success;n.style.opacity=1;setTimeout(()=>{n.style.opacity=0},700)}}else{if(GLOBAL_CONFIG.Snackbar!==undefined){btf.snackbarShow(GLOBAL_CONFIG.copy.noSupport)}else{e.previousElementSibling.innerText=GLOBAL_CONFIG.copy.noSupport}}};const f=t=>{const e=t.parentNode;e.classList.add("copy-true");const n=window.getSelection();const o=document.createRange();if(i)o.selectNodeContents(e.querySelectorAll("pre code")[0]);else o.selectNodeContents(e.querySelectorAll("table .code pre")[0]);n.removeAllRanges();n.addRange(o);const s=n.toString();u(s,t.lastChild);n.removeAllRanges();e.classList.remove("copy-true")};const m=t=>{const e=[...t.parentNode.children].slice(1);t.firstChild.classList.toggle("closed");if(btf.isHidden(e[e.length-1])){e.forEach(t=>{t.style.display="block"})}else{e.forEach(t=>{t.style.display="none"})}};const h=function(t){const e=t.target.classList;if(e.contains("expand"))m(this);else if(e.contains("copy-button"))f(this)};const g=function(){this.classList.toggle("expand-done")};function p(t,e,n){const o=document.createDocumentFragment();if(a){const s=document.createElement("div");s.className=`highlight-tools ${r}`;s.innerHTML=l+t+d;s.addEventListener("click",h);o.appendChild(s)}if(c&&e.offsetHeight>c+30){const i=document.createElement("div");i.className="code-expand-btn";i.innerHTML='<i class="fas fa-angle-double-down"></i>';i.addEventListener("click",g);o.appendChild(i)}if(n==="hl"){e.insertBefore(o,e.firstChild)}else{e.parentNode.insertBefore(o,e)}}if(n){if(i){s.forEach(function(t){const e=t.getAttribute("data-language")?t.getAttribute("data-language"):"Code";const n=`<div class="code-lang">${e}</div>`;btf.wrap(t,"figure",{class:"highlight"});p(n,t)})}else{s.forEach(function(t){let e=t.getAttribute("class").split(" ")[1];if(e==="plain"||e===undefined)e="Code";const n=`<div class="code-lang">${e}</div>`;p(n,t,"hl")})}}else{if(i){s.forEach(function(t){btf.wrap(t,"figure",{class:"highlight"});p("",t)})}else{s.forEach(function(t){p("",t,"hl")})}}};function u(){document.querySelectorAll("#article-container img").forEach(function(t){const e=t.parentNode;const n=t.alt;if(n&&!e.parentNode.classList.contains("justified-gallery")){const o=document.createElement("div");o.className="img-alt is-center";o.textContent=n;e.insertBefore(o,t.nextSibling)}})}let f=false;const m=function(t){const e=$(t);const n=e.find("img");n.unwrap();if(n.length){n.each(function(t,e){if($(e).attr("data-lazy-src"))$(e).attr("src",$(e).attr("data-lazy-src"));$(e).wrap("<div></div>")})}if(f)btf.initJustifiedGallery(e);else{$("head").append(`<link rel="stylesheet" type="text/css" href="${GLOBAL_CONFIG.source.justifiedGallery.css}">`);$.getScript(`${GLOBAL_CONFIG.source.justifiedGallery.js}`,function(){btf.initJustifiedGallery(e)});f=true}};const h=function(t){const e=t=>{t.each(function(t,e){const n=$(e);const o=n.attr("data-lazy-src")||n.attr("src");const s=n.attr("alt")||"";n.wrap(`<a href="${o}" data-fancybox="group" data-caption="${s}" class="fancybox"></a>`)});$().fancybox({selector:"[data-fancybox]",loop:true,transitionEffect:"slide",protect:true,buttons:["slideShow","fullScreen","thumbs","close"],hash:false})};if(typeof $.fancybox==="undefined"){$("head").append(`<link rel="stylesheet" type="text/css" href="${GLOBAL_CONFIG.source.fancybox.css}">`);$.getScript(`${GLOBAL_CONFIG.source.fancybox.js}`,function(){e($(t))})}else{e($(t))}};const g=()=>{const n=mediumZoom(document.querySelectorAll("#article-container :not(a):not(.flink-item-icon) > img"));n.on("open",t=>{const e=document.documentElement.getAttribute("data-theme")==="dark"?"#121212":"#fff";n.update({background:e})})};const p=()=>{const t=GLOBAL_CONFIG.lightbox==="fancybox"?document.querySelectorAll("#article-container :not(a):not(.gallery-group):not(.flink-item-icon) > img, #article-container > img"):[];const e=t.length>0;const n=document.querySelectorAll("#article-container .justified-gallery");const o=n.length>0;if(o||e){btf.isJqueryLoad(()=>{o&&m(n);e&&h(t)})}};const y=function(){const o=document.getElementById("rightside");const s=window.innerHeight+56;if(document.body.scrollHeight<=s){o.style.cssText="opacity: 1; transform: translateX(-38px)";return}function i(t){const e=t>n;n=t;return e}let n=0;let c=true;const a=document.getElementById("page-header");const l=typeof chatBtnHide==="function";const d=typeof chatBtnShow==="function";window.scrollCollect=()=>{return btf.throttle(function(t){const e=window.scrollY||document.documentElement.scrollTop;const n=i(e);if(e>56){if(n){if(a.classList.contains("nav-visible"))a.classList.remove("nav-visible");if(d&&c===true){chatBtnHide();c=false}}else{if(!a.classList.contains("nav-visible"))a.classList.add("nav-visible");if(l&&c===false){chatBtnShow();c=true}}a.classList.add("nav-fixed");if(window.getComputedStyle(o).getPropertyValue("opacity")==="0"){o.style.cssText="opacity: 1; transform: translateX(-38px)"}}else{if(e===0){a.classList.remove("nav-fixed","nav-visible")}o.style.cssText="opacity: ''; transform: ''"}if(document.body.scrollHeight<=s){o.style.cssText="opacity: 1; transform: translateX(-38px)"}},200)()};window.addEventListener("scroll",scrollCollect)};const L=function(){const t=document.getElementById("card-toc");const l=t.getElementsByClassName("toc-content")[0];const i=l.querySelectorAll(".toc-link");const d=document.getElementById("article-container");window.tocScrollFn=function(){return btf.throttle(function(){const t=window.scrollY||document.documentElement.scrollTop;e(t);o(t)},100)()};window.addEventListener("scroll",tocScrollFn);const e=function(t){const e=d.clientHeight;const n=document.documentElement.clientHeight;const o=d.offsetTop;const s=e>n?e-n:document.documentElement.scrollHeight-n;const i=(t-o)/s;const c=Math.round(i*100);const a=c>100?100:c<=0?0:c;l.setAttribute("progress-percentage",a)};const c=GLOBAL_CONFIG.isanchor;const a=function(t){if(window.history.replaceState&&t!==window.location.hash){if(!t)t=location.pathname;const e=GLOBAL_CONFIG_SITE.title;window.history.replaceState({url:location.href,title:e},e,t)}};const n={open:()=>{t.style.cssText="animation: toc-open .3s; opacity: 1; right: 45px"},close:()=>{t.style.animation="toc-close .2s";setTimeout(()=>{t.style.cssText="opacity:''; animation: ''; right: ''"},100)}};document.getElementById("mobile-toc-button").addEventListener("click",()=>{if(window.getComputedStyle(t).getPropertyValue("opacity")==="0")n.open();else n.close()});l.addEventListener("click",t=>{t.preventDefault();const e=t.target.classList.contains("toc-link")?t.target:t.target.parentElement;btf.scrollToDest(btf.getEleTop(document.getElementById(decodeURI(e.getAttribute("href")).replace("#",""))),300);if(window.innerWidth<900){n.close()}});const r=function(t){const e=t.getBoundingClientRect().top;const n=l.scrollTop;if(e>document.documentElement.clientHeight-100){l.scrollTop=n+150}if(e<100){l.scrollTop=n-150}};const u=d.querySelectorAll("h1,h2,h3,h4,h5,h6");let f="";const o=function(n){if(i.length===0||n===0){return false}let o="";let s="";u.forEach(function(t,e){if(n>btf.getEleTop(t)-80){o="#"+encodeURI(t.getAttribute("id"));s=e}});if(f===s)return;if(c)a(o);if(o===""){l.querySelectorAll(".active").forEach(t=>{t.classList.remove("active")});f=s;return}f=s;l.querySelectorAll(".active").forEach(t=>{t.classList.remove("active")});const t=i[s];t.classList.add("active");setTimeout(()=>{r(t)},0);let e=t.parentNode;for(;!e.matches(".toc");e=e.parentNode){if(e.matches("li"))e.classList.add("active")}}};const b={switchReadMode:()=>{const t=document.body;t.classList.add("read-mode");const e=document.createElement("button");e.type="button";e.className="fas fa-sign-out-alt exit-readmode";t.appendChild(e);function n(){t.classList.remove("read-mode");e.remove();e.removeEventListener("click",n)}e.addEventListener("click",n)},switchDarkMode:()=>{const t=document.documentElement.getAttribute("data-theme")==="dark"?"dark":"light";if(t==="light"){activateDarkMode();saveToLocal.set("theme","dark",2);GLOBAL_CONFIG.Snackbar!==undefined&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)}else{activateLightMode();saveToLocal.set("theme","light",2);GLOBAL_CONFIG.Snackbar!==undefined&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)}typeof utterancesTheme==="function"&&utterancesTheme();typeof FB==="object"&&window.loadFBComment();window.DISQUS&&document.getElementById("disqus_thread").children.length&&setTimeout(()=>window.disqusReset(),200)},showOrHideBtn:()=>{document.getElementById("rightside-config-hide").classList.toggle("show")},scrollToTop:()=>{btf.scrollToDest(0,500)},hideAsideBtn:()=>{const t=document.documentElement.classList;t.contains("hide-aside")?saveToLocal.set("aside-status","show",2):saveToLocal.set("aside-status","hide",2);t.toggle("hide-aside")},adjustFontSize:t=>{const e=parseInt(window.getComputedStyle(document.documentElement).getPropertyValue("--global-font-size"));let n="";if(t){if(e>=20)return;n=e+1;document.documentElement.style.setProperty("--global-font-size",n+"px");!document.getElementById("nav").classList.contains("hide-menu")&&d(true)}else{if(e<=10)return;n=e-1;document.documentElement.style.setProperty("--global-font-size",n+"px");document.getElementById("nav").classList.contains("hide-menu")&&d(true)}saveToLocal.set("global-font-size",n,2)}};document.getElementById("rightside").addEventListener("click",function(t){const e=t.target.id||t.target.parentNode.id;switch(e){case"go-up":b.scrollToTop();break;case"rightside_config":b.showOrHideBtn();break;case"readmode":b.switchReadMode();break;case"darkmode":b.switchDarkMode();break;case"hide-aside-btn":b.hideAsideBtn();break;case"font-plus":b.adjustFontSize(true);break;case"font-minus":b.adjustFontSize();break;default:break}});const v=function(){document.querySelectorAll("#sidebar-menus .expand").forEach(function(t){t.addEventListener("click",function(){this.classList.toggle("hide");const t=this.parentNode.nextElementSibling;if(btf.isHidden(t)){t.style.display="block"}else{t.style.display="none"}})});window.addEventListener("touchmove",function(t){const e=document.querySelectorAll("#nav .menus_item_child");e.forEach(t=>{if(!btf.isHidden(t))t.style.display="none"})})};const E=()=>{const o=GLOBAL_CONFIG.copyright;document.body.oncopy=t=>{t.preventDefault();let e;const n=window.getSelection(0).toString();if(n.length>o.limitCount){e=n+"\n"+"\n"+"\n"+o.languages.author+"\n"+o.languages.link+window.location.href+"\n"+o.languages.source+"\n"+o.languages.info}else{e=n}if(t.clipboardData){return t.clipboardData.setData("text",e)}else{return window.clipboardData.setData("text",e)}}};const w=()=>{const t=document.getElementById("runtimeshow");if(t){const e=t.getAttribute("data-publishDate");t.innerText=btf.diffDate(e)+" "+GLOBAL_CONFIG.runtime}};const O=()=>{const t=document.getElementById("last-push-date");if(t){const e=t.getAttribute("data-lastPushDate");t.innerText=btf.diffDate(e,true)}};const S=function(){const t=document.querySelectorAll("#article-container :not(.highlight) > table, #article-container > table");if(t.length){t.forEach(t=>{btf.wrap(t,"div",{class:"table-wrap"})})}};const A=function(){const t=document.querySelectorAll("#article-container .hide-button");if(t.length){t.forEach(function(t){t.addEventListener("click",function(t){const e=this;const n=e.nextElementSibling;e.classList.toggle("open");if(e.classList.contains("open")){if(n.querySelectorAll(".justified-gallery").length>0){btf.initJustifiedGallery(n.querySelectorAll(".justified-gallery"))}}})})}};const G={clickFnOfTabs:function(){document.querySelectorAll("#article-container .tab > button").forEach(function(t){t.addEventListener("click",function(t){const e=this;const n=e.parentNode;if(!n.classList.contains("active")){const o=n.parentNode.nextElementSibling;const s=btf.siblings(n,".active")[0];s&&s.classList.remove("active");n.classList.add("active");const i=e.getAttribute("data-href").replace("#","");const c=[...o.children];c.forEach(t=>{if(t.id===i)t.classList.add("active");else t.classList.remove("active")});const a=o.querySelectorAll(`#${i} .justified-gallery`);if(a.length>0){btf.initJustifiedGallery(a)}}})})},backToTop:()=>{document.querySelectorAll("#article-container .tabs .tab-to-top").forEach(function(t){t.addEventListener("click",function(){btf.scrollToDest(btf.getEleTop(btf.getParents(this,".tabs")),300)})})}};const B=function(){const t=document.querySelectorAll("#aside-cat-list .card-category-list-item.parent i");if(t.length){t.forEach(function(t){t.addEventListener("click",function(t){t.preventDefault();const e=this;e.classList.toggle("expand");const n=e.parentNode.nextElementSibling;if(btf.isHidden(n)){n.style.display="block"}else{n.style.display="none"}})})}};const I=function(){let t=false;const e=document.querySelector("#comment-switch > .switch-btn");e&&e.addEventListener("click",function(){this.classList.toggle("move");document.querySelectorAll("#post-comment > .comment-wrap > div").forEach(function(t){if(btf.isHidden(t)){t.style.cssText="display: block;animation: tabshow .5s"}else{t.style.cssText="display: none;animation: ''"}});if(!t&&typeof loadOtherComment==="function"){t=true;loadOtherComment()}})};const C=function(){const t=GLOBAL_CONFIG.noticeOutdate;const e=btf.diffDate(GLOBAL_CONFIG_SITE.postUpdate);if(e>=t.limitDay){const n=document.createElement("div");n.className="post-outdate-notice";n.textContent=t.messagePrev+" "+e+" "+t.messageNext;const o=document.getElementById("article-container");if(t.position==="top"){o.insertBefore(n,o.firstChild)}else{o.appendChild(n)}}};const k=()=>{window.lazyLoadInstance=new LazyLoad({elements_selector:"img",threshold:0,data_src:"lazy-src"})};const T=function(t){t.forEach(t=>{const e=t;const n=e.getAttribute("datetime");e.innerText=btf.diffDate(n,true);e.style.display="inline"})};const N=function(){window.addEventListener("resize",d);window.addEventListener("orientationchange",()=>{setTimeout(d(true),100)});v();GLOBAL_CONFIG.islazyload&&k();GLOBAL_CONFIG.copyright!==undefined&&E()};window.refreshFn=function(){t();if(GLOBAL_CONFIG_SITE.isPost){GLOBAL_CONFIG_SITE.isToc&&L();GLOBAL_CONFIG.noticeOutdate!==undefined&&C();GLOBAL_CONFIG.relativeDate.post&&T(document.querySelectorAll("#post-meta time"))}else{GLOBAL_CONFIG.relativeDate.homepage&&T(document.querySelectorAll("#recent-posts time"));GLOBAL_CONFIG.runtime&&w();O();B()}e();GLOBAL_CONFIG_SITE.isHome&&n();r();GLOBAL_CONFIG.isPhotoFigcaption&&u();p();GLOBAL_CONFIG.lightbox==="mediumZoom"&&g();y();S();A();G.clickFnOfTabs();G.backToTop();I()};refreshFn();N()});