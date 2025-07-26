import axios from 'axios';

const BASE_URL = 'https://dummyjson.com/products'

export async function fetchProducts(page = 1, limit = 12) {
    const response = await axios.get(`${BASE_URL}?page=${page}&limit=${limit}`);
    return response.data;
}