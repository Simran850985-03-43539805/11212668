import axios from 'axios';

// Replace with the actual API URL
const API_URL = 'https://example.com/api';

export const fetchProducts = async (category, company) => {
  try {
    const response = await axios.get(${API_URL}/products, {
      params: { category, company },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};
