import type {Product} from '@/types/product'

export const getProducts = async (): Promise<Product[]> => {

  const response = await fetch(
    "http://localhost:3000/products"
  );


  if (!response.ok) {
    throw new Error(
      "Ошибка загрузки товаров"
    );
  }


  return response.json();

};