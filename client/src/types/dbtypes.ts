export interface ICollection {
    name: string;
    path: string;
    categories: ICategory[];
}

export interface ICategory {
    name: string;
    path: string;
    products: IProduct[];
}

export interface IProduct {
    name: string;
    price: number;
    images: string[];
}
