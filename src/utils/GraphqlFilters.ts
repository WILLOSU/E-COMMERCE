import { FilterType } from "@/types/FilterTypes";
import { PriorityTypes } from "@/types/PriorityTypes";

export function getCategoryByType(type: FilterType): string {
  if (type === FilterType.ALL) return "all";               // Todos os itens
  if (type === FilterType.HEADSETS) return "headsets";     // Headsets
  if (type === FilterType.HEADPHONES) return "headphones"; // Fones de ouvido
  if (type === FilterType.SPEAKERS) return "speakers";     // Caixas de som
  if (type === FilterType.EARBUDS) return "earbuds";       // Fones intra-auriculares

  // Caso padrão, se o tipo não for reconhecido
  return "";
}


export function getFieldByPriority(priority: PriorityTypes) {
  if (priority === PriorityTypes.NEWS) return { field: "created_at", order: "ASC" };    // Novidades
  if (priority === PriorityTypes.POPULARITY) return { field: "sales", order: "DESC" };  // Mais vendidos
  if (priority === PriorityTypes.NEWEST) return { field: "created_at", order: "DESC" }; // Mais recente
  if (priority === PriorityTypes.OLDEST) return { field: "created_at", order: "ASC" };  // Mais antigo
  if (priority === PriorityTypes.HIGH_PRICE) return { field: "price", order: "DESC" };  // Maior preço
  if (priority === PriorityTypes.LOW_PRICE) return { field: "price", order: "ASC" };    // Menor preço


  return { field: "sales", order: "DESC" };
}

// por default busca dos mais populares, só acontece se tiver com o nosso valor default la do nosso estado

export const mountQuery = (type: FilterType, priority: PriorityTypes) => { 
    if(type === FilterType.ALL && priority === PriorityTypes.POPULARITY) return `query {
        allProducts(sortField: "sales", sortOrder: "DESC") {
          id
          name
          price
          img
          category
        }
      }
    `

    // caso meu usuário não esteja nos valores defalut cai no else, função que defini qual é a categoria
    // e o filtro aplicado através do valor que foi escolhido lá do meu estado!

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