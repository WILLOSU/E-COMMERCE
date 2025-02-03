"use client"

import { useProducts } from "@/hooks/useProduct";

interface ProductsListProps{

}


export function ProductsList(props : ProductsListProps){
    const { data } = useProducts();
    console.log(data)
    return(
        <></>
        
    )
}