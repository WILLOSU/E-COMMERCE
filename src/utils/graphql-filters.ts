// montagem da minha query graphql de acordo com os filtros selecionado

import { FilterType } from "@/types/filter-types";
import { PriorityTypes } from "@/types/priority-types";

export function getCategoryByType(type: FilterType){
    if(type == FilterType.ALL) return "all"
    if(type == FilterType.HEADPHONE) return "headphone"
    if(type == FilterType.HEADSET) return "headset"
    return ""
}

export function getFieldByPriority(priority: PriorityTypes){ // retorna field e uma ordem
    if(priority === PriorityTypes.POPULARITY) return {field: "created_at", order: "ASC"}
    if(priority === PriorityTypes.NEWEST)  return {field: "price", order: "ASC"}
    if(priority === PriorityTypes.OLDEST) return {field: "price", order: "ASC"}
    if(priority === PriorityTypes.HIGH_PRICE) return {field: "price", order: "ASC"}
    if(priority === PriorityTypes.LOW_PRICE) return {field: "price", order: "ASC"}


    return {field: "sales", order: "DSC"}
}

export const mountQuery = (type: FilterType, priority: PriorityTypes) => {
    if(type === FilterType.ALL && priority === PriorityTypes.POPULARITY) return `query {
        allProducts(sortField: "sales", sortOrder: "DSC") {
          id
          name
          price
          img
        }
      }
    `
    const sortSettings = getFieldByPriority(priority)
    const categoryFilter = getCategoryByType(type)
    return `
    query {
        allProducts(sortField: "${sortSettings.field}", sortOrder: "${sortSettings.order}", ${categoryFilter ? `filter: { category: "${categoryFilter}"}`: ''}) {
          id
          name
          price
          img
          category
        }
      }
    `
}