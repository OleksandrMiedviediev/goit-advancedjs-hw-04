import{a as l,S as m,i as n}from"./assets/vendor-BrrjnyPr.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const d=a=>l.get("https://pixabay.com/api/",{params:{key:"42394158-5c4cd21eee44163ae27aefe31",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data),c=document.querySelector(".gallery"),u=document.querySelector(".loader"),f=new m(".gallery a",{captionsData:"alt",captionDelay:250}),g=a=>{c.innerHTML=a.map(({webformatURL:t,largeImageURL:s,tags:o,likes:e,views:r,comments:i,downloads:p})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${s}">
            <img class="gallery-image" src="${t}" alt="${o}" loading="lazy" />
          </a>
          <div class="image-info">
            <p><b>Likes</b><span>${e}</span></p>
            <p><b>Views</b><span>${r}</span></p>
            <p><b>Comments</b><span>${i}</span></p>
            <p><b>Downloads</b><span>${p}</span></p>
          </div>
        </li>
      `).join(""),f.refresh()},y=()=>{c.innerHTML=""},h=()=>{u.classList.add("is-visible")},b=()=>{u.classList.remove("is-visible")},L=document.querySelector(".form");L.addEventListener("submit",a=>{a.preventDefault();const t=a.currentTarget.elements["search-text"].value.trim();if(!t){n.warning({title:"Warning",message:"Please enter a search query."});return}y(),h(),d(t).then(s=>{if(!s.hits.length){n.info({message:"Sorry, there are no images matching your search query. Please try again!"});return}g(s.hits)}).catch(s=>{l.isCancel(s)||n.error({title:"Error",message:"Something went wrong. Please try again later."})}).finally(()=>{b()})});
//# sourceMappingURL=index.js.map
