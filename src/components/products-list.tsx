"use client"


// consome um hook, (ter um map) o hook retorna o card de cada um dos produtos

import { useProducts } from "@/hooks/useProducts"
import { ProductCard } from "./product-card";
import { styled } from "styled-components";

const ListContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 256px);
    grid-gap: 32px;
    max-width: 100%;
   
    margin-top: 32px;
`

export function ProductsList(){
    const { data } = useProducts();
    console.log(data)
    return(
        <ListContainer>
            {data?.map(product => 
            <ProductCard
                key={product.id}
                title={product.name}
                price={product.price}
                image={product.img}
                id={product.id}
            />
            )}
    </ListContainer>
    )
}