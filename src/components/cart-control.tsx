import { styled } from "styled-components";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { CartIcon } from "./icons/cart-icon";
import { useRouter } from "next/navigation";
import { RodDireita } from "./icons/rod_Direita-icon";
import { RodEsquerda } from "./icons/rod_Esquerda-icon";

const CartCount = styled.span`
    width: 24px;
    height: 24px;
    border-radius: 100%;
    padding: 0 5px;
    font-size: 10px;

    background-color: var(--delete-color);
    color: white;

    margin-left: -10px; //puxando o contador para esquerda
`

const Container = styled.button`
    position: relative;
    cursor: pointer;
    border: none;
    background: transparent;

    display: flex;
    flex-direction: column;
    align-items: center; /* Centraliza o carrinho e as rodas */
`;

const Rodas = styled.div`
    display: flex;
    gap: 4px; /* Espaço entre as rodas */
    margin-top: 2px; /* Ajusta a distância para o carrinho */
`;

export function CartControl(){
    const router = useRouter()
    const { value } = useLocalStorage('cart-items', [])

    const handleNavigateToCart = () => {
        router.push("/cart")
    }

    return (
        <Container onClick={handleNavigateToCart}>
            <CartIcon/>
            <Rodas>
            <RodDireita/>
            <RodEsquerda/>
            </Rodas>
            {value.length > 0 && <CartCount>{value.length}</CartCount>}
            
        </Container>
    )
}