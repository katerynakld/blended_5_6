import { handleProductClick, initHomePage } from './js/handlers';
import { refs } from './js/refs';

document.addEventListener('DOMContentLoaded', initHomePage);
refs.productsList.addEventListener('click', handleProductClick);
