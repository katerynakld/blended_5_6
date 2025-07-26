import axios from 'axios';

import { API_BASE_URL, API_ENDPOINTS } from './constants';

axios.defaults.baseURL = API_BASE_URL;

export async function getCategories() {
  const { data } = await axios.get(API_ENDPOINTS.CATEGORIES);
  return data;
}

export async function getProducts(page) {
  const { data } = await axios.get(`${API_ENDPOINTS.PRODUCTS}`, {
    params: { page },
  });

  return data;
}

export async function getProductsByCategory(category) {
  const { data } = await axios.get(
    `${API_ENDPOINTS.PRODUCTS_BY_CATEGORY}${category}`
  );

  return data;
}

