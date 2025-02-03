import { Product } from "./product";  // Corrigir o caminho se necessário

export interface ProductsFetchResponse {
  data: {
    products: Product[];  // Corrigir o tipo do array de produtos
  };
}
