import { useEffect, useState } from "react";

import { getProducts } from "@/api/products";

import type { Product } from "@/types/product";


export const useProducts = () => {

  const [products, setProducts] = useState<Product[]>([]);
  
  const [loading, setLoading] = useState(true);

  const [error, setError] = useState<string | null>(null);



  useEffect(() => {

    const fetchProducts = async () => {

      try {

        setLoading(true);

        const data = await getProducts();

        setProducts(data);


      } catch (err) {

        setError(
          err instanceof Error 
          ? err.message 
          : "Ошибка загрузки"
        );

      } finally {

        setLoading(false);

      }

    };


    fetchProducts();


  }, []);



  return {
    products,loading,error
  };
};