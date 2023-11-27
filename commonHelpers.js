import{a as f}from"./assets/vendor-a61d8330.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const i=document.querySelector(".search-form"),m=document.querySelector(".load-more"),c=document.querySelector(".gallery");let p=1;function l(n,o=1){const r=new URLSearchParams({key:"37994120-fff0e4792a0f4f4675b43ad43",q:n,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:5,page:o});return f(`https://pixabay.com/api/?${r}`)}i.addEventListener("submit",h);m.addEventListener("click",g);function h(n){n.preventDefault();const o=i.elements.searchQuery.value;console.log(o),l(o).then(r=>{const s=r.data.hits;console.log(s),s.length||console.log("Sorry, there are no images matching your search query. Please try again."),c.innerHTML=u(s)})}function u(n){return n.map(({webformatURL:o,largeImageURL:r,tags:s,likes:e,views:t,comments:a,downloads:d})=>`
        <div class="photo-card">
          <img src="${o}" alt="${s}" loading="lazy" />
          <div class="info">
            <p class="info-item">
              <b>Likes ${e}</b>
            </p>
            <p class="info-item">
              <b>Views ${t}</b>
            </p>
            <p class="info-item">
              <b>Comments ${a}</b>
            </p>
            <p class="info-item">
              <b>Downloads ${d}</b>
            </p>
          </div>
        </div>
      `).join("")}function g(){const n=i.elements.searchQuery.value;l(n,p+1).then(o=>{const r=o.data.hits;if(!r.length){console.log("No more images to load.");return}c.insertAdjacentHTML("beforeend",u(r))})}
//# sourceMappingURL=commonHelpers.js.map
