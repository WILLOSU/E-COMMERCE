"use client";

import { FilterType } from "@/types/FilterTypes";
import { PriorityTypes } from "@/types/PriorityTypes";
import { ReactNode, createContext, useState } from "react";

export const FilterContext = createContext({
    search: '',
    page: 0,
    type: FilterType.ALL,
    priority: PriorityTypes.NEWS,
    setPriority: (value: PriorityTypes) => {},
    setSearch: (value: string) => {},
    setPage: (value: number) => {},
    setType: (value: FilterType) => {},
})

interface ProviderProps {
    children: ReactNode
}
// assim que aplicação carregar será filtrado pela a popularidade
export function FilterContextProvider({ children }: ProviderProps){
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(0)
    const [type, setType] = useState(FilterType.ALL)
    const [priority, setPriority] = useState(PriorityTypes.POPULARITY)

    return(
        <FilterContext.Provider 
            value={{
                search, 
                page, type, 
                setSearch, 
                setType, 
                setPage,
                priority,
                setPriority
            }}>
            {children}
        </FilterContext.Provider>
    )
}