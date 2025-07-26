
export function renderProducts(products) {
    const productsContainer = document.querySelector('.products');
    productsContainer.innerHTML = '';

    const markup = products
        .map(
            product =>`
                <li class="products__item" data-id="${product.id}">
                    <img class="products__image" src="${product.thumbnail}" alt="${product.title}" />
                    <p class="products__title">${product.title}</p>
                    <p class="products__brand"><span class="products__brand--bold">Brand:</span> ${product.brand}</p>
                    <p class="products__category">Category: ${product.category}</p>
                    <p class="products__price">Price: $${product.price}</p>
                </li>`
        )
        .join('');
    
    productsContainer.insertAdjacentHTML('beforeend', markup);
}

function renderCategories(categories) {
    const categoriesList = document.querySelector(".categories");
    const markup = categories.map(category => {
        return `<li class="categories__item">
   <button class="categories__btn" type="button"></button>
 </li>;`
    }).join('');
    categoriesList.innerHTML = markup;
}
export function saveToLocalStorage(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.log(error);
    }
}

export function getFromLocalStorage(key) {
    try {
        const data = localStorage.getItem(key);
        return JSON.parse(data);
    } catch (error) {
        console.log(error);
    }
}

export function removeFromLocalStorage(key) {
    try {
        localStorage.removeItem(key);
    } catch (error) {
        console.log(error);
}
}