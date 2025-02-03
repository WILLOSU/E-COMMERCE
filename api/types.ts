// types.ts
export interface Review {
    userId: string;
    userName: string;
    rating: number;
    comment: string;
    postedAt: string;
  }
  
  export interface Product {
    id: string;
    name: string;
    category: string;
    price: number;
    details: string;
    img: string;
    reviews: Review[];
    popularity: number;
    createdAt: string;
  }