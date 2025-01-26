"use client"

// filtragem maior menor / categorias

import { styled } from "styled-components";
import { FilterByType } from '@/components/filter/FilterByType';
import { FilterByPriority } from '@/components/filter/FilterByPriority';

interface FilterBarProps {
   
  }
  

const FilterContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: start;
    justify-content: space-between;
`

export function FilterBar(props : FilterBarProps){
    return(
        <FilterContainer>
            <FilterByType/>
            <FilterByPriority/>
        </FilterContainer>
    )
}