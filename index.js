import"./assets/styles-JE8YjOlG.js";import{a as c}from"./assets/vendor-BkCUij8E.js";const s={categoriesList:document.querySelector(".categories"),productsList:document.querySelector(".products"),modal:document.querySelector(".modal"),modalContent:document.querySelector(".modal-product")};function d(){s.modal.classList.remove("modal--is-open"),document.body.style.overflow="",document.removeEventListener("keydown",a)}function a(t){t.code==="Escape"&&d()}async function l(){s.modal.classList.add("modal--is-open"),document.body.style.overflow="hidden",document.addEventListener("keydown",a)}const r={CATEGORIES:"products/category-list",PRODUCTS_BY_CATEGORY:"products/category/",PRODUCTS:"products",PRODUCT_BY_ID:"products/",SEARCH:"products/search"},n=12,u="https://dummyjson.com/";c.defaults.baseURL=u;async function p(){const{data:t}=await c.get(r.CATEGORIES);return t}async function m(t){const o=(t-1)*n,{data:e}=await c.get(`${r.PRODUCTS}?limit=${n}&skip=${o}`);return e}function _(t){const o=t.map(e=>`
                <li class="products__item" data-id="${e.id}">
                    <img class="products__image" src="${e.thumbnail}" alt="${e.title}" />
                    <p class="products__title">${e.title}</p>
                    <p class="products__brand"><span class="products__brand--bold">Brand:</span> ${e.brand}</p>
                    <p class="products__category">Category: ${e.category}</p>
                    <p class="products__price">Price: $${e.price}</p>
                </li>`).join("");s.productsList.insertAdjacentHTML("beforeend",o)}function g(t){const e=["All",...t].map(i=>`<li class="categories__item">
   <button class="categories__btn" type="button">${i}</button>
 </li>`).join("");s.categoriesList.innerHTML=e}let y=1;async function E(){try{const t=await p();g(t);const{products:o}=await m(y);_(o)}catch(t){console.log(t)}}async function f(){l()}document.addEventListener("DOMContentLoaded",E);s.productsList.addEventListener("click",f);
//# sourceMappingURL=index.js.map
