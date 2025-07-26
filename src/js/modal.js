

const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-product');

//----------------- Закриття модалки ----------------------//
function closeModal() {
	modal.classList.remove('modal--is-open');
	// -----------------Видаляємо слухач --------------------------//
	document.removeEventListener('keydown', handleEscPress); 
}

// --------------обробник клавішів коли тиснемо на-ESC ---------------//
function handleEscPress(event) {
	if (event.code === 'Escape') {
		closeModal();
	}
}

// -----------------Відкриття модалки з продуктом---------//
export async function openModal(productId) {
	try {
		const product = await fetchProductById(productId);

		// --------------Рендер  модалки------//
		modalContent.innerHTML = `
      <button class="modal__close-btn">×</button>
      <img class="modal-product__img" src="${product.thumbnail}" alt="${product.title}" />
      <div class="modal-product__content">
        <!-- Інший вміст -->
        <button class="modal-product__wishlist-btn">
          ${getFromStorage('wishlist').includes(product.id) ? 'Remove from Wishlist' : 'Add to Wishlist'}
        </button>
        <button class="modal-product__cart-btn">
          ${getFromStorage('cart').includes(product.id) ? 'Remove from Cart' : 'Add to Cart'}
        </button>
      </div>
    `;
		// ------------Ставимо  слухачів при відкритті------------//
		modal.classList.add('modal--is-open');
		setupModalListeners(product.id);
		document.addEventListener('keydown', handleEscPress); 
	} catch (error) {
		console.error('Error opening modal:', error);
	}
}
// ------------Ставимо всі необхідні слухачі--------------//
function setupModalListeners(productId) {
	// Закриття по кнопці
	modal.querySelector('.modal__close-btn').addEventListener('click', closeModal);

	//---------------Закриття по кліку на бекдроп-----//
	modal.addEventListener('click', (event) => {
		if (event.target === modal) {
			closeModal();
		}
	});

	//-----------Обробники для кнопок-----------//
	modal.querySelector('.modal-product__wishlist-btn').addEventListener('click', () => {
		toggleItemInStorage('wishlist', productId);
		updateWishlistCount();
		// ---------Оновлюємо текст кнопки-------//
		const btn = modal.querySelector('.modal-product__wishlist-btn');
		btn.textContent = getFromStorage('wishlist').includes(productId)
			? 'Remove from Wishlist'
			: 'Add to Wishlist';
	});

	modal.querySelector('.modal-product__cart-btn').addEventListener('click', () => {
		toggleItemInStorage('cart', productId);
		updateCartCount();
		//-------Оновлюємо текст кнопки----------//
		const btn = modal.querySelector('.modal-product__cart-btn');
		btn.textContent = getFromStorage('cart').includes(productId)
			? 'Remove from Cart'
			: 'Add to Cart';
	});
}
