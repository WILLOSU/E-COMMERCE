
/* Pesquisa dos it*/

import { InputHTMLAttributes } from "react";
import { styled } from "styled-components";
import { SearchIcon } from "./icons/search-icon";



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
`

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
`
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