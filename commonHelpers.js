import{a as f,i as c,S as h}from"./assets/vendor-5f0e12e0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();async function d(s,t=1){const o=new URLSearchParams({key:"37994120-fff0e4792a0f4f4675b43ad43",q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:40,page:t});return(await f(`https://pixabay.com/api/?${o}`)).data}const u=document.querySelector(".search-form"),i=document.querySelector(".load-more"),l=document.querySelector(".gallery");u.addEventListener("submit",y);i.addEventListener("click",b);async function y(s){s.preventDefault();const t=u.elements.searchQuery.value;try{const o=await d(t);i.style.display="block";const n=o.hits;n.length?(l.innerHTML=m(n),c.success({closeOnEscape:!0,closeOnClick:!0,messageSize:"16",maxWidth:500,position:"topRight",message:`Hooray! We found ${o.total} images.`})):(i.style.display="none",c.error({closeOnEscape:!0,closeOnClick:!0,backgroundColor:"tomato",messageColor:"white",position:"topRight",messageSize:"16",maxWidth:500,message:"Sorry, there are no images matching your search query. Please try again."}),l.innerHTML="")}catch(o){console.error("Error:",o)}}let g=1;async function b(){const s=u.elements.searchQuery.value;try{const o=(await d(s,g+1)).hits;if(!o.length){c.error({closeOnEscape:!0,closeOnClick:!0,backgroundColor:"tomato",messageColor:"white",position:"topRight",messageSize:"16",maxWidth:500,message:"We're sorry, but you've reached the end of search results."}),i.style.display="none";return}l.insertAdjacentHTML("beforeend",m(o))}catch(t){console.error("Error:",t)}}function m(s){return s.map(({webformatURL:t,largeImageURL:o,tags:n,likes:e,views:r,comments:a,downloads:p})=>`
        <div class="photo-card">
        <a href="${o}">
          <img src="${t}" alt="${n}" loading="lazy" />
          </a>
          <div class="info">
            <p class="info-item">
              <b>Likes ${e}</b>
            </p>
            <p class="info-item">
              <b>Views ${r}</b>
            </p>
            <p class="info-item">
              <b>Comments ${a}</b>
            </p>
            <p class="info-item">
              <b>Downloads ${p}</b>
            </p>
          </div>
        </div>
      `).join("")}new h(".gallery a",{});
//# sourceMappingURL=commonHelpers.js.map
