import { refs } from './refs';

function closeModal() {
  refs.modal.classList.remove('modal--is-open');
  document.body.style.overflow = '';
  document.removeEventListener('keydown', handleEscPress);
}

function handleEscPress(event) {
  if (event.code === 'Escape') {
    closeModal();
  }
}

// -----------------Відкриття модалки з продуктом---------//
export async function openModal() {
  refs.modal.classList.add('modal--is-open');
  document.body.style.overflow = 'hidden';
  document.addEventListener('keydown', handleEscPress);
}
// ------------Ставимо всі необхідні слухачі--------------//
// function setupModalListeners(productId) {
//   // Закриття по кнопці
//   modal
//     .querySelector('.modal__close-btn')
//     .addEventListener('click', closeModal);

//   //---------------Закриття по кліку на бекдроп-----//
//   modal.addEventListener('click', event => {
//     if (event.target === modal) {
//       closeModal();
//     }
//   });

//   //-----------Обробники для кнопок-----------//
//   modal
//     .querySelector('.modal-product__wishlist-btn')
//     .addEventListener('click', () => {
//       toggleItemInStorage('wishlist', productId);
//       updateWishlistCount();
//       // ---------Оновлюємо текст кнопки-------//
//       const btn = modal.querySelector('.modal-product__wishlist-btn');
//       btn.textContent = getFromStorage('wishlist').includes(productId)
//         ? 'Remove from Wishlist'
//         : 'Add to Wishlist';
//     });

//   modal
//     .querySelector('.modal-product__cart-btn')
//     .addEventListener('click', () => {
//       toggleItemInStorage('cart', productId);
//       updateCartCount();
//       //-------Оновлюємо текст кнопки----------//
//       const btn = modal.querySelector('.modal-product__cart-btn');
//       btn.textContent = getFromStorage('cart').includes(productId)
//         ? 'Remove from Cart'
//         : 'Add to Cart';
//     });
// }
