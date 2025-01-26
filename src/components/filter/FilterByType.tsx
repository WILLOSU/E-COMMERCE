"use client"

// filtragem por tipo de produtos

import { useFilter } from "@/hooks/UseFilter"
import { FilterType } from "@/types/FilterTypes"
import { styled } from "styled-components"

interface FilterItemProps {
    selected: boolean
}

const FilterList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    list-style: none;
`

const FilterItem = styled.li<FilterItemProps>`
    font-family: inherit;
    font-weight: ${props => props.selected ? '600' : '400'};
    font-size: 12px;
    line-height: 18px;
    text-align: center;
    text-transform: uppercase;
    cursor: pointer;

    color: var(--text-dark);

    border-bottom: ${props => props.selected ? '4px solid var(--orange-low);' : ''};

    @media(min-width: ${props => props.theme.desktopBreakpoint}) {
        font-size: 16px;
        line-height: 22px;
    }
`

export function FilterByType(){
    const { type, setType } = useFilter();

    const handleChangeType = (value: FilterType) => { // recebe valor por parametro
        setType(value)
    }

    return (
        <FilterList>
            <FilterItem 
                selected={type === FilterType.ALL}
                onClick={() => handleChangeType(FilterType.ALL)}
            >
                Todos os produtos
            </FilterItem>
            <FilterItem 
                selected={type === FilterType.HEADSETS} 
                onClick={() => handleChangeType(FilterType.HEADSETS)}
            >
                Headsets
            </FilterItem>
            <FilterItem 
                selected={type === FilterType.HEADPHONES} 
                onClick={() => handleChangeType(FilterType.HEADPHONES)}
            >
                Fones de ouvido
            </FilterItem>
            <FilterItem 
                selected={type === FilterType.SPEAKERS} 
                onClick={() => handleChangeType(FilterType.SPEAKERS)}
            >
                Caixas de som
            </FilterItem>
            <FilterItem 
                selected={type === FilterType.EARBUDS} 
                onClick={() => handleChangeType(FilterType.EARBUDS)}
            >
                Fones intra-auriculares
            </FilterItem>
        </FilterList>
    )
}    