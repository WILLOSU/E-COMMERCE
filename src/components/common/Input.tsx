
/* Pesquisa dos it*/

import { InputHTMLAttributes } from "react";
import { styled } from "styled-components";
import { SearchIcon } from '@/components/icons/SearchIcon';



// retângulo de pesquisa
export const PrimaryInput = styled.input`
    width: 326px;
    height: 45;
    top: 114px;
    left: 24;
    border-radius: 10px;
    border: 1px solid var(--text-dark);

    padding: 15px 15px 15px 60px;
    gap: 12px;

    background-color: var(--bg-secondary);

    font-family: DM Sans;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: var(--text-dark);

 /* Ajuste para telas maiores que ${ props => props.theme.desktopBreakpoint}px (tablets e acima) */
 @media (min-width: ${ props => props.theme.desktopBreakpoint}px) {
        width: 380px; /* Ajusta a largura para telas maiores */
        font-size: 16px; /* Aumenta o tamanho da fonte */
    }

    /* Ajuste para telas maiores que 1024px (desktops) */
    @media (min-width: 1024px) {
        width: 420px; /* Ajusta ainda mais a largura para telas grandes */
        font-size: 18px; /* Aumenta o tamanho da fonte */
    }
`;

const InputContainer = styled.div`
    position: relative;
    width: 326px;
         
    // lupa
    svg {
        position: absolute;
        left: 20px;
        top: 50%;
        transform: translateY(-50%); // Y = para ficar na vertical e  centralizado
    }
 /* Ajustes para telas maiores */
    @media (min-width: ${ props => props.theme.desktopBreakpoint}px) {
        width: 380px; /* Ajusta a largura para telas médias */
    }

    @media (min-width: 1024px) {
        width: 420px; /* Ajusta para telas grandes */
    }
`;

// nova interface para extender as props comuns
// passando por generics html - inputElment , precisa importar

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    value: string,
    handleChange: (value: string ) => void
}

export function PrimaryInputWSearchIcon(props: InputProps){
    return (
        <InputContainer>
            <PrimaryInput 
                 onChange={(event) => props.handleChange(event.target.value)}
                {...props} // Operador ...props 
                 // pegando tudo que tem dentro copiando e passando para o primary imputy 
            />
            <SearchIcon/>
        </InputContainer>
    )
}