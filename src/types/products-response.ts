import { Product } from "./product"

export interface ProductsFetchResponse {
    data: {
        allProducts: Product[] // array dos produtos
    }
}