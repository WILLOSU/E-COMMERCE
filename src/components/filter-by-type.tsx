"use client"

import { useFilter } from "@/hooks/useFilter"
import { FilterType } from "@/types/filter-types"
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
    //text-transform: uppercase;
    cursor: pointer;

    color: var(--text-dark);

    border-bottom: ${props => props.selected ? '4px solid var(--category-list);' : ''}

    @media(min-width: ${props => props.theme.desktopBreakpoint}){
        font-size: 16px;
        line-height: 22px;
    }
`

export function FilterByType(){
    const { type, setType } = useFilter();

    const handleChangeType = (value: FilterType) => {
        setType(value)
    }

    return(
        <FilterList>
            <FilterItem 
                selected={type === FilterType.ALL}
                onClick={() => handleChangeType(FilterType.ALL)}
            >
                All
            </FilterItem>
            <FilterItem 
                selected={type === FilterType.HEADPHONE} 
                onClick={() => handleChangeType(FilterType.HEADPHONE)}
            >
                Headphone
            </FilterItem>
            <FilterItem 
                selected={type === FilterType.HEADSET} 
                onClick={() => handleChangeType(FilterType.HEADSET)}
            >
                Headset
            </FilterItem>
        </FilterList>
    )
}