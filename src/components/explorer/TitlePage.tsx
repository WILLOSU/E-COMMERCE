// // Componente da tela Explorer - carrinho de compra

import { CartCount } from "./TitlePage.styles"; 
import { Container } from "./TitlePage.styles"; 
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { CartIcon } from "../icons/cart-icon";
import { useRouter } from "next/navigation";

export function CartControl(){
    const router = useRouter()
    const { value } = useLocalStorage('cart-items', [])

    const handleNavigateToCart = () => {
        router.push("/cart")
    }

    return (
        <Container onClick={handleNavigateToCart}>
            <CartIcon/>
            {value.length > 0 && <CartCount>{value.length}</CartCount>}
        </Container>
    )
}