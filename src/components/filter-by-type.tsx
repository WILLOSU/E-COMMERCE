"use client"

import { useFilter } from "@/hooks/useFilter"
import { FilterType } from "@/types/filter-types"
import { styled } from "styled-components"

interface FilterButtonProps {
    selected: boolean;
    onClick: () => void;
    children: React.ReactNode;
}

const FilterContainer = styled.div`
   display: flex;
    flex-direction: row; /* Agora os botões ficam lado a lado */
   
    gap: 10px; /* Espaço entre os botões */
    width: fit-content; /* Para não ocupar a largura toda */
`;

const SeeAllButton = styled.button`
    background: none;
    border: none;
    font-size: 14px;
    font-weight: bold;
    color: white;
    cursor: pointer;
    align-self: flex-end;
    margin-top: 20px;
`;

const Button = styled.button<FilterButtonProps>`
    padding: 5px 20px;
    border-radius: 20px;
    border: none;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    background: ${({ selected }) => (selected ? "#0ACF83" : "#F6F6F6")};
    color: ${({ selected }) => (selected ? "white" : "#7F7F7F")};
    transition: background 0.3s ease, color 0.3s ease;
    text-align: left;
    display: flex;

    &:hover {
        opacity: 0.8;
    }


    @media(min-width: ${props => props.theme.desktopBreakpoint}){
        font-size: 16px;
        line-height: 22px;
    }
`;

const FilterButton: React.FC<FilterButtonProps> = ({ selected, onClick, children }) => {
    return (
        <Button selected={selected} onClick={onClick}>
            {children}
        </Button>
    );
};




export function FilterByType(){
    const { type, setType } = useFilter();

    const handleChangeType = (value: FilterType) => {
        setType(value)
    }

   

    return (
        <div>
            {/* Botões na vertical */}
            <FilterContainer>
                <FilterButton 
                    selected={type === FilterType.HEADPHONE} 
                    onClick={() => handleChangeType(FilterType.HEADPHONE)}
                >
                    Headphone
                </FilterButton>
                
                <FilterButton 
                    selected={type === FilterType.HEADSET} 
                    onClick={() => handleChangeType(FilterType.HEADSET)}
                >
                    Headset
                </FilterButton>
            </FilterContainer>
    
            {/* Banner */}
           
                {/* Conteúdo do banner */}
           
    
            {/* See All alinhado à direita */}
            <SeeAllButton onClick={() => handleChangeType(FilterType.ALL)}>
                See All
            </SeeAllButton>
        </div>
    );
}   
