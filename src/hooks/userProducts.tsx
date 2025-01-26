
// usei as libs npm install axios
//              npm install @tanstack/react-query   


import { ProductsFetchResponse } from "@/types/ProductsResponse";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { useFilter } from "./UseFilter";
import {  mountQuery } from "@/utils/GraphqlFilters";
import { useDeferredValue } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;            // coloquei num variável, "garantido" usei desta forma pois tenho certeza que é uma string                            

const fetcher = (query: string): AxiosPromise<ProductsFetchResponse> => { // requisição 
  return axios.post(API_URL,{ query })
}

export function useProducts(){
    const { type, priority, search } = useFilter()
    const searchDeferred = useDeferredValue(search)   // useDeferredValue usuario termina de digitar , p/ realizar a busca
    const query = mountQuery(type, priority)
    const { data } = useQuery({
      queryFn: () => fetcher(query),                         // chave requisição
      queryKey: ['products', type, priority],                // array
      staleTime: 1000 * 60 * 1
    })

    const products =  data?.data?.data?.allProducts   // AXIOS add + um data,
    
    // O 1º data retorna da promise, retiro o duplicado, e tds produtos finais    
    // FILTRO pelos produtos que tenha alguma coisa parecida com o que usuario digitou
    
    const filteredProducts = products?.filter(product => product.name.toLowerCase().includes(searchDeferred.toLowerCase()))
    
    return {
      data: filteredProducts
    }
}