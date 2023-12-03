import{a as h,i as l,S as y}from"./assets/vendor-5f0e12e0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();async function p(s,t=1){const o=new URLSearchParams({key:"37994120-fff0e4792a0f4f4675b43ad43",q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:40,page:t});return(await h(`https://pixabay.com/api/?${o}`)).data}const m=document.querySelector(".search-form"),a=document.querySelector(".load-more"),i=document.querySelector(".gallery");m.addEventListener("submit",g);a.addEventListener("click",b);i.addEventListener("click",function(s){s.preventDefault()});async function g(s){s.preventDefault();const t=m.elements.searchQuery.value.trim();if(!t){l.error({closeOnEscape:!0,closeOnClick:!0,backgroundColor:"tomato",messageColor:"white",position:"topRight",messageSize:"16",maxWidth:500,message:"Input is empty! Print something."}),i.innerHTML="",a.style.display="none";return}try{const o=await p(t);a.style.display="block";const n=o.hits;if(!n.length)a.style.display="none",l.error({closeOnEscape:!0,closeOnClick:!0,backgroundColor:"tomato",messageColor:"white",position:"topRight",messageSize:"16",maxWidth:500,message:"Sorry, there are no images matching your search query. Please try again."}),i.innerHTML="";else{if(o.totalHits/40<=u){l.error({closeOnEscape:!0,closeOnClick:!0,backgroundColor:"tomato",messageColor:"white",position:"topRight",messageSize:"16",maxWidth:500,message:"We're sorry, but you've reached the end of search results."}),a.style.display="none",i.innerHTML=d(n);return}i.innerHTML=d(n),l.success({closeOnEscape:!0,closeOnClick:!0,messageSize:"16",maxWidth:500,position:"topRight",message:`Hooray! We found ${o.totalHits} images.`})}}catch(o){console.error("Error:",o)}}let u=1;async function b(){const s=m.elements.searchQuery.value.trim();try{const t=await p(s,u+1);u+=1;const o=t.hits;if(console.log(typeof t.totalHits),console.log(u),t.totalHits/40<=u){l.error({closeOnEscape:!0,closeOnClick:!0,backgroundColor:"tomato",messageColor:"white",position:"topRight",messageSize:"16",maxWidth:500,message:"We're sorry, but you've reached the end of search results."}),a.style.display="none",i.insertAdjacentHTML("beforeend",d(o));return}i.insertAdjacentHTML("beforeend",d(o))}catch(t){console.error("Error:",t)}}function d(s){return s.map(({webformatURL:t,largeImageURL:o,tags:n,likes:e,views:r,comments:c,downloads:f})=>`
        <div class="photo-card">
        <a class="no-link" href="${o}">
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
              <b>Comments ${c}</b>
            </p>
            <p class="info-item">
              <b>Downloads ${f}</b>
            </p>
          </div>
        </div>
      `).join("")}imgLink.addEventListener("click",function(s){s.preventDefault()});new y(".gallery a",{});
//# sourceMappingURL=commonHelpers.js.map
