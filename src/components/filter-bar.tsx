"use client"

import { styled } from "styled-components";
import { FilterByType } from "./filter-by-type";
import { FilterByPriority } from "./filter-by-priority";

interface FilterBarProps {

}

const FilterContainer = styled.div`
    display: flex;
    flex-direction: column; /* Deixa os botões na vertical */
    gap: 10px; /* Espaço entre os botões */
    width: fit-content; /* Para não ocupar a largura toda */

`

export function FilterBar(props : FilterBarProps){
    return(
        <FilterContainer>
            <FilterByType/>
            <FilterByPriority/>
        </FilterContainer>
    )
}