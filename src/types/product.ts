export interface Product {
    id: string;
    name: string;
    category?: string;
    price: number; 
    img: string;
    reviews?: string;
    
}

export interface ProductInCart extends Product {
    quantity: number;
}

export interface ProductFetchResponse {
    data: {
        Product: Product;
    };
}
