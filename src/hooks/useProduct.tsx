import axios, { AxiosPromise } from "axios";
import { useQuery } from "@tanstack/react-query";
import { ProductFetchResponse } from "@/types/product"; // Corrigido para o nome correto da interface

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

// Corrigido o nome do tipo de resposta para `ProductFetchResponse`
const fetcher = (): AxiosPromise<ProductFetchResponse> => {
  return axios.post(
    API_URL,
    {
      query: `query {
          products {
            name
            id
            price
            img
          }
      }`
    }
  );
};

export function useProducts() {
  // Corrigido o erro de sintaxe e falta da palavra-chave `const`
  const { data } = useQuery({
    queryFn: fetcher,
    queryKey: ['products']
  });

  return {
    
    data: data?.data?.data.products
  };
}
