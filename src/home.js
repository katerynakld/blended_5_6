//Логіка сторінки Home

import {
  getCategories,
  getProducts,
  getProductsByCategory,
} from './js/products-api';

console.log(getCategories());
console.log(getProducts(2));
console.log(getProductsByCategory('beauty'));
