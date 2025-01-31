// para fazer a busca na API USEI A BIBLIOTECA tanstack e axios , para 

import { ProductFetchResponse } from "@/types/product";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string; // variável de ambiente NEXT...
// criei um variável API_URL pois tenho certeza que é um string.!!,

// função para bater na API, requisições de post , enviamos no body a query que queremos fazer!.
const fetcher = (productId: string): AxiosPromise<ProductFetchResponse> => {
  return axios.post(API_URL,{ query: `
  query {
    Product(id: "${productId}"){
      name
      category
      price
      details
      img
    }
  }
  ` })
}
// hook ajuda bastante na performace das aplicações
export function useProduct(id: string){
    const { data }  = useQuery({
        queryFn: () => fetcher(id),// queryKey é uma chave que damos para requisição para identificar 
        queryKey: ['product', id], // ela, para salvar no local storage
        enabled: !!id,
        staleTime: 1000 * 60 * 5
    });

    return { // data que retorna é do axios, para garantir o retorno coloque data?.data?, 
        data: data?.data?.data?.Product
    }
}

