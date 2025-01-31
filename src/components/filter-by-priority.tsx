// Componente da tela Explorer - botão do filtro

import { styled } from "styled-components"
import { FilterIcon } from "./icons/filter-icon"
//import { Left } from "./icons/left"
import { useState } from "react"
import { useFilter } from "@/hooks/useFilter"
import { PriorityTypes } from "@/types/priority-types"

const FilterContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;

    button {
        border: none;
        background: transparent;
        cursor: pointer;

        font-family: inherit;
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        color: var(--text-dark);

        display: flex;
        align-items: center;
        justify-content: center;

        svg {
            margin-left: 16px;
        }
    }
`

const PriorityFilter = styled.ul`
    position: absolute;
    width: 250px;
    background: #FFFFFF;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding: 12px 16px;
    z-index: 999;

    list-style: none;

    top: 100%;
    right: 8px;

    li {
        color: var(--text-dark);
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        cursor: pointer;
    }

    li + li {
        margin-top: 4px;
    }
`

export function FilterByPriority(){
    const [isOpen, setIsOpen] = useState(false)
    const { setPriority } = useFilter()

    const handleOpen = () => setIsOpen(prev => !prev)

    const handleUpdatePriority = (value: PriorityTypes) => {
        setPriority(value)
        setIsOpen(false)
    }

    return(
        <FilterContainer>
            <button onClick={handleOpen}>
                
                <FilterIcon/>
            </button>
            {isOpen && 
            <PriorityFilter>
                <li onClick={() => handleUpdatePriority(PriorityTypes.POPULARITY)}>Popularity</li>
                <li onClick={() => handleUpdatePriority(PriorityTypes.NEWEST)}>Newest</li>
                <li onClick={() => handleUpdatePriority(PriorityTypes.OLDEST)}>Oldest</li>
                <li onClick={() => handleUpdatePriority(PriorityTypes.HIGH_PRICE)}>High Price</li>
                <li onClick={() => handleUpdatePriority(PriorityTypes.LOW_PRICE)}>Low Price</li>
            </PriorityFilter>
        }
        </FilterContainer>
    )
}