import{a as f}from"./assets/vendor-a61d8330.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const a=document.querySelector(".search-form"),u=document.querySelector(".gallery");function c(t){const r=new URLSearchParams({key:"37994120-fff0e4792a0f4f4675b43ad43",q:t,image_type:"photo",orientation:"horizontal",safesearch:"true"});return f(`https://pixabay.com/api/?${r}`)}c("dog").then(t=>{console.log(t.data)}).catch(t=>{console.error("Error fetching data:",t)});a.addEventListener("submit",d);function d(t){t.preventDefault();const r=a.elements.searchQuery.value;console.log(r),c(r).then(i=>{const n=i.data.hits;console.log(n),n.length||console.log("Sorry, there are no images matching your search query. Please try again."),u.innerHTML=m(n)})}function m(t){return t.map(({webformatURL:r,largeImageURL:i,tags:n,likes:e,views:o,comments:s,downloads:l})=>`
        <div class="photo-card">
          <img src="${r}" alt="${n}" loading="lazy" />
          <div class="info">
            <p class="info-item">
              <b>Likes ${e}</b>
            </p>
            <p class="info-item">
              <b>Views ${o}</b>
            </p>
            <p class="info-item">
              <b>Comments ${s}</b>
            </p>
            <p class="info-item">
              <b>Downloads ${l}</b>
            </p>
          </div>
        </div>
      `).join("")}
//# sourceMappingURL=commonHelpers.js.map
