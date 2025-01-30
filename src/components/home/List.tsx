"use client"

import { PrimaryInputWSearchIcon } from "../primary-input"
import { useFilter } from "@/hooks/useFilter"
import { InputTextContainer } from "./List.styles"

interface ListProps {}

export function List(props: ListProps) {
    const { setSearch, search } = useFilter();

    return (
        <InputTextContainer>
            <div>
                <PrimaryInputWSearchIcon
                    value={search}
                    handleChange={setSearch}
                    placeholder="Search headphone"
                />
            </div>
        </InputTextContainer>
    )
}
