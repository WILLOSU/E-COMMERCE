"use client"

import { useFilter } from "@/hooks/useFilter"
import { FilterType } from "@/types/filter-types"
import { styled } from "styled-components"

interface FilterItemProps {
  selected: boolean
}

const FilterList = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 11px;
    list-style: none;
    
`
const FilterItem = styled.button<FilterItemProps>`
    min-width: 107px;
    height: 25px;
    padding: 0px 13px;
    border-radius: 30px;
    opacity: 1;
    border: none;
 

    font-family: inherit;
    font-weight: ${(props) => (props.selected ? "600" : "400")};
    font-size: 14px;
    line-height: 20px;
    text-align: center;

    cursor: pointer;
    background: ${(props) => (props.selected ? "var(--caterogy-list)" : "transparent")};
    color: ${(props) => (props.selected ? "var(--bg-primary)" : "var(--text-dark)")};
    transition: all 0.2s ease;

    &:focus {
        outline: none; /* Remove qualquer borda no foco */
    }

    &:hover {
        background: ${(props) => (props.selected ? "var(--caterogy-list)" : "var(--bg-secondary)")};
    }
`;


export function FilterByType() {
  const { type, setType } = useFilter()

  const handleChangeType = (value: FilterType) => {
    setType(value)
  }

  return (
    <FilterList role="group" aria-label="Filtrar produtos por tipo">
      <FilterItem
        selected={type === FilterType.SHIRT}
        onClick={() => handleChangeType(FilterType.SHIRT)}
        aria-pressed={type === FilterType.SHIRT}
      >
        Headphone
      </FilterItem>
      <FilterItem
        selected={type === FilterType.MUG}
        onClick={() => handleChangeType(FilterType.MUG)}
        aria-pressed={type === FilterType.MUG}
      >
       
        Headset
      </FilterItem>
    </FilterList>
  )
}

