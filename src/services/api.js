const BASE_URL = "http://localhost:3000";

export const fetchProducts = async (params = {}) => {
  const query = new URLSearchParams(params).toString();

  const res = await fetch(`${BASE_URL}/products?${query}`);
  return res.json();
};
