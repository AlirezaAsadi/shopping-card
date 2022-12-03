import axios from 'axios';
import { IGetProductsResponse } from 'models';

export const getProducts = async () => {
  let response: IGetProductsResponse;

  response = await axios.get(
    '/products.json'
  );
  const { products } = response.data || [];

  return products;
};
