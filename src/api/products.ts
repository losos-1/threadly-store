import type {Product} from '@/types/product'

export const getProducts = async (): Promise<Product[]> => {

  const response = await fetch(
    '/products.json'
  );


  if (!response.ok) {
    throw new Error(
      "Ошибка загрузки товаров"
    );
  }


  return response.json();

};