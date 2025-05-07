export interface ICollection {
    name: string;
    path: string;
    banner: string;
    categories: ICategory[];
}

export interface ICategory {
    name: string;
    path: string;
    banner: string;
    products: IProduct[];
}

export interface IProduct {
    name: string;
    price: number;
    path: string;
    images: string[];
    available: boolean;
    description: string;
    composition: string;
    sizes: string[];
    type: string[];
    color: string[];
}
