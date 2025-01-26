import { Product } from "./Product"

export interface ProductsFetchResponse {
    data: {
        allProducts: Product[] // array dos produtos
    }
}