import{a as f,i as c,S as h}from"./assets/vendor-5f0e12e0.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();async function d(n,r=1){const o=new URLSearchParams({key:"37994120-fff0e4792a0f4f4675b43ad43",q:n,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:40,page:r});return(await f(`https://pixabay.com/api/?${o}`)).data}const u=document.querySelector(".search-form"),i=document.querySelector(".load-more"),l=document.querySelector(".gallery");u.addEventListener("submit",y);i.addEventListener("click",b);async function y(n){n.preventDefault();const r=u.elements.searchQuery.value;console.log(r);try{const o=await d(r);i.style.display="block";const s=o.hits;console.log(o),console.log(s),s.length?(l.innerHTML=m(s),c.success({closeOnEscape:!0,closeOnClick:!0,messageSize:"16",maxWidth:500,position:"topRight",message:`Hooray! We found ${o.total} images.`})):(i.style.display="none",c.error({closeOnEscape:!0,closeOnClick:!0,backgroundColor:"tomato",messageColor:"white",position:"topRight",messageSize:"16",maxWidth:500,message:"Sorry, there are no images matching your search query. Please try again."}),l.innerHTML="")}catch(o){console.error("Error:",o)}}let g=1;async function b(){const n=u.elements.searchQuery.value;try{const o=(await d(n,g+1)).hits;if(!o.length){c.error({closeOnEscape:!0,closeOnClick:!0,backgroundColor:"tomato",messageColor:"white",position:"topRight",messageSize:"16",maxWidth:500,message:"We're sorry, but you've reached the end of search results."}),i.style.display="none";return}l.insertAdjacentHTML("beforeend",m(o))}catch(r){console.error("Error:",r)}}function m(n){return n.map(({webformatURL:r,largeImageURL:o,tags:s,likes:e,views:t,comments:a,downloads:p})=>`
        <div class="photo-card">
        <a href="${o}">
          <img src="${r}" alt="${s}" loading="lazy" />
          </a>
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
              <b>Downloads ${p}</b>
            </p>
          </div>
        </div>
      `).join("")}new h(".gallery a",{});
//# sourceMappingURL=commonHelpers.js.map
