"use client"

import { useProducts } from '@/hooks/UserProducts'
import { ProductCard } from '@/components/products/ProductCard'
import { styled } from "styled-components";

// Esltilos dos Grides 
const ListContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 256px);   // auto fill, pedende do espaço da tela
    grid-gap: 32px;                                    // espaçamento  entre os elementos
    max-width: 100%;                        // respeita o tamanho máximo do pai dele                                

    margin-top: 32px;                      // espaçamento entre as imagens vertical
`

export function ProductsList(){
    const { data } = useProducts();
    return(
        <ListContainer>
            {data?.map(product => 
            <ProductCard
                key={product.id}
                title={product.name}
                price={product.price_in_cents}
                image={product.image_url}
                id={product.id}
            />
            )}
    </ListContainer>
    )
}