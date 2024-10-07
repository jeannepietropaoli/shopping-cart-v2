import { useMemo } from "react";
import useFetch from "./useFetch";

const apiKey = import.meta.env.VITE_API_KEY;

export default function useProducts() {
    const { fetchedData, error, loading } = useFetch("https://api.api-ninjas.com/v1/emoji?subgroup=food_fruit", {"X-Api-Key": apiKey});
    const getFakePrice = () => {
        const minPrice = 1;
        const maxPrice = 8;
        return Math.floor(Math.random() * maxPrice) + minPrice;
      };
    
      const addFakeDetailsToProducts = (products) => {
        return products
          ? products.map((product) => {
              return { ...product, id: product.code, price: getFakePrice() };
            })
          : [];
      };

      const products = useMemo(() => addFakeDetailsToProducts(fetchedData), [fetchedData])

      return { products, error, loading }
}