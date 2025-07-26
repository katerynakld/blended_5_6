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