import { InputHTMLAttributes } from "react";
import { styled } from "styled-components";
import { SearchIcon } from "./icons/search-icon";

export const PrimaryInput = styled.input`
    width: 100%;
    border-radius: 8px;
    border: none;
    padding: 10px 56px;

    background-color: var(--bg-secondary);

    font-family: inherit;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    color: var(--text-dark);

    @media(min-width: ${props => props.theme.desktopBreakpoint}){
        font-size: 14px;
        line-height: 22px;
    }
`

const InputContainer = styled.div`
    position: relative;
    width: 250px;

    svg {
        position: absolute;
        left: 20px;
        top: 50%;
        transform: translateY(-50%);// usado para ficar bem no centro eixo Y
    }

    @media(min-width: ${props => props.theme.desktopBreakpoint}){
        width: 352px;
    }
`
// tipagem que o react criou para este tipo
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    value: string,
    handleChange: (value: string ) => void
}

export function PrimaryInputWSearchIcon(props: InputProps){
    return (
        <InputContainer>
            <PrimaryInput 
                onChange={(event) => props.handleChange(event.target.value)} 
                {...props}
            />
            <SearchIcon/>
        </InputContainer>
    )
}